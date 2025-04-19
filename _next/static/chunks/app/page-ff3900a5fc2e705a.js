(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        2938: function() {},
        3362: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 7331))
        },
        7331: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return el
                }
            });
            var l = s(9176),
                i = s(5330);
            let a = () => {
                    let e = window.location.hash.slice(1);
                    return c.includes(e) ? e : "index"
                },
                n = e => {
                    window.location.hash = e
                },
                r = async (e, t) => {
                    var s;
                    let l = await fetch(e),
                        i = null === (s = l.body) || void 0 === s ? void 0 : s.getReader(),
                        a = +l.headers.get("Content-Length"),
                        n = 0,
                        r = [];
                    for (;;) {
                        let {
                            done: e,
                            value: s
                        } = await i.read();
                        if (e) break;
                        r.push(s), n += s.length, t && t(n / a)
                    }
                    let o = new Uint8Array(n),
                        c = 0;
                    for (let e of r) o.set(e, c), c += e.length;
                    return o
                },
                o = ["/assets/common/nav-corner/bgm.mp3", "/assets/products/nextImageExportOptimizer/bg-4-opt-1920.WEBP", "/assets/about-us/nextImageExportOptimizer/background-opt-1920.WEBP"],
                c = ["index", "products", "about-us", "careers"],
                d = () => {
                    let [e, t] = (0, i.useState)({
                        direction: "",
                        distance: 0,
                        type: ""
                    }), [s, l] = (0, i.useState)(""), [d, x] = (0, i.useState)(!1), [h, m] = (0, i.useState)(!0), [u, f] = (0, i.useState)(0);
                    return (0, i.useEffect)(() => {
                        let e = a();
                        console.log("=================", e), l(e), n(e), console.log("initSlideId:", e)
                    }, []), (0, i.useEffect)(() => {
                        let e = e => {
                                let i = e.deltaY,
                                    a = i > 0 ? "down" : "up",
                                    r = "desktop";
                                if (t({
                                        direction: a,
                                        distance: Math.abs(i),
                                        type: r
                                    }), console.log("Scroll direction: ".concat(a, ", Distance: ").concat(Math.abs(i), ", Type: ").concat(r)), !d) {
                                    if ("down" === a && "careers" !== s) {
                                        let e = c[c.indexOf(s) + 1];
                                        l(e), n(e), x(!0), console.log("current slide down:", e)
                                    } else if ("up" === a && "index" !== s) {
                                        let e = c[c.indexOf(s) - 1];
                                        l(e), n(e), x(!0), console.log("current slide up:", e)
                                    } else console.log("do not wheel:", s)
                                }
                            },
                            i = 0,
                            a = e => {
                                i = e.touches[0].clientY
                            },
                            r = e => {
                                let a = e.touches[0].clientY - i,
                                    r = a < 0 ? "down" : "up",
                                    o = "mobile";
                                if (t({
                                        direction: r,
                                        distance: Math.abs(a),
                                        type: o
                                    }), console.log("Swipe direction: ".concat(r, ", Distance: ").concat(Math.abs(a), ", Type: ").concat(o)), !d) {
                                    if ("down" === r && "careers" !== s) {
                                        let e = c[c.indexOf(s) + 1];
                                        l(e), n(e), x(!0), console.log("current slide down:", e)
                                    } else if ("up" === r && "index" !== s) {
                                        let e = c[c.indexOf(s) - 1];
                                        l(e), n(e), x(!0), console.log("current slide up:", e)
                                    } else console.log("do not swipe:", s)
                                }
                            };
                        return window.addEventListener("wheel", e), window.addEventListener("touchstart", a), window.addEventListener("touchmove", r), () => {
                            window.removeEventListener("wheel", e), window.removeEventListener("touchstart", a), window.removeEventListener("touchmove", r)
                        }
                    }, [s, d]), (0, i.useEffect)(() => {
                        if (d) {
                            let e = setTimeout(() => {
                                x(!1), console.log("Animation ended")
                            }, 1e3);
                            return () => clearTimeout(e)
                        }
                    }, [d]), (0, i.useEffect)(() => {
                        (async () => {
                            let e = new Map,
                                t = o.map(t => r(t, s => {
                                    e.set(t, s), f(Array.from(e.values()).reduce((e, t) => e + t, 0) / o.length)
                                }));
                            await Promise.all(t), f(100), m(!1)
                        })()
                    }, [!1]), {
                        currentSlideId: s,
                        updateSlideId: e => {
                            d || h || (l(e), n(e), x(!0), console.log("updateSlideId:", e))
                        },
                        isAnimating: d,
                        setIsAnimating: x,
                        isLoading: h,
                        setIsLoading: m,
                        scrollInfo: e,
                        progress: u
                    }
                },
                x = (0, i.createContext)(null),
                h = e => {
                    let {
                        children: t
                    } = e, {
                        currentSlideId: s,
                        updateSlideId: i,
                        isAnimating: a,
                        setIsAnimating: n,
                        isLoading: r,
                        setIsLoading: o,
                        scrollInfo: c,
                        progress: h
                    } = d();
                    return (0, l.jsx)(x.Provider, {
                        value: {
                            currentSlideId: s,
                            updateSlideId: i,
                            isAnimating: a,
                            setIsAnimating: n,
                            isLoading: r,
                            setIsLoading: o,
                            scrollInfo: c,
                            progress: h
                        },
                        children: t
                    })
                },
                m = () => (0, i.useContext)(x);
            var u = s(8679),
                f = s(8827),
                g = s(6883);
            s(1410);
            var p = () => {
                let {
                    currentSlideId: e,
                    isLoading: t
                } = m(), s = (0, i.useRef)(null), a = (0, i.useRef)(null), n = null, r = () => {
                    let e = s.current,
                        t = a.current,
                        l = null;
                    t && (l = t.getContext("2d"));
                    let i = () => {
                        if (e && !e.paused && !e.ended) {
                            let s, a, n, r;
                            let o = e.videoWidth / e.videoHeight,
                                c = t.width / t.height;
                            c > o ? (n = e.videoWidth, r = e.videoWidth / c, s = 0, a = (e.videoHeight - r) / 2) : (n = e.videoHeight * c, r = e.videoHeight, s = (e.videoWidth - n) / 2, a = 0), l.clearRect(0, 0, t.width, t.height), l.drawImage(e, s, a, n, r, 0, 0, t.width, t.height), requestAnimationFrame(i)
                        }
                    };
                    i()
                };
                return (0, i.useEffect)(() => {
                    let e = s.current,
                        t = a.current,
                        l = () => {
                            t && (t.width = window.innerWidth, t.height = window.innerHeight)
                        };
                    return l(), (n = (0, g.Z)(e, {
                        sources: [{
                            src: "/assets/index/video.mp4",
                            type: "video/mp4"
                        }],
                        autoplay: !1,
                        muted: !0,
                        loop: !0
                    }, function() {
                        this.play()
                    })).on("play", r), window.addEventListener("resize", l), () => {
                        n && n.dispose(), window.removeEventListener("resize", l)
                    }
                }, []), (0, l.jsxs)("div", {
                    className: "h-screen bg-black flex items-center justify-start w-full bg-blue relative",
                    children: [(0, l.jsx)("video", {
                        ref: s,
                        className: "video-js",
                        controls: !0,
                        preload: "auto",
                        width: "640",
                        height: "264",
                        style: {
                            display: "none"
                        }
                    }), (0, l.jsx)("canvas", {
                        ref: a,
                        className: "absolute top-0 left-0 w-screen h-screen"
                    })]
                })
            };
            let j = [{
                icon: "/assets/products/icon-1.png",
                title: "Rubii AI",
                description: "AI动漫角色扮演聊天",
                link: "https://rubii.ai?utm_source=yomio.cn"
            }, {
                icon: "/assets/products/icon-2.png",
                title: "赤潮ZeroERA",
                description: "属于正太的二次元游戏",
                link: "https://cc.yomio.cn"
            }, {
                icon: "/assets/products/icon-3.png",
                title: "悠喵映画",
                description: "ANIMATION",
                link: "https://space.bilibili.com/97233126"
            }, {
                icon: "/assets/products/icon-4.png",
                title: "杂货铺",
                description: "TAOBAO SHOP",
                link: "https://m.tb.cn/h.TaZn9SdbrVxOFMN"
            }];
            var b = s(7775);
            let w = e => {
                    let {
                        icon: t,
                        title: s,
                        description: i
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "flex flex-row justify-start items-start w-full lg:h-80 h-24 absolute bottom-0 left-0 ",
                        children: [(0, l.jsx)("div", {
                            className: "flex flex-col justify-start items-center lg:w-11 lg:ml-11 w-8 ml-8 ",
                            children: (0, l.jsx)(b.Z, {
                                src: t,
                                alt: s,
                                width: 45,
                                height: 45
                            })
                        }), (0, l.jsxs)("div", {
                            className: "flex flex-col justify-start items-start ml-2",
                            children: [(0, l.jsx)("h2", {
                                className: "lg:text-[44px] font-bold lg:leading-[44px] text-white font-source-han-sans-sc-heavy text-[24px] leading-[24px]",
                                children: s
                            }), (0, l.jsx)("span", {
                                className: "lg:text-base lg:mt-4 lg:leading-4 text-sm mt-2 leading-3",
                                children: i
                            }), (0, l.jsx)("span", {
                                className: "text-xs lg:leading-3 lgmb-4 lg:mt-2 mt-1",
                                children: "VIEW MORE >"
                            }), (0, l.jsx)("div", {
                                className: "border-b border-white w-[80px] mb-8 "
                            })]
                        })]
                    })
                },
                v = e => {
                    let {
                        products: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "lg:hidden h-screen flex flex-col justify-start items-start ",
                        children: [(0, l.jsx)("div", {
                            className: " h-20 "
                        }), (0, l.jsx)("div", {
                            className: " flex-grow w-mobile-without-right-width ",
                            children: t.map((e, t) => {
                                let {
                                    title: s,
                                    description: i,
                                    icon: a,
                                    link: n
                                } = e;
                                return (0, l.jsx)("a", {
                                    href: n,
                                    target: "_blank",
                                    className: "h-1/4 w-full bg-cover bg-center bg-no-repeat bg-product-bg-mobile-".concat(t + 1, " text-white flex flex-row justify-start items-center"),
                                    children: (0, l.jsxs)("div", {
                                        className: "flex flex-row justify-start items-start bg-opacity-50",
                                        children: [(0, l.jsx)("div", {
                                            className: "flex flex-col justify-start items-center lg:w-11 lg:ml-11 w-8 ml-8 ",
                                            children: (0, l.jsx)(b.Z, {
                                                src: a,
                                                alt: s,
                                                width: 45,
                                                height: 45
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "flex flex-col justify-start items-start ml-2",
                                            children: [(0, l.jsx)("h2", {
                                                className: "lg:text-[44px] font-bold lg:leading-[44px] text-white font-source-han-sans-sc-heavy text-2xl leading-[24px]",
                                                children: s
                                            }), (0, l.jsx)("span", {
                                                className: "lg:text-base lg:mt-4 lg:leading-4 text-sm mt-2 leading-3",
                                                children: i
                                            }), (0, l.jsx)("span", {
                                                className: "text-xs lg:leading-3 lgmb-4 lg:mt-2 mt-1",
                                                children: "VIEW MORE >"
                                            }), (0, l.jsx)("div", {
                                                className: "border-b border-white w-[80px] mb-8 "
                                            })]
                                        })]
                                    })
                                }, e.title + t.toString())
                            })
                        }), (0, l.jsx)("div", {
                            className: "h-24 bg-green-800"
                        })]
                    })
                },
                y = e => {
                    let {
                        currentSlideId: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "z-30 h-24 lg:h-[134px] bg-footer-gradient pointer-events-none absolute left-0 bottom-0 border-t border-[#ffffffd9] w-full",
                        style: {
                            borderTop: "1px solid rgba(255, 255, 255, 0.3)"
                        },
                        children: (0, l.jsx)("div", {
                            className: "footer-transition-bg__bg"
                        })
                    })
                },
                N = () => {
                    let {
                        currentSlideId: e,
                        isLoading: t
                    } = m(), s = (0, i.useMemo)(() => "products" === e ? "Products" : "about-us" === e ? "About Us" : "careers" === e ? "Careers" : "", [e]);
                    return t ? null : (0, l.jsx)("div", {
                        className: "absolute z-10 left-0 bottom-0 text-white uppercase font-oswald-heavy text-2xl lg:text-[64px]",
                        children: s
                    })
                };
            var E = () => (0, l.jsxs)("div", {
                className: "w-screen flex flex-col justify-start items-start  h-screen ",
                children: [(0, l.jsxs)("div", {
                    className: "h-product-mobile-height lg:h-screen lg:w-screen w-screen lg:flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-center  lg:mt-0  ",
                    children: [(0, l.jsx)(v, {
                        products: j
                    }), j.map((e, t) => (0, l.jsxs)("a", {
                        href: e.link,
                        target: "_blank",
                        className: "hidden h-product-mobile-height-quarter w-screen lg:h-full lg:w-[25vw] lg:flex flex-col items-center justify-center relative overflow-hidden cursor-pointer",
                        children: [(0, l.jsx)("div", {
                            className: "lg:w-[25vw] w-full h-full flex flex-col items-center justify-center relative",
                            children: (0, l.jsxs)("div", {
                                className: "w-full h-full hover:scale-110 transition-transform duration-500 ease-in-out relative",
                                children: [(0, l.jsx)(b.Z, {
                                    src: "/assets/products/bg-".concat(t + 1, ".png"),
                                    alt: "product background ".concat(t + 1),
                                    fill: !0,
                                    className: "object-cover",
                                    priority: !0
                                }), (0, l.jsx)(w, { ...e
                                })]
                            })
                        }), (0, l.jsx)("div", {
                            className: "absolute inset-0 pointer-events-none bg-product-bg-gradient-pc"
                        })]
                    }, t))]
                }), (0, l.jsx)(y, {
                    currentSlideId: "products"
                }), (0, l.jsx)(N, {})]
            });
            let O = e => {
                let {
                    title: t,
                    description: s,
                    width: i,
                    height: a
                } = e;
                return (0, l.jsx)("div", {
                    className: "flex flex-row justify-start items-end border-b border-golden bg-section-header-bg bg-no-repeat bg-left bg-contain w-4/5",
                    style: {
                        width: i ? "".concat(i, "px") : void 0,
                        height: a ? "".concat(a, "px") : void 0
                    },
                    children: (0, l.jsxs)("div", {
                        className: "h-full flex flex-col justify-items-center ml-2 items-start font-source-han-sans-sc-medium",
                        children: [(0, l.jsx)("h1", {
                            className: "text-primary-black text-sm lg:text-xl font-bold",
                            children: t
                        }), (0, l.jsx)("p", {
                            className: "text-primary-black",
                            style: {
                                fontSize: "0.5rem",
                                lineHeight: "0.5rem",
                                padding: 0,
                                margin: 0,
                                display: "inline-block"
                            },
                            children: s
                        })]
                    })
                })
            };
            O.defaultProps = {
                width: void 0,
                height: void 0
            };
            let k = () => (0, l.jsx)("div", {
                    className: "font-medium text-[10px] lg:text-[14px] text-white text-left not-italic mt-1 whitespace-pre-line leading-6 font-source-han-sans-sc-medium w-[328px] z-30",
                    style: {
                        minHeight: "500px",
                        overflowY: "auto",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        lineHeight: "1.45"
                    },
                    children: "悠喵YoMio成立于2022年，我们是一个年轻有活力的团队，致力于二次元ACG文化在各个领域的探索，对一切新鲜事物充满热忱。\n\n起初大家因为对二次元的热爱走在了一起，凝聚了许多不同领域志同道合的小伙伴。我们曾与众多知名游戏公司进行合作，创作出了无数优质的短片，全网播放达一亿。\n\n2024年初我们开始着手于AIGC与二次元文化的深度结合，推出Rubii AI原生二次元UCG平台与赤潮ZeroERA二次元游戏等产品，秉承着“Otakus Make AI Fun”的使命。\n\n时空的变易会让人遗忘很多，长河的冲刷只会留下细沙卵石，但熄灭不了的从来是那份炽热的信念。我们将永葆初心，永远对ACG文化保持热爱，为大家带来一场饕餮盛宴。致心中最初的光！\n\n联系方式: hi@yomio.cn"
                }),
                I = () => (0, l.jsx)("div", {
                    className: "lg:hidden black h-full w-full flex flex-col justify-start items-start ",
                    children: (0, l.jsxs)("div", {
                        className: "w-mobile-without-right-width flex flex-col justify-start items-center bg-opacity-90 ",
                        children: [(0, l.jsx)("div", {
                            className: "relative w-full h-[200px] bg-cover bg-center bg-black bg-about-mobile-header",
                            children: (0, l.jsx)("div", {
                                className: "absolute inset-0 bg-black bg-opacity-10"
                            })
                        }), (0, l.jsx)(b.Z, {
                            src: "/assets/about-us/about-header.png",
                            alt: "quote",
                            width: 816,
                            height: 256,
                            className: "w-mobile-without-right-width mt-2"
                        }), (0, l.jsxs)("div", {
                            className: "px-4 ml-2",
                            children: [(0, l.jsx)(O, {
                                title: "关于 Yomio",
                                description: "ABOUT YOMIO"
                            }), (0, l.jsx)(k, {})]
                        })]
                    })
                }),
                S = e => {
                    let {
                        title: t,
                        description: s
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "flex flex-row justify-start items-end border-b border-golden bg-section-header-bg bg-no-repeat bg-left bg-contain w-4/5 ml-2",
                        children: (0, l.jsxs)("div", {
                            className: "h-full flex flex-col justify-items-center ml-2 items-start font-source-han-sans-sc-medium",
                            children: [(0, l.jsx)("h1", {
                                className: "text-primary-black text-sm lg:text-xl font-bold",
                                children: t
                            }), (0, l.jsx)("p", {
                                className: "text-primary-black",
                                style: {
                                    fontSize: "0.5rem",
                                    lineHeight: "0.5rem",
                                    padding: 0,
                                    margin: 0,
                                    display: "inline-block"
                                },
                                children: s
                            })]
                        })
                    })
                },
                M = () => {
                    let {
                        currentSlideId: e
                    } = m();
                    return (0, l.jsxs)(f.E.div, {
                        id: "about-info",
                        className: "z-30 flex flex-col justify-start items-center w-[408px] h-screen bg-opacity-90 flex-shrink-0 flex-grow-0 z-20 bg-black ",
                        children: [(0, l.jsx)(b.Z, {
                            src: "/assets/about-us/about-header.png",
                            alt: "about header",
                            className: "w-full mt-2",
                            width: 408,
                            height: 100
                        }), (0, l.jsx)("div", {
                            className: "flex flex-col justify-start items-start lg:w-[328px]",
                            children: (0, l.jsx)(S, {
                                title: "关于 Yomio",
                                description: "ABOUT YOMIO"
                            })
                        }), (0, l.jsx)(k, {})]
                    })
                };
            var z = () => (0, l.jsxs)("div", {
                    className: "w-full h-full flex flex-col justify-start items-start",
                    children: [(0, l.jsx)("div", {
                        className: "absolute top-0 left-0 lg:h-24 lg:bg-black w-full z-20"
                    }), (0, l.jsxs)("div", {
                        className: "hidden w-screen h-screen lg:flex flex-col justify-start items-start bg-cover bg-center bg-black pt-24 relative",
                        children: [(0, l.jsx)(b.Z, {
                            src: "/assets/about-us/background.jpg",
                            alt: "background",
                            fill: !0,
                            className: "object-cover",
                            priority: !0
                        }), (0, l.jsx)("div", {
                            className: "z-[10] w-full flex flex-row justify-start items-center",
                            children: (0, l.jsx)("div", {
                                className: "flex-none",
                                children: (0, l.jsx)(M, {})
                            })
                        })]
                    }), (0, l.jsx)(I, {}), (0, l.jsx)(y, {
                        currentSlideId: "about-us"
                    }), (0, l.jsx)(N, {})]
                }),
                Y = s(1322);
            let A = e => {
                    let {
                        title: t,
                        description: s,
                        className: i = ""
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "flex flex-row justify-start items-center ".concat(i, " w-[220px] lg:w-[380px] lg:h-[88px] lg:mt-6 mt-2 py-2 lg:py-0 relative"),
                        children: [(0, l.jsx)(b.Z, {
                            src: "/assets/careers/section-item-bg.png",
                            alt: "section item background",
                            fill: !0,
                            className: "object-cover",
                            priority: !0
                        }), (0, l.jsxs)("div", {
                            className: "h-full flex flex-col justify-center items-start pl-4 w-full relative z-10",
                            children: [(0, l.jsx)("span", {
                                className: "text-white text-base lg:text-xl font-bold font-source-han-sans-sc-medium",
                                children: t
                            }), (0, l.jsx)("span", {
                                className: "text-white text-xs mt-2 font-source-han-sans-sc-medium",
                                children: s
                            })]
                        })]
                    })
                },
                L = [{
                    title: "程序类",
                    description: "前端、移动端（flutter）、后端（go)"
                }, {
                    title: "美术类",
                    description: "原画师（人物、场景）、动画师"
                }, {
                    title: "策划类",
                    description: "游戏策划、社区账号运营"
                }],
                C = e => {
                    let {
                        currentSlideId: t
                    } = e, [s, a] = (0, i.useState)(0);
                    (0, i.useEffect)(() => {
                        "careers" === t && a(e => e + 1)
                    }, [t]);
                    let n = {
                            hidden: {
                                opacity: 0,
                                x: 250
                            },
                            visible: e => ({
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: .3 + .4 * e,
                                    duration: .8,
                                    ease: "easeInOut"
                                }
                            })
                        },
                        r = L.map((e, t) => (0, l.jsx)(f.E.div, {
                            custom: t,
                            initial: "hidden",
                            animate: "visible",
                            variants: n,
                            className: "w-3/5",
                            children: (0, l.jsx)(A, {
                                title: e.title,
                                description: e.description
                            })
                        }, t));
                    return (0, l.jsxs)("section", {
                        className: "flex flex-col justify-start items-start w-full mt-60 lg:mt-[185px] lg:ml-20 font-source-han-sans-sc-medium z-[100]",
                        children: [(0, l.jsx)(S, {
                            title: "加入Yomio",
                            description: "JOIN YOMIO"
                        }), (0, l.jsx)("div", {
                            className: "flex flex-col justify-start items-start w-full lg:w-[380px] ml-2",
                            children: r
                        }), (0, l.jsx)("div", {
                            className: "lg:flex flex-row justify-end items-center",
                            children: (0, l.jsx)(Y.default, {
                                href: "https://seknhv55ov.feishu.cn/share/base/form/shrcnQnnegJdKm5MnoVTgByUgxc",
                                target: "_blank",
                                rel: "noreferrer",
                                className: "bg-golden text-[#070707] text-sm font-bold py-2 px-4 mt-6 rounded-sm hover:text-white hover:bg-opacity-70 ml-2 z-[100]",
                                children: "加入我们"
                            })
                        }), (0, l.jsxs)("div", {
                            className: "fixed z-50 w-full bottom-4 pl-72 left-0 bg-transparent h-6 flex flex-row justify-start items-center",
                            children: [(0, l.jsx)("span", {
                                className: "text-xs text-white/50 leading-5 text-left not-italic",
                                children: "\xa9️2022-2024 YoMioBEYOUNG Co.,Ltd. all right reserved."
                            }), (0, l.jsx)(b.Z, {
                                src: "/assets/footer-icon/police-icon.png",
                                alt: "logo",
                                className: "ml-4 w-[14px] h-[14px]",
                                width: 14,
                                height: 14
                            }), (0, l.jsx)("span", {
                                className: "ml-[2px]  font-normal text-[12px] text-white/50 leading-[17px] text-left not-italic",
                                children: "备案许可证编号:京ICP备2024070889号"
                            })]
                        })]
                    }, s)
                };
            var B = e => {
                let {
                    currentSlideId: t
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: "hidden h-screen lg:flex flex-row items-start justify-start  w-full bg-cover bg-center bg-careers-bg",
                        children: (0, l.jsx)(C, {
                            currentSlideId: t
                        })
                    }), (0, l.jsx)("div", {
                        className: "lg:hidden h-screen flex flex-row items-start justify-start  w-full bg-cover bg-center bg-careers-bg-mobile",
                        children: (0, l.jsx)(C, {
                            currentSlideId: t
                        })
                    }), (0, l.jsx)(y, {
                        currentSlideId: t
                    }), (0, l.jsx)(N, {})]
                })
            };
            let Z = e => {
                    let {
                        currentSlideId: t,
                        setIsAnimating: s
                    } = e, a = [{
                        id: "index",
                        element: (0, l.jsx)(p, {})
                    }, {
                        id: "products",
                        element: (0, l.jsx)(E, {})
                    }, {
                        id: "about-us",
                        element: (0, l.jsx)(z, {})
                    }, {
                        id: "careers",
                        element: (0, l.jsx)(B, {
                            currentSlideId: t
                        })
                    }], [n, r] = (0, i.useState)(null);
                    return (0, i.useEffect)(() => {
                        n !== t && (s(!0), r(t))
                    }, [t, n, s]), (0, i.useMemo)(() => ({
                        index: (0, l.jsx)(p, {}),
                        products: (0, l.jsx)(E, {}),
                        "about-us": (0, l.jsx)(z, {}),
                        careers: (0, l.jsx)(B, {
                            currentSlideId: t
                        })
                    }), []), (0, l.jsx)("div", {
                        className: "absolute left-0 top-0 w-screen flex flex-row justify-start items-start z-10",
                        children: a.map(e => {
                            let i = t === e.id,
                                a = n === e.id;
                            return (0, l.jsx)(f.E.div, {
                                initial: {
                                    width: i ? "0%" : a ? "100%" : "0%",
                                    zIndex: i ? 1 : 0
                                },
                                animate: {
                                    width: i ? "100%" : "0%",
                                    zIndex: i ? 2 : 1
                                },
                                transition: {
                                    duration: 1,
                                    ease: "easeInOut"
                                },
                                onAnimationComplete: () => {
                                    a && s(!1)
                                },
                                className: "flex-shrink-0 flex items-center justify-center text-3xl text-white font-bold z-20",
                                style: {
                                    width: "100vw",
                                    height: "100vh",
                                    overflow: "hidden"
                                },
                                children: e.element
                            }, e.id)
                        })
                    })
                },
                G = e => {
                    let {
                        isLoading: t,
                        currentSlideId: s
                    } = e, [a, n] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        t || "products" === s ? n(!1) : n(!0)
                    }, [t, s]), (0, l.jsx)(f.E.div, {
                        className: "hidden lg:flex h-screen absolute z-10 border-l border-white-50 bg-opacity-50 w-[1px] right-48 top-0",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: a ? .4 : 0
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 1
                        }
                    })
                },
                U = e => {
                    let {
                        isLoading: t,
                        currentSlideId: s
                    } = e, [a, n] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        t ? n(!1) : n(!0)
                    }, [t, s]), (0, l.jsx)(f.E.div, {
                        className: "lg:hidden md:hidden h-screen absolute z-10 border-l border-white-50 bg-opacity-50 w-[1px]  right-12 top-0",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: a ? .4 : 0
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 1
                        }
                    })
                },
                T = e => {
                    let {
                        isLoading: t
                    } = e;
                    return t ? null : (0, l.jsx)("div", {
                        className: "w-full flex flex-col justify-center items-center lg:h-16 h-4 fixed left-0 bottom-16 lg:bottom-12 z-50",
                        children: (0, l.jsx)(b.Z, {
                            src: "/assets/common/scroll-arrow.png",
                            alt: "scroll arrow",
                            width: 80,
                            height: 60,
                            className: "animate-bounce-and-fade w-8 h-6 lg:w-12 lg:h-9"
                        })
                    })
                },
                _ = [{
                    id: "index",
                    name: "INDEX",
                    zhName: "首页",
                    link: "/#index",
                    isActived: !1
                }, {
                    id: "products",
                    name: "PRODUCTS",
                    zhName: "产品",
                    link: "/#products",
                    isActived: !1
                }, {
                    id: "about-us",
                    name: "ABOUT US",
                    zhName: "关于我们",
                    link: "/#about-us",
                    isActived: !1
                }, {
                    id: "careers",
                    name: "CAREERS",
                    zhName: "加入我们",
                    link: "/#careers",
                    isActived: !1
                }],
                R = e => {
                    let {
                        isLoading: t,
                        slash: s,
                        markerText: i,
                        menuItemName: a,
                        animationDuration: n,
                        isMovingDown: r
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: "hidden lg:flex lg:flex-row lg:justify-start lg:items-end",
                            children: [(0, l.jsx)("div", {
                                className: "lg:overflow-hidden lg:h-[40px]",
                                children: t ? (0, l.jsx)("div", {
                                    className: "lg:font-extrabold lg:text-[54px] lg:text-golden lg:leading-[54px] lg:text-right lg:font-source-han-sans-sc-heavy",
                                    children: i
                                }) : (0, l.jsx)(f.E.div, {
                                    className: "lg:font-extrabold lg:text-[54px] lg:text-golden lg:leading-[54px] lg:text-right lg:font-source-han-sans-sc-heavy",
                                    initial: {
                                        y: r ? 50 : -50,
                                        opacity: 0
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    exit: {
                                        y: r ? -50 : 50,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: n,
                                        delay: 0
                                    },
                                    children: i
                                }, i)
                            }), t ? (0, l.jsxs)("div", {
                                className: "lg:font-bender lg:text-white",
                                children: [s, s, i, "/04"]
                            }) : (0, l.jsxs)(f.E.div, {
                                className: "lg:font-bender lg:text-white",
                                initial: {
                                    y: r ? 50 : -50,
                                    opacity: 0
                                },
                                animate: {
                                    y: 0,
                                    opacity: 1
                                },
                                exit: {
                                    y: r ? -50 : 50,
                                    opacity: 0
                                },
                                transition: {
                                    duration: n,
                                    delay: .1
                                },
                                children: [s, s, i, "/04"]
                            }, "".concat(i, "-slash"))]
                        }), t ? (0, l.jsx)("div", {
                            className: "hidden lg:w-full lg:flex lg:flex-row lg:justify-end lg:items-center lg:font-extrabold lg:text-[14px] lg:text-white lg:leading-[14px] lg:text-center lg:uppercase lg:font-source-han-sans-sc-medium",
                            children: a
                        }) : (0, l.jsx)(f.E.div, {
                            className: "hidden lg:w-full lg:flex lg:flex-row lg:justify-end lg:items-center lg:font-extrabold lg:text-[14px] lg:text-white lg:leading-[14px] lg:text-center lg:uppercase lg:font-source-han-sans-sc-medium",
                            initial: {
                                y: r ? 50 : -50,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            exit: {
                                y: r ? -50 : 50,
                                opacity: 0
                            },
                            transition: {
                                duration: n,
                                delay: .2
                            },
                            children: a
                        }, a)]
                    })
                },
                W = e => {
                    let {
                        isLoading: t,
                        slash: s,
                        markerText: i,
                        menuItemName: a,
                        animationDuration: n,
                        isMovingDown: r
                    } = e;
                    return t ? null : (0, l.jsxs)("div", {
                        className: "overflow-hidden lg:hidden relative w-10 h-20 font-source-han-sans-sc-heavy right-0",
                        children: [(0, l.jsxs)(f.E.div, {
                            className: "text-white font-bender text-base absolute top-0 left-10 leading-6",
                            initial: {
                                rotate: 90,
                                transformOrigin: "top left",
                                opacity: 0,
                                y: r ? 50 : -50
                            },
                            animate: {
                                rotate: 90,
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                rotate: 90,
                                opacity: 0,
                                y: r ? -50 : 50
                            },
                            transition: {
                                duration: n,
                                delay: 0
                            },
                            children: [s, s, i, "/04"]
                        }), (0, l.jsx)(f.E.div, {
                            className: "text-white text-xs h-4 absolute top-0 left-5 whitespace-nowrap",
                            initial: {
                                rotate: 90,
                                transformOrigin: "top left",
                                opacity: 0,
                                y: r ? 50 : -50
                            },
                            animate: {
                                rotate: 90,
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                rotate: 90,
                                opacity: 0,
                                y: r ? -50 : 50
                            },
                            transition: {
                                duration: n,
                                delay: 0
                            },
                            children: a
                        }), (0, l.jsx)(f.E.div, {
                            className: "absolute -bottom-3 text-golden text-4xl font-extrabold",
                            initial: {
                                y: r ? 50 : -50,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            exit: {
                                y: r ? -50 : 50,
                                opacity: 0
                            },
                            transition: {
                                duration: n,
                                delay: 0
                            },
                            children: i
                        }, i)]
                    })
                },
                H = e => {
                    let t = _.findIndex(t => t.id === e),
                        s = "0".concat(t + 1).slice(-2);
                    return "".concat(s)
                },
                P = e => {
                    let t = _.find(t => t.id === e);
                    return t ? t.name : ""
                },
                D = e => {
                    let {
                        isLoading: t,
                        currentSlideId: s
                    } = e, a = (0, i.useMemo)(() => H(s), [s]), n = (0, i.useMemo)(() => P(s), [s]);
                    t && (a = "00", n = "Loading");
                    let [r, o] = (0, i.useState)(null), c = (0, i.useMemo)(() => _.findIndex(e => e.id === s), [s]), d = null !== r && c > r;
                    return (0, i.useEffect)(() => {
                        o(c)
                    }, [s]), (0, l.jsxs)("div", {
                        className: "absolute right-0 lg:right-7 bottom-64 lg:bottom-11 lg:flex lg:flex-col lg:justify-center lg:items-start z-50",
                        children: [(0, l.jsx)(R, {
                            isLoading: t,
                            slash: "/",
                            markerText: a,
                            menuItemName: n,
                            animationDuration: 1,
                            isMovingDown: d
                        }), (0, l.jsx)(W, {
                            isLoading: t,
                            slash: "/",
                            markerText: a,
                            menuItemName: n,
                            animationDuration: 1,
                            isMovingDown: d
                        })]
                    })
                },
                F = e => {
                    let {
                        setIsLoading: t,
                        progress: s
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "w-screen h-screen fixed top-0 left-0 bg-pri z-50 flex flex-col justify-center items-center  text-golden pointer-events-none bg-black",
                        children: [(0, l.jsx)("div", {
                            className: "w-2/3 lg:w-1/2 h-[192px] flex justify-center items-center pointer-events-none",
                            children: (0, l.jsx)(b.Z, {
                                src: "/assets/loading/loading-logo@x2.png",
                                alt: "loading",
                                width: 536,
                                height: 192
                            })
                        }), (0, l.jsxs)("div", {
                            id: "loading-status",
                            className: "flex flex-col justify-start items-center",
                            children: [(0, l.jsxs)("div", {
                                className: "flex flex-row justify-start items-center h-28 text-golden font-bender",
                                children: [(0, l.jsx)(b.Z, {
                                    src: "/assets/loading/right-arrow.png",
                                    alt: "arrow",
                                    width: 28,
                                    height: 28,
                                    style: {
                                        objectFit: "contain"
                                    }
                                }), (0, l.jsxs)("span", {
                                    children: ["LOADING ", Math.round(100 * s), "%"]
                                })]
                            }), (0, l.jsxs)("div", {
                                id: "loading-bar",
                                className: "relative w-full lg:w-[500px] h-12 flex justify-between items-center lg:mt-[120px]",
                                children: [(0, l.jsx)("div", {
                                    className: "w-3 h-3 bg-[#939393]"
                                }), (0, l.jsx)("div", {
                                    className: "absolute top-1/2 left-3 right-3 transform -translate-y-1/2 h-1 bg-[#939393]",
                                    children: (0, l.jsx)("div", {
                                        className: "absolute top-1/2 transform -translate-y-1/2 h-3 bg-golden",
                                        style: {
                                            width: "".concat(100 * s, "%")
                                        }
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "w-3 h-3 bg-[#939393]"
                                })]
                            })]
                        })]
                    })
                },
                V = () => {
                    let {
                        currentSlideId: e,
                        isLoading: t
                    } = m(), [s, a] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        t || a(!0)
                    }, [t]), (0, l.jsx)(f.E.div, {
                        initial: {
                            y: s && "index" === e ? 0 : "100%"
                        },
                        animate: {
                            y: "index" === e ? 0 : "100%"
                        },
                        transition: {
                            duration: 1
                        },
                        className: "w-screen h-24 lg:h-[134px] absolute left-0 bottom-0 border-t border-[#ffffffd9] z-50",
                        children: (0, l.jsxs)("div", {
                            className: "flex flex-col justify-start items-start lg:pl-16 pl-4 h-24 lg:h-[134px] absolute bottom-0 w-screen z-50",
                            children: [(0, l.jsx)("h1", {
                                className: "font-extrabold lg:text-4xl text-2xl text-white  text-left font-oswald-heavy mt-2",
                                children: "YOMIO"
                            }), (0, l.jsx)("h2", {
                                className: "text-white font-medium text-xs mt-1 lg:mt-0 lg:text-xl text-right lg:leading-1 font-regular font-source-han-sans-sc-heavy",
                                children: "\xa92024YoMioBEYOUNG"
                            })]
                        })
                    })
                },
                q = e => {
                    let {
                        currentSlideId: t
                    } = e;
                    return (0, l.jsx)(u.M, {
                        children: "products" !== t && (0, l.jsx)(f.E.div, {
                            className: "hidden md:block lg:block absolute right-48 h-screen w-64 overflow-hidden z-10 opacity-30 -mr-5",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: .5,
                                ease: "easeInOut"
                            },
                            children: (0, l.jsx)(Y.default, {
                                className: "w-full h-full pointer-events-none",
                                href: "https://b23.tv/WoNuth1",
                                target: "_blank",
                                children: (0, l.jsx)("div", {
                                    className: "w-full h-full",
                                    children: (0, l.jsxs)(f.E.div, {
                                        className: "flex flex-col items-center h-[200%] opacity-30 hover:opacity-50 transition-opacity duration-300",
                                        initial: {
                                            y: "0%"
                                        },
                                        animate: {
                                            y: "-50%"
                                        },
                                        transition: {
                                            duration: 20,
                                            repeat: 1 / 0,
                                            ease: "linear"
                                        },
                                        children: [(0, l.jsx)("div", {
                                            className: "text-9xl font-black text-golden transform -rotate-90",
                                            children: "WENTIANPLAYWENTIANPLAYWENTIANPLAYWENTIANPLAYWENTIANPLAY"
                                        }), (0, l.jsx)("div", {
                                            className: "text-3xl font-black text-golden transform -rotate-90 ml-36",
                                            children: "//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////"
                                        })]
                                    })
                                })
                            })
                        }, "scrolling-text")
                    })
                },
                J = e => {
                    let {
                        currentSlideId: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "pointer-events-none lg:hidden md:hidden fixed bottom-40 w-full overflow-hidden z-10",
                        children: "products" !== t && "about-us" !== t && "careers" !== t && (0, l.jsx)(Y.default, {
                            className: "w-full h-full pointer-events-none",
                            href: "https://b23.tv/WoNuth1",
                            target: "_blank",
                            children: (0, l.jsx)("div", {
                                className: "w-full h-full",
                                children: (0, l.jsxs)(f.E.div, {
                                    className: "flex flex-col items-center h-full opacity-30 hover:opacity-50 transition-opacity duration-300",
                                    initial: {
                                        x: "100%"
                                    },
                                    animate: {
                                        x: "-100%"
                                    },
                                    transition: {
                                        duration: 20,
                                        repeat: 1 / 0,
                                        ease: "linear"
                                    },
                                    children: [(0, l.jsx)("div", {
                                        className: "text-3xl font-black text-golden",
                                        children: "WENTIANPLAYWENTIANPLAYWENTIANPLAYWENTIANPLAYWENTIANPLAY"
                                    }), (0, l.jsx)("div", {
                                        className: "text-md font-black text-golden ",
                                        children: "//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////"
                                    })]
                                })
                            })
                        })
                    })
                },
                X = () => {
                    let {
                        currentSlideId: e,
                        updateSlideId: t,
                        isAnimating: s,
                        setIsAnimating: i,
                        isLoading: a,
                        setIsLoading: n,
                        progress: r
                    } = m();
                    return (0, l.jsxs)("div", {
                        className: "w-screen",
                        children: [(0, l.jsx)(u.M, {
                            children: a ? (0, l.jsx)(f.E.div, {
                                initial: {
                                    opacity: 1
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 2
                                },
                                className: "absolute inset-0 flex items-center justify-center bg-white",
                                children: (0, l.jsx)(F, {
                                    setIsLoading: n,
                                    progress: r
                                })
                            }, "loading") : (0, l.jsxs)(f.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 2
                                },
                                className: "w-full h-full",
                                children: [(0, l.jsx)(Z, {
                                    currentSlideId: e,
                                    setIsAnimating: i
                                }), (0, l.jsx)(G, {
                                    isLoading: a,
                                    currentSlideId: e
                                }), (0, l.jsx)(U, {
                                    isLoading: a,
                                    currentSlideId: e
                                }), (0, l.jsx)(T, {
                                    isLoading: a
                                })]
                            }, "content")
                        }), !a && (0, l.jsx)(V, {}), (0, l.jsx)(q, {
                            currentSlideId: e
                        }), (0, l.jsx)(J, {
                            currentSlideId: e
                        }), (0, l.jsx)(D, {
                            isLoading: a,
                            currentSlideId: e
                        })]
                    })
                },
                K = () => (0, l.jsx)(Y.default, {
                    href: "/",
                    onClick: () => {
                        window && (window.location.href = "/")
                    },
                    children: (0, l.jsx)(b.Z, {
                        src: "/assets/common/logo/logo@2x.png",
                        alt: "logo",
                        width: 134,
                        height: 48,
                        className: "lg:ml-4 ml-2 lg:w-32 lg:h-12 w-24 h-9"
                    })
                }),
                Q = e => {
                    let {
                        currentSlideId: t,
                        updateSlideId: s
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "hidden lg:flex flex-row items-center justify-between space-x-12 h-full mr-8 z-50",
                        children: _.map(e => (0, l.jsxs)(Y.default, {
                            href: e.link,
                            className: "text-base hover:text-golden flex flex-col justify-start items-start ".concat(t === e.id ? "text-golden" : "text-white", " "),
                            onClick: () => {
                                n(e.id), s(e.id)
                            },
                            children: [(0, l.jsx)("h2", {
                                className: "font-oswald-heavy",
                                children: e.name
                            }), (0, l.jsx)("h2", {
                                className: "source-han-sans-sc-heavy",
                                children: e.zhName
                            })]
                        }, e.id))
                    })
                },
                $ = e => {
                    window.location.hash = e
                },
                ee = e => {
                    let {
                        currentSlideId: t,
                        updateSlideId: s
                    } = e, [a, n] = (0, i.useState)(!1);
                    return (0, l.jsxs)("div", {
                        className: "fixed right-0 top-0 lg:hidden md:hidden flex flex-col justify-center items-center z-50 w-12 h-full",
                        children: [(0, l.jsx)("div", {
                            onClick: () => {
                                n(!a)
                            },
                            className: "cursor-pointer p-2  rounded-md w-12",
                            children: a ? (0, l.jsx)("div", {
                                className: "text-white text-2xl font-bold",
                                children: "X"
                            }) : (0, l.jsxs)("div", {
                                className: "flex flex-col justify-center space-y-1.5 items-center h-6 w-6",
                                children: [(0, l.jsx)("span", {
                                    className: "block h-0.5 bg-white w-10/12"
                                }), (0, l.jsx)("span", {
                                    className: "block h-0.5 bg-white w-10/12"
                                }), (0, l.jsx)("span", {
                                    className: "block h-0.5 bg-white  w-10/12"
                                })]
                            })
                        }), a && (0, l.jsxs)("div", {
                            className: "fixed left-0 top-20 mb-20 w-screen h-screen flex flex-row justify-start items-start bg-opacity-90 bg-black",
                            children: [(0, l.jsxs)("div", {
                                className: "flex flex-grow flex-col justify-start items-center h-full",
                                children: [(0, l.jsx)("div", {
                                    className: "w-10/12 flex flex-col justify-start items-center",
                                    children: _.map(e => (0, l.jsxs)(Y.default, {
                                        href: e.link,
                                        className: "w-full flex justify-between items-center border-b border-white  ".concat(t === e.id ? "text-golden" : "text-white", " h-20"),
                                        onClick: () => {
                                            $(e.id), s(e.id), n(!1)
                                        },
                                        children: [(0, l.jsx)("span", {
                                            className: " font-oswald-medium",
                                            children: e.name
                                        }), (0, l.jsx)("div", {
                                            className: "  h-full flex flex-col justify-center items-center border-b-8  font-source-han-sans-sc-medium ".concat(t === e.id ? "border-golden" : "border-transparent", " mt-2"),
                                            children: e.zhName
                                        })]
                                    }, e.id))
                                }), (0, l.jsx)("div", {
                                    className: "w-16 "
                                })]
                            }), (0, l.jsx)("div", {
                                className: "w-12"
                            })]
                        })]
                    })
                },
                et = () => {
                    let e = (0, i.useRef)(null),
                        [t, s] = (0, i.useState)(!1),
                        [a, n] = (0, i.useState)(!0),
                        [r, o] = (0, i.useState)(!1),
                        [c, d] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        let t = () => {
                            a && e.current && (e.current.play(), s(!0), n(!1))
                        };
                        return window.addEventListener("click", t), () => window.removeEventListener("click", t)
                    }, [a]), (0, i.useEffect)(() => {
                        e.current && (e.current.volume = .1)
                    }, []), (0, l.jsxs)("div", {
                        className: "flex flex-row items-center justify-around cursor-pointer w-28 lg:w-48 lg:h-[80px] lx:px-0 px-1 ",
                        children: [(0, l.jsx)("div", {
                            className: "w-8 ",
                            children: (0, l.jsx)(b.Z, {
                                src: r ? "/assets/common/nav-corner/share-hover.png" : "/assets/common/nav-corner/share.png",
                                alt: "share",
                                width: 27,
                                height: 27,
                                className: "lg:mx-0 mx-1 contain-object",
                                onMouseEnter: () => o(!0),
                                onMouseLeave: () => o(!1)
                            })
                        }), (0, l.jsx)("div", {
                            className: "w-8",
                            children: (0, l.jsx)(b.Z, {
                                src: t ? "/assets/common/nav-corner/audio-on.png" : "/assets/common/nav-corner/audio-off.png",
                                alt: "audio",
                                width: 27,
                                height: 27,
                                className: "lg:mx-0 mx-1 object-contain",
                                onClick: () => {
                                    e.current && (t ? (e.current.pause(), s(!1)) : (e.current.play(), s(!0)))
                                }
                            })
                        }), (0, l.jsx)("div", {
                            className: "w-8",
                            children: (0, l.jsx)(Y.default, {
                                href: "https://space.bilibili.com/261571362",
                                target: "_blank",
                                children: (0, l.jsx)(b.Z, {
                                    src: c ? "/assets/common/nav-corner/bilibili-hover.png" : "/assets/common/nav-corner/bilibili.png",
                                    alt: "bilibili",
                                    width: 27,
                                    height: 27,
                                    className: "lg:mx-0 mx-1 contain-object",
                                    onMouseEnter: () => d(!0),
                                    onMouseLeave: () => d(!1)
                                })
                            })
                        }), (0, l.jsx)("audio", {
                            ref: e,
                            src: "/assets/common/nav-corner/bgm.mp3",
                            loop: !0
                        })]
                    })
                },
                es = () => {
                    let e = "-100%",
                        {
                            currentSlideId: t,
                            updateSlideId: s,
                            isLoading: i
                        } = m();
                    return i ? null : (0, l.jsx)("div", {
                        className: "w-full h-20 lg:h-24  flex flex-col justify-start items-start",
                        children: (0, l.jsxs)(f.E.div, {
                            className: "w-full h-20 lg:h-24 fixed top-0 left-0 flex flex-row items-center justify-between z-20 bg-gradient-to-b from-black to-transparent",
                            initial: {
                                y: e,
                                opacity: 0
                            },
                            animate: {
                                y: "0%",
                                opacity: 1
                            },
                            exit: {
                                y: e,
                                opacity: 0
                            },
                            transition: {
                                duration: 1
                            },
                            children: [(0, l.jsx)(K, {}), (0, l.jsxs)("div", {
                                className: "flex flex-row justify-start items-center lg:py-0 py-2 lg:mr-0 mr-16",
                                children: [(0, l.jsx)(Q, {
                                    currentSlideId: t,
                                    updateSlideId: s
                                }), (0, l.jsx)(et, {})]
                            }), (0, l.jsx)(f.E.div, {
                                className: "absolute bottom-0 left-0 w-full border-b border-white-50 ".concat("careers" === t ? "lg:border-white-50" : "lg:border-transparent"),
                                initial: {
                                    opacity: 0,
                                    y: "-100%"
                                },
                                animate: {
                                    opacity: .3,
                                    y: "0%"
                                },
                                exit: {
                                    opacity: 0,
                                    y: "-100%"
                                },
                                transition: {
                                    duration: 1
                                }
                            }), (0, l.jsx)(ee, {
                                currentSlideId: t,
                                updateSlideId: s
                            })]
                        })
                    })
                };
            var el = () => (0, l.jsx)(h, {
                children: (0, l.jsxs)("div", {
                    className: "h-screen w-screen",
                    children: [(0, l.jsx)(es, {}), (0, l.jsx)(X, {})]
                })
            })
        }
    },
    function(e) {
        e.O(0, [962, 984, 957, 37, 879, 744], function() {
            return e(e.s = 3362)
        }), _N_E = e.O()
    }
]);
