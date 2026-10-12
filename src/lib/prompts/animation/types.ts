/* =========================================================
   DRIACOM ANIMATION — TYPES
   FINAL SCRIPT-INTEGRATED VERSION
   ========================================================= */


/* =========================================================
   CHARACTER
   ========================================================= */

export type AnimationCharacter = {
  id: string;
  name: string;
  role: string;

  description: string;
  age: string;
  gender: string;

  appearance: string;
  face: string;
  hair: string;
  skin: string;
  body: string;

  wardrobe: string;
  accessories: string;

  personality: string;
  expression: string;
  pose: string;

  visualSignature: string;

  /*
   * Extended Character DNA.
   * These fields are optional for backward compatibility with older
   * saved forms, but become part of the production source of truth
   * when available.
   */
  color?: string;
  motion?: string;
  voice?: string;
};


/* =========================================================
   AI IDEA OPTION
   ========================================================= */

export type StoryBlueprint = {
  premise: string;
  protagonistGoal: string;
  centralConflict: string;
  stakes: string;
  turningPoint: string;
  climax: string;
  payoff: string;
  ending: string;
  visualOpportunities: string[];
  emotionalArc: string[];
};

export type IdeaOption = {
  title: string;
  concept: string;
  hook: string;
  storyBlueprint?: StoryBlueprint;
};


/* =========================================================
   ANIMATION FORM
   ========================================================= */

export type AnimationForm = {
  concept: string;
  genre: string;

  referenceLink: string;
  referenceStory: string;

  character: string;
  characters: AnimationCharacter[];
  characterDesign: string;

  /** Hidden production blueprint selected from AI Idea Director. */
  storyBlueprint?: StoryBlueprint;

  world: string;

  action: string;
  expression: string;

  animationStyle: string;
  ratio: string;
  camera: string;
  lighting: string;

  scenes: string;
  duration: string;

  language: string;

  audio: string;
  speakerMode: string;
};


/* =========================================================
   DIALOGUE LINE
   ========================================================= */

export type AnimationDialogueLine = {
  characterId: string;
  characterName: string;

  /*
   * Actual spoken dialogue.
   */
  text: string;
};


/* =========================================================
   DIALOGUE / NARRATION SCRIPT
   =========================================================

   ONE OBJECT = ONE SCENE SCRIPT.

   Example:

   {
     sceneNumber: 1,
     mode: "character",
     narrator: "",
     dialogue: [...],
     timing: "00:00-00:08",
     direction: "..."
   }

   This allows Driacom to connect the script
   directly to the correct scene.
   ========================================================= */

export type AnimationDialogueScript = {

  /*
   * Scene owner.
   *
   * REQUIRED for scene synchronization.
   */
  sceneNumber: number;


  /*
   * Speaker mode.
   *
   * Examples:
   *
   * "character"
   * "narrator"
   * "character+narrator"
   * "none"
   */
  mode: string;


  /*
   * Narration text.
   *
   * Empty string when narration is disabled.
   */
  narrator: string;


  /*
   * Character dialogue lines.
   */
  dialogue: AnimationDialogueLine[];


  /*
   * Timing information.
   *
   * Example:
   *
   * "00:00-00:08"
   */
  timing: string;


  /*
   * Voice / performance direction.
   *
   * Example:
   *
   * "Pelan, penasaran, sedikit takut."
   */
  direction: string;
};


/* =========================================================
   SCENE PROMPT
   ========================================================= */

export type AnimationScenePrompt = {

  sceneNumber: number;

  title: string;

  purpose: string;

  objective: string;

  emotionalBeat: string;

  storyProgress: string;

  charactersPresent: string;

  action: string;

  startState: string;

  endState: string;


  /*
   * Structured dialogue data.
   *
   * This is the PRIMARY source of truth
   * for dialogue / narration / speaker direction.
   */
  dialogueScript: AnimationDialogueScript;


  /*
   * Flattened dialogue prompt.
   *
   * Used by UI for:
   *
   * - Copy
   * - Display
   * - AI video generation
   * - AI voice generation
   */
  dialoguePrompt: string;


  /*
   * Exact START FRAME prompt.
   */
  imagePrompt: string;


  /*
   * Motion + story continuation
   * from imagePrompt.
   */
  videoPrompt: string;


  /*
   * Scene audio instructions.
   */
  audioPrompt: string;
};


/* =========================================================
   OUTPUT
   ========================================================= */

export type Output = {
  /** Deterministic local-engine audit + reusable template metadata. */
  localTemplate?: import("./local-master-template").AnimationLocalTemplate;

  thumbnailTitle: string;

  thumbnailPrompt: string;

  character: string;

  characterSheets?: CharacterPromptOutput[];

  storyboard: string;

  scenePrompts:
    AnimationScenePrompt[];

  consistency: string;

  voice: string;

  sfx: string;

  negative: string;
};


/* =========================================================
   OUTPUT KEY
   ========================================================= */

export type AnimationOutputKey =
  | "thumbnailPrompt"
  | "character"
  | "storyboard"
  | "scenePrompts"
  | "consistency"
  | "voice"
  | "sfx"
  | "negative";


/* =========================================================
   CHARACTER GENERATION RESULT
   ========================================================= */

export type CharacterPromptOutput = {
  id: string;
  name: string;
  prompt: string;
};


/* =========================================================
   STORYBOARD BLUEPRINT
   LEGACY COMPATIBILITY
   ========================================================= */

export type SceneBlueprint = {

  sceneNumber: number;

  role: string;

  duration: string;

  camera: string;

  lighting: string;

  animationStyle: string;

  audio: string;
};