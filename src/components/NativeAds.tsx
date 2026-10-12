"use client";

import { useEffect } from "react";
import { Capacitor } from "@capacitor/core";

const PRODUCTION_BANNER_ID = process.env.NEXT_PUBLIC_ADMOB_BANNER_ID || "ca-app-pub-2212969526982215/5035380382";

export default function NativeAds({ plan }: { plan: "FREE" | "PRO" }) {
  useEffect(() => {
    if (plan !== "FREE" || !Capacitor.isNativePlatform()) return;

    let cancelled = false;
    let loadedListener: { remove: () => Promise<void> } | undefined;
    let failedListener: { remove: () => Promise<void> } | undefined;

    (async () => {
      try {
        const {
          AdMob,
          BannerAdSize,
          BannerAdPosition,
          BannerAdPluginEvents,
        } = await import("@capacitor-community/admob");

        loadedListener = await AdMob.addListener(
          BannerAdPluginEvents.Loaded,
          () => console.log("Driacom AdMob: production banner loaded")
        );
        failedListener = await AdMob.addListener(
          BannerAdPluginEvents.FailedToLoad,
          (error) => console.error("Driacom AdMob: production banner failed", error)
        );

        await AdMob.initialize();

        if (cancelled) return;

        await AdMob.showBanner({
          adId: PRODUCTION_BANNER_ID,
          adSize: BannerAdSize.BANNER,
          position: BannerAdPosition.BOTTOM_CENTER,
          // Keep the native banner clear of the Android gesture/navigation area.
          margin: 28,
        });
      } catch (error) {
        if (!cancelled) {
          console.error("Driacom AdMob: production banner initialization/show error", error);
        }
      }
    })();

    return () => {
      cancelled = true;
      loadedListener?.remove().catch(() => {});
      failedListener?.remove().catch(() => {});
      import("@capacitor-community/admob")
        .then(({ AdMob }) => AdMob.removeBanner())
        .catch(() => {});
    };
  }, [plan]);

  return null;
}
