(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/hallway-integrated/v0-hallway/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient,
    "getDomainError",
    ()=>getDomainError,
    "isCollegeEmail",
    ()=>isCollegeEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://weydzkbbhnbzqzwhkqxi.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndleWR6a2JiaG5ienF6d2hrcXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2NDIyNjAsImV4cCI6MjA4ODIxODI2MH0.lBuqqUp3U_rbrVk3nnktVKbj7FHnwCAqL4yASKGm_T8"));
}
const ALLOWED_DOMAINS = [
    ".edu",
    ".ac.in",
    ".edu.in",
    ".ernet.in",
    "tnu.in"
];
function isCollegeEmail(email) {
    const lower = email.toLowerCase().trim();
    if (!lower.includes("@")) return false;
    const domain = lower.split("@")[1];
    if (!domain) return false;
    return ALLOWED_DOMAINS.some((d)=>d.startsWith(".") ? domain.endsWith(d) : domain === d);
}
function getDomainError(email) {
    const lower = email.toLowerCase().trim();
    if (!lower.includes("@")) return "Please enter a valid email address.";
    const domain = lower.split("@")[1];
    return `"${domain}" is not a recognized college domain. Use a .edu, .ac.in, .edu.in, or tnu.in email.`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthScreen",
    ()=>AuthScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AuthScreen() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [authState, setAuthState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    async function handleSubmit() {
        if (!email.trim()) return;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCollegeEmail"])(email)) {
            setErrorMsg((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDomainError"])(email));
            setAuthState("error");
            return;
        }
        setAuthState("loading");
        setErrorMsg("");
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        const { error } = await supabase.auth.signInWithOtp({
            email: email.trim().toLowerCase(),
            options: {
                emailRedirectTo: `${window.location.origin}/auth/callback`,
                shouldCreateUser: true
            }
        });
        if (error) {
            setErrorMsg(error.message);
            setAuthState("error");
        } else setAuthState("sent");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-[#0a0e1a]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:flex lg:w-1/2 flex-col justify-center p-16 bg-[#060912]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                    className: "h-6 w-6 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl font-bold text-white",
                                children: "Hallway"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold text-white mb-4",
                        children: "Verified Campus Community"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-lg leading-relaxed mb-8",
                        children: "Join verified college students for real 1-on-1 video chats. Hallway requires a valid college email to keep our community safe and exclusive."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    [
                        "College email verification required",
                        "Private & secure video calls",
                        "Interest-based student matching"
                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "h-5 w-5 text-primary shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: item
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, item, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col items-center justify-center p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-8 lg:hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                        className: "h-5 w-5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold text-white",
                                    children: "Hallway"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        authState === "sent" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-border/40 bg-card p-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "h-12 w-12 text-primary mx-auto mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-white mb-2",
                                    children: "Check your email!"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground mb-2",
                                    children: "We sent a magic link to"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-primary mb-6",
                                    children: email
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground mb-6",
                                    children: "Click the link to sign in. Check spam if you don't see it."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setAuthState("idle");
                                        setEmail("");
                                    },
                                    className: "text-sm text-muted-foreground hover:text-white transition-colors",
                                    children: "Use a different email"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-border/40 bg-card p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-white mb-2",
                                    children: "Sign in to Hallway"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground mb-8",
                                    children: "Use your college email to get started"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-white mb-2 block",
                                                    children: "College Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "email",
                                                            value: email,
                                                            onChange: (e)=>{
                                                                setEmail(e.target.value);
                                                                if (authState === "error") setAuthState("idle");
                                                            },
                                                            onKeyDown: (e)=>e.key === "Enter" && handleSubmit(),
                                                            placeholder: "you@university.ac.in",
                                                            className: "w-full rounded-xl border border-border bg-secondary pl-10 pr-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground mt-2",
                                                    children: [
                                                        "Accepted: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary",
                                                            children: ".edu · .ac.in · .edu.in · tnu.in"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this),
                                        authState === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "h-4 w-4 mt-0.5 shrink-0 text-destructive"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-destructive",
                                                    children: errorMsg
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSubmit,
                                            disabled: authState === "loading" || !email.trim(),
                                            className: "w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-primary text-white font-semibold text-sm transition hover:bg-primary/90 disabled:opacity-50",
                                            children: authState === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Sending magic link..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    "Continue with College Email ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 51
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center text-xs text-muted-foreground",
                                            children: "We'll send you a magic link — no password needed 🪄"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(AuthScreen, "Tjaxp+DbxrudA50UNLeoiV2OON8=");
_c = AuthScreen;
var _c;
__turbopack_context__.k.register(_c, "AuthScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InterestSelection",
    ()=>InterestSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/dumbbell.js [app-client] (ecmascript) <export default as Dumbbell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/heart-pulse.js [app-client] (ecmascript) <export default as HeartPulse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$telescope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Telescope$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/telescope.js [app-client] (ecmascript) <export default as Telescope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dog$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/dog.js [app-client] (ecmascript) <export default as Dog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mountain.js [app-client] (ecmascript) <export default as Mountain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const INTERESTS = [
    {
        label: "Computer Science",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        color: "#3b82f6"
    },
    {
        label: "Music",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
        color: "#a855f7"
    },
    {
        label: "Gaming",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"],
        color: "#ef4444"
    },
    {
        label: "Movies & TV",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"],
        color: "#f59e0b"
    },
    {
        label: "Fitness",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"],
        color: "#10b981"
    },
    {
        label: "Art & Design",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        color: "#ec4899"
    },
    {
        label: "Travel",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        color: "#06b6d4"
    },
    {
        label: "Study Buddies",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        color: "#3b82f6"
    },
    {
        label: "Photography",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
        color: "#8b5cf6"
    },
    {
        label: "Podcasts",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"],
        color: "#f97316"
    },
    {
        label: "Mental Health",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"],
        color: "#ef4444"
    },
    {
        label: "Foodie",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"],
        color: "#eab308"
    },
    {
        label: "Astronomy",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$telescope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Telescope$3e$__["Telescope"],
        color: "#6366f1"
    },
    {
        label: "Grad School",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        color: "#3b82f6"
    },
    {
        label: "Coffee Chat",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"],
        color: "#d97706"
    },
    {
        label: "Pets",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dog$3e$__["Dog"],
        color: "#f97316"
    },
    {
        label: "Outdoors",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__["Mountain"],
        color: "#22c55e"
    },
    {
        label: "Party Culture",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        color: "#d946ef"
    }
];
function InterestSelection({ onStart, user, onSignOut }) {
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    function toggleInterest(label) {
        setSelected((prev)=>prev.includes(label) ? prev.filter((i)=>i !== label) : [
                ...prev,
                label
            ]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0a0e1a] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-10 border-b border-border/40 bg-[#0a0e1a]/95 backdrop-blur-sm px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-5xl items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                        className: "h-5 w-5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold text-white",
                                    children: "Hallway"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        user && onSignOut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden text-xs text-muted-foreground sm:block",
                                    children: user.email
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onSignOut,
                                    className: "flex items-center gap-1.5 rounded-lg border border-border/40 bg-card px-3 py-1.5 text-xs text-muted-foreground transition hover:text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        "Sign out"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto max-w-5xl px-6 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold tracking-tight text-white",
                                children: "What are you into?"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-lg text-muted-foreground",
                                children: "Select your interests to find the right students to connect with."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex flex-wrap gap-2.5",
                        children: INTERESTS.map(({ label, icon: Icon, color })=>{
                            const isActive = selected.includes(label);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleInterest(label),
                                className: "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-150",
                                style: isActive ? {
                                    borderColor: color + "60",
                                    background: color + "18",
                                    color: color
                                } : {
                                    borderColor: "rgba(255,255,255,0.1)",
                                    background: "rgba(255,255,255,0.03)",
                                    color: "rgba(255,255,255,0.55)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "h-3.5 w-3.5",
                                        style: isActive ? {
                                            color
                                        } : {}
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this),
                                    label
                                ]
                            }, label, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-10 text-sm text-muted-foreground",
                        children: selected.length === 0 ? "Pick at least one — or skip to chat randomly" : `${selected.length} selected · matching you with students who love ${selected.slice(0, 2).join(" & ")}${selected.length > 2 ? ` +${selected.length - 2} more` : ""}`
                    }, void 0, false, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 sm:flex-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onStart(selected),
                                className: "flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-10 text-sm font-semibold text-white transition hover:bg-primary/90",
                                style: {
                                    boxShadow: "0 4px 20px rgba(59,130,246,0.3)"
                                },
                                children: [
                                    "Start Chatting",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onStart([]),
                                className: "flex h-12 items-center justify-center gap-2 rounded-xl border border-border/40 px-8 text-sm font-medium text-muted-foreground transition hover:text-white",
                                children: "Skip — chat randomly"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(InterestSelection, "lGSfRvmoWXlCcuuisg7PtZk/Isc=");
_c = InterestSelection;
var _c;
__turbopack_context__.k.register(_c, "InterestSelection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/hooks/useSocket.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSocket",
    ()=>useSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$simple$2d$peer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/simple-peer/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const SOCKET_URL = ("TURBOPACK compile-time value", "https://campuslink-server-1.onrender.com") || "http://localhost:4000";
function useSocket(interests) {
    _s();
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const peerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const localStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentCameraIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [onlineCount, setOnlineCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [localStream, setLocalStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [remoteStream, setRemoteStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Initialise socket once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSocket.useEffect": ()=>{
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(SOCKET_URL, {
                transports: [
                    "websocket"
                ]
            });
            socketRef.current = socket;
            socket.on("online-count", {
                "useSocket.useEffect": (count)=>setOnlineCount(count)
            }["useSocket.useEffect"]);
            socket.on("matched", {
                "useSocket.useEffect": ({ initiator })=>{
                    setStatus("connected");
                    setMessages([]);
                    createPeer(initiator);
                }
            }["useSocket.useEffect"]);
            socket.on("signal", {
                "useSocket.useEffect": (data)=>{
                    peerRef.current?.signal(data);
                }
            }["useSocket.useEffect"]);
            socket.on("chat-message", {
                "useSocket.useEffect": (text)=>{
                    setMessages({
                        "useSocket.useEffect": (prev)=>[
                                ...prev,
                                {
                                    text,
                                    self: false
                                }
                            ]
                    }["useSocket.useEffect"]);
                }
            }["useSocket.useEffect"]);
            socket.on("partner-left", {
                "useSocket.useEffect": ()=>{
                    destroyPeer();
                    setStatus("idle");
                    setRemoteStream(null);
                    setMessages([]);
                }
            }["useSocket.useEffect"]);
            return ({
                "useSocket.useEffect": ()=>{
                    socket.disconnect();
                    destroyPeer();
                    stopLocalStream();
                }
            })["useSocket.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useSocket.useEffect"], []);
    function destroyPeer() {
        peerRef.current?.destroy();
        peerRef.current = null;
    }
    function stopLocalStream() {
        localStreamRef.current?.getTracks().forEach((t)=>t.stop());
        localStreamRef.current = null;
        setLocalStream(null);
    }
    async function getLocalStream() {
        if (localStreamRef.current) return localStreamRef.current;
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        });
        localStreamRef.current = stream;
        setLocalStream(stream);
        return stream;
    }
    function createPeer(initiator) {
        getLocalStream().then((stream)=>{
            const peer = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$simple$2d$peer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                initiator,
                trickle: true,
                stream
            });
            peer.on("signal", (data)=>{
                socketRef.current?.emit("signal", data);
            });
            peer.on("stream", (remoteStream)=>{
                setRemoteStream(remoteStream);
            });
            peer.on("error", (err)=>{
                console.error("Peer error:", err);
                destroyPeer();
                setStatus("idle");
            });
            peer.on("close", ()=>{
                setRemoteStream(null);
                setStatus("idle");
            });
            peerRef.current = peer;
        }).catch((err)=>{
            console.error("Failed to get local stream:", err);
        });
    }
    const findMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocket.useCallback[findMatch]": ()=>{
            setStatus("waiting");
            setMessages([]);
            setRemoteStream(null);
            destroyPeer();
            socketRef.current?.emit("find-match", {
                interests
            });
        }
    }["useSocket.useCallback[findMatch]"], [
        interests
    ]);
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocket.useCallback[next]": ()=>{
            destroyPeer();
            setStatus("waiting");
            setMessages([]);
            setRemoteStream(null);
            socketRef.current?.emit("next", {
                interests
            });
        }
    }["useSocket.useCallback[next]"], [
        interests
    ]);
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocket.useCallback[sendMessage]": (text)=>{
            socketRef.current?.emit("chat-message", text);
            setMessages({
                "useSocket.useCallback[sendMessage]": (prev)=>[
                        ...prev,
                        {
                            text,
                            self: true
                        }
                    ]
            }["useSocket.useCallback[sendMessage]"]);
        }
    }["useSocket.useCallback[sendMessage]"], []);
    const report = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocket.useCallback[report]": (reason)=>{
            socketRef.current?.emit("report", {
                reason
            });
        }
    }["useSocket.useCallback[report]"], []);
    const switchCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocket.useCallback[switchCamera]": async ()=>{
            try {
                const devices = await navigator.mediaDevices.enumerateDevices();
                const videoDevices = devices.filter({
                    "useSocket.useCallback[switchCamera].videoDevices": (d)=>d.kind === "videoinput"
                }["useSocket.useCallback[switchCamera].videoDevices"]);
                if (videoDevices.length < 2) return;
                currentCameraIndex.current = (currentCameraIndex.current + 1) % videoDevices.length;
                const deviceId = videoDevices[currentCameraIndex.current].deviceId;
                const newStream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        deviceId: {
                            exact: deviceId
                        }
                    },
                    audio: true
                });
                // Replace video track in the peer connection
                const oldVideoTrack = localStreamRef.current?.getVideoTracks()[0];
                const newVideoTrack = newStream.getVideoTracks()[0];
                if (peerRef.current && oldVideoTrack) {
                    // @ts-ignore — simple-peer internal
                    const sender = peerRef.current._pc?.getSenders().find({
                        "useSocket.useCallback[switchCamera]": (s)=>s.track?.kind === "video"
                    }["useSocket.useCallback[switchCamera]"]);
                    sender?.replaceTrack(newVideoTrack);
                }
                // Stop old stream tracks
                localStreamRef.current?.getTracks().forEach({
                    "useSocket.useCallback[switchCamera]": (t)=>t.stop()
                }["useSocket.useCallback[switchCamera]"]);
                localStreamRef.current = newStream;
                setLocalStream(newStream);
            } catch (err) {
                console.error("switchCamera error:", err);
            }
        }
    }["useSocket.useCallback[switchCamera]"], []);
    return {
        status,
        onlineCount,
        messages,
        localStream,
        remoteStream,
        findMatch,
        next,
        sendMessage,
        report,
        switchCamera
    };
}
_s(useSocket, "N38ywx+Ukp01JpI2oVSP6IOtdb8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatRoom",
    ()=>ChatRoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/video-off.js [app-client] (ecmascript) <export default as VideoOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flip$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlipHorizontal$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/flip-horizontal.js [app-client] (ecmascript) <export default as FlipHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/hooks/useSocket.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ChatRoom({ interests, onExit }) {
    _s();
    const { status, onlineCount, messages, localStream, remoteStream, findMatch, next, sendMessage, report, switchCamera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocket"])(interests);
    const [showReport, setShowReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [micOn, setMicOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [camOn, setCamOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const localVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const remoteVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatRoom.useEffect": ()=>{
            findMatch();
        }
    }["ChatRoom.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatRoom.useEffect": ()=>{
            if (localVideoRef.current && localStream) localVideoRef.current.srcObject = localStream;
        }
    }["ChatRoom.useEffect"], [
        localStream
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatRoom.useEffect": ()=>{
            if (remoteVideoRef.current && remoteStream) remoteVideoRef.current.srcObject = remoteStream;
        }
    }["ChatRoom.useEffect"], [
        remoteStream
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatRoom.useEffect": ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["ChatRoom.useEffect"], [
        messages
    ]);
    function toggleMic() {
        localStream?.getAudioTracks().forEach((t)=>t.enabled = !t.enabled);
        setMicOn((v)=>!v);
    }
    function toggleCam() {
        localStream?.getVideoTracks().forEach((t)=>t.enabled = !t.enabled);
        setCamOn((v)=>!v);
    }
    function handleSend() {
        if (!inputText.trim()) return;
        sendMessage(inputText.trim());
        setInputText("");
    }
    function handleReport(reason) {
        setShowReport(false);
        report(reason);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-dvh flex-col bg-[#0a0e1a] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex shrink-0 items-center justify-between border-b border-border/40 bg-[#060912] px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                    className: "h-4 w-4 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-white",
                                children: "Hallway"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden items-center gap-1.5 rounded-full border border-border/40 bg-card px-2.5 py-1 text-xs sm:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 w-1.5 animate-pulse rounded-full bg-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "h-3 w-3 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: [
                                            onlineCount || "...",
                                            " online"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            interests.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden items-center gap-1.5 md:flex",
                                children: [
                                    interests.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary",
                                            children: tag
                                        }, tag, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this)),
                                    interests.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: [
                                            "+",
                                            interests.length - 3
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 56,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 rounded-full border border-border/40 bg-card px-3 py-1.5 text-xs font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        className: "h-3 w-3 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "Verified"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onExit,
                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-card text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-0 flex-1 flex-col md:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-0 flex-1 flex-col gap-3 p-3 md:p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid min-h-0 flex-1 grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative overflow-hidden rounded-2xl bg-card",
                                        children: [
                                            localStream ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                ref: localVideoRef,
                                                autoPlay: true,
                                                muted: true,
                                                playsInline: true,
                                                className: "h-full w-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-full flex-col items-center justify-center gap-2 text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                                        className: "h-8 w-8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs",
                                                        children: "No camera"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-1.5 w-1.5 rounded-full bg-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-white",
                                                        children: "You"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-3 right-3 flex gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: toggleMic,
                                                        className: `flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-sm transition ${micOn ? "bg-black/60 text-white" : "bg-destructive/80 text-white"}`,
                                                        children: micOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 28
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 62
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: toggleCam,
                                                        className: `flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-sm transition ${camOn ? "bg-black/60 text-white" : "bg-destructive/80 text-white"}`,
                                                        children: camOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 28
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 64
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: switchCamera,
                                                        className: "flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flip$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlipHorizontal$3e$__["FlipHorizontal"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative overflow-hidden rounded-2xl bg-card",
                                        children: [
                                            remoteStream ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                ref: remoteVideoRef,
                                                autoPlay: true,
                                                playsInline: true,
                                                className: "h-full w-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-full flex-col items-center justify-center gap-3 text-muted-foreground",
                                                children: status === "waiting" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-7 w-7 animate-spin rounded-full border-2 border-t-transparent border-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            children: "Finding a match..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                                            className: "h-8 w-8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            children: "Waiting..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `h-1.5 w-1.5 rounded-full ${status === "connected" ? "bg-primary" : "bg-yellow-400"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-white",
                                                        children: status === "waiting" ? "Searching..." : "Stranger"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex shrink-0 items-center justify-between rounded-2xl border border-border/40 bg-card px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowReport(!showReport),
                                                className: "flex items-center gap-1.5 rounded-xl border border-border/40 bg-secondary px-3 py-2 text-xs font-medium text-muted-foreground transition hover:border-destructive/40 hover:text-destructive",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Report"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            showReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-12 left-0 z-20 rounded-2xl border border-border/40 bg-[#111827] p-3 shadow-2xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-2 text-xs font-semibold text-muted-foreground",
                                                        children: "Report reason"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this),
                                                    [
                                                        "Inappropriate",
                                                        "Harassment",
                                                        "Spam",
                                                        "Underage"
                                                    ].map((reason)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleReport(reason),
                                                            className: "block w-full rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive",
                                                            children: reason
                                                        }, reason, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            status === "connected" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden text-xs text-muted-foreground sm:block",
                                                children: "Connected with a student"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 156,
                                                columnNumber: 42
                                            }, this),
                                            status === "waiting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden text-xs text-primary sm:block",
                                                children: "Finding match..."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 157,
                                                columnNumber: 40
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: next,
                                                className: "flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Next"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full shrink-0 flex-col border-t border-border/40 md:w-80 md:border-l md:border-t-0 lg:w-96",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex shrink-0 items-center justify-between border-b border-border/40 bg-[#060912] px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-white",
                                        children: "Room Chat"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 rounded-full border border-border/40 bg-card px-2.5 py-1 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1.5 w-1.5 rounded-full bg-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 172,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: status === "connected" ? "2 online" : "1 online"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 173,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto px-4 py-4 space-y-3",
                                style: {
                                    minHeight: 0
                                },
                                children: [
                                    messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center text-sm text-muted-foreground",
                                            children: status === "waiting" ? "Finding you a match..." : "Say hi! 👋"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex ${msg.self ? "justify-end" : "justify-start"}`,
                                            children: [
                                                !msg.self && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary",
                                                    children: "S"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${msg.self ? "rounded-tr-sm bg-primary text-white" : "rounded-tl-sm bg-card text-white"}`,
                                                    children: [
                                                        !msg.self && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mb-0.5 block text-xs font-semibold text-muted-foreground",
                                                            children: "Stranger"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 33
                                                        }, this),
                                                        msg.text
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: messagesEndRef
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shrink-0 border-t border-border/40 bg-[#060912] px-3 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: inputText,
                                            onChange: (e)=>setInputText(e.target.value),
                                            onKeyDown: (e)=>e.key === "Enter" && handleSend(),
                                            placeholder: status === "connected" ? "Type a message..." : "Waiting for connection...",
                                            disabled: status !== "connected",
                                            className: "flex-1 rounded-xl border border-border/40 bg-card px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-40"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSend,
                                            disabled: status !== "connected" || !inputText.trim(),
                                            className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition hover:bg-primary/90 disabled:opacity-30",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(ChatRoom, "MEBv0l6lhp9RJoKogiclmFN5Oe8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$hooks$2f$useSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocket"]
    ];
});
_c = ChatRoom;
var _c;
__turbopack_context__.k.register(_c, "ChatRoom");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$auth$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$interest$2d$selection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$chat$2d$room$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const ACCENT = "#3b82f6";
function HallwayIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 80 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "80",
                height: "80",
                rx: "16",
                fill: ACCENT
            }, void 0, false, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "16",
                y: "20",
                width: "9",
                height: "40",
                rx: "1.5",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "35",
                y: "34",
                width: "9",
                height: "9",
                rx: "1.5",
                fill: "white",
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "54",
                y: "20",
                width: "9",
                height: "40",
                rx: "1.5",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "16",
                y: "40",
                width: "47",
                height: "2",
                rx: "1",
                fill: "white",
                opacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = HallwayIcon;
function HomePage() {
    _s();
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("loading");
    const [selectedInterests, setSelectedInterests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [onlineCount, setOnlineCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
            supabase.auth.getSession().then({
                "HomePage.useEffect": ({ data: { session } })=>{
                    if (session?.user) {
                        setUser(session.user);
                        setScreen("interests");
                    } else setScreen("landing");
                }
            }["HomePage.useEffect"]);
            const { data: { subscription } } = supabase.auth.onAuthStateChange({
                "HomePage.useEffect": (_event, session)=>{
                    if (session?.user) {
                        setUser(session.user);
                        setScreen("interests");
                    } else {
                        setUser(null);
                        setScreen("landing");
                    }
                }
            }["HomePage.useEffect"]);
            return ({
                "HomePage.useEffect": ()=>subscription.unsubscribe()
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            let count = 0;
            const target = 128;
            const timer = setInterval({
                "HomePage.useEffect.timer": ()=>{
                    count += Math.ceil((target - count) / 8);
                    if (count >= target) {
                        count = target;
                        clearInterval(timer);
                    }
                    setOnlineCount(count);
                }
            }["HomePage.useEffect.timer"], 50);
            return ({
                "HomePage.useEffect": ()=>clearInterval(timer)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    async function handleSignOut() {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        await supabase.auth.signOut();
        setScreen("landing");
        setUser(null);
        setSelectedInterests([]);
    }
    if (screen === "loading") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-[#0a0e1a]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 w-8 animate-spin rounded-full border-2 border-t-transparent border-primary"
            }, void 0, false, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    if (screen === "auth") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$auth$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthScreen"], {}, void 0, false, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
        lineNumber: 72,
        columnNumber: 33
    }, this);
    if (screen === "interests") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$interest$2d$selection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InterestSelection"], {
        onStart: (i)=>{
            setSelectedInterests(i);
            setScreen("chat");
        },
        user: user,
        onSignOut: handleSignOut
    }, void 0, false, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
        lineNumber: 73,
        columnNumber: 38
    }, this);
    if (screen === "chat") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$chat$2d$room$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatRoom"], {
        interests: selectedInterests,
        onExit: ()=>{
            setScreen("interests");
            setSelectedInterests([]);
        }
    }, void 0, false, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
        lineNumber: 74,
        columnNumber: 33
    }, this);
    // Inline Navy Blue UI matching UniTalk Reference
    const bg = "bg-[#0a0e1a]";
    const cardBg = "bg-[#111827]";
    const border = "border-[#1e3a5f]";
    const muted = "text-slate-400";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-dvh ${bg} text-white`,
        style: {
            fontFamily: "'DM Sans', 'Inter', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed top-0 left-0 right-0 z-50 border-b ${border} bg-[#0a0e1a]/95 backdrop-blur-sm`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HallwayIcon, {}, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold text-white",
                                    children: "Hallway"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden items-center gap-8 md:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-sm ${muted}`,
                                    children: "Features"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-sm ${muted}`,
                                    children: "Network"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-sm ${muted}`,
                                    children: "Safety"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setScreen("auth"),
                                    className: `text-sm ${muted} transition hover:text-white px-3 py-2`,
                                    children: "Log in"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setScreen("auth"),
                                    className: "rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90",
                                    style: {
                                        background: ACCENT
                                    },
                                    children: "Join Now"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-10 blur-3xl",
                            style: {
                                background: `radial-gradient(circle, ${ACCENT}, transparent)`
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                            lineNumber: 102,
                            columnNumber: 79
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium",
                                            style: {
                                                borderColor: ACCENT + "40",
                                                background: ACCENT + "14",
                                                color: ACCENT
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 201
                                                }, this),
                                                "Verified Students Only"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl",
                                            children: [
                                                "The Exclusive Space for ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: ACCENT
                                                    },
                                                    children: "Verified Scholars"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 151
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `mt-6 text-lg leading-relaxed ${muted}`,
                                            children: "Connect with peers globally using your university email. Join a secure, verified network built for the next generation of academic leaders."
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex max-w-sm flex-1 overflow-hidden rounded-xl border",
                                                style: {
                                                    borderColor: ACCENT + "40",
                                                    background: "#111827"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        placeholder: "Enter your .edu email",
                                                        className: "flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setScreen("auth"),
                                                        className: "m-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90",
                                                        style: {
                                                            background: ACCENT
                                                        },
                                                        children: "Get Started"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 flex items-center gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-sm ${muted}`,
                                                children: [
                                                    "Joined by ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-white",
                                                        children: "500,000+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 108
                                                    }, this),
                                                    " students this month"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 61
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `relative overflow-hidden rounded-2xl border ${border} ${cardBg} p-6`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `rounded-xl border ${border} ${bg} overflow-hidden`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 border-b border-[#1e3a5f] px-4 py-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-8 w-8 items-center justify-center rounded-full",
                                                        style: {
                                                            background: ACCENT
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                            className: "h-4 w-4 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 121
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-white",
                                                                children: "Live Video Match"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 24
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-xs ${muted}`,
                                                                children: "Connecting you now..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 92
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ml-auto flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs",
                                                        style: {
                                                            borderColor: ACCENT + "40",
                                                            color: ACCENT
                                                        },
                                                        children: [
                                                            onlineCount,
                                                            " online"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 rounded-lg bg-[#1e293b] p-3 text-xs text-slate-300",
                                                            children: "👋 Hey! CS student at MIT here..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 47
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 flex justify-end gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-lg p-3 text-xs text-white",
                                                            style: {
                                                                background: ACCENT
                                                            },
                                                            children: "Nice! I'm doing my thesis on ML too 🤝"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 64
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 lg:py-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden rounded-2xl p-10 text-center border",
                        style: {
                            borderColor: ACCENT,
                            background: ACCENT + "10"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-white sm:text-4xl",
                                children: [
                                    "Ready to meet your",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 89
                                    }, this),
                                    "academic community?"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setScreen("auth"),
                                    className: "rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90",
                                    style: {
                                        background: ACCENT
                                    },
                                    children: "Join Now"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(HomePage, "vYvIvy+ysN5IWRUj4n3FxpK6Jqc=");
_c1 = HomePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "HallwayIcon");
__turbopack_context__.k.register(_c1, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_hallway-integrated_v0-hallway_bf0e12b0._.js.map