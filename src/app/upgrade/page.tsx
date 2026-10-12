"use client";

import Link from "next/link";
import { useMemo, useState, type ChangeEvent } from "react";
import { PAYMENT_CONFIG, whatsappDigits } from "@/lib/payment-config";

type PackageCode = "PRO_30D" | "PRO_LIFETIME";

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

const benefits = [
  "Generate tanpa batas",
  "Tanpa iklan",
  "Akses semua engine Driacom",
  "Dukungan prioritas",
  "Update fitur terbaru",
];

export default function UpgradePage() {
  const [packageCode, setPackageCode] = useState<PackageCode>("PRO_30D");
  const [paymentMethod, setPaymentMethod] = useState("QRIS");
  const [proof, setProof] = useState<File | null>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [invoice, setInvoice] = useState("");
  const [copied, setCopied] = useState("");
  const [qrisZoomOpen, setQrisZoomOpen] = useState(false);

  const selectedPrice = packageCode === "PRO_LIFETIME" ? PAYMENT_CONFIG.lifetimePrice : PAYMENT_CONFIG.price;
  const selectedLabel = packageCode === "PRO_LIFETIME" ? "PRO Lifetime" : "PRO 30 Hari";

  const whatsappUrl = useMemo(() => {
    const text = [
      "Halo Admin Driacom,",
      "",
      "Saya sudah mengirim pembayaran Driacom Pro.",
      `Paket: ${selectedLabel}`,
      `Nominal: ${formatRupiah(selectedPrice)}`,
      invoice ? `Invoice: ${invoice}` : "",
      "",
      "Bukti pembayaran sudah dikirim melalui aplikasi.",
    ].filter(Boolean).join("\n");
    return `https://wa.me/${whatsappDigits(PAYMENT_CONFIG.whatsapp)}?text=${encodeURIComponent(text)}`;
  }, [invoice, selectedLabel, selectedPrice]);

  function chooseProof(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setStatus("Bukti pembayaran harus berupa JPG, PNG, atau WEBP.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setStatus("Ukuran bukti pembayaran maksimal 5 MB.");
      return;
    }
    setProof(file);
    setStatus("");
  }

  async function copyAccount(name: string, account: string) {
    try {
      await navigator.clipboard.writeText(account);
      setCopied(name);
      window.setTimeout(() => setCopied(""), 1800);
    } catch {
      setStatus("Nomor belum bisa disalin otomatis. Silakan tekan lama untuk menyalinnya.");
    }
  }

  async function submitProof() {
    if (!proof) {
      setStatus("Upload bukti pembayaran terlebih dahulu.");
      return;
    }
    setLoading(true);
    setStatus("");
    try {
      const fd = new FormData();
      fd.append("package", packageCode);
      fd.append("paymentMethod", paymentMethod);
      fd.append("proof", proof);
      const r = await fetch("/api/payments/submit", { method: "POST", body: fd });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || "Pembayaran gagal dikirim.");
      setInvoice(d.payment?.invoice_number || "");
      setStatus(d.message || "Bukti pembayaran berhasil dikirim dan menunggu verifikasi admin.");
      setProof(null);
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "Pembayaran gagal dikirim.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#04070d] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8%] top-[-10%] h-[420px] w-[420px] rounded-full bg-violet-600/[0.10] blur-[120px]" />
        <div className="absolute right-[8%] top-[12%] h-[360px] w-[360px] rounded-full bg-cyan-500/[0.07] blur-[110px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-7 sm:py-8">
        <header className="mb-7 flex items-center justify-between gap-4">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] p-2">
              <img src="/driacom-logo.png" alt="Driacom" className="h-full w-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-black tracking-tight">DRIACOM</p>
              <p className="text-[9px] font-bold tracking-[0.22em] text-zinc-600">PROMPT AI STUDIO</p>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-xs font-black text-zinc-200 shadow-lg shadow-black/10 transition hover:border-white/20 hover:bg-white/[0.07]">
              ← Kembali ke Dashboard
            </Link>
          </div>
        </header>

        <section className="overflow-hidden rounded-[30px] border border-violet-400/20 bg-gradient-to-br from-[#17102b] via-[#0b1020] to-[#07101a] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
          <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-pink-400/30 bg-pink-400/10 px-3 py-1.5 text-[10px] font-black tracking-[0.12em] text-pink-200">🔥 PROMO TERBATAS</span>
              <p className="mt-5 text-[10px] font-black tracking-[0.3em] text-violet-300">DRIACOM PRO</p>
              <h1 className="mt-2 max-w-2xl font-serif text-4xl font-black tracking-tight sm:text-5xl">Buka Semua Fitur Driacom <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300">PRO</span></h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">Buat prompt tanpa batas dan nikmati pengalaman yang lebih cepat, bersih, dan bebas iklan.</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["∞", "Tanpa batas"],
                  ["◉", "Tanpa iklan"],
                  ["♛", "Semua engine"],
                  ["⚡", "Prioritas"],
                ].map(([icon, label]) => (
                  <div key={label} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-3">
                    <div className="text-lg font-black text-cyan-300">{icon}</div>
                    <div className="mt-1 text-[10px] font-bold text-zinc-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/20 p-6 lg:p-7">
              <p className="text-xs font-bold text-zinc-500">Mulai dari hanya</p>
              <div className="mt-1 flex flex-wrap items-end gap-2">
                <span className="text-4xl font-black sm:text-5xl">{formatRupiah(PAYMENT_CONFIG.price)}</span>
                <span className="pb-1 text-xs text-zinc-500">/ 30 hari</span>
              </div>
              <p className="mt-1 text-xs text-zinc-600 line-through">{formatRupiah(PAYMENT_CONFIG.normalPrice)}</p>
              <button type="button" onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth", block: "start" })} className="mt-5 w-full rounded-xl bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 px-5 py-3.5 text-sm font-black text-white shadow-xl shadow-violet-950/30 transition hover:scale-[1.01]">Upgrade Sekarang →</button>
              <p className="mt-3 text-[10px] leading-5 text-zinc-500">Harga sewaktu-waktu bisa berubah. Langganan sekarang sebelum harga kembali normal.</p>
            </div>
          </div>
        </section>

        <section id="plans" className="mt-7 grid scroll-mt-6 gap-5 lg:grid-cols-2">
          <button type="button" onClick={() => setPackageCode("PRO_30D")} className={`relative rounded-[26px] border p-6 text-left transition ${packageCode === "PRO_30D" ? "border-cyan-300/70 bg-gradient-to-br from-cyan-400/[0.10] via-violet-500/[0.06] to-transparent shadow-[0_20px_70px_rgba(34,211,238,0.08)]" : "border-white/10 bg-white/[0.02] hover:border-white/20"}`}>
            {packageCode === "PRO_30D" ? <span className="absolute right-5 top-5 rounded-full bg-cyan-300 px-2.5 py-1 text-[9px] font-black text-slate-950">DIPILIH</span> : null}
            <p className="text-xs font-black tracking-[0.18em] text-cyan-300">🔥 PRO 30 HARI</p>
            <div className="mt-3 flex flex-wrap items-end gap-2"><span className="text-3xl font-black">{formatRupiah(PAYMENT_CONFIG.price)}</span><span className="pb-1 text-xs text-zinc-600 line-through">{formatRupiah(PAYMENT_CONFIG.normalPrice)}</span></div>
            <p className="mt-1 text-xs font-bold text-cyan-200">Promo harga khusus</p>
            <ul className="mt-5 space-y-2.5 text-xs text-zinc-400">{benefits.map((b) => <li key={b}>✓ {b}</li>)}</ul>
          </button>

          <button type="button" onClick={() => setPackageCode("PRO_LIFETIME")} className={`relative rounded-[26px] border p-6 text-left transition ${packageCode === "PRO_LIFETIME" ? "border-amber-300/70 bg-gradient-to-br from-amber-400/[0.11] via-orange-500/[0.04] to-transparent shadow-[0_20px_70px_rgba(245,158,11,0.08)]" : "border-white/10 bg-white/[0.02] hover:border-white/20"}`}>
            <span className="absolute right-5 top-5 rounded-full bg-amber-300 px-2.5 py-1 text-[9px] font-black text-slate-950">BEST VALUE</span>
            <p className="text-xs font-black tracking-[0.18em] text-amber-300">♛ PRO LIFETIME · {PAYMENT_CONFIG.lifetimeLimit} PERTAMA</p>
            <div className="mt-3 flex flex-wrap items-end gap-2"><span className="text-3xl font-black">{formatRupiah(PAYMENT_CONFIG.lifetimePrice)}</span><span className="pb-1 text-xs text-zinc-600 line-through">{formatRupiah(PAYMENT_CONFIG.lifetimeNormalPrice)}</span></div>
            <p className="mt-1 text-xs font-bold text-amber-200">Sekali bayar, akses selamanya</p>
            <ul className="mt-5 space-y-2.5 text-xs text-zinc-400"><li>✓ Semua fitur PRO</li><li>✓ Akses selamanya</li><li>✓ Sekali bayar, bebas biaya bulanan</li><li>✓ Dukungan prioritas</li><li>✓ Update fitur terbaru</li></ul>
          </button>
        </section>

        <section className="mt-7 rounded-[26px] border border-white/10 bg-[#080d16] p-5 sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div><h2 className="text-xl font-black">Metode Pembayaran</h2><p className="mt-1 text-xs text-zinc-500">Pilih metode pembayaran yang kamu inginkan.</p></div>
            <div className="rounded-full border border-amber-300/20 bg-amber-300/[0.04] px-3 py-1.5 text-[10px] font-bold text-amber-200">Nominal: {formatRupiah(selectedPrice)}</div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            <button type="button" onClick={() => setPaymentMethod("QRIS")} className={`rounded-2xl border p-3 text-left ${paymentMethod === "QRIS" ? "border-cyan-300/60 bg-cyan-300/[0.06]" : "border-white/10 bg-white/[0.02]"}`}><div className="text-sm font-black">QRIS</div><div className="mt-1 text-[10px] text-zinc-600">Scan & bayar</div></button>
            {PAYMENT_CONFIG.methods.map((m) => <button type="button" key={m.name} onClick={() => setPaymentMethod(m.name)} className={`rounded-2xl border p-3 text-left ${paymentMethod === m.name ? "border-cyan-300/60 bg-cyan-300/[0.06]" : "border-white/10 bg-white/[0.02]"}`}><div className="truncate text-sm font-black">{m.name}</div><div className="mt-1 text-[10px] text-zinc-600">Transfer / e-wallet</div></button>)}
          </div>

          {paymentMethod === "QRIS" ? (
            <div className="mt-5 grid gap-6 rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-[#0d1722] to-[#080d15] p-5 sm:p-6 lg:grid-cols-[220px_1fr_220px] lg:items-center">
              <button
                type="button"
                onClick={() => setQrisZoomOpen(true)}
                className="group mx-auto w-full max-w-[210px] rounded-2xl bg-white p-3 text-left shadow-xl shadow-black/20 transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
                aria-label="Perbesar QRIS pembayaran Driacom"
              >
                <img src="/qris.jpg" alt="QRIS pembayaran Driacom — klik untuk memperbesar" className="h-auto w-full rounded-xl" />
                <span className="mt-2 flex items-center justify-center gap-1.5 text-[10px] font-black text-slate-700 transition group-hover:text-cyan-700">↗ Klik untuk perbesar</span>
              </button>
              <div><p className="text-lg font-black">QRIS All Payment</p><p className="mt-2 text-sm leading-6 text-zinc-500">Scan QRIS menggunakan aplikasi pembayaran favorit kamu. Pastikan nominal sesuai paket yang dipilih.</p><div className="mt-4 inline-flex rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-3 py-2 text-xs font-black text-cyan-200">Pembayaran aman & mudah</div></div>
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"><p className="text-[10px] font-bold text-zinc-600">NOMINAL PEMBAYARAN</p><p className="mt-1 text-2xl font-black">{formatRupiah(selectedPrice)}</p><button type="button" onClick={() => copyAccount("nominal", String(selectedPrice))} className="mt-3 w-full rounded-xl border border-white/10 px-3 py-2.5 text-xs font-black text-zinc-300">{copied === "nominal" ? "✓ Tersalin" : "Copy Nominal"}</button></div>
            </div>
          ) : (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {PAYMENT_CONFIG.methods.filter((m) => m.name === paymentMethod).map((m) => <div key={m.name} className="rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.035] p-5"><p className="text-xs font-black text-cyan-300">{m.name}</p><p className="mt-2 break-all text-2xl font-black tracking-wide">{m.account}</p><p className="mt-1 text-xs text-zinc-600">a.n. {PAYMENT_CONFIG.ownerName}</p><button type="button" onClick={() => copyAccount(m.name, m.account)} className="mt-4 rounded-xl border border-white/10 px-4 py-2.5 text-xs font-black text-zinc-300">{copied === m.name ? "✓ Tersalin" : "Copy Nomor"}</button></div>)}
            </div>
          )}
        </section>

        <section className="mt-7 rounded-[26px] border border-white/10 bg-[#080d16] p-5 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-xl font-black">Kirim Bukti Pembayaran</h2><p className="mt-1 text-xs text-zinc-500">Setelah membayar, upload bukti agar admin bisa memverifikasi akunmu.</p></div><span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-black text-zinc-500">{selectedLabel}</span></div>
          <label className="mt-5 flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-4 transition hover:border-cyan-300/30"><span className="min-w-0 truncate text-sm text-zinc-400">{proof ? proof.name : "Pilih screenshot / foto bukti pembayaran"}</span><span className="shrink-0 rounded-xl bg-white/[0.06] px-3 py-2 text-xs font-black">Pilih File</span><input className="hidden" type="file" accept="image/jpeg,image/png,image/webp" onChange={chooseProof} /></label>
          {proof ? <button type="button" onClick={() => setProof(null)} className="mt-2 text-xs font-bold text-zinc-500 hover:text-white">× Hapus bukti</button> : null}
          <button type="button" disabled={loading} onClick={submitProof} className="mt-4 w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 px-4 py-3.5 text-sm font-black text-white shadow-xl shadow-violet-950/20 disabled:opacity-50">{loading ? "Mengirim..." : `Kirim Bukti · ${formatRupiah(selectedPrice)}`}</button>
          {status ? <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-5 text-zinc-300">{status}{invoice ? <div className="mt-2 font-black text-cyan-200">Invoice: {invoice}</div> : null}</div> : null}
        </section>

        {invoice ? <section className="mt-5 rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.04] p-5"><div className="text-sm font-black">Bukti sudah masuk sistem</div><p className="mt-1 text-xs leading-5 text-zinc-500">Tunggu verifikasi admin. Kamu bisa menghubungi admin melalui WhatsApp dengan membawa invoice ini.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex rounded-xl border border-emerald-300/20 px-4 py-2.5 text-xs font-black text-emerald-200">Konfirmasi via WhatsApp</a></section> : null}
      </div>

      {qrisZoomOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="QRIS pembayaran Driacom"
          onClick={() => setQrisZoomOpen(false)}
        >
          <div
            className="relative flex max-h-[94vh] max-w-[94vw] items-center justify-center rounded-[28px] border border-white/15 bg-white p-3 shadow-[0_30px_120px_rgba(0,0,0,0.7)] sm:p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQrisZoomOpen(false)}
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#101722] text-xl font-black text-white shadow-xl transition hover:scale-105 hover:bg-[#182333] focus:outline-none focus:ring-2 focus:ring-cyan-300"
              aria-label="Tutup QRIS"
            >
              ×
            </button>
            <img
              src="/qris.jpg"
              alt="QRIS pembayaran Driacom"
              className="max-h-[88vh] w-auto max-w-[88vw] rounded-2xl object-contain"
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}
