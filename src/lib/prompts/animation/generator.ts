import type {
  AnimationForm,
  AnimationScenePrompt,
  AnimationDialogueScript,
  Output,
} from "./types";

const CONTENT_TYPE_DIRECTIVES: Record<string, string> = {
  "ASMR": "Prioritaskan tekstur, material, close-up, gerakan mikro yang satisfying, ambience dan sound cues. Jangan memaksakan plot panjang.",
  "Objek Bicara": "Objek adalah karakter utama. Kunci bentuk, material, warna, wajah/fitur ekspresif dan pastikan dialog berasal dari objek yang terlihat berbicara.",
  "Fakta Unik": "Prioritaskan hook fakta, visualisasi informasi, demonstrasi, perubahan yang mudah dipahami, dan payoff faktual.",
  "Edukasi Visual": "Prioritaskan penjelasan visual bertahap, contoh konkret, dan hubungan sebab-akibat yang mudah dipahami.",
  "Konten Hewan": "Prioritaskan perilaku hewan, ekspresi, gerak tubuh, lingkungan, dan interaksi yang natural.",
  "What If": "Bangun premis hipotetis yang jelas lalu tunjukkan konsekuensinya secara visual scene demi scene.",
  "Eksperimen & Sains": "Prioritaskan proses, fenomena, sebab-akibat, visualisasi eksperimen, dan detail yang masuk akal.",
  "Miniatur": "Pertahankan skala miniatur secara konsisten, tonjolkan detail material dan lingkungan, serta gunakan perspektif yang memperkuat rasa dunia mini.",
  "Petualangan": "Prioritaskan eksplorasi, tujuan yang jelas, rintangan, penemuan, aksi visual, perkembangan perjalanan, dan payoff petualangan yang terasa memuaskan.",
};


import {
  getAnimationCharacters,
  generateCharacterMaster,
  generateCharacterPrompt,
} from "./character-system";

import {
  generateScenePrompts,
} from "./scene-prompts";

import {
  generateStoryboard,
} from "./storyboard";

/* =========================================================
   DRIACOM ANIMATION — MASTER GENERATOR
   FINAL SCRIPT-INTEGRATED VERSION

   RESPONSIBILITY:
   - Character Master
   - World Master
   - Storyboard
   - Scene Prompts
   - Dialogue Script Integration
   - Voice Master
   - Sound Design
   - Consistency Lock
   - Negative Prompt

   IMPORTANT:
   This generator does NOT invent creative dialogue.

   Dialogue / narration is supplied through:
   AnimationDialogueScript[]

   The generator only normalizes and injects the script
   into the scene generation pipeline.
   ========================================================= */


/* =========================================================
   HELPERS
   ========================================================= */

const clean = (
  value: unknown
): string =>
  String(value ?? "").trim();


const clampScenes = (
  value: unknown
): number => {
  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return 4;
  }

  return Math.max(
    1,
    Math.min(
      10,
      Math.floor(parsed)
    )
  );
};


/* =========================================================
   SCRIPT NORMALIZER
   =========================================================

   Keeps script data safe before entering scene-prompts.ts.

   We do NOT generate dialogue here.
   We only normalize existing AI-generated script data.
   ========================================================= */

const normalizeScripts = (
  scripts: AnimationDialogueScript[] | undefined,
  totalScenes: number
): AnimationDialogueScript[] => {

  if (!Array.isArray(scripts)) {
    return [];
  }

  const normalized =
    scripts
      .filter(Boolean)
      .map((script) => ({
        ...script,

        sceneNumber: Math.floor(
          Number(
            script.sceneNumber
          )
        ),
      }))
      .filter(
        (script) =>
          Number.isFinite(
            script.sceneNumber
          ) &&
          script.sceneNumber >= 1 &&
          script.sceneNumber <= totalScenes
      );

  return normalized;
};


/* =========================================================
   WORLD SYSTEM
   ========================================================= */

export const getWorld = (
  form: AnimationForm
): string => {

  const existing =
    clean(form.world);

  if (existing) {
    return existing;
  }

  return [
    "CINEMATIC WORLD SYSTEM",
    "",
    "STORY:",
    clean(form.concept),
    "",
    "GENRE:",
    clean(form.genre),
    "",
    "ANIMATION STYLE:",
    clean(form.animationStyle) ||
      "Pixar Inspired 3D",
    "",
    "ASPECT RATIO:",
    clean(form.ratio) ||
      "9:16",
    "",
    "LANGUAGE:",
    clean(form.language) ||
      "Bahasa Indonesia",
    "",
    "WORLD RULE:",
    "Create one coherent visual world.",
    "",
    "Maintain consistent:",
    "- architecture",
    "- geography",
    "- scale",
    "- materials",
    "- atmosphere",
    "- lighting direction",
    "- environmental details",
    "- color language",
    "- spatial continuity",
    "",
    "The world must feel like the same physical location system throughout the entire animation.",
    "",
    "Do not randomly redesign the environment between scenes.",
  ].join("\n");
};


/* =========================================================
   CHARACTER INSTRUCTION
   ========================================================= */

const getCharacterInstruction = (
  form: AnimationForm
): string => {

  const explicit =
    clean(form.character);

  if (explicit) {
    return explicit;
  }

  return [
    "Create only the characters required by the story.",
    "",
    "Use the Character System as the permanent visual source of truth.",
    "",
    "Every character must have:",
    "- unique identity",
    "- unique CHARACTER ID",
    "- stable face",
    "- stable hairstyle",
    "- stable age",
    "- stable body proportions",
    "- stable wardrobe",
    "- stable accessories",
    "- stable personality",
    "- stable visual signature",
    "- concrete color palette",
    "- stable movement/body-mechanics signature",
    "- stable voice identity when the character speaks",
    "",
    "CHARACTER DNA QUALITY GATE:",
    "Do not accept vague identity filler such as 'unique face', 'distinctive hair',",
    "'natural proportions', 'attractive appearance', or 'signature outfit' as the final",
    "production description when the story provides enough information.",
    "If an identity-defining detail is missing, establish one concrete production-ready",
    "detail once and reuse it unchanged across every scene.",
    "",
    "The Character Master must be specific enough that an image model can recreate",
    "the same person/creature from the front, side, back, and 3/4 views.",
    "",
    "Do not introduce unnecessary characters.",
    "",
    "Whenever a specific character appears in a scene, identify that character using CHARACTER ID.",
    "",
    "Never merge two characters into one identity.",
  ].join("\n");
};


/* =========================================================
   CHARACTERS
   ========================================================= */

const getCharacters = (
  form: AnimationForm
) => {

  const characters =
    Array.isArray(form.characters)
      ? form.characters
      : [];

  return getAnimationCharacters(
    characters,
    getCharacterInstruction(form)
  );
};


/* =========================================================
   ACTION
   ========================================================= */

const getAction = (
  form: AnimationForm
): string =>
  clean(form.action) ||
  [
    "Determine concrete visual actions",
    "that advance the story.",
    "",
    "Every scene must contain a meaningful action.",
    "Avoid static scenes unless stillness is narratively intentional.",
  ].join("\n");


/* =========================================================
   EXPRESSION
   ========================================================= */

const getExpression = (
  form: AnimationForm
): string =>
  clean(form.expression) ||
  [
    "Use natural cinematic facial expressions.",
    "Expressions must correspond to the emotional beat.",
    "Avoid exaggerated or robotic facial movement.",
    "Keep emotional progression consistent from scene to scene.",
  ].join("\n");


/* =========================================================
   STORYBOARD
   ========================================================= */

const generateMasterStoryboard = (
  form: AnimationForm,
  totalScenes: number,
  characterInstruction: string,
  world: string,
  action: string,
  expression: string
): string => {

  return generateStoryboard(
    totalScenes,
    characterInstruction,
    world,
    action,
    expression,
    clean(form.camera) ||
      "Cinematic camera movement with purposeful framing",
    form.storyBlueprint ? JSON.stringify(form.storyBlueprint, null, 2) : ""
  );
};


/* =========================================================
   THUMBNAIL TITLE LOCK — V4
   ========================================================= */

const getThumbnailTitle = (form: AnimationForm): string =>
  clean(form.concept)
    .split(/[.!?]/)[0]
    .trim()
    .slice(0, 80) ||
  "Driacom Animation";

/* =========================================================
   THUMBNAIL PROMPT
   ========================================================= */

const generateThumbnailPrompt = (
  form: AnimationForm,
  characterMaster: string,
  world: string
): string => {

  const ratio =
    clean(form.ratio) ||
    "9:16";

  const style =
    clean(form.animationStyle) ||
    "Pixar Inspired 3D";

  const thumbnailTitle =
    getThumbnailTitle(form);

  return `MASTER THUMBNAIL PROMPT

Create a professional cinematic thumbnail for the animation.

==================================================
EXACT THUMBNAIL TITLE — TEXT LOCK
==================================================

${thumbnailTitle}

The exact title above MUST be visibly rendered inside the thumbnail.
Preserve every character exactly. Do not translate, paraphrase, abbreviate,
reorder, stylize into unreadable lettering, or invent additional title words.
Use large, highly legible typography with strong contrast and a safe-area position.
The title must remain readable on a small mobile screen and must not cover the
main character's face or critical story action.

==================================================
STORY
==================================================

${clean(form.concept)}

==================================================
GENRE
==================================================

${clean(form.genre)}

==================================================
ANIMATION STYLE
==================================================

${style}

==================================================
ASPECT RATIO
==================================================

${ratio}

==================================================
CHARACTER SYSTEM
==================================================

${characterMaster}

==================================================
WORLD
==================================================

${world}

==================================================
COMPOSITION
==================================================

Create one powerful cinematic hero composition.

The main story idea must be immediately readable.

Use:

- clear visual hierarchy
- strong foreground / midground / background separation
- cinematic depth
- expressive but believable poses
- professional cinematic lighting
- strong focal point
- readable silhouette
- visually clear storytelling

The thumbnail must remain readable at mobile size.

==================================================
CHARACTER CONTINUITY
==================================================

Keep exact:

- face
- hairstyle
- age
- skin/material
- body proportions
- wardrobe
- accessories
- colors
- silhouette
- visual signature

==================================================
WORLD CONTINUITY
==================================================

Keep exact:

- architecture
- geography
- scale
- materials
- atmosphere
- lighting direction
- environmental visual language

==================================================
DO NOT
==================================================

Do not add random characters.

Do not add random objects.

Do not redesign characters.

Do not redesign the environment.

Do not merge characters.

Do not duplicate characters.

Do not distort anatomy.

Do not add any text OTHER THAN the exact locked thumbnail title above.

Do not add watermark.

Do not add logo.

Do not create borders.

Do not create unnecessary UI elements.

==================================================
FINAL REQUIREMENT
==================================================

The thumbnail must belong to the exact same animation universe
used by every production scene.

ASPECT RATIO:
${ratio}`;
};


/* =========================================================
   CONSISTENCY LOCK
   ========================================================= */

const generateConsistencyLock = (
  form: AnimationForm,
  characterMaster: string,
  world: string
): string => {

  const ratio =
    clean(form.ratio) ||
    "9:16";

  const style =
    clean(form.animationStyle) ||
    "Pixar Inspired 3D";

  return `DRIACOM MASTER CONSISTENCY LOCK

THIS SYSTEM IS PERMANENT FOR THIS PROJECT.

==================================================
PROJECT VISUAL SYSTEM
==================================================

ANIMATION STYLE:
${style}

ASPECT RATIO:
${ratio}

GENRE:
${clean(form.genre)}

==================================================
CHARACTER IDENTITY LOCK
==================================================

${characterMaster}

Every CHARACTER ID is a permanent visual identity.

NEVER:

- redesign a character
- change the face
- change head shape
- change hairstyle
- change age
- change skin/material
- change body proportions
- change wardrobe
- change accessories
- change silhouette
- change colors without story reason
- merge characters
- duplicate characters
- invent replacement characters

Only modify a character when explicitly requested.

==================================================
WORLD LOCK
==================================================

${world}

Keep consistent:

- architecture
- geography
- object placement
- scale
- materials
- atmosphere
- color language
- lighting direction
- environmental details

==================================================
SCENE CONTINUITY LOCK
==================================================

Scene N must logically continue from Scene N-1.

The following must remain physically believable:

- character position
- character orientation
- wardrobe
- props
- environment
- time of day
- lighting
- geography
- object placement

Never create:

- teleportation
- unexplained wardrobe change
- unexplained object disappearance
- unexplained object appearance
- random environment redesign
- random character redesign
- random camera discontinuity

==================================================
IMAGE → VIDEO LOCK
==================================================

The Image Prompt is the exact START FRAME
for its corresponding Video Prompt.

The video must begin from the exact visual state described by the image prompt.

Do not reinterpret the starting frame.

Do not redesign the character.

Do not redesign the environment.

Do not change wardrobe.

Do not change props without narrative reason.

==================================================
AUDIO / SCRIPT LOCK
==================================================

When speaker mode enables character dialogue,
the supplied generated dialogue is authoritative.

When speaker mode enables narration,
the supplied generated narration is authoritative.

Do not invent additional spoken content.

Do not remove required spoken content.

Keep spoken content synchronized with scene duration.

==================================================
QUALITY LOCK
==================================================

Avoid:

- flicker
- jitter
- frame warping
- anatomy deformation
- broken hands
- extra limbs
- duplicate characters
- floating objects
- robotic movement
- sudden zoom
- random camera shake
- style switching
- lighting inconsistency
- temporal inconsistency
- identity drift`;
};


/* =========================================================
   VOICE MASTER
   ========================================================= */

const generateVoiceMaster = (
  form: AnimationForm
): string => {

  const speaker =
    clean(form.speakerMode) ||
    "Ada karakter yang bicara";

  const language =
    clean(form.language) ||
    "Bahasa Indonesia";

  const duration =
    clean(form.duration) ||
    "8 detik";

  const characterVoice =
    speaker ===
      "Ada karakter yang bicara" ||
    speaker ===
      "Ada karakter + narator";

  const narrator =
    speaker ===
      "Ada narator saja" ||
    speaker ===
      "Ada karakter + narator";

  return `VOICE / DIALOGUE MASTER

==================================================
LANGUAGE
==================================================

${language}

==================================================
SPEAKER MODE
==================================================

${speaker}

==================================================
DURATION PER SCENE
==================================================

${duration}

==================================================
CHARACTER VOICE
==================================================

${characterVoice ? "ENABLED" : "DISABLED"}

==================================================
NARRATOR
==================================================

${narrator ? "ENABLED" : "DISABLED"}

==================================================
VOICE RULES
==================================================

Voice must sound natural.

Voice must match the established character personality.

Voice must use the selected language.

Dialogue must fit naturally inside the scene duration.

Do not force excessive dialogue.

Do not create character dialogue when character voice is disabled.

Do not create narration when narrator is disabled.

Lip movement must synchronize naturally with dialogue.

Voice identity must remain consistent across scenes.

Character voices must remain distinguishable from one another.

Narration voice must remain consistent throughout the project.

Voice must not overpower important sound effects.

Voice must not overpower BGM.

Avoid robotic delivery.

Avoid unnatural pauses.

Avoid rushed dialogue.

==================================================
TIMING
==================================================

Prioritize short, natural spoken lines.

Dialogue should be concise enough to fit the selected scene duration.

Use pauses only when they contribute to emotion or storytelling.`;
};


/* =========================================================
   SOUND DESIGN
   ========================================================= */

const generateSoundDesign = (
  form: AnimationForm
): string => {

  const audio =
    clean(form.audio) ||
    "Narasi + BGM + SFX";

  const hasBgm =
    audio.includes("BGM");

  const hasSfx =
    audio.includes("SFX");

  const hasNarration =
    audio.includes("Narasi");

  const speaker =
    clean(form.speakerMode) ||
    "Ada karakter yang bicara";

  return `SOUND DESIGN MASTER

==================================================
AUDIO MODE
==================================================

${audio}

==================================================
SPEAKER MODE
==================================================

${speaker}

==================================================
NARRATION
==================================================

${hasNarration ? "ENABLED" : "DISABLED"}

==================================================
BGM
==================================================

${hasBgm ? "ENABLED" : "DISABLED"}

==================================================
SFX
==================================================

${hasSfx ? "ENABLED" : "DISABLED"}

==================================================
SOUND RULES
==================================================

${
  hasNarration
    ? "Use narration only when enabled by the selected audio mode and speaker configuration."
    : "Do not create narration."
}

${
  hasBgm
    ? "Use cinematic background music appropriate to the emotional progression."
    : "Do not create background music."
}

${
  hasSfx
    ? "Create synchronized sound effects for visible physical actions and environmental events."
    : "Do not create sound effects."
}

Audio must support the story.

Do not create unrelated sounds.

Do not overpower dialogue.

Do not overpower narration.

SFX must match visible action timing.

Environmental ambience must remain consistent with the established world.

Use realistic spatial audio when appropriate.

Audio transitions between scenes must feel continuous.

Avoid sudden volume jumps.`;
};


/* =========================================================
   NEGATIVE PROMPT
   ========================================================= */

const generateNegativePrompt =
  (): string =>
    `NEGATIVE PROMPT

character redesign,
different face,
different hairstyle,
different age,
different body proportions,
different wardrobe,
different accessories,
different colors,
different silhouette,
identity drift,
identity change,
character merge,
duplicate character,
extra character,
random character,
unnecessary character,
extra limbs,
missing limbs,
deformed hands,
broken fingers,
bad anatomy,
facial distortion,
warped face,
asymmetrical eyes,
duplicate objects,
floating objects,
object deformation,
environment redesign,
inconsistent architecture,
inconsistent geography,
inconsistent scale,
inconsistent materials,
lighting inconsistency,
random background,
teleportation,
continuity error,
camera discontinuity,
sudden zoom,
random camera shake,
jitter,
flicker,
frame warping,
motion deformation,
robotic movement,
unnatural body mechanics,
unnatural facial movement,
style change,
quality degradation,
blurry details,
low detail,
watermark,
logo,
unwanted text,
border,
cropping,
wrong aspect ratio,
temporal inconsistency,
visual identity drift,
wardrobe inconsistency,
prop inconsistency,
lighting drift,
environment drift`;


/* =========================================================
   MASTER GENERATOR
   ========================================================= */

export const generateAnimationPrompts = (
  form: AnimationForm,
  scripts: AnimationDialogueScript[] = []
): Output => {

  const totalScenes =
    clampScenes(form.scenes);


  /* =======================================================
     SCRIPT PIPELINE
     ======================================================= */

  const normalizedScripts =
    normalizeScripts(
      scripts,
      totalScenes
    );


  /* =======================================================
     CORE SYSTEMS
     ======================================================= */

  const characters =
    getCharacters(form);

  const world =
    getWorld(form);

  const characterInstruction =
    getCharacterInstruction(form);

  const action =
    getAction(form);

  const expression =
    getExpression(form);


  /* =======================================================
     MASTER CHARACTER
     ======================================================= */

  const selectedStyle =
    clean(form.animationStyle) ||
    "Pixar Inspired 3D";

  const characterMaster =
    generateCharacterMaster(
      characters,
      selectedStyle,
      world
    );

  // Each character gets its OWN complete master-sheet prompt.
  // This prevents a 2-character story from forcing the image model to
  // invent a combined sheet where one character becomes smaller or loses
  // turnaround/detail fidelity.
  const characterSheets =
    characters.map((character) => ({
      id: character.id,
      name: character.name,
      prompt: generateCharacterPrompt(
        character,
        selectedStyle,
        world
      ),
    }));


  /* =======================================================
     STORYBOARD
     ======================================================= */

  const storyboard =
    generateMasterStoryboard(
      form,
      totalScenes,
      characterInstruction,
      world,
      action,
      expression
    );


  /* =======================================================
     SCENE PROMPTS
     ======================================================= */

  const scenePrompts =
    generateScenePrompts(
      {
        ...form,
        scenes:
          String(totalScenes),
      },
      characterInstruction,
      characterMaster,
      world,
      action,
      expression,
      normalizedScripts
    );


  /* =======================================================
     THUMBNAIL
     ======================================================= */

  const thumbnailPrompt =
    generateThumbnailPrompt(
      form,
      characterMaster,
      world
    );

  const thumbnailTitle =
    getThumbnailTitle(form);


  /* =======================================================
     CONSISTENCY
     ======================================================= */

  const consistency =
    generateConsistencyLock(
      form,
      characterMaster,
      world
    );


  /* =======================================================
     VOICE
     ======================================================= */

  const voice =
    generateVoiceMaster(form);


  /* =======================================================
     SOUND
     ======================================================= */

  const sfx =
    generateSoundDesign(form);


  /* =======================================================
     NEGATIVE
     ======================================================= */

  const negative =
    generateNegativePrompt();


  /* =======================================================
     OUTPUT
     ======================================================= */

  return {
    thumbnailTitle,

    thumbnailPrompt,

    character:
      characterMaster,

    characterSheets,

    storyboard,

    scenePrompts,

    consistency,

    voice,

    sfx,

    negative,
  };
};


/* =========================================================
   SINGLE SCENE
   =========================================================

   IMPORTANT:
   Accepts scripts too.

   This prevents single-scene generation from losing
   dialogue/narration data.
   ========================================================= */

export const generateSingleAnimationScene =
  (
    form: AnimationForm,
    sceneNumber: number,
    scripts: AnimationDialogueScript[] = []
  ): AnimationScenePrompt | null => {

    if (
      !Number.isFinite(
        sceneNumber
      ) ||
      sceneNumber < 1
    ) {
      return null;
    }

    const targetScene =
      Math.floor(sceneNumber);

    const output =
      generateAnimationPrompts(
        form,
        scripts
      );

    return (
      output.scenePrompts.find(
        (scene) =>
          scene.sceneNumber ===
          targetScene
      ) || null
    );
  };