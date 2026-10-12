# Driacom Mobile Layout Fix

Perbaikan utama pada workspace Animation, Storytelling, dan Affiliate:

- Layout utama sekarang `column` di mobile dan kembali `row` mulai breakpoint desktop.
- Mobile header/sidebar tidak lagi menjadi kolom yang berdampingan dengan workspace.
- Menu navigasi mobile memakai tombol hamburger dan drawer/sidebar overlay.
- Header workspace dibuat responsif agar profil akun tidak bertabrakan dengan judul.
- Global horizontal overflow pada `html/body` dibatasi agar tidak muncul halaman yang melebar di HP.

## Deploy

Jalankan dari folder project:

```bash
npm install
npm run deploy
```

File environment lokal (`.env.local` / `.dev.vars`) tidak disertakan dalam paket revisi ini. Gunakan file environment yang sudah ada di project lokal Anda.
