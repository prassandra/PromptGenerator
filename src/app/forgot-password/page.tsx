"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-[#0b1018] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-cyan-300/50";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setMessage("");

    if (!email.trim()) {
      setMessage("Masukkan email yang terdaftar.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error || "Gagal mengirim link reset."
        );
      }

      setMessage(
        data.message ||
          "Link reset kata sandi telah dikirim ke email kamu."
      );
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Gagal mengirim link reset."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050811] px-5 py-10 text-white">
      <div className="mx-auto flex min-h-[85vh] max-w-md items-center">
        <section className="w-full rounded-3xl border border-white/[0.08] bg-[#090e16] p-6 shadow-2xl sm:p-8">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] p-2.5">
            <img src="/driacom-logo.png" alt="Driacom" className="h-full w-full object-contain" />
          </div>

          <p className="text-[10px] font-black tracking-[0.28em] text-amber-300">
            DRIACOM
          </p>

          <h1 className="mt-2 text-3xl font-black">
            Lupa Kata Sandi
          </h1>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Masukkan email yang terdaftar untuk menerima link
            reset kata sandi.
          </p>

          <form onSubmit={submit} className="mt-6 space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoComplete="email"
              className={inputClass}
            />

            <button
              disabled={loading}
              className="w-full rounded-2xl bg-cyan-400 px-4 py-3.5 text-sm font-black text-slate-950 disabled:opacity-50"
            >
              {loading
                ? "Mengirim..."
                : "Kirim Link Reset"}
            </button>
          </form>

          {message ? (
            <p className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs leading-5 text-zinc-400">
              {message}
            </p>
          ) : null}

          <button
            type="button"
            onClick={() => router.push("/login")}
            className="mt-6 w-full text-center text-xs font-semibold text-cyan-300"
          >
            Kembali ke Masuk
          </button>
        </section>
      </div>
    </main>
  );
}