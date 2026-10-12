export type DriacomLanguage = "id" | "en";
export const LANGUAGE_STORAGE_KEY = "driacom_language_v2";
export const GATE_STORAGE_KEY = "driacom_social_gate_v3";
export const BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL || "https://www.blogger.com/followers/follow/3986929889903697310?hl=id";
export const TIKTOK_URL = process.env.NEXT_PUBLIC_TIKTOK_URL || "https://www.tiktok.com/@_driacom";

const en: Record<string,string> = {
  "Prompt AI Generator":"AI Prompt Generator","Pilih engine Driacom sesuai jenis konten yang ingin kamu racik.":"Choose the Driacom engine for the type of content you want to create.",
  "Animasi":"Animation","Storytelling":"Storytelling","Affiliate":"Affiliate","Dashboard":"Dashboard","NAVIGASI":"NAVIGATION","Navigasi":"Navigation","BUKA ENGINE":"OPEN ENGINE","Buka Engine":"Open Engine",
  "Racik prompt visual, objek bicara, ASMR, fakta unik, edukasi, dan berbagai format konten AI.":"Create visual prompts, talking objects, ASMR, unique facts, educational content, and many AI content formats.",
  "Bangun cerita dengan karakter, konflik, perkembangan alur, klimaks, dialog, scene, dan continuity.":"Build stories with characters, conflict, plot progression, climax, dialogue, scenes, and continuity.",
  "Rancang hook, UGC, review produk, soft selling, hard selling, CTA, dan konsep video affiliate.":"Create hooks, UGC, product reviews, soft selling, hard selling, CTAs, and affiliate video concepts.",
  "PROMPT ANIMASI":"ANIMATION PROMPT","STORY DIRECTOR":"STORY DIRECTOR","PROMPT AFFILIATE":"AFFILIATE PROMPT",
  "Affiliate Engine":"Affiliate Engine","Animation Engine":"Animation Engine","Storytelling Engine":"Storytelling Engine","Racik Konten":"Create Content","Racik Cerita":"Build Your Story",
  "Generate Prompt":"Generate Prompt","Buat Prompt":"Create Prompt","Mulai Generate":"Start Generating","Kembali":"Back","Salin":"Copy","Disalin":"Copied","Memproses...":"Processing...","Sedang meracik...":"Creating...",
  "Pilih genre. Masukkan ide. Driacom mengurus detail ceritanya.":"Choose a genre. Add an idea. Driacom handles the story details.",
  "Cukup atur hal penting. Detail produksi akan diracik otomatis.":"Set the important details. Production details are created automatically.",
  "Field opsional boleh kosong. Driacom tetap mengisi angle, naskah, motion text, dan detail produksi secara otomatis.":"Optional fields can be left empty. Driacom will still create the angle, script, motion text, and production details automatically.",
  "Jenis Konten Affiliate":"Affiliate Content Type","Upload Foto Produk":"Upload Product Photo","Genre Cerita":"Story Genre","Ide / Alur Cerita":"Story Idea / Plot","Bahasa Inggris":"English","English":"English","Bahasa Melayu":"Malay","Tanpa Audio":"No Audio",
  "Narasi + BGM + Efek Suara":"Narration + BGM + Sound Effects","Narasi + Efek Suara":"Narration + Sound Effects","BGM + Efek Suara (ASMR)":"BGM + Sound Effects (ASMR)","Hanya Narasi / Dialog":"Narration / Dialogue Only",
  "Racik Prompt":"Create Prompt","Racik Story":"Create Story","Bantu Buat Ide":"Help Me Create an Idea","AI Driacom — Bantu Buat Ide":"Driacom AI — Help Create an Idea",
  "Driacom sedang mencari ide...":"Driacom is finding ideas...","Driacom sedang meracik...":"Driacom is creating...","Driacom sedang meracik prompt...":"Driacom is creating the prompt...","✦ Racik Prompt":"✦ Create Prompt","✦ Racik Story":"✦ Create Story",
  "Ceritakan ide kamu. Detail produksi disusun otomatis oleh Driacom.":"Tell us your idea. Driacom automatically handles the production details.",
  "Buat Animasi":"Create Animation","Kamu cukup menentukan arah cerita. Detail produksi dikerjakan otomatis oleh Driacom.":"You only need to define the story direction. Driacom handles the production details automatically.",
  "Jenis Konten Animasi":"Animation Content Type","Satu engine untuk berbagai format. Driacom menyesuaikan cara membuat prompt berdasarkan pilihan ini.":"One engine for many formats. Driacom adapts the prompt structure to your selection.",
  "Ide / Topik":"Idea / Topic","Gaya Visual":"Visual Style","Driacom menyesuaikan seluruh desain visual.":"Driacom adapts the entire visual design.","Jumlah Karakter":"Number of Characters","Driacom membuat identitas karakter otomatis.":"Driacom creates the character identity automatically.",
  "Struktur Video":"Video Structure","Atur scene, durasi, ratio, dan bahasa.":"Set the scenes, duration, aspect ratio, and language.","Bahasa":"Language","Audio":"Audio","Pilih elemen suara yang digunakan.":"Choose the sound elements to use.","Siapa yang Berbicara?":"Who Is Speaking?","Tentukan sumber suara cerita.":"Choose the story voice source.",
  "Master Character Sheet":"Master Character Sheet","Setiap karakter memiliki 1 prompt master sendiri. Jika ada 2 karakter, Driacom menghasilkan 2 prompt terpisah agar setiap gambar fokus pada satu karakter lengkap dengan turnaround dan detail identitas.":"Each character gets one dedicated master prompt. If there are two characters, Driacom creates two separate prompts so each image focuses on one complete character with turnaround views and identity details.",
  "Scene Production":"Scene Production","Setiap scene hanya berisi Image Prompt dan Video Prompt. Naskah dialog, narasi, voice, BGM, SFX, dan audio direction sudah ditanam langsung di dalam Video Prompt.":"Each scene contains only an Image Prompt and Video Prompt. Dialogue, narration, voice, BGM, SFX, and audio direction are built directly into the Video Prompt.",
  "Karakter":"Character","Dialog":"Dialogue","Image":"Image","Video":"Video","Identity Lock":"Identity Lock","Scene Script":"Scene Script","Start Frame":"Start Frame","Motion Prompt":"Motion Prompt","Animation Workspace":"Animation Workspace","Animation Output":"Animation Output",
  "Jenis Konten":"Content Type","Petualangan":"Adventure","Eksperimen & Sains":"Experiments & Science","Konten Hewan":"Animal Content","Fakta Unik":"Unique Facts","Edukasi Visual":"Visual Education","Objek Bicara":"Talking Object","What If":"What If","Miniatur":"Miniature","ASMR":"ASMR",
  "Pilih genre":"Choose a genre","Masukkan ide":"Enter an idea","Contoh":"Example","Coba lagi":"Try again","Tidak":"No","Ya":"Yes","Opsional":"Optional","Wajib":"Required","Hapus":"Delete","Hapus upload":"Remove upload","Upload":"Upload","Pilih File":"Choose File","Belum ada file":"No file selected",
  "Jumlah Scene":"Number of Scenes","Durasi per Scene":"Duration per Scene","Rasio":"Aspect Ratio","Ratio":"Aspect Ratio","Bahasa Output":"Output Language","Rasio Video":"Video Aspect Ratio","Tone Cerita":"Story Tone","Gaya Suara":"Voice Style","Motion Text":"Motion Text","Gaya Motion Text":"Motion Text Style",
  "Upload Background / Lokasi":"Upload Background / Location","Deskripsi Background / Lokasi":"Background / Location Description","Hal yang Wajib Ditampilkan (opsional)":"Required Elements (optional)","Nama Produk":"Product Name","Brand / Merk":"Brand / Brand Name","Upload Foto Karakter":"Upload Character Photo","Apa yang Mau Diiklankan? (opsional)":"What Do You Want to Advertise? (optional)",
  "POV Tangan":"Hand POV","Pakai Karakter":"Use Character","UGC Natural":"Natural UGC","Unboxing":"Unboxing","Review Produk":"Product Review","Spill Produk":"Product Showcase","Soft Selling":"Soft Selling","Natural":"Natural","Softselling":"Soft Sell","Hardselling":"Hard Sell","Dinamic":"Dynamic","Kinetic":"Kinetic","Highlight":"Highlight",
  "Siapa / Apa yang Tampil":"Who / What Appears","SIAPA / APA YANG TAMPIL":"WHO / WHAT APPEARS","STRUKTUR VIDEO":"VIDEO STRUCTURE","SCENE":"SCENE","SHOT":"SHOT","TOTAL":"TOTAL","Master Character Sheet Prompt":"Master Character Sheet Prompt","Storyboard + Video":"Storyboard + Video",
  "Generator Driacom":"Driacom Generator","Short Story":"Short Story","Gaya":"Style","Struktur":"Structure","Visual":"Visual","Generate":"Generate","Judul Cerita":"Story Title","Ide Cerita":"Story Idea","Karakter Utama":"Main Character","Lokasi / Dunia Cerita":"Story Location / World","Nuansa Cerita":"Story Mood","Prompt Gambar":"Image Prompt","Prompt Video Google Flow":"Google Flow Video Prompt","Prompt Negatif":"Negative Prompt","Alur Cerita":"Story Flow",
  "Pilih engine Driacom":"Choose a Driacom engine","Menyusun":"Creating","Hasil":"Result","Output":"Output","Kosong":"Empty","Belum ada hasil":"No result yet","Salin Prompt":"Copy Prompt","Prompt berhasil disalin":"Prompt copied","Detail":"Details","Lihat Detail":"View Details",
  "Buka menu navigasi":"Open navigation menu","Tutup menu":"Close menu","Pilih Bahasa":"Choose Language","Pilih bahasa":"Choose language","Indonesia":"Indonesia","Bahasa Indonesia":"Indonesian",
  "Driacom gagal membuat pilihan ide.":"Driacom could not create idea options.","Driacom belum berhasil membuat pilihan ide. Coba lagi.":"Driacom could not create idea options. Try again.","Driacom tidak menerima output Animation dari server.":"Driacom did not receive an Animation output from the server.","Driacom gagal meracik prompt karena sedang banyak yang menggunakan Driacom. Coba lagi beberapa saat.":"Driacom could not create the prompt because Driacom is currently busy. Please try again shortly.","Driacom gagal meracik prompt affiliate.":"Driacom could not create the affiliate prompt.","Driacom gagal meracik cerita.":"Driacom could not create the story.","Driacom belum bisa membuat ide.":"Driacom could not create an idea yet.",
  "File harus berupa gambar.":"The file must be an image.","Upload foto produk, isi nama produk, dan isi brand/merk.":"Upload a product photo, enter the product name, and enter the brand.","Upload foto karakter karena mode Pakai Karakter dipilih.":"Upload a character photo because Use Character mode is selected.",
  "Harga sewaktu-waktu bisa berubah. Langganan sekarang sebelum harga kembali normal.":"Prices may change at any time. Subscribe now before prices return to normal."
};

// Additional sentence-level translations used throughout the generators.
Object.assign(en, {
 "Pilih engine Driacom sesuai jenis konten yang ingin kamu racik.":"Choose the Driacom engine based on the content you want to create.",
 "Satu engine untuk berbagai format.":"One engine for many formats.",
 "Driacom menyesuaikan cara membuat prompt berdasarkan pilihan ini.":"Driacom adapts the prompt structure to this selection.",
 "Driacom menyesuaikan seluruh desain visual.":"Driacom adapts the entire visual design.",
 "Driacom membuat identitas karakter otomatis.":"Driacom automatically creates the character identity.",
 "Atur scene, durasi, ratio, dan bahasa.":"Set scenes, duration, aspect ratio, and language.",
 "Pilih elemen suara yang digunakan.":"Choose the sound elements to use.",
 "Tentukan sumber suara cerita.":"Choose the story voice source.",
 "Field opsional boleh kosong.":"Optional fields can be left empty.",
 "Driacom tetap mengisi angle, naskah, motion text, dan detail produksi secara otomatis.":"Driacom will still create the angle, script, motion text, and production details automatically.",
 "Produk → angle iklan → storyboard → video prompt.":"Product → ad angle → storyboard → video prompt.",
 "Pilih genre. Masukkan ide. Driacom mengurus detail ceritanya.":"Choose a genre. Add an idea. Driacom handles the story details.",
 "Ide dipilih:":"Selected idea:",
 "Tidak ada hasil":"No result",
 "Belum ada prompt":"No prompt yet",
 "Tutup pilihan":"Close options",
 "Cerita Pendek":"Short Story",
 "Drama":"Drama",
 "Romantis":"Romance",
 "Horror":"Horror",
 "Komedi":"Comedy",
 "Misteri":"Mystery",
 "Fantasi":"Fantasy",
 "Sejarah":"History",
 "Realistis Sinematik":"Cinematic Realism",
 "Sangat Realistis":"Hyperrealistic",
 "Animasi 3D":"3D Animation",
 "Narator + Dialog + Musik + SFX":"Narrator + Dialogue + Music + SFX",
 "Narator + Musik + SFX":"Narrator + Music + SFX",
 "Dialog + Musik + SFX":"Dialogue + Music + SFX",
 "Musik + SFX":"Music + SFX",
 "4 detik per scene":"4 seconds per scene",
 "6 detik per scene":"6 seconds per scene",
 "8 detik per scene":"8 seconds per scene",
 "10 detik per scene":"10 seconds per scene",
 "Contoh: Tulis ide singkat tentang cerita atau konsep animasi yang ingin kamu buat...":"Example: Write a short idea about the story or animation concept you want to create...",
 "Contoh: Tulis ide singkat tentang cerita yang ingin kamu kembangkan...":"Example: Write a short idea about the story you want to develop...",
 "Contoh: Cat Ear Headset P47":"Example: Cat Ear Headset P47",
 "Contoh: Driacom Audio":"Example: Driacom Audio",
 "Contoh: kamar tidur, kamar hotel, depan cermin, ruang tamu...":"Example: bedroom, hotel room, in front of a mirror, living room...",
 "Contoh: kemasan, tekstur, tombol, LED RGB, detail material...":"Example: packaging, texture, buttons, RGB LED, material details...",
 "Contoh: tunjukkan tekstur produk, cara pakai, dan kenapa aku suka hasil akhirnya.":"Example: show the product texture, how to use it, and why I like the final result."
});


// Extended UI/output translations for generator pages and dynamic result states.
Object.assign(en, {
  "Ada karakter + narator":"Character + narrator",
  "Ada karakter yang bicara":"Character speaks",
  "Ada narator saja":"Narrator only",
  "Atur scene, durasi, ratio, dan bahasa.":"Set scenes, duration, aspect ratio, and language.",
  "Bahasa Output":"Output Language",
  "Belum ada pilihan ide yang diterima dari Gemini.":"No idea options were returned by Gemini.",
  "Belum ada prompt.":"No prompt yet.",
  "Buat satu karakter utama yang paling sesuai dengan konsep, genre, dan gaya visual.":"Create one main character that best fits the concept, genre, and visual style.",
  "Buat seluruh desain karakter berdasarkan konsep cerita, genre ${genre}, dan gaya visual ${form.animationStyle}.":"Create the complete character design based on the story concept, genre ${genre}, and visual style ${form.animationStyle}.",
  "Buat ${characterCount} karakter berbeda yang relevan dengan cerita.":"Create ${characterCount} distinct characters relevant to the story.",
  "Driacom belum berhasil membuat pilihan ide. Coba lagi.":"Driacom could not create idea options. Try again.",
  "Driacom gagal membuat pilihan ide.":"Driacom failed to create idea options.",
  "Driacom gagal meracik prompt karena sedang banyak yang menggunakan Driacom. Coba lagi beberapa saat.":"Driacom could not create the prompt because Driacom is currently busy. Please try again shortly.",
  "Driacom membuat identitas karakter otomatis.":"Driacom creates the character identity automatically.",
  "Driacom menyesuaikan seluruh desain visual.":"Driacom adapts the entire visual design.",
  "Driacom tidak menerima output Animation dari server.":"Driacom did not receive an Animation output from the server.",
  "Gemini gagal membuat prompt (HTTP ${response.status}).":"Gemini failed to create the prompt (HTTP ${response.status}).",
  "Gunakan ekspresi karakter yang natural dan sesuai perkembangan cerita.":"Use natural character expressions that match the story progression.",
  "Gunakan ekspresi visual yang kuat untuk mendukung narasi.":"Use strong visual expressions to support the narrative.",
  "Jenis Konten Animasi":"Animation Content Type",
  "Jumlah Karakter":"Number of Characters",
  "Karakter Utama":"Main Character",
  "Pilih elemen suara yang digunakan.":"Choose the sound elements to use.",
  "Satu engine untuk berbagai format. Driacom menyesuaikan cara membuat prompt berdasarkan pilihan ini.":"One engine for many formats. Driacom adapts the prompt structure to your selection.",
  "Scene Production":"Scene Production",
  "Setiap scene hanya berisi Image Prompt dan Video Prompt. Naskah dialog, narasi, voice, BGM, SFX, dan audio direction sudah ditanam langsung di dalam Video Prompt.":"Each scene contains only an Image Prompt and Video Prompt. Dialogue, narration, voice, BGM, SFX, and audio direction are embedded directly in the Video Prompt.",
  "Siapa yang Berbicara?":"Who Is Speaking?",
  "Tentukan aksi konkret setiap scene berdasarkan perkembangan cerita.":"Define a concrete action for each scene based on the story progression.",
  "Tentukan sumber suara cerita.":"Choose the story voice source.",
  "Server Driacom mengembalikan respons yang bukan JSON (HTTP ${response.status}).":"Driacom returned a non-JSON response (HTTP ${response.status}).",
  "✓ Setiap scene akan memiliki naskah dialog karakter dan narasi yang disesuaikan dengan durasi scene.":"✓ Each scene will contain character dialogue and narration tailored to the scene duration.",
  "✓ Setiap scene akan memiliki naskah dialog karakter sesuai perkembangan cerita.":"✓ Each scene will contain character dialogue aligned with the story progression.",
  "✓ Setiap scene akan memiliki naskah narasi sesuai perkembangan cerita.":"✓ Each scene will contain narration aligned with the story progression.",
  "✦ AI Driacom — Bantu Buat Ide":"✦ Driacom AI — Help Create an Idea",
  "✦ Driacom sedang mencari ide...":"✦ Driacom is finding ideas...",
  "✦ Driacom sedang meracik prompt...":"✦ Driacom is creating the prompt...",
  "✦ Racik Prompt":"✦ Create Prompt",
  "✦ Bantu Buat Ide":"✦ Help Me Create an Idea",
  "✦ Driacom sedang meracik...":"✦ Driacom is creating...",
  "MASTER CHARACTER SHEET":"MASTER CHARACTER SHEET",
  "Character Prompts":"Character Prompts",
  "karakter":"characters",
  "Storyboard + Video":"Storyboard + Video",
  "SCENE PROMPTS":"SCENE PROMPTS",
  "Setiap scene hanya berisi satu storyboard/image prompt dan satu video prompt. Shot 1–4 tetap berada di dalam prompt video.":"Each scene contains one storyboard/image prompt and one video prompt. Shots 1–4 remain inside the single video prompt.",
  "Tersalin":"Copied",
  "✓ Tersalin":"✓ Copied",
  "Siap Meracik Cerita":"Ready to Build Your Story",
  "Story Director sedang bekerja...":"Story Director is working...",
  "Menyusun karakter, thumbnail, scene, prompt, dan continuity.":"Building characters, thumbnail, scenes, prompts, and continuity.",
  "Hasil akan berisi thumbnail, master karakter, lalu":"The result will contain a thumbnail, master character sheet, then",
  "scene":"scene",
  "Prompt produksi sudah diracik lengkap oleh Driacom.":"Production prompts are fully prepared by Driacom.",
  "Prompt Gambar":"Image Prompt",
  "Prompt Video Google Flow":"Google Flow Video Prompt",
  "Prompt Negatif":"Negative Prompt",
  "Alur Cerita":"Story Flow",
  "Kisah yang Tidak Akan Pernah Dilupakan":"A Story Never to Be Forgotten",
  "Lokasi / Dunia Cerita":"Story Location / World",
  "Nuansa Cerita":"Story Mood",
  "Judul Cerita":"Story Title",
  "Ide Cerita":"Story Idea",
  "Karakter":"Character",
  "Jumlah Adegan":"Number of Scenes",
  "Durasi":"Duration",
  "Rasio Video":"Video Aspect Ratio",
  "Contoh: Hadiah Terakhir untuk Ibu":"Example: The Last Gift for Mother",
  "Contoh: Pria Indonesia usia 25 tahun...":"Example: A 25-year-old Indonesian man...",
  "Contoh: Rumah sederhana di sebuah desa...":"Example: A simple house in a village...",
  "Contoh: Seorang anak diam-diam bekerja untuk membeli hadiah ibunya...":"Example: A child secretly works to buy a gift for his mother...",
  "Contoh: Tulis ide singkat tentang cerita atau konsep animasi yang ingin kamu buat...":"Example: Write a short idea about the story or animation concept you want to create...",
  "Contoh: Tulis ide singkat tentang cerita yang ingin kamu kembangkan...":"Example: Write a short idea about the story you want to develop...",
  "Contoh: Apa yang terjadi ketika sebuah benda dimasukkan ke dalam cairan yang sangat dingin?...":"Example: What happens when an object is placed into an extremely cold liquid?...",
  "Contoh: Bagaimana jika manusia bisa hidup tanpa tidur selama 30 hari?...":"Example: What if humans could live without sleep for 30 days?...",
  "Contoh: Fakta mengejutkan tentang bagaimana gurita bisa mengubah warna tubuhnya...":"Example: A surprising fact about how octopuses can change their body color...",
  "Contoh: Memotong sabun transparan dengan tekstur lembut dan suara potongan yang memuaskan...":"Example: Cutting transparent soap with a soft texture and satisfying cutting sounds...",
  "Contoh: Menjelaskan bagaimana hujan terbentuk dengan visual yang mudah dipahami...":"Example: Explaining how rain forms with easy-to-understand visuals...",
  "Contoh: Sebuah jam dinding tua mulai mengeluh karena selalu diabaikan pemiliknya...":"Example: An old wall clock starts complaining because its owner always ignores it...",
  "Contoh: Sebuah kedai kopi mini mulai hidup ketika seluruh kota sudah tertidur...":"Example: A miniature coffee shop comes alive after the whole city falls asleep...",
  "Contoh: Seekor anak kucing penasaran menjelajahi rumah dan menemukan sesuatu yang tidak terduga...":"Example: A curious kitten explores the house and discovers something unexpected...",
  "Contoh: Seorang anak menemukan pintu rahasia di tengah hutan dan memutuskan untuk membukanya...":"Example: A child finds a secret door in the middle of a forest and decides to open it...",
  "Contoh: Dua orang yang pernah saling mencintai bertemu kembali setelah bertahun-tahun...":"Example: Two people who once loved each other meet again after many years...",
  "Contoh: Dua sahabat harus memilih antara mempertahankan persahabatan atau mengungkap sebuah rahasia besar...":"Example: Two friends must choose between protecting their friendship and revealing a major secret...",
  "Contoh: Sebuah surat tanpa nama muncul setiap pagi dan perlahan mengungkap rahasia yang seharusnya tidak pernah diketahui...":"Example: An anonymous letter appears every morning and slowly reveals a secret that should never have been known...",
  "Contoh: Seorang anak menemukan pintu menuju kerajaan tersembunyi di balik buku tua milik kakeknya...":"Example: A child discovers a doorway to a hidden kingdom behind an old book belonging to their grandfather...",
  "Contoh: Seorang pemuda mencoba terlihat keren di depan orang yang disukainya, tetapi semuanya berubah menjadi kekacauan...":"Example: A young man tries to look cool in front of his crush, but everything turns into chaos...",
  "Contoh: Seorang penjaga rumah menyadari suara langkah kaki setiap malam selalu berhenti di depan kamarnya...":"Example: A house guard realizes that footsteps every night always stop in front of his room...",
  "Contoh: Seorang tokoh muda harus mengambil keputusan penting di tengah peristiwa bersejarah yang mengubah masa depan...":"Example: A young figure must make an important decision during a historic event that changes the future...",
  "Contoh: Seorang anak menemukan surat lama yang mengubah cara pandangnya terhadap keluarganya...":"Example: A child finds an old letter that changes the way they see their family...",
  "Contoh: Cat Ear Headset P47":"Example: Cat Ear Headset P47",
  "Contoh: Driacom Audio":"Example: Driacom Audio",
  "Contoh: kamar tidur, kamar hotel, depan cermin, ruang tamu...":"Example: bedroom, hotel room, in front of a mirror, living room...",
  "Contoh: kemasan, tekstur, tombol, LED RGB, detail material...":"Example: packaging, texture, buttons, RGB LED, material details...",
  "Contoh: tunjukkan tekstur produk, cara pakai, dan kenapa aku suka hasil akhirnya.":"Example: show the product texture, how to use it, and why I like the final result.",
  "Pilih foto reference":"Choose reference photo",
  "Driacom akan mengisi otomatis.":"Driacom will fill this automatically.",
  "Upload reference karakter; Driacom meracik master sheet":"Upload the character reference; Driacom will create the master sheet",
  "Tanpa Master Character Sheet":"No Master Character Sheet",
  "4 internal shot / scene":"4 internal shots / scene",
  "Tidak":"No",
  "SCENE":"SCENE",
  "Gratis 2x generate sudah habis. Tonton 2 iklan untuk +1 token atau upgrade ke PRO.":"Your 2 free generations are used. Watch 2 ads for +1 token or upgrade to PRO.",
  "Upload foto karakter karena mode Pakai Karakter dipilih.":"Upload a character photo because Use Character mode is selected.",
  "Upload foto produk, isi nama produk, dan isi brand/merk.":"Upload a product photo, enter the product name, and enter the brand.",
  "Hapus upload":"Remove upload",
  "Upload Background / Lokasi":"Upload Background / Location",
  "Upload Foto Karakter":"Upload Character Photo",
  "Upload Foto Produk":"Upload Product Photo",
  "Apa yang Mau Diiklankan? (opsional)":"What Do You Want to Advertise? (optional)",
  "Hal yang Wajib Ditampilkan (opsional)":"Required Elements (optional)",
  "Deskripsi Background / Lokasi":"Background / Location Description",
  "Gaya Motion Text":"Motion Text Style",
  "Gaya Suara":"Voice Style",
  "Jenis Konten Affiliate":"Affiliate Content Type",
  "Pakai Karakter":"Use Character",
  "Spill Produk":"Product Showcase",
  "Review Produk":"Product Review",
  "Tanpa Audio":"No Audio",
  "Hanya Narasi / Dialog":"Narration / Dialogue Only",
  "Tidak ada":"None",
  "Natural":"Natural",
  "Softselling":"Soft Sell",
  "Hardselling":"Hard Sell",
  "Dinamic":"Dynamic",
  "Kinetic":"Kinetic",
  "Highlight":"Highlight"
});

export const translations: Record<DriacomLanguage, Record<string,string>> = { id:{}, en };

export function translateText(value:string, language:DriacomLanguage){
 if(language!=="en") return value;
 const exact=en[value];
 if(exact) return exact;
 // Safe phrase replacements for compound UI strings that contain a known phrase.
 let result=value;
 const replacements=Object.entries(en).filter(([k])=>k.length>=8).sort((a,b)=>b[0].length-a[0].length);
 for(const [from,to] of replacements){ if(result.includes(from)) result=result.split(from).join(to); }
 return result;
}

const originals = new WeakMap<Text,string>();
export function translateDocument(language:DriacomLanguage){
 if(typeof document === "undefined") return;
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); const nodes:Text[]=[]; let n:Node|null;
 while((n=walker.nextNode())) nodes.push(n as Text);
 for(const t of nodes){
   const p=t.parentElement;
   if(!p || ["SCRIPT","STYLE","NOSCRIPT","TEXTAREA"].includes(p.tagName)) continue;
   const raw=t.nodeValue||""; const trimmed=raw.trim(); if(!trimmed) continue;
   if(language==="en"){
     const next=translateText(trimmed,language);
     if(next!==trimmed){
       if(!originals.has(t)) originals.set(t,trimmed);
       t.nodeValue=raw.replace(trimmed,next);
     }
   } else if(originals.has(t)){
     t.nodeValue=raw.replace(trimmed,originals.get(t)||trimmed);
     originals.delete(t);
   }
 }
 document.querySelectorAll<HTMLElement>("[placeholder],[title],[aria-label]").forEach(el=>{
   for(const attr of ["placeholder","title","aria-label"] as const){
     const v=el.getAttribute(attr); if(!v) continue;
     const key=`data-driacom-original-${attr}`;
     if(!el.hasAttribute(key)) el.setAttribute(key,v);
     const original=el.getAttribute(key)||v;
     el.setAttribute(attr,language==="en"?translateText(original,language):original);
   }
 });
}
