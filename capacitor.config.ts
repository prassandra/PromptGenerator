import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.driacom.app',
  appName: 'Driacom',
  webDir: 'public',
  server: {
    url: 'https://app.driacom.com',
    cleartext: false,
    androidScheme: 'https',
  },
  android: {
    allowMixedContent: false,
  },
};

export default config;
