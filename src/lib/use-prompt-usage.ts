"use client";
import { useCallback, useEffect, useState } from "react";
export type PromptMenu = "animation" | "storytelling" | "affiliate";
export function usePromptUsage(menu: PromptMenu){
  const [status,setStatus]=useState<{plan:"FREE"|"PRO";used:number;remaining:number|null;unlimited:boolean;authenticated:boolean;bonusTokens?:number}|null>(null);
  const refresh=useCallback(async()=>{try{const r=await fetch(`/api/usage?menu=${menu}`,{cache:"no-store"});const d=await r.json();if(r.ok)setStatus(d)}catch{}},[menu]);
  useEffect(()=>{refresh()},[refresh]);
  return {status,refresh};
}
