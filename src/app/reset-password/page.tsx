"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-[#0b1018] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-cyan-300/50";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadRecoverySession() {
      const { data } = await supabase.auth.getSession();

      if (!active) return;

      if (data.session) {
        setSessionReady(true);
      } else {
        setMessage(
          "Link reset tidak valid atau sudah kedaluwarsa. Silakan minta link reset baru."
        );
      }

      setReady(true);
    }

    loadRecoverySession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!active) return;

        if (event === "PASSWORD_RECOVERY" || session) {
          setSessionReady(true);
          setReady(true);
        }
      }
    );

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setMessage("");

    if (password.length < 6) {
      setMessage("Password minimal 6 karakter.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Password dan konfirmasi password tidak sama.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({ password });

      if (error) throw error;

      setMessage("Password berhasil diperbarui. Mengarahkan ke halaman masuk...");

      await supabase.auth.signOut();

      window.setTimeout(() => {
        router.replace("/login");
      }, 1200);
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Gagal memperbarui password. Silakan coba lagi."
      );
    } finally {
      setLoading(false);
    }
  }

  if (!ready) {
    return (
      <main className="min-h-screen bg-[#050811] px-5 py-10 text-white">
        <div className="mx-auto flex min-h-[85vh] max-w-md items-center">
          <section className="w-full rounded-3xl border border-white/[0.08] bg-[#090e16] p-6 text-center shadow-2xl sm:p-8">
            <img
              src="/driacom-logo.png"
              alt="Driacom"
              className="mx-auto h-16 w-16 object-contain"
            />
            <p className="mt-5 text-sm text-zinc-400">Memverifikasi link reset...</p>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050811] px-5 py-10 text-white">
      <div className="mx-auto flex min-h-[85vh] max-w-md items-center">
        <section className="w-full rounded-3xl border border-white/[0.08] bg-[#090e16] p-6 shadow-2xl sm:p-8">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] p-2.5">
            <img
              src="/driacom-logo.png"
              alt="Driacom"
              className="h-full w-full object-contain"
            />
          </div>

          <p className="text-[10px] font-black tracking-[0.28em] text-amber-300">
            DRIACOM
          </p>

          <h1 className="mt-2 text-3xl font-black">Buat Password Baru</h1>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Masukkan password baru untuk akun Driacom kamu.
          </p>

          {sessionReady ? (
            <form onSubmit={submit} className="mt-6 space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password Baru"
                autoComplete="new-password"
                className={inputClass}
              />

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Konfirmasi Password"
                autoComplete="new-password"
                className={inputClass}
              />

              <button
                disabled={loading}
                className="w-full rounded-2xl bg-cyan-400 px-4 py-3.5 text-sm font-black text-slate-950 disabled:opacity-50"
              >
                {loading ? "Menyimpan..." : "Simpan Password"}
              </button>
            </form>
          ) : null}

          {message ? (
            <p className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs leading-5 text-zinc-400">
              {message}
            </p>
          ) : null}

          <button
            type="button"
            onClick={() => router.replace("/login")}
            className="mt-6 w-full text-center text-xs font-semibold text-cyan-300"
          >
            Kembali ke Masuk
          </button>
        </section>
      </div>
    </main>
  );
}
