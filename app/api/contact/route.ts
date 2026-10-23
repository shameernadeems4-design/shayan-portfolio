import { NextResponse } from "next/server";
import { getSupabaseAdmin, isSupabaseConfigured } from "@/lib/supabase";
import { isEmailConfigured, sendContactEmail } from "@/lib/email";

export const runtime = "nodejs";

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

/**
 * Very small in-memory rate limiter. Enough to blunt casual spam on a
 * single-instance deployment; use Upstash/Redis for anything serious.
 */
const submissions = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter(
    (time) => now - time < WINDOW_MS,
  );
  recent.push(now);
  submissions.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many messages sent. Please try again shortly." },
      { status: 429 },
    );
  }

  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = asString(payload.name);
  const email = asString(payload.email);
  const message = asString(payload.message);
  const honeypot = asString(payload.company);

  // Bot caught by the honeypot: drop it silently. `delivered: false` makes sure
  // the UI never reports success for a submission that was not sent anywhere.
  if (honeypot.length > 0) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 120) errors.name = "Invalid name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = "Invalid email address.";
  if (message.length < 10 || message.length > 4000)
    errors.message = "Message must be between 10 and 4000 characters.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields.", errors },
      { status: 422 },
    );
  }

  // Email delivery is the primary path. Without it we cannot deliver anything,
  // so we must NOT report success.
  if (!isEmailConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        reason: "not_configured",
        error: "Email delivery is not configured yet.",
      },
      { status: 503 },
    );
  }

  const result = await sendContactEmail({
    name,
    email,
    message,
    userAgent: request.headers.get("user-agent"),
  });

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error },
      { status: result.status },
    );
  }

  // Secondary, best-effort archive. The message has already been accepted for
  // delivery above, so a storage failure must never turn success into failure.
  if (isSupabaseConfigured()) {
    const supabase = getSupabaseAdmin();
    if (supabase) {
      try {
        const { error } = await supabase.from("contact_messages").insert({
          name,
          email,
          message,
          source: "portfolio",
          user_agent: request.headers.get("user-agent")?.slice(0, 300) ?? null,
        });
        if (error) {
          console.error("contact: archive insert failed:", error.message);
        }
      } catch (err) {
        console.error("contact: archive insert threw:", err);
      }
    }
  }

  return NextResponse.json({ ok: true, delivered: true, id: result.id });
}
