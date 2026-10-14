"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col items-center justify-center bg-[#07090e] p-6 text-center text-slate-100">
        <div className="max-w-md rounded-2xl border border-white/10 bg-[#0c1017] p-8 shadow-2xl">
          <h2 className="text-xl font-bold text-white">Terjadi Masalah</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Halaman sedang disegarkan kembali. Silakan coba lagi.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
          >
            Muat Ulang
          </button>
        </div>
      </body>
    </html>
  );
}
