package com.driacom.app;

import android.os.Bundle;
import android.webkit.CookieManager;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Clear any stale WebView cookies once after the native Activity has
        // been created. Do not delay super.onCreate(), because Capacitor's
        // lifecycle must be initialized immediately.
        CookieManager cookieManager = CookieManager.getInstance();
        cookieManager.removeAllCookies(value -> {
            cookieManager.flush();
            android.util.Log.d("DRIACOM_AUTH", "Initial stale WebView cookies cleared");
        });
    }
}
