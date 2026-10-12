"use client";

import { useEffect, useMemo, useState } from "react";
import AccountBar from "@/components/AccountBar";

type Member = {
  id: string;
  email: string;
  name: string;
  plan: "FREE" | "PRO";
  planRaw: "FREE" | "PRO_30D" | "PRO_LIFETIME";
  status: "AKTIF" | "EXPIRED" | "FREE";
  joinedAt: string | null;
  expiresAt: string | null;
  emailConfirmed: boolean;
  lastSignInAt: string | null;
};

const dt = (value: string | null) => {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat("id-ID", { dateStyle: "medium", timeStyle: "short" }).format(date);
};

const dateOnly = (value: string | null) => {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat("id-ID", { dateStyle: "medium" }).format(date);
};

export default function AdminMembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState("");
  const [confirmMember, setConfirmMember] = useState<Member | null>(null);
  const [notice, setNotice] = useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/members", { cache: "no-store" });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Gagal membaca data member.");
      setMembers(Array.isArray(data.members) ? data.members : []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Gagal membaca data member.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return members;
    return members.filter((member) =>
      [member.name, member.email, member.plan, member.status].some((value) => value.toLowerCase().includes(q))
    );
  }, [members, query]);

  const stats = useMemo(() => ({
    total: members.length,
    pro: members.filter((member) => member.plan === "PRO").length,
    free: members.filter((member) => member.plan === "FREE").length,
    expired: members.filter((member) => member.status === "EXPIRED").length,
  }), [members]);

  async function deleteMember(member: Member) {
    setDeletingId(member.id);
    setError("");
    setNotice("");
    try {
      const response = await fetch("/api/admin/members", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: member.id }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Gagal menghapus akun member.");
      setMembers((current) => current.filter((item) => item.id !== member.id));
      setConfirmMember(null);
      setNotice(data.message || "Akun member berhasil dihapus.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Gagal menghapus akun member.");
    } finally {
      setDeletingId("");
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050811] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-amber-400/[0.055] blur-[100px]" />
        <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/[0.045] blur-[110px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 sm:py-8">
        <header className="sticky top-0 z-40 -mx-5 border-b border-white/[0.07] bg-[#050811]/95 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] p-2.5">
                <img src="/driacom-logo.png" alt="Driacom" className="h-full w-full object-contain" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-black tracking-[0.28em] text-amber-300">DRIACOM ADMIN</p>
                <h1 className="truncate font-serif text-xl font-black sm:text-2xl">Member Center</h1>
              </div>
            </div>

            <div className="grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2 sm:flex sm:w-auto sm:shrink-0">
              <a href="/admin/payments" className="flex h-11 min-w-0 items-center justify-center rounded-2xl border border-white/10 bg-[#090e16]/90 px-3 text-[11px] font-black text-zinc-300 transition hover:border-white/20 hover:text-white sm:h-[46px] sm:px-4 sm:text-xs">
                <span className="truncate">← Pembayaran</span>
              </a>
              <button type="button" onClick={load} disabled={loading} className="flex h-11 min-w-0 items-center justify-center rounded-2xl border border-white/10 bg-[#090e16]/90 px-3 text-[11px] font-black text-zinc-300 transition hover:border-white/20 hover:text-white disabled:opacity-40 sm:h-[46px] sm:px-4 sm:text-xs">
                <span className="truncate">{loading ? "Memuat..." : "↻ Refresh"}</span>
              </button>
              <div className="min-w-0"><AccountBar /></div>
            </div>
          </div>
        </header>

        <section className="mt-8">
          <p className="text-[10px] font-black tracking-[0.28em] text-amber-300">CONTROL CENTER</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Manajemen Member</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">Kelola akun yang terdaftar di Driacom, lihat status paket, dan hapus akun member yang sudah tidak diperlukan.</p>
        </section>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Total Member", stats.total, "Semua akun", "text-white"],
            ["PRO", stats.pro, "Sedang aktif", "text-amber-200"],
            ["FREE", stats.free, "Paket gratis", "text-cyan-200"],
            ["Expired", stats.expired, "PRO kedaluwarsa", "text-red-200"],
          ].map(([label, value, caption, tone]) => (
            <div key={label} className="rounded-2xl border border-white/[0.08] bg-[#090e16]/90 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
              <p className="text-[10px] font-black tracking-[0.16em] text-zinc-600">{label}</p>
              <p className={`mt-3 text-3xl font-black ${tone}`}>{value}</p>
              <p className="mt-1 text-xs text-zinc-600">{caption}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari nama atau email member..." className="h-12 w-full rounded-2xl border border-white/10 bg-[#090e16] px-4 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-cyan-300/30" />
          </div>
          <p className="text-xs text-zinc-600">Menampilkan {filtered.length} dari {members.length} member</p>
        </div>

        {notice ? <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.04] p-4 text-sm text-emerald-200">✓ {notice}</div> : null}
        {error ? <div className="mt-5 rounded-2xl border border-red-300/20 bg-red-300/[0.04] p-4 text-sm text-red-200">{error}</div> : null}

        <section className="mt-7">
          {loading && !members.length ? (
            <div className="rounded-3xl border border-white/10 bg-[#090e16] p-10 text-center text-sm text-zinc-500">Memuat data member...</div>
          ) : filtered.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-[#090e16] p-10 text-center">
              <div className="text-sm font-black">Belum ada member yang cocok.</div>
              <p className="mt-2 text-xs text-zinc-600">Coba gunakan nama atau email yang berbeda.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((member) => (
                <article key={member.id} className="rounded-3xl border border-white/10 bg-[#090e16] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:p-6">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="max-w-full truncate text-lg font-black text-white">{member.name}</h3>
                        <span className={`rounded-full border px-2.5 py-1 text-[9px] font-black ${member.plan === "PRO" ? "border-amber-300/20 bg-amber-300/[0.05] text-amber-200" : "border-cyan-300/20 bg-cyan-300/[0.05] text-cyan-200"}`}>{member.plan}</span>
                        <span className={`rounded-full border px-2.5 py-1 text-[9px] font-black ${member.status === "AKTIF" ? "border-emerald-300/20 text-emerald-200" : member.status === "EXPIRED" ? "border-red-300/20 text-red-200" : "border-white/10 text-zinc-500"}`}>{member.status}</span>
                      </div>
                      <p className="mt-2 break-all text-sm text-zinc-400">{member.email}</p>

                      <div className="mt-4 grid gap-3 text-xs sm:grid-cols-2 xl:grid-cols-4">
                        <div><p className="text-zinc-600">Paket</p><p className="mt-1 font-bold text-zinc-300">{member.planRaw === "PRO_LIFETIME" ? "PRO Lifetime" : member.planRaw === "PRO_30D" ? "PRO 30 Hari" : "FREE"}</p></div>
                        <div><p className="text-zinc-600">Bergabung</p><p className="mt-1 font-bold text-zinc-300">{dateOnly(member.joinedAt)}</p></div>
                        <div><p className="text-zinc-600">PRO berakhir</p><p className="mt-1 font-bold text-zinc-300">{member.planRaw === "PRO_LIFETIME" ? "Selamanya" : dateOnly(member.expiresAt)}</p></div>
                        <div><p className="text-zinc-600">Email</p><p className={`mt-1 font-bold ${member.emailConfirmed ? "text-emerald-200" : "text-amber-200"}`}>{member.emailConfirmed ? "Terverifikasi" : "Belum diverifikasi"}</p></div>
                      </div>
                      <p className="mt-3 text-[11px] text-zinc-700">Login terakhir: {dt(member.lastSignInAt)}</p>
                    </div>

                    <div className="shrink-0 lg:pl-5">
                      <button type="button" onClick={() => setConfirmMember(member)} className="w-full rounded-2xl border border-red-300/20 bg-red-300/[0.04] px-5 py-3.5 text-sm font-black text-red-200 transition hover:border-red-300/35 hover:bg-red-300/[0.08] lg:w-auto">
                        Hapus Akun
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>

      {confirmMember ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5 py-8 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden rounded-3xl border border-red-300/15 bg-[#090e16] shadow-[0_30px_100px_rgba(0,0,0,0.65)]">
            <div className="border-b border-white/[0.07] p-6">
              <p className="text-[10px] font-black tracking-[0.22em] text-red-300">TINDAKAN PERMANEN</p>
              <h2 className="mt-2 text-xl font-black">Hapus akun member?</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-500">Akun dan data terkait member ini akan dihapus. Tindakan ini tidak dapat dibatalkan.</p>
            </div>
            <div className="space-y-4 p-6">
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                <p className="text-xs text-zinc-600">Member</p>
                <p className="mt-1 font-black text-white">{confirmMember.name}</p>
                <p className="mt-1 break-all text-xs text-zinc-500">{confirmMember.email}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button type="button" disabled={!!deletingId} onClick={() => setConfirmMember(null)} className="rounded-2xl border border-white/10 px-4 py-3.5 text-sm font-black text-zinc-400 hover:text-white disabled:opacity-40">Batal</button>
                <button type="button" disabled={!!deletingId} onClick={() => deleteMember(confirmMember)} className="rounded-2xl bg-red-400 px-4 py-3.5 text-sm font-black text-slate-950 hover:bg-red-300 disabled:opacity-40">{deletingId ? "Menghapus..." : "Ya, Hapus Akun"}</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
