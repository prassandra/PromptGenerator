import type {
  AnimationForm,
} from "./types";

/* =========================================================
   DRIACOM ANIMATION — STORY ENGINE
   PHASE 1
   STORY BEAT + STATE CONTINUITY SYSTEM
   ========================================================= */

type StoryboardScene = {
  sceneNumber: number;
  role: string;
  description: string;
  objective: string;
  storyProgress: string;
  emotionalBeat: string;
  camera: string;
  motion: string;
  emotion: string;
  startState: string;
  endState: string;
  continuity: string;
};

/* =========================================================
   HELPERS
   ========================================================= */

const clean = (
  value: unknown
): string =>
  String(value ?? "").trim();

/* =========================================================
   SCENE ROLE ENGINE
   ========================================================= */

const getSceneRole = (
  sceneNumber: number,
  totalScenes: number
): string => {
  if (totalScenes <= 1) {
    return "HOOK / CLIMAX / ENDING";
  }

  if (totalScenes === 2) {
    if (sceneNumber === 1) {
      return "HOOK / SETUP";
    }

    return "CLIMAX / ENDING";
  }

  if (totalScenes === 3) {
    if (sceneNumber === 1) {
      return "HOOK / SETUP";
    }

    if (sceneNumber === 2) {
      return "CONFLICT / ESCALATION";
    }

    return "CLIMAX / ENDING";
  }

  if (totalScenes === 4) {
    if (sceneNumber === 1) {
      return "HOOK / OPENING";
    }

    if (sceneNumber === 2) {
      return "SETUP / CONFLICT";
    }

    if (sceneNumber === 3) {
      return "ESCALATION / TURNING POINT";
    }

    return "CLIMAX / ENDING";
  }

  if (totalScenes === 5) {
    if (sceneNumber === 1) {
      return "HOOK / OPENING";
    }

    if (sceneNumber === 2) {
      return "SETUP";
    }

    if (sceneNumber === 3) {
      return "CONFLICT / ESCALATION";
    }

    if (sceneNumber === 4) {
      return "TURNING POINT / CLIMAX BUILD";
    }

    return "CLIMAX / ENDING";
  }

  if (totalScenes === 6) {
    if (sceneNumber === 1) {
      return "HOOK / OPENING";
    }

    if (sceneNumber === 2) {
      return "SETUP";
    }

    if (sceneNumber === 3) {
      return "CONFLICT";
    }

    if (sceneNumber === 4) {
      return "ESCALATION";
    }

    if (sceneNumber === 5) {
      return "TURNING POINT / CLIMAX BUILD";
    }

    return "CLIMAX / ENDING";
  }

  if (sceneNumber === 1) {
    return "HOOK / OPENING";
  }

  if (sceneNumber === 2) {
    return "SETUP";
  }

  if (
    sceneNumber ===
    totalScenes - 1
  ) {
    return "TURNING POINT / CLIMAX BUILD";
  }

  if (
    sceneNumber ===
    totalScenes
  ) {
    return "CLIMAX / ENDING";
  }

  if (
    sceneNumber >
    Math.ceil(totalScenes * 0.65)
  ) {
    return "ESCALATION";
  }

  return "CONFLICT / DEVELOPMENT";
};

/* =========================================================
   STORY OBJECTIVE
   ========================================================= */

const getSceneObjective = (
  sceneNumber: number,
  totalScenes: number,
  action: string
): string => {
  if (totalScenes <= 1) {
    return [
      "Introduce the story immediately.",
      "Create a strong visual hook.",
      `Deliver the central action: ${action}`,
      "Resolve the story within the same scene.",
    ].join("\n");
  }

  if (sceneNumber === 1) {
    return [
      "Grab attention immediately.",
      "Introduce the protagonist and the visual world.",
      "Establish the initial situation.",
      "Create a clear question or curiosity that makes the viewer want to continue.",
    ].join("\n");
  }

  if (
    sceneNumber === 2 &&
    totalScenes >= 3
  ) {
    return [
      "Move the protagonist into the main situation.",
      "Establish the goal, problem, relationship, or discovery.",
      `Use meaningful action: ${action}`,
      "Make the story direction clear without unnecessary exposition.",
    ].join("\n");
  }

  if (
    sceneNumber ===
    totalScenes
  ) {
    return [
      "Deliver the main payoff.",
      "Resolve or transform the central conflict.",
      "Make the ending feel earned by the previous scenes.",
      "Leave a memorable emotional or visual impression.",
    ].join("\n");
  }

  if (
    sceneNumber ===
    totalScenes - 1
  ) {
    return [
      "Create the final escalation.",
      "Force the story toward its decisive moment.",
      "Increase emotional or physical stakes.",
      `Use meaningful action: ${action}`,
      "Prepare the viewer for the final payoff.",
    ].join("\n");
  }

  return [
    "Advance the central story.",
    "Increase stakes or reveal new information.",
    `Use meaningful action: ${action}`,
    "Create visible consequences from the previous scene.",
    "Move the story closer to the climax.",
  ].join("\n");
};

/* =========================================================
   STORY PROGRESS
   ========================================================= */

const getStoryProgress = (
  sceneNumber: number,
  totalScenes: number
): string => {
  if (totalScenes <= 1) {
    return "Complete story arc compressed into one cinematic scene.";
  }

  if (sceneNumber === 1) {
    return "The story begins and establishes the hook.";
  }

  if (
    sceneNumber === 2 &&
    totalScenes <= 4
  ) {
    return "The initial situation develops into the main problem or objective.";
  }

  if (sceneNumber === 2) {
    return "The protagonist enters the main journey and understands what is at stake.";
  }

  if (
    sceneNumber ===
    totalScenes
  ) {
    return "The central conflict reaches its payoff and the story resolves.";
  }

  if (
    sceneNumber ===
    totalScenes - 1
  ) {
    return "The story reaches its decisive turning point and prepares for the final payoff.";
  }

  if (
    sceneNumber >
    Math.ceil(totalScenes * 0.65)
  ) {
    return "The stakes rise rapidly and the story moves toward the climax.";
  }

  return "The central conflict develops and produces consequences that push the story forward.";
};

/* =========================================================
   EMOTIONAL BEAT
   ========================================================= */

const getEmotionalBeat = (
  sceneNumber: number,
  totalScenes: number,
  expression: string
): string => {
  if (totalScenes <= 1) {
    return [
      "Immediate emotional hook.",
      "Emotion must evolve visibly toward a satisfying payoff.",
      expression,
    ].join("\n");
  }

  if (sceneNumber === 1) {
    return [
      "Curiosity, surprise, anticipation, or immediate emotional interest.",
      expression,
    ].join("\n");
  }

  if (
    sceneNumber === 2
  ) {
    return [
      "Growing curiosity, concern, excitement, or uncertainty.",
      expression,
    ].join("\n");
  }

  if (
    sceneNumber ===
    totalScenes
  ) {
    return [
      "Strongest emotional payoff of the story.",
      "Emotion must feel earned by everything that happened before.",
      expression,
    ].join("\n");
  }

  if (
    sceneNumber ===
    totalScenes - 1
  ) {
    return [
      "High tension, urgency, fear, determination, hope, or emotional confrontation.",
      expression,
    ].join("\n");
  }

  return [
    "Emotion intensifies naturally from the previous scene.",
    "The character must visibly react to the consequences of the story.",
    expression,
  ].join("\n");
};

/* =========================================================
   CAMERA ENGINE
   ========================================================= */

const getCameraDirection = (
  sceneNumber: number,
  totalScenes: number,
  camera: string
): string => {
  const base =
    clean(camera) ||
    "Controlled cinematic camera movement with purposeful framing.";

  if (totalScenes <= 1) {
    return [
      base,
      "Use a strong cinematic hero composition.",
      "Begin with an immediately readable visual hook.",
      "End with a clear visual payoff.",
    ].join("\n");
  }

  if (sceneNumber === 1) {
    return [
      base,
      "Establish the world quickly.",
      "Use a visually strong opening composition.",
      "Clearly introduce the main character and the central situation.",
      "Prefer a controlled push-in, tracking shot, or reveal when appropriate.",
    ].join("\n");
  }

  if (
    sceneNumber ===
    totalScenes
  ) {
    return [
      base,
      "Use cinematic hero framing.",
      "Prioritize the emotional payoff.",
      "Make the final composition visually memorable.",
      "Avoid unnecessary camera movement that weakens the ending.",
    ].join("\n");
  }

  if (
    sceneNumber ===
    totalScenes - 1
  ) {
    return [
      base,
      "Increase visual tension.",
      "Use purposeful movement toward the decisive action.",
      "Framing should make the stakes immediately readable.",
    ].join("\n");
  }

  return [
    base,
    "Use cinematic coverage that supports the current story beat.",
    "Every camera movement must have a narrative purpose.",
    "Avoid random camera movement.",
  ].join("\n");
};

/* =========================================================
   MOTION ENGINE
   ========================================================= */

const getMotionDirection = (
  sceneNumber: number,
  totalScenes: number,
  action: string
): string => {
  if (totalScenes <= 1) {
    return [
      `Primary action: ${action}`,
      "Movement must establish the story and resolve its central beat.",
      "Use believable body mechanics.",
      "Movement must have a clear beginning, middle, and end.",
    ].join("\n");
  }

  if (sceneNumber === 1) {
    return [
      "Introduce the character through natural physical behavior.",
      `Story action: ${action}`,
      "Movement should immediately communicate the situation.",
      "Avoid unnecessary motion.",
    ].join("\n");
  }

  if (
    sceneNumber ===
    totalScenes
  ) {
    return [
      `Climactic action: ${action}`,
      "Movement should feel decisive and emotionally meaningful.",
      "Use believable momentum and physical reaction.",
      "End in a stable state that communicates the story resolution.",
    ].join("\n");
  }

  return [
    `Primary action: ${action}`,
    "Action must visibly change the situation.",
    "Use natural body mechanics.",
    "Maintain believable momentum.",
    "Characters must interact correctly with the environment and props.",
    "Avoid static behavior unless intentional for the story.",
  ].join("\n");
};

/* =========================================================
   START STATE
   ========================================================= */

const getStartState = (
  sceneNumber: number,
  totalScenes: number
): string => {
  if (sceneNumber === 1) {
    return [
      "Opening state.",
      "Characters and environment are introduced in their initial physical positions.",
      "No unexplained previous action.",
      "Establish a clean visual starting frame for image generation.",
    ].join("\n");
  }

  return [
    `Begin from the physical and emotional result of Scene ${sceneNumber - 1}.`,
    "Preserve character positions and orientation where physically appropriate.",
    "Preserve wardrobe, props, environment, lighting, geography, and time of day.",
    "Do not teleport characters or objects.",
    "The first frame must logically continue from the previous scene.",
  ].join("\n");
};

/* =========================================================
   END STATE
   ========================================================= */

const getEndState = (
  sceneNumber: number,
  totalScenes: number,
  action: string
): string => {
  if (
    totalScenes <= 1
  ) {
    return [
      "Story resolves within this scene.",
      `Final action result: ${action}`,
      "End on a visually stable and memorable composition.",
    ].join("\n");
  }

  if (
    sceneNumber ===
    totalScenes
  ) {
    return [
      "Final story state.",
      "The main conflict has reached its payoff.",
      "Characters finish in a visually and emotionally readable state.",
      "The final frame should feel intentional and complete.",
    ].join("\n");
  }

  return [
    "The action must leave a concrete consequence.",
    "Characters end in a physical and emotional state that can naturally become the starting state of the next scene.",
    `Result of action: ${action}`,
    "Do not end with unexplained character or prop changes.",
  ].join("\n");
};

/* =========================================================
   CONTINUITY
   ========================================================= */

const getContinuity = (
  sceneNumber: number,
  totalScenes: number
): string => {
  if (sceneNumber === 1) {
    return [
      "Establish the permanent visual baseline.",
      "Lock character identity, wardrobe, props, environment, geography, lighting, and time of day.",
      "This scene becomes the reference point for all following scenes.",
    ].join("\n");
  }

  if (
    sceneNumber ===
    totalScenes
  ) {
    return [
      `Continue directly from Scene ${sceneNumber - 1}.`,
      "Preserve all established visual identities.",
      "Resolve the story without introducing unexplained elements.",
      "Final scene must remain inside the same physical universe.",
    ].join("\n");
  }

  return [
    `Continue directly from Scene ${sceneNumber - 1}.`,
    `Prepare a logical transition into Scene ${sceneNumber + 1}.`,
    "Preserve character identity.",
    "Preserve wardrobe.",
    "Preserve body proportions.",
    "Preserve props.",
    "Preserve environment.",
    "Preserve geography.",
    "Preserve lighting direction.",
    "Preserve time of day unless the story explicitly changes it.",
    "Any change must have a visible narrative cause.",
  ].join("\n");
};

/* =========================================================
   MAIN STORYBOARD GENERATOR
   ========================================================= */

export const generateStoryboard = (
  totalScenes: number,
  character: string,
  world: string,
  action: string,
  expression: string,
  camera: string,
  storyBlueprint = ""
) => {
  const safeTotalScenes =
    Math.max(
      1,
      Math.min(
        10,
        Math.floor(
          Number(totalScenes) || 4
        )
      )
    );

  const blueprint = clean(storyBlueprint);

  const storyDirectorDirective = blueprint
    ? [
        "STORY DIRECTOR BLUEPRINT — DYNAMIC SOURCE OF TRUTH",
        blueprint,
        "",
        "Do not force every scene to use every beat in this blueprint.",
        "Distribute the dramatic beats according to the requested scene count.",
        "Each scene must introduce a meaningful causal change.",
        "Do not create filler scenes just to reach the scene count.",
        "A visual opportunity may be used only when the current dramatic beat naturally supports it.",
        "Camera choices must emerge from the story beat, not dictate the story beat.",
      ].join("\n")
    : [
        "STORY DIRECTOR MODE",
        "No hidden blueprint supplied. Infer a coherent causal spine from the concept, genre, character goal, conflict, and requested scene count.",
        "Do not invent disconnected spectacle.",
      ].join("\n");

  const scenes: StoryboardScene[] =
    [];

  for (
    let i = 1;
    i <= safeTotalScenes;
    i++
  ) {
    const role =
      getSceneRole(
        i,
        safeTotalScenes
      );

    const objective =
      getSceneObjective(
        i,
        safeTotalScenes,
        action
      );

    const storyProgress =
      getStoryProgress(
        i,
        safeTotalScenes
      );

    const emotionalBeat =
      getEmotionalBeat(
        i,
        safeTotalScenes,
        expression
      );

    const cameraDirection =
      getCameraDirection(
        i,
        safeTotalScenes,
        camera
      );

    const motion =
      getMotionDirection(
        i,
        safeTotalScenes,
        action
      );

    const startState =
      getStartState(
        i,
        safeTotalScenes
      );

    const endState =
      getEndState(
        i,
        safeTotalScenes,
        action
      );

    const continuity =
      getContinuity(
        i,
        safeTotalScenes
      );

    let description = "";

    if (i === 1) {
      description = [
        "OPENING / HOOK",
        "",
        "Introduce the story world immediately.",
        "Show the main character and the central situation without unnecessary exposition.",
        "",
        "CHARACTER SYSTEM:",
        character,
        "",
        "WORLD SYSTEM:",
        world,
        "",
        "The opening must create immediate visual curiosity.",
      ].join("\n");
    } else if (
      i === safeTotalScenes
    ) {
      description = [
        "CLIMAX / ENDING",
        "",
        "Deliver the strongest story payoff.",
        "Resolve the central conflict or complete the central objective.",
        "",
        "CHARACTER SYSTEM:",
        character,
        "",
        "ACTION:",
        action,
        "",
        "EMOTIONAL DIRECTION:",
        expression,
        "",
        "The ending must feel earned, memorable, and visually satisfying.",
      ].join("\n");
    } else {
      description = [
        role,
        "",
        "Advance the story through visible action and consequences.",
        "",
        "CHARACTER SYSTEM:",
        character,
        "",
        "WORLD SYSTEM:",
        world,
        "",
        "ACTION:",
        action,
        "",
        "EMOTIONAL DIRECTION:",
        expression,
        "",
        "Every scene must change the story state.",
        "Avoid scenes that exist only as visual filler.",
      ].join("\n");
    }

    description = [description, "", storyDirectorDirective].join("\n");

    scenes.push({
      sceneNumber: i,

      role,

      description,

      objective,

      storyProgress,

      emotionalBeat,

      camera:
        cameraDirection,

      motion,

      emotion:
        expression,

      startState,

      endState,

      continuity,
    });
  }

  return scenes
    .map(
      (scene) =>
        `ADEGAN ${String(
          scene.sceneNumber
        ).padStart(2, "0")}

==================================================
STORY ROLE
==================================================

${scene.role}

==================================================
DESCRIPTION
==================================================

${scene.description}

==================================================
OBJECTIVE
==================================================

${scene.objective}

==================================================
STORY PROGRESS
==================================================

${scene.storyProgress}

==================================================
EMOTIONAL BEAT
==================================================

${scene.emotionalBeat}

==================================================
START STATE
==================================================

${scene.startState}

==================================================
ACTION / MOTION
==================================================

${scene.motion}

==================================================
CAMERA
==================================================

${scene.camera}

==================================================
END STATE
==================================================

${scene.endState}

==================================================
CONTINUITY
==================================================

${scene.continuity}

CHARACTER CONTINUITY:
- Same face
- Same hairstyle
- Same age
- Same body proportions
- Same wardrobe
- Same accessories
- Same visual signature

WORLD CONTINUITY:
- Same architecture
- Same geography
- Same scale
- Same materials
- Same atmosphere
- Same environmental language

PHYSICAL CONTINUITY:
- No teleportation
- No unexplained prop changes
- No unexplained wardrobe changes
- No unexplained environment changes
- No unexplained time changes
- No random character introduction`
    )
    .join(
      "\n\n------------------------------\n\n"
    );
};

/* =========================================================
   SCENE BLUEPRINT
   ========================================================= */

export const generateSceneBlueprint = (
  form: AnimationForm
) => {
  const totalScenes =
    Math.max(
      1,
      Math.min(
        10,
        Math.floor(
          Number(form.scenes) || 4
        )
      )
    );

  return Array.from(
    {
      length: totalScenes,
    },
    (_, index) => {
      const sceneNumber =
        index + 1;

      return {
        sceneNumber,

        role:
          getSceneRole(
            sceneNumber,
            totalScenes
          ),

        duration:
          form.duration,

        camera:
          form.camera,

        lighting:
          form.lighting,

        animationStyle:
          form.animationStyle,

        audio:
          form.audio,
      };
    }
  );
};
