import { buildAnimationTemplateIntelligence } from "./local-template-intelligence";
import type { AnimationForm, Output } from "./types";

export type AnimationLocalTemplate = {
  engine: "driacom-local-animation-v1";
  version: "8.8.2";
  variables: {
    concept: string;
    genre: string;
    animationStyle: string;
    ratio: string;
    scenes: number;
    duration: string;
    language: string;
    speakerMode: string;
  };
  templateIntelligence: import("./local-template-intelligence").AnimationTemplateIntelligence;
  qualityGate: {
    sceneCountValid: boolean;
    sequentialScenes: boolean;
    promptsComplete: boolean;
    consistencyPresent: boolean;
    negativePresent: boolean;
  };
};

const clean = (value: unknown) => String(value ?? "").trim();

export function buildAnimationLocalTemplate(
  form: AnimationForm,
  output: Output
): AnimationLocalTemplate {
  const requestedScenes = Math.max(1, Math.min(10, Number(form.scenes) || 1));
  const scenes = Array.isArray(output.scenePrompts) ? output.scenePrompts : [];
  const numbers = scenes.map((scene) => Number(scene.sceneNumber));
  const expected = Array.from({ length: requestedScenes }, (_, i) => i + 1);

  const sceneCountValid = scenes.length === requestedScenes;
  const sequentialScenes =
    sceneCountValid && numbers.every((number, index) => number === expected[index]);
  const promptsComplete =
    sceneCountValid &&
    scenes.every((scene) => clean(scene.imagePrompt) && clean(scene.videoPrompt));

  return {
    engine: "driacom-local-animation-v1",
    version: "8.8.2",
    templateIntelligence: buildAnimationTemplateIntelligence(form, output),
    variables: {
      concept: clean(form.concept),
      genre: clean(form.genre),
      animationStyle: clean(form.animationStyle) || "Pixar Inspired 3D",
      ratio: clean(form.ratio) || "9:16",
      scenes: requestedScenes,
      duration: clean(form.duration) || "8 detik",
      language: clean(form.language) || "Bahasa Indonesia",
      speakerMode: clean(form.speakerMode) || "Ada karakter yang bicara",
    },
  qualityGate: {
      sceneCountValid,
      sequentialScenes,
      promptsComplete,
      consistencyPresent: clean(output.consistency).length > 0,
      negativePresent: clean(output.negative).length > 0,
    },
  };
}
