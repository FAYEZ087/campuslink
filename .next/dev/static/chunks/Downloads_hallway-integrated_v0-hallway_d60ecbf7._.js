(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/hallway-integrated/v0-hallway/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
function Navbar({ onGetStarted }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-[#0a0e1a]/95 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 100 100",
                            width: 36,
                            height: 36,
                            fill: "none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                        id: "bgN",
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#1a1a2e"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                                lineNumber: 18,
                                                columnNumber: 7
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "#0d0d1a"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                                lineNumber: 19,
                                                columnNumber: 7
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                        lineNumber: 17,
                                        columnNumber: 5
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 16,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    width: "100",
                                    height: "100",
                                    rx: "22",
                                    fill: "url(#bgN)"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 22,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    width: "100",
                                    height: "100",
                                    rx: "22",
                                    fill: "none",
                                    stroke: "#1e3a5f",
                                    strokeWidth: "1.5"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 23,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "0,0 0,100 26,78 26,22",
                                    fill: "#0f1629"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 24,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "100,0 100,100 74,78 74,22",
                                    fill: "#131a2e"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 25,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "0,0 100,0 74,22 26,22",
                                    fill: "#0c1220"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 26,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "0,100 100,100 74,78 26,78",
                                    fill: "#0a0f1a"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 27,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "26",
                                    y: "22",
                                    width: "48",
                                    height: "56",
                                    fill: "#0d1117",
                                    stroke: "#1e3a5f",
                                    strokeWidth: "1"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 28,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "0",
                                    y1: "0",
                                    x2: "50",
                                    y2: "50",
                                    stroke: "#3b82f6",
                                    strokeWidth: "0.8",
                                    opacity: "0.3"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 29,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "100",
                                    y1: "0",
                                    x2: "50",
                                    y2: "50",
                                    stroke: "#3b82f6",
                                    strokeWidth: "0.8",
                                    opacity: "0.3"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 30,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "0",
                                    y1: "100",
                                    x2: "50",
                                    y2: "50",
                                    stroke: "#3b82f6",
                                    strokeWidth: "0.8",
                                    opacity: "0.3"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 31,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "100",
                                    y1: "100",
                                    x2: "50",
                                    y2: "50",
                                    stroke: "#3b82f6",
                                    strokeWidth: "0.8",
                                    opacity: "0.3"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 32,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: "50",
                                    cy: "50",
                                    rx: "3.5",
                                    ry: "4.5",
                                    fill: "#3b82f6",
                                    opacity: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 33,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: "50",
                                    cy: "50",
                                    rx: "1.5",
                                    ry: "2",
                                    fill: "#3b82f6"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 34,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "50",
                                    cy: "43",
                                    r: "3.5",
                                    fill: "#3b82f6"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 35,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "47",
                                    y: "47.5",
                                    width: "6",
                                    height: "10",
                                    rx: "1.5",
                                    fill: "#3b82f6"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 36,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "63",
                                    y: "40",
                                    width: "9",
                                    height: "22",
                                    rx: "1.5",
                                    fill: "none",
                                    stroke: "#3b82f6",
                                    strokeWidth: "1",
                                    opacity: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                                    lineNumber: 37,
                                    columnNumber: 5
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl font-bold text-white",
                            children: "Hallway"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                            lineNumber: 39,
                            columnNumber: 3
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden items-center gap-8 md:flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#features",
                            className: "text-sm text-muted-foreground transition-colors hover:text-white",
                            children: "Features"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#safety",
                            className: "text-sm text-muted-foreground transition-colors hover:text-white",
                            children: "Safety"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#community",
                            className: "text-sm text-muted-foreground transition-colors hover:text-white",
                            children: "Community"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            onClick: onGetStarted,
                            className: "text-muted-foreground hover:text-white hover:bg-transparent",
                            children: "Log in"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onGetStarted,
                            className: "bg-primary text-white hover:bg-primary/90",
                            children: "Join Now"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function HeroSection({ onGetStarted }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        className: "h-4 w-4 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                        lineNumber: 19,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-primary",
                                        children: "Verified Students Only"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl",
                                children: [
                                    "Meet Students",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: "Who Share Your Vibe"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 text-lg leading-relaxed text-muted-foreground",
                                children: "Connect instantly with verified college students through 1-on-1 video chats. Find study partners, make new friends — all in a safe, students-only space."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex flex-col gap-3 sm:flex-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: onGetStarted,
                                        className: "h-12 bg-primary px-8 text-white hover:bg-primary/90 text-base font-semibold",
                                        children: "Start Chatting Free →"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-sm text-muted-foreground px-2",
                                        children: "✓ No download needed  ·  ✓ Free forever"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex -space-x-2",
                                        children: [
                                            [
                                                "A",
                                                "#3b82f6"
                                            ],
                                            [
                                                "K",
                                                "#ef4444"
                                            ],
                                            [
                                                "P",
                                                "#a855f7"
                                            ],
                                            [
                                                "R",
                                                "#f59e0b"
                                            ]
                                        ].map(([letter, color])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0a0e1a] text-xs font-bold text-white",
                                                style: {
                                                    background: color
                                                },
                                                children: letter
                                            }, letter, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            "Join students from ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-white",
                                                children: "KIIT, IIT, VIT"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                                lineNumber: 57,
                                                columnNumber: 36
                                            }, this),
                                            " and more"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden rounded-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/students-video-chat.jpg",
                                    alt: "Students connecting via video chat",
                                    width: 600,
                                    height: 400,
                                    className: "h-auto w-full object-cover",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0e1a]/90 to-transparent p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
                                                        children: "Verified Emails"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-primary",
                                                        children: "100%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
                                                        children: "College Only"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-bold text-primary",
                                                        children: "Always"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/components/stats-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsBar",
    ()=>StatsBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function StatsBar() {
    const stats = [
        {
            label: "Verified Users",
            value: "250K+"
        },
        {
            label: "Universities",
            value: "800+"
        },
        {
            label: "Daily Matches",
            value: "35K+"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-y border-border/40 bg-card/50 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-8 sm:grid-cols-3",
                children: stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/stats-bar.tsx",
                                lineNumber: 14,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-4xl font-bold text-primary",
                                children: stat.value
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/stats-bar.tsx",
                                lineNumber: 17,
                                columnNumber: 15
                            }, this)
                        ]
                    }, stat.label, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/stats-bar.tsx",
                        lineNumber: 13,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/stats-bar.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/stats-bar.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/stats-bar.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = StatsBar;
var _c;
__turbopack_context__.k.register(_c, "StatsBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/components/features-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturesSection",
    ()=>FeaturesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
;
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        title: "Verified Students Only",
        description: "Every account is tied to a valid university email. Connect with confidence knowing you're chatting with real college students from verified institutions."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"],
        title: "Instant 1-on-1 Video Matching",
        description: "Skip the awkward intros. Our smart matching connects you instantly with students who are ready to chat. High-quality, peer-to-peer encrypted video calls."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        title: "Interest-Based Matching",
        description: "Find study buddies or lifelong friends who share your academic interests, campus hobbies, or research goals through our intelligent matching engine."
    }
];
function FeaturesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "features",
        className: "py-20 lg:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-2xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-balance text-3xl font-bold text-white sm:text-4xl",
                            children: "Designed for the Student Experience"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/features-section.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-lg text-muted-foreground",
                            children: "Hallway combines academic verification with social discovery to create a safe space for meaningful peer interaction across institutions."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/features-section.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/features-section.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 grid gap-8 md:grid-cols-3",
                    children: features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group rounded-2xl border border-border/40 bg-card p-8 transition-all hover:border-primary/40 hover:bg-card/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                        className: "h-6 w-6 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/features-section.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/features-section.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-white",
                                    children: feature.title
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/features-section.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 leading-relaxed text-muted-foreground",
                                    children: feature.description
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/features-section.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, feature.title, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/features-section.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/features-section.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/features-section.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/features-section.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = FeaturesSection;
var _c;
__turbopack_context__.k.register(_c, "FeaturesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SafetySection",
    ()=>SafetySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$id$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IdCard$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/id-card.js [app-client] (ecmascript) <export default as IdCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareWarning$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/message-square-warning.js [app-client] (ecmascript) <export default as MessageSquareWarning>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/components/ui/button.tsx [app-client] (ecmascript)");
;
;
;
const safetyFeatures = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$id$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IdCard$3e$__["IdCard"],
        title: "ID Verification",
        description: "Every account is tied to a valid university domain."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
        title: "Private Data",
        description: "Your information is never sold to third-party recruiters."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareWarning$3e$__["MessageSquareWarning"],
        title: "Safe Chats",
        description: "AI-powered moderation keeps conversations healthy."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"],
        title: "Zero Bots",
        description: "Verification barriers eliminate non-human profiles."
    }
];
function SafetySection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "safety",
        className: "border-t border-border/40 bg-card/30 py-20 lg:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-6",
                        children: safetyFeatures.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-border/40 bg-card p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                            className: "h-5 w-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx",
                                            lineNumber: 40,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-white",
                                        children: feature.title
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm leading-relaxed text-muted-foreground",
                                        children: feature.description
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, feature.title, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-balance text-3xl font-bold text-white sm:text-4xl",
                                children: [
                                    "Safety is in our",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "italic text-primary",
                                        children: "academic"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    " DNA."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 text-lg leading-relaxed text-muted-foreground",
                                children: "We believe that the best digital spaces are those where you know exactly who you're talking to. By requiring university verification, we've eliminated the noise and risks found on traditional social platforms."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "mt-8 border-border bg-transparent text-white hover:bg-card hover:text-white",
                                children: [
                                    "Learn about our Trust & Safety",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "ml-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = SafetySection;
var _c;
__turbopack_context__.k.register(_c, "SafetySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/components/cta-banner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTABanner",
    ()=>CTABanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
function CTABanner({ onGetStarted }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "community",
        className: "py-20 lg:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-3xl bg-primary px-8 py-16 sm:px-16 lg:px-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/cta-banner.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-white/20"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/cta-banner.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/cta-banner.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto max-w-2xl text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-balance text-3xl font-bold text-white sm:text-4xl",
                                children: "Ready to meet your academic community?"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/cta-banner.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-lg text-white/80",
                                children: "Join students from top universities across India and worldwide. Verified. Free. No downloads."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/cta-banner.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: onGetStarted,
                                className: "mt-8 h-12 bg-[#0a0e1a] px-10 text-base font-semibold text-white hover:bg-[#0a0e1a]/90",
                                children: "Join Now →"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/cta-banner.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm text-white/60",
                                children: "No credit card required. College email required for verification."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/cta-banner.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/cta-banner.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/cta-banner.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/cta-banner.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/cta-banner.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = CTABanner;
var _c;
__turbopack_context__.k.register(_c, "CTABanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
;
;
;
const footerLinks = {
    Product: [
        {
            label: "Features",
            href: "#features"
        },
        {
            label: "Safety",
            href: "#safety"
        },
        {
            label: "Community",
            href: "#community"
        }
    ],
    Legal: [
        {
            label: "Privacy Policy",
            href: "/privacy"
        },
        {
            label: "Terms of Service",
            href: "/terms"
        },
        {
            label: "Trust & Safety",
            href: "/trust-and-safety"
        }
    ],
    Support: [
        {
            label: "Contact Us",
            href: "mailto:hello@hallwaychat.online"
        },
        {
            label: "Report Issue",
            href: "mailto:safety@hallwaychat.online"
        }
    ]
};
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-border/40 bg-[#060912] py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-12 lg:grid-cols-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 100 100",
                                            width: 36,
                                            height: 36,
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                                        id: "bgN",
                                                        cx: "50%",
                                                        cy: "50%",
                                                        r: "50%",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "0%",
                                                                stopColor: "#1a1a2e"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                                lineNumber: 31,
                                                                columnNumber: 7
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "100%",
                                                                stopColor: "#0d0d1a"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                                lineNumber: 32,
                                                                columnNumber: 7
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 5
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "100",
                                                    height: "100",
                                                    rx: "22",
                                                    fill: "url(#bgN)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "100",
                                                    height: "100",
                                                    rx: "22",
                                                    fill: "none",
                                                    stroke: "#1e3a5f",
                                                    strokeWidth: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                    points: "0,0 0,100 26,78 26,22",
                                                    fill: "#0f1629"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                    points: "100,0 100,100 74,78 74,22",
                                                    fill: "#131a2e"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                    points: "0,0 100,0 74,22 26,22",
                                                    fill: "#0c1220"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                    points: "0,100 100,100 74,78 26,78",
                                                    fill: "#0a0f1a"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "26",
                                                    y: "22",
                                                    width: "48",
                                                    height: "56",
                                                    fill: "#0d1117",
                                                    stroke: "#1e3a5f",
                                                    strokeWidth: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "0",
                                                    y1: "0",
                                                    x2: "50",
                                                    y2: "50",
                                                    stroke: "#3b82f6",
                                                    strokeWidth: "0.8",
                                                    opacity: "0.3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "100",
                                                    y1: "0",
                                                    x2: "50",
                                                    y2: "50",
                                                    stroke: "#3b82f6",
                                                    strokeWidth: "0.8",
                                                    opacity: "0.3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "0",
                                                    y1: "100",
                                                    x2: "50",
                                                    y2: "50",
                                                    stroke: "#3b82f6",
                                                    strokeWidth: "0.8",
                                                    opacity: "0.3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "100",
                                                    y1: "100",
                                                    x2: "50",
                                                    y2: "50",
                                                    stroke: "#3b82f6",
                                                    strokeWidth: "0.8",
                                                    opacity: "0.3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                    cx: "50",
                                                    cy: "50",
                                                    rx: "3.5",
                                                    ry: "4.5",
                                                    fill: "#3b82f6",
                                                    opacity: "0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                    cx: "50",
                                                    cy: "50",
                                                    rx: "1.5",
                                                    ry: "2",
                                                    fill: "#3b82f6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "50",
                                                    cy: "43",
                                                    r: "3.5",
                                                    fill: "#3b82f6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "47",
                                                    y: "47.5",
                                                    width: "6",
                                                    height: "10",
                                                    rx: "1.5",
                                                    fill: "#3b82f6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "63",
                                                    y: "40",
                                                    width: "9",
                                                    height: "22",
                                                    rx: "1.5",
                                                    fill: "none",
                                                    stroke: "#3b82f6",
                                                    strokeWidth: "1",
                                                    opacity: "0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 5
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold text-white",
                                            children: "Hallway"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                            lineNumber: 52,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground",
                                    children: "Random 1-on-1 video chat exclusively for verified college students."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex gap-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.instagram.com/hallwaychat_online",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex h-9 w-9 items-center justify-center rounded-lg bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        Object.entries(footerLinks).map(([category, links])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-white",
                                        children: category
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-4 space-y-3",
                                        children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    target: link.href.startsWith("http") ? "_blank" : undefined,
                                                    rel: link.href.startsWith("http") ? "noopener noreferrer" : undefined,
                                                    className: "text-sm text-muted-foreground transition-colors hover:text-white",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 21
                                                }, this)
                                            }, link.label, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, category, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 border-t border-border/40 pt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-sm text-muted-foreground",
                            children: "© 2026 Hallway. All rights reserved. For verified college students only."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-sm text-muted-foreground mt-2",
                            children: [
                                "Made with 💝 by",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/FAYEZ087",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-primary hover:underline",
                                    children: "Fayez"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 100 100",
                                width: 36,
                                height: 36,
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                            id: "bgN",
                                            cx: "50%",
                                            cy: "50%",
                                            r: "50%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "#1a1a2e"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 7
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "#0d0d1a"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 7
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                            lineNumber: 39,
                                            columnNumber: 5
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 38,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "100",
                                        height: "100",
                                        rx: "22",
                                        fill: "url(#bgN)"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 44,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "100",
                                        height: "100",
                                        rx: "22",
                                        fill: "none",
                                        stroke: "#1e3a5f",
                                        strokeWidth: "1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 45,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                        points: "0,0 0,100 26,78 26,22",
                                        fill: "#0f1629"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 46,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                        points: "100,0 100,100 74,78 74,22",
                                        fill: "#131a2e"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 47,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                        points: "0,0 100,0 74,22 26,22",
                                        fill: "#0c1220"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 48,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                        points: "0,100 100,100 74,78 26,78",
                                        fill: "#0a0f1a"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 49,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "26",
                                        y: "22",
                                        width: "48",
                                        height: "56",
                                        fill: "#0d1117",
                                        stroke: "#1e3a5f",
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 50,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "0",
                                        y1: "0",
                                        x2: "50",
                                        y2: "50",
                                        stroke: "#3b82f6",
                                        strokeWidth: "0.8",
                                        opacity: "0.3"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 51,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "100",
                                        y1: "0",
                                        x2: "50",
                                        y2: "50",
                                        stroke: "#3b82f6",
                                        strokeWidth: "0.8",
                                        opacity: "0.3"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 52,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "0",
                                        y1: "100",
                                        x2: "50",
                                        y2: "50",
                                        stroke: "#3b82f6",
                                        strokeWidth: "0.8",
                                        opacity: "0.3"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 53,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "100",
                                        y1: "100",
                                        x2: "50",
                                        y2: "50",
                                        stroke: "#3b82f6",
                                        strokeWidth: "0.8",
                                        opacity: "0.3"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 54,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                        cx: "50",
                                        cy: "50",
                                        rx: "3.5",
                                        ry: "4.5",
                                        fill: "#3b82f6",
                                        opacity: "0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 55,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                        cx: "50",
                                        cy: "50",
                                        rx: "1.5",
                                        ry: "2",
                                        fill: "#3b82f6"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 56,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "50",
                                        cy: "43",
                                        r: "3.5",
                                        fill: "#3b82f6"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 57,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "47",
                                        y: "47.5",
                                        width: "6",
                                        height: "10",
                                        rx: "1.5",
                                        fill: "#3b82f6"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 58,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "63",
                                        y: "40",
                                        width: "9",
                                        height: "22",
                                        rx: "1.5",
                                        fill: "none",
                                        stroke: "#3b82f6",
                                        strokeWidth: "1",
                                        opacity: "0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                        lineNumber: 59,
                                        columnNumber: 3
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold text-white",
                                children: "Hallway"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                lineNumber: 61,
                                columnNumber: 1
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
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-lg leading-relaxed mb-8",
                        children: "Join verified college students for real 1-on-1 video chats. Hallway requires a valid college email to keep our community safe and exclusive."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                        lineNumber: 64,
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
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: item
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, item, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                            lineNumber: 73,
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
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold text-white",
                                    children: "Hallway"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        authState === "sent" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-border/40 bg-card p-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "h-12 w-12 text-primary mx-auto mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-white mb-2",
                                    children: "Check your email!"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground mb-2",
                                    children: "We sent a magic link to"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-primary mb-6",
                                    children: email
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground mb-6",
                                    children: "Click the link to sign in. Check spam if you don't see it."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 96,
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
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-border/40 bg-card p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-white mb-2",
                                    children: "Sign in to Hallway"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground mb-8",
                                    children: "Use your college email to get started"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 105,
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
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                            lineNumber: 111,
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
                                                            lineNumber: 112,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                    lineNumber: 110,
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
                                                            lineNumber: 122,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this),
                                        authState === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "h-4 w-4 mt-0.5 shrink-0 text-destructive"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-destructive",
                                                    children: errorMsg
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                            lineNumber: 127,
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
                                                        lineNumber: 139,
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
                                                        lineNumber: 141,
                                                        columnNumber: 51
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center text-xs text-muted-foreground",
                                            children: "We'll send you a magic link — no password needed 🪄"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center text-xs text-muted-foreground py-3",
                                            children: [
                                                "Made with 💝 by",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://github.com/FAYEZ087",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-primary hover:underline",
                                                    children: "Fayez"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/auth-screen.tsx",
                lineNumber: 81,
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
        className: "flex flex-col min-h-screen bg-[#0a0e1a] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-10 border-b border-border/40 bg-[#0a0e1a]/95 backdrop-blur-sm px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-5xl items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 100 100",
                                    width: 36,
                                    height: 36,
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                                id: "bgN",
                                                cx: "50%",
                                                cy: "50%",
                                                r: "50%",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0%",
                                                        stopColor: "#1a1a2e"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 7
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "100%",
                                                        stopColor: "#0d0d1a"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 7
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                                lineNumber: 53,
                                                columnNumber: 5
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 52,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "100",
                                            height: "100",
                                            rx: "22",
                                            fill: "url(#bgN)"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 58,
                                            columnNumber: 4
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "100",
                                            height: "100",
                                            rx: "22",
                                            fill: "none",
                                            stroke: "#1e3a5f",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 59,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: "0,0 0,100 26,78 26,22",
                                            fill: "#0f1629"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 60,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: "100,0 100,100 74,78 74,22",
                                            fill: "#131a2e"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 61,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: "0,0 100,0 74,22 26,22",
                                            fill: "#0c1220"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 62,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: "0,100 100,100 74,78 26,78",
                                            fill: "#0a0f1a"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 63,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "26",
                                            y: "22",
                                            width: "48",
                                            height: "56",
                                            fill: "#0d1117",
                                            stroke: "#1e3a5f",
                                            strokeWidth: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 64,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "0",
                                            y1: "0",
                                            x2: "50",
                                            y2: "50",
                                            stroke: "#3b82f6",
                                            strokeWidth: "0.8",
                                            opacity: "0.3"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 65,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "100",
                                            y1: "0",
                                            x2: "50",
                                            y2: "50",
                                            stroke: "#3b82f6",
                                            strokeWidth: "0.8",
                                            opacity: "0.3"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 66,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "0",
                                            y1: "100",
                                            x2: "50",
                                            y2: "50",
                                            stroke: "#3b82f6",
                                            strokeWidth: "0.8",
                                            opacity: "0.3"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 67,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "100",
                                            y1: "100",
                                            x2: "50",
                                            y2: "50",
                                            stroke: "#3b82f6",
                                            strokeWidth: "0.8",
                                            opacity: "0.3"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 68,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                            cx: "50",
                                            cy: "50",
                                            rx: "3.5",
                                            ry: "4.5",
                                            fill: "#3b82f6",
                                            opacity: "0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 69,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                            cx: "50",
                                            cy: "50",
                                            rx: "1.5",
                                            ry: "2",
                                            fill: "#3b82f6"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 70,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "50",
                                            cy: "43",
                                            r: "3.5",
                                            fill: "#3b82f6"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 71,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "47",
                                            y: "47.5",
                                            width: "6",
                                            height: "10",
                                            rx: "1.5",
                                            fill: "#3b82f6"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 72,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "63",
                                            y: "40",
                                            width: "9",
                                            height: "22",
                                            rx: "1.5",
                                            fill: "none",
                                            stroke: "#3b82f6",
                                            strokeWidth: "1",
                                            opacity: "0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                            lineNumber: 73,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold text-white",
                                    children: "Hallway"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                    lineNumber: 75,
                                    columnNumber: 1
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
                                    lineNumber: 79,
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
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        "Sign out"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                            lineNumber: 78,
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
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-lg text-muted-foreground",
                                children: "Select your interests to find the right students to connect with."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                        lineNumber: 91,
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
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this),
                                    label
                                ]
                            }, label, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-10 text-sm text-muted-foreground",
                        children: selected.length === 0 ? "Pick at least one — or skip to chat randomly" : `${selected.length} selected · matching you with students who love ${selected.slice(0, 2).join(" & ")}${selected.length > 2 ? ` +${selected.length - 2} more` : ""}`
                    }, void 0, false, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                        lineNumber: 120,
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
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onStart([]),
                                className: "flex h-12 items-center justify-center gap-2 rounded-xl border border-border/40 px-8 text-sm font-medium text-muted-foreground transition hover:text-white",
                                children: "Skip — chat randomly"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto pb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-xs text-muted-foreground",
                    children: [
                        "Made with 💝 by",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://github.com/FAYEZ087",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-primary hover:underline",
                            children: "Fayez"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/interest-selection.tsx",
                lineNumber: 141,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SERVER_URL = "https://campuslink-server-1.onrender.com";
function useSocket(interests) {
    _s();
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const peerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const iceCandidateQueue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const iceConfigRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [onlineCount, setOnlineCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [remoteStream, setRemoteStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [localStream, setLocalStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const localStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const partnerIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [facingMode, setFacingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("user");
    const fetchIceConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocket.useCallback[fetchIceConfig]": async ()=>{
            if (iceConfigRef.current) return iceConfigRef.current;
            try {
                const res = await fetch(`${SERVER_URL}/ice-config`);
                const config = await res.json();
                iceConfigRef.current = config;
                return config;
            } catch  {
                console.warn("Failed to fetch ICE config, using STUN only");
                return {
                    iceServers: [
                        {
                            urls: "stun:stun.l.google.com:19302"
                        }
                    ]
                };
            }
        }
    }["useSocket.useCallback[fetchIceConfig]"], []);
    const createPeer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocket.useCallback[createPeer]": async (stream)=>{
            const iceConfig = await fetchIceConfig();
            const peer = new RTCPeerConnection(iceConfig);
            stream.getTracks().forEach({
                "useSocket.useCallback[createPeer]": (track)=>peer.addTrack(track, stream)
            }["useSocket.useCallback[createPeer]"]);
            peer.ontrack = ({
                "useSocket.useCallback[createPeer]": (event)=>{
                    console.log("🎥 GOT REMOTE STREAM!", event.streams[0]);
                    setRemoteStream(event.streams[0]);
                }
            })["useSocket.useCallback[createPeer]"];
            peer.onicecandidate = ({
                "useSocket.useCallback[createPeer]": (event)=>{
                    if (event.candidate && partnerIdRef.current && socketRef.current) {
                        socketRef.current.emit("ice-candidate", {
                            candidate: event.candidate,
                            to: partnerIdRef.current
                        });
                    }
                }
            })["useSocket.useCallback[createPeer]"];
            peer.onconnectionstatechange = ({
                "useSocket.useCallback[createPeer]": ()=>console.log("🔗 Connection state:", peer.connectionState)
            })["useSocket.useCallback[createPeer]"];
            peer.oniceconnectionstatechange = ({
                "useSocket.useCallback[createPeer]": ()=>console.log("🧊 ICE state:", peer.iceConnectionState)
            })["useSocket.useCallback[createPeer]"];
            return peer;
        }
    }["useSocket.useCallback[createPeer]"], [
        fetchIceConfig
    ]);
    const flushIceCandidates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocket.useCallback[flushIceCandidates]": async ()=>{
            if (!peerRef.current) return;
            for (const candidate of iceCandidateQueue.current){
                try {
                    await peerRef.current.addIceCandidate(candidate);
                } catch (e) {
                    console.error("ICE flush error", e);
                }
            }
            iceCandidateQueue.current = [];
        }
    }["useSocket.useCallback[flushIceCandidates]"], []);
    const findMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocket.useCallback[findMatch]": async ()=>{
            if (!socketRef.current) return;
            setMessages([]);
            setRemoteStream(null);
            setStatus("waiting");
            iceCandidateQueue.current = [];
            if (!localStreamRef.current) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: {
                            facingMode: "user"
                        },
                        audio: true
                    });
                    setLocalStream(stream);
                    localStreamRef.current = stream;
                } catch  {
                    console.warn("Camera/mic not available");
                }
            }
            if (peerRef.current) {
                peerRef.current.close();
                peerRef.current = null;
            }
            if (localStreamRef.current) peerRef.current = await createPeer(localStreamRef.current);
            socketRef.current.emit("find-match", {
                interests
            });
        }
    }["useSocket.useCallback[findMatch]"], [
        interests,
        createPeer
    ]);
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocket.useCallback[next]": async ()=>{
            if (!socketRef.current) return;
            setRemoteStream(null);
            setMessages([]);
            partnerIdRef.current = null;
            iceCandidateQueue.current = [];
            if (peerRef.current) {
                peerRef.current.close();
                peerRef.current = null;
            }
            if (localStreamRef.current) peerRef.current = await createPeer(localStreamRef.current);
            setStatus("waiting");
            socketRef.current.emit("next");
        }
    }["useSocket.useCallback[next]"], [
        createPeer
    ]);
    // ── Rear/front camera toggle ───────────────────────────────────────────────
    const switchCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocket.useCallback[switchCamera]": async ()=>{
            if (!localStreamRef.current) return;
            const newFacing = facingMode === "user" ? "environment" : "user";
            try {
                // Stop current video track only
                localStreamRef.current.getVideoTracks().forEach({
                    "useSocket.useCallback[switchCamera]": (t)=>t.stop()
                }["useSocket.useCallback[switchCamera]"]);
                // Get new video track with switched facing mode
                const newVideoStream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: newFacing
                    },
                    audio: false
                });
                const newVideoTrack = newVideoStream.getVideoTracks()[0];
                // Replace track in active peer connection (no renegotiation needed)
                if (peerRef.current) {
                    const sender = peerRef.current.getSenders().find({
                        "useSocket.useCallback[switchCamera].sender": (s)=>s.track?.kind === "video"
                    }["useSocket.useCallback[switchCamera].sender"]);
                    if (sender) await sender.replaceTrack(newVideoTrack);
                }
                // Rebuild local stream with new video + existing audio
                const audioTrack = localStreamRef.current.getAudioTracks()[0];
                const updatedStream = new MediaStream([
                    newVideoTrack,
                    audioTrack
                ].filter(Boolean));
                localStreamRef.current = updatedStream;
                setLocalStream(updatedStream);
                setFacingMode(newFacing);
                console.log(`📷 Switched to ${newFacing} camera`);
            } catch (e) {
                console.error("Camera switch failed — device may only have one camera", e);
            }
        }
    }["useSocket.useCallback[switchCamera]"], [
        facingMode
    ]);
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSocket.useCallback[sendMessage]": (text)=>{
            if (!socketRef.current || !text.trim()) return;
            socketRef.current.emit("chat-message", {
                message: text
            });
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
            if (!socketRef.current) return;
            socketRef.current.emit("report", {
                reason
            });
            next();
        }
    }["useSocket.useCallback[report]"], [
        next
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSocket.useEffect": ()=>{
            fetchIceConfig();
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(SERVER_URL);
            socketRef.current = socket;
            socket.on("online-count", {
                "useSocket.useEffect": (count)=>setOnlineCount(count)
            }["useSocket.useEffect"]);
            socket.on("waiting", {
                "useSocket.useEffect": ()=>setStatus("waiting")
            }["useSocket.useEffect"]);
            socket.on("match-found", {
                "useSocket.useEffect": async ({ partnerId, isInitiator, sharedInterests })=>{
                    console.log("🟢 MATCH FOUND - isInitiator:", isInitiator);
                    partnerIdRef.current = partnerId;
                    iceCandidateQueue.current = [];
                    setStatus("connected");
                    setMessages([
                        {
                            text: sharedInterests > 0 ? `Connected! You share ${sharedInterests} interest${sharedInterests > 1 ? "s" : ""} 🎉` : "You are now connected with a student. Say hi! 👋",
                            self: false
                        }
                    ]);
                    if (peerRef.current && isInitiator) {
                        const offer = await peerRef.current.createOffer();
                        await peerRef.current.setLocalDescription(offer);
                        socket.emit("webrtc-offer", {
                            offer,
                            to: partnerId
                        });
                    }
                }
            }["useSocket.useEffect"]);
            socket.on("webrtc-offer", {
                "useSocket.useEffect": async ({ offer, from })=>{
                    console.log("📨 Got offer");
                    if (!peerRef.current) return;
                    await peerRef.current.setRemoteDescription(new RTCSessionDescription(offer));
                    await flushIceCandidates();
                    const answer = await peerRef.current.createAnswer();
                    await peerRef.current.setLocalDescription(answer);
                    socket.emit("webrtc-answer", {
                        answer,
                        to: from
                    });
                }
            }["useSocket.useEffect"]);
            socket.on("webrtc-answer", {
                "useSocket.useEffect": async ({ answer })=>{
                    console.log("📨 Got answer");
                    if (!peerRef.current) return;
                    await peerRef.current.setRemoteDescription(new RTCSessionDescription(answer));
                    await flushIceCandidates();
                }
            }["useSocket.useEffect"]);
            socket.on("ice-candidate", {
                "useSocket.useEffect": async ({ candidate })=>{
                    if (!peerRef.current) return;
                    if (peerRef.current.remoteDescription) {
                        try {
                            await peerRef.current.addIceCandidate(new RTCIceCandidate(candidate));
                        } catch (e) {
                            console.error("ICE error", e);
                        }
                    } else {
                        console.log("⏳ Queuing ICE candidate");
                        iceCandidateQueue.current.push(new RTCIceCandidate(candidate));
                    }
                }
            }["useSocket.useEffect"]);
            socket.on("partner-disconnected", {
                "useSocket.useEffect": async ()=>{
                    console.log("👋 Partner disconnected");
                    setRemoteStream(null);
                    partnerIdRef.current = null;
                    iceCandidateQueue.current = [];
                    setStatus("waiting");
                    setMessages([
                        {
                            text: "Stranger disconnected. Finding new match...",
                            self: false
                        }
                    ]);
                    if (peerRef.current) {
                        peerRef.current.close();
                        peerRef.current = null;
                    }
                    if (localStreamRef.current) peerRef.current = await createPeer(localStreamRef.current);
                    socket.emit("find-match", {
                        interests
                    });
                }
            }["useSocket.useEffect"]);
            socket.on("chat-message", {
                "useSocket.useEffect": ({ message })=>{
                    setMessages({
                        "useSocket.useEffect": (prev)=>[
                                ...prev,
                                {
                                    text: message,
                                    self: false
                                }
                            ]
                    }["useSocket.useEffect"]);
                }
            }["useSocket.useEffect"]);
            socket.on("error-message", {
                "useSocket.useEffect": (msg)=>{
                    console.warn("⚠️ Server:", msg);
                }
            }["useSocket.useEffect"]);
            return ({
                "useSocket.useEffect": ()=>{
                    socket.disconnect();
                    peerRef.current?.close();
                    localStreamRef.current?.getTracks().forEach({
                        "useSocket.useEffect": (t)=>t.stop()
                    }["useSocket.useEffect"]);
                }
            })["useSocket.useEffect"];
        }
    }["useSocket.useEffect"], []);
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
        switchCamera,
        facingMode
    };
}
_s(useSocket, "8mtLpjmsifA/Hz9tpCnPN+IxaqA=");
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 100 100",
                                width: 36,
                                height: 36,
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                            id: "bgN",
                                            cx: "50%",
                                            cy: "50%",
                                            r: "50%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "#1a1a2e"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 7
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "#0d0d1a"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 7
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                            lineNumber: 40,
                                            columnNumber: 5
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 39,
                                        columnNumber: 3
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "100",
                                        height: "100",
                                        rx: "22",
                                        fill: "url(#bgN)"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 45,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "100",
                                        height: "100",
                                        rx: "22",
                                        fill: "none",
                                        stroke: "#1e3a5f",
                                        strokeWidth: "1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 46,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                        points: "0,0 0,100 26,78 26,22",
                                        fill: "#0f1629"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 47,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                        points: "100,0 100,100 74,78 74,22",
                                        fill: "#131a2e"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 48,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                        points: "0,0 100,0 74,22 26,22",
                                        fill: "#0c1220"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 49,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                        points: "0,100 100,100 74,78 26,78",
                                        fill: "#0a0f1a"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 50,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "26",
                                        y: "22",
                                        width: "48",
                                        height: "56",
                                        fill: "#0d1117",
                                        stroke: "#1e3a5f",
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 51,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "0",
                                        y1: "0",
                                        x2: "50",
                                        y2: "50",
                                        stroke: "#3b82f6",
                                        strokeWidth: "0.8",
                                        opacity: "0.3"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 52,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "100",
                                        y1: "0",
                                        x2: "50",
                                        y2: "50",
                                        stroke: "#3b82f6",
                                        strokeWidth: "0.8",
                                        opacity: "0.3"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 53,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "0",
                                        y1: "100",
                                        x2: "50",
                                        y2: "50",
                                        stroke: "#3b82f6",
                                        strokeWidth: "0.8",
                                        opacity: "0.3"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 54,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "100",
                                        y1: "100",
                                        x2: "50",
                                        y2: "50",
                                        stroke: "#3b82f6",
                                        strokeWidth: "0.8",
                                        opacity: "0.3"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 55,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                        cx: "50",
                                        cy: "50",
                                        rx: "3.5",
                                        ry: "4.5",
                                        fill: "#3b82f6",
                                        opacity: "0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 56,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                        cx: "50",
                                        cy: "50",
                                        rx: "1.5",
                                        ry: "2",
                                        fill: "#3b82f6"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 57,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "50",
                                        cy: "43",
                                        r: "3.5",
                                        fill: "#3b82f6"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 58,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "47",
                                        y: "47.5",
                                        width: "6",
                                        height: "10",
                                        rx: "1.5",
                                        fill: "#3b82f6"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 59,
                                        columnNumber: 6
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "63",
                                        y: "40",
                                        width: "9",
                                        height: "22",
                                        rx: "1.5",
                                        fill: "none",
                                        stroke: "#3b82f6",
                                        strokeWidth: "1",
                                        opacity: "0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 60,
                                        columnNumber: 6
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold text-white",
                                children: "Hallway"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 62,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden items-center gap-1.5 rounded-full border border-border/40 bg-card px-2.5 py-1 text-xs sm:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 w-1.5 animate-pulse rounded-full bg-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "h-3 w-3 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 65,
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
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 63,
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
                                            lineNumber: 73,
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
                                        lineNumber: 77,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 rounded-full border border-border/40 bg-card px-3 py-1.5 text-xs font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        className: "h-3 w-3 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "Verified"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onExit,
                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-card text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                        lineNumber: 69,
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
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-full flex-col items-center justify-center gap-2 text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                                        className: "h-8 w-8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs",
                                                        children: "No camera"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-1.5 w-1.5 rounded-full bg-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-white",
                                                        children: "You"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 108,
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
                                                            lineNumber: 115,
                                                            columnNumber: 28
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 62
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: toggleCam,
                                                        className: `flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-sm transition ${camOn ? "bg-black/60 text-white" : "bg-destructive/80 text-white"}`,
                                                        children: camOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 28
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 64
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: switchCamera,
                                                        className: "flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flip$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlipHorizontal$3e$__["FlipHorizontal"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 99,
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
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-full flex-col items-center justify-center gap-3 text-muted-foreground",
                                                children: status === "waiting" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-7 w-7 animate-spin rounded-full border-2 border-t-transparent border-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            children: "Finding a match..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                                            className: "h-8 w-8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            children: "Waiting..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `h-1.5 w-1.5 rounded-full ${status === "connected" ? "bg-primary" : "bg-yellow-400"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-white",
                                                        children: status === "waiting" ? "Searching..." : "Stranger"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 96,
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
                                                        lineNumber: 161,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Report"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 159,
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
                                                        lineNumber: 166,
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
                                                            lineNumber: 168,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 158,
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
                                                lineNumber: 177,
                                                columnNumber: 42
                                            }, this),
                                            status === "waiting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden text-xs text-primary sm:block",
                                                children: "Finding match..."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 178,
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
                                                        lineNumber: 181,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Next"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                        lineNumber: 95,
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
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 rounded-full border border-border/40 bg-card px-2.5 py-1 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1.5 w-1.5 rounded-full bg-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: status === "connected" ? "2 online" : "1 online"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 194,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 190,
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
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 200,
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
                                                    lineNumber: 209,
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
                                                            lineNumber: 214,
                                                            columnNumber: 33
                                                        }, this),
                                                        msg.text
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: messagesEndRef
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shrink-0 border-t border-border/40 bg-[#060912] px-3 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                lineNumber: 224,
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
                                                    lineNumber: 235,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-xs text-muted-foreground py-3",
                                        children: [
                                            "Made with 💝 by",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://github.com/FAYEZ087",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-primary hover:underline",
                                                children: "Fayez"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/components/chat-room.tsx",
                lineNumber: 92,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/components/navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/components/hero-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$stats$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/components/stats-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$features$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/components/features-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$safety$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/components/safety-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$cta$2d$banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/components/cta-banner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/components/footer.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
function HomePage() {
    _s();
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("loading");
    const [selectedInterests, setSelectedInterests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
                lineNumber: 48,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    }
    if (screen === "auth") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$auth$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthScreen"], {}, void 0, false, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
        lineNumber: 53,
        columnNumber: 33
    }, this);
    if (screen === "interests") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$interest$2d$selection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InterestSelection"], {
        onStart: (interests)=>{
            setSelectedInterests(interests);
            setScreen("chat");
        },
        user: user,
        onSignOut: handleSignOut
    }, void 0, false, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
    if (screen === "chat") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$chat$2d$room$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatRoom"], {
        interests: selectedInterests,
        onExit: ()=>{
            setScreen("interests");
            setSelectedInterests([]);
        }
    }, void 0, false, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
    // Landing page
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0a0e1a]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {
                onGetStarted: ()=>setScreen("auth")
            }, void 0, false, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {
                        onGetStarted: ()=>setScreen("auth")
                    }, void 0, false, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$stats$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsBar"], {}, void 0, false, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$features$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeaturesSection"], {}, void 0, false, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$safety$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafetySection"], {}, void 0, false, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$cta$2d$banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CTABanner"], {
                        onGetStarted: ()=>setScreen("auth")
                    }, void 0, false, {
                        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/hallway-integrated/v0-hallway/app/page.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(HomePage, "5poIsZRvcFZDt2wE8cyONFVn/RI=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_hallway-integrated_v0-hallway_d60ecbf7._.js.map