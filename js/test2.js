/*! For license information please see main.f74055d3.js.LICENSE.txt */
!function() {
    var e = {
        998: function(e, t) {
            "use strict";
            t.Z = function(e, t) {
                if (e && t) {
                    var n = Array.isArray(t) ? t : t.split(",")
                      , r = e.name || ""
                      , a = (e.type || "").toLowerCase()
                      , i = a.replace(/\/.*$/, "");
                    return n.some((function(e) {
                        var t = e.trim().toLowerCase();
                        return "." === t.charAt(0) ? r.toLowerCase().endsWith(t) : t.endsWith("/*") ? i === t.replace(/\/.*$/, "") : a === t
                    }
                    ))
                }
                return !0
            }
        },
        694: function(e, t) {
            var n;
            !function() {
                "use strict";
                var r = {}.hasOwnProperty;
                function a() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var i = typeof n;
                            if ("string" === i || "number" === i)
                                e.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var o = a.apply(null, n);
                                    o && e.push(o)
                                }
                            } else if ("object" === i)
                                if (n.toString === Object.prototype.toString)
                                    for (var l in n)
                                        r.call(n, l) && n[l] && e.push(l);
                                else
                                    e.push(n.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (a.default = a,
                e.exports = a) : void 0 === (n = function() {
                    return a
                }
                .apply(t, [])) || (e.exports = n)
            }()
        },
        176: function(e) {
            "use strict";
            e.exports = function(e, t, n, r, a, i, o, l) {
                if (!e) {
                    var u;
                    if (void 0 === t)
                        u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var s = [n, r, a, i, o, l]
                          , c = 0;
                        (u = new Error(t.replace(/%s/g, (function() {
                            return s[c++]
                        }
                        )))).name = "Invariant Violation"
                    }
                    throw u.framesToPop = 1,
                    u
                }
            }
        },
        888: function(e, t, n) {
            "use strict";
            var r = n(47);
            function a() {}
            function i() {}
            i.resetWarningCache = a,
            e.exports = function() {
                function e(e, t, n, a, i, o) {
                    if (o !== r) {
                        var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw l.name = "Invariant Violation",
                        l
                    }
                }
                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: a
                };
                return n.PropTypes = n,
                n
            }
        },
        7: function(e, t, n) {
            e.exports = n(888)()
        },
        47: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        463: function(e, t, n) {
            "use strict";
            var r = n(791)
              , a = n(296);
            function i(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
                    t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var o = new Set
              , l = {};
            function u(e, t) {
                s(e, t),
                s(e + "Capture", t)
            }
            function s(e, t) {
                for (l[e] = t,
                e = 0; e < t.length; e++)
                    o.add(t[e])
            }
            var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement)
              , f = Object.prototype.hasOwnProperty
              , d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
              , p = {}
              , m = {};
            function h(e, t, n, r, a, i, o) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t,
                this.attributeName = r,
                this.attributeNamespace = a,
                this.mustUseProperty = n,
                this.propertyName = e,
                this.type = t,
                this.sanitizeURL = i,
                this.removeEmptyString = o
            }
            var v = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                v[e] = new h(e,0,!1,e,null,!1,!1)
            }
            )),
            [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(e) {
                var t = e[0];
                v[t] = new h(t,1,!1,e[1],null,!1,!1)
            }
            )),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                v[e] = new h(e,2,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                v[e] = new h(e,2,!1,e,null,!1,!1)
            }
            )),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                v[e] = new h(e,3,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                v[e] = new h(e,3,!0,e,null,!1,!1)
            }
            )),
            ["capture", "download"].forEach((function(e) {
                v[e] = new h(e,4,!1,e,null,!1,!1)
            }
            )),
            ["cols", "rows", "size", "span"].forEach((function(e) {
                v[e] = new h(e,6,!1,e,null,!1,!1)
            }
            )),
            ["rowSpan", "start"].forEach((function(e) {
                v[e] = new h(e,5,!1,e.toLowerCase(),null,!1,!1)
            }
            ));
            var g = /[\-:]([a-z])/g;
            function y(e) {
                return e[1].toUpperCase()
            }
            function b(e, t, n, r) {
                var a = v.hasOwnProperty(t) ? v[t] : null;
                (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                    if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                        if (null !== n && 0 === n.type)
                            return !1;
                        switch (typeof t) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                        }
                    }(e, t, n, r))
                        return !0;
                    if (r)
                        return !1;
                    if (null !== n)
                        switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                        }
                    return !1
                }(t, n, a, r) && (n = null),
                r || null === a ? function(e) {
                    return !!f.call(m, e) || !f.call(p, e) && (d.test(e) ? m[e] = !0 : (p[e] = !0,
                    !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName,
                r = a.attributeNamespace,
                null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                var t = e.replace(g, y);
                v[t] = new h(t,1,!1,e,null,!1,!1)
            }
            )),
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                var t = e.replace(g, y);
                v[t] = new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
            }
            )),
            ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                var t = e.replace(g, y);
                v[t] = new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
            }
            )),
            ["tabIndex", "crossOrigin"].forEach((function(e) {
                v[e] = new h(e,1,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            v.xlinkHref = new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
            ["src", "href", "action", "formAction"].forEach((function(e) {
                v[e] = new h(e,1,!1,e.toLowerCase(),null,!0,!0)
            }
            ));
            var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              , x = Symbol.for("react.element")
              , k = Symbol.for("react.portal")
              , S = Symbol.for("react.fragment")
              , E = Symbol.for("react.strict_mode")
              , C = Symbol.for("react.profiler")
              , O = Symbol.for("react.provider")
              , j = Symbol.for("react.context")
              , P = Symbol.for("react.forward_ref")
              , _ = Symbol.for("react.suspense")
              , N = Symbol.for("react.suspense_list")
              , T = Symbol.for("react.memo")
              , z = Symbol.for("react.lazy");
            Symbol.for("react.scope"),
            Symbol.for("react.debug_trace_mode");
            var M = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"),
            Symbol.for("react.cache"),
            Symbol.for("react.tracing_marker");
            var L = Symbol.iterator;
            function D(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = L && e[L] || e["@@iterator"]) ? e : null
            }
            var A, R = Object.assign;
            function F(e) {
                if (void 0 === A)
                    try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        A = t && t[1] || ""
                    }
                return "\n" + A + e
            }
            var I = !1;
            function U(e, t) {
                if (!e || I)
                    return "";
                I = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t)
                        if (t = function() {
                            throw Error()
                        }
                        ,
                        Object.defineProperty(t.prototype, "props", {
                            set: function() {
                                throw Error()
                            }
                        }),
                        "object" === typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(t, [])
                            } catch (s) {
                                var r = s
                            }
                            Reflect.construct(e, [], t)
                        } else {
                            try {
                                t.call()
                            } catch (s) {
                                r = s
                            }
                            e.call(t.prototype)
                        }
                    else {
                        try {
                            throw Error()
                        } catch (s) {
                            r = s
                        }
                        e()
                    }
                } catch (s) {
                    if (s && r && "string" === typeof s.stack) {
                        for (var a = s.stack.split("\n"), i = r.stack.split("\n"), o = a.length - 1, l = i.length - 1; 1 <= o && 0 <= l && a[o] !== i[l]; )
                            l--;
                        for (; 1 <= o && 0 <= l; o--,
                        l--)
                            if (a[o] !== i[l]) {
                                if (1 !== o || 1 !== l)
                                    do {
                                        if (o--,
                                        0 > --l || a[o] !== i[l]) {
                                            var u = "\n" + a[o].replace(" at new ", " at ");
                                            return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                            u
                                        }
                                    } while (1 <= o && 0 <= l);
                                break
                            }
                    }
                } finally {
                    I = !1,
                    Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? F(e) : ""
            }
            function H(e) {
                switch (e.tag) {
                case 5:
                    return F(e.type);
                case 16:
                    return F("Lazy");
                case 13:
                    return F("Suspense");
                case 19:
                    return F("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return e = U(e.type, !1);
                case 11:
                    return e = U(e.type.render, !1);
                case 1:
                    return e = U(e.type, !0);
                default:
                    return ""
                }
            }
            function W(e) {
                if (null == e)
                    return null;
                if ("function" === typeof e)
                    return e.displayName || e.name || null;
                if ("string" === typeof e)
                    return e;
                switch (e) {
                case S:
                    return "Fragment";
                case k:
                    return "Portal";
                case C:
                    return "Profiler";
                case E:
                    return "StrictMode";
                case _:
                    return "Suspense";
                case N:
                    return "SuspenseList"
                }
                if ("object" === typeof e)
                    switch (e.$$typeof) {
                    case j:
                        return (e.displayName || "Context") + ".Consumer";
                    case O:
                        return (e._context.displayName || "Context") + ".Provider";
                    case P:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"),
                        e;
                    case T:
                        return null !== (t = e.displayName || null) ? t : W(e.type) || "Memo";
                    case z:
                        t = e._payload,
                        e = e._init;
                        try {
                            return W(e(t))
                        } catch (n) {}
                    }
                return null
            }
            function B(e) {
                var t = e.type;
                switch (e.tag) {
                case 24:
                    return "Cache";
                case 9:
                    return (t.displayName || "Context") + ".Consumer";
                case 10:
                    return (t._context.displayName || "Context") + ".Provider";
                case 18:
                    return "DehydratedFragment";
                case 11:
                    return e = (e = t.render).displayName || e.name || "",
                    t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                case 7:
                    return "Fragment";
                case 5:
                    return t;
                case 4:
                    return "Portal";
                case 3:
                    return "Root";
                case 6:
                    return "Text";
                case 16:
                    return W(t);
                case 8:
                    return t === E ? "StrictMode" : "Mode";
                case 22:
                    return "Offscreen";
                case 12:
                    return "Profiler";
                case 21:
                    return "Scope";
                case 13:
                    return "Suspense";
                case 19:
                    return "SuspenseList";
                case 25:
                    return "TracingMarker";
                case 1:
                case 0:
                case 17:
                case 2:
                case 14:
                case 15:
                    if ("function" === typeof t)
                        return t.displayName || t.name || null;
                    if ("string" === typeof t)
                        return t
                }
                return null
            }
            function V(e) {
                switch (typeof e) {
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                case "object":
                    return e;
                default:
                    return ""
                }
            }
            function $(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }
            function Y(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var t = $(e) ? "checked" : "value"
                      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
                      , r = "" + e[t];
                    if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                        var a = n.get
                          , i = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function() {
                                return a.call(this)
                            },
                            set: function(e) {
                                r = "" + e,
                                i.call(this, e)
                            }
                        }),
                        Object.defineProperty(e, t, {
                            enumerable: n.enumerable
                        }),
                        {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null,
                                delete e[t]
                            }
                        }
                    }
                }(e))
            }
            function Q(e) {
                if (!e)
                    return !1;
                var t = e._valueTracker;
                if (!t)
                    return !0;
                var n = t.getValue()
                  , r = "";
                return e && (r = $(e) ? e.checked ? "true" : "false" : e.value),
                (e = r) !== n && (t.setValue(e),
                !0)
            }
            function q(e) {
                if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0)))
                    return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }
            function K(e, t) {
                var n = t.checked;
                return R({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }
            function X(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue
                  , r = null != t.checked ? t.checked : t.defaultChecked;
                n = V(null != t.value ? t.value : n),
                e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }
            function G(e, t) {
                null != (t = t.checked) && b(e, "checked", t, !1)
            }
            function Z(e, t) {
                G(e, t);
                var n = V(t.value)
                  , r = t.type;
                if (null != n)
                    "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === r || "reset" === r)
                    return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, V(t.defaultValue)),
                null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }
            function J(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                        return;
                    t = "" + e._wrapperState.initialValue,
                    n || t === e.value || (e.value = t),
                    e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""),
                e.defaultChecked = !!e._wrapperState.initialChecked,
                "" !== n && (e.name = n)
            }
            function ee(e, t, n) {
                "number" === t && q(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }
            var te = Array.isArray;
            function ne(e, t, n, r) {
                if (e = e.options,
                t) {
                    t = {};
                    for (var a = 0; a < n.length; a++)
                        t["$" + n[a]] = !0;
                    for (n = 0; n < e.length; n++)
                        a = t.hasOwnProperty("$" + e[n].value),
                        e[n].selected !== a && (e[n].selected = a),
                        a && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + V(n),
                    t = null,
                    a = 0; a < e.length; a++) {
                        if (e[a].value === n)
                            return e[a].selected = !0,
                            void (r && (e[a].defaultSelected = !0));
                        null !== t || e[a].disabled || (t = e[a])
                    }
                    null !== t && (t.selected = !0)
                }
            }
            function re(e, t) {
                if (null != t.dangerouslySetInnerHTML)
                    throw Error(i(91));
                return R({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }
            function ae(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children,
                    t = t.defaultValue,
                    null != n) {
                        if (null != t)
                            throw Error(i(92));
                        if (te(n)) {
                            if (1 < n.length)
                                throw Error(i(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""),
                    n = t
                }
                e._wrapperState = {
                    initialValue: V(n)
                }
            }
            function ie(e, t) {
                var n = V(t.value)
                  , r = V(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n),
                null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
                null != r && (e.defaultValue = "" + r)
            }
            function oe(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }
            function le(e) {
                switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
                }
            }
            function ue(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }
            var se, ce, fe = (ce = function(e, t) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML"in e)
                    e.innerHTML = t;
                else {
                    for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild; e.firstChild; )
                        e.removeChild(e.firstChild);
                    for (; t.firstChild; )
                        e.appendChild(t.firstChild)
                }
            }
            ,
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                MSApp.execUnsafeLocalFunction((function() {
                    return ce(e, t)
                }
                ))
            }
            : ce);
            function de(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType)
                        return void (n.nodeValue = t)
                }
                e.textContent = t
            }
            var pe = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }
              , me = ["Webkit", "ms", "Moz", "O"];
            function he(e, t, n) {
                return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
            }
            function ve(e, t) {
                for (var n in e = e.style,
                t)
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--")
                          , a = he(n, t[n], r);
                        "float" === n && (n = "cssFloat"),
                        r ? e.setProperty(n, a) : e[n] = a
                    }
            }
            Object.keys(pe).forEach((function(e) {
                me.forEach((function(t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1),
                    pe[t] = pe[e]
                }
                ))
            }
            ));
            var ge = R({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });
            function ye(e, t) {
                if (t) {
                    if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                        throw Error(i(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children)
                            throw Error(i(60));
                        if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html"in t.dangerouslySetInnerHTML))
                            throw Error(i(61))
                    }
                    if (null != t.style && "object" !== typeof t.style)
                        throw Error(i(62))
                }
            }
            function be(e, t) {
                if (-1 === e.indexOf("-"))
                    return "string" === typeof t.is;
                switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0
                }
            }
            var we = null;
            function xe(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
            }
            var ke = null
              , Se = null
              , Ee = null;
            function Ce(e) {
                if (e = ba(e)) {
                    if ("function" !== typeof ke)
                        throw Error(i(280));
                    var t = e.stateNode;
                    t && (t = xa(t),
                    ke(e.stateNode, e.type, t))
                }
            }
            function Oe(e) {
                Se ? Ee ? Ee.push(e) : Ee = [e] : Se = e
            }
            function je() {
                if (Se) {
                    var e = Se
                      , t = Ee;
                    if (Ee = Se = null,
                    Ce(e),
                    t)
                        for (e = 0; e < t.length; e++)
                            Ce(t[e])
                }
            }
            function Pe(e, t) {
                return e(t)
            }
            function _e() {}
            var Ne = !1;
            function Te(e, t, n) {
                if (Ne)
                    return e(t, n);
                Ne = !0;
                try {
                    return Pe(e, t, n)
                } finally {
                    Ne = !1,
                    (null !== Se || null !== Ee) && (_e(),
                    je())
                }
            }
            function ze(e, t) {
                var n = e.stateNode;
                if (null === n)
                    return null;
                var r = xa(n);
                if (null === r)
                    return null;
                n = r[t];
                e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                    e = !r;
                    break e;
                default:
                    e = !1
                }
                if (e)
                    return null;
                if (n && "function" !== typeof n)
                    throw Error(i(231, t, typeof n));
                return n
            }
            var Me = !1;
            if (c)
                try {
                    var Le = {};
                    Object.defineProperty(Le, "passive", {
                        get: function() {
                            Me = !0
                        }
                    }),
                    window.addEventListener("test", Le, Le),
                    window.removeEventListener("test", Le, Le)
                } catch (ce) {
                    Me = !1
                }
            function De(e, t, n, r, a, i, o, l, u) {
                var s = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, s)
                } catch (c) {
                    this.onError(c)
                }
            }
            var Ae = !1
              , Re = null
              , Fe = !1
              , Ie = null
              , Ue = {
                onError: function(e) {
                    Ae = !0,
                    Re = e
                }
            };
            function He(e, t, n, r, a, i, o, l, u) {
                Ae = !1,
                Re = null,
                De.apply(Ue, arguments)
            }
            function We(e) {
                var t = e
                  , n = e;
                if (e.alternate)
                    for (; t.return; )
                        t = t.return;
                else {
                    e = t;
                    do {
                        0 !== (4098 & (t = e).flags) && (n = t.return),
                        e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }
            function Be(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)),
                    null !== t)
                        return t.dehydrated
                }
                return null
            }
            function Ve(e) {
                if (We(e) !== e)
                    throw Error(i(188))
            }
            function $e(e) {
                return null !== (e = function(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = We(e)))
                            throw Error(i(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t; ; ) {
                        var a = n.return;
                        if (null === a)
                            break;
                        var o = a.alternate;
                        if (null === o) {
                            if (null !== (r = a.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (a.child === o.child) {
                            for (o = a.child; o; ) {
                                if (o === n)
                                    return Ve(a),
                                    e;
                                if (o === r)
                                    return Ve(a),
                                    t;
                                o = o.sibling
                            }
                            throw Error(i(188))
                        }
                        if (n.return !== r.return)
                            n = a,
                            r = o;
                        else {
                            for (var l = !1, u = a.child; u; ) {
                                if (u === n) {
                                    l = !0,
                                    n = a,
                                    r = o;
                                    break
                                }
                                if (u === r) {
                                    l = !0,
                                    r = a,
                                    n = o;
                                    break
                                }
                                u = u.sibling
                            }
                            if (!l) {
                                for (u = o.child; u; ) {
                                    if (u === n) {
                                        l = !0,
                                        n = o,
                                        r = a;
                                        break
                                    }
                                    if (u === r) {
                                        l = !0,
                                        r = o,
                                        n = a;
                                        break
                                    }
                                    u = u.sibling
                                }
                                if (!l)
                                    throw Error(i(189))
                            }
                        }
                        if (n.alternate !== r)
                            throw Error(i(190))
                    }
                    if (3 !== n.tag)
                        throw Error(i(188));
                    return n.stateNode.current === n ? e : t
                }(e)) ? Ye(e) : null
            }
            function Ye(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e;
                for (e = e.child; null !== e; ) {
                    var t = Ye(e);
                    if (null !== t)
                        return t;
                    e = e.sibling
                }
                return null
            }
            var Qe = a.unstable_scheduleCallback
              , qe = a.unstable_cancelCallback
              , Ke = a.unstable_shouldYield
              , Xe = a.unstable_requestPaint
              , Ge = a.unstable_now
              , Ze = a.unstable_getCurrentPriorityLevel
              , Je = a.unstable_ImmediatePriority
              , et = a.unstable_UserBlockingPriority
              , tt = a.unstable_NormalPriority
              , nt = a.unstable_LowPriority
              , rt = a.unstable_IdlePriority
              , at = null
              , it = null;
            var ot = Math.clz32 ? Math.clz32 : function(e) {
                return 0 === (e >>>= 0) ? 32 : 31 - (lt(e) / ut | 0) | 0
            }
              , lt = Math.log
              , ut = Math.LN2;
            var st = 64
              , ct = 4194304;
            function ft(e) {
                switch (e & -e) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return 4194240 & e;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return 130023424 & e;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 1073741824;
                default:
                    return e
                }
            }
            function dt(e, t) {
                var n = e.pendingLanes;
                if (0 === n)
                    return 0;
                var r = 0
                  , a = e.suspendedLanes
                  , i = e.pingedLanes
                  , o = 268435455 & n;
                if (0 !== o) {
                    var l = o & ~a;
                    0 !== l ? r = ft(l) : 0 !== (i &= o) && (r = ft(i))
                } else
                    0 !== (o = n & ~a) ? r = ft(o) : 0 !== i && (r = ft(i));
                if (0 === r)
                    return 0;
                if (0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (i = t & -t) || 16 === a && 0 !== (4194240 & i)))
                    return t;
                if (0 !== (4 & r) && (r |= 16 & n),
                0 !== (t = e.entangledLanes))
                    for (e = e.entanglements,
                    t &= r; 0 < t; )
                        a = 1 << (n = 31 - ot(t)),
                        r |= e[n],
                        t &= ~a;
                return r
            }
            function pt(e, t) {
                switch (e) {
                case 1:
                case 2:
                case 4:
                    return t + 250;
                case 8:
                case 16:
                case 32:
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t + 5e3;
                default:
                    return -1
                }
            }
            function mt(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }
            function ht() {
                var e = st;
                return 0 === (4194240 & (st <<= 1)) && (st = 64),
                e
            }
            function vt(e) {
                for (var t = [], n = 0; 31 > n; n++)
                    t.push(e);
                return t
            }
            function gt(e, t, n) {
                e.pendingLanes |= t,
                536870912 !== t && (e.suspendedLanes = 0,
                e.pingedLanes = 0),
                (e = e.eventTimes)[t = 31 - ot(t)] = n
            }
            function yt(e, t) {
                var n = e.entangledLanes |= t;
                for (e = e.entanglements; n; ) {
                    var r = 31 - ot(n)
                      , a = 1 << r;
                    a & t | e[r] & t && (e[r] |= t),
                    n &= ~a
                }
            }
            var bt = 0;
            function wt(e) {
                return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
            }
            var xt, kt, St, Et, Ct, Ot = !1, jt = [], Pt = null, _t = null, Nt = null, Tt = new Map, zt = new Map, Mt = [], Lt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
            function Dt(e, t) {
                switch (e) {
                case "focusin":
                case "focusout":
                    Pt = null;
                    break;
                case "dragenter":
                case "dragleave":
                    _t = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Nt = null;
                    break;
                case "pointerover":
                case "pointerout":
                    Tt.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    zt.delete(t.pointerId)
                }
            }
            function At(e, t, n, r, a, i) {
                return null === e || e.nativeEvent !== i ? (e = {
                    blockedOn: t,
                    domEventName: n,
                    eventSystemFlags: r,
                    nativeEvent: i,
                    targetContainers: [a]
                },
                null !== t && (null !== (t = ba(t)) && kt(t)),
                e) : (e.eventSystemFlags |= r,
                t = e.targetContainers,
                null !== a && -1 === t.indexOf(a) && t.push(a),
                e)
            }
            function Rt(e) {
                var t = ya(e.target);
                if (null !== t) {
                    var n = We(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = Be(n)))
                                return e.blockedOn = t,
                                void Ct(e.priority, (function() {
                                    St(n)
                                }
                                ))
                        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                            return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }
            function Ft(e) {
                if (null !== e.blockedOn)
                    return !1;
                for (var t = e.targetContainers; 0 < t.length; ) {
                    var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n)
                        return null !== (t = ba(n)) && kt(t),
                        e.blockedOn = n,
                        !1;
                    var r = new (n = e.nativeEvent).constructor(n.type,n);
                    we = r,
                    n.target.dispatchEvent(r),
                    we = null,
                    t.shift()
                }
                return !0
            }
            function It(e, t, n) {
                Ft(e) && n.delete(t)
            }
            function Ut() {
                Ot = !1,
                null !== Pt && Ft(Pt) && (Pt = null),
                null !== _t && Ft(_t) && (_t = null),
                null !== Nt && Ft(Nt) && (Nt = null),
                Tt.forEach(It),
                zt.forEach(It)
            }
            function Ht(e, t) {
                e.blockedOn === t && (e.blockedOn = null,
                Ot || (Ot = !0,
                a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)))
            }
            function Wt(e) {
                function t(t) {
                    return Ht(t, e)
                }
                if (0 < jt.length) {
                    Ht(jt[0], e);
                    for (var n = 1; n < jt.length; n++) {
                        var r = jt[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== Pt && Ht(Pt, e),
                null !== _t && Ht(_t, e),
                null !== Nt && Ht(Nt, e),
                Tt.forEach(t),
                zt.forEach(t),
                n = 0; n < Mt.length; n++)
                    (r = Mt[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn; )
                    Rt(n),
                    null === n.blockedOn && Mt.shift()
            }
            var Bt = w.ReactCurrentBatchConfig
              , Vt = !0;
            function $t(e, t, n, r) {
                var a = bt
                  , i = Bt.transition;
                Bt.transition = null;
                try {
                    bt = 1,
                    Qt(e, t, n, r)
                } finally {
                    bt = a,
                    Bt.transition = i
                }
            }
            function Yt(e, t, n, r) {
                var a = bt
                  , i = Bt.transition;
                Bt.transition = null;
                try {
                    bt = 4,
                    Qt(e, t, n, r)
                } finally {
                    bt = a,
                    Bt.transition = i
                }
            }
            function Qt(e, t, n, r) {
                if (Vt) {
                    var a = Kt(e, t, n, r);
                    if (null === a)
                        Vr(e, t, r, qt, n),
                        Dt(e, r);
                    else if (function(e, t, n, r, a) {
                        switch (t) {
                        case "focusin":
                            return Pt = At(Pt, e, t, n, r, a),
                            !0;
                        case "dragenter":
                            return _t = At(_t, e, t, n, r, a),
                            !0;
                        case "mouseover":
                            return Nt = At(Nt, e, t, n, r, a),
                            !0;
                        case "pointerover":
                            var i = a.pointerId;
                            return Tt.set(i, At(Tt.get(i) || null, e, t, n, r, a)),
                            !0;
                        case "gotpointercapture":
                            return i = a.pointerId,
                            zt.set(i, At(zt.get(i) || null, e, t, n, r, a)),
                            !0
                        }
                        return !1
                    }(a, e, t, n, r))
                        r.stopPropagation();
                    else if (Dt(e, r),
                    4 & t && -1 < Lt.indexOf(e)) {
                        for (; null !== a; ) {
                            var i = ba(a);
                            if (null !== i && xt(i),
                            null === (i = Kt(e, t, n, r)) && Vr(e, t, r, qt, n),
                            i === a)
                                break;
                            a = i
                        }
                        null !== a && r.stopPropagation()
                    } else
                        Vr(e, t, r, null, n)
                }
            }
            var qt = null;
            function Kt(e, t, n, r) {
                if (qt = null,
                null !== (e = ya(e = xe(r))))
                    if (null === (t = We(e)))
                        e = null;
                    else if (13 === (n = t.tag)) {
                        if (null !== (e = Be(t)))
                            return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated)
                            return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else
                        t !== e && (e = null);
                return qt = e,
                null
            }
            function Xt(e) {
                switch (e) {
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 1;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "toggle":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 4;
                case "message":
                    switch (Ze()) {
                    case Je:
                        return 1;
                    case et:
                        return 4;
                    case tt:
                    case nt:
                        return 16;
                    case rt:
                        return 536870912;
                    default:
                        return 16
                    }
                default:
                    return 16
                }
            }
            var Gt = null
              , Zt = null
              , Jt = null;
            function en() {
                if (Jt)
                    return Jt;
                var e, t, n = Zt, r = n.length, a = "value"in Gt ? Gt.value : Gt.textContent, i = a.length;
                for (e = 0; e < r && n[e] === a[e]; e++)
                    ;
                var o = r - e;
                for (t = 1; t <= o && n[r - t] === a[i - t]; t++)
                    ;
                return Jt = a.slice(e, 1 < t ? 1 - t : void 0)
            }
            function tn(e) {
                var t = e.keyCode;
                return "charCode"in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t,
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
            }
            function nn() {
                return !0
            }
            function rn() {
                return !1
            }
            function an(e) {
                function t(t, n, r, a, i) {
                    for (var o in this._reactName = t,
                    this._targetInst = r,
                    this.type = n,
                    this.nativeEvent = a,
                    this.target = i,
                    this.currentTarget = null,
                    e)
                        e.hasOwnProperty(o) && (t = e[o],
                        this[o] = t ? t(a) : a[o]);
                    return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn,
                    this.isPropagationStopped = rn,
                    this
                }
                return R(t.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                        this.isDefaultPrevented = nn)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
                        this.isPropagationStopped = nn)
                    },
                    persist: function() {},
                    isPersistent: nn
                }),
                t
            }
            var on, ln, un, sn = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            }, cn = an(sn), fn = R({}, sn, {
                view: 0,
                detail: 0
            }), dn = an(fn), pn = R({}, fn, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: Cn,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return "movementX"in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? (on = e.screenX - un.screenX,
                    ln = e.screenY - un.screenY) : ln = on = 0,
                    un = e),
                    on)
                },
                movementY: function(e) {
                    return "movementY"in e ? e.movementY : ln
                }
            }), mn = an(pn), hn = an(R({}, pn, {
                dataTransfer: 0
            })), vn = an(R({}, fn, {
                relatedTarget: 0
            })), gn = an(R({}, sn, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })), yn = R({}, sn, {
                clipboardData: function(e) {
                    return "clipboardData"in e ? e.clipboardData : window.clipboardData
                }
            }), bn = an(yn), wn = an(R({}, sn, {
                data: 0
            })), xn = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            }, kn = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            }, Sn = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function En(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e]
            }
            function Cn() {
                return En
            }
            var On = R({}, fn, {
                key: function(e) {
                    if (e.key) {
                        var t = xn[e.key] || e.key;
                        if ("Unidentified" !== t)
                            return t
                    }
                    return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kn[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: Cn,
                charCode: function(e) {
                    return "keypress" === e.type ? tn(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            })
              , jn = an(On)
              , Pn = an(R({}, pn, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }))
              , _n = an(R({}, fn, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: Cn
            }))
              , Nn = an(R({}, sn, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }))
              , Tn = R({}, pn, {
                deltaX: function(e) {
                    return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            })
              , zn = an(Tn)
              , Mn = [9, 13, 27, 32]
              , Ln = c && "CompositionEvent"in window
              , Dn = null;
            c && "documentMode"in document && (Dn = document.documentMode);
            var An = c && "TextEvent"in window && !Dn
              , Rn = c && (!Ln || Dn && 8 < Dn && 11 >= Dn)
              , Fn = String.fromCharCode(32)
              , In = !1;
            function Un(e, t) {
                switch (e) {
                case "keyup":
                    return -1 !== Mn.indexOf(t.keyCode);
                case "keydown":
                    return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1
                }
            }
            function Hn(e) {
                return "object" === typeof (e = e.detail) && "data"in e ? e.data : null
            }
            var Wn = !1;
            var Bn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };
            function Vn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Bn[e.type] : "textarea" === t
            }
            function $n(e, t, n, r) {
                Oe(r),
                0 < (t = Yr(t, "onChange")).length && (n = new cn("onChange","change",null,n,r),
                e.push({
                    event: n,
                    listeners: t
                }))
            }
            var Yn = null
              , Qn = null;
            function qn(e) {
                Fr(e, 0)
            }
            function Kn(e) {
                if (Q(wa(e)))
                    return e
            }
            function Xn(e, t) {
                if ("change" === e)
                    return t
            }
            var Gn = !1;
            if (c) {
                var Zn;
                if (c) {
                    var Jn = "oninput"in document;
                    if (!Jn) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"),
                        Jn = "function" === typeof er.oninput
                    }
                    Zn = Jn
                } else
                    Zn = !1;
                Gn = Zn && (!document.documentMode || 9 < document.documentMode)
            }
            function tr() {
                Yn && (Yn.detachEvent("onpropertychange", nr),
                Qn = Yn = null)
            }
            function nr(e) {
                if ("value" === e.propertyName && Kn(Qn)) {
                    var t = [];
                    $n(t, Qn, e, xe(e)),
                    Te(qn, t)
                }
            }
            function rr(e, t, n) {
                "focusin" === e ? (tr(),
                Qn = n,
                (Yn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
            }
            function ar(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                    return Kn(Qn)
            }
            function ir(e, t) {
                if ("click" === e)
                    return Kn(t)
            }
            function or(e, t) {
                if ("input" === e || "change" === e)
                    return Kn(t)
            }
            var lr = "function" === typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            }
            ;
            function ur(e, t) {
                if (lr(e, t))
                    return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t)
                    return !1;
                var n = Object.keys(e)
                  , r = Object.keys(t);
                if (n.length !== r.length)
                    return !1;
                for (r = 0; r < n.length; r++) {
                    var a = n[r];
                    if (!f.call(t, a) || !lr(e[a], t[a]))
                        return !1
                }
                return !0
            }
            function sr(e) {
                for (; e && e.firstChild; )
                    e = e.firstChild;
                return e
            }
            function cr(e, t) {
                var n, r = sr(e);
                for (e = 0; r; ) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length,
                        e <= t && n >= t)
                            return {
                                node: r,
                                offset: t - e
                            };
                        e = n
                    }
                    e: {
                        for (; r; ) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = sr(r)
                }
            }
            function fr(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains"in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }
            function dr() {
                for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
                    try {
                        var n = "string" === typeof t.contentWindow.location.href
                    } catch (r) {
                        n = !1
                    }
                    if (!n)
                        break;
                    t = q((e = t.contentWindow).document)
                }
                return t
            }
            function pr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }
            function mr(e) {
                var t = dr()
                  , n = e.focusedElem
                  , r = e.selectionRange;
                if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
                    if (null !== r && pr(n))
                        if (t = r.start,
                        void 0 === (e = r.end) && (e = t),
                        "selectionStart"in n)
                            n.selectionStart = t,
                            n.selectionEnd = Math.min(e, n.value.length);
                        else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var a = n.textContent.length
                              , i = Math.min(r.start, a);
                            r = void 0 === r.end ? i : Math.min(r.end, a),
                            !e.extend && i > r && (a = r,
                            r = i,
                            i = a),
                            a = cr(n, i);
                            var o = cr(n, r);
                            a && o && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((t = t.createRange()).setStart(a.node, a.offset),
                            e.removeAllRanges(),
                            i > r ? (e.addRange(t),
                            e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                            e.addRange(t)))
                        }
                    for (t = [],
                    e = n; e = e.parentNode; )
                        1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                    for ("function" === typeof n.focus && n.focus(),
                    n = 0; n < t.length; n++)
                        (e = t[n]).element.scrollLeft = e.left,
                        e.element.scrollTop = e.top
                }
            }
            var hr = c && "documentMode"in document && 11 >= document.documentMode
              , vr = null
              , gr = null
              , yr = null
              , br = !1;
            function wr(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                br || null == vr || vr !== q(r) || ("selectionStart"in (r = vr) && pr(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                },
                yr && ur(yr, r) || (yr = r,
                0 < (r = Yr(gr, "onSelect")).length && (t = new cn("onSelect","select",null,t,n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = vr)))
            }
            function xr(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(),
                n["Webkit" + e] = "webkit" + t,
                n["Moz" + e] = "moz" + t,
                n
            }
            var kr = {
                animationend: xr("Animation", "AnimationEnd"),
                animationiteration: xr("Animation", "AnimationIteration"),
                animationstart: xr("Animation", "AnimationStart"),
                transitionend: xr("Transition", "TransitionEnd")
            }
              , Sr = {}
              , Er = {};
            function Cr(e) {
                if (Sr[e])
                    return Sr[e];
                if (!kr[e])
                    return e;
                var t, n = kr[e];
                for (t in n)
                    if (n.hasOwnProperty(t) && t in Er)
                        return Sr[e] = n[t];
                return e
            }
            c && (Er = document.createElement("div").style,
            "AnimationEvent"in window || (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
            "TransitionEvent"in window || delete kr.transitionend.transition);
            var Or = Cr("animationend")
              , jr = Cr("animationiteration")
              , Pr = Cr("animationstart")
              , _r = Cr("transitionend")
              , Nr = new Map
              , Tr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
            function zr(e, t) {
                Nr.set(e, t),
                u(t, [e])
            }
            for (var Mr = 0; Mr < Tr.length; Mr++) {
                var Lr = Tr[Mr];
                zr(Lr.toLowerCase(), "on" + (Lr[0].toUpperCase() + Lr.slice(1)))
            }
            zr(Or, "onAnimationEnd"),
            zr(jr, "onAnimationIteration"),
            zr(Pr, "onAnimationStart"),
            zr("dblclick", "onDoubleClick"),
            zr("focusin", "onFocus"),
            zr("focusout", "onBlur"),
            zr(_r, "onTransitionEnd"),
            s("onMouseEnter", ["mouseout", "mouseover"]),
            s("onMouseLeave", ["mouseout", "mouseover"]),
            s("onPointerEnter", ["pointerout", "pointerover"]),
            s("onPointerLeave", ["pointerout", "pointerover"]),
            u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
            u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
            u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
            u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
            u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
            u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
              , Ar = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
            function Rr(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = n,
                function(e, t, n, r, a, o, l, u, s) {
                    if (He.apply(this, arguments),
                    Ae) {
                        if (!Ae)
                            throw Error(i(198));
                        var c = Re;
                        Ae = !1,
                        Re = null,
                        Fe || (Fe = !0,
                        Ie = c)
                    }
                }(r, t, void 0, e),
                e.currentTarget = null
            }
            function Fr(e, t) {
                t = 0 !== (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n]
                      , a = r.event;
                    r = r.listeners;
                    e: {
                        var i = void 0;
                        if (t)
                            for (var o = r.length - 1; 0 <= o; o--) {
                                var l = r[o]
                                  , u = l.instance
                                  , s = l.currentTarget;
                                if (l = l.listener,
                                u !== i && a.isPropagationStopped())
                                    break e;
                                Rr(a, l, s),
                                i = u
                            }
                        else
                            for (o = 0; o < r.length; o++) {
                                if (u = (l = r[o]).instance,
                                s = l.currentTarget,
                                l = l.listener,
                                u !== i && a.isPropagationStopped())
                                    break e;
                                Rr(a, l, s),
                                i = u
                            }
                    }
                }
                if (Fe)
                    throw e = Ie,
                    Fe = !1,
                    Ie = null,
                    e
            }
            function Ir(e, t) {
                var n = t[ha];
                void 0 === n && (n = t[ha] = new Set);
                var r = e + "__bubble";
                n.has(r) || (Br(t, e, 2, !1),
                n.add(r))
            }
            function Ur(e, t, n) {
                var r = 0;
                t && (r |= 4),
                Br(n, e, r, t)
            }
            var Hr = "_reactListening" + Math.random().toString(36).slice(2);
            function Wr(e) {
                if (!e[Hr]) {
                    e[Hr] = !0,
                    o.forEach((function(t) {
                        "selectionchange" !== t && (Ar.has(t) || Ur(t, !1, e),
                        Ur(t, !0, e))
                    }
                    ));
                    var t = 9 === e.nodeType ? e : e.ownerDocument;
                    null === t || t[Hr] || (t[Hr] = !0,
                    Ur("selectionchange", !1, t))
                }
            }
            function Br(e, t, n, r) {
                switch (Xt(t)) {
                case 1:
                    var a = $t;
                    break;
                case 4:
                    a = Yt;
                    break;
                default:
                    a = Qt
                }
                n = a.bind(null, t, n, e),
                a = void 0,
                !Me || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0),
                r ? void 0 !== a ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: a
                }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                    passive: a
                }) : e.addEventListener(t, n, !1)
            }
            function Vr(e, t, n, r, a) {
                var i = r;
                if (0 === (1 & t) && 0 === (2 & t) && null !== r)
                    e: for (; ; ) {
                        if (null === r)
                            return;
                        var o = r.tag;
                        if (3 === o || 4 === o) {
                            var l = r.stateNode.containerInfo;
                            if (l === a || 8 === l.nodeType && l.parentNode === a)
                                break;
                            if (4 === o)
                                for (o = r.return; null !== o; ) {
                                    var u = o.tag;
                                    if ((3 === u || 4 === u) && ((u = o.stateNode.containerInfo) === a || 8 === u.nodeType && u.parentNode === a))
                                        return;
                                    o = o.return
                                }
                            for (; null !== l; ) {
                                if (null === (o = ya(l)))
                                    return;
                                if (5 === (u = o.tag) || 6 === u) {
                                    r = i = o;
                                    continue e
                                }
                                l = l.parentNode
                            }
                        }
                        r = r.return
                    }
                Te((function() {
                    var r = i
                      , a = xe(n)
                      , o = [];
                    e: {
                        var l = Nr.get(e);
                        if (void 0 !== l) {
                            var u = cn
                              , s = e;
                            switch (e) {
                            case "keypress":
                                if (0 === tn(n))
                                    break e;
                            case "keydown":
                            case "keyup":
                                u = jn;
                                break;
                            case "focusin":
                                s = "focus",
                                u = vn;
                                break;
                            case "focusout":
                                s = "blur",
                                u = vn;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                u = vn;
                                break;
                            case "click":
                                if (2 === n.button)
                                    break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                u = mn;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                u = hn;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                u = _n;
                                break;
                            case Or:
                            case jr:
                            case Pr:
                                u = gn;
                                break;
                            case _r:
                                u = Nn;
                                break;
                            case "scroll":
                                u = dn;
                                break;
                            case "wheel":
                                u = zn;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                u = bn;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                u = Pn
                            }
                            var c = 0 !== (4 & t)
                              , f = !c && "scroll" === e
                              , d = c ? null !== l ? l + "Capture" : null : l;
                            c = [];
                            for (var p, m = r; null !== m; ) {
                                var h = (p = m).stateNode;
                                if (5 === p.tag && null !== h && (p = h,
                                null !== d && (null != (h = ze(m, d)) && c.push($r(m, h, p)))),
                                f)
                                    break;
                                m = m.return
                            }
                            0 < c.length && (l = new u(l,s,null,n,a),
                            o.push({
                                event: l,
                                listeners: c
                            }))
                        }
                    }
                    if (0 === (7 & t)) {
                        if (u = "mouseout" === e || "pointerout" === e,
                        (!(l = "mouseover" === e || "pointerover" === e) || n === we || !(s = n.relatedTarget || n.fromElement) || !ya(s) && !s[ma]) && (u || l) && (l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window,
                        u ? (u = r,
                        null !== (s = (s = n.relatedTarget || n.toElement) ? ya(s) : null) && (s !== (f = We(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null,
                        s = r),
                        u !== s)) {
                            if (c = mn,
                            h = "onMouseLeave",
                            d = "onMouseEnter",
                            m = "mouse",
                            "pointerout" !== e && "pointerover" !== e || (c = Pn,
                            h = "onPointerLeave",
                            d = "onPointerEnter",
                            m = "pointer"),
                            f = null == u ? l : wa(u),
                            p = null == s ? l : wa(s),
                            (l = new c(h,m + "leave",u,n,a)).target = f,
                            l.relatedTarget = p,
                            h = null,
                            ya(a) === r && ((c = new c(d,m + "enter",s,n,a)).target = p,
                            c.relatedTarget = f,
                            h = c),
                            f = h,
                            u && s)
                                e: {
                                    for (d = s,
                                    m = 0,
                                    p = c = u; p; p = Qr(p))
                                        m++;
                                    for (p = 0,
                                    h = d; h; h = Qr(h))
                                        p++;
                                    for (; 0 < m - p; )
                                        c = Qr(c),
                                        m--;
                                    for (; 0 < p - m; )
                                        d = Qr(d),
                                        p--;
                                    for (; m--; ) {
                                        if (c === d || null !== d && c === d.alternate)
                                            break e;
                                        c = Qr(c),
                                        d = Qr(d)
                                    }
                                    c = null
                                }
                            else
                                c = null;
                            null !== u && qr(o, l, u, c, !1),
                            null !== s && null !== f && qr(o, f, s, c, !0)
                        }
                        if ("select" === (u = (l = r ? wa(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === u && "file" === l.type)
                            var v = Xn;
                        else if (Vn(l))
                            if (Gn)
                                v = or;
                            else {
                                v = ar;
                                var g = rr
                            }
                        else
                            (u = l.nodeName) && "input" === u.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (v = ir);
                        switch (v && (v = v(e, r)) ? $n(o, v, n, a) : (g && g(e, l, r),
                        "focusout" === e && (g = l._wrapperState) && g.controlled && "number" === l.type && ee(l, "number", l.value)),
                        g = r ? wa(r) : window,
                        e) {
                        case "focusin":
                            (Vn(g) || "true" === g.contentEditable) && (vr = g,
                            gr = r,
                            yr = null);
                            break;
                        case "focusout":
                            yr = gr = vr = null;
                            break;
                        case "mousedown":
                            br = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            br = !1,
                            wr(o, n, a);
                            break;
                        case "selectionchange":
                            if (hr)
                                break;
                        case "keydown":
                        case "keyup":
                            wr(o, n, a)
                        }
                        var y;
                        if (Ln)
                            e: {
                                switch (e) {
                                case "compositionstart":
                                    var b = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    b = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    b = "onCompositionUpdate";
                                    break e
                                }
                                b = void 0
                            }
                        else
                            Wn ? Un(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                        b && (Rn && "ko" !== n.locale && (Wn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Wn && (y = en()) : (Zt = "value"in (Gt = a) ? Gt.value : Gt.textContent,
                        Wn = !0)),
                        0 < (g = Yr(r, b)).length && (b = new wn(b,e,null,n,a),
                        o.push({
                            event: b,
                            listeners: g
                        }),
                        y ? b.data = y : null !== (y = Hn(n)) && (b.data = y))),
                        (y = An ? function(e, t) {
                            switch (e) {
                            case "compositionend":
                                return Hn(t);
                            case "keypress":
                                return 32 !== t.which ? null : (In = !0,
                                Fn);
                            case "textInput":
                                return (e = t.data) === Fn && In ? null : e;
                            default:
                                return null
                            }
                        }(e, n) : function(e, t) {
                            if (Wn)
                                return "compositionend" === e || !Ln && Un(e, t) ? (e = en(),
                                Jt = Zt = Gt = null,
                                Wn = !1,
                                e) : null;
                            switch (e) {
                            case "paste":
                            default:
                                return null;
                            case "keypress":
                                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                    if (t.char && 1 < t.char.length)
                                        return t.char;
                                    if (t.which)
                                        return String.fromCharCode(t.which)
                                }
                                return null;
                            case "compositionend":
                                return Rn && "ko" !== t.locale ? null : t.data
                            }
                        }(e, n)) && (0 < (r = Yr(r, "onBeforeInput")).length && (a = new wn("onBeforeInput","beforeinput",null,n,a),
                        o.push({
                            event: a,
                            listeners: r
                        }),
                        a.data = y))
                    }
                    Fr(o, t)
                }
                ))
            }
            function $r(e, t, n) {
                return {
                    instance: e,
                    listener: t,
                    currentTarget: n
                }
            }
            function Yr(e, t) {
                for (var n = t + "Capture", r = []; null !== e; ) {
                    var a = e
                      , i = a.stateNode;
                    5 === a.tag && null !== i && (a = i,
                    null != (i = ze(e, n)) && r.unshift($r(e, i, a)),
                    null != (i = ze(e, t)) && r.push($r(e, i, a))),
                    e = e.return
                }
                return r
            }
            function Qr(e) {
                if (null === e)
                    return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }
            function qr(e, t, n, r, a) {
                for (var i = t._reactName, o = []; null !== n && n !== r; ) {
                    var l = n
                      , u = l.alternate
                      , s = l.stateNode;
                    if (null !== u && u === r)
                        break;
                    5 === l.tag && null !== s && (l = s,
                    a ? null != (u = ze(n, i)) && o.unshift($r(n, u, l)) : a || null != (u = ze(n, i)) && o.push($r(n, u, l))),
                    n = n.return
                }
                0 !== o.length && e.push({
                    event: t,
                    listeners: o
                })
            }
            var Kr = /\r\n?/g
              , Xr = /\u0000|\uFFFD/g;
            function Gr(e) {
                return ("string" === typeof e ? e : "" + e).replace(Kr, "\n").replace(Xr, "")
            }
            function Zr(e, t, n) {
                if (t = Gr(t),
                Gr(e) !== t && n)
                    throw Error(i(425))
            }
            function Jr() {}
            var ea = null
              , ta = null;
            function na(e, t) {
                return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var ra = "function" === typeof setTimeout ? setTimeout : void 0
              , aa = "function" === typeof clearTimeout ? clearTimeout : void 0
              , ia = "function" === typeof Promise ? Promise : void 0
              , oa = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof ia ? function(e) {
                return ia.resolve(null).then(e).catch(la)
            }
            : ra;
            function la(e) {
                setTimeout((function() {
                    throw e
                }
                ))
            }
            function ua(e, t) {
                var n = t
                  , r = 0;
                do {
                    var a = n.nextSibling;
                    if (e.removeChild(n),
                    a && 8 === a.nodeType)
                        if ("/$" === (n = a.data)) {
                            if (0 === r)
                                return e.removeChild(a),
                                void Wt(t);
                            r--
                        } else
                            "$" !== n && "$?" !== n && "$!" !== n || r++;
                    n = a
                } while (n);
                Wt(t)
            }
            function sa(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t)
                        break;
                    if (8 === t) {
                        if ("$" === (t = e.data) || "$!" === t || "$?" === t)
                            break;
                        if ("/$" === t)
                            return null
                    }
                }
                return e
            }
            function ca(e) {
                e = e.previousSibling;
                for (var t = 0; e; ) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t)
                                return e;
                            t--
                        } else
                            "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var fa = Math.random().toString(36).slice(2)
              , da = "__reactFiber$" + fa
              , pa = "__reactProps$" + fa
              , ma = "__reactContainer$" + fa
              , ha = "__reactEvents$" + fa
              , va = "__reactListeners$" + fa
              , ga = "__reactHandles$" + fa;
            function ya(e) {
                var t = e[da];
                if (t)
                    return t;
                for (var n = e.parentNode; n; ) {
                    if (t = n[ma] || n[da]) {
                        if (n = t.alternate,
                        null !== t.child || null !== n && null !== n.child)
                            for (e = ca(e); null !== e; ) {
                                if (n = e[da])
                                    return n;
                                e = ca(e)
                            }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }
            function ba(e) {
                return !(e = e[da] || e[ma]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }
            function wa(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e.stateNode;
                throw Error(i(33))
            }
            function xa(e) {
                return e[pa] || null
            }
            var ka = []
              , Sa = -1;
            function Ea(e) {
                return {
                    current: e
                }
            }
            function Ca(e) {
                0 > Sa || (e.current = ka[Sa],
                ka[Sa] = null,
                Sa--)
            }
            function Oa(e, t) {
                Sa++,
                ka[Sa] = e.current,
                e.current = t
            }
            var ja = {}
              , Pa = Ea(ja)
              , _a = Ea(!1)
              , Na = ja;
            function Ta(e, t) {
                var n = e.type.contextTypes;
                if (!n)
                    return ja;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
                    return r.__reactInternalMemoizedMaskedChildContext;
                var a, i = {};
                for (a in n)
                    i[a] = t[a];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t,
                e.__reactInternalMemoizedMaskedChildContext = i),
                i
            }
            function za(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e
            }
            function Ma() {
                Ca(_a),
                Ca(Pa)
            }
            function La(e, t, n) {
                if (Pa.current !== ja)
                    throw Error(i(168));
                Oa(Pa, t),
                Oa(_a, n)
            }
            function Da(e, t, n) {
                var r = e.stateNode;
                if (t = t.childContextTypes,
                "function" !== typeof r.getChildContext)
                    return n;
                for (var a in r = r.getChildContext())
                    if (!(a in t))
                        throw Error(i(108, B(e) || "Unknown", a));
                return R({}, n, r)
            }
            function Aa(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ja,
                Na = Pa.current,
                Oa(Pa, e),
                Oa(_a, _a.current),
                !0
            }
            function Ra(e, t, n) {
                var r = e.stateNode;
                if (!r)
                    throw Error(i(169));
                n ? (e = Da(e, t, Na),
                r.__reactInternalMemoizedMergedChildContext = e,
                Ca(_a),
                Ca(Pa),
                Oa(Pa, e)) : Ca(_a),
                Oa(_a, n)
            }
            var Fa = null
              , Ia = !1
              , Ua = !1;
            function Ha(e) {
                null === Fa ? Fa = [e] : Fa.push(e)
            }
            function Wa() {
                if (!Ua && null !== Fa) {
                    Ua = !0;
                    var e = 0
                      , t = bt;
                    try {
                        var n = Fa;
                        for (bt = 1; e < n.length; e++) {
                            var r = n[e];
                            do {
                                r = r(!0)
                            } while (null !== r)
                        }
                        Fa = null,
                        Ia = !1
                    } catch (a) {
                        throw null !== Fa && (Fa = Fa.slice(e + 1)),
                        Qe(Je, Wa),
                        a
                    } finally {
                        bt = t,
                        Ua = !1
                    }
                }
                return null
            }
            var Ba = w.ReactCurrentBatchConfig;
            function Va(e, t) {
                if (e && e.defaultProps) {
                    for (var n in t = R({}, t),
                    e = e.defaultProps)
                        void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                return t
            }
            var $a = Ea(null)
              , Ya = null
              , Qa = null
              , qa = null;
            function Ka() {
                qa = Qa = Ya = null
            }
            function Xa(e) {
                var t = $a.current;
                Ca($a),
                e._currentValue = t
            }
            function Ga(e, t, n) {
                for (; null !== e; ) {
                    var r = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t,
                    null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
                    e === n)
                        break;
                    e = e.return
                }
            }
            function Za(e, t) {
                Ya = e,
                qa = Qa = null,
                null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (xl = !0),
                e.firstContext = null)
            }
            function Ja(e) {
                var t = e._currentValue;
                if (qa !== e)
                    if (e = {
                        context: e,
                        memoizedValue: t,
                        next: null
                    },
                    null === Qa) {
                        if (null === Ya)
                            throw Error(i(308));
                        Qa = e,
                        Ya.dependencies = {
                            lanes: 0,
                            firstContext: e
                        }
                    } else
                        Qa = Qa.next = e;
                return t
            }
            var ei = null
              , ti = !1;
            function ni(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        interleaved: null,
                        lanes: 0
                    },
                    effects: null
                }
            }
            function ri(e, t) {
                e = e.updateQueue,
                t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }
            function ai(e, t) {
                return {
                    eventTime: e,
                    lane: t,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }
            function ii(e, t) {
                var n = e.updateQueue;
                null !== n && (n = n.shared,
                ts(e) ? (null === (e = n.interleaved) ? (t.next = t,
                null === ei ? ei = [n] : ei.push(n)) : (t.next = e.next,
                e.next = t),
                n.interleaved = t) : (null === (e = n.pending) ? t.next = t : (t.next = e.next,
                e.next = t),
                n.pending = t))
            }
            function oi(e, t, n) {
                if (null !== (t = t.updateQueue) && (t = t.shared,
                0 !== (4194240 & n))) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes,
                    t.lanes = n,
                    yt(e, n)
                }
            }
            function li(e, t) {
                var n = e.updateQueue
                  , r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var a = null
                      , i = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var o = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === i ? a = i = o : i = i.next = o,
                            n = n.next
                        } while (null !== n);
                        null === i ? a = i = t : i = i.next = t
                    } else
                        a = i = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: a,
                        lastBaseUpdate: i,
                        shared: r.shared,
                        effects: r.effects
                    },
                    void (e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t,
                n.lastBaseUpdate = t
            }
            function ui(e, t, n, r) {
                var a = e.updateQueue;
                ti = !1;
                var i = a.firstBaseUpdate
                  , o = a.lastBaseUpdate
                  , l = a.shared.pending;
                if (null !== l) {
                    a.shared.pending = null;
                    var u = l
                      , s = u.next;
                    u.next = null,
                    null === o ? i = s : o.next = s,
                    o = u;
                    var c = e.alternate;
                    null !== c && ((l = (c = c.updateQueue).lastBaseUpdate) !== o && (null === l ? c.firstBaseUpdate = s : l.next = s,
                    c.lastBaseUpdate = u))
                }
                if (null !== i) {
                    var f = a.baseState;
                    for (o = 0,
                    c = s = u = null,
                    l = i; ; ) {
                        var d = l.lane
                          , p = l.eventTime;
                        if ((r & d) === d) {
                            null !== c && (c = c.next = {
                                eventTime: p,
                                lane: 0,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            });
                            e: {
                                var m = e
                                  , h = l;
                                switch (d = t,
                                p = n,
                                h.tag) {
                                case 1:
                                    if ("function" === typeof (m = h.payload)) {
                                        f = m.call(p, f, d);
                                        break e
                                    }
                                    f = m;
                                    break e;
                                case 3:
                                    m.flags = -65537 & m.flags | 128;
                                case 0:
                                    if (null === (d = "function" === typeof (m = h.payload) ? m.call(p, f, d) : m) || void 0 === d)
                                        break e;
                                    f = R({}, f, d);
                                    break e;
                                case 2:
                                    ti = !0
                                }
                            }
                            null !== l.callback && 0 !== l.lane && (e.flags |= 64,
                            null === (d = a.effects) ? a.effects = [l] : d.push(l))
                        } else
                            p = {
                                eventTime: p,
                                lane: d,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            },
                            null === c ? (s = c = p,
                            u = f) : c = c.next = p,
                            o |= d;
                        if (null === (l = l.next)) {
                            if (null === (l = a.shared.pending))
                                break;
                            l = (d = l).next,
                            d.next = null,
                            a.lastBaseUpdate = d,
                            a.shared.pending = null
                        }
                    }
                    if (null === c && (u = f),
                    a.baseState = u,
                    a.firstBaseUpdate = s,
                    a.lastBaseUpdate = c,
                    null !== (t = a.shared.interleaved)) {
                        a = t;
                        do {
                            o |= a.lane,
                            a = a.next
                        } while (a !== t)
                    } else
                        null === i && (a.shared.lanes = 0);
                    Mu |= o,
                    e.lanes = o,
                    e.memoizedState = f
                }
            }
            function si(e, t, n) {
                if (e = t.effects,
                t.effects = null,
                null !== e)
                    for (t = 0; t < e.length; t++) {
                        var r = e[t]
                          , a = r.callback;
                        if (null !== a) {
                            if (r.callback = null,
                            r = n,
                            "function" !== typeof a)
                                throw Error(i(191, a));
                            a.call(r)
                        }
                    }
            }
            var ci = (new r.Component).refs;
            function fi(e, t, n, r) {
                n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : R({}, t, n),
                e.memoizedState = n,
                0 === e.lanes && (e.updateQueue.baseState = n)
            }
            var di = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && We(e) === e
                },
                enqueueSetState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = Gu()
                      , a = Zu(e)
                      , i = ai(r, a);
                    i.payload = t,
                    void 0 !== n && null !== n && (i.callback = n),
                    ii(e, i),
                    null !== (t = Ju(e, a, r)) && oi(t, e, a)
                },
                enqueueReplaceState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = Gu()
                      , a = Zu(e)
                      , i = ai(r, a);
                    i.tag = 1,
                    i.payload = t,
                    void 0 !== n && null !== n && (i.callback = n),
                    ii(e, i),
                    null !== (t = Ju(e, a, r)) && oi(t, e, a)
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternals;
                    var n = Gu()
                      , r = Zu(e)
                      , a = ai(n, r);
                    a.tag = 2,
                    void 0 !== t && null !== t && (a.callback = t),
                    ii(e, a),
                    null !== (t = Ju(e, r, n)) && oi(t, e, r)
                }
            };
            function pi(e, t, n, r, a, i, o) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, o) : !t.prototype || !t.prototype.isPureReactComponent || (!ur(n, r) || !ur(a, i))
            }
            function mi(e, t, n) {
                var r = !1
                  , a = ja
                  , i = t.contextType;
                return "object" === typeof i && null !== i ? i = Ja(i) : (a = za(t) ? Na : Pa.current,
                i = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Ta(e, a) : ja),
                t = new t(n,i),
                e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null,
                t.updater = di,
                e.stateNode = t,
                t._reactInternals = e,
                r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a,
                e.__reactInternalMemoizedMaskedChildContext = i),
                t
            }
            function hi(e, t, n, r) {
                e = t.state,
                "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
                "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && di.enqueueReplaceState(t, t.state, null)
            }
            function vi(e, t, n, r) {
                var a = e.stateNode;
                a.props = n,
                a.state = e.memoizedState,
                a.refs = ci,
                ni(e);
                var i = t.contextType;
                "object" === typeof i && null !== i ? a.context = Ja(i) : (i = za(t) ? Na : Pa.current,
                a.context = Ta(e, i)),
                a.state = e.memoizedState,
                "function" === typeof (i = t.getDerivedStateFromProps) && (fi(e, t, i, n),
                a.state = e.memoizedState),
                "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state,
                "function" === typeof a.componentWillMount && a.componentWillMount(),
                "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
                t !== a.state && di.enqueueReplaceState(a, a.state, null),
                ui(e, n, a, r),
                a.state = e.memoizedState),
                "function" === typeof a.componentDidMount && (e.flags |= 4194308)
            }
            var gi = []
              , yi = 0
              , bi = null
              , wi = 0
              , xi = []
              , ki = 0
              , Si = null
              , Ei = 1
              , Ci = "";
            function Oi(e, t) {
                gi[yi++] = wi,
                gi[yi++] = bi,
                bi = e,
                wi = t
            }
            function ji(e, t, n) {
                xi[ki++] = Ei,
                xi[ki++] = Ci,
                xi[ki++] = Si,
                Si = e;
                var r = Ei;
                e = Ci;
                var a = 32 - ot(r) - 1;
                r &= ~(1 << a),
                n += 1;
                var i = 32 - ot(t) + a;
                if (30 < i) {
                    var o = a - a % 5;
                    i = (r & (1 << o) - 1).toString(32),
                    r >>= o,
                    a -= o,
                    Ei = 1 << 32 - ot(t) + a | n << a | r,
                    Ci = i + e
                } else
                    Ei = 1 << i | n << a | r,
                    Ci = e
            }
            function Pi(e) {
                null !== e.return && (Oi(e, 1),
                ji(e, 1, 0))
            }
            function _i(e) {
                for (; e === bi; )
                    bi = gi[--yi],
                    gi[yi] = null,
                    wi = gi[--yi],
                    gi[yi] = null;
                for (; e === Si; )
                    Si = xi[--ki],
                    xi[ki] = null,
                    Ci = xi[--ki],
                    xi[ki] = null,
                    Ei = xi[--ki],
                    xi[ki] = null
            }
            var Ni = null
              , Ti = null
              , zi = !1
              , Mi = null;
            function Li(e, t) {
                var n = Ns(5, null, null, 0);
                n.elementType = "DELETED",
                n.stateNode = t,
                n.return = e,
                null === (t = e.deletions) ? (e.deletions = [n],
                e.flags |= 16) : t.push(n)
            }
            function Di(e, t) {
                switch (e.tag) {
                case 5:
                    var n = e.type;
                    return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t,
                    Ni = e,
                    Ti = sa(t.firstChild),
                    !0);
                case 6:
                    return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t,
                    Ni = e,
                    Ti = null,
                    !0);
                case 13:
                    return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Si ? {
                        id: Ei,
                        overflow: Ci
                    } : null,
                    e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    },
                    (n = Ns(18, null, null, 0)).stateNode = t,
                    n.return = e,
                    e.child = n,
                    Ni = e,
                    Ti = null,
                    !0);
                default:
                    return !1
                }
            }
            function Ai(e) {
                return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
            }
            function Ri(e) {
                if (zi) {
                    var t = Ti;
                    if (t) {
                        var n = t;
                        if (!Di(e, t)) {
                            if (Ai(e))
                                throw Error(i(418));
                            t = sa(n.nextSibling);
                            var r = Ni;
                            t && Di(e, t) ? Li(r, n) : (e.flags = -4097 & e.flags | 2,
                            zi = !1,
                            Ni = e)
                        }
                    } else {
                        if (Ai(e))
                            throw Error(i(418));
                        e.flags = -4097 & e.flags | 2,
                        zi = !1,
                        Ni = e
                    }
                }
            }
            function Fi(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
                    e = e.return;
                Ni = e
            }
            function Ii(e) {
                if (e !== Ni)
                    return !1;
                if (!zi)
                    return Fi(e),
                    zi = !0,
                    !1;
                var t;
                if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)),
                t && (t = Ti)) {
                    if (Ai(e)) {
                        for (e = Ti; e; )
                            e = sa(e.nextSibling);
                        throw Error(i(418))
                    }
                    for (; t; )
                        Li(e, t),
                        t = sa(t.nextSibling)
                }
                if (Fi(e),
                13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                        throw Error(i(317));
                    e: {
                        for (e = e.nextSibling,
                        t = 0; e; ) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        Ti = sa(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else
                                    "$" !== n && "$!" !== n && "$?" !== n || t++
                            }
                            e = e.nextSibling
                        }
                        Ti = null
                    }
                } else
                    Ti = Ni ? sa(e.stateNode.nextSibling) : null;
                return !0
            }
            function Ui() {
                Ti = Ni = null,
                zi = !1
            }
            function Hi(e) {
                null === Mi ? Mi = [e] : Mi.push(e)
            }
            function Wi(e, t, n) {
                if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag)
                                throw Error(i(309));
                            var r = n.stateNode
                        }
                        if (!r)
                            throw Error(i(147, e));
                        var a = r
                          , o = "" + e;
                        return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function(e) {
                            var t = a.refs;
                            t === ci && (t = a.refs = {}),
                            null === e ? delete t[o] : t[o] = e
                        }
                        ,
                        t._stringRef = o,
                        t)
                    }
                    if ("string" !== typeof e)
                        throw Error(i(284));
                    if (!n._owner)
                        throw Error(i(290, e))
                }
                return e
            }
            function Bi(e, t) {
                throw e = Object.prototype.toString.call(t),
                Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }
            function Vi(e) {
                return (0,
                e._init)(e._payload)
            }
            function $i(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.deletions;
                        null === r ? (t.deletions = [n],
                        t.flags |= 16) : r.push(n)
                    }
                }
                function n(n, r) {
                    if (!e)
                        return null;
                    for (; null !== r; )
                        t(n, r),
                        r = r.sibling;
                    return null
                }
                function r(e, t) {
                    for (e = new Map; null !== t; )
                        null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                        t = t.sibling;
                    return e
                }
                function a(e, t) {
                    return (e = zs(e, t)).index = 0,
                    e.sibling = null,
                    e
                }
                function o(t, n, r) {
                    return t.index = r,
                    e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2,
                    n) : r : (t.flags |= 2,
                    n) : (t.flags |= 1048576,
                    n)
                }
                function l(t) {
                    return e && null === t.alternate && (t.flags |= 2),
                    t
                }
                function u(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = As(n, e.mode, r)).return = e,
                    t) : ((t = a(t, n)).return = e,
                    t)
                }
                function s(e, t, n, r) {
                    var i = n.type;
                    return i === S ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === i || "object" === typeof i && null !== i && i.$$typeof === z && Vi(i) === t.type) ? ((r = a(t, n.props)).ref = Wi(e, t, n),
                    r.return = e,
                    r) : ((r = Ms(n.type, n.key, n.props, null, e.mode, r)).ref = Wi(e, t, n),
                    r.return = e,
                    r)
                }
                function c(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Rs(n, e.mode, r)).return = e,
                    t) : ((t = a(t, n.children || [])).return = e,
                    t)
                }
                function f(e, t, n, r, i) {
                    return null === t || 7 !== t.tag ? ((t = Ls(n, e.mode, r, i)).return = e,
                    t) : ((t = a(t, n)).return = e,
                    t)
                }
                function d(e, t, n) {
                    if ("string" === typeof t && "" !== t || "number" === typeof t)
                        return (t = As("" + t, e.mode, n)).return = e,
                        t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                        case x:
                            return (n = Ms(t.type, t.key, t.props, null, e.mode, n)).ref = Wi(e, null, t),
                            n.return = e,
                            n;
                        case k:
                            return (t = Rs(t, e.mode, n)).return = e,
                            t;
                        case z:
                            return d(e, (0,
                            t._init)(t._payload), n)
                        }
                        if (te(t) || D(t))
                            return (t = Ls(t, e.mode, n, null)).return = e,
                            t;
                        Bi(e, t)
                    }
                    return null
                }
                function p(e, t, n, r) {
                    var a = null !== t ? t.key : null;
                    if ("string" === typeof n && "" !== n || "number" === typeof n)
                        return null !== a ? null : u(e, t, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                        case x:
                            return n.key === a ? s(e, t, n, r) : null;
                        case k:
                            return n.key === a ? c(e, t, n, r) : null;
                        case z:
                            return p(e, t, (a = n._init)(n._payload), r)
                        }
                        if (te(n) || D(n))
                            return null !== a ? null : f(e, t, n, r, null);
                        Bi(e, n)
                    }
                    return null
                }
                function m(e, t, n, r, a) {
                    if ("string" === typeof r && "" !== r || "number" === typeof r)
                        return u(t, e = e.get(n) || null, "" + r, a);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                        case x:
                            return s(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                        case k:
                            return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                        case z:
                            return m(e, t, n, (0,
                            r._init)(r._payload), a)
                        }
                        if (te(r) || D(r))
                            return f(t, e = e.get(n) || null, r, a, null);
                        Bi(t, r)
                    }
                    return null
                }
                function h(a, i, l, u) {
                    for (var s = null, c = null, f = i, h = i = 0, v = null; null !== f && h < l.length; h++) {
                        f.index > h ? (v = f,
                        f = null) : v = f.sibling;
                        var g = p(a, f, l[h], u);
                        if (null === g) {
                            null === f && (f = v);
                            break
                        }
                        e && f && null === g.alternate && t(a, f),
                        i = o(g, i, h),
                        null === c ? s = g : c.sibling = g,
                        c = g,
                        f = v
                    }
                    if (h === l.length)
                        return n(a, f),
                        zi && Oi(a, h),
                        s;
                    if (null === f) {
                        for (; h < l.length; h++)
                            null !== (f = d(a, l[h], u)) && (i = o(f, i, h),
                            null === c ? s = f : c.sibling = f,
                            c = f);
                        return zi && Oi(a, h),
                        s
                    }
                    for (f = r(a, f); h < l.length; h++)
                        null !== (v = m(f, a, h, l[h], u)) && (e && null !== v.alternate && f.delete(null === v.key ? h : v.key),
                        i = o(v, i, h),
                        null === c ? s = v : c.sibling = v,
                        c = v);
                    return e && f.forEach((function(e) {
                        return t(a, e)
                    }
                    )),
                    zi && Oi(a, h),
                    s
                }
                function v(a, l, u, s) {
                    var c = D(u);
                    if ("function" !== typeof c)
                        throw Error(i(150));
                    if (null == (u = c.call(u)))
                        throw Error(i(151));
                    for (var f = c = null, h = l, v = l = 0, g = null, y = u.next(); null !== h && !y.done; v++,
                    y = u.next()) {
                        h.index > v ? (g = h,
                        h = null) : g = h.sibling;
                        var b = p(a, h, y.value, s);
                        if (null === b) {
                            null === h && (h = g);
                            break
                        }
                        e && h && null === b.alternate && t(a, h),
                        l = o(b, l, v),
                        null === f ? c = b : f.sibling = b,
                        f = b,
                        h = g
                    }
                    if (y.done)
                        return n(a, h),
                        zi && Oi(a, v),
                        c;
                    if (null === h) {
                        for (; !y.done; v++,
                        y = u.next())
                            null !== (y = d(a, y.value, s)) && (l = o(y, l, v),
                            null === f ? c = y : f.sibling = y,
                            f = y);
                        return zi && Oi(a, v),
                        c
                    }
                    for (h = r(a, h); !y.done; v++,
                    y = u.next())
                        null !== (y = m(h, a, v, y.value, s)) && (e && null !== y.alternate && h.delete(null === y.key ? v : y.key),
                        l = o(y, l, v),
                        null === f ? c = y : f.sibling = y,
                        f = y);
                    return e && h.forEach((function(e) {
                        return t(a, e)
                    }
                    )),
                    zi && Oi(a, v),
                    c
                }
                return function e(r, i, o, u) {
                    if ("object" === typeof o && null !== o && o.type === S && null === o.key && (o = o.props.children),
                    "object" === typeof o && null !== o) {
                        switch (o.$$typeof) {
                        case x:
                            e: {
                                for (var s = o.key, c = i; null !== c; ) {
                                    if (c.key === s) {
                                        if ((s = o.type) === S) {
                                            if (7 === c.tag) {
                                                n(r, c.sibling),
                                                (i = a(c, o.props.children)).return = r,
                                                r = i;
                                                break e
                                            }
                                        } else if (c.elementType === s || "object" === typeof s && null !== s && s.$$typeof === z && Vi(s) === c.type) {
                                            n(r, c.sibling),
                                            (i = a(c, o.props)).ref = Wi(r, c, o),
                                            i.return = r,
                                            r = i;
                                            break e
                                        }
                                        n(r, c);
                                        break
                                    }
                                    t(r, c),
                                    c = c.sibling
                                }
                                o.type === S ? ((i = Ls(o.props.children, r.mode, u, o.key)).return = r,
                                r = i) : ((u = Ms(o.type, o.key, o.props, null, r.mode, u)).ref = Wi(r, i, o),
                                u.return = r,
                                r = u)
                            }
                            return l(r);
                        case k:
                            e: {
                                for (c = o.key; null !== i; ) {
                                    if (i.key === c) {
                                        if (4 === i.tag && i.stateNode.containerInfo === o.containerInfo && i.stateNode.implementation === o.implementation) {
                                            n(r, i.sibling),
                                            (i = a(i, o.children || [])).return = r,
                                            r = i;
                                            break e
                                        }
                                        n(r, i);
                                        break
                                    }
                                    t(r, i),
                                    i = i.sibling
                                }
                                (i = Rs(o, r.mode, u)).return = r,
                                r = i
                            }
                            return l(r);
                        case z:
                            return e(r, i, (c = o._init)(o._payload), u)
                        }
                        if (te(o))
                            return h(r, i, o, u);
                        if (D(o))
                            return v(r, i, o, u);
                        Bi(r, o)
                    }
                    return "string" === typeof o && "" !== o || "number" === typeof o ? (o = "" + o,
                    null !== i && 6 === i.tag ? (n(r, i.sibling),
                    (i = a(i, o)).return = r,
                    r = i) : (n(r, i),
                    (i = As(o, r.mode, u)).return = r,
                    r = i),
                    l(r)) : n(r, i)
                }
            }
            var Yi = $i(!0)
              , Qi = $i(!1)
              , qi = {}
              , Ki = Ea(qi)
              , Xi = Ea(qi)
              , Gi = Ea(qi);
            function Zi(e) {
                if (e === qi)
                    throw Error(i(174));
                return e
            }
            function Ji(e, t) {
                switch (Oa(Gi, t),
                Oa(Xi, e),
                Oa(Ki, qi),
                e = t.nodeType) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
                    break;
                default:
                    t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                Ca(Ki),
                Oa(Ki, t)
            }
            function eo() {
                Ca(Ki),
                Ca(Xi),
                Ca(Gi)
            }
            function to(e) {
                Zi(Gi.current);
                var t = Zi(Ki.current)
                  , n = ue(t, e.type);
                t !== n && (Oa(Xi, e),
                Oa(Ki, n))
            }
            function no(e) {
                Xi.current === e && (Ca(Ki),
                Ca(Xi))
            }
            var ro = Ea(0);
            function ao(e) {
                for (var t = e; null !== t; ) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                            return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (128 & t.flags))
                            return t
                    } else if (null !== t.child) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e)
                            return null;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
                return null
            }
            var io = [];
            function oo() {
                for (var e = 0; e < io.length; e++)
                    io[e]._workInProgressVersionPrimary = null;
                io.length = 0
            }
            var lo = w.ReactCurrentDispatcher
              , uo = w.ReactCurrentBatchConfig
              , so = 0
              , co = null
              , fo = null
              , po = null
              , mo = !1
              , ho = !1
              , vo = 0
              , go = 0;
            function yo() {
                throw Error(i(321))
            }
            function bo(e, t) {
                if (null === t)
                    return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!lr(e[n], t[n]))
                        return !1;
                return !0
            }
            function wo(e, t, n, r, a, o) {
                if (so = o,
                co = t,
                t.memoizedState = null,
                t.updateQueue = null,
                t.lanes = 0,
                lo.current = null === e || null === e.memoizedState ? rl : al,
                e = n(r, a),
                ho) {
                    o = 0;
                    do {
                        if (ho = !1,
                        vo = 0,
                        25 <= o)
                            throw Error(i(301));
                        o += 1,
                        po = fo = null,
                        t.updateQueue = null,
                        lo.current = il,
                        e = n(r, a)
                    } while (ho)
                }
                if (lo.current = nl,
                t = null !== fo && null !== fo.next,
                so = 0,
                po = fo = co = null,
                mo = !1,
                t)
                    throw Error(i(300));
                return e
            }
            function xo() {
                var e = 0 !== vo;
                return vo = 0,
                e
            }
            function ko() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === po ? co.memoizedState = po = e : po = po.next = e,
                po
            }
            function So() {
                if (null === fo) {
                    var e = co.alternate;
                    e = null !== e ? e.memoizedState : null
                } else
                    e = fo.next;
                var t = null === po ? co.memoizedState : po.next;
                if (null !== t)
                    po = t,
                    fo = e;
                else {
                    if (null === e)
                        throw Error(i(310));
                    e = {
                        memoizedState: (fo = e).memoizedState,
                        baseState: fo.baseState,
                        baseQueue: fo.baseQueue,
                        queue: fo.queue,
                        next: null
                    },
                    null === po ? co.memoizedState = po = e : po = po.next = e
                }
                return po
            }
            function Eo(e, t) {
                return "function" === typeof t ? t(e) : t
            }
            function Co(e) {
                var t = So()
                  , n = t.queue;
                if (null === n)
                    throw Error(i(311));
                n.lastRenderedReducer = e;
                var r = fo
                  , a = r.baseQueue
                  , o = n.pending;
                if (null !== o) {
                    if (null !== a) {
                        var l = a.next;
                        a.next = o.next,
                        o.next = l
                    }
                    r.baseQueue = a = o,
                    n.pending = null
                }
                if (null !== a) {
                    o = a.next,
                    r = r.baseState;
                    var u = l = null
                      , s = null
                      , c = o;
                    do {
                        var f = c.lane;
                        if ((so & f) === f)
                            null !== s && (s = s.next = {
                                lane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }),
                            r = c.hasEagerState ? c.eagerState : e(r, c.action);
                        else {
                            var d = {
                                lane: f,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            };
                            null === s ? (u = s = d,
                            l = r) : s = s.next = d,
                            co.lanes |= f,
                            Mu |= f
                        }
                        c = c.next
                    } while (null !== c && c !== o);
                    null === s ? l = r : s.next = u,
                    lr(r, t.memoizedState) || (xl = !0),
                    t.memoizedState = r,
                    t.baseState = l,
                    t.baseQueue = s,
                    n.lastRenderedState = r
                }
                if (null !== (e = n.interleaved)) {
                    a = e;
                    do {
                        o = a.lane,
                        co.lanes |= o,
                        Mu |= o,
                        a = a.next
                    } while (a !== e)
                } else
                    null === a && (n.lanes = 0);
                return [t.memoizedState, n.dispatch]
            }
            function Oo(e) {
                var t = So()
                  , n = t.queue;
                if (null === n)
                    throw Error(i(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch
                  , a = n.pending
                  , o = t.memoizedState;
                if (null !== a) {
                    n.pending = null;
                    var l = a = a.next;
                    do {
                        o = e(o, l.action),
                        l = l.next
                    } while (l !== a);
                    lr(o, t.memoizedState) || (xl = !0),
                    t.memoizedState = o,
                    null === t.baseQueue && (t.baseState = o),
                    n.lastRenderedState = o
                }
                return [o, r]
            }
            function jo() {}
            function Po(e, t) {
                var n = co
                  , r = So()
                  , a = t()
                  , o = !lr(r.memoizedState, a);
                if (o && (r.memoizedState = a,
                xl = !0),
                r = r.queue,
                Io(To.bind(null, n, r, e), [e]),
                r.getSnapshot !== t || o || null !== po && 1 & po.memoizedState.tag) {
                    if (n.flags |= 2048,
                    Lo(9, No.bind(null, n, r, a, t), void 0, null),
                    null === Ou)
                        throw Error(i(349));
                    0 !== (30 & so) || _o(n, t, a)
                }
                return a
            }
            function _o(e, t, n) {
                e.flags |= 16384,
                e = {
                    getSnapshot: t,
                    value: n
                },
                null === (t = co.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                },
                co.updateQueue = t,
                t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
            }
            function No(e, t, n, r) {
                t.value = n,
                t.getSnapshot = r,
                zo(t) && Ju(e, 1, -1)
            }
            function To(e, t, n) {
                return n((function() {
                    zo(t) && Ju(e, 1, -1)
                }
                ))
            }
            function zo(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !lr(e, n)
                } catch (r) {
                    return !0
                }
            }
            function Mo(e) {
                var t = ko();
                return "function" === typeof e && (e = e()),
                t.memoizedState = t.baseState = e,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Eo,
                    lastRenderedState: e
                },
                t.queue = e,
                e = e.dispatch = Go.bind(null, co, e),
                [t.memoizedState, e]
            }
            function Lo(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                },
                null === (t = co.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                },
                co.updateQueue = t,
                t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next,
                n.next = e,
                e.next = r,
                t.lastEffect = e),
                e
            }
            function Do() {
                return So().memoizedState
            }
            function Ao(e, t, n, r) {
                var a = ko();
                co.flags |= e,
                a.memoizedState = Lo(1 | t, n, void 0, void 0 === r ? null : r)
            }
            function Ro(e, t, n, r) {
                var a = So();
                r = void 0 === r ? null : r;
                var i = void 0;
                if (null !== fo) {
                    var o = fo.memoizedState;
                    if (i = o.destroy,
                    null !== r && bo(r, o.deps))
                        return void (a.memoizedState = Lo(t, n, i, r))
                }
                co.flags |= e,
                a.memoizedState = Lo(1 | t, n, i, r)
            }
            function Fo(e, t) {
                return Ao(8390656, 8, e, t)
            }
            function Io(e, t) {
                return Ro(2048, 8, e, t)
            }
            function Uo(e, t) {
                return Ro(4, 2, e, t)
            }
            function Ho(e, t) {
                return Ro(4, 4, e, t)
            }
            function Wo(e, t) {
                return "function" === typeof t ? (e = e(),
                t(e),
                function() {
                    t(null)
                }
                ) : null !== t && void 0 !== t ? (e = e(),
                t.current = e,
                function() {
                    t.current = null
                }
                ) : void 0
            }
            function Bo(e, t, n) {
                return n = null !== n && void 0 !== n ? n.concat([e]) : null,
                Ro(4, 4, Wo.bind(null, t, e), n)
            }
            function Vo() {}
            function $o(e, t) {
                var n = So();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && bo(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
                e)
            }
            function Yo(e, t) {
                var n = So();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && bo(t, r[1]) ? r[0] : (e = e(),
                n.memoizedState = [e, t],
                e)
            }
            function Qo(e, t, n) {
                return 0 === (21 & so) ? (e.baseState && (e.baseState = !1,
                xl = !0),
                e.memoizedState = n) : (lr(n, t) || (n = ht(),
                co.lanes |= n,
                Mu |= n,
                e.baseState = !0),
                t)
            }
            function qo(e, t) {
                var n = bt;
                bt = 0 !== n && 4 > n ? n : 4,
                e(!0);
                var r = uo.transition;
                uo.transition = {};
                try {
                    e(!1),
                    t()
                } finally {
                    bt = n,
                    uo.transition = r
                }
            }
            function Ko() {
                return So().memoizedState
            }
            function Xo(e, t, n) {
                var r = Zu(e);
                n = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                },
                Zo(e) ? Jo(t, n) : (el(e, t, n),
                null !== (e = Ju(e, r, n = Gu())) && tl(e, t, r))
            }
            function Go(e, t, n) {
                var r = Zu(e)
                  , a = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (Zo(e))
                    Jo(t, a);
                else {
                    el(e, t, a);
                    var i = e.alternate;
                    if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer))
                        try {
                            var o = t.lastRenderedState
                              , l = i(o, n);
                            if (a.hasEagerState = !0,
                            a.eagerState = l,
                            lr(l, o))
                                return
                        } catch (u) {}
                    null !== (e = Ju(e, r, n = Gu())) && tl(e, t, r)
                }
            }
            function Zo(e) {
                var t = e.alternate;
                return e === co || null !== t && t === co
            }
            function Jo(e, t) {
                ho = mo = !0;
                var n = e.pending;
                null === n ? t.next = t : (t.next = n.next,
                n.next = t),
                e.pending = t
            }
            function el(e, t, n) {
                ts(e) ? (null === (e = t.interleaved) ? (n.next = n,
                null === ei ? ei = [t] : ei.push(t)) : (n.next = e.next,
                e.next = n),
                t.interleaved = n) : (null === (e = t.pending) ? n.next = n : (n.next = e.next,
                e.next = n),
                t.pending = n)
            }
            function tl(e, t, n) {
                if (0 !== (4194240 & n)) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes,
                    t.lanes = n,
                    yt(e, n)
                }
            }
            var nl = {
                readContext: Ja,
                useCallback: yo,
                useContext: yo,
                useEffect: yo,
                useImperativeHandle: yo,
                useInsertionEffect: yo,
                useLayoutEffect: yo,
                useMemo: yo,
                useReducer: yo,
                useRef: yo,
                useState: yo,
                useDebugValue: yo,
                useDeferredValue: yo,
                useTransition: yo,
                useMutableSource: yo,
                useSyncExternalStore: yo,
                useId: yo,
                unstable_isNewReconciler: !1
            }
              , rl = {
                readContext: Ja,
                useCallback: function(e, t) {
                    return ko().memoizedState = [e, void 0 === t ? null : t],
                    e
                },
                useContext: Ja,
                useEffect: Fo,
                useImperativeHandle: function(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null,
                    Ao(4194308, 4, Wo.bind(null, t, e), n)
                },
                useLayoutEffect: function(e, t) {
                    return Ao(4194308, 4, e, t)
                },
                useInsertionEffect: function(e, t) {
                    return Ao(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var n = ko();
                    return t = void 0 === t ? null : t,
                    e = e(),
                    n.memoizedState = [e, t],
                    e
                },
                useReducer: function(e, t, n) {
                    var r = ko();
                    return t = void 0 !== n ? n(t) : t,
                    r.memoizedState = r.baseState = t,
                    e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    },
                    r.queue = e,
                    e = e.dispatch = Xo.bind(null, co, e),
                    [r.memoizedState, e]
                },
                useRef: function(e) {
                    return e = {
                        current: e
                    },
                    ko().memoizedState = e
                },
                useState: Mo,
                useDebugValue: Vo,
                useDeferredValue: function(e) {
                    return ko().memoizedState = e
                },
                useTransition: function() {
                    var e = Mo(!1)
                      , t = e[0];
                    return e = qo.bind(null, e[1]),
                    ko().memoizedState = e,
                    [t, e]
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(e, t, n) {
                    var r = co
                      , a = ko();
                    if (zi) {
                        if (void 0 === n)
                            throw Error(i(407));
                        n = n()
                    } else {
                        if (n = t(),
                        null === Ou)
                            throw Error(i(349));
                        0 !== (30 & so) || _o(r, t, n)
                    }
                    a.memoizedState = n;
                    var o = {
                        value: n,
                        getSnapshot: t
                    };
                    return a.queue = o,
                    Fo(To.bind(null, r, o, e), [e]),
                    r.flags |= 2048,
                    Lo(9, No.bind(null, r, o, n, t), void 0, null),
                    n
                },
                useId: function() {
                    var e = ko()
                      , t = Ou.identifierPrefix;
                    if (zi) {
                        var n = Ci;
                        t = ":" + t + "R" + (n = (Ei & ~(1 << 32 - ot(Ei) - 1)).toString(32) + n),
                        0 < (n = vo++) && (t += "H" + n.toString(32)),
                        t += ":"
                    } else
                        t = ":" + t + "r" + (n = go++).toString(32) + ":";
                    return e.memoizedState = t
                },
                unstable_isNewReconciler: !1
            }
              , al = {
                readContext: Ja,
                useCallback: $o,
                useContext: Ja,
                useEffect: Io,
                useImperativeHandle: Bo,
                useInsertionEffect: Uo,
                useLayoutEffect: Ho,
                useMemo: Yo,
                useReducer: Co,
                useRef: Do,
                useState: function() {
                    return Co(Eo)
                },
                useDebugValue: Vo,
                useDeferredValue: function(e) {
                    return Qo(So(), fo.memoizedState, e)
                },
                useTransition: function() {
                    return [Co(Eo)[0], So().memoizedState]
                },
                useMutableSource: jo,
                useSyncExternalStore: Po,
                useId: Ko,
                unstable_isNewReconciler: !1
            }
              , il = {
                readContext: Ja,
                useCallback: $o,
                useContext: Ja,
                useEffect: Io,
                useImperativeHandle: Bo,
                useInsertionEffect: Uo,
                useLayoutEffect: Ho,
                useMemo: Yo,
                useReducer: Oo,
                useRef: Do,
                useState: function() {
                    return Oo(Eo)
                },
                useDebugValue: Vo,
                useDeferredValue: function(e) {
                    var t = So();
                    return null === fo ? t.memoizedState = e : Qo(t, fo.memoizedState, e)
                },
                useTransition: function() {
                    return [Oo(Eo)[0], So().memoizedState]
                },
                useMutableSource: jo,
                useSyncExternalStore: Po,
                useId: Ko,
                unstable_isNewReconciler: !1
            };
            function ol(e, t) {
                try {
                    var n = ""
                      , r = t;
                    do {
                        n += H(r),
                        r = r.return
                    } while (r);
                    var a = n
                } catch (i) {
                    a = "\nError generating stack: " + i.message + "\n" + i.stack
                }
                return {
                    value: e,
                    source: t,
                    stack: a
                }
            }
            function ll(e, t) {
                try {
                    console.error(t.value)
                } catch (n) {
                    setTimeout((function() {
                        throw n
                    }
                    ))
                }
            }
            var ul, sl, cl, fl = "function" === typeof WeakMap ? WeakMap : Map;
            function dl(e, t, n) {
                (n = ai(-1, n)).tag = 3,
                n.payload = {
                    element: null
                };
                var r = t.value;
                return n.callback = function() {
                    Hu || (Hu = !0,
                    Wu = r),
                    ll(0, t)
                }
                ,
                n
            }
            function pl(e, t, n) {
                (n = ai(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" === typeof r) {
                    var a = t.value;
                    n.payload = function() {
                        return r(a)
                    }
                    ,
                    n.callback = function() {
                        ll(0, t)
                    }
                }
                var i = e.stateNode;
                return null !== i && "function" === typeof i.componentDidCatch && (n.callback = function() {
                    ll(0, t),
                    "function" !== typeof r && (null === Bu ? Bu = new Set([this]) : Bu.add(this));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: null !== e ? e : ""
                    })
                }
                ),
                n
            }
            function ml(e, t, n) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new fl;
                    var a = new Set;
                    r.set(t, a)
                } else
                    void 0 === (a = r.get(t)) && (a = new Set,
                    r.set(t, a));
                a.has(n) || (a.add(n),
                e = Es.bind(null, e, t, n),
                t.then(e, e))
            }
            function hl(e) {
                do {
                    var t;
                    if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated),
                    t)
                        return e;
                    e = e.return
                } while (null !== e);
                return null
            }
            function vl(e, t, n, r, a) {
                return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128,
                n.flags |= 131072,
                n.flags &= -52805,
                1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = ai(-1, 1)).tag = 2,
                ii(n, t))),
                n.lanes |= 1),
                e) : (e.flags |= 65536,
                e.lanes = a,
                e)
            }
            function gl(e, t) {
                if (!zi)
                    switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t; )
                            null !== t.alternate && (n = t),
                            t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n; )
                            null !== n.alternate && (r = n),
                            n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
            }
            function yl(e) {
                var t = null !== e.alternate && e.alternate.child === e.child
                  , n = 0
                  , r = 0;
                if (t)
                    for (var a = e.child; null !== a; )
                        n |= a.lanes | a.childLanes,
                        r |= 14680064 & a.subtreeFlags,
                        r |= 14680064 & a.flags,
                        a.return = e,
                        a = a.sibling;
                else
                    for (a = e.child; null !== a; )
                        n |= a.lanes | a.childLanes,
                        r |= a.subtreeFlags,
                        r |= a.flags,
                        a.return = e,
                        a = a.sibling;
                return e.subtreeFlags |= r,
                e.childLanes = n,
                t
            }
            function bl(e, t, n) {
                var r = t.pendingProps;
                switch (_i(t),
                t.tag) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return yl(t),
                    null;
                case 1:
                case 17:
                    return za(t.type) && Ma(),
                    yl(t),
                    null;
                case 3:
                    return r = t.stateNode,
                    eo(),
                    Ca(_a),
                    Ca(Pa),
                    oo(),
                    r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                    null !== e && null !== e.child || (Ii(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024,
                    null !== Mi && (is(Mi),
                    Mi = null))),
                    yl(t),
                    null;
                case 5:
                    no(t);
                    var a = Zi(Gi.current);
                    if (n = t.type,
                    null !== e && null != t.stateNode)
                        sl(e, t, n, r),
                        e.ref !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152);
                    else {
                        if (!r) {
                            if (null === t.stateNode)
                                throw Error(i(166));
                            return yl(t),
                            null
                        }
                        if (e = Zi(Ki.current),
                        Ii(t)) {
                            r = t.stateNode,
                            n = t.type;
                            var o = t.memoizedProps;
                            switch (r[da] = t,
                            r[pa] = o,
                            e = 0 !== (1 & t.mode),
                            n) {
                            case "dialog":
                                Ir("cancel", r),
                                Ir("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Ir("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < Dr.length; a++)
                                    Ir(Dr[a], r);
                                break;
                            case "source":
                                Ir("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Ir("error", r),
                                Ir("load", r);
                                break;
                            case "details":
                                Ir("toggle", r);
                                break;
                            case "input":
                                X(r, o),
                                Ir("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!o.multiple
                                },
                                Ir("invalid", r);
                                break;
                            case "textarea":
                                ae(r, o),
                                Ir("invalid", r)
                            }
                            for (var u in ye(n, o),
                            a = null,
                            o)
                                if (o.hasOwnProperty(u)) {
                                    var s = o[u];
                                    "children" === u ? "string" === typeof s ? r.textContent !== s && (!0 !== o.suppressHydrationWarning && Zr(r.textContent, s, e),
                                    a = ["children", s]) : "number" === typeof s && r.textContent !== "" + s && (!0 !== o.suppressHydrationWarning && Zr(r.textContent, s, e),
                                    a = ["children", "" + s]) : l.hasOwnProperty(u) && null != s && "onScroll" === u && Ir("scroll", r)
                                }
                            switch (n) {
                            case "input":
                                Y(r),
                                J(r, o, !0);
                                break;
                            case "textarea":
                                Y(r),
                                oe(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                "function" === typeof o.onClick && (r.onclick = Jr)
                            }
                            r = a,
                            t.updateQueue = r,
                            null !== r && (t.flags |= 4)
                        } else {
                            u = 9 === a.nodeType ? a : a.ownerDocument,
                            "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                            "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = u.createElement(n, {
                                is: r.is
                            }) : (e = u.createElement(n),
                            "select" === n && (u = e,
                            r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n),
                            e[da] = t,
                            e[pa] = r,
                            ul(e, t),
                            t.stateNode = e;
                            e: {
                                switch (u = be(n, r),
                                n) {
                                case "dialog":
                                    Ir("cancel", e),
                                    Ir("close", e),
                                    a = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Ir("load", e),
                                    a = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (a = 0; a < Dr.length; a++)
                                        Ir(Dr[a], e);
                                    a = r;
                                    break;
                                case "source":
                                    Ir("error", e),
                                    a = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Ir("error", e),
                                    Ir("load", e),
                                    a = r;
                                    break;
                                case "details":
                                    Ir("toggle", e),
                                    a = r;
                                    break;
                                case "input":
                                    X(e, r),
                                    a = K(e, r),
                                    Ir("invalid", e);
                                    break;
                                case "option":
                                default:
                                    a = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    },
                                    a = R({}, r, {
                                        value: void 0
                                    }),
                                    Ir("invalid", e);
                                    break;
                                case "textarea":
                                    ae(e, r),
                                    a = re(e, r),
                                    Ir("invalid", e)
                                }
                                for (o in ye(n, a),
                                s = a)
                                    if (s.hasOwnProperty(o)) {
                                        var c = s[o];
                                        "style" === o ? ve(e, c) : "dangerouslySetInnerHTML" === o ? null != (c = c ? c.__html : void 0) && fe(e, c) : "children" === o ? "string" === typeof c ? ("textarea" !== n || "" !== c) && de(e, c) : "number" === typeof c && de(e, "" + c) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (l.hasOwnProperty(o) ? null != c && "onScroll" === o && Ir("scroll", e) : null != c && b(e, o, c, u))
                                    }
                                switch (n) {
                                case "input":
                                    Y(e),
                                    J(e, r, !1);
                                    break;
                                case "textarea":
                                    Y(e),
                                    oe(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + V(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple,
                                    null != (o = r.value) ? ne(e, !!r.multiple, o, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    "function" === typeof a.onClick && (e.onclick = Jr)
                                }
                                switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1
                                }
                            }
                            r && (t.flags |= 4)
                        }
                        null !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152)
                    }
                    return yl(t),
                    null;
                case 6:
                    if (e && null != t.stateNode)
                        cl(0, t, e.memoizedProps, r);
                    else {
                        if ("string" !== typeof r && null === t.stateNode)
                            throw Error(i(166));
                        if (n = Zi(Gi.current),
                        Zi(Ki.current),
                        Ii(t)) {
                            if (r = t.stateNode,
                            n = t.memoizedProps,
                            r[da] = t,
                            (o = r.nodeValue !== n) && null !== (e = Ni))
                                switch (e.tag) {
                                case 3:
                                    Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                                    break;
                                case 5:
                                    !0 !== e.memoizedProps.suppressHydrationWarning && Zr(r.nodeValue, n, 0 !== (1 & e.mode))
                                }
                            o && (t.flags |= 4)
                        } else
                            (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[da] = t,
                            t.stateNode = r
                    }
                    return yl(t),
                    null;
                case 13:
                    if (Ca(ro),
                    r = t.memoizedState,
                    zi && null !== Ti && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) {
                        for (r = Ti; r; )
                            r = sa(r.nextSibling);
                        return Ui(),
                        t.flags |= 98560,
                        t
                    }
                    if (null !== r && null !== r.dehydrated) {
                        if (r = Ii(t),
                        null === e) {
                            if (!r)
                                throw Error(i(318));
                            if (!(r = null !== (r = t.memoizedState) ? r.dehydrated : null))
                                throw Error(i(317));
                            r[da] = t
                        } else
                            Ui(),
                            0 === (128 & t.flags) && (t.memoizedState = null),
                            t.flags |= 4;
                        return yl(t),
                        null
                    }
                    return null !== Mi && (is(Mi),
                    Mi = null),
                    0 !== (128 & t.flags) ? (t.lanes = n,
                    t) : (r = null !== r,
                    n = !1,
                    null === e ? Ii(t) : n = null !== e.memoizedState,
                    r !== n && r && (t.child.flags |= 8192,
                    0 !== (1 & t.mode) && (null === e || 0 !== (1 & ro.current) ? 0 === Tu && (Tu = 3) : ms())),
                    null !== t.updateQueue && (t.flags |= 4),
                    yl(t),
                    null);
                case 4:
                    return eo(),
                    null === e && Wr(t.stateNode.containerInfo),
                    yl(t),
                    null;
                case 10:
                    return Xa(t.type._context),
                    yl(t),
                    null;
                case 19:
                    if (Ca(ro),
                    null === (o = t.memoizedState))
                        return yl(t),
                        null;
                    if (r = 0 !== (128 & t.flags),
                    null === (u = o.rendering))
                        if (r)
                            gl(o, !1);
                        else {
                            if (0 !== Tu || null !== e && 0 !== (128 & e.flags))
                                for (e = t.child; null !== e; ) {
                                    if (null !== (u = ao(e))) {
                                        for (t.flags |= 128,
                                        gl(o, !1),
                                        null !== (r = u.updateQueue) && (t.updateQueue = r,
                                        t.flags |= 4),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child; null !== n; )
                                            e = r,
                                            (o = n).flags &= 14680066,
                                            null === (u = o.alternate) ? (o.childLanes = 0,
                                            o.lanes = e,
                                            o.child = null,
                                            o.subtreeFlags = 0,
                                            o.memoizedProps = null,
                                            o.memoizedState = null,
                                            o.updateQueue = null,
                                            o.dependencies = null,
                                            o.stateNode = null) : (o.childLanes = u.childLanes,
                                            o.lanes = u.lanes,
                                            o.child = u.child,
                                            o.subtreeFlags = 0,
                                            o.deletions = null,
                                            o.memoizedProps = u.memoizedProps,
                                            o.memoizedState = u.memoizedState,
                                            o.updateQueue = u.updateQueue,
                                            o.type = u.type,
                                            e = u.dependencies,
                                            o.dependencies = null === e ? null : {
                                                lanes: e.lanes,
                                                firstContext: e.firstContext
                                            }),
                                            n = n.sibling;
                                        return Oa(ro, 1 & ro.current | 2),
                                        t.child
                                    }
                                    e = e.sibling
                                }
                            null !== o.tail && Ge() > Iu && (t.flags |= 128,
                            r = !0,
                            gl(o, !1),
                            t.lanes = 4194304)
                        }
                    else {
                        if (!r)
                            if (null !== (e = ao(u))) {
                                if (t.flags |= 128,
                                r = !0,
                                null !== (n = e.updateQueue) && (t.updateQueue = n,
                                t.flags |= 4),
                                gl(o, !0),
                                null === o.tail && "hidden" === o.tailMode && !u.alternate && !zi)
                                    return yl(t),
                                    null
                            } else
                                2 * Ge() - o.renderingStartTime > Iu && 1073741824 !== n && (t.flags |= 128,
                                r = !0,
                                gl(o, !1),
                                t.lanes = 4194304);
                        o.isBackwards ? (u.sibling = t.child,
                        t.child = u) : (null !== (n = o.last) ? n.sibling = u : t.child = u,
                        o.last = u)
                    }
                    return null !== o.tail ? (t = o.tail,
                    o.rendering = t,
                    o.tail = t.sibling,
                    o.renderingStartTime = Ge(),
                    t.sibling = null,
                    n = ro.current,
                    Oa(ro, r ? 1 & n | 2 : 1 & n),
                    t) : (yl(t),
                    null);
                case 22:
                case 23:
                    return cs(),
                    r = null !== t.memoizedState,
                    null !== e && null !== e.memoizedState !== r && (t.flags |= 8192),
                    r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & _u) && (yl(t),
                    6 & t.subtreeFlags && (t.flags |= 8192)) : yl(t),
                    null;
                case 24:
                case 25:
                    return null
                }
                throw Error(i(156, t.tag))
            }
            ul = function(e, t) {
                for (var n = t.child; null !== n; ) {
                    if (5 === n.tag || 6 === n.tag)
                        e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === t)
                        break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === t)
                            return;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            }
            ,
            sl = function(e, t, n, r) {
                var a = e.memoizedProps;
                if (a !== r) {
                    e = t.stateNode,
                    Zi(Ki.current);
                    var i, o = null;
                    switch (n) {
                    case "input":
                        a = K(e, a),
                        r = K(e, r),
                        o = [];
                        break;
                    case "select":
                        a = R({}, a, {
                            value: void 0
                        }),
                        r = R({}, r, {
                            value: void 0
                        }),
                        o = [];
                        break;
                    case "textarea":
                        a = re(e, a),
                        r = re(e, r),
                        o = [];
                        break;
                    default:
                        "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Jr)
                    }
                    for (c in ye(n, r),
                    n = null,
                    a)
                        if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                            if ("style" === c) {
                                var u = a[c];
                                for (i in u)
                                    u.hasOwnProperty(i) && (n || (n = {}),
                                    n[i] = "")
                            } else
                                "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
                    for (c in r) {
                        var s = r[c];
                        if (u = null != a ? a[c] : void 0,
                        r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                            if ("style" === c)
                                if (u) {
                                    for (i in u)
                                        !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}),
                                        n[i] = "");
                                    for (i in s)
                                        s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}),
                                        n[i] = s[i])
                                } else
                                    n || (o || (o = []),
                                    o.push(c, n)),
                                    n = s;
                            else
                                "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0,
                                u = u ? u.__html : void 0,
                                null != s && u !== s && (o = o || []).push(c, s)) : "children" === c ? "string" !== typeof s && "number" !== typeof s || (o = o || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != s && "onScroll" === c && Ir("scroll", e),
                                o || u === s || (o = [])) : (o = o || []).push(c, s))
                    }
                    n && (o = o || []).push("style", n);
                    var c = o;
                    (t.updateQueue = c) && (t.flags |= 4)
                }
            }
            ,
            cl = function(e, t, n, r) {
                n !== r && (t.flags |= 4)
            }
            ;
            var wl = w.ReactCurrentOwner
              , xl = !1;
            function kl(e, t, n, r) {
                t.child = null === e ? Qi(t, null, n, r) : Yi(t, e.child, n, r)
            }
            function Sl(e, t, n, r, a) {
                n = n.render;
                var i = t.ref;
                return Za(t, a),
                r = wo(e, t, n, r, i, a),
                n = xo(),
                null === e || xl ? (zi && n && Pi(t),
                t.flags |= 1,
                kl(e, t, r, a),
                t.child) : (t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~a,
                Vl(e, t, a))
            }
            function El(e, t, n, r, a) {
                if (null === e) {
                    var i = n.type;
                    return "function" !== typeof i || Ts(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ms(n.type, null, r, t, t.mode, a)).ref = t.ref,
                    e.return = t,
                    t.child = e) : (t.tag = 15,
                    t.type = i,
                    Cl(e, t, i, r, a))
                }
                if (i = e.child,
                0 === (e.lanes & a)) {
                    var o = i.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : ur)(o, r) && e.ref === t.ref)
                        return Vl(e, t, a)
                }
                return t.flags |= 1,
                (e = zs(i, r)).ref = t.ref,
                e.return = t,
                t.child = e
            }
            function Cl(e, t, n, r, a) {
                if (null !== e) {
                    var i = e.memoizedProps;
                    if (ur(i, r) && e.ref === t.ref) {
                        if (xl = !1,
                        t.pendingProps = r = i,
                        0 === (e.lanes & a))
                            return t.lanes = e.lanes,
                            Vl(e, t, a);
                        0 !== (131072 & e.flags) && (xl = !0)
                    }
                }
                return Pl(e, t, n, r, a)
            }
            function Ol(e, t, n) {
                var r = t.pendingProps
                  , a = r.children
                  , i = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode)
                    if (0 === (1 & t.mode))
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        },
                        Oa(Nu, _u),
                        _u |= n;
                    else {
                        if (0 === (1073741824 & n))
                            return e = null !== i ? i.baseLanes | n : n,
                            t.lanes = t.childLanes = 1073741824,
                            t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            },
                            t.updateQueue = null,
                            Oa(Nu, _u),
                            _u |= e,
                            null;
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        },
                        r = null !== i ? i.baseLanes : n,
                        Oa(Nu, _u),
                        _u |= r
                    }
                else
                    null !== i ? (r = i.baseLanes | n,
                    t.memoizedState = null) : r = n,
                    Oa(Nu, _u),
                    _u |= r;
                return kl(e, t, a, n),
                t.child
            }
            function jl(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512,
                t.flags |= 2097152)
            }
            function Pl(e, t, n, r, a) {
                var i = za(n) ? Na : Pa.current;
                return i = Ta(t, i),
                Za(t, a),
                n = wo(e, t, n, r, i, a),
                r = xo(),
                null === e || xl ? (zi && r && Pi(t),
                t.flags |= 1,
                kl(e, t, n, a),
                t.child) : (t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~a,
                Vl(e, t, a))
            }
            function _l(e, t, n, r, a) {
                if (za(n)) {
                    var i = !0;
                    Aa(t)
                } else
                    i = !1;
                if (Za(t, a),
                null === t.stateNode)
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.flags |= 2),
                    mi(t, n, r),
                    vi(t, n, r, a),
                    r = !0;
                else if (null === e) {
                    var o = t.stateNode
                      , l = t.memoizedProps;
                    o.props = l;
                    var u = o.context
                      , s = n.contextType;
                    "object" === typeof s && null !== s ? s = Ja(s) : s = Ta(t, s = za(n) ? Na : Pa.current);
                    var c = n.getDerivedStateFromProps
                      , f = "function" === typeof c || "function" === typeof o.getSnapshotBeforeUpdate;
                    f || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (l !== r || u !== s) && hi(t, o, r, s),
                    ti = !1;
                    var d = t.memoizedState;
                    o.state = d,
                    ui(t, r, o, a),
                    u = t.memoizedState,
                    l !== r || d !== u || _a.current || ti ? ("function" === typeof c && (fi(t, n, c, r),
                    u = t.memoizedState),
                    (l = ti || pi(t, n, l, r, d, u, s)) ? (f || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || ("function" === typeof o.componentWillMount && o.componentWillMount(),
                    "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                    "function" === typeof o.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof o.componentDidMount && (t.flags |= 4194308),
                    t.memoizedProps = r,
                    t.memoizedState = u),
                    o.props = r,
                    o.state = u,
                    o.context = s,
                    r = l) : ("function" === typeof o.componentDidMount && (t.flags |= 4194308),
                    r = !1)
                } else {
                    o = t.stateNode,
                    ri(e, t),
                    l = t.memoizedProps,
                    s = t.type === t.elementType ? l : Va(t.type, l),
                    o.props = s,
                    f = t.pendingProps,
                    d = o.context,
                    "object" === typeof (u = n.contextType) && null !== u ? u = Ja(u) : u = Ta(t, u = za(n) ? Na : Pa.current);
                    var p = n.getDerivedStateFromProps;
                    (c = "function" === typeof p || "function" === typeof o.getSnapshotBeforeUpdate) || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (l !== f || d !== u) && hi(t, o, r, u),
                    ti = !1,
                    d = t.memoizedState,
                    o.state = d,
                    ui(t, r, o, a);
                    var m = t.memoizedState;
                    l !== f || d !== m || _a.current || ti ? ("function" === typeof p && (fi(t, n, p, r),
                    m = t.memoizedState),
                    (s = ti || pi(t, n, s, r, d, m, u) || !1) ? (c || "function" !== typeof o.UNSAFE_componentWillUpdate && "function" !== typeof o.componentWillUpdate || ("function" === typeof o.componentWillUpdate && o.componentWillUpdate(r, m, u),
                    "function" === typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, m, u)),
                    "function" === typeof o.componentDidUpdate && (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof o.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = m),
                    o.props = r,
                    o.state = m,
                    o.context = u,
                    r = s) : ("function" !== typeof o.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
                    r = !1)
                }
                return Nl(e, t, n, r, i, a)
            }
            function Nl(e, t, n, r, a, i) {
                jl(e, t);
                var o = 0 !== (128 & t.flags);
                if (!r && !o)
                    return a && Ra(t, n, !1),
                    Vl(e, t, i);
                r = t.stateNode,
                wl.current = t;
                var l = o && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1,
                null !== e && o ? (t.child = Yi(t, e.child, null, i),
                t.child = Yi(t, null, l, i)) : kl(e, t, l, i),
                t.memoizedState = r.state,
                a && Ra(t, n, !0),
                t.child
            }
            function Tl(e) {
                var t = e.stateNode;
                t.pendingContext ? La(0, t.pendingContext, t.pendingContext !== t.context) : t.context && La(0, t.context, !1),
                Ji(e, t.containerInfo)
            }
            function zl(e, t, n, r, a) {
                return Ui(),
                Hi(a),
                t.flags |= 256,
                kl(e, t, n, r),
                t.child
            }
            var Ml = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };
            function Ll(e) {
                return {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }
            }
            function Dl(e, t) {
                return {
                    baseLanes: e.baseLanes | t,
                    cachePool: null,
                    transitions: e.transitions
                }
            }
            function Al(e, t, n) {
                var r, a = t.pendingProps, o = ro.current, l = !1, u = 0 !== (128 & t.flags);
                if ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
                r ? (l = !0,
                t.flags &= -129) : null !== e && null === e.memoizedState || (o |= 1),
                Oa(ro, 1 & o),
                null === e)
                    return Ri(t),
                    null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824,
                    null) : (o = a.children,
                    e = a.fallback,
                    l ? (a = t.mode,
                    l = t.child,
                    o = {
                        mode: "hidden",
                        children: o
                    },
                    0 === (1 & a) && null !== l ? (l.childLanes = 0,
                    l.pendingProps = o) : l = Ds(o, a, 0, null),
                    e = Ls(e, a, n, null),
                    l.return = t,
                    e.return = t,
                    l.sibling = e,
                    t.child = l,
                    t.child.memoizedState = Ll(n),
                    t.memoizedState = Ml,
                    e) : Rl(t, o));
                if (null !== (o = e.memoizedState)) {
                    if (null !== (r = o.dehydrated)) {
                        if (u)
                            return 256 & t.flags ? (t.flags &= -257,
                            Ul(e, t, n, Error(i(422)))) : null !== t.memoizedState ? (t.child = e.child,
                            t.flags |= 128,
                            null) : (l = a.fallback,
                            o = t.mode,
                            a = Ds({
                                mode: "visible",
                                children: a.children
                            }, o, 0, null),
                            (l = Ls(l, o, n, null)).flags |= 2,
                            a.return = t,
                            l.return = t,
                            a.sibling = l,
                            t.child = a,
                            0 !== (1 & t.mode) && Yi(t, e.child, null, n),
                            t.child.memoizedState = Ll(n),
                            t.memoizedState = Ml,
                            l);
                        if (0 === (1 & t.mode))
                            t = Ul(e, t, n, null);
                        else if ("$!" === r.data)
                            t = Ul(e, t, n, Error(i(419)));
                        else if (a = 0 !== (n & e.childLanes),
                        xl || a) {
                            if (null !== (a = Ou)) {
                                switch (n & -n) {
                                case 4:
                                    l = 2;
                                    break;
                                case 16:
                                    l = 8;
                                    break;
                                case 64:
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                case 67108864:
                                    l = 32;
                                    break;
                                case 536870912:
                                    l = 268435456;
                                    break;
                                default:
                                    l = 0
                                }
                                0 !== (a = 0 !== (l & (a.suspendedLanes | n)) ? 0 : l) && a !== o.retryLane && (o.retryLane = a,
                                Ju(e, a, -1))
                            }
                            ms(),
                            t = Ul(e, t, n, Error(i(421)))
                        } else
                            "$?" === r.data ? (t.flags |= 128,
                            t.child = e.child,
                            t = Os.bind(null, e),
                            r._reactRetry = t,
                            t = null) : (n = o.treeContext,
                            Ti = sa(r.nextSibling),
                            Ni = t,
                            zi = !0,
                            Mi = null,
                            null !== n && (xi[ki++] = Ei,
                            xi[ki++] = Ci,
                            xi[ki++] = Si,
                            Ei = n.id,
                            Ci = n.overflow,
                            Si = t),
                            (t = Rl(t, t.pendingProps.children)).flags |= 4096);
                        return t
                    }
                    return l ? (a = Il(e, t, a.children, a.fallback, n),
                    l = t.child,
                    o = e.child.memoizedState,
                    l.memoizedState = null === o ? Ll(n) : Dl(o, n),
                    l.childLanes = e.childLanes & ~n,
                    t.memoizedState = Ml,
                    a) : (n = Fl(e, t, a.children, n),
                    t.memoizedState = null,
                    n)
                }
                return l ? (a = Il(e, t, a.children, a.fallback, n),
                l = t.child,
                o = e.child.memoizedState,
                l.memoizedState = null === o ? Ll(n) : Dl(o, n),
                l.childLanes = e.childLanes & ~n,
                t.memoizedState = Ml,
                a) : (n = Fl(e, t, a.children, n),
                t.memoizedState = null,
                n)
            }
            function Rl(e, t) {
                return (t = Ds({
                    mode: "visible",
                    children: t
                }, e.mode, 0, null)).return = e,
                e.child = t
            }
            function Fl(e, t, n, r) {
                var a = e.child;
                return e = a.sibling,
                n = zs(a, {
                    mode: "visible",
                    children: n
                }),
                0 === (1 & t.mode) && (n.lanes = r),
                n.return = t,
                n.sibling = null,
                null !== e && (null === (r = t.deletions) ? (t.deletions = [e],
                t.flags |= 16) : r.push(e)),
                t.child = n
            }
            function Il(e, t, n, r, a) {
                var i = t.mode
                  , o = (e = e.child).sibling
                  , l = {
                    mode: "hidden",
                    children: n
                };
                return 0 === (1 & i) && t.child !== e ? ((n = t.child).childLanes = 0,
                n.pendingProps = l,
                t.deletions = null) : (n = zs(e, l)).subtreeFlags = 14680064 & e.subtreeFlags,
                null !== o ? r = zs(o, r) : (r = Ls(r, i, a, null)).flags |= 2,
                r.return = t,
                n.return = t,
                n.sibling = r,
                t.child = n,
                r
            }
            function Ul(e, t, n, r) {
                return null !== r && Hi(r),
                Yi(t, e.child, null, n),
                (e = Rl(t, t.pendingProps.children)).flags |= 2,
                t.memoizedState = null,
                e
            }
            function Hl(e, t, n) {
                e.lanes |= t;
                var r = e.alternate;
                null !== r && (r.lanes |= t),
                Ga(e.return, t, n)
            }
            function Wl(e, t, n, r, a) {
                var i = e.memoizedState;
                null === i ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: a
                } : (i.isBackwards = t,
                i.rendering = null,
                i.renderingStartTime = 0,
                i.last = r,
                i.tail = n,
                i.tailMode = a)
            }
            function Bl(e, t, n) {
                var r = t.pendingProps
                  , a = r.revealOrder
                  , i = r.tail;
                if (kl(e, t, r.children, n),
                0 !== (2 & (r = ro.current)))
                    r = 1 & r | 2,
                    t.flags |= 128;
                else {
                    if (null !== e && 0 !== (128 & e.flags))
                        e: for (e = t.child; null !== e; ) {
                            if (13 === e.tag)
                                null !== e.memoizedState && Hl(e, n, t);
                            else if (19 === e.tag)
                                Hl(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e,
                                e = e.child;
                                continue
                            }
                            if (e === t)
                                break e;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === t)
                                    break e;
                                e = e.return
                            }
                            e.sibling.return = e.return,
                            e = e.sibling
                        }
                    r &= 1
                }
                if (Oa(ro, r),
                0 === (1 & t.mode))
                    t.memoizedState = null;
                else
                    switch (a) {
                    case "forwards":
                        for (n = t.child,
                        a = null; null !== n; )
                            null !== (e = n.alternate) && null === ao(e) && (a = n),
                            n = n.sibling;
                        null === (n = a) ? (a = t.child,
                        t.child = null) : (a = n.sibling,
                        n.sibling = null),
                        Wl(t, !1, a, n, i);
                        break;
                    case "backwards":
                        for (n = null,
                        a = t.child,
                        t.child = null; null !== a; ) {
                            if (null !== (e = a.alternate) && null === ao(e)) {
                                t.child = a;
                                break
                            }
                            e = a.sibling,
                            a.sibling = n,
                            n = a,
                            a = e
                        }
                        Wl(t, !0, n, null, i);
                        break;
                    case "together":
                        Wl(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null
                    }
                return t.child
            }
            function Vl(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies),
                Mu |= t.lanes,
                0 === (n & t.childLanes))
                    return null;
                if (null !== e && t.child !== e.child)
                    throw Error(i(153));
                if (null !== t.child) {
                    for (n = zs(e = t.child, e.pendingProps),
                    t.child = n,
                    n.return = t; null !== e.sibling; )
                        e = e.sibling,
                        (n = n.sibling = zs(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }
            function $l(e, t) {
                switch (_i(t),
                t.tag) {
                case 1:
                    return za(t.type) && Ma(),
                    65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 3:
                    return eo(),
                    Ca(_a),
                    Ca(Pa),
                    oo(),
                    0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 5:
                    return no(t),
                    null;
                case 13:
                    if (Ca(ro),
                    null !== (e = t.memoizedState) && null !== e.dehydrated) {
                        if (null === t.alternate)
                            throw Error(i(340));
                        Ui()
                    }
                    return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 19:
                    return Ca(ro),
                    null;
                case 4:
                    return eo(),
                    null;
                case 10:
                    return Xa(t.type._context),
                    null;
                case 22:
                case 23:
                    return cs(),
                    null;
                default:
                    return null
                }
            }
            var Yl = !1
              , Ql = !1
              , ql = "function" === typeof WeakSet ? WeakSet : Set
              , Kl = null;
            function Xl(e, t) {
                var n = e.ref;
                if (null !== n)
                    if ("function" === typeof n)
                        try {
                            n(null)
                        } catch (r) {
                            Ss(e, t, r)
                        }
                    else
                        n.current = null
            }
            function Gl(e, t, n) {
                try {
                    n()
                } catch (r) {
                    Ss(e, t, r)
                }
            }
            var Zl = !1;
            function Jl(e, t, n) {
                var r = t.updateQueue;
                if (null !== (r = null !== r ? r.lastEffect : null)) {
                    var a = r = r.next;
                    do {
                        if ((a.tag & e) === e) {
                            var i = a.destroy;
                            a.destroy = void 0,
                            void 0 !== i && Gl(t, n, i)
                        }
                        a = a.next
                    } while (a !== r)
                }
            }
            function eu(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = t = t.next;
                    do {
                        if ((n.tag & e) === e) {
                            var r = n.create;
                            n.destroy = r()
                        }
                        n = n.next
                    } while (n !== t)
                }
            }
            function tu(e) {
                var t = e.ref;
                if (null !== t) {
                    var n = e.stateNode;
                    e.tag,
                    e = n,
                    "function" === typeof t ? t(e) : t.current = e
                }
            }
            function nu(e) {
                var t = e.alternate;
                null !== t && (e.alternate = null,
                nu(t)),
                e.child = null,
                e.deletions = null,
                e.sibling = null,
                5 === e.tag && (null !== (t = e.stateNode) && (delete t[da],
                delete t[pa],
                delete t[ha],
                delete t[va],
                delete t[ga])),
                e.stateNode = null,
                e.return = null,
                e.dependencies = null,
                e.memoizedProps = null,
                e.memoizedState = null,
                e.pendingProps = null,
                e.stateNode = null,
                e.updateQueue = null
            }
            function ru(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }
            function au(e) {
                e: for (; ; ) {
                    for (; null === e.sibling; ) {
                        if (null === e.return || ru(e.return))
                            return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return,
                    e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
                        if (2 & e.flags)
                            continue e;
                        if (null === e.child || 4 === e.tag)
                            continue e;
                        e.child.return = e,
                        e = e.child
                    }
                    if (!(2 & e.flags))
                        return e.stateNode
                }
            }
            function iu(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                    null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Jr));
                else if (4 !== r && null !== (e = e.child))
                    for (iu(e, t, n),
                    e = e.sibling; null !== e; )
                        iu(e, t, n),
                        e = e.sibling
            }
            function ou(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    t ? n.insertBefore(e, t) : n.appendChild(e);
                else if (4 !== r && null !== (e = e.child))
                    for (ou(e, t, n),
                    e = e.sibling; null !== e; )
                        ou(e, t, n),
                        e = e.sibling
            }
            var lu = null
              , uu = !1;
            function su(e, t, n) {
                for (n = n.child; null !== n; )
                    cu(e, t, n),
                    n = n.sibling
            }
            function cu(e, t, n) {
                if (it && "function" === typeof it.onCommitFiberUnmount)
                    try {
                        it.onCommitFiberUnmount(at, n)
                    } catch (l) {}
                switch (n.tag) {
                case 5:
                    Ql || Xl(n, t);
                case 6:
                    var r = lu
                      , a = uu;
                    lu = null,
                    su(e, t, n),
                    uu = a,
                    null !== (lu = r) && (uu ? (e = lu,
                    n = n.stateNode,
                    8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : lu.removeChild(n.stateNode));
                    break;
                case 18:
                    null !== lu && (uu ? (e = lu,
                    n = n.stateNode,
                    8 === e.nodeType ? ua(e.parentNode, n) : 1 === e.nodeType && ua(e, n),
                    Wt(e)) : ua(lu, n.stateNode));
                    break;
                case 4:
                    r = lu,
                    a = uu,
                    lu = n.stateNode.containerInfo,
                    uu = !0,
                    su(e, t, n),
                    lu = r,
                    uu = a;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    if (!Ql && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                        a = r = r.next;
                        do {
                            var i = a
                              , o = i.destroy;
                            i = i.tag,
                            void 0 !== o && (0 !== (2 & i) || 0 !== (4 & i)) && Gl(n, t, o),
                            a = a.next
                        } while (a !== r)
                    }
                    su(e, t, n);
                    break;
                case 1:
                    if (!Ql && (Xl(n, t),
                    "function" === typeof (r = n.stateNode).componentWillUnmount))
                        try {
                            r.props = n.memoizedProps,
                            r.state = n.memoizedState,
                            r.componentWillUnmount()
                        } catch (l) {
                            Ss(n, t, l)
                        }
                    su(e, t, n);
                    break;
                case 21:
                    su(e, t, n);
                    break;
                case 22:
                    1 & n.mode ? (Ql = (r = Ql) || null !== n.memoizedState,
                    su(e, t, n),
                    Ql = r) : su(e, t, n);
                    break;
                default:
                    su(e, t, n)
                }
            }
            function fu(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new ql),
                    t.forEach((function(t) {
                        var r = js.bind(null, e, t);
                        n.has(t) || (n.add(t),
                        t.then(r, r))
                    }
                    ))
                }
            }
            function du(e, t) {
                var n = t.deletions;
                if (null !== n)
                    for (var r = 0; r < n.length; r++) {
                        var a = n[r];
                        try {
                            var o = e
                              , l = t
                              , u = l;
                            e: for (; null !== u; ) {
                                switch (u.tag) {
                                case 5:
                                    lu = u.stateNode,
                                    uu = !1;
                                    break e;
                                case 3:
                                case 4:
                                    lu = u.stateNode.containerInfo,
                                    uu = !0;
                                    break e
                                }
                                u = u.return
                            }
                            if (null === lu)
                                throw Error(i(160));
                            cu(o, l, a),
                            lu = null,
                            uu = !1;
                            var s = a.alternate;
                            null !== s && (s.return = null),
                            a.return = null
                        } catch (c) {
                            Ss(a, t, c)
                        }
                    }
                if (12854 & t.subtreeFlags)
                    for (t = t.child; null !== t; )
                        pu(t, e),
                        t = t.sibling
            }
            function pu(e, t) {
                var n = e.alternate
                  , r = e.flags;
                switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    if (du(t, e),
                    mu(e),
                    4 & r) {
                        try {
                            Jl(3, e, e.return),
                            eu(3, e)
                        } catch (h) {
                            Ss(e, e.return, h)
                        }
                        try {
                            Jl(5, e, e.return)
                        } catch (h) {
                            Ss(e, e.return, h)
                        }
                    }
                    break;
                case 1:
                    du(t, e),
                    mu(e),
                    512 & r && null !== n && Xl(n, n.return);
                    break;
                case 5:
                    if (du(t, e),
                    mu(e),
                    512 & r && null !== n && Xl(n, n.return),
                    32 & e.flags) {
                        var a = e.stateNode;
                        try {
                            de(a, "")
                        } catch (h) {
                            Ss(e, e.return, h)
                        }
                    }
                    if (4 & r && null != (a = e.stateNode)) {
                        var o = e.memoizedProps
                          , l = null !== n ? n.memoizedProps : o
                          , u = e.type
                          , s = e.updateQueue;
                        if (e.updateQueue = null,
                        null !== s)
                            try {
                                "input" === u && "radio" === o.type && null != o.name && G(a, o),
                                be(u, l);
                                var c = be(u, o);
                                for (l = 0; l < s.length; l += 2) {
                                    var f = s[l]
                                      , d = s[l + 1];
                                    "style" === f ? ve(a, d) : "dangerouslySetInnerHTML" === f ? fe(a, d) : "children" === f ? de(a, d) : b(a, f, d, c)
                                }
                                switch (u) {
                                case "input":
                                    Z(a, o);
                                    break;
                                case "textarea":
                                    ie(a, o);
                                    break;
                                case "select":
                                    var p = a._wrapperState.wasMultiple;
                                    a._wrapperState.wasMultiple = !!o.multiple;
                                    var m = o.value;
                                    null != m ? ne(a, !!o.multiple, m, !1) : p !== !!o.multiple && (null != o.defaultValue ? ne(a, !!o.multiple, o.defaultValue, !0) : ne(a, !!o.multiple, o.multiple ? [] : "", !1))
                                }
                                a[pa] = o
                            } catch (h) {
                                Ss(e, e.return, h)
                            }
                    }
                    break;
                case 6:
                    if (du(t, e),
                    mu(e),
                    4 & r) {
                        if (null === e.stateNode)
                            throw Error(i(162));
                        c = e.stateNode,
                        f = e.memoizedProps;
                        try {
                            c.nodeValue = f
                        } catch (h) {
                            Ss(e, e.return, h)
                        }
                    }
                    break;
                case 3:
                    if (du(t, e),
                    mu(e),
                    4 & r && null !== n && n.memoizedState.isDehydrated)
                        try {
                            Wt(t.containerInfo)
                        } catch (h) {
                            Ss(e, e.return, h)
                        }
                    break;
                case 4:
                default:
                    du(t, e),
                    mu(e);
                    break;
                case 13:
                    du(t, e),
                    mu(e),
                    8192 & (c = e.child).flags && null !== c.memoizedState && (null === c.alternate || null === c.alternate.memoizedState) && (Fu = Ge()),
                    4 & r && fu(e);
                    break;
                case 22:
                    if (c = null !== n && null !== n.memoizedState,
                    1 & e.mode ? (Ql = (f = Ql) || c,
                    du(t, e),
                    Ql = f) : du(t, e),
                    mu(e),
                    8192 & r) {
                        f = null !== e.memoizedState;
                        e: for (d = null,
                        p = e; ; ) {
                            if (5 === p.tag) {
                                if (null === d) {
                                    d = p;
                                    try {
                                        a = p.stateNode,
                                        f ? "function" === typeof (o = a.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (u = p.stateNode,
                                        l = void 0 !== (s = p.memoizedProps.style) && null !== s && s.hasOwnProperty("display") ? s.display : null,
                                        u.style.display = he("display", l))
                                    } catch (h) {
                                        Ss(e, e.return, h)
                                    }
                                }
                            } else if (6 === p.tag) {
                                if (null === d)
                                    try {
                                        p.stateNode.nodeValue = f ? "" : p.memoizedProps
                                    } catch (h) {
                                        Ss(e, e.return, h)
                                    }
                            } else if ((22 !== p.tag && 23 !== p.tag || null === p.memoizedState || p === e) && null !== p.child) {
                                p.child.return = p,
                                p = p.child;
                                continue
                            }
                            if (p === e)
                                break e;
                            for (; null === p.sibling; ) {
                                if (null === p.return || p.return === e)
                                    break e;
                                d === p && (d = null),
                                p = p.return
                            }
                            d === p && (d = null),
                            p.sibling.return = p.return,
                            p = p.sibling
                        }
                        if (f && !c && 0 !== (1 & e.mode))
                            for (Kl = e,
                            e = e.child; null !== e; ) {
                                for (c = Kl = e; null !== Kl; ) {
                                    switch (d = (f = Kl).child,
                                    f.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        Jl(4, f, f.return);
                                        break;
                                    case 1:
                                        if (Xl(f, f.return),
                                        "function" === typeof (o = f.stateNode).componentWillUnmount) {
                                            p = f,
                                            m = f.return;
                                            try {
                                                a = p,
                                                o.props = a.memoizedProps,
                                                o.state = a.memoizedState,
                                                o.componentWillUnmount()
                                            } catch (h) {
                                                Ss(p, m, h)
                                            }
                                        }
                                        break;
                                    case 5:
                                        Xl(f, f.return);
                                        break;
                                    case 22:
                                        if (null !== f.memoizedState) {
                                            yu(c);
                                            continue
                                        }
                                    }
                                    null !== d ? (d.return = f,
                                    Kl = d) : yu(c)
                                }
                                e = e.sibling
                            }
                    }
                    break;
                case 19:
                    du(t, e),
                    mu(e),
                    4 & r && fu(e);
                case 21:
                }
            }
            function mu(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        e: {
                            for (var n = e.return; null !== n; ) {
                                if (ru(n)) {
                                    var r = n;
                                    break e
                                }
                                n = n.return
                            }
                            throw Error(i(160))
                        }
                        switch (r.tag) {
                        case 5:
                            var a = r.stateNode;
                            32 & r.flags && (de(a, ""),
                            r.flags &= -33),
                            ou(e, au(e), a);
                            break;
                        case 3:
                        case 4:
                            var o = r.stateNode.containerInfo;
                            iu(e, au(e), o);
                            break;
                        default:
                            throw Error(i(161))
                        }
                    } catch (l) {
                        Ss(e, e.return, l)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }
            function hu(e, t, n) {
                Kl = e,
                vu(e, t, n)
            }
            function vu(e, t, n) {
                for (var r = 0 !== (1 & e.mode); null !== Kl; ) {
                    var a = Kl
                      , i = a.child;
                    if (22 === a.tag && r) {
                        var o = null !== a.memoizedState || Yl;
                        if (!o) {
                            var l = a.alternate
                              , u = null !== l && null !== l.memoizedState || Ql;
                            l = Yl;
                            var s = Ql;
                            if (Yl = o,
                            (Ql = u) && !s)
                                for (Kl = a; null !== Kl; )
                                    u = (o = Kl).child,
                                    22 === o.tag && null !== o.memoizedState ? bu(a) : null !== u ? (u.return = o,
                                    Kl = u) : bu(a);
                            for (; null !== i; )
                                Kl = i,
                                vu(i, t, n),
                                i = i.sibling;
                            Kl = a,
                            Yl = l,
                            Ql = s
                        }
                        gu(e)
                    } else
                        0 !== (8772 & a.subtreeFlags) && null !== i ? (i.return = a,
                        Kl = i) : gu(e)
                }
            }
            function gu(e) {
                for (; null !== Kl; ) {
                    var t = Kl;
                    if (0 !== (8772 & t.flags)) {
                        var n = t.alternate;
                        try {
                            if (0 !== (8772 & t.flags))
                                switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ql || eu(5, t);
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if (4 & t.flags && !Ql)
                                        if (null === n)
                                            r.componentDidMount();
                                        else {
                                            var a = t.elementType === t.type ? n.memoizedProps : Va(t.type, n.memoizedProps);
                                            r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                        }
                                    var o = t.updateQueue;
                                    null !== o && si(t, o, r);
                                    break;
                                case 3:
                                    var l = t.updateQueue;
                                    if (null !== l) {
                                        if (n = null,
                                        null !== t.child)
                                            switch (t.child.tag) {
                                            case 5:
                                            case 1:
                                                n = t.child.stateNode
                                            }
                                        si(t, l, n)
                                    }
                                    break;
                                case 5:
                                    var u = t.stateNode;
                                    if (null === n && 4 & t.flags) {
                                        n = u;
                                        var s = t.memoizedProps;
                                        switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            s.autoFocus && n.focus();
                                            break;
                                        case "img":
                                            s.src && (n.src = s.src)
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                    break;
                                case 13:
                                    if (null === t.memoizedState) {
                                        var c = t.alternate;
                                        if (null !== c) {
                                            var f = c.memoizedState;
                                            if (null !== f) {
                                                var d = f.dehydrated;
                                                null !== d && Wt(d)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(i(163))
                                }
                            Ql || 512 & t.flags && tu(t)
                        } catch (p) {
                            Ss(t, t.return, p)
                        }
                    }
                    if (t === e) {
                        Kl = null;
                        break
                    }
                    if (null !== (n = t.sibling)) {
                        n.return = t.return,
                        Kl = n;
                        break
                    }
                    Kl = t.return
                }
            }
            function yu(e) {
                for (; null !== Kl; ) {
                    var t = Kl;
                    if (t === e) {
                        Kl = null;
                        break
                    }
                    var n = t.sibling;
                    if (null !== n) {
                        n.return = t.return,
                        Kl = n;
                        break
                    }
                    Kl = t.return
                }
            }
            function bu(e) {
                for (; null !== Kl; ) {
                    var t = Kl;
                    try {
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            var n = t.return;
                            try {
                                eu(4, t)
                            } catch (u) {
                                Ss(t, n, u)
                            }
                            break;
                        case 1:
                            var r = t.stateNode;
                            if ("function" === typeof r.componentDidMount) {
                                var a = t.return;
                                try {
                                    r.componentDidMount()
                                } catch (u) {
                                    Ss(t, a, u)
                                }
                            }
                            var i = t.return;
                            try {
                                tu(t)
                            } catch (u) {
                                Ss(t, i, u)
                            }
                            break;
                        case 5:
                            var o = t.return;
                            try {
                                tu(t)
                            } catch (u) {
                                Ss(t, o, u)
                            }
                        }
                    } catch (u) {
                        Ss(t, t.return, u)
                    }
                    if (t === e) {
                        Kl = null;
                        break
                    }
                    var l = t.sibling;
                    if (null !== l) {
                        l.return = t.return,
                        Kl = l;
                        break
                    }
                    Kl = t.return
                }
            }
            var wu, xu = Math.ceil, ku = w.ReactCurrentDispatcher, Su = w.ReactCurrentOwner, Eu = w.ReactCurrentBatchConfig, Cu = 0, Ou = null, ju = null, Pu = 0, _u = 0, Nu = Ea(0), Tu = 0, zu = null, Mu = 0, Lu = 0, Du = 0, Au = null, Ru = null, Fu = 0, Iu = 1 / 0, Uu = null, Hu = !1, Wu = null, Bu = null, Vu = !1, $u = null, Yu = 0, Qu = 0, qu = null, Ku = -1, Xu = 0;
            function Gu() {
                return 0 !== (6 & Cu) ? Ge() : -1 !== Ku ? Ku : Ku = Ge()
            }
            function Zu(e) {
                return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Cu) && 0 !== Pu ? Pu & -Pu : null !== Ba.transition ? (0 === Xu && (Xu = ht()),
                Xu) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type)
            }
            function Ju(e, t, n) {
                if (50 < Qu)
                    throw Qu = 0,
                    qu = null,
                    Error(i(185));
                var r = es(e, t);
                return null === r ? null : (gt(r, t, n),
                0 !== (2 & Cu) && r === Ou || (r === Ou && (0 === (2 & Cu) && (Lu |= t),
                4 === Tu && os(r, Pu)),
                ns(r, n),
                1 === t && 0 === Cu && 0 === (1 & e.mode) && (Iu = Ge() + 500,
                Ia && Wa())),
                r)
            }
            function es(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t),
                n = e,
                e = e.return; null !== e; )
                    e.childLanes |= t,
                    null !== (n = e.alternate) && (n.childLanes |= t),
                    n = e,
                    e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }
            function ts(e) {
                return (null !== Ou || null !== ei) && 0 !== (1 & e.mode) && 0 === (2 & Cu)
            }
            function ns(e, t) {
                var n = e.callbackNode;
                !function(e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
                        var o = 31 - ot(i)
                          , l = 1 << o
                          , u = a[o];
                        -1 === u ? 0 !== (l & n) && 0 === (l & r) || (a[o] = pt(l, t)) : u <= t && (e.expiredLanes |= l),
                        i &= ~l
                    }
                }(e, t);
                var r = dt(e, e === Ou ? Pu : 0);
                if (0 === r)
                    null !== n && qe(n),
                    e.callbackNode = null,
                    e.callbackPriority = 0;
                else if (t = r & -r,
                e.callbackPriority !== t) {
                    if (null != n && qe(n),
                    1 === t)
                        0 === e.tag ? function(e) {
                            Ia = !0,
                            Ha(e)
                        }(ls.bind(null, e)) : Ha(ls.bind(null, e)),
                        oa((function() {
                            0 === Cu && Wa()
                        }
                        )),
                        n = null;
                    else {
                        switch (wt(r)) {
                        case 1:
                            n = Je;
                            break;
                        case 4:
                            n = et;
                            break;
                        case 16:
                        default:
                            n = tt;
                            break;
                        case 536870912:
                            n = rt
                        }
                        n = Ps(n, rs.bind(null, e))
                    }
                    e.callbackPriority = t,
                    e.callbackNode = n
                }
            }
            function rs(e, t) {
                if (Ku = -1,
                Xu = 0,
                0 !== (6 & Cu))
                    throw Error(i(327));
                var n = e.callbackNode;
                if (xs() && e.callbackNode !== n)
                    return null;
                var r = dt(e, e === Ou ? Pu : 0);
                if (0 === r)
                    return null;
                if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t)
                    t = hs(e, r);
                else {
                    t = r;
                    var a = Cu;
                    Cu |= 2;
                    var o = ps();
                    for (Ou === e && Pu === t || (Uu = null,
                    Iu = Ge() + 500,
                    fs(e, t)); ; )
                        try {
                            gs();
                            break
                        } catch (u) {
                            ds(e, u)
                        }
                    Ka(),
                    ku.current = o,
                    Cu = a,
                    null !== ju ? t = 0 : (Ou = null,
                    Pu = 0,
                    t = Tu)
                }
                if (0 !== t) {
                    if (2 === t && (0 !== (a = mt(e)) && (r = a,
                    t = as(e, a))),
                    1 === t)
                        throw n = zu,
                        fs(e, 0),
                        os(e, r),
                        ns(e, Ge()),
                        n;
                    if (6 === t)
                        os(e, r);
                    else {
                        if (a = e.current.alternate,
                        0 === (30 & r) && !function(e) {
                            for (var t = e; ; ) {
                                if (16384 & t.flags) {
                                    var n = t.updateQueue;
                                    if (null !== n && null !== (n = n.stores))
                                        for (var r = 0; r < n.length; r++) {
                                            var a = n[r]
                                              , i = a.getSnapshot;
                                            a = a.value;
                                            try {
                                                if (!lr(i(), a))
                                                    return !1
                                            } catch (l) {
                                                return !1
                                            }
                                        }
                                }
                                if (n = t.child,
                                16384 & t.subtreeFlags && null !== n)
                                    n.return = t,
                                    t = n;
                                else {
                                    if (t === e)
                                        break;
                                    for (; null === t.sibling; ) {
                                        if (null === t.return || t.return === e)
                                            return !0;
                                        t = t.return
                                    }
                                    t.sibling.return = t.return,
                                    t = t.sibling
                                }
                            }
                            return !0
                        }(a) && (2 === (t = hs(e, r)) && (0 !== (o = mt(e)) && (r = o,
                        t = as(e, o))),
                        1 === t))
                            throw n = zu,
                            fs(e, 0),
                            os(e, r),
                            ns(e, Ge()),
                            n;
                        switch (e.finishedWork = a,
                        e.finishedLanes = r,
                        t) {
                        case 0:
                        case 1:
                            throw Error(i(345));
                        case 2:
                        case 5:
                            ws(e, Ru, Uu);
                            break;
                        case 3:
                            if (os(e, r),
                            (130023424 & r) === r && 10 < (t = Fu + 500 - Ge())) {
                                if (0 !== dt(e, 0))
                                    break;
                                if (((a = e.suspendedLanes) & r) !== r) {
                                    Gu(),
                                    e.pingedLanes |= e.suspendedLanes & a;
                                    break
                                }
                                e.timeoutHandle = ra(ws.bind(null, e, Ru, Uu), t);
                                break
                            }
                            ws(e, Ru, Uu);
                            break;
                        case 4:
                            if (os(e, r),
                            (4194240 & r) === r)
                                break;
                            for (t = e.eventTimes,
                            a = -1; 0 < r; ) {
                                var l = 31 - ot(r);
                                o = 1 << l,
                                (l = t[l]) > a && (a = l),
                                r &= ~o
                            }
                            if (r = a,
                            10 < (r = (120 > (r = Ge() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xu(r / 1960)) - r)) {
                                e.timeoutHandle = ra(ws.bind(null, e, Ru, Uu), r);
                                break
                            }
                            ws(e, Ru, Uu);
                            break;
                        default:
                            throw Error(i(329))
                        }
                    }
                }
                return ns(e, Ge()),
                e.callbackNode === n ? rs.bind(null, e) : null
            }
            function as(e, t) {
                var n = Au;
                return e.current.memoizedState.isDehydrated && (fs(e, t).flags |= 256),
                2 !== (e = hs(e, t)) && (t = Ru,
                Ru = n,
                null !== t && is(t)),
                e
            }
            function is(e) {
                null === Ru ? Ru = e : Ru.push.apply(Ru, e)
            }
            function os(e, t) {
                for (t &= ~Du,
                t &= ~Lu,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                e = e.expirationTimes; 0 < t; ) {
                    var n = 31 - ot(t)
                      , r = 1 << n;
                    e[n] = -1,
                    t &= ~r
                }
            }
            function ls(e) {
                if (0 !== (6 & Cu))
                    throw Error(i(327));
                xs();
                var t = dt(e, 0);
                if (0 === (1 & t))
                    return ns(e, Ge()),
                    null;
                var n = hs(e, t);
                if (0 !== e.tag && 2 === n) {
                    var r = mt(e);
                    0 !== r && (t = r,
                    n = as(e, r))
                }
                if (1 === n)
                    throw n = zu,
                    fs(e, 0),
                    os(e, t),
                    ns(e, Ge()),
                    n;
                if (6 === n)
                    throw Error(i(345));
                return e.finishedWork = e.current.alternate,
                e.finishedLanes = t,
                ws(e, Ru, Uu),
                ns(e, Ge()),
                null
            }
            function us(e, t) {
                var n = Cu;
                Cu |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (Cu = n) && (Iu = Ge() + 500,
                    Ia && Wa())
                }
            }
            function ss(e) {
                null !== $u && 0 === $u.tag && 0 === (6 & Cu) && xs();
                var t = Cu;
                Cu |= 1;
                var n = Eu.transition
                  , r = bt;
                try {
                    if (Eu.transition = null,
                    bt = 1,
                    e)
                        return e()
                } finally {
                    bt = r,
                    Eu.transition = n,
                    0 === (6 & (Cu = t)) && Wa()
                }
            }
            function cs() {
                _u = Nu.current,
                Ca(Nu)
            }
            function fs(e, t) {
                e.finishedWork = null,
                e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1,
                aa(n)),
                null !== ju)
                    for (n = ju.return; null !== n; ) {
                        var r = n;
                        switch (_i(r),
                        r.tag) {
                        case 1:
                            null !== (r = r.type.childContextTypes) && void 0 !== r && Ma();
                            break;
                        case 3:
                            eo(),
                            Ca(_a),
                            Ca(Pa),
                            oo();
                            break;
                        case 5:
                            no(r);
                            break;
                        case 4:
                            eo();
                            break;
                        case 13:
                        case 19:
                            Ca(ro);
                            break;
                        case 10:
                            Xa(r.type._context);
                            break;
                        case 22:
                        case 23:
                            cs()
                        }
                        n = n.return
                    }
                if (Ou = e,
                ju = e = zs(e.current, null),
                Pu = _u = t,
                Tu = 0,
                zu = null,
                Du = Lu = Mu = 0,
                Ru = Au = null,
                null !== ei) {
                    for (t = 0; t < ei.length; t++)
                        if (null !== (r = (n = ei[t]).interleaved)) {
                            n.interleaved = null;
                            var a = r.next
                              , i = n.pending;
                            if (null !== i) {
                                var o = i.next;
                                i.next = a,
                                r.next = o
                            }
                            n.pending = r
                        }
                    ei = null
                }
                return e
            }
            function ds(e, t) {
                for (; ; ) {
                    var n = ju;
                    try {
                        if (Ka(),
                        lo.current = nl,
                        mo) {
                            for (var r = co.memoizedState; null !== r; ) {
                                var a = r.queue;
                                null !== a && (a.pending = null),
                                r = r.next
                            }
                            mo = !1
                        }
                        if (so = 0,
                        po = fo = co = null,
                        ho = !1,
                        vo = 0,
                        Su.current = null,
                        null === n || null === n.return) {
                            Tu = 1,
                            zu = t,
                            ju = null;
                            break
                        }
                        e: {
                            var o = e
                              , l = n.return
                              , u = n
                              , s = t;
                            if (t = Pu,
                            u.flags |= 32768,
                            null !== s && "object" === typeof s && "function" === typeof s.then) {
                                var c = s
                                  , f = u
                                  , d = f.tag;
                                if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                                    var p = f.alternate;
                                    p ? (f.updateQueue = p.updateQueue,
                                    f.memoizedState = p.memoizedState,
                                    f.lanes = p.lanes) : (f.updateQueue = null,
                                    f.memoizedState = null)
                                }
                                var m = hl(l);
                                if (null !== m) {
                                    m.flags &= -257,
                                    vl(m, l, u, 0, t),
                                    1 & m.mode && ml(o, c, t),
                                    s = c;
                                    var h = (t = m).updateQueue;
                                    if (null === h) {
                                        var v = new Set;
                                        v.add(s),
                                        t.updateQueue = v
                                    } else
                                        h.add(s);
                                    break e
                                }
                                if (0 === (1 & t)) {
                                    ml(o, c, t),
                                    ms();
                                    break e
                                }
                                s = Error(i(426))
                            } else if (zi && 1 & u.mode) {
                                var g = hl(l);
                                if (null !== g) {
                                    0 === (65536 & g.flags) && (g.flags |= 256),
                                    vl(g, l, u, 0, t),
                                    Hi(s);
                                    break e
                                }
                            }
                            o = s,
                            4 !== Tu && (Tu = 2),
                            null === Au ? Au = [o] : Au.push(o),
                            s = ol(s, u),
                            u = l;
                            do {
                                switch (u.tag) {
                                case 3:
                                    u.flags |= 65536,
                                    t &= -t,
                                    u.lanes |= t,
                                    li(u, dl(0, s, t));
                                    break e;
                                case 1:
                                    o = s;
                                    var y = u.type
                                      , b = u.stateNode;
                                    if (0 === (128 & u.flags) && ("function" === typeof y.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === Bu || !Bu.has(b)))) {
                                        u.flags |= 65536,
                                        t &= -t,
                                        u.lanes |= t,
                                        li(u, pl(u, o, t));
                                        break e
                                    }
                                }
                                u = u.return
                            } while (null !== u)
                        }
                        bs(n)
                    } catch (w) {
                        t = w,
                        ju === n && null !== n && (ju = n = n.return);
                        continue
                    }
                    break
                }
            }
            function ps() {
                var e = ku.current;
                return ku.current = nl,
                null === e ? nl : e
            }
            function ms() {
                0 !== Tu && 3 !== Tu && 2 !== Tu || (Tu = 4),
                null === Ou || 0 === (268435455 & Mu) && 0 === (268435455 & Lu) || os(Ou, Pu)
            }
            function hs(e, t) {
                var n = Cu;
                Cu |= 2;
                var r = ps();
                for (Ou === e && Pu === t || (Uu = null,
                fs(e, t)); ; )
                    try {
                        vs();
                        break
                    } catch (a) {
                        ds(e, a)
                    }
                if (Ka(),
                Cu = n,
                ku.current = r,
                null !== ju)
                    throw Error(i(261));
                return Ou = null,
                Pu = 0,
                Tu
            }
            function vs() {
                for (; null !== ju; )
                    ys(ju)
            }
            function gs() {
                for (; null !== ju && !Ke(); )
                    ys(ju)
            }
            function ys(e) {
                var t = wu(e.alternate, e, _u);
                e.memoizedProps = e.pendingProps,
                null === t ? bs(e) : ju = t,
                Su.current = null
            }
            function bs(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (e = t.return,
                    0 === (32768 & t.flags)) {
                        if (null !== (n = bl(n, t, _u)))
                            return void (ju = n)
                    } else {
                        if (null !== (n = $l(n, t)))
                            return n.flags &= 32767,
                            void (ju = n);
                        if (null === e)
                            return Tu = 6,
                            void (ju = null);
                        e.flags |= 32768,
                        e.subtreeFlags = 0,
                        e.deletions = null
                    }
                    if (null !== (t = t.sibling))
                        return void (ju = t);
                    ju = t = e
                } while (null !== t);
                0 === Tu && (Tu = 5)
            }
            function ws(e, t, n) {
                var r = bt
                  , a = Eu.transition;
                try {
                    Eu.transition = null,
                    bt = 1,
                    function(e, t, n, r) {
                        do {
                            xs()
                        } while (null !== $u);
                        if (0 !== (6 & Cu))
                            throw Error(i(327));
                        n = e.finishedWork;
                        var a = e.finishedLanes;
                        if (null === n)
                            return null;
                        if (e.finishedWork = null,
                        e.finishedLanes = 0,
                        n === e.current)
                            throw Error(i(177));
                        e.callbackNode = null,
                        e.callbackPriority = 0;
                        var o = n.lanes | n.childLanes;
                        if (function(e, t) {
                            var n = e.pendingLanes & ~t;
                            e.pendingLanes = t,
                            e.suspendedLanes = 0,
                            e.pingedLanes = 0,
                            e.expiredLanes &= t,
                            e.mutableReadLanes &= t,
                            e.entangledLanes &= t,
                            t = e.entanglements;
                            var r = e.eventTimes;
                            for (e = e.expirationTimes; 0 < n; ) {
                                var a = 31 - ot(n)
                                  , i = 1 << a;
                                t[a] = 0,
                                r[a] = -1,
                                e[a] = -1,
                                n &= ~i
                            }
                        }(e, o),
                        e === Ou && (ju = Ou = null,
                        Pu = 0),
                        0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Vu || (Vu = !0,
                        Ps(tt, (function() {
                            return xs(),
                            null
                        }
                        ))),
                        o = 0 !== (15990 & n.flags),
                        0 !== (15990 & n.subtreeFlags) || o) {
                            o = Eu.transition,
                            Eu.transition = null;
                            var l = bt;
                            bt = 1;
                            var u = Cu;
                            Cu |= 4,
                            Su.current = null,
                            function(e, t) {
                                if (ea = Vt,
                                pr(e = dr())) {
                                    if ("selectionStart"in e)
                                        var n = {
                                            start: e.selectionStart,
                                            end: e.selectionEnd
                                        };
                                    else
                                        e: {
                                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                            if (r && 0 !== r.rangeCount) {
                                                n = r.anchorNode;
                                                var a = r.anchorOffset
                                                  , o = r.focusNode;
                                                r = r.focusOffset;
                                                try {
                                                    n.nodeType,
                                                    o.nodeType
                                                } catch (k) {
                                                    n = null;
                                                    break e
                                                }
                                                var l = 0
                                                  , u = -1
                                                  , s = -1
                                                  , c = 0
                                                  , f = 0
                                                  , d = e
                                                  , p = null;
                                                t: for (; ; ) {
                                                    for (var m; d !== n || 0 !== a && 3 !== d.nodeType || (u = l + a),
                                                    d !== o || 0 !== r && 3 !== d.nodeType || (s = l + r),
                                                    3 === d.nodeType && (l += d.nodeValue.length),
                                                    null !== (m = d.firstChild); )
                                                        p = d,
                                                        d = m;
                                                    for (; ; ) {
                                                        if (d === e)
                                                            break t;
                                                        if (p === n && ++c === a && (u = l),
                                                        p === o && ++f === r && (s = l),
                                                        null !== (m = d.nextSibling))
                                                            break;
                                                        p = (d = p).parentNode
                                                    }
                                                    d = m
                                                }
                                                n = -1 === u || -1 === s ? null : {
                                                    start: u,
                                                    end: s
                                                }
                                            } else
                                                n = null
                                        }
                                    n = n || {
                                        start: 0,
                                        end: 0
                                    }
                                } else
                                    n = null;
                                for (ta = {
                                    focusedElem: e,
                                    selectionRange: n
                                },
                                Vt = !1,
                                Kl = t; null !== Kl; )
                                    if (e = (t = Kl).child,
                                    0 !== (1028 & t.subtreeFlags) && null !== e)
                                        e.return = t,
                                        Kl = e;
                                    else
                                        for (; null !== Kl; ) {
                                            t = Kl;
                                            try {
                                                var h = t.alternate;
                                                if (0 !== (1024 & t.flags))
                                                    switch (t.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                    case 5:
                                                    case 6:
                                                    case 4:
                                                    case 17:
                                                        break;
                                                    case 1:
                                                        if (null !== h) {
                                                            var v = h.memoizedProps
                                                              , g = h.memoizedState
                                                              , y = t.stateNode
                                                              , b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Va(t.type, v), g);
                                                            y.__reactInternalSnapshotBeforeUpdate = b
                                                        }
                                                        break;
                                                    case 3:
                                                        var w = t.stateNode.containerInfo;
                                                        if (1 === w.nodeType)
                                                            w.textContent = "";
                                                        else if (9 === w.nodeType) {
                                                            var x = w.body;
                                                            null != x && (x.textContent = "")
                                                        }
                                                        break;
                                                    default:
                                                        throw Error(i(163))
                                                    }
                                            } catch (k) {
                                                Ss(t, t.return, k)
                                            }
                                            if (null !== (e = t.sibling)) {
                                                e.return = t.return,
                                                Kl = e;
                                                break
                                            }
                                            Kl = t.return
                                        }
                                h = Zl,
                                Zl = !1
                            }(e, n),
                            pu(n, e),
                            mr(ta),
                            Vt = !!ea,
                            ta = ea = null,
                            e.current = n,
                            hu(n, e, a),
                            Xe(),
                            Cu = u,
                            bt = l,
                            Eu.transition = o
                        } else
                            e.current = n;
                        if (Vu && (Vu = !1,
                        $u = e,
                        Yu = a),
                        0 === (o = e.pendingLanes) && (Bu = null),
                        function(e) {
                            if (it && "function" === typeof it.onCommitFiberRoot)
                                try {
                                    it.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags))
                                } catch (t) {}
                        }(n.stateNode),
                        ns(e, Ge()),
                        null !== t)
                            for (r = e.onRecoverableError,
                            n = 0; n < t.length; n++)
                                r(t[n]);
                        if (Hu)
                            throw Hu = !1,
                            e = Wu,
                            Wu = null,
                            e;
                        0 !== (1 & Yu) && 0 !== e.tag && xs(),
                        0 !== (1 & (o = e.pendingLanes)) ? e === qu ? Qu++ : (Qu = 0,
                        qu = e) : Qu = 0,
                        Wa()
                    }(e, t, n, r)
                } finally {
                    Eu.transition = a,
                    bt = r
                }
                return null
            }
            function xs() {
                if (null !== $u) {
                    var e = wt(Yu)
                      , t = Eu.transition
                      , n = bt;
                    try {
                        if (Eu.transition = null,
                        bt = 16 > e ? 16 : e,
                        null === $u)
                            var r = !1;
                        else {
                            if (e = $u,
                            $u = null,
                            Yu = 0,
                            0 !== (6 & Cu))
                                throw Error(i(331));
                            var a = Cu;
                            for (Cu |= 4,
                            Kl = e.current; null !== Kl; ) {
                                var o = Kl
                                  , l = o.child;
                                if (0 !== (16 & Kl.flags)) {
                                    var u = o.deletions;
                                    if (null !== u) {
                                        for (var s = 0; s < u.length; s++) {
                                            var c = u[s];
                                            for (Kl = c; null !== Kl; ) {
                                                var f = Kl;
                                                switch (f.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    Jl(8, f, o)
                                                }
                                                var d = f.child;
                                                if (null !== d)
                                                    d.return = f,
                                                    Kl = d;
                                                else
                                                    for (; null !== Kl; ) {
                                                        var p = (f = Kl).sibling
                                                          , m = f.return;
                                                        if (nu(f),
                                                        f === c) {
                                                            Kl = null;
                                                            break
                                                        }
                                                        if (null !== p) {
                                                            p.return = m,
                                                            Kl = p;
                                                            break
                                                        }
                                                        Kl = m
                                                    }
                                            }
                                        }
                                        var h = o.alternate;
                                        if (null !== h) {
                                            var v = h.child;
                                            if (null !== v) {
                                                h.child = null;
                                                do {
                                                    var g = v.sibling;
                                                    v.sibling = null,
                                                    v = g
                                                } while (null !== v)
                                            }
                                        }
                                        Kl = o
                                    }
                                }
                                if (0 !== (2064 & o.subtreeFlags) && null !== l)
                                    l.return = o,
                                    Kl = l;
                                else
                                    e: for (; null !== Kl; ) {
                                        if (0 !== (2048 & (o = Kl).flags))
                                            switch (o.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                Jl(9, o, o.return)
                                            }
                                        var y = o.sibling;
                                        if (null !== y) {
                                            y.return = o.return,
                                            Kl = y;
                                            break e
                                        }
                                        Kl = o.return
                                    }
                            }
                            var b = e.current;
                            for (Kl = b; null !== Kl; ) {
                                var w = (l = Kl).child;
                                if (0 !== (2064 & l.subtreeFlags) && null !== w)
                                    w.return = l,
                                    Kl = w;
                                else
                                    e: for (l = b; null !== Kl; ) {
                                        if (0 !== (2048 & (u = Kl).flags))
                                            try {
                                                switch (u.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    eu(9, u)
                                                }
                                            } catch (k) {
                                                Ss(u, u.return, k)
                                            }
                                        if (u === l) {
                                            Kl = null;
                                            break e
                                        }
                                        var x = u.sibling;
                                        if (null !== x) {
                                            x.return = u.return,
                                            Kl = x;
                                            break e
                                        }
                                        Kl = u.return
                                    }
                            }
                            if (Cu = a,
                            Wa(),
                            it && "function" === typeof it.onPostCommitFiberRoot)
                                try {
                                    it.onPostCommitFiberRoot(at, e)
                                } catch (k) {}
                            r = !0
                        }
                        return r
                    } finally {
                        bt = n,
                        Eu.transition = t
                    }
                }
                return !1
            }
            function ks(e, t, n) {
                ii(e, t = dl(0, t = ol(n, t), 1)),
                t = Gu(),
                null !== (e = es(e, 1)) && (gt(e, 1, t),
                ns(e, t))
            }
            function Ss(e, t, n) {
                if (3 === e.tag)
                    ks(e, e, n);
                else
                    for (; null !== t; ) {
                        if (3 === t.tag) {
                            ks(t, e, n);
                            break
                        }
                        if (1 === t.tag) {
                            var r = t.stateNode;
                            if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Bu || !Bu.has(r))) {
                                ii(t, e = pl(t, e = ol(n, e), 1)),
                                e = Gu(),
                                null !== (t = es(t, 1)) && (gt(t, 1, e),
                                ns(t, e));
                                break
                            }
                        }
                        t = t.return
                    }
            }
            function Es(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t),
                t = Gu(),
                e.pingedLanes |= e.suspendedLanes & n,
                Ou === e && (Pu & n) === n && (4 === Tu || 3 === Tu && (130023424 & Pu) === Pu && 500 > Ge() - Fu ? fs(e, 0) : Du |= n),
                ns(e, t)
            }
            function Cs(e, t) {
                0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct,
                0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
                var n = Gu();
                null !== (e = es(e, t)) && (gt(e, t, n),
                ns(e, n))
            }
            function Os(e) {
                var t = e.memoizedState
                  , n = 0;
                null !== t && (n = t.retryLane),
                Cs(e, n)
            }
            function js(e, t) {
                var n = 0;
                switch (e.tag) {
                case 13:
                    var r = e.stateNode
                      , a = e.memoizedState;
                    null !== a && (n = a.retryLane);
                    break;
                case 19:
                    r = e.stateNode;
                    break;
                default:
                    throw Error(i(314))
                }
                null !== r && r.delete(t),
                Cs(e, n)
            }
            function Ps(e, t) {
                return Qe(e, t)
            }
            function _s(e, t, n, r) {
                this.tag = e,
                this.key = n,
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
                this.index = 0,
                this.ref = null,
                this.pendingProps = t,
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
                this.mode = r,
                this.subtreeFlags = this.flags = 0,
                this.deletions = null,
                this.childLanes = this.lanes = 0,
                this.alternate = null
            }
            function Ns(e, t, n, r) {
                return new _s(e,t,n,r)
            }
            function Ts(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }
            function zs(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Ns(e.tag, t, e.key, e.mode)).elementType = e.elementType,
                n.type = e.type,
                n.stateNode = e.stateNode,
                n.alternate = e,
                e.alternate = n) : (n.pendingProps = t,
                n.type = e.type,
                n.flags = 0,
                n.subtreeFlags = 0,
                n.deletions = null),
                n.flags = 14680064 & e.flags,
                n.childLanes = e.childLanes,
                n.lanes = e.lanes,
                n.child = e.child,
                n.memoizedProps = e.memoizedProps,
                n.memoizedState = e.memoizedState,
                n.updateQueue = e.updateQueue,
                t = e.dependencies,
                n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                },
                n.sibling = e.sibling,
                n.index = e.index,
                n.ref = e.ref,
                n
            }
            function Ms(e, t, n, r, a, o) {
                var l = 2;
                if (r = e,
                "function" === typeof e)
                    Ts(e) && (l = 1);
                else if ("string" === typeof e)
                    l = 5;
                else
                    e: switch (e) {
                    case S:
                        return Ls(n.children, a, o, t);
                    case E:
                        l = 8,
                        a |= 8;
                        break;
                    case C:
                        return (e = Ns(12, n, t, 2 | a)).elementType = C,
                        e.lanes = o,
                        e;
                    case _:
                        return (e = Ns(13, n, t, a)).elementType = _,
                        e.lanes = o,
                        e;
                    case N:
                        return (e = Ns(19, n, t, a)).elementType = N,
                        e.lanes = o,
                        e;
                    case M:
                        return Ds(n, a, o, t);
                    default:
                        if ("object" === typeof e && null !== e)
                            switch (e.$$typeof) {
                            case O:
                                l = 10;
                                break e;
                            case j:
                                l = 9;
                                break e;
                            case P:
                                l = 11;
                                break e;
                            case T:
                                l = 14;
                                break e;
                            case z:
                                l = 16,
                                r = null;
                                break e
                            }
                        throw Error(i(130, null == e ? e : typeof e, ""))
                    }
                return (t = Ns(l, n, t, a)).elementType = e,
                t.type = r,
                t.lanes = o,
                t
            }
            function Ls(e, t, n, r) {
                return (e = Ns(7, e, r, t)).lanes = n,
                e
            }
            function Ds(e, t, n, r) {
                return (e = Ns(22, e, r, t)).elementType = M,
                e.lanes = n,
                e.stateNode = {},
                e
            }
            function As(e, t, n) {
                return (e = Ns(6, e, null, t)).lanes = n,
                e
            }
            function Rs(e, t, n) {
                return (t = Ns(4, null !== e.children ? e.children : [], e.key, t)).lanes = n,
                t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                },
                t
            }
            function Fs(e, t, n, r, a) {
                this.tag = t,
                this.containerInfo = e,
                this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
                this.timeoutHandle = -1,
                this.callbackNode = this.pendingContext = this.context = null,
                this.callbackPriority = 0,
                this.eventTimes = vt(0),
                this.expirationTimes = vt(-1),
                this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
                this.entanglements = vt(0),
                this.identifierPrefix = r,
                this.onRecoverableError = a,
                this.mutableSourceEagerHydrationData = null
            }
            function Is(e, t, n, r, a, i, o, l, u) {
                return e = new Fs(e,t,n,l,u),
                1 === t ? (t = 1,
                !0 === i && (t |= 8)) : t = 0,
                i = Ns(3, null, null, t),
                e.current = i,
                i.stateNode = e,
                i.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                },
                ni(i),
                e
            }
            function Us(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: k,
                    key: null == r ? null : "" + r,
                    children: e,
                    containerInfo: t,
                    implementation: n
                }
            }
            function Hs(e) {
                if (!e)
                    return ja;
                e: {
                    if (We(e = e._reactInternals) !== e || 1 !== e.tag)
                        throw Error(i(170));
                    var t = e;
                    do {
                        switch (t.tag) {
                        case 3:
                            t = t.stateNode.context;
                            break e;
                        case 1:
                            if (za(t.type)) {
                                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                break e
                            }
                        }
                        t = t.return
                    } while (null !== t);
                    throw Error(i(171))
                }
                if (1 === e.tag) {
                    var n = e.type;
                    if (za(n))
                        return Da(e, n, t)
                }
                return t
            }
            function Ws(e, t, n, r, a, i, o, l, u) {
                return (e = Is(n, r, !0, e, 0, i, 0, l, u)).context = Hs(null),
                n = e.current,
                (i = ai(r = Gu(), a = Zu(n))).callback = void 0 !== t && null !== t ? t : null,
                ii(n, i),
                e.current.lanes = a,
                gt(e, a, r),
                ns(e, r),
                e
            }
            function Bs(e, t, n, r) {
                var a = t.current
                  , i = Gu()
                  , o = Zu(a);
                return n = Hs(n),
                null === t.context ? t.context = n : t.pendingContext = n,
                (t = ai(i, o)).payload = {
                    element: e
                },
                null !== (r = void 0 === r ? null : r) && (t.callback = r),
                ii(a, t),
                null !== (e = Ju(a, o, i)) && oi(e, a, o),
                o
            }
            function Vs(e) {
                return (e = e.current).child ? (e.child.tag,
                e.child.stateNode) : null
            }
            function $s(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }
            function Ys(e, t) {
                $s(e, t),
                (e = e.alternate) && $s(e, t)
            }
            wu = function(e, t, n) {
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps || _a.current)
                        xl = !0;
                    else {
                        if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                            return xl = !1,
                            function(e, t, n) {
                                switch (t.tag) {
                                case 3:
                                    Tl(t),
                                    Ui();
                                    break;
                                case 5:
                                    to(t);
                                    break;
                                case 1:
                                    za(t.type) && Aa(t);
                                    break;
                                case 4:
                                    Ji(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    var r = t.type._context
                                      , a = t.memoizedProps.value;
                                    Oa($a, r._currentValue),
                                    r._currentValue = a;
                                    break;
                                case 13:
                                    if (null !== (r = t.memoizedState))
                                        return null !== r.dehydrated ? (Oa(ro, 1 & ro.current),
                                        t.flags |= 128,
                                        null) : 0 !== (n & t.child.childLanes) ? Al(e, t, n) : (Oa(ro, 1 & ro.current),
                                        null !== (e = Vl(e, t, n)) ? e.sibling : null);
                                    Oa(ro, 1 & ro.current);
                                    break;
                                case 19:
                                    if (r = 0 !== (n & t.childLanes),
                                    0 !== (128 & e.flags)) {
                                        if (r)
                                            return Bl(e, t, n);
                                        t.flags |= 128
                                    }
                                    if (null !== (a = t.memoizedState) && (a.rendering = null,
                                    a.tail = null,
                                    a.lastEffect = null),
                                    Oa(ro, ro.current),
                                    r)
                                        break;
                                    return null;
                                case 22:
                                case 23:
                                    return t.lanes = 0,
                                    Ol(e, t, n)
                                }
                                return Vl(e, t, n)
                            }(e, t, n);
                        xl = 0 !== (131072 & e.flags)
                    }
                else
                    xl = !1,
                    zi && 0 !== (1048576 & t.flags) && ji(t, wi, t.index);
                switch (t.lanes = 0,
                t.tag) {
                case 2:
                    var r = t.type;
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.flags |= 2),
                    e = t.pendingProps;
                    var a = Ta(t, Pa.current);
                    Za(t, n),
                    a = wo(null, t, r, e, a, n);
                    var o = xo();
                    return t.flags |= 1,
                    "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    za(r) ? (o = !0,
                    Aa(t)) : o = !1,
                    t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null,
                    ni(t),
                    a.updater = di,
                    t.stateNode = a,
                    a._reactInternals = t,
                    vi(t, r, e, n),
                    t = Nl(null, t, r, !0, o, n)) : (t.tag = 0,
                    zi && o && Pi(t),
                    kl(null, t, a, n),
                    t = t.child),
                    t;
                case 16:
                    r = t.elementType;
                    e: {
                        switch (null !== e && (e.alternate = null,
                        t.alternate = null,
                        t.flags |= 2),
                        e = t.pendingProps,
                        r = (a = r._init)(r._payload),
                        t.type = r,
                        a = t.tag = function(e) {
                            if ("function" === typeof e)
                                return Ts(e) ? 1 : 0;
                            if (void 0 !== e && null !== e) {
                                if ((e = e.$$typeof) === P)
                                    return 11;
                                if (e === T)
                                    return 14
                            }
                            return 2
                        }(r),
                        e = Va(r, e),
                        a) {
                        case 0:
                            t = Pl(null, t, r, e, n);
                            break e;
                        case 1:
                            t = _l(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Sl(null, t, r, e, n);
                            break e;
                        case 14:
                            t = El(null, t, r, Va(r.type, e), n);
                            break e
                        }
                        throw Error(i(306, r, ""))
                    }
                    return t;
                case 0:
                    return r = t.type,
                    a = t.pendingProps,
                    Pl(e, t, r, a = t.elementType === r ? a : Va(r, a), n);
                case 1:
                    return r = t.type,
                    a = t.pendingProps,
                    _l(e, t, r, a = t.elementType === r ? a : Va(r, a), n);
                case 3:
                    e: {
                        if (Tl(t),
                        null === e)
                            throw Error(i(387));
                        r = t.pendingProps,
                        a = (o = t.memoizedState).element,
                        ri(e, t),
                        ui(t, r, null, n);
                        var l = t.memoizedState;
                        if (r = l.element,
                        o.isDehydrated) {
                            if (o = {
                                element: r,
                                isDehydrated: !1,
                                cache: l.cache,
                                pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                                transitions: l.transitions
                            },
                            t.updateQueue.baseState = o,
                            t.memoizedState = o,
                            256 & t.flags) {
                                t = zl(e, t, r, n, a = Error(i(423)));
                                break e
                            }
                            if (r !== a) {
                                t = zl(e, t, r, n, a = Error(i(424)));
                                break e
                            }
                            for (Ti = sa(t.stateNode.containerInfo.firstChild),
                            Ni = t,
                            zi = !0,
                            Mi = null,
                            n = Qi(t, null, r, n),
                            t.child = n; n; )
                                n.flags = -3 & n.flags | 4096,
                                n = n.sibling
                        } else {
                            if (Ui(),
                            r === a) {
                                t = Vl(e, t, n);
                                break e
                            }
                            kl(e, t, r, n)
                        }
                        t = t.child
                    }
                    return t;
                case 5:
                    return to(t),
                    null === e && Ri(t),
                    r = t.type,
                    a = t.pendingProps,
                    o = null !== e ? e.memoizedProps : null,
                    l = a.children,
                    na(r, a) ? l = null : null !== o && na(r, o) && (t.flags |= 32),
                    jl(e, t),
                    kl(e, t, l, n),
                    t.child;
                case 6:
                    return null === e && Ri(t),
                    null;
                case 13:
                    return Al(e, t, n);
                case 4:
                    return Ji(t, t.stateNode.containerInfo),
                    r = t.pendingProps,
                    null === e ? t.child = Yi(t, null, r, n) : kl(e, t, r, n),
                    t.child;
                case 11:
                    return r = t.type,
                    a = t.pendingProps,
                    Sl(e, t, r, a = t.elementType === r ? a : Va(r, a), n);
                case 7:
                    return kl(e, t, t.pendingProps, n),
                    t.child;
                case 8:
                case 12:
                    return kl(e, t, t.pendingProps.children, n),
                    t.child;
                case 10:
                    e: {
                        if (r = t.type._context,
                        a = t.pendingProps,
                        o = t.memoizedProps,
                        l = a.value,
                        Oa($a, r._currentValue),
                        r._currentValue = l,
                        null !== o)
                            if (lr(o.value, l)) {
                                if (o.children === a.children && !_a.current) {
                                    t = Vl(e, t, n);
                                    break e
                                }
                            } else
                                for (null !== (o = t.child) && (o.return = t); null !== o; ) {
                                    var u = o.dependencies;
                                    if (null !== u) {
                                        l = o.child;
                                        for (var s = u.firstContext; null !== s; ) {
                                            if (s.context === r) {
                                                if (1 === o.tag) {
                                                    (s = ai(-1, n & -n)).tag = 2;
                                                    var c = o.updateQueue;
                                                    if (null !== c) {
                                                        var f = (c = c.shared).pending;
                                                        null === f ? s.next = s : (s.next = f.next,
                                                        f.next = s),
                                                        c.pending = s
                                                    }
                                                }
                                                o.lanes |= n,
                                                null !== (s = o.alternate) && (s.lanes |= n),
                                                Ga(o.return, n, t),
                                                u.lanes |= n;
                                                break
                                            }
                                            s = s.next
                                        }
                                    } else if (10 === o.tag)
                                        l = o.type === t.type ? null : o.child;
                                    else if (18 === o.tag) {
                                        if (null === (l = o.return))
                                            throw Error(i(341));
                                        l.lanes |= n,
                                        null !== (u = l.alternate) && (u.lanes |= n),
                                        Ga(l, n, t),
                                        l = o.sibling
                                    } else
                                        l = o.child;
                                    if (null !== l)
                                        l.return = o;
                                    else
                                        for (l = o; null !== l; ) {
                                            if (l === t) {
                                                l = null;
                                                break
                                            }
                                            if (null !== (o = l.sibling)) {
                                                o.return = l.return,
                                                l = o;
                                                break
                                            }
                                            l = l.return
                                        }
                                    o = l
                                }
                        kl(e, t, a.children, n),
                        t = t.child
                    }
                    return t;
                case 9:
                    return a = t.type,
                    r = t.pendingProps.children,
                    Za(t, n),
                    r = r(a = Ja(a)),
                    t.flags |= 1,
                    kl(e, t, r, n),
                    t.child;
                case 14:
                    return a = Va(r = t.type, t.pendingProps),
                    El(e, t, r, a = Va(r.type, a), n);
                case 15:
                    return Cl(e, t, t.type, t.pendingProps, n);
                case 17:
                    return r = t.type,
                    a = t.pendingProps,
                    a = t.elementType === r ? a : Va(r, a),
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.flags |= 2),
                    t.tag = 1,
                    za(r) ? (e = !0,
                    Aa(t)) : e = !1,
                    Za(t, n),
                    mi(t, r, a),
                    vi(t, r, a, n),
                    Nl(null, t, r, !0, e, n);
                case 19:
                    return Bl(e, t, n);
                case 22:
                    return Ol(e, t, n)
                }
                throw Error(i(156, t.tag))
            }
            ;
            var Qs = "function" === typeof reportError ? reportError : function(e) {
                console.error(e)
            }
            ;
            function qs(e) {
                this._internalRoot = e
            }
            function Ks(e) {
                this._internalRoot = e
            }
            function Xs(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }
            function Gs(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }
            function Zs() {}
            function Js(e, t, n, r, a) {
                var i = n._reactRootContainer;
                if (i) {
                    var o = i;
                    if ("function" === typeof a) {
                        var l = a;
                        a = function() {
                            var e = Vs(o);
                            l.call(e)
                        }
                    }
                    Bs(t, o, e, a)
                } else
                    o = function(e, t, n, r, a) {
                        if (a) {
                            if ("function" === typeof r) {
                                var i = r;
                                r = function() {
                                    var e = Vs(o);
                                    i.call(e)
                                }
                            }
                            var o = Ws(t, r, e, 0, null, !1, 0, "", Zs);
                            return e._reactRootContainer = o,
                            e[ma] = o.current,
                            Wr(8 === e.nodeType ? e.parentNode : e),
                            ss(),
                            o
                        }
                        for (; a = e.lastChild; )
                            e.removeChild(a);
                        if ("function" === typeof r) {
                            var l = r;
                            r = function() {
                                var e = Vs(u);
                                l.call(e)
                            }
                        }
                        var u = Is(e, 0, !1, null, 0, !1, 0, "", Zs);
                        return e._reactRootContainer = u,
                        e[ma] = u.current,
                        Wr(8 === e.nodeType ? e.parentNode : e),
                        ss((function() {
                            Bs(t, u, n, r)
                        }
                        )),
                        u
                    }(n, t, e, a, r);
                return Vs(o)
            }
            Ks.prototype.render = qs.prototype.render = function(e) {
                var t = this._internalRoot;
                if (null === t)
                    throw Error(i(409));
                Bs(e, t, null, null)
            }
            ,
            Ks.prototype.unmount = qs.prototype.unmount = function() {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    ss((function() {
                        Bs(null, e, null, null)
                    }
                    )),
                    t[ma] = null
                }
            }
            ,
            Ks.prototype.unstable_scheduleHydration = function(e) {
                if (e) {
                    var t = Et();
                    e = {
                        blockedOn: null,
                        target: e,
                        priority: t
                    };
                    for (var n = 0; n < Mt.length && 0 !== t && t < Mt[n].priority; n++)
                        ;
                    Mt.splice(n, 0, e),
                    0 === n && Rt(e)
                }
            }
            ,
            xt = function(e) {
                switch (e.tag) {
                case 3:
                    var t = e.stateNode;
                    if (t.current.memoizedState.isDehydrated) {
                        var n = ft(t.pendingLanes);
                        0 !== n && (yt(t, 1 | n),
                        ns(t, Ge()),
                        0 === (6 & Cu) && (Iu = Ge() + 500,
                        Wa()))
                    }
                    break;
                case 13:
                    var r = Gu();
                    ss((function() {
                        return Ju(e, 1, r)
                    }
                    )),
                    Ys(e, 1)
                }
            }
            ,
            kt = function(e) {
                13 === e.tag && (Ju(e, 134217728, Gu()),
                Ys(e, 134217728))
            }
            ,
            St = function(e) {
                if (13 === e.tag) {
                    var t = Gu()
                      , n = Zu(e);
                    Ju(e, n, t),
                    Ys(e, n)
                }
            }
            ,
            Et = function() {
                return bt
            }
            ,
            Ct = function(e, t) {
                var n = bt;
                try {
                    return bt = e,
                    t()
                } finally {
                    bt = n
                }
            }
            ,
            ke = function(e, t, n) {
                switch (t) {
                case "input":
                    if (Z(e, n),
                    t = n.name,
                    "radio" === n.type && null != t) {
                        for (n = e; n.parentNode; )
                            n = n.parentNode;
                        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                        t = 0; t < n.length; t++) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var a = xa(r);
                                if (!a)
                                    throw Error(i(90));
                                Q(r),
                                Z(r, a)
                            }
                        }
                    }
                    break;
                case "textarea":
                    ie(e, n);
                    break;
                case "select":
                    null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                }
            }
            ,
            Pe = us,
            _e = ss;
            var ec = {
                usingClientEntryPoint: !1,
                Events: [ba, wa, xa, Oe, je, us]
            }
              , tc = {
                findFiberByHostInstance: ya,
                bundleType: 0,
                version: "18.1.0",
                rendererPackageName: "react-dom"
            }
              , nc = {
                bundleType: tc.bundleType,
                version: tc.version,
                rendererPackageName: tc.rendererPackageName,
                rendererConfig: tc.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: w.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(e) {
                    return null === (e = $e(e)) ? null : e.stateNode
                },
                findFiberByHostInstance: tc.findFiberByHostInstance || function() {
                    return null
                }
                ,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.1.0-next-22edb9f77-20220426"
            };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!rc.isDisabled && rc.supportsFiber)
                    try {
                        at = rc.inject(nc),
                        it = rc
                    } catch (ce) {}
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec,
            t.createPortal = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Xs(t))
                    throw Error(i(200));
                return Us(e, t, null, n)
            }
            ,
            t.createRoot = function(e, t) {
                if (!Xs(e))
                    throw Error(i(299));
                var n = !1
                  , r = ""
                  , a = Qs;
                return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
                t = Is(e, 1, !1, null, 0, n, 0, r, a),
                e[ma] = t.current,
                Wr(8 === e.nodeType ? e.parentNode : e),
                new qs(t)
            }
            ,
            t.findDOMNode = function(e) {
                if (null == e)
                    return null;
                if (1 === e.nodeType)
                    return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" === typeof e.render)
                        throw Error(i(188));
                    throw e = Object.keys(e).join(","),
                    Error(i(268, e))
                }
                return e = null === (e = $e(t)) ? null : e.stateNode
            }
            ,
            t.flushSync = function(e) {
                return ss(e)
            }
            ,
            t.hydrate = function(e, t, n) {
                if (!Gs(t))
                    throw Error(i(200));
                return Js(null, e, t, !0, n)
            }
            ,
            t.hydrateRoot = function(e, t, n) {
                if (!Xs(e))
                    throw Error(i(405));
                var r = null != n && n.hydratedSources || null
                  , a = !1
                  , o = ""
                  , l = Qs;
                if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
                t = Ws(t, null, e, 1, null != n ? n : null, a, 0, o, l),
                e[ma] = t.current,
                Wr(e),
                r)
                    for (e = 0; e < r.length; e++)
                        a = (a = (n = r[e])._getVersion)(n._source),
                        null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
                return new Ks(t)
            }
            ,
            t.render = function(e, t, n) {
                if (!Gs(t))
                    throw Error(i(200));
                return Js(null, e, t, !1, n)
            }
            ,
            t.unmountComponentAtNode = function(e) {
                if (!Gs(e))
                    throw Error(i(40));
                return !!e._reactRootContainer && (ss((function() {
                    Js(null, null, e, !1, (function() {
                        e._reactRootContainer = null,
                        e[ma] = null
                    }
                    ))
                }
                )),
                !0)
            }
            ,
            t.unstable_batchedUpdates = us,
            t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                if (!Gs(n))
                    throw Error(i(200));
                if (null == e || void 0 === e._reactInternals)
                    throw Error(i(38));
                return Js(e, t, n, !1, r)
            }
            ,
            t.version = "18.1.0-next-22edb9f77-20220426"
        },
        250: function(e, t, n) {
            "use strict";
            var r = n(164);
            t.createRoot = r.createRoot,
            t.hydrateRoot = r.hydrateRoot
        },
        164: function(e, t, n) {
            "use strict";
            !function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
            }(),
            e.exports = n(463)
        },
        97: function(e, t, n) {
            var r;
            r = function(e) {
                return function(e) {
                    var t = {};
                    function n(r) {
                        if (t[r])
                            return t[r].exports;
                        var a = t[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(a.exports, a, a.exports, n),
                        a.l = !0,
                        a.exports
                    }
                    return n.m = e,
                    n.c = t,
                    n.d = function(e, t, r) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: r
                        })
                    }
                    ,
                    n.r = function(e) {
                        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }),
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }
                    ,
                    n.t = function(e, t) {
                        if (1 & t && (e = n(e)),
                        8 & t)
                            return e;
                        if (4 & t && "object" === typeof e && e && e.__esModule)
                            return e;
                        var r = Object.create(null);
                        if (n.r(r),
                        Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }),
                        2 & t && "string" != typeof e)
                            for (var a in e)
                                n.d(r, a, function(t) {
                                    return e[t]
                                }
                                .bind(null, a));
                        return r
                    }
                    ,
                    n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        }
                        : function() {
                            return e
                        }
                        ;
                        return n.d(t, "a", t),
                        t
                    }
                    ,
                    n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    ,
                    n.p = "",
                    n(n.s = "./src/react-webcam.tsx")
                }({
                    "./src/react-webcam.tsx": function(e, t, n) {
                        "use strict";
                        n.r(t);
                        var r = n("react")
                          , a = function() {
                            var e = function(t, n) {
                                return e = Object.setPrototypeOf || {
                                    __proto__: []
                                }instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                }
                                || function(e, t) {
                                    for (var n in t)
                                        t.hasOwnProperty(n) && (e[n] = t[n])
                                }
                                ,
                                e(t, n)
                            };
                            return function(t, n) {
                                function r() {
                                    this.constructor = t
                                }
                                e(t, n),
                                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                                new r)
                            }
                        }()
                          , i = function() {
                            return i = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var a in t = arguments[n])
                                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                return e
                            }
                            ,
                            i.apply(this, arguments)
                        }
                          , o = function(e, t) {
                            var n = {};
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                                var a = 0;
                                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                                    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
                            }
                            return n
                        };
                        function l() {
                            return !(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
                        }
                        "undefined" !== typeof window && (void 0 === navigator.mediaDevices && (navigator.mediaDevices = {}),
                        void 0 === navigator.mediaDevices.getUserMedia && (navigator.mediaDevices.getUserMedia = function(e) {
                            var t = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                            return t ? new Promise((function(n, r) {
                                t.call(navigator, e, n, r)
                            }
                            )) : Promise.reject(new Error("getUserMedia is not implemented in this browser"))
                        }
                        ));
                        var u = function(e) {
                            function t(t) {
                                var n = e.call(this, t) || this;
                                return n.canvas = null,
                                n.ctx = null,
                                n.requestUserMediaId = 0,
                                n.unmounted = !1,
                                n.state = {
                                    hasUserMedia: !1
                                },
                                n
                            }
                            return a(t, e),
                            t.prototype.componentDidMount = function() {
                                var e = this.state
                                  , t = this.props;
                                this.unmounted = !1,
                                l() ? (e.hasUserMedia || this.requestUserMedia(),
                                t.children && "function" != typeof t.children && console.warn("children must be a function")) : t.onUserMediaError("getUserMedia not supported")
                            }
                            ,
                            t.prototype.componentDidUpdate = function(e) {
                                var t = this.props;
                                if (l()) {
                                    var n = JSON.stringify(e.audioConstraints) !== JSON.stringify(t.audioConstraints)
                                      , r = JSON.stringify(e.videoConstraints) !== JSON.stringify(t.videoConstraints)
                                      , a = e.minScreenshotWidth !== t.minScreenshotWidth
                                      , i = e.minScreenshotHeight !== t.minScreenshotHeight;
                                    (r || a || i) && (this.canvas = null,
                                    this.ctx = null),
                                    (n || r) && (this.stopAndCleanup(),
                                    this.requestUserMedia())
                                } else
                                    t.onUserMediaError("getUserMedia not supported")
                            }
                            ,
                            t.prototype.componentWillUnmount = function() {
                                this.unmounted = !0,
                                this.stopAndCleanup()
                            }
                            ,
                            t.stopMediaStream = function(e) {
                                e && (e.getVideoTracks && e.getAudioTracks ? (e.getVideoTracks().map((function(t) {
                                    e.removeTrack(t),
                                    t.stop()
                                }
                                )),
                                e.getAudioTracks().map((function(t) {
                                    e.removeTrack(t),
                                    t.stop()
                                }
                                ))) : e.stop())
                            }
                            ,
                            t.prototype.stopAndCleanup = function() {
                                var e = this.state;
                                e.hasUserMedia && (t.stopMediaStream(this.stream),
                                e.src && window.URL.revokeObjectURL(e.src))
                            }
                            ,
                            t.prototype.getScreenshot = function(e) {
                                var t = this.state
                                  , n = this.props;
                                if (!t.hasUserMedia)
                                    return null;
                                var r = this.getCanvas(e);
                                return r && r.toDataURL(n.screenshotFormat, n.screenshotQuality)
                            }
                            ,
                            t.prototype.getCanvas = function(e) {
                                var t = this.state
                                  , n = this.props;
                                if (!this.video)
                                    return null;
                                if (!t.hasUserMedia || !this.video.videoHeight)
                                    return null;
                                if (!this.ctx) {
                                    var r = this.video.videoWidth
                                      , a = this.video.videoHeight;
                                    if (!this.props.forceScreenshotSourceSize) {
                                        var i = r / a;
                                        a = (r = n.minScreenshotWidth || this.video.clientWidth) / i,
                                        n.minScreenshotHeight && a < n.minScreenshotHeight && (r = (a = n.minScreenshotHeight) * i)
                                    }
                                    this.canvas = document.createElement("canvas"),
                                    this.canvas.width = (null === e || void 0 === e ? void 0 : e.width) || r,
                                    this.canvas.height = (null === e || void 0 === e ? void 0 : e.height) || a,
                                    this.ctx = this.canvas.getContext("2d")
                                }
                                var o = this.ctx
                                  , l = this.canvas;
                                return o && l && (n.mirrored && (o.translate(l.width, 0),
                                o.scale(-1, 1)),
                                o.imageSmoothingEnabled = n.imageSmoothing,
                                o.drawImage(this.video, 0, 0, (null === e || void 0 === e ? void 0 : e.width) || l.width, (null === e || void 0 === e ? void 0 : e.height) || l.height),
                                n.mirrored && (o.scale(-1, 1),
                                o.translate(-l.width, 0))),
                                l
                            }
                            ,
                            t.prototype.requestUserMedia = function() {
                                var e = this
                                  , n = this.props
                                  , r = function(r, a) {
                                    var i = {
                                        video: "undefined" === typeof a || a
                                    };
                                    n.audio && (i.audio = "undefined" === typeof r || r),
                                    e.requestUserMediaId++;
                                    var o = e.requestUserMediaId;
                                    navigator.mediaDevices.getUserMedia(i).then((function(n) {
                                        e.unmounted || o !== e.requestUserMediaId ? t.stopMediaStream(n) : e.handleUserMedia(null, n)
                                    }
                                    )).catch((function(t) {
                                        e.handleUserMedia(t)
                                    }
                                    ))
                                };
                                if ("mediaDevices"in navigator)
                                    r(n.audioConstraints, n.videoConstraints);
                                else {
                                    var a = function(e) {
                                        return {
                                            optional: [{
                                                sourceId: e
                                            }]
                                        }
                                    }
                                      , i = function(e) {
                                        var t = e.deviceId;
                                        return "string" === typeof t ? t : Array.isArray(t) && t.length > 0 ? t[0] : "object" === typeof t && t.ideal ? t.ideal : null
                                    };
                                    MediaStreamTrack.getSources((function(e) {
                                        var t = null
                                          , o = null;
                                        e.forEach((function(e) {
                                            "audio" === e.kind ? t = e.id : "video" === e.kind && (o = e.id)
                                        }
                                        ));
                                        var l = i(n.audioConstraints);
                                        l && (t = l);
                                        var u = i(n.videoConstraints);
                                        u && (o = u),
                                        r(a(t), a(o))
                                    }
                                    ))
                                }
                            }
                            ,
                            t.prototype.handleUserMedia = function(e, t) {
                                var n = this.props;
                                if (e || !t)
                                    return this.setState({
                                        hasUserMedia: !1
                                    }),
                                    void n.onUserMediaError(e);
                                this.stream = t;
                                try {
                                    this.video && (this.video.srcObject = t),
                                    this.setState({
                                        hasUserMedia: !0
                                    })
                                } catch (r) {
                                    this.setState({
                                        hasUserMedia: !0,
                                        src: window.URL.createObjectURL(t)
                                    })
                                }
                                n.onUserMedia(t)
                            }
                            ,
                            t.prototype.render = function() {
                                var e = this
                                  , t = this.state
                                  , n = this.props
                                  , a = n.audio
                                  , l = (n.forceScreenshotSourceSize,
                                n.onUserMedia,
                                n.onUserMediaError,
                                n.screenshotFormat,
                                n.screenshotQuality,
                                n.minScreenshotWidth,
                                n.minScreenshotHeight,
                                n.audioConstraints,
                                n.videoConstraints,
                                n.imageSmoothing,
                                n.mirrored)
                                  , u = n.style
                                  , s = void 0 === u ? {} : u
                                  , c = n.children
                                  , f = o(n, ["audio", "forceScreenshotSourceSize", "onUserMedia", "onUserMediaError", "screenshotFormat", "screenshotQuality", "minScreenshotWidth", "minScreenshotHeight", "audioConstraints", "videoConstraints", "imageSmoothing", "mirrored", "style", "children"])
                                  , d = l ? i(i({}, s), {
                                    transform: (s.transform || "") + " scaleX(-1)"
                                }) : s
                                  , p = {
                                    getScreenshot: this.getScreenshot.bind(this)
                                };
                                return r.createElement(r.Fragment, null, r.createElement("video", i({
                                    autoPlay: !0,
                                    src: t.src,
                                    muted: !a,
                                    playsInline: !0,
                                    ref: function(t) {
                                        e.video = t
                                    },
                                    style: d
                                }, f)), c && c(p))
                            }
                            ,
                            t.defaultProps = {
                                audio: !1,
                                forceScreenshotSourceSize: !1,
                                imageSmoothing: !0,
                                mirrored: !1,
                                onUserMedia: function() {},
                                onUserMediaError: function() {},
                                screenshotFormat: "image/webp",
                                screenshotQuality: .92
                            },
                            t
                        }(r.Component);
                        t.default = u
                    },
                    react: function(t, n) {
                        t.exports = e
                    }
                }).default
            }
            ,
            e.exports = r(n(791))
        },
        374: function(e, t, n) {
            "use strict";
            var r = n(791)
              , a = Symbol.for("react.element")
              , i = Symbol.for("react.fragment")
              , o = Object.prototype.hasOwnProperty
              , l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
              , u = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function s(e, t, n) {
                var r, i = {}, s = null, c = null;
                for (r in void 0 !== n && (s = "" + n),
                void 0 !== t.key && (s = "" + t.key),
                void 0 !== t.ref && (c = t.ref),
                t)
                    o.call(t, r) && !u.hasOwnProperty(r) && (i[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in t = e.defaultProps)
                        void 0 === i[r] && (i[r] = t[r]);
                return {
                    $$typeof: a,
                    type: e,
                    key: s,
                    ref: c,
                    props: i,
                    _owner: l.current
                }
            }
            t.Fragment = i,
            t.jsx = s,
            t.jsxs = s
        },
        117: function(e, t) {
            "use strict";
            var n = Symbol.for("react.element")
              , r = Symbol.for("react.portal")
              , a = Symbol.for("react.fragment")
              , i = Symbol.for("react.strict_mode")
              , o = Symbol.for("react.profiler")
              , l = Symbol.for("react.provider")
              , u = Symbol.for("react.context")
              , s = Symbol.for("react.forward_ref")
              , c = Symbol.for("react.suspense")
              , f = Symbol.for("react.memo")
              , d = Symbol.for("react.lazy")
              , p = Symbol.iterator;
            var m = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }
              , h = Object.assign
              , v = {};
            function g(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = v,
                this.updater = n || m
            }
            function y() {}
            function b(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = v,
                this.updater = n || m
            }
            g.prototype.isReactComponent = {},
            g.prototype.setState = function(e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e)
                    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }
            ,
            g.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }
            ,
            y.prototype = g.prototype;
            var w = b.prototype = new y;
            w.constructor = b,
            h(w, g.prototype),
            w.isPureReactComponent = !0;
            var x = Array.isArray
              , k = Object.prototype.hasOwnProperty
              , S = {
                current: null
            }
              , E = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function C(e, t, r) {
                var a, i = {}, o = null, l = null;
                if (null != t)
                    for (a in void 0 !== t.ref && (l = t.ref),
                    void 0 !== t.key && (o = "" + t.key),
                    t)
                        k.call(t, a) && !E.hasOwnProperty(a) && (i[a] = t[a]);
                var u = arguments.length - 2;
                if (1 === u)
                    i.children = r;
                else if (1 < u) {
                    for (var s = Array(u), c = 0; c < u; c++)
                        s[c] = arguments[c + 2];
                    i.children = s
                }
                if (e && e.defaultProps)
                    for (a in u = e.defaultProps)
                        void 0 === i[a] && (i[a] = u[a]);
                return {
                    $$typeof: n,
                    type: e,
                    key: o,
                    ref: l,
                    props: i,
                    _owner: S.current
                }
            }
            function O(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }
            var j = /\/+/g;
            function P(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }
                    ))
                }("" + e.key) : t.toString(36)
            }
            function _(e, t, a, i, o) {
                var l = typeof e;
                "undefined" !== l && "boolean" !== l || (e = null);
                var u = !1;
                if (null === e)
                    u = !0;
                else
                    switch (l) {
                    case "string":
                    case "number":
                        u = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                        case n:
                        case r:
                            u = !0
                        }
                    }
                if (u)
                    return o = o(u = e),
                    e = "" === i ? "." + P(u, 0) : i,
                    x(o) ? (a = "",
                    null != e && (a = e.replace(j, "$&/") + "/"),
                    _(o, t, a, "", (function(e) {
                        return e
                    }
                    ))) : null != o && (O(o) && (o = function(e, t) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(o, a + (!o.key || u && u.key === o.key ? "" : ("" + o.key).replace(j, "$&/") + "/") + e)),
                    t.push(o)),
                    1;
                if (u = 0,
                i = "" === i ? "." : i + ":",
                x(e))
                    for (var s = 0; s < e.length; s++) {
                        var c = i + P(l = e[s], s);
                        u += _(l, t, a, c, o)
                    }
                else if (c = function(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof (e = p && e[p] || e["@@iterator"]) ? e : null
                }(e),
                "function" === typeof c)
                    for (e = c.call(e),
                    s = 0; !(l = e.next()).done; )
                        u += _(l = l.value, t, a, c = i + P(l, s++), o);
                else if ("object" === l)
                    throw t = String(e),
                    Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return u
            }
            function N(e, t, n) {
                if (null == e)
                    return e;
                var r = []
                  , a = 0;
                return _(e, r, "", "", (function(e) {
                    return t.call(n, e, a++)
                }
                )),
                r
            }
            function T(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1,
                        e._result = t)
                    }
                    ), (function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2,
                        e._result = t)
                    }
                    )),
                    -1 === e._status && (e._status = 0,
                    e._result = t)
                }
                if (1 === e._status)
                    return e._result.default;
                throw e._result
            }
            var z = {
                current: null
            }
              , M = {
                transition: null
            }
              , L = {
                ReactCurrentDispatcher: z,
                ReactCurrentBatchConfig: M,
                ReactCurrentOwner: S
            };
            t.Children = {
                map: N,
                forEach: function(e, t, n) {
                    N(e, (function() {
                        t.apply(this, arguments)
                    }
                    ), n)
                },
                count: function(e) {
                    var t = 0;
                    return N(e, (function() {
                        t++
                    }
                    )),
                    t
                },
                toArray: function(e) {
                    return N(e, (function(e) {
                        return e
                    }
                    )) || []
                },
                only: function(e) {
                    if (!O(e))
                        throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            },
            t.Component = g,
            t.Fragment = a,
            t.Profiler = o,
            t.PureComponent = b,
            t.StrictMode = i,
            t.Suspense = c,
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L,
            t.cloneElement = function(e, t, r) {
                if (null === e || void 0 === e)
                    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var a = h({}, e.props)
                  , i = e.key
                  , o = e.ref
                  , l = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (o = t.ref,
                    l = S.current),
                    void 0 !== t.key && (i = "" + t.key),
                    e.type && e.type.defaultProps)
                        var u = e.type.defaultProps;
                    for (s in t)
                        k.call(t, s) && !E.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s])
                }
                var s = arguments.length - 2;
                if (1 === s)
                    a.children = r;
                else if (1 < s) {
                    u = Array(s);
                    for (var c = 0; c < s; c++)
                        u[c] = arguments[c + 2];
                    a.children = u
                }
                return {
                    $$typeof: n,
                    type: e.type,
                    key: i,
                    ref: o,
                    props: a,
                    _owner: l
                }
            }
            ,
            t.createContext = function(e) {
                return (e = {
                    $$typeof: u,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {
                    $$typeof: l,
                    _context: e
                },
                e.Consumer = e
            }
            ,
            t.createElement = C,
            t.createFactory = function(e) {
                var t = C.bind(null, e);
                return t.type = e,
                t
            }
            ,
            t.createRef = function() {
                return {
                    current: null
                }
            }
            ,
            t.forwardRef = function(e) {
                return {
                    $$typeof: s,
                    render: e
                }
            }
            ,
            t.isValidElement = O,
            t.lazy = function(e) {
                return {
                    $$typeof: d,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: T
                }
            }
            ,
            t.memo = function(e, t) {
                return {
                    $$typeof: f,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }
            ,
            t.startTransition = function(e) {
                var t = M.transition;
                M.transition = {};
                try {
                    e()
                } finally {
                    M.transition = t
                }
            }
            ,
            t.unstable_act = function() {
                throw Error("act(...) is not supported in production builds of React.")
            }
            ,
            t.useCallback = function(e, t) {
                return z.current.useCallback(e, t)
            }
            ,
            t.useContext = function(e) {
                return z.current.useContext(e)
            }
            ,
            t.useDebugValue = function() {}
            ,
            t.useDeferredValue = function(e) {
                return z.current.useDeferredValue(e)
            }
            ,
            t.useEffect = function(e, t) {
                return z.current.useEffect(e, t)
            }
            ,
            t.useId = function() {
                return z.current.useId()
            }
            ,
            t.useImperativeHandle = function(e, t, n) {
                return z.current.useImperativeHandle(e, t, n)
            }
            ,
            t.useInsertionEffect = function(e, t) {
                return z.current.useInsertionEffect(e, t)
            }
            ,
            t.useLayoutEffect = function(e, t) {
                return z.current.useLayoutEffect(e, t)
            }
            ,
            t.useMemo = function(e, t) {
                return z.current.useMemo(e, t)
            }
            ,
            t.useReducer = function(e, t, n) {
                return z.current.useReducer(e, t, n)
            }
            ,
            t.useRef = function(e) {
                return z.current.useRef(e)
            }
            ,
            t.useState = function(e) {
                return z.current.useState(e)
            }
            ,
            t.useSyncExternalStore = function(e, t, n) {
                return z.current.useSyncExternalStore(e, t, n)
            }
            ,
            t.useTransition = function() {
                return z.current.useTransition()
            }
            ,
            t.version = "18.1.0"
        },
        791: function(e, t, n) {
            "use strict";
            e.exports = n(117)
        },
        184: function(e, t, n) {
            "use strict";
            e.exports = n(374)
        },
        813: function(e, t) {
            "use strict";
            function n(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; 0 < n; ) {
                    var r = n - 1 >>> 1
                      , a = e[r];
                    if (!(0 < i(a, t)))
                        break e;
                    e[r] = t,
                    e[n] = a,
                    n = r
                }
            }
            function r(e) {
                return 0 === e.length ? null : e[0]
            }
            function a(e) {
                if (0 === e.length)
                    return null;
                var t = e[0]
                  , n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
                        var l = 2 * (r + 1) - 1
                          , u = e[l]
                          , s = l + 1
                          , c = e[s];
                        if (0 > i(u, n))
                            s < a && 0 > i(c, u) ? (e[r] = c,
                            e[s] = n,
                            r = s) : (e[r] = u,
                            e[l] = n,
                            r = l);
                        else {
                            if (!(s < a && 0 > i(c, n)))
                                break e;
                            e[r] = c,
                            e[s] = n,
                            r = s
                        }
                    }
                }
                return t
            }
            function i(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var o = performance;
                t.unstable_now = function() {
                    return o.now()
                }
            } else {
                var l = Date
                  , u = l.now();
                t.unstable_now = function() {
                    return l.now() - u
                }
            }
            var s = []
              , c = []
              , f = 1
              , d = null
              , p = 3
              , m = !1
              , h = !1
              , v = !1
              , g = "function" === typeof setTimeout ? setTimeout : null
              , y = "function" === typeof clearTimeout ? clearTimeout : null
              , b = "undefined" !== typeof setImmediate ? setImmediate : null;
            function w(e) {
                for (var t = r(c); null !== t; ) {
                    if (null === t.callback)
                        a(c);
                    else {
                        if (!(t.startTime <= e))
                            break;
                        a(c),
                        t.sortIndex = t.expirationTime,
                        n(s, t)
                    }
                    t = r(c)
                }
            }
            function x(e) {
                if (v = !1,
                w(e),
                !h)
                    if (null !== r(s))
                        h = !0,
                        M(k);
                    else {
                        var t = r(c);
                        null !== t && L(x, t.startTime - e)
                    }
            }
            function k(e, n) {
                h = !1,
                v && (v = !1,
                y(O),
                O = -1),
                m = !0;
                var i = p;
                try {
                    for (w(n),
                    d = r(s); null !== d && (!(d.expirationTime > n) || e && !_()); ) {
                        var o = d.callback;
                        if ("function" === typeof o) {
                            d.callback = null,
                            p = d.priorityLevel;
                            var l = o(d.expirationTime <= n);
                            n = t.unstable_now(),
                            "function" === typeof l ? d.callback = l : d === r(s) && a(s),
                            w(n)
                        } else
                            a(s);
                        d = r(s)
                    }
                    if (null !== d)
                        var u = !0;
                    else {
                        var f = r(c);
                        null !== f && L(x, f.startTime - n),
                        u = !1
                    }
                    return u
                } finally {
                    d = null,
                    p = i,
                    m = !1
                }
            }
            "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var S, E = !1, C = null, O = -1, j = 5, P = -1;
            function _() {
                return !(t.unstable_now() - P < j)
            }
            function N() {
                if (null !== C) {
                    var e = t.unstable_now();
                    P = e;
                    var n = !0;
                    try {
                        n = C(!0, e)
                    } finally {
                        n ? S() : (E = !1,
                        C = null)
                    }
                } else
                    E = !1
            }
            if ("function" === typeof b)
                S = function() {
                    b(N)
                }
                ;
            else if ("undefined" !== typeof MessageChannel) {
                var T = new MessageChannel
                  , z = T.port2;
                T.port1.onmessage = N,
                S = function() {
                    z.postMessage(null)
                }
            } else
                S = function() {
                    g(N, 0)
                }
                ;
            function M(e) {
                C = e,
                E || (E = !0,
                S())
            }
            function L(e, n) {
                O = g((function() {
                    e(t.unstable_now())
                }
                ), n)
            }
            t.unstable_IdlePriority = 5,
            t.unstable_ImmediatePriority = 1,
            t.unstable_LowPriority = 4,
            t.unstable_NormalPriority = 3,
            t.unstable_Profiling = null,
            t.unstable_UserBlockingPriority = 2,
            t.unstable_cancelCallback = function(e) {
                e.callback = null
            }
            ,
            t.unstable_continueExecution = function() {
                h || m || (h = !0,
                M(k))
            }
            ,
            t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < e ? Math.floor(1e3 / e) : 5
            }
            ,
            t.unstable_getCurrentPriorityLevel = function() {
                return p
            }
            ,
            t.unstable_getFirstCallbackNode = function() {
                return r(s)
            }
            ,
            t.unstable_next = function(e) {
                switch (p) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = p
                }
                var n = p;
                p = t;
                try {
                    return e()
                } finally {
                    p = n
                }
            }
            ,
            t.unstable_pauseExecution = function() {}
            ,
            t.unstable_requestPaint = function() {}
            ,
            t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
                }
                var n = p;
                p = e;
                try {
                    return t()
                } finally {
                    p = n
                }
            }
            ,
            t.unstable_scheduleCallback = function(e, a, i) {
                var o = t.unstable_now();
                switch ("object" === typeof i && null !== i ? i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o : i = o,
                e) {
                case 1:
                    var l = -1;
                    break;
                case 2:
                    l = 250;
                    break;
                case 5:
                    l = 1073741823;
                    break;
                case 4:
                    l = 1e4;
                    break;
                default:
                    l = 5e3
                }
                return e = {
                    id: f++,
                    callback: a,
                    priorityLevel: e,
                    startTime: i,
                    expirationTime: l = i + l,
                    sortIndex: -1
                },
                i > o ? (e.sortIndex = i,
                n(c, e),
                null === r(s) && e === r(c) && (v ? (y(O),
                O = -1) : v = !0,
                L(x, i - o))) : (e.sortIndex = l,
                n(s, e),
                h || m || (h = !0,
                M(k))),
                e
            }
            ,
            t.unstable_shouldYield = _,
            t.unstable_wrapCallback = function(e) {
                var t = p;
                return function() {
                    var n = p;
                    p = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        p = n
                    }
                }
            }
        },
        296: function(e, t, n) {
            "use strict";
            e.exports = n(813)
        },
        391: function(e) {
            "use strict";
            var t = function() {};
            e.exports = t
        }
    }
      , t = {};
    function n(r) {
        var a = t[r];
        if (void 0 !== a)
            return a.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.exports
    }
    n.m = e,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = function(e, t) {
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.f = {},
    n.e = function(e) {
        return Promise.all(Object.keys(n.f).reduce((function(t, r) {
            return n.f[r](e, t),
            t
        }
        ), []))
    }
    ,
    n.u = function(e) {
        return "static/js/" + e + ".b50e3af1.chunk.js"
    }
    ,
    n.miniCssF = function(e) {}
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    function() {
        var e = {}
          , t = "camera:";
        n.l = function(r, a, i, o) {
            if (e[r])
                e[r].push(a);
            else {
                var l, u;
                if (void 0 !== i)
                    for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                        var f = s[c];
                        if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == t + i) {
                            l = f;
                            break
                        }
                    }
                l || (u = !0,
                (l = document.createElement("script")).charset = "utf-8",
                l.timeout = 120,
                n.nc && l.setAttribute("nonce", n.nc),
                l.setAttribute("data-webpack", t + i),
                l.src = r),
                e[r] = [a];
                var d = function(t, n) {
                    l.onerror = l.onload = null,
                    clearTimeout(p);
                    var a = e[r];
                    if (delete e[r],
                    l.parentNode && l.parentNode.removeChild(l),
                    a && a.forEach((function(e) {
                        return e(n)
                    }
                    )),
                    t)
                        return t(n)
                }
                  , p = setTimeout(d.bind(null, void 0, {
                    type: "timeout",
                    target: l
                }), 12e4);
                l.onerror = d.bind(null, l.onerror),
                l.onload = d.bind(null, l.onload),
                u && document.head.appendChild(l)
            }
        }
    }(),
    n.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.p = "/",
    function() {
        var e = {
            179: 0
        };
        n.f.j = function(t, r) {
            var a = n.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a)
                    r.push(a[2]);
                else {
                    var i = new Promise((function(n, r) {
                        a = e[t] = [n, r]
                    }
                    ));
                    r.push(a[2] = i);
                    var o = n.p + n.u(t)
                      , l = new Error;
                    n.l(o, (function(r) {
                        if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0),
                        a)) {
                            var i = r && ("load" === r.type ? "missing" : r.type)
                              , o = r && r.target && r.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")",
                            l.name = "ChunkLoadError",
                            l.type = i,
                            l.request = o,
                            a[1](l)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var t = function(t, r) {
            var a, i, o = r[0], l = r[1], u = r[2], s = 0;
            if (o.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (a in l)
                    n.o(l, a) && (n.m[a] = l[a]);
                if (u)
                    u(n)
            }
            for (t && t(r); s < o.length; s++)
                i = o[s],
                n.o(e, i) && e[i] && e[i][0](),
                e[i] = 0
        }
          , r = self.webpackChunkcamera = self.webpackChunkcamera || [];
        r.forEach(t.bind(null, 0)),
        r.push = t.bind(null, r.push.bind(r))
    }(),
    function() {
        "use strict";
        var e = n(791)
          , t = n(250);
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function a(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
            }
        }
        function i(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, a, i = [], o = !0, l = !1;
                    try {
                        for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                        !t || i.length !== t); o = !0)
                            ;
                    } catch (u) {
                        l = !0,
                        a = u
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (l)
                                throw a
                        }
                    }
                    return i
                }
            }(e, t) || a(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var o = n(97)
          , l = n.n(o);
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function(t) {
                    u(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function f(e, t) {
            if (null == e)
                return {};
            var n, r, a = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
        }
        function d(e, t) {
            if (null == e)
                return {};
            var n, r, a = f(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }
        var p = n(694)
          , m = n.n(p)
          , h = n(184)
          , v = ["as", "disabled"];
        function g(e) {
            var t = e.tagName
              , n = e.disabled
              , r = e.href
              , a = e.target
              , i = e.rel
              , o = e.onClick
              , l = e.tabIndex
              , u = void 0 === l ? 0 : l
              , s = e.type;
            t || (t = null != r || null != a || null != i ? "a" : "button");
            var c = {
                tagName: t
            };
            if ("button" === t)
                return [{
                    type: s || "button",
                    disabled: n
                }, c];
            var f = function(e) {
                (n || "a" === t && function(e) {
                    return !e || "#" === e.trim()
                }(r)) && e.preventDefault(),
                n ? e.stopPropagation() : null == o || o(e)
            };
            return [{
                role: "button",
                disabled: void 0,
                tabIndex: n ? void 0 : u,
                href: "a" === t && n ? void 0 : r,
                target: "a" === t ? a : void 0,
                "aria-disabled": n || void 0,
                rel: "a" === t ? i : void 0,
                onClick: f,
                onKeyDown: function(e) {
                    " " === e.key && (e.preventDefault(),
                    f(e))
                }
            }, c]
        }
        var y = e.forwardRef((function(e, t) {
            var n = e.as
              , r = e.disabled
              , a = function(e, t) {
                if (null == e)
                    return {};
                var n, r, a = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, v)
              , o = i(g(Object.assign({
                tagName: n,
                disabled: r
            }, a)), 2)
              , l = o[0]
              , u = o[1].tagName;
            return (0,
            h.jsx)(u, Object.assign({}, a, l, {
                ref: t
            }))
        }
        ));
        y.displayName = "Button";
        var b = e.createContext({
            prefixes: {}
        });
        b.Consumer,
        b.Provider;
        function w(t, n) {
            var r = (0,
            e.useContext)(b).prefixes;
            return t || r[n] || n
        }
        function x() {
            return "rtl" === (0,
            e.useContext)(b).dir
        }
        var k = ["as", "bsPrefix", "variant", "size", "active", "className"]
          , S = e.forwardRef((function(e, t) {
            var n = e.as
              , r = e.bsPrefix
              , a = e.variant
              , o = e.size
              , l = e.active
              , u = e.className
              , s = d(e, k)
              , f = w(r, "btn")
              , p = i(g(c({
                tagName: n
            }, s)), 2)
              , v = p[0]
              , y = p[1].tagName;
            return (0,
            h.jsx)(y, c(c(c({}, s), v), {}, {
                ref: t,
                className: m()(u, f, l && "active", a && "".concat(f, "-").concat(a), o && "".concat(f, "-").concat(o), s.href && s.disabled && "disabled")
            }))
        }
        ));
        S.displayName = "Button",
        S.defaultProps = {
            variant: "primary",
            active: !1,
            disabled: !1
        };
        var E = S
          , C = ["bsPrefix", "fluid", "as", "className"]
          , O = e.forwardRef((function(e, t) {
            var n = e.bsPrefix
              , r = e.fluid
              , a = e.as
              , i = void 0 === a ? "div" : a
              , o = e.className
              , l = d(e, C)
              , u = w(n, "container")
              , s = "string" === typeof r ? "-".concat(r) : "-fluid";
            return (0,
            h.jsx)(i, c(c({
                ref: t
            }, l), {}, {
                className: m()(o, r ? "".concat(u).concat(s) : u)
            }))
        }
        ));
        O.displayName = "Container",
        O.defaultProps = {
            fluid: !1
        };
        var j = O
          , P = ["bsPrefix", "className", "as"]
          , _ = ["xxl", "xl", "lg", "md", "sm", "xs"]
          , N = e.forwardRef((function(e, t) {
            var n = e.bsPrefix
              , r = e.className
              , a = e.as
              , i = void 0 === a ? "div" : a
              , o = d(e, P)
              , l = w(n, "row")
              , u = "".concat(l, "-cols")
              , s = [];
            return _.forEach((function(e) {
                var t, n = o[e];
                delete o[e],
                t = null != n && "object" === typeof n ? n.cols : n;
                var r = "xs" !== e ? "-".concat(e) : "";
                null != t && s.push("".concat(u).concat(r, "-").concat(t))
            }
            )),
            (0,
            h.jsx)(i, c(c({
                ref: t
            }, o), {}, {
                className: m().apply(void 0, [r, l].concat(s))
            }))
        }
        ));
        N.displayName = "Row";
        var T = N
          , z = ["as", "bsPrefix", "className"]
          , M = ["className"]
          , L = ["xxl", "xl", "lg", "md", "sm", "xs"];
        var D = e.forwardRef((function(e, t) {
            var n = function(e) {
                var t = e.as
                  , n = e.bsPrefix
                  , r = e.className
                  , a = d(e, z);
                n = w(n, "col");
                var i = []
                  , o = [];
                return L.forEach((function(e) {
                    var t, r, l, u = a[e];
                    delete a[e],
                    "object" === typeof u && null != u ? (t = u.span,
                    r = u.offset,
                    l = u.order) : t = u;
                    var s = "xs" !== e ? "-".concat(e) : "";
                    t && i.push(!0 === t ? "".concat(n).concat(s) : "".concat(n).concat(s, "-").concat(t)),
                    null != l && o.push("order".concat(s, "-").concat(l)),
                    null != r && o.push("offset".concat(s, "-").concat(r))
                }
                )),
                [c(c({}, a), {}, {
                    className: m().apply(void 0, [r].concat(i, o))
                }), {
                    as: t,
                    bsPrefix: n,
                    spans: i
                }]
            }(e)
              , r = i(n, 2)
              , a = r[0]
              , o = a.className
              , l = d(a, M)
              , u = r[1]
              , s = u.as
              , f = void 0 === s ? "div" : s
              , p = u.bsPrefix
              , v = u.spans;
            return (0,
            h.jsx)(f, c(c({}, l), {}, {
                ref: t,
                className: m()(o, !v.length && p)
            }))
        }
        ));
        D.displayName = "Col";
        var A = D;
        function R(e) {
            return function(e) {
                if (Array.isArray(e))
                    return r(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || a(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function F(e, t) {
            return e.contains ? e.contains(t) : e.compareDocumentPosition ? e === t || !!(16 & e.compareDocumentPosition(t)) : void 0
        }
        function I(t) {
            var n = function(t) {
                var n = (0,
                e.useRef)(t);
                return n.current = t,
                n
            }(t);
            (0,
            e.useEffect)((function() {
                return function() {
                    return n.current()
                }
            }
            ), [])
        }
        var U = Math.pow(2, 31) - 1;
        function H(e, t, n) {
            var r = n - Date.now();
            e.current = r <= U ? setTimeout(t, r) : setTimeout((function() {
                return H(e, t, n)
            }
            ), U)
        }
        function W() {
            var t = function() {
                var t = (0,
                e.useRef)(!0)
                  , n = (0,
                e.useRef)((function() {
                    return t.current
                }
                ));
                return (0,
                e.useEffect)((function() {
                    return function() {
                        t.current = !1
                    }
                }
                ), []),
                n.current
            }()
              , n = (0,
            e.useRef)();
            return I((function() {
                return clearTimeout(n.current)
            }
            )),
            (0,
            e.useMemo)((function() {
                var e = function() {
                    return clearTimeout(n.current)
                };
                return {
                    set: function(r, a) {
                        void 0 === a && (a = 0),
                        t() && (e(),
                        a <= U ? n.current = setTimeout(r, a) : H(n, r, Date.now() + a))
                    },
                    clear: e
                }
            }
            ), [])
        }
        var B = n(391)
          , V = n.n(B);
        n(176);
        function $(t, n, r) {
            var a = (0,
            e.useRef)(void 0 !== t)
              , i = (0,
            e.useState)(n)
              , o = i[0]
              , l = i[1]
              , u = void 0 !== t
              , s = a.current;
            return a.current = u,
            !u && s && o !== n && l(n),
            [u ? t : o, (0,
            e.useCallback)((function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                    n[a - 1] = arguments[a];
                r && r.apply(void 0, [e].concat(n)),
                l(e)
            }
            ), [r])]
        }
        function Y() {
            var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
            null !== e && void 0 !== e && this.setState(e)
        }
        function Q(e) {
            this.setState(function(t) {
                var n = this.constructor.getDerivedStateFromProps(e, t);
                return null !== n && void 0 !== n ? n : null
            }
            .bind(this))
        }
        function q(e, t) {
            try {
                var n = this.props
                  , r = this.state;
                this.props = e,
                this.state = t,
                this.__reactInternalSnapshotFlag = !0,
                this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r)
            } finally {
                this.props = n,
                this.state = r
            }
        }
        Y.__suppressDeprecationWarning = !0,
        Q.__suppressDeprecationWarning = !0,
        q.__suppressDeprecationWarning = !0;
        var K = function(e) {
            return e && "function" !== typeof e ? function(t) {
                e.current = t
            }
            : e
        };
        var X = function(t, n) {
            return (0,
            e.useMemo)((function() {
                return function(e, t) {
                    var n = K(e)
                      , r = K(t);
                    return function(e) {
                        n && n(e),
                        r && r(e)
                    }
                }(t, n)
            }
            ), [t, n])
        }
          , G = n(164);
        function Z() {
            return (0,
            e.useState)(null)
        }
        var J = function(e) {
            return e && "function" !== typeof e ? function(t) {
                e.current = t
            }
            : e
        };
        var ee = function(t, n) {
            return (0,
            e.useMemo)((function() {
                return function(e, t) {
                    var n = J(e)
                      , r = J(t);
                    return function(e) {
                        n && n(e),
                        r && r(e)
                    }
                }(t, n)
            }
            ), [t, n])
        };
        function te(e, t) {
            var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = a(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var r = 0
                      , i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, l = !0, u = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return l = e.done,
                    e
                },
                e: function(e) {
                    u = !0,
                    o = e
                },
                f: function() {
                    try {
                        l || null == n.return || n.return()
                    } finally {
                        if (u)
                            throw o
                    }
                }
            }
        }
        var ne = Object.prototype.hasOwnProperty;
        function re(e, t, n) {
            var r, a = te(e.keys());
            try {
                for (a.s(); !(r = a.n()).done; )
                    if (ae(n = r.value, t))
                        return n
            } catch (i) {
                a.e(i)
            } finally {
                a.f()
            }
        }
        function ae(e, t) {
            var n, r, a;
            if (e === t)
                return !0;
            if (e && t && (n = e.constructor) === t.constructor) {
                if (n === Date)
                    return e.getTime() === t.getTime();
                if (n === RegExp)
                    return e.toString() === t.toString();
                if (n === Array) {
                    if ((r = e.length) === t.length)
                        for (; r-- && ae(e[r], t[r]); )
                            ;
                    return -1 === r
                }
                if (n === Set) {
                    if (e.size !== t.size)
                        return !1;
                    var i, o = te(e);
                    try {
                        for (o.s(); !(i = o.n()).done; ) {
                            if ((a = r = i.value) && "object" === typeof a && !(a = re(t, a)))
                                return !1;
                            if (!t.has(a))
                                return !1
                        }
                    } catch (s) {
                        o.e(s)
                    } finally {
                        o.f()
                    }
                    return !0
                }
                if (n === Map) {
                    if (e.size !== t.size)
                        return !1;
                    var l, u = te(e);
                    try {
                        for (u.s(); !(l = u.n()).done; ) {
                            if ((a = (r = l.value)[0]) && "object" === typeof a && !(a = re(t, a)))
                                return !1;
                            if (!ae(r[1], t.get(a)))
                                return !1
                        }
                    } catch (s) {
                        u.e(s)
                    } finally {
                        u.f()
                    }
                    return !0
                }
                if (n === ArrayBuffer)
                    e = new Uint8Array(e),
                    t = new Uint8Array(t);
                else if (n === DataView) {
                    if ((r = e.byteLength) === t.byteLength)
                        for (; r-- && e.getInt8(r) === t.getInt8(r); )
                            ;
                    return -1 === r
                }
                if (ArrayBuffer.isView(e)) {
                    if ((r = e.byteLength) === t.byteLength)
                        for (; r-- && e[r] === t[r]; )
                            ;
                    return -1 === r
                }
                if (!n || "object" === typeof e) {
                    for (n in r = 0,
                    e) {
                        if (ne.call(e, n) && ++r && !ne.call(t, n))
                            return !1;
                        if (!(n in t) || !ae(e[n], t[n]))
                            return !1
                    }
                    return Object.keys(t).length === r
                }
            }
            return e !== e && t !== t
        }
        var ie = function(t) {
            var n = function() {
                var t = (0,
                e.useRef)(!0)
                  , n = (0,
                e.useRef)((function() {
                    return t.current
                }
                ));
                return (0,
                e.useEffect)((function() {
                    return t.current = !0,
                    function() {
                        t.current = !1
                    }
                }
                ), []),
                n.current
            }();
            return [t[0], (0,
            e.useCallback)((function(e) {
                if (n())
                    return t[1](e)
            }
            ), [n, t[1]])]
        };
        function oe(e) {
            return e.split("-")[0]
        }
        function le(e) {
            if (null == e)
                return window;
            if ("[object Window]" !== e.toString()) {
                var t = e.ownerDocument;
                return t && t.defaultView || window
            }
            return e
        }
        function ue(e) {
            return e instanceof le(e).Element || e instanceof Element
        }
        function se(e) {
            return e instanceof le(e).HTMLElement || e instanceof HTMLElement
        }
        function ce(e) {
            return "undefined" !== typeof ShadowRoot && (e instanceof le(e).ShadowRoot || e instanceof ShadowRoot)
        }
        var fe = Math.max
          , de = Math.min
          , pe = Math.round;
        function me(e, t) {
            void 0 === t && (t = !1);
            var n = e.getBoundingClientRect()
              , r = 1
              , a = 1;
            if (se(e) && t) {
                var i = e.offsetHeight
                  , o = e.offsetWidth;
                o > 0 && (r = pe(n.width) / o || 1),
                i > 0 && (a = pe(n.height) / i || 1)
            }
            return {
                width: n.width / r,
                height: n.height / a,
                top: n.top / a,
                right: n.right / r,
                bottom: n.bottom / a,
                left: n.left / r,
                x: n.left / r,
                y: n.top / a
            }
        }
        function he(e) {
            var t = me(e)
              , n = e.offsetWidth
              , r = e.offsetHeight;
            return Math.abs(t.width - n) <= 1 && (n = t.width),
            Math.abs(t.height - r) <= 1 && (r = t.height),
            {
                x: e.offsetLeft,
                y: e.offsetTop,
                width: n,
                height: r
            }
        }
        function ve(e, t) {
            var n = t.getRootNode && t.getRootNode();
            if (e.contains(t))
                return !0;
            if (n && ce(n)) {
                var r = t;
                do {
                    if (r && e.isSameNode(r))
                        return !0;
                    r = r.parentNode || r.host
                } while (r)
            }
            return !1
        }
        function ge(e) {
            return e ? (e.nodeName || "").toLowerCase() : null
        }
        function ye(e) {
            return le(e).getComputedStyle(e)
        }
        function be(e) {
            return ["table", "td", "th"].indexOf(ge(e)) >= 0
        }
        function we(e) {
            return ((ue(e) ? e.ownerDocument : e.document) || window.document).documentElement
        }
        function xe(e) {
            return "html" === ge(e) ? e : e.assignedSlot || e.parentNode || (ce(e) ? e.host : null) || we(e)
        }
        function ke(e) {
            return se(e) && "fixed" !== ye(e).position ? e.offsetParent : null
        }
        function Se(e) {
            for (var t = le(e), n = ke(e); n && be(n) && "static" === ye(n).position; )
                n = ke(n);
            return n && ("html" === ge(n) || "body" === ge(n) && "static" === ye(n).position) ? t : n || function(e) {
                var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (-1 !== navigator.userAgent.indexOf("Trident") && se(e) && "fixed" === ye(e).position)
                    return null;
                var n = xe(e);
                for (ce(n) && (n = n.host); se(n) && ["html", "body"].indexOf(ge(n)) < 0; ) {
                    var r = ye(n);
                    if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter)
                        return n;
                    n = n.parentNode
                }
                return null
            }(e) || t
        }
        function Ee(e) {
            return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
        }
        function Ce(e, t, n) {
            return fe(e, de(t, n))
        }
        function Oe(e) {
            return Object.assign({}, {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, e)
        }
        function je(e, t) {
            return t.reduce((function(t, n) {
                return t[n] = e,
                t
            }
            ), {})
        }
        var Pe = "top"
          , _e = "bottom"
          , Ne = "right"
          , Te = "left"
          , ze = "auto"
          , Me = [Pe, _e, Ne, Te]
          , Le = "start"
          , De = "end"
          , Ae = "viewport"
          , Re = "popper"
          , Fe = Me.reduce((function(e, t) {
            return e.concat([t + "-" + Le, t + "-" + De])
        }
        ), [])
          , Ie = [].concat(Me, [ze]).reduce((function(e, t) {
            return e.concat([t, t + "-" + Le, t + "-" + De])
        }
        ), [])
          , Ue = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
        var He = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, o = n.modifiersData.popperOffsets, l = oe(n.placement), u = Ee(l), s = [Te, Ne].indexOf(l) >= 0 ? "height" : "width";
                if (i && o) {
                    var c = function(e, t) {
                        return Oe("number" !== typeof (e = "function" === typeof e ? e(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : e) ? e : je(e, Me))
                    }(a.padding, n)
                      , f = he(i)
                      , d = "y" === u ? Pe : Te
                      , p = "y" === u ? _e : Ne
                      , m = n.rects.reference[s] + n.rects.reference[u] - o[u] - n.rects.popper[s]
                      , h = o[u] - n.rects.reference[u]
                      , v = Se(i)
                      , g = v ? "y" === u ? v.clientHeight || 0 : v.clientWidth || 0 : 0
                      , y = m / 2 - h / 2
                      , b = c[d]
                      , w = g - f[s] - c[p]
                      , x = g / 2 - f[s] / 2 + y
                      , k = Ce(b, x, w)
                      , S = u;
                    n.modifiersData[r] = ((t = {})[S] = k,
                    t.centerOffset = k - x,
                    t)
                }
            },
            effect: function(e) {
                var t = e.state
                  , n = e.options.element
                  , r = void 0 === n ? "[data-popper-arrow]" : n;
                null != r && ("string" !== typeof r || (r = t.elements.popper.querySelector(r))) && ve(t.elements.popper, r) && (t.elements.arrow = r)
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        };
        function We(e) {
            return e.split("-")[1]
        }
        var Be = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };
        function Ve(e) {
            var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, o = e.offsets, l = e.position, u = e.gpuAcceleration, s = e.adaptive, c = e.roundOffsets, f = e.isFixed, d = o.x, p = void 0 === d ? 0 : d, m = o.y, h = void 0 === m ? 0 : m, v = "function" === typeof c ? c({
                x: p,
                y: h
            }) : {
                x: p,
                y: h
            };
            p = v.x,
            h = v.y;
            var g = o.hasOwnProperty("x")
              , y = o.hasOwnProperty("y")
              , b = Te
              , w = Pe
              , x = window;
            if (s) {
                var k = Se(n)
                  , S = "clientHeight"
                  , E = "clientWidth";
                if (k === le(n) && "static" !== ye(k = we(n)).position && "absolute" === l && (S = "scrollHeight",
                E = "scrollWidth"),
                k = k,
                a === Pe || (a === Te || a === Ne) && i === De)
                    w = _e,
                    h -= (f && k === x && x.visualViewport ? x.visualViewport.height : k[S]) - r.height,
                    h *= u ? 1 : -1;
                if (a === Te || (a === Pe || a === _e) && i === De)
                    b = Ne,
                    p -= (f && k === x && x.visualViewport ? x.visualViewport.width : k[E]) - r.width,
                    p *= u ? 1 : -1
            }
            var C, O = Object.assign({
                position: l
            }, s && Be), j = !0 === c ? function(e) {
                var t = e.x
                  , n = e.y
                  , r = window.devicePixelRatio || 1;
                return {
                    x: pe(t * r) / r || 0,
                    y: pe(n * r) / r || 0
                }
            }({
                x: p,
                y: h
            }) : {
                x: p,
                y: h
            };
            return p = j.x,
            h = j.y,
            u ? Object.assign({}, O, ((C = {})[w] = y ? "0" : "",
            C[b] = g ? "0" : "",
            C.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)",
            C)) : Object.assign({}, O, ((t = {})[w] = y ? h + "px" : "",
            t[b] = g ? p + "px" : "",
            t.transform = "",
            t))
        }
        var $e = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(e) {
                var t = e.state
                  , n = e.options
                  , r = n.gpuAcceleration
                  , a = void 0 === r || r
                  , i = n.adaptive
                  , o = void 0 === i || i
                  , l = n.roundOffsets
                  , u = void 0 === l || l
                  , s = {
                    placement: oe(t.placement),
                    variation: We(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: a,
                    isFixed: "fixed" === t.options.strategy
                };
                null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Ve(Object.assign({}, s, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: o,
                    roundOffsets: u
                })))),
                null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ve(Object.assign({}, s, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: u
                })))),
                t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-placement": t.placement
                })
            },
            data: {}
        }
          , Ye = {
            passive: !0
        };
        var Qe = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(e) {
                var t = e.state
                  , n = e.instance
                  , r = e.options
                  , a = r.scroll
                  , i = void 0 === a || a
                  , o = r.resize
                  , l = void 0 === o || o
                  , u = le(t.elements.popper)
                  , s = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return i && s.forEach((function(e) {
                    e.addEventListener("scroll", n.update, Ye)
                }
                )),
                l && u.addEventListener("resize", n.update, Ye),
                function() {
                    i && s.forEach((function(e) {
                        e.removeEventListener("scroll", n.update, Ye)
                    }
                    )),
                    l && u.removeEventListener("resize", n.update, Ye)
                }
            },
            data: {}
        }
          , qe = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        function Ke(e) {
            return e.replace(/left|right|bottom|top/g, (function(e) {
                return qe[e]
            }
            ))
        }
        var Xe = {
            start: "end",
            end: "start"
        };
        function Ge(e) {
            return e.replace(/start|end/g, (function(e) {
                return Xe[e]
            }
            ))
        }
        function Ze(e) {
            var t = le(e);
            return {
                scrollLeft: t.pageXOffset,
                scrollTop: t.pageYOffset
            }
        }
        function Je(e) {
            return me(we(e)).left + Ze(e).scrollLeft
        }
        function et(e) {
            var t = ye(e)
              , n = t.overflow
              , r = t.overflowX
              , a = t.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + a + r)
        }
        function tt(e) {
            return ["html", "body", "#document"].indexOf(ge(e)) >= 0 ? e.ownerDocument.body : se(e) && et(e) ? e : tt(xe(e))
        }
        function nt(e, t) {
            var n;
            void 0 === t && (t = []);
            var r = tt(e)
              , a = r === (null == (n = e.ownerDocument) ? void 0 : n.body)
              , i = le(r)
              , o = a ? [i].concat(i.visualViewport || [], et(r) ? r : []) : r
              , l = t.concat(o);
            return a ? l : l.concat(nt(xe(o)))
        }
        function rt(e) {
            return Object.assign({}, e, {
                left: e.x,
                top: e.y,
                right: e.x + e.width,
                bottom: e.y + e.height
            })
        }
        function at(e, t) {
            return t === Ae ? rt(function(e) {
                var t = le(e)
                  , n = we(e)
                  , r = t.visualViewport
                  , a = n.clientWidth
                  , i = n.clientHeight
                  , o = 0
                  , l = 0;
                return r && (a = r.width,
                i = r.height,
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (o = r.offsetLeft,
                l = r.offsetTop)),
                {
                    width: a,
                    height: i,
                    x: o + Je(e),
                    y: l
                }
            }(e)) : ue(t) ? function(e) {
                var t = me(e);
                return t.top = t.top + e.clientTop,
                t.left = t.left + e.clientLeft,
                t.bottom = t.top + e.clientHeight,
                t.right = t.left + e.clientWidth,
                t.width = e.clientWidth,
                t.height = e.clientHeight,
                t.x = t.left,
                t.y = t.top,
                t
            }(t) : rt(function(e) {
                var t, n = we(e), r = Ze(e), a = null == (t = e.ownerDocument) ? void 0 : t.body, i = fe(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), o = fe(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), l = -r.scrollLeft + Je(e), u = -r.scrollTop;
                return "rtl" === ye(a || n).direction && (l += fe(n.clientWidth, a ? a.clientWidth : 0) - i),
                {
                    width: i,
                    height: o,
                    x: l,
                    y: u
                }
            }(we(e)))
        }
        function it(e, t, n) {
            var r = "clippingParents" === t ? function(e) {
                var t = nt(xe(e))
                  , n = ["absolute", "fixed"].indexOf(ye(e).position) >= 0 && se(e) ? Se(e) : e;
                return ue(n) ? t.filter((function(e) {
                    return ue(e) && ve(e, n) && "body" !== ge(e)
                }
                )) : []
            }(e) : [].concat(t)
              , a = [].concat(r, [n])
              , i = a[0]
              , o = a.reduce((function(t, n) {
                var r = at(e, n);
                return t.top = fe(r.top, t.top),
                t.right = de(r.right, t.right),
                t.bottom = de(r.bottom, t.bottom),
                t.left = fe(r.left, t.left),
                t
            }
            ), at(e, i));
            return o.width = o.right - o.left,
            o.height = o.bottom - o.top,
            o.x = o.left,
            o.y = o.top,
            o
        }
        function ot(e) {
            var t, n = e.reference, r = e.element, a = e.placement, i = a ? oe(a) : null, o = a ? We(a) : null, l = n.x + n.width / 2 - r.width / 2, u = n.y + n.height / 2 - r.height / 2;
            switch (i) {
            case Pe:
                t = {
                    x: l,
                    y: n.y - r.height
                };
                break;
            case _e:
                t = {
                    x: l,
                    y: n.y + n.height
                };
                break;
            case Ne:
                t = {
                    x: n.x + n.width,
                    y: u
                };
                break;
            case Te:
                t = {
                    x: n.x - r.width,
                    y: u
                };
                break;
            default:
                t = {
                    x: n.x,
                    y: n.y
                }
            }
            var s = i ? Ee(i) : null;
            if (null != s) {
                var c = "y" === s ? "height" : "width";
                switch (o) {
                case Le:
                    t[s] = t[s] - (n[c] / 2 - r[c] / 2);
                    break;
                case De:
                    t[s] = t[s] + (n[c] / 2 - r[c] / 2)
                }
            }
            return t
        }
        function lt(e, t) {
            void 0 === t && (t = {});
            var n = t
              , r = n.placement
              , a = void 0 === r ? e.placement : r
              , i = n.boundary
              , o = void 0 === i ? "clippingParents" : i
              , l = n.rootBoundary
              , u = void 0 === l ? Ae : l
              , s = n.elementContext
              , c = void 0 === s ? Re : s
              , f = n.altBoundary
              , d = void 0 !== f && f
              , p = n.padding
              , m = void 0 === p ? 0 : p
              , h = Oe("number" !== typeof m ? m : je(m, Me))
              , v = c === Re ? "reference" : Re
              , g = e.rects.popper
              , y = e.elements[d ? v : c]
              , b = it(ue(y) ? y : y.contextElement || we(e.elements.popper), o, u)
              , w = me(e.elements.reference)
              , x = ot({
                reference: w,
                element: g,
                strategy: "absolute",
                placement: a
            })
              , k = rt(Object.assign({}, g, x))
              , S = c === Re ? k : w
              , E = {
                top: b.top - S.top + h.top,
                bottom: S.bottom - b.bottom + h.bottom,
                left: b.left - S.left + h.left,
                right: S.right - b.right + h.right
            }
              , C = e.modifiersData.offset;
            if (c === Re && C) {
                var O = C[a];
                Object.keys(E).forEach((function(e) {
                    var t = [Ne, _e].indexOf(e) >= 0 ? 1 : -1
                      , n = [Pe, _e].indexOf(e) >= 0 ? "y" : "x";
                    E[e] += O[n] * t
                }
                ))
            }
            return E
        }
        var ut = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state
                  , n = e.options
                  , r = e.name;
                if (!t.modifiersData[r]._skip) {
                    for (var a = n.mainAxis, i = void 0 === a || a, o = n.altAxis, l = void 0 === o || o, u = n.fallbackPlacements, s = n.padding, c = n.boundary, f = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, m = void 0 === p || p, h = n.allowedAutoPlacements, v = t.options.placement, g = oe(v), y = u || (g === v || !m ? [Ke(v)] : function(e) {
                        if (oe(e) === ze)
                            return [];
                        var t = Ke(e);
                        return [Ge(e), t, Ge(t)]
                    }(v)), b = [v].concat(y).reduce((function(e, n) {
                        return e.concat(oe(n) === ze ? function(e, t) {
                            void 0 === t && (t = {});
                            var n = t
                              , r = n.placement
                              , a = n.boundary
                              , i = n.rootBoundary
                              , o = n.padding
                              , l = n.flipVariations
                              , u = n.allowedAutoPlacements
                              , s = void 0 === u ? Ie : u
                              , c = We(r)
                              , f = c ? l ? Fe : Fe.filter((function(e) {
                                return We(e) === c
                            }
                            )) : Me
                              , d = f.filter((function(e) {
                                return s.indexOf(e) >= 0
                            }
                            ));
                            0 === d.length && (d = f);
                            var p = d.reduce((function(t, n) {
                                return t[n] = lt(e, {
                                    placement: n,
                                    boundary: a,
                                    rootBoundary: i,
                                    padding: o
                                })[oe(n)],
                                t
                            }
                            ), {});
                            return Object.keys(p).sort((function(e, t) {
                                return p[e] - p[t]
                            }
                            ))
                        }(t, {
                            placement: n,
                            boundary: c,
                            rootBoundary: f,
                            padding: s,
                            flipVariations: m,
                            allowedAutoPlacements: h
                        }) : n)
                    }
                    ), []), w = t.rects.reference, x = t.rects.popper, k = new Map, S = !0, E = b[0], C = 0; C < b.length; C++) {
                        var O = b[C]
                          , j = oe(O)
                          , P = We(O) === Le
                          , _ = [Pe, _e].indexOf(j) >= 0
                          , N = _ ? "width" : "height"
                          , T = lt(t, {
                            placement: O,
                            boundary: c,
                            rootBoundary: f,
                            altBoundary: d,
                            padding: s
                        })
                          , z = _ ? P ? Ne : Te : P ? _e : Pe;
                        w[N] > x[N] && (z = Ke(z));
                        var M = Ke(z)
                          , L = [];
                        if (i && L.push(T[j] <= 0),
                        l && L.push(T[z] <= 0, T[M] <= 0),
                        L.every((function(e) {
                            return e
                        }
                        ))) {
                            E = O,
                            S = !1;
                            break
                        }
                        k.set(O, L)
                    }
                    if (S)
                        for (var D = function(e) {
                            var t = b.find((function(t) {
                                var n = k.get(t);
                                if (n)
                                    return n.slice(0, e).every((function(e) {
                                        return e
                                    }
                                    ))
                            }
                            ));
                            if (t)
                                return E = t,
                                "break"
                        }, A = m ? 3 : 1; A > 0; A--) {
                            if ("break" === D(A))
                                break
                        }
                    t.placement !== E && (t.modifiersData[r]._skip = !0,
                    t.placement = E,
                    t.reset = !0)
                }
            },
            requiresIfExists: ["offset"],
            data: {
                _skip: !1
            }
        };
        function st(e, t, n) {
            return void 0 === n && (n = {
                x: 0,
                y: 0
            }),
            {
                top: e.top - t.height - n.y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x
            }
        }
        function ct(e) {
            return [Pe, Ne, _e, Te].some((function(t) {
                return e[t] >= 0
            }
            ))
        }
        var ft = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(e) {
                var t = e.state
                  , n = e.name
                  , r = t.rects.reference
                  , a = t.rects.popper
                  , i = t.modifiersData.preventOverflow
                  , o = lt(t, {
                    elementContext: "reference"
                })
                  , l = lt(t, {
                    altBoundary: !0
                })
                  , u = st(o, r)
                  , s = st(l, a, i)
                  , c = ct(u)
                  , f = ct(s);
                t.modifiersData[n] = {
                    referenceClippingOffsets: u,
                    popperEscapeOffsets: s,
                    isReferenceHidden: c,
                    hasPopperEscaped: f
                },
                t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-reference-hidden": c,
                    "data-popper-escaped": f
                })
            }
        };
        var dt = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(e) {
                var t = e.state
                  , n = e.options
                  , r = e.name
                  , a = n.offset
                  , i = void 0 === a ? [0, 0] : a
                  , o = Ie.reduce((function(e, n) {
                    return e[n] = function(e, t, n) {
                        var r = oe(e)
                          , a = [Te, Pe].indexOf(r) >= 0 ? -1 : 1
                          , i = "function" === typeof n ? n(Object.assign({}, t, {
                            placement: e
                        })) : n
                          , o = i[0]
                          , l = i[1];
                        return o = o || 0,
                        l = (l || 0) * a,
                        [Te, Ne].indexOf(r) >= 0 ? {
                            x: l,
                            y: o
                        } : {
                            x: o,
                            y: l
                        }
                    }(n, t.rects, i),
                    e
                }
                ), {})
                  , l = o[t.placement]
                  , u = l.x
                  , s = l.y;
                null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += u,
                t.modifiersData.popperOffsets.y += s),
                t.modifiersData[r] = o
            }
        };
        var pt = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(e) {
                var t = e.state
                  , n = e.name;
                t.modifiersData[n] = ot({
                    reference: t.rects.reference,
                    element: t.rects.popper,
                    strategy: "absolute",
                    placement: t.placement
                })
            },
            data: {}
        };
        var mt = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state
                  , n = e.options
                  , r = e.name
                  , a = n.mainAxis
                  , i = void 0 === a || a
                  , o = n.altAxis
                  , l = void 0 !== o && o
                  , u = n.boundary
                  , s = n.rootBoundary
                  , c = n.altBoundary
                  , f = n.padding
                  , d = n.tether
                  , p = void 0 === d || d
                  , m = n.tetherOffset
                  , h = void 0 === m ? 0 : m
                  , v = lt(t, {
                    boundary: u,
                    rootBoundary: s,
                    padding: f,
                    altBoundary: c
                })
                  , g = oe(t.placement)
                  , y = We(t.placement)
                  , b = !y
                  , w = Ee(g)
                  , x = "x" === w ? "y" : "x"
                  , k = t.modifiersData.popperOffsets
                  , S = t.rects.reference
                  , E = t.rects.popper
                  , C = "function" === typeof h ? h(Object.assign({}, t.rects, {
                    placement: t.placement
                })) : h
                  , O = "number" === typeof C ? {
                    mainAxis: C,
                    altAxis: C
                } : Object.assign({
                    mainAxis: 0,
                    altAxis: 0
                }, C)
                  , j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null
                  , P = {
                    x: 0,
                    y: 0
                };
                if (k) {
                    if (i) {
                        var _, N = "y" === w ? Pe : Te, T = "y" === w ? _e : Ne, z = "y" === w ? "height" : "width", M = k[w], L = M + v[N], D = M - v[T], A = p ? -E[z] / 2 : 0, R = y === Le ? S[z] : E[z], F = y === Le ? -E[z] : -S[z], I = t.elements.arrow, U = p && I ? he(I) : {
                            width: 0,
                            height: 0
                        }, H = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }, W = H[N], B = H[T], V = Ce(0, S[z], U[z]), $ = b ? S[z] / 2 - A - V - W - O.mainAxis : R - V - W - O.mainAxis, Y = b ? -S[z] / 2 + A + V + B + O.mainAxis : F + V + B + O.mainAxis, Q = t.elements.arrow && Se(t.elements.arrow), q = Q ? "y" === w ? Q.clientTop || 0 : Q.clientLeft || 0 : 0, K = null != (_ = null == j ? void 0 : j[w]) ? _ : 0, X = M + Y - K, G = Ce(p ? de(L, M + $ - K - q) : L, M, p ? fe(D, X) : D);
                        k[w] = G,
                        P[w] = G - M
                    }
                    if (l) {
                        var Z, J = "x" === w ? Pe : Te, ee = "x" === w ? _e : Ne, te = k[x], ne = "y" === x ? "height" : "width", re = te + v[J], ae = te - v[ee], ie = -1 !== [Pe, Te].indexOf(g), le = null != (Z = null == j ? void 0 : j[x]) ? Z : 0, ue = ie ? re : te - S[ne] - E[ne] - le + O.altAxis, se = ie ? te + S[ne] + E[ne] - le - O.altAxis : ae, ce = p && ie ? function(e, t, n) {
                            var r = Ce(e, t, n);
                            return r > n ? n : r
                        }(ue, te, se) : Ce(p ? ue : re, te, p ? se : ae);
                        k[x] = ce,
                        P[x] = ce - te
                    }
                    t.modifiersData[r] = P
                }
            },
            requiresIfExists: ["offset"]
        };
        function ht(e, t, n) {
            void 0 === n && (n = !1);
            var r = se(t)
              , a = se(t) && function(e) {
                var t = e.getBoundingClientRect()
                  , n = pe(t.width) / e.offsetWidth || 1
                  , r = pe(t.height) / e.offsetHeight || 1;
                return 1 !== n || 1 !== r
            }(t)
              , i = we(t)
              , o = me(e, a)
              , l = {
                scrollLeft: 0,
                scrollTop: 0
            }
              , u = {
                x: 0,
                y: 0
            };
            return (r || !r && !n) && (("body" !== ge(t) || et(i)) && (l = function(e) {
                return e !== le(e) && se(e) ? {
                    scrollLeft: (t = e).scrollLeft,
                    scrollTop: t.scrollTop
                } : Ze(e);
                var t
            }(t)),
            se(t) ? ((u = me(t, !0)).x += t.clientLeft,
            u.y += t.clientTop) : i && (u.x = Je(i))),
            {
                x: o.left + l.scrollLeft - u.x,
                y: o.top + l.scrollTop - u.y,
                width: o.width,
                height: o.height
            }
        }
        function vt(e) {
            var t = new Map
              , n = new Set
              , r = [];
            function a(e) {
                n.add(e.name),
                [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                    if (!n.has(e)) {
                        var r = t.get(e);
                        r && a(r)
                    }
                }
                )),
                r.push(e)
            }
            return e.forEach((function(e) {
                t.set(e.name, e)
            }
            )),
            e.forEach((function(e) {
                n.has(e.name) || a(e)
            }
            )),
            r
        }
        function gt(e) {
            var t;
            return function() {
                return t || (t = new Promise((function(n) {
                    Promise.resolve().then((function() {
                        t = void 0,
                        n(e())
                    }
                    ))
                }
                ))),
                t
            }
        }
        var yt = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };
        function bt() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return !t.some((function(e) {
                return !(e && "function" === typeof e.getBoundingClientRect)
            }
            ))
        }
        function wt(e) {
            void 0 === e && (e = {});
            var t = e
              , n = t.defaultModifiers
              , r = void 0 === n ? [] : n
              , a = t.defaultOptions
              , i = void 0 === a ? yt : a;
            return function(e, t, n) {
                void 0 === n && (n = i);
                var a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, yt, i),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: t
                    },
                    attributes: {},
                    styles: {}
                }
                  , o = []
                  , l = !1
                  , u = {
                    state: a,
                    setOptions: function(n) {
                        var l = "function" === typeof n ? n(a.options) : n;
                        s(),
                        a.options = Object.assign({}, i, a.options, l),
                        a.scrollParents = {
                            reference: ue(e) ? nt(e) : e.contextElement ? nt(e.contextElement) : [],
                            popper: nt(t)
                        };
                        var c = function(e) {
                            var t = vt(e);
                            return Ue.reduce((function(e, n) {
                                return e.concat(t.filter((function(e) {
                                    return e.phase === n
                                }
                                )))
                            }
                            ), [])
                        }(function(e) {
                            var t = e.reduce((function(e, t) {
                                var n = e[t.name];
                                return e[t.name] = n ? Object.assign({}, n, t, {
                                    options: Object.assign({}, n.options, t.options),
                                    data: Object.assign({}, n.data, t.data)
                                }) : t,
                                e
                            }
                            ), {});
                            return Object.keys(t).map((function(e) {
                                return t[e]
                            }
                            ))
                        }([].concat(r, a.options.modifiers)));
                        return a.orderedModifiers = c.filter((function(e) {
                            return e.enabled
                        }
                        )),
                        a.orderedModifiers.forEach((function(e) {
                            var t = e.name
                              , n = e.options
                              , r = void 0 === n ? {} : n
                              , i = e.effect;
                            if ("function" === typeof i) {
                                var l = i({
                                    state: a,
                                    name: t,
                                    instance: u,
                                    options: r
                                })
                                  , s = function() {};
                                o.push(l || s)
                            }
                        }
                        )),
                        u.update()
                    },
                    forceUpdate: function() {
                        if (!l) {
                            var e = a.elements
                              , t = e.reference
                              , n = e.popper;
                            if (bt(t, n)) {
                                a.rects = {
                                    reference: ht(t, Se(n), "fixed" === a.options.strategy),
                                    popper: he(n)
                                },
                                a.reset = !1,
                                a.placement = a.options.placement,
                                a.orderedModifiers.forEach((function(e) {
                                    return a.modifiersData[e.name] = Object.assign({}, e.data)
                                }
                                ));
                                for (var r = 0; r < a.orderedModifiers.length; r++)
                                    if (!0 !== a.reset) {
                                        var i = a.orderedModifiers[r]
                                          , o = i.fn
                                          , s = i.options
                                          , c = void 0 === s ? {} : s
                                          , f = i.name;
                                        "function" === typeof o && (a = o({
                                            state: a,
                                            options: c,
                                            name: f,
                                            instance: u
                                        }) || a)
                                    } else
                                        a.reset = !1,
                                        r = -1
                            }
                        }
                    },
                    update: gt((function() {
                        return new Promise((function(e) {
                            u.forceUpdate(),
                            e(a)
                        }
                        ))
                    }
                    )),
                    destroy: function() {
                        s(),
                        l = !0
                    }
                };
                if (!bt(e, t))
                    return u;
                function s() {
                    o.forEach((function(e) {
                        return e()
                    }
                    )),
                    o = []
                }
                return u.setOptions(n).then((function(e) {
                    !l && n.onFirstUpdate && n.onFirstUpdate(e)
                }
                )),
                u
            }
        }
        var xt = wt({
            defaultModifiers: [ft, pt, $e, Qe, dt, ut, mt, He]
        })
          , kt = ["enabled", "placement", "strategy", "modifiers"];
        function St(e, t) {
            if (null == e)
                return {};
            var n, r, a = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
        }
        var Et = {
            name: "applyStyles",
            enabled: !1,
            phase: "afterWrite",
            fn: function() {}
        }
          , Ct = {
            name: "ariaDescribedBy",
            enabled: !0,
            phase: "afterWrite",
            effect: function(e) {
                var t = e.state;
                return function() {
                    var e = t.elements
                      , n = e.reference
                      , r = e.popper;
                    if ("removeAttribute"in n) {
                        var a = (n.getAttribute("aria-describedby") || "").split(",").filter((function(e) {
                            return e.trim() !== r.id
                        }
                        ));
                        a.length ? n.setAttribute("aria-describedby", a.join(",")) : n.removeAttribute("aria-describedby")
                    }
                }
            },
            fn: function(e) {
                var t, n = e.state.elements, r = n.popper, a = n.reference, i = null == (t = r.getAttribute("role")) ? void 0 : t.toLowerCase();
                if (r.id && "tooltip" === i && "setAttribute"in a) {
                    var o = a.getAttribute("aria-describedby");
                    if (o && -1 !== o.split(",").indexOf(r.id))
                        return;
                    a.setAttribute("aria-describedby", o ? "".concat(o, ",").concat(r.id) : r.id)
                }
            }
        }
          , Ot = [];
        var jt = function(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , a = r.enabled
              , o = void 0 === a || a
              , l = r.placement
              , u = void 0 === l ? "bottom" : l
              , s = r.strategy
              , c = void 0 === s ? "absolute" : s
              , f = r.modifiers
              , d = void 0 === f ? Ot : f
              , p = St(r, kt)
              , m = (0,
            e.useRef)(d)
              , h = (0,
            e.useRef)()
              , v = (0,
            e.useCallback)((function() {
                var e;
                null == (e = h.current) || e.update()
            }
            ), [])
              , g = (0,
            e.useCallback)((function() {
                var e;
                null == (e = h.current) || e.forceUpdate()
            }
            ), [])
              , y = ie((0,
            e.useState)({
                placement: u,
                update: v,
                forceUpdate: g,
                attributes: {},
                styles: {
                    popper: {},
                    arrow: {}
                }
            }))
              , b = i(y, 2)
              , w = b[0]
              , x = b[1]
              , k = (0,
            e.useMemo)((function() {
                return {
                    name: "updateStateModifier",
                    enabled: !0,
                    phase: "write",
                    requires: ["computeStyles"],
                    fn: function(e) {
                        var t = e.state
                          , n = {}
                          , r = {};
                        Object.keys(t.elements).forEach((function(e) {
                            n[e] = t.styles[e],
                            r[e] = t.attributes[e]
                        }
                        )),
                        x({
                            state: t,
                            styles: n,
                            attributes: r,
                            update: v,
                            forceUpdate: g,
                            placement: t.placement
                        })
                    }
                }
            }
            ), [v, g, x])
              , S = (0,
            e.useMemo)((function() {
                return ae(m.current, d) || (m.current = d),
                m.current
            }
            ), [d]);
            return (0,
            e.useEffect)((function() {
                h.current && o && h.current.setOptions({
                    placement: u,
                    strategy: c,
                    modifiers: [].concat(R(S), [k, Et])
                })
            }
            ), [c, u, k, o, S]),
            (0,
            e.useEffect)((function() {
                if (o && null != t && null != n)
                    return h.current = xt(t, n, Object.assign({}, p, {
                        placement: u,
                        strategy: c,
                        modifiers: [].concat(R(S), [Ct, k])
                    })),
                    function() {
                        null != h.current && (h.current.destroy(),
                        h.current = void 0,
                        x((function(e) {
                            return Object.assign({}, e, {
                                attributes: {},
                                styles: {
                                    popper: {}
                                }
                            })
                        }
                        )))
                    }
            }
            ), [o, t, n]),
            w
        }
          , Pt = !("undefined" === typeof window || !window.document || !window.document.createElement)
          , _t = !1
          , Nt = !1;
        try {
            var Tt = {
                get passive() {
                    return _t = !0
                },
                get once() {
                    return Nt = _t = !0
                }
            };
            Pt && (window.addEventListener("test", Tt, Tt),
            window.removeEventListener("test", Tt, !0))
        } catch (Tu) {}
        var zt = function(e, t, n, r) {
            if (r && "boolean" !== typeof r && !Nt) {
                var a = r.once
                  , i = r.capture
                  , o = n;
                !Nt && a && (o = n.__once || function e(r) {
                    this.removeEventListener(t, e, i),
                    n.call(this, r)
                }
                ,
                n.__once = o),
                e.addEventListener(t, o, _t ? r : i)
            }
            e.addEventListener(t, n, r)
        };
        var Mt = function(e, t, n, r) {
            var a = r && "boolean" !== typeof r ? r.capture : r;
            e.removeEventListener(t, n, a),
            n.__once && e.removeEventListener(t, n.__once, a)
        };
        var Lt = function(e, t, n, r) {
            return zt(e, t, n, r),
            function() {
                Mt(e, t, n, r)
            }
        };
        function Dt(e) {
            return e && e.ownerDocument || document
        }
        var At = function(t) {
            var n = (0,
            e.useRef)(t);
            return (0,
            e.useEffect)((function() {
                n.current = t
            }
            ), [t]),
            n
        };
        function Rt(t) {
            var n = At(t);
            return (0,
            e.useCallback)((function() {
                return n.current && n.current.apply(n, arguments)
            }
            ), [n])
        }
        var Ft = function() {};
        function It(e) {
            return 0 === e.button
        }
        function Ut(e) {
            return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
        }
        var Ht = function(e) {
            return e && ("current"in e ? e.current : e)
        };
        var Wt = function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ft
              , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , a = r.disabled
              , i = r.clickTrigger
              , o = void 0 === i ? "click" : i
              , l = (0,
            e.useRef)(!1)
              , u = (0,
            e.useCallback)((function(e) {
                var n = Ht(t);
                V()(!!n, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),
                l.current = !n || Ut(e) || !It(e) || !!F(n, e.target)
            }
            ), [t])
              , s = Rt((function(e) {
                l.current || n(e)
            }
            ));
            (0,
            e.useEffect)((function() {
                if (!a && null != t) {
                    var e = Dt(Ht(t))
                      , n = (e.defaultView || window).event
                      , r = Lt(e, o, u, !0)
                      , i = Lt(e, o, (function(e) {
                        e !== n ? s(e) : n = void 0
                    }
                    ))
                      , l = [];
                    return "ontouchstart"in e.documentElement && (l = [].slice.call(e.body.children).map((function(e) {
                        return Lt(e, "mousemove", Ft)
                    }
                    ))),
                    function() {
                        r(),
                        i(),
                        l.forEach((function(e) {
                            return e()
                        }
                        ))
                    }
                }
            }
            ), [t, a, o, u, s])
        }
          , Bt = function() {};
        var Vt = function(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , a = r.disabled
              , i = r.clickTrigger
              , o = n || Bt;
            Wt(t, o, {
                disabled: a,
                clickTrigger: i
            });
            var l = Rt((function(e) {
                27 === e.keyCode && o(e)
            }
            ));
            (0,
            e.useEffect)((function() {
                if (!a && null != t) {
                    var e = Dt(Ht(t))
                      , n = (e.defaultView || window).event
                      , r = Lt(e, "keyup", (function(e) {
                        e !== n ? l(e) : n = void 0
                    }
                    ));
                    return function() {
                        r()
                    }
                }
            }
            ), [t, a, l])
        }
          , $t = (0,
        e.createContext)(Pt ? window : void 0);
        $t.Provider;
        var Yt = function(e, t) {
            var n;
            return Pt ? null == e ? (t || Dt()).body : ("function" === typeof e && (e = e()),
            e && "current"in e && (e = e.current),
            null != (n = e) && n.nodeType && e || null) : null
        };
        function Qt(t, n) {
            var r = (0,
            e.useContext)($t)
              , a = i((0,
            e.useState)((function() {
                return Yt(t, null == r ? void 0 : r.document)
            }
            )), 2)
              , o = a[0]
              , l = a[1];
            if (!o) {
                var u = Yt(t);
                u && l(u)
            }
            return (0,
            e.useEffect)((function() {
                n && o && n(o)
            }
            ), [n, o]),
            (0,
            e.useEffect)((function() {
                var e = Yt(t);
                e !== o && l(e)
            }
            ), [t, o]),
            o
        }
        function qt() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return Array.isArray(e) ? e : Object.keys(e).map((function(t) {
                return e[t].name = t,
                e[t]
            }
            ))
        }
        function Kt(e) {
            var t, n, r, a, i = e.enabled, o = e.enableEvents, l = e.placement, u = e.flip, s = e.offset, c = e.fixed, f = e.containerPadding, d = e.arrowElement, p = e.popperConfig, m = void 0 === p ? {} : p, h = function(e) {
                var t = {};
                return Array.isArray(e) ? (null == e || e.forEach((function(e) {
                    t[e.name] = e
                }
                )),
                t) : e || t
            }(m.modifiers);
            return Object.assign({}, m, {
                placement: l,
                enabled: i,
                strategy: c ? "fixed" : m.strategy,
                modifiers: qt(Object.assign({}, h, {
                    eventListeners: {
                        enabled: o
                    },
                    preventOverflow: Object.assign({}, h.preventOverflow, {
                        options: f ? Object.assign({
                            padding: f
                        }, null == (t = h.preventOverflow) ? void 0 : t.options) : null == (n = h.preventOverflow) ? void 0 : n.options
                    }),
                    offset: {
                        options: Object.assign({
                            offset: s
                        }, null == (r = h.offset) ? void 0 : r.options)
                    },
                    arrow: Object.assign({}, h.arrow, {
                        enabled: !!d,
                        options: Object.assign({}, null == (a = h.arrow) ? void 0 : a.options, {
                            element: d
                        })
                    }),
                    flip: Object.assign({
                        enabled: !!u
                    }, h.flip)
                }))
            })
        }
        var Xt = e.forwardRef((function(t, n) {
            var r = t.flip
              , a = t.offset
              , o = t.placement
              , l = t.containerPadding
              , u = t.popperConfig
              , s = void 0 === u ? {} : u
              , c = t.transition
              , f = i(Z(), 2)
              , d = f[0]
              , p = f[1]
              , m = i(Z(), 2)
              , v = m[0]
              , g = m[1]
              , y = ee(p, n)
              , b = Qt(t.container)
              , w = Qt(t.target)
              , x = i((0,
            e.useState)(!t.show), 2)
              , k = x[0]
              , S = x[1]
              , E = jt(w, d, Kt({
                placement: o,
                enableEvents: !!t.show,
                containerPadding: l || 5,
                flip: r,
                offset: a,
                arrowElement: v,
                popperConfig: s
            }));
            t.show ? k && S(!1) : t.transition || k || S(!0);
            var C = t.show || c && !k;
            if (Vt(d, t.onHide, {
                disabled: !t.rootClose || t.rootCloseDisabled,
                clickTrigger: t.rootCloseEvent
            }),
            !C)
                return null;
            var O = t.children(Object.assign({}, E.attributes.popper, {
                style: E.styles.popper,
                ref: y
            }), {
                popper: E,
                placement: o,
                show: !!t.show,
                arrowProps: Object.assign({}, E.attributes.arrow, {
                    style: E.styles.arrow,
                    ref: g
                })
            });
            if (c) {
                var j = t.onExit
                  , P = t.onExiting
                  , _ = t.onEnter
                  , N = t.onEntering
                  , T = t.onEntered;
                O = (0,
                h.jsx)(c, {
                    in: t.show,
                    appear: !0,
                    onExit: j,
                    onExiting: P,
                    onExited: function() {
                        S(!0),
                        t.onExited && t.onExited.apply(t, arguments)
                    },
                    onEnter: _,
                    onEntering: N,
                    onEntered: T,
                    children: O
                })
            }
            return b ? G.createPortal(O, b) : null
        }
        ));
        Xt.displayName = "Overlay";
        var Gt = Xt;
        var Zt = /-(.)/g;
        var Jt = ["className", "bsPrefix", "as"]
          , en = function(e) {
            return e[0].toUpperCase() + (t = e,
            t.replace(Zt, (function(e, t) {
                return t.toUpperCase()
            }
            ))).slice(1);
            var t
        };
        function tn(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , r = n.displayName
              , a = void 0 === r ? en(t) : r
              , i = n.Component
              , o = n.defaultProps
              , l = e.forwardRef((function(e, n) {
                var r = e.className
                  , a = e.bsPrefix
                  , o = e.as
                  , l = void 0 === o ? i || "div" : o
                  , u = d(e, Jt)
                  , s = w(a, t);
                return (0,
                h.jsx)(l, c({
                    ref: n,
                    className: m()(r, s)
                }, u))
            }
            ));
            return l.defaultProps = o,
            l.displayName = a,
            l
        }
        var nn = tn("popover-header")
          , rn = tn("popover-body");
        function an(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function on(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function ln(e, t) {
            return ln = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            ln(e, t)
        }
        function un(e) {
            return Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            un(e)
        }
        function sn(e) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            sn(e)
        }
        function cn(e, t) {
            if (t && ("object" === sn(t) || "function" === typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }
        function fn(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (Tu) {
                    return !1
                }
            }();
            return function() {
                var n, r = un(e);
                if (t) {
                    var a = un(this).constructor;
                    Reflect.construct(r, arguments, a)
                } else
                    r.apply(this, arguments);
                return cn(this, n)
            }
        }
        e.Component;
        function dn(e, t) {
            var n = e;
            return "left" === e ? n = t ? "end" : "start" : "right" === e && (n = t ? "start" : "end"),
            n
        }
        var pn = ["bsPrefix", "placement", "className", "style", "children", "body", "arrowProps", "popper", "show"]
          , mn = e.forwardRef((function(e, t) {
            var n = e.bsPrefix
              , r = e.placement
              , a = e.className
              , o = e.style
              , l = e.children
              , u = e.body
              , s = e.arrowProps
              , f = (e.popper,
            e.show,
            d(e, pn))
              , p = w(n, "popover")
              , v = x()
              , g = i((null == r ? void 0 : r.split("-")) || [], 1)[0]
              , y = dn(g, v);
            return (0,
            h.jsxs)("div", c(c({
                ref: t,
                role: "tooltip",
                style: o,
                "x-placement": g,
                className: m()(a, p, g && "bs-popover-".concat(y))
            }, f), {}, {
                children: [(0,
                h.jsx)("div", c({
                    className: "popover-arrow"
                }, s)), u ? (0,
                h.jsx)(rn, {
                    children: l
                }) : l]
            }))
        }
        ));
        mn.defaultProps = {
            placement: "right"
        };
        var hn = Object.assign(mn, {
            Header: nn,
            Body: rn,
            POPPER_OFFSET: [0, 8]
        });
        var vn = !1
          , gn = e.createContext(null)
          , yn = "unmounted"
          , bn = "exited"
          , wn = "entering"
          , xn = "entered"
          , kn = "exiting"
          , Sn = function(t) {
            var n, r;
            function a(e, n) {
                var r;
                r = t.call(this, e, n) || this;
                var a, i = n && !n.isMounting ? e.enter : e.appear;
                return r.appearStatus = null,
                e.in ? i ? (a = bn,
                r.appearStatus = wn) : a = xn : a = e.unmountOnExit || e.mountOnEnter ? yn : bn,
                r.state = {
                    status: a
                },
                r.nextCallback = null,
                r
            }
            r = t,
            (n = a).prototype = Object.create(r.prototype),
            n.prototype.constructor = n,
            ln(n, r),
            a.getDerivedStateFromProps = function(e, t) {
                return e.in && t.status === yn ? {
                    status: bn
                } : null
            }
            ;
            var i = a.prototype;
            return i.componentDidMount = function() {
                this.updateStatus(!0, this.appearStatus)
            }
            ,
            i.componentDidUpdate = function(e) {
                var t = null;
                if (e !== this.props) {
                    var n = this.state.status;
                    this.props.in ? n !== wn && n !== xn && (t = wn) : n !== wn && n !== xn || (t = kn)
                }
                this.updateStatus(!1, t)
            }
            ,
            i.componentWillUnmount = function() {
                this.cancelNextCallback()
            }
            ,
            i.getTimeouts = function() {
                var e, t, n, r = this.props.timeout;
                return e = t = n = r,
                null != r && "number" !== typeof r && (e = r.exit,
                t = r.enter,
                n = void 0 !== r.appear ? r.appear : t),
                {
                    exit: e,
                    enter: t,
                    appear: n
                }
            }
            ,
            i.updateStatus = function(e, t) {
                void 0 === e && (e = !1),
                null !== t ? (this.cancelNextCallback(),
                t === wn ? this.performEnter(e) : this.performExit()) : this.props.unmountOnExit && this.state.status === bn && this.setState({
                    status: yn
                })
            }
            ,
            i.performEnter = function(e) {
                var t = this
                  , n = this.props.enter
                  , r = this.context ? this.context.isMounting : e
                  , a = this.props.nodeRef ? [r] : [G.findDOMNode(this), r]
                  , i = a[0]
                  , o = a[1]
                  , l = this.getTimeouts()
                  , u = r ? l.appear : l.enter;
                !e && !n || vn ? this.safeSetState({
                    status: xn
                }, (function() {
                    t.props.onEntered(i)
                }
                )) : (this.props.onEnter(i, o),
                this.safeSetState({
                    status: wn
                }, (function() {
                    t.props.onEntering(i, o),
                    t.onTransitionEnd(u, (function() {
                        t.safeSetState({
                            status: xn
                        }, (function() {
                            t.props.onEntered(i, o)
                        }
                        ))
                    }
                    ))
                }
                )))
            }
            ,
            i.performExit = function() {
                var e = this
                  , t = this.props.exit
                  , n = this.getTimeouts()
                  , r = this.props.nodeRef ? void 0 : G.findDOMNode(this);
                t && !vn ? (this.props.onExit(r),
                this.safeSetState({
                    status: kn
                }, (function() {
                    e.props.onExiting(r),
                    e.onTransitionEnd(n.exit, (function() {
                        e.safeSetState({
                            status: bn
                        }, (function() {
                            e.props.onExited(r)
                        }
                        ))
                    }
                    ))
                }
                ))) : this.safeSetState({
                    status: bn
                }, (function() {
                    e.props.onExited(r)
                }
                ))
            }
            ,
            i.cancelNextCallback = function() {
                null !== this.nextCallback && (this.nextCallback.cancel(),
                this.nextCallback = null)
            }
            ,
            i.safeSetState = function(e, t) {
                t = this.setNextCallback(t),
                this.setState(e, t)
            }
            ,
            i.setNextCallback = function(e) {
                var t = this
                  , n = !0;
                return this.nextCallback = function(r) {
                    n && (n = !1,
                    t.nextCallback = null,
                    e(r))
                }
                ,
                this.nextCallback.cancel = function() {
                    n = !1
                }
                ,
                this.nextCallback
            }
            ,
            i.onTransitionEnd = function(e, t) {
                this.setNextCallback(t);
                var n = this.props.nodeRef ? this.props.nodeRef.current : G.findDOMNode(this)
                  , r = null == e && !this.props.addEndListener;
                if (n && !r) {
                    if (this.props.addEndListener) {
                        var a = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback]
                          , i = a[0]
                          , o = a[1];
                        this.props.addEndListener(i, o)
                    }
                    null != e && setTimeout(this.nextCallback, e)
                } else
                    setTimeout(this.nextCallback, 0)
            }
            ,
            i.render = function() {
                var t = this.state.status;
                if (t === yn)
                    return null;
                var n = this.props
                  , r = n.children
                  , a = (n.in,
                n.mountOnEnter,
                n.unmountOnExit,
                n.appear,
                n.enter,
                n.exit,
                n.timeout,
                n.addEndListener,
                n.onEnter,
                n.onEntering,
                n.onEntered,
                n.onExit,
                n.onExiting,
                n.onExited,
                n.nodeRef,
                f(n, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                return e.createElement(gn.Provider, {
                    value: null
                }, "function" === typeof r ? r(t, a) : e.cloneElement(e.Children.only(r), a))
            }
            ,
            a
        }(e.Component);
        function En() {}
        Sn.contextType = gn,
        Sn.propTypes = {},
        Sn.defaultProps = {
            in: !1,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            enter: !0,
            exit: !0,
            onEnter: En,
            onEntering: En,
            onEntered: En,
            onExit: En,
            onExiting: En,
            onExited: En
        },
        Sn.UNMOUNTED = yn,
        Sn.EXITED = bn,
        Sn.ENTERING = wn,
        Sn.ENTERED = xn,
        Sn.EXITING = kn;
        var Cn = Sn;
        function On(e, t) {
            return function(e) {
                var t = Dt(e);
                return t && t.defaultView || window
            }(e).getComputedStyle(e, t)
        }
        var jn = /([A-Z])/g;
        var Pn = /^ms-/;
        function _n(e) {
            return function(e) {
                return e.replace(jn, "-$1").toLowerCase()
            }(e).replace(Pn, "-ms-")
        }
        var Nn = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
        var Tn = function(e, t) {
            var n = ""
              , r = "";
            if ("string" === typeof t)
                return e.style.getPropertyValue(_n(t)) || On(e).getPropertyValue(_n(t));
            Object.keys(t).forEach((function(a) {
                var i = t[a];
                i || 0 === i ? !function(e) {
                    return !(!e || !Nn.test(e))
                }(a) ? n += _n(a) + ": " + i + ";" : r += a + "(" + i + ") " : e.style.removeProperty(_n(a))
            }
            )),
            r && (n += "transform: " + r + ";"),
            e.style.cssText += ";" + n
        };
        function zn(e, t, n) {
            void 0 === n && (n = 5);
            var r = !1
              , a = setTimeout((function() {
                r || function(e, t, n, r) {
                    if (void 0 === n && (n = !1),
                    void 0 === r && (r = !0),
                    e) {
                        var a = document.createEvent("HTMLEvents");
                        a.initEvent(t, n, r),
                        e.dispatchEvent(a)
                    }
                }(e, "transitionend", !0)
            }
            ), t + n)
              , i = Lt(e, "transitionend", (function() {
                r = !0
            }
            ), {
                once: !0
            });
            return function() {
                clearTimeout(a),
                i()
            }
        }
        function Mn(e, t, n, r) {
            null == n && (n = function(e) {
                var t = Tn(e, "transitionDuration") || ""
                  , n = -1 === t.indexOf("ms") ? 1e3 : 1;
                return parseFloat(t) * n
            }(e) || 0);
            var a = zn(e, n, r)
              , i = Lt(e, "transitionend", t);
            return function() {
                a(),
                i()
            }
        }
        function Ln(e, t) {
            var n = Tn(e, t) || ""
              , r = -1 === n.indexOf("ms") ? 1e3 : 1;
            return parseFloat(n) * r
        }
        function Dn(e, t) {
            var n = Ln(e, "transitionDuration")
              , r = Ln(e, "transitionDelay")
              , a = Mn(e, (function(n) {
                n.target === e && (a(),
                t(n))
            }
            ), n + r)
        }
        function An(e) {
            return e && "setState"in e ? G.findDOMNode(e) : null != e ? e : null
        }
        var Rn, Fn = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children", "childRef"], In = e.forwardRef((function(t, n) {
            var r = t.onEnter
              , a = t.onEntering
              , i = t.onEntered
              , o = t.onExit
              , l = t.onExiting
              , u = t.onExited
              , s = t.addEndListener
              , f = t.children
              , p = t.childRef
              , m = d(t, Fn)
              , v = (0,
            e.useRef)(null)
              , g = X(v, p)
              , y = function(e) {
                g(An(e))
            }
              , b = function(e) {
                return function(t) {
                    e && v.current && e(v.current, t)
                }
            }
              , w = (0,
            e.useCallback)(b(r), [r])
              , x = (0,
            e.useCallback)(b(a), [a])
              , k = (0,
            e.useCallback)(b(i), [i])
              , S = (0,
            e.useCallback)(b(o), [o])
              , E = (0,
            e.useCallback)(b(l), [l])
              , C = (0,
            e.useCallback)(b(u), [u])
              , O = (0,
            e.useCallback)(b(s), [s]);
            return (0,
            h.jsx)(Cn, c(c({
                ref: n
            }, m), {}, {
                onEnter: w,
                onEntered: k,
                onEntering: x,
                onExit: S,
                onExited: C,
                onExiting: E,
                addEndListener: O,
                nodeRef: v,
                children: "function" === typeof f ? function(e, t) {
                    return f(e, c(c({}, t), {}, {
                        ref: y
                    }))
                }
                : e.cloneElement(f, {
                    ref: y
                })
            }))
        }
        )), Un = In, Hn = ["className", "children", "transitionClasses"], Wn = (u(Rn = {}, wn, "show"),
        u(Rn, xn, "show"),
        Rn), Bn = e.forwardRef((function(t, n) {
            var r = t.className
              , a = t.children
              , i = t.transitionClasses
              , o = void 0 === i ? {} : i
              , l = d(t, Hn)
              , u = (0,
            e.useCallback)((function(e, t) {
                !function(e) {
                    e.offsetHeight
                }(e),
                null == l.onEnter || l.onEnter(e, t)
            }
            ), [l]);
            return (0,
            h.jsx)(Un, c(c({
                ref: n,
                addEndListener: Dn
            }, l), {}, {
                onEnter: u,
                childRef: a.ref,
                children: function(t, n) {
                    return e.cloneElement(a, c(c({}, n), {}, {
                        className: m()("fade", r, a.props.className, Wn[t], o[t])
                    }))
                }
            }))
        }
        ));
        Bn.defaultProps = {
            in: !1,
            timeout: 300,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1
        },
        Bn.displayName = "Fade";
        var Vn = Bn
          , $n = ["children", "transition", "popperConfig"]
          , Yn = {
            transition: Vn,
            rootClose: !1,
            show: !1,
            placement: "top"
        };
        var Qn = e.forwardRef((function(t, n) {
            var r = t.children
              , a = t.transition
              , o = t.popperConfig
              , l = void 0 === o ? {} : o
              , u = d(t, $n)
              , s = (0,
            e.useRef)({})
              , f = function() {
                var t = (0,
                e.useRef)(null)
                  , n = w(void 0, "popover")
                  , r = (0,
                e.useMemo)((function() {
                    return {
                        name: "offset",
                        options: {
                            offset: function() {
                                return t.current && (e = t.current,
                                r = n,
                                e.classList ? r && e.classList.contains(r) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + r + " ")) ? hn.POPPER_OFFSET : [0, 0];
                                var e, r
                            }
                        }
                    }
                }
                ), [n]);
                return [t, [r]]
            }()
              , p = i(f, 2)
              , v = p[0]
              , g = p[1]
              , y = X(n, v)
              , b = !0 === a ? Vn : a || void 0;
            return (0,
            h.jsx)(Gt, c(c({}, u), {}, {
                ref: y,
                popperConfig: c(c({}, l), {}, {
                    modifiers: g.concat(l.modifiers || [])
                }),
                transition: b,
                children: function(t, n) {
                    var i, o, l = n.arrowProps, u = n.placement, f = n.popper, d = n.show;
                    !function(e, t) {
                        var n = e.ref
                          , r = t.ref;
                        e.ref = n.__wrapped || (n.__wrapped = function(e) {
                            return n(An(e))
                        }
                        ),
                        t.ref = r.__wrapped || (r.__wrapped = function(e) {
                            return r(An(e))
                        }
                        )
                    }(t, l);
                    var p = Object.assign(s.current, {
                        state: null == f ? void 0 : f.state,
                        scheduleUpdate: null == f ? void 0 : f.update,
                        placement: u,
                        outOfBoundaries: (null == f || null == (i = f.state) || null == (o = i.modifiersData.hide) ? void 0 : o.isReferenceHidden) || !1
                    });
                    return "function" === typeof r ? r(c(c(c({}, t), {}, {
                        placement: u,
                        show: d
                    }, !a && d && {
                        className: "show"
                    }), {}, {
                        popper: p,
                        arrowProps: l
                    })) : e.cloneElement(r, c(c({}, t), {}, {
                        placement: u,
                        arrowProps: l,
                        popper: p,
                        className: m()(r.props.className, !a && d && "show"),
                        style: c(c({}, r.props.style), t.style)
                    }))
                }
            }))
        }
        ));
        Qn.displayName = "Overlay",
        Qn.defaultProps = Yn;
        var qn = Qn
          , Kn = ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"];
        function Xn(e, t, n) {
            var r = i(t, 1)[0]
              , a = r.currentTarget
              , o = r.relatedTarget || r.nativeEvent[n];
            o && o === a || F(a, o) || e.apply(void 0, R(t))
        }
        function Gn(t) {
            var n = t.trigger
              , r = t.overlay
              , a = t.children
              , o = t.popperConfig
              , l = void 0 === o ? {} : o
              , u = t.show
              , s = t.defaultShow
              , f = void 0 !== s && s
              , p = t.onToggle
              , m = t.delay
              , v = t.placement
              , g = t.flip
              , y = void 0 === g ? v && -1 !== v.indexOf("auto") : g
              , b = d(t, Kn)
              , w = (0,
            e.useRef)(null)
              , x = X(w, a.ref)
              , k = W()
              , S = (0,
            e.useRef)("")
              , E = i($(u, f, p), 2)
              , C = E[0]
              , O = E[1]
              , j = function(e) {
                return e && "object" === typeof e ? e : {
                    show: e,
                    hide: e
                }
            }(m)
              , P = "function" !== typeof a ? e.Children.only(a).props : {}
              , _ = P.onFocus
              , N = P.onBlur
              , T = P.onClick
              , z = (0,
            e.useCallback)((function() {
                k.clear(),
                S.current = "show",
                j.show ? k.set((function() {
                    "show" === S.current && O(!0)
                }
                ), j.show) : O(!0)
            }
            ), [j.show, O, k])
              , M = (0,
            e.useCallback)((function() {
                k.clear(),
                S.current = "hide",
                j.hide ? k.set((function() {
                    "hide" === S.current && O(!1)
                }
                ), j.hide) : O(!1)
            }
            ), [j.hide, O, k])
              , L = (0,
            e.useCallback)((function() {
                z(),
                null == _ || _.apply(void 0, arguments)
            }
            ), [z, _])
              , D = (0,
            e.useCallback)((function() {
                M(),
                null == N || N.apply(void 0, arguments)
            }
            ), [M, N])
              , A = (0,
            e.useCallback)((function() {
                O(!C),
                null == T || T.apply(void 0, arguments)
            }
            ), [T, O, C])
              , R = (0,
            e.useCallback)((function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                Xn(z, t, "fromElement")
            }
            ), [z])
              , F = (0,
            e.useCallback)((function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                Xn(M, t, "toElement")
            }
            ), [M])
              , I = null == n ? [] : [].concat(n)
              , U = {
                ref: function(e) {
                    x(An(e))
                }
            };
            return -1 !== I.indexOf("click") && (U.onClick = A),
            -1 !== I.indexOf("focus") && (U.onFocus = L,
            U.onBlur = D),
            -1 !== I.indexOf("hover") && (U.onMouseOver = R,
            U.onMouseOut = F),
            (0,
            h.jsxs)(h.Fragment, {
                children: ["function" === typeof a ? a(U) : (0,
                e.cloneElement)(a, U), (0,
                h.jsx)(qn, c(c({}, b), {}, {
                    show: C,
                    onHide: M,
                    flip: y,
                    placement: v,
                    popperConfig: l,
                    target: w.current,
                    children: r
                }))]
            })
        }
        Gn.defaultProps = {
            defaultShow: !1,
            trigger: ["hover", "focus"]
        };
        var Zn = Gn
          , Jn = ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"]
          , er = e.forwardRef((function(e, t) {
            var n = e.bsPrefix
              , r = e.placement
              , a = e.className
              , o = e.style
              , l = e.children
              , u = e.arrowProps
              , s = (e.popper,
            e.show,
            d(e, Jn));
            n = w(n, "tooltip");
            var f = x()
              , p = i((null == r ? void 0 : r.split("-")) || [], 1)[0]
              , v = dn(p, f);
            return (0,
            h.jsxs)("div", c(c({
                ref: t,
                style: o,
                role: "tooltip",
                "x-placement": p,
                className: m()(a, n, "bs-tooltip-".concat(v))
            }, s), {}, {
                children: [(0,
                h.jsx)("div", c({
                    className: "tooltip-arrow"
                }, u)), (0,
                h.jsx)("div", {
                    className: "".concat(n, "-inner"),
                    children: l
                })]
            }))
        }
        ));
        er.defaultProps = {
            placement: "right"
        },
        er.displayName = "Tooltip";
        var tr = er
          , nr = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }()
          , rr = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.name = "AssertionError",
                n
            }
            return nr(t, e),
            t
        }(Error);
        function ar(e, t) {
            if (!e)
                throw new rr(t)
        }
        function ir(e) {
            var t = Object.entries(e).filter((function(e) {
                var t = e[1];
                return void 0 !== t && null !== t
            }
            )).map((function(e) {
                var t = e[0]
                  , n = e[1];
                return encodeURIComponent(t) + "=" + encodeURIComponent(String(n))
            }
            ));
            return t.length > 0 ? "?" + t.join("&") : ""
        }
        var or = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }()
          , lr = function() {
            return lr = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ,
            lr.apply(this, arguments)
        }
          , ur = function(e, t, n, r) {
            return new (n || (n = Promise))((function(a, i) {
                function o(e) {
                    try {
                        u(r.next(e))
                    } catch (Tu) {
                        i(Tu)
                    }
                }
                function l(e) {
                    try {
                        u(r.throw(e))
                    } catch (Tu) {
                        i(Tu)
                    }
                }
                function u(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(o, l)
                }
                u((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , sr = function(e, t) {
            var n, r, a, i, o = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function l(i) {
                return function(l) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, i[1])).done)
                                    return a;
                                switch (r = 0,
                                a && (i = [2 & i[0], a.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    a = i;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                        o.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && o.label < a[1]) {
                                        o.label = a[1],
                                        a = i;
                                        break
                                    }
                                    if (a && o.label < a[2]) {
                                        o.label = a[2],
                                        o.ops.push(i);
                                        break
                                    }
                                    a[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                i = t.call(e, o)
                            } catch (Tu) {
                                i = [6, Tu],
                                r = 0
                            } finally {
                                n = a = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, l])
                }
            }
        }
          , cr = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                var a = 0;
                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
            }
            return n
        }
          , fr = function(e) {
            return !!e && ("object" === typeof e || "function" === typeof e) && "function" === typeof e.then
        }
          , dr = function(e, t) {
            return {
                left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
                top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
            }
        }
          , pr = function(e, t) {
            return {
                top: (window.screen.height - t) / 2,
                left: (window.screen.width - e) / 2
            }
        };
        function mr(e, t, n) {
            var r = t.height
              , a = t.width
              , i = cr(t, ["height", "width"])
              , o = lr({
                height: r,
                width: a,
                location: "no",
                toolbar: "no",
                status: "no",
                directories: "no",
                menubar: "no",
                scrollbars: "yes",
                resizable: "no",
                centerscreen: "yes",
                chrome: "yes"
            }, i)
              , l = window.open(e, "", Object.keys(o).map((function(e) {
                return e + "=" + o[e]
            }
            )).join(", "));
            if (n)
                var u = window.setInterval((function() {
                    try {
                        (null === l || l.closed) && (window.clearInterval(u),
                        n(l))
                    } catch (Tu) {
                        console.error(Tu)
                    }
                }
                ), 1e3);
            return l
        }
        var hr = function(t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.openShareDialog = function(t) {
                    var n = e.props
                      , r = n.onShareWindowClose
                      , a = n.windowHeight
                      , i = void 0 === a ? 400 : a
                      , o = n.windowPosition
                      , l = void 0 === o ? "windowCenter" : o
                      , u = n.windowWidth
                      , s = void 0 === u ? 550 : u;
                    mr(t, lr({
                        height: i,
                        width: s
                    }, "windowCenter" === l ? dr(s, i) : pr(s, i)), r)
                }
                ,
                e.handleClick = function(t) {
                    return ur(e, void 0, void 0, (function() {
                        var e, n, r, a, i, o, l, u, s, c;
                        return sr(this, (function(f) {
                            switch (f.label) {
                            case 0:
                                return e = this.props,
                                n = e.beforeOnClick,
                                r = e.disabled,
                                a = e.networkLink,
                                i = e.onClick,
                                o = e.url,
                                l = e.openShareDialogOnClick,
                                u = e.opts,
                                s = a(o, u),
                                r ? [2] : (t.preventDefault(),
                                n ? (c = n(),
                                fr(c) ? [4, c] : [3, 2]) : [3, 2]);
                            case 1:
                                f.sent(),
                                f.label = 2;
                            case 2:
                                return l && this.openShareDialog(s),
                                i && i(t, s),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e
            }
            return or(n, t),
            n.prototype.render = function() {
                var t = this.props
                  , n = (t.beforeOnClick,
                t.children)
                  , r = t.className
                  , a = t.disabled
                  , i = t.disabledStyle
                  , o = t.forwardedRef
                  , l = (t.networkLink,
                t.networkName)
                  , u = (t.onShareWindowClose,
                t.openShareDialogOnClick,
                t.opts,
                t.resetButtonStyle)
                  , s = t.style
                  , c = (t.url,
                t.windowHeight,
                t.windowPosition,
                t.windowWidth,
                cr(t, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]))
                  , f = m()("react-share__ShareButton", {
                    "react-share__ShareButton--disabled": !!a,
                    disabled: !!a
                }, r)
                  , d = lr(lr(u ? {
                    backgroundColor: "transparent",
                    border: "none",
                    padding: 0,
                    font: "inherit",
                    color: "inherit",
                    cursor: "pointer"
                } : {}, s), a && i);
                return e.createElement("button", lr({}, c, {
                    "aria-label": c["aria-label"] || l,
                    className: f,
                    onClick: this.handleClick,
                    ref: o,
                    style: d
                }), n)
            }
            ,
            n.defaultProps = {
                disabledStyle: {
                    opacity: .6
                },
                openShareDialogOnClick: !0,
                resetButtonStyle: !0
            },
            n
        }(e.Component)
          , vr = hr
          , gr = function() {
            return gr = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ,
            gr.apply(this, arguments)
        };
        var yr = function(t, n, r, a) {
            function i(i, o) {
                var l = r(i)
                  , u = gr({}, i);
                return Object.keys(l).forEach((function(e) {
                    delete u[e]
                }
                )),
                e.createElement(vr, gr({}, a, u, {
                    forwardedRef: o,
                    networkName: t,
                    networkLink: n,
                    opts: r(i)
                }))
            }
            return i.displayName = "ShareButton-" + t,
            (0,
            e.forwardRef)(i)
        };
        var br = yr("facebook", (function(e, t) {
            var n = t.quote
              , r = t.hashtag;
            return ar(e, "facebook.url"),
            "https://www.facebook.com/sharer/sharer.php" + ir({
                u: e,
                quote: n,
                hashtag: r
            })
        }
        ), (function(e) {
            return {
                quote: e.quote,
                hashtag: e.hashtag
            }
        }
        ), {
            windowWidth: 550,
            windowHeight: 400
        })
          , wr = function() {
            return wr = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ,
            wr.apply(this, arguments)
        }
          , xr = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                var a = 0;
                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
            }
            return n
        };
        function kr(t) {
            var n = function(n) {
                var r = n.bgStyle
                  , a = n.borderRadius
                  , i = n.iconFillColor
                  , o = n.round
                  , l = n.size
                  , u = xr(n, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
                return e.createElement("svg", wr({
                    viewBox: "0 0 64 64",
                    width: l,
                    height: l
                }, u), o ? e.createElement("circle", {
                    cx: "32",
                    cy: "32",
                    r: "31",
                    fill: t.color,
                    style: r
                }) : e.createElement("rect", {
                    width: "64",
                    height: "64",
                    rx: a,
                    ry: a,
                    fill: t.color,
                    style: r
                }), e.createElement("path", {
                    d: t.path,
                    fill: i
                }))
            };
            return n.defaultProps = {
                bgStyle: {},
                borderRadius: 0,
                iconFillColor: "white",
                size: 64
            },
            n
        }
        var Sr = kr({
            color: "#3b5998",
            networkName: "facebook",
            path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
        });
        var Er = yr("twitter", (function(e, t) {
            var n = t.title
              , r = t.via
              , a = t.hashtags
              , i = void 0 === a ? [] : a
              , o = t.related
              , l = void 0 === o ? [] : o;
            return ar(e, "twitter.url"),
            ar(Array.isArray(i), "twitter.hashtags is not an array"),
            ar(Array.isArray(l), "twitter.related is not an array"),
            "https://twitter.com/share" + ir({
                url: e,
                text: n,
                via: r,
                hashtags: i.length > 0 ? i.join(",") : void 0,
                related: l.length > 0 ? l.join(",") : void 0
            })
        }
        ), (function(e) {
            return {
                hashtags: e.hashtags,
                title: e.title,
                via: e.via,
                related: e.related
            }
        }
        ), {
            windowWidth: 550,
            windowHeight: 400
        })
          , Cr = Er
          , Or = kr({
            color: "#00aced",
            networkName: "twitter",
            path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
        });
        var jr = yr("line", (function(e, t) {
            var n = t.title;
            return ar(e, "line.url"),
            "https://social-plugins.line.me/lineit/share" + ir({
                url: e,
                text: n
            })
        }
        ), (function(e) {
            return {
                title: e.title
            }
        }
        ), {
            windowWidth: 500,
            windowHeight: 500
        })
          , Pr = jr
          , _r = kr({
            color: "#00b800",
            networkName: "line",
            path: "M52.62 30.138c0 3.693-1.432 7.019-4.42 10.296h.001c-4.326 4.979-14 11.044-16.201 11.972-2.2.927-1.876-.591-1.786-1.112l.294-1.765c.069-.527.142-1.343-.066-1.865-.232-.574-1.146-.872-1.817-1.016-9.909-1.31-17.245-8.238-17.245-16.51 0-9.226 9.251-16.733 20.62-16.733 11.37 0 20.62 7.507 20.62 16.733zM27.81 25.68h-1.446a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-8.985a.402.402 0 0 0-.402-.401zm9.956 0H36.32a.402.402 0 0 0-.402.401v5.338L31.8 25.858a.39.39 0 0 0-.031-.04l-.002-.003-.024-.025-.008-.007a.313.313 0 0 0-.032-.026.255.255 0 0 1-.021-.014l-.012-.007-.021-.012-.013-.006-.023-.01-.013-.005-.024-.008-.014-.003-.023-.005-.017-.002-.021-.003-.021-.002h-1.46a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-5.337l4.123 5.568c.028.04.063.072.101.099l.004.003a.236.236 0 0 0 .025.015l.012.006.019.01a.154.154 0 0 1 .019.008l.012.004.028.01.005.001a.442.442 0 0 0 .104.013h1.446a.4.4 0 0 0 .401-.4v-8.985a.402.402 0 0 0-.401-.401zm-13.442 7.537h-3.93v-7.136a.401.401 0 0 0-.401-.401h-1.447a.4.4 0 0 0-.401.401v8.984a.392.392 0 0 0 .123.29c.072.068.17.111.278.111h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401zm21.429-5.287c.222 0 .401-.18.401-.402v-1.446a.401.401 0 0 0-.401-.402h-5.778a.398.398 0 0 0-.279.113l-.005.004-.006.008a.397.397 0 0 0-.111.276v8.984c0 .108.043.206.112.278l.005.006a.401.401 0 0 0 .284.117h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401h-3.93v-1.519h3.93c.222 0 .401-.18.401-.402V29.85a.401.401 0 0 0-.401-.402h-3.93V27.93h3.93z"
        });
        var Nr = yr("hatena", (function(e, t) {
            var n = t.title;
            return ar(e, "hatena.url"),
            "http://b.hatena.ne.jp/add?mode=confirm&url=" + e + "&title=" + n
        }
        ), (function(e) {
            return {
                title: e.title
            }
        }
        ), {
            windowWidth: 660,
            windowHeight: 460,
            windowPosition: "windowCenter"
        })
          , Tr = Nr
          , zr = kr({
            color: "#009ad9",
            networkName: "hatena",
            path: "M 36.164062 33.554688 C 34.988281 32.234375 33.347656 31.5 31.253906 31.34375 C 33.125 30.835938 34.476562 30.09375 35.335938 29.09375 C 36.191406 28.09375 36.609375 26.78125 36.609375 25.101562 C 36.628906 23.875 36.332031 22.660156 35.75 21.578125 C 35.160156 20.558594 34.292969 19.71875 33.253906 19.160156 C 32.304688 18.640625 31.175781 18.265625 29.847656 18.042969 C 28.523438 17.824219 26.195312 17.730469 22.867188 17.730469 L 14.769531 17.730469 L 14.769531 47.269531 L 23.113281 47.269531 C 26.46875 47.269531 28.886719 47.15625 30.367188 46.929688 C 31.851562 46.695312 33.085938 46.304688 34.085938 45.773438 C 35.289062 45.148438 36.28125 44.179688 36.933594 42.992188 C 37.597656 41.796875 37.933594 40.402344 37.933594 38.816406 C 37.933594 36.621094 37.347656 34.867188 36.164062 33.554688 Z M 22.257812 24.269531 L 23.984375 24.269531 C 25.988281 24.269531 27.332031 24.496094 28.015625 24.945312 C 28.703125 25.402344 29.042969 26.183594 29.042969 27.285156 C 29.042969 28.390625 28.664062 29.105469 27.9375 29.550781 C 27.210938 29.992188 25.84375 30.199219 23.855469 30.199219 L 22.257812 30.199219 Z M 29.121094 41.210938 C 28.328125 41.691406 26.976562 41.925781 25.078125 41.925781 L 22.257812 41.925781 L 22.257812 35.488281 L 25.195312 35.488281 C 27.144531 35.488281 28.496094 35.738281 29.210938 36.230469 C 29.925781 36.726562 30.304688 37.582031 30.304688 38.832031 C 30.304688 40.078125 29.914062 40.742188 29.105469 41.222656 Z M 29.121094 41.210938 M 46.488281 39.792969 C 44.421875 39.792969 42.742188 41.46875 42.742188 43.535156 C 42.742188 45.605469 44.421875 47.28125 46.488281 47.28125 C 48.554688 47.28125 50.230469 45.605469 50.230469 43.535156 C 50.230469 41.46875 48.554688 39.792969 46.488281 39.792969 Z M 46.488281 39.792969 M 43.238281 17.730469 L 49.738281 17.730469 L 49.738281 37.429688 L 43.238281 37.429688 Z M 43.238281 17.730469 "
        })
          , Mr = n.p + "static/media/default.9e035211f7ea85573b48.png"
          , Lr = n(7)
          , Dr = n.n(Lr);
        function Ar(e, t, n, r) {
            return new (n || (n = Promise))((function(a, i) {
                function o(e) {
                    try {
                        u(r.next(e))
                    } catch (Tu) {
                        i(Tu)
                    }
                }
                function l(e) {
                    try {
                        u(r.throw(e))
                    } catch (Tu) {
                        i(Tu)
                    }
                }
                function u(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(o, l)
                }
                u((r = r.apply(e, t || [])).next())
            }
            ))
        }
        function Rr(e, t) {
            var n, r, a, i, o = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function l(i) {
                return function(l) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, i[1])).done)
                                    return a;
                                switch (r = 0,
                                a && (i = [2 & i[0], a.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    a = i;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                        o.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && o.label < a[1]) {
                                        o.label = a[1],
                                        a = i;
                                        break
                                    }
                                    if (a && o.label < a[2]) {
                                        o.label = a[2],
                                        o.ops.push(i);
                                        break
                                    }
                                    a[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                i = t.call(e, o)
                            } catch (Tu) {
                                i = [6, Tu],
                                r = 0
                            } finally {
                                n = a = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, l])
                }
            }
        }
        Object.create;
        function Fr(e, t) {
            var n = "function" === typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var r, a, i = n.call(e), o = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                    o.push(r.value)
            } catch (l) {
                a = {
                    error: l
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (a)
                        throw a.error
                }
            }
            return o
        }
        Object.create;
        var Ir = new Map([["aac", "audio/aac"], ["abw", "application/x-abiword"], ["arc", "application/x-freearc"], ["avif", "image/avif"], ["avi", "video/x-msvideo"], ["azw", "application/vnd.amazon.ebook"], ["bin", "application/octet-stream"], ["bmp", "image/bmp"], ["bz", "application/x-bzip"], ["bz2", "application/x-bzip2"], ["cda", "application/x-cdf"], ["csh", "application/x-csh"], ["css", "text/css"], ["csv", "text/csv"], ["doc", "application/msword"], ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], ["eot", "application/vnd.ms-fontobject"], ["epub", "application/epub+zip"], ["gz", "application/gzip"], ["gif", "image/gif"], ["heic", "image/heic"], ["heif", "image/heif"], ["htm", "text/html"], ["html", "text/html"], ["ico", "image/vnd.microsoft.icon"], ["ics", "text/calendar"], ["jar", "application/java-archive"], ["jpeg", "image/jpeg"], ["jpg", "image/jpeg"], ["js", "text/javascript"], ["json", "application/json"], ["jsonld", "application/ld+json"], ["mid", "audio/midi"], ["midi", "audio/midi"], ["mjs", "text/javascript"], ["mp3", "audio/mpeg"], ["mp4", "video/mp4"], ["mpeg", "video/mpeg"], ["mpkg", "application/vnd.apple.installer+xml"], ["odp", "application/vnd.oasis.opendocument.presentation"], ["ods", "application/vnd.oasis.opendocument.spreadsheet"], ["odt", "application/vnd.oasis.opendocument.text"], ["oga", "audio/ogg"], ["ogv", "video/ogg"], ["ogx", "application/ogg"], ["opus", "audio/opus"], ["otf", "font/otf"], ["png", "image/png"], ["pdf", "application/pdf"], ["php", "application/x-httpd-php"], ["ppt", "application/vnd.ms-powerpoint"], ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"], ["rar", "application/vnd.rar"], ["rtf", "application/rtf"], ["sh", "application/x-sh"], ["svg", "image/svg+xml"], ["swf", "application/x-shockwave-flash"], ["tar", "application/x-tar"], ["tif", "image/tiff"], ["tiff", "image/tiff"], ["ts", "video/mp2t"], ["ttf", "font/ttf"], ["txt", "text/plain"], ["vsd", "application/vnd.visio"], ["wav", "audio/wav"], ["weba", "audio/webm"], ["webm", "video/webm"], ["webp", "image/webp"], ["woff", "font/woff"], ["woff2", "font/woff2"], ["xhtml", "application/xhtml+xml"], ["xls", "application/vnd.ms-excel"], ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"], ["xml", "application/xml"], ["xul", "application/vnd.mozilla.xul+xml"], ["zip", "application/zip"], ["7z", "application/x-7z-compressed"], ["mkv", "video/x-matroska"], ["mov", "video/quicktime"], ["msg", "application/vnd.ms-outlook"]]);
        function Ur(e, t) {
            var n = function(e) {
                var t = e.name;
                if (t && -1 !== t.lastIndexOf(".") && !e.type) {
                    var n = t.split(".").pop().toLowerCase()
                      , r = Ir.get(n);
                    r && Object.defineProperty(e, "type", {
                        value: r,
                        writable: !1,
                        configurable: !1,
                        enumerable: !0
                    })
                }
                return e
            }(e);
            if ("string" !== typeof n.path) {
                var r = e.webkitRelativePath;
                Object.defineProperty(n, "path", {
                    value: "string" === typeof t ? t : "string" === typeof r && r.length > 0 ? r : e.name,
                    writable: !1,
                    configurable: !1,
                    enumerable: !0
                })
            }
            return n
        }
        var Hr = [".DS_Store", "Thumbs.db"];
        function Wr(e) {
            return "object" === typeof e && null !== e
        }
        function Br(e) {
            return Qr(e.target.files).map((function(e) {
                return Ur(e)
            }
            ))
        }
        function Vr(e) {
            return Ar(this, void 0, void 0, (function() {
                return Rr(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, Promise.all(e.map((function(e) {
                            return e.getFile()
                        }
                        )))];
                    case 1:
                        return [2, t.sent().map((function(e) {
                            return Ur(e)
                        }
                        ))]
                    }
                }
                ))
            }
            ))
        }
        function $r(e, t) {
            return Ar(this, void 0, void 0, (function() {
                var n;
                return Rr(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return null === e ? [2, []] : e.items ? (n = Qr(e.items).filter((function(e) {
                            return "file" === e.kind
                        }
                        )),
                        "drop" !== t ? [2, n] : [4, Promise.all(n.map(qr))]) : [3, 2];
                    case 1:
                        return [2, Yr(Kr(r.sent()))];
                    case 2:
                        return [2, Yr(Qr(e.files).map((function(e) {
                            return Ur(e)
                        }
                        )))]
                    }
                }
                ))
            }
            ))
        }
        function Yr(e) {
            return e.filter((function(e) {
                return -1 === Hr.indexOf(e.name)
            }
            ))
        }
        function Qr(e) {
            if (null === e)
                return [];
            for (var t = [], n = 0; n < e.length; n++) {
                var r = e[n];
                t.push(r)
            }
            return t
        }
        function qr(e) {
            if ("function" !== typeof e.webkitGetAsEntry)
                return Xr(e);
            var t = e.webkitGetAsEntry();
            return t && t.isDirectory ? Zr(t) : Xr(e)
        }
        function Kr(e) {
            return e.reduce((function(e, t) {
                return function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e = e.concat(Fr(arguments[t]));
                    return e
                }(e, Array.isArray(t) ? Kr(t) : [t])
            }
            ), [])
        }
        function Xr(e) {
            var t = e.getAsFile();
            if (!t)
                return Promise.reject(e + " is not a File");
            var n = Ur(t);
            return Promise.resolve(n)
        }
        function Gr(e) {
            return Ar(this, void 0, void 0, (function() {
                return Rr(this, (function(t) {
                    return [2, e.isDirectory ? Zr(e) : Jr(e)]
                }
                ))
            }
            ))
        }
        function Zr(e) {
            var t = e.createReader();
            return new Promise((function(e, n) {
                var r = [];
                !function a() {
                    var i = this;
                    t.readEntries((function(t) {
                        return Ar(i, void 0, void 0, (function() {
                            var i, o, l;
                            return Rr(this, (function(u) {
                                switch (u.label) {
                                case 0:
                                    if (t.length)
                                        return [3, 5];
                                    u.label = 1;
                                case 1:
                                    return u.trys.push([1, 3, , 4]),
                                    [4, Promise.all(r)];
                                case 2:
                                    return i = u.sent(),
                                    e(i),
                                    [3, 4];
                                case 3:
                                    return o = u.sent(),
                                    n(o),
                                    [3, 4];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    l = Promise.all(t.map(Gr)),
                                    r.push(l),
                                    a(),
                                    u.label = 6;
                                case 6:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ), (function(e) {
                        n(e)
                    }
                    ))
                }()
            }
            ))
        }
        function Jr(e) {
            return Ar(this, void 0, void 0, (function() {
                return Rr(this, (function(t) {
                    return [2, new Promise((function(t, n) {
                        e.file((function(n) {
                            var r = Ur(n, e.fullPath);
                            t(r)
                        }
                        ), (function(e) {
                            n(e)
                        }
                        ))
                    }
                    ))]
                }
                ))
            }
            ))
        }
        var ea = n(998);
        function ta(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function na(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ta(Object(n), !0).forEach((function(t) {
                    ra(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ta(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function ra(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function aa(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n)
                    return;
                var r, a, i = [], o = !0, l = !1;
                try {
                    for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                    !t || i.length !== t); o = !0)
                        ;
                } catch (u) {
                    l = !0,
                    a = u
                } finally {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw a
                    }
                }
                return i
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return ia(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return ia(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ia(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var oa = "file-invalid-type"
          , la = "file-too-large"
          , ua = "file-too-small"
          , sa = "too-many-files"
          , ca = function(e) {
            e = Array.isArray(e) && 1 === e.length ? e[0] : e;
            var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
            return {
                code: oa,
                message: "File type must be ".concat(t)
            }
        }
          , fa = function(e) {
            return {
                code: la,
                message: "File is larger than ".concat(e, " ").concat(1 === e ? "byte" : "bytes")
            }
        }
          , da = function(e) {
            return {
                code: ua,
                message: "File is smaller than ".concat(e, " ").concat(1 === e ? "byte" : "bytes")
            }
        }
          , pa = {
            code: sa,
            message: "Too many files"
        };
        function ma(e, t) {
            var n = "application/x-moz-file" === e.type || (0,
            ea.Z)(e, t);
            return [n, n ? null : ca(t)]
        }
        function ha(e, t, n) {
            if (va(e.size))
                if (va(t) && va(n)) {
                    if (e.size > n)
                        return [!1, fa(n)];
                    if (e.size < t)
                        return [!1, da(t)]
                } else {
                    if (va(t) && e.size < t)
                        return [!1, da(t)];
                    if (va(n) && e.size > n)
                        return [!1, fa(n)]
                }
            return [!0, null]
        }
        function va(e) {
            return void 0 !== e && null !== e
        }
        function ga(e) {
            var t = e.files
              , n = e.accept
              , r = e.minSize
              , a = e.maxSize
              , i = e.multiple
              , o = e.maxFiles;
            return !(!i && t.length > 1 || i && o >= 1 && t.length > o) && t.every((function(e) {
                var t = aa(ma(e, n), 1)[0]
                  , i = aa(ha(e, r, a), 1)[0];
                return t && i
            }
            ))
        }
        function ya(e) {
            return "function" === typeof e.isPropagationStopped ? e.isPropagationStopped() : "undefined" !== typeof e.cancelBubble && e.cancelBubble
        }
        function ba(e) {
            return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, (function(e) {
                return "Files" === e || "application/x-moz-file" === e
            }
            )) : !!e.target && !!e.target.files
        }
        function wa(e) {
            e.preventDefault()
        }
        function xa(e) {
            return -1 !== e.indexOf("MSIE") || -1 !== e.indexOf("Trident/")
        }
        function ka(e) {
            return -1 !== e.indexOf("Edge/")
        }
        function Sa() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return xa(e) || ka(e)
        }
        function Ea() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(e) {
                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
                    r[a - 1] = arguments[a];
                return t.some((function(t) {
                    return !ya(e) && t && t.apply(void 0, [e].concat(r)),
                    ya(e)
                }
                ))
            }
        }
        function Ca() {
            return "showOpenFilePicker"in window
        }
        function Oa(e) {
            return e = "string" === typeof e ? e.split(",") : e,
            [{
                description: "everything",
                accept: Array.isArray(e) ? e.filter((function(e) {
                    return "audio/*" === e || "video/*" === e || "image/*" === e || "text/*" === e || /\w+\/[-+.\w]+/g.test(e)
                }
                )).reduce((function(e, t) {
                    return na(na({}, e), {}, ra({}, t, []))
                }
                ), {}) : {}
            }]
        }
        function ja(e) {
            return e instanceof DOMException && ("AbortError" === e.name || e.code === e.ABORT_ERR)
        }
        function Pa(e) {
            return e instanceof DOMException && ("SecurityError" === e.name || e.code === e.SECURITY_ERR)
        }
        var _a = ["children"]
          , Na = ["open"]
          , Ta = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"]
          , za = ["refKey", "onChange", "onClick"];
        function Ma(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Aa(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || Da(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function La(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n)
                    return;
                var r, a, i = [], o = !0, l = !1;
                try {
                    for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                    !t || i.length !== t); o = !0)
                        ;
                } catch (u) {
                    l = !0,
                    a = u
                } finally {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw a
                    }
                }
                return i
            }(e, t) || Da(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Da(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return Aa(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Aa(e, t) : void 0
            }
        }
        function Aa(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function Ra(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Fa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ra(Object(n), !0).forEach((function(t) {
                    Ia(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ra(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function Ia(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Ua(e, t) {
            if (null == e)
                return {};
            var n, r, a = function(e, t) {
                if (null == e)
                    return {};
                var n, r, a = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }
        var Ha = (0,
        e.forwardRef)((function(t, n) {
            var r = t.children
              , a = Va(Ua(t, _a))
              , i = a.open
              , o = Ua(a, Na);
            return (0,
            e.useImperativeHandle)(n, (function() {
                return {
                    open: i
                }
            }
            ), [i]),
            e.createElement(e.Fragment, null, r(Fa(Fa({}, o), {}, {
                open: i
            })))
        }
        ));
        Ha.displayName = "Dropzone";
        var Wa = {
            disabled: !1,
            getFilesFromEvent: function(e) {
                return Ar(this, void 0, void 0, (function() {
                    return Rr(this, (function(t) {
                        return Wr(e) && Wr(e.dataTransfer) ? [2, $r(e.dataTransfer, e.type)] : function(e) {
                            return Wr(e) && Wr(e.target)
                        }(e) ? [2, Br(e)] : Array.isArray(e) && e.every((function(e) {
                            return "getFile"in e && "function" === typeof e.getFile
                        }
                        )) ? [2, Vr(e)] : [2, []]
                    }
                    ))
                }
                ))
            },
            maxSize: 1 / 0,
            minSize: 0,
            multiple: !0,
            maxFiles: 0,
            preventDropOnDocument: !0,
            noClick: !1,
            noKeyboard: !1,
            noDrag: !1,
            noDragEventsBubbling: !1,
            validator: null,
            useFsAccessApi: !0
        };
        Ha.defaultProps = Wa,
        Ha.propTypes = {
            children: Dr().func,
            accept: Dr().oneOfType([Dr().string, Dr().arrayOf(Dr().string)]),
            multiple: Dr().bool,
            preventDropOnDocument: Dr().bool,
            noClick: Dr().bool,
            noKeyboard: Dr().bool,
            noDrag: Dr().bool,
            noDragEventsBubbling: Dr().bool,
            minSize: Dr().number,
            maxSize: Dr().number,
            maxFiles: Dr().number,
            disabled: Dr().bool,
            getFilesFromEvent: Dr().func,
            onFileDialogCancel: Dr().func,
            onFileDialogOpen: Dr().func,
            useFsAccessApi: Dr().bool,
            onDragEnter: Dr().func,
            onDragLeave: Dr().func,
            onDragOver: Dr().func,
            onDrop: Dr().func,
            onDropAccepted: Dr().func,
            onDropRejected: Dr().func,
            validator: Dr().func
        };
        var Ba = {
            isFocused: !1,
            isFileDialogActive: !1,
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1,
            draggedFiles: [],
            acceptedFiles: [],
            fileRejections: []
        };
        function Va() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = Fa(Fa({}, Wa), t)
              , r = n.accept
              , a = n.disabled
              , i = n.getFilesFromEvent
              , o = n.maxSize
              , l = n.minSize
              , u = n.multiple
              , s = n.maxFiles
              , c = n.onDragEnter
              , f = n.onDragLeave
              , d = n.onDragOver
              , p = n.onDrop
              , m = n.onDropAccepted
              , h = n.onDropRejected
              , v = n.onFileDialogCancel
              , g = n.onFileDialogOpen
              , y = n.useFsAccessApi
              , b = n.preventDropOnDocument
              , w = n.noClick
              , x = n.noKeyboard
              , k = n.noDrag
              , S = n.noDragEventsBubbling
              , E = n.validator
              , C = (0,
            e.useMemo)((function() {
                return "function" === typeof g ? g : Ya
            }
            ), [g])
              , O = (0,
            e.useMemo)((function() {
                return "function" === typeof v ? v : Ya
            }
            ), [v])
              , j = (0,
            e.useRef)(null)
              , P = (0,
            e.useRef)(null)
              , _ = (0,
            e.useReducer)($a, Ba)
              , N = La(_, 2)
              , T = N[0]
              , z = N[1]
              , M = T.isFocused
              , L = T.isFileDialogActive
              , D = T.draggedFiles
              , A = (0,
            e.useRef)("undefined" !== typeof window && window.isSecureContext && y && Ca())
              , R = function() {
                !A.current && L && setTimeout((function() {
                    P.current && (P.current.files.length || (z({
                        type: "closeDialog"
                    }),
                    O()))
                }
                ), 300)
            };
            (0,
            e.useEffect)((function() {
                return window.addEventListener("focus", R, !1),
                function() {
                    window.removeEventListener("focus", R, !1)
                }
            }
            ), [P, L, O, A]);
            var F = (0,
            e.useRef)([])
              , I = function(e) {
                j.current && j.current.contains(e.target) || (e.preventDefault(),
                F.current = [])
            };
            (0,
            e.useEffect)((function() {
                return b && (document.addEventListener("dragover", wa, !1),
                document.addEventListener("drop", I, !1)),
                function() {
                    b && (document.removeEventListener("dragover", wa),
                    document.removeEventListener("drop", I))
                }
            }
            ), [j, b]);
            var U = (0,
            e.useCallback)((function(e) {
                e.preventDefault(),
                e.persist(),
                J(e),
                F.current = [].concat(Ma(F.current), [e.target]),
                ba(e) && Promise.resolve(i(e)).then((function(t) {
                    ya(e) && !S || (z({
                        draggedFiles: t,
                        isDragActive: !0,
                        type: "setDraggedFiles"
                    }),
                    c && c(e))
                }
                ))
            }
            ), [i, c, S])
              , H = (0,
            e.useCallback)((function(e) {
                e.preventDefault(),
                e.persist(),
                J(e);
                var t = ba(e);
                if (t && e.dataTransfer)
                    try {
                        e.dataTransfer.dropEffect = "copy"
                    } catch (n) {}
                return t && d && d(e),
                !1
            }
            ), [d, S])
              , W = (0,
            e.useCallback)((function(e) {
                e.preventDefault(),
                e.persist(),
                J(e);
                var t = F.current.filter((function(e) {
                    return j.current && j.current.contains(e)
                }
                ))
                  , n = t.indexOf(e.target);
                -1 !== n && t.splice(n, 1),
                F.current = t,
                t.length > 0 || (z({
                    isDragActive: !1,
                    type: "setDraggedFiles",
                    draggedFiles: []
                }),
                ba(e) && f && f(e))
            }
            ), [j, f, S])
              , B = (0,
            e.useCallback)((function(e, t) {
                var n = []
                  , a = [];
                e.forEach((function(e) {
                    var t = La(ma(e, r), 2)
                      , i = t[0]
                      , u = t[1]
                      , s = La(ha(e, l, o), 2)
                      , c = s[0]
                      , f = s[1]
                      , d = E ? E(e) : null;
                    if (i && c && !d)
                        n.push(e);
                    else {
                        var p = [u, f];
                        d && (p = p.concat(d)),
                        a.push({
                            file: e,
                            errors: p.filter((function(e) {
                                return e
                            }
                            ))
                        })
                    }
                }
                )),
                (!u && n.length > 1 || u && s >= 1 && n.length > s) && (n.forEach((function(e) {
                    a.push({
                        file: e,
                        errors: [pa]
                    })
                }
                )),
                n.splice(0)),
                z({
                    acceptedFiles: n,
                    fileRejections: a,
                    type: "setFiles"
                }),
                p && p(n, a, t),
                a.length > 0 && h && h(a, t),
                n.length > 0 && m && m(n, t)
            }
            ), [z, u, r, l, o, s, p, m, h, E])
              , V = (0,
            e.useCallback)((function(e) {
                e.preventDefault(),
                e.persist(),
                J(e),
                F.current = [],
                ba(e) && Promise.resolve(i(e)).then((function(t) {
                    ya(e) && !S || B(t, e)
                }
                )),
                z({
                    type: "reset"
                })
            }
            ), [i, B, S])
              , $ = (0,
            e.useCallback)((function() {
                if (A.current) {
                    z({
                        type: "openDialog"
                    }),
                    C();
                    var e = {
                        multiple: u,
                        types: Oa(r)
                    };
                    window.showOpenFilePicker(e).then((function(e) {
                        return i(e)
                    }
                    )).then((function(e) {
                        B(e, null),
                        z({
                            type: "closeDialog"
                        })
                    }
                    )).catch((function(e) {
                        ja(e) ? (O(e),
                        z({
                            type: "closeDialog"
                        })) : Pa(e) && (A.current = !1,
                        P.current && (P.current.value = null,
                        P.current.click()))
                    }
                    ))
                } else
                    P.current && (z({
                        type: "openDialog"
                    }),
                    C(),
                    P.current.value = null,
                    P.current.click())
            }
            ), [z, C, O, y, B, r, u])
              , Y = (0,
            e.useCallback)((function(e) {
                j.current && j.current.isEqualNode(e.target) && (" " !== e.key && "Enter" !== e.key && 32 !== e.keyCode && 13 !== e.keyCode || (e.preventDefault(),
                $()))
            }
            ), [j, $])
              , Q = (0,
            e.useCallback)((function() {
                z({
                    type: "focus"
                })
            }
            ), [])
              , q = (0,
            e.useCallback)((function() {
                z({
                    type: "blur"
                })
            }
            ), [])
              , K = (0,
            e.useCallback)((function() {
                w || (Sa() ? setTimeout($, 0) : $())
            }
            ), [w, $])
              , X = function(e) {
                return a ? null : e
            }
              , G = function(e) {
                return x ? null : X(e)
            }
              , Z = function(e) {
                return k ? null : X(e)
            }
              , J = function(e) {
                S && e.stopPropagation()
            }
              , ee = (0,
            e.useMemo)((function() {
                return function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.refKey
                      , n = void 0 === t ? "ref" : t
                      , r = e.role
                      , i = e.onKeyDown
                      , o = e.onFocus
                      , l = e.onBlur
                      , u = e.onClick
                      , s = e.onDragEnter
                      , c = e.onDragOver
                      , f = e.onDragLeave
                      , d = e.onDrop
                      , p = Ua(e, Ta);
                    return Fa(Fa(Ia({
                        onKeyDown: G(Ea(i, Y)),
                        onFocus: G(Ea(o, Q)),
                        onBlur: G(Ea(l, q)),
                        onClick: X(Ea(u, K)),
                        onDragEnter: Z(Ea(s, U)),
                        onDragOver: Z(Ea(c, H)),
                        onDragLeave: Z(Ea(f, W)),
                        onDrop: Z(Ea(d, V)),
                        role: "string" === typeof r && "" !== r ? r : "button"
                    }, n, j), a || x ? {} : {
                        tabIndex: 0
                    }), p)
                }
            }
            ), [j, Y, Q, q, K, U, H, W, V, x, k, a])
              , te = (0,
            e.useCallback)((function(e) {
                e.stopPropagation()
            }
            ), [])
              , ne = (0,
            e.useMemo)((function() {
                return function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.refKey
                      , n = void 0 === t ? "ref" : t
                      , a = e.onChange
                      , i = e.onClick
                      , o = Ua(e, za)
                      , l = Ia({
                        accept: r,
                        multiple: u,
                        type: "file",
                        style: {
                            display: "none"
                        },
                        onChange: X(Ea(a, V)),
                        onClick: X(Ea(i, te)),
                        tabIndex: -1
                    }, n, P);
                    return Fa(Fa({}, l), o)
                }
            }
            ), [P, r, u, V, a])
              , re = D.length
              , ae = re > 0 && ga({
                files: D,
                accept: r,
                minSize: l,
                maxSize: o,
                multiple: u,
                maxFiles: s
            })
              , ie = re > 0 && !ae;
            return Fa(Fa({}, T), {}, {
                isDragAccept: ae,
                isDragReject: ie,
                isFocused: M && !a,
                getRootProps: ee,
                getInputProps: ne,
                rootRef: j,
                inputRef: P,
                open: X($)
            })
        }
        function $a(e, t) {
            switch (t.type) {
            case "focus":
                return Fa(Fa({}, e), {}, {
                    isFocused: !0
                });
            case "blur":
                return Fa(Fa({}, e), {}, {
                    isFocused: !1
                });
            case "openDialog":
                return Fa(Fa({}, Ba), {}, {
                    isFileDialogActive: !0
                });
            case "closeDialog":
                return Fa(Fa({}, e), {}, {
                    isFileDialogActive: !1
                });
            case "setDraggedFiles":
                var n = t.isDragActive
                  , r = t.draggedFiles;
                return Fa(Fa({}, e), {}, {
                    draggedFiles: r,
                    isDragActive: n
                });
            case "setFiles":
                return Fa(Fa({}, e), {}, {
                    acceptedFiles: t.acceptedFiles,
                    fileRejections: t.fileRejections
                });
            case "reset":
                return Fa({}, Ba);
            default:
                return e
            }
        }
        function Ya() {}
        var Qa = ["onDrop", "children"]
          , qa = {
            cursor: "auto",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px 0",
            borderWidth: 2,
            borderRadius: 2,
            borderColor: "#eeeeee",
            borderStyle: "dashed",
            backgroundColor: "#fafafa",
            color: "#bdbdbd",
            outline: "none",
            transition: "border .24s ease-in-out"
        }
          , Ka = {
            borderColor: "#2196f3"
        }
          , Xa = {
            borderColor: "#00e676"
        }
          , Ga = {
            borderColor: "#ff1744"
        }
          , Za = function(t) {
            var n = t.onDrop
              , r = t.children
              , a = d(t, Qa)
              , i = Va({
                accept: "image/*",
                noClick: !0,
                maxFiles: 1
            })
              , o = i.acceptedFiles
              , l = i.getRootProps
              , u = i.getInputProps
              , s = i.isFocused
              , f = i.isDragAccept
              , p = i.isDragReject;
            (0,
            e.useEffect)((function() {
                o.length && n && n(o)
            }
            ), [o]);
            var m = (0,
            e.useMemo)((function() {
                return c(c(c(c({}, qa), s ? Ka : {}), f ? Xa : {}), p ? Ga : {})
            }
            ), [s, f, p]);
            return (0,
            h.jsx)("div", c(c({
                className: "container"
            }, a), {}, {
                children: (0,
                h.jsxs)("div", c(c({}, l({
                    style: m
                })), {}, {
                    children: [(0,
                    h.jsx)("input", c({}, u())), r]
                }))
            }))
        }
          , Ja = {
            prefix: "fas",
            iconName: "camera",
            icon: [512, 512, [62258, "camera-alt"], "f030", "M194.6 32H317.4C338.1 32 356.4 45.22 362.9 64.82L373.3 96H448C483.3 96 512 124.7 512 160V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V160C0 124.7 28.65 96 64 96H138.7L149.1 64.82C155.6 45.22 173.9 32 194.6 32H194.6zM256 384C309 384 352 341 352 288C352 234.1 309 192 256 192C202.1 192 160 234.1 160 288C160 341 202.1 384 256 384z"]
        }
          , ei = {
            prefix: "fas",
            iconName: "camera-rotate",
            icon: [512, 512, [], "e0d8", "M464 96h-88l-12.38-32.88C356.6 44.38 338.8 32 318.8 32h-125.5c-20 0-38 12.38-45 31.12L136 96H48C21.5 96 0 117.5 0 144v288C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-288C512 117.5 490.5 96 464 96zM356.9 366.8C332.4 398.1 295.7 416 256 416c-31.78 0-61.37-11.94-84.58-32.61l-19.28 19.29C143.2 411.6 128 405.3 128 392.7V316.3c0-5.453 4.359-9.838 9.775-9.99h76.98c12.35 .3027 18.47 15.27 9.654 24.09l-19.27 19.28C219.3 361.4 237.1 368 256 368c24.8 0 47.78-11.22 63.08-30.78c8.172-10.44 23.25-12.28 33.69-4.125S365.1 356.3 356.9 366.8zM384 259.7c0 5.453-4.359 9.838-9.775 9.99h-76.98c-12.35-.3027-18.47-15.27-9.654-24.09l19.27-19.28C292.7 214.6 274.9 208 256 208c-24.8 0-47.78 11.22-63.08 30.78C184.8 249.2 169.7 251.1 159.2 242.9C148.8 234.8 146.9 219.7 155.1 209.2C179.6 177.9 216.3 160 256 160c31.78 0 61.37 11.94 84.58 32.61l19.28-19.29C368.8 164.4 384 170.7 384 183.3V259.7z"]
        }
          , ti = {
            prefix: "fas",
            iconName: "check",
            icon: [448, 512, [10004, 10003], "f00c", "M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"]
        }
          , ni = {
            prefix: "fas",
            iconName: "person-praying",
            icon: [384, 512, [128720, "pray"], "f683", "M255.1 128c35.38 0 63.1-28.62 63.1-64s-28.62-64-63.1-64S191.1 28.62 191.1 64S220.6 128 255.1 128zM225.4 297.8c14 16.75 39 19.12 56.01 5.25l88.01-72c17-14 19.5-39.25 5.625-56.38c-14-17.12-39.25-19.5-56.38-5.625L261.3 216l-39-46.25c-15.38-18.38-39.13-27.88-64.01-25.38c-24.13 2.5-45.25 16.25-56.38 37l-49.38 92C29.13 317 43.88 369.8 86.76 397.1L131.5 432H40C17.88 432 0 449.9 0 472S17.88 512 40 512h208c34.13 0 53.76-42.75 28.25-68.25L166.4 333.9L201.3 269L225.4 297.8z"]
        }
          , ri = {
            prefix: "fas",
            iconName: "star",
            icon: [576, 512, [61446, 11088], "f005", "M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"]
        }
          , ai = {
            prefix: "fas",
            iconName: "toggle-off",
            icon: [576, 512, [], "f204", "M192 352C138.1 352 96 309 96 256C96 202.1 138.1 160 192 160C245 160 288 202.1 288 256C288 309 245 352 192 352zM384 448H192C85.96 448 0 362 0 256C0 149.1 85.96 64 192 64H384C490 64 576 149.1 576 256C576 362 490 448 384 448zM384 128H192C121.3 128 64 185.3 64 256C64 326.7 121.3 384 192 384H384C454.7 384 512 326.7 512 256C512 185.3 454.7 128 384 128z"]
        }
          , ii = {
            prefix: "fas",
            iconName: "toggle-on",
            icon: [576, 512, [], "f205", "M384 64C490 64 576 149.1 576 256C576 362 490 448 384 448H192C85.96 448 0 362 0 256C0 149.1 85.96 64 192 64H384zM384 352C437 352 480 309 480 256C480 202.1 437 160 384 160C330.1 160 288 202.1 288 256C288 309 330.1 352 384 352z"]
        }
          , oi = {
            prefix: "fas",
            iconName: "video",
            icon: [576, 512, ["video-camera"], "f03d", "M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z"]
        }
          , li = {
            prefix: "fas",
            iconName: "video-slash",
            icon: [640, 512, [], "f4e2", "M32 399.1c0 26.51 21.49 47.1 47.1 47.1h287.1c19.57 0 36.34-11.75 43.81-28.56L32 121.8L32 399.1zM630.8 469.1l-89.21-69.92l15.99 11.02c21.22 14.59 50.41-.2971 50.41-25.8V127.5c0-25.41-29.07-40.37-50.39-25.76l-109.6 75.56l.0001 148.5l-32-25.08l.0001-188.7c0-26.51-21.49-47.1-47.1-47.1H113.9L38.81 5.111C34.41 1.673 29.19 0 24.03 0C16.91 0 9.84 3.158 5.121 9.189C-3.066 19.63-1.249 34.72 9.189 42.89l591.1 463.1c10.5 8.203 25.57 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1z"]
        };
        function ui(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function si(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ui(Object(n), !0).forEach((function(t) {
                    di(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ui(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function ci(e) {
            return ci = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            ci(e)
        }
        function fi(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function di(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function pi(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n)
                    return;
                var r, a, i = [], o = !0, l = !1;
                try {
                    for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value),
                    !t || i.length !== t); o = !0)
                        ;
                } catch (u) {
                    l = !0,
                    a = u
                } finally {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw a
                    }
                }
                return i
            }(e, t) || hi(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function mi(e) {
            return function(e) {
                if (Array.isArray(e))
                    return vi(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || hi(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function hi(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return vi(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vi(e, t) : void 0
            }
        }
        function vi(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var gi = function() {}
          , yi = {}
          , bi = {}
          , wi = null
          , xi = {
            mark: gi,
            measure: gi
        };
        try {
            "undefined" !== typeof window && (yi = window),
            "undefined" !== typeof document && (bi = document),
            "undefined" !== typeof MutationObserver && (wi = MutationObserver),
            "undefined" !== typeof performance && (xi = performance)
        } catch (Tu) {}
        var ki = (yi.navigator || {}).userAgent
          , Si = void 0 === ki ? "" : ki
          , Ei = yi
          , Ci = bi
          , Oi = wi
          , ji = xi
          , Pi = (Ei.document,
        !!Ci.documentElement && !!Ci.head && "function" === typeof Ci.addEventListener && "function" === typeof Ci.createElement)
          , _i = ~Si.indexOf("MSIE") || ~Si.indexOf("Trident/")
          , Ni = "svg-inline--fa"
          , Ti = "data-fa-i2svg"
          , zi = "data-fa-pseudo-element"
          , Mi = "data-prefix"
          , Li = "data-icon"
          , Di = "fontawesome-i2svg"
          , Ai = ["HTML", "HEAD", "STYLE", "SCRIPT"]
          , Ri = function() {
            try {
                return !0
            } catch (Tu) {
                return !1
            }
        }()
          , Fi = {
            fas: "solid",
            "fa-solid": "solid",
            far: "regular",
            "fa-regular": "regular",
            fal: "light",
            "fa-light": "light",
            fat: "thin",
            "fa-thin": "thin",
            fad: "duotone",
            "fa-duotone": "duotone",
            fab: "brands",
            "fa-brands": "brands",
            fak: "kit",
            "fa-kit": "kit",
            fa: "solid"
        }
          , Ii = {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab",
            kit: "fak"
        }
          , Ui = {
            fab: "fa-brands",
            fad: "fa-duotone",
            fak: "fa-kit",
            fal: "fa-light",
            far: "fa-regular",
            fas: "fa-solid",
            fat: "fa-thin"
        }
          , Hi = {
            "fa-brands": "fab",
            "fa-duotone": "fad",
            "fa-kit": "fak",
            "fa-light": "fal",
            "fa-regular": "far",
            "fa-solid": "fas",
            "fa-thin": "fat"
        }
          , Wi = /fa[srltdbk\-\ ]/
          , Bi = "fa-layers-text"
          , Vi = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i
          , $i = {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
            100: "fat"
        }
          , Yi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
          , Qi = Yi.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
          , qi = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"]
          , Ki = "duotone-group"
          , Xi = "swap-opacity"
          , Gi = "primary"
          , Zi = "secondary"
          , Ji = [].concat(mi(Object.keys(Ii)), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ki, Xi, Gi, Zi]).concat(Yi.map((function(e) {
            return "".concat(e, "x")
        }
        ))).concat(Qi.map((function(e) {
            return "w-".concat(e)
        }
        )))
          , eo = Ei.FontAwesomeConfig || {};
        if (Ci && "function" === typeof Ci.querySelector) {
            [["data-family-prefix", "familyPrefix"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((function(e) {
                var t = pi(e, 2)
                  , n = t[0]
                  , r = t[1]
                  , a = function(e) {
                    return "" === e || "false" !== e && ("true" === e || e)
                }(function(e) {
                    var t = Ci.querySelector("script[" + e + "]");
                    if (t)
                        return t.getAttribute(e)
                }(n));
                void 0 !== a && null !== a && (eo[r] = a)
            }
            ))
        }
        var to = si(si({}, {
            familyPrefix: "fa",
            styleDefault: "solid",
            replacementClass: Ni,
            autoReplaceSvg: !0,
            autoAddCss: !0,
            autoA11y: !0,
            searchPseudoElements: !1,
            observeMutations: !0,
            mutateApproach: "async",
            keepOriginalSource: !0,
            measurePerformance: !1,
            showMissingIcons: !0
        }), eo);
        to.autoReplaceSvg || (to.observeMutations = !1);
        var no = {};
        Object.keys(to).forEach((function(e) {
            Object.defineProperty(no, e, {
                enumerable: !0,
                set: function(t) {
                    to[e] = t,
                    ro.forEach((function(e) {
                        return e(no)
                    }
                    ))
                },
                get: function() {
                    return to[e]
                }
            })
        }
        )),
        Ei.FontAwesomeConfig = no;
        var ro = [];
        var ao = 16
          , io = {
            size: 16,
            x: 0,
            y: 0,
            rotate: 0,
            flipX: !1,
            flipY: !1
        };
        function oo() {
            for (var e = 12, t = ""; e-- > 0; )
                t += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62 * Math.random() | 0];
            return t
        }
        function lo(e) {
            for (var t = [], n = (e || []).length >>> 0; n--; )
                t[n] = e[n];
            return t
        }
        function uo(e) {
            return e.classList ? lo(e.classList) : (e.getAttribute("class") || "").split(" ").filter((function(e) {
                return e
            }
            ))
        }
        function so(e) {
            return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
        function co(e) {
            return Object.keys(e || {}).reduce((function(t, n) {
                return t + "".concat(n, ": ").concat(e[n].trim(), ";")
            }
            ), "")
        }
        function fo(e) {
            return e.size !== io.size || e.x !== io.x || e.y !== io.y || e.rotate !== io.rotate || e.flipX || e.flipY
        }
        function po() {
            var e = "fa"
              , t = Ni
              , n = no.familyPrefix
              , r = no.replacementClass
              , a = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
            if (n !== e || r !== t) {
                var i = new RegExp("\\.".concat(e, "\\-"),"g")
                  , o = new RegExp("\\--".concat(e, "\\-"),"g")
                  , l = new RegExp("\\.".concat(t),"g");
                a = a.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(l, ".".concat(r))
            }
            return a
        }
        var mo = !1;
        function ho() {
            no.autoAddCss && !mo && (!function(e) {
                if (e && Pi) {
                    var t = Ci.createElement("style");
                    t.setAttribute("type", "text/css"),
                    t.innerHTML = e;
                    for (var n = Ci.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
                        var i = n[a]
                          , o = (i.tagName || "").toUpperCase();
                        ["STYLE", "LINK"].indexOf(o) > -1 && (r = i)
                    }
                    Ci.head.insertBefore(t, r)
                }
            }(po()),
            mo = !0)
        }
        var vo = {
            mixout: function() {
                return {
                    dom: {
                        css: po,
                        insertCss: ho
                    }
                }
            },
            hooks: function() {
                return {
                    beforeDOMElementCreation: function() {
                        ho()
                    },
                    beforeI2svg: function() {
                        ho()
                    }
                }
            }
        }
          , go = Ei || {};
        go.___FONT_AWESOME___ || (go.___FONT_AWESOME___ = {}),
        go.___FONT_AWESOME___.styles || (go.___FONT_AWESOME___.styles = {}),
        go.___FONT_AWESOME___.hooks || (go.___FONT_AWESOME___.hooks = {}),
        go.___FONT_AWESOME___.shims || (go.___FONT_AWESOME___.shims = []);
        var yo = go.___FONT_AWESOME___
          , bo = []
          , wo = !1;
        function xo(e) {
            Pi && (wo ? setTimeout(e, 0) : bo.push(e))
        }
        function ko(e) {
            var t = e.tag
              , n = e.attributes
              , r = void 0 === n ? {} : n
              , a = e.children
              , i = void 0 === a ? [] : a;
            return "string" === typeof e ? so(e) : "<".concat(t, " ").concat(function(e) {
                return Object.keys(e || {}).reduce((function(t, n) {
                    return t + "".concat(n, '="').concat(so(e[n]), '" ')
                }
                ), "").trim()
            }(r), ">").concat(i.map(ko).join(""), "</").concat(t, ">")
        }
        function So(e, t, n) {
            if (e && e[t] && e[t][n])
                return {
                    prefix: t,
                    iconName: n,
                    icon: e[t][n]
                }
        }
        Pi && ((wo = (Ci.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ci.readyState)) || Ci.addEventListener("DOMContentLoaded", (function e() {
            Ci.removeEventListener("DOMContentLoaded", e),
            wo = 1,
            bo.map((function(e) {
                return e()
            }
            ))
        }
        )));
        var Eo = function(e, t, n, r) {
            var a, i, o, l = Object.keys(e), u = l.length, s = void 0 !== r ? function(e, t) {
                return function(n, r, a, i) {
                    return e.call(t, n, r, a, i)
                }
            }(t, r) : t;
            for (void 0 === n ? (a = 1,
            o = e[l[0]]) : (a = 0,
            o = n); a < u; a++)
                o = s(o, e[i = l[a]], i, e);
            return o
        };
        function Co(e) {
            var t = function(e) {
                for (var t = [], n = 0, r = e.length; n < r; ) {
                    var a = e.charCodeAt(n++);
                    if (a >= 55296 && a <= 56319 && n < r) {
                        var i = e.charCodeAt(n++);
                        56320 == (64512 & i) ? t.push(((1023 & a) << 10) + (1023 & i) + 65536) : (t.push(a),
                        n--)
                    } else
                        t.push(a)
                }
                return t
            }(e);
            return 1 === t.length ? t[0].toString(16) : null
        }
        function Oo(e) {
            return Object.keys(e).reduce((function(t, n) {
                var r = e[n];
                return !!r.icon ? t[r.iconName] = r.icon : t[n] = r,
                t
            }
            ), {})
        }
        function jo(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = n.skipHooks
              , a = void 0 !== r && r
              , i = Oo(t);
            "function" !== typeof yo.hooks.addPack || a ? yo.styles[e] = si(si({}, yo.styles[e] || {}), i) : yo.hooks.addPack(e, Oo(t)),
            "fas" === e && jo("fa", t)
        }
        var Po = yo.styles
          , _o = yo.shims
          , No = Object.values(Ui)
          , To = null
          , zo = {}
          , Mo = {}
          , Lo = {}
          , Do = {}
          , Ao = {}
          , Ro = Object.keys(Fi);
        function Fo(e, t) {
            var n, r = t.split("-"), a = r[0], i = r.slice(1).join("-");
            return a !== e || "" === i || (n = i,
            ~Ji.indexOf(n)) ? null : i
        }
        var Io, Uo = function() {
            var e = function(e) {
                return Eo(Po, (function(t, n, r) {
                    return t[r] = Eo(n, e, {}),
                    t
                }
                ), {})
            };
            zo = e((function(e, t, n) {
                (t[3] && (e[t[3]] = n),
                t[2]) && t[2].filter((function(e) {
                    return "number" === typeof e
                }
                )).forEach((function(t) {
                    e[t.toString(16)] = n
                }
                ));
                return e
            }
            )),
            Mo = e((function(e, t, n) {
                (e[n] = n,
                t[2]) && t[2].filter((function(e) {
                    return "string" === typeof e
                }
                )).forEach((function(t) {
                    e[t] = n
                }
                ));
                return e
            }
            )),
            Ao = e((function(e, t, n) {
                var r = t[2];
                return e[n] = n,
                r.forEach((function(t) {
                    e[t] = n
                }
                )),
                e
            }
            ));
            var t = "far"in Po || no.autoFetchSvg
              , n = Eo(_o, (function(e, n) {
                var r = n[0]
                  , a = n[1]
                  , i = n[2];
                return "far" !== a || t || (a = "fas"),
                "string" === typeof r && (e.names[r] = {
                    prefix: a,
                    iconName: i
                }),
                "number" === typeof r && (e.unicodes[r.toString(16)] = {
                    prefix: a,
                    iconName: i
                }),
                e
            }
            ), {
                names: {},
                unicodes: {}
            });
            Lo = n.names,
            Do = n.unicodes,
            To = $o(no.styleDefault)
        };
        function Ho(e, t) {
            return (zo[e] || {})[t]
        }
        function Wo(e, t) {
            return (Ao[e] || {})[t]
        }
        function Bo(e) {
            return Lo[e] || {
                prefix: null,
                iconName: null
            }
        }
        function Vo() {
            return To
        }
        Io = function(e) {
            To = $o(e.styleDefault)
        }
        ,
        ro.push(Io),
        Uo();
        function $o(e) {
            var t = Ii[e] || Ii[Fi[e]]
              , n = e in yo.styles ? e : null;
            return t || n || null
        }
        function Yo(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.skipLookups
              , r = void 0 !== n && n
              , a = null
              , i = e.reduce((function(e, t) {
                var n = Fo(no.familyPrefix, t);
                if (Po[t] ? (t = No.includes(t) ? Hi[t] : t,
                a = t,
                e.prefix = t) : Ro.indexOf(t) > -1 ? (a = t,
                e.prefix = $o(t)) : n ? e.iconName = n : t !== no.replacementClass && e.rest.push(t),
                !r && e.prefix && e.iconName) {
                    var i = "fa" === a ? Bo(e.iconName) : {}
                      , o = Wo(e.prefix, e.iconName);
                    i.prefix && (a = null),
                    e.iconName = i.iconName || o || e.iconName,
                    e.prefix = i.prefix || e.prefix,
                    "far" !== e.prefix || Po.far || !Po.fas || no.autoFetchSvg || (e.prefix = "fas")
                }
                return e
            }
            ), {
                prefix: null,
                iconName: null,
                rest: []
            });
            return "fa" !== i.prefix && "fa" !== a || (i.prefix = Vo() || "fas"),
            i
        }
        var Qo = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.definitions = {}
            }
            var t, n, r;
            return t = e,
            n = [{
                key: "add",
                value: function() {
                    for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    var a = n.reduce(this._pullDefinitions, {});
                    Object.keys(a).forEach((function(t) {
                        e.definitions[t] = si(si({}, e.definitions[t] || {}), a[t]),
                        jo(t, a[t]);
                        var n = Ui[t];
                        n && jo(n, a[t]),
                        Uo()
                    }
                    ))
                }
            }, {
                key: "reset",
                value: function() {
                    this.definitions = {}
                }
            }, {
                key: "_pullDefinitions",
                value: function(e, t) {
                    var n = t.prefix && t.iconName && t.icon ? {
                        0: t
                    } : t;
                    return Object.keys(n).map((function(t) {
                        var r = n[t]
                          , a = r.prefix
                          , i = r.iconName
                          , o = r.icon
                          , l = o[2];
                        e[a] || (e[a] = {}),
                        l.length > 0 && l.forEach((function(t) {
                            "string" === typeof t && (e[a][t] = o)
                        }
                        )),
                        e[a][i] = o
                    }
                    )),
                    e
                }
            }],
            n && fi(t.prototype, n),
            r && fi(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }()
          , qo = []
          , Ko = {}
          , Xo = {}
          , Go = Object.keys(Xo);
        function Zo(e, t) {
            for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
                r[a - 2] = arguments[a];
            var i = Ko[e] || [];
            return i.forEach((function(e) {
                t = e.apply(null, [t].concat(r))
            }
            )),
            t
        }
        function Jo(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            var a = Ko[e] || [];
            a.forEach((function(e) {
                e.apply(null, n)
            }
            ))
        }
        function el() {
            var e = arguments[0]
              , t = Array.prototype.slice.call(arguments, 1);
            return Xo[e] ? Xo[e].apply(null, t) : void 0
        }
        function tl(e) {
            "fa" === e.prefix && (e.prefix = "fas");
            var t = e.iconName
              , n = e.prefix || Vo();
            if (t)
                return t = Wo(n, t) || t,
                So(nl.definitions, n, t) || So(yo.styles, n, t)
        }
        var nl = new Qo
          , rl = {
            i2svg: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Pi ? (Jo("beforeI2svg", e),
                el("pseudoElements2svg", e),
                el("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.")
            },
            watch: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.autoReplaceSvgRoot;
                !1 === no.autoReplaceSvg && (no.autoReplaceSvg = !0),
                no.observeMutations = !0,
                xo((function() {
                    ol({
                        autoReplaceSvgRoot: t
                    }),
                    Jo("watch", e)
                }
                ))
            }
        }
          , al = {
            icon: function(e) {
                if (null === e)
                    return null;
                if ("object" === ci(e) && e.prefix && e.iconName)
                    return {
                        prefix: e.prefix,
                        iconName: Wo(e.prefix, e.iconName) || e.iconName
                    };
                if (Array.isArray(e) && 2 === e.length) {
                    var t = 0 === e[1].indexOf("fa-") ? e[1].slice(3) : e[1]
                      , n = $o(e[0]);
                    return {
                        prefix: n,
                        iconName: Wo(n, t) || t
                    }
                }
                if ("string" === typeof e && (e.indexOf("".concat(no.familyPrefix, "-")) > -1 || e.match(Wi))) {
                    var r = Yo(e.split(" "), {
                        skipLookups: !0
                    });
                    return {
                        prefix: r.prefix || Vo(),
                        iconName: Wo(r.prefix, r.iconName) || r.iconName
                    }
                }
                if ("string" === typeof e) {
                    var a = Vo();
                    return {
                        prefix: a,
                        iconName: Wo(a, e) || e
                    }
                }
            }
        }
          , il = {
            noAuto: function() {
                no.autoReplaceSvg = !1,
                no.observeMutations = !1,
                Jo("noAuto")
            },
            config: no,
            dom: rl,
            parse: al,
            library: nl,
            findIconDefinition: tl,
            toHtml: ko
        }
          , ol = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.autoReplaceSvgRoot
              , n = void 0 === t ? Ci : t;
            (Object.keys(yo.styles).length > 0 || no.autoFetchSvg) && Pi && no.autoReplaceSvg && il.dom.i2svg({
                node: n
            })
        };
        function ll(e, t) {
            return Object.defineProperty(e, "abstract", {
                get: t
            }),
            Object.defineProperty(e, "html", {
                get: function() {
                    return e.abstract.map((function(e) {
                        return ko(e)
                    }
                    ))
                }
            }),
            Object.defineProperty(e, "node", {
                get: function() {
                    if (Pi) {
                        var t = Ci.createElement("div");
                        return t.innerHTML = e.html,
                        t.children
                    }
                }
            }),
            e
        }
        function ul(e) {
            var t = e.icons
              , n = t.main
              , r = t.mask
              , a = e.prefix
              , i = e.iconName
              , o = e.transform
              , l = e.symbol
              , u = e.title
              , s = e.maskId
              , c = e.titleId
              , f = e.extra
              , d = e.watchable
              , p = void 0 !== d && d
              , m = r.found ? r : n
              , h = m.width
              , v = m.height
              , g = "fak" === a
              , y = [no.replacementClass, i ? "".concat(no.familyPrefix, "-").concat(i) : ""].filter((function(e) {
                return -1 === f.classes.indexOf(e)
            }
            )).filter((function(e) {
                return "" !== e || !!e
            }
            )).concat(f.classes).join(" ")
              , b = {
                children: [],
                attributes: si(si({}, f.attributes), {}, {
                    "data-prefix": a,
                    "data-icon": i,
                    class: y,
                    role: f.attributes.role || "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 ".concat(h, " ").concat(v)
                })
            }
              , w = g && !~f.classes.indexOf("fa-fw") ? {
                width: "".concat(h / v * 16 * .0625, "em")
            } : {};
            p && (b.attributes[Ti] = ""),
            u && (b.children.push({
                tag: "title",
                attributes: {
                    id: b.attributes["aria-labelledby"] || "title-".concat(c || oo())
                },
                children: [u]
            }),
            delete b.attributes.title);
            var x = si(si({}, b), {}, {
                prefix: a,
                iconName: i,
                main: n,
                mask: r,
                maskId: s,
                transform: o,
                symbol: l,
                styles: si(si({}, w), f.styles)
            })
              , k = r.found && n.found ? el("generateAbstractMask", x) || {
                children: [],
                attributes: {}
            } : el("generateAbstractIcon", x) || {
                children: [],
                attributes: {}
            }
              , S = k.children
              , E = k.attributes;
            return x.children = S,
            x.attributes = E,
            l ? function(e) {
                var t = e.prefix
                  , n = e.iconName
                  , r = e.children
                  , a = e.attributes
                  , i = e.symbol
                  , o = !0 === i ? "".concat(t, "-").concat(no.familyPrefix, "-").concat(n) : i;
                return [{
                    tag: "svg",
                    attributes: {
                        style: "display: none;"
                    },
                    children: [{
                        tag: "symbol",
                        attributes: si(si({}, a), {}, {
                            id: o
                        }),
                        children: r
                    }]
                }]
            }(x) : function(e) {
                var t = e.children
                  , n = e.main
                  , r = e.mask
                  , a = e.attributes
                  , i = e.styles
                  , o = e.transform;
                if (fo(o) && n.found && !r.found) {
                    var l = {
                        x: n.width / n.height / 2,
                        y: .5
                    };
                    a.style = co(si(si({}, i), {}, {
                        "transform-origin": "".concat(l.x + o.x / 16, "em ").concat(l.y + o.y / 16, "em")
                    }))
                }
                return [{
                    tag: "svg",
                    attributes: a,
                    children: t
                }]
            }(x)
        }
        function sl(e) {
            var t = e.content
              , n = e.width
              , r = e.height
              , a = e.transform
              , i = e.title
              , o = e.extra
              , l = e.watchable
              , u = void 0 !== l && l
              , s = si(si(si({}, o.attributes), i ? {
                title: i
            } : {}), {}, {
                class: o.classes.join(" ")
            });
            u && (s[Ti] = "");
            var c = si({}, o.styles);
            fo(a) && (c.transform = function(e) {
                var t = e.transform
                  , n = e.width
                  , r = void 0 === n ? 16 : n
                  , a = e.height
                  , i = void 0 === a ? 16 : a
                  , o = e.startCentered
                  , l = void 0 !== o && o
                  , u = "";
                return u += l && _i ? "translate(".concat(t.x / ao - r / 2, "em, ").concat(t.y / ao - i / 2, "em) ") : l ? "translate(calc(-50% + ".concat(t.x / ao, "em), calc(-50% + ").concat(t.y / ao, "em)) ") : "translate(".concat(t.x / ao, "em, ").concat(t.y / ao, "em) "),
                u += "scale(".concat(t.size / ao * (t.flipX ? -1 : 1), ", ").concat(t.size / ao * (t.flipY ? -1 : 1), ") "),
                u + "rotate(".concat(t.rotate, "deg) ")
            }({
                transform: a,
                startCentered: !0,
                width: n,
                height: r
            }),
            c["-webkit-transform"] = c.transform);
            var f = co(c);
            f.length > 0 && (s.style = f);
            var d = [];
            return d.push({
                tag: "span",
                attributes: s,
                children: [t]
            }),
            i && d.push({
                tag: "span",
                attributes: {
                    class: "sr-only"
                },
                children: [i]
            }),
            d
        }
        function cl(e) {
            var t = e.content
              , n = e.title
              , r = e.extra
              , a = si(si(si({}, r.attributes), n ? {
                title: n
            } : {}), {}, {
                class: r.classes.join(" ")
            })
              , i = co(r.styles);
            i.length > 0 && (a.style = i);
            var o = [];
            return o.push({
                tag: "span",
                attributes: a,
                children: [t]
            }),
            n && o.push({
                tag: "span",
                attributes: {
                    class: "sr-only"
                },
                children: [n]
            }),
            o
        }
        var fl = yo.styles;
        function dl(e) {
            var t = e[0]
              , n = e[1]
              , r = pi(e.slice(4), 1)[0];
            return {
                found: !0,
                width: t,
                height: n,
                icon: Array.isArray(r) ? {
                    tag: "g",
                    attributes: {
                        class: "".concat(no.familyPrefix, "-").concat(Ki)
                    },
                    children: [{
                        tag: "path",
                        attributes: {
                            class: "".concat(no.familyPrefix, "-").concat(Zi),
                            fill: "currentColor",
                            d: r[0]
                        }
                    }, {
                        tag: "path",
                        attributes: {
                            class: "".concat(no.familyPrefix, "-").concat(Gi),
                            fill: "currentColor",
                            d: r[1]
                        }
                    }]
                } : {
                    tag: "path",
                    attributes: {
                        fill: "currentColor",
                        d: r
                    }
                }
            }
        }
        var pl = {
            found: !1,
            width: 512,
            height: 512
        };
        function ml(e, t) {
            var n = t;
            return "fa" === t && null !== no.styleDefault && (t = Vo()),
            new Promise((function(r, a) {
                el("missingIconAbstract");
                if ("fa" === n) {
                    var i = Bo(e) || {};
                    e = i.iconName || e,
                    t = i.prefix || t
                }
                if (e && t && fl[t] && fl[t][e])
                    return r(dl(fl[t][e]));
                !function(e, t) {
                    Ri || no.showMissingIcons || !e || console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'))
                }(e, t),
                r(si(si({}, pl), {}, {
                    icon: no.showMissingIcons && e && el("missingIconAbstract") || {}
                }))
            }
            ))
        }
        var hl = function() {}
          , vl = no.measurePerformance && ji && ji.mark && ji.measure ? ji : {
            mark: hl,
            measure: hl
        }
          , gl = 'FA "6.1.1"'
          , yl = function(e) {
            vl.mark("".concat(gl, " ").concat(e, " ends")),
            vl.measure("".concat(gl, " ").concat(e), "".concat(gl, " ").concat(e, " begins"), "".concat(gl, " ").concat(e, " ends"))
        }
          , bl = function(e) {
            return vl.mark("".concat(gl, " ").concat(e, " begins")),
            function() {
                return yl(e)
            }
        }
          , wl = function() {};
        function xl(e) {
            return "string" === typeof (e.getAttribute ? e.getAttribute(Ti) : null)
        }
        function kl(e) {
            return Ci.createElementNS("http://www.w3.org/2000/svg", e)
        }
        function Sl(e) {
            return Ci.createElement(e)
        }
        function El(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.ceFn
              , r = void 0 === n ? "svg" === e.tag ? kl : Sl : n;
            if ("string" === typeof e)
                return Ci.createTextNode(e);
            var a = r(e.tag);
            Object.keys(e.attributes || []).forEach((function(t) {
                a.setAttribute(t, e.attributes[t])
            }
            ));
            var i = e.children || [];
            return i.forEach((function(e) {
                a.appendChild(El(e, {
                    ceFn: r
                }))
            }
            )),
            a
        }
        var Cl = {
            replace: function(e) {
                var t = e[0];
                if (t.parentNode)
                    if (e[1].forEach((function(e) {
                        t.parentNode.insertBefore(El(e), t)
                    }
                    )),
                    null === t.getAttribute(Ti) && no.keepOriginalSource) {
                        var n = Ci.createComment(function(e) {
                            var t = " ".concat(e.outerHTML, " ");
                            return "".concat(t, "Font Awesome fontawesome.com ")
                        }(t));
                        t.parentNode.replaceChild(n, t)
                    } else
                        t.remove()
            },
            nest: function(e) {
                var t = e[0]
                  , n = e[1];
                if (~uo(t).indexOf(no.replacementClass))
                    return Cl.replace(e);
                var r = new RegExp("".concat(no.familyPrefix, "-.*"));
                if (delete n[0].attributes.id,
                n[0].attributes.class) {
                    var a = n[0].attributes.class.split(" ").reduce((function(e, t) {
                        return t === no.replacementClass || t.match(r) ? e.toSvg.push(t) : e.toNode.push(t),
                        e
                    }
                    ), {
                        toNode: [],
                        toSvg: []
                    });
                    n[0].attributes.class = a.toSvg.join(" "),
                    0 === a.toNode.length ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "))
                }
                var i = n.map((function(e) {
                    return ko(e)
                }
                )).join("\n");
                t.setAttribute(Ti, ""),
                t.innerHTML = i
            }
        };
        function Ol(e) {
            e()
        }
        function jl(e, t) {
            var n = "function" === typeof t ? t : wl;
            if (0 === e.length)
                n();
            else {
                var r = Ol;
                "async" === no.mutateApproach && (r = Ei.requestAnimationFrame || Ol),
                r((function() {
                    var t = !0 === no.autoReplaceSvg ? Cl.replace : Cl[no.autoReplaceSvg] || Cl.replace
                      , r = bl("mutate");
                    e.map(t),
                    r(),
                    n()
                }
                ))
            }
        }
        var Pl = !1;
        function _l() {
            Pl = !0
        }
        function Nl() {
            Pl = !1
        }
        var Tl = null;
        function zl(e) {
            if (Oi && no.observeMutations) {
                var t = e.treeCallback
                  , n = void 0 === t ? wl : t
                  , r = e.nodeCallback
                  , a = void 0 === r ? wl : r
                  , i = e.pseudoElementsCallback
                  , o = void 0 === i ? wl : i
                  , l = e.observeMutationsRoot
                  , u = void 0 === l ? Ci : l;
                Tl = new Oi((function(e) {
                    if (!Pl) {
                        var t = Vo();
                        lo(e).forEach((function(e) {
                            if ("childList" === e.type && e.addedNodes.length > 0 && !xl(e.addedNodes[0]) && (no.searchPseudoElements && o(e.target),
                            n(e.target)),
                            "attributes" === e.type && e.target.parentNode && no.searchPseudoElements && o(e.target.parentNode),
                            "attributes" === e.type && xl(e.target) && ~qi.indexOf(e.attributeName))
                                if ("class" === e.attributeName && function(e) {
                                    var t = e.getAttribute ? e.getAttribute(Mi) : null
                                      , n = e.getAttribute ? e.getAttribute(Li) : null;
                                    return t && n
                                }(e.target)) {
                                    var r = Yo(uo(e.target))
                                      , i = r.prefix
                                      , l = r.iconName;
                                    e.target.setAttribute(Mi, i || t),
                                    l && e.target.setAttribute(Li, l)
                                } else
                                    (u = e.target) && u.classList && u.classList.contains && u.classList.contains(no.replacementClass) && a(e.target);
                            var u
                        }
                        ))
                    }
                }
                )),
                Pi && Tl.observe(u, {
                    childList: !0,
                    attributes: !0,
                    characterData: !0,
                    subtree: !0
                })
            }
        }
        function Ml(e) {
            var t = e.getAttribute("style")
              , n = [];
            return t && (n = t.split(";").reduce((function(e, t) {
                var n = t.split(":")
                  , r = n[0]
                  , a = n.slice(1);
                return r && a.length > 0 && (e[r] = a.join(":").trim()),
                e
            }
            ), {})),
            n
        }
        function Ll(e) {
            var t = e.getAttribute("data-prefix")
              , n = e.getAttribute("data-icon")
              , r = void 0 !== e.innerText ? e.innerText.trim() : ""
              , a = Yo(uo(e));
            return a.prefix || (a.prefix = Vo()),
            t && n && (a.prefix = t,
            a.iconName = n),
            a.iconName && a.prefix || a.prefix && r.length > 0 && (a.iconName = function(e, t) {
                return (Mo[e] || {})[t]
            }(a.prefix, e.innerText) || Ho(a.prefix, Co(e.innerText))),
            a
        }
        function Dl(e) {
            var t = lo(e.attributes).reduce((function(e, t) {
                return "class" !== e.name && "style" !== e.name && (e[t.name] = t.value),
                e
            }
            ), {})
              , n = e.getAttribute("title")
              , r = e.getAttribute("data-fa-title-id");
            return no.autoA11y && (n ? t["aria-labelledby"] = "".concat(no.replacementClass, "-title-").concat(r || oo()) : (t["aria-hidden"] = "true",
            t.focusable = "false")),
            t
        }
        function Al(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                styleParser: !0
            }
              , n = Ll(e)
              , r = n.iconName
              , a = n.prefix
              , i = n.rest
              , o = Dl(e)
              , l = Zo("parseNodeAttributes", {}, e)
              , u = t.styleParser ? Ml(e) : [];
            return si({
                iconName: r,
                title: e.getAttribute("title"),
                titleId: e.getAttribute("data-fa-title-id"),
                prefix: a,
                transform: io,
                mask: {
                    iconName: null,
                    prefix: null,
                    rest: []
                },
                maskId: null,
                symbol: !1,
                extra: {
                    classes: i,
                    styles: u,
                    attributes: o
                }
            }, l)
        }
        var Rl = yo.styles;
        function Fl(e) {
            var t = "nest" === no.autoReplaceSvg ? Al(e, {
                styleParser: !1
            }) : Al(e);
            return ~t.extra.classes.indexOf(Bi) ? el("generateLayersText", e, t) : el("generateSvgReplacementMutation", e, t)
        }
        function Il(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (!Pi)
                return Promise.resolve();
            var n = Ci.documentElement.classList
              , r = function(e) {
                return n.add("".concat(Di, "-").concat(e))
            }
              , a = function(e) {
                return n.remove("".concat(Di, "-").concat(e))
            }
              , i = no.autoFetchSvg ? Object.keys(Fi) : Object.keys(Rl)
              , o = [".".concat(Bi, ":not([").concat(Ti, "])")].concat(i.map((function(e) {
                return ".".concat(e, ":not([").concat(Ti, "])")
            }
            ))).join(", ");
            if (0 === o.length)
                return Promise.resolve();
            var l = [];
            try {
                l = lo(e.querySelectorAll(o))
            } catch (Tu) {}
            if (!(l.length > 0))
                return Promise.resolve();
            r("pending"),
            a("complete");
            var u = bl("onTree")
              , s = l.reduce((function(e, t) {
                try {
                    var n = Fl(t);
                    n && e.push(n)
                } catch (Tu) {
                    Ri || "MissingIcon" === Tu.name && console.error(Tu)
                }
                return e
            }
            ), []);
            return new Promise((function(e, n) {
                Promise.all(s).then((function(n) {
                    jl(n, (function() {
                        r("active"),
                        r("complete"),
                        a("pending"),
                        "function" === typeof t && t(),
                        u(),
                        e()
                    }
                    ))
                }
                )).catch((function(e) {
                    u(),
                    n(e)
                }
                ))
            }
            ))
        }
        function Ul(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            Fl(e).then((function(e) {
                e && jl([e], t)
            }
            ))
        }
        var Hl = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.transform
              , r = void 0 === n ? io : n
              , a = t.symbol
              , i = void 0 !== a && a
              , o = t.mask
              , l = void 0 === o ? null : o
              , u = t.maskId
              , s = void 0 === u ? null : u
              , c = t.title
              , f = void 0 === c ? null : c
              , d = t.titleId
              , p = void 0 === d ? null : d
              , m = t.classes
              , h = void 0 === m ? [] : m
              , v = t.attributes
              , g = void 0 === v ? {} : v
              , y = t.styles
              , b = void 0 === y ? {} : y;
            if (e) {
                var w = e.prefix
                  , x = e.iconName
                  , k = e.icon;
                return ll(si({
                    type: "icon"
                }, e), (function() {
                    return Jo("beforeDOMElementCreation", {
                        iconDefinition: e,
                        params: t
                    }),
                    no.autoA11y && (f ? g["aria-labelledby"] = "".concat(no.replacementClass, "-title-").concat(p || oo()) : (g["aria-hidden"] = "true",
                    g.focusable = "false")),
                    ul({
                        icons: {
                            main: dl(k),
                            mask: l ? dl(l.icon) : {
                                found: !1,
                                width: null,
                                height: null,
                                icon: {}
                            }
                        },
                        prefix: w,
                        iconName: x,
                        transform: si(si({}, io), r),
                        symbol: i,
                        title: f,
                        maskId: s,
                        titleId: p,
                        extra: {
                            attributes: g,
                            styles: b,
                            classes: h
                        }
                    })
                }
                ))
            }
        }
          , Wl = {
            mixout: function() {
                return {
                    icon: (e = Hl,
                    function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , r = (t || {}).icon ? t : tl(t || {})
                          , a = n.mask;
                        return a && (a = (a || {}).icon ? a : tl(a || {})),
                        e(r, si(si({}, n), {}, {
                            mask: a
                        }))
                    }
                    )
                };
                var e
            },
            hooks: function() {
                return {
                    mutationObserverCallbacks: function(e) {
                        return e.treeCallback = Il,
                        e.nodeCallback = Ul,
                        e
                    }
                }
            },
            provides: function(e) {
                e.i2svg = function(e) {
                    var t = e.node
                      , n = void 0 === t ? Ci : t
                      , r = e.callback;
                    return Il(n, void 0 === r ? function() {}
                    : r)
                }
                ,
                e.generateSvgReplacementMutation = function(e, t) {
                    var n = t.iconName
                      , r = t.title
                      , a = t.titleId
                      , i = t.prefix
                      , o = t.transform
                      , l = t.symbol
                      , u = t.mask
                      , s = t.maskId
                      , c = t.extra;
                    return new Promise((function(t, f) {
                        Promise.all([ml(n, i), u.iconName ? ml(u.iconName, u.prefix) : Promise.resolve({
                            found: !1,
                            width: 512,
                            height: 512,
                            icon: {}
                        })]).then((function(u) {
                            var f = pi(u, 2)
                              , d = f[0]
                              , p = f[1];
                            t([e, ul({
                                icons: {
                                    main: d,
                                    mask: p
                                },
                                prefix: i,
                                iconName: n,
                                transform: o,
                                symbol: l,
                                maskId: s,
                                title: r,
                                titleId: a,
                                extra: c,
                                watchable: !0
                            })])
                        }
                        )).catch(f)
                    }
                    ))
                }
                ,
                e.generateAbstractIcon = function(e) {
                    var t, n = e.children, r = e.attributes, a = e.main, i = e.transform, o = co(e.styles);
                    return o.length > 0 && (r.style = o),
                    fo(i) && (t = el("generateAbstractTransformGrouping", {
                        main: a,
                        transform: i,
                        containerWidth: a.width,
                        iconWidth: a.width
                    })),
                    n.push(t || a.icon),
                    {
                        children: n,
                        attributes: r
                    }
                }
            }
        }
          , Bl = {
            mixout: function() {
                return {
                    layer: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , n = t.classes
                          , r = void 0 === n ? [] : n;
                        return ll({
                            type: "layer"
                        }, (function() {
                            Jo("beforeDOMElementCreation", {
                                assembler: e,
                                params: t
                            });
                            var n = [];
                            return e((function(e) {
                                Array.isArray(e) ? e.map((function(e) {
                                    n = n.concat(e.abstract)
                                }
                                )) : n = n.concat(e.abstract)
                            }
                            )),
                            [{
                                tag: "span",
                                attributes: {
                                    class: ["".concat(no.familyPrefix, "-layers")].concat(mi(r)).join(" ")
                                },
                                children: n
                            }]
                        }
                        ))
                    }
                }
            }
        }
          , Vl = {
            mixout: function() {
                return {
                    counter: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , n = t.title
                          , r = void 0 === n ? null : n
                          , a = t.classes
                          , i = void 0 === a ? [] : a
                          , o = t.attributes
                          , l = void 0 === o ? {} : o
                          , u = t.styles
                          , s = void 0 === u ? {} : u;
                        return ll({
                            type: "counter",
                            content: e
                        }, (function() {
                            return Jo("beforeDOMElementCreation", {
                                content: e,
                                params: t
                            }),
                            cl({
                                content: e.toString(),
                                title: r,
                                extra: {
                                    attributes: l,
                                    styles: s,
                                    classes: ["".concat(no.familyPrefix, "-layers-counter")].concat(mi(i))
                                }
                            })
                        }
                        ))
                    }
                }
            }
        }
          , $l = {
            mixout: function() {
                return {
                    text: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , n = t.transform
                          , r = void 0 === n ? io : n
                          , a = t.title
                          , i = void 0 === a ? null : a
                          , o = t.classes
                          , l = void 0 === o ? [] : o
                          , u = t.attributes
                          , s = void 0 === u ? {} : u
                          , c = t.styles
                          , f = void 0 === c ? {} : c;
                        return ll({
                            type: "text",
                            content: e
                        }, (function() {
                            return Jo("beforeDOMElementCreation", {
                                content: e,
                                params: t
                            }),
                            sl({
                                content: e,
                                transform: si(si({}, io), r),
                                title: i,
                                extra: {
                                    attributes: s,
                                    styles: f,
                                    classes: ["".concat(no.familyPrefix, "-layers-text")].concat(mi(l))
                                }
                            })
                        }
                        ))
                    }
                }
            },
            provides: function(e) {
                e.generateLayersText = function(e, t) {
                    var n = t.title
                      , r = t.transform
                      , a = t.extra
                      , i = null
                      , o = null;
                    if (_i) {
                        var l = parseInt(getComputedStyle(e).fontSize, 10)
                          , u = e.getBoundingClientRect();
                        i = u.width / l,
                        o = u.height / l
                    }
                    return no.autoA11y && !n && (a.attributes["aria-hidden"] = "true"),
                    Promise.resolve([e, sl({
                        content: e.innerHTML,
                        width: i,
                        height: o,
                        transform: r,
                        title: n,
                        extra: a,
                        watchable: !0
                    })])
                }
            }
        }
          , Yl = new RegExp('"',"ug")
          , Ql = [1105920, 1112319];
        function ql(e, t) {
            var n = "".concat("data-fa-pseudo-element-pending").concat(t.replace(":", "-"));
            return new Promise((function(r, a) {
                if (null !== e.getAttribute(n))
                    return r();
                var i = lo(e.children).filter((function(e) {
                    return e.getAttribute(zi) === t
                }
                ))[0]
                  , o = Ei.getComputedStyle(e, t)
                  , l = o.getPropertyValue("font-family").match(Vi)
                  , u = o.getPropertyValue("font-weight")
                  , s = o.getPropertyValue("content");
                if (i && !l)
                    return e.removeChild(i),
                    r();
                if (l && "none" !== s && "" !== s) {
                    var c = o.getPropertyValue("content")
                      , f = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? Ii[l[2].toLowerCase()] : $i[u]
                      , d = function(e) {
                        var t = e.replace(Yl, "")
                          , n = function(e, t) {
                            var n, r = e.length, a = e.charCodeAt(t);
                            return a >= 55296 && a <= 56319 && r > t + 1 && (n = e.charCodeAt(t + 1)) >= 56320 && n <= 57343 ? 1024 * (a - 55296) + n - 56320 + 65536 : a
                        }(t, 0)
                          , r = n >= Ql[0] && n <= Ql[1]
                          , a = 2 === t.length && t[0] === t[1];
                        return {
                            value: Co(a ? t[0] : t),
                            isSecondary: r || a
                        }
                    }(c)
                      , p = d.value
                      , m = d.isSecondary
                      , h = l[0].startsWith("FontAwesome")
                      , v = Ho(f, p)
                      , g = v;
                    if (h) {
                        var y = function(e) {
                            var t = Do[e]
                              , n = Ho("fas", e);
                            return t || (n ? {
                                prefix: "fas",
                                iconName: n
                            } : null) || {
                                prefix: null,
                                iconName: null
                            }
                        }(p);
                        y.iconName && y.prefix && (v = y.iconName,
                        f = y.prefix)
                    }
                    if (!v || m || i && i.getAttribute(Mi) === f && i.getAttribute(Li) === g)
                        r();
                    else {
                        e.setAttribute(n, g),
                        i && e.removeChild(i);
                        var b = {
                            iconName: null,
                            title: null,
                            titleId: null,
                            prefix: null,
                            transform: io,
                            symbol: !1,
                            mask: {
                                iconName: null,
                                prefix: null,
                                rest: []
                            },
                            maskId: null,
                            extra: {
                                classes: [],
                                styles: {},
                                attributes: {}
                            }
                        }
                          , w = b.extra;
                        w.attributes[zi] = t,
                        ml(v, f).then((function(a) {
                            var i = ul(si(si({}, b), {}, {
                                icons: {
                                    main: a,
                                    mask: {
                                        prefix: null,
                                        iconName: null,
                                        rest: []
                                    }
                                },
                                prefix: f,
                                iconName: g,
                                extra: w,
                                watchable: !0
                            }))
                              , o = Ci.createElement("svg");
                            "::before" === t ? e.insertBefore(o, e.firstChild) : e.appendChild(o),
                            o.outerHTML = i.map((function(e) {
                                return ko(e)
                            }
                            )).join("\n"),
                            e.removeAttribute(n),
                            r()
                        }
                        )).catch(a)
                    }
                } else
                    r()
            }
            ))
        }
        function Kl(e) {
            return Promise.all([ql(e, "::before"), ql(e, "::after")])
        }
        function Xl(e) {
            return e.parentNode !== document.head && !~Ai.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(zi) && (!e.parentNode || "svg" !== e.parentNode.tagName)
        }
        function Gl(e) {
            if (Pi)
                return new Promise((function(t, n) {
                    var r = lo(e.querySelectorAll("*")).filter(Xl).map(Kl)
                      , a = bl("searchPseudoElements");
                    _l(),
                    Promise.all(r).then((function() {
                        a(),
                        Nl(),
                        t()
                    }
                    )).catch((function() {
                        a(),
                        Nl(),
                        n()
                    }
                    ))
                }
                ))
        }
        var Zl = !1
          , Jl = function(e) {
            return e.toLowerCase().split(" ").reduce((function(e, t) {
                var n = t.toLowerCase().split("-")
                  , r = n[0]
                  , a = n.slice(1).join("-");
                if (r && "h" === a)
                    return e.flipX = !0,
                    e;
                if (r && "v" === a)
                    return e.flipY = !0,
                    e;
                if (a = parseFloat(a),
                isNaN(a))
                    return e;
                switch (r) {
                case "grow":
                    e.size = e.size + a;
                    break;
                case "shrink":
                    e.size = e.size - a;
                    break;
                case "left":
                    e.x = e.x - a;
                    break;
                case "right":
                    e.x = e.x + a;
                    break;
                case "up":
                    e.y = e.y - a;
                    break;
                case "down":
                    e.y = e.y + a;
                    break;
                case "rotate":
                    e.rotate = e.rotate + a
                }
                return e
            }
            ), {
                size: 16,
                x: 0,
                y: 0,
                flipX: !1,
                flipY: !1,
                rotate: 0
            })
        }
          , eu = {
            mixout: function() {
                return {
                    parse: {
                        transform: function(e) {
                            return Jl(e)
                        }
                    }
                }
            },
            hooks: function() {
                return {
                    parseNodeAttributes: function(e, t) {
                        var n = t.getAttribute("data-fa-transform");
                        return n && (e.transform = Jl(n)),
                        e
                    }
                }
            },
            provides: function(e) {
                e.generateAbstractTransformGrouping = function(e) {
                    var t = e.main
                      , n = e.transform
                      , r = e.containerWidth
                      , a = e.iconWidth
                      , i = {
                        transform: "translate(".concat(r / 2, " 256)")
                    }
                      , o = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") ")
                      , l = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") ")
                      , u = "rotate(".concat(n.rotate, " 0 0)")
                      , s = {
                        outer: i,
                        inner: {
                            transform: "".concat(o, " ").concat(l, " ").concat(u)
                        },
                        path: {
                            transform: "translate(".concat(a / 2 * -1, " -256)")
                        }
                    };
                    return {
                        tag: "g",
                        attributes: si({}, s.outer),
                        children: [{
                            tag: "g",
                            attributes: si({}, s.inner),
                            children: [{
                                tag: t.icon.tag,
                                children: t.icon.children,
                                attributes: si(si({}, t.icon.attributes), s.path)
                            }]
                        }]
                    }
                }
            }
        }
          , tu = {
            x: 0,
            y: 0,
            width: "100%",
            height: "100%"
        };
        function nu(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"),
            e
        }
        var ru = {
            hooks: function() {
                return {
                    parseNodeAttributes: function(e, t) {
                        var n = t.getAttribute("data-fa-mask")
                          , r = n ? Yo(n.split(" ").map((function(e) {
                            return e.trim()
                        }
                        ))) : {
                            prefix: null,
                            iconName: null,
                            rest: []
                        };
                        return r.prefix || (r.prefix = Vo()),
                        e.mask = r,
                        e.maskId = t.getAttribute("data-fa-mask-id"),
                        e
                    }
                }
            },
            provides: function(e) {
                e.generateAbstractMask = function(e) {
                    var t, n = e.children, r = e.attributes, a = e.main, i = e.mask, o = e.maskId, l = e.transform, u = a.width, s = a.icon, c = i.width, f = i.icon, d = function(e) {
                        var t = e.transform
                          , n = e.containerWidth
                          , r = e.iconWidth
                          , a = {
                            transform: "translate(".concat(n / 2, " 256)")
                        }
                          , i = "translate(".concat(32 * t.x, ", ").concat(32 * t.y, ") ")
                          , o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") ")
                          , l = "rotate(".concat(t.rotate, " 0 0)");
                        return {
                            outer: a,
                            inner: {
                                transform: "".concat(i, " ").concat(o, " ").concat(l)
                            },
                            path: {
                                transform: "translate(".concat(r / 2 * -1, " -256)")
                            }
                        }
                    }({
                        transform: l,
                        containerWidth: c,
                        iconWidth: u
                    }), p = {
                        tag: "rect",
                        attributes: si(si({}, tu), {}, {
                            fill: "white"
                        })
                    }, m = s.children ? {
                        children: s.children.map(nu)
                    } : {}, h = {
                        tag: "g",
                        attributes: si({}, d.inner),
                        children: [nu(si({
                            tag: s.tag,
                            attributes: si(si({}, s.attributes), d.path)
                        }, m))]
                    }, v = {
                        tag: "g",
                        attributes: si({}, d.outer),
                        children: [h]
                    }, g = "mask-".concat(o || oo()), y = "clip-".concat(o || oo()), b = {
                        tag: "mask",
                        attributes: si(si({}, tu), {}, {
                            id: g,
                            maskUnits: "userSpaceOnUse",
                            maskContentUnits: "userSpaceOnUse"
                        }),
                        children: [p, v]
                    }, w = {
                        tag: "defs",
                        children: [{
                            tag: "clipPath",
                            attributes: {
                                id: y
                            },
                            children: (t = f,
                            "g" === t.tag ? t.children : [t])
                        }, b]
                    };
                    return n.push(w, {
                        tag: "rect",
                        attributes: si({
                            fill: "currentColor",
                            "clip-path": "url(#".concat(y, ")"),
                            mask: "url(#".concat(g, ")")
                        }, tu)
                    }),
                    {
                        children: n,
                        attributes: r
                    }
                }
            }
        }
          , au = {
            provides: function(e) {
                var t = !1;
                Ei.matchMedia && (t = Ei.matchMedia("(prefers-reduced-motion: reduce)").matches),
                e.missingIconAbstract = function() {
                    var e = []
                      , n = {
                        fill: "currentColor"
                    }
                      , r = {
                        attributeType: "XML",
                        repeatCount: "indefinite",
                        dur: "2s"
                    };
                    e.push({
                        tag: "path",
                        attributes: si(si({}, n), {}, {
                            d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                        })
                    });
                    var a = si(si({}, r), {}, {
                        attributeName: "opacity"
                    })
                      , i = {
                        tag: "circle",
                        attributes: si(si({}, n), {}, {
                            cx: "256",
                            cy: "364",
                            r: "28"
                        }),
                        children: []
                    };
                    return t || i.children.push({
                        tag: "animate",
                        attributes: si(si({}, r), {}, {
                            attributeName: "r",
                            values: "28;14;28;28;14;28;"
                        })
                    }, {
                        tag: "animate",
                        attributes: si(si({}, a), {}, {
                            values: "1;0;1;1;0;1;"
                        })
                    }),
                    e.push(i),
                    e.push({
                        tag: "path",
                        attributes: si(si({}, n), {}, {
                            opacity: "1",
                            d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                        }),
                        children: t ? [] : [{
                            tag: "animate",
                            attributes: si(si({}, a), {}, {
                                values: "1;0;0;0;0;1;"
                            })
                        }]
                    }),
                    t || e.push({
                        tag: "path",
                        attributes: si(si({}, n), {}, {
                            opacity: "0",
                            d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                        }),
                        children: [{
                            tag: "animate",
                            attributes: si(si({}, a), {}, {
                                values: "0;0;1;1;0;0;"
                            })
                        }]
                    }),
                    {
                        tag: "g",
                        attributes: {
                            class: "missing"
                        },
                        children: e
                    }
                }
            }
        };
        !function(e, t) {
            var n = t.mixoutsTo;
            qo = e,
            Ko = {},
            Object.keys(Xo).forEach((function(e) {
                -1 === Go.indexOf(e) && delete Xo[e]
            }
            )),
            qo.forEach((function(e) {
                var t = e.mixout ? e.mixout() : {};
                if (Object.keys(t).forEach((function(e) {
                    "function" === typeof t[e] && (n[e] = t[e]),
                    "object" === ci(t[e]) && Object.keys(t[e]).forEach((function(r) {
                        n[e] || (n[e] = {}),
                        n[e][r] = t[e][r]
                    }
                    ))
                }
                )),
                e.hooks) {
                    var r = e.hooks();
                    Object.keys(r).forEach((function(e) {
                        Ko[e] || (Ko[e] = []),
                        Ko[e].push(r[e])
                    }
                    ))
                }
                e.provides && e.provides(Xo)
            }
            ))
        }([vo, Wl, Bl, Vl, $l, {
            hooks: function() {
                return {
                    mutationObserverCallbacks: function(e) {
                        return e.pseudoElementsCallback = Gl,
                        e
                    }
                }
            },
            provides: function(e) {
                e.pseudoElements2svg = function(e) {
                    var t = e.node
                      , n = void 0 === t ? Ci : t;
                    no.searchPseudoElements && Gl(n)
                }
            }
        }, {
            mixout: function() {
                return {
                    dom: {
                        unwatch: function() {
                            _l(),
                            Zl = !0
                        }
                    }
                }
            },
            hooks: function() {
                return {
                    bootstrap: function() {
                        zl(Zo("mutationObserverCallbacks", {}))
                    },
                    noAuto: function() {
                        Tl && Tl.disconnect()
                    },
                    watch: function(e) {
                        var t = e.observeMutationsRoot;
                        Zl ? Nl() : zl(Zo("mutationObserverCallbacks", {
                            observeMutationsRoot: t
                        }))
                    }
                }
            }
        }, eu, ru, au, {
            hooks: function() {
                return {
                    parseNodeAttributes: function(e, t) {
                        var n = t.getAttribute("data-fa-symbol")
                          , r = null !== n && ("" === n || n);
                        return e.symbol = r,
                        e
                    }
                }
            }
        }], {
            mixoutsTo: il
        });
        var iu = il.parse
          , ou = il.icon;
        function lu(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function uu(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? lu(Object(n), !0).forEach((function(t) {
                    cu(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lu(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function su(e) {
            return su = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            su(e)
        }
        function cu(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function fu(e, t) {
            if (null == e)
                return {};
            var n, r, a = function(e, t) {
                if (null == e)
                    return {};
                var n, r, a = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }
        function du(e) {
            return function(e) {
                if (Array.isArray(e))
                    return pu(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return pu(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return pu(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function pu(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function mu(e) {
            return t = e,
            (t -= 0) === t ? e : (e = e.replace(/[\-_\s]+(.)?/g, (function(e, t) {
                return t ? t.toUpperCase() : ""
            }
            ))).substr(0, 1).toLowerCase() + e.substr(1);
            var t
        }
        var hu = ["style"];
        function vu(e) {
            return e.split(";").map((function(e) {
                return e.trim()
            }
            )).filter((function(e) {
                return e
            }
            )).reduce((function(e, t) {
                var n, r = t.indexOf(":"), a = mu(t.slice(0, r)), i = t.slice(r + 1).trim();
                return a.startsWith("webkit") ? e[(n = a,
                n.charAt(0).toUpperCase() + n.slice(1))] = i : e[a] = i,
                e
            }
            ), {})
        }
        var gu = !1;
        try {
            gu = !0
        } catch (Tu) {}
        function yu(e) {
            return e && "object" === su(e) && e.prefix && e.iconName && e.icon ? e : iu.icon ? iu.icon(e) : null === e ? null : e && "object" === su(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? {
                prefix: e[0],
                iconName: e[1]
            } : "string" === typeof e ? {
                prefix: "fas",
                iconName: e
            } : void 0
        }
        function bu(e, t) {
            return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? cu({}, e, t) : {}
        }
        var wu = ["forwardedRef"];
        function xu(e) {
            var t = e.forwardedRef
              , n = fu(e, wu)
              , r = n.icon
              , a = n.mask
              , i = n.symbol
              , o = n.className
              , l = n.title
              , u = n.titleId
              , s = n.maskId
              , c = yu(r)
              , f = bu("classes", [].concat(du(function(e) {
                var t, n = e.beat, r = e.fade, a = e.beatFade, i = e.bounce, o = e.shake, l = e.flash, u = e.spin, s = e.spinPulse, c = e.spinReverse, f = e.pulse, d = e.fixedWidth, p = e.inverse, m = e.border, h = e.listItem, v = e.flip, g = e.size, y = e.rotation, b = e.pull, w = (cu(t = {
                    "fa-beat": n,
                    "fa-fade": r,
                    "fa-beat-fade": a,
                    "fa-bounce": i,
                    "fa-shake": o,
                    "fa-flash": l,
                    "fa-spin": u,
                    "fa-spin-reverse": c,
                    "fa-spin-pulse": s,
                    "fa-pulse": f,
                    "fa-fw": d,
                    "fa-inverse": p,
                    "fa-border": m,
                    "fa-li": h,
                    "fa-flip-horizontal": "horizontal" === v || "both" === v,
                    "fa-flip-vertical": "vertical" === v || "both" === v
                }, "fa-".concat(g), "undefined" !== typeof g && null !== g),
                cu(t, "fa-rotate-".concat(y), "undefined" !== typeof y && null !== y && 0 !== y),
                cu(t, "fa-pull-".concat(b), "undefined" !== typeof b && null !== b),
                cu(t, "fa-swap-opacity", e.swapOpacity),
                t);
                return Object.keys(w).map((function(e) {
                    return w[e] ? e : null
                }
                )).filter((function(e) {
                    return e
                }
                ))
            }(n)), du(o.split(" "))))
              , d = bu("transform", "string" === typeof n.transform ? iu.transform(n.transform) : n.transform)
              , p = bu("mask", yu(a))
              , m = ou(c, uu(uu(uu(uu({}, f), d), p), {}, {
                symbol: i,
                title: l,
                titleId: u,
                maskId: s
            }));
            if (!m)
                return function() {
                    var e;
                    !gu && console && "function" === typeof console.error && (e = console).error.apply(e, arguments)
                }("Could not find icon", c),
                null;
            var h = m.abstract
              , v = {
                ref: t
            };
            return Object.keys(n).forEach((function(e) {
                xu.defaultProps.hasOwnProperty(e) || (v[e] = n[e])
            }
            )),
            ku(h[0], v)
        }
        xu.displayName = "FontAwesomeIcon",
        xu.propTypes = {
            beat: Dr().bool,
            border: Dr().bool,
            bounce: Dr().bool,
            className: Dr().string,
            fade: Dr().bool,
            flash: Dr().bool,
            mask: Dr().oneOfType([Dr().object, Dr().array, Dr().string]),
            maskId: Dr().string,
            fixedWidth: Dr().bool,
            inverse: Dr().bool,
            flip: Dr().oneOf(["horizontal", "vertical", "both"]),
            icon: Dr().oneOfType([Dr().object, Dr().array, Dr().string]),
            listItem: Dr().bool,
            pull: Dr().oneOf(["right", "left"]),
            pulse: Dr().bool,
            rotation: Dr().oneOf([0, 90, 180, 270]),
            shake: Dr().bool,
            size: Dr().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
            spin: Dr().bool,
            spinPulse: Dr().bool,
            spinReverse: Dr().bool,
            symbol: Dr().oneOfType([Dr().bool, Dr().string]),
            title: Dr().string,
            titleId: Dr().string,
            transform: Dr().oneOfType([Dr().string, Dr().object]),
            swapOpacity: Dr().bool
        },
        xu.defaultProps = {
            border: !1,
            className: "",
            mask: null,
            maskId: null,
            fixedWidth: !1,
            inverse: !1,
            flip: null,
            icon: null,
            listItem: !1,
            pull: null,
            pulse: !1,
            rotation: null,
            size: null,
            spin: !1,
            beat: !1,
            fade: !1,
            beatFade: !1,
            bounce: !1,
            shake: !1,
            symbol: !1,
            title: "",
            titleId: null,
            transform: null,
            swapOpacity: !1
        };
        var ku = function e(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if ("string" === typeof n)
                return n;
            var a = (n.children || []).map((function(n) {
                return e(t, n)
            }
            ))
              , i = Object.keys(n.attributes || {}).reduce((function(e, t) {
                var r = n.attributes[t];
                switch (t) {
                case "class":
                    e.attrs.className = r,
                    delete n.attributes.class;
                    break;
                case "style":
                    e.attrs.style = vu(r);
                    break;
                default:
                    0 === t.indexOf("aria-") || 0 === t.indexOf("data-") ? e.attrs[t.toLowerCase()] = r : e.attrs[mu(t)] = r
                }
                return e
            }
            ), {
                attrs: {}
            })
              , o = r.style
              , l = void 0 === o ? {} : o
              , u = fu(r, hu);
            return i.attrs.style = uu(uu({}, i.attrs.style), l),
            t.apply(void 0, [n.tag, uu(uu({}, i.attrs), u)].concat(du(a)))
        }
        .bind(null, e.createElement)
          , Su = "https://count-how-many.neko-note.org/"
          , Eu = "\u300c\u6570\u3092\u6570\u3048\u308b\u3084\u3064\u300d\u306f\u3001\u30ab\u30e1\u30e9\u3084\u753b\u50cf\u306b\u3042\u308b\u7269\u306e\u6570\u3092\u6570\u3048\u308b\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u2728\n\u65e5\u5e38\u306e\u5199\u771f\u306a\u3069\u306e\u5834\u5408\u3001\u305f\u304f\u3055\u3093\u306e\u4f55\u304b\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3059\u3001\u697d\u3057\u3044 \u2728"
          , Cu = window.cv
          , Ou = 1.3
          , ju = {
            2: [255, 241, 118],
            3: [255, 202, 40],
            4: [255, 152, 0],
            5: [244, 67, 54],
            6: [229, 57, 53],
            7: [211, 47, 47],
            8: [198, 40, 40],
            9: [183, 28, 28]
        }
          , Pu = function() {
            var t = (0,
            e.useRef)(null)
              , n = (0,
            e.useRef)(null)
              , r = i((0,
            e.useState)(Mr), 2)
              , a = r[0]
              , o = r[1]
              , u = i((0,
            e.useState)(!1), 2)
              , s = u[0]
              , c = u[1]
              , f = i((0,
            e.useState)(!0), 2)
              , d = f[0]
              , p = f[1]
              , m = i((0,
            e.useState)(null), 2)
              , v = m[0]
              , g = m[1]
              , y = i((0,
            e.useState)(!1), 2)
              , b = y[0]
              , w = y[1]
              , x = i((0,
            e.useState)(null), 2)
              , k = x[0]
              , S = x[1]
              , C = i((0,
            e.useState)(null), 2)
              , O = C[0]
              , P = C[1]
              , _ = i((0,
            e.useState)(null), 2)
              , N = _[0]
              , z = _[1]
              , M = i((0,
            e.useState)(null), 2)
              , L = M[0]
              , D = M[1]
              , R = i((0,
            e.useState)(null), 2)
              , F = R[0]
              , I = R[1];
            (0,
            e.useEffect)((function() {
                var e = setInterval((function() {
                    var e;
                    if (s) {
                        var n = null === (e = t.current) || void 0 === e ? void 0 : e.getScreenshot({
                            width: t.current.video.videoWidth,
                            height: t.current.video.videoHeight
                        });
                        n && o(n)
                    }
                }
                ), 1e3);
                return function() {
                    return clearTimeout(e)
                }
            }
            ), [t, s]);
            var U = function e() {
                if (Cu.Mat) {
                    var t = new Image;
                    t.src = a,
                    t.onload = function() {
                        t.width = 1600,
                        t.height = t.naturalHeight * (1600 / t.naturalWidth),
                        console.log(t.naturalWidth, t.naturalHeight);
                        var e = Cu.imread(t);
                        Cu.cvtColor(e, e, Cu.COLOR_RGBA2RGB, 0),
                        Cu.imshow("original", e);
                        var n = new Cu.Mat;
                        Cu.bilateralFilter(e, n, 9, 75, 75, Cu.BORDER_DEFAULT);
                        var r = new Cu.Mat;
                        Cu.cvtColor(n, r, Cu.COLOR_RGBA2GRAY, 0);
                        var a = new Cu.Mat;
                        d ? Cu.adaptiveThreshold(r, a, 240, Cu.ADAPTIVE_THRESH_MEAN_C, Cu.THRESH_BINARY_INV, 101, 11) : Cu.adaptiveThreshold(r, a, 240, Cu.ADAPTIVE_THRESH_MEAN_C, Cu.THRESH_BINARY, 101, 11);
                        var i = Cu.Mat.ones(7, 7, Cu.CV_8U)
                          , o = Cu.Mat.ones(5, 5, Cu.CV_8U);
                        Cu.erode(a, a, i),
                        Cu.dilate(a, a, o),
                        Cu.imshow("threshold", a);
                        var l = r.clone();
                        Cu.cvtColor(l, l, Cu.COLOR_GRAY2RGB, 0);
                        var u = new Cu.Mat
                          , s = new Cu.Mat
                          , c = new Cu.Mat;
                        Cu.connectedComponentsWithStats(a, u, s, c, 4, Cu.CV_32S);
                        var f = u.data32S.reduce((function(e, t) {
                            return e[t] = (e[t] || 0) + 1,
                            e
                        }
                        ), {})
                          , p = document.getElementById("labeled").getContext("2d")
                          , m = p.canvas.width / p.canvas.clientWidth
                          , h = s.data32S
                          , v = Object.entries(f).slice(1).map((function(e) {
                            return {
                                index: e[0],
                                size: e[1]
                            }
                        }
                        )).filter((function(e) {
                            return t.width * t.height / 1e3 < e.size && e.size < t.width * t.height / 5
                        }
                        )).filter((function(e) {
                            if (!N)
                                return !0;
                            var t = e.index
                              , n = h.slice(5 * t, 5 * (t + 1));
                            return N.x * m <= n[Cu.CC_STAT_LEFT] && N.y * m <= n[Cu.CC_STAT_TOP] && n[Cu.CC_STAT_LEFT] + n[Cu.CC_STAT_WIDTH] <= (N.x + N.w) * m && n[Cu.CC_STAT_TOP] + n[Cu.CC_STAT_HEIGHT] <= (N.y + N.h) * m
                        }
                        ))
                          , y = v.map((function(e) {
                            return e.size
                        }
                        )).reduce((function(e, t) {
                            return e[t] = (e[t] || 0) + 1,
                            e
                        }
                        ), {})
                          , b = Object.entries(y).map((function(e) {
                            return {
                                size: e[0],
                                count: v.filter((function(t) {
                                    return e[0] / Ou < t.size && t.size < e[0] * Ou
                                }
                                )).length
                            }
                        }
                        ))
                          , w = 999999999
                          , x = 0;
                        if (b.length > 0) {
                            for (var k = Math.floor(b.reduce((function(e, t) {
                                return e + t.count
                            }
                            ), 0) / 2 / 1.1), S = k, E = 0; S > 0 && E < b.length; E++)
                                S -= b[E].count;
                            var C = b[E].size;
                            w = C * Ou,
                            x = C / Ou
                        }
                        var O = v.filter((function(e) {
                            return x < e.size && e.size < 999999999
                        }
                        )).map((function(e) {
                            var t = e.index
                              , n = h.slice(5 * t, 5 * (t + 1));
                            return {
                                size: e.size,
                                index: t,
                                x: n[Cu.CC_STAT_LEFT],
                                y: n[Cu.CC_STAT_TOP],
                                height: n[Cu.CC_STAT_HEIGHT],
                                width: n[Cu.CC_STAT_WIDTH]
                            }
                        }
                        ))
                          , j = O.filter((function(e) {
                            return w >= e.size
                        }
                        ))
                          , P = j.map((function(e) {
                            return e.size
                        }
                        )).reduce((function(e, t) {
                            return e + t
                        }
                        ), 0) / j.length || 999999999
                          , _ = O.map((function(e) {
                            return Math.round(e.size / P)
                        }
                        )).reduce((function(e, t) {
                            return e + t
                        }
                        ), 0);
                        g(_),
                        O.filter((function(e) {
                            return Math.round(e.size / P) >= 10
                        }
                        )).forEach((function(e) {
                            var t = e.index - 0;
                            u.data32S.forEach((function(e, n) {
                                e === t && (l.data[3 * n] = 150,
                                l.data[3 * n + 1] = 0,
                                l.data[3 * n + 2] = 0)
                            }
                            ))
                        }
                        )),
                        O.filter((function(e) {
                            return 9 >= Math.round(e.size / P) && Math.round(e.size / P) >= 2
                        }
                        )).forEach((function(e) {
                            var t = e.index - 0;
                            u.data32S.forEach((function(n, r) {
                                if (n === t) {
                                    var a = Math.round(e.size / P);
                                    l.data[3 * r] = ju[a][0],
                                    l.data[3 * r + 1] = ju[a][1],
                                    l.data[3 * r + 2] = ju[a][2]
                                }
                            }
                            ))
                        }
                        )),
                        O.forEach((function(e) {
                            var t = e.x
                              , n = e.y
                              , r = e.height
                              , a = e.width
                              , i = Math.round(e.size / P) > 1 ? new Cu.Scalar(255,0,0) : new Cu.Scalar(0,216,255);
                            Cu.rectangle(l, new Cu.Point(t,n), new Cu.Point(t + a,n + r), i, 2)
                        }
                        )),
                        O.filter((function(e) {
                            return Math.round(e.size / P) > 1
                        }
                        )).forEach((function(e) {
                            var t = e.x
                              , n = e.y;
                            Cu.rectangle(l, new Cu.Point(t,n), new Cu.Point(t + 64,n + 40), new Cu.Scalar(255,0,0), -1),
                            Cu.putText(l, "" + Math.round(e.size / P), new Cu.Point(t + 8,n + 32), Cu.FONT_HERSHEY_SCRIPT_SIMPLEX, 1, new Cu.Scalar(255,255,255), 2, 8)
                        }
                        )),
                        Cu.imshow("labeled", l),
                        i.delete(),
                        o.delete(),
                        e.delete(),
                        n.delete(),
                        r.delete(),
                        a.delete(),
                        u.delete(),
                        s.delete(),
                        c.delete(),
                        l.delete();
                        var T = document.getElementById("labeled").getContext("2d")
                          , z = T.getImageData(0, 0, T.canvas.width, T.canvas.height);
                        D(z)
                    }
                } else
                    setTimeout(e, 1e3)
            };
            (0,
            e.useEffect)((function() {
                U()
            }
            ), [a, d, Cu.Mat, N]);
            (0,
            e.useEffect)((function() {
                k && O && function(e) {
                    e.strokeStyle = "rgb(255,0,255)",
                    e.lineWidth = 8,
                    e.setLineDash([8, 12]);
                    var t = e.canvas.width / e.canvas.clientWidth;
                    e.putImageData(L, 0, 0),
                    e.beginPath(),
                    e.moveTo(k.x * t, k.y * t),
                    e.lineTo(O.x * t, k.y * t),
                    e.moveTo(k.x * t, O.y * t),
                    e.lineTo(O.x * t, O.y * t),
                    e.moveTo(O.x * t, k.y * t),
                    e.lineTo(O.x * t, O.y * t),
                    e.moveTo(k.x * t, k.y * t),
                    e.lineTo(k.x * t, O.y * t),
                    e.stroke()
                }(document.getElementById("labeled").getContext("2d"))
            }
            ), [O, L]);
            var H = function(e) {
                w(!1),
                k && O ? Math.abs(k.x - O.x) <= 8 || Math.abs(k.y - O.y) <= 8 ? z(null) : z({
                    x: Math.min(k.x, O.x),
                    y: Math.min(k.y, O.y),
                    w: Math.abs(k.x - O.x),
                    h: Math.abs(k.y - O.y)
                }) : z(null)
            };
            (0,
            e.useEffect)((function() {
                var e, t = function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    function(e) {
                        if (b) {
                            var t = e.target.getBoundingClientRect();
                            P({
                                x: e.changedTouches[0].clientX - t.left,
                                y: e.changedTouches[0].clientY - t.top
                            })
                        }
                    }(e)
                };
                return null === (e = n.current) || void 0 === e || e.addEventListener("touchmove", t, {
                    passive: !1
                }),
                function() {
                    var e;
                    null === (e = n.current) || void 0 === e || e.removeEventListener("touchmove", t)
                }
            }
            ), [n, b]);
            var W = (0,
            h.jsx)(E, {
                size: "sm",
                title: "\u767d\u9ed2\u304c\u53cd\u8ee2\u3057\u307e\u3059",
                variant: "dark",
                style: {
                    height: 64,
                    width: 64
                },
                onClick: function() {
                    return p(!d)
                },
                children: (0,
                h.jsx)("div", {
                    className: "d-flex align-items-center justify-content-center",
                    children: (0,
                    h.jsxs)("div", {
                        children: [(0,
                        h.jsx)("div", {
                            children: "\u53cd\u8ee2"
                        }), d ? (0,
                        h.jsx)(xu, {
                            icon: ii
                        }) : (0,
                        h.jsx)(xu, {
                            icon: ai
                        })]
                    })
                })
            })
              , B = (0,
            h.jsx)(E, {
                size: "sm",
                title: "\u30ab\u30e1\u30e9\u3092\u540c\u671f\u3057\u307e\u3059",
                variant: s ? "warning" : "outline-warning",
                style: {
                    height: 64,
                    width: 64
                },
                onClick: function() {
                    return c(!s)
                },
                children: (0,
                h.jsx)("div", {
                    className: "d-flex align-items-center justify-content-center",
                    children: (0,
                    h.jsxs)("div", {
                        children: [(0,
                        h.jsx)("div", {
                            children: "\u6620\u50cf"
                        }), s ? (0,
                        h.jsx)(xu, {
                            icon: oi
                        }) : (0,
                        h.jsx)(xu, {
                            icon: li
                        })]
                    })
                })
            })
              , V = (0,
            h.jsx)(E, {
                size: "sm",
                title: "\u30ab\u30e1\u30e9\u3092\u5207\u308a\u66ff\u3048\u307e\u3059",
                variant: "outline-warning",
                style: {
                    height: 64,
                    width: 64
                },
                onClick: function() {
                    navigator.mediaDevices.enumerateDevices().then((function(e) {
                        var t = e.filter((function(e) {
                            return "videoinput" === e.kind
                        }
                        ))
                          , n = ((F && F.index) + 1) % t.length;
                        I({
                            index: n,
                            id: t[n].deviceId
                        })
                    }
                    ))
                },
                children: (0,
                h.jsx)("div", {
                    className: "d-flex align-items-center justify-content-center",
                    children: (0,
                    h.jsxs)("div", {
                        children: [(0,
                        h.jsx)("div", {
                            children: "\u5207\u66ff"
                        }), (0,
                        h.jsx)(xu, {
                            icon: ei
                        })]
                    })
                })
            })
              , $ = (0,
            h.jsx)(E, {
                size: "sm",
                title: "\u5199\u771f\u3092\u3068\u308a\u307e\u3059",
                variant: "warning",
                style: {
                    height: 64,
                    width: 64
                },
                onClick: function() {
                    var e, n = null === (e = t.current) || void 0 === e ? void 0 : e.getScreenshot({
                        width: t.current.video.videoWidth,
                        height: t.current.video.videoHeight
                    });
                    n && (c(!1),
                    o(n))
                },
                children: (0,
                h.jsx)("div", {
                    className: "d-flex align-items-center justify-content-center",
                    children: (0,
                    h.jsxs)("div", {
                        children: [(0,
                        h.jsx)("div", {
                            children: "\u5199\u771f"
                        }), (0,
                        h.jsx)(xu, {
                            icon: Ja
                        })]
                    })
                })
            })
              , Y = v > 0 ? (0,
            h.jsxs)("div", {
                children: [(0,
                h.jsx)("span", {
                    className: "me-2",
                    style: {
                        fontSize: "400%",
                        lineHeight: 1
                    },
                    children: v
                }), " \u500b\u306e\u306a\u306b\u304b\u3092\u307f\u3064\u3051\u305f\u3088\uff01"]
            }) : (0,
            h.jsxs)("div", {
                children: [(0,
                h.jsx)("span", {
                    className: "me-2",
                    style: {
                        fontSize: "400%",
                        lineHeight: 1
                    }
                }), "\u4e0a\u624b\u306b\u691c\u51fa\u3067\u304d\u3066\u3044\u306a\u3044\u3088\uff01"]
            });
            return (0,
            h.jsxs)(h.Fragment, {
                children: [(0,
                h.jsx)("div", {
                    className: "d-block d-lg-none sticky-top bg-white w-100",
                    children: Y
                }), (0,
                h.jsx)(Za, {
                    className: "w-100 p-md-4",
                    onDrop: function(e) {
                        e && (c(!1),
                        o(URL.createObjectURL(e[0])))
                    },
                    children: (0,
                    h.jsx)(j, {
                        fluid: !0,
                        children: (0,
                        h.jsxs)(T, {
                            children: [(0,
                            h.jsx)(A, {
                                xs: 9,
                                children: (0,
                                h.jsx)("canvas", {
                                    id: "labeled",
                                    className: "w-100",
                                    ref: n,
                                    onMouseDown: function(e) {
                                        var t = e.target.getBoundingClientRect();
                                        P(null),
                                        S({
                                            x: e.clientX - t.left,
                                            y: e.clientY - t.top
                                        }),
                                        w(!0)
                                    },
                                    onMouseMove: function(e) {
                                        if (b) {
                                            var t = e.target.getBoundingClientRect();
                                            P({
                                                x: e.clientX - t.left,
                                                y: e.clientY - t.top
                                            })
                                        }
                                    },
                                    onMouseUp: H,
                                    onTouchStart: function(e) {
                                        var t = e.target.getBoundingClientRect();
                                        P(null),
                                        S({
                                            x: e.changedTouches[0].clientX - t.left,
                                            y: e.changedTouches[0].clientY - t.top
                                        }),
                                        w(!0)
                                    },
                                    onTouchEnd: H,
                                    style: {
                                        border: "solid 4px #00000020",
                                        borderRadius: 8
                                    }
                                })
                            }), (0,
                            h.jsxs)(A, {
                                xs: 3,
                                className: "position-relative",
                                children: [(0,
                                h.jsx)("div", {
                                    style: {
                                        left: 4,
                                        top: 4,
                                        borderTopLeftRadius: 3
                                    },
                                    className: "d-block d-md-none px-2 bg-secondary text-light py-1",
                                    children: "\u30ab\u30e1\u30e9"
                                }), (0,
                                h.jsxs)("div", {
                                    className: "position-relative",
                                    children: [(0,
                                    h.jsx)("div", {
                                        style: {
                                            left: 4,
                                            top: 4,
                                            borderTopLeftRadius: 3
                                        },
                                        className: "d-none d-md-block px-2 position-absolute bg-secondary text-light py-1",
                                        children: "\u30ab\u30e1\u30e9"
                                    }), (0,
                                    h.jsx)(l(), {
                                        style: {
                                            border: "solid 4px #00000020",
                                            borderRadius: 8
                                        },
                                        className: "w-100",
                                        audio: !1,
                                        ref: t,
                                        screenshotFormat: "image/jpeg",
                                        videoConstraints: {
                                            width: 1600,
                                            height: 1200,
                                            deviceId: F && F.id
                                        }
                                    })]
                                }), (0,
                                h.jsx)("div", {
                                    style: {
                                        left: 4,
                                        top: 4,
                                        borderTopLeftRadius: 3
                                    },
                                    className: "d-block d-md-none px-2 bg-secondary text-light py-1",
                                    children: "\u5165\u529b"
                                }), (0,
                                h.jsxs)("div", {
                                    className: "position-relative",
                                    children: [(0,
                                    h.jsx)("div", {
                                        style: {
                                            left: 4,
                                            top: 4,
                                            borderTopLeftRadius: 3
                                        },
                                        className: "d-none d-md-block px-2 position-absolute bg-secondary text-light py-1",
                                        children: "\u5165\u529b\u753b\u50cf"
                                    }), (0,
                                    h.jsx)("canvas", {
                                        id: "original",
                                        className: "w-100",
                                        style: {
                                            border: "solid 4px #00000020",
                                            borderRadius: 8
                                        }
                                    })]
                                }), (0,
                                h.jsx)("div", {
                                    style: {
                                        left: 4,
                                        top: 4,
                                        borderTopLeftRadius: 3
                                    },
                                    className: "d-block d-md-none px-2 bg-secondary text-light py-1",
                                    children: "\u767d\u9ed2"
                                }), (0,
                                h.jsxs)("div", {
                                    className: "position-relative",
                                    children: [(0,
                                    h.jsx)("div", {
                                        style: {
                                            left: 4,
                                            top: 4,
                                            borderTopLeftRadius: 3
                                        },
                                        className: "d-none d-md-block px-2 position-absolute bg-secondary text-light py-1",
                                        children: "\u767d\u9ed2\uff12\u5024"
                                    }), (0,
                                    h.jsx)("canvas", {
                                        id: "threshold",
                                        className: "w-100",
                                        style: {
                                            border: "solid 4px #00000020",
                                            borderRadius: 8
                                        }
                                    })]
                                })]
                            })]
                        })
                    })
                }), (0,
                h.jsxs)("div", {
                    className: "d-flex justify-content-start bg-white w-100 p-3",
                    style: {
                        position: "sticky",
                        bottom: 0,
                        zIndex: 1020
                    },
                    children: [(0,
                    h.jsx)("div", {
                        className: "mx-2",
                        children: W
                    }), (0,
                    h.jsx)("div", {
                        className: "d-none d-lg-block mx-2 ms-auto",
                        children: (0,
                        h.jsx)("small", {
                            children: Y
                        })
                    }), (0,
                    h.jsx)("div", {
                        className: "mx-2 ms-auto",
                        children: B
                    }), (0,
                    h.jsx)("div", {
                        className: "mx-2",
                        children: V
                    }), (0,
                    h.jsx)("div", {
                        className: "mx-2",
                        children: $
                    })]
                }), (0,
                h.jsxs)("div", {
                    style: {
                        paddingTop: 64
                    },
                    children: [(0,
                    h.jsx)(Zn, {
                        trigger: "click",
                        placement: "auto",
                        overlay: (0,
                        h.jsx)(tr, {
                            children: (0,
                            h.jsxs)("div", {
                                className: "text-start p-4",
                                style: {
                                    fontSize: "100%"
                                },
                                children: [(0,
                                h.jsx)("big", {
                                    children: (0,
                                    h.jsx)(xu, {
                                        icon: ri,
                                        className: "text-warning"
                                    })
                                }), " ", (0,
                                h.jsx)("span", {
                                    className: "d-none d-md-inline",
                                    children: "\u3053\u306e\u30b5\u30fc\u30d3\u30b9\u3067\u306f\u3001"
                                }), (0,
                                h.jsx)("big", {
                                    children: "\u300c\u30e2\u30ce\u300d"
                                }), "\u3092\u6570\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002", (0,
                                h.jsx)("br", {}), (0,
                                h.jsx)("hr", {}), (0,
                                h.jsxs)("h4", {
                                    children: [(0,
                                    h.jsx)(xu, {
                                        icon: ti,
                                        className: "text-primary"
                                    }), " \u5165\u529b"]
                                }), (0,
                                h.jsx)("span", {
                                    className: "d-none d-md-inline",
                                    children: "\u30ab\u30e1\u30e9\u306e\u4f7f\u7528\u304c\u8a31\u53ef\u3055\u308c\u3066\u3044\u308c\u3070\u3001"
                                }), " ", (0,
                                h.jsx)("big", {
                                    children: (0,
                                    h.jsx)(xu, {
                                        icon: Ja
                                    })
                                }), " \u3067\u5199\u771f\u304c\u64ae\u308c\u307e\u3059\u3002", (0,
                                h.jsx)("br", {}), (0,
                                h.jsx)("small", {
                                    style: {
                                        color: "#ccc"
                                    },
                                    children: "\u5199\u771f\u3084\u753b\u50cf\u306a\u3089\u3001\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
                                }), (0,
                                h.jsx)("br", {}), (0,
                                h.jsxs)("span", {
                                    className: "d-none d-md-inline",
                                    children: [(0,
                                    h.jsx)("br", {}), (0,
                                    h.jsxs)("span", {
                                        style: {
                                            color: "#ccc"
                                        },
                                        children: [(0,
                                        h.jsx)(xu, {
                                            icon: ri,
                                            className: "text-warning"
                                        }), " \u3053\u3053\u307e\u3067\u3067 ", (0,
                                        h.jsx)("big", {
                                            children: "\u7d50\u679c"
                                        }), " \u304c\u3067\u307e\u3059\u3002"]
                                    }), (0,
                                    h.jsx)("br", {}), (0,
                                    h.jsx)("small", {
                                        style: {
                                            color: "#ccc"
                                        },
                                        children: "\u7d50\u679c\u304c\u304a\u304b\u3057\u3044\u3068\u304d\u306f\u3001\u6b21\u306b\u9032\u3093\u3067\u304f\u3060\u3055\u3044\u3002"
                                    }), (0,
                                    h.jsx)("br", {})]
                                }), (0,
                                h.jsx)("hr", {}), (0,
                                h.jsxs)("h4", {
                                    children: [(0,
                                    h.jsx)(xu, {
                                        icon: ti,
                                        className: "text-info"
                                    }), " \u8a2d\u5b9a"]
                                }), (0,
                                h.jsx)("span", {
                                    className: "d-none d-md-inline",
                                    children: "\u300c\u767d\u9ed2\uff12\u5024\u300d\u306e\u753b\u50cf\u3067\u3001"
                                }), " ", (0,
                                h.jsx)("big", {
                                    children: "\u300c\u30e2\u30ce\u300d"
                                }), " \u3092 ", (0,
                                h.jsx)("big", {
                                    children: "\u767d\u304f"
                                }), " \u3057\u307e\u3059\u3002", (0,
                                h.jsx)("br", {}), (0,
                                h.jsx)("br", {}), (0,
                                h.jsx)("span", {
                                    style: {
                                        color: "#ccc"
                                    },
                                    children: "\u300c\u53cd\u8ee2\u300d\u3084\u300c\u73fe\u5b9f\u306e\u660e\u308b\u3055\u300d\u306a\u3069\u3067\u6574\u3048\u307e\u3059\u3002"
                                }), (0,
                                h.jsx)("br", {}), (0,
                                h.jsx)("small", {
                                    style: {
                                        color: "#ccc"
                                    },
                                    children: "\u203b \u767d\u304f\u306a\u3044\u3068\u3001\u3046\u307e\u304f\u300c\u30e2\u30ce\u300d\u3092\u898b\u3064\u3051\u3089\u308c\u307e\u305b\u3093\u3002"
                                }), (0,
                                h.jsx)("br", {}), (0,
                                h.jsx)("br", {}), (0,
                                h.jsxs)("h4", {
                                    children: [(0,
                                    h.jsx)(xu, {
                                        icon: ti,
                                        className: "text-info"
                                    }), " \u7bc4\u56f2\u6307\u5b9a"]
                                }), "\u5de6\u306e\u753b\u9762\u3067 ", (0,
                                h.jsx)("big", {
                                    children: "\u3050\u3044\uff5e\uff5e\uff5e\u3093"
                                }), " \u3068\u9078\u629e\u3057\u307e\u3059\u3002", (0,
                                h.jsx)("br", {}), (0,
                                h.jsx)("br", {}), (0,
                                h.jsxs)("h4", {
                                    children: [(0,
                                    h.jsx)(xu, {
                                        icon: ti,
                                        className: "text-info"
                                    }), " \u8abf\u6574"]
                                }), (0,
                                h.jsx)("span", {
                                    className: "d-none d-md-inline",
                                    children: "\u304f\u3063\u3064\u3044\u305f\u308a"
                                }), "\u91cd\u306a\u3063\u3066\u3044\u308b\u3068\u3001\u6570\u304c\u3042\u308f\u306a\u3044\u3053\u3068\u304c\u3042\u308b\u3088\u3002", (0,
                                h.jsx)("br", {}), (0,
                                h.jsx)("span", {
                                    style: {
                                        color: "#ccc"
                                    },
                                    children: (0,
                                    h.jsxs)("u", {
                                        children: [(0,
                                        h.jsx)("big", {
                                            children: "\u3070\u3089\u3059"
                                        }), " \u304b\u3001 ", (0,
                                        h.jsx)("big", {
                                            children: "\u898b\u3066\u78ba\u8a8d"
                                        }), " \u3057\u3066\u306d\u3002"]
                                    })
                                }), (0,
                                h.jsx)("br", {}), (0,
                                h.jsxs)("span", {
                                    className: "d-none d-md-inline",
                                    children: [(0,
                                    h.jsx)("br", {}), (0,
                                    h.jsx)("small", {
                                        style: {
                                            color: "#ccc"
                                        },
                                        children: "\u4f55\u304b\u306e\u304a\u5f79\u306b\u7acb\u3066\u307e\u3059\u3088\u3046\u306b\u3001\u304a\u7948\u308a"
                                    }), " ", (0,
                                    h.jsx)("big", {
                                        children: (0,
                                        h.jsx)(xu, {
                                            icon: ni,
                                            className: "text-success"
                                        })
                                    })]
                                })]
                            })
                        }),
                        children: (0,
                        h.jsx)(E, {
                            variant: "warning",
                            children: "\u30d8\u30eb\u30d7\uff01\u306a\u306b\u3053\u308c\uff1f"
                        })
                    }), (0,
                    h.jsxs)("div", {
                        className: "d-none d-md-block",
                        children: [(0,
                        h.jsx)("div", {
                            className: "m-2",
                            children: "\u306b\u308f\u304b\u304c\u4f5c\u3063\u3066\u3044\u308b\u306e\u3067\u3001\u3046\u307e\u304f\u52d5\u304b\u306a\u3044\u3053\u3068\u304c\u305f\u304f\u3055\u3093\u3042\u308a\u307e\u3059\u3002"
                        }), (0,
                        h.jsx)("div", {
                            className: "m-2",
                            children: "\u65e5\u5e38\u306e\u5199\u771f\u306a\u3069\u306e\u5834\u5408\u3001\u305f\u304f\u3055\u3093\u306e\u4f55\u304b\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3059\u3001\u697d\u3057\u3044 \u2728"
                        })]
                    })]
                })]
            })
        };
        var _u = function() {
            return (0,
            h.jsxs)("div", {
                className: "App",
                children: [(0,
                h.jsx)("div", {
                    className: "w-100 border-bottom border-dark text-center",
                    children: (0,
                    h.jsx)("a", {
                        href: "https://count-how-many.neko-note.org/",
                        children: (0,
                        h.jsx)("img", {
                            alt: "\u6570\u3092\u6570\u3048\u308b\u3084\u3064",
                            src: "".concat("", "/logo.png"),
                            style: {
                                maxWidth: "100%",
                                maxHeight: "127px"
                            }
                        })
                    })
                }), (0,
                h.jsx)("div", {
                    className: "py-4 d-flex flex-column justify-content-around align-items-center",
                    style: {
                        minHeight: "calc(100vh - 128px - 56px)"
                    },
                    children: (0,
                    h.jsx)(Pu, {})
                }), (0,
                h.jsxs)("div", {
                    className: "py-0 py-md-3 w-100 d-flex align-items-center justify-content-around",
                    style: {
                        color: "gray",
                        fontSize: 12
                    },
                    children: [(0,
                    h.jsxs)("div", {
                        children: [(0,
                        h.jsx)("a", {
                            className: "mx-1",
                            href: "https://neko-note.org/",
                            children: "\u300c\u305d\u308c\u306a\u3089\u732b\u306e\u624b\u3067\u300d"
                        }), (0,
                        h.jsx)("a", {
                            className: "mx-1",
                            href: "https://neko-note.org/privacy-policy",
                            style: {
                                color: "gray"
                            },
                            children: "\u514d\u8cac\u4e8b\u9805"
                        })]
                    }), (0,
                    h.jsx)("div", {
                        className: "px-0 px-md-4",
                        children: "Copyright \xa9 2022"
                    }), (0,
                    h.jsxs)("div", {
                        className: "text-center px-0 px-md-4",
                        children: [(0,
                        h.jsx)(br, {
                            url: Su,
                            quote: Eu,
                            className: "me-2 d-none d-md-inline",
                            children: (0,
                            h.jsx)(Sr, {
                                size: 24,
                                round: !0
                            })
                        }), (0,
                        h.jsx)(Cr, {
                            url: Su,
                            title: Eu,
                            className: "me-2",
                            children: (0,
                            h.jsx)(Or, {
                                size: 24,
                                round: !0
                            })
                        }), (0,
                        h.jsx)(Pr, {
                            url: Su,
                            title: Eu,
                            className: "me-2",
                            children: (0,
                            h.jsx)(_r, {
                                size: 24,
                                round: !0
                            })
                        }), (0,
                        h.jsx)(Tr, {
                            url: Su,
                            title: Eu,
                            className: "d-none d-md-inline",
                            windowWidth: 660,
                            windowHeight: 460,
                            children: (0,
                            h.jsx)(zr, {
                                size: 24,
                                round: !0
                            })
                        })]
                    })]
                })]
            })
        }
          , Nu = function(e) {
            e && e instanceof Function && n.e(787).then(n.bind(n, 787)).then((function(t) {
                var n = t.getCLS
                  , r = t.getFID
                  , a = t.getFCP
                  , i = t.getLCP
                  , o = t.getTTFB;
                n(e),
                r(e),
                a(e),
                i(e),
                o(e)
            }
            ))
        };
        t.createRoot(document.getElementById("root")).render((0,
        h.jsx)(e.StrictMode, {
            children: (0,
            h.jsx)(_u, {})
        })),
        Nu()
    }()
}();
//# sourceMappingURL=main.f74055d3.js.map
