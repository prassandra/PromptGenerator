(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/generators/animation/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimationGeneratorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$prompt$2d$usage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-prompt-usage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PremiumSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PremiumSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AccountBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AccountBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorkspaceBackButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WorkspaceBackButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RewardTokenModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RewardTokenModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prompts$2f$animation$2f$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prompts/animation/defaults.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const inputClass = "w-full rounded-2xl border border-white/15 bg-[#12151c] px-5 py-4 text-[16px] font-medium text-white outline-none transition placeholder:text-zinc-400 focus:border-cyan-400/70 focus:bg-[#151922]";
const textareaClass = "w-full resize-none rounded-2xl border border-white/15 bg-[#12151c] px-5 py-4 text-[16px] leading-7 font-medium text-white outline-none transition placeholder:text-zinc-400 focus:border-cyan-400/70 focus:bg-[#151922]";
const selectClass = "w-full rounded-2xl border border-white/15 bg-[#12151c] px-5 py-4 text-[16px] font-medium text-white outline-none transition focus:border-cyan-400/70";
const labelClass = "mb-2.5 block text-[15px] font-bold text-zinc-100";
const optionButtonClass = "rounded-2xl border border-white/15 bg-[#11141a] px-4 py-4 text-[15px] font-bold text-zinc-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-white";
const activeOptionButtonClass = "rounded-2xl border border-cyan-400/70 bg-cyan-400/15 px-4 py-4 text-[15px] font-bold text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.08)]";
const ANIMATION_IDEA_PLACEHOLDERS = {
    "ASMR": "Contoh: Memotong sabun transparan dengan tekstur lembut dan suara potongan yang memuaskan...",
    "Objek Bicara": "Contoh: Sebuah jam dinding tua mulai mengeluh karena selalu diabaikan pemiliknya...",
    "Fakta Unik": "Contoh: Fakta mengejutkan tentang bagaimana gurita bisa mengubah warna tubuhnya...",
    "Edukasi Visual": "Contoh: Menjelaskan bagaimana hujan terbentuk dengan visual yang mudah dipahami...",
    "Konten Hewan": "Contoh: Seekor anak kucing penasaran menjelajahi rumah dan menemukan sesuatu yang tidak terduga...",
    "What If": "Contoh: Bagaimana jika manusia bisa hidup tanpa tidur selama 30 hari?...",
    "Eksperimen & Sains": "Contoh: Apa yang terjadi ketika sebuah benda dimasukkan ke dalam cairan yang sangat dingin?...",
    "Miniatur": "Contoh: Sebuah kedai kopi mini mulai hidup ketika seluruh kota sudah tertidur...",
    "Petualangan": "Contoh: Seorang anak menemukan pintu rahasia di tengah hutan dan memutuskan untuk membukanya..."
};
function getAnimationIdeaPlaceholder(contentType) {
    return ANIMATION_IDEA_PLACEHOLDERS[contentType] || "Contoh: Tulis ide singkat tentang cerita atau konsep animasi yang ingin kamu buat...";
}
/* =========================================================
   CHARACTER HELPERS
   ========================================================= */ const createCharacter = (index)=>({
        id: `CHAR-${String(index + 1).padStart(2, "0")}`,
        name: index === 0 ? "Karakter Utama" : `Karakter ${index + 1}`,
        role: index === 0 ? "Protagonis" : "Supporting Character",
        description: "",
        age: "",
        gender: "",
        appearance: "",
        face: "",
        hair: "",
        skin: "",
        body: "",
        wardrobe: "",
        accessories: "",
        personality: "",
        expression: "",
        pose: "",
        visualSignature: ""
    });
const buildCharacters = (count)=>Array.from({
        length: count
    }, (_, index)=>createCharacter(index));
/* =========================================================
   SECTION TITLE
   ========================================================= */ function SectionTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "f02f9012c31ef6fc214386639b055f35741f59170ade3880bd883d90ef4ed7bd") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f02f9012c31ef6fc214386639b055f35741f59170ade3880bd883d90ef4ed7bd";
    }
    const { title, description } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold tracking-tight text-white sm:text-[22px]",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== description) {
        t2 = description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-[15px] leading-6 text-zinc-400",
            children: description
        }, void 0, false, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 107,
            columnNumber: 24
        }, this) : null;
        $[3] = description;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-5",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_c = SectionTitle;
function CustomDropdown(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "f02f9012c31ef6fc214386639b055f35741f59170ade3880bd883d90ef4ed7bd") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f02f9012c31ef6fc214386639b055f35741f59170ade3880bd883d90ef4ed7bd";
    }
    const { value, options, onChange, label } = t0;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== label) {
        t1 = label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 141,
            columnNumber: 18
        }, this) : null;
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "CustomDropdown[<button>.onClick]": ()=>setOpen(_CustomDropdownButtonOnClickSetOpen)
        })["CustomDropdown[<button>.onClick]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== value) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: value
        }, void 0, false, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[4] = value;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = `text-cyan-300 transition ${open ? "rotate-180" : ""}`;
    let t5;
    if ($[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t4,
            children: "⌄"
        }, void 0, false, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 167,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t3 || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t2,
            className: "flex w-full items-center justify-between rounded-2xl border border-white/15 bg-[#12151c] px-5 py-4 text-left text-[16px] font-bold text-white transition hover:border-cyan-400/45",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 175,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== onChange || $[12] !== open || $[13] !== options || $[14] !== value) {
        t7 = open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-label": "Tutup pilihan",
                    className: "fixed inset-0 z-40 cursor-default",
                    onClick: {
                        "CustomDropdown[<button>.onClick]": ()=>setOpen(false)
                    }["CustomDropdown[<button>.onClick]"]
                }, void 0, false, {
                    fileName: "[project]/src/app/generators/animation/page.tsx",
                    lineNumber: 184,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-0 right-0 top-[calc(100%+8px)] z-50 max-h-80 overflow-auto rounded-2xl border border-white/10 bg-[#0b1019] p-2 shadow-2xl shadow-black/40",
                    children: options.map({
                        "CustomDropdown[options.map()]": (option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: {
                                    "CustomDropdown[options.map() > <button>.onClick]": ()=>{
                                        onChange(option);
                                        setOpen(false);
                                    }
                                }["CustomDropdown[options.map() > <button>.onClick]"],
                                className: `w-full rounded-xl px-4 py-3 text-left text-sm font-bold transition ${option === value ? "bg-cyan-400/12 text-cyan-200" : "text-zinc-300 hover:bg-white/[0.05] hover:text-white"}`,
                                children: option
                            }, option, false, {
                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                lineNumber: 187,
                                columnNumber: 54
                            }, this)
                    }["CustomDropdown[options.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/app/generators/animation/page.tsx",
                    lineNumber: 186,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 184,
            columnNumber: 17
        }, this) : null;
        $[11] = onChange;
        $[12] = open;
        $[13] = options;
        $[14] = value;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t1 || $[17] !== t6 || $[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t1,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 204,
            columnNumber: 10
        }, this);
        $[16] = t1;
        $[17] = t6;
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    return t8;
}
_s(CustomDropdown, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c1 = CustomDropdown;
/* =========================================================
   PROMPT CARD
   ========================================================= */ function _CustomDropdownButtonOnClickSetOpen(v) {
    return !v;
}
function PromptCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "f02f9012c31ef6fc214386639b055f35741f59170ade3880bd883d90ef4ed7bd") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f02f9012c31ef6fc214386639b055f35741f59170ade3880bd883d90ef4ed7bd";
    }
    const { icon, title, text, copyId, copied, onCopy } = t0;
    let t1;
    if ($[1] !== icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-lg",
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 239,
            columnNumber: 10
        }, this);
        $[1] = icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "truncate text-base font-bold text-white",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 247,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-w-0 items-center gap-3",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 255,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== copyId || $[9] !== onCopy || $[10] !== text) {
        t4 = ({
            "PromptCard[<button>.onClick]": ()=>onCopy(text, copyId)
        })["PromptCard[<button>.onClick]"];
        $[8] = copyId;
        $[9] = onCopy;
        $[10] = text;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    const t5 = !text;
    const t6 = copied === copyId ? "\u2713 Tersalin" : "Copy";
    let t7;
    if ($[12] !== t4 || $[13] !== t5 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t4,
            disabled: t5,
            className: "shrink-0 rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-2.5 text-sm font-bold text-cyan-200 transition hover:bg-cyan-400/20 disabled:opacity-30",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 278,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t3 || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4",
            children: [
                t3,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 288,
            columnNumber: 10
        }, this);
        $[16] = t3;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    const t9 = text || "Belum ada prompt.";
    let t10;
    if ($[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
            className: "max-h-[520px] overflow-auto whitespace-pre-wrap break-words p-5 font-mono text-[14px] leading-7 text-zinc-300",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t10 || $[22] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1019]",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t8;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    return t11;
}
_c2 = PromptCard;
/* =========================================================
   SCENE CARD
   ========================================================= */ function SceneCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "f02f9012c31ef6fc214386639b055f35741f59170ade3880bd883d90ef4ed7bd") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f02f9012c31ef6fc214386639b055f35741f59170ade3880bd883d90ef4ed7bd";
    }
    const { scene, copied, onCopy } = t0;
    const t1 = String(scene.sceneNumber);
    let t2;
    if ($[1] !== t1) {
        t2 = t1.padStart(2, "0");
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const number = t2;
    let t3;
    if ($[3] !== number) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-bold uppercase tracking-[0.2em] text-cyan-300",
            children: [
                "Scene ",
                number
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 345,
            columnNumber: 10
        }, this);
        $[3] = number;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== scene.title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mt-1.5 text-xl font-bold text-white",
            children: scene.title
        }, void 0, false, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 353,
            columnNumber: 10
        }, this);
        $[5] = scene.title;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== scene.purpose) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 max-w-2xl text-[14px] leading-6 text-zinc-400",
            children: scene.purpose
        }, void 0, false, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 361,
            columnNumber: 10
        }, this);
        $[7] = scene.purpose;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t3 || $[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 369,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-2 text-xs font-bold text-cyan-200",
            children: "Image → Video"
        }, void 0, false, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 379,
            columnNumber: 10
        }, this);
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-white/[0.07] bg-[#0d121b] px-5 py-5 sm:px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
                children: [
                    t6,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/generators/animation/page.tsx",
                lineNumber: 386,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 386,
            columnNumber: 10
        }, this);
        $[14] = t6;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    const t9 = `Image Prompt — Scene ${number}`;
    const t10 = `scene-${scene.sceneNumber}-image`;
    let t11;
    if ($[16] !== copied || $[17] !== onCopy || $[18] !== scene.imagePrompt || $[19] !== t10 || $[20] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptCard, {
            icon: "\uD83D\uDDBC\uFE0F",
            title: t9,
            text: scene.imagePrompt,
            copyId: t10,
            copied: copied,
            onCopy: onCopy
        }, void 0, false, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        $[16] = copied;
        $[17] = onCopy;
        $[18] = scene.imagePrompt;
        $[19] = t10;
        $[20] = t9;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    const t12 = `Video Prompt — Scene ${number}`;
    const t13 = `scene-${scene.sceneNumber}-video`;
    let t14;
    if ($[22] !== copied || $[23] !== onCopy || $[24] !== scene.videoPrompt || $[25] !== t12 || $[26] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptCard, {
            icon: "\uD83C\uDFA5",
            title: t12,
            text: scene.videoPrompt,
            copyId: t13,
            copied: copied,
            onCopy: onCopy
        }, void 0, false, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 410,
            columnNumber: 11
        }, this);
        $[22] = copied;
        $[23] = onCopy;
        $[24] = scene.videoPrompt;
        $[25] = t12;
        $[26] = t13;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== t11 || $[29] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 p-5 sm:p-6",
            children: [
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 422,
            columnNumber: 11
        }, this);
        $[28] = t11;
        $[29] = t14;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== t15 || $[32] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0f17]",
            children: [
                t8,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/generators/animation/page.tsx",
            lineNumber: 431,
            columnNumber: 11
        }, this);
        $[31] = t15;
        $[32] = t8;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    return t16;
}
_c3 = SceneCard;
function AnimationGeneratorPage() {
    _s1();
    var _s = __turbopack_context__.k.signature();
    const { status: usage, refresh: refreshUsage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$prompt$2d$usage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePromptUsage"])("animation");
    const usageBlocked = Boolean(usage && !usage.unlimited && (usage.remaining ?? 0) <= 0 && (usage.bonusTokens ?? 0) <= 0);
    const [rewardOpen, setRewardOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const initialForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prompts$2f$animation$2f$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDefaultAnimationForm"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AnimationGeneratorPage.useState": ()=>({
                ...initialForm,
                concept: "",
                scenes: "4",
                duration: "8 detik",
                characters: buildCharacters(1)
            })
    }["AnimationGeneratorPage.useState"]);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prompts$2f$animation$2f$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyAnimationOutput"]);
    const [generated, setGenerated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aiLoading, setAiLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aiError, setAiError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [genre, setGenre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Petualangan");
    const [characterCount, setCharacterCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [durationPerScene, setDurationPerScene] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("8 detik");
    const [ratio, setRatio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("9:16");
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Bahasa Indonesia");
    const [audioMode, setAudioMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Narasi + BGM + SFX");
    const [speakerMode, setSpeakerMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Ada karakter yang bicara");
    const [ideaLoading, setIdeaLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ideaFocused, setIdeaFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ideaOptions, setIdeaOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ideaError, setIdeaError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    /* =======================================================
     FORM UPDATE
     ======================================================= */ const updateForm = (key, value)=>{
        setForm((previous)=>({
                ...previous,
                [key]: value
            }));
    };
    const selectedSceneCount = Math.max(1, Math.min(10, Number(form.scenes) || 1));
    /* =======================================================
     AI IDEA GENERATOR
     ======================================================= */ const generateIdea = async ()=>{
        // Ide boleh kosong: setelah user memilih Jenis Konten,
        // Driacom harus tetap bisa membuat saran ide berdasarkan jenis tersebut.
        const keyword = String(form.concept || "").trim();
        try {
            setIdeaLoading(true);
            setIdeaError("");
            setIdeaOptions([]);
            const response = await fetch("/api/animation-ideas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    keyword,
                    genre,
                    animationStyle: form.animationStyle,
                    language
                })
            });
            const data = await response.json();
            if (!response.ok || !data.success) {
                throw new Error(data.error || "Driacom gagal membuat pilihan ide.");
            }
            const ideas = Array.isArray(data.ideas) ? data.ideas : [];
            if (!ideas.length) {
                throw new Error("Belum ada pilihan ide yang diterima dari Gemini.");
            }
            setIdeaOptions(ideas);
            setIdeaFocused(true);
        } catch (error) {
            console.error("Driacom AI Idea Error:", error);
            setIdeaError(error instanceof Error ? error.message : "Driacom belum berhasil membuat pilihan ide. Coba lagi.");
        } finally{
            setIdeaLoading(false);
        }
    };
    const useIdea = (idea)=>{
        updateForm("concept", idea.concept);
        updateForm("storyBlueprint", idea.storyBlueprint);
        setIdeaOptions([]);
        setIdeaError("");
        setIdeaFocused(true);
        window.setTimeout(()=>{
            document.getElementById("idea-input")?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 50);
    };
    /* =======================================================
     CHARACTER COUNT
     ======================================================= */ const handleCharacterCount = (count)=>{
        setCharacterCount(count);
        updateForm("characters", buildCharacters(count));
    };
    /* =======================================================
     GENERATE
     ======================================================= */ const handleGenerate = async ()=>{
        if (usageBlocked) {
            setRewardOpen(true);
            return;
        }
        const concept = String(form.concept || "").trim();
        if (!concept) {
            setIdeaFocused(true);
            document.getElementById("idea-input")?.focus();
            return;
        }
        const finalForm = {
            ...form,
            concept,
            referenceStory: form.referenceStory || "",
            genre,
            ratio,
            language,
            duration: durationPerScene,
            scenes: String(selectedSceneCount),
            characters: buildCharacters(characterCount),
            character: characterCount === 1 ? "Buat satu karakter utama yang paling sesuai dengan konsep, genre, dan gaya visual." : `Buat ${characterCount} karakter berbeda yang relevan dengan cerita.`,
            characterDesign: `Buat seluruh desain karakter berdasarkan konsep cerita, genre ${genre}, dan gaya visual ${form.animationStyle}.`,
            world: `Bangun dunia visual berdasarkan konsep cerita, genre ${genre}, gaya visual ${form.animationStyle}, ratio ${ratio}, dan bahasa ${language}.`,
            action: "Tentukan aksi konkret setiap scene berdasarkan perkembangan cerita.",
            expression: speakerMode === "Ada narator saja" ? "Gunakan ekspresi visual yang kuat untuk mendukung narasi." : "Gunakan ekspresi karakter yang natural dan sesuai perkembangan cerita.",
            audio: audioMode,
            speakerMode
        };
        try {
            setAiLoading(true);
            setAiError("");
            setGenerated(false);
            const response_0 = await fetch("/api/animation-gemini", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(finalForm)
            });
            const responseText = await response_0.text();
            let data_0;
            try {
                data_0 = responseText ? JSON.parse(responseText) : {};
            } catch  {
                const preview = responseText.trim().slice(0, 500);
                throw new Error(`Server Driacom mengembalikan respons yang bukan JSON (HTTP ${response_0.status}).` + (preview ? ` Respons: ${preview}` : " Respons server kosong."));
            }
            if (!response_0.ok || !data_0.success) {
                throw new Error(data_0.error || `Gemini gagal membuat prompt (HTTP ${response_0.status}).`);
            }
            if (!data_0.output) {
                throw new Error("Driacom tidak menerima output Animation dari server.");
            }
            setResult(data_0.output);
            setGenerated(true);
            await refreshUsage();
            window.setTimeout(()=>{
                document.getElementById("hasil-output")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 100);
        } catch (error_0) {
            console.error("Driacom Gemini Animation Error:", error_0);
            setGenerated(false);
            // Jangan tampilkan detail teknis/API kepada user.
            // Detail tetap dicatat di console untuk debugging development.
            setAiError("Driacom gagal meracik prompt karena sedang banyak yang menggunakan Driacom. Coba lagi beberapa saat.");
        } finally{
            setAiLoading(false);
        }
    };
    /* =======================================================
     RESET
     ======================================================= */ const reset = ()=>{
        const resetForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prompts$2f$animation$2f$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDefaultAnimationForm"])();
        setForm({
            ...resetForm,
            concept: "",
            scenes: "4",
            duration: "8 detik",
            characters: buildCharacters(1)
        });
        updateForm("referenceStory", "");
        setGenre("Petualangan");
        setCharacterCount(1);
        setDurationPerScene("8 detik");
        setRatio("9:16");
        setLanguage("Bahasa Indonesia");
        setAudioMode("Narasi + BGM + SFX");
        setSpeakerMode("Ada karakter yang bicara");
        setResult(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prompts$2f$animation$2f$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyAnimationOutput"]);
        setGenerated(false);
        setAiLoading(false);
        setAiError("");
        setCopied("");
        setIdeaFocused(false);
        setIdeaOptions([]);
        setIdeaError("");
    };
    /* =======================================================
     COPY
     ======================================================= */ const copyText = async (text, id)=>{
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
            setCopied(id);
            window.setTimeout(()=>{
                setCopied("");
            }, 1800);
        } catch  {
            setCopied("");
        }
    };
    const scenes = result.scenePrompts || [];
    /* =======================================================
     RENDER
     ======================================================= */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen overflow-x-hidden bg-[#050811] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.045] blur-[90px]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 691,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -right-40 top-[25%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.04] blur-[95px]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 693,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-[35%] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.02] blur-[90px]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 695,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/generators/animation/page.tsx",
                lineNumber: 690,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex min-h-screen max-w-[1540px] flex-col lg:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PremiumSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        active: "animation"
                    }, void 0, false, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 699,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative min-w-0 flex-1 px-5 sm:px-8 lg:px-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                className: "sticky top-0 z-40 -mx-5 mb-8 border-b border-white/[0.07] bg-[#050811]/95 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300",
                                                    children: "Driacom — Prompt AI Generator"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 706,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "mt-1 truncate font-serif text-2xl font-black tracking-tight text-white sm:text-3xl",
                                                    children: "Animation"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 707,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 hidden text-sm text-zinc-500 sm:block",
                                                    children: "Ceritakan ide kamu. Detail produksi disusun otomatis oleh Driacom."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 708,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                            lineNumber: 705,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-end gap-2 self-end sm:self-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorkspaceBackButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 88
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    compact: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 111
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AccountBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 139
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                            lineNumber: 710,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                    lineNumber: 704,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                lineNumber: 703,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-7 lg:grid-cols-[440px_minmax(0,1fr)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "h-fit rounded-[28px] border border-white/[0.09] bg-gradient-to-br from-[#0b1019] to-[#080c14] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-7",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "mt-1 text-2xl font-bold text-white",
                                                        children: "Buat Animasi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 723,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-[16px] leading-7 text-zinc-300",
                                                        children: "Kamu cukup menentukan arah cerita. Detail produksi dikerjakan otomatis oleh Driacom."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 727,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                lineNumber: 722,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                                disabled: aiLoading,
                                                "aria-busy": aiLoading,
                                                className: "space-y-7 disabled:opacity-90",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                                title: "Jenis Konten Animasi",
                                                                description: "Satu engine untuk berbagai format. Driacom menyesuaikan cara membuat prompt berdasarkan pilihan ini."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 739,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomDropdown, {
                                                                value: genre,
                                                                onChange: (value_0)=>{
                                                                    setGenre(value_0);
                                                                    setIdeaOptions([]);
                                                                    setIdeaError("");
                                                                },
                                                                options: [
                                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prompts$2f$animation$2f$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMATION_CONTENT_TYPES"]
                                                                ],
                                                                label: "Jenis Konten Animasi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 741,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 738,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                                title: "Ide / Topik",
                                                                description: `Jenis konten: ${genre}. Tulis ide singkat atau minta Driacom mencarikannya.`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 750,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                id: "idea-input",
                                                                value: String(form.concept || ""),
                                                                onFocus: ()=>setIdeaFocused(true),
                                                                onBlur: ()=>{
                                                                    if (!String(form.concept || "").trim()) {
                                                                        setIdeaFocused(false);
                                                                    }
                                                                },
                                                                onChange: (event)=>{
                                                                    updateForm("concept", event.target.value);
                                                                    // A manual story edit invalidates the hidden AI Story Blueprint.
                                                                    updateForm("storyBlueprint", undefined);
                                                                },
                                                                rows: 5,
                                                                placeholder: ideaFocused ? "" : getAnimationIdeaPlaceholder(genre),
                                                                className: textareaClass
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 752,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: generateIdea,
                                                                disabled: ideaLoading,
                                                                className: "mt-3 w-full rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.08] px-4 py-4 text-[15px] font-bold text-cyan-200 transition hover:bg-cyan-400/[0.15] disabled:opacity-50",
                                                                children: ideaLoading ? "✦ Driacom sedang mencari ide..." : "✦ AI Driacom — Bantu Buat Ide"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 762,
                                                                columnNumber: 17
                                                            }, this),
                                                            ideaError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 rounded-2xl border border-red-400/20 bg-red-400/[0.06] p-4 text-[14px] font-semibold leading-6 text-red-200",
                                                                children: ideaError
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 766,
                                                                columnNumber: 30
                                                            }, this) : null,
                                                            ideaOptions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[14px] font-bold text-cyan-200",
                                                                                children: "✦ Pilihan Ide Driacom"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 772,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mt-1 text-[13px] leading-5 text-zinc-400",
                                                                                children: "Pilih satu ide. Driacom akan memasukkannya ke Ide / Topik."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 775,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 771,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    ideaOptions.map((idea_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: _s(()=>{
                                                                                _s();
                                                                                return useIdea(idea_0);
                                                                            }, "ycXRWMQCItJn3PemKzn2/r6eR1I=", false, function() {
                                                                                return [
                                                                                    useIdea
                                                                                ];
                                                                            }),
                                                                            className: "w-full rounded-2xl border border-white/12 bg-[#11141a] p-4 text-left transition hover:border-cyan-400/50 hover:bg-cyan-400/[0.06]",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10 text-sm font-bold text-cyan-200",
                                                                                        children: index + 1
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                        lineNumber: 782,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "min-w-0",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[15px] font-bold text-white",
                                                                                                children: idea_0.title
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                                lineNumber: 786,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            idea_0.hook ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "mt-1 text-[13px] font-semibold leading-5 text-cyan-200",
                                                                                                children: idea_0.hook
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                                lineNumber: 789,
                                                                                                columnNumber: 44
                                                                                            }, this) : null,
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "mt-2 text-[14px] leading-6 text-zinc-300",
                                                                                                children: idea_0.concept
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                                lineNumber: 792,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "mt-3 text-[12px] font-bold uppercase tracking-[0.14em] text-zinc-500",
                                                                                                children: "Klik untuk gunakan ide ini"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                                lineNumber: 795,
                                                                                                columnNumber: 29
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                        lineNumber: 785,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 781,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, `${idea_0.title}-${index}`, false, {
                                                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                            lineNumber: 780,
                                                                            columnNumber: 57
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 770,
                                                                columnNumber: 43
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 749,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                                title: "Gaya Visual",
                                                                description: "Driacom menyesuaikan seluruh desain visual."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 806,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomDropdown, {
                                                                value: form.animationStyle,
                                                                onChange: (value_1)=>updateForm("animationStyle", value_1),
                                                                options: [
                                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prompts$2f$animation$2f$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMATION_VISUAL_STYLES"]
                                                                ],
                                                                label: "Gaya Visual"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 808,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 805,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                                title: "Jumlah Karakter",
                                                                description: "Driacom membuat identitas karakter otomatis."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 813,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-5 gap-2.5",
                                                                children: [
                                                                    1,
                                                                    2,
                                                                    3,
                                                                    4,
                                                                    5
                                                                ].map((count_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleCharacterCount(count_0),
                                                                        className: characterCount === count_0 ? activeOptionButtonClass : optionButtonClass,
                                                                        children: count_0
                                                                    }, count_0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 816,
                                                                        columnNumber: 51
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 815,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] p-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[15px] font-bold leading-6 text-cyan-100",
                                                                    children: "✓ Driacom membuat nama, wajah, pakaian, kepribadian, proporsi, aksesori, dan identitas visual karakter."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                    lineNumber: 822,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 821,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 812,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                                title: "Struktur Video",
                                                                description: "Atur scene, durasi, ratio, dan bahasa."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 834,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-white/12 bg-[#11141a] p-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between gap-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[15px] font-bold text-zinc-100",
                                                                                        children: "Jumlah Scene"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                        lineNumber: 839,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "mt-1 text-[14px] text-zinc-400",
                                                                                        children: "1 sampai 10 scene"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                        lineNumber: 843,
                                                                                        columnNumber: 23
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 838,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex h-12 min-w-14 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 text-xl font-bold text-cyan-200",
                                                                                children: selectedSceneCount
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 848,
                                                                                columnNumber: 21
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 837,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "1",
                                                                        max: "10",
                                                                        step: "1",
                                                                        value: selectedSceneCount,
                                                                        onChange: (event_0)=>updateForm("scenes", event_0.target.value),
                                                                        className: "mt-5 w-full accent-cyan-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 853,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2 flex justify-between text-[13px] font-bold text-zinc-500",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 856,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 857,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "10"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 858,
                                                                                columnNumber: 21
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 855,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 836,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: labelClass,
                                                                        children: "Durasi per Scene"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 864,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-4 gap-2",
                                                                        children: [
                                                                            "4 detik",
                                                                            "6 detik",
                                                                            "8 detik",
                                                                            "10 detik"
                                                                        ].map((duration)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>setDurationPerScene(duration),
                                                                                className: durationPerScene === duration ? activeOptionButtonClass : optionButtonClass,
                                                                                children: duration.replace(" detik", "s")
                                                                            }, duration, false, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 869,
                                                                                columnNumber: 84
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 868,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 863,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: labelClass,
                                                                        children: "Ratio Video"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 877,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-3 gap-2",
                                                                        children: [
                                                                            "9:16",
                                                                            "16:9",
                                                                            "1:1"
                                                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>setRatio(item),
                                                                                className: ratio === item ? activeOptionButtonClass : optionButtonClass,
                                                                                children: item
                                                                            }, item, false, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 882,
                                                                                columnNumber: 58
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 881,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 876,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: labelClass,
                                                                        children: "Bahasa"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 890,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomDropdown, {
                                                                        value: language,
                                                                        onChange: setLanguage,
                                                                        options: [
                                                                            "Bahasa Indonesia",
                                                                            "English",
                                                                            "Bahasa Melayu",
                                                                            "日本語",
                                                                            "한국어"
                                                                        ],
                                                                        label: "Bahasa"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 894,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 889,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 833,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                                title: "Audio",
                                                                description: "Pilih elemen suara yang digunakan."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 900,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2.5",
                                                                children: [
                                                                    "Narasi + BGM + SFX",
                                                                    "Narasi + BGM",
                                                                    "Narasi + SFX",
                                                                    "BGM + SFX",
                                                                    "Hanya Narasi"
                                                                ].map((item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setAudioMode(item_0),
                                                                        className: `w-full text-left ${audioMode === item_0 ? activeOptionButtonClass : optionButtonClass}`,
                                                                        children: item_0
                                                                    }, item_0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 903,
                                                                        columnNumber: 118
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 902,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 899,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                                title: "Siapa yang Berbicara?",
                                                                description: "Tentukan sumber suara cerita."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 911,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2.5",
                                                                children: [
                                                                    "Ada karakter yang bicara",
                                                                    "Ada narator saja",
                                                                    "Ada karakter + narator"
                                                                ].map((item_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setSpeakerMode(item_1),
                                                                        className: `w-full text-left ${speakerMode === item_1 ? activeOptionButtonClass : optionButtonClass}`,
                                                                        children: item_1
                                                                    }, item_1, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 914,
                                                                        columnNumber: 109
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 913,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[14px] font-bold leading-6 text-cyan-100",
                                                                    children: speakerMode === "Ada karakter + narator" ? "✓ Setiap scene akan memiliki naskah dialog karakter dan narasi yang disesuaikan dengan durasi scene." : speakerMode === "Ada karakter yang bicara" ? "✓ Setiap scene akan memiliki naskah dialog karakter sesuai perkembangan cerita." : "✓ Setiap scene akan memiliki naskah narasi sesuai perkembangan cerita."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                    lineNumber: 921,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 920,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 910,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-t border-white/10 pt-6",
                                                        children: [
                                                            aiLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-4 text-[14px] font-semibold leading-6 text-cyan-100",
                                                                children: "🔒 Form dikunci sementara. Driacom sedang meracik prompt agar data yang diproses tetap konsisten."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 930,
                                                                columnNumber: 31
                                                            }, this),
                                                            aiError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-3 rounded-2xl border border-red-400/20 bg-red-400/[0.06] p-4 text-[14px] font-semibold leading-6 text-red-200",
                                                                children: aiError
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 934,
                                                                columnNumber: 29
                                                            }, this),
                                                            !usage?.unlimited ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mb-3 text-center text-xs text-zinc-500",
                                                                children: usage ? usageBlocked ? "Gratis 2x generate sudah habis. Tonton 2 iklan untuk +1 token atau upgrade ke PRO." : `Gratis ${usage.remaining ?? 0}x generate tersisa` : "Mengecek kuota..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 938,
                                                                columnNumber: 38
                                                            }, this) : null,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleGenerate,
                                                                disabled: aiLoading,
                                                                className: "w-full rounded-2xl bg-cyan-400 px-5 py-5 text-[17px] font-bold text-black shadow-[0_10px_40px_rgba(34,211,238,0.15)] transition hover:bg-cyan-300 active:scale-[0.99] disabled:cursor-wait disabled:opacity-60",
                                                                children: aiLoading ? "✦ Driacom sedang meracik prompt..." : "✦ Racik Prompt"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 940,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: reset,
                                                                disabled: aiLoading,
                                                                className: "mt-3 w-full rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-4 text-[15px] font-bold text-zinc-300 transition hover:bg-white/[0.08] hover:text-white",
                                                                children: "Reset"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 944,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 929,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                lineNumber: 735,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                        lineNumber: 720,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        id: "hasil-output",
                                        className: "min-w-0 rounded-[28px] border border-white/[0.09] bg-gradient-to-br from-[#0b1019] to-[#080c14] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-6",
                                        children: !generated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-h-[700px] items-center justify-center rounded-3xl border border-dashed border-white/12 bg-[#0a0d12] p-8 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-w-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-3xl text-cyan-300",
                                                        children: "✦"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 957,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: "Animation Workspace"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 961,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 text-[16px] leading-7 text-zinc-300",
                                                        children: "Isi ide cerita dan beberapa pilihan dasar. Driacom akan membuat karakter, dunia, scene, naskah dialog, image prompt, video prompt, dan audio direction."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 965,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-7 grid gap-3 text-left sm:grid-cols-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-white/10 bg-white/[0.03] p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xl",
                                                                        children: "👤"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 978,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-2 text-[15px] font-bold text-white",
                                                                        children: "Karakter"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 982,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-[14px] leading-5 text-zinc-400",
                                                                        children: "Identity Lock"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 986,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 977,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-white/10 bg-white/[0.03] p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xl",
                                                                        children: "💬"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 992,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-2 text-[15px] font-bold text-white",
                                                                        children: "Dialog"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 996,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-[14px] leading-5 text-zinc-400",
                                                                        children: "Scene Script"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1000,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 991,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-white/10 bg-white/[0.03] p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xl",
                                                                        children: "🖼️"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1006,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-2 text-[15px] font-bold text-white",
                                                                        children: "Image"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1010,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-[14px] leading-5 text-zinc-400",
                                                                        children: "Start Frame"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1014,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1005,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-white/10 bg-white/[0.03] p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xl",
                                                                        children: "🎥"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1020,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-2 text-[15px] font-bold text-white",
                                                                        children: "Video"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1024,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-[14px] leading-5 text-zinc-400",
                                                                        children: "Motion Prompt"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1028,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1019,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 976,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                lineNumber: 956,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                            lineNumber: 955,
                                            columnNumber: 27
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-7",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[13px] font-bold uppercase tracking-[0.2em] text-cyan-300",
                                                                children: "Animation Output"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1039,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "mt-1 text-2xl font-bold text-white",
                                                                children: "Animation Output"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1043,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-[15px] leading-6 text-zinc-400",
                                                                children: [
                                                                    characterCount,
                                                                    " ",
                                                                    "karakter",
                                                                    " · ",
                                                                    scenes.length,
                                                                    " ",
                                                                    "scene",
                                                                    " · ",
                                                                    durationPerScene,
                                                                    " / scene · ",
                                                                    ratio,
                                                                    " · ",
                                                                    language,
                                                                    " · ",
                                                                    speakerMode
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1047,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 1038,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 1037,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                            title: "Master Character Sheet",
                                                            description: "Setiap karakter memiliki 1 prompt master sendiri. Jika ada 2 karakter, Driacom menghasilkan 2 prompt terpisah agar setiap gambar fokus pada satu karakter lengkap dengan turnaround dan detail identitas."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                                            lineNumber: 1068,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-5",
                                                            children: result.characterSheets?.map((sheet)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptCard, {
                                                                    icon: "👤",
                                                                    title: `${sheet.id} — ${sheet.name} — Master Turnaround`,
                                                                    text: sheet.prompt,
                                                                    copyId: `character-sheet-${sheet.id}`,
                                                                    copied: copied,
                                                                    onCopy: copyText
                                                                }, sheet.id, false, {
                                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                    lineNumber: 1071,
                                                                    columnNumber: 59
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                                            lineNumber: 1070,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 1067,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                            title: "Scene Production",
                                                            description: "Setiap scene hanya berisi Image Prompt dan Video Prompt. Naskah dialog, narasi, voice, BGM, SFX, dan audio direction sudah ditanam langsung di dalam Video Prompt."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                                            lineNumber: 1077,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-5",
                                                            children: scenes.length > 0 ? scenes.map((scene)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneCard, {
                                                                    scene: scene,
                                                                    copied: copied,
                                                                    onCopy: copyText
                                                                }, scene.sceneNumber, false, {
                                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                    lineNumber: 1080,
                                                                    columnNumber: 62
                                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center text-zinc-500",
                                                                children: "Belum ada scene."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1080,
                                                                columnNumber: 151
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                                            lineNumber: 1079,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 1076,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[15px] font-bold leading-6 text-cyan-100",
                                                            children: "✓ Prompt package siap digunakan."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                                            lineNumber: 1088,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-[14px] leading-6 text-zinc-400",
                                                            children: "Gunakan Master Character Sheet sebagai sumber identitas karakter, Thumbnail sebagai key visual, Image Prompt sebagai Start Frame, dan Video Prompt sebagai prompt produksi lengkap untuk setiap scene."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                                            lineNumber: 1091,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 1087,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                            lineNumber: 1034,
                                            columnNumber: 24
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                        lineNumber: 954,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                lineNumber: 715,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                className: "mt-10 border-t border-white/[0.07] py-7 text-center text-[11px] tracking-[0.16em] text-zinc-600",
                                children: "DRIACOM — PROMPT AI GENERATOR"
                            }, void 0, false, {
                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                lineNumber: 1102,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 700,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/generators/animation/page.tsx",
                lineNumber: 698,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RewardTokenModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: rewardOpen,
                onClose: ()=>setRewardOpen(false),
                onGranted: ()=>{
                    setRewardOpen(false);
                    refreshUsage();
                }
            }, void 0, false, {
                fileName: "[project]/src/app/generators/animation/page.tsx",
                lineNumber: 1107,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/generators/animation/page.tsx",
        lineNumber: 688,
        columnNumber: 10
    }, this);
}
_s1(AnimationGeneratorPage, "25JvF46/wh71q4piwuorER+1Y1k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$prompt$2d$usage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePromptUsage"]
    ];
});
_c4 = AnimationGeneratorPage;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "SectionTitle");
__turbopack_context__.k.register(_c1, "CustomDropdown");
__turbopack_context__.k.register(_c2, "PromptCard");
__turbopack_context__.k.register(_c3, "SceneCard");
__turbopack_context__.k.register(_c4, "AnimationGeneratorPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AccountBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccountBar
]);
"use client";
function AccountBar(_props) {
    return null;
}
_c = AccountBar;
var _c;
__turbopack_context__.k.register(_c, "AccountBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LanguageSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LanguageSwitcher(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "3fd6549f280d54a6f18166cc6f9574107094ac565ea30632891e8471f449afb0") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3fd6549f280d54a6f18166cc6f9574107094ac565ea30632891e8471f449afb0";
    }
    const { compact: t1 } = t0;
    const compact = t1 === undefined ? false : t1;
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("id");
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "LanguageSwitcher[useEffect()]": ()=>{
                const v = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGE_STORAGE_KEY"]);
                if (v === "id" || v === "en") {
                    setLanguage(v);
                }
            }
        })["LanguageSwitcher[useEffect()]"];
        t3 = [];
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = function change(next) {
            setLanguage(next);
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGE_STORAGE_KEY"], next);
            document.documentElement.lang = next;
            window.dispatchEvent(new CustomEvent("driacom-language-change", {
                detail: next
            }));
        };
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    const change = t4;
    const t5 = `flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-[#090e16]/95 px-3 py-2 text-xs font-bold text-zinc-300 backdrop-blur-xl ${compact ? "" : "shadow-[0_12px_35px_rgba(0,0,0,0.2)]"}`;
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "🌐"
        }, void 0, false, {
            fileName: "[project]/src/components/LanguageSwitcher.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[4] = t6;
    } else {
        t6 = $[4];
    }
    const t7 = language === "id" ? "Pilih Bahasa" : "Choose Language";
    let t8;
    if ($[5] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden md:inline",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/LanguageSwitcher.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[5] = t7;
        $[6] = t8;
    } else {
        t8 = $[6];
    }
    let t9;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "LanguageSwitcher[<select>.onChange]": (e)=>change(e.target.value)
        })["LanguageSwitcher[<select>.onChange]"];
        $[7] = t9;
    } else {
        t9 = $[7];
    }
    const t10 = language === "id" ? "Pilih bahasa" : "Choose language";
    let t11;
    let t12;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "id",
            className: "bg-[#090e16]",
            children: "🇮🇩 Indonesia"
        }, void 0, false, {
            fileName: "[project]/src/components/LanguageSwitcher.tsx",
            lineNumber: 83,
            columnNumber: 11
        }, this);
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "en",
            className: "bg-[#090e16]",
            children: "🇬🇧 English"
        }, void 0, false, {
            fileName: "[project]/src/components/LanguageSwitcher.tsx",
            lineNumber: 84,
            columnNumber: 11
        }, this);
        $[8] = t11;
        $[9] = t12;
    } else {
        t11 = $[8];
        t12 = $[9];
    }
    let t13;
    if ($[10] !== language || $[11] !== t10) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: language,
            onChange: t9,
            className: "cursor-pointer bg-transparent text-xs font-black text-white outline-none",
            "aria-label": t10,
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LanguageSwitcher.tsx",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        $[10] = language;
        $[11] = t10;
        $[12] = t13;
    } else {
        t13 = $[12];
    }
    let t14;
    if ($[13] !== t13 || $[14] !== t5 || $[15] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: t5,
            children: [
                t6,
                t8,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LanguageSwitcher.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[13] = t13;
        $[14] = t5;
        $[15] = t8;
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    return t14;
}
_s(LanguageSwitcher, "g5szwCYii33EJriUdLPn2a8bQM4=");
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PremiumSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PremiumSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PremiumSidebar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "4969e030b19610f089a4567e8f36db10f6631aff1b3228b7f11a00c3c57d08bc") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4969e030b19610f089a4567e8f36db10f6631aff1b3228b7f11a00c3c57d08bc";
    }
    const { active } = t0;
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== active) {
        t1 = ({
            "PremiumSidebar[item]": (key)=>key === active ? "border-violet-400/30 bg-gradient-to-r from-violet-600/25 to-violet-600/[0.04] text-white shadow-[0_8px_25px_rgba(139,92,246,0.08)]" : "border-transparent text-zinc-400 hover:border-white/[0.06] hover:bg-white/[0.03] hover:text-white"
        })["PremiumSidebar[item]"];
        $[1] = active;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const item = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = function closeMobile() {
            setMobileOpen(false);
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const closeMobile = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/dashboard",
            className: "border-b border-white/[0.07] pb-7",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/driacom-logo.png",
                            alt: "Driacom",
                            className: "h-full w-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PremiumSidebar.tsx",
                            lineNumber: 42,
                            columnNumber: 245
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                        lineNumber: 42,
                        columnNumber: 121
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-serif text-xl font-black tracking-wide text-amber-200",
                                children: "DRIACOM"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PremiumSidebar.tsx",
                                lineNumber: 42,
                                columnNumber: 342
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[9px] font-bold tracking-[0.28em] text-zinc-600",
                                children: "PROMPT AI GENERATOR"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PremiumSidebar.tsx",
                                lineNumber: 42,
                                columnNumber: 431
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                        lineNumber: 42,
                        columnNumber: 337
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PremiumSidebar.tsx",
                lineNumber: 42,
                columnNumber: 80
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/PremiumSidebar.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2 px-3 text-[10px] font-black tracking-[0.22em] text-zinc-600",
            children: "NAVIGASI"
        }, void 0, false, {
            fileName: "[project]/src/components/PremiumSidebar.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const t5 = `flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-bold transition ${item("dashboard")}`;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-amber-300",
            children: "⌂"
        }, void 0, false, {
            fileName: "[project]/src/components/PremiumSidebar.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/dashboard",
            className: t5,
            children: [
                t6,
                " Dashboard"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PremiumSidebar.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const t8 = `flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-bold transition ${item("animation")}`;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-cyan-300",
            children: "▣"
        }, void 0, false, {
            fileName: "[project]/src/components/PremiumSidebar.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/generators/animation-menu",
            className: t8,
            children: [
                t9,
                " Animasi"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PremiumSidebar.tsx",
            lineNumber: 80,
            columnNumber: 11
        }, this);
        $[10] = t8;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    const t11 = `flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-bold transition ${item("storytelling")}`;
    let t12;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-violet-300",
            children: "▱"
        }, void 0, false, {
            fileName: "[project]/src/components/PremiumSidebar.tsx",
            lineNumber: 89,
            columnNumber: 11
        }, this);
        $[12] = t12;
    } else {
        t12 = $[12];
    }
    let t13;
    if ($[13] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/generators/storytelling-menu",
            className: t11,
            children: [
                t12,
                " Storytelling"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PremiumSidebar.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, this);
        $[13] = t11;
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    const t14 = `flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-bold transition ${item("affiliate")}`;
    let t15;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-amber-300",
            children: "↗"
        }, void 0, false, {
            fileName: "[project]/src/components/PremiumSidebar.tsx",
            lineNumber: 105,
            columnNumber: 11
        }, this);
        $[15] = t15;
    } else {
        t15 = $[15];
    }
    let t16;
    if ($[16] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/generators/affiliate",
            className: t14,
            children: [
                t15,
                " Affiliate"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PremiumSidebar.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[16] = t14;
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] !== t10 || $[19] !== t13 || $[20] !== t16 || $[21] !== t7) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "hidden w-[250px] shrink-0 border-r border-white/[0.07] bg-[#070b14]/90 px-5 py-7 lg:flex lg:flex-col",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "mt-7 space-y-2",
                    children: [
                        t4,
                        t7,
                        t10,
                        t13,
                        t16
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                    lineNumber: 120,
                    columnNumber: 135
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PremiumSidebar.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t13;
        $[20] = t16;
        $[21] = t7;
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    let t18;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/dashboard",
            onClick: closeMobile,
            className: "flex min-w-0 items-center gap-2 font-serif text-base font-black tracking-[0.16em] text-amber-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/driacom-logo.png",
                    alt: "Driacom",
                    className: "h-8 w-8 shrink-0 object-contain"
                }, void 0, false, {
                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                    lineNumber: 131,
                    columnNumber: 166
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "DRIACOM"
                }, void 0, false, {
                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                    lineNumber: 131,
                    columnNumber: 255
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PremiumSidebar.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[23] = t18;
    } else {
        t18 = $[23];
    }
    let t19;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "PremiumSidebar[<button>.onClick]": ()=>setMobileOpen(true)
        })["PremiumSidebar[<button>.onClick]"];
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    let t20;
    if ($[25] !== mobileOpen) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full shrink-0 border-b border-white/[0.07] bg-[#070b14]/95 px-4 py-3 backdrop-blur-md lg:hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-12 items-center justify-between gap-3",
                children: [
                    t18,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: t19,
                        "aria-label": "Buka menu navigasi",
                        "aria-expanded": mobileOpen,
                        className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/[0.10] bg-white/[0.025] text-2xl leading-none text-zinc-200 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition hover:border-cyan-400/30 hover:text-white",
                        children: "☰"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                        lineNumber: 147,
                        columnNumber: 197
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PremiumSidebar.tsx",
                lineNumber: 147,
                columnNumber: 126
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/PremiumSidebar.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[25] = mobileOpen;
        $[26] = t20;
    } else {
        t20 = $[26];
    }
    let t21;
    if ($[27] !== item || $[28] !== mobileOpen) {
        t21 = mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[100] lg:hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-label": "Tutup menu",
                    onClick: closeMobile,
                    className: "absolute inset-0 bg-black/65 backdrop-blur-[2px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                    lineNumber: 155,
                    columnNumber: 73
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: "absolute inset-y-0 left-0 flex w-[min(84vw,320px)] flex-col border-r border-white/[0.09] bg-[#070b14] p-5 shadow-[20px_0_80px_rgba(0,0,0,0.55)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-3 border-b border-white/[0.07] pb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard",
                                    onClick: closeMobile,
                                    className: "flex min-w-0 items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/driacom-logo.png",
                                                alt: "Driacom",
                                                className: "h-full w-full object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PremiumSidebar.tsx",
                                                lineNumber: 155,
                                                columnNumber: 672
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PremiumSidebar.tsx",
                                            lineNumber: 155,
                                            columnNumber: 548
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-serif text-lg font-black tracking-wide text-amber-200",
                                                    children: "DRIACOM"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 789
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[8px] font-bold tracking-[0.24em] text-zinc-600",
                                                    children: "PROMPT AI GENERATOR"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 878
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PremiumSidebar.tsx",
                                            lineNumber: 155,
                                            columnNumber: 764
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                                    lineNumber: 155,
                                    columnNumber: 458
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: closeMobile,
                                    "aria-label": "Tutup menu",
                                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-xl text-zinc-400 hover:text-white",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                                    lineNumber: 155,
                                    columnNumber: 986
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PremiumSidebar.tsx",
                            lineNumber: 155,
                            columnNumber: 367
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "mt-6 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 px-3 text-[10px] font-black tracking-[0.22em] text-zinc-600",
                                    children: "NAVIGASI"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                                    lineNumber: 155,
                                    columnNumber: 1239
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard",
                                    onClick: closeMobile,
                                    className: `flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-bold transition ${item("dashboard")}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-300",
                                            children: "⌂"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PremiumSidebar.tsx",
                                            lineNumber: 155,
                                            columnNumber: 1499
                                        }, this),
                                        " Dashboard"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                                    lineNumber: 155,
                                    columnNumber: 1335
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/generators/animation-menu",
                                    onClick: closeMobile,
                                    className: `flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-bold transition ${item("animation")}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-cyan-300",
                                            children: "▣"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PremiumSidebar.tsx",
                                            lineNumber: 155,
                                            columnNumber: 1737
                                        }, this),
                                        " Animasi"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                                    lineNumber: 155,
                                    columnNumber: 1557
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/generators/storytelling-menu",
                                    onClick: closeMobile,
                                    className: `flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-bold transition ${item("storytelling")}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-violet-300",
                                            children: "▱"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PremiumSidebar.tsx",
                                            lineNumber: 155,
                                            columnNumber: 1978
                                        }, this),
                                        " Storytelling"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                                    lineNumber: 155,
                                    columnNumber: 1792
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/generators/affiliate",
                                    onClick: closeMobile,
                                    className: `flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-bold transition ${item("affiliate")}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-300",
                                            children: "↗"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PremiumSidebar.tsx",
                                            lineNumber: 155,
                                            columnNumber: 2215
                                        }, this),
                                        " Affiliate"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                                    lineNumber: 155,
                                    columnNumber: 2040
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PremiumSidebar.tsx",
                            lineNumber: 155,
                            columnNumber: 1207
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                    lineNumber: 155,
                    columnNumber: 204
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PremiumSidebar.tsx",
            lineNumber: 155,
            columnNumber: 24
        }, this) : null;
        $[27] = item;
        $[28] = mobileOpen;
        $[29] = t21;
    } else {
        t21 = $[29];
    }
    let t22;
    if ($[30] !== t17 || $[31] !== t20 || $[32] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t17,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PremiumSidebar.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[30] = t17;
        $[31] = t20;
        $[32] = t21;
        $[33] = t22;
    } else {
        t22 = $[33];
    }
    return t22;
}
_s(PremiumSidebar, "33pz4tKGxA4/1e2zOoGo8gBQzP0=");
_c = PremiumSidebar;
var _c;
__turbopack_context__.k.register(_c, "PremiumSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RewardTokenModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RewardTokenModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const PRODUCTION_REWARDED_ID = "ca-app-pub-2212969526982215/8607793884";
async function showRewardedAd() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) return false;
    try {
        const { AdMob } = await __turbopack_context__.A("[project]/node_modules/@capacitor-community/admob/dist/esm/index.js [app-client] (ecmascript, async loader)");
        await AdMob.initialize();
        const adId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ADMOB_REWARDED_ID || "ca-app-pub-2212969526982215/8607793884";
        await AdMob.prepareRewardVideoAd({
            adId
        });
        const reward = await AdMob.showRewardVideoAd();
        return Number(reward?.amount || 0) > 0;
    } catch (error) {
        console.error("Driacom rewarded ad error:", error);
        return false;
    }
}
function RewardTokenModal({ open, onClose, onGranted }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RewardTokenModal.useEffect": ()=>{
            if (open) {
                setStep(0);
                setBusy(false);
                setMessage("");
            }
        }
    }["RewardTokenModal.useEffect"], [
        open
    ]);
    if (!open) return null;
    async function watchNext() {
        setBusy(true);
        setMessage("");
        const ok = await showRewardedAd();
        if (!ok) {
            setBusy(false);
            setMessage(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform() ? "Iklan belum tersedia. Coba lagi beberapa saat." : "Bonus iklan rewarded tersedia di aplikasi Android Driacom.");
            return;
        }
        const next = step + 1;
        if (next < 2) {
            setStep(next);
            setBusy(false);
            return;
        }
        try {
            const response = await fetch("/api/rewards/claim", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    adsCompleted: 2
                })
            });
            const data = await response.json();
            if (!response.ok || !data.ok) throw new Error(data.error || "Bonus token gagal diproses.");
            setStep(2);
            setMessage("🎉 +1 Token Generate berhasil ditambahkan.");
            onGranted?.();
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Bonus token gagal diproses.");
        } finally{
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md",
        onMouseDown: (e)=>{
            if (e.target === e.currentTarget && !busy) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md overflow-hidden rounded-[28px] border border-violet-300/20 bg-[#090e16] shadow-[0_30px_100px_rgba(0,0,0,.6)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-white/[0.07] p-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-black tracking-[0.22em] text-violet-300",
                                        children: "BONUS TOKEN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RewardTokenModal.tsx",
                                        lineNumber: 86,
                                        columnNumber: 118
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-2 text-2xl font-black text-white",
                                        children: "Dapatkan +1 Token"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RewardTokenModal.tsx",
                                        lineNumber: 86,
                                        columnNumber: 205
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RewardTokenModal.tsx",
                                lineNumber: 86,
                                columnNumber: 113
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                disabled: busy,
                                className: "flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-zinc-400 hover:text-white",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RewardTokenModal.tsx",
                                lineNumber: 86,
                                columnNumber: 285
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RewardTokenModal.tsx",
                        lineNumber: 86,
                        columnNumber: 57
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/RewardTokenModal.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5 p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm leading-6 text-zinc-400",
                            children: [
                                "Tonton ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    className: "text-white",
                                    children: "2 video iklan"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RewardTokenModal.tsx",
                                    lineNumber: 88,
                                    columnNumber: 63
                                }, this),
                                " untuk mendapatkan 1 token generate gratis. Bonus ini maksimal 1 kali per hari."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RewardTokenModal.tsx",
                            lineNumber: 88,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                0,
                                1
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `rounded-2xl border p-4 text-center ${step > i ? "border-emerald-300/30 bg-emerald-300/[0.06]" : "border-white/10 bg-white/[0.02]"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl",
                                            children: step > i ? "✓" : `${i + 1}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RewardTokenModal.tsx",
                                            lineNumber: 89,
                                            columnNumber: 224
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[10px] font-black tracking-wider text-zinc-500",
                                            children: step > i ? "SELESAI" : `IKLAN ${i + 1}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RewardTokenModal.tsx",
                                            lineNumber: 89,
                                            columnNumber: 284
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/RewardTokenModal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 66
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/RewardTokenModal.tsx",
                            lineNumber: 89,
                            columnNumber: 9
                        }, this),
                        message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `rounded-xl border p-3 text-xs leading-5 ${step === 2 ? "border-emerald-300/20 bg-emerald-300/[0.05] text-emerald-200" : "border-amber-300/20 bg-amber-300/[0.05] text-amber-200"}`,
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/components/RewardTokenModal.tsx",
                            lineNumber: 90,
                            columnNumber: 20
                        }, this) : null,
                        step < 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: busy,
                            onClick: watchNext,
                            className: "w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 px-5 py-4 text-sm font-black text-white disabled:opacity-40",
                            children: busy ? "Menyiapkan iklan..." : `▶ Tonton Iklan ${step + 1}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/RewardTokenModal.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "w-full rounded-2xl bg-emerald-400 px-5 py-4 text-sm font-black text-[#041014]",
                            children: "Gunakan Token Sekarang"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RewardTokenModal.tsx",
                            lineNumber: 91,
                            columnNumber: 304
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-white/[0.07] pt-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-zinc-600",
                                    children: "Atau nikmati generate tanpa batas dan tanpa iklan."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RewardTokenModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 72
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/upgrade",
                                    onClick: onClose,
                                    className: "mt-2 inline-flex text-xs font-black text-violet-300 hover:text-violet-200",
                                    children: "👑 Upgrade ke PRO →"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RewardTokenModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 163
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RewardTokenModal.tsx",
                            lineNumber: 92,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RewardTokenModal.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RewardTokenModal.tsx",
            lineNumber: 85,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/RewardTokenModal.tsx",
        lineNumber: 82,
        columnNumber: 10
    }, this);
}
_s(RewardTokenModal, "TDWpRrh6ToMWnxuxZyWUDq56YlM=");
_c = RewardTokenModal;
var _c;
__turbopack_context__.k.register(_c, "RewardTokenModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WorkspaceBackButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkspaceBackButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function WorkspaceBackButton() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "6bae13b02e6620b56273b7ca7b7192cb5268263174028d4da139a1a65c373c8a") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6bae13b02e6620b56273b7ca7b7192cb5268263174028d4da139a1a65c373c8a";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== router) {
        t0 = ({
            "WorkspaceBackButton[<button>.onClick]": ()=>router.push("/dashboard")
        })["WorkspaceBackButton[<button>.onClick]"];
        $[1] = router;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-base leading-none",
            "aria-hidden": "true",
            children: "←"
        }, void 0, false, {
            fileName: "[project]/src/components/WorkspaceBackButton.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Kembali"
        }, void 0, false, {
            fileName: "[project]/src/components/WorkspaceBackButton.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t0) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t0,
            className: "inline-flex min-h-10 shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3.5 py-2.5 text-xs font-bold text-zinc-200 shadow-lg shadow-black/10 backdrop-blur-xl transition hover:border-cyan-400/35 hover:bg-cyan-400/[0.05] hover:text-white active:scale-[0.98] sm:min-h-11 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm",
            "aria-label": "Kembali ke Dashboard",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WorkspaceBackButton.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[5] = t0;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_s(WorkspaceBackButton, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = WorkspaceBackButton;
var _c;
__turbopack_context__.k.register(_c, "WorkspaceBackButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/prompts/animation/defaults.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANIMATION_CONTENT_TYPES",
    ()=>ANIMATION_CONTENT_TYPES,
    "ANIMATION_VISUAL_STYLES",
    ()=>ANIMATION_VISUAL_STYLES,
    "DEFAULT_ANIMATION_VISUAL_STYLE",
    ()=>DEFAULT_ANIMATION_VISUAL_STYLE,
    "createDefaultAnimationForm",
    ()=>createDefaultAnimationForm,
    "defaultAnimationForm",
    ()=>defaultAnimationForm,
    "defaultForm",
    ()=>defaultForm,
    "emptyAnimationOutput",
    ()=>emptyAnimationOutput,
    "emptyOutput",
    ()=>emptyOutput
]);
const ANIMATION_VISUAL_STYLES = [
    "Pixar Inspired 3D",
    "Little Giants 3D",
    "Minecraft 3D",
    "Roblox 3D",
    "3D Cartoon",
    "Stop Motion"
];
const DEFAULT_ANIMATION_VISUAL_STYLE = "Pixar Inspired 3D";
const ANIMATION_CONTENT_TYPES = [
    "Petualangan",
    "ASMR",
    "Objek Bicara",
    "Fakta Unik",
    "Edukasi Visual",
    "Konten Hewan",
    "What If",
    "Eksperimen & Sains",
    "Miniatur"
];
const createDefaultAnimationForm = ()=>({
        concept: "",
        genre: "Petualangan",
        referenceLink: "",
        referenceStory: "",
        character: "Buat karakter yang paling sesuai dengan konsep cerita.",
        characters: [],
        characterDesign: "Buat desain karakter yang konsisten dengan cerita dan gaya visual.",
        storyBlueprint: undefined,
        world: "",
        action: "Tentukan aksi konkret yang memajukan cerita pada setiap scene.",
        expression: "Gunakan ekspresi karakter yang natural dan sesuai perkembangan cerita.",
        animationStyle: DEFAULT_ANIMATION_VISUAL_STYLE,
        ratio: "9:16",
        camera: "Controlled cinematic camera movement dengan framing yang memiliki tujuan naratif.",
        lighting: "Professional cinematic lighting dengan konsistensi arah cahaya.",
        scenes: "4",
        duration: "8 detik",
        language: "Bahasa Indonesia",
        audio: "Narasi + BGM + SFX",
        speakerMode: "Ada karakter yang bicara"
    });
const defaultAnimationForm = createDefaultAnimationForm();
const emptyAnimationOutput = {
    thumbnailTitle: "",
    thumbnailPrompt: "",
    character: "",
    storyboard: "",
    scenePrompts: [],
    consistency: "",
    voice: "",
    sfx: "",
    negative: ""
};
const defaultForm = defaultAnimationForm;
const emptyOutput = emptyAnimationOutput;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/use-prompt-usage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePromptUsage",
    ()=>usePromptUsage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function usePromptUsage(menu) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "1470a26ca943a694cc016edc7f0bbfc2f1105365731f3453aa44a5fd1157114d") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1470a26ca943a694cc016edc7f0bbfc2f1105365731f3453aa44a5fd1157114d";
    }
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] !== menu) {
        t0 = ({
            "usePromptUsage[refresh]": async ()=>{
                try {
                    const r = await fetch(`/api/usage?menu=${menu}`, {
                        cache: "no-store"
                    });
                    const d = await r.json();
                    if (r.ok) {
                        setStatus(d);
                    }
                } catch  {}
            }
        })["usePromptUsage[refresh]"];
        $[1] = menu;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const refresh = t0;
    let t1;
    let t2;
    if ($[3] !== refresh) {
        t1 = ({
            "usePromptUsage[useEffect()]": ()=>{
                refresh();
            }
        })["usePromptUsage[useEffect()]"];
        t2 = [
            refresh
        ];
        $[3] = refresh;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[6] !== refresh || $[7] !== status) {
        t3 = {
            status,
            refresh
        };
        $[6] = refresh;
        $[7] = status;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    return t3;
}
_s(usePromptUsage, "BS896UqrqyybjEKvhypabDkHm2E=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0t5tyta._.js.map