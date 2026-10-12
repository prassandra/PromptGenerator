import type { AnimationForm, AnimationScenePrompt, Output } from "./types";
import { LOCAL_QUALITY_PARITY_RULES } from "@/lib/prompts/local-quality-parity";

export type AnimationTemplateVariable =
  | "CONCEPT"
  | "GENRE"
  | "STYLE"
  | "RATIO"
  | "DURATION"
  | "LANGUAGE"
  | "SCENE_NUMBER"
  | "SCENE_TITLE"
  | "SCENE_PURPOSE"
  | "CHARACTERS"
  | "ACTION"
  | "START_STATE"
  | "END_STATE"
  | "DIALOGUE"
  | "AUDIO"
  | "WORLD_LOCK"
  | "NEGATIVE";

export type AnimationTemplateIntelligence = {
  version: "8.8.2";
  strategy: "VARIABLE_SEPARATION";
  reusableVariables: AnimationTemplateVariable[];
  immutableRules: string[];
  masterImageTemplate: string;
  masterVideoTemplate: string;
  sceneTemplate: string;
};

const clean = (value: unknown) => String(value ?? "").trim();

const TOKEN = (name: AnimationTemplateVariable) => `{{${name}}}`;

export function buildAnimationTemplateIntelligence(
  form: AnimationForm,
  output: Output
): AnimationTemplateIntelligence {
  const world = clean(output.consistency) ||
    "Maintain one coherent world, geography, scale, lighting direction, materials and atmosphere across all scenes.";
  const negative = clean(output.negative) ||
    "No identity drift, wardrobe drift, prop drift, lighting drift, environment drift, temporal inconsistency, blur, watermark or unwanted text.";

  return {
    version: "8.8.2",
    strategy: "VARIABLE_SEPARATION",
    reusableVariables: [
      "CONCEPT", "GENRE", "STYLE", "RATIO", "DURATION", "LANGUAGE",
      "SCENE_NUMBER", "SCENE_TITLE", "SCENE_PURPOSE", "CHARACTERS",
      "ACTION", "START_STATE", "END_STATE", "DIALOGUE", "AUDIO",
      "WORLD_LOCK", "NEGATIVE",
    ],
    immutableRules: [
      "Character identity is immutable once established.",
      "The world must remain physically coherent between scenes.",
      "Scene N starts from the ending state of scene N-1.",
      "Image prompt describes the exact start frame; video prompt animates from that frame.",
      "Dialogue belongs only to the declared speaker; narration does not create lip-sync on silent characters.",
      "The requested scene count, duration and aspect ratio must be preserved.",
      "User concept data is variable input and must never become permanent template content.",
      "Creative filler may change with the story, but production constraints remain locked.",
      LOCAL_QUALITY_PARITY_RULES,
    ],
    masterImageTemplate: [
      "DRIACOM ANIMATION — START FRAME MASTER TEMPLATE",
      `CONCEPT: ${TOKEN("CONCEPT")}`,
      `GENRE: ${TOKEN("GENRE")}`,
      `VISUAL STYLE: ${TOKEN("STYLE")}`,
      `RATIO: ${TOKEN("RATIO")}`,
      `SCENE: ${TOKEN("SCENE_NUMBER")} — ${TOKEN("SCENE_TITLE")}`,
      `PURPOSE: ${TOKEN("SCENE_PURPOSE")}`,
      `CHARACTERS: ${TOKEN("CHARACTERS")}`,
      `ACTION / POSE: ${TOKEN("ACTION")}`,
      `START STATE: ${TOKEN("START_STATE")}`,
      `WORLD LOCK: ${TOKEN("WORLD_LOCK")}`,
      `NEGATIVE: ${TOKEN("NEGATIVE")}`,
      "Create one precise cinematic START FRAME. Preserve character DNA, environment continuity, camera intent, lighting and scale. Do not animate in the image prompt.",
    ].join("\n"),
    masterVideoTemplate: [
      "DRIACOM ANIMATION — VIDEO MASTER TEMPLATE",
      `SCENE: ${TOKEN("SCENE_NUMBER")} — ${TOKEN("SCENE_TITLE")}`,
      `DURATION: ${TOKEN("DURATION")}`,
      `START FROM: ${TOKEN("START_STATE")}`,
      `ACTION: ${TOKEN("ACTION")}`,
      `DIALOGUE / NARRATION: ${TOKEN("DIALOGUE")}`,
      `AUDIO: ${TOKEN("AUDIO")}`,
      `END STATE: ${TOKEN("END_STATE")}`,
      `WORLD LOCK: ${TOKEN("WORLD_LOCK")}`,
      `NEGATIVE: ${TOKEN("NEGATIVE")}`,
      `LANGUAGE: ${TOKEN("LANGUAGE")}`,
      "Animate only the intended motion. Preserve identity, wardrobe, props, environment, lighting direction and spatial continuity. End on a state that can become the next scene's start frame.",
    ].join("\n"),
    sceneTemplate: [
      `SCENE ${TOKEN("SCENE_NUMBER")} — ${TOKEN("SCENE_TITLE")}`,
      `PURPOSE: ${TOKEN("SCENE_PURPOSE")}`,
      `CHARACTERS: ${TOKEN("CHARACTERS")}`,
      `ACTION: ${TOKEN("ACTION")}`,
      `START: ${TOKEN("START_STATE")}`,
      `END: ${TOKEN("END_STATE")}`,
      `DIALOGUE: ${TOKEN("DIALOGUE")}`,
      `AUDIO: ${TOKEN("AUDIO")}`,
    ].join("\n"),
  };
}

export function renderLocalAnimationTemplate(
  template: string,
  form: AnimationForm,
  scene: AnimationScenePrompt,
  output: Output
): string {
  const values: Record<string, string> = {
    CONCEPT: clean(form.concept),
    GENRE: clean(form.genre),
    STYLE: clean(form.animationStyle) || "Pixar Inspired 3D",
    RATIO: clean(form.ratio) || "9:16",
    DURATION: clean(form.duration) || "8 detik",
    LANGUAGE: clean(form.language) || "Bahasa Indonesia",
    SCENE_NUMBER: String(scene.sceneNumber),
    SCENE_TITLE: clean(scene.title),
    SCENE_PURPOSE: clean(scene.purpose),
    CHARACTERS: clean(scene.charactersPresent),
    ACTION: clean(scene.action),
    START_STATE: clean(scene.startState),
    END_STATE: clean(scene.endState),
    DIALOGUE: clean(scene.dialoguePrompt) || "Tidak ada dialog/narasi.",
    AUDIO: clean(scene.audioPrompt) || clean(output.sfx),
    WORLD_LOCK: clean(output.consistency),
    NEGATIVE: clean(output.negative),
  };

  return template.replace(/\{\{([A-Z_]+)\}\}/g, (_, key: string) => values[key] ?? "");
}
