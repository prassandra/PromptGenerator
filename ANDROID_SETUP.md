# Driacom Android — Capacitor

This project keeps the existing Next.js app as the source of truth and wraps the production Driacom web app with Capacitor for Android.

## Architecture

Android APK/AAB -> Capacitor WebView -> https://app.driacom.com

Secrets and server-side API keys remain on the Next.js/Supabase backend. Do not put service-role keys or AI provider secrets in the Android app.

## Requirements on Windows

- Node.js LTS
- Android Studio
- Android SDK + platform tools
- JDK 17 (Android Studio's bundled JDK is recommended)

## First-time setup

From the project root:

```cmd
npm install
npx cap add android
npx cap sync android
npx cap open android
```

If the `android` folder already exists:

```cmd
npm install
npx cap sync android
npx cap open android
```

## Run on a connected device/emulator

```cmd
npm run android:run
```

## Build a debug APK

```cmd
npm run android:build
```

The debug APK will be under:

`android\app\build\outputs\apk\debug\app-debug.apk`

## Build a release AAB

Open the `android` folder in Android Studio and configure a release signing key. Then use **Build > Generate Signed Bundle / APK** and choose **Android App Bundle** for Google Play.

## Updating Driacom later

The Android shell points at `https://app.driacom.com`. Most Next.js/UI/backend changes can be deployed to the website without rebuilding the APK. Rebuild the Android app when native Android configuration, permissions, plugins, icon/splash, or other native capabilities change.

## Important

Do not switch the Capacitor `server.url` to localhost for a production APK. The Android app is intentionally pointed at the production Driacom domain.
