-- Run this once in Supabase SQL Editor before deploying the paginated admin history.
alter table public.payments add column if not exists payer_name text not null default '';
alter table public.payments add column if not exists payer_email text not null default '';
create index if not exists payments_submitted_idx on public.payments(submitted_at desc);
create index if not exists payments_payer_email_idx on public.payments(payer_email);
create index if not exists payments_payer_name_idx on public.payments(payer_name);

-- Optional backfill for existing transactions. New transactions will save these values automatically.
-- Existing rows can be left blank; the admin API has a compatibility fallback for them.
