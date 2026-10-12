"use client";
import { useEffect,useState } from "react";
import { DriacomLanguage, LANGUAGE_STORAGE_KEY } from "@/lib/i18n";
export default function LanguageSwitcher({compact=false}:{compact?:boolean}){
 const [language,setLanguage]=useState<DriacomLanguage>("id");
 useEffect(()=>{const v=localStorage.getItem(LANGUAGE_STORAGE_KEY);if(v==="id"||v==="en")setLanguage(v);},[]);
 function change(next:DriacomLanguage){setLanguage(next);localStorage.setItem(LANGUAGE_STORAGE_KEY,next);document.documentElement.lang=next;window.dispatchEvent(new CustomEvent("driacom-language-change",{detail:next}));}
 return <label className={`flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-[#090e16]/95 px-3 py-2 text-xs font-bold text-zinc-300 backdrop-blur-xl ${compact?"":"shadow-[0_12px_35px_rgba(0,0,0,0.2)]"}`}><span>🌐</span><span className="hidden md:inline">{language==="id"?"Pilih Bahasa":"Choose Language"}</span><select value={language} onChange={e=>change(e.target.value as DriacomLanguage)} className="cursor-pointer bg-transparent text-xs font-black text-white outline-none" aria-label={language==="id"?"Pilih bahasa":"Choose language"}><option value="id" className="bg-[#090e16]">🇮🇩 Indonesia</option><option value="en" className="bg-[#090e16]">🇬🇧 English</option></select></label>;
}
