import type { AnimationForm, AnimationScenePrompt, Output } from "./types";

export type AnimationHardeningIssue = {
  code: string;
  message: string;
  sceneNumber?: number;
};

export type AnimationHardeningReport = {
  ok: boolean;
  score: number;
  issues: AnimationHardeningIssue[];
};

const clean = (value: unknown) => String(value ?? "").trim();

const MIN_IMAGE_PROMPT = 180;
const MIN_VIDEO_PROMPT = 220;

const GENERIC_PATTERNS = [
  /create a cinematic scene/i,
  /sesuai kebutuhan cerita/i,
  /make it cinematic/i,
  /high quality/i,
  /beautiful animation/i,
  /good quality/i,
];

function hasMeaningfulPrompt(value: string, minimum: number): boolean {
  if (value.length < minimum) return false;
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.split(" ").length < 28) return false;
  return !GENERIC_PATTERNS.some((pattern) => pattern.test(normalized) && normalized.length < minimum + 120);
}

function hasContinuityLanguage(scene: AnimationScenePrompt): boolean {
  const text = `${scene.videoPrompt} ${scene.startState} ${scene.endState}`.toLowerCase();
  return /continu|previous|scene|start state|end state|berlanjut|sebelum|berakhir/.test(text);
}

function hasSpeakerSafety(form: AnimationForm, scene: AnimationScenePrompt): boolean {
  const mode = clean(form.speakerMode).toLowerCase();
  const text = scene.videoPrompt.toLowerCase();
  if (!mode || /none|tanpa|tidak ada/.test(mode)) {
    return !/lip[- ]?sync|dialogue|dialog|narration|narasi/.test(text) || /no dialogue|tanpa dialog|tidak ada dialog|silent/.test(text);
  }
  return /speaker|dialog|lip[- ]?sync|narrat|suara|voice/.test(text);
}

function hasAudioContinuity(form: AnimationForm, output: Output, scene: AnimationScenePrompt): boolean {
  const audio = `${clean(form.audio)} ${clean(output.sfx)} ${clean(scene.audioPrompt)} ${clean(scene.videoPrompt)}`.toLowerCase();
  if (!audio) return false;
  if (/bgm|music|musik/.test(audio)) {
    return /theme|motif|continu|same|identik|musik utama|master soundtrack/.test(audio);
  }
  return true;
}

export function hardenAnimationOutput(
  form: AnimationForm,
  output: Output
): AnimationHardeningReport {
  const issues: AnimationHardeningIssue[] = [];
  const scenes = Array.isArray(output.scenePrompts) ? output.scenePrompts : [];
  const requested = Math.max(1, Math.min(10, Number(form.scenes) || 1));

  if (scenes.length !== requested) {
    issues.push({ code: "SCENE_COUNT", message: `Scene ${scenes.length}/${requested}.` });
  }

  scenes.forEach((scene, index) => {
    const expected = index + 1;
    if (Number(scene.sceneNumber) !== expected) {
      issues.push({ code: "SCENE_ORDER", message: `Scene ${scene.sceneNumber} seharusnya ${expected}.`, sceneNumber: scene.sceneNumber });
    }
    if (!hasMeaningfulPrompt(clean(scene.imagePrompt), MIN_IMAGE_PROMPT)) {
      issues.push({ code: "IMAGE_PROMPT_WEAK", message: "Image prompt terlalu pendek/generik.", sceneNumber: scene.sceneNumber });
    }
    if (!hasMeaningfulPrompt(clean(scene.videoPrompt), MIN_VIDEO_PROMPT)) {
      issues.push({ code: "VIDEO_PROMPT_WEAK", message: "Video prompt terlalu pendek/generik.", sceneNumber: scene.sceneNumber });
    }
    if (!clean(scene.startState) || !clean(scene.endState)) {
      issues.push({ code: "STATE_MISSING", message: "Start/end state kosong.", sceneNumber: scene.sceneNumber });
    }
    if (!hasContinuityLanguage(scene)) {
      issues.push({ code: "CONTINUITY_WEAK", message: "Continuity scene tidak cukup eksplisit.", sceneNumber: scene.sceneNumber });
    }
    if (!hasSpeakerSafety(form, scene)) {
      issues.push({ code: "SPEAKER_LOCK_WEAK", message: "Speaker/dialogue lock tidak terdeteksi.", sceneNumber: scene.sceneNumber });
    }
    if (!hasAudioContinuity(form, output, scene)) {
      issues.push({ code: "AUDIO_CONTINUITY_WEAK", message: "Audio/BGM continuity tidak cukup eksplisit.", sceneNumber: scene.sceneNumber });
    }
  });

  if (!clean(output.consistency)) {
    issues.push({ code: "CONSISTENCY_MISSING", message: "Consistency lock kosong." });
  }
  if (!clean(output.negative)) {
    issues.push({ code: "NEGATIVE_MISSING", message: "Negative prompt kosong." });
  }
  if (!clean(output.character)) {
    issues.push({ code: "CHARACTER_MASTER_MISSING", message: "Character master kosong." });
  }

  const criticalCodes = new Set([
    "SCENE_COUNT",
    "SCENE_ORDER",
    "IMAGE_PROMPT_WEAK",
    "VIDEO_PROMPT_WEAK",
    "STATE_MISSING",
    "CONSISTENCY_MISSING",
    "NEGATIVE_MISSING",
    "CHARACTER_MASTER_MISSING",
  ]);
  const critical = issues.filter((issue) => criticalCodes.has(issue.code)).length;
  const score = Math.max(0, Math.round(100 - critical * 12 - (issues.length - critical) * 5));

  return { ok: issues.length === 0, score, issues };
}
