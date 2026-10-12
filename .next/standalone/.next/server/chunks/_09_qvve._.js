module.exports=[33614,e=>{"use strict";var t=e.i(89171),a=e.i(34731),n=e.i(22253);let i=e=>String(e??"").trim(),r=e=>{let t=Number(e.scenes);return Number.isFinite(t)?Math.max(1,Math.min(10,Math.floor(t))):4};var o=e.i(76131);let s=e=>String(e??"").trim();function l(e){return s(e.visualStyle)||"Realistis Sinematik"}function c(e){let t,a,i,r=Number.isFinite(t=Number(e.scenes))?Math.max(1,Math.min(10,Math.floor(t))):4,c=(a=function(e){let t=s(e.characterCount);if(!t||/^otomatis$/i.test(t))return 1;let a=Number(t);return Number.isFinite(a)?Math.max(1,Math.min(6,Math.floor(a))):1}(e),i=["Raka","Maya","Dimas","Sari","Bima","Naya"],Array.from({length:a},(t,a)=>{let n=i[a]||`Character ${a+1}`,r=0===a?"11 tahun":"young adult",o=0===a?"natural Indonesian child face, expressive dark brown eyes, warm brown skin, small slim build":"natural Indonesian face, dark brown eyes, realistic body proportions",c=0===a?"slightly loose cream shirt, simple long pants, natural rural clothing":"simple clothing appropriate to the story environment";return{id:`CHAR-${String(a+1).padStart(2,"0")}`,name:n,role:0===a?"Protagonist":"Supporting Character",age:r,gender:0===a?"Male":"As required by the story",appearance:o,personality:0===a?"curious, calm, brave but not superhero-like":"natural and supportive of the conflict progression",goal:0===a?s(e.idea):"support the main conflict progression",secret:"",relationship:0===a?"story center":`connected to ${i[0]}`,visualSignature:`${o}; ${c}; gaya visual ${l(e)}`,masterPrompt:`${n}, ${r}, ${o}, ${c}. Maintain the same face, hair, age, body proportions, clothing, colors, and visual traits in every scene. Style: ${l(e)}. Aspect ratio: ${s(e.ratio)||"9:16"}.`}})),u=s(e.genre)||"Drama Viral",d=s(e.tone)||"Emosional",h=s(e.idea),p=Array.from({length:r},(t,a)=>{let i,l,u,d,h,p,m,g,y,f,R,k,E,b,T,S,A,v,O,I;return i=c[0],l=s(e.duration)||"8 detik",u=s(e.ratio)||"9:16",d=s(e.language)||"Bahasa Indonesia",h=s(e.genre)||"Drama Viral",p=s(e.tone)||"Emosional",m=s(e.idea),y=(g=[["Hook","a trigger appears and changes the initial state","curiosity increases"],["Trigger","the protagonist makes the first decision","the risk becomes visible"],["Escalation","the conflict becomes harder and choices have consequences","pressure increases"],["Climax","the protagonist faces the core conflict","emotion reaches its peak"],["Payoff","the consequence of the decision becomes visible","the story meaning becomes clear"]])[Math.min(a,g.length-1)],f=0===a?"Initial state before the conflict.":`The ending state of Scene ${a} becomes this scene's starting point.`,R=!!e.narrator,k=!!e.dialogue,E=R?`Short narration in ${d} explaining the scene change without repeating the visuals.`:"",b=k?`${i.name}: a short line in ${d} that matches the scene state and emotion.`:"",T=i.masterPrompt||"",S=Math.max(1,Number(l.match(/\d+(?:\.\d+)?/)?.[0]||8))/4,A=`CREATE ONE COMPLETE STORYBOARD SHEET — SCENE ${a+1} — ${u}. This is a visual planning reference only. Create exactly 4 sequential internal panels: Shot 1, Shot 2, Shot 3, Shot 4. Each panel represents ${S} seconds. ${T} Scene story: ${m}. Beat: ${y[0]}. ${y[1]}. ${y[2]}. Shot 1: establish setup and hook. Shot 2: trigger and action. Shot 3: reaction, escalation and strongest visual information. Shot 4: payoff and ending state. Include complete action, expression/state, camera/framing, composition, lighting, props, environment and continuity in every panel. Do not render final promotional/motion-text copy as text in the storyboard. Do not create four separate images. Maintain the same production universe, character identity, wardrobe, props and world continuity. ${o.LOCAL_QUALITY_PARITY_RULES}`,v=R?`Narration: ${E}`:"Narration: No narration — narration is disabled for this project.",O=k?`Dialogue: ${b}`:"Dialogue: No character dialogue — dialogue is disabled for this project.",I=`SCENE ${a+1} — VIDEO PROMPT

Duration: ${l}
4 internal shots
${S} seconds per shot.

IMPORTANT:
The storyboard sheet is a visual planning reference only.
Never display the storyboard sheet.
Never use the storyboard sheet as the opening frame.

BEGIN DIRECTLY WITH A FULL-FRAME SHOT 1.

SHOT 1
0–${S} sec
Start from the real scene described by the storyboard. Establish the hook/setup, character state, environment and camera. ${y[1]}

SHOT 2
${S}–${2*S} sec
Continue directly from Shot 1. Trigger the next action and preserve screen direction, identity, wardrobe, props, lighting and environment.

SHOT 3
${2*S}–${3*S} sec
Continue directly from Shot 2. Show reaction, escalation and the strongest emotional/information beat.

SHOT 4
${3*S}–${Number(l.match(/\d+(?:\.\d+)?/)?.[0]||8)} sec
Continue directly from Shot 3. Deliver payoff and a clean ending state that connects logically to the next scene.

NARRATION:
${v}

DIALOGUE:
${O}

AUDIO:
Follow the selected audio mode: ${s(e.audio)}. Keep BGM, ambience and SFX consistent with the story world and synchronize them to the four internal beats.

CHARACTER CONSISTENCY:
Maintain exact identity, face, hair, body proportions, wardrobe, accessories and voice identity. Do not redesign characters.

CONTINUITY:
Shot 1 establishes the state; Shot 2 continues it; Shot 3 continues the physical and emotional state; Shot 4 resolves it without resetting the environment, lighting, props or character identity.

NEGATIVE PROMPT:
Do not display storyboard sheet, do not start with storyboard panels, no slideshow, no frozen frames, no identity drift, no wardrobe change, no prop duplication, no environment jump, no lighting jump, no malformed anatomy, no extra limbs, no random text, no watermark, no unwanted camera reset, no excessive effects, no flicker, no jitter. ${o.LOCAL_QUALITY_PARITY_RULES}

${n.STORYBOARD_EXECUTION_RULES}`,{sceneNumber:a+1,title:y[0],purpose:`${y[0]} to develop the idea into a clear cause-and-effect progression.`,location:"Main story environment based on the user idea",time:"Consistent with the previous scene",characters:c.map(e=>e.id),startState:f,trigger:y[1],intention:`Advance the ${h} story with a ${p} tone.`,action:`${i.name} performs a concrete action that changes the state.`,reaction:y[2],escalation:`Risk or information changes in scene ${a+1}.`,dialogue:b,narration:E,emotionalBeat:`${p}: ${y[2]}`,visualBeat:"The visual composition must make the beat change immediately readable.",endState:a===r-1?"The main conflict is resolved and the final consequence is visible.":`A new state that forces Scene ${a+2}.`,continuity:"Maintain character identity, wardrobe, props, location, time, lighting direction, and screen direction.",storyboardImagePrompt:A,imagePrompt:A,videoPrompt:I}});return{title:h.split(/[.!?]/)[0].slice(0,80)||"Driacom Story",logline:`${h||"A short-form story"} with escalating conflict and a clear payoff.`,thumbnailPrompt:`Cinematic thumbnail ${l(e)}, ${s(e.ratio)||"9:16"}, featuring ${c[0].name} as the main focus, with an expression matching the ${u} conflict, komposisi mobile-first, pencahayaan dramatis namun realistis, tanpa mengubah identitas karakter.`,hook:p[0]?.purpose||"Story hook",genre:u,tone:d,theme:s(e.theme)||"The consequence of a decision.",premise:h,protagonistGoal:c[0]?.goal||h,centralConflict:"The protagonist faces a problem that forces a change in decisions.",stakes:"Risk increases if the protagonist fails.",antagonistForce:"Circumstances and consequences of the main conflict.",turningPoint:p[Math.min(1,r-1)]?.action||"",midpoint:p[Math.floor(r/2)]?.escalation||"",climax:p[r-1]?.action||"",payoff:p[r-1]?.endState||"",ending:s(e.ending)||"Satisfying with clear consequences",emotionalArc:p.map(e=>e.emotionalBeat),characters:c,world:`The story world follows the user idea with ${l(e)} and aspect ratio ${s(e.ratio)||"9:16"}.`,storyArc:p.map(e=>e.title),scenes:p}}var u=e.i(93421),d=e.i(31661),h=e.i(88713);function p(e){return String(e??"").trim()}function m(e){let t=p(e).replace(/^```(?:json)?\s*/i,"").replace(/\s*```$/i,"").trim();if(!t)throw Error("Gemini mengembalikan output kosong.");try{return JSON.parse(t)}catch{let e=t.indexOf("{"),a=t.lastIndexOf("}");if(e>=0&&a>e)try{return JSON.parse(t.slice(e,a+1))}catch{}throw Error("Output Storytelling dari AI tidak valid atau terpotong.")}}async function g(e,t,a,n,i,r){let o=`
Kamu adalah DRIACOM STORY IDEA DIRECTOR.
Buat 3 ide cerita original yang kuat untuk konten short-form berdasarkan:
GENRE: ${a}
TONE: ${n}

Aturan:
- Ide harus mudah dikembangkan menjadi 1-10 scene.
- Hindari ide generik dan pembuka yang sama.
- Setiap ide harus punya konflik yang jelas dan potensi payoff.
- Sesuaikan karakter, konflik, dan emosi dengan genre.
- Write all idea titles, concepts, and hooks in ${i}.
- If ${i} is Indonesian, use natural Indonesian. If it is English, use natural English.
- Do not create production prompts.
- Jangan memakai markdown.

Output JSON valid:
{
  "ideas": [
    {
      "title": "...",
      "concept": "...",
      "hook": "..."
    },
    {
      "title": "...",
      "concept": "...",
      "hook": "..."
    },
    {
      "title": "...",
      "concept": "...",
      "hook": "..."
    }
  ]
}
`.trim(),{response:s}=await (0,h.generateWithGeminiResilient)({apiKey:t,requestedModel:r,fallbackModel:h.DEFAULT_GEMINI_TEXT_MODEL,requestedMaxOutputTokens:2500,maxRetries:2,generate:async(t,a)=>e.models.generateContent({model:t,contents:o,config:{responseMimeType:"application/json",maxOutputTokens:a,...t.startsWith("gemini-3.")?{}:{temperature:.9}}})});return m(p(s?.text))}function y(e,t,a){let n=t?`
NARRATOR SPEAKER LOCK:
Narrator is OFF-SCREEN. No visible character is speaking during narration.
All visible characters keep their mouths closed. They may blink, breathe, look, react,
or perform silent physical acting, but NEVER lip-sync to narrator audio.`:"",i=a?`
CHARACTER SPEAKER LOCK:
Only the explicitly named dialogue speaker may lip-sync. Every other visible character
must keep their mouth closed. Never transfer lip-sync to another character.`:"";return`${n}
${i}`}async function f(e){let o=null,s=!1;try{let l,f=(0,u.getMenuAIConfig)("storytelling"),R=await e.json();if(o=R,!f.enabled){let e,a;if(R?.mode==="ideas")return t.NextResponse.json({success:!0,engine:"LOCAL_STORYTELLING",fallback:!0,reason:"AI_CONFIGURATION_MISSING",ideas:[{title:"Rahasia yang Belum Terungkap",concept:"Sebuah rahasia mengubah keputusan tokoh utama.",hook:"Semua bermula dari satu hal kecil."},{title:"Keputusan Terakhir",concept:"Tokoh utama harus memilih sebelum konsekuensinya terlambat.",hook:"Kalau kamu ada di posisi ini, pilih yang mana?"},{title:"Satu Kesempatan",concept:"Satu kesempatan terakhir memaksa tokoh utama menghadapi konflik.",hook:"Kesempatan itu datang sekali."}]});return e=R.form,(a=c(e)).scenes=a.scenes.map(t=>({...t,videoPrompt:`${t.videoPrompt}

${y(t,!!e.narrator,!!e.dialogue)}`.trim()})),t.NextResponse.json({success:!0,engine:"LOCAL_STORYTELLING",fallback:!0,reason:"AI_CONFIGURATION_MISSING",sceneCount:r(e),story:a})}let k=f.apiKey,E=new a.GoogleGenAI({apiKey:k});if(R?.mode==="ideas"){let e=p(R.genre)||"Drama Viral",a=p(R.tone)||"Emosional",n=await g(E,k,e,a,p(R.language)||"Bahasa Indonesia",f.model||h.DEFAULT_GEMINI_TEXT_MODEL);return t.NextResponse.json({success:!0,ideas:Array.isArray(n.ideas)?n.ideas.slice(0,3):[]})}let b=R.form;if(!b?.idea?.trim())return t.NextResponse.json({success:!1,error:"Masukkan ide cerita terlebih dahulu."},{status:400});let T=await (0,d.reservePromptGeneration)("storytelling");if(!T.ok)return t.NextResponse.json({success:!1,error:T.error},{status:T.status});s=!T.unlimited;let S=(l=r(b),`
Kamu adalah DRIACOM STORY DIRECTOR. Kamu membuat paket produksi cerita short-form yang siap dipakai untuk AI image/video.
User hanya memberi beberapa keputusan. Kamu wajib mengerjakan detail produksi di belakang layar tanpa membuat output yang bertele-tele.

INPUT USER
IDE: ${i(b.idea)}
GENRE: ${i(b.genre)}
TONE: ${i(b.tone)}
TARGET SCENES: ${l}
DURATION: ${i(b.duration)}
CHARACTER COUNT: ${i(b.characterCount)}
LANGUAGE: ${i(b.language)}
RATIO: ${i(b.ratio)}
AUDIO: ${i(b.audio)}
VISUAL STYLE: ${i(b.visualStyle)}

VISUAL STYLE LOCK
Hanya gunakan salah satu dari tiga gaya berikut, sesuai input user:
1. Realistis Sinematik = live-action cinematic realism, natural human appearance, believable lighting and environments.
2. Sangat Realistis = extremely detailed photorealistic human/environment rendering, physically believable materials and lighting.
3. Animasi 3D = polished modern 3D animation, consistent stylized characters, believable 3D materials, cinematic lighting.
Jangan menyebut nama brand studio atau gaya berhak cipta tertentu.

STORY RULES
1. Buat cerita dengan sebab-akibat yang jelas, hook kuat, goal karakter, konflik meningkat, climax, payoff, dan ending.
2. Setiap scene harus mengubah informasi, tujuan, hubungan, risiko, emosi, atau keadaan.
3. Karakter harus konkret dan konsisten. Tetapkan wajah, rambut, usia, bentuk tubuh, pakaian, warna, aksesori, kepribadian, dan ciri visual.
4. Jumlah karakter harus mengikuti input user. Jika "Otomatis", gunakan jumlah minimum yang dibutuhkan cerita.
5. Buat MASTER CHARACTER PROMPT yang dapat ditempel ulang pada scene mana pun untuk menjaga identitas.
6. STORYBOARD IMAGE PROMPT setiap scene WAJIB berbentuk PERINTAH untuk membuat SATU storyboard sheet dengan tepat 4 internal shots. Setiap shot harus memiliki internal beat lengkap: action, expression/state, camera, composition, continuity, dan ending state. Jangan merender final motion text sebagai tulisan di storyboard. Storyboard hanya visual planning reference.
7. IMAGE PROMPT setiap scene WAJIB SELF-CONTAINED. Jangan menulis "same character as previous scene" atau "lihat character sheet". Prompt harus sudah memuat identitas karakter yang tampil, pakaian, lokasi, waktu, aksi, ekspresi, komposisi, kamera, lighting, visual style, ratio, props, dan continuity yang relevan.
8. VIDEO PROMPT setiap scene WAJIB memakai format: SCENE X — VIDEO PROMPT / Duration / 4 internal shots / IMPORTANT storyboard reference / BEGIN DIRECTLY WITH A FULL-FRAME SHOT 1 / SHOT 1–4 dengan timing yang dibagi rata / NARRATION / AUDIO / PRODUCT OR CHARACTER CONSISTENCY bila relevan / CONTINUITY / NEGATIVE PROMPT. Semua shot tetap satu prompt video, bukan empat prompt terpisah. Jangan pernah menampilkan storyboard sheet sebagai frame pembuka.
9. Semua scene harus terasa sebagai satu film pendek yang sama.
10. Jika narator aktif, narator adalah suara off-screen. Karakter visible tidak lip-sync saat narasi.
11. Jika dialog aktif, hanya speaker yang ditulis yang lip-sync. Karakter lain tetap silent.
12. Audio harus mengikuti pilihan user. Jangan menambahkan voice/dialogue jika user tidak memilihnya.
13. PROMPT LANGUAGE CONTRACT: All prompt structure, section labels, camera direction, visual descriptions, continuity rules, negative prompts, technical instructions, and production metadata MUST be written in English.
14. Only language-dependent spoken content may use ${i(b.language)}: character dialogue, narration, voice-over wording, and any explicitly requested on-screen spoken/script text. Do not translate the technical prompt structure into the selected language.
15. If the selected language is Indonesian, dialogue/narration must be natural Indonesian. If the selected language is English, dialogue/narration must be natural English. Follow the selected language exactly for spoken content.
16. Do not make prompts too short. Include enough production detail without filler.
17. Do not output markdown. Return valid JSON only.

${n.STORYBOARD_EXECUTION_RULES}

OUTPUT JSON
{
 "title":"...",
 "logline":"...",
 "genre":"...",
 "tone":"...",
 "characters":[{
   "id":"CHAR-01",
   "name":"...",
   "role":"...",
   "age":"...",
   "gender":"...",
   "appearance":"...",
   "personality":"...",
   "goal":"...",
   "secret":"...",
   "relationship":"...",
   "visualSignature":"...",
   "masterPrompt":"MASTER CHARACTER PROMPT lengkap, self-contained, siap copy-paste"
 }],
 "scenes":[{
   "sceneNumber":1,
   "title":"...",
   "purpose":"...",
   "location":"...",
   "time":"...",
   "characters":["CHAR-01"],
   "action":"...",
   "reaction":"...",
   "dialogue":"SPEAKER: ... atau kosong",
   "narration":"... atau kosong",
   "emotionalBeat":"...",
   "endState":"...",
   "continuity":"...",
   "storyboardImagePrompt":"ONE COMMAND PROMPT for one storyboard sheet containing exactly 4 internal shots, each with complete internal beats, continuity, camera, action and expression; no final motion-text copy rendered in the storyboard",
   "videoPrompt":"ONE COMPLETE VIDEO PROMPT using the exact SCENE X — VIDEO PROMPT format with Shot 1-4, Narration, Audio, Consistency, Continuity and Negative Prompt"
 }]
}

Wajib menghasilkan tepat ${l} scene. Setiap scene berdurasi ${i(b.duration)}. Jangan mengubah jumlah scene.
`.trim()),{response:A,model:v}=await (0,h.generateWithGeminiResilient)({apiKey:k,requestedModel:f.model||h.DEFAULT_GEMINI_TEXT_MODEL,fallbackModel:h.DEFAULT_GEMINI_TEXT_MODEL,requestedMaxOutputTokens:3e4,maxRetries:2,generate:async(e,t)=>E.models.generateContent({model:e,contents:S,config:{responseMimeType:"application/json",maxOutputTokens:t,...e.startsWith("gemini-3.")?{}:{temperature:.85}}})}),O=p(A?.text),I=m(O);if(!I?.scenes?.length)throw Error("Storytelling AI tidak menghasilkan scene.");return I.scenes=I.scenes.map(e=>({...e,videoPrompt:`${e.videoPrompt}

${y(e,!!b.narrator,!!b.dialogue)}`.trim()})),t.NextResponse.json({success:!0,model:v,sceneCount:r(b),story:I})}catch(e){s&&await (0,d.releasePromptGeneration)("storytelling"),console.error("Driacom Storytelling Error:",e);try{let a=o,n=a?.form;if(n?.idea?.trim()){let a=(0,u.isGeminiQuotaOrRateLimit)(e)?"AI_QUOTA_OR_RATE_LIMIT":"AI_ERROR",i=c(n);return i.scenes=i.scenes.map(e=>({...e,videoPrompt:`${e.videoPrompt}

${y(e,!!n.narrator,!!n.dialogue)}`.trim()})),t.NextResponse.json({success:!0,engine:"LOCAL_STORYTELLING",fallback:!0,reason:a,sceneCount:r(n),story:i})}}catch(e){console.error("Driacom Local Storytelling Fallback Error:",e)}return t.NextResponse.json({success:!1,error:(0,h.getDriacomPublicErrorMessage)(e)},{status:500})}}e.s(["POST",0,f],33614)},15986,e=>{"use strict";var t=e.i(47909),a=e.i(74017),n=e.i(96250),i=e.i(59756),r=e.i(61916),o=e.i(74677),s=e.i(69741),l=e.i(16795),c=e.i(87718),u=e.i(95169),d=e.i(47587),h=e.i(66012),p=e.i(70101),m=e.i(26937),g=e.i(10372),y=e.i(93695);e.i(52474);var f=e.i(5232);let R=new t.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/storytelling/route",pathname:"/api/storytelling",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/storytelling/route.ts",nextConfigOutput:"standalone",userland:()=>e.r(33614),...{}}),{workAsyncStorage:k,workUnitAsyncStorage:E,serverHooks:b}=R;async function T(e,t,n){n.requestMeta&&(0,i.setRequestMeta)(e,n.requestMeta),R.isDev&&(0,i.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let k="/api/storytelling/route";k=k.replace(/\/index$/,"")||"/";let E=await R.prepare(e,t,{srcPage:k,multiZoneDraftMode:!1});if(!E)return t.statusCode=400,t.end("Bad Request"),null==n.waitUntil||n.waitUntil.call(n,Promise.resolve()),null;let{buildId:b,deploymentId:T,params:S,nextConfig:A,parsedUrl:v,isDraftMode:O,prerenderManifest:I,routerServerContext:N,isOnDemandRevalidate:C,revalidateOnlyGenerated:$,resolvedPathname:w,clientReferenceManifest:P,serverActionsManifest:M}=E,x=(0,s.normalizeAppPath)(k),D=!!(I.dynamicRoutes[x]||I.routes[w]),L=async()=>((null==N?void 0:N.render404)?await N.render404(e,t,v,!1):t.end("This page could not be found"),null);if(D&&!O){let e=!!I.routes[w],t=I.dynamicRoutes[x];if(t&&!1===t.fallback&&!e){if(A.adapterPath)return await L();throw new y.NoFallbackError}}let _=null;!D||R.isDev||O||(_="/index"===(_=w)?"/":_);let U=!0===R.isDev||!D,H=D&&!U;M&&P&&(0,o.setManifestsSingleton)({page:k,clientReferenceManifest:P,serverActionsManifest:M});let G=e.method||"GET",j=(0,r.getTracer)(),q=j.getActiveScopeSpan(),F=!!(null==N?void 0:N.isWrappedByNextServer),B=!!(0,i.getRequestMeta)(e,"minimalMode"),K=(0,i.getRequestMeta)(e,"incrementalCache")||await R.getIncrementalCache(e,A,I,B);null==K||K.resetRequestCache(),globalThis.__incrementalCache=K;let Y={params:S,previewProps:I.preview,renderOpts:{experimental:{authInterrupts:!!A.experimental.authInterrupts,useCacheTimeout:A.experimental.useCacheTimeout},cacheComponents:!!A.cacheComponents,validationLevel:A.experimental.instantInsights.validationLevel,supportsDynamicResponse:U,incrementalCache:K,hmrRefreshHash:(0,i.getRequestMeta)(e,"hmrRefreshHash"),cacheLifeProfiles:A.cacheLife,staticPageGenerationTimeout:A.staticPageGenerationTimeout,waitUntil:n.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,n,i)=>R.onRequestError(e,t,n,i,N)},sharedContext:{buildId:b,deploymentId:T}},J=new l.NodeNextRequest(e),V=new l.NodeNextResponse(t),W=c.NextRequestAdapter.fromNodeNextRequest(J,(0,c.signalFromNodeResponse)(t)),X=async({previousCacheEntry:a})=>{try{if(!B&&C&&$&&!a)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let i=await R.handle(W,Y);e.fetchMetrics=Y.renderOpts.fetchMetrics;let r=Y.renderOpts.pendingWaitUntil;r&&n.waitUntil&&(n.waitUntil(r),r=void 0);let o=Y.renderOpts.collectedTags;if(!D)return await (0,h.sendResponse)(J,V,i,r),null;{let e=await i.blob(),t=(0,p.toNodeOutgoingHttpHeaders)(i.headers);o&&(t[g.NEXT_CACHE_TAGS_HEADER]=o),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==Y.renderOpts.collectedRevalidate&&!(Y.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&Y.renderOpts.collectedRevalidate,n=void 0===Y.renderOpts.collectedExpire||Y.renderOpts.collectedExpire>=g.INFINITE_CACHE?!1!==a&&a>0?A.expireTime:void 0:Y.renderOpts.collectedExpire;return{value:{kind:f.CachedRouteKind.APP_ROUTE,status:i.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:n}}}}catch(t){throw(null==a?void 0:a.isStale)&&await R.onRequestError(e,t,{routerKind:"App Router",routePath:k,routeType:"route",revalidateReason:(0,d.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:C})},!1,N),t}},z=async(i,o)=>{try{var s,l;let i=await R.handleResponse({req:e,nextConfig:A,cacheKey:_,routeKind:a.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:I,isRoutePPREnabled:!1,isOnDemandRevalidate:C,revalidateOnlyGenerated:$,responseGenerator:X,waitUntil:n.waitUntil,isMinimalMode:B});if(!D)return;if((null==i||null==(s=i.value)?void 0:s.kind)!==f.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==i||null==(l=i.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});B||t.setHeader("x-nextjs-cache",C?"REVALIDATED":i.isMiss?"MISS":i.isStale?"STALE":"HIT"),O&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let r=(0,p.fromNodeOutgoingHttpHeaders)(i.value.headers);B&&D||r.delete(g.NEXT_CACHE_TAGS_HEADER),!i.cacheControl||t.getHeader("Cache-Control")||r.get("Cache-Control")||r.set("Cache-Control",(0,m.getCacheControlHeader)(i.cacheControl)),await (0,h.sendResponse)(J,V,new Response(i.value.body,{headers:r,status:i.value.status||200}));return}catch(t){if(t instanceof y.NoFallbackError||await R.onRequestError(e,t,{routerKind:"App Router",routePath:x,routeType:"route",revalidateReason:(0,d.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:C})},!1,N),D)throw t;await (0,h.sendResponse)(J,V,new Response(null,{status:500}));return}finally{(()=>{if(!i)return;let e=t.statusCode;i.setAttributes({"http.status_code":e,"next.rsc":!1}),e&&e>=500&&(i.setStatus({code:r.SpanStatusCode.ERROR}),i.setAttribute("error.type",e.toString()));let a=j.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==u.BaseServerSpan.handleRequest)return console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=a.get("next.route")||x,s=`${G} ${n}`;i.setAttributes({"next.route":n,"http.route":n,"next.span_name":s}),i.updateName(s),o&&o!==i&&(o.setAttribute("http.route",n),o.updateName(s))})()}};if(F&&q)await z(q,void 0);else{let t=j.getActiveScopeSpan();await j.withPropagatedContext(e.headers,()=>j.trace(u.BaseServerSpan.handleRequest,{spanName:`${G} ${k}`,kind:r.SpanKind.SERVER,attributes:{"http.method":G,"http.target":e.url}},e=>z(e,t)),void 0,!F)}}e.s(["handler",0,T,"patchFetch",0,function(){return(0,n.patchFetch)({workAsyncStorage:k,workUnitAsyncStorage:E})},"routeModule",0,R,"serverHooks",0,b,"workAsyncStorage",0,k,"workUnitAsyncStorage",0,E])}];

//# sourceMappingURL=_09_qvve._.js.map