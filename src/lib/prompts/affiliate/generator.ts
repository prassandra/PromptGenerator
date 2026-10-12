import type { AffiliateForm, AffiliateBlueprint, AffiliateScene } from "./types";
import { STORYBOARD_EXECUTION_RULES, AFFILIATE_EXECUTION_RULES } from "@/lib/prompts/storyboard-system";
import { LOCAL_QUALITY_PARITY_RULES } from "@/lib/prompts/local-quality-parity";

const clean = (v: unknown) => String(v ?? "").trim();

function parseSceneDuration(value: string): number {
  const match = String(value || "8 detik per scene").match(/\d+(?:\.\d+)?/);
  const seconds = Number(match?.[0] || 8);
  return Math.max(1, Math.min(30, seconds));
}

const voiceDescription: Record<AffiliateForm["voiceStyle"], string> = {
  Natural: "natural, relaxed, like a creator sharing a real experience",
  Softselling: "gently persuasive, benefits are clear without a hard push",
  Hardselling: "direct, decisive, with clear benefits and CTA",
};

function fallbackGoal(form: AffiliateForm) {
  return clean(form.advertisingGoal) || `show ${clean(form.productName) || "this product"}, the most relevant benefits, a realistic usage demonstration, the experience after use, and a natural CTA`;
}

function requiredDisplay(form: AffiliateForm) {
  return clean(form.requiredDisplay) || "clearly show the packaging, shape, color, material, key details, relevant texture, and the most important visible product areas according to the reference product";
}

function wardrobeAdaptationRule(form: AffiliateForm, product: string) {
  if (form.presence !== "Pakai Karakter") return "";
  return `
WARDROBE / MODESTY INTELLIGENCE — CRITICAL FOR APPAREL AFFILIATE
- First classify the uploaded product reference. If the product is wearable clothing (for example pants, cargo pants, skirt, shirt, blouse, dress, outerwear, hijab, shoes, etc.), the PRODUCT REFERENCE has priority over the character's original clothing.
- The character reference is the source of truth for IDENTITY, not an instruction to copy the original outfit into the new product styling.
- Example: if the uploaded character is wearing a batik top but the promoted product is cargo pants, DO NOT generate the character wearing the batik top + cargo pants merely because both appear in the reference. Adapt or replace the top so the final outfit is a coherent modest outfit that complements and showcases ${product}.
- For an apparel product, build a coordinated supporting wardrobe around the promoted product: appropriate top, hijab if present, and footwear/accessories as needed. Keep them visually simple so the promoted product remains the hero.
- Do not copy unrelated clothing prints, colors, silhouettes, logos, or garments from the character reference unless the product itself is that garment or the user explicitly requests that wardrobe item to remain.
- MODESTY RULE: the final outfit must always be polite and cover the body appropriately. Never expose breasts, cleavage, navel, abdomen, buttocks, groin, or upper thighs. No transparent clothing and no intentionally revealing openings.
- For a hijab-wearing female character: the hijab remains consistent with the character identity/style when appropriate; a fitted/slim-fit supporting top is allowed only when it is sufficiently long, opaque, and fully covers the torso/waist area and does not reveal body contours in an inappropriate way. Prefer a neat, longer top when needed.
- Do not change the character's face, skin tone, body identity, hijab identity, or recognizable features merely to fit the clothing.
- The promoted product itself must NEVER be modified to accommodate the wardrobe. Adapt the supporting wardrobe to the product.
- If the product reference does not show a certain hidden garment surface or angle, do not invent product construction details.
`;
}

function contentBlueprint(form: AffiliateForm, sceneNumber: number, sceneCount: number, product: string, goal: string) {
  const last = sceneNumber === sceneCount;
  const type = form.contentType;
  if (type === "Unboxing") {
    if (sceneNumber === 1) return `HOOK + PACKAGE REVEAL: stop the scroll, show the unopened package/product clearly, establish curiosity about ${product}.`;
    if (last) return `FIRST IMPRESSION + CTA: show the opened product in a clean hero hold, summarize only visible first-impression points, then close with a natural CTA.`;
    return `UNBOXING PROGRESSION: open/handle ${product}, reveal one real visible detail at a time, and continue from the exact physical state of the previous scene.`;
  }
  if (type === "Review Produk") {
    if (sceneNumber === 1) return `HOOK + PRODUCT INTRO: introduce the problem/question and immediately identify ${product}.`;
    if (last) return `RESULT + OPINION + CTA: show the final result, give a concise honest-feeling conclusion based only on demonstrated/visible information, then natural CTA.`;
    return `REVIEW DEMONSTRATION: demonstrate ${product}, show a visible detail/benefit, and make the evidence visually understandable before moving on.`;
  }
  if (type === "Spill Produk") {
    if (sceneNumber === 1) return `SCROLL-STOPPING PRODUCT SPILL: reveal ${product} early and make the product the visual hero without feeling like a TV commercial.`;
    if (last) return `RESULT + CTA: show the product/result together and finish with a direct but natural affiliate CTA.`;
    return `PRODUCT DEMONSTRATION: put ${product} into real use. The camera must move closer when the action matters and show the product interacting with the relevant body/object.`;
  }
  if (type === "Soft Selling") {
    if (sceneNumber === 1) return `LIFESTYLE HOOK: begin with a believable everyday moment where ${product} naturally belongs, without an obvious hard-sell opening.`;
    if (last) return `NATURAL PAYOFF + SOFT CTA: show the result and casually recommend ${product} without aggressive sales language.`;
    return `LIFESTYLE INTEGRATION: naturally use ${product} inside the activity, prioritizing believable behavior over staged advertising.`;
  }
  if (sceneNumber === 1) return `UGC HOOK + PRODUCT REVEAL: creator-style opening, quickly identify ${product}, and establish a relatable reason to care.`;
  if (last) return `UGC RESULT + RECOMMENDATION: show the result, creator reaction/opinion, product in frame, and a conversational CTA.`;
  return `UGC PRODUCT DEMONSTRATION: genuinely use ${product}, show the important action/result close enough to understand, and keep the footage casual and believable. ${goal}`;
}

function motionStyleBehavior(style: AffiliateForm["motionTextStyle"]) {
  if (style === "Kinetic") return "energetic word-by-word reveal, small punch/scale and directional movement synchronized to speech/action; never chaotic or covering the product.";
  if (style === "Highlight") return "mostly stable editorial text with only the key word emphasized by subtle scale/brightness/position change; prioritize benefit/product keywords.";
  return "clean dynamic pop/slide with subtle scale and smooth entrance/exit synchronized to the beat; default UGC-friendly behavior.";
}

function autoMotionText(form: AffiliateForm, sceneNumber: number, sceneCount: number, product: string, goal: string, required: string) {
  if (!form.motionText) return "MOTION TEXT: OFF — no promotional on-screen text, stickers, icons, badges, or CTA overlays.";
  const style = form.motionTextStyle;
  const feature = required.split(",")[0]?.trim() || "detail utama";
  const purpose = contentBlueprint(form, sceneNumber, sceneCount, product, goal);
  let beat = sceneNumber === 1 ? `HOOK: choose one short curiosity/reveal phrase about ${product}` : sceneNumber === sceneCount ? `RESULT/CTA: choose one short phrase based on the demonstrated result or ${feature}` : `CONTENT HIGHLIGHT: choose one short phrase from the scene's actual demonstrated benefit/action, especially ${feature}`;
  return `MOTION TEXT DIRECTOR — ON. Style: ${style}. Behavior: ${motionStyleBehavior(style)} ${beat}. Exact visible copy MUST be written explicitly in the VIDEO PROMPT, maximum 1–4 words per appearance. Do not use the generic phrase "LIHAT INI" except when it is genuinely the hook. Never repeat the same text throughout the video. Use only claims supported by the product/reference/script. Timing must match the beat described by: ${purpose}. No text box, padding, pill, badge, sticker, subtitle panel, or style-name label. Keep text away from face, lips during application, hands, and important product details.`;
}

function audioInstruction(form: AffiliateForm) {
  const language = clean(form.language) || "Bahasa Indonesia";
  switch (form.audioMode) {
    case "Narasi + BGM + Efek Suara": return `Narration/VO in ${language}, ${form.voiceStyle} delivery; consistent light BGM; natural SFX for product handling/interaction, synchronized to the beat.`;
    case "Narasi + Efek Suara": return `Narration/VO in ${language}, ${form.voiceStyle} delivery; no BGM; natural SFX for product handling/interaction, synchronized to the beat.`;
    case "BGM + Efek Suara (ASMR)": return `No narration/VO; very light BGM if needed; prioritize close, natural product ASMR/SFX synchronized to the beat.`;
    case "Hanya Narasi / Dialog": return `Only narration/dialogue in ${language}, ${form.voiceStyle} delivery; no BGM; SFX only when directly produced by the action.`;
    default: return `NO AUDIO — do not create voice-over, dialogue, narration, BGM, music, ambience, SFX, or decorative audio. The video output must be completely silent.`;
  }
}

function masterCharacterPrompt(form: AffiliateForm, product: string) {
  if (form.presence !== "Pakai Karakter") return "";
  return `MASTER CHARACTER SHEET PROMPT — ${product} AFFILIATE CREATOR
Use the uploaded character reference as the single identity source of truth. Preserve the exact recognizable face, facial proportions, skin tone, hijab identity/style where relevant, body proportions, and permanent accessories. Do not beautify, age, slim, reshape, redesign, or replace the person. If the reference does not clearly show a side/back/other angle, do not invent identity-defining details from an unseen angle.
IMPORTANT: clothing in the character reference is NOT automatically the wardrobe to preserve. If the promoted product is apparel, classify the product first and adapt the character's supporting wardrobe to showcase the product. Do not accidentally combine unrelated reference clothing (for example a batik top) with the promoted apparel (for example cargo pants) unless explicitly requested. Apply the modesty rule: the final outfit must be polite, opaque, and cover the body appropriately; for a hijab-wearing female, a slim-fit top is acceptable only when it is long enough and does not expose the torso/waist or other aurat. Maintain identical character identity across all generated scenes.`;
}

export function buildAffiliatePrompt(form: AffiliateForm): string {
  const sceneDuration = parseSceneDuration(form.durationPerScene);
  const secondsPerShot = sceneDuration / 4;
  const sceneCount = Math.max(1, Math.min(20, Number(form.sceneCount) || 4));
  const total = sceneCount * sceneDuration;
  const product = clean(form.productName) || "this product";
  const brand = clean(form.brand) || "product brand";
  const background = clean(form.backgroundDescription) || "use a realistic environment appropriate to the product context";
  const required = requiredDisplay(form);
  const goal = fallbackGoal(form);
  const subjectRule = form.presence === "Pakai Karakter"
    ? `Use the uploaded character reference as the source of truth for IDENTITY, not as an instruction to copy the clothing. Maintain identical character: face, facial proportions, skin tone, hijab identity/style where relevant, body proportions, and permanent accessories. If the product is apparel, adapt the character wardrobe to highlight the product and do not carry unrelated clothing from the reference. ${wardrobeAdaptationRule(form, product)} Do not perform face swap, beautification, age change, body reshaping, or identity drift.`
    : "POV Tangan: jangan membuat master character sheet, jangan menampilkan wajah/full character. Maintain identical hands, skin tone, nails, and hand accessories bila terlihat.";
  const backgroundRule = clean(form.backgroundImageName)
    ? `The uploaded background reference is the source of truth for the environment. Maintain identical background, room layout, furniture placement, window/door position, wall pattern, floor, lighting direction, and major objects. Do not replace, redesign, or relocate the environment. Background description: ${background}.`
    : `No background image was uploaded. Build a realistic environment matching this location description: ${background}. Once established in Scene 1, keep the same environment, layout, lighting direction, and major objects across all scenes.`;

  return `
You are the Driacom Affiliate Prompt Director. The top priority is VISUAL FIDELITY, not creativity that changes the reference. The user will use the output with image and video generators. Do not add details that are not visible in the reference.

PRODUCT INPUT
Content type: ${form.contentType}
CONTENT FORMAT BLUEPRINT — WAJIB DIIKUTI
${contentBlueprint(form, 1, sceneCount, product, goal)}
The selected format changes the actual story structure, camera priority, product interaction, pacing, and CTA. Do not treat the format as a label only.
Product name: ${product}
Brand: ${brand}
Reference product: the uploaded product image is the PRODUCT SOURCE OF TRUTH.
Required display: ${required}

PRODUCT LOCK — WAJIB DI SEMUA SCENE
- Maintain identical product.
- Maintain exact shape, silhouette, proportions, construction, color, material, stitching, seams, pockets, buttons, zippers, drawstrings, labels, logo, texture, and visible hardware exactly as reference.
- Do not change the product, redesign it, beautify it, simplify it, add details, remove details, or replace it with a similar product.
- IMPORTANT VIEW LOCK: show only product angles/surfaces that are actually visible in the uploaded reference. If the reference only shows the front, DO NOT create side, back, top, bottom, or hidden details. Do not rotate the product into an angle unavailable in the reference.
- For a clothing reference, preserve exact garment cut, pocket count and placement, waistband, stitching, leg shape, fabric weight, color, and fit visible in the source.

BACKGROUND / LOCATION LOCK
${backgroundRule}

SUBJECT
Mode: ${form.presence}
${subjectRule}
${wardrobeAdaptationRule(form, product)}

CAMERA LANGUAGE
- Smartphone / iPhone look camera.
- Realistic handheld creator footage, not commercial cinema.
- Natural exposure, natural skin texture, realistic autofocus behavior, subtle handheld micro-movements, believable smartphone sharpness and dynamic range.
- No artificial cinematic camera moves, no hyper-stabilized gimbal look, no beauty filter, no plastic skin, no dramatic lens distortion.

NATURAL MOVEMENT
- Natural movement (hand, head, foot).
- Hands must have correct anatomy and believable grip/contact.
- Head movement, blinking, breathing, weight shifts, stepping, and foot placement must be subtle and physically plausible.
- Never teleport, snap, float, slide, or reset body/product position between beats.

ADVERTISING
User goal: ${goal}
If the goal is empty, determine the strongest advertising angle from the product/reference without inventing features.
Voice style: ${form.voiceStyle} — ${voiceDescription[form.voiceStyle]}
Audio: ${form.audioMode} — ${audioInstruction(form)}
Output language for spoken content: ${clean(form.language) || "Bahasa Indonesia"}. Keep all prompt structure, labels, camera directions, continuity rules, and technical descriptions in English.
Motion text: ${form.motionText ? `ON — ${form.motionTextStyle}. Use only important highlighted words/phrases from the content flow. Maximum 1–4 words per appearance. Never display the full narration sentence as on-screen text.` : "OFF — no on-screen text."}

MOTION TEXT VISUAL RULES
- No text box.
- No padding around text.
- No pill, badge, sticker, banner, caption card, subtitle panel, or colored container.
- Never render the words "DYNAMIC", "KINETIC", "HIGHLIGHT", or any style name as visible text.
- Motion text is only a short highlighted word/phrase that appears at the exact content beat it emphasizes.
- Animation should follow the action: subtle fade/slide/scale/track-in or word-by-word reveal as appropriate to the selected style, but always clean and native to the footage.
- Text should feel like an editorial overlay floating directly on the footage, with no surrounding box/padding.
- Do not let text cover the face, hands, or important product details.

CONTENT FORMAT EXECUTION
Selected format: ${form.contentType}
Each scene must follow the format-specific blueprint. Every shot has a job: stop/introduce → identify product → demonstrate → prove benefit/result → CTA as appropriate.
For products that are meant to be applied/worn/used, the actual product-use moment MUST be visible on camera. Example: lip product = close-up of applicator/product touching and moving across lips; skincare = visible application; perfume = visible spray; footwear = putting on + walking; fashion = wearing + body/fit reveal; gadget = real interaction. Never skip from holding the product directly to an unexplained finished result.

STRUCTURE
Aspect ratio: ${form.ratio}
Scene count: ${sceneCount}
Duration per scene: ${sceneDuration} seconds
Exactly 4 internal shots per scene, ${secondsPerShot} seconds per shot.
Total duration: ${total} seconds.

${STORYBOARD_EXECUTION_RULES}

${AFFILIATE_EXECUTION_RULES}

STORYBOARD / IMAGE PROMPT RULES
- Each scene produces ONE command prompt for the image generator to create ONE storyboard sheet containing exactly 4 internal panels: Shot 1–4.
- The storyboard must use the product reference, character reference, and background reference as sources of truth.
- Do not invent unseen product angles. If only front view is available, all storyboard panels must keep the product front-facing or within the exact visible orientation from the reference.
- Do not invent a different room, wall, window, furniture, floor, lighting direction, wardrobe, or accessory.
- Character identity must remain identical to the uploaded character reference.
- The storyboard is a visual planning reference, not a video frame. Do not make the panels look like finished video frames.
- Do not render final motion-text copy as visible text in the storyboard. Do not create text boxes, padding, or badges.
- No invented claims, prices, ratings, certifications, medical claims, specifications, or features.

VIDEO PROMPT RULES — REQUIRED FORMAT
Each scene MUST produce one complete video prompt, not four separate prompts. The four shots form one continuous scene with strict continuity.

SCENE X — VIDEO PROMPT
Duration: ${sceneDuration} seconds
4 internal shots
${secondsPerShot} seconds per shot.

IMPORTANT
Begin directly with the real scene. Never show the storyboard sheet. Never use the storyboard as an opening frame.

SHOT 1
0–${secondsPerShot} sec
[complete hook/setup/action/camera/product/background/character beat]

SHOT 2
${secondsPerShot}–${secondsPerShot * 2} sec
[complete action/detail beat; continue exact physical state from Shot 1]

SHOT 3
${secondsPerShot * 2}–${secondsPerShot * 3} sec
[complete demonstration/reaction/benefit beat; continue exact physical state]

SHOT 4
${secondsPerShot * 3}–${sceneDuration} sec
[complete payoff/CTA visual beat; clean ending hold]

NARRATION
[actual final narration/dialogue, or explicitly "No narration — audio mode is ..."]

MOTION TEXT
[if ON: exact 1–4 word highlight(s), timing, and animation beat. State explicitly: no box, no padding, no badge, no style-name text. If OFF: "OFF — no motion text."]

AUDIO
[complete audio direction for selected mode. If Tanpa Audio, explicitly state: "SILENT — no narration, no dialogue, no BGM, no music, no ambience, no SFX."]

PRODUCT CONSISTENCY
Maintain identical product. Do not change the product. Preserve exact reference appearance. Do not show unseen angles.

CHARACTER CONSISTENCY
Maintain identical character. Preserve exact identity, face, wardrobe, hijab/hair, proportions, accessories. Natural movement (hand, head, foot).

BACKGROUND CONSISTENCY
Maintain identical background/environment and do not jump to another location.

CAMERA CONSISTENCY
Smartphone / iPhone look camera, realistic handheld creator footage, natural focus/exposure, subtle micro-movement.

CONTINUITY
Shot 1 establishes the exact starting state. Shot 2 continues it. Shot 3 continues it. Shot 4 resolves it. No resets, no teleporting, no wardrobe/product/background changes.

NEGATIVE PROMPT
No storyboard opening, no slideshow, no frozen frames, no product redesign, no changed product color/material/shape, no unseen product angle, no invented product back/side if not visible in reference, no identity drift, no face redesign, no body reshaping, no inappropriate wardrobe mixing, no unrelated character-reference outfit carried into an apparel product scene, no wardrobe change that exposes aurat, no transparent/revealing clothing, no accessory drift, no background replacement, no room jump, no lighting jump, no extra fingers, no extra limbs, no malformed hands, no impossible grip, no floating/warped product, no duplicated product, no random text, no text box, no text padding, no pill, no badge, no sticker, no caption card, no style-name label, no subtitles unless explicitly part of the selected motion text, no cinematic commercial look, no beauty filter, no plastic skin, no excessive bokeh, no impossible physics, no jitter, no flicker, no sudden zoom, no abrupt camera reset, no invented claims.

IMPORTANT VIDEO RULES
- Maintain identical character.
- Maintain identical product.
- Do not change the product.
- Natural movement (hand, head, foot).
- Smartphone/iPhone look camera.
- Treat reference images as visual source of truth, not loose inspiration.
- If a detail is not visible in the reference, preserve ambiguity rather than inventing it.

OUTPUT JSON ONLY with exactly ${sceneCount} scenes. All fields are required. `.trim();
}

function localStoryboardPrompt(form: AffiliateForm, sceneNumber: number, sceneCount: number, sceneDuration: number, product: string, brand: string, purpose: string, goal: string, required: string) {
  const seconds = sceneDuration / 4;
  const subject = form.presence === "Pakai Karakter"
    ? `Use the uploaded character reference as the identity source of truth for character identity; maintain identical face, facial proportions, skin tone, hijab identity/style, body proportions and permanent accessories. If the promoted product is apparel, do NOT automatically preserve unrelated clothing from the character reference; adapt the supporting wardrobe to showcase the product while keeping the outfit modest and fully covering the body. For a hijab-wearing female, a slim-fit top is allowed only if it is long, opaque, and covers the torso/waist appropriately.`
    : "POV hands only; no face or full character; maintain identical hands, skin tone, nails and hand accessories.";
  const background = clean(form.backgroundDescription) || "realistic creator environment matching the product context";
  const backgroundLock = clean(form.backgroundImageName)
    ? `Use the uploaded background reference as the exact environment source of truth. Maintain identical background, layout, furniture, windows, walls, floor and major objects.`
    : `Use a realistic environment matching ${background} and keep it identical throughout the scene.`;
  const wardrobe = form.presence === "Pakai Karakter"
    ? `WARDROBE INTELLIGENCE: classify the promoted product first. If it is apparel, the product is the wardrobe hero and the character's unrelated original clothing is NOT a wardrobe lock. Example: batik top in character reference + cargo pants product => replace/adapt the batik top into a simple coordinated modest top so the cargo pants are the promoted garment. For a hijab-wearing female, the supporting top may be slim-fit only when long, opaque, and covering the torso/waist appropriately. Never expose aurat, cleavage, abdomen, buttocks, groin or upper thighs.`
    : ``;
  return `CREATE ONE COMPLETE STORYBOARD SHEET — ${brand} ${product} — Scene ${sceneNumber} — ${form.ratio} — ${sceneDuration} seconds. ${purpose} ${subject} ${wardrobe} ${backgroundLock} PRODUCT SOURCE OF TRUTH: use the user's product reference; maintain identical product, exact shape, color, material, logo, packaging, proportions, texture, label and visible details; do not change the product. VIEW LOCK: only show product angles/surfaces actually visible in the reference; if the reference only shows front view, do not invent side/back/top/bottom views. ${required}. Affiliate aesthetic: smartphone/iPhone look camera, realistic handheld creator footage, natural lighting, realistic skin texture, natural movement (hand, head, foot). Divide this single image into exactly 4 sequential visual panels labeled Shot 1, Shot 2, Shot 3, Shot 4. Each panel represents ${seconds} seconds. INTERNAL BEATS: Shot 1 = hook/setup/product introduction; Shot 2 = trigger/action/feature emphasis; Shot 3 = demonstration/reaction/benefit proof; Shot 4 = payoff/hold/CTA visual state. Do not render motion-text copy, text boxes, padding, badges, stickers, or style-name labels. No invented claims or unseen product details.`;
}

function localNarration(form: AffiliateForm, sceneNumber: number, product: string, goal: string) {
  const lang = clean(form.language) || "Bahasa Indonesia";
  if (form.audioMode === "Tanpa Audio") return "SILENT — no narration, no dialogue, no BGM, no music, no ambience, no SFX.";
  if (form.audioMode === "BGM + Efek Suara (ASMR)") return `No narration — audio mode is ${form.audioMode}.`;
  if (form.contentType === "Unboxing") return `In ${lang}: "Okay, let's open ${product} and look at the most interesting detail."`;
  if (sceneNumber === 1) return `In ${lang}: "${product} immediately makes me curious."`;
  if (sceneNumber >= 3) return `In ${lang}: "${goal.slice(0, 110)}"`;
  return `In ${lang}: "I'll try ${product} and look at the most important part."`;
}

function localMotion(form: AffiliateForm, sceneNumber: number, sceneCount: number, product: string, required: string, goal: string) {
  if (!form.motionText) return "OFF — no motion text.";
  const feature = required.split(",")[0]?.trim() || "detail utama";
  const behavior = motionStyleBehavior(form.motionTextStyle);
  const beat = sceneNumber === 1 ? `HOOK: create one short curiosity/reveal phrase for ${product}` : sceneNumber === sceneCount ? `RESULT/CTA: create one short phrase from the demonstrated result or ${feature}` : `CONTENT HIGHLIGHT: create one short phrase from the actual demonstrated action/benefit`;
  return `MOTION TEXT DIRECTOR: Style=${form.motionTextStyle}. ${behavior} ${beat}. Exact visible copy must be explicitly written by the video prompt, maximum 1–4 words per appearance. Never repeat one generic phrase throughout the video. Do not invent unsupported claims. Text appears only at its relevant beat. No box, padding, pill, badge, sticker, subtitle panel, or style-name label. Keep away from face, lips during application, hands, and important product details.`;
}

function localVideoPrompt(form: AffiliateForm, sceneNumber: number, sceneCount: number, sceneDuration: number, product: string, brand: string, purpose: string, goal: string, required: string) {
  const seconds = sceneDuration / 4;
  const narration = localNarration(form, sceneNumber, product, goal);
  const motion = localMotion(form, sceneNumber, sceneCount, product, required, goal);
  const subject = form.presence === "Pakai Karakter"
    ? `Maintain identical character identity, face, facial proportions, hijab identity/style, body proportions and permanent accessories. If the promoted product is apparel, adapt supporting wardrobe to the product instead of copying unrelated clothing from the character reference. Final outfit must be modest and fully covering; for a hijab-wearing female, a slim-fit top is allowed only when long, opaque, and covering the torso/waist appropriately. Natural movement (hand, head, foot).`
    : "Maintain identical hands, skin tone, nails and hand accessories. Never reveal a face or full character. Natural movement (hand, head, foot) where visible.";
  const background = clean(form.backgroundDescription) || "realistic creator environment matching the product context";
  const backgroundRule = clean(form.backgroundImageName) ? "Maintain identical uploaded background reference and exact environment layout." : `Maintain the same ${background} environment from start to end.`;
  return `SCENE ${sceneNumber} — VIDEO PROMPT\n\nDuration: ${sceneDuration} seconds\n4 internal shots\n${seconds} seconds per shot.\n\nBEGIN DIRECTLY WITH THE REAL SCENE. NEVER SHOW THE STORYBOARD SHEET.\n\nSHOT 1\n0–${seconds} sec\n${purpose} Establish the exact product, background, subject and smartphone/iPhone camera look while executing the selected format's first beat.\n\nSHOT 2\n${seconds}–${seconds * 2} sec\nContinue directly from Shot 1. Execute the selected format's product reveal/use/detail beat with natural movement (hand, head, foot). Maintain exact product state and environment.\n\nSHOT 3\n${seconds * 2}–${seconds * 3} sec\nContinue directly from Shot 2. Show the actual demonstration/result/reaction required by the selected format without inventing claims. Use a closer application/product angle when the action needs visual proof.\n\nSHOT 4\n${seconds * 3}–${sceneDuration} sec\nContinue directly from Shot 3. Resolve the selected format with payoff/result/CTA as appropriate. Keep the product visible without forcing a hard-sell pose.\n\nNARRATION:\n${narration}\n\nMOTION TEXT:\n${motion}\n\nAUDIO:\n${audioInstruction(form)}\n\nPRODUCT CONSISTENCY:\nMaintain identical product. Do not change the product. Preserve exact reference shape, color, material, construction, stitching, pockets, hardware, labels and visible details. VIEW LOCK: only show angles/surfaces visible in the product reference; if only front is visible, never show side/back/top/bottom.\n\nCHARACTER CONSISTENCY:\n${subject}\n\nBACKGROUND CONSISTENCY:\n${backgroundRule}\n\nCAMERA:\nSmartphone/iPhone look camera. Realistic handheld creator footage, natural exposure, realistic skin texture, subtle autofocus and micro-movement.\n\nCONTINUITY:
No state reset between shots. Preserve screen direction, body position, product state, the FINAL established wardrobe, accessories, background, lighting and camera language. The final established wardrobe must be the modest wardrobe selected to complement the promoted product, not an unrelated outfit copied from the character reference.\n\nDRIACOM UNIVERSAL VIDEO EXECUTION CORE:\n${STORYBOARD_EXECUTION_RULES}\n\n${AFFILIATE_EXECUTION_RULES}\n\nNEGATIVE PROMPT:
No storyboard opening, no slideshow, no product redesign, no product angle not visible in reference, no side/back invention, no changed product, no identity drift, no face redesign, no body reshaping, no inappropriate wardrobe mixing, no unrelated character-reference outfit carried into an apparel product scene, no revealing/transparent clothing, no exposed aurat, no wardrobe reset after the correct outfit is established, no background jump, no extra fingers/limbs, malformed hands, impossible grip, warped product, floating product, duplicated product, random text, text box, text padding, pill, badge, sticker, style-name label, cinematic commercial look, beauty filter, plastic skin, excessive effects, unnatural movement, jitter, flicker, abrupt zoom, impossible physics, invented claims.`;
}

export function generateLocalAffiliate(form: AffiliateForm): AffiliateBlueprint {
  const sceneCount = Math.max(1, Math.min(20, Number(form.sceneCount) || 4));
  const sceneDuration = parseSceneDuration(form.durationPerScene);
  const product = clean(form.productName) || "this product";
  const brand = clean(form.brand) || "product brand";
  const goal = fallbackGoal(form);
  const required = requiredDisplay(form);
  const masterCharacter = masterCharacterPrompt(form, product);
  const scenes: AffiliateScene[] = Array.from({ length: sceneCount }, (_, si) => {
    const sceneNumber = si + 1;
    const start = si * sceneDuration;
    const end = (si + 1) * sceneDuration;
    const purpose = contentBlueprint(form, sceneNumber, sceneCount, product, goal);
    return {
      sceneNumber,
      timecode: `${start}-${end} sec`,
      purpose,
      storyboardImagePrompt: localStoryboardPrompt(form, sceneNumber, sceneCount, sceneDuration, product, brand, purpose, goal, required),
      videoPrompt: localVideoPrompt(form, sceneNumber, sceneCount, sceneDuration, product, brand, purpose, goal, required),
    };
  });

  return {
    productName: product,
    brand,
    contentType: form.contentType,
    presence: form.presence,
    voiceStyle: form.voiceStyle,
    audioMode: form.audioMode,
    motionText: form.motionText,
    motionTextStyle: form.motionText ? form.motionTextStyle : "Tidak ada",
    ratio: form.ratio,
    language: clean(form.language) || "Bahasa Indonesia",
    masterCharacter,
    scenes,
    totalDuration: `${sceneCount * sceneDuration} detik`,
  };
}

export { parseSceneDuration };
