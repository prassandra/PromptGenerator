"use client";

import { useEffect, useState } from "react";
import AccountBar from "@/components/AccountBar";

type Payment = {
  id: string;
  invoice_number: string;
  amount: number;
  duration_days: number;
  payment_method: string;
  status: "APPROVED" | "REJECTED";
  submitted_at: string;
  user?: { email: string; name: string };
};

type Pagination = { page: number; pageSize: number; total: number; totalPages: number };
type Stats = { total: number; pending: number; approved: number; rejected: number };

const rupiah = (n: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
const pkg = (p: Payment) => p.duration_days === 0 || p.amount === 99000 ? "PRO Lifetime" : "PRO 30 Hari";
const dt = (v: string) => new Intl.DateTimeFormat("id-ID", { dateStyle: "medium", timeStyle: "short" }).format(new Date(v));

export default function AdminPaymentHistoryPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [pagination, setPagination] = useState<Pagination>({ page: 1, pageSize: 20, total: 0, totalPages: 1 });
  const [stats, setStats] = useState<Stats>({ total: 0, pending: 0, approved: 0, rejected: 0 });
  const [status, setStatus] = useState("ALL");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load(page = 1, currentStatus = status, currentSearch = query) {
    setLoading(true); setError("");
    try {
      const params = new URLSearchParams({ view: "history", page: String(page), pageSize: "20" });
      if (currentStatus !== "ALL") params.set("status", currentStatus);
      if (currentSearch) params.set("search", currentSearch);
      const response = await fetch(`/api/admin/payments?${params.toString()}`, { cache: "no-store" });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Gagal membaca riwayat pembayaran.");
      setPayments(Array.isArray(data.payments) ? data.payments : []);
      if (data.pagination) setPagination(data.pagination);
      if (data.stats) setStats(data.stats);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Gagal membaca riwayat pembayaran.");
    } finally { setLoading(false); }
  }

  useEffect(() => { load(); }, []);

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    setQuery(search.trim());
    load(1, status, search.trim());
  }

  function changeStatus(value: string) {
    setStatus(value);
    load(1, value, query);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050811] text-white">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 sm:py-8">
        <header className="sticky top-0 z-40 -mx-5 border-b border-white/[0.07] bg-[#050811]/95 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] p-2.5"><img src="/driacom-logo.png" alt="Driacom" className="h-full w-full object-contain" /></div>
              <div><p className="text-[9px] font-black tracking-[0.28em] text-amber-300">DRIACOM ADMIN</p><h1 className="font-serif text-xl font-black sm:text-2xl">Riwayat Pembayaran</h1></div>
            </div>
            <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto">
              <a href="/admin/payments" className="flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-[#090e16]/90 px-4 text-xs font-black text-zinc-300">← Payment Center</a>
              <div className="min-w-0"><AccountBar /></div>
            </div>
          </div>
        </header>

        <section className="mt-8">
          <p className="text-[10px] font-black tracking-[0.28em] text-cyan-300">TRANSACTION HISTORY</p>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div><h2 className="text-3xl font-black tracking-tight sm:text-4xl">Semua Riwayat</h2><p className="mt-2 text-sm leading-6 text-zinc-500">Data diambil per halaman, jadi tetap ringan meskipun transaksi sudah ribuan.</p></div>
            <div className="text-xs text-zinc-600">Total transaksi: <span className="font-black text-white">{stats.total}</span></div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.08] bg-[#090e16] p-4"><p className="text-[10px] font-black tracking-[0.15em] text-zinc-600">APPROVED</p><p className="mt-2 text-2xl font-black text-emerald-200">{stats.approved}</p></div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#090e16] p-4"><p className="text-[10px] font-black tracking-[0.15em] text-zinc-600">REJECTED</p><p className="mt-2 text-2xl font-black text-red-200">{stats.rejected}</p></div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#090e16] p-4"><p className="text-[10px] font-black tracking-[0.15em] text-zinc-600">HALAMAN</p><p className="mt-2 text-2xl font-black text-white">{pagination.page} / {pagination.totalPages}</p></div>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-[#090e16] p-4 sm:p-5">
            <form onSubmit={submitSearch} className="flex flex-col gap-3 sm:flex-row">
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Cari invoice, nama, atau email..." className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-[#0b1018] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-cyan-300/30" />
              <button type="submit" className="rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950">Cari</button>
              <select value={status} onChange={e => changeStatus(e.target.value)} className="rounded-2xl border border-white/10 bg-[#0b1018] px-4 py-3 text-sm font-bold text-white outline-none">
                <option value="ALL">Semua Status</option><option value="APPROVED">Approved</option><option value="REJECTED">Rejected</option>
              </select>
            </form>
          </div>

          {error ? <div className="mt-5 rounded-2xl border border-red-300/20 bg-red-300/[0.04] p-4 text-sm text-red-200">{error}</div> : null}

          <div className="mt-6 overflow-x-auto rounded-3xl border border-white/10 bg-[#090e16]">
            {loading ? <div className="p-10 text-center text-sm text-zinc-500">Memuat riwayat...</div> : payments.length === 0 ? <div className="p-10 text-center text-sm text-zinc-600">Tidak ada transaksi yang cocok.</div> : (
              <table className="w-full min-w-[800px] text-left text-xs">
                <thead className="border-b border-white/10 text-zinc-600"><tr><th className="px-5 py-4">Invoice</th><th className="px-5 py-4">Member</th><th className="px-5 py-4">Paket</th><th className="px-5 py-4">Nominal</th><th className="px-5 py-4">Status</th><th className="px-5 py-4">Waktu</th></tr></thead>
                <tbody>{payments.map(p => <tr key={p.id} className="border-b border-white/[0.06] last:border-0"><td className="px-5 py-4 font-mono font-bold text-zinc-300">{p.invoice_number}</td><td className="px-5 py-4"><div className="font-bold text-zinc-300">{p.user?.name || "-"}</div><div className="mt-1 text-zinc-600">{p.user?.email || "-"}</div></td><td className="px-5 py-4 font-bold text-zinc-400">{pkg(p)}</td><td className="px-5 py-4 font-bold text-zinc-400">{rupiah(p.amount)}</td><td className="px-5 py-4"><span className={`rounded-full border px-2.5 py-1 text-[10px] font-black ${p.status === "APPROVED" ? "border-emerald-300/20 text-emerald-200" : "border-red-300/20 text-red-200"}`}>{p.status}</span></td><td className="px-5 py-4 text-zinc-600">{dt(p.submitted_at)}</td></tr>)}</tbody>
              </table>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <button disabled={loading || pagination.page <= 1} onClick={() => load(pagination.page - 1)} className="rounded-2xl border border-white/10 px-4 py-3 text-xs font-black text-zinc-300 disabled:opacity-30">← Sebelumnya</button>
            <span className="text-xs font-bold text-zinc-600">{pagination.total === 0 ? 0 : (pagination.page - 1) * pagination.pageSize + 1}–{Math.min(pagination.page * pagination.pageSize, pagination.total)} dari {pagination.total}</span>
            <button disabled={loading || pagination.page >= pagination.totalPages} onClick={() => load(pagination.page + 1)} className="rounded-2xl border border-cyan-300/20 px-4 py-3 text-xs font-black text-cyan-200 disabled:opacity-30">Berikutnya →</button>
          </div>
        </section>
      </div>
    </main>
  );
}
