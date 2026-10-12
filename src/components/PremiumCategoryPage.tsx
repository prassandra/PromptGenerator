import Link from "next/link";

type Props = {
  backHref: string;
  backLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  tag: string;
};

export default function PremiumCategoryPage({
  backHref, backLabel, eyebrow, title, description, tag,
}: Props) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050811] text-white">
      <div className="mx-auto min-h-screen max-w-[1500px] px-5 py-7 sm:px-8 lg:px-10">
        <header className="flex items-start justify-between gap-5">
          <div>
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] p-2">
              <img src="/driacom-logo.png" alt="Driacom" className="h-full w-full object-contain" />
            </div>
            <div className="text-[13px] font-bold uppercase tracking-[0.24em] text-cyan-300">
              DRIACOM — PROMPT AI GENERATOR
            </div>
            <div className="mt-2 text-[11px] font-black tracking-[0.18em] text-zinc-600">{eyebrow}</div>
            <h1 className="mt-2 font-serif text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">{description}</p>
          </div>
          <Link href={backHref} className="shrink-0 rounded-xl border border-white/[0.10] bg-white/[0.025] px-4 py-3 text-sm font-bold text-zinc-200 transition hover:border-cyan-400/20 hover:text-white">
            ← Kembali ke {backLabel}
          </Link>
        </header>

        <div className="mt-8 grid gap-3 sm:grid-cols-5">
          {["01", "02", "03", "04", "05"].map((n, i) => (
            <div key={n} className="rounded-2xl border border-white/[0.08] bg-[#0a0f17] px-4 py-4">
              <div className="text-[12px] font-black tracking-[0.16em] text-cyan-300">{n}</div>
              <div className="mt-2 text-sm font-bold text-zinc-200">
                {["Ide", "Karakter", "Alur", "Scene", "Generate"][i]}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
          <section className="rounded-[26px] border border-white/[0.08] bg-[#0a0f17] p-5 sm:p-7">
            <div className="text-[10px] font-black tracking-[0.24em] text-cyan-300">{tag}</div>
            <h2 className="mt-2 text-2xl font-black">Buat {title}</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Tentukan ide utama. Mesin Driacom akan mengembangkan struktur konten setelah engine kategori ini diaktifkan.
            </p>
            <label className="mt-7 block">
              <span className="mb-2 block text-sm font-bold text-zinc-200">01 &nbsp; Ide Konten</span>
              <textarea rows={8} placeholder="Tulis ide kamu di sini..." className="w-full resize-y rounded-2xl border border-white/[0.09] bg-[#070b12] px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400/30" />
            </label>
            <button type="button" disabled className="mt-6 w-full cursor-not-allowed rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-4 text-sm font-black tracking-[0.08em] text-cyan-200">
              RACIK PROMPT — MESIN SEGERA DIAKTIFKAN
            </button>
          </section>

          <section className="min-h-[580px] rounded-[26px] border border-white/[0.08] bg-[#080d15] p-5 sm:p-7">
            <div className="flex h-full min-h-[520px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/[0.08] bg-[#070b12] text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.035] text-2xl text-cyan-300">✦</div>
              <h2 className="mt-5 text-2xl font-black">{title} Workspace</h2>
              <p className="mt-3 max-w-md px-5 text-sm leading-6 text-zinc-600">
                Area output akan menampilkan struktur, prompt, dan detail produksi dari engine Driacom.
              </p>
            </div>
          </section>
        </div>

        <p className="mt-10 text-center text-[11px] tracking-[0.16em] text-zinc-700">DRIACOM — PROMPT AI GENERATOR</p>
      </div>
    </main>
  );
}
