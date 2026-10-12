module.exports=[15761,e=>{"use strict";var a=e.i(89171),t=e.i(34731),n=e.i(93421),i=e.i(88713);let r=(0,n.getMenuAIConfig)("animation"),s=process.env.GEMINI_IDEA_MODEL||i.DEFAULT_GEMINI_TEXT_MODEL,o={type:"object",properties:{ideas:{type:"array",items:{type:"object",properties:{title:{type:"string"},concept:{type:"string"},hook:{type:"string"},storyBlueprint:{type:"object",properties:{premise:{type:"string"},protagonistGoal:{type:"string"},centralConflict:{type:"string"},stakes:{type:"string"},turningPoint:{type:"string"},climax:{type:"string"},payoff:{type:"string"},ending:{type:"string"},visualOpportunities:{type:"array",items:{type:"string"}},emotionalArc:{type:"array",items:{type:"string"}}},required:["premise","protagonistGoal","centralConflict","stakes","turningPoint","climax","payoff","ending","visualOpportunities","emotionalArc"]}},required:["title","concept","hook","storyBlueprint"]}}},required:["ideas"]};function u(e){return String(e??"").trim()}async function l(e){try{let n=r.apiKey;if(!n)return a.NextResponse.json({success:!1,error:"Konfigurasi AI Animation belum diset di .env.local"},{status:500});let l=await e.json(),p=u(l.keyword),d=u(l.genre)||"Petualangan",c=u(l.animationStyle)||"Pixar Inspired 3D",m=u(l.language)||"Bahasa Indonesia",k=`
Kamu adalah AI Idea Director dari "Driacom - Prompt AI Generator".

Buat tepat 3 pilihan ide konten berdasarkan kata kunci user dan JENIS KONTEN.
JENIS KONTEN bukan sekadar genre cerita; ini menentukan format produksi.

KATA KUNCI / ARAH AWAL USER:
${p||"(Tidak ada. Buat ide dari Jenis Konten yang dipilih.)"}

GENRE / JENIS KONTEN:
${d}

GAYA VISUAL:
${c}

BAHASA:
${m}

ATURAN:
- Jika KATA KUNCI kosong, jangan meminta user mengisi ide terlebih dahulu. Langsung buat 3 ide yang paling relevan dengan JENIS KONTEN.
- Ketiga ide harus benar-benar berbeda dalam konflik, arah cerita, atau kejadian utama.
- Jangan sekadar mengganti nama karakter.
- Setiap ide harus punya hook kuat sejak awal.
- Setiap ide harus punya tujuan, konflik, dan payoff/progression yang jelas.
- Sesuaikan ide dengan JENIS KONTEN:
  * ASMR: fokus visual satisfying, material, tekstur, gerakan mikro, ambience/sound.
  * Objek Bicara: objek menjadi karakter utama yang jelas dan dialognya natural.
  * Fakta Unik: fokus fakta menarik, hook cepat, visualisasi fakta, dan payoff edukatif.
  * Edukasi Visual: fokus penjelasan yang mudah divisualisasikan.
  * Konten Hewan: fokus perilaku/aksi hewan yang menarik dan tetap mudah divisualisasikan.
  * What If: fokus premis hipotetis dan perubahan dunia yang terlihat.
  * Eksperimen & Sains: fokus fenomena, proses, sebab-akibat, dan visual yang masuk akal.
  * Miniatur: fokus dunia miniatur, detail skala, material, dan perspektif.
  * Petualangan: fokus eksplorasi, tujuan perjalanan, rintangan, penemuan, aksi, dan payoff.
- Ide harus mudah dikembangkan menjadi beberapa scene pendek.
- Setiap scene nantinya harus memungkinkan causal beat lengkap:
  START STATE -> TRIGGER -> INTENTION -> ACTION -> REACTION -> ESCALATION -> PAYOFF -> END STATE.
- Ide harus memiliki satu konflik utama yang bisa berkembang secara visual.
- Setiap ide harus memiliki minimal satu "turning point" yang mengubah arah cerita.
- Hook harus menciptakan pertanyaan atau rasa penasaran yang ingin dijawab penonton.
- Karakter harus memiliki tujuan yang bisa terlihat melalui tindakan.
- Konsekuensi dari tindakan karakter harus dapat divisualisasikan.
- Karakter dan situasi harus mudah divisualisasikan.
- Hindari cerita generik, filler, moralizing berlebihan, dan kejadian yang tidak memiliki sebab-akibat.
- Jangan membuat image prompt atau video prompt.
- Jangan menulis markdown atau penjelasan di luar JSON.
- Gunakan ${m}.

Setiap concept cukup 2-4 kalimat dan harus langsung bisa dipakai sebagai konsep generator animasi.

Untuk SETIAP ide, buat STORY BLUEPRINT tersembunyi yang cukup kuat untuk menjadi otak alur produksi.
Blueprint wajib konkret, bukan template kosong, dan harus selaras dengan genre serta konsep.
- premise: inti cerita dalam 1 kalimat.
- protagonistGoal: tujuan karakter yang bisa terlihat melalui tindakan.
- centralConflict: konflik utama yang terus berkembang.
- stakes: apa yang bisa hilang/gagal jika karakter tidak berhasil.
- turningPoint: kejadian yang mengubah arah cerita.
- climax: keputusan/konfrontasi terbesar.
- payoff: konsekuensi yang memuaskan dari setup sebelumnya.
- ending: keadaan akhir yang jelas dan earned.
- visualOpportunities: 4-8 peluang visual yang benar-benar muncul dari cerita, bukan daftar kamera generik.
- emotionalArc: 4-8 tahap perubahan emosi dari awal sampai akhir.

Jangan memaksakan jumlah beat berdasarkan nomor scene. Blueprint harus dapat diadaptasi secara dinamis untuk 2-10 scene.
Kamera nantinya akan memilih bahasa visual berdasarkan blueprint ini; jangan menulis camera preset di blueprint.
`.trim(),g=new t.GoogleGenAI({apiKey:n}),{response:h,model:y}=await (0,i.generateWithGeminiResilient)({apiKey:n,requestedModel:s,fallbackModel:i.DEFAULT_GEMINI_TEXT_MODEL,requestedMaxOutputTokens:12e3,maxRetries:3,generate:async(e,a)=>g.models.generateContent({model:e,contents:k,config:{responseMimeType:"application/json",responseSchema:o,...e.startsWith("gemini-3.")?{}:{temperature:.9},maxOutputTokens:a}})}),f=u(h.text);if(!f)throw Error("Gemini tidak mengembalikan pilihan ide.");let b=(JSON.parse(f).ideas??[]).filter(e=>u(e.title)&&u(e.concept)).slice(0,3).map(e=>({title:u(e.title),concept:u(e.concept),hook:u(e.hook),storyBlueprint:e.storyBlueprint&&"object"==typeof e.storyBlueprint?{premise:u(e.storyBlueprint.premise),protagonistGoal:u(e.storyBlueprint.protagonistGoal),centralConflict:u(e.storyBlueprint.centralConflict),stakes:u(e.storyBlueprint.stakes),turningPoint:u(e.storyBlueprint.turningPoint),climax:u(e.storyBlueprint.climax),payoff:u(e.storyBlueprint.payoff),ending:u(e.storyBlueprint.ending),visualOpportunities:Array.isArray(e.storyBlueprint.visualOpportunities)?e.storyBlueprint.visualOpportunities.map(u).filter(Boolean).slice(0,8):[],emotionalArc:Array.isArray(e.storyBlueprint.emotionalArc)?e.storyBlueprint.emotionalArc.map(u).filter(Boolean).slice(0,8):[]}:void 0}));if(!b.length)throw Error("Driacom belum mendapatkan pilihan ide. Coba kata kunci lain.");return a.NextResponse.json({success:!0,ideas:b,model:y})}catch(e){return console.error("Driacom AI Idea API Error:",e),a.NextResponse.json({success:!1,error:(0,i.getDriacomPublicErrorMessage)(e)},{status:500})}}e.s(["POST",0,l])},68446,e=>{"use strict";var a=e.i(47909),t=e.i(74017),n=e.i(96250),i=e.i(59756),r=e.i(61916),s=e.i(74677),o=e.i(69741),u=e.i(16795),l=e.i(87718),p=e.i(95169),d=e.i(47587),c=e.i(66012),m=e.i(70101),k=e.i(26937),g=e.i(10372),h=e.i(93695);e.i(52474);var y=e.i(5232);let f=new a.AppRouteRouteModule({definition:{kind:t.RouteKind.APP_ROUTE,page:"/api/animation-ideas/route",pathname:"/api/animation-ideas",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/animation-ideas/route.ts",nextConfigOutput:"standalone",userland:()=>e.r(15761),...{}}),{workAsyncStorage:b,workUnitAsyncStorage:E,serverHooks:R}=f;async function A(e,a,n){n.requestMeta&&(0,i.setRequestMeta)(e,n.requestMeta),f.isDev&&(0,i.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let b="/api/animation-ideas/route";b=b.replace(/\/index$/,"")||"/";let E=await f.prepare(e,a,{srcPage:b,multiZoneDraftMode:!1});if(!E)return a.statusCode=400,a.end("Bad Request"),null==n.waitUntil||n.waitUntil.call(n,Promise.resolve()),null;let{buildId:R,deploymentId:A,params:v,nextConfig:T,parsedUrl:N,isDraftMode:I,prerenderManifest:S,routerServerContext:C,isOnDemandRevalidate:w,revalidateOnlyGenerated:x,resolvedPathname:O,clientReferenceManifest:j,serverActionsManifest:P}=E,B=(0,o.normalizeAppPath)(b),M=!!(S.dynamicRoutes[B]||S.routes[O]),_=async()=>((null==C?void 0:C.render404)?await C.render404(e,a,N,!1):a.end("This page could not be found"),null);if(M&&!I){let e=!!S.routes[O],a=S.dynamicRoutes[B];if(a&&!1===a.fallback&&!e){if(T.adapterPath)return await _();throw new h.NoFallbackError}}let K=null;!M||f.isDev||I||(K="/index"===(K=O)?"/":K);let D=!0===f.isDev||!M,U=M&&!D;P&&j&&(0,s.setManifestsSingleton)({page:b,clientReferenceManifest:j,serverActionsManifest:P});let q=e.method||"GET",H=(0,r.getTracer)(),G=H.getActiveScopeSpan(),L=!!(null==C?void 0:C.isWrappedByNextServer),F=!!(0,i.getRequestMeta)(e,"minimalMode"),J=(0,i.getRequestMeta)(e,"incrementalCache")||await f.getIncrementalCache(e,T,S,F);null==J||J.resetRequestCache(),globalThis.__incrementalCache=J;let $={params:v,previewProps:S.preview,renderOpts:{experimental:{authInterrupts:!!T.experimental.authInterrupts,useCacheTimeout:T.experimental.useCacheTimeout},cacheComponents:!!T.cacheComponents,validationLevel:T.experimental.instantInsights.validationLevel,supportsDynamicResponse:D,incrementalCache:J,hmrRefreshHash:(0,i.getRequestMeta)(e,"hmrRefreshHash"),cacheLifeProfiles:T.cacheLife,staticPageGenerationTimeout:T.staticPageGenerationTimeout,waitUntil:n.waitUntil,onClose:e=>{a.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(a,t,n,i)=>f.onRequestError(e,a,n,i,C)},sharedContext:{buildId:R,deploymentId:A}},W=new u.NodeNextRequest(e),V=new u.NodeNextResponse(a),X=l.NextRequestAdapter.fromNodeNextRequest(W,(0,l.signalFromNodeResponse)(a)),Y=async({previousCacheEntry:t})=>{try{if(!F&&w&&x&&!t)return a.statusCode=404,a.setHeader("x-nextjs-cache","REVALIDATED"),a.end("This page could not be found"),null;let i=await f.handle(X,$);e.fetchMetrics=$.renderOpts.fetchMetrics;let r=$.renderOpts.pendingWaitUntil;r&&n.waitUntil&&(n.waitUntil(r),r=void 0);let s=$.renderOpts.collectedTags;if(!M)return await (0,c.sendResponse)(W,V,i,r),null;{let e=await i.blob(),a=(0,m.toNodeOutgoingHttpHeaders)(i.headers);s&&(a[g.NEXT_CACHE_TAGS_HEADER]=s),!a["content-type"]&&e.type&&(a["content-type"]=e.type);let t=void 0!==$.renderOpts.collectedRevalidate&&!($.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&$.renderOpts.collectedRevalidate,n=void 0===$.renderOpts.collectedExpire||$.renderOpts.collectedExpire>=g.INFINITE_CACHE?!1!==t&&t>0?T.expireTime:void 0:$.renderOpts.collectedExpire;return{value:{kind:y.CachedRouteKind.APP_ROUTE,status:i.status,body:Buffer.from(await e.arrayBuffer()),headers:a},cacheControl:{revalidate:t,expire:n}}}}catch(a){throw(null==t?void 0:t.isStale)&&await f.onRequestError(e,a,{routerKind:"App Router",routePath:b,routeType:"route",revalidateReason:(0,d.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:w})},!1,C),a}},z=async(i,s)=>{try{var o,u;let i=await f.handleResponse({req:e,nextConfig:T,cacheKey:K,routeKind:t.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:S,isRoutePPREnabled:!1,isOnDemandRevalidate:w,revalidateOnlyGenerated:x,responseGenerator:Y,waitUntil:n.waitUntil,isMinimalMode:F});if(!M)return;if((null==i||null==(o=i.value)?void 0:o.kind)!==y.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==i||null==(u=i.value)?void 0:u.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});F||a.setHeader("x-nextjs-cache",w?"REVALIDATED":i.isMiss?"MISS":i.isStale?"STALE":"HIT"),I&&a.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let r=(0,m.fromNodeOutgoingHttpHeaders)(i.value.headers);F&&M||r.delete(g.NEXT_CACHE_TAGS_HEADER),!i.cacheControl||a.getHeader("Cache-Control")||r.get("Cache-Control")||r.set("Cache-Control",(0,k.getCacheControlHeader)(i.cacheControl)),await (0,c.sendResponse)(W,V,new Response(i.value.body,{headers:r,status:i.value.status||200}));return}catch(a){if(a instanceof h.NoFallbackError||await f.onRequestError(e,a,{routerKind:"App Router",routePath:B,routeType:"route",revalidateReason:(0,d.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:w})},!1,C),M)throw a;await (0,c.sendResponse)(W,V,new Response(null,{status:500}));return}finally{(()=>{if(!i)return;let e=a.statusCode;i.setAttributes({"http.status_code":e,"next.rsc":!1}),e&&e>=500&&(i.setStatus({code:r.SpanStatusCode.ERROR}),i.setAttribute("error.type",e.toString()));let t=H.getRootSpanAttributes();if(!t)return;if(t.get("next.span_type")!==p.BaseServerSpan.handleRequest)return console.warn(`Unexpected root span type '${t.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=t.get("next.route")||B,o=`${q} ${n}`;i.setAttributes({"next.route":n,"http.route":n,"next.span_name":o}),i.updateName(o),s&&s!==i&&(s.setAttribute("http.route",n),s.updateName(o))})()}};if(L&&G)await z(G,void 0);else{let a=H.getActiveScopeSpan();await H.withPropagatedContext(e.headers,()=>H.trace(p.BaseServerSpan.handleRequest,{spanName:`${q} ${b}`,kind:r.SpanKind.SERVER,attributes:{"http.method":q,"http.target":e.url}},e=>z(e,a)),void 0,!L)}}e.s(["handler",0,A,"patchFetch",0,function(){return(0,n.patchFetch)({workAsyncStorage:b,workUnitAsyncStorage:E})},"routeModule",0,f,"serverHooks",0,R,"workAsyncStorage",0,b,"workUnitAsyncStorage",0,E])}];

//# sourceMappingURL=_03_vcaa._.js.map