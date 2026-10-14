import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md rounded-2xl border border-white/10 bg-[#0c1017] p-8 shadow-2xl">
        <span className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
          404 · Halaman Tidak Ditemukan
        </span>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-white">
          Alamat Tidak Ditemukan
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Halaman yang Anda tuju mungkin telah dipindahkan atau digabungkan ke dalam generator aktif Driacom Studio.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
          >
            <Home className="h-4 w-4" />
            Kembali ke Dashboard
          </Link>
          <Link
            href="/generators/animation"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Generator Animasi
          </Link>
        </div>
      </div>
    </div>
  );
}
