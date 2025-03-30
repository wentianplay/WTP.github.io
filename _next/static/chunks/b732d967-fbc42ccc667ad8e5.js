"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [984], {
        6883: function(e, t, i) {
            let s, r, n, a, o, l;
            i.d(t, {
                Z: function() {
                    return r_
                }
            });
            var h = i(289),
                d = i.n(h),
                u = i(7075),
                c = i.n(u),
                p = i(8724),
                m = i.n(p),
                g = i(8026),
                f = i.n(g),
                _ = i(1188),
                y = i.n(_),
                v = i(9565),
                T = i.n(v),
                b = i(2073),
                S = i(9538),
                k = i(9272),
                C = i(5576),
                E = i(7691),
                w = i(4316),
                x = i(3813),
                I = i(9530),
                P = i.n(I),
                A = i(2989),
                L = i(9300),
                D = i(7135),
                O = "8.12.0";
            let M = {},
                R = function(e, t) {
                    return M[e] = M[e] || [], t && (M[e] = M[e].concat(t)), M[e]
                },
                U = function(e, t) {
                    let i = R(e).indexOf(t);
                    return !(i <= -1) && (M[e] = M[e].slice(), M[e].splice(i, 1), !0)
                },
                B = {
                    prefixed: !0
                },
                N = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"]
                ],
                j = N[0];
            for (let e = 0; e < N.length; e++)
                if (N[e][1] in c()) {
                    s = N[e];
                    break
                }
            if (s) {
                for (let e = 0; e < s.length; e++) B[j[e]] = s[e];
                B.prefixed = s[0] !== j[0]
            }
            let F = [],
                $ = (e, t, i) => (s, r, n) => {
                    let a = t.levels[r],
                        o = RegExp(`^(${a})$`),
                        l = e;
                    if ("log" !== s && n.unshift(s.toUpperCase() + ":"), i && (l = `%c${e}`, n.unshift(i)), n.unshift(l + ":"), F) {
                        F.push([].concat(n));
                        let e = F.length - 1e3;
                        F.splice(0, e > 0 ? e : 0)
                    }
                    if (!d().console) return;
                    let h = d().console[s];
                    h || "debug" !== s || (h = d().console.info || d().console.log), h && a && o.test(s) && h[Array.isArray(n) ? "apply" : "call"](d().console, n)
                },
                q = function e(t, i = ":", s = "") {
                    let r, n = "info",
                        a = function(...e) {
                            r("log", n, e)
                        };
                    return r = $(t, a, s), a.createLogger = (r, n, a) => {
                        let o = void 0 !== n ? n : i;
                        return e(`${t} ${o} ${r}`, o, void 0 !== a ? a : s)
                    }, a.createNewLogger = (t, i, s) => e(t, i, s), a.levels = {
                        all: "debug|log|warn|error",
                        off: "",
                        debug: "debug|log|warn|error",
                        info: "log|warn|error",
                        warn: "warn|error",
                        error: "error",
                        DEFAULT: n
                    }, a.level = e => {
                        if ("string" == typeof e) {
                            if (!a.levels.hasOwnProperty(e)) throw Error(`"${e}" in not a valid log level`);
                            n = e
                        }
                        return n
                    }, a.history = () => F ? [].concat(F) : [], a.history.filter = e => (F || []).filter(t => RegExp(`.*${e}.*`).test(t[0])), a.history.clear = () => {
                        F && (F.length = 0)
                    }, a.history.disable = () => {
                        null !== F && (F.length = 0, F = null)
                    }, a.history.enable = () => {
                        null === F && (F = [])
                    }, a.error = (...e) => r("error", n, e), a.warn = (...e) => r("warn", n, e), a.debug = (...e) => r("debug", n, e), a
                }("VIDEOJS"),
                H = q.createLogger,
                V = Object.prototype.toString,
                z = function(e) {
                    return K(e) ? Object.keys(e) : []
                };

            function W(e, t) {
                z(e).forEach(i => t(e[i], i))
            }

            function G(e, t, i = 0) {
                return z(e).reduce((i, s) => t(i, e[s], s), i)
            }

            function K(e) {
                return !!e && "object" == typeof e
            }

            function Q(e) {
                return K(e) && "[object Object]" === V.call(e) && e.constructor === Object
            }

            function Y(...e) {
                let t = {};
                return e.forEach(e => {
                    e && W(e, (e, i) => {
                        if (!Q(e)) {
                            t[i] = e;
                            return
                        }
                        Q(t[i]) || (t[i] = {}), t[i] = Y(t[i], e)
                    })
                }), t
            }

            function X(e = {}) {
                let t = [];
                for (let i in e)
                    if (e.hasOwnProperty(i)) {
                        let s = e[i];
                        t.push(s)
                    }
                return t
            }

            function J(e, t, i, s = !0) {
                let r = i => Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        writable: !0
                    }),
                    n = {
                        configurable: !0,
                        enumerable: !0,
                        get() {
                            let e = i();
                            return r(e), e
                        }
                    };
                return s && (n.set = r), Object.defineProperty(e, t, n)
            }
            var Z = Object.freeze({
                __proto__: null,
                each: W,
                reduce: G,
                isObject: K,
                isPlain: Q,
                merge: Y,
                values: X,
                defineLazyProperty: J
            });
            let ee = !1,
                et = null,
                ei = !1,
                es = !1,
                er = !1,
                en = !1,
                ea = !1,
                eo = null,
                el = null,
                eh = null,
                ed = !1,
                eu = !1,
                ec = !1,
                ep = !1,
                em = !1,
                eg = !1,
                ef = !1,
                e_ = !!(ek() && ("ontouchstart" in d() || d().navigator.maxTouchPoints || d().DocumentTouch && d().document instanceof d().DocumentTouch)),
                ey = d().navigator && d().navigator.userAgentData;
            if (ey && ey.platform && ey.brands && (ei = "Android" === ey.platform, er = !!ey.brands.find(e => "Microsoft Edge" === e.brand), en = !!ey.brands.find(e => "Chromium" === e.brand), ea = !er && en, eo = el = (ey.brands.find(e => "Chromium" === e.brand) || {}).version || null, eu = "Windows" === ey.platform), !en) {
                let e = d().navigator && d().navigator.userAgent || "";
                ee = /iPod/i.test(e), et = function() {
                    let t = e.match(/OS (\d+)_/i);
                    return t && t[1] ? t[1] : null
                }(), ei = /Android/i.test(e), r = function() {
                    let t = e.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
                    if (!t) return null;
                    let i = t[1] && parseFloat(t[1]),
                        s = t[2] && parseFloat(t[2]);
                    return i && s ? parseFloat(t[1] + "." + t[2]) : i || null
                }(), es = /Firefox/i.test(e), er = /Edg/i.test(e), en = /Chrome/i.test(e) || /CriOS/i.test(e), ea = !er && en, eo = el = function() {
                    let t = e.match(/(Chrome|CriOS)\/(\d+)/);
                    return t && t[2] ? parseFloat(t[2]) : null
                }(), eh = function() {
                    let t = /MSIE\s(\d+)\.\d/.exec(e),
                        i = t && parseFloat(t[1]);
                    return !i && /Trident\/7.0/i.test(e) && /rv:11.0/.test(e) && (i = 11), i
                }(), em = /Tizen/i.test(e), eg = /Web0S/i.test(e), ef = em || eg, ed = /Safari/i.test(e) && !ea && !ei && !er && !ef, eu = /Windows/i.test(e), ec = /iPad/i.test(e) || ed && e_ && !/iPhone/i.test(e), ep = /iPhone/i.test(e) && !ec
            }
            let ev = ep || ec || ee,
                eT = (ed || ev) && !ea;
            var eb = Object.freeze({
                __proto__: null,
                get IS_IPOD() {
                    return ee
                },
                get IOS_VERSION() {
                    return et
                },
                get IS_ANDROID() {
                    return ei
                },
                get ANDROID_VERSION() {
                    return r
                },
                get IS_FIREFOX() {
                    return es
                },
                get IS_EDGE() {
                    return er
                },
                get IS_CHROMIUM() {
                    return en
                },
                get IS_CHROME() {
                    return ea
                },
                get CHROMIUM_VERSION() {
                    return eo
                },
                get CHROME_VERSION() {
                    return el
                },
                get IE_VERSION() {
                    return eh
                },
                get IS_SAFARI() {
                    return ed
                },
                get IS_WINDOWS() {
                    return eu
                },
                get IS_IPAD() {
                    return ec
                },
                get IS_IPHONE() {
                    return ep
                },
                get IS_TIZEN() {
                    return em
                },
                get IS_WEBOS() {
                    return eg
                },
                get IS_SMART_TV() {
                    return ef
                },
                TOUCH_ENABLED: e_,
                IS_IOS: ev,
                IS_ANY_SAFARI: eT
            });

            function eS(e) {
                return "string" == typeof e && !!e.trim()
            }

            function ek() {
                return c() === d().document
            }

            function eC(e) {
                return K(e) && 1 === e.nodeType
            }

            function eE() {
                try {
                    return d().parent !== d().self
                } catch (e) {
                    return !0
                }
            }

            function ew(e) {
                return function(t, i) {
                    if (!eS(t)) return c()[e](null);
                    eS(i) && (i = c().querySelector(i));
                    let s = eC(i) ? i : c();
                    return s[e] && s[e](t)
                }
            }

            function ex(e = "div", t = {}, i = {}, s) {
                let r = c().createElement(e);
                return Object.getOwnPropertyNames(t).forEach(function(e) {
                    let i = t[e];
                    "textContent" === e ? eI(r, i) : (r[e] !== i || "tabIndex" === e) && (r[e] = i)
                }), Object.getOwnPropertyNames(i).forEach(function(e) {
                    r.setAttribute(e, i[e])
                }), s && eG(r, s), r
            }

            function eI(e, t) {
                return void 0 === e.textContent ? e.innerText = t : e.textContent = t, e
            }

            function eP(e, t) {
                t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
            }

            function eA(e, t) {
                return ! function(e) {
                    if (e.indexOf(" ") >= 0) throw Error("class has illegal whitespace characters")
                }(t), e.classList.contains(t)
            }

            function eL(e, ...t) {
                return e.classList.add(...t.reduce((e, t) => e.concat(t.split(/\s+/)), [])), e
            }

            function eD(e, ...t) {
                return e ? (e.classList.remove(...t.reduce((e, t) => e.concat(t.split(/\s+/)), [])), e) : (q.warn("removeClass was called with an element that doesn't exist"), null)
            }

            function eO(e, t, i) {
                return "function" == typeof i && (i = i(e, t)), "boolean" != typeof i && (i = void 0), t.split(/\s+/).forEach(t => e.classList.toggle(t, i)), e
            }

            function eM(e, t) {
                Object.getOwnPropertyNames(t).forEach(function(i) {
                    let s = t[i];
                    null == s || !1 === s ? e.removeAttribute(i) : e.setAttribute(i, !0 === s ? "" : s)
                })
            }

            function eR(e) {
                let t = {},
                    i = ["autoplay", "controls", "playsinline", "loop", "muted", "default", "defaultMuted"];
                if (e && e.attributes && e.attributes.length > 0) {
                    let s = e.attributes;
                    for (let e = s.length - 1; e >= 0; e--) {
                        let r = s[e].name,
                            n = s[e].value;
                        i.includes(r) && (n = null !== n), t[r] = n
                    }
                }
                return t
            }

            function eU(e, t) {
                return e.getAttribute(t)
            }

            function eB(e, t, i) {
                e.setAttribute(t, i)
            }

            function eN(e, t) {
                e.removeAttribute(t)
            }

            function ej() {
                c().body.focus(), c().onselectstart = function() {
                    return !1
                }
            }

            function eF() {
                c().onselectstart = function() {
                    return !0
                }
            }

            function e$(e) {
                if (e && e.getBoundingClientRect && e.parentNode) {
                    let t = e.getBoundingClientRect(),
                        i = {};
                    return ["bottom", "height", "left", "right", "top", "width"].forEach(e => {
                        void 0 !== t[e] && (i[e] = t[e])
                    }), i.height || (i.height = parseFloat(eJ(e, "height"))), i.width || (i.width = parseFloat(eJ(e, "width"))), i
                }
            }

            function eq(e) {
                if (!e || e && !e.offsetParent) return {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                };
                let t = e.offsetWidth,
                    i = e.offsetHeight,
                    s = 0,
                    r = 0;
                for (; e.offsetParent && e !== c()[B.fullscreenElement];) s += e.offsetLeft, r += e.offsetTop, e = e.offsetParent;
                return {
                    left: s,
                    top: r,
                    width: t,
                    height: i
                }
            }

            function eH(e, t) {
                let i = {
                    x: 0,
                    y: 0
                };
                if (ev) {
                    let t = e;
                    for (; t && "html" !== t.nodeName.toLowerCase();) {
                        let e = eJ(t, "transform");
                        if (/^matrix/.test(e)) {
                            let t = e.slice(7, -1).split(/,\s/).map(Number);
                            i.x += t[4], i.y += t[5]
                        } else if (/^matrix3d/.test(e)) {
                            let t = e.slice(9, -1).split(/,\s/).map(Number);
                            i.x += t[12], i.y += t[13]
                        }
                        t = t.parentNode
                    }
                }
                let s = {},
                    r = eq(t.target),
                    n = eq(e),
                    a = n.width,
                    o = n.height,
                    l = t.offsetY - (n.top - r.top),
                    h = t.offsetX - (n.left - r.left);
                return t.changedTouches && (h = t.changedTouches[0].pageX - n.left, l = t.changedTouches[0].pageY + n.top, ev && (h -= i.x, l -= i.y)), s.y = 1 - Math.max(0, Math.min(1, l / o)), s.x = Math.max(0, Math.min(1, h / a)), s
            }

            function eV(e) {
                return K(e) && 3 === e.nodeType
            }

            function ez(e) {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                return e
            }

            function eW(e) {
                return "function" == typeof e && (e = e()), (Array.isArray(e) ? e : [e]).map(e => ("function" == typeof e && (e = e()), eC(e) || eV(e)) ? e : "string" == typeof e && /\S/.test(e) ? c().createTextNode(e) : void 0).filter(e => e)
            }

            function eG(e, t) {
                return eW(t).forEach(t => e.appendChild(t)), e
            }

            function eK(e, t) {
                return eG(ez(e), t)
            }

            function eQ(e) {
                return void 0 === e.button && void 0 === e.buttons || 0 === e.button && void 0 === e.buttons || "mouseup" === e.type && 0 === e.button && 0 === e.buttons || 0 === e.button && 1 === e.buttons
            }
            let eY = ew("querySelector"),
                eX = ew("querySelectorAll");

            function eJ(e, t) {
                if (!e || !t) return "";
                if ("function" == typeof d().getComputedStyle) {
                    let i;
                    try {
                        i = d().getComputedStyle(e)
                    } catch (e) {
                        return ""
                    }
                    return i ? i.getPropertyValue(t) || i[t] : ""
                }
                return ""
            }

            function eZ(e) {
                [...c().styleSheets].forEach(t => {
                    try {
                        let i = [...t.cssRules].map(e => e.cssText).join(""),
                            s = c().createElement("style");
                        s.textContent = i, e.document.head.appendChild(s)
                    } catch (s) {
                        let i = c().createElement("link");
                        i.rel = "stylesheet", i.type = t.type, i.media = t.media.mediaText, i.href = t.href, e.document.head.appendChild(i)
                    }
                })
            }
            var e0 = Object.freeze({
                __proto__: null,
                isReal: ek,
                isEl: eC,
                isInFrame: eE,
                createEl: ex,
                textContent: eI,
                prependTo: eP,
                hasClass: eA,
                addClass: eL,
                removeClass: eD,
                toggleClass: eO,
                setAttributes: eM,
                getAttributes: eR,
                getAttribute: eU,
                setAttribute: eB,
                removeAttribute: eN,
                blockTextSelection: ej,
                unblockTextSelection: eF,
                getBoundingClientRect: e$,
                findPosition: eq,
                getPointerPosition: eH,
                isTextNode: eV,
                emptyEl: ez,
                normalizeContent: eW,
                appendContent: eG,
                insertContent: eK,
                isSingleLeftClick: eQ,
                $: eY,
                $$: eX,
                computedStyle: eJ,
                copyStyleSheetsToWindow: eZ
            });
            let e1 = !1,
                e2 = function() {
                    if (!1 === n.options.autoSetup) return;
                    let e = Array.prototype.slice.call(c().getElementsByTagName("video")),
                        t = Array.prototype.slice.call(c().getElementsByTagName("audio")),
                        i = Array.prototype.slice.call(c().getElementsByTagName("video-js")),
                        s = e.concat(t, i);
                    if (s && s.length > 0)
                        for (let e = 0, t = s.length; e < t; e++) {
                            let t = s[e];
                            if (t && t.getAttribute) void 0 === t.player && null !== t.getAttribute("data-setup") && n(t);
                            else {
                                e4(1);
                                break
                            }
                        } else e1 || e4(1)
                };

            function e4(e, t) {
                ek() && (t && (n = t), d().setTimeout(e2, e))
            }

            function e8() {
                e1 = !0, d().removeEventListener("load", e8)
            }
            ek() && ("complete" === c().readyState ? e8() : d().addEventListener("load", e8));
            let e5 = function(e) {
                    let t = c().createElement("style");
                    return t.className = e, t
                },
                e3 = function(e, t) {
                    e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t
                };
            var e6 = new WeakMap;
            let e7 = 3;

            function e9(e, t) {
                if (!e6.has(e)) return;
                let i = e6.get(e);
                0 === i.handlers[t].length && (delete i.handlers[t], e.removeEventListener ? e.removeEventListener(t, i.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, i.dispatcher)), Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers, delete i.dispatcher, delete i.disabled), 0 === Object.getOwnPropertyNames(i).length && e6.delete(e)
            }

            function te(e, t, i, s) {
                i.forEach(function(i) {
                    e(t, i, s)
                })
            }

            function tt(e) {
                if (e.fixed_) return e;

                function t() {
                    return !0
                }

                function i() {
                    return !1
                }
                if (!e || !e.isPropagationStopped || !e.isImmediatePropagationStopped) {
                    let s = e || d().event;
                    for (let t in e = {}, s) "layerX" === t || "layerY" === t || "keyLocation" === t || "webkitMovementX" === t || "webkitMovementY" === t || "path" === t || "returnValue" === t && s.preventDefault || (e[t] = s[t]);
                    if (e.target || (e.target = e.srcElement || c()), e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), e.preventDefault = function() {
                            s.preventDefault && s.preventDefault(), e.returnValue = !1, s.returnValue = !1, e.defaultPrevented = !0
                        }, e.defaultPrevented = !1, e.stopPropagation = function() {
                            s.stopPropagation && s.stopPropagation(), e.cancelBubble = !0, s.cancelBubble = !0, e.isPropagationStopped = t
                        }, e.isPropagationStopped = i, e.stopImmediatePropagation = function() {
                            s.stopImmediatePropagation && s.stopImmediatePropagation(), e.isImmediatePropagationStopped = t, e.stopPropagation()
                        }, e.isImmediatePropagationStopped = i, null !== e.clientX && void 0 !== e.clientX) {
                        let t = c().documentElement,
                            i = c().body;
                        e.pageX = e.clientX + (t && t.scrollLeft || i && i.scrollLeft || 0) - (t && t.clientLeft || i && i.clientLeft || 0), e.pageY = e.clientY + (t && t.scrollTop || i && i.scrollTop || 0) - (t && t.clientTop || i && i.clientTop || 0)
                    }
                    e.which = e.charCode || e.keyCode, null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
                }
                return e.fixed_ = !0, e
            }
            let ti = function() {
                    if ("boolean" != typeof a) {
                        a = !1;
                        try {
                            let e = Object.defineProperty({}, "passive", {
                                get() {
                                    a = !0
                                }
                            });
                            d().addEventListener("test", null, e), d().removeEventListener("test", null, e)
                        } catch (e) {}
                    }
                    return a
                },
                ts = ["touchstart", "touchmove"];

            function tr(e, t, i) {
                if (Array.isArray(t)) return te(tr, e, t, i);
                e6.has(e) || e6.set(e, {});
                let s = e6.get(e);
                if (s.handlers || (s.handlers = {}), s.handlers[t] || (s.handlers[t] = []), i.guid || (i.guid = e7++), s.handlers[t].push(i), s.dispatcher || (s.disabled = !1, s.dispatcher = function(t, i) {
                        if (s.disabled) return;
                        t = tt(t);
                        let r = s.handlers[t.type];
                        if (r) {
                            let s = r.slice(0);
                            for (let r = 0, n = s.length; r < n && !t.isImmediatePropagationStopped(); r++) try {
                                s[r].call(e, t, i)
                            } catch (e) {
                                q.error(e)
                            }
                        }
                    }), 1 === s.handlers[t].length) {
                    if (e.addEventListener) {
                        let i = !1;
                        ti() && ts.indexOf(t) > -1 && (i = {
                            passive: !0
                        }), e.addEventListener(t, s.dispatcher, i)
                    } else e.attachEvent && e.attachEvent("on" + t, s.dispatcher)
                }
            }

            function tn(e, t, i) {
                if (!e6.has(e)) return;
                let s = e6.get(e);
                if (!s.handlers) return;
                if (Array.isArray(t)) return te(tn, e, t, i);
                let r = function(e, t) {
                    s.handlers[t] = [], e9(e, t)
                };
                if (void 0 === t) {
                    for (let t in s.handlers) Object.prototype.hasOwnProperty.call(s.handlers || {}, t) && r(e, t);
                    return
                }
                let n = s.handlers[t];
                if (n) {
                    if (!i) {
                        r(e, t);
                        return
                    }
                    if (i.guid)
                        for (let e = 0; e < n.length; e++) n[e].guid === i.guid && n.splice(e--, 1);
                    e9(e, t)
                }
            }

            function ta(e, t, i) {
                let s = e6.has(e) ? e6.get(e) : {},
                    r = e.parentNode || e.ownerDocument;
                if ("string" == typeof t ? t = {
                        type: t,
                        target: e
                    } : t.target || (t.target = e), t = tt(t), s.dispatcher && s.dispatcher.call(e, t, i), r && !t.isPropagationStopped() && !0 === t.bubbles) ta.call(null, r, t, i);
                else if (!r && !t.defaultPrevented && t.target && t.target[t.type]) {
                    e6.has(t.target) || e6.set(t.target, {});
                    let e = e6.get(t.target);
                    t.target[t.type] && (e.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), e.disabled = !1)
                }
                return !t.defaultPrevented
            }

            function to(e, t, i) {
                if (Array.isArray(t)) return te(to, e, t, i);
                let s = function() {
                    tn(e, t, s), i.apply(this, arguments)
                };
                s.guid = i.guid = i.guid || e7++, tr(e, t, s)
            }

            function tl(e, t, i) {
                let s = function() {
                    tn(e, t, s), i.apply(this, arguments)
                };
                s.guid = i.guid = i.guid || e7++, tr(e, t, s)
            }
            var th = Object.freeze({
                __proto__: null,
                fixEvent: tt,
                on: tr,
                off: tn,
                trigger: ta,
                one: to,
                any: tl
            });
            let td = function(e, t, i) {
                    t.guid || (t.guid = e7++);
                    let s = t.bind(e);
                    return s.guid = i ? i + "_" + t.guid : t.guid, s
                },
                tu = function(e, t) {
                    let i = d().performance.now();
                    return function(...s) {
                        let r = d().performance.now();
                        r - i >= t && (e(...s), i = r)
                    }
                },
                tc = function(e, t, i, s = d()) {
                    let r;
                    let n = function() {
                        let n = this,
                            a = arguments,
                            o = function() {
                                r = null, o = null, i || e.apply(n, a)
                            };
                        !r && i && e.apply(n, a), s.clearTimeout(r), r = s.setTimeout(o, t)
                    };
                    return n.cancel = () => {
                        s.clearTimeout(r), r = null
                    }, n
                };
            var tp = Object.freeze({
                __proto__: null,
                UPDATE_REFRESH_INTERVAL: 30,
                bind_: td,
                throttle: tu,
                debounce: tc
            });
            class tm {
                on(e, t) {
                    let i = this.addEventListener;
                    this.addEventListener = () => {}, tr(this, e, t), this.addEventListener = i
                }
                off(e, t) {
                    tn(this, e, t)
                }
                one(e, t) {
                    let i = this.addEventListener;
                    this.addEventListener = () => {}, to(this, e, t), this.addEventListener = i
                }
                any(e, t) {
                    let i = this.addEventListener;
                    this.addEventListener = () => {}, tl(this, e, t), this.addEventListener = i
                }
                trigger(e) {
                    let t = e.type || e;
                    "string" == typeof e && (e = {
                        type: t
                    }), e = tt(e), this.allowedEvents_[t] && this["on" + t] && this["on" + t](e), ta(this, e)
                }
                queueTrigger(e) {
                    o || (o = new Map);
                    let t = e.type || e,
                        i = o.get(this);
                    i || (i = new Map, o.set(this, i));
                    let s = i.get(t);
                    i.delete(t), d().clearTimeout(s);
                    let r = d().setTimeout(() => {
                        i.delete(t), 0 === i.size && (i = null, o.delete(this)), this.trigger(e)
                    }, 0);
                    i.set(t, r)
                }
            }
            tm.prototype.allowedEvents_ = {}, tm.prototype.addEventListener = tm.prototype.on, tm.prototype.removeEventListener = tm.prototype.off, tm.prototype.dispatchEvent = tm.prototype.trigger;
            let tg = e => "function" == typeof e.name ? e.name() : "string" == typeof e.name ? e.name : e.name_ ? e.name_ : e.constructor && e.constructor.name ? e.constructor.name : typeof e,
                tf = e => e instanceof tm || !!e.eventBusEl_ && ["on", "one", "off", "trigger"].every(t => "function" == typeof e[t]),
                t_ = (e, t) => {
                    tf(e) ? t() : (e.eventedCallbacks || (e.eventedCallbacks = []), e.eventedCallbacks.push(t))
                },
                ty = e => "string" == typeof e && /\S/.test(e) || Array.isArray(e) && !!e.length,
                tv = (e, t, i) => {
                    if (!e || !e.nodeName && !tf(e)) throw Error(`Invalid target for ${tg(t)}#${i}; must be a DOM node or evented object.`)
                },
                tT = (e, t, i) => {
                    if (!ty(e)) throw Error(`Invalid event type for ${tg(t)}#${i}; must be a non-empty string or array.`)
                },
                tb = (e, t, i) => {
                    if ("function" != typeof e) throw Error(`Invalid listener for ${tg(t)}#${i}; must be a function.`)
                },
                tS = (e, t, i) => {
                    let s, r, n;
                    let a = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_;
                    return a ? (s = e.eventBusEl_, t.length >= 3 && t.shift(), [r, n] = t) : [s, r, n] = t, tv(s, e, i), tT(r, e, i), tb(n, e, i), {
                        isTargetingSelf: a,
                        target: s,
                        type: r,
                        listener: n = td(e, n)
                    }
                },
                tk = (e, t, i, s) => {
                    tv(e, e, t), e.nodeName ? th[t](e, i, s) : e[t](i, s)
                },
                tC = {
                    on(...e) {
                        let {
                            isTargetingSelf: t,
                            target: i,
                            type: s,
                            listener: r
                        } = tS(this, e, "on");
                        if (tk(i, "on", s, r), !t) {
                            let e = () => this.off(i, s, r);
                            e.guid = r.guid;
                            let t = () => this.off("dispose", e);
                            t.guid = r.guid, tk(this, "on", "dispose", e), tk(i, "on", "dispose", t)
                        }
                    },
                    one(...e) {
                        let {
                            isTargetingSelf: t,
                            target: i,
                            type: s,
                            listener: r
                        } = tS(this, e, "one");
                        if (t) tk(i, "one", s, r);
                        else {
                            let e = (...t) => {
                                this.off(i, s, e), r.apply(null, t)
                            };
                            e.guid = r.guid, tk(i, "one", s, e)
                        }
                    },
                    any(...e) {
                        let {
                            isTargetingSelf: t,
                            target: i,
                            type: s,
                            listener: r
                        } = tS(this, e, "any");
                        if (t) tk(i, "any", s, r);
                        else {
                            let e = (...t) => {
                                this.off(i, s, e), r.apply(null, t)
                            };
                            e.guid = r.guid, tk(i, "any", s, e)
                        }
                    },
                    off(e, t, i) {
                        !e || ty(e) ? tn(this.eventBusEl_, e, t) : (tv(e, this, "off"), tT(t, this, "off"), tb(i, this, "off"), i = td(this, i), this.off("dispose", i), e.nodeName ? (tn(e, t, i), tn(e, "dispose", i)) : tf(e) && (e.off(t, i), e.off("dispose", i)))
                    },
                    trigger(e, t) {
                        if (tv(this.eventBusEl_, this, "trigger"), !ty(e && "string" != typeof e ? e.type : e)) throw Error(`Invalid event type for ${tg(this)}#trigger; must be a non-empty string or object with a type key that has a non-empty value.`);
                        return ta(this.eventBusEl_, e, t)
                    }
                };

            function tE(e, t = {}) {
                let {
                    eventBusKey: i
                } = t;
                if (i) {
                    if (!e[i].nodeName) throw Error(`The eventBusKey "${i}" does not refer to an element.`);
                    e.eventBusEl_ = e[i]
                } else e.eventBusEl_ = ex("span", {
                    className: "vjs-event-bus"
                });
                return Object.assign(e, tC), e.eventedCallbacks && e.eventedCallbacks.forEach(e => {
                    e()
                }), e.on("dispose", () => {
                    e.off(), [e, e.el_, e.eventBusEl_].forEach(function(e) {
                        e && e6.has(e) && e6.delete(e)
                    }), d().setTimeout(() => {
                        e.eventBusEl_ = null
                    }, 0)
                }), e
            }
            let tw = {
                state: {},
                setState(e) {
                    let t;
                    return "function" == typeof e && (e = e()), W(e, (e, i) => {
                        this.state[i] !== e && ((t = t || {})[i] = {
                            from: this.state[i],
                            to: e
                        }), this.state[i] = e
                    }), t && tf(this) && this.trigger({
                        changes: t,
                        type: "statechanged"
                    }), t
                }
            };

            function tx(e, t) {
                return Object.assign(e, tw), e.state = Object.assign({}, e.state, t), "function" == typeof e.handleStateChanged && tf(e) && e.on("statechanged", e.handleStateChanged), e
            }
            let tI = function(e) {
                    return "string" != typeof e ? e : e.replace(/./, e => e.toLowerCase())
                },
                tP = function(e) {
                    return "string" != typeof e ? e : e.replace(/./, e => e.toUpperCase())
                },
                tA = function(e, t) {
                    return tP(e) === tP(t)
                };
            var tL = Object.freeze({
                __proto__: null,
                toLowerCase: tI,
                toTitleCase: tP,
                titleCaseEquals: tA
            });
            class tD {
                constructor(e, t, i) {
                    if (!e && this.play ? this.player_ = e = this : this.player_ = e, this.isDisposed_ = !1, this.parentComponent_ = null, this.options_ = Y({}, this.options_), t = this.options_ = Y(this.options_, t), this.id_ = t.id || t.el && t.el.id, !this.id_) {
                        let t = e && e.id && e.id() || "no_player";
                        this.id_ = `${t}_component_${e7++}`
                    }
                    this.name_ = t.name || null, t.el ? this.el_ = t.el : !1 !== t.createEl && (this.el_ = this.createEl()), t.className && this.el_ && t.className.split(" ").forEach(e => this.addClass(e)), ["on", "off", "one", "any", "trigger"].forEach(e => {
                        this[e] = void 0
                    }), !1 !== t.evented && (tE(this, {
                        eventBusKey: this.el_ ? "el_" : null
                    }), this.handleLanguagechange = this.handleLanguagechange.bind(this), this.on(this.player_, "languagechange", this.handleLanguagechange)), tx(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, this.setTimeoutIds_ = new Set, this.setIntervalIds_ = new Set, this.rafIds_ = new Set, this.namedRafs_ = new Map, this.clearingTimersOnDispose_ = !1, !1 !== t.initChildren && this.initChildren(), this.ready(i), !1 !== t.reportTouchActivity && this.enableTouchActivity()
                }
                on(e, t) {}
                off(e, t) {}
                one(e, t) {}
                any(e, t) {}
                trigger(e, t) {}
                dispose(e = {}) {
                    if (!this.isDisposed_) {
                        if (this.readyQueue_ && (this.readyQueue_.length = 0), this.trigger({
                                type: "dispose",
                                bubbles: !1
                            }), this.isDisposed_ = !0, this.children_)
                            for (let e = this.children_.length - 1; e >= 0; e--) this.children_[e].dispose && this.children_[e].dispose();
                        this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.parentComponent_ = null, this.el_ && (this.el_.parentNode && (e.restoreEl ? this.el_.parentNode.replaceChild(e.restoreEl, this.el_) : this.el_.parentNode.removeChild(this.el_)), this.el_ = null), this.player_ = null
                    }
                }
                isDisposed() {
                    return !!this.isDisposed_
                }
                player() {
                    return this.player_
                }
                options(e) {
                    return e && (this.options_ = Y(this.options_, e)), this.options_
                }
                el() {
                    return this.el_
                }
                createEl(e, t, i) {
                    return ex(e, t, i)
                }
                localize(e, t, i = e) {
                    let s = this.player_.language && this.player_.language(),
                        r = this.player_.languages && this.player_.languages(),
                        n = r && r[s],
                        a = s && s.split("-")[0],
                        o = r && r[a],
                        l = i;
                    return n && n[e] ? l = n[e] : o && o[e] && (l = o[e]), t && (l = l.replace(/\{(\d+)\}/g, function(e, i) {
                        let s = t[i - 1],
                            r = s;
                        return void 0 === s && (r = e), r
                    })), l
                }
                handleLanguagechange() {}
                contentEl() {
                    return this.contentEl_ || this.el_
                }
                id() {
                    return this.id_
                }
                name() {
                    return this.name_
                }
                children() {
                    return this.children_
                }
                getChildById(e) {
                    return this.childIndex_[e]
                }
                getChild(e) {
                    if (e) return this.childNameIndex_[e]
                }
                getDescendant(...e) {
                    e = e.reduce((e, t) => e.concat(t), []);
                    let t = this;
                    for (let i = 0; i < e.length; i++)
                        if (!(t = t.getChild(e[i])) || !t.getChild) return;
                    return t
                }
                setIcon(e, t = this.el()) {
                    if (!this.player_.options_.experimentalSvgIcons) return;
                    let i = "http://www.w3.org/2000/svg",
                        s = ex("span", {
                            className: "vjs-icon-placeholder vjs-svg-icon"
                        }, {
                            "aria-hidden": "true"
                        }),
                        r = c().createElementNS(i, "svg");
                    r.setAttributeNS(null, "viewBox", "0 0 512 512");
                    let n = c().createElementNS(i, "use");
                    return r.appendChild(n), n.setAttributeNS(null, "href", `#vjs-icon-${e}`), s.appendChild(r), this.iconIsSet_ ? t.replaceChild(s, t.querySelector(".vjs-icon-placeholder")) : t.appendChild(s), this.iconIsSet_ = !0, s
                }
                addChild(e, t = {}, i = this.children_.length) {
                    let s, r;
                    if ("string" == typeof e) {
                        r = tP(e);
                        let i = t.componentClass || r;
                        t.name = r;
                        let n = tD.getComponent(i);
                        if (!n) throw Error(`Component ${i} does not exist`);
                        if ("function" != typeof n) return null;
                        s = new n(this.player_ || this, t)
                    } else s = e;
                    if (s.parentComponent_ && s.parentComponent_.removeChild(s), this.children_.splice(i, 0, s), s.parentComponent_ = this, "function" == typeof s.id && (this.childIndex_[s.id()] = s), (r = r || s.name && tP(s.name())) && (this.childNameIndex_[r] = s, this.childNameIndex_[tI(r)] = s), "function" == typeof s.el && s.el()) {
                        let e = null;
                        this.children_[i + 1] && (this.children_[i + 1].el_ ? e = this.children_[i + 1].el_ : eC(this.children_[i + 1]) && (e = this.children_[i + 1])), this.contentEl().insertBefore(s.el(), e)
                    }
                    return s
                }
                removeChild(e) {
                    if ("string" == typeof e && (e = this.getChild(e)), !e || !this.children_) return;
                    let t = !1;
                    for (let i = this.children_.length - 1; i >= 0; i--)
                        if (this.children_[i] === e) {
                            t = !0, this.children_.splice(i, 1);
                            break
                        }
                    if (!t) return;
                    e.parentComponent_ = null, this.childIndex_[e.id()] = null, this.childNameIndex_[tP(e.name())] = null, this.childNameIndex_[tI(e.name())] = null;
                    let i = e.el();
                    i && i.parentNode === this.contentEl() && this.contentEl().removeChild(e.el())
                }
                initChildren() {
                    let e = this.options_.children;
                    if (e) {
                        let t;
                        let i = this.options_,
                            s = tD.getComponent("Tech");
                        (t = Array.isArray(e) ? e : Object.keys(e)).concat(Object.keys(this.options_).filter(function(e) {
                            return !t.some(function(t) {
                                return "string" == typeof t ? e === t : e === t.name
                            })
                        })).map(t => {
                            let i, s;
                            return "string" == typeof t ? s = e[i = t] || this.options_[i] || {} : (i = t.name, s = t), {
                                name: i,
                                opts: s
                            }
                        }).filter(e => {
                            let t = tD.getComponent(e.opts.componentClass || tP(e.name));
                            return t && !s.isTech(t)
                        }).forEach(e => {
                            let t = e.name,
                                s = e.opts;
                            if (void 0 !== i[t] && (s = i[t]), !1 === s) return;
                            !0 === s && (s = {}), s.playerOptions = this.options_.playerOptions;
                            let r = this.addChild(t, s);
                            r && (this[t] = r)
                        })
                    }
                }
                buildCSSClass() {
                    return ""
                }
                ready(e, t = !1) {
                    if (e) {
                        if (!this.isReady_) {
                            this.readyQueue_ = this.readyQueue_ || [], this.readyQueue_.push(e);
                            return
                        }
                        t ? e.call(this) : this.setTimeout(e, 1)
                    }
                }
                triggerReady() {
                    this.isReady_ = !0, this.setTimeout(function() {
                        let e = this.readyQueue_;
                        this.readyQueue_ = [], e && e.length > 0 && e.forEach(function(e) {
                            e.call(this)
                        }, this), this.trigger("ready")
                    }, 1)
                }
                $(e, t) {
                    return eY(e, t || this.contentEl())
                }
                $$(e, t) {
                    return eX(e, t || this.contentEl())
                }
                hasClass(e) {
                    return eA(this.el_, e)
                }
                addClass(...e) {
                    eL(this.el_, ...e)
                }
                removeClass(...e) {
                    eD(this.el_, ...e)
                }
                toggleClass(e, t) {
                    eO(this.el_, e, t)
                }
                show() {
                    this.removeClass("vjs-hidden")
                }
                hide() {
                    this.addClass("vjs-hidden")
                }
                lockShowing() {
                    this.addClass("vjs-lock-showing")
                }
                unlockShowing() {
                    this.removeClass("vjs-lock-showing")
                }
                getAttribute(e) {
                    return eU(this.el_, e)
                }
                setAttribute(e, t) {
                    eB(this.el_, e, t)
                }
                removeAttribute(e) {
                    eN(this.el_, e)
                }
                width(e, t) {
                    return this.dimension("width", e, t)
                }
                height(e, t) {
                    return this.dimension("height", e, t)
                }
                dimensions(e, t) {
                    this.width(e, !0), this.height(t)
                }
                dimension(e, t, i) {
                    if (void 0 !== t) {
                        (null === t || t != t) && (t = 0), -1 !== ("" + t).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t : "auto" === t ? this.el_.style[e] = "" : this.el_.style[e] = t + "px", i || this.trigger("componentresize");
                        return
                    }
                    if (!this.el_) return 0;
                    let s = this.el_.style[e],
                        r = s.indexOf("px");
                    return -1 !== r ? parseInt(s.slice(0, r), 10) : parseInt(this.el_["offset" + tP(e)], 10)
                }
                currentDimension(e) {
                    let t = 0;
                    if ("width" !== e && "height" !== e) throw Error("currentDimension only accepts width or height value");
                    if (0 === (t = parseFloat(t = eJ(this.el_, e))) || isNaN(t)) {
                        let i = `offset${tP(e)}`;
                        t = this.el_[i]
                    }
                    return t
                }
                currentDimensions() {
                    return {
                        width: this.currentDimension("width"),
                        height: this.currentDimension("height")
                    }
                }
                currentWidth() {
                    return this.currentDimension("width")
                }
                currentHeight() {
                    return this.currentDimension("height")
                }
                focus() {
                    this.el_.focus()
                }
                blur() {
                    this.el_.blur()
                }
                handleKeyDown(e) {
                    this.player_ && (m().isEventKey(e, "Tab") || e.stopPropagation(), this.player_.handleKeyDown(e))
                }
                handleKeyPress(e) {
                    this.handleKeyDown(e)
                }
                emitTapEvents() {
                    let e, t = 0,
                        i = null;
                    this.on("touchstart", function(s) {
                        1 === s.touches.length && (i = {
                            pageX: s.touches[0].pageX,
                            pageY: s.touches[0].pageY
                        }, t = d().performance.now(), e = !0)
                    }), this.on("touchmove", function(t) {
                        if (t.touches.length > 1) e = !1;
                        else if (i) {
                            let s = t.touches[0].pageX - i.pageX,
                                r = t.touches[0].pageY - i.pageY;
                            Math.sqrt(s * s + r * r) > 10 && (e = !1)
                        }
                    });
                    let s = function() {
                        e = !1
                    };
                    this.on("touchleave", s), this.on("touchcancel", s), this.on("touchend", function(s) {
                        i = null, !0 === e && d().performance.now() - t < 200 && (s.preventDefault(), this.trigger("tap"))
                    })
                }
                enableTouchActivity() {
                    let e;
                    if (!this.player() || !this.player().reportUserActivity) return;
                    let t = td(this.player(), this.player().reportUserActivity);
                    this.on("touchstart", function() {
                        t(), this.clearInterval(e), e = this.setInterval(t, 250)
                    });
                    let i = function(i) {
                        t(), this.clearInterval(e)
                    };
                    this.on("touchmove", t), this.on("touchend", i), this.on("touchcancel", i)
                }
                setTimeout(e, t) {
                    var i;
                    return e = td(this, e), this.clearTimersOnDispose_(), i = d().setTimeout(() => {
                        this.setTimeoutIds_.has(i) && this.setTimeoutIds_.delete(i), e()
                    }, t), this.setTimeoutIds_.add(i), i
                }
                clearTimeout(e) {
                    return this.setTimeoutIds_.has(e) && (this.setTimeoutIds_.delete(e), d().clearTimeout(e)), e
                }
                setInterval(e, t) {
                    e = td(this, e), this.clearTimersOnDispose_();
                    let i = d().setInterval(e, t);
                    return this.setIntervalIds_.add(i), i
                }
                clearInterval(e) {
                    return this.setIntervalIds_.has(e) && (this.setIntervalIds_.delete(e), d().clearInterval(e)), e
                }
                requestAnimationFrame(e) {
                    var t;
                    return this.clearTimersOnDispose_(), e = td(this, e), t = d().requestAnimationFrame(() => {
                        this.rafIds_.has(t) && this.rafIds_.delete(t), e()
                    }), this.rafIds_.add(t), t
                }
                requestNamedAnimationFrame(e, t) {
                    if (this.namedRafs_.has(e)) return;
                    this.clearTimersOnDispose_(), t = td(this, t);
                    let i = this.requestAnimationFrame(() => {
                        t(), this.namedRafs_.has(e) && this.namedRafs_.delete(e)
                    });
                    return this.namedRafs_.set(e, i), e
                }
                cancelNamedAnimationFrame(e) {
                    this.namedRafs_.has(e) && (this.cancelAnimationFrame(this.namedRafs_.get(e)), this.namedRafs_.delete(e))
                }
                cancelAnimationFrame(e) {
                    return this.rafIds_.has(e) && (this.rafIds_.delete(e), d().cancelAnimationFrame(e)), e
                }
                clearTimersOnDispose_() {
                    this.clearingTimersOnDispose_ || (this.clearingTimersOnDispose_ = !0, this.one("dispose", () => {
                        [
                            ["namedRafs_", "cancelNamedAnimationFrame"],
                            ["rafIds_", "cancelAnimationFrame"],
                            ["setTimeoutIds_", "clearTimeout"],
                            ["setIntervalIds_", "clearInterval"]
                        ].forEach(([e, t]) => {
                            this[e].forEach((e, i) => this[t](i))
                        }), this.clearingTimersOnDispose_ = !1
                    }))
                }
                static registerComponent(e, t) {
                    if ("string" != typeof e || !e) throw Error(`Illegal component name, "${e}"; must be a non-empty string.`);
                    let i = tD.getComponent("Tech"),
                        s = i && i.isTech(t),
                        r = tD === t || tD.prototype.isPrototypeOf(t.prototype);
                    if (s || !r) {
                        let t;
                        throw t = s ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", Error(`Illegal component, "${e}"; ${t}.`)
                    }
                    e = tP(e), tD.components_ || (tD.components_ = {});
                    let n = tD.getComponent("Player");
                    if ("Player" === e && n && n.players) {
                        let e = n.players,
                            t = Object.keys(e);
                        if (e && t.length > 0 && t.map(t => e[t]).every(Boolean)) throw Error("Can not register Player component after player has been created.")
                    }
                    return tD.components_[e] = t, tD.components_[tI(e)] = t, t
                }
                static getComponent(e) {
                    if (e && tD.components_) return tD.components_[e]
                }
            }

            function tO(e, t, i, s) {
                return ! function(e, t, i) {
                    if ("number" != typeof t || t < 0 || t > i) throw Error(`Failed to execute '${e}' on 'TimeRanges': The index provided (${t}) is non-numeric or out of bounds (0-${i}).`)
                }(e, s, i.length - 1), i[s][t]
            }

            function tM(e) {
                let t;
                return t = void 0 === e || 0 === e.length ? {
                    length: 0,
                    start() {
                        throw Error("This TimeRanges object is empty")
                    },
                    end() {
                        throw Error("This TimeRanges object is empty")
                    }
                } : {
                    length: e.length,
                    start: tO.bind(null, "start", 0, e),
                    end: tO.bind(null, "end", 1, e)
                }, d().Symbol && d().Symbol.iterator && (t[d().Symbol.iterator] = () => (e || []).values()), t
            }

            function tR(e, t) {
                return Array.isArray(e) ? tM(e) : void 0 === e || void 0 === t ? tM() : tM([
                    [e, t]
                ])
            }
            tD.registerComponent("Component", tD);
            let tU = function(e, t) {
                    let i = Math.floor((e = e < 0 ? 0 : e) % 60),
                        s = Math.floor(e / 60 % 60),
                        r = Math.floor(e / 3600);
                    return (isNaN(e) || e === 1 / 0) && (r = s = i = "-"), s = (((r = r > 0 || Math.floor(t / 3600) > 0 ? r + ":" : "") || Math.floor(t / 60 % 60) >= 10) && s < 10 ? "0" + s : s) + ":", r + s + (i = i < 10 ? "0" + i : i)
                },
                tB = tU;

            function tN(e) {
                tB = e
            }

            function tj() {
                tB = tU
            }

            function tF(e, t = e) {
                return tB(e, t)
            }
            var t$ = Object.freeze({
                __proto__: null,
                createTimeRanges: tR,
                createTimeRange: tR,
                setFormatTime: tN,
                resetFormatTime: tj,
                formatTime: tF
            });

            function tq(e, t) {
                let i, s, r = 0;
                if (!t) return 0;
                e && e.length || (e = tR(0, 0));
                for (let n = 0; n < e.length; n++) i = e.start(n), (s = e.end(n)) > t && (s = t), r += s - i;
                return r / t
            }

            function tH(e) {
                if (e instanceof tH) return e;
                "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : K(e) && ("number" == typeof e.code && (this.code = e.code), Object.assign(this, e)), this.message || (this.message = tH.defaultMessages[this.code] || "")
            }

            function tV(e) {
                return null != e && "function" == typeof e.then
            }

            function tz(e) {
                tV(e) && e.then(null, e => {})
            }
            tH.prototype.code = 0, tH.prototype.message = "", tH.prototype.status = null, tH.prototype.metadata = null, tH.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], tH.defaultMessages = {
                1: "You aborted the media playback",
                2: "A network error caused the media download to fail part-way.",
                3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
                4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
                5: "The media is encrypted and we do not have the keys to decrypt it."
            }, tH.MEDIA_ERR_CUSTOM = 0, tH.prototype.MEDIA_ERR_CUSTOM = 0, tH.MEDIA_ERR_ABORTED = 1, tH.prototype.MEDIA_ERR_ABORTED = 1, tH.MEDIA_ERR_NETWORK = 2, tH.prototype.MEDIA_ERR_NETWORK = 2, tH.MEDIA_ERR_DECODE = 3, tH.prototype.MEDIA_ERR_DECODE = 3, tH.MEDIA_ERR_SRC_NOT_SUPPORTED = 4, tH.prototype.MEDIA_ERR_SRC_NOT_SUPPORTED = 4, tH.MEDIA_ERR_ENCRYPTED = 5, tH.prototype.MEDIA_ERR_ENCRYPTED = 5;
            let tW = function(e) {
                return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce((t, i, s) => (e[i] && (t[i] = e[i]), t), {
                    cues: e.cues && Array.prototype.map.call(e.cues, function(e) {
                        return {
                            startTime: e.startTime,
                            endTime: e.endTime,
                            text: e.text,
                            id: e.id
                        }
                    })
                })
            };
            var tG = function(e) {
                let t = e.$$("track"),
                    i = Array.prototype.map.call(t, e => e.track);
                return Array.prototype.map.call(t, function(e) {
                    let t = tW(e.track);
                    return e.src && (t.src = e.src), t
                }).concat(Array.prototype.filter.call(e.textTracks(), function(e) {
                    return -1 === i.indexOf(e)
                }).map(tW))
            };
            let tK = "vjs-modal-dialog";
            class tQ extends tD {
                constructor(e, t) {
                    super(e, t), this.handleKeyDown_ = e => this.handleKeyDown(e), this.close_ = e => this.close(e), this.opened_ = this.hasBeenOpened_ = this.hasBeenFilled_ = !1, this.closeable(!this.options_.uncloseable), this.content(this.options_.content), this.contentEl_ = ex("div", {
                        className: `${tK}-content`
                    }, {
                        role: "document"
                    }), this.descEl_ = ex("p", {
                        className: `${tK}-description vjs-control-text`,
                        id: this.el().getAttribute("aria-describedby")
                    }), eI(this.descEl_, this.description()), this.el_.appendChild(this.descEl_), this.el_.appendChild(this.contentEl_)
                }
                createEl() {
                    return super.createEl("div", {
                        className: this.buildCSSClass(),
                        tabIndex: -1
                    }, {
                        "aria-describedby": `${this.id()}_description`,
                        "aria-hidden": "true",
                        "aria-label": this.label(),
                        role: "dialog",
                        "aria-live": "polite"
                    })
                }
                dispose() {
                    this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, super.dispose()
                }
                buildCSSClass() {
                    return `${tK} vjs-hidden ${super.buildCSSClass()}`
                }
                label() {
                    return this.localize(this.options_.label || "Modal Window")
                }
                description() {
                    let e = this.options_.description || this.localize("This is a modal window.");
                    return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), e
                }
                open() {
                    if (this.opened_) {
                        this.options_.fillAlways && this.fill();
                        return
                    }
                    let e = this.player();
                    this.trigger("beforemodalopen"), this.opened_ = !0, !this.options_.fillAlways && (this.hasBeenOpened_ || this.hasBeenFilled_) || this.fill(), this.wasPlaying_ = !e.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(), this.on("keydown", this.handleKeyDown_), this.hadControls_ = e.controls(), e.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                }
                opened(e) {
                    return "boolean" == typeof e && this[e ? "open" : "close"](), this.opened_
                }
                close() {
                    if (!this.opened_) return;
                    let e = this.player();
                    this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && e.play(), this.off("keydown", this.handleKeyDown_), this.hadControls_ && e.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose()
                }
                closeable(e) {
                    if ("boolean" == typeof e) {
                        let t = this.closeable_ = !!e,
                            i = this.getChild("closeButton");
                        if (t && !i) {
                            let e = this.contentEl_;
                            this.contentEl_ = this.el_, i = this.addChild("closeButton", {
                                controlText: "Close Modal Dialog"
                            }), this.contentEl_ = e, this.on(i, "close", this.close_)
                        }!t && i && (this.off(i, "close", this.close_), this.removeChild(i), i.dispose())
                    }
                    return this.closeable_
                }
                fill() {
                    this.fillWith(this.content())
                }
                fillWith(e) {
                    let t = this.contentEl(),
                        i = t.parentNode,
                        s = t.nextSibling;
                    this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, i.removeChild(t), this.empty(), eK(t, e), this.trigger("modalfill"), s ? i.insertBefore(t, s) : i.appendChild(t);
                    let r = this.getChild("closeButton");
                    r && i.appendChild(r.el_)
                }
                empty() {
                    this.trigger("beforemodalempty"), ez(this.contentEl()), this.trigger("modalempty")
                }
                content(e) {
                    return void 0 !== e && (this.content_ = e), this.content_
                }
                conditionalFocus_() {
                    let e = c().activeElement,
                        t = this.player_.el_;
                    this.previouslyActiveEl_ = null, (t.contains(e) || t === e) && (this.previouslyActiveEl_ = e, this.focus())
                }
                conditionalBlur_() {
                    this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null)
                }
                handleKeyDown(e) {
                    let t;
                    if (e.stopPropagation(), m().isEventKey(e, "Escape") && this.closeable()) {
                        e.preventDefault(), this.close();
                        return
                    }
                    if (!m().isEventKey(e, "Tab")) return;
                    let i = this.focusableEls_(),
                        s = this.el_.querySelector(":focus");
                    for (let e = 0; e < i.length; e++)
                        if (s === i[e]) {
                            t = e;
                            break
                        }
                    c().activeElement === this.el_ && (t = 0), e.shiftKey && 0 === t ? (i[i.length - 1].focus(), e.preventDefault()) : e.shiftKey || t !== i.length - 1 || (i[0].focus(), e.preventDefault())
                }
                focusableEls_() {
                    let e = this.el_.querySelectorAll("*");
                    return Array.prototype.filter.call(e, e => (e instanceof d().HTMLAnchorElement || e instanceof d().HTMLAreaElement) && e.hasAttribute("href") || (e instanceof d().HTMLInputElement || e instanceof d().HTMLSelectElement || e instanceof d().HTMLTextAreaElement || e instanceof d().HTMLButtonElement) && !e.hasAttribute("disabled") || e instanceof d().HTMLIFrameElement || e instanceof d().HTMLObjectElement || e instanceof d().HTMLEmbedElement || e.hasAttribute("tabindex") && -1 !== e.getAttribute("tabindex") || e.hasAttribute("contenteditable"))
                }
            }
            tQ.prototype.options_ = {
                pauseOnOpen: !0,
                temporary: !0
            }, tD.registerComponent("ModalDialog", tQ);
            class tY extends tm {
                constructor(e = []) {
                    super(), this.tracks_ = [], Object.defineProperty(this, "length", {
                        get() {
                            return this.tracks_.length
                        }
                    });
                    for (let t = 0; t < e.length; t++) this.addTrack(e[t])
                }
                addTrack(e) {
                    let t = this.tracks_.length;
                    "" + t in this || Object.defineProperty(this, t, {
                        get() {
                            return this.tracks_[t]
                        }
                    }), -1 === this.tracks_.indexOf(e) && (this.tracks_.push(e), this.trigger({
                        track: e,
                        type: "addtrack",
                        target: this
                    })), e.labelchange_ = () => {
                        this.trigger({
                            track: e,
                            type: "labelchange",
                            target: this
                        })
                    }, tf(e) && e.addEventListener("labelchange", e.labelchange_)
                }
                removeTrack(e) {
                    let t;
                    for (let i = 0, s = this.length; i < s; i++)
                        if (this[i] === e) {
                            (t = this[i]).off && t.off(), this.tracks_.splice(i, 1);
                            break
                        }
                    t && this.trigger({
                        track: t,
                        type: "removetrack",
                        target: this
                    })
                }
                getTrackById(e) {
                    let t = null;
                    for (let i = 0, s = this.length; i < s; i++) {
                        let s = this[i];
                        if (s.id === e) {
                            t = s;
                            break
                        }
                    }
                    return t
                }
            }
            for (let e in tY.prototype.allowedEvents_ = {
                    change: "change",
                    addtrack: "addtrack",
                    removetrack: "removetrack",
                    labelchange: "labelchange"
                }, tY.prototype.allowedEvents_) tY.prototype["on" + e] = null;
            let tX = function(e, t) {
                for (let i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].enabled = !1)
            };
            class tJ extends tY {
                constructor(e = []) {
                    for (let t = e.length - 1; t >= 0; t--)
                        if (e[t].enabled) {
                            tX(e, e[t]);
                            break
                        }
                    super(e), this.changing_ = !1
                }
                addTrack(e) {
                    e.enabled && tX(this, e), super.addTrack(e), e.addEventListener && (e.enabledChange_ = () => {
                        this.changing_ || (this.changing_ = !0, tX(this, e), this.changing_ = !1, this.trigger("change"))
                    }, e.addEventListener("enabledchange", e.enabledChange_))
                }
                removeTrack(e) {
                    super.removeTrack(e), e.removeEventListener && e.enabledChange_ && (e.removeEventListener("enabledchange", e.enabledChange_), e.enabledChange_ = null)
                }
            }
            let tZ = function(e, t) {
                for (let i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].selected = !1)
            };
            class t0 extends tY {
                constructor(e = []) {
                    for (let t = e.length - 1; t >= 0; t--)
                        if (e[t].selected) {
                            tZ(e, e[t]);
                            break
                        }
                    super(e), this.changing_ = !1, Object.defineProperty(this, "selectedIndex", {
                        get() {
                            for (let e = 0; e < this.length; e++)
                                if (this[e].selected) return e;
                            return -1
                        },
                        set() {}
                    })
                }
                addTrack(e) {
                    e.selected && tZ(this, e), super.addTrack(e), e.addEventListener && (e.selectedChange_ = () => {
                        this.changing_ || (this.changing_ = !0, tZ(this, e), this.changing_ = !1, this.trigger("change"))
                    }, e.addEventListener("selectedchange", e.selectedChange_))
                }
                removeTrack(e) {
                    super.removeTrack(e), e.removeEventListener && e.selectedChange_ && (e.removeEventListener("selectedchange", e.selectedChange_), e.selectedChange_ = null)
                }
            }
            class t1 extends tY {
                addTrack(e) {
                    super.addTrack(e), this.queueChange_ || (this.queueChange_ = () => this.queueTrigger("change")), this.triggerSelectedlanguagechange || (this.triggerSelectedlanguagechange_ = () => this.trigger("selectedlanguagechange")), e.addEventListener("modechange", this.queueChange_), -1 === ["metadata", "chapters"].indexOf(e.kind) && e.addEventListener("modechange", this.triggerSelectedlanguagechange_)
                }
                removeTrack(e) {
                    super.removeTrack(e), e.removeEventListener && (this.queueChange_ && e.removeEventListener("modechange", this.queueChange_), this.selectedlanguagechange_ && e.removeEventListener("modechange", this.triggerSelectedlanguagechange_))
                }
            }
            class t2 {
                constructor(e = []) {
                    this.trackElements_ = [], Object.defineProperty(this, "length", {
                        get() {
                            return this.trackElements_.length
                        }
                    });
                    for (let t = 0, i = e.length; t < i; t++) this.addTrackElement_(e[t])
                }
                addTrackElement_(e) {
                    let t = this.trackElements_.length;
                    "" + t in this || Object.defineProperty(this, t, {
                        get() {
                            return this.trackElements_[t]
                        }
                    }), -1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e)
                }
                getTrackElementByTrack_(e) {
                    let t;
                    for (let i = 0, s = this.trackElements_.length; i < s; i++)
                        if (e === this.trackElements_[i].track) {
                            t = this.trackElements_[i];
                            break
                        }
                    return t
                }
                removeTrackElement_(e) {
                    for (let t = 0, i = this.trackElements_.length; t < i; t++)
                        if (e === this.trackElements_[t]) {
                            this.trackElements_[t].track && "function" == typeof this.trackElements_[t].track.off && this.trackElements_[t].track.off(), "function" == typeof this.trackElements_[t].off && this.trackElements_[t].off(), this.trackElements_.splice(t, 1);
                            break
                        }
                }
            }
            class t4 {
                constructor(e) {
                    t4.prototype.setCues_.call(this, e), Object.defineProperty(this, "length", {
                        get() {
                            return this.length_
                        }
                    })
                }
                setCues_(e) {
                    let t = this.length || 0,
                        i = 0,
                        s = e.length;
                    this.cues_ = e, this.length_ = e.length;
                    let r = function(e) {
                        "" + e in this || Object.defineProperty(this, "" + e, {
                            get() {
                                return this.cues_[e]
                            }
                        })
                    };
                    if (t < s)
                        for (i = t; i < s; i++) r.call(this, i)
                }
                getCueById(e) {
                    let t = null;
                    for (let i = 0, s = this.length; i < s; i++) {
                        let s = this[i];
                        if (s.id === e) {
                            t = s;
                            break
                        }
                    }
                    return t
                }
            }
            let t8 = {
                    alternative: "alternative",
                    captions: "captions",
                    main: "main",
                    sign: "sign",
                    subtitles: "subtitles",
                    commentary: "commentary"
                },
                t5 = {
                    alternative: "alternative",
                    descriptions: "descriptions",
                    main: "main",
                    "main-desc": "main-desc",
                    translation: "translation",
                    commentary: "commentary"
                },
                t3 = {
                    subtitles: "subtitles",
                    captions: "captions",
                    descriptions: "descriptions",
                    chapters: "chapters",
                    metadata: "metadata"
                },
                t6 = {
                    disabled: "disabled",
                    hidden: "hidden",
                    showing: "showing"
                };
            class t7 extends tm {
                constructor(e = {}) {
                    super();
                    let t = {
                            id: e.id || "vjs_track_" + e7++,
                            kind: e.kind || "",
                            language: e.language || ""
                        },
                        i = e.label || "";
                    for (let e in t) Object.defineProperty(this, e, {
                        get: () => t[e],
                        set() {}
                    });
                    Object.defineProperty(this, "label", {
                        get: () => i,
                        set(e) {
                            e !== i && (i = e, this.trigger("labelchange"))
                        }
                    })
                }
            }
            let t9 = function(e) {
                    let t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
                        i = c().createElement("a");
                    i.href = e;
                    let s = {};
                    for (let e = 0; e < t.length; e++) s[t[e]] = i[t[e]];
                    return "http:" === s.protocol && (s.host = s.host.replace(/:80$/, "")), "https:" === s.protocol && (s.host = s.host.replace(/:443$/, "")), s.protocol || (s.protocol = d().location.protocol), s.host || (s.host = d().location.host), s
                },
                ie = function(e) {
                    if (!e.match(/^https?:\/\//)) {
                        let t = c().createElement("a");
                        t.href = e, e = t.href
                    }
                    return e
                },
                it = function(e) {
                    if ("string" == typeof e) {
                        let t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(e);
                        if (t) return t.pop().toLowerCase()
                    }
                    return ""
                },
                ii = function(e, t = d().location) {
                    let i = t9(e);
                    return (":" === i.protocol ? t.protocol : i.protocol) + i.host !== t.protocol + t.host
                };
            var is = Object.freeze({
                __proto__: null,
                parseUrl: t9,
                getAbsoluteURL: ie,
                getFileExtension: it,
                isCrossOrigin: ii
            });
            let ir = function(e, t) {
                    let i = new(d()).WebVTT.Parser(d(), d().vttjs, d().WebVTT.StringDecoder()),
                        s = [];
                    i.oncue = function(e) {
                        t.addCue(e)
                    }, i.onparsingerror = function(e) {
                        s.push(e)
                    }, i.onflush = function() {
                        t.trigger({
                            type: "loadeddata",
                            target: t
                        })
                    }, i.parse(e), s.length > 0 && (d().console && d().console.groupCollapsed && d().console.groupCollapsed(`Text Track parsing errors for ${t.src}`), s.forEach(e => q.error(e)), d().console && d().console.groupEnd && d().console.groupEnd()), i.flush()
                },
                ia = function(e, t) {
                    let i = {
                            uri: e
                        },
                        s = ii(e);
                    s && (i.cors = s);
                    let r = "use-credentials" === t.tech_.crossOrigin();
                    r && (i.withCredentials = r), y()(i, td(this, function(e, i, s) {
                        if (e) return q.error(e, i);
                        t.loaded_ = !0, "function" != typeof d().WebVTT ? t.tech_ && t.tech_.any(["vttjsloaded", "vttjserror"], e => {
                            if ("vttjserror" === e.type) {
                                q.error(`vttjs failed to load, stopping trying to process ${t.src}`);
                                return
                            }
                            return ir(s, t)
                        }) : ir(s, t)
                    }))
                };
            class io extends t7 {
                constructor(e = {}) {
                    if (!e.tech) throw Error("A tech was not provided.");
                    let t = Y(e, {
                            kind: t3[e.kind] || "subtitles",
                            language: e.language || e.srclang || ""
                        }),
                        i = t6[t.mode] || "disabled",
                        s = t.default;
                    ("metadata" === t.kind || "chapters" === t.kind) && (i = "hidden"), super(t), this.tech_ = t.tech, this.cues_ = [], this.activeCues_ = [], this.preload_ = !1 !== this.tech_.preloadTextTracks;
                    let r = new t4(this.cues_),
                        n = new t4(this.activeCues_),
                        a = !1;
                    this.timeupdateHandler = td(this, function(e = {}) {
                        if (!this.tech_.isDisposed()) {
                            if (!this.tech_.isReady_) {
                                "timeupdate" !== e.type && (this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler));
                                return
                            }
                            this.activeCues = this.activeCues, a && (this.trigger("cuechange"), a = !1), "timeupdate" !== e.type && (this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler))
                        }
                    }), this.tech_.one("dispose", () => {
                        this.stopTracking()
                    }), "disabled" !== i && this.startTracking(), Object.defineProperties(this, {
                        default: {
                            get: () => s,
                            set() {}
                        },
                        mode: {
                            get: () => i,
                            set(e) {
                                t6[e] && i !== e && (i = e, this.preload_ || "disabled" === i || 0 !== this.cues.length || ia(this.src, this), this.stopTracking(), "disabled" !== i && this.startTracking(), this.trigger("modechange"))
                            }
                        },
                        cues: {
                            get() {
                                return this.loaded_ ? r : null
                            },
                            set() {}
                        },
                        activeCues: {
                            get() {
                                if (!this.loaded_) return null;
                                if (0 === this.cues.length) return n;
                                let e = this.tech_.currentTime(),
                                    t = [];
                                for (let i = 0, s = this.cues.length; i < s; i++) {
                                    let s = this.cues[i];
                                    s.startTime <= e && s.endTime >= e && t.push(s)
                                }
                                if (a = !1, t.length !== this.activeCues_.length) a = !0;
                                else
                                    for (let e = 0; e < t.length; e++) - 1 === this.activeCues_.indexOf(t[e]) && (a = !0);
                                return this.activeCues_ = t, n.setCues_(this.activeCues_), n
                            },
                            set() {}
                        }
                    }), t.src ? (this.src = t.src, this.preload_ || (this.loaded_ = !0), (this.preload_ || "subtitles" !== t.kind && "captions" !== t.kind) && ia(this.src, this)) : this.loaded_ = !0
                }
                startTracking() {
                    this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler), this.tech_.on("timeupdate", this.timeupdateHandler)
                }
                stopTracking() {
                    this.rvf_ && (this.tech_.cancelVideoFrameCallback(this.rvf_), this.rvf_ = void 0), this.tech_.off("timeupdate", this.timeupdateHandler)
                }
                addCue(e) {
                    let t = e;
                    if (!("getCueAsHTML" in t)) {
                        for (let i in t = new(d()).vttjs.VTTCue(e.startTime, e.endTime, e.text), e) i in t || (t[i] = e[i]);
                        t.id = e.id, t.originalCue_ = e
                    }
                    let i = this.tech_.textTracks();
                    for (let e = 0; e < i.length; e++) i[e] !== this && i[e].removeCue(t);
                    this.cues_.push(t), this.cues.setCues_(this.cues_)
                }
                removeCue(e) {
                    let t = this.cues_.length;
                    for (; t--;) {
                        let i = this.cues_[t];
                        if (i === e || i.originalCue_ && i.originalCue_ === e) {
                            this.cues_.splice(t, 1), this.cues.setCues_(this.cues_);
                            break
                        }
                    }
                }
            }
            io.prototype.allowedEvents_ = {
                cuechange: "cuechange"
            };
            class il extends t7 {
                constructor(e = {}) {
                    let t = Y(e, {
                        kind: t5[e.kind] || ""
                    });
                    super(t);
                    let i = !1;
                    Object.defineProperty(this, "enabled", {
                        get: () => i,
                        set(e) {
                            "boolean" == typeof e && e !== i && (i = e, this.trigger("enabledchange"))
                        }
                    }), t.enabled && (this.enabled = t.enabled), this.loaded_ = !0
                }
            }
            class ih extends t7 {
                constructor(e = {}) {
                    let t = Y(e, {
                        kind: t8[e.kind] || ""
                    });
                    super(t);
                    let i = !1;
                    Object.defineProperty(this, "selected", {
                        get: () => i,
                        set(e) {
                            "boolean" == typeof e && e !== i && (i = e, this.trigger("selectedchange"))
                        }
                    }), t.selected && (this.selected = t.selected)
                }
            }
            class id extends tm {
                constructor(e = {}) {
                    let t;
                    super();
                    let i = new io(e);
                    this.kind = i.kind, this.src = i.src, this.srclang = i.language, this.label = i.label, this.default = i.default, Object.defineProperties(this, {
                        readyState: {
                            get: () => t
                        },
                        track: {
                            get: () => i
                        }
                    }), t = id.NONE, i.addEventListener("loadeddata", () => {
                        t = id.LOADED, this.trigger({
                            type: "load",
                            target: this
                        })
                    })
                }
            }
            id.prototype.allowedEvents_ = {
                load: "load"
            }, id.NONE = 0, id.LOADING = 1, id.LOADED = 2, id.ERROR = 3;
            let iu = {
                audio: {
                    ListClass: tJ,
                    TrackClass: il,
                    capitalName: "Audio"
                },
                video: {
                    ListClass: t0,
                    TrackClass: ih,
                    capitalName: "Video"
                },
                text: {
                    ListClass: t1,
                    TrackClass: io,
                    capitalName: "Text"
                }
            };
            Object.keys(iu).forEach(function(e) {
                iu[e].getterName = `${e}Tracks`, iu[e].privateName = `${e}Tracks_`
            });
            let ic = {
                    remoteText: {
                        ListClass: t1,
                        TrackClass: io,
                        capitalName: "RemoteText",
                        getterName: "remoteTextTracks",
                        privateName: "remoteTextTracks_"
                    },
                    remoteTextEl: {
                        ListClass: t2,
                        TrackClass: id,
                        capitalName: "RemoteTextTrackEls",
                        getterName: "remoteTextTrackEls",
                        privateName: "remoteTextTrackEls_"
                    }
                },
                ip = Object.assign({}, iu, ic);
            ic.names = Object.keys(ic), iu.names = Object.keys(iu), ip.names = [].concat(ic.names).concat(iu.names);
            class im extends tD {
                constructor(e = {}, t = function() {}) {
                    e.reportTouchActivity = !1, super(null, e, t), this.onDurationChange_ = e => this.onDurationChange(e), this.trackProgress_ = e => this.trackProgress(e), this.trackCurrentTime_ = e => this.trackCurrentTime(e), this.stopTrackingCurrentTime_ = e => this.stopTrackingCurrentTime(e), this.disposeSourceHandler_ = e => this.disposeSourceHandler(e), this.queuedHanders_ = new Set, this.hasStarted_ = !1, this.on("playing", function() {
                        this.hasStarted_ = !0
                    }), this.on("loadstart", function() {
                        this.hasStarted_ = !1
                    }), ip.names.forEach(t => {
                        let i = ip[t];
                        e && e[i.getterName] && (this[i.privateName] = e[i.getterName])
                    }), this.featuresProgressEvents || this.manualProgressOn(), this.featuresTimeupdateEvents || this.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(t => {
                        !1 === e[`native${t}Tracks`] && (this[`featuresNative${t}Tracks`] = !1)
                    }), !1 === e.nativeCaptions || !1 === e.nativeTextTracks ? this.featuresNativeTextTracks = !1 : (!0 === e.nativeCaptions || !0 === e.nativeTextTracks) && (this.featuresNativeTextTracks = !0), this.featuresNativeTextTracks || this.emulateTextTracks(), this.preloadTextTracks = !1 !== e.preloadTextTracks, this.autoRemoteTextTracks_ = new ip.text.ListClass, this.initTrackListeners(), e.nativeControlsForTouch || this.emitTapEvents(), this.constructor && (this.name_ = this.constructor.name || "Unknown Tech")
                }
                triggerSourceset(e) {
                    this.isReady_ || this.one("ready", () => this.setTimeout(() => this.triggerSourceset(e), 1)), this.trigger({
                        src: e,
                        type: "sourceset"
                    })
                }
                manualProgressOn() {
                    this.on("durationchange", this.onDurationChange_), this.manualProgress = !0, this.one("ready", this.trackProgress_)
                }
                manualProgressOff() {
                    this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange_)
                }
                trackProgress(e) {
                    this.stopTrackingProgress(), this.progressInterval = this.setInterval(td(this, function() {
                        let e = this.bufferedPercent();
                        this.bufferedPercent_ !== e && this.trigger("progress"), this.bufferedPercent_ = e, 1 === e && this.stopTrackingProgress()
                    }), 500)
                }
                onDurationChange(e) {
                    this.duration_ = this.duration()
                }
                buffered() {
                    return tR(0, 0)
                }
                bufferedPercent() {
                    return tq(this.buffered(), this.duration_)
                }
                stopTrackingProgress() {
                    this.clearInterval(this.progressInterval)
                }
                manualTimeUpdatesOn() {
                    this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime_), this.on("pause", this.stopTrackingCurrentTime_)
                }
                manualTimeUpdatesOff() {
                    this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime_), this.off("pause", this.stopTrackingCurrentTime_)
                }
                trackCurrentTime() {
                    this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
                        this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, 250)
                }
                stopTrackingCurrentTime() {
                    this.clearInterval(this.currentTimeInterval), this.trigger({
                        type: "timeupdate",
                        target: this,
                        manuallyTriggered: !0
                    })
                }
                dispose() {
                    this.clearTracks(iu.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), super.dispose()
                }
                clearTracks(e) {
                    (e = [].concat(e)).forEach(e => {
                        let t = this[`${e}Tracks`]() || [],
                            i = t.length;
                        for (; i--;) {
                            let s = t[i];
                            "text" === e && this.removeRemoteTextTrack(s), t.removeTrack(s)
                        }
                    })
                }
                cleanupAutoTextTracks() {
                    let e = this.autoRemoteTextTracks_ || [],
                        t = e.length;
                    for (; t--;) {
                        let i = e[t];
                        this.removeRemoteTextTrack(i)
                    }
                }
                reset() {}
                crossOrigin() {}
                setCrossOrigin() {}
                error(e) {
                    return void 0 !== e && (this.error_ = new tH(e), this.trigger("error")), this.error_
                }
                played() {
                    return this.hasStarted_ ? tR(0, 0) : tR()
                }
                play() {}
                setScrubbing(e) {}
                scrubbing() {}
                setCurrentTime(e) {
                    this.manualTimeUpdates && this.trigger({
                        type: "timeupdate",
                        target: this,
                        manuallyTriggered: !0
                    })
                }
                initTrackListeners() {
                    iu.names.forEach(e => {
                        let t = iu[e],
                            i = () => {
                                this.trigger(`${e}trackchange`)
                            },
                            s = this[t.getterName]();
                        s.addEventListener("removetrack", i), s.addEventListener("addtrack", i), this.on("dispose", () => {
                            s.removeEventListener("removetrack", i), s.removeEventListener("addtrack", i)
                        })
                    })
                }
                addWebVttScript_() {
                    if (!d().WebVTT) {
                        if (c().body.contains(this.el())) {
                            if (!this.options_["vtt.js"] && Q(T()) && Object.keys(T()).length > 0) {
                                this.trigger("vttjsloaded");
                                return
                            }
                            let e = c().createElement("script");
                            e.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js", e.onload = () => {
                                this.trigger("vttjsloaded")
                            }, e.onerror = () => {
                                this.trigger("vttjserror")
                            }, this.on("dispose", () => {
                                e.onload = null, e.onerror = null
                            }), d().WebVTT = !0, this.el().parentNode.appendChild(e)
                        } else this.ready(this.addWebVttScript_)
                    }
                }
                emulateTextTracks() {
                    let e = this.textTracks(),
                        t = this.remoteTextTracks(),
                        i = t => e.addTrack(t.track),
                        s = t => e.removeTrack(t.track);
                    t.on("addtrack", i), t.on("removetrack", s), this.addWebVttScript_();
                    let r = () => this.trigger("texttrackchange"),
                        n = () => {
                            r();
                            for (let t = 0; t < e.length; t++) {
                                let i = e[t];
                                i.removeEventListener("cuechange", r), "showing" === i.mode && i.addEventListener("cuechange", r)
                            }
                        };
                    n(), e.addEventListener("change", n), e.addEventListener("addtrack", n), e.addEventListener("removetrack", n), this.on("dispose", function() {
                        t.off("addtrack", i), t.off("removetrack", s), e.removeEventListener("change", n), e.removeEventListener("addtrack", n), e.removeEventListener("removetrack", n);
                        for (let t = 0; t < e.length; t++) e[t].removeEventListener("cuechange", r)
                    })
                }
                addTextTrack(e, t, i) {
                    if (!e) throw Error("TextTrack kind is required but was not provided");
                    return function(e, t, i, s, r = {}) {
                        let n = e.textTracks();
                        r.kind = t, i && (r.label = i), s && (r.language = s), r.tech = e;
                        let a = new ip.text.TrackClass(r);
                        return n.addTrack(a), a
                    }(this, e, t, i)
                }
                createRemoteTextTrack(e) {
                    let t = Y(e, {
                        tech: this
                    });
                    return new ic.remoteTextEl.TrackClass(t)
                }
                addRemoteTextTrack(e = {}, t) {
                    let i = this.createRemoteTextTrack(e);
                    return "boolean" != typeof t && (t = !1), this.remoteTextTrackEls().addTrackElement_(i), this.remoteTextTracks().addTrack(i.track), !1 === t && this.ready(() => this.autoRemoteTextTracks_.addTrack(i.track)), i
                }
                removeRemoteTextTrack(e) {
                    let t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
                    this.remoteTextTrackEls().removeTrackElement_(t), this.remoteTextTracks().removeTrack(e), this.autoRemoteTextTracks_.removeTrack(e)
                }
                getVideoPlaybackQuality() {
                    return {}
                }
                requestPictureInPicture() {
                    return Promise.reject()
                }
                disablePictureInPicture() {
                    return !0
                }
                setDisablePictureInPicture() {}
                requestVideoFrameCallback(e) {
                    let t = e7++;
                    return !this.isReady_ || this.paused() ? (this.queuedHanders_.add(t), this.one("playing", () => {
                        this.queuedHanders_.has(t) && (this.queuedHanders_.delete(t), e())
                    })) : this.requestNamedAnimationFrame(t, e), t
                }
                cancelVideoFrameCallback(e) {
                    this.queuedHanders_.has(e) ? this.queuedHanders_.delete(e) : this.cancelNamedAnimationFrame(e)
                }
                setPoster() {}
                playsinline() {}
                setPlaysinline() {}
                overrideNativeAudioTracks(e) {}
                overrideNativeVideoTracks(e) {}
                canPlayType(e) {
                    return ""
                }
                static canPlayType(e) {
                    return ""
                }
                static canPlaySource(e, t) {
                    return im.canPlayType(e.type)
                }
                static isTech(e) {
                    return e.prototype instanceof im || e instanceof im || e === im
                }
                static registerTech(e, t) {
                    if (im.techs_ || (im.techs_ = {}), !im.isTech(t)) throw Error(`Tech ${e} must be a Tech`);
                    if (!im.canPlayType) throw Error("Techs must have a static canPlayType method on them");
                    if (!im.canPlaySource) throw Error("Techs must have a static canPlaySource method on them");
                    return e = tP(e), im.techs_[e] = t, im.techs_[tI(e)] = t, "Tech" !== e && im.defaultTechOrder_.push(e), t
                }
                static getTech(e) {
                    return e ? im.techs_ && im.techs_[e] ? im.techs_[e] : (e = tP(e), d() && d().videojs && d().videojs[e]) ? (q.warn(`The ${e} tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)`), d().videojs[e]) : void 0 : void 0
                }
            }
            ip.names.forEach(function(e) {
                let t = ip[e];
                im.prototype[t.getterName] = function() {
                    return this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName]
                }
            }), im.prototype.featuresVolumeControl = !0, im.prototype.featuresMuteControl = !0, im.prototype.featuresFullscreenResize = !1, im.prototype.featuresPlaybackRate = !1, im.prototype.featuresProgressEvents = !1, im.prototype.featuresSourceset = !1, im.prototype.featuresTimeupdateEvents = !1, im.prototype.featuresNativeTextTracks = !1, im.prototype.featuresVideoFrameCallback = !1, im.withSourceHandlers = function(e) {
                e.registerSourceHandler = function(t, i) {
                    let s = e.sourceHandlers;
                    s || (s = e.sourceHandlers = []), void 0 === i && (i = s.length), s.splice(i, 0, t)
                }, e.canPlayType = function(t) {
                    let i;
                    let s = e.sourceHandlers || [];
                    for (let e = 0; e < s.length; e++)
                        if (i = s[e].canPlayType(t)) return i;
                    return ""
                }, e.selectSourceHandler = function(t, i) {
                    let s = e.sourceHandlers || [];
                    for (let e = 0; e < s.length; e++)
                        if (s[e].canHandleSource(t, i)) return s[e];
                    return null
                }, e.canPlaySource = function(t, i) {
                    let s = e.selectSourceHandler(t, i);
                    return s ? s.canHandleSource(t, i) : ""
                }, ["seekable", "seeking", "duration"].forEach(function(e) {
                    let t = this[e];
                    "function" == typeof t && (this[e] = function() {
                        return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments)
                    })
                }, e.prototype), e.prototype.setSource = function(t) {
                    let i = e.selectSourceHandler(t, this.options_);
                    i || (e.nativeSourceHandler ? i = e.nativeSourceHandler : q.error("No source handler found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler_), i !== e.nativeSourceHandler && (this.currentSource_ = t), this.sourceHandler_ = i.handleSource(t, this, this.options_), this.one("dispose", this.disposeSourceHandler_)
                }, e.prototype.disposeSourceHandler = function() {
                    this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
                }
            }, tD.registerComponent("Tech", im), im.registerTech("Tech", im), im.defaultTechOrder_ = [];
            let ig = {},
                i_ = {},
                iy = {};

            function iv(e, t, i, s = null) {
                let r = "call" + tP(i),
                    n = e.reduce(ik(r), s),
                    a = n === iy,
                    o = a ? null : t[i](n);
                return function(e, t, i, s) {
                    for (let r = e.length - 1; r >= 0; r--) {
                        let n = e[r];
                        n[t] && n[t](s, i)
                    }
                }(e, i, o, a), o
            }
            let iT = {
                    buffered: 1,
                    currentTime: 1,
                    duration: 1,
                    muted: 1,
                    played: 1,
                    paused: 1,
                    seekable: 1,
                    volume: 1,
                    ended: 1
                },
                ib = {
                    setCurrentTime: 1,
                    setMuted: 1,
                    setVolume: 1
                },
                iS = {
                    play: 1,
                    pause: 1
                };

            function ik(e) {
                return (t, i) => t === iy ? iy : i[e] ? i[e](t) : t
            }
            let iC = {
                    opus: "video/ogg",
                    ogv: "video/ogg",
                    mp4: "video/mp4",
                    mov: "video/mp4",
                    m4v: "video/mp4",
                    mkv: "video/x-matroska",
                    m4a: "audio/mp4",
                    mp3: "audio/mpeg",
                    aac: "audio/aac",
                    caf: "audio/x-caf",
                    flac: "audio/flac",
                    oga: "audio/ogg",
                    wav: "audio/wav",
                    m3u8: "application/x-mpegURL",
                    mpd: "application/dash+xml",
                    jpg: "image/jpeg",
                    jpeg: "image/jpeg",
                    gif: "image/gif",
                    png: "image/png",
                    svg: "image/svg+xml",
                    webp: "image/webp"
                },
                iE = function(e = "") {
                    return iC[it(e).toLowerCase()] || ""
                },
                iw = (e, t) => {
                    if (!t) return "";
                    if (e.cache_.source.src === t && e.cache_.source.type) return e.cache_.source.type;
                    let i = e.cache_.sources.filter(e => e.src === t);
                    if (i.length) return i[0].type;
                    let s = e.$$("source");
                    for (let e = 0; e < s.length; e++) {
                        let i = s[e];
                        if (i.type && i.src && i.src === t) return i.type
                    }
                    return iE(t)
                },
                ix = function(e) {
                    if (Array.isArray(e)) {
                        let t = [];
                        e.forEach(function(e) {
                            Array.isArray(e = ix(e)) ? t = t.concat(e) : K(e) && t.push(e)
                        }), e = t
                    } else e = "string" == typeof e && e.trim() ? [iI({
                        src: e
                    })] : K(e) && "string" == typeof e.src && e.src && e.src.trim() ? [iI(e)] : [];
                    return e
                };

            function iI(e) {
                if (!e.type) {
                    let t = iE(e.src);
                    t && (e.type = t)
                }
                return e
            }
            class iP extends tD {
                constructor(e, t, i) {
                    if (super(e, Y({
                            createEl: !1
                        }, t), i), t.playerOptions.sources && 0 !== t.playerOptions.sources.length) e.src(t.playerOptions.sources);
                    else
                        for (let i = 0, s = t.playerOptions.techOrder; i < s.length; i++) {
                            let t = tP(s[i]),
                                r = im.getTech(t);
                            if (t || (r = tD.getComponent(t)), r && r.isSupported()) {
                                e.loadTech_(t);
                                break
                            }
                        }
                }
            }
            tD.registerComponent("MediaLoader", iP);
            class iA extends tD {
                constructor(e, t) {
                    super(e, t), this.options_.controlText && this.controlText(this.options_.controlText), this.handleMouseOver_ = e => this.handleMouseOver(e), this.handleMouseOut_ = e => this.handleMouseOut(e), this.handleClick_ = e => this.handleClick(e), this.handleKeyDown_ = e => this.handleKeyDown(e), this.emitTapEvents(), this.enable()
                }
                createEl(e = "div", t = {}, i = {}) {
                    t = Object.assign({
                        className: this.buildCSSClass(),
                        tabIndex: 0
                    }, t), "button" === e && q.error(`Creating a ClickableComponent with an HTML element of ${e} is not supported; use a Button instead.`), i = Object.assign({
                        role: "button"
                    }, i), this.tabIndex_ = t.tabIndex;
                    let s = ex(e, t, i);
                    return this.player_.options_.experimentalSvgIcons || s.appendChild(ex("span", {
                        className: "vjs-icon-placeholder"
                    }, {
                        "aria-hidden": !0
                    })), this.createControlTextEl(s), s
                }
                dispose() {
                    this.controlTextEl_ = null, super.dispose()
                }
                createControlTextEl(e) {
                    return this.controlTextEl_ = ex("span", {
                        className: "vjs-control-text"
                    }, {
                        "aria-live": "polite"
                    }), e && e.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e), this.controlTextEl_
                }
                controlText(e, t = this.el()) {
                    if (void 0 === e) return this.controlText_ || "Need Text";
                    let i = this.localize(e);
                    this.controlText_ = e, eI(this.controlTextEl_, i), this.nonIconControl || this.player_.options_.noUITitleAttributes || t.setAttribute("title", i)
                }
                buildCSSClass() {
                    return `vjs-control vjs-button ${super.buildCSSClass()}`
                }
                enable() {
                    this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick_), this.on("keydown", this.handleKeyDown_))
                }
                disable() {
                    this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off("mouseover", this.handleMouseOver_), this.off("mouseout", this.handleMouseOut_), this.off(["tap", "click"], this.handleClick_), this.off("keydown", this.handleKeyDown_)
                }
                handleLanguagechange() {
                    this.controlText(this.controlText_)
                }
                handleClick(e) {
                    this.options_.clickHandler && this.options_.clickHandler.call(this, arguments)
                }
                handleKeyDown(e) {
                    m().isEventKey(e, "Space") || m().isEventKey(e, "Enter") ? (e.preventDefault(), e.stopPropagation(), this.trigger("click")) : super.handleKeyDown(e)
                }
            }
            tD.registerComponent("ClickableComponent", iA);
            class iL extends iA {
                constructor(e, t) {
                    super(e, t), this.update(), this.update_ = e => this.update(e), e.on("posterchange", this.update_)
                }
                dispose() {
                    this.player().off("posterchange", this.update_), super.dispose()
                }
                createEl() {
                    return ex("div", {
                        className: "vjs-poster"
                    })
                }
                crossOrigin(e) {
                    if (void 0 === e) return this.$("img") ? this.$("img").crossOrigin : this.player_.tech_ && this.player_.tech_.isReady_ ? this.player_.crossOrigin() : this.player_.options_.crossOrigin || this.player_.options_.crossorigin || null;
                    if (null !== e && "anonymous" !== e && "use-credentials" !== e) {
                        this.player_.log.warn(`crossOrigin must be null,  "anonymous" or "use-credentials", given "${e}"`);
                        return
                    }
                    this.$("img") && (this.$("img").crossOrigin = e)
                }
                update(e) {
                    let t = this.player().poster();
                    this.setSrc(t), t ? this.show() : this.hide()
                }
                setSrc(e) {
                    if (!e) {
                        this.el_.textContent = "";
                        return
                    }
                    this.$("img") || this.el_.appendChild(ex("picture", {
                        className: "vjs-poster",
                        tabIndex: -1
                    }, {}, ex("img", {
                        loading: "lazy",
                        crossOrigin: this.crossOrigin()
                    }, {
                        alt: ""
                    }))), this.$("img").src = e
                }
                handleClick(e) {
                    this.player_.controls() && (this.player_.tech(!0) && this.player_.tech(!0).focus(), this.player_.paused() ? tz(this.player_.play()) : this.player_.pause())
                }
            }
            iL.prototype.crossorigin = iL.prototype.crossOrigin, tD.registerComponent("PosterImage", iL);
            let iD = "#222",
                iO = "#ccc",
                iM = {
                    monospace: "monospace",
                    sansSerif: "sans-serif",
                    serif: "serif",
                    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
                    monospaceSerif: '"Courier New", monospace',
                    proportionalSansSerif: "sans-serif",
                    proportionalSerif: "serif",
                    casual: '"Comic Sans MS", Impact, fantasy',
                    script: '"Monotype Corsiva", cursive',
                    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
                };

            function iR(e, t) {
                let i;
                if (4 === e.length) i = e[1] + e[1] + e[2] + e[2] + e[3] + e[3];
                else if (7 === e.length) i = e.slice(1);
                else throw Error("Invalid color code provided, " + e + "; must be formatted as e.g. #f0e or #f604e2.");
                return "rgba(" + parseInt(i.slice(0, 2), 16) + "," + parseInt(i.slice(2, 4), 16) + "," + parseInt(i.slice(4, 6), 16) + "," + t + ")"
            }

            function iU(e, t, i) {
                try {
                    e.style[t] = i
                } catch (e) {
                    return
                }
            }

            function iB(e) {
                return e ? `${e}px` : ""
            }
            class iN extends tD {
                constructor(e, t, i) {
                    super(e, t, i);
                    let s = e => {
                        this.updateDisplayOverlay(), this.updateDisplay(e)
                    };
                    e.on("loadstart", e => this.toggleDisplay(e)), e.on("texttrackchange", e => this.updateDisplay(e)), e.on("loadedmetadata", e => {
                        this.updateDisplayOverlay(), this.preselectTrack(e)
                    }), e.ready(td(this, function() {
                        if (e.tech_ && e.tech_.featuresNativeTextTracks) {
                            this.hide();
                            return
                        }
                        e.on("fullscreenchange", s), e.on("playerresize", s);
                        let t = d().screen.orientation || d(),
                            i = d().screen.orientation ? "change" : "orientationchange";
                        t.addEventListener(i, s), e.on("dispose", () => t.removeEventListener(i, s));
                        let r = this.options_.playerOptions.tracks || [];
                        for (let e = 0; e < r.length; e++) this.player_.addRemoteTextTrack(r[e], !0);
                        this.preselectTrack()
                    }))
                }
                preselectTrack() {
                    let e, t, i;
                    let s = {
                            captions: 1,
                            subtitles: 1
                        },
                        r = this.player_.textTracks(),
                        n = this.player_.cache_.selectedLanguage;
                    for (let a = 0; a < r.length; a++) {
                        let o = r[a];
                        n && n.enabled && n.language && n.language === o.language && o.kind in s ? o.kind === n.kind ? i = o : i || (i = o) : n && !n.enabled ? (i = null, e = null, t = null) : o.default && ("descriptions" !== o.kind || e ? o.kind in s && !t && (t = o) : e = o)
                    }
                    i ? i.mode = "showing" : t ? t.mode = "showing" : e && (e.mode = "showing")
                }
                toggleDisplay() {
                    this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
                }
                createEl() {
                    return super.createEl("div", {
                        className: "vjs-text-track-display"
                    }, {
                        translate: "yes",
                        "aria-live": "off",
                        "aria-atomic": "true"
                    })
                }
                clearDisplay() {
                    "function" == typeof d().WebVTT && d().WebVTT.processCues(d(), [], this.el_)
                }
                updateDisplay() {
                    let e = this.player_.textTracks(),
                        t = this.options_.allowMultipleShowingTracks;
                    if (this.clearDisplay(), t) {
                        let t = [];
                        for (let i = 0; i < e.length; ++i) {
                            let s = e[i];
                            "showing" === s.mode && t.push(s)
                        }
                        this.updateForTrack(t);
                        return
                    }
                    let i = null,
                        s = null,
                        r = e.length;
                    for (; r--;) {
                        let t = e[r];
                        "showing" === t.mode && ("descriptions" === t.kind ? i = t : s = t)
                    }
                    s ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(s)) : i && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(i))
                }
                updateDisplayOverlay() {
                    if (!this.player_.videoHeight() || !d().CSS.supports("inset-inline: 10px")) return;
                    let e = this.player_.currentWidth(),
                        t = this.player_.currentHeight(),
                        i = e / t,
                        s = this.player_.videoWidth() / this.player_.videoHeight(),
                        r = 0,
                        n = 0;
                    Math.abs(i - s) > .1 && (i > s ? r = Math.round((e - t * s) / 2) : n = Math.round((t - e / s) / 2)), iU(this.el_, "insetInline", iB(r)), iU(this.el_, "insetBlock", iB(n))
                }
                updateDisplayState(e) {
                    let t = this.player_.textTrackSettings.getValues(),
                        i = e.activeCues,
                        s = i.length;
                    for (; s--;) {
                        let e = i[s];
                        if (!e) continue;
                        let r = e.displayState;
                        if (t.color && (r.firstChild.style.color = t.color), t.textOpacity && iU(r.firstChild, "color", iR(t.color || "#fff", t.textOpacity)), t.backgroundColor && (r.firstChild.style.backgroundColor = t.backgroundColor), t.backgroundOpacity && iU(r.firstChild, "backgroundColor", iR(t.backgroundColor || "#000", t.backgroundOpacity)), t.windowColor && (t.windowOpacity ? iU(r, "backgroundColor", iR(t.windowColor, t.windowOpacity)) : r.style.backgroundColor = t.windowColor), t.edgeStyle && ("dropshadow" === t.edgeStyle ? r.firstChild.style.textShadow = `2px 2px 3px ${iD}, 2px 2px 4px ${iD}, 2px 2px 5px ${iD}` : "raised" === t.edgeStyle ? r.firstChild.style.textShadow = `1px 1px ${iD}, 2px 2px ${iD}, 3px 3px ${iD}` : "depressed" === t.edgeStyle ? r.firstChild.style.textShadow = `1px 1px ${iO}, 0 1px ${iO}, -1px -1px ${iD}, 0 -1px ${iD}` : "uniform" === t.edgeStyle && (r.firstChild.style.textShadow = `0 0 4px ${iD}, 0 0 4px ${iD}, 0 0 4px ${iD}, 0 0 4px ${iD}`)), t.fontPercent && 1 !== t.fontPercent) {
                            let e = d().parseFloat(r.style.fontSize);
                            r.style.fontSize = e * t.fontPercent + "px", r.style.height = "auto", r.style.top = "auto"
                        }
                        t.fontFamily && "default" !== t.fontFamily && ("small-caps" === t.fontFamily ? r.firstChild.style.fontVariant = "small-caps" : r.firstChild.style.fontFamily = iM[t.fontFamily])
                    }
                }
                updateForTrack(e) {
                    if (Array.isArray(e) || (e = [e]), "function" != typeof d().WebVTT || e.every(e => !e.activeCues)) return;
                    let t = [];
                    for (let i = 0; i < e.length; ++i) {
                        let s = e[i];
                        for (let e = 0; e < s.activeCues.length; ++e) t.push(s.activeCues[e])
                    }
                    d().WebVTT.processCues(d(), t, this.el_);
                    for (let t = 0; t < e.length; ++t) {
                        let i = e[t];
                        for (let e = 0; e < i.activeCues.length; ++e) {
                            let s = i.activeCues[e].displayState;
                            eL(s, "vjs-text-track-cue", "vjs-text-track-cue-" + (i.language ? i.language : t)), i.language && eB(s, "lang", i.language)
                        }
                        this.player_.textTrackSettings && this.updateDisplayState(i)
                    }
                }
            }
            tD.registerComponent("TextTrackDisplay", iN);
            class ij extends tD {
                createEl() {
                    let e = this.player_.isAudio(),
                        t = this.localize(e ? "Audio Player" : "Video Player"),
                        i = ex("span", {
                            className: "vjs-control-text",
                            textContent: this.localize("{1} is loading.", [t])
                        }),
                        s = super.createEl("div", {
                            className: "vjs-loading-spinner",
                            dir: "ltr"
                        });
                    return s.appendChild(i), s
                }
                handleLanguagechange() {
                    this.$(".vjs-control-text").textContent = this.localize("{1} is loading.", [this.player_.isAudio() ? "Audio Player" : "Video Player"])
                }
            }
            tD.registerComponent("LoadingSpinner", ij);
            class iF extends iA {
                createEl(e, t = {}, i = {}) {
                    e = "button", t = Object.assign({
                        className: this.buildCSSClass()
                    }, t), i = Object.assign({
                        type: "button"
                    }, i);
                    let s = ex(e, t, i);
                    return this.player_.options_.experimentalSvgIcons || s.appendChild(ex("span", {
                        className: "vjs-icon-placeholder"
                    }, {
                        "aria-hidden": !0
                    })), this.createControlTextEl(s), s
                }
                addChild(e, t = {}) {
                    let i = this.constructor.name;
                    return q.warn(`Adding an actionable (user controllable) child to a Button (${i}) is not supported; use a ClickableComponent instead.`), tD.prototype.addChild.call(this, e, t)
                }
                enable() {
                    super.enable(), this.el_.removeAttribute("disabled")
                }
                disable() {
                    super.disable(), this.el_.setAttribute("disabled", "disabled")
                }
                handleKeyDown(e) {
                    if (m().isEventKey(e, "Space") || m().isEventKey(e, "Enter")) {
                        e.stopPropagation();
                        return
                    }
                    super.handleKeyDown(e)
                }
            }
            tD.registerComponent("Button", iF);
            class i$ extends iF {
                constructor(e, t) {
                    super(e, t), this.mouseused_ = !1, this.setIcon("play"), this.on("mousedown", e => this.handleMouseDown(e))
                }
                buildCSSClass() {
                    return "vjs-big-play-button"
                }
                handleClick(e) {
                    let t = this.player_.play();
                    if (this.mouseused_ && "clientX" in e && "clientY" in e) {
                        tz(t), this.player_.tech(!0) && this.player_.tech(!0).focus();
                        return
                    }
                    let i = this.player_.getChild("controlBar"),
                        s = i && i.getChild("playToggle");
                    if (!s) {
                        this.player_.tech(!0).focus();
                        return
                    }
                    let r = () => s.focus();
                    tV(t) ? t.then(r, () => {}) : this.setTimeout(r, 1)
                }
                handleKeyDown(e) {
                    this.mouseused_ = !1, super.handleKeyDown(e)
                }
                handleMouseDown(e) {
                    this.mouseused_ = !0
                }
            }
            i$.prototype.controlText_ = "Play Video", tD.registerComponent("BigPlayButton", i$);
            class iq extends iF {
                constructor(e, t) {
                    super(e, t), this.setIcon("cancel"), this.controlText(t && t.controlText || this.localize("Close"))
                }
                buildCSSClass() {
                    return `vjs-close-button ${super.buildCSSClass()}`
                }
                handleClick(e) {
                    this.trigger({
                        type: "close",
                        bubbles: !1
                    })
                }
                handleKeyDown(e) {
                    m().isEventKey(e, "Esc") ? (e.preventDefault(), e.stopPropagation(), this.trigger("click")) : super.handleKeyDown(e)
                }
            }
            tD.registerComponent("CloseButton", iq);
            class iH extends iF {
                constructor(e, t = {}) {
                    super(e, t), t.replay = void 0 === t.replay || t.replay, this.setIcon("play"), this.on(e, "play", e => this.handlePlay(e)), this.on(e, "pause", e => this.handlePause(e)), t.replay && this.on(e, "ended", e => this.handleEnded(e))
                }
                buildCSSClass() {
                    return `vjs-play-control ${super.buildCSSClass()}`
                }
                handleClick(e) {
                    this.player_.paused() ? tz(this.player_.play()) : this.player_.pause()
                }
                handleSeeked(e) {
                    this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(e) : this.handlePlay(e)
                }
                handlePlay(e) {
                    this.removeClass("vjs-ended", "vjs-paused"), this.addClass("vjs-playing"), this.setIcon("pause"), this.controlText("Pause")
                }
                handlePause(e) {
                    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.setIcon("play"), this.controlText("Play")
                }
                handleEnded(e) {
                    this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.setIcon("replay"), this.controlText("Replay"), this.one(this.player_, "seeked", e => this.handleSeeked(e))
                }
            }
            iH.prototype.controlText_ = "Play", tD.registerComponent("PlayToggle", iH);
            class iV extends tD {
                constructor(e, t) {
                    super(e, t), this.on(e, ["timeupdate", "ended", "seeking"], e => this.update(e)), this.updateTextNode_()
                }
                createEl() {
                    let e = this.buildCSSClass(),
                        t = super.createEl("div", {
                            className: `${e} vjs-time-control vjs-control`
                        }),
                        i = ex("span", {
                            className: "vjs-control-text",
                            textContent: `${this.localize(this.labelText_)}\u00a0`
                        }, {
                            role: "presentation"
                        });
                    return t.appendChild(i), this.contentEl_ = ex("span", {
                        className: `${e}-display`
                    }, {
                        role: "presentation"
                    }), t.appendChild(this.contentEl_), t
                }
                dispose() {
                    this.contentEl_ = null, this.textNode_ = null, super.dispose()
                }
                update(e) {
                    (this.player_.options_.enableSmoothSeeking || "seeking" !== e.type) && this.updateContent(e)
                }
                updateTextNode_(e = 0) {
                    e = tF(e), this.formattedTime_ !== e && (this.formattedTime_ = e, this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_", () => {
                        if (!this.contentEl_) return;
                        let e = this.textNode_;
                        e && this.contentEl_.firstChild !== e && (e = null, q.warn("TimeDisplay#updateTextnode_: Prevented replacement of text node element since it was no longer a child of this node. Appending a new node instead.")), this.textNode_ = c().createTextNode(this.formattedTime_), this.textNode_ && (e ? this.contentEl_.replaceChild(this.textNode_, e) : this.contentEl_.appendChild(this.textNode_))
                    }))
                }
                updateContent(e) {}
            }
            iV.prototype.labelText_ = "Time", iV.prototype.controlText_ = "Time", tD.registerComponent("TimeDisplay", iV);
            class iz extends iV {
                buildCSSClass() {
                    return "vjs-current-time"
                }
                updateContent(e) {
                    let t;
                    t = this.player_.ended() ? this.player_.duration() : this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(), this.updateTextNode_(t)
                }
            }
            iz.prototype.labelText_ = "Current Time", iz.prototype.controlText_ = "Current Time", tD.registerComponent("CurrentTimeDisplay", iz);
            class iW extends iV {
                constructor(e, t) {
                    super(e, t);
                    let i = e => this.updateContent(e);
                    this.on(e, "durationchange", i), this.on(e, "loadstart", i), this.on(e, "loadedmetadata", i)
                }
                buildCSSClass() {
                    return "vjs-duration"
                }
                updateContent(e) {
                    let t = this.player_.duration();
                    this.updateTextNode_(t)
                }
            }
            iW.prototype.labelText_ = "Duration", iW.prototype.controlText_ = "Duration", tD.registerComponent("DurationDisplay", iW);
            class iG extends tD {
                createEl() {
                    let e = super.createEl("div", {
                            className: "vjs-time-control vjs-time-divider"
                        }, {
                            "aria-hidden": !0
                        }),
                        t = super.createEl("div"),
                        i = super.createEl("span", {
                            textContent: "/"
                        });
                    return t.appendChild(i), e.appendChild(t), e
                }
            }
            tD.registerComponent("TimeDivider", iG);
            class iK extends iV {
                constructor(e, t) {
                    super(e, t), this.on(e, "durationchange", e => this.updateContent(e))
                }
                buildCSSClass() {
                    return "vjs-remaining-time"
                }
                createEl() {
                    let e = super.createEl();
                    return !1 !== this.options_.displayNegative && e.insertBefore(ex("span", {}, {
                        "aria-hidden": !0
                    }, "-"), this.contentEl_), e
                }
                updateContent(e) {
                    let t;
                    "number" == typeof this.player_.duration() && (t = this.player_.ended() ? 0 : this.player_.remainingTimeDisplay ? this.player_.remainingTimeDisplay() : this.player_.remainingTime(), this.updateTextNode_(t))
                }
            }
            iK.prototype.labelText_ = "Remaining Time", iK.prototype.controlText_ = "Remaining Time", tD.registerComponent("RemainingTimeDisplay", iK);
            class iQ extends tD {
                constructor(e, t) {
                    super(e, t), this.updateShowing(), this.on(this.player(), "durationchange", e => this.updateShowing(e))
                }
                createEl() {
                    let e = super.createEl("div", {
                        className: "vjs-live-control vjs-control"
                    });
                    return this.contentEl_ = ex("div", {
                        className: "vjs-live-display"
                    }, {
                        "aria-live": "off"
                    }), this.contentEl_.appendChild(ex("span", {
                        className: "vjs-control-text",
                        textContent: `${this.localize("Stream Type")}\u00a0`
                    })), this.contentEl_.appendChild(c().createTextNode(this.localize("LIVE"))), e.appendChild(this.contentEl_), e
                }
                dispose() {
                    this.contentEl_ = null, super.dispose()
                }
                updateShowing(e) {
                    this.player().duration() === 1 / 0 ? this.show() : this.hide()
                }
            }
            tD.registerComponent("LiveDisplay", iQ);
            class iY extends iF {
                constructor(e, t) {
                    super(e, t), this.updateLiveEdgeStatus(), this.player_.liveTracker && (this.updateLiveEdgeStatusHandler_ = e => this.updateLiveEdgeStatus(e), this.on(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatusHandler_))
                }
                createEl() {
                    let e = super.createEl("button", {
                        className: "vjs-seek-to-live-control vjs-control"
                    });
                    return this.setIcon("circle", e), this.textEl_ = ex("span", {
                        className: "vjs-seek-to-live-text",
                        textContent: this.localize("LIVE")
                    }, {
                        "aria-hidden": "true"
                    }), e.appendChild(this.textEl_), e
                }
                updateLiveEdgeStatus() {
                    !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge() ? (this.setAttribute("aria-disabled", !0), this.addClass("vjs-at-live-edge"), this.controlText("Seek to live, currently playing live")) : (this.setAttribute("aria-disabled", !1), this.removeClass("vjs-at-live-edge"), this.controlText("Seek to live, currently behind live"))
                }
                handleClick() {
                    this.player_.liveTracker.seekToLiveEdge()
                }
                dispose() {
                    this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatusHandler_), this.textEl_ = null, super.dispose()
                }
            }

            function iX(e, t, i) {
                return Math.min(i, Math.max(t, isNaN(e = Number(e)) ? t : e))
            }
            iY.prototype.controlText_ = "Seek to live, currently playing live", tD.registerComponent("SeekToLive", iY);
            var iJ = Object.freeze({
                __proto__: null,
                clamp: iX
            });
            class iZ extends tD {
                constructor(e, t) {
                    super(e, t), this.handleMouseDown_ = e => this.handleMouseDown(e), this.handleMouseUp_ = e => this.handleMouseUp(e), this.handleKeyDown_ = e => this.handleKeyDown(e), this.handleClick_ = e => this.handleClick(e), this.handleMouseMove_ = e => this.handleMouseMove(e), this.update_ = e => this.update(e), this.bar = this.getChild(this.options_.barName), this.vertical(!!this.options_.vertical), this.enable()
                }
                enabled() {
                    return this.enabled_
                }
                enable() {
                    this.enabled() || (this.on("mousedown", this.handleMouseDown_), this.on("touchstart", this.handleMouseDown_), this.on("keydown", this.handleKeyDown_), this.on("click", this.handleClick_), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
                }
                disable() {
                    if (!this.enabled()) return;
                    let e = this.bar.el_.ownerDocument;
                    this.off("mousedown", this.handleMouseDown_), this.off("touchstart", this.handleMouseDown_), this.off("keydown", this.handleKeyDown_), this.off("click", this.handleClick_), this.off(this.player_, "controlsvisible", this.update_), this.off(e, "mousemove", this.handleMouseMove_), this.off(e, "mouseup", this.handleMouseUp_), this.off(e, "touchmove", this.handleMouseMove_), this.off(e, "touchend", this.handleMouseUp_), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1
                }
                createEl(e, t = {}, i = {}) {
                    return t.className = t.className + " vjs-slider", t = Object.assign({
                        tabIndex: 0
                    }, t), i = Object.assign({
                        role: "slider",
                        "aria-valuenow": 0,
                        "aria-valuemin": 0,
                        "aria-valuemax": 100
                    }, i), super.createEl(e, t, i)
                }
                handleMouseDown(e) {
                    let t = this.bar.el_.ownerDocument;
                    "mousedown" === e.type && e.preventDefault(), "touchstart" !== e.type || ea || e.preventDefault(), ej(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(t, "mousemove", this.handleMouseMove_), this.on(t, "mouseup", this.handleMouseUp_), this.on(t, "touchmove", this.handleMouseMove_), this.on(t, "touchend", this.handleMouseUp_), this.handleMouseMove(e, !0)
                }
                handleMouseMove(e) {}
                handleMouseUp(e) {
                    let t = this.bar.el_.ownerDocument;
                    eF(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(t, "mousemove", this.handleMouseMove_), this.off(t, "mouseup", this.handleMouseUp_), this.off(t, "touchmove", this.handleMouseMove_), this.off(t, "touchend", this.handleMouseUp_), this.update()
                }
                update() {
                    if (!this.el_ || !this.bar) return;
                    let e = this.getProgress();
                    return e === this.progress_ || (this.progress_ = e, this.requestNamedAnimationFrame("Slider#update", () => {
                        let t = this.vertical() ? "height" : "width";
                        this.bar.el().style[t] = (100 * e).toFixed(2) + "%"
                    })), e
                }
                getProgress() {
                    return Number(iX(this.getPercent(), 0, 1).toFixed(4))
                }
                calculateDistance(e) {
                    let t = eH(this.el_, e);
                    return this.vertical() ? t.y : t.x
                }
                handleKeyDown(e) {
                    m().isEventKey(e, "Left") || m().isEventKey(e, "Down") ? (e.preventDefault(), e.stopPropagation(), this.stepBack()) : m().isEventKey(e, "Right") || m().isEventKey(e, "Up") ? (e.preventDefault(), e.stopPropagation(), this.stepForward()) : super.handleKeyDown(e)
                }
                handleClick(e) {
                    e.stopPropagation(), e.preventDefault()
                }
                vertical(e) {
                    if (void 0 === e) return this.vertical_ || !1;
                    this.vertical_ = !!e, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
                }
            }
            tD.registerComponent("Slider", iZ);
            let i0 = (e, t) => iX(e / t * 100, 0, 100).toFixed(2) + "%";
            class i1 extends tD {
                constructor(e, t) {
                    super(e, t), this.partEls_ = [], this.on(e, "progress", e => this.update(e))
                }
                createEl() {
                    let e = super.createEl("div", {
                            className: "vjs-load-progress"
                        }),
                        t = ex("span", {
                            className: "vjs-control-text"
                        }),
                        i = ex("span", {
                            textContent: this.localize("Loaded")
                        }),
                        s = c().createTextNode(": ");
                    return this.percentageEl_ = ex("span", {
                        className: "vjs-control-text-loaded-percentage",
                        textContent: "0%"
                    }), e.appendChild(t), t.appendChild(i), t.appendChild(s), t.appendChild(this.percentageEl_), e
                }
                dispose() {
                    this.partEls_ = null, this.percentageEl_ = null, super.dispose()
                }
                update(e) {
                    this.requestNamedAnimationFrame("LoadProgressBar#update", () => {
                        let e = this.player_.liveTracker,
                            t = this.player_.buffered(),
                            i = e && e.isLive() ? e.seekableEnd() : this.player_.duration(),
                            s = this.player_.bufferedEnd(),
                            r = this.partEls_,
                            n = i0(s, i);
                        this.percent_ !== n && (this.el_.style.width = n, eI(this.percentageEl_, n), this.percent_ = n);
                        for (let e = 0; e < t.length; e++) {
                            let i = t.start(e),
                                n = t.end(e),
                                a = r[e];
                            a || (a = this.el_.appendChild(ex()), r[e] = a), (a.dataset.start !== i || a.dataset.end !== n) && (a.dataset.start = i, a.dataset.end = n, a.style.left = i0(i, s), a.style.width = i0(n - i, s))
                        }
                        for (let e = r.length; e > t.length; e--) this.el_.removeChild(r[e - 1]);
                        r.length = t.length
                    })
                }
            }
            tD.registerComponent("LoadProgressBar", i1);
            class i2 extends tD {
                constructor(e, t) {
                    super(e, t), this.update = tu(td(this, this.update), 30)
                }
                createEl() {
                    return super.createEl("div", {
                        className: "vjs-time-tooltip"
                    }, {
                        "aria-hidden": "true"
                    })
                }
                update(e, t, i) {
                    let s = eq(this.el_),
                        r = e$(this.player_.el()),
                        n = e.width * t;
                    if (!r || !s) return;
                    let a = e.left - r.left + n,
                        o = e.width - n + (r.right - e.right);
                    o || (o = e.width - n, a = n);
                    let l = s.width / 2;
                    a < l ? l += l - a : o < l && (l = o), l < 0 ? l = 0 : l > s.width && (l = s.width), l = Math.round(l), this.el_.style.right = `-${l}px`, this.write(i)
                }
                write(e) {
                    eI(this.el_, e)
                }
                updateTime(e, t, i, s) {
                    this.requestNamedAnimationFrame("TimeTooltip#updateTime", () => {
                        let r;
                        let n = this.player_.duration();
                        if (this.player_.liveTracker && this.player_.liveTracker.isLive()) {
                            let e = this.player_.liveTracker.liveWindow(),
                                i = e - t * e;
                            r = (i < 1 ? "" : "-") + tF(i, e)
                        } else r = tF(i, n);
                        this.update(e, t, r), s && s()
                    })
                }
            }
            tD.registerComponent("TimeTooltip", i2);
            class i4 extends tD {
                constructor(e, t) {
                    super(e, t), this.setIcon("circle"), this.update = tu(td(this, this.update), 30)
                }
                createEl() {
                    return super.createEl("div", {
                        className: "vjs-play-progress vjs-slider-bar"
                    }, {
                        "aria-hidden": "true"
                    })
                }
                update(e, t) {
                    let i = this.getChild("timeTooltip");
                    if (!i) return;
                    let s = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                    i.updateTime(e, t, s)
                }
            }
            i4.prototype.options_ = {
                children: []
            }, ev || ei || i4.prototype.options_.children.push("timeTooltip"), tD.registerComponent("PlayProgressBar", i4);
            class i8 extends tD {
                constructor(e, t) {
                    super(e, t), this.update = tu(td(this, this.update), 30)
                }
                createEl() {
                    return super.createEl("div", {
                        className: "vjs-mouse-display"
                    })
                }
                update(e, t) {
                    let i = t * this.player_.duration();
                    this.getChild("timeTooltip").updateTime(e, t, i, () => {
                        this.el_.style.left = `${e.width*t}px`
                    })
                }
            }
            i8.prototype.options_ = {
                children: ["timeTooltip"]
            }, tD.registerComponent("MouseTimeDisplay", i8);
            class i5 extends iZ {
                constructor(e, t) {
                    super(e, t), this.setEventHandlers_()
                }
                setEventHandlers_() {
                    this.update_ = td(this, this.update), this.update = tu(this.update_, 30), this.on(this.player_, ["ended", "durationchange", "timeupdate"], this.update), this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update), this.updateInterval = null, this.enableIntervalHandler_ = e => this.enableInterval_(e), this.disableIntervalHandler_ = e => this.disableInterval_(e), this.on(this.player_, ["playing"], this.enableIntervalHandler_), this.on(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_), "hidden" in c() && "visibilityState" in c() && this.on(c(), "visibilitychange", this.toggleVisibility_)
                }
                toggleVisibility_(e) {
                    "hidden" === c().visibilityState ? (this.cancelNamedAnimationFrame("SeekBar#update"), this.cancelNamedAnimationFrame("Slider#update"), this.disableInterval_(e)) : (this.player_.ended() || this.player_.paused() || this.enableInterval_(), this.update())
                }
                enableInterval_() {
                    this.updateInterval || (this.updateInterval = this.setInterval(this.update, 30))
                }
                disableInterval_(e) {
                    this.player_.liveTracker && this.player_.liveTracker.isLive() && e && "ended" !== e.type || !this.updateInterval || (this.clearInterval(this.updateInterval), this.updateInterval = null)
                }
                createEl() {
                    return super.createEl("div", {
                        className: "vjs-progress-holder"
                    }, {
                        "aria-label": this.localize("Progress Bar")
                    })
                }
                update(e) {
                    if ("hidden" === c().visibilityState) return;
                    let t = super.update();
                    return this.requestNamedAnimationFrame("SeekBar#update", () => {
                        let e = this.player_.ended() ? this.player_.duration() : this.getCurrentTime_(),
                            i = this.player_.liveTracker,
                            s = this.player_.duration();
                        i && i.isLive() && (s = this.player_.liveTracker.liveCurrentTime()), this.percent_ !== t && (this.el_.setAttribute("aria-valuenow", (100 * t).toFixed(2)), this.percent_ = t), (this.currentTime_ !== e || this.duration_ !== s) && (this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [tF(e, s), tF(s, s)], "{1} of {2}")), this.currentTime_ = e, this.duration_ = s), this.bar && this.bar.update(e$(this.el()), this.getProgress())
                    }), t
                }
                userSeek_(e) {
                    this.player_.liveTracker && this.player_.liveTracker.isLive() && this.player_.liveTracker.nextSeekedFromUser(), this.player_.currentTime(e)
                }
                getCurrentTime_() {
                    return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
                }
                getPercent() {
                    let e;
                    let t = this.getCurrentTime_(),
                        i = this.player_.liveTracker;
                    return i && i.isLive() ? (e = (t - i.seekableStart()) / i.liveWindow(), i.atLiveEdge() && (e = 1)) : e = t / this.player_.duration(), e
                }
                handleMouseDown(e) {
                    eQ(e) && (e.stopPropagation(), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), super.handleMouseDown(e))
                }
                handleMouseMove(e, t = !1) {
                    let i;
                    if (!eQ(e) || isNaN(this.player_.duration())) return;
                    t || this.player_.scrubbing() || this.player_.scrubbing(!0);
                    let s = this.calculateDistance(e),
                        r = this.player_.liveTracker;
                    if (r && r.isLive()) {
                        if (s >= .99) {
                            r.seekToLiveEdge();
                            return
                        }
                        let e = r.seekableStart(),
                            t = r.liveCurrentTime();
                        if ((i = e + s * r.liveWindow()) >= t && (i = t), i <= e && (i = e + .1), i === 1 / 0) return
                    } else(i = s * this.player_.duration()) === this.player_.duration() && (i -= .1);
                    this.userSeek_(i), this.player_.options_.enableSmoothSeeking && this.update()
                }
                enable() {
                    super.enable();
                    let e = this.getChild("mouseTimeDisplay");
                    e && e.show()
                }
                disable() {
                    super.disable();
                    let e = this.getChild("mouseTimeDisplay");
                    e && e.hide()
                }
                handleMouseUp(e) {
                    super.handleMouseUp(e), e && e.stopPropagation(), this.player_.scrubbing(!1), this.player_.trigger({
                        type: "timeupdate",
                        target: this,
                        manuallyTriggered: !0
                    }), this.videoWasPlaying ? tz(this.player_.play()) : this.update_()
                }
                stepForward() {
                    this.userSeek_(this.player_.currentTime() + 5)
                }
                stepBack() {
                    this.userSeek_(this.player_.currentTime() - 5)
                }
                handleAction(e) {
                    this.player_.paused() ? this.player_.play() : this.player_.pause()
                }
                handleKeyDown(e) {
                    let t = this.player_.liveTracker;
                    if (m().isEventKey(e, "Space") || m().isEventKey(e, "Enter")) e.preventDefault(), e.stopPropagation(), this.handleAction(e);
                    else if (m().isEventKey(e, "Home")) e.preventDefault(), e.stopPropagation(), this.userSeek_(0);
                    else if (m().isEventKey(e, "End")) e.preventDefault(), e.stopPropagation(), t && t.isLive() ? this.userSeek_(t.liveCurrentTime()) : this.userSeek_(this.player_.duration());
                    else if (/^[0-9]$/.test(m()(e))) {
                        e.preventDefault(), e.stopPropagation();
                        let i = (m().codes[m()(e)] - m().codes["0"]) * 10 / 100;
                        t && t.isLive() ? this.userSeek_(t.seekableStart() + t.liveWindow() * i) : this.userSeek_(this.player_.duration() * i)
                    } else m().isEventKey(e, "PgDn") ? (e.preventDefault(), e.stopPropagation(), this.userSeek_(this.player_.currentTime() - 60)) : m().isEventKey(e, "PgUp") ? (e.preventDefault(), e.stopPropagation(), this.userSeek_(this.player_.currentTime() + 60)) : super.handleKeyDown(e)
                }
                dispose() {
                    this.disableInterval_(), this.off(this.player_, ["ended", "durationchange", "timeupdate"], this.update), this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.update), this.off(this.player_, ["playing"], this.enableIntervalHandler_), this.off(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_), "hidden" in c() && "visibilityState" in c() && this.off(c(), "visibilitychange", this.toggleVisibility_), super.dispose()
                }
            }
            i5.prototype.options_ = {
                children: ["loadProgressBar", "playProgressBar"],
                barName: "playProgressBar"
            }, ev || ei || i5.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), tD.registerComponent("SeekBar", i5);
            class i3 extends tD {
                constructor(e, t) {
                    super(e, t), this.handleMouseMove = tu(td(this, this.handleMouseMove), 30), this.throttledHandleMouseSeek = tu(td(this, this.handleMouseSeek), 30), this.handleMouseUpHandler_ = e => this.handleMouseUp(e), this.handleMouseDownHandler_ = e => this.handleMouseDown(e), this.enable()
                }
                createEl() {
                    return super.createEl("div", {
                        className: "vjs-progress-control vjs-control"
                    })
                }
                handleMouseMove(e) {
                    let t = this.getChild("seekBar");
                    if (!t) return;
                    let i = t.getChild("playProgressBar"),
                        s = t.getChild("mouseTimeDisplay");
                    if (!i && !s) return;
                    let r = t.el(),
                        n = eq(r),
                        a = eH(r, e).x;
                    a = iX(a, 0, 1), s && s.update(n, a), i && i.update(n, t.getProgress())
                }
                handleMouseSeek(e) {
                    let t = this.getChild("seekBar");
                    t && t.handleMouseMove(e)
                }
                enabled() {
                    return this.enabled_
                }
                disable() {
                    if (this.children().forEach(e => e.disable && e.disable()), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDownHandler_), this.off(this.el_, "mousemove", this.handleMouseMove), this.removeListenersAddedOnMousedownAndTouchstart(), this.addClass("disabled"), this.enabled_ = !1, this.player_.scrubbing())) {
                        let e = this.getChild("seekBar");
                        this.player_.scrubbing(!1), e.videoWasPlaying && tz(this.player_.play())
                    }
                }
                enable() {
                    this.children().forEach(e => e.enable && e.enable()), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDownHandler_), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
                }
                removeListenersAddedOnMousedownAndTouchstart() {
                    let e = this.el_.ownerDocument;
                    this.off(e, "mousemove", this.throttledHandleMouseSeek), this.off(e, "touchmove", this.throttledHandleMouseSeek), this.off(e, "mouseup", this.handleMouseUpHandler_), this.off(e, "touchend", this.handleMouseUpHandler_)
                }
                handleMouseDown(e) {
                    let t = this.el_.ownerDocument,
                        i = this.getChild("seekBar");
                    i && i.handleMouseDown(e), this.on(t, "mousemove", this.throttledHandleMouseSeek), this.on(t, "touchmove", this.throttledHandleMouseSeek), this.on(t, "mouseup", this.handleMouseUpHandler_), this.on(t, "touchend", this.handleMouseUpHandler_)
                }
                handleMouseUp(e) {
                    let t = this.getChild("seekBar");
                    t && t.handleMouseUp(e), this.removeListenersAddedOnMousedownAndTouchstart()
                }
            }
            i3.prototype.options_ = {
                children: ["seekBar"]
            }, tD.registerComponent("ProgressControl", i3);
            class i6 extends iF {
                constructor(e, t) {
                    super(e, t), this.setIcon("picture-in-picture-enter"), this.on(e, ["enterpictureinpicture", "leavepictureinpicture"], e => this.handlePictureInPictureChange(e)), this.on(e, ["disablepictureinpicturechanged", "loadedmetadata"], e => this.handlePictureInPictureEnabledChange(e)), this.on(e, ["loadedmetadata", "audioonlymodechange", "audiopostermodechange"], () => this.handlePictureInPictureAudioModeChange()), this.disable()
                }
                buildCSSClass() {
                    return `vjs-picture-in-picture-control vjs-hidden ${super.buildCSSClass()}`
                }
                handlePictureInPictureAudioModeChange() {
                    if (!("audio" === this.player_.currentType().substring(0, 5) || this.player_.audioPosterMode() || this.player_.audioOnlyMode())) {
                        this.show();
                        return
                    }
                    this.player_.isInPictureInPicture() && this.player_.exitPictureInPicture(), this.hide()
                }
                handlePictureInPictureEnabledChange() {
                    c().pictureInPictureEnabled && !1 === this.player_.disablePictureInPicture() || this.player_.options_.enableDocumentPictureInPicture && "documentPictureInPicture" in d() ? this.enable() : this.disable()
                }
                handlePictureInPictureChange(e) {
                    this.player_.isInPictureInPicture() ? (this.setIcon("picture-in-picture-exit"), this.controlText("Exit Picture-in-Picture")) : (this.setIcon("picture-in-picture-enter"), this.controlText("Picture-in-Picture")), this.handlePictureInPictureEnabledChange()
                }
                handleClick(e) {
                    this.player_.isInPictureInPicture() ? this.player_.exitPictureInPicture() : this.player_.requestPictureInPicture()
                }
                show() {
                    "function" == typeof c().exitPictureInPicture && super.show()
                }
            }
            i6.prototype.controlText_ = "Picture-in-Picture", tD.registerComponent("PictureInPictureToggle", i6);
            class i7 extends iF {
                constructor(e, t) {
                    super(e, t), this.setIcon("fullscreen-enter"), this.on(e, "fullscreenchange", e => this.handleFullscreenChange(e)), !1 === c()[e.fsApi_.fullscreenEnabled] && this.disable()
                }
                buildCSSClass() {
                    return `vjs-fullscreen-control ${super.buildCSSClass()}`
                }
                handleFullscreenChange(e) {
                    this.player_.isFullscreen() ? (this.controlText("Exit Fullscreen"), this.setIcon("fullscreen-exit")) : (this.controlText("Fullscreen"), this.setIcon("fullscreen-enter"))
                }
                handleClick(e) {
                    this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
                }
            }
            i7.prototype.controlText_ = "Fullscreen", tD.registerComponent("FullscreenToggle", i7);
            let i9 = function(e, t) {
                t.tech_ && !t.tech_.featuresVolumeControl && e.addClass("vjs-hidden"), e.on(t, "loadstart", function() {
                    t.tech_.featuresVolumeControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden")
                })
            };
            class se extends tD {
                createEl() {
                    let e = super.createEl("div", {
                        className: "vjs-volume-level"
                    });
                    return this.setIcon("circle", e), e.appendChild(super.createEl("span", {
                        className: "vjs-control-text"
                    })), e
                }
            }
            tD.registerComponent("VolumeLevel", se);
            class st extends tD {
                constructor(e, t) {
                    super(e, t), this.update = tu(td(this, this.update), 30)
                }
                createEl() {
                    return super.createEl("div", {
                        className: "vjs-volume-tooltip"
                    }, {
                        "aria-hidden": "true"
                    })
                }
                update(e, t, i, s) {
                    if (!i) {
                        let i = e$(this.el_),
                            s = e$(this.player_.el()),
                            r = e.width * t;
                        if (!s || !i) return;
                        let n = e.left - s.left + r,
                            a = e.width - r + (s.right - e.right),
                            o = i.width / 2;
                        n < o ? o += o - n : a < o && (o = a), o < 0 ? o = 0 : o > i.width && (o = i.width), this.el_.style.right = `-${o}px`
                    }
                    this.write(`${s}%`)
                }
                write(e) {
                    eI(this.el_, e)
                }
                updateVolume(e, t, i, s, r) {
                    this.requestNamedAnimationFrame("VolumeLevelTooltip#updateVolume", () => {
                        this.update(e, t, i, s.toFixed(0)), r && r()
                    })
                }
            }
            tD.registerComponent("VolumeLevelTooltip", st);
            class si extends tD {
                constructor(e, t) {
                    super(e, t), this.update = tu(td(this, this.update), 30)
                }
                createEl() {
                    return super.createEl("div", {
                        className: "vjs-mouse-display"
                    })
                }
                update(e, t, i) {
                    this.getChild("volumeLevelTooltip").updateVolume(e, t, i, 100 * t, () => {
                        i ? this.el_.style.bottom = `${e.height*t}px` : this.el_.style.left = `${e.width*t}px`
                    })
                }
            }
            si.prototype.options_ = {
                children: ["volumeLevelTooltip"]
            }, tD.registerComponent("MouseVolumeLevelDisplay", si);
            class ss extends iZ {
                constructor(e, t) {
                    super(e, t), this.on("slideractive", e => this.updateLastVolume_(e)), this.on(e, "volumechange", e => this.updateARIAAttributes(e)), e.ready(() => this.updateARIAAttributes())
                }
                createEl() {
                    return super.createEl("div", {
                        className: "vjs-volume-bar vjs-slider-bar"
                    }, {
                        "aria-label": this.localize("Volume Level"),
                        "aria-live": "polite"
                    })
                }
                handleMouseDown(e) {
                    eQ(e) && super.handleMouseDown(e)
                }
                handleMouseMove(e) {
                    let t = this.getChild("mouseVolumeLevelDisplay");
                    if (t) {
                        let i = this.el(),
                            s = e$(i),
                            r = this.vertical(),
                            n = eH(i, e);
                        n = iX(n = r ? n.y : n.x, 0, 1), t.update(s, n, r)
                    }
                    eQ(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e)))
                }
                checkMuted() {
                    this.player_.muted() && this.player_.muted(!1)
                }
                getPercent() {
                    return this.player_.muted() ? 0 : this.player_.volume()
                }
                stepForward() {
                    this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
                }
                stepBack() {
                    this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
                }
                updateARIAAttributes(e) {
                    let t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
                    this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%")
                }
                volumeAsPercentage_() {
                    return Math.round(100 * this.player_.volume())
                }
                updateLastVolume_() {
                    let e = this.player_.volume();
                    this.one("sliderinactive", () => {
                        0 === this.player_.volume() && this.player_.lastVolume_(e)
                    })
                }
            }
            ss.prototype.options_ = {
                children: ["volumeLevel"],
                barName: "volumeLevel"
            }, ev || ei || ss.prototype.options_.children.splice(0, 0, "mouseVolumeLevelDisplay"), ss.prototype.playerEvent = "volumechange", tD.registerComponent("VolumeBar", ss);
            class sr extends tD {
                constructor(e, t = {}) {
                    t.vertical = t.vertical || !1, (void 0 === t.volumeBar || Q(t.volumeBar)) && (t.volumeBar = t.volumeBar || {}, t.volumeBar.vertical = t.vertical), super(e, t), i9(this, e), this.throttledHandleMouseMove = tu(td(this, this.handleMouseMove), 30), this.handleMouseUpHandler_ = e => this.handleMouseUp(e), this.on("mousedown", e => this.handleMouseDown(e)), this.on("touchstart", e => this.handleMouseDown(e)), this.on("mousemove", e => this.handleMouseMove(e)), this.on(this.volumeBar, ["focus", "slideractive"], () => {
                        this.volumeBar.addClass("vjs-slider-active"), this.addClass("vjs-slider-active"), this.trigger("slideractive")
                    }), this.on(this.volumeBar, ["blur", "sliderinactive"], () => {
                        this.volumeBar.removeClass("vjs-slider-active"), this.removeClass("vjs-slider-active"), this.trigger("sliderinactive")
                    })
                }
                createEl() {
                    let e = "vjs-volume-horizontal";
                    return this.options_.vertical && (e = "vjs-volume-vertical"), super.createEl("div", {
                        className: `vjs-volume-control vjs-control ${e}`
                    })
                }
                handleMouseDown(e) {
                    let t = this.el_.ownerDocument;
                    this.on(t, "mousemove", this.throttledHandleMouseMove), this.on(t, "touchmove", this.throttledHandleMouseMove), this.on(t, "mouseup", this.handleMouseUpHandler_), this.on(t, "touchend", this.handleMouseUpHandler_)
                }
                handleMouseUp(e) {
                    let t = this.el_.ownerDocument;
                    this.off(t, "mousemove", this.throttledHandleMouseMove), this.off(t, "touchmove", this.throttledHandleMouseMove), this.off(t, "mouseup", this.handleMouseUpHandler_), this.off(t, "touchend", this.handleMouseUpHandler_)
                }
                handleMouseMove(e) {
                    this.volumeBar.handleMouseMove(e)
                }
            }
            sr.prototype.options_ = {
                children: ["volumeBar"]
            }, tD.registerComponent("VolumeControl", sr);
            let sn = function(e, t) {
                t.tech_ && !t.tech_.featuresMuteControl && e.addClass("vjs-hidden"), e.on(t, "loadstart", function() {
                    t.tech_.featuresMuteControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden")
                })
            };
            class sa extends iF {
                constructor(e, t) {
                    super(e, t), sn(this, e), this.on(e, ["loadstart", "volumechange"], e => this.update(e))
                }
                buildCSSClass() {
                    return `vjs-mute-control ${super.buildCSSClass()}`
                }
                handleClick(e) {
                    let t = this.player_.volume(),
                        i = this.player_.lastVolume_();
                    0 === t ? (this.player_.volume(i < .1 ? .1 : i), this.player_.muted(!1)) : this.player_.muted(!this.player_.muted())
                }
                update(e) {
                    this.updateIcon_(), this.updateControlText_()
                }
                updateIcon_() {
                    let e = this.player_.volume(),
                        t = 3;
                    this.setIcon("volume-high"), ev && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted), 0 === e || this.player_.muted() ? (this.setIcon("volume-mute"), t = 0) : e < .33 ? (this.setIcon("volume-low"), t = 1) : e < .67 && (this.setIcon("volume-medium"), t = 2), eD(this.el_, [0, 1, 2, 3].reduce((e, t) => e + `${t?" ":""}vjs-vol-${t}`, "")), eL(this.el_, `vjs-vol-${t}`)
                }
                updateControlText_() {
                    let e = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
                    this.controlText() !== e && this.controlText(e)
                }
            }
            sa.prototype.controlText_ = "Mute", tD.registerComponent("MuteToggle", sa);
            class so extends tD {
                constructor(e, t = {}) {
                    void 0 !== t.inline ? t.inline = t.inline : t.inline = !0, (void 0 === t.volumeControl || Q(t.volumeControl)) && (t.volumeControl = t.volumeControl || {}, t.volumeControl.vertical = !t.inline), super(e, t), this.handleKeyPressHandler_ = e => this.handleKeyPress(e), this.on(e, ["loadstart"], e => this.volumePanelState_(e)), this.on(this.muteToggle, "keyup", e => this.handleKeyPress(e)), this.on(this.volumeControl, "keyup", e => this.handleVolumeControlKeyUp(e)), this.on("keydown", e => this.handleKeyPress(e)), this.on("mouseover", e => this.handleMouseOver(e)), this.on("mouseout", e => this.handleMouseOut(e)), this.on(this.volumeControl, ["slideractive"], this.sliderActive_), this.on(this.volumeControl, ["sliderinactive"], this.sliderInactive_)
                }
                sliderActive_() {
                    this.addClass("vjs-slider-active")
                }
                sliderInactive_() {
                    this.removeClass("vjs-slider-active")
                }
                volumePanelState_() {
                    this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only")
                }
                createEl() {
                    let e = "vjs-volume-panel-horizontal";
                    return this.options_.inline || (e = "vjs-volume-panel-vertical"), super.createEl("div", {
                        className: `vjs-volume-panel vjs-control ${e}`
                    })
                }
                dispose() {
                    this.handleMouseOut(), super.dispose()
                }
                handleVolumeControlKeyUp(e) {
                    m().isEventKey(e, "Esc") && this.muteToggle.focus()
                }
                handleMouseOver(e) {
                    this.addClass("vjs-hover"), tr(c(), "keyup", this.handleKeyPressHandler_)
                }
                handleMouseOut(e) {
                    this.removeClass("vjs-hover"), tn(c(), "keyup", this.handleKeyPressHandler_)
                }
                handleKeyPress(e) {
                    m().isEventKey(e, "Esc") && this.handleMouseOut()
                }
            }
            so.prototype.options_ = {
                children: ["muteToggle", "volumeControl"]
            }, tD.registerComponent("VolumePanel", so);
            class sl extends iF {
                constructor(e, t) {
                    super(e, t), this.validOptions = [5, 10, 30], this.skipTime = this.getSkipForwardTime(), this.skipTime && this.validOptions.includes(this.skipTime) ? (this.setIcon(`forward-${this.skipTime}`), this.controlText(this.localize("Skip forward {1} seconds", [this.skipTime.toLocaleString(e.language())])), this.show()) : this.hide()
                }
                getSkipForwardTime() {
                    let e = this.options_.playerOptions;
                    return e.controlBar && e.controlBar.skipButtons && e.controlBar.skipButtons.forward
                }
                buildCSSClass() {
                    return `vjs-skip-forward-${this.getSkipForwardTime()} ${super.buildCSSClass()}`
                }
                handleClick(e) {
                    let t;
                    if (isNaN(this.player_.duration())) return;
                    let i = this.player_.currentTime(),
                        s = this.player_.liveTracker,
                        r = s && s.isLive() ? s.seekableEnd() : this.player_.duration();
                    t = i + this.skipTime <= r ? i + this.skipTime : r, this.player_.currentTime(t)
                }
                handleLanguagechange() {
                    this.controlText(this.localize("Skip forward {1} seconds", [this.skipTime]))
                }
            }
            sl.prototype.controlText_ = "Skip Forward", tD.registerComponent("SkipForward", sl);
            class sh extends iF {
                constructor(e, t) {
                    super(e, t), this.validOptions = [5, 10, 30], this.skipTime = this.getSkipBackwardTime(), this.skipTime && this.validOptions.includes(this.skipTime) ? (this.setIcon(`replay-${this.skipTime}`), this.controlText(this.localize("Skip backward {1} seconds", [this.skipTime.toLocaleString(e.language())])), this.show()) : this.hide()
                }
                getSkipBackwardTime() {
                    let e = this.options_.playerOptions;
                    return e.controlBar && e.controlBar.skipButtons && e.controlBar.skipButtons.backward
                }
                buildCSSClass() {
                    return `vjs-skip-backward-${this.getSkipBackwardTime()} ${super.buildCSSClass()}`
                }
                handleClick(e) {
                    let t;
                    let i = this.player_.currentTime(),
                        s = this.player_.liveTracker,
                        r = s && s.isLive() && s.seekableStart();
                    t = r && i - this.skipTime <= r ? r : i >= this.skipTime ? i - this.skipTime : 0, this.player_.currentTime(t)
                }
                handleLanguagechange() {
                    this.controlText(this.localize("Skip backward {1} seconds", [this.skipTime]))
                }
            }
            sh.prototype.controlText_ = "Skip Backward", tD.registerComponent("SkipBackward", sh);
            class sd extends tD {
                constructor(e, t) {
                    super(e, t), t && (this.menuButton_ = t.menuButton), this.focusedChild_ = -1, this.on("keydown", e => this.handleKeyDown(e)), this.boundHandleBlur_ = e => this.handleBlur(e), this.boundHandleTapClick_ = e => this.handleTapClick(e)
                }
                addEventListenerForItem(e) {
                    e instanceof tD && (this.on(e, "blur", this.boundHandleBlur_), this.on(e, ["tap", "click"], this.boundHandleTapClick_))
                }
                removeEventListenerForItem(e) {
                    e instanceof tD && (this.off(e, "blur", this.boundHandleBlur_), this.off(e, ["tap", "click"], this.boundHandleTapClick_))
                }
                removeChild(e) {
                    "string" == typeof e && (e = this.getChild(e)), this.removeEventListenerForItem(e), super.removeChild(e)
                }
                addItem(e) {
                    let t = this.addChild(e);
                    t && this.addEventListenerForItem(t)
                }
                createEl() {
                    let e = this.options_.contentElType || "ul";
                    this.contentEl_ = ex(e, {
                        className: "vjs-menu-content"
                    }), this.contentEl_.setAttribute("role", "menu");
                    let t = super.createEl("div", {
                        append: this.contentEl_,
                        className: "vjs-menu"
                    });
                    return t.appendChild(this.contentEl_), tr(t, "click", function(e) {
                        e.preventDefault(), e.stopImmediatePropagation()
                    }), t
                }
                dispose() {
                    this.contentEl_ = null, this.boundHandleBlur_ = null, this.boundHandleTapClick_ = null, super.dispose()
                }
                handleBlur(e) {
                    let t = e.relatedTarget || c().activeElement;
                    if (!this.children().some(e => e.el() === t)) {
                        let e = this.menuButton_;
                        e && e.buttonPressed_ && t !== e.el().firstChild && e.unpressButton()
                    }
                }
                handleTapClick(e) {
                    if (this.menuButton_) {
                        this.menuButton_.unpressButton();
                        let t = this.children();
                        if (!Array.isArray(t)) return;
                        let i = t.filter(t => t.el() === e.target)[0];
                        i && "CaptionSettingsMenuItem" !== i.name() && this.menuButton_.focus()
                    }
                }
                handleKeyDown(e) {
                    m().isEventKey(e, "Left") || m().isEventKey(e, "Down") ? (e.preventDefault(), e.stopPropagation(), this.stepForward()) : (m().isEventKey(e, "Right") || m().isEventKey(e, "Up")) && (e.preventDefault(), e.stopPropagation(), this.stepBack())
                }
                stepForward() {
                    let e = 0;
                    void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1), this.focus(e)
                }
                stepBack() {
                    let e = 0;
                    void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1), this.focus(e)
                }
                focus(e = 0) {
                    let t = this.children().slice();
                    t.length && t[0].hasClass("vjs-menu-title") && t.shift(), t.length > 0 && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1), this.focusedChild_ = e, t[e].el_.focus())
                }
            }
            tD.registerComponent("Menu", sd);
            class su extends tD {
                constructor(e, t = {}) {
                    super(e, t), this.menuButton_ = new iF(e, t), this.menuButton_.controlText(this.controlText_), this.menuButton_.el_.setAttribute("aria-haspopup", "true");
                    let i = iF.prototype.buildCSSClass();
                    this.menuButton_.el_.className = this.buildCSSClass() + " " + i, this.menuButton_.removeClass("vjs-control"), this.addChild(this.menuButton_), this.update(), this.enabled_ = !0;
                    let s = e => this.handleClick(e);
                    this.handleMenuKeyUp_ = e => this.handleMenuKeyUp(e), this.on(this.menuButton_, "tap", s), this.on(this.menuButton_, "click", s), this.on(this.menuButton_, "keydown", e => this.handleKeyDown(e)), this.on(this.menuButton_, "mouseenter", () => {
                        this.addClass("vjs-hover"), this.menu.show(), tr(c(), "keyup", this.handleMenuKeyUp_)
                    }), this.on("mouseleave", e => this.handleMouseLeave(e)), this.on("keydown", e => this.handleSubmenuKeyDown(e))
                }
                update() {
                    let e = this.createMenu();
                    this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = e, this.addChild(e), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? (this.hide(), this.menu.contentEl_.removeAttribute("role")) : (this.show(), this.menu.contentEl_.setAttribute("role", "menu"))
                }
                createMenu() {
                    let e = new sd(this.player_, {
                        menuButton: this
                    });
                    if (this.hideThreshold_ = 0, this.options_.title) {
                        let t = ex("li", {
                                className: "vjs-menu-title",
                                textContent: tP(this.options_.title),
                                tabIndex: -1
                            }),
                            i = new tD(this.player_, {
                                el: t
                            });
                        e.addItem(i)
                    }
                    if (this.items = this.createItems(), this.items)
                        for (let t = 0; t < this.items.length; t++) e.addItem(this.items[t]);
                    return e
                }
                createItems() {}
                createEl() {
                    return super.createEl("div", {
                        className: this.buildWrapperCSSClass()
                    }, {})
                }
                setIcon(e) {
                    super.setIcon(e, this.menuButton_.el_)
                }
                buildWrapperCSSClass() {
                    let e = "vjs-menu-button";
                    !0 === this.options_.inline ? e += "-inline" : e += "-popup";
                    let t = iF.prototype.buildCSSClass();
                    return `vjs-menu-button ${e} ${t} ${super.buildCSSClass()}`
                }
                buildCSSClass() {
                    let e = "vjs-menu-button";
                    return !0 === this.options_.inline ? e += "-inline" : e += "-popup", `vjs-menu-button ${e} ${super.buildCSSClass()}`
                }
                controlText(e, t = this.menuButton_.el()) {
                    return this.menuButton_.controlText(e, t)
                }
                dispose() {
                    this.handleMouseLeave(), super.dispose()
                }
                handleClick(e) {
                    this.buttonPressed_ ? this.unpressButton() : this.pressButton()
                }
                handleMouseLeave(e) {
                    this.removeClass("vjs-hover"), tn(c(), "keyup", this.handleMenuKeyUp_)
                }
                focus() {
                    this.menuButton_.focus()
                }
                blur() {
                    this.menuButton_.blur()
                }
                handleKeyDown(e) {
                    m().isEventKey(e, "Esc") || m().isEventKey(e, "Tab") ? (this.buttonPressed_ && this.unpressButton(), m().isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus())) : (m().isEventKey(e, "Up") || m().isEventKey(e, "Down")) && !this.buttonPressed_ && (e.preventDefault(), this.pressButton())
                }
                handleMenuKeyUp(e) {
                    (m().isEventKey(e, "Esc") || m().isEventKey(e, "Tab")) && this.removeClass("vjs-hover")
                }
                handleSubmenuKeyPress(e) {
                    this.handleSubmenuKeyDown(e)
                }
                handleSubmenuKeyDown(e) {
                    (m().isEventKey(e, "Esc") || m().isEventKey(e, "Tab")) && (this.buttonPressed_ && this.unpressButton(), m().isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus()))
                }
                pressButton() {
                    this.enabled_ && (this.buttonPressed_ = !0, this.menu.show(), this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), ev && eE() || this.menu.focus())
                }
                unpressButton() {
                    this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menu.hide(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
                }
                disable() {
                    this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
                }
                enable() {
                    this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
                }
            }
            tD.registerComponent("MenuButton", su);
            class sc extends su {
                constructor(e, t) {
                    let i = t.tracks;
                    if (super(e, t), this.items.length <= 1 && this.hide(), !i) return;
                    let s = td(this, this.update);
                    i.addEventListener("removetrack", s), i.addEventListener("addtrack", s), i.addEventListener("labelchange", s), this.player_.on("ready", s), this.player_.on("dispose", function() {
                        i.removeEventListener("removetrack", s), i.removeEventListener("addtrack", s), i.removeEventListener("labelchange", s)
                    })
                }
            }
            tD.registerComponent("TrackButton", sc);
            let sp = ["Tab", "Esc", "Up", "Down", "Right", "Left"];
            class sm extends iA {
                constructor(e, t) {
                    super(e, t), this.selectable = t.selectable, this.isSelected_ = t.selected || !1, this.multiSelectable = t.multiSelectable, this.selected(this.isSelected_), this.selectable ? this.multiSelectable ? this.el_.setAttribute("role", "menuitemcheckbox") : this.el_.setAttribute("role", "menuitemradio") : this.el_.setAttribute("role", "menuitem")
                }
                createEl(e, t, i) {
                    this.nonIconControl = !0;
                    let s = super.createEl("li", Object.assign({
                            className: "vjs-menu-item",
                            tabIndex: -1
                        }, t), i),
                        r = ex("span", {
                            className: "vjs-menu-item-text",
                            textContent: this.localize(this.options_.label)
                        });
                    return this.player_.options_.experimentalSvgIcons ? s.appendChild(r) : s.replaceChild(r, s.querySelector(".vjs-icon-placeholder")), s
                }
                handleKeyDown(e) {
                    sp.some(t => m().isEventKey(e, t)) || super.handleKeyDown(e)
                }
                handleClick(e) {
                    this.selected(!0)
                }
                selected(e) {
                    this.selectable && (e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1))
                }
            }
            tD.registerComponent("MenuItem", sm);
            class sg extends sm {
                constructor(e, t) {
                    let i = t.track,
                        s = e.textTracks();
                    t.label = i.label || i.language || "Unknown", t.selected = "showing" === i.mode, super(e, t), this.track = i, this.kinds = (t.kinds || [t.kind || this.track.kind]).filter(Boolean);
                    let r = (...e) => {
                            this.handleTracksChange.apply(this, e)
                        },
                        n = (...e) => {
                            this.handleSelectedLanguageChange.apply(this, e)
                        };
                    if (e.on(["loadstart", "texttrackchange"], r), s.addEventListener("change", r), s.addEventListener("selectedlanguagechange", n), this.on("dispose", function() {
                            e.off(["loadstart", "texttrackchange"], r), s.removeEventListener("change", r), s.removeEventListener("selectedlanguagechange", n)
                        }), void 0 === s.onchange) {
                        let e;
                        this.on(["tap", "click"], function() {
                            if ("object" != typeof d().Event) try {
                                e = new(d()).Event("change")
                            } catch (e) {}
                            e || (e = c().createEvent("Event")).initEvent("change", !0, !0), s.dispatchEvent(e)
                        })
                    }
                    this.handleTracksChange()
                }
                handleClick(e) {
                    let t = this.track,
                        i = this.player_.textTracks();
                    if (super.handleClick(e), i)
                        for (let e = 0; e < i.length; e++) {
                            let s = i[e]; - 1 !== this.kinds.indexOf(s.kind) && (s === t ? "showing" !== s.mode && (s.mode = "showing") : "disabled" !== s.mode && (s.mode = "disabled"))
                        }
                }
                handleTracksChange(e) {
                    let t = "showing" === this.track.mode;
                    t !== this.isSelected_ && this.selected(t)
                }
                handleSelectedLanguageChange(e) {
                    if ("showing" === this.track.mode) {
                        let e = this.player_.cache_.selectedLanguage;
                        e && e.enabled && e.language === this.track.language && e.kind !== this.track.kind || (this.player_.cache_.selectedLanguage = {
                            enabled: !0,
                            language: this.track.language,
                            kind: this.track.kind
                        })
                    }
                }
                dispose() {
                    this.track = null, super.dispose()
                }
            }
            tD.registerComponent("TextTrackMenuItem", sg);
            class sf extends sg {
                constructor(e, t) {
                    t.track = {
                        player: e,
                        kind: t.kind,
                        kinds: t.kinds,
                        default: !1,
                        mode: "disabled"
                    }, t.kinds || (t.kinds = [t.kind]), t.label ? t.track.label = t.label : t.track.label = t.kinds.join(" and ") + " off", t.selectable = !0, t.multiSelectable = !1, super(e, t)
                }
                handleTracksChange(e) {
                    let t = this.player().textTracks(),
                        i = !0;
                    for (let e = 0, s = t.length; e < s; e++) {
                        let s = t[e];
                        if (this.options_.kinds.indexOf(s.kind) > -1 && "showing" === s.mode) {
                            i = !1;
                            break
                        }
                    }
                    i !== this.isSelected_ && this.selected(i)
                }
                handleSelectedLanguageChange(e) {
                    let t = this.player().textTracks(),
                        i = !0;
                    for (let e = 0, s = t.length; e < s; e++) {
                        let s = t[e];
                        if (["captions", "descriptions", "subtitles"].indexOf(s.kind) > -1 && "showing" === s.mode) {
                            i = !1;
                            break
                        }
                    }
                    i && (this.player_.cache_.selectedLanguage = {
                        enabled: !1
                    })
                }
                handleLanguagechange() {
                    this.$(".vjs-menu-item-text").textContent = this.player_.localize(this.options_.label), super.handleLanguagechange()
                }
            }
            tD.registerComponent("OffTextTrackMenuItem", sf);
            class s_ extends sc {
                constructor(e, t = {}) {
                    t.tracks = e.textTracks(), super(e, t)
                }
                createItems(e = [], t = sg) {
                    let i;
                    this.label_ && (i = `${this.label_} off`), e.push(new sf(this.player_, {
                        kinds: this.kinds_,
                        kind: this.kind_,
                        label: i
                    })), this.hideThreshold_ += 1;
                    let s = this.player_.textTracks();
                    Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
                    for (let i = 0; i < s.length; i++) {
                        let r = s[i];
                        if (this.kinds_.indexOf(r.kind) > -1) {
                            let i = new t(this.player_, {
                                track: r,
                                kinds: this.kinds_,
                                kind: this.kind_,
                                selectable: !0,
                                multiSelectable: !1
                            });
                            i.addClass(`vjs-${r.kind}-menu-item`), e.push(i)
                        }
                    }
                    return e
                }
            }
            tD.registerComponent("TextTrackButton", s_);
            class sy extends sm {
                constructor(e, t) {
                    let i = t.track,
                        s = t.cue,
                        r = e.currentTime();
                    t.selectable = !0, t.multiSelectable = !1, t.label = s.text, t.selected = s.startTime <= r && r < s.endTime, super(e, t), this.track = i, this.cue = s
                }
                handleClick(e) {
                    super.handleClick(), this.player_.currentTime(this.cue.startTime)
                }
            }
            tD.registerComponent("ChaptersTrackMenuItem", sy);
            class sv extends s_ {
                constructor(e, t, i) {
                    super(e, t, i), this.setIcon("chapters"), this.selectCurrentItem_ = () => {
                        this.items.forEach(e => {
                            e.selected(this.track_.activeCues[0] === e.cue)
                        })
                    }
                }
                buildCSSClass() {
                    return `vjs-chapters-button ${super.buildCSSClass()}`
                }
                buildWrapperCSSClass() {
                    return `vjs-chapters-button ${super.buildWrapperCSSClass()}`
                }
                update(e) {
                    if (e && e.track && "chapters" !== e.track.kind) return;
                    let t = this.findChaptersTrack();
                    t !== this.track_ ? (this.setTrack(t), super.update()) : (!this.items || t && t.cues && t.cues.length !== this.items.length) && super.update()
                }
                setTrack(e) {
                    if (this.track_ !== e) {
                        if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                            let e = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                            e && e.removeEventListener("load", this.updateHandler_), this.track_.removeEventListener("cuechange", this.selectCurrentItem_), this.track_ = null
                        }
                        if (this.track_ = e, this.track_) {
                            this.track_.mode = "hidden";
                            let e = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                            e && e.addEventListener("load", this.updateHandler_), this.track_.addEventListener("cuechange", this.selectCurrentItem_)
                        }
                    }
                }
                findChaptersTrack() {
                    let e = this.player_.textTracks() || [];
                    for (let t = e.length - 1; t >= 0; t--) {
                        let i = e[t];
                        if (i.kind === this.kind_) return i
                    }
                }
                getMenuCaption() {
                    return this.track_ && this.track_.label ? this.track_.label : this.localize(tP(this.kind_))
                }
                createMenu() {
                    return this.options_.title = this.getMenuCaption(), super.createMenu()
                }
                createItems() {
                    let e = [];
                    if (!this.track_) return e;
                    let t = this.track_.cues;
                    if (!t) return e;
                    for (let i = 0, s = t.length; i < s; i++) {
                        let s = t[i],
                            r = new sy(this.player_, {
                                track: this.track_,
                                cue: s
                            });
                        e.push(r)
                    }
                    return e
                }
            }
            sv.prototype.kind_ = "chapters", sv.prototype.controlText_ = "Chapters", tD.registerComponent("ChaptersButton", sv);
            class sT extends s_ {
                constructor(e, t, i) {
                    super(e, t, i), this.setIcon("audio-description");
                    let s = e.textTracks(),
                        r = td(this, this.handleTracksChange);
                    s.addEventListener("change", r), this.on("dispose", function() {
                        s.removeEventListener("change", r)
                    })
                }
                handleTracksChange(e) {
                    let t = this.player().textTracks(),
                        i = !1;
                    for (let e = 0, s = t.length; e < s; e++) {
                        let s = t[e];
                        if (s.kind !== this.kind_ && "showing" === s.mode) {
                            i = !0;
                            break
                        }
                    }
                    i ? this.disable() : this.enable()
                }
                buildCSSClass() {
                    return `vjs-descriptions-button ${super.buildCSSClass()}`
                }
                buildWrapperCSSClass() {
                    return `vjs-descriptions-button ${super.buildWrapperCSSClass()}`
                }
            }
            sT.prototype.kind_ = "descriptions", sT.prototype.controlText_ = "Descriptions", tD.registerComponent("DescriptionsButton", sT);
            class sb extends s_ {
                constructor(e, t, i) {
                    super(e, t, i), this.setIcon("subtitles")
                }
                buildCSSClass() {
                    return `vjs-subtitles-button ${super.buildCSSClass()}`
                }
                buildWrapperCSSClass() {
                    return `vjs-subtitles-button ${super.buildWrapperCSSClass()}`
                }
            }
            sb.prototype.kind_ = "subtitles", sb.prototype.controlText_ = "Subtitles", tD.registerComponent("SubtitlesButton", sb);
            class sS extends sg {
                constructor(e, t) {
                    t.track = {
                        player: e,
                        kind: t.kind,
                        label: t.kind + " settings",
                        selectable: !1,
                        default: !1,
                        mode: "disabled"
                    }, t.selectable = !1, t.name = "CaptionSettingsMenuItem", super(e, t), this.addClass("vjs-texttrack-settings"), this.controlText(", opens " + t.kind + " settings dialog")
                }
                handleClick(e) {
                    this.player().getChild("textTrackSettings").open()
                }
                handleLanguagechange() {
                    this.$(".vjs-menu-item-text").textContent = this.player_.localize(this.options_.kind + " settings"), super.handleLanguagechange()
                }
            }
            tD.registerComponent("CaptionSettingsMenuItem", sS);
            class sk extends s_ {
                constructor(e, t, i) {
                    super(e, t, i), this.setIcon("captions")
                }
                buildCSSClass() {
                    return `vjs-captions-button ${super.buildCSSClass()}`
                }
                buildWrapperCSSClass() {
                    return `vjs-captions-button ${super.buildWrapperCSSClass()}`
                }
                createItems() {
                    let e = [];
                    return !(this.player().tech_ && this.player().tech_.featuresNativeTextTracks) && this.player().getChild("textTrackSettings") && (e.push(new sS(this.player_, {
                        kind: this.kind_
                    })), this.hideThreshold_ += 1), super.createItems(e)
                }
            }
            sk.prototype.kind_ = "captions", sk.prototype.controlText_ = "Captions", tD.registerComponent("CaptionsButton", sk);
            class sC extends sg {
                createEl(e, t, i) {
                    let s = super.createEl(e, t, i),
                        r = s.querySelector(".vjs-menu-item-text");
                    return "captions" === this.options_.track.kind && (this.player_.options_.experimentalSvgIcons ? this.setIcon("captions", s) : r.appendChild(ex("span", {
                        className: "vjs-icon-placeholder"
                    }, {
                        "aria-hidden": !0
                    })), r.appendChild(ex("span", {
                        className: "vjs-control-text",
                        textContent: ` ${this.localize("Captions")}`
                    }))), s
                }
            }
            tD.registerComponent("SubsCapsMenuItem", sC);
            class sE extends s_ {
                constructor(e, t = {}) {
                    super(e, t), this.label_ = "subtitles", this.setIcon("subtitles"), ["en", "en-us", "en-ca", "fr-ca"].indexOf(this.player_.language_) > -1 && (this.label_ = "captions", this.setIcon("captions")), this.menuButton_.controlText(tP(this.label_))
                }
                buildCSSClass() {
                    return `vjs-subs-caps-button ${super.buildCSSClass()}`
                }
                buildWrapperCSSClass() {
                    return `vjs-subs-caps-button ${super.buildWrapperCSSClass()}`
                }
                createItems() {
                    let e = [];
                    return !(this.player().tech_ && this.player().tech_.featuresNativeTextTracks) && this.player().getChild("textTrackSettings") && (e.push(new sS(this.player_, {
                        kind: this.label_
                    })), this.hideThreshold_ += 1), e = super.createItems(e, sC)
                }
            }
            sE.prototype.kinds_ = ["captions", "subtitles"], sE.prototype.controlText_ = "Subtitles", tD.registerComponent("SubsCapsButton", sE);
            class sw extends sm {
                constructor(e, t) {
                    let i = t.track,
                        s = e.audioTracks();
                    t.label = i.label || i.language || "Unknown", t.selected = i.enabled, super(e, t), this.track = i, this.addClass(`vjs-${i.kind}-menu-item`);
                    let r = (...e) => {
                        this.handleTracksChange.apply(this, e)
                    };
                    s.addEventListener("change", r), this.on("dispose", () => {
                        s.removeEventListener("change", r)
                    })
                }
                createEl(e, t, i) {
                    let s = super.createEl(e, t, i),
                        r = s.querySelector(".vjs-menu-item-text");
                    return ["main-desc", "description"].indexOf(this.options_.track.kind) >= 0 && (r.appendChild(ex("span", {
                        className: "vjs-icon-placeholder"
                    }, {
                        "aria-hidden": !0
                    })), r.appendChild(ex("span", {
                        className: "vjs-control-text",
                        textContent: " " + this.localize("Descriptions")
                    }))), s
                }
                handleClick(e) {
                    if (super.handleClick(e), this.track.enabled = !0, this.player_.tech_.featuresNativeAudioTracks) {
                        let e = this.player_.audioTracks();
                        for (let t = 0; t < e.length; t++) {
                            let i = e[t];
                            i !== this.track && (i.enabled = i === this.track)
                        }
                    }
                }
                handleTracksChange(e) {
                    this.selected(this.track.enabled)
                }
            }
            tD.registerComponent("AudioTrackMenuItem", sw);
            class sx extends sc {
                constructor(e, t = {}) {
                    t.tracks = e.audioTracks(), super(e, t), this.setIcon("audio")
                }
                buildCSSClass() {
                    return `vjs-audio-button ${super.buildCSSClass()}`
                }
                buildWrapperCSSClass() {
                    return `vjs-audio-button ${super.buildWrapperCSSClass()}`
                }
                createItems(e = []) {
                    this.hideThreshold_ = 1;
                    let t = this.player_.audioTracks();
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i];
                        e.push(new sw(this.player_, {
                            track: s,
                            selectable: !0,
                            multiSelectable: !1
                        }))
                    }
                    return e
                }
            }
            sx.prototype.controlText_ = "Audio Track", tD.registerComponent("AudioTrackButton", sx);
            class sI extends sm {
                constructor(e, t) {
                    let i = t.rate,
                        s = parseFloat(i, 10);
                    t.label = i, t.selected = s === e.playbackRate(), t.selectable = !0, t.multiSelectable = !1, super(e, t), this.label = i, this.rate = s, this.on(e, "ratechange", e => this.update(e))
                }
                handleClick(e) {
                    super.handleClick(), this.player().playbackRate(this.rate)
                }
                update(e) {
                    this.selected(this.player().playbackRate() === this.rate)
                }
            }
            sI.prototype.contentElType = "button", tD.registerComponent("PlaybackRateMenuItem", sI);
            class sP extends su {
                constructor(e, t) {
                    super(e, t), this.menuButton_.el_.setAttribute("aria-describedby", this.labelElId_), this.updateVisibility(), this.updateLabel(), this.on(e, "loadstart", e => this.updateVisibility(e)), this.on(e, "ratechange", e => this.updateLabel(e)), this.on(e, "playbackrateschange", e => this.handlePlaybackRateschange(e))
                }
                createEl() {
                    let e = super.createEl();
                    return this.labelElId_ = "vjs-playback-rate-value-label-" + this.id_, this.labelEl_ = ex("div", {
                        className: "vjs-playback-rate-value",
                        id: this.labelElId_,
                        textContent: "1x"
                    }), e.appendChild(this.labelEl_), e
                }
                dispose() {
                    this.labelEl_ = null, super.dispose()
                }
                buildCSSClass() {
                    return `vjs-playback-rate ${super.buildCSSClass()}`
                }
                buildWrapperCSSClass() {
                    return `vjs-playback-rate ${super.buildWrapperCSSClass()}`
                }
                createItems() {
                    let e = this.playbackRates(),
                        t = [];
                    for (let i = e.length - 1; i >= 0; i--) t.push(new sI(this.player(), {
                        rate: e[i] + "x"
                    }));
                    return t
                }
                handlePlaybackRateschange(e) {
                    this.update()
                }
                playbackRates() {
                    let e = this.player();
                    return e.playbackRates && e.playbackRates() || []
                }
                playbackRateSupported() {
                    return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
                }
                updateVisibility(e) {
                    this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
                }
                updateLabel(e) {
                    this.playbackRateSupported() && (this.labelEl_.textContent = this.player().playbackRate() + "x")
                }
            }
            sP.prototype.controlText_ = "Playback Rate", tD.registerComponent("PlaybackRateMenuButton", sP);
            class sA extends tD {
                buildCSSClass() {
                    return `vjs-spacer ${super.buildCSSClass()}`
                }
                createEl(e = "div", t = {}, i = {}) {
                    return t.className || (t.className = this.buildCSSClass()), super.createEl(e, t, i)
                }
            }
            tD.registerComponent("Spacer", sA);
            class sL extends sA {
                buildCSSClass() {
                    return `vjs-custom-control-spacer ${super.buildCSSClass()}`
                }
                createEl() {
                    return super.createEl("div", {
                        className: this.buildCSSClass(),
                        textContent: "\xa0"
                    })
                }
            }
            tD.registerComponent("CustomControlSpacer", sL);
            class sD extends tD {
                createEl() {
                    return super.createEl("div", {
                        className: "vjs-control-bar",
                        dir: "ltr"
                    })
                }
            }
            sD.prototype.options_ = {
                children: ["playToggle", "skipBackward", "skipForward", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "pictureInPictureToggle", "fullscreenToggle"]
            }, tD.registerComponent("ControlBar", sD);
            class sO extends tQ {
                constructor(e, t) {
                    super(e, t), this.on(e, "error", e => {
                        this.open(e)
                    })
                }
                buildCSSClass() {
                    return `vjs-error-display ${super.buildCSSClass()}`
                }
                content() {
                    let e = this.player().error();
                    return e ? this.localize(e.message) : ""
                }
            }
            sO.prototype.options_ = Object.assign({}, tQ.prototype.options_, {
                pauseOnOpen: !1,
                fillAlways: !0,
                temporary: !1,
                uncloseable: !0
            }), tD.registerComponent("ErrorDisplay", sO);
            let sM = "vjs-text-track-settings",
                sR = ["#000", "Black"],
                sU = ["#00F", "Blue"],
                sB = ["#0FF", "Cyan"],
                sN = ["#0F0", "Green"],
                sj = ["#F0F", "Magenta"],
                sF = ["#F00", "Red"],
                s$ = ["#FFF", "White"],
                sq = ["#FF0", "Yellow"],
                sH = ["1", "Opaque"],
                sV = ["0.5", "Semi-Transparent"],
                sz = ["0", "Transparent"],
                sW = {
                    backgroundColor: {
                        selector: ".vjs-bg-color > select",
                        id: "captions-background-color-%s",
                        label: "Color",
                        options: [sR, s$, sF, sN, sU, sq, sj, sB]
                    },
                    backgroundOpacity: {
                        selector: ".vjs-bg-opacity > select",
                        id: "captions-background-opacity-%s",
                        label: "Opacity",
                        options: [sH, sV, sz]
                    },
                    color: {
                        selector: ".vjs-text-color > select",
                        id: "captions-foreground-color-%s",
                        label: "Color",
                        options: [s$, sR, sF, sN, sU, sq, sj, sB]
                    },
                    edgeStyle: {
                        selector: ".vjs-edge-style > select",
                        id: "%s",
                        label: "Text Edge Style",
                        options: [
                            ["none", "None"],
                            ["raised", "Raised"],
                            ["depressed", "Depressed"],
                            ["uniform", "Uniform"],
                            ["dropshadow", "Drop shadow"]
                        ]
                    },
                    fontFamily: {
                        selector: ".vjs-font-family > select",
                        id: "captions-font-family-%s",
                        label: "Font Family",
                        options: [
                            ["proportionalSansSerif", "Proportional Sans-Serif"],
                            ["monospaceSansSerif", "Monospace Sans-Serif"],
                            ["proportionalSerif", "Proportional Serif"],
                            ["monospaceSerif", "Monospace Serif"],
                            ["casual", "Casual"],
                            ["script", "Script"],
                            ["small-caps", "Small Caps"]
                        ]
                    },
                    fontPercent: {
                        selector: ".vjs-font-percent > select",
                        id: "captions-font-size-%s",
                        label: "Font Size",
                        options: [
                            ["0.50", "50%"],
                            ["0.75", "75%"],
                            ["1.00", "100%"],
                            ["1.25", "125%"],
                            ["1.50", "150%"],
                            ["1.75", "175%"],
                            ["2.00", "200%"],
                            ["3.00", "300%"],
                            ["4.00", "400%"]
                        ],
                        default: 2,
                        parser: e => "1.00" === e ? null : Number(e)
                    },
                    textOpacity: {
                        selector: ".vjs-text-opacity > select",
                        id: "captions-foreground-opacity-%s",
                        label: "Opacity",
                        options: [sH, sV]
                    },
                    windowColor: {
                        selector: ".vjs-window-color > select",
                        id: "captions-window-color-%s",
                        label: "Color"
                    },
                    windowOpacity: {
                        selector: ".vjs-window-opacity > select",
                        id: "captions-window-opacity-%s",
                        label: "Opacity",
                        options: [sz, sV, sH]
                    }
                };

            function sG(e, t) {
                if (t && (e = t(e)), e && "none" !== e) return e
            }
            sW.windowColor.options = sW.backgroundColor.options;
            class sK extends tQ {
                constructor(e, t) {
                    t.temporary = !1, super(e, t), this.updateDisplay = this.updateDisplay.bind(this), this.fill(), this.hasBeenOpened_ = this.hasBeenFilled_ = !0, this.endDialog = ex("p", {
                        className: "vjs-control-text",
                        textContent: this.localize("End of dialog window.")
                    }), this.el().appendChild(this.endDialog), this.setDefaults(), void 0 === t.persistTextTrackSettings && (this.options_.persistTextTrackSettings = this.options_.playerOptions.persistTextTrackSettings), this.on(this.$(".vjs-done-button"), "click", () => {
                        this.saveSettings(), this.close()
                    }), this.on(this.$(".vjs-default-button"), "click", () => {
                        this.setDefaults(), this.updateDisplay()
                    }), W(sW, e => {
                        this.on(this.$(e.selector), "change", this.updateDisplay)
                    }), this.options_.persistTextTrackSettings && this.restoreSettings()
                }
                dispose() {
                    this.endDialog = null, super.dispose()
                }
                createElSelect_(e, t = "", i = "label") {
                    let s = sW[e],
                        r = s.id.replace("%s", this.id_),
                        n = [t, r].join(" ").trim(),
                        a = `vjs_select_${e7++}`;
                    return [`<${i} id="${r}"${"label"===i?` for="${a}" class="vjs-label"`:""}>`, this.localize(s.label), `</${i}>`, `<select aria-labelledby="${n}" id="${a}">`].concat(s.options.map(e => {
                        let t = r + "-" + e[1].replace(/\W+/g, "");
                        return [`<option id="${t}" value="${e[0]}" `, `aria-labelledby="${n} ${t}">`, this.localize(e[1]), "</option>"].join("")
                    })).concat("</select>").join("")
                }
                createElFgColor_() {
                    let e = `captions-text-legend-${this.id_}`;
                    return ['<fieldset class="vjs-fg vjs-track-setting">', `<legend id="${e}">`, this.localize("Text"), "</legend>", '<span class="vjs-text-color">', this.createElSelect_("color", e), "</span>", '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>"].join("")
                }
                createElBgColor_() {
                    let e = `captions-background-${this.id_}`;
                    return ['<fieldset class="vjs-bg vjs-track-setting">', `<legend id="${e}">`, this.localize("Text Background"), "</legend>", '<span class="vjs-bg-color">', this.createElSelect_("backgroundColor", e), "</span>", '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>"].join("")
                }
                createElWinColor_() {
                    let e = `captions-window-${this.id_}`;
                    return ['<fieldset class="vjs-window vjs-track-setting">', `<legend id="${e}">`, this.localize("Caption Area Background"), "</legend>", '<span class="vjs-window-color">', this.createElSelect_("windowColor", e), "</span>", '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>"].join("")
                }
                createElColors_() {
                    return ex("div", {
                        className: "vjs-track-settings-colors",
                        innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
                    })
                }
                createElFont_() {
                    return ex("div", {
                        className: "vjs-track-settings-font",
                        innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
                    })
                }
                createElControls_() {
                    let e = this.localize("restore all settings to the default values");
                    return ex("div", {
                        className: "vjs-track-settings-controls",
                        innerHTML: [`<button type="button" class="vjs-default-button" title="${e}">`, this.localize("Reset"), `<span class="vjs-control-text"> ${e}</span>`, "</button>", `<button type="button" class="vjs-done-button">${this.localize("Done")}</button>`].join("")
                    })
                }
                content() {
                    return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
                }
                label() {
                    return this.localize("Caption Settings Dialog")
                }
                description() {
                    return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
                }
                buildCSSClass() {
                    return super.buildCSSClass() + " vjs-text-track-settings"
                }
                getValues() {
                    return G(sW, (e, t, i) => {
                        var s, r;
                        let n = (s = this.$(t.selector), r = t.parser, sG(s.options[s.options.selectedIndex].value, r));
                        return void 0 !== n && (e[i] = n), e
                    }, {})
                }
                setValues(e) {
                    W(sW, (t, i) => {
                        ! function(e, t, i) {
                            if (t) {
                                for (let s = 0; s < e.options.length; s++)
                                    if (sG(e.options[s].value, i) === t) {
                                        e.selectedIndex = s;
                                        break
                                    }
                            }
                        }(this.$(t.selector), e[i], t.parser)
                    })
                }
                setDefaults() {
                    W(sW, e => {
                        let t = e.hasOwnProperty("default") ? e.default : 0;
                        this.$(e.selector).selectedIndex = t
                    })
                }
                restoreSettings() {
                    let e;
                    try {
                        e = JSON.parse(d().localStorage.getItem(sM))
                    } catch (e) {
                        q.warn(e)
                    }
                    e && this.setValues(e)
                }
                saveSettings() {
                    if (!this.options_.persistTextTrackSettings) return;
                    let e = this.getValues();
                    try {
                        Object.keys(e).length ? d().localStorage.setItem(sM, JSON.stringify(e)) : d().localStorage.removeItem(sM)
                    } catch (e) {
                        q.warn(e)
                    }
                }
                updateDisplay() {
                    let e = this.player_.getChild("textTrackDisplay");
                    e && e.updateDisplay()
                }
                conditionalBlur_() {
                    this.previouslyActiveEl_ = null;
                    let e = this.player_.controlBar,
                        t = e && e.subsCapsButton,
                        i = e && e.captionsButton;
                    t ? t.focus() : i && i.focus()
                }
                handleLanguagechange() {
                    this.fill()
                }
            }
            tD.registerComponent("TextTrackSettings", sK);
            class sQ extends tD {
                constructor(e, t) {
                    let i = t.ResizeObserver || d().ResizeObserver;
                    null === t.ResizeObserver && (i = !1), super(e, Y({
                        createEl: !i,
                        reportTouchActivity: !1
                    }, t)), this.ResizeObserver = t.ResizeObserver || d().ResizeObserver, this.loadListener_ = null, this.resizeObserver_ = null, this.debouncedHandler_ = tc(() => {
                        this.resizeHandler()
                    }, 100, !1, this), i ? (this.resizeObserver_ = new this.ResizeObserver(this.debouncedHandler_), this.resizeObserver_.observe(e.el())) : (this.loadListener_ = () => {
                        if (!this.el_ || !this.el_.contentWindow) return;
                        let e = this.debouncedHandler_,
                            t = this.unloadListener_ = function() {
                                tn(this, "resize", e), tn(this, "unload", t), t = null
                            };
                        tr(this.el_.contentWindow, "unload", t), tr(this.el_.contentWindow, "resize", e)
                    }, this.one("load", this.loadListener_))
                }
                createEl() {
                    return super.createEl("iframe", {
                        className: "vjs-resize-manager",
                        tabIndex: -1,
                        title: this.localize("No content")
                    }, {
                        "aria-hidden": "true"
                    })
                }
                resizeHandler() {
                    this.player_ && this.player_.trigger && this.player_.trigger("playerresize")
                }
                dispose() {
                    this.debouncedHandler_ && this.debouncedHandler_.cancel(), this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.loadListener_ && this.off("load", this.loadListener_), this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null, super.dispose()
                }
            }
            tD.registerComponent("ResizeManager", sQ);
            let sY = {
                trackingThreshold: 20,
                liveTolerance: 15
            };
            class sX extends tD {
                constructor(e, t) {
                    super(e, Y(sY, t, {
                        createEl: !1
                    })), this.trackLiveHandler_ = () => this.trackLive_(), this.handlePlay_ = e => this.handlePlay(e), this.handleFirstTimeupdate_ = e => this.handleFirstTimeupdate(e), this.handleSeeked_ = e => this.handleSeeked(e), this.seekToLiveEdge_ = e => this.seekToLiveEdge(e), this.reset_(), this.on(this.player_, "durationchange", e => this.handleDurationchange(e)), this.on(this.player_, "canplay", () => this.toggleTracking())
                }
                trackLive_() {
                    let e = this.player_.seekable();
                    if (!e || !e.length) return;
                    let t = Number(d().performance.now().toFixed(4)),
                        i = -1 === this.lastTime_ ? 0 : (t - this.lastTime_) / 1e3;
                    this.lastTime_ = t, this.pastSeekEnd_ = this.pastSeekEnd() + i;
                    let s = this.liveCurrentTime(),
                        r = this.player_.currentTime(),
                        n = this.player_.paused() || this.seekedBehindLive_ || Math.abs(s - r) > this.options_.liveTolerance;
                    this.timeupdateSeen_ && s !== 1 / 0 || (n = !1), n !== this.behindLiveEdge_ && (this.behindLiveEdge_ = n, this.trigger("liveedgechange"))
                }
                handleDurationchange() {
                    this.toggleTracking()
                }
                toggleTracking() {
                    this.player_.duration() === 1 / 0 && this.liveWindow() >= this.options_.trackingThreshold ? (this.player_.options_.liveui && this.player_.addClass("vjs-liveui"), this.startTracking()) : (this.player_.removeClass("vjs-liveui"), this.stopTracking())
                }
                startTracking() {
                    this.isTracking() || (this.timeupdateSeen_ || (this.timeupdateSeen_ = this.player_.hasStarted()), this.trackingInterval_ = this.setInterval(this.trackLiveHandler_, 30), this.trackLive_(), this.on(this.player_, ["play", "pause"], this.trackLiveHandler_), this.timeupdateSeen_ ? this.on(this.player_, "seeked", this.handleSeeked_) : (this.one(this.player_, "play", this.handlePlay_), this.one(this.player_, "timeupdate", this.handleFirstTimeupdate_)))
                }
                handleFirstTimeupdate() {
                    this.timeupdateSeen_ = !0, this.on(this.player_, "seeked", this.handleSeeked_)
                }
                handleSeeked() {
                    let e = Math.abs(this.liveCurrentTime() - this.player_.currentTime());
                    this.seekedBehindLive_ = this.nextSeekedFromUser_ && e > 2, this.nextSeekedFromUser_ = !1, this.trackLive_()
                }
                handlePlay() {
                    this.one(this.player_, "timeupdate", this.seekToLiveEdge_)
                }
                reset_() {
                    this.lastTime_ = -1, this.pastSeekEnd_ = 0, this.lastSeekEnd_ = -1, this.behindLiveEdge_ = !0, this.timeupdateSeen_ = !1, this.seekedBehindLive_ = !1, this.nextSeekedFromUser_ = !1, this.clearInterval(this.trackingInterval_), this.trackingInterval_ = null, this.off(this.player_, ["play", "pause"], this.trackLiveHandler_), this.off(this.player_, "seeked", this.handleSeeked_), this.off(this.player_, "play", this.handlePlay_), this.off(this.player_, "timeupdate", this.handleFirstTimeupdate_), this.off(this.player_, "timeupdate", this.seekToLiveEdge_)
                }
                nextSeekedFromUser() {
                    this.nextSeekedFromUser_ = !0
                }
                stopTracking() {
                    this.isTracking() && (this.reset_(), this.trigger("liveedgechange"))
                }
                seekableEnd() {
                    let e = this.player_.seekable(),
                        t = [],
                        i = e ? e.length : 0;
                    for (; i--;) t.push(e.end(i));
                    return t.length ? t.sort()[t.length - 1] : 1 / 0
                }
                seekableStart() {
                    let e = this.player_.seekable(),
                        t = [],
                        i = e ? e.length : 0;
                    for (; i--;) t.push(e.start(i));
                    return t.length ? t.sort()[0] : 0
                }
                liveWindow() {
                    let e = this.liveCurrentTime();
                    return e === 1 / 0 ? 0 : e - this.seekableStart()
                }
                isLive() {
                    return this.isTracking()
                }
                atLiveEdge() {
                    return !this.behindLiveEdge()
                }
                liveCurrentTime() {
                    return this.pastSeekEnd() + this.seekableEnd()
                }
                pastSeekEnd() {
                    let e = this.seekableEnd();
                    return -1 !== this.lastSeekEnd_ && e !== this.lastSeekEnd_ && (this.pastSeekEnd_ = 0), this.lastSeekEnd_ = e, this.pastSeekEnd_
                }
                behindLiveEdge() {
                    return this.behindLiveEdge_
                }
                isTracking() {
                    return "number" == typeof this.trackingInterval_
                }
                seekToLiveEdge() {
                    this.seekedBehindLive_ = !1, this.atLiveEdge() || (this.nextSeekedFromUser_ = !1, this.player_.currentTime(this.liveCurrentTime()))
                }
                dispose() {
                    this.stopTracking(), super.dispose()
                }
            }
            tD.registerComponent("LiveTracker", sX);
            class sJ extends tD {
                constructor(e, t) {
                    super(e, t), this.on("statechanged", e => this.updateDom_()), this.updateDom_()
                }
                createEl() {
                    return this.els = {
                        title: ex("div", {
                            className: "vjs-title-bar-title",
                            id: `vjs-title-bar-title-${e7++}`
                        }),
                        description: ex("div", {
                            className: "vjs-title-bar-description",
                            id: `vjs-title-bar-description-${e7++}`
                        })
                    }, ex("div", {
                        className: "vjs-title-bar"
                    }, {}, X(this.els))
                }
                updateDom_() {
                    let e = this.player_.tech_,
                        t = e && e.el_,
                        i = {
                            title: "aria-labelledby",
                            description: "aria-describedby"
                        };
                    ["title", "description"].forEach(e => {
                        let s = this.state[e],
                            r = this.els[e],
                            n = i[e];
                        ez(r), s && eI(r, s), t && (t.removeAttribute(n), s && t.setAttribute(n, r.id))
                    }), this.state.title || this.state.description ? this.show() : this.hide()
                }
                update(e) {
                    this.setState(e)
                }
                dispose() {
                    let e = this.player_.tech_,
                        t = e && e.el_;
                    t && (t.removeAttribute("aria-labelledby"), t.removeAttribute("aria-describedby")), super.dispose(), this.els = null
                }
            }
            tD.registerComponent("TitleBar", sJ);
            let sZ = e => {
                    let t = e.el();
                    if (t.hasAttribute("src")) return e.triggerSourceset(t.src), !0;
                    let i = e.$$("source"),
                        s = [],
                        r = "";
                    if (!i.length) return !1;
                    for (let e = 0; e < i.length; e++) {
                        let t = i[e].src;
                        t && -1 === s.indexOf(t) && s.push(t)
                    }
                    return !!s.length && (1 === s.length && (r = s[0]), e.triggerSourceset(r), !0)
                },
                s0 = Object.defineProperty({}, "innerHTML", {
                    get() {
                        return this.cloneNode(!0).innerHTML
                    },
                    set(e) {
                        let t = c().createElement(this.nodeName.toLowerCase());
                        t.innerHTML = e;
                        let i = c().createDocumentFragment();
                        for (; t.childNodes.length;) i.appendChild(t.childNodes[0]);
                        return this.innerText = "", d().Element.prototype.appendChild.call(this, i), this.innerHTML
                    }
                }),
                s1 = (e, t) => {
                    let i = {};
                    for (let s = 0; s < e.length && (!(i = Object.getOwnPropertyDescriptor(e[s], t)) || !i.set || !i.get); s++);
                    return i.enumerable = !0, i.configurable = !0, i
                },
                s2 = e => s1([e.el(), d().HTMLMediaElement.prototype, d().Element.prototype, s0], "innerHTML"),
                s4 = function(e) {
                    let t = e.el();
                    if (t.resetSourceWatch_) return;
                    let i = {},
                        s = s2(e),
                        r = i => (...s) => {
                            let r = i.apply(t, s);
                            return sZ(e), r
                        };
                    ["append", "appendChild", "insertAdjacentHTML"].forEach(e => {
                        t[e] && (i[e] = t[e], t[e] = r(i[e]))
                    }), Object.defineProperty(t, "innerHTML", Y(s, {
                        set: r(s.set)
                    })), t.resetSourceWatch_ = () => {
                        t.resetSourceWatch_ = null, Object.keys(i).forEach(e => {
                            t[e] = i[e]
                        }), Object.defineProperty(t, "innerHTML", s)
                    }, e.one("sourceset", t.resetSourceWatch_)
                },
                s8 = Object.defineProperty({}, "src", {
                    get() {
                        return this.hasAttribute("src") ? ie(d().Element.prototype.getAttribute.call(this, "src")) : ""
                    },
                    set(e) {
                        return d().Element.prototype.setAttribute.call(this, "src", e), e
                    }
                }),
                s5 = e => s1([e.el(), d().HTMLMediaElement.prototype, s8], "src"),
                s3 = function(e) {
                    if (!e.featuresSourceset) return;
                    let t = e.el();
                    if (t.resetSourceset_) return;
                    let i = s5(e),
                        s = t.setAttribute,
                        r = t.load;
                    Object.defineProperty(t, "src", Y(i, {
                        set: s => {
                            let r = i.set.call(t, s);
                            return e.triggerSourceset(t.src), r
                        }
                    })), t.setAttribute = (i, r) => {
                        let n = s.call(t, i, r);
                        return /src/i.test(i) && e.triggerSourceset(t.src), n
                    }, t.load = () => {
                        let i = r.call(t);
                        return sZ(e) || (e.triggerSourceset(""), s4(e)), i
                    }, t.currentSrc ? e.triggerSourceset(t.currentSrc) : sZ(e) || s4(e), t.resetSourceset_ = () => {
                        t.resetSourceset_ = null, t.load = r, t.setAttribute = s, Object.defineProperty(t, "src", i), t.resetSourceWatch_ && t.resetSourceWatch_()
                    }
                };
            class s6 extends im {
                constructor(e, t) {
                    super(e, t);
                    let i = e.source,
                        s = !1;
                    if (this.featuresVideoFrameCallback = this.featuresVideoFrameCallback && "VIDEO" === this.el_.tagName, i && (this.el_.currentSrc !== i.src || e.tag && 3 === e.tag.initNetworkState_) ? this.setSource(i) : this.handleLateInit_(this.el_), e.enableSourceset && this.setupSourcesetHandling_(), this.isScrubbing_ = !1, this.el_.hasChildNodes()) {
                        let e = this.el_.childNodes,
                            t = e.length,
                            i = [];
                        for (; t--;) {
                            let r = e[t];
                            "track" === r.nodeName.toLowerCase() && (this.featuresNativeTextTracks ? (this.remoteTextTrackEls().addTrackElement_(r), this.remoteTextTracks().addTrack(r.track), this.textTracks().addTrack(r.track), !s && !this.el_.hasAttribute("crossorigin") && ii(r.src) && (s = !0)) : i.push(r))
                        }
                        for (let e = 0; e < i.length; e++) this.el_.removeChild(i[e])
                    }
                    this.proxyNativeTracks_(), this.featuresNativeTextTracks && s && q.warn("Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\nThis may prevent text tracks from loading."), this.restoreMetadataTracksInIOSNativePlayer_(), (e_ || ep) && !0 === e.nativeControlsForTouch && this.setControls(!0), this.proxyWebkitFullscreen_(), this.triggerReady()
                }
                dispose() {
                    this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), s6.disposeMediaElement(this.el_), this.options_ = null, super.dispose()
                }
                setupSourcesetHandling_() {
                    s3(this)
                }
                restoreMetadataTracksInIOSNativePlayer_() {
                    let e;
                    let t = this.textTracks(),
                        i = () => {
                            e = [];
                            for (let i = 0; i < t.length; i++) {
                                let s = t[i];
                                "metadata" === s.kind && e.push({
                                    track: s,
                                    storedMode: s.mode
                                })
                            }
                        };
                    i(), t.addEventListener("change", i), this.on("dispose", () => t.removeEventListener("change", i));
                    let s = () => {
                        for (let t = 0; t < e.length; t++) {
                            let i = e[t];
                            "disabled" === i.track.mode && i.track.mode !== i.storedMode && (i.track.mode = i.storedMode)
                        }
                        t.removeEventListener("change", s)
                    };
                    this.on("webkitbeginfullscreen", () => {
                        t.removeEventListener("change", i), t.removeEventListener("change", s), t.addEventListener("change", s)
                    }), this.on("webkitendfullscreen", () => {
                        t.removeEventListener("change", i), t.addEventListener("change", i), t.removeEventListener("change", s)
                    })
                }
                overrideNative_(e, t) {
                    if (t !== this[`featuresNative${e}Tracks`]) return;
                    let i = e.toLowerCase();
                    this[`${i}TracksListeners_`] && Object.keys(this[`${i}TracksListeners_`]).forEach(e => {
                        this.el()[`${i}Tracks`].removeEventListener(e, this[`${i}TracksListeners_`][e])
                    }), this[`featuresNative${e}Tracks`] = !t, this[`${i}TracksListeners_`] = null, this.proxyNativeTracksForType_(i)
                }
                overrideNativeAudioTracks(e) {
                    this.overrideNative_("Audio", e)
                }
                overrideNativeVideoTracks(e) {
                    this.overrideNative_("Video", e)
                }
                proxyNativeTracksForType_(e) {
                    let t = iu[e],
                        i = this.el()[t.getterName],
                        s = this[t.getterName]();
                    if (!this[`featuresNative${t.capitalName}Tracks`] || !i || !i.addEventListener) return;
                    let r = {
                            change: t => {
                                let i = {
                                    type: "change",
                                    target: s,
                                    currentTarget: s,
                                    srcElement: s
                                };
                                s.trigger(i), "text" === e && this[ic.remoteText.getterName]().trigger(i)
                            },
                            addtrack(e) {
                                s.addTrack(e.track)
                            },
                            removetrack(e) {
                                s.removeTrack(e.track)
                            }
                        },
                        n = function() {
                            let e = [];
                            for (let t = 0; t < s.length; t++) {
                                let r = !1;
                                for (let e = 0; e < i.length; e++)
                                    if (i[e] === s[t]) {
                                        r = !0;
                                        break
                                    }
                                r || e.push(s[t])
                            }
                            for (; e.length;) s.removeTrack(e.shift())
                        };
                    this[t.getterName + "Listeners_"] = r, Object.keys(r).forEach(e => {
                        let t = r[e];
                        i.addEventListener(e, t), this.on("dispose", s => i.removeEventListener(e, t))
                    }), this.on("loadstart", n), this.on("dispose", e => this.off("loadstart", n))
                }
                proxyNativeTracks_() {
                    iu.names.forEach(e => {
                        this.proxyNativeTracksForType_(e)
                    })
                }
                createEl() {
                    let e = this.options_.tag;
                    if (!e || !(this.options_.playerElIngest || this.movingMediaElementInDOM)) {
                        if (e) {
                            let t = e.cloneNode(!0);
                            e.parentNode && e.parentNode.insertBefore(t, e), s6.disposeMediaElement(e), e = t
                        } else {
                            e = c().createElement("video");
                            let t = Y({}, this.options_.tag && eR(this.options_.tag));
                            e_ && !0 === this.options_.nativeControlsForTouch || delete t.controls, eM(e, Object.assign(t, {
                                id: this.options_.techId,
                                class: "vjs-tech"
                            }))
                        }
                        e.playerId = this.options_.playerId
                    }
                    void 0 !== this.options_.preload && eB(e, "preload", this.options_.preload), void 0 !== this.options_.disablePictureInPicture && (e.disablePictureInPicture = this.options_.disablePictureInPicture);
                    let t = ["loop", "muted", "playsinline", "autoplay"];
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i],
                            r = this.options_[s];
                        void 0 !== r && (r ? eB(e, s, s) : eN(e, s), e[s] = r)
                    }
                    return e
                }
                handleLateInit_(e) {
                    if (0 === e.networkState || 3 === e.networkState) return;
                    if (0 === e.readyState) {
                        let e = !1,
                            t = function() {
                                e = !0
                            };
                        this.on("loadstart", t);
                        let i = function() {
                            e || this.trigger("loadstart")
                        };
                        this.on("loadedmetadata", i), this.ready(function() {
                            this.off("loadstart", t), this.off("loadedmetadata", i), e || this.trigger("loadstart")
                        });
                        return
                    }
                    let t = ["loadstart"];
                    t.push("loadedmetadata"), e.readyState >= 2 && t.push("loadeddata"), e.readyState >= 3 && t.push("canplay"), e.readyState >= 4 && t.push("canplaythrough"), this.ready(function() {
                        t.forEach(function(e) {
                            this.trigger(e)
                        }, this)
                    })
                }
                setScrubbing(e) {
                    this.isScrubbing_ = e
                }
                scrubbing() {
                    return this.isScrubbing_
                }
                setCurrentTime(e) {
                    try {
                        this.isScrubbing_ && this.el_.fastSeek && eT ? this.el_.fastSeek(e) : this.el_.currentTime = e
                    } catch (e) {
                        q(e, "Video is not ready. (Video.js)")
                    }
                }
                duration() {
                    if (this.el_.duration === 1 / 0 && ei && ea && 0 === this.el_.currentTime) {
                        let e = () => {
                            this.el_.currentTime > 0 && (this.el_.duration === 1 / 0 && this.trigger("durationchange"), this.off("timeupdate", e))
                        };
                        return this.on("timeupdate", e), NaN
                    }
                    return this.el_.duration || NaN
                }
                width() {
                    return this.el_.offsetWidth
                }
                height() {
                    return this.el_.offsetHeight
                }
                proxyWebkitFullscreen_() {
                    if (!("webkitDisplayingFullscreen" in this.el_)) return;
                    let e = function() {
                            this.trigger("fullscreenchange", {
                                isFullscreen: !1
                            }), this.el_.controls && !this.options_.nativeControlsForTouch && this.controls() && (this.el_.controls = !1)
                        },
                        t = function() {
                            "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", e), this.trigger("fullscreenchange", {
                                isFullscreen: !0,
                                nativeIOSFullscreen: !0
                            }))
                        };
                    this.on("webkitbeginfullscreen", t), this.on("dispose", () => {
                        this.off("webkitbeginfullscreen", t), this.off("webkitendfullscreen", e)
                    })
                }
                supportsFullScreen() {
                    return "function" == typeof this.el_.webkitEnterFullScreen
                }
                enterFullScreen() {
                    let e = this.el_;
                    if (e.paused && e.networkState <= e.HAVE_METADATA) tz(this.el_.play()), this.setTimeout(function() {
                        e.pause();
                        try {
                            e.webkitEnterFullScreen()
                        } catch (e) {
                            this.trigger("fullscreenerror", e)
                        }
                    }, 0);
                    else try {
                        e.webkitEnterFullScreen()
                    } catch (e) {
                        this.trigger("fullscreenerror", e)
                    }
                }
                exitFullScreen() {
                    if (!this.el_.webkitDisplayingFullscreen) {
                        this.trigger("fullscreenerror", Error("The video is not fullscreen"));
                        return
                    }
                    this.el_.webkitExitFullScreen()
                }
                requestPictureInPicture() {
                    return this.el_.requestPictureInPicture()
                }
                requestVideoFrameCallback(e) {
                    return this.featuresVideoFrameCallback && !this.el_.webkitKeys ? this.el_.requestVideoFrameCallback(e) : super.requestVideoFrameCallback(e)
                }
                cancelVideoFrameCallback(e) {
                    this.featuresVideoFrameCallback && !this.el_.webkitKeys ? this.el_.cancelVideoFrameCallback(e) : super.cancelVideoFrameCallback(e)
                }
                src(e) {
                    if (void 0 === e) return this.el_.src;
                    this.setSrc(e)
                }
                reset() {
                    s6.resetMediaElement(this.el_)
                }
                currentSrc() {
                    return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
                }
                setControls(e) {
                    this.el_.controls = !!e
                }
                addTextTrack(e, t, i) {
                    return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, t, i) : super.addTextTrack(e, t, i)
                }
                createRemoteTextTrack(e) {
                    if (!this.featuresNativeTextTracks) return super.createRemoteTextTrack(e);
                    let t = c().createElement("track");
                    return e.kind && (t.kind = e.kind), e.label && (t.label = e.label), (e.language || e.srclang) && (t.srclang = e.language || e.srclang), e.default && (t.default = e.default), e.id && (t.id = e.id), e.src && (t.src = e.src), t
                }
                addRemoteTextTrack(e, t) {
                    let i = super.addRemoteTextTrack(e, t);
                    return this.featuresNativeTextTracks && this.el().appendChild(i), i
                }
                removeRemoteTextTrack(e) {
                    if (super.removeRemoteTextTrack(e), this.featuresNativeTextTracks) {
                        let t = this.$$("track"),
                            i = t.length;
                        for (; i--;)(e === t[i] || e === t[i].track) && this.el().removeChild(t[i])
                    }
                }
                getVideoPlaybackQuality() {
                    if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
                    let e = {};
                    return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount, e.totalVideoFrames = this.el().webkitDecodedFrameCount), d().performance && (e.creationTime = d().performance.now()), e
                }
            }
            J(s6, "TEST_VID", function() {
                if (!ek()) return;
                let e = c().createElement("video"),
                    t = c().createElement("track");
                return t.kind = "captions", t.srclang = "en", t.label = "English", e.appendChild(t), e
            }), s6.isSupported = function() {
                try {
                    s6.TEST_VID.volume = .5
                } catch (e) {
                    return !1
                }
                return !!(s6.TEST_VID && s6.TEST_VID.canPlayType)
            }, s6.canPlayType = function(e) {
                return s6.TEST_VID.canPlayType(e)
            }, s6.canPlaySource = function(e, t) {
                return s6.canPlayType(e.type)
            }, s6.canControlVolume = function() {
                try {
                    let e = s6.TEST_VID.volume;
                    s6.TEST_VID.volume = e / 2 + .1;
                    let t = e !== s6.TEST_VID.volume;
                    if (t && ev) return d().setTimeout(() => {
                        s6 && s6.prototype && (s6.prototype.featuresVolumeControl = e !== s6.TEST_VID.volume)
                    }), !1;
                    return t
                } catch (e) {
                    return !1
                }
            }, s6.canMuteVolume = function() {
                try {
                    let e = s6.TEST_VID.muted;
                    return s6.TEST_VID.muted = !e, s6.TEST_VID.muted ? eB(s6.TEST_VID, "muted", "muted") : eN(s6.TEST_VID, "muted", "muted"), e !== s6.TEST_VID.muted
                } catch (e) {
                    return !1
                }
            }, s6.canControlPlaybackRate = function() {
                if (ei && ea && el < 58) return !1;
                try {
                    let e = s6.TEST_VID.playbackRate;
                    return s6.TEST_VID.playbackRate = e / 2 + .1, e !== s6.TEST_VID.playbackRate
                } catch (e) {
                    return !1
                }
            }, s6.canOverrideAttributes = function() {
                try {
                    let e = () => {};
                    Object.defineProperty(c().createElement("video"), "src", {
                        get: e,
                        set: e
                    }), Object.defineProperty(c().createElement("audio"), "src", {
                        get: e,
                        set: e
                    }), Object.defineProperty(c().createElement("video"), "innerHTML", {
                        get: e,
                        set: e
                    }), Object.defineProperty(c().createElement("audio"), "innerHTML", {
                        get: e,
                        set: e
                    })
                } catch (e) {
                    return !1
                }
                return !0
            }, s6.supportsNativeTextTracks = function() {
                return eT || ev && ea
            }, s6.supportsNativeVideoTracks = function() {
                return !!(s6.TEST_VID && s6.TEST_VID.videoTracks)
            }, s6.supportsNativeAudioTracks = function() {
                return !!(s6.TEST_VID && s6.TEST_VID.audioTracks)
            }, s6.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], [
                ["featuresMuteControl", "canMuteVolume"],
                ["featuresPlaybackRate", "canControlPlaybackRate"],
                ["featuresSourceset", "canOverrideAttributes"],
                ["featuresNativeTextTracks", "supportsNativeTextTracks"],
                ["featuresNativeVideoTracks", "supportsNativeVideoTracks"],
                ["featuresNativeAudioTracks", "supportsNativeAudioTracks"]
            ].forEach(function([e, t]) {
                J(s6.prototype, e, () => s6[t](), !0)
            }), s6.prototype.featuresVolumeControl = s6.canControlVolume(), s6.prototype.movingMediaElementInDOM = !ev, s6.prototype.featuresFullscreenResize = !0, s6.prototype.featuresProgressEvents = !0, s6.prototype.featuresTimeupdateEvents = !0, s6.prototype.featuresVideoFrameCallback = !!(s6.TEST_VID && s6.TEST_VID.requestVideoFrameCallback), s6.disposeMediaElement = function(e) {
                if (e) {
                    for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();) e.removeChild(e.firstChild);
                    e.removeAttribute("src"), "function" == typeof e.load && function() {
                        try {
                            e.load()
                        } catch (e) {}
                    }()
                }
            }, s6.resetMediaElement = function(e) {
                if (!e) return;
                let t = e.querySelectorAll("source"),
                    i = t.length;
                for (; i--;) e.removeChild(t[i]);
                e.removeAttribute("src"), "function" == typeof e.load && function() {
                    try {
                        e.load()
                    } catch (e) {}
                }()
            }, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function(e) {
                s6.prototype[e] = function() {
                    return this.el_[e] || this.el_.hasAttribute(e)
                }
            }), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function(e) {
                s6.prototype["set" + tP(e)] = function(t) {
                    this.el_[e] = t, t ? this.el_.setAttribute(e, e) : this.el_.removeAttribute(e)
                }
            }), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "played", "networkState", "readyState", "videoWidth", "videoHeight", "crossOrigin"].forEach(function(e) {
                s6.prototype[e] = function() {
                    return this.el_[e]
                }
            }), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "crossOrigin"].forEach(function(e) {
                s6.prototype["set" + tP(e)] = function(t) {
                    this.el_[e] = t
                }
            }), ["pause", "load", "play"].forEach(function(e) {
                s6.prototype[e] = function() {
                    return this.el_[e]()
                }
            }), im.withSourceHandlers(s6), s6.nativeSourceHandler = {}, s6.nativeSourceHandler.canPlayType = function(e) {
                try {
                    return s6.TEST_VID.canPlayType(e)
                } catch (e) {
                    return ""
                }
            }, s6.nativeSourceHandler.canHandleSource = function(e, t) {
                if (e.type) return s6.nativeSourceHandler.canPlayType(e.type);
                if (e.src) {
                    let t = it(e.src);
                    return s6.nativeSourceHandler.canPlayType(`video/${t}`)
                }
                return ""
            }, s6.nativeSourceHandler.handleSource = function(e, t, i) {
                t.setSrc(e.src)
            }, s6.nativeSourceHandler.dispose = function() {}, s6.registerSourceHandler(s6.nativeSourceHandler), im.registerTech("Html5", s6);
            let s7 = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"],
                s9 = {
                    canplay: "CanPlay",
                    canplaythrough: "CanPlayThrough",
                    playing: "Playing",
                    seeked: "Seeked"
                },
                re = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"],
                rt = {};
            re.forEach(e => {
                let t = "x" === e.charAt(0) ? `x-${e.substring(1)}` : e;
                rt[e] = `vjs-layout-${t}`
            });
            let ri = {
                tiny: 210,
                xsmall: 320,
                small: 425,
                medium: 768,
                large: 1440,
                xlarge: 2560,
                huge: 1 / 0
            };
            class rs extends tD {
                constructor(e, t, i) {
                    if (e.id = e.id || t.id || `vjs_video_${e7++}`, (t = Object.assign(rs.getTagSettings(e), t)).initChildren = !1, t.createEl = !1, t.evented = !1, t.reportTouchActivity = !1, !t.language) {
                        let i = e.closest("[lang]");
                        i && (t.language = i.getAttribute("lang"))
                    }
                    if (super(null, t, i), this.boundDocumentFullscreenChange_ = e => this.documentFullscreenChange_(e), this.boundFullWindowOnEscKey_ = e => this.fullWindowOnEscKey(e), this.boundUpdateStyleEl_ = e => this.updateStyleEl_(e), this.boundApplyInitTime_ = e => this.applyInitTime_(e), this.boundUpdateCurrentBreakpoint_ = e => this.updateCurrentBreakpoint_(e), this.boundHandleTechClick_ = e => this.handleTechClick_(e), this.boundHandleTechDoubleClick_ = e => this.handleTechDoubleClick_(e), this.boundHandleTechTouchStart_ = e => this.handleTechTouchStart_(e), this.boundHandleTechTouchMove_ = e => this.handleTechTouchMove_(e), this.boundHandleTechTouchEnd_ = e => this.handleTechTouchEnd_(e), this.boundHandleTechTap_ = e => this.handleTechTap_(e), this.isFullscreen_ = !1, this.log = H(this.id_), this.fsApi_ = B, this.isPosterFromTech_ = !1, this.queuedCallbacks_ = [], this.isReady_ = !1, this.hasStarted_ = !1, this.userActive_ = !1, this.debugEnabled_ = !1, this.audioOnlyMode_ = !1, this.audioPosterMode_ = !1, this.audioOnlyCache_ = {
                            playerHeight: null,
                            hiddenChildren: []
                        }, !this.options_ || !this.options_.techOrder || !this.options_.techOrder.length) throw Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                    if (this.tag = e, this.tagAttributes = e && eR(e), this.language(this.options_.language), t.languages) {
                        let e = {};
                        Object.getOwnPropertyNames(t.languages).forEach(function(i) {
                            e[i.toLowerCase()] = t.languages[i]
                        }), this.languages_ = e
                    } else this.languages_ = rs.prototype.options_.languages;
                    this.resetCache_(), this.poster_ = t.poster || "", this.controls_ = !!t.controls, e.controls = !1, e.removeAttribute("controls"), this.changingSrc_ = !1, this.playCallbacks_ = [], this.playTerminatedQueue_ = [], e.hasAttribute("autoplay") ? this.autoplay(!0) : this.autoplay(this.options_.autoplay), t.plugins && Object.keys(t.plugins).forEach(e => {
                        if ("function" != typeof this[e]) throw Error(`plugin "${e}" does not exist`)
                    }), this.scrubbing_ = !1, this.el_ = this.createEl(), tE(this, {
                        eventBusKey: "el_"
                    }), this.fsApi_.requestFullscreen && (tr(c(), this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), this.on(this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_)), this.fluid_ && this.on(["playerreset", "resize"], this.boundUpdateStyleEl_);
                    let s = Y(this.options_);
                    if (t.plugins && Object.keys(t.plugins).forEach(e => {
                            this[e](t.plugins[e])
                        }), t.debug && this.debug(!0), this.options_.playerOptions = s, this.middleware_ = [], this.playbackRates(t.playbackRates), t.experimentalSvgIcons) {
                        let e = new(d()).DOMParser().parseFromString('<svg xmlns="http://www.w3.org/2000/svg">\n  <defs>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-play">\n      <path d="M16 10v28l22-14z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-pause">\n      <path d="M12 38h8V10h-8v28zm16-28v28h8V10h-8z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-audio">\n      <path d="M24 2C14.06 2 6 10.06 6 20v14c0 3.31 2.69 6 6 6h6V24h-8v-4c0-7.73 6.27-14 14-14s14 6.27 14 14v4h-8v16h6c3.31 0 6-2.69 6-6V20c0-9.94-8.06-18-18-18z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-captions">\n      <path d="M38 8H10c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM22 22h-3v-1h-4v6h4v-1h3v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2zm14 0h-3v-1h-4v6h4v-1h3v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-subtitles">\n      <path d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-fullscreen-enter">\n      <path d="M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4H10v10zm24 14h-6v4h10V28h-4v6zm-6-24v4h6v6h4V10H28z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-fullscreen-exit">\n      <path d="M10 32h6v6h4V28H10v4zm6-16h-6v4h10V10h-4v6zm12 22h4v-6h6v-4H28v10zm4-22v-6h-4v10h10v-4h-6z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-play-circle">\n      <path d="M20 33l12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-mute">\n      <path d="M33 24c0-3.53-2.04-6.58-5-8.05v4.42l4.91 4.91c.06-.42.09-.85.09-1.28zm5 0c0 1.88-.41 3.65-1.08 5.28l3.03 3.03C41.25 29.82 42 27 42 24c0-8.56-5.99-15.72-14-17.54v4.13c5.78 1.72 10 7.07 10 13.41zM8.55 6L6 8.55 15.45 18H6v12h8l10 10V26.55l8.51 8.51c-1.34 1.03-2.85 1.86-4.51 2.36v4.13a17.94 17.94 0 0 0 7.37-3.62L39.45 42 42 39.45l-18-18L8.55 6zM24 8l-4.18 4.18L24 16.36V8z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-low">\n      <path d="M14 18v12h8l10 10V8L22 18h-8z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-medium">\n      <path d="M37 24c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zm-27-6v12h8l10 10V8L18 18h-8z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-high">\n      <path d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-spinner">\n      <path d="M18.8 21l9.53-16.51C26.94 4.18 25.49 4 24 4c-4.8 0-9.19 1.69-12.64 4.51l7.33 12.69.11-.2zm24.28-3c-1.84-5.85-6.3-10.52-11.99-12.68L23.77 18h19.31zm.52 2H28.62l.58 1 9.53 16.5C41.99 33.94 44 29.21 44 24c0-1.37-.14-2.71-.4-4zm-26.53 4l-7.8-13.5C6.01 14.06 4 18.79 4 24c0 1.37.14 2.71.4 4h14.98l-2.31-4zM4.92 30c1.84 5.85 6.3 10.52 11.99 12.68L24.23 30H4.92zm22.54 0l-7.8 13.51c1.4.31 2.85.49 4.34.49 4.8 0 9.19-1.69 12.64-4.51L29.31 26.8 27.46 30z"></path>\n    </symbol>\n    <symbol viewBox="0 0 24 24" id="vjs-icon-hd">\n      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-chapters">\n      <path d="M6 26h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm8 8h28v-4H14v4zm0 8h28v-4H14v4zm0-20v4h28v-4H14z"></path>\n    </symbol>\n    <symbol viewBox="0 0 40 40" id="vjs-icon-downloading">\n      <path d="M18.208 36.875q-3.208-.292-5.979-1.729-2.771-1.438-4.812-3.729-2.042-2.292-3.188-5.229-1.146-2.938-1.146-6.23 0-6.583 4.334-11.416 4.333-4.834 10.833-5.5v3.166q-5.167.75-8.583 4.646Q6.25 14.75 6.25 19.958q0 5.209 3.396 9.104 3.396 3.896 8.562 4.646zM20 28.417L11.542 20l2.083-2.083 4.917 4.916v-11.25h2.916v11.25l4.875-4.916L28.417 20zm1.792 8.458v-3.167q1.833-.25 3.541-.958 1.709-.708 3.167-1.875l2.333 2.292q-1.958 1.583-4.25 2.541-2.291.959-4.791 1.167zm6.791-27.792q-1.541-1.125-3.25-1.854-1.708-.729-3.541-1.021V3.042q2.5.25 4.77 1.208 2.271.958 4.271 2.5zm4.584 21.584l-2.25-2.25q1.166-1.5 1.854-3.209.687-1.708.937-3.541h3.209q-.292 2.5-1.229 4.791-.938 2.292-2.521 4.209zm.541-12.417q-.291-1.833-.958-3.562-.667-1.73-1.833-3.188l2.375-2.208q1.541 1.916 2.458 4.208.917 2.292 1.167 4.75z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download">\n      <path d="M10.8 40.55q-1.35 0-2.375-1T7.4 37.15v-7.7h3.4v7.7h26.35v-7.7h3.4v7.7q0 1.4-1 2.4t-2.4 1zM24 32.1L13.9 22.05l2.45-2.45 5.95 5.95V7.15h3.4v18.4l5.95-5.95 2.45 2.45z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download-done">\n      <path d="M9.8 40.5v-3.45h28.4v3.45zm9.2-9.05L7.4 19.85l2.45-2.35L19 26.65l19.2-19.2 2.4 2.4z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download-off">\n      <path d="M4.9 4.75L43.25 43.1 41 45.3l-4.75-4.75q-.05.05-.075.025-.025-.025-.075-.025H10.8q-1.35 0-2.375-1T7.4 37.15v-7.7h3.4v7.7h22.05l-7-7-1.85 1.8L13.9 21.9l1.85-1.85L2.7 7zm26.75 14.7l2.45 2.45-3.75 3.8-2.45-2.5zM25.7 7.15V21.1l-3.4-3.45V7.15z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-share">\n      <path d="M36 32.17c-1.52 0-2.89.59-3.93 1.54L17.82 25.4c.11-.45.18-.92.18-1.4s-.07-.95-.18-1.4l14.1-8.23c1.07 1 2.5 1.62 4.08 1.62 3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6c0 .48.07.95.18 1.4l-14.1 8.23c-1.07-1-2.5-1.62-4.08-1.62-3.31 0-6 2.69-6 6s2.69 6 6 6c1.58 0 3.01-.62 4.08-1.62l14.25 8.31c-.1.42-.16.86-.16 1.31A5.83 5.83 0 1 0 36 32.17z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-cog">\n      <path d="M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97L29 4.84c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3a14.8 14.8 0 0 0-3.38 1.97L9.9 10.1a1 1 0 0 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31C9.06 22.69 9 23.34 9 24s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3a14.8 14.8 0 0 0 3.38-1.97l4.98 2.01a1 1 0 0 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zM24 31c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-square">\n      <path d="M36 8H12c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H12V12h24v24z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-circle">\n      <circle cx="24" cy="24" r="20"></circle>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-circle-outline">\n      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-circle-inner-circle">\n      <path d="M24 4C12.97 4 4 12.97 4 24s8.97 20 20 20 20-8.97 20-20S35.03 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm6-16c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6 6 2.69 6 6z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-cancel">\n      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 27.17L31.17 34 24 26.83 16.83 34 14 31.17 21.17 24 14 16.83 16.83 14 24 21.17 31.17 14 34 16.83 26.83 24 34 31.17z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-replay">\n      <path d="M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-repeat">\n      <path d="M14 14h20v6l8-8-8-8v6H10v12h4v-8zm20 20H14v-6l-8 8 8 8v-6h24V26h-4v8z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-5">\n      <path d="M17.689 98l-8.697 8.696 8.697 8.697 2.486-2.485-4.32-4.319h1.302c4.93 0 9.071 1.722 12.424 5.165 3.352 3.443 5.029 7.638 5.029 12.584h3.55c0-2.958-.553-5.73-1.658-8.313-1.104-2.583-2.622-4.841-4.555-6.774-1.932-1.932-4.19-3.45-6.773-4.555-2.584-1.104-5.355-1.657-8.313-1.657H15.5l4.615-4.615zm-8.08 21.659v13.861h11.357v5.008H9.609V143h12.7c.834 0 1.55-.298 2.146-.894.596-.597.895-1.31.895-2.145v-7.781c0-.835-.299-1.55-.895-2.147a2.929 2.929 0 0 0-2.147-.894h-8.227v-5.096H25.35v-4.384z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-10">\n      <path d="M42.315 125.63c0-4.997-1.694-9.235-5.08-12.713-3.388-3.479-7.571-5.218-12.552-5.218h-1.315l4.363 4.363-2.51 2.51-8.787-8.786L25.221 97l2.45 2.45-4.662 4.663h1.375c2.988 0 5.788.557 8.397 1.673 2.61 1.116 4.892 2.65 6.844 4.602 1.953 1.953 3.487 4.234 4.602 6.844 1.116 2.61 1.674 5.41 1.674 8.398zM8.183 142v-19.657H3.176V117.8h9.643V142zm13.63 0c-1.156 0-2.127-.393-2.912-1.178-.778-.778-1.168-1.746-1.168-2.902v-16.04c0-1.156.393-2.127 1.178-2.912.779-.779 1.746-1.168 2.902-1.168h7.696c1.156 0 2.126.392 2.911 1.177.779.78 1.168 1.747 1.168 2.903v16.04c0 1.156-.392 2.127-1.177 2.912-.779.779-1.746 1.168-2.902 1.168zm.556-4.636h6.583v-15.02H22.37z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-30">\n      <path d="M26.047 97l-8.733 8.732 8.733 8.733 2.496-2.494-4.336-4.338h1.307c4.95 0 9.108 1.73 12.474 5.187 3.367 3.458 5.051 7.668 5.051 12.635h3.565c0-2.97-.556-5.751-1.665-8.346-1.109-2.594-2.633-4.862-4.574-6.802-1.94-1.941-4.208-3.466-6.803-4.575-2.594-1.109-5.375-1.664-8.345-1.664H23.85l4.634-4.634zM2.555 117.531v4.688h10.297v5.25H5.873v4.687h6.979v5.156H2.555V142H13.36c1.061 0 1.95-.395 2.668-1.186.718-.79 1.076-1.772 1.076-2.94v-16.218c0-1.168-.358-2.149-1.076-2.94-.717-.79-1.607-1.185-2.668-1.185zm22.482.14c-1.149 0-2.11.39-2.885 1.165-.78.78-1.172 1.744-1.172 2.893v15.943c0 1.149.388 2.11 1.163 2.885.78.78 1.745 1.172 2.894 1.172h7.649c1.148 0 2.11-.388 2.884-1.163.78-.78 1.17-1.745 1.17-2.894v-15.943c0-1.15-.386-2.111-1.16-2.885-.78-.78-1.746-1.172-2.894-1.172zm.553 4.518h6.545v14.93H25.59z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-5">\n      <path d="M29.508 97l-2.431 2.43 4.625 4.625h-1.364c-2.965 0-5.742.554-8.332 1.66-2.589 1.107-4.851 2.629-6.788 4.566-1.937 1.937-3.458 4.2-4.565 6.788-1.107 2.59-1.66 5.367-1.66 8.331h3.557c0-4.957 1.68-9.16 5.04-12.611 3.36-3.45 7.51-5.177 12.451-5.177h1.304l-4.326 4.33 2.49 2.49 8.715-8.716zm-9.783 21.61v13.89h11.382v5.018H19.725V142h12.727a2.93 2.93 0 0 0 2.15-.896 2.93 2.93 0 0 0 .896-2.15v-7.798c0-.837-.299-1.554-.896-2.152a2.93 2.93 0 0 0-2.15-.896h-8.245V123h11.29v-4.392z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-10">\n      <path d="M23.119 97l-2.386 2.383 4.538 4.538h-1.339c-2.908 0-5.633.543-8.173 1.63-2.54 1.085-4.76 2.577-6.66 4.478-1.9 1.9-3.392 4.12-4.478 6.66-1.085 2.54-1.629 5.264-1.629 8.172h3.49c0-4.863 1.648-8.986 4.944-12.372 3.297-3.385 7.368-5.078 12.216-5.078h1.279l-4.245 4.247 2.443 2.442 8.55-8.55zm-9.52 21.45v4.42h4.871V142h4.513v-23.55zm18.136 0c-1.125 0-2.066.377-2.824 1.135-.764.764-1.148 1.709-1.148 2.834v15.612c0 1.124.38 2.066 1.139 2.824.764.764 1.708 1.145 2.833 1.145h7.489c1.125 0 2.066-.378 2.824-1.136.764-.764 1.145-1.709 1.145-2.833v-15.612c0-1.125-.378-2.067-1.136-2.825-.764-.764-1.708-1.145-2.833-1.145zm.54 4.42h6.408v14.617h-6.407z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-30">\n      <path d="M25.549 97l-2.437 2.434 4.634 4.635H26.38c-2.97 0-5.753.555-8.347 1.664-2.594 1.109-4.861 2.633-6.802 4.574-1.94 1.94-3.465 4.207-4.574 6.802-1.109 2.594-1.664 5.377-1.664 8.347h3.565c0-4.967 1.683-9.178 5.05-12.636 3.366-3.458 7.525-5.187 12.475-5.187h1.307l-4.335 4.338 2.495 2.494 8.732-8.732zm-11.553 20.53v4.689h10.297v5.249h-6.978v4.688h6.978v5.156H13.996V142h10.808c1.06 0 1.948-.395 2.666-1.186.718-.79 1.077-1.771 1.077-2.94v-16.217c0-1.169-.36-2.15-1.077-2.94-.718-.79-1.605-1.186-2.666-1.186zm21.174.168c-1.149 0-2.11.389-2.884 1.163-.78.78-1.172 1.745-1.172 2.894v15.942c0 1.15.388 2.11 1.162 2.885.78.78 1.745 1.17 2.894 1.17h7.649c1.149 0 2.11-.386 2.885-1.16.78-.78 1.17-1.746 1.17-2.895v-15.942c0-1.15-.387-2.11-1.161-2.885-.78-.78-1.745-1.172-2.894-1.172zm.552 4.516h6.542v14.931h-6.542z"></path>\n    </symbol>\n    <symbol viewBox="0 0 512 512" id="vjs-icon-audio-description">\n      <g fill-rule="evenodd"><path d="M227.29 381.351V162.993c50.38-1.017 89.108-3.028 117.631 17.126 27.374 19.342 48.734 56.965 44.89 105.325-4.067 51.155-41.335 94.139-89.776 98.475-24.085 2.155-71.972 0-71.972 0s-.84-1.352-.773-2.568m48.755-54.804c31.43 1.26 53.208-16.633 56.495-45.386 4.403-38.51-21.188-63.552-58.041-60.796v103.612c-.036 1.466.575 2.22 1.546 2.57"></path><path d="M383.78 381.328c13.336 3.71 17.387-11.06 23.215-21.408 12.722-22.571 22.294-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.51c-.587 3.874 2.226 7.315 3.865 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894"></path><path d="M425.154 381.328c13.336 3.71 17.384-11.061 23.215-21.408 12.721-22.571 22.291-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.511c-.586 3.874 2.226 7.315 3.866 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894"></path><path d="M466.26 381.328c13.337 3.71 17.385-11.061 23.216-21.408 12.722-22.571 22.292-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.51c-.587 3.874 2.225 7.315 3.865 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894M4.477 383.005H72.58l18.573-28.484 64.169-.135s.065 19.413.065 28.62h48.756V160.307h-58.816c-5.653 9.537-140.85 222.697-140.85 222.697zm152.667-145.282v71.158l-40.453-.27 40.453-70.888z"></path></g>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-next-item">\n      <path d="M12 36l17-12-17-12v24zm20-24v24h4V12h-4z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-previous-item">\n      <path d="M12 12h4v24h-4zm7 12l17 12V12z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-shuffle">\n      <path d="M21.17 18.34L10.83 8 8 10.83l10.34 10.34 2.83-2.83zM29 8l4.09 4.09L8 37.17 10.83 40l25.09-25.09L40 19V8H29zm.66 18.83l-2.83 2.83 6.26 6.26L29 40h11V29l-4.09 4.09-6.25-6.26z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-cast">\n      <path d="M42 6H6c-2.21 0-4 1.79-4 4v6h4v-6h36v28H28v4h14c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM2 36v6h6c0-3.31-2.69-6-6-6zm0-8v4c5.52 0 10 4.48 10 10h4c0-7.73-6.27-14-14-14zm0-8v4c9.94 0 18 8.06 18 18h4c0-12.15-9.85-22-22-22z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-picture-in-picture-enter">\n      <path d="M38 22H22v11.99h16V22zm8 16V9.96C46 7.76 44.2 6 42 6H6C3.8 6 2 7.76 2 9.96V38c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4zm-4 .04H6V9.94h36v28.1z"></path>\n    </symbol>\n    <symbol viewBox="0 0 22 18" id="vjs-icon-picture-in-picture-exit">\n      <path d="M18 4H4v10h14V4zm4 12V1.98C22 .88 21.1 0 20 0H2C.9 0 0 .88 0 1.98V16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H2V1.97h18v14.05z"></path>\n      <path fill="none" d="M-1-3h24v24H-1z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-facebook">\n      <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759H734V905H479V609h255V391q0-186 104-288.5T1115 0q147 0 228 12z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-linkedin">\n      <path d="M477 625v991H147V625h330zm21-306q1 73-50.5 122T312 490h-2q-82 0-132-49t-50-122q0-74 51.5-122.5T314 148t133 48.5T498 319zm1166 729v568h-329v-530q0-105-40.5-164.5T1168 862q-63 0-105.5 34.5T999 982q-11 30-11 81v553H659q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5T1285 602q171 0 275 113.5t104 332.5z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-twitter">\n      <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5T1369.5 1125 1185 1335.5t-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5T285 1033q33 5 61 5 43 0 85-11-112-23-185.5-111.5T172 710v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5T884 653q-8-38-8-74 0-134 94.5-228.5T1199 256q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-tumblr">\n      <path d="M1328 1329l80 237q-23 35-111 66t-177 32q-104 2-190.5-26T787 1564t-95-106-55.5-120-16.5-118V676H452V461q72-26 129-69.5t91-90 58-102 34-99T779 12q1-5 4.5-8.5T791 0h244v424h333v252h-334v518q0 30 6.5 56t22.5 52.5 49.5 41.5 81.5 14q78-2 134-29z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-pinterest">\n      <path d="M1664 896q0 209-103 385.5T1281.5 1561 896 1664q-111 0-218-32 59-93 78-164 9-34 54-211 20 39 73 67.5t114 28.5q121 0 216-68.5t147-188.5 52-270q0-114-59.5-214T1180 449t-255-63q-105 0-196 29t-154.5 77-109 110.5-67 129.5T377 866q0 104 40 183t117 111q30 12 38-20 2-7 8-31t8-30q6-23-11-43-51-61-51-151 0-151 104.5-259.5T904 517q151 0 235.5 82t84.5 213q0 170-68.5 289T980 1220q-61 0-98-43.5T859 1072q8-35 26.5-93.5t30-103T927 800q0-50-27-83t-77-33q-62 0-105 57t-43 142q0 73 25 122l-99 418q-17 70-13 177-206-91-333-281T128 896q0-209 103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z"></path>\n    </symbol>\n  </defs>\n</svg>', "image/svg+xml");
                        if (e.querySelector("parsererror")) q.warn("Failed to load SVG Icons. Falling back to Font Icons."), this.options_.experimentalSvgIcons = null;
                        else {
                            let t = e.documentElement;
                            t.style.display = "none", this.el_.appendChild(t), this.addClass("vjs-svg-icons-enabled")
                        }
                    }
                    this.initChildren(), this.isAudio("audio" === e.nodeName.toLowerCase()), this.controls() ? this.addClass("vjs-controls-enabled") : this.addClass("vjs-controls-disabled"), this.el_.setAttribute("role", "region"), this.isAudio() ? this.el_.setAttribute("aria-label", this.localize("Audio Player")) : this.el_.setAttribute("aria-label", this.localize("Video Player")), this.isAudio() && this.addClass("vjs-audio"), e_ && this.addClass("vjs-touch-enabled"), ev || this.addClass("vjs-workinghover"), rs.players[this.id_] = this;
                    let r = O.split(".")[0];
                    this.addClass(`vjs-v${r}`), this.userActive(!0), this.reportUserActivity(), this.one("play", e => this.listenForUserActivity_(e)), this.on("keydown", e => this.handleKeyDown(e)), this.on("languagechange", e => this.handleLanguagechange(e)), this.breakpoints(this.options_.breakpoints), this.responsive(this.options_.responsive), this.on("ready", () => {
                        this.audioPosterMode(this.options_.audioPosterMode), this.audioOnlyMode(this.options_.audioOnlyMode)
                    })
                }
                dispose() {
                    this.trigger("dispose"), this.off("dispose"), tn(c(), this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), tn(c(), "keydown", this.boundFullWindowOnEscKey_), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), rs.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), i_[this.id()] = null, ip.names.forEach(e => {
                        let t = this[ip[e].getterName]();
                        t && t.off && t.off()
                    }), super.dispose({
                        restoreEl: this.options_.restoreEl
                    })
                }
                createEl() {
                    let e, t = this.tag,
                        i = this.playerElIngest_ = t.parentNode && t.parentNode.hasAttribute && t.parentNode.hasAttribute("data-vjs-player"),
                        s = "video-js" === this.tag.tagName.toLowerCase();
                    i ? e = this.el_ = t.parentNode : s || (e = this.el_ = super.createEl("div"));
                    let r = eR(t);
                    if (s) {
                        for (e = this.el_ = t, t = this.tag = c().createElement("video"); e.children.length;) t.appendChild(e.firstChild);
                        eA(e, "video-js") || eL(e, "video-js"), e.appendChild(t), i = this.playerElIngest_ = e, Object.keys(e).forEach(i => {
                            try {
                                t[i] = e[i]
                            } catch (e) {}
                        })
                    }
                    t.setAttribute("tabindex", "-1"), r.tabindex = "-1", ea && eu && (t.setAttribute("role", "application"), r.role = "application"), t.removeAttribute("width"), t.removeAttribute("height"), "width" in r && delete r.width, "height" in r && delete r.height, Object.getOwnPropertyNames(r).forEach(function(i) {
                        s && "class" === i || e.setAttribute(i, r[i]), s && t.setAttribute(i, r[i])
                    }), t.playerId = t.id, t.id += "_html5_api", t.className = "vjs-tech", t.player = e.player = this, this.addClass("vjs-paused");
                    let n = ["IS_SMART_TV", "IS_TIZEN", "IS_WEBOS", "IS_ANDROID", "IS_IPAD", "IS_IPHONE"].filter(e => eb[e]).map(e => "vjs-device-" + e.substring(3).toLowerCase().replace(/\_/g, "-"));
                    if (this.addClass(...n), !0 !== d().VIDEOJS_NO_DYNAMIC_STYLE) {
                        this.styleEl_ = e5("vjs-styles-dimensions");
                        let e = eY(".vjs-styles-defaults"),
                            t = eY("head");
                        t.insertBefore(this.styleEl_, e ? e.nextSibling : t.firstChild)
                    }
                    this.fill_ = !1, this.fluid_ = !1, this.width(this.options_.width), this.height(this.options_.height), this.fill(this.options_.fill), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio), this.crossOrigin(this.options_.crossOrigin || this.options_.crossorigin);
                    let a = t.getElementsByTagName("a");
                    for (let e = 0; e < a.length; e++) {
                        let t = a.item(e);
                        eL(t, "vjs-hidden"), t.setAttribute("hidden", "hidden")
                    }
                    return t.initNetworkState_ = t.networkState, t.parentNode && !i && t.parentNode.insertBefore(e, t), eP(t, e), this.children_.unshift(t), this.el_.setAttribute("lang", this.language_), this.el_.setAttribute("translate", "no"), this.el_ = e, e
                }
                crossOrigin(e) {
                    if (void 0 === e) return this.techGet_("crossOrigin");
                    if (null !== e && "anonymous" !== e && "use-credentials" !== e) {
                        q.warn(`crossOrigin must be null,  "anonymous" or "use-credentials", given "${e}"`);
                        return
                    }
                    this.techCall_("setCrossOrigin", e), this.posterImage && this.posterImage.crossOrigin(e)
                }
                width(e) {
                    return this.dimension("width", e)
                }
                height(e) {
                    return this.dimension("height", e)
                }
                dimension(e, t) {
                    let i = e + "_";
                    if (void 0 === t) return this[i] || 0;
                    if ("" === t || "auto" === t) {
                        this[i] = void 0, this.updateStyleEl_();
                        return
                    }
                    let s = parseFloat(t);
                    if (isNaN(s)) {
                        q.error(`Improper value "${t}" supplied for for ${e}`);
                        return
                    }
                    this[i] = s, this.updateStyleEl_()
                }
                fluid(e) {
                    if (void 0 === e) return !!this.fluid_;
                    this.fluid_ = !!e, tf(this) && this.off(["playerreset", "resize"], this.boundUpdateStyleEl_), e ? (this.addClass("vjs-fluid"), this.fill(!1), t_(this, () => {
                        this.on(["playerreset", "resize"], this.boundUpdateStyleEl_)
                    })) : this.removeClass("vjs-fluid"), this.updateStyleEl_()
                }
                fill(e) {
                    if (void 0 === e) return !!this.fill_;
                    this.fill_ = !!e, e ? (this.addClass("vjs-fill"), this.fluid(!1)) : this.removeClass("vjs-fill")
                }
                aspectRatio(e) {
                    if (void 0 === e) return this.aspectRatio_;
                    if (!/^\d+\:\d+$/.test(e)) throw Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                    this.aspectRatio_ = e, this.fluid(!0), this.updateStyleEl_()
                }
                updateStyleEl_() {
                    let e, t, i;
                    if (!0 === d().VIDEOJS_NO_DYNAMIC_STYLE) {
                        let e = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                            t = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                            i = this.tech_ && this.tech_.el();
                        i && (e >= 0 && (i.width = e), t >= 0 && (i.height = t));
                        return
                    }
                    let s = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"),
                        r = s[1] / s[0];
                    e = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / r : this.videoWidth() || 300, t = void 0 !== this.height_ ? this.height_ : e * r, i = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(i), e3(this.styleEl_, `
      .${i} {
        width: ${e}px;
        height: ${t}px;
      }

      .${i}.vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: ${100*r}%;
      }
    `)
                }
                loadTech_(e, t) {
                    var i, s;
                    this.tech_ && this.unloadTech_();
                    let r = tP(e),
                        n = e.charAt(0).toLowerCase() + e.slice(1);
                    "Html5" !== r && this.tag && (im.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = r, this.isReady_ = !1;
                    let a = this.autoplay();
                    ("string" == typeof this.autoplay() || !0 === this.autoplay() && this.options_.normalizeAutoplay) && (a = !1);
                    let o = {
                        source: t,
                        autoplay: a,
                        nativeControlsForTouch: this.options_.nativeControlsForTouch,
                        playerId: this.id(),
                        techId: `${this.id()}_${n}_api`,
                        playsinline: this.options_.playsinline,
                        preload: this.options_.preload,
                        loop: this.options_.loop,
                        disablePictureInPicture: this.options_.disablePictureInPicture,
                        muted: this.options_.muted,
                        poster: this.poster(),
                        language: this.language(),
                        playerElIngest: this.playerElIngest_ || !1,
                        "vtt.js": this.options_["vtt.js"],
                        canOverridePoster: !!this.options_.techCanOverridePoster,
                        enableSourceset: this.options_.enableSourceset
                    };
                    ip.names.forEach(e => {
                        let t = ip[e];
                        o[t.getterName] = this[t.privateName]
                    }), Object.assign(o, this.options_[r]), Object.assign(o, this.options_[n]), Object.assign(o, this.options_[e.toLowerCase()]), this.tag && (o.tag = this.tag), t && t.src === this.cache_.src && this.cache_.currentTime > 0 && (o.startTime = this.cache_.currentTime);
                    let l = im.getTech(e);
                    if (!l) throw Error(`No Tech named '${r}' exists! '${r}' should be registered using videojs.registerTech()'`);
                    this.tech_ = new l(o), this.tech_.ready(td(this, this.handleTechReady_), !0), i = this.textTracksJson_ || [], s = this.tech_, i.forEach(function(e) {
                        let t = s.addRemoteTextTrack(e).track;
                        !e.src && e.cues && e.cues.forEach(e => t.addCue(e))
                    }), s.textTracks(), s7.forEach(e => {
                        this.on(this.tech_, e, t => this[`handleTech${tP(e)}_`](t))
                    }), Object.keys(s9).forEach(e => {
                        this.on(this.tech_, e, t => {
                            if (0 === this.tech_.playbackRate() && this.tech_.seeking()) {
                                this.queuedCallbacks_.push({
                                    callback: this[`handleTech${s9[e]}_`].bind(this),
                                    event: t
                                });
                                return
                            }
                            this[`handleTech${s9[e]}_`](t)
                        })
                    }), this.on(this.tech_, "loadstart", e => this.handleTechLoadStart_(e)), this.on(this.tech_, "sourceset", e => this.handleTechSourceset_(e)), this.on(this.tech_, "waiting", e => this.handleTechWaiting_(e)), this.on(this.tech_, "ended", e => this.handleTechEnded_(e)), this.on(this.tech_, "seeking", e => this.handleTechSeeking_(e)), this.on(this.tech_, "play", e => this.handleTechPlay_(e)), this.on(this.tech_, "pause", e => this.handleTechPause_(e)), this.on(this.tech_, "durationchange", e => this.handleTechDurationChange_(e)), this.on(this.tech_, "fullscreenchange", (e, t) => this.handleTechFullscreenChange_(e, t)), this.on(this.tech_, "fullscreenerror", (e, t) => this.handleTechFullscreenError_(e, t)), this.on(this.tech_, "enterpictureinpicture", e => this.handleTechEnterPictureInPicture_(e)), this.on(this.tech_, "leavepictureinpicture", e => this.handleTechLeavePictureInPicture_(e)), this.on(this.tech_, "error", e => this.handleTechError_(e)), this.on(this.tech_, "posterchange", e => this.handleTechPosterChange_(e)), this.on(this.tech_, "textdata", e => this.handleTechTextData_(e)), this.on(this.tech_, "ratechange", e => this.handleTechRateChange_(e)), this.on(this.tech_, "loadedmetadata", this.boundUpdateStyleEl_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === r && this.tag || eP(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
                }
                unloadTech_() {
                    ip.names.forEach(e => {
                        let t = ip[e];
                        this[t.privateName] = this[t.getterName]()
                    }), this.textTracksJson_ = tG(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = !1
                }
                tech(e) {
                    return void 0 === e && q.warn("Using the tech directly can be dangerous. I hope you know what you're doing.\nSee https://github.com/videojs/video.js/issues/2617 for more info.\n"), this.tech_
                }
                version() {
                    return {
                        "video.js": O
                    }
                }
                addTechControlsListeners_() {
                    this.removeTechControlsListeners_(), this.on(this.tech_, "click", this.boundHandleTechClick_), this.on(this.tech_, "dblclick", this.boundHandleTechDoubleClick_), this.on(this.tech_, "touchstart", this.boundHandleTechTouchStart_), this.on(this.tech_, "touchmove", this.boundHandleTechTouchMove_), this.on(this.tech_, "touchend", this.boundHandleTechTouchEnd_), this.on(this.tech_, "tap", this.boundHandleTechTap_)
                }
                removeTechControlsListeners_() {
                    this.off(this.tech_, "tap", this.boundHandleTechTap_), this.off(this.tech_, "touchstart", this.boundHandleTechTouchStart_), this.off(this.tech_, "touchmove", this.boundHandleTechTouchMove_), this.off(this.tech_, "touchend", this.boundHandleTechTouchEnd_), this.off(this.tech_, "click", this.boundHandleTechClick_), this.off(this.tech_, "dblclick", this.boundHandleTechDoubleClick_)
                }
                handleTechReady_() {
                    this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_()
                }
                handleTechLoadStart_() {
                    this.removeClass("vjs-ended", "vjs-seeking"), this.error(null), this.handleTechDurationChange_(), this.paused() && this.hasStarted(!1), this.trigger("loadstart"), this.manualAutoplay_(!0 === this.autoplay() && this.options_.normalizeAutoplay ? "play" : this.autoplay())
                }
                manualAutoplay_(e) {
                    let t;
                    if (!this.tech_ || "string" != typeof e) return;
                    let i = () => {
                        let e = this.muted();
                        this.muted(!0);
                        let t = () => {
                            this.muted(e)
                        };
                        this.playTerminatedQueue_.push(t);
                        let i = this.play();
                        if (tV(i)) return i.catch(e => {
                            throw t(), Error(`Rejection at manualAutoplay. Restoring muted value. ${e||""}`)
                        })
                    };
                    if ("any" !== e || this.muted() ? t = "muted" !== e || this.muted() ? this.play() : i() : tV(t = this.play()) && (t = t.catch(i)), tV(t)) return t.then(() => {
                        this.trigger({
                            type: "autoplay-success",
                            autoplay: e
                        })
                    }).catch(() => {
                        this.trigger({
                            type: "autoplay-failure",
                            autoplay: e
                        })
                    })
                }
                updateSourceCaches_(e = "") {
                    let t = e,
                        i = "";
                    "string" != typeof t && (t = e.src, i = e.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], t && !i && (i = iw(this, t)), this.cache_.source = Y({}, e, {
                        src: t,
                        type: i
                    });
                    let s = this.cache_.sources.filter(e => e.src && e.src === t),
                        r = [],
                        n = this.$$("source"),
                        a = [];
                    for (let e = 0; e < n.length; e++) {
                        let i = eR(n[e]);
                        r.push(i), i.src && i.src === t && a.push(i.src)
                    }
                    a.length && !s.length ? this.cache_.sources = r : s.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = t
                }
                handleTechSourceset_(e) {
                    if (!this.changingSrc_) {
                        let t = e => this.updateSourceCaches_(e),
                            i = this.currentSource().src,
                            s = e.src;
                        i && !/^blob:/.test(i) && /^blob:/.test(s) && (!this.lastSource_ || this.lastSource_.tech !== s && this.lastSource_.player !== i) && (t = () => {}), t(s), e.src || this.tech_.any(["sourceset", "loadstart"], e => {
                            if ("sourceset" === e.type) return;
                            let t = this.techGet_("currentSrc");
                            this.lastSource_.tech = t, this.updateSourceCaches_(t)
                        })
                    }
                    this.lastSource_ = {
                        player: this.currentSource().src,
                        tech: e.src
                    }, this.trigger({
                        src: e.src,
                        type: "sourceset"
                    })
                }
                hasStarted(e) {
                    if (void 0 === e) return this.hasStarted_;
                    e !== this.hasStarted_ && (this.hasStarted_ = e, this.hasStarted_ ? this.addClass("vjs-has-started") : this.removeClass("vjs-has-started"))
                }
                handleTechPlay_() {
                    this.removeClass("vjs-ended", "vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
                }
                handleTechRateChange_() {
                    this.tech_.playbackRate() > 0 && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach(e => e.callback(e.event)), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange")
                }
                handleTechWaiting_() {
                    this.addClass("vjs-waiting"), this.trigger("waiting");
                    let e = this.currentTime(),
                        t = () => {
                            e !== this.currentTime() && (this.removeClass("vjs-waiting"), this.off("timeupdate", t))
                        };
                    this.on("timeupdate", t)
                }
                handleTechCanPlay_() {
                    this.removeClass("vjs-waiting"), this.trigger("canplay")
                }
                handleTechCanPlayThrough_() {
                    this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
                }
                handleTechPlaying_() {
                    this.removeClass("vjs-waiting"), this.trigger("playing")
                }
                handleTechSeeking_() {
                    this.addClass("vjs-seeking"), this.trigger("seeking")
                }
                handleTechSeeked_() {
                    this.removeClass("vjs-seeking", "vjs-ended"), this.trigger("seeked")
                }
                handleTechPause_() {
                    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
                }
                handleTechEnded_() {
                    this.addClass("vjs-ended"), this.removeClass("vjs-waiting"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
                }
                handleTechDurationChange_() {
                    this.duration(this.techGet_("duration"))
                }
                handleTechClick_(e) {
                    this.controls_ && (void 0 === this.options_ || void 0 === this.options_.userActions || void 0 === this.options_.userActions.click || !1 !== this.options_.userActions.click) && (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" == typeof this.options_.userActions.click ? this.options_.userActions.click.call(this, e) : this.paused() ? tz(this.play()) : this.pause())
                }
                handleTechDoubleClick_(e) {
                    this.controls_ && (Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), t => t.contains(e.target)) || void 0 !== this.options_ && void 0 !== this.options_.userActions && void 0 !== this.options_.userActions.doubleClick && !1 === this.options_.userActions.doubleClick || (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" == typeof this.options_.userActions.doubleClick ? this.options_.userActions.doubleClick.call(this, e) : this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen()))
                }
                handleTechTap_() {
                    this.userActive(!this.userActive())
                }
                handleTechTouchStart_() {
                    this.userWasActive = this.userActive()
                }
                handleTechTouchMove_() {
                    this.userWasActive && this.reportUserActivity()
                }
                handleTechTouchEnd_(e) {
                    e.cancelable && e.preventDefault()
                }
                toggleFullscreenClass_() {
                    this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
                }
                documentFullscreenChange_(e) {
                    let t = e.target.player;
                    if (t && t !== this) return;
                    let i = this.el(),
                        s = c()[this.fsApi_.fullscreenElement] === i;
                    !s && i.matches && (s = i.matches(":" + this.fsApi_.fullscreen)), this.isFullscreen(s)
                }
                handleTechFullscreenChange_(e, t) {
                    t && (t.nativeIOSFullscreen && (this.addClass("vjs-ios-native-fs"), this.tech_.one("webkitendfullscreen", () => {
                        this.removeClass("vjs-ios-native-fs")
                    })), this.isFullscreen(t.isFullscreen))
                }
                handleTechFullscreenError_(e, t) {
                    this.trigger("fullscreenerror", t)
                }
                togglePictureInPictureClass_() {
                    this.isInPictureInPicture() ? this.addClass("vjs-picture-in-picture") : this.removeClass("vjs-picture-in-picture")
                }
                handleTechEnterPictureInPicture_(e) {
                    this.isInPictureInPicture(!0)
                }
                handleTechLeavePictureInPicture_(e) {
                    this.isInPictureInPicture(!1)
                }
                handleTechError_() {
                    let e = this.tech_.error();
                    e && this.error(e)
                }
                handleTechTextData_() {
                    let e = null;
                    arguments.length > 1 && (e = arguments[1]), this.trigger("textdata", e)
                }
                getCache() {
                    return this.cache_
                }
                resetCache_() {
                    this.cache_ = {
                        currentTime: 0,
                        initTime: 0,
                        inactivityTimeout: this.options_.inactivityTimeout,
                        duration: NaN,
                        lastVolume: 1,
                        lastPlaybackRate: this.defaultPlaybackRate(),
                        media: null,
                        src: "",
                        source: {},
                        sources: [],
                        playbackRates: [],
                        volume: 1
                    }
                }
                techCall_(e, t) {
                    this.ready(function() {
                        if (e in ib) {
                            var i;
                            return i = this.middleware_, this.tech_[e](i.reduce(ik(e), t))
                        }
                        if (e in iS) return iv(this.middleware_, this.tech_, e, t);
                        try {
                            this.tech_ && this.tech_[e](t)
                        } catch (e) {
                            throw q(e), e
                        }
                    }, !0)
                }
                techGet_(e) {
                    if (this.tech_ && this.tech_.isReady_) {
                        if (e in iT) {
                            var t, i;
                            return t = this.middleware_, i = this.tech_, t.reduceRight(ik(e), i[e]())
                        }
                        if (e in iS) return iv(this.middleware_, this.tech_, e);
                        try {
                            return this.tech_[e]()
                        } catch (t) {
                            if (void 0 === this.tech_[e]) throw q(`Video.js: ${e} method not defined for ${this.techName_} playback technology.`, t), t;
                            if ("TypeError" === t.name) throw q(`Video.js: ${e} unavailable on ${this.techName_} playback technology element.`, t), this.tech_.isReady_ = !1, t;
                            throw q(t), t
                        }
                    }
                }
                play() {
                    return new Promise(e => {
                        this.play_(e)
                    })
                }
                play_(e = tz) {
                    this.playCallbacks_.push(e);
                    let t = !!(!this.changingSrc_ && (this.src() || this.currentSrc())),
                        i = !!(eT || ev);
                    if (this.waitToPlay_ && (this.off(["ready", "loadstart"], this.waitToPlay_), this.waitToPlay_ = null), !this.isReady_ || !t) {
                        this.waitToPlay_ = e => {
                            this.play_()
                        }, this.one(["ready", "loadstart"], this.waitToPlay_), !t && i && this.load();
                        return
                    }
                    let s = this.techGet_("play");
                    i && this.hasClass("vjs-ended") && this.resetProgressBar_(), null === s ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(s)
                }
                runPlayTerminatedQueue_() {
                    let e = this.playTerminatedQueue_.slice(0);
                    this.playTerminatedQueue_ = [], e.forEach(function(e) {
                        e()
                    })
                }
                runPlayCallbacks_(e) {
                    let t = this.playCallbacks_.slice(0);
                    this.playCallbacks_ = [], this.playTerminatedQueue_ = [], t.forEach(function(t) {
                        t(e)
                    })
                }
                pause() {
                    this.techCall_("pause")
                }
                paused() {
                    return !1 !== this.techGet_("paused")
                }
                played() {
                    return this.techGet_("played") || tR(0, 0)
                }
                scrubbing(e) {
                    if (void 0 === e) return this.scrubbing_;
                    this.scrubbing_ = !!e, this.techCall_("setScrubbing", this.scrubbing_), e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
                }
                currentTime(e) {
                    if (void 0 === e) return this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime;
                    if (e < 0 && (e = 0), !this.isReady_ || this.changingSrc_ || !this.tech_ || !this.tech_.isReady_) {
                        this.cache_.initTime = e, this.off("canplay", this.boundApplyInitTime_), this.one("canplay", this.boundApplyInitTime_);
                        return
                    }
                    this.techCall_("setCurrentTime", e), this.cache_.initTime = 0, isFinite(e) && (this.cache_.currentTime = Number(e))
                }
                applyInitTime_() {
                    this.currentTime(this.cache_.initTime)
                }
                duration(e) {
                    if (void 0 === e) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
                    (e = parseFloat(e)) < 0 && (e = 1 / 0), e === this.cache_.duration || (this.cache_.duration = e, e === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), isNaN(e) || this.trigger("durationchange"))
                }
                remainingTime() {
                    return this.duration() - this.currentTime()
                }
                remainingTimeDisplay() {
                    return Math.floor(this.duration()) - Math.floor(this.currentTime())
                }
                buffered() {
                    let e = this.techGet_("buffered");
                    return e && e.length || (e = tR(0, 0)), e
                }
                seekable() {
                    let e = this.techGet_("seekable");
                    return e && e.length || (e = tR(0, 0)), e
                }
                seeking() {
                    return this.techGet_("seeking")
                }
                ended() {
                    return this.techGet_("ended")
                }
                networkState() {
                    return this.techGet_("networkState")
                }
                readyState() {
                    return this.techGet_("readyState")
                }
                bufferedPercent() {
                    return tq(this.buffered(), this.duration())
                }
                bufferedEnd() {
                    let e = this.buffered(),
                        t = this.duration(),
                        i = e.end(e.length - 1);
                    return i > t && (i = t), i
                }
                volume(e) {
                    let t;
                    if (void 0 !== e) {
                        t = Math.max(0, Math.min(1, e)), this.cache_.volume = t, this.techCall_("setVolume", t), t > 0 && this.lastVolume_(t);
                        return
                    }
                    return isNaN(t = parseFloat(this.techGet_("volume"))) ? 1 : t
                }
                muted(e) {
                    if (void 0 !== e) {
                        this.techCall_("setMuted", e);
                        return
                    }
                    return this.techGet_("muted") || !1
                }
                defaultMuted(e) {
                    return void 0 !== e && this.techCall_("setDefaultMuted", e), this.techGet_("defaultMuted") || !1
                }
                lastVolume_(e) {
                    if (void 0 !== e && 0 !== e) {
                        this.cache_.lastVolume = e;
                        return
                    }
                    return this.cache_.lastVolume
                }
                supportsFullScreen() {
                    return this.techGet_("supportsFullScreen") || !1
                }
                isFullscreen(e) {
                    if (void 0 !== e) {
                        let t = this.isFullscreen_;
                        this.isFullscreen_ = !!e, this.isFullscreen_ !== t && this.fsApi_.prefixed && this.trigger("fullscreenchange"), this.toggleFullscreenClass_();
                        return
                    }
                    return this.isFullscreen_
                }
                requestFullscreen(e) {
                    this.isInPictureInPicture() && this.exitPictureInPicture();
                    let t = this;
                    return new Promise((i, s) => {
                        function r() {
                            t.off("fullscreenerror", a), t.off("fullscreenchange", n)
                        }

                        function n() {
                            r(), i()
                        }

                        function a(e, t) {
                            r(), s(t)
                        }
                        t.one("fullscreenchange", n), t.one("fullscreenerror", a);
                        let o = t.requestFullscreenHelper_(e);
                        o && (o.then(r, r), o.then(i, s))
                    })
                }
                requestFullscreenHelper_(e) {
                    let t;
                    if (this.fsApi_.prefixed || (t = this.options_.fullscreen && this.options_.fullscreen.options || {}, void 0 === e || (t = e)), this.fsApi_.requestFullscreen) {
                        let e = this.el_[this.fsApi_.requestFullscreen](t);
                        return e && e.then(() => this.isFullscreen(!0), () => this.isFullscreen(!1)), e
                    }
                    this.tech_.supportsFullScreen() && !0 == !this.options_.preferFullWindow ? this.techCall_("enterFullScreen") : this.enterFullWindow()
                }
                exitFullscreen() {
                    let e = this;
                    return new Promise((t, i) => {
                        function s() {
                            e.off("fullscreenerror", n), e.off("fullscreenchange", r)
                        }

                        function r() {
                            s(), t()
                        }

                        function n(e, t) {
                            s(), i(t)
                        }
                        e.one("fullscreenchange", r), e.one("fullscreenerror", n);
                        let a = e.exitFullscreenHelper_();
                        a && (a.then(s, s), a.then(t, i))
                    })
                }
                exitFullscreenHelper_() {
                    if (this.fsApi_.requestFullscreen) {
                        let e = c()[this.fsApi_.exitFullscreen]();
                        return e && tz(e.then(() => this.isFullscreen(!1))), e
                    }
                    this.tech_.supportsFullScreen() && !0 == !this.options_.preferFullWindow ? this.techCall_("exitFullScreen") : this.exitFullWindow()
                }
                enterFullWindow() {
                    this.isFullscreen(!0), this.isFullWindow = !0, this.docOrigOverflow = c().documentElement.style.overflow, tr(c(), "keydown", this.boundFullWindowOnEscKey_), c().documentElement.style.overflow = "hidden", eL(c().body, "vjs-full-window"), this.trigger("enterFullWindow")
                }
                fullWindowOnEscKey(e) {
                    m().isEventKey(e, "Esc") && !0 === this.isFullscreen() && (this.isFullWindow ? this.exitFullWindow() : this.exitFullscreen())
                }
                exitFullWindow() {
                    this.isFullscreen(!1), this.isFullWindow = !1, tn(c(), "keydown", this.boundFullWindowOnEscKey_), c().documentElement.style.overflow = this.docOrigOverflow, eD(c().body, "vjs-full-window"), this.trigger("exitFullWindow")
                }
                disablePictureInPicture(e) {
                    if (void 0 === e) return this.techGet_("disablePictureInPicture");
                    this.techCall_("setDisablePictureInPicture", e), this.options_.disablePictureInPicture = e, this.trigger("disablepictureinpicturechanged")
                }
                isInPictureInPicture(e) {
                    if (void 0 !== e) {
                        this.isInPictureInPicture_ = !!e, this.togglePictureInPictureClass_();
                        return
                    }
                    return !!this.isInPictureInPicture_
                }
                requestPictureInPicture() {
                    if (this.options_.enableDocumentPictureInPicture && d().documentPictureInPicture) {
                        let e = c().createElement(this.el().tagName);
                        return e.classList = this.el().classList, e.classList.add("vjs-pip-container"), this.posterImage && e.appendChild(this.posterImage.el().cloneNode(!0)), this.titleBar && e.appendChild(this.titleBar.el().cloneNode(!0)), e.appendChild(ex("p", {
                            className: "vjs-pip-text"
                        }, {}, this.localize("Playing in picture-in-picture"))), d().documentPictureInPicture.requestWindow({
                            width: this.videoWidth(),
                            height: this.videoHeight()
                        }).then(t => (eZ(t), this.el_.parentNode.insertBefore(e, this.el_), t.document.body.appendChild(this.el_), t.document.body.classList.add("vjs-pip-window"), this.player_.isInPictureInPicture(!0), this.player_.trigger({
                            type: "enterpictureinpicture",
                            pipWindow: t
                        }), t.addEventListener("pagehide", t => {
                            let i = t.target.querySelector(".video-js");
                            e.parentNode.replaceChild(i, e), this.player_.isInPictureInPicture(!1), this.player_.trigger("leavepictureinpicture")
                        }), t))
                    }
                    return "pictureInPictureEnabled" in c() && !1 === this.disablePictureInPicture() ? this.techGet_("requestPictureInPicture") : Promise.reject("No PiP mode is available")
                }
                exitPictureInPicture() {
                    return d().documentPictureInPicture && d().documentPictureInPicture.window ? (d().documentPictureInPicture.window.close(), Promise.resolve()) : "pictureInPictureEnabled" in c() ? c().exitPictureInPicture() : void 0
                }
                handleKeyDown(e) {
                    let {
                        userActions: t
                    } = this.options_;
                    t && t.hotkeys && ((e => {
                        let t = e.tagName.toLowerCase();
                        return !!e.isContentEditable || ("input" === t ? -1 === ["button", "checkbox", "hidden", "radio", "reset", "submit"].indexOf(e.type) : -1 !== ["textarea"].indexOf(t))
                    })(this.el_.ownerDocument.activeElement) || ("function" == typeof t.hotkeys ? t.hotkeys.call(this, e) : this.handleHotkeys(e)))
                }
                handleHotkeys(e) {
                    let {
                        fullscreenKey: t = e => m().isEventKey(e, "f"),
                        muteKey: i = e => m().isEventKey(e, "m"),
                        playPauseKey: s = e => m().isEventKey(e, "k") || m().isEventKey(e, "Space")
                    } = this.options_.userActions ? this.options_.userActions.hotkeys : {};
                    if (t.call(this, e)) {
                        e.preventDefault(), e.stopPropagation();
                        let t = tD.getComponent("FullscreenToggle");
                        !1 !== c()[this.fsApi_.fullscreenEnabled] && t.prototype.handleClick.call(this, e)
                    } else i.call(this, e) ? (e.preventDefault(), e.stopPropagation(), tD.getComponent("MuteToggle").prototype.handleClick.call(this, e)) : s.call(this, e) && (e.preventDefault(), e.stopPropagation(), tD.getComponent("PlayToggle").prototype.handleClick.call(this, e))
                }
                canPlayType(e) {
                    let t;
                    for (let i = 0, s = this.options_.techOrder; i < s.length; i++) {
                        let r = s[i],
                            n = im.getTech(r);
                        if (n || (n = tD.getComponent(r)), !n) {
                            q.error(`The "${r}" tech is undefined. Skipped browser support check for that tech.`);
                            continue
                        }
                        if (n.isSupported() && (t = n.canPlayType(e))) return t
                    }
                    return ""
                }
                selectSource(e) {
                    let t;
                    let i = this.options_.techOrder.map(e => [e, im.getTech(e)]).filter(([e, t]) => t ? t.isSupported() : (q.error(`The "${e}" tech is undefined. Skipped browser support check for that tech.`), !1)),
                        s = function(e, t, i) {
                            let s;
                            return e.some(e => t.some(t => {
                                if (s = i(e, t)) return !0
                            })), s
                        },
                        r = ([e, t], i) => {
                            if (t.canPlaySource(i, this.options_[e.toLowerCase()])) return {
                                source: i,
                                tech: e
                            }
                        };
                    return (t = this.options_.sourceOrder ? s(e, i, (e, t) => r(t, e)) : s(i, e, r)) || !1
                }
                handleSrc_(e, t) {
                    if (void 0 === e) return this.cache_.src || "";
                    this.resetRetryOnError_ && this.resetRetryOnError_();
                    let i = ix(e);
                    if (!i.length) {
                        this.setTimeout(function() {
                            this.error({
                                code: 4,
                                message: this.options_.notSupportedMessage
                            })
                        }, 0);
                        return
                    }
                    if (this.changingSrc_ = !0, t || (this.cache_.sources = i), this.updateSourceCaches_(i[0]), ! function(e, t, i) {
                            e.setTimeout(() => (function e(t = {}, i = [], s, r, n = [], a = !1) {
                                let [o, ...l] = i;
                                if ("string" == typeof o) e(t, ig[o], s, r, n, a);
                                else if (o) {
                                    let i = function(e, t) {
                                        let i = i_[e.id()],
                                            s = null;
                                        if (null == i) return s = t(e), i_[e.id()] = [
                                            [t, s]
                                        ], s;
                                        for (let e = 0; e < i.length; e++) {
                                            let [r, n] = i[e];
                                            r === t && (s = n)
                                        }
                                        return null === s && (s = t(e), i.push([t, s])), s
                                    }(r, o);
                                    if (!i.setSource) return n.push(i), e(t, l, s, r, n, a);
                                    i.setSource(Object.assign({}, t), function(o, h) {
                                        if (o) return e(t, l, s, r, n, a);
                                        n.push(i), e(h, t.type === h.type ? l : ig[h.type], s, r, n, a)
                                    })
                                } else l.length ? e(t, l, s, r, n, a) : a ? s(t, n) : e(t, ig["*"], s, r, n, !0)
                            })(t, ig[t.type], i, e), 1)
                        }(this, i[0], (e, s) => {
                            if (this.middleware_ = s, t || (this.cache_.sources = i), this.updateSourceCaches_(e), this.src_(e)) return i.length > 1 ? this.handleSrc_(i.slice(1)) : (this.changingSrc_ = !1, this.setTimeout(function() {
                                this.error({
                                    code: 4,
                                    message: this.options_.notSupportedMessage
                                })
                            }, 0), void this.triggerReady());
                            ! function(e, t) {
                                e.forEach(e => e.setTech && e.setTech(t))
                            }(s, this.tech_)
                        }), i.length > 1) {
                        let e = () => {
                                this.error(null), this.handleSrc_(i.slice(1), !0)
                            },
                            t = () => {
                                this.off("error", e)
                            };
                        this.one("error", e), this.one("playing", t), this.resetRetryOnError_ = () => {
                            this.off("error", e), this.off("playing", t)
                        }
                    }
                }
                src(e) {
                    return this.handleSrc_(e, !1)
                }
                src_(e) {
                    let t = this.selectSource([e]);
                    return !t || (tA(t.tech, this.techName_) ? this.ready(function() {
                        this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src), this.changingSrc_ = !1
                    }, !0) : (this.changingSrc_ = !0, this.loadTech_(t.tech, t.source), this.tech_.ready(() => {
                        this.changingSrc_ = !1
                    })), !1)
                }
                load() {
                    if (this.tech_ && this.tech_.vhs) {
                        this.src(this.currentSource());
                        return
                    }
                    this.techCall_("load")
                }
                reset() {
                    this.paused() ? this.doReset_() : tz(this.play().then(() => this.doReset_()))
                }
                doReset_() {
                    this.tech_ && this.tech_.clearTracks("text"), this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.resetCache_(), this.poster(""), this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset"), this.resetControlBarUI_(), this.error(null), this.titleBar && this.titleBar.update({
                        title: void 0,
                        description: void 0
                    }), tf(this) && this.trigger("playerreset")
                }
                resetControlBarUI_() {
                    this.resetProgressBar_(), this.resetPlaybackRate_(), this.resetVolumeBar_()
                }
                resetProgressBar_() {
                    this.currentTime(0);
                    let {
                        currentTimeDisplay: e,
                        durationDisplay: t,
                        progressControl: i,
                        remainingTimeDisplay: s
                    } = this.controlBar || {}, {
                        seekBar: r
                    } = i || {};
                    e && e.updateContent(), t && t.updateContent(), s && s.updateContent(), r && (r.update(), r.loadProgressBar && r.loadProgressBar.update())
                }
                resetPlaybackRate_() {
                    this.playbackRate(this.defaultPlaybackRate()), this.handleTechRateChange_()
                }
                resetVolumeBar_() {
                    this.volume(1), this.trigger("volumechange")
                }
                currentSources() {
                    let e = this.currentSource(),
                        t = [];
                    return 0 !== Object.keys(e).length && t.push(e), this.cache_.sources || t
                }
                currentSource() {
                    return this.cache_.source || {}
                }
                currentSrc() {
                    return this.currentSource() && this.currentSource().src || ""
                }
                currentType() {
                    return this.currentSource() && this.currentSource().type || ""
                }
                preload(e) {
                    if (void 0 !== e) {
                        this.techCall_("setPreload", e), this.options_.preload = e;
                        return
                    }
                    return this.techGet_("preload")
                }
                autoplay(e) {
                    let t;
                    if (void 0 === e) return this.options_.autoplay || !1;
                    "string" == typeof e && /(any|play|muted)/.test(e) || !0 === e && this.options_.normalizeAutoplay ? (this.options_.autoplay = e, this.manualAutoplay_("string" == typeof e ? e : "play"), t = !1) : e ? this.options_.autoplay = !0 : this.options_.autoplay = !1, t = void 0 === t ? this.options_.autoplay : t, this.tech_ && this.techCall_("setAutoplay", t)
                }
                playsinline(e) {
                    return void 0 !== e && (this.techCall_("setPlaysinline", e), this.options_.playsinline = e), this.techGet_("playsinline")
                }
                loop(e) {
                    if (void 0 !== e) {
                        this.techCall_("setLoop", e), this.options_.loop = e;
                        return
                    }
                    return this.techGet_("loop")
                }
                poster(e) {
                    if (void 0 === e) return this.poster_;
                    e || (e = ""), e !== this.poster_ && (this.poster_ = e, this.techCall_("setPoster", e), this.isPosterFromTech_ = !1, this.trigger("posterchange"))
                }
                handleTechPosterChange_() {
                    if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
                        let e = this.tech_.poster() || "";
                        e !== this.poster_ && (this.poster_ = e, this.isPosterFromTech_ = !0, this.trigger("posterchange"))
                    }
                }
                controls(e) {
                    if (void 0 === e) return !!this.controls_;
                    e = !!e, this.controls_ !== e && (this.controls_ = e, this.usingNativeControls() && this.techCall_("setControls", e), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))
                }
                usingNativeControls(e) {
                    if (void 0 === e) return !!this.usingNativeControls_;
                    e = !!e, this.usingNativeControls_ !== e && (this.usingNativeControls_ = e, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
                }
                error(e) {
                    if (void 0 === e) return this.error_ || null;
                    if (R("beforeerror").forEach(t => {
                            let i = t(this, e);
                            if (!(K(i) && !Array.isArray(i) || "string" == typeof i || "number" == typeof i || null === i)) {
                                this.log.error("please return a value that MediaError expects in beforeerror hooks");
                                return
                            }
                            e = i
                        }), this.options_.suppressNotSupportedError && e && 4 === e.code) {
                        let t = function() {
                            this.error(e)
                        };
                        this.options_.suppressNotSupportedError = !1, this.any(["click", "touchstart"], t), this.one("loadstart", function() {
                            this.off(["click", "touchstart"], t)
                        });
                        return
                    }
                    if (null === e) {
                        this.error_ = null, this.removeClass("vjs-error"), this.errorDisplay && this.errorDisplay.close();
                        return
                    }
                    this.error_ = new tH(e), this.addClass("vjs-error"), q.error(`(CODE:${this.error_.code} ${tH.errorTypes[this.error_.code]})`, this.error_.message, this.error_), this.trigger("error"), R("error").forEach(e => e(this, this.error_))
                }
                reportUserActivity(e) {
                    this.userActivity_ = !0
                }
                userActive(e) {
                    if (void 0 === e) return this.userActive_;
                    if ((e = !!e) !== this.userActive_) {
                        if (this.userActive_ = e, this.userActive_) {
                            this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive");
                            return
                        }
                        this.tech_ && this.tech_.one("mousemove", function(e) {
                            e.stopPropagation(), e.preventDefault()
                        }), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")
                    }
                }
                listenForUserActivity_() {
                    let e, t, i, s;
                    let r = td(this, this.reportUserActivity),
                        n = function(t) {
                            r(), this.clearInterval(e)
                        };
                    this.on("mousedown", function() {
                        r(), this.clearInterval(e), e = this.setInterval(r, 250)
                    }), this.on("mousemove", function(e) {
                        (e.screenX !== t || e.screenY !== i) && (t = e.screenX, i = e.screenY, r())
                    }), this.on("mouseup", n), this.on("mouseleave", n);
                    let a = this.getChild("controlBar");
                    !a || ev || ei || (a.on("mouseenter", function(e) {
                        0 !== this.player().options_.inactivityTimeout && (this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout), this.player().options_.inactivityTimeout = 0
                    }), a.on("mouseleave", function(e) {
                        this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout
                    })), this.on("keydown", r), this.on("keyup", r), this.setInterval(function() {
                        if (!this.userActivity_) return;
                        this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(s);
                        let e = this.options_.inactivityTimeout;
                        e <= 0 || (s = this.setTimeout(function() {
                            this.userActivity_ || this.userActive(!1)
                        }, e))
                    }, 250)
                }
                playbackRate(e) {
                    if (void 0 !== e) {
                        this.techCall_("setPlaybackRate", e);
                        return
                    }
                    return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1
                }
                defaultPlaybackRate(e) {
                    return void 0 !== e ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
                }
                isAudio(e) {
                    if (void 0 !== e) {
                        this.isAudio_ = !!e;
                        return
                    }
                    return !!this.isAudio_
                }
                enableAudioOnlyUI_() {
                    this.addClass("vjs-audio-only-mode");
                    let e = this.children(),
                        t = this.getChild("ControlBar"),
                        i = t && t.currentHeight();
                    e.forEach(e => {
                        e !== t && e.el_ && !e.hasClass("vjs-hidden") && (e.hide(), this.audioOnlyCache_.hiddenChildren.push(e))
                    }), this.audioOnlyCache_.playerHeight = this.currentHeight(), this.height(i), this.trigger("audioonlymodechange")
                }
                disableAudioOnlyUI_() {
                    this.removeClass("vjs-audio-only-mode"), this.audioOnlyCache_.hiddenChildren.forEach(e => e.show()), this.height(this.audioOnlyCache_.playerHeight), this.trigger("audioonlymodechange")
                }
                audioOnlyMode(e) {
                    if ("boolean" != typeof e || e === this.audioOnlyMode_) return this.audioOnlyMode_;
                    if (this.audioOnlyMode_ = e, e) {
                        let e = [];
                        return this.isInPictureInPicture() && e.push(this.exitPictureInPicture()), this.isFullscreen() && e.push(this.exitFullscreen()), this.audioPosterMode() && e.push(this.audioPosterMode(!1)), Promise.all(e).then(() => this.enableAudioOnlyUI_())
                    }
                    return Promise.resolve().then(() => this.disableAudioOnlyUI_())
                }
                enablePosterModeUI_() {
                    (this.tech_ && this.tech_).hide(), this.addClass("vjs-audio-poster-mode"), this.trigger("audiopostermodechange")
                }
                disablePosterModeUI_() {
                    (this.tech_ && this.tech_).show(), this.removeClass("vjs-audio-poster-mode"), this.trigger("audiopostermodechange")
                }
                audioPosterMode(e) {
                    return "boolean" != typeof e || e === this.audioPosterMode_ ? this.audioPosterMode_ : (this.audioPosterMode_ = e, e) ? this.audioOnlyMode() ? this.audioOnlyMode(!1).then(() => {
                        this.enablePosterModeUI_()
                    }) : Promise.resolve().then(() => {
                        this.enablePosterModeUI_()
                    }) : Promise.resolve().then(() => {
                        this.disablePosterModeUI_()
                    })
                }
                addTextTrack(e, t, i) {
                    if (this.tech_) return this.tech_.addTextTrack(e, t, i)
                }
                addRemoteTextTrack(e, t) {
                    if (this.tech_) return this.tech_.addRemoteTextTrack(e, t)
                }
                removeRemoteTextTrack(e = {}) {
                    let {
                        track: t
                    } = e;
                    if (t || (t = e), this.tech_) return this.tech_.removeRemoteTextTrack(t)
                }
                getVideoPlaybackQuality() {
                    return this.techGet_("getVideoPlaybackQuality")
                }
                videoWidth() {
                    return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
                }
                videoHeight() {
                    return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
                }
                language(e) {
                    if (void 0 === e) return this.language_;
                    this.language_ !== String(e).toLowerCase() && (this.language_ = String(e).toLowerCase(), tf(this) && this.trigger("languagechange"))
                }
                languages() {
                    return Y(rs.prototype.options_.languages, this.languages_)
                }
                toJSON() {
                    let e = Y(this.options_),
                        t = e.tracks;
                    e.tracks = [];
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i];
                        (s = Y(s)).player = void 0, e.tracks[i] = s
                    }
                    return e
                }
                createModal(e, t) {
                    (t = t || {}).content = e || "";
                    let i = new tQ(this, t);
                    return this.addChild(i), i.on("dispose", () => {
                        this.removeChild(i)
                    }), i.open(), i
                }
                updateCurrentBreakpoint_() {
                    if (!this.responsive()) return;
                    let e = this.currentBreakpoint(),
                        t = this.currentWidth();
                    for (let i = 0; i < re.length; i++) {
                        let s = re[i];
                        if (t <= this.breakpoints_[s]) {
                            if (e === s) return;
                            e && this.removeClass(rt[e]), this.addClass(rt[s]), this.breakpoint_ = s;
                            break
                        }
                    }
                }
                removeCurrentBreakpoint_() {
                    let e = this.currentBreakpointClass();
                    this.breakpoint_ = "", e && this.removeClass(e)
                }
                breakpoints(e) {
                    return void 0 === e || (this.breakpoint_ = "", this.breakpoints_ = Object.assign({}, ri, e), this.updateCurrentBreakpoint_()), Object.assign(this.breakpoints_)
                }
                responsive(e) {
                    if (void 0 === e) return this.responsive_;
                    e = !!e;
                    let t = this.responsive_;
                    if (e !== t) return this.responsive_ = e, e ? (this.on("playerresize", this.boundUpdateCurrentBreakpoint_), this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.boundUpdateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), e
                }
                currentBreakpoint() {
                    return this.breakpoint_
                }
                currentBreakpointClass() {
                    return rt[this.breakpoint_] || ""
                }
                loadMedia(e, t) {
                    if (!e || "object" != typeof e) return;
                    let i = this.crossOrigin();
                    this.reset(), this.cache_.media = Y(e);
                    let {
                        artist: s,
                        artwork: r,
                        description: n,
                        poster: a,
                        src: o,
                        textTracks: l,
                        title: h
                    } = this.cache_.media;
                    !r && a && (this.cache_.media.artwork = [{
                        src: a,
                        type: iE(a)
                    }]), i && this.crossOrigin(i), o && this.src(o), a && this.poster(a), Array.isArray(l) && l.forEach(e => this.addRemoteTextTrack(e, !1)), this.titleBar && this.titleBar.update({
                        title: h,
                        description: n || s || ""
                    }), this.ready(t)
                }
                getMedia() {
                    if (!this.cache_.media) {
                        let e = this.poster(),
                            t = {
                                src: this.currentSources(),
                                textTracks: Array.prototype.map.call(this.remoteTextTracks(), e => ({
                                    kind: e.kind,
                                    label: e.label,
                                    language: e.language,
                                    src: e.src
                                }))
                            };
                        return e && (t.poster = e, t.artwork = [{
                            src: t.poster,
                            type: iE(t.poster)
                        }]), t
                    }
                    return Y(this.cache_.media)
                }
                static getTagSettings(e) {
                    let t = {
                            sources: [],
                            tracks: []
                        },
                        i = eR(e),
                        s = i["data-setup"];
                    if (eA(e, "vjs-fill") && (i.fill = !0), eA(e, "vjs-fluid") && (i.fluid = !0), null !== s) {
                        let [e, t] = f()(s || "{}");
                        e && q.error(e), Object.assign(i, t)
                    }
                    if (Object.assign(t, i), e.hasChildNodes()) {
                        let i = e.childNodes;
                        for (let e = 0, s = i.length; e < s; e++) {
                            let s = i[e],
                                r = s.nodeName.toLowerCase();
                            "source" === r ? t.sources.push(eR(s)) : "track" === r && t.tracks.push(eR(s))
                        }
                    }
                    return t
                }
                debug(e) {
                    if (void 0 === e) return this.debugEnabled_;
                    e ? (this.trigger("debugon"), this.previousLogLevel_ = this.log.level, this.log.level("debug"), this.debugEnabled_ = !0) : (this.trigger("debugoff"), this.log.level(this.previousLogLevel_), this.previousLogLevel_ = void 0, this.debugEnabled_ = !1)
                }
                playbackRates(e) {
                    if (void 0 === e) return this.cache_.playbackRates;
                    Array.isArray(e) && e.every(e => "number" == typeof e) && (this.cache_.playbackRates = e, this.trigger("playbackrateschange"))
                }
            }
            ip.names.forEach(function(e) {
                let t = ip[e];
                rs.prototype[t.getterName] = function() {
                    return this.tech_ ? this.tech_[t.getterName]() : (this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName])
                }
            }), rs.prototype.crossorigin = rs.prototype.crossOrigin, rs.players = {};
            let rr = d().navigator;
            rs.prototype.options_ = {
                techOrder: im.defaultTechOrder_,
                html5: {},
                enableSourceset: !0,
                inactivityTimeout: 2e3,
                playbackRates: [],
                liveui: !1,
                children: ["mediaLoader", "posterImage", "titleBar", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"],
                language: rr && (rr.languages && rr.languages[0] || rr.userLanguage || rr.language) || "en",
                languages: {},
                notSupportedMessage: "No compatible source was found for this media.",
                normalizeAutoplay: !1,
                fullscreen: {
                    options: {
                        navigationUI: "hide"
                    }
                },
                breakpoints: {},
                responsive: !1,
                audioOnlyMode: !1,
                audioPosterMode: !1,
                enableSmoothSeeking: !1
            }, s7.forEach(function(e) {
                rs.prototype[`handleTech${tP(e)}_`] = function() {
                    return this.trigger(e)
                }
            }), tD.registerComponent("Player", rs);
            let rn = "plugin",
                ra = "activePlugins_",
                ro = {},
                rl = e => ro.hasOwnProperty(e),
                rh = e => rl(e) ? ro[e] : void 0,
                rd = (e, t) => {
                    e[ra] = e[ra] || {}, e[ra][t] = !0
                },
                ru = (e, t, i) => {
                    let s = (i ? "before" : "") + "pluginsetup";
                    e.trigger(s, t), e.trigger(s + ":" + t.name, t)
                },
                rc = function(e, t) {
                    let i = function() {
                        ru(this, {
                            name: e,
                            plugin: t,
                            instance: null
                        }, !0);
                        let i = t.apply(this, arguments);
                        return rd(this, e), ru(this, {
                            name: e,
                            plugin: t,
                            instance: i
                        }), i
                    };
                    return Object.keys(t).forEach(function(e) {
                        i[e] = t[e]
                    }), i
                },
                rp = (e, t) => (t.prototype.name = e, function(...i) {
                    ru(this, {
                        name: e,
                        plugin: t,
                        instance: null
                    }, !0);
                    let s = new t(...[this, ...i]);
                    return this[e] = () => s, ru(this, s.getEventHash()), s
                });
            class rm {
                constructor(e) {
                    if (this.constructor === rm) throw Error("Plugin must be sub-classed; not directly instantiated.");
                    this.player = e, this.log || (this.log = this.player.log.createLogger(this.name)), tE(this), delete this.trigger, tx(this, this.constructor.defaultState), rd(e, this.name), this.dispose = this.dispose.bind(this), e.on("dispose", this.dispose)
                }
                version() {
                    return this.constructor.VERSION
                }
                getEventHash(e = {}) {
                    return e.name = this.name, e.plugin = this.constructor, e.instance = this, e
                }
                trigger(e, t = {}) {
                    return ta(this.eventBusEl_, e, this.getEventHash(t))
                }
                handleStateChanged(e) {}
                dispose() {
                    let {
                        name: e,
                        player: t
                    } = this;
                    this.trigger("dispose"), this.off(), t.off("dispose", this.dispose), t[ra][e] = !1, this.player = this.state = null, t[e] = rp(e, ro[e])
                }
                static isBasic(e) {
                    let t = "string" == typeof e ? rh(e) : e;
                    return "function" == typeof t && !rm.prototype.isPrototypeOf(t.prototype)
                }
                static registerPlugin(e, t) {
                    if ("string" != typeof e) throw Error(`Illegal plugin name, "${e}", must be a string, was ${typeof e}.`);
                    if (rl(e)) q.warn(`A plugin named "${e}" already exists. You may want to avoid re-registering plugins!`);
                    else if (rs.prototype.hasOwnProperty(e)) throw Error(`Illegal plugin name, "${e}", cannot share a name with an existing player method!`);
                    if ("function" != typeof t) throw Error(`Illegal plugin for "${e}", must be a function, was ${typeof t}.`);
                    return ro[e] = t, e !== rn && (rm.isBasic(t) ? rs.prototype[e] = rc(e, t) : rs.prototype[e] = rp(e, t)), t
                }
                static deregisterPlugin(e) {
                    if (e === rn) throw Error("Cannot de-register base plugin.");
                    rl(e) && (delete ro[e], delete rs.prototype[e])
                }
                static getPlugins(e = Object.keys(ro)) {
                    let t;
                    return e.forEach(e => {
                        let i = rh(e);
                        i && ((t = t || {})[e] = i)
                    }), t
                }
                static getPluginVersion(e) {
                    let t = rh(e);
                    return t && t.VERSION || ""
                }
            }

            function rg(e, t, i, s) {
                var r;
                let n;
                return r = `${t} is deprecated and will be removed in ${e}.0; please use ${i} instead.`, n = !1,
                    function(...e) {
                        return n || q.warn(r), n = !0, s.apply(this, e)
                    }
            }
            rm.getPlugin = rh, rm.BASE_PLUGIN_NAME = rn, rm.registerPlugin(rn, rm), rs.prototype.usingPlugin = function(e) {
                return !!this[ra] && !0 === this[ra][e]
            }, rs.prototype.hasPlugin = function(e) {
                return !!rl(e)
            };
            let rf = e => 0 === e.indexOf("#") ? e.slice(1) : e;

            function r_(e, t, i) {
                let s = r_.getPlayer(e);
                if (s) return t && q.warn(`Player "${e}" is already initialised. Options will not be applied.`), i && s.ready(i), s;
                let r = "string" == typeof e ? eY("#" + rf(e)) : e;
                if (!eC(r)) throw TypeError("The element or ID supplied is not valid. (videojs)");
                let n = "getRootNode" in r && r.getRootNode() instanceof d().ShadowRoot ? r.getRootNode() : r.ownerDocument.body;
                return r.ownerDocument.defaultView && n.contains(r) || q.warn("The element supplied is not included in the DOM"), !0 === (t = t || {}).restoreEl && (t.restoreEl = (r.parentNode && r.parentNode.hasAttribute("data-vjs-player") ? r.parentNode : r).cloneNode(!0)), R("beforesetup").forEach(e => {
                    let i = e(r, Y(t));
                    if (!K(i) || Array.isArray(i)) {
                        q.error("please return an object in beforesetup hooks");
                        return
                    }
                    t = Y(t, i)
                }), s = new(tD.getComponent("Player"))(r, t, i), R("setup").forEach(e => e(s)), s
            }
            if (r_.hooks_ = M, r_.hooks = R, r_.hook = function(e, t) {
                    R(e, t)
                }, r_.hookOnce = function(e, t) {
                    R(e, [].concat(t).map(t => {
                        let i = (...s) => (U(e, i), t(...s));
                        return i
                    }))
                }, r_.removeHook = U, !0 !== d().VIDEOJS_NO_DYNAMIC_STYLE && ek()) {
                let e = eY(".vjs-styles-defaults");
                if (!e) {
                    e = e5("vjs-styles-defaults");
                    let t = eY("head");
                    t && t.insertBefore(e, t.firstChild), e3(e, `
      .video-js {
        width: 300px;
        height: 150px;
      }

      .vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: 56.25%
      }
    `)
                }
            }
            e4(1, r_), r_.VERSION = O, r_.options = rs.prototype.options_, r_.getPlayers = () => rs.players, r_.getPlayer = e => {
                let t;
                let i = rs.players;
                if ("string" == typeof e) {
                    let s = rf(e),
                        r = i[s];
                    if (r) return r;
                    t = eY("#" + s)
                } else t = e;
                if (eC(t)) {
                    let {
                        player: e,
                        playerId: s
                    } = t;
                    if (e || i[s]) return e || i[s]
                }
            }, r_.getAllPlayers = () => Object.keys(rs.players).map(e => rs.players[e]).filter(Boolean), r_.players = rs.players, r_.getComponent = tD.getComponent, r_.registerComponent = (e, t) => (im.isTech(t) && q.warn(`The ${e} tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)`), tD.registerComponent.call(tD, e, t)), r_.getTech = im.getTech, r_.registerTech = im.registerTech, r_.use = function(e, t) {
                ig[e] = ig[e] || [], ig[e].push(t)
            }, Object.defineProperty(r_, "middleware", {
                value: {},
                writeable: !1,
                enumerable: !0
            }), Object.defineProperty(r_.middleware, "TERMINATOR", {
                value: iy,
                writeable: !1,
                enumerable: !0
            }), r_.browser = eb, r_.obj = Z, r_.mergeOptions = rg(9, "videojs.mergeOptions", "videojs.obj.merge", Y), r_.defineLazyProperty = rg(9, "videojs.defineLazyProperty", "videojs.obj.defineLazyProperty", J), r_.bind = rg(9, "videojs.bind", "native Function.prototype.bind", td), r_.registerPlugin = rm.registerPlugin, r_.deregisterPlugin = rm.deregisterPlugin, r_.plugin = (e, t) => (q.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), rm.registerPlugin(e, t)), r_.getPlugins = rm.getPlugins, r_.getPlugin = rm.getPlugin, r_.getPluginVersion = rm.getPluginVersion, r_.addLanguage = function(e, t) {
                return e = ("" + e).toLowerCase(), r_.options.languages = Y(r_.options.languages, {
                    [e]: t
                }), r_.options.languages[e]
            }, r_.log = q, r_.createLogger = H, r_.time = t$, r_.createTimeRange = rg(9, "videojs.createTimeRange", "videojs.time.createTimeRanges", tR), r_.createTimeRanges = rg(9, "videojs.createTimeRanges", "videojs.time.createTimeRanges", tR), r_.formatTime = rg(9, "videojs.formatTime", "videojs.time.formatTime", tF), r_.setFormatTime = rg(9, "videojs.setFormatTime", "videojs.time.setFormatTime", tN), r_.resetFormatTime = rg(9, "videojs.resetFormatTime", "videojs.time.resetFormatTime", tj), r_.parseUrl = rg(9, "videojs.parseUrl", "videojs.url.parseUrl", t9), r_.isCrossOrigin = rg(9, "videojs.isCrossOrigin", "videojs.url.isCrossOrigin", ii), r_.EventTarget = tm, r_.any = tl, r_.on = tr, r_.one = to, r_.off = tn, r_.trigger = ta, r_.xhr = y(), r_.TextTrack = io, r_.AudioTrack = il, r_.VideoTrack = ih, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(e => {
                r_[e] = function() {
                    return q.warn(`videojs.${e}() is deprecated; use videojs.dom.${e}() instead`), e0[e].apply(null, arguments)
                }
            }), r_.computedStyle = rg(9, "videojs.computedStyle", "videojs.dom.computedStyle", eJ), r_.dom = e0, r_.fn = tp, r_.num = iJ, r_.str = tL, r_.url = is, r_.Error = {
                UnsupportedSidxContainer: "unsupported-sidx-container-error",
                DashManifestSidxParsingError: "dash-manifest-sidx-parsing-error",
                HlsPlaylistRequestError: "hls-playlist-request-error",
                SegmentUnsupportedMediaFormat: "segment-unsupported-media-format-error",
                UnsupportedMediaInitialization: "unsupported-media-initialization-error",
                SegmentSwitchError: "segment-switch-error",
                SegmentExceedsSourceBufferQuota: "segment-exceeds-source-buffer-quota-error",
                SegmentAppendError: "segment-append-error",
                VttLoadError: "vtt-load-error",
                VttCueParsingError: "vtt-cue-parsing-error",
                AdsBeforePrerollError: "ads-before-preroll-error",
                AdsPrerollError: "ads-preroll-error",
                AdsMidrollError: "ads-midroll-error",
                AdsPostrollError: "ads-postroll-error",
                AdsMacroReplacementFailed: "ads-macro-replacement-failed",
                AdsResumeContentFailed: "ads-resume-content-failed",
                EMEFailedToRequestMediaKeySystemAccess: "eme-failed-request-media-key-system-access",
                EMEFailedToCreateMediaKeys: "eme-failed-create-media-keys",
                EMEFailedToAttachMediaKeysToVideoElement: "eme-failed-attach-media-keys-to-video",
                EMEFailedToCreateMediaKeySession: "eme-failed-create-media-key-session",
                EMEFailedToSetServerCertificate: "eme-failed-set-server-certificate",
                EMEFailedToGenerateLicenseRequest: "eme-failed-generate-license-request",
                EMEFailedToUpdateSessionWithReceivedLicenseKeys: "eme-failed-update-session",
                EMEFailedToCloseSession: "eme-failed-close-session",
                EMEFailedToRemoveKeysFromSession: "eme-failed-remove-keys",
                EMEFailedToLoadSessionBySessionId: "eme-failed-load-session"
            };
            class ry {
                constructor(e) {
                    let t = this;
                    return t.id = e.id, t.label = t.id, t.width = e.width, t.height = e.height, t.bitrate = e.bandwidth, t.frameRate = e.frameRate, t.enabled_ = e.enabled, Object.defineProperty(t, "enabled", {
                        get: () => t.enabled_(),
                        set(e) {
                            t.enabled_(e)
                        }
                    }), t
                }
            }
            class rv extends r_.EventTarget {
                constructor() {
                    super();
                    let e = this;
                    return e.levels_ = [], e.selectedIndex_ = -1, Object.defineProperty(e, "selectedIndex", {
                        get: () => e.selectedIndex_
                    }), Object.defineProperty(e, "length", {
                        get: () => e.levels_.length
                    }), e[Symbol.iterator] = () => e.levels_.values(), e
                }
                addQualityLevel(e) {
                    let t = this.getQualityLevelById(e.id);
                    if (t) return t;
                    let i = this.levels_.length;
                    return t = new ry(e), "" + i in this || Object.defineProperty(this, i, {
                        get() {
                            return this.levels_[i]
                        }
                    }), this.levels_.push(t), this.trigger({
                        qualityLevel: t,
                        type: "addqualitylevel"
                    }), t
                }
                removeQualityLevel(e) {
                    let t = null;
                    for (let i = 0, s = this.length; i < s; i++)
                        if (this[i] === e) {
                            t = this.levels_.splice(i, 1)[0], this.selectedIndex_ === i ? this.selectedIndex_ = -1 : this.selectedIndex_ > i && this.selectedIndex_--;
                            break
                        }
                    return t && this.trigger({
                        qualityLevel: e,
                        type: "removequalitylevel"
                    }), t
                }
                getQualityLevelById(e) {
                    for (let t = 0, i = this.length; t < i; t++) {
                        let i = this[t];
                        if (i.id === e) return i
                    }
                    return null
                }
                dispose() {
                    this.selectedIndex_ = -1, this.levels_.length = 0
                }
            }
            for (let e in rv.prototype.allowedEvents_ = {
                    change: "change",
                    addqualitylevel: "addqualitylevel",
                    removequalitylevel: "removequalitylevel"
                }, rv.prototype.allowedEvents_) rv.prototype["on" + e] = null;
            var rT = "4.1.0";
            let rb = function(e, t) {
                    let i = e.qualityLevels,
                        s = new rv,
                        r = function() {
                            s.dispose(), e.qualityLevels = i, e.off("dispose", r)
                        };
                    return e.on("dispose", r), e.qualityLevels = () => s, e.qualityLevels.VERSION = rT, s
                },
                rS = function(e) {
                    return rb(this, r_.obj.merge({}, e))
                };
            r_.registerPlugin("qualityLevels", rS), rS.VERSION = rT;
            let rk = S.Z,
                rC = (e, t) => t && t.responseURL && e !== t.responseURL ? t.responseURL : e,
                rE = e => r_.log.debug ? r_.log.debug.bind(r_, "VHS:", `${e} >`) : function() {};

            function rw(...e) {
                let t = r_.obj || r_;
                return (t.merge || t.mergeOptions).apply(t, e)
            }

            function rx(...e) {
                let t = r_.time || r_;
                return (t.createTimeRanges || t.createTimeRanges).apply(t, e)
            }
            let rI = 1 / 30,
                rP = 1 / 30 * 3,
                rA = function(e, t) {
                    let i;
                    let s = [];
                    if (e && e.length)
                        for (i = 0; i < e.length; i++) t(e.start(i), e.end(i)) && s.push([e.start(i), e.end(i)]);
                    return rx(s)
                },
                rL = function(e, t) {
                    return rA(e, function(e, i) {
                        return e - rP <= t && i + rP >= t
                    })
                },
                rD = function(e, t) {
                    return rA(e, function(e) {
                        return e - rI >= t
                    })
                },
                rO = function(e) {
                    if (e.length < 2) return rx();
                    let t = [];
                    for (let i = 1; i < e.length; i++) {
                        let s = e.end(i - 1),
                            r = e.start(i);
                        t.push([s, r])
                    }
                    return rx(t)
                },
                rM = function(e, t) {
                    let i = null,
                        s = null,
                        r = 0,
                        n = [],
                        a = [];
                    if (!e || !e.length || !t || !t.length) return rx();
                    let o = e.length;
                    for (; o--;) n.push({
                        time: e.start(o),
                        type: "start"
                    }), n.push({
                        time: e.end(o),
                        type: "end"
                    });
                    for (o = t.length; o--;) n.push({
                        time: t.start(o),
                        type: "start"
                    }), n.push({
                        time: t.end(o),
                        type: "end"
                    });
                    for (n.sort(function(e, t) {
                            return e.time - t.time
                        }), o = 0; o < n.length; o++) "start" === n[o].type ? 2 == ++r && (i = n[o].time) : "end" === n[o].type && 1 == --r && (s = n[o].time), null !== i && null !== s && (a.push([i, s]), i = null, s = null);
                    return rx(a)
                },
                rR = e => {
                    let t = [];
                    if (!e || !e.length) return "";
                    for (let i = 0; i < e.length; i++) t.push(e.start(i) + " => " + e.end(i));
                    return t.join(", ")
                },
                rU = e => {
                    let t = [];
                    for (let i = 0; i < e.length; i++) t.push({
                        start: e.start(i),
                        end: e.end(i)
                    });
                    return t
                },
                rB = function(e, t) {
                    if (e === t) return !1;
                    if (!e && t || !t && e || e.length !== t.length) return !0;
                    for (let i = 0; i < e.length; i++)
                        if (e.start(i) !== t.start(i) || e.end(i) !== t.end(i)) return !0;
                    return !1
                },
                rN = function(e) {
                    if (e && e.length && e.end) return e.end(e.length - 1)
                },
                rj = function(e, t) {
                    let i = 0;
                    if (!e || !e.length) return i;
                    for (let s = 0; s < e.length; s++) {
                        let r = e.start(s),
                            n = e.end(s);
                        if (!(t > n)) {
                            if (t > r && t <= n) {
                                i += n - t;
                                continue
                            }
                            i += n - r
                        }
                    }
                    return i
                },
                rF = (e, t) => {
                    if (!t.preload) return t.duration;
                    let i = 0;
                    return (t.parts || []).forEach(function(e) {
                        i += e.duration
                    }), (t.preloadHints || []).forEach(function(t) {
                        "PART" === t.type && (i += e.partTargetDuration)
                    }), i
                },
                r$ = e => (e.segments || []).reduce((e, t, i) => (t.parts ? t.parts.forEach(function(s, r) {
                    e.push({
                        duration: s.duration,
                        segmentIndex: i,
                        partIndex: r,
                        part: s,
                        segment: t
                    })
                }) : e.push({
                    duration: t.duration,
                    segmentIndex: i,
                    partIndex: null,
                    segment: t,
                    part: null
                }), e), []),
                rq = e => {
                    let t = e.segments && e.segments.length && e.segments[e.segments.length - 1];
                    return t && t.parts || []
                },
                rH = ({
                    preloadSegment: e
                }) => {
                    if (!e) return;
                    let {
                        parts: t,
                        preloadHints: i
                    } = e;
                    return (i || []).reduce((e, t) => e + ("PART" === t.type ? 1 : 0), 0) + (t && t.length ? t.length : 0)
                },
                rV = (e, t) => {
                    if (t.endList) return 0;
                    if (e && e.suggestedPresentationDelay) return e.suggestedPresentationDelay;
                    let i = rq(t).length > 0;
                    return i && t.serverControl && t.serverControl.partHoldBack ? t.serverControl.partHoldBack : i && t.partTargetDuration ? 3 * t.partTargetDuration : t.serverControl && t.serverControl.holdBack ? t.serverControl.holdBack : t.targetDuration ? 3 * t.targetDuration : 0
                },
                rz = function(e, t) {
                    let i = 0,
                        s = t - e.mediaSequence,
                        r = e.segments[s];
                    if (r) {
                        if (void 0 !== r.start) return {
                            result: r.start,
                            precise: !0
                        };
                        if (void 0 !== r.end) return {
                            result: r.end - r.duration,
                            precise: !0
                        }
                    }
                    for (; s--;) {
                        if (void 0 !== (r = e.segments[s]).end) return {
                            result: i + r.end,
                            precise: !0
                        };
                        if (i += rF(e, r), void 0 !== r.start) return {
                            result: i + r.start,
                            precise: !0
                        }
                    }
                    return {
                        result: i,
                        precise: !1
                    }
                },
                rW = function(e, t) {
                    let i, s = 0,
                        r = t - e.mediaSequence;
                    for (; r < e.segments.length; r++) {
                        if (void 0 !== (i = e.segments[r]).start) return {
                            result: i.start - s,
                            precise: !0
                        };
                        if (s += rF(e, i), void 0 !== i.end) return {
                            result: i.end - s,
                            precise: !0
                        }
                    }
                    return {
                        result: -1,
                        precise: !1
                    }
                },
                rG = function(e, t, i) {
                    if (void 0 === t && (t = e.mediaSequence + e.segments.length), t < e.mediaSequence) return 0;
                    let s = rz(e, t);
                    if (s.precise) return s.result;
                    let r = rW(e, t);
                    return r.precise ? r.result : s.result + i
                },
                rK = function(e, t, i) {
                    if (!e) return 0;
                    if ("number" != typeof i && (i = 0), void 0 === t) {
                        if (e.totalDuration) return e.totalDuration;
                        if (!e.endList) return d()[1 / 0]
                    }
                    return rG(e, t, i)
                },
                rQ = function({
                    defaultDuration: e,
                    durationList: t,
                    startIndex: i,
                    endIndex: s
                }) {
                    let r = 0;
                    if (i > s && ([i, s] = [s, i]), i < 0) {
                        for (let t = i; t < Math.min(0, s); t++) r += e;
                        i = 0
                    }
                    for (let e = i; e < s; e++) r += t[e].duration;
                    return r
                },
                rY = function(e, t, i, s) {
                    if (!e || !e.segments) return null;
                    if (e.endList) return rK(e);
                    if (null === t) return null;
                    t = t || 0;
                    let r = rG(e, e.mediaSequence + e.segments.length, t);
                    return i && (r -= s = "number" == typeof s ? s : rV(null, e)), Math.max(0, r)
                },
                rX = function(e) {
                    return e.excludeUntil && e.excludeUntil > Date.now()
                },
                rJ = function(e) {
                    return e.excludeUntil && e.excludeUntil === 1 / 0
                },
                rZ = function(e) {
                    let t = rX(e);
                    return !e.disabled && !t
                },
                r0 = function(e, t) {
                    return t.attributes && t.attributes[e]
                },
                r1 = (e, t) => {
                    if (1 === e.playlists.length) return !0;
                    let i = t.attributes.BANDWIDTH || Number.MAX_VALUE;
                    return 0 === e.playlists.filter(e => !!rZ(e) && (e.attributes.BANDWIDTH || 0) < i).length
                },
                r2 = (e, t) => (!!e || !!t) && (!!e || !t) && (!e || !!t) && (e === t || !!e.id && !!t.id && e.id === t.id || !!e.resolvedUri && !!t.resolvedUri && e.resolvedUri === t.resolvedUri || !!e.uri && !!t.uri && e.uri === t.uri),
                r4 = function(e, t) {
                    let i = e && e.mediaGroups && e.mediaGroups.AUDIO || {},
                        s = !1;
                    for (let e in i) {
                        for (let r in i[e])
                            if (s = t(i[e][r])) break;
                        if (s) break
                    }
                    return !!s
                },
                r8 = e => {
                    if (!e || !e.playlists || !e.playlists.length) return r4(e, e => e.playlists && e.playlists.length || e.uri);
                    for (let t = 0; t < e.playlists.length; t++) {
                        let i = e.playlists[t],
                            s = i.attributes && i.attributes.CODECS;
                        if (!(s && s.split(",").every(e => (0, C.KL)(e)) || r4(e, e => r2(i, e)))) return !1
                    }
                    return !0
                };
            var r5 = {
                liveEdgeDelay: rV,
                duration: rK,
                seekable: function(e, t, i) {
                    let s = t || 0,
                        r = rY(e, t, !0, i);
                    return null === r ? rx() : (r < s && (r = s), rx(s, r))
                },
                getMediaInfoForTime: function({
                    playlist: e,
                    currentTime: t,
                    startingSegmentIndex: i,
                    startingPartIndex: s,
                    startTime: r,
                    exactManifestTimings: n
                }) {
                    let a = t - r,
                        o = r$(e),
                        l = 0;
                    for (let e = 0; e < o.length; e++) {
                        let t = o[e];
                        if (i === t.segmentIndex && ("number" != typeof s || "number" != typeof t.partIndex || s === t.partIndex)) {
                            l = e;
                            break
                        }
                    }
                    if (a < 0) {
                        if (l > 0)
                            for (let t = l - 1; t >= 0; t--) {
                                let i = o[t];
                                if (a += i.duration, n) {
                                    if (a < 0) continue
                                } else if (a + rI <= 0) continue;
                                return {
                                    partIndex: i.partIndex,
                                    segmentIndex: i.segmentIndex,
                                    startTime: r - rQ({
                                        defaultDuration: e.targetDuration,
                                        durationList: o,
                                        startIndex: l,
                                        endIndex: t
                                    })
                                }
                            }
                        return {
                            partIndex: o[0] && o[0].partIndex || null,
                            segmentIndex: o[0] && o[0].segmentIndex || 0,
                            startTime: t
                        }
                    }
                    if (l < 0) {
                        for (let i = l; i < 0; i++)
                            if ((a -= e.targetDuration) < 0) return {
                                partIndex: o[0] && o[0].partIndex || null,
                                segmentIndex: o[0] && o[0].segmentIndex || 0,
                                startTime: t
                            };
                        l = 0
                    }
                    for (let t = l; t < o.length; t++) {
                        let i = o[t];
                        a -= i.duration;
                        let s = i.duration > rI,
                            h = 0 === a,
                            d = s && a + rI >= 0;
                        if (!h && !d || t === o.length - 1) {
                            if (n) {
                                if (a > 0) continue
                            } else if (a - rI >= 0) continue;
                            return {
                                partIndex: i.partIndex,
                                segmentIndex: i.segmentIndex,
                                startTime: r + rQ({
                                    defaultDuration: e.targetDuration,
                                    durationList: o,
                                    startIndex: l,
                                    endIndex: t
                                })
                            }
                        }
                    }
                    return {
                        segmentIndex: o[o.length - 1].segmentIndex,
                        partIndex: o[o.length - 1].partIndex,
                        startTime: t
                    }
                },
                isEnabled: rZ,
                isDisabled: function(e) {
                    return e.disabled
                },
                isExcluded: rX,
                isIncompatible: rJ,
                playlistEnd: rY,
                isAes: function(e) {
                    for (let t = 0; t < e.segments.length; t++)
                        if (e.segments[t].key) return !0;
                    return !1
                },
                hasAttribute: r0,
                estimateSegmentRequestTime: function(e, t, i, s = 0) {
                    return r0("BANDWIDTH", i) ? (e * i.attributes.BANDWIDTH - 8 * s) / t : NaN
                },
                isLowestEnabledRendition: r1,
                isAudioOnly: r8,
                playlistMatch: r2,
                segmentDurationWithParts: rF
            };
            let {
                log: r3
            } = r_, r6 = (e, t) => `${e}-${t}`, r7 = (e, t, i) => `placeholder-uri-${e}-${t}-${i}`, r9 = ({
                onwarn: e,
                oninfo: t,
                manifestString: i,
                customTagParsers: s = [],
                customTagMappers: r = [],
                llhls: n
            }) => {
                let a = new k._b;
                e && a.on("warn", e), t && a.on("info", t), s.forEach(e => a.addParser(e)), r.forEach(e => a.addTagMapper(e)), a.push(i), a.end();
                let o = a.manifest;
                if (!n && (["preloadSegment", "skip", "serverControl", "renditionReports", "partInf", "partTargetDuration"].forEach(function(e) {
                        o.hasOwnProperty(e) && delete o[e]
                    }), o.segments && o.segments.forEach(function(e) {
                        ["parts", "preloadHints"].forEach(function(t) {
                            e.hasOwnProperty(t) && delete e[t]
                        })
                    })), !o.targetDuration) {
                    let t = 10;
                    o.segments && o.segments.length && (t = o.segments.reduce((e, t) => Math.max(e, t.duration), 0)), e && e({
                        message: `manifest has no targetDuration defaulting to ${t}`
                    }), o.targetDuration = t
                }
                let l = rq(o);
                if (l.length && !o.partTargetDuration) {
                    let t = l.reduce((e, t) => Math.max(e, t.duration), 0);
                    e && (e({
                        message: `manifest has no partTargetDuration defaulting to ${t}`
                    }), r3.error("LL-HLS manifest has parts but lacks required #EXT-X-PART-INF:PART-TARGET value. See https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-09#section-4.4.3.7. Playback is not guaranteed.")), o.partTargetDuration = t
                }
                return o
            }, ne = (e, t) => {
                e.mediaGroups && ["AUDIO", "SUBTITLES"].forEach(i => {
                    if (e.mediaGroups[i])
                        for (let s in e.mediaGroups[i])
                            for (let r in e.mediaGroups[i][s]) t(e.mediaGroups[i][s][r], i, s, r)
                })
            }, nt = ({
                playlist: e,
                uri: t,
                id: i
            }) => {
                e.id = i, e.playlistErrors_ = 0, t && (e.uri = t), e.attributes = e.attributes || {}
            }, ni = e => {
                let t = e.playlists.length;
                for (; t--;) {
                    let i = e.playlists[t];
                    nt({
                        playlist: i,
                        id: r6(t, i.uri)
                    }), i.resolvedUri = rk(e.uri, i.uri), e.playlists[i.id] = i, e.playlists[i.uri] = i, i.attributes.BANDWIDTH || r3.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.")
                }
            }, ns = e => {
                ne(e, t => {
                    t.uri && (t.resolvedUri = rk(e.uri, t.uri))
                })
            }, nr = (e, t) => {
                let i = r6(0, t),
                    s = {
                        mediaGroups: {
                            AUDIO: {},
                            VIDEO: {},
                            "CLOSED-CAPTIONS": {},
                            SUBTITLES: {}
                        },
                        uri: d().location.href,
                        resolvedUri: d().location.href,
                        playlists: [{
                            uri: t,
                            id: i,
                            resolvedUri: t,
                            attributes: {}
                        }]
                    };
                return s.playlists[i] = s.playlists[0], s.playlists[t] = s.playlists[0], s
            }, nn = (e, t, i = r7) => {
                e.uri = t;
                for (let t = 0; t < e.playlists.length; t++)
                    if (!e.playlists[t].uri) {
                        let i = `placeholder-uri-${t}`;
                        e.playlists[t].uri = i
                    }
                let s = r8(e);
                ne(e, (t, r, n, a) => {
                    if (!t.playlists || !t.playlists.length) {
                        if (s && "AUDIO" === r && !t.uri)
                            for (let t = 0; t < e.playlists.length; t++) {
                                let i = e.playlists[t];
                                if (i.attributes && i.attributes.AUDIO && i.attributes.AUDIO === n) return
                            }
                        t.playlists = [(0, b.Z)({}, t)]
                    }
                    t.playlists.forEach(function(t, s) {
                        let o = i(r, n, a, t),
                            l = r6(s, o);
                        t.uri ? t.resolvedUri = t.resolvedUri || rk(e.uri, t.uri) : (t.uri = 0 === s ? o : l, t.resolvedUri = t.uri), t.id = t.id || l, t.attributes = t.attributes || {}, e.playlists[t.id] = t, e.playlists[t.uri] = t
                    })
                }), ni(e), ns(e)
            };
            class na {
                constructor() {
                    this.offset_ = null, this.pendingDateRanges_ = new Map, this.processedDateRanges_ = new Map
                }
                setOffset(e = []) {
                    if (null !== this.offset_ || !e.length) return;
                    let [t] = e;
                    void 0 !== t.programDateTime && (this.offset_ = t.programDateTime / 1e3)
                }
                setPendingDateRanges(e = []) {
                    if (!e.length) return;
                    let [t] = e, i = t.startDate.getTime();
                    this.trimProcessedDateRanges_(i), this.pendingDateRanges_ = e.reduce((e, t) => (e.set(t.id, t), e), new Map)
                }
                processDateRange(e) {
                    this.pendingDateRanges_.delete(e.id), this.processedDateRanges_.set(e.id, e)
                }
                getDateRangesToProcess() {
                    if (null === this.offset_) return [];
                    let e = {},
                        t = [];
                    for (let i of (this.pendingDateRanges_.forEach((i, s) => {
                            if (!this.processedDateRanges_.has(s) && (i.startTime = i.startDate.getTime() / 1e3 - this.offset_, i.processDateRange = () => this.processDateRange(i), t.push(i), i.class)) {
                                if (e[i.class]) {
                                    let t = e[i.class].push(i);
                                    i.classListIndex = t - 1
                                } else e[i.class] = [i], i.classListIndex = 0
                            }
                        }), t)) {
                        let t = e[i.class] || [];
                        i.endDate ? i.endTime = i.endDate.getTime() / 1e3 - this.offset_ : i.endOnNext && t[i.classListIndex + 1] ? i.endTime = t[i.classListIndex + 1].startTime : i.duration ? i.endTime = i.startTime + i.duration : i.plannedDuration ? i.endTime = i.startTime + i.plannedDuration : i.endTime = i.startTime
                    }
                    return t
                }
                trimProcessedDateRanges_(e) {
                    new Map(this.processedDateRanges_).forEach((t, i) => {
                        t.startDate.getTime() < e && this.processedDateRanges_.delete(i)
                    })
                }
            }
            let {
                EventTarget: no
            } = r_, nl = (e, t) => {
                if (t.endList || !t.serverControl) return e;
                let i = {};
                if (t.serverControl.canBlockReload) {
                    let {
                        preloadSegment: e
                    } = t, s = t.mediaSequence + t.segments.length;
                    if (e) {
                        let r = e.parts || [],
                            n = rH(t) - 1;
                        n > -1 && n !== r.length - 1 && (i._HLS_part = n), (n > -1 || r.length) && s--
                    }
                    i._HLS_msn = s
                }
                if (t.serverControl && t.serverControl.canSkipUntil && (i._HLS_skip = t.serverControl.canSkipDateranges ? "v2" : "YES"), Object.keys(i).length) {
                    let t = new(d()).URL(e);
                    ["_HLS_skip", "_HLS_msn", "_HLS_part"].forEach(function(e) {
                        i.hasOwnProperty(e) && t.searchParams.set(e, i[e])
                    }), e = t.toString()
                }
                return e
            }, nh = (e, t) => {
                if (!e) return t;
                let i = rw(e, t);
                if (e.preloadHints && !t.preloadHints && delete i.preloadHints, e.parts && !t.parts) delete i.parts;
                else if (e.parts && t.parts)
                    for (let s = 0; s < t.parts.length; s++) e.parts && e.parts[s] && (i.parts[s] = rw(e.parts[s], t.parts[s]));
                return !e.skipped && t.skipped && (i.skipped = !1), e.preload && !t.preload && (i.preload = !1), i
            }, nd = (e, t, i) => {
                let s;
                let r = e.slice(),
                    n = t.slice();
                i = i || 0;
                let a = [];
                for (let e = 0; e < n.length; e++) {
                    let t = r[e + i],
                        o = n[e];
                    t ? (s = t.map || s, a.push(nh(t, o))) : (s && !o.map && (o.map = s), a.push(o))
                }
                return a
            }, nu = (e, t) => {
                !e.resolvedUri && e.uri && (e.resolvedUri = rk(t, e.uri)), e.key && !e.key.resolvedUri && (e.key.resolvedUri = rk(t, e.key.uri)), e.map && !e.map.resolvedUri && (e.map.resolvedUri = rk(t, e.map.uri)), e.map && e.map.key && !e.map.key.resolvedUri && (e.map.key.resolvedUri = rk(t, e.map.key.uri)), e.parts && e.parts.length && e.parts.forEach(e => {
                    e.resolvedUri || (e.resolvedUri = rk(t, e.uri))
                }), e.preloadHints && e.preloadHints.length && e.preloadHints.forEach(e => {
                    e.resolvedUri || (e.resolvedUri = rk(t, e.uri))
                })
            }, nc = function(e) {
                let t = e.segments || [],
                    i = e.preloadSegment;
                if (i && i.parts && i.parts.length) {
                    if (i.preloadHints) {
                        for (let e = 0; e < i.preloadHints.length; e++)
                            if ("MAP" === i.preloadHints[e].type) return t
                    }
                    i.duration = e.targetDuration, i.preload = !0, t.push(i)
                }
                return t
            }, np = (e, t) => e === t || e.segments && t.segments && e.segments.length === t.segments.length && e.endList === t.endList && e.mediaSequence === t.mediaSequence && e.preloadSegment === t.preloadSegment, nm = (e, t, i = np) => {
                let s = rw(e, {}),
                    r = s.playlists[t.id];
                if (!r || i(r, t)) return null;
                t.segments = nc(t);
                let n = rw(r, t);
                if (n.preloadSegment && !t.preloadSegment && delete n.preloadSegment, r.segments) {
                    if (t.skip) {
                        t.segments = t.segments || [];
                        for (let e = 0; e < t.skip.skippedSegments; e++) t.segments.unshift({
                            skipped: !0
                        })
                    }
                    n.segments = nd(r.segments, t.segments, t.mediaSequence - r.mediaSequence)
                }
                n.segments.forEach(e => {
                    nu(e, n.resolvedUri)
                });
                for (let e = 0; e < s.playlists.length; e++) s.playlists[e].id === t.id && (s.playlists[e] = n);
                return s.playlists[t.id] = n, s.playlists[t.uri] = n, ne(e, (e, i, s, r) => {
                    if (e.playlists)
                        for (let i = 0; i < e.playlists.length; i++) t.id === e.playlists[i].id && (e.playlists[i] = n)
                }), s
            }, ng = (e, t) => {
                let i = e.segments || [],
                    s = i[i.length - 1],
                    r = s && s.parts && s.parts[s.parts.length - 1],
                    n = r && r.duration || s && s.duration;
                return t && n ? 1e3 * n : 500 * (e.partTargetDuration || e.targetDuration || 10)
            };
            class nf extends no {
                constructor(e, t, i = {}) {
                    if (super(), !e) throw Error("A non-empty playlist URL or object is required");
                    this.logger_ = rE("PlaylistLoader");
                    let {
                        withCredentials: s = !1
                    } = i;
                    this.src = e, this.vhs_ = t, this.withCredentials = s, this.addDateRangesToTextTrack_ = i.addDateRangesToTextTrack;
                    let r = t.options_;
                    this.customTagParsers = r && r.customTagParsers || [], this.customTagMappers = r && r.customTagMappers || [], this.llhls = r && r.llhls, this.dateRangesStorage_ = new na, this.state = "HAVE_NOTHING", this.handleMediaupdatetimeout_ = this.handleMediaupdatetimeout_.bind(this), this.on("mediaupdatetimeout", this.handleMediaupdatetimeout_), this.on("loadedplaylist", this.handleLoadedPlaylist_.bind(this))
                }
                handleLoadedPlaylist_() {
                    let e = this.media();
                    if (!e) return;
                    this.dateRangesStorage_.setOffset(e.segments), this.dateRangesStorage_.setPendingDateRanges(e.dateRanges);
                    let t = this.dateRangesStorage_.getDateRangesToProcess();
                    t.length && this.addDateRangesToTextTrack_ && this.addDateRangesToTextTrack_(t)
                }
                handleMediaupdatetimeout_() {
                    if ("HAVE_METADATA" !== this.state) return;
                    let e = this.media(),
                        t = rk(this.main.uri, e.uri);
                    this.llhls && (t = nl(t, e)), this.state = "HAVE_CURRENT_METADATA", this.request = this.vhs_.xhr({
                        uri: t,
                        withCredentials: this.withCredentials,
                        requestType: "hls-playlist"
                    }, (e, t) => {
                        if (this.request) {
                            if (e) return this.playlistRequestError(this.request, this.media(), "HAVE_METADATA");
                            this.haveMetadata({
                                playlistString: this.request.responseText,
                                url: this.media().uri,
                                id: this.media().id
                            })
                        }
                    })
                }
                playlistRequestError(e, t, i) {
                    let {
                        uri: s,
                        id: r
                    } = t;
                    this.request = null, i && (this.state = i), this.error = {
                        playlist: this.main.playlists[r],
                        status: e.status,
                        message: `HLS playlist request error at URL: ${s}.`,
                        responseText: e.responseText,
                        code: e.status >= 500 ? 4 : 2,
                        metadata: {
                            errorType: r_.Error.HlsPlaylistRequestError
                        }
                    }, this.trigger("error")
                }
                parseManifest_({
                    url: e,
                    manifestString: t
                }) {
                    return r9({
                        onwarn: ({
                            message: t
                        }) => this.logger_(`m3u8-parser warn for ${e}: ${t}`),
                        oninfo: ({
                            message: t
                        }) => this.logger_(`m3u8-parser info for ${e}: ${t}`),
                        manifestString: t,
                        customTagParsers: this.customTagParsers,
                        customTagMappers: this.customTagMappers,
                        llhls: this.llhls
                    })
                }
                haveMetadata({
                    playlistString: e,
                    playlistObject: t,
                    url: i,
                    id: s
                }) {
                    this.request = null, this.state = "HAVE_METADATA";
                    let r = t || this.parseManifest_({
                        url: i,
                        manifestString: e
                    });
                    r.lastRequest = Date.now(), nt({
                        playlist: r,
                        uri: i,
                        id: s
                    });
                    let n = nm(this.main, r);
                    this.targetDuration = r.partTargetDuration || r.targetDuration, this.pendingMedia_ = null, n ? (this.main = n, this.media_ = this.main.playlists[s]) : this.trigger("playlistunchanged"), this.updateMediaUpdateTimeout_(ng(this.media(), !!n)), this.trigger("loadedplaylist")
                }
                dispose() {
                    this.trigger("dispose"), this.stopRequest(), d().clearTimeout(this.mediaUpdateTimeout), d().clearTimeout(this.finalRenditionTimeout), this.dateRangesStorage_ = new na, this.off()
                }
                stopRequest() {
                    if (this.request) {
                        let e = this.request;
                        this.request = null, e.onreadystatechange = null, e.abort()
                    }
                }
                media(e, t) {
                    if (!e) return this.media_;
                    if ("HAVE_NOTHING" === this.state) throw Error("Cannot switch media playlist from " + this.state);
                    if ("string" == typeof e) {
                        if (!this.main.playlists[e]) throw Error("Unknown playlist URI: " + e);
                        e = this.main.playlists[e]
                    }
                    if (d().clearTimeout(this.finalRenditionTimeout), t) {
                        let t = (e.partTargetDuration || e.targetDuration) / 2 * 1e3 || 5e3;
                        this.finalRenditionTimeout = d().setTimeout(this.media.bind(this, e, !1), t);
                        return
                    }
                    let i = this.state,
                        s = !this.media_ || e.id !== this.media_.id,
                        r = this.main.playlists[e.id];
                    if (r && r.endList || e.endList && e.segments.length) {
                        this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null), this.state = "HAVE_METADATA", this.media_ = e, s && (this.trigger("mediachanging"), "HAVE_MAIN_MANIFEST" === i ? this.trigger("loadedmetadata") : this.trigger("mediachange"));
                        return
                    }
                    if (this.updateMediaUpdateTimeout_(ng(e, !0)), s) {
                        if (this.state = "SWITCHING_MEDIA", this.request) {
                            if (e.resolvedUri === this.request.url) return;
                            this.request.onreadystatechange = null, this.request.abort(), this.request = null
                        }
                        this.media_ && this.trigger("mediachanging"), this.pendingMedia_ = e, this.request = this.vhs_.xhr({
                            uri: e.resolvedUri,
                            withCredentials: this.withCredentials,
                            requestType: "hls-playlist"
                        }, (t, s) => {
                            if (this.request) {
                                if (e.lastRequest = Date.now(), e.resolvedUri = rC(e.resolvedUri, s), t) return this.playlistRequestError(this.request, e, i);
                                this.haveMetadata({
                                    playlistString: s.responseText,
                                    url: e.uri,
                                    id: e.id
                                }), "HAVE_MAIN_MANIFEST" === i ? this.trigger("loadedmetadata") : this.trigger("mediachange")
                            }
                        })
                    }
                }
                pause() {
                    this.mediaUpdateTimeout && (d().clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null), this.stopRequest(), "HAVE_NOTHING" === this.state && (this.started = !1), "SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MAIN_MANIFEST" : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA")
                }
                load(e) {
                    this.mediaUpdateTimeout && (d().clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null);
                    let t = this.media();
                    if (e) {
                        let e = t ? (t.partTargetDuration || t.targetDuration) / 2 * 1e3 : 5e3;
                        this.mediaUpdateTimeout = d().setTimeout(() => {
                            this.mediaUpdateTimeout = null, this.load()
                        }, e);
                        return
                    }
                    if (!this.started) {
                        this.start();
                        return
                    }
                    t && !t.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist")
                }
                updateMediaUpdateTimeout_(e) {
                    this.mediaUpdateTimeout && (d().clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null), this.media() && !this.media().endList && (this.mediaUpdateTimeout = d().setTimeout(() => {
                        this.mediaUpdateTimeout = null, this.trigger("mediaupdatetimeout"), this.updateMediaUpdateTimeout_(e)
                    }, e))
                }
                start() {
                    if (this.started = !0, "object" == typeof this.src) {
                        this.src.uri || (this.src.uri = d().location.href), this.src.resolvedUri = this.src.uri, setTimeout(() => {
                            this.setupInitialPlaylist(this.src)
                        }, 0);
                        return
                    }
                    this.request = this.vhs_.xhr({
                        uri: this.src,
                        withCredentials: this.withCredentials,
                        requestType: "hls-playlist"
                    }, (e, t) => {
                        if (!this.request) return;
                        if (this.request = null, e) return this.error = {
                            status: t.status,
                            message: `HLS playlist request error at URL: ${this.src}.`,
                            responseText: t.responseText,
                            code: 2,
                            metadata: {
                                errorType: r_.Error.HlsPlaylistRequestError
                            }
                        }, "HAVE_NOTHING" === this.state && (this.started = !1), this.trigger("error");
                        this.src = rC(this.src, t);
                        let i = this.parseManifest_({
                            manifestString: t.responseText,
                            url: this.src
                        });
                        this.setupInitialPlaylist(i)
                    })
                }
                srcUri() {
                    return "string" == typeof this.src ? this.src : this.src.uri
                }
                setupInitialPlaylist(e) {
                    if (this.state = "HAVE_MAIN_MANIFEST", e.playlists) {
                        this.main = e, nn(this.main, this.srcUri()), e.playlists.forEach(e => {
                            e.segments = nc(e), e.segments.forEach(t => {
                                nu(t, e.resolvedUri)
                            })
                        }), this.trigger("loadedplaylist"), this.request || this.media(this.main.playlists[0]);
                        return
                    }
                    let t = this.srcUri() || d().location.href;
                    this.main = nr(e, t), this.haveMetadata({
                        playlistObject: e,
                        url: t,
                        id: this.main.playlists[0].id
                    }), this.trigger("loadedmetadata")
                }
                updateOrDeleteClone(e, t) {
                    let i = this.main,
                        s = e.ID,
                        r = i.playlists.length;
                    for (; r--;) {
                        let n = i.playlists[r];
                        if (n.attributes["PATHWAY-ID"] === s) {
                            let a = n.resolvedUri,
                                o = n.id;
                            if (t) {
                                let t = this.createCloneURI_(n.resolvedUri, e),
                                    a = r6(s, t),
                                    o = this.createCloneAttributes_(s, n.attributes),
                                    l = this.createClonePlaylist_(n, a, e, o);
                                i.playlists[r] = l, i.playlists[a] = l, i.playlists[t] = l
                            } else i.playlists.splice(r, 1);
                            delete i.playlists[o], delete i.playlists[a]
                        }
                    }
                    this.updateOrDeleteCloneMedia(e, t)
                }
                updateOrDeleteCloneMedia(e, t) {
                    let i = this.main,
                        s = e.ID;
                    ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(e => {
                        if (i.mediaGroups[e] && i.mediaGroups[e][s]) {
                            for (let t in i.mediaGroups[e])
                                if (t === s) {
                                    for (let s in i.mediaGroups[e][t]) i.mediaGroups[e][t][s].playlists.forEach((e, t) => {
                                        let s = i.playlists[e.id],
                                            r = s.id,
                                            n = s.resolvedUri;
                                        delete i.playlists[r], delete i.playlists[n]
                                    });
                                    delete i.mediaGroups[e][t]
                                }
                        }
                    }), t && this.createClonedMediaGroups_(e)
                }
                addClonePathway(e, t = {}) {
                    let i = this.main,
                        s = i.playlists.length,
                        r = this.createCloneURI_(t.resolvedUri, e),
                        n = r6(e.ID, r),
                        a = this.createCloneAttributes_(e.ID, t.attributes),
                        o = this.createClonePlaylist_(t, n, e, a);
                    i.playlists[s] = o, i.playlists[n] = o, i.playlists[r] = o, this.createClonedMediaGroups_(e)
                }
                createClonedMediaGroups_(e) {
                    let t = e.ID,
                        i = e["BASE-ID"],
                        s = this.main;
                    ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(r => {
                        if (s.mediaGroups[r] && !s.mediaGroups[r][t]) {
                            for (let n in s.mediaGroups[r])
                                if (n === i)
                                    for (let i in s.mediaGroups[r][t] = {}, s.mediaGroups[r][n]) {
                                        let a = s.mediaGroups[r][n][i];
                                        s.mediaGroups[r][t][i] = (0, b.Z)({}, a);
                                        let o = s.mediaGroups[r][t][i],
                                            l = this.createCloneURI_(a.resolvedUri, e);
                                        o.resolvedUri = l, o.uri = l, o.playlists = [], a.playlists.forEach((n, a) => {
                                            let l = s.playlists[n.id],
                                                h = r7(r, t, i),
                                                d = r6(t, h);
                                            if (l && !s.playlists[d]) {
                                                let t = this.createClonePlaylist_(l, d, e),
                                                    i = t.resolvedUri;
                                                s.playlists[d] = t, s.playlists[i] = t
                                            }
                                            o.playlists[a] = this.createClonePlaylist_(n, d, e)
                                        })
                                    }
                        }
                    })
                }
                createClonePlaylist_(e, t, i, s) {
                    let r = this.createCloneURI_(e.resolvedUri, i),
                        n = {
                            resolvedUri: r,
                            uri: r,
                            id: t
                        };
                    return e.segments && (n.segments = []), s && (n.attributes = s), rw(e, n)
                }
                createCloneURI_(e, t) {
                    let i = new URL(e);
                    i.hostname = t["URI-REPLACEMENT"].HOST;
                    let s = t["URI-REPLACEMENT"].PARAMS;
                    for (let e of Object.keys(s)) i.searchParams.set(e, s[e]);
                    return i.href
                }
                createCloneAttributes_(e, t) {
                    let i = {
                        "PATHWAY-ID": e
                    };
                    return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(s => {
                        t[s] && (i[s] = e)
                    }), i
                }
                getKeyIdSet(e) {
                    if (e.contentProtection) {
                        let t = new Set;
                        for (let i in e.contentProtection) {
                            let s = e.contentProtection[i].attributes.keyId;
                            s && t.add(s.toLowerCase())
                        }
                        return t
                    }
                }
            }
            let n_ = function(e, t, i, s) {
                    let r = "arraybuffer" === e.responseType ? e.response : e.responseText;
                    t || !r || (e.responseTime = Date.now(), e.roundTripTime = e.responseTime - e.requestTime, e.bytesReceived = r.byteLength || r.length, e.bandwidth || (e.bandwidth = Math.floor(e.bytesReceived / e.roundTripTime * 8e3))), i.headers && (e.responseHeaders = i.headers), t && "ETIMEDOUT" === t.code && (e.timedout = !0), t || e.aborted || 200 === i.statusCode || 206 === i.statusCode || 0 === i.statusCode || (t = Error("XHR Failed with a response of: " + (e && (r || e.responseText)))), s(t, e)
                },
                ny = (e, t) => {
                    if (!e || !e.size) return;
                    let i = t;
                    return e.forEach(e => {
                        i = e(i)
                    }), i
                },
                nv = (e, t, i, s) => {
                    e && e.size && e.forEach(e => {
                        e(t, i, s)
                    })
                },
                nT = function() {
                    let e = function e(t, i) {
                        t = rw({
                            timeout: 45e3
                        }, t);
                        let s = e.beforeRequest || r_.Vhs.xhr.beforeRequest,
                            r = e._requestCallbackSet || r_.Vhs.xhr._requestCallbackSet || new Set,
                            n = e._responseCallbackSet || r_.Vhs.xhr._responseCallbackSet;
                        s && "function" == typeof s && (r_.log.warn("beforeRequest is deprecated, use onRequest instead."), r.add(s));
                        let a = !0 === r_.Vhs.xhr.original ? r_.xhr : r_.Vhs.xhr,
                            o = ny(r, t);
                        r.delete(s);
                        let l = a(o || t, function(e, t) {
                                return nv(n, l, e, t), n_(l, e, t, i)
                            }),
                            h = l.abort;
                        return l.abort = function() {
                            return l.aborted = !0, h.apply(l, arguments)
                        }, l.uri = t.uri, l.requestTime = Date.now(), l
                    };
                    return e.original = !0, e
                },
                nb = function(e) {
                    var t;
                    let i = {};
                    return e.byterange && (i.Range = "bytes=" + (t = e.byterange).offset + "-" + ("bigint" == typeof t.offset || "bigint" == typeof t.length ? d().BigInt(t.offset) + d().BigInt(t.length) - d().BigInt(1) : t.offset + t.length - 1)), i
                },
                nS = function(e, t) {
                    let i = e.toString(16);
                    return "00".substring(0, 2 - i.length) + i + (t % 2 ? " " : "")
                },
                nk = function(e) {
                    return e >= 32 && e < 126 ? String.fromCharCode(e) : "."
                },
                nC = function(e) {
                    let t = {};
                    return Object.keys(e).forEach(i => {
                        let s = e[i];
                        (0, w.Au)(s) ? t[i] = {
                            bytes: s.buffer,
                            byteOffset: s.byteOffset,
                            byteLength: s.byteLength
                        }: t[i] = s
                    }), t
                },
                nE = function(e) {
                    let t = e.byterange || {
                        length: 1 / 0,
                        offset: 0
                    };
                    return [t.length, t.offset, e.resolvedUri].join(",")
                },
                nw = function(e) {
                    return e.resolvedUri
                },
                nx = e => {
                    let t = Array.prototype.slice.call(e),
                        i = "";
                    for (let e = 0; e < t.length / 16; e++) i += t.slice(16 * e, 16 * e + 16).map(nS).join("") + " " + t.slice(16 * e, 16 * e + 16).map(nk).join("") + "\n";
                    return i
                };
            var nI = Object.freeze({
                __proto__: null,
                createTransferableMessage: nC,
                initSegmentId: nE,
                segmentKeyId: nw,
                hexDump: nx,
                tagDump: ({
                    bytes: e
                }) => nx(e),
                textRanges: e => {
                    let t, i = "";
                    for (t = 0; t < e.length; t++) {
                        var s;
                        i += (s = t, e.start(s) + "-" + e.end(s) + " ")
                    }
                    return i
                }
            });
            let nP = (e, t) => {
                    if (!t.dateTimeObject) return null;
                    let i = t.videoTimingInfo.transmuxerPrependedSeconds,
                        s = t.videoTimingInfo.transmuxedPresentationStart;
                    return new Date(t.dateTimeObject.getTime() + 1e3 * (e - (s + i)))
                },
                nA = e => e.transmuxedPresentationEnd - e.transmuxedPresentationStart - e.transmuxerPrependedSeconds,
                nL = (e, t) => {
                    let i;
                    try {
                        i = new Date(e)
                    } catch (e) {
                        return null
                    }
                    if (!t || !t.segments || 0 === t.segments.length) return null;
                    let s = t.segments[0];
                    if (i < new Date(s.dateTimeObject)) return null;
                    for (let e = 0; e < t.segments.length - 1 && (s = t.segments[e], !(i < new Date(t.segments[e + 1].dateTimeObject))); e++);
                    let r = t.segments[t.segments.length - 1],
                        n = r.dateTimeObject,
                        a = r.videoTimingInfo ? nA(r.videoTimingInfo) : r.duration + .25 * r.duration;
                    return i > new Date(n.getTime() + 1e3 * a) ? null : (i > new Date(n) && (s = r), {
                        segment: s,
                        estimatedStart: s.videoTimingInfo ? s.videoTimingInfo.transmuxedPresentationStart : r5.duration(t, t.mediaSequence + t.segments.indexOf(s)),
                        type: s.videoTimingInfo ? "accurate" : "estimate"
                    })
                },
                nD = (e, t) => {
                    let i;
                    if (!t || !t.segments || 0 === t.segments.length) return null;
                    let s = 0;
                    for (let r = 0; r < t.segments.length && !(e <= (s = (i = t.segments[r]).videoTimingInfo ? i.videoTimingInfo.transmuxedPresentationEnd : s + i.duration)); r++);
                    let r = t.segments[t.segments.length - 1];
                    if (r.videoTimingInfo && r.videoTimingInfo.transmuxedPresentationEnd < e) return null;
                    if (e > s) {
                        if (e > s + .25 * r.duration) return null;
                        i = r
                    }
                    return {
                        segment: i,
                        estimatedStart: i.videoTimingInfo ? i.videoTimingInfo.transmuxedPresentationStart : s - i.duration,
                        type: i.videoTimingInfo ? "accurate" : "estimate"
                    }
                },
                nO = (e, t) => {
                    let i, s;
                    try {
                        i = new Date(e), s = new Date(t)
                    } catch (e) {}
                    let r = i.getTime();
                    return (s.getTime() - r) / 1e3
                },
                nM = e => {
                    if (!e.segments || 0 === e.segments.length) return !1;
                    for (let t = 0; t < e.segments.length; t++)
                        if (!e.segments[t].dateTimeObject) return !1;
                    return !0
                },
                nR = ({
                    playlist: e,
                    time: t,
                    callback: i
                }) => {
                    if (!i) throw Error("getProgramTime: callback must be provided");
                    if (!e || void 0 === t) return i({
                        message: "getProgramTime: playlist and time must be provided"
                    });
                    let s = nD(t, e);
                    if (!s) return i({
                        message: "valid programTime was not found"
                    });
                    if ("estimate" === s.type) return i({
                        message: "Accurate programTime could not be determined. Please seek to e.seekTime and try again",
                        seekTime: s.estimatedStart
                    });
                    let r = {
                            mediaSeconds: t
                        },
                        n = nP(t, s.segment);
                    return n && (r.programDateTime = n.toISOString()), i(null, r)
                },
                nU = ({
                    programTime: e,
                    playlist: t,
                    retryCount: i = 2,
                    seekTo: s,
                    pauseAfterSeek: r = !0,
                    tech: n,
                    callback: a
                }) => {
                    if (!a) throw Error("seekToProgramTime: callback must be provided");
                    if (void 0 === e || !t || !s) return a({
                        message: "seekToProgramTime: programTime, seekTo and playlist must be provided"
                    });
                    if (!t.endList && !n.hasStarted_) return a({
                        message: "player must be playing a live stream to start buffering"
                    });
                    if (!nM(t)) return a({
                        message: "programDateTime tags must be provided in the manifest " + t.resolvedUri
                    });
                    let o = nL(e, t);
                    if (!o) return a({
                        message: `${e} was not found in the stream`
                    });
                    let l = o.segment,
                        h = nO(l.dateTimeObject, e);
                    if ("estimate" === o.type) return 0 === i ? a({
                        message: `${e} is not buffered yet. Try again`
                    }) : (s(o.estimatedStart + h), void n.one("seeked", () => {
                        nU({
                            programTime: e,
                            playlist: t,
                            retryCount: i - 1,
                            seekTo: s,
                            pauseAfterSeek: r,
                            tech: n,
                            callback: a
                        })
                    }));
                    let d = l.start + h;
                    n.one("seeked", () => a(null, n.currentTime())), r && n.pause(), s(d)
                },
                nB = (e, t) => {
                    if (4 === e.readyState) return t()
                },
                nN = (e, t, i) => {
                    let s, r = [],
                        n = !1,
                        a = function(e, t, s, r) {
                            return t.abort(), n = !0, i(e, t, s, r)
                        },
                        o = function(e, t) {
                            if (n) return;
                            if (e) return a(e, t, "", r);
                            let i = t.responseText.substring(r && r.byteLength || 0, t.responseText.length);
                            if (r = (0, w.lx)(r, (0, w.qX)(i, !0)), s = s || (0, A.c)(r), r.length < 10 || s && r.length < s + 2) return nB(t, () => a(e, t, "", r));
                            let o = (0, L.Xm)(r);
                            return "ts" === o && r.length < 188 || !o && r.length < 376 ? nB(t, () => a(e, t, "", r)) : a(null, t, o, r)
                        },
                        l = t({
                            uri: e,
                            beforeSend(e) {
                                e.overrideMimeType("text/plain; charset=x-user-defined"), e.addEventListener("progress", function({
                                    total: t,
                                    loaded: i
                                }) {
                                    return n_(e, null, {
                                        statusCode: e.status
                                    }, o)
                                })
                            }
                        }, function(e, t) {
                            return n_(l, e, t, o)
                        });
                    return l
                },
                {
                    EventTarget: nj
                } = r_,
                nF = function(e, t) {
                    if (!np(e, t) || e.sidx && t.sidx && (e.sidx.offset !== t.sidx.offset || e.sidx.length !== t.sidx.length) || !e.sidx && t.sidx || e.sidx && !t.sidx || e.segments && !t.segments || !e.segments && t.segments) return !1;
                    if (!e.segments && !t.segments) return !0;
                    for (let i = 0; i < e.segments.length; i++) {
                        let s = e.segments[i],
                            r = t.segments[i];
                        if (s.uri !== r.uri) return !1;
                        if (!s.byterange && !r.byterange) continue;
                        let n = s.byterange,
                            a = r.byterange;
                        if (n && !a || !n && a || n.offset !== a.offset || n.length !== a.length) return !1
                    }
                    return !0
                },
                n$ = (e, t, i, s) => {
                    let r = s.attributes.NAME || i;
                    return `placeholder-uri-${e}-${t}-${r}`
                },
                nq = ({
                    mainXml: e,
                    srcUrl: t,
                    clientOffset: i,
                    sidxMapping: s,
                    previousManifest: r
                }) => {
                    let n = (0, x.Qc)(e, {
                        manifestUri: t,
                        clientOffset: i,
                        sidxMapping: s,
                        previousManifest: r
                    });
                    return nn(n, t, n$), n
                },
                nH = (e, t) => {
                    ne(e, (i, s, r, n) => {
                        n in t.mediaGroups[s][r] || delete e.mediaGroups[s][r][n]
                    })
                },
                nV = (e, t, i) => {
                    let s = !0,
                        r = rw(e, {
                            duration: t.duration,
                            minimumUpdatePeriod: t.minimumUpdatePeriod,
                            timelineStarts: t.timelineStarts
                        });
                    for (let e = 0; e < t.playlists.length; e++) {
                        let n = t.playlists[e];
                        if (n.sidx) {
                            let e = (0, x.mm)(n.sidx);
                            i && i[e] && i[e].sidx && (0, x.jp)(n, i[e].sidx, n.sidx.resolvedUri)
                        }
                        let a = nm(r, n, nF);
                        a && (r = a, s = !1)
                    }
                    return (ne(t, (e, t, i, n) => {
                        if (e.playlists && e.playlists.length) {
                            let a = e.playlists[0].id,
                                o = nm(r, e.playlists[0], nF);
                            o && (n in (r = o).mediaGroups[t][i] || (r.mediaGroups[t][i][n] = e), r.mediaGroups[t][i][n].playlists[0] = r.playlists[a], s = !1)
                        }
                    }), nH(r, t), t.minimumUpdatePeriod !== e.minimumUpdatePeriod && (s = !1), s) ? null : r
                },
                nz = (e, t) => (!!(!e.map && !t.map) || !!(e.map && t.map && e.map.byterange.offset === t.map.byterange.offset && e.map.byterange.length === t.map.byterange.length)) && e.uri === t.uri && e.byterange.offset === t.byterange.offset && e.byterange.length === t.byterange.length,
                nW = (e, t) => {
                    let i = {};
                    for (let s in e) {
                        let r = e[s].sidx;
                        if (r) {
                            let e = (0, x.mm)(r);
                            if (!t[e]) break;
                            nz(t[e].sidxInfo, r) && (i[e] = t[e])
                        }
                    }
                    return i
                },
                nG = (e, t) => {
                    let i = nW(e.playlists, t);
                    return ne(e, (e, s, r, n) => {
                        if (e.playlists && e.playlists.length) {
                            let s = e.playlists;
                            i = rw(i, nW(s, t))
                        }
                    }), i
                };
            class nK extends nj {
                constructor(e, t, i = {}, s) {
                    super(), this.mainPlaylistLoader_ = s || this, s || (this.isMain_ = !0);
                    let {
                        withCredentials: r = !1
                    } = i;
                    if (this.vhs_ = t, this.withCredentials = r, this.addMetadataToTextTrack = i.addMetadataToTextTrack, !e) throw Error("A non-empty playlist URL or object is required");
                    this.on("minimumUpdatePeriod", () => {
                        this.refreshXml_()
                    }), this.on("mediaupdatetimeout", () => {
                        this.refreshMedia_(this.media().id)
                    }), this.state = "HAVE_NOTHING", this.loadedPlaylists_ = {}, this.logger_ = rE("DashPlaylistLoader"), this.isMain_ ? (this.mainPlaylistLoader_.srcUrl = e, this.mainPlaylistLoader_.sidxMapping_ = {}) : this.childPlaylist_ = e
                }
                requestErrored_(e, t, i) {
                    return !this.request || ((this.request = null, e) ? (this.error = "object" != typeof e || e instanceof Error ? {
                        status: t.status,
                        message: "DASH request error at URL: " + t.uri,
                        response: t.response,
                        code: 2,
                        metadata: e.metadata
                    } : e, i && (this.state = i), this.trigger("error"), !0) : void 0)
                }
                addSidxSegments_(e, t, i) {
                    let s = e.sidx && (0, x.mm)(e.sidx);
                    if (!e.sidx || !s || this.mainPlaylistLoader_.sidxMapping_[s]) {
                        this.mediaRequest_ = d().setTimeout(() => i(!1), 0);
                        return
                    }
                    let r = rC(e.sidx.resolvedUri),
                        n = (r, n) => {
                            let a;
                            if (this.requestErrored_(r, n, t)) return;
                            let o = this.mainPlaylistLoader_.sidxMapping_;
                            try {
                                a = P()((0, w.Ki)(n.response).subarray(8))
                            } catch (e) {
                                e.metadata = {
                                    errorType: r_.Error.DashManifestSidxParsingError
                                }, this.requestErrored_(e, n, t);
                                return
                            }
                            return o[s] = {
                                sidxInfo: e.sidx,
                                sidx: a
                            }, (0, x.jp)(e, a, e.sidx.resolvedUri), i(!0)
                        };
                    this.request = nN(r, this.vhs_.xhr, (t, i, s, a) => {
                        if (t) return n(t, i);
                        if (!s || "mp4" !== s) {
                            let t = s || "unknown";
                            return n({
                                status: i.status,
                                message: `Unsupported ${t} container type for sidx segment at URL: ${r}`,
                                response: "",
                                playlist: e,
                                internal: !0,
                                playlistExclusionDuration: 1 / 0,
                                code: 2,
                                metadata: {
                                    errorType: r_.Error.UnsupportedSidxContainer,
                                    sidxContainer: t
                                }
                            }, i)
                        }
                        let {
                            offset: o,
                            length: l
                        } = e.sidx.byterange;
                        if (a.length >= l + o) return n(t, {
                            response: a.subarray(o, o + l),
                            status: i.status,
                            uri: i.uri
                        });
                        this.request = this.vhs_.xhr({
                            uri: r,
                            responseType: "arraybuffer",
                            headers: nb({
                                byterange: e.sidx.byterange
                            })
                        }, n)
                    })
                }
                dispose() {
                    this.trigger("dispose"), this.stopRequest(), this.loadedPlaylists_ = {}, d().clearTimeout(this.minimumUpdatePeriodTimeout_), d().clearTimeout(this.mediaRequest_), d().clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null, this.mediaRequest_ = null, this.minimumUpdatePeriodTimeout_ = null, this.mainPlaylistLoader_.createMupOnMedia_ && (this.off("loadedmetadata", this.mainPlaylistLoader_.createMupOnMedia_), this.mainPlaylistLoader_.createMupOnMedia_ = null), this.off()
                }
                hasPendingRequest() {
                    return this.request || this.mediaRequest_
                }
                stopRequest() {
                    if (this.request) {
                        let e = this.request;
                        this.request = null, e.onreadystatechange = null, e.abort()
                    }
                }
                media(e) {
                    if (!e) return this.media_;
                    if ("HAVE_NOTHING" === this.state) throw Error("Cannot switch media playlist from " + this.state);
                    let t = this.state;
                    if ("string" == typeof e) {
                        if (!this.mainPlaylistLoader_.main.playlists[e]) throw Error("Unknown playlist URI: " + e);
                        e = this.mainPlaylistLoader_.main.playlists[e]
                    }
                    let i = !this.media_ || e.id !== this.media_.id;
                    if (i && this.loadedPlaylists_[e.id] && this.loadedPlaylists_[e.id].endList) {
                        this.state = "HAVE_METADATA", this.media_ = e, i && (this.trigger("mediachanging"), this.trigger("mediachange"));
                        return
                    }
                    i && (this.media_ && this.trigger("mediachanging"), this.addSidxSegments_(e, t, i => {
                        this.haveMetadata({
                            startingState: t,
                            playlist: e
                        })
                    }))
                }
                haveMetadata({
                    startingState: e,
                    playlist: t
                }) {
                    this.state = "HAVE_METADATA", this.loadedPlaylists_[t.id] = t, this.mediaRequest_ = null, this.refreshMedia_(t.id), "HAVE_MAIN_MANIFEST" === e ? this.trigger("loadedmetadata") : this.trigger("mediachange")
                }
                pause() {
                    this.mainPlaylistLoader_.createMupOnMedia_ && (this.off("loadedmetadata", this.mainPlaylistLoader_.createMupOnMedia_), this.mainPlaylistLoader_.createMupOnMedia_ = null), this.stopRequest(), d().clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null, this.isMain_ && (d().clearTimeout(this.mainPlaylistLoader_.minimumUpdatePeriodTimeout_), this.mainPlaylistLoader_.minimumUpdatePeriodTimeout_ = null), "HAVE_NOTHING" === this.state && (this.started = !1)
                }
                load(e) {
                    d().clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null;
                    let t = this.media();
                    if (e) {
                        let e = t ? t.targetDuration / 2 * 1e3 : 5e3;
                        this.mediaUpdateTimeout = d().setTimeout(() => this.load(), e);
                        return
                    }
                    if (!this.started) {
                        this.start();
                        return
                    }
                    t && !t.endList ? (this.isMain_ && !this.minimumUpdatePeriodTimeout_ && (this.trigger("minimumUpdatePeriod"), this.updateMinimumUpdatePeriodTimeout_()), this.trigger("mediaupdatetimeout")) : this.trigger("loadedplaylist")
                }
                start() {
                    if (this.started = !0, !this.isMain_) {
                        this.mediaRequest_ = d().setTimeout(() => this.haveMain_(), 0);
                        return
                    }
                    this.requestMain_((e, t) => {
                        this.haveMain_(), this.hasPendingRequest() || this.media_ || this.media(this.mainPlaylistLoader_.main.playlists[0])
                    })
                }
                requestMain_(e) {
                    this.request = this.vhs_.xhr({
                        uri: this.mainPlaylistLoader_.srcUrl,
                        withCredentials: this.withCredentials,
                        requestType: "dash-manifest"
                    }, (t, i) => {
                        if (this.requestErrored_(t, i)) {
                            "HAVE_NOTHING" === this.state && (this.started = !1);
                            return
                        }
                        let s = i.responseText !== this.mainPlaylistLoader_.mainXml_;
                        if (this.mainPlaylistLoader_.mainXml_ = i.responseText, i.responseHeaders && i.responseHeaders.date ? this.mainLoaded_ = Date.parse(i.responseHeaders.date) : this.mainLoaded_ = Date.now(), this.mainPlaylistLoader_.srcUrl = rC(this.mainPlaylistLoader_.srcUrl, i), s) {
                            this.handleMain_(), this.syncClientServerClock_(() => e(i, s));
                            return
                        }
                        return e(i, s)
                    })
                }
                syncClientServerClock_(e) {
                    let t = (0, x.LG)(this.mainPlaylistLoader_.mainXml_);
                    return null === t ? (this.mainPlaylistLoader_.clientOffset_ = this.mainLoaded_ - Date.now(), e()) : "DIRECT" === t.method ? (this.mainPlaylistLoader_.clientOffset_ = t.value - Date.now(), e()) : void(this.request = this.vhs_.xhr({
                        uri: rk(this.mainPlaylistLoader_.srcUrl, t.value),
                        method: t.method,
                        withCredentials: this.withCredentials,
                        requestType: "dash-clock-sync"
                    }, (i, s) => {
                        let r;
                        if (this.request) {
                            if (i) return this.mainPlaylistLoader_.clientOffset_ = this.mainLoaded_ - Date.now(), e();
                            r = "HEAD" === t.method ? s.responseHeaders && s.responseHeaders.date ? Date.parse(s.responseHeaders.date) : this.mainLoaded_ : Date.parse(s.responseText), this.mainPlaylistLoader_.clientOffset_ = r - Date.now(), e()
                        }
                    }))
                }
                haveMain_() {
                    this.state = "HAVE_MAIN_MANIFEST", this.isMain_ ? this.trigger("loadedplaylist") : this.media_ || this.media(this.childPlaylist_)
                }
                handleMain_() {
                    this.mediaRequest_ = null;
                    let e = this.mainPlaylistLoader_.main,
                        t = nq({
                            mainXml: this.mainPlaylistLoader_.mainXml_,
                            srcUrl: this.mainPlaylistLoader_.srcUrl,
                            clientOffset: this.mainPlaylistLoader_.clientOffset_,
                            sidxMapping: this.mainPlaylistLoader_.sidxMapping_,
                            previousManifest: e
                        });
                    e && (t = nV(e, t, this.mainPlaylistLoader_.sidxMapping_)), this.mainPlaylistLoader_.main = t || e;
                    let i = this.mainPlaylistLoader_.main.locations && this.mainPlaylistLoader_.main.locations[0];
                    return i && i !== this.mainPlaylistLoader_.srcUrl && (this.mainPlaylistLoader_.srcUrl = i), (!e || t && t.minimumUpdatePeriod !== e.minimumUpdatePeriod) && this.updateMinimumUpdatePeriodTimeout_(), this.addEventStreamToMetadataTrack_(t), !!t
                }
                updateMinimumUpdatePeriodTimeout_() {
                    let e = this.mainPlaylistLoader_;
                    e.createMupOnMedia_ && (e.off("loadedmetadata", e.createMupOnMedia_), e.createMupOnMedia_ = null), e.minimumUpdatePeriodTimeout_ && (d().clearTimeout(e.minimumUpdatePeriodTimeout_), e.minimumUpdatePeriodTimeout_ = null);
                    let t = e.main && e.main.minimumUpdatePeriod;
                    if (0 === t && (e.media() ? t = 1e3 * e.media().targetDuration : (e.createMupOnMedia_ = e.updateMinimumUpdatePeriodTimeout_, e.one("loadedmetadata", e.createMupOnMedia_))), "number" != typeof t || t <= 0) {
                        t < 0 && this.logger_(`found invalid minimumUpdatePeriod of ${t}, not setting a timeout`);
                        return
                    }
                    this.createMUPTimeout_(t)
                }
                createMUPTimeout_(e) {
                    let t = this.mainPlaylistLoader_;
                    t.minimumUpdatePeriodTimeout_ = d().setTimeout(() => {
                        t.minimumUpdatePeriodTimeout_ = null, t.trigger("minimumUpdatePeriod"), t.createMUPTimeout_(e)
                    }, e)
                }
                refreshXml_() {
                    this.requestMain_((e, t) => {
                        t && (this.media_ && (this.media_ = this.mainPlaylistLoader_.main.playlists[this.media_.id]), this.mainPlaylistLoader_.sidxMapping_ = nG(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.sidxMapping_), this.addSidxSegments_(this.media(), this.state, e => {
                            this.refreshMedia_(this.media().id)
                        }))
                    })
                }
                refreshMedia_(e) {
                    if (!e) throw Error("refreshMedia_ must take a media id");
                    this.media_ && this.isMain_ && this.handleMain_();
                    let t = this.mainPlaylistLoader_.main.playlists,
                        i = !this.media_ || this.media_ !== t[e];
                    if (i ? this.media_ = t[e] : this.trigger("playlistunchanged"), !this.mediaUpdateTimeout) {
                        let e = () => {
                            this.media().endList || (this.mediaUpdateTimeout = d().setTimeout(() => {
                                this.trigger("mediaupdatetimeout"), e()
                            }, ng(this.media(), !!i)))
                        };
                        e()
                    }
                    this.trigger("loadedplaylist")
                }
                addEventStreamToMetadataTrack_(e) {
                    if (e && this.mainPlaylistLoader_.main.eventStream) {
                        let e = this.mainPlaylistLoader_.main.eventStream.map(e => ({
                            cueTime: e.start,
                            frames: [{
                                data: e.messageData
                            }]
                        }));
                        this.addMetadataToTextTrack("EventStream", e, this.mainPlaylistLoader_.main.duration)
                    }
                }
                getKeyIdSet(e) {
                    if (e.contentProtection) {
                        let t = new Set;
                        for (let i in e.contentProtection) {
                            let s = e.contentProtection[i].attributes["cenc:default_KID"];
                            s && t.add(s.replace(/-/g, "").toLowerCase())
                        }
                        return t
                    }
                }
            }
            var nQ = {
                GOAL_BUFFER_LENGTH: 30,
                MAX_GOAL_BUFFER_LENGTH: 60,
                BACK_BUFFER_LENGTH: 30,
                GOAL_BUFFER_LENGTH_RATE: 1,
                INITIAL_BANDWIDTH: 4194304,
                BANDWIDTH_VARIANCE: 1.2,
                BUFFER_LOW_WATER_LINE: 0,
                MAX_BUFFER_LOW_WATER_LINE: 30,
                EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE: 16,
                BUFFER_LOW_WATER_LINE_RATE: 1,
                BUFFER_HIGH_WATER_LINE: 30
            };
            let nY = e => {
                    let t = new Uint8Array(new ArrayBuffer(e.length));
                    for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
                    return t.buffer
                },
                nX = function(e) {
                    return e.on = e.addEventListener, e.off = e.removeEventListener, e
                },
                nJ = function(e) {
                    try {
                        return URL.createObjectURL(new Blob([e], {
                            type: "application/javascript"
                        }))
                    } catch (i) {
                        let t = new BlobBuilder;
                        return t.append(e), URL.createObjectURL(t.getBlob())
                    }
                },
                nZ = function(e) {
                    return function() {
                        let t = nJ(e),
                            i = nX(new Worker(t));
                        i.objURL = t;
                        let s = i.terminate;
                        return i.on = i.addEventListener, i.off = i.removeEventListener, i.terminate = function() {
                            return URL.revokeObjectURL(t), s.call(this)
                        }, i
                    }
                },
                n0 = function(e) {
                    return `var browserWorkerPolyFill = ${nX.toString()};
browserWorkerPolyFill(self);
` + e
                },
                n1 = function(e) {
                    return e.toString().replace(/^function.+?{/, "").slice(0, -1)
                };
            var n2 = nZ(n0(n1(function() {
                var e, t, s, r, n, a, o, l, h, d, u, c, p, m, g, f, _, y, v, T, b, S, k, C, E, w, x, I, P, A, L, D, O, M, R, U, B, N, j, F, $, q, H, V, z, W, G, K, Q, Y, X, J, Z, ee, et, ei, es, er, en, ea, eo, el, eh, ed, eu = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== i.g ? i.g : "undefined" != typeof self ? self : {},
                    ec = function() {
                        this.init = function() {
                            var e = {};
                            this.on = function(t, i) {
                                e[t] || (e[t] = []), e[t] = e[t].concat(i)
                            }, this.off = function(t, i) {
                                var s;
                                return !!e[t] && (s = e[t].indexOf(i), e[t] = e[t].slice(), e[t].splice(s, 1), s > -1)
                            }, this.trigger = function(t) {
                                var i, s, r, n;
                                if (i = e[t]) {
                                    if (2 == arguments.length)
                                        for (s = 0, r = i.length; s < r; ++s) i[s].call(this, arguments[1]);
                                    else {
                                        for (n = [], s = arguments.length, s = 1; s < arguments.length; ++s) n.push(arguments[s]);
                                        for (s = 0, r = i.length; s < r; ++s) i[s].apply(this, n)
                                    }
                                }
                            }, this.dispose = function() {
                                e = {}
                            }
                        }
                    };
                ec.prototype.pipe = function(e) {
                    return this.on("data", function(t) {
                        e.push(t)
                    }), this.on("done", function(t) {
                        e.flush(t)
                    }), this.on("partialdone", function(t) {
                        e.partialFlush(t)
                    }), this.on("endedtimeline", function(t) {
                        e.endTimeline(t)
                    }), this.on("reset", function(t) {
                        e.reset(t)
                    }), e
                }, ec.prototype.push = function(e) {
                    this.trigger("data", e)
                }, ec.prototype.flush = function(e) {
                    this.trigger("done", e)
                }, ec.prototype.partialFlush = function(e) {
                    this.trigger("partialdone", e)
                }, ec.prototype.endTimeline = function(e) {
                    this.trigger("endedtimeline", e)
                }, ec.prototype.reset = function(e) {
                    this.trigger("reset", e)
                };
                var ep = function(e) {
                    var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength);
                    return i.getBigUint64 ? (t = i.getBigUint64(0)) < Number.MAX_SAFE_INTEGER ? Number(t) : t : 4294967296 * i.getUint32(0) + i.getUint32(4)
                };
                ! function() {
                    var e;
                    if (I = {
                            avc1: [],
                            avcC: [],
                            btrt: [],
                            dinf: [],
                            dref: [],
                            esds: [],
                            ftyp: [],
                            hdlr: [],
                            mdat: [],
                            mdhd: [],
                            mdia: [],
                            mfhd: [],
                            minf: [],
                            moof: [],
                            moov: [],
                            mp4a: [],
                            mvex: [],
                            mvhd: [],
                            pasp: [],
                            sdtp: [],
                            smhd: [],
                            stbl: [],
                            stco: [],
                            stsc: [],
                            stsd: [],
                            stsz: [],
                            stts: [],
                            styp: [],
                            tfdt: [],
                            tfhd: [],
                            traf: [],
                            trak: [],
                            trun: [],
                            trex: [],
                            tkhd: [],
                            vmhd: []
                        }, "undefined" != typeof Uint8Array) {
                        for (e in I) I.hasOwnProperty(e) && (I[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                        P = new Uint8Array([105, 115, 111, 109]), L = new Uint8Array([97, 118, 99, 49]), A = new Uint8Array([0, 0, 0, 1]), D = {
                            video: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                            audio: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0])
                        }, R = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), M = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), B = U = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), N = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), j = U, O = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
                    }
                }(), a = function(e) {
                    var t, i, s = [],
                        r = 0;
                    for (t = 1; t < arguments.length; t++) s.push(arguments[t]);
                    for (t = s.length; t--;) r += s[t].byteLength;
                    for (new DataView((i = new Uint8Array(r + 8)).buffer, i.byteOffset, i.byteLength).setUint32(0, i.byteLength), i.set(e, 4), t = 0, r = 8; t < s.length; t++) i.set(s[t], r), r += s[t].byteLength;
                    return i
                }, o = function() {
                    return a(I.dinf, a(I.dref, R))
                }, l = function(e) {
                    return a(I.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, e.audioobjecttype << 3 | e.samplingfrequencyindex >>> 1, e.samplingfrequencyindex << 7 | e.channelcount << 3, 6, 1, 2]))
                }, h = function() {
                    return a(I.ftyp, P, A, P, L)
                }, b = function(e) {
                    return a(I.hdlr, D[e])
                }, d = function(e) {
                    return a(I.mdat, e)
                }, T = function(e) {
                    var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, e.duration >>> 24 & 255, e.duration >>> 16 & 255, e.duration >>> 8 & 255, 255 & e.duration, 85, 196, 0, 0]);
                    return e.samplerate && (t[12] = e.samplerate >>> 24 & 255, t[13] = e.samplerate >>> 16 & 255, t[14] = e.samplerate >>> 8 & 255, t[15] = 255 & e.samplerate), a(I.mdhd, t)
                }, v = function(e) {
                    return a(I.mdia, T(e), b(e.type), c(e))
                }, u = function(e) {
                    return a(I.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]))
                }, c = function(e) {
                    return a(I.minf, "video" === e.type ? a(I.vmhd, O) : a(I.smhd, M), o(), k(e))
                }, p = function(e, t) {
                    for (var i = [], s = t.length; s--;) i[s] = E(t[s]);
                    return a.apply(null, [I.moof, u(e)].concat(i))
                }, m = function(e) {
                    for (var t = e.length, i = []; t--;) i[t] = _(e[t]);
                    return a.apply(null, [I.moov, f(4294967295)].concat(i).concat(g(e)))
                }, g = function(e) {
                    for (var t = e.length, i = []; t--;) i[t] = w(e[t]);
                    return a.apply(null, [I.mvex].concat(i))
                }, f = function(e) {
                    var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                    return a(I.mvhd, t)
                }, S = function(e) {
                    var t, i, s = e.samples || [],
                        r = new Uint8Array(4 + s.length);
                    for (i = 0; i < s.length; i++) t = s[i].flags, r[i + 4] = t.dependsOn << 4 | t.isDependedOn << 2 | t.hasRedundancy;
                    return a(I.sdtp, r)
                }, k = function(e) {
                    return a(I.stbl, C(e), a(I.stts, j), a(I.stsc, B), a(I.stsz, N), a(I.stco, U))
                }, C = function(i) {
                    return a(I.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === i.type ? e(i) : t(i))
                }, e = function(e) {
                    var t, i, s = e.sps || [],
                        r = e.pps || [],
                        n = [],
                        o = [];
                    for (t = 0; t < s.length; t++) n.push((65280 & s[t].byteLength) >>> 8), n.push(255 & s[t].byteLength), n = n.concat(Array.prototype.slice.call(s[t]));
                    for (t = 0; t < r.length; t++) o.push((65280 & r[t].byteLength) >>> 8), o.push(255 & r[t].byteLength), o = o.concat(Array.prototype.slice.call(r[t]));
                    if (i = [I.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, (65280 & e.height) >> 8, 255 & e.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), a(I.avcC, new Uint8Array([1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255].concat([s.length], n, [r.length], o))), a(I.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]))], e.sarRatio) {
                        var l = e.sarRatio[0],
                            h = e.sarRatio[1];
                        i.push(a(I.pasp, new Uint8Array([(4278190080 & l) >> 24, (16711680 & l) >> 16, (65280 & l) >> 8, 255 & l, (4278190080 & h) >> 24, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h])))
                    }
                    return a.apply(null, i)
                }, t = function(e) {
                    return a(I.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.channelcount) >> 8, 255 & e.channelcount, (65280 & e.samplesize) >> 8, 255 & e.samplesize, 0, 0, 0, 0, (65280 & e.samplerate) >> 8, 255 & e.samplerate, 0, 0]), l(e))
                }, y = function(e) {
                    var t = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 0, (4278190080 & e.duration) >> 24, (16711680 & e.duration) >> 16, (65280 & e.duration) >> 8, 255 & e.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, 0, 0, (65280 & e.height) >> 8, 255 & e.height, 0, 0]);
                    return a(I.tkhd, t)
                }, E = function(e) {
                    var t, i, s, r, n, o;
                    return (t = a(I.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), n = Math.floor(e.baseMediaDecodeTime / 4294967296), o = Math.floor(e.baseMediaDecodeTime % 4294967296), i = a(I.tfdt, new Uint8Array([1, 0, 0, 0, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o])), "audio" === e.type) ? (s = x(e, 92), a(I.traf, t, i, s)) : (r = S(e), s = x(e, r.length + 92), a(I.traf, t, i, s, r))
                }, _ = function(e) {
                    return e.duration = e.duration || 4294967295, a(I.trak, y(e), v(e))
                }, w = function(e) {
                    var t = new Uint8Array([0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
                    return "video" !== e.type && (t[t.length - 1] = 0), a(I.trex, t)
                }, n = function(e, t) {
                    var i = 0,
                        s = 0,
                        r = 0,
                        n = 0;
                    return e.length && (void 0 !== e[0].duration && (i = 1), void 0 !== e[0].size && (s = 2), void 0 !== e[0].flags && (r = 4), void 0 !== e[0].compositionTimeOffset && (n = 8)), [0, 0, i | s | r | n, 1, (4278190080 & e.length) >>> 24, (16711680 & e.length) >>> 16, (65280 & e.length) >>> 8, 255 & e.length, (4278190080 & t) >>> 24, (16711680 & t) >>> 16, (65280 & t) >>> 8, 255 & t]
                }, r = function(e, t) {
                    var i, s, r, o, l, h;
                    for (t += 20 + 16 * (o = e.samples || []).length, (s = new Uint8Array((r = n(o, t)).length + 16 * o.length)).set(r), i = r.length, h = 0; h < o.length; h++) l = o[h], s[i++] = (4278190080 & l.duration) >>> 24, s[i++] = (16711680 & l.duration) >>> 16, s[i++] = (65280 & l.duration) >>> 8, s[i++] = 255 & l.duration, s[i++] = (4278190080 & l.size) >>> 24, s[i++] = (16711680 & l.size) >>> 16, s[i++] = (65280 & l.size) >>> 8, s[i++] = 255 & l.size, s[i++] = l.flags.isLeading << 2 | l.flags.dependsOn, s[i++] = l.flags.isDependedOn << 6 | l.flags.hasRedundancy << 4 | l.flags.paddingValue << 1 | l.flags.isNonSyncSample, s[i++] = 61440 & l.flags.degradationPriority, s[i++] = 15 & l.flags.degradationPriority, s[i++] = (4278190080 & l.compositionTimeOffset) >>> 24, s[i++] = (16711680 & l.compositionTimeOffset) >>> 16, s[i++] = (65280 & l.compositionTimeOffset) >>> 8, s[i++] = 255 & l.compositionTimeOffset;
                    return a(I.trun, s)
                }, s = function(e, t) {
                    var i, s, r, o, l, h;
                    for (t += 20 + 8 * (o = e.samples || []).length, (i = new Uint8Array((r = n(o, t)).length + 8 * o.length)).set(r), s = r.length, h = 0; h < o.length; h++) l = o[h], i[s++] = (4278190080 & l.duration) >>> 24, i[s++] = (16711680 & l.duration) >>> 16, i[s++] = (65280 & l.duration) >>> 8, i[s++] = 255 & l.duration, i[s++] = (4278190080 & l.size) >>> 24, i[s++] = (16711680 & l.size) >>> 16, i[s++] = (65280 & l.size) >>> 8, i[s++] = 255 & l.size;
                    return a(I.trun, i)
                }, x = function(e, t) {
                    return "audio" === e.type ? s(e, t) : r(e, t)
                };
                var em = function(e, t) {
                        var i = {
                            size: 0,
                            flags: {
                                isLeading: 0,
                                dependsOn: 1,
                                isDependedOn: 0,
                                hasRedundancy: 0,
                                degradationPriority: 0,
                                isNonSyncSample: 1
                            }
                        };
                        return i.dataOffset = t, i.compositionTimeOffset = e.pts - e.dts, i.duration = e.duration, i.size = 4 * e.length, i.size += e.byteLength, e.keyFrame && (i.flags.dependsOn = 2, i.flags.isNonSyncSample = 0), i
                    },
                    eg = [33, 16, 5, 32, 164, 27],
                    ef = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252],
                    e_ = function(e) {
                        for (var t = []; e--;) t.push(0);
                        return t
                    };
                $ = function(e) {
                    return 9e4 * e
                }, q = function(e, t) {
                    return e * t
                }, H = function(e) {
                    return e / 9e4
                }, V = function(e, t) {
                    return e / t
                }, z = function(e, t) {
                    return $(V(e, t))
                }, W = function(e, t) {
                    return q(H(e), t)
                }, G = function(e, t, i) {
                    return H(i ? e : e - t)
                };
                var ey = {
                        ONE_SECOND_IN_TS: 9e4,
                        secondsToVideoTs: $,
                        videoTsToSeconds: H,
                        audioTsToVideoTs: z,
                        videoTsToAudioTs: W,
                        metadataTsToSeconds: G
                    },
                    ev = function() {
                        if (!F) {
                            var e;
                            F = Object.keys(e = {
                                96e3: [eg, [227, 64], e_(154), [56]],
                                88200: [eg, [231], e_(170), [56]],
                                64e3: [eg, [248, 192], e_(240), [56]],
                                48e3: [eg, [255, 192], e_(268), [55, 148, 128], e_(54), [112]],
                                44100: [eg, [255, 192], e_(268), [55, 163, 128], e_(84), [112]],
                                32e3: [eg, [255, 192], e_(268), [55, 234], e_(226), [112]],
                                24e3: [eg, [255, 192], e_(268), [55, 255, 128], e_(268), [111, 112], e_(126), [224]],
                                16e3: [eg, [255, 192], e_(268), [55, 255, 128], e_(268), [111, 255], e_(269), [223, 108], e_(195), [1, 192]],
                                12e3: [ef, e_(268), [3, 127, 248], e_(268), [6, 255, 240], e_(268), [13, 255, 224], e_(268), [27, 253, 128], e_(259), [56]],
                                11025: [ef, e_(268), [3, 127, 248], e_(268), [6, 255, 240], e_(268), [13, 255, 224], e_(268), [27, 255, 192], e_(268), [55, 175, 128], e_(108), [112]],
                                8e3: [ef, e_(268), [3, 121, 16], e_(47), [7]]
                            }).reduce(function(t, i) {
                                return t[i] = new Uint8Array(e[i].reduce(function(e, t) {
                                    return e.concat(t)
                                }, [])), t
                            }, {})
                        }
                        return F
                    },
                    eT = function(e) {
                        var t, i = 0;
                        for (t = 0; t < e.length; t++) i += e[t].data.byteLength;
                        return i
                    },
                    eb = ey.ONE_SECOND_IN_TS,
                    eS = {
                        parseSei: function(e) {
                            for (var t = 0, i = {
                                    payloadType: -1,
                                    payloadSize: 0
                                }, s = 0, r = 0; t < e.byteLength && 128 !== e[t];) {
                                for (; 255 === e[t];) s += 255, t++;
                                for (s += e[t++]; 255 === e[t];) r += 255, t++;
                                if (r += e[t++], !i.payload && 4 === s) {
                                    if ("GA94" === String.fromCharCode(e[t + 3], e[t + 4], e[t + 5], e[t + 6])) {
                                        i.payloadType = s, i.payloadSize = r, i.payload = e.subarray(t, t + r);
                                        break
                                    }
                                    i.payload = void 0
                                }
                                t += r, s = 0, r = 0
                            }
                            return i
                        },
                        parseUserData: function(e) {
                            return 181 !== e.payload[0] || (e.payload[1] << 8 | e.payload[2]) != 49 || "GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) || 3 !== e.payload[7] ? null : e.payload.subarray(8, e.payload.length - 1)
                        },
                        parseCaptionPackets: function(e, t) {
                            var i, s, r, n, a = [];
                            if (!(64 & t[0])) return a;
                            for (i = 0, s = 31 & t[0]; i < s; i++) n = {
                                type: 3 & t[(r = 3 * i) + 2],
                                pts: e
                            }, 4 & t[r + 2] && (n.ccData = t[r + 3] << 8 | t[r + 4], a.push(n));
                            return a
                        },
                        discardEmulationPreventionBytes: function(e) {
                            for (var t, i, s = e.byteLength, r = [], n = 1; n < s - 2;) 0 === e[n] && 0 === e[n + 1] && 3 === e[n + 2] ? (r.push(n + 2), n += 2) : n++;
                            if (0 === r.length) return e;
                            i = new Uint8Array(t = s - r.length);
                            var a = 0;
                            for (n = 0; n < t; a++, n++) a === r[0] && (a++, r.shift()), i[n] = e[a];
                            return i
                        },
                        USER_DATA_REGISTERED_ITU_T_T35: 4
                    },
                    ek = function(e) {
                        e = e || {}, ek.prototype.init.call(this), this.parse708captions_ = "boolean" != typeof e.parse708captions || e.parse708captions, this.captionPackets_ = [], this.ccStreams_ = [new eM(0, 0), new eM(0, 1), new eM(1, 0), new eM(1, 1)], this.parse708captions_ && (this.cc708Stream_ = new eP({
                            captionServices: e.captionServices
                        })), this.reset(), this.ccStreams_.forEach(function(e) {
                            e.on("data", this.trigger.bind(this, "data")), e.on("partialdone", this.trigger.bind(this, "partialdone")), e.on("done", this.trigger.bind(this, "done"))
                        }, this), this.parse708captions_ && (this.cc708Stream_.on("data", this.trigger.bind(this, "data")), this.cc708Stream_.on("partialdone", this.trigger.bind(this, "partialdone")), this.cc708Stream_.on("done", this.trigger.bind(this, "done")))
                    };
                ek.prototype = new ec, ek.prototype.push = function(e) {
                    var t, i, s;
                    if ("sei_rbsp" === e.nalUnitType && (t = eS.parseSei(e.escapedRBSP)).payload && t.payloadType === eS.USER_DATA_REGISTERED_ITU_T_T35 && (i = eS.parseUserData(t))) {
                        if (e.dts < this.latestDts_) {
                            this.ignoreNextEqualDts_ = !0;
                            return
                        }
                        if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_) {
                            this.numSameDts_--, this.numSameDts_ || (this.ignoreNextEqualDts_ = !1);
                            return
                        }
                        s = eS.parseCaptionPackets(e.pts, i), this.captionPackets_ = this.captionPackets_.concat(s), this.latestDts_ !== e.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = e.dts
                    }
                }, ek.prototype.flushCCStreams = function(e) {
                    this.ccStreams_.forEach(function(t) {
                        return "flush" === e ? t.flush() : t.partialFlush()
                    }, this)
                }, ek.prototype.flushStream = function(e) {
                    if (!this.captionPackets_.length) {
                        this.flushCCStreams(e);
                        return
                    }
                    this.captionPackets_.forEach(function(e, t) {
                        e.presortIndex = t
                    }), this.captionPackets_.sort(function(e, t) {
                        return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts
                    }), this.captionPackets_.forEach(function(e) {
                        e.type < 2 ? this.dispatchCea608Packet(e) : this.dispatchCea708Packet(e)
                    }, this), this.captionPackets_.length = 0, this.flushCCStreams(e)
                }, ek.prototype.flush = function() {
                    return this.flushStream("flush")
                }, ek.prototype.partialFlush = function() {
                    return this.flushStream("partialFlush")
                }, ek.prototype.reset = function() {
                    this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.numSameDts_ = 0, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function(e) {
                        e.reset()
                    })
                }, ek.prototype.dispatchCea608Packet = function(e) {
                    this.setsTextOrXDSActive(e) ? this.activeCea608Channel_[e.type] = null : this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1), null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e)
                }, ek.prototype.setsChannel1Active = function(e) {
                    return (30720 & e.ccData) == 4096
                }, ek.prototype.setsChannel2Active = function(e) {
                    return (30720 & e.ccData) == 6144
                }, ek.prototype.setsTextOrXDSActive = function(e) {
                    return (28928 & e.ccData) == 256 || (30974 & e.ccData) == 4138 || (30974 & e.ccData) == 6186
                }, ek.prototype.dispatchCea708Packet = function(e) {
                    this.parse708captions_ && this.cc708Stream_.push(e)
                };
                var eC = {
                        127: 9834,
                        4128: 32,
                        4129: 160,
                        4133: 8230,
                        4138: 352,
                        4140: 338,
                        4144: 9608,
                        4145: 8216,
                        4146: 8217,
                        4147: 8220,
                        4148: 8221,
                        4149: 8226,
                        4153: 8482,
                        4154: 353,
                        4156: 339,
                        4157: 8480,
                        4159: 376,
                        4214: 8539,
                        4215: 8540,
                        4216: 8541,
                        4217: 8542,
                        4218: 9168,
                        4219: 9124,
                        4220: 9123,
                        4221: 9135,
                        4222: 9126,
                        4223: 9121,
                        4256: 12600
                    },
                    eE = function(e) {
                        var t = eC[e] || e;
                        return 4096 & e && e === t ? "" : String.fromCharCode(t)
                    },
                    ew = function(e) {
                        return 32 <= e && e <= 127 || 160 <= e && e <= 255
                    },
                    ex = function(e) {
                        this.windowNum = e, this.reset()
                    };
                ex.prototype.reset = function() {
                    this.clearText(), this.pendingNewLine = !1, this.winAttr = {}, this.penAttr = {}, this.penLoc = {}, this.penColor = {}, this.visible = 0, this.rowLock = 0, this.columnLock = 0, this.priority = 0, this.relativePositioning = 0, this.anchorVertical = 0, this.anchorHorizontal = 0, this.anchorPoint = 0, this.rowCount = 1, this.virtualRowCount = this.rowCount + 1, this.columnCount = 41, this.windowStyle = 0, this.penStyle = 0
                }, ex.prototype.getText = function() {
                    return this.rows.join("\n")
                }, ex.prototype.clearText = function() {
                    this.rows = [""], this.rowIdx = 0
                }, ex.prototype.newLine = function(e) {
                    for (this.rows.length >= this.virtualRowCount && "function" == typeof this.beforeRowOverflow && this.beforeRowOverflow(e), this.rows.length > 0 && (this.rows.push(""), this.rowIdx++); this.rows.length > this.virtualRowCount;) this.rows.shift(), this.rowIdx--
                }, ex.prototype.isEmpty = function() {
                    return 0 === this.rows.length || 1 === this.rows.length && "" === this.rows[0]
                }, ex.prototype.addText = function(e) {
                    this.rows[this.rowIdx] += e
                }, ex.prototype.backspace = function() {
                    if (!this.isEmpty()) {
                        var e = this.rows[this.rowIdx];
                        this.rows[this.rowIdx] = e.substr(0, e.length - 1)
                    }
                };
                var eI = function(e, t, i) {
                    this.serviceNum = e, this.text = "", this.currentWindow = new ex(-1), this.windows = [], this.stream = i, "string" == typeof t && this.createTextDecoder(t)
                };
                eI.prototype.init = function(e, t) {
                    this.startPts = e;
                    for (var i = 0; i < 8; i++) this.windows[i] = new ex(i), "function" == typeof t && (this.windows[i].beforeRowOverflow = t)
                }, eI.prototype.setCurrentWindow = function(e) {
                    this.currentWindow = this.windows[e]
                }, eI.prototype.createTextDecoder = function(e) {
                    if ("undefined" == typeof TextDecoder) this.stream.trigger("log", {
                        level: "warn",
                        message: "The `encoding` option is unsupported without TextDecoder support"
                    });
                    else try {
                        this.textDecoder_ = new TextDecoder(e)
                    } catch (t) {
                        this.stream.trigger("log", {
                            level: "warn",
                            message: "TextDecoder could not be created with " + e + " encoding. " + t
                        })
                    }
                };
                var eP = function(e) {
                    e = e || {}, eP.prototype.init.call(this);
                    var t, i = this,
                        s = e.captionServices || {},
                        r = {};
                    Object.keys(s).forEach(e => {
                        t = s[e], /^SERVICE/.test(e) && (r[e] = t.encoding)
                    }), this.serviceEncodings = r, this.current708Packet = null, this.services = {}, this.push = function(e) {
                        3 === e.type ? i.new708Packet() : null === i.current708Packet && i.new708Packet(), i.add708Bytes(e)
                    }
                };
                eP.prototype = new ec, eP.prototype.new708Packet = function() {
                    null !== this.current708Packet && this.push708Packet(), this.current708Packet = {
                        data: [],
                        ptsVals: []
                    }
                }, eP.prototype.add708Bytes = function(e) {
                    var t = e.ccData;
                    this.current708Packet.ptsVals.push(e.pts), this.current708Packet.data.push(t >>> 8), this.current708Packet.data.push(255 & t)
                }, eP.prototype.push708Packet = function() {
                    var e = this.current708Packet,
                        t = e.data,
                        i = null,
                        s = null,
                        r = 0,
                        n = t[r++];
                    for (e.seq = n >> 6, e.sizeCode = 63 & n; r < t.length; r++) i = (n = t[r++]) >> 5, s = 31 & n, 7 === i && s > 0 && (i = n = t[r++]), this.pushServiceBlock(i, r, s), s > 0 && (r += s - 1)
                }, eP.prototype.pushServiceBlock = function(e, t, i) {
                    var s, r = t,
                        n = this.current708Packet.data,
                        a = this.services[e];
                    for (a || (a = this.initService(e, r)); r < t + i && r < n.length; r++) ew(s = n[r]) ? r = this.handleText(r, a) : 24 === s ? r = this.multiByteCharacter(r, a) : 16 === s ? r = this.extendedCommands(r, a) : 128 <= s && s <= 135 ? r = this.setCurrentWindow(r, a) : 152 <= s && s <= 159 ? r = this.defineWindow(r, a) : 136 === s ? r = this.clearWindows(r, a) : 140 === s ? r = this.deleteWindows(r, a) : 137 === s ? r = this.displayWindows(r, a) : 138 === s ? r = this.hideWindows(r, a) : 139 === s ? r = this.toggleWindows(r, a) : 151 === s ? r = this.setWindowAttributes(r, a) : 144 === s ? r = this.setPenAttributes(r, a) : 145 === s ? r = this.setPenColor(r, a) : 146 === s ? r = this.setPenLocation(r, a) : 143 === s ? a = this.reset(r, a) : 8 === s ? a.currentWindow.backspace() : 12 === s ? a.currentWindow.clearText() : 13 === s ? a.currentWindow.pendingNewLine = !0 : 14 === s ? a.currentWindow.clearText() : 141 === s && r++
                }, eP.prototype.extendedCommands = function(e, t) {
                    return ew(this.current708Packet.data[++e]) && (e = this.handleText(e, t, {
                        isExtended: !0
                    })), e
                }, eP.prototype.getPts = function(e) {
                    return this.current708Packet.ptsVals[Math.floor(e / 2)]
                }, eP.prototype.initService = function(e, t) {
                    var i, s = "SERVICE" + e,
                        r = this;
                    return s in this.serviceEncodings && (i = this.serviceEncodings[s]), this.services[e] = new eI(e, i, r), this.services[e].init(this.getPts(t), function(t) {
                        r.flushDisplayed(t, r.services[e])
                    }), this.services[e]
                }, eP.prototype.handleText = function(e, t, i) {
                    var s, r, n = i && i.isExtended,
                        a = i && i.isMultiByte,
                        o = this.current708Packet.data,
                        l = o[e],
                        h = o[e + 1],
                        d = t.currentWindow;
                    return a ? (r = [l, h], e++) : r = [l], s = t.textDecoder_ && !n ? t.textDecoder_.decode(new Uint8Array(r)) : a ? String.fromCharCode(parseInt(r.map(e => ("0" + (255 & e).toString(16)).slice(-2)).join(""), 16)) : eE((n ? 4096 : 0) | l), d.pendingNewLine && !d.isEmpty() && d.newLine(this.getPts(e)), d.pendingNewLine = !1, d.addText(s), e
                }, eP.prototype.multiByteCharacter = function(e, t) {
                    var i = this.current708Packet.data,
                        s = i[e + 1],
                        r = i[e + 2];
                    return ew(s) && ew(r) && (e = this.handleText(++e, t, {
                        isMultiByte: !0
                    })), e
                }, eP.prototype.setCurrentWindow = function(e, t) {
                    var i = this.current708Packet.data[e];
                    return t.setCurrentWindow(7 & i), e
                }, eP.prototype.defineWindow = function(e, t) {
                    var i = this.current708Packet.data,
                        s = i[e],
                        r = 7 & s;
                    t.setCurrentWindow(r);
                    var n = t.currentWindow;
                    return s = i[++e], n.visible = (32 & s) >> 5, n.rowLock = (16 & s) >> 4, n.columnLock = (8 & s) >> 3, n.priority = 7 & s, s = i[++e], n.relativePositioning = (128 & s) >> 7, n.anchorVertical = 127 & s, s = i[++e], n.anchorHorizontal = s, s = i[++e], n.anchorPoint = (240 & s) >> 4, n.rowCount = 15 & s, s = i[++e], n.columnCount = 63 & s, s = i[++e], n.windowStyle = (56 & s) >> 3, n.penStyle = 7 & s, n.virtualRowCount = n.rowCount + 1, e
                }, eP.prototype.setWindowAttributes = function(e, t) {
                    var i = this.current708Packet.data,
                        s = i[e],
                        r = t.currentWindow.winAttr;
                    return s = i[++e], r.fillOpacity = (192 & s) >> 6, r.fillRed = (48 & s) >> 4, r.fillGreen = (12 & s) >> 2, r.fillBlue = 3 & s, s = i[++e], r.borderType = (192 & s) >> 6, r.borderRed = (48 & s) >> 4, r.borderGreen = (12 & s) >> 2, r.borderBlue = 3 & s, s = i[++e], r.borderType += (128 & s) >> 5, r.wordWrap = (64 & s) >> 6, r.printDirection = (48 & s) >> 4, r.scrollDirection = (12 & s) >> 2, r.justify = 3 & s, s = i[++e], r.effectSpeed = (240 & s) >> 4, r.effectDirection = (12 & s) >> 2, r.displayEffect = 3 & s, e
                }, eP.prototype.flushDisplayed = function(e, t) {
                    for (var i = [], s = 0; s < 8; s++) t.windows[s].visible && !t.windows[s].isEmpty() && i.push(t.windows[s].getText());
                    t.endPts = e, t.text = i.join("\n\n"), this.pushCaption(t), t.startPts = e
                }, eP.prototype.pushCaption = function(e) {
                    "" !== e.text && (this.trigger("data", {
                        startPts: e.startPts,
                        endPts: e.endPts,
                        text: e.text,
                        stream: "cc708_" + e.serviceNum
                    }), e.text = "", e.startPts = e.endPts)
                }, eP.prototype.displayWindows = function(e, t) {
                    var i = this.current708Packet.data[++e],
                        s = this.getPts(e);
                    this.flushDisplayed(s, t);
                    for (var r = 0; r < 8; r++) i & 1 << r && (t.windows[r].visible = 1);
                    return e
                }, eP.prototype.hideWindows = function(e, t) {
                    var i = this.current708Packet.data[++e],
                        s = this.getPts(e);
                    this.flushDisplayed(s, t);
                    for (var r = 0; r < 8; r++) i & 1 << r && (t.windows[r].visible = 0);
                    return e
                }, eP.prototype.toggleWindows = function(e, t) {
                    var i = this.current708Packet.data[++e],
                        s = this.getPts(e);
                    this.flushDisplayed(s, t);
                    for (var r = 0; r < 8; r++) i & 1 << r && (t.windows[r].visible ^= 1);
                    return e
                }, eP.prototype.clearWindows = function(e, t) {
                    var i = this.current708Packet.data[++e],
                        s = this.getPts(e);
                    this.flushDisplayed(s, t);
                    for (var r = 0; r < 8; r++) i & 1 << r && t.windows[r].clearText();
                    return e
                }, eP.prototype.deleteWindows = function(e, t) {
                    var i = this.current708Packet.data[++e],
                        s = this.getPts(e);
                    this.flushDisplayed(s, t);
                    for (var r = 0; r < 8; r++) i & 1 << r && t.windows[r].reset();
                    return e
                }, eP.prototype.setPenAttributes = function(e, t) {
                    var i = this.current708Packet.data,
                        s = i[e],
                        r = t.currentWindow.penAttr;
                    return s = i[++e], r.textTag = (240 & s) >> 4, r.offset = (12 & s) >> 2, r.penSize = 3 & s, s = i[++e], r.italics = (128 & s) >> 7, r.underline = (64 & s) >> 6, r.edgeType = (56 & s) >> 3, r.fontStyle = 7 & s, e
                }, eP.prototype.setPenColor = function(e, t) {
                    var i = this.current708Packet.data,
                        s = i[e],
                        r = t.currentWindow.penColor;
                    return s = i[++e], r.fgOpacity = (192 & s) >> 6, r.fgRed = (48 & s) >> 4, r.fgGreen = (12 & s) >> 2, r.fgBlue = 3 & s, s = i[++e], r.bgOpacity = (192 & s) >> 6, r.bgRed = (48 & s) >> 4, r.bgGreen = (12 & s) >> 2, r.bgBlue = 3 & s, s = i[++e], r.edgeRed = (48 & s) >> 4, r.edgeGreen = (12 & s) >> 2, r.edgeBlue = 3 & s, e
                }, eP.prototype.setPenLocation = function(e, t) {
                    var i = this.current708Packet.data,
                        s = i[e],
                        r = t.currentWindow.penLoc;
                    return t.currentWindow.pendingNewLine = !0, s = i[++e], r.row = 15 & s, s = i[++e], r.column = 63 & s, e
                }, eP.prototype.reset = function(e, t) {
                    var i = this.getPts(e);
                    return this.flushDisplayed(i, t), this.initService(t.serviceNum, e)
                };
                var eA = {
                        42: 225,
                        92: 233,
                        94: 237,
                        95: 243,
                        96: 250,
                        123: 231,
                        124: 247,
                        125: 209,
                        126: 241,
                        127: 9608,
                        304: 174,
                        305: 176,
                        306: 189,
                        307: 191,
                        308: 8482,
                        309: 162,
                        310: 163,
                        311: 9834,
                        312: 224,
                        313: 160,
                        314: 232,
                        315: 226,
                        316: 234,
                        317: 238,
                        318: 244,
                        319: 251,
                        544: 193,
                        545: 201,
                        546: 211,
                        547: 218,
                        548: 220,
                        549: 252,
                        550: 8216,
                        551: 161,
                        552: 42,
                        553: 39,
                        554: 8212,
                        555: 169,
                        556: 8480,
                        557: 8226,
                        558: 8220,
                        559: 8221,
                        560: 192,
                        561: 194,
                        562: 199,
                        563: 200,
                        564: 202,
                        565: 203,
                        566: 235,
                        567: 206,
                        568: 207,
                        569: 239,
                        570: 212,
                        571: 217,
                        572: 249,
                        573: 219,
                        574: 171,
                        575: 187,
                        800: 195,
                        801: 227,
                        802: 205,
                        803: 204,
                        804: 236,
                        805: 210,
                        806: 242,
                        807: 213,
                        808: 245,
                        809: 123,
                        810: 125,
                        811: 92,
                        812: 94,
                        813: 95,
                        814: 124,
                        815: 126,
                        816: 196,
                        817: 228,
                        818: 214,
                        819: 246,
                        820: 223,
                        821: 165,
                        822: 164,
                        823: 9474,
                        824: 197,
                        825: 229,
                        826: 216,
                        827: 248,
                        828: 9484,
                        829: 9488,
                        830: 9492,
                        831: 9496
                    },
                    eL = function(e) {
                        return null === e ? "" : String.fromCharCode(e = eA[e] || e)
                    },
                    eD = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
                    eO = function() {
                        for (var e = [], t = 15; t--;) e.push({
                            text: "",
                            indent: 0,
                            offset: 0
                        });
                        return e
                    },
                    eM = function(e, t) {
                        eM.prototype.init.call(this), this.field_ = e || 0, this.dataChannel_ = t || 0, this.name_ = "CC" + ((this.field_ << 1 | this.dataChannel_) + 1), this.setConstants(), this.reset(), this.push = function(e) {
                            var t, i, s, r, n;
                            if ((t = 32639 & e.ccData) === this.lastControlCode_) {
                                this.lastControlCode_ = null;
                                return
                            }
                            if ((61440 & t) == 4096 ? this.lastControlCode_ = t : t !== this.PADDING_ && (this.lastControlCode_ = null), s = t >>> 8, r = 255 & t, t !== this.PADDING_) {
                                if (t === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
                                else if (t === this.END_OF_CAPTION_) this.mode_ = "popOn", this.clearFormatting(e.pts), this.flushDisplayed(e.pts), i = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = i, this.startPts_ = e.pts;
                                else if (t === this.ROLL_UP_2_ROWS_) this.rollUpRows_ = 2, this.setRollUp(e.pts);
                                else if (t === this.ROLL_UP_3_ROWS_) this.rollUpRows_ = 3, this.setRollUp(e.pts);
                                else if (t === this.ROLL_UP_4_ROWS_) this.rollUpRows_ = 4, this.setRollUp(e.pts);
                                else if (t === this.CARRIAGE_RETURN_) this.clearFormatting(e.pts), this.flushDisplayed(e.pts), this.shiftRowsUp_(), this.startPts_ = e.pts;
                                else if (t === this.BACKSPACE_) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_].text = this.nonDisplayed_[this.row_].text.slice(0, -1) : this.displayed_[this.row_].text = this.displayed_[this.row_].text.slice(0, -1);
                                else if (t === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(e.pts), this.displayed_ = eO();
                                else if (t === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = eO();
                                else if (t === this.RESUME_DIRECT_CAPTIONING_) "paintOn" !== this.mode_ && (this.flushDisplayed(e.pts), this.displayed_ = eO()), this.mode_ = "paintOn", this.startPts_ = e.pts;
                                else if (this.isSpecialCharacter(s, r)) n = eL((s = (3 & s) << 8) | r), this[this.mode_](e.pts, n), this.column_++;
                                else if (this.isExtCharacter(s, r)) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_].text = this.nonDisplayed_[this.row_].text.slice(0, -1) : this.displayed_[this.row_].text = this.displayed_[this.row_].text.slice(0, -1), n = eL((s = (3 & s) << 8) | r), this[this.mode_](e.pts, n), this.column_++;
                                else if (this.isMidRowCode(s, r)) this.clearFormatting(e.pts), this[this.mode_](e.pts, " "), this.column_++, (14 & r) == 14 && this.addFormatting(e.pts, ["i"]), (1 & r) == 1 && this.addFormatting(e.pts, ["u"]);
                                else if (this.isOffsetControlCode(s, r)) {
                                    let e = 3 & r;
                                    this.nonDisplayed_[this.row_].offset = e, this.column_ += e
                                } else if (this.isPAC(s, r)) {
                                    var a = eD.indexOf(7968 & t);
                                    if ("rollUp" === this.mode_ && (a - this.rollUpRows_ + 1 < 0 && (a = this.rollUpRows_ - 1), this.setRollUp(e.pts, a)), a !== this.row_ && a >= 0 && a <= 14 && (this.clearFormatting(e.pts), this.row_ = a), 1 & r && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]), (16 & t) == 16) {
                                        let e = (14 & t) >> 1;
                                        this.column_ = 4 * e, this.nonDisplayed_[this.row_].indent += e
                                    }
                                    this.isColorPAC(r) && (14 & r) == 14 && this.addFormatting(e.pts, ["i"])
                                } else this.isNormalChar(s) && (0 === r && (r = null), n = eL(s) + eL(r), this[this.mode_](e.pts, n), this.column_ += n.length)
                            }
                        }
                    };
                eM.prototype = new ec, eM.prototype.flushDisplayed = function(e) {
                    let t = e => {
                            this.trigger("log", {
                                level: "warn",
                                message: "Skipping a malformed 608 caption at index " + e + "."
                            })
                        },
                        i = [];
                    this.displayed_.forEach((e, s) => {
                        if (e && e.text && e.text.length) {
                            try {
                                e.text = e.text.trim()
                            } catch (e) {
                                t(s)
                            }
                            e.text.length && i.push({
                                text: e.text,
                                line: s + 1,
                                position: 10 + Math.min(70, 10 * e.indent) + 2.5 * e.offset
                            })
                        } else null == e && t(s)
                    }), i.length && this.trigger("data", {
                        startPts: this.startPts_,
                        endPts: e,
                        content: i,
                        stream: this.name_
                    })
                }, eM.prototype.reset = function() {
                    this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = eO(), this.nonDisplayed_ = eO(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = 14, this.rollUpRows_ = 2, this.formatting_ = []
                }, eM.prototype.setConstants = function() {
                    0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
                }, eM.prototype.isSpecialCharacter = function(e, t) {
                    return e === this.EXT_ && t >= 48 && t <= 63
                }, eM.prototype.isExtCharacter = function(e, t) {
                    return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && t >= 32 && t <= 63
                }, eM.prototype.isMidRowCode = function(e, t) {
                    return e === this.EXT_ && t >= 32 && t <= 47
                }, eM.prototype.isOffsetControlCode = function(e, t) {
                    return e === this.OFFSET_ && t >= 33 && t <= 35
                }, eM.prototype.isPAC = function(e, t) {
                    return e >= this.BASE_ && e < this.BASE_ + 8 && t >= 64 && t <= 127
                }, eM.prototype.isColorPAC = function(e) {
                    return e >= 64 && e <= 79 || e >= 96 && e <= 127
                }, eM.prototype.isNormalChar = function(e) {
                    return e >= 32 && e <= 127
                }, eM.prototype.setRollUp = function(e, t) {
                    if ("rollUp" !== this.mode_ && (this.row_ = 14, this.mode_ = "rollUp", this.flushDisplayed(e), this.nonDisplayed_ = eO(), this.displayed_ = eO()), void 0 !== t && t !== this.row_)
                        for (var i = 0; i < this.rollUpRows_; i++) this.displayed_[t - i] = this.displayed_[this.row_ - i], this.displayed_[this.row_ - i] = {
                            text: "",
                            indent: 0,
                            offset: 0
                        };
                    void 0 === t && (t = this.row_), this.topRow_ = t - this.rollUpRows_ + 1
                }, eM.prototype.addFormatting = function(e, t) {
                    this.formatting_ = this.formatting_.concat(t);
                    var i = t.reduce(function(e, t) {
                        return e + "<" + t + ">"
                    }, "");
                    this[this.mode_](e, i)
                }, eM.prototype.clearFormatting = function(e) {
                    if (this.formatting_.length) {
                        var t = this.formatting_.reverse().reduce(function(e, t) {
                            return e + "</" + t + ">"
                        }, "");
                        this.formatting_ = [], this[this.mode_](e, t)
                    }
                }, eM.prototype.popOn = function(e, t) {
                    var i = this.nonDisplayed_[this.row_].text;
                    i += t, this.nonDisplayed_[this.row_].text = i
                }, eM.prototype.rollUp = function(e, t) {
                    var i = this.displayed_[this.row_].text;
                    i += t, this.displayed_[this.row_].text = i
                }, eM.prototype.shiftRowsUp_ = function() {
                    var e;
                    for (e = 0; e < this.topRow_; e++) this.displayed_[e] = {
                        text: "",
                        indent: 0,
                        offset: 0
                    };
                    for (e = this.row_ + 1; e < 15; e++) this.displayed_[e] = {
                        text: "",
                        indent: 0,
                        offset: 0
                    };
                    for (e = this.topRow_; e < this.row_; e++) this.displayed_[e] = this.displayed_[e + 1];
                    this.displayed_[this.row_] = {
                        text: "",
                        indent: 0,
                        offset: 0
                    }
                }, eM.prototype.paintOn = function(e, t) {
                    var i = this.displayed_[this.row_].text;
                    i += t, this.displayed_[this.row_].text = i
                };
                var eR = {
                        H264_STREAM_TYPE: 27,
                        ADTS_STREAM_TYPE: 15,
                        METADATA_STREAM_TYPE: 21
                    },
                    eU = "shared",
                    eB = function(e, t) {
                        var i = 1;
                        for (e > t && (i = -1); Math.abs(t - e) > 4294967296;) e += 8589934592 * i;
                        return e
                    },
                    eN = function(e) {
                        var t, i;
                        eN.prototype.init.call(this), this.type_ = e || eU, this.push = function(e) {
                            if ("metadata" === e.type) {
                                this.trigger("data", e);
                                return
                            }(this.type_ === eU || e.type === this.type_) && (void 0 === i && (i = e.dts), e.dts = eB(e.dts, i), e.pts = eB(e.pts, i), t = e.dts, this.trigger("data", e))
                        }, this.flush = function() {
                            i = t, this.trigger("done")
                        }, this.endTimeline = function() {
                            this.flush(), this.trigger("endedtimeline")
                        }, this.discontinuity = function() {
                            i = void 0, t = void 0
                        }, this.reset = function() {
                            this.discontinuity(), this.trigger("reset")
                        }
                    };
                eN.prototype = new ec;
                var ej = (e, t, i) => {
                        if (!e) return -1;
                        for (var s = i; s < e.length; s++)
                            if (e[s] === t) return s;
                        return -1
                    },
                    eF = function(e, t, i) {
                        var s, r = "";
                        for (s = t; s < i; s++) r += "%" + ("00" + e[s].toString(16)).slice(-2);
                        return r
                    },
                    e$ = function(e, t, i) {
                        return decodeURIComponent(eF(e, t, i))
                    },
                    eq = function(e, t, i) {
                        return unescape(eF(e, t, i))
                    },
                    eH = function(e) {
                        return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
                    },
                    eV = {
                        APIC: function(e) {
                            var t, i, s = 1;
                            !(3 !== e.data[0] || (t = ej(e.data, 0, s)) < 0) && (e.mimeType = eq(e.data, s, t), s = t + 1, e.pictureType = e.data[s], s++, (i = ej(e.data, 0, s)) < 0 || (e.description = e$(e.data, s, i), s = i + 1, "-->" === e.mimeType ? e.url = eq(e.data, s, e.data.length) : e.pictureData = e.data.subarray(s, e.data.length)))
                        },
                        "T*": function(e) {
                            3 === e.data[0] && (e.value = e$(e.data, 1, e.data.length).replace(/\0*$/, ""), e.values = e.value.split("\0"))
                        },
                        TXXX: function(e) {
                            var t;
                            3 === e.data[0] && -1 !== (t = ej(e.data, 0, 1)) && (e.description = e$(e.data, 1, t), e.value = e$(e.data, t + 1, e.data.length).replace(/\0*$/, ""), e.data = e.value)
                        },
                        "W*": function(e) {
                            e.url = eq(e.data, 0, e.data.length).replace(/\0.*$/, "")
                        },
                        WXXX: function(e) {
                            var t;
                            3 === e.data[0] && -1 !== (t = ej(e.data, 0, 1)) && (e.description = e$(e.data, 1, t), e.url = eq(e.data, t + 1, e.data.length).replace(/\0.*$/, ""))
                        },
                        PRIV: function(e) {
                            var t;
                            for (t = 0; t < e.data.length; t++)
                                if (0 === e.data[t]) {
                                    e.owner = eq(e.data, 0, t);
                                    break
                                }
                            e.privateData = e.data.subarray(t + 1), e.data = e.privateData
                        }
                    },
                    ez = {
                        parseId3Frames: function(e) {
                            var t, i = 10,
                                s = 0,
                                r = [];
                            if (!(e.length < 10) && 73 === e[0] && 68 === e[1] && 51 === e[2]) {
                                s = eH(e.subarray(6, 10)) + 10, 64 & e[5] && (i += 4 + eH(e.subarray(10, 14)), s -= eH(e.subarray(16, 20)));
                                do {
                                    if ((t = eH(e.subarray(i + 4, i + 8))) < 1) break;
                                    var n = {
                                        id: String.fromCharCode(e[i], e[i + 1], e[i + 2], e[i + 3]),
                                        data: e.subarray(i + 10, i + t + 10)
                                    };
                                    n.key = n.id, eV[n.id] ? eV[n.id](n) : "T" === n.id[0] ? eV["T*"](n) : "W" === n.id[0] && eV["W*"](n), r.push(n), i += 10 + t
                                } while (i < s);
                                return r
                            }
                        },
                        parseSyncSafeInteger: eH,
                        frameParsers: eV
                    };
                (K = function(e) {
                    var t, i = {
                            descriptor: e && e.descriptor
                        },
                        s = 0,
                        r = [],
                        n = 0;
                    if (K.prototype.init.call(this), this.dispatchType = eR.METADATA_STREAM_TYPE.toString(16), i.descriptor)
                        for (t = 0; t < i.descriptor.length; t++) this.dispatchType += ("00" + i.descriptor[t].toString(16)).slice(-2);
                    this.push = function(e) {
                        var t, i, a, o, l;
                        if ("timed-metadata" === e.type) {
                            if (e.dataAlignmentIndicator && (n = 0, r.length = 0), 0 === r.length && (e.data.length < 10 || 73 !== e.data[0] || 68 !== e.data[1] || 51 !== e.data[2])) {
                                this.trigger("log", {
                                    level: "warn",
                                    message: "Skipping unrecognized metadata packet"
                                });
                                return
                            }
                            if (r.push(e), n += e.data.byteLength, 1 === r.length && (s = ez.parseSyncSafeInteger(e.data.subarray(6, 10)) + 10), !(n < s)) {
                                for (l = 0, t = {
                                        data: new Uint8Array(s),
                                        frames: [],
                                        pts: r[0].pts,
                                        dts: r[0].dts
                                    }; l < s;) t.data.set(r[0].data.subarray(0, s - l), l), l += r[0].data.byteLength, n -= r[0].data.byteLength, r.shift();
                                i = 10, 64 & t.data[5] && (i += 4 + ez.parseSyncSafeInteger(t.data.subarray(10, 14)), s -= ez.parseSyncSafeInteger(t.data.subarray(16, 20)));
                                do {
                                    if ((a = ez.parseSyncSafeInteger(t.data.subarray(i + 4, i + 8))) < 1) {
                                        this.trigger("log", {
                                            level: "warn",
                                            message: "Malformed ID3 frame encountered. Skipping remaining metadata parsing."
                                        });
                                        break
                                    }
                                    if ((o = {
                                            id: String.fromCharCode(t.data[i], t.data[i + 1], t.data[i + 2], t.data[i + 3]),
                                            data: t.data.subarray(i + 10, i + a + 10)
                                        }).key = o.id, ez.frameParsers[o.id] ? ez.frameParsers[o.id](o) : "T" === o.id[0] ? ez.frameParsers["T*"](o) : "W" === o.id[0] && ez.frameParsers["W*"](o), "com.apple.streaming.transportStreamTimestamp" === o.owner) {
                                        var h = o.data,
                                            d = (1 & h[3]) << 30 | h[4] << 22 | h[5] << 14 | h[6] << 6 | h[7] >>> 2;
                                        d *= 4, d += 3 & h[7], o.timeStamp = d, void 0 === t.pts && void 0 === t.dts && (t.pts = o.timeStamp, t.dts = o.timeStamp), this.trigger("timestamp", o)
                                    }
                                    t.frames.push(o), i += 10 + a
                                } while (i < s);
                                this.trigger("data", t)
                            }
                        }
                    }
                }).prototype = new ec;
                var eW = K;
                (Q = function() {
                    var e = new Uint8Array(188),
                        t = 0;
                    Q.prototype.init.call(this), this.push = function(i) {
                        var s, r = 0,
                            n = 188;
                        for (t ? ((s = new Uint8Array(i.byteLength + t)).set(e.subarray(0, t)), s.set(i, t), t = 0) : s = i; n < s.byteLength;) {
                            if (71 === s[r] && 71 === s[n]) {
                                this.trigger("data", s.subarray(r, n)), r += 188, n += 188;
                                continue
                            }
                            r++, n++
                        }
                        r < s.byteLength && (e.set(s.subarray(r), 0), t = s.byteLength - r)
                    }, this.flush = function() {
                        188 === t && 71 === e[0] && (this.trigger("data", e), t = 0), this.trigger("done")
                    }, this.endTimeline = function() {
                        this.flush(), this.trigger("endedtimeline")
                    }, this.reset = function() {
                        t = 0, this.trigger("reset")
                    }
                }).prototype = new ec, (Y = function() {
                    var e, t, i, s;
                    Y.prototype.init.call(this), s = this, this.packetsWaitingForPmt = [], this.programMapTable = void 0, e = function(e, s) {
                        var r = 0;
                        s.payloadUnitStartIndicator && (r += e[r] + 1), "pat" === s.type ? t(e.subarray(r), s) : i(e.subarray(r), s)
                    }, t = function(e, t) {
                        t.section_number = e[7], t.last_section_number = e[8], s.pmtPid = (31 & e[10]) << 8 | e[11], t.pmtPid = s.pmtPid
                    }, i = function(e, t) {
                        var i, r;
                        if (1 & e[5]) {
                            for (s.programMapTable = {
                                    video: null,
                                    audio: null,
                                    "timed-metadata": {}
                                }, i = 3 + ((15 & e[1]) << 8 | e[2]) - 4, r = 12 + ((15 & e[10]) << 8 | e[11]); r < i;) {
                                var n = e[r],
                                    a = (31 & e[r + 1]) << 8 | e[r + 2];
                                n === eR.H264_STREAM_TYPE && null === s.programMapTable.video ? s.programMapTable.video = a : n === eR.ADTS_STREAM_TYPE && null === s.programMapTable.audio ? s.programMapTable.audio = a : n === eR.METADATA_STREAM_TYPE && (s.programMapTable["timed-metadata"][a] = n), r += ((15 & e[r + 3]) << 8 | e[r + 4]) + 5
                            }
                            t.programMapTable = s.programMapTable
                        }
                    }, this.push = function(t) {
                        var i = {},
                            s = 4;
                        if (i.payloadUnitStartIndicator = !!(64 & t[1]), i.pid = 31 & t[1], i.pid <<= 8, i.pid |= t[2], (48 & t[3]) >>> 4 > 1 && (s += t[s] + 1), 0 === i.pid) i.type = "pat", e(t.subarray(s), i), this.trigger("data", i);
                        else if (i.pid === this.pmtPid)
                            for (i.type = "pmt", e(t.subarray(s), i), this.trigger("data", i); this.packetsWaitingForPmt.length;) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
                        else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([t, s, i]) : this.processPes_(t, s, i)
                    }, this.processPes_ = function(e, t, i) {
                        i.pid === this.programMapTable.video ? i.streamType = eR.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = eR.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid], i.type = "pes", i.data = e.subarray(t), this.trigger("data", i)
                    }
                }).prototype = new ec, Y.STREAM_TYPES = {
                    h264: 27,
                    adts: 15
                }, (X = function() {
                    var e, t = this,
                        i = !1,
                        s = {
                            data: [],
                            size: 0
                        },
                        r = {
                            data: [],
                            size: 0
                        },
                        n = {
                            data: [],
                            size: 0
                        },
                        a = function(e, t) {
                            var i;
                            let s = e[0] << 16 | e[1] << 8 | e[2];
                            t.data = new Uint8Array, 1 === s && (t.packetLength = 6 + (e[4] << 8 | e[5]), t.dataAlignmentIndicator = (4 & e[6]) != 0, 192 & (i = e[7]) && (t.pts = (14 & e[9]) << 27 | (255 & e[10]) << 20 | (254 & e[11]) << 12 | (255 & e[12]) << 5 | (254 & e[13]) >>> 3, t.pts *= 4, t.pts += (6 & e[13]) >>> 1, t.dts = t.pts, 64 & i && (t.dts = (14 & e[14]) << 27 | (255 & e[15]) << 20 | (254 & e[16]) << 12 | (255 & e[17]) << 5 | (254 & e[18]) >>> 3, t.dts *= 4, t.dts += (6 & e[18]) >>> 1)), t.data = e.subarray(9 + e[8]))
                        },
                        o = function(e, i, s) {
                            var r, n = new Uint8Array(e.size),
                                o = {
                                    type: i
                                },
                                l = 0,
                                h = 0,
                                d = !1;
                            if (e.data.length && !(e.size < 9)) {
                                for (l = 0, o.trackId = e.data[0].pid; l < e.data.length; l++) r = e.data[l], n.set(r.data, h), h += r.data.byteLength;
                                a(n, o), d = "video" === i || o.packetLength <= e.size, (s || d) && (e.size = 0, e.data.length = 0), d && t.trigger("data", o)
                            }
                        };
                    X.prototype.init.call(this), this.push = function(a) {
                        ({
                            pat: function() {},
                            pes: function() {
                                var e, t;
                                switch (a.streamType) {
                                    case eR.H264_STREAM_TYPE:
                                        e = s, t = "video";
                                        break;
                                    case eR.ADTS_STREAM_TYPE:
                                        e = r, t = "audio";
                                        break;
                                    case eR.METADATA_STREAM_TYPE:
                                        e = n, t = "timed-metadata";
                                        break;
                                    default:
                                        return
                                }
                                a.payloadUnitStartIndicator && o(e, t, !0), e.data.push(a), e.size += a.data.byteLength
                            },
                            pmt: function() {
                                var s = {
                                    type: "metadata",
                                    tracks: []
                                };
                                null !== (e = a.programMapTable).video && s.tracks.push({
                                    timelineStartInfo: {
                                        baseMediaDecodeTime: 0
                                    },
                                    id: +e.video,
                                    codec: "avc",
                                    type: "video"
                                }), null !== e.audio && s.tracks.push({
                                    timelineStartInfo: {
                                        baseMediaDecodeTime: 0
                                    },
                                    id: +e.audio,
                                    codec: "adts",
                                    type: "audio"
                                }), i = !0, t.trigger("data", s)
                            }
                        })[a.type]()
                    }, this.reset = function() {
                        s.size = 0, s.data.length = 0, r.size = 0, r.data.length = 0, this.trigger("reset")
                    }, this.flushStreams_ = function() {
                        o(s, "video"), o(r, "audio"), o(n, "timed-metadata")
                    }, this.flush = function() {
                        if (!i && e) {
                            var s = {
                                type: "metadata",
                                tracks: []
                            };
                            null !== e.video && s.tracks.push({
                                timelineStartInfo: {
                                    baseMediaDecodeTime: 0
                                },
                                id: +e.video,
                                codec: "avc",
                                type: "video"
                            }), null !== e.audio && s.tracks.push({
                                timelineStartInfo: {
                                    baseMediaDecodeTime: 0
                                },
                                id: +e.audio,
                                codec: "adts",
                                type: "audio"
                            }), t.trigger("data", s)
                        }
                        i = !1, this.flushStreams_(), this.trigger("done")
                    }
                }).prototype = new ec;
                var eG = {
                    PAT_PID: 0,
                    MP2T_PACKET_LENGTH: 188,
                    TransportPacketStream: Q,
                    TransportParseStream: Y,
                    ElementaryStream: X,
                    TimestampRolloverStream: eN,
                    CaptionStream: ek,
                    Cea608Stream: eM,
                    Cea708Stream: eP,
                    MetadataStream: eW
                };
                for (var eK in eR) eR.hasOwnProperty(eK) && (eG[eK] = eR[eK]);
                var eQ = ey.ONE_SECOND_IN_TS,
                    eY = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                (J = function(e) {
                    var t, i = 0;
                    J.prototype.init.call(this), this.skipWarn_ = function(e, t) {
                        this.trigger("log", {
                            level: "warn",
                            message: `adts skiping bytes ${e} to ${t} in frame ${i} outside syncword`
                        })
                    }, this.push = function(s) {
                        var r, n, a, o, l, h, d = 0;
                        if (e || (i = 0), "audio" === s.type) {
                            for (t && t.length ? ((t = new Uint8Array((o = t).byteLength + s.data.byteLength)).set(o), t.set(s.data, o.byteLength)) : t = s.data; d + 7 < t.length;) {
                                if (255 !== t[d] || (246 & t[d + 1]) != 240) {
                                    "number" != typeof r && (r = d), d++;
                                    continue
                                }
                                if ("number" == typeof r && (this.skipWarn_(r, d), r = null), a = (1 & ~t[d + 1]) * 2, n = (3 & t[d + 3]) << 11 | t[d + 4] << 3 | (224 & t[d + 5]) >> 5, h = (l = ((3 & t[d + 6]) + 1) * 1024) * eQ / eY[(60 & t[d + 2]) >>> 2], t.byteLength - d < n) break;
                                this.trigger("data", {
                                    pts: s.pts + i * h,
                                    dts: s.dts + i * h,
                                    sampleCount: l,
                                    audioobjecttype: (t[d + 2] >>> 6 & 3) + 1,
                                    channelcount: (1 & t[d + 2]) << 2 | (192 & t[d + 3]) >>> 6,
                                    samplerate: eY[(60 & t[d + 2]) >>> 2],
                                    samplingfrequencyindex: (60 & t[d + 2]) >>> 2,
                                    samplesize: 16,
                                    data: t.subarray(d + 7 + a, d + n)
                                }), i++, d += n
                            }
                            "number" == typeof r && (this.skipWarn_(r, d), r = null), t = t.subarray(d)
                        }
                    }, this.flush = function() {
                        i = 0, this.trigger("done")
                    }, this.reset = function() {
                        t = void 0, this.trigger("reset")
                    }, this.endTimeline = function() {
                        t = void 0, this.trigger("endedtimeline")
                    }
                }).prototype = new ec;
                var eX = J;
                Z = function(e) {
                    var t = e.byteLength,
                        i = 0,
                        s = 0;
                    this.length = function() {
                        return 8 * t
                    }, this.bitsAvailable = function() {
                        return 8 * t + s
                    }, this.loadWord = function() {
                        var r = e.byteLength - t,
                            n = new Uint8Array(4),
                            a = Math.min(4, t);
                        if (0 === a) throw Error("no bytes available");
                        n.set(e.subarray(r, r + a)), i = new DataView(n.buffer).getUint32(0), s = 8 * a, t -= a
                    }, this.skipBits = function(e) {
                        var r;
                        s > e || (e -= s, r = Math.floor(e / 8), e -= 8 * r, t -= r, this.loadWord()), i <<= e, s -= e
                    }, this.readBits = function(e) {
                        var r = Math.min(s, e),
                            n = i >>> 32 - r;
                        return ((s -= r) > 0 ? i <<= r : t > 0 && this.loadWord(), (r = e - r) > 0) ? n << r | this.readBits(r) : n
                    }, this.skipLeadingZeros = function() {
                        var e;
                        for (e = 0; e < s; ++e)
                            if ((i & 2147483648 >>> e) != 0) return i <<= e, s -= e, e;
                        return this.loadWord(), e + this.skipLeadingZeros()
                    }, this.skipUnsignedExpGolomb = function() {
                        this.skipBits(1 + this.skipLeadingZeros())
                    }, this.skipExpGolomb = function() {
                        this.skipBits(1 + this.skipLeadingZeros())
                    }, this.readUnsignedExpGolomb = function() {
                        var e = this.skipLeadingZeros();
                        return this.readBits(e + 1) - 1
                    }, this.readExpGolomb = function() {
                        var e = this.readUnsignedExpGolomb();
                        return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                    }, this.readBoolean = function() {
                        return 1 === this.readBits(1)
                    }, this.readUnsignedByte = function() {
                        return this.readBits(8)
                    }, this.loadWord()
                }, (et = function() {
                    var e, t, i = 0;
                    et.prototype.init.call(this), this.push = function(s) {
                        t ? ((r = new Uint8Array(t.byteLength + s.data.byteLength)).set(t), r.set(s.data, t.byteLength), t = r) : t = s.data;
                        for (var r, n = t.byteLength; i < n - 3; i++)
                            if (1 === t[i + 2]) {
                                e = i + 5;
                                break
                            }
                        for (; e < n;) switch (t[e]) {
                            case 0:
                                if (0 !== t[e - 1]) {
                                    e += 2;
                                    break
                                }
                                if (0 !== t[e - 2]) {
                                    e++;
                                    break
                                }
                                i + 3 !== e - 2 && this.trigger("data", t.subarray(i + 3, e - 2));
                                do e++; while (1 !== t[e] && e < n);
                                i = e - 2, e += 3;
                                break;
                            case 1:
                                if (0 !== t[e - 1] || 0 !== t[e - 2]) {
                                    e += 3;
                                    break
                                }
                                this.trigger("data", t.subarray(i + 3, e - 2)), i = e - 2, e += 3;
                                break;
                            default:
                                e += 3
                        }
                        t = t.subarray(i), e -= i, i = 0
                    }, this.reset = function() {
                        t = null, i = 0, this.trigger("reset")
                    }, this.flush = function() {
                        t && t.byteLength > 3 && this.trigger("data", t.subarray(i + 3)), t = null, i = 0, this.trigger("done")
                    }, this.endTimeline = function() {
                        this.flush(), this.trigger("endedtimeline")
                    }
                }).prototype = new ec, ei = {
                    100: !0,
                    110: !0,
                    122: !0,
                    244: !0,
                    44: !0,
                    83: !0,
                    86: !0,
                    118: !0,
                    128: !0,
                    138: !0,
                    139: !0,
                    134: !0
                }, (ee = function() {
                    var e, t, i, s, r, n, a, o = new et;
                    ee.prototype.init.call(this), e = this, this.push = function(e) {
                        "video" === e.type && (t = e.trackId, i = e.pts, s = e.dts, o.push(e))
                    }, o.on("data", function(a) {
                        var o = {
                            trackId: t,
                            pts: i,
                            dts: s,
                            data: a,
                            nalUnitTypeCode: 31 & a[0]
                        };
                        switch (o.nalUnitTypeCode) {
                            case 5:
                                o.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                                break;
                            case 6:
                                o.nalUnitType = "sei_rbsp", o.escapedRBSP = r(a.subarray(1));
                                break;
                            case 7:
                                o.nalUnitType = "seq_parameter_set_rbsp", o.escapedRBSP = r(a.subarray(1)), o.config = n(o.escapedRBSP);
                                break;
                            case 8:
                                o.nalUnitType = "pic_parameter_set_rbsp";
                                break;
                            case 9:
                                o.nalUnitType = "access_unit_delimiter_rbsp"
                        }
                        e.trigger("data", o)
                    }), o.on("done", function() {
                        e.trigger("done")
                    }), o.on("partialdone", function() {
                        e.trigger("partialdone")
                    }), o.on("reset", function() {
                        e.trigger("reset")
                    }), o.on("endedtimeline", function() {
                        e.trigger("endedtimeline")
                    }), this.flush = function() {
                        o.flush()
                    }, this.partialFlush = function() {
                        o.partialFlush()
                    }, this.reset = function() {
                        o.reset()
                    }, this.endTimeline = function() {
                        o.endTimeline()
                    }, a = function(e, t) {
                        var i, s = 8,
                            r = 8;
                        for (i = 0; i < e; i++) 0 !== r && (r = (s + t.readExpGolomb() + 256) % 256), s = 0 === r ? s : r
                    }, r = function(e) {
                        for (var t, i, s = e.byteLength, r = [], n = 1; n < s - 2;) 0 === e[n] && 0 === e[n + 1] && 3 === e[n + 2] ? (r.push(n + 2), n += 2) : n++;
                        if (0 === r.length) return e;
                        i = new Uint8Array(t = s - r.length);
                        var a = 0;
                        for (n = 0; n < t; a++, n++) a === r[0] && (a++, r.shift()), i[n] = e[a];
                        return i
                    }, n = function(e) {
                        var t, i, s, r, n, o, l, h, d, u, c, p, m = 0,
                            g = 0,
                            f = 0,
                            _ = 0,
                            y = [1, 1];
                        if (i = (t = new Z(e)).readUnsignedByte(), r = t.readUnsignedByte(), s = t.readUnsignedByte(), t.skipUnsignedExpGolomb(), ei[i] && (3 === (n = t.readUnsignedExpGolomb()) && t.skipBits(1), t.skipUnsignedExpGolomb(), t.skipUnsignedExpGolomb(), t.skipBits(1), t.readBoolean()))
                            for (p = 0, c = 3 !== n ? 8 : 12; p < c; p++) t.readBoolean() && (p < 6 ? a(16, t) : a(64, t));
                        if (t.skipUnsignedExpGolomb(), 0 === (o = t.readUnsignedExpGolomb())) t.readUnsignedExpGolomb();
                        else if (1 === o)
                            for (t.skipBits(1), t.skipExpGolomb(), t.skipExpGolomb(), l = t.readUnsignedExpGolomb(), p = 0; p < l; p++) t.skipExpGolomb();
                        if (t.skipUnsignedExpGolomb(), t.skipBits(1), h = t.readUnsignedExpGolomb(), d = t.readUnsignedExpGolomb(), 0 === (u = t.readBits(1)) && t.skipBits(1), t.skipBits(1), t.readBoolean() && (m = t.readUnsignedExpGolomb(), g = t.readUnsignedExpGolomb(), f = t.readUnsignedExpGolomb(), _ = t.readUnsignedExpGolomb()), t.readBoolean() && t.readBoolean()) {
                            switch (t.readUnsignedByte()) {
                                case 1:
                                    y = [1, 1];
                                    break;
                                case 2:
                                    y = [12, 11];
                                    break;
                                case 3:
                                    y = [10, 11];
                                    break;
                                case 4:
                                    y = [16, 11];
                                    break;
                                case 5:
                                    y = [40, 33];
                                    break;
                                case 6:
                                    y = [24, 11];
                                    break;
                                case 7:
                                    y = [20, 11];
                                    break;
                                case 8:
                                    y = [32, 11];
                                    break;
                                case 9:
                                    y = [80, 33];
                                    break;
                                case 10:
                                    y = [18, 11];
                                    break;
                                case 11:
                                    y = [15, 11];
                                    break;
                                case 12:
                                    y = [64, 33];
                                    break;
                                case 13:
                                    y = [160, 99];
                                    break;
                                case 14:
                                    y = [4, 3];
                                    break;
                                case 15:
                                    y = [3, 2];
                                    break;
                                case 16:
                                    y = [2, 1];
                                    break;
                                case 255:
                                    y = [t.readUnsignedByte() << 8 | t.readUnsignedByte(), t.readUnsignedByte() << 8 | t.readUnsignedByte()]
                            }
                            y && (y[0], y[1])
                        }
                        return {
                            profileIdc: i,
                            levelIdc: s,
                            profileCompatibility: r,
                            width: (h + 1) * 16 - 2 * m - 2 * g,
                            height: (2 - u) * (d + 1) * 16 - 2 * f - 2 * _,
                            sarRatio: y
                        }
                    }
                }).prototype = new ec;
                var eJ = ee,
                    eZ = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
                    e0 = function(e, t) {
                        var i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9];
                        return (i = i >= 0 ? i : 0, (16 & e[t + 5]) >> 4) ? i + 20 : i + 10
                    },
                    e1 = function(e, t) {
                        return e.length - t < 10 || 73 !== e[t] || 68 !== e[t + 1] || 51 !== e[t + 2] ? t : (t += e0(e, t), e1(e, t))
                    },
                    e2 = function(e) {
                        return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
                    },
                    e4 = function(e, t, i) {
                        var s, r = "";
                        for (s = t; s < i; s++) r += "%" + ("00" + e[s].toString(16)).slice(-2);
                        return r
                    },
                    e8 = {
                        isLikelyAacData: function(e) {
                            var t = e1(e, 0);
                            return e.length >= t + 2 && (255 & e[t]) == 255 && (240 & e[t + 1]) == 240 && (22 & e[t + 1]) == 16
                        },
                        parseId3TagSize: e0,
                        parseAdtsSize: function(e, t) {
                            var i = (224 & e[t + 5]) >> 5,
                                s = e[t + 4] << 3;
                            return 6144 & e[t + 3] | s | i
                        },
                        parseType: function(e, t) {
                            return 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] ? "timed-metadata" : !0 & e[t] && (240 & e[t + 1]) == 240 ? "audio" : null
                        },
                        parseSampleRate: function(e) {
                            for (var t = 0; t + 5 < e.length;) {
                                if (255 !== e[t] || (246 & e[t + 1]) != 240) {
                                    t++;
                                    continue
                                }
                                return eZ[(60 & e[t + 2]) >>> 2]
                            }
                            return null
                        },
                        parseAacTimestamp: function(e) {
                            var t, i, s;
                            t = 10, 64 & e[5] && (t += 4 + e2(e.subarray(10, 14)));
                            do {
                                if ((i = e2(e.subarray(t + 4, t + 8))) < 1) break;
                                if ("PRIV" === String.fromCharCode(e[t], e[t + 1], e[t + 2], e[t + 3])) {
                                    s = e.subarray(t + 10, t + i + 10);
                                    for (var r = 0; r < s.byteLength; r++)
                                        if (0 === s[r]) {
                                            if ("com.apple.streaming.transportStreamTimestamp" === unescape(e4(s, 0, r))) {
                                                var n = s.subarray(r + 1),
                                                    a = (1 & n[3]) << 30 | n[4] << 22 | n[5] << 14 | n[6] << 6 | n[7] >>> 2;
                                                return a *= 4, a += 3 & n[7]
                                            }
                                            break
                                        }
                                }
                                t += 10 + i
                            } while (t < e.byteLength);
                            return null
                        }
                    };
                (es = function() {
                    var e = new Uint8Array,
                        t = 0;
                    es.prototype.init.call(this), this.setTimestamp = function(e) {
                        t = e
                    }, this.push = function(i) {
                        var s, r, n, a = 0,
                            o = 0;
                        for (e.length ? (n = e.length, (e = new Uint8Array(i.byteLength + n)).set(e.subarray(0, n)), e.set(i, n)) : e = i; e.length - o >= 3;) {
                            if (73 === e[o] && 68 === e[o + 1] && 51 === e[o + 2]) {
                                if (e.length - o < 10 || (a = e8.parseId3TagSize(e, o), o + a > e.length)) break;
                                s = {
                                    type: "timed-metadata",
                                    data: e.subarray(o, o + a)
                                }, this.trigger("data", s), o += a;
                                continue
                            }
                            if ((255 & e[o]) == 255 && (240 & e[o + 1]) == 240) {
                                if (e.length - o < 7 || (a = e8.parseAdtsSize(e, o), o + a > e.length)) break;
                                r = {
                                    type: "audio",
                                    data: e.subarray(o, o + a),
                                    pts: t,
                                    dts: t
                                }, this.trigger("data", r), o += a;
                                continue
                            }
                            o++
                        }
                        e = e.length - o > 0 ? e.subarray(o) : new Uint8Array
                    }, this.reset = function() {
                        e = new Uint8Array, this.trigger("reset")
                    }, this.endTimeline = function() {
                        e = new Uint8Array, this.trigger("endedtimeline")
                    }
                }).prototype = new ec;
                var e5 = es,
                    e3 = {
                        mdat: d,
                        moof: p,
                        initSegment: function(e) {
                            var t, i = h(),
                                s = m(e);
                            return (t = new Uint8Array(i.byteLength + s.byteLength)).set(i), t.set(s, i.byteLength), t
                        }
                    },
                    e6 = {
                        groupNalsIntoFrames: function(e) {
                            var t, i, s = [],
                                r = [];
                            for (t = 0, r.byteLength = 0, r.nalCount = 0, r.duration = 0, s.byteLength = 0; t < e.length; t++) "access_unit_delimiter_rbsp" === (i = e[t]).nalUnitType ? (s.length && (s.duration = i.dts - s.dts, r.byteLength += s.byteLength, r.nalCount += s.length, r.duration += s.duration, r.push(s)), (s = [i]).byteLength = i.data.byteLength, s.pts = i.pts, s.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (s.keyFrame = !0), s.duration = i.dts - s.dts, s.byteLength += i.data.byteLength, s.push(i));
                            return r.length && (!s.duration || s.duration <= 0) && (s.duration = r[r.length - 1].duration), r.byteLength += s.byteLength, r.nalCount += s.length, r.duration += s.duration, r.push(s), r
                        },
                        groupFramesIntoGops: function(e) {
                            var t, i, s = [],
                                r = [];
                            for (t = 0, s.byteLength = 0, s.nalCount = 0, s.duration = 0, s.pts = e[0].pts, s.dts = e[0].dts, r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = e[0].pts, r.dts = e[0].dts; t < e.length; t++)(i = e[t]).keyFrame ? (s.length && (r.push(s), r.byteLength += s.byteLength, r.nalCount += s.nalCount, r.duration += s.duration), (s = [i]).nalCount = i.length, s.byteLength = i.byteLength, s.pts = i.pts, s.dts = i.dts, s.duration = i.duration) : (s.duration += i.duration, s.nalCount += i.length, s.byteLength += i.byteLength, s.push(i));
                            return r.length && s.duration <= 0 && (s.duration = r[r.length - 1].duration), r.byteLength += s.byteLength, r.nalCount += s.nalCount, r.duration += s.duration, r.push(s), r
                        },
                        extendFirstKeyFrame: function(e) {
                            var t;
                            return !e[0][0].keyFrame && e.length > 1 && (t = e.shift(), e.byteLength -= t.byteLength, e.nalCount -= t.nalCount, e[0][0].dts = t.dts, e[0][0].pts = t.pts, e[0][0].duration += t.duration), e
                        },
                        generateSampleTable: function(e, t) {
                            var i, s, r, n, a = t || 0,
                                o = [];
                            for (i = 0; i < e.length; i++)
                                for (s = 0, n = e[i]; s < n.length; s++) r = em(n[s], a), a += r.size, o.push(r);
                            return o
                        },
                        concatenateNalData: function(e) {
                            var t, i, s, r, n, a, o = 0,
                                l = new Uint8Array(e.byteLength + 4 * e.nalCount),
                                h = new DataView(l.buffer);
                            for (t = 0; t < e.length; t++)
                                for (i = 0, r = e[t]; i < r.length; i++)
                                    for (s = 0, n = r[i]; s < n.length; s++) a = n[s], h.setUint32(o, a.data.byteLength), o += 4, l.set(a.data, o), o += a.data.byteLength;
                            return l
                        }
                    },
                    e7 = function(e, t, i, s) {
                        var r, n, a, o, l = 0,
                            h = 0,
                            d = 0;
                        if (t.length && (r = ey.audioTsToVideoTs(e.baseMediaDecodeTime, e.samplerate), l = Math.ceil(ey.ONE_SECOND_IN_TS / (e.samplerate / 1024)), i && s && (d = (h = Math.floor((r - Math.max(i, s)) / l)) * l), !(h < 1) && !(d > ey.ONE_SECOND_IN_TS / 2))) {
                            for ((n = ev()[e.samplerate]) || (n = t[0].data), a = 0; a < h; a++) o = t[0], t.splice(0, 0, {
                                data: n,
                                dts: o.dts - l,
                                pts: o.pts - l
                            });
                            return e.baseMediaDecodeTime -= Math.floor(ey.videoTsToAudioTs(d, e.samplerate)), d
                        }
                    },
                    e9 = function(e) {
                        var t, i = [];
                        for (t = 0; t < e.length; t++) i.push({
                            size: e[t].data.byteLength,
                            duration: 1024
                        });
                        return i
                    },
                    te = function(e) {
                        var t, i, s = 0,
                            r = new Uint8Array(eT(e));
                        for (t = 0; t < e.length; t++) i = e[t], r.set(i.data, s), s += i.data.byteLength;
                        return r
                    },
                    tt = {
                        clearDtsInfo: function(e) {
                            delete e.minSegmentDts, delete e.maxSegmentDts, delete e.minSegmentPts, delete e.maxSegmentPts
                        },
                        calculateTrackBaseMediaDecodeTime: function(e, t) {
                            var i, s = e.minSegmentDts;
                            return t || (s -= e.timelineStartInfo.dts), i = Math.max(0, i = e.timelineStartInfo.baseMediaDecodeTime + s), "audio" === e.type && (i *= e.samplerate / eb, i = Math.floor(i)), i
                        },
                        collectDtsInfo: function(e, t) {
                            "number" == typeof t.pts && (void 0 === e.timelineStartInfo.pts && (e.timelineStartInfo.pts = t.pts), void 0 === e.minSegmentPts ? e.minSegmentPts = t.pts : e.minSegmentPts = Math.min(e.minSegmentPts, t.pts), void 0 === e.maxSegmentPts ? e.maxSegmentPts = t.pts : e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts)), "number" == typeof t.dts && (void 0 === e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts), void 0 === e.minSegmentDts ? e.minSegmentDts = t.dts : e.minSegmentDts = Math.min(e.minSegmentDts, t.dts), void 0 === e.maxSegmentDts ? e.maxSegmentDts = t.dts : e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts))
                        }
                    },
                    ti = e8.isLikelyAacData,
                    ts = ey.ONE_SECOND_IN_TS,
                    tr = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"],
                    tn = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility", "sarRatio"],
                    ta = function(e, t) {
                        t.stream = e, this.trigger("log", t)
                    },
                    to = function(e, t) {
                        for (var i = Object.keys(t), s = 0; s < i.length; s++) {
                            var r = i[s];
                            "headOfPipeline" !== r && t[r].on && t[r].on("log", ta.bind(e, r))
                        }
                    },
                    tl = function(e, t) {
                        var i;
                        if (e.length !== t.length) return !1;
                        for (i = 0; i < e.length; i++)
                            if (e[i] !== t[i]) return !1;
                        return !0
                    },
                    th = function(e, t, i, s, r, n) {
                        return {
                            start: {
                                dts: e,
                                pts: e + (i - t)
                            },
                            end: {
                                dts: e + (s - t),
                                pts: e + (r - i)
                            },
                            prependedContentDuration: n,
                            baseMediaDecodeTime: e
                        }
                    };
                (en = function(e, t) {
                    var i, s = [],
                        r = 0,
                        n = 0,
                        a = 1 / 0;
                    i = (t = t || {}).firstSequenceNumber || 0, en.prototype.init.call(this), this.push = function(t) {
                        tt.collectDtsInfo(e, t), e && tr.forEach(function(i) {
                            e[i] = t[i]
                        }), s.push(t)
                    }, this.setEarliestDts = function(e) {
                        r = e
                    }, this.setVideoBaseMediaDecodeTime = function(e) {
                        a = e
                    }, this.setAudioAppendStart = function(e) {
                        n = e
                    }, this.flush = function() {
                        var o, l, h, d, u, c, p, m, g;
                        if (0 === s.length) {
                            this.trigger("done", "AudioSegmentStream");
                            return
                        }
                        m = s, g = r, o = e.minSegmentDts >= g ? m : (e.minSegmentDts = 1 / 0, m.filter(function(t) {
                            return t.dts >= g && (e.minSegmentDts = Math.min(e.minSegmentDts, t.dts), e.minSegmentPts = e.minSegmentDts, !0)
                        })), e.baseMediaDecodeTime = tt.calculateTrackBaseMediaDecodeTime(e, t.keepOriginalTimestamps), p = e7(e, o, n, a), e.samples = e9(o), h = e3.mdat(te(o)), s = [], d = new Uint8Array((l = e3.moof(i, [e])).byteLength + h.byteLength), i++, d.set(l), d.set(h, l.byteLength), tt.clearDtsInfo(e), u = Math.ceil(1024 * ts / e.samplerate), o.length && (c = o.length * u, this.trigger("segmentTimingInfo", th(ey.audioTsToVideoTs(e.baseMediaDecodeTime, e.samplerate), o[0].dts, o[0].pts, o[0].dts + c, o[0].pts + c, p || 0)), this.trigger("timingInfo", {
                            start: o[0].pts,
                            end: o[0].pts + c
                        })), this.trigger("data", {
                            track: e,
                            boxes: d
                        }), this.trigger("done", "AudioSegmentStream")
                    }, this.reset = function() {
                        tt.clearDtsInfo(e), s = [], this.trigger("reset")
                    }
                }).prototype = new ec, (er = function(e, t) {
                    var i, s, r, n = [],
                        a = [];
                    i = (t = t || {}).firstSequenceNumber || 0, er.prototype.init.call(this), delete e.minPTS, this.gopCache_ = [], this.push = function(t) {
                        tt.collectDtsInfo(e, t), "seq_parameter_set_rbsp" !== t.nalUnitType || s || (s = t.config, e.sps = [t.data], tn.forEach(function(t) {
                            e[t] = s[t]
                        }, this)), "pic_parameter_set_rbsp" !== t.nalUnitType || r || (r = t.data, e.pps = [t.data]), n.push(t)
                    }, this.flush = function() {
                        for (var s, r, o, l, h, d, u, c, p, m = 0; n.length && "access_unit_delimiter_rbsp" !== n[0].nalUnitType;) n.shift();
                        if (0 === n.length) {
                            this.resetStream_(), this.trigger("done", "VideoSegmentStream");
                            return
                        }
                        if (r = e6.groupNalsIntoFrames(n), (l = e6.groupFramesIntoGops(r))[0][0].keyFrame || ((o = this.getGopForFusion_(n[0], e)) ? (m = o.duration, l.unshift(o), l.byteLength += o.byteLength, l.nalCount += o.nalCount, l.pts = o.pts, l.dts = o.dts, l.duration += o.duration) : l = e6.extendFirstKeyFrame(l)), a.length) {
                            if (!(s = t.alignGopsAtEnd ? this.alignGopsAtEnd_(l) : this.alignGopsAtStart_(l))) {
                                this.gopCache_.unshift({
                                    gop: l.pop(),
                                    pps: e.pps,
                                    sps: e.sps
                                }), this.gopCache_.length = Math.min(6, this.gopCache_.length), n = [], this.resetStream_(), this.trigger("done", "VideoSegmentStream");
                                return
                            }
                            tt.clearDtsInfo(e), l = s
                        }
                        tt.collectDtsInfo(e, l), e.samples = e6.generateSampleTable(l), d = e3.mdat(e6.concatenateNalData(l)), e.baseMediaDecodeTime = tt.calculateTrackBaseMediaDecodeTime(e, t.keepOriginalTimestamps), this.trigger("processedGopsInfo", l.map(function(e) {
                            return {
                                pts: e.pts,
                                dts: e.dts,
                                byteLength: e.byteLength
                            }
                        })), c = l[0], p = l[l.length - 1], this.trigger("segmentTimingInfo", th(e.baseMediaDecodeTime, c.dts, c.pts, p.dts + p.duration, p.pts + p.duration, m)), this.trigger("timingInfo", {
                            start: l[0].pts,
                            end: l[l.length - 1].pts + l[l.length - 1].duration
                        }), this.gopCache_.unshift({
                            gop: l.pop(),
                            pps: e.pps,
                            sps: e.sps
                        }), this.gopCache_.length = Math.min(6, this.gopCache_.length), n = [], this.trigger("baseMediaDecodeTime", e.baseMediaDecodeTime), this.trigger("timelineStartInfo", e.timelineStartInfo), u = new Uint8Array((h = e3.moof(i, [e])).byteLength + d.byteLength), i++, u.set(h), u.set(d, h.byteLength), this.trigger("data", {
                            track: e,
                            boxes: u
                        }), this.resetStream_(), this.trigger("done", "VideoSegmentStream")
                    }, this.reset = function() {
                        this.resetStream_(), n = [], this.gopCache_.length = 0, a.length = 0, this.trigger("reset")
                    }, this.resetStream_ = function() {
                        tt.clearDtsInfo(e), s = void 0, r = void 0
                    }, this.getGopForFusion_ = function(t) {
                        var i, s, r, n, a, o = 1 / 0;
                        for (a = 0; a < this.gopCache_.length; a++) r = (n = this.gopCache_[a]).gop, e.pps && tl(e.pps[0], n.pps[0]) && e.sps && tl(e.sps[0], n.sps[0]) && !(r.dts < e.timelineStartInfo.dts) && (i = t.dts - r.dts - r.duration) >= -1e4 && i <= 45e3 && (!s || o > i) && (s = n, o = i);
                        return s ? s.gop : null
                    }, this.alignGopsAtStart_ = function(e) {
                        var t, i, s, r, n, o, l, h;
                        for (n = e.byteLength, o = e.nalCount, l = e.duration, t = i = 0; t < a.length && i < e.length && (s = a[t], r = e[i], s.pts !== r.pts);) {
                            if (r.pts > s.pts) {
                                t++;
                                continue
                            }
                            i++, n -= r.byteLength, o -= r.nalCount, l -= r.duration
                        }
                        return 0 === i ? e : i === e.length ? null : ((h = e.slice(i)).byteLength = n, h.duration = l, h.nalCount = o, h.pts = h[0].pts, h.dts = h[0].dts, h)
                    }, this.alignGopsAtEnd_ = function(e) {
                        for (t = a.length - 1, i = e.length - 1, n = null, o = !1; t >= 0 && i >= 0;) {
                            if (s = a[t], r = e[i], s.pts === r.pts) {
                                o = !0;
                                break
                            }
                            if (s.pts > r.pts) {
                                t--;
                                continue
                            }
                            t === a.length - 1 && (n = i), i--
                        }
                        if (!o && null === n) return null;
                        if (0 === (l = o ? i : n)) return e;
                        var t, i, s, r, n, o, l, h = e.slice(l),
                            d = h.reduce(function(e, t) {
                                return e.byteLength += t.byteLength, e.duration += t.duration, e.nalCount += t.nalCount, e
                            }, {
                                byteLength: 0,
                                duration: 0,
                                nalCount: 0
                            });
                        return h.byteLength = d.byteLength, h.duration = d.duration, h.nalCount = d.nalCount, h.pts = h[0].pts, h.dts = h[0].dts, h
                    }, this.alignGopsWith = function(e) {
                        a = e
                    }
                }).prototype = new ec, (eo = function(e, t) {
                    this.numberOfTracks = 0, this.metadataStream = t, void 0 !== (e = e || {}).remux ? this.remuxTracks = !!e.remux : this.remuxTracks = !0, "boolean" == typeof e.keepOriginalTimestamps ? this.keepOriginalTimestamps = e.keepOriginalTimestamps : this.keepOriginalTimestamps = !1, this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, eo.prototype.init.call(this), this.push = function(e) {
                        return e.content || e.text ? this.pendingCaptions.push(e) : e.frames ? this.pendingMetadata.push(e) : void(this.pendingTracks.push(e.track), this.pendingBytes += e.boxes.byteLength, "video" === e.track.type && (this.videoTrack = e.track, this.pendingBoxes.push(e.boxes)), "audio" === e.track.type && (this.audioTrack = e.track, this.pendingBoxes.unshift(e.boxes)))
                    }
                }).prototype = new ec, eo.prototype.flush = function(e) {
                    var t, i, s, r, n = 0,
                        a = {
                            captions: [],
                            captionStreams: {},
                            metadata: [],
                            info: {}
                        },
                        o = 0;
                    if (this.pendingTracks.length < this.numberOfTracks) {
                        if ("VideoSegmentStream" !== e && "AudioSegmentStream" !== e || this.remuxTracks) return;
                        if (0 === this.pendingTracks.length) {
                            this.emittedTracks++, this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0);
                            return
                        }
                    }
                    if (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts, tn.forEach(function(e) {
                            a.info[e] = this.videoTrack[e]
                        }, this)) : this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts, tr.forEach(function(e) {
                            a.info[e] = this.audioTrack[e]
                        }, this)), this.videoTrack || this.audioTrack) {
                        for (1 === this.pendingTracks.length ? a.type = this.pendingTracks[0].type : a.type = "combined", this.emittedTracks += this.pendingTracks.length, s = e3.initSegment(this.pendingTracks), a.initSegment = new Uint8Array(s.byteLength), a.initSegment.set(s), a.data = new Uint8Array(this.pendingBytes), r = 0; r < this.pendingBoxes.length; r++) a.data.set(this.pendingBoxes[r], n), n += this.pendingBoxes[r].byteLength;
                        for (r = 0; r < this.pendingCaptions.length; r++)(t = this.pendingCaptions[r]).startTime = ey.metadataTsToSeconds(t.startPts, o, this.keepOriginalTimestamps), t.endTime = ey.metadataTsToSeconds(t.endPts, o, this.keepOriginalTimestamps), a.captionStreams[t.stream] = !0, a.captions.push(t);
                        for (r = 0; r < this.pendingMetadata.length; r++)(i = this.pendingMetadata[r]).cueTime = ey.metadataTsToSeconds(i.pts, o, this.keepOriginalTimestamps), a.metadata.push(i);
                        for (a.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", a), r = 0; r < a.captions.length; r++) t = a.captions[r], this.trigger("caption", t);
                        for (r = 0; r < a.metadata.length; r++) i = a.metadata[r], this.trigger("id3Frame", i)
                    }
                    this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0)
                }, eo.prototype.setRemux = function(e) {
                    this.remuxTracks = e
                }, (ea = function(e) {
                    var t, i, s = this,
                        r = !0;
                    ea.prototype.init.call(this), e = e || {}, this.baseMediaDecodeTime = e.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function() {
                        var r = {};
                        this.transmuxPipeline_ = r, r.type = "aac", r.metadataStream = new eG.MetadataStream, r.aacStream = new e5, r.audioTimestampRolloverStream = new eG.TimestampRolloverStream("audio"), r.timedMetadataTimestampRolloverStream = new eG.TimestampRolloverStream("timed-metadata"), r.adtsStream = new eX, r.coalesceStream = new eo(e, r.metadataStream), r.headOfPipeline = r.aacStream, r.aacStream.pipe(r.audioTimestampRolloverStream).pipe(r.adtsStream), r.aacStream.pipe(r.timedMetadataTimestampRolloverStream).pipe(r.metadataStream).pipe(r.coalesceStream), r.metadataStream.on("timestamp", function(e) {
                            r.aacStream.setTimestamp(e.timeStamp)
                        }), r.aacStream.on("data", function(n) {
                            "timed-metadata" !== n.type && "audio" !== n.type || r.audioSegmentStream || (i = i || {
                                timelineStartInfo: {
                                    baseMediaDecodeTime: s.baseMediaDecodeTime
                                },
                                codec: "adts",
                                type: "audio"
                            }, r.coalesceStream.numberOfTracks++, r.audioSegmentStream = new en(i, e), r.audioSegmentStream.on("log", s.getLogTrigger_("audioSegmentStream")), r.audioSegmentStream.on("timingInfo", s.trigger.bind(s, "audioTimingInfo")), r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream), s.trigger("trackinfo", {
                                hasAudio: !!i,
                                hasVideo: !!t
                            }))
                        }), r.coalesceStream.on("data", this.trigger.bind(this, "data")), r.coalesceStream.on("done", this.trigger.bind(this, "done")), to(this, r)
                    }, this.setupTsPipeline = function() {
                        var r = {};
                        this.transmuxPipeline_ = r, r.type = "ts", r.metadataStream = new eG.MetadataStream, r.packetStream = new eG.TransportPacketStream, r.parseStream = new eG.TransportParseStream, r.elementaryStream = new eG.ElementaryStream, r.timestampRolloverStream = new eG.TimestampRolloverStream, r.adtsStream = new eX, r.h264Stream = new eJ, r.captionStream = new eG.CaptionStream(e), r.coalesceStream = new eo(e, r.metadataStream), r.headOfPipeline = r.packetStream, r.packetStream.pipe(r.parseStream).pipe(r.elementaryStream).pipe(r.timestampRolloverStream), r.timestampRolloverStream.pipe(r.h264Stream), r.timestampRolloverStream.pipe(r.adtsStream), r.timestampRolloverStream.pipe(r.metadataStream).pipe(r.coalesceStream), r.h264Stream.pipe(r.captionStream).pipe(r.coalesceStream), r.elementaryStream.on("data", function(n) {
                            var a;
                            if ("metadata" === n.type) {
                                for (a = n.tracks.length; a--;) t || "video" !== n.tracks[a].type ? i || "audio" !== n.tracks[a].type || ((i = n.tracks[a]).timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime) : (t = n.tracks[a]).timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime;
                                t && !r.videoSegmentStream && (r.coalesceStream.numberOfTracks++, r.videoSegmentStream = new er(t, e), r.videoSegmentStream.on("log", s.getLogTrigger_("videoSegmentStream")), r.videoSegmentStream.on("timelineStartInfo", function(t) {
                                    i && !e.keepOriginalTimestamps && (i.timelineStartInfo = t, r.audioSegmentStream.setEarliestDts(t.dts - s.baseMediaDecodeTime))
                                }), r.videoSegmentStream.on("processedGopsInfo", s.trigger.bind(s, "gopInfo")), r.videoSegmentStream.on("segmentTimingInfo", s.trigger.bind(s, "videoSegmentTimingInfo")), r.videoSegmentStream.on("baseMediaDecodeTime", function(e) {
                                    i && r.audioSegmentStream.setVideoBaseMediaDecodeTime(e)
                                }), r.videoSegmentStream.on("timingInfo", s.trigger.bind(s, "videoTimingInfo")), r.h264Stream.pipe(r.videoSegmentStream).pipe(r.coalesceStream)), i && !r.audioSegmentStream && (r.coalesceStream.numberOfTracks++, r.audioSegmentStream = new en(i, e), r.audioSegmentStream.on("log", s.getLogTrigger_("audioSegmentStream")), r.audioSegmentStream.on("timingInfo", s.trigger.bind(s, "audioTimingInfo")), r.audioSegmentStream.on("segmentTimingInfo", s.trigger.bind(s, "audioSegmentTimingInfo")), r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream)), s.trigger("trackinfo", {
                                    hasAudio: !!i,
                                    hasVideo: !!t
                                })
                            }
                        }), r.coalesceStream.on("data", this.trigger.bind(this, "data")), r.coalesceStream.on("id3Frame", function(e) {
                            e.dispatchType = r.metadataStream.dispatchType, s.trigger("id3Frame", e)
                        }), r.coalesceStream.on("caption", this.trigger.bind(this, "caption")), r.coalesceStream.on("done", this.trigger.bind(this, "done")), to(this, r)
                    }, this.setBaseMediaDecodeTime = function(s) {
                        var r = this.transmuxPipeline_;
                        e.keepOriginalTimestamps || (this.baseMediaDecodeTime = s), i && (i.timelineStartInfo.dts = void 0, i.timelineStartInfo.pts = void 0, tt.clearDtsInfo(i), r.audioTimestampRolloverStream && r.audioTimestampRolloverStream.discontinuity()), t && (r.videoSegmentStream && (r.videoSegmentStream.gopCache_ = []), t.timelineStartInfo.dts = void 0, t.timelineStartInfo.pts = void 0, tt.clearDtsInfo(t), r.captionStream.reset()), r.timestampRolloverStream && r.timestampRolloverStream.discontinuity()
                    }, this.setAudioAppendStart = function(e) {
                        i && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e)
                    }, this.setRemux = function(t) {
                        var i = this.transmuxPipeline_;
                        e.remux = t, i && i.coalesceStream && i.coalesceStream.setRemux(t)
                    }, this.alignGopsWith = function(e) {
                        t && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)
                    }, this.getLogTrigger_ = function(e) {
                        var t = this;
                        return function(i) {
                            i.stream = e, t.trigger("log", i)
                        }
                    }, this.push = function(e) {
                        if (r) {
                            var t = ti(e);
                            t && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : t || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), r = !1
                        }
                        this.transmuxPipeline_.headOfPipeline.push(e)
                    }, this.flush = function() {
                        r = !0, this.transmuxPipeline_.headOfPipeline.flush()
                    }, this.endTimeline = function() {
                        this.transmuxPipeline_.headOfPipeline.endTimeline()
                    }, this.reset = function() {
                        this.transmuxPipeline_.headOfPipeline && this.transmuxPipeline_.headOfPipeline.reset()
                    }, this.resetCaptions = function() {
                        this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
                    }
                }).prototype = new ec;
                var td = ea,
                    tu = function(e) {
                        return e >>> 0
                    },
                    tc = function(e) {
                        return "" + (String.fromCharCode(e[0]) + String.fromCharCode(e[1]) + String.fromCharCode(e[2]) + String.fromCharCode(e[3]))
                    },
                    tp = function(e, t) {
                        var i, s, r, n, a, o = [];
                        if (!t.length) return null;
                        for (i = 0; i < e.byteLength;) s = tu(e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3]), r = tc(e.subarray(i + 4, i + 8)), n = s > 1 ? i + s : e.byteLength, r === t[0] && (1 === t.length ? o.push(e.subarray(i + 8, n)) : (a = tp(e.subarray(i + 8, n), t.slice(1))).length && (o = o.concat(a))), i = n;
                        return o
                    },
                    tm = function(e) {
                        var t = {
                            version: e[0],
                            flags: new Uint8Array(e.subarray(1, 4))
                        };
                        return 1 === t.version ? t.baseMediaDecodeTime = ep(e.subarray(4)) : t.baseMediaDecodeTime = tu(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]), t
                    },
                    tg = function(e) {
                        return {
                            isLeading: (12 & e[0]) >>> 2,
                            dependsOn: 3 & e[0],
                            isDependedOn: (192 & e[1]) >>> 6,
                            hasRedundancy: (48 & e[1]) >>> 4,
                            paddingValue: (14 & e[1]) >>> 1,
                            isNonSyncSample: 1 & e[1],
                            degradationPriority: e[2] << 8 | e[3]
                        }
                    },
                    tf = function(e) {
                        var t, i = {
                                version: e[0],
                                flags: new Uint8Array(e.subarray(1, 4)),
                                samples: []
                            },
                            s = new DataView(e.buffer, e.byteOffset, e.byteLength),
                            r = 1 & i.flags[2],
                            n = 4 & i.flags[2],
                            a = 1 & i.flags[1],
                            o = 2 & i.flags[1],
                            l = 4 & i.flags[1],
                            h = 8 & i.flags[1],
                            d = s.getUint32(4),
                            u = 8;
                        for (r && (i.dataOffset = s.getInt32(u), u += 4), n && d && (t = {
                                flags: tg(e.subarray(u, u + 4))
                            }, u += 4, a && (t.duration = s.getUint32(u), u += 4), o && (t.size = s.getUint32(u), u += 4), h && (1 === i.version ? t.compositionTimeOffset = s.getInt32(u) : t.compositionTimeOffset = s.getUint32(u), u += 4), i.samples.push(t), d--); d--;) t = {}, a && (t.duration = s.getUint32(u), u += 4), o && (t.size = s.getUint32(u), u += 4), l && (t.flags = tg(e.subarray(u, u + 4)), u += 4), h && (1 === i.version ? t.compositionTimeOffset = s.getInt32(u) : t.compositionTimeOffset = s.getUint32(u), u += 4), i.samples.push(t);
                        return i
                    },
                    t_ = function(e) {
                        var t, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                            s = {
                                version: e[0],
                                flags: new Uint8Array(e.subarray(1, 4)),
                                trackId: i.getUint32(4)
                            },
                            r = 1 & s.flags[2],
                            n = 2 & s.flags[2],
                            a = 8 & s.flags[2],
                            o = 16 & s.flags[2],
                            l = 32 & s.flags[2],
                            h = 65536 & s.flags[0],
                            d = 131072 & s.flags[0];
                        return t = 8, r && (t += 4, s.baseDataOffset = i.getUint32(12), t += 4), n && (s.sampleDescriptionIndex = i.getUint32(t), t += 4), a && (s.defaultSampleDuration = i.getUint32(t), t += 4), o && (s.defaultSampleSize = i.getUint32(t), t += 4), l && (s.defaultSampleFlags = i.getUint32(t)), h && (s.durationIsEmpty = !0), !r && d && (s.baseDataOffsetIsMoof = !0), s
                    };
                "undefined" != typeof window ? el = window : void 0 !== eu ? el = eu : "undefined" != typeof self ? el = self : el = {};
                var ty = el,
                    tv = eS.discardEmulationPreventionBytes,
                    tT = function(e, t) {
                        for (var i = e, s = 0; s < t.length; s++) {
                            var r = t[s];
                            if (i < r.size) return r;
                            i -= r.size
                        }
                        return null
                    },
                    tb = function(e, t, i) {
                        var s, r, n, a, o = new DataView(e.buffer, e.byteOffset, e.byteLength),
                            l = {
                                logs: [],
                                seiNals: []
                            };
                        for (r = 0; r + 4 < e.length; r += n)
                            if (n = o.getUint32(r), r += 4, !(n <= 0)) switch (31 & e[r]) {
                                case 6:
                                    var h = e.subarray(r + 1, r + 1 + n),
                                        d = tT(r, t);
                                    if (s = {
                                            nalUnitType: "sei_rbsp",
                                            size: n,
                                            data: h,
                                            escapedRBSP: tv(h),
                                            trackId: i
                                        }, d) s.pts = d.pts, s.dts = d.dts, a = d;
                                    else if (a) s.pts = a.pts, s.dts = a.dts;
                                    else {
                                        l.logs.push({
                                            level: "warn",
                                            message: "We've encountered a nal unit without data at " + r + " for trackId " + i + ". See mux.js#223."
                                        });
                                        break
                                    }
                                    l.seiNals.push(s)
                            }
                        return l
                    },
                    tS = function(e, t, i) {
                        var s = t,
                            r = i.defaultSampleDuration || 0,
                            n = i.defaultSampleSize || 0,
                            a = i.trackId,
                            o = [];
                        return e.forEach(function(e) {
                            var t = tf(e).samples;
                            t.forEach(function(e) {
                                void 0 === e.duration && (e.duration = r), void 0 === e.size && (e.size = n), e.trackId = a, e.dts = s, void 0 === e.compositionTimeOffset && (e.compositionTimeOffset = 0), "bigint" == typeof s ? (e.pts = s + ty.BigInt(e.compositionTimeOffset), s += ty.BigInt(e.duration)) : (e.pts = s + e.compositionTimeOffset, s += e.duration)
                            }), o = o.concat(t)
                        }), o
                    },
                    tk = function(e, t) {
                        var i = tp(e, ["moof", "traf"]),
                            s = tp(e, ["mdat"]),
                            r = {},
                            n = [];
                        return s.forEach(function(e, t) {
                            var s = i[t];
                            n.push({
                                mdat: e,
                                traf: s
                            })
                        }), n.forEach(function(e) {
                            var i, s = e.mdat,
                                n = e.traf,
                                a = t_(tp(n, ["tfhd"])[0]),
                                o = a.trackId,
                                l = tp(n, ["tfdt"]),
                                h = l.length > 0 ? tm(l[0]).baseMediaDecodeTime : 0,
                                d = tp(n, ["trun"]);
                            t === o && d.length > 0 && (i = tb(s, tS(d, h, a), o), r[o] || (r[o] = {
                                seiNals: [],
                                logs: []
                            }), r[o].seiNals = r[o].seiNals.concat(i.seiNals), r[o].logs = r[o].logs.concat(i.logs))
                        }), r
                    },
                    tC = function(e, t, i) {
                        if (null === t) return null;
                        var s = tk(e, t)[t] || {};
                        return {
                            seiNals: s.seiNals,
                            logs: s.logs,
                            timescale: i
                        }
                    },
                    tE = function() {
                        var e, t, i, s, r, n, a = !1;
                        this.isInitialized = function() {
                            return a
                        }, this.init = function(t) {
                            e = new ek, a = !0, n = !!t && t.isPartial, e.on("data", function(e) {
                                e.startTime = e.startPts / s, e.endTime = e.endPts / s, r.captions.push(e), r.captionStreams[e.stream] = !0
                            }), e.on("log", function(e) {
                                r.logs.push(e)
                            })
                        }, this.isNewInit = function(e, t) {
                            return (!e || 0 !== e.length) && (!t || "object" != typeof t || 0 !== Object.keys(t).length) && (i !== e[0] || s !== t[i])
                        }, this.parse = function(e, n, a) {
                            var o;
                            if (!this.isInitialized() || !n || !a) return null;
                            if (this.isNewInit(n, a)) s = a[i = n[0]];
                            else if (null === i || !s) return t.push(e), null;
                            for (; t.length > 0;) {
                                var l = t.shift();
                                this.parse(l, n, a)
                            }
                            return ((o = tC(e, i, s)) && o.logs && (r.logs = r.logs.concat(o.logs)), null !== o && o.seiNals) ? (this.pushNals(o.seiNals), this.flushStream(), r) : r.logs.length ? {
                                logs: r.logs,
                                captions: [],
                                captionStreams: []
                            } : null
                        }, this.pushNals = function(t) {
                            if (!this.isInitialized() || !t || 0 === t.length) return null;
                            t.forEach(function(t) {
                                e.push(t)
                            })
                        }, this.flushStream = function() {
                            if (!this.isInitialized()) return null;
                            n ? e.partialFlush() : e.flush()
                        }, this.clearParsedCaptions = function() {
                            r.captions = [], r.captionStreams = {}, r.logs = []
                        }, this.resetCaptionStream = function() {
                            if (!this.isInitialized()) return null;
                            e.reset()
                        }, this.clearAllCaptions = function() {
                            this.clearParsedCaptions(), this.resetCaptionStream()
                        }, this.reset = function() {
                            t = [], i = null, s = null, r ? this.clearParsedCaptions() : r = {
                                captions: [],
                                captionStreams: {},
                                logs: []
                            }, this.resetCaptionStream()
                        }, this.reset()
                    },
                    tw = function(e) {
                        for (var t = 0, i = String.fromCharCode(e[0]), s = "";
                            "\0" !== i;) s += i, i = String.fromCharCode(e[++t]);
                        return s + i
                    },
                    tx = function(e, t) {
                        var i = "\0" !== t.scheme_id_uri,
                            s = 0 === e && tI(t.presentation_time_delta) && i,
                            r = 1 === e && tI(t.presentation_time) && i;
                        return !(e > 1) && s || r
                    },
                    tI = function(e) {
                        return void 0 !== e || null !== e
                    },
                    tP = function(e) {
                        return ("00" + e.toString(16)).slice(-2)
                    },
                    tA = function(e) {
                        var t, i, s, r, n, a, o, l = 4,
                            h = e[0];
                        if (0 === h) {
                            t = tw(e.subarray(l)), l += t.length, i = tw(e.subarray(l)), l += i.length;
                            var d = new DataView(e.buffer);
                            s = d.getUint32(l), l += 4, n = d.getUint32(l), l += 4, a = d.getUint32(l), l += 4, o = d.getUint32(l), l += 4
                        } else if (1 === h) {
                            var d = new DataView(e.buffer);
                            s = d.getUint32(l), l += 4, r = ep(e.subarray(l)), l += 8, a = d.getUint32(l), l += 4, o = d.getUint32(l), l += 4, t = tw(e.subarray(l)), l += t.length, i = tw(e.subarray(l)), l += i.length
                        }
                        var u = {
                            scheme_id_uri: t,
                            value: i,
                            timescale: s || 1,
                            presentation_time: r,
                            presentation_time_delta: n,
                            event_duration: a,
                            id: o,
                            message_data: new Uint8Array(e.subarray(l, e.byteLength))
                        };
                        return tx(h, u) ? u : void 0
                    },
                    tL = function(e, t, i, s) {
                        return e || 0 === e ? e / t : s + i / t
                    },
                    tD = ez.parseId3Frames;
                eh = function(e, t) {
                    var i = tp(t, ["moof", "traf"]).reduce(function(t, i) {
                        let s;
                        var r, n = tp(i, ["tfhd"])[0],
                            a = e[tu(n[4] << 24 | n[5] << 16 | n[6] << 8 | n[7])] || 9e4,
                            o = tp(i, ["tfdt"])[0],
                            l = new DataView(o.buffer, o.byteOffset, o.byteLength);
                        return "bigint" == typeof(r = 1 === o[0] ? ep(o.subarray(4, 12)) : l.getUint32(4)) ? s = r / ty.BigInt(a) : "number" != typeof r || isNaN(r) || (s = r / a), s < Number.MAX_SAFE_INTEGER && (s = Number(s)), s < t && (t = s), t
                    }, 1 / 0);
                    return "bigint" == typeof i || isFinite(i) ? i : 0
                }, ed = function(e) {
                    var t = 0 === e[0] ? 12 : 20;
                    return tu(e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3])
                };
                var tO = function(e) {
                        var t = tp(e, ["moov", "trak"]),
                            i = [];
                        return t.forEach(function(e) {
                            var t = {},
                                s = tp(e, ["tkhd"])[0];
                            s && (l = (o = new DataView(s.buffer, s.byteOffset, s.byteLength)).getUint8(0), t.id = 0 === l ? o.getUint32(12) : o.getUint32(20));
                            var r = tp(e, ["mdia", "hdlr"])[0];
                            if (r) {
                                var n = tc(r.subarray(8, 12));
                                "vide" === n ? t.type = "video" : "soun" === n ? t.type = "audio" : t.type = n
                            }
                            var a = tp(e, ["mdia", "minf", "stbl", "stsd"])[0];
                            if (a) {
                                var o, l, h, d = a.subarray(8);
                                t.codec = tc(d.subarray(4, 8));
                                var u = tp(d, [t.codec])[0];
                                u && (/^[asm]vc[1-9]$/i.test(t.codec) ? "avcC" === tc((h = u.subarray(78)).subarray(4, 8)) && h.length > 11 ? (t.codec += ".", t.codec += tP(h[9]), t.codec += tP(h[10]), t.codec += tP(h[11])) : t.codec = "avc1.4d400d" : /^mp4[a,v]$/i.test(t.codec) ? "esds" === tc((h = u.subarray(28)).subarray(4, 8)) && h.length > 20 && 0 !== h[19] ? (t.codec += "." + tP(h[19]), t.codec += "." + tP(h[20] >>> 2 & 63).replace(/^0/, "")) : t.codec = "mp4a.40.2" : t.codec = t.codec.toLowerCase())
                            }
                            var c = tp(e, ["mdia", "mdhd"])[0];
                            c && (t.timescale = ed(c)), i.push(t)
                        }), i
                    },
                    tM = function(e) {
                        var t = 31 & e[1];
                        return t <<= 8, t |= e[2]
                    },
                    tR = function(e) {
                        return !!(64 & e[1])
                    },
                    tU = function(e) {
                        var t = 0;
                        return (48 & e[3]) >>> 4 > 1 && (t += e[4] + 1), t
                    },
                    tB = function(e) {
                        switch (e) {
                            case 5:
                                return "slice_layer_without_partitioning_rbsp_idr";
                            case 6:
                                return "sei_rbsp";
                            case 7:
                                return "seq_parameter_set_rbsp";
                            case 8:
                                return "pic_parameter_set_rbsp";
                            case 9:
                                return "access_unit_delimiter_rbsp";
                            default:
                                return null
                        }
                    },
                    tN = {};
                tN.ts = {
                    parseType: function(e, t) {
                        var i = tM(e);
                        return 0 === i ? "pat" : i === t ? "pmt" : t ? "pes" : null
                    },
                    parsePat: function(e) {
                        var t = tR(e),
                            i = 4 + tU(e);
                        return t && (i += e[i] + 1), (31 & e[i + 10]) << 8 | e[i + 11]
                    },
                    parsePmt: function(e) {
                        var t, i = {},
                            s = tR(e),
                            r = 4 + tU(e);
                        if (s && (r += e[r] + 1), 1 & e[r + 5]) {
                            t = 3 + ((15 & e[r + 1]) << 8 | e[r + 2]) - 4;
                            for (var n = 12 + ((15 & e[r + 10]) << 8 | e[r + 11]); n < t;) {
                                var a = r + n;
                                i[(31 & e[a + 1]) << 8 | e[a + 2]] = e[a], n += ((15 & e[a + 3]) << 8 | e[a + 4]) + 5
                            }
                            return i
                        }
                    },
                    parsePayloadUnitStartIndicator: tR,
                    parsePesType: function(e, t) {
                        switch (t[tM(e)]) {
                            case eR.H264_STREAM_TYPE:
                                return "video";
                            case eR.ADTS_STREAM_TYPE:
                                return "audio";
                            case eR.METADATA_STREAM_TYPE:
                                return "timed-metadata";
                            default:
                                return null
                        }
                    },
                    parsePesTime: function(e) {
                        if (!tR(e)) return null;
                        var t, i = 4 + tU(e);
                        if (i >= e.byteLength) return null;
                        var s = null;
                        return 192 & (t = e[i + 7]) && ((s = {}).pts = (14 & e[i + 9]) << 27 | (255 & e[i + 10]) << 20 | (254 & e[i + 11]) << 12 | (255 & e[i + 12]) << 5 | (254 & e[i + 13]) >>> 3, s.pts *= 4, s.pts += (6 & e[i + 13]) >>> 1, s.dts = s.pts, 64 & t && (s.dts = (14 & e[i + 14]) << 27 | (255 & e[i + 15]) << 20 | (254 & e[i + 16]) << 12 | (255 & e[i + 17]) << 5 | (254 & e[i + 18]) >>> 3, s.dts *= 4, s.dts += (6 & e[i + 18]) >>> 1)), s
                    },
                    videoPacketContainsKeyFrame: function(e) {
                        for (var t = 4 + tU(e), i = e.subarray(t), s = 0, r = 0, n = !1; r < i.byteLength - 3; r++)
                            if (1 === i[r + 2]) {
                                s = r + 5;
                                break
                            }
                        for (; s < i.byteLength;) switch (i[s]) {
                            case 0:
                                if (0 !== i[s - 1]) {
                                    s += 2;
                                    break
                                }
                                if (0 !== i[s - 2]) {
                                    s++;
                                    break
                                }
                                r + 3 !== s - 2 && "slice_layer_without_partitioning_rbsp_idr" === tB(31 & i[r + 3]) && (n = !0);
                                do s++; while (1 !== i[s] && s < i.length);
                                r = s - 2, s += 3;
                                break;
                            case 1:
                                if (0 !== i[s - 1] || 0 !== i[s - 2]) {
                                    s += 3;
                                    break
                                }
                                "slice_layer_without_partitioning_rbsp_idr" === tB(31 & i[r + 3]) && (n = !0), r = s - 2, s += 3;
                                break;
                            default:
                                s += 3
                        }
                        return i = i.subarray(r), s -= r, r = 0, i && i.byteLength > 3 && "slice_layer_without_partitioning_rbsp_idr" === tB(31 & i[r + 3]) && (n = !0), n
                    }
                }, tN.aac = e8;
                var tj = ey.ONE_SECOND_IN_TS,
                    tF = function(e, t) {
                        for (var i, s = 0, r = 188; r < e.byteLength;) {
                            if (71 === e[s] && 71 === e[r]) {
                                switch (i = e.subarray(s, r), tN.ts.parseType(i, t.pid)) {
                                    case "pat":
                                        t.pid = tN.ts.parsePat(i);
                                        break;
                                    case "pmt":
                                        var n = tN.ts.parsePmt(i);
                                        t.table = t.table || {}, Object.keys(n).forEach(function(e) {
                                            t.table[e] = n[e]
                                        })
                                }
                                s += 188, r += 188;
                                continue
                            }
                            s++, r++
                        }
                    },
                    t$ = function(e, t, i) {
                        for (var s, r, n, a, o = 0, l = 188, h = !1; l <= e.byteLength;) {
                            if (71 === e[o] && (71 === e[l] || l === e.byteLength)) {
                                if (s = e.subarray(o, l), "pes" === tN.ts.parseType(s, t.pid) && (r = tN.ts.parsePesType(s, t.table), n = tN.ts.parsePayloadUnitStartIndicator(s), "audio" === r && n && (a = tN.ts.parsePesTime(s)) && (a.type = "audio", i.audio.push(a), h = !0)), h) break;
                                o += 188, l += 188;
                                continue
                            }
                            o++, l++
                        }
                        for (o = (l = e.byteLength) - 188, h = !1; o >= 0;) {
                            if (71 === e[o] && (71 === e[l] || l === e.byteLength)) {
                                if (s = e.subarray(o, l), "pes" === tN.ts.parseType(s, t.pid) && (r = tN.ts.parsePesType(s, t.table), n = tN.ts.parsePayloadUnitStartIndicator(s), "audio" === r && n && (a = tN.ts.parsePesTime(s)) && (a.type = "audio", i.audio.push(a), h = !0)), h) break;
                                o -= 188, l -= 188;
                                continue
                            }
                            o--, l--
                        }
                    },
                    tq = function(e, t, i) {
                        for (var s, r, n, a, o, l, h, d = 0, u = 188, c = !1, p = {
                                data: [],
                                size: 0
                            }; u < e.byteLength;) {
                            if (71 === e[d] && 71 === e[u]) {
                                if (s = e.subarray(d, u), "pes" === tN.ts.parseType(s, t.pid) && (r = tN.ts.parsePesType(s, t.table), n = tN.ts.parsePayloadUnitStartIndicator(s), "video" === r && (n && !c && (a = tN.ts.parsePesTime(s)) && (a.type = "video", i.video.push(a), c = !0), !i.firstKeyFrame))) {
                                    if (n && 0 !== p.size) {
                                        for (o = new Uint8Array(p.size), l = 0; p.data.length;) h = p.data.shift(), o.set(h, l), l += h.byteLength;
                                        if (tN.ts.videoPacketContainsKeyFrame(o)) {
                                            var m = tN.ts.parsePesTime(o);
                                            m ? (i.firstKeyFrame = m, i.firstKeyFrame.type = "video") : console.warn("Failed to extract PTS/DTS from PES at first keyframe. This could be an unusual TS segment, or else mux.js did not parse your TS segment correctly. If you know your TS segments do contain PTS/DTS on keyframes please file a bug report! You can try ffprobe to double check for yourself.")
                                        }
                                        p.size = 0
                                    }
                                    p.data.push(s), p.size += s.byteLength
                                }
                                if (c && i.firstKeyFrame) break;
                                d += 188, u += 188;
                                continue
                            }
                            d++, u++
                        }
                        for (d = (u = e.byteLength) - 188, c = !1; d >= 0;) {
                            if (71 === e[d] && 71 === e[u]) {
                                if (s = e.subarray(d, u), "pes" === tN.ts.parseType(s, t.pid) && (r = tN.ts.parsePesType(s, t.table), n = tN.ts.parsePayloadUnitStartIndicator(s), "video" === r && n && (a = tN.ts.parsePesTime(s)) && (a.type = "video", i.video.push(a), c = !0)), c) break;
                                d -= 188, u -= 188;
                                continue
                            }
                            d--, u--
                        }
                    },
                    tH = function(e, t) {
                        if (e.audio && e.audio.length) {
                            var i = t;
                            (void 0 === i || isNaN(i)) && (i = e.audio[0].dts), e.audio.forEach(function(e) {
                                e.dts = eB(e.dts, i), e.pts = eB(e.pts, i), e.dtsTime = e.dts / tj, e.ptsTime = e.pts / tj
                            })
                        }
                        if (e.video && e.video.length) {
                            var s = t;
                            if ((void 0 === s || isNaN(s)) && (s = e.video[0].dts), e.video.forEach(function(e) {
                                    e.dts = eB(e.dts, s), e.pts = eB(e.pts, s), e.dtsTime = e.dts / tj, e.ptsTime = e.pts / tj
                                }), e.firstKeyFrame) {
                                var r = e.firstKeyFrame;
                                r.dts = eB(r.dts, s), r.pts = eB(r.pts, s), r.dtsTime = r.dts / tj, r.ptsTime = r.pts / tj
                            }
                        }
                    },
                    tV = function(e) {
                        for (var t, i = !1, s = 0, r = null, n = null, a = 0, o = 0; e.length - o >= 3;) {
                            switch (tN.aac.parseType(e, o)) {
                                case "timed-metadata":
                                    if (e.length - o < 10 || (a = tN.aac.parseId3TagSize(e, o)) > e.length) {
                                        i = !0;
                                        break
                                    }
                                    null === n && (t = e.subarray(o, o + a), n = tN.aac.parseAacTimestamp(t)), o += a;
                                    break;
                                case "audio":
                                    if (e.length - o < 7 || (a = tN.aac.parseAdtsSize(e, o)) > e.length) {
                                        i = !0;
                                        break
                                    }
                                    null === r && (t = e.subarray(o, o + a), r = tN.aac.parseSampleRate(t)), s++, o += a;
                                    break;
                                default:
                                    o++
                            }
                            if (i) return null
                        }
                        if (null === r || null === n) return null;
                        var l = tj / r;
                        return {
                            audio: [{
                                type: "audio",
                                dts: n,
                                pts: n
                            }, {
                                type: "audio",
                                dts: n + 1024 * s * l,
                                pts: n + 1024 * s * l
                            }]
                        }
                    },
                    tz = function(e) {
                        var t = {
                                pid: null,
                                table: null
                            },
                            i = {};
                        for (var s in tF(e, t), t.table)
                            if (t.table.hasOwnProperty(s)) switch (t.table[s]) {
                                case eR.H264_STREAM_TYPE:
                                    i.video = [], tq(e, t, i), 0 === i.video.length && delete i.video;
                                    break;
                                case eR.ADTS_STREAM_TYPE:
                                    i.audio = [], t$(e, t, i), 0 === i.audio.length && delete i.audio
                            }
                        return i
                    },
                    tW = function(e, t) {
                        var i;
                        return (i = tN.aac.isLikelyAacData(e) ? tV(e) : tz(e)) && (i.audio || i.video) ? (tH(i, t), i) : null
                    };
                let tG = function(e, t) {
                    t.on("data", function(t) {
                        let i = t.initSegment;
                        t.initSegment = {
                            data: i.buffer,
                            byteOffset: i.byteOffset,
                            byteLength: i.byteLength
                        };
                        let s = t.data;
                        t.data = s.buffer, e.postMessage({
                            action: "data",
                            segment: t,
                            byteOffset: s.byteOffset,
                            byteLength: s.byteLength
                        }, [t.data])
                    }), t.on("done", function(t) {
                        e.postMessage({
                            action: "done"
                        })
                    }), t.on("gopInfo", function(t) {
                        e.postMessage({
                            action: "gopInfo",
                            gopInfo: t
                        })
                    }), t.on("videoSegmentTimingInfo", function(t) {
                        let i = {
                            start: {
                                decode: ey.videoTsToSeconds(t.start.dts),
                                presentation: ey.videoTsToSeconds(t.start.pts)
                            },
                            end: {
                                decode: ey.videoTsToSeconds(t.end.dts),
                                presentation: ey.videoTsToSeconds(t.end.pts)
                            },
                            baseMediaDecodeTime: ey.videoTsToSeconds(t.baseMediaDecodeTime)
                        };
                        t.prependedContentDuration && (i.prependedContentDuration = ey.videoTsToSeconds(t.prependedContentDuration)), e.postMessage({
                            action: "videoSegmentTimingInfo",
                            videoSegmentTimingInfo: i
                        })
                    }), t.on("audioSegmentTimingInfo", function(t) {
                        let i = {
                            start: {
                                decode: ey.videoTsToSeconds(t.start.dts),
                                presentation: ey.videoTsToSeconds(t.start.pts)
                            },
                            end: {
                                decode: ey.videoTsToSeconds(t.end.dts),
                                presentation: ey.videoTsToSeconds(t.end.pts)
                            },
                            baseMediaDecodeTime: ey.videoTsToSeconds(t.baseMediaDecodeTime)
                        };
                        t.prependedContentDuration && (i.prependedContentDuration = ey.videoTsToSeconds(t.prependedContentDuration)), e.postMessage({
                            action: "audioSegmentTimingInfo",
                            audioSegmentTimingInfo: i
                        })
                    }), t.on("id3Frame", function(t) {
                        e.postMessage({
                            action: "id3Frame",
                            id3Frame: t
                        })
                    }), t.on("caption", function(t) {
                        e.postMessage({
                            action: "caption",
                            caption: t
                        })
                    }), t.on("trackinfo", function(t) {
                        e.postMessage({
                            action: "trackinfo",
                            trackInfo: t
                        })
                    }), t.on("audioTimingInfo", function(t) {
                        e.postMessage({
                            action: "audioTimingInfo",
                            audioTimingInfo: {
                                start: ey.videoTsToSeconds(t.start),
                                end: ey.videoTsToSeconds(t.end)
                            }
                        })
                    }), t.on("videoTimingInfo", function(t) {
                        e.postMessage({
                            action: "videoTimingInfo",
                            videoTimingInfo: {
                                start: ey.videoTsToSeconds(t.start),
                                end: ey.videoTsToSeconds(t.end)
                            }
                        })
                    }), t.on("log", function(t) {
                        e.postMessage({
                            action: "log",
                            log: t
                        })
                    })
                };
                class tK {
                    constructor(e, t) {
                        this.options = t || {}, this.self = e, this.init()
                    }
                    init() {
                        this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new td(this.options), tG(this.self, this.transmuxer)
                    }
                    pushMp4Captions(e) {
                        this.captionParser || (this.captionParser = new tE, this.captionParser.init());
                        let t = new Uint8Array(e.data, e.byteOffset, e.byteLength),
                            i = this.captionParser.parse(t, e.trackIds, e.timescales);
                        this.self.postMessage({
                            action: "mp4Captions",
                            captions: i && i.captions || [],
                            logs: i && i.logs || [],
                            data: t.buffer
                        }, [t.buffer])
                    }
                    probeMp4StartTime({
                        timescales: e,
                        data: t
                    }) {
                        let i = eh(e, t);
                        this.self.postMessage({
                            action: "probeMp4StartTime",
                            startTime: i,
                            data: t
                        }, [t.buffer])
                    }
                    probeMp4Tracks({
                        data: e
                    }) {
                        let t = tO(e);
                        this.self.postMessage({
                            action: "probeMp4Tracks",
                            tracks: t,
                            data: e
                        }, [e.buffer])
                    }
                    probeEmsgID3({
                        data: e,
                        offset: t
                    }) {
                        let i = function(e, t = 0) {
                            return tp(e, ["emsg"]).map(e => {
                                var i = tA(new Uint8Array(e)),
                                    s = tD(i.message_data);
                                return {
                                    cueTime: tL(i.presentation_time, i.timescale, i.presentation_time_delta, t),
                                    duration: tL(i.event_duration, i.timescale),
                                    frames: s
                                }
                            })
                        }(e, t);
                        this.self.postMessage({
                            action: "probeEmsgID3",
                            id3Frames: i,
                            emsgData: e
                        }, [e.buffer])
                    }
                    probeTs({
                        data: e,
                        baseStartTime: t
                    }) {
                        let i = tW(e, "number" != typeof t || isNaN(t) ? void 0 : t * ey.ONE_SECOND_IN_TS),
                            s = null;
                        i && ((s = {
                            hasVideo: i.video && 2 === i.video.length || !1,
                            hasAudio: i.audio && 2 === i.audio.length || !1
                        }).hasVideo && (s.videoStart = i.video[0].ptsTime), s.hasAudio && (s.audioStart = i.audio[0].ptsTime)), this.self.postMessage({
                            action: "probeTs",
                            result: s,
                            data: e
                        }, [e.buffer])
                    }
                    clearAllMp4Captions() {
                        this.captionParser && this.captionParser.clearAllCaptions()
                    }
                    clearParsedMp4Captions() {
                        this.captionParser && this.captionParser.clearParsedCaptions()
                    }
                    push(e) {
                        let t = new Uint8Array(e.data, e.byteOffset, e.byteLength);
                        this.transmuxer.push(t)
                    }
                    reset() {
                        this.transmuxer.reset()
                    }
                    setTimestampOffset(e) {
                        let t = e.timestampOffset || 0;
                        this.transmuxer.setBaseMediaDecodeTime(Math.round(ey.secondsToVideoTs(t)))
                    }
                    setAudioAppendStart(e) {
                        this.transmuxer.setAudioAppendStart(Math.ceil(ey.secondsToVideoTs(e.appendStart)))
                    }
                    setRemux(e) {
                        this.transmuxer.setRemux(e.remux)
                    }
                    flush(e) {
                        this.transmuxer.flush(), self.postMessage({
                            action: "done",
                            type: "transmuxed"
                        })
                    }
                    endTimeline() {
                        this.transmuxer.endTimeline(), self.postMessage({
                            action: "endedtimeline",
                            type: "transmuxed"
                        })
                    }
                    alignGopsWith(e) {
                        this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice())
                    }
                }
                self.onmessage = function(e) {
                    if ("init" === e.data.action && e.data.options) {
                        this.messageHandlers = new tK(self, e.data.options);
                        return
                    }
                    this.messageHandlers || (this.messageHandlers = new tK(self)), e.data && e.data.action && "init" !== e.data.action && this.messageHandlers[e.data.action] && this.messageHandlers[e.data.action](e.data)
                }
            })));
            let n4 = (e, t, i) => {
                    let {
                        type: s,
                        initSegment: r,
                        captions: n,
                        captionStreams: a,
                        metadata: o,
                        videoFrameDtsTime: l,
                        videoFramePtsTime: h
                    } = e.data.segment;
                    t.buffer.push({
                        captions: n,
                        captionStreams: a,
                        metadata: o
                    });
                    let d = e.data.segment.boxes || {
                            data: e.data.segment.data
                        },
                        u = {
                            type: s,
                            data: new Uint8Array(d.data, d.data.byteOffset, d.data.byteLength),
                            initSegment: new Uint8Array(r.data, r.byteOffset, r.byteLength)
                        };
                    void 0 !== l && (u.videoFrameDtsTime = l), void 0 !== h && (u.videoFramePtsTime = h), i(u)
                },
                n8 = ({
                    transmuxedData: e,
                    callback: t
                }) => {
                    e.buffer = [], t(e)
                },
                n5 = (e, t) => {
                    t.gopInfo = e.data.gopInfo
                },
                n3 = e => {
                    let {
                        transmuxer: t,
                        bytes: i,
                        audioAppendStart: s,
                        gopsToAlignWith: r,
                        remux: n,
                        onData: a,
                        onTrackInfo: o,
                        onAudioTimingInfo: l,
                        onVideoTimingInfo: h,
                        onVideoSegmentTimingInfo: d,
                        onAudioSegmentTimingInfo: u,
                        onId3: c,
                        onCaptions: p,
                        onDone: m,
                        onEndedTimeline: g,
                        onTransmuxerLog: f,
                        isEndOfTimeline: _
                    } = e, y = {
                        buffer: []
                    }, v = _;
                    if (t.onmessage = i => {
                            t.currentTransmux === e && ("data" === i.data.action && n4(i, y, a), "trackinfo" === i.data.action && o(i.data.trackInfo), "gopInfo" === i.data.action && n5(i, y), "audioTimingInfo" === i.data.action && l(i.data.audioTimingInfo), "videoTimingInfo" === i.data.action && h(i.data.videoTimingInfo), "videoSegmentTimingInfo" === i.data.action && d(i.data.videoSegmentTimingInfo), "audioSegmentTimingInfo" === i.data.action && u(i.data.audioSegmentTimingInfo), "id3Frame" === i.data.action && c([i.data.id3Frame], i.data.id3Frame.dispatchType), "caption" === i.data.action && p(i.data.caption), "endedtimeline" === i.data.action && (v = !1, g()), "log" === i.data.action && f(i.data.log), "transmuxed" !== i.data.type || v || (t.onmessage = null, n8({
                                transmuxedData: y,
                                callback: m
                            }), n6(t)))
                        }, s && t.postMessage({
                            action: "setAudioAppendStart",
                            appendStart: s
                        }), Array.isArray(r) && t.postMessage({
                            action: "alignGopsWith",
                            gopsToAlignWith: r
                        }), void 0 !== n && t.postMessage({
                            action: "setRemux",
                            remux: n
                        }), i.byteLength) {
                        let e = i instanceof ArrayBuffer ? i : i.buffer,
                            s = i instanceof ArrayBuffer ? 0 : i.byteOffset;
                        t.postMessage({
                            action: "push",
                            data: e,
                            byteOffset: s,
                            byteLength: i.byteLength
                        }, [e])
                    }
                    _ && t.postMessage({
                        action: "endTimeline"
                    }), t.postMessage({
                        action: "flush"
                    })
                },
                n6 = e => {
                    e.currentTransmux = null, e.transmuxQueue.length && (e.currentTransmux = e.transmuxQueue.shift(), "function" == typeof e.currentTransmux ? e.currentTransmux() : n3(e.currentTransmux))
                },
                n7 = (e, t) => {
                    e.postMessage({
                        action: t
                    }), n6(e)
                },
                n9 = (e, t) => {
                    if (!t.currentTransmux) {
                        t.currentTransmux = e, n7(t, e);
                        return
                    }
                    t.transmuxQueue.push(n7.bind(null, t, e))
                },
                ae = e => {
                    if (!e.transmuxer.currentTransmux) {
                        e.transmuxer.currentTransmux = e, n3(e);
                        return
                    }
                    e.transmuxer.transmuxQueue.push(e)
                };
            var at = {
                reset: e => {
                    n9("reset", e)
                },
                createTransmuxer: e => {
                    let t = new n2;
                    t.currentTransmux = null, t.transmuxQueue = [];
                    let i = t.terminate;
                    return t.terminate = () => (t.currentTransmux = null, t.transmuxQueue.length = 0, i.call(t)), t.postMessage({
                        action: "init",
                        options: e
                    }), t
                }
            };
            let ai = function(e) {
                    let t = e.transmuxer,
                        i = e.endAction || e.action,
                        s = e.callback,
                        r = (0, b.Z)({}, e, {
                            endAction: null,
                            transmuxer: null,
                            callback: null
                        }),
                        n = r => {
                            r.data.action === i && (t.removeEventListener("message", n), r.data.data && (r.data.data = new Uint8Array(r.data.data, e.byteOffset || 0, e.byteLength || r.data.data.byteLength), e.data && (e.data = r.data.data)), s(r.data))
                        };
                    if (t.addEventListener("message", n), e.data) {
                        let i = e.data instanceof ArrayBuffer;
                        r.byteOffset = i ? 0 : e.data.byteOffset, r.byteLength = e.data.byteLength;
                        let s = [i ? e.data : e.data.buffer];
                        t.postMessage(r, s)
                    } else t.postMessage(r)
                },
                as = {
                    FAILURE: 2,
                    TIMEOUT: -101,
                    ABORTED: -102
                },
                ar = e => {
                    e.forEach(e => {
                        e.abort()
                    })
                },
                an = e => ({
                    bandwidth: e.bandwidth,
                    bytesReceived: e.bytesReceived || 0,
                    roundTripTime: e.roundTripTime || 0
                }),
                aa = e => {
                    let t = e.target,
                        i = {
                            bandwidth: 1 / 0,
                            bytesReceived: 0,
                            roundTripTime: Date.now() - t.requestTime || 0
                        };
                    return i.bytesReceived = e.loaded, i.bandwidth = Math.floor(i.bytesReceived / i.roundTripTime * 8e3), i
                },
                ao = (e, t) => t.timedout ? {
                    status: t.status,
                    message: "HLS request timed-out at URL: " + t.uri,
                    code: as.TIMEOUT,
                    xhr: t
                } : t.aborted ? {
                    status: t.status,
                    message: "HLS request aborted at URL: " + t.uri,
                    code: as.ABORTED,
                    xhr: t
                } : e ? {
                    status: t.status,
                    message: "HLS request errored at URL: " + t.uri,
                    code: as.FAILURE,
                    xhr: t
                } : "arraybuffer" === t.responseType && 0 === t.response.byteLength ? {
                    status: t.status,
                    message: "Empty HLS response at URL: " + t.uri,
                    code: as.FAILURE,
                    xhr: t
                } : null,
                al = (e, t, i) => (s, r) => {
                    let n = r.response,
                        a = ao(s, r);
                    if (a) return i(a, e);
                    if (16 !== n.byteLength) return i({
                        status: r.status,
                        message: "Invalid HLS key at URL: " + r.uri,
                        code: as.FAILURE,
                        xhr: r
                    }, e);
                    let o = new DataView(n),
                        l = new Uint32Array([o.getUint32(0), o.getUint32(4), o.getUint32(8), o.getUint32(12)]);
                    for (let e = 0; e < t.length; e++) t[e].bytes = l;
                    return i(null, e)
                },
                ah = (e, t) => {
                    let i = (0, L.Xm)(e.map.bytes);
                    if ("mp4" !== i) {
                        let s = e.map.resolvedUri || e.map.uri,
                            r = i || "unknown";
                        return t({
                            internal: !0,
                            message: `Found unsupported ${r} container for initialization segment at URL: ${s}`,
                            code: as.FAILURE,
                            metadata: {
                                errorType: r_.Error.UnsupportedMediaInitialization,
                                mediaType: r
                            }
                        })
                    }
                    ai({
                        action: "probeMp4Tracks",
                        data: e.map.bytes,
                        transmuxer: e.transmuxer,
                        callback: ({
                            tracks: i,
                            data: s
                        }) => (e.map.bytes = s, i.forEach(function(t) {
                            e.map.tracks = e.map.tracks || {}, !e.map.tracks[t.type] && (e.map.tracks[t.type] = t, "number" == typeof t.id && t.timescale && (e.map.timescales = e.map.timescales || {}, e.map.timescales[t.id] = t.timescale))
                        }), t(null))
                    })
                },
                ad = ({
                    segment: e,
                    finishProcessingFn: t
                }) => (i, s) => {
                    let r = ao(i, s);
                    if (r) return t(r, e);
                    let n = new Uint8Array(s.response);
                    if (e.map.key) return e.map.encryptedBytes = n, t(null, e);
                    e.map.bytes = n, ah(e, function(i) {
                        if (i) return i.xhr = s, i.status = s.status, t(i, e);
                        t(null, e)
                    })
                },
                au = ({
                    segment: e,
                    finishProcessingFn: t,
                    responseType: i
                }) => (s, r) => {
                    let n = ao(s, r);
                    if (n) return t(n, e);
                    let a = "arraybuffer" !== i && r.responseText ? nY(r.responseText.substring(e.lastReachedChar || 0)) : r.response;
                    return e.stats = an(r), e.key ? e.encryptedBytes = new Uint8Array(a) : e.bytes = new Uint8Array(a), t(null, e)
                },
                ac = ({
                    segment: e,
                    bytes: t,
                    trackInfoFn: i,
                    timingInfoFn: s,
                    videoSegmentTimingInfoFn: r,
                    audioSegmentTimingInfoFn: n,
                    id3Fn: a,
                    captionsFn: o,
                    isEndOfTimeline: l,
                    endedTimelineFn: h,
                    dataFn: d,
                    doneFn: u,
                    onTransmuxerLog: c
                }) => {
                    let p = e.map && e.map.tracks || {},
                        m = !!(p.audio && p.video),
                        g = s.bind(null, e, "audio", "start"),
                        f = s.bind(null, e, "audio", "end"),
                        _ = s.bind(null, e, "video", "start"),
                        y = s.bind(null, e, "video", "end"),
                        v = () => ae({
                            bytes: t,
                            transmuxer: e.transmuxer,
                            audioAppendStart: e.audioAppendStart,
                            gopsToAlignWith: e.gopsToAlignWith,
                            remux: m,
                            onData: t => {
                                t.type = "combined" === t.type ? "video" : t.type, d(e, t)
                            },
                            onTrackInfo: t => {
                                i && (m && (t.isMuxed = !0), i(e, t))
                            },
                            onAudioTimingInfo: e => {
                                g && void 0 !== e.start && (g(e.start), g = null), f && void 0 !== e.end && f(e.end)
                            },
                            onVideoTimingInfo: e => {
                                _ && void 0 !== e.start && (_(e.start), _ = null), y && void 0 !== e.end && y(e.end)
                            },
                            onVideoSegmentTimingInfo: e => {
                                r(e)
                            },
                            onAudioSegmentTimingInfo: e => {
                                n(e)
                            },
                            onId3: (t, i) => {
                                a(e, t, i)
                            },
                            onCaptions: t => {
                                o(e, [t])
                            },
                            isEndOfTimeline: l,
                            onEndedTimeline: () => {
                                h()
                            },
                            onTransmuxerLog: c,
                            onDone: t => {
                                u && (t.type = "combined" === t.type ? "video" : t.type, u(null, e, t))
                            }
                        });
                    ai({
                        action: "probeTs",
                        transmuxer: e.transmuxer,
                        data: t,
                        baseStartTime: e.baseStartTime,
                        callback: s => {
                            e.bytes = t = s.data;
                            let r = s.result;
                            r && (i(e, {
                                hasAudio: r.hasAudio,
                                hasVideo: r.hasVideo,
                                isMuxed: m
                            }), i = null), v()
                        }
                    })
                },
                ap = ({
                    segment: e,
                    bytes: t,
                    trackInfoFn: i,
                    timingInfoFn: s,
                    videoSegmentTimingInfoFn: r,
                    audioSegmentTimingInfoFn: n,
                    id3Fn: a,
                    captionsFn: o,
                    isEndOfTimeline: l,
                    endedTimelineFn: h,
                    dataFn: d,
                    doneFn: u,
                    onTransmuxerLog: c
                }) => {
                    let p = new Uint8Array(t);
                    if ((0, L.cz)(p)) {
                        e.isFmp4 = !0;
                        let {
                            tracks: r
                        } = e.map, n = {
                            isFmp4: !0,
                            hasVideo: !!r.video,
                            hasAudio: !!r.audio
                        };
                        r.audio && r.audio.codec && "enca" !== r.audio.codec && (n.audioCodec = r.audio.codec), r.video && r.video.codec && "encv" !== r.video.codec && (n.videoCodec = r.video.codec), r.video && r.audio && (n.isMuxed = !0), i(e, n);
                        let l = (t, i) => {
                            d(e, {
                                data: p,
                                type: n.hasAudio && !n.isMuxed ? "audio" : "video"
                            }), i && i.length && a(e, i), t && t.length && o(e, t), u(null, e, {})
                        };
                        ai({
                            action: "probeMp4StartTime",
                            timescales: e.map.timescales,
                            data: p,
                            transmuxer: e.transmuxer,
                            callback: ({
                                data: i,
                                startTime: a
                            }) => {
                                t = i.buffer, e.bytes = p = i, n.hasAudio && !n.isMuxed && s(e, "audio", "start", a), n.hasVideo && s(e, "video", "start", a), ai({
                                    action: "probeEmsgID3",
                                    data: p,
                                    transmuxer: e.transmuxer,
                                    offset: a,
                                    callback: ({
                                        emsgData: i,
                                        id3Frames: s
                                    }) => {
                                        if (t = i.buffer, e.bytes = p = i, !r.video || !i.byteLength || !e.transmuxer) {
                                            l(void 0, s);
                                            return
                                        }
                                        ai({
                                            action: "pushMp4Captions",
                                            endAction: "mp4Captions",
                                            transmuxer: e.transmuxer,
                                            data: p,
                                            timescales: e.map.timescales,
                                            trackIds: [r.video.id],
                                            callback: i => {
                                                t = i.data.buffer, e.bytes = p = i.data, i.logs.forEach(function(e) {
                                                    c(rw(e, {
                                                        stream: "mp4CaptionParser"
                                                    }))
                                                }), l(i.captions, s)
                                            }
                                        })
                                    }
                                })
                            }
                        });
                        return
                    }
                    if (!e.transmuxer) {
                        u(null, e, {});
                        return
                    }
                    if (void 0 === e.container && (e.container = (0, L.Xm)(p)), "ts" !== e.container && "aac" !== e.container) {
                        i(e, {
                            hasAudio: !1,
                            hasVideo: !1
                        }), u(null, e, {});
                        return
                    }
                    ac({
                        segment: e,
                        bytes: t,
                        trackInfoFn: i,
                        timingInfoFn: s,
                        videoSegmentTimingInfoFn: r,
                        audioSegmentTimingInfoFn: n,
                        id3Fn: a,
                        captionsFn: o,
                        isEndOfTimeline: l,
                        endedTimelineFn: h,
                        dataFn: d,
                        doneFn: u,
                        onTransmuxerLog: c
                    })
                },
                am = function({
                    id: e,
                    key: t,
                    encryptedBytes: i,
                    decryptionWorker: s
                }, r) {
                    let n;
                    let a = t => {
                        if (t.data.source === e) {
                            s.removeEventListener("message", a);
                            let e = t.data.decrypted;
                            r(new Uint8Array(e.bytes, e.byteOffset, e.byteLength))
                        }
                    };
                    s.addEventListener("message", a), n = t.bytes.slice ? t.bytes.slice() : new Uint32Array(Array.prototype.slice.call(t.bytes)), s.postMessage(nC({
                        source: e,
                        encrypted: i,
                        key: n,
                        iv: t.iv
                    }), [i.buffer, n.buffer])
                },
                ag = ({
                    decryptionWorker: e,
                    segment: t,
                    trackInfoFn: i,
                    timingInfoFn: s,
                    videoSegmentTimingInfoFn: r,
                    audioSegmentTimingInfoFn: n,
                    id3Fn: a,
                    captionsFn: o,
                    isEndOfTimeline: l,
                    endedTimelineFn: h,
                    dataFn: d,
                    doneFn: u,
                    onTransmuxerLog: c
                }) => {
                    am({
                        id: t.requestId,
                        key: t.key,
                        encryptedBytes: t.encryptedBytes,
                        decryptionWorker: e
                    }, e => {
                        t.bytes = e, ap({
                            segment: t,
                            bytes: t.bytes,
                            trackInfoFn: i,
                            timingInfoFn: s,
                            videoSegmentTimingInfoFn: r,
                            audioSegmentTimingInfoFn: n,
                            id3Fn: a,
                            captionsFn: o,
                            isEndOfTimeline: l,
                            endedTimelineFn: h,
                            dataFn: d,
                            doneFn: u,
                            onTransmuxerLog: c
                        })
                    })
                },
                af = ({
                    activeXhrs: e,
                    decryptionWorker: t,
                    trackInfoFn: i,
                    timingInfoFn: s,
                    videoSegmentTimingInfoFn: r,
                    audioSegmentTimingInfoFn: n,
                    id3Fn: a,
                    captionsFn: o,
                    isEndOfTimeline: l,
                    endedTimelineFn: h,
                    dataFn: d,
                    doneFn: u,
                    onTransmuxerLog: c
                }) => {
                    let p = 0,
                        m = !1;
                    return (g, f) => {
                        if (!m) {
                            if (g) return m = !0, ar(e), u(g, f);
                            if ((p += 1) === e.length) {
                                let p = function() {
                                    if (f.encryptedBytes) return ag({
                                        decryptionWorker: t,
                                        segment: f,
                                        trackInfoFn: i,
                                        timingInfoFn: s,
                                        videoSegmentTimingInfoFn: r,
                                        audioSegmentTimingInfoFn: n,
                                        id3Fn: a,
                                        captionsFn: o,
                                        isEndOfTimeline: l,
                                        endedTimelineFn: h,
                                        dataFn: d,
                                        doneFn: u,
                                        onTransmuxerLog: c
                                    });
                                    ap({
                                        segment: f,
                                        bytes: f.bytes,
                                        trackInfoFn: i,
                                        timingInfoFn: s,
                                        videoSegmentTimingInfoFn: r,
                                        audioSegmentTimingInfoFn: n,
                                        id3Fn: a,
                                        captionsFn: o,
                                        isEndOfTimeline: l,
                                        endedTimelineFn: h,
                                        dataFn: d,
                                        doneFn: u,
                                        onTransmuxerLog: c
                                    })
                                };
                                if (f.endOfAllRequests = Date.now(), f.map && f.map.encryptedBytes && !f.map.bytes) return am({
                                    decryptionWorker: t,
                                    id: f.requestId + "-init",
                                    encryptedBytes: f.map.encryptedBytes,
                                    key: f.map.key
                                }, t => {
                                    f.map.bytes = t, ah(f, t => {
                                        if (t) return ar(e), u(t, f);
                                        p()
                                    })
                                });
                                p()
                            }
                        }
                    }
                },
                a_ = ({
                    loadendState: e,
                    abortFn: t
                }) => i => {
                    i.target.aborted && t && !e.calledAbortFn && (t(), e.calledAbortFn = !0)
                },
                ay = ({
                    segment: e,
                    progressFn: t,
                    trackInfoFn: i,
                    timingInfoFn: s,
                    videoSegmentTimingInfoFn: r,
                    audioSegmentTimingInfoFn: n,
                    id3Fn: a,
                    captionsFn: o,
                    isEndOfTimeline: l,
                    endedTimelineFn: h,
                    dataFn: d
                }) => i => {
                    if (!i.target.aborted) return e.stats = rw(e.stats, aa(i)), !e.stats.firstBytesReceivedAt && e.stats.bytesReceived && (e.stats.firstBytesReceivedAt = Date.now()), t(i, e)
                },
                av = ({
                    xhr: e,
                    xhrOptions: t,
                    decryptionWorker: i,
                    segment: s,
                    abortFn: r,
                    progressFn: n,
                    trackInfoFn: a,
                    timingInfoFn: o,
                    videoSegmentTimingInfoFn: l,
                    audioSegmentTimingInfoFn: h,
                    id3Fn: d,
                    captionsFn: u,
                    isEndOfTimeline: c,
                    endedTimelineFn: p,
                    dataFn: m,
                    doneFn: g,
                    onTransmuxerLog: f
                }) => {
                    let _ = [],
                        y = af({
                            activeXhrs: _,
                            decryptionWorker: i,
                            trackInfoFn: a,
                            timingInfoFn: o,
                            videoSegmentTimingInfoFn: l,
                            audioSegmentTimingInfoFn: h,
                            id3Fn: d,
                            captionsFn: u,
                            isEndOfTimeline: c,
                            endedTimelineFn: p,
                            dataFn: m,
                            doneFn: g,
                            onTransmuxerLog: f
                        });
                    if (s.key && !s.key.bytes) {
                        let i = [s.key];
                        s.map && !s.map.bytes && s.map.key && s.map.key.resolvedUri === s.key.resolvedUri && i.push(s.map.key);
                        let r = e(rw(t, {
                            uri: s.key.resolvedUri,
                            responseType: "arraybuffer",
                            requestType: "segment-key"
                        }), al(s, i, y));
                        _.push(r)
                    }
                    if (s.map && !s.map.bytes) {
                        if (s.map.key && (!s.key || s.key.resolvedUri !== s.map.key.resolvedUri)) {
                            let i = e(rw(t, {
                                uri: s.map.key.resolvedUri,
                                responseType: "arraybuffer",
                                requestType: "segment-key"
                            }), al(s, [s.map.key], y));
                            _.push(i)
                        }
                        let i = e(rw(t, {
                            uri: s.map.resolvedUri,
                            responseType: "arraybuffer",
                            headers: nb(s.map),
                            requestType: "segment-media-initialization"
                        }), ad({
                            segment: s,
                            finishProcessingFn: y
                        }));
                        _.push(i)
                    }
                    let v = rw(t, {
                            uri: s.part && s.part.resolvedUri || s.resolvedUri,
                            responseType: "arraybuffer",
                            headers: nb(s),
                            requestType: "segment"
                        }),
                        T = au({
                            segment: s,
                            finishProcessingFn: y,
                            responseType: v.responseType
                        }),
                        b = e(v, T);
                    b.addEventListener("progress", ay({
                        segment: s,
                        progressFn: n,
                        trackInfoFn: a,
                        timingInfoFn: o,
                        videoSegmentTimingInfoFn: l,
                        audioSegmentTimingInfoFn: h,
                        id3Fn: d,
                        captionsFn: u,
                        isEndOfTimeline: c,
                        endedTimelineFn: p,
                        dataFn: m
                    })), _.push(b);
                    let S = {};
                    return _.forEach(e => {
                        e.addEventListener("loadend", a_({
                            loadendState: S,
                            abortFn: r
                        }))
                    }), () => ar(_)
                },
                aT = rE("CodecUtils"),
                ab = function(e) {
                    let t = e.attributes || {};
                    if (t.CODECS) return (0, C.kS)(t.CODECS)
                },
                aS = (e, t) => {
                    let i = t.attributes || {};
                    return e && e.mediaGroups && e.mediaGroups.AUDIO && i.AUDIO && e.mediaGroups.AUDIO[i.AUDIO]
                },
                ak = (e, t) => {
                    if (!aS(e, t)) return !0;
                    let i = t.attributes || {},
                        s = e.mediaGroups.AUDIO[i.AUDIO];
                    for (let e in s)
                        if (!s[e].uri && !s[e].playlists) return !0;
                    return !1
                },
                aC = function(e) {
                    let t = {};
                    return e.forEach(({
                        mediaType: e,
                        type: i,
                        details: s
                    }) => {
                        t[e] = t[e] || [], t[e].push((0, C.ws)(`${i}${s}`))
                    }), Object.keys(t).forEach(function(e) {
                        if (t[e].length > 1) {
                            aT(`multiple ${e} codecs found as attributes: ${t[e].join(", ")}. Setting playlist codecs to null so that we wait for mux.js to probe segments for real codecs.`), t[e] = null;
                            return
                        }
                        t[e] = t[e][0]
                    }), t
                },
                aE = function(e) {
                    let t = 0;
                    return e.audio && t++, e.video && t++, t
                },
                aw = function(e, t) {
                    let i = t.attributes || {},
                        s = aC(ab(t) || []);
                    if (aS(e, t) && !s.audio && !ak(e, t)) {
                        let t = aC((0, C.Jg)(e, i.AUDIO) || []);
                        t.audio && (s.audio = t.audio)
                    }
                    return s
                },
                ax = rE("PlaylistSelector"),
                aI = function(e) {
                    if (!e || !e.playlist) return;
                    let t = e.playlist;
                    return JSON.stringify({
                        id: t.id,
                        bandwidth: e.bandwidth,
                        width: e.width,
                        height: e.height,
                        codecs: t.attributes && t.attributes.CODECS || ""
                    })
                },
                aP = function(e, t) {
                    if (!e) return "";
                    let i = d().getComputedStyle(e);
                    return i ? i[t] : ""
                },
                aA = function(e, t) {
                    let i = e.slice();
                    e.sort(function(e, s) {
                        let r = t(e, s);
                        return 0 === r ? i.indexOf(e) - i.indexOf(s) : r
                    })
                },
                aL = function(e, t) {
                    let i, s;
                    return e.attributes.BANDWIDTH && (i = e.attributes.BANDWIDTH), i = i || d().Number.MAX_VALUE, t.attributes.BANDWIDTH && (s = t.attributes.BANDWIDTH), i - (s = s || d().Number.MAX_VALUE)
                },
                aD = function(e, t, i, s, r, n) {
                    let a, o, l, h;
                    if (!e) return;
                    let u = {
                            bandwidth: t,
                            width: i,
                            height: s,
                            limitRenditionByPlayerDimensions: r
                        },
                        c = e.playlists;
                    r5.isAudioOnly(e) && (c = n.getAudioTrackPlaylists_(), u.audioOnly = !0);
                    let p = c.map(e => {
                        let t = e.attributes && e.attributes.RESOLUTION && e.attributes.RESOLUTION.width,
                            i = e.attributes && e.attributes.RESOLUTION && e.attributes.RESOLUTION.height;
                        return {
                            bandwidth: e.attributes && e.attributes.BANDWIDTH || d().Number.MAX_VALUE,
                            width: t,
                            height: i,
                            playlist: e
                        }
                    });
                    aA(p, (e, t) => e.bandwidth - t.bandwidth);
                    let m = (p = p.filter(e => !r5.isIncompatible(e.playlist))).filter(e => r5.isEnabled(e.playlist));
                    m.length || (m = p.filter(e => !r5.isDisabled(e.playlist)));
                    let g = m.filter(e => e.bandwidth * nQ.BANDWIDTH_VARIANCE < t),
                        f = g[g.length - 1],
                        _ = g.filter(e => e.bandwidth === f.bandwidth)[0];
                    if (!1 === r) {
                        let e = _ || m[0] || p[0];
                        if (e && e.playlist) {
                            let t = "sortedPlaylistReps";
                            return _ && (t = "bandwidthBestRep"), m[0] && (t = "enabledPlaylistReps"), ax(`choosing ${aI(e)} using ${t} with options`, u), e.playlist
                        }
                        return ax("could not choose a playlist with options", u), null
                    }
                    let y = g.filter(e => e.width && e.height);
                    aA(y, (e, t) => e.width - t.width);
                    let v = y.filter(e => e.width === i && e.height === s);
                    f = v[v.length - 1];
                    let T = v.filter(e => e.bandwidth === f.bandwidth)[0];
                    if (T || (f = (o = (a = y.filter(e => e.width > i || e.height > s)).filter(e => e.width === a[0].width && e.height === a[0].height))[o.length - 1], l = o.filter(e => e.bandwidth === f.bandwidth)[0]), n.leastPixelDiffSelector) {
                        let e = y.map(e => (e.pixelDiff = Math.abs(e.width - i) + Math.abs(e.height - s), e));
                        aA(e, (e, t) => e.pixelDiff === t.pixelDiff ? t.bandwidth - e.bandwidth : e.pixelDiff - t.pixelDiff), h = e[0]
                    }
                    let b = h || l || T || _ || m[0] || p[0];
                    if (b && b.playlist) {
                        let e = "sortedPlaylistReps";
                        return h ? e = "leastPixelDiffRep" : l ? e = "resolutionPlusOneRep" : T ? e = "resolutionBestRep" : _ ? e = "bandwidthBestRep" : m[0] && (e = "enabledPlaylistReps"), ax(`choosing ${aI(b)} using ${e} with options`, u), b.playlist
                    }
                    return ax("could not choose a playlist with options", u), null
                },
                aO = function() {
                    let e = this.useDevicePixelRatio && d().devicePixelRatio || 1;
                    return isNaN(this.customPixelRatio) || (e = this.customPixelRatio), aD(this.playlists.main, this.systemBandwidth, parseInt(aP(this.tech_.el(), "width"), 10) * e, parseInt(aP(this.tech_.el(), "height"), 10) * e, this.limitRenditionByPlayerDimensions, this.playlistController_)
                },
                aM = function(e) {
                    let {
                        main: t,
                        currentTime: i,
                        bandwidth: s,
                        duration: r,
                        segmentDuration: n,
                        timeUntilRebuffer: a,
                        currentTimeline: o,
                        syncController: l
                    } = e, h = t.playlists.filter(e => !r5.isIncompatible(e)), d = h.filter(r5.isEnabled);
                    d.length || (d = h.filter(e => !r5.isDisabled(e)));
                    let u = d.filter(r5.hasAttribute.bind(null, "BANDWIDTH")).map(e => {
                            let t = l.getSyncPoint(e, r, o, i),
                                h = r5.estimateSegmentRequestTime(n, s, e);
                            return {
                                playlist: e,
                                rebufferingImpact: h * (t ? 1 : 2) - a
                            }
                        }),
                        c = u.filter(e => e.rebufferingImpact <= 0);
                    return (aA(c, (e, t) => aL(t.playlist, e.playlist)), c.length) ? c[0] : (aA(u, (e, t) => e.rebufferingImpact - t.rebufferingImpact), u[0] || null)
                },
                aR = e => {
                    let t, i = 0;
                    return e.bytes && (t = new Uint8Array(e.bytes), e.segments.forEach(e => {
                        t.set(e, i), i += e.byteLength
                    })), t
                };

            function aU(e) {
                try {
                    return new URL(e).pathname.split("/").slice(-2).join("/")
                } catch (e) {
                    return ""
                }
            }
            let aB = function(e, t, i) {
                    if (!e[i]) {
                        t.trigger({
                            type: "usage",
                            name: "vhs-608"
                        });
                        let s = i;
                        /^cc708_/.test(i) && (s = "SERVICE" + i.split("_")[1]);
                        let r = t.textTracks().getTrackById(s);
                        if (r) e[i] = r;
                        else {
                            let r = t.options_.vhs && t.options_.vhs.captionServices || {},
                                n = i,
                                a = i,
                                o = !1,
                                l = r[s];
                            l && (n = l.label, a = l.language, o = l.default), e[i] = t.addRemoteTextTrack({
                                kind: "captions",
                                id: s,
                                default: o,
                                label: n,
                                language: a
                            }, !1).track
                        }
                    }
                },
                aN = function({
                    inbandTextTracks: e,
                    captionArray: t,
                    timestampOffset: i
                }) {
                    if (!t) return;
                    let s = d().WebKitDataCue || d().VTTCue;
                    t.forEach(t => {
                        let r = t.stream;
                        t.content ? t.content.forEach(n => {
                            let a = new s(t.startTime + i, t.endTime + i, n.text);
                            a.line = n.line, a.align = "left", a.position = n.position, a.positionAlign = "line-left", e[r].addCue(a)
                        }) : e[r].addCue(new s(t.startTime + i, t.endTime + i, t.text))
                    })
                },
                aj = function(e) {
                    Object.defineProperties(e.frame, {
                        id: {
                            get: () => (r_.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), e.value.key)
                        },
                        value: {
                            get: () => (r_.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), e.value.data)
                        },
                        privateData: {
                            get: () => (r_.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), e.value.data)
                        }
                    })
                },
                aF = ({
                    inbandTextTracks: e,
                    metadataArray: t,
                    timestampOffset: i,
                    videoDuration: s
                }) => {
                    if (!t) return;
                    let r = d().WebKitDataCue || d().VTTCue,
                        n = e.metadataTrack_;
                    if (!n || (t.forEach(e => {
                            let t = e.cueTime + i;
                            !("number" != typeof t || d().isNaN(t)) && !(t < 0) && t < 1 / 0 && e.frames && e.frames.length && e.frames.forEach(e => {
                                let i = new r(t, t, e.value || e.url || e.data || "");
                                i.frame = e, i.value = e, aj(i), n.addCue(i)
                            })
                        }), !n.cues || !n.cues.length)) return;
                    let a = n.cues,
                        o = [];
                    for (let e = 0; e < a.length; e++) a[e] && o.push(a[e]);
                    let l = o.reduce((e, t) => {
                            let i = e[t.startTime] || [];
                            return i.push(t), e[t.startTime] = i, e
                        }, {}),
                        h = Object.keys(l).sort((e, t) => Number(e) - Number(t));
                    h.forEach((e, t) => {
                        let i = l[e],
                            r = isFinite(s) ? s : e,
                            n = Number(h[t + 1]) || r;
                        i.forEach(e => {
                            e.endTime = n
                        })
                    })
                },
                a$ = {
                    id: "ID",
                    class: "CLASS",
                    startDate: "START-DATE",
                    duration: "DURATION",
                    endDate: "END-DATE",
                    endOnNext: "END-ON-NEXT",
                    plannedDuration: "PLANNED-DURATION",
                    scte35Out: "SCTE35-OUT",
                    scte35In: "SCTE35-IN"
                },
                aq = new Set(["id", "class", "startDate", "duration", "endDate", "endOnNext", "startTime", "endTime", "processDateRange"]),
                aH = ({
                    inbandTextTracks: e,
                    dateRanges: t
                }) => {
                    let i = e.metadataTrack_;
                    if (!i) return;
                    let s = d().WebKitDataCue || d().VTTCue;
                    t.forEach(e => {
                        for (let t of Object.keys(e)) {
                            if (aq.has(t)) continue;
                            let r = new s(e.startTime, e.endTime, "");
                            r.id = e.id, r.type = "com.apple.quicktime.HLS", r.value = {
                                key: a$[t],
                                data: e[t]
                            }, ("scte35Out" === t || "scte35In" === t) && (r.value.data = new Uint8Array(r.value.data.match(/[\da-f]{2}/gi)).buffer), i.addCue(r)
                        }
                        e.processDateRange()
                    })
                },
                aV = (e, t, i) => {
                    !e.metadataTrack_ && (e.metadataTrack_ = i.addRemoteTextTrack({
                        kind: "metadata",
                        label: "Timed Metadata"
                    }, !1).track, r_.browser.IS_ANY_SAFARI || (e.metadataTrack_.inBandMetadataTrackDispatchType = t))
                },
                az = function(e, t, i) {
                    let s, r;
                    if (i && i.cues)
                        for (s = i.cues.length; s--;)(r = i.cues[s]).startTime >= e && r.endTime <= t && i.removeCue(r)
                },
                aW = function(e) {
                    let t = e.cues;
                    if (!t) return;
                    let i = {};
                    for (let s = t.length - 1; s >= 0; s--) {
                        let r = t[s],
                            n = `${r.startTime}-${r.endTime}-${r.text}`;
                        i[n] ? e.removeCue(r) : i[n] = r
                    }
                },
                aG = (e, t, i) => {
                    let s;
                    if (null == t || !e.length) return [];
                    let r = Math.ceil((t - i + 3) * D.ONE_SECOND_IN_TS);
                    for (s = 0; s < e.length && !(e[s].pts > r); s++);
                    return e.slice(s)
                },
                aK = (e, t, i) => {
                    if (!t.length) return e;
                    if (i) return t.slice();
                    let s = t[0].pts,
                        r = 0;
                    for (; r < e.length && !(e[r].pts >= s); r++);
                    return e.slice(0, r).concat(t)
                },
                aQ = (e, t, i, s) => {
                    let r = Math.ceil((t - s) * D.ONE_SECOND_IN_TS),
                        n = Math.ceil((i - s) * D.ONE_SECOND_IN_TS),
                        a = e.slice(),
                        o = e.length;
                    for (; o-- && !(e[o].pts <= n););
                    if (-1 === o) return a;
                    let l = o + 1;
                    for (; l-- && !(e[l].pts <= r););
                    return l = Math.max(l, 0), a.splice(l, o - l + 1), a
                },
                aY = function(e, t) {
                    if (!e && !t || !e && t || e && !t) return !1;
                    if (e === t) return !0;
                    let i = Object.keys(e).sort(),
                        s = Object.keys(t).sort();
                    if (i.length !== s.length) return !1;
                    for (let r = 0; r < i.length; r++) {
                        let n = i[r];
                        if (n !== s[r] || e[n] !== t[n]) return !1
                    }
                    return !0
                },
                aX = function(e, t, i) {
                    t = t || [];
                    let s = [],
                        r = 0;
                    for (let n = 0; n < t.length; n++) {
                        let a = t[n];
                        if (e === a.timeline && (s.push(n), (r += a.duration) > i)) return n
                    }
                    return 0 === s.length ? 0 : s[s.length - 1]
                },
                aJ = e => "number" == typeof e && isFinite(e),
                aZ = 1 / 60,
                a0 = (e, t, i) => "main" === e && t && i ? i.hasAudio || i.hasVideo ? t.hasVideo && !i.hasVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !t.hasVideo && i.hasVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null : "Neither audio nor video found in segment." : null,
                a1 = (e, t, i) => {
                    let s = t - nQ.BACK_BUFFER_LENGTH;
                    return e.length && (s = Math.max(s, e.start(0))), Math.min(t - i, s)
                },
                a2 = e => {
                    let {
                        startOfSegment: t,
                        duration: i,
                        segment: s,
                        part: r,
                        playlist: {
                            mediaSequence: n,
                            id: a,
                            segments: o = []
                        },
                        mediaIndex: l,
                        partIndex: h,
                        timeline: d
                    } = e, u = o.length - 1, c = "mediaIndex/partIndex increment";
                    e.getMediaInfoForTime ? c = `getMediaInfoForTime (${e.getMediaInfoForTime})` : e.isSyncRequest && (c = "getSyncSegmentCandidate (isSyncRequest)"), e.independent && (c += ` with independent ${e.independent}`);
                    let p = "number" == typeof h,
                        m = e.segment.uri ? "segment" : "pre-segment",
                        g = p ? rH({
                            preloadSegment: s
                        }) - 1 : 0;
                    return `${m} [${n+l}/${n+u}]` + (p ? ` part [${h}/${g}]` : "") + ` segment start/end [${s.start} => ${s.end}]` + (p ? ` part start/end [${r.start} => ${r.end}]` : "") + ` startOfSegment [${t}]` + ` duration [${i}]` + ` timeline [${d}]` + ` selected by [${c}]` + ` playlist [${a}]`
                },
                a4 = e => `${e}TimingInfo`,
                a8 = ({
                    segmentTimeline: e,
                    currentTimeline: t,
                    startOfSegment: i,
                    buffered: s,
                    overrideCheck: r
                }) => r || e !== t ? e < t ? i : s.length ? s.end(s.length - 1) : i : null,
                a5 = ({
                    timelineChangeController: e,
                    currentTimeline: t,
                    segmentTimeline: i,
                    loaderType: s,
                    audioDisabled: r
                }) => {
                    if (t === i) return !1;
                    if ("audio" === s) {
                        let t = e.lastTimelineChange({
                            type: "main"
                        });
                        return !t || t.to !== i
                    }
                    if ("main" === s && r) {
                        let t = e.pendingTimelineChange({
                            type: "audio"
                        });
                        return !t || t.to !== i
                    }
                    return !1
                },
                a3 = e => {
                    let t = 0;
                    return ["video", "audio"].forEach(function(i) {
                        let s;
                        let r = e[`${i}TimingInfo`];
                        if (!r) return;
                        let {
                            start: n,
                            end: a
                        } = r;
                        "bigint" == typeof n || "bigint" == typeof a ? s = d().BigInt(a) - d().BigInt(n) : "number" == typeof n && "number" == typeof a && (s = a - n), void 0 !== s && s > t && (t = s)
                    }), "bigint" == typeof t && t < Number.MAX_SAFE_INTEGER && (t = Number(t)), t
                },
                a6 = ({
                    segmentDuration: e,
                    maxDuration: t
                }) => !!e && Math.round(e) > t + rI,
                a7 = (e, t) => {
                    if ("hls" !== t) return null;
                    let i = a3({
                        audioTimingInfo: e.audioTimingInfo,
                        videoTimingInfo: e.videoTimingInfo
                    });
                    if (!i) return null;
                    let s = e.playlist.targetDuration,
                        r = a6({
                            segmentDuration: i,
                            maxDuration: 2 * s
                        }),
                        n = a6({
                            segmentDuration: i,
                            maxDuration: s
                        }),
                        a = `Segment with index ${e.mediaIndex} from playlist ${e.playlist.id} has a duration of ${i} when the reported duration is ${e.duration} and the target duration is ${s}. For HLS content, a duration in excess of the target duration may result in playback issues. See the HLS specification section on EXT-X-TARGETDURATION for more details: https://tools.ietf.org/html/draft-pantos-http-live-streaming-23#section-4.3.3.1`;
                    return r || n ? {
                        severity: r ? "warn" : "info",
                        message: a
                    } : null
                };
            class a9 extends r_.EventTarget {
                constructor(e, t = {}) {
                    if (super(), !e) throw TypeError("Initialization settings are required");
                    if ("function" != typeof e.currentTime) throw TypeError("No currentTime getter specified");
                    if (!e.mediaSource) throw TypeError("No MediaSource specified");
                    this.bandwidth = e.bandwidth, this.throughput = {
                        rate: 0,
                        count: 0
                    }, this.roundTrip = NaN, this.resetStats_(), this.mediaIndex = null, this.partIndex = null, this.hasPlayed_ = e.hasPlayed, this.currentTime_ = e.currentTime, this.seekable_ = e.seekable, this.seeking_ = e.seeking, this.duration_ = e.duration, this.mediaSource_ = e.mediaSource, this.vhs_ = e.vhs, this.loaderType_ = e.loaderType, this.currentMediaInfo_ = void 0, this.startingMediaInfo_ = void 0, this.segmentMetadataTrack_ = e.segmentMetadataTrack, this.goalBufferLength_ = e.goalBufferLength, this.sourceType_ = e.sourceType, this.sourceUpdater_ = e.sourceUpdater, this.inbandTextTracks_ = e.inbandTextTracks, this.state_ = "INIT", this.timelineChangeController_ = e.timelineChangeController, this.shouldSaveSegmentTimingInfo_ = !0, this.parse708captions_ = e.parse708captions, this.useDtsForTimestampOffset_ = e.useDtsForTimestampOffset, this.captionServices_ = e.captionServices, this.exactManifestTimings = e.exactManifestTimings, this.addMetadataToTextTrack = e.addMetadataToTextTrack, this.checkBufferTimeout_ = null, this.error_ = void 0, this.currentTimeline_ = -1, this.shouldForceTimestampOffsetAfterResync_ = !1, this.pendingSegment_ = null, this.xhrOptions_ = null, this.pendingSegments_ = [], this.audioDisabled_ = !1, this.isPendingTimestampOffset_ = !1, this.gopBuffer_ = [], this.timeMapping_ = 0, this.safeAppend_ = !1, this.appendInitSegment_ = {
                        audio: !0,
                        video: !0
                    }, this.playlistOfLastInitSegment_ = {
                        audio: null,
                        video: null
                    }, this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_ = {
                        id3: [],
                        caption: []
                    }, this.waitingOnRemove_ = !1, this.quotaExceededErrorRetryTimeout_ = null, this.activeInitSegmentId_ = null, this.initSegments_ = {}, this.cacheEncryptionKeys_ = e.cacheEncryptionKeys, this.keyCache_ = {}, this.decrypter_ = e.decrypter, this.syncController_ = e.syncController, this.syncPoint_ = {
                        segmentIndex: 0,
                        time: 0
                    }, this.transmuxer_ = this.createTransmuxer_(), this.triggerSyncInfoUpdate_ = () => this.trigger("syncinfoupdate"), this.syncController_.on("syncinfoupdate", this.triggerSyncInfoUpdate_), this.mediaSource_.addEventListener("sourceopen", () => {
                        this.isEndOfStream_() || (this.ended_ = !1)
                    }), this.fetchAtBuffer_ = !1, this.logger_ = rE(`SegmentLoader[${this.loaderType_}]`), Object.defineProperty(this, "state", {
                        get() {
                            return this.state_
                        },
                        set(e) {
                            e !== this.state_ && (this.logger_(`${this.state_} -> ${e}`), this.state_ = e, this.trigger("statechange"))
                        }
                    }), this.sourceUpdater_.on("ready", () => {
                        this.hasEnoughInfoToAppend_() && this.processCallQueue_()
                    }), "main" === this.loaderType_ && this.timelineChangeController_.on("pendingtimelinechange", () => {
                        this.hasEnoughInfoToAppend_() && this.processCallQueue_()
                    }), "audio" === this.loaderType_ && this.timelineChangeController_.on("timelinechange", () => {
                        this.hasEnoughInfoToLoad_() && this.processLoadQueue_(), this.hasEnoughInfoToAppend_() && this.processCallQueue_()
                    })
                }
                get mediaSequenceSync_() {
                    return this.syncController_.getMediaSequenceSync(this.loaderType_)
                }
                createTransmuxer_() {
                    return at.createTransmuxer({
                        remux: !1,
                        alignGopsAtEnd: this.safeAppend_,
                        keepOriginalTimestamps: !0,
                        parse708captions: this.parse708captions_,
                        captionServices: this.captionServices_
                    })
                }
                resetStats_() {
                    this.mediaBytesTransferred = 0, this.mediaRequests = 0, this.mediaRequestsAborted = 0, this.mediaRequestsTimedout = 0, this.mediaRequestsErrored = 0, this.mediaTransferDuration = 0, this.mediaSecondsLoaded = 0, this.mediaAppends = 0
                }
                dispose() {
                    this.trigger("dispose"), this.state = "DISPOSED", this.pause(), this.abort_(), this.transmuxer_ && this.transmuxer_.terminate(), this.resetStats_(), this.checkBufferTimeout_ && d().clearTimeout(this.checkBufferTimeout_), this.syncController_ && this.triggerSyncInfoUpdate_ && this.syncController_.off("syncinfoupdate", this.triggerSyncInfoUpdate_), this.off()
                }
                setAudio(e) {
                    this.audioDisabled_ = !e, e ? this.appendInitSegment_.audio = !0 : this.sourceUpdater_.removeAudio(0, this.duration_())
                }
                abort() {
                    if ("WAITING" !== this.state) {
                        this.pendingSegment_ && (this.pendingSegment_ = null);
                        return
                    }
                    this.abort_(), this.state = "READY", this.paused() || this.monitorBuffer_()
                }
                abort_() {
                    this.pendingSegment_ && this.pendingSegment_.abortRequests && this.pendingSegment_.abortRequests(), this.pendingSegment_ = null, this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [], this.timelineChangeController_.clearPendingTimelineChange(this.loaderType_), this.waitingOnRemove_ = !1, d().clearTimeout(this.quotaExceededErrorRetryTimeout_), this.quotaExceededErrorRetryTimeout_ = null
                }
                checkForAbort_(e) {
                    return "APPENDING" !== this.state || this.pendingSegment_ ? !this.pendingSegment_ || this.pendingSegment_.requestId !== e : (this.state = "READY", !0)
                }
                error(e) {
                    return void 0 !== e && (this.logger_("error occurred:", e), this.error_ = e), this.pendingSegment_ = null, this.error_
                }
                endOfStream() {
                    this.ended_ = !0, this.transmuxer_ && at.reset(this.transmuxer_), this.gopBuffer_.length = 0, this.pause(), this.trigger("ended")
                }
                buffered_() {
                    let e = this.getMediaInfo_();
                    if (!this.sourceUpdater_ || !e) return rx();
                    if ("main" === this.loaderType_) {
                        let {
                            hasAudio: t,
                            hasVideo: i,
                            isMuxed: s
                        } = e;
                        if (i && t && !this.audioDisabled_ && !s) return this.sourceUpdater_.buffered();
                        if (i) return this.sourceUpdater_.videoBuffered()
                    }
                    return this.sourceUpdater_.audioBuffered()
                }
                initSegmentForMap(e, t = !1) {
                    if (!e) return null;
                    let i = nE(e),
                        s = this.initSegments_[i];
                    return t && !s && e.bytes && (this.initSegments_[i] = s = {
                        resolvedUri: e.resolvedUri,
                        byterange: e.byterange,
                        bytes: e.bytes,
                        tracks: e.tracks,
                        timescales: e.timescales
                    }), s || e
                }
                segmentKey(e, t = !1) {
                    if (!e) return null;
                    let i = nw(e),
                        s = this.keyCache_[i];
                    this.cacheEncryptionKeys_ && t && !s && e.bytes && (this.keyCache_[i] = s = {
                        resolvedUri: e.resolvedUri,
                        bytes: e.bytes
                    });
                    let r = {
                        resolvedUri: (s || e).resolvedUri
                    };
                    return s && (r.bytes = s.bytes), r
                }
                couldBeginLoading_() {
                    return this.playlist_ && !this.paused()
                }
                load() {
                    if (this.monitorBuffer_(), this.playlist_) {
                        if ("INIT" === this.state && this.couldBeginLoading_()) return this.init_();
                        this.couldBeginLoading_() && ("READY" === this.state || "INIT" === this.state) && (this.state = "READY")
                    }
                }
                init_() {
                    return this.state = "READY", this.resetEverything(), this.monitorBuffer_()
                }
                playlist(e, t = {}) {
                    if (!e) return;
                    let i = this.playlist_,
                        s = this.pendingSegment_;
                    this.playlist_ = e, this.xhrOptions_ = t, "INIT" === this.state && (e.syncInfo = {
                        mediaSequence: e.mediaSequence,
                        time: 0
                    }, "main" === this.loaderType_ && this.syncController_.setDateTimeMappingForStart(e));
                    let r = null;
                    if (i && (i.id ? r = i.id : i.uri && (r = i.uri)), this.logger_(`playlist update [${r} => ${e.id||e.uri}]`), this.mediaSequenceSync_ && (this.mediaSequenceSync_.update(e, this.currentTime_()), this.logger_(`Playlist update:
currentTime: ${this.currentTime_()}
bufferedEnd: ${rN(this.buffered_())}
`, this.mediaSequenceSync_.diagnostics)), this.trigger("syncinfoupdate"), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
                    if (!i || i.uri !== e.uri) {
                        null !== this.mediaIndex && (e.endList || "number" != typeof e.partTargetDuration ? this.resyncLoader() : this.resetLoader()), this.currentMediaInfo_ = void 0, this.trigger("playlistupdate");
                        return
                    }
                    let n = e.mediaSequence - i.mediaSequence;
                    if (this.logger_(`live window shift [${n}]`), null !== this.mediaIndex) {
                        if (this.mediaIndex -= n, this.mediaIndex < 0) this.mediaIndex = null, this.partIndex = null;
                        else {
                            let e = this.playlist_.segments[this.mediaIndex];
                            if (this.partIndex && (!e.parts || !e.parts.length || !e.parts[this.partIndex])) {
                                let e = this.mediaIndex;
                                this.logger_(`currently processing part (index ${this.partIndex}) no longer exists.`), this.resetLoader(), this.mediaIndex = e
                            }
                        }
                    }
                    s && (s.mediaIndex -= n, s.mediaIndex < 0 ? (s.mediaIndex = null, s.partIndex = null) : (s.mediaIndex >= 0 && (s.segment = e.segments[s.mediaIndex]), s.partIndex >= 0 && s.segment.parts && (s.part = s.segment.parts[s.partIndex]))), this.syncController_.saveExpiredSegmentInfo(i, e)
                }
                pause() {
                    this.checkBufferTimeout_ && (d().clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null)
                }
                paused() {
                    return null === this.checkBufferTimeout_
                }
                resetEverything(e) {
                    this.ended_ = !1, this.activeInitSegmentId_ = null, this.appendInitSegment_ = {
                        audio: !0,
                        video: !0
                    }, this.resetLoader(), this.remove(0, 1 / 0, e), this.transmuxer_ && (this.transmuxer_.postMessage({
                        action: "clearAllMp4Captions"
                    }), this.transmuxer_.postMessage({
                        action: "reset"
                    }))
                }
                resetLoader() {
                    this.fetchAtBuffer_ = !1, this.mediaSequenceSync_ && this.mediaSequenceSync_.resetAppendedStatus(), this.resyncLoader()
                }
                resyncLoader() {
                    this.transmuxer_ && at.reset(this.transmuxer_), this.mediaIndex = null, this.partIndex = null, this.syncPoint_ = null, this.isPendingTimestampOffset_ = !1;
                    let e = this.currentMediaInfo_ && this.currentMediaInfo_.isFmp4;
                    "hls" !== this.sourceType_ || e || (this.shouldForceTimestampOffsetAfterResync_ = !0), this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [], this.abort(), this.transmuxer_ && this.transmuxer_.postMessage({
                        action: "clearParsedMp4Captions"
                    })
                }
                remove(e, t, i = () => {}, s = !1) {
                    if (t === 1 / 0 && (t = this.duration_()), t <= e) {
                        this.logger_("skipping remove because end ${end} is <= start ${start}");
                        return
                    }
                    if (!this.sourceUpdater_ || !this.getMediaInfo_()) {
                        this.logger_("skipping remove because no source updater or starting media info");
                        return
                    }
                    let r = 1,
                        n = () => {
                            0 == --r && i()
                        };
                    for (let i in (s || !this.audioDisabled_) && (r++, this.sourceUpdater_.removeAudio(e, t, n)), (s || "main" === this.loaderType_) && (this.gopBuffer_ = aQ(this.gopBuffer_, e, t, this.timeMapping_), r++, this.sourceUpdater_.removeVideo(e, t, n)), this.inbandTextTracks_) az(e, t, this.inbandTextTracks_[i]);
                    az(e, t, this.segmentMetadataTrack_), n()
                }
                monitorBuffer_() {
                    this.checkBufferTimeout_ && d().clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = d().setTimeout(this.monitorBufferTick_.bind(this), 1)
                }
                monitorBufferTick_() {
                    "READY" === this.state && this.fillBuffer_(), this.checkBufferTimeout_ && d().clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = d().setTimeout(this.monitorBufferTick_.bind(this), 500)
                }
                fillBuffer_() {
                    if (this.sourceUpdater_.updating()) return;
                    let e = this.chooseNextRequest_();
                    e && ("number" == typeof e.timestampOffset && (this.isPendingTimestampOffset_ = !1, this.timelineChangeController_.pendingTimelineChange({
                        type: this.loaderType_,
                        from: this.currentTimeline_,
                        to: e.timeline
                    })), this.loadSegment_(e))
                }
                isEndOfStream_(e = this.mediaIndex, t = this.playlist_, i = this.partIndex) {
                    if (!t || !this.mediaSource_) return !1;
                    let s = "number" == typeof e && t.segments[e],
                        r = e + 1 === t.segments.length,
                        n = !s || !s.parts || i + 1 === s.parts.length;
                    return t.endList && "open" === this.mediaSource_.readyState && r && n
                }
                chooseNextRequest_() {
                    let e = this.buffered_(),
                        t = rN(e) || 0,
                        i = rj(e, this.currentTime_()),
                        s = !this.hasPlayed_() && i >= 1,
                        r = i >= this.goalBufferLength_(),
                        n = this.playlist_.segments;
                    if (!n.length || s || r) return null;
                    this.syncPoint_ = this.syncPoint_ || this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_(), this.loaderType_);
                    let a = {
                        partIndex: null,
                        mediaIndex: null,
                        startOfSegment: null,
                        playlist: this.playlist_,
                        isSyncRequest: !this.syncPoint_
                    };
                    if (a.isSyncRequest) a.mediaIndex = aX(this.currentTimeline_, n, t), this.logger_(`choose next request. Can not find sync point. Fallback to media Index: ${a.mediaIndex}`);
                    else if (null !== this.mediaIndex) {
                        let e = n[this.mediaIndex],
                            i = "number" == typeof this.partIndex ? this.partIndex : -1;
                        a.startOfSegment = e.end ? e.end : t, e.parts && e.parts[i + 1] ? (a.mediaIndex = this.mediaIndex, a.partIndex = i + 1) : a.mediaIndex = this.mediaIndex + 1
                    } else {
                        let e, i, s;
                        let r = this.fetchAtBuffer_ ? t : this.currentTime_();
                        if (this.mediaSequenceSync_ && this.logger_(`chooseNextRequest_ request after Quality Switch:
For TargetTime: ${r}.
CurrentTime: ${this.currentTime_()}
BufferedEnd: ${t}
Fetch At Buffer: ${this.fetchAtBuffer_}
`, this.mediaSequenceSync_.diagnostics), this.mediaSequenceSync_ && this.mediaSequenceSync_.isReliable) {
                            let t = this.getSyncInfoFromMediaSequenceSync_(r);
                            if (!t) return this.logger_("chooseNextRequest_ - no sync info found using media sequence sync"), null;
                            this.logger_(`chooseNextRequest_ mediaSequence syncInfo (${t.start} --> ${t.end})`), e = t.segmentIndex, i = t.partIndex, s = t.start
                        } else {
                            this.logger_("chooseNextRequest_ - fallback to a regular segment selection algorithm, based on a syncPoint.");
                            let t = r5.getMediaInfoForTime({
                                exactManifestTimings: this.exactManifestTimings,
                                playlist: this.playlist_,
                                currentTime: r,
                                startingPartIndex: this.syncPoint_.partIndex,
                                startingSegmentIndex: this.syncPoint_.segmentIndex,
                                startTime: this.syncPoint_.time
                            });
                            e = t.segmentIndex, i = t.partIndex, s = t.startTime
                        }
                        a.getMediaInfoForTime = this.fetchAtBuffer_ ? `bufferedEnd ${r}` : `currentTime ${r}`, a.mediaIndex = e, a.startOfSegment = s, a.partIndex = i, this.logger_(`choose next request. Playlist switched and we have a sync point. Media Index: ${a.mediaIndex} `)
                    }
                    let o = n[a.mediaIndex],
                        l = o && "number" == typeof a.partIndex && o.parts && o.parts[a.partIndex];
                    if (!o || "number" == typeof a.partIndex && !l) return null;
                    "number" != typeof a.partIndex && o.parts && (a.partIndex = 0, l = o.parts[0]);
                    let h = this.vhs_.playlists && this.vhs_.playlists.main && this.vhs_.playlists.main.independentSegments || this.playlist_.independentSegments;
                    if (!i && l && !h && !l.independent) {
                        if (0 === a.partIndex) {
                            let e = n[a.mediaIndex - 1],
                                t = e.parts && e.parts.length && e.parts[e.parts.length - 1];
                            t && t.independent && (a.mediaIndex -= 1, a.partIndex = e.parts.length - 1, a.independent = "previous segment")
                        } else o.parts[a.partIndex - 1].independent && (a.partIndex -= 1, a.independent = "previous part")
                    }
                    let d = this.mediaSource_ && "ended" === this.mediaSource_.readyState;
                    return a.mediaIndex >= n.length - 1 && d && !this.seeking_() ? null : (this.shouldForceTimestampOffsetAfterResync_ && (this.shouldForceTimestampOffsetAfterResync_ = !1, a.forceTimestampOffset = !0, this.logger_("choose next request. Force timestamp offset after loader resync")), this.generateSegmentInfo_(a))
                }
                getSyncInfoFromMediaSequenceSync_(e) {
                    if (!this.mediaSequenceSync_) return null;
                    let t = Math.max(e, this.mediaSequenceSync_.start);
                    e !== t && this.logger_(`getSyncInfoFromMediaSequenceSync_. Pulled target time from ${e} to ${t}`);
                    let i = this.mediaSequenceSync_.getSyncInfoForTime(t);
                    if (!i) return null;
                    if (!i.isAppended) return i;
                    let s = this.mediaSequenceSync_.getSyncInfoForTime(i.end);
                    return s ? (s.isAppended && this.logger_("getSyncInfoFromMediaSequenceSync_: We encounter unexpected scenario where next media sequence sync info is also appended!"), s) : null
                }
                generateSegmentInfo_(e) {
                    let {
                        independent: t,
                        playlist: i,
                        mediaIndex: s,
                        startOfSegment: r,
                        isSyncRequest: n,
                        partIndex: a,
                        forceTimestampOffset: o,
                        getMediaInfoForTime: l
                    } = e, h = i.segments[s], d = "number" == typeof a && h.parts[a], u = {
                        requestId: "segment-loader-" + Math.random(),
                        uri: d && d.resolvedUri || h.resolvedUri,
                        mediaIndex: s,
                        partIndex: d ? a : null,
                        isSyncRequest: n,
                        startOfSegment: r,
                        playlist: i,
                        bytes: null,
                        encryptedBytes: null,
                        timestampOffset: null,
                        timeline: h.timeline,
                        duration: d && d.duration || h.duration,
                        segment: h,
                        part: d,
                        byteLength: 0,
                        transmuxer: this.transmuxer_,
                        getMediaInfoForTime: l,
                        independent: t
                    }, c = void 0 !== o ? o : this.isPendingTimestampOffset_;
                    u.timestampOffset = this.timestampOffsetForSegment_({
                        segmentTimeline: h.timeline,
                        currentTimeline: this.currentTimeline_,
                        startOfSegment: r,
                        buffered: this.buffered_(),
                        overrideCheck: c
                    });
                    let p = rN(this.sourceUpdater_.audioBuffered());
                    return "number" == typeof p && (u.audioAppendStart = p - this.sourceUpdater_.audioTimestampOffset()), this.sourceUpdater_.videoBuffered().length && (u.gopsToAlignWith = aG(this.gopBuffer_, this.currentTime_() - this.sourceUpdater_.videoTimestampOffset(), this.timeMapping_)), u
                }
                timestampOffsetForSegment_(e) {
                    return a8(e)
                }
                earlyAbortWhenNeeded_(e) {
                    if (this.vhs_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH || Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1e3) return;
                    let t = this.currentTime_(),
                        i = e.bandwidth,
                        s = this.pendingSegment_.duration,
                        r = r5.estimateSegmentRequestTime(s, i, this.playlist_, e.bytesReceived),
                        n = function(e, t, i = 1) {
                            return ((e.length ? e.end(e.length - 1) : 0) - t) / i
                        }(this.buffered_(), t, this.vhs_.tech_.playbackRate()) - 1;
                    if (r <= n) return;
                    let a = aM({
                        main: this.vhs_.playlists.main,
                        currentTime: t,
                        bandwidth: i,
                        duration: this.duration_(),
                        segmentDuration: s,
                        timeUntilRebuffer: n,
                        currentTimeline: this.currentTimeline_,
                        syncController: this.syncController_
                    });
                    if (!a) return;
                    let o = r - n - a.rebufferingImpact,
                        l = .5;
                    n <= rI && (l = 1), a.playlist && a.playlist.uri !== this.playlist_.uri && !(o < l) && (this.bandwidth = a.playlist.attributes.BANDWIDTH * nQ.BANDWIDTH_VARIANCE + 1, this.trigger("earlyabort"))
                }
                handleAbort_(e) {
                    this.logger_(`Aborting ${a2(e)}`), this.mediaRequestsAborted += 1
                }
                handleProgress_(e, t) {
                    this.earlyAbortWhenNeeded_(t.stats), this.checkForAbort_(t.requestId) || this.trigger("progress")
                }
                handleTrackInfo_(e, t) {
                    this.earlyAbortWhenNeeded_(e.stats), !(this.checkForAbort_(e.requestId) || this.checkForIllegalMediaSwitch(t)) && (t = t || {}, aY(this.currentMediaInfo_, t) || (this.appendInitSegment_ = {
                        audio: !0,
                        video: !0
                    }, this.startingMediaInfo_ = t, this.currentMediaInfo_ = t, this.logger_("trackinfo update", t), this.trigger("trackinfo")), !this.checkForAbort_(e.requestId) && (this.pendingSegment_.trackInfo = t, this.hasEnoughInfoToAppend_() && this.processCallQueue_()))
                }
                handleTimingInfo_(e, t, i, s) {
                    if (this.earlyAbortWhenNeeded_(e.stats), this.checkForAbort_(e.requestId)) return;
                    let r = this.pendingSegment_,
                        n = a4(t);
                    r[n] = r[n] || {}, r[n][i] = s, this.logger_(`timinginfo: ${t} - ${i} - ${s}`), this.hasEnoughInfoToAppend_() && this.processCallQueue_()
                }
                handleCaptions_(e, t) {
                    if (this.earlyAbortWhenNeeded_(e.stats), this.checkForAbort_(e.requestId)) return;
                    if (0 === t.length) {
                        this.logger_("SegmentLoader received no captions from a caption event");
                        return
                    }
                    if (!this.pendingSegment_.hasAppendedData_) {
                        this.metadataQueue_.caption.push(this.handleCaptions_.bind(this, e, t));
                        return
                    }
                    let i = null === this.sourceUpdater_.videoTimestampOffset() ? this.sourceUpdater_.audioTimestampOffset() : this.sourceUpdater_.videoTimestampOffset(),
                        s = {};
                    t.forEach(e => {
                        s[e.stream] = s[e.stream] || {
                            startTime: 1 / 0,
                            captions: [],
                            endTime: 0
                        };
                        let t = s[e.stream];
                        t.startTime = Math.min(t.startTime, e.startTime + i), t.endTime = Math.max(t.endTime, e.endTime + i), t.captions.push(e)
                    }), Object.keys(s).forEach(e => {
                        let {
                            startTime: t,
                            endTime: r,
                            captions: n
                        } = s[e], a = this.inbandTextTracks_;
                        this.logger_(`adding cues from ${t} -> ${r} for ${e}`), aB(a, this.vhs_.tech_, e), az(t, r, a[e]), aN({
                            captionArray: n,
                            inbandTextTracks: a,
                            timestampOffset: i
                        })
                    }), this.transmuxer_ && this.transmuxer_.postMessage({
                        action: "clearParsedMp4Captions"
                    })
                }
                handleId3_(e, t, i) {
                    if (this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId)) {
                        if (!this.pendingSegment_.hasAppendedData_) {
                            this.metadataQueue_.id3.push(this.handleId3_.bind(this, e, t, i));
                            return
                        }
                        this.addMetadataToTextTrack(i, t, this.duration_())
                    }
                }
                processMetadataQueue_() {
                    this.metadataQueue_.id3.forEach(e => e()), this.metadataQueue_.caption.forEach(e => e()), this.metadataQueue_.id3 = [], this.metadataQueue_.caption = []
                }
                processCallQueue_() {
                    let e = this.callQueue_;
                    this.callQueue_ = [], e.forEach(e => e())
                }
                processLoadQueue_() {
                    let e = this.loadQueue_;
                    this.loadQueue_ = [], e.forEach(e => e())
                }
                hasEnoughInfoToLoad_() {
                    if ("audio" !== this.loaderType_) return !0;
                    let e = this.pendingSegment_;
                    return !!e && (!this.getCurrentMediaInfo_() || !a5({
                        timelineChangeController: this.timelineChangeController_,
                        currentTimeline: this.currentTimeline_,
                        segmentTimeline: e.timeline,
                        loaderType: this.loaderType_,
                        audioDisabled: this.audioDisabled_
                    }))
                }
                getCurrentMediaInfo_(e = this.pendingSegment_) {
                    return e && e.trackInfo || this.currentMediaInfo_
                }
                getMediaInfo_(e = this.pendingSegment_) {
                    return this.getCurrentMediaInfo_(e) || this.startingMediaInfo_
                }
                getPendingSegmentPlaylist() {
                    return this.pendingSegment_ ? this.pendingSegment_.playlist : null
                }
                hasEnoughInfoToAppend_() {
                    if (!this.sourceUpdater_.ready() || this.waitingOnRemove_ || this.quotaExceededErrorRetryTimeout_) return !1;
                    let e = this.pendingSegment_,
                        t = this.getCurrentMediaInfo_();
                    if (!e || !t) return !1;
                    let {
                        hasAudio: i,
                        hasVideo: s,
                        isMuxed: r
                    } = t;
                    return !(s && !e.videoTimingInfo || i && !this.audioDisabled_ && !r && !e.audioTimingInfo || a5({
                        timelineChangeController: this.timelineChangeController_,
                        currentTimeline: this.currentTimeline_,
                        segmentTimeline: e.timeline,
                        loaderType: this.loaderType_,
                        audioDisabled: this.audioDisabled_
                    }))
                }
                handleData_(e, t) {
                    if (this.earlyAbortWhenNeeded_(e.stats), this.checkForAbort_(e.requestId)) return;
                    if (this.callQueue_.length || !this.hasEnoughInfoToAppend_()) {
                        this.callQueue_.push(this.handleData_.bind(this, e, t));
                        return
                    }
                    let i = this.pendingSegment_;
                    if (this.setTimeMapping_(i.timeline), this.updateMediaSecondsLoaded_(i.part || i.segment), "closed" !== this.mediaSource_.readyState) {
                        if (e.map && (e.map = this.initSegmentForMap(e.map, !0), i.segment.map = e.map), e.key && this.segmentKey(e.key, !0), i.isFmp4 = e.isFmp4, i.timingInfo = i.timingInfo || {}, i.isFmp4) this.trigger("fmp4"), i.timingInfo.start = i[a4(t.type)].start;
                        else {
                            let e;
                            let t = this.getCurrentMediaInfo_(),
                                s = "main" === this.loaderType_ && t && t.hasVideo;
                            s && (e = i.videoTimingInfo.start), i.timingInfo.start = this.trueSegmentStart_({
                                currentStart: i.timingInfo.start,
                                playlist: i.playlist,
                                mediaIndex: i.mediaIndex,
                                currentVideoTimestampOffset: this.sourceUpdater_.videoTimestampOffset(),
                                useVideoTimingInfo: s,
                                firstVideoFrameTimeForData: e,
                                videoTimingInfo: i.videoTimingInfo,
                                audioTimingInfo: i.audioTimingInfo
                            })
                        }
                        if (this.updateAppendInitSegmentStatus(i, t.type), this.updateSourceBufferTimestampOffset_(i), i.isSyncRequest) {
                            this.updateTimingInfoEnd_(i), this.syncController_.saveSegmentTimingInfo({
                                segmentInfo: i,
                                shouldSaveTimelineMapping: "main" === this.loaderType_
                            });
                            let e = this.chooseNextRequest_();
                            if (e.mediaIndex !== i.mediaIndex || e.partIndex !== i.partIndex) {
                                this.logger_("sync segment was incorrect, not appending");
                                return
                            }
                            this.logger_("sync segment was correct, appending")
                        }
                        i.hasAppendedData_ = !0, this.processMetadataQueue_(), this.appendData_(i, t)
                    }
                }
                updateAppendInitSegmentStatus(e, t) {
                    "main" !== this.loaderType_ || "number" != typeof e.timestampOffset || e.changedTimestampOffset || (this.appendInitSegment_ = {
                        audio: !0,
                        video: !0
                    }), this.playlistOfLastInitSegment_[t] !== e.playlist && (this.appendInitSegment_[t] = !0)
                }
                getInitSegmentAndUpdateState_({
                    type: e,
                    initSegment: t,
                    map: i,
                    playlist: s
                }) {
                    if (i) {
                        let e = nE(i);
                        if (this.activeInitSegmentId_ === e) return null;
                        t = this.initSegmentForMap(i, !0).bytes, this.activeInitSegmentId_ = e
                    }
                    return t && this.appendInitSegment_[e] ? (this.playlistOfLastInitSegment_[e] = s, this.appendInitSegment_[e] = !1, this.activeInitSegmentId_ = null, t) : null
                }
                handleQuotaExceededError_({
                    segmentInfo: e,
                    type: t,
                    bytes: i
                }, s) {
                    let r = this.sourceUpdater_.audioBuffered(),
                        n = this.sourceUpdater_.videoBuffered();
                    r.length > 1 && this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the audio buffer: " + rU(r).join(", ")), n.length > 1 && this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the video buffer: " + rU(n).join(", "));
                    let a = r.length ? r.start(0) : 0,
                        o = r.length ? r.end(r.length - 1) : 0,
                        l = n.length ? n.start(0) : 0,
                        h = n.length ? n.end(n.length - 1) : 0;
                    if (o - a <= 1 && h - l <= 1) {
                        this.logger_(`On QUOTA_EXCEEDED_ERR, single segment too large to append to buffer, triggering an error. Appended byte length: ${i.byteLength}, audio buffer: ${rU(r).join(", ")}, video buffer: ${rU(n).join(", ")}, `), this.error({
                            message: "Quota exceeded error with append of a single segment of content",
                            excludeUntil: 1 / 0,
                            metadata: {
                                errorType: r_.Error.SegmentExceedsSourceBufferQuota
                            }
                        }), this.trigger("error");
                        return
                    }
                    this.waitingOnRemove_ = !0, this.callQueue_.push(this.appendToSourceBuffer_.bind(this, {
                        segmentInfo: e,
                        type: t,
                        bytes: i
                    }));
                    let u = this.currentTime_() - 1;
                    this.logger_(`On QUOTA_EXCEEDED_ERR, removing audio/video from 0 to ${u}`), this.remove(0, u, () => {
                        this.logger_("On QUOTA_EXCEEDED_ERR, retrying append in 1s"), this.waitingOnRemove_ = !1, this.quotaExceededErrorRetryTimeout_ = d().setTimeout(() => {
                            this.logger_("On QUOTA_EXCEEDED_ERR, re-processing call queue"), this.quotaExceededErrorRetryTimeout_ = null, this.processCallQueue_()
                        }, 1e3)
                    }, !0)
                }
                handleAppendError_({
                    segmentInfo: e,
                    type: t,
                    bytes: i
                }, s) {
                    if (s) {
                        if (22 === s.code) {
                            this.handleQuotaExceededError_({
                                segmentInfo: e,
                                type: t,
                                bytes: i
                            });
                            return
                        }
                        this.logger_("Received non QUOTA_EXCEEDED_ERR on append", s), this.error({
                            message: `${t} append of ${i.length}b failed for segment #${e.mediaIndex} in playlist ${e.playlist.id}`,
                            metadata: {
                                errorType: r_.Error.SegmentAppendError
                            }
                        }), this.trigger("appenderror")
                    }
                }
                appendToSourceBuffer_({
                    segmentInfo: e,
                    type: t,
                    initSegment: i,
                    data: s,
                    bytes: r
                }) {
                    if (!r) {
                        let e = [s],
                            t = s.byteLength;
                        i && (e.unshift(i), t += i.byteLength), r = aR({
                            bytes: t,
                            segments: e
                        })
                    }
                    this.sourceUpdater_.appendBuffer({
                        segmentInfo: e,
                        type: t,
                        bytes: r
                    }, this.handleAppendError_.bind(this, {
                        segmentInfo: e,
                        type: t,
                        bytes: r
                    }))
                }
                handleSegmentTimingInfo_(e, t, i) {
                    if (!this.pendingSegment_ || t !== this.pendingSegment_.requestId) return;
                    let s = this.pendingSegment_.segment,
                        r = `${e}TimingInfo`;
                    s[r] || (s[r] = {}), s[r].transmuxerPrependedSeconds = i.prependedContentDuration || 0, s[r].transmuxedPresentationStart = i.start.presentation, s[r].transmuxedDecodeStart = i.start.decode, s[r].transmuxedPresentationEnd = i.end.presentation, s[r].transmuxedDecodeEnd = i.end.decode, s[r].baseMediaDecodeTime = i.baseMediaDecodeTime
                }
                appendData_(e, t) {
                    let {
                        type: i,
                        data: s
                    } = t;
                    if (!s || !s.byteLength || "audio" === i && this.audioDisabled_) return;
                    let r = this.getInitSegmentAndUpdateState_({
                        type: i,
                        initSegment: t.initSegment,
                        playlist: e.playlist,
                        map: e.isFmp4 ? e.segment.map : null
                    });
                    this.appendToSourceBuffer_({
                        segmentInfo: e,
                        type: i,
                        initSegment: r,
                        data: s
                    })
                }
                loadSegment_(e) {
                    if (this.state = "WAITING", this.pendingSegment_ = e, this.trimBackBuffer_(e), "number" == typeof e.timestampOffset && this.transmuxer_ && this.transmuxer_.postMessage({
                            action: "clearAllMp4Captions"
                        }), !this.hasEnoughInfoToLoad_()) {
                        this.loadQueue_.push(() => {
                            let t = (0, b.Z)({}, e, {
                                forceTimestampOffset: !0
                            });
                            (0, b.Z)(e, this.generateSegmentInfo_(t)), this.isPendingTimestampOffset_ = !1, this.updateTransmuxerAndRequestSegment_(e)
                        });
                        return
                    }
                    this.updateTransmuxerAndRequestSegment_(e)
                }
                updateTransmuxerAndRequestSegment_(e) {
                    this.shouldUpdateTransmuxerTimestampOffset_(e.timestampOffset) && (this.gopBuffer_.length = 0, e.gopsToAlignWith = [], this.timeMapping_ = 0, this.transmuxer_.postMessage({
                        action: "reset"
                    }), this.transmuxer_.postMessage({
                        action: "setTimestampOffset",
                        timestampOffset: e.timestampOffset
                    }));
                    let t = this.createSimplifiedSegmentObj_(e),
                        i = this.isEndOfStream_(e.mediaIndex, e.playlist, e.partIndex),
                        s = null !== this.mediaIndex,
                        r = e.timeline !== this.currentTimeline_ && e.timeline > 0;
                    this.logger_(`Requesting
${aU(e.uri)}
${a2(e)}`), t.map && !t.map.bytes && (this.logger_("going to request init segment."), this.appendInitSegment_ = {
                        video: !0,
                        audio: !0
                    }), e.abortRequests = av({
                        xhr: this.vhs_.xhr,
                        xhrOptions: this.xhrOptions_,
                        decryptionWorker: this.decrypter_,
                        segment: t,
                        abortFn: this.handleAbort_.bind(this, e),
                        progressFn: this.handleProgress_.bind(this),
                        trackInfoFn: this.handleTrackInfo_.bind(this),
                        timingInfoFn: this.handleTimingInfo_.bind(this),
                        videoSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, "video", e.requestId),
                        audioSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, "audio", e.requestId),
                        captionsFn: this.handleCaptions_.bind(this),
                        isEndOfTimeline: i || s && r,
                        endedTimelineFn: () => {
                            this.logger_("received endedtimeline callback")
                        },
                        id3Fn: this.handleId3_.bind(this),
                        dataFn: this.handleData_.bind(this),
                        doneFn: this.segmentRequestFinished_.bind(this),
                        onTransmuxerLog: ({
                            message: t,
                            level: i,
                            stream: s
                        }) => {
                            this.logger_(`${a2(e)} logged from transmuxer stream ${s} as a ${i}: ${t}`)
                        }
                    })
                }
                trimBackBuffer_(e) {
                    let t = a1(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
                    t > 0 && this.remove(0, t)
                }
                createSimplifiedSegmentObj_(e) {
                    let t = e.segment,
                        i = e.part,
                        s = {
                            resolvedUri: i ? i.resolvedUri : t.resolvedUri,
                            byterange: i ? i.byterange : t.byterange,
                            requestId: e.requestId,
                            transmuxer: e.transmuxer,
                            audioAppendStart: e.audioAppendStart,
                            gopsToAlignWith: e.gopsToAlignWith,
                            part: e.part
                        },
                        r = e.playlist.segments[e.mediaIndex - 1];
                    if (r && r.timeline === t.timeline && (r.videoTimingInfo ? s.baseStartTime = r.videoTimingInfo.transmuxedDecodeEnd : r.audioTimingInfo && (s.baseStartTime = r.audioTimingInfo.transmuxedDecodeEnd)), t.key) {
                        let i = t.key.iv || new Uint32Array([0, 0, 0, e.mediaIndex + e.playlist.mediaSequence]);
                        s.key = this.segmentKey(t.key), s.key.iv = i
                    }
                    return t.map && (s.map = this.initSegmentForMap(t.map)), s
                }
                saveTransferStats_(e) {
                    this.mediaRequests += 1, e && (this.mediaBytesTransferred += e.bytesReceived, this.mediaTransferDuration += e.roundTripTime)
                }
                saveBandwidthRelatedStats_(e, t) {
                    if (this.pendingSegment_.byteLength = t.bytesReceived, e < aZ) {
                        this.logger_(`Ignoring segment's bandwidth because its duration of ${e} is less than the min to record ${aZ}`);
                        return
                    }
                    this.bandwidth = t.bandwidth, this.roundTrip = t.roundTripTime
                }
                handleTimeout_() {
                    this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, this.trigger("bandwidthupdate"), this.trigger("timeout")
                }
                segmentRequestFinished_(e, t, i) {
                    if (this.callQueue_.length) {
                        this.callQueue_.push(this.segmentRequestFinished_.bind(this, e, t, i));
                        return
                    }
                    if (this.saveTransferStats_(t.stats), !this.pendingSegment_ || t.requestId !== this.pendingSegment_.requestId) return;
                    if (e) {
                        if (this.pendingSegment_ = null, this.state = "READY", e.code === as.ABORTED) return;
                        if (this.pause(), e.code === as.TIMEOUT) {
                            this.handleTimeout_();
                            return
                        }
                        this.mediaRequestsErrored += 1, this.error(e), this.trigger("error");
                        return
                    }
                    let s = this.pendingSegment_;
                    this.saveBandwidthRelatedStats_(s.duration, t.stats), s.endOfAllRequests = t.endOfAllRequests, i.gopInfo && (this.gopBuffer_ = aK(this.gopBuffer_, i.gopInfo, this.safeAppend_)), this.state = "APPENDING", this.trigger("appending"), this.waitForAppendsToComplete_(s)
                }
                setTimeMapping_(e) {
                    let t = this.syncController_.mappingForTimeline(e);
                    null !== t && (this.timeMapping_ = t)
                }
                updateMediaSecondsLoaded_(e) {
                    "number" == typeof e.start && "number" == typeof e.end ? this.mediaSecondsLoaded += e.end - e.start : this.mediaSecondsLoaded += e.duration
                }
                shouldUpdateTransmuxerTimestampOffset_(e) {
                    return null !== e && ("main" === this.loaderType_ && e !== this.sourceUpdater_.videoTimestampOffset() || !this.audioDisabled_ && e !== this.sourceUpdater_.audioTimestampOffset())
                }
                trueSegmentStart_({
                    currentStart: e,
                    playlist: t,
                    mediaIndex: i,
                    firstVideoFrameTimeForData: s,
                    currentVideoTimestampOffset: r,
                    useVideoTimingInfo: n,
                    videoTimingInfo: a,
                    audioTimingInfo: o
                }) {
                    if (void 0 !== e) return e;
                    if (!n) return o.start;
                    let l = t.segments[i - 1];
                    return 0 !== i && l && void 0 !== l.start && l.end === s + r ? a.start : s
                }
                waitForAppendsToComplete_(e) {
                    let t = this.getCurrentMediaInfo_(e);
                    if (!t) {
                        this.error({
                            message: "No starting media returned, likely due to an unsupported media format.",
                            playlistExclusionDuration: 1 / 0,
                            metadata: {
                                errorType: r_.Error.SegmentUnsupportedMediaFormat
                            }
                        }), this.trigger("error");
                        return
                    }
                    let {
                        hasAudio: i,
                        hasVideo: s,
                        isMuxed: r
                    } = t, n = "main" === this.loaderType_ && s, a = !this.audioDisabled_ && i && !r;
                    if (e.waitingOnAppends = 0, !e.hasAppendedData_) {
                        e.timingInfo || "number" != typeof e.timestampOffset || (this.isPendingTimestampOffset_ = !0), e.timingInfo = {
                            start: 0
                        }, e.waitingOnAppends++, this.isPendingTimestampOffset_ || (this.updateSourceBufferTimestampOffset_(e), this.processMetadataQueue_()), this.checkAppendsDone_(e);
                        return
                    }
                    n && e.waitingOnAppends++, a && e.waitingOnAppends++, n && this.sourceUpdater_.videoQueueCallback(this.checkAppendsDone_.bind(this, e)), a && this.sourceUpdater_.audioQueueCallback(this.checkAppendsDone_.bind(this, e))
                }
                checkAppendsDone_(e) {
                    this.checkForAbort_(e.requestId) || (e.waitingOnAppends--, 0 === e.waitingOnAppends && this.handleAppendsDone_())
                }
                checkForIllegalMediaSwitch(e) {
                    let t = a0(this.loaderType_, this.getCurrentMediaInfo_(), e);
                    return !!t && (this.error({
                        message: t,
                        playlistExclusionDuration: 1 / 0,
                        metadata: {
                            errorType: r_.Error.SegmentSwitchError
                        }
                    }), this.trigger("error"), !0)
                }
                updateSourceBufferTimestampOffset_(e) {
                    if (null === e.timestampOffset || "number" != typeof e.timingInfo.start || e.changedTimestampOffset || "main" !== this.loaderType_) return;
                    let t = !1;
                    e.timestampOffset -= this.getSegmentStartTimeForTimestampOffsetCalculation_({
                        videoTimingInfo: e.segment.videoTimingInfo,
                        audioTimingInfo: e.segment.audioTimingInfo,
                        timingInfo: e.timingInfo
                    }), e.changedTimestampOffset = !0, e.timestampOffset !== this.sourceUpdater_.videoTimestampOffset() && (this.sourceUpdater_.videoTimestampOffset(e.timestampOffset), t = !0), e.timestampOffset !== this.sourceUpdater_.audioTimestampOffset() && (this.sourceUpdater_.audioTimestampOffset(e.timestampOffset), t = !0), t && this.trigger("timestampoffset")
                }
                getSegmentStartTimeForTimestampOffsetCalculation_({
                    videoTimingInfo: e,
                    audioTimingInfo: t,
                    timingInfo: i
                }) {
                    return this.useDtsForTimestampOffset_ ? e && "number" == typeof e.transmuxedDecodeStart ? e.transmuxedDecodeStart : t && "number" == typeof t.transmuxedDecodeStart ? t.transmuxedDecodeStart : i.start : i.start
                }
                updateTimingInfoEnd_(e) {
                    e.timingInfo = e.timingInfo || {};
                    let t = this.getMediaInfo_(),
                        i = "main" === this.loaderType_ && t && t.hasVideo && e.videoTimingInfo ? e.videoTimingInfo : e.audioTimingInfo;
                    i && (e.timingInfo.end = "number" == typeof i.end ? i.end : i.start + e.duration)
                }
                handleAppendsDone_() {
                    if (this.pendingSegment_ && this.trigger("appendsdone"), !this.pendingSegment_) {
                        this.state = "READY", this.paused() || this.monitorBuffer_();
                        return
                    }
                    let e = this.pendingSegment_;
                    e.part && e.part.syncInfo ? e.part.syncInfo.markAppended() : e.segment.syncInfo && e.segment.syncInfo.markAppended(), this.updateTimingInfoEnd_(e), this.shouldSaveSegmentTimingInfo_ && this.syncController_.saveSegmentTimingInfo({
                        segmentInfo: e,
                        shouldSaveTimelineMapping: "main" === this.loaderType_
                    });
                    let t = a7(e, this.sourceType_);
                    if (t && ("warn" === t.severity ? r_.log.warn(t.message) : this.logger_(t.message)), this.recordThroughput_(e), this.pendingSegment_ = null, this.state = "READY", e.isSyncRequest && (this.trigger("syncinfoupdate"), !e.hasAppendedData_)) {
                        this.logger_(`Throwing away un-appended sync request ${a2(e)}`);
                        return
                    }
                    this.logger_(`Appended ${a2(e)}`), this.addSegmentMetadataCue_(e), this.fetchAtBuffer_ = !0, this.currentTimeline_ === e.timeline || (this.timelineChangeController_.lastTimelineChange({
                        type: this.loaderType_,
                        from: this.currentTimeline_,
                        to: e.timeline
                    }), "main" !== this.loaderType_ || this.audioDisabled_ || this.timelineChangeController_.lastTimelineChange({
                        type: "audio",
                        from: this.currentTimeline_,
                        to: e.timeline
                    })), this.currentTimeline_ = e.timeline, this.trigger("syncinfoupdate");
                    let i = e.segment,
                        s = e.part,
                        r = i.end && this.currentTime_() - i.end > 3 * e.playlist.targetDuration,
                        n = s && s.end && this.currentTime_() - s.end > 3 * e.playlist.partTargetDuration;
                    if (r || n) {
                        this.logger_(`bad ${r?"segment":"part"} ${a2(e)}`), this.resetEverything();
                        return
                    }
                    null !== this.mediaIndex && this.trigger("bandwidthupdate"), this.trigger("progress"), this.mediaIndex = e.mediaIndex, this.partIndex = e.partIndex, this.isEndOfStream_(e.mediaIndex, e.playlist, e.partIndex) && this.endOfStream(), this.trigger("appended"), e.hasAppendedData_ && this.mediaAppends++, this.paused() || this.monitorBuffer_()
                }
                recordThroughput_(e) {
                    if (e.duration < aZ) {
                        this.logger_(`Ignoring segment's throughput because its duration of ${e.duration} is less than the min to record ${aZ}`);
                        return
                    }
                    let t = this.throughput.rate,
                        i = Date.now() - e.endOfAllRequests + 1,
                        s = Math.floor(e.byteLength / i * 8e3);
                    this.throughput.rate += (s - t) / ++this.throughput.count
                }
                addSegmentMetadataCue_(e) {
                    if (!this.segmentMetadataTrack_) return;
                    let t = e.segment,
                        i = t.start,
                        s = t.end;
                    if (!aJ(i) || !aJ(s)) return;
                    az(i, s, this.segmentMetadataTrack_);
                    let r = d().WebKitDataCue || d().VTTCue,
                        n = {
                            custom: t.custom,
                            dateTimeObject: t.dateTimeObject,
                            dateTimeString: t.dateTimeString,
                            programDateTime: t.programDateTime,
                            bandwidth: e.playlist.attributes.BANDWIDTH,
                            resolution: e.playlist.attributes.RESOLUTION,
                            codecs: e.playlist.attributes.CODECS,
                            byteLength: e.byteLength,
                            uri: e.uri,
                            timeline: e.timeline,
                            playlist: e.playlist.id,
                            start: i,
                            end: s
                        },
                        a = new r(i, s, JSON.stringify(n));
                    a.value = n, this.segmentMetadataTrack_.addCue(a)
                }
            }

            function oe() {}
            let ot = function(e) {
                    return "string" != typeof e ? e : e.replace(/./, e => e.toUpperCase())
                },
                oi = ["video", "audio"],
                os = (e, t) => {
                    let i = t[`${e}Buffer`];
                    return i && i.updating || t.queuePending[e]
                },
                or = (e, t) => {
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i];
                        if ("mediaSource" === s.type) break;
                        if (s.type === e) return i
                    }
                    return null
                },
                on = (e, t) => {
                    if (0 === t.queue.length) return;
                    let i = 0,
                        s = t.queue[i];
                    if ("mediaSource" === s.type) {
                        t.updating() || "closed" === t.mediaSource.readyState || (t.queue.shift(), s.action(t), s.doneFn && s.doneFn(), on("audio", t), on("video", t));
                        return
                    }
                    if (!("mediaSource" === e || !t.ready() || "closed" === t.mediaSource.readyState || os(e, t))) {
                        if (s.type !== e) {
                            if (null === (i = or(e, t.queue))) return;
                            s = t.queue[i]
                        }
                        if (t.queue.splice(i, 1), t.queuePending[e] = s, s.action(e, t), !s.doneFn) {
                            t.queuePending[e] = null, on(e, t);
                            return
                        }
                    }
                },
                oa = (e, t) => {
                    let i = t[`${e}Buffer`],
                        s = ot(e);
                    i && (i.removeEventListener("updateend", t[`on${s}UpdateEnd_`]), i.removeEventListener("error", t[`on${s}Error_`]), t.codecs[e] = null, t[`${e}Buffer`] = null)
                },
                oo = (e, t) => e && t && -1 !== Array.prototype.indexOf.call(e.sourceBuffers, t),
                ol = {
                    appendBuffer: (e, t, i) => (s, r) => {
                        let n = r[`${s}Buffer`];
                        if (oo(r.mediaSource, n)) {
                            r.logger_(`Appending segment ${t.mediaIndex}'s ${e.length} bytes to ${s}Buffer`);
                            try {
                                n.appendBuffer(e)
                            } catch (e) {
                                r.logger_(`Error with code ${e.code} ` + (22 === e.code ? "(QUOTA_EXCEEDED_ERR) " : "") + `when appending segment ${t.mediaIndex} to ${s}Buffer`), r.queuePending[s] = null, i(e)
                            }
                        }
                    },
                    remove: (e, t) => (i, s) => {
                        let r = s[`${i}Buffer`];
                        if (oo(s.mediaSource, r)) {
                            s.logger_(`Removing ${e} to ${t} from ${i}Buffer`);
                            try {
                                r.remove(e, t)
                            } catch (r) {
                                s.logger_(`Remove ${e} to ${t} from ${i}Buffer failed`)
                            }
                        }
                    },
                    timestampOffset: e => (t, i) => {
                        let s = i[`${t}Buffer`];
                        oo(i.mediaSource, s) && (i.logger_(`Setting ${t}timestampOffset to ${e}`), s.timestampOffset = e)
                    },
                    callback: e => (t, i) => {
                        e()
                    },
                    endOfStream: e => t => {
                        if ("open" === t.mediaSource.readyState) {
                            t.logger_(`Calling mediaSource endOfStream(${e||""})`);
                            try {
                                t.mediaSource.endOfStream(e)
                            } catch (e) {
                                r_.log.warn("Failed to call media source endOfStream", e)
                            }
                        }
                    },
                    duration: e => t => {
                        t.logger_(`Setting mediaSource duration to ${e}`);
                        try {
                            t.mediaSource.duration = e
                        } catch (e) {
                            r_.log.warn("Failed to set media source duration", e)
                        }
                    },
                    abort: () => (e, t) => {
                        if ("open" !== t.mediaSource.readyState) return;
                        let i = t[`${e}Buffer`];
                        if (oo(t.mediaSource, i)) {
                            t.logger_(`calling abort on ${e}Buffer`);
                            try {
                                i.abort()
                            } catch (t) {
                                r_.log.warn(`Failed to abort on ${e}Buffer`, t)
                            }
                        }
                    },
                    addSourceBuffer: (e, t) => i => {
                        let s = ot(e),
                            r = (0, C._5)(t);
                        i.logger_(`Adding ${e}Buffer with codec ${t} to mediaSource`);
                        let n = i.mediaSource.addSourceBuffer(r);
                        n.addEventListener("updateend", i[`on${s}UpdateEnd_`]), n.addEventListener("error", i[`on${s}Error_`]), i.codecs[e] = t, i[`${e}Buffer`] = n
                    },
                    removeSourceBuffer: e => t => {
                        let i = t[`${e}Buffer`];
                        if (oa(e, t), oo(t.mediaSource, i)) {
                            t.logger_(`Removing ${e}Buffer with codec ${t.codecs[e]} from mediaSource`);
                            try {
                                t.mediaSource.removeSourceBuffer(i)
                            } catch (t) {
                                r_.log.warn(`Failed to removeSourceBuffer ${e}Buffer`, t)
                            }
                        }
                    },
                    changeType: e => (t, i) => {
                        let s = i[`${t}Buffer`],
                            r = (0, C._5)(e);
                        if (!oo(i.mediaSource, s)) return;
                        let n = e.substring(0, e.indexOf(".")),
                            a = i.codecs[t];
                        if (a.substring(0, a.indexOf(".")) !== n) {
                            i.logger_(`changing ${t}Buffer codec from ${i.codecs[t]} to ${e}`);
                            try {
                                s.changeType(r), i.codecs[t] = e
                            } catch (e) {
                                r_.log.warn(`Failed to changeType on ${t}Buffer`, e)
                            }
                        }
                    }
                },
                oh = ({
                    type: e,
                    sourceUpdater: t,
                    action: i,
                    doneFn: s,
                    name: r
                }) => {
                    t.queue.push({
                        type: e,
                        action: i,
                        doneFn: s,
                        name: r
                    }), on(e, t)
                },
                od = (e, t) => i => {
                    let s = function(e) {
                        if (0 === e.length) return "Buffered Ranges are empty";
                        let t = "Buffered Ranges: \n";
                        for (let i = 0; i < e.length; i++) {
                            let s = e.start(i),
                                r = e.end(i);
                            t += `${s} --> ${r}. Duration (${r-s})
`
                        }
                        return t
                    }(t[`${e}Buffered`]());
                    if (t.logger_(`received "updateend" event for ${e} Source Buffer: `, s), t.queuePending[e]) {
                        let i = t.queuePending[e].doneFn;
                        t.queuePending[e] = null, i && i(t[`${e}Error_`])
                    }
                    on(e, t)
                };
            class ou extends r_.EventTarget {
                constructor(e) {
                    super(), this.mediaSource = e, this.sourceopenListener_ = () => on("mediaSource", this), this.mediaSource.addEventListener("sourceopen", this.sourceopenListener_), this.logger_ = rE("SourceUpdater"), this.audioTimestampOffset_ = 0, this.videoTimestampOffset_ = 0, this.queue = [], this.queuePending = {
                        audio: null,
                        video: null
                    }, this.delayedAudioAppendQueue_ = [], this.videoAppendQueued_ = !1, this.codecs = {}, this.onVideoUpdateEnd_ = od("video", this), this.onAudioUpdateEnd_ = od("audio", this), this.onVideoError_ = e => {
                        this.videoError_ = e
                    }, this.onAudioError_ = e => {
                        this.audioError_ = e
                    }, this.createdSourceBuffers_ = !1, this.initializedEme_ = !1, this.triggeredReady_ = !1
                }
                initializedEme() {
                    this.initializedEme_ = !0, this.triggerReady()
                }
                hasCreatedSourceBuffers() {
                    return this.createdSourceBuffers_
                }
                hasInitializedAnyEme() {
                    return this.initializedEme_
                }
                ready() {
                    return this.hasCreatedSourceBuffers() && this.hasInitializedAnyEme()
                }
                createSourceBuffers(e) {
                    this.hasCreatedSourceBuffers() || (this.addOrChangeSourceBuffers(e), this.createdSourceBuffers_ = !0, this.trigger("createdsourcebuffers"), this.triggerReady())
                }
                triggerReady() {
                    this.ready() && !this.triggeredReady_ && (this.triggeredReady_ = !0, this.trigger("ready"))
                }
                addSourceBuffer(e, t) {
                    oh({
                        type: "mediaSource",
                        sourceUpdater: this,
                        action: ol.addSourceBuffer(e, t),
                        name: "addSourceBuffer"
                    })
                }
                abort(e) {
                    oh({
                        type: e,
                        sourceUpdater: this,
                        action: ol.abort(e),
                        name: "abort"
                    })
                }
                removeSourceBuffer(e) {
                    if (!this.canRemoveSourceBuffer()) {
                        r_.log.error("removeSourceBuffer is not supported!");
                        return
                    }
                    oh({
                        type: "mediaSource",
                        sourceUpdater: this,
                        action: ol.removeSourceBuffer(e),
                        name: "removeSourceBuffer"
                    })
                }
                canRemoveSourceBuffer() {
                    return !r_.browser.IS_FIREFOX && d().MediaSource && d().MediaSource.prototype && "function" == typeof d().MediaSource.prototype.removeSourceBuffer
                }
                static canChangeType() {
                    return d().SourceBuffer && d().SourceBuffer.prototype && "function" == typeof d().SourceBuffer.prototype.changeType
                }
                canChangeType() {
                    return this.constructor.canChangeType()
                }
                changeType(e, t) {
                    if (!this.canChangeType()) {
                        r_.log.error("changeType is not supported!");
                        return
                    }
                    oh({
                        type: e,
                        sourceUpdater: this,
                        action: ol.changeType(t),
                        name: "changeType"
                    })
                }
                addOrChangeSourceBuffers(e) {
                    if (!e || "object" != typeof e || 0 === Object.keys(e).length) throw Error("Cannot addOrChangeSourceBuffers to undefined codecs");
                    Object.keys(e).forEach(t => {
                        let i = e[t];
                        if (!this.hasCreatedSourceBuffers()) return this.addSourceBuffer(t, i);
                        this.canChangeType() && this.changeType(t, i)
                    })
                }
                appendBuffer(e, t) {
                    let {
                        segmentInfo: i,
                        type: s,
                        bytes: r
                    } = e;
                    if (this.processedAppend_ = !0, "audio" === s && this.videoBuffer && !this.videoAppendQueued_) {
                        this.delayedAudioAppendQueue_.push([e, t]), this.logger_(`delayed audio append of ${r.length} until video append`);
                        return
                    }
                    if (oh({
                            type: s,
                            sourceUpdater: this,
                            action: ol.appendBuffer(r, i || {
                                mediaIndex: -1
                            }, t),
                            doneFn: t,
                            name: "appendBuffer"
                        }), "video" === s) {
                        if (this.videoAppendQueued_ = !0, !this.delayedAudioAppendQueue_.length) return;
                        let e = this.delayedAudioAppendQueue_.slice();
                        this.logger_(`queuing delayed audio ${e.length} appendBuffers`), this.delayedAudioAppendQueue_.length = 0, e.forEach(e => {
                            this.appendBuffer.apply(this, e)
                        })
                    }
                }
                audioBuffered() {
                    return oo(this.mediaSource, this.audioBuffer) && this.audioBuffer.buffered ? this.audioBuffer.buffered : rx()
                }
                videoBuffered() {
                    return oo(this.mediaSource, this.videoBuffer) && this.videoBuffer.buffered ? this.videoBuffer.buffered : rx()
                }
                buffered() {
                    let e = oo(this.mediaSource, this.videoBuffer) ? this.videoBuffer : null,
                        t = oo(this.mediaSource, this.audioBuffer) ? this.audioBuffer : null;
                    return t && !e ? this.audioBuffered() : e && !t ? this.videoBuffered() : rM(this.audioBuffered(), this.videoBuffered())
                }
                setDuration(e, t = oe) {
                    oh({
                        type: "mediaSource",
                        sourceUpdater: this,
                        action: ol.duration(e),
                        name: "duration",
                        doneFn: t
                    })
                }
                endOfStream(e = null, t = oe) {
                    "string" != typeof e && (e = void 0), oh({
                        type: "mediaSource",
                        sourceUpdater: this,
                        action: ol.endOfStream(e),
                        name: "endOfStream",
                        doneFn: t
                    })
                }
                removeAudio(e, t, i = oe) {
                    if (!this.audioBuffered().length || 0 === this.audioBuffered().end(0)) {
                        i();
                        return
                    }
                    oh({
                        type: "audio",
                        sourceUpdater: this,
                        action: ol.remove(e, t),
                        doneFn: i,
                        name: "remove"
                    })
                }
                removeVideo(e, t, i = oe) {
                    if (!this.videoBuffered().length || 0 === this.videoBuffered().end(0)) {
                        i();
                        return
                    }
                    oh({
                        type: "video",
                        sourceUpdater: this,
                        action: ol.remove(e, t),
                        doneFn: i,
                        name: "remove"
                    })
                }
                updating() {
                    return !!(os("audio", this) || os("video", this))
                }
                audioTimestampOffset(e) {
                    return void 0 !== e && this.audioBuffer && this.audioTimestampOffset_ !== e && (oh({
                        type: "audio",
                        sourceUpdater: this,
                        action: ol.timestampOffset(e),
                        name: "timestampOffset"
                    }), this.audioTimestampOffset_ = e), this.audioTimestampOffset_
                }
                videoTimestampOffset(e) {
                    return void 0 !== e && this.videoBuffer && this.videoTimestampOffset !== e && (oh({
                        type: "video",
                        sourceUpdater: this,
                        action: ol.timestampOffset(e),
                        name: "timestampOffset"
                    }), this.videoTimestampOffset_ = e), this.videoTimestampOffset_
                }
                audioQueueCallback(e) {
                    this.audioBuffer && oh({
                        type: "audio",
                        sourceUpdater: this,
                        action: ol.callback(e),
                        name: "callback"
                    })
                }
                videoQueueCallback(e) {
                    this.videoBuffer && oh({
                        type: "video",
                        sourceUpdater: this,
                        action: ol.callback(e),
                        name: "callback"
                    })
                }
                dispose() {
                    this.trigger("dispose"), oi.forEach(e => {
                        this.abort(e), this.canRemoveSourceBuffer() ? this.removeSourceBuffer(e) : this[`${e}QueueCallback`](() => oa(e, this))
                    }), this.videoAppendQueued_ = !1, this.delayedAudioAppendQueue_.length = 0, this.sourceopenListener_ && this.mediaSource.removeEventListener("sourceopen", this.sourceopenListener_), this.off()
                }
            }
            let oc = e => decodeURIComponent(escape(String.fromCharCode.apply(null, e))),
                op = e => Array.from(new Uint8Array(e)).map(e => e.toString(16).padStart(2, "0")).join(""),
                om = new Uint8Array("\n\n".split("").map(e => e.charCodeAt(0)));
            class og extends Error {
                constructor() {
                    super("Trying to parse received VTT cues, but there is no WebVTT. Make sure vtt.js is loaded.")
                }
            }
            class of extends a9 {
                constructor(e, t = {}) {
                    super(e, t), this.mediaSource_ = null, this.subtitlesTrack_ = null, this.featuresNativeTextTracks_ = e.featuresNativeTextTracks, this.loadVttJs = e.loadVttJs, this.shouldSaveSegmentTimingInfo_ = !1
                }
                createTransmuxer_() {
                    return null
                }
                buffered_() {
                    if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues || !this.subtitlesTrack_.cues.length) return rx();
                    let e = this.subtitlesTrack_.cues;
                    return rx([
                        [e[0].startTime, e[e.length - 1].startTime]
                    ])
                }
                initSegmentForMap(e, t = !1) {
                    if (!e) return null;
                    let i = nE(e),
                        s = this.initSegments_[i];
                    if (t && !s && e.bytes) {
                        let t = new Uint8Array(om.byteLength + e.bytes.byteLength);
                        t.set(e.bytes), t.set(om, e.bytes.byteLength), this.initSegments_[i] = s = {
                            resolvedUri: e.resolvedUri,
                            byterange: e.byterange,
                            bytes: t
                        }
                    }
                    return s || e
                }
                couldBeginLoading_() {
                    return this.playlist_ && this.subtitlesTrack_ && !this.paused()
                }
                init_() {
                    return this.state = "READY", this.resetEverything(), this.monitorBuffer_()
                }
                track(e) {
                    return void 0 === e || (this.subtitlesTrack_ = e, "INIT" === this.state && this.couldBeginLoading_() && this.init_()), this.subtitlesTrack_
                }
                remove(e, t) {
                    az(e, t, this.subtitlesTrack_)
                }
                fillBuffer_() {
                    let e = this.chooseNextRequest_();
                    if (e) {
                        if (null === this.syncController_.timestampOffsetForTimeline(e.timeline)) {
                            this.syncController_.one("timestampoffset", () => {
                                this.state = "READY", this.paused() || this.monitorBuffer_()
                            }), this.state = "WAITING_ON_TIMELINE";
                            return
                        }
                        this.loadSegment_(e)
                    }
                }
                timestampOffsetForSegment_() {
                    return null
                }
                chooseNextRequest_() {
                    return this.skipEmptySegments_(super.chooseNextRequest_())
                }
                skipEmptySegments_(e) {
                    for (; e && e.segment.empty;) {
                        if (e.mediaIndex + 1 >= e.playlist.segments.length) {
                            e = null;
                            break
                        }
                        e = this.generateSegmentInfo_({
                            playlist: e.playlist,
                            mediaIndex: e.mediaIndex + 1,
                            startOfSegment: e.startOfSegment + e.duration,
                            isSyncRequest: e.isSyncRequest
                        })
                    }
                    return e
                }
                stopForError(e) {
                    this.error(e), this.state = "READY", this.pause(), this.trigger("error")
                }
                segmentRequestFinished_(e, t, i) {
                    if (!this.subtitlesTrack_) {
                        this.state = "READY";
                        return
                    }
                    if (this.saveTransferStats_(t.stats), !this.pendingSegment_) {
                        this.state = "READY", this.mediaRequestsAborted += 1;
                        return
                    }
                    if (e) {
                        e.code === as.TIMEOUT && this.handleTimeout_(), e.code === as.ABORTED ? this.mediaRequestsAborted += 1 : this.mediaRequestsErrored += 1, this.stopForError(e);
                        return
                    }
                    let s = this.pendingSegment_;
                    this.saveBandwidthRelatedStats_(s.duration, t.stats), t.key && this.segmentKey(t.key, !0), this.state = "APPENDING", this.trigger("appending");
                    let r = s.segment;
                    if (r.map && (r.map.bytes = t.map.bytes), s.bytes = t.bytes, "function" != typeof d().WebVTT && "function" == typeof this.loadVttJs) {
                        this.state = "WAITING_ON_VTTJS", this.loadVttJs().then(() => this.segmentRequestFinished_(e, t, i), () => this.stopForError({
                            message: "Error loading vtt.js",
                            metadata: {
                                errorType: r_.Error.VttLoadError
                            }
                        }));
                        return
                    }
                    r.requested = !0;
                    try {
                        this.parseVTTCues_(s)
                    } catch (e) {
                        this.stopForError({
                            message: e.message,
                            metadata: {
                                errorType: r_.Error.VttCueParsingError
                            }
                        });
                        return
                    }
                    if (this.updateTimeMapping_(s, this.syncController_.timelines[s.timeline], this.playlist_), s.cues.length ? s.timingInfo = {
                            start: s.cues[0].startTime,
                            end: s.cues[s.cues.length - 1].endTime
                        } : s.timingInfo = {
                            start: s.startOfSegment,
                            end: s.startOfSegment + s.duration
                        }, s.isSyncRequest) {
                        this.trigger("syncinfoupdate"), this.pendingSegment_ = null, this.state = "READY";
                        return
                    }
                    s.byteLength = s.bytes.byteLength, this.mediaSecondsLoaded += r.duration, s.cues.forEach(e => {
                        this.subtitlesTrack_.addCue(this.featuresNativeTextTracks_ ? new(d()).VTTCue(e.startTime, e.endTime, e.text) : e)
                    }), aW(this.subtitlesTrack_), this.handleAppendsDone_()
                }
                handleData_() {}
                updateTimingInfoEnd_() {}
                parseVTTCues_(e) {
                    let t;
                    let i = !1;
                    if ("function" != typeof d().WebVTT) throw new og;
                    "function" == typeof d().TextDecoder ? t = new(d()).TextDecoder("utf8") : (t = d().WebVTT.StringDecoder(), i = !0);
                    let s = new(d()).WebVTT.Parser(d(), d().vttjs, t);
                    if (e.cues = [], e.timestampmap = {
                            MPEGTS: 0,
                            LOCAL: 0
                        }, s.oncue = e.cues.push.bind(e.cues), s.ontimestampmap = t => {
                            e.timestampmap = t
                        }, s.onparsingerror = e => {
                            r_.log.warn("Error encountered when parsing cues: " + e.message)
                        }, e.segment.map) {
                        let t = e.segment.map.bytes;
                        i && (t = oc(t)), s.parse(t)
                    }
                    let r = e.bytes;
                    i && (r = oc(r)), s.parse(r), s.flush()
                }
                updateTimeMapping_(e, t, i) {
                    let s = e.segment;
                    if (!t) return;
                    if (!e.cues.length) {
                        s.empty = !0;
                        return
                    }
                    let {
                        MPEGTS: r,
                        LOCAL: n
                    } = e.timestampmap, a = r / D.ONE_SECOND_IN_TS - n + t.mapping;
                    if (e.cues.forEach(e => {
                            let i = e.endTime - e.startTime,
                                s = 0 === r ? e.startTime + a : this.handleRollover_(e.startTime + a, t.time);
                            e.startTime = Math.max(s, 0), e.endTime = Math.max(s + i, 0)
                        }), !i.syncInfo) {
                        let t = e.cues[0].startTime,
                            r = e.cues[e.cues.length - 1].startTime;
                        i.syncInfo = {
                            mediaSequence: i.mediaSequence + e.mediaIndex,
                            time: Math.min(t, r - s.duration)
                        }
                    }
                }
                handleRollover_(e, t) {
                    let i;
                    if (null === t) return e;
                    let s = e * D.ONE_SECOND_IN_TS,
                        r = t * D.ONE_SECOND_IN_TS;
                    for (i = r < s ? -8589934592 : 8589934592; Math.abs(s - r) > 4294967296;) s += i;
                    return s / D.ONE_SECOND_IN_TS
                }
            }
            let o_ = function(e, t) {
                    let i = e.cues;
                    for (let e = 0; e < i.length; e++) {
                        let s = i[e];
                        if (t >= s.adStartTime && t <= s.adEndTime) return s
                    }
                    return null
                },
                oy = function(e, t, i = 0) {
                    let s;
                    if (!e.segments) return;
                    let r = i;
                    for (let i = 0; i < e.segments.length; i++) {
                        let n = e.segments[i];
                        if (s || (s = o_(t, r + n.duration / 2)), s) {
                            if ("cueIn" in n) {
                                s.endTime = r, s.adEndTime = r, r += n.duration, s = null;
                                continue
                            }
                            if (r < s.endTime) {
                                r += n.duration;
                                continue
                            }
                            s.endTime += n.duration
                        } else if ("cueOut" in n && ((s = new(d()).VTTCue(r, r + n.duration, n.cueOut)).adStartTime = r, s.adEndTime = r + parseFloat(n.cueOut), t.addCue(s)), "cueOutCont" in n) {
                            let [e, i] = n.cueOutCont.split("/").map(parseFloat);
                            (s = new(d()).VTTCue(r, r + n.duration, "")).adStartTime = r - e, s.adEndTime = s.adStartTime + i, t.addCue(s)
                        }
                        r += n.duration
                    }
                };
            class ov {
                constructor({
                    start: e,
                    end: t,
                    segmentIndex: i,
                    partIndex: s = null,
                    appended: r = !1
                }) {
                    this.start_ = e, this.end_ = t, this.segmentIndex_ = i, this.partIndex_ = s, this.appended_ = r
                }
                isInRange(e) {
                    return e >= this.start && e < this.end
                }
                markAppended() {
                    this.appended_ = !0
                }
                resetAppendedStatus() {
                    this.appended_ = !1
                }
                get isAppended() {
                    return this.appended_
                }
                get start() {
                    return this.start_
                }
                get end() {
                    return this.end_
                }
                get segmentIndex() {
                    return this.segmentIndex_
                }
                get partIndex() {
                    return this.partIndex_
                }
            }
            class oT {
                constructor(e, t = []) {
                    this.segmentSyncInfo_ = e, this.partsSyncInfo_ = t
                }
                get segmentSyncInfo() {
                    return this.segmentSyncInfo_
                }
                get partsSyncInfo() {
                    return this.partsSyncInfo_
                }
                get hasPartsSyncInfo() {
                    return this.partsSyncInfo_.length > 0
                }
                resetAppendStatus() {
                    this.segmentSyncInfo_.resetAppendedStatus(), this.partsSyncInfo_.forEach(e => e.resetAppendedStatus())
                }
            }
            class ob {
                constructor() {
                    this.storage_ = new Map, this.diagnostics_ = "", this.isReliable_ = !1, this.start_ = -1 / 0, this.end_ = 1 / 0
                }
                get start() {
                    return this.start_
                }
                get end() {
                    return this.end_
                }
                get diagnostics() {
                    return this.diagnostics_
                }
                get isReliable() {
                    return this.isReliable_
                }
                resetAppendedStatus() {
                    this.storage_.forEach(e => e.resetAppendStatus())
                }
                update(e, t) {
                    let {
                        mediaSequence: i,
                        segments: s
                    } = e;
                    if (this.isReliable_ = this.isReliablePlaylist_(i, s), this.isReliable_) return this.updateStorage_(s, i, this.calculateBaseTime_(i, t))
                }
                getSyncInfoForTime(e) {
                    for (let {
                            segmentSyncInfo: t,
                            partsSyncInfo: i
                        } of this.storage_.values())
                        if (i.length) {
                            for (let t of i)
                                if (t.isInRange(e)) return t
                        } else if (t.isInRange(e)) return t;
                    return null
                }
                updateStorage_(e, t, i) {
                    let s = new Map,
                        r = "\n",
                        n = i,
                        a = t;
                    this.start_ = n, e.forEach((e, t) => {
                        let i = this.storage_.get(a),
                            o = n,
                            l = o + e.duration,
                            h = !!(i && i.segmentSyncInfo && i.segmentSyncInfo.isAppended),
                            d = new ov({
                                start: o,
                                end: l,
                                appended: h,
                                segmentIndex: t
                            });
                        e.syncInfo = d;
                        let u = n,
                            c = (e.parts || []).map((e, s) => {
                                let n = u,
                                    o = u + e.duration,
                                    l = !!(i && i.partsSyncInfo && i.partsSyncInfo[s] && i.partsSyncInfo[s].isAppended),
                                    h = new ov({
                                        start: n,
                                        end: o,
                                        appended: l,
                                        segmentIndex: t,
                                        partIndex: s
                                    });
                                return u = o, r += `Media Sequence: ${a}.${s} | Range: ${n} --> ${o} | Appended: ${l}
`, e.syncInfo = h, h
                            });
                        s.set(a, new oT(d, c)), r += `${aU(e.resolvedUri)} | Media Sequence: ${a} | Range: ${o} --> ${l} | Appended: ${h}
`, a++, n = l
                    }), this.end_ = n, this.storage_ = s, this.diagnostics_ = r
                }
                calculateBaseTime_(e, t) {
                    return this.storage_.size ? this.storage_.has(e) ? this.storage_.get(e).segmentSyncInfo.start : t : 0
                }
                isReliablePlaylist_(e, t) {
                    return null != e && Array.isArray(t) && t.length
                }
            }
            let oS = [{
                name: "VOD",
                run: (e, t, i, s, r) => i !== 1 / 0 ? {
                    time: 0,
                    segmentIndex: 0,
                    partIndex: null
                } : null
            }, {
                name: "MediaSequence",
                run: (e, t, i, s, r, n) => {
                    let a = e.getMediaSequenceSync(n);
                    if (!a || !a.isReliable) return null;
                    let o = a.getSyncInfoForTime(r);
                    return o ? {
                        time: o.start,
                        partIndex: o.partIndex,
                        segmentIndex: o.segmentIndex
                    } : null
                }
            }, {
                name: "ProgramDateTime",
                run: (e, t, i, s, r) => {
                    if (!Object.keys(e.timelineToDatetimeMappings).length) return null;
                    let n = null,
                        a = null,
                        o = r$(t);
                    r = r || 0;
                    for (let i = 0; i < o.length; i++) {
                        let s = t.endList || 0 === r ? i : o.length - (i + 1),
                            l = o[s],
                            h = l.segment,
                            d = e.timelineToDatetimeMappings[h.timeline];
                        if (!d || !h.dateTimeObject) continue;
                        let u = h.dateTimeObject.getTime() / 1e3 + d;
                        if (h.parts && "number" == typeof l.partIndex)
                            for (let e = 0; e < l.partIndex; e++) u += h.parts[e].duration;
                        let c = Math.abs(r - u);
                        if (null !== a && (0 === c || a < c)) break;
                        a = c, n = {
                            time: u,
                            segmentIndex: l.segmentIndex,
                            partIndex: l.partIndex
                        }
                    }
                    return n
                }
            }, {
                name: "Segment",
                run: (e, t, i, s, r) => {
                    let n = null,
                        a = null;
                    r = r || 0;
                    let o = r$(t);
                    for (let e = 0; e < o.length; e++) {
                        let i = t.endList || 0 === r ? e : o.length - (e + 1),
                            l = o[i],
                            h = l.segment,
                            d = l.part && l.part.start || h && h.start;
                        if (h.timeline === s && void 0 !== d) {
                            let e = Math.abs(r - d);
                            if (null !== a && a < e) break;
                            (!n || null === a || a >= e) && (a = e, n = {
                                time: d,
                                segmentIndex: l.segmentIndex,
                                partIndex: l.partIndex
                            })
                        }
                    }
                    return n
                }
            }, {
                name: "Discontinuity",
                run: (e, t, i, s, r) => {
                    let n = null;
                    if (r = r || 0, t.discontinuityStarts && t.discontinuityStarts.length) {
                        let i = null;
                        for (let s = 0; s < t.discontinuityStarts.length; s++) {
                            let a = t.discontinuityStarts[s],
                                o = t.discontinuitySequence + s + 1,
                                l = e.discontinuities[o];
                            if (l) {
                                let e = Math.abs(r - l.time);
                                if (null !== i && i < e) break;
                                (!n || null === i || i >= e) && (i = e, n = {
                                    time: l.time,
                                    segmentIndex: a,
                                    partIndex: null
                                })
                            }
                        }
                    }
                    return n
                }
            }, {
                name: "Playlist",
                run: (e, t, i, s, r) => t.syncInfo ? {
                    time: t.syncInfo.time,
                    segmentIndex: t.syncInfo.mediaSequence - t.mediaSequence,
                    partIndex: null
                } : null
            }];
            class ok extends r_.EventTarget {
                constructor(e = {}) {
                    super(), this.timelines = [], this.discontinuities = [], this.timelineToDatetimeMappings = {}, this.mediaSequenceStorage_ = {
                        main: new ob,
                        audio: new ob,
                        vtt: new ob
                    }, this.logger_ = rE("SyncController")
                }
                getMediaSequenceSync(e) {
                    return this.mediaSequenceStorage_[e] || null
                }
                getSyncPoint(e, t, i, s, r) {
                    if (t !== 1 / 0) return oS.find(({
                        name: e
                    }) => "VOD" === e).run(this, e, t);
                    let n = this.runStrategies_(e, t, i, s, r);
                    if (!n.length) return null;
                    for (let t of n) {
                        let {
                            syncPoint: i,
                            strategy: r
                        } = t, {
                            segmentIndex: n,
                            time: a
                        } = i;
                        if (n < 0) continue;
                        let o = a + e.segments[n].duration;
                        if (this.logger_(`Strategy: ${r}. Current time: ${s}. selected segment: ${n}. Time: [${a} -> ${o}]}`), s >= a && s < o) return this.logger_("Found sync point with exact match: ", i), i
                    }
                    return this.selectSyncPoint_(n, {
                        key: "time",
                        value: s
                    })
                }
                getExpiredTime(e, t) {
                    if (!e || !e.segments) return null;
                    let i = this.runStrategies_(e, t, e.discontinuitySequence, 0);
                    if (!i.length) return null;
                    let s = this.selectSyncPoint_(i, {
                        key: "segmentIndex",
                        value: 0
                    });
                    return s.segmentIndex > 0 && (s.time *= -1), Math.abs(s.time + rQ({
                        defaultDuration: e.targetDuration,
                        durationList: e.segments,
                        startIndex: s.segmentIndex,
                        endIndex: 0
                    }))
                }
                runStrategies_(e, t, i, s, r) {
                    let n = [];
                    for (let a = 0; a < oS.length; a++) {
                        let o = oS[a],
                            l = o.run(this, e, t, i, s, r);
                        l && (l.strategy = o.name, n.push({
                            strategy: o.name,
                            syncPoint: l
                        }))
                    }
                    return n
                }
                selectSyncPoint_(e, t) {
                    let i = e[0].syncPoint,
                        s = Math.abs(e[0].syncPoint[t.key] - t.value),
                        r = e[0].strategy;
                    for (let n = 1; n < e.length; n++) {
                        let a = Math.abs(e[n].syncPoint[t.key] - t.value);
                        a < s && (s = a, i = e[n].syncPoint, r = e[n].strategy)
                    }
                    return this.logger_(`syncPoint for [${t.key}: ${t.value}] chosen with strategy [${r}]: [time:${i.time}, segmentIndex:${i.segmentIndex}` + ("number" == typeof i.partIndex ? `,partIndex:${i.partIndex}` : "") + "]"), i
                }
                saveExpiredSegmentInfo(e, t) {
                    let i = t.mediaSequence - e.mediaSequence;
                    if (i > 86400) {
                        r_.log.warn(`Not saving expired segment info. Media sequence gap ${i} is too large.`);
                        return
                    }
                    for (let s = i - 1; s >= 0; s--) {
                        let i = e.segments[s];
                        if (i && void 0 !== i.start) {
                            t.syncInfo = {
                                mediaSequence: e.mediaSequence + s,
                                time: i.start
                            }, this.logger_(`playlist refresh sync: [time:${t.syncInfo.time}, mediaSequence: ${t.syncInfo.mediaSequence}]`), this.trigger("syncinfoupdate");
                            break
                        }
                    }
                }
                setDateTimeMappingForStart(e) {
                    if (this.timelineToDatetimeMappings = {}, e.segments && e.segments.length && e.segments[0].dateTimeObject) {
                        let t = e.segments[0],
                            i = t.dateTimeObject.getTime() / 1e3;
                        this.timelineToDatetimeMappings[t.timeline] = -i
                    }
                }
                saveSegmentTimingInfo({
                    segmentInfo: e,
                    shouldSaveTimelineMapping: t
                }) {
                    let i = this.calculateSegmentTimeMapping_(e, e.timingInfo, t),
                        s = e.segment;
                    i && (this.saveDiscontinuitySyncInfo_(e), e.playlist.syncInfo || (e.playlist.syncInfo = {
                        mediaSequence: e.playlist.mediaSequence + e.mediaIndex,
                        time: s.start
                    }));
                    let r = s.dateTimeObject;
                    s.discontinuity && t && r && (this.timelineToDatetimeMappings[s.timeline] = -(r.getTime() / 1e3))
                }
                timestampOffsetForTimeline(e) {
                    return void 0 === this.timelines[e] ? null : this.timelines[e].time
                }
                mappingForTimeline(e) {
                    return void 0 === this.timelines[e] ? null : this.timelines[e].mapping
                }
                calculateSegmentTimeMapping_(e, t, i) {
                    let s, r;
                    let n = e.segment,
                        a = e.part,
                        o = this.timelines[e.timeline];
                    if ("number" == typeof e.timestampOffset) o = {
                        time: e.startOfSegment,
                        mapping: e.startOfSegment - t.start
                    }, i && (this.timelines[e.timeline] = o, this.trigger("timestampoffset"), this.logger_(`time mapping for timeline ${e.timeline}: [time: ${o.time}] [mapping: ${o.mapping}]`)), s = e.startOfSegment, r = t.end + o.mapping;
                    else {
                        if (!o) return !1;
                        s = t.start + o.mapping, r = t.end + o.mapping
                    }
                    return a && (a.start = s, a.end = r), (!n.start || s < n.start) && (n.start = s), n.end = r, !0
                }
                saveDiscontinuitySyncInfo_(e) {
                    let t = e.playlist,
                        i = e.segment;
                    if (i.discontinuity) this.discontinuities[i.timeline] = {
                        time: i.start,
                        accuracy: 0
                    };
                    else if (t.discontinuityStarts && t.discontinuityStarts.length)
                        for (let s = 0; s < t.discontinuityStarts.length; s++) {
                            let r = t.discontinuityStarts[s],
                                n = t.discontinuitySequence + s + 1,
                                a = r - e.mediaIndex,
                                o = Math.abs(a);
                            if (!this.discontinuities[n] || this.discontinuities[n].accuracy > o) {
                                let s;
                                s = a < 0 ? i.start - rQ({
                                    defaultDuration: t.targetDuration,
                                    durationList: t.segments,
                                    startIndex: e.mediaIndex,
                                    endIndex: r
                                }) : i.end + rQ({
                                    defaultDuration: t.targetDuration,
                                    durationList: t.segments,
                                    startIndex: e.mediaIndex + 1,
                                    endIndex: r
                                }), this.discontinuities[n] = {
                                    time: s,
                                    accuracy: o
                                }
                            }
                        }
                }
                dispose() {
                    this.trigger("dispose"), this.off()
                }
            }
            class oC extends r_.EventTarget {
                constructor() {
                    super(), this.pendingTimelineChanges_ = {}, this.lastTimelineChanges_ = {}
                }
                clearPendingTimelineChange(e) {
                    this.pendingTimelineChanges_[e] = null, this.trigger("pendingtimelinechange")
                }
                pendingTimelineChange({
                    type: e,
                    from: t,
                    to: i
                }) {
                    return "number" == typeof t && "number" == typeof i && (this.pendingTimelineChanges_[e] = {
                        type: e,
                        from: t,
                        to: i
                    }, this.trigger("pendingtimelinechange")), this.pendingTimelineChanges_[e]
                }
                lastTimelineChange({
                    type: e,
                    from: t,
                    to: i
                }) {
                    return "number" == typeof t && "number" == typeof i && (this.lastTimelineChanges_[e] = {
                        type: e,
                        from: t,
                        to: i
                    }, delete this.pendingTimelineChanges_[e], this.trigger("timelinechange")), this.lastTimelineChanges_[e]
                }
                dispose() {
                    this.trigger("dispose"), this.pendingTimelineChanges_ = {}, this.lastTimelineChanges_ = {}, this.off()
                }
            }
            var oE = nZ(n0(n1(function() {
                var e, t, s, r = function() {
                    function e() {
                        this.listeners = {}
                    }
                    var t = e.prototype;
                    return t.on = function(e, t) {
                        this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t)
                    }, t.off = function(e, t) {
                        if (!this.listeners[e]) return !1;
                        var i = this.listeners[e].indexOf(t);
                        return this.listeners[e] = this.listeners[e].slice(0), this.listeners[e].splice(i, 1), i > -1
                    }, t.trigger = function(e) {
                        var t = this.listeners[e];
                        if (t) {
                            if (2 == arguments.length)
                                for (var i = t.length, s = 0; s < i; ++s) t[s].call(this, arguments[1]);
                            else
                                for (var r = Array.prototype.slice.call(arguments, 1), n = t.length, a = 0; a < n; ++a) t[a].apply(this, r)
                        }
                    }, t.dispose = function() {
                        this.listeners = {}
                    }, t.pipe = function(e) {
                        this.on("data", function(t) {
                            e.push(t)
                        })
                    }, e
                }();
                let n = function() {
                        let e, t, i, s, r, n, a, o;
                        let l = [
                                [
                                    [],
                                    [],
                                    [],
                                    [],
                                    []
                                ],
                                [
                                    [],
                                    [],
                                    [],
                                    [],
                                    []
                                ]
                            ],
                            h = l[0],
                            d = l[1],
                            u = h[4],
                            c = d[4],
                            p = [],
                            m = [];
                        for (e = 0; e < 256; e++) m[(p[e] = e << 1 ^ (e >> 7) * 283) ^ e] = e;
                        for (t = i = 0; !u[t]; t ^= s || 1, i = m[i] || 1)
                            for (e = 0, n = (n = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4) >> 8 ^ 255 & n ^ 99, u[t] = n, c[n] = t, o = 16843009 * p[r = p[s = p[t]]] ^ 65537 * r ^ 257 * s ^ 16843008 * t, a = 257 * p[n] ^ 16843008 * n; e < 4; e++) h[e][t] = a = a << 24 ^ a >>> 8, d[e][n] = o = o << 24 ^ o >>> 8;
                        for (e = 0; e < 5; e++) h[e] = h[e].slice(0), d[e] = d[e].slice(0);
                        return l
                    },
                    a = null;
                class o {
                    constructor(e) {
                        let t, i, s;
                        a || (a = n()), this._tables = [
                            [a[0][0].slice(), a[0][1].slice(), a[0][2].slice(), a[0][3].slice(), a[0][4].slice()],
                            [a[1][0].slice(), a[1][1].slice(), a[1][2].slice(), a[1][3].slice(), a[1][4].slice()]
                        ];
                        let r = this._tables[0][4],
                            o = this._tables[1],
                            l = e.length,
                            h = 1;
                        if (4 !== l && 6 !== l && 8 !== l) throw Error("Invalid aes key size");
                        let d = e.slice(0),
                            u = [];
                        for (this._key = [d, u], t = l; t < 4 * l + 28; t++) s = d[t - 1], (t % l == 0 || 8 === l && t % l == 4) && (s = r[s >>> 24] << 24 ^ r[s >> 16 & 255] << 16 ^ r[s >> 8 & 255] << 8 ^ r[255 & s], t % l == 0 && (s = s << 8 ^ s >>> 24 ^ h << 24, h = h << 1 ^ (h >> 7) * 283)), d[t] = d[t - l] ^ s;
                        for (i = 0; t; i++, t--) s = d[3 & i ? t : t - 4], t <= 4 || i < 4 ? u[i] = s : u[i] = o[0][r[s >>> 24]] ^ o[1][r[s >> 16 & 255]] ^ o[2][r[s >> 8 & 255]] ^ o[3][r[255 & s]]
                    }
                    decrypt(e, t, i, s, r, n) {
                        let a, o, l, h;
                        let d = this._key[1],
                            u = e ^ d[0],
                            c = s ^ d[1],
                            p = i ^ d[2],
                            m = t ^ d[3],
                            g = d.length / 4 - 2,
                            f = 4,
                            _ = this._tables[1],
                            y = _[0],
                            v = _[1],
                            T = _[2],
                            b = _[3],
                            S = _[4];
                        for (h = 0; h < g; h++) a = y[u >>> 24] ^ v[c >> 16 & 255] ^ T[p >> 8 & 255] ^ b[255 & m] ^ d[f], o = y[c >>> 24] ^ v[p >> 16 & 255] ^ T[m >> 8 & 255] ^ b[255 & u] ^ d[f + 1], l = y[p >>> 24] ^ v[m >> 16 & 255] ^ T[u >> 8 & 255] ^ b[255 & c] ^ d[f + 2], m = y[m >>> 24] ^ v[u >> 16 & 255] ^ T[c >> 8 & 255] ^ b[255 & p] ^ d[f + 3], f += 4, u = a, c = o, p = l;
                        for (h = 0; h < 4; h++) r[(3 & -h) + n] = S[u >>> 24] << 24 ^ S[c >> 16 & 255] << 16 ^ S[p >> 8 & 255] << 8 ^ S[255 & m] ^ d[f++], a = u, u = c, c = p, p = m, m = a
                    }
                }
                class l extends r {
                    constructor() {
                        super(r), this.jobs = [], this.delay = 1, this.timeout_ = null
                    }
                    processJob_() {
                        this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
                    }
                    push(e) {
                        this.jobs.push(e), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
                    }
                }
                let h = function(e) {
                        return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
                    },
                    d = function(e, t, i) {
                        let s, r, n, a, l, d, u, c, p;
                        let m = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2),
                            g = new o(Array.prototype.slice.call(t)),
                            f = new Uint8Array(e.byteLength),
                            _ = new Int32Array(f.buffer);
                        for (p = 0, s = i[0], r = i[1], n = i[2], a = i[3]; p < m.length; p += 4) l = h(m[p]), d = h(m[p + 1]), u = h(m[p + 2]), c = h(m[p + 3]), g.decrypt(l, d, u, c, _, p), _[p] = h(_[p] ^ s), _[p + 1] = h(_[p + 1] ^ r), _[p + 2] = h(_[p + 2] ^ n), _[p + 3] = h(_[p + 3] ^ a), s = l, r = d, n = u, a = c;
                        return f
                    };
                class u {
                    constructor(e, t, i, s) {
                        let r = u.STEP,
                            n = new Int32Array(e.buffer),
                            a = new Uint8Array(e.byteLength),
                            o = 0;
                        for (this.asyncStream_ = new l, this.asyncStream_.push(this.decryptChunk_(n.subarray(o, o + r), t, i, a)), o = r; o < n.length; o += r) i = new Uint32Array([h(n[o - 4]), h(n[o - 3]), h(n[o - 2]), h(n[o - 1])]), this.asyncStream_.push(this.decryptChunk_(n.subarray(o, o + r), t, i, a));
                        this.asyncStream_.push(function() {
                            s(null, a.subarray(0, a.byteLength - a[a.byteLength - 1]))
                        })
                    }
                    static get STEP() {
                        return 32e3
                    }
                    decryptChunk_(e, t, i, s) {
                        return function() {
                            let r = d(e, t, i);
                            s.set(r, e.byteOffset)
                        }
                    }
                }
                var c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== i.g ? i.g : "undefined" != typeof self ? self : {};
                "undefined" != typeof window ? s = window : void 0 !== c ? s = c : "undefined" != typeof self ? s = self : s = {};
                var p = s.BigInt || Number;
                p("0x1"), p("0x100"), p("0x10000"), p("0x1000000"), p("0x100000000"), p("0x10000000000"), p("0x1000000000000"), p("0x100000000000000"), p("0x10000000000000000"), 255 === (t = new Uint8Array((e = new Uint16Array([65484])).buffer, e.byteOffset, e.byteLength))[0] || t[0];
                let m = function(e) {
                    let t = {};
                    return Object.keys(e).forEach(i => {
                        let s = e[i];
                        ("function" === ArrayBuffer.isView ? ArrayBuffer.isView(s) : s && s.buffer instanceof ArrayBuffer) ? t[i] = {
                            bytes: s.buffer,
                            byteOffset: s.byteOffset,
                            byteLength: s.byteLength
                        }: t[i] = s
                    }), t
                };
                self.onmessage = function(e) {
                    let t = e.data;
                    new u(new Uint8Array(t.encrypted.bytes, t.encrypted.byteOffset, t.encrypted.byteLength), new Uint32Array(t.key.bytes, t.key.byteOffset, t.key.byteLength / 4), new Uint32Array(t.iv.bytes, t.iv.byteOffset, t.iv.byteLength / 4), function(e, i) {
                        self.postMessage(m({
                            source: t.source,
                            decrypted: i
                        }), [i.buffer])
                    })
                }
            })));
            let ow = e => {
                    let t = e.default ? "main" : "alternative";
                    return e.characteristics && e.characteristics.indexOf("public.accessibility.describes-video") >= 0 && (t = "main-desc"), t
                },
                ox = (e, t) => {
                    e.abort(), e.pause(), t && t.activePlaylistLoader && (t.activePlaylistLoader.pause(), t.activePlaylistLoader = null)
                },
                oI = (e, t) => {
                    t.activePlaylistLoader = e, e.load()
                },
                oP = (e, t) => () => {
                    let {
                        segmentLoaders: {
                            [e]: i,
                            main: s
                        },
                        mediaTypes: {
                            [e]: r
                        }
                    } = t, n = r.activeTrack(), a = r.getActiveGroup(), o = r.activePlaylistLoader, l = r.lastGroup_;
                    if ((!a || !l || a.id !== l.id) && (r.lastGroup_ = a, r.lastTrack_ = n, ox(i, r), a && !a.isMainPlaylist)) {
                        if (!a.playlistLoader) {
                            o && s.resetEverything();
                            return
                        }
                        i.resyncLoader(), oI(a.playlistLoader, r)
                    }
                },
                oA = (e, t) => () => {
                    let {
                        segmentLoaders: {
                            [e]: i
                        },
                        mediaTypes: {
                            [e]: s
                        }
                    } = t;
                    s.lastGroup_ = null, i.abort(), i.pause()
                },
                oL = (e, t) => () => {
                    let {
                        mainPlaylistLoader: i,
                        segmentLoaders: {
                            [e]: s,
                            main: r
                        },
                        mediaTypes: {
                            [e]: n
                        }
                    } = t, a = n.activeTrack(), o = n.getActiveGroup(), l = n.activePlaylistLoader, h = n.lastTrack_;
                    if ((!h || !a || h.id !== a.id) && (n.lastGroup_ = o, n.lastTrack_ = a, ox(s, n), o)) {
                        if (o.isMainPlaylist) {
                            if (!a || !h || a.id === h.id) return;
                            let e = t.vhs.playlistController_,
                                s = e.selectPlaylist();
                            if (e.media() === s) return;
                            n.logger_(`track change. Switching main audio from ${h.id} to ${a.id}`), i.pause(), r.resetEverything(), e.fastQualityChange_(s);
                            return
                        }
                        if ("AUDIO" === e) {
                            if (!o.playlistLoader) {
                                r.setAudio(!0), r.resetEverything();
                                return
                            }
                            s.setAudio(!0), r.setAudio(!1)
                        }
                        if (l === o.playlistLoader) {
                            oI(o.playlistLoader, n);
                            return
                        }
                        s.track && s.track(a), s.resetEverything(), oI(o.playlistLoader, n)
                    }
                },
                oD = {
                    AUDIO: (e, t) => () => {
                        let {
                            mediaTypes: {
                                [e]: i
                            },
                            excludePlaylist: s
                        } = t, r = i.activeTrack(), n = i.activeGroup(), a = (n.filter(e => e.default)[0] || n[0]).id, o = i.tracks[a];
                        if (r === o) {
                            s({
                                error: {
                                    message: "Problem encountered loading the default audio track."
                                }
                            });
                            return
                        }
                        for (let e in r_.log.warn("Problem encountered loading the alternate audio track.Switching back to default."), i.tracks) i.tracks[e].enabled = i.tracks[e] === o;
                        i.onTrackChanged()
                    },
                    SUBTITLES: (e, t) => () => {
                        let {
                            mediaTypes: {
                                [e]: i
                            }
                        } = t;
                        r_.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track.");
                        let s = i.activeTrack();
                        s && (s.mode = "disabled"), i.onTrackChanged()
                    }
                },
                oO = {
                    AUDIO: (e, t, i) => {
                        if (!t) return;
                        let {
                            tech: s,
                            requestOptions: r,
                            segmentLoaders: {
                                [e]: n
                            }
                        } = i;
                        t.on("loadedmetadata", () => {
                            let e = t.media();
                            n.playlist(e, r), (!s.paused() || e.endList && "none" !== s.preload()) && n.load()
                        }), t.on("loadedplaylist", () => {
                            n.playlist(t.media(), r), s.paused() || n.load()
                        }), t.on("error", oD[e](e, i))
                    },
                    SUBTITLES: (e, t, i) => {
                        let {
                            tech: s,
                            requestOptions: r,
                            segmentLoaders: {
                                [e]: n
                            },
                            mediaTypes: {
                                [e]: a
                            }
                        } = i;
                        t.on("loadedmetadata", () => {
                            let e = t.media();
                            n.playlist(e, r), n.track(a.activeTrack()), (!s.paused() || e.endList && "none" !== s.preload()) && n.load()
                        }), t.on("loadedplaylist", () => {
                            n.playlist(t.media(), r), s.paused() || n.load()
                        }), t.on("error", oD[e](e, i))
                    }
                },
                oM = {
                    AUDIO: (e, t) => {
                        let {
                            vhs: i,
                            sourceType: s,
                            segmentLoaders: {
                                [e]: r
                            },
                            requestOptions: n,
                            main: {
                                mediaGroups: a
                            },
                            mediaTypes: {
                                [e]: {
                                    groups: o,
                                    tracks: l,
                                    logger_: h
                                }
                            },
                            mainPlaylistLoader: d
                        } = t, u = r8(d.main);
                        for (let r in (!a[e] || 0 === Object.keys(a[e]).length) && (a[e] = {
                                main: {
                                    default: {
                                        default: !0
                                    }
                                }
                            }, u && (a[e].main.default.playlists = d.main.playlists)), a[e])
                            for (let c in o[r] || (o[r] = []), a[e][r]) {
                                let p, m = a[e][r][c];
                                if (u ? (h(`AUDIO group '${r}' label '${c}' is a main playlist`), m.isMainPlaylist = !0, p = null) : p = "vhs-json" === s && m.playlists ? new nf(m.playlists[0], i, n) : m.resolvedUri ? new nf(m.resolvedUri, i, n) : m.playlists && "dash" === s ? new nK(m.playlists[0], i, n, d) : null, m = rw({
                                        id: c,
                                        playlistLoader: p
                                    }, m), oO[e](e, m.playlistLoader, t), o[r].push(m), void 0 === l[c]) {
                                    let e = new r_.AudioTrack({
                                        id: c,
                                        kind: ow(m),
                                        enabled: !1,
                                        language: m.language,
                                        default: m.default,
                                        label: c
                                    });
                                    l[c] = e
                                }
                            }
                        r.on("error", oD[e](e, t))
                    },
                    SUBTITLES: (e, t) => {
                        let {
                            tech: i,
                            vhs: s,
                            sourceType: r,
                            segmentLoaders: {
                                [e]: n
                            },
                            requestOptions: a,
                            main: {
                                mediaGroups: o
                            },
                            mediaTypes: {
                                [e]: {
                                    groups: l,
                                    tracks: h
                                }
                            },
                            mainPlaylistLoader: d
                        } = t;
                        for (let n in o[e])
                            for (let u in l[n] || (l[n] = []), o[e][n]) {
                                let c;
                                if (!s.options_.useForcedSubtitles && o[e][n][u].forced) continue;
                                let p = o[e][n][u];
                                if ("hls" === r) c = new nf(p.resolvedUri, s, a);
                                else if ("dash" === r) {
                                    if (!p.playlists.filter(e => e.excludeUntil !== 1 / 0).length) return;
                                    c = new nK(p.playlists[0], s, a, d)
                                } else "vhs-json" === r && (c = new nf(p.playlists ? p.playlists[0] : p.resolvedUri, s, a));
                                if (p = rw({
                                        id: u,
                                        playlistLoader: c
                                    }, p), oO[e](e, p.playlistLoader, t), l[n].push(p), void 0 === h[u]) {
                                    let e = i.addRemoteTextTrack({
                                        id: u,
                                        kind: "subtitles",
                                        default: p.default && p.autoselect,
                                        language: p.language,
                                        label: u
                                    }, !1).track;
                                    h[u] = e
                                }
                            }
                        n.on("error", oD[e](e, t))
                    },
                    "CLOSED-CAPTIONS": (e, t) => {
                        let {
                            tech: i,
                            main: {
                                mediaGroups: s
                            },
                            mediaTypes: {
                                [e]: {
                                    groups: r,
                                    tracks: n
                                }
                            }
                        } = t;
                        for (let t in s[e])
                            for (let a in r[t] || (r[t] = []), s[e][t]) {
                                let o = s[e][t][a];
                                if (!/^(?:CC|SERVICE)/.test(o.instreamId)) continue;
                                let l = i.options_.vhs && i.options_.vhs.captionServices || {},
                                    h = {
                                        label: a,
                                        language: o.language,
                                        instreamId: o.instreamId,
                                        default: o.default && o.autoselect
                                    };
                                if (l[h.instreamId] && (h = rw(h, l[h.instreamId])), void 0 === h.default && delete h.default, r[t].push(rw({
                                        id: a
                                    }, o)), void 0 === n[a]) {
                                    let e = i.addRemoteTextTrack({
                                        id: h.instreamId,
                                        kind: "captions",
                                        default: h.default,
                                        language: h.language,
                                        label: h.label
                                    }, !1).track;
                                    n[a] = e
                                }
                            }
                    }
                },
                oR = (e, t) => {
                    for (let i = 0; i < e.length; i++)
                        if (r2(t, e[i]) || e[i].playlists && oR(e[i].playlists, t)) return !0;
                    return !1
                },
                oU = (e, t) => i => {
                    let {
                        mainPlaylistLoader: s,
                        mediaTypes: {
                            [e]: {
                                groups: r
                            }
                        }
                    } = t, n = s.media();
                    if (!n) return null;
                    let a = null;
                    n.attributes[e] && (a = r[n.attributes[e]]);
                    let o = Object.keys(r);
                    if (!a) {
                        if ("AUDIO" === e && o.length > 1 && r8(t.main))
                            for (let e = 0; e < o.length; e++) {
                                let t = r[o[e]];
                                if (oR(t, n)) {
                                    a = t;
                                    break
                                }
                            } else r.main ? a = r.main : 1 === o.length && (a = r[o[0]])
                    }
                    return void 0 === i ? a : null !== i && a && a.filter(e => e.id === i.id)[0] || null
                },
                oB = {
                    AUDIO: (e, t) => () => {
                        let {
                            mediaTypes: {
                                [e]: {
                                    tracks: i
                                }
                            }
                        } = t;
                        for (let e in i)
                            if (i[e].enabled) return i[e];
                        return null
                    },
                    SUBTITLES: (e, t) => () => {
                        let {
                            mediaTypes: {
                                [e]: {
                                    tracks: i
                                }
                            }
                        } = t;
                        for (let e in i)
                            if ("showing" === i[e].mode || "hidden" === i[e].mode) return i[e];
                        return null
                    }
                },
                oN = (e, {
                    mediaTypes: t
                }) => () => {
                    let i = t[e].activeTrack();
                    return i ? t[e].activeGroup(i) : null
                },
                oj = e => {
                    ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(t => {
                        oM[t](t, e)
                    });
                    let {
                        mediaTypes: t,
                        mainPlaylistLoader: i,
                        tech: s,
                        vhs: r,
                        segmentLoaders: {
                            AUDIO: n,
                            main: a
                        }
                    } = e;
                    ["AUDIO", "SUBTITLES"].forEach(i => {
                        t[i].activeGroup = oU(i, e), t[i].activeTrack = oB[i](i, e), t[i].onGroupChanged = oP(i, e), t[i].onGroupChanging = oA(i, e), t[i].onTrackChanged = oL(i, e), t[i].getActiveGroup = oN(i, e)
                    });
                    let o = t.AUDIO.activeGroup();
                    if (o) {
                        let e = (o.filter(e => e.default)[0] || o[0]).id;
                        t.AUDIO.tracks[e].enabled = !0, t.AUDIO.onGroupChanged(), t.AUDIO.onTrackChanged(), t.AUDIO.getActiveGroup().playlistLoader ? (a.setAudio(!1), n.setAudio(!0)) : a.setAudio(!0)
                    }
                    i.on("mediachange", () => {
                        ["AUDIO", "SUBTITLES"].forEach(e => t[e].onGroupChanged())
                    }), i.on("mediachanging", () => {
                        ["AUDIO", "SUBTITLES"].forEach(e => t[e].onGroupChanging())
                    });
                    let l = () => {
                        t.AUDIO.onTrackChanged(), s.trigger({
                            type: "usage",
                            name: "vhs-audio-change"
                        })
                    };
                    for (let e in s.audioTracks().addEventListener("change", l), s.remoteTextTracks().addEventListener("change", t.SUBTITLES.onTrackChanged), r.on("dispose", () => {
                            s.audioTracks().removeEventListener("change", l), s.remoteTextTracks().removeEventListener("change", t.SUBTITLES.onTrackChanged)
                        }), s.clearTracks("audio"), t.AUDIO.tracks) s.audioTracks().addTrack(t.AUDIO.tracks[e])
                },
                oF = () => {
                    let e = {};
                    return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(t => {
                        e[t] = {
                            groups: {},
                            tracks: {},
                            activePlaylistLoader: null,
                            activeGroup: oe,
                            activeTrack: oe,
                            getActiveGroup: oe,
                            onGroupChanged: oe,
                            onTrackChanged: oe,
                            lastTrack_: null,
                            logger_: rE(`MediaGroups[${t}]`)
                        }
                    }), e
                };
            class o$ {
                constructor() {
                    this.priority_ = [], this.pathwayClones_ = new Map
                }
                set version(e) {
                    1 === e && (this.version_ = e)
                }
                set ttl(e) {
                    this.ttl_ = e || 300
                }
                set reloadUri(e) {
                    e && (this.reloadUri_ = rk(this.reloadUri_, e))
                }
                set priority(e) {
                    e && e.length && (this.priority_ = e)
                }
                set pathwayClones(e) {
                    e && e.length && (this.pathwayClones_ = new Map(e.map(e => [e.ID, e])))
                }
                get version() {
                    return this.version_
                }
                get ttl() {
                    return this.ttl_
                }
                get reloadUri() {
                    return this.reloadUri_
                }
                get priority() {
                    return this.priority_
                }
                get pathwayClones() {
                    return this.pathwayClones_
                }
            }
            class oq extends r_.EventTarget {
                constructor(e, t) {
                    super(), this.currentPathway = null, this.defaultPathway = null, this.queryBeforeStart = !1, this.availablePathways_ = new Set, this.steeringManifest = new o$, this.proxyServerUrl_ = null, this.manifestType_ = null, this.ttlTimeout_ = null, this.request_ = null, this.currentPathwayClones = new Map, this.nextPathwayClones = new Map, this.excludedSteeringManifestURLs = new Set, this.logger_ = rE("Content Steering"), this.xhr_ = e, this.getBandwidth_ = t
                }
                assignTagProperties(e, t) {
                    this.manifestType_ = t.serverUri ? "HLS" : "DASH";
                    let i = t.serverUri || t.serverURL;
                    if (!i) {
                        this.logger_(`steering manifest URL is ${i}, cannot request steering manifest.`), this.trigger("error");
                        return
                    }
                    if (i.startsWith("data:")) {
                        this.decodeDataUriManifest_(i.substring(i.indexOf(",") + 1));
                        return
                    }
                    this.steeringManifest.reloadUri = rk(e, i), this.defaultPathway = t.pathwayId || t.defaultServiceLocation, this.queryBeforeStart = t.queryBeforeStart, this.proxyServerUrl_ = t.proxyServerURL, this.defaultPathway && !this.queryBeforeStart && this.trigger("content-steering")
                }
                requestSteeringManifest(e) {
                    let t = this.steeringManifest.reloadUri;
                    if (!t) return;
                    let i = e ? t : this.getRequestURI(t);
                    if (!i) {
                        this.logger_("No valid content steering manifest URIs. Stopping content steering."), this.trigger("error"), this.dispose();
                        return
                    }
                    this.request_ = this.xhr_({
                        uri: i,
                        requestType: "content-steering-manifest"
                    }, (e, t) => {
                        if (e) {
                            if (410 === t.status) {
                                this.logger_(`manifest request 410 ${e}.`), this.logger_(`There will be no more content steering requests to ${i} this session.`), this.excludedSteeringManifestURLs.add(i);
                                return
                            }
                            if (429 === t.status) {
                                let i = t.responseHeaders["retry-after"];
                                this.logger_(`manifest request 429 ${e}.`), this.logger_(`content steering will retry in ${i} seconds.`), this.startTTLTimeout_(parseInt(i, 10));
                                return
                            }
                            this.logger_(`manifest failed to load ${e}.`), this.startTTLTimeout_();
                            return
                        }
                        let s = JSON.parse(this.request_.responseText);
                        this.assignSteeringProperties_(s), this.startTTLTimeout_()
                    })
                }
                setProxyServerUrl_(e) {
                    let t = new(d()).URL(e),
                        i = new(d()).URL(this.proxyServerUrl_);
                    return i.searchParams.set("url", encodeURI(t.toString())), this.setSteeringParams_(i.toString())
                }
                decodeDataUriManifest_(e) {
                    let t = JSON.parse(d().atob(e));
                    this.assignSteeringProperties_(t)
                }
                setSteeringParams_(e) {
                    let t = new(d()).URL(e),
                        i = this.getPathway(),
                        s = this.getBandwidth_();
                    if (i) {
                        let e = `_${this.manifestType_}_pathway`;
                        t.searchParams.set(e, i)
                    }
                    if (s) {
                        let e = `_${this.manifestType_}_throughput`;
                        t.searchParams.set(e, s)
                    }
                    return t.toString()
                }
                assignSteeringProperties_(e) {
                    if (this.steeringManifest.version = e.VERSION, !this.steeringManifest.version) {
                        this.logger_(`manifest version is ${e.VERSION}, which is not supported.`), this.trigger("error");
                        return
                    }
                    this.steeringManifest.ttl = e.TTL, this.steeringManifest.reloadUri = e["RELOAD-URI"], this.steeringManifest.priority = e["PATHWAY-PRIORITY"] || e["SERVICE-LOCATION-PRIORITY"], this.steeringManifest.pathwayClones = e["PATHWAY-CLONES"], this.nextPathwayClones = this.steeringManifest.pathwayClones, this.availablePathways_.size || (this.logger_("There are no available pathways for content steering. Ending content steering."), this.trigger("error"), this.dispose());
                    let t = (e => {
                        for (let t of e)
                            if (this.availablePathways_.has(t)) return t;
                        return [...this.availablePathways_][0]
                    })(this.steeringManifest.priority);
                    this.currentPathway !== t && (this.currentPathway = t, this.trigger("content-steering"))
                }
                getPathway() {
                    return this.currentPathway || this.defaultPathway
                }
                getRequestURI(e) {
                    if (!e) return null;
                    let t = e => this.excludedSteeringManifestURLs.has(e);
                    if (this.proxyServerUrl_) {
                        let i = this.setProxyServerUrl_(e);
                        if (!t(i)) return i
                    }
                    let i = this.setSteeringParams_(e);
                    return t(i) ? null : i
                }
                startTTLTimeout_(e = this.steeringManifest.ttl) {
                    this.ttlTimeout_ = d().setTimeout(() => {
                        this.requestSteeringManifest()
                    }, 1e3 * e)
                }
                clearTTLTimeout_() {
                    d().clearTimeout(this.ttlTimeout_), this.ttlTimeout_ = null
                }
                abort() {
                    this.request_ && this.request_.abort(), this.request_ = null
                }
                dispose() {
                    this.off("content-steering"), this.off("error"), this.abort(), this.clearTTLTimeout_(), this.currentPathway = null, this.defaultPathway = null, this.queryBeforeStart = null, this.proxyServerUrl_ = null, this.manifestType_ = null, this.ttlTimeout_ = null, this.request_ = null, this.excludedSteeringManifestURLs = new Set, this.availablePathways_ = new Set, this.steeringManifest = new o$
                }
                addAvailablePathway(e) {
                    e && this.availablePathways_.add(e)
                }
                clearAvailablePathways() {
                    this.availablePathways_.clear()
                }
                excludePathway(e) {
                    return this.availablePathways_.delete(e)
                }
                didDASHTagChange(e, t) {
                    return !t && this.steeringManifest.reloadUri || t && (rk(e, t.serverURL) !== this.steeringManifest.reloadUri || t.defaultServiceLocation !== this.defaultPathway || t.queryBeforeStart !== this.queryBeforeStart || t.proxyServerURL !== this.proxyServerUrl_)
                }
                getAvailablePathways() {
                    return this.availablePathways_
                }
            }
            let oH = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred", "mediaAppends"],
                oV = function(e) {
                    return this.audioSegmentLoader_[e] + this.mainSegmentLoader_[e]
                },
                oz = function({
                    currentPlaylist: e,
                    buffered: t,
                    currentTime: i,
                    nextPlaylist: s,
                    bufferLowWaterLine: r,
                    bufferHighWaterLine: n,
                    duration: a,
                    bufferBasedABR: o,
                    log: l
                }) {
                    if (!s) return r_.log.warn("We received no playlist to switch to. Please check your stream."), !1;
                    let h = `allowing switch ${e&&e.id||"null"} -> ${s.id}`;
                    if (!e) return l(`${h} as current playlist is not set`), !0;
                    if (s.id === e.id) return !1;
                    let d = !!rL(t, i).length;
                    if (!e.endList) return d || "number" != typeof e.partTargetDuration ? (l(`${h} as current playlist is live`), !0) : (l(`not ${h} as current playlist is live llhls, but currentTime isn't in buffered.`), !1);
                    let u = rj(t, i),
                        c = o ? nQ.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE : nQ.MAX_BUFFER_LOW_WATER_LINE;
                    if (a < c) return l(`${h} as duration < max low water line (${a} < ${c})`), !0;
                    let p = s.attributes.BANDWIDTH,
                        m = e.attributes.BANDWIDTH;
                    if (p < m && (!o || u < n)) {
                        let e = `${h} as next bandwidth < current bandwidth (${p} < ${m})`;
                        return o && (e += ` and forwardBuffer < bufferHighWaterLine (${u} < ${n})`), l(e), !0
                    }
                    if ((!o || p > m) && u >= r) {
                        let e = `${h} as forwardBuffer >= bufferLowWaterLine (${u} >= ${r})`;
                        return o && (e += ` and next bandwidth > current bandwidth (${p} > ${m})`), l(e), !0
                    }
                    return l(`not ${h} as no switching criteria met`), !1
                };
            class oW extends r_.EventTarget {
                constructor(e) {
                    super();
                    let {
                        src: t,
                        withCredentials: i,
                        tech: s,
                        bandwidth: r,
                        externVhs: n,
                        useCueTags: a,
                        playlistExclusionDuration: o,
                        enableLowInitialPlaylist: h,
                        sourceType: u,
                        cacheEncryptionKeys: c,
                        bufferBasedABR: p,
                        leastPixelDiffSelector: m,
                        captionServices: g
                    } = e;
                    if (!t) throw Error("A non-empty playlist URL or JSON manifest string is required");
                    let {
                        maxPlaylistRetries: f
                    } = e;
                    null == f && (f = 1 / 0), l = n, this.bufferBasedABR = !!p, this.leastPixelDiffSelector = !!m, this.withCredentials = i, this.tech_ = s, this.vhs_ = s.vhs, this.sourceType_ = u, this.useCueTags_ = a, this.playlistExclusionDuration = o, this.maxPlaylistRetries = f, this.enableLowInitialPlaylist = h, this.useCueTags_ && (this.cueTagsTrack_ = this.tech_.addTextTrack("metadata", "ad-cues"), this.cueTagsTrack_.inBandMetadataTrackDispatchType = ""), this.requestOptions_ = {
                        withCredentials: i,
                        maxPlaylistRetries: f,
                        timeout: null
                    }, this.on("error", this.pauseLoading), this.mediaTypes_ = oF(), this.mediaSource = new(d()).MediaSource, this.handleDurationChange_ = this.handleDurationChange_.bind(this), this.handleSourceOpen_ = this.handleSourceOpen_.bind(this), this.handleSourceEnded_ = this.handleSourceEnded_.bind(this), this.mediaSource.addEventListener("durationchange", this.handleDurationChange_), this.mediaSource.addEventListener("sourceopen", this.handleSourceOpen_), this.mediaSource.addEventListener("sourceended", this.handleSourceEnded_), this.seekable_ = rx(), this.hasPlayed_ = !1, this.syncController_ = new ok(e), this.segmentMetadataTrack_ = s.addRemoteTextTrack({
                        kind: "metadata",
                        label: "segment-metadata"
                    }, !1).track, this.decrypter_ = new oE, this.sourceUpdater_ = new ou(this.mediaSource), this.inbandTextTracks_ = {}, this.timelineChangeController_ = new oC, this.keyStatusMap_ = new Map;
                    let _ = {
                        vhs: this.vhs_,
                        parse708captions: e.parse708captions,
                        useDtsForTimestampOffset: e.useDtsForTimestampOffset,
                        captionServices: g,
                        mediaSource: this.mediaSource,
                        currentTime: this.tech_.currentTime.bind(this.tech_),
                        seekable: () => this.seekable(),
                        seeking: () => this.tech_.seeking(),
                        duration: () => this.duration(),
                        hasPlayed: () => this.hasPlayed_,
                        goalBufferLength: () => this.goalBufferLength(),
                        bandwidth: r,
                        syncController: this.syncController_,
                        decrypter: this.decrypter_,
                        sourceType: this.sourceType_,
                        inbandTextTracks: this.inbandTextTracks_,
                        cacheEncryptionKeys: c,
                        sourceUpdater: this.sourceUpdater_,
                        timelineChangeController: this.timelineChangeController_,
                        exactManifestTimings: e.exactManifestTimings,
                        addMetadataToTextTrack: this.addMetadataToTextTrack.bind(this)
                    };
                    this.mainPlaylistLoader_ = "dash" === this.sourceType_ ? new nK(t, this.vhs_, rw(this.requestOptions_, {
                        addMetadataToTextTrack: this.addMetadataToTextTrack.bind(this)
                    })) : new nf(t, this.vhs_, rw(this.requestOptions_, {
                        addDateRangesToTextTrack: this.addDateRangesToTextTrack_.bind(this)
                    })), this.setupMainPlaylistLoaderListeners_(), this.mainSegmentLoader_ = new a9(rw(_, {
                        segmentMetadataTrack: this.segmentMetadataTrack_,
                        loaderType: "main"
                    }), e), this.audioSegmentLoader_ = new a9(rw(_, {
                        loaderType: "audio"
                    }), e), this.subtitleSegmentLoader_ = new of (rw(_, {
                        loaderType: "vtt",
                        featuresNativeTextTracks: this.tech_.featuresNativeTextTracks,
                        loadVttJs: () => new Promise((e, t) => {
                            function i() {
                                s.off("vttjserror", r), e()
                            }

                            function r() {
                                s.off("vttjsloaded", i), t()
                            }
                            s.one("vttjsloaded", i), s.one("vttjserror", r), s.addWebVttScript_()
                        })
                    }), e), this.contentSteeringController_ = new oq(this.vhs_.xhr, () => this.mainSegmentLoader_.bandwidth), this.setupSegmentLoaderListeners_(), this.bufferBasedABR && (this.mainPlaylistLoader_.one("loadedplaylist", () => this.startABRTimer_()), this.tech_.on("pause", () => this.stopABRTimer_()), this.tech_.on("play", () => this.startABRTimer_())), oH.forEach(e => {
                        this[e + "_"] = oV.bind(this, e)
                    }), this.logger_ = rE("pc"), this.triggeredFmp4Usage = !1, "none" === this.tech_.preload() ? (this.loadOnPlay_ = () => {
                        this.loadOnPlay_ = null, this.mainPlaylistLoader_.load()
                    }, this.tech_.one("play", this.loadOnPlay_)) : this.mainPlaylistLoader_.load(), this.timeToLoadedData__ = -1, this.mainAppendsToLoadedData__ = -1, this.audioAppendsToLoadedData__ = -1;
                    let y = "none" === this.tech_.preload() ? "play" : "loadstart";
                    this.tech_.one(y, () => {
                        let e = Date.now();
                        this.tech_.one("loadeddata", () => {
                            this.timeToLoadedData__ = Date.now() - e, this.mainAppendsToLoadedData__ = this.mainSegmentLoader_.mediaAppends, this.audioAppendsToLoadedData__ = this.audioSegmentLoader_.mediaAppends
                        })
                    })
                }
                mainAppendsToLoadedData_() {
                    return this.mainAppendsToLoadedData__
                }
                audioAppendsToLoadedData_() {
                    return this.audioAppendsToLoadedData__
                }
                appendsToLoadedData_() {
                    let e = this.mainAppendsToLoadedData_(),
                        t = this.audioAppendsToLoadedData_();
                    return -1 === e || -1 === t ? -1 : e + t
                }
                timeToLoadedData_() {
                    return this.timeToLoadedData__
                }
                checkABR_(e = "abr") {
                    let t = this.selectPlaylist();
                    t && this.shouldSwitchToMedia_(t) && this.switchMedia_(t, e)
                }
                switchMedia_(e, t, i) {
                    let s = this.media(),
                        r = s && (s.id || s.uri),
                        n = e && (e.id || e.uri);
                    r && r !== n && (this.logger_(`switch media ${r} -> ${n} from ${t}`), this.tech_.trigger({
                        type: "usage",
                        name: `vhs-rendition-change-${t}`
                    })), this.mainPlaylistLoader_.media(e, i)
                }
                switchMediaForDASHContentSteering_() {
                    ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(e => {
                        let t = this.mediaTypes_[e],
                            i = t ? t.activeGroup() : null,
                            s = this.contentSteeringController_.getPathway();
                        if (i && s) {
                            let t = (i.length ? i[0].playlists : i.playlists).filter(e => e.attributes.serviceLocation === s);
                            t.length && this.mediaTypes_[e].activePlaylistLoader.media(t[0])
                        }
                    })
                }
                startABRTimer_() {
                    this.stopABRTimer_(), this.abrTimer_ = d().setInterval(() => this.checkABR_(), 250)
                }
                stopABRTimer_() {
                    this.tech_.scrubbing && this.tech_.scrubbing() || (d().clearInterval(this.abrTimer_), this.abrTimer_ = null)
                }
                getAudioTrackPlaylists_() {
                    let e;
                    let t = this.main(),
                        i = t && t.playlists || [];
                    if (!t || !t.mediaGroups || !t.mediaGroups.AUDIO) return i;
                    let s = t.mediaGroups.AUDIO,
                        r = Object.keys(s);
                    if (Object.keys(this.mediaTypes_.AUDIO.groups).length) e = this.mediaTypes_.AUDIO.activeTrack();
                    else {
                        let t = s.main || r.length && s[r[0]];
                        for (let i in t)
                            if (t[i].default) {
                                e = {
                                    label: i
                                };
                                break
                            }
                    }
                    if (!e) return i;
                    let n = [];
                    for (let i in s)
                        if (s[i][e.label]) {
                            let r = s[i][e.label];
                            if (r.playlists && r.playlists.length) n.push.apply(n, r.playlists);
                            else if (r.uri) n.push(r);
                            else if (t.playlists.length)
                                for (let e = 0; e < t.playlists.length; e++) {
                                    let s = t.playlists[e];
                                    s.attributes && s.attributes.AUDIO && s.attributes.AUDIO === i && n.push(s)
                                }
                        }
                    return n.length ? n : i
                }
                setupMainPlaylistLoaderListeners_() {
                    this.mainPlaylistLoader_.on("loadedmetadata", () => {
                        let e = this.mainPlaylistLoader_.media(),
                            t = 1500 * e.targetDuration;
                        r1(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.media()) ? this.requestOptions_.timeout = 0 : this.requestOptions_.timeout = t, e.endList && "none" !== this.tech_.preload() && (this.mainSegmentLoader_.playlist(e, this.requestOptions_), this.mainSegmentLoader_.load()), oj({
                            sourceType: this.sourceType_,
                            segmentLoaders: {
                                AUDIO: this.audioSegmentLoader_,
                                SUBTITLES: this.subtitleSegmentLoader_,
                                main: this.mainSegmentLoader_
                            },
                            tech: this.tech_,
                            requestOptions: this.requestOptions_,
                            mainPlaylistLoader: this.mainPlaylistLoader_,
                            vhs: this.vhs_,
                            main: this.main(),
                            mediaTypes: this.mediaTypes_,
                            excludePlaylist: this.excludePlaylist.bind(this)
                        }), this.triggerPresenceUsage_(this.main(), e), this.setupFirstPlay(), !this.mediaTypes_.AUDIO.activePlaylistLoader || this.mediaTypes_.AUDIO.activePlaylistLoader.media() ? this.trigger("selectedinitialmedia") : this.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata", () => {
                            this.trigger("selectedinitialmedia")
                        })
                    }), this.mainPlaylistLoader_.on("loadedplaylist", () => {
                        this.loadOnPlay_ && this.tech_.off("play", this.loadOnPlay_);
                        let e = this.mainPlaylistLoader_.media();
                        if (!e) {
                            let t;
                            if (this.attachContentSteeringListeners_(), this.initContentSteeringController_(), this.excludeUnsupportedVariants_(), this.enableLowInitialPlaylist && (t = this.selectInitialPlaylist()), t || (t = this.selectPlaylist()), !t || !this.shouldSwitchToMedia_(t) || (this.initialMedia_ = t, this.switchMedia_(this.initialMedia_, "initial"), !("vhs-json" === this.sourceType_ && this.initialMedia_.segments))) return;
                            e = this.initialMedia_
                        }
                        this.handleUpdatedMediaPlaylist(e)
                    }), this.mainPlaylistLoader_.on("error", () => {
                        let e = this.mainPlaylistLoader_.error;
                        this.excludePlaylist({
                            playlistToExclude: e.playlist,
                            error: e
                        })
                    }), this.mainPlaylistLoader_.on("mediachanging", () => {
                        this.mainSegmentLoader_.abort(), this.mainSegmentLoader_.pause()
                    }), this.mainPlaylistLoader_.on("mediachange", () => {
                        let e = this.mainPlaylistLoader_.media(),
                            t = 1500 * e.targetDuration;
                        r1(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.media()) ? this.requestOptions_.timeout = 0 : this.requestOptions_.timeout = t, "dash" === this.sourceType_ && this.mainPlaylistLoader_.load(), this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.playlist(e, this.requestOptions_), this.waitingForFastQualityPlaylistReceived_ ? this.runFastQualitySwitch_() : this.mainSegmentLoader_.load(), this.tech_.trigger({
                            type: "mediachange",
                            bubbles: !0
                        })
                    }), this.mainPlaylistLoader_.on("playlistunchanged", () => {
                        let e = this.mainPlaylistLoader_.media();
                        "playlist-unchanged" !== e.lastExcludeReason_ && this.stuckAtPlaylistEnd_(e) && (this.excludePlaylist({
                            error: {
                                message: "Playlist no longer updating.",
                                reason: "playlist-unchanged"
                            }
                        }), this.tech_.trigger("playliststuck"))
                    }), this.mainPlaylistLoader_.on("renditiondisabled", () => {
                        this.tech_.trigger({
                            type: "usage",
                            name: "vhs-rendition-disabled"
                        })
                    }), this.mainPlaylistLoader_.on("renditionenabled", () => {
                        this.tech_.trigger({
                            type: "usage",
                            name: "vhs-rendition-enabled"
                        })
                    })
                }
                handleUpdatedMediaPlaylist(e) {
                    this.useCueTags_ && this.updateAdCues_(e), this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.playlist(e, this.requestOptions_), this.waitingForFastQualityPlaylistReceived_ && this.runFastQualitySwitch_(), this.updateDuration(!e.endList), !this.tech_.paused() && (this.mainSegmentLoader_.load(), this.audioSegmentLoader_ && this.audioSegmentLoader_.load())
                }
                triggerPresenceUsage_(e, t) {
                    let i = e.mediaGroups || {},
                        s = !0,
                        r = Object.keys(i.AUDIO);
                    for (let e in i.AUDIO)
                        for (let t in i.AUDIO[e]) i.AUDIO[e][t].uri || (s = !1);
                    s && this.tech_.trigger({
                        type: "usage",
                        name: "vhs-demuxed"
                    }), Object.keys(i.SUBTITLES).length && this.tech_.trigger({
                        type: "usage",
                        name: "vhs-webvtt"
                    }), l.Playlist.isAes(t) && this.tech_.trigger({
                        type: "usage",
                        name: "vhs-aes"
                    }), r.length && Object.keys(i.AUDIO[r[0]]).length > 1 && this.tech_.trigger({
                        type: "usage",
                        name: "vhs-alternate-audio"
                    }), this.useCueTags_ && this.tech_.trigger({
                        type: "usage",
                        name: "vhs-playlist-cue-tags"
                    })
                }
                shouldSwitchToMedia_(e) {
                    let t = this.mainPlaylistLoader_.media() || this.mainPlaylistLoader_.pendingMedia_,
                        i = this.tech_.currentTime(),
                        s = this.bufferLowWaterLine(),
                        r = this.bufferHighWaterLine();
                    return oz({
                        buffered: this.tech_.buffered(),
                        currentTime: i,
                        currentPlaylist: t,
                        nextPlaylist: e,
                        bufferLowWaterLine: s,
                        bufferHighWaterLine: r,
                        duration: this.duration(),
                        bufferBasedABR: this.bufferBasedABR,
                        log: this.logger_
                    })
                }
                setupSegmentLoaderListeners_() {
                    this.mainSegmentLoader_.on("bandwidthupdate", () => {
                        this.checkABR_("bandwidthupdate"), this.tech_.trigger("bandwidthupdate")
                    }), this.mainSegmentLoader_.on("timeout", () => {
                        this.bufferBasedABR && this.mainSegmentLoader_.load()
                    }), this.bufferBasedABR || this.mainSegmentLoader_.on("progress", () => {
                        this.trigger("progress")
                    }), this.mainSegmentLoader_.on("error", () => {
                        let e = this.mainSegmentLoader_.error();
                        this.excludePlaylist({
                            playlistToExclude: e.playlist,
                            error: e
                        })
                    }), this.mainSegmentLoader_.on("appenderror", () => {
                        this.error = this.mainSegmentLoader_.error_, this.trigger("error")
                    }), this.mainSegmentLoader_.on("syncinfoupdate", () => {
                        this.onSyncInfoUpdate_()
                    }), this.mainSegmentLoader_.on("timestampoffset", () => {
                        this.tech_.trigger({
                            type: "usage",
                            name: "vhs-timestamp-offset"
                        })
                    }), this.audioSegmentLoader_.on("syncinfoupdate", () => {
                        this.onSyncInfoUpdate_()
                    }), this.audioSegmentLoader_.on("appenderror", () => {
                        this.error = this.audioSegmentLoader_.error_, this.trigger("error")
                    }), this.mainSegmentLoader_.on("ended", () => {
                        this.logger_("main segment loader ended"), this.onEndOfStream()
                    }), this.mainSegmentLoader_.on("earlyabort", e => {
                        this.bufferBasedABR || (this.delegateLoaders_("all", ["abort"]), this.excludePlaylist({
                            error: {
                                message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering."
                            },
                            playlistExclusionDuration: 10
                        }))
                    });
                    let e = () => {
                        if (!this.sourceUpdater_.hasCreatedSourceBuffers()) return this.tryToCreateSourceBuffers_();
                        let e = this.getCodecsOrExclude_();
                        e && this.sourceUpdater_.addOrChangeSourceBuffers(e)
                    };
                    this.mainSegmentLoader_.on("trackinfo", e), this.audioSegmentLoader_.on("trackinfo", e), this.mainSegmentLoader_.on("fmp4", () => {
                        this.triggeredFmp4Usage || (this.tech_.trigger({
                            type: "usage",
                            name: "vhs-fmp4"
                        }), this.triggeredFmp4Usage = !0)
                    }), this.audioSegmentLoader_.on("fmp4", () => {
                        this.triggeredFmp4Usage || (this.tech_.trigger({
                            type: "usage",
                            name: "vhs-fmp4"
                        }), this.triggeredFmp4Usage = !0)
                    }), this.audioSegmentLoader_.on("ended", () => {
                        this.logger_("audioSegmentLoader ended"), this.onEndOfStream()
                    })
                }
                mediaSecondsLoaded_() {
                    return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
                }
                load() {
                    this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
                }
                fastQualityChange_(e = this.selectPlaylist()) {
                    if (e && e === this.mainPlaylistLoader_.media()) {
                        this.logger_("skipping fastQualityChange because new media is same as old");
                        return
                    }
                    this.switchMedia_(e, "fast-quality"), this.waitingForFastQualityPlaylistReceived_ = !0
                }
                runFastQualitySwitch_() {
                    this.waitingForFastQualityPlaylistReceived_ = !1, this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.resetEverything(() => {
                        this.tech_.setCurrentTime(this.tech_.currentTime())
                    })
                }
                play() {
                    if (this.setupFirstPlay()) return;
                    this.tech_.ended() && this.tech_.setCurrentTime(0), this.hasPlayed_ && this.load();
                    let e = this.tech_.seekable();
                    if (this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0)) return this.tech_.setCurrentTime(e.end(e.length - 1))
                }
                setupFirstPlay() {
                    let e = this.mainPlaylistLoader_.media();
                    if (!e || this.tech_.paused() || this.hasPlayed_) return !1;
                    if (!e.endList || e.start) {
                        let t = this.seekable();
                        if (!t.length) return !1;
                        let i = t.end(0),
                            s = i;
                        if (e.start) {
                            let r = e.start.timeOffset;
                            s = r < 0 ? Math.max(i + r, t.start(0)) : Math.min(i, r)
                        }
                        this.trigger("firstplay"), this.tech_.setCurrentTime(s)
                    }
                    return this.hasPlayed_ = !0, this.load(), !0
                }
                handleSourceOpen_() {
                    if (this.tryToCreateSourceBuffers_(), this.tech_.autoplay()) {
                        let e = this.tech_.play();
                        void 0 !== e && "function" == typeof e.then && e.then(null, e => {})
                    }
                    this.trigger("sourceopen")
                }
                handleSourceEnded_() {
                    if (!this.inbandTextTracks_.metadataTrack_) return;
                    let e = this.inbandTextTracks_.metadataTrack_.cues;
                    if (!e || !e.length) return;
                    let t = this.duration();
                    e[e.length - 1].endTime = isNaN(t) || Math.abs(t) === 1 / 0 ? Number.MAX_VALUE : t
                }
                handleDurationChange_() {
                    this.tech_.trigger("durationchange")
                }
                onEndOfStream() {
                    let e = this.mainSegmentLoader_.ended_;
                    if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
                        let t = this.mainSegmentLoader_.getCurrentMediaInfo_();
                        e = !t || t.hasVideo ? e && this.audioSegmentLoader_.ended_ : this.audioSegmentLoader_.ended_
                    }
                    e && (this.stopABRTimer_(), this.sourceUpdater_.endOfStream())
                }
                stuckAtPlaylistEnd_(e) {
                    if (!this.seekable().length) return !1;
                    let t = this.syncController_.getExpiredTime(e, this.duration());
                    if (null === t) return !1;
                    let i = l.Playlist.playlistEnd(e, t),
                        s = this.tech_.currentTime(),
                        r = this.tech_.buffered();
                    if (!r.length) return i - s <= rP;
                    let n = r.end(r.length - 1);
                    return n - s <= rP && i - n <= rP
                }
                excludePlaylist({
                    playlistToExclude: e = this.mainPlaylistLoader_.media(),
                    error: t = {},
                    playlistExclusionDuration: i
                }) {
                    let s;
                    if (e = e || this.mainPlaylistLoader_.media(), i = i || t.playlistExclusionDuration || this.playlistExclusionDuration, !e) {
                        this.error = t, "open" !== this.mediaSource.readyState ? this.trigger("error") : this.sourceUpdater_.endOfStream("network");
                        return
                    }
                    e.playlistErrors_++;
                    let r = this.mainPlaylistLoader_.main.playlists,
                        n = r.filter(rZ),
                        a = 1 === n.length && n[0] === e;
                    if (1 === r.length && i !== 1 / 0) return r_.log.warn(`Problem encountered with playlist ${e.id}. Trying again since it is the only playlist.`), this.tech_.trigger("retryplaylist"), this.mainPlaylistLoader_.load(a);
                    if (a) {
                        if (this.main().contentSteering) {
                            let t = this.pathwayAttribute_(e),
                                i = 1e3 * this.contentSteeringController_.steeringManifest.ttl;
                            this.contentSteeringController_.excludePathway(t), this.excludeThenChangePathway_(), setTimeout(() => {
                                this.contentSteeringController_.addAvailablePathway(t)
                            }, i);
                            return
                        }
                        let t = !1;
                        r.forEach(i => {
                            if (i === e) return;
                            let s = i.excludeUntil;
                            void 0 !== s && s !== 1 / 0 && (t = !0, delete i.excludeUntil)
                        }), t && (r_.log.warn("Removing other playlists from the exclusion list because the last rendition is about to be excluded."), this.tech_.trigger("retryplaylist"))
                    }
                    s = e.playlistErrors_ > this.maxPlaylistRetries ? 1 / 0 : Date.now() + 1e3 * i, e.excludeUntil = s, t.reason && (e.lastExcludeReason_ = t.reason), this.tech_.trigger("excludeplaylist"), this.tech_.trigger({
                        type: "usage",
                        name: "vhs-rendition-excluded"
                    });
                    let o = this.selectPlaylist();
                    if (!o) {
                        this.error = "Playback cannot continue. No available working or supported playlists.", this.trigger("error");
                        return
                    }
                    let l = t.internal ? this.logger_ : r_.log.warn,
                        h = t.message ? " " + t.message : "";
                    l(`${t.internal?"Internal problem":"Problem"} encountered with playlist ${e.id}.${h} Switching to playlist ${o.id}.`), o.attributes.AUDIO !== e.attributes.AUDIO && this.delegateLoaders_("audio", ["abort", "pause"]), o.attributes.SUBTITLES !== e.attributes.SUBTITLES && this.delegateLoaders_("subtitle", ["abort", "pause"]), this.delegateLoaders_("main", ["abort", "pause"]);
                    let d = o.targetDuration / 2 * 1e3 || 5e3,
                        u = "number" == typeof o.lastRequest && Date.now() - o.lastRequest <= d;
                    return this.switchMedia_(o, "exclude", a || u)
                }
                pauseLoading() {
                    this.delegateLoaders_("all", ["abort", "pause"]), this.stopABRTimer_()
                }
                delegateLoaders_(e, t) {
                    let i = [],
                        s = "all" === e;
                    (s || "main" === e) && i.push(this.mainPlaylistLoader_);
                    let r = [];
                    (s || "audio" === e) && r.push("AUDIO"), (s || "subtitle" === e) && (r.push("CLOSED-CAPTIONS"), r.push("SUBTITLES")), r.forEach(e => {
                        let t = this.mediaTypes_[e] && this.mediaTypes_[e].activePlaylistLoader;
                        t && i.push(t)
                    }), ["main", "audio", "subtitle"].forEach(t => {
                        let s = this[`${t}SegmentLoader_`];
                        s && (e === t || "all" === e) && i.push(s)
                    }), i.forEach(e => t.forEach(t => {
                        "function" == typeof e[t] && e[t]()
                    }))
                }
                setCurrentTime(e) {
                    let t = rL(this.tech_.buffered(), e);
                    return this.mainPlaylistLoader_ && this.mainPlaylistLoader_.media() && this.mainPlaylistLoader_.media().segments ? t && t.length ? e : void(this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.resetEverything(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.pause(), this.audioSegmentLoader_.resetEverything()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.pause(), this.subtitleSegmentLoader_.resetEverything()), this.load()) : 0
                }
                duration() {
                    if (!this.mainPlaylistLoader_) return 0;
                    let e = this.mainPlaylistLoader_.media();
                    return e ? e.endList ? this.mediaSource ? this.mediaSource.duration : l.Playlist.duration(e) : 1 / 0 : 0
                }
                seekable() {
                    return this.seekable_
                }
                onSyncInfoUpdate_() {
                    let e, t, i;
                    if (!this.mainPlaylistLoader_) return;
                    let s = this.mainPlaylistLoader_.media();
                    if (!s) return;
                    let r = this.syncController_.getExpiredTime(s, this.duration());
                    if (null === r) return;
                    let n = this.mainPlaylistLoader_.main,
                        a = l.Playlist.seekable(s, r, l.Playlist.liveEdgeDelay(n, s));
                    0 !== a.length && (!this.mediaTypes_.AUDIO.activePlaylistLoader || (s = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), null !== (r = this.syncController_.getExpiredTime(s, this.duration())) && 0 !== (e = l.Playlist.seekable(s, r, l.Playlist.liveEdgeDelay(n, s))).length)) && (this.seekable_ && this.seekable_.length && (t = this.seekable_.end(0), i = this.seekable_.start(0)), e ? e.start(0) > a.end(0) || a.start(0) > e.end(0) ? this.seekable_ = a : this.seekable_ = rx([
                        [e.start(0) > a.start(0) ? e.start(0) : a.start(0), e.end(0) < a.end(0) ? e.end(0) : a.end(0)]
                    ]) : this.seekable_ = a, this.seekable_ && this.seekable_.length && this.seekable_.end(0) === t && this.seekable_.start(0) === i || (this.logger_(`seekable updated [${rR(this.seekable_)}]`), this.tech_.trigger("seekablechanged")))
                }
                updateDuration(e) {
                    if (this.updateDuration_ && (this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), this.updateDuration_ = null), "open" !== this.mediaSource.readyState) {
                        this.updateDuration_ = this.updateDuration.bind(this, e), this.mediaSource.addEventListener("sourceopen", this.updateDuration_);
                        return
                    }
                    if (e) {
                        let e = this.seekable();
                        if (!e.length) return;
                        (isNaN(this.mediaSource.duration) || this.mediaSource.duration < e.end(e.length - 1)) && this.sourceUpdater_.setDuration(e.end(e.length - 1));
                        return
                    }
                    let t = this.tech_.buffered(),
                        i = l.Playlist.duration(this.mainPlaylistLoader_.media());
                    t.length > 0 && (i = Math.max(i, t.end(t.length - 1))), this.mediaSource.duration !== i && this.sourceUpdater_.setDuration(i)
                }
                dispose() {
                    this.trigger("dispose"), this.decrypter_.terminate(), this.mainPlaylistLoader_.dispose(), this.mainSegmentLoader_.dispose(), this.contentSteeringController_.dispose(), this.keyStatusMap_.clear(), this.loadOnPlay_ && this.tech_.off("play", this.loadOnPlay_), ["AUDIO", "SUBTITLES"].forEach(e => {
                        let t = this.mediaTypes_[e].groups;
                        for (let e in t) t[e].forEach(e => {
                            e.playlistLoader && e.playlistLoader.dispose()
                        })
                    }), this.audioSegmentLoader_.dispose(), this.subtitleSegmentLoader_.dispose(), this.sourceUpdater_.dispose(), this.timelineChangeController_.dispose(), this.stopABRTimer_(), this.updateDuration_ && this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), this.mediaSource.removeEventListener("durationchange", this.handleDurationChange_), this.mediaSource.removeEventListener("sourceopen", this.handleSourceOpen_), this.mediaSource.removeEventListener("sourceended", this.handleSourceEnded_), this.off()
                }
                main() {
                    return this.mainPlaylistLoader_.main
                }
                media() {
                    return this.mainPlaylistLoader_.media() || this.initialMedia_
                }
                areMediaTypesKnown_() {
                    let e = !!this.mediaTypes_.AUDIO.activePlaylistLoader,
                        t = !!this.mainSegmentLoader_.getCurrentMediaInfo_(),
                        i = !e || !!this.audioSegmentLoader_.getCurrentMediaInfo_();
                    return !!t && !!i
                }
                getCodecsOrExclude_() {
                    let e;
                    let t = {
                            main: this.mainSegmentLoader_.getCurrentMediaInfo_() || {},
                            audio: this.audioSegmentLoader_.getCurrentMediaInfo_() || {}
                        },
                        i = this.mainSegmentLoader_.getPendingSegmentPlaylist() || this.media();
                    t.video = t.main;
                    let s = aw(this.main(), i),
                        r = {},
                        n = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
                    if (t.main.hasVideo && (r.video = s.video || t.main.videoCodec || C.xz), t.main.isMuxed && (r.video += `,${s.audio||t.main.audioCodec||C.lA}`), (t.main.hasAudio && !t.main.isMuxed || t.audio.hasAudio || n) && (r.audio = s.audio || t.main.audioCodec || t.audio.audioCodec || C.lA, t.audio.isFmp4 = t.main.hasAudio && !t.main.isMuxed ? t.main.isFmp4 : t.audio.isFmp4), !r.audio && !r.video) {
                        this.excludePlaylist({
                            playlistToExclude: i,
                            error: {
                                message: "Could not determine codecs for playlist."
                            },
                            playlistExclusionDuration: 1 / 0
                        });
                        return
                    }
                    let a = (e, t) => e ? (0, C.p7)(t) : (0, C.Hi)(t),
                        o = {};
                    if (["video", "audio"].forEach(function(i) {
                            if (r.hasOwnProperty(i) && !a(t[i].isFmp4, r[i])) {
                                let s = t[i].isFmp4 ? "browser" : "muxer";
                                o[s] = o[s] || [], o[s].push(r[i]), "audio" === i && (e = s)
                            }
                        }), n && e && i.attributes.AUDIO) {
                        let t = i.attributes.AUDIO;
                        this.main().playlists.forEach(e => {
                            (e.attributes && e.attributes.AUDIO) === t && e !== i && (e.excludeUntil = 1 / 0)
                        }), this.logger_(`excluding audio group ${t} as ${e} does not support codec(s): "${r.audio}"`)
                    }
                    if (Object.keys(o).length) {
                        let e = Object.keys(o).reduce((e, t) => (e && (e += ", "), e += `${t} does not support codec(s): "${o[t].join(",")}"`), "") + ".";
                        this.excludePlaylist({
                            playlistToExclude: i,
                            error: {
                                internal: !0,
                                message: e
                            },
                            playlistExclusionDuration: 1 / 0
                        });
                        return
                    }
                    if (this.sourceUpdater_.hasCreatedSourceBuffers() && !this.sourceUpdater_.canChangeType()) {
                        let e = [];
                        if (["video", "audio"].forEach(t => {
                                let i = ((0, C.kS)(this.sourceUpdater_.codecs[t] || "")[0] || {}).type,
                                    s = ((0, C.kS)(r[t] || "")[0] || {}).type;
                                i && s && i.toLowerCase() !== s.toLowerCase() && e.push(`"${this.sourceUpdater_.codecs[t]}" -> "${r[t]}"`)
                            }), e.length) {
                            this.excludePlaylist({
                                playlistToExclude: i,
                                error: {
                                    message: `Codec switching not supported: ${e.join(", ")}.`,
                                    internal: !0
                                },
                                playlistExclusionDuration: 1 / 0
                            });
                            return
                        }
                    }
                    return r
                }
                tryToCreateSourceBuffers_() {
                    if ("open" !== this.mediaSource.readyState || this.sourceUpdater_.hasCreatedSourceBuffers() || !this.areMediaTypesKnown_()) return;
                    let e = this.getCodecsOrExclude_();
                    if (!e) return;
                    this.sourceUpdater_.createSourceBuffers(e);
                    let t = [e.video, e.audio].filter(Boolean).join(",");
                    this.excludeIncompatibleVariants_(t)
                }
                excludeUnsupportedVariants_() {
                    let e = this.main().playlists,
                        t = [];
                    Object.keys(e).forEach(i => {
                        let s = e[i];
                        if (-1 !== t.indexOf(s.id)) return;
                        t.push(s.id);
                        let r = aw(this.main, s),
                            n = [];
                        !r.audio || (0, C.Hi)(r.audio) || (0, C.p7)(r.audio) || n.push(`audio codec ${r.audio}`), !r.video || (0, C.Hi)(r.video) || (0, C.p7)(r.video) || n.push(`video codec ${r.video}`), r.text && "stpp.ttml.im1t" === r.text && n.push(`text codec ${r.text}`), n.length && (s.excludeUntil = 1 / 0, this.logger_(`excluding ${s.id} for unsupported: ${n.join(", ")}`))
                    })
                }
                excludeIncompatibleVariants_(e) {
                    let t = [],
                        i = this.main().playlists,
                        s = aC((0, C.kS)(e)),
                        r = aE(s),
                        n = s.video && (0, C.kS)(s.video)[0] || null,
                        a = s.audio && (0, C.kS)(s.audio)[0] || null;
                    Object.keys(i).forEach(e => {
                        let s = i[e];
                        if (-1 !== t.indexOf(s.id) || s.excludeUntil === 1 / 0) return;
                        t.push(s.id);
                        let o = [],
                            l = aw(this.mainPlaylistLoader_.main, s),
                            h = aE(l);
                        if (l.audio || l.video) {
                            if (h !== r && o.push(`codec count "${h}" !== "${r}"`), !this.sourceUpdater_.canChangeType()) {
                                let e = l.video && (0, C.kS)(l.video)[0] || null,
                                    t = l.audio && (0, C.kS)(l.audio)[0] || null;
                                e && n && e.type.toLowerCase() !== n.type.toLowerCase() && o.push(`video codec "${e.type}" !== "${n.type}"`), t && a && t.type.toLowerCase() !== a.type.toLowerCase() && o.push(`audio codec "${t.type}" !== "${a.type}"`)
                            }
                            o.length && (s.excludeUntil = 1 / 0, this.logger_(`excluding ${s.id}: ${o.join(" && ")}`))
                        }
                    })
                }
                updateAdCues_(e) {
                    let t = 0,
                        i = this.seekable();
                    i.length && (t = i.start(0)), oy(e, this.cueTagsTrack_, t)
                }
                goalBufferLength() {
                    let e = this.tech_.currentTime(),
                        t = nQ.GOAL_BUFFER_LENGTH,
                        i = nQ.GOAL_BUFFER_LENGTH_RATE,
                        s = Math.max(t, nQ.MAX_GOAL_BUFFER_LENGTH);
                    return Math.min(t + e * i, s)
                }
                bufferLowWaterLine() {
                    let e = this.tech_.currentTime(),
                        t = nQ.BUFFER_LOW_WATER_LINE,
                        i = nQ.BUFFER_LOW_WATER_LINE_RATE,
                        s = Math.max(t, nQ.MAX_BUFFER_LOW_WATER_LINE),
                        r = Math.max(t, nQ.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE);
                    return Math.min(t + e * i, this.bufferBasedABR ? r : s)
                }
                bufferHighWaterLine() {
                    return nQ.BUFFER_HIGH_WATER_LINE
                }
                addDateRangesToTextTrack_(e) {
                    aV(this.inbandTextTracks_, "com.apple.streaming", this.tech_), aH({
                        inbandTextTracks: this.inbandTextTracks_,
                        dateRanges: e
                    })
                }
                addMetadataToTextTrack(e, t, i) {
                    let s = this.sourceUpdater_.videoBuffer ? this.sourceUpdater_.videoTimestampOffset() : this.sourceUpdater_.audioTimestampOffset();
                    aV(this.inbandTextTracks_, e, this.tech_), aF({
                        inbandTextTracks: this.inbandTextTracks_,
                        metadataArray: t,
                        timestampOffset: s,
                        videoDuration: i
                    })
                }
                pathwayAttribute_(e) {
                    return e.attributes["PATHWAY-ID"] || e.attributes.serviceLocation
                }
                initContentSteeringController_() {
                    let e = this.main();
                    if (e.contentSteering) {
                        for (let t of e.playlists) this.contentSteeringController_.addAvailablePathway(this.pathwayAttribute_(t));
                        if (this.contentSteeringController_.assignTagProperties(e.uri, e.contentSteering), this.contentSteeringController_.queryBeforeStart) {
                            this.contentSteeringController_.requestSteeringManifest(!0);
                            return
                        }
                        this.tech_.one("canplay", () => {
                            this.contentSteeringController_.requestSteeringManifest()
                        })
                    }
                }
                resetContentSteeringController_() {
                    this.contentSteeringController_.clearAvailablePathways(), this.contentSteeringController_.dispose(), this.initContentSteeringController_()
                }
                attachContentSteeringListeners_() {
                    this.contentSteeringController_.on("content-steering", this.excludeThenChangePathway_.bind(this)), "dash" === this.sourceType_ && this.mainPlaylistLoader_.on("loadedplaylist", () => {
                        let e = this.main();
                        (this.contentSteeringController_.didDASHTagChange(e.uri, e.contentSteering) || (() => {
                            let t = this.contentSteeringController_.getAvailablePathways(),
                                i = [];
                            for (let s of e.playlists) {
                                let e = s.attributes.serviceLocation;
                                if (e && (i.push(e), !t.has(e))) return !0
                            }
                            return !i.length && !!t.size
                        })()) && this.resetContentSteeringController_()
                    })
                }
                excludeThenChangePathway_() {
                    let e = this.contentSteeringController_.getPathway();
                    if (!e) return;
                    this.handlePathwayClones_();
                    let t = this.main().playlists,
                        i = new Set,
                        s = !1;
                    Object.keys(t).forEach(r => {
                        let n = t[r],
                            a = this.pathwayAttribute_(n),
                            o = a && e !== a;
                        n.excludeUntil !== 1 / 0 || "content-steering" !== n.lastExcludeReason_ || o || (delete n.excludeUntil, delete n.lastExcludeReason_, s = !0);
                        let l = !n.excludeUntil && n.excludeUntil !== 1 / 0;
                        !i.has(n.id) && o && l && (i.add(n.id), n.excludeUntil = 1 / 0, n.lastExcludeReason_ = "content-steering", this.logger_(`excluding ${n.id} for ${n.lastExcludeReason_}`))
                    }), "DASH" === this.contentSteeringController_.manifestType_ && Object.keys(this.mediaTypes_).forEach(t => {
                        let i = this.mediaTypes_[t];
                        if (i.activePlaylistLoader) {
                            let t = i.activePlaylistLoader.media_;
                            t && t.attributes.serviceLocation !== e && (s = !0)
                        }
                    }), s && this.changeSegmentPathway_()
                }
                handlePathwayClones_() {
                    let e = this.main().playlists,
                        t = this.contentSteeringController_.currentPathwayClones,
                        i = this.contentSteeringController_.nextPathwayClones;
                    if (t && t.size || i && i.size) {
                        for (let [e, s] of t.entries()) i.get(e) || (this.mainPlaylistLoader_.updateOrDeleteClone(s), this.contentSteeringController_.excludePathway(e));
                        for (let [s, r] of i.entries()) {
                            let i = t.get(s);
                            if (!i) {
                                e.filter(e => e.attributes["PATHWAY-ID"] === r["BASE-ID"]).forEach(e => {
                                    this.mainPlaylistLoader_.addClonePathway(r, e)
                                }), this.contentSteeringController_.addAvailablePathway(s);
                                continue
                            }
                            this.equalPathwayClones_(i, r) || (this.mainPlaylistLoader_.updateOrDeleteClone(r, !0), this.contentSteeringController_.addAvailablePathway(s))
                        }
                        this.contentSteeringController_.currentPathwayClones = new Map(JSON.parse(JSON.stringify([...i])))
                    }
                }
                equalPathwayClones_(e, t) {
                    if (e["BASE-ID"] !== t["BASE-ID"] || e.ID !== t.ID || e["URI-REPLACEMENT"].HOST !== t["URI-REPLACEMENT"].HOST) return !1;
                    let i = e["URI-REPLACEMENT"].PARAMS,
                        s = t["URI-REPLACEMENT"].PARAMS;
                    for (let e in i)
                        if (i[e] !== s[e]) return !1;
                    for (let e in s)
                        if (i[e] !== s[e]) return !1;
                    return !0
                }
                changeSegmentPathway_() {
                    let e = this.selectPlaylist();
                    this.pauseLoading(), "DASH" === this.contentSteeringController_.manifestType_ && this.switchMediaForDASHContentSteering_(), this.switchMedia_(e, "content-steering")
                }
                excludeNonUsablePlaylistsByKeyId_() {
                    if (!this.mainPlaylistLoader_ || !this.mainPlaylistLoader_.main) return;
                    let e = 0,
                        t = "non-usable";
                    this.mainPlaylistLoader_.main.playlists.forEach(i => {
                        let s = this.mainPlaylistLoader_.getKeyIdSet(i);
                        s && s.size && s.forEach(s => {
                            let r = "usable",
                                n = this.keyStatusMap_.has(s) && this.keyStatusMap_.get(s) === r,
                                a = i.lastExcludeReason_ === t && i.excludeUntil === 1 / 0;
                            n ? n && a && (delete i.excludeUntil, delete i.lastExcludeReason_, this.logger_(`enabling playlist ${i.id} because key ID ${s} is ${r}`)) : (i.excludeUntil !== 1 / 0 && i.lastExcludeReason_ !== t && (i.excludeUntil = 1 / 0, i.lastExcludeReason_ = t, this.logger_(`excluding playlist ${i.id} because the key ID ${s} doesn't exist in the keyStatusMap or is not ${r}`)), e++)
                        })
                    }), e >= this.mainPlaylistLoader_.main.playlists.length && this.mainPlaylistLoader_.main.playlists.forEach(e => {
                        let i = e && e.attributes && e.attributes.RESOLUTION && e.attributes.RESOLUTION.height < 720,
                            s = e.excludeUntil === 1 / 0 && e.lastExcludeReason_ === t;
                        i && s && (delete e.excludeUntil, r_.log.warn(`enabling non-HD playlist ${e.id} because all playlists were excluded due to ${t} key IDs`))
                    })
                }
                addKeyStatus_(e, t) {
                    let i = ("string" == typeof e ? e : op(e)).slice(0, 32).toLowerCase();
                    this.logger_(`KeyStatus '${t}' with key ID ${i} added to the keyStatusMap`), this.keyStatusMap_.set(i, t)
                }
                updatePlaylistByKeyStatus(e, t) {
                    this.addKeyStatus_(e, t), this.waitingForFastQualityPlaylistReceived_ || this.excludeNonUsableThenChangePlaylist_(), this.mainPlaylistLoader_.off("loadedplaylist", this.excludeNonUsableThenChangePlaylist_.bind(this)), this.mainPlaylistLoader_.on("loadedplaylist", this.excludeNonUsableThenChangePlaylist_.bind(this))
                }
                excludeNonUsableThenChangePlaylist_() {
                    this.excludeNonUsablePlaylistsByKeyId_(), this.fastQualityChange_()
                }
            }
            let oG = (e, t, i) => s => {
                let r = e.main.playlists[t],
                    n = rJ(r),
                    a = rZ(r);
                return void 0 === s ? a : (s ? delete r.disabled : r.disabled = !0, s === a || n || (i(r), s ? e.trigger("renditionenabled") : e.trigger("renditiondisabled")), s)
            };
            class oK {
                constructor(e, t, i) {
                    let {
                        playlistController_: s
                    } = e, r = s.fastQualityChange_.bind(s);
                    if (t.attributes) {
                        let e = t.attributes.RESOLUTION;
                        this.width = e && e.width, this.height = e && e.height, this.bandwidth = t.attributes.BANDWIDTH, this.frameRate = t.attributes["FRAME-RATE"]
                    }
                    this.codecs = aw(s.main(), t), this.playlist = t, this.id = i, this.enabled = oG(e.playlists, t.id, r)
                }
            }
            let oQ = function(e) {
                    e.representations = () => {
                        let t = e.playlistController_.main(),
                            i = r8(t) ? e.playlistController_.getAudioTrackPlaylists_() : t.playlists;
                        return i ? i.filter(e => !rJ(e)).map((t, i) => new oK(e, t, t.id)) : []
                    }
                },
                oY = ["seeking", "seeked", "pause", "playing", "error"];
            class oX {
                constructor(e) {
                    this.playlistController_ = e.playlistController, this.tech_ = e.tech, this.seekable = e.seekable, this.allowSeeksWithinUnsafeLiveWindow = e.allowSeeksWithinUnsafeLiveWindow, this.liveRangeSafeTimeDelta = e.liveRangeSafeTimeDelta, this.media = e.media, this.consecutiveUpdates = 0, this.lastRecordedTime = null, this.checkCurrentTimeTimeout_ = null, this.logger_ = rE("PlaybackWatcher"), this.logger_("initialize");
                    let t = () => this.monitorCurrentTime_(),
                        i = () => this.monitorCurrentTime_(),
                        s = () => this.techWaiting_(),
                        r = () => this.resetTimeUpdate_(),
                        n = this.playlistController_,
                        a = ["main", "subtitle", "audio"],
                        o = {};
                    a.forEach(e => {
                        o[e] = {
                            reset: () => this.resetSegmentDownloads_(e),
                            updateend: () => this.checkSegmentDownloads_(e)
                        }, n[`${e}SegmentLoader_`].on("appendsdone", o[e].updateend), n[`${e}SegmentLoader_`].on("playlistupdate", o[e].reset), this.tech_.on(["seeked", "seeking"], o[e].reset)
                    });
                    let l = e => {
                        ["main", "audio"].forEach(t => {
                            n[`${t}SegmentLoader_`][e]("appended", this.seekingAppendCheck_)
                        })
                    };
                    this.seekingAppendCheck_ = () => {
                        this.fixesBadSeeks_() && (this.consecutiveUpdates = 0, this.lastRecordedTime = this.tech_.currentTime(), l("off"))
                    }, this.clearSeekingAppendCheck_ = () => l("off"), this.watchForBadSeeking_ = () => {
                        this.clearSeekingAppendCheck_(), l("on")
                    }, this.tech_.on("seeked", this.clearSeekingAppendCheck_), this.tech_.on("seeking", this.watchForBadSeeking_), this.tech_.on("waiting", s), this.tech_.on(oY, r), this.tech_.on("canplay", i), this.tech_.one("play", t), this.dispose = () => {
                        this.clearSeekingAppendCheck_(), this.logger_("dispose"), this.tech_.off("waiting", s), this.tech_.off(oY, r), this.tech_.off("canplay", i), this.tech_.off("play", t), this.tech_.off("seeking", this.watchForBadSeeking_), this.tech_.off("seeked", this.clearSeekingAppendCheck_), a.forEach(e => {
                            n[`${e}SegmentLoader_`].off("appendsdone", o[e].updateend), n[`${e}SegmentLoader_`].off("playlistupdate", o[e].reset), this.tech_.off(["seeked", "seeking"], o[e].reset)
                        }), this.checkCurrentTimeTimeout_ && d().clearTimeout(this.checkCurrentTimeTimeout_), this.resetTimeUpdate_()
                    }
                }
                monitorCurrentTime_() {
                    this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && d().clearTimeout(this.checkCurrentTimeTimeout_), this.checkCurrentTimeTimeout_ = d().setTimeout(this.monitorCurrentTime_.bind(this), 250)
                }
                resetSegmentDownloads_(e) {
                    let t = this.playlistController_[`${e}SegmentLoader_`];
                    this[`${e}StalledDownloads_`] > 0 && this.logger_(`resetting possible stalled download count for ${e} loader`), this[`${e}StalledDownloads_`] = 0, this[`${e}Buffered_`] = t.buffered_()
                }
                checkSegmentDownloads_(e) {
                    let t = this.playlistController_,
                        i = t[`${e}SegmentLoader_`],
                        s = i.buffered_(),
                        r = rB(this[`${e}Buffered_`], s);
                    if (this[`${e}Buffered_`] = s, r) {
                        this.resetSegmentDownloads_(e);
                        return
                    }
                    this[`${e}StalledDownloads_`]++, this.logger_(`found #${this[`${e}StalledDownloads_`]} ${e} appends that did not increase buffer (possible stalled download)`, {
                        playlistId: i.playlist_ && i.playlist_.id,
                        buffered: rU(s)
                    }), !(this[`${e}StalledDownloads_`] < 10) && (this.logger_(`${e} loader stalled download exclusion`), this.resetSegmentDownloads_(e), this.tech_.trigger({
                        type: "usage",
                        name: `vhs-${e}-download-exclusion`
                    }), "subtitle" !== e && t.excludePlaylist({
                        error: {
                            message: `Excessive ${e} segment downloading detected.`
                        },
                        playlistExclusionDuration: 1 / 0
                    }))
                }
                checkCurrentTime_() {
                    if (this.tech_.paused() || this.tech_.seeking()) return;
                    let e = this.tech_.currentTime(),
                        t = this.tech_.buffered();
                    if (this.lastRecordedTime === e && (!t.length || e + rP >= t.end(t.length - 1))) return this.techWaiting_();
                    this.consecutiveUpdates >= 5 && e === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_()) : e === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0, this.lastRecordedTime = e)
                }
                resetTimeUpdate_() {
                    this.consecutiveUpdates = 0
                }
                fixesBadSeeks_() {
                    let e;
                    if (!this.tech_.seeking()) return !1;
                    let t = this.seekable(),
                        i = this.tech_.currentTime();
                    if (this.afterSeekableWindow_(t, i, this.media(), this.allowSeeksWithinUnsafeLiveWindow) && (e = t.end(t.length - 1)), this.beforeSeekableWindow_(t, i)) {
                        let i = t.start(0);
                        e = i + (i === t.end(0) ? 0 : rP)
                    }
                    if (void 0 !== e) return this.logger_(`Trying to seek outside of seekable at time ${i} with seekable range ${rR(t)}. Seeking to ${e}.`), this.tech_.setCurrentTime(e), !0;
                    let s = this.playlistController_.sourceUpdater_,
                        r = this.tech_.buffered(),
                        n = s.audioBuffer ? s.audioBuffered() : null,
                        a = s.videoBuffer ? s.videoBuffered() : null,
                        o = this.media(),
                        l = o.partTargetDuration ? o.partTargetDuration : (o.targetDuration - rI) * 2,
                        h = [n, a];
                    for (let e = 0; e < h.length; e++)
                        if (h[e] && rj(h[e], i) < l) return !1;
                    let d = rD(r, i);
                    return 0 !== d.length && (e = d.start(0) + rP, this.logger_(`Buffered region starts (${d.start(0)})  just beyond seek point (${i}). Seeking to ${e}.`), this.tech_.setCurrentTime(e), !0)
                }
                waiting_() {
                    if (this.techWaiting_()) return;
                    let e = this.tech_.currentTime(),
                        t = rL(this.tech_.buffered(), e);
                    if (t.length && e + 3 <= t.end(0)) {
                        this.resetTimeUpdate_(), this.tech_.setCurrentTime(e), this.logger_(`Stopped at ${e} while inside a buffered region [${t.start(0)} -> ${t.end(0)}]. Attempting to resume playback by seeking to the current time.`), this.tech_.trigger({
                            type: "usage",
                            name: "vhs-unknown-waiting"
                        });
                        return
                    }
                }
                techWaiting_() {
                    let e = this.seekable(),
                        t = this.tech_.currentTime();
                    if (this.tech_.seeking()) return !0;
                    if (this.beforeSeekableWindow_(e, t)) {
                        let i = e.end(e.length - 1);
                        return this.logger_(`Fell out of live window at time ${t}. Seeking to live point (seekable end) ${i}`), this.resetTimeUpdate_(), this.tech_.setCurrentTime(i), this.tech_.trigger({
                            type: "usage",
                            name: "vhs-live-resync"
                        }), !0
                    }
                    let i = this.tech_.vhs.playlistController_.sourceUpdater_,
                        s = this.tech_.buffered();
                    if (this.videoUnderflow_({
                            audioBuffered: i.audioBuffered(),
                            videoBuffered: i.videoBuffered(),
                            currentTime: t
                        })) return this.resetTimeUpdate_(), this.tech_.setCurrentTime(t), this.tech_.trigger({
                        type: "usage",
                        name: "vhs-video-underflow"
                    }), !0;
                    let r = rD(s, t);
                    return r.length > 0 && (this.logger_(`Stopped at ${t} and seeking to ${r.start(0)}`), this.resetTimeUpdate_(), this.skipTheGap_(t), !0)
                }
                afterSeekableWindow_(e, t, i, s = !1) {
                    if (!e.length) return !1;
                    let r = e.end(e.length - 1) + rP,
                        n = !i.endList,
                        a = "number" == typeof i.partTargetDuration;
                    return n && (a || s) && (r = e.end(e.length - 1) + 3 * i.targetDuration), t > r
                }
                beforeSeekableWindow_(e, t) {
                    return !!(e.length && e.start(0) > 0 && t < e.start(0) - this.liveRangeSafeTimeDelta)
                }
                videoUnderflow_({
                    videoBuffered: e,
                    audioBuffered: t,
                    currentTime: i
                }) {
                    let s;
                    if (e) {
                        if (e.length && t.length) {
                            let r = rL(e, i - 3),
                                n = rL(e, i),
                                a = rL(t, i);
                            a.length && !n.length && r.length && (s = {
                                start: r.end(0),
                                end: a.end(0)
                            })
                        } else rD(e, i).length || (s = this.gapFromVideoUnderflow_(e, i));
                        return !!s && (this.logger_(`Encountered a gap in video from ${s.start} to ${s.end}. Seeking to current time ${i}`), !0)
                    }
                }
                skipTheGap_(e) {
                    let t = this.tech_.buffered(),
                        i = this.tech_.currentTime(),
                        s = rD(t, i);
                    this.resetTimeUpdate_(), 0 !== s.length && i === e && (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", e, "nextRange start:", s.start(0)), this.tech_.setCurrentTime(s.start(0) + rI), this.tech_.trigger({
                        type: "usage",
                        name: "vhs-gap-skip"
                    }))
                }
                gapFromVideoUnderflow_(e, t) {
                    let i = rO(e);
                    for (let e = 0; e < i.length; e++) {
                        let s = i.start(e),
                            r = i.end(e);
                        if (t - s < 4 && t - s > 2) return {
                            start: s,
                            end: r
                        }
                    }
                    return null
                }
            }
            let oJ = {
                    errorInterval: 30,
                    getSource(e) {
                        return e(this.tech({
                            IWillNotUseThisInPlugins: !0
                        }).currentSource_ || this.currentSource())
                    }
                },
                oZ = function(e, t) {
                    let i = 0,
                        s = 0,
                        r = rw(oJ, t);
                    e.ready(() => {
                        e.trigger({
                            type: "usage",
                            name: "vhs-error-reload-initialized"
                        })
                    });
                    let n = function() {
                            s && e.currentTime(s)
                        },
                        a = function(t) {
                            null != t && (s = e.duration() !== 1 / 0 && e.currentTime() || 0, e.one("loadedmetadata", n), e.src(t), e.trigger({
                                type: "usage",
                                name: "vhs-error-reload"
                            }), e.play())
                        },
                        o = function() {
                            if (Date.now() - i < 1e3 * r.errorInterval) {
                                e.trigger({
                                    type: "usage",
                                    name: "vhs-error-reload-canceled"
                                });
                                return
                            }
                            if (!r.getSource || "function" != typeof r.getSource) {
                                r_.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!");
                                return
                            }
                            return i = Date.now(), r.getSource.call(e, a)
                        },
                        l = function() {
                            e.off("loadedmetadata", n), e.off("error", o), e.off("dispose", l)
                        };
                    e.on("error", o), e.on("dispose", l), e.reloadSourceOnError = function(t) {
                        l(), oZ(e, t)
                    }
                };
            var o0 = "3.12.1";
            let o1 = {
                PlaylistLoader: nf,
                Playlist: r5,
                utils: nI,
                STANDARD_PLAYLIST_SELECTOR: aO,
                INITIAL_PLAYLIST_SELECTOR: function() {
                    let e = this.playlists.main.playlists.filter(r5.isEnabled);
                    return aA(e, (e, t) => aL(e, t)), e.filter(e => !!aw(this.playlists.main, e).video)[0] || null
                },
                lastBandwidthSelector: aO,
                movingAverageBandwidthSelector: function(e) {
                    let t = -1,
                        i = -1;
                    if (e < 0 || e > 1) throw Error("Moving average bandwidth decay must be between 0 and 1.");
                    return function() {
                        let s = this.useDevicePixelRatio && d().devicePixelRatio || 1;
                        return isNaN(this.customPixelRatio) || (s = this.customPixelRatio), t < 0 && (t = this.systemBandwidth, i = this.systemBandwidth), this.systemBandwidth > 0 && this.systemBandwidth !== i && (t = e * this.systemBandwidth + (1 - e) * t, i = this.systemBandwidth), aD(this.playlists.main, t, parseInt(aP(this.tech_.el(), "width"), 10) * s, parseInt(aP(this.tech_.el(), "height"), 10) * s, this.limitRenditionByPlayerDimensions, this.playlistController_)
                    }
                },
                comparePlaylistBandwidth: aL,
                comparePlaylistResolution: function(e, t) {
                    let i, s;
                    return (e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (i = e.attributes.RESOLUTION.width), i = i || d().Number.MAX_VALUE, t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (s = t.attributes.RESOLUTION.width), i === (s = s || d().Number.MAX_VALUE) && e.attributes.BANDWIDTH && t.attributes.BANDWIDTH) ? e.attributes.BANDWIDTH - t.attributes.BANDWIDTH : i - s
                },
                xhr: nT()
            };
            Object.keys(nQ).forEach(e => {
                Object.defineProperty(o1, e, {
                    get: () => (r_.log.warn(`using Vhs.${e} is UNSAFE be sure you know what you are doing`), nQ[e]),
                    set(t) {
                        if (r_.log.warn(`using Vhs.${e} is UNSAFE be sure you know what you are doing`), "number" != typeof t || t < 0) {
                            r_.log.warn(`value of Vhs.${e} must be greater than or equal to 0`);
                            return
                        }
                        nQ[e] = t
                    }
                })
            });
            let o2 = "videojs-vhs",
                o4 = function(e, t) {
                    let i = t.media(),
                        s = -1;
                    for (let t = 0; t < e.length; t++)
                        if (e[t].id === i.id) {
                            s = t;
                            break
                        }
                    e.selectedIndex_ = s, e.trigger({
                        selectedIndex: s,
                        type: "change"
                    })
                },
                o8 = function(e, t) {
                    t.representations().forEach(t => {
                        e.addQualityLevel(t)
                    }), o4(e, t.playlists)
                };
            o1.canPlaySource = function() {
                return r_.log.warn("VHS is no longer a tech. Please remove it from your player's techOrder.")
            };
            let o5 = (e, t, i) => {
                    if (!e) return e;
                    let s = {};
                    t && t.attributes && t.attributes.CODECS && (s = aC((0, C.kS)(t.attributes.CODECS))), i && i.attributes && i.attributes.CODECS && (s.audio = i.attributes.CODECS);
                    let r = (0, C._5)(s.video),
                        n = (0, C._5)(s.audio),
                        a = {};
                    for (let i in e) a[i] = {}, n && (a[i].audioContentType = n), r && (a[i].videoContentType = r), t.contentProtection && t.contentProtection[i] && t.contentProtection[i].pssh && (a[i].pssh = t.contentProtection[i].pssh), "string" == typeof e[i] && (a[i].url = e[i]);
                    return rw(e, a)
                },
                o3 = (e, t) => e.reduce((e, i) => {
                    if (!i.contentProtection) return e;
                    let s = t.reduce((e, t) => {
                        let s = i.contentProtection[t];
                        return s && s.pssh && (e[t] = {
                            pssh: s.pssh
                        }), e
                    }, {});
                    return Object.keys(s).length && e.push(s), e
                }, []),
                o6 = ({
                    player: e,
                    sourceKeySystems: t,
                    audioMedia: i,
                    mainPlaylists: s
                }) => {
                    if (!e.eme.initializeMediaKeys) return Promise.resolve();
                    let r = o3(i ? s.concat([i]) : s, Object.keys(t)),
                        n = [],
                        a = [];
                    return r.forEach(t => {
                        a.push(new Promise((t, i) => {
                            e.tech_.one("keysessioncreated", t)
                        })), n.push(new Promise((i, s) => {
                            e.eme.initializeMediaKeys({
                                keySystems: t
                            }, e => {
                                if (e) {
                                    s(e);
                                    return
                                }
                                i()
                            })
                        }))
                    }), Promise.race([Promise.all(n), Promise.race(a)])
                },
                o7 = ({
                    player: e,
                    sourceKeySystems: t,
                    media: i,
                    audioMedia: s
                }) => {
                    let r = o5(t, i, s);
                    return !!r && (e.currentSource().keySystems = r, !r || !!e.eme || (r_.log.warn("DRM encrypted source cannot be decrypted without a DRM plugin"), !1))
                },
                o9 = () => {
                    if (!d().localStorage) return null;
                    let e = d().localStorage.getItem(o2);
                    if (!e) return null;
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        return null
                    }
                },
                le = e => {
                    if (!d().localStorage) return !1;
                    let t = o9();
                    t = t ? rw(t, e) : e;
                    try {
                        d().localStorage.setItem(o2, JSON.stringify(t))
                    } catch (e) {
                        return !1
                    }
                    return t
                },
                lt = e => 0 === e.toLowerCase().indexOf("data:application/vnd.videojs.vhs+json,") ? JSON.parse(e.substring(e.indexOf(",") + 1)) : e,
                li = (e, t) => {
                    e._requestCallbackSet || (e._requestCallbackSet = new Set), e._requestCallbackSet.add(t)
                },
                ls = (e, t) => {
                    e._responseCallbackSet || (e._responseCallbackSet = new Set), e._responseCallbackSet.add(t)
                },
                lr = (e, t) => {
                    e._requestCallbackSet && (e._requestCallbackSet.delete(t), e._requestCallbackSet.size || delete e._requestCallbackSet)
                },
                ln = (e, t) => {
                    e._responseCallbackSet && (e._responseCallbackSet.delete(t), e._responseCallbackSet.size || delete e._responseCallbackSet)
                };
            o1.supportsNativeHls = function() {
                if (!c() || !c().createElement) return !1;
                let e = c().createElement("video");
                return !!r_.getTech("Html5").isSupported() && ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some(function(t) {
                    return /maybe|probably/i.test(e.canPlayType(t))
                })
            }(), o1.supportsNativeDash = !!(c() && c().createElement && r_.getTech("Html5").isSupported()) && /maybe|probably/i.test(c().createElement("video").canPlayType("application/dash+xml")), o1.supportsTypeNatively = e => "hls" === e ? o1.supportsNativeHls : "dash" === e && o1.supportsNativeDash, o1.isSupported = function() {
                return r_.log.warn("VHS is no longer a tech. Please remove it from your player's techOrder.")
            }, o1.xhr.onRequest = function(e) {
                li(o1.xhr, e)
            }, o1.xhr.onResponse = function(e) {
                ls(o1.xhr, e)
            }, o1.xhr.offRequest = function(e) {
                lr(o1.xhr, e)
            }, o1.xhr.offResponse = function(e) {
                ln(o1.xhr, e)
            };
            let la = r_.getComponent("Component");
            class lo extends la {
                constructor(e, t, i) {
                    if (super(t, i.vhs), "number" == typeof i.initialBandwidth && (this.options_.bandwidth = i.initialBandwidth), this.logger_ = rE("VhsHandler"), t.options_ && t.options_.playerId) {
                        let e = r_.getPlayer(t.options_.playerId);
                        this.player_ = e
                    }
                    if (this.tech_ = t, this.source_ = e, this.stats = {}, this.ignoreNextSeekingEvent_ = !1, this.setOptions_(), this.options_.overrideNative && t.overrideNativeAudioTracks && t.overrideNativeVideoTracks) t.overrideNativeAudioTracks(!0), t.overrideNativeVideoTracks(!0);
                    else if (this.options_.overrideNative && (t.featuresNativeVideoTracks || t.featuresNativeAudioTracks)) throw Error("Overriding native VHS requires emulated tracks. See https://git.io/vMpjB");
                    this.on(c(), ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], e => {
                        let t = c().fullscreenElement || c().webkitFullscreenElement || c().mozFullScreenElement || c().msFullscreenElement;
                        t && t.contains(this.tech_.el()) ? this.playlistController_.fastQualityChange_() : this.playlistController_.checkABR_()
                    }), this.on(this.tech_, "seeking", function() {
                        if (this.ignoreNextSeekingEvent_) {
                            this.ignoreNextSeekingEvent_ = !1;
                            return
                        }
                        this.setCurrentTime(this.tech_.currentTime())
                    }), this.on(this.tech_, "error", function() {
                        this.tech_.error() && this.playlistController_ && this.playlistController_.pauseLoading()
                    }), this.on(this.tech_, "play", this.play)
                }
                setOptions_(e = {}) {
                    if (this.options_ = rw(this.options_, e), this.options_.withCredentials = this.options_.withCredentials || !1, this.options_.limitRenditionByPlayerDimensions = !1 !== this.options_.limitRenditionByPlayerDimensions, this.options_.useDevicePixelRatio = this.options_.useDevicePixelRatio || !1, this.options_.useBandwidthFromLocalStorage = void 0 !== this.source_.useBandwidthFromLocalStorage ? this.source_.useBandwidthFromLocalStorage : this.options_.useBandwidthFromLocalStorage || !1, this.options_.useForcedSubtitles = this.options_.useForcedSubtitles || !1, this.options_.useNetworkInformationApi = this.options_.useNetworkInformationApi || !1, this.options_.useDtsForTimestampOffset = this.options_.useDtsForTimestampOffset || !1, this.options_.customTagParsers = this.options_.customTagParsers || [], this.options_.customTagMappers = this.options_.customTagMappers || [], this.options_.cacheEncryptionKeys = this.options_.cacheEncryptionKeys || !1, this.options_.llhls = !1 !== this.options_.llhls, this.options_.bufferBasedABR = this.options_.bufferBasedABR || !1, "number" != typeof this.options_.playlistExclusionDuration && (this.options_.playlistExclusionDuration = 60), "number" != typeof this.options_.bandwidth && this.options_.useBandwidthFromLocalStorage) {
                        let e = o9();
                        e && e.bandwidth && (this.options_.bandwidth = e.bandwidth, this.tech_.trigger({
                            type: "usage",
                            name: "vhs-bandwidth-from-local-storage"
                        })), e && e.throughput && (this.options_.throughput = e.throughput, this.tech_.trigger({
                            type: "usage",
                            name: "vhs-throughput-from-local-storage"
                        }))
                    }
                    "number" != typeof this.options_.bandwidth && (this.options_.bandwidth = nQ.INITIAL_BANDWIDTH), this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === nQ.INITIAL_BANDWIDTH, ["withCredentials", "useDevicePixelRatio", "customPixelRatio", "limitRenditionByPlayerDimensions", "bandwidth", "customTagParsers", "customTagMappers", "cacheEncryptionKeys", "playlistSelector", "initialPlaylistSelector", "bufferBasedABR", "liveRangeSafeTimeDelta", "llhls", "useForcedSubtitles", "useNetworkInformationApi", "useDtsForTimestampOffset", "exactManifestTimings", "leastPixelDiffSelector"].forEach(e => {
                        void 0 !== this.source_[e] && (this.options_[e] = this.source_[e])
                    }), this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions, this.useDevicePixelRatio = this.options_.useDevicePixelRatio;
                    let t = this.options_.customPixelRatio;
                    "number" == typeof t && t >= 0 && (this.customPixelRatio = t)
                }
                setOptions(e = {}) {
                    this.setOptions_(e)
                }
                src(e, t) {
                    if (!e) return;
                    this.setOptions_(), this.options_.src = lt(this.source_.src), this.options_.tech = this.tech_, this.options_.externVhs = o1, this.options_.sourceType = (0, E.t)(t), this.options_.seekTo = e => {
                        this.tech_.setCurrentTime(e)
                    }, this.playlistController_ = new oW(this.options_);
                    let i = rw({
                        liveRangeSafeTimeDelta: rP
                    }, this.options_, {
                        seekable: () => this.seekable(),
                        media: () => this.playlistController_.media(),
                        playlistController: this.playlistController_
                    });
                    this.playbackWatcher_ = new oX(i), this.playlistController_.on("error", () => {
                        let e = r_.players[this.tech_.options_.playerId],
                            t = this.playlistController_.error;
                        "object" != typeof t || t.code ? "string" == typeof t && (t = {
                            message: t,
                            code: 3
                        }) : t.code = 3, e.error(t)
                    });
                    let s = this.options_.bufferBasedABR ? o1.movingAverageBandwidthSelector(.55) : o1.STANDARD_PLAYLIST_SELECTOR;
                    this.playlistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : s.bind(this), this.playlistController_.selectInitialPlaylist = o1.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.playlistController_.mainPlaylistLoader_, this.mediaSource = this.playlistController_.mediaSource, Object.defineProperties(this, {
                        selectPlaylist: {
                            get() {
                                return this.playlistController_.selectPlaylist
                            },
                            set(e) {
                                this.playlistController_.selectPlaylist = e.bind(this)
                            }
                        },
                        throughput: {
                            get() {
                                return this.playlistController_.mainSegmentLoader_.throughput.rate
                            },
                            set(e) {
                                this.playlistController_.mainSegmentLoader_.throughput.rate = e, this.playlistController_.mainSegmentLoader_.throughput.count = 1
                            }
                        },
                        bandwidth: {
                            get() {
                                let e = this.playlistController_.mainSegmentLoader_.bandwidth,
                                    t = d().navigator.connection || d().navigator.mozConnection || d().navigator.webkitConnection;
                                if (this.options_.useNetworkInformationApi && t) {
                                    let i = 1e6 * t.downlink;
                                    e = i >= 1e7 && e >= 1e7 ? Math.max(e, i) : i
                                }
                                return e
                            },
                            set(e) {
                                this.playlistController_.mainSegmentLoader_.bandwidth = e, this.playlistController_.mainSegmentLoader_.throughput = {
                                    rate: 0,
                                    count: 0
                                }
                            }
                        },
                        systemBandwidth: {
                            get() {
                                return Math.floor(1 / (1 / (this.bandwidth || 1) + (this.throughput > 0 ? 1 / this.throughput : 0)))
                            },
                            set() {
                                r_.log.error('The "systemBandwidth" property is read-only')
                            }
                        }
                    }), this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth), this.options_.throughput && (this.throughput = this.options_.throughput), Object.defineProperties(this.stats, {
                        bandwidth: {
                            get: () => this.bandwidth || 0,
                            enumerable: !0
                        },
                        mediaRequests: {
                            get: () => this.playlistController_.mediaRequests_() || 0,
                            enumerable: !0
                        },
                        mediaRequestsAborted: {
                            get: () => this.playlistController_.mediaRequestsAborted_() || 0,
                            enumerable: !0
                        },
                        mediaRequestsTimedout: {
                            get: () => this.playlistController_.mediaRequestsTimedout_() || 0,
                            enumerable: !0
                        },
                        mediaRequestsErrored: {
                            get: () => this.playlistController_.mediaRequestsErrored_() || 0,
                            enumerable: !0
                        },
                        mediaTransferDuration: {
                            get: () => this.playlistController_.mediaTransferDuration_() || 0,
                            enumerable: !0
                        },
                        mediaBytesTransferred: {
                            get: () => this.playlistController_.mediaBytesTransferred_() || 0,
                            enumerable: !0
                        },
                        mediaSecondsLoaded: {
                            get: () => this.playlistController_.mediaSecondsLoaded_() || 0,
                            enumerable: !0
                        },
                        mediaAppends: {
                            get: () => this.playlistController_.mediaAppends_() || 0,
                            enumerable: !0
                        },
                        mainAppendsToLoadedData: {
                            get: () => this.playlistController_.mainAppendsToLoadedData_() || 0,
                            enumerable: !0
                        },
                        audioAppendsToLoadedData: {
                            get: () => this.playlistController_.audioAppendsToLoadedData_() || 0,
                            enumerable: !0
                        },
                        appendsToLoadedData: {
                            get: () => this.playlistController_.appendsToLoadedData_() || 0,
                            enumerable: !0
                        },
                        timeToLoadedData: {
                            get: () => this.playlistController_.timeToLoadedData_() || 0,
                            enumerable: !0
                        },
                        buffered: {
                            get: () => rU(this.tech_.buffered()),
                            enumerable: !0
                        },
                        currentTime: {
                            get: () => this.tech_.currentTime(),
                            enumerable: !0
                        },
                        currentSource: {
                            get: () => this.tech_.currentSource_,
                            enumerable: !0
                        },
                        currentTech: {
                            get: () => this.tech_.name_,
                            enumerable: !0
                        },
                        duration: {
                            get: () => this.tech_.duration(),
                            enumerable: !0
                        },
                        main: {
                            get: () => this.playlists.main,
                            enumerable: !0
                        },
                        playerDimensions: {
                            get: () => this.tech_.currentDimensions(),
                            enumerable: !0
                        },
                        seekable: {
                            get: () => rU(this.tech_.seekable()),
                            enumerable: !0
                        },
                        timestamp: {
                            get: () => Date.now(),
                            enumerable: !0
                        },
                        videoPlaybackQuality: {
                            get: () => this.tech_.getVideoPlaybackQuality(),
                            enumerable: !0
                        }
                    }), this.tech_.one("canplay", this.playlistController_.setupFirstPlay.bind(this.playlistController_)), this.tech_.on("bandwidthupdate", () => {
                        this.options_.useBandwidthFromLocalStorage && le({
                            bandwidth: this.bandwidth,
                            throughput: Math.round(this.throughput)
                        })
                    }), this.playlistController_.on("selectedinitialmedia", () => {
                        oQ(this)
                    }), this.playlistController_.sourceUpdater_.on("createdsourcebuffers", () => {
                        this.setupEme_()
                    }), this.on(this.playlistController_, "progress", function() {
                        this.tech_.trigger("progress")
                    }), this.on(this.playlistController_, "firstplay", function() {
                        this.ignoreNextSeekingEvent_ = !0
                    }), this.setupQualityLevels_(), this.tech_.el() && (this.mediaSourceUrl_ = d().URL.createObjectURL(this.playlistController_.mediaSource), this.tech_.src(this.mediaSourceUrl_))
                }
                createKeySessions_() {
                    let e = this.playlistController_.mediaTypes_.AUDIO.activePlaylistLoader;
                    this.logger_("waiting for EME key session creation"), o6({
                        player: this.player_,
                        sourceKeySystems: this.source_.keySystems,
                        audioMedia: e && e.media(),
                        mainPlaylists: this.playlists.main.playlists
                    }).then(() => {
                        this.logger_("created EME key session"), this.playlistController_.sourceUpdater_.initializedEme()
                    }).catch(e => {
                        this.logger_("error while creating EME key session", e), this.player_.error({
                            message: "Failed to initialize media keys for EME",
                            code: 3,
                            metadata: {
                                errorType: r_.Error.EMEKeySessionCreationError
                            }
                        })
                    })
                }
                handleWaitingForKey_() {
                    this.logger_("waitingforkey fired, attempting to create any new key sessions"), this.createKeySessions_()
                }
                setupEme_() {
                    let e = this.playlistController_.mediaTypes_.AUDIO.activePlaylistLoader,
                        t = o7({
                            player: this.player_,
                            sourceKeySystems: this.source_.keySystems,
                            media: this.playlists.media(),
                            audioMedia: e && e.media()
                        });
                    if (this.player_.tech_.on("keystatuschange", e => {
                            this.playlistController_.updatePlaylistByKeyStatus(e.keyId, e.status)
                        }), this.handleWaitingForKey_ = this.handleWaitingForKey_.bind(this), this.player_.tech_.on("waitingforkey", this.handleWaitingForKey_), !t) {
                        this.playlistController_.sourceUpdater_.initializedEme();
                        return
                    }
                    this.createKeySessions_()
                }
                setupQualityLevels_() {
                    let e = r_.players[this.tech_.options_.playerId];
                    e && e.qualityLevels && !this.qualityLevels_ && (this.qualityLevels_ = e.qualityLevels(), this.playlistController_.on("selectedinitialmedia", () => {
                        o8(this.qualityLevels_, this)
                    }), this.playlists.on("mediachange", () => {
                        o4(this.qualityLevels_, this.playlists)
                    }))
                }
                static version() {
                    return {
                        "@videojs/http-streaming": o0,
                        "mux.js": "7.0.3",
                        "mpd-parser": "1.3.0",
                        "m3u8-parser": "7.1.0",
                        "aes-decrypter": "4.0.1"
                    }
                }
                version() {
                    return this.constructor.version()
                }
                canChangeType() {
                    return ou.canChangeType()
                }
                play() {
                    this.playlistController_.play()
                }
                setCurrentTime(e) {
                    this.playlistController_.setCurrentTime(e)
                }
                duration() {
                    return this.playlistController_.duration()
                }
                seekable() {
                    return this.playlistController_.seekable()
                }
                dispose() {
                    this.playbackWatcher_ && this.playbackWatcher_.dispose(), this.playlistController_ && this.playlistController_.dispose(), this.qualityLevels_ && this.qualityLevels_.dispose(), this.tech_ && this.tech_.vhs && delete this.tech_.vhs, this.mediaSourceUrl_ && d().URL.revokeObjectURL && (d().URL.revokeObjectURL(this.mediaSourceUrl_), this.mediaSourceUrl_ = null), this.tech_ && this.tech_.off("waitingforkey", this.handleWaitingForKey_), super.dispose()
                }
                convertToProgramTime(e, t) {
                    return nR({
                        playlist: this.playlistController_.media(),
                        time: e,
                        callback: t
                    })
                }
                seekToProgramTime(e, t, i = !0, s = 2) {
                    return nU({
                        programTime: e,
                        playlist: this.playlistController_.media(),
                        retryCount: s,
                        pauseAfterSeek: i,
                        seekTo: this.options_.seekTo,
                        tech: this.options_.tech,
                        callback: t
                    })
                }
                setupXhrHooks_() {
                    this.xhr.onRequest = e => {
                        li(this.xhr, e)
                    }, this.xhr.onResponse = e => {
                        ls(this.xhr, e)
                    }, this.xhr.offRequest = e => {
                        lr(this.xhr, e)
                    }, this.xhr.offResponse = e => {
                        ln(this.xhr, e)
                    }, this.player_.trigger("xhr-hooks-ready")
                }
            }
            let ll = {
                name: "videojs-http-streaming",
                VERSION: o0,
                canHandleSource(e, t = {}) {
                    let i = rw(r_.options, t);
                    return ll.canPlayType(e.type, i)
                },
                handleSource(e, t, i = {}) {
                    let s = rw(r_.options, i);
                    return t.vhs = new lo(e, t, s), t.vhs.xhr = nT(), t.vhs.setupXhrHooks_(), t.vhs.src(e.src, e.type), t.vhs
                },
                canPlayType(e, t) {
                    let i = (0, E.t)(e);
                    if (!i) return "";
                    let s = ll.getOverrideNative(t);
                    return !o1.supportsTypeNatively(i) || s ? "maybe" : ""
                },
                getOverrideNative(e = {}) {
                    let {
                        vhs: t = {}
                    } = e, i = !(r_.browser.IS_ANY_SAFARI || r_.browser.IS_IOS), {
                        overrideNative: s = i
                    } = t;
                    return s
                }
            };
            (0, C.p7)("avc1.4d400d,mp4a.40.2") && r_.getTech("Html5").registerSourceHandler(ll, 0), r_.VhsHandler = lo, r_.VhsSourceHandler = ll, r_.Vhs = o1, r_.use || r_.registerComponent("Vhs", o1), r_.options.vhs = r_.options.vhs || {}, r_.getPlugin && r_.getPlugin("reloadSourceOnError") || r_.registerPlugin("reloadSourceOnError", function(e) {
                oZ(this, e)
            })
        }
    }
]);