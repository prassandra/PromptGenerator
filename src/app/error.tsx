"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log error in dev console
    console.error("App error boundary caught:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md rounded-2xl border border-white/10 bg-[#0c1017] p-8 shadow-2xl">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
          <AlertCircle className="h-6 w-6" />
        </div>
        <h2 className="mt-4 text-xl font-bold text-white">Terjadi Masalah Sesaat</h2>
        <p className="mt-2 text-sm text-zinc-400">
          Sistem sedang memuat ulang komponen. Anda dapat mencoba memuat ulang halaman ini.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
          >
            <RotateCcw className="h-4 w-4" />
            Coba Lagi
          </button>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
