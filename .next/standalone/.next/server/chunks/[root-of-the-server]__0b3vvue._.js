module.exports=[874,(e,t,r)=>{t.exports=e.x("buffer",()=>require("buffer"))},54799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},85685,e=>{e.v(e=>Promise.resolve().then(()=>e(54799)))},21517,(e,t,r)=>{t.exports=e.x("http",()=>require("http"))},24836,(e,t,r)=>{t.exports=e.x("https",()=>require("https"))},4446,(e,t,r)=>{t.exports=e.x("net",()=>require("net"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},20635,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/action-async-storage.external.js",()=>require("next/dist/server/app-render/action-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},59043,(e,t,r)=>{t.exports=e.x("next/dist/server/runtime-reacts.external.js",()=>require("next/dist/server/runtime-reacts.external.js"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},81111,(e,t,r)=>{t.exports=e.x("node:stream",()=>require("node:stream"))},14747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},55004,(e,t,r)=>{t.exports=e.x("tls",()=>require("tls"))},92509,(e,t,r)=>{t.exports=e.x("url",()=>require("url"))},24361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},13499,e=>{e.v(t=>Promise.all(["server/chunks/[root-of-the-server]__067q5l0._.js","server/chunks/[root-of-the-server]__1p5e_p3._.js","server/chunks/[root-of-the-server]__00gwxse._.js"].map(t=>e.l(t))).then(()=>t(35067)))},91961,e=>{e.v(t=>Promise.all(["server/chunks/[externals]_node_process_0dvtjkt._.js","server/chunks/[root-of-the-server]__1inf-bp._.js"].map(t=>e.l(t))).then(()=>t(12111)))},88713,e=>{"use strict";let t="gemini-3.6-flash",r=["gemini-3.5-flash","gemini-3.5-flash-lite","gemini-3.1-flash-lite","gemini-2.5-flash-lite"];function a(e){return e.replace(/^models\//,"").trim()}function i(){let e=(process.env.GEMINI_FALLBACK_MODELS||"").split(",").map(a).filter(Boolean);return[...new Set(e.length?e:r)]}function o(e){let t=e instanceof Error?e.message:String(e??"");return/404|NOT_FOUND|not found|no longer available|not available/i.test(t)}function n(e){return e instanceof Error?e.message:String(e??"")}function s(e){let t=n(e);return/RESOURCE_EXHAUSTED|quota exceeded|quotaexceeded|GenerateRequestsPerDay|PerDayPerProject|current quota|exceeded your current quota/i.test(t)}function l(e){let t=n(e);return/429|rate.?limit|too many requests|RESOURCE_EXHAUSTED/i.test(t)}function c(e){let t=n(e);return/500|502|503|504|UNAVAILABLE|DEADLINE_EXCEEDED|temporar|high demand|overloaded|timeout/i.test(t)}async function m(e){await new Promise(t=>setTimeout(t,e))}let d=new Map,u=new Map;function p(e){let t=u.get(e);return!!t&&(!(t<=Date.now())||(u.delete(e),!1))}function h(e,t){let r=s(t)?36e5:l(t)?7e4:15e3*!!c(t);if(!r)return;let a=Date.now()+r;u.set(e,a),console.warn(`[Driacom AI Router] ${e} masuk cooldown ${Math.round(r/1e3)}s karena ${s(t)?"quota":"rate/server limit"}.`)}async function g(e,t){let r=a(t),i=d.get(r);if(i&&i.expiresAt>Date.now())return i.outputTokenLimit;try{let t=new URL(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(r)}`);t.searchParams.set("key",e);let a=await fetch(t.toString(),{method:"GET",cache:"no-store"});if(!a.ok)return 32768;let i=await a.json(),o=Number(i.outputTokenLimit)>0?Number(i.outputTokenLimit):32768;return d.set(r,{outputTokenLimit:o,expiresAt:Date.now()+6e5}),o}catch{return 32768}}async function b(e){let r=a(e.requestedModel?.trim()||t),d=[a(e.fallbackModel?.trim()||""),...i()].map(a).filter(Boolean).filter(e=>e!==r),u=[r,...d].filter((e,t,r)=>r.indexOf(e)===t),b=Math.max(1,Math.min(3,e.maxRetries??2)),y=null;for(let t of u){if(p(t)){console.warn(`[Driacom AI Router] Skip ${t}: masih dalam cooldown.`);continue}let r=await g(e.apiKey,t),a=Math.max(1024,Math.min(e.requestedMaxOutputTokens,r));for(let r=0;r<b;r+=1)try{let i=await e.generate(t,a);return console.info(`[Driacom AI Router] SUCCESS model=${t} attempt=${r+1}`),{response:i,model:t,maxOutputTokens:a}}catch(g){y=g;let e=s(g),i=l(g),d=c(g),u=function(e){let t=n(e);return/MAX_TOKENS|output.*kosong|empty response|tidak mengembalikan teks|truncated|terpotong/i.test(t)}(g),p=o(g);if(console.warn(`[Driacom AI Router] FAIL model=${t} attempt=${r+1}/${b} quota=${e} rateLimit=${i} temporary=${d} missing=${p}`),p||e){h(t,g);break}if(i||d||u){if(r===b-1){h(t,g);break}u&&(a=Math.max(4096,Math.floor(.78*a)));let e=1200*Math.pow(2,r)+Math.floor(500*Math.random());console.warn(`[Driacom AI Router] retry ${r+1}/${b} model=${t} delay=${e}ms`),await m(e);continue}throw g}}if(y instanceof Error)throw y;throw Error("Driacom AI Router: semua model yang tersedia sedang tidak dapat digunakan.")}async function y(e){let r=a(e.requestedModel?.trim()||t),n=[a(e.fallbackModel?.trim()||""),...i()].map(a).filter(Boolean).filter(e=>e!==r),m=[r,...n].filter((e,t,r)=>r.indexOf(e)===t),d=null;for(let t of m)if(!p(t))try{return{response:await e.generate(t),model:t}}catch(e){if(d=e,s(e)||l(e)||c(e)||o(e)){h(t,e);continue}throw e}throw d instanceof Error?d:Error("Driacom AI Router: semua model fallback tidak tersedia.")}async function f(e){let t=[],r="";do{let i=new URL("https://generativelanguage.googleapis.com/v1beta/models");i.searchParams.set("key",e),r&&i.searchParams.set("pageToken",r);let o=await fetch(i.toString(),{method:"GET",cache:"no-store"});if(!o.ok){let e=await o.text();throw Error(`Gagal membaca daftar model Gemini (${o.status}): ${e}`)}let n=await o.json();for(let e of n.models??[])e.name&&t.push({id:a(e.name),displayName:e.displayName,supportedGenerationMethods:e.supportedGenerationMethods});r=n.nextPageToken??""}while(r)return t}e.s(["DEFAULT_GEMINI_TEXT_MODEL",0,t,"GEMINI_MODEL_CATALOG",0,[{id:"gemini-3.6-flash",label:"Gemini 3.6 Flash",category:"Text / Production"},{id:"gemini-3.5-flash",label:"Gemini 3.5 Flash",category:"Text / Production"},{id:"gemini-3.5-flash-lite",label:"Gemini 3.5 Flash-Lite",category:"Text / Fast"},{id:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro Preview",category:"Reasoning / Preview"},{id:"gemini-3.1-flash-lite",label:"Gemini 3.1 Flash-Lite",category:"Text / Fast"},{id:"gemini-3-flash-preview",label:"Gemini 3 Flash Preview",category:"Text / Preview"},{id:"gemini-2.5-pro",label:"Gemini 2.5 Pro",category:"Reasoning / Legacy"},{id:"gemini-2.5-flash",label:"Gemini 2.5 Flash",category:"Text / Legacy"},{id:"gemini-2.5-flash-lite",label:"Gemini 2.5 Flash-Lite",category:"Text / Fast / Legacy"},{id:"gemini-3-pro-image",label:"Gemini 3 Pro Image",category:"Image"},{id:"gemini-3.1-flash-image",label:"Gemini 3.1 Flash Image",category:"Image"},{id:"gemini-2.5-flash-image",label:"Gemini 2.5 Flash Image",category:"Image / Legacy"},{id:"gemini-3.1-flash-live-preview",label:"Gemini 3.1 Flash Live Preview",category:"Live / Audio"},{id:"gemini-3.1-flash-tts-preview",label:"Gemini 3.1 Flash TTS Preview",category:"Audio / TTS"},{id:"gemini-2.5-flash-native-audio-preview-12-2025",label:"Gemini 2.5 Flash Native Audio",category:"Audio / Legacy"}],"generateWithGeminiFallback",0,y,"generateWithGeminiResilient",0,b,"getDriacomPublicErrorMessage",0,function(e){let t=n(e);return s(e)?"Driacom sedang ramai digunakan dan kapasitas AI sementara terbatas. Coba lagi beberapa saat.":l(e)?"Driacom sedang menerima banyak permintaan. Coba lagi beberapa saat.":c(e)?"Driacom sedang mengalami kepadatan layanan AI. Coba lagi beberapa saat.":o(e)?"Mesin AI Driacom sedang diperbarui. Coba lagi beberapa saat.":/GEMINI_API_KEY|API key|401|403|PERMISSION_DENIED/i.test(t)?"Layanan AI Driacom sedang tidak tersedia. Silakan coba lagi nanti.":"Driacom gagal meracik prompt. Coba lagi beberapa saat."},"listAvailableGeminiModels",0,f])},22253,e=>{"use strict";e.s(["AFFILIATE_EXECUTION_RULES",0,`
AFFILIATE EXECUTION EXTENSION
- The uploaded product reference and current storyboard are the authoritative product sources.
- Maintain identical product, exact visible construction, color, material, packaging, logo, proportions and details.
- VIEW LOCK: never reveal product surfaces/angles that are not established by the available reference.
- Product interaction must preserve believable hand/product contact and physical attachment.
- Product visibility has priority over unnecessary movement or cinematic camera behavior.
- For apparel, preserve the exact promoted garment while adapting only supporting wardrobe when explicitly required.
- Smartphone/hand/arm/body relationships must remain physically connected when a phone is present.
`.trim(),"STORYBOARD_EXECUTION_RULES",0,`
DRIACOM UNIVERSAL VIDEO EXECUTION CORE — MANDATORY

CORE PRINCIPLE
The CURRENT SCENE STORYBOARD IMAGE is the SINGLE AND ABSOLUTE VISUAL SOURCE OF TRUTH for the corresponding video scene.
The storyboard image defines WHAT EXISTS and WHERE IT EXISTS.
The scene instructions define WHAT IS ALLOWED TO CHANGE.
The video prompt defines HOW that authorized change becomes natural motion.
Never reverse this hierarchy.

REFERENCE TRUTH LOCK
Preserve exactly what is visibly established in the current storyboard image:
- character identity, face, body proportions, hairstyle/hijab, wardrobe and visible accessories
- primary product/object identity, construction, color, material, proportions and visible details
- object position, orientation and physical relationships
- environment, architecture, furniture, props and background objects
- lighting direction, shadow relationships, perspective and composition
- camera framing and established visual language
Do not redesign, beautify, reinterpret, simplify, replace, add or remove visible elements merely to make the video more cinematic.
A new camera angle is NOT permission to invent unseen geometry or product surfaces.

IMMUTABLE VS MUTABLE
IMMUTABLE by default:
identity, face, body, wardrobe, product/object identity, product construction, accessories, environment, background, lighting, perspective and scene composition.
MUTABLE only when explicitly authorized by the scene:
pose, gaze, expression, body motion, hand motion, object interaction, temporary fabric deformation, temporary environmental interaction and camera micro-motion.
If an element is not explicitly authorized to change, PRESERVE IT.

ACTION AUTHORIZATION
Every major movement must be supported by the storyboard and/or explicit scene action.
Do not invent additional actions, camera moves, reactions, gestures, steps, object interactions or scene changes.
If the storyboard visibly establishes an action, execute that action faithfully.
If the written instruction conflicts with the storyboard's established visual state, preserve the storyboard's visible state and choose the smallest motion needed to satisfy the instruction without redesigning the scene.

MOTION-ONLY TRANSLATION
Do not regenerate the scene concept from scratch.
Think: "How do I animate this exact image?" — not "What would look cool here?"
Start from the exact visual state shown by the storyboard.
Introduce only authorized motion.
Keep all non-authorized elements stable.

START → ACTION → END STATE
Each shot/scene must have:
START STATE = exact visual state from the storyboard image.
AUTHORIZED ACTION = only the requested/visible action.
END STATE = a believable physical state produced by that action.
Never reset the scene between internal shots.
Never teleport, snap, morph or jump the character/product/environment to a newly invented state.

SCENE-TO-SCENE CONTINUITY
The END STATE of Scene N is the continuity context for Scene N+1.
Do not independently redesign each scene.
Preserve identity, wardrobe, product/object state, environment, lighting, screen direction and spatial relationships unless the next storyboard explicitly shows a deliberate change.
A new storyboard image may establish a deliberate new state, but it must still belong to the same established production universe.

PRIORITY HIERARCHY
1. CURRENT STORYBOARD VISUAL TRUTH
2. CHARACTER / OBJECT IDENTITY
3. PRIMARY PRODUCT / IMPORTANT OBJECT FIDELITY
4. SCENE COMPOSITION AND ENVIRONMENT
5. AUTHORIZED SCENE ACTION
6. NATURAL HUMAN / PHYSICAL MOTION
7. CAMERA STYLE AND CINEMATIC ENHANCEMENT
If a lower priority conflicts with a higher priority, the higher priority wins.

FAIL-SAFE RULE
If a requested motion risks identity drift, product distortion, anatomy errors, object detachment, environment change or camera instability:
REDUCE THE MOTION.
Do NOT invent a different motion.
Do NOT add a replacement action.
Visual fidelity is more important than movement complexity.

PHYSICAL CONSISTENCY
Connected physical parts must remain connected:
shoulder → arm → wrist → hand → fingers → held object.
Garment → seams → pockets → buttons → zippers → straps → hardware.
Object parts must move as parts of the same physical object.
No floating, duplicated, disappearing, fused or detached components.

CAMERA RESTRAINT
Camera movement is optional, not mandatory.
If the storyboard is stable, keep the camera stable.
Any camera movement must be motivated by an authorized scene action or reveal.
Never use cinematic movement as an excuse to alter composition, perspective, product identity or background.
No random zoom, reframing, orbit, rotation, shake, jitter, drift or perspective jump.

STORYBOARD EXECUTION CHECK
Before finalizing the video prompt, verify:
- Does the opening frame match the storyboard?
- Is every major movement visible or explicitly authorized?
- Did any unrequested element change?
- Does the product/object remain identical?
- Does the character remain identical?
- Does the environment remain identical?
- Does the final state logically result from the authorized action?
If any answer is NO, reduce or correct the motion before output.
`.trim()])},31661,e=>{"use strict";async function t(e){return{authenticated:!1,plan:"FREE",used:0,remaining:null,bonusTokens:0,unlimited:!0}}async function r(e){return{ok:!0,plan:"FREE",unlimited:!0,remaining:null}}async function a(e){}e.s(["getUsageStatus",0,t,"releasePromptGeneration",0,a,"reservePromptGeneration",0,r])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0b3vvue._.js.map