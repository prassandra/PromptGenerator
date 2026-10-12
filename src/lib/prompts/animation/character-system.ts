import type {
  AnimationCharacter,
} from "./types";

const fallbackCharacter: AnimationCharacter = {
  id: "CHAR-01",

  name: "Karakter Utama",

  role: "Protagonis",

  description:
    "Karakter utama dengan identitas visual yang kuat dan mudah dipertahankan antar-adegan.",

  age:
    "Dewasa muda",

  gender:
    "Tidak ditentukan",

  appearance:
    "Penampilan menarik, proporsi tubuh natural, siluet mudah dikenali, dan memiliki ciri visual yang kuat.",

  face:
    "Wajah unik dan konsisten dengan fitur wajah yang jelas, ekspresif, dan mudah dikenali.",

  hair:
    "Gaya rambut khas yang konsisten dan tidak berubah antar-adegan.",

  skin:
    "Warna dan material kulit konsisten.",

  body:
    "Proporsi tubuh natural dan konsisten.",

  wardrobe:
    "Pakaian utama yang konsisten sepanjang cerita.",

  accessories:
    "Aksesori utama konsisten dan tidak berubah.",

  personality:
    "Natural, ekspresif, dan memiliki karakter yang kuat.",

  expression:
    "Ekspresi mengikuti kebutuhan cerita tanpa mengubah identitas wajah.",

  pose:
    "Neutral anatomical standing posture with relaxed shoulders, balanced stance, natural arm position, and believable baseline body mechanics. This is a reference pose, not a permanent story pose.",

  visualSignature:
    "Siluet, wajah, rambut, wardrobe, warna, dan aksesori menjadi identitas visual utama.",

  color:
    "Tentukan palet warna utama karakter secara konkret dan konsisten.",

  motion:
    "Gerakan natural sesuai usia, tubuh, kepribadian, dan aktivitas karakter.",

  voice:
    "Jika karakter berbicara, tentukan karakter suara yang konsisten sesuai usia dan identitas karakter.",
};

const normalizeCharacter = (
  character: Partial<AnimationCharacter>,
  index: number
): AnimationCharacter => ({
  id:
    character.id ||
    `CHAR-${String(index + 1).padStart(2, "0")}`,

  name:
    character.name ||
    `Karakter ${String(index + 1).padStart(2, "0")}`,

  role:
    character.role ||
    "Supporting Character",

  description:
    character.description ||
    fallbackCharacter.description,

  age:
    character.age ||
    fallbackCharacter.age,

  gender:
    character.gender ||
    fallbackCharacter.gender,

  appearance:
    character.appearance ||
    fallbackCharacter.appearance,

  face:
    character.face ||
    fallbackCharacter.face,

  hair:
    character.hair ||
    fallbackCharacter.hair,

  skin:
    character.skin ||
    fallbackCharacter.skin,

  body:
    character.body ||
    fallbackCharacter.body,

  wardrobe:
    character.wardrobe ||
    fallbackCharacter.wardrobe,

  accessories:
    character.accessories ||
    fallbackCharacter.accessories,

  personality:
    character.personality ||
    fallbackCharacter.personality,

  expression:
    character.expression ||
    fallbackCharacter.expression,

  pose:
    character.pose ||
    fallbackCharacter.pose,

  visualSignature:
    character.visualSignature ||
    fallbackCharacter.visualSignature,

  color:
    character.color ||
    fallbackCharacter.color,

  motion:
    character.motion ||
    fallbackCharacter.motion,

  voice:
    character.voice ||
    fallbackCharacter.voice,
});

export const getAnimationCharacters = (
  characters?: AnimationCharacter[],
  fallbackText?: string
): AnimationCharacter[] => {
  if (
    characters &&
    characters.length > 0
  ) {
    return characters.map(
      normalizeCharacter
    );
  }

  return [
    normalizeCharacter(
      {
        ...fallbackCharacter,

        description:
          fallbackText ||
          fallbackCharacter.description,
      },

      0
    ),
  ];
};

export const generateCharacterPrompt = (
  character: AnimationCharacter,
  animationStyle: string,
  world: string
) => {
  return `DRIACOM — INDIVIDUAL MASTER CHARACTER TURNAROUND SHEET

CHARACTER ID: ${character.id}
CHARACTER NAME: ${character.name}
ROLE: ${character.role}

VISUAL STYLE LOCK:
${animationStyle}

CHARACTER DNA
-------------
DESCRIPTION:
${character.description}

AGE:
${character.age}

GENDER:
${character.gender}

APPEARANCE:
${character.appearance}

FACE DNA:
${character.face}

HAIR DNA:
${character.hair}

SKIN / MATERIAL DNA:
${character.skin}

BODY / PROPORTION DNA:
${character.body}

WARDROBE DNA:
${character.wardrobe}

ACCESSORY DNA:
${character.accessories}

PERSONALITY:
${character.personality}

EXPRESSION DNA:
${character.expression}

POSE DNA — BASE REFERENCE:
${character.pose}

PERMANENT ACCESSORY RULE:
Every item listed in ACCESSORY DNA is part of the character's permanent identity unless explicitly marked as a scene-state prop.
A scene may change whether a permanent accessory is being held, worn, attached, hidden, or temporarily set down, but it must never silently redesign, replace, duplicate, or delete the established accessory.

VISUAL SIGNATURE:
${character.visualSignature}

COLOR DNA:
${character.color}

MOTION DNA:
${character.motion}

VOICE DNA:
${character.voice}

CHARACTER DNA COMPLETENESS RULE:
The fields above are the permanent identity source of truth.

IDENTITY VS SCENE STATE RULE:
CHARACTER DNA describes what the character IS and must remain immutable across the production.
SCENE STATE describes what the character is DOING or what temporary condition the character is experiencing in a specific scene.
Do not store temporary poses, emotions, actions, damage, wetness, dirt, object position, camera-facing orientation, or scene-specific wardrobe states as permanent identity changes.
A scene may change expression, pose, action, gaze, physical state, and temporary accessory possession while preserving the underlying CHARACTER DNA.

Never leave identity-defining details as vague filler such as "unique face",
"distinctive hair", "natural proportions", "attractive appearance", or
"signature outfit" when the story provides enough information to make them concrete.
If the source story is missing an identity-defining detail, establish ONE concrete,
production-usable choice now and keep that choice unchanged for the entire production.
Do not invent a new identity later in another scene.

MASTER IMAGE GENERATION DIRECTIVE
---------------------------------
Create ONE professional character-design turnaround reference sheet for ONLY
${character.name} (${character.id}).

This image must contain ONE CHARACTER ONLY. Do not place any other character,
companion, antagonist, duplicate character, or story character in the sheet.

The image is a production reference sheet, NOT a cinematic poster, NOT a story
scene, and NOT an environment keyframe.

The sheet must visually communicate a specific, fully designed character.
Do not use generic placeholder anatomy, generic clothing, or interchangeable facial features.
All identity-defining details in CHARACTER DNA must be visible or inferable from the reference.

REQUIRED BODY TURNAROUND VIEWS:
1. FRONT — 0°
2. 3/4 FRONT LEFT — 45°
3. LEFT PROFILE — 90°
4. 3/4 BACK LEFT — 135°
5. BACK — 180°
6. 3/4 BACK RIGHT — 225°
7. RIGHT PROFILE — 270°
8. 3/4 FRONT RIGHT — 315°

Every view must show the SAME physical character with matching:
- face shape
- eye size, color and spacing
- nose and jaw structure
- ears
- hairstyle, hair length and hair silhouette
- skin tone/material
- age
- body height and proportions
- shoulder width
- torso, arm, hand, leg and foot proportions
- wardrobe construction, colors and materials
- shoes
- accessories and their exact attachment points
- distinctive silhouette
- selected animation/rendering style

FACE REFERENCE STRIP:
Include small neutral face references showing front, 3/4, left profile and right
profile. These must be the same face as the full-body turnaround.

DETAIL REFERENCE:
Include readable detail callouts or close reference areas for the most important
identity elements: hair, face, signature wardrobe pieces and signature accessory.
Do not invent new accessories.

PRESENTATION:
- clean professional production-sheet layout
- neutral studio background
- soft even lighting
- neutral standing reference pose
- consistent camera height and scale across body angles
- clear spacing between views
- full body visible from head to feet
- labels may identify the angles, but do not add decorative story text
- no cinematic action pose
- no dramatic environment
- no story props unless they are a permanent character accessory
- no duplicate full-body character outside the required turnaround views

ROTATION CONSISTENCY LOCK:
The 180° back view must be the exact physical back of the established front view.
Side views must preserve the same head shape, body volume, clothing construction,
and accessory placement. Do not redesign the character when the viewpoint changes.

STYLE LOCK:
Use EXACTLY this visual style throughout the entire sheet:
${animationStyle}

Do not convert the character to photorealistic/live-action. Do not mix rendering
styles. Do not change the facial proportions or stylization between angles.

WORLD LOCK:
The story world is metadata only and must NOT become the background of this sheet.
Do not create a cinematic environment scene.

STORY WORLD METADATA:
${world}

SOURCE OF TRUTH:
This single-character turnaround sheet is the MASTER VISUAL BLUEPRINT for
${character.id}. Future image and video prompts must use this character as the
same established physical character.

CHARACTER IDENTITY LOCK:
${character.id} = ${character.name}
Never rename, replace, merge, redesign, age, de-age, gender-swap, or reinterpret this character.

VOICE / PERFORMANCE LOCK:
If this character speaks in future scenes, preserve the VOICE DNA and speaking
personality unless the story explicitly requests a deliberate transformation.

MOTION LOCK:
Preserve the established body mechanics, movement personality, and physical capability
described in MOTION DNA. Do not make the character suddenly move like a different body type.

SCENE STATE CONTRACT:
For every future scene, apply temporary scene-specific state ON TOP OF this immutable character blueprint.
Allowed scene-state changes include: pose, action, expression, gaze direction, emotional intensity, temporary physical condition, temporary wardrobe condition, and the current held/worn state of permanent accessories.
Never rewrite the underlying face, hair, body proportions, wardrobe design, color identity, permanent accessories, voice identity, or motion identity unless the story explicitly defines a permanent transformation event.
`;
};

export const generateCharacterMaster = (
  characters: AnimationCharacter[],
  animationStyle: string,
  world: string
) => {
  const normalized =
    characters.map(normalizeCharacter);

  const characterList =
    normalized
      .map(
        (character) => `

${character.id}
==================================================

NAMA:
${character.name}

PERAN:
${character.role}

DESKRIPSI:
${character.description}

UMUR:
${character.age}

GENDER:
${character.gender}

PENAMPILAN:
${character.appearance}

WAJAH:
${character.face}

RAMBUT:
${character.hair}

KULIT / MATERIAL:
${character.skin}

TUBUH:
${character.body}

WARDROBE:
${character.wardrobe}

AKSESORI:
${character.accessories}

KEPRIBADIAN:
${character.personality}

EKSPRESI:
${character.expression}

POSE:
${character.pose}

VISUAL SIGNATURE:
${character.visualSignature}

COLOR DNA:
${character.color}

MOTION DNA:
${character.motion}

VOICE DNA:
${character.voice}

INDIVIDUAL GENERATION RULE:
Jika user meminta "${character.name}" atau "${character.id}",
gunakan hanya data karakter ini.

Jangan memasukkan karakter lain kecuali diminta secara eksplisit.
`
      )
      .join("\n");

  return `MASTER CHARACTER SYSTEM

SISTEM IDENTITAS KARAKTER DRIACOM
================================

JUMLAH KARAKTER:
${normalized.length}

CHARACTER REGISTRY RULE:
Each CHAR-ID is an immutable identity record. Never merge two character records, reuse one character's DNA for another character, or regenerate identity-defining details per scene.

DNA / SCENE STATE SEPARATION:
Permanent CHARACTER DNA defines identity. Temporary SCENE STATE defines what that character is doing or experiencing in a specific scene.
Scene prompts may alter action, pose, expression, gaze, emotional intensity, temporary physical condition, and the current state of permanent accessories without changing the underlying character identity.

ANIMATION STYLE:
${animationStyle}

WORLD:
${world}

MASTER RULE:

Setiap karakter memiliki identitas permanen.

Setiap CHARACTER ID adalah sumber kebenaran visual.

Karakter tidak boleh berubah wajah, usia, gender, proporsi tubuh,
rambut, wardrobe, aksesori, warna, siluet, gerak khas, atau karakter suara
tanpa instruksi eksplisit.

Semua detail identitas harus konkret dan dapat dipakai ulang sebagai production data.
Jangan gunakan deskripsi generik jika detail konkret sudah tersedia.

${characterList}

================================
MASTER TURNAROUND REFERENCE SHEET
================================

The Master Character Sheet is a CHARACTER DESIGN TURNAROUND REFERENCE,
not a cinematic story scene.

Required controlled angles for every character:
FRONT 0°
3/4 FRONT LEFT 45°
LEFT PROFILE 90°
3/4 BACK LEFT 135°
BACK 180°
3/4 BACK RIGHT 225°
RIGHT PROFILE 270°
3/4 FRONT RIGHT 315°

Presentation:
- neutral studio/background
- soft even lighting
- neutral standing pose
- consistent camera scale and height
- no story environment
- no action scene
- no extra characters
- no cinematic background

Character name, CHARACTER ID, animation style, face, hair, body proportions,
wardrobe, accessories and silhouette are LOCKED DATA. Never rename or reinterpret.

Every angle must show one physically consistent character. A 180° turn must
reveal the exact established back of the same character.

Do not convert stylized animation into live-action photorealism. Preserve the
exact selected animation style and rendering language.

================================
INDIVIDUAL CHARACTER GENERATION
================================

Jika user meminta satu karakter,
gunakan hanya CHARACTER ID karakter tersebut.

Jangan memasukkan karakter lain.

Jika user meminta beberapa karakter,
gabungkan hanya CHARACTER ID yang diminta.

================================
IDENTITY LOCK
================================

Tidak boleh:

- Mengubah wajah
- Mengubah umur
- Mengubah bentuk kepala
- Mengubah hairstyle
- Mengubah warna kulit / material
- Mengubah proporsi tubuh
- Mengubah wardrobe
- Mengubah aksesori
- Mengubah siluet
- Mengganti identitas karakter
- Menggabungkan dua karakter menjadi satu
- Membuat karakter tambahan tanpa instruksi

Semua karakter harus tetap menjadi individu yang berbeda.

================================
VISUAL SOURCE OF TRUTH
================================

Character reference yang telah dibuat menjadi referensi utama
untuk seluruh image generation dan video generation.

Gunakan CHARACTER ID untuk menjaga konsistensi antar-adegan.
Gunakan seluruh Character DNA, bukan hanya nama karakter.
Scene prompt boleh mengubah pose, ekspresi, aksi, blocking, dan kamera,
tetapi tidak boleh mengubah identity DNA.`;
};

export const generateIndividualCharacterPrompts = (
  characters: AnimationCharacter[],
  animationStyle: string,
  world: string
) => {
  return characters.map(
    (character) => ({
      id: character.id,

      name: character.name,

      prompt:
        generateCharacterPrompt(
          character,
          animationStyle,
          world
        ),
    })
  );
};