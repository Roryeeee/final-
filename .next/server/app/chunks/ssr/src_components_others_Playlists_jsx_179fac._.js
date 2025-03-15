(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_components_others_Playlists_jsx_179fac._.js", {

"[project]/src/components/others/Carousel.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

var __TURBOPACK__imported__module__$5b$next$5d2f$entry$2f$app$2f$server$2d$to$2d$client$2d$ssr$2e$tsx$2f28$CLIENT_MODULE$292f5b$project$5d2f$src$2f$components$2f$others$2f$Carousel$2e$jsx__$28$ecmascript$2c$__with__chunking__context__scope$292f28$CLIENT_CHUNKS$292f5b$project$5d2f$src$2f$components$2f$others$2f$Carousel$2e$jsx__$28$ecmascript$2c$__chunks$29$__$28$ecmascript$29$__ = __turbopack_import__("[next]/entry/app/server-to-client-ssr.tsx/(CLIENT_MODULE)/[project]/src/components/others/Carousel.jsx (ecmascript, with chunking context scope)/(CLIENT_CHUNKS)/[project]/src/components/others/Carousel.jsx (ecmascript, chunks) (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: server-to-client }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$next$5d2f$entry$2f$app$2f$server$2d$to$2d$client$2d$ssr$2e$tsx$2f28$CLIENT_MODULE$292f5b$project$5d2f$src$2f$components$2f$others$2f$Carousel$2e$jsx__$28$ecmascript$2c$__with__chunking__context__scope$292f28$CLIENT_CHUNKS$292f5b$project$5d2f$src$2f$components$2f$others$2f$Carousel$2e$jsx__$28$ecmascript$2c$__chunks$29$__$28$ecmascript$29$__["default"]);

})()),
"[project]/src/components/others/Playlists.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetchers$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/fetchers.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$items$2f$PlaylistListItem$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/list-items/PlaylistListItem.jsx (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$Carousel$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/others/Carousel.jsx (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const Playlists = async ()=>{
    const playlists = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetchers$2e$js__$28$ecmascript$29$__["fetchTopPlaylists"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "top-playlists-container",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$others$2f$Carousel$2e$jsx__$28$ecmascript$29$__["default"], {
            header: "Playlists",
            children: playlists.map((playlist)=>{
                const { id, title, creation_date, picture_medium } = playlist;
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$list$2d$items$2f$PlaylistListItem$2e$jsx__$28$ecmascript$29$__["default"], {
                    id: id,
                    title: title,
                    imgSrc: picture_medium,
                    creationDate: creation_date
                }, id, false, {
                    fileName: "<[project]/src/components/others/Playlists.jsx>",
                    lineNumber: 16,
                    columnNumber: 29
                }, this);
            })
        }, void 0, false, {
            fileName: "<[project]/src/components/others/Playlists.jsx>",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/others/Playlists.jsx>",
        lineNumber: 9,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Playlists;

})()),
}]);

//# sourceMappingURL=src_components_others_Playlists_jsx_179fac._.js.map