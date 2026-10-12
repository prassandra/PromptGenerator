(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18638,a=>{"use strict";var e=a.i(43476),n=a.i(932),t=a.i(80157),i=a.i(94233),r=a.i(71645);let s={concept:"",hook:"",character:"",storyline:"",storyboard:"",imagePrompt:"",videoPrompt:"",consistency:"",negative:"",voice:"",caption:""};function o(a){let{label:n,value:t,options:i,onChange:r}=a;return(0,e.jsxs)("div",{className:"space-y-2",children:[(0,e.jsx)("label",{className:"text-sm font-medium text-white/80",children:n}),(0,e.jsx)("select",{value:t,onChange:a=>r(a.target.value),className:"w-full rounded-xl border border-white/10 bg-[#11131a] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/40",children:i.map(l)})]})}function l(a){return(0,e.jsx)("option",{value:a,children:a},a)}function c(a){let{label:n,value:t,onChange:i,placeholder:r,textarea:s}=a;return(0,e.jsxs)("div",{className:"space-y-2",children:[(0,e.jsx)("label",{className:"text-sm font-medium text-white/80",children:n}),void 0!==s&&s?(0,e.jsx)("textarea",{value:t,onChange:a=>i(a.target.value),placeholder:r,rows:4,className:"w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-cyan-400/40 focus:bg-white/[0.06]"}):(0,e.jsx)("input",{value:t,onChange:a=>i(a.target.value),placeholder:r,className:"w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-cyan-400/40"})]})}async function m(a){try{await navigator.clipboard.writeText(a)}catch{console.error("Gagal menyalin teks.")}}a.s(["default",0,function(){let a,l,d,u,h,g,k,p,b,x,y,j,A,f,N,S,w,v,E,T,R,I,K,O,P,_,C,$,G,L,U,D,B,M,H,V,J,Y,F,W,z,Z,q,Q=(0,n.c)(82);Q[0]===Symbol.for("react.memo_cache_sentinel")?(a={title:"",idea:"",character:"",setting:"",genre:"Drama",tone:"Emosional",duration:"30 detik",scenes:"5",ratio:"9:16",language:"Bahasa Indonesia"},Q[0]=a):a=Q[0];let[X,aa]=(0,r.useState)(a),[ae,an]=(0,r.useState)(s),[at,ai]=(0,r.useState)(!1);Q[1]===Symbol.for("react.memo_cache_sentinel")?(l=(a,e)=>{aa(n=>({...n,[a]:e}))},Q[1]=l):l=Q[1];let ar=l;Q[2]!==X.character||Q[3]!==X.duration||Q[4]!==X.genre||Q[5]!==X.idea||Q[6]!==X.language||Q[7]!==X.ratio||Q[8]!==X.scenes||Q[9]!==X.setting||Q[10]!==X.title||Q[11]!==X.tone?(d=()=>{let a=X.title||"Kisah yang Tidak Akan Pernah Dilupakan",e=X.idea||"Seseorang menghadapi sebuah kejadian sederhana yang akhirnya mengubah hidupnya.",n=X.character||"Tokoh utama Indonesia dengan penampilan natural, ekspresif, dan mudah dipertahankan di setiap adegan.",t=X.setting||"Lingkungan Indonesia yang realistis dan sesuai dengan kebutuhan cerita.",i=Number(X.scenes),r=function(a,e,n,t){let i=[];for(let r=1;r<=a;r++){let s;s=1===r?`HOOK / PEMBUKA

Buka cerita dengan momen yang langsung menarik perhatian.

KARAKTER:
${e}

LOKASI:
${n}

CERITA:
${t}

Visual harus langsung membuat penonton penasaran dan ingin mengetahui apa yang terjadi selanjutnya.`:r===a?`ENDING / PAYOFF

Berikan penyelesaian cerita yang kuat dan memorable.

KARAKTER:
${e}

CERITA:
Tutup konflik dengan cara yang emosional, mengejutkan, atau bermakna sesuai tone cerita.

Visual ending harus terasa seperti payoff dari seluruh cerita.`:2===r?`AWAL KONFLIK

Perkenalkan masalah utama yang harus dihadapi karakter.

KARAKTER:
${e}

LOKASI:
${n}

CERITA:
Mulai dorong karakter masuk ke dalam konflik utama.`:3===r?`PERKEMBANGAN

Naikkan intensitas cerita.

KARAKTER:
${e}

CERITA:
Karakter mulai menghadapi konsekuensi dari masalah yang terjadi. Buat penonton semakin penasaran dengan hasil akhirnya.`:`MENUJU KLIMAKS

Bangun ketegangan dan arahkan cerita menuju titik paling penting.

KARAKTER:
${e}

CERITA:
Perlihatkan keputusan, perubahan, atau kejadian penting sebelum ending.`,i.push(`ADEGAN ${String(r).padStart(2,"0")}

${s}`)}return i.join("\n\n--------------------\n\n")}(i,n,t,e);an({concept:`KONSEP SHORT STORY

JUDUL:
${a}

IDE CERITA:
${e}

GENRE:
${X.genre}

TONE:
${X.tone}

DURASI:
${X.duration}

JUMLAH ADEGAN:
${i} adegan

RASIO:
${X.ratio}

BAHASA:
${X.language}`,hook:"HOOK\n\nBuat opening 2-3 detik yang langsung menarik perhatian.\n\nJangan memulai dengan penjelasan panjang.\n\nGunakan salah satu pendekatan:\n- Kejadian mengejutkan\n- Kalimat yang membuat penasaran\n- Konflik langsung\n- Visual yang tidak biasa\n- Pertanyaan yang membuat penonton ingin tahu jawabannya\n\nHOOK HARUS:\nSingkat, kuat, natural, dan membuat penonton ingin lanjut menonton.",character:`KARAKTER

TOKOH UTAMA:
${n}

ATURAN IDENTITAS:

Pertahankan karakter yang sama sepanjang seluruh cerita.

Wajah tetap sama.
Usia tampak tetap sama.
Bentuk tubuh tetap sama.
Rambut tetap sama.
Pakaian tetap sama kecuali memang ada perubahan dalam cerita.
Aksesori tetap sama.
Warna dan detail visual tetap sama.

Karakter harus terlihat seperti orang yang sama pada setiap adegan.`,storyline:`ALUR CERITA

JUDUL:
${a}

IDE DASAR:
${e}

GENRE:
${X.genre}

TONE:
${X.tone}

LOKASI:
${t}

STRUKTUR CERITA:

1. HOOK
Buka dengan kejadian yang menarik perhatian.

2. PENGENALAN
Perkenalkan karakter dan situasi secara singkat.

3. KONFLIK
Masukkan masalah yang harus dihadapi karakter.

4. PERKEMBANGAN
Naikkan emosi dan risiko.

5. KLIMAKS
Berikan momen paling kuat dalam cerita.

6. ENDING
Berikan penutup yang memorable.

Cerita harus singkat, mudah dipahami, emosional, dan memiliki alasan kuat agar penonton bertahan sampai akhir.`,storyboard:`STORYBOARD

TOTAL ADEGAN:
${i}

${r}

ATURAN STORYBOARD:

Setiap adegan harus melanjutkan adegan sebelumnya.

Pertahankan:
- Identitas karakter
- Wajah
- Rambut
- Pakaian
- Proporsi tubuh
- Lokasi
- Waktu
- Arah cahaya
- Tone warna
- Gaya visual

Setiap adegan harus memiliki tujuan dalam cerita dan tidak terasa seperti filler.`,imagePrompt:`PROMPT GAMBAR

Buat visual sinematik realistis untuk short story berjudul:

"${a}"

KARAKTER:
${n}

LOKASI:
${t}

CERITA:
${e}

GENRE:
${X.genre}

TONE:
${X.tone}

Buat frame visual berkualitas tinggi dengan:

- Komposisi sinematik
- Pencahayaan realistis
- Ekspresi wajah natural
- Detail kulit realistis
- Depth of field natural
- Environment detail
- Natural human anatomy
- Natural interaction
- Visual storytelling yang kuat

Rasio:
${X.ratio}

Pertahankan identitas karakter secara konsisten untuk seluruh adegan.`,videoPrompt:`PROMPT VIDEO GOOGLE FLOW

Buat video short story sinematik berdurasi ${X.duration} dengan ${i} adegan.

JUDUL:
${a}

KARAKTER:
${n}

LOKASI:
${t}

IDE CERITA:
${e}

GENRE:
${X.genre}

TONE:
${X.tone}

RASIO:
${X.ratio}

Setiap adegan harus terasa sebagai bagian dari cerita yang sama.

CHARACTER CONTINUITY:

Pertahankan wajah yang sama.
Pertahankan rambut yang sama.
Pertahankan pakaian yang sama.
Pertahankan proporsi tubuh yang sama.
Pertahankan usia tampak yang sama.
Pertahankan aksesori yang sama.

ENVIRONMENT CONTINUITY:

Pertahankan lokasi.
Pertahankan waktu.
Pertahankan arah pencahayaan.
Pertahankan atmosfer.
Pertahankan tone warna.

CAMERA:

Gunakan pergerakan kamera sinematik yang halus.

Hindari:
- Kamera bergetar
- Zoom mendadak
- Gerakan kamera acak
- Perubahan framing tanpa alasan
- Pergantian gaya visual

MOTION:

Gerakan manusia natural.
Ekspresi wajah natural.
Gerakan tangan natural.
Interaksi objek realistis.
Fisika lingkungan masuk akal.

STORYTELLING:

Setiap adegan harus memiliki tujuan naratif dan mendorong cerita menuju klimaks dan ending.`,consistency:`KUNCI KONSISTENSI

IDENTITAS KARAKTER:
${n}

LOKASI:
${t}

JUDUL:
${a}

RASIO:
${X.ratio}

ATURAN KONSISTENSI:

- Wajah karakter tetap sama
- Rambut tetap sama
- Usia tampak tetap sama
- Bentuk tubuh tetap sama
- Pakaian tetap sama
- Aksesori tetap sama
- Warna karakter tetap sama
- Lokasi tetap konsisten
- Waktu tetap konsisten
- Pencahayaan konsisten
- Tone warna konsisten
- Gaya visual konsisten
- Skala karakter konsisten
- Tidak ada redesign karakter
- Tidak ada perubahan wardrobe secara acak
- Tidak ada perubahan environment secara tiba-tiba

SEMUA ADEGAN HARUS TERASA BERASAL DARI SATU FILM YANG SAMA.`,negative:"PROMPT NEGATIF\n\nkualitas rendah,\ngambar buram,\nnoise berlebihan,\nwajah terdistorsi,\nwajah berbeda,\nkarakter berbeda,\nkarakter tidak konsisten,\npakaian berubah,\nrambut berubah,\nusia berubah,\nproporsi tubuh berubah,\nanatomi buruk,\ntangan rusak,\njari tambahan,\nanggota tubuh tambahan,\nkarakter ganda,\nobjek ganda,\nbackground berubah,\nlokasi tidak konsisten,\npencahayaan tidak konsisten,\nwarna berubah,\nflickering,\njitter,\ngerakan tidak natural,\nfisika tidak realistis,\nkamera bergetar,\nzoom berlebihan,\nkamera acak,\nmorphing,\nwarped face,\nwarped body,\nplastic skin,\ncartoon,\nartefak teks,\nwatermark,\nlogo,\nsubtitle acak,\nlip sync buruk,\nekspresi tidak natural.",voice:`VOICE OVER

BAHASA:
${X.language}

GAYA SUARA:

Natural
Conversational
Emosional
Hangat
Jelas
Tidak terlalu cepat

ATURAN DIALOG:

Setiap kalimat harus pendek.

Jangan membuat dialog terlalu panjang.

Dialog harus mudah diucapkan oleh AI voice.

Gunakan voice over untuk memperkuat storytelling, bukan menjelaskan semua hal yang sudah terlihat secara visual.

STRUKTUR:

HOOK:
Kalimat singkat yang membuat penasaran.

KONFLIK:
Kalimat pendek yang menjelaskan masalah.

KLIMAKS:
Kalimat yang meningkatkan emosi.

ENDING:
Kalimat terakhir yang memorable dan dapat memancing komentar.

Sesuaikan seluruh dialog dengan genre ${X.genre} dan tone ${X.tone}.`,caption:`CAPTION

${a}

${e}

Buat caption TikTok / Reels / Shorts yang:

- Singkat
- Natural
- Memiliki hook
- Membuat penasaran
- Tidak terlalu menjelaskan ending
- Mendorong komentar
- Memiliki CTA sederhana

Gunakan bahasa ${X.language}.

HASHTAG:

Buat 8-12 hashtag yang relevan dengan cerita, genre, target penonton Indonesia, dan konten short story.

#ShortStory
#CeritaPendek
#Storytelling
#CeritaViral
#KontenAI
#VideoAI
#Driacom`}),ai(!0)},Q[2]=X.character,Q[3]=X.duration,Q[4]=X.genre,Q[5]=X.idea,Q[6]=X.language,Q[7]=X.ratio,Q[8]=X.scenes,Q[9]=X.setting,Q[10]=X.title,Q[11]=X.tone,Q[12]=d):d=Q[12];let as=d;Q[13]===Symbol.for("react.memo_cache_sentinel")?(u=()=>{aa({title:"",idea:"",character:"",setting:"",genre:"Drama",tone:"Emosional",duration:"30 detik",scenes:"5",ratio:"9:16",language:"Bahasa Indonesia"}),an(s),ai(!1)},Q[13]=u):u=Q[13];let ao=u;Q[14]===Symbol.for("react.memo_cache_sentinel")?(h=a=>{let{title:n,icon:t,text:i}=a;return(0,e.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between border-b border-white/10 px-5 py-4",children:[(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("span",{className:"text-lg",children:t}),(0,e.jsx)("h3",{className:"font-semibold text-white",children:n})]}),(0,e.jsx)("button",{onClick:()=>m(i),className:"rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/60 transition hover:bg-white/10 hover:text-white",children:"Salin"})]}),(0,e.jsx)("pre",{className:"whitespace-pre-wrap px-5 py-5 font-sans text-sm leading-7 text-white/65",children:i})]})},Q[14]=h):h=Q[14];let al=h;return Q[15]===Symbol.for("react.memo_cache_sentinel")?(g=(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"mb-3 flex items-center gap-3",children:[(0,e.jsx)("span",{className:"rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xl",children:"📖"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/60",children:"Generator Driacom"}),(0,e.jsx)("h1",{className:"text-3xl font-bold tracking-tight",children:"Short Story"})]})]}),(0,e.jsx)("p",{className:"max-w-2xl text-sm leading-6 text-white/45",children:"Buat cerita pendek yang emosional dan engaging lengkap dengan hook, alur cerita, storyboard, prompt gambar, prompt video, voice over, dan caption."})]}),Q[15]=g):g=Q[15],Q[16]===Symbol.for("react.memo_cache_sentinel")?(k=(0,e.jsxs)("header",{className:"sticky top-0 z-40 mb-10 flex items-start justify-between gap-6 border-b border-white/[0.07] bg-[#08090d]/95 px-2 py-4 backdrop-blur-xl",children:[g,(0,e.jsxs)("div",{className:"flex w-full flex-wrap items-center justify-end gap-2 sm:w-auto",children:[(0,e.jsx)(i.default,{className:"w-full sm:w-auto"}),(0,e.jsx)(t.default,{compact:!0})]})]}),Q[16]=k):k=Q[16],Q[17]===Symbol.for("react.memo_cache_sentinel")?(p=(0,e.jsxs)("div",{className:"mb-6",children:[(0,e.jsx)("h2",{className:"text-lg font-semibold",children:"Pengaturan Cerita"}),(0,e.jsx)("p",{className:"mt-1 text-xs text-white/35",children:"Isi detail sederhana, lalu Driacom akan menyusun short story lengkap."})]}),Q[17]=p):p=Q[17],Q[18]===Symbol.for("react.memo_cache_sentinel")?(b=a=>ar("title",a),Q[18]=b):b=Q[18],Q[19]!==X.title?(x=(0,e.jsx)(c,{label:"Judul Cerita",value:X.title,onChange:b,placeholder:"Contoh: Hadiah Terakhir untuk Ibu"}),Q[19]=X.title,Q[20]=x):x=Q[20],Q[21]===Symbol.for("react.memo_cache_sentinel")?(y=a=>ar("idea",a),Q[21]=y):y=Q[21],Q[22]!==X.idea?(j=(0,e.jsx)(c,{label:"Ide Cerita",value:X.idea,onChange:y,placeholder:"Contoh: Seorang anak diam-diam bekerja untuk membeli hadiah ibunya...",textarea:!0}),Q[22]=X.idea,Q[23]=j):j=Q[23],Q[24]===Symbol.for("react.memo_cache_sentinel")?(A=a=>ar("character",a),Q[24]=A):A=Q[24],Q[25]!==X.character?(f=(0,e.jsx)(c,{label:"Karakter Utama",value:X.character,onChange:A,placeholder:"Contoh: Pria Indonesia usia 25 tahun...",textarea:!0}),Q[25]=X.character,Q[26]=f):f=Q[26],Q[27]===Symbol.for("react.memo_cache_sentinel")?(N=a=>ar("setting",a),Q[27]=N):N=Q[27],Q[28]!==X.setting?(S=(0,e.jsx)(c,{label:"Lokasi / Dunia Cerita",value:X.setting,onChange:N,placeholder:"Contoh: Rumah sederhana di sebuah desa...",textarea:!0}),Q[28]=X.setting,Q[29]=S):S=Q[29],Q[30]===Symbol.for("react.memo_cache_sentinel")?(w=a=>ar("genre",a),v=["Drama","Romantis","Inspiratif","Motivasi","Komedi","Misteri","Horor","Keluarga","Persahabatan","Sedih"],Q[30]=w,Q[31]=v):(w=Q[30],v=Q[31]),Q[32]!==X.genre?(E=(0,e.jsx)(o,{label:"Genre",value:X.genre,onChange:w,options:v}),Q[32]=X.genre,Q[33]=E):E=Q[33],Q[34]===Symbol.for("react.memo_cache_sentinel")?(T=a=>ar("tone",a),R=["Emosional","Mengharukan","Tegang","Hangat","Lucu","Misterius","Inspiratif","Menyentuh","Mengejutkan"],Q[34]=T,Q[35]=R):(T=Q[34],R=Q[35]),Q[36]!==X.tone?(I=(0,e.jsx)(o,{label:"Nuansa Cerita",value:X.tone,onChange:T,options:R}),Q[36]=X.tone,Q[37]=I):I=Q[37],Q[38]===Symbol.for("react.memo_cache_sentinel")?(K=a=>ar("duration",a),O=["15 detik","30 detik","45 detik","60 detik","90 detik"],Q[38]=K,Q[39]=O):(K=Q[38],O=Q[39]),Q[40]!==X.duration?(P=(0,e.jsx)(o,{label:"Durasi",value:X.duration,onChange:K,options:O}),Q[40]=X.duration,Q[41]=P):P=Q[41],Q[42]===Symbol.for("react.memo_cache_sentinel")?(_=a=>ar("scenes",a),C=["3","4","5","6","8","10"],Q[42]=_,Q[43]=C):(_=Q[42],C=Q[43]),Q[44]!==X.scenes?($=(0,e.jsx)(o,{label:"Jumlah Adegan",value:X.scenes,onChange:_,options:C}),Q[44]=X.scenes,Q[45]=$):$=Q[45],Q[46]!==P||Q[47]!==$?(G=(0,e.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[P,$]}),Q[46]=P,Q[47]=$,Q[48]=G):G=Q[48],Q[49]===Symbol.for("react.memo_cache_sentinel")?(L=a=>ar("ratio",a),U=["9:16","16:9","1:1"],Q[49]=L,Q[50]=U):(L=Q[49],U=Q[50]),Q[51]!==X.ratio?(D=(0,e.jsx)(o,{label:"Rasio Video",value:X.ratio,onChange:L,options:U}),Q[51]=X.ratio,Q[52]=D):D=Q[52],Q[53]===Symbol.for("react.memo_cache_sentinel")?(B=a=>ar("language",a),M=["Bahasa Indonesia","English"],Q[53]=B,Q[54]=M):(B=Q[53],M=Q[54]),Q[55]!==X.language?(H=(0,e.jsx)(o,{label:"Bahasa Output",value:X.language,onChange:B,options:M}),Q[55]=X.language,Q[56]=H):H=Q[56],Q[57]!==as?(V=(0,e.jsx)("button",{onClick:as,className:"flex-1 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 active:scale-[0.99]",children:"✦ Buat Cerita"}),Q[57]=as,Q[58]=V):V=Q[58],Q[59]===Symbol.for("react.memo_cache_sentinel")?(J=(0,e.jsx)("button",{onClick:ao,className:"rounded-xl border border-white/10 px-5 py-3.5 text-sm text-white/60 transition hover:bg-white/5 hover:text-white",children:"Atur Ulang"}),Q[59]=J):J=Q[59],Q[60]!==V?(Y=(0,e.jsxs)("div",{className:"flex gap-3 pt-2",children:[V,J]}),Q[60]=V,Q[61]=Y):Y=Q[61],Q[62]!==j||Q[63]!==f||Q[64]!==S||Q[65]!==E||Q[66]!==I||Q[67]!==G||Q[68]!==D||Q[69]!==H||Q[70]!==Y||Q[71]!==x?(F=(0,e.jsxs)("section",{className:"h-fit rounded-2xl border border-white/10 bg-white/[0.025] p-6",children:[p,(0,e.jsxs)("div",{className:"space-y-5",children:[x,j,f,S,E,I,G,D,H,Y]})]}),Q[62]=j,Q[63]=f,Q[64]=S,Q[65]=E,Q[66]=I,Q[67]=G,Q[68]=D,Q[69]=H,Q[70]=Y,Q[71]=x,Q[72]=F):F=Q[72],Q[73]!==at||Q[74]!==ae?(W=(0,e.jsx)("section",{children:at?(0,e.jsxs)("div",{className:"space-y-4",children:[(0,e.jsxs)("div",{className:"mb-6 flex items-end justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"text-xs uppercase tracking-[0.2em] text-white/30",children:"Hasil Generasi"}),(0,e.jsx)("h2",{className:"mt-1 text-2xl font-bold",children:"Paket Short Story"})]}),(0,e.jsx)("button",{onClick:()=>m(Object.values(ae).filter(Boolean).join("\n\n--------------------\n\n")),className:"rounded-xl border border-white/10 px-4 py-2 text-xs text-white/60 transition hover:bg-white/10 hover:text-white",children:"Salin Semua"})]}),(0,e.jsx)(al,{title:"Konsep Short Story",icon:"💡",text:ae.concept}),(0,e.jsx)(al,{title:"Hook",icon:"🪝",text:ae.hook}),(0,e.jsx)(al,{title:"Karakter",icon:"👤",text:ae.character}),(0,e.jsx)(al,{title:"Alur Cerita",icon:"📖",text:ae.storyline}),(0,e.jsx)(al,{title:"Storyboard",icon:"🎬",text:ae.storyboard}),(0,e.jsx)(al,{title:"Prompt Gambar",icon:"🖼️",text:ae.imagePrompt}),(0,e.jsx)(al,{title:"Prompt Video Google Flow",icon:"🎥",text:ae.videoPrompt}),(0,e.jsx)(al,{title:"Kunci Konsistensi",icon:"🔒",text:ae.consistency}),(0,e.jsx)(al,{title:"Prompt Negatif",icon:"🚫",text:ae.negative}),(0,e.jsx)(al,{title:"Voice Over",icon:"🎙️",text:ae.voice}),(0,e.jsx)(al,{title:"Caption",icon:"📝",text:ae.caption})]}):(0,e.jsx)("div",{className:"flex min-h-[620px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.015]",children:(0,e.jsxs)("div",{className:"max-w-sm px-6 text-center",children:[(0,e.jsx)("div",{className:"mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl",children:"📖"}),(0,e.jsx)("h2",{className:"text-lg font-semibold",children:"Siap membuat cerita?"}),(0,e.jsx)("p",{className:"mt-2 text-sm leading-6 text-white/35",children:"Masukkan ide cerita di sebelah kiri, lalu tekan Buat Cerita untuk menghasilkan paket short story."})]})})}),Q[73]=at,Q[74]=ae,Q[75]=W):W=Q[75],Q[76]!==F||Q[77]!==W?(z=(0,e.jsxs)("div",{className:"grid gap-8 lg:grid-cols-[420px_1fr]",children:[F,W]}),Q[76]=F,Q[77]=W,Q[78]=z):z=Q[78],Q[79]===Symbol.for("react.memo_cache_sentinel")?(Z=(0,e.jsx)("footer",{className:"mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/25",children:"Driacom AI Prompt Studio · Short Story"}),Q[79]=Z):Z=Q[79],Q[80]!==z?(q=(0,e.jsx)("main",{className:"min-h-screen bg-[#08090d] text-white",children:(0,e.jsxs)("div",{className:"mx-auto max-w-7xl px-5 py-8 md:px-8",children:[k,z,Z]})}),Q[80]=z,Q[81]=q):q=Q[81],q}])},80157,a=>{"use strict";var e=a.i(43476),n=a.i(932),t=a.i(71645),i=a.i(18071);a.s(["default",0,function(a){let r,s,o,l,c,m,d,u,h,g,k=(0,n.c)(16),{compact:p}=a,[b,x]=(0,t.useState)("id");k[0]===Symbol.for("react.memo_cache_sentinel")?(r=()=>{let a=localStorage.getItem(i.LANGUAGE_STORAGE_KEY);("id"===a||"en"===a)&&x(a)},s=[],k[0]=r,k[1]=s):(r=k[0],s=k[1]),(0,t.useEffect)(r,s),k[2]===Symbol.for("react.memo_cache_sentinel")?(o=function(a){x(a),localStorage.setItem(i.LANGUAGE_STORAGE_KEY,a),document.documentElement.lang=a,window.dispatchEvent(new CustomEvent("driacom-language-change",{detail:a}))},k[2]=o):o=k[2];let y=o,j=`flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-[#090e16]/95 px-3 py-2 text-xs font-bold text-zinc-300 backdrop-blur-xl ${void 0!==p&&p?"":"shadow-[0_12px_35px_rgba(0,0,0,0.2)]"}`;k[3]===Symbol.for("react.memo_cache_sentinel")?(l=(0,e.jsx)("span",{children:"🌐"}),k[3]=l):l=k[3];let A="id"===b?"Pilih Bahasa":"Choose Language";k[4]!==A?(c=(0,e.jsx)("span",{className:"hidden md:inline",children:A}),k[4]=A,k[5]=c):c=k[5],k[6]===Symbol.for("react.memo_cache_sentinel")?(m=a=>y(a.target.value),k[6]=m):m=k[6];let f="id"===b?"Pilih bahasa":"Choose language";return k[7]===Symbol.for("react.memo_cache_sentinel")?(d=(0,e.jsx)("option",{value:"id",className:"bg-[#090e16]",children:"🇮🇩 Indonesia"}),u=(0,e.jsx)("option",{value:"en",className:"bg-[#090e16]",children:"🇬🇧 English"}),k[7]=d,k[8]=u):(d=k[7],u=k[8]),k[9]!==b||k[10]!==f?(h=(0,e.jsxs)("select",{value:b,onChange:m,className:"cursor-pointer bg-transparent text-xs font-black text-white outline-none","aria-label":f,children:[d,u]}),k[9]=b,k[10]=f,k[11]=h):h=k[11],k[12]!==h||k[13]!==j||k[14]!==c?(g=(0,e.jsxs)("label",{className:j,children:[l,c,h]}),k[12]=h,k[13]=j,k[14]=c,k[15]=g):g=k[15],g}])},94233,a=>{"use strict";var e=a.i(43476),n=a.i(932),t=a.i(71645);function i(){}function r(a){return a.ok?a.json():null}a.s(["default",0,function(a){let s,o,l,c,m,d,u,h=(0,n.c)(11),{className:g}=a,[k,p]=(0,t.useState)(null);h[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>{let a=a=>{let e=a.detail;"number"==typeof e&&p(e)},e=window.__driacomPageviewCount;return"number"==typeof e&&p(e),window.addEventListener("driacom-pageview-count",a),fetch("/api/pageview",{cache:"no-store"}).then(r).then(a=>{"number"==typeof a?.count&&p(a.count)}).catch(i),()=>window.removeEventListener("driacom-pageview-count",a)},o=[],h[0]=s,h[1]=o):(s=h[0],o=h[1]),(0,t.useEffect)(s,o);let b=`inline-flex min-w-0 items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs font-semibold text-zinc-400 sm:w-auto sm:border-transparent sm:bg-transparent sm:px-0 sm:py-0 ${void 0===g?"":g}`;return h[2]===Symbol.for("react.memo_cache_sentinel")?(l=(0,e.jsx)("span",{"aria-hidden":"true",className:"shrink-0 text-base leading-none",children:"👁"}),c=(0,e.jsx)("span",{className:"whitespace-nowrap",children:"Pengunjung Hari Ini"}),h[2]=l,h[3]=c):(l=h[2],c=h[3]),h[4]!==k?(m=null===k?"…":k.toLocaleString("id-ID"),h[4]=k,h[5]=m):m=h[5],h[6]!==m?(d=(0,e.jsx)("strong",{className:"min-w-[1.5rem] text-right text-sm font-black text-zinc-100",children:m}),h[6]=m,h[7]=d):d=h[7],h[8]!==b||h[9]!==d?(u=(0,e.jsxs)("div",{className:b,title:"Page views hari ini",children:[l,c,d]}),h[8]=b,h[9]=d,h[10]=u):u=h[10],u}])}]);