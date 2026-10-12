"use client";
import AdShell from "@/components/AdShell";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { usePromptUsage } from "@/lib/use-prompt-usage";

import { useMemo, useState, type ReactNode, type ChangeEvent } from "react";
import Link from "next/link";
import PremiumSidebar from "@/components/PremiumSidebar";
import AccountBar from "@/components/AccountBar";
import WorkspaceBackButton from "@/components/WorkspaceBackButton";
import VisitorToday from "@/components/VisitorToday";
import RewardTokenModal from "@/components/RewardTokenModal";
import type { AffiliateAudioMode, AffiliateBlueprint, AffiliateForm, AffiliateMotionTextStyle, AffiliatePresence, AffiliateRatio, AffiliateVoiceStyle, AffiliateContentType } from "@/lib/prompts/affiliate/types";

const inputClass = "w-full rounded-2xl border border-white/10 bg-[#0b1018] px-4 py-3.5 text-[15px] font-medium text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300/60 focus:bg-[#0d131d]";
const textareaClass = "w-full resize-none rounded-2xl border border-white/10 bg-[#0b1018] px-4 py-4 text-[15px] leading-7 font-medium text-white outline-none transition placeholder:text-zinc-600 focus:border-amber-300/60 focus:bg-[#0d131d]";
const labelClass = "mb-2 block text-[13px] font-bold text-zinc-200";

const PRESENCE: AffiliatePresence[] = ["POV Tangan", "Pakai Karakter"];
const CONTENT_TYPES: AffiliateContentType[] = ["UGC Natural", "Unboxing", "Review Produk", "Spill Produk", "Soft Selling"];
const VOICE: AffiliateVoiceStyle[] = ["Natural", "Softselling", "Hardselling"];
const MOTION: AffiliateMotionTextStyle[] = ["Dinamic", "Kinetic", "Highlight"];
const AUDIO: AffiliateAudioMode[] = ["Narasi + BGM + Efek Suara", "Narasi + Efek Suara", "BGM + Efek Suara (ASMR)", "Hanya Narasi / Dialog", "Tanpa Audio"];
const RATIOS: AffiliateRatio[] = ["9:16", "16:9", "1:1"];
const DURATIONS = ["4 detik per scene", "6 detik per scene", "8 detik per scene", "10 detik per scene"];
const LANGUAGES = ["Bahasa Indonesia", "English", "Bahasa Melayu"];

const defaults: AffiliateForm = {
  contentType: "UGC Natural", productImageName: "", productName: "", brand: "", backgroundImageName: "", backgroundDescription: "", requiredDisplay: "", presence: "POV Tangan", characterImageName: "", advertisingGoal: "",
  voiceStyle: "Natural", motionText: true, motionTextStyle: "Dinamic", audioMode: "Narasi + BGM + Efek Suara", ratio: "9:16", sceneCount: 4, durationPerScene: "8 detik per scene", language: "Bahasa Indonesia",
};

type UploadState = { name: string; data: string; mime: string };

export default function AffiliatePage() {
  const { status: usage, refresh: refreshUsage } = usePromptUsage("affiliate");
  const usageBlocked = Boolean(usage && !usage.unlimited && (usage.remaining ?? 0) <= 0 && (usage.bonusTokens ?? 0) <= 0);
  const [rewardOpen, setRewardOpen] = useState(false);

  const [form, setForm] = useState<AffiliateForm>(defaults);
  const [productImage, setProductImage] = useState<UploadState | null>(null);
  const [characterImage, setCharacterImage] = useState<UploadState | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<UploadState | null>(null);
  const [result, setResult] = useState<AffiliateBlueprint | null>(null);
  const [engine, setEngine] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState("");

  const sceneDuration = useMemo(() => Number(form.durationPerScene.match(/\d+(?:\.\d+)?/)?.[0] || 8), [form.durationPerScene]);
  const secondsPerShot = sceneDuration / 4;
  const totalDuration = form.sceneCount * sceneDuration;
  const update = <K extends keyof AffiliateForm>(key: K, value: AffiliateForm[K]) => setForm((old) => ({ ...old, [key]: value }));

  async function readImage(event: ChangeEvent<HTMLInputElement>, type: "product" | "character" | "background") {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) { setError("File harus berupa gambar."); return; }
    if (file.size > 8 * 1024 * 1024) { setError("Ukuran gambar maksimal 8 MB."); return; }
    const data = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader(); reader.onload = () => resolve(String(reader.result || "")); reader.onerror = reject; reader.readAsDataURL(file);
    });
    const next = { name: file.name, data, mime: file.type };
    if (type === "product") { setProductImage(next); update("productImageName", file.name); }
    else if (type === "character") { setCharacterImage(next); update("characterImageName", file.name); }
    else { setBackgroundImage(next); update("backgroundImageName", file.name); }
    setError("");
  }

  function clearUpload(type: "product" | "character" | "background") {
    if (type === "product") { setProductImage(null); update("productImageName", ""); }
    else if (type === "character") { setCharacterImage(null); update("characterImageName", ""); }
    else { setBackgroundImage(null); update("backgroundImageName", ""); }
  }

  async function racikPrompt() {
    if (loading) return;
    if (usageBlocked) { setRewardOpen(true); return; }
    if (!productImage || !form.productName.trim() || !form.brand.trim()) { setError("Upload foto produk, isi nama produk, dan isi brand/merk."); return; }
    if (form.presence === "Pakai Karakter" && !characterImage) { setError("Upload foto karakter karena mode Pakai Karakter dipilih."); return; }
    setLoading(true); setError(""); setResult(null); setEngine("");
    try {
      const res = await fetch("/api/affiliate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ form, productImageData: productImage.data, characterImageData: characterImage?.data || "", backgroundImageData: backgroundImage?.data || "" }) });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Driacom gagal meracik prompt affiliate.");
      setResult(data.blueprint); await refreshUsage(); setEngine(data.engine + (data.fallback ? " • LOCAL FALLBACK" : ""));
    } catch (e) { setError(e instanceof Error ? e.message : "Driacom gagal meracik prompt affiliate."); }
    finally { setLoading(false); }
  }

  async function copy(text: string, id: string) { if (!text) return; await navigator.clipboard.writeText(text); setCopied(id); setTimeout(() => setCopied(""), 1400); }

  return <main className="min-h-screen overflow-hidden bg-[#050811] text-white"><div className="flex min-h-screen w-full flex-col lg:flex-row"><PremiumSidebar active="affiliate" /><div className="min-w-0 flex-1">
    <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#070b14]/95 backdrop-blur-xl"><div className="flex flex-col items-stretch gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-8"><div><p className="text-[10px] font-black tracking-[0.28em] text-amber-300">DRIACOM AFFILIATE DIRECTOR</p><h1 className="mt-1 text-2xl font-black sm:text-3xl">Affiliate Engine</h1><p className="mt-1 text-sm text-zinc-500">Produk → angle iklan → storyboard → video prompt.</p></div><div className="flex w-full flex-wrap items-center justify-end gap-2 sm:w-auto"><VisitorToday className="w-full sm:w-auto" /><WorkspaceBackButton /><LanguageSwitcher compact /><AccountBar /></div></div></header>
    <div className="w-full px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
      <div className="workspace-two-col grid gap-6 xl:gap-7">
        <section className="workspace-form rounded-3xl border border-white/[0.08] bg-[#090e16] p-5 sm:p-6">
          <div className="mb-6"><h2 className="text-2xl font-black">Racik Konten</h2><p className="mt-2 text-sm leading-6 text-zinc-500">Field opsional boleh kosong. Driacom tetap mengisi angle, naskah, motion text, dan detail produksi secara otomatis.</p></div>
          <div className="space-y-5">
            <Field label="Jenis Konten Affiliate"><CustomSelect value={form.contentType} options={CONTENT_TYPES} disabled={loading} onChange={(v) => update("contentType", v as AffiliateContentType)} /></Field>
            <Field label="Upload Foto Produk"><UploadBox name={productImage?.name} preview={productImage?.data} accept="image/*" onChange={(e) => readImage(e, "product")} onClear={productImage ? () => clearUpload("product") : undefined} /></Field>
            <Field label="Nama Produk"><input disabled={loading} value={form.productName} onChange={(e) => update("productName", e.target.value)} placeholder="Contoh: Cat Ear Headset P47" className={inputClass} /></Field>
            <Field label="Brand / Merk"><input disabled={loading} value={form.brand} onChange={(e) => update("brand", e.target.value)} placeholder="Contoh: Driacom Audio" className={inputClass} /></Field>
            <Field label="Upload Background / Lokasi"><UploadBox name={backgroundImage?.name} preview={backgroundImage?.data} accept="image/*" onChange={(e) => readImage(e, "background")} onClear={backgroundImage ? () => clearUpload("background") : undefined} /><p className="mt-2 text-xs leading-5 text-zinc-600">Reference background dipakai sebagai source of truth agar lingkungan, layout, warna, dan elemen utama tetap konsisten.</p></Field>
            <Field label="Deskripsi Background / Lokasi"><input disabled={loading} value={form.backgroundDescription} onChange={(e) => update("backgroundDescription", e.target.value)} placeholder="Contoh: kamar tidur, kamar hotel, depan cermin, ruang tamu..." className={inputClass} /></Field>
            <Field label="Hal yang Wajib Ditampilkan (opsional)"><textarea disabled={loading} rows={3} value={form.requiredDisplay} onChange={(e) => update("requiredDisplay", e.target.value)} placeholder="Contoh: kemasan, tekstur, tombol, LED RGB, detail material..." className={textareaClass} /></Field>

            <div className="rounded-2xl border border-white/[0.08] bg-black/10 p-4"><p className="text-[10px] font-black tracking-[0.18em] text-amber-300">SIAPA / APA YANG TAMPIL</p><div className="mt-3 grid gap-2 sm:grid-cols-2">{PRESENCE.map((v) => <Choice key={v} selected={form.presence === v} label={v} desc={v === "POV Tangan" ? "Tanpa Master Character Sheet" : "Upload reference karakter; Driacom meracik master sheet"} onClick={() => { update("presence", v); if (v === "POV Tangan") clearUpload("character"); }} />)}</div></div>
            {form.presence === "Pakai Karakter" ? <Field label="Upload Foto Karakter"><UploadBox name={characterImage?.name} preview={characterImage?.data} accept="image/*" onChange={(e) => readImage(e, "character")} onClear={characterImage ? () => clearUpload("character") : undefined} /><p className="mt-2 text-xs leading-5 text-zinc-600">Reference hanya dikirim ke engine saat meracik prompt; tidak menjadi aset penyimpanan Driacom.</p></Field> : null}

            <Field label="Apa yang Mau Diiklankan? (opsional)"><textarea disabled={loading} rows={4} value={form.advertisingGoal} onChange={(e) => update("advertisingGoal", e.target.value)} placeholder="Contoh: tunjukkan tekstur produk, cara pakai, dan kenapa aku suka hasil akhirnya." className={textareaClass} /><p className="mt-2 text-xs leading-5 text-zinc-600">Kosong pun aman. Driacom menentukan angle terbaik berdasarkan produk.</p></Field>
            <Field label="Gaya Suara"><CustomSelect value={form.voiceStyle} options={VOICE} disabled={loading} onChange={(v) => update("voiceStyle", v as AffiliateVoiceStyle)} /></Field>
            <Field label="Motion Text"><div className="grid grid-cols-2 gap-2">{[true, false].map((v) => <Choice key={String(v)} selected={form.motionText === v} label={v ? "Ya" : "Tidak"} onClick={() => update("motionText", v)} />)}</div></Field>
            {form.motionText ? <Field label="Gaya Motion Text"><CustomSelect value={form.motionTextStyle} options={MOTION} disabled={loading} onChange={(v) => update("motionTextStyle", v as AffiliateMotionTextStyle)} /><p className="mt-2 text-xs leading-5 text-zinc-600">Driacom membaca alur konten dan memilih highlight text per beat: hook, produk, benefit, hasil, dan CTA. Maksimal 1–4 kata per kemunculan; tanpa text box, badge, atau label nama style.</p></Field> : null}
            <Field label="Audio"><CustomSelect value={form.audioMode} options={AUDIO} disabled={loading} onChange={(v) => update("audioMode", v as AffiliateAudioMode)} /></Field>

            <div className="rounded-2xl border border-white/[0.08] bg-black/10 p-4"><p className="text-[10px] font-black tracking-[0.18em] text-amber-300">STRUKTUR VIDEO</p><div className="mt-4 grid gap-4 sm:grid-cols-2"><Field label="Ratio"><CustomSelect value={form.ratio} options={RATIOS} disabled={loading} onChange={(v) => update("ratio", v as AffiliateRatio)} /></Field><Field label="Bahasa"><CustomSelect value={form.language} options={LANGUAGES} disabled={loading} onChange={(v) => update("language", v)} /></Field></div><div className="mt-4"><div className="flex items-center justify-between gap-3"><label className={labelClass}>Jumlah Scene</label><span className="rounded-lg border border-amber-300/20 bg-amber-300/[0.06] px-2.5 py-1 text-xs font-black text-amber-200">{form.sceneCount} scene</span></div><input disabled={loading} type="range" min={1} max={10} step={1} value={form.sceneCount} onChange={(e) => update("sceneCount", Number(e.target.value))} className="mt-3 w-full accent-amber-300" /><div className="mt-1 flex justify-between text-[10px] text-zinc-600"><span>1</span><span>10</span></div></div><div className="mt-4"><label className={labelClass}>Durasi per Scene</label><div className="grid grid-cols-4 gap-2">{DURATIONS.map((duration) => <button type="button" key={duration} disabled={loading} onClick={() => update("durationPerScene", duration)} className={`rounded-xl border px-2 py-3 text-xs font-black ${form.durationPerScene === duration ? "border-amber-300/60 bg-amber-300/[0.12] text-amber-100" : "border-white/10 bg-white/[0.02] text-zinc-400"}`}>{duration.split(" ")[0]}s</button>)}</div></div></div>

            <div className="grid grid-cols-3 gap-2 text-center"><Stat value={`${form.sceneCount}`} label="SCENE" /><Stat value={`${secondsPerShot}s`} label="/ SHOT" /><Stat value={`${totalDuration}s`} label="TOTAL" /></div>
            {!usage?.unlimited ? <p className="mb-3 text-center text-xs text-zinc-500">{usage ? (usageBlocked ? "Gratis 2x generate sudah habis. Tonton 2 iklan untuk +1 token atau upgrade ke PRO." : `Gratis ${usage.remaining ?? 0}x generate tersisa`) : "Mengecek kuota..."}</p> : null}
            <button type="button" disabled={loading} onClick={racikPrompt} className="w-full rounded-2xl bg-cyan-400 px-5 py-4 text-base font-black text-[#041014] shadow-[0_12px_35px_rgba(34,211,238,0.10)] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-35">{loading ? "Driacom sedang meracik..." : "✦ Racik Prompt"}</button>
            {error ? <div className="rounded-xl border border-red-400/20 bg-red-400/[0.06] p-4 text-sm text-red-200">{error}</div> : null}
          </div>
        </section>
<div className="workspace-mid-ad"><AdShell plan="FREE" placement="mid" /></div>
        <section className="workspace-output min-w-0 rounded-3xl border border-white/[0.08] bg-[#090e16] p-5 sm:p-6">{loading ? <LoadingState /> : result ? <AffiliateResult result={result} engine={engine} copied={copied} onCopy={copy} /> : <EmptyState scenes={form.sceneCount} duration={sceneDuration} />}</section>
      </div>
    </div>
  </div></div><RewardTokenModal open={rewardOpen} onClose={() => setRewardOpen(false)} onGranted={() => { setRewardOpen(false); refreshUsage(); }} />
</main>;
}

function Field({ label, children }: { label: string; children: ReactNode }) { return <div><label className={labelClass}>{label}</label>{children}</div>; }
function UploadBox({ name, preview, accept, onChange, onClear }: { name?: string; preview?: string; accept: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; onClear?: () => void }) { return <div className="relative rounded-2xl border border-dashed border-white/15 bg-[#0b1018] p-3"><label className="group block cursor-pointer transition hover:border-amber-300/40"><div className="flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-300/15 bg-amber-300/[0.05] text-amber-300">＋</span><span className="min-w-0"><span className="block truncate text-sm font-bold text-zinc-200">{name || "Pilih foto reference"}</span><span className="block text-xs text-zinc-600">JPG, PNG, WEBP • maksimal 8 MB</span></span></div>{preview ? <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-black/20"><img src={preview} alt={name || "Preview"} className="max-h-64 w-full object-contain" /></div> : null}<input type="file" accept={accept} onChange={onChange} className="hidden" /></label>{preview && onClear ? <button type="button" aria-label="Hapus upload" onClick={onClear} className="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-red-300/30 bg-[#090e16]/90 text-sm font-black text-red-200 hover:bg-red-400/15">×</button> : null}</div>; }
function Choice({ selected, label, desc, onClick }: { selected: boolean; label: string; desc?: string; onClick: () => void }) { return <button type="button" onClick={onClick} className={`rounded-2xl border px-4 py-3 text-left transition ${selected ? "border-amber-300/35 bg-amber-300/[0.07]" : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"}`}><div className={`text-sm font-bold ${selected ? "text-amber-200" : "text-zinc-300"}`}>{label}</div>{desc ? <div className="mt-1 text-[11px] leading-4 text-zinc-600">{desc}</div> : null}</button>; }
function CustomSelect({ value, options, onChange, disabled }: { value: string; options: string[]; onChange: (v: string) => void; disabled?: boolean }) { const [open, setOpen] = useState(false); return <div className="relative"><button type="button" disabled={disabled} onClick={() => setOpen((v) => !v)} onBlur={() => setTimeout(() => setOpen(false), 120)} className={`${inputClass} flex items-center justify-between gap-3 text-left disabled:opacity-45`}><span className="truncate">{value}</span><span className="text-zinc-500">⌄</span></button>{open && !disabled ? <div className="absolute left-0 right-0 z-30 mt-2 max-h-64 overflow-auto rounded-2xl border border-white/10 bg-[#0d131d] p-1.5 shadow-2xl">{options.map((option) => <button type="button" key={option} onMouseDown={(e) => e.preventDefault()} onClick={() => { onChange(option); setOpen(false); }} className={`block w-full rounded-xl px-3.5 py-2.5 text-left text-sm ${option === value ? "bg-amber-300/[0.10] text-amber-200" : "text-zinc-300 hover:bg-white/[0.05] hover:text-white"}`}>{option}</button>)}</div> : null}</div>; }
function Stat({ value, label }: { value: string; label: string }) { return <div className="rounded-xl border border-white/[0.07] bg-black/15 px-2 py-3"><div className="text-lg font-black text-white">{value}</div><div className="mt-1 text-[9px] font-black tracking-[0.12em] text-zinc-600">{label}</div></div>; }
function EmptyState({ scenes, duration }: { scenes: number; duration: number }) { return <div className="flex min-h-[680px] items-center justify-center text-center"><div className="max-w-md"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] text-2xl text-amber-300">✦</div><h2 className="mt-5 text-2xl font-black">Siap Meracik Prompt</h2><p className="mt-3 text-sm leading-6 text-zinc-500">Output: {scenes} scene × {duration} detik. Setiap scene berisi 1 storyboard image prompt + 1 video prompt lengkap.</p></div></div>; }
function LoadingState() { return <div className="flex min-h-[680px] items-center justify-center text-center"><div><div className="mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] text-2xl text-amber-300">✦</div><h2 className="mt-5 text-xl font-black">Affiliate Director sedang bekerja...</h2><p className="mt-2 text-sm text-zinc-500">Menganalisis produk, angle, naskah, motion text, audio, storyboard, dan video prompt.</p></div></div>; }
function AffiliateResult({ result, engine, copied, onCopy }: { result: AffiliateBlueprint; engine: string; copied: string; onCopy: (text: string, id: string) => void }) { return <div className="space-y-6"><div className="border-b border-white/[0.08] pb-5"><p className="text-[10px] font-black tracking-[0.24em] text-amber-300">AFFILIATE RESULT</p><h2 className="mt-2 text-3xl font-black">{result.productName}</h2><p className="mt-2 text-sm text-zinc-400">{result.brand} • {result.contentType} • {result.presence} • {result.voiceStyle}</p><div className="mt-4 flex flex-wrap gap-2 text-xs"><Badge text={`${result.scenes.length} scene`} amber /><Badge text={result.totalDuration} /><Badge text="4 internal shot / scene" /><Badge text={result.audioMode} /><Badge text={engine} /></div></div>
{result.masterCharacter ? <section className="rounded-2xl border border-white/[0.08] bg-black/20 p-4"><p className="text-[10px] font-black tracking-[0.18em] text-amber-300">MASTER CHARACTER SHEET</p><p className="mt-1 text-xs leading-5 text-zinc-500">Satu prompt master untuk identitas karakter. Gunakan sebagai source of truth semua scene.</p><div className="mt-4"><PromptBox title="Master Character Sheet Prompt" text={result.masterCharacter} id="character" copied={copied} onCopy={onCopy} /></div></section> : null}
<section><div className="mb-3"><p className="text-[10px] font-black tracking-[0.18em] text-amber-300">SCENE PROMPTS</p><h3 className="mt-1 text-lg font-black">Storyboard + Video</h3><p className="mt-1 text-xs leading-5 text-zinc-500">Hanya dua prompt per scene. Shot 1–4 tetap lengkap di dalam Video Prompt dan tidak dipecah menjadi kartu terpisah.</p></div><div className="space-y-3">{result.scenes.map((scene) => <details key={scene.sceneNumber} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black/20" open={scene.sceneNumber === 1}><summary className="cursor-pointer list-none px-4 py-4"><div className="flex items-center gap-3"><span className="rounded-lg border border-amber-300/20 bg-amber-300/[0.06] px-2.5 py-1 text-xs font-black text-amber-200">{String(scene.sceneNumber).padStart(2, "0")}</span><div className="min-w-0 flex-1"><div className="font-bold">Scene {scene.sceneNumber} <span className="text-xs font-normal text-zinc-600">{scene.timecode}</span></div><div className="mt-1 truncate text-xs text-zinc-500">{scene.purpose}</div></div><span className="text-zinc-600">⌄</span></div></summary><div className="border-t border-white/[0.06] p-4 space-y-4"><PromptBox title={`Scene ${scene.sceneNumber} — Storyboard / Image Prompt`} text={scene.storyboardImagePrompt} id={`storyboard-${scene.sceneNumber}`} copied={copied} onCopy={onCopy} /><PromptBox title={`Scene ${scene.sceneNumber} — Video Prompt`} text={scene.videoPrompt} id={`video-${scene.sceneNumber}`} copied={copied} onCopy={onCopy} /></div></details>)}</div></section></div>; }
function Badge({ text, amber = false }: { text: string; amber?: boolean }) { return <span className={`rounded-lg border px-3 py-1.5 ${amber ? "border-amber-300/20 bg-amber-300/[0.06] text-amber-200" : "border-white/10 bg-white/[0.03] text-zinc-400"}`}>{text}</span>; }
function PromptBox({ title, text, id, copied, onCopy }: { title: string; text: string; id: string; copied: string; onCopy: (text: string, id: string) => void }) { return <div className="rounded-xl border border-white/[0.07] bg-[#080c13] p-3"><div className="mb-2 flex items-center justify-between gap-2"><span className="text-xs font-bold text-zinc-300">{title}</span><button type="button" onClick={() => onCopy(text, id)} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-bold text-zinc-300 hover:border-amber-300/30 hover:text-white">{copied === id ? "✓ Tersalin" : "Copy"}</button></div><pre className="max-h-[520px] overflow-auto whitespace-pre-wrap break-words text-xs leading-5 text-zinc-400">{text || "Driacom akan mengisi otomatis."}</pre></div>; }
