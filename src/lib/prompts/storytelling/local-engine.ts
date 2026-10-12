import type {
  StoryCharacter,
  StoryScene,
  StoryBlueprint,
  StorytellingForm,
} from "./types";
import { LOCAL_QUALITY_PARITY_RULES } from "@/lib/prompts/local-quality-parity";
import { STORYBOARD_EXECUTION_RULES } from "@/lib/prompts/storyboard-system";

const clean = (value: unknown) => String(value ?? "").trim();

const sceneCount = (form: StorytellingForm) => {
  const n = Number(form.scenes);
  if (!Number.isFinite(n)) return 4;
  return Math.max(1, Math.min(10, Math.floor(n)));
};

function characterCount(form: StorytellingForm) {
  const raw = clean(form.characterCount);
  if (!raw || /^otomatis$/i.test(raw)) return 1;
  const n = Number(raw);
  return Number.isFinite(n) ? Math.max(1, Math.min(6, Math.floor(n))) : 1;
}

function style(form: StorytellingForm) {
  return clean(form.visualStyle) || "Realistis Sinematik";
}

function makeCharacters(form: StorytellingForm): StoryCharacter[] {
  const count = characterCount(form);
  const baseNames = ["Raka", "Maya", "Dimas", "Sari", "Bima", "Naya"];

  return Array.from({ length: count }, (_, index) => {
    const name = baseNames[index] || `Character ${index + 1}`;
    const role = index === 0 ? "Protagonist" : "Supporting Character";
    const age = index === 0 ? "11 tahun" : "young adult";
    const appearance =
      index === 0
        ? "natural Indonesian child face, expressive dark brown eyes, warm brown skin, small slim build"
        : "natural Indonesian face, dark brown eyes, realistic body proportions";
    const wardrobe =
      index === 0
        ? "slightly loose cream shirt, simple long pants, natural rural clothing"
        : "simple clothing appropriate to the story environment";

    return {
      id: `CHAR-${String(index + 1).padStart(2, "0")}`,
      name,
      role,
      age,
      gender: index === 0 ? "Male" : "As required by the story",
      appearance,
      personality:
        index === 0
          ? "curious, calm, brave but not superhero-like"
          : "natural and supportive of the conflict progression",
      goal: index === 0 ? clean(form.idea) : "support the main conflict progression",
      secret: "",
      relationship: index === 0 ? "story center" : `connected to ${baseNames[0]}`,
      visualSignature: `${appearance}; ${wardrobe}; gaya visual ${style(form)}`,
      masterPrompt:
        `${name}, ${age}, ${appearance}, ${wardrobe}. ` +
        `Maintain the same face, hair, age, body proportions, clothing, colors, and visual traits in every scene. ` +
        `Style: ${style(form)}. Aspect ratio: ${clean(form.ratio) || "9:16"}.`,
    };
  });
}

function sceneText(
  form: StorytellingForm,
  characters: StoryCharacter[],
  index: number,
  total: number
): StoryScene {
  const protagonist = characters[0];
  const duration = clean(form.duration) || "8 detik";
  const ratio = clean(form.ratio) || "9:16";
  const language = clean(form.language) || "Bahasa Indonesia";
  const genre = clean(form.genre) || "Drama Viral";
  const tone = clean(form.tone) || "Emosional";
  const idea = clean(form.idea);
  const phases = [
    ["Hook", "a trigger appears and changes the initial state", "curiosity increases"],
    ["Trigger", "the protagonist makes the first decision", "the risk becomes visible"],
    ["Escalation", "the conflict becomes harder and choices have consequences", "pressure increases"],
    ["Climax", "the protagonist faces the core conflict", "emotion reaches its peak"],
    ["Payoff", "the consequence of the decision becomes visible", "the story meaning becomes clear"],
  ];
  const phase = phases[Math.min(index, phases.length - 1)];
  const prev = index === 0
    ? "Initial state before the conflict."
    : `The ending state of Scene ${index} becomes this scene's starting point.`;

  const narrationEnabled = Boolean(form.narrator);
  const dialogueEnabled = Boolean(form.dialogue);
  const narration = narrationEnabled
    ? `Short narration in ${language} explaining the scene change without repeating the visuals.`
    : "";
  const dialogue = dialogueEnabled
    ? `${protagonist.name}: a short line in ${language} that matches the scene state and emotion.`
    : "";

  const identity = protagonist.masterPrompt || "";
  const seconds = Math.max(1, Number(duration.match(/\d+(?:\.\d+)?/)?.[0] || 8)) / 4;
  const imagePrompt =
    `CREATE ONE COMPLETE STORYBOARD SHEET — SCENE ${index + 1} — ${ratio}. ` +
    `This is a visual planning reference only. Create exactly 4 sequential internal panels: Shot 1, Shot 2, Shot 3, Shot 4. ` +
    `Each panel represents ${seconds} seconds. ${identity} ` +
    `Scene story: ${idea}. Beat: ${phase[0]}. ${phase[1]}. ${phase[2]}. ` +
    `Shot 1: establish setup and hook. Shot 2: trigger and action. Shot 3: reaction, escalation and strongest visual information. Shot 4: payoff and ending state. ` +
    `Include complete action, expression/state, camera/framing, composition, lighting, props, environment and continuity in every panel. ` +
    `Do not render final promotional/motion-text copy as text in the storyboard. Do not create four separate images. Maintain the same production universe, character identity, wardrobe, props and world continuity. ${LOCAL_QUALITY_PARITY_RULES}`;

  const narrationText = narrationEnabled
    ? `Narration: ${narration}`
    : `Narration: No narration — narration is disabled for this project.`;
  const dialogueText = dialogueEnabled
    ? `Dialogue: ${dialogue}`
    : `Dialogue: No character dialogue — dialogue is disabled for this project.`;
  const videoPrompt =
    `SCENE ${index + 1} — VIDEO PROMPT\n\n` +
    `Duration: ${duration}\n` +
    `4 internal shots\n` +
    `${seconds} seconds per shot.\n\n` +
    `IMPORTANT:\n` +
    `The storyboard sheet is a visual planning reference only.\n` +
    `Never display the storyboard sheet.\n` +
    `Never use the storyboard sheet as the opening frame.\n\n` +
    `BEGIN DIRECTLY WITH A FULL-FRAME SHOT 1.\n\n` +
    `SHOT 1\n0–${seconds} sec\n` +
    `Start from the real scene described by the storyboard. Establish the hook/setup, character state, environment and camera. ${phase[1]}\n\n` +
    `SHOT 2\n${seconds}–${seconds * 2} sec\n` +
    `Continue directly from Shot 1. Trigger the next action and preserve screen direction, identity, wardrobe, props, lighting and environment.\n\n` +
    `SHOT 3\n${seconds * 2}–${seconds * 3} sec\n` +
    `Continue directly from Shot 2. Show reaction, escalation and the strongest emotional/information beat.\n\n` +
    `SHOT 4\n${seconds * 3}–${Number(duration.match(/\d+(?:\.\d+)?/)?.[0] || 8)} sec\n` +
    `Continue directly from Shot 3. Deliver payoff and a clean ending state that connects logically to the next scene.\n\n` +
    `NARRATION:\n${narrationText}\n\n` +
    `DIALOGUE:\n${dialogueText}\n\n` +
    `AUDIO:\n` +
    `Follow the selected audio mode: ${clean(form.audio)}. Keep BGM, ambience and SFX consistent with the story world and synchronize them to the four internal beats.\n\n` +
    `CHARACTER CONSISTENCY:\nMaintain exact identity, face, hair, body proportions, wardrobe, accessories and voice identity. Do not redesign characters.\n\n` +
    `CONTINUITY:\nShot 1 establishes the state; Shot 2 continues it; Shot 3 continues the physical and emotional state; Shot 4 resolves it without resetting the environment, lighting, props or character identity.\n\n` +
    `NEGATIVE PROMPT:\nDo not display storyboard sheet, do not start with storyboard panels, no slideshow, no frozen frames, no identity drift, no wardrobe change, no prop duplication, no environment jump, no lighting jump, no malformed anatomy, no extra limbs, no random text, no watermark, no unwanted camera reset, no excessive effects, no flicker, no jitter. ${LOCAL_QUALITY_PARITY_RULES}\n\n${STORYBOARD_EXECUTION_RULES}`;

  return {
    sceneNumber: index + 1,
    title: phase[0],
    purpose: `${phase[0]} to develop the idea into a clear cause-and-effect progression.`,
    location: "Main story environment based on the user idea",
    time: "Consistent with the previous scene",
    characters: characters.map((c) => c.id),
    startState: prev,
    trigger: phase[1],
    intention: `Advance the ${genre} story with a ${tone} tone.`,
    action: `${protagonist.name} performs a concrete action that changes the state.`,
    reaction: phase[2],
    escalation: `Risk or information changes in scene ${index + 1}.`,
    dialogue,
    narration,
    emotionalBeat: `${tone}: ${phase[2]}`,
    visualBeat: "The visual composition must make the beat change immediately readable.",
    endState: index === total - 1
      ? "The main conflict is resolved and the final consequence is visible."
      : `A new state that forces Scene ${index + 2}.`,
    continuity: "Maintain character identity, wardrobe, props, location, time, lighting direction, and screen direction.",
    storyboardImagePrompt: imagePrompt,
    imagePrompt,
    videoPrompt,
  };
}

export function generateLocalStorytelling(form: StorytellingForm): StoryBlueprint {
  const total = sceneCount(form);
  const characters = makeCharacters(form);
  const genre = clean(form.genre) || "Drama Viral";
  const tone = clean(form.tone) || "Emosional";
  const idea = clean(form.idea);

  const scenes = Array.from(
    { length: total },
    (_, index) => sceneText(form, characters, index, total)
  );

  return {
    title: idea.split(/[.!?]/)[0].slice(0, 80) || "Driacom Story",
    logline: `${idea || "A short-form story"} with escalating conflict and a clear payoff.`,
    thumbnailPrompt:
      `Cinematic thumbnail ${style(form)}, ${clean(form.ratio) || "9:16"}, ` +
      `featuring ${characters[0].name} as the main focus, with an expression matching the ${genre} conflict, ` +
      `komposisi mobile-first, pencahayaan dramatis namun realistis, tanpa mengubah identitas karakter.`,
    hook: scenes[0]?.purpose || "Story hook",
    genre,
    tone,
    theme: clean(form.theme) || "The consequence of a decision.",
    premise: idea,
    protagonistGoal: characters[0]?.goal || idea,
    centralConflict: "The protagonist faces a problem that forces a change in decisions.",
    stakes: "Risk increases if the protagonist fails.",
    antagonistForce: "Circumstances and consequences of the main conflict.",
    turningPoint: scenes[Math.min(1, total - 1)]?.action || "",
    midpoint: scenes[Math.floor(total / 2)]?.escalation || "",
    climax: scenes[total - 1]?.action || "",
    payoff: scenes[total - 1]?.endState || "",
    ending: clean(form.ending) || "Satisfying with clear consequences",
    emotionalArc: scenes.map((s) => s.emotionalBeat),
    characters,
    world: `The story world follows the user idea with ${style(form)} and aspect ratio ${clean(form.ratio) || "9:16"}.`,
    storyArc: scenes.map((s) => s.title),
    scenes,
  };
}
