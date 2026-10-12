import type { AnimationForm, AnimationScenePrompt, Output } from "./types";

export type ContinuityIssue = {
  code: string;
  message: string;
  sceneNumber?: number;
};

export type ContinuityReport = {
  ok: boolean;
  score: number;
  issues: ContinuityIssue[];
};

const clean = (value: unknown) => String(value ?? "").replace(/\s+/g, " ").trim();

function tokens(value: string): Set<string> {
  return new Set(
    value
      .toLowerCase()
      .replace(/[^a-z0-9à-ÿ\s-]/gi, " ")
      .split(/\s+/)
      .filter((word) => word.length >= 5)
  );
}

function overlap(a: string, b: string): number {
  const left = tokens(a);
  const right = tokens(b);
  if (!left.size || !right.size) return 0;
  let common = 0;
  left.forEach((word) => {
    if (right.has(word)) common += 1;
  });
  return common / Math.max(1, Math.min(left.size, right.size));
}

function hasHandoff(scene: AnimationScenePrompt, next?: AnimationScenePrompt): boolean {
  if (!next) return true;
  const endState = clean(scene.endState);
  const nextStart = clean(next.startState);
  if (!endState || !nextStart) return false;

  const handoffText = `${scene.videoPrompt} ${next.videoPrompt} ${nextStart}`.toLowerCase();
  const explicit = /(end state|start state|scene sebelumnya|scene sebelumnya berakhir|berlanjut|continuity|melanjutkan|langsung dari|sehingga scene berikutnya)/i.test(handoffText);
  const shared = overlap(endState, nextStart);
  return explicit || shared >= 0.16;
}

function hasStateChange(scene: AnimationScenePrompt): boolean {
  const start = clean(scene.startState);
  const end = clean(scene.endState);
  if (!start || !end) return false;
  if (start.toLowerCase() === end.toLowerCase()) return false;
  return overlap(start, end) < 0.98 || /berubah|menjadi|setelah|akhir|kemudian|bergeser|terjadi|jatuh|bangkit|terbuka|tertutup/i.test(end);
}

function hasCausalLanguage(scene: AnimationScenePrompt): boolean {
  const text = `${scene.purpose} ${scene.objective} ${scene.action} ${scene.videoPrompt}`.toLowerCase();
  return /(karena|sehingga|membuat|menyebabkan|akibat|ketika|setelah|sebelum|lalu|kemudian|therefore|because|causes|after|before|trigger|result)/i.test(text);
}

function hasStableWorld(scene: AnimationScenePrompt): boolean {
  const text = `${scene.imagePrompt} ${scene.videoPrompt}`.toLowerCase();
  return /(continuity|consistent|same environment|same location|world|environment|lingkungan|lokasi|tetap|konsisten)/i.test(text);
}

export function analyzeAnimationContinuity(
  form: AnimationForm,
  output: Output
): ContinuityReport {
  const issues: ContinuityIssue[] = [];
  const scenes = Array.isArray(output.scenePrompts)
    ? [...output.scenePrompts].sort((a, b) => a.sceneNumber - b.sceneNumber)
    : [];

  if (scenes.length <= 1) {
    return { ok: scenes.length === 1, score: scenes.length === 1 ? 100 : 0, issues: scenes.length ? [] : [{ code: "NO_SCENES", message: "Tidak ada scene untuk dianalisis." }] };
  }

  scenes.forEach((scene, index) => {
    const next = scenes[index + 1];

    if (!hasStateChange(scene)) {
      issues.push({
        code: "NO_MEANINGFUL_STATE_CHANGE",
        message: "Start state dan end state terlalu identik; perkembangan scene belum terlihat.",
        sceneNumber: scene.sceneNumber,
      });
    }

    if (!hasCausalLanguage(scene)) {
      issues.push({
        code: "CAUSALITY_WEAK",
        message: "Hubungan sebab-akibat pada scene kurang eksplisit.",
        sceneNumber: scene.sceneNumber,
      });
    }

    if (!hasStableWorld(scene)) {
      issues.push({
        code: "WORLD_CONTINUITY_WEAK",
        message: "Prompt belum cukup eksplisit mengunci kesinambungan dunia/lingkungan.",
        sceneNumber: scene.sceneNumber,
      });
    }

    if (next && !hasHandoff(scene, next)) {
      issues.push({
        code: "STATE_HANDOFF_WEAK",
        message: `End state Scene ${scene.sceneNumber} tidak cukup terhubung ke start state Scene ${next.sceneNumber}.`,
        sceneNumber: scene.sceneNumber,
      });
    }
  });

  const critical = issues.filter((issue) => issue.code === "STATE_HANDOFF_WEAK").length;
  const score = Math.max(0, Math.round(100 - critical * 18 - (issues.length - critical) * 7));

  return {
    ok: issues.length === 0,
    score,
    issues,
  };
}
