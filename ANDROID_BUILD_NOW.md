# Driacom Android — Build Sekarang

Project ini adalah wrapper Capacitor ber-branding Driacom yang membuka production app:
`https://app.driacom.com`

## Cara paling mudah di Windows

1. Extract ZIP ini.
2. Pastikan **Node.js LTS** dan **Android Studio** sudah terpasang.
3. Buka folder project.
4. Double-click `BUILD_DRIACOM_ANDROID.bat`.
5. Tunggu sampai selesai.
6. APK debug berada di:

`android\app\build\outputs\apk\debug\app-debug.apk`

## Jika build gagal

- Pastikan Android Studio sudah pernah dibuka dan Android SDK terinstall.
- Gunakan JDK 17 dari Android Studio.
- Jika CMD masih memakai Java versi lain, set `JAVA_HOME` ke JDK 17 lalu jalankan script lagi.
- Jangan mengubah `server.url` production menjadi localhost.

## Branding

- App name: **Driacom**
- Application ID: **com.driacom.app**
- Version: **1.0.0**
- Production URL: **https://app.driacom.com**
- Launcher icon dan splash screen Driacom sudah disiapkan.

## Catatan

APK ini tidak menyimpan API key AI/Supabase service-role. API dan rahasia tetap berada di backend web Driacom.
