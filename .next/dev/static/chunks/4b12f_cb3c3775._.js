(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=mergeClasses.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
 //# sourceMappingURL=toKebabCase.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCamelCase",
    ()=>toCamelCase
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
;
 //# sourceMappingURL=toCamelCase.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-client] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
 //# sourceMappingURL=toPascalCase.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
    return false;
};
;
 //# sourceMappingURL=hasA11yProp.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)");
;
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Video
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
            key: "ftymec"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "6",
            width: "14",
            height: "12",
            rx: "2",
            key: "158x01"
        }
    ]
];
const Video = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("video", __iconNode);
;
 //# sourceMappingURL=video.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Video",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ShieldCheck
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
];
const ShieldCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("shield-check", __iconNode);
;
 //# sourceMappingURL=shield-check.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShieldCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Sparkles
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
            key: "1s2grr"
        }
    ],
    [
        "path",
        {
            d: "M20 2v4",
            key: "1rf3ol"
        }
    ],
    [
        "path",
        {
            d: "M22 4h-4",
            key: "gwowj6"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "20",
            r: "2",
            key: "6kqj1y"
        }
    ]
];
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("sparkles", __iconNode);
;
 //# sourceMappingURL=sparkles.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/id-card.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>IdCard
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 10h2",
            key: "8sgtl7"
        }
    ],
    [
        "path",
        {
            d: "M16 14h2",
            key: "epxaof"
        }
    ],
    [
        "path",
        {
            d: "M6.17 15a3 3 0 0 1 5.66 0",
            key: "n6f512"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "11",
            r: "2",
            key: "yxgjnd"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "5",
            width: "20",
            height: "14",
            rx: "2",
            key: "qneu4z"
        }
    ]
];
const IdCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("id-card", __iconNode);
;
 //# sourceMappingURL=id-card.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/id-card.js [app-client] (ecmascript) <export default as IdCard>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IdCard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$id$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$id$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/id-card.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Lock
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }
    ]
];
const Lock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("lock", __iconNode);
;
 //# sourceMappingURL=lock.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/message-square-warning.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MessageSquareWarning
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
            key: "18887p"
        }
    ],
    [
        "path",
        {
            d: "M12 15h.01",
            key: "q59x07"
        }
    ],
    [
        "path",
        {
            d: "M12 7v4",
            key: "xawao1"
        }
    ]
];
const MessageSquareWarning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("message-square-warning", __iconNode);
;
 //# sourceMappingURL=message-square-warning.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/message-square-warning.js [app-client] (ecmascript) <export default as MessageSquareWarning>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageSquareWarning",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/message-square-warning.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Bot
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 8V4H8",
            key: "hb8ula"
        }
    ],
    [
        "rect",
        {
            width: "16",
            height: "12",
            x: "4",
            y: "8",
            rx: "2",
            key: "enze0r"
        }
    ],
    [
        "path",
        {
            d: "M2 14h2",
            key: "vft8re"
        }
    ],
    [
        "path",
        {
            d: "M20 14h2",
            key: "4cs60a"
        }
    ],
    [
        "path",
        {
            d: "M15 13v2",
            key: "1xurst"
        }
    ],
    [
        "path",
        {
            d: "M9 13v2",
            key: "rq6x2g"
        }
    ]
];
const Bot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("bot", __iconNode);
;
 //# sourceMappingURL=bot.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowRight
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Twitter
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6"
        }
    ]
];
const Twitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("twitter", __iconNode);
;
 //# sourceMappingURL=twitter.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Twitter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Instagram
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "20",
            height: "20",
            x: "2",
            y: "2",
            rx: "5",
            ry: "5",
            key: "2e1cvw"
        }
    ],
    [
        "path",
        {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
            key: "9exkf1"
        }
    ],
    [
        "line",
        {
            x1: "17.5",
            x2: "17.51",
            y1: "6.5",
            y2: "6.5",
            key: "r4j83e"
        }
    ]
];
const Instagram = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("instagram", __iconNode);
;
 //# sourceMappingURL=instagram.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Instagram",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Linkedin
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f"
        }
    ],
    [
        "rect",
        {
            width: "4",
            height: "12",
            x: "2",
            y: "9",
            key: "mk3on5"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "4",
            r: "2",
            key: "bt5ra8"
        }
    ]
];
const Linkedin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("linkedin", __iconNode);
;
 //# sourceMappingURL=linkedin.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Linkedin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Mail
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }
    ]
];
const Mail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("mail", __iconNode);
;
 //# sourceMappingURL=mail.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mail",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleCheckBig
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
];
const CircleCheckBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-check-big", __iconNode);
;
 //# sourceMappingURL=circle-check-big.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleAlert
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
];
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-alert", __iconNode);
;
 //# sourceMappingURL=circle-alert.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LoaderCircle
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("loader-circle", __iconNode);
;
 //# sourceMappingURL=loader-circle.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>BookOpen
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 7v14",
            key: "1akyts"
        }
    ],
    [
        "path",
        {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y"
        }
    ]
];
const BookOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("book-open", __iconNode);
;
 //# sourceMappingURL=book-open.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookOpen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Music
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M9 18V5l12-2v13",
            key: "1jmyc2"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "18",
            r: "3",
            key: "fqmcym"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "16",
            r: "3",
            key: "1hluhg"
        }
    ]
];
const Music = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("music", __iconNode);
;
 //# sourceMappingURL=music.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Music",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Gamepad2
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "line",
        {
            x1: "6",
            x2: "10",
            y1: "11",
            y2: "11",
            key: "1gktln"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "8",
            y1: "9",
            y2: "13",
            key: "qnk9ow"
        }
    ],
    [
        "line",
        {
            x1: "15",
            x2: "15.01",
            y1: "12",
            y2: "12",
            key: "krot7o"
        }
    ],
    [
        "line",
        {
            x1: "18",
            x2: "18.01",
            y1: "10",
            y2: "10",
            key: "1lcuu1"
        }
    ],
    [
        "path",
        {
            d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
            key: "mfqc10"
        }
    ]
];
const Gamepad2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("gamepad-2", __iconNode);
;
 //# sourceMappingURL=gamepad-2.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Gamepad2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Film
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ],
    [
        "path",
        {
            d: "M7 3v18",
            key: "bbkbws"
        }
    ],
    [
        "path",
        {
            d: "M3 7.5h4",
            key: "zfgn84"
        }
    ],
    [
        "path",
        {
            d: "M3 12h18",
            key: "1i2n21"
        }
    ],
    [
        "path",
        {
            d: "M3 16.5h4",
            key: "1230mu"
        }
    ],
    [
        "path",
        {
            d: "M17 3v18",
            key: "in4fa5"
        }
    ],
    [
        "path",
        {
            d: "M17 7.5h4",
            key: "myr1c1"
        }
    ],
    [
        "path",
        {
            d: "M17 16.5h4",
            key: "go4c1d"
        }
    ]
];
const Film = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("film", __iconNode);
;
 //# sourceMappingURL=film.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Film",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/dumbbell.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Dumbbell
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",
            key: "9m4mmf"
        }
    ],
    [
        "path",
        {
            d: "m2.5 21.5 1.4-1.4",
            key: "17g3f0"
        }
    ],
    [
        "path",
        {
            d: "m20.1 3.9 1.4-1.4",
            key: "1qn309"
        }
    ],
    [
        "path",
        {
            d: "M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",
            key: "1t2c92"
        }
    ],
    [
        "path",
        {
            d: "m9.6 14.4 4.8-4.8",
            key: "6umqxw"
        }
    ]
];
const Dumbbell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("dumbbell", __iconNode);
;
 //# sourceMappingURL=dumbbell.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/dumbbell.js [app-client] (ecmascript) <export default as Dumbbell>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dumbbell",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/dumbbell.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CodeXml
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m18 16 4-4-4-4",
            key: "1inbqp"
        }
    ],
    [
        "path",
        {
            d: "m6 8-4 4 4 4",
            key: "15zrgr"
        }
    ],
    [
        "path",
        {
            d: "m14.5 4-5 16",
            key: "e7oirm"
        }
    ]
];
const CodeXml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("code-xml", __iconNode);
;
 //# sourceMappingURL=code-xml.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Code2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Palette
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
            key: "e79jfc"
        }
    ],
    [
        "circle",
        {
            cx: "13.5",
            cy: "6.5",
            r: ".5",
            fill: "currentColor",
            key: "1okk4w"
        }
    ],
    [
        "circle",
        {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            fill: "currentColor",
            key: "f64h9f"
        }
    ],
    [
        "circle",
        {
            cx: "6.5",
            cy: "12.5",
            r: ".5",
            fill: "currentColor",
            key: "qy21gx"
        }
    ],
    [
        "circle",
        {
            cx: "8.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "fotxhn"
        }
    ]
];
const Palette = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("palette", __iconNode);
;
 //# sourceMappingURL=palette.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Palette",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Globe
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl"
        }
    ],
    [
        "path",
        {
            d: "M2 12h20",
            key: "9i4pu4"
        }
    ]
];
const Globe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("globe", __iconNode);
;
 //# sourceMappingURL=globe.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Globe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Coffee
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 2v2",
            key: "7u0qdc"
        }
    ],
    [
        "path",
        {
            d: "M14 2v2",
            key: "6buw04"
        }
    ],
    [
        "path",
        {
            d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
            key: "pwadti"
        }
    ],
    [
        "path",
        {
            d: "M6 2v2",
            key: "colzsn"
        }
    ]
];
const Coffee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("coffee", __iconNode);
;
 //# sourceMappingURL=coffee.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Coffee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Camera
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
            key: "18u6gg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "13",
            r: "3",
            key: "1vg3eu"
        }
    ]
];
const Camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("camera", __iconNode);
;
 //# sourceMappingURL=camera.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Camera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Mic
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 19v3",
            key: "npa21l"
        }
    ],
    [
        "path",
        {
            d: "M19 10v2a7 7 0 0 1-14 0v-2",
            key: "1vc78b"
        }
    ],
    [
        "rect",
        {
            x: "9",
            y: "2",
            width: "6",
            height: "13",
            rx: "3",
            key: "s6n7sd"
        }
    ]
];
const Mic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("mic", __iconNode);
;
 //# sourceMappingURL=mic.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/heart-pulse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>HeartPulse
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
            key: "mvr1a0"
        }
    ],
    [
        "path",
        {
            d: "M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",
            key: "auskq0"
        }
    ]
];
const HeartPulse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("heart-pulse", __iconNode);
;
 //# sourceMappingURL=heart-pulse.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/heart-pulse.js [app-client] (ecmascript) <export default as HeartPulse>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeartPulse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/heart-pulse.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Utensils
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",
            key: "cjf0a3"
        }
    ],
    [
        "path",
        {
            d: "M7 2v20",
            key: "1473qp"
        }
    ],
    [
        "path",
        {
            d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",
            key: "j28e5"
        }
    ]
];
const Utensils = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("utensils", __iconNode);
;
 //# sourceMappingURL=utensils.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript) <export default as Utensils>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Utensils",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/telescope.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Telescope
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",
            key: "k4qptu"
        }
    ],
    [
        "path",
        {
            d: "m13.56 11.747 4.332-.924",
            key: "19l80z"
        }
    ],
    [
        "path",
        {
            d: "m16 21-3.105-6.21",
            key: "7oh9d"
        }
    ],
    [
        "path",
        {
            d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",
            key: "m7xp4m"
        }
    ],
    [
        "path",
        {
            d: "m6.158 8.633 1.114 4.456",
            key: "74o979"
        }
    ],
    [
        "path",
        {
            d: "m8 21 3.105-6.21",
            key: "1fvxut"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "13",
            r: "2",
            key: "1c1ljs"
        }
    ]
];
const Telescope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("telescope", __iconNode);
;
 //# sourceMappingURL=telescope.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/telescope.js [app-client] (ecmascript) <export default as Telescope>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Telescope",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$telescope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$telescope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/telescope.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>GraduationCap
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
            key: "j76jl0"
        }
    ],
    [
        "path",
        {
            d: "M22 10v6",
            key: "1lu8f3"
        }
    ],
    [
        "path",
        {
            d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
            key: "1r8lef"
        }
    ]
];
const GraduationCap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("graduation-cap", __iconNode);
;
 //# sourceMappingURL=graduation-cap.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraduationCap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/dog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Dog
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.25 16.25h1.5L12 17z",
            key: "w7jh35"
        }
    ],
    [
        "path",
        {
            d: "M16 14v.5",
            key: "1lajdz"
        }
    ],
    [
        "path",
        {
            d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",
            key: "u7s9ue"
        }
    ],
    [
        "path",
        {
            d: "M8 14v.5",
            key: "1nzgdb"
        }
    ],
    [
        "path",
        {
            d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",
            key: "v8hric"
        }
    ]
];
const Dog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("dog", __iconNode);
;
 //# sourceMappingURL=dog.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/dog.js [app-client] (ecmascript) <export default as Dog>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/dog.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mountain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Mountain
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m8 3 4 8 5-5 5 15H2L8 3z",
            key: "otkl63"
        }
    ]
];
const Mountain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("mountain", __iconNode);
;
 //# sourceMappingURL=mountain.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mountain.js [app-client] (ecmascript) <export default as Mountain>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mountain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mountain.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LogOut
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 17 5-5-5-5",
            key: "1bji2h"
        }
    ],
    [
        "path",
        {
            d: "M21 12H9",
            key: "dn1m92"
        }
    ],
    [
        "path",
        {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }
    ]
];
const LogOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("log-out", __iconNode);
;
 //# sourceMappingURL=log-out.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TriangleAlert
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
        }
    ],
    [
        "path",
        {
            d: "M12 9v4",
            key: "juzpu7"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
];
const TriangleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("triangle-alert", __iconNode);
;
 //# sourceMappingURL=triangle-alert.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertTriangle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>SkipForward
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 4v16",
            key: "7j8fe9"
        }
    ],
    [
        "path",
        {
            d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
            key: "zs4d6"
        }
    ]
];
const SkipForward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("skip-forward", __iconNode);
;
 //# sourceMappingURL=skip-forward.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkipForward",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Users
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "path",
        {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ]
];
const Users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("users", __iconNode);
;
 //# sourceMappingURL=users.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Shield
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ]
];
const Shield = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("shield", __iconNode);
;
 //# sourceMappingURL=shield.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shield",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MicOff
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 19v3",
            key: "npa21l"
        }
    ],
    [
        "path",
        {
            d: "M15 9.34V5a3 3 0 0 0-5.68-1.33",
            key: "1gzdoj"
        }
    ],
    [
        "path",
        {
            d: "M16.95 16.95A7 7 0 0 1 5 12v-2",
            key: "cqa7eg"
        }
    ],
    [
        "path",
        {
            d: "M18.89 13.23A7 7 0 0 0 19 12v-2",
            key: "16hl24"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ],
    [
        "path",
        {
            d: "M9 9v3a3 3 0 0 0 5.12 2.12",
            key: "r2i35w"
        }
    ]
];
const MicOff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("mic-off", __iconNode);
;
 //# sourceMappingURL=mic-off.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MicOff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/video-off.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>VideoOff
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",
            key: "w8jjjt"
        }
    ],
    [
        "path",
        {
            d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",
            key: "1xawa7"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ]
];
const VideoOff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("video-off", __iconNode);
;
 //# sourceMappingURL=video-off.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/video-off.js [app-client] (ecmascript) <export default as VideoOff>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoOff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/video-off.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/flip-horizontal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>FlipHorizontal
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",
            key: "1i73f7"
        }
    ],
    [
        "path",
        {
            d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",
            key: "saxlbk"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "M12 14v2",
            key: "8jcxud"
        }
    ],
    [
        "path",
        {
            d: "M12 8v2",
            key: "1woqiv"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ]
];
const FlipHorizontal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flip-horizontal", __iconNode);
;
 //# sourceMappingURL=flip-horizontal.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/flip-horizontal.js [app-client] (ecmascript) <export default as FlipHorizontal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlipHorizontal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flip$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flip$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/flip-horizontal.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Send
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
];
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("send", __iconNode);
;
 //# sourceMappingURL=send.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Send",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
// packages/react/compose-refs/src/compose-refs.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Slot,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable,
    "createSlot",
    ()=>createSlot,
    "createSlottable",
    ()=>createSlottable
]);
// src/slot.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var use = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" use ".trim().toString()];
function isPromiseLike(value) {
    return typeof value === "object" && value !== null && "then" in value;
}
function isLazyComponent(element) {
    return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        let { children, ...slotProps } = props;
        if (isLazyComponent(children) && typeof use === "function") {
            children = use(children._payload);
        }
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(null);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        let { children, ...slotProps } = props;
        if (isLazyComponent(children) && typeof use === "function") {
            children = use(children._payload);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Children.only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = ({ children })=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        });
    };
    Slottable2.displayName = `${ownerName}.Slottable`;
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/functions-js/dist/module/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Base error for Supabase Edge Function invocations.
 *
 * @example
 * ```ts
 * import { FunctionsError } from '@supabase/functions-js'
 *
 * throw new FunctionsError('Unexpected error invoking function', 'FunctionsError', {
 *   requestId: 'abc123',
 * })
 * ```
 */ __turbopack_context__.s([
    "FunctionRegion",
    ()=>FunctionRegion,
    "FunctionsError",
    ()=>FunctionsError,
    "FunctionsFetchError",
    ()=>FunctionsFetchError,
    "FunctionsHttpError",
    ()=>FunctionsHttpError,
    "FunctionsRelayError",
    ()=>FunctionsRelayError
]);
class FunctionsError extends Error {
    constructor(message, name = 'FunctionsError', context){
        super(message);
        this.name = name;
        this.context = context;
    }
}
class FunctionsFetchError extends FunctionsError {
    constructor(context){
        super('Failed to send a request to the Edge Function', 'FunctionsFetchError', context);
    }
}
class FunctionsRelayError extends FunctionsError {
    constructor(context){
        super('Relay Error invoking the Edge Function', 'FunctionsRelayError', context);
    }
}
class FunctionsHttpError extends FunctionsError {
    constructor(context){
        super('Edge Function returned a non-2xx status code', 'FunctionsHttpError', context);
    }
}
var FunctionRegion;
(function(FunctionRegion) {
    FunctionRegion["Any"] = "any";
    FunctionRegion["ApNortheast1"] = "ap-northeast-1";
    FunctionRegion["ApNortheast2"] = "ap-northeast-2";
    FunctionRegion["ApSouth1"] = "ap-south-1";
    FunctionRegion["ApSoutheast1"] = "ap-southeast-1";
    FunctionRegion["ApSoutheast2"] = "ap-southeast-2";
    FunctionRegion["CaCentral1"] = "ca-central-1";
    FunctionRegion["EuCentral1"] = "eu-central-1";
    FunctionRegion["EuWest1"] = "eu-west-1";
    FunctionRegion["EuWest2"] = "eu-west-2";
    FunctionRegion["EuWest3"] = "eu-west-3";
    FunctionRegion["SaEast1"] = "sa-east-1";
    FunctionRegion["UsEast1"] = "us-east-1";
    FunctionRegion["UsWest1"] = "us-west-1";
    FunctionRegion["UsWest2"] = "us-west-2";
})(FunctionRegion || (FunctionRegion = {})); //# sourceMappingURL=types.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/functions-js/dist/module/helper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveFetch",
    ()=>resolveFetch
]);
const resolveFetch = (customFetch)=>{
    if (customFetch) {
        return (...args)=>customFetch(...args);
    }
    return (...args)=>fetch(...args);
}; //# sourceMappingURL=helper.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionsClient",
    ()=>FunctionsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/functions-js/dist/module/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/functions-js/dist/module/types.js [app-client] (ecmascript)");
;
;
;
class FunctionsClient {
    /**
     * Creates a new Functions client bound to an Edge Functions URL.
     *
     * @example
     * ```ts
     * import { FunctionsClient, FunctionRegion } from '@supabase/functions-js'
     *
     * const functions = new FunctionsClient('https://xyzcompany.supabase.co/functions/v1', {
     *   headers: { apikey: 'public-anon-key' },
     *   region: FunctionRegion.UsEast1,
     * })
     * ```
     */ constructor(url, { headers = {}, customFetch, region = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionRegion"].Any } = {}){
        this.url = url;
        this.headers = headers;
        this.region = region;
        this.fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveFetch"])(customFetch);
    }
    /**
     * Updates the authorization header
     * @param token - the new jwt token sent in the authorisation header
     * @example
     * ```ts
     * functions.setAuth(session.access_token)
     * ```
     */ setAuth(token) {
        this.headers.Authorization = `Bearer ${token}`;
    }
    /**
     * Invokes a function
     * @param functionName - The name of the Function to invoke.
     * @param options - Options for invoking the Function.
     * @example
     * ```ts
     * const { data, error } = await functions.invoke('hello-world', {
     *   body: { name: 'Ada' },
     * })
     * ```
     */ invoke(functionName_1) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*(functionName, options = {}) {
            var _a;
            let timeoutId;
            let timeoutController;
            try {
                const { headers, method, body: functionArgs, signal, timeout } = options;
                let _headers = {};
                let { region } = options;
                if (!region) {
                    region = this.region;
                }
                // Add region as query parameter using URL API
                const url = new URL(`${this.url}/${functionName}`);
                if (region && region !== 'any') {
                    _headers['x-region'] = region;
                    url.searchParams.set('forceFunctionRegion', region);
                }
                let body;
                if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, 'Content-Type') || !headers)) {
                    if (typeof Blob !== 'undefined' && functionArgs instanceof Blob || functionArgs instanceof ArrayBuffer) {
                        // will work for File as File inherits Blob
                        // also works for ArrayBuffer as it is the same underlying structure as a Blob
                        _headers['Content-Type'] = 'application/octet-stream';
                        body = functionArgs;
                    } else if (typeof functionArgs === 'string') {
                        // plain string
                        _headers['Content-Type'] = 'text/plain';
                        body = functionArgs;
                    } else if (typeof FormData !== 'undefined' && functionArgs instanceof FormData) {
                        // don't set content-type headers
                        // Request will automatically add the right boundary value
                        body = functionArgs;
                    } else {
                        // default, assume this is JSON
                        _headers['Content-Type'] = 'application/json';
                        body = JSON.stringify(functionArgs);
                    }
                } else {
                    if (functionArgs && typeof functionArgs !== 'string' && !(typeof Blob !== 'undefined' && functionArgs instanceof Blob) && !(functionArgs instanceof ArrayBuffer) && !(typeof FormData !== 'undefined' && functionArgs instanceof FormData)) {
                        body = JSON.stringify(functionArgs);
                    } else {
                        body = functionArgs;
                    }
                }
                // Handle timeout by creating an AbortController
                let effectiveSignal = signal;
                if (timeout) {
                    timeoutController = new AbortController();
                    timeoutId = setTimeout(()=>timeoutController.abort(), timeout);
                    // If user provided their own signal, we need to respect both
                    if (signal) {
                        effectiveSignal = timeoutController.signal;
                        // If the user's signal is aborted, abort our timeout controller too
                        signal.addEventListener('abort', ()=>timeoutController.abort());
                    } else {
                        effectiveSignal = timeoutController.signal;
                    }
                }
                const response = yield this.fetch(url.toString(), {
                    method: method || 'POST',
                    // headers priority is (high to low):
                    // 1. invoke-level headers
                    // 2. client-level headers
                    // 3. default Content-Type header
                    headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
                    body,
                    signal: effectiveSignal
                }).catch((fetchError)=>{
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsFetchError"](fetchError);
                });
                const isRelayError = response.headers.get('x-relay-error');
                if (isRelayError && isRelayError === 'true') {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsRelayError"](response);
                }
                if (!response.ok) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsHttpError"](response);
                }
                let responseType = ((_a = response.headers.get('Content-Type')) !== null && _a !== void 0 ? _a : 'text/plain').split(';')[0].trim();
                let data;
                if (responseType === 'application/json') {
                    data = yield response.json();
                } else if (responseType === 'application/octet-stream' || responseType === 'application/pdf') {
                    data = yield response.blob();
                } else if (responseType === 'text/event-stream') {
                    data = response;
                } else if (responseType === 'multipart/form-data') {
                    data = yield response.formData();
                } else {
                    // default to text
                    data = yield response.text();
                }
                return {
                    data,
                    error: null,
                    response
                };
            } catch (error) {
                return {
                    data: null,
                    error,
                    response: error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsHttpError"] || error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsRelayError"] ? error.context : undefined
                };
            } finally{
                // Clear the timeout if it was set
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
            }
        });
    }
} //# sourceMappingURL=FunctionsClient.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/postgrest-js/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostgrestBuilder",
    ()=>PostgrestBuilder,
    "PostgrestClient",
    ()=>PostgrestClient,
    "PostgrestError",
    ()=>PostgrestError,
    "PostgrestFilterBuilder",
    ()=>PostgrestFilterBuilder,
    "PostgrestQueryBuilder",
    ()=>PostgrestQueryBuilder,
    "PostgrestTransformBuilder",
    ()=>PostgrestTransformBuilder,
    "default",
    ()=>src_default
]);
//#region src/PostgrestError.ts
/**
* Error format
*
* {@link https://postgrest.org/en/stable/api.html?highlight=options#errors-and-http-status-codes}
*/ var PostgrestError = class extends Error {
    /**
	* @example
	* ```ts
	* import PostgrestError from '@supabase/postgrest-js'
	*
	* throw new PostgrestError({
	*   message: 'Row level security prevented the request',
	*   details: 'RLS denied the insert',
	*   hint: 'Check your policies',
	*   code: 'PGRST301',
	* })
	* ```
	*/ constructor(context){
        super(context.message);
        this.name = "PostgrestError";
        this.details = context.details;
        this.hint = context.hint;
        this.code = context.code;
    }
};
//#endregion
//#region src/PostgrestBuilder.ts
var PostgrestBuilder = class {
    /**
	* Creates a builder configured for a specific PostgREST request.
	*
	* @example
	* ```ts
	* import PostgrestQueryBuilder from '@supabase/postgrest-js'
	*
	* const builder = new PostgrestQueryBuilder(
	*   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
	*   { headers: new Headers({ apikey: 'public-anon-key' }) }
	* )
	* ```
	*/ constructor(builder){
        var _builder$shouldThrowO, _builder$isMaybeSingl, _builder$urlLengthLim;
        this.shouldThrowOnError = false;
        this.method = builder.method;
        this.url = builder.url;
        this.headers = new Headers(builder.headers);
        this.schema = builder.schema;
        this.body = builder.body;
        this.shouldThrowOnError = (_builder$shouldThrowO = builder.shouldThrowOnError) !== null && _builder$shouldThrowO !== void 0 ? _builder$shouldThrowO : false;
        this.signal = builder.signal;
        this.isMaybeSingle = (_builder$isMaybeSingl = builder.isMaybeSingle) !== null && _builder$isMaybeSingl !== void 0 ? _builder$isMaybeSingl : false;
        this.urlLengthLimit = (_builder$urlLengthLim = builder.urlLengthLimit) !== null && _builder$urlLengthLim !== void 0 ? _builder$urlLengthLim : 8e3;
        if (builder.fetch) this.fetch = builder.fetch;
        else this.fetch = fetch;
    }
    /**
	* If there's an error with the query, throwOnError will reject the promise by
	* throwing the error instead of returning it as part of a successful response.
	*
	* {@link https://github.com/supabase/supabase-js/issues/92}
	*/ throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    /**
	* Set an HTTP header for the request.
	*/ setHeader(name, value) {
        this.headers = new Headers(this.headers);
        this.headers.set(name, value);
        return this;
    }
    then(onfulfilled, onrejected) {
        var _this = this;
        if (this.schema === void 0) {} else if ([
            "GET",
            "HEAD"
        ].includes(this.method)) this.headers.set("Accept-Profile", this.schema);
        else this.headers.set("Content-Profile", this.schema);
        if (this.method !== "GET" && this.method !== "HEAD") this.headers.set("Content-Type", "application/json");
        const _fetch = this.fetch;
        let res = _fetch(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async (res$1)=>{
            let error = null;
            let data = null;
            let count = null;
            let status = res$1.status;
            let statusText = res$1.statusText;
            if (res$1.ok) {
                var _this$headers$get2, _res$headers$get;
                if (_this.method !== "HEAD") {
                    var _this$headers$get;
                    const body = await res$1.text();
                    if (body === "") {} else if (_this.headers.get("Accept") === "text/csv") data = body;
                    else if (_this.headers.get("Accept") && ((_this$headers$get = _this.headers.get("Accept")) === null || _this$headers$get === void 0 ? void 0 : _this$headers$get.includes("application/vnd.pgrst.plan+text"))) data = body;
                    else data = JSON.parse(body);
                }
                const countHeader = (_this$headers$get2 = _this.headers.get("Prefer")) === null || _this$headers$get2 === void 0 ? void 0 : _this$headers$get2.match(/count=(exact|planned|estimated)/);
                const contentRange = (_res$headers$get = res$1.headers.get("content-range")) === null || _res$headers$get === void 0 ? void 0 : _res$headers$get.split("/");
                if (countHeader && contentRange && contentRange.length > 1) count = parseInt(contentRange[1]);
                if (_this.isMaybeSingle && _this.method === "GET" && Array.isArray(data)) if (data.length > 1) {
                    error = {
                        code: "PGRST116",
                        details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                        hint: null,
                        message: "JSON object requested, multiple (or no) rows returned"
                    };
                    data = null;
                    count = null;
                    status = 406;
                    statusText = "Not Acceptable";
                } else if (data.length === 1) data = data[0];
                else data = null;
            } else {
                var _error$details;
                const body = await res$1.text();
                try {
                    error = JSON.parse(body);
                    if (Array.isArray(error) && res$1.status === 404) {
                        data = [];
                        error = null;
                        status = 200;
                        statusText = "OK";
                    }
                } catch (_unused) {
                    if (res$1.status === 404 && body === "") {
                        status = 204;
                        statusText = "No Content";
                    } else error = {
                        message: body
                    };
                }
                if (error && _this.isMaybeSingle && (error === null || error === void 0 || (_error$details = error.details) === null || _error$details === void 0 ? void 0 : _error$details.includes("0 rows"))) {
                    error = null;
                    status = 200;
                    statusText = "OK";
                }
                if (error && _this.shouldThrowOnError) throw new PostgrestError(error);
            }
            return {
                error,
                data,
                count,
                status,
                statusText
            };
        });
        if (!this.shouldThrowOnError) res = res.catch((fetchError)=>{
            var _fetchError$name2;
            let errorDetails = "";
            let hint = "";
            let code = "";
            const cause = fetchError === null || fetchError === void 0 ? void 0 : fetchError.cause;
            if (cause) {
                var _cause$message, _cause$code, _fetchError$name, _cause$name;
                const causeMessage = (_cause$message = cause === null || cause === void 0 ? void 0 : cause.message) !== null && _cause$message !== void 0 ? _cause$message : "";
                const causeCode = (_cause$code = cause === null || cause === void 0 ? void 0 : cause.code) !== null && _cause$code !== void 0 ? _cause$code : "";
                errorDetails = `${(_fetchError$name = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _fetchError$name !== void 0 ? _fetchError$name : "FetchError"}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`;
                errorDetails += `\n\nCaused by: ${(_cause$name = cause === null || cause === void 0 ? void 0 : cause.name) !== null && _cause$name !== void 0 ? _cause$name : "Error"}: ${causeMessage}`;
                if (causeCode) errorDetails += ` (${causeCode})`;
                if (cause === null || cause === void 0 ? void 0 : cause.stack) errorDetails += `\n${cause.stack}`;
            } else {
                var _fetchError$stack;
                errorDetails = (_fetchError$stack = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _fetchError$stack !== void 0 ? _fetchError$stack : "";
            }
            const urlLength = this.url.toString().length;
            if ((fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) === "AbortError" || (fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) === "ABORT_ERR") {
                code = "";
                hint = "Request was aborted (timeout or manual cancellation)";
                if (urlLength > this.urlLengthLimit) hint += `. Note: Your request URL is ${urlLength} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`;
            } else if ((cause === null || cause === void 0 ? void 0 : cause.name) === "HeadersOverflowError" || (cause === null || cause === void 0 ? void 0 : cause.code) === "UND_ERR_HEADERS_OVERFLOW") {
                code = "";
                hint = "HTTP headers exceeded server limits (typically 16KB)";
                if (urlLength > this.urlLengthLimit) hint += `. Your request URL is ${urlLength} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`;
            }
            return {
                error: {
                    message: `${(_fetchError$name2 = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _fetchError$name2 !== void 0 ? _fetchError$name2 : "FetchError"}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`,
                    details: errorDetails,
                    hint,
                    code
                },
                data: null,
                count: null,
                status: 0,
                statusText: ""
            };
        });
        return res.then(onfulfilled, onrejected);
    }
    /**
	* Override the type of the returned `data`.
	*
	* @typeParam NewResult - The new result type to override with
	* @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
	*/ returns() {
        /* istanbul ignore next */ return this;
    }
    /**
	* Override the type of the returned `data` field in the response.
	*
	* @typeParam NewResult - The new type to cast the response data to
	* @typeParam Options - Optional type configuration (defaults to { merge: true })
	* @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
	* @example
	* ```typescript
	* // Merge with existing types (default behavior)
	* const query = supabase
	*   .from('users')
	*   .select()
	*   .overrideTypes<{ custom_field: string }>()
	*
	* // Replace existing types completely
	* const replaceQuery = supabase
	*   .from('users')
	*   .select()
	*   .overrideTypes<{ id: number; name: string }, { merge: false }>()
	* ```
	* @returns A PostgrestBuilder instance with the new type
	*/ overrideTypes() {
        return this;
    }
};
//#endregion
//#region src/PostgrestTransformBuilder.ts
var PostgrestTransformBuilder = class extends PostgrestBuilder {
    /**
	* Perform a SELECT on the query result.
	*
	* By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
	* return modified rows. By calling this method, modified rows are returned in
	* `data`.
	*
	* @param columns - The columns to retrieve, separated by commas
	*/ select(columns) {
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map((c)=>{
            if (/\s/.test(c) && !quoted) return "";
            if (c === "\"") quoted = !quoted;
            return c;
        }).join("");
        this.url.searchParams.set("select", cleanedColumns);
        this.headers.append("Prefer", "return=representation");
        return this;
    }
    /**
	* Order the query result by `column`.
	*
	* You can call this method multiple times to order by multiple columns.
	*
	* You can order referenced tables, but it only affects the ordering of the
	* parent table if you use `!inner` in the query.
	*
	* @param column - The column to order by
	* @param options - Named parameters
	* @param options.ascending - If `true`, the result will be in ascending order
	* @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
	* `null`s appear last.
	* @param options.referencedTable - Set this to order a referenced table by
	* its columns
	* @param options.foreignTable - Deprecated, use `options.referencedTable`
	* instead
	*/ order(column, { ascending = true, nullsFirst, foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.order` : "order";
        const existingOrder = this.url.searchParams.get(key);
        this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ""}${column}.${ascending ? "asc" : "desc"}${nullsFirst === void 0 ? "" : nullsFirst ? ".nullsfirst" : ".nullslast"}`);
        return this;
    }
    /**
	* Limit the query result by `count`.
	*
	* @param count - The maximum number of rows to return
	* @param options - Named parameters
	* @param options.referencedTable - Set this to limit rows of referenced
	* tables instead of the parent table
	* @param options.foreignTable - Deprecated, use `options.referencedTable`
	* instead
	*/ limit(count, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
        this.url.searchParams.set(key, `${count}`);
        return this;
    }
    /**
	* Limit the query result by starting at an offset `from` and ending at the offset `to`.
	* Only records within this range are returned.
	* This respects the query order and if there is no order clause the range could behave unexpectedly.
	* The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
	* and fourth rows of the query.
	*
	* @param from - The starting index from which to limit the result
	* @param to - The last index to which to limit the result
	* @param options - Named parameters
	* @param options.referencedTable - Set this to limit rows of referenced
	* tables instead of the parent table
	* @param options.foreignTable - Deprecated, use `options.referencedTable`
	* instead
	*/ range(from, to, { foreignTable, referencedTable = foreignTable } = {}) {
        const keyOffset = typeof referencedTable === "undefined" ? "offset" : `${referencedTable}.offset`;
        const keyLimit = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
    }
    /**
	* Set the AbortSignal for the fetch request.
	*
	* @param signal - The AbortSignal to use for the fetch request
	*/ abortSignal(signal) {
        this.signal = signal;
        return this;
    }
    /**
	* Return `data` as a single object instead of an array of objects.
	*
	* Query result must be one row (e.g. using `.limit(1)`), otherwise this
	* returns an error.
	*/ single() {
        this.headers.set("Accept", "application/vnd.pgrst.object+json");
        return this;
    }
    /**
	* Return `data` as a single object instead of an array of objects.
	*
	* Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
	* this returns an error.
	*/ maybeSingle() {
        if (this.method === "GET") this.headers.set("Accept", "application/json");
        else this.headers.set("Accept", "application/vnd.pgrst.object+json");
        this.isMaybeSingle = true;
        return this;
    }
    /**
	* Return `data` as a string in CSV format.
	*/ csv() {
        this.headers.set("Accept", "text/csv");
        return this;
    }
    /**
	* Return `data` as an object in [GeoJSON](https://geojson.org) format.
	*/ geojson() {
        this.headers.set("Accept", "application/geo+json");
        return this;
    }
    /**
	* Return `data` as the EXPLAIN plan for the query.
	*
	* You need to enable the
	* [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
	* setting before using this method.
	*
	* @param options - Named parameters
	*
	* @param options.analyze - If `true`, the query will be executed and the
	* actual run time will be returned
	*
	* @param options.verbose - If `true`, the query identifier will be returned
	* and `data` will include the output columns of the query
	*
	* @param options.settings - If `true`, include information on configuration
	* parameters that affect query planning
	*
	* @param options.buffers - If `true`, include information on buffer usage
	*
	* @param options.wal - If `true`, include information on WAL record generation
	*
	* @param options.format - The format of the output, can be `"text"` (default)
	* or `"json"`
	*/ explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = "text" } = {}) {
        var _this$headers$get;
        const options = [
            analyze ? "analyze" : null,
            verbose ? "verbose" : null,
            settings ? "settings" : null,
            buffers ? "buffers" : null,
            wal ? "wal" : null
        ].filter(Boolean).join("|");
        const forMediatype = (_this$headers$get = this.headers.get("Accept")) !== null && _this$headers$get !== void 0 ? _this$headers$get : "application/json";
        this.headers.set("Accept", `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`);
        if (format === "json") return this;
        else return this;
    }
    /**
	* Rollback the query.
	*
	* `data` will still be returned, but the query is not committed.
	*/ rollback() {
        this.headers.append("Prefer", "tx=rollback");
        return this;
    }
    /**
	* Override the type of the returned `data`.
	*
	* @typeParam NewResult - The new result type to override with
	* @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
	*/ returns() {
        return this;
    }
    /**
	* Set the maximum number of rows that can be affected by the query.
	* Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
	*
	* @param value - The maximum number of rows that can be affected
	*/ maxAffected(value) {
        this.headers.append("Prefer", "handling=strict");
        this.headers.append("Prefer", `max-affected=${value}`);
        return this;
    }
};
//#endregion
//#region src/PostgrestFilterBuilder.ts
const PostgrestReservedCharsRegexp = /* @__PURE__ */ new RegExp("[,()]");
var PostgrestFilterBuilder = class extends PostgrestTransformBuilder {
    /**
	* Match only rows where `column` is equal to `value`.
	*
	* To check if the value of `column` is NULL, you should use `.is()` instead.
	*
	* @param column - The column to filter on
	* @param value - The value to filter with
	*/ eq(column, value) {
        this.url.searchParams.append(column, `eq.${value}`);
        return this;
    }
    /**
	* Match only rows where `column` is not equal to `value`.
	*
	* @param column - The column to filter on
	* @param value - The value to filter with
	*/ neq(column, value) {
        this.url.searchParams.append(column, `neq.${value}`);
        return this;
    }
    /**
	* Match only rows where `column` is greater than `value`.
	*
	* @param column - The column to filter on
	* @param value - The value to filter with
	*/ gt(column, value) {
        this.url.searchParams.append(column, `gt.${value}`);
        return this;
    }
    /**
	* Match only rows where `column` is greater than or equal to `value`.
	*
	* @param column - The column to filter on
	* @param value - The value to filter with
	*/ gte(column, value) {
        this.url.searchParams.append(column, `gte.${value}`);
        return this;
    }
    /**
	* Match only rows where `column` is less than `value`.
	*
	* @param column - The column to filter on
	* @param value - The value to filter with
	*/ lt(column, value) {
        this.url.searchParams.append(column, `lt.${value}`);
        return this;
    }
    /**
	* Match only rows where `column` is less than or equal to `value`.
	*
	* @param column - The column to filter on
	* @param value - The value to filter with
	*/ lte(column, value) {
        this.url.searchParams.append(column, `lte.${value}`);
        return this;
    }
    /**
	* Match only rows where `column` matches `pattern` case-sensitively.
	*
	* @param column - The column to filter on
	* @param pattern - The pattern to match with
	*/ like(column, pattern) {
        this.url.searchParams.append(column, `like.${pattern}`);
        return this;
    }
    /**
	* Match only rows where `column` matches all of `patterns` case-sensitively.
	*
	* @param column - The column to filter on
	* @param patterns - The patterns to match with
	*/ likeAllOf(column, patterns) {
        this.url.searchParams.append(column, `like(all).{${patterns.join(",")}}`);
        return this;
    }
    /**
	* Match only rows where `column` matches any of `patterns` case-sensitively.
	*
	* @param column - The column to filter on
	* @param patterns - The patterns to match with
	*/ likeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `like(any).{${patterns.join(",")}}`);
        return this;
    }
    /**
	* Match only rows where `column` matches `pattern` case-insensitively.
	*
	* @param column - The column to filter on
	* @param pattern - The pattern to match with
	*/ ilike(column, pattern) {
        this.url.searchParams.append(column, `ilike.${pattern}`);
        return this;
    }
    /**
	* Match only rows where `column` matches all of `patterns` case-insensitively.
	*
	* @param column - The column to filter on
	* @param patterns - The patterns to match with
	*/ ilikeAllOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(all).{${patterns.join(",")}}`);
        return this;
    }
    /**
	* Match only rows where `column` matches any of `patterns` case-insensitively.
	*
	* @param column - The column to filter on
	* @param patterns - The patterns to match with
	*/ ilikeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(any).{${patterns.join(",")}}`);
        return this;
    }
    /**
	* Match only rows where `column` matches the PostgreSQL regex `pattern`
	* case-sensitively (using the `~` operator).
	*
	* @param column - The column to filter on
	* @param pattern - The PostgreSQL regular expression pattern to match with
	*/ regexMatch(column, pattern) {
        this.url.searchParams.append(column, `match.${pattern}`);
        return this;
    }
    /**
	* Match only rows where `column` matches the PostgreSQL regex `pattern`
	* case-insensitively (using the `~*` operator).
	*
	* @param column - The column to filter on
	* @param pattern - The PostgreSQL regular expression pattern to match with
	*/ regexIMatch(column, pattern) {
        this.url.searchParams.append(column, `imatch.${pattern}`);
        return this;
    }
    /**
	* Match only rows where `column` IS `value`.
	*
	* For non-boolean columns, this is only relevant for checking if the value of
	* `column` is NULL by setting `value` to `null`.
	*
	* For boolean columns, you can also set `value` to `true` or `false` and it
	* will behave the same way as `.eq()`.
	*
	* @param column - The column to filter on
	* @param value - The value to filter with
	*/ is(column, value) {
        this.url.searchParams.append(column, `is.${value}`);
        return this;
    }
    /**
	* Match only rows where `column` IS DISTINCT FROM `value`.
	*
	* Unlike `.neq()`, this treats `NULL` as a comparable value. Two `NULL` values
	* are considered equal (not distinct), and comparing `NULL` with any non-NULL
	* value returns true (distinct).
	*
	* @param column - The column to filter on
	* @param value - The value to filter with
	*/ isDistinct(column, value) {
        this.url.searchParams.append(column, `isdistinct.${value}`);
        return this;
    }
    /**
	* Match only rows where `column` is included in the `values` array.
	*
	* @param column - The column to filter on
	* @param values - The values array to filter with
	*/ in(column, values) {
        const cleanedValues = Array.from(new Set(values)).map((s)=>{
            if (typeof s === "string" && PostgrestReservedCharsRegexp.test(s)) return `"${s}"`;
            else return `${s}`;
        }).join(",");
        this.url.searchParams.append(column, `in.(${cleanedValues})`);
        return this;
    }
    /**
	* Match only rows where `column` is NOT included in the `values` array.
	*
	* @param column - The column to filter on
	* @param values - The values array to filter with
	*/ notIn(column, values) {
        const cleanedValues = Array.from(new Set(values)).map((s)=>{
            if (typeof s === "string" && PostgrestReservedCharsRegexp.test(s)) return `"${s}"`;
            else return `${s}`;
        }).join(",");
        this.url.searchParams.append(column, `not.in.(${cleanedValues})`);
        return this;
    }
    /**
	* Only relevant for jsonb, array, and range columns. Match only rows where
	* `column` contains every element appearing in `value`.
	*
	* @param column - The jsonb, array, or range column to filter on
	* @param value - The jsonb, array, or range value to filter with
	*/ contains(column, value) {
        if (typeof value === "string") this.url.searchParams.append(column, `cs.${value}`);
        else if (Array.isArray(value)) this.url.searchParams.append(column, `cs.{${value.join(",")}}`);
        else this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
        return this;
    }
    /**
	* Only relevant for jsonb, array, and range columns. Match only rows where
	* every element appearing in `column` is contained by `value`.
	*
	* @param column - The jsonb, array, or range column to filter on
	* @param value - The jsonb, array, or range value to filter with
	*/ containedBy(column, value) {
        if (typeof value === "string") this.url.searchParams.append(column, `cd.${value}`);
        else if (Array.isArray(value)) this.url.searchParams.append(column, `cd.{${value.join(",")}}`);
        else this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
        return this;
    }
    /**
	* Only relevant for range columns. Match only rows where every element in
	* `column` is greater than any element in `range`.
	*
	* @param column - The range column to filter on
	* @param range - The range to filter with
	*/ rangeGt(column, range) {
        this.url.searchParams.append(column, `sr.${range}`);
        return this;
    }
    /**
	* Only relevant for range columns. Match only rows where every element in
	* `column` is either contained in `range` or greater than any element in
	* `range`.
	*
	* @param column - The range column to filter on
	* @param range - The range to filter with
	*/ rangeGte(column, range) {
        this.url.searchParams.append(column, `nxl.${range}`);
        return this;
    }
    /**
	* Only relevant for range columns. Match only rows where every element in
	* `column` is less than any element in `range`.
	*
	* @param column - The range column to filter on
	* @param range - The range to filter with
	*/ rangeLt(column, range) {
        this.url.searchParams.append(column, `sl.${range}`);
        return this;
    }
    /**
	* Only relevant for range columns. Match only rows where every element in
	* `column` is either contained in `range` or less than any element in
	* `range`.
	*
	* @param column - The range column to filter on
	* @param range - The range to filter with
	*/ rangeLte(column, range) {
        this.url.searchParams.append(column, `nxr.${range}`);
        return this;
    }
    /**
	* Only relevant for range columns. Match only rows where `column` is
	* mutually exclusive to `range` and there can be no element between the two
	* ranges.
	*
	* @param column - The range column to filter on
	* @param range - The range to filter with
	*/ rangeAdjacent(column, range) {
        this.url.searchParams.append(column, `adj.${range}`);
        return this;
    }
    /**
	* Only relevant for array and range columns. Match only rows where
	* `column` and `value` have an element in common.
	*
	* @param column - The array or range column to filter on
	* @param value - The array or range value to filter with
	*/ overlaps(column, value) {
        if (typeof value === "string") this.url.searchParams.append(column, `ov.${value}`);
        else this.url.searchParams.append(column, `ov.{${value.join(",")}}`);
        return this;
    }
    /**
	* Only relevant for text and tsvector columns. Match only rows where
	* `column` matches the query string in `query`.
	*
	* @param column - The text or tsvector column to filter on
	* @param query - The query text to match with
	* @param options - Named parameters
	* @param options.config - The text search configuration to use
	* @param options.type - Change how the `query` text is interpreted
	*/ textSearch(column, query, { config, type } = {}) {
        let typePart = "";
        if (type === "plain") typePart = "pl";
        else if (type === "phrase") typePart = "ph";
        else if (type === "websearch") typePart = "w";
        const configPart = config === void 0 ? "" : `(${config})`;
        this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
        return this;
    }
    /**
	* Match only rows where each column in `query` keys is equal to its
	* associated value. Shorthand for multiple `.eq()`s.
	*
	* @param query - The object to filter with, with column names as keys mapped
	* to their filter values
	*/ match(query) {
        Object.entries(query).forEach(([column, value])=>{
            this.url.searchParams.append(column, `eq.${value}`);
        });
        return this;
    }
    /**
	* Match only rows which doesn't satisfy the filter.
	*
	* Unlike most filters, `opearator` and `value` are used as-is and need to
	* follow [PostgREST
	* syntax](https://postgrest.org/en/stable/api.html#operators). You also need
	* to make sure they are properly sanitized.
	*
	* @param column - The column to filter on
	* @param operator - The operator to be negated to filter with, following
	* PostgREST syntax
	* @param value - The value to filter with, following PostgREST syntax
	*/ not(column, operator, value) {
        this.url.searchParams.append(column, `not.${operator}.${value}`);
        return this;
    }
    /**
	* Match only rows which satisfy at least one of the filters.
	*
	* Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
	* syntax](https://postgrest.org/en/stable/api.html#operators). You also need
	* to make sure it's properly sanitized.
	*
	* It's currently not possible to do an `.or()` filter across multiple tables.
	*
	* @param filters - The filters to use, following PostgREST syntax
	* @param options - Named parameters
	* @param options.referencedTable - Set this to filter on referenced tables
	* instead of the parent table
	* @param options.foreignTable - Deprecated, use `referencedTable` instead
	*/ or(filters, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.or` : "or";
        this.url.searchParams.append(key, `(${filters})`);
        return this;
    }
    /**
	* Match only rows which satisfy the filter. This is an escape hatch - you
	* should use the specific filter methods wherever possible.
	*
	* Unlike most filters, `opearator` and `value` are used as-is and need to
	* follow [PostgREST
	* syntax](https://postgrest.org/en/stable/api.html#operators). You also need
	* to make sure they are properly sanitized.
	*
	* @param column - The column to filter on
	* @param operator - The operator to filter with, following PostgREST syntax
	* @param value - The value to filter with, following PostgREST syntax
	*/ filter(column, operator, value) {
        this.url.searchParams.append(column, `${operator}.${value}`);
        return this;
    }
};
//#endregion
//#region src/PostgrestQueryBuilder.ts
var PostgrestQueryBuilder = class {
    /**
	* Creates a query builder scoped to a Postgres table or view.
	*
	* @example
	* ```ts
	* import PostgrestQueryBuilder from '@supabase/postgrest-js'
	*
	* const query = new PostgrestQueryBuilder(
	*   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
	*   { headers: { apikey: 'public-anon-key' } }
	* )
	* ```
	*/ constructor(url, { headers = {}, schema, fetch: fetch$1, urlLengthLimit = 8e3 }){
        this.url = url;
        this.headers = new Headers(headers);
        this.schema = schema;
        this.fetch = fetch$1;
        this.urlLengthLimit = urlLengthLimit;
    }
    /**
	* Clone URL and headers to prevent shared state between operations.
	*/ cloneRequestState() {
        return {
            url: new URL(this.url.toString()),
            headers: new Headers(this.headers)
        };
    }
    /**
	* Perform a SELECT query on the table or view.
	*
	* @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
	*
	* @param options - Named parameters
	*
	* @param options.head - When set to `true`, `data` will not be returned.
	* Useful if you only need the count.
	*
	* @param options.count - Count algorithm to use to count rows in the table or view.
	*
	* `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
	* hood.
	*
	* `"planned"`: Approximated but fast count algorithm. Uses the Postgres
	* statistics under the hood.
	*
	* `"estimated"`: Uses exact count for low numbers and planned count for high
	* numbers.
	*
	* @remarks
	* When using `count` with `.range()` or `.limit()`, the returned `count` is the total number of rows
	* that match your filters, not the number of rows in the current page. Use this to build pagination UI.
	*/ select(columns, options) {
        const { head = false, count } = options !== null && options !== void 0 ? options : {};
        const method = head ? "HEAD" : "GET";
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map((c)=>{
            if (/\s/.test(c) && !quoted) return "";
            if (c === "\"") quoted = !quoted;
            return c;
        }).join("");
        const { url, headers } = this.cloneRequestState();
        url.searchParams.set("select", cleanedColumns);
        if (count) headers.append("Prefer", `count=${count}`);
        return new PostgrestFilterBuilder({
            method,
            url,
            headers,
            schema: this.schema,
            fetch: this.fetch,
            urlLengthLimit: this.urlLengthLimit
        });
    }
    /**
	* Perform an INSERT into the table or view.
	*
	* By default, inserted rows are not returned. To return it, chain the call
	* with `.select()`.
	*
	* @param values - The values to insert. Pass an object to insert a single row
	* or an array to insert multiple rows.
	*
	* @param options - Named parameters
	*
	* @param options.count - Count algorithm to use to count inserted rows.
	*
	* `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
	* hood.
	*
	* `"planned"`: Approximated but fast count algorithm. Uses the Postgres
	* statistics under the hood.
	*
	* `"estimated"`: Uses exact count for low numbers and planned count for high
	* numbers.
	*
	* @param options.defaultToNull - Make missing fields default to `null`.
	* Otherwise, use the default value for the column. Only applies for bulk
	* inserts.
	*/ insert(values, { count, defaultToNull = true } = {}) {
        var _this$fetch;
        const method = "POST";
        const { url, headers } = this.cloneRequestState();
        if (count) headers.append("Prefer", `count=${count}`);
        if (!defaultToNull) headers.append("Prefer", `missing=default`);
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                url.searchParams.set("columns", uniqueColumns.join(","));
            }
        }
        return new PostgrestFilterBuilder({
            method,
            url,
            headers,
            schema: this.schema,
            body: values,
            fetch: (_this$fetch = this.fetch) !== null && _this$fetch !== void 0 ? _this$fetch : fetch,
            urlLengthLimit: this.urlLengthLimit
        });
    }
    /**
	* Perform an UPSERT on the table or view. Depending on the column(s) passed
	* to `onConflict`, `.upsert()` allows you to perform the equivalent of
	* `.insert()` if a row with the corresponding `onConflict` columns doesn't
	* exist, or if it does exist, perform an alternative action depending on
	* `ignoreDuplicates`.
	*
	* By default, upserted rows are not returned. To return it, chain the call
	* with `.select()`.
	*
	* @param values - The values to upsert with. Pass an object to upsert a
	* single row or an array to upsert multiple rows.
	*
	* @param options - Named parameters
	*
	* @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
	* duplicate rows are determined. Two rows are duplicates if all the
	* `onConflict` columns are equal.
	*
	* @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
	* `false`, duplicate rows are merged with existing rows.
	*
	* @param options.count - Count algorithm to use to count upserted rows.
	*
	* `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
	* hood.
	*
	* `"planned"`: Approximated but fast count algorithm. Uses the Postgres
	* statistics under the hood.
	*
	* `"estimated"`: Uses exact count for low numbers and planned count for high
	* numbers.
	*
	* @param options.defaultToNull - Make missing fields default to `null`.
	* Otherwise, use the default value for the column. This only applies when
	* inserting new rows, not when merging with existing rows under
	* `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
	*
	* @example Upsert a single row using a unique key
	* ```ts
	* // Upserting a single row, overwriting based on the 'username' unique column
	* const { data, error } = await supabase
	*   .from('users')
	*   .upsert({ username: 'supabot' }, { onConflict: 'username' })
	*
	* // Example response:
	* // {
	* //   data: [
	* //     { id: 4, message: 'bar', username: 'supabot' }
	* //   ],
	* //   error: null
	* // }
	* ```
	*
	* @example Upsert with conflict resolution and exact row counting
	* ```ts
	* // Upserting and returning exact count
	* const { data, error, count } = await supabase
	*   .from('users')
	*   .upsert(
	*     {
	*       id: 3,
	*       message: 'foo',
	*       username: 'supabot'
	*     },
	*     {
	*       onConflict: 'username',
	*       count: 'exact'
	*     }
	*   )
	*
	* // Example response:
	* // {
	* //   data: [
	* //     {
	* //       id: 42,
	* //       handle: "saoirse",
	* //       display_name: "Saoirse"
	* //     }
	* //   ],
	* //   count: 1,
	* //   error: null
	* // }
	* ```
	*/ upsert(values, { onConflict, ignoreDuplicates = false, count, defaultToNull = true } = {}) {
        var _this$fetch2;
        const method = "POST";
        const { url, headers } = this.cloneRequestState();
        headers.append("Prefer", `resolution=${ignoreDuplicates ? "ignore" : "merge"}-duplicates`);
        if (onConflict !== void 0) url.searchParams.set("on_conflict", onConflict);
        if (count) headers.append("Prefer", `count=${count}`);
        if (!defaultToNull) headers.append("Prefer", "missing=default");
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                url.searchParams.set("columns", uniqueColumns.join(","));
            }
        }
        return new PostgrestFilterBuilder({
            method,
            url,
            headers,
            schema: this.schema,
            body: values,
            fetch: (_this$fetch2 = this.fetch) !== null && _this$fetch2 !== void 0 ? _this$fetch2 : fetch,
            urlLengthLimit: this.urlLengthLimit
        });
    }
    /**
	* Perform an UPDATE on the table or view.
	*
	* By default, updated rows are not returned. To return it, chain the call
	* with `.select()` after filters.
	*
	* @param values - The values to update with
	*
	* @param options - Named parameters
	*
	* @param options.count - Count algorithm to use to count updated rows.
	*
	* `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
	* hood.
	*
	* `"planned"`: Approximated but fast count algorithm. Uses the Postgres
	* statistics under the hood.
	*
	* `"estimated"`: Uses exact count for low numbers and planned count for high
	* numbers.
	*/ update(values, { count } = {}) {
        var _this$fetch3;
        const method = "PATCH";
        const { url, headers } = this.cloneRequestState();
        if (count) headers.append("Prefer", `count=${count}`);
        return new PostgrestFilterBuilder({
            method,
            url,
            headers,
            schema: this.schema,
            body: values,
            fetch: (_this$fetch3 = this.fetch) !== null && _this$fetch3 !== void 0 ? _this$fetch3 : fetch,
            urlLengthLimit: this.urlLengthLimit
        });
    }
    /**
	* Perform a DELETE on the table or view.
	*
	* By default, deleted rows are not returned. To return it, chain the call
	* with `.select()` after filters.
	*
	* @param options - Named parameters
	*
	* @param options.count - Count algorithm to use to count deleted rows.
	*
	* `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
	* hood.
	*
	* `"planned"`: Approximated but fast count algorithm. Uses the Postgres
	* statistics under the hood.
	*
	* `"estimated"`: Uses exact count for low numbers and planned count for high
	* numbers.
	*/ delete({ count } = {}) {
        var _this$fetch4;
        const method = "DELETE";
        const { url, headers } = this.cloneRequestState();
        if (count) headers.append("Prefer", `count=${count}`);
        return new PostgrestFilterBuilder({
            method,
            url,
            headers,
            schema: this.schema,
            fetch: (_this$fetch4 = this.fetch) !== null && _this$fetch4 !== void 0 ? _this$fetch4 : fetch,
            urlLengthLimit: this.urlLengthLimit
        });
    }
};
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/typeof.js
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
        return typeof o$1;
    } : function(o$1) {
        return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
    }, _typeof(o);
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/toPrimitive.js
function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/toPropertyKey.js
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/defineProperty.js
function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/objectSpread2.js
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r$1) {
            return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r$1) {
            _defineProperty(e, r$1, t[r$1]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
            Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
        });
    }
    return e;
}
//#endregion
//#region src/PostgrestClient.ts
/**
* PostgREST client.
*
* @typeParam Database - Types for the schema from the [type
* generator](https://supabase.com/docs/reference/javascript/next/typescript-support)
*
* @typeParam SchemaName - Postgres schema to switch to. Must be a string
* literal, the same one passed to the constructor. If the schema is not
* `"public"`, this must be supplied manually.
*/ var PostgrestClient = class PostgrestClient {
    /**
	* Creates a PostgREST client.
	*
	* @param url - URL of the PostgREST endpoint
	* @param options - Named parameters
	* @param options.headers - Custom headers
	* @param options.schema - Postgres schema to switch to
	* @param options.fetch - Custom fetch
	* @param options.timeout - Optional timeout in milliseconds for all requests. When set, requests will automatically abort after this duration to prevent indefinite hangs.
	* @param options.urlLengthLimit - Maximum URL length in characters before warnings/errors are triggered. Defaults to 8000.
	* @example
	* ```ts
	* import PostgrestClient from '@supabase/postgrest-js'
	*
	* const postgrest = new PostgrestClient('https://xyzcompany.supabase.co/rest/v1', {
	*   headers: { apikey: 'public-anon-key' },
	*   schema: 'public',
	*   timeout: 30000, // 30 second timeout
	* })
	* ```
	*/ constructor(url, { headers = {}, schema, fetch: fetch$1, timeout, urlLengthLimit = 8e3 } = {}){
        this.url = url;
        this.headers = new Headers(headers);
        this.schemaName = schema;
        this.urlLengthLimit = urlLengthLimit;
        const originalFetch = fetch$1 !== null && fetch$1 !== void 0 ? fetch$1 : globalThis.fetch;
        if (timeout !== void 0 && timeout > 0) this.fetch = (input, init)=>{
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), timeout);
            const existingSignal = init === null || init === void 0 ? void 0 : init.signal;
            if (existingSignal) {
                if (existingSignal.aborted) {
                    clearTimeout(timeoutId);
                    return originalFetch(input, init);
                }
                const abortHandler = ()=>{
                    clearTimeout(timeoutId);
                    controller.abort();
                };
                existingSignal.addEventListener("abort", abortHandler, {
                    once: true
                });
                return originalFetch(input, _objectSpread2(_objectSpread2({}, init), {}, {
                    signal: controller.signal
                })).finally(()=>{
                    clearTimeout(timeoutId);
                    existingSignal.removeEventListener("abort", abortHandler);
                });
            }
            return originalFetch(input, _objectSpread2(_objectSpread2({}, init), {}, {
                signal: controller.signal
            })).finally(()=>clearTimeout(timeoutId));
        };
        else this.fetch = originalFetch;
    }
    /**
	* Perform a query on a table or a view.
	*
	* @param relation - The table or view name to query
	*/ from(relation) {
        if (!relation || typeof relation !== "string" || relation.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
        return new PostgrestQueryBuilder(new URL(`${this.url}/${relation}`), {
            headers: new Headers(this.headers),
            schema: this.schemaName,
            fetch: this.fetch,
            urlLengthLimit: this.urlLengthLimit
        });
    }
    /**
	* Select a schema to query or perform an function (rpc) call.
	*
	* The schema needs to be on the list of exposed schemas inside Supabase.
	*
	* @param schema - The schema to query
	*/ schema(schema) {
        return new PostgrestClient(this.url, {
            headers: this.headers,
            schema,
            fetch: this.fetch,
            urlLengthLimit: this.urlLengthLimit
        });
    }
    /**
	* Perform a function call.
	*
	* @param fn - The function name to call
	* @param args - The arguments to pass to the function call
	* @param options - Named parameters
	* @param options.head - When set to `true`, `data` will not be returned.
	* Useful if you only need the count.
	* @param options.get - When set to `true`, the function will be called with
	* read-only access mode.
	* @param options.count - Count algorithm to use to count rows returned by the
	* function. Only applicable for [set-returning
	* functions](https://www.postgresql.org/docs/current/functions-srf.html).
	*
	* `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
	* hood.
	*
	* `"planned"`: Approximated but fast count algorithm. Uses the Postgres
	* statistics under the hood.
	*
	* `"estimated"`: Uses exact count for low numbers and planned count for high
	* numbers.
	*
	* @example
	* ```ts
	* // For cross-schema functions where type inference fails, use overrideTypes:
	* const { data } = await supabase
	*   .schema('schema_b')
	*   .rpc('function_a', {})
	*   .overrideTypes<{ id: string; user_id: string }[]>()
	* ```
	*/ rpc(fn, args = {}, { head = false, get = false, count } = {}) {
        var _this$fetch;
        let method;
        const url = new URL(`${this.url}/rpc/${fn}`);
        let body;
        const _isObject = (v)=>v !== null && typeof v === "object" && (!Array.isArray(v) || v.some(_isObject));
        const _hasObjectArg = head && Object.values(args).some(_isObject);
        if (_hasObjectArg) {
            method = "POST";
            body = args;
        } else if (head || get) {
            method = head ? "HEAD" : "GET";
            Object.entries(args).filter(([_, value])=>value !== void 0).map(([name, value])=>[
                    name,
                    Array.isArray(value) ? `{${value.join(",")}}` : `${value}`
                ]).forEach(([name, value])=>{
                url.searchParams.append(name, value);
            });
        } else {
            method = "POST";
            body = args;
        }
        const headers = new Headers(this.headers);
        if (_hasObjectArg) headers.set("Prefer", count ? `count=${count},return=minimal` : "return=minimal");
        else if (count) headers.set("Prefer", `count=${count}`);
        return new PostgrestFilterBuilder({
            method,
            url,
            headers,
            schema: this.schemaName,
            body,
            fetch: (_this$fetch = this.fetch) !== null && _this$fetch !== void 0 ? _this$fetch : fetch,
            urlLengthLimit: this.urlLengthLimit
        });
    }
};
//#endregion
//#region src/index.ts
var src_default = {
    PostgrestClient,
    PostgrestQueryBuilder,
    PostgrestFilterBuilder,
    PostgrestTransformBuilder,
    PostgrestBuilder,
    PostgrestError
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/websocket-factory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utilities for creating WebSocket instances across runtimes.
 */ __turbopack_context__.s([
    "WebSocketFactory",
    ()=>WebSocketFactory,
    "default",
    ()=>__TURBOPACK__default__export__
]);
class WebSocketFactory {
    /**
     * Static-only utility – prevent instantiation.
     */ constructor(){}
    static detectEnvironment() {
        var _a;
        if (typeof WebSocket !== 'undefined') {
            return {
                type: 'native',
                constructor: WebSocket
            };
        }
        if (typeof globalThis !== 'undefined' && typeof globalThis.WebSocket !== 'undefined') {
            return {
                type: 'native',
                constructor: globalThis.WebSocket
            };
        }
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket !== 'undefined') {
            return {
                type: 'native',
                constructor: /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket
            };
        }
        if (typeof globalThis !== 'undefined' && typeof globalThis.WebSocketPair !== 'undefined' && typeof globalThis.WebSocket === 'undefined') {
            return {
                type: 'cloudflare',
                error: 'Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.',
                workaround: 'Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.'
            };
        }
        if (typeof globalThis !== 'undefined' && globalThis.EdgeRuntime || typeof navigator !== 'undefined' && ((_a = navigator.userAgent) === null || _a === void 0 ? void 0 : _a.includes('Vercel-Edge'))) {
            return {
                type: 'unsupported',
                error: 'Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.',
                workaround: 'Use serverless functions or a different deployment target for WebSocket functionality.'
            };
        }
        // Use dynamic property access to avoid Next.js Edge Runtime static analysis warnings
        const _process = globalThis['process'];
        if (_process) {
            const processVersions = _process['versions'];
            if (processVersions && processVersions['node']) {
                // Remove 'v' prefix if present and parse the major version
                const versionString = processVersions['node'];
                const nodeVersion = parseInt(versionString.replace(/^v/, '').split('.')[0]);
                // Node.js 22+ should have native WebSocket
                if (nodeVersion >= 22) {
                    // Check if native WebSocket is available (should be in Node.js 22+)
                    if (typeof globalThis.WebSocket !== 'undefined') {
                        return {
                            type: 'native',
                            constructor: globalThis.WebSocket
                        };
                    }
                    // If not available, user needs to provide it
                    return {
                        type: 'unsupported',
                        error: `Node.js ${nodeVersion} detected but native WebSocket not found.`,
                        workaround: 'Provide a WebSocket implementation via the transport option.'
                    };
                }
                // Node.js < 22 doesn't have native WebSocket
                return {
                    type: 'unsupported',
                    error: `Node.js ${nodeVersion} detected without native WebSocket support.`,
                    workaround: 'For Node.js < 22, install "ws" package and provide it via the transport option:\n' + 'import ws from "ws"\n' + 'new RealtimeClient(url, { transport: ws })'
                };
            }
        }
        return {
            type: 'unsupported',
            error: 'Unknown JavaScript runtime without WebSocket support.',
            workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
        };
    }
    /**
     * Returns the best available WebSocket constructor for the current runtime.
     *
     * @example
     * ```ts
     * const WS = WebSocketFactory.getWebSocketConstructor()
     * const socket = new WS('wss://realtime.supabase.co/socket')
     * ```
     */ static getWebSocketConstructor() {
        const env = this.detectEnvironment();
        if (env.constructor) {
            return env.constructor;
        }
        let errorMessage = env.error || 'WebSocket not supported in this environment.';
        if (env.workaround) {
            errorMessage += `\n\nSuggested solution: ${env.workaround}`;
        }
        throw new Error(errorMessage);
    }
    /**
     * Creates a WebSocket using the detected constructor.
     *
     * @example
     * ```ts
     * const socket = WebSocketFactory.createWebSocket('wss://realtime.supabase.co/socket')
     * ```
     */ static createWebSocket(url, protocols) {
        const WS = this.getWebSocketConstructor();
        return new WS(url, protocols);
    }
    /**
     * Detects whether the runtime can establish WebSocket connections.
     *
     * @example
     * ```ts
     * if (!WebSocketFactory.isWebSocketSupported()) {
     *   console.warn('Falling back to long polling')
     * }
     * ```
     */ static isWebSocketSupported() {
        try {
            const env = this.detectEnvironment();
            return env.type === 'native' || env.type === 'ws';
        } catch (_a) {
            return false;
        }
    }
}
const __TURBOPACK__default__export__ = WebSocketFactory;
 //# sourceMappingURL=websocket-factory.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Generated automatically during releases by scripts/update-version-files.ts
// This file provides runtime access to the package version for:
// - HTTP request headers (e.g., X-Client-Info header for API requests)
// - Debugging and support (identifying which version is running)
// - Telemetry and logging (version reporting in errors/analytics)
// - Ensuring build artifacts match the published package version
__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '2.98.0'; //# sourceMappingURL=version.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHANNEL_EVENTS",
    ()=>CHANNEL_EVENTS,
    "CHANNEL_STATES",
    ()=>CHANNEL_STATES,
    "CONNECTION_STATE",
    ()=>CONNECTION_STATE,
    "DEFAULT_TIMEOUT",
    ()=>DEFAULT_TIMEOUT,
    "DEFAULT_VERSION",
    ()=>DEFAULT_VERSION,
    "DEFAULT_VSN",
    ()=>DEFAULT_VSN,
    "MAX_PUSH_BUFFER_SIZE",
    ()=>MAX_PUSH_BUFFER_SIZE,
    "SOCKET_STATES",
    ()=>SOCKET_STATES,
    "TRANSPORTS",
    ()=>TRANSPORTS,
    "VERSION",
    ()=>VERSION,
    "VSN_1_0_0",
    ()=>VSN_1_0_0,
    "VSN_2_0_0",
    ()=>VSN_2_0_0,
    "WS_CLOSE_NORMAL",
    ()=>WS_CLOSE_NORMAL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/version.js [app-client] (ecmascript)");
;
const DEFAULT_VERSION = `realtime-js/${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]}`;
const VSN_1_0_0 = '1.0.0';
const VSN_2_0_0 = '2.0.0';
const DEFAULT_VSN = VSN_2_0_0;
const VERSION = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"];
const DEFAULT_TIMEOUT = 10000;
const WS_CLOSE_NORMAL = 1000;
const MAX_PUSH_BUFFER_SIZE = 100;
var SOCKET_STATES;
(function(SOCKET_STATES) {
    SOCKET_STATES[SOCKET_STATES["connecting"] = 0] = "connecting";
    SOCKET_STATES[SOCKET_STATES["open"] = 1] = "open";
    SOCKET_STATES[SOCKET_STATES["closing"] = 2] = "closing";
    SOCKET_STATES[SOCKET_STATES["closed"] = 3] = "closed";
})(SOCKET_STATES || (SOCKET_STATES = {}));
var CHANNEL_STATES;
(function(CHANNEL_STATES) {
    CHANNEL_STATES["closed"] = "closed";
    CHANNEL_STATES["errored"] = "errored";
    CHANNEL_STATES["joined"] = "joined";
    CHANNEL_STATES["joining"] = "joining";
    CHANNEL_STATES["leaving"] = "leaving";
})(CHANNEL_STATES || (CHANNEL_STATES = {}));
var CHANNEL_EVENTS;
(function(CHANNEL_EVENTS) {
    CHANNEL_EVENTS["close"] = "phx_close";
    CHANNEL_EVENTS["error"] = "phx_error";
    CHANNEL_EVENTS["join"] = "phx_join";
    CHANNEL_EVENTS["reply"] = "phx_reply";
    CHANNEL_EVENTS["leave"] = "phx_leave";
    CHANNEL_EVENTS["access_token"] = "access_token";
})(CHANNEL_EVENTS || (CHANNEL_EVENTS = {}));
var TRANSPORTS;
(function(TRANSPORTS) {
    TRANSPORTS["websocket"] = "websocket";
})(TRANSPORTS || (TRANSPORTS = {}));
var CONNECTION_STATE;
(function(CONNECTION_STATE) {
    CONNECTION_STATE["Connecting"] = "connecting";
    CONNECTION_STATE["Open"] = "open";
    CONNECTION_STATE["Closing"] = "closing";
    CONNECTION_STATE["Closed"] = "closed";
})(CONNECTION_STATE || (CONNECTION_STATE = {})); //# sourceMappingURL=constants.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/serializer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Serializer
]);
class Serializer {
    constructor(allowedMetadataKeys){
        this.HEADER_LENGTH = 1;
        this.USER_BROADCAST_PUSH_META_LENGTH = 6;
        this.KINDS = {
            userBroadcastPush: 3,
            userBroadcast: 4
        };
        this.BINARY_ENCODING = 0;
        this.JSON_ENCODING = 1;
        this.BROADCAST_EVENT = 'broadcast';
        this.allowedMetadataKeys = [];
        this.allowedMetadataKeys = allowedMetadataKeys !== null && allowedMetadataKeys !== void 0 ? allowedMetadataKeys : [];
    }
    encode(msg, callback) {
        if (msg.event === this.BROADCAST_EVENT && !(msg.payload instanceof ArrayBuffer) && typeof msg.payload.event === 'string') {
            return callback(this._binaryEncodeUserBroadcastPush(msg));
        }
        let payload = [
            msg.join_ref,
            msg.ref,
            msg.topic,
            msg.event,
            msg.payload
        ];
        return callback(JSON.stringify(payload));
    }
    _binaryEncodeUserBroadcastPush(message) {
        var _a;
        if (this._isArrayBuffer((_a = message.payload) === null || _a === void 0 ? void 0 : _a.payload)) {
            return this._encodeBinaryUserBroadcastPush(message);
        } else {
            return this._encodeJsonUserBroadcastPush(message);
        }
    }
    _encodeBinaryUserBroadcastPush(message) {
        var _a, _b;
        const userPayload = (_b = (_a = message.payload) === null || _a === void 0 ? void 0 : _a.payload) !== null && _b !== void 0 ? _b : new ArrayBuffer(0);
        return this._encodeUserBroadcastPush(message, this.BINARY_ENCODING, userPayload);
    }
    _encodeJsonUserBroadcastPush(message) {
        var _a, _b;
        const userPayload = (_b = (_a = message.payload) === null || _a === void 0 ? void 0 : _a.payload) !== null && _b !== void 0 ? _b : {};
        const encoder = new TextEncoder();
        const encodedUserPayload = encoder.encode(JSON.stringify(userPayload)).buffer;
        return this._encodeUserBroadcastPush(message, this.JSON_ENCODING, encodedUserPayload);
    }
    _encodeUserBroadcastPush(message, encodingType, encodedPayload) {
        var _a, _b;
        const topic = message.topic;
        const ref = (_a = message.ref) !== null && _a !== void 0 ? _a : '';
        const joinRef = (_b = message.join_ref) !== null && _b !== void 0 ? _b : '';
        const userEvent = message.payload.event;
        // Filter metadata based on allowed keys
        const rest = this.allowedMetadataKeys ? this._pick(message.payload, this.allowedMetadataKeys) : {};
        const metadata = Object.keys(rest).length === 0 ? '' : JSON.stringify(rest);
        // Validate lengths don't exceed uint8 max value (255)
        if (joinRef.length > 255) {
            throw new Error(`joinRef length ${joinRef.length} exceeds maximum of 255`);
        }
        if (ref.length > 255) {
            throw new Error(`ref length ${ref.length} exceeds maximum of 255`);
        }
        if (topic.length > 255) {
            throw new Error(`topic length ${topic.length} exceeds maximum of 255`);
        }
        if (userEvent.length > 255) {
            throw new Error(`userEvent length ${userEvent.length} exceeds maximum of 255`);
        }
        if (metadata.length > 255) {
            throw new Error(`metadata length ${metadata.length} exceeds maximum of 255`);
        }
        const metaLength = this.USER_BROADCAST_PUSH_META_LENGTH + joinRef.length + ref.length + topic.length + userEvent.length + metadata.length;
        const header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
        let view = new DataView(header);
        let offset = 0;
        view.setUint8(offset++, this.KINDS.userBroadcastPush); // kind
        view.setUint8(offset++, joinRef.length);
        view.setUint8(offset++, ref.length);
        view.setUint8(offset++, topic.length);
        view.setUint8(offset++, userEvent.length);
        view.setUint8(offset++, metadata.length);
        view.setUint8(offset++, encodingType);
        Array.from(joinRef, (char)=>view.setUint8(offset++, char.charCodeAt(0)));
        Array.from(ref, (char)=>view.setUint8(offset++, char.charCodeAt(0)));
        Array.from(topic, (char)=>view.setUint8(offset++, char.charCodeAt(0)));
        Array.from(userEvent, (char)=>view.setUint8(offset++, char.charCodeAt(0)));
        Array.from(metadata, (char)=>view.setUint8(offset++, char.charCodeAt(0)));
        var combined = new Uint8Array(header.byteLength + encodedPayload.byteLength);
        combined.set(new Uint8Array(header), 0);
        combined.set(new Uint8Array(encodedPayload), header.byteLength);
        return combined.buffer;
    }
    decode(rawPayload, callback) {
        if (this._isArrayBuffer(rawPayload)) {
            let result = this._binaryDecode(rawPayload);
            return callback(result);
        }
        if (typeof rawPayload === 'string') {
            const jsonPayload = JSON.parse(rawPayload);
            const [join_ref, ref, topic, event, payload] = jsonPayload;
            return callback({
                join_ref,
                ref,
                topic,
                event,
                payload
            });
        }
        return callback({});
    }
    _binaryDecode(buffer) {
        const view = new DataView(buffer);
        const kind = view.getUint8(0);
        const decoder = new TextDecoder();
        switch(kind){
            case this.KINDS.userBroadcast:
                return this._decodeUserBroadcast(buffer, view, decoder);
        }
    }
    _decodeUserBroadcast(buffer, view, decoder) {
        const topicSize = view.getUint8(1);
        const userEventSize = view.getUint8(2);
        const metadataSize = view.getUint8(3);
        const payloadEncoding = view.getUint8(4);
        let offset = this.HEADER_LENGTH + 4;
        const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
        offset = offset + topicSize;
        const userEvent = decoder.decode(buffer.slice(offset, offset + userEventSize));
        offset = offset + userEventSize;
        const metadata = decoder.decode(buffer.slice(offset, offset + metadataSize));
        offset = offset + metadataSize;
        const payload = buffer.slice(offset, buffer.byteLength);
        const parsedPayload = payloadEncoding === this.JSON_ENCODING ? JSON.parse(decoder.decode(payload)) : payload;
        const data = {
            type: this.BROADCAST_EVENT,
            event: userEvent,
            payload: parsedPayload
        };
        // Metadata is optional and always JSON encoded
        if (metadataSize > 0) {
            data['meta'] = JSON.parse(metadata);
        }
        return {
            join_ref: null,
            ref: null,
            topic: topic,
            event: this.BROADCAST_EVENT,
            payload: data
        };
    }
    _isArrayBuffer(buffer) {
        var _a;
        return buffer instanceof ArrayBuffer || ((_a = buffer === null || buffer === void 0 ? void 0 : buffer.constructor) === null || _a === void 0 ? void 0 : _a.name) === 'ArrayBuffer';
    }
    _pick(obj, keys) {
        if (!obj || typeof obj !== 'object') {
            return {};
        }
        return Object.fromEntries(Object.entries(obj).filter(([key])=>keys.includes(key)));
    }
} //# sourceMappingURL=serializer.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/timer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates a timer that accepts a `timerCalc` function to perform calculated timeout retries, such as exponential backoff.
 *
 * @example
 *    let reconnectTimer = new Timer(() => this.connect(), function(tries){
 *      return [1000, 5000, 10000][tries - 1] || 10000
 *    })
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 *    reconnectTimer.scheduleTimeout() // fires after 5000
 *    reconnectTimer.reset()
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 */ __turbopack_context__.s([
    "default",
    ()=>Timer
]);
class Timer {
    constructor(callback, timerCalc){
        this.callback = callback;
        this.timerCalc = timerCalc;
        this.timer = undefined;
        this.tries = 0;
        this.callback = callback;
        this.timerCalc = timerCalc;
    }
    reset() {
        this.tries = 0;
        clearTimeout(this.timer);
        this.timer = undefined;
    }
    // Cancels any previous scheduleTimeout and schedules callback
    scheduleTimeout() {
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.tries = this.tries + 1;
            this.callback();
        }, this.timerCalc(this.tries + 1));
    }
} //# sourceMappingURL=timer.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/transformers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Helpers to convert the change Payload into native JS types.
 */ // Adapted from epgsql (src/epgsql_binary.erl), this module licensed under
// 3-clause BSD found here: https://raw.githubusercontent.com/epgsql/epgsql/devel/LICENSE
__turbopack_context__.s([
    "PostgresTypes",
    ()=>PostgresTypes,
    "convertCell",
    ()=>convertCell,
    "convertChangeData",
    ()=>convertChangeData,
    "convertColumn",
    ()=>convertColumn,
    "httpEndpointURL",
    ()=>httpEndpointURL,
    "toArray",
    ()=>toArray,
    "toBoolean",
    ()=>toBoolean,
    "toJson",
    ()=>toJson,
    "toNumber",
    ()=>toNumber,
    "toTimestampString",
    ()=>toTimestampString
]);
var PostgresTypes;
(function(PostgresTypes) {
    PostgresTypes["abstime"] = "abstime";
    PostgresTypes["bool"] = "bool";
    PostgresTypes["date"] = "date";
    PostgresTypes["daterange"] = "daterange";
    PostgresTypes["float4"] = "float4";
    PostgresTypes["float8"] = "float8";
    PostgresTypes["int2"] = "int2";
    PostgresTypes["int4"] = "int4";
    PostgresTypes["int4range"] = "int4range";
    PostgresTypes["int8"] = "int8";
    PostgresTypes["int8range"] = "int8range";
    PostgresTypes["json"] = "json";
    PostgresTypes["jsonb"] = "jsonb";
    PostgresTypes["money"] = "money";
    PostgresTypes["numeric"] = "numeric";
    PostgresTypes["oid"] = "oid";
    PostgresTypes["reltime"] = "reltime";
    PostgresTypes["text"] = "text";
    PostgresTypes["time"] = "time";
    PostgresTypes["timestamp"] = "timestamp";
    PostgresTypes["timestamptz"] = "timestamptz";
    PostgresTypes["timetz"] = "timetz";
    PostgresTypes["tsrange"] = "tsrange";
    PostgresTypes["tstzrange"] = "tstzrange";
})(PostgresTypes || (PostgresTypes = {}));
const convertChangeData = (columns, record, options = {})=>{
    var _a;
    const skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
    if (!record) {
        return {};
    }
    return Object.keys(record).reduce((acc, rec_key)=>{
        acc[rec_key] = convertColumn(rec_key, columns, record, skipTypes);
        return acc;
    }, {});
};
const convertColumn = (columnName, columns, record, skipTypes)=>{
    const column = columns.find((x)=>x.name === columnName);
    const colType = column === null || column === void 0 ? void 0 : column.type;
    const value = record[columnName];
    if (colType && !skipTypes.includes(colType)) {
        return convertCell(colType, value);
    }
    return noop(value);
};
const convertCell = (type, value)=>{
    // if data type is an array
    if (type.charAt(0) === '_') {
        const dataType = type.slice(1, type.length);
        return toArray(value, dataType);
    }
    // If not null, convert to correct type.
    switch(type){
        case PostgresTypes.bool:
            return toBoolean(value);
        case PostgresTypes.float4:
        case PostgresTypes.float8:
        case PostgresTypes.int2:
        case PostgresTypes.int4:
        case PostgresTypes.int8:
        case PostgresTypes.numeric:
        case PostgresTypes.oid:
            return toNumber(value);
        case PostgresTypes.json:
        case PostgresTypes.jsonb:
            return toJson(value);
        case PostgresTypes.timestamp:
            return toTimestampString(value); // Format to be consistent with PostgREST
        case PostgresTypes.abstime:
        case PostgresTypes.date:
        case PostgresTypes.daterange:
        case PostgresTypes.int4range:
        case PostgresTypes.int8range:
        case PostgresTypes.money:
        case PostgresTypes.reltime:
        case PostgresTypes.text:
        case PostgresTypes.time:
        case PostgresTypes.timestamptz:
        case PostgresTypes.timetz:
        case PostgresTypes.tsrange:
        case PostgresTypes.tstzrange:
            return noop(value);
        default:
            // Return the value for remaining types
            return noop(value);
    }
};
const noop = (value)=>{
    return value;
};
const toBoolean = (value)=>{
    switch(value){
        case 't':
            return true;
        case 'f':
            return false;
        default:
            return value;
    }
};
const toNumber = (value)=>{
    if (typeof value === 'string') {
        const parsedValue = parseFloat(value);
        if (!Number.isNaN(parsedValue)) {
            return parsedValue;
        }
    }
    return value;
};
const toJson = (value)=>{
    if (typeof value === 'string') {
        try {
            return JSON.parse(value);
        } catch (_a) {
            return value;
        }
    }
    return value;
};
const toArray = (value, type)=>{
    if (typeof value !== 'string') {
        return value;
    }
    const lastIdx = value.length - 1;
    const closeBrace = value[lastIdx];
    const openBrace = value[0];
    // Confirm value is a Postgres array by checking curly brackets
    if (openBrace === '{' && closeBrace === '}') {
        let arr;
        const valTrim = value.slice(1, lastIdx);
        // TODO: find a better solution to separate Postgres array data
        try {
            arr = JSON.parse('[' + valTrim + ']');
        } catch (_) {
            // WARNING: splitting on comma does not cover all edge cases
            arr = valTrim ? valTrim.split(',') : [];
        }
        return arr.map((val)=>convertCell(type, val));
    }
    return value;
};
const toTimestampString = (value)=>{
    if (typeof value === 'string') {
        return value.replace(' ', 'T');
    }
    return value;
};
const httpEndpointURL = (socketUrl)=>{
    const wsUrl = new URL(socketUrl);
    wsUrl.protocol = wsUrl.protocol.replace(/^ws/i, 'http');
    wsUrl.pathname = wsUrl.pathname.replace(/\/+$/, '') // remove all trailing slashes
    .replace(/\/socket\/websocket$/i, '') // remove the socket/websocket path
    .replace(/\/socket$/i, '') // remove the socket path
    .replace(/\/websocket$/i, ''); // remove the websocket path
    if (wsUrl.pathname === '' || wsUrl.pathname === '/') {
        wsUrl.pathname = '/api/broadcast';
    } else {
        wsUrl.pathname = wsUrl.pathname + '/api/broadcast';
    }
    return wsUrl.href;
}; //# sourceMappingURL=transformers.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/push.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Push
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/constants.js [app-client] (ecmascript)");
;
class Push {
    /**
     * Initializes the Push
     *
     * @param channel The Channel
     * @param event The event, for example `"phx_join"`
     * @param payload The payload, for example `{user_id: 123}`
     * @param timeout The push timeout in milliseconds
     */ constructor(channel, event, payload = {}, timeout = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TIMEOUT"]){
        this.channel = channel;
        this.event = event;
        this.payload = payload;
        this.timeout = timeout;
        this.sent = false;
        this.timeoutTimer = undefined;
        this.ref = '';
        this.receivedResp = null;
        this.recHooks = [];
        this.refEvent = null;
    }
    resend(timeout) {
        this.timeout = timeout;
        this._cancelRefEvent();
        this.ref = '';
        this.refEvent = null;
        this.receivedResp = null;
        this.sent = false;
        this.send();
    }
    send() {
        if (this._hasReceived('timeout')) {
            return;
        }
        this.startTimeout();
        this.sent = true;
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        });
    }
    updatePayload(payload) {
        this.payload = Object.assign(Object.assign({}, this.payload), payload);
    }
    receive(status, callback) {
        var _a;
        if (this._hasReceived(status)) {
            callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
        }
        this.recHooks.push({
            status,
            callback
        });
        return this;
    }
    startTimeout() {
        if (this.timeoutTimer) {
            return;
        }
        this.ref = this.channel.socket._makeRef();
        this.refEvent = this.channel._replyEventName(this.ref);
        const callback = (payload)=>{
            this._cancelRefEvent();
            this._cancelTimeout();
            this.receivedResp = payload;
            this._matchReceive(payload);
        };
        this.channel._on(this.refEvent, {}, callback);
        this.timeoutTimer = setTimeout(()=>{
            this.trigger('timeout', {});
        }, this.timeout);
    }
    trigger(status, response) {
        if (this.refEvent) this.channel._trigger(this.refEvent, {
            status,
            response
        });
    }
    destroy() {
        this._cancelRefEvent();
        this._cancelTimeout();
    }
    _cancelRefEvent() {
        if (!this.refEvent) {
            return;
        }
        this.channel._off(this.refEvent, {});
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer);
        this.timeoutTimer = undefined;
    }
    _matchReceive({ status, response }) {
        this.recHooks.filter((h)=>h.status === status).forEach((h)=>h.callback(response));
    }
    _hasReceived(status) {
        return this.receivedResp && this.receivedResp.status === status;
    }
} //# sourceMappingURL=push.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  This file draws heavily from https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/assets/js/phoenix/presence.js
  License: https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/LICENSE.md
*/ __turbopack_context__.s([
    "REALTIME_PRESENCE_LISTEN_EVENTS",
    ()=>REALTIME_PRESENCE_LISTEN_EVENTS,
    "default",
    ()=>RealtimePresence
]);
var REALTIME_PRESENCE_LISTEN_EVENTS;
(function(REALTIME_PRESENCE_LISTEN_EVENTS) {
    REALTIME_PRESENCE_LISTEN_EVENTS["SYNC"] = "sync";
    REALTIME_PRESENCE_LISTEN_EVENTS["JOIN"] = "join";
    REALTIME_PRESENCE_LISTEN_EVENTS["LEAVE"] = "leave";
})(REALTIME_PRESENCE_LISTEN_EVENTS || (REALTIME_PRESENCE_LISTEN_EVENTS = {}));
class RealtimePresence {
    /**
     * Creates a Presence helper that keeps the local presence state in sync with the server.
     *
     * @param channel - The realtime channel to bind to.
     * @param opts - Optional custom event names, e.g. `{ events: { state: 'state', diff: 'diff' } }`.
     *
     * @example
     * ```ts
     * const presence = new RealtimePresence(channel)
     *
     * channel.on('presence', ({ event, key }) => {
     *   console.log(`Presence ${event} on ${key}`)
     * })
     * ```
     */ constructor(channel, opts){
        this.channel = channel;
        this.state = {};
        this.pendingDiffs = [];
        this.joinRef = null;
        this.enabled = false;
        this.caller = {
            onJoin: ()=>{},
            onLeave: ()=>{},
            onSync: ()=>{}
        };
        const events = (opts === null || opts === void 0 ? void 0 : opts.events) || {
            state: 'presence_state',
            diff: 'presence_diff'
        };
        this.channel._on(events.state, {}, (newState)=>{
            const { onJoin, onLeave, onSync } = this.caller;
            this.joinRef = this.channel._joinRef();
            this.state = RealtimePresence.syncState(this.state, newState, onJoin, onLeave);
            this.pendingDiffs.forEach((diff)=>{
                this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
            });
            this.pendingDiffs = [];
            onSync();
        });
        this.channel._on(events.diff, {}, (diff)=>{
            const { onJoin, onLeave, onSync } = this.caller;
            if (this.inPendingSyncState()) {
                this.pendingDiffs.push(diff);
            } else {
                this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
                onSync();
            }
        });
        this.onJoin((key, currentPresences, newPresences)=>{
            this.channel._trigger('presence', {
                event: 'join',
                key,
                currentPresences,
                newPresences
            });
        });
        this.onLeave((key, currentPresences, leftPresences)=>{
            this.channel._trigger('presence', {
                event: 'leave',
                key,
                currentPresences,
                leftPresences
            });
        });
        this.onSync(()=>{
            this.channel._trigger('presence', {
                event: 'sync'
            });
        });
    }
    /**
     * Used to sync the list of presences on the server with the
     * client's state.
     *
     * An optional `onJoin` and `onLeave` callback can be provided to
     * react to changes in the client's local presences across
     * disconnects and reconnects with the server.
     *
     * @internal
     */ static syncState(currentState, newState, onJoin, onLeave) {
        const state = this.cloneDeep(currentState);
        const transformedState = this.transformState(newState);
        const joins = {};
        const leaves = {};
        this.map(state, (key, presences)=>{
            if (!transformedState[key]) {
                leaves[key] = presences;
            }
        });
        this.map(transformedState, (key, newPresences)=>{
            const currentPresences = state[key];
            if (currentPresences) {
                const newPresenceRefs = newPresences.map((m)=>m.presence_ref);
                const curPresenceRefs = currentPresences.map((m)=>m.presence_ref);
                const joinedPresences = newPresences.filter((m)=>curPresenceRefs.indexOf(m.presence_ref) < 0);
                const leftPresences = currentPresences.filter((m)=>newPresenceRefs.indexOf(m.presence_ref) < 0);
                if (joinedPresences.length > 0) {
                    joins[key] = joinedPresences;
                }
                if (leftPresences.length > 0) {
                    leaves[key] = leftPresences;
                }
            } else {
                joins[key] = newPresences;
            }
        });
        return this.syncDiff(state, {
            joins,
            leaves
        }, onJoin, onLeave);
    }
    /**
     * Used to sync a diff of presence join and leave events from the
     * server, as they happen.
     *
     * Like `syncState`, `syncDiff` accepts optional `onJoin` and
     * `onLeave` callbacks to react to a user joining or leaving from a
     * device.
     *
     * @internal
     */ static syncDiff(state, diff, onJoin, onLeave) {
        const { joins, leaves } = {
            joins: this.transformState(diff.joins),
            leaves: this.transformState(diff.leaves)
        };
        if (!onJoin) {
            onJoin = ()=>{};
        }
        if (!onLeave) {
            onLeave = ()=>{};
        }
        this.map(joins, (key, newPresences)=>{
            var _a;
            const currentPresences = (_a = state[key]) !== null && _a !== void 0 ? _a : [];
            state[key] = this.cloneDeep(newPresences);
            if (currentPresences.length > 0) {
                const joinedPresenceRefs = state[key].map((m)=>m.presence_ref);
                const curPresences = currentPresences.filter((m)=>joinedPresenceRefs.indexOf(m.presence_ref) < 0);
                state[key].unshift(...curPresences);
            }
            onJoin(key, currentPresences, newPresences);
        });
        this.map(leaves, (key, leftPresences)=>{
            let currentPresences = state[key];
            if (!currentPresences) return;
            const presenceRefsToRemove = leftPresences.map((m)=>m.presence_ref);
            currentPresences = currentPresences.filter((m)=>presenceRefsToRemove.indexOf(m.presence_ref) < 0);
            state[key] = currentPresences;
            onLeave(key, currentPresences, leftPresences);
            if (currentPresences.length === 0) delete state[key];
        });
        return state;
    }
    /** @internal */ static map(obj, func) {
        return Object.getOwnPropertyNames(obj).map((key)=>func(key, obj[key]));
    }
    /**
     * Remove 'metas' key
     * Change 'phx_ref' to 'presence_ref'
     * Remove 'phx_ref' and 'phx_ref_prev'
     *
     * @example
     * // returns {
     *  abc123: [
     *    { presence_ref: '2', user_id: 1 },
     *    { presence_ref: '3', user_id: 2 }
     *  ]
     * }
     * RealtimePresence.transformState({
     *  abc123: {
     *    metas: [
     *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
     *      { phx_ref: '3', user_id: 2 }
     *    ]
     *  }
     * })
     *
     * @internal
     */ static transformState(state) {
        state = this.cloneDeep(state);
        return Object.getOwnPropertyNames(state).reduce((newState, key)=>{
            const presences = state[key];
            if ('metas' in presences) {
                newState[key] = presences.metas.map((presence)=>{
                    presence['presence_ref'] = presence['phx_ref'];
                    delete presence['phx_ref'];
                    delete presence['phx_ref_prev'];
                    return presence;
                });
            } else {
                newState[key] = presences;
            }
            return newState;
        }, {});
    }
    /** @internal */ static cloneDeep(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    /** @internal */ onJoin(callback) {
        this.caller.onJoin = callback;
    }
    /** @internal */ onLeave(callback) {
        this.caller.onLeave = callback;
    }
    /** @internal */ onSync(callback) {
        this.caller.onSync = callback;
    }
    /** @internal */ inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef();
    }
} //# sourceMappingURL=RealtimePresence.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REALTIME_CHANNEL_STATES",
    ()=>REALTIME_CHANNEL_STATES,
    "REALTIME_LISTEN_TYPES",
    ()=>REALTIME_LISTEN_TYPES,
    "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT",
    ()=>REALTIME_POSTGRES_CHANGES_LISTEN_EVENT,
    "REALTIME_SUBSCRIBE_STATES",
    ()=>REALTIME_SUBSCRIBE_STATES,
    "default",
    ()=>RealtimeChannel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$push$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/push.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/timer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimePresence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/transformers.js [app-client] (ecmascript)");
;
;
;
;
;
;
var REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
(function(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT) {
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["ALL"] = "*";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["INSERT"] = "INSERT";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["UPDATE"] = "UPDATE";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["DELETE"] = "DELETE";
})(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT || (REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = {}));
var REALTIME_LISTEN_TYPES;
(function(REALTIME_LISTEN_TYPES) {
    REALTIME_LISTEN_TYPES["BROADCAST"] = "broadcast";
    REALTIME_LISTEN_TYPES["PRESENCE"] = "presence";
    REALTIME_LISTEN_TYPES["POSTGRES_CHANGES"] = "postgres_changes";
    REALTIME_LISTEN_TYPES["SYSTEM"] = "system";
})(REALTIME_LISTEN_TYPES || (REALTIME_LISTEN_TYPES = {}));
var REALTIME_SUBSCRIBE_STATES;
(function(REALTIME_SUBSCRIBE_STATES) {
    REALTIME_SUBSCRIBE_STATES["SUBSCRIBED"] = "SUBSCRIBED";
    REALTIME_SUBSCRIBE_STATES["TIMED_OUT"] = "TIMED_OUT";
    REALTIME_SUBSCRIBE_STATES["CLOSED"] = "CLOSED";
    REALTIME_SUBSCRIBE_STATES["CHANNEL_ERROR"] = "CHANNEL_ERROR";
})(REALTIME_SUBSCRIBE_STATES || (REALTIME_SUBSCRIBE_STATES = {}));
const REALTIME_CHANNEL_STATES = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"];
class RealtimeChannel {
    /**
     * Creates a channel that can broadcast messages, sync presence, and listen to Postgres changes.
     *
     * The topic determines which realtime stream you are subscribing to. Config options let you
     * enable acknowledgement for broadcasts, presence tracking, or private channels.
     *
     * @example
     * ```ts
     * import RealtimeClient from '@supabase/realtime-js'
     *
     * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
     *   params: { apikey: 'public-anon-key' },
     * })
     * const channel = new RealtimeChannel('realtime:public:messages', { config: {} }, client)
     * ```
     */ constructor(/** Topic name can be any string. */ topic, params = {
        config: {}
    }, socket){
        var _a, _b;
        this.topic = topic;
        this.params = params;
        this.socket = socket;
        this.bindings = {};
        this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].closed;
        this.joinedOnce = false;
        this.pushBuffer = [];
        this.subTopic = topic.replace(/^realtime:/i, '');
        this.params.config = Object.assign({
            broadcast: {
                ack: false,
                self: false
            },
            presence: {
                key: '',
                enabled: false
            },
            private: false
        }, params.config);
        this.timeout = this.socket.timeout;
        this.joinPush = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$push$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].join, this.params, this.timeout);
        this.rejoinTimer = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](()=>this._rejoinUntilConnected(), this.socket.reconnectAfterMs);
        this.joinPush.receive('ok', ()=>{
            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].joined;
            this.rejoinTimer.reset();
            this.pushBuffer.forEach((pushEvent)=>pushEvent.send());
            this.pushBuffer = [];
        });
        this._onClose(()=>{
            this.rejoinTimer.reset();
            this.socket.log('channel', `close ${this.topic} ${this._joinRef()}`);
            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].closed;
            this.socket._remove(this);
        });
        this._onError((reason)=>{
            if (this._isLeaving() || this._isClosed()) {
                return;
            }
            this.socket.log('channel', `error ${this.topic}`, reason);
            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive('timeout', ()=>{
            if (!this._isJoining()) {
                return;
            }
            this.socket.log('channel', `timeout ${this.topic}`, this.joinPush.timeout);
            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive('error', (reason)=>{
            if (this._isLeaving() || this._isClosed()) {
                return;
            }
            this.socket.log('channel', `error ${this.topic}`, reason);
            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this._on(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].reply, {}, (payload, ref)=>{
            this._trigger(this._replyEventName(ref), payload);
        });
        this.presence = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimePresence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this);
        this.broadcastEndpointURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["httpEndpointURL"])(this.socket.endPoint);
        this.private = this.params.config.private || false;
        if (!this.private && ((_b = (_a = this.params.config) === null || _a === void 0 ? void 0 : _a.broadcast) === null || _b === void 0 ? void 0 : _b.replay)) {
            throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
        }
    }
    /** Subscribe registers your client with the server */ subscribe(callback, timeout = this.timeout) {
        var _a, _b, _c;
        if (!this.socket.isConnected()) {
            this.socket.connect();
        }
        if (this.state == __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].closed) {
            const { config: { broadcast, presence, private: isPrivate } } = this.params;
            const postgres_changes = (_b = (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.map((r)=>r.filter)) !== null && _b !== void 0 ? _b : [];
            const presence_enabled = !!this.bindings[REALTIME_LISTEN_TYPES.PRESENCE] && this.bindings[REALTIME_LISTEN_TYPES.PRESENCE].length > 0 || ((_c = this.params.config.presence) === null || _c === void 0 ? void 0 : _c.enabled) === true;
            const accessTokenPayload = {};
            const config = {
                broadcast,
                presence: Object.assign(Object.assign({}, presence), {
                    enabled: presence_enabled
                }),
                postgres_changes,
                private: isPrivate
            };
            if (this.socket.accessTokenValue) {
                accessTokenPayload.access_token = this.socket.accessTokenValue;
            }
            this._onError((e)=>callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, e));
            this._onClose(()=>callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CLOSED));
            this.updateJoinPayload(Object.assign({
                config
            }, accessTokenPayload));
            this.joinedOnce = true;
            this._rejoin(timeout);
            this.joinPush.receive('ok', async ({ postgres_changes })=>{
                var _a;
                // Only refresh auth if using callback-based tokens
                if (!this.socket._isManualToken()) {
                    this.socket.setAuth();
                }
                if (postgres_changes === undefined) {
                    callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
                    return;
                } else {
                    const clientPostgresBindings = this.bindings.postgres_changes;
                    const bindingsLen = (_a = clientPostgresBindings === null || clientPostgresBindings === void 0 ? void 0 : clientPostgresBindings.length) !== null && _a !== void 0 ? _a : 0;
                    const newPostgresBindings = [];
                    for(let i = 0; i < bindingsLen; i++){
                        const clientPostgresBinding = clientPostgresBindings[i];
                        const { filter: { event, schema, table, filter } } = clientPostgresBinding;
                        const serverPostgresFilter = postgres_changes && postgres_changes[i];
                        if (serverPostgresFilter && serverPostgresFilter.event === event && RealtimeChannel.isFilterValueEqual(serverPostgresFilter.schema, schema) && RealtimeChannel.isFilterValueEqual(serverPostgresFilter.table, table) && RealtimeChannel.isFilterValueEqual(serverPostgresFilter.filter, filter)) {
                            newPostgresBindings.push(Object.assign(Object.assign({}, clientPostgresBinding), {
                                id: serverPostgresFilter.id
                            }));
                        } else {
                            this.unsubscribe();
                            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].errored;
                            callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, new Error('mismatch between server and client bindings for postgres changes'));
                            return;
                        }
                    }
                    this.bindings.postgres_changes = newPostgresBindings;
                    callback && callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
                    return;
                }
            }).receive('error', (error)=>{
                this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].errored;
                callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(error).join(', ') || 'error')));
                return;
            }).receive('timeout', ()=>{
                callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.TIMED_OUT);
                return;
            });
        }
        return this;
    }
    /**
     * Returns the current presence state for this channel.
     *
     * The shape is a map keyed by presence key (for example a user id) where each entry contains the
     * tracked metadata for that user.
     */ presenceState() {
        return this.presence.state;
    }
    /**
     * Sends the supplied payload to the presence tracker so other subscribers can see that this
     * client is online. Use `untrack` to stop broadcasting presence for the same key.
     */ async track(payload, opts = {}) {
        return await this.send({
            type: 'presence',
            event: 'track',
            payload
        }, opts.timeout || this.timeout);
    }
    /**
     * Removes the current presence state for this client.
     */ async untrack(opts = {}) {
        return await this.send({
            type: 'presence',
            event: 'untrack'
        }, opts);
    }
    on(type, filter, callback) {
        if (this.state === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].joined && type === REALTIME_LISTEN_TYPES.PRESENCE) {
            this.socket.log('channel', `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`);
            this.unsubscribe().then(async ()=>await this.subscribe());
        }
        return this._on(type, filter, callback);
    }
    /**
     * Sends a broadcast message explicitly via REST API.
     *
     * This method always uses the REST API endpoint regardless of WebSocket connection state.
     * Useful when you want to guarantee REST delivery or when gradually migrating from implicit REST fallback.
     *
     * @param event The name of the broadcast event
     * @param payload Payload to be sent (required)
     * @param opts Options including timeout
     * @returns Promise resolving to object with success status, and error details if failed
     */ async httpSend(event, payload, opts = {}) {
        var _a;
        if (payload === undefined || payload === null) {
            return Promise.reject('Payload is required for httpSend()');
        }
        const headers = {
            apikey: this.socket.apiKey ? this.socket.apiKey : '',
            'Content-Type': 'application/json'
        };
        if (this.socket.accessTokenValue) {
            headers['Authorization'] = `Bearer ${this.socket.accessTokenValue}`;
        }
        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify({
                messages: [
                    {
                        topic: this.subTopic,
                        event,
                        payload: payload,
                        private: this.private
                    }
                ]
            })
        };
        const response = await this._fetchWithTimeout(this.broadcastEndpointURL, options, (_a = opts.timeout) !== null && _a !== void 0 ? _a : this.timeout);
        if (response.status === 202) {
            return {
                success: true
            };
        }
        let errorMessage = response.statusText;
        try {
            const errorBody = await response.json();
            errorMessage = errorBody.error || errorBody.message || errorMessage;
        } catch (_b) {}
        return Promise.reject(new Error(errorMessage));
    }
    /**
     * Sends a message into the channel.
     *
     * @param args Arguments to send to channel
     * @param args.type The type of event to send
     * @param args.event The name of the event being sent
     * @param args.payload Payload to be sent
     * @param opts Options to be used during the send process
     */ async send(args, opts = {}) {
        var _a, _b;
        if (!this._canPush() && args.type === 'broadcast') {
            console.warn('Realtime send() is automatically falling back to REST API. ' + 'This behavior will be deprecated in the future. ' + 'Please use httpSend() explicitly for REST delivery.');
            const { event, payload: endpoint_payload } = args;
            const headers = {
                apikey: this.socket.apiKey ? this.socket.apiKey : '',
                'Content-Type': 'application/json'
            };
            if (this.socket.accessTokenValue) {
                headers['Authorization'] = `Bearer ${this.socket.accessTokenValue}`;
            }
            const options = {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    messages: [
                        {
                            topic: this.subTopic,
                            event,
                            payload: endpoint_payload,
                            private: this.private
                        }
                    ]
                })
            };
            try {
                const response = await this._fetchWithTimeout(this.broadcastEndpointURL, options, (_a = opts.timeout) !== null && _a !== void 0 ? _a : this.timeout);
                await ((_b = response.body) === null || _b === void 0 ? void 0 : _b.cancel());
                return response.ok ? 'ok' : 'error';
            } catch (error) {
                if (error.name === 'AbortError') {
                    return 'timed out';
                } else {
                    return 'error';
                }
            }
        } else {
            return new Promise((resolve)=>{
                var _a, _b, _c;
                const push = this._push(args.type, args, opts.timeout || this.timeout);
                if (args.type === 'broadcast' && !((_c = (_b = (_a = this.params) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.broadcast) === null || _c === void 0 ? void 0 : _c.ack)) {
                    resolve('ok');
                }
                push.receive('ok', ()=>resolve('ok'));
                push.receive('error', ()=>resolve('error'));
                push.receive('timeout', ()=>resolve('timed out'));
            });
        }
    }
    /**
     * Updates the payload that will be sent the next time the channel joins (reconnects).
     * Useful for rotating access tokens or updating config without re-creating the channel.
     */ updateJoinPayload(payload) {
        this.joinPush.updatePayload(payload);
    }
    /**
     * Leaves the channel.
     *
     * Unsubscribes from server events, and instructs channel to terminate on server.
     * Triggers onClose() hooks.
     *
     * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
     * channel.unsubscribe().receive("ok", () => alert("left!") )
     */ unsubscribe(timeout = this.timeout) {
        this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].leaving;
        const onClose = ()=>{
            this.socket.log('channel', `leave ${this.topic}`);
            this._trigger(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].close, 'leave', this._joinRef());
        };
        this.joinPush.destroy();
        let leavePush = null;
        return new Promise((resolve)=>{
            leavePush = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$push$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].leave, {}, timeout);
            leavePush.receive('ok', ()=>{
                onClose();
                resolve('ok');
            }).receive('timeout', ()=>{
                onClose();
                resolve('timed out');
            }).receive('error', ()=>{
                resolve('error');
            });
            leavePush.send();
            if (!this._canPush()) {
                leavePush.trigger('ok', {});
            }
        }).finally(()=>{
            leavePush === null || leavePush === void 0 ? void 0 : leavePush.destroy();
        });
    }
    /**
     * Teardown the channel.
     *
     * Destroys and stops related timers.
     */ teardown() {
        this.pushBuffer.forEach((push)=>push.destroy());
        this.pushBuffer = [];
        this.rejoinTimer.reset();
        this.joinPush.destroy();
        this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].closed;
        this.bindings = {};
    }
    /** @internal */ async _fetchWithTimeout(url, options, timeout) {
        const controller = new AbortController();
        const id = setTimeout(()=>controller.abort(), timeout);
        const response = await this.socket.fetch(url, Object.assign(Object.assign({}, options), {
            signal: controller.signal
        }));
        clearTimeout(id);
        return response;
    }
    /** @internal */ _push(event, payload, timeout = this.timeout) {
        if (!this.joinedOnce) {
            throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        }
        let pushEvent = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$push$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this, event, payload, timeout);
        if (this._canPush()) {
            pushEvent.send();
        } else {
            this._addToPushBuffer(pushEvent);
        }
        return pushEvent;
    }
    /** @internal */ _addToPushBuffer(pushEvent) {
        pushEvent.startTimeout();
        this.pushBuffer.push(pushEvent);
        // Enforce buffer size limit
        if (this.pushBuffer.length > __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PUSH_BUFFER_SIZE"]) {
            const removedPush = this.pushBuffer.shift();
            if (removedPush) {
                removedPush.destroy();
                this.socket.log('channel', `discarded push due to buffer overflow: ${removedPush.event}`, removedPush.payload);
            }
        }
    }
    /**
     * Overridable message hook
     *
     * Receives all events for specialized message handling before dispatching to the channel callbacks.
     * Must return the payload, modified or unmodified.
     *
     * @internal
     */ _onMessage(_event, payload, _ref) {
        return payload;
    }
    /** @internal */ _isMember(topic) {
        return this.topic === topic;
    }
    /** @internal */ _joinRef() {
        return this.joinPush.ref;
    }
    /** @internal */ _trigger(type, payload, ref) {
        var _a, _b;
        const typeLower = type.toLocaleLowerCase();
        const { close, error, leave, join } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"];
        const events = [
            close,
            error,
            leave,
            join
        ];
        if (ref && events.indexOf(typeLower) >= 0 && ref !== this._joinRef()) {
            return;
        }
        let handledPayload = this._onMessage(typeLower, payload, ref);
        if (payload && !handledPayload) {
            throw 'channel onMessage callbacks must return the payload, modified or unmodified';
        }
        if ([
            'insert',
            'update',
            'delete'
        ].includes(typeLower)) {
            (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.filter((bind)=>{
                var _a, _b, _c;
                return ((_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event) === '*' || ((_c = (_b = bind.filter) === null || _b === void 0 ? void 0 : _b.event) === null || _c === void 0 ? void 0 : _c.toLocaleLowerCase()) === typeLower;
            }).map((bind)=>bind.callback(handledPayload, ref));
        } else {
            (_b = this.bindings[typeLower]) === null || _b === void 0 ? void 0 : _b.filter((bind)=>{
                var _a, _b, _c, _d, _e, _f;
                if ([
                    'broadcast',
                    'presence',
                    'postgres_changes'
                ].includes(typeLower)) {
                    if ('id' in bind) {
                        const bindId = bind.id;
                        const bindEvent = (_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event;
                        return bindId && ((_b = payload.ids) === null || _b === void 0 ? void 0 : _b.includes(bindId)) && (bindEvent === '*' || (bindEvent === null || bindEvent === void 0 ? void 0 : bindEvent.toLocaleLowerCase()) === ((_c = payload.data) === null || _c === void 0 ? void 0 : _c.type.toLocaleLowerCase()));
                    } else {
                        const bindEvent = (_e = (_d = bind === null || bind === void 0 ? void 0 : bind.filter) === null || _d === void 0 ? void 0 : _d.event) === null || _e === void 0 ? void 0 : _e.toLocaleLowerCase();
                        return bindEvent === '*' || bindEvent === ((_f = payload === null || payload === void 0 ? void 0 : payload.event) === null || _f === void 0 ? void 0 : _f.toLocaleLowerCase());
                    }
                } else {
                    return bind.type.toLocaleLowerCase() === typeLower;
                }
            }).map((bind)=>{
                if (typeof handledPayload === 'object' && 'ids' in handledPayload) {
                    const postgresChanges = handledPayload.data;
                    const { schema, table, commit_timestamp, type, errors } = postgresChanges;
                    const enrichedPayload = {
                        schema: schema,
                        table: table,
                        commit_timestamp: commit_timestamp,
                        eventType: type,
                        new: {},
                        old: {},
                        errors: errors
                    };
                    handledPayload = Object.assign(Object.assign({}, enrichedPayload), this._getPayloadRecords(postgresChanges));
                }
                bind.callback(handledPayload, ref);
            });
        }
    }
    /** @internal */ _isClosed() {
        return this.state === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].closed;
    }
    /** @internal */ _isJoined() {
        return this.state === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].joined;
    }
    /** @internal */ _isJoining() {
        return this.state === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].joining;
    }
    /** @internal */ _isLeaving() {
        return this.state === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].leaving;
    }
    /** @internal */ _replyEventName(ref) {
        return `chan_reply_${ref}`;
    }
    /** @internal */ _on(type, filter, callback) {
        const typeLower = type.toLocaleLowerCase();
        const binding = {
            type: typeLower,
            filter: filter,
            callback: callback
        };
        if (this.bindings[typeLower]) {
            this.bindings[typeLower].push(binding);
        } else {
            this.bindings[typeLower] = [
                binding
            ];
        }
        return this;
    }
    /** @internal */ _off(type, filter) {
        const typeLower = type.toLocaleLowerCase();
        if (this.bindings[typeLower]) {
            this.bindings[typeLower] = this.bindings[typeLower].filter((bind)=>{
                var _a;
                return !(((_a = bind.type) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === typeLower && RealtimeChannel.isEqual(bind.filter, filter));
            });
        }
        return this;
    }
    /** @internal */ static isEqual(obj1, obj2) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for(const k in obj1){
            if (obj1[k] !== obj2[k]) {
                return false;
            }
        }
        return true;
    }
    /**
     * Compares two optional filter values for equality.
     * Treats undefined, null, and empty string as equivalent empty values.
     * @internal
     */ static isFilterValueEqual(serverValue, clientValue) {
        const normalizedServer = serverValue !== null && serverValue !== void 0 ? serverValue : undefined;
        const normalizedClient = clientValue !== null && clientValue !== void 0 ? clientValue : undefined;
        return normalizedServer === normalizedClient;
    }
    /** @internal */ _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout();
        if (this.socket.isConnected()) {
            this._rejoin();
        }
    }
    /**
     * Registers a callback that will be executed when the channel closes.
     *
     * @internal
     */ _onClose(callback) {
        this._on(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].close, {}, callback);
    }
    /**
     * Registers a callback that will be executed when the channel encounteres an error.
     *
     * @internal
     */ _onError(callback) {
        this._on(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].error, {}, (reason)=>callback(reason));
    }
    /**
     * Returns `true` if the socket is connected and the channel has been joined.
     *
     * @internal
     */ _canPush() {
        return this.socket.isConnected() && this._isJoined();
    }
    /** @internal */ _rejoin(timeout = this.timeout) {
        if (this._isLeaving()) {
            return;
        }
        this.socket._leaveOpenTopic(this.topic);
        this.state = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].joining;
        this.joinPush.resend(timeout);
    }
    /** @internal */ _getPayloadRecords(payload) {
        const records = {
            new: {},
            old: {}
        };
        if (payload.type === 'INSERT' || payload.type === 'UPDATE') {
            records.new = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertChangeData"](payload.columns, payload.record);
        }
        if (payload.type === 'UPDATE' || payload.type === 'DELETE') {
            records.old = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertChangeData"](payload.columns, payload.old_record);
        }
        return records;
    }
} //# sourceMappingURL=RealtimeChannel.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RealtimeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$websocket$2d$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/websocket-factory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/serializer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/timer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/transformers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js [app-client] (ecmascript)");
;
;
;
;
;
;
const noop = ()=>{};
// Connection-related constants
const CONNECTION_TIMEOUTS = {
    HEARTBEAT_INTERVAL: 25000,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100
};
const RECONNECT_INTERVALS = [
    1000,
    2000,
    5000,
    10000
];
const DEFAULT_RECONNECT_FALLBACK = 10000;
const WORKER_SCRIPT = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class RealtimeClient {
    /**
     * Initializes the Socket.
     *
     * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
     * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
     * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
     * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
     * @param options.params The optional params to pass when connecting.
     * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
     * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
     * @param options.heartbeatCallback The optional function to handle heartbeat status and latency.
     * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
     * @param options.logLevel Sets the log level for Realtime
     * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
     * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
     * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
     * @param options.worker Use Web Worker to set a side flow. Defaults to false.
     * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
     * @param options.vsn The protocol version to use when connecting. Supported versions are "1.0.0" and "2.0.0". Defaults to "2.0.0".
     * @example
     * ```ts
     * import RealtimeClient from '@supabase/realtime-js'
     *
     * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
     *   params: { apikey: 'public-anon-key' },
     * })
     * client.connect()
     * ```
     */ constructor(endPoint, options){
        var _a;
        this.accessTokenValue = null;
        this.apiKey = null;
        this._manuallySetToken = false;
        this.channels = new Array();
        this.endPoint = '';
        this.httpEndpoint = '';
        /** @deprecated headers cannot be set on websocket connections */ this.headers = {};
        this.params = {};
        this.timeout = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TIMEOUT"];
        this.transport = null;
        this.heartbeatIntervalMs = CONNECTION_TIMEOUTS.HEARTBEAT_INTERVAL;
        this.heartbeatTimer = undefined;
        this.pendingHeartbeatRef = null;
        this.heartbeatCallback = noop;
        this.ref = 0;
        this.reconnectTimer = null;
        this.vsn = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_VSN"];
        this.logger = noop;
        this.conn = null;
        this.sendBuffer = [];
        this.serializer = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        };
        this.accessToken = null;
        this._connectionState = 'disconnected';
        this._wasManualDisconnect = false;
        this._authPromise = null;
        this._heartbeatSentAt = null;
        /**
         * Use either custom fetch, if provided, or default fetch to make HTTP requests
         *
         * @internal
         */ this._resolveFetch = (customFetch)=>{
            if (customFetch) {
                return (...args)=>customFetch(...args);
            }
            return (...args)=>fetch(...args);
        };
        // Validate required parameters
        if (!((_a = options === null || options === void 0 ? void 0 : options.params) === null || _a === void 0 ? void 0 : _a.apikey)) {
            throw new Error('API key is required to connect to Realtime');
        }
        this.apiKey = options.params.apikey;
        // Initialize endpoint URLs
        this.endPoint = `${endPoint}/${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSPORTS"].websocket}`;
        this.httpEndpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["httpEndpointURL"])(endPoint);
        this._initializeOptions(options);
        this._setupReconnectionTimer();
        this.fetch = this._resolveFetch(options === null || options === void 0 ? void 0 : options.fetch);
    }
    /**
     * Connects the socket, unless already connected.
     */ connect() {
        // Skip if already connecting, disconnecting, or connected
        if (this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected()) {
            return;
        }
        this._setConnectionState('connecting');
        // Trigger auth if needed and not already in progress
        // This ensures auth is called for standalone RealtimeClient usage
        // while avoiding race conditions with SupabaseClient's immediate setAuth call
        if (this.accessToken && !this._authPromise) {
            this._setAuthSafely('connect');
        }
        // Establish WebSocket connection
        if (this.transport) {
            // Use custom transport if provided
            this.conn = new this.transport(this.endpointURL());
        } else {
            // Try to use native WebSocket
            try {
                this.conn = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$websocket$2d$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createWebSocket(this.endpointURL());
            } catch (error) {
                this._setConnectionState('disconnected');
                const errorMessage = error.message;
                // Provide helpful error message based on environment
                if (errorMessage.includes('Node.js')) {
                    throw new Error(`${errorMessage}\n\n` + 'To use Realtime in Node.js, you need to provide a WebSocket implementation:\n\n' + 'Option 1: Use Node.js 22+ which has native WebSocket support\n' + 'Option 2: Install and provide the "ws" package:\n\n' + '  npm install ws\n\n' + '  import ws from "ws"\n' + '  const client = new RealtimeClient(url, {\n' + '    ...options,\n' + '    transport: ws\n' + '  })');
                }
                throw new Error(`WebSocket not available: ${errorMessage}`);
            }
        }
        this._setupConnectionHandlers();
    }
    /**
     * Returns the URL of the websocket.
     * @returns string The URL of the websocket.
     */ endpointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: this.vsn
        }));
    }
    /**
     * Disconnects the socket.
     *
     * @param code A numeric status code to send on disconnect.
     * @param reason A custom reason for the disconnect.
     */ disconnect(code, reason) {
        if (this.isDisconnecting()) {
            return;
        }
        this._setConnectionState('disconnecting', true);
        if (this.conn) {
            // Setup fallback timer to prevent hanging in disconnecting state
            const fallbackTimer = setTimeout(()=>{
                this._setConnectionState('disconnected');
            }, 100);
            this.conn.onclose = ()=>{
                clearTimeout(fallbackTimer);
                this._setConnectionState('disconnected');
            };
            // Close the WebSocket connection if close method exists
            if (typeof this.conn.close === 'function') {
                if (code) {
                    this.conn.close(code, reason !== null && reason !== void 0 ? reason : '');
                } else {
                    this.conn.close();
                }
            }
            this._teardownConnection();
        } else {
            this._setConnectionState('disconnected');
        }
    }
    /**
     * Returns all created channels
     */ getChannels() {
        return this.channels;
    }
    /**
     * Unsubscribes and removes a single channel
     * @param channel A RealtimeChannel instance
     */ async removeChannel(channel) {
        const status = await channel.unsubscribe();
        if (this.channels.length === 0) {
            this.disconnect();
        }
        return status;
    }
    /**
     * Unsubscribes and removes all channels
     */ async removeAllChannels() {
        const values_1 = await Promise.all(this.channels.map((channel)=>channel.unsubscribe()));
        this.channels = [];
        this.disconnect();
        return values_1;
    }
    /**
     * Logs the message.
     *
     * For customized logging, `this.logger` can be overridden.
     */ log(kind, msg, data) {
        this.logger(kind, msg, data);
    }
    /**
     * Returns the current state of the socket.
     */ connectionState() {
        switch(this.conn && this.conn.readyState){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCKET_STATES"].connecting:
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONNECTION_STATE"].Connecting;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCKET_STATES"].open:
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONNECTION_STATE"].Open;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCKET_STATES"].closing:
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONNECTION_STATE"].Closing;
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONNECTION_STATE"].Closed;
        }
    }
    /**
     * Returns `true` is the connection is open.
     */ isConnected() {
        return this.connectionState() === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONNECTION_STATE"].Open;
    }
    /**
     * Returns `true` if the connection is currently connecting.
     */ isConnecting() {
        return this._connectionState === 'connecting';
    }
    /**
     * Returns `true` if the connection is currently disconnecting.
     */ isDisconnecting() {
        return this._connectionState === 'disconnecting';
    }
    /**
     * Creates (or reuses) a {@link RealtimeChannel} for the provided topic.
     *
     * Topics are automatically prefixed with `realtime:` to match the Realtime service.
     * If a channel with the same topic already exists it will be returned instead of creating
     * a duplicate connection.
     */ channel(topic, params = {
        config: {}
    }) {
        const realtimeTopic = `realtime:${topic}`;
        const exists = this.getChannels().find((c)=>c.topic === realtimeTopic);
        if (!exists) {
            const chan = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](`realtime:${topic}`, params, this);
            this.channels.push(chan);
            return chan;
        } else {
            return exists;
        }
    }
    /**
     * Push out a message if the socket is connected.
     *
     * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
     */ push(data) {
        const { topic, event, payload, ref } = data;
        const callback = ()=>{
            this.encode(data, (result)=>{
                var _a;
                (_a = this.conn) === null || _a === void 0 ? void 0 : _a.send(result);
            });
        };
        this.log('push', `${topic} ${event} (${ref})`, payload);
        if (this.isConnected()) {
            callback();
        } else {
            this.sendBuffer.push(callback);
        }
    }
    /**
     * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
     *
     * If param is null it will use the `accessToken` callback function or the token set on the client.
     *
     * On callback used, it will set the value of the token internal to the client.
     *
     * When a token is explicitly provided, it will be preserved across channel operations
     * (including removeChannel and resubscribe). The `accessToken` callback will not be
     * invoked until `setAuth()` is called without arguments.
     *
     * @param token A JWT string to override the token set on the client.
     *
     * @example
     * // Use a manual token (preserved across resubscribes, ignores accessToken callback)
     * client.realtime.setAuth('my-custom-jwt')
     *
     * // Switch back to using the accessToken callback
     * client.realtime.setAuth()
     */ async setAuth(token = null) {
        this._authPromise = this._performAuth(token);
        try {
            await this._authPromise;
        } finally{
            this._authPromise = null;
        }
    }
    /**
     * Returns true if the current access token was explicitly set via setAuth(token),
     * false if it was obtained via the accessToken callback.
     * @internal
     */ _isManualToken() {
        return this._manuallySetToken;
    }
    /**
     * Sends a heartbeat message if the socket is connected.
     */ async sendHeartbeat() {
        var _a;
        if (!this.isConnected()) {
            try {
                this.heartbeatCallback('disconnected');
            } catch (e) {
                this.log('error', 'error in heartbeat callback', e);
            }
            return;
        }
        // Handle heartbeat timeout and force reconnection if needed
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null;
            this._heartbeatSentAt = null;
            this.log('transport', 'heartbeat timeout. Attempting to re-establish connection');
            try {
                this.heartbeatCallback('timeout');
            } catch (e) {
                this.log('error', 'error in heartbeat callback', e);
            }
            // Force reconnection after heartbeat timeout
            this._wasManualDisconnect = false;
            (_a = this.conn) === null || _a === void 0 ? void 0 : _a.close(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WS_CLOSE_NORMAL"], 'heartbeat timeout');
            setTimeout(()=>{
                var _a;
                if (!this.isConnected()) {
                    (_a = this.reconnectTimer) === null || _a === void 0 ? void 0 : _a.scheduleTimeout();
                }
            }, CONNECTION_TIMEOUTS.HEARTBEAT_TIMEOUT_FALLBACK);
            return;
        }
        // Send heartbeat message to server
        this._heartbeatSentAt = Date.now();
        this.pendingHeartbeatRef = this._makeRef();
        this.push({
            topic: 'phoenix',
            event: 'heartbeat',
            payload: {},
            ref: this.pendingHeartbeatRef
        });
        try {
            this.heartbeatCallback('sent');
        } catch (e) {
            this.log('error', 'error in heartbeat callback', e);
        }
        this._setAuthSafely('heartbeat');
    }
    /**
     * Sets a callback that receives lifecycle events for internal heartbeat messages.
     * Useful for instrumenting connection health (e.g. sent/ok/timeout/disconnected).
     */ onHeartbeat(callback) {
        this.heartbeatCallback = callback;
    }
    /**
     * Flushes send buffer
     */ flushSendBuffer() {
        if (this.isConnected() && this.sendBuffer.length > 0) {
            this.sendBuffer.forEach((callback)=>callback());
            this.sendBuffer = [];
        }
    }
    /**
     * Return the next message ref, accounting for overflows
     *
     * @internal
     */ _makeRef() {
        let newRef = this.ref + 1;
        if (newRef === this.ref) {
            this.ref = 0;
        } else {
            this.ref = newRef;
        }
        return this.ref.toString();
    }
    /**
     * Unsubscribe from channels with the specified topic.
     *
     * @internal
     */ _leaveOpenTopic(topic) {
        let dupChannel = this.channels.find((c)=>c.topic === topic && (c._isJoined() || c._isJoining()));
        if (dupChannel) {
            this.log('transport', `leaving duplicate topic "${topic}"`);
            dupChannel.unsubscribe();
        }
    }
    /**
     * Removes a subscription from the socket.
     *
     * @param channel An open subscription.
     *
     * @internal
     */ _remove(channel) {
        this.channels = this.channels.filter((c)=>c.topic !== channel.topic);
    }
    /** @internal */ _onConnMessage(rawMessage) {
        this.decode(rawMessage.data, (msg)=>{
            // Handle heartbeat responses
            if (msg.topic === 'phoenix' && msg.event === 'phx_reply' && msg.ref && msg.ref === this.pendingHeartbeatRef) {
                const latency = this._heartbeatSentAt ? Date.now() - this._heartbeatSentAt : undefined;
                try {
                    this.heartbeatCallback(msg.payload.status === 'ok' ? 'ok' : 'error', latency);
                } catch (e) {
                    this.log('error', 'error in heartbeat callback', e);
                }
                this._heartbeatSentAt = null;
                this.pendingHeartbeatRef = null;
            }
            // Log incoming message
            const { topic, event, payload, ref } = msg;
            const refString = ref ? `(${ref})` : '';
            const status = payload.status || '';
            this.log('receive', `${status} ${topic} ${event} ${refString}`.trim(), payload);
            // Route message to appropriate channels
            this.channels.filter((channel)=>channel._isMember(topic)).forEach((channel)=>channel._trigger(event, payload, ref));
            this._triggerStateCallbacks('message', msg);
        });
    }
    /**
     * Clear specific timer
     * @internal
     */ _clearTimer(timer) {
        var _a;
        if (timer === 'heartbeat' && this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer);
            this.heartbeatTimer = undefined;
        } else if (timer === 'reconnect') {
            (_a = this.reconnectTimer) === null || _a === void 0 ? void 0 : _a.reset();
        }
    }
    /**
     * Clear all timers
     * @internal
     */ _clearAllTimers() {
        this._clearTimer('heartbeat');
        this._clearTimer('reconnect');
    }
    /**
     * Setup connection handlers for WebSocket events
     * @internal
     */ _setupConnectionHandlers() {
        if (!this.conn) return;
        // Set binary type if supported (browsers and most WebSocket implementations)
        if ('binaryType' in this.conn) {
            ;
            this.conn.binaryType = 'arraybuffer';
        }
        this.conn.onopen = ()=>this._onConnOpen();
        this.conn.onerror = (error)=>this._onConnError(error);
        this.conn.onmessage = (event)=>this._onConnMessage(event);
        this.conn.onclose = (event)=>this._onConnClose(event);
        if (this.conn.readyState === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCKET_STATES"].open) {
            this._onConnOpen();
        }
    }
    /**
     * Teardown connection and cleanup resources
     * @internal
     */ _teardownConnection() {
        if (this.conn) {
            if (this.conn.readyState === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCKET_STATES"].open || this.conn.readyState === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCKET_STATES"].connecting) {
                try {
                    this.conn.close();
                } catch (e) {
                    this.log('error', 'Error closing connection', e);
                }
            }
            this.conn.onopen = null;
            this.conn.onerror = null;
            this.conn.onmessage = null;
            this.conn.onclose = null;
            this.conn = null;
        }
        this._clearAllTimers();
        this._terminateWorker();
        this.channels.forEach((channel)=>channel.teardown());
    }
    /** @internal */ _onConnOpen() {
        this._setConnectionState('connected');
        this.log('transport', `connected to ${this.endpointURL()}`);
        // Wait for any pending auth operations before flushing send buffer
        // This ensures channel join messages include the correct access token
        const authPromise = this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve());
        authPromise.then(()=>{
            // When subscribe() is called before the accessToken callback has
            // resolved (common on React Native / Expo where token storage is
            // async), the phx_join payload captured at subscribe()-time will
            // have no access_token.  By this point auth has settled and
            // this.accessTokenValue holds the real JWT.
            //
            // The stale join messages sitting in sendBuffer captured the old
            // (token-less) payload in a closure, so we cannot simply flush
            // them.  Instead we:
            //   1. Patch each channel's joinPush payload with the real token
            //   2. Drop the stale buffered messages
            //   3. Re-send the join for any channel still in "joining" state
            //
            // On browsers this is a harmless no-op: accessTokenValue was
            // already set synchronously before subscribe() ran, so the join
            // payload already had the correct token.
            if (this.accessTokenValue) {
                this.channels.forEach((channel)=>{
                    channel.updateJoinPayload({
                        access_token: this.accessTokenValue
                    });
                });
                this.sendBuffer = [];
                this.channels.forEach((channel)=>{
                    if (channel._isJoining()) {
                        channel.joinPush.sent = false;
                        channel.joinPush.send();
                    }
                });
            }
            this.flushSendBuffer();
        }).catch((e)=>{
            this.log('error', 'error waiting for auth on connect', e);
            // Proceed anyway to avoid hanging connections
            this.flushSendBuffer();
        });
        this._clearTimer('reconnect');
        if (!this.worker) {
            this._startHeartbeat();
        } else {
            if (!this.workerRef) {
                this._startWorkerHeartbeat();
            }
        }
        this._triggerStateCallbacks('open');
    }
    /** @internal */ _startHeartbeat() {
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = setInterval(()=>this.sendHeartbeat(), this.heartbeatIntervalMs);
    }
    /** @internal */ _startWorkerHeartbeat() {
        if (this.workerUrl) {
            this.log('worker', `starting worker for from ${this.workerUrl}`);
        } else {
            this.log('worker', `starting default worker`);
        }
        const objectUrl = this._workerObjectUrl(this.workerUrl);
        this.workerRef = new Worker(objectUrl);
        this.workerRef.onerror = (error)=>{
            this.log('worker', 'worker error', error.message);
            this._terminateWorker();
        };
        this.workerRef.onmessage = (event)=>{
            if (event.data.event === 'keepAlive') {
                this.sendHeartbeat();
            }
        };
        this.workerRef.postMessage({
            event: 'start',
            interval: this.heartbeatIntervalMs
        });
    }
    /**
     * Terminate the Web Worker and clear the reference
     * @internal
     */ _terminateWorker() {
        if (this.workerRef) {
            this.log('worker', 'terminating worker');
            this.workerRef.terminate();
            this.workerRef = undefined;
        }
    }
    /** @internal */ _onConnClose(event) {
        var _a;
        this._setConnectionState('disconnected');
        this.log('transport', 'close', event);
        this._triggerChanError();
        this._clearTimer('heartbeat');
        // Only schedule reconnection if it wasn't a manual disconnect
        if (!this._wasManualDisconnect) {
            (_a = this.reconnectTimer) === null || _a === void 0 ? void 0 : _a.scheduleTimeout();
        }
        this._triggerStateCallbacks('close', event);
    }
    /** @internal */ _onConnError(error) {
        this._setConnectionState('disconnected');
        this.log('transport', `${error}`);
        this._triggerChanError();
        this._triggerStateCallbacks('error', error);
        try {
            this.heartbeatCallback('error');
        } catch (e) {
            this.log('error', 'error in heartbeat callback', e);
        }
    }
    /** @internal */ _triggerChanError() {
        this.channels.forEach((channel)=>channel._trigger(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].error));
    }
    /** @internal */ _appendParams(url, params) {
        if (Object.keys(params).length === 0) {
            return url;
        }
        const prefix = url.match(/\?/) ? '&' : '?';
        const query = new URLSearchParams(params);
        return `${url}${prefix}${query}`;
    }
    _workerObjectUrl(url) {
        let result_url;
        if (url) {
            result_url = url;
        } else {
            const blob = new Blob([
                WORKER_SCRIPT
            ], {
                type: 'application/javascript'
            });
            result_url = URL.createObjectURL(blob);
        }
        return result_url;
    }
    /**
     * Set connection state with proper state management
     * @internal
     */ _setConnectionState(state, manual = false) {
        this._connectionState = state;
        if (state === 'connecting') {
            this._wasManualDisconnect = false;
        } else if (state === 'disconnecting') {
            this._wasManualDisconnect = manual;
        }
    }
    /**
     * Perform the actual auth operation
     * @internal
     */ async _performAuth(token = null) {
        let tokenToSend;
        let isManualToken = false;
        if (token) {
            tokenToSend = token;
            // Track if this is a manually-provided token
            isManualToken = true;
        } else if (this.accessToken) {
            // Call the accessToken callback to get fresh token
            try {
                tokenToSend = await this.accessToken();
            } catch (e) {
                this.log('error', 'Error fetching access token from callback', e);
                // Fall back to cached value if callback fails
                tokenToSend = this.accessTokenValue;
            }
        } else {
            tokenToSend = this.accessTokenValue;
        }
        // Track whether this token was manually set or fetched via callback
        if (isManualToken) {
            this._manuallySetToken = true;
        } else if (this.accessToken) {
            // If we used the callback, clear the manual flag
            this._manuallySetToken = false;
        }
        if (this.accessTokenValue != tokenToSend) {
            this.accessTokenValue = tokenToSend;
            this.channels.forEach((channel)=>{
                const payload = {
                    access_token: tokenToSend,
                    version: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_VERSION"]
                };
                tokenToSend && channel.updateJoinPayload(payload);
                if (channel.joinedOnce && channel._isJoined()) {
                    channel._push(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].access_token, {
                        access_token: tokenToSend
                    });
                }
            });
        }
    }
    /**
     * Wait for any in-flight auth operations to complete
     * @internal
     */ async _waitForAuthIfNeeded() {
        if (this._authPromise) {
            await this._authPromise;
        }
    }
    /**
     * Safely call setAuth with standardized error handling
     * @internal
     */ _setAuthSafely(context = 'general') {
        // Only refresh auth if using callback-based tokens
        if (!this._isManualToken()) {
            this.setAuth().catch((e)=>{
                this.log('error', `Error setting auth in ${context}`, e);
            });
        }
    }
    /**
     * Trigger state change callbacks with proper error handling
     * @internal
     */ _triggerStateCallbacks(event, data) {
        try {
            this.stateChangeCallbacks[event].forEach((callback)=>{
                try {
                    callback(data);
                } catch (e) {
                    this.log('error', `error in ${event} callback`, e);
                }
            });
        } catch (e) {
            this.log('error', `error triggering ${event} callbacks`, e);
        }
    }
    /**
     * Setup reconnection timer with proper configuration
     * @internal
     */ _setupReconnectionTimer() {
        this.reconnectTimer = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](async ()=>{
            setTimeout(async ()=>{
                await this._waitForAuthIfNeeded();
                if (!this.isConnected()) {
                    this.connect();
                }
            }, CONNECTION_TIMEOUTS.RECONNECT_DELAY);
        }, this.reconnectAfterMs);
    }
    /**
     * Initialize client options with defaults
     * @internal
     */ _initializeOptions(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        // Set defaults
        this.transport = (_a = options === null || options === void 0 ? void 0 : options.transport) !== null && _a !== void 0 ? _a : null;
        this.timeout = (_b = options === null || options === void 0 ? void 0 : options.timeout) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TIMEOUT"];
        this.heartbeatIntervalMs = (_c = options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs) !== null && _c !== void 0 ? _c : CONNECTION_TIMEOUTS.HEARTBEAT_INTERVAL;
        this.worker = (_d = options === null || options === void 0 ? void 0 : options.worker) !== null && _d !== void 0 ? _d : false;
        this.accessToken = (_e = options === null || options === void 0 ? void 0 : options.accessToken) !== null && _e !== void 0 ? _e : null;
        this.heartbeatCallback = (_f = options === null || options === void 0 ? void 0 : options.heartbeatCallback) !== null && _f !== void 0 ? _f : noop;
        this.vsn = (_g = options === null || options === void 0 ? void 0 : options.vsn) !== null && _g !== void 0 ? _g : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_VSN"];
        // Handle special cases
        if (options === null || options === void 0 ? void 0 : options.params) this.params = options.params;
        if (options === null || options === void 0 ? void 0 : options.logger) this.logger = options.logger;
        if ((options === null || options === void 0 ? void 0 : options.logLevel) || (options === null || options === void 0 ? void 0 : options.log_level)) {
            this.logLevel = options.logLevel || options.log_level;
            this.params = Object.assign(Object.assign({}, this.params), {
                log_level: this.logLevel
            });
        }
        // Set up functions with defaults
        this.reconnectAfterMs = (_h = options === null || options === void 0 ? void 0 : options.reconnectAfterMs) !== null && _h !== void 0 ? _h : (tries)=>{
            return RECONNECT_INTERVALS[tries - 1] || DEFAULT_RECONNECT_FALLBACK;
        };
        switch(this.vsn){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VSN_1_0_0"]:
                this.encode = (_j = options === null || options === void 0 ? void 0 : options.encode) !== null && _j !== void 0 ? _j : (payload, callback)=>{
                    return callback(JSON.stringify(payload));
                };
                this.decode = (_k = options === null || options === void 0 ? void 0 : options.decode) !== null && _k !== void 0 ? _k : (payload, callback)=>{
                    return callback(JSON.parse(payload));
                };
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VSN_2_0_0"]:
                this.encode = (_l = options === null || options === void 0 ? void 0 : options.encode) !== null && _l !== void 0 ? _l : this.serializer.encode.bind(this.serializer);
                this.decode = (_m = options === null || options === void 0 ? void 0 : options.decode) !== null && _m !== void 0 ? _m : this.serializer.decode.bind(this.serializer);
                break;
            default:
                throw new Error(`Unsupported serializer version: ${this.vsn}`);
        }
        // Handle worker setup
        if (this.worker) {
            if (typeof window !== 'undefined' && !window.Worker) {
                throw new Error('Web Worker is not supported');
            }
            this.workerUrl = options === null || options === void 0 ? void 0 : options.workerUrl;
        }
    }
} //# sourceMappingURL=RealtimeClient.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimePresence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$websocket$2d$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/lib/websocket-factory.js [app-client] (ecmascript)");
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-client] (ecmascript) <export default as RealtimeClient>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RealtimeClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-client] (ecmascript)");
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/iceberg-js/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IcebergError",
    ()=>IcebergError,
    "IcebergRestCatalog",
    ()=>IcebergRestCatalog,
    "getCurrentSchema",
    ()=>getCurrentSchema,
    "isDecimalType",
    ()=>isDecimalType,
    "isFixedType",
    ()=>isFixedType,
    "parseDecimalType",
    ()=>parseDecimalType,
    "parseFixedType",
    ()=>parseFixedType,
    "typesEqual",
    ()=>typesEqual
]);
// src/errors/IcebergError.ts
var IcebergError = class extends Error {
    constructor(message, opts){
        super(message);
        this.name = "IcebergError";
        this.status = opts.status;
        this.icebergType = opts.icebergType;
        this.icebergCode = opts.icebergCode;
        this.details = opts.details;
        this.isCommitStateUnknown = opts.icebergType === "CommitStateUnknownException" || [
            500,
            502,
            504
        ].includes(opts.status) && opts.icebergType?.includes("CommitState") === true;
    }
    /**
   * Returns true if the error is a 404 Not Found error.
   */ isNotFound() {
        return this.status === 404;
    }
    /**
   * Returns true if the error is a 409 Conflict error.
   */ isConflict() {
        return this.status === 409;
    }
    /**
   * Returns true if the error is a 419 Authentication Timeout error.
   */ isAuthenticationTimeout() {
        return this.status === 419;
    }
};
// src/utils/url.ts
function buildUrl(baseUrl, path, query) {
    const url = new URL(path, baseUrl);
    if (query) {
        for (const [key, value] of Object.entries(query)){
            if (value !== void 0) {
                url.searchParams.set(key, value);
            }
        }
    }
    return url.toString();
}
// src/http/createFetchClient.ts
async function buildAuthHeaders(auth) {
    if (!auth || auth.type === "none") {
        return {};
    }
    if (auth.type === "bearer") {
        return {
            Authorization: `Bearer ${auth.token}`
        };
    }
    if (auth.type === "header") {
        return {
            [auth.name]: auth.value
        };
    }
    if (auth.type === "custom") {
        return await auth.getHeaders();
    }
    return {};
}
function createFetchClient(options) {
    const fetchFn = options.fetchImpl ?? globalThis.fetch;
    return {
        async request ({ method, path, query, body, headers }) {
            const url = buildUrl(options.baseUrl, path, query);
            const authHeaders = await buildAuthHeaders(options.auth);
            const res = await fetchFn(url, {
                method,
                headers: {
                    ...body ? {
                        "Content-Type": "application/json"
                    } : {},
                    ...authHeaders,
                    ...headers
                },
                body: body ? JSON.stringify(body) : void 0
            });
            const text = await res.text();
            const isJson = (res.headers.get("content-type") || "").includes("application/json");
            const data = isJson && text ? JSON.parse(text) : text;
            if (!res.ok) {
                const errBody = isJson ? data : void 0;
                const errorDetail = errBody?.error;
                throw new IcebergError(errorDetail?.message ?? `Request failed with status ${res.status}`, {
                    status: res.status,
                    icebergType: errorDetail?.type,
                    icebergCode: errorDetail?.code,
                    details: errBody
                });
            }
            return {
                status: res.status,
                headers: res.headers,
                data
            };
        }
    };
}
// src/catalog/namespaces.ts
function namespaceToPath(namespace) {
    return namespace.join("");
}
var NamespaceOperations = class {
    constructor(client, prefix = ""){
        this.client = client;
        this.prefix = prefix;
    }
    async listNamespaces(parent) {
        const query = parent ? {
            parent: namespaceToPath(parent.namespace)
        } : void 0;
        const response = await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces`,
            query
        });
        return response.data.namespaces.map((ns)=>({
                namespace: ns
            }));
    }
    async createNamespace(id, metadata) {
        const request = {
            namespace: id.namespace,
            properties: metadata?.properties
        };
        const response = await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces`,
            body: request
        });
        return response.data;
    }
    async dropNamespace(id) {
        await this.client.request({
            method: "DELETE",
            path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
        });
    }
    async loadNamespaceMetadata(id) {
        const response = await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
        });
        return {
            properties: response.data.properties
        };
    }
    async namespaceExists(id) {
        try {
            await this.client.request({
                method: "HEAD",
                path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
            });
            return true;
        } catch (error) {
            if (error instanceof IcebergError && error.status === 404) {
                return false;
            }
            throw error;
        }
    }
    async createNamespaceIfNotExists(id, metadata) {
        try {
            return await this.createNamespace(id, metadata);
        } catch (error) {
            if (error instanceof IcebergError && error.status === 409) {
                return;
            }
            throw error;
        }
    }
};
// src/catalog/tables.ts
function namespaceToPath2(namespace) {
    return namespace.join("");
}
var TableOperations = class {
    constructor(client, prefix = "", accessDelegation){
        this.client = client;
        this.prefix = prefix;
        this.accessDelegation = accessDelegation;
    }
    async listTables(namespace) {
        const response = await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${namespaceToPath2(namespace.namespace)}/tables`
        });
        return response.data.identifiers;
    }
    async createTable(namespace, request) {
        const headers = {};
        if (this.accessDelegation) {
            headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
        }
        const response = await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${namespaceToPath2(namespace.namespace)}/tables`,
            body: request,
            headers
        });
        return response.data.metadata;
    }
    async updateTable(id, request) {
        const response = await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
            body: request
        });
        return {
            "metadata-location": response.data["metadata-location"],
            metadata: response.data.metadata
        };
    }
    async dropTable(id, options) {
        await this.client.request({
            method: "DELETE",
            path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
            query: {
                purgeRequested: String(options?.purge ?? false)
            }
        });
    }
    async loadTable(id) {
        const headers = {};
        if (this.accessDelegation) {
            headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
        }
        const response = await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
            headers
        });
        return response.data.metadata;
    }
    async tableExists(id) {
        const headers = {};
        if (this.accessDelegation) {
            headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
        }
        try {
            await this.client.request({
                method: "HEAD",
                path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
                headers
            });
            return true;
        } catch (error) {
            if (error instanceof IcebergError && error.status === 404) {
                return false;
            }
            throw error;
        }
    }
    async createTableIfNotExists(namespace, request) {
        try {
            return await this.createTable(namespace, request);
        } catch (error) {
            if (error instanceof IcebergError && error.status === 409) {
                return await this.loadTable({
                    namespace: namespace.namespace,
                    name: request.name
                });
            }
            throw error;
        }
    }
};
// src/catalog/IcebergRestCatalog.ts
var IcebergRestCatalog = class {
    /**
   * Creates a new Iceberg REST Catalog client.
   *
   * @param options - Configuration options for the catalog client
   */ constructor(options){
        let prefix = "v1";
        if (options.catalogName) {
            prefix += `/${options.catalogName}`;
        }
        const baseUrl = options.baseUrl.endsWith("/") ? options.baseUrl : `${options.baseUrl}/`;
        this.client = createFetchClient({
            baseUrl,
            auth: options.auth,
            fetchImpl: options.fetch
        });
        this.accessDelegation = options.accessDelegation?.join(",");
        this.namespaceOps = new NamespaceOperations(this.client, prefix);
        this.tableOps = new TableOperations(this.client, prefix, this.accessDelegation);
    }
    /**
   * Lists all namespaces in the catalog.
   *
   * @param parent - Optional parent namespace to list children under
   * @returns Array of namespace identifiers
   *
   * @example
   * ```typescript
   * // List all top-level namespaces
   * const namespaces = await catalog.listNamespaces();
   *
   * // List namespaces under a parent
   * const children = await catalog.listNamespaces({ namespace: ['analytics'] });
   * ```
   */ async listNamespaces(parent) {
        return this.namespaceOps.listNamespaces(parent);
    }
    /**
   * Creates a new namespace in the catalog.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespace(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * console.log(response.namespace); // ['analytics']
   * console.log(response.properties); // { owner: 'data-team', ... }
   * ```
   */ async createNamespace(id, metadata) {
        return this.namespaceOps.createNamespace(id, metadata);
    }
    /**
   * Drops a namespace from the catalog.
   *
   * The namespace must be empty (contain no tables) before it can be dropped.
   *
   * @param id - Namespace identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropNamespace({ namespace: ['analytics'] });
   * ```
   */ async dropNamespace(id) {
        await this.namespaceOps.dropNamespace(id);
    }
    /**
   * Loads metadata for a namespace.
   *
   * @param id - Namespace identifier to load
   * @returns Namespace metadata including properties
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadNamespaceMetadata({ namespace: ['analytics'] });
   * console.log(metadata.properties);
   * ```
   */ async loadNamespaceMetadata(id) {
        return this.namespaceOps.loadNamespaceMetadata(id);
    }
    /**
   * Lists all tables in a namespace.
   *
   * @param namespace - Namespace identifier to list tables from
   * @returns Array of table identifiers
   *
   * @example
   * ```typescript
   * const tables = await catalog.listTables({ namespace: ['analytics'] });
   * console.log(tables); // [{ namespace: ['analytics'], name: 'events' }, ...]
   * ```
   */ async listTables(namespace) {
        return this.tableOps.listTables(namespace);
    }
    /**
   * Creates a new table in the catalog.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTable(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     },
   *     'partition-spec': {
   *       'spec-id': 0,
   *       fields: [
   *         { source_id: 2, field_id: 1000, name: 'ts_day', transform: 'day' }
   *       ]
   *     }
   *   }
   * );
   * ```
   */ async createTable(namespace, request) {
        return this.tableOps.createTable(namespace, request);
    }
    /**
   * Updates an existing table's metadata.
   *
   * Can update the schema, partition spec, or properties of a table.
   *
   * @param id - Table identifier to update
   * @param request - Update request with fields to modify
   * @returns Response containing the metadata location and updated table metadata
   *
   * @example
   * ```typescript
   * const response = await catalog.updateTable(
   *   { namespace: ['analytics'], name: 'events' },
   *   {
   *     properties: { 'read.split.target-size': '134217728' }
   *   }
   * );
   * console.log(response['metadata-location']); // s3://...
   * console.log(response.metadata); // TableMetadata object
   * ```
   */ async updateTable(id, request) {
        return this.tableOps.updateTable(id, request);
    }
    /**
   * Drops a table from the catalog.
   *
   * @param id - Table identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropTable({ namespace: ['analytics'], name: 'events' });
   * ```
   */ async dropTable(id, options) {
        await this.tableOps.dropTable(id, options);
    }
    /**
   * Loads metadata for a table.
   *
   * @param id - Table identifier to load
   * @returns Table metadata including schema, partition spec, location, etc.
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadTable({ namespace: ['analytics'], name: 'events' });
   * console.log(metadata.schema);
   * console.log(metadata.location);
   * ```
   */ async loadTable(id) {
        return this.tableOps.loadTable(id);
    }
    /**
   * Checks if a namespace exists in the catalog.
   *
   * @param id - Namespace identifier to check
   * @returns True if the namespace exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.namespaceExists({ namespace: ['analytics'] });
   * console.log(exists); // true or false
   * ```
   */ async namespaceExists(id) {
        return this.namespaceOps.namespaceExists(id);
    }
    /**
   * Checks if a table exists in the catalog.
   *
   * @param id - Table identifier to check
   * @returns True if the table exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.tableExists({ namespace: ['analytics'], name: 'events' });
   * console.log(exists); // true or false
   * ```
   */ async tableExists(id) {
        return this.tableOps.tableExists(id);
    }
    /**
   * Creates a namespace if it does not exist.
   *
   * If the namespace already exists, returns void. If created, returns the response.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties, or void if it already exists
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespaceIfNotExists(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * if (response) {
   *   console.log('Created:', response.namespace);
   * } else {
   *   console.log('Already exists');
   * }
   * ```
   */ async createNamespaceIfNotExists(id, metadata) {
        return this.namespaceOps.createNamespaceIfNotExists(id, metadata);
    }
    /**
   * Creates a table if it does not exist.
   *
   * If the table already exists, returns its metadata instead.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created or existing table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTableIfNotExists(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     }
   *   }
   * );
   * ```
   */ async createTableIfNotExists(namespace, request) {
        return this.tableOps.createTableIfNotExists(namespace, request);
    }
};
// src/catalog/types.ts
var DECIMAL_REGEX = /^decimal\s*\(\s*(\d+)\s*,\s*(\d+)\s*\)$/;
var FIXED_REGEX = /^fixed\s*\[\s*(\d+)\s*\]$/;
function parseDecimalType(type) {
    const match = type.match(DECIMAL_REGEX);
    if (!match) return null;
    return {
        precision: parseInt(match[1], 10),
        scale: parseInt(match[2], 10)
    };
}
function parseFixedType(type) {
    const match = type.match(FIXED_REGEX);
    if (!match) return null;
    return {
        length: parseInt(match[1], 10)
    };
}
function isDecimalType(type) {
    return DECIMAL_REGEX.test(type);
}
function isFixedType(type) {
    return FIXED_REGEX.test(type);
}
function typesEqual(a, b) {
    const decimalA = parseDecimalType(a);
    const decimalB = parseDecimalType(b);
    if (decimalA && decimalB) {
        return decimalA.precision === decimalB.precision && decimalA.scale === decimalB.scale;
    }
    const fixedA = parseFixedType(a);
    const fixedB = parseFixedType(b);
    if (fixedA && fixedB) {
        return fixedA.length === fixedB.length;
    }
    return a === b;
}
function getCurrentSchema(metadata) {
    return metadata.schemas.find((s)=>s["schema-id"] === metadata["current-schema-id"]);
}
;
 //# sourceMappingURL=index.mjs.map
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/storage-js/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StorageAnalyticsClient",
    ()=>StorageAnalyticsClient,
    "StorageApiError",
    ()=>StorageApiError,
    "StorageClient",
    ()=>StorageClient,
    "StorageError",
    ()=>StorageError,
    "StorageUnknownError",
    ()=>StorageUnknownError,
    "StorageVectorsApiError",
    ()=>StorageVectorsApiError,
    "StorageVectorsClient",
    ()=>StorageVectorsClient,
    "StorageVectorsError",
    ()=>StorageVectorsError,
    "StorageVectorsErrorCode",
    ()=>StorageVectorsErrorCode,
    "StorageVectorsUnknownError",
    ()=>StorageVectorsUnknownError,
    "VectorBucketApi",
    ()=>VectorBucketApi,
    "VectorBucketScope",
    ()=>VectorBucketScope,
    "VectorDataApi",
    ()=>VectorDataApi,
    "VectorIndexApi",
    ()=>VectorIndexApi,
    "VectorIndexScope",
    ()=>VectorIndexScope,
    "isStorageError",
    ()=>isStorageError,
    "isStorageVectorsError",
    ()=>isStorageVectorsError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$iceberg$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/iceberg-js/dist/index.mjs [app-client] (ecmascript)");
;
//#region src/lib/common/errors.ts
/**
* Base error class for all Storage errors
* Supports both 'storage' and 'vectors' namespaces
*/ var StorageError = class extends Error {
    constructor(message, namespace = "storage", status, statusCode){
        super(message);
        this.__isStorageError = true;
        this.namespace = namespace;
        this.name = namespace === "vectors" ? "StorageVectorsError" : "StorageError";
        this.status = status;
        this.statusCode = statusCode;
    }
};
/**
* Type guard to check if an error is a StorageError
* @param error - The error to check
* @returns True if the error is a StorageError
*/ function isStorageError(error) {
    return typeof error === "object" && error !== null && "__isStorageError" in error;
}
/**
* API error returned from Storage service
* Includes HTTP status code and service-specific error code
*/ var StorageApiError = class extends StorageError {
    constructor(message, status, statusCode, namespace = "storage"){
        super(message, namespace, status, statusCode);
        this.name = namespace === "vectors" ? "StorageVectorsApiError" : "StorageApiError";
        this.status = status;
        this.statusCode = statusCode;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        };
    }
};
/**
* Unknown error that doesn't match expected error patterns
* Wraps the original error for debugging
*/ var StorageUnknownError = class extends StorageError {
    constructor(message, originalError, namespace = "storage"){
        super(message, namespace);
        this.name = namespace === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError";
        this.originalError = originalError;
    }
};
/**
* @deprecated Use StorageError with namespace='vectors' instead
* Alias for backward compatibility with existing vector storage code
*/ var StorageVectorsError = class extends StorageError {
    constructor(message){
        super(message, "vectors");
    }
};
/**
* Type guard to check if an error is a StorageVectorsError
* @param error - The error to check
* @returns True if the error is a StorageVectorsError
*/ function isStorageVectorsError(error) {
    return isStorageError(error) && error["namespace"] === "vectors";
}
/**
* @deprecated Use StorageApiError with namespace='vectors' instead
* Alias for backward compatibility with existing vector storage code
*/ var StorageVectorsApiError = class extends StorageApiError {
    constructor(message, status, statusCode){
        super(message, status, statusCode, "vectors");
    }
};
/**
* @deprecated Use StorageUnknownError with namespace='vectors' instead
* Alias for backward compatibility with existing vector storage code
*/ var StorageVectorsUnknownError = class extends StorageUnknownError {
    constructor(message, originalError){
        super(message, originalError, "vectors");
    }
};
/**
* Error codes specific to S3 Vectors API
* Maps AWS service errors to application-friendly error codes
*/ let StorageVectorsErrorCode = /* @__PURE__ */ function(StorageVectorsErrorCode$1) {
    /** Internal server fault (HTTP 500) */ StorageVectorsErrorCode$1["InternalError"] = "InternalError";
    /** Resource already exists / conflict (HTTP 409) */ StorageVectorsErrorCode$1["S3VectorConflictException"] = "S3VectorConflictException";
    /** Resource not found (HTTP 404) */ StorageVectorsErrorCode$1["S3VectorNotFoundException"] = "S3VectorNotFoundException";
    /** Delete bucket while not empty (HTTP 400) */ StorageVectorsErrorCode$1["S3VectorBucketNotEmpty"] = "S3VectorBucketNotEmpty";
    /** Exceeds bucket quota/limit (HTTP 400) */ StorageVectorsErrorCode$1["S3VectorMaxBucketsExceeded"] = "S3VectorMaxBucketsExceeded";
    /** Exceeds index quota/limit (HTTP 400) */ StorageVectorsErrorCode$1["S3VectorMaxIndexesExceeded"] = "S3VectorMaxIndexesExceeded";
    return StorageVectorsErrorCode$1;
}({});
//#endregion
//#region src/lib/common/helpers.ts
/**
* Resolves the fetch implementation to use
* Uses custom fetch if provided, otherwise uses native fetch
*
* @param customFetch - Optional custom fetch implementation
* @returns Resolved fetch function
*/ const resolveFetch = (customFetch)=>{
    if (customFetch) return (...args)=>customFetch(...args);
    return (...args)=>fetch(...args);
};
/**
* Determine if input is a plain object
* An object is plain if it's created by either {}, new Object(), or Object.create(null)
*
* @param value - Value to check
* @returns True if value is a plain object
* @source https://github.com/sindresorhus/is-plain-obj
*/ const isPlainObject = (value)=>{
    if (typeof value !== "object" || value === null) return false;
    const prototype = Object.getPrototypeOf(value);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
};
/**
* Recursively converts object keys from snake_case to camelCase
* Used for normalizing API responses
*
* @param item - Object to convert
* @returns Converted object with camelCase keys
*/ const recursiveToCamel = (item)=>{
    if (Array.isArray(item)) return item.map((el)=>recursiveToCamel(el));
    else if (typeof item === "function" || item !== Object(item)) return item;
    const result = {};
    Object.entries(item).forEach(([key, value])=>{
        const newKey = key.replace(/([-_][a-z])/gi, (c)=>c.toUpperCase().replace(/[-_]/g, ""));
        result[newKey] = recursiveToCamel(value);
    });
    return result;
};
/**
* Validates if a given bucket name is valid according to Supabase Storage API rules
* Mirrors backend validation from: storage/src/storage/limits.ts:isValidBucketName()
*
* Rules:
* - Length: 1-100 characters
* - Allowed characters: alphanumeric (a-z, A-Z, 0-9), underscore (_), and safe special characters
* - Safe special characters: ! - . * ' ( ) space & $ @ = ; : + , ?
* - Forbidden: path separators (/, \), path traversal (..), leading/trailing whitespace
*
* AWS S3 Reference: https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html
*
* @param bucketName - The bucket name to validate
* @returns true if valid, false otherwise
*/ const isValidBucketName = (bucketName)=>{
    if (!bucketName || typeof bucketName !== "string") return false;
    if (bucketName.length === 0 || bucketName.length > 100) return false;
    if (bucketName.trim() !== bucketName) return false;
    if (bucketName.includes("/") || bucketName.includes("\\")) return false;
    return /^[\w!.\*'() &$@=;:+,?-]+$/.test(bucketName);
};
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/typeof.js
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
        return typeof o$1;
    } : function(o$1) {
        return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
    }, _typeof(o);
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/toPrimitive.js
function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/toPropertyKey.js
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/defineProperty.js
function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/objectSpread2.js
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r$1) {
            return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r$1) {
            _defineProperty(e, r$1, t[r$1]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
            Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
        });
    }
    return e;
}
//#endregion
//#region src/lib/common/fetch.ts
/**
* Extracts error message from various error response formats
* @param err - Error object from API
* @returns Human-readable error message
*/ const _getErrorMessage = (err)=>{
    var _err$error;
    return err.msg || err.message || err.error_description || (typeof err.error === "string" ? err.error : (_err$error = err.error) === null || _err$error === void 0 ? void 0 : _err$error.message) || JSON.stringify(err);
};
/**
* Handles fetch errors and converts them to Storage error types
* @param error - The error caught from fetch
* @param reject - Promise rejection function
* @param options - Fetch options that may affect error handling
* @param namespace - Error namespace ('storage' or 'vectors')
*/ const handleError = async (error, reject, options, namespace)=>{
    if (error && typeof error === "object" && "status" in error && "ok" in error && typeof error.status === "number" && !(options === null || options === void 0 ? void 0 : options.noResolveJson)) {
        const responseError = error;
        const status = responseError.status || 500;
        if (typeof responseError.json === "function") responseError.json().then((err)=>{
            const statusCode = (err === null || err === void 0 ? void 0 : err.statusCode) || (err === null || err === void 0 ? void 0 : err.code) || status + "";
            reject(new StorageApiError(_getErrorMessage(err), status, statusCode, namespace));
        }).catch(()=>{
            if (namespace === "vectors") {
                const statusCode = status + "";
                reject(new StorageApiError(responseError.statusText || `HTTP ${status} error`, status, statusCode, namespace));
            } else {
                const statusCode = status + "";
                reject(new StorageApiError(responseError.statusText || `HTTP ${status} error`, status, statusCode, namespace));
            }
        });
        else {
            const statusCode = status + "";
            reject(new StorageApiError(responseError.statusText || `HTTP ${status} error`, status, statusCode, namespace));
        }
    } else reject(new StorageUnknownError(_getErrorMessage(error), error, namespace));
};
/**
* Builds request parameters for fetch calls
* @param method - HTTP method
* @param options - Custom fetch options
* @param parameters - Additional fetch parameters like AbortSignal
* @param body - Request body (will be JSON stringified if plain object)
* @returns Complete fetch request parameters
*/ const _getRequestParams = (method, options, parameters, body)=>{
    const params = {
        method,
        headers: (options === null || options === void 0 ? void 0 : options.headers) || {}
    };
    if (method === "GET" || method === "HEAD" || !body) return _objectSpread2(_objectSpread2({}, params), parameters);
    if (isPlainObject(body)) {
        params.headers = _objectSpread2({
            "Content-Type": "application/json"
        }, options === null || options === void 0 ? void 0 : options.headers);
        params.body = JSON.stringify(body);
    } else params.body = body;
    if (options === null || options === void 0 ? void 0 : options.duplex) params.duplex = options.duplex;
    return _objectSpread2(_objectSpread2({}, params), parameters);
};
/**
* Internal request handler that wraps fetch with error handling
* @param fetcher - Fetch function to use
* @param method - HTTP method
* @param url - Request URL
* @param options - Custom fetch options
* @param parameters - Additional fetch parameters
* @param body - Request body
* @param namespace - Error namespace ('storage' or 'vectors')
* @returns Promise with parsed response or error
*/ async function _handleRequest(fetcher, method, url, options, parameters, body, namespace) {
    return new Promise((resolve, reject)=>{
        fetcher(url, _getRequestParams(method, options, parameters, body)).then((result)=>{
            if (!result.ok) throw result;
            if (options === null || options === void 0 ? void 0 : options.noResolveJson) return result;
            if (namespace === "vectors") {
                const contentType = result.headers.get("content-type");
                if (result.headers.get("content-length") === "0" || result.status === 204) return {};
                if (!contentType || !contentType.includes("application/json")) return {};
            }
            return result.json();
        }).then((data)=>resolve(data)).catch((error)=>handleError(error, reject, options, namespace));
    });
}
/**
* Creates a fetch API with the specified namespace
* @param namespace - Error namespace ('storage' or 'vectors')
* @returns Object with HTTP method functions
*/ function createFetchApi(namespace = "storage") {
    return {
        get: async (fetcher, url, options, parameters)=>{
            return _handleRequest(fetcher, "GET", url, options, parameters, void 0, namespace);
        },
        post: async (fetcher, url, body, options, parameters)=>{
            return _handleRequest(fetcher, "POST", url, options, parameters, body, namespace);
        },
        put: async (fetcher, url, body, options, parameters)=>{
            return _handleRequest(fetcher, "PUT", url, options, parameters, body, namespace);
        },
        head: async (fetcher, url, options, parameters)=>{
            return _handleRequest(fetcher, "HEAD", url, _objectSpread2(_objectSpread2({}, options), {}, {
                noResolveJson: true
            }), parameters, void 0, namespace);
        },
        remove: async (fetcher, url, body, options, parameters)=>{
            return _handleRequest(fetcher, "DELETE", url, options, parameters, body, namespace);
        }
    };
}
const defaultApi = createFetchApi("storage");
const { get, post, put, head, remove } = defaultApi;
const vectorsApi = createFetchApi("vectors");
//#endregion
//#region src/lib/common/BaseApiClient.ts
/**
* @ignore
* Base API client class for all Storage API classes
* Provides common infrastructure for error handling and configuration
*
* @typeParam TError - The error type (StorageError or subclass)
*/ var BaseApiClient = class {
    /**
	* Creates a new BaseApiClient instance
	* @param url - Base URL for API requests
	* @param headers - Default headers for API requests
	* @param fetch - Optional custom fetch implementation
	* @param namespace - Error namespace ('storage' or 'vectors')
	*/ constructor(url, headers = {}, fetch$1, namespace = "storage"){
        this.shouldThrowOnError = false;
        this.url = url;
        this.headers = headers;
        this.fetch = resolveFetch(fetch$1);
        this.namespace = namespace;
    }
    /**
	* Enable throwing errors instead of returning them.
	* When enabled, errors are thrown instead of returned in { data, error } format.
	*
	* @returns this - For method chaining
	*/ throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    /**
	* Set an HTTP header for the request.
	* Creates a shallow copy of headers to avoid mutating shared state.
	*
	* @param name - Header name
	* @param value - Header value
	* @returns this - For method chaining
	*/ setHeader(name, value) {
        this.headers = _objectSpread2(_objectSpread2({}, this.headers), {}, {
            [name]: value
        });
        return this;
    }
    /**
	* Handles API operation with standardized error handling
	* Eliminates repetitive try-catch blocks across all API methods
	*
	* This wrapper:
	* 1. Executes the operation
	* 2. Returns { data, error: null } on success
	* 3. Returns { data: null, error } on failure (if shouldThrowOnError is false)
	* 4. Throws error on failure (if shouldThrowOnError is true)
	*
	* @typeParam T - The expected data type from the operation
	* @param operation - Async function that performs the API call
	* @returns Promise with { data, error } tuple
	*
	* @example
	* ```typescript
	* async listBuckets() {
	*   return this.handleOperation(async () => {
	*     return await get(this.fetch, `${this.url}/bucket`, {
	*       headers: this.headers,
	*     })
	*   })
	* }
	* ```
	*/ async handleOperation(operation) {
        var _this = this;
        try {
            return {
                data: await operation(),
                error: null
            };
        } catch (error) {
            if (_this.shouldThrowOnError) throw error;
            if (isStorageError(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
};
//#endregion
//#region src/packages/StreamDownloadBuilder.ts
var StreamDownloadBuilder = class {
    constructor(downloadFn, shouldThrowOnError){
        this.downloadFn = downloadFn;
        this.shouldThrowOnError = shouldThrowOnError;
    }
    then(onfulfilled, onrejected) {
        return this.execute().then(onfulfilled, onrejected);
    }
    async execute() {
        var _this = this;
        try {
            return {
                data: (await _this.downloadFn()).body,
                error: null
            };
        } catch (error) {
            if (_this.shouldThrowOnError) throw error;
            if (isStorageError(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
};
//#endregion
//#region src/packages/BlobDownloadBuilder.ts
let _Symbol$toStringTag;
_Symbol$toStringTag = Symbol.toStringTag;
var BlobDownloadBuilder = class {
    constructor(downloadFn, shouldThrowOnError){
        this.downloadFn = downloadFn;
        this.shouldThrowOnError = shouldThrowOnError;
        this[_Symbol$toStringTag] = "BlobDownloadBuilder";
        this.promise = null;
    }
    asStream() {
        return new StreamDownloadBuilder(this.downloadFn, this.shouldThrowOnError);
    }
    then(onfulfilled, onrejected) {
        return this.getPromise().then(onfulfilled, onrejected);
    }
    catch(onrejected) {
        return this.getPromise().catch(onrejected);
    }
    finally(onfinally) {
        return this.getPromise().finally(onfinally);
    }
    getPromise() {
        if (!this.promise) this.promise = this.execute();
        return this.promise;
    }
    async execute() {
        var _this = this;
        try {
            return {
                data: await (await _this.downloadFn()).blob(),
                error: null
            };
        } catch (error) {
            if (_this.shouldThrowOnError) throw error;
            if (isStorageError(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
};
//#endregion
//#region src/packages/StorageFileApi.ts
const DEFAULT_SEARCH_OPTIONS = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
};
const DEFAULT_FILE_OPTIONS = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: false
};
var StorageFileApi = class extends BaseApiClient {
    constructor(url, headers = {}, bucketId, fetch$1){
        super(url, headers, fetch$1, "storage");
        this.bucketId = bucketId;
    }
    /**
	* Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
	*
	* @param method HTTP method.
	* @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
	* @param fileBody The body of the file to be stored in the bucket.
	*/ async uploadOrUpdate(method, path, fileBody, fileOptions) {
        var _this = this;
        return _this.handleOperation(async ()=>{
            let body;
            const options = _objectSpread2(_objectSpread2({}, DEFAULT_FILE_OPTIONS), fileOptions);
            let headers = _objectSpread2(_objectSpread2({}, _this.headers), method === "POST" && {
                "x-upsert": String(options.upsert)
            });
            const metadata = options.metadata;
            if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
                body = new FormData();
                body.append("cacheControl", options.cacheControl);
                if (metadata) body.append("metadata", _this.encodeMetadata(metadata));
                body.append("", fileBody);
            } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
                body = fileBody;
                if (!body.has("cacheControl")) body.append("cacheControl", options.cacheControl);
                if (metadata && !body.has("metadata")) body.append("metadata", _this.encodeMetadata(metadata));
            } else {
                body = fileBody;
                headers["cache-control"] = `max-age=${options.cacheControl}`;
                headers["content-type"] = options.contentType;
                if (metadata) headers["x-metadata"] = _this.toBase64(_this.encodeMetadata(metadata));
                if ((typeof ReadableStream !== "undefined" && body instanceof ReadableStream || body && typeof body === "object" && "pipe" in body && typeof body.pipe === "function") && !options.duplex) options.duplex = "half";
            }
            if (fileOptions === null || fileOptions === void 0 ? void 0 : fileOptions.headers) headers = _objectSpread2(_objectSpread2({}, headers), fileOptions.headers);
            const cleanPath = _this._removeEmptyFolders(path);
            const _path = _this._getFinalPath(cleanPath);
            const data = await (method == "PUT" ? put : post)(_this.fetch, `${_this.url}/object/${_path}`, body, _objectSpread2({
                headers
            }, (options === null || options === void 0 ? void 0 : options.duplex) ? {
                duplex: options.duplex
            } : {}));
            return {
                path: cleanPath,
                id: data.Id,
                fullPath: data.Key
            };
        });
    }
    /**
	* Uploads a file to an existing bucket.
	*
	* @category File Buckets
	* @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
	* @param fileBody The body of the file to be stored in the bucket.
	* @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
	* @returns Promise with response containing file path, id, and fullPath or error
	*
	* @example Upload file
	* ```js
	* const avatarFile = event.target.files[0]
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .upload('public/avatar1.png', avatarFile, {
	*     cacheControl: '3600',
	*     upsert: false
	*   })
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": {
	*     "path": "public/avatar1.png",
	*     "fullPath": "avatars/public/avatar1.png"
	*   },
	*   "error": null
	* }
	* ```
	*
	* @example Upload file using `ArrayBuffer` from base64 file data
	* ```js
	* import { decode } from 'base64-arraybuffer'
	*
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .upload('public/avatar1.png', decode('base64FileData'), {
	*     contentType: 'image/png'
	*   })
	* ```
	*/ async upload(path, fileBody, fileOptions) {
        return this.uploadOrUpdate("POST", path, fileBody, fileOptions);
    }
    /**
	* Upload a file with a token generated from `createSignedUploadUrl`.
	*
	* @category File Buckets
	* @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
	* @param token The token generated from `createSignedUploadUrl`
	* @param fileBody The body of the file to be stored in the bucket.
	* @param fileOptions HTTP headers (cacheControl, contentType, etc.).
	* **Note:** The `upsert` option has no effect here. To enable upsert behavior,
	* pass `{ upsert: true }` when calling `createSignedUploadUrl()` instead.
	* @returns Promise with response containing file path and fullPath or error
	*
	* @example Upload to a signed URL
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .uploadToSignedUrl('folder/cat.jpg', 'token-from-createSignedUploadUrl', file)
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": {
	*     "path": "folder/cat.jpg",
	*     "fullPath": "avatars/folder/cat.jpg"
	*   },
	*   "error": null
	* }
	* ```
	*/ async uploadToSignedUrl(path, token, fileBody, fileOptions) {
        var _this3 = this;
        const cleanPath = _this3._removeEmptyFolders(path);
        const _path = _this3._getFinalPath(cleanPath);
        const url = new URL(_this3.url + `/object/upload/sign/${_path}`);
        url.searchParams.set("token", token);
        return _this3.handleOperation(async ()=>{
            let body;
            const options = _objectSpread2({
                upsert: DEFAULT_FILE_OPTIONS.upsert
            }, fileOptions);
            const headers = _objectSpread2(_objectSpread2({}, _this3.headers), {
                "x-upsert": String(options.upsert)
            });
            if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
                body = new FormData();
                body.append("cacheControl", options.cacheControl);
                body.append("", fileBody);
            } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
                body = fileBody;
                body.append("cacheControl", options.cacheControl);
            } else {
                body = fileBody;
                headers["cache-control"] = `max-age=${options.cacheControl}`;
                headers["content-type"] = options.contentType;
            }
            return {
                path: cleanPath,
                fullPath: (await put(_this3.fetch, url.toString(), body, {
                    headers
                })).Key
            };
        });
    }
    /**
	* Creates a signed upload URL.
	* Signed upload URLs can be used to upload files to the bucket without further authentication.
	* They are valid for 2 hours.
	*
	* @category File Buckets
	* @param path The file path, including the current file name. For example `folder/image.png`.
	* @param options.upsert If set to true, allows the file to be overwritten if it already exists.
	* @returns Promise with response containing signed upload URL, token, and path or error
	*
	* @example Create Signed Upload URL
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .createSignedUploadUrl('folder/cat.jpg')
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": {
	*     "signedUrl": "https://example.supabase.co/storage/v1/object/upload/sign/avatars/folder/cat.jpg?token=<TOKEN>",
	*     "path": "folder/cat.jpg",
	*     "token": "<TOKEN>"
	*   },
	*   "error": null
	* }
	* ```
	*/ async createSignedUploadUrl(path, options) {
        var _this4 = this;
        return _this4.handleOperation(async ()=>{
            let _path = _this4._getFinalPath(path);
            const headers = _objectSpread2({}, _this4.headers);
            if (options === null || options === void 0 ? void 0 : options.upsert) headers["x-upsert"] = "true";
            const data = await post(_this4.fetch, `${_this4.url}/object/upload/sign/${_path}`, {}, {
                headers
            });
            const url = new URL(_this4.url + data.url);
            const token = url.searchParams.get("token");
            if (!token) throw new StorageError("No token returned by API");
            return {
                signedUrl: url.toString(),
                path,
                token
            };
        });
    }
    /**
	* Replaces an existing file at the specified path with a new one.
	*
	* @category File Buckets
	* @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
	* @param fileBody The body of the file to be stored in the bucket.
	* @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
	* @returns Promise with response containing file path, id, and fullPath or error
	*
	* @example Update file
	* ```js
	* const avatarFile = event.target.files[0]
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .update('public/avatar1.png', avatarFile, {
	*     cacheControl: '3600',
	*     upsert: true
	*   })
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": {
	*     "path": "public/avatar1.png",
	*     "fullPath": "avatars/public/avatar1.png"
	*   },
	*   "error": null
	* }
	* ```
	*
	* @example Update file using `ArrayBuffer` from base64 file data
	* ```js
	* import {decode} from 'base64-arraybuffer'
	*
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .update('public/avatar1.png', decode('base64FileData'), {
	*     contentType: 'image/png'
	*   })
	* ```
	*/ async update(path, fileBody, fileOptions) {
        return this.uploadOrUpdate("PUT", path, fileBody, fileOptions);
    }
    /**
	* Moves an existing file to a new path in the same bucket.
	*
	* @category File Buckets
	* @param fromPath The original file path, including the current file name. For example `folder/image.png`.
	* @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
	* @param options The destination options.
	* @returns Promise with response containing success message or error
	*
	* @example Move file
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .move('public/avatar1.png', 'private/avatar2.png')
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": {
	*     "message": "Successfully moved"
	*   },
	*   "error": null
	* }
	* ```
	*/ async move(fromPath, toPath, options) {
        var _this6 = this;
        return _this6.handleOperation(async ()=>{
            return await post(_this6.fetch, `${_this6.url}/object/move`, {
                bucketId: _this6.bucketId,
                sourceKey: fromPath,
                destinationKey: toPath,
                destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket
            }, {
                headers: _this6.headers
            });
        });
    }
    /**
	* Copies an existing file to a new path in the same bucket.
	*
	* @category File Buckets
	* @param fromPath The original file path, including the current file name. For example `folder/image.png`.
	* @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
	* @param options The destination options.
	* @returns Promise with response containing copied file path or error
	*
	* @example Copy file
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .copy('public/avatar1.png', 'private/avatar2.png')
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": {
	*     "path": "avatars/private/avatar2.png"
	*   },
	*   "error": null
	* }
	* ```
	*/ async copy(fromPath, toPath, options) {
        var _this7 = this;
        return _this7.handleOperation(async ()=>{
            return {
                path: (await post(_this7.fetch, `${_this7.url}/object/copy`, {
                    bucketId: _this7.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath,
                    destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket
                }, {
                    headers: _this7.headers
                })).Key
            };
        });
    }
    /**
	* Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
	*
	* @category File Buckets
	* @param path The file path, including the current file name. For example `folder/image.png`.
	* @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
	* @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
	* @param options.transform Transform the asset before serving it to the client.
	* @returns Promise with response containing signed URL or error
	*
	* @example Create Signed URL
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .createSignedUrl('folder/avatar1.png', 60)
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": {
	*     "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
	*   },
	*   "error": null
	* }
	* ```
	*
	* @example Create a signed URL for an asset with transformations
	* ```js
	* const { data } = await supabase
	*   .storage
	*   .from('avatars')
	*   .createSignedUrl('folder/avatar1.png', 60, {
	*     transform: {
	*       width: 100,
	*       height: 100,
	*     }
	*   })
	* ```
	*
	* @example Create a signed URL which triggers the download of the asset
	* ```js
	* const { data } = await supabase
	*   .storage
	*   .from('avatars')
	*   .createSignedUrl('folder/avatar1.png', 60, {
	*     download: true,
	*   })
	* ```
	*/ async createSignedUrl(path, expiresIn, options) {
        var _this8 = this;
        return _this8.handleOperation(async ()=>{
            let _path = _this8._getFinalPath(path);
            let data = await post(_this8.fetch, `${_this8.url}/object/sign/${_path}`, _objectSpread2({
                expiresIn
            }, (options === null || options === void 0 ? void 0 : options.transform) ? {
                transform: options.transform
            } : {}), {
                headers: _this8.headers
            });
            const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? "" : options.download}` : "";
            return {
                signedUrl: encodeURI(`${_this8.url}${data.signedURL}${downloadQueryParam}`)
            };
        });
    }
    /**
	* Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
	*
	* @category File Buckets
	* @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
	* @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
	* @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
	* @returns Promise with response containing array of objects with signedUrl, path, and error or error
	*
	* @example Create Signed URLs
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .createSignedUrls(['folder/avatar1.png', 'folder/avatar2.png'], 60)
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": [
	*     {
	*       "error": null,
	*       "path": "folder/avatar1.png",
	*       "signedURL": "/object/sign/avatars/folder/avatar1.png?token=<TOKEN>",
	*       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
	*     },
	*     {
	*       "error": null,
	*       "path": "folder/avatar2.png",
	*       "signedURL": "/object/sign/avatars/folder/avatar2.png?token=<TOKEN>",
	*       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar2.png?token=<TOKEN>"
	*     }
	*   ],
	*   "error": null
	* }
	* ```
	*/ async createSignedUrls(paths, expiresIn, options) {
        var _this9 = this;
        return _this9.handleOperation(async ()=>{
            const data = await post(_this9.fetch, `${_this9.url}/object/sign/${_this9.bucketId}`, {
                expiresIn,
                paths
            }, {
                headers: _this9.headers
            });
            const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? "" : options.download}` : "";
            return data.map((datum)=>_objectSpread2(_objectSpread2({}, datum), {}, {
                    signedUrl: datum.signedURL ? encodeURI(`${_this9.url}${datum.signedURL}${downloadQueryParam}`) : null
                }));
        });
    }
    /**
	* Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
	*
	* @category File Buckets
	* @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
	* @param options.transform Transform the asset before serving it to the client.
	* @param parameters Additional fetch parameters like signal for cancellation. Supports standard fetch options including cache control.
	* @returns BlobDownloadBuilder instance for downloading the file
	*
	* @example Download file
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .download('folder/avatar1.png')
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": <BLOB>,
	*   "error": null
	* }
	* ```
	*
	* @example Download file with transformations
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .download('folder/avatar1.png', {
	*     transform: {
	*       width: 100,
	*       height: 100,
	*       quality: 80
	*     }
	*   })
	* ```
	*
	* @example Download with cache control (useful in Edge Functions)
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .download('folder/avatar1.png', {}, { cache: 'no-store' })
	* ```
	*
	* @example Download with abort signal
	* ```js
	* const controller = new AbortController()
	* setTimeout(() => controller.abort(), 5000)
	*
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .download('folder/avatar1.png', {}, { signal: controller.signal })
	* ```
	*/ download(path, options, parameters) {
        const renderPath = typeof (options === null || options === void 0 ? void 0 : options.transform) !== "undefined" ? "render/image/authenticated" : "object";
        const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
        const queryString = transformationQuery ? `?${transformationQuery}` : "";
        const _path = this._getFinalPath(path);
        const downloadFn = ()=>get(this.fetch, `${this.url}/${renderPath}/${_path}${queryString}`, {
                headers: this.headers,
                noResolveJson: true
            }, parameters);
        return new BlobDownloadBuilder(downloadFn, this.shouldThrowOnError);
    }
    /**
	* Retrieves the details of an existing file.
	*
	* @category File Buckets
	* @param path The file path, including the file name. For example `folder/image.png`.
	* @returns Promise with response containing file metadata or error
	*
	* @example Get file info
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .info('folder/avatar1.png')
	* ```
	*/ async info(path) {
        var _this10 = this;
        const _path = _this10._getFinalPath(path);
        return _this10.handleOperation(async ()=>{
            return recursiveToCamel(await get(_this10.fetch, `${_this10.url}/object/info/${_path}`, {
                headers: _this10.headers
            }));
        });
    }
    /**
	* Checks the existence of a file.
	*
	* @category File Buckets
	* @param path The file path, including the file name. For example `folder/image.png`.
	* @returns Promise with response containing boolean indicating file existence or error
	*
	* @example Check file existence
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .exists('folder/avatar1.png')
	* ```
	*/ async exists(path) {
        var _this11 = this;
        const _path = _this11._getFinalPath(path);
        try {
            await head(_this11.fetch, `${_this11.url}/object/${_path}`, {
                headers: _this11.headers
            });
            return {
                data: true,
                error: null
            };
        } catch (error) {
            if (_this11.shouldThrowOnError) throw error;
            if (isStorageError(error) && error instanceof StorageUnknownError) {
                const originalError = error.originalError;
                if ([
                    400,
                    404
                ].includes(originalError === null || originalError === void 0 ? void 0 : originalError.status)) return {
                    data: false,
                    error
                };
            }
            throw error;
        }
    }
    /**
	* A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
	* This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
	*
	* @category File Buckets
	* @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
	* @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
	* @param options.transform Transform the asset before serving it to the client.
	* @returns Object with public URL
	*
	* @example Returns the URL for an asset in a public bucket
	* ```js
	* const { data } = supabase
	*   .storage
	*   .from('public-bucket')
	*   .getPublicUrl('folder/avatar1.png')
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": {
	*     "publicUrl": "https://example.supabase.co/storage/v1/object/public/public-bucket/folder/avatar1.png"
	*   }
	* }
	* ```
	*
	* @example Returns the URL for an asset in a public bucket with transformations
	* ```js
	* const { data } = supabase
	*   .storage
	*   .from('public-bucket')
	*   .getPublicUrl('folder/avatar1.png', {
	*     transform: {
	*       width: 100,
	*       height: 100,
	*     }
	*   })
	* ```
	*
	* @example Returns the URL which triggers the download of an asset in a public bucket
	* ```js
	* const { data } = supabase
	*   .storage
	*   .from('public-bucket')
	*   .getPublicUrl('folder/avatar1.png', {
	*     download: true,
	*   })
	* ```
	*/ getPublicUrl(path, options) {
        const _path = this._getFinalPath(path);
        const _queryString = [];
        const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `download=${options.download === true ? "" : options.download}` : "";
        if (downloadQueryParam !== "") _queryString.push(downloadQueryParam);
        const renderPath = typeof (options === null || options === void 0 ? void 0 : options.transform) !== "undefined" ? "render/image" : "object";
        const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
        if (transformationQuery !== "") _queryString.push(transformationQuery);
        let queryString = _queryString.join("&");
        if (queryString !== "") queryString = `?${queryString}`;
        return {
            data: {
                publicUrl: encodeURI(`${this.url}/${renderPath}/public/${_path}${queryString}`)
            }
        };
    }
    /**
	* Deletes files within the same bucket
	*
	* @category File Buckets
	* @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
	* @returns Promise with response containing array of deleted file objects or error
	*
	* @example Delete file
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .remove(['folder/avatar1.png'])
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": [],
	*   "error": null
	* }
	* ```
	*/ async remove(paths) {
        var _this12 = this;
        return _this12.handleOperation(async ()=>{
            return await remove(_this12.fetch, `${_this12.url}/object/${_this12.bucketId}`, {
                prefixes: paths
            }, {
                headers: _this12.headers
            });
        });
    }
    /**
	* Get file metadata
	* @param id the file id to retrieve metadata
	*/ /**
	* Update file metadata
	* @param id the file id to update metadata
	* @param meta the new file metadata
	*/ /**
	* Lists all the files and folders within a path of the bucket.
	*
	* @category File Buckets
	* @param path The folder path.
	* @param options Search options including limit (defaults to 100), offset, sortBy, and search
	* @param parameters Optional fetch parameters including signal for cancellation
	* @returns Promise with response containing array of files or error
	*
	* @example List files in a bucket
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .list('folder', {
	*     limit: 100,
	*     offset: 0,
	*     sortBy: { column: 'name', order: 'asc' },
	*   })
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": [
	*     {
	*       "name": "avatar1.png",
	*       "id": "e668cf7f-821b-4a2f-9dce-7dfa5dd1cfd2",
	*       "updated_at": "2024-05-22T23:06:05.580Z",
	*       "created_at": "2024-05-22T23:04:34.443Z",
	*       "last_accessed_at": "2024-05-22T23:04:34.443Z",
	*       "metadata": {
	*         "eTag": "\"c5e8c553235d9af30ef4f6e280790b92\"",
	*         "size": 32175,
	*         "mimetype": "image/png",
	*         "cacheControl": "max-age=3600",
	*         "lastModified": "2024-05-22T23:06:05.574Z",
	*         "contentLength": 32175,
	*         "httpStatusCode": 200
	*       }
	*     }
	*   ],
	*   "error": null
	* }
	* ```
	*
	* @example Search files in a bucket
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .from('avatars')
	*   .list('folder', {
	*     limit: 100,
	*     offset: 0,
	*     sortBy: { column: 'name', order: 'asc' },
	*     search: 'jon'
	*   })
	* ```
	*/ async list(path, options, parameters) {
        var _this13 = this;
        return _this13.handleOperation(async ()=>{
            const body = _objectSpread2(_objectSpread2(_objectSpread2({}, DEFAULT_SEARCH_OPTIONS), options), {}, {
                prefix: path || ""
            });
            return await post(_this13.fetch, `${_this13.url}/object/list/${_this13.bucketId}`, body, {
                headers: _this13.headers
            }, parameters);
        });
    }
    /**
	* @experimental this method signature might change in the future
	*
	* @category File Buckets
	* @param options search options
	* @param parameters
	*/ async listV2(options, parameters) {
        var _this14 = this;
        return _this14.handleOperation(async ()=>{
            const body = _objectSpread2({}, options);
            return await post(_this14.fetch, `${_this14.url}/object/list-v2/${_this14.bucketId}`, body, {
                headers: _this14.headers
            }, parameters);
        });
    }
    encodeMetadata(metadata) {
        return JSON.stringify(metadata);
    }
    toBase64(data) {
        if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"] !== "undefined") return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(data).toString("base64");
        return btoa(data);
    }
    _getFinalPath(path) {
        return `${this.bucketId}/${path.replace(/^\/+/, "")}`;
    }
    _removeEmptyFolders(path) {
        return path.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
    }
    transformOptsToQueryString(transform) {
        const params = [];
        if (transform.width) params.push(`width=${transform.width}`);
        if (transform.height) params.push(`height=${transform.height}`);
        if (transform.resize) params.push(`resize=${transform.resize}`);
        if (transform.format) params.push(`format=${transform.format}`);
        if (transform.quality) params.push(`quality=${transform.quality}`);
        return params.join("&");
    }
};
//#endregion
//#region src/lib/version.ts
const version = "2.98.0";
//#endregion
//#region src/lib/constants.ts
const DEFAULT_HEADERS = {
    "X-Client-Info": `storage-js/${version}`
};
//#endregion
//#region src/packages/StorageBucketApi.ts
var StorageBucketApi = class extends BaseApiClient {
    constructor(url, headers = {}, fetch$1, opts){
        const baseUrl = new URL(url);
        if (opts === null || opts === void 0 ? void 0 : opts.useNewHostname) {
            if (/supabase\.(co|in|red)$/.test(baseUrl.hostname) && !baseUrl.hostname.includes("storage.supabase.")) baseUrl.hostname = baseUrl.hostname.replace("supabase.", "storage.supabase.");
        }
        const finalUrl = baseUrl.href.replace(/\/$/, "");
        const finalHeaders = _objectSpread2(_objectSpread2({}, DEFAULT_HEADERS), headers);
        super(finalUrl, finalHeaders, fetch$1, "storage");
    }
    /**
	* Retrieves the details of all Storage buckets within an existing project.
	*
	* @category File Buckets
	* @param options Query parameters for listing buckets
	* @param options.limit Maximum number of buckets to return
	* @param options.offset Number of buckets to skip
	* @param options.sortColumn Column to sort by ('id', 'name', 'created_at', 'updated_at')
	* @param options.sortOrder Sort order ('asc' or 'desc')
	* @param options.search Search term to filter bucket names
	* @returns Promise with response containing array of buckets or error
	*
	* @example List buckets
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .listBuckets()
	* ```
	*
	* @example List buckets with options
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .listBuckets({
	*     limit: 10,
	*     offset: 0,
	*     sortColumn: 'created_at',
	*     sortOrder: 'desc',
	*     search: 'prod'
	*   })
	* ```
	*/ async listBuckets(options) {
        var _this = this;
        return _this.handleOperation(async ()=>{
            const queryString = _this.listBucketOptionsToQueryString(options);
            return await get(_this.fetch, `${_this.url}/bucket${queryString}`, {
                headers: _this.headers
            });
        });
    }
    /**
	* Retrieves the details of an existing Storage bucket.
	*
	* @category File Buckets
	* @param id The unique identifier of the bucket you would like to retrieve.
	* @returns Promise with response containing bucket details or error
	*
	* @example Get bucket
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .getBucket('avatars')
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": {
	*     "id": "avatars",
	*     "name": "avatars",
	*     "owner": "",
	*     "public": false,
	*     "file_size_limit": 1024,
	*     "allowed_mime_types": [
	*       "image/png"
	*     ],
	*     "created_at": "2024-05-22T22:26:05.100Z",
	*     "updated_at": "2024-05-22T22:26:05.100Z"
	*   },
	*   "error": null
	* }
	* ```
	*/ async getBucket(id) {
        var _this2 = this;
        return _this2.handleOperation(async ()=>{
            return await get(_this2.fetch, `${_this2.url}/bucket/${id}`, {
                headers: _this2.headers
            });
        });
    }
    /**
	* Creates a new Storage bucket
	*
	* @category File Buckets
	* @param id A unique identifier for the bucket you are creating.
	* @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
	* @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
	* The global file size limit takes precedence over this value.
	* The default value is null, which doesn't set a per bucket file size limit.
	* @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
	* The default value is null, which allows files with all mime types to be uploaded.
	* Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
	* @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
	*   - default bucket type is `STANDARD`
	* @returns Promise with response containing newly created bucket name or error
	*
	* @example Create bucket
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .createBucket('avatars', {
	*     public: false,
	*     allowedMimeTypes: ['image/png'],
	*     fileSizeLimit: 1024
	*   })
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": {
	*     "name": "avatars"
	*   },
	*   "error": null
	* }
	* ```
	*/ async createBucket(id, options = {
        public: false
    }) {
        var _this3 = this;
        return _this3.handleOperation(async ()=>{
            return await post(_this3.fetch, `${_this3.url}/bucket`, {
                id,
                name: id,
                type: options.type,
                public: options.public,
                file_size_limit: options.fileSizeLimit,
                allowed_mime_types: options.allowedMimeTypes
            }, {
                headers: _this3.headers
            });
        });
    }
    /**
	* Updates a Storage bucket
	*
	* @category File Buckets
	* @param id A unique identifier for the bucket you are updating.
	* @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
	* @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
	* The global file size limit takes precedence over this value.
	* The default value is null, which doesn't set a per bucket file size limit.
	* @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
	* The default value is null, which allows files with all mime types to be uploaded.
	* Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
	* @returns Promise with response containing success message or error
	*
	* @example Update bucket
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .updateBucket('avatars', {
	*     public: false,
	*     allowedMimeTypes: ['image/png'],
	*     fileSizeLimit: 1024
	*   })
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": {
	*     "message": "Successfully updated"
	*   },
	*   "error": null
	* }
	* ```
	*/ async updateBucket(id, options) {
        var _this4 = this;
        return _this4.handleOperation(async ()=>{
            return await put(_this4.fetch, `${_this4.url}/bucket/${id}`, {
                id,
                name: id,
                public: options.public,
                file_size_limit: options.fileSizeLimit,
                allowed_mime_types: options.allowedMimeTypes
            }, {
                headers: _this4.headers
            });
        });
    }
    /**
	* Removes all objects inside a single bucket.
	*
	* @category File Buckets
	* @param id The unique identifier of the bucket you would like to empty.
	* @returns Promise with success message or error
	*
	* @example Empty bucket
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .emptyBucket('avatars')
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": {
	*     "message": "Successfully emptied"
	*   },
	*   "error": null
	* }
	* ```
	*/ async emptyBucket(id) {
        var _this5 = this;
        return _this5.handleOperation(async ()=>{
            return await post(_this5.fetch, `${_this5.url}/bucket/${id}/empty`, {}, {
                headers: _this5.headers
            });
        });
    }
    /**
	* Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
	* You must first `empty()` the bucket.
	*
	* @category File Buckets
	* @param id The unique identifier of the bucket you would like to delete.
	* @returns Promise with success message or error
	*
	* @example Delete bucket
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .deleteBucket('avatars')
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": {
	*     "message": "Successfully deleted"
	*   },
	*   "error": null
	* }
	* ```
	*/ async deleteBucket(id) {
        var _this6 = this;
        return _this6.handleOperation(async ()=>{
            return await remove(_this6.fetch, `${_this6.url}/bucket/${id}`, {}, {
                headers: _this6.headers
            });
        });
    }
    listBucketOptionsToQueryString(options) {
        const params = {};
        if (options) {
            if ("limit" in options) params.limit = String(options.limit);
            if ("offset" in options) params.offset = String(options.offset);
            if (options.search) params.search = options.search;
            if (options.sortColumn) params.sortColumn = options.sortColumn;
            if (options.sortOrder) params.sortOrder = options.sortOrder;
        }
        return Object.keys(params).length > 0 ? "?" + new URLSearchParams(params).toString() : "";
    }
};
//#endregion
//#region src/packages/StorageAnalyticsClient.ts
/**
* Client class for managing Analytics Buckets using Iceberg tables
* Provides methods for creating, listing, and deleting analytics buckets
*/ var StorageAnalyticsClient = class extends BaseApiClient {
    /**
	* @alpha
	*
	* Creates a new StorageAnalyticsClient instance
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Analytics Buckets
	* @param url - The base URL for the storage API
	* @param headers - HTTP headers to include in requests
	* @param fetch - Optional custom fetch implementation
	*
	* @example
	* ```typescript
	* const client = new StorageAnalyticsClient(url, headers)
	* ```
	*/ constructor(url, headers = {}, fetch$1){
        const finalUrl = url.replace(/\/$/, "");
        const finalHeaders = _objectSpread2(_objectSpread2({}, DEFAULT_HEADERS), headers);
        super(finalUrl, finalHeaders, fetch$1, "storage");
    }
    /**
	* @alpha
	*
	* Creates a new analytics bucket using Iceberg tables
	* Analytics buckets are optimized for analytical queries and data processing
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Analytics Buckets
	* @param name A unique name for the bucket you are creating
	* @returns Promise with response containing newly created analytics bucket or error
	*
	* @example Create analytics bucket
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .analytics
	*   .createBucket('analytics-data')
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": {
	*     "name": "analytics-data",
	*     "type": "ANALYTICS",
	*     "format": "iceberg",
	*     "created_at": "2024-05-22T22:26:05.100Z",
	*     "updated_at": "2024-05-22T22:26:05.100Z"
	*   },
	*   "error": null
	* }
	* ```
	*/ async createBucket(name) {
        var _this = this;
        return _this.handleOperation(async ()=>{
            return await post(_this.fetch, `${_this.url}/bucket`, {
                name
            }, {
                headers: _this.headers
            });
        });
    }
    /**
	* @alpha
	*
	* Retrieves the details of all Analytics Storage buckets within an existing project
	* Only returns buckets of type 'ANALYTICS'
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Analytics Buckets
	* @param options Query parameters for listing buckets
	* @param options.limit Maximum number of buckets to return
	* @param options.offset Number of buckets to skip
	* @param options.sortColumn Column to sort by ('name', 'created_at', 'updated_at')
	* @param options.sortOrder Sort order ('asc' or 'desc')
	* @param options.search Search term to filter bucket names
	* @returns Promise with response containing array of analytics buckets or error
	*
	* @example List analytics buckets
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .analytics
	*   .listBuckets({
	*     limit: 10,
	*     offset: 0,
	*     sortColumn: 'created_at',
	*     sortOrder: 'desc'
	*   })
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": [
	*     {
	*       "name": "analytics-data",
	*       "type": "ANALYTICS",
	*       "format": "iceberg",
	*       "created_at": "2024-05-22T22:26:05.100Z",
	*       "updated_at": "2024-05-22T22:26:05.100Z"
	*     }
	*   ],
	*   "error": null
	* }
	* ```
	*/ async listBuckets(options) {
        var _this2 = this;
        return _this2.handleOperation(async ()=>{
            const queryParams = new URLSearchParams();
            if ((options === null || options === void 0 ? void 0 : options.limit) !== void 0) queryParams.set("limit", options.limit.toString());
            if ((options === null || options === void 0 ? void 0 : options.offset) !== void 0) queryParams.set("offset", options.offset.toString());
            if (options === null || options === void 0 ? void 0 : options.sortColumn) queryParams.set("sortColumn", options.sortColumn);
            if (options === null || options === void 0 ? void 0 : options.sortOrder) queryParams.set("sortOrder", options.sortOrder);
            if (options === null || options === void 0 ? void 0 : options.search) queryParams.set("search", options.search);
            const queryString = queryParams.toString();
            const url = queryString ? `${_this2.url}/bucket?${queryString}` : `${_this2.url}/bucket`;
            return await get(_this2.fetch, url, {
                headers: _this2.headers
            });
        });
    }
    /**
	* @alpha
	*
	* Deletes an existing analytics bucket
	* A bucket can't be deleted with existing objects inside it
	* You must first empty the bucket before deletion
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Analytics Buckets
	* @param bucketName The unique identifier of the bucket you would like to delete
	* @returns Promise with response containing success message or error
	*
	* @example Delete analytics bucket
	* ```js
	* const { data, error } = await supabase
	*   .storage
	*   .analytics
	*   .deleteBucket('analytics-data')
	* ```
	*
	* Response:
	* ```json
	* {
	*   "data": {
	*     "message": "Successfully deleted"
	*   },
	*   "error": null
	* }
	* ```
	*/ async deleteBucket(bucketName) {
        var _this3 = this;
        return _this3.handleOperation(async ()=>{
            return await remove(_this3.fetch, `${_this3.url}/bucket/${bucketName}`, {}, {
                headers: _this3.headers
            });
        });
    }
    /**
	* @alpha
	*
	* Get an Iceberg REST Catalog client configured for a specific analytics bucket
	* Use this to perform advanced table and namespace operations within the bucket
	* The returned client provides full access to the Apache Iceberg REST Catalog API
	* with the Supabase `{ data, error }` pattern for consistent error handling on all operations.
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Analytics Buckets
	* @param bucketName - The name of the analytics bucket (warehouse) to connect to
	* @returns The wrapped Iceberg catalog client
	* @throws {StorageError} If the bucket name is invalid
	*
	* @example Get catalog and create table
	* ```js
	* // First, create an analytics bucket
	* const { data: bucket, error: bucketError } = await supabase
	*   .storage
	*   .analytics
	*   .createBucket('analytics-data')
	*
	* // Get the Iceberg catalog for that bucket
	* const catalog = supabase.storage.analytics.from('analytics-data')
	*
	* // Create a namespace
	* const { error: nsError } = await catalog.createNamespace({ namespace: ['default'] })
	*
	* // Create a table with schema
	* const { data: tableMetadata, error: tableError } = await catalog.createTable(
	*   { namespace: ['default'] },
	*   {
	*     name: 'events',
	*     schema: {
	*       type: 'struct',
	*       fields: [
	*         { id: 1, name: 'id', type: 'long', required: true },
	*         { id: 2, name: 'timestamp', type: 'timestamp', required: true },
	*         { id: 3, name: 'user_id', type: 'string', required: false }
	*       ],
	*       'schema-id': 0,
	*       'identifier-field-ids': [1]
	*     },
	*     'partition-spec': {
	*       'spec-id': 0,
	*       fields: []
	*     },
	*     'write-order': {
	*       'order-id': 0,
	*       fields: []
	*     },
	*     properties: {
	*       'write.format.default': 'parquet'
	*     }
	*   }
	* )
	* ```
	*
	* @example List tables in namespace
	* ```js
	* const catalog = supabase.storage.analytics.from('analytics-data')
	*
	* // List all tables in the default namespace
	* const { data: tables, error: listError } = await catalog.listTables({ namespace: ['default'] })
	* if (listError) {
	*   if (listError.isNotFound()) {
	*     console.log('Namespace not found')
	*   }
	*   return
	* }
	* console.log(tables) // [{ namespace: ['default'], name: 'events' }]
	* ```
	*
	* @example Working with namespaces
	* ```js
	* const catalog = supabase.storage.analytics.from('analytics-data')
	*
	* // List all namespaces
	* const { data: namespaces } = await catalog.listNamespaces()
	*
	* // Create namespace with properties
	* await catalog.createNamespace(
	*   { namespace: ['production'] },
	*   { properties: { owner: 'data-team', env: 'prod' } }
	* )
	* ```
	*
	* @example Cleanup operations
	* ```js
	* const catalog = supabase.storage.analytics.from('analytics-data')
	*
	* // Drop table with purge option (removes all data)
	* const { error: dropError } = await catalog.dropTable(
	*   { namespace: ['default'], name: 'events' },
	*   { purge: true }
	* )
	*
	* if (dropError?.isNotFound()) {
	*   console.log('Table does not exist')
	* }
	*
	* // Drop namespace (must be empty)
	* await catalog.dropNamespace({ namespace: ['default'] })
	* ```
	*
	* @remarks
	* This method provides a bridge between Supabase's bucket management and the standard
	* Apache Iceberg REST Catalog API. The bucket name maps to the Iceberg warehouse parameter.
	* All authentication and configuration is handled automatically using your Supabase credentials.
	*
	* **Error Handling**: Invalid bucket names throw immediately. All catalog
	* operations return `{ data, error }` where errors are `IcebergError` instances from iceberg-js.
	* Use helper methods like `error.isNotFound()` or check `error.status` for specific error handling.
	* Use `.throwOnError()` on the analytics client if you prefer exceptions for catalog operations.
	*
	* **Cleanup Operations**: When using `dropTable`, the `purge: true` option permanently
	* deletes all table data. Without it, the table is marked as deleted but data remains.
	*
	* **Library Dependency**: The returned catalog wraps `IcebergRestCatalog` from iceberg-js.
	* For complete API documentation and advanced usage, refer to the
	* [iceberg-js documentation](https://supabase.github.io/iceberg-js/).
	*/ from(bucketName) {
        var _this4 = this;
        if (!isValidBucketName(bucketName)) throw new StorageError("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
        const catalog = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$iceberg$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcebergRestCatalog"]({
            baseUrl: this.url,
            catalogName: bucketName,
            auth: {
                type: "custom",
                getHeaders: async ()=>_this4.headers
            },
            fetch: this.fetch
        });
        const shouldThrowOnError = this.shouldThrowOnError;
        return new Proxy(catalog, {
            get (target, prop) {
                const value = target[prop];
                if (typeof value !== "function") return value;
                return async (...args)=>{
                    try {
                        return {
                            data: await value.apply(target, args),
                            error: null
                        };
                    } catch (error) {
                        if (shouldThrowOnError) throw error;
                        return {
                            data: null,
                            error
                        };
                    }
                };
            }
        });
    }
};
//#endregion
//#region src/packages/VectorIndexApi.ts
/**
* @hidden
* Base implementation for vector index operations.
* Use {@link VectorBucketScope} via `supabase.storage.vectors.from('bucket')` instead.
*/ var VectorIndexApi = class extends BaseApiClient {
    /** Creates a new VectorIndexApi instance */ constructor(url, headers = {}, fetch$1){
        const finalUrl = url.replace(/\/$/, "");
        const finalHeaders = _objectSpread2(_objectSpread2({}, DEFAULT_HEADERS), {}, {
            "Content-Type": "application/json"
        }, headers);
        super(finalUrl, finalHeaders, fetch$1, "vectors");
    }
    /** Creates a new vector index within a bucket */ async createIndex(options) {
        var _this = this;
        return _this.handleOperation(async ()=>{
            return await vectorsApi.post(_this.fetch, `${_this.url}/CreateIndex`, options, {
                headers: _this.headers
            }) || {};
        });
    }
    /** Retrieves metadata for a specific vector index */ async getIndex(vectorBucketName, indexName) {
        var _this2 = this;
        return _this2.handleOperation(async ()=>{
            return await vectorsApi.post(_this2.fetch, `${_this2.url}/GetIndex`, {
                vectorBucketName,
                indexName
            }, {
                headers: _this2.headers
            });
        });
    }
    /** Lists vector indexes within a bucket with optional filtering and pagination */ async listIndexes(options) {
        var _this3 = this;
        return _this3.handleOperation(async ()=>{
            return await vectorsApi.post(_this3.fetch, `${_this3.url}/ListIndexes`, options, {
                headers: _this3.headers
            });
        });
    }
    /** Deletes a vector index and all its data */ async deleteIndex(vectorBucketName, indexName) {
        var _this4 = this;
        return _this4.handleOperation(async ()=>{
            return await vectorsApi.post(_this4.fetch, `${_this4.url}/DeleteIndex`, {
                vectorBucketName,
                indexName
            }, {
                headers: _this4.headers
            }) || {};
        });
    }
};
//#endregion
//#region src/packages/VectorDataApi.ts
/**
* @hidden
* Base implementation for vector data operations.
* Use {@link VectorIndexScope} via `supabase.storage.vectors.from('bucket').index('idx')` instead.
*/ var VectorDataApi = class extends BaseApiClient {
    /** Creates a new VectorDataApi instance */ constructor(url, headers = {}, fetch$1){
        const finalUrl = url.replace(/\/$/, "");
        const finalHeaders = _objectSpread2(_objectSpread2({}, DEFAULT_HEADERS), {}, {
            "Content-Type": "application/json"
        }, headers);
        super(finalUrl, finalHeaders, fetch$1, "vectors");
    }
    /** Inserts or updates vectors in batch (1-500 per request) */ async putVectors(options) {
        var _this = this;
        if (options.vectors.length < 1 || options.vectors.length > 500) throw new Error("Vector batch size must be between 1 and 500 items");
        return _this.handleOperation(async ()=>{
            return await vectorsApi.post(_this.fetch, `${_this.url}/PutVectors`, options, {
                headers: _this.headers
            }) || {};
        });
    }
    /** Retrieves vectors by their keys in batch */ async getVectors(options) {
        var _this2 = this;
        return _this2.handleOperation(async ()=>{
            return await vectorsApi.post(_this2.fetch, `${_this2.url}/GetVectors`, options, {
                headers: _this2.headers
            });
        });
    }
    /** Lists vectors in an index with pagination */ async listVectors(options) {
        var _this3 = this;
        if (options.segmentCount !== void 0) {
            if (options.segmentCount < 1 || options.segmentCount > 16) throw new Error("segmentCount must be between 1 and 16");
            if (options.segmentIndex !== void 0) {
                if (options.segmentIndex < 0 || options.segmentIndex >= options.segmentCount) throw new Error(`segmentIndex must be between 0 and ${options.segmentCount - 1}`);
            }
        }
        return _this3.handleOperation(async ()=>{
            return await vectorsApi.post(_this3.fetch, `${_this3.url}/ListVectors`, options, {
                headers: _this3.headers
            });
        });
    }
    /** Queries for similar vectors using approximate nearest neighbor search */ async queryVectors(options) {
        var _this4 = this;
        return _this4.handleOperation(async ()=>{
            return await vectorsApi.post(_this4.fetch, `${_this4.url}/QueryVectors`, options, {
                headers: _this4.headers
            });
        });
    }
    /** Deletes vectors by their keys in batch (1-500 per request) */ async deleteVectors(options) {
        var _this5 = this;
        if (options.keys.length < 1 || options.keys.length > 500) throw new Error("Keys batch size must be between 1 and 500 items");
        return _this5.handleOperation(async ()=>{
            return await vectorsApi.post(_this5.fetch, `${_this5.url}/DeleteVectors`, options, {
                headers: _this5.headers
            }) || {};
        });
    }
};
//#endregion
//#region src/packages/VectorBucketApi.ts
/**
* @hidden
* Base implementation for vector bucket operations.
* Use {@link StorageVectorsClient} via `supabase.storage.vectors` instead.
*/ var VectorBucketApi = class extends BaseApiClient {
    /** Creates a new VectorBucketApi instance */ constructor(url, headers = {}, fetch$1){
        const finalUrl = url.replace(/\/$/, "");
        const finalHeaders = _objectSpread2(_objectSpread2({}, DEFAULT_HEADERS), {}, {
            "Content-Type": "application/json"
        }, headers);
        super(finalUrl, finalHeaders, fetch$1, "vectors");
    }
    /** Creates a new vector bucket */ async createBucket(vectorBucketName) {
        var _this = this;
        return _this.handleOperation(async ()=>{
            return await vectorsApi.post(_this.fetch, `${_this.url}/CreateVectorBucket`, {
                vectorBucketName
            }, {
                headers: _this.headers
            }) || {};
        });
    }
    /** Retrieves metadata for a specific vector bucket */ async getBucket(vectorBucketName) {
        var _this2 = this;
        return _this2.handleOperation(async ()=>{
            return await vectorsApi.post(_this2.fetch, `${_this2.url}/GetVectorBucket`, {
                vectorBucketName
            }, {
                headers: _this2.headers
            });
        });
    }
    /** Lists vector buckets with optional filtering and pagination */ async listBuckets(options = {}) {
        var _this3 = this;
        return _this3.handleOperation(async ()=>{
            return await vectorsApi.post(_this3.fetch, `${_this3.url}/ListVectorBuckets`, options, {
                headers: _this3.headers
            });
        });
    }
    /** Deletes a vector bucket (must be empty first) */ async deleteBucket(vectorBucketName) {
        var _this4 = this;
        return _this4.handleOperation(async ()=>{
            return await vectorsApi.post(_this4.fetch, `${_this4.url}/DeleteVectorBucket`, {
                vectorBucketName
            }, {
                headers: _this4.headers
            }) || {};
        });
    }
};
//#endregion
//#region src/packages/StorageVectorsClient.ts
/**
*
* @alpha
*
* Main client for interacting with S3 Vectors API
* Provides access to bucket, index, and vector data operations
*
* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
*
* **Usage Patterns:**
*
* ```typescript
* const { data, error } = await supabase
*  .storage
*  .vectors
*  .createBucket('embeddings-prod')
*
* // Access index operations via buckets
* const bucket = supabase.storage.vectors.from('embeddings-prod')
* await bucket.createIndex({
*   indexName: 'documents',
*   dataType: 'float32',
*   dimension: 1536,
*   distanceMetric: 'cosine'
* })
*
* // Access vector operations via index
* const index = bucket.index('documents')
* await index.putVectors({
*   vectors: [
*     { key: 'doc-1', data: { float32: [...] }, metadata: { title: 'Intro' } }
*   ]
* })
*
* // Query similar vectors
* const { data } = await index.queryVectors({
*   queryVector: { float32: [...] },
*   topK: 5,
*   returnDistance: true
* })
* ```
*/ var StorageVectorsClient = class extends VectorBucketApi {
    /**
	* @alpha
	*
	* Creates a StorageVectorsClient that can manage buckets, indexes, and vectors.
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @param url - Base URL of the Storage Vectors REST API.
	* @param options.headers - Optional headers (for example `Authorization`) applied to every request.
	* @param options.fetch - Optional custom `fetch` implementation for non-browser runtimes.
	*
	* @example
	* ```typescript
	* const client = new StorageVectorsClient(url, options)
	* ```
	*/ constructor(url, options = {}){
        super(url, options.headers || {}, options.fetch);
    }
    /**
	*
	* @alpha
	*
	* Access operations for a specific vector bucket
	* Returns a scoped client for index and vector operations within the bucket
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @param vectorBucketName - Name of the vector bucket
	* @returns Bucket-scoped client with index and vector operations
	*
	* @example
	* ```typescript
	* const bucket = supabase.storage.vectors.from('embeddings-prod')
	* ```
	*/ from(vectorBucketName) {
        return new VectorBucketScope(this.url, this.headers, vectorBucketName, this.fetch);
    }
    /**
	*
	* @alpha
	*
	* Creates a new vector bucket
	* Vector buckets are containers for vector indexes and their data
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @param vectorBucketName - Unique name for the vector bucket
	* @returns Promise with empty response on success or error
	*
	* @example
	* ```typescript
	* const { data, error } = await supabase
	*   .storage
	*   .vectors
	*   .createBucket('embeddings-prod')
	* ```
	*/ async createBucket(vectorBucketName) {
        var _superprop_getCreateBucket = ()=>super.createBucket, _this = this;
        return _superprop_getCreateBucket().call(_this, vectorBucketName);
    }
    /**
	*
	* @alpha
	*
	* Retrieves metadata for a specific vector bucket
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @param vectorBucketName - Name of the vector bucket
	* @returns Promise with bucket metadata or error
	*
	* @example
	* ```typescript
	* const { data, error } = await supabase
	*   .storage
	*   .vectors
	*   .getBucket('embeddings-prod')
	*
	* console.log('Bucket created:', data?.vectorBucket.creationTime)
	* ```
	*/ async getBucket(vectorBucketName) {
        var _superprop_getGetBucket = ()=>super.getBucket, _this2 = this;
        return _superprop_getGetBucket().call(_this2, vectorBucketName);
    }
    /**
	*
	* @alpha
	*
	* Lists all vector buckets with optional filtering and pagination
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @param options - Optional filters (prefix, maxResults, nextToken)
	* @returns Promise with list of buckets or error
	*
	* @example
	* ```typescript
	* const { data, error } = await supabase
	*   .storage
	*   .vectors
	*   .listBuckets({ prefix: 'embeddings-' })
	*
	* data?.vectorBuckets.forEach(bucket => {
	*   console.log(bucket.vectorBucketName)
	* })
	* ```
	*/ async listBuckets(options = {}) {
        var _superprop_getListBuckets = ()=>super.listBuckets, _this3 = this;
        return _superprop_getListBuckets().call(_this3, options);
    }
    /**
	*
	* @alpha
	*
	* Deletes a vector bucket (bucket must be empty)
	* All indexes must be deleted before deleting the bucket
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @param vectorBucketName - Name of the vector bucket to delete
	* @returns Promise with empty response on success or error
	*
	* @example
	* ```typescript
	* const { data, error } = await supabase
	*   .storage
	*   .vectors
	*   .deleteBucket('embeddings-old')
	* ```
	*/ async deleteBucket(vectorBucketName) {
        var _superprop_getDeleteBucket = ()=>super.deleteBucket, _this4 = this;
        return _superprop_getDeleteBucket().call(_this4, vectorBucketName);
    }
};
/**
*
* @alpha
*
* Scoped client for operations within a specific vector bucket
* Provides index management and access to vector operations
*
* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
*/ var VectorBucketScope = class extends VectorIndexApi {
    /**
	* @alpha
	*
	* Creates a helper that automatically scopes all index operations to the provided bucket.
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @example
	* ```typescript
	* const bucket = supabase.storage.vectors.from('embeddings-prod')
	* ```
	*/ constructor(url, headers, vectorBucketName, fetch$1){
        super(url, headers, fetch$1);
        this.vectorBucketName = vectorBucketName;
    }
    /**
	*
	* @alpha
	*
	* Creates a new vector index in this bucket
	* Convenience method that automatically includes the bucket name
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @param options - Index configuration (vectorBucketName is automatically set)
	* @returns Promise with empty response on success or error
	*
	* @example
	* ```typescript
	* const bucket = supabase.storage.vectors.from('embeddings-prod')
	* await bucket.createIndex({
	*   indexName: 'documents-openai',
	*   dataType: 'float32',
	*   dimension: 1536,
	*   distanceMetric: 'cosine',
	*   metadataConfiguration: {
	*     nonFilterableMetadataKeys: ['raw_text']
	*   }
	* })
	* ```
	*/ async createIndex(options) {
        var _superprop_getCreateIndex = ()=>super.createIndex, _this5 = this;
        return _superprop_getCreateIndex().call(_this5, _objectSpread2(_objectSpread2({}, options), {}, {
            vectorBucketName: _this5.vectorBucketName
        }));
    }
    /**
	*
	* @alpha
	*
	* Lists indexes in this bucket
	* Convenience method that automatically includes the bucket name
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @param options - Listing options (vectorBucketName is automatically set)
	* @returns Promise with response containing indexes array and pagination token or error
	*
	* @example
	* ```typescript
	* const bucket = supabase.storage.vectors.from('embeddings-prod')
	* const { data } = await bucket.listIndexes({ prefix: 'documents-' })
	* ```
	*/ async listIndexes(options = {}) {
        var _superprop_getListIndexes = ()=>super.listIndexes, _this6 = this;
        return _superprop_getListIndexes().call(_this6, _objectSpread2(_objectSpread2({}, options), {}, {
            vectorBucketName: _this6.vectorBucketName
        }));
    }
    /**
	*
	* @alpha
	*
	* Retrieves metadata for a specific index in this bucket
	* Convenience method that automatically includes the bucket name
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @param indexName - Name of the index to retrieve
	* @returns Promise with index metadata or error
	*
	* @example
	* ```typescript
	* const bucket = supabase.storage.vectors.from('embeddings-prod')
	* const { data } = await bucket.getIndex('documents-openai')
	* console.log('Dimension:', data?.index.dimension)
	* ```
	*/ async getIndex(indexName) {
        var _superprop_getGetIndex = ()=>super.getIndex, _this7 = this;
        return _superprop_getGetIndex().call(_this7, _this7.vectorBucketName, indexName);
    }
    /**
	*
	* @alpha
	*
	* Deletes an index from this bucket
	* Convenience method that automatically includes the bucket name
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @param indexName - Name of the index to delete
	* @returns Promise with empty response on success or error
	*
	* @example
	* ```typescript
	* const bucket = supabase.storage.vectors.from('embeddings-prod')
	* await bucket.deleteIndex('old-index')
	* ```
	*/ async deleteIndex(indexName) {
        var _superprop_getDeleteIndex = ()=>super.deleteIndex, _this8 = this;
        return _superprop_getDeleteIndex().call(_this8, _this8.vectorBucketName, indexName);
    }
    /**
	*
	* @alpha
	*
	* Access operations for a specific index within this bucket
	* Returns a scoped client for vector data operations
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @param indexName - Name of the index
	* @returns Index-scoped client with vector data operations
	*
	* @example
	* ```typescript
	* const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
	*
	* // Insert vectors
	* await index.putVectors({
	*   vectors: [
	*     { key: 'doc-1', data: { float32: [...] }, metadata: { title: 'Intro' } }
	*   ]
	* })
	*
	* // Query similar vectors
	* const { data } = await index.queryVectors({
	*   queryVector: { float32: [...] },
	*   topK: 5
	* })
	* ```
	*/ index(indexName) {
        return new VectorIndexScope(this.url, this.headers, this.vectorBucketName, indexName, this.fetch);
    }
};
/**
*
* @alpha
*
* Scoped client for operations within a specific vector index
* Provides vector data operations (put, get, list, query, delete)
*
* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
*/ var VectorIndexScope = class extends VectorDataApi {
    /**
	*
	* @alpha
	*
	* Creates a helper that automatically scopes all vector operations to the provided bucket/index names.
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @example
	* ```typescript
	* const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
	* ```
	*/ constructor(url, headers, vectorBucketName, indexName, fetch$1){
        super(url, headers, fetch$1);
        this.vectorBucketName = vectorBucketName;
        this.indexName = indexName;
    }
    /**
	*
	* @alpha
	*
	* Inserts or updates vectors in this index
	* Convenience method that automatically includes bucket and index names
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @param options - Vector insertion options (bucket and index names automatically set)
	* @returns Promise with empty response on success or error
	*
	* @example
	* ```typescript
	* const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
	* await index.putVectors({
	*   vectors: [
	*     {
	*       key: 'doc-1',
	*       data: { float32: [0.1, 0.2, ...] },
	*       metadata: { title: 'Introduction', page: 1 }
	*     }
	*   ]
	* })
	* ```
	*/ async putVectors(options) {
        var _superprop_getPutVectors = ()=>super.putVectors, _this9 = this;
        return _superprop_getPutVectors().call(_this9, _objectSpread2(_objectSpread2({}, options), {}, {
            vectorBucketName: _this9.vectorBucketName,
            indexName: _this9.indexName
        }));
    }
    /**
	*
	* @alpha
	*
	* Retrieves vectors by keys from this index
	* Convenience method that automatically includes bucket and index names
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @param options - Vector retrieval options (bucket and index names automatically set)
	* @returns Promise with response containing vectors array or error
	*
	* @example
	* ```typescript
	* const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
	* const { data } = await index.getVectors({
	*   keys: ['doc-1', 'doc-2'],
	*   returnMetadata: true
	* })
	* ```
	*/ async getVectors(options) {
        var _superprop_getGetVectors = ()=>super.getVectors, _this10 = this;
        return _superprop_getGetVectors().call(_this10, _objectSpread2(_objectSpread2({}, options), {}, {
            vectorBucketName: _this10.vectorBucketName,
            indexName: _this10.indexName
        }));
    }
    /**
	*
	* @alpha
	*
	* Lists vectors in this index with pagination
	* Convenience method that automatically includes bucket and index names
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @param options - Listing options (bucket and index names automatically set)
	* @returns Promise with response containing vectors array and pagination token or error
	*
	* @example
	* ```typescript
	* const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
	* const { data } = await index.listVectors({
	*   maxResults: 500,
	*   returnMetadata: true
	* })
	* ```
	*/ async listVectors(options = {}) {
        var _superprop_getListVectors = ()=>super.listVectors, _this11 = this;
        return _superprop_getListVectors().call(_this11, _objectSpread2(_objectSpread2({}, options), {}, {
            vectorBucketName: _this11.vectorBucketName,
            indexName: _this11.indexName
        }));
    }
    /**
	*
	* @alpha
	*
	* Queries for similar vectors in this index
	* Convenience method that automatically includes bucket and index names
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @param options - Query options (bucket and index names automatically set)
	* @returns Promise with response containing matches array of similar vectors ordered by distance or error
	*
	* @example
	* ```typescript
	* const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
	* const { data } = await index.queryVectors({
	*   queryVector: { float32: [0.1, 0.2, ...] },
	*   topK: 5,
	*   filter: { category: 'technical' },
	*   returnDistance: true,
	*   returnMetadata: true
	* })
	* ```
	*/ async queryVectors(options) {
        var _superprop_getQueryVectors = ()=>super.queryVectors, _this12 = this;
        return _superprop_getQueryVectors().call(_this12, _objectSpread2(_objectSpread2({}, options), {}, {
            vectorBucketName: _this12.vectorBucketName,
            indexName: _this12.indexName
        }));
    }
    /**
	*
	* @alpha
	*
	* Deletes vectors by keys from this index
	* Convenience method that automatically includes bucket and index names
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @param options - Deletion options (bucket and index names automatically set)
	* @returns Promise with empty response on success or error
	*
	* @example
	* ```typescript
	* const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
	* await index.deleteVectors({
	*   keys: ['doc-1', 'doc-2', 'doc-3']
	* })
	* ```
	*/ async deleteVectors(options) {
        var _superprop_getDeleteVectors = ()=>super.deleteVectors, _this13 = this;
        return _superprop_getDeleteVectors().call(_this13, _objectSpread2(_objectSpread2({}, options), {}, {
            vectorBucketName: _this13.vectorBucketName,
            indexName: _this13.indexName
        }));
    }
};
//#endregion
//#region src/StorageClient.ts
var StorageClient = class extends StorageBucketApi {
    /**
	* Creates a client for Storage buckets, files, analytics, and vectors.
	*
	* @category File Buckets
	* @example
	* ```ts
	* import { StorageClient } from '@supabase/storage-js'
	*
	* const storage = new StorageClient('https://xyzcompany.supabase.co/storage/v1', {
	*   apikey: 'public-anon-key',
	* })
	* const avatars = storage.from('avatars')
	* ```
	*/ constructor(url, headers = {}, fetch$1, opts){
        super(url, headers, fetch$1, opts);
    }
    /**
	* Perform file operation in a bucket.
	*
	* @category File Buckets
	* @param id The bucket id to operate on.
	*
	* @example
	* ```typescript
	* const avatars = supabase.storage.from('avatars')
	* ```
	*/ from(id) {
        return new StorageFileApi(this.url, this.headers, id, this.fetch);
    }
    /**
	*
	* @alpha
	*
	* Access vector storage operations.
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Vector Buckets
	* @returns A StorageVectorsClient instance configured with the current storage settings.
	*/ get vectors() {
        return new StorageVectorsClient(this.url + "/vector", {
            headers: this.headers,
            fetch: this.fetch
        });
    }
    /**
	*
	* @alpha
	*
	* Access analytics storage operations using Iceberg tables.
	*
	* **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
	*
	* @category Analytics Buckets
	* @returns A StorageAnalyticsClient instance configured with the current storage settings.
	*/ get analytics() {
        return new StorageAnalyticsClient(this.url + "/iceberg", this.headers, this.fetch);
    }
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseClient",
    ()=>SupabaseClient,
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/functions-js/dist/module/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$FunctionsClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/postgrest-js/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RealtimeClient$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-client] (ecmascript) <export default as RealtimeClient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/storage-js/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/auth-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$AuthClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthClient$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/auth-js/dist/module/AuthClient.js [app-client] (ecmascript) <export default as AuthClient>");
;
;
;
;
;
;
;
//#region src/lib/version.ts
const version = "2.98.0";
//#endregion
//#region src/lib/constants.ts
let JS_ENV = "";
if (typeof Deno !== "undefined") JS_ENV = "deno";
else if (typeof document !== "undefined") JS_ENV = "web";
else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") JS_ENV = "react-native";
else JS_ENV = "node";
const DEFAULT_HEADERS = {
    "X-Client-Info": `supabase-js-${JS_ENV}/${version}`
};
const DEFAULT_GLOBAL_OPTIONS = {
    headers: DEFAULT_HEADERS
};
const DEFAULT_DB_OPTIONS = {
    schema: "public"
};
const DEFAULT_AUTH_OPTIONS = {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: "implicit"
};
const DEFAULT_REALTIME_OPTIONS = {};
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/typeof.js
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
        return typeof o$1;
    } : function(o$1) {
        return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
    }, _typeof(o);
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/toPrimitive.js
function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/toPropertyKey.js
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/defineProperty.js
function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
//#endregion
//#region \0@oxc-project+runtime@0.101.0/helpers/objectSpread2.js
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r$1) {
            return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r$1) {
            _defineProperty(e, r$1, t[r$1]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
            Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
        });
    }
    return e;
}
//#endregion
//#region src/lib/fetch.ts
const resolveFetch = (customFetch)=>{
    if (customFetch) return (...args)=>customFetch(...args);
    return (...args)=>fetch(...args);
};
const resolveHeadersConstructor = ()=>{
    return Headers;
};
const fetchWithAuth = (supabaseKey, getAccessToken, customFetch)=>{
    const fetch$1 = resolveFetch(customFetch);
    const HeadersConstructor = resolveHeadersConstructor();
    return async (input, init)=>{
        var _await$getAccessToken;
        const accessToken = (_await$getAccessToken = await getAccessToken()) !== null && _await$getAccessToken !== void 0 ? _await$getAccessToken : supabaseKey;
        let headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
        if (!headers.has("apikey")) headers.set("apikey", supabaseKey);
        if (!headers.has("Authorization")) headers.set("Authorization", `Bearer ${accessToken}`);
        return fetch$1(input, _objectSpread2(_objectSpread2({}, init), {}, {
            headers
        }));
    };
};
//#endregion
//#region src/lib/helpers.ts
function ensureTrailingSlash(url) {
    return url.endsWith("/") ? url : url + "/";
}
function applySettingDefaults(options, defaults) {
    var _DEFAULT_GLOBAL_OPTIO, _globalOptions$header;
    const { db: dbOptions, auth: authOptions, realtime: realtimeOptions, global: globalOptions } = options;
    const { db: DEFAULT_DB_OPTIONS$1, auth: DEFAULT_AUTH_OPTIONS$1, realtime: DEFAULT_REALTIME_OPTIONS$1, global: DEFAULT_GLOBAL_OPTIONS$1 } = defaults;
    const result = {
        db: _objectSpread2(_objectSpread2({}, DEFAULT_DB_OPTIONS$1), dbOptions),
        auth: _objectSpread2(_objectSpread2({}, DEFAULT_AUTH_OPTIONS$1), authOptions),
        realtime: _objectSpread2(_objectSpread2({}, DEFAULT_REALTIME_OPTIONS$1), realtimeOptions),
        storage: {},
        global: _objectSpread2(_objectSpread2(_objectSpread2({}, DEFAULT_GLOBAL_OPTIONS$1), globalOptions), {}, {
            headers: _objectSpread2(_objectSpread2({}, (_DEFAULT_GLOBAL_OPTIO = DEFAULT_GLOBAL_OPTIONS$1 === null || DEFAULT_GLOBAL_OPTIONS$1 === void 0 ? void 0 : DEFAULT_GLOBAL_OPTIONS$1.headers) !== null && _DEFAULT_GLOBAL_OPTIO !== void 0 ? _DEFAULT_GLOBAL_OPTIO : {}), (_globalOptions$header = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions.headers) !== null && _globalOptions$header !== void 0 ? _globalOptions$header : {})
        }),
        accessToken: async ()=>""
    };
    if (options.accessToken) result.accessToken = options.accessToken;
    else delete result.accessToken;
    return result;
}
/**
* Validates a Supabase client URL
*
* @param {string} supabaseUrl - The Supabase client URL string.
* @returns {URL} - The validated base URL.
* @throws {Error}
*/ function validateSupabaseUrl(supabaseUrl) {
    const trimmedUrl = supabaseUrl === null || supabaseUrl === void 0 ? void 0 : supabaseUrl.trim();
    if (!trimmedUrl) throw new Error("supabaseUrl is required.");
    if (!trimmedUrl.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
    try {
        return new URL(ensureTrailingSlash(trimmedUrl));
    } catch (_unused) {
        throw Error("Invalid supabaseUrl: Provided URL is malformed.");
    }
}
//#endregion
//#region src/lib/SupabaseAuthClient.ts
var SupabaseAuthClient = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$AuthClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthClient$3e$__["AuthClient"] {
    constructor(options){
        super(options);
    }
};
//#endregion
//#region src/SupabaseClient.ts
/**
* Supabase Client.
*
* An isomorphic Javascript client for interacting with Postgres.
*/ var SupabaseClient = class {
    /**
	* Create a new client for use in the browser.
	* @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
	* @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
	* @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
	* @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
	* @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
	* @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
	* @param options.realtime Options passed along to realtime-js constructor.
	* @param options.storage Options passed along to the storage-js constructor.
	* @param options.global.fetch A custom fetch implementation.
	* @param options.global.headers Any additional headers to send with each network request.
	* @example
	* ```ts
	* import { createClient } from '@supabase/supabase-js'
	*
	* const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
	* const { data } = await supabase.from('profiles').select('*')
	* ```
	*/ constructor(supabaseUrl, supabaseKey, options){
        var _settings$auth$storag, _settings$global$head;
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        const baseUrl = validateSupabaseUrl(supabaseUrl);
        if (!supabaseKey) throw new Error("supabaseKey is required.");
        this.realtimeUrl = new URL("realtime/v1", baseUrl);
        this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws");
        this.authUrl = new URL("auth/v1", baseUrl);
        this.storageUrl = new URL("storage/v1", baseUrl);
        this.functionsUrl = new URL("functions/v1", baseUrl);
        const defaultStorageKey = `sb-${baseUrl.hostname.split(".")[0]}-auth-token`;
        const DEFAULTS = {
            db: DEFAULT_DB_OPTIONS,
            realtime: DEFAULT_REALTIME_OPTIONS,
            auth: _objectSpread2(_objectSpread2({}, DEFAULT_AUTH_OPTIONS), {}, {
                storageKey: defaultStorageKey
            }),
            global: DEFAULT_GLOBAL_OPTIONS
        };
        const settings = applySettingDefaults(options !== null && options !== void 0 ? options : {}, DEFAULTS);
        this.storageKey = (_settings$auth$storag = settings.auth.storageKey) !== null && _settings$auth$storag !== void 0 ? _settings$auth$storag : "";
        this.headers = (_settings$global$head = settings.global.headers) !== null && _settings$global$head !== void 0 ? _settings$global$head : {};
        if (!settings.accessToken) {
            var _settings$auth;
            this.auth = this._initSupabaseAuthClient((_settings$auth = settings.auth) !== null && _settings$auth !== void 0 ? _settings$auth : {}, this.headers, settings.global.fetch);
        } else {
            this.accessToken = settings.accessToken;
            this.auth = new Proxy({}, {
                get: (_, prop)=>{
                    throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(prop)} is not possible`);
                }
            });
        }
        this.fetch = fetchWithAuth(supabaseKey, this._getAccessToken.bind(this), settings.global.fetch);
        this.realtime = this._initRealtimeClient(_objectSpread2({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, settings.realtime));
        if (this.accessToken) Promise.resolve(this.accessToken()).then((token)=>this.realtime.setAuth(token)).catch((e)=>console.warn("Failed to set initial Realtime auth token:", e));
        this.rest = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostgrestClient"](new URL("rest/v1", baseUrl).href, {
            headers: this.headers,
            schema: settings.db.schema,
            fetch: this.fetch,
            timeout: settings.db.timeout,
            urlLengthLimit: settings.db.urlLengthLimit
        });
        this.storage = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageClient"](this.storageUrl.href, this.headers, this.fetch, options === null || options === void 0 ? void 0 : options.storage);
        if (!settings.accessToken) this._listenForAuthEvents();
    }
    /**
	* Supabase Functions allows you to deploy and invoke edge functions.
	*/ get functions() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$FunctionsClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionsClient"](this.functionsUrl.href, {
            headers: this.headers,
            customFetch: this.fetch
        });
    }
    /**
	* Perform a query on a table or a view.
	*
	* @param relation - The table or view name to query
	*/ from(relation) {
        return this.rest.from(relation);
    }
    /**
	* Select a schema to query or perform an function (rpc) call.
	*
	* The schema needs to be on the list of exposed schemas inside Supabase.
	*
	* @param schema - The schema to query
	*/ schema(schema) {
        return this.rest.schema(schema);
    }
    /**
	* Perform a function call.
	*
	* @param fn - The function name to call
	* @param args - The arguments to pass to the function call
	* @param options - Named parameters
	* @param options.head - When set to `true`, `data` will not be returned.
	* Useful if you only need the count.
	* @param options.get - When set to `true`, the function will be called with
	* read-only access mode.
	* @param options.count - Count algorithm to use to count rows returned by the
	* function. Only applicable for [set-returning
	* functions](https://www.postgresql.org/docs/current/functions-srf.html).
	*
	* `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
	* hood.
	*
	* `"planned"`: Approximated but fast count algorithm. Uses the Postgres
	* statistics under the hood.
	*
	* `"estimated"`: Uses exact count for low numbers and planned count for high
	* numbers.
	*/ rpc(fn, args = {}, options = {
        head: false,
        get: false,
        count: void 0
    }) {
        return this.rest.rpc(fn, args, options);
    }
    /**
	* Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
	*
	* @param {string} name - The name of the Realtime channel.
	* @param {Object} opts - The options to pass to the Realtime channel.
	*
	*/ channel(name, opts = {
        config: {}
    }) {
        return this.realtime.channel(name, opts);
    }
    /**
	* Returns all Realtime channels.
	*/ getChannels() {
        return this.realtime.getChannels();
    }
    /**
	* Unsubscribes and removes Realtime channel from Realtime client.
	*
	* @param {RealtimeChannel} channel - The name of the Realtime channel.
	*
	*/ removeChannel(channel) {
        return this.realtime.removeChannel(channel);
    }
    /**
	* Unsubscribes and removes all Realtime channels from Realtime client.
	*/ removeAllChannels() {
        return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
        var _this = this;
        var _data$session$access_, _data$session;
        if (_this.accessToken) return await _this.accessToken();
        const { data } = await _this.auth.getSession();
        return (_data$session$access_ = (_data$session = data.session) === null || _data$session === void 0 ? void 0 : _data$session.access_token) !== null && _data$session$access_ !== void 0 ? _data$session$access_ : _this.supabaseKey;
    }
    _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, storage, userStorage, storageKey, flowType, lock, debug, throwOnError }, headers, fetch$1) {
        const authHeaders = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new SupabaseAuthClient({
            url: this.authUrl.href,
            headers: _objectSpread2(_objectSpread2({}, authHeaders), headers),
            storageKey,
            autoRefreshToken,
            persistSession,
            detectSessionInUrl,
            storage,
            userStorage,
            flowType,
            lock,
            debug,
            throwOnError,
            fetch: fetch$1,
            hasCustomAuthorizationHeader: Object.keys(this.headers).some((key)=>key.toLowerCase() === "authorization")
        });
    }
    _initRealtimeClient(options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RealtimeClient$3e$__["RealtimeClient"](this.realtimeUrl.href, _objectSpread2(_objectSpread2({}, options), {}, {
            params: _objectSpread2(_objectSpread2({}, {
                apikey: this.supabaseKey
            }), options === null || options === void 0 ? void 0 : options.params)
        }));
    }
    _listenForAuthEvents() {
        return this.auth.onAuthStateChange((event, session)=>{
            this._handleTokenChanged(event, "CLIENT", session === null || session === void 0 ? void 0 : session.access_token);
        });
    }
    _handleTokenChanged(event, source, token) {
        if ((event === "TOKEN_REFRESHED" || event === "SIGNED_IN") && this.changedAccessToken !== token) {
            this.changedAccessToken = token;
            this.realtime.setAuth(token);
        } else if (event === "SIGNED_OUT") {
            this.realtime.setAuth();
            if (source == "STORAGE") this.auth.signOut();
            this.changedAccessToken = void 0;
        }
    }
};
//#endregion
//#region src/index.ts
/**
* Creates a new Supabase Client.
*
* @example
* ```ts
* import { createClient } from '@supabase/supabase-js'
*
* const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
* const { data, error } = await supabase.from('profiles').select('*')
* ```
*/ const createClient = (supabaseUrl, supabaseKey, options)=>{
    return new SupabaseClient(supabaseUrl, supabaseKey, options);
};
function shouldShowDeprecationWarning() {
    if (typeof window !== "undefined") return false;
    const _process = globalThis["process"];
    if (!_process) return false;
    const processVersion = _process["version"];
    if (processVersion === void 0 || processVersion === null) return false;
    const versionMatch = processVersion.match(/^v(\d+)\./);
    if (!versionMatch) return false;
    return parseInt(versionMatch[1], 10) <= 18;
}
if (shouldShowDeprecationWarning()) console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VERSION",
    ()=>VERSION
]);
const VERSION = '0.6.1'; //# sourceMappingURL=version.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBrowser",
    ()=>isBrowser,
    "parse",
    ()=>parse,
    "parseCookieHeader",
    ()=>parseCookieHeader,
    "serialize",
    ()=>serialize,
    "serializeCookieHeader",
    ()=>serializeCookieHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/cookie/dist/index.js [app-client] (ecmascript)");
;
const parse = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"];
const serialize = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"];
function parseCookieHeader(header) {
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(header);
    return Object.keys(parsed ?? {}).map((name)=>({
            name,
            value: parsed[name]
        }));
}
function serializeCookieHeader(name, value, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])(name, value, options);
}
function isBrowser() {
    return typeof window !== "undefined" && typeof window.document !== "undefined";
} //# sourceMappingURL=helpers.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_COOKIE_OPTIONS",
    ()=>DEFAULT_COOKIE_OPTIONS
]);
const DEFAULT_COOKIE_OPTIONS = {
    path: "/",
    sameSite: "lax",
    httpOnly: false,
    // https://developer.chrome.com/blog/cookie-max-age-expires
    // https://httpwg.org/http-extensions/draft-ietf-httpbis-rfc6265bis.html#name-cookie-lifetime-limits
    maxAge: 400 * 24 * 60 * 60
}; //# sourceMappingURL=constants.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/chunker.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_CHUNK_SIZE",
    ()=>MAX_CHUNK_SIZE,
    "combineChunks",
    ()=>combineChunks,
    "createChunks",
    ()=>createChunks,
    "deleteChunks",
    ()=>deleteChunks,
    "isChunkLike",
    ()=>isChunkLike
]);
const MAX_CHUNK_SIZE = 3180;
const CHUNK_LIKE_REGEX = /^(.*)[.](0|[1-9][0-9]*)$/;
function isChunkLike(cookieName, key) {
    if (cookieName === key) {
        return true;
    }
    const chunkLike = cookieName.match(CHUNK_LIKE_REGEX);
    if (chunkLike && chunkLike[1] === key) {
        return true;
    }
    return false;
}
function createChunks(key, value, chunkSize) {
    const resolvedChunkSize = chunkSize ?? MAX_CHUNK_SIZE;
    let encodedValue = encodeURIComponent(value);
    if (encodedValue.length <= resolvedChunkSize) {
        return [
            {
                name: key,
                value
            }
        ];
    }
    const chunks = [];
    while(encodedValue.length > 0){
        let encodedChunkHead = encodedValue.slice(0, resolvedChunkSize);
        const lastEscapePos = encodedChunkHead.lastIndexOf("%");
        // Check if the last escaped character is truncated.
        if (lastEscapePos > resolvedChunkSize - 3) {
            // If so, reslice the string to exclude the whole escape sequence.
            // We only reduce the size of the string as the chunk must
            // be smaller than the chunk size.
            encodedChunkHead = encodedChunkHead.slice(0, lastEscapePos);
        }
        let valueHead = "";
        // Check if the chunk was split along a valid unicode boundary.
        while(encodedChunkHead.length > 0){
            try {
                // Try to decode the chunk back and see if it is valid.
                // Stop when the chunk is valid.
                valueHead = decodeURIComponent(encodedChunkHead);
                break;
            } catch (error) {
                if (error instanceof URIError && encodedChunkHead.at(-3) === "%" && encodedChunkHead.length > 3) {
                    encodedChunkHead = encodedChunkHead.slice(0, encodedChunkHead.length - 3);
                } else {
                    throw error;
                }
            }
        }
        chunks.push(valueHead);
        encodedValue = encodedValue.slice(encodedChunkHead.length);
    }
    return chunks.map((value, i)=>({
            name: `${key}.${i}`,
            value
        }));
}
async function combineChunks(key, retrieveChunk) {
    const value = await retrieveChunk(key);
    if (value) {
        return value;
    }
    let values = [];
    for(let i = 0;; i++){
        const chunkName = `${key}.${i}`;
        const chunk = await retrieveChunk(chunkName);
        if (!chunk) {
            break;
        }
        values.push(chunk);
    }
    if (values.length > 0) {
        return values.join("");
    }
    return null;
}
async function deleteChunks(key, retrieveChunk, removeChunk) {
    const value = await retrieveChunk(key);
    if (value) {
        await removeChunk(key);
    }
    for(let i = 0;; i++){
        const chunkName = `${key}.${i}`;
        const chunk = await retrieveChunk(chunkName);
        if (!chunk) {
            break;
        }
        await removeChunk(chunkName);
    }
} //# sourceMappingURL=chunker.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/base64url.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "codepointToUTF8",
    ()=>codepointToUTF8,
    "stringFromBase64URL",
    ()=>stringFromBase64URL,
    "stringFromUTF8",
    ()=>stringFromUTF8,
    "stringToBase64URL",
    ()=>stringToBase64URL,
    "stringToUTF8",
    ()=>stringToUTF8
]);
/**
 * Avoid modifying this file. It's part of
 * https://github.com/supabase-community/base64url-js.  Submit all fixes on
 * that repo!
 */ /**
 * An array of characters that encode 6 bits into a Base64-URL alphabet
 * character.
 */ const TO_BASE64URL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
/**
 * An array of characters that can appear in a Base64-URL encoded string but
 * should be ignored.
 */ const IGNORE_BASE64URL = " \t\n\r=".split("");
/**
 * An array of 128 numbers that map a Base64-URL character to 6 bits, or if -2
 * used to skip the character, or if -1 used to error out.
 */ const FROM_BASE64URL = (()=>{
    const charMap = new Array(128);
    for(let i = 0; i < charMap.length; i += 1){
        charMap[i] = -1;
    }
    for(let i = 0; i < IGNORE_BASE64URL.length; i += 1){
        charMap[IGNORE_BASE64URL[i].charCodeAt(0)] = -2;
    }
    for(let i = 0; i < TO_BASE64URL.length; i += 1){
        charMap[TO_BASE64URL[i].charCodeAt(0)] = i;
    }
    return charMap;
})();
function stringToBase64URL(str) {
    const base64 = [];
    let queue = 0;
    let queuedBits = 0;
    const emitter = (byte)=>{
        queue = queue << 8 | byte;
        queuedBits += 8;
        while(queuedBits >= 6){
            const pos = queue >> queuedBits - 6 & 63;
            base64.push(TO_BASE64URL[pos]);
            queuedBits -= 6;
        }
    };
    stringToUTF8(str, emitter);
    if (queuedBits > 0) {
        queue = queue << 6 - queuedBits;
        queuedBits = 6;
        while(queuedBits >= 6){
            const pos = queue >> queuedBits - 6 & 63;
            base64.push(TO_BASE64URL[pos]);
            queuedBits -= 6;
        }
    }
    return base64.join("");
}
function stringFromBase64URL(str) {
    const conv = [];
    const emit = (codepoint)=>{
        conv.push(String.fromCodePoint(codepoint));
    };
    const state = {
        utf8seq: 0,
        codepoint: 0
    };
    let queue = 0;
    let queuedBits = 0;
    for(let i = 0; i < str.length; i += 1){
        const codepoint = str.charCodeAt(i);
        const bits = FROM_BASE64URL[codepoint];
        if (bits > -1) {
            // valid Base64-URL character
            queue = queue << 6 | bits;
            queuedBits += 6;
            while(queuedBits >= 8){
                stringFromUTF8(queue >> queuedBits - 8 & 0xff, state, emit);
                queuedBits -= 8;
            }
        } else if (bits === -2) {
            continue;
        } else {
            throw new Error(`Invalid Base64-URL character "${str.at(i)}" at position ${i}`);
        }
    }
    return conv.join("");
}
function codepointToUTF8(codepoint, emit) {
    if (codepoint <= 0x7f) {
        emit(codepoint);
        return;
    } else if (codepoint <= 0x7ff) {
        emit(0xc0 | codepoint >> 6);
        emit(0x80 | codepoint & 0x3f);
        return;
    } else if (codepoint <= 0xffff) {
        emit(0xe0 | codepoint >> 12);
        emit(0x80 | codepoint >> 6 & 0x3f);
        emit(0x80 | codepoint & 0x3f);
        return;
    } else if (codepoint <= 0x10ffff) {
        emit(0xf0 | codepoint >> 18);
        emit(0x80 | codepoint >> 12 & 0x3f);
        emit(0x80 | codepoint >> 6 & 0x3f);
        emit(0x80 | codepoint & 0x3f);
        return;
    }
    throw new Error(`Unrecognized Unicode codepoint: ${codepoint.toString(16)}`);
}
function stringToUTF8(str, emit) {
    for(let i = 0; i < str.length; i += 1){
        let codepoint = str.charCodeAt(i);
        if (codepoint > 0xd7ff && codepoint <= 0xdbff) {
            // most UTF-16 codepoints are Unicode codepoints, except values in this
            // range where the next UTF-16 codepoint needs to be combined with the
            // current one to get the Unicode codepoint
            const highSurrogate = (codepoint - 0xd800) * 0x400 & 0xffff;
            const lowSurrogate = str.charCodeAt(i + 1) - 0xdc00 & 0xffff;
            codepoint = (lowSurrogate | highSurrogate) + 0x10000;
            i += 1;
        }
        codepointToUTF8(codepoint, emit);
    }
}
function stringFromUTF8(byte, state, emit) {
    if (state.utf8seq === 0) {
        if (byte <= 0x7f) {
            emit(byte);
            return;
        }
        // count the number of 1 leading bits until you reach 0
        for(let leadingBit = 1; leadingBit < 6; leadingBit += 1){
            if ((byte >> 7 - leadingBit & 1) === 0) {
                state.utf8seq = leadingBit;
                break;
            }
        }
        if (state.utf8seq === 2) {
            state.codepoint = byte & 31;
        } else if (state.utf8seq === 3) {
            state.codepoint = byte & 15;
        } else if (state.utf8seq === 4) {
            state.codepoint = byte & 7;
        } else {
            throw new Error("Invalid UTF-8 sequence");
        }
        state.utf8seq -= 1;
    } else if (state.utf8seq > 0) {
        if (byte <= 0x7f) {
            throw new Error("Invalid UTF-8 sequence");
        }
        state.codepoint = state.codepoint << 6 | byte & 63;
        state.utf8seq -= 1;
        if (state.utf8seq === 0) {
            emit(state.codepoint);
        }
    }
} //# sourceMappingURL=base64url.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/chunker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/base64url.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/cookies.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyServerStorage",
    ()=>applyServerStorage,
    "createStorageFromOptions",
    ()=>createStorageFromOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/cookie/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/chunker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/base64url.js [app-client] (ecmascript)");
;
;
const BASE64_PREFIX = "base64-";
function createStorageFromOptions(options, isServerClient) {
    const cookies = options.cookies ?? null;
    const cookieEncoding = options.cookieEncoding;
    const setItems = {};
    const removedItems = {};
    let getAll;
    let setAll;
    if (cookies) {
        if ("get" in cookies) {
            // Just get is not enough, because the client needs to see what cookies
            // are already set and unset them if necessary. To attempt to fix this
            // behavior for most use cases, we pass "hints" which is the keys of the
            // storage items. They are then converted to their corresponding cookie
            // chunk names and are fetched with get. Only 5 chunks are fetched, which
            // should be enough for the majority of use cases, but does not solve
            // those with very large sessions.
            const getWithHints = async (keyHints)=>{
                // optimistically find the first 5 potential chunks for the specified key
                const chunkNames = keyHints.flatMap((keyHint)=>[
                        keyHint,
                        ...Array.from({
                            length: 5
                        }).map((_, i)=>`${keyHint}.${i}`)
                    ]);
                const chunks = [];
                for(let i = 0; i < chunkNames.length; i += 1){
                    const value = await cookies.get(chunkNames[i]);
                    if (!value && typeof value !== "string") {
                        continue;
                    }
                    chunks.push({
                        name: chunkNames[i],
                        value
                    });
                }
                // TODO: detect and log stale chunks error
                return chunks;
            };
            getAll = async (keyHints)=>await getWithHints(keyHints);
            if ("set" in cookies && "remove" in cookies) {
                setAll = async (setCookies)=>{
                    for(let i = 0; i < setCookies.length; i += 1){
                        const { name, value, options } = setCookies[i];
                        if (value) {
                            await cookies.set(name, value, options);
                        } else {
                            await cookies.remove(name, options);
                        }
                    }
                };
            } else if (isServerClient) {
                setAll = async ()=>{
                    console.warn("@supabase/ssr: createServerClient was configured without set and remove cookie methods, but the client needs to set cookies. This can lead to issues such as random logouts, early session termination or increased token refresh requests. If in NextJS, check your middleware.ts file, route handlers and server actions for correctness. Consider switching to the getAll and setAll cookie methods instead of get, set and remove which are deprecated and can be difficult to use correctly.");
                };
            } else {
                throw new Error("@supabase/ssr: createBrowserClient requires configuring a getAll and setAll cookie method (deprecated: alternatively both get, set and remove can be used)");
            }
        } else if ("getAll" in cookies) {
            getAll = async ()=>await cookies.getAll();
            if ("setAll" in cookies) {
                setAll = cookies.setAll;
            } else if (isServerClient) {
                setAll = async ()=>{
                    console.warn("@supabase/ssr: createServerClient was configured without the setAll cookie method, but the client needs to set cookies. This can lead to issues such as random logouts, early session termination or increased token refresh requests. If in NextJS, check your middleware.ts file, route handlers and server actions for correctness.");
                };
            } else {
                throw new Error("@supabase/ssr: createBrowserClient requires configuring both getAll and setAll cookie methods (deprecated: alternatively both get, set and remove can be used)");
            }
        } else {
            // neither get nor getAll is present on cookies, only will occur if pure JavaScript is used, but cookies is an object
            throw new Error(`@supabase/ssr: ${isServerClient ? "createServerClient" : "createBrowserClient"} requires configuring getAll and setAll cookie methods (deprecated: alternatively use get, set and remove).${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])() ? " As this is called in a browser runtime, consider removing the cookies option object to use the document.cookie API automatically." : ""}`);
        }
    } else if (!isServerClient && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])()) {
        // The environment is browser, so use the document.cookie API to implement getAll and setAll.
        const noHintGetAll = ()=>{
            const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(document.cookie);
            return Object.keys(parsed).map((name)=>({
                    name,
                    value: parsed[name] ?? ""
                }));
        };
        getAll = ()=>noHintGetAll();
        setAll = (setCookies)=>{
            setCookies.forEach(({ name, value, options })=>{
                document.cookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])(name, value, options);
            });
        };
    } else if (isServerClient) {
        throw new Error("@supabase/ssr: createServerClient must be initialized with cookie options that specify getAll and setAll functions (deprecated, not recommended: alternatively use get, set and remove)");
    } else {
        // getting cookies when there's no window but we're in browser mode can be OK, because the developer probably is not using auth functions
        getAll = ()=>{
            return [];
        };
        // this is NOT OK because the developer is using auth functions that require setting some state, so that must error out
        setAll = ()=>{
            throw new Error("@supabase/ssr: createBrowserClient in non-browser runtimes (including Next.js pre-rendering mode) was not initialized cookie options that specify getAll and setAll functions (deprecated: alternatively use get, set and remove), but they were needed");
        };
    }
    if (!isServerClient) {
        // This is the storage client to be used in browsers. It only
        // works on the cookies abstraction, unlike the server client
        // which only uses cookies to read the initial state. When an
        // item is set, cookies are both cleared and set to values so
        // that stale chunks are not left remaining.
        return {
            getAll,
            setAll,
            setItems,
            removedItems,
            storage: {
                isServer: false,
                getItem: async (key)=>{
                    const allCookies = await getAll([
                        key
                    ]);
                    const chunkedCookie = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineChunks"])(key, async (chunkName)=>{
                        const cookie = allCookies?.find(({ name })=>name === chunkName) || null;
                        if (!cookie) {
                            return null;
                        }
                        return cookie.value;
                    });
                    if (!chunkedCookie) {
                        return null;
                    }
                    let decoded = chunkedCookie;
                    if (chunkedCookie.startsWith(BASE64_PREFIX)) {
                        decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringFromBase64URL"])(chunkedCookie.substring(BASE64_PREFIX.length));
                    }
                    return decoded;
                },
                setItem: async (key, value)=>{
                    const allCookies = await getAll([
                        key
                    ]);
                    const cookieNames = allCookies?.map(({ name })=>name) || [];
                    const removeCookies = new Set(cookieNames.filter((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChunkLike"])(name, key)));
                    let encoded = value;
                    if (cookieEncoding === "base64url") {
                        encoded = BASE64_PREFIX + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringToBase64URL"])(value);
                    }
                    const setCookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChunks"])(key, encoded);
                    setCookies.forEach(({ name })=>{
                        removeCookies.delete(name);
                    });
                    const removeCookieOptions = {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"],
                        ...options?.cookieOptions,
                        maxAge: 0
                    };
                    const setCookieOptions = {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"],
                        ...options?.cookieOptions,
                        maxAge: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"].maxAge
                    };
                    // the NextJS cookieStore API can get confused if the `name` from
                    // options.cookieOptions leaks
                    delete removeCookieOptions.name;
                    delete setCookieOptions.name;
                    const allToSet = [
                        ...[
                            ...removeCookies
                        ].map((name)=>({
                                name,
                                value: "",
                                options: removeCookieOptions
                            })),
                        ...setCookies.map(({ name, value })=>({
                                name,
                                value,
                                options: setCookieOptions
                            }))
                    ];
                    if (allToSet.length > 0) {
                        await setAll(allToSet);
                    }
                },
                removeItem: async (key)=>{
                    const allCookies = await getAll([
                        key
                    ]);
                    const cookieNames = allCookies?.map(({ name })=>name) || [];
                    const removeCookies = cookieNames.filter((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChunkLike"])(name, key));
                    const removeCookieOptions = {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"],
                        ...options?.cookieOptions,
                        maxAge: 0
                    };
                    // the NextJS cookieStore API can get confused if the `name` from
                    // options.cookieOptions leaks
                    delete removeCookieOptions.name;
                    if (removeCookies.length > 0) {
                        await setAll(removeCookies.map((name)=>({
                                name,
                                value: "",
                                options: removeCookieOptions
                            })));
                    }
                }
            }
        };
    }
    // This is the server client. It only uses getAll to read the initial
    // state. Any subsequent changes to the items is persisted in the
    // setItems and removedItems objects. createServerClient *must* use
    // getAll, setAll and the values in setItems and removedItems to
    // persist the changes *at once* when appropriate (usually only when
    // the TOKEN_REFRESHED, USER_UPDATED or SIGNED_OUT events are fired by
    // the Supabase Auth client).
    return {
        getAll,
        setAll,
        setItems,
        removedItems,
        storage: {
            // to signal to the libraries that these cookies are
            // coming from a server environment and their value
            // should not be trusted
            isServer: true,
            getItem: async (key)=>{
                if (typeof setItems[key] === "string") {
                    return setItems[key];
                }
                if (removedItems[key]) {
                    return null;
                }
                const allCookies = await getAll([
                    key
                ]);
                const chunkedCookie = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineChunks"])(key, async (chunkName)=>{
                    const cookie = allCookies?.find(({ name })=>name === chunkName) || null;
                    if (!cookie) {
                        return null;
                    }
                    return cookie.value;
                });
                if (!chunkedCookie) {
                    return null;
                }
                let decoded = chunkedCookie;
                if (typeof chunkedCookie === "string" && chunkedCookie.startsWith(BASE64_PREFIX)) {
                    decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringFromBase64URL"])(chunkedCookie.substring(BASE64_PREFIX.length));
                }
                return decoded;
            },
            setItem: async (key, value)=>{
                // We don't have an `onAuthStateChange` event that can let us know that
                // the PKCE code verifier is being set. Therefore, if we see it being
                // set, we need to apply the storage (call `setAll` so the cookie is
                // set properly).
                if (key.endsWith("-code-verifier")) {
                    await applyServerStorage({
                        getAll,
                        setAll,
                        // pretend only that the code verifier was set
                        setItems: {
                            [key]: value
                        },
                        // pretend that nothing was removed
                        removedItems: {}
                    }, {
                        cookieOptions: options?.cookieOptions ?? null,
                        cookieEncoding
                    });
                }
                setItems[key] = value;
                delete removedItems[key];
            },
            removeItem: async (key)=>{
                // Intentionally not applying the storage when the key is the PKCE code
                // verifier, as usually right after it's removed other items are set,
                // so application of the storage will be handled by the
                // `onAuthStateChange` callback that follows removal -- usually as part
                // of the `exchangeCodeForSession` call.
                delete setItems[key];
                removedItems[key] = true;
            }
        }
    };
}
async function applyServerStorage({ getAll, setAll, setItems, removedItems }, options) {
    const cookieEncoding = options.cookieEncoding;
    const cookieOptions = options.cookieOptions ?? null;
    const allCookies = await getAll([
        ...setItems ? Object.keys(setItems) : [],
        ...removedItems ? Object.keys(removedItems) : []
    ]);
    const cookieNames = allCookies?.map(({ name })=>name) || [];
    const removeCookies = Object.keys(removedItems).flatMap((itemName)=>{
        return cookieNames.filter((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChunkLike"])(name, itemName));
    });
    const setCookies = Object.keys(setItems).flatMap((itemName)=>{
        const removeExistingCookiesForItem = new Set(cookieNames.filter((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChunkLike"])(name, itemName)));
        let encoded = setItems[itemName];
        if (cookieEncoding === "base64url") {
            encoded = BASE64_PREFIX + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringToBase64URL"])(encoded);
        }
        const chunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChunks"])(itemName, encoded);
        chunks.forEach((chunk)=>{
            removeExistingCookiesForItem.delete(chunk.name);
        });
        removeCookies.push(...removeExistingCookiesForItem);
        return chunks;
    });
    const removeCookieOptions = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"],
        ...cookieOptions,
        maxAge: 0
    };
    const setCookieOptions = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"],
        ...cookieOptions,
        maxAge: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"].maxAge
    };
    // the NextJS cookieStore API can get confused if the `name` from
    // options.cookieOptions leaks
    delete removeCookieOptions.name;
    delete setCookieOptions.name;
    await setAll([
        ...removeCookies.map((name)=>({
                name,
                value: "",
                options: removeCookieOptions
            })),
        ...setCookies.map(({ name, value })=>({
                name,
                value,
                options: setCookieOptions
            }))
    ]);
} //# sourceMappingURL=cookies.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBrowserClient",
    ()=>createBrowserClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/version.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/cookies.js [app-client] (ecmascript)");
;
;
;
;
let cachedBrowserClient;
function createBrowserClient(supabaseUrl, supabaseKey, options) {
    // singleton client is created only if isSingleton is set to true, or if isSingleton is not defined and we detect a browser
    const shouldUseSingleton = options?.isSingleton === true || (!options || !("isSingleton" in options)) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])();
    if (shouldUseSingleton && cachedBrowserClient) {
        return cachedBrowserClient;
    }
    if (!supabaseUrl || !supabaseKey) {
        throw new Error(`@supabase/ssr: Your project's URL and API key are required to create a Supabase client!\n\nCheck your Supabase project's API settings to find these values\n\nhttps://supabase.com/dashboard/project/_/settings/api`);
    }
    const { storage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStorageFromOptions"])({
        ...options,
        cookieEncoding: options?.cookieEncoding ?? "base64url"
    }, false);
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey, {
        ...options,
        global: {
            ...options?.global,
            headers: {
                ...options?.global?.headers,
                "X-Client-Info": `supabase-ssr/${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"]} createBrowserClient`
            }
        },
        auth: {
            ...options?.auth,
            ...options?.cookieOptions?.name ? {
                storageKey: options.cookieOptions.name
            } : null,
            flowType: "pkce",
            autoRefreshToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])(),
            detectSessionInUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])(),
            persistSession: true,
            storage
        }
    });
    if (shouldUseSingleton) {
        cachedBrowserClient = client;
    }
    return client;
} //# sourceMappingURL=createBrowserClient.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createServerClient",
    ()=>createServerClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/version.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/cookies.js [app-client] (ecmascript)");
;
;
;
function createServerClient(supabaseUrl, supabaseKey, options) {
    if (!supabaseUrl || !supabaseKey) {
        throw new Error(`Your project's URL and Key are required to create a Supabase client!\n\nCheck your Supabase project's API settings to find these values\n\nhttps://supabase.com/dashboard/project/_/settings/api`);
    }
    const { storage, getAll, setAll, setItems, removedItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStorageFromOptions"])({
        ...options,
        cookieEncoding: options?.cookieEncoding ?? "base64url"
    }, true);
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey, {
        ...options,
        global: {
            ...options?.global,
            headers: {
                ...options?.global?.headers,
                "X-Client-Info": `supabase-ssr/${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"]} createServerClient`
            }
        },
        auth: {
            ...options?.cookieOptions?.name ? {
                storageKey: options.cookieOptions.name
            } : null,
            ...options?.auth,
            flowType: "pkce",
            autoRefreshToken: false,
            detectSessionInUrl: false,
            persistSession: true,
            storage
        }
    });
    client.auth.onAuthStateChange(async (event)=>{
        // The SIGNED_IN event is fired very often, but we don't need to
        // apply the storage each time it fires, only if there are changes
        // that need to be set -- which is if setItems / removeItems have
        // data.
        const hasStorageChanges = Object.keys(setItems).length > 0 || Object.keys(removedItems).length > 0;
        if (hasStorageChanges && (event === "SIGNED_IN" || event === "TOKEN_REFRESHED" || event === "USER_UPDATED" || event === "PASSWORD_RECOVERY" || event === "SIGNED_OUT" || event === "MFA_CHALLENGE_VERIFIED")) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyServerStorage"])({
                getAll,
                setAll,
                setItems,
                removedItems
            }, {
                cookieOptions: options?.cookieOptions ?? null,
                cookieEncoding: options?.cookieEncoding ?? "base64url"
            });
        }
    });
    return client;
} //# sourceMappingURL=createServerClient.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/types.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

//# sourceMappingURL=types.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@supabase/ssr/dist/module/utils/index.js [app-client] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/cookie/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseCookie = parseCookie;
exports.parse = parseCookie;
exports.stringifyCookie = stringifyCookie;
exports.stringifySetCookie = stringifySetCookie;
exports.serialize = stringifySetCookie;
exports.parseSetCookie = parseSetCookie;
exports.stringifySetCookie = stringifySetCookie;
exports.serialize = stringifySetCookie;
/**
 * RegExp to match cookie-name in RFC 6265 sec 4.1.1
 * This refers out to the obsoleted definition of token in RFC 2616 sec 2.2
 * which has been replaced by the token definition in RFC 7230 appendix B.
 *
 * cookie-name       = token
 * token             = 1*tchar
 * tchar             = "!" / "#" / "$" / "%" / "&" / "'" /
 *                     "*" / "+" / "-" / "." / "^" / "_" /
 *                     "`" / "|" / "~" / DIGIT / ALPHA
 *
 * Note: Allowing more characters - https://github.com/jshttp/cookie/issues/191
 * Allow same range as cookie value, except `=`, which delimits end of name.
 */ const cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
/**
 * RegExp to match cookie-value in RFC 6265 sec 4.1.1
 *
 * cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
 * cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
 *                     ; US-ASCII characters excluding CTLs,
 *                     ; whitespace DQUOTE, comma, semicolon,
 *                     ; and backslash
 *
 * Allowing more characters: https://github.com/jshttp/cookie/issues/191
 * Comma, backslash, and DQUOTE are not part of the parsing algorithm.
 */ const cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
/**
 * RegExp to match domain-value in RFC 6265 sec 4.1.1
 *
 * domain-value      = <subdomain>
 *                     ; defined in [RFC1034], Section 3.5, as
 *                     ; enhanced by [RFC1123], Section 2.1
 * <subdomain>       = <label> | <subdomain> "." <label>
 * <label>           = <let-dig> [ [ <ldh-str> ] <let-dig> ]
 *                     Labels must be 63 characters or less.
 *                     'let-dig' not 'letter' in the first char, per RFC1123
 * <ldh-str>         = <let-dig-hyp> | <let-dig-hyp> <ldh-str>
 * <let-dig-hyp>     = <let-dig> | "-"
 * <let-dig>         = <letter> | <digit>
 * <letter>          = any one of the 52 alphabetic characters A through Z in
 *                     upper case and a through z in lower case
 * <digit>           = any one of the ten digits 0 through 9
 *
 * Keep support for leading dot: https://github.com/jshttp/cookie/issues/173
 *
 * > (Note that a leading %x2E ("."), if present, is ignored even though that
 * character is not permitted, but a trailing %x2E ("."), if present, will
 * cause the user agent to ignore the attribute.)
 */ const domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
/**
 * RegExp to match path-value in RFC 6265 sec 4.1.1
 *
 * path-value        = <any CHAR except CTLs or ";">
 * CHAR              = %x01-7F
 *                     ; defined in RFC 5234 appendix B.1
 */ const pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
/**
 * RegExp to match max-age-value in RFC 6265 sec 5.6.2
 */ const maxAgeRegExp = /^-?\d+$/;
const __toString = Object.prototype.toString;
const NullObject = /* @__PURE__ */ (()=>{
    const C = function() {};
    C.prototype = Object.create(null);
    return C;
})();
/**
 * Parse a `Cookie` header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 */ function parseCookie(str, options) {
    const obj = new NullObject();
    const len = str.length;
    // RFC 6265 sec 4.1.1, RFC 2616 2.2 defines a cookie name consists of one char minimum, plus '='.
    if (len < 2) return obj;
    const dec = options?.decode || decode;
    let index = 0;
    do {
        const eqIdx = eqIndex(str, index, len);
        if (eqIdx === -1) break; // No more cookie pairs.
        const endIdx = endIndex(str, index, len);
        if (eqIdx > endIdx) {
            // backtrack on prior semicolon
            index = str.lastIndexOf(";", eqIdx - 1) + 1;
            continue;
        }
        const key = valueSlice(str, index, eqIdx);
        // only assign once
        if (obj[key] === undefined) {
            obj[key] = dec(valueSlice(str, eqIdx + 1, endIdx));
        }
        index = endIdx + 1;
    }while (index < len)
    return obj;
}
/**
 * Stringifies an object into an HTTP `Cookie` header.
 */ function stringifyCookie(cookie, options) {
    const enc = options?.encode || encodeURIComponent;
    const cookieStrings = [];
    for (const name of Object.keys(cookie)){
        const val = cookie[name];
        if (val === undefined) continue;
        if (!cookieNameRegExp.test(name)) {
            throw new TypeError(`cookie name is invalid: ${name}`);
        }
        const value = enc(val);
        if (!cookieValueRegExp.test(value)) {
            throw new TypeError(`cookie val is invalid: ${val}`);
        }
        cookieStrings.push(`${name}=${value}`);
    }
    return cookieStrings.join("; ");
}
function stringifySetCookie(_name, _val, _opts) {
    const cookie = typeof _name === "object" ? _name : {
        ..._opts,
        name: _name,
        value: String(_val)
    };
    const options = typeof _val === "object" ? _val : _opts;
    const enc = options?.encode || encodeURIComponent;
    if (!cookieNameRegExp.test(cookie.name)) {
        throw new TypeError(`argument name is invalid: ${cookie.name}`);
    }
    const value = cookie.value ? enc(cookie.value) : "";
    if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${cookie.value}`);
    }
    let str = cookie.name + "=" + value;
    if (cookie.maxAge !== undefined) {
        if (!Number.isInteger(cookie.maxAge)) {
            throw new TypeError(`option maxAge is invalid: ${cookie.maxAge}`);
        }
        str += "; Max-Age=" + cookie.maxAge;
    }
    if (cookie.domain) {
        if (!domainValueRegExp.test(cookie.domain)) {
            throw new TypeError(`option domain is invalid: ${cookie.domain}`);
        }
        str += "; Domain=" + cookie.domain;
    }
    if (cookie.path) {
        if (!pathValueRegExp.test(cookie.path)) {
            throw new TypeError(`option path is invalid: ${cookie.path}`);
        }
        str += "; Path=" + cookie.path;
    }
    if (cookie.expires) {
        if (!isDate(cookie.expires) || !Number.isFinite(cookie.expires.valueOf())) {
            throw new TypeError(`option expires is invalid: ${cookie.expires}`);
        }
        str += "; Expires=" + cookie.expires.toUTCString();
    }
    if (cookie.httpOnly) {
        str += "; HttpOnly";
    }
    if (cookie.secure) {
        str += "; Secure";
    }
    if (cookie.partitioned) {
        str += "; Partitioned";
    }
    if (cookie.priority) {
        const priority = typeof cookie.priority === "string" ? cookie.priority.toLowerCase() : undefined;
        switch(priority){
            case "low":
                str += "; Priority=Low";
                break;
            case "medium":
                str += "; Priority=Medium";
                break;
            case "high":
                str += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${cookie.priority}`);
        }
    }
    if (cookie.sameSite) {
        const sameSite = typeof cookie.sameSite === "string" ? cookie.sameSite.toLowerCase() : cookie.sameSite;
        switch(sameSite){
            case true:
            case "strict":
                str += "; SameSite=Strict";
                break;
            case "lax":
                str += "; SameSite=Lax";
                break;
            case "none":
                str += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${cookie.sameSite}`);
        }
    }
    return str;
}
/**
 * Deserialize a `Set-Cookie` header into an object.
 *
 * deserialize('foo=bar; httpOnly')
 *   => { name: 'foo', value: 'bar', httpOnly: true }
 */ function parseSetCookie(str, options) {
    const dec = options?.decode || decode;
    const len = str.length;
    const endIdx = endIndex(str, 0, len);
    const eqIdx = eqIndex(str, 0, endIdx);
    const setCookie = eqIdx === -1 ? {
        name: "",
        value: dec(valueSlice(str, 0, endIdx))
    } : {
        name: valueSlice(str, 0, eqIdx),
        value: dec(valueSlice(str, eqIdx + 1, endIdx))
    };
    let index = endIdx + 1;
    while(index < len){
        const endIdx = endIndex(str, index, len);
        const eqIdx = eqIndex(str, index, endIdx);
        const attr = eqIdx === -1 ? valueSlice(str, index, endIdx) : valueSlice(str, index, eqIdx);
        const val = eqIdx === -1 ? undefined : valueSlice(str, eqIdx + 1, endIdx);
        switch(attr.toLowerCase()){
            case "httponly":
                setCookie.httpOnly = true;
                break;
            case "secure":
                setCookie.secure = true;
                break;
            case "partitioned":
                setCookie.partitioned = true;
                break;
            case "domain":
                setCookie.domain = val;
                break;
            case "path":
                setCookie.path = val;
                break;
            case "max-age":
                if (val && maxAgeRegExp.test(val)) setCookie.maxAge = Number(val);
                break;
            case "expires":
                if (!val) break;
                const date = new Date(val);
                if (Number.isFinite(date.valueOf())) setCookie.expires = date;
                break;
            case "priority":
                if (!val) break;
                const priority = val.toLowerCase();
                if (priority === "low" || priority === "medium" || priority === "high") {
                    setCookie.priority = priority;
                }
                break;
            case "samesite":
                if (!val) break;
                const sameSite = val.toLowerCase();
                if (sameSite === "lax" || sameSite === "strict" || sameSite === "none") {
                    setCookie.sameSite = sameSite;
                }
                break;
        }
        index = endIdx + 1;
    }
    return setCookie;
}
/**
 * Find the `;` character between `min` and `len` in str.
 */ function endIndex(str, min, len) {
    const index = str.indexOf(";", min);
    return index === -1 ? len : index;
}
/**
 * Find the `=` character between `min` and `max` in str.
 */ function eqIndex(str, min, max) {
    const index = str.indexOf("=", min);
    return index < max ? index : -1;
}
/**
 * Slice out a value between startPod to max.
 */ function valueSlice(str, min, max) {
    let start = min;
    let end = max;
    do {
        const code = str.charCodeAt(start);
        if (code !== 0x20 /*   */  && code !== 0x09 /* \t */ ) break;
    }while (++start < end)
    while(end > start){
        const code = str.charCodeAt(end - 1);
        if (code !== 0x20 /*   */  && code !== 0x09 /* \t */ ) break;
        end--;
    }
    return str.slice(start, end);
}
/**
 * URL-decode string value. Optimized to skip native call when no %.
 */ function decode(str) {
    if (str.indexOf("%") === -1) return str;
    try {
        return decodeURIComponent(str);
    } catch (e) {
        return str;
    }
}
/**
 * Determine if value is a Date.
 */ function isDate(val) {
    return __toString.call(val) === "[object Date]";
} //# sourceMappingURL=index.js.map
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/commons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERROR_PACKET",
    ()=>ERROR_PACKET,
    "PACKET_TYPES",
    ()=>PACKET_TYPES,
    "PACKET_TYPES_REVERSE",
    ()=>PACKET_TYPES_REVERSE
]);
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach((key)=>{
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = {
    type: "error",
    data: "parser error"
};
;
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/encodePacket.browser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encodePacket",
    ()=>encodePacket,
    "encodePacketToBinary",
    ()=>encodePacketToBinary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/commons.js [app-client] (ecmascript)");
;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView = (obj)=>{
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback)=>{
    if (withNativeBlob && data instanceof Blob) {
        if (supportsBinary) {
            return callback(data);
        } else {
            return encodeBlobAsBase64(data, callback);
        }
    } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
        if (supportsBinary) {
            return callback(data);
        } else {
            return encodeBlobAsBase64(new Blob([
                data
            ]), callback);
        }
    }
    // plain string
    return callback(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKET_TYPES"][type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback)=>{
    const fileReader = new FileReader();
    fileReader.onload = function() {
        const content = fileReader.result.split(",")[1];
        callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
};
function toArray(data) {
    if (data instanceof Uint8Array) {
        return data;
    } else if (data instanceof ArrayBuffer) {
        return new Uint8Array(data);
    } else {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
}
let TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
    if (withNativeBlob && packet.data instanceof Blob) {
        return packet.data.arrayBuffer().then(toArray).then(callback);
    } else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) {
        return callback(toArray(packet.data));
    }
    encodePacket(packet, false, (encoded)=>{
        if (!TEXT_ENCODER) {
            TEXT_ENCODER = new TextEncoder();
        }
        callback(TEXT_ENCODER.encode(encoded));
    });
}
;
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>decode,
    "encode",
    ()=>encode
]);
// imported from https://github.com/socketio/base64-arraybuffer
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
const lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for(let i = 0; i < chars.length; i++){
    lookup[chars.charCodeAt(i)] = i;
}
const encode = (arraybuffer)=>{
    let bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = '';
    for(i = 0; i < len; i += 3){
        base64 += chars[bytes[i] >> 2];
        base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + '=';
    } else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + '==';
    }
    return base64;
};
const decode = (base64)=>{
    let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for(i = 0; i < len; i += 4){
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
};
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/decodePacket.browser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodePacket",
    ()=>decodePacket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/commons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$contrib$2f$base64$2d$arraybuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js [app-client] (ecmascript)");
;
;
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType)=>{
    if (typeof encodedPacket !== "string") {
        return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType)
        };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
        return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
        };
    }
    const packetType = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKET_TYPES_REVERSE"][type];
    if (!packetType) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_PACKET"];
    }
    return encodedPacket.length > 1 ? {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKET_TYPES_REVERSE"][type],
        data: encodedPacket.substring(1)
    } : {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKET_TYPES_REVERSE"][type]
    };
};
const decodeBase64Packet = (data, binaryType)=>{
    if (withNativeArrayBuffer) {
        const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$contrib$2f$base64$2d$arraybuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(data);
        return mapBinary(decoded, binaryType);
    } else {
        return {
            base64: true,
            data
        }; // fallback for old browsers
    }
};
const mapBinary = (data, binaryType)=>{
    switch(binaryType){
        case "blob":
            if (data instanceof Blob) {
                // from WebSocket + binaryType "blob"
                return data;
            } else {
                // from HTTP long-polling or WebTransport
                return new Blob([
                    data
                ]);
            }
        case "arraybuffer":
        default:
            if (data instanceof ArrayBuffer) {
                // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
                return data;
            } else {
                // from WebTransport (Uint8Array)
                return data.buffer;
            }
    }
};
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPacketDecoderStream",
    ()=>createPacketDecoderStream,
    "createPacketEncoderStream",
    ()=>createPacketEncoderStream,
    "decodePayload",
    ()=>decodePayload,
    "encodePayload",
    ()=>encodePayload,
    "protocol",
    ()=>protocol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$encodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/encodePacket.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$decodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/decodePacket.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/commons.js [app-client] (ecmascript)");
;
;
;
const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback)=>{
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i)=>{
        // force base64 encoding for binary packets
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$encodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodePacket"])(packet, false, (encodedPacket)=>{
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
                callback(encodedPackets.join(SEPARATOR));
            }
        });
    });
};
const decodePayload = (encodedPayload, binaryType)=>{
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for(let i = 0; i < encodedPackets.length; i++){
        const decodedPacket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$decodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodePacket"])(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
            break;
        }
    }
    return packets;
};
function createPacketEncoderStream() {
    return new TransformStream({
        transform (packet, controller) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$encodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodePacketToBinary"])(packet, (encodedPacket)=>{
                const payloadLength = encodedPacket.length;
                let header;
                // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
                if (payloadLength < 126) {
                    header = new Uint8Array(1);
                    new DataView(header.buffer).setUint8(0, payloadLength);
                } else if (payloadLength < 65536) {
                    header = new Uint8Array(3);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 126);
                    view.setUint16(1, payloadLength);
                } else {
                    header = new Uint8Array(9);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 127);
                    view.setBigUint64(1, BigInt(payloadLength));
                }
                // first bit indicates whether the payload is plain text (0) or binary (1)
                if (packet.data && typeof packet.data !== "string") {
                    header[0] |= 0x80;
                }
                controller.enqueue(header);
                controller.enqueue(encodedPacket);
            });
        }
    });
}
let TEXT_DECODER;
function totalLength(chunks) {
    return chunks.reduce((acc, chunk)=>acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
    if (chunks[0].length === size) {
        return chunks.shift();
    }
    const buffer = new Uint8Array(size);
    let j = 0;
    for(let i = 0; i < size; i++){
        buffer[i] = chunks[0][j++];
        if (j === chunks[0].length) {
            chunks.shift();
            j = 0;
        }
    }
    if (chunks.length && j < chunks[0].length) {
        chunks[0] = chunks[0].slice(j);
    }
    return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) {
        TEXT_DECODER = new TextDecoder();
    }
    const chunks = [];
    let state = 0 /* State.READ_HEADER */ ;
    let expectedLength = -1;
    let isBinary = false;
    return new TransformStream({
        transform (chunk, controller) {
            chunks.push(chunk);
            while(true){
                if (state === 0 /* State.READ_HEADER */ ) {
                    if (totalLength(chunks) < 1) {
                        break;
                    }
                    const header = concatChunks(chunks, 1);
                    isBinary = (header[0] & 0x80) === 0x80;
                    expectedLength = header[0] & 0x7f;
                    if (expectedLength < 126) {
                        state = 3 /* State.READ_PAYLOAD */ ;
                    } else if (expectedLength === 126) {
                        state = 1 /* State.READ_EXTENDED_LENGTH_16 */ ;
                    } else {
                        state = 2 /* State.READ_EXTENDED_LENGTH_64 */ ;
                    }
                } else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */ ) {
                    if (totalLength(chunks) < 2) {
                        break;
                    }
                    const headerArray = concatChunks(chunks, 2);
                    expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
                    state = 3 /* State.READ_PAYLOAD */ ;
                } else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */ ) {
                    if (totalLength(chunks) < 8) {
                        break;
                    }
                    const headerArray = concatChunks(chunks, 8);
                    const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
                    const n = view.getUint32(0);
                    if (n > Math.pow(2, 53 - 32) - 1) {
                        // the maximum safe integer in JavaScript is 2^53 - 1
                        controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_PACKET"]);
                        break;
                    }
                    expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
                    state = 3 /* State.READ_PAYLOAD */ ;
                } else {
                    if (totalLength(chunks) < expectedLength) {
                        break;
                    }
                    const data = concatChunks(chunks, expectedLength);
                    controller.enqueue((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$decodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodePacket"])(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
                    state = 0 /* State.READ_HEADER */ ;
                }
                if (expectedLength === 0 || expectedLength > maxPayload) {
                    controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_PACKET"]);
                    break;
                }
            }
        }
    });
}
const protocol = 4;
;
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@socket.io/component-emitter/lib/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */ __turbopack_context__.s([
    "Emitter",
    ()=>Emitter
]);
function Emitter(obj) {
    if (obj) return mixin(obj);
}
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */ function mixin(obj) {
    for(var key in Emitter.prototype){
        obj[key] = Emitter.prototype[key];
    }
    return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.once = function(event, fn) {
    function on() {
        this.off(event, on);
        fn.apply(this, arguments);
    }
    on.fn = fn;
    this.on(event, on);
    return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    // all
    if (0 == arguments.length) {
        this._callbacks = {};
        return this;
    }
    // specific event
    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this;
    // remove all handlers
    if (1 == arguments.length) {
        delete this._callbacks['$' + event];
        return this;
    }
    // remove specific handler
    var cb;
    for(var i = 0; i < callbacks.length; i++){
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
        }
    }
    // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.
    if (callbacks.length === 0) {
        delete this._callbacks['$' + event];
    }
    return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */ Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1), callbacks = this._callbacks['$' + event];
    for(var i = 1; i < arguments.length; i++){
        args[i - 1] = arguments[i];
    }
    if (callbacks) {
        callbacks = callbacks.slice(0);
        for(var i = 0, len = callbacks.length; i < len; ++i){
            callbacks[i].apply(this, args);
        }
    }
    return this;
};
// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */ Emitter.prototype.listeners = function(event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */ Emitter.prototype.hasListeners = function(event) {
    return !!this.listeners(event).length;
};
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/globals.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCookieJar",
    ()=>createCookieJar,
    "defaultBinaryType",
    ()=>defaultBinaryType,
    "globalThisShim",
    ()=>globalThisShim,
    "nextTick",
    ()=>nextTick
]);
const nextTick = (()=>{
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
        return (cb)=>Promise.resolve().then(cb);
    } else {
        return (cb, setTimeoutFn)=>setTimeoutFn(cb, 0);
    }
})();
const globalThisShim = (()=>{
    if (typeof self !== "undefined") {
        return self;
    } else if (typeof window !== "undefined") {
        return window;
    } else {
        return Function("return this")();
    }
})();
const defaultBinaryType = "arraybuffer";
function createCookieJar() {}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "byteLength",
    ()=>byteLength,
    "installTimerFunctions",
    ()=>installTimerFunctions,
    "pick",
    ()=>pick,
    "randomString",
    ()=>randomString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/globals.js [app-client] (ecmascript)");
;
function pick(obj, ...attr) {
    return attr.reduce((acc, k)=>{
        if (obj.hasOwnProperty(k)) {
            acc[k] = obj[k];
        }
        return acc;
    }, {});
}
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"].setTimeout;
const NATIVE_CLEAR_TIMEOUT = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"].clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"]);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"]);
    } else {
        obj.setTimeoutFn = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"].setTimeout.bind(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"]);
        obj.clearTimeoutFn = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"].clearTimeout.bind(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"]);
    }
}
// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
const BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
    if (typeof obj === "string") {
        return utf8Length(obj);
    }
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
    let c = 0, length = 0;
    for(let i = 0, l = str.length; i < l; i++){
        c = str.charCodeAt(i);
        if (c < 0x80) {
            length += 1;
        } else if (c < 0x800) {
            length += 2;
        } else if (c < 0xd800 || c >= 0xe000) {
            length += 3;
        } else {
            i++;
            length += 4;
        }
    }
    return length;
}
function randomString() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/contrib/parseqs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */ __turbopack_context__.s([
    "decode",
    ()=>decode,
    "encode",
    ()=>encode
]);
function encode(obj) {
    let str = '';
    for(let i in obj){
        if (obj.hasOwnProperty(i)) {
            if (str.length) str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
        }
    }
    return str;
}
function decode(qs) {
    let qry = {};
    let pairs = qs.split('&');
    for(let i = 0, l = pairs.length; i < l; i++){
        let pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transport.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transport",
    ()=>Transport,
    "TransportError",
    ()=>TransportError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$decodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/decodePacket.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@socket.io/component-emitter/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/contrib/parseqs.js [app-client] (ecmascript)");
;
;
;
;
class TransportError extends Error {
    constructor(reason, description, context){
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
    }
}
class Transport extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"] {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */ constructor(opts){
        super();
        this.writable = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installTimerFunctions"])(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.socket = opts.socket;
        this.supportsBinary = !opts.forceBase64;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */ onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
    }
    /**
     * Opens the transport.
     */ open() {
        this.readyState = "opening";
        this.doOpen();
        return this;
    }
    /**
     * Closes the transport.
     */ close() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */ send(packets) {
        if (this.readyState === "open") {
            this.write(packets);
        } else {
        // this might happen if the transport was silently closed in the beforeunload event handler
        }
    }
    /**
     * Called upon open
     *
     * @protected
     */ onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */ onData(data) {
        const packet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$decodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodePacket"])(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */ onPacket(packet) {
        super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */ onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */ pause(onPause) {}
    createUri(schema, query = {}) {
        return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
    }
    _hostname() {
        const hostname = this.opts.hostname;
        return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    }
    _port() {
        if (this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80)) {
            return ":" + this.opts.port;
        } else {
            return "";
        }
    }
    _query(query) {
        const encodedQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(query);
        return encodedQuery.length ? "?" + encodedQuery : "";
    }
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/polling.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Polling",
    ()=>Polling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/index.js [app-client] (ecmascript) <locals>");
;
;
;
class Polling extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transport"] {
    constructor(){
        super(...arguments);
        this._polling = false;
    }
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */ doOpen() {
        this._poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */ pause(onPause) {
        this.readyState = "pausing";
        const pause = ()=>{
            this.readyState = "paused";
            onPause();
        };
        if (this._polling || !this.writable) {
            let total = 0;
            if (this._polling) {
                total++;
                this.once("pollComplete", function() {
                    --total || pause();
                });
            }
            if (!this.writable) {
                total++;
                this.once("drain", function() {
                    --total || pause();
                });
            }
        } else {
            pause();
        }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */ _poll() {
        this._polling = true;
        this.doPoll();
        this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */ onData(data) {
        const callback = (packet)=>{
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") {
                this.onOpen();
            }
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose({
                    description: "transport closed by the server"
                });
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodePayload"])(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this._polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) {
                this._poll();
            } else {}
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */ doClose() {
        const close = ()=>{
            this.write([
                {
                    type: "close"
                }
            ]);
        };
        if ("open" === this.readyState) {
            close();
        } else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            this.once("open", close);
        }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */ write(packets) {
        this.writable = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodePayload"])(packets, (data)=>{
            this.doWrite(data, ()=>{
                this.writable = true;
                this.emitReserved("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */ uri() {
        const schema = this.opts.secure ? "https" : "http";
        const query = this.query || {};
        // cache busting is forced
        if (false !== this.opts.timestampRequests) {
            query[this.opts.timestampParam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomString"])();
        }
        if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
        }
        return this.createUri(schema, query);
    }
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/contrib/has-cors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasCORS",
    ()=>hasCORS
]);
// imported from https://github.com/component/has-cors
let value = false;
try {
    value = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
// if XMLHttp support is disabled in IE then it will throw
// when trying to create
}
const hasCORS = value;
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/polling-xhr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseXHR",
    ()=>BaseXHR,
    "Request",
    ()=>Request,
    "XHR",
    ()=>XHR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/polling.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@socket.io/component-emitter/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$has$2d$cors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/contrib/has-cors.js [app-client] (ecmascript)");
;
;
;
;
;
function empty() {}
class BaseXHR extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polling"] {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */ constructor(opts){
        super(opts);
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) {
                port = isSSL ? "443" : "80";
            }
            this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
        }
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */ doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context)=>{
            this.onError("xhr post error", xhrStatus, context);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */ doPoll() {
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context)=>{
            this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
    }
}
class Request extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"] {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */ constructor(createRequest, uri, opts){
        super();
        this.createRequest = createRequest;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installTimerFunctions"])(this, opts);
        this._opts = opts;
        this._method = opts.method || "GET";
        this._uri = uri;
        this._data = undefined !== opts.data ? opts.data : null;
        this._create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */ _create() {
        var _a;
        const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this._opts.xd;
        const xhr = this._xhr = this.createRequest(opts);
        try {
            xhr.open(this._method, this._uri, true);
            try {
                if (this._opts.extraHeaders) {
                    // @ts-ignore
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for(let i in this._opts.extraHeaders){
                        if (this._opts.extraHeaders.hasOwnProperty(i)) {
                            xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
                        }
                    }
                }
            } catch (e) {}
            if ("POST" === this._method) {
                try {
                    xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                } catch (e) {}
            }
            try {
                xhr.setRequestHeader("Accept", "*/*");
            } catch (e) {}
            (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
            // ie6 check
            if ("withCredentials" in xhr) {
                xhr.withCredentials = this._opts.withCredentials;
            }
            if (this._opts.requestTimeout) {
                xhr.timeout = this._opts.requestTimeout;
            }
            xhr.onreadystatechange = ()=>{
                var _a;
                if (xhr.readyState === 3) {
                    (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(// @ts-ignore
                    xhr.getResponseHeader("set-cookie"));
                }
                if (4 !== xhr.readyState) return;
                if (200 === xhr.status || 1223 === xhr.status) {
                    this._onLoad();
                } else {
                    // make sure the `error` event handler that's user-set
                    // does not throw in the same tick and gets caught here
                    this.setTimeoutFn(()=>{
                        this._onError(typeof xhr.status === "number" ? xhr.status : 0);
                    }, 0);
                }
            };
            xhr.send(this._data);
        } catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(()=>{
                this._onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this._index = Request.requestsCount++;
            Request.requests[this._index] = this;
        }
    }
    /**
     * Called upon error.
     *
     * @private
     */ _onError(err) {
        this.emitReserved("error", err, this._xhr);
        this._cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */ _cleanup(fromError) {
        if ("undefined" === typeof this._xhr || null === this._xhr) {
            return;
        }
        this._xhr.onreadystatechange = empty;
        if (fromError) {
            try {
                this._xhr.abort();
            } catch (e) {}
        }
        if (typeof document !== "undefined") {
            delete Request.requests[this._index];
        }
        this._xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */ _onLoad() {
        const data = this._xhr.responseText;
        if (data !== null) {
            this.emitReserved("data", data);
            this.emitReserved("success");
            this._cleanup();
        }
    }
    /**
     * Aborts the request.
     *
     * @package
     */ abort() {
        this._cleanup();
    }
}
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */ if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
        // @ts-ignore
        attachEvent("onunload", unloadHandler);
    } else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"] ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for(let i in Request.requests){
        if (Request.requests.hasOwnProperty(i)) {
            Request.requests[i].abort();
        }
    }
}
const hasXHR2 = function() {
    const xhr = newRequest({
        xdomain: false
    });
    return xhr && xhr.responseType !== null;
}();
class XHR extends BaseXHR {
    constructor(opts){
        super(opts);
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
    }
    request(opts = {}) {
        Object.assign(opts, {
            xd: this.xd
        }, this.opts);
        return new Request(newRequest, this.uri(), opts);
    }
}
function newRequest(opts) {
    const xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$has$2d$cors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasCORS"])) {
            return new XMLHttpRequest();
        }
    } catch (e) {}
    if (!xdomain) {
        try {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"][[
                "Active"
            ].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch (e) {}
    }
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/websocket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseWS",
    ()=>BaseWS,
    "WS",
    ()=>WS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$encodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/encodePacket.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/globals.js [app-client] (ecmascript)");
;
;
;
;
// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
class BaseWS extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transport"] {
    get name() {
        return "websocket";
    }
    doOpen() {
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative ? {} : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
            opts.headers = this.opts.extraHeaders;
        }
        try {
            this.ws = this.createSocket(uri, protocols, opts);
        } catch (err) {
            return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType;
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */ addEventListeners() {
        this.ws.onopen = ()=>{
            if (this.opts.autoUnref) {
                this.ws._socket.unref();
            }
            this.onOpen();
        };
        this.ws.onclose = (closeEvent)=>this.onClose({
                description: "websocket connection closed",
                context: closeEvent
            });
        this.ws.onmessage = (ev)=>this.onData(ev.data);
        this.ws.onerror = (e)=>this.onError("websocket error", e);
    }
    write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for(let i = 0; i < packets.length; i++){
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$encodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodePacket"])(packet, this.supportsBinary, (data)=>{
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    this.doWrite(packet, data);
                } catch (e) {}
                if (lastPacket) {
                    // fake drain
                    // defer to next tick to allow Socket to clear writeBuffer
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTick"])(()=>{
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.onerror = ()=>{};
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */ uri() {
        const schema = this.opts.secure ? "wss" : "ws";
        const query = this.query || {};
        // append timestamp to URI
        if (this.opts.timestampRequests) {
            query[this.opts.timestampParam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomString"])();
        }
        // communicate binary support capabilities
        if (!this.supportsBinary) {
            query.b64 = 1;
        }
        return this.createUri(schema, query);
    }
}
const WebSocketCtor = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"].WebSocket || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"].MozWebSocket;
class WS extends BaseWS {
    createSocket(uri, protocols, opts) {
        return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
    }
    doWrite(_packet, data) {
        this.ws.send(data);
    }
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/webtransport.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WT",
    ()=>WT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/index.js [app-client] (ecmascript) <locals>");
;
;
;
class WT extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transport"] {
    get name() {
        return "webtransport";
    }
    doOpen() {
        try {
            // @ts-ignore
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
        } catch (err) {
            return this.emitReserved("error", err);
        }
        this._transport.closed.then(()=>{
            this.onClose();
        }).catch((err)=>{
            this.onError("webtransport error", err);
        });
        // note: we could have used async/await, but that would require some additional polyfills
        this._transport.ready.then(()=>{
            this._transport.createBidirectionalStream().then((stream)=>{
                const decoderStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createPacketDecoderStream"])(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
                const reader = stream.readable.pipeThrough(decoderStream).getReader();
                const encoderStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createPacketEncoderStream"])();
                encoderStream.readable.pipeTo(stream.writable);
                this._writer = encoderStream.writable.getWriter();
                const read = ()=>{
                    reader.read().then(({ done, value })=>{
                        if (done) {
                            return;
                        }
                        this.onPacket(value);
                        read();
                    }).catch((err)=>{});
                };
                read();
                const packet = {
                    type: "open"
                };
                if (this.query.sid) {
                    packet.data = `{"sid":"${this.query.sid}"}`;
                }
                this._writer.write(packet).then(()=>this.onOpen());
            });
        });
    }
    write(packets) {
        this.writable = false;
        for(let i = 0; i < packets.length; i++){
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            this._writer.write(packet).then(()=>{
                if (lastPacket) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTick"])(()=>{
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        var _a;
        (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
    }
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transports",
    ()=>transports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$polling$2d$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/polling-xhr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/websocket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$webtransport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/webtransport.js [app-client] (ecmascript)");
;
;
;
const transports = {
    websocket: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WS"],
    webtransport: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$webtransport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WT"],
    polling: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$polling$2d$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XHR"]
};
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/contrib/parseuri.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parse",
    ()=>parse
]);
// imported from https://github.com/galkn/parseuri
/**
 * Parses a URI
 *
 * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
 *
 * See:
 * - https://developer.mozilla.org/en-US/docs/Web/API/URL
 * - https://caniuse.com/url
 * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
 *
 * History of the parse() method:
 * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
 * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
 * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */ const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
    'source',
    'protocol',
    'authority',
    'userInfo',
    'user',
    'password',
    'host',
    'port',
    'relative',
    'path',
    'directory',
    'file',
    'query',
    'anchor'
];
function parse(str) {
    if (str.length > 8000) {
        throw "URI too long";
    }
    const src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    let m = re.exec(str || ''), uri = {}, i = 14;
    while(i--){
        uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
}
function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.slice(-1) == '/') {
        names.splice(names.length - 1, 1);
    }
    return names;
}
function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });
    return data;
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/socket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Socket",
    ()=>Socket,
    "SocketWithUpgrade",
    ()=>SocketWithUpgrade,
    "SocketWithoutUpgrade",
    ()=>SocketWithoutUpgrade
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/contrib/parseqs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseuri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/contrib/parseuri.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@socket.io/component-emitter/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-parser/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/globals.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
const OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) {
    // within a ServiceWorker, any event handler for the 'offline' event must be added on the initial evaluation of the
    // script, so we create one single event listener here which will forward the event to the socket instances
    addEventListener("offline", ()=>{
        OFFLINE_EVENT_LISTENERS.forEach((listener)=>listener());
    }, false);
}
class SocketWithoutUpgrade extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"] {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */ constructor(uri, opts){
        super();
        this.binaryType = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultBinaryType"];
        this.writeBuffer = [];
        this._prevBufferLen = 0;
        this._pingInterval = -1;
        this._pingTimeout = -1;
        this._maxPayload = -1;
        /**
         * The expiration timestamp of the {@link _pingTimeoutTimer} object is tracked, in case the timer is throttled and the
         * callback is not fired on time. This can happen for example when a laptop is suspended or when a phone is locked.
         */ this._pingTimeoutTime = Infinity;
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            const parsedUri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseuri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(uri);
            opts.hostname = parsedUri.host;
            opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
            opts.port = parsedUri.port;
            if (parsedUri.query) opts.query = parsedUri.query;
        } else if (opts.host) {
            opts.hostname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseuri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(opts.host).host;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installTimerFunctions"])(this, opts);
        this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = this.secure ? "443" : "80";
        }
        this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
        this.transports = [];
        this._transportsByName = {};
        opts.transports.forEach((t)=>{
            const transportName = t.prototype.name;
            this.transports.push(transportName);
            this._transportsByName[transportName] = t;
        });
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: false
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
        if (typeof this.opts.query === "string") {
            this.opts.query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(this.opts.query);
        }
        if (withEventListeners) {
            if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                this._beforeunloadEventListener = ()=>{
                    if (this.transport) {
                        // silently close the transport
                        this.transport.removeAllListeners();
                        this.transport.close();
                    }
                };
                addEventListener("beforeunload", this._beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
                this._offlineEventListener = ()=>{
                    this._onClose("transport close", {
                        description: "network connection lost"
                    });
                };
                OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
            }
        }
        if (this.opts.withCredentials) {
            this._cookieJar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCookieJar"])();
        }
        this._open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */ createTransport(name) {
        const query = Object.assign({}, this.opts.query);
        // append engine.io protocol identifier
        query.EIO = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["protocol"];
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id) query.sid = this.id;
        const opts = Object.assign({}, this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[name]);
        return new this._transportsByName[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */ _open() {
        if (this.transports.length === 0) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(()=>{
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        const transportName = this.opts.rememberUpgrade && SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const transport = this.createTransport(transportName);
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */ setTransport(transport) {
        if (this.transport) {
            this.transport.removeAllListeners();
        }
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (reason)=>this._onClose("transport close", reason));
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */ onOpen() {
        this.readyState = "open";
        SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
    }
    /**
     * Handles a packet.
     *
     * @private
     */ _onPacket(packet) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            switch(packet.type){
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this._sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    this._resetPingTimeout();
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this._onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        } else {}
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */ onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this._pingInterval = data.pingInterval;
        this._pingTimeout = data.pingTimeout;
        this._maxPayload = data.maxPayload;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState) return;
        this._resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */ _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const delay = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + delay;
        this._pingTimeoutTimer = this.setTimeoutFn(()=>{
            this._onClose("ping timeout");
        }, delay);
        if (this.opts.autoUnref) {
            this._pingTimeoutTimer.unref();
        }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */ _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this._prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
            this.emitReserved("drain");
        } else {
            this.flush();
        }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */ flush() {
        if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const packets = this._getWritablePackets();
            this.transport.send(packets);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this._prevBufferLen = packets.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */ _getWritablePackets() {
        const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) {
            return this.writeBuffer;
        }
        let payloadSize = 1; // first packet type
        for(let i = 0; i < this.writeBuffer.length; i++){
            const data = this.writeBuffer[i].data;
            if (data) {
                payloadSize += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byteLength"])(data);
            }
            if (i > 0 && payloadSize > this._maxPayload) {
                return this.writeBuffer.slice(0, i);
            }
            payloadSize += 2; // separator + packet type
        }
        return this.writeBuffer;
    }
    /**
     * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
     *
     * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
     * `write()` method then the message would not be buffered by the Socket.IO client.
     *
     * @return {boolean}
     * @private
     */ /* private */ _hasPingExpired() {
        if (!this._pingTimeoutTime) return true;
        const hasExpired = Date.now() > this._pingTimeoutTime;
        if (hasExpired) {
            this._pingTimeoutTime = 0;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTick"])(()=>{
                this._onClose("ping timeout");
            }, this.setTimeoutFn);
        }
        return hasExpired;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */ write(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a message. Alias of {@link Socket#write}.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */ send(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */ _sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
            return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn) this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     */ close() {
        const close = ()=>{
            this._onClose("forced close");
            this.transport.close();
        };
        const cleanupAndClose = ()=>{
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = ()=>{
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
                this.once("drain", ()=>{
                    if (this.upgrading) {
                        waitForUpgrade();
                    } else {
                        close();
                    }
                });
            } else if (this.upgrading) {
                waitForUpgrade();
            } else {
                close();
            }
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */ _onError(err) {
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
            this.transports.shift();
            return this._open();
        }
        this.emitReserved("error", err);
        this._onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */ _onClose(reason, description) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            // clear timers
            this.clearTimeoutFn(this._pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (withEventListeners) {
                if (this._beforeunloadEventListener) {
                    removeEventListener("beforeunload", this._beforeunloadEventListener, false);
                }
                if (this._offlineEventListener) {
                    const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
                    if (i !== -1) {
                        OFFLINE_EVENT_LISTENERS.splice(i, 1);
                    }
                }
            }
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, description);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this._prevBufferLen = 0;
        }
    }
}
SocketWithoutUpgrade.protocol = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["protocol"];
class SocketWithUpgrade extends SocketWithoutUpgrade {
    constructor(){
        super(...arguments);
        this._upgrades = [];
    }
    onOpen() {
        super.onOpen();
        if ("open" === this.readyState && this.opts.upgrade) {
            for(let i = 0; i < this._upgrades.length; i++){
                this._probe(this._upgrades[i]);
            }
        }
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */ _probe(name) {
        let transport = this.createTransport(name);
        let failed = false;
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        const onTransportOpen = ()=>{
            if (failed) return;
            transport.send([
                {
                    type: "ping",
                    data: "probe"
                }
            ]);
            transport.once("packet", (msg)=>{
                if (failed) return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport) return;
                    SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
                    this.transport.pause(()=>{
                        if (failed) return;
                        if ("closed" === this.readyState) return;
                        cleanup();
                        this.setTransport(transport);
                        transport.send([
                            {
                                type: "upgrade"
                            }
                        ]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                } else {
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed) return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = (err)=>{
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) {
                freezeTransport();
            }
        }
        // Remove all listeners on the transport and on self
        const cleanup = ()=>{
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
            // favor WebTransport
            this.setTimeoutFn(()=>{
                if (!failed) {
                    transport.open();
                }
            }, 200);
        } else {
            transport.open();
        }
    }
    onHandshake(data) {
        this._upgrades = this._filterUpgrades(data.upgrades);
        super.onHandshake(data);
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */ _filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        for(let i = 0; i < upgrades.length; i++){
            if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
    }
}
class Socket extends SocketWithUpgrade {
    constructor(uri, opts = {}){
        const o = typeof uri === "object" ? uri : opts;
        if (!o.transports || o.transports && typeof o.transports[0] === "string") {
            o.transports = (o.transports || [
                "polling",
                "websocket",
                "webtransport"
            ]).map((transportName)=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transports"][transportName]).filter((t)=>!!t);
        }
        super(uri, o);
    }
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/polling-fetch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fetch",
    ()=>Fetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/polling.js [app-client] (ecmascript)");
;
class Fetch extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polling"] {
    doPoll() {
        this._fetch().then((res)=>{
            if (!res.ok) {
                return this.onError("fetch read error", res.status, res);
            }
            res.text().then((data)=>this.onData(data));
        }).catch((err)=>{
            this.onError("fetch read error", err);
        });
    }
    doWrite(data, callback) {
        this._fetch(data).then((res)=>{
            if (!res.ok) {
                return this.onError("fetch write error", res.status, res);
            }
            callback();
        }).catch((err)=>{
            this.onError("fetch write error", err);
        });
    }
    _fetch(data) {
        var _a;
        const isPost = data !== undefined;
        const headers = new Headers(this.opts.extraHeaders);
        if (isPost) {
            headers.set("content-type", "text/plain;charset=UTF-8");
        }
        (_a = this.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.appendCookies(headers);
        return fetch(this.uri(), {
            method: isPost ? "POST" : "GET",
            body: isPost ? data : null,
            headers,
            credentials: this.opts.withCredentials ? "include" : "omit"
        }).then((res)=>{
            var _a;
            // @ts-ignore getSetCookie() was added in Node.js v19.7.0
            (_a = this.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(res.headers.getSetCookie());
            return res;
        });
    }
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "protocol",
    ()=>protocol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/socket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseuri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/contrib/parseuri.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$polling$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/polling-fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$polling$2d$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/polling-xhr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/websocket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$webtransport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/transports/webtransport.js [app-client] (ecmascript)");
;
;
;
const protocol = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Socket"].protocol;
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
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-client/build/esm/url.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "url",
    ()=>url
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseuri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/contrib/parseuri.js [app-client] (ecmascript)");
;
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || typeof location !== "undefined" && location;
    if (null == uri) uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
                uri = loc.protocol + uri;
            } else {
                uri = loc.host + uri;
            }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            if ("undefined" !== typeof loc) {
                uri = loc.protocol + "//" + uri;
            } else {
                uri = "https://" + uri;
            }
        }
        // parse
        obj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseuri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
        } else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
        }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-client/build/esm/on.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "on",
    ()=>on
]);
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-client/build/esm/socket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Socket",
    ()=>Socket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-parser/build/esm-debug/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-client/build/esm/on.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@socket.io/component-emitter/lib/esm/index.js [app-client] (ecmascript)");
;
;
;
/**
 * Internal events.
 * These events can't be emitted by the user.
 */ const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
});
class Socket extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"] {
    /**
     * `Socket` constructor.
     */ constructor(io, nsp, opts){
        super();
        /**
         * Whether the socket is currently connected to the server.
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log(socket.connected); // true
         * });
         *
         * socket.on("disconnect", () => {
         *   console.log(socket.connected); // false
         * });
         */ this.connected = false;
        /**
         * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
         * be transmitted by the server.
         */ this.recovered = false;
        /**
         * Buffer for packets received before the CONNECT packet
         */ this.receiveBuffer = [];
        /**
         * Buffer for packets that will be sent once the socket is connected
         */ this.sendBuffer = [];
        /**
         * The queue of packets to be sent with retry in case of failure.
         *
         * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
         * @private
         */ this._queue = [];
        /**
         * A sequence to generate the ID of the {@link QueuedPacket}.
         * @private
         */ this._queueSeq = 0;
        this.ids = 0;
        /**
         * A map containing acknowledgement handlers.
         *
         * The `withError` attribute is used to differentiate handlers that accept an error as first argument:
         *
         * - `socket.emit("test", (err, value) => { ... })` with `ackTimeout` option
         * - `socket.timeout(5000).emit("test", (err, value) => { ... })`
         * - `const value = await socket.emitWithAck("test")`
         *
         * From those that don't:
         *
         * - `socket.emit("test", (value) => { ... });`
         *
         * In the first case, the handlers will be called with an error when:
         *
         * - the timeout is reached
         * - the socket gets disconnected
         *
         * In the second case, the handlers will be simply discarded upon disconnection, since the client will never receive
         * an acknowledgement from the server.
         *
         * @private
         */ this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) {
            this.auth = opts.auth;
        }
        this._opts = Object.assign({}, opts);
        if (this.io._autoConnect) this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */ get disconnected() {
        return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */ subEvents() {
        if (this.subs) return;
        const io = this.io;
        this.subs = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(io, "open", this.onopen.bind(this)),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(io, "packet", this.onpacket.bind(this)),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(io, "error", this.onerror.bind(this)),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(io, "close", this.onclose.bind(this))
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */ get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */ connect() {
        if (this.connected) return this;
        this.subEvents();
        if (!this.io["_reconnecting"]) this.io.open(); // ensure open
        if ("open" === this.io._readyState) this.onopen();
        return this;
    }
    /**
     * Alias for {@link connect()}.
     */ open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */ send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */ emit(ev, ...args) {
        var _a, _b, _c;
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev.toString() + '" is a reserved event name');
        }
        args.unshift(ev);
        if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(args);
            return this;
        }
        const packet = {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].EVENT,
            data: args
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
        const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
        const discardPacket = this.flags.volatile && !isTransportWritable;
        if (discardPacket) {} else if (isConnected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        } else {
            this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
    }
    /**
     * @private
     */ _registerAckCallback(id, ack) {
        var _a;
        const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(()=>{
            delete this.acks[id];
            for(let i = 0; i < this.sendBuffer.length; i++){
                if (this.sendBuffer[i].id === id) {
                    this.sendBuffer.splice(i, 1);
                }
            }
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        const fn = (...args)=>{
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, args);
        };
        fn.withError = true;
        this.acks[id] = fn;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */ emitWithAck(ev, ...args) {
        return new Promise((resolve, reject)=>{
            const fn = (arg1, arg2)=>{
                return arg1 ? reject(arg1) : resolve(arg2);
            };
            fn.withError = true;
            args.push(fn);
            this.emit(ev, ...args);
        });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */ _addToQueue(args) {
        let ack;
        if (typeof args[args.length - 1] === "function") {
            ack = args.pop();
        }
        const packet = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args,
            flags: Object.assign({
                fromQueue: true
            }, this.flags)
        };
        args.push((err, ...responseArgs)=>{
            if (packet !== this._queue[0]) {}
            const hasError = err !== null;
            if (hasError) {
                if (packet.tryCount > this._opts.retries) {
                    this._queue.shift();
                    if (ack) {
                        ack(err);
                    }
                }
            } else {
                this._queue.shift();
                if (ack) {
                    ack(null, ...responseArgs);
                }
            }
            packet.pending = false;
            return this._drainQueue();
        });
        this._queue.push(packet);
        this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */ _drainQueue(force = false) {
        if (!this.connected || this._queue.length === 0) {
            return;
        }
        const packet = this._queue[0];
        if (packet.pending && !force) {
            return;
        }
        packet.pending = true;
        packet.tryCount++;
        this.flags = packet.flags;
        this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */ packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */ onopen() {
        if (typeof this.auth == "function") {
            this.auth((data)=>{
                this._sendConnectPacket(data);
            });
        } else {
            this._sendConnectPacket(this.auth);
        }
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */ _sendConnectPacket(data) {
        this.packet({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, data) : data
        });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */ onerror(err) {
        if (!this.connected) {
            this.emitReserved("connect_error", err);
        }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */ onclose(reason, description) {
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
        this._clearAcks();
    }
    /**
     * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
     * the server.
     *
     * @private
     */ _clearAcks() {
        Object.keys(this.acks).forEach((id)=>{
            const isBuffered = this.sendBuffer.some((packet)=>String(packet.id) === id);
            if (!isBuffered) {
                // note: handlers that do not accept an error as first argument are ignored here
                const ack = this.acks[id];
                delete this.acks[id];
                if (ack.withError) {
                    ack.call(this, new Error("socket has been disconnected"));
                }
            }
        });
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */ onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace) return;
        switch(packet.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].CONNECT:
                if (packet.data && packet.data.sid) {
                    this.onconnect(packet.data.sid, packet.data.pid);
                } else {
                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].EVENT:
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].BINARY_EVENT:
                this.onevent(packet);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].ACK:
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].BINARY_ACK:
                this.onack(packet);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].DISCONNECT:
                this.ondisconnect();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */ onevent(packet) {
        const args = packet.data || [];
        if (null != packet.id) {
            args.push(this.ack(packet.id));
        }
        if (this.connected) {
            this.emitEvent(args);
        } else {
            this.receiveBuffer.push(Object.freeze(args));
        }
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners){
                listener.apply(this, args);
            }
        }
        super.emit.apply(this, args);
        if (this._pid && args.length && typeof args[args.length - 1] === "string") {
            this._lastOffset = args[args.length - 1];
        }
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */ ack(id) {
        const self = this;
        let sent = false;
        return function(...args) {
            // prevent double callbacks
            if (sent) return;
            sent = true;
            self.packet({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].ACK,
                id: id,
                data: args
            });
        };
    }
    /**
     * Called upon a server acknowledgement.
     *
     * @param packet
     * @private
     */ onack(packet) {
        const ack = this.acks[packet.id];
        if (typeof ack !== "function") {
            return;
        }
        delete this.acks[packet.id];
        // @ts-ignore FIXME ack is incorrectly inferred as 'never'
        if (ack.withError) {
            packet.data.unshift(null);
        }
        // @ts-ignore
        ack.apply(this, packet.data);
    }
    /**
     * Called upon server connect.
     *
     * @private
     */ onconnect(id, pid) {
        this.id = id;
        this.recovered = pid && this._pid === pid;
        this._pid = pid; // defined only if connection state recovery is enabled
        this.connected = true;
        this.emitBuffered();
        this._drainQueue(true);
        this.emitReserved("connect");
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */ emitBuffered() {
        this.receiveBuffer.forEach((args)=>this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet)=>{
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        });
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */ ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */ destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy)=>subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */ disconnect() {
        if (this.connected) {
            this.packet({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].DISCONNECT
            });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) {
            // fire events
            this.onclose("io client disconnect");
        }
        return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */ close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */ compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */ get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */ timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */ onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */ prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */ offAny(listener) {
        if (!this._anyListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyListeners;
            for(let i = 0; i < listeners.length; i++){
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        } else {
            this._anyListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */ listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */ onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */ prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */ offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyOutgoingListeners;
            for(let i = 0; i < listeners.length; i++){
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        } else {
            this._anyOutgoingListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */ listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */ notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners){
                listener.apply(this, packet.data);
            }
        }
    }
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-client/build/esm/contrib/backo2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */ __turbopack_context__.s([
    "Backoff",
    ()=>Backoff
]);
function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */ Backoff.prototype.duration = function() {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */ Backoff.prototype.reset = function() {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */ Backoff.prototype.setMin = function(min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */ Backoff.prototype.setMax = function(max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */ Backoff.prototype.setJitter = function(jitter) {
    this.jitter = jitter;
};
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-client/build/esm/manager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Manager",
    ()=>Manager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/socket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-client/build/esm/socket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-parser/build/esm-debug/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-client/build/esm/on.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$backo2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-client/build/esm/contrib/backo2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@socket.io/component-emitter/lib/esm/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
class Manager extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"] {
    constructor(uri, opts){
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installTimerFunctions"])(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$backo2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Backoff"]({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect) this.open();
    }
    reconnection(v) {
        if (!arguments.length) return this._reconnection;
        this._reconnection = !!v;
        if (!v) {
            this.skipReconnect = true;
        }
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined) return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined) return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined) return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined) return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length) return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */ maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
        }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */ open(fn) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Socket"](this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(socket, "open", function() {
            self.onopen();
            fn && fn();
        });
        const onError = (err)=>{
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
                fn(err);
            } else {
                // Only do this if there is no fn to handle the error
                this.maybeReconnectOnOpen();
            }
        };
        // emit `error`
        const errorSub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(socket, "error", onError);
        if (false !== this._timeout) {
            const timeout = this._timeout;
            // set timer
            const timer = this.setTimeoutFn(()=>{
                openSubDestroy();
                onError(new Error("timeout"));
                socket.close();
            }, timeout);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(()=>{
                this.clearTimeoutFn(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */ connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */ onopen() {
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(socket, "ping", this.onping.bind(this)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(socket, "data", this.ondata.bind(this)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(socket, "error", this.onerror.bind(this)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(socket, "close", this.onclose.bind(this)), // @ts-ignore
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */ onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */ ondata(data) {
        try {
            this.decoder.add(data);
        } catch (e) {
            this.onclose("parse error", e);
        }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */ ondecoded(packet) {
        // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTick"])(()=>{
            this.emitReserved("packet", packet);
        }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */ onerror(err) {
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */ socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Socket"](this, nsp, opts);
            this.nsps[nsp] = socket;
        } else if (this._autoConnect && !socket.active) {
            socket.connect();
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */ _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps){
            const socket = this.nsps[nsp];
            if (socket.active) {
                return;
            }
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */ _packet(packet) {
        const encodedPackets = this.encoder.encode(packet);
        for(let i = 0; i < encodedPackets.length; i++){
            this.engine.write(encodedPackets[i], packet.options);
        }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */ cleanup() {
        this.subs.forEach((subDestroy)=>subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */ _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
    }
    /**
     * Alias for close()
     *
     * @private
     */ disconnect() {
        return this._close();
    }
    /**
     * Called when:
     *
     * - the low-level engine is closed
     * - the parser encountered a badly formatted packet
     * - all sockets are disconnected
     *
     * @private
     */ onclose(reason, description) {
        var _a;
        this.cleanup();
        (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */ reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        } else {
            const delay = this.backoff.duration();
            this._reconnecting = true;
            const timer = this.setTimeoutFn(()=>{
                if (self.skipReconnect) return;
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect) return;
                self.open((err)=>{
                    if (err) {
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    } else {
                        self.onreconnect();
                    }
                });
            }, delay);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(()=>{
                this.clearTimeoutFn(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */ onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connect",
    ()=>lookup,
    "default",
    ()=>lookup,
    "io",
    ()=>lookup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-client/build/esm/url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-client/build/esm/manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-client/build/esm/socket.js [app-client] (ecmascript)");
/**
 * Protocol version.
 *
 * @public
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-parser/build/esm-debug/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/engine.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
;
;
;
/**
 * Managers cache.
 */ const cache = {};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["url"])(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    let io;
    if (newConnection) {
        io = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Manager"](source, opts);
    } else {
        if (!cache[id]) {
            cache[id] = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Manager"](source, opts);
        }
        io = cache[id];
    }
    if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Manager"],
    Socket: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Socket"],
    io: lookup,
    connect: lookup
});
;
;
;
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-parser/build/esm-debug/is-binary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasBinary",
    ()=>hasBinary,
    "isBinary",
    ()=>isBinary
]);
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj)=>{
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (Array.isArray(obj)) {
        for(let i = 0, l = obj.length; i < l; i++){
            if (hasBinary(obj[i])) {
                return true;
            }
        }
        return false;
    }
    if (isBinary(obj)) {
        return true;
    }
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
    }
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
        }
    }
    return false;
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-parser/build/esm-debug/binary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deconstructPacket",
    ()=>deconstructPacket,
    "reconstructPacket",
    ()=>reconstructPacket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$is$2d$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-parser/build/esm-debug/is-binary.js [app-client] (ecmascript)");
;
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return {
        packet: pack,
        buffers: buffers
    };
}
function _deconstructPacket(data, buffers) {
    if (!data) return data;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$is$2d$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBinary"])(data)) {
        const placeholder = {
            _placeholder: true,
            num: buffers.length
        };
        buffers.push(data);
        return placeholder;
    } else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for(let i = 0; i < data.length; i++){
            newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
    } else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for(const key in data){
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                newData[key] = _deconstructPacket(data[key], buffers);
            }
        }
        return newData;
    }
    return data;
}
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
}
function _reconstructPacket(data, buffers) {
    if (!data) return data;
    if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
        if (isIndexValid) {
            return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        } else {
            throw new Error("illegal attachments");
        }
    } else if (Array.isArray(data)) {
        for(let i = 0; i < data.length; i++){
            data[i] = _reconstructPacket(data[i], buffers);
        }
    } else if (typeof data === "object") {
        for(const key in data){
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                data[key] = _reconstructPacket(data[key], buffers);
            }
        }
    }
    return data;
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-parser/build/esm-debug/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Decoder",
    ()=>Decoder,
    "Encoder",
    ()=>Encoder,
    "PacketType",
    ()=>PacketType,
    "isPacketValid",
    ()=>isPacketValid,
    "protocol",
    ()=>protocol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/@socket.io/component-emitter/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-parser/build/esm-debug/binary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$is$2d$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/socket.io-parser/build/esm-debug/is-binary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/debug/src/browser.js [app-client] (ecmascript)"); // debug()
;
;
;
;
const debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("socket.io-parser"); // debug()
/**
 * These strings must not be used as event names, as they have a special meaning.
 */ const RESERVED_EVENTS = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener"
];
const protocol = 5;
var PacketType;
(function(PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */ constructor(replacer){
        this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */ encode(obj) {
        debug("encoding packet %j", obj);
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$is$2d$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasBinary"])(obj)) {
                return this.encodeAsBinary({
                    type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
                    nsp: obj.nsp,
                    data: obj.data,
                    id: obj.id
                });
            }
        }
        return [
            this.encodeAsString(obj)
        ];
    }
    /**
     * Encode packet as string.
     */ encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
        }
        // immediately followed by the id
        if (null != obj.id) {
            str += obj.id;
        }
        // json data
        if (null != obj.data) {
            str += JSON.stringify(obj.data, this.replacer);
        }
        debug("encoded %j as %s", obj, str);
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */ encodeAsBinary(obj) {
        const deconstruction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deconstructPacket"])(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
class Decoder extends __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"] {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */ constructor(reviver){
        super();
        this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */ add(obj) {
        let packet;
        if (typeof obj === "string") {
            if (this.reconstructor) {
                throw new Error("got plaintext data when reconstructing a packet");
            }
            packet = this.decodeString(obj);
            const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
            if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
                packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                    super.emitReserved("decoded", packet);
                }
            } else {
                // non-binary full packet
                super.emitReserved("decoded", packet);
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$is$2d$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBinary"])(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
            } else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        } else {
            throw new Error("Unknown type: " + obj);
        }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */ decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0))
        };
        if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
        }
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while(str.charAt(++i) !== "-" && i != str.length){}
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
            }
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while(++i){
                const c = str.charAt(i);
                if ("," === c) break;
                if (i === str.length) break;
            }
            p.nsp = str.substring(start, i);
        } else {
            p.nsp = "/";
        }
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while(++i){
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length) break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
            } else {
                throw new Error("invalid payload");
            }
        }
        debug("decoded %s as %j", str, p);
        return p;
    }
    tryParse(str) {
        try {
            return JSON.parse(str, this.reviver);
        } catch (e) {
            return false;
        }
    }
    static isPayloadValid(type, payload) {
        switch(type){
            case PacketType.CONNECT:
                return isObject(payload);
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || isObject(payload);
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */ destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
        }
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */ class BinaryReconstructor {
    constructor(packet){
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */ takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2d$debug$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reconstructPacket"])(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */ finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}
function isNamespaceValid(nsp) {
    return typeof nsp === "string";
}
// see https://caniuse.com/mdn-javascript_builtins_number_isinteger
const isInteger = Number.isInteger || function(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};
function isAckIdValid(id) {
    return id === undefined || isInteger(id);
}
// see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}
function isDataValid(type, payload) {
    switch(type){
        case PacketType.CONNECT:
            return payload === undefined || isObject(payload);
        case PacketType.DISCONNECT:
            return payload === undefined;
        case PacketType.EVENT:
            return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
        case PacketType.ACK:
            return Array.isArray(payload);
        case PacketType.CONNECT_ERROR:
            return typeof payload === "string" || isObject(payload);
        default:
            return false;
    }
}
function isPacketValid(packet) {
    return isNamespaceValid(packet.nsp) && isAckIdValid(packet.id) && isDataValid(packet.type, packet.data);
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/ms/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/debug/src/common.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/ms/index.js [app-client] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/debug/src/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
        return true;
    }
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && 'env' in __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
        r = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/debug/src/common.js [app-client] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/get-browser-rtc/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

// originally pulled out of simple-peer
module.exports = function getBrowserRTC() {
    if (typeof globalThis === 'undefined') return null;
    var wrtc = {
        RTCPeerConnection: globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection,
        RTCSessionDescription: globalThis.RTCSessionDescription || globalThis.mozRTCSessionDescription || globalThis.webkitRTCSessionDescription,
        RTCIceCandidate: globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate
    };
    if (!wrtc.RTCPeerConnection) return null;
    return wrtc;
};
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/base64-js/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
    }
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength){
        parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    }
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/ieee754/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8){}
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8){}
    if (e === 0) {
        e = 1 - eBias;
    } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) {
            value += rt / c;
        } else {
            value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8){}
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8){}
    buffer[offset + i - d] |= s * 128;
};
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ const base64 = __turbopack_context__.r("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/base64-js/index.js [app-client] (ecmascript)");
const ieee754 = __turbopack_context__.r("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/ieee754/index.js [app-client] (ecmascript)");
const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
}
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
    }
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
            throw new TypeError('The "string" argument must be of type string. Received type number');
        }
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192; // not used by this implementation
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') {
        return fromString(value, encodingOrOffset);
    }
    if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
    }
    if (value == null) {
        throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
    }
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof value === 'number') {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
    }
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) {
        return Buffer.from(valueOf, encodingOrOffset, length);
    }
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
        return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    }
    throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be of type number');
    } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
    }
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) {
        return createBuffer(size);
    }
    if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpreted as a start offset.
        return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    }
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8';
    }
    if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding);
    }
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        buf = buf.slice(0, actual);
    }
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1){
        buf[i] = array[i] & 255;
    }
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
    }
    if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
    }
    let buf;
    if (byteOffset === undefined && length === undefined) {
        buf = new Uint8Array(array);
    } else if (length === undefined) {
        buf = new Uint8Array(array, byteOffset);
    } else {
        buf = new Uint8Array(array, byteOffset, length);
    }
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
            return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
            return createBuffer(0);
        }
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
    }
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
    }
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) {
        length = 0;
    }
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    }
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i){
        if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
        }
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (list.length === 0) {
        return Buffer.alloc(0);
    }
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i){
            length += list[i].length;
        }
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else {
                Uint8Array.prototype.set.call(buffer, buf, pos);
            }
        } else if (!Buffer.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
            buf.copy(buffer, pos);
        }
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) {
        return string.length;
    }
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
    }
    if (typeof string !== 'string') {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + typeof string);
    }
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;){
        switch(encoding){
            case 'ascii':
            case 'latin1':
            case 'binary':
                return len;
            case 'utf8':
            case 'utf-8':
                return utf8ToBytes(string).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return len * 2;
            case 'hex':
                return len >>> 1;
            case 'base64':
                return base64ToBytes(string).length;
            default:
                if (loweredCase) {
                    return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
                    ;
                }
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
        }
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) {
        start = 0;
    }
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) {
        return '';
    }
    if (end === undefined || end > this.length) {
        end = this.length;
    }
    if (end <= 0) {
        return '';
    }
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) {
        return '';
    }
    if (!encoding) encoding = 'utf8';
    while(true){
        switch(encoding){
            case 'hex':
                return hexSlice(this, start, end);
            case 'utf8':
            case 'utf-8':
                return utf8Slice(this, start, end);
            case 'ascii':
                return asciiSlice(this, start, end);
            case 'latin1':
            case 'binary':
                return latin1Slice(this, start, end);
            case 'base64':
                return base64Slice(this, start, end);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return utf16leSlice(this, start, end);
            default:
                if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                encoding = (encoding + '').toLowerCase();
                loweredCase = true;
        }
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits');
    }
    for(let i = 0; i < len; i += 2){
        swap(this, i, i + 1);
    }
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits');
    }
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits');
    }
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = '';
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) {
    Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
}
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) {
        target = Buffer.from(target, target.offset, target.byteLength);
    }
    if (!Buffer.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + typeof target);
    }
    if (start === undefined) {
        start = 0;
    }
    if (end === undefined) {
        end = target ? target.length : 0;
    }
    if (thisStart === undefined) {
        thisStart = 0;
    }
    if (thisEnd === undefined) {
        thisEnd = this.length;
    }
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index');
    }
    if (thisStart >= thisEnd && start >= end) {
        return 0;
    }
    if (thisStart >= thisEnd) {
        return -1;
    }
    if (start >= end) {
        return 1;
    }
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i){
        if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
        }
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
    } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
    }
    byteOffset = +byteOffset; // Coerce to Number.
    if (numberIsNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : buffer.length - 1;
    }
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') {
        val = Buffer.from(val, encoding);
    }
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
            return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 0xFF; // Search for a byte value [0-255]
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) {
                return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
                return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) {
                return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) {
            return buf[i];
        } else {
            return buf.readUInt16BE(i * indexSize);
        }
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++){
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                if (foundIndex === -1) foundIndex = i;
                if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
            } else {
                if (foundIndex !== -1) i -= i - foundIndex;
                foundIndex = -1;
            }
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++){
                if (read(arr, i + j) !== read(val, j)) {
                    found = false;
                    break;
                }
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) {
        length = remaining;
    } else {
        length = Number(length);
        if (length > remaining) {
            length = remaining;
        }
    }
    const strLen = string.length;
    if (length > strLen / 2) {
        length = strLen / 2;
    }
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else {
        throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    }
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds');
    }
    if (!encoding) encoding = 'utf8';
    let loweredCase = false;
    for(;;){
        switch(encoding){
            case 'hex':
                return hexWrite(this, string, offset, length);
            case 'utf8':
            case 'utf-8':
                return utf8Write(this, string, offset, length);
            case 'ascii':
            case 'latin1':
            case 'binary':
                return asciiWrite(this, string, offset, length);
            case 'base64':
                // Warning: maxLength not taken into account in base64Write
                return base64Write(this, string, offset, length);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return ucs2Write(this, string, offset, length);
            default:
                if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
        }
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
    } else {
        return base64.fromByteArray(buf.slice(start, end));
    }
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) {
                        codePoint = firstByte;
                    }
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) {
                            codePoint = tempCodePoint;
                        }
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                            codePoint = tempCodePoint;
                        }
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                            codePoint = tempCodePoint;
                        }
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
        ;
    }
    // Decode in chunks to avoid "call stack size exceeded".
    let res = '';
    let i = 0;
    while(i < len){
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i){
        ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i){
        ret += String.fromCharCode(buf[i]);
    }
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = '';
    for(let i = start; i < end; ++i){
        out += hexSliceLookupTable[buf[i]];
    }
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2){
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) {
        start = len;
    }
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) {
        end = len;
    }
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100)){
        val += this[offset + i] * mul;
    }
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
    }
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100)){
        val += this[offset + --byteLength] * mul;
    }
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 8);
    }
    const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 8);
    }
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100)){
        val += this[offset + i] * mul;
    }
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100)){
        val += this[offset + --i] * mul;
    }
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 8);
    }
    const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24) // Overflow
    ;
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 8);
    }
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        this[offset + i] = value / mul & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        this[offset + i] = value / mul & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
    }
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
        // Use built-in when available, missing from IE11
        this.copyWithin(targetStart, start, end);
    } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    }
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
            throw new TypeError('encoding must be a string');
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
            throw new TypeError('Unknown encoding: ' + encoding);
        }
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
                // Fast path: If `val` fits into a single byte, use that numeric value.
                val = code;
            }
        }
    } else if (typeof val === 'number') {
        val = val & 255;
    } else if (typeof val === 'boolean') {
        val = Number(val);
    }
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index');
    }
    if (end <= start) {
        return this;
    }
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === 'number') {
        for(i = start; i < end; ++i){
            this[i] = val;
        }
    } else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for(i = 0; i < end - start; ++i){
            this[i + start] = bytes[i % len];
        }
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack; // eslint-disable-line no-unused-expressions
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E('ERR_BUFFER_OUT_OF_BOUNDS', function(name) {
    if (name) {
        return `${name} is outside of buffer bounds`;
    }
    return 'Attempt to access memory outside buffer bounds';
}, RangeError);
E('ERR_INVALID_ARG_TYPE', function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E('ERR_OUT_OF_RANGE', function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
    } else if (typeof input === 'bigint') {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
            received = addNumericalSeparator(received);
        }
        received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = '';
    let i = val.length;
    const start = val[0] === '-' ? 1 : 0;
    for(; i >= start + 4; i -= 3){
        res = `_${val.slice(i - 3, i)}${res}`;
    }
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
        boundsError(offset, buf.length - (byteLength + 1));
    }
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : '';
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) {
                range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            } else {
                range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
            }
        } else {
            range = `>= ${min}${n} and <= ${max}${n}`;
        }
        throw new errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== 'number') {
        throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
    }
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    }
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0){
        str = str + '=';
    }
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) {
            // valid bmp char, but last char was a lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else {
            throw new Error('Invalid code point');
        }
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = '0123456789abcdef';
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j){
            table[i16 + j] = alphabet[i] + alphabet[j];
        }
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/safe-buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ var buffer = __turbopack_context__.r("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/buffer/index.js [app-client] (ecmascript)");
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src){
        dst[key] = src[key];
    }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
    module.exports = buffer;
} else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
SafeBuffer.prototype = Object.create(Buffer.prototype);
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number');
    }
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
        } else {
            buf.fill(fill);
        }
    } else {
        buf.fill(0);
    }
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    return buffer.SlowBuffer(size);
};
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/randombytes/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
// limit of Crypto.getRandomValues()
// https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
var MAX_BYTES = 65536;
// Node supports requesting up to this number of bytes
// https://github.com/nodejs/node/blob/master/lib/internal/crypto/random.js#L48
var MAX_UINT32 = 4294967295;
function oldBrowser() {
    throw new Error('Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11');
}
var Buffer = __turbopack_context__.r("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/safe-buffer/index.js [app-client] (ecmascript)").Buffer;
var crypto = /*TURBOPACK member replacement*/ __turbopack_context__.g.crypto || /*TURBOPACK member replacement*/ __turbopack_context__.g.msCrypto;
if (crypto && crypto.getRandomValues) {
    module.exports = randomBytes;
} else {
    module.exports = oldBrowser;
}
function randomBytes(size, cb) {
    // phantomjs needs to throw
    if (size > MAX_UINT32) throw new RangeError('requested too many random bytes');
    var bytes = Buffer.allocUnsafe(size);
    if (size > 0) {
        if (size > MAX_BYTES) {
            // can do at once see https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
            for(var generated = 0; generated < size; generated += MAX_BYTES){
                // buffer.slice automatically checks if the end is past the end of
                // the buffer so we don't have to here
                crypto.getRandomValues(bytes.slice(generated, generated + MAX_BYTES));
            }
        } else {
            crypto.getRandomValues(bytes);
        }
    }
    if (typeof cb === 'function') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$hallway$2d$integrated$2f$v0$2d$hallway$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(function() {
            cb(null, bytes);
        });
    }
    return bytes;
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/inherits/inherits_browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

if (typeof Object.create === 'function') {
    // implementation from standard node.js 'util' module
    module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
                constructor: {
                    value: ctor,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
        }
    };
} else {
    // old school shim for old browsers
    module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {};
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
        }
    };
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/util-deprecate/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module exports.
 */ module.exports = deprecate;
/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */ function deprecate(fn, msg) {
    if (config('noDeprecation')) {
        return fn;
    }
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (config('throwDeprecation')) {
                throw new Error(msg);
            } else if (config('traceDeprecation')) {
                console.trace(msg);
            } else {
                console.warn(msg);
            }
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
}
/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */ function config(name) {
    // accessing global.localStorage can trigger a DOMException in sandboxed iframes
    try {
        if (!/*TURBOPACK member replacement*/ __turbopack_context__.g.localStorage) return false;
    } catch (_) {
        return false;
    }
    var val = /*TURBOPACK member replacement*/ __turbopack_context__.g.localStorage[name];
    if (null == val) return false;
    return String(val).toLowerCase() === 'true';
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/string_decoder/lib/string_decoder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
/*<replacement>*/ var Buffer = __turbopack_context__.r("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/safe-buffer/index.js [app-client] (ecmascript)").Buffer;
/*</replacement>*/ var isEncoding = Buffer.isEncoding || function(encoding) {
    encoding = '' + encoding;
    switch(encoding && encoding.toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
        case 'raw':
            return true;
        default:
            return false;
    }
};
function _normalizeEncoding(enc) {
    if (!enc) return 'utf8';
    var retried;
    while(true){
        switch(enc){
            case 'utf8':
            case 'utf-8':
                return 'utf8';
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return 'utf16le';
            case 'latin1':
            case 'binary':
                return 'latin1';
            case 'base64':
            case 'ascii':
            case 'hex':
                return enc;
            default:
                if (retried) return; // undefined
                enc = ('' + enc).toLowerCase();
                retried = true;
        }
    }
}
;
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
    return nenc || enc;
}
// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch(this.encoding){
        case 'utf16le':
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
        case 'utf8':
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
        case 'base64':
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
        default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer.allocUnsafe(nb);
}
StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return '';
    var r;
    var i;
    if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return '';
        i = this.lastNeed;
        this.lastNeed = 0;
    } else {
        i = 0;
    }
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || '';
};
StringDecoder.prototype.end = utf8End;
// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;
// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
};
// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
    if (byte <= 0x7F) return 0;
    else if (byte >> 5 === 0x06) return 2;
    else if (byte >> 4 === 0x0E) return 3;
    else if (byte >> 3 === 0x1E) return 4;
    return byte >> 6 === 0x02 ? -1 : -2;
}
// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;
            else self.lastNeed = nb - 3;
        }
        return nb;
    }
    return 0;
}
// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 0xC0) !== 0x80) {
        self.lastNeed = 0;
        return '\ufffd';
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return '\ufffd';
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
                self.lastNeed = 2;
                return '\ufffd';
            }
        }
    }
}
// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = utf8CheckExtraBytes(this, buf, p);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
}
// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
    var total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString('utf8', i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString('utf8', i, end);
}
// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + '\ufffd';
    return r;
}
// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
        var r = buf.toString('utf16le', i);
        if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 0xD800 && c <= 0xDBFF) {
                this.lastNeed = 2;
                this.lastTotal = 4;
                this.lastChar[0] = buf[buf.length - 2];
                this.lastChar[1] = buf[buf.length - 1];
                return r.slice(0, -1);
            }
        }
        return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString('utf16le', i, buf.length - 1);
}
// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString('utf16le', 0, end);
    }
    return r;
}
function base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString('base64', i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
    } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString('base64', i, buf.length - n);
}
function base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
    return r;
}
// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
    return buf.toString(this.encoding);
}
function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : '';
}
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/queue-microtask/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ let promise;
module.exports = typeof queueMicrotask === 'function' ? queueMicrotask.bind(typeof window !== 'undefined' ? window : /*TURBOPACK member replacement*/ __turbopack_context__.g) : (cb)=>(promise || (promise = Promise.resolve())).then(cb).catch((err)=>setTimeout(()=>{
            throw err;
        }, 0));
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/err-code/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @typedef {{ [key: string]: any }} Extensions
 * @typedef {Error} Err
 * @property {string} message
 */ /**
 *
 * @param {Error} obj
 * @param {Extensions} props
 * @returns {Error & Extensions}
 */ function assign(obj, props) {
    for(const key in props){
        Object.defineProperty(obj, key, {
            value: props[key],
            enumerable: true,
            configurable: true
        });
    }
    return obj;
}
/**
 *
 * @param {any} err - An Error
 * @param {string|Extensions} code - A string code or props to set on the error
 * @param {Extensions} [props] - Props to set on the error
 * @returns {Error & Extensions}
 */ function createError(err, code, props) {
    if (!err || typeof err === 'string') {
        throw new TypeError('Please pass an Error to err-code');
    }
    if (!props) {
        props = {};
    }
    if (typeof code === 'object') {
        props = code;
        code = '';
    }
    if (code) {
        props.code = code;
    }
    try {
        return assign(err, props);
    } catch (_) {
        props.message = err.message;
        props.stack = err.stack;
        const ErrClass = function() {};
        ErrClass.prototype = Object.create(Object.getPrototypeOf(err));
        // @ts-ignore
        const output = assign(new ErrClass(), props);
        return output;
    }
}
module.exports = createError;
}),
"[project]/Downloads/hallway-integrated/v0-hallway/node_modules/simple-peer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ const debug = __turbopack_context__.r("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/debug/src/browser.js [app-client] (ecmascript)")('simple-peer');
const getBrowserRTC = __turbopack_context__.r("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/get-browser-rtc/index.js [app-client] (ecmascript)");
const randombytes = __turbopack_context__.r("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/randombytes/browser.js [app-client] (ecmascript)");
const stream = __turbopack_context__.r("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/readable-stream/readable-browser.js [app-client] (ecmascript)");
const queueMicrotask = __turbopack_context__.r("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/queue-microtask/index.js [app-client] (ecmascript)")// TODO: remove when Node 10 is not supported
;
const errCode = __turbopack_context__.r("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/err-code/index.js [app-client] (ecmascript)");
const { Buffer } = __turbopack_context__.r("[project]/Downloads/hallway-integrated/v0-hallway/node_modules/buffer/index.js [app-client] (ecmascript)");
const MAX_BUFFERED_AMOUNT = 64 * 1024;
const ICECOMPLETE_TIMEOUT = 5 * 1000;
const CHANNEL_CLOSING_TIMEOUT = 5 * 1000;
// HACK: Filter trickle lines when trickle is disabled #354
function filterTrickle(sdp) {
    return sdp.replace(/a=ice-options:trickle\s\n/g, '');
}
function warn(message) {
    console.warn(message);
}
/**
 * WebRTC peer connection. Same API as node core `net.Socket`, plus a few extra methods.
 * Duplex stream.
 * @param {Object} opts
 */ class Peer extends stream.Duplex {
    constructor(opts){
        opts = Object.assign({
            allowHalfOpen: false
        }, opts);
        super(opts);
        this._id = randombytes(4).toString('hex').slice(0, 7);
        this._debug('new peer %o', opts);
        this.channelName = opts.initiator ? opts.channelName || randombytes(20).toString('hex') : null;
        this.initiator = opts.initiator || false;
        this.channelConfig = opts.channelConfig || Peer.channelConfig;
        this.channelNegotiated = this.channelConfig.negotiated;
        this.config = Object.assign({}, Peer.config, opts.config);
        this.offerOptions = opts.offerOptions || {};
        this.answerOptions = opts.answerOptions || {};
        this.sdpTransform = opts.sdpTransform || ((sdp)=>sdp);
        this.streams = opts.streams || (opts.stream ? [
            opts.stream
        ] : []); // support old "stream" option
        this.trickle = opts.trickle !== undefined ? opts.trickle : true;
        this.allowHalfTrickle = opts.allowHalfTrickle !== undefined ? opts.allowHalfTrickle : false;
        this.iceCompleteTimeout = opts.iceCompleteTimeout || ICECOMPLETE_TIMEOUT;
        this.destroyed = false;
        this.destroying = false;
        this._connected = false;
        this.remoteAddress = undefined;
        this.remoteFamily = undefined;
        this.remotePort = undefined;
        this.localAddress = undefined;
        this.localFamily = undefined;
        this.localPort = undefined;
        this._wrtc = opts.wrtc && typeof opts.wrtc === 'object' ? opts.wrtc : getBrowserRTC();
        if (!this._wrtc) {
            if (typeof window === 'undefined') {
                throw errCode(new Error('No WebRTC support: Specify `opts.wrtc` option in this environment'), 'ERR_WEBRTC_SUPPORT');
            } else {
                throw errCode(new Error('No WebRTC support: Not a supported browser'), 'ERR_WEBRTC_SUPPORT');
            }
        }
        this._pcReady = false;
        this._channelReady = false;
        this._iceComplete = false; // ice candidate trickle done (got null candidate)
        this._iceCompleteTimer = null; // send an offer/answer anyway after some timeout
        this._channel = null;
        this._pendingCandidates = [];
        this._isNegotiating = false; // is this peer waiting for negotiation to complete?
        this._firstNegotiation = true;
        this._batchedNegotiation = false; // batch synchronous negotiations
        this._queuedNegotiation = false; // is there a queued negotiation request?
        this._sendersAwaitingStable = [];
        this._senderMap = new Map();
        this._closingInterval = null;
        this._remoteTracks = [];
        this._remoteStreams = [];
        this._chunk = null;
        this._cb = null;
        this._interval = null;
        try {
            this._pc = new this._wrtc.RTCPeerConnection(this.config);
        } catch (err) {
            this.destroy(errCode(err, 'ERR_PC_CONSTRUCTOR'));
            return;
        }
        // We prefer feature detection whenever possible, but sometimes that's not
        // possible for certain implementations.
        this._isReactNativeWebrtc = typeof this._pc._peerConnectionId === 'number';
        this._pc.oniceconnectionstatechange = ()=>{
            this._onIceStateChange();
        };
        this._pc.onicegatheringstatechange = ()=>{
            this._onIceStateChange();
        };
        this._pc.onconnectionstatechange = ()=>{
            this._onConnectionStateChange();
        };
        this._pc.onsignalingstatechange = ()=>{
            this._onSignalingStateChange();
        };
        this._pc.onicecandidate = (event)=>{
            this._onIceCandidate(event);
        };
        // HACK: Fix for odd Firefox behavior, see: https://github.com/feross/simple-peer/pull/783
        if (typeof this._pc.peerIdentity === 'object') {
            this._pc.peerIdentity.catch((err)=>{
                this.destroy(errCode(err, 'ERR_PC_PEER_IDENTITY'));
            });
        }
        // Other spec events, unused by this implementation:
        // - onconnectionstatechange
        // - onicecandidateerror
        // - onfingerprintfailure
        // - onnegotiationneeded
        if (this.initiator || this.channelNegotiated) {
            this._setupData({
                channel: this._pc.createDataChannel(this.channelName, this.channelConfig)
            });
        } else {
            this._pc.ondatachannel = (event)=>{
                this._setupData(event);
            };
        }
        if (this.streams) {
            this.streams.forEach((stream)=>{
                this.addStream(stream);
            });
        }
        this._pc.ontrack = (event)=>{
            this._onTrack(event);
        };
        this._debug('initial negotiation');
        this._needsNegotiation();
        this._onFinishBound = ()=>{
            this._onFinish();
        };
        this.once('finish', this._onFinishBound);
    }
    get bufferSize() {
        return this._channel && this._channel.bufferedAmount || 0;
    }
    // HACK: it's possible channel.readyState is "closing" before peer.destroy() fires
    // https://bugs.chromium.org/p/chromium/issues/detail?id=882743
    get connected() {
        return this._connected && this._channel.readyState === 'open';
    }
    address() {
        return {
            port: this.localPort,
            family: this.localFamily,
            address: this.localAddress
        };
    }
    signal(data) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error('cannot signal after peer is destroyed'), 'ERR_DESTROYED');
        if (typeof data === 'string') {
            try {
                data = JSON.parse(data);
            } catch (err) {
                data = {};
            }
        }
        this._debug('signal()');
        if (data.renegotiate && this.initiator) {
            this._debug('got request to renegotiate');
            this._needsNegotiation();
        }
        if (data.transceiverRequest && this.initiator) {
            this._debug('got request for transceiver');
            this.addTransceiver(data.transceiverRequest.kind, data.transceiverRequest.init);
        }
        if (data.candidate) {
            if (this._pc.remoteDescription && this._pc.remoteDescription.type) {
                this._addIceCandidate(data.candidate);
            } else {
                this._pendingCandidates.push(data.candidate);
            }
        }
        if (data.sdp) {
            this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(data)).then(()=>{
                if (this.destroyed) return;
                this._pendingCandidates.forEach((candidate)=>{
                    this._addIceCandidate(candidate);
                });
                this._pendingCandidates = [];
                if (this._pc.remoteDescription.type === 'offer') this._createAnswer();
            }).catch((err)=>{
                this.destroy(errCode(err, 'ERR_SET_REMOTE_DESCRIPTION'));
            });
        }
        if (!data.sdp && !data.candidate && !data.renegotiate && !data.transceiverRequest) {
            this.destroy(errCode(new Error('signal() called with invalid signal data'), 'ERR_SIGNALING'));
        }
    }
    _addIceCandidate(candidate) {
        const iceCandidateObj = new this._wrtc.RTCIceCandidate(candidate);
        this._pc.addIceCandidate(iceCandidateObj).catch((err)=>{
            if (!iceCandidateObj.address || iceCandidateObj.address.endsWith('.local')) {
                warn('Ignoring unsupported ICE candidate.');
            } else {
                this.destroy(errCode(err, 'ERR_ADD_ICE_CANDIDATE'));
            }
        });
    }
    /**
   * Send text/binary data to the remote peer.
   * @param {ArrayBufferView|ArrayBuffer|Buffer|string|Blob} chunk
   */ send(chunk) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error('cannot send after peer is destroyed'), 'ERR_DESTROYED');
        this._channel.send(chunk);
    }
    /**
   * Add a Transceiver to the connection.
   * @param {String} kind
   * @param {Object} init
   */ addTransceiver(kind, init) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error('cannot addTransceiver after peer is destroyed'), 'ERR_DESTROYED');
        this._debug('addTransceiver()');
        if (this.initiator) {
            try {
                this._pc.addTransceiver(kind, init);
                this._needsNegotiation();
            } catch (err) {
                this.destroy(errCode(err, 'ERR_ADD_TRANSCEIVER'));
            }
        } else {
            this.emit('signal', {
                type: 'transceiverRequest',
                transceiverRequest: {
                    kind,
                    init
                }
            });
        }
    }
    /**
   * Add a MediaStream to the connection.
   * @param {MediaStream} stream
   */ addStream(stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error('cannot addStream after peer is destroyed'), 'ERR_DESTROYED');
        this._debug('addStream()');
        stream.getTracks().forEach((track)=>{
            this.addTrack(track, stream);
        });
    }
    /**
   * Add a MediaStreamTrack to the connection.
   * @param {MediaStreamTrack} track
   * @param {MediaStream} stream
   */ addTrack(track, stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error('cannot addTrack after peer is destroyed'), 'ERR_DESTROYED');
        this._debug('addTrack()');
        const submap = this._senderMap.get(track) || new Map() // nested Maps map [track, stream] to sender
        ;
        let sender = submap.get(stream);
        if (!sender) {
            sender = this._pc.addTrack(track, stream);
            submap.set(stream, sender);
            this._senderMap.set(track, submap);
            this._needsNegotiation();
        } else if (sender.removed) {
            throw errCode(new Error('Track has been removed. You should enable/disable tracks that you want to re-add.'), 'ERR_SENDER_REMOVED');
        } else {
            throw errCode(new Error('Track has already been added to that stream.'), 'ERR_SENDER_ALREADY_ADDED');
        }
    }
    /**
   * Replace a MediaStreamTrack by another in the connection.
   * @param {MediaStreamTrack} oldTrack
   * @param {MediaStreamTrack} newTrack
   * @param {MediaStream} stream
   */ replaceTrack(oldTrack, newTrack, stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error('cannot replaceTrack after peer is destroyed'), 'ERR_DESTROYED');
        this._debug('replaceTrack()');
        const submap = this._senderMap.get(oldTrack);
        const sender = submap ? submap.get(stream) : null;
        if (!sender) {
            throw errCode(new Error('Cannot replace track that was never added.'), 'ERR_TRACK_NOT_ADDED');
        }
        if (newTrack) this._senderMap.set(newTrack, submap);
        if (sender.replaceTrack != null) {
            sender.replaceTrack(newTrack);
        } else {
            this.destroy(errCode(new Error('replaceTrack is not supported in this browser'), 'ERR_UNSUPPORTED_REPLACETRACK'));
        }
    }
    /**
   * Remove a MediaStreamTrack from the connection.
   * @param {MediaStreamTrack} track
   * @param {MediaStream} stream
   */ removeTrack(track, stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error('cannot removeTrack after peer is destroyed'), 'ERR_DESTROYED');
        this._debug('removeSender()');
        const submap = this._senderMap.get(track);
        const sender = submap ? submap.get(stream) : null;
        if (!sender) {
            throw errCode(new Error('Cannot remove track that was never added.'), 'ERR_TRACK_NOT_ADDED');
        }
        try {
            sender.removed = true;
            this._pc.removeTrack(sender);
        } catch (err) {
            if (err.name === 'NS_ERROR_UNEXPECTED') {
                this._sendersAwaitingStable.push(sender); // HACK: Firefox must wait until (signalingState === stable) https://bugzilla.mozilla.org/show_bug.cgi?id=1133874
            } else {
                this.destroy(errCode(err, 'ERR_REMOVE_TRACK'));
            }
        }
        this._needsNegotiation();
    }
    /**
   * Remove a MediaStream from the connection.
   * @param {MediaStream} stream
   */ removeStream(stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error('cannot removeStream after peer is destroyed'), 'ERR_DESTROYED');
        this._debug('removeSenders()');
        stream.getTracks().forEach((track)=>{
            this.removeTrack(track, stream);
        });
    }
    _needsNegotiation() {
        this._debug('_needsNegotiation');
        if (this._batchedNegotiation) return; // batch synchronous renegotiations
        this._batchedNegotiation = true;
        queueMicrotask(()=>{
            this._batchedNegotiation = false;
            if (this.initiator || !this._firstNegotiation) {
                this._debug('starting batched negotiation');
                this.negotiate();
            } else {
                this._debug('non-initiator initial negotiation request discarded');
            }
            this._firstNegotiation = false;
        });
    }
    negotiate() {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error('cannot negotiate after peer is destroyed'), 'ERR_DESTROYED');
        if (this.initiator) {
            if (this._isNegotiating) {
                this._queuedNegotiation = true;
                this._debug('already negotiating, queueing');
            } else {
                this._debug('start negotiation');
                setTimeout(()=>{
                    this._createOffer();
                }, 0);
            }
        } else {
            if (this._isNegotiating) {
                this._queuedNegotiation = true;
                this._debug('already negotiating, queueing');
            } else {
                this._debug('requesting negotiation from initiator');
                this.emit('signal', {
                    type: 'renegotiate',
                    renegotiate: true
                });
            }
        }
        this._isNegotiating = true;
    }
    // TODO: Delete this method once readable-stream is updated to contain a default
    // implementation of destroy() that automatically calls _destroy()
    // See: https://github.com/nodejs/readable-stream/issues/283
    destroy(err) {
        this._destroy(err, ()=>{});
    }
    _destroy(err, cb) {
        if (this.destroyed || this.destroying) return;
        this.destroying = true;
        this._debug('destroying (error: %s)', err && (err.message || err));
        queueMicrotask(()=>{
            this.destroyed = true;
            this.destroying = false;
            this._debug('destroy (error: %s)', err && (err.message || err));
            this.readable = this.writable = false;
            if (!this._readableState.ended) this.push(null);
            if (!this._writableState.finished) this.end();
            this._connected = false;
            this._pcReady = false;
            this._channelReady = false;
            this._remoteTracks = null;
            this._remoteStreams = null;
            this._senderMap = null;
            clearInterval(this._closingInterval);
            this._closingInterval = null;
            clearInterval(this._interval);
            this._interval = null;
            this._chunk = null;
            this._cb = null;
            if (this._onFinishBound) this.removeListener('finish', this._onFinishBound);
            this._onFinishBound = null;
            if (this._channel) {
                try {
                    this._channel.close();
                } catch (err) {}
                // allow events concurrent with destruction to be handled
                this._channel.onmessage = null;
                this._channel.onopen = null;
                this._channel.onclose = null;
                this._channel.onerror = null;
            }
            if (this._pc) {
                try {
                    this._pc.close();
                } catch (err) {}
                // allow events concurrent with destruction to be handled
                this._pc.oniceconnectionstatechange = null;
                this._pc.onicegatheringstatechange = null;
                this._pc.onsignalingstatechange = null;
                this._pc.onicecandidate = null;
                this._pc.ontrack = null;
                this._pc.ondatachannel = null;
            }
            this._pc = null;
            this._channel = null;
            if (err) this.emit('error', err);
            this.emit('close');
            cb();
        });
    }
    _setupData(event) {
        if (!event.channel) {
            // In some situations `pc.createDataChannel()` returns `undefined` (in wrtc),
            // which is invalid behavior. Handle it gracefully.
            // See: https://github.com/feross/simple-peer/issues/163
            return this.destroy(errCode(new Error('Data channel event is missing `channel` property'), 'ERR_DATA_CHANNEL'));
        }
        this._channel = event.channel;
        this._channel.binaryType = 'arraybuffer';
        if (typeof this._channel.bufferedAmountLowThreshold === 'number') {
            this._channel.bufferedAmountLowThreshold = MAX_BUFFERED_AMOUNT;
        }
        this.channelName = this._channel.label;
        this._channel.onmessage = (event)=>{
            this._onChannelMessage(event);
        };
        this._channel.onbufferedamountlow = ()=>{
            this._onChannelBufferedAmountLow();
        };
        this._channel.onopen = ()=>{
            this._onChannelOpen();
        };
        this._channel.onclose = ()=>{
            this._onChannelClose();
        };
        this._channel.onerror = (event)=>{
            const err = event.error instanceof Error ? event.error : new Error(`Datachannel error: ${event.message} ${event.filename}:${event.lineno}:${event.colno}`);
            this.destroy(errCode(err, 'ERR_DATA_CHANNEL'));
        };
        // HACK: Chrome will sometimes get stuck in readyState "closing", let's check for this condition
        // https://bugs.chromium.org/p/chromium/issues/detail?id=882743
        let isClosing = false;
        this._closingInterval = setInterval(()=>{
            if (this._channel && this._channel.readyState === 'closing') {
                if (isClosing) this._onChannelClose(); // closing timed out: equivalent to onclose firing
                isClosing = true;
            } else {
                isClosing = false;
            }
        }, CHANNEL_CLOSING_TIMEOUT);
    }
    _read() {}
    _write(chunk, encoding, cb) {
        if (this.destroyed) return cb(errCode(new Error('cannot write after peer is destroyed'), 'ERR_DATA_CHANNEL'));
        if (this._connected) {
            try {
                this.send(chunk);
            } catch (err) {
                return this.destroy(errCode(err, 'ERR_DATA_CHANNEL'));
            }
            if (this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
                this._debug('start backpressure: bufferedAmount %d', this._channel.bufferedAmount);
                this._cb = cb;
            } else {
                cb(null);
            }
        } else {
            this._debug('write before connect');
            this._chunk = chunk;
            this._cb = cb;
        }
    }
    // When stream finishes writing, close socket. Half open connections are not
    // supported.
    _onFinish() {
        if (this.destroyed) return;
        // Wait a bit before destroying so the socket flushes.
        // TODO: is there a more reliable way to accomplish this?
        const destroySoon = ()=>{
            setTimeout(()=>this.destroy(), 1000);
        };
        if (this._connected) {
            destroySoon();
        } else {
            this.once('connect', destroySoon);
        }
    }
    _startIceCompleteTimeout() {
        if (this.destroyed) return;
        if (this._iceCompleteTimer) return;
        this._debug('started iceComplete timeout');
        this._iceCompleteTimer = setTimeout(()=>{
            if (!this._iceComplete) {
                this._iceComplete = true;
                this._debug('iceComplete timeout completed');
                this.emit('iceTimeout');
                this.emit('_iceComplete');
            }
        }, this.iceCompleteTimeout);
    }
    _createOffer() {
        if (this.destroyed) return;
        this._pc.createOffer(this.offerOptions).then((offer)=>{
            if (this.destroyed) return;
            if (!this.trickle && !this.allowHalfTrickle) offer.sdp = filterTrickle(offer.sdp);
            offer.sdp = this.sdpTransform(offer.sdp);
            const sendOffer = ()=>{
                if (this.destroyed) return;
                const signal = this._pc.localDescription || offer;
                this._debug('signal');
                this.emit('signal', {
                    type: signal.type,
                    sdp: signal.sdp
                });
            };
            const onSuccess = ()=>{
                this._debug('createOffer success');
                if (this.destroyed) return;
                if (this.trickle || this._iceComplete) sendOffer();
                else this.once('_iceComplete', sendOffer); // wait for candidates
            };
            const onError = (err)=>{
                this.destroy(errCode(err, 'ERR_SET_LOCAL_DESCRIPTION'));
            };
            this._pc.setLocalDescription(offer).then(onSuccess).catch(onError);
        }).catch((err)=>{
            this.destroy(errCode(err, 'ERR_CREATE_OFFER'));
        });
    }
    _requestMissingTransceivers() {
        if (this._pc.getTransceivers) {
            this._pc.getTransceivers().forEach((transceiver)=>{
                if (!transceiver.mid && transceiver.sender.track && !transceiver.requested) {
                    transceiver.requested = true; // HACK: Safari returns negotiated transceivers with a null mid
                    this.addTransceiver(transceiver.sender.track.kind);
                }
            });
        }
    }
    _createAnswer() {
        if (this.destroyed) return;
        this._pc.createAnswer(this.answerOptions).then((answer)=>{
            if (this.destroyed) return;
            if (!this.trickle && !this.allowHalfTrickle) answer.sdp = filterTrickle(answer.sdp);
            answer.sdp = this.sdpTransform(answer.sdp);
            const sendAnswer = ()=>{
                if (this.destroyed) return;
                const signal = this._pc.localDescription || answer;
                this._debug('signal');
                this.emit('signal', {
                    type: signal.type,
                    sdp: signal.sdp
                });
                if (!this.initiator) this._requestMissingTransceivers();
            };
            const onSuccess = ()=>{
                if (this.destroyed) return;
                if (this.trickle || this._iceComplete) sendAnswer();
                else this.once('_iceComplete', sendAnswer);
            };
            const onError = (err)=>{
                this.destroy(errCode(err, 'ERR_SET_LOCAL_DESCRIPTION'));
            };
            this._pc.setLocalDescription(answer).then(onSuccess).catch(onError);
        }).catch((err)=>{
            this.destroy(errCode(err, 'ERR_CREATE_ANSWER'));
        });
    }
    _onConnectionStateChange() {
        if (this.destroyed) return;
        if (this._pc.connectionState === 'failed') {
            this.destroy(errCode(new Error('Connection failed.'), 'ERR_CONNECTION_FAILURE'));
        }
    }
    _onIceStateChange() {
        if (this.destroyed) return;
        const iceConnectionState = this._pc.iceConnectionState;
        const iceGatheringState = this._pc.iceGatheringState;
        this._debug('iceStateChange (connection: %s) (gathering: %s)', iceConnectionState, iceGatheringState);
        this.emit('iceStateChange', iceConnectionState, iceGatheringState);
        if (iceConnectionState === 'connected' || iceConnectionState === 'completed') {
            this._pcReady = true;
            this._maybeReady();
        }
        if (iceConnectionState === 'failed') {
            this.destroy(errCode(new Error('Ice connection failed.'), 'ERR_ICE_CONNECTION_FAILURE'));
        }
        if (iceConnectionState === 'closed') {
            this.destroy(errCode(new Error('Ice connection closed.'), 'ERR_ICE_CONNECTION_CLOSED'));
        }
    }
    getStats(cb) {
        // statreports can come with a value array instead of properties
        const flattenValues = (report)=>{
            if (Object.prototype.toString.call(report.values) === '[object Array]') {
                report.values.forEach((value)=>{
                    Object.assign(report, value);
                });
            }
            return report;
        };
        // Promise-based getStats() (standard)
        if (this._pc.getStats.length === 0 || this._isReactNativeWebrtc) {
            this._pc.getStats().then((res)=>{
                const reports = [];
                res.forEach((report)=>{
                    reports.push(flattenValues(report));
                });
                cb(null, reports);
            }, (err)=>cb(err));
        // Single-parameter callback-based getStats() (non-standard)
        } else if (this._pc.getStats.length > 0) {
            this._pc.getStats((res)=>{
                // If we destroy connection in `connect` callback this code might happen to run when actual connection is already closed
                if (this.destroyed) return;
                const reports = [];
                res.result().forEach((result)=>{
                    const report = {};
                    result.names().forEach((name)=>{
                        report[name] = result.stat(name);
                    });
                    report.id = result.id;
                    report.type = result.type;
                    report.timestamp = result.timestamp;
                    reports.push(flattenValues(report));
                });
                cb(null, reports);
            }, (err)=>cb(err));
        // Unknown browser, skip getStats() since it's anyone's guess which style of
        // getStats() they implement.
        } else {
            cb(null, []);
        }
    }
    _maybeReady() {
        this._debug('maybeReady pc %s channel %s', this._pcReady, this._channelReady);
        if (this._connected || this._connecting || !this._pcReady || !this._channelReady) return;
        this._connecting = true;
        // HACK: We can't rely on order here, for details see https://github.com/js-platform/node-webrtc/issues/339
        const findCandidatePair = ()=>{
            if (this.destroyed) return;
            this.getStats((err, items)=>{
                if (this.destroyed) return;
                // Treat getStats error as non-fatal. It's not essential.
                if (err) items = [];
                const remoteCandidates = {};
                const localCandidates = {};
                const candidatePairs = {};
                let foundSelectedCandidatePair = false;
                items.forEach((item)=>{
                    // TODO: Once all browsers support the hyphenated stats report types, remove
                    // the non-hypenated ones
                    if (item.type === 'remotecandidate' || item.type === 'remote-candidate') {
                        remoteCandidates[item.id] = item;
                    }
                    if (item.type === 'localcandidate' || item.type === 'local-candidate') {
                        localCandidates[item.id] = item;
                    }
                    if (item.type === 'candidatepair' || item.type === 'candidate-pair') {
                        candidatePairs[item.id] = item;
                    }
                });
                const setSelectedCandidatePair = (selectedCandidatePair)=>{
                    foundSelectedCandidatePair = true;
                    let local = localCandidates[selectedCandidatePair.localCandidateId];
                    if (local && (local.ip || local.address)) {
                        // Spec
                        this.localAddress = local.ip || local.address;
                        this.localPort = Number(local.port);
                    } else if (local && local.ipAddress) {
                        // Firefox
                        this.localAddress = local.ipAddress;
                        this.localPort = Number(local.portNumber);
                    } else if (typeof selectedCandidatePair.googLocalAddress === 'string') {
                        // TODO: remove this once Chrome 58 is released
                        local = selectedCandidatePair.googLocalAddress.split(':');
                        this.localAddress = local[0];
                        this.localPort = Number(local[1]);
                    }
                    if (this.localAddress) {
                        this.localFamily = this.localAddress.includes(':') ? 'IPv6' : 'IPv4';
                    }
                    let remote = remoteCandidates[selectedCandidatePair.remoteCandidateId];
                    if (remote && (remote.ip || remote.address)) {
                        // Spec
                        this.remoteAddress = remote.ip || remote.address;
                        this.remotePort = Number(remote.port);
                    } else if (remote && remote.ipAddress) {
                        // Firefox
                        this.remoteAddress = remote.ipAddress;
                        this.remotePort = Number(remote.portNumber);
                    } else if (typeof selectedCandidatePair.googRemoteAddress === 'string') {
                        // TODO: remove this once Chrome 58 is released
                        remote = selectedCandidatePair.googRemoteAddress.split(':');
                        this.remoteAddress = remote[0];
                        this.remotePort = Number(remote[1]);
                    }
                    if (this.remoteAddress) {
                        this.remoteFamily = this.remoteAddress.includes(':') ? 'IPv6' : 'IPv4';
                    }
                    this._debug('connect local: %s:%s remote: %s:%s', this.localAddress, this.localPort, this.remoteAddress, this.remotePort);
                };
                items.forEach((item)=>{
                    // Spec-compliant
                    if (item.type === 'transport' && item.selectedCandidatePairId) {
                        setSelectedCandidatePair(candidatePairs[item.selectedCandidatePairId]);
                    }
                    // Old implementations
                    if (item.type === 'googCandidatePair' && item.googActiveConnection === 'true' || (item.type === 'candidatepair' || item.type === 'candidate-pair') && item.selected) {
                        setSelectedCandidatePair(item);
                    }
                });
                // Ignore candidate pair selection in browsers like Safari 11 that do not have any local or remote candidates
                // But wait until at least 1 candidate pair is available
                if (!foundSelectedCandidatePair && (!Object.keys(candidatePairs).length || Object.keys(localCandidates).length)) {
                    setTimeout(findCandidatePair, 100);
                    return;
                } else {
                    this._connecting = false;
                    this._connected = true;
                }
                if (this._chunk) {
                    try {
                        this.send(this._chunk);
                    } catch (err) {
                        return this.destroy(errCode(err, 'ERR_DATA_CHANNEL'));
                    }
                    this._chunk = null;
                    this._debug('sent chunk from "write before connect"');
                    const cb = this._cb;
                    this._cb = null;
                    cb(null);
                }
                // If `bufferedAmountLowThreshold` and 'onbufferedamountlow' are unsupported,
                // fallback to using setInterval to implement backpressure.
                if (typeof this._channel.bufferedAmountLowThreshold !== 'number') {
                    this._interval = setInterval(()=>this._onInterval(), 150);
                    if (this._interval.unref) this._interval.unref();
                }
                this._debug('connect');
                this.emit('connect');
            });
        };
        findCandidatePair();
    }
    _onInterval() {
        if (!this._cb || !this._channel || this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
            return;
        }
        this._onChannelBufferedAmountLow();
    }
    _onSignalingStateChange() {
        if (this.destroyed) return;
        if (this._pc.signalingState === 'stable') {
            this._isNegotiating = false;
            // HACK: Firefox doesn't yet support removing tracks when signalingState !== 'stable'
            this._debug('flushing sender queue', this._sendersAwaitingStable);
            this._sendersAwaitingStable.forEach((sender)=>{
                this._pc.removeTrack(sender);
                this._queuedNegotiation = true;
            });
            this._sendersAwaitingStable = [];
            if (this._queuedNegotiation) {
                this._debug('flushing negotiation queue');
                this._queuedNegotiation = false;
                this._needsNegotiation(); // negotiate again
            } else {
                this._debug('negotiated');
                this.emit('negotiated');
            }
        }
        this._debug('signalingStateChange %s', this._pc.signalingState);
        this.emit('signalingStateChange', this._pc.signalingState);
    }
    _onIceCandidate(event) {
        if (this.destroyed) return;
        if (event.candidate && this.trickle) {
            this.emit('signal', {
                type: 'candidate',
                candidate: {
                    candidate: event.candidate.candidate,
                    sdpMLineIndex: event.candidate.sdpMLineIndex,
                    sdpMid: event.candidate.sdpMid
                }
            });
        } else if (!event.candidate && !this._iceComplete) {
            this._iceComplete = true;
            this.emit('_iceComplete');
        }
        // as soon as we've received one valid candidate start timeout
        if (event.candidate) {
            this._startIceCompleteTimeout();
        }
    }
    _onChannelMessage(event) {
        if (this.destroyed) return;
        let data = event.data;
        if (data instanceof ArrayBuffer) data = Buffer.from(data);
        this.push(data);
    }
    _onChannelBufferedAmountLow() {
        if (this.destroyed || !this._cb) return;
        this._debug('ending backpressure: bufferedAmount %d', this._channel.bufferedAmount);
        const cb = this._cb;
        this._cb = null;
        cb(null);
    }
    _onChannelOpen() {
        if (this._connected || this.destroyed) return;
        this._debug('on channel open');
        this._channelReady = true;
        this._maybeReady();
    }
    _onChannelClose() {
        if (this.destroyed) return;
        this._debug('on channel close');
        this.destroy();
    }
    _onTrack(event) {
        if (this.destroyed) return;
        event.streams.forEach((eventStream)=>{
            this._debug('on track');
            this.emit('track', event.track, eventStream);
            this._remoteTracks.push({
                track: event.track,
                stream: eventStream
            });
            if (this._remoteStreams.some((remoteStream)=>{
                return remoteStream.id === eventStream.id;
            })) return; // Only fire one 'stream' event, even though there may be multiple tracks per stream
            this._remoteStreams.push(eventStream);
            queueMicrotask(()=>{
                this._debug('on stream');
                this.emit('stream', eventStream); // ensure all tracks have been added
            });
        });
    }
    _debug() {
        const args = [].slice.call(arguments);
        args[0] = '[' + this._id + '] ' + args[0];
        debug.apply(null, args);
    }
}
Peer.WEBRTC_SUPPORT = !!getBrowserRTC();
/**
 * Expose peer and data channel config for overriding all Peer
 * instances. Otherwise, just set opts.config or opts.channelConfig
 * when constructing a Peer.
 */ Peer.config = {
    iceServers: [
        {
            urls: [
                'stun:stun.l.google.com:19302',
                'stun:global.stun.twilio.com:3478'
            ]
        }
    ],
    sdpSemantics: 'unified-plan'
};
Peer.channelConfig = {};
module.exports = Peer;
}),
]);

//# sourceMappingURL=4b12f_cb3c3775._.js.map