"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-[#0b1018] px-4 py-3.5 pr-12 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-cyan-300/50";

type Mode = "login" | "register";

export default function LoginPage() {
  const router = useRouter();

  const [mode, setMode] = useState<Mode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function switchMode(nextMode: Mode) {
    setMode(nextMode);
    setMessage("");
    setPassword("");
    setConfirmPassword("");
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setMessage("");

    if (!email.trim() || !password) {
      setMessage("Masukkan email dan sandi.");
      return;
    }

    // Login admin memakai username, jadi jangan paksa format email di halaman login.
    // Member tetap divalidasi sebagai email di server.
    if (mode === "login" && email.includes("@") === false) {
      // Biarkan server mengecek apakah ini username admin.
      // Jika bukan admin, server akan mengembalikan pesan akun member harus memakai email.
    }

    if (mode === "register") {
      if (!name.trim()) {
        setMessage("Masukkan nama kamu.");
        return;
      }

      if (password.length < 6) {
        setMessage("Sandi minimal 6 karakter.");
        return;
      }

      if (password !== confirmPassword) {
        setMessage("Sandi dan ulangi sandi tidak sama.");
        return;
      }
    }

    setLoading(true);

    try {
      const endpoint =
        mode === "register"
          ? "/api/auth/register"
          : "/api/auth/login";

      const body =
        mode === "register"
          ? {
              name: name.trim(),
              email: email.trim().toLowerCase(),
              password,
              confirmPassword,
            }
          : {
              identifier: email.trim().toLowerCase(),
              password,
              mode: "login",
            };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Proses gagal.");
      }

      if (mode === "register") {
        setMessage(
          data.message ||
            "Akun berhasil dibuat. Silakan cek email kamu jika diperlukan untuk verifikasi."
        );

        setMode("login");
        setPassword("");
        setConfirmPassword("");
        return;
      }

      router.replace("/dashboard");
      router.refresh();
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Proses gagal."
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
            {mode === "login" ? "Masuk ke Driacom" : "Buat Akun Driacom"}
          </h1>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            {mode === "login"
              ? "Masukkan email untuk melanjutkan."
              : "Buat akun untuk mulai menggunakan Driacom."}
          </p>

          <div className="mt-6 grid grid-cols-2 rounded-xl border border-white/10 bg-black/10 p-1">
            <button
              type="button"
              onClick={() => switchMode("login")}
              className={`rounded-lg px-3 py-2.5 text-xs font-bold ${
                mode === "login"
                  ? "bg-white/[0.08] text-white"
                  : "text-zinc-500"
              }`}
            >
              Masuk
            </button>

            <button
              type="button"
              onClick={() => switchMode("register")}
              className={`rounded-lg px-3 py-2.5 text-xs font-bold ${
                mode === "register"
                  ? "bg-white/[0.08] text-white"
                  : "text-zinc-500"
              }`}
            >
              Daftar
            </button>
          </div>

          <form onSubmit={submit} className="mt-5 space-y-4">
            {mode === "register" && (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama"
                autoComplete="name"
                className={inputClass}
              />
            )}

            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={mode === "login" ? "Email" : "Email"}
              autoComplete={mode === "login" ? "username" : "email"}
              className={inputClass}
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sandi"
                autoComplete={
                  mode === "register"
                    ? "new-password"
                    : "current-password"
                }
                className={inputClass}
              />

              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute right-3 top-1/2 -translate-y-1/2 px-2 text-xs text-zinc-500 hover:text-white"
              >
                {showPassword ? "Sembunyikan" : "Lihat"}
              </button>
            </div>

            {mode === "register" && (
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Ulangi Sandi"
                  autoComplete="new-password"
                  className={inputClass}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((value) => !value)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-2 text-xs text-zinc-500 hover:text-white"
                >
                  {showConfirmPassword ? "Sembunyikan" : "Lihat"}
                </button>
              </div>
            )}

            {mode === "login" && (
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => router.push("/forgot-password")}
                  className="text-xs font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  Lupa kata sandi?
                </button>
              </div>
            )}

            <button
              disabled={loading}
              className="w-full rounded-2xl bg-cyan-400 px-4 py-3.5 text-sm font-black text-slate-950 disabled:opacity-50"
            >
              {loading
                ? "Memproses..."
                : mode === "register"
                ? "Daftar Akun"
                : "Masuk"}
            </button>
          </form>

          {message ? (
            <p className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs leading-5 text-zinc-400">
              {message}
            </p>
          ) : null}

          <div className="mt-6 text-center text-xs text-zinc-600">
            {mode === "login" ? (
              <>
                Belum punya akun?{" "}
                <button
                  type="button"
                  onClick={() => switchMode("register")}
                  className="font-bold text-cyan-300"
                >
                  Daftar akun
                </button>
              </>
            ) : (
              <>
                Sudah punya akun?{" "}
                <button
                  type="button"
                  onClick={() => switchMode("login")}
                  className="font-bold text-cyan-300"
                >
                  Masuk
                </button>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}