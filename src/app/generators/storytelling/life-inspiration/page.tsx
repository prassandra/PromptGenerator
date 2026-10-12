import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const steps = [
  ["01", "Ide Cerita"],
  ["02", "Gaya"],
  ["03", "Struktur"],
  ["04", "Visual"],
  ["05", "Generate"],
];

export default function ShortStoryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050811] text-white">
      <div className="mx-auto min-h-screen max-w-[1500px] px-5 py-7 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-40 flex items-start justify-between gap-5 border-b border-white/[0.07] bg-[#050811]/95 px-2 py-4 backdrop-blur-xl">
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[0.24em] text-cyan-300">
              DRIACOM — PROMPT AI GENERATOR
            </div>
            <h1 className="mt-2 font-serif text-4xl font-black tracking-tight sm:text-5xl">
              Short Story
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
              Ceritakan ide kamu. Driacom menyusun alur, karakter, konflik, dan ending secara otomatis.
            </p>
          </div>

          <LanguageSwitcher compact />
        </header>

        <div className="mt-8 grid gap-3 sm:grid-cols-5">
          {steps.map(([number, label]) => (
            <div
              key={number}
              className="rounded-2xl border border-white/[0.08] bg-[#0a0f17] px-4 py-4"
            >
              <div className="text-[12px] font-black tracking-[0.16em] text-cyan-300">{number}</div>
              <div className="mt-2 text-sm font-bold text-zinc-200">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
          <section className="rounded-[26px] border border-white/[0.08] bg-[#0a0f17] p-5 sm:p-7">
            <div className="text-[10px] font-black tracking-[0.24em] text-cyan-300">STORY DIRECTOR</div>
            <h2 className="mt-2 text-2xl font-black">Buat Short Story</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Kamu cukup menentukan arah cerita. Detail struktur dikerjakan otomatis oleh Driacom.
            </p>

            <label className="mt-7 block">
              <span className="mb-2 block text-sm font-bold text-zinc-200">01 &nbsp; Ide Cerita</span>
              <textarea
                rows={7}
                placeholder="Contoh: seorang anak belajar bahwa menghargai orang tua lebih penting daripada harta..."
                className="w-full resize-y rounded-2xl border border-white/[0.09] bg-[#070b12] px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400/30"
              />
              <span className="mt-2 block text-right text-[11px] text-zinc-600">0 / 1000</span>
            </label>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm font-bold text-zinc-200">02 &nbsp; Durasi</span>
                <select className="w-full rounded-xl border border-white/[0.09] bg-[#070b12] px-4 py-3 text-sm text-zinc-200 outline-none focus:border-cyan-400/30">
                  <option>30 detik</option>
                  <option>60 detik</option>
                  <option>90 detik</option>
                  <option>120 detik</option>
                </select>
              </label>

              <label>
                <span className="mb-2 block text-sm font-bold text-zinc-200">03 &nbsp; Gaya Cerita</span>
                <select className="w-full rounded-xl border border-white/[0.09] bg-[#070b12] px-4 py-3 text-sm text-zinc-200 outline-none focus:border-cyan-400/30">
                  <option>Natural & Emosional</option>
                  <option>Inspiratif</option>
                  <option>Lucu</option>
                  <option>Menyentuh</option>
                  <option>Twist Ending</option>
                </select>
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-bold text-zinc-200">04 &nbsp; Narasi</span>
              <select className="w-full rounded-xl border border-white/[0.09] bg-[#070b12] px-4 py-3 text-sm text-zinc-200 outline-none focus:border-cyan-400/30">
                <option>Narator + Dialog</option>
                <option>Narator Dominan</option>
                <option>Dialog Dominan</option>
                <option>Tanpa Narator</option>
              </select>
            </label>

            <button
              type="button"
              disabled
              className="mt-6 w-full cursor-not-allowed rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-4 text-sm font-black tracking-[0.08em] text-cyan-200"
            >
              RACIK SHORT STORY — MESIN SEGERA DIAKTIFKAN
            </button>
          </section>

          <section className="min-h-[620px] rounded-[26px] border border-white/[0.08] bg-[#080d15] p-5 sm:p-7">
            <div className="flex h-full min-h-[560px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/[0.08] bg-[#070b12] text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.035] text-2xl text-cyan-300">
                ✦
              </div>
              <h2 className="mt-5 text-2xl font-black">Story Workspace</h2>
              <p className="mt-3 max-w-md px-5 text-sm leading-6 text-zinc-600">
                Isi ide cerita dan pilihan dasar. Driacom akan membuat struktur cerita, karakter, scene, dialog, dan arahan produksi di area ini.
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-10 border-t border-white/[0.07] py-7 text-center text-[11px] tracking-[0.16em] text-zinc-700">
          DRIACOM — PROMPT AI GENERATOR
        </footer>
      </div>
    </main>
  );
}
