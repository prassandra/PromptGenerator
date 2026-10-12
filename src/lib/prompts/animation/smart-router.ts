import type { AnimationForm, Output } from "./types";
import { generateAnimationPrompts } from "./generator";
import { buildAnimationLocalTemplate } from "./local-master-template";
import { hardenAnimationOutput } from "./output-hardening";

export type AnimationRouteReason =
  | "AI_DISABLED"
  | "AI_SUCCESS"
  | "AI_ERROR"
  | "AI_QUALITY_GATE_FAILED"
  | "AI_QUOTA_OR_RATE_LIMIT";

export type AnimationRouteResult = {
  engine: "GEMINI_ENHANCED" | "LOCAL_FALLBACK";
  model: string;
  reason: AnimationRouteReason;
  output: Output;
  fallback: boolean;
};

const clean = (value: unknown) => String(value ?? "").trim();

export function validateAnimationOutput(
  form: AnimationForm,
  output: Output
): { ok: boolean; reason?: string } {
  const requested = Math.max(1, Math.min(10, Number(form.scenes) || 1));
  const scenes = Array.isArray(output.scenePrompts) ? output.scenePrompts : [];

  if (scenes.length !== requested) {
    return { ok: false, reason: `Jumlah scene ${scenes.length}/${requested}.` };
  }

  for (let i = 0; i < scenes.length; i += 1) {
    const scene = scenes[i];
    if (Number(scene.sceneNumber) !== i + 1) {
      return { ok: false, reason: "Nomor scene tidak berurutan." };
    }
    if (!clean(scene.imagePrompt) || !clean(scene.videoPrompt)) {
      return { ok: false, reason: `Scene ${i + 1} memiliki prompt kosong.` };
    }
  }

  if (!clean(output.consistency)) {
    return { ok: false, reason: "Consistency lock kosong." };
  }

  if (!clean(output.negative)) {
    return { ok: false, reason: "Negative prompt kosong." };
  }

  const hardening = hardenAnimationOutput(form, output);
  if (!hardening.ok) {
    const first = hardening.issues[0];
    return {
      ok: false,
      reason: `Production hardening gagal (${hardening.score}/100): ${first?.message || "output tidak memenuhi standar."}`,
    };
  }

  return { ok: true };
}

export function buildLocalFallback(
  form: AnimationForm,
  reason: AnimationRouteReason
): AnimationRouteResult {
  const output = generateAnimationPrompts(form);
  output.localTemplate = buildAnimationLocalTemplate(form, output);

  return {
    engine: "LOCAL_FALLBACK",
    model: "driacom-local-animation-v1",
    reason,
    output,
    fallback: true,
  };
}
