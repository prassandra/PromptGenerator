-- Driacom manual payment foundation.
-- Run after Supabase Auth is connected and profiles.user_id references auth.users(id).
create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  invoice_number text not null unique,
  amount integer not null,
  duration_days integer not null default 30,
  payment_method text not null,
  proof_path text,
  status text not null default 'PENDING' check (status in ('PENDING','APPROVED','REJECTED')),
  submitted_at timestamptz not null default now(),
  verified_at timestamptz,
  verified_by uuid references auth.users(id),
  rejection_reason text
);
create index if not exists payments_status_idx on public.payments(status);
create index if not exists payments_user_idx on public.payments(user_id);

-- Driacom account + per-menu FREE usage / PRO status.
create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  plan text not null default 'FREE' check (plan in ('FREE','PRO_30D','PRO_LIFETIME')),
  pro_expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.prompt_usage (
  user_id uuid not null references auth.users(id) on delete cascade,
  menu text not null check (menu in ('animation','storytelling','affiliate')),
  count integer not null default 0 check (count >= 0),
  updated_at timestamptz not null default now(),
  primary key (user_id, menu)
);

create or replace function public.consume_prompt_usage(p_user_id uuid, p_menu text, p_limit integer default 2)
returns table(allowed boolean, remaining integer)
language plpgsql security definer set search_path = public
as $$
declare current_count integer;
begin
  insert into public.prompt_usage(user_id, menu, count) values (p_user_id, p_menu, 0)
  on conflict (user_id, menu) do nothing;
  select count into current_count from public.prompt_usage where user_id = p_user_id and menu = p_menu for update;
  if current_count >= p_limit then
    return query select false, 0;
    return;
  end if;
  update public.prompt_usage set count = current_count + 1, updated_at = now() where user_id = p_user_id and menu = p_menu;
  return query select true, greatest(0, p_limit - current_count - 1);
end;
$$;

create or replace function public.release_prompt_usage(p_user_id uuid, p_menu text)
returns void language sql security definer set search_path = public
as $$
  update public.prompt_usage set count = greatest(0, count - 1), updated_at = now()
  where user_id = p_user_id and menu = p_menu;
$$;

grant execute on function public.consume_prompt_usage(uuid,text,integer) to service_role;
grant execute on function public.release_prompt_usage(uuid,text) to service_role;

create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  plan text not null default 'FREE' check (plan in ('FREE','PRO_30D','PRO_LIFETIME')),
  pro_expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.prompt_usage (
  user_id uuid not null references auth.users(id) on delete cascade,
  menu text not null check (menu in ('animation','storytelling','affiliate')),
  count integer not null default 0 check (count >= 0),
  updated_at timestamptz not null default now(),
  primary key (user_id, menu)
);

create or replace function public.consume_prompt_usage(p_user_id uuid, p_menu text, p_limit integer default 2)
returns table(allowed boolean, remaining integer)
language plpgsql security definer set search_path = public
as $$
declare current_count integer;
begin
  insert into public.prompt_usage(user_id, menu, count) values (p_user_id, p_menu, 0)
  on conflict (user_id, menu) do nothing;
  select count into current_count from public.prompt_usage where user_id = p_user_id and menu = p_menu for update;
  if current_count >= p_limit then return query select false, 0; return; end if;
  update public.prompt_usage set count = current_count + 1, updated_at = now() where user_id = p_user_id and menu = p_menu;
  return query select true, greatest(0, p_limit - current_count - 1);
end; $$;

create or replace function public.release_prompt_usage(p_user_id uuid, p_menu text)
returns void language sql security definer set search_path = public
as $$ update public.prompt_usage set count = greatest(0, count - 1), updated_at = now() where user_id = p_user_id and menu = p_menu; $$;

grant execute on function public.consume_prompt_usage(uuid,text,integer) to service_role;
grant execute on function public.release_prompt_usage(uuid,text) to service_role;
