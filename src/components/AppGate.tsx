"use client";
import { useEffect,useMemo,useState } from "react";
import { usePathname,useRouter } from "next/navigation";
import { DriacomLanguage,GATE_STORAGE_KEY,LANGUAGE_STORAGE_KEY,BLOG_URL,TIKTOK_URL,translateDocument } from "@/lib/i18n";

const BLOG_CLICKED = "driacom_blog_clicked_v3";
const TIKTOK_CLICKED = "driacom_tiktok_clicked_v3";

export default function AppGate({children}:{children:React.ReactNode}){
 const pathname=usePathname(); const router=useRouter();
 const [language,setLanguage]=useState<DriacomLanguage|null>(null);
 const [gateDone,setGateDone]=useState(false);
 const [blogClicked,setBlogClicked]=useState(false);
 const [tiktokClicked,setTiktokClicked]=useState(false);
 const [ready,setReady]=useState(false);
 const bypass=useMemo(()=>pathname.startsWith("/admin")||pathname.startsWith("/api")||pathname.startsWith("/_next")||pathname==="/favicon.ico",[pathname]);

 useEffect(()=>{
   const l=localStorage.getItem(LANGUAGE_STORAGE_KEY);
   if(l==="id"||l==="en")setLanguage(l);
   setGateDone(localStorage.getItem(GATE_STORAGE_KEY)==="true");
   setBlogClicked(localStorage.getItem(BLOG_CLICKED)==="true");
   setTiktokClicked(localStorage.getItem(TIKTOK_CLICKED)==="true");
   setReady(true);
 },[]);

 useEffect(()=>{
   if(!ready||bypass)return;
   const active=language||"id";
   document.documentElement.lang=active;
   translateDocument(active);
   const f=(e:Event)=>{
     const n=(e as CustomEvent<DriacomLanguage>).detail;
     if(n!=="id"&&n!=="en")return;
     setLanguage(n);
     document.documentElement.lang=n;
     translateDocument(n);
   };
   addEventListener("driacom-language-change",f);
   return()=>removeEventListener("driacom-language-change",f);
 },[ready,language,bypass]);

 useEffect(()=>{
   if(!ready||bypass||!language||!gateDone)return;
   const o=new MutationObserver(()=>translateDocument(language));
   o.observe(document.body,{childList:true,subtree:true});
   translateDocument(language);
   return()=>o.disconnect();
 },[ready,language,gateDone,bypass]);

 function choose(next:DriacomLanguage){
   localStorage.setItem(LANGUAGE_STORAGE_KEY,next);
   setLanguage(next);
   document.documentElement.lang=next;
   translateDocument(next);
   dispatchEvent(new CustomEvent("driacom-language-change",{detail:next}));
 }
 function markSocial(which:"blog"|"tiktok"){
   if(which==="blog"){localStorage.setItem(BLOG_CLICKED,"true");setBlogClicked(true);}
   else {localStorage.setItem(TIKTOK_CLICKED,"true");setTiktokClicked(true);}
 }
 function finish(){
   if(!blogClicked||!tiktokClicked)return;
   localStorage.setItem(GATE_STORAGE_KEY,"true");
   setGateDone(true);
   if(pathname==="/"||pathname==="/login")router.replace("/dashboard");
 }

 if(bypass||!ready)return <>{children}</>;
 if(!language)return <main className="flex min-h-screen items-center justify-center bg-[#050811] px-5 py-12 text-white"><section className="w-full max-w-xl rounded-[32px] border border-white/10 bg-[#090e16] p-7 text-center shadow-2xl sm:p-10"><img src="/driacom-logo.png" alt="Driacom" className="mx-auto h-20 w-20 object-contain"/><p className="mt-5 text-[10px] font-black tracking-[0.3em] text-amber-300">DRIACOM</p><h1 className="mt-3 text-3xl font-black sm:text-4xl">Choose Language / Pilih Bahasa</h1><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">Choose your language before entering the free Prompt Generator.</p><div className="mt-8 grid gap-3 sm:grid-cols-2"><button onClick={()=>choose("id")} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 text-left transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]"><span className="text-2xl">🇮🇩</span><span className="mt-2 block text-lg font-black">Indonesia</span><span className="mt-1 block text-xs text-zinc-500">Bahasa Indonesia</span></button><button onClick={()=>choose("en")} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 text-left transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]"><span className="text-2xl">🇬🇧</span><span className="mt-2 block text-lg font-black">English</span><span className="mt-1 block text-xs text-zinc-500">English</span></button></div></section></main>;
 if(!gateDone){
   const en=language==="en"; const unlocked=blogClicked&&tiktokClicked;
   return <main className="flex min-h-screen items-center justify-center bg-[#050811] px-5 py-12 text-white"><section className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-[#090e16] p-7 text-center shadow-2xl sm:p-10"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-pink-400/20 bg-pink-400/[0.06] text-3xl">❤️</div><p className="mt-6 text-[10px] font-black tracking-[0.28em] text-amber-300">DRIACOM</p><h1 className="mt-2 text-3xl font-black sm:text-4xl">{en?"Support Driacom":"Dukung Driacom"}</h1><p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-zinc-400">{en?"To use the full Prompt Generator for free, please follow our blog and TikTok account first.":"Untuk menggunakan seluruh Prompt Generator secara gratis, silakan ikuti blog dan akun TikTok kami terlebih dahulu."}</p><div className="mt-8 grid gap-3 sm:grid-cols-2"><a href={BLOG_URL} target="_blank" rel="noopener noreferrer" onClick={()=>markSocial("blog")} className={`rounded-2xl border px-5 py-4 text-sm font-black transition ${blogClicked?"border-emerald-400/40 bg-emerald-400/[0.08] text-emerald-200":"border-white/10 bg-white/[0.04] hover:border-amber-300/30"}`}>{blogClicked?(en?"✓ Blog Opened":"✓ Blog Sudah Dibuka"):(en?"Follow Our Blog ↗":"Ikuti Blog Kami ↗")}</a><a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" onClick={()=>markSocial("tiktok")} className={`rounded-2xl border px-5 py-4 text-sm font-black transition ${tiktokClicked?"border-emerald-400/40 bg-emerald-400/[0.08] text-emerald-200":"border-white/10 bg-white/[0.04] hover:border-pink-300/30"}`}>{tiktokClicked?(en?"✓ TikTok Opened":"✓ TikTok Sudah Dibuka"):(en?"Follow TikTok ↗":"Ikuti TikTok ↗")}</a></div><button disabled={!unlocked} onClick={finish} className={`mt-6 w-full rounded-2xl px-5 py-4 text-sm font-black text-white shadow-xl transition ${unlocked?"bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 hover:brightness-110":"cursor-not-allowed bg-zinc-800 text-zinc-500 opacity-70"}`}>{en?"I've Followed Both — Continue →":"Saya Sudah Follow Keduanya — Lanjut →"}</button><p className="mt-4 text-[11px] leading-5 text-zinc-600">{en?"Please follow to continue to the workspace.":"Silakan follow untuk melanjutkan ke halaman workspace."}</p></section></main>
 }
 return <>{children}</>;
}
