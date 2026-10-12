import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { getMenuAIConfig } from "@/lib/ai/menu-projects";

import {
  generateAnimationPrompts,
  getWorld,
} from "@/lib/prompts/animation/generator";
import {
  DEFAULT_GEMINI_TEXT_MODEL,
  generateWithGeminiResilient,
} from "@/lib/gemini/models";
import { generateCharacterPrompt } from "@/lib/prompts/animation/character-system";
import { buildAnimationLocalTemplate } from "@/lib/prompts/animation/local-master-template";
import {
  buildLocalFallback,
  validateAnimationOutput,
} from "@/lib/prompts/animation/smart-router";
import { hardenAnimationOutput } from "@/lib/prompts/animation/output-hardening";
import { analyzeAnimationContinuity } from "@/lib/prompts/animation/continuity-intelligence";
import { reservePromptGeneration, releasePromptGeneration } from "@/lib/usage";

import type {
  AnimationForm,
  AnimationCharacter,
  AnimationScenePrompt,
  AnimationDialogueScript,
  Output,
} from "@/lib/prompts/animation/types";

const ANIMATION_AI_CONFIG = getMenuAIConfig("animation");
const REQUESTED_MODEL =
  ANIMATION_AI_CONFIG.model || DEFAULT_GEMINI_TEXT_MODEL;
const ANIMATION_API_KEY = ANIMATION_AI_CONFIG.apiKey;

const characterRegistrySchema = {
  type: "object",
  properties: {
    characters: {
      type: "array",
      description: "Permanent concrete character registry. One object per character.",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          role: { type: "string" },
          description: { type: "string" },
          age: { type: "string" },
          gender: { type: "string" },
          appearance: { type: "string" },
          face: { type: "string" },
          hair: { type: "string" },
          skin: { type: "string" },
          body: { type: "string" },
          wardrobe: { type: "string" },
          accessories: { type: "string" },
          personality: { type: "string" },
          expression: { type: "string" },
          pose: { type: "string" },
          visualSignature: { type: "string" },
          color: { type: "string" },
          motion: { type: "string" },
          voice: { type: "string" },
        },
        required: [
          "id", "name", "role", "description", "age", "gender",
          "appearance", "face", "hair", "skin", "body", "wardrobe",
          "accessories", "personality", "expression", "pose",
          "visualSignature", "color", "motion", "voice"
        ]
      }
    }
  },
  required: ["characters"]
};

const animationSchema = {
  type: "object",
  properties: {
    characterMaster: {
      type: "string",
      description: "Master Character Sheet production-grade. Must contain concrete Character DNA for every character, not generic placeholders. Each character is individually referenceable and remains immutable across scenes."
    },
    thumbnailTitle: {
      type: "string",
      description: "Judul thumbnail singkat, kuat, mudah dibaca, dan merepresentasikan konflik/keajaiban utama cerita."
    },
    thumbnailPrompt: {
      type: "string",
      description: "Prompt thumbnail sinematik yang merepresentasikan cerita dan karakter utama."
    },
    scenes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          sceneNumber: { type: "integer" },
          imagePrompt: {
            type: "string",
            description: "Prompt START FRAME yang sangat detail, konsisten dengan Master Character dan scene sebelumnya."
          },
          videoPrompt: {
            type: "string",
            description: "Prompt video lengkap untuk scene. Harus memuat action, acting, camera, motion, dialogue/narration, voice direction, timing, BGM, SFX, ambience, continuity dan negative constraints."
          }
        },
        required: ["sceneNumber", "imagePrompt", "videoPrompt"]
      }
    }
  },
  required: ["characterMaster", "thumbnailTitle", "thumbnailPrompt", "scenes"]
};

function clean(value: unknown): string {
  return String(value ?? "").trim();
}

/**
 * Gemini JSON can occasionally arrive wrapped in markdown fences or with
 * harmless text around the JSON object. Normalize that before JSON.parse so
 * the UI never fails with the unhelpful "Unexpected end of JSON input".
 */
function parseGeminiJson<T>(raw: unknown, label: string): T {
  const source = clean(raw);

  if (!source) {
    throw new Error(`${label}: Gemini mengembalikan output kosong.`);
  }

  const withoutFence = source
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  try {
    return JSON.parse(withoutFence) as T;
  } catch {
    const first = withoutFence.indexOf("{");
    const last = withoutFence.lastIndexOf("}");

    if (first >= 0 && last > first) {
      const candidate = withoutFence.slice(first, last + 1);

      try {
        return JSON.parse(candidate) as T;
      } catch {
        // Fall through to a useful diagnostic below.
      }
    }

    const preview = withoutFence.slice(0, 700);
    throw new Error(
      `${label}: format JSON dari Gemini tidak valid atau terpotong. ` +
      `Awal respons: ${preview}`
    );
  }
}


function readGeminiText(response: any, label: string): string {
  const direct = clean(response?.text);
  if (direct) return direct;

  const parts = Array.isArray(response?.candidates)
    ? response.candidates.flatMap((candidate: any) =>
        Array.isArray(candidate?.content?.parts)
          ? candidate.content.parts
              .map((part: any) => clean(part?.text))
              .filter(Boolean)
          : []
      )
    : [];

  const joined = parts.join("\n").trim();
  if (joined) return joined;

  const finishReasons = Array.isArray(response?.candidates)
    ? response.candidates
        .map((candidate: any) => clean(candidate?.finishReason))
        .filter(Boolean)
        .join(", ")
    : "";

  const promptFeedback = clean(
    response?.promptFeedback?.blockReason ||
    response?.promptFeedback?.blockReasonMessage
  );

  const details = [
    finishReasons ? `finishReason=${finishReasons}` : "",
    promptFeedback ? `promptFeedback=${promptFeedback}` : "",
  ].filter(Boolean).join("; ");

  console.error("Driacom Gemini Empty Response:", {
    label,
    finishReasons,
    promptFeedback,
    responseKeys: response ? Object.keys(response) : [],
  });

  throw new Error(
    `${label}: Gemini tidak mengembalikan teks. ${
      details || "Respons Gemini kosong atau tidak berisi kandidat teks."
    }`
  );
}

function buildPrompt(
  form: AnimationForm,
  base: Output,
  characterRegistry: string,
  sceneStart = 1,
  sceneEnd = Math.max(1, Math.min(10, Number(form.scenes) || 1)),
  continuityContext = ""
): string {
  const scenes = Math.max(1, sceneEnd - sceneStart + 1);
  const duration = clean(form.duration) || "8 detik";
  const speakerMode = clean(form.speakerMode) || "Ada karakter yang bicara";
  const language = clean(form.language) || "Bahasa Indonesia";

  return `
Kamu adalah Driacom Animation Prompt Director — bukan sekadar prompt writer.

MISI:
Ubah konsep user menjadi PRODUCTION-GRADE ANIMATION PROMPTS yang terasa seperti
dirancang oleh storyboard artist, animation director, cinematographer, sound designer,
dan continuity supervisor dalam satu sistem.

Driacom tidak menghasilkan gambar/video. Driacom menghasilkan prompt produksi yang
siap dipakai pada workflow image-to-video.

==================================================
PRODUCTION TARGET
==================================================

CONCEPT:
${clean(form.concept)}

GENRE:
${clean(form.genre)}

VISUAL STYLE:
${clean(form.animationStyle) || "Pixar Inspired 3D"}

CHARACTER COUNT:
${Array.isArray(form.characters) ? form.characters.length : 1}

SCENE COUNT:
${scenes}

SCENE RANGE:
${sceneStart} through ${sceneEnd}

DURATION PER SCENE:
${duration}

RATIO:
${clean(form.ratio) || "9:16"}

LANGUAGE:
${language}

AUDIO MODE:
${clean(form.audio) || "Narasi + BGM + SFX"}

MASTER SOUNDTRACK POLICY:
If the selected audio mode includes BGM, create ONE MASTER MUSIC DNA for the entire story.
All scenes must inherit the same musical identity. Scene-level changes may only alter
intensity, layering, dynamics, tension, melodic prominence, or instrumentation emphasis.

BGM CONTINUITY:
- Same musical theme / motif across all scenes.
- Same core genre and sonic palette.
- No unrelated song per scene.
- No hard musical restart at every scene.
- Scene transitions should feel like one continuous soundtrack.
- Quiet scenes should reduce the same theme rather than replace it.
- Tense scenes should intensify the same theme rather than switch genres.
- SFX and ambience are allowed to change per scene.

SPEAKER MODE:
${speakerMode}

REFERENCE LINK:
${clean(form.referenceLink) || "Tidak ada"}

REFERENCE STORY:
${clean(form.referenceStory) || "Tidak ada"}

HIDDEN STORY DIRECTOR BLUEPRINT:
${form.storyBlueprint ? JSON.stringify(form.storyBlueprint, null, 2) : "Tidak ada blueprint tersembunyi; infer a coherent story spine."}

==================================================
DRIACOM MASTER CONTEXT
==================================================

CHARACTER SYSTEM:
${clean(base.character)}

IMMUTABLE CHARACTER REGISTRY (SOURCE OF TRUTH):
${characterRegistry}

WORLD / CONSISTENCY SYSTEM:
${clean(base.consistency)}

PREVIOUS GENERATED SCENE CONTINUITY:
${continuityContext || "This is the first generation batch. No previous generated scene exists."}

MASTER STORYBOARD:
${clean(base.storyboard)}

VOICE MASTER:
${clean(base.voice)}

SOUND DESIGN MASTER:
${clean(base.sfx)}

NEGATIVE MASTER:
${clean(base.negative)}

The local Driacom context is a production constraint and quality floor.
You may improve it creatively, but you must never violate character identity,
world continuity, selected speaker mode, duration, ratio, or the user's core story.

==================================================
PHASE 0 — CHARACTER IDENTITY LOCK
==================================================

The IMMUTABLE CHARACTER REGISTRY above was extracted before scene generation.
Treat it as production data, not suggestions.

Rules:
- Use the exact CHARACTER ID and NAME from the registry.
- Never rename a character.
- Never merge two characters.
- Never invent a replacement character.
- Never change age, gender/presentation, face, hair, body proportions, wardrobe, accessories,
  color palette, motion identity, or voice identity.
- Missing details were intentionally resolved once during extraction. Reuse those exact choices.
- Every scene prompt must reference the relevant CHARACTER ID.
- If a character appears from a new camera angle, reconstruct the same physical character, not a redesign.

==================================================
PHASE 1 — STORY ARCHITECTURE
==================================================

Before writing the final prompts, use the HIDDEN STORY DIRECTOR BLUEPRINT when present and mentally refine it into a causal story spine. If no blueprint exists, infer one from the concept. The blueprint is story guidance, not a rigid scene template.

For EVERY scene determine:

A. START STATE
Exact physical and emotional condition inherited from the previous scene.

B. TRIGGER
The concrete event that makes this scene necessary.

C. IMMEDIATE OBJECTIVE
What the protagonist is trying to accomplish right now.

D. ACTION
What the protagonist physically does.

E. REACTION
How the character/world visibly responds.

F. ESCALATION
What meaningful story variable changes:
risk, information, goal, relationship, resource, position, environment, or time pressure.

G. PAYOFF / RESULT
What concrete outcome happens because of the action.

H. END STATE
Exact physical and emotional condition at the final frame.

I. CAUSAL HANDOFF
Why the next scene must begin because of this scene's ending.

MANDATORY:
Every scene must change at least one meaningful story variable.
Every major action needs a visible cause.
Every major reaction must respond to something that happened.
The ending of Scene N must create the reason for Scene N+1.

Do not create a sequence of disconnected "pretty shots".

==================================================
PHASE 2 — CHARACTER PERFORMANCE
==================================================

Treat the Master Character Sheet as immutable identity.

CHARACTER DNA LOCK:
For every character, preserve the concrete identity established in the Character Master:
- exact name and CHARACTER ID
- age and gender/presentation
- face shape and facial feature geometry
- eye color/shape/spacing
- nose, lips, jaw, ears and distinctive marks
- hairstyle, hair length, texture and silhouette
- skin/material tone and surface language
- height, body build, shoulder width and limb proportions
- wardrobe construction, colors, materials and wear
- accessory identity and exact attachment points
- color palette and silhouette
- personality and expression behavior
- motion/body mechanics
- voice identity and speaking style when dialogue is used

Never replace vague identity with a newly invented design in a later scene.
A scene may change expression, pose, action, camera, lighting or emotional state,
but must not rewrite Character DNA.

For each scene:
- preserve face, head shape, age, body proportions, hairstyle, wardrobe,
  accessories, colors, silhouette, material language, and visual signature
- specify intentional acting rather than generic "moves naturally"
- describe gaze direction, weight shift, hand/object interaction, posture,
  anticipation, follow-through, and emotional transition when relevant
- never invent a new character merely to solve a story beat
- if multiple characters exist, preserve their distinct identities and spatial relationships

IMPORTANT:
Emotion must be visible through behavior, not only adjectives.

Weak:
"the character looks scared"

Strong:
"the character freezes mid-step, shoulders tighten, eyes lock on the moving shadow,
right hand slowly pulls the lantern closer to the chest"

==================================================
PHASE 3 — CINEMATOGRAPHY
==================================================

Each imagePrompt is an EXACT START FRAME.

Specify:
- shot size
- camera height
- camera angle
- subject placement
- screen direction
- focal subject
- depth layers
- lens feel
- focus priority
- lighting direction
- motivated light source
- atmosphere
- composition

Each videoPrompt must continue from that exact frame.

Camera movement must have narrative motivation.
Do not add camera movement merely because it sounds cinematic.

DYNAMIC DIRECTOR RULE:
Choose the shot from the CURRENT DRAMATIC BEAT, not from a fixed genre sequence.
Genre is a visual language constraint, not a shot list.
The same genre may use completely different camera language across scenes when the story function changes.
Before selecting the shot, identify: what the audience should know, what should remain hidden, what emotion should dominate, and what physical action/reaction is occurring.
Then choose angle, height, distance, framing, lens feel, focus, occlusion, and movement that best serves those needs.
Do not force camera variety when repetition is required for continuity or emphasis.
Do not force a special camera move if a stable shot communicates the beat better.

==================================================
PHASE 4 — IMAGE → VIDEO CONTINUITY
==================================================

Image Prompt = START FRAME.
Video Prompt = MOTION FROM THAT START FRAME.

The first visible video moment must match the image prompt.

Preserve:
- character identity
- pose and body orientation
- wardrobe
- prop placement
- environment
- lighting
- spatial relationships

At the end of every video prompt, define a stable END STATE that becomes
the logical START STATE of the next scene.

No teleportation.
No unexplained object changes.
No wardrobe reset.
No environment reset.
No time-of-day jump without narrative cause.

==================================================
PHASE 5 — INTERNAL BEAT TIMELINE
==================================================

Every videoPrompt must translate the story into a short causal timeline:

START → TRIGGER → ACTION → REACTION → ESCALATION → PAYOFF → END STATE

Use the selected scene duration (${duration}) intelligently.

Do not overload a short scene with too many separate actions.
Prioritize one dominant action and one meaningful consequence.

For very short scenes:
- one clear action
- one clear reaction
- one clear result

For longer scenes:
- allow anticipation, action, reaction, escalation, and payoff to breathe naturally.

==================================================
PHASE 6 — DIALOGUE / NARRATION
==================================================

Speaker mode:
${speakerMode}

Language:
${language}

Rules:
- Dialogue/narration must directly support the visible story beat.
- No filler dialogue.
- No exposition that the viewer can already see.
- Keep spoken lines short enough for ${duration}.
- Character dialogue must match established personality.
- Narration must add useful story information rather than duplicate visuals.
- If speaker mode disables a speaker type, absolutely do not create it.
- If a character speaks, specify natural lip-sync ONLY for the explicitly named speaker.
- During narrator speech, ALL visible characters must keep their mouths closed and must not lip-sync.
- Narration is an OFF-SCREEN voice and must never be visually transferred to a character.
- In mixed narration + dialogue scenes, narrator segments keep all characters silent; character
  dialogue segments lip-sync only the named speaker.
- Never infer a speaker from camera focus, proximity, gaze, or visual prominence.
- Never invent additional speakers.
- LANGUAGE CONTRACT: all production prompt structure, section labels, camera directions, visual descriptions, continuity rules, technical instructions, and negative prompts MUST be written in English.
- Only language-dependent spoken content may use the selected language (${language}): character dialogue, narration, voice-over wording, and explicitly requested spoken/script text.
- If the selected language is Indonesian, spoken content must be natural Indonesian. If English, spoken content must be natural English. Keep all other prompt structure in English.

Audio belongs inside videoPrompt.

==================================================
PHASE 7 — SOUND DESIGN + MASTER MUSIC CONTINUITY
==================================================

Treat audio as three layers:

1. MASTER BGM
One continuous musical identity across the whole story.
The soundtrack is a STORY UNIFIER.

2. SFX
Scene-specific physical events: footsteps, impacts, object movement, environmental
events, creature sounds, transitions, etc.

3. AMBIENCE
Scene-specific environmental bed: forest, city, room tone, wind, rain, crowd, etc.

MASTER BGM RULE:
If BGM is enabled, establish the musical DNA once and preserve it across ALL scenes.

Each scene may change:
- intensity
- layering
- dynamics
- harmonic tension
- rhythmic activity
- melodic prominence
- brief rests

Each scene must NOT change:
- core musical identity
- overall genre
- main motif
- sonic palette without narrative justification

The end of Scene N's music must be a natural continuation point for Scene N+1.

Synchronize:
- voice
- BGM
- SFX
- ambience

with visible events.

Examples of useful timing:
- footsteps begin as the character moves
- object impact lands exactly with contact
- musical tension rises with escalation
- ambience changes only when the environment visibly changes

Avoid unrelated sound effects and sudden volume jumps.

==================================================
PHASE 8 — PROMPT QUALITY STANDARD
==================================================

Every final prompt must be:
- specific
- visual
- actionable
- physically believable
- cinematic
- production-ready
- consistent with previous scenes

BAN GENERIC LANGUAGE:
Do not rely on phrases such as:
"make it cinematic",
"make it dramatic",
"move naturally",
"advance the story",
"add emotion",
"beautiful lighting",
"dynamic camera",
unless immediately followed by concrete instructions explaining HOW.

Do not use placeholders.
Do not use bracket placeholders.
Do not output markdown.
Do not output commentary outside JSON.

==================================================
OUTPUT CONTRACT
==================================================

Return ONLY valid JSON matching the supplied response schema.

characterMaster:
Repeat the immutable Character Registry as concrete prose only if needed by the schema.
Do not invent or alter any identity. Driacom will generate the final individual turnaround prompts locally from the locked registry.

thumbnailTitle:
3–8 words, highly readable and curiosity-driven.

thumbnailPrompt:
A strong hero composition that belongs to the exact same visual universe.

scenes:
Exactly ${scenes} objects, numbered 1 through ${scenes}.

Each scene has ONLY:
1. sceneNumber
2. imagePrompt
3. videoPrompt

The beat architecture, continuity ledger, acting direction, cinematography,
audio timing, dialogue, and negative constraints must be written INSIDE those prompts.

==================================================
FINAL SELF-AUDIT BEFORE JSON
==================================================

Mentally verify:
1. Scene count is exactly ${scenes} for this generation batch.
2. Scene ${sceneStart} has a strong visual hook or a clear continuation from the previous batch.
3. Every scene has a distinct objective.
4. Every scene contains a causal internal beat.
5. No scene repeats the same dramatic function.
6. Every scene changes story state.
7. Every scene ends in a usable continuity state.
8. Scene N starts from Scene N-1's consequence.
9. ImagePrompt is a true START FRAME, not a summary.
10. VideoPrompt starts from that exact frame.
11. Character identity never drifts.
12. Props and environment remain physically continuous.
13. Dialogue fits ${duration}.
14. Audio is synchronized with visible events.
15. No generic filler language remains.
16. BGM, when enabled, has ONE coherent musical identity across all scenes.
17. Scene-level BGM variation changes intensity/arrangement, not musical identity.
18. Camera choice is justified by the current dramatic beat and does not merely follow a preset sequence.
19. Visual opportunities from the Story Director are used only when causally earned.
18. SFX and ambience may vary without breaking soundtrack continuity.
19. The final scene delivers the promised payoff.
`.trim();
}

function validateCharacterRegistry(characters: AnimationCharacter[]): void {
  const vague = [
    "karakter utama",
    "karakter 1",
    "karakter 2",
    "dewasa muda",
    "tidak ditentukan",
    "wajah unik",
    "gaya rambut khas",
    "proporsi tubuh natural",
    "penampilan menarik",
    "pakaian utama",
    "aksesori utama",
    "sesuai cerita",
    "natural, ekspresif",
    "gerakan natural",
  ];

  const fields: Array<keyof AnimationCharacter> = [
    "name", "age", "gender", "appearance", "face", "hair", "skin", "body",
    "wardrobe", "accessories", "personality", "expression", "pose",
    "visualSignature", "color", "motion", "voice",
  ];

  if (!characters.length) {
    throw new Error("Character Registry kosong.");
  }

  const ids = new Set<string>();
  const names = new Set<string>();

  for (const character of characters) {
    if (!character.id || ids.has(character.id)) {
      throw new Error("Character Registry memiliki CHARACTER ID kosong atau duplikat.");
    }
    ids.add(character.id);

    const normalizedName = character.name.trim().toLowerCase();
    if (!normalizedName || names.has(normalizedName)) {
      throw new Error("Character Registry memiliki nama karakter kosong atau duplikat.");
    }
    names.add(normalizedName);

    for (const field of fields) {
      const value = String(character[field] ?? "").trim();
      if (!value) {
        throw new Error(`Character Registry: ${character.id} memiliki field ${String(field)} kosong.`);
      }

      const lower = value.toLowerCase();
      if (vague.some((phrase) => lower === phrase || lower.startsWith(`${phrase} `))) {
        throw new Error(`Character Registry: ${character.id} masih menggunakan detail generik pada ${String(field)}: "${value}".`);
      }
    }
  }
}

async function extractCharacterRegistry(
  form: AnimationForm,
  base: Output,
  ai: GoogleGenAI,
  requestedModel: string
): Promise<AnimationCharacter[]> {
  const characterCount = Math.max(1, Math.min(8, Array.isArray(form.characters) && form.characters.length ? form.characters.length : 1));
  const skeleton = Array.isArray(form.characters) ? form.characters : [];

  const prompt = `
You are Driacom Character Identity Architect.
Your ONLY job in this phase is to build the permanent Character Registry before any scene prompts are written.

STORY CONCEPT:
${clean(form.concept)}

GENRE:
${clean(form.genre)}

VISUAL STYLE:
${clean(form.animationStyle) || "Pixar Inspired 3D"}

REFERENCE STORY:
${clean(form.referenceStory) || "Tidak ada"}

HIDDEN STORY DIRECTOR BLUEPRINT:
${form.storyBlueprint ? JSON.stringify(form.storyBlueprint, null, 2) : "Tidak ada blueprint tersembunyi; infer a coherent story spine."}

REQUESTED CHARACTER COUNT:
${characterCount}

USER CHARACTER INPUT:
${JSON.stringify(skeleton, null, 2)}

CHARACTER DESIGN INSTRUCTION:
${clean(form.characterDesign) || clean(form.character) || "Create the characters required by the story."}

Create exactly the required number of distinct characters when the story supports that count.
Extract explicit identity facts from the story first. If an identity-defining fact is missing,
establish ONE concrete production-ready choice exactly once and keep it immutable.
Never return vague filler such as "wajah unik", "rambut khas", "proporsi natural", "menarik",
"pakaian utama", "sesuai cerita", or "tidak ditentukan" when a concrete choice can be made.

IMPORTANT:
- If the story says "gadis", use FEMALE. If it says "pria/laki-laki", use MALE.
- Preserve any explicit character name exactly.
- If no name exists, create one stable, natural name once.
- Preserve explicit age. If only a life stage is given, choose a concrete age.
- Define concrete face geometry, eye color/shape, hair style/color/length, skin/material,
  body proportions, wardrobe construction/colors/materials, accessories and attachment points,
  color palette, silhouette, movement/body mechanics, expression behavior, and voice identity.
- Voice DNA must be production-usable when the character speaks.
- Motion DNA must describe characteristic body mechanics, not generic "moves naturally".
- Keep the selected animation style consistent.
- Do not add characters not required by the story.
- Do not merge characters.
- Return only JSON matching the schema.
`.trim();

  const { response } = await generateWithGeminiResilient({
    apiKey: ANIMATION_API_KEY || "",
    requestedModel,
    fallbackModel: "gemini-3.5-flash",
    requestedMaxOutputTokens: 12000,
    maxRetries: 3,
    generate: async (modelName: string, maxOutputTokens: number) => {
      const response = await ai.models.generateContent({
        model: modelName,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: characterRegistrySchema,
          ...(modelName.startsWith("gemini-3.")
            ? {}
            : { temperature: 0.35 }),
          maxOutputTokens,
        },
      });
      readGeminiText(response, "Character Registry");
      return response;
    },
  });

  const registryText = readGeminiText(response, "Character Registry");
  const parsed = parseGeminiJson<{
    characters?: Partial<AnimationCharacter>[];
  }>(registryText, "Character Registry");

  const extracted = Array.isArray(parsed.characters) ? parsed.characters : [];
  if (extracted.length !== characterCount) {
    throw new Error(`Character Registry menghasilkan ${extracted.length} karakter, tetapi Driacom membutuhkan ${characterCount}.`);
  }

  const result = extracted.map((item, index) => ({
    id: clean(item.id) || `CHAR-${String(index + 1).padStart(2, "0")}`,
    name: clean(item.name) || `Karakter ${String(index + 1).padStart(2, "0")}`,
    role: clean(item.role) || (index === 0 ? "Protagonis" : "Supporting Character"),
    description: clean(item.description),
    age: clean(item.age),
    gender: clean(item.gender),
    appearance: clean(item.appearance),
    face: clean(item.face),
    hair: clean(item.hair),
    skin: clean(item.skin),
    body: clean(item.body),
    wardrobe: clean(item.wardrobe),
    accessories: clean(item.accessories),
    personality: clean(item.personality),
    expression: clean(item.expression),
    pose: clean(item.pose),
    visualSignature: clean(item.visualSignature),
    color: clean(item.color),
    motion: clean(item.motion),
    voice: clean(item.voice),
  }));

  validateCharacterRegistry(result);
  return result;
}


function enforceSpeakerLockOnGeneratedPrompt(
  videoPrompt: string,
  form: AnimationForm,
  script: AnimationDialogueScript
): string {
  const mode = clean(form.speakerMode) || "Ada karakter yang bicara";
  const narratorEnabled =
    mode === "Ada narator saja" ||
    mode === "Ada karakter + narator";
  const characterEnabled =
    mode === "Ada karakter yang bicara" ||
    mode === "Ada karakter + narator";

  const speakers = Array.isArray(script.dialogue)
    ? script.dialogue
        .map((item) => {
          const id = clean(item.characterId);
          const name = clean(item.characterName);
          return [id, name].filter(Boolean).join(" — ");
        })
        .filter(Boolean)
    : [];

  const lock = `
HARD SPEAKER / LIP-SYNC ENFORCEMENT — DRIACOM V8.5.1

SPEAKER MODE: ${mode}

${
  narratorEnabled
    ? `NARRATOR LOCK:
The narrator is OFF-SCREEN. During every narrator sentence, ALL visible characters
remain silent with mouths naturally closed. No character lip-sync, no talking-mouth
animation, no speech-like jaw movement, and no character may appear to be delivering
the narrator's words. Characters may still blink, breathe, look, react, or perform
the scene action.`
    : "NARRATOR LOCK: Narration is disabled. Do not create narration."
}

${
  characterEnabled
    ? `CHARACTER SPEAKER LOCK:
Only the explicitly named speaker(s) may lip-sync: ${
        speakers.length ? speakers.join(", ") : "the character explicitly named in CHARACTER DIALOGUE"
      }.
Every other visible character keeps their mouth naturally closed.`
    : "CHARACTER SPEAKER LOCK: Character dialogue is disabled. No character lip-sync."
}

MIXED SPEAKER RULE:
If narration and character dialogue alternate, narration = all visible characters silent;
character dialogue = only the named speaker lip-syncs. Never infer a speaker from framing,
gaze, proximity, or camera focus.

This enforcement overrides generic phrases such as "natural facial movement" or
"synchronize speech with visible facial movement." Mouth movement is reserved exclusively
for the active spoken character.
`.trim();

  return `${clean(videoPrompt)}\n\n${lock}`;
}

export async function POST(request: Request) {
  let form: AnimationForm | null = null;
  let usageReserved = false;

  try {
    const apiKey = ANIMATION_API_KEY;
    form = (await request.json()) as AnimationForm;

    if (!clean(form.concept)) {
      return NextResponse.json(
        { success: false, error: "Konsep cerita wajib diisi." },
        { status: 400 }
      );
    }

    const usage = await reservePromptGeneration("animation");
    if (!usage.ok) return NextResponse.json({ success: false, error: usage.error }, { status: usage.status });
    usageReserved = !usage.unlimited;

    /*
     * DRIACOM LOCAL ENGINE FALLBACK
     *
     * The local generator is the production safety net. It must be able
     * to return a valid prompt package when Gemini is unavailable, the API
     * key is missing, quota is exhausted, or an upstream generation step
     * fails.
     */
    if (!apiKey) {
      return NextResponse.json({
        success: true,
        ...buildLocalFallback(form, "AI_DISABLED"),
      });
    }

    const initialBase = generateAnimationPrompts(form);
    const scenes = Math.max(1, Math.min(10, Number(form.scenes) || 1));
    const ai = new GoogleGenAI({ apiKey });

    // PHASE A: extract and freeze concrete character identity BEFORE scene generation.
    const characterRegistry = await extractCharacterRegistry(
      form,
      initialBase,
      ai,
      REQUESTED_MODEL
    );

    const concreteForm: AnimationForm = {
      ...form,
      characters: characterRegistry,
    };

    const base = generateAnimationPrompts(concreteForm);
    const registryText = JSON.stringify(characterRegistry, null, 2);

    const batchSize = scenes > 3 ? 3 : scenes;
    const allScenes: Array<{
      sceneNumber: number;
      imagePrompt: string;
      videoPrompt: string;
    }> = [];

    let thumbnailTitle = "";
    let thumbnailPrompt = "";
    let continuityContext = "";
    let model = REQUESTED_MODEL;

    for (let batchStart = 1; batchStart <= scenes; batchStart += batchSize) {
      const batchEnd = Math.min(scenes, batchStart + batchSize - 1);
      const batchForm: AnimationForm = {
        ...concreteForm,
        scenes: String(batchEnd - batchStart + 1),
      };

      const batchBase: Output = {
        ...base,
        scenePrompts: base.scenePrompts.filter(
          (scene) => scene.sceneNumber >= batchStart && scene.sceneNumber <= batchEnd
        ),
      };

      const { response, model: batchModel } =
        await generateWithGeminiResilient({
          apiKey: ANIMATION_API_KEY || "",
          requestedModel: REQUESTED_MODEL,
          fallbackModel: "gemini-3.5-flash",
          requestedMaxOutputTokens: batchEnd - batchStart + 1 >= 3 ? 30000 : 18000,
          maxRetries: 3,
          generate: async (modelName: string, maxOutputTokens: number) => {
            const response = await ai.models.generateContent({
              model: modelName,
              contents: buildPrompt(
                batchForm,
                batchBase,
                registryText,
                batchStart,
                batchEnd,
                continuityContext
              ),
              config: {
                responseMimeType: "application/json",
                responseSchema: animationSchema,
                ...(modelName.startsWith("gemini-3.")
                  ? {}
                  : { temperature: 0.7 }),
                maxOutputTokens,
              },
            });
            readGeminiText(
              response,
              `Animation Output Scene ${batchStart}-${batchEnd}`
            );
            return response;
          },
        });

      model = batchModel;

      const text = readGeminiText(response, `Animation Output Scene ${batchStart}-${batchEnd}`);
      const parsed = parseGeminiJson<{
        characterMaster: string;
        thumbnailTitle: string;
        thumbnailPrompt: string;
        scenes: Array<{
          sceneNumber: number;
          imagePrompt: string;
          videoPrompt: string;
        }>;
      }>(text, `Animation Output Scene ${batchStart}-${batchEnd}`);

      if (!thumbnailTitle && clean(parsed.thumbnailTitle)) {
        thumbnailTitle = clean(parsed.thumbnailTitle);
      }
      if (!thumbnailPrompt && clean(parsed.thumbnailPrompt)) {
        thumbnailPrompt = clean(parsed.thumbnailPrompt);
      }

      const batchScenes = Array.isArray(parsed.scenes)
        ? parsed.scenes.filter(Boolean).sort((a, b) => a.sceneNumber - b.sceneNumber)
        : [];

      if (batchScenes.length !== batchEnd - batchStart + 1) {
        throw new Error(
          `Gemini mengembalikan ${batchScenes.length} scene pada batch ${batchStart}-${batchEnd}, tetapi Driacom membutuhkan ${batchEnd - batchStart + 1}.`
        );
      }

      const expectedBatchNumbers = Array.from(
        { length: batchEnd - batchStart + 1 },
        (_, index) => batchStart + index
      );

      const actualBatchNumbers = batchScenes.map((scene) => Number(scene.sceneNumber));
      if (
        actualBatchNumbers.some(
          (value, index) => value !== expectedBatchNumbers[index]
        )
      ) {
        throw new Error(
          `Nomor scene pada batch ${batchStart}-${batchEnd} tidak berurutan.`
        );
      }

      if (batchScenes.some((scene) => !clean(scene.imagePrompt) || !clean(scene.videoPrompt))) {
        throw new Error(`Ada scene kosong pada batch ${batchStart}-${batchEnd}.`);
      }

      allScenes.push(...batchScenes);
      const lastScenes = batchScenes.slice(-2);
      continuityContext = lastScenes
        .map(
          (scene) =>
            `SCENE ${scene.sceneNumber} END CONTINUITY:\n${scene.videoPrompt.slice(-5000)}`
        )
        .join("\n\n");
    }

    const rawScenes = allScenes.sort((a, b) => a.sceneNumber - b.sceneNumber);

    if (rawScenes.length !== scenes) {
      throw new Error(
        `Gemini mengembalikan ${rawScenes.length} scene, tetapi Driacom membutuhkan ${scenes} scene.`
      );
    }

    const expectedSceneNumbers = Array.from(
      { length: scenes },
      (_, index) => index + 1
    );

    const actualSceneNumbers = rawScenes.map(
      (scene) => Number(scene.sceneNumber)
    );

    if (
      actualSceneNumbers.some(
        (value, index) => value !== expectedSceneNumbers[index]
      )
    ) {
      throw new Error(
        "Nomor scene dari Gemini tidak berurutan. Driacom menghentikan output agar kontinuitas tidak rusak."
      );
    }

    if (
      rawScenes.some(
        (scene) =>
          !clean(scene.imagePrompt) ||
          !clean(scene.videoPrompt)
      )
    ) {
      throw new Error(
        "Ada scene dengan imagePrompt atau videoPrompt kosong."
      );
    }

    const scenePrompts: AnimationScenePrompt[] = rawScenes
      .map((scene): AnimationScenePrompt => {
        const source = base.scenePrompts.find(
          (item) => item.sceneNumber === scene.sceneNumber
        );

        return {
          sceneNumber: scene.sceneNumber,
          title:
            source?.title ||
            `Scene ${String(scene.sceneNumber).padStart(2, "0")}`,
          purpose:
            source?.purpose ||
            "Melanjutkan perkembangan cerita secara sinematik.",
          objective:
            source?.objective ||
            "Mengembangkan cerita dan mempertahankan kontinuitas karakter serta dunia.",
          emotionalBeat:
            source?.emotionalBeat ||
            "Sesuai kebutuhan dramatis scene.",
          storyProgress:
            source?.storyProgress ||
            "Melanjutkan cerita dari scene sebelumnya.",
          charactersPresent:
            source?.charactersPresent ||
            "Karakter utama sesuai Master Character Sheet.",
          action:
            source?.action ||
            "Aksi utama mengikuti perkembangan cerita pada video prompt.",
          startState:
            source?.startState ||
            "Mulai dari frame awal yang ditentukan oleh image prompt.",
          endState:
            source?.endState ||
            "Berakhir pada keadaan yang menjadi titik awal scene berikutnya.",
          dialogueScript:
            source?.dialogueScript || {
              sceneNumber: scene.sceneNumber,
              mode: clean(concreteForm.speakerMode) || "none",
              narrator: "",
              dialogue: [],
              timing: `00:00-${clean(concreteForm.duration) || "00:08"}`,
              direction: "",
            },
          dialoguePrompt: source?.dialoguePrompt || "",
          imagePrompt: clean(scene.imagePrompt),
          videoPrompt: enforceSpeakerLockOnGeneratedPrompt(
            clean(scene.videoPrompt),
            concreteForm,
            source?.dialogueScript || {
              sceneNumber: scene.sceneNumber,
              mode: clean(concreteForm.speakerMode) || "none",
              narrator: "",
              dialogue: [],
              timing: `00:00-${clean(concreteForm.duration) || "00:08"}`,
              direction: "",
            }
          ),
          audioPrompt: source?.audioPrompt || "",
        };
      });

    const output: Output = {
      ...base,
      character: characterRegistry
        .map((character) => generateCharacterPrompt(character, clean(concreteForm.animationStyle) || "Pixar Inspired 3D", getWorld(concreteForm)))
        .join("\n\n\n================ INDIVIDUAL MASTER CHARACTER SHEET ================\n\n"),
      thumbnailTitle: thumbnailTitle || base.thumbnailTitle,
      thumbnailPrompt: thumbnailPrompt || base.thumbnailPrompt,
      scenePrompts,
    };

    output.localTemplate = buildAnimationLocalTemplate(concreteForm, output);

    const quality = validateAnimationOutput(concreteForm, output);
    const hardening = hardenAnimationOutput(concreteForm, output);
    const continuity = analyzeAnimationContinuity(concreteForm, output);
    if (!quality.ok || !hardening.ok || !continuity.ok) {
      console.warn("Driacom Animation production hardening failed:", {
        quality: quality.reason,
        score: hardening.score,
        issues: hardening.issues,
        continuityScore: continuity.score,
        continuityIssues: continuity.issues,
      });
      return NextResponse.json({
        success: true,
        ...buildLocalFallback(concreteForm, "AI_QUALITY_GATE_FAILED"),
      });
    }

    return NextResponse.json({
      success: true,
      output,
      model,
      engine: "GEMINI_ENHANCED",
      reason: "AI_SUCCESS",
      fallback: false,
      localTemplateReady: true,
    });
  } catch (error) {
    if (usageReserved) await releasePromptGeneration("animation");
    console.error("Driacom Gemini Animation API Error:", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      cause: error instanceof Error ? error.cause : undefined,
    });

    /*
     * Never turn an AI outage into a dead generator.
     *
     * If Gemini fails at any point (quota, rate limit, malformed response,
     * timeout, model error, or upstream exception), return the deterministic
     * Driacom local prompt package instead.
     */
    try {
      const localForm = form || ({ concept: "" } as AnimationForm);
      const message = error instanceof Error ? error.message.toLowerCase() : String(error).toLowerCase();
      const reason =
        /quota|rate.?limit|429|resource.?exhausted|too many requests/.test(message)
          ? "AI_QUOTA_OR_RATE_LIMIT"
          : "AI_ERROR";

      return NextResponse.json({
        success: true,
        ...buildLocalFallback(localForm, reason),
      });
    } catch (fallbackError) {
      console.error("Driacom Local Animation Fallback Error:", {
        message:
          fallbackError instanceof Error
            ? fallbackError.message
            : String(fallbackError),
      });

      return NextResponse.json(
        {
          success: false,
          error:
            "Driacom gagal meracik prompt. Silakan coba lagi.",
        },
        { status: 500 }
      );
    }
  }
}
