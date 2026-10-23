"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type Status = "idle" | "sending" | "sent" | "not-configured" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const body = String(data.get("message") ?? "").trim();
    const honeypot = String(data.get("company") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (name.length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      nextErrors.email = "Please enter a valid email address.";
    if (body.length < 10)
      nextErrors.message = "A little more detail helps (10 characters minimum).";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: body, company: honeypot }),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        delivered?: boolean;
        reason?: string;
        error?: string;
      };

      if (response.ok && payload.ok && payload.delivered) {
        setStatus("sent");
        setMessage(
          "Thanks — your message is on its way. I'll reply to your email soon.",
        );
        form.reset();
        return;
      }

      if (response.status === 503 || payload.reason === "not_configured") {
        setStatus("not-configured");
        setMessage(
          "Online messages aren't connected yet. Please email me directly and I'll reply as soon as I can.",
        );
        return;
      }

      setStatus("error");
      setMessage(
        payload.error ?? "Something went wrong. Please email me directly instead.",
      );
    } catch {
      setStatus("error");
      setMessage(
        "The message could not be sent. Please email me directly instead.",
      );
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-b border-line py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="shell">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              index="08"
              eyebrow="Contact"
              title={
                <span id="contact-heading">
                  Let&apos;s create something meaningful.
                </span>
              }
              description="If you need campaign artwork, print-ready design or a website layout — send a short brief and I'll tell you honestly whether I'm a good fit."
            />

            <a
              href={`mailto:${site.email}`}
              className="group mt-10 flex items-center justify-between gap-6 border border-line bg-ink-soft px-6 py-6 transition-colors duration-500 hover:border-gold/60"
            >
              <span className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-gold" strokeWidth={1.4} aria-hidden="true" />
                <span>
                  <span className="block font-sans text-[10px] uppercase tracking-[0.28em] text-muted-dim">
                    Email
                  </span>
                  <span className="mt-1 block font-display text-lg text-paper">
                    {site.email}
                  </span>
                </span>
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-gold">
                Copy / open
              </span>
            </a>

            <p className="mt-4 text-[12px] leading-relaxed text-muted-dim">
              Messages sent through the form go straight to this inbox.
            </p>

            <ul className="mt-10 space-y-4 border-t border-line pt-8 text-[14px] text-muted">
              <li>
                <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-muted-dim">
                  Response
                </span>
                <span className="mt-1 block">
                  Briefs, freelance projects and remote roles — all welcome.
                </span>
              </li>
              <li>
                <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-muted-dim">
                  Working from
                </span>
                <span className="mt-1 block">{site.locationNote}</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border border-line bg-ink-soft p-6 sm:p-9"
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold">
                Send a message
              </p>

              <div className="mt-8 space-y-6">
                <Field
                  label="Your name"
                  name="name"
                  error={errors.name}
                  autoComplete="name"
                  placeholder="Jane Doe"
                />
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  error={errors.email}
                  autoComplete="email"
                  placeholder="jane@company.com"
                />

                <label className="block">
                  <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-muted-dim">
                    Project details
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="A few lines about the project, timeline and deliverables."
                    aria-invalid={Boolean(errors.message)}
                    className="mt-3 w-full resize-none border border-line bg-ink px-4 py-3 text-[14px] text-paper placeholder:text-muted-dim focus:border-gold focus:outline-none"
                  />
                  {errors.message ? (
                    <span className="mt-2 block text-[12px] text-gold-soft">
                      {errors.message}
                    </span>
                  ) : null}
                </label>

                {/* Honeypot — hidden from users, bots fill it in. */}
                <div className="hidden" aria-hidden="true">
                  <label>
                    Company
                    <input
                      type="text"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-gold px-7 py-4 font-sans text-[12px] uppercase tracking-[0.24em] text-ink transition-colors duration-300 hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : status === "sent" ? (
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Send className="h-4 w-4" aria-hidden="true" />
                )}
                {status === "sending" ? "Sending" : "Send message"}
              </button>

              <p aria-live="polite" className="mt-4 text-[12px] leading-relaxed">
                {status === "sent" ? (
                  <span className="text-gold">{message}</span>
                ) : status === "error" || status === "not-configured" ? (
                  <span className="text-paper-dim">
                    {message}{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="link-underline text-gold"
                    >
                      {site.email}
                    </a>
                  </span>
                ) : (
                  <span className="text-muted-dim">
                    Your details are only used to reply to your inquiry.
                  </span>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-muted-dim">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className="mt-3 w-full border border-line bg-ink px-4 py-3 text-[14px] text-paper placeholder:text-muted-dim focus:border-gold focus:outline-none"
      />
      {error ? (
        <span className="mt-2 block text-[12px] text-gold-soft">{error}</span>
      ) : null}
    </label>
  );
}
