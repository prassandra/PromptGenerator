# Ads implementation

- FREE web: AdSense responsive top/bottom manual slots + Auto Ads/vignette controlled by AdSense.
- FREE Android: AdMob adaptive bottom banner + opt-in rewarded ads.
- PRO: no ads.
- Rewarded token flow requires two completed rewarded ads before claiming +1 token.
- Production should enable AdMob SSV for server-side reward validation.


## Production IDs supplied by Driacom
- AdSense publisher: ca-pub-2212969526982215
- AdSense responsive slot: 5462390377
- AdMob Android App ID: ca-app-pub-2212969526982215~2908649186
- AdMob Banner: ca-app-pub-2212969526982215/5035380382
- AdMob Rewarded: ca-app-pub-2212969526982215/8607793884
- AdMob Interstitial: ca-app-pub-2212969526982215/1096135371

Reward item configured conceptually as `Token Generate`, amount 1 per rewarded completion; Driacom grants +1 token only after 2 rewarded completions.
