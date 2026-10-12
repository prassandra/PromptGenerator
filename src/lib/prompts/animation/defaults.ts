import type {
  AnimationForm,
  Output,
} from "./types";

/* =========================================================
   DRIACOM ANIMATION — DEFAULTS
   FINAL
   ========================================================= */

export const ANIMATION_VISUAL_STYLES = [
  "Pixar Inspired 3D",
  "Little Giants 3D",
  "Minecraft 3D",
  "Roblox 3D",
  "3D Cartoon",
  "Stop Motion",
] as const;

export const DEFAULT_ANIMATION_VISUAL_STYLE =
  "Pixar Inspired 3D";

export const ANIMATION_CONTENT_TYPES = [
  "Petualangan",
  "ASMR",
  "Objek Bicara",
  "Fakta Unik",
  "Edukasi Visual",
  "Konten Hewan",
  "What If",
  "Eksperimen & Sains",
  "Miniatur",
] as const;

export const createDefaultAnimationForm =
  (): AnimationForm => ({
    concept: "",

    genre: "Petualangan",

    referenceLink: "",
    referenceStory: "",

    character:
      "Buat karakter yang paling sesuai dengan konsep cerita.",

    characters: [],

    characterDesign:
      "Buat desain karakter yang konsisten dengan cerita dan gaya visual.",

    storyBlueprint: undefined,

    world: "",

    action:
      "Tentukan aksi konkret yang memajukan cerita pada setiap scene.",

    expression:
      "Gunakan ekspresi karakter yang natural dan sesuai perkembangan cerita.",

    animationStyle:
      DEFAULT_ANIMATION_VISUAL_STYLE,

    ratio: "9:16",

    camera:
      "Controlled cinematic camera movement dengan framing yang memiliki tujuan naratif.",

    lighting:
      "Professional cinematic lighting dengan konsistensi arah cahaya.",

    scenes: "4",

    duration: "8 detik",

    language: "Bahasa Indonesia",

    audio:
      "Narasi + BGM + SFX",

    speakerMode:
      "Ada karakter yang bicara",
  });


/* =========================================================
   DEFAULT FORM
   ========================================================= */

export const defaultAnimationForm =
  createDefaultAnimationForm();


/* =========================================================
   EMPTY OUTPUT
   ========================================================= */

export const emptyAnimationOutput: Output = {
  thumbnailTitle: "",

  thumbnailPrompt: "",

  character: "",

  storyboard: "",

  scenePrompts: [],

  consistency: "",

  voice: "",

  sfx: "",

  negative: "",
};


/* =========================================================
   LEGACY ALIASES
   ========================================================= */

export const defaultForm =
  defaultAnimationForm;

export const emptyOutput =
  emptyAnimationOutput;