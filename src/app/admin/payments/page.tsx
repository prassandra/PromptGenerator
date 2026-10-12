"use client";

import { useEffect, useState } from "react";
import AccountBar from "@/components/AccountBar";

type Payment = {
  id: string;
  invoice_number: string;
  amount: number;
  duration_days: number;
  payment_method: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  submitted_at: string;
  proofUrl?: string;
  user?: {
    email: string;
    name: string;
  };
};

type ModalState = {
  type: "APPROVE" | "REJECT" | "SUCCESS" | "ERROR";
  payment?: Payment;
  message?: string;
};

const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

const pkg = (p: Payment) =>
  p.duration_days === 0 || p.amount === 99000
    ? "PRO Lifetime"
    : "PRO 30 Hari";

const dt = (v: string) =>
  new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(v));

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState("");
  const [error, setError] = useState("");

  const [modal, setModal] = useState<ModalState | null>(null);
  const [rejectionReason, setRejectionReason] = useState(
    "Bukti pembayaran tidak valid."
  );

  async function load() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/payments", {
        cache: "no-store",
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error || "Gagal membaca pembayaran."
        );
      }

      setPayments(
        Array.isArray(data.payments)
          ? data.payments
          : []
      );
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "Gagal membaca pembayaran."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  function openApproveModal(payment: Payment) {
    setModal({
      type: "APPROVE",
      payment,
    });
  }

  function openRejectModal(payment: Payment) {
    setRejectionReason("Bukti pembayaran tidak valid.");

    setModal({
      type: "REJECT",
      payment,
    });
  }

  function closeModal() {
    if (actionId) return;

    setModal(null);
  }

  async function processAction(
    payment: Payment,
    action: "APPROVE" | "REJECT"
  ) {
    const reason =
      action === "REJECT"
        ? rejectionReason.trim()
        : "";

    if (
      action === "REJECT" &&
      !reason
    ) {
      return;
    }

    setActionId(payment.id);

    try {
      const response = await fetch(
        `/api/admin/payments/${payment.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action,
            rejectionReason: reason,
          }),
        }
      );

      const data = await response
        .json()
        .catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Gagal memproses pembayaran."
        );
      }

      setModal({
        type: "SUCCESS",
        payment,
        message:
          action === "APPROVE"
            ? "Pembayaran berhasil diterima dan akun PRO telah diaktifkan."
            : "Pembayaran berhasil ditolak.",
      });

      await load();
    } catch (e) {
      setModal({
        type: "ERROR",
        message:
          e instanceof Error
            ? e.message
            : "Gagal memproses pembayaran.",
      });
    } finally {
      setActionId("");
    }
  }

  const pending = payments.filter((p) => p.status === "PENDING");
  const approved = payments.filter((p) => p.status === "APPROVED");
  const rejected = payments.filter((p) => p.status === "REJECTED");
  const history = payments.filter((p) => p.status !== "PENDING");

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
                <h1 className="truncate font-serif text-xl font-black sm:text-2xl">Payment Center</h1>
              </div>
            </div>

            <div className="grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2 sm:flex sm:w-auto sm:shrink-0">
              <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-2">
                <a href="/dashboard" className="flex h-11 min-w-0 items-center justify-center rounded-2xl border border-white/10 bg-[#090e16]/90 px-3 text-[11px] font-black text-zinc-300 transition hover:border-white/20 hover:text-white sm:h-[46px] sm:px-4 sm:text-xs">
                  <span className="truncate">← Dashboard</span>
                </a>
                <a href="/admin/members" className="flex h-11 min-w-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.04] px-3 text-[11px] font-black text-cyan-100 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.08] sm:h-[46px] sm:px-4 sm:text-xs">
                  <span className="truncate">Member</span>
                </a>
              </div>
              <button type="button" onClick={load} disabled={loading} className="flex h-11 min-w-0 items-center justify-center rounded-2xl border border-white/10 bg-[#090e16]/90 px-3 text-[11px] font-black text-zinc-300 transition hover:border-white/20 hover:text-white disabled:opacity-40 sm:h-[46px] sm:px-4 sm:text-xs">
                <span className="truncate">{loading ? "Memuat..." : "↻ Refresh"}</span>
              </button>
              <div className="min-w-0">
                <AccountBar />
              </div>
            </div>
          </div>
        </header>

        <section className="mt-8">
          <div className="mb-6 flex flex-col gap-2">
            <p className="text-[10px] font-black tracking-[0.28em] text-amber-300">CONTROL CENTER</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Verifikasi Pembayaran</h2>
            <p className="max-w-2xl text-sm leading-6 text-zinc-500">Kelola pembayaran member, periksa bukti transfer, dan aktifkan paket PRO dari satu dashboard yang terpusat.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Total", payments.length, "Semua transaksi", "text-white"],
              ["Pending", pending.length, "Menunggu verifikasi", "text-amber-200"],
              ["Approved", approved.length, "Berhasil diproses", "text-emerald-200"],
              ["Rejected", rejected.length, "Ditolak", "text-red-200"],
            ].map(([label, value, caption, tone]) => (
              <div key={label} className="rounded-2xl border border-white/[0.08] bg-[#090e16]/90 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <p className="text-[10px] font-black tracking-[0.16em] text-zinc-600">{label}</p>
                <p className={`mt-3 text-3xl font-black ${tone}`}>{value}</p>
                <p className="mt-1 text-xs text-zinc-600">{caption}</p>
              </div>
            ))}
          </div>
        </section>

        {error ? (
          <div className="mt-6 rounded-2xl border border-red-300/20 bg-red-300/[0.04] p-4 text-sm text-red-200">
            {error}
          </div>
        ) : null}

        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-black">
              PENDING
            </h2>

            <span className="rounded-full border border-amber-300/20 px-3 py-1 text-xs font-black text-amber-200">
              {pending.length}
            </span>
          </div>

          {loading && !payments.length ? (
            <div className="rounded-3xl border border-white/10 bg-[#090e16] p-8 text-center text-sm text-zinc-500">
              Memuat pembayaran...
            </div>
          ) : pending.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-[#090e16] p-8 text-center">
              <div className="text-sm font-black">
                Belum ada pembayaran PENDING.
              </div>

              <p className="mt-2 text-xs text-zinc-600">
                Saat member mengirim bukti,
                data muncul otomatis di sini.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {pending.map((p) => (
                <article
                  key={p.id}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-[#090e16]"
                >
                  <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
                    <div className="min-h-[260px] bg-black/20">
                      {p.proofUrl ? (
                        <a
                          href={p.proofUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={p.proofUrl}
                            alt={`Bukti ${p.invoice_number}`}
                            className="h-full min-h-[260px] w-full object-contain"
                          />
                        </a>
                      ) : (
                        <div className="flex min-h-[260px] items-center justify-center p-6 text-xs text-zinc-600">
                          Bukti tidak tersedia.
                        </div>
                      )}
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <div className="text-xs font-black tracking-[0.16em] text-amber-300">
                            {pkg(p)}
                          </div>

                          <h3 className="mt-2 text-xl font-black">
                            {rupiah(p.amount)}
                          </h3>
                        </div>

                        <span className="rounded-full border border-amber-300/20 px-3 py-1 text-[10px] font-black text-amber-200">
                          PENDING
                        </span>
                      </div>

                      <div className="mt-5 grid gap-3 text-xs sm:grid-cols-2">
                        <div>
                          <div className="text-zinc-600">
                            Nama
                          </div>

                          <div className="mt-1 font-bold text-zinc-300">
                            {p.user?.name || "-"}
                          </div>
                        </div>

                        <div>
                          <div className="text-zinc-600">
                            Email
                          </div>

                          <div className="mt-1 break-all font-bold text-zinc-300">
                            {p.user?.email || "-"}
                          </div>
                        </div>

                        <div>
                          <div className="text-zinc-600">
                            Invoice
                          </div>

                          <div className="mt-1 font-mono font-bold text-zinc-300">
                            {p.invoice_number}
                          </div>
                        </div>

                        <div>
                          <div className="text-zinc-600">
                            Metode
                          </div>

                          <div className="mt-1 font-bold text-zinc-300">
                            {p.payment_method || "-"}
                          </div>
                        </div>

                        <div>
                          <div className="text-zinc-600">
                            Dikirim
                          </div>

                          <div className="mt-1 font-bold text-zinc-300">
                            {dt(p.submitted_at)}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-2 sm:grid-cols-2">
                        <button
                          type="button"
                          disabled={actionId === p.id}
                          onClick={() =>
                            openApproveModal(p)
                          }
                          className="rounded-2xl bg-emerald-400 px-4 py-3.5 text-sm font-black text-slate-950 transition hover:bg-emerald-300 disabled:opacity-40"
                        >
                          {actionId === p.id
                            ? "Memproses..."
                            : "✓ TERIMA & AKTIFKAN PRO"}
                        </button>

                        <button
                          type="button"
                          disabled={actionId === p.id}
                          onClick={() =>
                            openRejectModal(p)
                          }
                          className="rounded-2xl border border-red-300/20 bg-red-300/[0.04] px-4 py-3.5 text-sm font-black text-red-200 transition hover:bg-red-300/[0.08] disabled:opacity-40"
                        >
                          ✕ TOLAK
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="mt-10">
          <h2 className="mb-3 text-sm font-black">
            RIWAYAT
          </h2>

          {history.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-[#090e16] p-6 text-center text-xs text-zinc-600">
              Belum ada riwayat pembayaran.
            </div>
          ) : (
            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#090e16]">
              <table className="w-full min-w-[760px] text-left text-xs">
                <thead className="border-b border-white/10 text-zinc-600">
                  <tr>
                    <th className="px-5 py-4">
                      Invoice
                    </th>
                    <th className="px-5 py-4">
                      Member
                    </th>
                    <th className="px-5 py-4">
                      Paket
                    </th>
                    <th className="px-5 py-4">
                      Nominal
                    </th>
                    <th className="px-5 py-4">
                      Status
                    </th>
                    <th className="px-5 py-4">
                      Waktu
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {history.map((p) => (
                    <tr
                      key={p.id}
                      className="border-b border-white/[0.06] last:border-0"
                    >
                      <td className="px-5 py-4 font-mono font-bold text-zinc-300">
                        {p.invoice_number}
                      </td>

                      <td className="px-5 py-4">
                        <div className="font-bold text-zinc-300">
                          {p.user?.name || "-"}
                        </div>

                        <div className="mt-1 text-zinc-600">
                          {p.user?.email || "-"}
                        </div>
                      </td>

                      <td className="px-5 py-4 font-bold text-zinc-400">
                        {pkg(p)}
                      </td>

                      <td className="px-5 py-4 font-bold text-zinc-400">
                        {rupiah(p.amount)}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full border px-2.5 py-1 text-[10px] font-black ${
                            p.status === "APPROVED"
                              ? "border-emerald-300/20 text-emerald-200"
                              : "border-red-300/20 text-red-200"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-zinc-600">
                        {dt(p.submitted_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>

      {modal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5 py-8 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#090e16] shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
            {modal.type === "APPROVE" &&
            modal.payment ? (
              <>
                <div className="border-b border-white/[0.07] p-6">
                  <p className="text-[10px] font-black tracking-[0.22em] text-emerald-300">
                    KONFIRMASI
                  </p>

                  <h2 className="mt-2 text-xl font-black">
                    Aktifkan PRO?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Pastikan pembayaran sudah
                    diverifikasi sebelum akun
                    diaktifkan.
                  </p>
                </div>

                <div className="space-y-4 p-6">
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                    <div className="text-xs text-zinc-600">
                      Member
                    </div>

                    <div className="mt-1 font-black text-white">
                      {modal.payment.user?.name ||
                        "-"}
                    </div>

                    <div className="mt-1 break-all text-xs text-zinc-500">
                      {modal.payment.user?.email ||
                        "-"}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                      <div className="text-xs text-zinc-600">
                        Paket
                      </div>

                      <div className="mt-1 text-sm font-black text-amber-200">
                        {pkg(modal.payment)}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                      <div className="text-xs text-zinc-600">
                        Nominal
                      </div>

                      <div className="mt-1 text-sm font-black text-white">
                        {rupiah(
                          modal.payment.amount
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      disabled={!!actionId}
                      onClick={closeModal}
                      className="rounded-2xl border border-white/10 px-4 py-3.5 text-sm font-black text-zinc-400 hover:text-white disabled:opacity-40"
                    >
                      Batal
                    </button>

                    <button
                      type="button"
                      disabled={!!actionId}
                      onClick={() =>
                        processAction(
                          modal.payment!,
                          "APPROVE"
                        )
                      }
                      className="rounded-2xl bg-emerald-400 px-4 py-3.5 text-sm font-black text-slate-950 disabled:opacity-40"
                    >
                      {actionId
                        ? "Memproses..."
                        : "Ya, Aktifkan PRO"}
                    </button>
                  </div>
                </div>
              </>
            ) : null}

            {modal.type === "REJECT" &&
            modal.payment ? (
              <>
                <div className="border-b border-white/[0.07] p-6">
                  <p className="text-[10px] font-black tracking-[0.22em] text-red-300">
                    PENOLAKAN
                  </p>

                  <h2 className="mt-2 text-xl font-black">
                    Tolak Pembayaran?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Masukkan alasan yang akan
                    menjadi catatan penolakan.
                  </p>
                </div>

                <div className="space-y-4 p-6">
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                    <div className="text-xs text-zinc-600">
                      Member
                    </div>

                    <div className="mt-1 font-black text-white">
                      {modal.payment.user?.name ||
                        "-"}
                    </div>

                    <div className="mt-1 break-all text-xs text-zinc-500">
                      {modal.payment.user?.email ||
                        "-"}
                    </div>
                  </div>

                  <textarea
                    value={rejectionReason}
                    onChange={(e) =>
                      setRejectionReason(
                        e.target.value
                      )
                    }
                    rows={4}
                    placeholder="Alasan penolakan..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-[#0b1018] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-red-300/40"
                  />

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      disabled={!!actionId}
                      onClick={closeModal}
                      className="rounded-2xl border border-white/10 px-4 py-3.5 text-sm font-black text-zinc-400 hover:text-white disabled:opacity-40"
                    >
                      Batal
                    </button>

                    <button
                      type="button"
                      disabled={
                        !!actionId ||
                        !rejectionReason.trim()
                      }
                      onClick={() =>
                        processAction(
                          modal.payment!,
                          "REJECT"
                        )
                      }
                      className="rounded-2xl bg-red-400 px-4 py-3.5 text-sm font-black text-slate-950 disabled:opacity-40"
                    >
                      {actionId
                        ? "Memproses..."
                        : "Ya, Tolak"}
                    </button>
                  </div>
                </div>
              </>
            ) : null}

            {modal.type === "SUCCESS" ? (
              <div className="p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] text-2xl text-emerald-300">
                  ✓
                </div>

                <h2 className="mt-5 text-xl font-black">
                  Berhasil
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {modal.message}
                </p>

                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-6 w-full rounded-2xl bg-white px-4 py-3.5 text-sm font-black text-slate-950"
                >
                  Tutup
                </button>
              </div>
            ) : null}

            {modal.type === "ERROR" ? (
              <div className="p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-red-300/20 bg-red-300/[0.08] text-2xl text-red-300">
                  !
                </div>

                <h2 className="mt-5 text-xl font-black">
                  Proses Gagal
                </h2>

                <p className="mt-2 text-sm leading-6 text-red-200">
                  {modal.message}
                </p>

                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-6 w-full rounded-2xl border border-white/10 px-4 py-3.5 text-sm font-black text-zinc-300 hover:text-white"
                >
                  Tutup
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </main>
  );
}