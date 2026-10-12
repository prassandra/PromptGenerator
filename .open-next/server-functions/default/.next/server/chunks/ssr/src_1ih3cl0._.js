module.exports=[15671,a=>{"use strict";var b=a.i(87924),c=a.i(45936),d=a.i(62419),e=a.i(72131);let f={concept:"",hook:"",character:"",storyline:"",storyboard:"",imagePrompt:"",videoPrompt:"",consistency:"",negative:"",voice:"",caption:""};a.s(["default",0,function(){let[a,g]=(0,e.useState)({title:"",idea:"",character:"",setting:"",genre:"Drama",tone:"Emosional",duration:"30 detik",scenes:"5",ratio:"9:16",language:"Bahasa Indonesia"}),[h,i]=(0,e.useState)(f),[j,k]=(0,e.useState)(!1),l=(a,b)=>{g(c=>({...c,[a]:b}))},m=async a=>{try{await navigator.clipboard.writeText(a)}catch{console.error("Gagal menyalin teks.")}},n=({label:a,value:c,onChange:d,placeholder:e,textarea:f=!1})=>(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("label",{className:"text-sm font-medium text-white/80",children:a}),f?(0,b.jsx)("textarea",{value:c,onChange:a=>d(a.target.value),placeholder:e,rows:4,className:"w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-cyan-400/40 focus:bg-white/[0.06]"}):(0,b.jsx)("input",{value:c,onChange:a=>d(a.target.value),placeholder:e,className:"w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-cyan-400/40"})]}),o=({label:a,value:c,options:d,onChange:e})=>(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("label",{className:"text-sm font-medium text-white/80",children:a}),(0,b.jsx)("select",{value:c,onChange:a=>e(a.target.value),className:"w-full rounded-xl border border-white/10 bg-[#11131a] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/40",children:d.map(a=>(0,b.jsx)("option",{value:a,children:a},a))})]}),p=({title:a,icon:c,text:d})=>(0,b.jsxs)("div",{className:"overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between border-b border-white/10 px-5 py-4",children:[(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsx)("span",{className:"text-lg",children:c}),(0,b.jsx)("h3",{className:"font-semibold text-white",children:a})]}),(0,b.jsx)("button",{onClick:()=>m(d),className:"rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/60 transition hover:bg-white/10 hover:text-white",children:"Salin"})]}),(0,b.jsx)("pre",{className:"whitespace-pre-wrap px-5 py-5 font-sans text-sm leading-7 text-white/65",children:d})]});return(0,b.jsx)("main",{className:"min-h-screen bg-[#08090d] text-white",children:(0,b.jsxs)("div",{className:"mx-auto max-w-7xl px-5 py-8 md:px-8",children:[(0,b.jsxs)("header",{className:"sticky top-0 z-40 mb-10 flex items-start justify-between gap-6 border-b border-white/[0.07] bg-[#08090d]/95 px-2 py-4 backdrop-blur-xl",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"mb-3 flex items-center gap-3",children:[(0,b.jsx)("span",{className:"rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xl",children:"📖"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/60",children:"Generator Driacom"}),(0,b.jsx)("h1",{className:"text-3xl font-bold tracking-tight",children:"Short Story"})]})]}),(0,b.jsx)("p",{className:"max-w-2xl text-sm leading-6 text-white/45",children:"Buat cerita pendek yang emosional dan engaging lengkap dengan hook, alur cerita, storyboard, prompt gambar, prompt video, voice over, dan caption."})]}),(0,b.jsxs)("div",{className:"flex w-full flex-wrap items-center justify-end gap-2 sm:w-auto",children:[(0,b.jsx)(d.default,{className:"w-full sm:w-auto"}),(0,b.jsx)(c.default,{compact:!0})]})]}),(0,b.jsxs)("div",{className:"grid gap-8 lg:grid-cols-[420px_1fr]",children:[(0,b.jsxs)("section",{className:"h-fit rounded-2xl border border-white/10 bg-white/[0.025] p-6",children:[(0,b.jsxs)("div",{className:"mb-6",children:[(0,b.jsx)("h2",{className:"text-lg font-semibold",children:"Pengaturan Cerita"}),(0,b.jsx)("p",{className:"mt-1 text-xs text-white/35",children:"Isi detail sederhana, lalu Driacom akan menyusun short story lengkap."})]}),(0,b.jsxs)("div",{className:"space-y-5",children:[(0,b.jsx)(n,{label:"Judul Cerita",value:a.title,onChange:a=>l("title",a),placeholder:"Contoh: Hadiah Terakhir untuk Ibu"}),(0,b.jsx)(n,{label:"Ide Cerita",value:a.idea,onChange:a=>l("idea",a),placeholder:"Contoh: Seorang anak diam-diam bekerja untuk membeli hadiah ibunya...",textarea:!0}),(0,b.jsx)(n,{label:"Karakter Utama",value:a.character,onChange:a=>l("character",a),placeholder:"Contoh: Pria Indonesia usia 25 tahun...",textarea:!0}),(0,b.jsx)(n,{label:"Lokasi / Dunia Cerita",value:a.setting,onChange:a=>l("setting",a),placeholder:"Contoh: Rumah sederhana di sebuah desa...",textarea:!0}),(0,b.jsx)(o,{label:"Genre",value:a.genre,onChange:a=>l("genre",a),options:["Drama","Romantis","Inspiratif","Motivasi","Komedi","Misteri","Horor","Keluarga","Persahabatan","Sedih"]}),(0,b.jsx)(o,{label:"Nuansa Cerita",value:a.tone,onChange:a=>l("tone",a),options:["Emosional","Mengharukan","Tegang","Hangat","Lucu","Misterius","Inspiratif","Menyentuh","Mengejutkan"]}),(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,b.jsx)(o,{label:"Durasi",value:a.duration,onChange:a=>l("duration",a),options:["15 detik","30 detik","45 detik","60 detik","90 detik"]}),(0,b.jsx)(o,{label:"Jumlah Adegan",value:a.scenes,onChange:a=>l("scenes",a),options:["3","4","5","6","8","10"]})]}),(0,b.jsx)(o,{label:"Rasio Video",value:a.ratio,onChange:a=>l("ratio",a),options:["9:16","16:9","1:1"]}),(0,b.jsx)(o,{label:"Bahasa Output",value:a.language,onChange:a=>l("language",a),options:["Bahasa Indonesia","English"]}),(0,b.jsxs)("div",{className:"flex gap-3 pt-2",children:[(0,b.jsx)("button",{onClick:()=>{let b=a.title||"Kisah yang Tidak Akan Pernah Dilupakan",c=a.idea||"Seseorang menghadapi sebuah kejadian sederhana yang akhirnya mengubah hidupnya.",d=a.character||"Tokoh utama Indonesia dengan penampilan natural, ekspresif, dan mudah dipertahankan di setiap adegan.",e=a.setting||"Lingkungan Indonesia yang realistis dan sesuai dengan kebutuhan cerita.",f=Number(a.scenes),g=((a,b,c,d)=>{let e=[];for(let f=1;f<=a;f++){let g="";g=1===f?`HOOK / PEMBUKA

Buka cerita dengan momen yang langsung menarik perhatian.

KARAKTER:
${b}

LOKASI:
${c}

CERITA:
${d}

Visual harus langsung membuat penonton penasaran dan ingin mengetahui apa yang terjadi selanjutnya.`:f===a?`ENDING / PAYOFF

Berikan penyelesaian cerita yang kuat dan memorable.

KARAKTER:
${b}

CERITA:
Tutup konflik dengan cara yang emosional, mengejutkan, atau bermakna sesuai tone cerita.

Visual ending harus terasa seperti payoff dari seluruh cerita.`:2===f?`AWAL KONFLIK

Perkenalkan masalah utama yang harus dihadapi karakter.

KARAKTER:
${b}

LOKASI:
${c}

CERITA:
Mulai dorong karakter masuk ke dalam konflik utama.`:3===f?`PERKEMBANGAN

Naikkan intensitas cerita.

KARAKTER:
${b}

CERITA:
Karakter mulai menghadapi konsekuensi dari masalah yang terjadi. Buat penonton semakin penasaran dengan hasil akhirnya.`:`MENUJU KLIMAKS

Bangun ketegangan dan arahkan cerita menuju titik paling penting.

KARAKTER:
${b}

CERITA:
Perlihatkan keputusan, perubahan, atau kejadian penting sebelum ending.`,e.push(`ADEGAN ${String(f).padStart(2,"0")}

${g}`)}return e.join("\n\n--------------------\n\n")})(f,d,e,c);i({concept:`KONSEP SHORT STORY

JUDUL:
${b}

IDE CERITA:
${c}

GENRE:
${a.genre}

TONE:
${a.tone}

DURASI:
${a.duration}

JUMLAH ADEGAN:
${f} adegan

RASIO:
${a.ratio}

BAHASA:
${a.language}`,hook:`HOOK

Buat opening 2-3 detik yang langsung menarik perhatian.

Jangan memulai dengan penjelasan panjang.

Gunakan salah satu pendekatan:
- Kejadian mengejutkan
- Kalimat yang membuat penasaran
- Konflik langsung
- Visual yang tidak biasa
- Pertanyaan yang membuat penonton ingin tahu jawabannya

HOOK HARUS:
Singkat, kuat, natural, dan membuat penonton ingin lanjut menonton.`,character:`KARAKTER

TOKOH UTAMA:
${d}

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
${b}

IDE DASAR:
${c}

GENRE:
${a.genre}

TONE:
${a.tone}

LOKASI:
${e}

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
${f}

${g}

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

"${b}"

KARAKTER:
${d}

LOKASI:
${e}

CERITA:
${c}

GENRE:
${a.genre}

TONE:
${a.tone}

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
${a.ratio}

Pertahankan identitas karakter secara konsisten untuk seluruh adegan.`,videoPrompt:`PROMPT VIDEO GOOGLE FLOW

Buat video short story sinematik berdurasi ${a.duration} dengan ${f} adegan.

JUDUL:
${b}

KARAKTER:
${d}

LOKASI:
${e}

IDE CERITA:
${c}

GENRE:
${a.genre}

TONE:
${a.tone}

RASIO:
${a.ratio}

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
${d}

LOKASI:
${e}

JUDUL:
${b}

RASIO:
${a.ratio}

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

SEMUA ADEGAN HARUS TERASA BERASAL DARI SATU FILM YANG SAMA.`,negative:`PROMPT NEGATIF

kualitas rendah,
gambar buram,
noise berlebihan,
wajah terdistorsi,
wajah berbeda,
karakter berbeda,
karakter tidak konsisten,
pakaian berubah,
rambut berubah,
usia berubah,
proporsi tubuh berubah,
anatomi buruk,
tangan rusak,
jari tambahan,
anggota tubuh tambahan,
karakter ganda,
objek ganda,
background berubah,
lokasi tidak konsisten,
pencahayaan tidak konsisten,
warna berubah,
flickering,
jitter,
gerakan tidak natural,
fisika tidak realistis,
kamera bergetar,
zoom berlebihan,
kamera acak,
morphing,
warped face,
warped body,
plastic skin,
cartoon,
artefak teks,
watermark,
logo,
subtitle acak,
lip sync buruk,
ekspresi tidak natural.`,voice:`VOICE OVER

BAHASA:
${a.language}

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

Sesuaikan seluruh dialog dengan genre ${a.genre} dan tone ${a.tone}.`,caption:`CAPTION

${b}

${c}

Buat caption TikTok / Reels / Shorts yang:

- Singkat
- Natural
- Memiliki hook
- Membuat penasaran
- Tidak terlalu menjelaskan ending
- Mendorong komentar
- Memiliki CTA sederhana

Gunakan bahasa ${a.language}.

HASHTAG:

Buat 8-12 hashtag yang relevan dengan cerita, genre, target penonton Indonesia, dan konten short story.

#ShortStory
#CeritaPendek
#Storytelling
#CeritaViral
#KontenAI
#VideoAI
#Driacom`}),k(!0)},className:"flex-1 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 active:scale-[0.99]",children:"✦ Buat Cerita"}),(0,b.jsx)("button",{onClick:()=>{g({title:"",idea:"",character:"",setting:"",genre:"Drama",tone:"Emosional",duration:"30 detik",scenes:"5",ratio:"9:16",language:"Bahasa Indonesia"}),i(f),k(!1)},className:"rounded-xl border border-white/10 px-5 py-3.5 text-sm text-white/60 transition hover:bg-white/5 hover:text-white",children:"Atur Ulang"})]})]})]}),(0,b.jsx)("section",{children:j?(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsxs)("div",{className:"mb-6 flex items-end justify-between",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-xs uppercase tracking-[0.2em] text-white/30",children:"Hasil Generasi"}),(0,b.jsx)("h2",{className:"mt-1 text-2xl font-bold",children:"Paket Short Story"})]}),(0,b.jsx)("button",{onClick:()=>m(Object.values(h).filter(Boolean).join("\n\n--------------------\n\n")),className:"rounded-xl border border-white/10 px-4 py-2 text-xs text-white/60 transition hover:bg-white/10 hover:text-white",children:"Salin Semua"})]}),(0,b.jsx)(p,{title:"Konsep Short Story",icon:"💡",text:h.concept}),(0,b.jsx)(p,{title:"Hook",icon:"🪝",text:h.hook}),(0,b.jsx)(p,{title:"Karakter",icon:"👤",text:h.character}),(0,b.jsx)(p,{title:"Alur Cerita",icon:"📖",text:h.storyline}),(0,b.jsx)(p,{title:"Storyboard",icon:"🎬",text:h.storyboard}),(0,b.jsx)(p,{title:"Prompt Gambar",icon:"🖼️",text:h.imagePrompt}),(0,b.jsx)(p,{title:"Prompt Video Google Flow",icon:"🎥",text:h.videoPrompt}),(0,b.jsx)(p,{title:"Kunci Konsistensi",icon:"🔒",text:h.consistency}),(0,b.jsx)(p,{title:"Prompt Negatif",icon:"🚫",text:h.negative}),(0,b.jsx)(p,{title:"Voice Over",icon:"🎙️",text:h.voice}),(0,b.jsx)(p,{title:"Caption",icon:"📝",text:h.caption})]}):(0,b.jsx)("div",{className:"flex min-h-[620px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.015]",children:(0,b.jsxs)("div",{className:"max-w-sm px-6 text-center",children:[(0,b.jsx)("div",{className:"mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl",children:"📖"}),(0,b.jsx)("h2",{className:"text-lg font-semibold",children:"Siap membuat cerita?"}),(0,b.jsx)("p",{className:"mt-2 text-sm leading-6 text-white/35",children:"Masukkan ide cerita di sebelah kiri, lalu tekan Buat Cerita untuk menghasilkan paket short story."})]})})})]}),(0,b.jsx)("footer",{className:"mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/25",children:"Driacom AI Prompt Studio · Short Story"})]})})}])},45936,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(53407);a.s(["default",0,function({compact:a=!1}){let[e,f]=(0,c.useState)("id");return(0,c.useEffect)(()=>{let a=localStorage.getItem(d.LANGUAGE_STORAGE_KEY);("id"===a||"en"===a)&&f(a)},[]),(0,b.jsxs)("label",{className:`flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-[#090e16]/95 px-3 py-2 text-xs font-bold text-zinc-300 backdrop-blur-xl ${a?"":"shadow-[0_12px_35px_rgba(0,0,0,0.2)]"}`,children:[(0,b.jsx)("span",{children:"🌐"}),(0,b.jsx)("span",{className:"hidden md:inline",children:"id"===e?"Pilih Bahasa":"Choose Language"}),(0,b.jsxs)("select",{value:e,onChange:a=>{var b;f(b=a.target.value),localStorage.setItem(d.LANGUAGE_STORAGE_KEY,b),document.documentElement.lang=b,window.dispatchEvent(new CustomEvent("driacom-language-change",{detail:b}))},className:"cursor-pointer bg-transparent text-xs font-black text-white outline-none","aria-label":"id"===e?"Pilih bahasa":"Choose language",children:[(0,b.jsx)("option",{value:"id",className:"bg-[#090e16]",children:"🇮🇩 Indonesia"}),(0,b.jsx)("option",{value:"en",className:"bg-[#090e16]",children:"🇬🇧 English"})]})]})}])},62419,a=>{"use strict";var b=a.i(87924),c=a.i(72131);a.s(["default",0,function({className:a=""}){let[d,e]=(0,c.useState)(null);return(0,c.useEffect)(()=>{let a=a=>{let b=a.detail;"number"==typeof b&&e(b)},b=window.__driacomPageviewCount;return"number"==typeof b&&e(b),window.addEventListener("driacom-pageview-count",a),fetch("/api/pageview",{cache:"no-store"}).then(a=>a.ok?a.json():null).then(a=>{"number"==typeof a?.count&&e(a.count)}).catch(()=>void 0),()=>window.removeEventListener("driacom-pageview-count",a)},[]),(0,b.jsxs)("div",{className:`inline-flex min-w-0 items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs font-semibold text-zinc-400 sm:w-auto sm:border-transparent sm:bg-transparent sm:px-0 sm:py-0 ${a}`,title:"Page views hari ini",children:[(0,b.jsx)("span",{"aria-hidden":"true",className:"shrink-0 text-base leading-none",children:"👁"}),(0,b.jsx)("span",{className:"whitespace-nowrap",children:"Pengunjung Hari Ini"}),(0,b.jsx)("strong",{className:"min-w-[1.5rem] text-right text-sm font-black text-zinc-100",children:null===d?"…":d.toLocaleString("id-ID")})]})}])}];

//# sourceMappingURL=src_1ih3cl0._.js.map