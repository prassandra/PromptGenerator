(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRouterBFCache", {
    enumerable: true,
    get: function() {
        return useRouterBFCache;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// When the flag is disabled, only track the currently active tree
const MAX_BF_CACHE_ENTRIES = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1;
function useRouterBFCache(activeTree, activeCacheNode, activeStateKey) {
    // The currently active entry. The entries form a linked list, sorted in
    // order of most recently active. This allows us to reuse parts of the list
    // without cloning, unless there's a reordering or removal.
    // TODO: Once we start tracking back/forward history at each route level,
    // we should use the history order instead. In other words, when traversing
    // to an existing entry as a result of a popstate event, we should maintain
    // the existing order instead of moving it to the front of the list. I think
    // an initial implementation of this could be to pass an incrementing id
    // to history.pushState/replaceState, then use that here for ordering.
    const [prevActiveEntry, setPrevActiveEntry] = (0, _react.useState)(()=>{
        const initialEntry = {
            tree: activeTree,
            cacheNode: activeCacheNode,
            stateKey: activeStateKey,
            next: null
        };
        return initialEntry;
    });
    if (prevActiveEntry.tree === activeTree) {
        // Fast path. The active tree hasn't changed, so we can reuse the
        // existing state.
        return prevActiveEntry;
    }
    // The route tree changed. Note that this doesn't mean that the tree changed
    // *at this level* — the change may be due to a child route. Either way, we
    // need to either add or update the router tree in the bfcache.
    //
    // The rest of the code looks more complicated than it actually is because we
    // can't mutate the state in place; we have to copy-on-write.
    // Create a new entry for the active cache key. This is the head of the new
    // linked list.
    const newActiveEntry = {
        tree: activeTree,
        cacheNode: activeCacheNode,
        stateKey: activeStateKey,
        next: null
    };
    // We need to append the old list onto the new list. If the head of the new
    // list was already present in the cache, then we'll need to clone everything
    // that came before it. Then we can reuse the rest.
    let n = 1;
    let oldEntry = prevActiveEntry;
    let clonedEntry = newActiveEntry;
    while(oldEntry !== null && n < MAX_BF_CACHE_ENTRIES){
        if (oldEntry.stateKey === activeStateKey) {
            // Fast path. This entry in the old list that corresponds to the key that
            // is now active. We've already placed a clone of this entry at the front
            // of the new list. We can reuse the rest of the old list without cloning.
            // NOTE: We don't need to worry about eviction in this case because we
            // haven't increased the size of the cache, and we assume the max size
            // is constant across renders. If we were to change it to a dynamic limit,
            // then the implementation would need to account for that.
            clonedEntry.next = oldEntry.next;
            break;
        } else {
            // Clone the entry and append it to the list.
            n++;
            const entry = {
                tree: oldEntry.tree,
                cacheNode: oldEntry.cacheNode,
                stateKey: oldEntry.stateKey,
                next: null
            };
            clonedEntry.next = entry;
            clonedEntry = entry;
        }
        oldEntry = oldEntry.next;
    }
    setPrevActiveEntry(newActiveEntry);
    return newActiveEntry;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Browser variant of `./client-boundary-params`. In the browser the params and
// searchParams are created at render time rather than dynamically tracked.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createClientParams: null,
    createClientSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createClientParams: function() {
        return _paramsbrowser.createRenderParamsFromClient;
    },
    createClientSearchParams: function() {
        return _searchparamsbrowser.createRenderSearchParamsFromClient;
    }
});
const _paramsbrowser = __turbopack_context__.r("[project]/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
const _searchparamsbrowser = __turbopack_context__.r("[project]/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/client-page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientPageRoot", {
    enumerable: true,
    get: function() {
        return ClientPageRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _clientboundaryparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)");
function ClientPageRoot({ Component, serverProvidedParams }) {
    let searchParams;
    let params;
    if (serverProvidedParams !== null) {
        searchParams = serverProvidedParams.searchParams;
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params as
        // props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
        // This is an intentional behavior change: when Cache Components is enabled,
        // client segments receive the "canonical" search params, not the
        // rewritten ones. Users should either call useSearchParams directly or pass
        // the rewritten ones in from a Server Component.
        // TODO: Log a deprecation error when this object is accessed
        searchParams = (0, _routeparams.urlSearchParamsToParsedUrlQuery)((0, _react.use)(_hooksclientcontextsharedruntime.SearchParamsContext));
    }
    const clientSearchParams = (0, _clientboundaryparams.createClientSearchParams)(searchParams);
    const clientParams = (0, _clientboundaryparams.createClientParams)(params);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        params: clientParams,
        searchParams: clientSearchParams
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/client-segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientSegmentRoot", {
    enumerable: true,
    get: function() {
        return ClientSegmentRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _clientboundaryparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)");
function ClientSegmentRoot({ Component, slots, serverProvidedParams }) {
    let params;
    if (serverProvidedParams !== null) {
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params
        // as props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
    }
    const clientParams = (0, _clientboundaryparams.createClientParams)(params);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        ...slots,
        params: clientParams
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/instant-validation/boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    InstantValidationBoundaryContext: null,
    PlaceValidationBoundaryBelowThisLevel: null,
    RenderValidationBoundaryAtThisLevel: null,
    SlotMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    InstantValidationBoundaryContext: function() {
        return _impl.InstantValidationBoundaryContext;
    },
    PlaceValidationBoundaryBelowThisLevel: function() {
        return _impl.PlaceValidationBoundaryBelowThisLevel;
    },
    RenderValidationBoundaryAtThisLevel: function() {
        return _impl.RenderValidationBoundaryAtThisLevel;
    },
    SlotMarker: function() {
        return _impl.SlotMarker;
    }
});
const _impl = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/instant-validation/impl.browser.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/instant-validation/impl.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    InstantValidationBoundaryContext: null,
    PlaceValidationBoundaryBelowThisLevel: null,
    RenderValidationBoundaryAtThisLevel: null,
    SlotMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    InstantValidationBoundaryContext: function() {
        return InstantValidationBoundaryContext;
    },
    PlaceValidationBoundaryBelowThisLevel: function() {
        return PlaceValidationBoundaryBelowThisLevel;
    },
    RenderValidationBoundaryAtThisLevel: function() {
        return RenderValidationBoundaryAtThisLevel;
    },
    SlotMarker: function() {
        return SlotMarker;
    }
});
const InstantValidationBoundaryContext = null;
const PlaceValidationBoundaryBelowThisLevel = null;
const RenderValidationBoundaryAtThisLevel = null;
const SlotMarker = null;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    LoadingBoundaryProvider: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    LoadingBoundaryProvider: function() {
        return LoadingBoundaryProvider;
    },
    /**
 * OuterLayoutRouter handles the current segment as well as <Offscreen> rendering of other segments.
 * It can be rendered next to each other with a different `parallelRouterKey`, allowing for Parallel routes.
 */ default: function() {
        return OuterLayoutRouter;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _unresolvedthenable = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _disablesmoothscroll = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)");
const _redirectboundary = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
const _errorboundary1 = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
const _boundary = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/instant-validation/boundary.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _bfcachestatemanager = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
const enableNewScrollHandler = ("TURBOPACK compile-time value", true);
const __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _reactdom.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (typeof window === 'undefined') return null;
    // __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode is null during module init.
    // We need to lazily reference it.
    const internal_reactDOMfindDOMNode = __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode;
    return internal_reactDOMfindDOMNode(instance);
}
const rectProperties = [
    'bottom',
    'height',
    'left',
    'right',
    'top',
    'width',
    'x',
    'y'
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        'sticky',
        'fixed'
    ].includes(getComputedStyle(element).position)) {
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Resolve the root scroll padding used by the viewport check.
 *
 * Computed lengths serialize as pixels, but percentages remain relative to
 * the scrollport. Preserve the existing behavior for values that still
 * contain unresolved CSS math.
 */ function getScrollPaddingTopInPixels(htmlElement, viewportHeight) {
    const scrollPaddingTop = getComputedStyle(htmlElement).scrollPaddingTop;
    const value = Number.parseFloat(scrollPaddingTop);
    if (!Number.isFinite(value) || value < 0) {
        return 0;
    }
    if (scrollPaddingTop.endsWith('px')) {
        return value;
    }
    if (scrollPaddingTop.endsWith('%')) {
        return value / 100 * viewportHeight;
    }
    return 0;
}
/**
 * Check where the top corner of the HTMLElement is relative to the usable
 * viewport.
 *
 * Scroll padding is resolved lazily so an empty Fragment does not trigger a
 * computed style read. The caller caches the value for the second check.
 */ function getScrollTargetState(instance, viewportHeight, getScrollPaddingTop) {
    const rects = instance.getClientRects();
    if (rects.length === 0) {
        return 0;
    }
    let elementTop = Number.POSITIVE_INFINITY;
    for(let i = 0; i < rects.length; i++){
        const rect = rects[i];
        if (rect.top < elementTop) {
            elementTop = rect.top;
        }
    }
    return elementTop >= getScrollPaddingTop() && elementTop <= viewportHeight ? 1 : 2;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === 'top') {
        return document.body;
    }
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return document.getElementById(hashFragment) ?? // If the hash fragment is a name, the page has to scroll to the first element with that name.
    document.getElementsByName(hashFragment)[0] ?? null;
}
class InnerScrollAndFocusHandlerOld extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        this.handlePotentialScroll();
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args), this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once.
            const { focusAndScrollRef, cacheNode } = this.props;
            const scrollRef = focusAndScrollRef.forceScroll ? focusAndScrollRef.scrollRef : cacheNode.scrollRef;
            if (scrollRef === null || !scrollRef.current) return;
            let domNode = null;
            const hashFragment = focusAndScrollRef.hashFragment;
            if (hashFragment) {
                domNode = getHashFragmentDomNode(hashFragment);
                if (domNode === null) {
                    // A missing hash target is still a handled scroll intent. Do not
                    // fall back to the route segment or leave the intent pending.
                    scrollRef.current = false;
                    focusAndScrollRef.onlyHashChange = false;
                    focusAndScrollRef.hashFragment = null;
                    return;
                }
            }
            // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
            // This already caused a bug where the first child was a <link/> in head.
            if (!domNode) {
                domNode = findDOMNode(this);
            }
            // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
            if (!(domNode instanceof Element)) {
                return;
            }
            // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
            // If the element is skipped, try to select the next sibling and try again.
            while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                if ("TURBOPACK compile-time truthy", 1) {
                    if (domNode.parentElement?.localName === 'head') {
                    // We enter this state when metadata was rendered as part of the page or via Next.js.
                    // This is always a bug in Next.js and caused by React hoisting metadata.
                    // Fixed with `experimental.appNewScrollHandler`
                    }
                }
                // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                if (domNode.nextElementSibling === null) {
                    return;
                }
                domNode = domNode.nextElementSibling;
            }
            // Mark as scrolled so no other segment scrolls for this navigation.
            scrollRef.current = false;
            (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
                // In case of hash scroll, we only need to scroll the element into view
                if (hashFragment) {
                    domNode.scrollIntoView();
                    return;
                }
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                const htmlElement = document.documentElement;
                const viewportHeight = htmlElement.clientHeight;
                let scrollPaddingTop = null;
                const getScrollPaddingTop = ()=>{
                    if (scrollPaddingTop === null) {
                        // Reuse the style and layout update from the geometry read above.
                        scrollPaddingTop = getScrollPaddingTopInPixels(htmlElement, viewportHeight);
                    }
                    return scrollPaddingTop;
                };
                // If the element's top edge is already in the viewport, exit early.
                if (getScrollTargetState(domNode, viewportHeight, getScrollPaddingTop) === 1) {
                    return;
                }
                // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                htmlElement.scrollTop = 0;
                // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                if (getScrollTargetState(domNode, viewportHeight, getScrollPaddingTop) !== 1) {
                    // Scroll into view doesn't scroll horizontally by default when not needed
                    domNode.scrollIntoView();
                }
            }, {
                // We will force layout by querying domNode position
                dontForceLayout: true,
                onlyHashChange: focusAndScrollRef.onlyHashChange
            });
            // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
            focusAndScrollRef.onlyHashChange = false;
            focusAndScrollRef.hashFragment = null;
            // Set focus on the element
            domNode.focus();
        };
    }
}
/**
 * Fork of InnerScrollAndFocusHandlerOld using Fragment refs for scrolling.
 * No longer focuses the first host descendant.
 */ function InnerScrollHandlerNew(props) {
    const childrenRef = _react.default.useRef(null);
    (0, _react.useLayoutEffect)(()=>{
        const { focusAndScrollRef, cacheNode } = props;
        const scrollRef = focusAndScrollRef.forceScroll ? focusAndScrollRef.scrollRef : cacheNode.scrollRef;
        if (scrollRef === null || !scrollRef.current) return;
        let instance = null;
        const hashFragment = focusAndScrollRef.hashFragment;
        if (hashFragment) {
            instance = getHashFragmentDomNode(hashFragment);
            if (instance === null) {
                // A missing hash target is still a handled scroll intent. Do not
                // fall back to the route Fragment or leave the intent pending.
                scrollRef.current = false;
                focusAndScrollRef.onlyHashChange = false;
                focusAndScrollRef.hashFragment = null;
                return;
            }
        } else {
            instance = childrenRef.current;
        }
        // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
        if (instance === null) {
            return;
        }
        let didHandleScroll = false;
        (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
            const htmlElement = document.documentElement;
            let viewportHeight = null;
            let initialTargetState = null;
            let scrollPaddingTop = null;
            const getScrollPaddingTop = ()=>{
                if (scrollPaddingTop === null) {
                    // Reuse the style and layout update from the geometry read.
                    scrollPaddingTop = getScrollPaddingTopInPixels(htmlElement, viewportHeight);
                }
                return scrollPaddingTop;
            };
            if (!hashFragment) {
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                viewportHeight = htmlElement.clientHeight;
                initialTargetState = getScrollTargetState(instance, viewportHeight, getScrollPaddingTop);
                // An empty Fragment is not a scroll target. In particular, avoid
                // React's sibling fallback and leave the scroll signal available
                // for another changed segment.
                if (initialTargetState === 0) {
                    return;
                }
            }
            didHandleScroll = true;
            // Mark as scrolled so no other segment scrolls for this navigation.
            scrollRef.current = false;
            // This handler intentionally leaves focus untouched; resetting focus on
            // navigation is deferred.
            // In case of hash scroll, we only need to scroll the element into view
            if (hashFragment) {
                instance.scrollIntoView();
                return;
            }
            // If the element's top edge is already in the viewport, exit early.
            if (initialTargetState === 1) {
                return;
            }
            // Otherwise, try scrolling go the top of the document to be backward compatible with pages
            // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
            // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
            // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
            htmlElement.scrollTop = 0;
            // Scroll to domNode if domNode is not in viewport when scrolled to top of document
            if (getScrollTargetState(instance, viewportHeight, getScrollPaddingTop) === 2) {
                // Scroll into view doesn't scroll horizontally by default when not needed
                instance.scrollIntoView();
            }
        }, {
            // We will force layout by querying domNode position
            dontForceLayout: true,
            onlyHashChange: focusAndScrollRef.onlyHashChange
        });
        if (!didHandleScroll) {
            return;
        }
        // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
        focusAndScrollRef.onlyHashChange = false;
        focusAndScrollRef.hashFragment = null;
    }, // but be prepared for lots of manual testing.
    undefined);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Fragment, {
        ref: childrenRef,
        children: props.children
    });
}
const InnerScrollAndMaybeFocusHandler = ("TURBOPACK compile-time truthy", 1) ? InnerScrollHandlerNew : "TURBOPACK unreachable";
function ScrollAndMaybeFocusHandler({ children, cacheNode }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollAndMaybeFocusHandler, {
        focusAndScrollRef: context.focusAndScrollRef,
        cacheNode: cacheNode,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter({ tree, segmentPath, debugNameContext, cacheNode: maybeCacheNode, params, url, isActive }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    const parentNavPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    const cacheNode = maybeCacheNode !== null ? maybeCacheNode : // This should only be reachable for inactive/hidden segments, during
    // prerendering The active segment should always be consistent with the
    // CacheNode tree. Regardless, if we don't have a matching CacheNode, we
    // must suspend rather than render nothing, to prevent showing an
    // inconsistent route.
    (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    const resolvedPrefetchRsc = cacheNode.prefetchRsc !== null ? cacheNode.prefetchRsc : cacheNode.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    const rsc = (0, _react.useDeferredValue)(cacheNode.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    let resolvedRsc;
    if ((0, _pprnavigations.isDeferredRsc)(rsc)) {
        const unwrappedRsc = (0, _react.use)(rsc);
        if (unwrappedRsc === null) {
            // If the promise was resolved to `null`, it means the data for this
            // segment was not returned by the server. Suspend indefinitely. When this
            // happens, the router is responsible for triggering a new state update to
            // un-suspend this segment.
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = unwrappedRsc;
    } else {
        // This is not a deferred RSC promise. Don't need to unwrap it.
        if (rsc === null) {
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = rsc;
    }
    // In dev, we create a NavigationPromisesContext containing the instrumented promises that provide
    // `useSelectedLayoutSegment` and `useSelectedLayoutSegments`.
    // Promises are cached outside of render to survive suspense retries.
    let navigationPromises = null;
    if ("TURBOPACK compile-time truthy", 1) {
        const { createNestedLayoutNavigationPromises } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)");
        navigationPromises = createNestedLayoutNavigationPromises(tree, parentNavPromises);
    }
    let children = resolvedRsc;
    if (navigationPromises) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.NavigationPromisesContext.Provider, {
            value: navigationPromises,
            children: resolvedRsc
        });
    }
    children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: tree,
            parentCacheNode: cacheNode,
            parentSegmentPath: segmentPath,
            parentParams: params,
            // This is always set to null as we enter a child segment. It's
            // populated by LoadingBoundaryProvider the next time we reach a
            // loading boundary.
            parentLoadingData: null,
            debugNameContext: debugNameContext,
            // TODO-APP: overriding of url for parallel routes
            url: url,
            isActive: isActive
        },
        children: children
    });
    return children;
}
function LoadingBoundaryProvider({ loading, children }) {
    // Provides the data needed to render a loading.tsx boundary, via context.
    //
    // loading.tsx creates a Suspense boundary around each of a layout's child
    // slots. (Might be bit confusing to think about the data flow, but: if
    // loading.tsx and layout.tsx are in the same directory, they are assigned
    // to the same CacheNode.)
    //
    // This provider component does not render the Suspense boundary directly;
    // that's handled by LoadingBoundary.
    //
    // TODO: For simplicity, we should combine this provider with LoadingBoundary
    // and render the Suspense boundary directly. The only real benefit of doing
    // it separately is so that when there are multiple parallel routes, we only
    // send the boundary data once, rather than once per child. But that's a
    // negligible benefit and can be achieved via caching instead.
    const parentContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
    if (parentContext === null) {
        return children;
    }
    // All values except for parentLoadingData are the same as the parent context.
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: parentContext.parentTree,
            parentCacheNode: parentContext.parentCacheNode,
            parentSegmentPath: parentContext.parentSegmentPath,
            parentParams: parentContext.parentParams,
            parentLoadingData: loading,
            debugNameContext: parentContext.debugNameContext,
            url: parentContext.url,
            isActive: parentContext.isActive
        },
        children: children
    });
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary({ name, loading, children }) {
    // TODO: For LoadingBoundary, and the other built-in boundary types, don't
    // wrap in an extra function component if no user-defined boundary is
    // provided. In other words, inline this conditional wrapping logic into
    // the parent component. More efficient and keeps unnecessary junk out of
    // the component stack.
    if (loading !== null) {
        const loadingRsc = loading[0];
        const loadingStyles = loading[1];
        const loadingScripts = loading[2];
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            name: name,
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loadingRsc
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter({ parallelRouterKey, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, forbidden, unauthorized, segmentViewBoundaries }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant expected layout router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E56",
            enumerable: false,
            configurable: true
        });
    }
    const { parentTree, parentCacheNode, parentSegmentPath, parentParams, parentLoadingData, url, isActive, debugNameContext } = context;
    // Get the CacheNode for this segment by reading it from the parent segment's
    // child map.
    const parentTreeSegment = parentTree[0];
    const segmentPath = parentSegmentPath === null ? // the code. We should clean this up.
    [
        parallelRouterKey
    ] : parentSegmentPath.concat([
        parentTreeSegment,
        parallelRouterKey
    ]);
    // The "state" key of a segment is the one passed to React — it represents the
    // identity of the UI tree. Whenever the state key changes, the tree is
    // recreated and the state is reset. In the App Router model, search params do
    // not cause state to be lost, so two segments with the same segment path but
    // different search params should have the same state key.
    //
    // The "cache" key of a segment, however, *does* include the search params, if
    // it's possible that the segment accessed the search params on the server.
    // (This only applies to page segments; layout segments cannot access search
    // params on the server.)
    const activeTree = parentTree[1][parallelRouterKey];
    const maybeParentSlots = parentCacheNode.slots;
    if (activeTree === undefined || maybeParentSlots === null) {
        // Could not find a matching segment. The client tree is inconsistent with
        // the server tree. Suspend indefinitely; the router will have already
        // detected the inconsistency when handling the server response, and
        // triggered a refresh of the page to recover.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    let maybeValidationBoundaryId = null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const activeSegment = activeTree[0];
    const activeCacheNode = maybeParentSlots[parallelRouterKey] ?? null;
    const activeStateKey = (0, _createroutercachekey.createRouterCacheKey)(activeSegment, true) // no search params
    ;
    // At each level of the route tree, not only do we render the currently
    // active segment — we also render the last N segments that were active at
    // this level inside a hidden <Activity> boundary, to preserve their state
    // if or when the user navigates to them again.
    //
    // bfcacheEntry is a linked list of FlightRouterStates.
    let bfcacheEntry = (0, _bfcachestatemanager.useRouterBFCache)(activeTree, activeCacheNode, activeStateKey);
    let children = [];
    do {
        const tree = bfcacheEntry.tree;
        const cacheNode = bfcacheEntry.cacheNode;
        const stateKey = bfcacheEntry.stateKey;
        const segment = tree[0];
        /*
    - Error boundary
      - Only renders error boundary if error component is provided.
      - Rendered for each segment to ensure they have their own error state.
      - When gracefully degrade for bots, skip rendering error boundary.
    - Loading boundary
      - Only renders suspense boundary if loading components is provided.
      - Rendered for each segment to ensure they have their own loading state.
      - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
  */ let segmentBoundaryTriggerNode = null;
        let segmentViewStateNode = null;
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentBoundaryTriggerNode, SegmentViewStateNode } = __turbopack_context__.r("[project]/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            const pagePrefix = (0, _apppaths.normalizeAppPath)(url);
            segmentViewStateNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentViewStateNode, {
                page: pagePrefix
            }, pagePrefix);
            segmentBoundaryTriggerNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentBoundaryTriggerNode, {})
            });
        }
        let params = parentParams;
        if (Array.isArray(segment)) {
            // This segment contains a route param. Accumulate these as we traverse
            // down the router tree. The result represents the set of params that
            // the layout/page components are permitted to access below this point.
            const paramName = segment[0];
            const paramCacheKey = segment[1];
            const paramType = segment[2];
            const paramValue = (0, _routeparams.getParamValueFromCacheKey)(paramCacheKey, paramType);
            if (paramValue !== null) {
                params = {
                    ...parentParams,
                    [paramName]: paramValue
                };
            }
        }
        const debugName = getBoundaryDebugNameFromSegment(segment);
        // `debugNameContext` represents the nearest non-"virtual" parent segment.
        // `getBoundaryDebugNameFromSegment` returns undefined for virtual segments.
        // So if `debugName` is undefined, the context is passed through unchanged.
        const childDebugNameContext = debugName ?? debugNameContext;
        // In practical terms, clicking this name in the Suspense DevTools
        // should select the child slots of that layout.
        //
        // So the name we apply to the Activity boundary is actually based on
        // the nearest parent segments.
        //
        // We skip over "virtual" parents, i.e. ones inserted by Next.js that
        // don't correspond to application-defined code.
        const isVirtual = debugName === undefined;
        const debugNameToDisplay = isVirtual ? undefined : debugNameContext;
        let templateValue = /*#__PURE__*/ (0, _jsxruntime.jsxs)(ScrollAndMaybeFocusHandler, {
            cacheNode: cacheNode,
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                    errorComponent: error,
                    errorStyles: errorStyles,
                    errorScripts: errorScripts,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                        name: debugNameToDisplay,
                        // TODO: The loading module data for a segment is stored on the
                        // parent, then applied to each of that parent segment's
                        // parallel route slots. In the simple case where there's only
                        // one parallel route (the `children` slot), this is no
                        // different from if the loading module data were stored on the
                        // child directly. But I'm not sure this actually makes sense
                        // when there are multiple parallel routes. It's not a huge
                        // issue because you always have the option to define a narrower
                        // loading boundary for a particular slot. But this sort of
                        // smells like an implementation accident to me.
                        loading: parentLoadingData,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary1.HTTPAccessFallbackBoundary, {
                            notFound: notFound,
                            forbidden: forbidden,
                            unauthorized: unauthorized,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                        url: url,
                                        tree: tree,
                                        params: params,
                                        cacheNode: cacheNode,
                                        segmentPath: segmentPath,
                                        debugNameContext: childDebugNameContext,
                                        isActive: isActive && stateKey === activeStateKey
                                    }),
                                    segmentBoundaryTriggerNode
                                ]
                            })
                        })
                    })
                }),
                segmentViewStateNode
            ]
        });
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
            value: templateValue,
            children: [
                templateStyles,
                templateScripts,
                template
            ]
        }, stateKey);
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentStateProvider } = __turbopack_context__.r("[project]/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(SegmentStateProvider, {
                children: [
                    child,
                    segmentViewBoundaries
                ]
            }, stateKey);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        children.push(child);
        bfcacheEntry = bfcacheEntry.next;
    }while (bfcacheEntry !== null)
    return children;
}
function getBoundaryDebugNameFromSegment(segment) {
    if (segment === '/') {
        // Reached the root
        return '/';
    }
    if (typeof segment === 'string') {
        if (isVirtualLayout(segment)) {
            return undefined;
        } else {
            return segment + '/';
        }
    }
    const paramCacheKey = segment[1];
    return paramCacheKey + '/';
}
function isVirtualLayout(segment) {
    return(// (like __PAGE__ and __DEFAULT__) to avoid collisions with
    // user-defined route groups.
    segment === '(__SLOT__)');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/render-from-template-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontextsharedruntime.TemplateContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedParams = new WeakMap();
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            warnForEnumeration();
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A param property was accessed directly with ${expression}. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForEnumeration() {
    console.error(`params are being enumerated. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderParamsFromClient(clientParams) {
    return makeDynamicallyTrackedParamsWithDevWarnings(clientParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const createRenderParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)").createRenderParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedSearchParams = new WeakMap();
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const promise = Promise.resolve(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            warnForSyncSpread();
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A searchParam property was accessed directly with ${expression}. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForSyncSpread() {
    console.error(`The keys of \`searchParams\` were accessed directly. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderSearchParamsFromClient(underlyingSearchParams) {
    return makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const createRenderSearchParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)").createRenderSearchParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/lib/metadata/generate/icon-mark.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IconMark", {
    enumerable: true,
    get: function() {
        return IconMark;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const IconMark = ()=>{
    if (typeof window !== 'undefined') {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        name: "\xabnxt-icon\xbb"
    });
};
}),
"[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Run function with `scroll-behavior: auto` applied to `<html/>`.
 * This css change will be reverted after the function finishes.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "disableSmoothScrollDuringRouteTransition", {
    enumerable: true,
    get: function() {
        return disableSmoothScrollDuringRouteTransition;
    }
});
function disableSmoothScrollDuringRouteTransition(fn, options = {}) {
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const hasDataAttribute = htmlElement.dataset.scrollBehavior === 'smooth';
    if (!hasDataAttribute) {
        // Warn if smooth scrolling is detected but no data attribute is present
        if (("TURBOPACK compile-time value", "development") === 'development' && getComputedStyle(htmlElement).scrollBehavior === 'smooth') {
            const { warnOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
            warnOnce('Detected `scroll-behavior: smooth` on the `<html>` element. To disable smooth scrolling during route transitions, ' + 'add `data-scroll-behavior="smooth"` to your <html> element. ' + 'Learn more: https://nextjs.org/docs/messages/missing-data-scroll-behavior');
        }
        // No smooth scrolling configured, run directly without style manipulation
        fn();
        return;
    }
    // Proceed with temporarily disabling smooth scrolling
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
}
}),
"[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    describeHasCheckingStringProperty: null,
    describeStringPropertyAccess: null,
    wellKnownProperties: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return `\`${target}.${prop}\``;
    }
    return `\`${target}[${JSON.stringify(prop)}]\``;
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    'then',
    'catch',
    'finally',
    // React Promise extension
    'status',
    // 'value',
    // 'error',
    // React introspection
    'displayName',
    '_debugInfo',
    // Common tested properties
    'toJSON',
    '$$typeof',
    '__esModule',
    // Tested by flight when checking for iterables
    '@@iterator'
]);
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/src/components/AdShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WebAds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WebAds.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AdShell(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "6ccce9bb30767a6be8142dc45adfa0c7732309a8cc74b554eb807f1533421c61") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ccce9bb30767a6be8142dc45adfa0c7732309a8cc74b554eb807f1533421c61";
    }
    const { plan } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (pathname.startsWith("/admin")) {
        return null;
    }
    let t1;
    if ($[1] !== plan) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WebAds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            plan: plan
        }, void 0, false, {
            fileName: "[project]/src/components/AdShell.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[1] = plan;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_s(AdShell, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AdShell;
var _c;
__turbopack_context__.k.register(_c, "AdShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AppGate.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TIKTOK_1_CLICKED = "driacom_tiktok_1_clicked_v2";
const TIKTOK_2_CLICKED = "driacom_tiktok_2_clicked_v2";
function AppGate(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(65);
    if ($[0] !== "cac2961a38fcd62cde75de642b89cc8457b8218ad620c6b6f4b9fb7fb994acd7") {
        for(let $i = 0; $i < 65; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cac2961a38fcd62cde75de642b89cc8457b8218ad620c6b6f4b9fb7fb994acd7";
    }
    const { children } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [gateDone, setGateDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tiktok1, setTiktok1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tiktok2, setTiktok2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== pathname) {
        t1 = pathname.startsWith("/admin") || pathname.startsWith("/api") || pathname.startsWith("/_next") || pathname === "/favicon.ico";
        $[1] = pathname;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const bypass = t1;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "AppGate[useEffect()]": ()=>{
                const l = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGE_STORAGE_KEY"]);
                if (l === "id" || l === "en") {
                    setLanguage(l);
                }
                setGateDone(localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GATE_STORAGE_KEY"]) === "true");
                setTiktok1(localStorage.getItem(TIKTOK_1_CLICKED) === "true");
                setTiktok2(localStorage.getItem(TIKTOK_2_CLICKED) === "true");
                setReady(true);
            }
        })["AppGate[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[5] !== bypass || $[6] !== language || $[7] !== ready) {
        t4 = ({
            "AppGate[useEffect()]": ()=>{
                if (!ready || bypass) {
                    return;
                }
                const active = language || "id";
                document.documentElement.lang = active;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateDocument"])(active);
                const f = {
                    "AppGate[useEffect() > f]": (e)=>{
                        const n = e.detail;
                        if (n !== "id" && n !== "en") {
                            return;
                        }
                        setLanguage(n);
                        document.documentElement.lang = n;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateDocument"])(n);
                    }
                }["AppGate[useEffect() > f]"];
                addEventListener("driacom-language-change", f);
                return ()=>removeEventListener("driacom-language-change", f);
            }
        })["AppGate[useEffect()]"];
        t5 = [
            ready,
            language,
            bypass
        ];
        $[5] = bypass;
        $[6] = language;
        $[7] = ready;
        $[8] = t4;
        $[9] = t5;
    } else {
        t4 = $[8];
        t5 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[10] !== bypass || $[11] !== gateDone || $[12] !== language || $[13] !== ready) {
        t6 = ({
            "AppGate[useEffect()]": ()=>{
                if (!ready || bypass || !language || !gateDone) {
                    return;
                }
                const o = new MutationObserver(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateDocument"])(language));
                o.observe(document.body, {
                    childList: true,
                    subtree: true
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateDocument"])(language);
                return ()=>o.disconnect();
            }
        })["AppGate[useEffect()]"];
        t7 = [
            ready,
            language,
            gateDone,
            bypass
        ];
        $[10] = bypass;
        $[11] = gateDone;
        $[12] = language;
        $[13] = ready;
        $[14] = t6;
        $[15] = t7;
    } else {
        t6 = $[14];
        t7 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = function choose(next) {
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGE_STORAGE_KEY"], next);
            setLanguage(next);
            document.documentElement.lang = next;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateDocument"])(next);
            dispatchEvent(new CustomEvent("driacom-language-change", {
                detail: next
            }));
        };
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    const choose = t8;
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = function markTikTok(which) {
            if (which === 1) {
                localStorage.setItem(TIKTOK_1_CLICKED, "true");
                setTiktok1(true);
            } else {
                localStorage.setItem(TIKTOK_2_CLICKED, "true");
                setTiktok2(true);
            }
        };
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const markTikTok = t9;
    let t10;
    if ($[18] !== pathname || $[19] !== router || $[20] !== tiktok1 || $[21] !== tiktok2) {
        t10 = function finish() {
            if (!tiktok1 || !tiktok2) {
                return;
            }
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GATE_STORAGE_KEY"], "true");
            setGateDone(true);
            if (pathname === "/" || pathname === "/login") {
                router.replace("/dashboard");
            }
        };
        $[18] = pathname;
        $[19] = router;
        $[20] = tiktok1;
        $[21] = tiktok2;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    const finish = t10;
    if (bypass || !ready) {
        let t11;
        if ($[23] !== children) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, this);
            $[23] = children;
            $[24] = t11;
        } else {
            t11 = $[24];
        }
        return t11;
    }
    if (!language) {
        let t11;
        let t12;
        let t13;
        let t14;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/driacom-logo.png",
                alt: "Driacom",
                className: "mx-auto h-20 w-20 object-contain"
            }, void 0, false, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 195,
                columnNumber: 13
            }, this);
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-5 text-[10px] font-black tracking-[0.3em] text-amber-300",
                children: "DRIACOM"
            }, void 0, false, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 196,
                columnNumber: 13
            }, this);
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mt-3 text-3xl font-black sm:text-4xl",
                children: "Choose Language / Pilih Bahasa"
            }, void 0, false, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 197,
                columnNumber: 13
            }, this);
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500",
                children: "Choose your language before entering the free Prompt Generator."
            }, void 0, false, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 198,
                columnNumber: 13
            }, this);
            $[25] = t11;
            $[26] = t12;
            $[27] = t13;
            $[28] = t14;
        } else {
            t11 = $[25];
            t12 = $[26];
            t13 = $[27];
            t14 = $[28];
        }
        let t15;
        if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = ({
                "AppGate[<button>.onClick]": ()=>choose("id")
            })["AppGate[<button>.onClick]"];
            $[29] = t15;
        } else {
            t15 = $[29];
        }
        let t16;
        let t17;
        if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t15,
                className: "rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 text-left transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl",
                        children: "🇮🇩"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppGate.tsx",
                        lineNumber: 221,
                        columnNumber: 179
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-2 block text-lg font-black",
                        children: "Indonesia"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppGate.tsx",
                        lineNumber: 221,
                        columnNumber: 217
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 block text-xs text-zinc-500",
                        children: "Bahasa Indonesia"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppGate.tsx",
                        lineNumber: 221,
                        columnNumber: 281
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 221,
                columnNumber: 13
            }, this);
            t17 = ({
                "AppGate[<button>.onClick]": ()=>choose("en")
            })["AppGate[<button>.onClick]"];
            $[30] = t16;
            $[31] = t17;
        } else {
            t16 = $[30];
            t17 = $[31];
        }
        let t18;
        if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex min-h-screen items-center justify-center bg-[#050811] px-5 py-12 text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "w-full max-w-xl rounded-[32px] border border-white/10 bg-[#090e16] p-7 text-center shadow-2xl sm:p-10",
                    children: [
                        t11,
                        t12,
                        t13,
                        t14,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 grid gap-3 sm:grid-cols-2",
                            children: [
                                t16,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: t17,
                                    className: "rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 text-left transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl",
                                            children: "🇬🇧"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppGate.tsx",
                                            lineNumber: 233,
                                            columnNumber: 474
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-2 block text-lg font-black",
                                            children: "English"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppGate.tsx",
                                            lineNumber: 233,
                                            columnNumber: 512
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-1 block text-xs text-zinc-500",
                                            children: "English"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AppGate.tsx",
                                            lineNumber: 233,
                                            columnNumber: 574
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AppGate.tsx",
                                    lineNumber: 233,
                                    columnNumber: 308
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AppGate.tsx",
                            lineNumber: 233,
                            columnNumber: 255
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AppGate.tsx",
                    lineNumber: 233,
                    columnNumber: 112
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, this);
            $[32] = t18;
        } else {
            t18 = $[32];
        }
        return t18;
    }
    if (!gateDone) {
        const en = language === "en";
        const unlocked = tiktok1 && tiktok2;
        let t11;
        let t12;
        if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-pink-400/20 bg-pink-400/[0.06] text-3xl",
                children: "❤️"
            }, void 0, false, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 246,
                columnNumber: 13
            }, this);
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-6 text-[10px] font-black tracking-[0.28em] text-amber-300",
                children: "DRIACOM"
            }, void 0, false, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 247,
                columnNumber: 13
            }, this);
            $[33] = t11;
            $[34] = t12;
        } else {
            t11 = $[33];
            t12 = $[34];
        }
        const t13 = en ? "Support Driacom" : "Dukung Driacom";
        let t14;
        if ($[35] !== t13) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mt-2 text-3xl font-black sm:text-4xl",
                children: t13
            }, void 0, false, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 257,
                columnNumber: 13
            }, this);
            $[35] = t13;
            $[36] = t14;
        } else {
            t14 = $[36];
        }
        const t15 = en ? "To use the full Prompt Generator for free, please follow both of our TikTok accounts first." : "Untuk menggunakan seluruh Prompt Generator secara gratis, silakan ikuti kedua akun TikTok kami terlebih dahulu.";
        let t16;
        if ($[37] !== t15) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mx-auto mt-3 max-w-xl text-sm leading-7 text-zinc-400",
                children: t15
            }, void 0, false, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 266,
                columnNumber: 13
            }, this);
            $[37] = t15;
            $[38] = t16;
        } else {
            t16 = $[38];
        }
        let t17;
        if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = ({
                "AppGate[<a>.onClick]": ()=>markTikTok(1)
            })["AppGate[<a>.onClick]"];
            $[39] = t17;
        } else {
            t17 = $[39];
        }
        const t18 = `rounded-2xl border px-5 py-4 text-sm font-black transition ${tiktok1 ? "border-emerald-400/40 bg-emerald-400/[0.08] text-emerald-200" : "border-white/10 bg-white/[0.04] hover:border-pink-300/30"}`;
        const t19 = tiktok1 ? en ? "\u2713 TikTok 1 Opened" : "\u2713 TikTok 1 Sudah Dibuka" : en ? "Follow TikTok 1 \u2197" : "Ikuti TikTok 1 \u2197";
        let t20;
        if ($[40] !== t18 || $[41] !== t19) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIKTOK_URL_1"],
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: t17,
                className: t18,
                children: t19
            }, void 0, false, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 285,
                columnNumber: 13
            }, this);
            $[40] = t18;
            $[41] = t19;
            $[42] = t20;
        } else {
            t20 = $[42];
        }
        let t21;
        if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
            t21 = ({
                "AppGate[<a>.onClick]": ()=>markTikTok(2)
            })["AppGate[<a>.onClick]"];
            $[43] = t21;
        } else {
            t21 = $[43];
        }
        const t22 = `rounded-2xl border px-5 py-4 text-sm font-black transition ${tiktok2 ? "border-emerald-400/40 bg-emerald-400/[0.08] text-emerald-200" : "border-white/10 bg-white/[0.04] hover:border-pink-300/30"}`;
        const t23 = tiktok2 ? en ? "\u2713 TikTok 2 Opened" : "\u2713 TikTok 2 Sudah Dibuka" : en ? "Follow TikTok 2 \u2197" : "Ikuti TikTok 2 \u2197";
        let t24;
        if ($[44] !== t22 || $[45] !== t23) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIKTOK_URL_2"],
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: t21,
                className: t22,
                children: t23
            }, void 0, false, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 305,
                columnNumber: 13
            }, this);
            $[44] = t22;
            $[45] = t23;
            $[46] = t24;
        } else {
            t24 = $[46];
        }
        let t25;
        if ($[47] !== t20 || $[48] !== t24) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid gap-3 sm:grid-cols-2",
                children: [
                    t20,
                    t24
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 314,
                columnNumber: 13
            }, this);
            $[47] = t20;
            $[48] = t24;
            $[49] = t25;
        } else {
            t25 = $[49];
        }
        const t26 = !unlocked;
        const t27 = `mt-6 w-full rounded-2xl px-5 py-4 text-sm font-black text-white shadow-xl transition ${unlocked ? "bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 hover:brightness-110" : "cursor-not-allowed bg-zinc-800 text-zinc-500 opacity-70"}`;
        const t28 = en ? "I've Followed Both \u2014 Continue \u2192" : "Saya Sudah Follow Keduanya \u2014 Lanjut \u2192";
        let t29;
        if ($[50] !== finish || $[51] !== t26 || $[52] !== t27 || $[53] !== t28) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: t26,
                onClick: finish,
                className: t27,
                children: t28
            }, void 0, false, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 326,
                columnNumber: 13
            }, this);
            $[50] = finish;
            $[51] = t26;
            $[52] = t27;
            $[53] = t28;
            $[54] = t29;
        } else {
            t29 = $[54];
        }
        const t30 = en ? "The website cannot automatically verify your TikTok follow status." : "Website tidak dapat memverifikasi status follow TikTok secara otomatis.";
        let t31;
        if ($[55] !== t30) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-[11px] leading-5 text-zinc-600",
                children: t30
            }, void 0, false, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 338,
                columnNumber: 13
            }, this);
            $[55] = t30;
            $[56] = t31;
        } else {
            t31 = $[56];
        }
        let t32;
        if ($[57] !== t14 || $[58] !== t16 || $[59] !== t25 || $[60] !== t29 || $[61] !== t31) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex min-h-screen items-center justify-center bg-[#050811] px-5 py-12 text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "w-full max-w-2xl rounded-[32px] border border-white/10 bg-[#090e16] p-7 text-center shadow-2xl sm:p-10",
                    children: [
                        t11,
                        t12,
                        t14,
                        t16,
                        t25,
                        t29,
                        t31
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AppGate.tsx",
                    lineNumber: 346,
                    columnNumber: 112
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AppGate.tsx",
                lineNumber: 346,
                columnNumber: 13
            }, this);
            $[57] = t14;
            $[58] = t16;
            $[59] = t25;
            $[60] = t29;
            $[61] = t31;
            $[62] = t32;
        } else {
            t32 = $[62];
        }
        return t32;
    }
    let t11;
    if ($[63] !== children) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/AppGate.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, this);
        $[63] = children;
        $[64] = t11;
    } else {
        t11 = $[64];
    }
    return t11;
}
_s(AppGate, "3s0MTp1ytOLRzV+cp+xyitN1sos=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AppGate;
var _c;
__turbopack_context__.k.register(_c, "AppGate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WebAds.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WebAds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const PUBLISHER = "ca-pub-2212969526982215";
const DEFAULT_TOP_SLOT = "5462390377";
const DEFAULT_BOTTOM_SLOT = "5462390377";
const DEFAULT_SIDE_SLOT = "1222928318";
function WebAds({ plan }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const publisher = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || PUBLISHER;
    const topSlot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ADSENSE_TOP_SLOT || DEFAULT_TOP_SLOT;
    const bottomSlot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ADSENSE_BOTTOM_SLOT || DEFAULT_BOTTOM_SLOT;
    const sideSlot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ADSENSE_SIDE_SLOT || DEFAULT_SIDE_SLOT;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebAds.useEffect": ()=>setMounted(true)
    }["WebAds.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebAds.useEffect": ()=>{
            if (!mounted || plan !== "FREE" || !publisher) return;
            const pushAds = {
                "WebAds.useEffect.pushAds": ()=>{
                    const ads = document.querySelectorAll('ins.adsbygoogle[data-driacom-slot="true"]:not([data-driacom-pushed="true"])');
                    if (!ads.length) return;
                    for (const ad of ads){
                        if (ad.getAttribute("data-ad-status")) continue;
                        try {
                            (window.adsbygoogle ||= []).push({});
                            ad.setAttribute("data-driacom-pushed", "true");
                        } catch  {
                        // AdSense can reject a duplicate/late push. Leave the slot intact so
                        // a later route/navigation retry can initialize it.
                        }
                    }
                }
            }["WebAds.useEffect.pushAds"];
            const existing = document.querySelector('script[data-driacom-adsense="true"]');
            if (existing) {
                if (window.adsbygoogle) pushAds();
                else existing.addEventListener("load", pushAds, {
                    once: true
                });
                const retry = window.setTimeout(pushAds, 1200);
                return ({
                    "WebAds.useEffect": ()=>window.clearTimeout(retry)
                })["WebAds.useEffect"];
            }
            const script = document.createElement("script");
            script.async = true;
            script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisher}`;
            script.crossOrigin = "anonymous";
            script.dataset.driacomAdsense = "true";
            script.addEventListener("load", pushAds, {
                once: true
            });
            document.head.appendChild(script);
            const retry1 = window.setTimeout(pushAds, 1200);
            const retry2 = window.setTimeout(pushAds, 3000);
            return ({
                "WebAds.useEffect": ()=>{
                    window.clearTimeout(retry1);
                    window.clearTimeout(retry2);
                }
            })["WebAds.useEffect"];
        }
    }["WebAds.useEffect"], [
        mounted,
        plan,
        publisher,
        topSlot,
        bottomSlot,
        sideSlot
    ]);
    // Driacom is web-only. All public users see the ad inventory.
    if (!mounted || plan !== "FREE" || !publisher) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full space-y-2",
                "aria-label": "Iklan",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdSlot, {
                        slot: topSlot,
                        label: "Iklan",
                        format: "horizontal",
                        minHeight: 90
                    }, void 0, false, {
                        fileName: "[project]/src/components/WebAds.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdSlot, {
                        slot: topSlot,
                        label: "Iklan",
                        format: "auto",
                        minHeight: 120
                    }, void 0, false, {
                        fileName: "[project]/src/components/WebAds.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WebAds.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-y-0 left-0 z-40 hidden w-[180px] items-center justify-center xl:flex 2xl:w-[220px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-auto w-[160px] 2xl:w-[200px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdSlot, {
                        slot: sideSlot,
                        label: "Iklan",
                        format: "auto",
                        minHeight: 250,
                        className: "w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WebAds.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/WebAds.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/WebAds.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-y-0 right-0 z-40 hidden w-[180px] items-center justify-center xl:flex 2xl:w-[220px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-auto w-[160px] 2xl:w-[200px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdSlot, {
                        slot: sideSlot,
                        label: "Iklan",
                        format: "auto",
                        minHeight: 250,
                        className: "w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WebAds.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/WebAds.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/WebAds.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full space-y-2",
                "aria-label": "Iklan",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdSlot, {
                        slot: bottomSlot,
                        label: "Iklan",
                        format: "auto",
                        minHeight: 120
                    }, void 0, false, {
                        fileName: "[project]/src/components/WebAds.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdSlot, {
                        slot: bottomSlot,
                        label: "Iklan",
                        format: "horizontal",
                        minHeight: 90
                    }, void 0, false, {
                        fileName: "[project]/src/components/WebAds.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WebAds.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WebAds.tsx",
        lineNumber: 74,
        columnNumber: 10
    }, this);
}
_s(WebAds, "BShlRgxf1Xjno/mi6QXyq9ZqIDE=");
_c = WebAds;
function AdSlot(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "47e85c3248304bc3caceb05c3d0880c941e820a03b74de5dd379b85d24f0cf4f") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "47e85c3248304bc3caceb05c3d0880c941e820a03b74de5dd379b85d24f0cf4f";
    }
    const { slot, label: t1, className: t2, format: t3, minHeight: t4 } = t0;
    const label = t1 === undefined ? "Iklan" : t1;
    const className = t2 === undefined ? "" : t2;
    const format = t3 === undefined ? "auto" : t3;
    const minHeight = t4 === undefined ? 90 : t4;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t5;
    let t6;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "AdSlot[useEffect()]": ()=>{
                const container = containerRef.current;
                if (!container) {
                    return;
                }
                const ad = container.querySelector("ins.adsbygoogle");
                if (!ad) {
                    return;
                }
                const collapseIfUnfilled = {
                    "AdSlot[useEffect() > collapseIfUnfilled]": ()=>{
                        if (ad.getAttribute("data-ad-status") === "unfilled") {
                            setVisible(false);
                        }
                    }
                }["AdSlot[useEffect() > collapseIfUnfilled]"];
                collapseIfUnfilled();
                const observer = new MutationObserver(collapseIfUnfilled);
                observer.observe(ad, {
                    attributes: true,
                    attributeFilter: [
                        "data-ad-status"
                    ]
                });
                return ()=>observer.disconnect();
            }
        })["AdSlot[useEffect()]"];
        t6 = [];
        $[1] = t5;
        $[2] = t6;
    } else {
        t5 = $[1];
        t6 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    if (!slot || !visible) {
        return null;
    }
    const t7 = `flex w-full items-center justify-center overflow-hidden ${className}`;
    let t8;
    if ($[3] !== minHeight) {
        t8 = {
            minHeight
        };
        $[3] = minHeight;
        $[4] = t8;
    } else {
        t8 = $[4];
    }
    let t9;
    if ($[5] !== minHeight) {
        t9 = {
            display: "block",
            minHeight,
            width: "100%"
        };
        $[5] = minHeight;
        $[6] = t9;
    } else {
        t9 = $[6];
    }
    let t10;
    if ($[7] !== format || $[8] !== slot || $[9] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ins", {
            className: "adsbygoogle block w-full",
            style: t9,
            "data-driacom-slot": "true",
            "data-ad-client": PUBLISHER,
            "data-ad-slot": slot,
            "data-ad-format": format,
            "data-full-width-responsive": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/WebAds.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[7] = format;
        $[8] = slot;
        $[9] = t9;
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    let t11;
    if ($[11] !== label || $[12] !== t10 || $[13] !== t7 || $[14] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: t7,
            style: t8,
            "aria-label": label,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/WebAds.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[11] = label;
        $[12] = t10;
        $[13] = t7;
        $[14] = t8;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    return t11;
}
_s1(AdSlot, "Q+/T/d+HdqX64Qsd3/Y9HEB/ElI=");
_c1 = AdSlot;
var _c, _c1;
__turbopack_context__.k.register(_c, "WebAds");
__turbopack_context__.k.register(_c1, "AdSlot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GATE_STORAGE_KEY",
    ()=>GATE_STORAGE_KEY,
    "LANGUAGE_STORAGE_KEY",
    ()=>LANGUAGE_STORAGE_KEY,
    "TIKTOK_URL_1",
    ()=>TIKTOK_URL_1,
    "TIKTOK_URL_2",
    ()=>TIKTOK_URL_2,
    "translateDocument",
    ()=>translateDocument,
    "translateText",
    ()=>translateText,
    "translations",
    ()=>translations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const LANGUAGE_STORAGE_KEY = "driacom_language_v2";
const GATE_STORAGE_KEY = "driacom_tiktok_gate_v2";
const TIKTOK_URL_1 = ("TURBOPACK compile-time value", "https://www.tiktok.com/@nayakiranaa_") || "https://www.tiktok.com/@nayakiranaa_";
const TIKTOK_URL_2 = ("TURBOPACK compile-time value", "https://www.tiktok.com/@_driacom") || "https://www.tiktok.com/@_driacom";
const en = {
    "Prompt AI Generator": "AI Prompt Generator",
    "Pilih engine Driacom sesuai jenis konten yang ingin kamu racik.": "Choose the Driacom engine for the type of content you want to create.",
    "Animasi": "Animation",
    "Storytelling": "Storytelling",
    "Affiliate": "Affiliate",
    "Dashboard": "Dashboard",
    "NAVIGASI": "NAVIGATION",
    "Navigasi": "Navigation",
    "BUKA ENGINE": "OPEN ENGINE",
    "Buka Engine": "Open Engine",
    "Racik prompt visual, objek bicara, ASMR, fakta unik, edukasi, dan berbagai format konten AI.": "Create visual prompts, talking objects, ASMR, unique facts, educational content, and many AI content formats.",
    "Bangun cerita dengan karakter, konflik, perkembangan alur, klimaks, dialog, scene, dan continuity.": "Build stories with characters, conflict, plot progression, climax, dialogue, scenes, and continuity.",
    "Rancang hook, UGC, review produk, soft selling, hard selling, CTA, dan konsep video affiliate.": "Create hooks, UGC, product reviews, soft selling, hard selling, CTAs, and affiliate video concepts.",
    "PROMPT ANIMASI": "ANIMATION PROMPT",
    "STORY DIRECTOR": "STORY DIRECTOR",
    "PROMPT AFFILIATE": "AFFILIATE PROMPT",
    "Affiliate Engine": "Affiliate Engine",
    "Animation Engine": "Animation Engine",
    "Storytelling Engine": "Storytelling Engine",
    "Racik Konten": "Create Content",
    "Racik Cerita": "Build Your Story",
    "Generate Prompt": "Generate Prompt",
    "Buat Prompt": "Create Prompt",
    "Mulai Generate": "Start Generating",
    "Kembali": "Back",
    "Salin": "Copy",
    "Disalin": "Copied",
    "Memproses...": "Processing...",
    "Sedang meracik...": "Creating...",
    "Pilih genre. Masukkan ide. Driacom mengurus detail ceritanya.": "Choose a genre. Add an idea. Driacom handles the story details.",
    "Cukup atur hal penting. Detail produksi akan diracik otomatis.": "Set the important details. Production details are created automatically.",
    "Field opsional boleh kosong. Driacom tetap mengisi angle, naskah, motion text, dan detail produksi secara otomatis.": "Optional fields can be left empty. Driacom will still create the angle, script, motion text, and production details automatically.",
    "Jenis Konten Affiliate": "Affiliate Content Type",
    "Upload Foto Produk": "Upload Product Photo",
    "Genre Cerita": "Story Genre",
    "Ide / Alur Cerita": "Story Idea / Plot",
    "Bahasa Inggris": "English",
    "English": "English",
    "Bahasa Melayu": "Malay",
    "Tanpa Audio": "No Audio",
    "Narasi + BGM + Efek Suara": "Narration + BGM + Sound Effects",
    "Narasi + Efek Suara": "Narration + Sound Effects",
    "BGM + Efek Suara (ASMR)": "BGM + Sound Effects (ASMR)",
    "Hanya Narasi / Dialog": "Narration / Dialogue Only",
    "Racik Prompt": "Create Prompt",
    "Racik Story": "Create Story",
    "Bantu Buat Ide": "Help Me Create an Idea",
    "AI Driacom — Bantu Buat Ide": "Driacom AI — Help Create an Idea",
    "Driacom sedang mencari ide...": "Driacom is finding ideas...",
    "Driacom sedang meracik...": "Driacom is creating...",
    "Driacom sedang meracik prompt...": "Driacom is creating the prompt...",
    "✦ Racik Prompt": "✦ Create Prompt",
    "✦ Racik Story": "✦ Create Story",
    "Ceritakan ide kamu. Detail produksi disusun otomatis oleh Driacom.": "Tell us your idea. Driacom automatically handles the production details.",
    "Buat Animasi": "Create Animation",
    "Kamu cukup menentukan arah cerita. Detail produksi dikerjakan otomatis oleh Driacom.": "You only need to define the story direction. Driacom handles the production details automatically.",
    "Jenis Konten Animasi": "Animation Content Type",
    "Satu engine untuk berbagai format. Driacom menyesuaikan cara membuat prompt berdasarkan pilihan ini.": "One engine for many formats. Driacom adapts the prompt structure to your selection.",
    "Ide / Topik": "Idea / Topic",
    "Gaya Visual": "Visual Style",
    "Driacom menyesuaikan seluruh desain visual.": "Driacom adapts the entire visual design.",
    "Jumlah Karakter": "Number of Characters",
    "Driacom membuat identitas karakter otomatis.": "Driacom creates the character identity automatically.",
    "Struktur Video": "Video Structure",
    "Atur scene, durasi, ratio, dan bahasa.": "Set the scenes, duration, aspect ratio, and language.",
    "Bahasa": "Language",
    "Audio": "Audio",
    "Pilih elemen suara yang digunakan.": "Choose the sound elements to use.",
    "Siapa yang Berbicara?": "Who Is Speaking?",
    "Tentukan sumber suara cerita.": "Choose the story voice source.",
    "Master Character Sheet": "Master Character Sheet",
    "Setiap karakter memiliki 1 prompt master sendiri. Jika ada 2 karakter, Driacom menghasilkan 2 prompt terpisah agar setiap gambar fokus pada satu karakter lengkap dengan turnaround dan detail identitas.": "Each character gets one dedicated master prompt. If there are two characters, Driacom creates two separate prompts so each image focuses on one complete character with turnaround views and identity details.",
    "Scene Production": "Scene Production",
    "Setiap scene hanya berisi Image Prompt dan Video Prompt. Naskah dialog, narasi, voice, BGM, SFX, dan audio direction sudah ditanam langsung di dalam Video Prompt.": "Each scene contains only an Image Prompt and Video Prompt. Dialogue, narration, voice, BGM, SFX, and audio direction are built directly into the Video Prompt.",
    "Karakter": "Character",
    "Dialog": "Dialogue",
    "Image": "Image",
    "Video": "Video",
    "Identity Lock": "Identity Lock",
    "Scene Script": "Scene Script",
    "Start Frame": "Start Frame",
    "Motion Prompt": "Motion Prompt",
    "Animation Workspace": "Animation Workspace",
    "Animation Output": "Animation Output",
    "Jenis Konten": "Content Type",
    "Petualangan": "Adventure",
    "Eksperimen & Sains": "Experiments & Science",
    "Konten Hewan": "Animal Content",
    "Fakta Unik": "Unique Facts",
    "Edukasi Visual": "Visual Education",
    "Objek Bicara": "Talking Object",
    "What If": "What If",
    "Miniatur": "Miniature",
    "ASMR": "ASMR",
    "Pilih genre": "Choose a genre",
    "Masukkan ide": "Enter an idea",
    "Contoh": "Example",
    "Coba lagi": "Try again",
    "Tidak": "No",
    "Ya": "Yes",
    "Opsional": "Optional",
    "Wajib": "Required",
    "Hapus": "Delete",
    "Hapus upload": "Remove upload",
    "Upload": "Upload",
    "Pilih File": "Choose File",
    "Belum ada file": "No file selected",
    "Jumlah Scene": "Number of Scenes",
    "Durasi per Scene": "Duration per Scene",
    "Rasio": "Aspect Ratio",
    "Ratio": "Aspect Ratio",
    "Bahasa Output": "Output Language",
    "Rasio Video": "Video Aspect Ratio",
    "Tone Cerita": "Story Tone",
    "Gaya Suara": "Voice Style",
    "Motion Text": "Motion Text",
    "Gaya Motion Text": "Motion Text Style",
    "Upload Background / Lokasi": "Upload Background / Location",
    "Deskripsi Background / Lokasi": "Background / Location Description",
    "Hal yang Wajib Ditampilkan (opsional)": "Required Elements (optional)",
    "Nama Produk": "Product Name",
    "Brand / Merk": "Brand / Brand Name",
    "Upload Foto Karakter": "Upload Character Photo",
    "Apa yang Mau Diiklankan? (opsional)": "What Do You Want to Advertise? (optional)",
    "POV Tangan": "Hand POV",
    "Pakai Karakter": "Use Character",
    "UGC Natural": "Natural UGC",
    "Unboxing": "Unboxing",
    "Review Produk": "Product Review",
    "Spill Produk": "Product Showcase",
    "Soft Selling": "Soft Selling",
    "Natural": "Natural",
    "Softselling": "Soft Sell",
    "Hardselling": "Hard Sell",
    "Dinamic": "Dynamic",
    "Kinetic": "Kinetic",
    "Highlight": "Highlight",
    "Siapa / Apa yang Tampil": "Who / What Appears",
    "SIAPA / APA YANG TAMPIL": "WHO / WHAT APPEARS",
    "STRUKTUR VIDEO": "VIDEO STRUCTURE",
    "SCENE": "SCENE",
    "SHOT": "SHOT",
    "TOTAL": "TOTAL",
    "Master Character Sheet Prompt": "Master Character Sheet Prompt",
    "Storyboard + Video": "Storyboard + Video",
    "Generator Driacom": "Driacom Generator",
    "Short Story": "Short Story",
    "Gaya": "Style",
    "Struktur": "Structure",
    "Visual": "Visual",
    "Generate": "Generate",
    "Judul Cerita": "Story Title",
    "Ide Cerita": "Story Idea",
    "Karakter Utama": "Main Character",
    "Lokasi / Dunia Cerita": "Story Location / World",
    "Nuansa Cerita": "Story Mood",
    "Prompt Gambar": "Image Prompt",
    "Prompt Video Google Flow": "Google Flow Video Prompt",
    "Prompt Negatif": "Negative Prompt",
    "Alur Cerita": "Story Flow",
    "Pilih engine Driacom": "Choose a Driacom engine",
    "Menyusun": "Creating",
    "Hasil": "Result",
    "Output": "Output",
    "Kosong": "Empty",
    "Belum ada hasil": "No result yet",
    "Salin Prompt": "Copy Prompt",
    "Prompt berhasil disalin": "Prompt copied",
    "Detail": "Details",
    "Lihat Detail": "View Details",
    "Buka menu navigasi": "Open navigation menu",
    "Tutup menu": "Close menu",
    "Pilih Bahasa": "Choose Language",
    "Pilih bahasa": "Choose language",
    "Indonesia": "Indonesia",
    "Bahasa Indonesia": "Indonesian",
    "Driacom gagal membuat pilihan ide.": "Driacom could not create idea options.",
    "Driacom belum berhasil membuat pilihan ide. Coba lagi.": "Driacom could not create idea options. Try again.",
    "Driacom tidak menerima output Animation dari server.": "Driacom did not receive an Animation output from the server.",
    "Driacom gagal meracik prompt karena sedang banyak yang menggunakan Driacom. Coba lagi beberapa saat.": "Driacom could not create the prompt because Driacom is currently busy. Please try again shortly.",
    "Driacom gagal meracik prompt affiliate.": "Driacom could not create the affiliate prompt.",
    "Driacom gagal meracik cerita.": "Driacom could not create the story.",
    "Driacom belum bisa membuat ide.": "Driacom could not create an idea yet.",
    "File harus berupa gambar.": "The file must be an image.",
    "Upload foto produk, isi nama produk, dan isi brand/merk.": "Upload a product photo, enter the product name, and enter the brand.",
    "Upload foto karakter karena mode Pakai Karakter dipilih.": "Upload a character photo because Use Character mode is selected.",
    "Harga sewaktu-waktu bisa berubah. Langganan sekarang sebelum harga kembali normal.": "Prices may change at any time. Subscribe now before prices return to normal."
};
// Additional sentence-level translations used throughout the generators.
Object.assign(en, {
    "Pilih engine Driacom sesuai jenis konten yang ingin kamu racik.": "Choose the Driacom engine based on the content you want to create.",
    "Satu engine untuk berbagai format.": "One engine for many formats.",
    "Driacom menyesuaikan cara membuat prompt berdasarkan pilihan ini.": "Driacom adapts the prompt structure to this selection.",
    "Driacom menyesuaikan seluruh desain visual.": "Driacom adapts the entire visual design.",
    "Driacom membuat identitas karakter otomatis.": "Driacom automatically creates the character identity.",
    "Atur scene, durasi, ratio, dan bahasa.": "Set scenes, duration, aspect ratio, and language.",
    "Pilih elemen suara yang digunakan.": "Choose the sound elements to use.",
    "Tentukan sumber suara cerita.": "Choose the story voice source.",
    "Field opsional boleh kosong.": "Optional fields can be left empty.",
    "Driacom tetap mengisi angle, naskah, motion text, dan detail produksi secara otomatis.": "Driacom will still create the angle, script, motion text, and production details automatically.",
    "Produk → angle iklan → storyboard → video prompt.": "Product → ad angle → storyboard → video prompt.",
    "Pilih genre. Masukkan ide. Driacom mengurus detail ceritanya.": "Choose a genre. Add an idea. Driacom handles the story details.",
    "Ide dipilih:": "Selected idea:",
    "Tidak ada hasil": "No result",
    "Belum ada prompt": "No prompt yet",
    "Tutup pilihan": "Close options",
    "Cerita Pendek": "Short Story",
    "Drama": "Drama",
    "Romantis": "Romance",
    "Horror": "Horror",
    "Komedi": "Comedy",
    "Misteri": "Mystery",
    "Fantasi": "Fantasy",
    "Sejarah": "History",
    "Realistis Sinematik": "Cinematic Realism",
    "Sangat Realistis": "Hyperrealistic",
    "Animasi 3D": "3D Animation",
    "Narator + Dialog + Musik + SFX": "Narrator + Dialogue + Music + SFX",
    "Narator + Musik + SFX": "Narrator + Music + SFX",
    "Dialog + Musik + SFX": "Dialogue + Music + SFX",
    "Musik + SFX": "Music + SFX",
    "4 detik per scene": "4 seconds per scene",
    "6 detik per scene": "6 seconds per scene",
    "8 detik per scene": "8 seconds per scene",
    "10 detik per scene": "10 seconds per scene",
    "Contoh: Tulis ide singkat tentang cerita atau konsep animasi yang ingin kamu buat...": "Example: Write a short idea about the story or animation concept you want to create...",
    "Contoh: Tulis ide singkat tentang cerita yang ingin kamu kembangkan...": "Example: Write a short idea about the story you want to develop...",
    "Contoh: Cat Ear Headset P47": "Example: Cat Ear Headset P47",
    "Contoh: Driacom Audio": "Example: Driacom Audio",
    "Contoh: kamar tidur, kamar hotel, depan cermin, ruang tamu...": "Example: bedroom, hotel room, in front of a mirror, living room...",
    "Contoh: kemasan, tekstur, tombol, LED RGB, detail material...": "Example: packaging, texture, buttons, RGB LED, material details...",
    "Contoh: tunjukkan tekstur produk, cara pakai, dan kenapa aku suka hasil akhirnya.": "Example: show the product texture, how to use it, and why I like the final result."
});
// Extended UI/output translations for generator pages and dynamic result states.
Object.assign(en, {
    "Ada karakter + narator": "Character + narrator",
    "Ada karakter yang bicara": "Character speaks",
    "Ada narator saja": "Narrator only",
    "Atur scene, durasi, ratio, dan bahasa.": "Set scenes, duration, aspect ratio, and language.",
    "Bahasa Output": "Output Language",
    "Belum ada pilihan ide yang diterima dari Gemini.": "No idea options were returned by Gemini.",
    "Belum ada prompt.": "No prompt yet.",
    "Buat satu karakter utama yang paling sesuai dengan konsep, genre, dan gaya visual.": "Create one main character that best fits the concept, genre, and visual style.",
    "Buat seluruh desain karakter berdasarkan konsep cerita, genre ${genre}, dan gaya visual ${form.animationStyle}.": "Create the complete character design based on the story concept, genre ${genre}, and visual style ${form.animationStyle}.",
    "Buat ${characterCount} karakter berbeda yang relevan dengan cerita.": "Create ${characterCount} distinct characters relevant to the story.",
    "Driacom belum berhasil membuat pilihan ide. Coba lagi.": "Driacom could not create idea options. Try again.",
    "Driacom gagal membuat pilihan ide.": "Driacom failed to create idea options.",
    "Driacom gagal meracik prompt karena sedang banyak yang menggunakan Driacom. Coba lagi beberapa saat.": "Driacom could not create the prompt because Driacom is currently busy. Please try again shortly.",
    "Driacom membuat identitas karakter otomatis.": "Driacom creates the character identity automatically.",
    "Driacom menyesuaikan seluruh desain visual.": "Driacom adapts the entire visual design.",
    "Driacom tidak menerima output Animation dari server.": "Driacom did not receive an Animation output from the server.",
    "Gemini gagal membuat prompt (HTTP ${response.status}).": "Gemini failed to create the prompt (HTTP ${response.status}).",
    "Gunakan ekspresi karakter yang natural dan sesuai perkembangan cerita.": "Use natural character expressions that match the story progression.",
    "Gunakan ekspresi visual yang kuat untuk mendukung narasi.": "Use strong visual expressions to support the narrative.",
    "Jenis Konten Animasi": "Animation Content Type",
    "Jumlah Karakter": "Number of Characters",
    "Karakter Utama": "Main Character",
    "Pilih elemen suara yang digunakan.": "Choose the sound elements to use.",
    "Satu engine untuk berbagai format. Driacom menyesuaikan cara membuat prompt berdasarkan pilihan ini.": "One engine for many formats. Driacom adapts the prompt structure to your selection.",
    "Scene Production": "Scene Production",
    "Setiap scene hanya berisi Image Prompt dan Video Prompt. Naskah dialog, narasi, voice, BGM, SFX, dan audio direction sudah ditanam langsung di dalam Video Prompt.": "Each scene contains only an Image Prompt and Video Prompt. Dialogue, narration, voice, BGM, SFX, and audio direction are embedded directly in the Video Prompt.",
    "Siapa yang Berbicara?": "Who Is Speaking?",
    "Tentukan aksi konkret setiap scene berdasarkan perkembangan cerita.": "Define a concrete action for each scene based on the story progression.",
    "Tentukan sumber suara cerita.": "Choose the story voice source.",
    "Server Driacom mengembalikan respons yang bukan JSON (HTTP ${response.status}).": "Driacom returned a non-JSON response (HTTP ${response.status}).",
    "✓ Setiap scene akan memiliki naskah dialog karakter dan narasi yang disesuaikan dengan durasi scene.": "✓ Each scene will contain character dialogue and narration tailored to the scene duration.",
    "✓ Setiap scene akan memiliki naskah dialog karakter sesuai perkembangan cerita.": "✓ Each scene will contain character dialogue aligned with the story progression.",
    "✓ Setiap scene akan memiliki naskah narasi sesuai perkembangan cerita.": "✓ Each scene will contain narration aligned with the story progression.",
    "✦ AI Driacom — Bantu Buat Ide": "✦ Driacom AI — Help Create an Idea",
    "✦ Driacom sedang mencari ide...": "✦ Driacom is finding ideas...",
    "✦ Driacom sedang meracik prompt...": "✦ Driacom is creating the prompt...",
    "✦ Racik Prompt": "✦ Create Prompt",
    "✦ Bantu Buat Ide": "✦ Help Me Create an Idea",
    "✦ Driacom sedang meracik...": "✦ Driacom is creating...",
    "MASTER CHARACTER SHEET": "MASTER CHARACTER SHEET",
    "Character Prompts": "Character Prompts",
    "karakter": "characters",
    "Storyboard + Video": "Storyboard + Video",
    "SCENE PROMPTS": "SCENE PROMPTS",
    "Setiap scene hanya berisi satu storyboard/image prompt dan satu video prompt. Shot 1–4 tetap berada di dalam prompt video.": "Each scene contains one storyboard/image prompt and one video prompt. Shots 1–4 remain inside the single video prompt.",
    "Tersalin": "Copied",
    "✓ Tersalin": "✓ Copied",
    "Siap Meracik Cerita": "Ready to Build Your Story",
    "Story Director sedang bekerja...": "Story Director is working...",
    "Menyusun karakter, thumbnail, scene, prompt, dan continuity.": "Building characters, thumbnail, scenes, prompts, and continuity.",
    "Hasil akan berisi thumbnail, master karakter, lalu": "The result will contain a thumbnail, master character sheet, then",
    "scene": "scene",
    "Prompt produksi sudah diracik lengkap oleh Driacom.": "Production prompts are fully prepared by Driacom.",
    "Prompt Gambar": "Image Prompt",
    "Prompt Video Google Flow": "Google Flow Video Prompt",
    "Prompt Negatif": "Negative Prompt",
    "Alur Cerita": "Story Flow",
    "Kisah yang Tidak Akan Pernah Dilupakan": "A Story Never to Be Forgotten",
    "Lokasi / Dunia Cerita": "Story Location / World",
    "Nuansa Cerita": "Story Mood",
    "Judul Cerita": "Story Title",
    "Ide Cerita": "Story Idea",
    "Karakter": "Character",
    "Jumlah Adegan": "Number of Scenes",
    "Durasi": "Duration",
    "Rasio Video": "Video Aspect Ratio",
    "Contoh: Hadiah Terakhir untuk Ibu": "Example: The Last Gift for Mother",
    "Contoh: Pria Indonesia usia 25 tahun...": "Example: A 25-year-old Indonesian man...",
    "Contoh: Rumah sederhana di sebuah desa...": "Example: A simple house in a village...",
    "Contoh: Seorang anak diam-diam bekerja untuk membeli hadiah ibunya...": "Example: A child secretly works to buy a gift for his mother...",
    "Contoh: Tulis ide singkat tentang cerita atau konsep animasi yang ingin kamu buat...": "Example: Write a short idea about the story or animation concept you want to create...",
    "Contoh: Tulis ide singkat tentang cerita yang ingin kamu kembangkan...": "Example: Write a short idea about the story you want to develop...",
    "Contoh: Apa yang terjadi ketika sebuah benda dimasukkan ke dalam cairan yang sangat dingin?...": "Example: What happens when an object is placed into an extremely cold liquid?...",
    "Contoh: Bagaimana jika manusia bisa hidup tanpa tidur selama 30 hari?...": "Example: What if humans could live without sleep for 30 days?...",
    "Contoh: Fakta mengejutkan tentang bagaimana gurita bisa mengubah warna tubuhnya...": "Example: A surprising fact about how octopuses can change their body color...",
    "Contoh: Memotong sabun transparan dengan tekstur lembut dan suara potongan yang memuaskan...": "Example: Cutting transparent soap with a soft texture and satisfying cutting sounds...",
    "Contoh: Menjelaskan bagaimana hujan terbentuk dengan visual yang mudah dipahami...": "Example: Explaining how rain forms with easy-to-understand visuals...",
    "Contoh: Sebuah jam dinding tua mulai mengeluh karena selalu diabaikan pemiliknya...": "Example: An old wall clock starts complaining because its owner always ignores it...",
    "Contoh: Sebuah kedai kopi mini mulai hidup ketika seluruh kota sudah tertidur...": "Example: A miniature coffee shop comes alive after the whole city falls asleep...",
    "Contoh: Seekor anak kucing penasaran menjelajahi rumah dan menemukan sesuatu yang tidak terduga...": "Example: A curious kitten explores the house and discovers something unexpected...",
    "Contoh: Seorang anak menemukan pintu rahasia di tengah hutan dan memutuskan untuk membukanya...": "Example: A child finds a secret door in the middle of a forest and decides to open it...",
    "Contoh: Dua orang yang pernah saling mencintai bertemu kembali setelah bertahun-tahun...": "Example: Two people who once loved each other meet again after many years...",
    "Contoh: Dua sahabat harus memilih antara mempertahankan persahabatan atau mengungkap sebuah rahasia besar...": "Example: Two friends must choose between protecting their friendship and revealing a major secret...",
    "Contoh: Sebuah surat tanpa nama muncul setiap pagi dan perlahan mengungkap rahasia yang seharusnya tidak pernah diketahui...": "Example: An anonymous letter appears every morning and slowly reveals a secret that should never have been known...",
    "Contoh: Seorang anak menemukan pintu menuju kerajaan tersembunyi di balik buku tua milik kakeknya...": "Example: A child discovers a doorway to a hidden kingdom behind an old book belonging to their grandfather...",
    "Contoh: Seorang pemuda mencoba terlihat keren di depan orang yang disukainya, tetapi semuanya berubah menjadi kekacauan...": "Example: A young man tries to look cool in front of his crush, but everything turns into chaos...",
    "Contoh: Seorang penjaga rumah menyadari suara langkah kaki setiap malam selalu berhenti di depan kamarnya...": "Example: A house guard realizes that footsteps every night always stop in front of his room...",
    "Contoh: Seorang tokoh muda harus mengambil keputusan penting di tengah peristiwa bersejarah yang mengubah masa depan...": "Example: A young figure must make an important decision during a historic event that changes the future...",
    "Contoh: Seorang anak menemukan surat lama yang mengubah cara pandangnya terhadap keluarganya...": "Example: A child finds an old letter that changes the way they see their family...",
    "Contoh: Cat Ear Headset P47": "Example: Cat Ear Headset P47",
    "Contoh: Driacom Audio": "Example: Driacom Audio",
    "Contoh: kamar tidur, kamar hotel, depan cermin, ruang tamu...": "Example: bedroom, hotel room, in front of a mirror, living room...",
    "Contoh: kemasan, tekstur, tombol, LED RGB, detail material...": "Example: packaging, texture, buttons, RGB LED, material details...",
    "Contoh: tunjukkan tekstur produk, cara pakai, dan kenapa aku suka hasil akhirnya.": "Example: show the product texture, how to use it, and why I like the final result.",
    "Pilih foto reference": "Choose reference photo",
    "Driacom akan mengisi otomatis.": "Driacom will fill this automatically.",
    "Upload reference karakter; Driacom meracik master sheet": "Upload the character reference; Driacom will create the master sheet",
    "Tanpa Master Character Sheet": "No Master Character Sheet",
    "4 internal shot / scene": "4 internal shots / scene",
    "Tidak": "No",
    "SCENE": "SCENE",
    "Gratis 2x generate sudah habis. Tonton 2 iklan untuk +1 token atau upgrade ke PRO.": "Your 2 free generations are used. Watch 2 ads for +1 token or upgrade to PRO.",
    "Upload foto karakter karena mode Pakai Karakter dipilih.": "Upload a character photo because Use Character mode is selected.",
    "Upload foto produk, isi nama produk, dan isi brand/merk.": "Upload a product photo, enter the product name, and enter the brand.",
    "Hapus upload": "Remove upload",
    "Upload Background / Lokasi": "Upload Background / Location",
    "Upload Foto Karakter": "Upload Character Photo",
    "Upload Foto Produk": "Upload Product Photo",
    "Apa yang Mau Diiklankan? (opsional)": "What Do You Want to Advertise? (optional)",
    "Hal yang Wajib Ditampilkan (opsional)": "Required Elements (optional)",
    "Deskripsi Background / Lokasi": "Background / Location Description",
    "Gaya Motion Text": "Motion Text Style",
    "Gaya Suara": "Voice Style",
    "Jenis Konten Affiliate": "Affiliate Content Type",
    "Pakai Karakter": "Use Character",
    "Spill Produk": "Product Showcase",
    "Review Produk": "Product Review",
    "Tanpa Audio": "No Audio",
    "Hanya Narasi / Dialog": "Narration / Dialogue Only",
    "Tidak ada": "None",
    "Natural": "Natural",
    "Softselling": "Soft Sell",
    "Hardselling": "Hard Sell",
    "Dinamic": "Dynamic",
    "Kinetic": "Kinetic",
    "Highlight": "Highlight"
});
const translations = {
    id: {},
    en
};
function translateText(value, language) {
    if (language !== "en") return value;
    const exact = en[value];
    if (exact) return exact;
    // Safe phrase replacements for compound UI strings that contain a known phrase.
    let result = value;
    const replacements = Object.entries(en).filter(([k])=>k.length >= 8).sort((a, b)=>b[0].length - a[0].length);
    for (const [from, to] of replacements){
        if (result.includes(from)) result = result.split(from).join(to);
    }
    return result;
}
const originals = new WeakMap();
function translateDocument(language) {
    if (typeof document === "undefined") return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let n;
    while(n = walker.nextNode())nodes.push(n);
    for (const t of nodes){
        const p = t.parentElement;
        if (!p || [
            "SCRIPT",
            "STYLE",
            "NOSCRIPT",
            "TEXTAREA"
        ].includes(p.tagName)) continue;
        const raw = t.nodeValue || "";
        const trimmed = raw.trim();
        if (!trimmed) continue;
        if (language === "en") {
            const next = translateText(trimmed, language);
            if (next !== trimmed) {
                if (!originals.has(t)) originals.set(t, trimmed);
                t.nodeValue = raw.replace(trimmed, next);
            }
        } else if (originals.has(t)) {
            t.nodeValue = raw.replace(trimmed, originals.get(t) || trimmed);
            originals.delete(t);
        }
    }
    document.querySelectorAll("[placeholder],[title],[aria-label]").forEach((el)=>{
        for (const attr of [
            "placeholder",
            "title",
            "aria-label"
        ]){
            const v = el.getAttribute(attr);
            if (!v) continue;
            const key = `data-driacom-original-${attr}`;
            if (!el.hasAttribute(key)) el.setAttribute(key, v);
            const original = el.getAttribute(key) || v;
            el.setAttribute(attr, language === "en" ? translateText(original, language) : original);
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1nnd64z._.js.map