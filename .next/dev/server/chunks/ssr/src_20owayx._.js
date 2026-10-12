module.exports = [
"[project]/src/app/generators/animation/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimationGeneratorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageSwitcher.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$prompt$2d$usage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-prompt-usage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PremiumSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PremiumSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AccountBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AccountBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorkspaceBackButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WorkspaceBackButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RewardTokenModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RewardTokenModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prompts$2f$animation$2f$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prompts/animation/defaults.ts [app-ssr] (ecmascript)");
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
   ========================================================= */ function SectionTitle({ title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold tracking-tight text-white sm:text-[22px]",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/generators/animation/page.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[15px] leading-6 text-zinc-400",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/app/generators/animation/page.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/generators/animation/page.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
function CustomDropdown({ value, options, onChange, label }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/generators/animation/page.tsx",
                lineNumber: 168,
                columnNumber: 16
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((v)=>!v),
                className: "flex w-full items-center justify-between rounded-2xl border border-white/15 bg-[#12151c] px-5 py-4 text-left text-[16px] font-bold text-white transition hover:border-cyan-400/45",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-cyan-300 transition ${open ? "rotate-180" : ""}`,
                        children: "⌄"
                    }, void 0, false, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/generators/animation/page.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Tutup pilihan",
                        className: "fixed inset-0 z-40 cursor-default",
                        onClick: ()=>setOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 right-0 top-[calc(100%+8px)] z-50 max-h-80 overflow-auto rounded-2xl border border-white/10 bg-[#0b1019] p-2 shadow-2xl shadow-black/40",
                        children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    onChange(option);
                                    setOpen(false);
                                },
                                className: `w-full rounded-xl px-4 py-3 text-left text-sm font-bold transition ${option === value ? "bg-cyan-400/12 text-cyan-200" : "text-zinc-300 hover:bg-white/[0.05] hover:text-white"}`,
                                children: option
                            }, option, false, {
                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/generators/animation/page.tsx",
                lineNumber: 179,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/generators/animation/page.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
/* =========================================================
   PROMPT CARD
   ========================================================= */ function PromptCard({ icon, title, text, copyId, copied, onCopy }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1019]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-lg",
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "truncate text-base font-bold text-white",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onCopy(text, copyId),
                        disabled: !text,
                        className: "shrink-0 rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-2.5 text-sm font-bold text-cyan-200 transition hover:bg-cyan-400/20 disabled:opacity-30",
                        children: copied === copyId ? "✓ Tersalin" : "Copy"
                    }, void 0, false, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/generators/animation/page.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "max-h-[520px] overflow-auto whitespace-pre-wrap break-words p-5 font-mono text-[14px] leading-7 text-zinc-300",
                children: text || "Belum ada prompt."
            }, void 0, false, {
                fileName: "[project]/src/app/generators/animation/page.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/generators/animation/page.tsx",
        lineNumber: 235,
        columnNumber: 5
    }, this);
}
/* =========================================================
   SCENE CARD
   ========================================================= */ function SceneCard({ scene, copied, onCopy }) {
    const number = String(scene.sceneNumber).padStart(2, "0");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0f17]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-white/[0.07] bg-[#0d121b] px-5 py-5 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold uppercase tracking-[0.2em] text-cyan-300",
                                    children: [
                                        "Scene ",
                                        number
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mt-1.5 text-xl font-bold text-white",
                                    children: scene.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 max-w-2xl text-[14px] leading-6 text-zinc-400",
                                    children: scene.purpose
                                }, void 0, false, {
                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/generators/animation/page.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-2 text-xs font-bold text-cyan-200",
                            children: "Image → Video"
                        }, void 0, false, {
                            fileName: "[project]/src/app/generators/animation/page.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/generators/animation/page.tsx",
                    lineNumber: 293,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/generators/animation/page.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 p-5 sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptCard, {
                        icon: "🖼️",
                        title: `Image Prompt — Scene ${number}`,
                        text: scene.imagePrompt,
                        copyId: `scene-${scene.sceneNumber}-image`,
                        copied: copied,
                        onCopy: onCopy
                    }, void 0, false, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptCard, {
                        icon: "🎥",
                        title: `Video Prompt — Scene ${number}`,
                        text: scene.videoPrompt,
                        copyId: `scene-${scene.sceneNumber}-video`,
                        copied: copied,
                        onCopy: onCopy
                    }, void 0, false, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/generators/animation/page.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/generators/animation/page.tsx",
        lineNumber: 291,
        columnNumber: 5
    }, this);
}
function AnimationGeneratorPage() {
    const { status: usage, refresh: refreshUsage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$prompt$2d$usage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePromptUsage"])("animation");
    const usageBlocked = Boolean(usage && !usage.unlimited && (usage.remaining ?? 0) <= 0 && (usage.bonusTokens ?? 0) <= 0);
    const [rewardOpen, setRewardOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const initialForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prompts$2f$animation$2f$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDefaultAnimationForm"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>({
            ...initialForm,
            concept: "",
            scenes: "4",
            duration: "8 detik",
            characters: buildCharacters(1)
        }));
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prompts$2f$animation$2f$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyAnimationOutput"]);
    const [generated, setGenerated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aiLoading, setAiLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aiError, setAiError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [genre, setGenre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Petualangan");
    const [characterCount, setCharacterCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [durationPerScene, setDurationPerScene] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("8 detik");
    const [ratio, setRatio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("9:16");
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Bahasa Indonesia");
    const [audioMode, setAudioMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Narasi + BGM + SFX");
    const [speakerMode, setSpeakerMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Ada karakter yang bicara");
    const [ideaLoading, setIdeaLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ideaFocused, setIdeaFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ideaOptions, setIdeaOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ideaError, setIdeaError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
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
            const response = await fetch("/api/animation-gemini", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(finalForm)
            });
            const responseText = await response.text();
            let data;
            try {
                data = responseText ? JSON.parse(responseText) : {};
            } catch  {
                const preview = responseText.trim().slice(0, 500);
                throw new Error(`Server Driacom mengembalikan respons yang bukan JSON (HTTP ${response.status}).` + (preview ? ` Respons: ${preview}` : " Respons server kosong."));
            }
            if (!response.ok || !data.success) {
                throw new Error(data.error || `Gemini gagal membuat prompt (HTTP ${response.status}).`);
            }
            if (!data.output) {
                throw new Error("Driacom tidak menerima output Animation dari server.");
            }
            setResult(data.output);
            setGenerated(true);
            await refreshUsage();
            window.setTimeout(()=>{
                document.getElementById("hasil-output")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 100);
        } catch (error) {
            console.error("Driacom Gemini Animation Error:", error);
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
        const resetForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prompts$2f$animation$2f$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDefaultAnimationForm"])();
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
        setResult(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prompts$2f$animation$2f$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyAnimationOutput"]);
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
     ======================================================= */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen overflow-x-hidden bg-[#050811] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.045] blur-[90px]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 751,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -right-40 top-[25%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.04] blur-[95px]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 753,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-[35%] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.02] blur-[90px]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 755,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/generators/animation/page.tsx",
                lineNumber: 750,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex min-h-screen max-w-[1540px] flex-col lg:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PremiumSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        active: "animation"
                    }, void 0, false, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 759,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative min-w-0 flex-1 px-5 sm:px-8 lg:px-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                className: "sticky top-0 z-40 -mx-5 mb-8 border-b border-white/[0.07] bg-[#050811]/95 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300",
                                                    children: "Driacom — Prompt AI Generator"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 766,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "mt-1 truncate font-serif text-2xl font-black tracking-tight text-white sm:text-3xl",
                                                    children: "Animation"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 767,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 hidden text-sm text-zinc-500 sm:block",
                                                    children: "Ceritakan ide kamu. Detail produksi disusun otomatis oleh Driacom."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 768,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                            lineNumber: 765,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-end gap-2 self-end sm:self-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorkspaceBackButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 770,
                                                    columnNumber: 88
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    compact: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 770,
                                                    columnNumber: 111
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AccountBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 770,
                                                    columnNumber: 139
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                            lineNumber: 770,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                    lineNumber: 764,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                lineNumber: 763,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-7 lg:grid-cols-[440px_minmax(0,1fr)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "h-fit rounded-[28px] border border-white/[0.09] bg-gradient-to-br from-[#0b1019] to-[#080c14] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-7",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "mt-1 text-2xl font-bold text-white",
                                                        children: "Buat Animasi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 783,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-[16px] leading-7 text-zinc-300",
                                                        children: "Kamu cukup menentukan arah cerita. Detail produksi dikerjakan otomatis oleh Driacom."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 787,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                lineNumber: 782,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                                disabled: aiLoading,
                                                "aria-busy": aiLoading,
                                                className: "space-y-7 disabled:opacity-90",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                                title: "Jenis Konten Animasi",
                                                                description: "Satu engine untuk berbagai format. Driacom menyesuaikan cara membuat prompt berdasarkan pilihan ini."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 803,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomDropdown, {
                                                                value: genre,
                                                                onChange: (value)=>{
                                                                    setGenre(value);
                                                                    setIdeaOptions([]);
                                                                    setIdeaError("");
                                                                },
                                                                options: [
                                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prompts$2f$animation$2f$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANIMATION_CONTENT_TYPES"]
                                                                ],
                                                                label: "Jenis Konten Animasi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 808,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 802,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                                title: "Ide / Topik",
                                                                description: `Jenis konten: ${genre}. Tulis ide singkat atau minta Driacom mencarikannya.`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 822,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                                                                lineNumber: 827,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: generateIdea,
                                                                disabled: ideaLoading,
                                                                className: "mt-3 w-full rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.08] px-4 py-4 text-[15px] font-bold text-cyan-200 transition hover:bg-cyan-400/[0.15] disabled:opacity-50",
                                                                children: ideaLoading ? "✦ Driacom sedang mencari ide..." : "✦ AI Driacom — Bantu Buat Ide"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 861,
                                                                columnNumber: 17
                                                            }, this),
                                                            ideaError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 rounded-2xl border border-red-400/20 bg-red-400/[0.06] p-4 text-[14px] font-semibold leading-6 text-red-200",
                                                                children: ideaError
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 873,
                                                                columnNumber: 19
                                                            }, this) : null,
                                                            ideaOptions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[14px] font-bold text-cyan-200",
                                                                                children: "✦ Pilihan Ide Driacom"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 881,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mt-1 text-[13px] leading-5 text-zinc-400",
                                                                                children: "Pilih satu ide. Driacom akan memasukkannya ke Ide / Topik."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 884,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 880,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    ideaOptions.map((idea, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>useIdea(idea),
                                                                            className: "w-full rounded-2xl border border-white/12 bg-[#11141a] p-4 text-left transition hover:border-cyan-400/50 hover:bg-cyan-400/[0.06]",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10 text-sm font-bold text-cyan-200",
                                                                                        children: index + 1
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                        lineNumber: 897,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "min-w-0",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-[15px] font-bold text-white",
                                                                                                children: idea.title
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                                lineNumber: 901,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            idea.hook ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "mt-1 text-[13px] font-semibold leading-5 text-cyan-200",
                                                                                                children: idea.hook
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                                lineNumber: 905,
                                                                                                columnNumber: 31
                                                                                            }, this) : null,
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "mt-2 text-[14px] leading-6 text-zinc-300",
                                                                                                children: idea.concept
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                                lineNumber: 909,
                                                                                                columnNumber: 29
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "mt-3 text-[12px] font-bold uppercase tracking-[0.14em] text-zinc-500",
                                                                                                children: "Klik untuk gunakan ide ini"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                                lineNumber: 912,
                                                                                                columnNumber: 29
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                        lineNumber: 900,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 896,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, `${idea.title}-${index}`, false, {
                                                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                            lineNumber: 890,
                                                                            columnNumber: 23
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 879,
                                                                columnNumber: 19
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 821,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                                title: "Gaya Visual",
                                                                description: "Driacom menyesuaikan seluruh desain visual."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 925,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomDropdown, {
                                                                value: form.animationStyle,
                                                                onChange: (value)=>updateForm("animationStyle", value),
                                                                options: [
                                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prompts$2f$animation$2f$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANIMATION_VISUAL_STYLES"]
                                                                ],
                                                                label: "Gaya Visual"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 930,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 924,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                                title: "Jumlah Karakter",
                                                                description: "Driacom membuat identitas karakter otomatis."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 942,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-5 gap-2.5",
                                                                children: [
                                                                    1,
                                                                    2,
                                                                    3,
                                                                    4,
                                                                    5
                                                                ].map((count)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleCharacterCount(count),
                                                                        className: characterCount === count ? activeOptionButtonClass : optionButtonClass,
                                                                        children: count
                                                                    }, count, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 950,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 947,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] p-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[15px] font-bold leading-6 text-cyan-100",
                                                                    children: "✓ Driacom membuat nama, wajah, pakaian, kepribadian, proporsi, aksesori, dan identitas visual karakter."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                    lineNumber: 972,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 971,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 941,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                                title: "Struktur Video",
                                                                description: "Atur scene, durasi, ratio, dan bahasa."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 984,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-white/12 bg-[#11141a] p-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between gap-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[15px] font-bold text-zinc-100",
                                                                                        children: "Jumlah Scene"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                        lineNumber: 992,
                                                                                        columnNumber: 23
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "mt-1 text-[14px] text-zinc-400",
                                                                                        children: "1 sampai 10 scene"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                        lineNumber: 996,
                                                                                        columnNumber: 23
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 991,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex h-12 min-w-14 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 text-xl font-bold text-cyan-200",
                                                                                children: selectedSceneCount
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 1001,
                                                                                columnNumber: 21
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 990,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "1",
                                                                        max: "10",
                                                                        step: "1",
                                                                        value: selectedSceneCount,
                                                                        onChange: (event)=>updateForm("scenes", event.target.value),
                                                                        className: "mt-5 w-full accent-cyan-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1008,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2 flex justify-between text-[13px] font-bold text-zinc-500",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 1026,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 1027,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "10"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 1028,
                                                                                columnNumber: 21
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1025,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 989,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: labelClass,
                                                                        children: "Durasi per Scene"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1034,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-4 gap-2",
                                                                        children: [
                                                                            "4 detik",
                                                                            "6 detik",
                                                                            "8 detik",
                                                                            "10 detik"
                                                                        ].map((duration)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>setDurationPerScene(duration),
                                                                                className: durationPerScene === duration ? activeOptionButtonClass : optionButtonClass,
                                                                                children: duration.replace(" detik", "s")
                                                                            }, duration, false, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 1048,
                                                                                columnNumber: 25
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1040,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1033,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: labelClass,
                                                                        children: "Ratio Video"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1075,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-3 gap-2",
                                                                        children: [
                                                                            "9:16",
                                                                            "16:9",
                                                                            "1:1"
                                                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>setRatio(item),
                                                                                className: ratio === item ? activeOptionButtonClass : optionButtonClass,
                                                                                children: item
                                                                            }, item, false, {
                                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                                lineNumber: 1087,
                                                                                columnNumber: 23
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1081,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1074,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: labelClass,
                                                                        children: "Bahasa"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1107,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomDropdown, {
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
                                                                        lineNumber: 1113,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1106,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 983,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                                title: "Audio",
                                                                description: "Pilih elemen suara yang digunakan."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1130,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2.5",
                                                                children: [
                                                                    "Narasi + BGM + SFX",
                                                                    "Narasi + BGM",
                                                                    "Narasi + SFX",
                                                                    "BGM + SFX",
                                                                    "Hanya Narasi"
                                                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setAudioMode(item),
                                                                        className: `w-full text-left ${audioMode === item ? activeOptionButtonClass : optionButtonClass}`,
                                                                        children: item
                                                                    }, item, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1143,
                                                                        columnNumber: 21
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1135,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 1129,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                                title: "Siapa yang Berbicara?",
                                                                description: "Tentukan sumber suara cerita."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1165,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2.5",
                                                                children: [
                                                                    "Ada karakter yang bicara",
                                                                    "Ada narator saja",
                                                                    "Ada karakter + narator"
                                                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setSpeakerMode(item),
                                                                        className: `w-full text-left ${speakerMode === item ? activeOptionButtonClass : optionButtonClass}`,
                                                                        children: item
                                                                    }, item, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1176,
                                                                        columnNumber: 21
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1170,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[14px] font-bold leading-6 text-cyan-100",
                                                                    children: speakerMode === "Ada karakter + narator" ? "✓ Setiap scene akan memiliki naskah dialog karakter dan narasi yang disesuaikan dengan durasi scene." : speakerMode === "Ada karakter yang bicara" ? "✓ Setiap scene akan memiliki naskah dialog karakter sesuai perkembangan cerita." : "✓ Setiap scene akan memiliki naskah narasi sesuai perkembangan cerita."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                    lineNumber: 1197,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1196,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 1164,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-t border-white/10 pt-6",
                                                        children: [
                                                            aiLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-4 text-[14px] font-semibold leading-6 text-cyan-100",
                                                                children: "🔒 Form dikunci sementara. Driacom sedang meracik prompt agar data yang diproses tetap konsisten."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1213,
                                                                columnNumber: 19
                                                            }, this),
                                                            aiError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-3 rounded-2xl border border-red-400/20 bg-red-400/[0.06] p-4 text-[14px] font-semibold leading-6 text-red-200",
                                                                children: aiError
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1219,
                                                                columnNumber: 19
                                                            }, this),
                                                            !usage?.unlimited ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mb-3 text-center text-xs text-zinc-500",
                                                                children: usage ? usageBlocked ? "Gratis 2x generate sudah habis. Tonton 2 iklan untuk +1 token atau upgrade ke PRO." : `Gratis ${usage.remaining ?? 0}x generate tersisa` : "Mengecek kuota..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1224,
                                                                columnNumber: 38
                                                            }, this) : null,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handleGenerate,
                                                                disabled: aiLoading,
                                                                className: "w-full rounded-2xl bg-cyan-400 px-5 py-5 text-[17px] font-bold text-black shadow-[0_10px_40px_rgba(34,211,238,0.15)] transition hover:bg-cyan-300 active:scale-[0.99] disabled:cursor-wait disabled:opacity-60",
                                                                children: aiLoading ? "✦ Driacom sedang meracik prompt..." : "✦ Racik Prompt"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1226,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: reset,
                                                                disabled: aiLoading,
                                                                className: "mt-3 w-full rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-4 text-[15px] font-bold text-zinc-300 transition hover:bg-white/[0.08] hover:text-white",
                                                                children: "Reset"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1237,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 1211,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                lineNumber: 795,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                        lineNumber: 780,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        id: "hasil-output",
                                        className: "min-w-0 rounded-[28px] border border-white/[0.09] bg-gradient-to-br from-[#0b1019] to-[#080c14] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-6",
                                        children: !generated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-h-[700px] items-center justify-center rounded-3xl border border-dashed border-white/12 bg-[#0a0d12] p-8 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-w-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-3xl text-cyan-300",
                                                        children: "✦"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 1259,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: "Animation Workspace"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 1263,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 text-[16px] leading-7 text-zinc-300",
                                                        children: "Isi ide cerita dan beberapa pilihan dasar. Driacom akan membuat karakter, dunia, scene, naskah dialog, image prompt, video prompt, dan audio direction."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 1267,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-7 grid gap-3 text-left sm:grid-cols-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-white/10 bg-white/[0.03] p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xl",
                                                                        children: "👤"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1280,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-2 text-[15px] font-bold text-white",
                                                                        children: "Karakter"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1284,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-[14px] leading-5 text-zinc-400",
                                                                        children: "Identity Lock"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1288,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1279,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-white/10 bg-white/[0.03] p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xl",
                                                                        children: "💬"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1294,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-2 text-[15px] font-bold text-white",
                                                                        children: "Dialog"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1298,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-[14px] leading-5 text-zinc-400",
                                                                        children: "Scene Script"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1302,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1293,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-white/10 bg-white/[0.03] p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xl",
                                                                        children: "🖼️"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1308,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-2 text-[15px] font-bold text-white",
                                                                        children: "Image"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1312,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-[14px] leading-5 text-zinc-400",
                                                                        children: "Start Frame"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1316,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1307,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-white/10 bg-white/[0.03] p-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xl",
                                                                        children: "🎥"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1322,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-2 text-[15px] font-bold text-white",
                                                                        children: "Video"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1326,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-[14px] leading-5 text-zinc-400",
                                                                        children: "Motion Prompt"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                        lineNumber: 1330,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1321,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 1278,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                lineNumber: 1258,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                            lineNumber: 1257,
                                            columnNumber: 15
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-7",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[13px] font-bold uppercase tracking-[0.2em] text-cyan-300",
                                                                children: "Animation Output"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1343,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "mt-1 text-2xl font-bold text-white",
                                                                children: "Animation Output"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1347,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                                lineNumber: 1351,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                                        lineNumber: 1342,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 1341,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                            title: "Master Character Sheet",
                                                            description: "Setiap karakter memiliki 1 prompt master sendiri. Jika ada 2 karakter, Driacom menghasilkan 2 prompt terpisah agar setiap gambar fokus pada satu karakter lengkap dengan turnaround dan detail identitas."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                                            lineNumber: 1372,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-5",
                                                            children: result.characterSheets?.map((sheet)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptCard, {
                                                                    icon: "👤",
                                                                    title: `${sheet.id} — ${sheet.name} — Master Turnaround`,
                                                                    text: sheet.prompt,
                                                                    copyId: `character-sheet-${sheet.id}`,
                                                                    copied: copied,
                                                                    onCopy: copyText
                                                                }, sheet.id, false, {
                                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                    lineNumber: 1379,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                                            lineNumber: 1377,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 1371,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                                            title: "Scene Production",
                                                            description: "Setiap scene hanya berisi Image Prompt dan Video Prompt. Naskah dialog, narasi, voice, BGM, SFX, dan audio direction sudah ditanam langsung di dalam Video Prompt."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                                            lineNumber: 1394,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-5",
                                                            children: scenes.length > 0 ? scenes.map((scene)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneCard, {
                                                                    scene: scene,
                                                                    copied: copied,
                                                                    onCopy: copyText
                                                                }, scene.sceneNumber, false, {
                                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                    lineNumber: 1402,
                                                                    columnNumber: 25
                                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center text-zinc-500",
                                                                children: "Belum ada scene."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                                                lineNumber: 1410,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                                            lineNumber: 1399,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 1393,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[15px] font-bold leading-6 text-cyan-100",
                                                            children: "✓ Prompt package siap digunakan."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                                            lineNumber: 1419,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-[14px] leading-6 text-zinc-400",
                                                            children: "Gunakan Master Character Sheet sebagai sumber identitas karakter, Thumbnail sebagai key visual, Image Prompt sebagai Start Frame, dan Video Prompt sebagai prompt produksi lengkap untuk setiap scene."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                                            lineNumber: 1422,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/generators/animation/page.tsx",
                                                    lineNumber: 1418,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/generators/animation/page.tsx",
                                            lineNumber: 1338,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/generators/animation/page.tsx",
                                        lineNumber: 1252,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                lineNumber: 775,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                className: "mt-10 border-t border-white/[0.07] py-7 text-center text-[11px] tracking-[0.16em] text-zinc-600",
                                children: "DRIACOM — PROMPT AI GENERATOR"
                            }, void 0, false, {
                                fileName: "[project]/src/app/generators/animation/page.tsx",
                                lineNumber: 1434,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/generators/animation/page.tsx",
                        lineNumber: 760,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/generators/animation/page.tsx",
                lineNumber: 758,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RewardTokenModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: rewardOpen,
                onClose: ()=>setRewardOpen(false),
                onGranted: ()=>{
                    setRewardOpen(false);
                    refreshUsage();
                }
            }, void 0, false, {
                fileName: "[project]/src/app/generators/animation/page.tsx",
                lineNumber: 1439,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/generators/animation/page.tsx",
        lineNumber: 748,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/AccountBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccountBar
]);
"use client";
function AccountBar(_props) {
    return null;
}
}),
"[project]/src/components/LanguageSwitcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function LanguageSwitcher({ compact = false }) {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("id");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const v = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGE_STORAGE_KEY"]);
        if (v === "id" || v === "en") setLanguage(v);
    }, []);
    function change(next) {
        setLanguage(next);
        localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGE_STORAGE_KEY"], next);
        document.documentElement.lang = next;
        window.dispatchEvent(new CustomEvent("driacom-language-change", {
            detail: next
        }));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: `flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-[#090e16]/95 px-3 py-2 text-xs font-bold text-zinc-300 backdrop-blur-xl ${compact ? "" : "shadow-[0_12px_35px_rgba(0,0,0,0.2)]"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "🌐"
            }, void 0, false, {
                fileName: "[project]/src/components/LanguageSwitcher.tsx",
                lineNumber: 8,
                columnNumber: 225
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden md:inline",
                children: language === "id" ? "Pilih Bahasa" : "Choose Language"
            }, void 0, false, {
                fileName: "[project]/src/components/LanguageSwitcher.tsx",
                lineNumber: 8,
                columnNumber: 240
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: language,
                onChange: (e)=>change(e.target.value),
                className: "cursor-pointer bg-transparent text-xs font-black text-white outline-none",
                "aria-label": language === "id" ? "Pilih bahasa" : "Choose language",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "id",
                        className: "bg-[#090e16]",
                        children: "🇮🇩 Indonesia"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LanguageSwitcher.tsx",
                        lineNumber: 8,
                        columnNumber: 560
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "en",
                        className: "bg-[#090e16]",
                        children: "🇬🇧 English"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LanguageSwitcher.tsx",
                        lineNumber: 8,
                        columnNumber: 627
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LanguageSwitcher.tsx",
                lineNumber: 8,
                columnNumber: 332
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LanguageSwitcher.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/PremiumSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PremiumSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function PremiumSidebar({ active }) {
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const item = (key)=>key === active ? "border-violet-400/30 bg-gradient-to-r from-violet-600/25 to-violet-600/[0.04] text-white shadow-[0_8px_25px_rgba(139,92,246,0.08)]" : "border-transparent text-zinc-400 hover:border-white/[0.06] hover:bg-white/[0.03] hover:text-white";
    function closeMobile() {
        setMobileOpen(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "hidden w-[250px] shrink-0 border-r border-white/[0.07] bg-[#070b14]/90 px-5 py-7 lg:flex lg:flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard",
                        className: "border-b border-white/[0.07] pb-7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/driacom-logo.png",
                                        alt: "Driacom",
                                        className: "h-full w-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-serif text-xl font-black tracking-wide text-amber-200",
                                            children: "DRIACOM"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PremiumSidebar.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] font-bold tracking-[0.28em] text-zinc-600",
                                            children: "PROMPT AI GENERATOR"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PremiumSidebar.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PremiumSidebar.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "mt-7 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 px-3 text-[10px] font-black tracking-[0.22em] text-zinc-600",
                                children: "NAVIGASI"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PremiumSidebar.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                className: `flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-bold transition ${item("dashboard")}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-amber-300",
                                        children: "⌂"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                                        lineNumber: 37,
                                        columnNumber: 151
                                    }, this),
                                    " Dashboard"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PremiumSidebar.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/generators/animation-menu",
                                className: `flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-bold transition ${item("animation")}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-cyan-300",
                                        children: "▣"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                                        lineNumber: 38,
                                        columnNumber: 167
                                    }, this),
                                    " Animasi"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PremiumSidebar.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/generators/storytelling-menu",
                                className: `flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-bold transition ${item("storytelling")}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-violet-300",
                                        children: "▱"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                                        lineNumber: 39,
                                        columnNumber: 173
                                    }, this),
                                    " Storytelling"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PremiumSidebar.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/generators/affiliate",
                                className: `flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-bold transition ${item("affiliate")}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-amber-300",
                                        children: "↗"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                                        lineNumber: 40,
                                        columnNumber: 162
                                    }, this),
                                    " Affiliate"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PremiumSidebar.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PremiumSidebar.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full shrink-0 border-b border-white/[0.07] bg-[#070b14]/95 px-4 py-3 backdrop-blur-md lg:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-12 items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard",
                            onClick: closeMobile,
                            className: "flex min-w-0 items-center gap-2 font-serif text-base font-black tracking-[0.16em] text-amber-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/driacom-logo.png",
                                    alt: "Driacom",
                                    className: "h-8 w-8 shrink-0 object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "DRIACOM"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PremiumSidebar.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setMobileOpen(true),
                            "aria-label": "Buka menu navigasi",
                            "aria-expanded": mobileOpen,
                            className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/[0.10] bg-white/[0.025] text-2xl leading-none text-zinc-200 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition hover:border-cyan-400/30 hover:text-white",
                            children: "☰"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PremiumSidebar.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PremiumSidebar.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Tutup menu",
                        onClick: closeMobile,
                        className: "absolute inset-0 bg-black/65 backdrop-blur-[2px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "absolute inset-y-0 left-0 flex w-[min(84vw,320px)] flex-col border-r border-white/[0.09] bg-[#070b14] p-5 shadow-[20px_0_80px_rgba(0,0,0,0.55)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-3 border-b border-white/[0.07] pb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard",
                                        onClick: closeMobile,
                                        className: "flex min-w-0 items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/driacom-logo.png",
                                                    alt: "Driacom",
                                                    className: "h-full w-full object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PremiumSidebar.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PremiumSidebar.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-serif text-lg font-black tracking-wide text-amber-200",
                                                        children: "DRIACOM"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[8px] font-bold tracking-[0.24em] text-zinc-600",
                                                        children: "PROMPT AI GENERATOR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PremiumSidebar.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: closeMobile,
                                        "aria-label": "Tutup menu",
                                        className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-xl text-zinc-400 hover:text-white",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PremiumSidebar.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "mt-6 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 px-3 text-[10px] font-black tracking-[0.22em] text-zinc-600",
                                        children: "NAVIGASI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard",
                                        onClick: closeMobile,
                                        className: `flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-bold transition ${item("dashboard")}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amber-300",
                                                children: "⌂"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PremiumSidebar.tsx",
                                                lineNumber: 82,
                                                columnNumber: 179
                                            }, this),
                                            " Dashboard"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/generators/animation-menu",
                                        onClick: closeMobile,
                                        className: `flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-bold transition ${item("animation")}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-cyan-300",
                                                children: "▣"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PremiumSidebar.tsx",
                                                lineNumber: 83,
                                                columnNumber: 195
                                            }, this),
                                            " Animasi"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/generators/storytelling-menu",
                                        onClick: closeMobile,
                                        className: `flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-bold transition ${item("storytelling")}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-violet-300",
                                                children: "▱"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PremiumSidebar.tsx",
                                                lineNumber: 84,
                                                columnNumber: 201
                                            }, this),
                                            " Storytelling"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/generators/affiliate",
                                        onClick: closeMobile,
                                        className: `flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-bold transition ${item("affiliate")}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amber-300",
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PremiumSidebar.tsx",
                                                lineNumber: 85,
                                                columnNumber: 190
                                            }, this),
                                            " Affiliate"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PremiumSidebar.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PremiumSidebar.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PremiumSidebar.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PremiumSidebar.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/RewardTokenModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RewardTokenModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const PRODUCTION_REWARDED_ID = "ca-app-pub-2212969526982215/8607793884";
async function showRewardedAd() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) return false;
    try {
        const { AdMob } = await __turbopack_context__.A("[project]/node_modules/@capacitor-community/admob/dist/esm/index.js [app-ssr] (ecmascript, async loader)");
        await AdMob.initialize();
        const adId = process.env.NEXT_PUBLIC_ADMOB_REWARDED_ID || "ca-app-pub-2212969526982215/8607793884";
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
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) {
            setStep(0);
            setBusy(false);
            setMessage("");
        }
    }, [
        open
    ]);
    if (!open) return null;
    async function watchNext() {
        setBusy(true);
        setMessage("");
        const ok = await showRewardedAd();
        if (!ok) {
            setBusy(false);
            setMessage(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform() ? "Iklan belum tersedia. Coba lagi beberapa saat." : "Bonus iklan rewarded tersedia di aplikasi Android Driacom.");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md",
        onMouseDown: (e)=>{
            if (e.target === e.currentTarget && !busy) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md overflow-hidden rounded-[28px] border border-violet-300/20 bg-[#090e16] shadow-[0_30px_100px_rgba(0,0,0,.6)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-white/[0.07] p-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-black tracking-[0.22em] text-violet-300",
                                        children: "BONUS TOKEN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RewardTokenModal.tsx",
                                        lineNumber: 56,
                                        columnNumber: 118
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-2 text-2xl font-black text-white",
                                        children: "Dapatkan +1 Token"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RewardTokenModal.tsx",
                                        lineNumber: 56,
                                        columnNumber: 205
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RewardTokenModal.tsx",
                                lineNumber: 56,
                                columnNumber: 113
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                disabled: busy,
                                className: "flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-zinc-400 hover:text-white",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RewardTokenModal.tsx",
                                lineNumber: 56,
                                columnNumber: 285
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RewardTokenModal.tsx",
                        lineNumber: 56,
                        columnNumber: 57
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/RewardTokenModal.tsx",
                    lineNumber: 56,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5 p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm leading-6 text-zinc-400",
                            children: [
                                "Tonton ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    className: "text-white",
                                    children: "2 video iklan"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RewardTokenModal.tsx",
                                    lineNumber: 58,
                                    columnNumber: 63
                                }, this),
                                " untuk mendapatkan 1 token generate gratis. Bonus ini maksimal 1 kali per hari."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RewardTokenModal.tsx",
                            lineNumber: 58,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                0,
                                1
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `rounded-2xl border p-4 text-center ${step > i ? "border-emerald-300/30 bg-emerald-300/[0.06]" : "border-white/10 bg-white/[0.02]"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl",
                                            children: step > i ? "✓" : `${i + 1}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RewardTokenModal.tsx",
                                            lineNumber: 59,
                                            columnNumber: 223
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[10px] font-black tracking-wider text-zinc-500",
                                            children: step > i ? "SELESAI" : `IKLAN ${i + 1}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RewardTokenModal.tsx",
                                            lineNumber: 59,
                                            columnNumber: 281
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/RewardTokenModal.tsx",
                                    lineNumber: 59,
                                    columnNumber: 65
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/RewardTokenModal.tsx",
                            lineNumber: 59,
                            columnNumber: 9
                        }, this),
                        message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `rounded-xl border p-3 text-xs leading-5 ${step === 2 ? "border-emerald-300/20 bg-emerald-300/[0.05] text-emerald-200" : "border-amber-300/20 bg-amber-300/[0.05] text-amber-200"}`,
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/components/RewardTokenModal.tsx",
                            lineNumber: 60,
                            columnNumber: 20
                        }, this) : null,
                        step < 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: busy,
                            onClick: watchNext,
                            className: "w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 px-5 py-4 text-sm font-black text-white disabled:opacity-40",
                            children: busy ? "Menyiapkan iklan..." : `▶ Tonton Iklan ${step + 1}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/RewardTokenModal.tsx",
                            lineNumber: 61,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "w-full rounded-2xl bg-emerald-400 px-5 py-4 text-sm font-black text-[#041014]",
                            children: "Gunakan Token Sekarang"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RewardTokenModal.tsx",
                            lineNumber: 61,
                            columnNumber: 304
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-white/[0.07] pt-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-zinc-600",
                                    children: "Atau nikmati generate tanpa batas dan tanpa iklan."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RewardTokenModal.tsx",
                                    lineNumber: 62,
                                    columnNumber: 72
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/upgrade",
                                    onClick: onClose,
                                    className: "mt-2 inline-flex text-xs font-black text-violet-300 hover:text-violet-200",
                                    children: "👑 Upgrade ke PRO →"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RewardTokenModal.tsx",
                                    lineNumber: 62,
                                    columnNumber: 163
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RewardTokenModal.tsx",
                            lineNumber: 62,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RewardTokenModal.tsx",
                    lineNumber: 57,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RewardTokenModal.tsx",
            lineNumber: 55,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/RewardTokenModal.tsx",
        lineNumber: 54,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/WorkspaceBackButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkspaceBackButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
function WorkspaceBackButton() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>router.push("/dashboard"),
        className: "inline-flex min-h-10 shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3.5 py-2.5 text-xs font-bold text-zinc-200 shadow-lg shadow-black/10 backdrop-blur-xl transition hover:border-cyan-400/35 hover:bg-cyan-400/[0.05] hover:text-white active:scale-[0.98] sm:min-h-11 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm",
        "aria-label": "Kembali ke Dashboard",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-base leading-none",
                "aria-hidden": "true",
                children: "←"
            }, void 0, false, {
                fileName: "[project]/src/components/WorkspaceBackButton.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Kembali"
            }, void 0, false, {
                fileName: "[project]/src/components/WorkspaceBackButton.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WorkspaceBackButton.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/prompts/animation/defaults.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/lib/use-prompt-usage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePromptUsage",
    ()=>usePromptUsage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function usePromptUsage(menu) {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const r = await fetch(`/api/usage?menu=${menu}`, {
                cache: "no-store"
            });
            const d = await r.json();
            if (r.ok) setStatus(d);
        } catch  {}
    }, [
        menu
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        refresh();
    }, [
        refresh
    ]);
    return {
        status,
        refresh
    };
}
}),
];

//# sourceMappingURL=src_20owayx._.js.map