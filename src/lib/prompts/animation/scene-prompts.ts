import { STORYBOARD_EXECUTION_RULES } from "@/lib/prompts/storyboard-system";
import type {
  AnimationForm,
  AnimationDialogueScript,
  AnimationScenePrompt,
} from "./types";

/* =========================================================
   DRIACOM ANIMATION — SCENE PROMPT ENGINE
   FINAL SCRIPT-INTEGRATED VERSION

   RULE:
   - Story progression lives inside every scene
   - Image Prompt = exact START FRAME
   - Video Prompt = motion + story + dialogue/narration
   - Dialogue Prompt = dedicated script output
   - AI script is inserted into Video Prompt
   - Script is matched by sceneNumber
   ========================================================= */

const clean = (value: unknown): string =>
  String(value ?? "").trim();

const compact = (text: string): string =>
  text
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

const getVisualStyleProfile = (style: string): string => {
  const profiles: Record<string, string> = {
    "Pixar Inspired 3D":
      "Stylized feature-animation 3D, expressive faces, appealing natural proportions, tactile materials, polished family-film rendering, warm cinematic readability.",
    "Little Giants 3D":
      "Chibi/stylized 3D with expressive feature proportions, compact silhouettes, smooth tactile materials, playful facial readability, vibrant yet atmospheric lighting.",
    "Minecraft 3D":
      "Voxel-based 3D language, block geometry, pixel-like surface logic, cubic environments, readable silhouettes, physically coherent voxel lighting.",
    "Roblox 3D":
      "Roblox-inspired 3D character language, simplified geometric bodies, clean readable forms, game-like materials, expressive but structurally simple faces.",
    "3D Cartoon":
      "Stylized cartoon 3D, simplified shapes, clear silhouettes, exaggerated but coherent expressions, soft materials, playful readable rendering.",
    "Stop Motion":
      "Handcrafted stop-motion aesthetic, tactile miniature materials, subtle handmade imperfections, physical puppet/clay feel, frame-by-frame charm and practical-lighting character.",
  };

  return profiles[style] || profiles["Pixar Inspired 3D"];
};


/* =========================================================
   V4 — GENRE-AWARE CINEMATOGRAPHY ENGINE
   Camera is a storytelling system, not decoration.
   ========================================================= */

const getGenreCameraDNA = (
  genre: string,
  sceneNumber: number,
  totalScenes: number,
  userCamera: string
): string => {
  const g = genre.toLowerCase();
  const base = clean(userCamera);

  let family = "cinematic narrative";
  let emotionalGoal = "clarity, immersion, and purposeful visual storytelling";
  let angles = "wide establishing, medium, over-the-shoulder, close-up, motivated tracking";
  let movements = "dolly, tracking, controlled push-in, pull-back, orbit when motivated";
  let forbidden = "repetitive centered medium shots, random zooms, unmotivated movement";

  if (/horror|horor|scary|supernatural|ghost|seram/.test(g)) {
    family = "psychological horror cinematography";
    emotionalGoal = "dread, uncertainty, vulnerability, anticipation, and controlled fear";
    angles = "low angle, Dutch angle, over-the-shoulder, POV, obstructed framing, negative-space framing, partial reveal";
    movements = "creeping push-in, slow lateral reveal, restrained tracking, subtle handheld escalation, delayed reveal";
    forbidden = "constant handheld shake, generic slow zoom in every scene, bright flat framing, repetitive eye-level shots";
  } else if (/thriller|suspense|crime|mystery|misteri/.test(g)) {
    family = "suspense / thriller cinematography";
    emotionalGoal = "uncertainty, pressure, anticipation, information control, and urgency";
    angles = "tight close-up, over-the-shoulder, POV, asymmetric framing, long-lens compression, partial obstruction";
    movements = "slow push-in, stalking tracking, controlled handheld, lateral reveal, sudden motivated reframing";
    forbidden = "random camera shake, repetitive frontal medium shots, unmotivated 360-degree movement";
  } else if (/action|aksi|adventure|petualangan|war|battle/.test(g)) {
    family = "dynamic action / adventure cinematography";
    emotionalGoal = "energy, impact, spatial clarity, momentum, scale, and physical stakes";
    angles = "low angle, wide action framing, tracking, over-the-shoulder, impact close-up, aerial or elevated reveal when justified";
    movements = "tracking, crane rise, whip-pan only for a motivated transition, orbit, rapid reframing, controlled follow-cam";
    forbidden = "unreadable shake, random speed ramps, constant close-ups, camera movement without physical motivation";
  } else if (/romance|romantis|love|cinta/.test(g)) {
    family = "intimate romantic cinematography";
    emotionalGoal = "connection, vulnerability, warmth, anticipation, and emotional intimacy";
    angles = "intimate close-up, two-shot, over-the-shoulder, soft profile, gentle wide framing";
    movements = "slow dolly-in, gentle lateral slide, subtle orbit, restrained pull-back";
    forbidden = "aggressive shake, excessive Dutch angles, random whip-pans, overly wide distant framing during intimate beats";
  } else if (/comedy|komedi|funny|lucu/.test(g)) {
    family = "comedic visual timing cinematography";
    emotionalGoal = "timing, reaction, surprise, readability, and playful energy";
    angles = "wide reaction shot, medium two-shot, reaction close-up, slightly unexpected angle, clean profile";
    movements = "quick motivated push-in, short pull-back, snap reframing, controlled tracking";
    forbidden = "constant dramatic slow motion, random shake, over-cinematic movement that hides the joke";
  } else if (/drama|dramatis|emotional|family|keluarga/.test(g)) {
    family = "emotional drama cinematography";
    emotionalGoal = "empathy, intimacy, emotional weight, and reflective pacing";
    angles = "medium close-up, intimate close-up, over-the-shoulder, restrained wide shot, profile";
    movements = "slow dolly-in, subtle lateral slide, restrained pull-back, almost-static hold when emotion needs space";
    forbidden = "constant movement, random Dutch angles, aggressive zooms, spectacle without emotional purpose";
  } else if (/fantasy|magical|magic|fantasi/.test(g)) {
    family = "cinematic fantasy cinematography";
    emotionalGoal = "wonder, discovery, scale, beauty, and magical immersion";
    angles = "wide environmental reveal, low hero angle, floating perspective, orbit, close-up detail";
    movements = "slow crane, floating tracking, elegant orbit, reveal pull-back, controlled push-in";
    forbidden = "generic drone movement every scene, random orbiting, flat eye-level coverage";
  } else if (/documentary|dokumenter|realistic|realistis/.test(g)) {
    family = "observational documentary cinematography";
    emotionalGoal = "authenticity, presence, clarity, and believable observation";
    angles = "natural eye-level, observational medium, wide context, restrained close-up";
    movements = "subtle handheld, natural tracking, restrained pan, motivated reframing";
    forbidden = "excessive cinematic spins, random Dutch angles, artificial spectacle";
  }

  const pattern = [
    "establishing / spatial context",
    "relationship / over-the-shoulder",
    "emotion / close-up or POV",
    "dynamic reveal / tracking",
    "peak perspective / strongest dramatic angle",
    "resolution / wider emotional release",
  ];

  const phase = totalScenes <= 1
    ? pattern[0]
    : pattern[Math.min(sceneNumber - 1, pattern.length - 1)];

  return compact(`
GENRE-AWARE CAMERA DNA — V4

GENRE:
${genre || "General cinematic"}

CAMERA LANGUAGE:
${family}

PRIMARY AUDIENCE EFFECT:
${emotionalGoal}

ALLOWED ANGLE / FRAMING FAMILY:
${angles}

ALLOWED MOVEMENT FAMILY:
${movements}

CURRENT SCENE CAMERA PHASE:
${phase}

USER CAMERA PREFERENCE:
${base || "No fixed user camera preference; choose the most emotionally effective option."}

CAMERA DECISION RULE:
Choose the camera angle, framing, lens feel, height, distance, and movement that best
create the intended audience emotion for THIS scene. Do not repeat the same shot language
just because it is cinematic.

CAMERA VARIATION MEMORY:
Across adjacent scenes, deliberately vary framing, angle, distance, and movement when the
story allows. Repetition is allowed only when it creates continuity or emphasis.

MOTIVATION RULE:
Every camera movement must have a narrative reason tied to character action, threat,
reveal, emotion, geography, or pacing. Never use movement only to sound cinematic.

EMOTION-CAMERA LINK:
The camera must help the audience FEEL the scene, not merely observe it.

CAMERA EMOTION TEST:
Before choosing the final shot, determine the intended audience sensation for this beat
(e.g. dread, panic, wonder, intimacy, relief, urgency). Choose framing, camera height,
lens feel, distance, occlusion, reveal timing, and movement to produce that sensation.
A camera move is valid only when it contributes to story information, emotion, or spatial
understanding. Avoid repeating the same angle pattern across scenes without a reason.

AVOID:
${forbidden}
`).trim();
};


/* =========================================================
   V8.3.7 — HARD CHARACTER CONSISTENCY + DIRECTOR CAMERA
   Identity is immutable; Scene State is temporary.
   ========================================================= */

const getHardCharacterConsistencyLock = (
  characterDesign: string,
  style: string
): string => compact(`
HARD CHARACTER CONSISTENCY LOCK — V8.3.7

SOURCE OF TRUTH:
The CHARACTER SYSTEM below is the canonical production identity.
It overrides creative improvisation.

CHARACTER SYSTEM:
${characterDesign}

IMMUTABLE IDENTITY RULE:
Every named character must remain the exact same physical character across every
scene and every camera angle.

The following must NEVER be changed, substituted, generalized, or creatively
reinterpreted:
- character ID and name
- age and apparent age
- gender
- face shape and facial feature proportions
- eye color, size, spacing, and shape
- nose, mouth, jaw, ears, and eyebrows
- hairstyle, hair color, length, and silhouette
- skin tone/material
- body height, build, proportions, and silhouette
- wardrobe names, colors, materials, construction, and distinctive details
- shoes
- permanent accessories, their material/color, identity, and attachment point
- established visual signature and color DNA
- selected visual style: ${style}

CANONICAL MATERIAL / COLOR LOCK:
If the CHARACTER SYSTEM says an object is BRASS, it remains BRASS.
If it says GOLD, it remains GOLD.
If it says BROWN LEATHER, it remains BROWN LEATHER.
Never replace a canonical material or color with a visually similar synonym
such as silver, chrome, steel, black metal, or another invented material.

ACCESSORY STATE RULE:
A permanent accessory may be:
- held
- worn
- attached
- placed down
- temporarily out of frame
- transferred through an explicit visible action

Changing its current scene state does NOT change its canonical identity.
If an accessory is visible, reproduce its canonical material, color, design,
and attachment/handling relationship exactly.

NO RE-DESIGN RULE:
A new camera angle is NOT a redesign opportunity.
A back view must be the physical back of the established character.
A side view must preserve the same head volume, body volume, clothing construction,
and accessory geometry.
Do not "improve", beautify, age, de-age, simplify, or realistic-convert the character.

SCENE STATE RULE:
Only these may change according to the story:
pose, gaze, expression, emotion intensity, physical action, temporary dirt/wetness/damage,
current prop possession, and temporary environmental interaction.

STYLE HARD LOCK:
${style} must remain visually consistent from master sheet to image prompt to video prompt.
Do not drift toward photorealism/live action, realistic humans, generic CGI, anime,
2D illustration, or another style.

FINAL CHARACTER CHECK:
Before finalizing the prompt, compare every visible character and important accessory
against the CHARACTER SYSTEM. If a generated detail conflicts with the source of truth,
discard the conflicting detail and use the canonical detail instead.
`).trim();

const getDirectorShotDirective = (
  genre: string,
  sceneNumber: number,
  totalScenes: number
): string => {
  const g = genre.toLowerCase();

  const horror = /horror|horor|scary|supernatural|ghost|seram/.test(g);
  const thriller = /thriller|suspense|crime|mystery|misteri/.test(g);
  const action = /action|aksi|adventure|petualangan|battle|war/.test(g);
  const romance = /romance|romantis|love|cinta/.test(g);
  const comedy = /comedy|komedi|funny|lucu/.test(g);
  const fantasy = /fantasy|magical|magic|fantasi/.test(g);

  const phase = totalScenes <= 1
    ? 0
    : Math.min(sceneNumber - 1, 5);

  if (horror) {
    const shots = [
      "ESTABLISHING DREAD: wide vertical composition with foreground obstruction and generous negative space. Keep the characters readable but make the environment feel larger and potentially threatening. Use a very slow creeping dolly-in.",
      "UNEASY FOLLOW: medium over-the-shoulder framing from slightly behind and below the characters. Let the background contain ambiguous negative space. Use a restrained lateral creep rather than a generic push-in.",
      "THREAT PROXIMITY: tight three-quarter close-up or restricted POV with shallow visual isolation. Hold just long enough for the audience to notice a suspicious detail, then make a tiny motivated reframing.",
      "REVEAL: partially obstructed composition where an environmental element or darkness hides part of the threat. Use a slow lateral reveal or controlled rack-focus relationship between foreground and subject.",
      "PANIC / PEAK TENSION: low or asymmetric angle with compressed distance and subtle handheld instability. The camera reacts to the character's physical fear, but remains readable and never shakes continuously.",
      "AFTERMATH / RELEASE: gradually widen from the final emotional state, restoring spatial context while preserving one unsettling area of negative space. Movement slows instead of resetting to a new visual language.",
    ];
    return compact(`
DIRECTOR SHOT PLAN — HORROR — SCENE ${String(sceneNumber).padStart(2,"0")}

PRIMARY SHOT:
${shots[phase]}

HORROR CAMERA PURPOSE:
Make the audience feel the threat before or while they understand it.
Use perspective, occlusion, distance, camera height, and reveal timing as storytelling tools.

MANDATORY VARIATION:
Do not repeat the same camera angle + distance + movement combination in adjacent scenes
unless continuity specifically requires it. Change at least TWO of:
angle, height, distance, framing, movement, foreground obstruction, or lens feel.

HORROR RESTRAINT:
Fear comes from anticipation and visual uncertainty, not constant camera shake.
Use handheld instability only at a meaningful escalation point.

DO NOT:
Use the same centered eye-level medium shot, generic push-in, random zoom, or constant
handheld movement as the default for every horror scene.
`).trim();
  }

  if (thriller) {
    const shots = [
      "wide asymmetric establishing frame with visual information hidden at the edge",
      "over-the-shoulder stalking frame with compressed depth",
      "tight close-up / POV that withholds important information",
      "lateral reveal around an obstruction",
      "controlled handheld pressure shot during the peak threat",
      "wider release frame showing the consequence",
    ];
    return compact(`
DIRECTOR SHOT PLAN — THRILLER — SCENE ${String(sceneNumber).padStart(2,"0")}
SHOT:
${shots[phase]}
Choose camera height, distance and movement to control what the audience knows.
Vary at least TWO camera properties from adjacent scenes.
Avoid repetitive frontal medium shots and unmotivated camera movement.
`).trim();
  }

  if (action) {
    const shots = [
      "wide low-angle establishing shot preserving spatial geography",
      "tracking medium shot matching the protagonist's movement",
      "dynamic three-quarter angle emphasizing speed and obstacle",
      "low follow-cam or lateral tracking through the action",
      "impact close-up followed by a motivated wider reveal",
      "stable wide aftermath showing the new spatial state",
    ];
    return compact(`
DIRECTOR SHOT PLAN — ACTION / ADVENTURE — SCENE ${String(sceneNumber).padStart(2,"0")}
SHOT:
${shots[phase]}
Prioritize readable geography and physical cause-and-effect.
Vary framing and movement without sacrificing spatial clarity.
`).trim();
  }

  if (romance) {
    const shots = [
      "gentle two-shot with comfortable spatial intimacy",
      "over-the-shoulder close framing emphasizing eye contact",
      "soft profile close-up focused on subtle expression",
      "slow lateral slide revealing emotional connection",
      "intimate close-up with restrained movement",
      "gentle pull-back giving emotional breathing room",
    ];
    return compact(`
DIRECTOR SHOT PLAN — ROMANCE — SCENE ${String(sceneNumber).padStart(2,"0")}
SHOT:
${shots[phase]}
Prioritize emotional connection and natural eye lines.
Avoid repetitive framing and aggressive camera movement.
`).trim();
  }

  if (comedy) {
    const shots = [
      "wide readable setup establishing the comic situation",
      "medium reaction two-shot",
      "reaction close-up timed to the joke",
      "slightly unexpected angle revealing the consequence",
      "quick motivated reframing to the strongest reaction",
      "wider aftermath that lets the joke land",
    ];
    return compact(`
DIRECTOR SHOT PLAN — COMEDY — SCENE ${String(sceneNumber).padStart(2,"0")}
SHOT:
${shots[phase]}
Camera timing must support the comedic beat.
Avoid over-dramatic movement that obscures the joke.
`).trim();
  }

  if (fantasy) {
    const shots = [
      "wide environmental reveal establishing scale and wonder",
      "low hero angle connecting character to the world",
      "floating three-quarter perspective around a magical detail",
      "slow reveal from environment to character",
      "large-scale perspective emphasizing the magical payoff",
      "wider emotional release showing the transformed space",
    ];
    return compact(`
DIRECTOR SHOT PLAN — FANTASY — SCENE ${String(sceneNumber).padStart(2,"0")}
SHOT:
${shots[phase]}
Camera should reveal scale and wonder without becoming random spectacle.
`).trim();
  }

  return compact(`
DIRECTOR SHOT PLAN — GENERAL CINEMATIC — SCENE ${String(sceneNumber).padStart(2,"0")}

Choose a shot that serves the current emotional beat and story information.
Vary at least TWO of angle, height, distance, framing, movement, or lens feel from
the immediately preceding scene when continuity allows.

Never use "cinematic" as a substitute for a concrete camera decision.
`).trim();
};

const getSpeechTimingGuard = (
  script: AnimationDialogueScript,
  duration: string
): string => {
  const spoken = [
    clean(script.narrator),
    ...script.dialogue.map((line) => clean(line.text)),
  ].filter(Boolean).join(" ");

  const words = spoken ? spoken.split(/\s+/).filter(Boolean).length : 0;
  const secondsMatch = duration.match(/[\d.]+/);
  const seconds = secondsMatch ? Number(secondsMatch[0]) : 8;
  const maxComfortableWords = Math.max(1, Math.floor(seconds * 2.2));

  return compact(`
SPEECH TIMING GUARD

SCENE DURATION:
${duration}

APPROXIMATE SPOKEN WORD COUNT:
${words}

COMFORTABLE TARGET:
Approximately ${maxComfortableWords} words for natural Indonesian delivery at this duration.

RULE:
Do not cram speech unnaturally into the scene.
If the supplied script is longer than the comfortable target, prioritize clear delivery,
natural pauses, and emotional performance. Do not speed the voice into an unnatural
machine-gun delivery and do not cut the final words abruptly.
Synchronize mouth movement to the actual spoken words.
`).trim();
};

/* =========================================================
   V4 — MASTER VOICE DNA
   One story must sound like one production.
   ========================================================= */

const getMasterVoiceDNA = (form: AnimationForm): string => {
  const language = clean(form.language) || "Bahasa Indonesia";
  const speaker = clean(form.speakerMode) || "Ada karakter yang bicara";

  const narrationEnabled = /narator/i.test(speaker) || /narasi/i.test(clean(form.audio));
  const characterEnabled = /karakter/i.test(speaker);

  return compact(`
MASTER VOICE DNA — V4

LANGUAGE:
${language}

SPEAKER CONFIGURATION:
${speaker}

NARRATOR:
${narrationEnabled ? "ENABLED" : "DISABLED"}

CHARACTER VOICES:
${characterEnabled ? "ENABLED" : "DISABLED"}

VOICE CONTINUITY:
If narration is enabled, use ONE narrator identity for the entire story.
Do not create a new narrator voice per scene.
Preserve the same perceived gender, age, pitch range, timbre, accent, pronunciation,
recording character, speaking rhythm, and vocal texture across every scene.

Narrator may change EMOTIONAL DELIVERY only:
calm → curious → tense → urgent → relieved, as required by the story.
Identity must not change.

If character voices are enabled, each established character keeps ONE voice identity.
Never swap voice identities between scenes.

AUDIO TRANSITION:
Continue the same voice identity naturally from the previous scene. Do not make every
scene sound like a separate recording session.
`).trim();
};

/* =========================================================
   V4 — STORY STATE / OBJECT / ACTION BRIDGE
   ========================================================= */

const getContinuityLedger = (
  sceneNumber: number,
  totalScenes: number,
  character: string,
  world: string,
  actionRule: string
): string => {
  if (sceneNumber === 1) {
    return compact(`
STORY STATE LEDGER — SCENE 01

INITIALIZE THE WORLD STATE:
Create the canonical baseline for every established character, location, important object,
and environmental condition.

CHARACTER STATE:
- identity / appearance
- exact position
- facing direction
- pose
- emotion
- current goal
- physical condition

OBJECT STATE:
For every important prop introduced in this scene, establish:
- object identity
- owner / holder
- exact location
- orientation
- condition
- whether it is being used

WORLD STATE:
- location / geography
- time of day
- weather
- lighting direction
- environmental conditions
- important landmarks

ACTION STATE:
Requested action:
${actionRule}

STATE PERSISTENCE RULE:
Any important element introduced becomes persistent story state until a visible event changes,
removes, transfers, breaks, or consumes it.
`).trim();
  }

  return compact(`
STORY STATE LEDGER — SCENE ${String(sceneNumber).padStart(2, "0")}

INHERIT THE PREVIOUS SCENE'S END STATE AS THE ONLY CANONICAL STARTING STATE.

INHERIT:
- exact character identities
- physical positions and facing direction
- pose / body orientation where physically continuous
- wardrobe / accessories
- emotional and physical condition
- current goal and unresolved problem
- every important prop and its last known owner/location/condition
- environment geography and time
- lighting direction and weather
- established character count

OBJECT PERSISTENCE LOCK:
Do not create, remove, duplicate, teleport, rename, or relocate an important object without
an on-screen cause. If a prop is in a character's hand at the end of the previous scene,
it remains there at the beginning of this scene unless the prompt explicitly shows the transfer.

CHARACTER COUNT LOCK:
Do not add or remove important characters without a story event that explains their arrival,
departure, death, transformation, or duplication.

ACTION BRIDGE:
The opening action of this scene must be the physical consequence of the previous scene's
final action. Avoid invisible jumps such as standing → running, empty hand → holding a prop,
or one location → another location without showing the transition.

STATE UPDATE:
At the end of this scene, explicitly establish what changed:
- position
- emotion
- goal
- risk
- object ownership/location
- environmental condition
- unresolved question

The next scene must inherit this updated state.
`).trim();
};

/* =========================================================
   TITLE
   ========================================================= */

const getTitle = (
  sceneNumber: number,
  totalScenes: number
): string => {
  if (totalScenes === 1) {
    return "Final Shot";
  }

  if (totalScenes === 2) {
    return sceneNumber === 1
      ? "Opening"
      : "Ending";
  }

  if (totalScenes === 3) {
    if (sceneNumber === 1) {
      return "Opening";
    }

    if (sceneNumber === 2) {
      return "Development";
    }

    return "Climax & Ending";
  }

  if (sceneNumber === totalScenes) {
    return "Ending";
  }

  if (sceneNumber === totalScenes - 1) {
    return "Climax";
  }

  const titles = [
    "Opening",
    "Setup",
    "Development",
    "Build Up",
    "Climax",
    "Resolution",
    "Ending",
    "Final Shot",
  ];

  return (
    titles[sceneNumber - 1] ||
    `Scene ${String(sceneNumber).padStart(2, "0")}`
  );
};

/* =========================================================
   PURPOSE
   ========================================================= */

const getPurpose = (
  sceneNumber: number,
  totalScenes: number
): string => {
  if (sceneNumber === 1) {
    return "Opening yang langsung memperkenalkan dunia, karakter utama, situasi dan hook cerita.";
  }

  if (sceneNumber === totalScenes) {
    return "Ending yang menyelesaikan konflik dan memberikan payoff visual serta emosional.";
  }

  if (sceneNumber === totalScenes - 1) {
    return "Climax yang menghadirkan konflik atau tantangan terbesar sebelum penyelesaian.";
  }

  if (sceneNumber === 2) {
    return "Setup yang memperjelas tujuan karakter dan mulai menggerakkan konflik utama.";
  }

  return "Development yang memberikan perkembangan cerita baru dan mendorong karakter menuju konflik berikutnya.";
};

/* =========================================================
   OBJECTIVE
   ========================================================= */

const getObjective = (
  sceneNumber: number,
  totalScenes: number
): string => {
  if (sceneNumber === 1) {
    return "Hook the audience and establish the story clearly.";
  }

  if (sceneNumber === totalScenes) {
    return "Resolve the central conflict and deliver a satisfying visual payoff.";
  }

  if (sceneNumber === totalScenes - 1) {
    return "Create the strongest conflict and prepare the final payoff.";
  }

  return "Advance the story with new visual information and meaningful character action.";
};

/* =========================================================
   EMOTIONAL BEAT
   ========================================================= */

const getEmotionalBeat = (
  sceneNumber: number,
  totalScenes: number
): string => {
  if (sceneNumber === 1) {
    return "Curiosity and anticipation.";
  }

  if (sceneNumber === totalScenes) {
    return "Resolution, relief and emotional payoff.";
  }

  if (sceneNumber === totalScenes - 1) {
    return "Peak tension and urgency.";
  }

  if (sceneNumber === 2) {
    return "Interest, determination and rising tension.";
  }

  return "Increasing emotional engagement and anticipation.";
};

/* =========================================================
   STORY PROGRESSION
   ========================================================= */

const getStoryProgress = (
  sceneNumber: number,
  totalScenes: number,
  concept: string,
  action: string
): string => {
  const story = clean(concept);
  const requestedAction = clean(action);

  if (totalScenes === 1) {
    return `
CERITA:
${story}

ALUR SCENE:
Bangun satu momen lengkap yang langsung memperkenalkan konflik atau tujuan,
mengembangkan aksi utama, lalu memberikan payoff yang terasa selesai.

AKSI UTAMA:
${requestedAction}
`.trim();
  }

  if (sceneNumber === 1) {
    return `
CERITA:
${story}

ALUR SCENE 01:
Perkenalkan karakter utama, dunia, situasi awal dan masalah atau tujuan utama.
Buat hook visual yang langsung membuat penonton memahami apa yang sedang terjadi.

AKSI UTAMA:
${requestedAction}
`.trim();
  }

  if (sceneNumber === 2) {
    return `
CERITA:
${story}

ALUR SCENE 02:
Lanjutkan langsung dari keadaan akhir Scene 01.
Karakter mulai mengambil tindakan untuk mencapai tujuan.
Perkenalkan perkembangan atau hambatan pertama.
Jangan mengulang pembukaan.

AKSI UTAMA:
${requestedAction}
`.trim();
  }

  if (sceneNumber === totalScenes - 1) {
    return `
CERITA:
${story}

ALUR SCENE ${String(sceneNumber).padStart(2, "0")}:
Lanjutkan langsung dari Scene sebelumnya.
Naikkan intensitas menuju konflik terbesar.
Karakter harus aktif menghadapi masalah utama.
Buat konsekuensi visual yang jelas dan persiapkan payoff ending.

AKSI UTAMA:
${requestedAction}
`.trim();
  }

  if (sceneNumber === totalScenes) {
    return `
CERITA:
${story}

ALUR SCENE ${String(sceneNumber).padStart(2, "0")}:
Lanjutkan langsung dari kondisi akhir scene sebelumnya.
Selesaikan konflik utama.
Tampilkan hasil tindakan karakter.
Berikan visual payoff yang jelas dan ending yang memorable.

AKSI UTAMA:
${requestedAction}
`.trim();
  }

  return `
CERITA:
${story}

ALUR SCENE ${String(sceneNumber).padStart(2, "0")}:
Lanjutkan langsung dari kondisi akhir scene sebelumnya.
Tambahkan perkembangan baru yang nyata.
Dorong karakter semakin dekat ke konflik utama atau tujuan cerita.
Jangan mengulang informasi atau aksi dari scene sebelumnya.

AKSI UTAMA:
${requestedAction}
`.trim();
};


/* =========================================================
   MASTER MUSIC DNA — V3.1
   One story = one musical identity.
   Scene-level variation is allowed only through arrangement,
   intensity, layering, and transitions.
   ========================================================= */

const getMasterMusicDNA = (
  audioMode: string,
  totalScenes: number
): string => {
  const musicEnabled = /music|bgm|background/i.test(audioMode);

  if (!musicEnabled) {
    return `
MASTER MUSIC DNA:
BGM IS DISABLED.

Do not invent a background music track.
Use only story-appropriate ambience and scene-specific SFX when requested.
`;
  }

  return `
MASTER MUSIC DNA — GLOBAL STORY RULE

This is ONE continuous soundtrack for ONE story, not a collection of unrelated
scene soundtracks.

MUSICAL IDENTITY:
- One coherent genre and emotional identity across all ${totalScenes} scenes.
- Establish one recurring musical motif that can be recognized throughout the story.
- Keep the same core instrumentation, tonal character, rhythmic language, and
  production aesthetic across the entire story.
- Tempo may subtly evolve, but do not suddenly change into a completely different
  genre, instrumentation family, or musical identity.

CONTINUITY:
- Scene N inherits the musical identity of Scene N-1.
- Do NOT restart the BGM as if a new video has begun.
- Transitions should feel like a continuous soundtrack edit.
- If a scene becomes quiet, reduce layers or intensity instead of replacing the theme.
- If a scene becomes tense, intensify the same musical identity rather than switching
  to unrelated "tension music".
- Preserve the recurring motif whenever musically appropriate.

INTENSITY ARC:
The soundtrack should support the story's global emotional arc:
${Array.from({ length: totalScenes }, (_, i) => {
  const n = i + 1;
  const ratio = totalScenes === 1 ? 0.5 : i / (totalScenes - 1);
  const intensity = Math.round(25 + Math.sin(ratio * Math.PI) * 55);
  return `Scene ${String(n).padStart(2, "0")}: approximately ${intensity}% intensity`;
}).join("\n")}

SCENE-LEVEL VARIATION:
Allowed:
- layer density
- dynamics
- percussion activity
- harmonic tension
- melodic prominence
- reverb/space
- brief rests
- subtle instrumentation emphasis

Not allowed:
- unrelated new song
- unrelated genre
- abrupt BPM identity change
- completely different instrument palette
- musical reset at every scene

SFX / AMBIENCE SEPARATION:
BGM provides STORY UNITY.
SFX provides EVENT IMPACT.
AMBIENCE provides ENVIRONMENTAL REALISM.

SFX and ambience may change per scene. BGM identity must remain coherent.
`;
};

/* =========================================================
   INTERNAL STORY BEAT ENGINE — V3
   =========================================================

   Each scene is treated as a causal mini-story:

   START STATE
   -> TRIGGER
   -> INTENTION
   -> ACTION
   -> REACTION
   -> ESCALATION / COMPLICATION
   -> PAYOFF / NEW INFORMATION
   -> END STATE
   -> NEXT SCENE CAUSE

   The beat is deliberately written as production instruction,
   not as a fixed story. Gemini remains responsible for the
   concrete creative choices.
   ========================================================= */

const getInternalBeat = (
  sceneNumber: number,
  totalScenes: number,
  concept: string,
  action: string
): string => {
  const n = String(sceneNumber).padStart(2, "0");
  const previous = sceneNumber > 1
    ? `Scene ${String(sceneNumber - 1).padStart(2, "0")}`
    : "initial premise";
  const next = sceneNumber < totalScenes
    ? `Scene ${String(sceneNumber + 1).padStart(2, "0")}`
    : "final resolution";

  if (totalScenes === 1) {
    return compact(`
INTERNAL STORY BEAT — SCENE ${n}

STORY SOURCE:
${concept}

CAUSAL CHAIN:
START STATE -> TRIGGER -> INTENTION -> ACTION -> REACTION -> PAYOFF -> FINAL STATE

TRIGGER:
Introduce the smallest concrete event that makes the character act now.

INTENTION:
Give the character a clear immediate objective visible through behavior.

ACTION:
Use the requested action as a creative constraint, but make the action specific,
physical, and visually readable.

REACTION:
Show a believable emotional and physical response to what just happened.

ESCALATION:
Increase stakes, difficulty, urgency, surprise, or emotional consequence.

PAYOFF:
Deliver a visible result that resolves the scene's immediate question.

FINAL STATE:
End with a stable physical state that feels complete.

CAUSALITY TEST:
Every major action must have a visible cause.
Every major reaction must respond to something that happened on screen.
`).trim();
  }

  if (sceneNumber === 1) {
    return compact(`
INTERNAL STORY BEAT — SCENE ${n}

CAUSAL ROLE:
OPENING HOOK

START STATE:
Establish a concrete, readable physical situation before the main action.

TRIGGER:
Within the opening moments, reveal the event, object, threat, opportunity,
or anomaly that forces the character to respond.

INTENTION:
Make the character's immediate goal obvious through action, not exposition.

ACTION:
${action}

REACTION:
Show the character reacting to the trigger with a specific emotional and physical response.

ESCALATION:
Add one new complication or discovery. Do not solve the central problem yet.

PAYOFF:
End with a new piece of information or changed circumstance that creates a reason
for ${next} to happen.

END STATE:
Record a stable physical state: character position, orientation, important prop,
environmental condition, and emotional state.

CAUSAL HANDOFF:
The final event of this scene must directly cause the first meaningful action of Scene 02.
`).trim();
  }

  if (sceneNumber === totalScenes) {
    return compact(`
INTERNAL STORY BEAT — SCENE ${n}

CAUSAL ROLE:
CLIMAX / PAYOFF / RESOLUTION

START STATE:
Resume exactly from the physical and emotional consequence created by ${previous}.

TRIGGER:
Use the unresolved problem from the previous scene as the immediate reason for action.

INTENTION:
Make the character's final objective unmistakable.

ACTION:
${action}

REACTION:
Show the cost, risk, emotion, or consequence of the final attempt.

ESCALATION:
Push the unresolved conflict to its highest meaningful point without inventing
an unrelated subplot.

PAYOFF:
Resolve the central story question with a concrete visual result.

FINAL EMOTIONAL BEAT:
Give the character a believable final emotional response.

END STATE:
Finish with a stable, memorable cinematic image. Preserve continuity and make the ending
feel earned by everything that happened before it.

CAUSALITY TEST:
The payoff must be caused by choices and events established in earlier scenes.
`).trim();
  }

  if (sceneNumber === totalScenes - 1) {
    return compact(`
INTERNAL STORY BEAT — SCENE ${n}

CAUSAL ROLE:
CLIMAX SETUP

START STATE:
Resume exactly from ${previous}.

TRIGGER:
Use the previous scene's unresolved consequence as the reason the character must act.

INTENTION:
Define the immediate high-stakes objective.

ACTION:
${action}

REACTION:
Show the character and/or world responding to the action.

ESCALATION:
Introduce the strongest complication, obstacle, reveal, or cost in the story so far.

PAYOFF:
Create a decisive change that makes the final scene unavoidable.

END STATE:
Leave the world and characters in a precise physical state that the final scene can continue.

CAUSAL HANDOFF:
The ending event must directly create the opening condition of ${next}.
`).trim();
  }

  return compact(`
INTERNAL STORY BEAT — SCENE ${n}

CAUSAL ROLE:
DEVELOPMENT / ESCALATION

START STATE:
Resume exactly from ${previous}. Never reset the characters or environment.

TRIGGER:
Identify the new event or consequence that makes this scene necessary.

INTENTION:
Define what the protagonist wants to accomplish immediately.

ACTION:
${action}

REACTION:
Show a specific response from the character, another established character, or the environment.

ESCALATION:
Change at least one meaningful story variable:
goal, risk, information, relationship, physical position, available resource,
environmental condition, or time pressure.

PAYOFF:
Deliver a concrete result or reveal that changes what the character can do next.

END STATE:
Freeze a precise, believable state for the next scene:
character positions, orientation, props, environment, emotional condition, and unresolved question.

CAUSAL HANDOFF:
The final event must create the reason for ${next} to begin.
`).trim();
};

/* =========================================================
   START STATE
   ========================================================= */

const getStartState = (
  sceneNumber: number
): string => {
  if (sceneNumber === 1) {
    return `
Opening state.
Establish the initial physical position of every character,
the environment, important objects and initial emotional state.
`.trim();
  }

  return `
Start exactly from the logical ending state of Scene ${
    String(sceneNumber - 1).padStart(2, "0")
  }.

Preserve:
- character positions
- character identity
- wardrobe
- accessories
- important objects
- environment
- lighting direction
- emotional state
- spatial relationship

Do not teleport or reset the scene.
`.trim();
};

/* =========================================================
   END STATE
   ========================================================= */

const getEndState = (
  sceneNumber: number,
  totalScenes: number
): string => {
  if (sceneNumber === totalScenes) {
    return `
Final state.
Resolve the main conflict and leave the characters and environment
in a believable final cinematic state.
`.trim();
  }

  return `
End with a clear physical and emotional state that can become
the exact starting condition of the next scene.

Do not introduce unexplained changes.
`.trim();
};

/* =========================================================
   DEFAULT SCRIPT
   ========================================================= */

const createDefaultDialogueScript = (
  sceneNumber: number,
  form: AnimationForm
): AnimationDialogueScript => {
  const speakerMode =
    clean(form.speakerMode) ||
    "Ada karakter yang bicara";

  const characterVoice =
    speakerMode === "Ada karakter yang bicara" ||
    speakerMode === "Ada karakter + narator";

  const narratorVoice =
    speakerMode === "Ada narator saja" ||
    speakerMode === "Ada karakter + narator";

  const audioMode =
    clean(form.audio) ||
    "Narasi + BGM + SFX";

  const language =
    clean(form.language) ||
    "Bahasa Indonesia";

  const duration =
    clean(form.duration) ||
    "8 detik";

  const characterName =
    Array.isArray(form.characters) && form.characters.length > 0
      ? clean(form.characters[0].name) || "CHARACTER-01"
      : "CHARACTER-01";

  const characterId =
    Array.isArray(form.characters) && form.characters.length > 0
      ? clean(form.characters[0].id) || "CHAR-01"
      : "CHAR-01";

  return {
    sceneNumber,

    mode: speakerMode,

    narrator: narratorVoice
      ? `[SCRIPT BLUEPRINT — ${language}]
Write a short narration for Scene ${String(sceneNumber).padStart(2, "0")}. The narration must explain the visible story progression without repeating the previous scene, sound natural for ${duration}, and be written in ${language}.`
      : "",

    dialogue: characterVoice
      ? [
          {
            characterId,
            characterName,
            text: `[SCRIPT BLUEPRINT — ${language}]
Write 1–2 short dialogue lines for ${characterName}. The dialogue must match the Character Master personality, respond to this scene's event, advance the story, avoid repeating previous-scene information, and fit ${duration}. Do not create a new character.`,
          },
        ]
      : [],

    timing:
      `0-${duration}`,

    direction: `SCRIPT BLUEPRINT. Language for spoken content: ${language}. Duration: ${duration}. Use natural cinematic delivery and match the scene emotional beat. Keep character identity unchanged.`,
  };
};

/* =========================================================
   SCRIPT FINDER
   =========================================================

   IMPORTANT:

   Do NOT use:

   scripts[sceneNumber - 1]

   because script order should not be trusted.

   Always match by sceneNumber.
   ========================================================= */

const getSceneScript = (
  scripts: AnimationDialogueScript[],
  sceneNumber: number,
  form: AnimationForm
): AnimationDialogueScript => {
  const matched =
    scripts.find(
      (script) =>
        Number(script.sceneNumber) ===
        sceneNumber
    );

  if (matched) {
    return matched;
  }

  return createDefaultDialogueScript(
    sceneNumber,
    form
  );
};

/* =========================================================
   SCRIPT FORMATTER
   ========================================================= */

export const formatDialogueScript = (
  script: AnimationDialogueScript
): string => {
  const mode =
    clean(script.mode) ||
    "Ada karakter yang bicara";

  const narrator =
    clean(script.narrator);

  const dialogue =
    Array.isArray(script.dialogue)
      ? script.dialogue
      : [];

  const isBlueprint =
    narrator.includes("[SCRIPT BLUEPRINT") ||
    dialogue.some((item) =>
      clean(item.text).includes("[SCRIPT BLUEPRINT")
    ) ||
    clean(script.direction).toUpperCase().includes("SCRIPT BLUEPRINT");

  const dialogueText =
    dialogue
      .filter(
        (item) =>
          clean(item.text)
      )
      .map(
        (item) =>
          `${clean(item.characterId)} — ${clean(item.characterName)}:\n${isBlueprint ? clean(item.text) : `"${clean(item.text)}"`}`
      )
      .join("\n\n");

  return compact(`
DIALOGUE / NARRATION SCRIPT

SCENE:
${String(script.sceneNumber).padStart(2, "0")}

SPEAKER MODE:
${mode}

NARRATOR:
${
  narrator ||
  "Tidak ada narasi pada scene ini."
}

CHARACTER DIALOGUE:
${
  dialogueText ||
  "Tidak ada dialog karakter pada scene ini."
}

TIMING:
${clean(script.timing) || "Disesuaikan dengan durasi scene."}

PERFORMANCE DIRECTION:
${
  clean(script.direction) ||
  "Natural cinematic delivery."
}
`);
};

/* =========================================================
   SCRIPT MODE DETECTOR
   ========================================================= */

const narratorOrDialogueBlueprint = (
  script: AnimationDialogueScript
): string => {
  const narrator = clean(script.narrator);
  const dialogue = Array.isArray(script.dialogue)
    ? script.dialogue
    : [];

  const blueprint =
    narrator.includes("[SCRIPT BLUEPRINT") ||
    dialogue.some((item) =>
      clean(item.text).includes("[SCRIPT BLUEPRINT")
    ) ||
    clean(script.direction).toUpperCase().includes("SCRIPT BLUEPRINT");

  return blueprint
    ? "BLUEPRINT — konten di atas adalah instruksi pembuatan naskah, bukan kalimat final."
    : "FINAL SCRIPT — konten di atas adalah naskah final yang harus dipertahankan.";
};

/* =========================================================
   DIALOGUE PROMPT
   ========================================================= */

const generateDialoguePrompt = (
  form: AnimationForm,
  script: AnimationDialogueScript
): string => {
  const language =
    clean(form.language) ||
    "Bahasa Indonesia";

  const duration =
    clean(form.duration) ||
    "8 detik";

  const speakerMode =
    clean(form.speakerMode) ||
    "Ada karakter yang bicara";

  return compact(`
DIALOGUE PROMPT — SCENE ${String(
    script.sceneNumber
  ).padStart(2, "0")}

Generate the spoken performance for this animation scene.

LANGUAGE:
${language}

SPEAKER MODE:
${speakerMode}

DURATION:
${duration}

SCRIPT:

${formatDialogueScript(script)}

PERFORMANCE RULES:

SCRIPT MODE:
${
    narratorOrDialogueBlueprint(script)
  }

If the provided content is a SCRIPT BLUEPRINT:
- Generate the final spoken dialogue/narration from the blueprint.
- Keep the requested speaker mode exactly.
- Do not add characters or speakers.
- Do not change the story intent.
- Keep the final spoken content short enough for the scene duration.

If the provided content is FINAL SCRIPT:
- Use the exact dialogue/narration provided.
- Do not rewrite the dialogue.
- Do not invent additional dialogue.
- Do not remove dialogue.

Do not add narration when narration is disabled.
Do not add character dialogue when character voice is disabled.

Maintain the established personality of every character.

Use natural conversational delivery.

Use believable emotion.

Use appropriate pauses.

Keep pronunciation clear.

Keep the delivery short enough to fit the scene duration.

Synchronize speech naturally with visible facial movement.

Synchronize lip movement with the exact spoken words.

Do not overlap speakers unnaturally.

${getSpeakerPerformanceLock(form, script)}

Do not create random spoken content.

The provided script is authoritative.
`);
};

/* =========================================================
   AUDIO DIRECTION
   ========================================================= */

const getAudioDirection = (
  form: AnimationForm,
  script: AnimationDialogueScript
): string => {
  const audio =
    clean(form.audio) ||
    "Narasi + BGM + SFX";

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
    speaker === "Ada karakter yang bicara" ||
    speaker === "Ada karakter + narator";

  const narrator =
    speaker === "Ada narator saja" ||
    speaker === "Ada karakter + narator";

  const hasBgm =
    audio
      .toLowerCase()
      .includes("bgm");

  const hasSfx =
    audio
      .toLowerCase()
      .includes("sfx");

  const hasNarration =
    audio
      .toLowerCase()
      .includes("narasi");

  return compact(`
AUDIO DIRECTION

AUDIO MODE:
${audio}

SPEAKER MODE:
${speaker}

LANGUAGE:
${language}

DURATION:
${duration}

CHARACTER VOICE:
${characterVoice ? "ENABLED" : "DISABLED"}

NARRATOR:
${narrator ? "ENABLED" : "DISABLED"}

NARRATION:
${hasNarration ? "ENABLED" : "DISABLED"}

BGM:
${hasBgm ? "ENABLED" : "DISABLED"}

SFX:
${hasSfx ? "ENABLED" : "DISABLED"}

${formatDialogueScript(script)}

AUDIO RULES:

Voice must sound natural and cinematic.

MASTER VOICE CONTINUITY:
${getMasterVoiceDNA(form)}

${getSpeakerPerformanceLock(form, script)}

Character voice must match the established personality.

Dialogue must fit naturally inside the scene duration.

Lip movement must synchronize naturally with spoken dialogue.

Narration timing must synchronize with the visual story.

BGM must support emotional progression without overpowering dialogue.

SFX must synchronize with visible physical actions.

Environmental ambience must match the established world.

Audio timing must synchronize with visual action.

Do not create unrelated audio.

Do not create character dialogue when character voice is disabled.

Do not create narration when narrator is disabled.

Do not create narration when narration is disabled.
`);
};

/* =========================================================
   CHARACTER LOCK
   ========================================================= */

const getVideoCharacterLock = (): string =>
  `
CHARACTER IDENTITY LOCK:

Use the Character System and the exact Scene Image Prompt
as the visual source of truth.

Preserve every CHARACTER ID exactly.

Never redesign:
- face
- head shape
- hairstyle
- age
- body proportions
- skin/material
- wardrobe
- accessories
- colors
- silhouette

Do not merge characters.
Do not duplicate characters.
Do not invent additional characters.
`.trim();


/* =========================================================
   V8.5.1 — HARD SPEAKER / LIP-SYNC LOCK
   Prevent narrator voice from being visually transferred to characters.
   ========================================================= */

const getSpeakerPerformanceLock = (
  form: AnimationForm,
  script: AnimationDialogueScript
): string => {
  const mode = clean(form.speakerMode) || "Ada karakter yang bicara";
  const narratorEnabled =
    mode === "Ada narator saja" ||
    mode === "Ada karakter + narator";

  const characterEnabled =
    mode === "Ada karakter yang bicara" ||
    mode === "Ada karakter + narator";

  const dialogue = Array.isArray(script.dialogue)
    ? script.dialogue
        .map((item) => {
          const id = clean(item.characterId);
          const name = clean(item.characterName);
          return [id, name].filter(Boolean).join(" — ");
        })
        .filter(Boolean)
    : [];

  const allowedSpeakers = dialogue.length
    ? dialogue.join(", ")
    : "ONLY the character explicitly named in the final CHARACTER DIALOGUE";

  return compact(`
HARD SPEAKER / LIP-SYNC LOCK — V8.5.1

SPEAKER MODE:
${mode}

NARRATOR:
${narratorEnabled ? "ENABLED — OFF-SCREEN VOICE" : "DISABLED"}

CHARACTER DIALOGUE:
${characterEnabled ? "ENABLED — ONLY EXPLICITLY NAMED SPEAKER(S)" : "DISABLED"}

ABSOLUTE RULE:
Never transfer narration to a visible character.
When the NARRATOR speaks, every visible character must remain completely silent
and must NOT move their lips, jaw, mouth, or facial muscles as if speaking.

NARRATOR PERFORMANCE:
- Narrator is an OFF-SCREEN voice.
- Narration does not belong to any visible character.
- During narration, visible characters may breathe, blink, look, react, move,
  or perform the described physical action, but their mouths remain naturally closed.
- Do not create lip-sync, talking-mouth animation, speech-like jaw movement,
  or speaking facial performance for any character during narration.
- Do not make a character look like it is delivering the narrator's sentence.

CHARACTER DIALOGUE PERFORMANCE:
${
  characterEnabled
    ? `Only these explicitly identified speaker(s) may perform lip-sync: ${allowedSpeakers}.
All other visible characters must keep their mouths naturally closed while that speaker talks.
Lip-sync must follow only that speaker's exact spoken words.`
    : "No character may perform lip-sync because character dialogue is disabled."
}

MIXED NARRATION + DIALOGUE:
When narration and character dialogue both exist in the same scene:
1. Narrator segment → all visible characters silent, mouths closed.
2. Character dialogue segment → ONLY the named speaker lip-syncs.
3. Non-speaking characters remain silent.
4. Never overlap narration and character lip-sync unless the script explicitly requires simultaneous speech.
5. Never infer the speaker from camera framing, proximity, gaze, or who is visually prominent.

FACIAL PERFORMANCE:
Natural blinking, breathing, eye movement, posture changes, and emotional reactions are allowed.
Speaking-mouth behavior is NOT allowed unless the character is the explicit active speaker.

This lock has higher priority than generic instructions such as "natural facial movement"
or "synchronize mouth movement." Synchronize mouth movement ONLY for the explicit active speaker.
`).trim();
};

/* =========================================================
   NEGATIVE
   ========================================================= */

const getNegative = (): string =>
  `
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
extra limbs,
missing limbs,
deformed hands,
broken fingers,
bad anatomy,
facial distortion,
warped face,
duplicate objects,
floating objects,
object deformation,
environment redesign,
inconsistent architecture,
inconsistent scale,
inconsistent materials,
lighting inconsistency,
random background,
teleportation,
continuity error,
camera discontinuity,
repetitive camera angle, repetitive framing, repetitive camera movement,
unmotivated camera movement, genre-inappropriate camera language,
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
wrong aspect ratio
`.trim();

/* =========================================================
   GENERATOR
   ========================================================= */

export const generateScenePrompts = (
  form: AnimationForm,
  character: string,
  characterDesign: string,
  world: string,
  action: string,
  expression: string,
  scripts: AnimationDialogueScript[] = []
): AnimationScenePrompt[] => {

  const totalScenes = Math.max(
    1,
    Math.min(
      10,
      Number(form.scenes) || 4
    )
  );

  const style =
    clean(form.animationStyle) ||
    "Pixar Inspired 3D";

  const visualStyleDNA = compact(`
VISUAL STYLE DNA — V5

MASTER STYLE:
${style}

STYLE PROFILE:
${getVisualStyleProfile(style)}

STYLE CONTINUITY:
The Image Prompt and Video Prompt belong to the same visual universe. The video must
animate the exact visual language established by the image instead of reinterpreting it.
Preserve the same rendering method, stylization level, facial design language, material
response, lighting language, color treatment, texture language, and overall cinematic finish.

IMAGE-TO-VIDEO RULE:
The reference image is the highest-priority visual identity source. Animate the existing
character and environment; do not regenerate them as a new visual style.

STYLE DRIFT PROHIBITION:
Do not shift from stylized 3D animation into photorealistic live action, realistic human
footage, generic CGI, 2D cartoon, anime, or another rendering style unless that exact style
is explicitly the selected MASTER STYLE.

ROTATION RULE:
When a character turns, rotates, walks away, or appears from a new camera angle, preserve
the exact established facial proportions, silhouette, body proportions, hair construction,
wardrobe construction, accessories, materials, and stylization. A new viewpoint must not
be treated as permission to redesign the character.
`).trim();

  const ratio =
    clean(form.ratio) ||
    "9:16";

  const language =
    clean(form.language) ||
    "Bahasa Indonesia";

  const camera =
    clean(form.camera) ||
    "Controlled cinematic camera movement";

  const storyBlueprint = form.storyBlueprint
    ? compact(`
STORY DIRECTOR BLUEPRINT — DYNAMIC
${JSON.stringify(form.storyBlueprint, null, 2)}

Use this blueprint as the causal story source of truth. Adapt it to the actual scene count.
Do not force every listed opportunity into every scene. Select only what the current dramatic beat earns.
The story beat must determine the camera, never the reverse.
`)
    : "STORY DIRECTOR BLUEPRINT: none supplied; infer the strongest causal beat from the story context.";

  const lighting =
    clean(form.lighting) ||
    "Professional cinematic lighting with consistent light direction";

  const concept =
    clean(form.concept);

  const genre =
    clean(form.genre);

  const expressionRule =
    clean(expression) ||
    "Natural cinematic facial expressions appropriate to the emotional beat.";

  const actionRule =
    clean(action) ||
    "Determine concrete visual actions that advance the story.";

  const masterVoiceDNA = getMasterVoiceDNA(form);

  return Array.from(
    { length: totalScenes },
    (_, index) => {

      const sceneNumber =
        index + 1;

      const number =
        String(sceneNumber).padStart(
          2,
          "0"
        );

      const title =
        getTitle(
          sceneNumber,
          totalScenes
        );

      const purpose =
        getPurpose(
          sceneNumber,
          totalScenes
        );

      const objective =
        getObjective(
          sceneNumber,
          totalScenes
        );

      const emotionalBeat =
        getEmotionalBeat(
          sceneNumber,
          totalScenes
        );

      const storyProgress =
        getStoryProgress(
          sceneNumber,
          totalScenes,
          concept,
          actionRule
        );

      const startState =
        getStartState(
          sceneNumber
        );

      const endState =
        getEndState(
          sceneNumber,
          totalScenes
        );

      const internalBeat =
        getInternalBeat(
          sceneNumber,
          totalScenes,
          concept,
          actionRule
        );

      const audioMode =
        clean(form.audio) ||
        "Narasi + BGM + SFX";

      const sceneCameraDNA = getGenreCameraDNA(
        genre,
        sceneNumber,
        totalScenes,
        camera
      );

      const directorShotPlan = getDirectorShotDirective(
        genre,
        sceneNumber,
        totalScenes
      );

      const hardCharacterLock = getHardCharacterConsistencyLock(
        characterDesign,
        style
      );

      const continuityLedger = getContinuityLedger(
        sceneNumber,
        totalScenes,
        character,
        world,
        actionRule
      );

      const masterMusicDNA =
        getMasterMusicDNA(
          audioMode,
          totalScenes
        );

      /* =====================================================
         SCRIPT
         ===================================================== */

      const dialogueScript =
        getSceneScript(
          scripts,
          sceneNumber,
          form
        );

      /* =====================================================
         DIALOGUE PROMPT
         ===================================================== */

      const dialoguePrompt =
        generateDialoguePrompt(
          form,
          dialogueScript
        );

      const speechTimingGuard = getSpeechTimingGuard(
        dialogueScript,
        clean(form.duration) || "8 detik"
      );

      /* =====================================================
         AUDIO PROMPT
         ===================================================== */

      const audioPrompt =
        getAudioDirection(
          form,
          dialogueScript
        );

      /* =====================================================
         IMAGE PROMPT
         ===================================================== */

      const imagePrompt =
        compact(`
IMAGE PROMPT — SCENE ${number}

Create a professional cinematic animation START FRAME.

This image is the exact visual starting point for Video Scene ${number}.

SCENE TITLE:
${title}

SCENE PURPOSE:
${purpose}

OBJECTIVE:
${objective}

EMOTIONAL BEAT:
${emotionalBeat}

STORY PROGRESSION:
${storyProgress}

${storyBlueprint}

INTERNAL STORY BEAT:
${internalBeat}

STORY STATE / CONTINUITY LEDGER:
${continuityLedger}

GENRE-AWARE CAMERA DNA:
${sceneCameraDNA}

DIRECTOR SHOT PLAN:
${directorShotPlan}

HARD CHARACTER CONSISTENCY LOCK:
${hardCharacterLock}

MASTER VOICE DNA:
${masterVoiceDNA}

MASTER MUSIC DNA:
${masterMusicDNA}

START STATE:
${startState}

CHARACTERS PRESENT:
${character}

CHARACTER SYSTEM:
${characterDesign}

CHARACTER DNA / SCENE STATE CONTRACT:
The CHARACTER SYSTEM is immutable identity. Do not redesign the character in this scene.
Apply the current scene state only as a temporary layer: action, pose, gaze, expression, emotion intensity, temporary physical/environmental condition, and current held/worn state of permanent accessories.
Never convert a temporary scene state into a new permanent character design. Preserve face, hair, body proportions, wardrobe construction, permanent accessory identity, color identity, visual style, motion identity, and voice identity.

VISUAL STYLE DNA:
${visualStyleDNA}

WORLD:
${world}

CHARACTER ACTION:
${actionRule}

EXPRESSION:
${expressionRule}

STORY:
${concept}

GENRE:
${genre}

STYLE:
${style}

RATIO:
${ratio}

LANGUAGE:
${language}

CAMERA:
${sceneCameraDNA}

LIGHTING:
${lighting}

REFERENCE:
${
  clean(form.referenceLink) ||
  "Tidak ada referensi eksternal."
}

VISUAL REQUIREMENTS:

Create a clear cinematic composition.

FRAME-STATE RULE:
The image must show the exact physical state immediately BEFORE the video action begins.
Do not depict a later moment. The viewer must be able to identify what the character is
about to do from the pose, gaze, object placement, and environmental context.

STATE ANCHORS:
- exact character position and facing direction
- exact hand/object relationship
- exact important prop placement
- exact environmental condition
- exact emotional state
- readable depth relationship between foreground, subject, and background

Use readable foreground, midground and background separation.

Use believable character poses.

Use natural anatomy and body mechanics.

Make the visual story immediately understandable.

CHARACTER CONTINUITY:

Keep exact character identity.
Keep exact face.
Keep exact hairstyle.
Keep exact age.
Keep exact body proportions.
Keep exact wardrobe.
Keep exact accessories.
Keep exact colors.
Keep exact silhouette.

VISUAL STYLE LOCK:
Use the established style as a hard constraint. The reference image must look like the same
production universe as the character master sheet. Do not increase realism simply because
the scene is dramatic. Preserve the selected stylization level.

WORLD CONTINUITY:

Keep architecture consistent.
Keep geography consistent.
Keep materials consistent.
Keep scale consistent.
Keep atmosphere consistent.
Keep lighting direction consistent.
Keep important objects consistent.

DO NOT:

Do not redesign characters.
Do not redesign the environment.
Do not add random characters.
Do not add random objects.
Do not merge characters.
Do not duplicate characters.
Do not add text.
Do not add watermark.
Do not add logo.
Do not create borders.
Do not distort anatomy.
Do not change aspect ratio.

This image is the EXACT START FRAME for Video Scene ${number}.
`);

      /* =====================================================
         VIDEO PROMPT
         ===================================================== */

      const videoPrompt =
        compact(`
VIDEO PROMPT — SCENE ${number}

Create a cinematic animated video for Scene ${number}.

The provided Scene ${number} Image Prompt is the EXACT START FRAME.

Do not reinterpret or redesign the starting frame.

SCENE TITLE:
${title}

SCENE PURPOSE:
${purpose}

OBJECTIVE:
${objective}

EMOTIONAL BEAT:
${emotionalBeat}

STORY PROGRESSION:
${storyProgress}

${storyBlueprint}

INTERNAL STORY BEAT:
${internalBeat}

STORY STATE / CONTINUITY LEDGER:
${continuityLedger}

GENRE-AWARE CAMERA DNA:
${sceneCameraDNA}

DIRECTOR SHOT PLAN:
${directorShotPlan}

HARD CHARACTER CONSISTENCY LOCK:
${hardCharacterLock}

MASTER VOICE DNA:
${masterVoiceDNA}

MASTER MUSIC DNA:
${masterMusicDNA}

START STATE:
${startState}

END STATE:
${endState}

STORY:
${concept}

GENRE:
${genre}

CHARACTER IDENTITY:
${getVideoCharacterLock()}

CHARACTER SYSTEM:
${characterDesign}

CHARACTER DNA / SCENE STATE CONTRACT:
The CHARACTER SYSTEM is immutable identity. Do not redesign the character in this scene.
Apply the current scene state only as a temporary layer: action, pose, gaze, expression, emotion intensity, temporary physical/environmental condition, and current held/worn state of permanent accessories.
Never convert a temporary scene state into a new permanent character design. Preserve face, hair, body proportions, wardrobe construction, permanent accessory identity, color identity, visual style, motion identity, and voice identity.

VISUAL STYLE DNA:
${visualStyleDNA}

WORLD:
${world}

MAIN ACTION:
${actionRule}

PERFORMANCE:
${expressionRule}

STYLE:
${style}

DURATION:
${clean(form.duration) || "8 detik"}

RATIO:
${ratio}

LANGUAGE:
${language}

CAMERA:
${sceneCameraDNA}

LIGHTING:
${lighting}

MOTION / BEAT TIMELINE:

Translate the internal beat into visible motion.

00:00–20% — START:
Hold the exact START FRAME long enough to establish spatial orientation.
Begin from the image prompt with no visual reset.

20%–45% — TRIGGER + ACTION:
Show the trigger and the protagonist's intentional physical action.
Motion must have believable anticipation, weight, direction, and contact.

45%–70% — REACTION + ESCALATION:
Show the immediate consequence and emotional/physical reaction.
Introduce the scene's new complication or information through visible events.

70%–90% — PAYOFF:
Deliver the scene-specific result. Avoid random spectacle that does not affect the story.

90%–100% — END STATE:
Settle into the exact physical/emotional state that prepares the next scene.

Do not force these percentages literally if the selected duration is very short;
preserve the causal order.

Animate only the actions required by this scene.

Use natural body mechanics.

Use believable momentum.

Use natural facial movement.

Use believable interaction with objects.

Preserve physical continuity.

Use controlled cinematic camera movement.

Do not introduce random camera movement.

DIALOGUE / NARRATION SCRIPT:

${formatDialogueScript(dialogueScript)}

DIALOGUE PROMPT:

${dialoguePrompt}

${speechTimingGuard}

IMPORTANT SCRIPT RULE:

SCRIPT TYPE:
${narratorOrDialogueBlueprint(dialogueScript)}

If this is a SCRIPT BLUEPRINT, create the final spoken content from the provided instructions while preserving the scene intent, speaker mode, character identity, language, emotional beat, and duration.

If this is a FINAL SCRIPT, preserve the provided spoken content exactly.

Do not invent additional speakers or characters.
Do not add narration when narration is disabled.
Do not add character dialogue when character voice is disabled.

${getSpeakerPerformanceLock(form, dialogueScript)}

If a character speaks, synchronize mouth movement naturally
with the final spoken words ONLY for the explicit active speaker.

CONTINUITY:

Scene ${number} must continue naturally from the previous scene.

Preserve exact character positions where logically required.

Preserve wardrobe.

Preserve hairstyle.

Preserve face.

Preserve body proportions.

Preserve accessories.

Preserve silhouette.

Preserve environment.

Preserve important objects.

Preserve lighting direction.

The final state of this scene must logically prepare
the starting state of the next scene.

${audioPrompt}

FINAL DIRECTOR OVERRIDE:
The DIRECTOR SHOT PLAN is the preferred camera decision for this scene.
Do not fall back to a generic "slow push-in" merely because it is cinematic.
The final camera must communicate the scene's intended audience emotion and must
remain physically motivated by the action.

FINAL CHARACTER OVERRIDE:
If any action, camera, lighting, or creative suggestion conflicts with the
HARD CHARACTER CONSISTENCY LOCK, the CHARACTER SYSTEM wins. Correct the conflicting
detail before producing the final prompt.

QUALITY:

No jitter.
No flicker.
No frame warping.
No anatomy deformation.
No broken hands.
No extra limbs.
No duplicate characters.
No character merging.
No floating objects.
No robotic movement.
No sudden camera shake.
No random zoom.
No style switching.
No lighting inconsistency.
No temporal inconsistency.
No spatial inconsistency.

FINAL VIDEO REQUIREMENT:

The video must visually tell this scene's part of the story.

The scene must add NEW story progress.

CAUSALITY CHECK:
- What changed because of the protagonist's action?
- What visible consequence occurred?
- What new information, risk, goal, or opportunity now exists?
- Why must the next scene happen after this one?

Do not simply repeat the previous scene.
Do not solve the entire story before the final scene.
Do not introduce unrelated subplots.
Do not use vague phrases such as "something happens", "the story progresses",
"dramatic action", or "cinematic movement" without specifying the visible event.

End on a clear visual state that supports the next scene.

NEGATIVE PROMPT:
${getNegative()}
`);

      const durationSeconds = Number(clean(form.duration).match(/\d+(?:\.\d+)?/)?.[0] || 8);
      const shotSeconds = durationSeconds / 4;
      const storyboardImagePrompt = compact(`
CREATE ONE COMPLETE STORYBOARD SHEET — SCENE ${number}

Create ONE storyboard planning image containing exactly 4 clearly separated internal panels: Shot 1, Shot 2, Shot 3, Shot 4.
Each panel represents ${shotSeconds} seconds of the ${durationSeconds}-second scene.

IMPORTANT:
This is a visual planning reference only.
Do not create four separate images.
Do not render final promotional text, dialogue subtitles, motion-text copy, stickers or decorative icons as final text.

SHOT 1 — 0–${shotSeconds} sec
Show the exact setup/start state, hook, character/object position, environment, composition, camera framing, expression and first internal beat.

SHOT 2 — ${shotSeconds}–${shotSeconds * 2} sec
Show the trigger and physical action continuing directly from Shot 1. Preserve identity, wardrobe, props, environment, lighting and screen direction.

SHOT 3 — ${shotSeconds * 2}–${shotSeconds * 3} sec
Show reaction, escalation, reveal or strongest information beat. Preserve continuity from Shot 2.

SHOT 4 — ${shotSeconds * 3}–${durationSeconds} sec
Show payoff, emotional resolution or next-state setup. Preserve continuity and create a clear ending state.

FULL VISUAL PRODUCTION DIRECTIVE:
${imagePrompt}

INTERNAL BEAT DIRECTIVE:
${internalBeat}

DIRECTOR SHOT PLAN:
${directorShotPlan}

The four panels must read as one continuous scene and one production universe. Maintain exact character identity, world continuity, important props, lighting direction, visual style, camera language and causal progression.
`);

      const formattedVideoPrompt = compact(`
SCENE ${number} — VIDEO PROMPT

Duration: ${durationSeconds} seconds
4 internal shots
${shotSeconds} seconds per shot.

IMPORTANT:
The CURRENT SCENE STORYBOARD IMAGE is the SINGLE AND ABSOLUTE VISUAL SOURCE OF TRUTH.
Never display the storyboard sheet itself.
Use its exact visual state as the opening state.
Only authorized motion may change that state.

BEGIN DIRECTLY WITH A FULL-FRAME SHOT 1.

SHOT 1
0–${shotSeconds} sec
Begin directly with the actual full-frame scene. Establish the exact start state, hook, subject position, environment, camera framing and first causal beat. ${startState}

SHOT 2
${shotSeconds}–${shotSeconds * 2} sec
Continue directly from Shot 1. Execute the trigger and intentional physical action with believable anticipation, weight, direction and contact. ${actionRule}

SHOT 3
${shotSeconds * 2}–${shotSeconds * 3} sec
Continue directly from Shot 2. Show reaction, escalation, new information or consequence. Preserve the exact character/world/product state and camera language. ${expressionRule}

SHOT 4
${shotSeconds * 3}–${durationSeconds} sec
Continue directly from Shot 3. Deliver the payoff and settle into this scene's end state so the next scene can begin logically. ${endState}

NARRATION:
${formatDialogueScript(dialogueScript)}

MOTION TEXT:
OFF for this animation workflow unless explicitly required by the selected animation mode. Do not invent promotional overlay text.

AUDIO:
${audioPrompt}

CHARACTER CONSISTENCY:
${hardCharacterLock}
Preserve exact face, hair, body proportions, wardrobe, accessories, silhouette and voice identity.

WORLD CONSISTENCY:
${continuityLedger}
Preserve architecture, geography, materials, scale, atmosphere, lighting direction and important objects.

CONTINUITY:
Shot 2 must continue from Shot 1. Shot 3 must continue from Shot 2. Shot 4 must continue from Shot 3. The final physical/emotional state must logically prepare the next scene.

MASTER PRODUCTION DIRECTIVE:
${videoPrompt}

DRIACOM UNIVERSAL VIDEO EXECUTION CORE:
${STORYBOARD_EXECUTION_RULES}

NEGATIVE PROMPT:
${getNegative()}
Do not display storyboard sheet. Do not start with storyboard panels. No slideshow, no frozen storyboard frames, no identity drift, no wardrobe change, no prop duplication, no environment jump, no lighting jump, no anatomy deformation, no extra limbs, no random text, no watermark, no unwanted camera reset, no flicker, no jitter, no style switching, no temporal inconsistency.
`);

      /* =====================================================
         RETURN
         ===================================================== */

      return {
        sceneNumber,

        title,
        purpose,

        objective,
        emotionalBeat,

        storyProgress,

        charactersPresent:
          character,

        action:
          storyProgress,

        startState,
        endState,

        dialogueScript,

        dialoguePrompt,

        imagePrompt: storyboardImagePrompt,

        videoPrompt: formattedVideoPrompt,

        audioPrompt,
      };
    }
  );
};