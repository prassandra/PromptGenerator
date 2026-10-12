module.exports=[97603,e=>{"use strict";var t=e.i(89171),a=e.i(34731),o=e.i(93421),r=e.i(88713),n=e.i(22253);let i=e=>String(e??"").trim();function s(e){let t=String(e||"8 detik per scene").match(/\d+(?:\.\d+)?/);return Math.max(1,Math.min(30,Number(t?.[0]||8)))}let c={Natural:"natural, relaxed, like a creator sharing a real experience",Softselling:"gently persuasive, benefits are clear without a hard push",Hardselling:"direct, decisive, with clear benefits and CTA"};function l(e){return i(e.advertisingGoal)||`show ${i(e.productName)||"this product"}, the most relevant benefits, a realistic usage demonstration, the experience after use, and a natural CTA`}function d(e){return i(e.requiredDisplay)||"clearly show the packaging, shape, color, material, key details, relevant texture, and the most important visible product areas according to the reference product"}function p(e,t){return"Pakai Karakter"!==e.presence?"":`
WARDROBE / MODESTY INTELLIGENCE — CRITICAL FOR APPAREL AFFILIATE
- First classify the uploaded product reference. If the product is wearable clothing (for example pants, cargo pants, skirt, shirt, blouse, dress, outerwear, hijab, shoes, etc.), the PRODUCT REFERENCE has priority over the character's original clothing.
- The character reference is the source of truth for IDENTITY, not an instruction to copy the original outfit into the new product styling.
- Example: if the uploaded character is wearing a batik top but the promoted product is cargo pants, DO NOT generate the character wearing the batik top + cargo pants merely because both appear in the reference. Adapt or replace the top so the final outfit is a coherent modest outfit that complements and showcases ${t}.
- For an apparel product, build a coordinated supporting wardrobe around the promoted product: appropriate top, hijab if present, and footwear/accessories as needed. Keep them visually simple so the promoted product remains the hero.
- Do not copy unrelated clothing prints, colors, silhouettes, logos, or garments from the character reference unless the product itself is that garment or the user explicitly requests that wardrobe item to remain.
- MODESTY RULE: the final outfit must always be polite and cover the body appropriately. Never expose breasts, cleavage, navel, abdomen, buttocks, groin, or upper thighs. No transparent clothing and no intentionally revealing openings.
- For a hijab-wearing female character: the hijab remains consistent with the character identity/style when appropriate; a fitted/slim-fit supporting top is allowed only when it is sufficiently long, opaque, and fully covers the torso/waist area and does not reveal body contours in an inappropriate way. Prefer a neat, longer top when needed.
- Do not change the character's face, skin tone, body identity, hijab identity, or recognizable features merely to fit the clothing.
- The promoted product itself must NEVER be modified to accommodate the wardrobe. Adapt the supporting wardrobe to the product.
- If the product reference does not show a certain hidden garment surface or angle, do not invent product construction details.
`}function u(e,t,a,o,r){let n=t===a,i=e.contentType;return"Unboxing"===i?1===t?`HOOK + PACKAGE REVEAL: stop the scroll, show the unopened package/product clearly, establish curiosity about ${o}.`:n?"FIRST IMPRESSION + CTA: show the opened product in a clean hero hold, summarize only visible first-impression points, then close with a natural CTA.":`UNBOXING PROGRESSION: open/handle ${o}, reveal one real visible detail at a time, and continue from the exact physical state of the previous scene.`:"Review Produk"===i?1===t?`HOOK + PRODUCT INTRO: introduce the problem/question and immediately identify ${o}.`:n?"RESULT + OPINION + CTA: show the final result, give a concise honest-feeling conclusion based only on demonstrated/visible information, then natural CTA.":`REVIEW DEMONSTRATION: demonstrate ${o}, show a visible detail/benefit, and make the evidence visually understandable before moving on.`:"Spill Produk"===i?1===t?`SCROLL-STOPPING PRODUCT SPILL: reveal ${o} early and make the product the visual hero without feeling like a TV commercial.`:n?"RESULT + CTA: show the product/result together and finish with a direct but natural affiliate CTA.":`PRODUCT DEMONSTRATION: put ${o} into real use. The camera must move closer when the action matters and show the product interacting with the relevant body/object.`:"Soft Selling"===i?1===t?`LIFESTYLE HOOK: begin with a believable everyday moment where ${o} naturally belongs, without an obvious hard-sell opening.`:n?`NATURAL PAYOFF + SOFT CTA: show the result and casually recommend ${o} without aggressive sales language.`:`LIFESTYLE INTEGRATION: naturally use ${o} inside the activity, prioritizing believable behavior over staged advertising.`:1===t?`UGC HOOK + PRODUCT REVEAL: creator-style opening, quickly identify ${o}, and establish a relatable reason to care.`:n?"UGC RESULT + RECOMMENDATION: show the result, creator reaction/opinion, product in frame, and a conversational CTA.":`UGC PRODUCT DEMONSTRATION: genuinely use ${o}, show the important action/result close enough to understand, and keep the footage casual and believable. ${r}`}function h(e){let t=i(e.language)||"Bahasa Indonesia";switch(e.audioMode){case"Narasi + BGM + Efek Suara":return`Narration/VO in ${t}, ${e.voiceStyle} delivery; consistent light BGM; natural SFX for product handling/interaction, synchronized to the beat.`;case"Narasi + Efek Suara":return`Narration/VO in ${t}, ${e.voiceStyle} delivery; no BGM; natural SFX for product handling/interaction, synchronized to the beat.`;case"BGM + Efek Suara (ASMR)":return"No narration/VO; very light BGM if needed; prioritize close, natural product ASMR/SFX synchronized to the beat.";case"Hanya Narasi / Dialog":return`Only narration/dialogue in ${t}, ${e.voiceStyle} delivery; no BGM; SFX only when directly produced by the action.`;default:return"NO AUDIO — do not create voice-over, dialogue, narration, BGM, music, ambience, SFX, or decorative audio. The video output must be completely silent."}}function m(e){let t=Math.max(1,Math.min(20,Number(e.sceneCount)||4)),a=s(e.durationPerScene),o=i(e.productName)||"this product",r=i(e.brand)||"product brand",c=l(e),p=d(e),m="Pakai Karakter"!==e.presence?"":`MASTER CHARACTER SHEET PROMPT — ${o} AFFILIATE CREATOR
Use the uploaded character reference as the single identity source of truth. Preserve the exact recognizable face, facial proportions, skin tone, hijab identity/style where relevant, body proportions, and permanent accessories. Do not beautify, age, slim, reshape, redesign, or replace the person. If the reference does not clearly show a side/back/other angle, do not invent identity-defining details from an unseen angle.
IMPORTANT: clothing in the character reference is NOT automatically the wardrobe to preserve. If the promoted product is apparel, classify the product first and adapt the character's supporting wardrobe to showcase the product. Do not accidentally combine unrelated reference clothing (for example a batik top) with the promoted apparel (for example cargo pants) unless explicitly requested. Apply the modesty rule: the final outfit must be polite, opaque, and cover the body appropriately; for a hijab-wearing female, a slim-fit top is acceptable only when it is long enough and does not expose the torso/waist or other aurat. Maintain identical character identity across all generated scenes.`,f=Array.from({length:t},(s,l)=>{let d,m,f,g,b,y,T,v,E,O,w,R=l+1,N=u(e,R,t,o,c);return{sceneNumber:R,timecode:`${l*a}-${(l+1)*a} sec`,purpose:N,storyboardImagePrompt:(d="Pakai Karakter"===e.presence?"Use the uploaded character reference as the identity source of truth for character identity; maintain identical face, facial proportions, skin tone, hijab identity/style, body proportions and permanent accessories. If the promoted product is apparel, do NOT automatically preserve unrelated clothing from the character reference; adapt the supporting wardrobe to showcase the product while keeping the outfit modest and fully covering the body. For a hijab-wearing female, a slim-fit top is allowed only if it is long, opaque, and covers the torso/waist appropriately.":"POV hands only; no face or full character; maintain identical hands, skin tone, nails and hand accessories.",m=i(e.backgroundDescription)||"realistic creator environment matching the product context",f=i(e.backgroundImageName)?"Use the uploaded background reference as the exact environment source of truth. Maintain identical background, layout, furniture, windows, walls, floor and major objects.":`Use a realistic environment matching ${m} and keep it identical throughout the scene.`,g="Pakai Karakter"===e.presence?"WARDROBE INTELLIGENCE: classify the promoted product first. If it is apparel, the product is the wardrobe hero and the character's unrelated original clothing is NOT a wardrobe lock. Example: batik top in character reference + cargo pants product => replace/adapt the batik top into a simple coordinated modest top so the cargo pants are the promoted garment. For a hijab-wearing female, the supporting top may be slim-fit only when long, opaque, and covering the torso/waist appropriately. Never expose aurat, cleavage, abdomen, buttocks, groin or upper thighs.":"",`CREATE ONE COMPLETE STORYBOARD SHEET — ${r} ${o} — Scene ${R} — ${e.ratio} — ${a} seconds. ${N} ${d} ${g} ${f} PRODUCT SOURCE OF TRUTH: use the user's product reference; maintain identical product, exact shape, color, material, logo, packaging, proportions, texture, label and visible details; do not change the product. VIEW LOCK: only show product angles/surfaces actually visible in the reference; if the reference only shows front view, do not invent side/back/top/bottom views. ${p}. Affiliate aesthetic: smartphone/iPhone look camera, realistic handheld creator footage, natural lighting, realistic skin texture, natural movement (hand, head, foot). Divide this single image into exactly 4 sequential visual panels labeled Shot 1, Shot 2, Shot 3, Shot 4. Each panel represents ${a/4} seconds. INTERNAL BEATS: Shot 1 = hook/setup/product introduction; Shot 2 = trigger/action/feature emphasis; Shot 3 = demonstration/reaction/benefit proof; Shot 4 = payoff/hold/CTA visual state. Do not render motion-text copy, text boxes, padding, badges, stickers, or style-name labels. No invented claims or unseen product details.`),videoPrompt:(b=a/4,y=i(e.language)||"Bahasa Indonesia",T="Tanpa Audio"===e.audioMode?"SILENT — no narration, no dialogue, no BGM, no music, no ambience, no SFX.":"BGM + Efek Suara (ASMR)"===e.audioMode?`No narration — audio mode is ${e.audioMode}.`:"Unboxing"===e.contentType?`In ${y}: "Okay, let's open ${o} and look at the most interesting detail."`:1===R?`In ${y}: "${o} immediately makes me curious."`:R>=3?`In ${y}: "${c.slice(0,110)}"`:`In ${y}: "I'll try ${o} and look at the most important part."`,v=function(e,t,a,o,r){var n;if(!e.motionText)return"OFF — no motion text.";let i=r.split(",")[0]?.trim()||"detail utama",s="Kinetic"===(n=e.motionTextStyle)?"energetic word-by-word reveal, small punch/scale and directional movement synchronized to speech/action; never chaotic or covering the product.":"Highlight"===n?"mostly stable editorial text with only the key word emphasized by subtle scale/brightness/position change; prioritize benefit/product keywords.":"clean dynamic pop/slide with subtle scale and smooth entrance/exit synchronized to the beat; default UGC-friendly behavior.",c=1===t?`HOOK: create one short curiosity/reveal phrase for ${o}`:t===a?`RESULT/CTA: create one short phrase from the demonstrated result or ${i}`:"CONTENT HIGHLIGHT: create one short phrase from the actual demonstrated action/benefit";return`MOTION TEXT DIRECTOR: Style=${e.motionTextStyle}. ${s} ${c}. Exact visible copy must be explicitly written by the video prompt, maximum 1–4 words per appearance. Never repeat one generic phrase throughout the video. Do not invent unsupported claims. Text appears only at its relevant beat. No box, padding, pill, badge, sticker, subtitle panel, or style-name label. Keep away from face, lips during application, hands, and important product details.`}(e,R,t,o,p),E="Pakai Karakter"===e.presence?"Maintain identical character identity, face, facial proportions, hijab identity/style, body proportions and permanent accessories. If the promoted product is apparel, adapt supporting wardrobe to the product instead of copying unrelated clothing from the character reference. Final outfit must be modest and fully covering; for a hijab-wearing female, a slim-fit top is allowed only when long, opaque, and covering the torso/waist appropriately. Natural movement (hand, head, foot).":"Maintain identical hands, skin tone, nails and hand accessories. Never reveal a face or full character. Natural movement (hand, head, foot) where visible.",O=i(e.backgroundDescription)||"realistic creator environment matching the product context",w=i(e.backgroundImageName)?"Maintain identical uploaded background reference and exact environment layout.":`Maintain the same ${O} environment from start to end.`,`SCENE ${R} — VIDEO PROMPT

Duration: ${a} seconds
4 internal shots
${b} seconds per shot.

BEGIN DIRECTLY WITH THE REAL SCENE. NEVER SHOW THE STORYBOARD SHEET.

SHOT 1
0–${b} sec
${N} Establish the exact product, background, subject and smartphone/iPhone camera look while executing the selected format's first beat.

SHOT 2
${b}–${2*b} sec
Continue directly from Shot 1. Execute the selected format's product reveal/use/detail beat with natural movement (hand, head, foot). Maintain exact product state and environment.

SHOT 3
${2*b}–${3*b} sec
Continue directly from Shot 2. Show the actual demonstration/result/reaction required by the selected format without inventing claims. Use a closer application/product angle when the action needs visual proof.

SHOT 4
${3*b}–${a} sec
Continue directly from Shot 3. Resolve the selected format with payoff/result/CTA as appropriate. Keep the product visible without forcing a hard-sell pose.

NARRATION:
${T}

MOTION TEXT:
${v}

AUDIO:
${h(e)}

PRODUCT CONSISTENCY:
Maintain identical product. Do not change the product. Preserve exact reference shape, color, material, construction, stitching, pockets, hardware, labels and visible details. VIEW LOCK: only show angles/surfaces visible in the product reference; if only front is visible, never show side/back/top/bottom.

CHARACTER CONSISTENCY:
${E}

BACKGROUND CONSISTENCY:
${w}

CAMERA:
Smartphone/iPhone look camera. Realistic handheld creator footage, natural exposure, realistic skin texture, subtle autofocus and micro-movement.

CONTINUITY:
No state reset between shots. Preserve screen direction, body position, product state, the FINAL established wardrobe, accessories, background, lighting and camera language. The final established wardrobe must be the modest wardrobe selected to complement the promoted product, not an unrelated outfit copied from the character reference.

DRIACOM UNIVERSAL VIDEO EXECUTION CORE:
${n.STORYBOARD_EXECUTION_RULES}

${n.AFFILIATE_EXECUTION_RULES}

NEGATIVE PROMPT:
No storyboard opening, no slideshow, no product redesign, no product angle not visible in reference, no side/back invention, no changed product, no identity drift, no face redesign, no body reshaping, no inappropriate wardrobe mixing, no unrelated character-reference outfit carried into an apparel product scene, no revealing/transparent clothing, no exposed aurat, no wardrobe reset after the correct outfit is established, no background jump, no extra fingers/limbs, malformed hands, impossible grip, warped product, floating product, duplicated product, random text, text box, text padding, pill, badge, sticker, style-name label, cinematic commercial look, beauty filter, plastic skin, excessive effects, unnatural movement, jitter, flicker, abrupt zoom, impossible physics, invented claims.`)}});return{productName:o,brand:r,contentType:e.contentType,presence:e.presence,voiceStyle:e.voiceStyle,audioMode:e.audioMode,motionText:e.motionText,motionTextStyle:e.motionText?e.motionTextStyle:"Tidak ada",ratio:e.ratio,language:i(e.language)||"Bahasa Indonesia",masterCharacter:m,scenes:f,totalDuration:`${t*a} detik`}}var f=e.i(31661);function g(e){return String(e??"").trim()}async function b(e){let b=null,y=!1;try{var T,v;let E,O,w,R,N,I,S,A,x,C,k,M=await e.json();b=M?.form;let $=g(M?.productImageData),D=g(M?.characterImageData),P=g(M?.backgroundImageData);if(!b?.productName?.trim())return t.NextResponse.json({success:!1,error:"Masukkan nama produk terlebih dahulu."},{status:400});let U=await (0,f.reservePromptGeneration)("affiliate");if(!U.ok)return t.NextResponse.json({success:!1,error:U.error},{status:U.status});y=!U.unlimited;let L=(0,o.getMenuAIConfig)("affiliate");if(!L.enabled)return t.NextResponse.json({success:!0,engine:"LOCAL_AFFILIATE",fallback:!0,reason:"AI_CONFIGURATION_MISSING",blueprint:m(b)});let F=new a.GoogleGenAI({apiKey:L.apiKey}),H=(T=b,O=(E=s(T.durationPerScene))/4,R=(w=Math.max(1,Math.min(20,Number(T.sceneCount)||4)))*E,N=i(T.productName)||"this product",I=i(T.brand)||"product brand",S=i(T.backgroundDescription)||"use a realistic environment appropriate to the product context",A=d(T),x=l(T),C="Pakai Karakter"===T.presence?`Use the uploaded character reference as the source of truth for IDENTITY, not as an instruction to copy the clothing. Maintain identical character: face, facial proportions, skin tone, hijab identity/style where relevant, body proportions, and permanent accessories. If the product is apparel, adapt the character wardrobe to highlight the product and do not carry unrelated clothing from the reference. ${p(T,N)} Do not perform face swap, beautification, age change, body reshaping, or identity drift.`:"POV Tangan: jangan membuat master character sheet, jangan menampilkan wajah/full character. Maintain identical hands, skin tone, nails, and hand accessories bila terlihat.",k=i(T.backgroundImageName)?`The uploaded background reference is the source of truth for the environment. Maintain identical background, room layout, furniture placement, window/door position, wall pattern, floor, lighting direction, and major objects. Do not replace, redesign, or relocate the environment. Background description: ${S}.`:`No background image was uploaded. Build a realistic environment matching this location description: ${S}. Once established in Scene 1, keep the same environment, layout, lighting direction, and major objects across all scenes.`,`
You are the Driacom Affiliate Prompt Director. The top priority is VISUAL FIDELITY, not creativity that changes the reference. The user will use the output with image and video generators. Do not add details that are not visible in the reference.

PRODUCT INPUT
Content type: ${T.contentType}
CONTENT FORMAT BLUEPRINT — WAJIB DIIKUTI
${u(T,1,w,N,x)}
The selected format changes the actual story structure, camera priority, product interaction, pacing, and CTA. Do not treat the format as a label only.
Product name: ${N}
Brand: ${I}
Reference product: the uploaded product image is the PRODUCT SOURCE OF TRUTH.
Required display: ${A}

PRODUCT LOCK — WAJIB DI SEMUA SCENE
- Maintain identical product.
- Maintain exact shape, silhouette, proportions, construction, color, material, stitching, seams, pockets, buttons, zippers, drawstrings, labels, logo, texture, and visible hardware exactly as reference.
- Do not change the product, redesign it, beautify it, simplify it, add details, remove details, or replace it with a similar product.
- IMPORTANT VIEW LOCK: show only product angles/surfaces that are actually visible in the uploaded reference. If the reference only shows the front, DO NOT create side, back, top, bottom, or hidden details. Do not rotate the product into an angle unavailable in the reference.
- For a clothing reference, preserve exact garment cut, pocket count and placement, waistband, stitching, leg shape, fabric weight, color, and fit visible in the source.

BACKGROUND / LOCATION LOCK
${k}

SUBJECT
Mode: ${T.presence}
${C}
${p(T,N)}

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
User goal: ${x}
If the goal is empty, determine the strongest advertising angle from the product/reference without inventing features.
Voice style: ${T.voiceStyle} — ${c[T.voiceStyle]}
Audio: ${T.audioMode} — ${h(T)}
Output language for spoken content: ${i(T.language)||"Bahasa Indonesia"}. Keep all prompt structure, labels, camera directions, continuity rules, and technical descriptions in English.
Motion text: ${T.motionText?`ON — ${T.motionTextStyle}. Use only important highlighted words/phrases from the content flow. Maximum 1–4 words per appearance. Never display the full narration sentence as on-screen text.`:"OFF — no on-screen text."}

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
Selected format: ${T.contentType}
Each scene must follow the format-specific blueprint. Every shot has a job: stop/introduce → identify product → demonstrate → prove benefit/result → CTA as appropriate.
For products that are meant to be applied/worn/used, the actual product-use moment MUST be visible on camera. Example: lip product = close-up of applicator/product touching and moving across lips; skincare = visible application; perfume = visible spray; footwear = putting on + walking; fashion = wearing + body/fit reveal; gadget = real interaction. Never skip from holding the product directly to an unexplained finished result.

STRUCTURE
Aspect ratio: ${T.ratio}
Scene count: ${w}
Duration per scene: ${E} seconds
Exactly 4 internal shots per scene, ${O} seconds per shot.
Total duration: ${R} seconds.

${n.STORYBOARD_EXECUTION_RULES}

${n.AFFILIATE_EXECUTION_RULES}

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
Duration: ${E} seconds
4 internal shots
${O} seconds per shot.

IMPORTANT
Begin directly with the real scene. Never show the storyboard sheet. Never use the storyboard as an opening frame.

SHOT 1
0–${O} sec
[complete hook/setup/action/camera/product/background/character beat]

SHOT 2
${O}–${2*O} sec
[complete action/detail beat; continue exact physical state from Shot 1]

SHOT 3
${2*O}–${3*O} sec
[complete demonstration/reaction/benefit beat; continue exact physical state]

SHOT 4
${3*O}–${E} sec
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

OUTPUT JSON ONLY with exactly ${w} scenes. All fields are required. `.trim()),{response:G,model:j}=await (0,r.generateWithGeminiResilient)({apiKey:L.apiKey,requestedModel:L.model||r.DEFAULT_GEMINI_TEXT_MODEL,fallbackModel:r.DEFAULT_GEMINI_TEXT_MODEL,requestedMaxOutputTokens:3e4,maxRetries:2,generate:async(e,t)=>F.models.generateContent({model:e,contents:[{role:"user",parts:[{text:`${H}

OUTPUT JSON ONLY. Schema: {"productName":"...","brand":"...","contentType":"...","presence":"...","voiceStyle":"...","audioMode":"...","motionText":true,"motionTextStyle":"...","ratio":"...","language":"...","masterCharacter":"...","totalDuration":"...","scenes":[{"sceneNumber":1,"timecode":"...","purpose":"...","storyboardImagePrompt":"...","videoPrompt":"..."}]}`},...$.startsWith("data:image/")?[{inlineData:{mimeType:$.slice(5,$.indexOf(";")),data:$.split(",")[1]||""}}]:[],...D.startsWith("data:image/")?[{inlineData:{mimeType:D.slice(5,D.indexOf(";")),data:D.split(",")[1]||""}}]:[],...P.startsWith("data:image/")?[{inlineData:{mimeType:P.slice(5,P.indexOf(";")),data:P.split(",")[1]||""}}]:[]]}],config:{responseMimeType:"application/json",maxOutputTokens:t}})}),_=function(e){let t=g(e).replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/i,"").trim();if(!t)throw Error("Gemini mengembalikan output kosong.");try{return JSON.parse(t)}catch{let e=t.indexOf("{"),a=t.lastIndexOf("}");if(e>=0&&a>e)return JSON.parse(t.slice(e,a+1));throw Error("Output Affiliate dari AI tidak valid atau terpotong.")}}(G?.text);if(v=b,!(!(!_||!Array.isArray(_.scenes)||_.scenes.length!==v.sceneCount||"Pakai Karakter"===v.presence&&!_.masterCharacter?.trim()||"POV Tangan"===v.presence&&_.masterCharacter?.trim())&&_.scenes.every((e,t)=>e.sceneNumber===t+1&&!!e.storyboardImagePrompt?.trim()&&!!e.videoPrompt?.trim())))throw Error("Output Affiliate AI tidak memenuhi struktur scene storyboard/video yang dipilih.");return t.NextResponse.json({success:!0,engine:"GEMINI_AFFILIATE",fallback:!1,model:j,blueprint:_})}catch(e){if(y&&await (0,f.releasePromptGeneration)("affiliate"),console.error("Driacom Affiliate Error:",e),b){let a=(0,o.isGeminiQuotaOrRateLimit)(e)?"AI_QUOTA_OR_RATE_LIMIT":"AI_ERROR";return t.NextResponse.json({success:!0,engine:"LOCAL_AFFILIATE",fallback:!0,reason:a,blueprint:m(b)})}return t.NextResponse.json({success:!1,error:(0,r.getDriacomPublicErrorMessage)(e)},{status:500})}}e.s(["POST",0,b],97603)},25671,e=>{"use strict";var t=e.i(47909),a=e.i(74017),o=e.i(96250),r=e.i(59756),n=e.i(61916),i=e.i(74677),s=e.i(69741),c=e.i(16795),l=e.i(87718),d=e.i(95169),p=e.i(47587),u=e.i(66012),h=e.i(70101),m=e.i(26937),f=e.i(10372),g=e.i(93695);e.i(52474);var b=e.i(5232);let y=new t.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/affiliate/route",pathname:"/api/affiliate",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/affiliate/route.ts",nextConfigOutput:"standalone",userland:()=>e.r(97603),...{}}),{workAsyncStorage:T,workUnitAsyncStorage:v,serverHooks:E}=y;async function O(e,t,o){o.requestMeta&&(0,r.setRequestMeta)(e,o.requestMeta),y.isDev&&(0,r.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let T="/api/affiliate/route";T=T.replace(/\/index$/,"")||"/";let v=await y.prepare(e,t,{srcPage:T,multiZoneDraftMode:!1});if(!v)return t.statusCode=400,t.end("Bad Request"),null==o.waitUntil||o.waitUntil.call(o,Promise.resolve()),null;let{buildId:E,deploymentId:O,params:w,nextConfig:R,parsedUrl:N,isDraftMode:I,prerenderManifest:S,routerServerContext:A,isOnDemandRevalidate:x,revalidateOnlyGenerated:C,resolvedPathname:k,clientReferenceManifest:M,serverActionsManifest:$}=v,D=(0,s.normalizeAppPath)(T),P=!!(S.dynamicRoutes[D]||S.routes[k]),U=async()=>((null==A?void 0:A.render404)?await A.render404(e,t,N,!1):t.end("This page could not be found"),null);if(P&&!I){let e=!!S.routes[k],t=S.dynamicRoutes[D];if(t&&!1===t.fallback&&!e){if(R.adapterPath)return await U();throw new g.NoFallbackError}}let L=null;!P||y.isDev||I||(L="/index"===(L=k)?"/":L);let F=!0===y.isDev||!P,H=P&&!F;$&&M&&(0,i.setManifestsSingleton)({page:T,clientReferenceManifest:M,serverActionsManifest:$});let G=e.method||"GET",j=(0,n.getTracer)(),_=j.getActiveScopeSpan(),B=!!(null==A?void 0:A.isWrappedByNextServer),K=!!(0,r.getRequestMeta)(e,"minimalMode"),q=(0,r.getRequestMeta)(e,"incrementalCache")||await y.getIncrementalCache(e,R,S,K);null==q||q.resetRequestCache(),globalThis.__incrementalCache=q;let V={params:w,previewProps:S.preview,renderOpts:{experimental:{authInterrupts:!!R.experimental.authInterrupts,useCacheTimeout:R.experimental.useCacheTimeout},cacheComponents:!!R.cacheComponents,validationLevel:R.experimental.instantInsights.validationLevel,supportsDynamicResponse:F,incrementalCache:q,hmrRefreshHash:(0,r.getRequestMeta)(e,"hmrRefreshHash"),cacheLifeProfiles:R.cacheLife,staticPageGenerationTimeout:R.staticPageGenerationTimeout,waitUntil:o.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,o,r)=>y.onRequestError(e,t,o,r,A)},sharedContext:{buildId:E,deploymentId:O}},Y=new c.NodeNextRequest(e),X=new c.NodeNextResponse(t),z=l.NextRequestAdapter.fromNodeNextRequest(Y,(0,l.signalFromNodeResponse)(t)),W=async({previousCacheEntry:a})=>{try{if(!K&&x&&C&&!a)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let r=await y.handle(z,V);e.fetchMetrics=V.renderOpts.fetchMetrics;let n=V.renderOpts.pendingWaitUntil;n&&o.waitUntil&&(o.waitUntil(n),n=void 0);let i=V.renderOpts.collectedTags;if(!P)return await (0,u.sendResponse)(Y,X,r,n),null;{let e=await r.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(r.headers);i&&(t[f.NEXT_CACHE_TAGS_HEADER]=i),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==V.renderOpts.collectedRevalidate&&!(V.renderOpts.collectedRevalidate>=f.INFINITE_CACHE)&&V.renderOpts.collectedRevalidate,o=void 0===V.renderOpts.collectedExpire||V.renderOpts.collectedExpire>=f.INFINITE_CACHE?!1!==a&&a>0?R.expireTime:void 0:V.renderOpts.collectedExpire;return{value:{kind:b.CachedRouteKind.APP_ROUTE,status:r.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:o}}}}catch(t){throw(null==a?void 0:a.isStale)&&await y.onRequestError(e,t,{routerKind:"App Router",routePath:T,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:x})},!1,A),t}},J=async(r,i)=>{try{var s,c;let r=await y.handleResponse({req:e,nextConfig:R,cacheKey:L,routeKind:a.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:S,isRoutePPREnabled:!1,isOnDemandRevalidate:x,revalidateOnlyGenerated:C,responseGenerator:W,waitUntil:o.waitUntil,isMinimalMode:K});if(!P)return;if((null==r||null==(s=r.value)?void 0:s.kind)!==b.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==r||null==(c=r.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});K||t.setHeader("x-nextjs-cache",x?"REVALIDATED":r.isMiss?"MISS":r.isStale?"STALE":"HIT"),I&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let n=(0,h.fromNodeOutgoingHttpHeaders)(r.value.headers);K&&P||n.delete(f.NEXT_CACHE_TAGS_HEADER),!r.cacheControl||t.getHeader("Cache-Control")||n.get("Cache-Control")||n.set("Cache-Control",(0,m.getCacheControlHeader)(r.cacheControl)),await (0,u.sendResponse)(Y,X,new Response(r.value.body,{headers:n,status:r.value.status||200}));return}catch(t){if(t instanceof g.NoFallbackError||await y.onRequestError(e,t,{routerKind:"App Router",routePath:D,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:x})},!1,A),P)throw t;await (0,u.sendResponse)(Y,X,new Response(null,{status:500}));return}finally{(()=>{if(!r)return;let e=t.statusCode;r.setAttributes({"http.status_code":e,"next.rsc":!1}),e&&e>=500&&(r.setStatus({code:n.SpanStatusCode.ERROR}),r.setAttribute("error.type",e.toString()));let a=j.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==d.BaseServerSpan.handleRequest)return console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let o=a.get("next.route")||D,s=`${G} ${o}`;r.setAttributes({"next.route":o,"http.route":o,"next.span_name":s}),r.updateName(s),i&&i!==r&&(i.setAttribute("http.route",o),i.updateName(s))})()}};if(B&&_)await J(_,void 0);else{let t=j.getActiveScopeSpan();await j.withPropagatedContext(e.headers,()=>j.trace(d.BaseServerSpan.handleRequest,{spanName:`${G} ${T}`,kind:n.SpanKind.SERVER,attributes:{"http.method":G,"http.target":e.url}},e=>J(e,t)),void 0,!B)}}e.s(["handler",0,O,"patchFetch",0,function(){return(0,o.patchFetch)({workAsyncStorage:T,workUnitAsyncStorage:v})},"routeModule",0,y,"serverHooks",0,E,"workAsyncStorage",0,T,"workUnitAsyncStorage",0,v])}];

//# sourceMappingURL=_0oi3t8g._.js.map