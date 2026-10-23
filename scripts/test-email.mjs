#!/usr/bin/env node
/**
 * Verifies REAL email delivery through Resend, independent of the running site.
 *
 *   node scripts/test-email.mjs        (or: npm run test:email)
 *
 * Reads RESEND_API_KEY / CONTACT_RECIPIENT_EMAIL / CONTACT_FROM_EMAIL from
 * .env.local (or .env, or the process environment) and sends one real message.
 * Exit code 0 = provider accepted the message for delivery.
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvFile(file) {
  if (!existsSync(file)) return {};
  const out = {};
  for (const raw of readFileSync(file, "utf8").split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

const root = process.cwd();
const env = {
  ...loadEnvFile(resolve(root, ".env.local")),
  ...loadEnvFile(resolve(root, ".env")),
  ...process.env,
};

const apiKey = env.RESEND_API_KEY?.trim();
const to = env.CONTACT_RECIPIENT_EMAIL?.trim() || "shameernadeem@gmail.com";
const from = env.CONTACT_FROM_EMAIL?.trim() || "Portfolio Contact <onboarding@resend.dev>";

if (!apiKey) {
  console.error("FAIL  RESEND_API_KEY is not set. Add it to .env.local (see .env.example).");
  process.exit(1);
}

console.log("Sending a real test email via Resend...");
console.log(`  from: ${from}`);
console.log(`  to  : ${to}`);

try {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: "Portfolio contact form — delivery test",
      text: "Test message from scripts/test-email.mjs. If you received this, contact-form delivery is configured correctly.",
    }),
    signal: AbortSignal.timeout(15000),
  });

  const body = await res.text();

  if (res.ok) {
    console.log(`PASS  Resend accepted the message for delivery (HTTP ${res.status}).`);
    console.log(`      ${body}`);
    console.log(`      Now check the inbox (and spam folder) for ${to}.`);
  } else {
    console.error(`FAIL  Resend rejected the request (HTTP ${res.status}).`);
    console.error(`      ${body}`);
    process.exit(1);
  }
} catch (err) {
  console.error("FAIL  Could not reach Resend:", err.message);
  process.exit(1);
}
