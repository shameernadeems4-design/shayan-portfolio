# Shayan Nadeem — Portfolio

A single-page portfolio website for **Shayan Nadeem**, Graphic Designer & Printing
Designer, plus a detail page for every project. Built with Next.js 16, React 19,
TypeScript and Tailwind CSS v4.

Every project in this portfolio is a **self-initiated concept**. No fictional
clients, dates, awards or testimonials are presented as real work.

---

## Features

- **One-page home**: hero, tools & skills, services, three portfolio sections
  (graphic / print / web) with category filters, about, contact.
- **Project detail pages** at `/work/[slug]` with cover, overview, scope,
  palette swatches, gallery, and previous / next navigation.
- **Artwork is generated in-repo** as SVG (see `public/projects/**`), so there
  are no third-party image dependencies or licensing issues.
- **Accessible by default**: skip link, semantic landmarks, keyboard-friendly
  mobile menu, `aria-labelledby` sections, focus-visible rings, and animations
  that respect `prefers-reduced-motion`.
- **Contact form that emails you.** Submissions are delivered to your inbox
  server-side through [Resend](https://resend.com) (`lib/email.ts`), with an
  optional Supabase copy for record-keeping. Until `RESEND_API_KEY` is set, the
  form gracefully falls back to showing the email address instead of pretending
  to send.
- **SEO ready**: per-page metadata, Open Graph image, `sitemap.xml` and
  `robots.txt`.

## Tech stack

| Area       | Choice                                      |
| ---------- | ------------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)          |
| Runtime    | React 19                                    |
| Language   | TypeScript                                  |
| Styling    | Tailwind CSS v4 (`@tailwindcss/turbopack`)  |
| Icons      | `lucide-react`                              |
| Backend    | Resend (contact form email) + optional Supabase |

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

### Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server (Turbopack)     |
| `npm run build` | Production build                     |
| `npm start`     | Serve the production build           |
| `npm run lint`  | Run ESLint                           |
| `npm run test:email` | Send a real test email via Resend (needs `.env.local`)

> On Windows PowerShell, if `npm` is blocked by the execution policy, use
> `npm.cmd run build` instead.

## Project structure

```
app/
  layout.tsx            Root layout (fonts, nav, footer, metadata)
  page.tsx              Home page — composes all sections
  globals.css           Tailwind v4 theme tokens + utilities
  work/[slug]/page.tsx  Project detail page
  api/contact/route.ts  Contact form endpoint (Resend email + optional Supabase)
  sitemap.ts, robots.ts, icon.svg, opengraph-image.tsx
components/             Section and UI components
data/
  site.ts               Site copy, navigation, services, tools
  projects.ts           All 16 projects (single source of truth)
lib/
  supabase.ts           Server-only Supabase client (optional archive)
  email.ts              Server-only Resend email delivery
public/projects/        Generated SVG artwork
supabase/schema.sql     Optional contact_messages table + RLS
```

## Editing content

- **Copy, navigation, services, tools, socials** → `data/site.ts`
- **Projects, categories, filters, palettes** → `data/projects.ts`
- **Colours, fonts, spacing utilities** → `app/globals.css` (the `@theme` block)

To add a project, append an object to `projects` in `data/projects.ts`, add a
cover and gallery SVG under `public/projects/<discipline>/`, and it will appear
in the right section, filter set, sitemap and detail routes automatically.

## Customising before launch

1. Replace the placeholder email in `data/site.ts` (`site.email`).
2. Add your real social URLs in `data/site.ts` (`site.socials`). Empty strings
   are hidden everywhere — no dead links are rendered.
3. Set `NEXT_PUBLIC_SITE_URL` (see below) so canonical URLs and the sitemap use
   the real domain.

## Contact form email delivery (Resend)

The contact form at `/api/contact` emails each inquiry to your inbox using
[Resend](https://resend.com). The API key is read server-side only and is never
shipped to the browser or committed.

To turn delivery on:

1. Create a free Resend account (<https://resend.com>).
2. Create an API key at <https://resend.com/api-keys>.
3. Copy `.env.example` to `.env.local` and set:

   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
   CONTACT_RECIPIENT_EMAIL=shameernadeem@gmail.com
   # CONTACT_FROM_EMAIL=Portfolio <hello@yourdomain.com>   # after verifying a domain
   ```

4. Restart the dev server (`npm run dev`).

**Sender note.** With `CONTACT_FROM_EMAIL` empty, Resend uses its shared test
sender `onboarding@resend.dev`, which can **only deliver to the Resend account's
own email address** — perfect for sending inquiries to yourself. To send from
your own domain (and improve deliverability), verify a domain at
<https://resend.com/domains> and set `CONTACT_FROM_EMAIL`.

Replies go to the visitor automatically: the visitor's address is set as the
email's `Reply-To`.

### Behaviour without configuration

- **No `RESEND_API_KEY`** → `POST /api/contact` returns
  `{ ok: false, reason: "not_configured" }` (HTTP 503) and the UI shows the email
  address instead. It never claims the message was sent.
- **Email provider error** → HTTP 502 with an error message; no success state.
- **Success** (`{ ok: true, delivered: true }`) is returned **only** after Resend
  accepts the message for delivery.

The route also includes a hidden honeypot field and a lightweight in-memory rate
limit (5 submissions / minute / IP).

## Optional: archive submissions (Supabase)

Email delivery does not depend on this. To *also* keep a copy of every message
in a database:

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Copy `.env.example` to `.env.local` and fill in:

   ```bash
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   SUPABASE_SERVICE_ROLE_KEY=...   # server-only, preferred for inserts
   ```

4. Restart the dev server.

Archival is best-effort: if the insert fails, the email has still been sent and
the visitor still sees success.

### Verifying delivery

A successful **build** proves the code compiles — it does **not** prove email is
delivered. To verify real delivery, after setting `RESEND_API_KEY`:

```bash
npm run test:email
```

`PASS` means Resend accepted the message for delivery; then confirm the message
actually lands in the inbox (check spam on the first send). Rejected/invalid keys
return `FAIL` with the provider's reason.

To test the whole site path, send a message through the live contact form and
confirm it arrives — the UI shows success only when Resend has accepted it.

## Environment variables

| Variable                        | Required      | Purpose                             |
| ------------------------------- | ------------- | ----------------------------------- |
| `RESEND_API_KEY`                | For the form  | Sends contact-form email (server)   |
| `CONTACT_RECIPIENT_EMAIL`       | No            | Inbox for inquiries (defaults to `shameernadeem@gmail.com`) |
| `CONTACT_FROM_EMAIL`            | No            | Verified sender (defaults to Resend test sender) |
| `NEXT_PUBLIC_SITE_URL`          | No            | Canonical URL, sitemap, OG metadata |
| `NEXT_PUBLIC_SUPABASE_URL`      | No            | Supabase project URL (archive)      |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | No            | Supabase anon key (archive)         |
| `SUPABASE_SERVICE_ROLE_KEY`     | No            | Server-side insert key (archive)    |

## Deploying

### Vercel (recommended)

1. Push the repository to GitHub.
2. Import the repo at <https://vercel.com/new>.
3. Add environment variables — at minimum `RESEND_API_KEY` and
   `CONTACT_RECIPIENT_EMAIL` so the contact form can email you.
4. Deploy — no build configuration is required.

### Any Node host

```bash
npm run build
npm start
```

## License & credits

- Source code in this repository: © Shayan Nadeem.
- Tool marks in `components/tool-logos.tsx`: Figma, WordPress and HTML5 paths
  come from [Simple Icons](https://simpleicons.org) (CC0 1.0). Adobe and Canva
  are shown as neutral letter tiles rather than reproducing trademarked art.
- Lucide icons are provided by `lucide-react` (ISC license).
