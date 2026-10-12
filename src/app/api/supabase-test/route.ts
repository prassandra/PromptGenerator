import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { error } = await supabase
    .from("profiles")
    .select("id")
    .limit(1);

  if (error) {
    return NextResponse.json({
      connected: true,
      databaseReady: false,
      message: error.message,
    });
  }

  return NextResponse.json({
    connected: true,
    databaseReady: true,
  });
}