-- ---------------------------------------------------------------------------
-- Contact form storage for the Shayan Nadeem portfolio
-- ---------------------------------------------------------------------------
-- Run this in the Supabase SQL editor (or `supabase db push`) before deploying
-- if you want the contact form to store submissions.
--
-- The portfolio itself does not need Supabase: without these env vars the
-- /api/contact route responds with a "not_configured" message and the UI falls
-- back to showing the email address.
-- ---------------------------------------------------------------------------

create table if not exists public.contact_messages (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 2 and 120),
  email       text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]{2,}$'),
  message     text not null check (char_length(message) between 10 and 4000),
  source      text not null default 'portfolio',
  user_agent  text,
  handled     boolean not null default false
);

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

-- Row Level Security -------------------------------------------------------
-- The API route uses the service role key on the server, which bypasses RLS.
-- These policies are a safety net for the anon key: allow INSERT only, and
-- never allow reading submissions back from the browser.
alter table public.contact_messages enable row level security;

drop policy if exists "anon can insert messages" on public.contact_messages;
create policy "anon can insert messages"
  on public.contact_messages
  for insert
  to anon
  with check (true);

-- No SELECT / UPDATE / DELETE policies are created, so they are denied by
-- default for anon and authenticated roles.
