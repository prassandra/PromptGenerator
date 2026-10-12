@echo off
setlocal
cd /d "%~dp0"

echo ========================================
echo   DRIACOM ANDROID - DEBUG APK BUILD
echo ========================================

echo.
echo [1/4] Checking Node.js...
node -v >nul 2>&1
if errorlevel 1 (
  echo ERROR: Node.js belum terinstall / belum masuk PATH.
  echo Install Node.js LTS lalu buka CMD baru.
  pause
  exit /b 1
)

echo [2/4] Installing npm dependencies...
call npm install
if errorlevel 1 (
  echo ERROR: npm install gagal.
  pause
  exit /b 1
)

echo [3/4] Sync Capacitor Android...
call npx cap sync android
if errorlevel 1 (
  echo ERROR: Capacitor sync gagal.
  pause
  exit /b 1
)

echo [4/4] Building Driacom APK...
cd android
call gradlew.bat assembleDebug
if errorlevel 1 (
  echo ERROR: Gradle build gagal.
  echo Pastikan Android Studio/JDK 17 tersedia.
  pause
  exit /b 1
)

echo.
echo ========================================
echo BUILD BERHASIL!
echo APK:
echo android\app\build\outputs\apk\debug\app-debug.apk
echo ========================================
echo.
pause
endlocal
