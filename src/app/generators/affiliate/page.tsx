"use client";

import { useMemo, useState, type ReactNode, type ChangeEvent } from "react";
import AdShell from "@/components/AdShell";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PremiumSidebar from "@/components/PremiumSidebar";
import WorkspaceBackButton from "@/components/WorkspaceBackButton";
import type {
  AffiliateAudioMode,
  AffiliateBlueprint,
  AffiliateForm,
  AffiliateMotionTextStyle,
  AffiliatePresence,
  AffiliateRatio,
  AffiliateVoiceStyle,
  AffiliateContentType,
} from "@/lib/prompts/affiliate/types";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#10141e] px-4 py-3.5 text-sm font-medium text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-400/80 focus:bg-[#131926]";
const textareaClass =
  "w-full resize-none rounded-xl border border-white/10 bg-[#10141e] px-4 py-3.5 text-sm leading-relaxed font-medium text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-400/80 focus:bg-[#131926]";
const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-300";

const PRESENCE: AffiliatePresence[] = ["POV Tangan", "Pakai Karakter"];
const CONTENT_TYPES: AffiliateContentType[] = ["UGC Natural", "Unboxing", "Review Produk", "Spill Produk", "Soft Selling"];
const VOICE: AffiliateVoiceStyle[] = ["Natural", "Softselling", "Hardselling"];
const MOTION: AffiliateMotionTextStyle[] = ["Dinamic", "Kinetic", "Highlight"];
const AUDIO: AffiliateAudioMode[] = [
  "Narasi + BGM + Efek Suara",
  "Narasi + Efek Suara",
  "BGM + Efek Suara (ASMR)",
  "Hanya Narasi / Dialog",
  "Tanpa Audio",
];
const RATIOS: AffiliateRatio[] = ["9:16", "16:9", "1:1"];
const DURATIONS = ["4 detik per scene", "6 detik per scene", "8 detik per scene", "10 detik per scene"];
const LANGUAGES = ["Bahasa Indonesia", "English", "Bahasa Melayu"];

const defaults: AffiliateForm = {
  contentType: "UGC Natural",
  productImageName: "",
  productName: "",
  brand: "",
  backgroundImageName: "",
  backgroundDescription: "",
  requiredDisplay: "",
  presence: "POV Tangan",
  characterImageName: "",
  advertisingGoal: "",
  voiceStyle: "Natural",
  motionText: true,
  motionTextStyle: "Dinamic",
  audioMode: "Narasi + BGM + Efek Suara",
  ratio: "9:16",
  sceneCount: 4,
  durationPerScene: "8 detik per scene",
  language: "Bahasa Indonesia",
};

type UploadState = { name: string; data: string; mime: string };

export default function AffiliatePage() {
  const [form, setForm] = useState<AffiliateForm>(defaults);
  const [productImage, setProductImage] = useState<UploadState | null>(null);
  const [characterImage, setCharacterImage] = useState<UploadState | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<UploadState | null>(null);
  const [result, setResult] = useState<AffiliateBlueprint | null>(null);
  const [engine, setEngine] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState("");

  const sceneDuration = useMemo(
    () => Number(form.durationPerScene.match(/\d+(?:\.\d+)?/)?.[0] || 8),
    [form.durationPerScene]
  );
  const secondsPerShot = sceneDuration / 4;
  const totalDuration = form.sceneCount * sceneDuration;
  const update = <K extends keyof AffiliateForm>(key: K, value: AffiliateForm[K]) =>
    setForm((old) => ({ ...old, [key]: value }));

  async function readImage(
    event: ChangeEvent<HTMLInputElement>,
    type: "product" | "character" | "background"
  ) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("File harus berupa gambar (JPG, PNG, WEBP).");
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      setError("Ukuran gambar maksimal 8 MB.");
      return;
    }
    const data = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    const next = { name: file.name, data, mime: file.type };
    if (type === "product") {
      setProductImage(next);
      update("productImageName", file.name);
    } else if (type === "character") {
      setCharacterImage(next);
      update("characterImageName", file.name);
    } else {
      setBackgroundImage(next);
      update("backgroundImageName", file.name);
    }
    setError("");
  }

  function clearUpload(type: "product" | "character" | "background") {
    if (type === "product") {
      setProductImage(null);
      update("productImageName", "");
    } else if (type === "character") {
      setCharacterImage(null);
      update("characterImageName", "");
    } else {
      setBackgroundImage(null);
      update("backgroundImageName", "");
    }
  }

  async function racikPrompt() {
    if (loading) return;
    if (!productImage || !form.productName.trim() || !form.brand.trim()) {
      setError("Upload foto produk, isi nama produk, dan isi brand/merk.");
      return;
    }
    if (form.presence === "Pakai Karakter" && !characterImage) {
      setError("Upload foto karakter karena mode Pakai Karakter dipilih.");
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);
    setEngine("");
    try {
      const res = await fetch("/api/affiliate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form,
          productImageData: productImage.data,
          characterImageData: characterImage?.data || "",
          backgroundImageData: backgroundImage?.data || "",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Driacom gagal meracik prompt affiliate.");
      setResult(data.blueprint);
      setEngine(data.engine + (data.fallback ? " · Local Engine" : ""));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Driacom gagal meracik prompt affiliate.");
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

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#080a10] text-slate-100 lg:flex-row">
      <PremiumSidebar active="affiliate" />

      <div className="min-w-0 flex-1">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#080a10]/90 px-4 py-3.5 backdrop-blur-xl sm:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
                <span>Affiliate Director</span>
                <span aria-hidden="true">·</span>
                <span className="text-zinc-500">Video Promosi & UGC</span>
              </div>
              <h1 className="text-lg font-bold text-white sm:text-xl">Affiliate Video Engine</h1>
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
            {/* Input Form Column */}
            <section className="workspace-form rounded-2xl border border-white/[0.07] bg-[#0c1017] p-5 shadow-xl sm:p-6">
              <div className="mb-5 border-b border-white/[0.06] pb-4">
                <h2 className="text-lg font-bold text-white">Parameter Produk & Konten</h2>
                <p className="mt-1 text-xs text-zinc-400">
                  Unggah referensi foto produk untuk menghasilkan naskah, hook, dan storyboard siap pakai.
                </p>
              </div>

              <div className="space-y-4">
                <Field label="Jenis Konten Video">
                  <CustomSelect
                    value={form.contentType}
                    options={CONTENT_TYPES}
                    disabled={loading}
                    onChange={(v) => update("contentType", v as AffiliateContentType)}
                  />
                </Field>

                <Field label="Foto Referensi Produk (Wajib)">
                  <UploadBox
                    name={productImage?.name}
                    preview={productImage?.data}
                    accept="image/*"
                    onChange={(e) => readImage(e, "product")}
                    onClear={productImage ? () => clearUpload("product") : undefined}
                  />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nama Produk">
                    <input
                      disabled={loading}
                      value={form.productName}
                      onChange={(e) => update("productName", e.target.value)}
                      placeholder="Contoh: Wireless ANC Headphones"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Brand / Merk">
                    <input
                      disabled={loading}
                      value={form.brand}
                      onChange={(e) => update("brand", e.target.value)}
                      placeholder="Contoh: SoundCraft"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Foto Background / Lokasi (Opsional)">
                  <UploadBox
                    name={backgroundImage?.name}
                    preview={backgroundImage?.data}
                    accept="image/*"
                    onChange={(e) => readImage(e, "background")}
                    onClear={backgroundImage ? () => clearUpload("background") : undefined}
                  />
                </Field>

                <Field label="Deskripsi Background / Lokasi">
                  <input
                    disabled={loading}
                    value={form.backgroundDescription}
                    onChange={(e) => update("backgroundDescription", e.target.value)}
                    placeholder="Contoh: Studio minimalis, meja kayu oak dengan pencahayaan hangat"
                    className={inputClass}
                  />
                </Field>

                <Field label="Elemen yang Wajib Ditampilkan (Opsional)">
                  <textarea
                    disabled={loading}
                    rows={2}
                    value={form.requiredDisplay}
                    onChange={(e) => update("requiredDisplay", e.target.value)}
                    placeholder="Contoh: Tombol noise-cancelling, bantalan kulit busa, kemasan unboxing..."
                    className={textareaClass}
                  />
                </Field>

                {/* Subjek / Karakter */}
                <div className="rounded-xl border border-white/[0.06] bg-[#090d14] p-3.5">
                  <label className={labelClass}>Subjek / Presenter</label>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {PRESENCE.map((p) => (
                      <Choice
                        key={p}
                        selected={form.presence === p}
                        label={p}
                        desc={p === "POV Tangan" ? "Fokus visual sudut pandang tangan pengguna" : "Dengan presenter atau karakter utuh"}
                        onClick={() => {
                          update("presence", p);
                          if (p === "POV Tangan") clearUpload("character");
                        }}
                      />
                    ))}
                  </div>

                  {form.presence === "Pakai Karakter" && (
                    <div className="mt-3">
                      <Field label="Foto Referensi Karakter">
                        <UploadBox
                          name={characterImage?.name}
                          preview={characterImage?.data}
                          accept="image/*"
                          onChange={(e) => readImage(e, "character")}
                          onClear={characterImage ? () => clearUpload("character") : undefined}
                        />
                      </Field>
                    </div>
                  )}
                </div>

                <Field label="Pesan / Target Iklan (Opsional)">
                  <textarea
                    disabled={loading}
                    rows={3}
                    value={form.advertisingGoal}
                    onChange={(e) => update("advertisingGoal", e.target.value)}
                    placeholder="Contoh: Tekankan kenyamanan seharian dan daya tahan baterai 40 jam."
                    className={textareaClass}
                  />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Gaya Suara / VO">
                    <CustomSelect
                      value={form.voiceStyle}
                      options={VOICE}
                      disabled={loading}
                      onChange={(v) => update("voiceStyle", v as AffiliateVoiceStyle)}
                    />
                  </Field>

                  <Field label="Audio Soundtrack">
                    <CustomSelect
                      value={form.audioMode}
                      options={AUDIO}
                      disabled={loading}
                      onChange={(v) => update("audioMode", v as AffiliateAudioMode)}
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Motion Text On-Screen">
                    <div className="grid grid-cols-2 gap-2">
                      {[true, false].map((v) => (
                        <button
                          key={String(v)}
                          type="button"
                          onClick={() => update("motionText", v)}
                          className={`rounded-xl border py-2.5 text-xs font-semibold transition ${
                            form.motionText === v
                              ? "border-indigo-500/50 bg-indigo-600/20 text-white"
                              : "border-white/10 bg-[#090d14] text-zinc-400"
                          }`}
                        >
                          {v ? "Aktif" : "Nonaktif"}
                        </button>
                      ))}
                    </div>
                  </Field>

                  {form.motionText && (
                    <Field label="Gaya Motion Text">
                      <CustomSelect
                        value={form.motionTextStyle}
                        options={MOTION}
                        disabled={loading}
                        onChange={(v) => update("motionTextStyle", v as AffiliateMotionTextStyle)}
                      />
                    </Field>
                  )}
                </div>

                {/* Struktur Durasi & Scene */}
                <div className="rounded-xl border border-white/[0.06] bg-[#090d14] p-3.5 space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Field label="Rasio Aspek">
                      <CustomSelect
                        value={form.ratio}
                        options={RATIOS}
                        disabled={loading}
                        onChange={(v) => update("ratio", v as AffiliateRatio)}
                      />
                    </Field>
                    <Field label="Bahasa Naskah">
                      <CustomSelect
                        value={form.language}
                        options={LANGUAGES}
                        disabled={loading}
                        onChange={(v) => update("language", v)}
                      />
                    </Field>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label className={labelClass}>Jumlah Adegan ({form.sceneCount} Scene)</label>
                      <span className="text-xs font-bold text-indigo-400">{totalDuration} detik total</span>
                    </div>
                    <input
                      disabled={loading}
                      type="range"
                      min={1}
                      max={10}
                      step={1}
                      value={form.sceneCount}
                      onChange={(e) => update("sceneCount", Number(e.target.value))}
                      className="w-full accent-indigo-500"
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Durasi Tiap Adegan</label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {DURATIONS.map((dur) => (
                        <button
                          type="button"
                          key={dur}
                          disabled={loading}
                          onClick={() => update("durationPerScene", dur)}
                          className={`rounded-lg border px-2 py-2 text-xs font-semibold transition ${
                            form.durationPerScene === dur
                              ? "border-indigo-500/50 bg-indigo-600/25 text-white"
                              : "border-white/10 bg-[#10141e] text-zinc-400 hover:text-white"
                          }`}
                        >
                          {dur.split(" ")[0]}s
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* High CTR Action Sponsor Slot */}
                <AdShell placement="action" />

                {/* Action CTA */}
                <button
                  type="button"
                  disabled={loading}
                  onClick={racikPrompt}
                  className="w-full rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-950/50 transition hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {loading ? "Menyusun Storyboard & Video Prompt..." : "✦ Racik Prompt Affiliate"}
                </button>

                {error && (
                  <div className="rounded-xl border border-red-500/30 bg-red-950/30 p-3 text-xs text-red-300">
                    {error}
                  </div>
                )}
              </div>
            </section>

            {/* Results Column */}
            <section className="workspace-output min-w-0 rounded-2xl border border-white/[0.07] bg-[#0c1017] p-5 shadow-xl sm:p-6">
              {loading ? (
                <div className="flex min-h-[500px] flex-col items-center justify-center p-8 text-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-indigo-400 border-t-transparent" />
                  <p className="mt-4 text-sm font-semibold text-white">Meracik Blueprint Video Affiliate...</p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Menganalisis sudut hook, deskripsi visual produk, motion text, dan instruksi kamera.
                  </p>
                </div>
              ) : result ? (
                <div className="space-y-6">
                  <div className="border-b border-white/[0.06] pb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                        Hasil Blueprint Affiliate
                      </span>
                      {engine && <span className="text-[10px] text-zinc-500">{engine}</span>}
                    </div>
                    <h2 className="mt-1 text-2xl font-bold text-white">{result.productName}</h2>
                    <p className="mt-1 text-xs text-zinc-400">
                      Brand: {result.brand} · {result.contentType} · {result.presence}
                    </p>
                  </div>

                  {result.masterCharacter && (
                    <div className="rounded-xl border border-white/[0.08] bg-[#090d14] p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs font-semibold text-indigo-300">Master Character Sheet</span>
                        <button
                          type="button"
                          onClick={() => copy(result.masterCharacter, "master-char")}
                          className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
                        >
                          {copied === "master-char" ? "✓ Tersalin" : "Salin Prompt"}
                        </button>
                      </div>
                      <pre className="max-h-52 overflow-auto text-xs leading-relaxed text-zinc-300 whitespace-pre-wrap font-mono">
                        {result.masterCharacter}
                      </pre>
                    </div>
                  )}

                  {/* High CTR In-Result Sponsor Slot */}
                  <AdShell placement="result" />

                  <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-300">
                      Prompt Adegan ({result.scenes.length} Scene)
                    </h3>
                    {result.scenes.map((scene) => (
                      <div
                        key={scene.sceneNumber}
                        className="rounded-xl border border-white/[0.07] bg-[#090d14] p-4 space-y-3"
                      >
                        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                          <span className="text-xs font-bold text-white">
                            Scene {scene.sceneNumber} · {scene.timecode}
                          </span>
                          <span className="text-[11px] text-zinc-400">{scene.purpose}</span>
                        </div>

                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-cyan-300">
                              1. Storyboard Image Prompt (Start-Frame)
                            </span>
                            <button
                              type="button"
                              onClick={() => copy(scene.storyboardImagePrompt, `img-${scene.sceneNumber}`)}
                              className="rounded border border-white/10 px-2 py-0.5 text-[11px] text-zinc-300 hover:text-white"
                            >
                              {copied === `img-${scene.sceneNumber}` ? "✓ Tersalin" : "Salin"}
                            </button>
                          </div>
                          <pre className="max-h-40 overflow-auto rounded-lg bg-[#06080d] p-2.5 text-xs text-zinc-300 whitespace-pre-wrap font-mono">
                            {scene.storyboardImagePrompt}
                          </pre>
                        </div>

                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-indigo-300">
                              2. Video Motion Prompt
                            </span>
                            <button
                              type="button"
                              onClick={() => copy(scene.videoPrompt, `vid-${scene.sceneNumber}`)}
                              className="rounded border border-white/10 px-2 py-0.5 text-[11px] text-zinc-300 hover:text-white"
                            >
                              {copied === `vid-${scene.sceneNumber}` ? "✓ Tersalin" : "Salin"}
                            </button>
                          </div>
                          <pre className="max-h-48 overflow-auto rounded-lg bg-[#06080d] p-2.5 text-xs text-zinc-300 whitespace-pre-wrap font-mono">
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
                  <h3 className="mt-4 text-base font-bold text-white">Workspace Siap Meracik</h3>
                  <p className="mt-1 max-w-sm text-xs text-zinc-400">
                    Isi detail produk dan tekan tombol Racik Prompt. Hasil storyboard start-frame dan video prompt adegan demi adegan akan ditampilkan di sini.
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

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  );
}

function UploadBox({
  name,
  preview,
  accept,
  onChange,
  onClear,
}: {
  name?: string;
  preview?: string;
  accept: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
}) {
  return (
    <div className="relative rounded-xl border border-dashed border-white/15 bg-[#10141e] p-3 text-center transition hover:border-indigo-400/40">
      <label className="block cursor-pointer">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-zinc-300">
          <span className="text-indigo-400">＋</span>
          <span className="truncate">{name || "Pilih foto dari perangkat"}</span>
        </div>
        <p className="mt-0.5 text-[10px] text-zinc-500">Maks. 8 MB (JPG, PNG, WEBP)</p>
        {preview && (
          <div className="mt-2.5 overflow-hidden rounded-lg border border-white/10 bg-black/40">
            <img src={preview} alt="Preview" className="max-h-48 w-full object-contain" />
          </div>
        )}
        <input type="file" accept={accept} onChange={onChange} className="hidden" />
      </label>
      {preview && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-950/80 text-xs text-red-300 hover:bg-red-900"
        >
          ✕
        </button>
      )}
    </div>
  );
}

function Choice({
  selected,
  label,
  desc,
  onClick,
}: {
  selected: boolean;
  label: string;
  desc?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border p-3 text-left transition ${
        selected
          ? "border-indigo-500/60 bg-indigo-600/20 text-white"
          : "border-white/10 bg-[#10141e] text-zinc-400 hover:text-white"
      }`}
    >
      <div className="text-xs font-bold">{label}</div>
      {desc && <div className="mt-0.5 text-[10px] leading-tight text-zinc-400">{desc}</div>}
    </button>
  );
}

function CustomSelect({
  value,
  options,
  onChange,
  disabled,
}: {
  value: string;
  options: string[];
  onChange: (v: string) => void;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        className={`${inputClass} flex items-center justify-between text-left`}
      >
        <span className="truncate">{value}</span>
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
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
