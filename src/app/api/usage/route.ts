import { NextResponse } from "next/server";
import { getUsageStatus, type PromptMenu } from "@/lib/usage";
const menus:PromptMenu[]=["animation","storytelling","affiliate"];
export async function GET(request:Request){try{const menu=new URL(request.url).searchParams.get("menu") as PromptMenu|null;if(!menu||!menus.includes(menu))return NextResponse.json({error:"Menu tidak valid."},{status:400});return NextResponse.json(await getUsageStatus(menu))}catch(e){console.error("Driacom Usage Error:",e);return NextResponse.json({error:"Gagal membaca kuota."},{status:500})}}
