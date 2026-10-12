"use client";
import AdShell from "@/components/AdShell";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { usePromptUsage } from "@/lib/use-prompt-usage";

import { useMemo, useState } from "react";
import Link from "next/link";
import PremiumSidebar from "@/components/PremiumSidebar";
import AccountBar from "@/components/AccountBar";
import WorkspaceBackButton from "@/components/WorkspaceBackButton";
import VisitorToday from "@/components/VisitorToday";
import RewardTokenModal from "@/components/RewardTokenModal";

import type {
  AnimationCharacter,
  AnimationForm,
  Output,
  StoryBlueprint,
} from "@/lib/prompts/animation/types";

import {
  createDefaultAnimationForm,
  emptyAnimationOutput,
  ANIMATION_VISUAL_STYLES,
  ANIMATION_CONTENT_TYPES,
} from "@/lib/prompts/animation/defaults";


/* =========================================================
   DRIACOM ANIMATION — PAGE
   FINAL UI
   ========================================================= */

/* =========================================================
   AI IDEA OPTION

   Kept local to this page so the UI does not depend on a
   separate type export when the project is rebuilt or merged.
   ========================================================= */

type IdeaOption = {
  title: string;
  concept: string;
  hook: string;
  storyBlueprint?: StoryBlueprint;
};


const inputClass =
  "w-full rounded-2xl border border-white/15 bg-[#12151c] px-5 py-4 text-[16px] font-medium text-white outline-none transition placeholder:text-zinc-400 focus:border-cyan-400/70 focus:bg-[#151922]";

const textareaClass =
  "w-full resize-none rounded-2xl border border-white/15 bg-[#12151c] px-5 py-4 text-[16px] leading-7 font-medium text-white outline-none transition placeholder:text-zinc-400 focus:border-cyan-400/70 focus:bg-[#151922]";

const selectClass =
  "w-full rounded-2xl border border-white/15 bg-[#12151c] px-5 py-4 text-[16px] font-medium text-white outline-none transition focus:border-cyan-400/70";

const labelClass =
  "mb-2.5 block text-[15px] font-bold text-zinc-100";

const optionButtonClass =
  "rounded-2xl border border-white/15 bg-[#11141a] px-4 py-4 text-[15px] font-bold text-zinc-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-white";

const activeOptionButtonClass =
  "rounded-2xl border border-cyan-400/70 bg-cyan-400/15 px-4 py-4 text-[15px] font-bold text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.08)]";

const ANIMATION_IDEA_PLACEHOLDERS: Record<string, string> = {
  "ASMR": "Contoh: Memotong sabun transparan dengan tekstur lembut dan suara potongan yang memuaskan...",
  "Objek Bicara": "Contoh: Sebuah jam dinding tua mulai mengeluh karena selalu diabaikan pemiliknya...",
  "Fakta Unik": "Contoh: Fakta mengejutkan tentang bagaimana gurita bisa mengubah warna tubuhnya...",
  "Edukasi Visual": "Contoh: Menjelaskan bagaimana hujan terbentuk dengan visual yang mudah dipahami...",
  "Konten Hewan": "Contoh: Seekor anak kucing penasaran menjelajahi rumah dan menemukan sesuatu yang tidak terduga...",
  "What If": "Contoh: Bagaimana jika manusia bisa hidup tanpa tidur selama 30 hari?...",
  "Eksperimen & Sains": "Contoh: Apa yang terjadi ketika sebuah benda dimasukkan ke dalam cairan yang sangat dingin?...",
  "Miniatur": "Contoh: Sebuah kedai kopi mini mulai hidup ketika seluruh kota sudah tertidur...",
  "Petualangan": "Contoh: Seorang anak menemukan pintu rahasia di tengah hutan dan memutuskan untuk membukanya...",
};

function getAnimationIdeaPlaceholder(contentType: string): string {
  return ANIMATION_IDEA_PLACEHOLDERS[contentType] ||
    "Contoh: Tulis ide singkat tentang cerita atau konsep animasi yang ingin kamu buat...";
}

/* =========================================================
   CHARACTER HELPERS
   ========================================================= */

const createCharacter = (
  index: number
): AnimationCharacter => ({
  id: `CHAR-${String(index + 1).padStart(2, "0")}`,

  name:
    index === 0
      ? "Karakter Utama"
      : `Karakter ${index + 1}`,

  role:
    index === 0
      ? "Protagonis"
      : "Supporting Character",

  description: "",
  age: "",
  gender: "",
  appearance: "",
  face: "",
  hair: "",
  skin: "",
  body: "",
  wardrobe: "",
  accessories: "",
  personality: "",
  expression: "",
  pose: "",
  visualSignature: "",
});

const buildCharacters = (
  count: number
): AnimationCharacter[] =>
  Array.from(
    { length: count },
    (_, index) =>
      createCharacter(index)
  );

/* =========================================================
   SECTION TITLE
   ========================================================= */

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold tracking-tight text-white sm:text-[22px]">
        {title}
      </h2>

      {description ? (
        <p className="mt-2 text-[15px] leading-6 text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function CustomDropdown({
  value,
  options,
  onChange,
  label,
}: {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {label ? <span className="sr-only">{label}</span> : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-2xl border border-white/15 bg-[#12151c] px-5 py-4 text-left text-[16px] font-bold text-white transition hover:border-cyan-400/45"
      >
        <span>{value}</span>
        <span className={`text-cyan-300 transition ${open ? "rotate-180" : ""}`}>⌄</span>
      </button>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Tutup pilihan"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 max-h-80 overflow-auto rounded-2xl border border-white/10 bg-[#0b1019] p-2 shadow-2xl shadow-black/40">
            {options.map((option) => (
              <button
                type="button"
                key={option}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-bold transition ${
                  option === value
                    ? "bg-cyan-400/12 text-cyan-200"
                    : "text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

/* =========================================================
   PROMPT CARD
   ========================================================= */


function PromptCard({
  icon,
  title,
  text,
  copyId,
  copied,
  onCopy,
}: {
  icon: string;
  title: string;
  text: string;
  copyId: string;
  copied: string;
  onCopy: (
    text: string,
    id: string
  ) => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1019]">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-lg">
            {icon}
          </div>

          <h3 className="truncate text-base font-bold text-white">
            {title}
          </h3>
        </div>

        <button
          type="button"
          onClick={() =>
            onCopy(text, copyId)
          }
          disabled={!text}
          className="shrink-0 rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-2.5 text-sm font-bold text-cyan-200 transition hover:bg-cyan-400/20 disabled:opacity-30"
        >
          {copied === copyId
            ? "✓ Tersalin"
            : "Copy"}
        </button>
      </div>

      <pre className="max-h-[520px] overflow-auto whitespace-pre-wrap break-words p-5 font-mono text-[14px] leading-7 text-zinc-300">
        {text || "Belum ada prompt."}
      </pre>
    </div>
  );
}

/* =========================================================
   SCENE CARD
   ========================================================= */

function SceneCard({
  scene,
  copied,
  onCopy,
}: {
  scene: Output["scenePrompts"][number];
  copied: string;
  onCopy: (
    text: string,
    id: string
  ) => void;
}) {
  const number =
    String(scene.sceneNumber).padStart(
      2,
      "0"
    );

  return (
    <article className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0f17]">
      <div className="border-b border-white/[0.07] bg-[#0d121b] px-5 py-5 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Scene {number}
            </p>
            <h3 className="mt-1.5 text-xl font-bold text-white">
              {scene.title}
            </h3>
            <p className="mt-2 max-w-2xl text-[14px] leading-6 text-zinc-400">
              {scene.purpose}
            </p>
          </div>
          <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-2 text-xs font-bold text-cyan-200">
            Image → Video
          </div>
        </div>
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <PromptCard
          icon="🖼️"
          title={`Image Prompt — Scene ${number}`}
          text={scene.imagePrompt}
          copyId={`scene-${scene.sceneNumber}-image`}
          copied={copied}
          onCopy={onCopy}
        />

        <PromptCard
          icon="🎥"
          title={`Video Prompt — Scene ${number}`}
          text={scene.videoPrompt}
          copyId={`scene-${scene.sceneNumber}-video`}
          copied={copied}
          onCopy={onCopy}
        />
      </div>
    </article>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

export default function AnimationGeneratorPage() {
  const { status: usage, refresh: refreshUsage } = usePromptUsage("animation");
  const usageBlocked = Boolean(usage && !usage.unlimited && (usage.remaining ?? 0) <= 0 && (usage.bonusTokens ?? 0) <= 0);
  const [rewardOpen, setRewardOpen] = useState(false);

  const initialForm =
    createDefaultAnimationForm();

  const [form, setForm] =
    useState<AnimationForm>(() => ({
      ...initialForm,
      concept: "",
      scenes: "4",
      duration: "8 detik",
      characters:
        buildCharacters(1),
    }));

  const [result, setResult] =
    useState<Output>(
      emptyAnimationOutput
    );

  const [generated, setGenerated] =
    useState(false);

  const [aiLoading, setAiLoading] =
    useState(false);

  const [aiError, setAiError] =
    useState("");

  const [copied, setCopied] =
    useState("");




  const [genre, setGenre] =
    useState("Petualangan");

  const [characterCount, setCharacterCount] =
    useState(1);

  const [durationPerScene, setDurationPerScene] =
    useState("8 detik");

  const [ratio, setRatio] =
    useState("9:16");

  const [language, setLanguage] =
    useState("Bahasa Indonesia");

  const [audioMode, setAudioMode] =
    useState("Narasi + BGM + SFX");

  const [speakerMode, setSpeakerMode] =
    useState("Ada karakter yang bicara");

  const [ideaLoading, setIdeaLoading] =
    useState(false);

  const [ideaFocused, setIdeaFocused] =
    useState(false);

  const [ideaOptions, setIdeaOptions] =
    useState<IdeaOption[]>([]);

  const [ideaError, setIdeaError] =
    useState("");

  /* =======================================================
     FORM UPDATE
     ======================================================= */

  const updateForm = <
    K extends keyof AnimationForm
  >(
    key: K,
    value: AnimationForm[K]
  ) => {
    setForm((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const selectedSceneCount =
    Math.max(
      1,
      Math.min(
        10,
        Number(form.scenes) || 1
      )
    );

  /* =======================================================
     AI IDEA GENERATOR
     ======================================================= */

  const generateIdea = async () => {
    // Ide boleh kosong: setelah user memilih Jenis Konten,
    // Driacom harus tetap bisa membuat saran ide berdasarkan jenis tersebut.
    const keyword = String(form.concept || "").trim();

    try {
      setIdeaLoading(true);
      setIdeaError("");
      setIdeaOptions([]);

      const response = await fetch("/api/animation-ideas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          keyword,
          genre,
          animationStyle: form.animationStyle,
          language,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "Driacom gagal membuat pilihan ide."
        );
      }

      const ideas = Array.isArray(data.ideas)
        ? (data.ideas as IdeaOption[])
        : [];

      if (!ideas.length) {
        throw new Error("Belum ada pilihan ide yang diterima dari Gemini.");
      }

      setIdeaOptions(ideas);
      setIdeaFocused(true);
    } catch (error) {
      console.error("Driacom AI Idea Error:", error);
      setIdeaError(
        error instanceof Error
          ? error.message
          : "Driacom belum berhasil membuat pilihan ide. Coba lagi."
      );
    } finally {
      setIdeaLoading(false);
    }
  };

  const useIdea = (idea: IdeaOption) => {
    updateForm("concept", idea.concept);
    updateForm("storyBlueprint", idea.storyBlueprint);
    setIdeaOptions([]);
    setIdeaError("");
    setIdeaFocused(true);

    window.setTimeout(() => {
      document
        .getElementById("idea-input")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  };

  /* =======================================================
     CHARACTER COUNT
     ======================================================= */

  const handleCharacterCount = (
    count: number
  ) => {
    setCharacterCount(count);

    updateForm(
      "characters",
      buildCharacters(count)
    );
  };

  /* =======================================================
     GENERATE
     ======================================================= */

  const handleGenerate = async () => {
    if (usageBlocked) { setRewardOpen(true); return; }
    const concept =
      String(form.concept || "").trim();

    if (!concept) {
      setIdeaFocused(true);

      document
        .getElementById(
          "idea-input"
        )
        ?.focus();

      return;
    }

    const finalForm: AnimationForm = {
      ...form,

      concept,


      referenceStory:
        form.referenceStory || "",

      genre,

      ratio,

      language,

      duration:
        durationPerScene,

      scenes:
        String(selectedSceneCount),

      characters:
        buildCharacters(
          characterCount
        ),

      character:
        characterCount === 1
          ? "Buat satu karakter utama yang paling sesuai dengan konsep, genre, dan gaya visual."
          : `Buat ${characterCount} karakter berbeda yang relevan dengan cerita.`,

      characterDesign:
        `Buat seluruh desain karakter berdasarkan konsep cerita, genre ${genre}, dan gaya visual ${form.animationStyle}.`,

      world:
        `Bangun dunia visual berdasarkan konsep cerita, genre ${genre}, gaya visual ${form.animationStyle}, ratio ${ratio}, dan bahasa ${language}.`,

      action:
        "Tentukan aksi konkret setiap scene berdasarkan perkembangan cerita.",

      expression:
        speakerMode ===
        "Ada narator saja"
          ? "Gunakan ekspresi visual yang kuat untuk mendukung narasi."
          : "Gunakan ekspresi karakter yang natural dan sesuai perkembangan cerita.",

      audio:
        audioMode,

      speakerMode,
    };

    try {
      setAiLoading(true);
      setAiError("");
      setGenerated(false);

      const response = await fetch(
        "/api/animation-gemini",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalForm),
        }
      );

      const responseText = await response.text();

      let data: {
        success?: boolean;
        output?: Output;
        error?: string;
      };

      try {
        data = responseText
          ? JSON.parse(responseText)
          : {};
      } catch {
        const preview = responseText.trim().slice(0, 500);
        throw new Error(
          `Server Driacom mengembalikan respons yang bukan JSON (HTTP ${response.status}).` +
          (preview ? ` Respons: ${preview}` : " Respons server kosong.")
        );
      }

      if (!response.ok || !data.success) {
        throw new Error(
          data.error ||
            `Gemini gagal membuat prompt (HTTP ${response.status}).`
        );
      }

      if (!data.output) {
        throw new Error("Driacom tidak menerima output Animation dari server.");
      }

      setResult(data.output);
      setGenerated(true);
      await refreshUsage();

      window.setTimeout(() => {
        document
          .getElementById(
            "hasil-output"
          )
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);
    } catch (error) {
      console.error(
        "Driacom Gemini Animation Error:",
        error
      );

      setGenerated(false);
      // Jangan tampilkan detail teknis/API kepada user.
      // Detail tetap dicatat di console untuk debugging development.
      setAiError(
        "Driacom gagal meracik prompt karena sedang banyak yang menggunakan Driacom. Coba lagi beberapa saat."
      );
    } finally {
      setAiLoading(false);
    }
  };

  /* =======================================================
     RESET
     ======================================================= */

  const reset = () => {
    const resetForm =
      createDefaultAnimationForm();

    setForm({
      ...resetForm,
      concept: "",
      scenes: "4",
      duration: "8 detik",
      characters:
        buildCharacters(1),
    });

    updateForm("referenceStory", "");

    setGenre("Petualangan");
    setCharacterCount(1);
    setDurationPerScene("8 detik");
    setRatio("9:16");
    setLanguage("Bahasa Indonesia");
    setAudioMode(
      "Narasi + BGM + SFX"
    );
    setSpeakerMode(
      "Ada karakter yang bicara"
    );

    setResult(
      emptyAnimationOutput
    );

    setGenerated(false);
    setAiLoading(false);
    setAiError("");
    setCopied("");
    setIdeaFocused(false);
    setIdeaOptions([]);
    setIdeaError("");
  };

  /* =======================================================
     COPY
     ======================================================= */

  const copyText = async (
    text: string,
    id: string
  ) => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(
        text
      );

      setCopied(id);

      window.setTimeout(() => {
        setCopied("");
      }, 1800);
    } catch {
      setCopied("");
    }
  };

  const scenes =
    result.scenePrompts || [];

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050811] text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.045] blur-[90px]" />

        <div className="absolute -right-40 top-[25%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.04] blur-[95px]" />

        <div className="absolute bottom-0 left-[35%] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.02] blur-[90px]" />
      </div>

      <div className="flex min-h-screen w-full flex-col lg:flex-row">
        <PremiumSidebar active="animation" />
        <div className="relative min-w-0 flex-1 px-5 sm:px-8 lg:px-10">

        {/* HEADER */}
        <header className="sticky top-0 z-40 -mx-5 mb-8 border-b border-white/[0.07] bg-[#050811]/95 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300">Driacom — Prompt AI Generator</p>
              <h1 className="mt-1 truncate font-serif text-2xl font-black tracking-tight text-white sm:text-3xl">Animation</h1>
              <p className="mt-1 hidden text-sm text-zinc-500 sm:block">Ceritakan ide kamu. Detail produksi disusun otomatis oleh Driacom.</p>
            </div>
            <div className="flex w-full flex-wrap items-center justify-end gap-2 sm:w-auto"><VisitorToday className="w-full sm:w-auto" /><WorkspaceBackButton /><LanguageSwitcher compact /><AccountBar /></div>
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="workspace-two-col grid gap-7 xl:gap-8">

          {/* =================================================
             LEFT FORM
             ================================================= */}
          <section className="workspace-form h-fit rounded-[28px] border border-white/[0.09] bg-gradient-to-br from-[#0b1019] to-[#080c14] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-6">

            <div className="mb-7">
              <h2 className="mt-1 text-2xl font-bold text-white">
                Buat Animasi
              </h2>

              <p className="mt-2 text-[16px] leading-7 text-zinc-300">
                Kamu cukup menentukan
                arah cerita. Detail
                produksi dikerjakan
                otomatis oleh Driacom.
              </p>
            </div>

            <fieldset
              disabled={aiLoading}
              aria-busy={aiLoading}
              className="space-y-7 disabled:opacity-90"
            >

              {/* GENRE */}
              <div>
                <SectionTitle
                  title="Jenis Konten Animasi"
                  description="Satu engine untuk berbagai format. Driacom menyesuaikan cara membuat prompt berdasarkan pilihan ini."
                />

                <CustomDropdown
                  value={genre}
                  onChange={(value) => {
                    setGenre(value);
                    setIdeaOptions([]);
                    setIdeaError("");
                  }}
                  options={[...ANIMATION_CONTENT_TYPES]}
                  label="Jenis Konten Animasi"
                />
              </div>

              {/* IDEA */}
              <div>
                <SectionTitle
                  title="Ide / Topik"
                  description={`Jenis konten: ${genre}. Tulis ide singkat atau minta Driacom mencarikannya.`}
                />

                <textarea
                  id="idea-input"
                  value={String(
                    form.concept || ""
                  )}
                  onFocus={() =>
                    setIdeaFocused(true)
                  }
                  onBlur={() => {
                    if (
                      !String(
                        form.concept || ""
                      ).trim()
                    ) {
                      setIdeaFocused(false);
                    }
                  }}
                  onChange={(event) => {
                    updateForm(
                      "concept",
                      event.target.value
                    );
                    // A manual story edit invalidates the hidden AI Story Blueprint.
                    updateForm("storyBlueprint", undefined);
                  }}
                  rows={5}
                  placeholder={
                    ideaFocused
                      ? ""
                      : getAnimationIdeaPlaceholder(genre)
                  }
                  className={textareaClass}
                />

                <button
                  type="button"
                  onClick={generateIdea}
                  disabled={ideaLoading}
                  className="mt-3 w-full rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.08] px-4 py-4 text-[15px] font-bold text-cyan-200 transition hover:bg-cyan-400/[0.15] disabled:opacity-50"
                >
                  {ideaLoading
                    ? "✦ Driacom sedang mencari ide..."
                    : "✦ AI Driacom — Bantu Buat Ide"}
                </button>

                {ideaError ? (
                  <div className="mt-3 rounded-2xl border border-red-400/20 bg-red-400/[0.06] p-4 text-[14px] font-semibold leading-6 text-red-200">
                    {ideaError}
                  </div>
                ) : null}

                {ideaOptions.length > 0 ? (
                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-4">
                      <p className="text-[14px] font-bold text-cyan-200">
                        ✦ Pilihan Ide Driacom
                      </p>
                      <p className="mt-1 text-[13px] leading-5 text-zinc-400">
                        Pilih satu ide. Driacom akan memasukkannya ke Ide / Topik.
                      </p>
                    </div>

                    {ideaOptions.map((idea, index) => (
                      <button
                        key={`${idea.title}-${index}`}
                        type="button"
                        onClick={() => useIdea(idea)}
                        className="w-full rounded-2xl border border-white/12 bg-[#11141a] p-4 text-left transition hover:border-cyan-400/50 hover:bg-cyan-400/[0.06]"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10 text-sm font-bold text-cyan-200">
                            {index + 1}
                          </span>
                          <div className="min-w-0">
                            <p className="text-[15px] font-bold text-white">
                              {idea.title}
                            </p>
                            {idea.hook ? (
                              <p className="mt-1 text-[13px] font-semibold leading-5 text-cyan-200">
                                {idea.hook}
                              </p>
                            ) : null}
                            <p className="mt-2 text-[14px] leading-6 text-zinc-300">
                              {idea.concept}
                            </p>
                            <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                              Klik untuk gunakan ide ini
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* VISUAL */}
              <div>
                <SectionTitle
                  title="Gaya Visual"
                  description="Driacom menyesuaikan seluruh desain visual."
                />

                <CustomDropdown
                  value={form.animationStyle}
                  onChange={(value) =>
                    updateForm("animationStyle", value)
                  }
                  options={[...ANIMATION_VISUAL_STYLES]}
                  label="Gaya Visual"
                />
              </div>

              {/* CHARACTER COUNT */}
              <div>
                <SectionTitle
                  title="Jumlah Karakter"
                  description="Driacom membuat identitas karakter otomatis."
                />

                <div className="grid grid-cols-5 gap-2.5">
                  {[1, 2, 3, 4, 5].map(
                    (count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() =>
                          handleCharacterCount(
                            count
                          )
                        }
                        className={
                          characterCount ===
                          count
                            ? activeOptionButtonClass
                            : optionButtonClass
                        }
                      >
                        {count}
                      </button>
                    )
                  )}
                </div>

                <div className="mt-3 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] p-4">
                  <p className="text-[15px] font-bold leading-6 text-cyan-100">
                    ✓ Driacom membuat nama,
                    wajah, pakaian,
                    kepribadian, proporsi,
                    aksesori, dan identitas
                    visual karakter.
                  </p>
                </div>
              </div>

              {/* VIDEO STRUCTURE */}
              <div>
                <SectionTitle
                  title="Struktur Video"
                  description="Atur scene, durasi, ratio, dan bahasa."
                />

                <div className="rounded-2xl border border-white/12 bg-[#11141a] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[15px] font-bold text-zinc-100">
                        Jumlah Scene
                      </p>

                      <p className="mt-1 text-[14px] text-zinc-400">
                        1 sampai 10 scene
                      </p>
                    </div>

                    <div className="flex h-12 min-w-14 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 text-xl font-bold text-cyan-200">
                      {
                        selectedSceneCount
                      }
                    </div>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={
                      selectedSceneCount
                    }
                    onChange={(event) =>
                      updateForm(
                        "scenes",
                        event.target.value
                      )
                    }
                    className="mt-5 w-full accent-cyan-400"
                  />

                  <div className="mt-2 flex justify-between text-[13px] font-bold text-zinc-500">
                    <span>1</span>
                    <span>5</span>
                    <span>10</span>
                  </div>
                </div>

                {/* DURATION */}
                <div className="mt-4">
                  <label
                    className={labelClass}
                  >
                    Durasi per Scene
                  </label>

                  <div className="grid grid-cols-4 gap-2">
                    {[
                      "4 detik",
                      "6 detik",
                      "8 detik",
                      "10 detik",
                    ].map(
                      (duration) => (
                        <button
                          key={duration}
                          type="button"
                          onClick={() =>
                            setDurationPerScene(
                              duration
                            )
                          }
                          className={
                            durationPerScene ===
                            duration
                              ? activeOptionButtonClass
                              : optionButtonClass
                          }
                        >
                          {duration.replace(
                            " detik",
                            "s"
                          )}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* RATIO */}
                <div className="mt-4">
                  <label
                    className={labelClass}
                  >
                    Ratio Video
                  </label>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      "9:16",
                      "16:9",
                      "1:1",
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          setRatio(item)
                        }
                        className={
                          ratio === item
                            ? activeOptionButtonClass
                            : optionButtonClass
                        }
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* LANGUAGE */}
                <div className="mt-4">
                  <label
                    className={labelClass}
                  >
                    Bahasa
                  </label>

                  <CustomDropdown
                    value={language}
                    onChange={setLanguage}
                    options={[
                      "Bahasa Indonesia",
                      "English",
                      "Bahasa Melayu",
                      "日本語",
                      "한국어",
                    ]}
                    label="Bahasa"
                  />
                </div>
              </div>

              {/* AUDIO */}
              <div>
                <SectionTitle
                  title="Audio"
                  description="Pilih elemen suara yang digunakan."
                />

                <div className="space-y-2.5">
                  {[
                    "Narasi + BGM + SFX",
                    "Narasi + BGM",
                    "Narasi + SFX",
                    "BGM + SFX",
                    "Hanya Narasi",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setAudioMode(
                          item
                        )
                      }
                      className={`w-full text-left ${
                        audioMode === item
                          ? activeOptionButtonClass
                          : optionButtonClass
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* SPEAKER */}
              <div>
                <SectionTitle
                  title="Siapa yang Berbicara?"
                  description="Tentukan sumber suara cerita."
                />

                <div className="space-y-2.5">
                  {[
                    "Ada karakter yang bicara",
                    "Ada narator saja",
                    "Ada karakter + narator",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setSpeakerMode(
                          item
                        )
                      }
                      className={`w-full text-left ${
                        speakerMode === item
                          ? activeOptionButtonClass
                          : optionButtonClass
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* DIALOG NOTICE */}
                <div className="mt-3 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-4">
                  <p className="text-[14px] font-bold leading-6 text-cyan-100">
                    {speakerMode ===
                    "Ada karakter + narator"
                      ? "✓ Setiap scene akan memiliki naskah dialog karakter dan narasi yang disesuaikan dengan durasi scene."
                      : speakerMode ===
                          "Ada karakter yang bicara"
                        ? "✓ Setiap scene akan memiliki naskah dialog karakter sesuai perkembangan cerita."
                        : "✓ Setiap scene akan memiliki naskah narasi sesuai perkembangan cerita."}
                  </p>
                </div>
              </div>


              {/* GENERATE */}
              <div className="border-t border-white/10 pt-6">
                {aiLoading && (
                  <div className="mb-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-4 text-[14px] font-semibold leading-6 text-cyan-100">
                    🔒 Form dikunci sementara. Driacom sedang meracik prompt agar data yang diproses tetap konsisten.
                  </div>
                )}

                {aiError && (
                  <div className="mb-3 rounded-2xl border border-red-400/20 bg-red-400/[0.06] p-4 text-[14px] font-semibold leading-6 text-red-200">
                    {aiError}
                  </div>
                )}

                {!usage?.unlimited ? <p className="mb-3 text-center text-xs text-zinc-500">{usage ? (usageBlocked ? "Gratis 2x generate sudah habis. Tonton 2 iklan untuk +1 token atau upgrade ke PRO." : `Gratis ${usage.remaining ?? 0}x generate tersisa`) : "Mengecek kuota..."}</p> : null}

                <button
                  type="button"
                  onClick={handleGenerate}
                  disabled={aiLoading}
                  className="w-full rounded-2xl bg-cyan-400 px-5 py-5 text-[17px] font-bold text-black shadow-[0_10px_40px_rgba(34,211,238,0.15)] transition hover:bg-cyan-300 active:scale-[0.99] disabled:cursor-wait disabled:opacity-60"
                >
                  {aiLoading
                    ? "✦ Driacom sedang meracik prompt..."
                    : "✦ Racik Prompt"}
                </button>

                <button
                  type="button"
                  onClick={reset}
                  disabled={aiLoading}
                  className="mt-3 w-full rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-4 text-[15px] font-bold text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Reset
                </button>
              </div>
            </fieldset>
          </section>

          <div className="workspace-mid-ad"><AdShell plan="FREE" placement="mid" /></div>

          {/* =================================================
             RIGHT OUTPUT
             ================================================= */}
<section
            id="hasil-output"
            className="workspace-output min-w-0 rounded-[28px] border border-white/[0.09] bg-gradient-to-br from-[#0b1019] to-[#080c14] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-6"
          >
            {!generated ? (
              <div className="flex min-h-[700px] items-center justify-center rounded-3xl border border-dashed border-white/12 bg-[#0a0d12] p-8 text-center">
                <div className="max-w-lg">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-3xl text-cyan-300">
                    ✦
                  </div>

                  <h2 className="text-2xl font-bold text-white">
                    Animation Workspace
                  </h2>

                  <p className="mt-3 text-[16px] leading-7 text-zinc-300">
                    Isi ide cerita dan
                    beberapa pilihan dasar.
                    Driacom akan membuat
                    karakter, dunia,
                    scene, naskah dialog,
                    image prompt, video
                    prompt, dan audio
                    direction.
                  </p>

                  <div className="mt-7 grid gap-3 text-left sm:grid-cols-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xl">
                        👤
                      </p>

                      <p className="mt-2 text-[15px] font-bold text-white">
                        Karakter
                      </p>

                      <p className="mt-1 text-[14px] leading-5 text-zinc-400">
                        Identity Lock
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xl">
                        💬
                      </p>

                      <p className="mt-2 text-[15px] font-bold text-white">
                        Dialog
                      </p>

                      <p className="mt-1 text-[14px] leading-5 text-zinc-400">
                        Scene Script
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xl">
                        🖼️
                      </p>

                      <p className="mt-2 text-[15px] font-bold text-white">
                        Image
                      </p>

                      <p className="mt-1 text-[14px] leading-5 text-zinc-400">
                        Start Frame
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xl">
                        🎥
                      </p>

                      <p className="mt-2 text-[15px] font-bold text-white">
                        Video
                      </p>

                      <p className="mt-1 text-[14px] leading-5 text-zinc-400">
                        Motion Prompt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-7">

                {/* OUTPUT HEADER */}
                <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                      Animation Output
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-white">
                      Animation Output
                    </h2>

                    <p className="mt-2 text-[15px] leading-6 text-zinc-400">
                      {characterCount}{" "}
                      karakter
                      {" · "}
                      {scenes.length}{" "}
                      scene
                      {" · "}
                      {durationPerScene}
                      {" / scene · "}
                      {ratio}
                      {" · "}
                      {language}
                      {" · "}
                      {speakerMode}
                    </p>
                  </div>

                </div>

                {/* MASTER CHARACTER SHEETS */}
                <div>
                  <SectionTitle
                    title="Master Character Sheet"
                    description="Setiap karakter memiliki 1 prompt master sendiri. Jika ada 2 karakter, Driacom menghasilkan 2 prompt terpisah agar setiap gambar fokus pada satu karakter lengkap dengan turnaround dan detail identitas."
                  />

                  <div className="space-y-5">
                    {result.characterSheets?.map((sheet) => (
                      <PromptCard
                        key={sheet.id}
                        icon="👤"
                        title={`${sheet.id} — ${sheet.name} — Master Turnaround`}
                        text={sheet.prompt}
                        copyId={`character-sheet-${sheet.id}`}
                        copied={copied}
                        onCopy={copyText}
                      />
                    ))}
                  </div>
                </div>

                {/* SCENES */}
                <div>
                  <SectionTitle
                    title="Scene Production"
                    description="Setiap scene hanya berisi Image Prompt dan Video Prompt. Naskah dialog, narasi, voice, BGM, SFX, dan audio direction sudah ditanam langsung di dalam Video Prompt."
                  />

                  <div className="space-y-5">
                    {scenes.length > 0 ? (
                      scenes.map((scene) => (
                        <SceneCard
                          key={scene.sceneNumber}
                          scene={scene}
                          copied={copied}
                          onCopy={copyText}
                        />
                      ))
                    ) : (
                      <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center text-zinc-500">
                        Belum ada scene.
                      </div>
                    )}
                  </div>
                </div>

                {/* OUTPUT NOTE */}
                <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-5">
                  <p className="text-[15px] font-bold leading-6 text-cyan-100">
                    ✓ Prompt package siap digunakan.
                  </p>
                  <p className="mt-1 text-[14px] leading-6 text-zinc-400">
                    Gunakan Master Character Sheet sebagai sumber identitas karakter,
                    Thumbnail sebagai key visual, Image Prompt sebagai Start Frame,
                    dan Video Prompt sebagai prompt produksi lengkap untuk setiap scene.
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>

        {/* FOOTER */}
        <footer className="mt-10 border-t border-white/[0.07] py-7 text-center text-[11px] tracking-[0.16em] text-zinc-600">
          DRIACOM — PROMPT AI GENERATOR
        </footer>
        </div>
      </div>
    <RewardTokenModal open={rewardOpen} onClose={() => setRewardOpen(false)} onGranted={() => { setRewardOpen(false); refreshUsage(); }} />
</main>
  );
}
