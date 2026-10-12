"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import VisitorToday from "@/components/VisitorToday";
import Link from "next/link";
import { useState } from "react";

type Output = {
  concept: string;
  hook: string;
  character: string;
  storyline: string;
  storyboard: string;
  imagePrompt: string;
  videoPrompt: string;
  consistency: string;
  negative: string;
  voice: string;
  caption: string;
};

const emptyOutput: Output = {
  concept: "",
  hook: "",
  character: "",
  storyline: "",
  storyboard: "",
  imagePrompt: "",
  videoPrompt: "",
  consistency: "",
  negative: "",
  voice: "",
  caption: "",
};

export default function ShortStoryGeneratorPage() {
  const [form, setForm] = useState({
    title: "",
    idea: "",
    character: "",
    setting: "",
    genre: "Drama",
    tone: "Emosional",
    duration: "30 detik",
    scenes: "5",
    ratio: "9:16",
    language: "Bahasa Indonesia",
  });

  const [output, setOutput] = useState<Output>(emptyOutput);
  const [generated, setGenerated] = useState(false);

  const updateForm = (key: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const generateStoryboard = (
    totalScenes: number,
    character: string,
    setting: string,
    idea: string
  ) => {
    const scenes = [];

    for (let i = 1; i <= totalScenes; i++) {
      let content = "";

      if (i === 1) {
        content = `HOOK / PEMBUKA

Buka cerita dengan momen yang langsung menarik perhatian.

KARAKTER:
${character}

LOKASI:
${setting}

CERITA:
${idea}

Visual harus langsung membuat penonton penasaran dan ingin mengetahui apa yang terjadi selanjutnya.`;
      } else if (i === totalScenes) {
        content = `ENDING / PAYOFF

Berikan penyelesaian cerita yang kuat dan memorable.

KARAKTER:
${character}

CERITA:
Tutup konflik dengan cara yang emosional, mengejutkan, atau bermakna sesuai tone cerita.

Visual ending harus terasa seperti payoff dari seluruh cerita.`;
      } else if (i === 2) {
        content = `AWAL KONFLIK

Perkenalkan masalah utama yang harus dihadapi karakter.

KARAKTER:
${character}

LOKASI:
${setting}

CERITA:
Mulai dorong karakter masuk ke dalam konflik utama.`;
      } else if (i === 3) {
        content = `PERKEMBANGAN

Naikkan intensitas cerita.

KARAKTER:
${character}

CERITA:
Karakter mulai menghadapi konsekuensi dari masalah yang terjadi. Buat penonton semakin penasaran dengan hasil akhirnya.`;
      } else {
        content = `MENUJU KLIMAKS

Bangun ketegangan dan arahkan cerita menuju titik paling penting.

KARAKTER:
${character}

CERITA:
Perlihatkan keputusan, perubahan, atau kejadian penting sebelum ending.`;
      }

      scenes.push(
        `ADEGAN ${String(i).padStart(2, "0")}

${content}`
      );
    }

    return scenes.join("\n\n--------------------\n\n");
  };

  const generate = () => {
    const title =
      form.title || "Kisah yang Tidak Akan Pernah Dilupakan";

    const idea =
      form.idea ||
      "Seseorang menghadapi sebuah kejadian sederhana yang akhirnya mengubah hidupnya.";

    const character =
      form.character ||
      "Tokoh utama Indonesia dengan penampilan natural, ekspresif, dan mudah dipertahankan di setiap adegan.";

    const setting =
      form.setting ||
      "Lingkungan Indonesia yang realistis dan sesuai dengan kebutuhan cerita.";

    const totalScenes = Number(form.scenes);

    const storyboard = generateStoryboard(
      totalScenes,
      character,
      setting,
      idea
    );

    setOutput({
      concept: `KONSEP SHORT STORY

JUDUL:
${title}

IDE CERITA:
${idea}

GENRE:
${form.genre}

TONE:
${form.tone}

DURASI:
${form.duration}

JUMLAH ADEGAN:
${totalScenes} adegan

RASIO:
${form.ratio}

BAHASA:
${form.language}`,

      hook: `HOOK

Buat opening 2-3 detik yang langsung menarik perhatian.

Jangan memulai dengan penjelasan panjang.

Gunakan salah satu pendekatan:
- Kejadian mengejutkan
- Kalimat yang membuat penasaran
- Konflik langsung
- Visual yang tidak biasa
- Pertanyaan yang membuat penonton ingin tahu jawabannya

HOOK HARUS:
Singkat, kuat, natural, dan membuat penonton ingin lanjut menonton.`,

      character: `KARAKTER

TOKOH UTAMA:
${character}

ATURAN IDENTITAS:

Pertahankan karakter yang sama sepanjang seluruh cerita.

Wajah tetap sama.
Usia tampak tetap sama.
Bentuk tubuh tetap sama.
Rambut tetap sama.
Pakaian tetap sama kecuali memang ada perubahan dalam cerita.
Aksesori tetap sama.
Warna dan detail visual tetap sama.

Karakter harus terlihat seperti orang yang sama pada setiap adegan.`,

      storyline: `ALUR CERITA

JUDUL:
${title}

IDE DASAR:
${idea}

GENRE:
${form.genre}

TONE:
${form.tone}

LOKASI:
${setting}

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

Cerita harus singkat, mudah dipahami, emosional, dan memiliki alasan kuat agar penonton bertahan sampai akhir.`,

      storyboard: `STORYBOARD

TOTAL ADEGAN:
${totalScenes}

${storyboard}

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

Setiap adegan harus memiliki tujuan dalam cerita dan tidak terasa seperti filler.`,

      imagePrompt: `PROMPT GAMBAR

Buat visual sinematik realistis untuk short story berjudul:

"${title}"

KARAKTER:
${character}

LOKASI:
${setting}

CERITA:
${idea}

GENRE:
${form.genre}

TONE:
${form.tone}

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
${form.ratio}

Pertahankan identitas karakter secara konsisten untuk seluruh adegan.`,

      videoPrompt: `PROMPT VIDEO GOOGLE FLOW

Buat video short story sinematik berdurasi ${form.duration} dengan ${totalScenes} adegan.

JUDUL:
${title}

KARAKTER:
${character}

LOKASI:
${setting}

IDE CERITA:
${idea}

GENRE:
${form.genre}

TONE:
${form.tone}

RASIO:
${form.ratio}

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

Setiap adegan harus memiliki tujuan naratif dan mendorong cerita menuju klimaks dan ending.`,

      consistency: `KUNCI KONSISTENSI

IDENTITAS KARAKTER:
${character}

LOKASI:
${setting}

JUDUL:
${title}

RASIO:
${form.ratio}

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

SEMUA ADEGAN HARUS TERASA BERASAL DARI SATU FILM YANG SAMA.`,

      negative: `PROMPT NEGATIF

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
ekspresi tidak natural.`,

      voice: `VOICE OVER

BAHASA:
${form.language}

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

Sesuaikan seluruh dialog dengan genre ${form.genre} dan tone ${form.tone}.`,

      caption: `CAPTION

${title}

${idea}

Buat caption TikTok / Reels / Shorts yang:

- Singkat
- Natural
- Memiliki hook
- Membuat penasaran
- Tidak terlalu menjelaskan ending
- Mendorong komentar
- Memiliki CTA sederhana

Gunakan bahasa ${form.language}.

HASHTAG:

Buat 8-12 hashtag yang relevan dengan cerita, genre, target penonton Indonesia, dan konten short story.

#ShortStory
#CeritaPendek
#Storytelling
#CeritaViral
#KontenAI
#VideoAI
#Driacom`,
    });

    setGenerated(true);
  };

  const reset = () => {
    setForm({
      title: "",
      idea: "",
      character: "",
      setting: "",
      genre: "Drama",
      tone: "Emosional",
      duration: "30 detik",
      scenes: "5",
      ratio: "9:16",
      language: "Bahasa Indonesia",
    });

    setOutput(emptyOutput);
    setGenerated(false);
  };

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      console.error("Gagal menyalin teks.");
    }
  };

  const Input = ({
    label,
    value,
    onChange,
    placeholder,
    textarea = false,
  }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    textarea?: boolean;
  }) => {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium text-white/80">
          {label}
        </label>

        {textarea ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={4}
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-cyan-400/40 focus:bg-white/[0.06]"
          />
        ) : (
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-cyan-400/40"
          />
        )}
      </div>
    );
  };

  const Select = ({
    label,
    value,
    options,
    onChange,
  }: {
    label: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
  }) => {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium text-white/80">
          {label}
        </label>

        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-[#11131a] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/40"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const OutputCard = ({
    title,
    icon,
    text,
  }: {
    title: string;
    icon: string;
    text: string;
  }) => {
    return (
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="text-lg">{icon}</span>

            <h3 className="font-semibold text-white">
              {title}
            </h3>
          </div>

          <button
            onClick={() => copyText(text)}
            className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            Salin
          </button>
        </div>

        <pre className="whitespace-pre-wrap px-5 py-5 font-sans text-sm leading-7 text-white/65">
          {text}
        </pre>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[#08090d] text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">

        {/* HEADER */}
        <header className="sticky top-0 z-40 mb-10 flex items-start justify-between gap-6 border-b border-white/[0.07] bg-[#08090d]/95 px-2 py-4 backdrop-blur-xl">

          <div>
            <div className="mb-3 flex items-center gap-3">

              <span className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xl">
                📖
              </span>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/60">
                  Generator Driacom
                </p>

                <h1 className="text-3xl font-bold tracking-tight">
                  Short Story
                </h1>
              </div>

            </div>

            <p className="max-w-2xl text-sm leading-6 text-white/45">
              Buat cerita pendek yang emosional dan engaging lengkap
              dengan hook, alur cerita, storyboard, prompt gambar,
              prompt video, voice over, dan caption.
            </p>
          </div>

          <div className="flex w-full flex-wrap items-center justify-end gap-2 sm:w-auto"><VisitorToday className="w-full sm:w-auto" /><LanguageSwitcher compact /></div>
        </header>

        {/* CONTENT */}
        <div className="grid gap-8 lg:grid-cols-[420px_1fr]">

          {/* INPUT */}
          <section className="h-fit rounded-2xl border border-white/10 bg-white/[0.025] p-6">

            <div className="mb-6">

              <h2 className="text-lg font-semibold">
                Pengaturan Cerita
              </h2>

              <p className="mt-1 text-xs text-white/35">
                Isi detail sederhana, lalu Driacom akan menyusun
                short story lengkap.
              </p>

            </div>

            <div className="space-y-5">

              <Input
                label="Judul Cerita"
                value={form.title}
                onChange={(v) => updateForm("title", v)}
                placeholder="Contoh: Hadiah Terakhir untuk Ibu"
              />

              <Input
                label="Ide Cerita"
                value={form.idea}
                onChange={(v) => updateForm("idea", v)}
                placeholder="Contoh: Seorang anak diam-diam bekerja untuk membeli hadiah ibunya..."
                textarea
              />

              <Input
                label="Karakter Utama"
                value={form.character}
                onChange={(v) => updateForm("character", v)}
                placeholder="Contoh: Pria Indonesia usia 25 tahun..."
                textarea
              />

              <Input
                label="Lokasi / Dunia Cerita"
                value={form.setting}
                onChange={(v) => updateForm("setting", v)}
                placeholder="Contoh: Rumah sederhana di sebuah desa..."
                textarea
              />

              <Select
                label="Genre"
                value={form.genre}
                onChange={(v) => updateForm("genre", v)}
                options={[
                  "Drama",
                  "Romantis",
                  "Inspiratif",
                  "Motivasi",
                  "Komedi",
                  "Misteri",
                  "Horor",
                  "Keluarga",
                  "Persahabatan",
                  "Sedih",
                ]}
              />

              <Select
                label="Nuansa Cerita"
                value={form.tone}
                onChange={(v) => updateForm("tone", v)}
                options={[
                  "Emosional",
                  "Mengharukan",
                  "Tegang",
                  "Hangat",
                  "Lucu",
                  "Misterius",
                  "Inspiratif",
                  "Menyentuh",
                  "Mengejutkan",
                ]}
              />

              <div className="grid grid-cols-2 gap-4">

                <Select
                  label="Durasi"
                  value={form.duration}
                  onChange={(v) => updateForm("duration", v)}
                  options={[
                    "15 detik",
                    "30 detik",
                    "45 detik",
                    "60 detik",
                    "90 detik",
                  ]}
                />

                <Select
                  label="Jumlah Adegan"
                  value={form.scenes}
                  onChange={(v) => updateForm("scenes", v)}
                  options={[
                    "3",
                    "4",
                    "5",
                    "6",
                    "8",
                    "10",
                  ]}
                />

              </div>

              <Select
                label="Rasio Video"
                value={form.ratio}
                onChange={(v) => updateForm("ratio", v)}
                options={[
                  "9:16",
                  "16:9",
                  "1:1",
                ]}
              />

              <Select
                label="Bahasa Output"
                value={form.language}
                onChange={(v) => updateForm("language", v)}
                options={[
                  "Bahasa Indonesia",
                  "English",
                ]}
              />

              <div className="flex gap-3 pt-2">

                <button
                  onClick={generate}
                  className="flex-1 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 active:scale-[0.99]"
                >
                  ✦ Buat Cerita
                </button>

                <button
                  onClick={reset}
                  className="rounded-xl border border-white/10 px-5 py-3.5 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
                >
                  Atur Ulang
                </button>

              </div>

            </div>
          </section>

          {/* OUTPUT */}
          <section>

            {!generated ? (

              <div className="flex min-h-[620px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.015]">

                <div className="max-w-sm px-6 text-center">

                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl">
                    📖
                  </div>

                  <h2 className="text-lg font-semibold">
                    Siap membuat cerita?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-white/35">
                    Masukkan ide cerita di sebelah kiri, lalu tekan
                    Buat Cerita untuk menghasilkan paket short story.
                  </p>

                </div>

              </div>

            ) : (

              <div className="space-y-4">

                <div className="mb-6 flex items-end justify-between">

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                      Hasil Generasi
                    </p>

                    <h2 className="mt-1 text-2xl font-bold">
                      Paket Short Story
                    </h2>
                  </div>

                  <button
                    onClick={() =>
                      copyText(
                        Object.values(output)
                          .filter(Boolean)
                          .join("\n\n--------------------\n\n")
                      )
                    }
                    className="rounded-xl border border-white/10 px-4 py-2 text-xs text-white/60 transition hover:bg-white/10 hover:text-white"
                  >
                    Salin Semua
                  </button>

                </div>

                <OutputCard
                  title="Konsep Short Story"
                  icon="💡"
                  text={output.concept}
                />

                <OutputCard
                  title="Hook"
                  icon="🪝"
                  text={output.hook}
                />

                <OutputCard
                  title="Karakter"
                  icon="👤"
                  text={output.character}
                />

                <OutputCard
                  title="Alur Cerita"
                  icon="📖"
                  text={output.storyline}
                />

                <OutputCard
                  title="Storyboard"
                  icon="🎬"
                  text={output.storyboard}
                />

                <OutputCard
                  title="Prompt Gambar"
                  icon="🖼️"
                  text={output.imagePrompt}
                />

                <OutputCard
                  title="Prompt Video Google Flow"
                  icon="🎥"
                  text={output.videoPrompt}
                />

                <OutputCard
                  title="Kunci Konsistensi"
                  icon="🔒"
                  text={output.consistency}
                />

                <OutputCard
                  title="Prompt Negatif"
                  icon="🚫"
                  text={output.negative}
                />

                <OutputCard
                  title="Voice Over"
                  icon="🎙️"
                  text={output.voice}
                />

                <OutputCard
                  title="Caption"
                  icon="📝"
                  text={output.caption}
                />

              </div>

            )}

          </section>

        </div>

        {/* FOOTER */}
        <footer className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/25">
          Driacom AI Prompt Studio · Short Story
        </footer>

      </div>
    </main>
  );
}
