# Driacom Android Fix 2

- Clears the WebView cookie jar once for build state version 2 before the remote app.driacom.com page loads.
- This prevents a stale `driacom_session` cookie from opening a fresh install/upgrade directly as an old admin/PRO account.
- After the one-time reset, normal login persistence is preserved.
- Android versionCode bumped to 2 / versionName 1.0.1.
- Production AdMob App ID and Banner Ad Unit are unchanged.
- Added detailed `DRIACOM_ADMOB` initialization/adapter logs for diagnosis.
