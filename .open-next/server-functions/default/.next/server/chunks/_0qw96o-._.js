module.exports=[28354,e=>{"use strict";var t=e.i(89171),a=e.i(34731),n=e.i(93421);let r={id:"CHAR-01",name:"Karakter Utama",role:"Protagonis",description:"Karakter utama dengan identitas visual yang kuat dan mudah dipertahankan antar-adegan.",age:"Dewasa muda",gender:"Tidak ditentukan",appearance:"Penampilan menarik, proporsi tubuh natural, siluet mudah dikenali, dan memiliki ciri visual yang kuat.",face:"Wajah unik dan konsisten dengan fitur wajah yang jelas, ekspresif, dan mudah dikenali.",hair:"Gaya rambut khas yang konsisten dan tidak berubah antar-adegan.",skin:"Warna dan material kulit konsisten.",body:"Proporsi tubuh natural dan konsisten.",wardrobe:"Pakaian utama yang konsisten sepanjang cerita.",accessories:"Aksesori utama konsisten dan tidak berubah.",personality:"Natural, ekspresif, dan memiliki karakter yang kuat.",expression:"Ekspresi mengikuti kebutuhan cerita tanpa mengubah identitas wajah.",pose:"Neutral anatomical standing posture with relaxed shoulders, balanced stance, natural arm position, and believable baseline body mechanics. This is a reference pose, not a permanent story pose.",visualSignature:"Siluet, wajah, rambut, wardrobe, warna, dan aksesori menjadi identitas visual utama.",color:"Tentukan palet warna utama karakter secara konkret dan konsisten.",motion:"Gerakan natural sesuai usia, tubuh, kepribadian, dan aktivitas karakter.",voice:"Jika karakter berbicara, tentukan karakter suara yang konsisten sesuai usia dan identitas karakter."},i=(e,t)=>({id:e.id||`CHAR-${String(t+1).padStart(2,"0")}`,name:e.name||`Karakter ${String(t+1).padStart(2,"0")}`,role:e.role||"Supporting Character",description:e.description||r.description,age:e.age||r.age,gender:e.gender||r.gender,appearance:e.appearance||r.appearance,face:e.face||r.face,hair:e.hair||r.hair,skin:e.skin||r.skin,body:e.body||r.body,wardrobe:e.wardrobe||r.wardrobe,accessories:e.accessories||r.accessories,personality:e.personality||r.personality,expression:e.expression||r.expression,pose:e.pose||r.pose,visualSignature:e.visualSignature||r.visualSignature,color:e.color||r.color,motion:e.motion||r.motion,voice:e.voice||r.voice}),o=(e,t,a)=>`DRIACOM — INDIVIDUAL MASTER CHARACTER TURNAROUND SHEET

CHARACTER ID: ${e.id}
CHARACTER NAME: ${e.name}
ROLE: ${e.role}

VISUAL STYLE LOCK:
${t}

CHARACTER DNA
-------------
DESCRIPTION:
${e.description}

AGE:
${e.age}

GENDER:
${e.gender}

APPEARANCE:
${e.appearance}

FACE DNA:
${e.face}

HAIR DNA:
${e.hair}

SKIN / MATERIAL DNA:
${e.skin}

BODY / PROPORTION DNA:
${e.body}

WARDROBE DNA:
${e.wardrobe}

ACCESSORY DNA:
${e.accessories}

PERSONALITY:
${e.personality}

EXPRESSION DNA:
${e.expression}

POSE DNA — BASE REFERENCE:
${e.pose}

PERMANENT ACCESSORY RULE:
Every item listed in ACCESSORY DNA is part of the character's permanent identity unless explicitly marked as a scene-state prop.
A scene may change whether a permanent accessory is being held, worn, attached, hidden, or temporarily set down, but it must never silently redesign, replace, duplicate, or delete the established accessory.

VISUAL SIGNATURE:
${e.visualSignature}

COLOR DNA:
${e.color}

MOTION DNA:
${e.motion}

VOICE DNA:
${e.voice}

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
${e.name} (${e.id}).

This image must contain ONE CHARACTER ONLY. Do not place any other character,
companion, antagonist, duplicate character, or story character in the sheet.

The image is a production reference sheet, NOT a cinematic poster, NOT a story
scene, and NOT an environment keyframe.

The sheet must visually communicate a specific, fully designed character.
Do not use generic placeholder anatomy, generic clothing, or interchangeable facial features.
All identity-defining details in CHARACTER DNA must be visible or inferable from the reference.

REQUIRED BODY TURNAROUND VIEWS:
1. FRONT — 0\xb0
2. 3/4 FRONT LEFT — 45\xb0
3. LEFT PROFILE — 90\xb0
4. 3/4 BACK LEFT — 135\xb0
5. BACK — 180\xb0
6. 3/4 BACK RIGHT — 225\xb0
7. RIGHT PROFILE — 270\xb0
8. 3/4 FRONT RIGHT — 315\xb0

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
The 180\xb0 back view must be the exact physical back of the established front view.
Side views must preserve the same head shape, body volume, clothing construction,
and accessory placement. Do not redesign the character when the viewpoint changes.

STYLE LOCK:
Use EXACTLY this visual style throughout the entire sheet:
${t}

Do not convert the character to photorealistic/live-action. Do not mix rendering
styles. Do not change the facial proportions or stylization between angles.

WORLD LOCK:
The story world is metadata only and must NOT become the background of this sheet.
Do not create a cinematic environment scene.

STORY WORLD METADATA:
${a}

SOURCE OF TRUTH:
This single-character turnaround sheet is the MASTER VISUAL BLUEPRINT for
${e.id}. Future image and video prompts must use this character as the
same established physical character.

CHARACTER IDENTITY LOCK:
${e.id} = ${e.name}
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
`;var s=e.i(22253);let c=e=>String(e??"").trim(),l=e=>e.replace(/\r\n/g,"\n").replace(/[ \t]+\n/g,"\n").replace(/\n{3,}/g,"\n\n").trim(),h=e=>{let t=c(e.language)||"Bahasa Indonesia",a=c(e.speakerMode)||"Ada karakter yang bicara",n=/narator/i.test(a)||/narasi/i.test(c(e.audio)),r=/karakter/i.test(a);return l(`
MASTER VOICE DNA — V4

LANGUAGE:
${t}

SPEAKER CONFIGURATION:
${a}

NARRATOR:
${n?"ENABLED":"DISABLED"}

CHARACTER VOICES:
${r?"ENABLED":"DISABLED"}

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
`).trim()},d=e=>{let t=c(e.mode)||"Ada karakter yang bicara",a=c(e.narrator),n=Array.isArray(e.dialogue)?e.dialogue:[],r=a.includes("[SCRIPT BLUEPRINT")||n.some(e=>c(e.text).includes("[SCRIPT BLUEPRINT"))||c(e.direction).toUpperCase().includes("SCRIPT BLUEPRINT"),i=n.filter(e=>c(e.text)).map(e=>`${c(e.characterId)} — ${c(e.characterName)}:
${r?c(e.text):`"${c(e.text)}"`}`).join("\n\n");return l(`
DIALOGUE / NARRATION SCRIPT

SCENE:
${String(e.sceneNumber).padStart(2,"0")}

SPEAKER MODE:
${t}

NARRATOR:
${a||"Tidak ada narasi pada scene ini."}

CHARACTER DIALOGUE:
${i||"Tidak ada dialog karakter pada scene ini."}

TIMING:
${c(e.timing)||"Disesuaikan dengan durasi scene."}

PERFORMANCE DIRECTION:
${c(e.direction)||"Natural cinematic delivery."}
`)},m=e=>{let t=c(e.narrator),a=Array.isArray(e.dialogue)?e.dialogue:[];return t.includes("[SCRIPT BLUEPRINT")||a.some(e=>c(e.text).includes("[SCRIPT BLUEPRINT"))||c(e.direction).toUpperCase().includes("SCRIPT BLUEPRINT")?"BLUEPRINT — konten di atas adalah instruksi pembuatan naskah, bukan kalimat final.":"FINAL SCRIPT — konten di atas adalah naskah final yang harus dipertahankan."},u=(e,t)=>{let a=c(e.speakerMode)||"Ada karakter yang bicara",n="Ada karakter yang bicara"===a||"Ada karakter + narator"===a,r=Array.isArray(t.dialogue)?t.dialogue.map(e=>[c(e.characterId),c(e.characterName)].filter(Boolean).join(" — ")).filter(Boolean):[],i=r.length?r.join(", "):"ONLY the character explicitly named in the final CHARACTER DIALOGUE";return l(`
HARD SPEAKER / LIP-SYNC LOCK — V8.5.1

SPEAKER MODE:
${a}

NARRATOR:
${"Ada narator saja"===a||"Ada karakter + narator"===a?"ENABLED — OFF-SCREEN VOICE":"DISABLED"}

CHARACTER DIALOGUE:
${n?"ENABLED — ONLY EXPLICITLY NAMED SPEAKER(S)":"DISABLED"}

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
${n?`Only these explicitly identified speaker(s) may perform lip-sync: ${i}.
All other visible characters must keep their mouths naturally closed while that speaker talks.
Lip-sync must follow only that speaker's exact spoken words.`:"No character may perform lip-sync because character dialogue is disabled."}

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
`).trim()},p=()=>`
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
`.trim(),g=e=>String(e??"").trim(),E=(e,t)=>t<=1?"HOOK / CLIMAX / ENDING":2===t?1===e?"HOOK / SETUP":"CLIMAX / ENDING":3===t?1===e?"HOOK / SETUP":2===e?"CONFLICT / ESCALATION":"CLIMAX / ENDING":4===t?1===e?"HOOK / OPENING":2===e?"SETUP / CONFLICT":3===e?"ESCALATION / TURNING POINT":"CLIMAX / ENDING":5===t?1===e?"HOOK / OPENING":2===e?"SETUP":3===e?"CONFLICT / ESCALATION":4===e?"TURNING POINT / CLIMAX BUILD":"CLIMAX / ENDING":6===t?1===e?"HOOK / OPENING":2===e?"SETUP":3===e?"CONFLICT":4===e?"ESCALATION":5===e?"TURNING POINT / CLIMAX BUILD":"CLIMAX / ENDING":1===e?"HOOK / OPENING":2===e?"SETUP":e===t-1?"TURNING POINT / CLIMAX BUILD":e===t?"CLIMAX / ENDING":e>Math.ceil(.65*t)?"ESCALATION":"CONFLICT / DEVELOPMENT",y=(e,t,a)=>t<=1?`Introduce the story immediately.
Create a strong visual hook.
Deliver the central action: ${a}
Resolve the story within the same scene.`:1===e?"Grab attention immediately.\nIntroduce the protagonist and the visual world.\nEstablish the initial situation.\nCreate a clear question or curiosity that makes the viewer want to continue.":2===e&&t>=3?`Move the protagonist into the main situation.
Establish the goal, problem, relationship, or discovery.
Use meaningful action: ${a}
Make the story direction clear without unnecessary exposition.`:e===t?"Deliver the main payoff.\nResolve or transform the central conflict.\nMake the ending feel earned by the previous scenes.\nLeave a memorable emotional or visual impression.":e===t-1?`Create the final escalation.
Force the story toward its decisive moment.
Increase emotional or physical stakes.
Use meaningful action: ${a}
Prepare the viewer for the final payoff.`:`Advance the central story.
Increase stakes or reveal new information.
Use meaningful action: ${a}
Create visible consequences from the previous scene.
Move the story closer to the climax.`,A=(e,t)=>t<=1?"Complete story arc compressed into one cinematic scene.":1===e?"The story begins and establishes the hook.":2===e&&t<=4?"The initial situation develops into the main problem or objective.":2===e?"The protagonist enters the main journey and understands what is at stake.":e===t?"The central conflict reaches its payoff and the story resolves.":e===t-1?"The story reaches its decisive turning point and prepares for the final payoff.":e>Math.ceil(.65*t)?"The stakes rise rapidly and the story moves toward the climax.":"The central conflict develops and produces consequences that push the story forward.",T=(e,t,a)=>t<=1?["Immediate emotional hook.\nEmotion must evolve visibly toward a satisfying payoff.",a].join("\n"):1===e?["Curiosity, surprise, anticipation, or immediate emotional interest.",a].join("\n"):2===e?["Growing curiosity, concern, excitement, or uncertainty.",a].join("\n"):e===t?["Strongest emotional payoff of the story.\nEmotion must feel earned by everything that happened before.",a].join("\n"):e===t-1?["High tension, urgency, fear, determination, hope, or emotional confrontation.",a].join("\n"):["Emotion intensifies naturally from the previous scene.\nThe character must visibly react to the consequences of the story.",a].join("\n"),b=(e,t,a)=>{let n=g(a)||"Controlled cinematic camera movement with purposeful framing.";return t<=1?[n,"Use a strong cinematic hero composition.\nBegin with an immediately readable visual hook.\nEnd with a clear visual payoff."].join("\n"):1===e?[n,"Establish the world quickly.\nUse a visually strong opening composition.\nClearly introduce the main character and the central situation.\nPrefer a controlled push-in, tracking shot, or reveal when appropriate."].join("\n"):e===t?[n,"Use cinematic hero framing.\nPrioritize the emotional payoff.\nMake the final composition visually memorable.\nAvoid unnecessary camera movement that weakens the ending."].join("\n"):e===t-1?[n,"Increase visual tension.\nUse purposeful movement toward the decisive action.\nFraming should make the stakes immediately readable."].join("\n"):[n,"Use cinematic coverage that supports the current story beat.\nEvery camera movement must have a narrative purpose.\nAvoid random camera movement."].join("\n")},R=(e,t,a)=>t<=1?`Primary action: ${a}
Movement must establish the story and resolve its central beat.
Use believable body mechanics.
Movement must have a clear beginning, middle, and end.`:1===e?`Introduce the character through natural physical behavior.
Story action: ${a}
Movement should immediately communicate the situation.
Avoid unnecessary motion.`:e===t?`Climactic action: ${a}
Movement should feel decisive and emotionally meaningful.
Use believable momentum and physical reaction.
End in a stable state that communicates the story resolution.`:`Primary action: ${a}
Action must visibly change the situation.
Use natural body mechanics.
Maintain believable momentum.
Characters must interact correctly with the environment and props.
Avoid static behavior unless intentional for the story.`,v=(e,t)=>1===e?"Opening state.\nCharacters and environment are introduced in their initial physical positions.\nNo unexplained previous action.\nEstablish a clean visual starting frame for image generation.":`Begin from the physical and emotional result of Scene ${e-1}.
Preserve character positions and orientation where physically appropriate.
Preserve wardrobe, props, environment, lighting, geography, and time of day.
Do not teleport characters or objects.
The first frame must logically continue from the previous scene.`,f=(e,t,a)=>t<=1?`Story resolves within this scene.
Final action result: ${a}
End on a visually stable and memorable composition.`:e===t?"Final story state.\nThe main conflict has reached its payoff.\nCharacters finish in a visually and emotionally readable state.\nThe final frame should feel intentional and complete.":`The action must leave a concrete consequence.
Characters end in a physical and emotional state that can naturally become the starting state of the next scene.
Result of action: ${a}
Do not end with unexplained character or prop changes.`,N=(e,t)=>1===e?"Establish the permanent visual baseline.\nLock character identity, wardrobe, props, environment, geography, lighting, and time of day.\nThis scene becomes the reference point for all following scenes.":e===t?`Continue directly from Scene ${e-1}.
Preserve all established visual identities.
Resolve the story without introducing unexplained elements.
Final scene must remain inside the same physical universe.`:`Continue directly from Scene ${e-1}.
Prepare a logical transition into Scene ${e+1}.
Preserve character identity.
Preserve wardrobe.
Preserve body proportions.
Preserve props.
Preserve environment.
Preserve geography.
Preserve lighting direction.
Preserve time of day unless the story explicitly changes it.
Any change must have a visible narrative cause.`,S=e=>String(e??"").trim(),I=e=>{let t=S(e.world);return t||["CINEMATIC WORLD SYSTEM\n\nSTORY:",S(e.concept),"\nGENRE:",S(e.genre),"\nANIMATION STYLE:",S(e.animationStyle)||"Pixar Inspired 3D","\nASPECT RATIO:",S(e.ratio)||"9:16","\nLANGUAGE:",S(e.language)||"Bahasa Indonesia","\nWORLD RULE:\nCreate one coherent visual world.\n\nMaintain consistent:\n- architecture\n- geography\n- scale\n- materials\n- atmosphere\n- lighting direction\n- environmental details\n- color language\n- spatial continuity\n\nThe world must feel like the same physical location system throughout the entire animation.\n\nDo not randomly redesign the environment between scenes."].join("\n")},C=e=>{let t=S(e.character);return t||"Create only the characters required by the story.\n\nUse the Character System as the permanent visual source of truth.\n\nEvery character must have:\n- unique identity\n- unique CHARACTER ID\n- stable face\n- stable hairstyle\n- stable age\n- stable body proportions\n- stable wardrobe\n- stable accessories\n- stable personality\n- stable visual signature\n- concrete color palette\n- stable movement/body-mechanics signature\n- stable voice identity when the character speaks\n\nCHARACTER DNA QUALITY GATE:\nDo not accept vague identity filler such as 'unique face', 'distinctive hair',\n'natural proportions', 'attractive appearance', or 'signature outfit' as the final\nproduction description when the story provides enough information.\nIf an identity-defining detail is missing, establish one concrete production-ready\ndetail once and reuse it unchanged across every scene.\n\nThe Character Master must be specific enough that an image model can recreate\nthe same person/creature from the front, side, back, and 3/4 views.\n\nDo not introduce unnecessary characters.\n\nWhenever a specific character appears in a scene, identify that character using CHARACTER ID.\n\nNever merge two characters into one identity."},O=e=>S(e.concept).split(/[.!?]/)[0].trim().slice(0,80)||"Driacom Animation",k=(e,t=[])=>{var a,n;let k,D,w,L,$,P,M,U,x,G,H,Y,F,B,j,K,V=Number.isFinite(k=Number(e.scenes))?Math.max(1,Math.min(10,Math.floor(k))):4,_=Array.isArray(t)?t.filter(Boolean).map(e=>({...e,sceneNumber:Math.floor(Number(e.sceneNumber))})).filter(e=>Number.isFinite(e.sceneNumber)&&e.sceneNumber>=1&&e.sceneNumber<=V):[],q=(a=Array.isArray(e.characters)?e.characters:[],n=C(e),a&&a.length>0?a.map(i):[i({...r,description:n||r.description},0)]),W=I(e),z=C(e),X=S(e.action)||"Determine concrete visual actions\nthat advance the story.\n\nEvery scene must contain a meaningful action.\nAvoid static scenes unless stillness is narratively intentional.",J=S(e.expression)||"Use natural cinematic facial expressions.\nExpressions must correspond to the emotional beat.\nAvoid exaggerated or robotic facial movement.\nKeep emotional progression consistent from scene to scene.",Q=S(e.animationStyle)||"Pixar Inspired 3D",Z=(w=(D=q.map(i)).map(e=>`

${e.id}
==================================================

NAMA:
${e.name}

PERAN:
${e.role}

DESKRIPSI:
${e.description}

UMUR:
${e.age}

GENDER:
${e.gender}

PENAMPILAN:
${e.appearance}

WAJAH:
${e.face}

RAMBUT:
${e.hair}

KULIT / MATERIAL:
${e.skin}

TUBUH:
${e.body}

WARDROBE:
${e.wardrobe}

AKSESORI:
${e.accessories}

KEPRIBADIAN:
${e.personality}

EKSPRESI:
${e.expression}

POSE:
${e.pose}

VISUAL SIGNATURE:
${e.visualSignature}

COLOR DNA:
${e.color}

MOTION DNA:
${e.motion}

VOICE DNA:
${e.voice}

INDIVIDUAL GENERATION RULE:
Jika user meminta "${e.name}" atau "${e.id}",
gunakan hanya data karakter ini.

Jangan memasukkan karakter lain kecuali diminta secara eksplisit.
`).join("\n"),`MASTER CHARACTER SYSTEM

SISTEM IDENTITAS KARAKTER DRIACOM
================================

JUMLAH KARAKTER:
${D.length}

CHARACTER REGISTRY RULE:
Each CHAR-ID is an immutable identity record. Never merge two character records, reuse one character's DNA for another character, or regenerate identity-defining details per scene.

DNA / SCENE STATE SEPARATION:
Permanent CHARACTER DNA defines identity. Temporary SCENE STATE defines what that character is doing or experiencing in a specific scene.
Scene prompts may alter action, pose, expression, gaze, emotional intensity, temporary physical condition, and the current state of permanent accessories without changing the underlying character identity.

ANIMATION STYLE:
${Q}

WORLD:
${W}

MASTER RULE:

Setiap karakter memiliki identitas permanen.

Setiap CHARACTER ID adalah sumber kebenaran visual.

Karakter tidak boleh berubah wajah, usia, gender, proporsi tubuh,
rambut, wardrobe, aksesori, warna, siluet, gerak khas, atau karakter suara
tanpa instruksi eksplisit.

Semua detail identitas harus konkret dan dapat dipakai ulang sebagai production data.
Jangan gunakan deskripsi generik jika detail konkret sudah tersedia.

${w}

================================
MASTER TURNAROUND REFERENCE SHEET
================================

The Master Character Sheet is a CHARACTER DESIGN TURNAROUND REFERENCE,
not a cinematic story scene.

Required controlled angles for every character:
FRONT 0\xb0
3/4 FRONT LEFT 45\xb0
LEFT PROFILE 90\xb0
3/4 BACK LEFT 135\xb0
BACK 180\xb0
3/4 BACK RIGHT 225\xb0
RIGHT PROFILE 270\xb0
3/4 FRONT RIGHT 315\xb0

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

Every angle must show one physically consistent character. A 180\xb0 turn must
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
tetapi tidak boleh mengubah identity DNA.`),ee=q.map(e=>({id:e.id,name:e.name,prompt:o(e,Q,W)})),et=((e,t,a,n,r,i,o="")=>{let s=Math.max(1,Math.min(10,Math.floor(Number(e)||4))),c=g(o),l=c?["STORY DIRECTOR BLUEPRINT — DYNAMIC SOURCE OF TRUTH",c,"\nDo not force every scene to use every beat in this blueprint.\nDistribute the dramatic beats according to the requested scene count.\nEach scene must introduce a meaningful causal change.\nDo not create filler scenes just to reach the scene count.\nA visual opportunity may be used only when the current dramatic beat naturally supports it.\nCamera choices must emerge from the story beat, not dictate the story beat."].join("\n"):"STORY DIRECTOR MODE\nNo hidden blueprint supplied. Infer a coherent causal spine from the concept, genre, character goal, conflict, and requested scene count.\nDo not invent disconnected spectacle.",h=[];for(let e=1;e<=s;e++){let o=E(e,s),c=y(e,s,n),d=A(e,s),m=T(e,s,r),u=b(e,s,i),p=R(e,s,n),g=v(e,s),S=f(e,s,n),I=N(e,s),C="";C=[C=1===e?["OPENING / HOOK\n\nIntroduce the story world immediately.\nShow the main character and the central situation without unnecessary exposition.\n\nCHARACTER SYSTEM:",t,"\nWORLD SYSTEM:",a,"\nThe opening must create immediate visual curiosity."].join("\n"):e===s?["CLIMAX / ENDING\n\nDeliver the strongest story payoff.\nResolve the central conflict or complete the central objective.\n\nCHARACTER SYSTEM:",t,"\nACTION:",n,"\nEMOTIONAL DIRECTION:",r,"\nThe ending must feel earned, memorable, and visually satisfying."].join("\n"):[o,"\nAdvance the story through visible action and consequences.\n\nCHARACTER SYSTEM:",t,"\nWORLD SYSTEM:",a,"\nACTION:",n,"\nEMOTIONAL DIRECTION:",r,"\nEvery scene must change the story state.\nAvoid scenes that exist only as visual filler."].join("\n"),"",l].join("\n"),h.push({sceneNumber:e,role:o,description:C,objective:c,storyProgress:d,emotionalBeat:m,camera:u,motion:p,emotion:r,startState:g,endState:S,continuity:I})}return h.map(e=>`ADEGAN ${String(e.sceneNumber).padStart(2,"0")}

==================================================
STORY ROLE
==================================================

${e.role}

==================================================
DESCRIPTION
==================================================

${e.description}

==================================================
OBJECTIVE
==================================================

${e.objective}

==================================================
STORY PROGRESS
==================================================

${e.storyProgress}

==================================================
EMOTIONAL BEAT
==================================================

${e.emotionalBeat}

==================================================
START STATE
==================================================

${e.startState}

==================================================
ACTION / MOTION
==================================================

${e.motion}

==================================================
CAMERA
==================================================

${e.camera}

==================================================
END STATE
==================================================

${e.endState}

==================================================
CONTINUITY
==================================================

${e.continuity}

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
- No random character introduction`).join("\n\n------------------------------\n\n")})(V,z,W,X,J,S(e.camera)||"Cinematic camera movement with purposeful framing",e.storyBlueprint?JSON.stringify(e.storyBlueprint,null,2):""),ea=((e,t,a,n,r,i,o=[])=>{let g,E=Math.max(1,Math.min(10,Number(e.scenes)||4)),y=c(e.animationStyle)||"Pixar Inspired 3D",A=l(`
VISUAL STYLE DNA — V5

MASTER STYLE:
${y}

STYLE PROFILE:
${(g={"Pixar Inspired 3D":"Stylized feature-animation 3D, expressive faces, appealing natural proportions, tactile materials, polished family-film rendering, warm cinematic readability.","Little Giants 3D":"Chibi/stylized 3D with expressive feature proportions, compact silhouettes, smooth tactile materials, playful facial readability, vibrant yet atmospheric lighting.","Minecraft 3D":"Voxel-based 3D language, block geometry, pixel-like surface logic, cubic environments, readable silhouettes, physically coherent voxel lighting.","Roblox 3D":"Roblox-inspired 3D character language, simplified geometric bodies, clean readable forms, game-like materials, expressive but structurally simple faces.","3D Cartoon":"Stylized cartoon 3D, simplified shapes, clear silhouettes, exaggerated but coherent expressions, soft materials, playful readable rendering.","Stop Motion":"Handcrafted stop-motion aesthetic, tactile miniature materials, subtle handmade imperfections, physical puppet/clay feel, frame-by-frame charm and practical-lighting character."})[y]||g["Pixar Inspired 3D"]}

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
`).trim(),T=c(e.ratio)||"9:16",b=c(e.language)||"Bahasa Indonesia",R=c(e.camera)||"Controlled cinematic camera movement",v=e.storyBlueprint?l(`
STORY DIRECTOR BLUEPRINT — DYNAMIC
${JSON.stringify(e.storyBlueprint,null,2)}

Use this blueprint as the causal story source of truth. Adapt it to the actual scene count.
Do not force every listed opportunity into every scene. Select only what the current dramatic beat earns.
The story beat must determine the camera, never the reverse.
`):"STORY DIRECTOR BLUEPRINT: none supplied; infer the strongest causal beat from the story context.",f=c(e.lighting)||"Professional cinematic lighting with consistent light direction",N=c(e.concept),S=c(e.genre),I=c(i)||"Natural cinematic facial expressions appropriate to the emotional beat.",C=c(r)||"Determine concrete visual actions that advance the story.",O=h(e);return Array.from({length:E},(r,i)=>{var g,k,D;let w,L,$,P,M,U,x,G,H,Y,F,B,j,K,V,_,q,W,z,X,J,Q,Z,ee,et,ea,en,er,ei,eo,es,ec,el,eh,ed,em,eu=i+1,ep=String(eu).padStart(2,"0"),eg=(k=eu,1===(D=E)?"Final Shot":2===D?1===k?"Opening":"Ending":3===D?1===k?"Opening":2===k?"Development":"Climax & Ending":k===D?"Ending":k===D-1?"Climax":["Opening","Setup","Development","Build Up","Climax","Resolution","Ending","Final Shot"][k-1]||`Scene ${String(k).padStart(2,"0")}`),eE=1===eu?"Opening yang langsung memperkenalkan dunia, karakter utama, situasi dan hook cerita.":eu===E?"Ending yang menyelesaikan konflik dan memberikan payoff visual serta emosional.":eu===E-1?"Climax yang menghadirkan konflik atau tantangan terbesar sebelum penyelesaian.":2===eu?"Setup yang memperjelas tujuan karakter dan mulai menggerakkan konflik utama.":"Development yang memberikan perkembangan cerita baru dan mendorong karakter menuju konflik berikutnya.",ey=1===eu?"Hook the audience and establish the story clearly.":eu===E?"Resolve the central conflict and deliver a satisfying visual payoff.":eu===E-1?"Create the strongest conflict and prepare the final payoff.":"Advance the story with new visual information and meaningful character action.",eA=1===eu?"Curiosity and anticipation.":eu===E?"Resolution, relief and emotional payoff.":eu===E-1?"Peak tension and urgency.":2===eu?"Interest, determination and rising tension.":"Increasing emotional engagement and anticipation.",eT=(w=c(N),L=c(C),1===E?`
CERITA:
${w}

ALUR SCENE:
Bangun satu momen lengkap yang langsung memperkenalkan konflik atau tujuan,
mengembangkan aksi utama, lalu memberikan payoff yang terasa selesai.

AKSI UTAMA:
${L}
`.trim():1===eu?`
CERITA:
${w}

ALUR SCENE 01:
Perkenalkan karakter utama, dunia, situasi awal dan masalah atau tujuan utama.
Buat hook visual yang langsung membuat penonton memahami apa yang sedang terjadi.

AKSI UTAMA:
${L}
`.trim():2===eu?`
CERITA:
${w}

ALUR SCENE 02:
Lanjutkan langsung dari keadaan akhir Scene 01.
Karakter mulai mengambil tindakan untuk mencapai tujuan.
Perkenalkan perkembangan atau hambatan pertama.
Jangan mengulang pembukaan.

AKSI UTAMA:
${L}
`.trim():eu===E-1?`
CERITA:
${w}

ALUR SCENE ${String(eu).padStart(2,"0")}:
Lanjutkan langsung dari Scene sebelumnya.
Naikkan intensitas menuju konflik terbesar.
Karakter harus aktif menghadapi masalah utama.
Buat konsekuensi visual yang jelas dan persiapkan payoff ending.

AKSI UTAMA:
${L}
`.trim():eu===E?`
CERITA:
${w}

ALUR SCENE ${String(eu).padStart(2,"0")}:
Lanjutkan langsung dari kondisi akhir scene sebelumnya.
Selesaikan konflik utama.
Tampilkan hasil tindakan karakter.
Berikan visual payoff yang jelas dan ending yang memorable.

AKSI UTAMA:
${L}
`.trim():`
CERITA:
${w}

ALUR SCENE ${String(eu).padStart(2,"0")}:
Lanjutkan langsung dari kondisi akhir scene sebelumnya.
Tambahkan perkembangan baru yang nyata.
Dorong karakter semakin dekat ke konflik utama atau tujuan cerita.
Jangan mengulang informasi atau aksi dari scene sebelumnya.

AKSI UTAMA:
${L}
`.trim()),eb=1===eu?`
Opening state.
Establish the initial physical position of every character,
the environment, important objects and initial emotional state.
`.trim():`
Start exactly from the logical ending state of Scene ${String(eu-1).padStart(2,"0")}.

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
`.trim(),eR=eu===E?`
Final state.
Resolve the main conflict and leave the characters and environment
in a believable final cinematic state.
`.trim():`
End with a clear physical and emotional state that can become
the exact starting condition of the next scene.

Do not introduce unexplained changes.
`.trim(),ev=($=String(eu).padStart(2,"0"),P=eu>1?`Scene ${String(eu-1).padStart(2,"0")}`:"initial premise",M=eu<E?`Scene ${String(eu+1).padStart(2,"0")}`:"final resolution",1===E?l(`
INTERNAL STORY BEAT — SCENE ${$}

STORY SOURCE:
${N}

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
`).trim():1===eu?l(`
INTERNAL STORY BEAT — SCENE ${$}

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
${C}

REACTION:
Show the character reacting to the trigger with a specific emotional and physical response.

ESCALATION:
Add one new complication or discovery. Do not solve the central problem yet.

PAYOFF:
End with a new piece of information or changed circumstance that creates a reason
for ${M} to happen.

END STATE:
Record a stable physical state: character position, orientation, important prop,
environmental condition, and emotional state.

CAUSAL HANDOFF:
The final event of this scene must directly cause the first meaningful action of Scene 02.
`).trim():eu===E?l(`
INTERNAL STORY BEAT — SCENE ${$}

CAUSAL ROLE:
CLIMAX / PAYOFF / RESOLUTION

START STATE:
Resume exactly from the physical and emotional consequence created by ${P}.

TRIGGER:
Use the unresolved problem from the previous scene as the immediate reason for action.

INTENTION:
Make the character's final objective unmistakable.

ACTION:
${C}

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
`).trim():eu===E-1?l(`
INTERNAL STORY BEAT — SCENE ${$}

CAUSAL ROLE:
CLIMAX SETUP

START STATE:
Resume exactly from ${P}.

TRIGGER:
Use the previous scene's unresolved consequence as the reason the character must act.

INTENTION:
Define the immediate high-stakes objective.

ACTION:
${C}

REACTION:
Show the character and/or world responding to the action.

ESCALATION:
Introduce the strongest complication, obstacle, reveal, or cost in the story so far.

PAYOFF:
Create a decisive change that makes the final scene unavoidable.

END STATE:
Leave the world and characters in a precise physical state that the final scene can continue.

CAUSAL HANDOFF:
The ending event must directly create the opening condition of ${M}.
`).trim():l(`
INTERNAL STORY BEAT — SCENE ${$}

CAUSAL ROLE:
DEVELOPMENT / ESCALATION

START STATE:
Resume exactly from ${P}. Never reset the characters or environment.

TRIGGER:
Identify the new event or consequence that makes this scene necessary.

INTENTION:
Define what the protagonist wants to accomplish immediately.

ACTION:
${C}

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
The final event must create the reason for ${M} to begin.
`).trim()),ef=c(e.audio)||"Narasi + BGM + SFX",eN=(U=S.toLowerCase(),x=c(R),G="cinematic narrative",H="clarity, immersion, and purposeful visual storytelling",Y="wide establishing, medium, over-the-shoulder, close-up, motivated tracking",F="dolly, tracking, controlled push-in, pull-back, orbit when motivated",B="repetitive centered medium shots, random zooms, unmotivated movement",/horror|horor|scary|supernatural|ghost|seram/.test(U)?(G="psychological horror cinematography",H="dread, uncertainty, vulnerability, anticipation, and controlled fear",Y="low angle, Dutch angle, over-the-shoulder, POV, obstructed framing, negative-space framing, partial reveal",F="creeping push-in, slow lateral reveal, restrained tracking, subtle handheld escalation, delayed reveal",B="constant handheld shake, generic slow zoom in every scene, bright flat framing, repetitive eye-level shots"):/thriller|suspense|crime|mystery|misteri/.test(U)?(G="suspense / thriller cinematography",H="uncertainty, pressure, anticipation, information control, and urgency",Y="tight close-up, over-the-shoulder, POV, asymmetric framing, long-lens compression, partial obstruction",F="slow push-in, stalking tracking, controlled handheld, lateral reveal, sudden motivated reframing",B="random camera shake, repetitive frontal medium shots, unmotivated 360-degree movement"):/action|aksi|adventure|petualangan|war|battle/.test(U)?(G="dynamic action / adventure cinematography",H="energy, impact, spatial clarity, momentum, scale, and physical stakes",Y="low angle, wide action framing, tracking, over-the-shoulder, impact close-up, aerial or elevated reveal when justified",F="tracking, crane rise, whip-pan only for a motivated transition, orbit, rapid reframing, controlled follow-cam",B="unreadable shake, random speed ramps, constant close-ups, camera movement without physical motivation"):/romance|romantis|love|cinta/.test(U)?(G="intimate romantic cinematography",H="connection, vulnerability, warmth, anticipation, and emotional intimacy",Y="intimate close-up, two-shot, over-the-shoulder, soft profile, gentle wide framing",F="slow dolly-in, gentle lateral slide, subtle orbit, restrained pull-back",B="aggressive shake, excessive Dutch angles, random whip-pans, overly wide distant framing during intimate beats"):/comedy|komedi|funny|lucu/.test(U)?(G="comedic visual timing cinematography",H="timing, reaction, surprise, readability, and playful energy",Y="wide reaction shot, medium two-shot, reaction close-up, slightly unexpected angle, clean profile",F="quick motivated push-in, short pull-back, snap reframing, controlled tracking",B="constant dramatic slow motion, random shake, over-cinematic movement that hides the joke"):/drama|dramatis|emotional|family|keluarga/.test(U)?(G="emotional drama cinematography",H="empathy, intimacy, emotional weight, and reflective pacing",Y="medium close-up, intimate close-up, over-the-shoulder, restrained wide shot, profile",F="slow dolly-in, subtle lateral slide, restrained pull-back, almost-static hold when emotion needs space",B="constant movement, random Dutch angles, aggressive zooms, spectacle without emotional purpose"):/fantasy|magical|magic|fantasi/.test(U)?(G="cinematic fantasy cinematography",H="wonder, discovery, scale, beauty, and magical immersion",Y="wide environmental reveal, low hero angle, floating perspective, orbit, close-up detail",F="slow crane, floating tracking, elegant orbit, reveal pull-back, controlled push-in",B="generic drone movement every scene, random orbiting, flat eye-level coverage"):/documentary|dokumenter|realistic|realistis/.test(U)&&(G="observational documentary cinematography",H="authenticity, presence, clarity, and believable observation",Y="natural eye-level, observational medium, wide context, restrained close-up",F="subtle handheld, natural tracking, restrained pan, motivated reframing",B="excessive cinematic spins, random Dutch angles, artificial spectacle"),j=["establishing / spatial context","relationship / over-the-shoulder","emotion / close-up or POV","dynamic reveal / tracking","peak perspective / strongest dramatic angle","resolution / wider emotional release"],K=E<=1?j[0]:j[Math.min(eu-1,j.length-1)],l(`
GENRE-AWARE CAMERA DNA — V4

GENRE:
${S||"General cinematic"}

CAMERA LANGUAGE:
${G}

PRIMARY AUDIENCE EFFECT:
${H}

ALLOWED ANGLE / FRAMING FAMILY:
${Y}

ALLOWED MOVEMENT FAMILY:
${F}

CURRENT SCENE CAMERA PHASE:
${K}

USER CAMERA PREFERENCE:
${x||"No fixed user camera preference; choose the most emotionally effective option."}

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
${B}
`).trim()),eS=(V=S.toLowerCase(),_=/horror|horor|scary|supernatural|ghost|seram/.test(V),q=/thriller|suspense|crime|mystery|misteri/.test(V),W=/action|aksi|adventure|petualangan|battle|war/.test(V),z=/romance|romantis|love|cinta/.test(V),X=/comedy|komedi|funny|lucu/.test(V),J=/fantasy|magical|magic|fantasi/.test(V),Q=E<=1?0:Math.min(eu-1,5),_?l(`
DIRECTOR SHOT PLAN — HORROR — SCENE ${String(eu).padStart(2,"0")}

PRIMARY SHOT:
${["ESTABLISHING DREAD: wide vertical composition with foreground obstruction and generous negative space. Keep the characters readable but make the environment feel larger and potentially threatening. Use a very slow creeping dolly-in.","UNEASY FOLLOW: medium over-the-shoulder framing from slightly behind and below the characters. Let the background contain ambiguous negative space. Use a restrained lateral creep rather than a generic push-in.","THREAT PROXIMITY: tight three-quarter close-up or restricted POV with shallow visual isolation. Hold just long enough for the audience to notice a suspicious detail, then make a tiny motivated reframing.","REVEAL: partially obstructed composition where an environmental element or darkness hides part of the threat. Use a slow lateral reveal or controlled rack-focus relationship between foreground and subject.","PANIC / PEAK TENSION: low or asymmetric angle with compressed distance and subtle handheld instability. The camera reacts to the character's physical fear, but remains readable and never shakes continuously.","AFTERMATH / RELEASE: gradually widen from the final emotional state, restoring spatial context while preserving one unsettling area of negative space. Movement slows instead of resetting to a new visual language."][Q]}

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
`).trim():q?l(`
DIRECTOR SHOT PLAN — THRILLER — SCENE ${String(eu).padStart(2,"0")}
SHOT:
${["wide asymmetric establishing frame with visual information hidden at the edge","over-the-shoulder stalking frame with compressed depth","tight close-up / POV that withholds important information","lateral reveal around an obstruction","controlled handheld pressure shot during the peak threat","wider release frame showing the consequence"][Q]}
Choose camera height, distance and movement to control what the audience knows.
Vary at least TWO camera properties from adjacent scenes.
Avoid repetitive frontal medium shots and unmotivated camera movement.
`).trim():W?l(`
DIRECTOR SHOT PLAN — ACTION / ADVENTURE — SCENE ${String(eu).padStart(2,"0")}
SHOT:
${["wide low-angle establishing shot preserving spatial geography","tracking medium shot matching the protagonist's movement","dynamic three-quarter angle emphasizing speed and obstacle","low follow-cam or lateral tracking through the action","impact close-up followed by a motivated wider reveal","stable wide aftermath showing the new spatial state"][Q]}
Prioritize readable geography and physical cause-and-effect.
Vary framing and movement without sacrificing spatial clarity.
`).trim():z?l(`
DIRECTOR SHOT PLAN — ROMANCE — SCENE ${String(eu).padStart(2,"0")}
SHOT:
${["gentle two-shot with comfortable spatial intimacy","over-the-shoulder close framing emphasizing eye contact","soft profile close-up focused on subtle expression","slow lateral slide revealing emotional connection","intimate close-up with restrained movement","gentle pull-back giving emotional breathing room"][Q]}
Prioritize emotional connection and natural eye lines.
Avoid repetitive framing and aggressive camera movement.
`).trim():X?l(`
DIRECTOR SHOT PLAN — COMEDY — SCENE ${String(eu).padStart(2,"0")}
SHOT:
${["wide readable setup establishing the comic situation","medium reaction two-shot","reaction close-up timed to the joke","slightly unexpected angle revealing the consequence","quick motivated reframing to the strongest reaction","wider aftermath that lets the joke land"][Q]}
Camera timing must support the comedic beat.
Avoid over-dramatic movement that obscures the joke.
`).trim():J?l(`
DIRECTOR SHOT PLAN — FANTASY — SCENE ${String(eu).padStart(2,"0")}
SHOT:
${["wide environmental reveal establishing scale and wonder","low hero angle connecting character to the world","floating three-quarter perspective around a magical detail","slow reveal from environment to character","large-scale perspective emphasizing the magical payoff","wider emotional release showing the transformed space"][Q]}
Camera should reveal scale and wonder without becoming random spectacle.
`).trim():l(`
DIRECTOR SHOT PLAN — GENERAL CINEMATIC — SCENE ${String(eu).padStart(2,"0")}

Choose a shot that serves the current emotional beat and story information.
Vary at least TWO of angle, height, distance, framing, movement, or lens feel from
the immediately preceding scene when continuity allows.

Never use "cinematic" as a substitute for a concrete camera decision.
`).trim()),eI=l(`
HARD CHARACTER CONSISTENCY LOCK — V8.3.7

SOURCE OF TRUTH:
The CHARACTER SYSTEM below is the canonical production identity.
It overrides creative improvisation.

CHARACTER SYSTEM:
${a}

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
- selected visual style: ${y}

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
${y} must remain visually consistent from master sheet to image prompt to video prompt.
Do not drift toward photorealism/live action, realistic humans, generic CGI, anime,
2D illustration, or another style.

FINAL CHARACTER CHECK:
Before finalizing the prompt, compare every visible character and important accessory
against the CHARACTER SYSTEM. If a generated detail conflicts with the source of truth,
discard the conflicting detail and use the canonical detail instead.
`).trim(),eC=1===eu?l(`
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
${C}

STATE PERSISTENCE RULE:
Any important element introduced becomes persistent story state until a visible event changes,
removes, transfers, breaks, or consumes it.
`).trim():l(`
STORY STATE LEDGER — SCENE ${String(eu).padStart(2,"0")}

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
`).trim(),eO=/music|bgm|background/i.test(ef)?`
MASTER MUSIC DNA — GLOBAL STORY RULE

This is ONE continuous soundtrack for ONE story, not a collection of unrelated
scene soundtracks.

MUSICAL IDENTITY:
- One coherent genre and emotional identity across all ${E} scenes.
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
${Array.from({length:E},(e,t)=>{let a=Math.round(25+55*Math.sin((1===E?.5:t/(E-1))*Math.PI));return`Scene ${String(t+1).padStart(2,"0")}: approximately ${a}% intensity`}).join("\n")}

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
`:`
MASTER MUSIC DNA:
BGM IS DISABLED.

Do not invent a background music track.
Use only story-appropriate ambience and scene-specific SFX when requested.
`,ek=((e,t,a)=>{let n,r,i,o,s,l=e.find(e=>Number(e.sceneNumber)===t);return l?l:(n=c(a.speakerMode)||"Ada karakter yang bicara",c(a.audio),r=c(a.language)||"Bahasa Indonesia",i=c(a.duration)||"8 detik",o=Array.isArray(a.characters)&&a.characters.length>0&&c(a.characters[0].name)||"CHARACTER-01",s=Array.isArray(a.characters)&&a.characters.length>0&&c(a.characters[0].id)||"CHAR-01",{sceneNumber:t,mode:n,narrator:"Ada narator saja"===n||"Ada karakter + narator"===n?`[SCRIPT BLUEPRINT — ${r}]
Write a short narration for Scene ${String(t).padStart(2,"0")}. The narration must explain the visible story progression without repeating the previous scene, sound natural for ${i}, and be written in ${r}.`:"",dialogue:"Ada karakter yang bicara"===n||"Ada karakter + narator"===n?[{characterId:s,characterName:o,text:`[SCRIPT BLUEPRINT — ${r}]
Write 1–2 short dialogue lines for ${o}. The dialogue must match the Character Master personality, respond to this scene's event, advance the story, avoid repeating previous-scene information, and fit ${i}. Do not create a new character.`}]:[],timing:`0-${i}`,direction:`SCRIPT BLUEPRINT. Language for spoken content: ${r}. Duration: ${i}. Use natural cinematic delivery and match the scene emotional beat. Keep character identity unchanged.`})})(o,eu,e),eD=(Z=c(e.language)||"Bahasa Indonesia",ee=c(e.duration)||"8 detik",et=c(e.speakerMode)||"Ada karakter yang bicara",l(`
DIALOGUE PROMPT — SCENE ${String(ek.sceneNumber).padStart(2,"0")}

Generate the spoken performance for this animation scene.

LANGUAGE:
${Z}

SPEAKER MODE:
${et}

DURATION:
${ee}

SCRIPT:

${d(ek)}

PERFORMANCE RULES:

SCRIPT MODE:
${m(ek)}

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

${u(e,ek)}

Do not create random spoken content.

The provided script is authoritative.
`)),ew=(g=c(e.duration)||"8 detik",en=(ea=[c(ek.narrator),...ek.dialogue.map(e=>c(e.text))].filter(Boolean).join(" "))?ea.split(/\s+/).filter(Boolean).length:0,ei=Math.max(1,Math.floor(2.2*((er=g.match(/[\d.]+/))?Number(er[0]):8))),l(`
SPEECH TIMING GUARD

SCENE DURATION:
${g}

APPROXIMATE SPOKEN WORD COUNT:
${en}

COMFORTABLE TARGET:
Approximately ${ei} words for natural Indonesian delivery at this duration.

RULE:
Do not cram speech unnaturally into the scene.
If the supplied script is longer than the comfortable target, prioritize clear delivery,
natural pauses, and emotional performance. Do not speed the voice into an unnatural
machine-gun delivery and do not cut the final words abruptly.
Synchronize mouth movement to the actual spoken words.
`).trim()),eL=(eo=c(e.audio)||"Narasi + BGM + SFX",es=c(e.speakerMode)||"Ada karakter yang bicara",ec=c(e.language)||"Bahasa Indonesia",el=c(e.duration)||"8 detik",eh=eo.toLowerCase().includes("bgm"),ed=eo.toLowerCase().includes("sfx"),em=eo.toLowerCase().includes("narasi"),l(`
AUDIO DIRECTION

AUDIO MODE:
${eo}

SPEAKER MODE:
${es}

LANGUAGE:
${ec}

DURATION:
${el}

CHARACTER VOICE:
${"Ada karakter yang bicara"===es||"Ada karakter + narator"===es?"ENABLED":"DISABLED"}

NARRATOR:
${"Ada narator saja"===es||"Ada karakter + narator"===es?"ENABLED":"DISABLED"}

NARRATION:
${em?"ENABLED":"DISABLED"}

BGM:
${eh?"ENABLED":"DISABLED"}

SFX:
${ed?"ENABLED":"DISABLED"}

${d(ek)}

AUDIO RULES:

Voice must sound natural and cinematic.

MASTER VOICE CONTINUITY:
${h(e)}

${u(e,ek)}

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
`)),e$=l(`
IMAGE PROMPT — SCENE ${ep}

Create a professional cinematic animation START FRAME.

This image is the exact visual starting point for Video Scene ${ep}.

SCENE TITLE:
${eg}

SCENE PURPOSE:
${eE}

OBJECTIVE:
${ey}

EMOTIONAL BEAT:
${eA}

STORY PROGRESSION:
${eT}

${v}

INTERNAL STORY BEAT:
${ev}

STORY STATE / CONTINUITY LEDGER:
${eC}

GENRE-AWARE CAMERA DNA:
${eN}

DIRECTOR SHOT PLAN:
${eS}

HARD CHARACTER CONSISTENCY LOCK:
${eI}

MASTER VOICE DNA:
${O}

MASTER MUSIC DNA:
${eO}

START STATE:
${eb}

CHARACTERS PRESENT:
${t}

CHARACTER SYSTEM:
${a}

CHARACTER DNA / SCENE STATE CONTRACT:
The CHARACTER SYSTEM is immutable identity. Do not redesign the character in this scene.
Apply the current scene state only as a temporary layer: action, pose, gaze, expression, emotion intensity, temporary physical/environmental condition, and current held/worn state of permanent accessories.
Never convert a temporary scene state into a new permanent character design. Preserve face, hair, body proportions, wardrobe construction, permanent accessory identity, color identity, visual style, motion identity, and voice identity.

VISUAL STYLE DNA:
${A}

WORLD:
${n}

CHARACTER ACTION:
${C}

EXPRESSION:
${I}

STORY:
${N}

GENRE:
${S}

STYLE:
${y}

RATIO:
${T}

LANGUAGE:
${b}

CAMERA:
${eN}

LIGHTING:
${f}

REFERENCE:
${c(e.referenceLink)||"Tidak ada referensi eksternal."}

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

This image is the EXACT START FRAME for Video Scene ${ep}.
`),eP=l(`
VIDEO PROMPT — SCENE ${ep}

Create a cinematic animated video for Scene ${ep}.

The provided Scene ${ep} Image Prompt is the EXACT START FRAME.

Do not reinterpret or redesign the starting frame.

SCENE TITLE:
${eg}

SCENE PURPOSE:
${eE}

OBJECTIVE:
${ey}

EMOTIONAL BEAT:
${eA}

STORY PROGRESSION:
${eT}

${v}

INTERNAL STORY BEAT:
${ev}

STORY STATE / CONTINUITY LEDGER:
${eC}

GENRE-AWARE CAMERA DNA:
${eN}

DIRECTOR SHOT PLAN:
${eS}

HARD CHARACTER CONSISTENCY LOCK:
${eI}

MASTER VOICE DNA:
${O}

MASTER MUSIC DNA:
${eO}

START STATE:
${eb}

END STATE:
${eR}

STORY:
${N}

GENRE:
${S}

CHARACTER IDENTITY:
${`
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
`.trim()}

CHARACTER SYSTEM:
${a}

CHARACTER DNA / SCENE STATE CONTRACT:
The CHARACTER SYSTEM is immutable identity. Do not redesign the character in this scene.
Apply the current scene state only as a temporary layer: action, pose, gaze, expression, emotion intensity, temporary physical/environmental condition, and current held/worn state of permanent accessories.
Never convert a temporary scene state into a new permanent character design. Preserve face, hair, body proportions, wardrobe construction, permanent accessory identity, color identity, visual style, motion identity, and voice identity.

VISUAL STYLE DNA:
${A}

WORLD:
${n}

MAIN ACTION:
${C}

PERFORMANCE:
${I}

STYLE:
${y}

DURATION:
${c(e.duration)||"8 detik"}

RATIO:
${T}

LANGUAGE:
${b}

CAMERA:
${eN}

LIGHTING:
${f}

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

${d(ek)}

DIALOGUE PROMPT:

${eD}

${ew}

IMPORTANT SCRIPT RULE:

SCRIPT TYPE:
${m(ek)}

If this is a SCRIPT BLUEPRINT, create the final spoken content from the provided instructions while preserving the scene intent, speaker mode, character identity, language, emotional beat, and duration.

If this is a FINAL SCRIPT, preserve the provided spoken content exactly.

Do not invent additional speakers or characters.
Do not add narration when narration is disabled.
Do not add character dialogue when character voice is disabled.

${u(e,ek)}

If a character speaks, synchronize mouth movement naturally
with the final spoken words ONLY for the explicit active speaker.

CONTINUITY:

Scene ${ep} must continue naturally from the previous scene.

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

${eL}

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
${p()}
`),eM=Number(c(e.duration).match(/\d+(?:\.\d+)?/)?.[0]||8),eU=eM/4,ex=l(`
CREATE ONE COMPLETE STORYBOARD SHEET — SCENE ${ep}

Create ONE storyboard planning image containing exactly 4 clearly separated internal panels: Shot 1, Shot 2, Shot 3, Shot 4.
Each panel represents ${eU} seconds of the ${eM}-second scene.

IMPORTANT:
This is a visual planning reference only.
Do not create four separate images.
Do not render final promotional text, dialogue subtitles, motion-text copy, stickers or decorative icons as final text.

SHOT 1 — 0–${eU} sec
Show the exact setup/start state, hook, character/object position, environment, composition, camera framing, expression and first internal beat.

SHOT 2 — ${eU}–${2*eU} sec
Show the trigger and physical action continuing directly from Shot 1. Preserve identity, wardrobe, props, environment, lighting and screen direction.

SHOT 3 — ${2*eU}–${3*eU} sec
Show reaction, escalation, reveal or strongest information beat. Preserve continuity from Shot 2.

SHOT 4 — ${3*eU}–${eM} sec
Show payoff, emotional resolution or next-state setup. Preserve continuity and create a clear ending state.

FULL VISUAL PRODUCTION DIRECTIVE:
${e$}

INTERNAL BEAT DIRECTIVE:
${ev}

DIRECTOR SHOT PLAN:
${eS}

The four panels must read as one continuous scene and one production universe. Maintain exact character identity, world continuity, important props, lighting direction, visual style, camera language and causal progression.
`),eG=l(`
SCENE ${ep} — VIDEO PROMPT

Duration: ${eM} seconds
4 internal shots
${eU} seconds per shot.

IMPORTANT:
The CURRENT SCENE STORYBOARD IMAGE is the SINGLE AND ABSOLUTE VISUAL SOURCE OF TRUTH.
Never display the storyboard sheet itself.
Use its exact visual state as the opening state.
Only authorized motion may change that state.

BEGIN DIRECTLY WITH A FULL-FRAME SHOT 1.

SHOT 1
0–${eU} sec
Begin directly with the actual full-frame scene. Establish the exact start state, hook, subject position, environment, camera framing and first causal beat. ${eb}

SHOT 2
${eU}–${2*eU} sec
Continue directly from Shot 1. Execute the trigger and intentional physical action with believable anticipation, weight, direction and contact. ${C}

SHOT 3
${2*eU}–${3*eU} sec
Continue directly from Shot 2. Show reaction, escalation, new information or consequence. Preserve the exact character/world/product state and camera language. ${I}

SHOT 4
${3*eU}–${eM} sec
Continue directly from Shot 3. Deliver the payoff and settle into this scene's end state so the next scene can begin logically. ${eR}

NARRATION:
${d(ek)}

MOTION TEXT:
OFF for this animation workflow unless explicitly required by the selected animation mode. Do not invent promotional overlay text.

AUDIO:
${eL}

CHARACTER CONSISTENCY:
${eI}
Preserve exact face, hair, body proportions, wardrobe, accessories, silhouette and voice identity.

WORLD CONSISTENCY:
${eC}
Preserve architecture, geography, materials, scale, atmosphere, lighting direction and important objects.

CONTINUITY:
Shot 2 must continue from Shot 1. Shot 3 must continue from Shot 2. Shot 4 must continue from Shot 3. The final physical/emotional state must logically prepare the next scene.

MASTER PRODUCTION DIRECTIVE:
${eP}

DRIACOM UNIVERSAL VIDEO EXECUTION CORE:
${s.STORYBOARD_EXECUTION_RULES}

NEGATIVE PROMPT:
${p()}
Do not display storyboard sheet. Do not start with storyboard panels. No slideshow, no frozen storyboard frames, no identity drift, no wardrobe change, no prop duplication, no environment jump, no lighting jump, no anatomy deformation, no extra limbs, no random text, no watermark, no unwanted camera reset, no flicker, no jitter, no style switching, no temporal inconsistency.
`);return{sceneNumber:eu,title:eg,purpose:eE,objective:ey,emotionalBeat:eA,storyProgress:eT,charactersPresent:t,action:eT,startState:eb,endState:eR,dialogueScript:ek,dialoguePrompt:eD,imagePrompt:ex,videoPrompt:eG,audioPrompt:eL}})})({...e,scenes:String(V)},z,Z,W,X,J,_),en=(L=S(e.ratio)||"9:16",$=S(e.animationStyle)||"Pixar Inspired 3D",P=O(e),`MASTER THUMBNAIL PROMPT

Create a professional cinematic thumbnail for the animation.

==================================================
EXACT THUMBNAIL TITLE — TEXT LOCK
==================================================

${P}

The exact title above MUST be visibly rendered inside the thumbnail.
Preserve every character exactly. Do not translate, paraphrase, abbreviate,
reorder, stylize into unreadable lettering, or invent additional title words.
Use large, highly legible typography with strong contrast and a safe-area position.
The title must remain readable on a small mobile screen and must not cover the
main character's face or critical story action.

==================================================
STORY
==================================================

${S(e.concept)}

==================================================
GENRE
==================================================

${S(e.genre)}

==================================================
ANIMATION STYLE
==================================================

${$}

==================================================
ASPECT RATIO
==================================================

${L}

==================================================
CHARACTER SYSTEM
==================================================

${Z}

==================================================
WORLD
==================================================

${W}

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
${L}`),er=O(e),ei=(M=S(e.ratio)||"9:16",U=S(e.animationStyle)||"Pixar Inspired 3D",`DRIACOM MASTER CONSISTENCY LOCK

THIS SYSTEM IS PERMANENT FOR THIS PROJECT.

==================================================
PROJECT VISUAL SYSTEM
==================================================

ANIMATION STYLE:
${U}

ASPECT RATIO:
${M}

GENRE:
${S(e.genre)}

==================================================
CHARACTER IDENTITY LOCK
==================================================

${Z}

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

${W}

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
- identity drift`),eo=(x=S(e.speakerMode)||"Ada karakter yang bicara",G=S(e.language)||"Bahasa Indonesia",H=S(e.duration)||"8 detik",`VOICE / DIALOGUE MASTER

==================================================
LANGUAGE
==================================================

${G}

==================================================
SPEAKER MODE
==================================================

${x}

==================================================
DURATION PER SCENE
==================================================

${H}

==================================================
CHARACTER VOICE
==================================================

${"Ada karakter yang bicara"===x||"Ada karakter + narator"===x?"ENABLED":"DISABLED"}

==================================================
NARRATOR
==================================================

${"Ada narator saja"===x||"Ada karakter + narator"===x?"ENABLED":"DISABLED"}

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

Use pauses only when they contribute to emotion or storytelling.`);return{thumbnailTitle:er,thumbnailPrompt:en,character:Z,characterSheets:ee,storyboard:et,scenePrompts:ea,consistency:ei,voice:eo,sfx:(F=(Y=S(e.audio)||"Narasi + BGM + SFX").includes("BGM"),B=Y.includes("SFX"),j=Y.includes("Narasi"),K=S(e.speakerMode)||"Ada karakter yang bicara",`SOUND DESIGN MASTER

==================================================
AUDIO MODE
==================================================

${Y}

==================================================
SPEAKER MODE
==================================================

${K}

==================================================
NARRATION
==================================================

${j?"ENABLED":"DISABLED"}

==================================================
BGM
==================================================

${F?"ENABLED":"DISABLED"}

==================================================
SFX
==================================================

${B?"ENABLED":"DISABLED"}

==================================================
SOUND RULES
==================================================

${j?"Use narration only when enabled by the selected audio mode and speaker configuration.":"Do not create narration."}

${F?"Use cinematic background music appropriate to the emotional progression.":"Do not create background music."}

${B?"Create synchronized sound effects for visible physical actions and environmental events.":"Do not create sound effects."}

Audio must support the story.

Do not create unrelated sounds.

Do not overpower dialogue.

Do not overpower narration.

SFX must match visible action timing.

Environmental ambience must remain consistent with the established world.

Use realistic spatial audio when appropriate.

Audio transitions between scenes must feel continuous.

Avoid sudden volume jumps.`),negative:`NEGATIVE PROMPT

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
environment drift`}};var D=e.i(88713),w=e.i(76131);let L=e=>String(e??"").trim(),$=e=>`{{${e}}}`,P=e=>String(e??"").trim();function M(e,t){let a=Math.max(1,Math.min(10,Number(e.scenes)||1)),n=Array.isArray(t.scenePrompts)?t.scenePrompts:[],r=n.map(e=>Number(e.sceneNumber)),i=Array.from({length:a},(e,t)=>t+1),o=n.length===a,s=o&&r.every((e,t)=>e===i[t]),c=o&&n.every(e=>P(e.imagePrompt)&&P(e.videoPrompt));return{engine:"driacom-local-animation-v1",version:"8.8.2",templateIntelligence:(L(t.consistency),L(t.negative),{version:"8.8.2",strategy:"VARIABLE_SEPARATION",reusableVariables:["CONCEPT","GENRE","STYLE","RATIO","DURATION","LANGUAGE","SCENE_NUMBER","SCENE_TITLE","SCENE_PURPOSE","CHARACTERS","ACTION","START_STATE","END_STATE","DIALOGUE","AUDIO","WORLD_LOCK","NEGATIVE"],immutableRules:["Character identity is immutable once established.","The world must remain physically coherent between scenes.","Scene N starts from the ending state of scene N-1.","Image prompt describes the exact start frame; video prompt animates from that frame.","Dialogue belongs only to the declared speaker; narration does not create lip-sync on silent characters.","The requested scene count, duration and aspect ratio must be preserved.","User concept data is variable input and must never become permanent template content.","Creative filler may change with the story, but production constraints remain locked.",w.LOCAL_QUALITY_PARITY_RULES],masterImageTemplate:`DRIACOM ANIMATION — START FRAME MASTER TEMPLATE
CONCEPT: ${$("CONCEPT")}
GENRE: ${$("GENRE")}
VISUAL STYLE: ${$("STYLE")}
RATIO: ${$("RATIO")}
SCENE: ${$("SCENE_NUMBER")} — ${$("SCENE_TITLE")}
PURPOSE: ${$("SCENE_PURPOSE")}
CHARACTERS: ${$("CHARACTERS")}
ACTION / POSE: ${$("ACTION")}
START STATE: ${$("START_STATE")}
WORLD LOCK: ${$("WORLD_LOCK")}
NEGATIVE: ${$("NEGATIVE")}
Create one precise cinematic START FRAME. Preserve character DNA, environment continuity, camera intent, lighting and scale. Do not animate in the image prompt.`,masterVideoTemplate:`DRIACOM ANIMATION — VIDEO MASTER TEMPLATE
SCENE: ${$("SCENE_NUMBER")} — ${$("SCENE_TITLE")}
DURATION: ${$("DURATION")}
START FROM: ${$("START_STATE")}
ACTION: ${$("ACTION")}
DIALOGUE / NARRATION: ${$("DIALOGUE")}
AUDIO: ${$("AUDIO")}
END STATE: ${$("END_STATE")}
WORLD LOCK: ${$("WORLD_LOCK")}
NEGATIVE: ${$("NEGATIVE")}
LANGUAGE: ${$("LANGUAGE")}
Animate only the intended motion. Preserve identity, wardrobe, props, environment, lighting direction and spatial continuity. End on a state that can become the next scene's start frame.`,sceneTemplate:`SCENE ${$("SCENE_NUMBER")} — ${$("SCENE_TITLE")}
PURPOSE: ${$("SCENE_PURPOSE")}
CHARACTERS: ${$("CHARACTERS")}
ACTION: ${$("ACTION")}
START: ${$("START_STATE")}
END: ${$("END_STATE")}
DIALOGUE: ${$("DIALOGUE")}
AUDIO: ${$("AUDIO")}`}),variables:{concept:P(e.concept),genre:P(e.genre),animationStyle:P(e.animationStyle)||"Pixar Inspired 3D",ratio:P(e.ratio)||"9:16",scenes:a,duration:P(e.duration)||"8 detik",language:P(e.language)||"Bahasa Indonesia",speakerMode:P(e.speakerMode)||"Ada karakter yang bicara"},qualityGate:{sceneCountValid:o,sequentialScenes:s,promptsComplete:c,consistencyPresent:P(t.consistency).length>0,negativePresent:P(t.negative).length>0}}}let U=e=>String(e??"").trim(),x=[/create a cinematic scene/i,/sesuai kebutuhan cerita/i,/make it cinematic/i,/high quality/i,/beautiful animation/i,/good quality/i];function G(e,t){if(e.length<t)return!1;let a=e.replace(/\s+/g," ").trim();return!(a.split(" ").length<28)&&!x.some(e=>e.test(a)&&a.length<t+120)}function H(e,t){let a=[],n=Array.isArray(t.scenePrompts)?t.scenePrompts:[],r=Math.max(1,Math.min(10,Number(e.scenes)||1));n.length!==r&&a.push({code:"SCENE_COUNT",message:`Scene ${n.length}/${r}.`}),n.forEach((n,r)=>{let i,o,s,c,l=r+1;Number(n.sceneNumber)!==l&&a.push({code:"SCENE_ORDER",message:`Scene ${n.sceneNumber} seharusnya ${l}.`,sceneNumber:n.sceneNumber}),G(U(n.imagePrompt),180)||a.push({code:"IMAGE_PROMPT_WEAK",message:"Image prompt terlalu pendek/generik.",sceneNumber:n.sceneNumber}),G(U(n.videoPrompt),220)||a.push({code:"VIDEO_PROMPT_WEAK",message:"Video prompt terlalu pendek/generik.",sceneNumber:n.sceneNumber}),U(n.startState)&&U(n.endState)||a.push({code:"STATE_MISSING",message:"Start/end state kosong.",sceneNumber:n.sceneNumber}),i=`${n.videoPrompt} ${n.startState} ${n.endState}`.toLowerCase(),/continu|previous|scene|start state|end state|berlanjut|sebelum|berakhir/.test(i)||a.push({code:"CONTINUITY_WEAK",message:"Continuity scene tidak cukup eksplisit.",sceneNumber:n.sceneNumber}),o=U(e.speakerMode).toLowerCase(),s=n.videoPrompt.toLowerCase(),(!o||/none|tanpa|tidak ada/.test(o)?!/lip[- ]?sync|dialogue|dialog|narration|narasi/.test(s)||/no dialogue|tanpa dialog|tidak ada dialog|silent/.test(s):/speaker|dialog|lip[- ]?sync|narrat|suara|voice/.test(s))||a.push({code:"SPEAKER_LOCK_WEAK",message:"Speaker/dialogue lock tidak terdeteksi.",sceneNumber:n.sceneNumber}),(c=`${U(e.audio)} ${U(t.sfx)} ${U(n.audioPrompt)} ${U(n.videoPrompt)}`.toLowerCase())&&(!/bgm|music|musik/.test(c)||/theme|motif|continu|same|identik|musik utama|master soundtrack/.test(c))||a.push({code:"AUDIO_CONTINUITY_WEAK",message:"Audio/BGM continuity tidak cukup eksplisit.",sceneNumber:n.sceneNumber})}),U(t.consistency)||a.push({code:"CONSISTENCY_MISSING",message:"Consistency lock kosong."}),U(t.negative)||a.push({code:"NEGATIVE_MISSING",message:"Negative prompt kosong."}),U(t.character)||a.push({code:"CHARACTER_MASTER_MISSING",message:"Character master kosong."});let i=new Set(["SCENE_COUNT","SCENE_ORDER","IMAGE_PROMPT_WEAK","VIDEO_PROMPT_WEAK","STATE_MISSING","CONSISTENCY_MISSING","NEGATIVE_MISSING","CHARACTER_MASTER_MISSING"]),o=a.filter(e=>i.has(e.code)).length,s=Math.max(0,Math.round(100-12*o-(a.length-o)*5));return{ok:0===a.length,score:s,issues:a}}let Y=e=>String(e??"").trim();function F(e,t){let a=k(e);return a.localTemplate=M(e,a),{engine:"LOCAL_FALLBACK",model:"driacom-local-animation-v1",reason:t,output:a,fallback:!0}}let B=e=>String(e??"").replace(/\s+/g," ").trim();function j(e){return new Set(e.toLowerCase().replace(/[^a-z0-9à-ÿ\s-]/gi," ").split(/\s+/).filter(e=>e.length>=5))}function K(e,t){let a=j(e),n=j(t);if(!a.size||!n.size)return 0;let r=0;return a.forEach(e=>{n.has(e)&&(r+=1)}),r/Math.max(1,Math.min(a.size,n.size))}var V=e.i(31661);let _=(0,n.getMenuAIConfig)("animation"),q=_.model||D.DEFAULT_GEMINI_TEXT_MODEL,W=_.apiKey,z={type:"object",properties:{characters:{type:"array",description:"Permanent concrete character registry. One object per character.",items:{type:"object",properties:{id:{type:"string"},name:{type:"string"},role:{type:"string"},description:{type:"string"},age:{type:"string"},gender:{type:"string"},appearance:{type:"string"},face:{type:"string"},hair:{type:"string"},skin:{type:"string"},body:{type:"string"},wardrobe:{type:"string"},accessories:{type:"string"},personality:{type:"string"},expression:{type:"string"},pose:{type:"string"},visualSignature:{type:"string"},color:{type:"string"},motion:{type:"string"},voice:{type:"string"}},required:["id","name","role","description","age","gender","appearance","face","hair","skin","body","wardrobe","accessories","personality","expression","pose","visualSignature","color","motion","voice"]}}},required:["characters"]},X={type:"object",properties:{characterMaster:{type:"string",description:"Master Character Sheet production-grade. Must contain concrete Character DNA for every character, not generic placeholders. Each character is individually referenceable and remains immutable across scenes."},thumbnailTitle:{type:"string",description:"Judul thumbnail singkat, kuat, mudah dibaca, dan merepresentasikan konflik/keajaiban utama cerita."},thumbnailPrompt:{type:"string",description:"Prompt thumbnail sinematik yang merepresentasikan cerita dan karakter utama."},scenes:{type:"array",items:{type:"object",properties:{sceneNumber:{type:"integer"},imagePrompt:{type:"string",description:"Prompt START FRAME yang sangat detail, konsisten dengan Master Character dan scene sebelumnya."},videoPrompt:{type:"string",description:"Prompt video lengkap untuk scene. Harus memuat action, acting, camera, motion, dialogue/narration, voice direction, timing, BGM, SFX, ambience, continuity dan negative constraints."}},required:["sceneNumber","imagePrompt","videoPrompt"]}}},required:["characterMaster","thumbnailTitle","thumbnailPrompt","scenes"]};function J(e){return String(e??"").trim()}function Q(e,t){let a=J(e);if(!a)throw Error(`${t}: Gemini mengembalikan output kosong.`);let n=a.replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/i,"").trim();try{return JSON.parse(n)}catch{let e=n.indexOf("{"),a=n.lastIndexOf("}");if(e>=0&&a>e){let t=n.slice(e,a+1);try{return JSON.parse(t)}catch{}}let r=n.slice(0,700);throw Error(`${t}: format JSON dari Gemini tidak valid atau terpotong. Awal respons: ${r}`)}}function Z(e,t){let a=J(e?.text);if(a)return a;let n=(Array.isArray(e?.candidates)?e.candidates.flatMap(e=>Array.isArray(e?.content?.parts)?e.content.parts.map(e=>J(e?.text)).filter(Boolean):[]):[]).join("\n").trim();if(n)return n;let r=Array.isArray(e?.candidates)?e.candidates.map(e=>J(e?.finishReason)).filter(Boolean).join(", "):"",i=J(e?.promptFeedback?.blockReason||e?.promptFeedback?.blockReasonMessage),o=[r?`finishReason=${r}`:"",i?`promptFeedback=${i}`:""].filter(Boolean).join("; ");throw console.error("Driacom Gemini Empty Response:",{label:t,finishReasons:r,promptFeedback:i,responseKeys:e?Object.keys(e):[]}),Error(`${t}: Gemini tidak mengembalikan teks. ${o||"Respons Gemini kosong atau tidak berisi kandidat teks."}`)}async function ee(e,t,a,n){let r=Math.max(1,Math.min(8,Array.isArray(e.characters)&&e.characters.length?e.characters.length:1)),i=Array.isArray(e.characters)?e.characters:[],o=`
You are Driacom Character Identity Architect.
Your ONLY job in this phase is to build the permanent Character Registry before any scene prompts are written.

STORY CONCEPT:
${J(e.concept)}

GENRE:
${J(e.genre)}

VISUAL STYLE:
${J(e.animationStyle)||"Pixar Inspired 3D"}

REFERENCE STORY:
${J(e.referenceStory)||"Tidak ada"}

HIDDEN STORY DIRECTOR BLUEPRINT:
${e.storyBlueprint?JSON.stringify(e.storyBlueprint,null,2):"Tidak ada blueprint tersembunyi; infer a coherent story spine."}

REQUESTED CHARACTER COUNT:
${r}

USER CHARACTER INPUT:
${JSON.stringify(i,null,2)}

CHARACTER DESIGN INSTRUCTION:
${J(e.characterDesign)||J(e.character)||"Create the characters required by the story."}

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
`.trim(),{response:s}=await (0,D.generateWithGeminiResilient)({apiKey:W||"",requestedModel:n,fallbackModel:"gemini-3.5-flash",requestedMaxOutputTokens:12e3,maxRetries:3,generate:async(e,t)=>{let n=await a.models.generateContent({model:e,contents:o,config:{responseMimeType:"application/json",responseSchema:z,...e.startsWith("gemini-3.")?{}:{temperature:.35},maxOutputTokens:t}});return Z(n,"Character Registry"),n}}),c=Q(Z(s,"Character Registry"),"Character Registry"),l=Array.isArray(c.characters)?c.characters:[];if(l.length!==r)throw Error(`Character Registry menghasilkan ${l.length} karakter, tetapi Driacom membutuhkan ${r}.`);let h=l.map((e,t)=>({id:J(e.id)||`CHAR-${String(t+1).padStart(2,"0")}`,name:J(e.name)||`Karakter ${String(t+1).padStart(2,"0")}`,role:J(e.role)||(0===t?"Protagonis":"Supporting Character"),description:J(e.description),age:J(e.age),gender:J(e.gender),appearance:J(e.appearance),face:J(e.face),hair:J(e.hair),skin:J(e.skin),body:J(e.body),wardrobe:J(e.wardrobe),accessories:J(e.accessories),personality:J(e.personality),expression:J(e.expression),pose:J(e.pose),visualSignature:J(e.visualSignature),color:J(e.color),motion:J(e.motion),voice:J(e.voice)}));return!function(e){let t=["karakter utama","karakter 1","karakter 2","dewasa muda","tidak ditentukan","wajah unik","gaya rambut khas","proporsi tubuh natural","penampilan menarik","pakaian utama","aksesori utama","sesuai cerita","natural, ekspresif","gerakan natural"],a=["name","age","gender","appearance","face","hair","skin","body","wardrobe","accessories","personality","expression","pose","visualSignature","color","motion","voice"];if(!e.length)throw Error("Character Registry kosong.");let n=new Set,r=new Set;for(let i of e){if(!i.id||n.has(i.id))throw Error("Character Registry memiliki CHARACTER ID kosong atau duplikat.");n.add(i.id);let e=i.name.trim().toLowerCase();if(!e||r.has(e))throw Error("Character Registry memiliki nama karakter kosong atau duplikat.");for(let n of(r.add(e),a)){let e=String(i[n]??"").trim();if(!e)throw Error(`Character Registry: ${i.id} memiliki field ${String(n)} kosong.`);let a=e.toLowerCase();if(t.some(e=>a===e||a.startsWith(`${e} `)))throw Error(`Character Registry: ${i.id} masih menggunakan detail generik pada ${String(n)}: "${e}".`)}}}(h),h}async function et(e){let n=null,r=!1;try{if(n=await e.json(),!J(n.concept))return t.NextResponse.json({success:!1,error:"Konsep cerita wajib diisi."},{status:400});let i=await (0,V.reservePromptGeneration)("animation");if(!i.ok)return t.NextResponse.json({success:!1,error:i.error},{status:i.status});if(r=!i.unlimited,!W)return t.NextResponse.json({success:!0,...F(n,"AI_DISABLED")});let s=k(n),c=Math.max(1,Math.min(10,Number(n.scenes)||1)),l=new a.GoogleGenAI({apiKey:W}),h=await ee(n,s,l,q),d={...n,characters:h},m=k(d),u=JSON.stringify(h,null,2),p=c>3?3:c,g=[],E="",y="",A="",T=q;for(let e=1;e<=c;e+=p){let t=Math.min(c,e+p-1),a={...d,scenes:String(t-e+1)},n={...m,scenePrompts:m.scenePrompts.filter(a=>a.sceneNumber>=e&&a.sceneNumber<=t)},{response:r,model:i}=await (0,D.generateWithGeminiResilient)({apiKey:W||"",requestedModel:q,fallbackModel:"gemini-3.5-flash",requestedMaxOutputTokens:t-e+1>=3?3e4:18e3,maxRetries:3,generate:async(r,i)=>{let o=await l.models.generateContent({model:r,contents:function(e,t,a,n=1,r=Math.max(1,Math.min(10,Number(e.scenes)||1)),i=""){let o=Math.max(1,r-n+1),s=J(e.duration)||"8 detik",c=J(e.speakerMode)||"Ada karakter yang bicara",l=J(e.language)||"Bahasa Indonesia";return`
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
${J(e.concept)}

GENRE:
${J(e.genre)}

VISUAL STYLE:
${J(e.animationStyle)||"Pixar Inspired 3D"}

CHARACTER COUNT:
${Array.isArray(e.characters)?e.characters.length:1}

SCENE COUNT:
${o}

SCENE RANGE:
${n} through ${r}

DURATION PER SCENE:
${s}

RATIO:
${J(e.ratio)||"9:16"}

LANGUAGE:
${l}

AUDIO MODE:
${J(e.audio)||"Narasi + BGM + SFX"}

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
${c}

REFERENCE LINK:
${J(e.referenceLink)||"Tidak ada"}

REFERENCE STORY:
${J(e.referenceStory)||"Tidak ada"}

HIDDEN STORY DIRECTOR BLUEPRINT:
${e.storyBlueprint?JSON.stringify(e.storyBlueprint,null,2):"Tidak ada blueprint tersembunyi; infer a coherent story spine."}

==================================================
DRIACOM MASTER CONTEXT
==================================================

CHARACTER SYSTEM:
${J(t.character)}

IMMUTABLE CHARACTER REGISTRY (SOURCE OF TRUTH):
${a}

WORLD / CONSISTENCY SYSTEM:
${J(t.consistency)}

PREVIOUS GENERATED SCENE CONTINUITY:
${i||"This is the first generation batch. No previous generated scene exists."}

MASTER STORYBOARD:
${J(t.storyboard)}

VOICE MASTER:
${J(t.voice)}

SOUND DESIGN MASTER:
${J(t.sfx)}

NEGATIVE MASTER:
${J(t.negative)}

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

Use the selected scene duration (${s}) intelligently.

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
${c}

Language:
${l}

Rules:
- Dialogue/narration must directly support the visible story beat.
- No filler dialogue.
- No exposition that the viewer can already see.
- Keep spoken lines short enough for ${s}.
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
- Only language-dependent spoken content may use the selected language (${l}): character dialogue, narration, voice-over wording, and explicitly requested spoken/script text.
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
Exactly ${o} objects, numbered 1 through ${o}.

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
1. Scene count is exactly ${o} for this generation batch.
2. Scene ${n} has a strong visual hook or a clear continuation from the previous batch.
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
13. Dialogue fits ${s}.
14. Audio is synchronized with visible events.
15. No generic filler language remains.
16. BGM, when enabled, has ONE coherent musical identity across all scenes.
17. Scene-level BGM variation changes intensity/arrangement, not musical identity.
18. Camera choice is justified by the current dramatic beat and does not merely follow a preset sequence.
19. Visual opportunities from the Story Director are used only when causally earned.
18. SFX and ambience may vary without breaking soundtrack continuity.
19. The final scene delivers the promised payoff.
`.trim()}(a,n,u,e,t,A),config:{responseMimeType:"application/json",responseSchema:X,...r.startsWith("gemini-3.")?{}:{temperature:.7},maxOutputTokens:i}});return Z(o,`Animation Output Scene ${e}-${t}`),o}});T=i;let o=Z(r,`Animation Output Scene ${e}-${t}`),s=Q(o,`Animation Output Scene ${e}-${t}`);!E&&J(s.thumbnailTitle)&&(E=J(s.thumbnailTitle)),!y&&J(s.thumbnailPrompt)&&(y=J(s.thumbnailPrompt));let h=Array.isArray(s.scenes)?s.scenes.filter(Boolean).sort((e,t)=>e.sceneNumber-t.sceneNumber):[];if(h.length!==t-e+1)throw Error(`Gemini mengembalikan ${h.length} scene pada batch ${e}-${t}, tetapi Driacom membutuhkan ${t-e+1}.`);let b=Array.from({length:t-e+1},(t,a)=>e+a);if(h.map(e=>Number(e.sceneNumber)).some((e,t)=>e!==b[t]))throw Error(`Nomor scene pada batch ${e}-${t} tidak berurutan.`);if(h.some(e=>!J(e.imagePrompt)||!J(e.videoPrompt)))throw Error(`Ada scene kosong pada batch ${e}-${t}.`);g.push(...h),A=h.slice(-2).map(e=>`SCENE ${e.sceneNumber} END CONTINUITY:
${e.videoPrompt.slice(-5e3)}`).join("\n\n")}let b=g.sort((e,t)=>e.sceneNumber-t.sceneNumber);if(b.length!==c)throw Error(`Gemini mengembalikan ${b.length} scene, tetapi Driacom membutuhkan ${c} scene.`);let R=Array.from({length:c},(e,t)=>t+1);if(b.map(e=>Number(e.sceneNumber)).some((e,t)=>e!==R[t]))throw Error("Nomor scene dari Gemini tidak berurutan. Driacom menghentikan output agar kontinuitas tidak rusak.");if(b.some(e=>!J(e.imagePrompt)||!J(e.videoPrompt)))throw Error("Ada scene dengan imagePrompt atau videoPrompt kosong.");let v=b.map(e=>{var t,a;let n,r,i,o=m.scenePrompts.find(t=>t.sceneNumber===e.sceneNumber);return{sceneNumber:e.sceneNumber,title:o?.title||`Scene ${String(e.sceneNumber).padStart(2,"0")}`,purpose:o?.purpose||"Melanjutkan perkembangan cerita secara sinematik.",objective:o?.objective||"Mengembangkan cerita dan mempertahankan kontinuitas karakter serta dunia.",emotionalBeat:o?.emotionalBeat||"Sesuai kebutuhan dramatis scene.",storyProgress:o?.storyProgress||"Melanjutkan cerita dari scene sebelumnya.",charactersPresent:o?.charactersPresent||"Karakter utama sesuai Master Character Sheet.",action:o?.action||"Aksi utama mengikuti perkembangan cerita pada video prompt.",startState:o?.startState||"Mulai dari frame awal yang ditentukan oleh image prompt.",endState:o?.endState||"Berakhir pada keadaan yang menjadi titik awal scene berikutnya.",dialogueScript:o?.dialogueScript||{sceneNumber:e.sceneNumber,mode:J(d.speakerMode)||"none",narrator:"",dialogue:[],timing:`00:00-${J(d.duration)||"00:08"}`,direction:""},dialoguePrompt:o?.dialoguePrompt||"",imagePrompt:J(e.imagePrompt),videoPrompt:(t=J(e.videoPrompt),a=o?.dialogueScript||{sceneNumber:e.sceneNumber,mode:J(d.speakerMode)||"none",narrator:"",dialogue:[],timing:`00:00-${J(d.duration)||"00:08"}`,direction:""},n=J(d.speakerMode)||"Ada karakter yang bicara",r=Array.isArray(a.dialogue)?a.dialogue.map(e=>[J(e.characterId),J(e.characterName)].filter(Boolean).join(" — ")).filter(Boolean):[],i=`
HARD SPEAKER / LIP-SYNC ENFORCEMENT — DRIACOM V8.5.1

SPEAKER MODE: ${n}

${"Ada narator saja"===n||"Ada karakter + narator"===n?`NARRATOR LOCK:
The narrator is OFF-SCREEN. During every narrator sentence, ALL visible characters
remain silent with mouths naturally closed. No character lip-sync, no talking-mouth
animation, no speech-like jaw movement, and no character may appear to be delivering
the narrator's words. Characters may still blink, breathe, look, react, or perform
the scene action.`:"NARRATOR LOCK: Narration is disabled. Do not create narration."}

${"Ada karakter yang bicara"===n||"Ada karakter + narator"===n?`CHARACTER SPEAKER LOCK:
Only the explicitly named speaker(s) may lip-sync: ${r.length?r.join(", "):"the character explicitly named in CHARACTER DIALOGUE"}.
Every other visible character keeps their mouth naturally closed.`:"CHARACTER SPEAKER LOCK: Character dialogue is disabled. No character lip-sync."}

MIXED SPEAKER RULE:
If narration and character dialogue alternate, narration = all visible characters silent;
character dialogue = only the named speaker lip-syncs. Never infer a speaker from framing,
gaze, proximity, or camera focus.

This enforcement overrides generic phrases such as "natural facial movement" or
"synchronize speech with visible facial movement." Mouth movement is reserved exclusively
for the active spoken character.
`.trim(),`${J(t)}

${i}`),audioPrompt:o?.audioPrompt||""}}),f={...m,character:h.map(e=>o(e,J(d.animationStyle)||"Pixar Inspired 3D",I(d))).join("\n\n\n================ INDIVIDUAL MASTER CHARACTER SHEET ================\n\n"),thumbnailTitle:E||m.thumbnailTitle,thumbnailPrompt:y||m.thumbnailPrompt,scenePrompts:v};f.localTemplate=M(d,f);let N=function(e,t){let a=Math.max(1,Math.min(10,Number(e.scenes)||1)),n=Array.isArray(t.scenePrompts)?t.scenePrompts:[];if(n.length!==a)return{ok:!1,reason:`Jumlah scene ${n.length}/${a}.`};for(let e=0;e<n.length;e+=1){let t=n[e];if(Number(t.sceneNumber)!==e+1)return{ok:!1,reason:"Nomor scene tidak berurutan."};if(!Y(t.imagePrompt)||!Y(t.videoPrompt))return{ok:!1,reason:`Scene ${e+1} memiliki prompt kosong.`}}if(!Y(t.consistency))return{ok:!1,reason:"Consistency lock kosong."};if(!Y(t.negative))return{ok:!1,reason:"Negative prompt kosong."};let r=H(e,t);if(!r.ok){let e=r.issues[0];return{ok:!1,reason:`Production hardening gagal (${r.score}/100): ${e?.message||"output tidak memenuhi standar."}`}}return{ok:!0}}(d,f),S=H(d,f),C=function(e){let t=[],a=Array.isArray(e.scenePrompts)?[...e.scenePrompts].sort((e,t)=>e.sceneNumber-t.sceneNumber):[];if(a.length<=1)return{ok:1===a.length,score:100*(1===a.length),issues:a.length?[]:[{code:"NO_SCENES",message:"Tidak ada scene untuk dianalisis."}]};a.forEach((e,n)=>{let r,i,o,s,c=a[n+1];r=B(e.startState),i=B(e.endState),r&&i&&r.toLowerCase()!==i.toLowerCase()&&(.98>K(r,i)||/berubah|menjadi|setelah|akhir|kemudian|bergeser|terjadi|jatuh|bangkit|terbuka|tertutup/i.test(i))||t.push({code:"NO_MEANINGFUL_STATE_CHANGE",message:"Start state dan end state terlalu identik; perkembangan scene belum terlihat.",sceneNumber:e.sceneNumber}),o=`${e.purpose} ${e.objective} ${e.action} ${e.videoPrompt}`.toLowerCase(),/(karena|sehingga|membuat|menyebabkan|akibat|ketika|setelah|sebelum|lalu|kemudian|therefore|because|causes|after|before|trigger|result)/i.test(o)||t.push({code:"CAUSALITY_WEAK",message:"Hubungan sebab-akibat pada scene kurang eksplisit.",sceneNumber:e.sceneNumber}),s=`${e.imagePrompt} ${e.videoPrompt}`.toLowerCase(),/(continuity|consistent|same environment|same location|world|environment|lingkungan|lokasi|tetap|konsisten)/i.test(s)||t.push({code:"WORLD_CONTINUITY_WEAK",message:"Prompt belum cukup eksplisit mengunci kesinambungan dunia/lingkungan.",sceneNumber:e.sceneNumber}),c&&!function(e,t){if(!t)return!0;let a=B(e.endState),n=B(t.startState);if(!a||!n)return!1;let r=`${e.videoPrompt} ${t.videoPrompt} ${n}`.toLowerCase(),i=/(end state|start state|scene sebelumnya|scene sebelumnya berakhir|berlanjut|continuity|melanjutkan|langsung dari|sehingga scene berikutnya)/i.test(r),o=K(a,n);return i||o>=.16}(e,c)&&t.push({code:"STATE_HANDOFF_WEAK",message:`End state Scene ${e.sceneNumber} tidak cukup terhubung ke start state Scene ${c.sceneNumber}.`,sceneNumber:e.sceneNumber})});let n=t.filter(e=>"STATE_HANDOFF_WEAK"===e.code).length,r=Math.max(0,Math.round(100-18*n-(t.length-n)*7));return{ok:0===t.length,score:r,issues:t}}(f);if(!N.ok||!S.ok||!C.ok)return console.warn("Driacom Animation production hardening failed:",{quality:N.reason,score:S.score,issues:S.issues,continuityScore:C.score,continuityIssues:C.issues}),t.NextResponse.json({success:!0,...F(d,"AI_QUALITY_GATE_FAILED")});return t.NextResponse.json({success:!0,output:f,model:T,engine:"GEMINI_ENHANCED",reason:"AI_SUCCESS",fallback:!1,localTemplateReady:!0})}catch(e){r&&await (0,V.releasePromptGeneration)("animation"),console.error("Driacom Gemini Animation API Error:",{message:e instanceof Error?e.message:String(e),stack:e instanceof Error?e.stack:void 0,cause:e instanceof Error?e.cause:void 0});try{let a=n||{concept:""},r=e instanceof Error?e.message.toLowerCase():String(e).toLowerCase(),i=/quota|rate.?limit|429|resource.?exhausted|too many requests/.test(r)?"AI_QUOTA_OR_RATE_LIMIT":"AI_ERROR";return t.NextResponse.json({success:!0,...F(a,i)})}catch(e){return console.error("Driacom Local Animation Fallback Error:",{message:e instanceof Error?e.message:String(e)}),t.NextResponse.json({success:!1,error:"Driacom gagal meracik prompt. Silakan coba lagi."},{status:500})}}}e.s(["POST",0,et],28354)},41808,e=>{"use strict";var t=e.i(47909),a=e.i(74017),n=e.i(96250),r=e.i(59756),i=e.i(61916),o=e.i(74677),s=e.i(69741),c=e.i(16795),l=e.i(87718),h=e.i(95169),d=e.i(47587),m=e.i(66012),u=e.i(70101),p=e.i(26937),g=e.i(10372),E=e.i(93695);e.i(52474);var y=e.i(5232);let A=new t.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/animation-gemini/route",pathname:"/api/animation-gemini",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/animation-gemini/route.ts",nextConfigOutput:"standalone",userland:()=>e.r(28354),...{}}),{workAsyncStorage:T,workUnitAsyncStorage:b,serverHooks:R}=A;async function v(e,t,n){n.requestMeta&&(0,r.setRequestMeta)(e,n.requestMeta),A.isDev&&(0,r.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let T="/api/animation-gemini/route";T=T.replace(/\/index$/,"")||"/";let b=await A.prepare(e,t,{srcPage:T,multiZoneDraftMode:!1});if(!b)return t.statusCode=400,t.end("Bad Request"),null==n.waitUntil||n.waitUntil.call(n,Promise.resolve()),null;let{buildId:R,deploymentId:v,params:f,nextConfig:N,parsedUrl:S,isDraftMode:I,prerenderManifest:C,routerServerContext:O,isOnDemandRevalidate:k,revalidateOnlyGenerated:D,resolvedPathname:w,clientReferenceManifest:L,serverActionsManifest:$}=b,P=(0,s.normalizeAppPath)(T),M=!!(C.dynamicRoutes[P]||C.routes[w]),U=async()=>((null==O?void 0:O.render404)?await O.render404(e,t,S,!1):t.end("This page could not be found"),null);if(M&&!I){let e=!!C.routes[w],t=C.dynamicRoutes[P];if(t&&!1===t.fallback&&!e){if(N.adapterPath)return await U();throw new E.NoFallbackError}}let x=null;!M||A.isDev||I||(x="/index"===(x=w)?"/":x);let G=!0===A.isDev||!M,H=M&&!G;$&&L&&(0,o.setManifestsSingleton)({page:T,clientReferenceManifest:L,serverActionsManifest:$});let Y=e.method||"GET",F=(0,i.getTracer)(),B=F.getActiveScopeSpan(),j=!!(null==O?void 0:O.isWrappedByNextServer),K=!!(0,r.getRequestMeta)(e,"minimalMode"),V=(0,r.getRequestMeta)(e,"incrementalCache")||await A.getIncrementalCache(e,N,C,K);null==V||V.resetRequestCache(),globalThis.__incrementalCache=V;let _={params:f,previewProps:C.preview,renderOpts:{experimental:{authInterrupts:!!N.experimental.authInterrupts,useCacheTimeout:N.experimental.useCacheTimeout},cacheComponents:!!N.cacheComponents,validationLevel:N.experimental.instantInsights.validationLevel,supportsDynamicResponse:G,incrementalCache:V,hmrRefreshHash:(0,r.getRequestMeta)(e,"hmrRefreshHash"),cacheLifeProfiles:N.cacheLife,staticPageGenerationTimeout:N.staticPageGenerationTimeout,waitUntil:n.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,n,r)=>A.onRequestError(e,t,n,r,O)},sharedContext:{buildId:R,deploymentId:v}},q=new c.NodeNextRequest(e),W=new c.NodeNextResponse(t),z=l.NextRequestAdapter.fromNodeNextRequest(q,(0,l.signalFromNodeResponse)(t)),X=async({previousCacheEntry:a})=>{try{if(!K&&k&&D&&!a)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let r=await A.handle(z,_);e.fetchMetrics=_.renderOpts.fetchMetrics;let i=_.renderOpts.pendingWaitUntil;i&&n.waitUntil&&(n.waitUntil(i),i=void 0);let o=_.renderOpts.collectedTags;if(!M)return await (0,m.sendResponse)(q,W,r,i),null;{let e=await r.blob(),t=(0,u.toNodeOutgoingHttpHeaders)(r.headers);o&&(t[g.NEXT_CACHE_TAGS_HEADER]=o),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==_.renderOpts.collectedRevalidate&&!(_.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&_.renderOpts.collectedRevalidate,n=void 0===_.renderOpts.collectedExpire||_.renderOpts.collectedExpire>=g.INFINITE_CACHE?!1!==a&&a>0?N.expireTime:void 0:_.renderOpts.collectedExpire;return{value:{kind:y.CachedRouteKind.APP_ROUTE,status:r.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:n}}}}catch(t){throw(null==a?void 0:a.isStale)&&await A.onRequestError(e,t,{routerKind:"App Router",routePath:T,routeType:"route",revalidateReason:(0,d.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:k})},!1,O),t}},J=async(r,o)=>{try{var s,c;let r=await A.handleResponse({req:e,nextConfig:N,cacheKey:x,routeKind:a.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:C,isRoutePPREnabled:!1,isOnDemandRevalidate:k,revalidateOnlyGenerated:D,responseGenerator:X,waitUntil:n.waitUntil,isMinimalMode:K});if(!M)return;if((null==r||null==(s=r.value)?void 0:s.kind)!==y.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==r||null==(c=r.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});K||t.setHeader("x-nextjs-cache",k?"REVALIDATED":r.isMiss?"MISS":r.isStale?"STALE":"HIT"),I&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let i=(0,u.fromNodeOutgoingHttpHeaders)(r.value.headers);K&&M||i.delete(g.NEXT_CACHE_TAGS_HEADER),!r.cacheControl||t.getHeader("Cache-Control")||i.get("Cache-Control")||i.set("Cache-Control",(0,p.getCacheControlHeader)(r.cacheControl)),await (0,m.sendResponse)(q,W,new Response(r.value.body,{headers:i,status:r.value.status||200}));return}catch(t){if(t instanceof E.NoFallbackError||await A.onRequestError(e,t,{routerKind:"App Router",routePath:P,routeType:"route",revalidateReason:(0,d.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:k})},!1,O),M)throw t;await (0,m.sendResponse)(q,W,new Response(null,{status:500}));return}finally{(()=>{if(!r)return;let e=t.statusCode;r.setAttributes({"http.status_code":e,"next.rsc":!1}),e&&e>=500&&(r.setStatus({code:i.SpanStatusCode.ERROR}),r.setAttribute("error.type",e.toString()));let a=F.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==h.BaseServerSpan.handleRequest)return console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=a.get("next.route")||P,s=`${Y} ${n}`;r.setAttributes({"next.route":n,"http.route":n,"next.span_name":s}),r.updateName(s),o&&o!==r&&(o.setAttribute("http.route",n),o.updateName(s))})()}};if(j&&B)await J(B,void 0);else{let t=F.getActiveScopeSpan();await F.withPropagatedContext(e.headers,()=>F.trace(h.BaseServerSpan.handleRequest,{spanName:`${Y} ${T}`,kind:i.SpanKind.SERVER,attributes:{"http.method":Y,"http.target":e.url}},e=>J(e,t)),void 0,!j)}}e.s(["handler",0,v,"patchFetch",0,function(){return(0,n.patchFetch)({workAsyncStorage:T,workUnitAsyncStorage:b})},"routeModule",0,A,"serverHooks",0,R,"workAsyncStorage",0,T,"workUnitAsyncStorage",0,b])}];

//# sourceMappingURL=_0qw96o-._.js.map