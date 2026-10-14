"use client";

import { useEffect, useState, type ReactNode } from "react";
import AdShell from "@/components/AdShell";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PremiumSidebar from "@/components/PremiumSidebar";
import WorkspaceBackButton from "@/components/WorkspaceBackButton";
import { STORY_GENRES, STORY_TONES, createDefaultStorytellingForm } from "@/lib/prompts/storytelling/defaults";
import type { StoryBlueprint, StorytellingForm } from "@/lib/prompts/storytelling/types";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#10141e] px-4 py-3.5 text-sm font-medium text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-400/80 focus:bg-[#131926]";
const textareaClass =
  "w-full resize-none rounded-xl border border-white/10 bg-[#10141e] px-4 py-3.5 text-sm leading-relaxed font-medium text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-400/80 focus:bg-[#131926]";
const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-300";

type IdeaOption = { title: string; concept: string; hook: string };

const GENRES = [...STORY_GENRES];
const TONES = [...STORY_TONES];
const LANGUAGES = ["Bahasa Indonesia", "English", "Bahasa Melayu", "日本語", "한국어", "Español"];
const RATIOS = ["9:16", "16:9", "1:1", "4:5"];
const VISUALS = ["Realistis Sinematik", "Sangat Realistis", "Animasi 3D"];
const AUDIOS = [
  "Narator + Dialog + Musik + SFX",
  "Narator + Musik + SFX",
  "Dialog + Musik + SFX",
  "Musik + SFX",
  "Tanpa Audio",
];
const CHARACTER_COUNTS = ["1", "2", "3", "4", "5", "6", "7", "8"];

const STORY_IDEA_PLACEHOLDERS: Record<string, string> = {
  "Cerita Pendek": "Contoh: Seorang anak menemukan surat lama yang mengubah cara pandangnya terhadap keluarganya...",
  "Drama": "Contoh: Dua sahabat harus memilih antara persahabatan atau mengungkap rahasia besar...",
  "Romantis": "Contoh: Dua orang yang pernah saling mencintai bertemu kembali setelah bertahun-tahun di stasiun kereta...",
  "Horror": "Contoh: Suara ketukan setiap malam selalu berhenti tepat di depan pintu kamar nomor 13...",
  "Komedi": "Contoh: Kesalahpahaman saat wawancara kerja yang berujung ditunjuk menjadi CEO dadakan...",
  "Misteri": "Contoh: Surat tanpa nama muncul setiap fajar dan perlahan membongkar rahasia desa...",
  "Fantasi": "Contoh: Pintu rahasia di lemari buku tua kakek yang membawa ke peradaban terapung...",
  "Sejarah": "Contoh: Keputusan berani seorang kurir muda di tengah peristiwa penting kemerdekaan...",
};

function getStoryIdeaPlaceholder(genre: string): string {
  return STORY_IDEA_PLACEHOLDERS[genre] || "Tulis ide atau premis cerita yang ingin kamu buat...";
}

export default function StorytellingPage() {
  const [form, setForm] = useState<StorytellingForm>(() => createDefaultStorytellingForm());
  const [result, setResult] = useState<StoryBlueprint | null>(null);
  const [loading, setLoading] = useState(false);
  const [ideaLoading, setIdeaLoading] = useState(false);
  const [error, setError] = useState("");
  const [ideaError, setIdeaError] = useState("");
  const [ideaOptions, setIdeaOptions] = useState<IdeaOption[]>([]);
  const [selectedIdea, setSelectedIdea] = useState("");
  const [copied, setCopied] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const g = params.get("genre");
    if (g && (GENRES as readonly string[]).includes(g)) {
      setForm((prev) => ({ ...prev, genre: g as StorytellingForm["genre"] }));
    }
  }, []);

  const update = <K extends keyof StorytellingForm>(key: K, value: StorytellingForm[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  function setAudio(audio: string) {
    update("audio", audio);
    update("narrator", audio.includes("Narator"));
    update("dialogue", audio.includes("Dialog"));
  }

  async function helpIdea() {
    if (ideaLoading) return;
    setIdeaError("");
    setIdeaOptions([]);
    setIdeaLoading(true);
    try {
      const res = await fetch("/api/storytelling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "ideas",
          genre: form.genre,
          tone: form.tone,
          language: form.language,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Gagal membuat ide.");
      setIdeaOptions(data.ideas || []);
    } catch (e) {
      setIdeaError(e instanceof Error ? e.message : "Gagal membuat ide.");
    } finally {
      setIdeaLoading(false);
    }
  }

  function chooseIdea(item: IdeaOption) {
    setSelectedIdea(item.title);
    update("idea", item.concept);
    setIdeaOptions([]);
  }

  async function generate() {
    if (loading || !form.idea.trim()) return;
    setError("");
    setResult(null);
    setLoading(true);
    try {
      const res = await fetch("/api/storytelling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Gagal meracik cerita.");
      setResult(data.story);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Gagal meracik cerita.");
    } finally {
      setLoading(false);
    }
  }

  async function copy(text: string, id: string) {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(""), 1600);
  }

  const sceneTotal = Math.max(1, Math.min(10, Number(form.scenes) || 1));

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#080a10] text-slate-100 lg:flex-row">
      <PremiumSidebar active="storytelling" />

      <div className="min-w-0 flex-1">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#080a10]/90 px-4 py-3.5 backdrop-blur-xl sm:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
                <span>Story Director</span>
                <span aria-hidden="true">·</span>
                <span className="text-zinc-500">Narasi & Drama Sinematik</span>
              </div>
              <h1 className="text-lg font-bold text-white sm:text-xl">Storytelling Engine</h1>
            </div>

            <div className="flex items-center gap-2">
              <WorkspaceBackButton />
              <LanguageSwitcher compact />
            </div>
          </div>
        </header>

        {/* Main Workspace */}
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-8 sm:py-8">
          <div className="workspace-two-col">
            {/* Form Column */}
            <section className="workspace-form rounded-2xl border border-white/[0.07] bg-[#0c1017] p-5 shadow-xl sm:p-6">
              <div className="mb-5 border-b border-white/[0.06] pb-4">
                <h2 className="text-lg font-bold text-white">Racik Cerita & Skenario</h2>
                <p className="mt-1 text-xs text-zinc-400">
                  Tentukan genre, premis, dan tone. Driacom akan menyusun master sheet karakter dan adegan demi adegan.
                </p>
              </div>

              <div className="space-y-4">
                <Field label="Genre Cerita">
                  <CustomSelect
                    value={form.genre}
                    options={GENRES}
                    disabled={loading || ideaLoading}
                    onChange={(v) => {
                      update("genre", v);
                      setIdeaOptions([]);
                      setSelectedIdea("");
                    }}
                  />
                </Field>

                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className={labelClass}>Ide / Premis Cerita</label>
                    <span className="text-[11px] text-zinc-500">{form.idea.length}/1200</span>
                  </div>
                  <textarea
                    disabled={loading || ideaLoading}
                    maxLength={1200}
                    rows={5}
                    value={form.idea}
                    onChange={(e) => update("idea", e.target.value)}
                    className={textareaClass}
                    placeholder={getStoryIdeaPlaceholder(form.genre)}
                  />
                  <button
                    type="button"
                    disabled={loading || ideaLoading}
                    onClick={helpIdea}
                    className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-950/30 py-2.5 text-xs font-bold text-indigo-300 transition hover:bg-indigo-900/40 hover:text-white disabled:opacity-50"
                  >
                    {ideaLoading ? "Mencari ide menarik..." : "✦ Bantu Buat Ide Otomatis"}
                  </button>
                  {selectedIdea && (
                    <p className="mt-1 text-xs text-indigo-300">✓ Ide aktif: {selectedIdea}</p>
                  )}
                </div>

                {ideaOptions.length > 0 && (
                  <div className="space-y-2 rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-300">
                      Pilihan Ide dari AI:
                    </p>
                    {ideaOptions.map((item, index) => (
                      <button
                        key={`${item.title}-${index}`}
                        type="button"
                        onClick={() => chooseIdea(item)}
                        className="w-full rounded-lg border border-white/10 bg-[#0d121c] p-2.5 text-left transition hover:border-indigo-400/40 hover:bg-[#121826]"
                      >
                        <div className="text-xs font-bold text-white">{item.title}</div>
                        <div className="mt-0.5 text-[11px] leading-relaxed text-zinc-400">{item.concept}</div>
                      </button>
                    ))}
                  </div>
                )}
                {ideaError && (
                  <div className="rounded-xl border border-red-500/30 bg-red-950/30 p-2.5 text-xs text-red-300">
                    {ideaError}
                  </div>
                )}

                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Tone Cerita">
                    <CustomSelect
                      value={form.tone}
                      options={TONES}
                      disabled={loading}
                      onChange={(v) => update("tone", v)}
                    />
                  </Field>
                  <Field label="Jumlah Karakter">
                    <CustomSelect
                      value={form.characterCount}
                      options={CHARACTER_COUNTS}
                      disabled={loading}
                      onChange={(v) => update("characterCount", v)}
                      suffix=" Karakter"
                    />
                  </Field>
                  <Field label="Bahasa Dialog">
                    <CustomSelect
                      value={form.language}
                      options={LANGUAGES}
                      disabled={loading}
                      onChange={(v) => update("language", v)}
                    />
                  </Field>
                  <Field label="Rasio Aspek">
                    <CustomSelect
                      value={form.ratio}
                      options={RATIOS}
                      disabled={loading}
                      onChange={(v) => update("ratio", v)}
                    />
                  </Field>
                  <Field label="Format Audio">
                    <CustomSelect
                      value={form.audio}
                      options={AUDIOS}
                      disabled={loading}
                      onChange={setAudio}
                    />
                  </Field>
                  <Field label="Gaya Visual">
                    <CustomSelect
                      value={form.visualStyle}
                      options={VISUALS}
                      disabled={loading}
                      onChange={(v) => update("visualStyle", v)}
                    />
                  </Field>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-[#090d14] p-3.5 space-y-3">
                  <div>
                    <label className={labelClass}>Durasi Tiap Adegan</label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {["4 detik per scene", "6 detik per scene", "8 detik per scene", "10 detik per scene"].map(
                        (dur) => (
                          <button
                            type="button"
                            key={dur}
                            disabled={loading}
                            onClick={() => update("duration", dur)}
                            className={`rounded-lg border px-2 py-2 text-xs font-semibold transition ${
                              form.duration === dur
                                ? "border-indigo-500/50 bg-indigo-600/25 text-white"
                                : "border-white/10 bg-[#10141e] text-zinc-400 hover:text-white"
                            }`}
                          >
                            {dur.split(" ")[0]}s
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label className={labelClass}>Jumlah Adegan ({sceneTotal} Scene)</label>
                      <span className="text-xs font-bold text-indigo-400">
                        {sceneTotal * Number(form.duration.match(/\d+/)?.[0] || 6)}s Total
                      </span>
                    </div>
                    <input
                      disabled={loading}
                      type="range"
                      min={1}
                      max={10}
                      step={1}
                      value={sceneTotal}
                      onChange={(e) => update("scenes", e.target.value)}
                      className="w-full accent-indigo-500"
                    />
                  </div>
                </div>

                {/* High CTR Action Sponsor Unit */}
                <AdShell placement="action" />

                {/* Submit Action */}
                <button
                  type="button"
                  disabled={loading || !form.idea.trim()}
                  onClick={generate}
                  className="w-full rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-950/50 transition hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {loading ? "Menyusun Naskah & Storyboard..." : "✦ Racik Cerita Sinematik"}
                </button>

                {error && (
                  <div className="rounded-xl border border-red-500/30 bg-red-950/30 p-3 text-xs text-red-300">
                    {error}
                  </div>
                )}
              </div>
            </section>

            {/* Output Column */}
            <section className="workspace-output min-w-0 rounded-2xl border border-white/[0.07] bg-[#0c1017] p-5 shadow-xl sm:p-6">
              {loading ? (
                <div className="flex min-h-[500px] flex-col items-center justify-center p-8 text-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-indigo-400 border-t-transparent" />
                  <p className="mt-4 text-sm font-semibold text-white">Story Director Sedang Bekerja...</p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Membangun struktur narasi, konsistensi karakter, adegan pembuka hingga penutup.
                  </p>
                </div>
              ) : result ? (
                <div className="space-y-6">
                  <div className="border-b border-white/[0.06] pb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                      Story Blueprint Terbuat
                    </span>
                    <h2 className="mt-1 text-2xl font-bold text-white">{result.title}</h2>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-300">{result.logline}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-400">
                      <span className="rounded bg-indigo-950/40 px-2.5 py-1 text-indigo-300 font-medium border border-indigo-500/20">
                        {result.genre}
                      </span>
                      <span className="rounded bg-white/[0.04] px-2.5 py-1">
                        {result.scenes.length} Adegan
                      </span>
                      <span className="rounded bg-white/[0.04] px-2.5 py-1">
                        {form.duration}
                      </span>
                      <span className="rounded bg-white/[0.04] px-2.5 py-1">
                        {form.visualStyle}
                      </span>
                    </div>
                  </div>

                  {result.characters.length > 0 && (
                    <div className="space-y-3 rounded-xl border border-white/[0.08] bg-[#090d14] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-indigo-300">
                          Master Character Sheet ({result.characters.length} Karakter)
                        </span>
                      </div>
                      {result.characters.map((c) => (
                        <div key={c.id} className="rounded-lg border border-white/[0.06] bg-[#06080d] p-3">
                          <div className="mb-1.5 flex items-center justify-between">
                            <span className="text-xs font-semibold text-white">{c.name} ({c.id})</span>
                            <button
                              type="button"
                              onClick={() => copy(c.masterPrompt || buildFallbackCharacterPrompt(c), `char-${c.id}`)}
                              className="rounded border border-white/10 px-2 py-0.5 text-[11px] text-zinc-300 hover:text-white"
                            >
                              {copied === `char-${c.id}` ? "✓ Tersalin" : "Salin Prompt"}
                            </button>
                          </div>
                          <pre className="max-h-36 overflow-auto text-xs leading-relaxed text-zinc-400 whitespace-pre-wrap font-mono">
                            {c.masterPrompt || buildFallbackCharacterPrompt(c)}
                          </pre>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* High CTR In-Result Sponsor Slot */}
                  <AdShell placement="result" />

                  <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-300">
                      Adegan Sinematik ({result.scenes.length} Scene)
                    </h3>
                    {result.scenes.map((scene) => (
                      <div
                        key={scene.sceneNumber}
                        className="rounded-xl border border-white/[0.07] bg-[#090d14] p-4 space-y-3"
                      >
                        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                          <span className="text-xs font-bold text-white">
                            Scene {scene.sceneNumber}: {scene.title}
                          </span>
                          <span className="text-[11px] text-zinc-400">{scene.purpose}</span>
                        </div>

                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-cyan-300">
                              Storyboard Start-Frame Prompt
                            </span>
                            <button
                              type="button"
                              onClick={() => copy(scene.storyboardImagePrompt || scene.imagePrompt, `img-${scene.sceneNumber}`)}
                              className="rounded border border-white/10 px-2 py-0.5 text-[11px] text-zinc-300 hover:text-white"
                            >
                              {copied === `img-${scene.sceneNumber}` ? "✓ Tersalin" : "Salin"}
                            </button>
                          </div>
                          <pre className="max-h-36 overflow-auto rounded-lg bg-[#06080d] p-2.5 text-xs text-zinc-300 whitespace-pre-wrap font-mono">
                            {scene.storyboardImagePrompt || scene.imagePrompt}
                          </pre>
                        </div>

                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-indigo-300">
                              Prompt Video & Arahan Gerak
                            </span>
                            <button
                              type="button"
                              onClick={() => copy(scene.videoPrompt, `vid-${scene.sceneNumber}`)}
                              className="rounded border border-white/10 px-2 py-0.5 text-[11px] text-zinc-300 hover:text-white"
                            >
                              {copied === `vid-${scene.sceneNumber}` ? "✓ Tersalin" : "Salin"}
                            </button>
                          </div>
                          <pre className="max-h-44 overflow-auto rounded-lg bg-[#06080d] p-2.5 text-xs text-zinc-300 whitespace-pre-wrap font-mono">
                            {scene.videoPrompt}
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex min-h-[500px] flex-col items-center justify-center p-8 text-center text-zinc-400">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] text-2xl text-indigo-400">
                    ✦
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white">Studio Story Siap</h3>
                  <p className="mt-1 max-w-sm text-xs text-zinc-400">
                    Ketik premis cerita dan klik tombol Racik Cerita Sinematik. Struktur adegan, dialog, dan storyboard prompt akan diracik otomatis.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function buildFallbackCharacterPrompt(c: StoryBlueprint["characters"][number]) {
  return `${c.name}, ${c.age}, ${c.gender}, ${c.appearance}, personality ${c.personality}, goal ${c.goal}, visual signature ${c.visualSignature}. Keep identity, face, hair, body proportions, wardrobe and accessories consistent across every scene.`;
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  );
}

function CustomSelect({
  value,
  options,
  onChange,
  disabled,
  suffix = "",
}: {
  value: string;
  options: string[];
  onChange: (v: string) => void;
  disabled?: boolean;
  suffix?: string;
}) {
  const [open, setOpen] = useState(false);
  const display = suffix && value ? `${value}${suffix}` : value;

  return (
    <div className="relative">
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        className={`${inputClass} flex items-center justify-between text-left`}
      >
        <span className="truncate">{display}</span>
        <span className="text-zinc-500">⌄</span>
      </button>

      {open && !disabled && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
          <div className="absolute left-0 right-0 z-40 mt-1 max-h-60 overflow-auto rounded-xl border border-white/15 bg-[#121724] p-1.5 shadow-2xl">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`w-full rounded-lg px-3 py-2 text-left text-xs font-medium transition ${
                  opt === value ? "bg-indigo-600/25 text-white" : "text-zinc-300 hover:bg-white/[0.05]"
                }`}
              >
                {suffix ? `${opt}${suffix}` : opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
