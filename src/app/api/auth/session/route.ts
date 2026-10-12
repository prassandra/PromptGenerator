import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const value = (await cookies()).get("driacom_session")?.value;

  if (!value) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }

  try {
    const session = JSON.parse(value);

    // ADMIN
    if (session.role === "admin") {
      return NextResponse.json({
        authenticated: true,
        user: {
          name: session.name || "Admin",
          plan: "PRO",
          role: "admin",
          status: "AKTIF",
          joinedAt: null,
          expiresAt: null,
        },
      });
    }

    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

    if (!key || !url || !session.supabaseUserId) {
      return NextResponse.json({
        authenticated: true,
        user: {
          name: session.name || "Driacom User",
          plan: "FREE",
          role: session.role || "member",
          status: "FREE",
          joinedAt: null,
          expiresAt: null,
        },
      });
    }

    const supabase = createClient(url, key, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const { data: profile, error } = await supabase
      .from("profiles")
      .select(
        "user_id, full_name, plan, pro_expires_at, created_at, updated_at"
      )
      .eq("user_id", session.supabaseUserId)
      .maybeSingle();

    if (error) {
      console.error("Driacom Session Profile Error:", error);

      return NextResponse.json({
        authenticated: true,
        user: {
          name: session.name || "Driacom User",
          plan: "FREE",
          role: session.role || "member",
          status: "FREE",
          joinedAt: null,
          expiresAt: null,
        },
      });
    }

    const isLifetime = profile?.plan === "PRO_LIFETIME";

    const expiresAt = profile?.pro_expires_at
      ? new Date(profile.pro_expires_at)
      : null;

    const isPro30D =
      profile?.plan === "PRO_30D" &&
      expiresAt !== null &&
      expiresAt.getTime() > Date.now();

    const isPro = isLifetime || isPro30D;

    let status = "FREE";

    if (isLifetime) {
      status = "AKTIF";
    } else if (isPro30D) {
      status = "AKTIF";
    } else if (
      profile?.plan === "PRO_30D" &&
      expiresAt !== null &&
      expiresAt.getTime() <= Date.now()
    ) {
      status = "EXPIRED";
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        name:
          profile?.full_name ||
          session.name ||
          "Driacom User",

        plan: isPro ? "PRO" : "FREE",

        role: session.role || "member",

        status,

        joinedAt: profile?.created_at || null,

        expiresAt: isLifetime
          ? null
          : profile?.pro_expires_at || null,
      },
    });
  } catch (error) {
    console.error("Driacom Session Error:", error);

    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }
}