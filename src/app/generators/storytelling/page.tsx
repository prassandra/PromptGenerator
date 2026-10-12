"use client";
import AdShell from "@/components/AdShell";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { usePromptUsage } from "@/lib/use-prompt-usage";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import PremiumSidebar from "@/components/PremiumSidebar";
import AccountBar from "@/components/AccountBar";
import WorkspaceBackButton from "@/components/WorkspaceBackButton";
import VisitorToday from "@/components/VisitorToday";
import RewardTokenModal from "@/components/RewardTokenModal";
import { STORY_GENRES, STORY_TONES, createDefaultStorytellingForm } from "@/lib/prompts/storytelling/defaults";
import type { StoryBlueprint, StorytellingForm } from "@/lib/prompts/storytelling/types";

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-[#0b1018] px-4 py-3.5 text-[15px] font-medium text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400/60 focus:bg-[#0d131d]";
const textareaClass =
  "w-full resize-none rounded-2xl border border-white/10 bg-[#0b1018] px-4 py-4 text-[15px] leading-7 font-medium text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400/60 focus:bg-[#0d131d]";
const labelClass = "mb-2 block text-[13px] font-bold text-zinc-200";

type IdeaOption = { title: string; concept: string; hook: string };

const GENRES = [...STORY_GENRES];
const TONES = [...STORY_TONES];
const LANGUAGES = ["Bahasa Indonesia", "English", "Bahasa Melayu", "日本語", "한국어", "Español"];
const RATIOS = ["9:16", "16:9", "1:1", "4:5"];
const VISUALS = ["Realistis Sinematik", "Sangat Realistis", "Animasi 3D"];
const AUDIOS = ["Narator + Dialog + Musik + SFX", "Narator + Musik + SFX", "Dialog + Musik + SFX", "Musik + SFX", "Tanpa Audio"];
const CHARACTER_COUNTS = ["1", "2", "3", "4", "5", "6", "7", "8"];

const STORY_IDEA_PLACEHOLDERS: Record<string, string> = {
  "Cerita Pendek": "Contoh: Seorang anak menemukan surat lama yang mengubah cara pandangnya terhadap keluarganya...",
  "Drama": "Contoh: Dua sahabat harus memilih antara mempertahankan persahabatan atau mengungkap sebuah rahasia besar...",
  "Romantis": "Contoh: Dua orang yang pernah saling mencintai bertemu kembali setelah bertahun-tahun...",
  "Horror": "Contoh: Seorang penjaga rumah menyadari suara langkah kaki setiap malam selalu berhenti di depan kamarnya...",
  "Komedi": "Contoh: Seorang pemuda mencoba terlihat keren di depan orang yang disukainya, tetapi semuanya berubah menjadi kekacauan...",
  "Misteri": "Contoh: Sebuah surat tanpa nama muncul setiap pagi dan perlahan mengungkap rahasia yang seharusnya tidak pernah diketahui...",
  "Fantasi": "Contoh: Seorang anak menemukan pintu menuju kerajaan tersembunyi di balik buku tua milik kakeknya...",
  "Sejarah": "Contoh: Seorang tokoh muda harus mengambil keputusan penting di tengah peristiwa bersejarah yang mengubah masa depan...",
};

function getStoryIdeaPlaceholder(genre: string): string {
  return STORY_IDEA_PLACEHOLDERS[genre] ||
    "Contoh: Tulis ide singkat tentang cerita yang ingin kamu kembangkan...";
}

export default function StorytellingPage() {
  const { status: usage, refresh: refreshUsage } = usePromptUsage("storytelling");
  const usageBlocked = Boolean(usage && !usage.unlimited && (usage.remaining ?? 0) <= 0 && (usage.bonusTokens ?? 0) <= 0);
  const [rewardOpen, setRewardOpen] = useState(false);

  const [form, setForm] = useState<StorytellingForm>(() => createDefaultStorytellingForm());
  const [result, setResult] = useState<StoryBlueprint | null>(null);
  const [loading, setLoading] = useState(false);
  const [ideaLoading, setIdeaLoading] = useState(false);
  const [error, setError] = useState("");
  const [ideaError, setIdeaError] = useState("");
  const [ideaOptions, setIdeaOptions] = useState<IdeaOption[]>([]);
  const [selectedIdea, setSelectedIdea] = useState("");
  const [copied, setCopied] = useState("");

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
        body: JSON.stringify({ mode: "ideas", genre: form.genre, tone: form.tone, language: form.language }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Driacom belum bisa membuat ide.");
      setIdeaOptions(data.ideas || []);
    } catch (e) {
      setIdeaError(e instanceof Error ? e.message : "Driacom gagal membuat ide.");
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
    if (usageBlocked) { setRewardOpen(true); return; }
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
      if (!res.ok || !data.success) throw new Error(data.error || "Driacom gagal meracik cerita.");
      setResult(data.story);
      await refreshUsage();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Driacom gagal meracik cerita.");
    } finally {
      setLoading(false);
    }
  }

  async function copy(text: string, id: string) {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(""), 1400);
  }

  const sceneTotal = Math.max(1, Math.min(10, Number(form.scenes) || 1));

  return (
    <main className="min-h-screen overflow-hidden bg-[#050811] text-white">
      <div className="flex min-h-screen w-full flex-col lg:flex-row">
        <PremiumSidebar active="storytelling" />
        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#070b14]/95 backdrop-blur-xl">
            <div className="flex flex-col items-stretch gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-8">
              <div>
                <p className="text-[10px] font-black tracking-[0.28em] text-cyan-300">DRIACOM STORY DIRECTOR</p>
                <h1 className="mt-1 text-2xl font-black sm:text-3xl">Storytelling Engine</h1>
                <p className="mt-1 text-sm text-zinc-500">Pilih genre. Masukkan ide. Driacom mengurus detail ceritanya.</p>
              </div>
              <div className="flex w-full flex-wrap items-center justify-end gap-2 sm:w-auto"><VisitorToday className="w-full sm:w-auto" /><WorkspaceBackButton /><LanguageSwitcher compact /><AccountBar /></div>
            </div>
          </header>

          <div className="w-full px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
            <div className="workspace-two-col grid gap-6 xl:gap-7">
              <section className="workspace-form rounded-3xl border border-white/[0.08] bg-[#090e16] p-5 sm:p-6">
                <div className="mb-6">
                  
                  <h2 className="mt-2 text-2xl font-black">Racik Cerita</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">Cukup atur hal penting. Detail produksi akan diracik otomatis.</p>
                </div>

                <div className="space-y-5">
                  <Field label="Genre Cerita">
                    <CustomSelect value={form.genre} options={GENRES} disabled={loading || ideaLoading} onChange={(v) => { update("genre", v); setIdeaOptions([]); setSelectedIdea(""); }} />
                  </Field>

                  <div>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <label className={labelClass}>Ide / Alur Cerita</label>
                      <span className="text-[11px] text-zinc-600">{form.idea.length}/1200</span>
                    </div>
                    <textarea
                      disabled={loading || ideaLoading}
                      maxLength={1200}
                      rows={6}
                      value={form.idea}
                      onChange={(e) => update("idea", e.target.value)}
                      className={textareaClass}
                      placeholder={getStoryIdeaPlaceholder(form.genre)}
                    />
                    <button type="button" disabled={loading || ideaLoading} onClick={helpIdea} className="mt-3 w-full rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.07] px-4 py-3.5 text-sm font-black text-cyan-200 transition hover:border-cyan-400/45 hover:bg-cyan-400/[0.12] disabled:opacity-40">
                      {ideaLoading ? "✦ Driacom sedang mencari ide..." : "✦ Bantu Buat Ide"}
                    </button>
                    {selectedIdea ? <p className="mt-2 text-xs text-cyan-300">Ide dipilih: {selectedIdea}</p> : null}
                  </div>

                  {ideaOptions.length > 0 ? (
                    <div className="space-y-2 rounded-2xl border border-white/[0.08] bg-black/20 p-3">
                      <p className="px-2 pb-1 text-xs font-black text-zinc-500">PILIH IDE</p>
                      {ideaOptions.map((item, index) => (
                        <button type="button" key={`${item.title}-${index}`} onClick={() => chooseIdea(item)} className="w-full rounded-xl border border-white/10 bg-[#0d131d] p-3 text-left transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]">
                          <div className="text-sm font-bold text-white">{item.title}</div>
                          <div className="mt-1 text-xs leading-5 text-zinc-400">{item.concept}</div>
                        </button>
                      ))}
                    </div>
                  ) : null}
                  {ideaError ? <div className="rounded-xl border border-red-400/20 bg-red-400/[0.06] p-3 text-xs text-red-200">{ideaError}</div> : null}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Tone Cerita"><CustomSelect value={form.tone} options={TONES} disabled={loading} onChange={(v) => update("tone", v)} /></Field>
                    <Field label="Jumlah Karakter"><CustomSelect value={form.characterCount} options={CHARACTER_COUNTS} disabled={loading} onChange={(v) => update("characterCount", v)} suffix=" karakter" /></Field>
                    <Field label="Bahasa Output"><CustomSelect value={form.language} options={LANGUAGES} disabled={loading} onChange={(v) => update("language", v)} /></Field>
                    <Field label="Rasio Video"><CustomSelect value={form.ratio} options={RATIOS} disabled={loading} onChange={(v) => update("ratio", v)} /></Field>
                    <Field label="Audio"><CustomSelect value={form.audio} options={AUDIOS} disabled={loading} onChange={setAudio} /></Field>
                    <Field label="Gaya Visual"><CustomSelect value={form.visualStyle} options={VISUALS} disabled={loading} onChange={(v) => update("visualStyle", v)} /></Field>
                  </div>

                  <div>
                    <label className={labelClass}>Durasi per Scene</label>
                    <div className="grid grid-cols-4 gap-2">
                      {["4 detik per scene", "6 detik per scene", "8 detik per scene", "10 detik per scene"].map((duration) => (
                        <button type="button" key={duration} disabled={loading} onClick={() => update("duration", duration)} className={`rounded-xl border px-2 py-3 text-xs font-black transition ${form.duration === duration ? "border-cyan-400/60 bg-cyan-400/[0.12] text-cyan-100" : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-cyan-400/30 hover:text-white"}`}>
                          {duration.split(" ")[0]}s
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label className={labelClass}>Jumlah Scene</label>
                      <span className="rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] px-2.5 py-1 text-xs font-black text-cyan-200">{sceneTotal} scene</span>
                    </div>
                    <input disabled={loading} type="range" min={1} max={10} step={1} value={sceneTotal} onChange={(e) => update("scenes", e.target.value)} className="mt-3 w-full accent-cyan-400" />
                    <div className="mt-1 flex justify-between text-[10px] text-zinc-600"><span>1</span><span>5</span><span>10</span></div>
                  </div>

                  {!usage?.unlimited ? <p className="mb-3 text-center text-xs text-zinc-500">{usage ? (usageBlocked ? "Gratis 2x generate sudah habis. Tonton 2 iklan untuk +1 token atau upgrade ke PRO." : `Gratis ${usage.remaining ?? 0}x generate tersisa`) : "Mengecek kuota..."}</p> : null}

                  <button type="button" disabled={loading || !form.idea.trim()} onClick={generate} className="w-full rounded-2xl bg-cyan-400 px-5 py-4 text-base font-black text-[#041014] shadow-[0_12px_35px_rgba(34,211,238,0.10)] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-35">
                    {loading ? "Driacom sedang meracik..." : "✦ Racik Story"}
                  </button>
                  {error ? <div className="rounded-xl border border-red-400/20 bg-red-400/[0.06] p-4 text-sm text-red-200">{error}</div> : null}
                </div>
              </section>
              <div className="workspace-mid-ad">
                <AdShell plan="FREE" placement="mid" />
              </div>
<section className="workspace-output min-h-[720px] rounded-3xl border border-white/[0.08] bg-[#090e16] p-5 sm:p-6">
                {!result && !loading ? <EmptyState scenes={sceneTotal} duration={form.duration} /> : null}
                {loading ? <LoadingState /> : null}
                {result ? <StoryResult result={result} form={form} copied={copied} onCopy={copy} /> : null}
              </section>
            </div>
          </div>
        </div>
      </div>
    <RewardTokenModal open={rewardOpen} onClose={() => setRewardOpen(false)} onGranted={() => { setRewardOpen(false); refreshUsage(); }} />
</main>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return <div className="rounded-2xl border border-white/[0.08] bg-[#0b1019] px-4 py-4"><div className="text-[10px] font-black tracking-[0.18em] text-cyan-300">{n}</div><div className="mt-1 text-base font-bold">{title}</div><div className="mt-1 text-xs text-zinc-500">{desc}</div></div>;
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <div><label className={labelClass}>{label}</label>{children}</div>;
}

function CustomSelect({ value, options, onChange, disabled, suffix = "" }: { value: string; options: string[]; onChange: (v: string) => void; disabled?: boolean; suffix?: string }) {
  const [open, setOpen] = useState(false);
  const display = suffix && value ? `${value}${suffix}` : value;
  return <div className="relative">
    <button type="button" disabled={disabled} onClick={() => setOpen((v) => !v)} onBlur={() => setTimeout(() => setOpen(false), 120)} className={`${inputClass} flex items-center justify-between gap-3 text-left disabled:opacity-45`}>
      <span className="truncate">{display}</span><span className="text-zinc-500">⌄</span>
    </button>
    {open && !disabled ? <div className="absolute left-0 right-0 z-30 mt-2 max-h-64 overflow-auto rounded-2xl border border-white/10 bg-[#0d131d] p-1.5 shadow-2xl shadow-black/40">
      {options.map((option) => <button type="button" key={option} onMouseDown={(e) => e.preventDefault()} onClick={() => { onChange(option); setOpen(false); }} className={`block w-full rounded-xl px-3.5 py-2.5 text-left text-sm transition ${option === value ? "bg-cyan-400/[0.10] text-cyan-200" : "text-zinc-300 hover:bg-white/[0.05] hover:text-white"}`}>{suffix ? `${option}${suffix}` : option}</button>)}
    </div> : null}
  </div>;
}

function EmptyState({ scenes, duration }: { scenes: number; duration: string }) {
  return <div className="flex min-h-[680px] items-center justify-center text-center"><div className="max-w-md"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] text-2xl text-cyan-300">✦</div><p className="mt-5 text-[10px] font-black tracking-[0.24em] text-cyan-300">STORY WORKSPACE</p><h2 className="mt-2 text-2xl font-black">Siap Meracik Cerita</h2><p className="mt-3 text-sm leading-6 text-zinc-500">Hasil akan berisi thumbnail, master karakter, lalu {scenes} scene × {duration.split(" ")[0]} detik. Prompt produksi sudah diracik lengkap oleh Driacom.</p></div></div>;
}

function LoadingState() {
  return <div className="flex min-h-[680px] items-center justify-center text-center"><div><div className="mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] text-2xl text-cyan-300">✦</div><h2 className="mt-5 text-xl font-black">Story Director sedang bekerja...</h2><p className="mt-2 text-sm text-zinc-500">Menyusun karakter, thumbnail, scene, prompt, dan continuity.</p></div></div>;
}

function StoryResult({ result, form, copied, onCopy }: { result: StoryBlueprint; form: StorytellingForm; copied: string; onCopy: (text: string, id: string) => void }) {
  return <div className="space-y-6">
    <div className="border-b border-white/[0.08] pb-5">
      <p className="text-[10px] font-black tracking-[0.24em] text-cyan-300">STORY RESULT</p>
      <h2 className="mt-2 text-3xl font-black">{result.title}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">{result.logline}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs"><Badge text={result.genre} cyan /><Badge text={`${result.scenes.length} scene`} /><Badge text={form.duration} /><Badge text={form.visualStyle} /></div>
    </div>

    {result.characters.length > 0 ? <section className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
      <div className="flex items-center justify-between"><div><p className="text-[10px] font-black tracking-[0.18em] text-cyan-300">MASTER CHARACTER SHEET</p><h3 className="mt-1 text-lg font-black">Character Prompts</h3></div><span className="text-xs text-zinc-600">{result.characters.length} karakter</span></div>
      <div className="mt-4 space-y-3">{result.characters.map((c) => <PromptBox key={c.id} title={`${c.id} — ${c.name} — Master Character Sheet`} text={c.masterPrompt || buildFallbackCharacterPrompt(c)} id={`character-${c.id}`} copied={copied} onCopy={onCopy} />)}</div>
    </section> : null}

    <section>
      <div className="mb-3"><p className="text-[10px] font-black tracking-[0.18em] text-cyan-300">SCENE PROMPTS</p><h3 className="mt-1 text-lg font-black">Storyboard + Video</h3><p className="mt-1 text-xs leading-5 text-zinc-500">Setiap scene hanya berisi satu storyboard/image prompt dan satu video prompt. Shot 1–4 tetap berada di dalam prompt video.</p></div>
      <div className="space-y-3">{result.scenes.map((scene) => <details key={scene.sceneNumber} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black/20" open={scene.sceneNumber === 1}><summary className="cursor-pointer list-none px-4 py-4"><div className="flex items-center gap-3"><span className="rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] px-2.5 py-1 text-xs font-black text-cyan-200">{String(scene.sceneNumber).padStart(2, "0")}</span><div className="min-w-0 flex-1"><div className="font-bold truncate">Scene {scene.sceneNumber} <span className="text-xs font-normal text-zinc-600">{scene.title}</span></div><div className="mt-1 truncate text-xs text-zinc-500">{scene.purpose}</div></div><span className="text-zinc-600">⌄</span></div></summary><div className="border-t border-white/[0.06] p-4 space-y-4"><PromptBox title={`Scene ${scene.sceneNumber} — Storyboard / Image Prompt`} text={scene.storyboardImagePrompt || scene.imagePrompt} id={`image-${scene.sceneNumber}`} copied={copied} onCopy={onCopy} /><PromptBox title={`Scene ${scene.sceneNumber} — Video Prompt`} text={scene.videoPrompt} id={`video-${scene.sceneNumber}`} copied={copied} onCopy={onCopy} /></div></details>)}</div>
    </section>
  </div>;
}

function buildFallbackCharacterPrompt(c: StoryBlueprint["characters"][number]) {
  return `${c.name}, ${c.age}, ${c.gender}, ${c.appearance}, personality ${c.personality}, goal ${c.goal}, visual signature ${c.visualSignature}. Keep identity, face, hair, body proportions, wardrobe and accessories consistent across every scene.`;
}

function Badge({ text, cyan = false }: { text: string; cyan?: boolean }) { return <span className={`rounded-lg border px-3 py-1.5 ${cyan ? "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-200" : "border-white/10 bg-white/[0.03] text-zinc-400"}`}>{text}</span>; }
function Info({ title, text }: { title: string; text?: string }) { return <div className="rounded-xl border border-white/[0.07] bg-[#0b1018] p-3"><p className="text-[10px] font-black tracking-[0.15em] text-zinc-600">{title}</p><p className="mt-1.5 text-sm leading-6 text-zinc-300">{text || "—"}</p></div>; }
function CopyButton({ text, id, copied, onCopy }: { text: string; id: string; copied: string; onCopy: (text: string, id: string) => void }) { return <button type="button" onClick={() => onCopy(text, id)} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-bold text-zinc-300 hover:border-cyan-400/30 hover:text-white">{copied === id ? "✓ Tersalin" : "Copy"}</button>; }
function PromptBox({ title, text, id, copied, onCopy }: { title?: string; text: string; id?: string; copied?: string; onCopy?: (text: string, id: string) => void }) { return <div className="rounded-xl border border-white/[0.07] bg-[#080c13] p-3"><div className="mb-2 flex items-center justify-between gap-2">{title ? <span className="text-xs font-bold text-zinc-300">{title}</span> : <span />}{id && onCopy ? <CopyButton text={text} id={id} copied={copied || ""} onCopy={onCopy} /> : null}</div><p className="max-h-64 overflow-auto whitespace-pre-wrap text-xs leading-5 text-zinc-500">{text}</p></div>; }
