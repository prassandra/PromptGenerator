# Driacom Ads / Rewarded Token Setup

## Web — AdSense (FREE only)
The app now loads AdSense only for FREE web users.

Configure:
- `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=pub-...`
- `NEXT_PUBLIC_ADSENSE_TOP_SLOT=...`
- `NEXT_PUBLIC_ADSENSE_BOTTOM_SLOT=...`

The configured responsive manual banner unit is `5462390377`. It is used for the top and bottom placements until a separate bottom slot is supplied. If you create a dedicated bottom slot later, set `NEXT_PUBLIC_ADSENSE_BOTTOM_SLOT`.

AdSense Auto Ads, including **vignette**, is controlled from the AdSense dashboard. The code does not force users to click an ad and does not simulate clicks.

## Android — AdMob (FREE only)
The project uses `@capacitor-community/admob` for native Android ads.

The FREE app shows:
- an adaptive banner at the bottom;
- a rewarded video when the user chooses **Tonton Iklan untuk +1 Token**.

Production IDs are now wired into the project. For development, do not use production ads; switch the IDs back to Google test IDs before local testing. Current production configuration:
- App ID: `ca-app-pub-2212969526982215~2908649186`
- Banner: `ca-app-pub-2212969526982215/5035380382`
- Rewarded: `ca-app-pub-2212969526982215/8607793884`
- Interstitial: `ca-app-pub-2212969526982215/1096135371`

The Android App ID and production Banner/Rewarded IDs are already wired. Interstitial is registered in configuration but is not automatically shown until a deliberate UX trigger is added:
- `NEXT_PUBLIC_ADMOB_BANNER_ID`
- `NEXT_PUBLIC_ADMOB_REWARDED_ID`
- `NEXT_PUBLIC_ADMOB_INTERSTITIAL_ID`

## Reward flow
FREE user reaches the normal prompt limit -> reward modal -> watch rewarded ad #1 -> rewarded ad #2 -> +1 bonus token.

The client now checks the AdMob rewarded result before counting each ad as completed.

For production monetization, enable and wire **AdMob server-side verification (SSV)** to the reward claim endpoint. Client-side reward callbacks alone can be spoofed; SSV adds protection against forged reward requests.

## Plan separation
PRO users receive no web AdSense and no native AdMob banner/reward prompts.

## Important
For any local/development testing, use Google test IDs. Production IDs should only be used after the app/site is ready for release and the ad inventory has been reviewed.
