/**
 * Server-only transactional email delivery for the contact form.
 *
 * Uses Resend's HTTP API (https://resend.com) so no extra dependency or SMTP
 * socket is needed — a plain `fetch` works in the Node runtime and keeps the
 * API key on the server. Never import this module from a Client Component.
 *
 * Required env vars (see .env.example):
 *   RESEND_API_KEY            Server-only key from https://resend.com/api-keys
 *   CONTACT_RECIPIENT_EMAIL   Inbox that receives inquiries.
 *                             Defaults to shameernadeem@gmail.com
 *   CONTACT_FROM_EMAIL        Optional verified sender, e.g.
 *                             "Portfolio <hello@yourdomain.com>".
 *                             Defaults to Resend's shared test sender, which can
 *                             only deliver to the Resend account's own address.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const TIMEOUT_MS = 10_000;

export const DEFAULT_RECIPIENT = "shameernadeem@gmail.com";
const DEFAULT_FROM = "Portfolio Contact <onboarding@resend.dev>";

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY?.trim());
}

export function getContactRecipient(): string {
  return process.env.CONTACT_RECIPIENT_EMAIL?.trim() || DEFAULT_RECIPIENT;
}

function getFromAddress(): string {
  return process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export type ContactInput = {
  name: string;
  email: string;
  message: string;
  userAgent?: string | null;
};

export type SendResult =
  | { ok: true; id: string }
  | { ok: false; status: number; error: string };

/**
 * Hands the inquiry to the email provider. `ok: true` means the provider has
 * ACCEPTED the message for delivery (it returns a message id) — not merely that
 * the request was parsed. Callers must only surface success when `ok` is true.
 */
export async function sendContactEmail(input: ContactInput): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return {
      ok: false,
      status: 503,
      error: "Email delivery is not configured.",
    };
  }

  const { name, email, message, userAgent } = input;
  const recipient = getContactRecipient();
  const receivedAt = new Date().toUTCString();

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#101012;line-height:1.6">
      <h2 style="margin:0 0 16px;font-size:18px">New portfolio inquiry</h2>
      <p style="margin:0 0 4px"><strong>Name:</strong> ${safeName}</p>
      <p style="margin:0 0 4px"><strong>Email:</strong> ${safeEmail}</p>
      <p style="margin:0 0 16px"><strong>Received:</strong> ${escapeHtml(receivedAt)}</p>
      <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0" />
      <p style="margin:0;white-space:normal">${safeMessage}</p>
    </div>
  `.trim();

  const text = [
    "New portfolio inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Received: ${receivedAt}`,
    userAgent ? `User agent: ${userAgent}` : "",
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  let response: Response;
  try {
    response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: getFromAddress(),
        to: [recipient],
        reply_to: email,
        subject: `New inquiry from ${name}`,
        text,
        html,
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch {
    return {
      ok: false,
      status: 502,
      error:
        "The email service is unreachable right now. Please email me directly instead.",
    };
  }

  if (!response.ok) {
    return {
      ok: false,
      status: 502,
      error: "The message could not be sent. Please email me directly instead.",
    };
  }

  const data = (await response.json().catch(() => ({}))) as { id?: string };
  return { ok: true, id: data.id ?? "accepted" };
}
