(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [957], {
        4316: function(t, e, r) {
            "use strict";
            r.d(e, {
                Au: function() {
                    return a
                },
                G3: function() {
                    return g
                },
                Ki: function() {
                    return u
                },
                d3: function() {
                    return d
                },
                hL: function() {
                    return f
                },
                lx: function() {
                    return m
                },
                qX: function() {
                    return p
                },
                tm: function() {
                    return h
                }
            });
            var n, i, s = r(289),
                o = r.n(s),
                a = function(t) {
                    return "function" === ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer
                },
                u = function(t) {
                    return t instanceof Uint8Array ? t : (Array.isArray(t) || a(t) || t instanceof ArrayBuffer || (t = "number" != typeof t || "number" == typeof t && t != t ? 0 : [t]), new Uint8Array(t && t.buffer || t, t && t.byteOffset || 0, t && t.byteLength || 0))
                },
                l = o().BigInt || Number,
                c = [l("0x1"), l("0x100"), l("0x10000"), l("0x1000000"), l("0x100000000"), l("0x10000000000"), l("0x1000000000000"), l("0x100000000000000"), l("0x10000000000000000")];
            255 === (i = new Uint8Array((n = new Uint16Array([65484])).buffer, n.byteOffset, n.byteLength))[0] || i[0];
            var h = function(t, e) {
                    var r = void 0 === e ? {} : e,
                        n = r.signed,
                        i = r.le,
                        s = void 0 !== i && i;
                    t = u(t);
                    var o = s ? "reduce" : "reduceRight",
                        a = (t[o] ? t[o] : Array.prototype[o]).call(t, function(e, r, n) {
                            var i = s ? n : Math.abs(n + 1 - t.length);
                            return e + l(r) * c[i]
                        }, l(0));
                    if (void 0 !== n && n) {
                        var h = c[t.length] / l(2) - l(1);
                        (a = l(a)) > h && (a -= h, a -= h, a -= l(2))
                    }
                    return Number(a)
                },
                f = function(t, e) {
                    var r = (void 0 === e ? {} : e).le,
                        n = void 0 !== r && r;
                    ("bigint" != typeof t && "number" != typeof t || "number" == typeof t && t != t) && (t = 0);
                    for (var i = Math.ceil((t = l(t)).toString(2).length / 8), s = new Uint8Array(new ArrayBuffer(i)), o = 0; o < i; o++) {
                        var a = n ? o : Math.abs(o + 1 - s.length);
                        s[a] = Number(t / c[o] & l(255)), t < 0 && (s[a] = Math.abs(~s[a]), s[a] -= 0 === o ? 1 : 2)
                    }
                    return s
                },
                d = function(t) {
                    if (!t) return "";
                    t = Array.prototype.slice.call(t);
                    var e = String.fromCharCode.apply(null, u(t));
                    try {
                        return decodeURIComponent(escape(e))
                    } catch (t) {}
                    return e
                },
                p = function(t, e) {
                    if ("string" != typeof t && t && "function" == typeof t.toString && (t = t.toString()), "string" != typeof t) return new Uint8Array;
                    e || (t = unescape(encodeURIComponent(t)));
                    for (var r = new Uint8Array(t.length), n = 0; n < t.length; n++) r[n] = t.charCodeAt(n);
                    return r
                },
                m = function() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    if ((e = e.filter(function(t) {
                            return t && (t.byteLength || t.length) && "string" != typeof t
                        })).length <= 1) return u(e[0]);
                    var n = new Uint8Array(e.reduce(function(t, e, r) {
                            return t + (e.byteLength || e.length)
                        }, 0)),
                        i = 0;
                    return e.forEach(function(t) {
                        t = u(t), n.set(t, i), i += t.byteLength
                    }), n
                },
                g = function(t, e, r) {
                    var n = void 0 === r ? {} : r,
                        i = n.offset,
                        s = void 0 === i ? 0 : i,
                        o = n.mask,
                        a = void 0 === o ? [] : o;
                    t = u(t);
                    var l = (e = u(e)).every ? e.every : Array.prototype.every;
                    return e.length && t.length - s >= e.length && l.call(e, function(e, r) {
                        return e === (a[r] ? a[r] & t[s + r] : t[s + r])
                    })
                }
        },
        5576: function(t, e, r) {
            "use strict";
            r.d(e, {
                Hi: function() {
                    return p
                },
                Jg: function() {
                    return c
                },
                KL: function() {
                    return h
                },
                _5: function() {
                    return f
                },
                kS: function() {
                    return l
                },
                lA: function() {
                    return m
                },
                p7: function() {
                    return d
                },
                ws: function() {
                    return u
                },
                xz: function() {
                    return g
                }
            });
            var n = r(289),
                i = r.n(n),
                s = {
                    mp4: /^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v|stpp.ttml.im1t)/,
                    webm: /^(vp0?[89]|av0?1|opus|vorbis)/,
                    ogg: /^(vp0?[89]|theora|flac|opus|vorbis)/,
                    video: /^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/,
                    audio: /^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3|speex|aac)/,
                    text: /^(stpp.ttml.im1t)/,
                    muxerVideo: /^(avc0?1)/,
                    muxerAudio: /^(mp4a)/,
                    muxerText: /a^/
                },
                o = ["video", "audio", "text"],
                a = ["Video", "Audio", "Text"],
                u = function(t) {
                    return t ? t.replace(/avc1\.(\d+)\.(\d+)/i, function(t, e, r) {
                        return "avc1." + ("00" + Number(e).toString(16)).slice(-2) + "00" + ("00" + Number(r).toString(16)).slice(-2)
                    }) : t
                },
                l = function(t) {
                    void 0 === t && (t = "");
                    var e = t.split(","),
                        r = [];
                    return e.forEach(function(t) {
                        var e;
                        t = t.trim(), o.forEach(function(n) {
                            var i = s[n].exec(t.toLowerCase());
                            if (i && !(i.length <= 1)) {
                                e = n;
                                var o = t.substring(0, i[1].length),
                                    a = t.replace(o, "");
                                r.push({
                                    type: o,
                                    details: a,
                                    mediaType: n
                                })
                            }
                        }), e || r.push({
                            type: t,
                            details: "",
                            mediaType: "unknown"
                        })
                    }), r
                },
                c = function(t, e) {
                    if (!t.mediaGroups.AUDIO || !e) return null;
                    var r = t.mediaGroups.AUDIO[e];
                    if (!r) return null;
                    for (var n in r) {
                        var i = r[n];
                        if (i.default && i.playlists) return l(i.playlists[0].attributes.CODECS)
                    }
                    return null
                },
                h = function(t) {
                    return void 0 === t && (t = ""), s.audio.test(t.trim().toLowerCase())
                },
                f = function(t) {
                    if (t && "string" == typeof t) {
                        var e, r = t.toLowerCase().split(",").map(function(t) {
                                return u(t.trim())
                            }),
                            n = "video";
                        1 === r.length && h(r[0]) ? n = "audio" : 1 === r.length && (void 0 === (e = r[0]) && (e = ""), s.text.test(e.trim().toLowerCase())) && (n = "application");
                        var i = "mp4";
                        return r.every(function(t) {
                            return s.mp4.test(t)
                        }) ? i = "mp4" : r.every(function(t) {
                            return s.webm.test(t)
                        }) ? i = "webm" : r.every(function(t) {
                            return s.ogg.test(t)
                        }) && (i = "ogg"), n + "/" + i + ';codecs="' + t + '"'
                    }
                },
                d = function(t) {
                    return void 0 === t && (t = ""), i().MediaSource && i().MediaSource.isTypeSupported && i().MediaSource.isTypeSupported(f(t)) || !1
                },
                p = function(t) {
                    return void 0 === t && (t = ""), t.toLowerCase().split(",").every(function(t) {
                        t = t.trim();
                        for (var e = 0; e < a.length; e++)
                            if (s["muxer" + a[e]].test(t)) return !0;
                        return !1
                    })
                },
                m = "mp4a.40.2",
                g = "avc1.4d400d"
        },
        9300: function(t, e, r) {
            "use strict";
            r.d(e, {
                Xm: function() {
                    return x
                },
                cz: function() {
                    return S
                }
            });
            var n, i = r(4316);
            new Uint8Array([79, 112, 117, 115, 72, 101, 97, 100]);
            var s = function(t) {
                    return "string" == typeof t ? (0, i.qX)(t) : t
                },
                o = function(t) {
                    t = (0, i.Ki)(t);
                    for (var e = [], r = 0; t.length > r;) {
                        var s = t[r],
                            o = 0,
                            a = 0,
                            u = t[++a];
                        for (a++; 128 & u;) o = (127 & u) << 7, u = t[a], a++;
                        o += 127 & u;
                        for (var l = 0; l < n.length; l++) {
                            var c = n[l],
                                h = c.id,
                                f = c.parser;
                            if (s === h) {
                                e.push(f(t.subarray(a, a + o)));
                                break
                            }
                        }
                        r += o + a
                    }
                    return e
                };
            n = [{
                id: 3,
                parser: function(t) {
                    var e = {
                        tag: 3,
                        id: t[0] << 8 | t[1],
                        flags: t[2],
                        size: 3,
                        dependsOnEsId: 0,
                        ocrEsId: 0,
                        descriptors: [],
                        url: ""
                    };
                    if (128 & e.flags && (e.dependsOnEsId = t[e.size] << 8 | t[e.size + 1], e.size += 2), 64 & e.flags) {
                        var r = t[e.size];
                        e.url = (0, i.d3)(t.subarray(e.size + 1, e.size + 1 + r)), e.size += r
                    }
                    return 32 & e.flags && (e.ocrEsId = t[e.size] << 8 | t[e.size + 1], e.size += 2), e.descriptors = o(t.subarray(e.size)) || [], e
                }
            }, {
                id: 4,
                parser: function(t) {
                    return {
                        tag: 4,
                        oti: t[0],
                        streamType: t[1],
                        bufferSize: t[2] << 16 | t[3] << 8 | t[4],
                        maxBitrate: t[5] << 24 | t[6] << 16 | t[7] << 8 | t[8],
                        avgBitrate: t[9] << 24 | t[10] << 16 | t[11] << 8 | t[12],
                        descriptors: o(t.subarray(13))
                    }
                }
            }, {
                id: 5,
                parser: function(t) {
                    return {
                        tag: 5,
                        bytes: t
                    }
                }
            }, {
                id: 6,
                parser: function(t) {
                    return {
                        tag: 6,
                        bytes: t
                    }
                }
            }];
            var a = function t(e, r, n) {
                    void 0 === n && (n = !1), r = Array.isArray(o = r) ? o.map(function(t) {
                        return s(t)
                    }) : [s(o)], e = (0, i.Ki)(e);
                    var o, a = [];
                    if (!r.length) return a;
                    for (var u = 0; u < e.length;) {
                        var l = (e[u] << 24 | e[u + 1] << 16 | e[u + 2] << 8 | e[u + 3]) >>> 0,
                            c = e.subarray(u + 4, u + 8);
                        if (0 === l) break;
                        var h = u + l;
                        if (h > e.length) {
                            if (n) break;
                            h = e.length
                        }
                        var f = e.subarray(u + 8, h);
                        (0, i.G3)(c, r[0]) && (1 === r.length ? a.push(f) : a.push.apply(a, t(f, r.slice(1), n))), u = h
                    }
                    return a
                },
                u = {
                    EBML: (0, i.Ki)([26, 69, 223, 163]),
                    DocType: (0, i.Ki)([66, 130]),
                    Segment: (0, i.Ki)([24, 83, 128, 103]),
                    SegmentInfo: (0, i.Ki)([21, 73, 169, 102]),
                    Tracks: (0, i.Ki)([22, 84, 174, 107]),
                    Track: (0, i.Ki)([174]),
                    TrackNumber: (0, i.Ki)([215]),
                    DefaultDuration: (0, i.Ki)([35, 227, 131]),
                    TrackEntry: (0, i.Ki)([174]),
                    TrackType: (0, i.Ki)([131]),
                    FlagDefault: (0, i.Ki)([136]),
                    CodecID: (0, i.Ki)([134]),
                    CodecPrivate: (0, i.Ki)([99, 162]),
                    VideoTrack: (0, i.Ki)([224]),
                    AudioTrack: (0, i.Ki)([225]),
                    Cluster: (0, i.Ki)([31, 67, 182, 117]),
                    Timestamp: (0, i.Ki)([231]),
                    TimestampScale: (0, i.Ki)([42, 215, 177]),
                    BlockGroup: (0, i.Ki)([160]),
                    BlockDuration: (0, i.Ki)([155]),
                    Block: (0, i.Ki)([161]),
                    SimpleBlock: (0, i.Ki)([163])
                },
                l = [128, 64, 32, 16, 8, 4, 2, 1],
                c = function(t) {
                    for (var e = 1, r = 0; r < l.length && !(t & l[r]); r++) e++;
                    return e
                },
                h = function(t, e, r, n) {
                    void 0 === r && (r = !0), void 0 === n && (n = !1);
                    var s = c(t[e]),
                        o = t.subarray(e, e + s);
                    return r && (o = Array.prototype.slice.call(t, e, e + s), o[0] ^= l[s - 1]), {
                        length: s,
                        value: (0, i.tm)(o, {
                            signed: n
                        }),
                        bytes: o
                    }
                },
                f = function t(e) {
                    return "string" == typeof e ? e.match(/.{1,2}/g).map(function(e) {
                        return t(e)
                    }) : "number" == typeof e ? (0, i.hL)(e) : e
                },
                d = function t(e, r, n) {
                    if (n >= r.length) return r.length;
                    var s = h(r, n, !1);
                    if ((0, i.G3)(e.bytes, s.bytes)) return n;
                    var o = h(r, n + s.length);
                    return t(e, r, n + o.length + o.value + s.length)
                },
                p = function t(e, r) {
                    r = Array.isArray(n = r) ? n.map(function(t) {
                        return f(t)
                    }) : [f(n)], e = (0, i.Ki)(e);
                    var n, s = [];
                    if (!r.length) return s;
                    for (var o = 0; o < e.length;) {
                        var a = h(e, o, !1),
                            u = h(e, o + a.length),
                            l = o + a.length + u.length;
                        127 === u.value && (u.value = d(a, e, l), u.value !== e.length && (u.value -= l));
                        var c = l + u.value > e.length ? e.length : l + u.value,
                            p = e.subarray(l, c);
                        (0, i.G3)(r[0], a.bytes) && (1 === r.length ? s.push(p) : s = s.concat(t(p, r.slice(1)))), o += a.length + u.length + p.length
                    }
                    return s
                },
                m = r(2989),
                g = (0, i.Ki)([0, 0, 0, 1]),
                y = (0, i.Ki)([0, 0, 1]),
                v = (0, i.Ki)([0, 0, 3]),
                b = function(t) {
                    for (var e = [], r = 1; r < t.length - 2;)(0, i.G3)(t.subarray(r, r + 3), v) && (e.push(r + 2), r++), r++;
                    if (0 === e.length) return t;
                    var n = t.length - e.length,
                        s = new Uint8Array(n),
                        o = 0;
                    for (r = 0; r < n; o++, r++) o === e[0] && (o++, e.shift()), s[r] = t[o];
                    return s
                },
                w = function(t, e, r, n) {
                    void 0 === n && (n = 1 / 0), t = (0, i.Ki)(t), r = [].concat(r);
                    for (var s, o = 0, a = 0; o < t.length && (a < n || s);) {
                        var u = void 0;
                        if ((0, i.G3)(t.subarray(o), g) ? u = 4 : (0, i.G3)(t.subarray(o), y) && (u = 3), !u) {
                            o++;
                            continue
                        }
                        if (a++, s) return b(t.subarray(s, o));
                        var l = void 0;
                        "h264" === e ? l = 31 & t[o + u] : "h265" === e && (l = t[o + u] >> 1 & 63), -1 !== r.indexOf(l) && (s = o + u), o += u + ("h264" === e ? 1 : 2)
                    }
                    return t.subarray(0, 0)
                },
                E = {
                    webm: (0, i.Ki)([119, 101, 98, 109]),
                    matroska: (0, i.Ki)([109, 97, 116, 114, 111, 115, 107, 97]),
                    flac: (0, i.Ki)([102, 76, 97, 67]),
                    ogg: (0, i.Ki)([79, 103, 103, 83]),
                    ac3: (0, i.Ki)([11, 119]),
                    riff: (0, i.Ki)([82, 73, 70, 70]),
                    avi: (0, i.Ki)([65, 86, 73]),
                    wav: (0, i.Ki)([87, 65, 86, 69]),
                    "3gp": (0, i.Ki)([102, 116, 121, 112, 51, 103]),
                    mp4: (0, i.Ki)([102, 116, 121, 112]),
                    fmp4: (0, i.Ki)([115, 116, 121, 112]),
                    mov: (0, i.Ki)([102, 116, 121, 112, 113, 116]),
                    moov: (0, i.Ki)([109, 111, 111, 118]),
                    moof: (0, i.Ki)([109, 111, 111, 102])
                },
                T = {
                    aac: function(t) {
                        var e = (0, m.c)(t);
                        return (0, i.G3)(t, [255, 16], {
                            offset: e,
                            mask: [255, 22]
                        })
                    },
                    mp3: function(t) {
                        var e = (0, m.c)(t);
                        return (0, i.G3)(t, [255, 2], {
                            offset: e,
                            mask: [255, 6]
                        })
                    },
                    webm: function(t) {
                        var e = p(t, [u.EBML, u.DocType])[0];
                        return (0, i.G3)(e, E.webm)
                    },
                    mkv: function(t) {
                        var e = p(t, [u.EBML, u.DocType])[0];
                        return (0, i.G3)(e, E.matroska)
                    },
                    mp4: function(t) {
                        return !(T["3gp"](t) || T.mov(t)) && (!!((0, i.G3)(t, E.mp4, {
                            offset: 4
                        }) || (0, i.G3)(t, E.fmp4, {
                            offset: 4
                        }) || (0, i.G3)(t, E.moof, {
                            offset: 4
                        }) || (0, i.G3)(t, E.moov, {
                            offset: 4
                        })) || void 0)
                    },
                    mov: function(t) {
                        return (0, i.G3)(t, E.mov, {
                            offset: 4
                        })
                    },
                    "3gp": function(t) {
                        return (0, i.G3)(t, E["3gp"], {
                            offset: 4
                        })
                    },
                    ac3: function(t) {
                        var e = (0, m.c)(t);
                        return (0, i.G3)(t, E.ac3, {
                            offset: e
                        })
                    },
                    ts: function(t) {
                        if (t.length < 189 && t.length >= 1) return 71 === t[0];
                        for (var e = 0; e + 188 < t.length && e < 188;) {
                            if (71 === t[e] && 71 === t[e + 188]) return !0;
                            e += 1
                        }
                        return !1
                    },
                    flac: function(t) {
                        var e = (0, m.c)(t);
                        return (0, i.G3)(t, E.flac, {
                            offset: e
                        })
                    },
                    ogg: function(t) {
                        return (0, i.G3)(t, E.ogg)
                    },
                    avi: function(t) {
                        return (0, i.G3)(t, E.riff) && (0, i.G3)(t, E.avi, {
                            offset: 8
                        })
                    },
                    wav: function(t) {
                        return (0, i.G3)(t, E.riff) && (0, i.G3)(t, E.wav, {
                            offset: 8
                        })
                    },
                    h264: function(t) {
                        return w(t, "h264", 7, 3).length
                    },
                    h265: function(t) {
                        return w(t, "h265", [32, 33], 3).length
                    }
                },
                D = Object.keys(T).filter(function(t) {
                    return "ts" !== t && "h264" !== t && "h265" !== t
                }).concat(["ts", "h264", "h265"]);
            D.forEach(function(t) {
                var e = T[t];
                T[t] = function(t) {
                    return e((0, i.Ki)(t))
                }
            });
            var x = function(t) {
                    t = (0, i.Ki)(t);
                    for (var e = 0; e < D.length; e++) {
                        var r = D[e];
                        if (T[r](t)) return r
                    }
                    return ""
                },
                S = function(t) {
                    return a(t, ["moof"]).length > 0
                }
        },
        2989: function(t, e, r) {
            "use strict";
            r.d(e, {
                c: function() {
                    return o
                }
            });
            var n = r(4316),
                i = (0, n.Ki)([73, 68, 51]),
                s = function(t, e) {
                    void 0 === e && (e = 0);
                    var r = (t = (0, n.Ki)(t))[e + 5],
                        i = t[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
                    return (16 & r) >> 4 ? i + 20 : i + 10
                },
                o = function t(e, r) {
                    return (void 0 === r && (r = 0), (e = (0, n.Ki)(e)).length - r < 10 || !(0, n.G3)(e, i, {
                        offset: r
                    })) ? r : (r += s(e, r), t(e, r))
                }
        },
        7691: function(t, e, r) {
            "use strict";
            r.d(e, {
                t: function() {
                    return s
                }
            });
            var n = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i,
                i = /^application\/dash\+xml/i,
                s = function(t) {
                    return n.test(t) ? "hls" : i.test(t) ? "dash" : "application/vnd.videojs.vhs+json" === t ? "vhs-json" : null
                }
        },
        9538: function(t, e, r) {
            "use strict";
            var n = r(6724),
                i = r.n(n),
                s = r(289),
                o = r.n(s),
                a = "http://example.com";
            e.Z = function(t, e) {
                if (/^[a-z]+:/i.test(e)) return e;
                /^data:/.test(t) && (t = o().location && o().location.href || "");
                var r = "function" == typeof o().URL,
                    n = /^\/\//.test(t),
                    s = !o().location && !/\/\//i.test(t);
                if (r ? t = new(o()).URL(t, o().location || a) : /\/\//i.test(t) || (t = i().buildAbsoluteURL(o().location && o().location.href || "", t)), r) {
                    var u = new URL(e, t);
                    return s ? u.href.slice(a.length) : n ? u.href.slice(u.protocol.length) : u.href
                }
                return i().buildAbsoluteURL(t, e)
            }
        },
        4488: function(t, e, r) {
            "use strict";
            var n = r(289);
            t.exports = function(t, e) {
                return void 0 === e && (e = !1),
                    function(r, i, s) {
                        if (r) {
                            t(r);
                            return
                        }
                        if (i.statusCode >= 400 && i.statusCode <= 599) {
                            var o = s;
                            if (e) {
                                if (n.TextDecoder) {
                                    var a, u = (void 0 === (a = i.headers && i.headers["content-type"]) && (a = ""), a.toLowerCase().split(";").reduce(function(t, e) {
                                        var r = e.split("="),
                                            n = r[0],
                                            i = r[1];
                                        return "charset" === n.trim() ? i.trim() : t
                                    }, "utf-8"));
                                    try {
                                        o = new TextDecoder(u).decode(s)
                                    } catch (t) {}
                                } else o = String.fromCharCode.apply(null, new Uint8Array(s))
                            }
                            t({
                                cause: o
                            });
                            return
                        }
                        t(null, s)
                    }
            }
        },
        1188: function(t, e, r) {
            "use strict";
            var n = r(289),
                i = r(2241),
                s = r(6671);
            u.httpHandler = r(4488);
            var o = function(t) {
                var e = {};
                return t && t.trim().split("\n").forEach(function(t) {
                    var r = t.indexOf(":"),
                        n = t.slice(0, r).trim().toLowerCase(),
                        i = t.slice(r + 1).trim();
                    void 0 === e[n] ? e[n] = i : Array.isArray(e[n]) ? e[n].push(i) : e[n] = [e[n], i]
                }), e
            };

            function a(t, e, r) {
                var n = t;
                return s(e) ? (r = e, "string" == typeof t && (n = {
                    uri: t
                })) : n = i({}, e, {
                    uri: t
                }), n.callback = r, n
            }

            function u(t, e, r) {
                return l(e = a(t, e, r))
            }

            function l(t) {
                if (void 0 === t.callback) throw Error("callback argument missing");
                var e, r, n, i = !1,
                    s = function(e, r, n) {
                        i || (i = !0, t.callback(e, r, n))
                    };

                function a(t) {
                    return clearTimeout(n), t instanceof Error || (t = Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, s(t, y)
                }

                function l() {
                    if (!r) {
                        clearTimeout(n);
                        var e, i = y,
                            a = null;
                        return 0 !== (e = t.useXDR && void 0 === c.status ? 200 : 1223 === c.status ? 204 : c.status) ? (i = {
                            body: function() {
                                var t = void 0;
                                if (t = c.response ? c.response : c.responseText || function(t) {
                                        try {
                                            if ("document" === t.responseType) return t.responseXML;
                                            var e = t.responseXML && "parsererror" === t.responseXML.documentElement.nodeName;
                                            if ("" === t.responseType && !e) return t.responseXML
                                        } catch (t) {}
                                        return null
                                    }(c), g) try {
                                    t = JSON.parse(t)
                                } catch (t) {}
                                return t
                            }(),
                            statusCode: e,
                            method: f,
                            headers: {},
                            url: h,
                            rawRequest: c
                        }, c.getAllResponseHeaders && (i.headers = o(c.getAllResponseHeaders()))) : a = Error("Internal XMLHttpRequest Error"), s(a, i, i.body)
                    }
                }
                var c = t.xhr || null;
                c || (c = t.cors || t.useXDR ? new u.XDomainRequest : new u.XMLHttpRequest);
                var h = c.url = t.uri || t.url,
                    f = c.method = t.method || "GET",
                    d = t.body || t.data,
                    p = c.headers = t.headers || {},
                    m = !!t.sync,
                    g = !1,
                    y = {
                        body: void 0,
                        headers: {},
                        statusCode: 0,
                        method: f,
                        url: h,
                        rawRequest: c
                    };
                if ("json" in t && !1 !== t.json && (g = !0, p.accept || p.Accept || (p.Accept = "application/json"), "GET" !== f && "HEAD" !== f && (p["content-type"] || p["Content-Type"] || (p["Content-Type"] = "application/json"), d = JSON.stringify(!0 === t.json ? d : t.json))), c.onreadystatechange = function() {
                        4 === c.readyState && setTimeout(l, 0)
                    }, c.onload = l, c.onerror = a, c.onprogress = function() {}, c.onabort = function() {
                        r = !0
                    }, c.ontimeout = a, c.open(f, h, !m, t.username, t.password), m || (c.withCredentials = !!t.withCredentials), !m && t.timeout > 0 && (n = setTimeout(function() {
                        if (!r) {
                            r = !0, c.abort("timeout");
                            var t = Error("XMLHttpRequest timeout");
                            t.code = "ETIMEDOUT", a(t)
                        }
                    }, t.timeout)), c.setRequestHeader)
                    for (e in p) p.hasOwnProperty(e) && c.setRequestHeader(e, p[e]);
                else if (t.headers && ! function(t) {
                        for (var e in t)
                            if (t.hasOwnProperty(e)) return !1;
                        return !0
                    }(t.headers)) throw Error("Headers cannot be set on an XDomainRequest object");
                return "responseType" in t && (c.responseType = t.responseType), "beforeSend" in t && "function" == typeof t.beforeSend && t.beforeSend(c), c.send(d || null), c
            }
            t.exports = u, t.exports.default = u, u.XMLHttpRequest = n.XMLHttpRequest || function() {}, u.XDomainRequest = "withCredentials" in new u.XMLHttpRequest ? u.XMLHttpRequest : n.XDomainRequest,
                function(t, e) {
                    for (var r = 0; r < t.length; r++) e(t[r])
                }(["get", "put", "post", "patch", "head", "delete"], function(t) {
                    u["delete" === t ? "del" : t] = function(e, r, n) {
                        return (r = a(e, r, n)).method = t.toUpperCase(), l(r)
                    }
                })
        },
        5716: function(t, e) {
            "use strict";

            function r(t, e) {
                return void 0 === e && (e = Object), e && "function" == typeof e.freeze ? e.freeze(t) : t
            }
            var n = r({
                    HTML: "text/html",
                    isHTML: function(t) {
                        return t === n.HTML
                    },
                    XML_APPLICATION: "application/xml",
                    XML_TEXT: "text/xml",
                    XML_XHTML_APPLICATION: "application/xhtml+xml",
                    XML_SVG_IMAGE: "image/svg+xml"
                }),
                i = r({
                    HTML: "http://www.w3.org/1999/xhtml",
                    isHTML: function(t) {
                        return t === i.HTML
                    },
                    SVG: "http://www.w3.org/2000/svg",
                    XML: "http://www.w3.org/XML/1998/namespace",
                    XMLNS: "http://www.w3.org/2000/xmlns/"
                });
            e.assign = function(t, e) {
                if (null === t || "object" != typeof t) throw TypeError("target is not an object");
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }, e.find = function(t, e, r) {
                if (void 0 === r && (r = Array.prototype), t && "function" == typeof r.find) return r.find.call(t, e);
                for (var n = 0; n < t.length; n++)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var i = t[n];
                        if (e.call(void 0, i, n, t)) return i
                    }
            }, e.freeze = r, e.MIME_TYPE = n, e.NAMESPACE = i
        },
        5472: function(t, e, r) {
            var n = r(5716),
                i = r(9465),
                s = r(8150),
                o = r(252),
                a = i.DOMImplementation,
                u = n.NAMESPACE,
                l = o.ParseError,
                c = o.XMLReader;

            function h(t) {
                return t.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n")
            }

            function f(t) {
                this.options = t || {
                    locator: {}
                }
            }

            function d() {
                this.cdata = !1
            }

            function p(t, e) {
                e.lineNumber = t.lineNumber, e.columnNumber = t.columnNumber
            }

            function m(t) {
                if (t) return "\n@" + (t.systemId || "") + "#[line:" + t.lineNumber + ",col:" + t.columnNumber + "]"
            }

            function g(t, e, r) {
                return "string" == typeof t ? t.substr(e, r) : t.length >= e + r || e ? new java.lang.String(t, e, r) + "" : t
            }

            function y(t, e) {
                t.currentElement ? t.currentElement.appendChild(e) : t.doc.appendChild(e)
            }
            f.prototype.parseFromString = function(t, e) {
                var r = this.options,
                    n = new c,
                    i = r.domBuilder || new d,
                    o = r.errorHandler,
                    a = r.locator,
                    l = r.xmlns || {},
                    f = /\/x?html?$/.test(e),
                    p = f ? s.HTML_ENTITIES : s.XML_ENTITIES;
                a && i.setDocumentLocator(a), n.errorHandler = function(t, e, r) {
                    if (!t) {
                        if (e instanceof d) return e;
                        t = e
                    }
                    var n = {},
                        i = t instanceof Function;

                    function s(e) {
                        var s = t[e];
                        !s && i && (s = 2 == t.length ? function(r) {
                            t(e, r)
                        } : t), n[e] = s && function(t) {
                            s("[xmldom " + e + "]	" + t + m(r))
                        } || function() {}
                    }
                    return r = r || {}, s("warning"), s("error"), s("fatalError"), n
                }(o, i, a), n.domBuilder = r.domBuilder || i, f && (l[""] = u.HTML), l.xml = l.xml || u.XML;
                var g = r.normalizeLineEndings || h;
                return t && "string" == typeof t ? n.parse(g(t), l, p) : n.errorHandler.error("invalid doc source"), i.doc
            }, d.prototype = {
                startDocument: function() {
                    this.doc = new a().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId)
                },
                startElement: function(t, e, r, n) {
                    var i = this.doc,
                        s = i.createElementNS(t, r || e),
                        o = n.length;
                    y(this, s), this.currentElement = s, this.locator && p(this.locator, s);
                    for (var a = 0; a < o; a++) {
                        var t = n.getURI(a),
                            u = n.getValue(a),
                            r = n.getQName(a),
                            l = i.createAttributeNS(t, r);
                        this.locator && p(n.getLocator(a), l), l.value = l.nodeValue = u, s.setAttributeNode(l)
                    }
                },
                endElement: function(t, e, r) {
                    var n = this.currentElement;
                    n.tagName, this.currentElement = n.parentNode
                },
                startPrefixMapping: function(t, e) {},
                endPrefixMapping: function(t) {},
                processingInstruction: function(t, e) {
                    var r = this.doc.createProcessingInstruction(t, e);
                    this.locator && p(this.locator, r), y(this, r)
                },
                ignorableWhitespace: function(t, e, r) {},
                characters: function(t, e, r) {
                    if (t = g.apply(this, arguments)) {
                        if (this.cdata) var n = this.doc.createCDATASection(t);
                        else var n = this.doc.createTextNode(t);
                        this.currentElement ? this.currentElement.appendChild(n) : /^\s*$/.test(t) && this.doc.appendChild(n), this.locator && p(this.locator, n)
                    }
                },
                skippedEntity: function(t) {},
                endDocument: function() {
                    this.doc.normalize()
                },
                setDocumentLocator: function(t) {
                    (this.locator = t) && (t.lineNumber = 0)
                },
                comment: function(t, e, r) {
                    t = g.apply(this, arguments);
                    var n = this.doc.createComment(t);
                    this.locator && p(this.locator, n), y(this, n)
                },
                startCDATA: function() {
                    this.cdata = !0
                },
                endCDATA: function() {
                    this.cdata = !1
                },
                startDTD: function(t, e, r) {
                    var n = this.doc.implementation;
                    if (n && n.createDocumentType) {
                        var i = n.createDocumentType(t, e, r);
                        this.locator && p(this.locator, i), y(this, i), this.doc.doctype = i
                    }
                },
                warning: function(t) {
                    console.warn("[xmldom warning]	" + t, m(this.locator))
                },
                error: function(t) {
                    console.error("[xmldom error]	" + t, m(this.locator))
                },
                fatalError: function(t) {
                    throw new l(t, this.locator)
                }
            }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(t) {
                d.prototype[t] = function() {
                    return null
                }
            }), e.DOMParser = f
        },
        9465: function(t, e, r) {
            var n = r(5716),
                i = n.find,
                s = n.NAMESPACE;

            function o(t) {
                return "" !== t
            }

            function a(t, e) {
                return t.hasOwnProperty(e) || (t[e] = !0), t
            }

            function u(t) {
                return t ? Object.keys((t ? t.split(/[\t\n\f\r ]+/).filter(o) : []).reduce(a, {})) : []
            }

            function l(t, e) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }

            function c(t, e) {
                var r = t.prototype;
                if (!(r instanceof e)) {
                    function n() {}
                    n.prototype = e.prototype, l(r, n = new n), t.prototype = r = n
                }
                r.constructor != t && ("function" != typeof t && console.error("unknown Class:" + t), r.constructor = t)
            }
            var h = {},
                f = h.ELEMENT_NODE = 1,
                d = h.ATTRIBUTE_NODE = 2,
                p = h.TEXT_NODE = 3,
                m = h.CDATA_SECTION_NODE = 4,
                g = h.ENTITY_REFERENCE_NODE = 5,
                y = h.ENTITY_NODE = 6,
                v = h.PROCESSING_INSTRUCTION_NODE = 7,
                b = h.COMMENT_NODE = 8,
                w = h.DOCUMENT_NODE = 9,
                E = h.DOCUMENT_TYPE_NODE = 10,
                T = h.DOCUMENT_FRAGMENT_NODE = 11,
                D = h.NOTATION_NODE = 12,
                x = {},
                S = {};
            x.INDEX_SIZE_ERR = (S[1] = "Index size error", 1), x.DOMSTRING_SIZE_ERR = (S[2] = "DOMString size error", 2);
            var A = x.HIERARCHY_REQUEST_ERR = (S[3] = "Hierarchy request error", 3);
            x.WRONG_DOCUMENT_ERR = (S[4] = "Wrong document", 4), x.INVALID_CHARACTER_ERR = (S[5] = "Invalid character", 5), x.NO_DATA_ALLOWED_ERR = (S[6] = "No data allowed", 6), x.NO_MODIFICATION_ALLOWED_ERR = (S[7] = "No modification allowed", 7);
            var P = x.NOT_FOUND_ERR = (S[8] = "Not found", 8);
            x.NOT_SUPPORTED_ERR = (S[9] = "Not supported", 9);
            var R = x.INUSE_ATTRIBUTE_ERR = (S[10] = "Attribute in use", 10);

            function C(t, e) {
                if (e instanceof Error) var r = e;
                else r = this, Error.call(this, S[t]), this.message = S[t], Error.captureStackTrace && Error.captureStackTrace(this, C);
                return r.code = t, e && (this.message = this.message + ": " + e), r
            }

            function N() {}

            function O(t, e) {
                this._node = t, this._refresh = e, I(this)
            }

            function I(t) {
                var e = t._node._inc || t._node.ownerDocument._inc;
                if (t._inc !== e) {
                    var r = t._refresh(t._node);
                    if (tm(t, "length", r.length), !t.$$length || r.length < t.$$length)
                        for (var n = r.length;
                            (n in t); n++) Object.prototype.hasOwnProperty.call(t, n) && delete t[n];
                    l(r, t), t._inc = e
                }
            }

            function L() {}

            function M(t, e) {
                for (var r = t.length; r--;)
                    if (t[r] === e) return r
            }

            function k(t, e, r, n) {
                if (n ? e[M(e, n)] = r : e[e.length++] = r, t) {
                    r.ownerElement = t;
                    var i = t.ownerDocument;
                    i && (n && F(i, t, n), i && i._inc++, r.namespaceURI === s.XMLNS && (t._nsMap[r.prefix ? r.localName : ""] = r.value))
                }
            }

            function U(t, e, r) {
                var n = M(e, r);
                if (n >= 0) {
                    for (var i = e.length - 1; n < i;) e[n] = e[++n];
                    if (e.length = i, t) {
                        var s = t.ownerDocument;
                        s && (F(s, t, r), r.ownerElement = null)
                    }
                } else throw new C(P, Error(t.tagName + "@" + r))
            }

            function B() {}

            function V() {}

            function j(t) {
                return "<" == t && "&lt;" || ">" == t && "&gt;" || "&" == t && "&amp;" || '"' == t && "&quot;" || "&#" + t.charCodeAt() + ";"
            }

            function _(t, e) {
                if (e(t)) return !0;
                if (t = t.firstChild)
                    do
                        if (_(t, e)) return !0; while (t = t.nextSibling)
            }

            function q() {
                this.ownerDocument = this
            }

            function F(t, e, r, n) {
                t && t._inc++, r.namespaceURI === s.XMLNS && delete e._nsMap[r.prefix ? r.localName : ""]
            }

            function G(t, e, r) {
                if (t && t._inc) {
                    t._inc++;
                    var n = e.childNodes;
                    if (r) n[n.length++] = r;
                    else {
                        for (var i = e.firstChild, s = 0; i;) n[s++] = i, i = i.nextSibling;
                        n.length = s, delete n[n.length]
                    }
                }
            }

            function X(t, e) {
                var r = e.previousSibling,
                    n = e.nextSibling;
                return r ? r.nextSibling = n : t.firstChild = n, n ? n.previousSibling = r : t.lastChild = r, e.parentNode = null, e.previousSibling = null, e.nextSibling = null, G(t.ownerDocument, t), e
            }

            function z(t) {
                return t && t.nodeType === V.DOCUMENT_TYPE_NODE
            }

            function H(t) {
                return t && t.nodeType === V.ELEMENT_NODE
            }

            function $(t) {
                return t && t.nodeType === V.TEXT_NODE
            }

            function W(t, e) {
                var r = t.childNodes || [];
                if (i(r, H) || z(e)) return !1;
                var n = i(r, z);
                return !(e && n && r.indexOf(n) > r.indexOf(e))
            }

            function K(t, e) {
                var r = t.childNodes || [];
                if (i(r, function(t) {
                        return H(t) && t !== e
                    })) return !1;
                var n = i(r, z);
                return !(e && n && r.indexOf(n) > r.indexOf(e))
            }

            function Y(t, e, r) {
                var n = t.childNodes || [],
                    s = e.childNodes || [];
                if (e.nodeType === V.DOCUMENT_FRAGMENT_NODE) {
                    var o = s.filter(H);
                    if (o.length > 1 || i(s, $)) throw new C(A, "More than one element or text in fragment");
                    if (1 === o.length && !K(t, r)) throw new C(A, "Element in fragment can not be inserted before doctype")
                }
                if (H(e) && !K(t, r)) throw new C(A, "Only one element can be added and only after doctype");
                if (z(e)) {
                    if (i(n, function(t) {
                            return z(t) && t !== r
                        })) throw new C(A, "Only one doctype is allowed");
                    var a = i(n, H);
                    if (r && n.indexOf(a) < n.indexOf(r)) throw new C(A, "Doctype can only be inserted before an element")
                }
            }

            function Z(t, e, r, n) {
                ! function(t, e, r) {
                    if (!(t && (t.nodeType === V.DOCUMENT_NODE || t.nodeType === V.DOCUMENT_FRAGMENT_NODE || t.nodeType === V.ELEMENT_NODE))) throw new C(A, "Unexpected parent node type " + t.nodeType);
                    if (r && r.parentNode !== t) throw new C(P, "child not in parent");
                    if (!(e && (H(e) || $(e) || z(e) || e.nodeType === V.DOCUMENT_FRAGMENT_NODE || e.nodeType === V.COMMENT_NODE || e.nodeType === V.PROCESSING_INSTRUCTION_NODE)) || z(e) && t.nodeType !== V.DOCUMENT_NODE) throw new C(A, "Unexpected node type " + e.nodeType + " for parent node type " + t.nodeType)
                }(t, e, r), t.nodeType === V.DOCUMENT_NODE && (n || function(t, e, r) {
                    var n = t.childNodes || [],
                        s = e.childNodes || [];
                    if (e.nodeType === V.DOCUMENT_FRAGMENT_NODE) {
                        var o = s.filter(H);
                        if (o.length > 1 || i(s, $)) throw new C(A, "More than one element or text in fragment");
                        if (1 === o.length && !W(t, r)) throw new C(A, "Element in fragment can not be inserted before doctype")
                    }
                    if (H(e) && !W(t, r)) throw new C(A, "Only one element can be added and only after doctype");
                    if (z(e)) {
                        if (i(n, z)) throw new C(A, "Only one doctype is allowed");
                        var a = i(n, H);
                        if (r && n.indexOf(a) < n.indexOf(r)) throw new C(A, "Doctype can only be inserted before an element");
                        if (!r && a) throw new C(A, "Doctype can not be appended since element is present")
                    }
                })(t, e, r);
                var s = e.parentNode;
                if (s && s.removeChild(e), e.nodeType === T) {
                    var o = e.firstChild;
                    if (null == o) return e;
                    var a = e.lastChild
                } else o = a = e;
                var u = r ? r.previousSibling : t.lastChild;
                o.previousSibling = u, a.nextSibling = r, u ? u.nextSibling = o : t.firstChild = o, null == r ? t.lastChild = a : r.previousSibling = a;
                do o.parentNode = t; while (o !== a && (o = o.nextSibling));
                return G(t.ownerDocument || t, t), e.nodeType == T && (e.firstChild = e.lastChild = null), e
            }

            function J() {
                this._nsMap = {}
            }

            function Q() {}

            function tt() {}

            function te() {}

            function tr() {}

            function tn() {}

            function ti() {}

            function ts() {}

            function to() {}

            function ta() {}

            function tu() {}

            function tl() {}

            function tc() {}

            function th(t, e) {
                var r = [],
                    n = 9 == this.nodeType && this.documentElement || this,
                    i = n.prefix,
                    s = n.namespaceURI;
                if (s && null == i) {
                    var i = n.lookupPrefix(s);
                    if (null == i) var o = [{
                        namespace: s,
                        prefix: null
                    }]
                }
                return tp(this, r, t, e, o), r.join("")
            }

            function tf(t, e, r) {
                var n = t.prefix || "",
                    i = t.namespaceURI;
                if (!i || "xml" === n && i === s.XML || i === s.XMLNS) return !1;
                for (var o = r.length; o--;) {
                    var a = r[o];
                    if (a.prefix === n) return a.namespace !== i
                }
                return !0
            }

            function td(t, e, r) {
                t.push(" ", e, '="', r.replace(/[<>&"\t\n\r]/g, j), '"')
            }

            function tp(t, e, r, n, i) {
                if (i || (i = []), n) {
                    if (!(t = n(t))) return;
                    if ("string" == typeof t) {
                        e.push(t);
                        return
                    }
                }
                switch (t.nodeType) {
                    case f:
                        var o, a = t.attributes,
                            u = a.length,
                            l = t.firstChild,
                            c = t.tagName;
                        r = s.isHTML(t.namespaceURI) || r;
                        var h = c;
                        if (!r && !t.prefix && t.namespaceURI) {
                            for (var y = 0; y < a.length; y++)
                                if ("xmlns" === a.item(y).name) {
                                    o = a.item(y).value;
                                    break
                                }
                            if (!o)
                                for (var D = i.length - 1; D >= 0; D--) {
                                    var x = i[D];
                                    if ("" === x.prefix && x.namespace === t.namespaceURI) {
                                        o = x.namespace;
                                        break
                                    }
                                }
                            if (o !== t.namespaceURI)
                                for (var D = i.length - 1; D >= 0; D--) {
                                    var x = i[D];
                                    if (x.namespace === t.namespaceURI) {
                                        x.prefix && (h = x.prefix + ":" + c);
                                        break
                                    }
                                }
                        }
                        e.push("<", h);
                        for (var S = 0; S < u; S++) {
                            var A = a.item(S);
                            "xmlns" == A.prefix ? i.push({
                                prefix: A.localName,
                                namespace: A.value
                            }) : "xmlns" == A.nodeName && i.push({
                                prefix: "",
                                namespace: A.value
                            })
                        }
                        for (var S = 0; S < u; S++) {
                            var A = a.item(S);
                            if (tf(A, r, i)) {
                                var P = A.prefix || "",
                                    R = A.namespaceURI;
                                td(e, P ? "xmlns:" + P : "xmlns", R), i.push({
                                    prefix: P,
                                    namespace: R
                                })
                            }
                            tp(A, e, r, n, i)
                        }
                        if (c === h && tf(t, r, i)) {
                            var P = t.prefix || "",
                                R = t.namespaceURI;
                            td(e, P ? "xmlns:" + P : "xmlns", R), i.push({
                                prefix: P,
                                namespace: R
                            })
                        }
                        if (l || r && !/^(?:meta|link|img|br|hr|input)$/i.test(c)) {
                            if (e.push(">"), r && /^script$/i.test(c))
                                for (; l;) l.data ? e.push(l.data) : tp(l, e, r, n, i.slice()), l = l.nextSibling;
                            else
                                for (; l;) tp(l, e, r, n, i.slice()), l = l.nextSibling;
                            e.push("</", h, ">")
                        } else e.push("/>");
                        return;
                    case w:
                    case T:
                        for (var l = t.firstChild; l;) tp(l, e, r, n, i.slice()), l = l.nextSibling;
                        return;
                    case d:
                        return td(e, t.name, t.value);
                    case p:
                        return e.push(t.data.replace(/[<&>]/g, j));
                    case m:
                        return e.push("<![CDATA[", t.data, "]]>");
                    case b:
                        return e.push("<!--", t.data, "-->");
                    case E:
                        var C = t.publicId,
                            N = t.systemId;
                        if (e.push("<!DOCTYPE ", t.name), C) e.push(" PUBLIC ", C), N && "." != N && e.push(" ", N), e.push(">");
                        else if (N && "." != N) e.push(" SYSTEM ", N, ">");
                        else {
                            var O = t.internalSubset;
                            O && e.push(" [", O, "]"), e.push(">")
                        }
                        return;
                    case v:
                        return e.push("<?", t.target, " ", t.data, "?>");
                    case g:
                        return e.push("&", t.nodeName, ";");
                    default:
                        e.push("??", t.nodeName)
                }
            }

            function tm(t, e, r) {
                t[e] = r
            }
            x.INVALID_STATE_ERR = (S[11] = "Invalid state", 11), x.SYNTAX_ERR = (S[12] = "Syntax error", 12), x.INVALID_MODIFICATION_ERR = (S[13] = "Invalid modification", 13), x.NAMESPACE_ERR = (S[14] = "Invalid namespace", 14), x.INVALID_ACCESS_ERR = (S[15] = "Invalid access", 15), C.prototype = Error.prototype, l(x, C), N.prototype = {
                length: 0,
                item: function(t) {
                    return t >= 0 && t < this.length ? this[t] : null
                },
                toString: function(t, e) {
                    for (var r = [], n = 0; n < this.length; n++) tp(this[n], r, t, e);
                    return r.join("")
                },
                filter: function(t) {
                    return Array.prototype.filter.call(this, t)
                },
                indexOf: function(t) {
                    return Array.prototype.indexOf.call(this, t)
                }
            }, O.prototype.item = function(t) {
                return I(this), this[t] || null
            }, c(O, N), L.prototype = {
                length: 0,
                item: N.prototype.item,
                getNamedItem: function(t) {
                    for (var e = this.length; e--;) {
                        var r = this[e];
                        if (r.nodeName == t) return r
                    }
                },
                setNamedItem: function(t) {
                    var e = t.ownerElement;
                    if (e && e != this._ownerElement) throw new C(R);
                    var r = this.getNamedItem(t.nodeName);
                    return k(this._ownerElement, this, t, r), r
                },
                setNamedItemNS: function(t) {
                    var e, r = t.ownerElement;
                    if (r && r != this._ownerElement) throw new C(R);
                    return e = this.getNamedItemNS(t.namespaceURI, t.localName), k(this._ownerElement, this, t, e), e
                },
                removeNamedItem: function(t) {
                    var e = this.getNamedItem(t);
                    return U(this._ownerElement, this, e), e
                },
                removeNamedItemNS: function(t, e) {
                    var r = this.getNamedItemNS(t, e);
                    return U(this._ownerElement, this, r), r
                },
                getNamedItemNS: function(t, e) {
                    for (var r = this.length; r--;) {
                        var n = this[r];
                        if (n.localName == e && n.namespaceURI == t) return n
                    }
                    return null
                }
            }, B.prototype = {
                hasFeature: function(t, e) {
                    return !0
                },
                createDocument: function(t, e, r) {
                    var n = new q;
                    if (n.implementation = this, n.childNodes = new N, n.doctype = r || null, r && n.appendChild(r), e) {
                        var i = n.createElementNS(t, e);
                        n.appendChild(i)
                    }
                    return n
                },
                createDocumentType: function(t, e, r) {
                    var n = new ti;
                    return n.name = t, n.nodeName = t, n.publicId = e || "", n.systemId = r || "", n
                }
            }, V.prototype = {
                firstChild: null,
                lastChild: null,
                previousSibling: null,
                nextSibling: null,
                attributes: null,
                parentNode: null,
                childNodes: null,
                ownerDocument: null,
                nodeValue: null,
                namespaceURI: null,
                prefix: null,
                localName: null,
                insertBefore: function(t, e) {
                    return Z(this, t, e)
                },
                replaceChild: function(t, e) {
                    Z(this, t, e, Y), e && this.removeChild(e)
                },
                removeChild: function(t) {
                    return X(this, t)
                },
                appendChild: function(t) {
                    return this.insertBefore(t, null)
                },
                hasChildNodes: function() {
                    return null != this.firstChild
                },
                cloneNode: function(t) {
                    return function t(e, r, n) {
                        var i = new r.constructor;
                        for (var s in r)
                            if (Object.prototype.hasOwnProperty.call(r, s)) {
                                var o = r[s];
                                "object" != typeof o && o != i[s] && (i[s] = o)
                            }
                        switch (r.childNodes && (i.childNodes = new N), i.ownerDocument = e, i.nodeType) {
                            case f:
                                var a = r.attributes,
                                    u = i.attributes = new L,
                                    l = a.length;
                                u._ownerElement = i;
                                for (var c = 0; c < l; c++) i.setAttributeNode(t(e, a.item(c), !0));
                                break;
                            case d:
                                n = !0
                        }
                        if (n)
                            for (var h = r.firstChild; h;) i.appendChild(t(e, h, n)), h = h.nextSibling;
                        return i
                    }(this.ownerDocument || this, this, t)
                },
                normalize: function() {
                    for (var t = this.firstChild; t;) {
                        var e = t.nextSibling;
                        e && e.nodeType == p && t.nodeType == p ? (this.removeChild(e), t.appendData(e.data)) : (t.normalize(), t = e)
                    }
                },
                isSupported: function(t, e) {
                    return this.ownerDocument.implementation.hasFeature(t, e)
                },
                hasAttributes: function() {
                    return this.attributes.length > 0
                },
                lookupPrefix: function(t) {
                    for (var e = this; e;) {
                        var r = e._nsMap;
                        if (r) {
                            for (var n in r)
                                if (Object.prototype.hasOwnProperty.call(r, n) && r[n] === t) return n
                        }
                        e = e.nodeType == d ? e.ownerDocument : e.parentNode
                    }
                    return null
                },
                lookupNamespaceURI: function(t) {
                    for (var e = this; e;) {
                        var r = e._nsMap;
                        if (r && Object.prototype.hasOwnProperty.call(r, t)) return r[t];
                        e = e.nodeType == d ? e.ownerDocument : e.parentNode
                    }
                    return null
                },
                isDefaultNamespace: function(t) {
                    return null == this.lookupPrefix(t)
                }
            }, l(h, V), l(h, V.prototype), q.prototype = {
                nodeName: "#document",
                nodeType: w,
                doctype: null,
                documentElement: null,
                _inc: 1,
                insertBefore: function(t, e) {
                    if (t.nodeType == T) {
                        for (var r = t.firstChild; r;) {
                            var n = r.nextSibling;
                            this.insertBefore(r, e), r = n
                        }
                        return t
                    }
                    return Z(this, t, e), t.ownerDocument = this, null === this.documentElement && t.nodeType === f && (this.documentElement = t), t
                },
                removeChild: function(t) {
                    return this.documentElement == t && (this.documentElement = null), X(this, t)
                },
                replaceChild: function(t, e) {
                    Z(this, t, e, Y), t.ownerDocument = this, e && this.removeChild(e), H(t) && (this.documentElement = t)
                },
                importNode: function(t, e) {
                    return function t(e, r, n) {
                        var i;
                        switch (r.nodeType) {
                            case f:
                                (i = r.cloneNode(!1)).ownerDocument = e;
                            case T:
                                break;
                            case d:
                                n = !0
                        }
                        if (i || (i = r.cloneNode(!1)), i.ownerDocument = e, i.parentNode = null, n)
                            for (var s = r.firstChild; s;) i.appendChild(t(e, s, n)), s = s.nextSibling;
                        return i
                    }(this, t, e)
                },
                getElementById: function(t) {
                    var e = null;
                    return _(this.documentElement, function(r) {
                        if (r.nodeType == f && r.getAttribute("id") == t) return e = r, !0
                    }), e
                },
                getElementsByClassName: function(t) {
                    var e = u(t);
                    return new O(this, function(r) {
                        var n = [];
                        return e.length > 0 && _(r.documentElement, function(i) {
                            if (i !== r && i.nodeType === f) {
                                var s = i.getAttribute("class");
                                if (s) {
                                    var o = t === s;
                                    if (!o) {
                                        var a = u(s);
                                        o = e.every(function(t) {
                                            return a && -1 !== a.indexOf(t)
                                        })
                                    }
                                    o && n.push(i)
                                }
                            }
                        }), n
                    })
                },
                createElement: function(t) {
                    var e = new J;
                    return e.ownerDocument = this, e.nodeName = t, e.tagName = t, e.localName = t, e.childNodes = new N, (e.attributes = new L)._ownerElement = e, e
                },
                createDocumentFragment: function() {
                    var t = new tu;
                    return t.ownerDocument = this, t.childNodes = new N, t
                },
                createTextNode: function(t) {
                    var e = new te;
                    return e.ownerDocument = this, e.appendData(t), e
                },
                createComment: function(t) {
                    var e = new tr;
                    return e.ownerDocument = this, e.appendData(t), e
                },
                createCDATASection: function(t) {
                    var e = new tn;
                    return e.ownerDocument = this, e.appendData(t), e
                },
                createProcessingInstruction: function(t, e) {
                    var r = new tl;
                    return r.ownerDocument = this, r.tagName = r.nodeName = r.target = t, r.nodeValue = r.data = e, r
                },
                createAttribute: function(t) {
                    var e = new Q;
                    return e.ownerDocument = this, e.name = t, e.nodeName = t, e.localName = t, e.specified = !0, e
                },
                createEntityReference: function(t) {
                    var e = new ta;
                    return e.ownerDocument = this, e.nodeName = t, e
                },
                createElementNS: function(t, e) {
                    var r = new J,
                        n = e.split(":"),
                        i = r.attributes = new L;
                    return r.childNodes = new N, r.ownerDocument = this, r.nodeName = e, r.tagName = e, r.namespaceURI = t, 2 == n.length ? (r.prefix = n[0], r.localName = n[1]) : r.localName = e, i._ownerElement = r, r
                },
                createAttributeNS: function(t, e) {
                    var r = new Q,
                        n = e.split(":");
                    return r.ownerDocument = this, r.nodeName = e, r.name = e, r.namespaceURI = t, r.specified = !0, 2 == n.length ? (r.prefix = n[0], r.localName = n[1]) : r.localName = e, r
                }
            }, c(q, V), J.prototype = {
                nodeType: f,
                hasAttribute: function(t) {
                    return null != this.getAttributeNode(t)
                },
                getAttribute: function(t) {
                    var e = this.getAttributeNode(t);
                    return e && e.value || ""
                },
                getAttributeNode: function(t) {
                    return this.attributes.getNamedItem(t)
                },
                setAttribute: function(t, e) {
                    var r = this.ownerDocument.createAttribute(t);
                    r.value = r.nodeValue = "" + e, this.setAttributeNode(r)
                },
                removeAttribute: function(t) {
                    var e = this.getAttributeNode(t);
                    e && this.removeAttributeNode(e)
                },
                appendChild: function(t) {
                    return t.nodeType === T ? this.insertBefore(t, null) : (t.parentNode && t.parentNode.removeChild(t), t.parentNode = this, t.previousSibling = this.lastChild, t.nextSibling = null, t.previousSibling ? t.previousSibling.nextSibling = t : this.firstChild = t, this.lastChild = t, G(this.ownerDocument, this, t), t)
                },
                setAttributeNode: function(t) {
                    return this.attributes.setNamedItem(t)
                },
                setAttributeNodeNS: function(t) {
                    return this.attributes.setNamedItemNS(t)
                },
                removeAttributeNode: function(t) {
                    return this.attributes.removeNamedItem(t.nodeName)
                },
                removeAttributeNS: function(t, e) {
                    var r = this.getAttributeNodeNS(t, e);
                    r && this.removeAttributeNode(r)
                },
                hasAttributeNS: function(t, e) {
                    return null != this.getAttributeNodeNS(t, e)
                },
                getAttributeNS: function(t, e) {
                    var r = this.getAttributeNodeNS(t, e);
                    return r && r.value || ""
                },
                setAttributeNS: function(t, e, r) {
                    var n = this.ownerDocument.createAttributeNS(t, e);
                    n.value = n.nodeValue = "" + r, this.setAttributeNode(n)
                },
                getAttributeNodeNS: function(t, e) {
                    return this.attributes.getNamedItemNS(t, e)
                },
                getElementsByTagName: function(t) {
                    return new O(this, function(e) {
                        var r = [];
                        return _(e, function(n) {
                            n !== e && n.nodeType == f && ("*" === t || n.tagName == t) && r.push(n)
                        }), r
                    })
                },
                getElementsByTagNameNS: function(t, e) {
                    return new O(this, function(r) {
                        var n = [];
                        return _(r, function(i) {
                            i !== r && i.nodeType === f && ("*" === t || i.namespaceURI === t) && ("*" === e || i.localName == e) && n.push(i)
                        }), n
                    })
                }
            }, q.prototype.getElementsByTagName = J.prototype.getElementsByTagName, q.prototype.getElementsByTagNameNS = J.prototype.getElementsByTagNameNS, c(J, V), Q.prototype.nodeType = d, c(Q, V), tt.prototype = {
                data: "",
                substringData: function(t, e) {
                    return this.data.substring(t, t + e)
                },
                appendData: function(t) {
                    t = this.data + t, this.nodeValue = this.data = t, this.length = t.length
                },
                insertData: function(t, e) {
                    this.replaceData(t, 0, e)
                },
                appendChild: function(t) {
                    throw Error(S[A])
                },
                deleteData: function(t, e) {
                    this.replaceData(t, e, "")
                },
                replaceData: function(t, e, r) {
                    r = this.data.substring(0, t) + r + this.data.substring(t + e), this.nodeValue = this.data = r, this.length = r.length
                }
            }, c(tt, V), te.prototype = {
                nodeName: "#text",
                nodeType: p,
                splitText: function(t) {
                    var e = this.data,
                        r = e.substring(t);
                    e = e.substring(0, t), this.data = this.nodeValue = e, this.length = e.length;
                    var n = this.ownerDocument.createTextNode(r);
                    return this.parentNode && this.parentNode.insertBefore(n, this.nextSibling), n
                }
            }, c(te, tt), tr.prototype = {
                nodeName: "#comment",
                nodeType: b
            }, c(tr, tt), tn.prototype = {
                nodeName: "#cdata-section",
                nodeType: m
            }, c(tn, tt), ti.prototype.nodeType = E, c(ti, V), ts.prototype.nodeType = D, c(ts, V), to.prototype.nodeType = y, c(to, V), ta.prototype.nodeType = g, c(ta, V), tu.prototype.nodeName = "#document-fragment", tu.prototype.nodeType = T, c(tu, V), tl.prototype.nodeType = v, c(tl, V), tc.prototype.serializeToString = function(t, e, r) {
                return th.call(t, e, r)
            }, V.prototype.toString = th;
            try {
                Object.defineProperty && (Object.defineProperty(O.prototype, "length", {
                    get: function() {
                        return I(this), this.$$length
                    }
                }), Object.defineProperty(V.prototype, "textContent", {
                    get: function() {
                        return function t(e) {
                            switch (e.nodeType) {
                                case f:
                                case T:
                                    var r = [];
                                    for (e = e.firstChild; e;) 7 !== e.nodeType && 8 !== e.nodeType && r.push(t(e)), e = e.nextSibling;
                                    return r.join("");
                                default:
                                    return e.nodeValue
                            }
                        }(this)
                    },
                    set: function(t) {
                        switch (this.nodeType) {
                            case f:
                            case T:
                                for (; this.firstChild;) this.removeChild(this.firstChild);
                                (t || String(t)) && this.appendChild(this.ownerDocument.createTextNode(t));
                                break;
                            default:
                                this.data = t, this.value = t, this.nodeValue = t
                        }
                    }
                }), tm = function(t, e, r) {
                    t["$$" + e] = r
                })
            } catch (t) {}
            e.DocumentType = ti, e.DOMException = C, e.DOMImplementation = B, e.Element = J, e.Node = V, e.NodeList = N, e.XMLSerializer = tc
        },
        8150: function(t, e, r) {
            "use strict";
            var n = r(5716).freeze;
            e.XML_ENTITIES = n({
                amp: "&",
                apos: "'",
                gt: ">",
                lt: "<",
                quot: '"'
            }), e.HTML_ENTITIES = n({
                Aacute: "\xc1",
                aacute: "\xe1",
                Abreve: "Ă",
                abreve: "ă",
                ac: "∾",
                acd: "∿",
                acE: "∾̳",
                Acirc: "\xc2",
                acirc: "\xe2",
                acute: "\xb4",
                Acy: "А",
                acy: "а",
                AElig: "\xc6",
                aelig: "\xe6",
                af: "⁡",
                Afr: "\uD835\uDD04",
                afr: "\uD835\uDD1E",
                Agrave: "\xc0",
                agrave: "\xe0",
                alefsym: "ℵ",
                aleph: "ℵ",
                Alpha: "Α",
                alpha: "α",
                Amacr: "Ā",
                amacr: "ā",
                amalg: "⨿",
                AMP: "&",
                amp: "&",
                And: "⩓",
                and: "∧",
                andand: "⩕",
                andd: "⩜",
                andslope: "⩘",
                andv: "⩚",
                ang: "∠",
                ange: "⦤",
                angle: "∠",
                angmsd: "∡",
                angmsdaa: "⦨",
                angmsdab: "⦩",
                angmsdac: "⦪",
                angmsdad: "⦫",
                angmsdae: "⦬",
                angmsdaf: "⦭",
                angmsdag: "⦮",
                angmsdah: "⦯",
                angrt: "∟",
                angrtvb: "⊾",
                angrtvbd: "⦝",
                angsph: "∢",
                angst: "\xc5",
                angzarr: "⍼",
                Aogon: "Ą",
                aogon: "ą",
                Aopf: "\uD835\uDD38",
                aopf: "\uD835\uDD52",
                ap: "≈",
                apacir: "⩯",
                apE: "⩰",
                ape: "≊",
                apid: "≋",
                apos: "'",
                ApplyFunction: "⁡",
                approx: "≈",
                approxeq: "≊",
                Aring: "\xc5",
                aring: "\xe5",
                Ascr: "\uD835\uDC9C",
                ascr: "\uD835\uDCB6",
                Assign: "≔",
                ast: "*",
                asymp: "≈",
                asympeq: "≍",
                Atilde: "\xc3",
                atilde: "\xe3",
                Auml: "\xc4",
                auml: "\xe4",
                awconint: "∳",
                awint: "⨑",
                backcong: "≌",
                backepsilon: "϶",
                backprime: "‵",
                backsim: "∽",
                backsimeq: "⋍",
                Backslash: "∖",
                Barv: "⫧",
                barvee: "⊽",
                Barwed: "⌆",
                barwed: "⌅",
                barwedge: "⌅",
                bbrk: "⎵",
                bbrktbrk: "⎶",
                bcong: "≌",
                Bcy: "Б",
                bcy: "б",
                bdquo: "„",
                becaus: "∵",
                Because: "∵",
                because: "∵",
                bemptyv: "⦰",
                bepsi: "϶",
                bernou: "ℬ",
                Bernoullis: "ℬ",
                Beta: "Β",
                beta: "β",
                beth: "ℶ",
                between: "≬",
                Bfr: "\uD835\uDD05",
                bfr: "\uD835\uDD1F",
                bigcap: "⋂",
                bigcirc: "◯",
                bigcup: "⋃",
                bigodot: "⨀",
                bigoplus: "⨁",
                bigotimes: "⨂",
                bigsqcup: "⨆",
                bigstar: "★",
                bigtriangledown: "▽",
                bigtriangleup: "△",
                biguplus: "⨄",
                bigvee: "⋁",
                bigwedge: "⋀",
                bkarow: "⤍",
                blacklozenge: "⧫",
                blacksquare: "▪",
                blacktriangle: "▴",
                blacktriangledown: "▾",
                blacktriangleleft: "◂",
                blacktriangleright: "▸",
                blank: "␣",
                blk12: "▒",
                blk14: "░",
                blk34: "▓",
                block: "█",
                bne: "=⃥",
                bnequiv: "≡⃥",
                bNot: "⫭",
                bnot: "⌐",
                Bopf: "\uD835\uDD39",
                bopf: "\uD835\uDD53",
                bot: "⊥",
                bottom: "⊥",
                bowtie: "⋈",
                boxbox: "⧉",
                boxDL: "╗",
                boxDl: "╖",
                boxdL: "╕",
                boxdl: "┐",
                boxDR: "╔",
                boxDr: "╓",
                boxdR: "╒",
                boxdr: "┌",
                boxH: "═",
                boxh: "─",
                boxHD: "╦",
                boxHd: "╤",
                boxhD: "╥",
                boxhd: "┬",
                boxHU: "╩",
                boxHu: "╧",
                boxhU: "╨",
                boxhu: "┴",
                boxminus: "⊟",
                boxplus: "⊞",
                boxtimes: "⊠",
                boxUL: "╝",
                boxUl: "╜",
                boxuL: "╛",
                boxul: "┘",
                boxUR: "╚",
                boxUr: "╙",
                boxuR: "╘",
                boxur: "└",
                boxV: "║",
                boxv: "│",
                boxVH: "╬",
                boxVh: "╫",
                boxvH: "╪",
                boxvh: "┼",
                boxVL: "╣",
                boxVl: "╢",
                boxvL: "╡",
                boxvl: "┤",
                boxVR: "╠",
                boxVr: "╟",
                boxvR: "╞",
                boxvr: "├",
                bprime: "‵",
                Breve: "˘",
                breve: "˘",
                brvbar: "\xa6",
                Bscr: "ℬ",
                bscr: "\uD835\uDCB7",
                bsemi: "⁏",
                bsim: "∽",
                bsime: "⋍",
                bsol: "\\",
                bsolb: "⧅",
                bsolhsub: "⟈",
                bull: "•",
                bullet: "•",
                bump: "≎",
                bumpE: "⪮",
                bumpe: "≏",
                Bumpeq: "≎",
                bumpeq: "≏",
                Cacute: "Ć",
                cacute: "ć",
                Cap: "⋒",
                cap: "∩",
                capand: "⩄",
                capbrcup: "⩉",
                capcap: "⩋",
                capcup: "⩇",
                capdot: "⩀",
                CapitalDifferentialD: "ⅅ",
                caps: "∩︀",
                caret: "⁁",
                caron: "ˇ",
                Cayleys: "ℭ",
                ccaps: "⩍",
                Ccaron: "Č",
                ccaron: "č",
                Ccedil: "\xc7",
                ccedil: "\xe7",
                Ccirc: "Ĉ",
                ccirc: "ĉ",
                Cconint: "∰",
                ccups: "⩌",
                ccupssm: "⩐",
                Cdot: "Ċ",
                cdot: "ċ",
                cedil: "\xb8",
                Cedilla: "\xb8",
                cemptyv: "⦲",
                cent: "\xa2",
                CenterDot: "\xb7",
                centerdot: "\xb7",
                Cfr: "ℭ",
                cfr: "\uD835\uDD20",
                CHcy: "Ч",
                chcy: "ч",
                check: "✓",
                checkmark: "✓",
                Chi: "Χ",
                chi: "χ",
                cir: "○",
                circ: "ˆ",
                circeq: "≗",
                circlearrowleft: "↺",
                circlearrowright: "↻",
                circledast: "⊛",
                circledcirc: "⊚",
                circleddash: "⊝",
                CircleDot: "⊙",
                circledR: "\xae",
                circledS: "Ⓢ",
                CircleMinus: "⊖",
                CirclePlus: "⊕",
                CircleTimes: "⊗",
                cirE: "⧃",
                cire: "≗",
                cirfnint: "⨐",
                cirmid: "⫯",
                cirscir: "⧂",
                ClockwiseContourIntegral: "∲",
                CloseCurlyDoubleQuote: "”",
                CloseCurlyQuote: "’",
                clubs: "♣",
                clubsuit: "♣",
                Colon: "∷",
                colon: ":",
                Colone: "⩴",
                colone: "≔",
                coloneq: "≔",
                comma: ",",
                commat: "@",
                comp: "∁",
                compfn: "∘",
                complement: "∁",
                complexes: "ℂ",
                cong: "≅",
                congdot: "⩭",
                Congruent: "≡",
                Conint: "∯",
                conint: "∮",
                ContourIntegral: "∮",
                Copf: "ℂ",
                copf: "\uD835\uDD54",
                coprod: "∐",
                Coproduct: "∐",
                COPY: "\xa9",
                copy: "\xa9",
                copysr: "℗",
                CounterClockwiseContourIntegral: "∳",
                crarr: "↵",
                Cross: "⨯",
                cross: "✗",
                Cscr: "\uD835\uDC9E",
                cscr: "\uD835\uDCB8",
                csub: "⫏",
                csube: "⫑",
                csup: "⫐",
                csupe: "⫒",
                ctdot: "⋯",
                cudarrl: "⤸",
                cudarrr: "⤵",
                cuepr: "⋞",
                cuesc: "⋟",
                cularr: "↶",
                cularrp: "⤽",
                Cup: "⋓",
                cup: "∪",
                cupbrcap: "⩈",
                CupCap: "≍",
                cupcap: "⩆",
                cupcup: "⩊",
                cupdot: "⊍",
                cupor: "⩅",
                cups: "∪︀",
                curarr: "↷",
                curarrm: "⤼",
                curlyeqprec: "⋞",
                curlyeqsucc: "⋟",
                curlyvee: "⋎",
                curlywedge: "⋏",
                curren: "\xa4",
                curvearrowleft: "↶",
                curvearrowright: "↷",
                cuvee: "⋎",
                cuwed: "⋏",
                cwconint: "∲",
                cwint: "∱",
                cylcty: "⌭",
                Dagger: "‡",
                dagger: "†",
                daleth: "ℸ",
                Darr: "↡",
                dArr: "⇓",
                darr: "↓",
                dash: "‐",
                Dashv: "⫤",
                dashv: "⊣",
                dbkarow: "⤏",
                dblac: "˝",
                Dcaron: "Ď",
                dcaron: "ď",
                Dcy: "Д",
                dcy: "д",
                DD: "ⅅ",
                dd: "ⅆ",
                ddagger: "‡",
                ddarr: "⇊",
                DDotrahd: "⤑",
                ddotseq: "⩷",
                deg: "\xb0",
                Del: "∇",
                Delta: "Δ",
                delta: "δ",
                demptyv: "⦱",
                dfisht: "⥿",
                Dfr: "\uD835\uDD07",
                dfr: "\uD835\uDD21",
                dHar: "⥥",
                dharl: "⇃",
                dharr: "⇂",
                DiacriticalAcute: "\xb4",
                DiacriticalDot: "˙",
                DiacriticalDoubleAcute: "˝",
                DiacriticalGrave: "`",
                DiacriticalTilde: "˜",
                diam: "⋄",
                Diamond: "⋄",
                diamond: "⋄",
                diamondsuit: "♦",
                diams: "♦",
                die: "\xa8",
                DifferentialD: "ⅆ",
                digamma: "ϝ",
                disin: "⋲",
                div: "\xf7",
                divide: "\xf7",
                divideontimes: "⋇",
                divonx: "⋇",
                DJcy: "Ђ",
                djcy: "ђ",
                dlcorn: "⌞",
                dlcrop: "⌍",
                dollar: "$",
                Dopf: "\uD835\uDD3B",
                dopf: "\uD835\uDD55",
                Dot: "\xa8",
                dot: "˙",
                DotDot: "⃜",
                doteq: "≐",
                doteqdot: "≑",
                DotEqual: "≐",
                dotminus: "∸",
                dotplus: "∔",
                dotsquare: "⊡",
                doublebarwedge: "⌆",
                DoubleContourIntegral: "∯",
                DoubleDot: "\xa8",
                DoubleDownArrow: "⇓",
                DoubleLeftArrow: "⇐",
                DoubleLeftRightArrow: "⇔",
                DoubleLeftTee: "⫤",
                DoubleLongLeftArrow: "⟸",
                DoubleLongLeftRightArrow: "⟺",
                DoubleLongRightArrow: "⟹",
                DoubleRightArrow: "⇒",
                DoubleRightTee: "⊨",
                DoubleUpArrow: "⇑",
                DoubleUpDownArrow: "⇕",
                DoubleVerticalBar: "∥",
                DownArrow: "↓",
                Downarrow: "⇓",
                downarrow: "↓",
                DownArrowBar: "⤓",
                DownArrowUpArrow: "⇵",
                DownBreve: "̑",
                downdownarrows: "⇊",
                downharpoonleft: "⇃",
                downharpoonright: "⇂",
                DownLeftRightVector: "⥐",
                DownLeftTeeVector: "⥞",
                DownLeftVector: "↽",
                DownLeftVectorBar: "⥖",
                DownRightTeeVector: "⥟",
                DownRightVector: "⇁",
                DownRightVectorBar: "⥗",
                DownTee: "⊤",
                DownTeeArrow: "↧",
                drbkarow: "⤐",
                drcorn: "⌟",
                drcrop: "⌌",
                Dscr: "\uD835\uDC9F",
                dscr: "\uD835\uDCB9",
                DScy: "Ѕ",
                dscy: "ѕ",
                dsol: "⧶",
                Dstrok: "Đ",
                dstrok: "đ",
                dtdot: "⋱",
                dtri: "▿",
                dtrif: "▾",
                duarr: "⇵",
                duhar: "⥯",
                dwangle: "⦦",
                DZcy: "Џ",
                dzcy: "џ",
                dzigrarr: "⟿",
                Eacute: "\xc9",
                eacute: "\xe9",
                easter: "⩮",
                Ecaron: "Ě",
                ecaron: "ě",
                ecir: "≖",
                Ecirc: "\xca",
                ecirc: "\xea",
                ecolon: "≕",
                Ecy: "Э",
                ecy: "э",
                eDDot: "⩷",
                Edot: "Ė",
                eDot: "≑",
                edot: "ė",
                ee: "ⅇ",
                efDot: "≒",
                Efr: "\uD835\uDD08",
                efr: "\uD835\uDD22",
                eg: "⪚",
                Egrave: "\xc8",
                egrave: "\xe8",
                egs: "⪖",
                egsdot: "⪘",
                el: "⪙",
                Element: "∈",
                elinters: "⏧",
                ell: "ℓ",
                els: "⪕",
                elsdot: "⪗",
                Emacr: "Ē",
                emacr: "ē",
                empty: "∅",
                emptyset: "∅",
                EmptySmallSquare: "◻",
                emptyv: "∅",
                EmptyVerySmallSquare: "▫",
                emsp: " ",
                emsp13: " ",
                emsp14: " ",
                ENG: "Ŋ",
                eng: "ŋ",
                ensp: " ",
                Eogon: "Ę",
                eogon: "ę",
                Eopf: "\uD835\uDD3C",
                eopf: "\uD835\uDD56",
                epar: "⋕",
                eparsl: "⧣",
                eplus: "⩱",
                epsi: "ε",
                Epsilon: "Ε",
                epsilon: "ε",
                epsiv: "ϵ",
                eqcirc: "≖",
                eqcolon: "≕",
                eqsim: "≂",
                eqslantgtr: "⪖",
                eqslantless: "⪕",
                Equal: "⩵",
                equals: "=",
                EqualTilde: "≂",
                equest: "≟",
                Equilibrium: "⇌",
                equiv: "≡",
                equivDD: "⩸",
                eqvparsl: "⧥",
                erarr: "⥱",
                erDot: "≓",
                Escr: "ℰ",
                escr: "ℯ",
                esdot: "≐",
                Esim: "⩳",
                esim: "≂",
                Eta: "Η",
                eta: "η",
                ETH: "\xd0",
                eth: "\xf0",
                Euml: "\xcb",
                euml: "\xeb",
                euro: "€",
                excl: "!",
                exist: "∃",
                Exists: "∃",
                expectation: "ℰ",
                ExponentialE: "ⅇ",
                exponentiale: "ⅇ",
                fallingdotseq: "≒",
                Fcy: "Ф",
                fcy: "ф",
                female: "♀",
                ffilig: "ﬃ",
                fflig: "ﬀ",
                ffllig: "ﬄ",
                Ffr: "\uD835\uDD09",
                ffr: "\uD835\uDD23",
                filig: "ﬁ",
                FilledSmallSquare: "◼",
                FilledVerySmallSquare: "▪",
                fjlig: "fj",
                flat: "♭",
                fllig: "ﬂ",
                fltns: "▱",
                fnof: "ƒ",
                Fopf: "\uD835\uDD3D",
                fopf: "\uD835\uDD57",
                ForAll: "∀",
                forall: "∀",
                fork: "⋔",
                forkv: "⫙",
                Fouriertrf: "ℱ",
                fpartint: "⨍",
                frac12: "\xbd",
                frac13: "⅓",
                frac14: "\xbc",
                frac15: "⅕",
                frac16: "⅙",
                frac18: "⅛",
                frac23: "⅔",
                frac25: "⅖",
                frac34: "\xbe",
                frac35: "⅗",
                frac38: "⅜",
                frac45: "⅘",
                frac56: "⅚",
                frac58: "⅝",
                frac78: "⅞",
                frasl: "⁄",
                frown: "⌢",
                Fscr: "ℱ",
                fscr: "\uD835\uDCBB",
                gacute: "ǵ",
                Gamma: "Γ",
                gamma: "γ",
                Gammad: "Ϝ",
                gammad: "ϝ",
                gap: "⪆",
                Gbreve: "Ğ",
                gbreve: "ğ",
                Gcedil: "Ģ",
                Gcirc: "Ĝ",
                gcirc: "ĝ",
                Gcy: "Г",
                gcy: "г",
                Gdot: "Ġ",
                gdot: "ġ",
                gE: "≧",
                ge: "≥",
                gEl: "⪌",
                gel: "⋛",
                geq: "≥",
                geqq: "≧",
                geqslant: "⩾",
                ges: "⩾",
                gescc: "⪩",
                gesdot: "⪀",
                gesdoto: "⪂",
                gesdotol: "⪄",
                gesl: "⋛︀",
                gesles: "⪔",
                Gfr: "\uD835\uDD0A",
                gfr: "\uD835\uDD24",
                Gg: "⋙",
                gg: "≫",
                ggg: "⋙",
                gimel: "ℷ",
                GJcy: "Ѓ",
                gjcy: "ѓ",
                gl: "≷",
                gla: "⪥",
                glE: "⪒",
                glj: "⪤",
                gnap: "⪊",
                gnapprox: "⪊",
                gnE: "≩",
                gne: "⪈",
                gneq: "⪈",
                gneqq: "≩",
                gnsim: "⋧",
                Gopf: "\uD835\uDD3E",
                gopf: "\uD835\uDD58",
                grave: "`",
                GreaterEqual: "≥",
                GreaterEqualLess: "⋛",
                GreaterFullEqual: "≧",
                GreaterGreater: "⪢",
                GreaterLess: "≷",
                GreaterSlantEqual: "⩾",
                GreaterTilde: "≳",
                Gscr: "\uD835\uDCA2",
                gscr: "ℊ",
                gsim: "≳",
                gsime: "⪎",
                gsiml: "⪐",
                Gt: "≫",
                GT: ">",
                gt: ">",
                gtcc: "⪧",
                gtcir: "⩺",
                gtdot: "⋗",
                gtlPar: "⦕",
                gtquest: "⩼",
                gtrapprox: "⪆",
                gtrarr: "⥸",
                gtrdot: "⋗",
                gtreqless: "⋛",
                gtreqqless: "⪌",
                gtrless: "≷",
                gtrsim: "≳",
                gvertneqq: "≩︀",
                gvnE: "≩︀",
                Hacek: "ˇ",
                hairsp: " ",
                half: "\xbd",
                hamilt: "ℋ",
                HARDcy: "Ъ",
                hardcy: "ъ",
                hArr: "⇔",
                harr: "↔",
                harrcir: "⥈",
                harrw: "↭",
                Hat: "^",
                hbar: "ℏ",
                Hcirc: "Ĥ",
                hcirc: "ĥ",
                hearts: "♥",
                heartsuit: "♥",
                hellip: "…",
                hercon: "⊹",
                Hfr: "ℌ",
                hfr: "\uD835\uDD25",
                HilbertSpace: "ℋ",
                hksearow: "⤥",
                hkswarow: "⤦",
                hoarr: "⇿",
                homtht: "∻",
                hookleftarrow: "↩",
                hookrightarrow: "↪",
                Hopf: "ℍ",
                hopf: "\uD835\uDD59",
                horbar: "―",
                HorizontalLine: "─",
                Hscr: "ℋ",
                hscr: "\uD835\uDCBD",
                hslash: "ℏ",
                Hstrok: "Ħ",
                hstrok: "ħ",
                HumpDownHump: "≎",
                HumpEqual: "≏",
                hybull: "⁃",
                hyphen: "‐",
                Iacute: "\xcd",
                iacute: "\xed",
                ic: "⁣",
                Icirc: "\xce",
                icirc: "\xee",
                Icy: "И",
                icy: "и",
                Idot: "İ",
                IEcy: "Е",
                iecy: "е",
                iexcl: "\xa1",
                iff: "⇔",
                Ifr: "ℑ",
                ifr: "\uD835\uDD26",
                Igrave: "\xcc",
                igrave: "\xec",
                ii: "ⅈ",
                iiiint: "⨌",
                iiint: "∭",
                iinfin: "⧜",
                iiota: "℩",
                IJlig: "Ĳ",
                ijlig: "ĳ",
                Im: "ℑ",
                Imacr: "Ī",
                imacr: "ī",
                image: "ℑ",
                ImaginaryI: "ⅈ",
                imagline: "ℐ",
                imagpart: "ℑ",
                imath: "ı",
                imof: "⊷",
                imped: "Ƶ",
                Implies: "⇒",
                in: "∈",
                incare: "℅",
                infin: "∞",
                infintie: "⧝",
                inodot: "ı",
                Int: "∬",
                int: "∫",
                intcal: "⊺",
                integers: "ℤ",
                Integral: "∫",
                intercal: "⊺",
                Intersection: "⋂",
                intlarhk: "⨗",
                intprod: "⨼",
                InvisibleComma: "⁣",
                InvisibleTimes: "⁢",
                IOcy: "Ё",
                iocy: "ё",
                Iogon: "Į",
                iogon: "į",
                Iopf: "\uD835\uDD40",
                iopf: "\uD835\uDD5A",
                Iota: "Ι",
                iota: "ι",
                iprod: "⨼",
                iquest: "\xbf",
                Iscr: "ℐ",
                iscr: "\uD835\uDCBE",
                isin: "∈",
                isindot: "⋵",
                isinE: "⋹",
                isins: "⋴",
                isinsv: "⋳",
                isinv: "∈",
                it: "⁢",
                Itilde: "Ĩ",
                itilde: "ĩ",
                Iukcy: "І",
                iukcy: "і",
                Iuml: "\xcf",
                iuml: "\xef",
                Jcirc: "Ĵ",
                jcirc: "ĵ",
                Jcy: "Й",
                jcy: "й",
                Jfr: "\uD835\uDD0D",
                jfr: "\uD835\uDD27",
                jmath: "ȷ",
                Jopf: "\uD835\uDD41",
                jopf: "\uD835\uDD5B",
                Jscr: "\uD835\uDCA5",
                jscr: "\uD835\uDCBF",
                Jsercy: "Ј",
                jsercy: "ј",
                Jukcy: "Є",
                jukcy: "є",
                Kappa: "Κ",
                kappa: "κ",
                kappav: "ϰ",
                Kcedil: "Ķ",
                kcedil: "ķ",
                Kcy: "К",
                kcy: "к",
                Kfr: "\uD835\uDD0E",
                kfr: "\uD835\uDD28",
                kgreen: "ĸ",
                KHcy: "Х",
                khcy: "х",
                KJcy: "Ќ",
                kjcy: "ќ",
                Kopf: "\uD835\uDD42",
                kopf: "\uD835\uDD5C",
                Kscr: "\uD835\uDCA6",
                kscr: "\uD835\uDCC0",
                lAarr: "⇚",
                Lacute: "Ĺ",
                lacute: "ĺ",
                laemptyv: "⦴",
                lagran: "ℒ",
                Lambda: "Λ",
                lambda: "λ",
                Lang: "⟪",
                lang: "⟨",
                langd: "⦑",
                langle: "⟨",
                lap: "⪅",
                Laplacetrf: "ℒ",
                laquo: "\xab",
                Larr: "↞",
                lArr: "⇐",
                larr: "←",
                larrb: "⇤",
                larrbfs: "⤟",
                larrfs: "⤝",
                larrhk: "↩",
                larrlp: "↫",
                larrpl: "⤹",
                larrsim: "⥳",
                larrtl: "↢",
                lat: "⪫",
                lAtail: "⤛",
                latail: "⤙",
                late: "⪭",
                lates: "⪭︀",
                lBarr: "⤎",
                lbarr: "⤌",
                lbbrk: "❲",
                lbrace: "{",
                lbrack: "[",
                lbrke: "⦋",
                lbrksld: "⦏",
                lbrkslu: "⦍",
                Lcaron: "Ľ",
                lcaron: "ľ",
                Lcedil: "Ļ",
                lcedil: "ļ",
                lceil: "⌈",
                lcub: "{",
                Lcy: "Л",
                lcy: "л",
                ldca: "⤶",
                ldquo: "“",
                ldquor: "„",
                ldrdhar: "⥧",
                ldrushar: "⥋",
                ldsh: "↲",
                lE: "≦",
                le: "≤",
                LeftAngleBracket: "⟨",
                LeftArrow: "←",
                Leftarrow: "⇐",
                leftarrow: "←",
                LeftArrowBar: "⇤",
                LeftArrowRightArrow: "⇆",
                leftarrowtail: "↢",
                LeftCeiling: "⌈",
                LeftDoubleBracket: "⟦",
                LeftDownTeeVector: "⥡",
                LeftDownVector: "⇃",
                LeftDownVectorBar: "⥙",
                LeftFloor: "⌊",
                leftharpoondown: "↽",
                leftharpoonup: "↼",
                leftleftarrows: "⇇",
                LeftRightArrow: "↔",
                Leftrightarrow: "⇔",
                leftrightarrow: "↔",
                leftrightarrows: "⇆",
                leftrightharpoons: "⇋",
                leftrightsquigarrow: "↭",
                LeftRightVector: "⥎",
                LeftTee: "⊣",
                LeftTeeArrow: "↤",
                LeftTeeVector: "⥚",
                leftthreetimes: "⋋",
                LeftTriangle: "⊲",
                LeftTriangleBar: "⧏",
                LeftTriangleEqual: "⊴",
                LeftUpDownVector: "⥑",
                LeftUpTeeVector: "⥠",
                LeftUpVector: "↿",
                LeftUpVectorBar: "⥘",
                LeftVector: "↼",
                LeftVectorBar: "⥒",
                lEg: "⪋",
                leg: "⋚",
                leq: "≤",
                leqq: "≦",
                leqslant: "⩽",
                les: "⩽",
                lescc: "⪨",
                lesdot: "⩿",
                lesdoto: "⪁",
                lesdotor: "⪃",
                lesg: "⋚︀",
                lesges: "⪓",
                lessapprox: "⪅",
                lessdot: "⋖",
                lesseqgtr: "⋚",
                lesseqqgtr: "⪋",
                LessEqualGreater: "⋚",
                LessFullEqual: "≦",
                LessGreater: "≶",
                lessgtr: "≶",
                LessLess: "⪡",
                lesssim: "≲",
                LessSlantEqual: "⩽",
                LessTilde: "≲",
                lfisht: "⥼",
                lfloor: "⌊",
                Lfr: "\uD835\uDD0F",
                lfr: "\uD835\uDD29",
                lg: "≶",
                lgE: "⪑",
                lHar: "⥢",
                lhard: "↽",
                lharu: "↼",
                lharul: "⥪",
                lhblk: "▄",
                LJcy: "Љ",
                ljcy: "љ",
                Ll: "⋘",
                ll: "≪",
                llarr: "⇇",
                llcorner: "⌞",
                Lleftarrow: "⇚",
                llhard: "⥫",
                lltri: "◺",
                Lmidot: "Ŀ",
                lmidot: "ŀ",
                lmoust: "⎰",
                lmoustache: "⎰",
                lnap: "⪉",
                lnapprox: "⪉",
                lnE: "≨",
                lne: "⪇",
                lneq: "⪇",
                lneqq: "≨",
                lnsim: "⋦",
                loang: "⟬",
                loarr: "⇽",
                lobrk: "⟦",
                LongLeftArrow: "⟵",
                Longleftarrow: "⟸",
                longleftarrow: "⟵",
                LongLeftRightArrow: "⟷",
                Longleftrightarrow: "⟺",
                longleftrightarrow: "⟷",
                longmapsto: "⟼",
                LongRightArrow: "⟶",
                Longrightarrow: "⟹",
                longrightarrow: "⟶",
                looparrowleft: "↫",
                looparrowright: "↬",
                lopar: "⦅",
                Lopf: "\uD835\uDD43",
                lopf: "\uD835\uDD5D",
                loplus: "⨭",
                lotimes: "⨴",
                lowast: "∗",
                lowbar: "_",
                LowerLeftArrow: "↙",
                LowerRightArrow: "↘",
                loz: "◊",
                lozenge: "◊",
                lozf: "⧫",
                lpar: "(",
                lparlt: "⦓",
                lrarr: "⇆",
                lrcorner: "⌟",
                lrhar: "⇋",
                lrhard: "⥭",
                lrm: "‎",
                lrtri: "⊿",
                lsaquo: "‹",
                Lscr: "ℒ",
                lscr: "\uD835\uDCC1",
                Lsh: "↰",
                lsh: "↰",
                lsim: "≲",
                lsime: "⪍",
                lsimg: "⪏",
                lsqb: "[",
                lsquo: "‘",
                lsquor: "‚",
                Lstrok: "Ł",
                lstrok: "ł",
                Lt: "≪",
                LT: "<",
                lt: "<",
                ltcc: "⪦",
                ltcir: "⩹",
                ltdot: "⋖",
                lthree: "⋋",
                ltimes: "⋉",
                ltlarr: "⥶",
                ltquest: "⩻",
                ltri: "◃",
                ltrie: "⊴",
                ltrif: "◂",
                ltrPar: "⦖",
                lurdshar: "⥊",
                luruhar: "⥦",
                lvertneqq: "≨︀",
                lvnE: "≨︀",
                macr: "\xaf",
                male: "♂",
                malt: "✠",
                maltese: "✠",
                Map: "⤅",
                map: "↦",
                mapsto: "↦",
                mapstodown: "↧",
                mapstoleft: "↤",
                mapstoup: "↥",
                marker: "▮",
                mcomma: "⨩",
                Mcy: "М",
                mcy: "м",
                mdash: "—",
                mDDot: "∺",
                measuredangle: "∡",
                MediumSpace: " ",
                Mellintrf: "ℳ",
                Mfr: "\uD835\uDD10",
                mfr: "\uD835\uDD2A",
                mho: "℧",
                micro: "\xb5",
                mid: "∣",
                midast: "*",
                midcir: "⫰",
                middot: "\xb7",
                minus: "−",
                minusb: "⊟",
                minusd: "∸",
                minusdu: "⨪",
                MinusPlus: "∓",
                mlcp: "⫛",
                mldr: "…",
                mnplus: "∓",
                models: "⊧",
                Mopf: "\uD835\uDD44",
                mopf: "\uD835\uDD5E",
                mp: "∓",
                Mscr: "ℳ",
                mscr: "\uD835\uDCC2",
                mstpos: "∾",
                Mu: "Μ",
                mu: "μ",
                multimap: "⊸",
                mumap: "⊸",
                nabla: "∇",
                Nacute: "Ń",
                nacute: "ń",
                nang: "∠⃒",
                nap: "≉",
                napE: "⩰̸",
                napid: "≋̸",
                napos: "ŉ",
                napprox: "≉",
                natur: "♮",
                natural: "♮",
                naturals: "ℕ",
                nbsp: "\xa0",
                nbump: "≎̸",
                nbumpe: "≏̸",
                ncap: "⩃",
                Ncaron: "Ň",
                ncaron: "ň",
                Ncedil: "Ņ",
                ncedil: "ņ",
                ncong: "≇",
                ncongdot: "⩭̸",
                ncup: "⩂",
                Ncy: "Н",
                ncy: "н",
                ndash: "–",
                ne: "≠",
                nearhk: "⤤",
                neArr: "⇗",
                nearr: "↗",
                nearrow: "↗",
                nedot: "≐̸",
                NegativeMediumSpace: "​",
                NegativeThickSpace: "​",
                NegativeThinSpace: "​",
                NegativeVeryThinSpace: "​",
                nequiv: "≢",
                nesear: "⤨",
                nesim: "≂̸",
                NestedGreaterGreater: "≫",
                NestedLessLess: "≪",
                NewLine: "\n",
                nexist: "∄",
                nexists: "∄",
                Nfr: "\uD835\uDD11",
                nfr: "\uD835\uDD2B",
                ngE: "≧̸",
                nge: "≱",
                ngeq: "≱",
                ngeqq: "≧̸",
                ngeqslant: "⩾̸",
                nges: "⩾̸",
                nGg: "⋙̸",
                ngsim: "≵",
                nGt: "≫⃒",
                ngt: "≯",
                ngtr: "≯",
                nGtv: "≫̸",
                nhArr: "⇎",
                nharr: "↮",
                nhpar: "⫲",
                ni: "∋",
                nis: "⋼",
                nisd: "⋺",
                niv: "∋",
                NJcy: "Њ",
                njcy: "њ",
                nlArr: "⇍",
                nlarr: "↚",
                nldr: "‥",
                nlE: "≦̸",
                nle: "≰",
                nLeftarrow: "⇍",
                nleftarrow: "↚",
                nLeftrightarrow: "⇎",
                nleftrightarrow: "↮",
                nleq: "≰",
                nleqq: "≦̸",
                nleqslant: "⩽̸",
                nles: "⩽̸",
                nless: "≮",
                nLl: "⋘̸",
                nlsim: "≴",
                nLt: "≪⃒",
                nlt: "≮",
                nltri: "⋪",
                nltrie: "⋬",
                nLtv: "≪̸",
                nmid: "∤",
                NoBreak: "⁠",
                NonBreakingSpace: "\xa0",
                Nopf: "ℕ",
                nopf: "\uD835\uDD5F",
                Not: "⫬",
                not: "\xac",
                NotCongruent: "≢",
                NotCupCap: "≭",
                NotDoubleVerticalBar: "∦",
                NotElement: "∉",
                NotEqual: "≠",
                NotEqualTilde: "≂̸",
                NotExists: "∄",
                NotGreater: "≯",
                NotGreaterEqual: "≱",
                NotGreaterFullEqual: "≧̸",
                NotGreaterGreater: "≫̸",
                NotGreaterLess: "≹",
                NotGreaterSlantEqual: "⩾̸",
                NotGreaterTilde: "≵",
                NotHumpDownHump: "≎̸",
                NotHumpEqual: "≏̸",
                notin: "∉",
                notindot: "⋵̸",
                notinE: "⋹̸",
                notinva: "∉",
                notinvb: "⋷",
                notinvc: "⋶",
                NotLeftTriangle: "⋪",
                NotLeftTriangleBar: "⧏̸",
                NotLeftTriangleEqual: "⋬",
                NotLess: "≮",
                NotLessEqual: "≰",
                NotLessGreater: "≸",
                NotLessLess: "≪̸",
                NotLessSlantEqual: "⩽̸",
                NotLessTilde: "≴",
                NotNestedGreaterGreater: "⪢̸",
                NotNestedLessLess: "⪡̸",
                notni: "∌",
                notniva: "∌",
                notnivb: "⋾",
                notnivc: "⋽",
                NotPrecedes: "⊀",
                NotPrecedesEqual: "⪯̸",
                NotPrecedesSlantEqual: "⋠",
                NotReverseElement: "∌",
                NotRightTriangle: "⋫",
                NotRightTriangleBar: "⧐̸",
                NotRightTriangleEqual: "⋭",
                NotSquareSubset: "⊏̸",
                NotSquareSubsetEqual: "⋢",
                NotSquareSuperset: "⊐̸",
                NotSquareSupersetEqual: "⋣",
                NotSubset: "⊂⃒",
                NotSubsetEqual: "⊈",
                NotSucceeds: "⊁",
                NotSucceedsEqual: "⪰̸",
                NotSucceedsSlantEqual: "⋡",
                NotSucceedsTilde: "≿̸",
                NotSuperset: "⊃⃒",
                NotSupersetEqual: "⊉",
                NotTilde: "≁",
                NotTildeEqual: "≄",
                NotTildeFullEqual: "≇",
                NotTildeTilde: "≉",
                NotVerticalBar: "∤",
                npar: "∦",
                nparallel: "∦",
                nparsl: "⫽⃥",
                npart: "∂̸",
                npolint: "⨔",
                npr: "⊀",
                nprcue: "⋠",
                npre: "⪯̸",
                nprec: "⊀",
                npreceq: "⪯̸",
                nrArr: "⇏",
                nrarr: "↛",
                nrarrc: "⤳̸",
                nrarrw: "↝̸",
                nRightarrow: "⇏",
                nrightarrow: "↛",
                nrtri: "⋫",
                nrtrie: "⋭",
                nsc: "⊁",
                nsccue: "⋡",
                nsce: "⪰̸",
                Nscr: "\uD835\uDCA9",
                nscr: "\uD835\uDCC3",
                nshortmid: "∤",
                nshortparallel: "∦",
                nsim: "≁",
                nsime: "≄",
                nsimeq: "≄",
                nsmid: "∤",
                nspar: "∦",
                nsqsube: "⋢",
                nsqsupe: "⋣",
                nsub: "⊄",
                nsubE: "⫅̸",
                nsube: "⊈",
                nsubset: "⊂⃒",
                nsubseteq: "⊈",
                nsubseteqq: "⫅̸",
                nsucc: "⊁",
                nsucceq: "⪰̸",
                nsup: "⊅",
                nsupE: "⫆̸",
                nsupe: "⊉",
                nsupset: "⊃⃒",
                nsupseteq: "⊉",
                nsupseteqq: "⫆̸",
                ntgl: "≹",
                Ntilde: "\xd1",
                ntilde: "\xf1",
                ntlg: "≸",
                ntriangleleft: "⋪",
                ntrianglelefteq: "⋬",
                ntriangleright: "⋫",
                ntrianglerighteq: "⋭",
                Nu: "Ν",
                nu: "ν",
                num: "#",
                numero: "№",
                numsp: " ",
                nvap: "≍⃒",
                nVDash: "⊯",
                nVdash: "⊮",
                nvDash: "⊭",
                nvdash: "⊬",
                nvge: "≥⃒",
                nvgt: ">⃒",
                nvHarr: "⤄",
                nvinfin: "⧞",
                nvlArr: "⤂",
                nvle: "≤⃒",
                nvlt: "<⃒",
                nvltrie: "⊴⃒",
                nvrArr: "⤃",
                nvrtrie: "⊵⃒",
                nvsim: "∼⃒",
                nwarhk: "⤣",
                nwArr: "⇖",
                nwarr: "↖",
                nwarrow: "↖",
                nwnear: "⤧",
                Oacute: "\xd3",
                oacute: "\xf3",
                oast: "⊛",
                ocir: "⊚",
                Ocirc: "\xd4",
                ocirc: "\xf4",
                Ocy: "О",
                ocy: "о",
                odash: "⊝",
                Odblac: "Ő",
                odblac: "ő",
                odiv: "⨸",
                odot: "⊙",
                odsold: "⦼",
                OElig: "Œ",
                oelig: "œ",
                ofcir: "⦿",
                Ofr: "\uD835\uDD12",
                ofr: "\uD835\uDD2C",
                ogon: "˛",
                Ograve: "\xd2",
                ograve: "\xf2",
                ogt: "⧁",
                ohbar: "⦵",
                ohm: "Ω",
                oint: "∮",
                olarr: "↺",
                olcir: "⦾",
                olcross: "⦻",
                oline: "‾",
                olt: "⧀",
                Omacr: "Ō",
                omacr: "ō",
                Omega: "Ω",
                omega: "ω",
                Omicron: "Ο",
                omicron: "ο",
                omid: "⦶",
                ominus: "⊖",
                Oopf: "\uD835\uDD46",
                oopf: "\uD835\uDD60",
                opar: "⦷",
                OpenCurlyDoubleQuote: "“",
                OpenCurlyQuote: "‘",
                operp: "⦹",
                oplus: "⊕",
                Or: "⩔",
                or: "∨",
                orarr: "↻",
                ord: "⩝",
                order: "ℴ",
                orderof: "ℴ",
                ordf: "\xaa",
                ordm: "\xba",
                origof: "⊶",
                oror: "⩖",
                orslope: "⩗",
                orv: "⩛",
                oS: "Ⓢ",
                Oscr: "\uD835\uDCAA",
                oscr: "ℴ",
                Oslash: "\xd8",
                oslash: "\xf8",
                osol: "⊘",
                Otilde: "\xd5",
                otilde: "\xf5",
                Otimes: "⨷",
                otimes: "⊗",
                otimesas: "⨶",
                Ouml: "\xd6",
                ouml: "\xf6",
                ovbar: "⌽",
                OverBar: "‾",
                OverBrace: "⏞",
                OverBracket: "⎴",
                OverParenthesis: "⏜",
                par: "∥",
                para: "\xb6",
                parallel: "∥",
                parsim: "⫳",
                parsl: "⫽",
                part: "∂",
                PartialD: "∂",
                Pcy: "П",
                pcy: "п",
                percnt: "%",
                period: ".",
                permil: "‰",
                perp: "⊥",
                pertenk: "‱",
                Pfr: "\uD835\uDD13",
                pfr: "\uD835\uDD2D",
                Phi: "Φ",
                phi: "φ",
                phiv: "ϕ",
                phmmat: "ℳ",
                phone: "☎",
                Pi: "Π",
                pi: "π",
                pitchfork: "⋔",
                piv: "ϖ",
                planck: "ℏ",
                planckh: "ℎ",
                plankv: "ℏ",
                plus: "+",
                plusacir: "⨣",
                plusb: "⊞",
                pluscir: "⨢",
                plusdo: "∔",
                plusdu: "⨥",
                pluse: "⩲",
                PlusMinus: "\xb1",
                plusmn: "\xb1",
                plussim: "⨦",
                plustwo: "⨧",
                pm: "\xb1",
                Poincareplane: "ℌ",
                pointint: "⨕",
                Popf: "ℙ",
                popf: "\uD835\uDD61",
                pound: "\xa3",
                Pr: "⪻",
                pr: "≺",
                prap: "⪷",
                prcue: "≼",
                prE: "⪳",
                pre: "⪯",
                prec: "≺",
                precapprox: "⪷",
                preccurlyeq: "≼",
                Precedes: "≺",
                PrecedesEqual: "⪯",
                PrecedesSlantEqual: "≼",
                PrecedesTilde: "≾",
                preceq: "⪯",
                precnapprox: "⪹",
                precneqq: "⪵",
                precnsim: "⋨",
                precsim: "≾",
                Prime: "″",
                prime: "′",
                primes: "ℙ",
                prnap: "⪹",
                prnE: "⪵",
                prnsim: "⋨",
                prod: "∏",
                Product: "∏",
                profalar: "⌮",
                profline: "⌒",
                profsurf: "⌓",
                prop: "∝",
                Proportion: "∷",
                Proportional: "∝",
                propto: "∝",
                prsim: "≾",
                prurel: "⊰",
                Pscr: "\uD835\uDCAB",
                pscr: "\uD835\uDCC5",
                Psi: "Ψ",
                psi: "ψ",
                puncsp: " ",
                Qfr: "\uD835\uDD14",
                qfr: "\uD835\uDD2E",
                qint: "⨌",
                Qopf: "ℚ",
                qopf: "\uD835\uDD62",
                qprime: "⁗",
                Qscr: "\uD835\uDCAC",
                qscr: "\uD835\uDCC6",
                quaternions: "ℍ",
                quatint: "⨖",
                quest: "?",
                questeq: "≟",
                QUOT: '"',
                quot: '"',
                rAarr: "⇛",
                race: "∽̱",
                Racute: "Ŕ",
                racute: "ŕ",
                radic: "√",
                raemptyv: "⦳",
                Rang: "⟫",
                rang: "⟩",
                rangd: "⦒",
                range: "⦥",
                rangle: "⟩",
                raquo: "\xbb",
                Rarr: "↠",
                rArr: "⇒",
                rarr: "→",
                rarrap: "⥵",
                rarrb: "⇥",
                rarrbfs: "⤠",
                rarrc: "⤳",
                rarrfs: "⤞",
                rarrhk: "↪",
                rarrlp: "↬",
                rarrpl: "⥅",
                rarrsim: "⥴",
                Rarrtl: "⤖",
                rarrtl: "↣",
                rarrw: "↝",
                rAtail: "⤜",
                ratail: "⤚",
                ratio: "∶",
                rationals: "ℚ",
                RBarr: "⤐",
                rBarr: "⤏",
                rbarr: "⤍",
                rbbrk: "❳",
                rbrace: "}",
                rbrack: "]",
                rbrke: "⦌",
                rbrksld: "⦎",
                rbrkslu: "⦐",
                Rcaron: "Ř",
                rcaron: "ř",
                Rcedil: "Ŗ",
                rcedil: "ŗ",
                rceil: "⌉",
                rcub: "}",
                Rcy: "Р",
                rcy: "р",
                rdca: "⤷",
                rdldhar: "⥩",
                rdquo: "”",
                rdquor: "”",
                rdsh: "↳",
                Re: "ℜ",
                real: "ℜ",
                realine: "ℛ",
                realpart: "ℜ",
                reals: "ℝ",
                rect: "▭",
                REG: "\xae",
                reg: "\xae",
                ReverseElement: "∋",
                ReverseEquilibrium: "⇋",
                ReverseUpEquilibrium: "⥯",
                rfisht: "⥽",
                rfloor: "⌋",
                Rfr: "ℜ",
                rfr: "\uD835\uDD2F",
                rHar: "⥤",
                rhard: "⇁",
                rharu: "⇀",
                rharul: "⥬",
                Rho: "Ρ",
                rho: "ρ",
                rhov: "ϱ",
                RightAngleBracket: "⟩",
                RightArrow: "→",
                Rightarrow: "⇒",
                rightarrow: "→",
                RightArrowBar: "⇥",
                RightArrowLeftArrow: "⇄",
                rightarrowtail: "↣",
                RightCeiling: "⌉",
                RightDoubleBracket: "⟧",
                RightDownTeeVector: "⥝",
                RightDownVector: "⇂",
                RightDownVectorBar: "⥕",
                RightFloor: "⌋",
                rightharpoondown: "⇁",
                rightharpoonup: "⇀",
                rightleftarrows: "⇄",
                rightleftharpoons: "⇌",
                rightrightarrows: "⇉",
                rightsquigarrow: "↝",
                RightTee: "⊢",
                RightTeeArrow: "↦",
                RightTeeVector: "⥛",
                rightthreetimes: "⋌",
                RightTriangle: "⊳",
                RightTriangleBar: "⧐",
                RightTriangleEqual: "⊵",
                RightUpDownVector: "⥏",
                RightUpTeeVector: "⥜",
                RightUpVector: "↾",
                RightUpVectorBar: "⥔",
                RightVector: "⇀",
                RightVectorBar: "⥓",
                ring: "˚",
                risingdotseq: "≓",
                rlarr: "⇄",
                rlhar: "⇌",
                rlm: "‏",
                rmoust: "⎱",
                rmoustache: "⎱",
                rnmid: "⫮",
                roang: "⟭",
                roarr: "⇾",
                robrk: "⟧",
                ropar: "⦆",
                Ropf: "ℝ",
                ropf: "\uD835\uDD63",
                roplus: "⨮",
                rotimes: "⨵",
                RoundImplies: "⥰",
                rpar: ")",
                rpargt: "⦔",
                rppolint: "⨒",
                rrarr: "⇉",
                Rrightarrow: "⇛",
                rsaquo: "›",
                Rscr: "ℛ",
                rscr: "\uD835\uDCC7",
                Rsh: "↱",
                rsh: "↱",
                rsqb: "]",
                rsquo: "’",
                rsquor: "’",
                rthree: "⋌",
                rtimes: "⋊",
                rtri: "▹",
                rtrie: "⊵",
                rtrif: "▸",
                rtriltri: "⧎",
                RuleDelayed: "⧴",
                ruluhar: "⥨",
                rx: "℞",
                Sacute: "Ś",
                sacute: "ś",
                sbquo: "‚",
                Sc: "⪼",
                sc: "≻",
                scap: "⪸",
                Scaron: "Š",
                scaron: "š",
                sccue: "≽",
                scE: "⪴",
                sce: "⪰",
                Scedil: "Ş",
                scedil: "ş",
                Scirc: "Ŝ",
                scirc: "ŝ",
                scnap: "⪺",
                scnE: "⪶",
                scnsim: "⋩",
                scpolint: "⨓",
                scsim: "≿",
                Scy: "С",
                scy: "с",
                sdot: "⋅",
                sdotb: "⊡",
                sdote: "⩦",
                searhk: "⤥",
                seArr: "⇘",
                searr: "↘",
                searrow: "↘",
                sect: "\xa7",
                semi: ";",
                seswar: "⤩",
                setminus: "∖",
                setmn: "∖",
                sext: "✶",
                Sfr: "\uD835\uDD16",
                sfr: "\uD835\uDD30",
                sfrown: "⌢",
                sharp: "♯",
                SHCHcy: "Щ",
                shchcy: "щ",
                SHcy: "Ш",
                shcy: "ш",
                ShortDownArrow: "↓",
                ShortLeftArrow: "←",
                shortmid: "∣",
                shortparallel: "∥",
                ShortRightArrow: "→",
                ShortUpArrow: "↑",
                shy: "\xad",
                Sigma: "Σ",
                sigma: "σ",
                sigmaf: "ς",
                sigmav: "ς",
                sim: "∼",
                simdot: "⩪",
                sime: "≃",
                simeq: "≃",
                simg: "⪞",
                simgE: "⪠",
                siml: "⪝",
                simlE: "⪟",
                simne: "≆",
                simplus: "⨤",
                simrarr: "⥲",
                slarr: "←",
                SmallCircle: "∘",
                smallsetminus: "∖",
                smashp: "⨳",
                smeparsl: "⧤",
                smid: "∣",
                smile: "⌣",
                smt: "⪪",
                smte: "⪬",
                smtes: "⪬︀",
                SOFTcy: "Ь",
                softcy: "ь",
                sol: "/",
                solb: "⧄",
                solbar: "⌿",
                Sopf: "\uD835\uDD4A",
                sopf: "\uD835\uDD64",
                spades: "♠",
                spadesuit: "♠",
                spar: "∥",
                sqcap: "⊓",
                sqcaps: "⊓︀",
                sqcup: "⊔",
                sqcups: "⊔︀",
                Sqrt: "√",
                sqsub: "⊏",
                sqsube: "⊑",
                sqsubset: "⊏",
                sqsubseteq: "⊑",
                sqsup: "⊐",
                sqsupe: "⊒",
                sqsupset: "⊐",
                sqsupseteq: "⊒",
                squ: "□",
                Square: "□",
                square: "□",
                SquareIntersection: "⊓",
                SquareSubset: "⊏",
                SquareSubsetEqual: "⊑",
                SquareSuperset: "⊐",
                SquareSupersetEqual: "⊒",
                SquareUnion: "⊔",
                squarf: "▪",
                squf: "▪",
                srarr: "→",
                Sscr: "\uD835\uDCAE",
                sscr: "\uD835\uDCC8",
                ssetmn: "∖",
                ssmile: "⌣",
                sstarf: "⋆",
                Star: "⋆",
                star: "☆",
                starf: "★",
                straightepsilon: "ϵ",
                straightphi: "ϕ",
                strns: "\xaf",
                Sub: "⋐",
                sub: "⊂",
                subdot: "⪽",
                subE: "⫅",
                sube: "⊆",
                subedot: "⫃",
                submult: "⫁",
                subnE: "⫋",
                subne: "⊊",
                subplus: "⪿",
                subrarr: "⥹",
                Subset: "⋐",
                subset: "⊂",
                subseteq: "⊆",
                subseteqq: "⫅",
                SubsetEqual: "⊆",
                subsetneq: "⊊",
                subsetneqq: "⫋",
                subsim: "⫇",
                subsub: "⫕",
                subsup: "⫓",
                succ: "≻",
                succapprox: "⪸",
                succcurlyeq: "≽",
                Succeeds: "≻",
                SucceedsEqual: "⪰",
                SucceedsSlantEqual: "≽",
                SucceedsTilde: "≿",
                succeq: "⪰",
                succnapprox: "⪺",
                succneqq: "⪶",
                succnsim: "⋩",
                succsim: "≿",
                SuchThat: "∋",
                Sum: "∑",
                sum: "∑",
                sung: "♪",
                Sup: "⋑",
                sup: "⊃",
                sup1: "\xb9",
                sup2: "\xb2",
                sup3: "\xb3",
                supdot: "⪾",
                supdsub: "⫘",
                supE: "⫆",
                supe: "⊇",
                supedot: "⫄",
                Superset: "⊃",
                SupersetEqual: "⊇",
                suphsol: "⟉",
                suphsub: "⫗",
                suplarr: "⥻",
                supmult: "⫂",
                supnE: "⫌",
                supne: "⊋",
                supplus: "⫀",
                Supset: "⋑",
                supset: "⊃",
                supseteq: "⊇",
                supseteqq: "⫆",
                supsetneq: "⊋",
                supsetneqq: "⫌",
                supsim: "⫈",
                supsub: "⫔",
                supsup: "⫖",
                swarhk: "⤦",
                swArr: "⇙",
                swarr: "↙",
                swarrow: "↙",
                swnwar: "⤪",
                szlig: "\xdf",
                Tab: "	",
                target: "⌖",
                Tau: "Τ",
                tau: "τ",
                tbrk: "⎴",
                Tcaron: "Ť",
                tcaron: "ť",
                Tcedil: "Ţ",
                tcedil: "ţ",
                Tcy: "Т",
                tcy: "т",
                tdot: "⃛",
                telrec: "⌕",
                Tfr: "\uD835\uDD17",
                tfr: "\uD835\uDD31",
                there4: "∴",
                Therefore: "∴",
                therefore: "∴",
                Theta: "Θ",
                theta: "θ",
                thetasym: "ϑ",
                thetav: "ϑ",
                thickapprox: "≈",
                thicksim: "∼",
                ThickSpace: "  ",
                thinsp: " ",
                ThinSpace: " ",
                thkap: "≈",
                thksim: "∼",
                THORN: "\xde",
                thorn: "\xfe",
                Tilde: "∼",
                tilde: "˜",
                TildeEqual: "≃",
                TildeFullEqual: "≅",
                TildeTilde: "≈",
                times: "\xd7",
                timesb: "⊠",
                timesbar: "⨱",
                timesd: "⨰",
                tint: "∭",
                toea: "⤨",
                top: "⊤",
                topbot: "⌶",
                topcir: "⫱",
                Topf: "\uD835\uDD4B",
                topf: "\uD835\uDD65",
                topfork: "⫚",
                tosa: "⤩",
                tprime: "‴",
                TRADE: "™",
                trade: "™",
                triangle: "▵",
                triangledown: "▿",
                triangleleft: "◃",
                trianglelefteq: "⊴",
                triangleq: "≜",
                triangleright: "▹",
                trianglerighteq: "⊵",
                tridot: "◬",
                trie: "≜",
                triminus: "⨺",
                TripleDot: "⃛",
                triplus: "⨹",
                trisb: "⧍",
                tritime: "⨻",
                trpezium: "⏢",
                Tscr: "\uD835\uDCAF",
                tscr: "\uD835\uDCC9",
                TScy: "Ц",
                tscy: "ц",
                TSHcy: "Ћ",
                tshcy: "ћ",
                Tstrok: "Ŧ",
                tstrok: "ŧ",
                twixt: "≬",
                twoheadleftarrow: "↞",
                twoheadrightarrow: "↠",
                Uacute: "\xda",
                uacute: "\xfa",
                Uarr: "↟",
                uArr: "⇑",
                uarr: "↑",
                Uarrocir: "⥉",
                Ubrcy: "Ў",
                ubrcy: "ў",
                Ubreve: "Ŭ",
                ubreve: "ŭ",
                Ucirc: "\xdb",
                ucirc: "\xfb",
                Ucy: "У",
                ucy: "у",
                udarr: "⇅",
                Udblac: "Ű",
                udblac: "ű",
                udhar: "⥮",
                ufisht: "⥾",
                Ufr: "\uD835\uDD18",
                ufr: "\uD835\uDD32",
                Ugrave: "\xd9",
                ugrave: "\xf9",
                uHar: "⥣",
                uharl: "↿",
                uharr: "↾",
                uhblk: "▀",
                ulcorn: "⌜",
                ulcorner: "⌜",
                ulcrop: "⌏",
                ultri: "◸",
                Umacr: "Ū",
                umacr: "ū",
                uml: "\xa8",
                UnderBar: "_",
                UnderBrace: "⏟",
                UnderBracket: "⎵",
                UnderParenthesis: "⏝",
                Union: "⋃",
                UnionPlus: "⊎",
                Uogon: "Ų",
                uogon: "ų",
                Uopf: "\uD835\uDD4C",
                uopf: "\uD835\uDD66",
                UpArrow: "↑",
                Uparrow: "⇑",
                uparrow: "↑",
                UpArrowBar: "⤒",
                UpArrowDownArrow: "⇅",
                UpDownArrow: "↕",
                Updownarrow: "⇕",
                updownarrow: "↕",
                UpEquilibrium: "⥮",
                upharpoonleft: "↿",
                upharpoonright: "↾",
                uplus: "⊎",
                UpperLeftArrow: "↖",
                UpperRightArrow: "↗",
                Upsi: "ϒ",
                upsi: "υ",
                upsih: "ϒ",
                Upsilon: "Υ",
                upsilon: "υ",
                UpTee: "⊥",
                UpTeeArrow: "↥",
                upuparrows: "⇈",
                urcorn: "⌝",
                urcorner: "⌝",
                urcrop: "⌎",
                Uring: "Ů",
                uring: "ů",
                urtri: "◹",
                Uscr: "\uD835\uDCB0",
                uscr: "\uD835\uDCCA",
                utdot: "⋰",
                Utilde: "Ũ",
                utilde: "ũ",
                utri: "▵",
                utrif: "▴",
                uuarr: "⇈",
                Uuml: "\xdc",
                uuml: "\xfc",
                uwangle: "⦧",
                vangrt: "⦜",
                varepsilon: "ϵ",
                varkappa: "ϰ",
                varnothing: "∅",
                varphi: "ϕ",
                varpi: "ϖ",
                varpropto: "∝",
                vArr: "⇕",
                varr: "↕",
                varrho: "ϱ",
                varsigma: "ς",
                varsubsetneq: "⊊︀",
                varsubsetneqq: "⫋︀",
                varsupsetneq: "⊋︀",
                varsupsetneqq: "⫌︀",
                vartheta: "ϑ",
                vartriangleleft: "⊲",
                vartriangleright: "⊳",
                Vbar: "⫫",
                vBar: "⫨",
                vBarv: "⫩",
                Vcy: "В",
                vcy: "в",
                VDash: "⊫",
                Vdash: "⊩",
                vDash: "⊨",
                vdash: "⊢",
                Vdashl: "⫦",
                Vee: "⋁",
                vee: "∨",
                veebar: "⊻",
                veeeq: "≚",
                vellip: "⋮",
                Verbar: "‖",
                verbar: "|",
                Vert: "‖",
                vert: "|",
                VerticalBar: "∣",
                VerticalLine: "|",
                VerticalSeparator: "❘",
                VerticalTilde: "≀",
                VeryThinSpace: " ",
                Vfr: "\uD835\uDD19",
                vfr: "\uD835\uDD33",
                vltri: "⊲",
                vnsub: "⊂⃒",
                vnsup: "⊃⃒",
                Vopf: "\uD835\uDD4D",
                vopf: "\uD835\uDD67",
                vprop: "∝",
                vrtri: "⊳",
                Vscr: "\uD835\uDCB1",
                vscr: "\uD835\uDCCB",
                vsubnE: "⫋︀",
                vsubne: "⊊︀",
                vsupnE: "⫌︀",
                vsupne: "⊋︀",
                Vvdash: "⊪",
                vzigzag: "⦚",
                Wcirc: "Ŵ",
                wcirc: "ŵ",
                wedbar: "⩟",
                Wedge: "⋀",
                wedge: "∧",
                wedgeq: "≙",
                weierp: "℘",
                Wfr: "\uD835\uDD1A",
                wfr: "\uD835\uDD34",
                Wopf: "\uD835\uDD4E",
                wopf: "\uD835\uDD68",
                wp: "℘",
                wr: "≀",
                wreath: "≀",
                Wscr: "\uD835\uDCB2",
                wscr: "\uD835\uDCCC",
                xcap: "⋂",
                xcirc: "◯",
                xcup: "⋃",
                xdtri: "▽",
                Xfr: "\uD835\uDD1B",
                xfr: "\uD835\uDD35",
                xhArr: "⟺",
                xharr: "⟷",
                Xi: "Ξ",
                xi: "ξ",
                xlArr: "⟸",
                xlarr: "⟵",
                xmap: "⟼",
                xnis: "⋻",
                xodot: "⨀",
                Xopf: "\uD835\uDD4F",
                xopf: "\uD835\uDD69",
                xoplus: "⨁",
                xotime: "⨂",
                xrArr: "⟹",
                xrarr: "⟶",
                Xscr: "\uD835\uDCB3",
                xscr: "\uD835\uDCCD",
                xsqcup: "⨆",
                xuplus: "⨄",
                xutri: "△",
                xvee: "⋁",
                xwedge: "⋀",
                Yacute: "\xdd",
                yacute: "\xfd",
                YAcy: "Я",
                yacy: "я",
                Ycirc: "Ŷ",
                ycirc: "ŷ",
                Ycy: "Ы",
                ycy: "ы",
                yen: "\xa5",
                Yfr: "\uD835\uDD1C",
                yfr: "\uD835\uDD36",
                YIcy: "Ї",
                yicy: "ї",
                Yopf: "\uD835\uDD50",
                yopf: "\uD835\uDD6A",
                Yscr: "\uD835\uDCB4",
                yscr: "\uD835\uDCCE",
                YUcy: "Ю",
                yucy: "ю",
                Yuml: "Ÿ",
                yuml: "\xff",
                Zacute: "Ź",
                zacute: "ź",
                Zcaron: "Ž",
                zcaron: "ž",
                Zcy: "З",
                zcy: "з",
                Zdot: "Ż",
                zdot: "ż",
                zeetrf: "ℨ",
                ZeroWidthSpace: "​",
                Zeta: "Ζ",
                zeta: "ζ",
                Zfr: "ℨ",
                zfr: "\uD835\uDD37",
                ZHcy: "Ж",
                zhcy: "ж",
                zigrarr: "⇝",
                Zopf: "ℤ",
                zopf: "\uD835\uDD6B",
                Zscr: "\uD835\uDCB5",
                zscr: "\uD835\uDCCF",
                zwj: "‍",
                zwnj: "‌"
            }), e.entityMap = e.HTML_ENTITIES
        },
        6718: function(t, e, r) {
            var n = r(9465);
            n.DOMImplementation, n.XMLSerializer, e.DOMParser = r(5472).DOMParser
        },
        252: function(t, e, r) {
            var n = r(5716).NAMESPACE,
                i = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                s = RegExp("[\\-\\.0-9" + i.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
                o = RegExp("^" + i.source + s.source + "*(?::" + i.source + s.source + "*)?$");

            function a(t, e) {
                this.message = t, this.locator = e, Error.captureStackTrace && Error.captureStackTrace(this, a)
            }

            function u() {}

            function l(t, e) {
                return e.lineNumber = t.lineNumber, e.columnNumber = t.columnNumber, e
            }

            function c(t, e, r) {
                for (var i = t.tagName, s = null, o = t.length; o--;) {
                    var a = t[o],
                        u = a.qName,
                        l = a.value,
                        c = u.indexOf(":");
                    if (c > 0) var f = a.prefix = u.slice(0, c),
                        d = u.slice(c + 1),
                        p = "xmlns" === f && d;
                    else d = u, f = null, p = "xmlns" === u && "";
                    a.localName = d, !1 !== p && (null == s && (s = {}, h(r, r = {})), r[p] = s[p] = l, a.uri = n.XMLNS, e.startPrefixMapping(p, l))
                }
                for (var o = t.length; o--;) {
                    var f = (a = t[o]).prefix;
                    f && ("xml" === f && (a.uri = n.XML), "xmlns" !== f && (a.uri = r[f || ""]))
                }
                var c = i.indexOf(":");
                c > 0 ? (f = t.prefix = i.slice(0, c), d = t.localName = i.slice(c + 1)) : (f = null, d = t.localName = i);
                var m = t.uri = r[f || ""];
                if (e.startElement(m, d, i, t), !t.closed) return t.currentNSMap = r, t.localNSMap = s, !0;
                if (e.endElement(m, d, i), s)
                    for (f in s) Object.prototype.hasOwnProperty.call(s, f) && e.endPrefixMapping(f)
            }

            function h(t, e) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }

            function f() {
                this.attributeNames = {}
            }
            a.prototype = Error(), a.prototype.name = a.name, u.prototype = {
                parse: function(t, e, r) {
                    var i = this.domBuilder;
                    i.startDocument(), h(e, e = {}),
                        function(t, e, r, i, s) {
                            function o(t) {
                                var e, n = t.slice(1, -1);
                                return Object.hasOwnProperty.call(r, n) ? r[n] : "#" !== n.charAt(0) ? (s.error("entity not found:" + t), t) : (e = parseInt(n.substr(1).replace("x", "0x"))) > 65535 ? String.fromCharCode(55296 + ((e -= 65536) >> 10), 56320 + (1023 & e)) : String.fromCharCode(e)
                            }

                            function u(e) {
                                if (e > b) {
                                    var r = t.substring(b, e).replace(/&#?\w+;/g, o);
                                    g && h(b), i.characters(r, 0, e - b), b = e
                                }
                            }

                            function h(e, r) {
                                for (; e >= p && (r = m.exec(t));) p = (d = r.index) + r[0].length, g.lineNumber++;
                                g.columnNumber = e - d + 1
                            }
                            for (var d = 0, p = 0, m = /.*(?:\r\n?|\n)|.*$/g, g = i.locator, y = [{
                                    currentNSMap: e
                                }], v = {}, b = 0;;) {
                                try {
                                    var w = t.indexOf("<", b);
                                    if (w < 0) {
                                        if (!t.substr(b).match(/^\s*$/)) {
                                            var E = i.doc,
                                                T = E.createTextNode(t.substr(b));
                                            E.appendChild(T), i.currentElement = T
                                        }
                                        return
                                    }
                                    switch (w > b && u(w), t.charAt(w + 1)) {
                                        case "/":
                                            var D = t.indexOf(">", w + 3),
                                                x = t.substring(w + 2, D).replace(/[ \t\n\r]+$/g, ""),
                                                S = y.pop();
                                            D < 0 ? (x = t.substring(w + 2).replace(/[\s<].*/, ""), s.error("end tag name: " + x + " is not complete:" + S.tagName), D = w + 1 + x.length) : x.match(/\s</) && (x = x.replace(/[\s<].*/, ""), s.error("end tag name: " + x + " maybe not complete"), D = w + 1 + x.length);
                                            var A = S.localNSMap,
                                                P = S.tagName == x;
                                            if (P || S.tagName && S.tagName.toLowerCase() == x.toLowerCase()) {
                                                if (i.endElement(S.uri, S.localName, x), A)
                                                    for (var R in A) Object.prototype.hasOwnProperty.call(A, R) && i.endPrefixMapping(R);
                                                P || s.fatalError("end tag name: " + x + " is not match the current start tagName:" + S.tagName)
                                            } else y.push(S);
                                            D++;
                                            break;
                                        case "?":
                                            g && h(w), D = function(t, e, r) {
                                                var n = t.indexOf("?>", e);
                                                if (n) {
                                                    var i = t.substring(e, n).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
                                                    if (i) return i[0].length, r.processingInstruction(i[1], i[2]), n + 2
                                                }
                                                return -1
                                            }(t, w, i);
                                            break;
                                        case "!":
                                            g && h(w), D = function(t, e, r, n) {
                                                if ("-" === t.charAt(e + 2)) {
                                                    if ("-" === t.charAt(e + 3)) {
                                                        var i = t.indexOf("-->", e + 4);
                                                        if (i > e) return r.comment(t, e + 4, i - e - 4), i + 3;
                                                        n.error("Unclosed comment")
                                                    }
                                                } else {
                                                    if ("CDATA[" == t.substr(e + 3, 6)) {
                                                        var i = t.indexOf("]]>", e + 9);
                                                        return r.startCDATA(), r.characters(t, e + 9, i - e - 9), r.endCDATA(), i + 3
                                                    }
                                                    var s = function(t, e) {
                                                            var r, n = [],
                                                                i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                                                            for (i.lastIndex = e, i.exec(t); r = i.exec(t);)
                                                                if (n.push(r), r[1]) return n
                                                        }(t, e),
                                                        o = s.length;
                                                    if (o > 1 && /!doctype/i.test(s[0][0])) {
                                                        var a = s[1][0],
                                                            u = !1,
                                                            l = !1;
                                                        o > 3 && (/^public$/i.test(s[2][0]) ? (u = s[3][0], l = o > 4 && s[4][0]) : /^system$/i.test(s[2][0]) && (l = s[3][0]));
                                                        var c = s[o - 1];
                                                        return r.startDTD(a, u, l), r.endDTD(), c.index + c[0].length
                                                    }
                                                }
                                                return -1
                                            }(t, w, i, s);
                                            break;
                                        default:
                                            g && h(w);
                                            var C = new f,
                                                N = y[y.length - 1].currentNSMap,
                                                D = function(t, e, r, i, s, o) {
                                                    function a(t, e, n) {
                                                        r.attributeNames.hasOwnProperty(t) && o.fatalError("Attribute " + t + " redefined"), r.addValue(t, e.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, s), n)
                                                    }
                                                    for (var u, l, c = ++e, h = 0;;) {
                                                        var f = t.charAt(c);
                                                        switch (f) {
                                                            case "=":
                                                                if (1 === h) u = t.slice(e, c), h = 3;
                                                                else if (2 === h) h = 3;
                                                                else throw Error("attribute equal must after attrName");
                                                                break;
                                                            case "'":
                                                            case '"':
                                                                if (3 === h || 1 === h) {
                                                                    if (1 === h && (o.warning('attribute value must after "="'), u = t.slice(e, c)), e = c + 1, (c = t.indexOf(f, e)) > 0) a(u, l = t.slice(e, c), e - 1), h = 5;
                                                                    else throw Error("attribute value no end '" + f + "' match")
                                                                } else if (4 == h) a(u, l = t.slice(e, c), e), o.warning('attribute "' + u + '" missed start quot(' + f + ")!!"), e = c + 1, h = 5;
                                                                else throw Error('attribute value must after "="');
                                                                break;
                                                            case "/":
                                                                switch (h) {
                                                                    case 0:
                                                                        r.setTagName(t.slice(e, c));
                                                                    case 5:
                                                                    case 6:
                                                                    case 7:
                                                                        h = 7, r.closed = !0;
                                                                    case 4:
                                                                    case 1:
                                                                        break;
                                                                    case 2:
                                                                        r.closed = !0;
                                                                        break;
                                                                    default:
                                                                        throw Error("attribute invalid close char('/')")
                                                                }
                                                                break;
                                                            case "":
                                                                return o.error("unexpected end of input"), 0 == h && r.setTagName(t.slice(e, c)), c;
                                                            case ">":
                                                                switch (h) {
                                                                    case 0:
                                                                        r.setTagName(t.slice(e, c));
                                                                    case 5:
                                                                    case 6:
                                                                    case 7:
                                                                        break;
                                                                    case 4:
                                                                    case 1:
                                                                        "/" === (l = t.slice(e, c)).slice(-1) && (r.closed = !0, l = l.slice(0, -1));
                                                                    case 2:
                                                                        2 === h && (l = u), 4 == h ? (o.warning('attribute "' + l + '" missed quot(")!'), a(u, l, e)) : (n.isHTML(i[""]) && l.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + l + '" missed value!! "' + l + '" instead!!'), a(l, l, e));
                                                                        break;
                                                                    case 3:
                                                                        throw Error("attribute value missed!!")
                                                                }
                                                                return c;
                                                            case "\x80":
                                                                f = " ";
                                                            default:
                                                                if (f <= " ") switch (h) {
                                                                    case 0:
                                                                        r.setTagName(t.slice(e, c)), h = 6;
                                                                        break;
                                                                    case 1:
                                                                        u = t.slice(e, c), h = 2;
                                                                        break;
                                                                    case 4:
                                                                        var l = t.slice(e, c);
                                                                        o.warning('attribute "' + l + '" missed quot(")!!'), a(u, l, e);
                                                                    case 5:
                                                                        h = 6
                                                                } else switch (h) {
                                                                    case 2:
                                                                        r.tagName, n.isHTML(i[""]) && u.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + u + '" missed value!! "' + u + '" instead2!!'), a(u, u, e), e = c, h = 1;
                                                                        break;
                                                                    case 5:
                                                                        o.warning('attribute space is required"' + u + '"!!');
                                                                    case 6:
                                                                        h = 1, e = c;
                                                                        break;
                                                                    case 3:
                                                                        h = 4, e = c;
                                                                        break;
                                                                    case 7:
                                                                        throw Error("elements closed character '/' and '>' must be connected to")
                                                                }
                                                        }
                                                        c++
                                                    }
                                                }(t, w, C, N, o, s),
                                                O = C.length;
                                            if (!C.closed && function(t, e, r, n) {
                                                    var i = n[r];
                                                    return null == i && ((i = t.lastIndexOf("</" + r + ">")) < e && (i = t.lastIndexOf("</" + r)), n[r] = i), i < e
                                                }(t, D, C.tagName, v) && (C.closed = !0, r.nbsp || s.warning("unclosed xml attribute")), g && O) {
                                                for (var I = l(g, {}), L = 0; L < O; L++) {
                                                    var M = C[L];
                                                    h(M.offset), M.locator = l(g, {})
                                                }
                                                i.locator = I, c(C, i, N) && y.push(C), i.locator = g
                                            } else c(C, i, N) && y.push(C);
                                            n.isHTML(C.uri) && !C.closed ? D = function(t, e, r, n, i) {
                                                if (/^(?:script|textarea)$/i.test(r)) {
                                                    var s = t.indexOf("</" + r + ">", e),
                                                        o = t.substring(e + 1, s);
                                                    if (/[&<]/.test(o)) return /^script$/i.test(r) || (o = o.replace(/&#?\w+;/g, n)), i.characters(o, 0, o.length), s
                                                }
                                                return e + 1
                                            }(t, D, C.tagName, o, i) : D++
                                    }
                                } catch (t) {
                                    if (t instanceof a) throw t;
                                    s.error("element parse error: " + t), D = -1
                                }
                                D > b ? b = D : u(Math.max(w, b) + 1)
                            }
                        }(t, e, r, i, this.errorHandler), i.endDocument()
                }
            }, f.prototype = {
                setTagName: function(t) {
                    if (!o.test(t)) throw Error("invalid tagName:" + t);
                    this.tagName = t
                },
                addValue: function(t, e, r) {
                    if (!o.test(t)) throw Error("invalid attribute:" + t);
                    this.attributeNames[t] = this.length, this[this.length++] = {
                        qName: t,
                        value: e,
                        offset: r
                    }
                },
                length: 0,
                getLocalName: function(t) {
                    return this[t].localName
                },
                getLocator: function(t) {
                    return this[t].locator
                },
                getQName: function(t) {
                    return this[t].qName
                },
                getURI: function(t) {
                    return this[t].uri
                },
                getValue: function(t) {
                    return this[t].value
                }
            }, e.XMLReader = u, e.ParseError = a
        },
        7075: function(t, e, r) {
            var n, i = void 0 !== r.g ? r.g : "undefined" != typeof window ? window : {},
                s = r(2938);
            "undefined" != typeof document ? n = document : (n = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (n = i["__GLOBAL_DOCUMENT_CACHE@4"] = s), t.exports = n
        },
        289: function(t, e, r) {
            var n;
            "undefined" != typeof window ? n = window : void 0 !== r.g ? n = r.g : "undefined" != typeof self ? n = self : n = {}, t.exports = n
        },
        6671: function(t) {
            t.exports = function(t) {
                if (!t) return !1;
                var r = e.call(t);
                return "[object Function]" === r || "function" == typeof t && "[object RegExp]" !== r || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
            };
            var e = Object.prototype.toString
        },
        8724: function(t, e) {
            function r(t) {
                if (t && "object" == typeof t) {
                    var e = t.which || t.keyCode || t.charCode;
                    e && (t = e)
                }
                if ("number" == typeof t) return o[t];
                var r = String(t),
                    s = n[r.toLowerCase()];
                if (s) return s;
                var s = i[r.toLowerCase()];
                return s || (1 === r.length ? r.charCodeAt(0) : void 0)
            }
            r.isEventKey = function(t, e) {
                if (t && "object" == typeof t) {
                    var r = t.which || t.keyCode || t.charCode;
                    if (null == r) return !1;
                    if ("string" == typeof e) {
                        var s = n[e.toLowerCase()];
                        if (s) return s === r;
                        var s = i[e.toLowerCase()];
                        if (s) return s === r
                    } else if ("number" == typeof e) return e === r;
                    return !1
                }
            };
            var n = (e = t.exports = r).code = e.codes = {
                    backspace: 8,
                    tab: 9,
                    enter: 13,
                    shift: 16,
                    ctrl: 17,
                    alt: 18,
                    "pause/break": 19,
                    "caps lock": 20,
                    esc: 27,
                    space: 32,
                    "page up": 33,
                    "page down": 34,
                    end: 35,
                    home: 36,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    insert: 45,
                    delete: 46,
                    command: 91,
                    "left command": 91,
                    "right command": 93,
                    "numpad *": 106,
                    "numpad +": 107,
                    "numpad -": 109,
                    "numpad .": 110,
                    "numpad /": 111,
                    "num lock": 144,
                    "scroll lock": 145,
                    "my computer": 182,
                    "my calculator": 183,
                    ";": 186,
                    "=": 187,
                    ",": 188,
                    "-": 189,
                    ".": 190,
                    "/": 191,
                    "`": 192,
                    "[": 219,
                    "\\": 220,
                    "]": 221,
                    "'": 222
                },
                i = e.aliases = {
                    windows: 91,
                    "⇧": 16,
                    "⌥": 18,
                    "⌃": 17,
                    "⌘": 91,
                    ctl: 17,
                    control: 17,
                    option: 18,
                    pause: 19,
                    break: 19,
                    caps: 20,
                    return: 13,
                    escape: 27,
                    spc: 32,
                    spacebar: 32,
                    pgup: 33,
                    pgdn: 34,
                    ins: 45,
                    del: 46,
                    cmd: 91
                };
            for (s = 97; s < 123; s++) n[String.fromCharCode(s)] = s - 32;
            for (var s = 48; s < 58; s++) n[s - 48] = s;
            for (s = 1; s < 13; s++) n["f" + s] = s + 111;
            for (s = 0; s < 10; s++) n["numpad " + s] = s + 96;
            var o = e.names = e.title = {};
            for (s in n) o[n[s]] = s;
            for (var a in i) n[a] = i[a]
        },
        9272: function(t, e, r) {
            "use strict";
            r.d(e, {
                _b: function() {
                    return m
                }
            });
            var n = function() {
                    function t() {
                        this.listeners = {}
                    }
                    var e = t.prototype;
                    return e.on = function(t, e) {
                        this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e)
                    }, e.off = function(t, e) {
                        if (!this.listeners[t]) return !1;
                        var r = this.listeners[t].indexOf(e);
                        return this.listeners[t] = this.listeners[t].slice(0), this.listeners[t].splice(r, 1), r > -1
                    }, e.trigger = function(t) {
                        var e = this.listeners[t];
                        if (e) {
                            if (2 == arguments.length)
                                for (var r = e.length, n = 0; n < r; ++n) e[n].call(this, arguments[1]);
                            else
                                for (var i = Array.prototype.slice.call(arguments, 1), s = e.length, o = 0; o < s; ++o) e[o].apply(this, i)
                        }
                    }, e.dispose = function() {
                        this.listeners = {}
                    }, e.pipe = function(t) {
                        this.on("data", function(e) {
                            t.push(e)
                        })
                    }, t
                }(),
                i = r(2073),
                s = r(289),
                o = r.n(s),
                a = r(2599).Buffer;
            class u extends n {
                constructor() {
                    super(), this.buffer = ""
                }
                push(t) {
                    let e;
                    for (this.buffer += t, e = this.buffer.indexOf("\n"); e > -1; e = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, e)), this.buffer = this.buffer.substring(e + 1)
                }
            }
            let l = function(t) {
                    let e = /([0-9.]*)?@?([0-9.]*)?/.exec(t || ""),
                        r = {};
                    return e[1] && (r.length = parseInt(e[1], 10)), e[2] && (r.offset = parseInt(e[2], 10)), r
                },
                c = function(t) {
                    let e;
                    let r = {};
                    if (!t) return r;
                    let n = t.split(RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')),
                        i = n.length;
                    for (; i--;) "" !== n[i] && ((e = /([^=]*)=(.*)/.exec(n[i]).slice(1))[0] = e[0].replace(/^\s+|\s+$/g, ""), e[1] = e[1].replace(/^\s+|\s+$/g, ""), e[1] = e[1].replace(/^['"](.*)['"]$/g, "$1"), r[e[0]] = e[1]);
                    return r
                };
            class h extends n {
                constructor() {
                    super(), this.customParsers = [], this.tagMappers = []
                }
                push(t) {
                    let e, r;
                    if (0 !== (t = t.trim()).length) {
                        if ("#" !== t[0]) {
                            this.trigger("data", {
                                type: "uri",
                                uri: t
                            });
                            return
                        }
                        this.tagMappers.reduce((e, r) => {
                            let n = r(t);
                            return n === t ? e : e.concat([n])
                        }, [t]).forEach(t => {
                            for (let e = 0; e < this.customParsers.length; e++)
                                if (this.customParsers[e].call(this, t)) return;
                            if (0 !== t.indexOf("#EXT")) {
                                this.trigger("data", {
                                    type: "comment",
                                    text: t.slice(1)
                                });
                                return
                            }
                            if (t = t.replace("\r", ""), e = /^#EXTM3U/.exec(t)) {
                                this.trigger("data", {
                                    type: "tag",
                                    tagType: "m3u"
                                });
                                return
                            }
                            if (e = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(t)) {
                                r = {
                                    type: "tag",
                                    tagType: "inf"
                                }, e[1] && (r.duration = parseFloat(e[1])), e[2] && (r.title = e[2]), this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(t)) {
                                r = {
                                    type: "tag",
                                    tagType: "targetduration"
                                }, e[1] && (r.duration = parseInt(e[1], 10)), this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-VERSION:([0-9.]*)?/.exec(t)) {
                                r = {
                                    type: "tag",
                                    tagType: "version"
                                }, e[1] && (r.version = parseInt(e[1], 10)), this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(t)) {
                                r = {
                                    type: "tag",
                                    tagType: "media-sequence"
                                }, e[1] && (r.number = parseInt(e[1], 10)), this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(t)) {
                                r = {
                                    type: "tag",
                                    tagType: "discontinuity-sequence"
                                }, e[1] && (r.number = parseInt(e[1], 10)), this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(t)) {
                                r = {
                                    type: "tag",
                                    tagType: "playlist-type"
                                }, e[1] && (r.playlistType = e[1]), this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-BYTERANGE:(.*)?$/.exec(t)) {
                                r = (0, i.Z)(l(e[1]), {
                                    type: "tag",
                                    tagType: "byterange"
                                }), this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(t)) {
                                r = {
                                    type: "tag",
                                    tagType: "allow-cache"
                                }, e[1] && (r.allowed = !/NO/.test(e[1])), this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-MAP:(.*)$/.exec(t)) {
                                if (r = {
                                        type: "tag",
                                        tagType: "map"
                                    }, e[1]) {
                                    let t = c(e[1]);
                                    t.URI && (r.uri = t.URI), t.BYTERANGE && (r.byterange = l(t.BYTERANGE))
                                }
                                this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-STREAM-INF:(.*)$/.exec(t)) {
                                if (r = {
                                        type: "tag",
                                        tagType: "stream-inf"
                                    }, e[1]) {
                                    if (r.attributes = c(e[1]), r.attributes.RESOLUTION) {
                                        let t = r.attributes.RESOLUTION.split("x"),
                                            e = {};
                                        t[0] && (e.width = parseInt(t[0], 10)), t[1] && (e.height = parseInt(t[1], 10)), r.attributes.RESOLUTION = e
                                    }
                                    r.attributes.BANDWIDTH && (r.attributes.BANDWIDTH = parseInt(r.attributes.BANDWIDTH, 10)), r.attributes["FRAME-RATE"] && (r.attributes["FRAME-RATE"] = parseFloat(r.attributes["FRAME-RATE"])), r.attributes["PROGRAM-ID"] && (r.attributes["PROGRAM-ID"] = parseInt(r.attributes["PROGRAM-ID"], 10))
                                }
                                this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-MEDIA:(.*)$/.exec(t)) {
                                r = {
                                    type: "tag",
                                    tagType: "media"
                                }, e[1] && (r.attributes = c(e[1])), this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-ENDLIST/.exec(t)) {
                                this.trigger("data", {
                                    type: "tag",
                                    tagType: "endlist"
                                });
                                return
                            }
                            if (e = /^#EXT-X-DISCONTINUITY/.exec(t)) {
                                this.trigger("data", {
                                    type: "tag",
                                    tagType: "discontinuity"
                                });
                                return
                            }
                            if (e = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(t)) {
                                r = {
                                    type: "tag",
                                    tagType: "program-date-time"
                                }, e[1] && (r.dateTimeString = e[1], r.dateTimeObject = new Date(e[1])), this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-KEY:(.*)$/.exec(t)) {
                                r = {
                                    type: "tag",
                                    tagType: "key"
                                }, e[1] && (r.attributes = c(e[1]), r.attributes.IV && ("0x" === r.attributes.IV.substring(0, 2).toLowerCase() && (r.attributes.IV = r.attributes.IV.substring(2)), r.attributes.IV = r.attributes.IV.match(/.{8}/g), r.attributes.IV[0] = parseInt(r.attributes.IV[0], 16), r.attributes.IV[1] = parseInt(r.attributes.IV[1], 16), r.attributes.IV[2] = parseInt(r.attributes.IV[2], 16), r.attributes.IV[3] = parseInt(r.attributes.IV[3], 16), r.attributes.IV = new Uint32Array(r.attributes.IV))), this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-START:(.*)$/.exec(t)) {
                                r = {
                                    type: "tag",
                                    tagType: "start"
                                }, e[1] && (r.attributes = c(e[1]), r.attributes["TIME-OFFSET"] = parseFloat(r.attributes["TIME-OFFSET"]), r.attributes.PRECISE = /YES/.test(r.attributes.PRECISE)), this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(t)) {
                                r = {
                                    type: "tag",
                                    tagType: "cue-out-cont"
                                }, e[1] ? r.data = e[1] : r.data = "", this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-CUE-OUT:(.*)?$/.exec(t)) {
                                r = {
                                    type: "tag",
                                    tagType: "cue-out"
                                }, e[1] ? r.data = e[1] : r.data = "", this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-CUE-IN:(.*)?$/.exec(t)) {
                                r = {
                                    type: "tag",
                                    tagType: "cue-in"
                                }, e[1] ? r.data = e[1] : r.data = "", this.trigger("data", r);
                                return
                            }
                            if ((e = /^#EXT-X-SKIP:(.*)$/.exec(t)) && e[1]) {
                                (r = {
                                    type: "tag",
                                    tagType: "skip"
                                }).attributes = c(e[1]), r.attributes.hasOwnProperty("SKIPPED-SEGMENTS") && (r.attributes["SKIPPED-SEGMENTS"] = parseInt(r.attributes["SKIPPED-SEGMENTS"], 10)), r.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") && (r.attributes["RECENTLY-REMOVED-DATERANGES"] = r.attributes["RECENTLY-REMOVED-DATERANGES"].split("	")), this.trigger("data", r);
                                return
                            }
                            if ((e = /^#EXT-X-PART:(.*)$/.exec(t)) && e[1]) {
                                (r = {
                                    type: "tag",
                                    tagType: "part"
                                }).attributes = c(e[1]), ["DURATION"].forEach(function(t) {
                                    r.attributes.hasOwnProperty(t) && (r.attributes[t] = parseFloat(r.attributes[t]))
                                }), ["INDEPENDENT", "GAP"].forEach(function(t) {
                                    r.attributes.hasOwnProperty(t) && (r.attributes[t] = /YES/.test(r.attributes[t]))
                                }), r.attributes.hasOwnProperty("BYTERANGE") && (r.attributes.byterange = l(r.attributes.BYTERANGE)), this.trigger("data", r);
                                return
                            }
                            if ((e = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(t)) && e[1]) {
                                (r = {
                                    type: "tag",
                                    tagType: "server-control"
                                }).attributes = c(e[1]), ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(function(t) {
                                    r.attributes.hasOwnProperty(t) && (r.attributes[t] = parseFloat(r.attributes[t]))
                                }), ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function(t) {
                                    r.attributes.hasOwnProperty(t) && (r.attributes[t] = /YES/.test(r.attributes[t]))
                                }), this.trigger("data", r);
                                return
                            }
                            if ((e = /^#EXT-X-PART-INF:(.*)$/.exec(t)) && e[1]) {
                                (r = {
                                    type: "tag",
                                    tagType: "part-inf"
                                }).attributes = c(e[1]), ["PART-TARGET"].forEach(function(t) {
                                    r.attributes.hasOwnProperty(t) && (r.attributes[t] = parseFloat(r.attributes[t]))
                                }), this.trigger("data", r);
                                return
                            }
                            if ((e = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(t)) && e[1]) {
                                (r = {
                                    type: "tag",
                                    tagType: "preload-hint"
                                }).attributes = c(e[1]), ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function(t) {
                                    if (r.attributes.hasOwnProperty(t)) {
                                        r.attributes[t] = parseInt(r.attributes[t], 10);
                                        let e = "BYTERANGE-LENGTH" === t ? "length" : "offset";
                                        r.attributes.byterange = r.attributes.byterange || {}, r.attributes.byterange[e] = r.attributes[t], delete r.attributes[t]
                                    }
                                }), this.trigger("data", r);
                                return
                            }
                            if ((e = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(t)) && e[1]) {
                                (r = {
                                    type: "tag",
                                    tagType: "rendition-report"
                                }).attributes = c(e[1]), ["LAST-MSN", "LAST-PART"].forEach(function(t) {
                                    r.attributes.hasOwnProperty(t) && (r.attributes[t] = parseInt(r.attributes[t], 10))
                                }), this.trigger("data", r);
                                return
                            }
                            if ((e = /^#EXT-X-DATERANGE:(.*)$/.exec(t)) && e[1]) {
                                (r = {
                                    type: "tag",
                                    tagType: "daterange"
                                }).attributes = c(e[1]), ["ID", "CLASS"].forEach(function(t) {
                                    r.attributes.hasOwnProperty(t) && (r.attributes[t] = String(r.attributes[t]))
                                }), ["START-DATE", "END-DATE"].forEach(function(t) {
                                    r.attributes.hasOwnProperty(t) && (r.attributes[t] = new Date(r.attributes[t]))
                                }), ["DURATION", "PLANNED-DURATION"].forEach(function(t) {
                                    r.attributes.hasOwnProperty(t) && (r.attributes[t] = parseFloat(r.attributes[t]))
                                }), ["END-ON-NEXT"].forEach(function(t) {
                                    r.attributes.hasOwnProperty(t) && (r.attributes[t] = /YES/i.test(r.attributes[t]))
                                }), ["SCTE35-CMD", " SCTE35-OUT", "SCTE35-IN"].forEach(function(t) {
                                    r.attributes.hasOwnProperty(t) && (r.attributes[t] = r.attributes[t].toString(16))
                                });
                                let t = /^X-([A-Z]+-)+[A-Z]+$/;
                                for (let e in r.attributes) {
                                    if (!t.test(e)) continue;
                                    let n = /[0-9A-Fa-f]{6}/g.test(r.attributes[e]),
                                        i = /^\d+(\.\d+)?$/.test(r.attributes[e]);
                                    r.attributes[e] = n ? r.attributes[e].toString(16) : i ? parseFloat(r.attributes[e]) : String(r.attributes[e])
                                }
                                this.trigger("data", r);
                                return
                            }
                            if (e = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(t)) {
                                this.trigger("data", {
                                    type: "tag",
                                    tagType: "independent-segments"
                                });
                                return
                            }
                            if (e = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(t)) {
                                (r = {
                                    type: "tag",
                                    tagType: "content-steering"
                                }).attributes = c(e[1]), this.trigger("data", r);
                                return
                            }
                            this.trigger("data", {
                                type: "tag",
                                data: t.slice(4)
                            })
                        })
                    }
                }
                addParser({
                    expression: t,
                    customType: e,
                    dataParser: r,
                    segment: n
                }) {
                    "function" != typeof r && (r = t => t), this.customParsers.push(i => {
                        if (t.exec(i)) return this.trigger("data", {
                            type: "custom",
                            data: r(i),
                            customType: e,
                            segment: n
                        }), !0
                    })
                }
                addTagMapper({
                    expression: t,
                    map: e
                }) {
                    this.tagMappers.push(r => t.test(r) ? e(r) : r)
                }
            }
            let f = t => t.toLowerCase().replace(/-(\w)/g, t => t[1].toUpperCase()),
                d = function(t) {
                    let e = {};
                    return Object.keys(t).forEach(function(r) {
                        e[f(r)] = t[r]
                    }), e
                },
                p = function(t) {
                    let {
                        serverControl: e,
                        targetDuration: r,
                        partTargetDuration: n
                    } = t;
                    if (!e) return;
                    let i = "#EXT-X-SERVER-CONTROL",
                        s = "holdBack",
                        o = "partHoldBack",
                        a = r && 3 * r,
                        u = n && 2 * n;
                    r && !e.hasOwnProperty(s) && (e[s] = a, this.trigger("info", {
                        message: `${i} defaulting HOLD-BACK to targetDuration * 3 (${a}).`
                    })), a && e[s] < a && (this.trigger("warn", {
                        message: `${i} clamping HOLD-BACK (${e[s]}) to targetDuration * 3 (${a})`
                    }), e[s] = a), n && !e.hasOwnProperty(o) && (e[o] = 3 * n, this.trigger("info", {
                        message: `${i} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${e[o]}).`
                    })), n && e[o] < u && (this.trigger("warn", {
                        message: `${i} clamping PART-HOLD-BACK (${e[o]}) to partTargetDuration * 2 (${u}).`
                    }), e[o] = u)
                };
            class m extends n {
                constructor() {
                    let t, e;
                    super(), this.lineStream = new u, this.parseStream = new h, this.lineStream.pipe(this.parseStream), this.lastProgramDateTime = null;
                    let r = this,
                        n = [],
                        s = {},
                        l = !1,
                        c = function() {},
                        f = {
                            AUDIO: {},
                            VIDEO: {},
                            "CLOSED-CAPTIONS": {},
                            SUBTITLES: {}
                        },
                        m = 0;
                    this.manifest = {
                        allowCache: !0,
                        discontinuityStarts: [],
                        dateRanges: [],
                        segments: []
                    };
                    let g = 0,
                        y = 0,
                        v = {};
                    this.on("end", () => {
                        !s.uri && (s.parts || s.preloadHints) && (!s.map && t && (s.map = t), !s.key && e && (s.key = e), s.timeline || "number" != typeof m || (s.timeline = m), this.manifest.preloadSegment = s)
                    }), this.parseStream.on("data", function(u) {
                        let h, b;
                        ({
                            tag() {
                                (({
                                    version() {
                                        u.version && (this.manifest.version = u.version)
                                    },
                                    "allow-cache" () {
                                        this.manifest.allowCache = u.allowed, "allowed" in u || (this.trigger("info", {
                                            message: "defaulting allowCache to YES"
                                        }), this.manifest.allowCache = !0)
                                    },
                                    byterange() {
                                        let t = {};
                                        "length" in u && (s.byterange = t, t.length = u.length, "offset" in u || (u.offset = g)), "offset" in u && (s.byterange = t, t.offset = u.offset), g = t.offset + t.length
                                    },
                                    endlist() {
                                        this.manifest.endList = !0
                                    },
                                    inf() {
                                        "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {
                                            message: "defaulting media sequence to zero"
                                        })), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {
                                            message: "defaulting discontinuity sequence to zero"
                                        })), u.title && (s.title = u.title), u.duration > 0 && (s.duration = u.duration), 0 === u.duration && (s.duration = .01, this.trigger("info", {
                                            message: "updating zero segment duration to a small value"
                                        })), this.manifest.segments = n
                                    },
                                    key() {
                                        if (!u.attributes) {
                                            this.trigger("warn", {
                                                message: "ignoring key declaration without attribute list"
                                            });
                                            return
                                        }
                                        if ("NONE" === u.attributes.METHOD) {
                                            e = null;
                                            return
                                        }
                                        if (!u.attributes.URI) {
                                            this.trigger("warn", {
                                                message: "ignoring key declaration without URI"
                                            });
                                            return
                                        }
                                        if ("com.apple.streamingkeydelivery" === u.attributes.KEYFORMAT) {
                                            this.manifest.contentProtection = this.manifest.contentProtection || {}, this.manifest.contentProtection["com.apple.fps.1_0"] = {
                                                attributes: u.attributes
                                            };
                                            return
                                        }
                                        if ("com.microsoft.playready" === u.attributes.KEYFORMAT) {
                                            this.manifest.contentProtection = this.manifest.contentProtection || {}, this.manifest.contentProtection["com.microsoft.playready"] = {
                                                uri: u.attributes.URI
                                            };
                                            return
                                        }
                                        if ("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" === u.attributes.KEYFORMAT) {
                                            if (-1 === ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(u.attributes.METHOD)) {
                                                this.trigger("warn", {
                                                    message: "invalid key method provided for Widevine"
                                                });
                                                return
                                            }
                                            if ("SAMPLE-AES-CENC" === u.attributes.METHOD && this.trigger("warn", {
                                                    message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"
                                                }), "data:text/plain;base64," !== u.attributes.URI.substring(0, 23)) {
                                                this.trigger("warn", {
                                                    message: "invalid key URI provided for Widevine"
                                                });
                                                return
                                            }
                                            if (!(u.attributes.KEYID && "0x" === u.attributes.KEYID.substring(0, 2))) {
                                                this.trigger("warn", {
                                                    message: "invalid key ID provided for Widevine"
                                                });
                                                return
                                            }
                                            this.manifest.contentProtection = this.manifest.contentProtection || {}, this.manifest.contentProtection["com.widevine.alpha"] = {
                                                attributes: {
                                                    schemeIdUri: u.attributes.KEYFORMAT,
                                                    keyId: u.attributes.KEYID.substring(2)
                                                },
                                                pssh: function(t) {
                                                    for (var e = o().atob ? o().atob(t) : a.from(t, "base64").toString("binary"), r = new Uint8Array(e.length), n = 0; n < e.length; n++) r[n] = e.charCodeAt(n);
                                                    return r
                                                }(u.attributes.URI.split(",")[1])
                                            };
                                            return
                                        }
                                        u.attributes.METHOD || this.trigger("warn", {
                                            message: "defaulting key method to AES-128"
                                        }), e = {
                                            method: u.attributes.METHOD || "AES-128",
                                            uri: u.attributes.URI
                                        }, void 0 !== u.attributes.IV && (e.iv = u.attributes.IV)
                                    },
                                    "media-sequence" () {
                                        if (!isFinite(u.number)) {
                                            this.trigger("warn", {
                                                message: "ignoring invalid media sequence: " + u.number
                                            });
                                            return
                                        }
                                        this.manifest.mediaSequence = u.number
                                    },
                                    "discontinuity-sequence" () {
                                        if (!isFinite(u.number)) {
                                            this.trigger("warn", {
                                                message: "ignoring invalid discontinuity sequence: " + u.number
                                            });
                                            return
                                        }
                                        this.manifest.discontinuitySequence = u.number, m = u.number
                                    },
                                    "playlist-type" () {
                                        if (!/VOD|EVENT/.test(u.playlistType)) {
                                            this.trigger("warn", {
                                                message: "ignoring unknown playlist type: " + u.playlist
                                            });
                                            return
                                        }
                                        this.manifest.playlistType = u.playlistType
                                    },
                                    map() {
                                        t = {}, u.uri && (t.uri = u.uri), u.byterange && (t.byterange = u.byterange), e && (t.key = e)
                                    },
                                    "stream-inf" () {
                                        if (this.manifest.playlists = n, this.manifest.mediaGroups = this.manifest.mediaGroups || f, !u.attributes) {
                                            this.trigger("warn", {
                                                message: "ignoring empty stream-inf attributes"
                                            });
                                            return
                                        }
                                        s.attributes || (s.attributes = {}), (0, i.Z)(s.attributes, u.attributes)
                                    },
                                    media() {
                                        if (this.manifest.mediaGroups = this.manifest.mediaGroups || f, !(u.attributes && u.attributes.TYPE && u.attributes["GROUP-ID"] && u.attributes.NAME)) {
                                            this.trigger("warn", {
                                                message: "ignoring incomplete or missing media group"
                                            });
                                            return
                                        }
                                        let t = this.manifest.mediaGroups[u.attributes.TYPE];
                                        t[u.attributes["GROUP-ID"]] = t[u.attributes["GROUP-ID"]] || {}, h = t[u.attributes["GROUP-ID"]], (b = {
                                            default: /yes/i.test(u.attributes.DEFAULT)
                                        }).default ? b.autoselect = !0 : b.autoselect = /yes/i.test(u.attributes.AUTOSELECT), u.attributes.LANGUAGE && (b.language = u.attributes.LANGUAGE), u.attributes.URI && (b.uri = u.attributes.URI), u.attributes["INSTREAM-ID"] && (b.instreamId = u.attributes["INSTREAM-ID"]), u.attributes.CHARACTERISTICS && (b.characteristics = u.attributes.CHARACTERISTICS), u.attributes.FORCED && (b.forced = /yes/i.test(u.attributes.FORCED)), h[u.attributes.NAME] = b
                                    },
                                    discontinuity() {
                                        m += 1, s.discontinuity = !0, this.manifest.discontinuityStarts.push(n.length)
                                    },
                                    "program-date-time" () {
                                        void 0 === this.manifest.dateTimeString && (this.manifest.dateTimeString = u.dateTimeString, this.manifest.dateTimeObject = u.dateTimeObject), s.dateTimeString = u.dateTimeString, s.dateTimeObject = u.dateTimeObject;
                                        let {
                                            lastProgramDateTime: t
                                        } = this;
                                        this.lastProgramDateTime = new Date(u.dateTimeString).getTime(), null === t && this.manifest.segments.reduceRight((t, e) => (e.programDateTime = t - 1e3 * e.duration, e.programDateTime), this.lastProgramDateTime)
                                    },
                                    targetduration() {
                                        if (!isFinite(u.duration) || u.duration < 0) {
                                            this.trigger("warn", {
                                                message: "ignoring invalid target duration: " + u.duration
                                            });
                                            return
                                        }
                                        this.manifest.targetDuration = u.duration, p.call(this, this.manifest)
                                    },
                                    start() {
                                        if (!u.attributes || isNaN(u.attributes["TIME-OFFSET"])) {
                                            this.trigger("warn", {
                                                message: "ignoring start declaration without appropriate attribute list"
                                            });
                                            return
                                        }
                                        this.manifest.start = {
                                            timeOffset: u.attributes["TIME-OFFSET"],
                                            precise: u.attributes.PRECISE
                                        }
                                    },
                                    "cue-out" () {
                                        s.cueOut = u.data
                                    },
                                    "cue-out-cont" () {
                                        s.cueOutCont = u.data
                                    },
                                    "cue-in" () {
                                        s.cueIn = u.data
                                    },
                                    skip() {
                                        this.manifest.skip = d(u.attributes), this.warnOnMissingAttributes_("#EXT-X-SKIP", u.attributes, ["SKIPPED-SEGMENTS"])
                                    },
                                    part() {
                                        l = !0;
                                        let t = this.manifest.segments.length,
                                            e = d(u.attributes);
                                        s.parts = s.parts || [], s.parts.push(e), e.byterange && (e.byterange.hasOwnProperty("offset") || (e.byterange.offset = y), y = e.byterange.offset + e.byterange.length);
                                        let r = s.parts.length - 1;
                                        this.warnOnMissingAttributes_(`#EXT-X-PART #${r} for segment #${t}`, u.attributes, ["URI", "DURATION"]), this.manifest.renditionReports && this.manifest.renditionReports.forEach((t, e) => {
                                            t.hasOwnProperty("lastPart") || this.trigger("warn", {
                                                message: `#EXT-X-RENDITION-REPORT #${e} lacks required attribute(s): LAST-PART`
                                            })
                                        })
                                    },
                                    "server-control" () {
                                        let t = this.manifest.serverControl = d(u.attributes);
                                        t.hasOwnProperty("canBlockReload") || (t.canBlockReload = !1, this.trigger("info", {
                                            message: "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false"
                                        })), p.call(this, this.manifest), t.canSkipDateranges && !t.hasOwnProperty("canSkipUntil") && this.trigger("warn", {
                                            message: "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set"
                                        })
                                    },
                                    "preload-hint" () {
                                        let t = this.manifest.segments.length,
                                            e = d(u.attributes),
                                            r = e.type && "PART" === e.type;
                                        s.preloadHints = s.preloadHints || [], s.preloadHints.push(e), e.byterange && !e.byterange.hasOwnProperty("offset") && (e.byterange.offset = r ? y : 0, r && (y = e.byterange.offset + e.byterange.length));
                                        let n = s.preloadHints.length - 1;
                                        if (this.warnOnMissingAttributes_(`#EXT-X-PRELOAD-HINT #${n} for segment #${t}`, u.attributes, ["TYPE", "URI"]), e.type)
                                            for (let r = 0; r < s.preloadHints.length - 1; r++) {
                                                let i = s.preloadHints[r];
                                                i.type && i.type === e.type && this.trigger("warn", {
                                                    message: `#EXT-X-PRELOAD-HINT #${n} for segment #${t} has the same TYPE ${e.type} as preload hint #${r}`
                                                })
                                            }
                                    },
                                    "rendition-report" () {
                                        let t = d(u.attributes);
                                        this.manifest.renditionReports = this.manifest.renditionReports || [], this.manifest.renditionReports.push(t);
                                        let e = this.manifest.renditionReports.length - 1,
                                            r = ["LAST-MSN", "URI"];
                                        l && r.push("LAST-PART"), this.warnOnMissingAttributes_(`#EXT-X-RENDITION-REPORT #${e}`, u.attributes, r)
                                    },
                                    "part-inf" () {
                                        this.manifest.partInf = d(u.attributes), this.warnOnMissingAttributes_("#EXT-X-PART-INF", u.attributes, ["PART-TARGET"]), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), p.call(this, this.manifest)
                                    },
                                    daterange() {
                                        this.manifest.dateRanges.push(d(u.attributes));
                                        let t = this.manifest.dateRanges.length - 1;
                                        this.warnOnMissingAttributes_(`#EXT-X-DATERANGE #${t}`, u.attributes, ["ID", "START-DATE"]);
                                        let e = this.manifest.dateRanges[t];
                                        e.endDate && e.startDate && new Date(e.endDate) < new Date(e.startDate) && this.trigger("warn", {
                                            message: "EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE"
                                        }), e.duration && e.duration < 0 && this.trigger("warn", {
                                            message: "EXT-X-DATERANGE DURATION must not be negative"
                                        }), e.plannedDuration && e.plannedDuration < 0 && this.trigger("warn", {
                                            message: "EXT-X-DATERANGE PLANNED-DURATION must not be negative"
                                        });
                                        let r = !!e.endOnNext;
                                        if (r && !e.class && this.trigger("warn", {
                                                message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute"
                                            }), r && (e.duration || e.endDate) && this.trigger("warn", {
                                                message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes"
                                            }), e.duration && e.endDate) {
                                            let r = e.startDate.getTime() + 1e3 * e.duration;
                                            this.manifest.dateRanges[t].endDate = new Date(r)
                                        }
                                        if (v[e.id]) {
                                            for (let t in v[e.id])
                                                if (e[t] && JSON.stringify(v[e.id][t]) !== JSON.stringify(e[t])) {
                                                    this.trigger("warn", {
                                                        message: "EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values"
                                                    });
                                                    break
                                                }
                                            let t = this.manifest.dateRanges.findIndex(t => t.id === e.id);
                                            this.manifest.dateRanges[t] = (0, i.Z)(this.manifest.dateRanges[t], e), v[e.id] = (0, i.Z)(v[e.id], e), this.manifest.dateRanges.pop()
                                        } else v[e.id] = e
                                    },
                                    "independent-segments" () {
                                        this.manifest.independentSegments = !0
                                    },
                                    "content-steering" () {
                                        this.manifest.contentSteering = d(u.attributes), this.warnOnMissingAttributes_("#EXT-X-CONTENT-STEERING", u.attributes, ["SERVER-URI"])
                                    }
                                })[u.tagType] || c).call(r)
                            },
                            uri() {
                                s.uri = u.uri, n.push(s), !this.manifest.targetDuration || "duration" in s || (this.trigger("warn", {
                                    message: "defaulting segment duration to the target duration"
                                }), s.duration = this.manifest.targetDuration), e && (s.key = e), s.timeline = m, t && (s.map = t), y = 0, null !== this.lastProgramDateTime && (s.programDateTime = this.lastProgramDateTime, this.lastProgramDateTime += 1e3 * s.duration), s = {}
                            },
                            comment() {},
                            custom() {
                                u.segment ? (s.custom = s.custom || {}, s.custom[u.customType] = u.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[u.customType] = u.data)
                            }
                        })[u.type].call(r)
                    })
                }
                warnOnMissingAttributes_(t, e, r) {
                    let n = [];
                    r.forEach(function(t) {
                        e.hasOwnProperty(t) || n.push(t)
                    }), n.length && this.trigger("warn", {
                        message: `${t} lacks required attribute(s): ${n.join(", ")}`
                    })
                }
                push(t) {
                    this.lineStream.push(t)
                }
                end() {
                    this.lineStream.push("\n"), this.manifest.dateRanges.length && null === this.lastProgramDateTime && this.trigger("warn", {
                        message: "A playlist with EXT-X-DATERANGE tag must contain atleast one EXT-X-PROGRAM-DATE-TIME tag"
                    }), this.lastProgramDateTime = null, this.trigger("end")
                }
                addParser(t) {
                    this.parseStream.addParser(t)
                }
                addTagMapper(t) {
                    this.parseStream.addTagMapper(t)
                }
            }
        },
        3813: function(t, e, r) {
            "use strict";
            r.d(e, {
                jp: function() {
                    return S
                },
                mm: function() {
                    return M
                },
                Qc: function() {
                    return tR
                },
                LG: function() {
                    return tC
                }
            });
            var n = r(9538),
                i = r(289),
                s = r.n(i),
                o = function(t, e, r) {
                    e.forEach(function(e) {
                        for (var n in t.mediaGroups[e])
                            for (var i in t.mediaGroups[e][n]) r(t.mediaGroups[e][n][i], e, n, i)
                    })
                },
                a = r(2599).Buffer,
                u = r(6718);
            let l = t => !!t && "object" == typeof t,
                c = (...t) => t.reduce((t, e) => ("object" != typeof e || Object.keys(e).forEach(r => {
                    Array.isArray(t[r]) && Array.isArray(e[r]) ? t[r] = t[r].concat(e[r]) : l(t[r]) && l(e[r]) ? t[r] = c(t[r], e[r]) : t[r] = e[r]
                }), t), {}),
                h = t => Object.keys(t).map(e => t[e]),
                f = (t, e) => {
                    let r = [];
                    for (let n = t; n < e; n++) r.push(n);
                    return r
                },
                d = t => t.reduce((t, e) => t.concat(e), []),
                p = t => {
                    if (!t.length) return [];
                    let e = [];
                    for (let r = 0; r < t.length; r++) e.push(t[r]);
                    return e
                },
                m = (t, e) => t.reduce((t, r, n) => (r[e] && t.push(n), t), []),
                g = (t, e) => h(t.reduce((t, r) => (r.forEach(r => {
                    t[e(r)] = r
                }), t), {}));
            var y = {
                INVALID_NUMBER_OF_PERIOD: "INVALID_NUMBER_OF_PERIOD",
                DASH_EMPTY_MANIFEST: "DASH_EMPTY_MANIFEST",
                DASH_INVALID_XML: "DASH_INVALID_XML",
                NO_BASE_URL: "NO_BASE_URL",
                SEGMENT_TIME_UNSPECIFIED: "SEGMENT_TIME_UNSPECIFIED",
                UNSUPPORTED_UTC_TIMING_SCHEME: "UNSUPPORTED_UTC_TIMING_SCHEME"
            };
            let v = ({
                    baseUrl: t = "",
                    source: e = "",
                    range: r = "",
                    indexRange: i = ""
                }) => {
                    let o = {
                        uri: e,
                        resolvedUri: (0, n.Z)(t || "", e)
                    };
                    if (r || i) {
                        let t;
                        let e = (r || i).split("-"),
                            n = s().BigInt ? s().BigInt(e[0]) : parseInt(e[0], 10),
                            a = s().BigInt ? s().BigInt(e[1]) : parseInt(e[1], 10);
                        n < Number.MAX_SAFE_INTEGER && "bigint" == typeof n && (n = Number(n)), a < Number.MAX_SAFE_INTEGER && "bigint" == typeof a && (a = Number(a)), "bigint" == typeof(t = "bigint" == typeof a || "bigint" == typeof n ? s().BigInt(a) - s().BigInt(n) + s().BigInt(1) : a - n + 1) && t < Number.MAX_SAFE_INTEGER && (t = Number(t)), o.byterange = {
                            length: t,
                            offset: n
                        }
                    }
                    return o
                },
                b = t => {
                    let e;
                    return e = "bigint" == typeof t.offset || "bigint" == typeof t.length ? s().BigInt(t.offset) + s().BigInt(t.length) - s().BigInt(1) : t.offset + t.length - 1, `${t.offset}-${e}`
                },
                w = t => (t && "number" != typeof t && (t = parseInt(t, 10)), isNaN(t)) ? null : t,
                E = {
                    static(t) {
                        let {
                            duration: e,
                            timescale: r = 1,
                            sourceDuration: n,
                            periodDuration: i
                        } = t, s = w(t.endNumber), o = e / r;
                        return "number" == typeof s ? {
                            start: 0,
                            end: s
                        } : "number" == typeof i ? {
                            start: 0,
                            end: i / o
                        } : {
                            start: 0,
                            end: n / o
                        }
                    },
                    dynamic(t) {
                        let {
                            NOW: e,
                            clientOffset: r,
                            availabilityStartTime: n,
                            timescale: i = 1,
                            duration: s,
                            periodStart: o = 0,
                            minimumUpdatePeriod: a = 0,
                            timeShiftBufferDepth: u = 1 / 0
                        } = t, l = w(t.endNumber), c = (e + r) / 1e3, h = n + o;
                        return {
                            start: Math.max(0, Math.floor((c - h - u) * i / s)),
                            end: "number" == typeof l ? l : Math.min(Math.ceil((c + a - h) * i / s), Math.floor((c - h) * i / s))
                        }
                    }
                },
                T = t => e => {
                    let {
                        duration: r,
                        timescale: n = 1,
                        periodStart: i,
                        startNumber: s = 1
                    } = t;
                    return {
                        number: s + e,
                        duration: r / n,
                        timeline: i,
                        time: e * r
                    }
                },
                D = t => {
                    let {
                        type: e,
                        duration: r,
                        timescale: n = 1,
                        periodDuration: i,
                        sourceDuration: s
                    } = t, {
                        start: o,
                        end: a
                    } = E[e](t), u = f(o, a).map(T(t));
                    if ("static" === e) {
                        let t = u.length - 1;
                        u[t].duration = ("number" == typeof i ? i : s) - r / n * t
                    }
                    return u
                },
                x = t => {
                    let {
                        baseUrl: e,
                        initialization: r = {},
                        sourceDuration: n,
                        indexRange: i = "",
                        periodStart: s,
                        presentationTime: o,
                        number: a = 0,
                        duration: u
                    } = t;
                    if (!e) throw Error(y.NO_BASE_URL);
                    let l = v({
                            baseUrl: e,
                            source: r.sourceURL,
                            range: r.range
                        }),
                        c = v({
                            baseUrl: e,
                            source: e,
                            indexRange: i
                        });
                    if (c.map = l, u) {
                        let e = D(t);
                        e.length && (c.duration = e[0].duration, c.timeline = e[0].timeline)
                    } else n && (c.duration = n, c.timeline = s);
                    return c.presentationTime = o || s, c.number = a, [c]
                },
                S = (t, e, r) => {
                    let n;
                    let i = t.sidx.map ? t.sidx.map : null,
                        o = t.sidx.duration,
                        a = t.timeline || 0,
                        u = t.sidx.byterange,
                        l = u.offset + u.length,
                        c = e.timescale,
                        h = e.references.filter(t => 1 !== t.referenceType),
                        f = [],
                        d = t.endList ? "static" : "dynamic",
                        p = t.sidx.timeline,
                        m = p,
                        g = t.mediaSequence || 0;
                    n = "bigint" == typeof e.firstOffset ? s().BigInt(l) + e.firstOffset : l + e.firstOffset;
                    for (let t = 0; t < h.length; t++) {
                        let u;
                        let l = e.references[t],
                            h = l.referencedSize,
                            y = l.subsegmentDuration;
                        u = "bigint" == typeof n ? n + s().BigInt(h) - s().BigInt(1) : n + h - 1;
                        let v = x({
                            baseUrl: r,
                            timescale: c,
                            timeline: a,
                            periodStart: p,
                            presentationTime: m,
                            number: g,
                            duration: y,
                            sourceDuration: o,
                            indexRange: `${n}-${u}`,
                            type: d
                        })[0];
                        i && (v.map = i), f.push(v), "bigint" == typeof n ? n += s().BigInt(h) : n += h, m += y / c, g++
                    }
                    return t.segments = f, t
                },
                A = ["AUDIO", "SUBTITLES"],
                P = 1 / 60,
                R = t => g(t, ({
                    timeline: t
                }) => t).sort((t, e) => t.timeline > e.timeline ? 1 : -1),
                C = (t, e) => {
                    for (let r = 0; r < t.length; r++)
                        if (t[r].attributes.NAME === e) return t[r];
                    return null
                },
                N = t => {
                    let e = [];
                    return o(t, A, (t, r, n, i) => {
                        e = e.concat(t.playlists || [])
                    }), e
                },
                O = ({
                    playlist: t,
                    mediaSequence: e
                }) => {
                    t.mediaSequence = e, t.segments.forEach((e, r) => {
                        e.number = t.mediaSequence + r
                    })
                },
                I = ({
                    oldPlaylists: t,
                    newPlaylists: e,
                    timelineStarts: r
                }) => {
                    e.forEach(e => {
                        e.discontinuitySequence = r.findIndex(function({
                            timeline: t
                        }) {
                            return t === e.timeline
                        });
                        let n = C(t, e.attributes.NAME);
                        if (!n || e.sidx) return;
                        let i = e.segments[0],
                            s = n.segments.findIndex(function(t) {
                                return Math.abs(t.presentationTime - i.presentationTime) < P
                            });
                        if (-1 === s) {
                            O({
                                playlist: e,
                                mediaSequence: n.mediaSequence + n.segments.length
                            }), e.segments[0].discontinuity = !0, e.discontinuityStarts.unshift(0), (!n.segments.length && e.timeline > n.timeline || n.segments.length && e.timeline > n.segments[n.segments.length - 1].timeline) && e.discontinuitySequence--;
                            return
                        }
                        n.segments[s].discontinuity && !i.discontinuity && (i.discontinuity = !0, e.discontinuityStarts.unshift(0), e.discontinuitySequence--), O({
                            playlist: e,
                            mediaSequence: n.segments[s].number
                        })
                    })
                },
                L = ({
                    oldManifest: t,
                    newManifest: e
                }) => {
                    let r = t.playlists.concat(N(t)),
                        n = e.playlists.concat(N(e));
                    return e.timelineStarts = R([t.timelineStarts, e.timelineStarts]), I({
                        oldPlaylists: r,
                        newPlaylists: n,
                        timelineStarts: e.timelineStarts
                    }), e
                },
                M = t => t && t.uri + "-" + b(t.byterange),
                k = t => {
                    let e = t.reduce(function(t, e) {
                            return t[e.attributes.baseUrl] || (t[e.attributes.baseUrl] = []), t[e.attributes.baseUrl].push(e), t
                        }, {}),
                        r = [];
                    return Object.values(e).forEach(t => {
                        let e = h(t.reduce((t, e) => {
                            let r = e.attributes.id + (e.attributes.lang || "");
                            return t[r] ? (e.segments && (e.segments[0] && (e.segments[0].discontinuity = !0), t[r].segments.push(...e.segments)), e.attributes.contentProtection && (t[r].attributes.contentProtection = e.attributes.contentProtection)) : (t[r] = e, t[r].attributes.timelineStarts = []), t[r].attributes.timelineStarts.push({
                                start: e.attributes.periodStart,
                                timeline: e.attributes.periodStart
                            }), t
                        }, {}));
                        r = r.concat(e)
                    }), r.map(t => (t.discontinuityStarts = m(t.segments || [], "discontinuity"), t))
                },
                U = (t, e) => {
                    let r = M(t.sidx),
                        n = r && e[r] && e[r].sidx;
                    return n && S(t, n, t.sidx.resolvedUri), t
                },
                B = (t, e = {}) => {
                    if (!Object.keys(e).length) return t;
                    for (let r in t) t[r] = U(t[r], e);
                    return t
                },
                V = ({
                    attributes: t,
                    segments: e,
                    sidx: r,
                    mediaSequence: n,
                    discontinuitySequence: i,
                    discontinuityStarts: s
                }, o) => {
                    let a = {
                        attributes: {
                            NAME: t.id,
                            BANDWIDTH: t.bandwidth,
                            CODECS: t.codecs,
                            "PROGRAM-ID": 1
                        },
                        uri: "",
                        endList: "static" === t.type,
                        timeline: t.periodStart,
                        resolvedUri: t.baseUrl || "",
                        targetDuration: t.duration,
                        discontinuitySequence: i,
                        discontinuityStarts: s,
                        timelineStarts: t.timelineStarts,
                        mediaSequence: n,
                        segments: e
                    };
                    return t.contentProtection && (a.contentProtection = t.contentProtection), t.serviceLocation && (a.attributes.serviceLocation = t.serviceLocation), r && (a.sidx = r), o && (a.attributes.AUDIO = "audio", a.attributes.SUBTITLES = "subs"), a
                },
                j = ({
                    attributes: t,
                    segments: e,
                    mediaSequence: r,
                    discontinuityStarts: n,
                    discontinuitySequence: i
                }) => {
                    void 0 === e && (e = [{
                        uri: t.baseUrl,
                        timeline: t.periodStart,
                        resolvedUri: t.baseUrl || "",
                        duration: t.sourceDuration,
                        number: 0
                    }], t.duration = t.sourceDuration);
                    let s = {
                        NAME: t.id,
                        BANDWIDTH: t.bandwidth,
                        "PROGRAM-ID": 1
                    };
                    t.codecs && (s.CODECS = t.codecs);
                    let o = {
                        attributes: s,
                        uri: "",
                        endList: "static" === t.type,
                        timeline: t.periodStart,
                        resolvedUri: t.baseUrl || "",
                        targetDuration: t.duration,
                        timelineStarts: t.timelineStarts,
                        discontinuityStarts: n,
                        discontinuitySequence: i,
                        mediaSequence: r,
                        segments: e
                    };
                    return t.serviceLocation && (o.attributes.serviceLocation = t.serviceLocation), o
                },
                _ = (t, e = {}, r = !1) => {
                    let n;
                    let i = t.reduce((t, i) => {
                        let s = i.attributes.role && i.attributes.role.value || "",
                            o = i.attributes.lang || "",
                            a = i.attributes.label || "main";
                        if (o && !i.attributes.label) {
                            let t = s ? ` (${s})` : "";
                            a = `${i.attributes.lang}${t}`
                        }
                        t[a] || (t[a] = {
                            language: o,
                            autoselect: !0,
                            default: "main" === s,
                            playlists: [],
                            uri: ""
                        });
                        let u = U(V(i, r), e);
                        return t[a].playlists.push(u), void 0 === n && "main" === s && ((n = i).default = !0), t
                    }, {});
                    if (!n) {
                        let t = Object.keys(i)[0];
                        i[t].default = !0
                    }
                    return i
                },
                q = (t, e = {}) => t.reduce((t, r) => {
                    let n = r.attributes.label || r.attributes.lang || "text";
                    return t[n] || (t[n] = {
                        language: n,
                        default: !1,
                        autoselect: !1,
                        playlists: [],
                        uri: ""
                    }), t[n].playlists.push(U(j(r), e)), t
                }, {}),
                F = t => t.reduce((t, e) => (e && e.forEach(e => {
                    let {
                        channel: r,
                        language: n
                    } = e;
                    t[n] = {
                        autoselect: !1,
                        default: !1,
                        instreamId: r,
                        language: n
                    }, e.hasOwnProperty("aspectRatio") && (t[n].aspectRatio = e.aspectRatio), e.hasOwnProperty("easyReader") && (t[n].easyReader = e.easyReader), e.hasOwnProperty("3D") && (t[n]["3D"] = e["3D"])
                }), t), {}),
                G = ({
                    attributes: t,
                    segments: e,
                    sidx: r,
                    discontinuityStarts: n
                }) => {
                    let i = {
                        attributes: {
                            NAME: t.id,
                            AUDIO: "audio",
                            SUBTITLES: "subs",
                            RESOLUTION: {
                                width: t.width,
                                height: t.height
                            },
                            CODECS: t.codecs,
                            BANDWIDTH: t.bandwidth,
                            "PROGRAM-ID": 1
                        },
                        uri: "",
                        endList: "static" === t.type,
                        timeline: t.periodStart,
                        resolvedUri: t.baseUrl || "",
                        targetDuration: t.duration,
                        discontinuityStarts: n,
                        timelineStarts: t.timelineStarts,
                        segments: e
                    };
                    return t.frameRate && (i.attributes["FRAME-RATE"] = t.frameRate), t.contentProtection && (i.contentProtection = t.contentProtection), t.serviceLocation && (i.attributes.serviceLocation = t.serviceLocation), r && (i.sidx = r), i
                },
                X = ({
                    attributes: t
                }) => "video/mp4" === t.mimeType || "video/webm" === t.mimeType || "video" === t.contentType,
                z = ({
                    attributes: t
                }) => "audio/mp4" === t.mimeType || "audio/webm" === t.mimeType || "audio" === t.contentType,
                H = ({
                    attributes: t
                }) => "text/vtt" === t.mimeType || "text" === t.contentType,
                $ = (t, e) => {
                    t.forEach(t => {
                        t.mediaSequence = 0, t.discontinuitySequence = e.findIndex(function({
                            timeline: e
                        }) {
                            return e === t.timeline
                        }), t.segments && t.segments.forEach((t, e) => {
                            t.number = e
                        })
                    })
                },
                W = t => t ? Object.keys(t).reduce((e, r) => {
                    let n = t[r];
                    return e.concat(n.playlists)
                }, []) : [],
                K = ({
                    dashPlaylists: t,
                    locations: e,
                    contentSteering: r,
                    sidxMapping: n = {},
                    previousManifest: i,
                    eventStream: s
                }) => {
                    if (!t.length) return {};
                    let {
                        sourceDuration: o,
                        type: a,
                        suggestedPresentationDelay: u,
                        minimumUpdatePeriod: l
                    } = t[0].attributes, c = k(t.filter(X)).map(G), h = k(t.filter(z)), f = k(t.filter(H)), d = t.map(t => t.attributes.captionServices).filter(Boolean), p = {
                        allowCache: !0,
                        discontinuityStarts: [],
                        segments: [],
                        endList: !0,
                        mediaGroups: {
                            AUDIO: {},
                            VIDEO: {},
                            "CLOSED-CAPTIONS": {},
                            SUBTITLES: {}
                        },
                        uri: "",
                        duration: o,
                        playlists: B(c, n)
                    };
                    l >= 0 && (p.minimumUpdatePeriod = 1e3 * l), e && (p.locations = e), r && (p.contentSteering = r), "dynamic" === a && (p.suggestedPresentationDelay = u), s && s.length > 0 && (p.eventStream = s);
                    let m = 0 === p.playlists.length,
                        g = h.length ? _(h, n, m) : null,
                        y = f.length ? q(f, n) : null,
                        v = c.concat(W(g), W(y)),
                        b = v.map(({
                            timelineStarts: t
                        }) => t);
                    return (p.timelineStarts = R(b), $(v, p.timelineStarts), g && (p.mediaGroups.AUDIO.audio = g), y && (p.mediaGroups.SUBTITLES.subs = y), d.length && (p.mediaGroups["CLOSED-CAPTIONS"].cc = F(d)), i) ? L({
                        oldManifest: i,
                        newManifest: p
                    }) : p
                },
                Y = (t, e, r) => {
                    let {
                        NOW: n,
                        clientOffset: i,
                        availabilityStartTime: s,
                        timescale: o = 1,
                        periodStart: a = 0,
                        minimumUpdatePeriod: u = 0
                    } = t;
                    return Math.ceil((((n + i) / 1e3 + u - (s + a)) * o - e) / r)
                },
                Z = (t, e) => {
                    let {
                        type: r,
                        minimumUpdatePeriod: n = 0,
                        media: i = "",
                        sourceDuration: s,
                        timescale: o = 1,
                        startNumber: a = 1,
                        periodStart: u
                    } = t, l = [], c = -1;
                    for (let h = 0; h < e.length; h++) {
                        let f;
                        let d = e[h],
                            p = d.d,
                            m = d.r || 0,
                            g = d.t || 0;
                        if (c < 0 && (c = g), g && g > c && (c = g), m < 0) {
                            let a = h + 1;
                            f = a === e.length ? "dynamic" === r && n > 0 && i.indexOf("$Number$") > 0 ? Y(t, c, p) : (s * o - c) / p : (e[a].t - c) / p
                        } else f = m + 1;
                        let y = a + l.length + f,
                            v = a + l.length;
                        for (; v < y;) l.push({
                            number: v,
                            duration: p / o,
                            time: c,
                            timeline: u
                        }), c += p, v++
                    }
                    return l
                },
                J = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,
                Q = t => (e, r, n, i) => {
                    if ("$$" === e) return "$";
                    if (void 0 === t[r]) return e;
                    let s = "" + t[r];
                    return "RepresentationID" === r ? s : (i = n ? parseInt(i, 10) : 1, s.length >= i) ? s : `${Array(i-s.length+1).join("0")}${s}`
                },
                tt = (t, e) => t.replace(J, Q(e)),
                te = (t, e) => t.duration || e ? t.duration ? D(t) : Z(t, e) : [{
                    number: t.startNumber || 1,
                    duration: t.sourceDuration,
                    time: 0,
                    timeline: t.periodStart
                }],
                tr = (t, e) => {
                    let r = {
                            RepresentationID: t.id,
                            Bandwidth: t.bandwidth || 0
                        },
                        {
                            initialization: i = {
                                sourceURL: "",
                                range: ""
                            }
                        } = t,
                        s = v({
                            baseUrl: t.baseUrl,
                            source: tt(i.sourceURL, r),
                            range: i.range
                        });
                    return te(t, e).map(e => {
                        r.Number = e.number, r.Time = e.time;
                        let i = tt(t.media || "", r),
                            o = t.timescale || 1,
                            a = t.presentationTimeOffset || 0,
                            u = t.periodStart + (e.time - a) / o;
                        return {
                            uri: i,
                            timeline: e.timeline,
                            duration: e.duration,
                            resolvedUri: (0, n.Z)(t.baseUrl || "", i),
                            map: s,
                            number: e.number,
                            presentationTime: u
                        }
                    })
                },
                tn = (t, e) => {
                    let {
                        baseUrl: r,
                        initialization: n = {}
                    } = t, i = v({
                        baseUrl: r,
                        source: n.sourceURL,
                        range: n.range
                    }), s = v({
                        baseUrl: r,
                        source: e.media,
                        range: e.mediaRange
                    });
                    return s.map = i, s
                },
                ti = (t, e) => {
                    let r;
                    let {
                        duration: n,
                        segmentUrls: i = [],
                        periodStart: s
                    } = t;
                    if (!n && !e || n && e) throw Error(y.SEGMENT_TIME_UNSPECIFIED);
                    let o = i.map(e => tn(t, e));
                    return n && (r = D(t)), e && (r = Z(t, e)), r.map((e, r) => {
                        if (o[r]) {
                            let n = o[r],
                                i = t.timescale || 1,
                                a = t.presentationTimeOffset || 0;
                            return n.timeline = e.timeline, n.duration = e.duration, n.number = e.number, n.presentationTime = s + (e.time - a) / i, n
                        }
                    }).filter(t => t)
                },
                ts = ({
                    attributes: t,
                    segmentInfo: e
                }) => {
                    let r, n;
                    e.template ? (n = tr, r = c(t, e.template)) : e.base ? (n = x, r = c(t, e.base)) : e.list && (n = ti, r = c(t, e.list));
                    let i = {
                        attributes: t
                    };
                    if (!n) return i;
                    let s = n(r, e.segmentTimeline);
                    if (r.duration) {
                        let {
                            duration: t,
                            timescale: e = 1
                        } = r;
                        r.duration = t / e
                    } else s.length ? r.duration = s.reduce((t, e) => Math.max(t, Math.ceil(e.duration)), 0) : r.duration = 0;
                    return i.attributes = r, i.segments = s, e.base && r.indexRange && (i.sidx = s[0], i.segments = []), i
                },
                to = t => t.map(ts),
                ta = (t, e) => p(t.childNodes).filter(({
                    tagName: t
                }) => t === e),
                tu = t => t.textContent.trim(),
                tl = t => parseFloat(t.split("/").reduce((t, e) => t / e)),
                tc = t => {
                    let e = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(t);
                    if (!e) return 0;
                    let [r, n, i, s, o, a] = e.slice(1);
                    return 31536e3 * parseFloat(r || 0) + 2592e3 * parseFloat(n || 0) + 86400 * parseFloat(i || 0) + 3600 * parseFloat(s || 0) + 60 * parseFloat(o || 0) + parseFloat(a || 0)
                },
                th = t => (/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(t) && (t += "Z"), Date.parse(t)),
                tf = {
                    mediaPresentationDuration: t => tc(t),
                    availabilityStartTime: t => th(t) / 1e3,
                    minimumUpdatePeriod: t => tc(t),
                    suggestedPresentationDelay: t => tc(t),
                    type: t => t,
                    timeShiftBufferDepth: t => tc(t),
                    start: t => tc(t),
                    width: t => parseInt(t, 10),
                    height: t => parseInt(t, 10),
                    bandwidth: t => parseInt(t, 10),
                    frameRate: t => tl(t),
                    startNumber: t => parseInt(t, 10),
                    timescale: t => parseInt(t, 10),
                    presentationTimeOffset: t => parseInt(t, 10),
                    duration(t) {
                        let e = parseInt(t, 10);
                        return isNaN(e) ? tc(t) : e
                    },
                    d: t => parseInt(t, 10),
                    t: t => parseInt(t, 10),
                    r: t => parseInt(t, 10),
                    presentationTime: t => parseInt(t, 10),
                    DEFAULT: t => t
                },
                td = t => t && t.attributes ? p(t.attributes).reduce((t, e) => {
                    let r = tf[e.name] || tf.DEFAULT;
                    return t[e.name] = r(e.value), t
                }, {}) : {},
                tp = {
                    "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
                    "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
                    "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
                    "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime",
                    "urn:mpeg:dash:mp4protection:2011": "mp4protection"
                },
                tm = (t, e) => e.length ? d(t.map(function(t) {
                    return e.map(function(e) {
                        let r = tu(e),
                            i = (0, n.Z)(t.baseUrl, r),
                            s = c(td(e), {
                                baseUrl: i
                            });
                        return i !== r && !s.serviceLocation && t.serviceLocation && (s.serviceLocation = t.serviceLocation), s
                    })
                })) : t,
                tg = t => {
                    let e = ta(t, "SegmentTemplate")[0],
                        r = ta(t, "SegmentList")[0],
                        n = r && ta(r, "SegmentURL").map(t => c({
                            tag: "SegmentURL"
                        }, td(t))),
                        i = ta(t, "SegmentBase")[0],
                        s = r || e,
                        o = s && ta(s, "SegmentTimeline")[0],
                        a = r || i || e,
                        u = a && ta(a, "Initialization")[0],
                        l = e && td(e);
                    l && u ? l.initialization = u && td(u) : l && l.initialization && (l.initialization = {
                        sourceURL: l.initialization
                    });
                    let h = {
                        template: l,
                        segmentTimeline: o && ta(o, "S").map(t => td(t)),
                        list: r && c(td(r), {
                            segmentUrls: n,
                            initialization: td(u)
                        }),
                        base: i && c(td(i), {
                            initialization: td(u)
                        })
                    };
                    return Object.keys(h).forEach(t => {
                        h[t] || delete h[t]
                    }), h
                },
                ty = (t, e, r) => n => {
                    let i = tm(e, ta(n, "BaseURL")),
                        s = c(t, td(n)),
                        o = tg(n);
                    return i.map(t => ({
                        segmentInfo: c(r, o),
                        attributes: c(s, t)
                    }))
                },
                tv = t => t.reduce((t, e) => {
                    let r = td(e);
                    r.schemeIdUri && (r.schemeIdUri = r.schemeIdUri.toLowerCase());
                    let n = tp[r.schemeIdUri];
                    if (n) {
                        t[n] = {
                            attributes: r
                        };
                        let i = ta(e, "cenc:pssh")[0];
                        if (i) {
                            let e = tu(i);
                            t[n].pssh = e && function(t) {
                                for (var e = s().atob ? s().atob(t) : a.from(t, "base64").toString("binary"), r = new Uint8Array(e.length), n = 0; n < e.length; n++) r[n] = e.charCodeAt(n);
                                return r
                            }(e)
                        }
                    }
                    return t
                }, {}),
                tb = t => "urn:scte:dash:cc:cea-608:2015" === t.schemeIdUri ? ("string" != typeof t.value ? [] : t.value.split(";")).map(t => {
                    let e, r;
                    return r = t, /^CC\d=/.test(t) ? [e, r] = t.split("=") : /^CC\d$/.test(t) && (e = t), {
                        channel: e,
                        language: r
                    }
                }) : "urn:scte:dash:cc:cea-708:2015" === t.schemeIdUri ? ("string" != typeof t.value ? [] : t.value.split(";")).map(t => {
                    let e = {
                        channel: void 0,
                        language: void 0,
                        aspectRatio: 1,
                        easyReader: 0,
                        "3D": 0
                    };
                    if (/=/.test(t)) {
                        let [r, n = ""] = t.split("=");
                        e.channel = r, e.language = t, n.split(",").forEach(t => {
                            let [r, n] = t.split(":");
                            "lang" === r ? e.language = n : "er" === r ? e.easyReader = Number(n) : "war" === r ? e.aspectRatio = Number(n) : "3D" === r && (e["3D"] = Number(n))
                        })
                    } else e.language = t;
                    return e.channel && (e.channel = "SERVICE" + e.channel), e
                }) : void 0,
                tw = t => d(ta(t.node, "EventStream").map(e => {
                    let r = td(e),
                        n = r.schemeIdUri;
                    return ta(e, "Event").map(e => {
                        let i = td(e),
                            s = i.presentationTime || 0,
                            o = r.timescale || 1,
                            a = i.duration || 0,
                            u = s / o + t.attributes.start;
                        return {
                            schemeIdUri: n,
                            value: r.value,
                            id: i.id,
                            start: u,
                            end: u + a / o,
                            messageData: tu(e) || i.messageData,
                            contentEncoding: r.contentEncoding,
                            presentationTimeOffset: r.presentationTimeOffset || 0
                        }
                    })
                })),
                tE = (t, e, r) => n => {
                    let i = td(n),
                        s = tm(e, ta(n, "BaseURL")),
                        o = c(t, i, {
                            role: td(ta(n, "Role")[0])
                        }),
                        a = tb(td(ta(n, "Accessibility")[0]));
                    a && (o = c(o, {
                        captionServices: a
                    }));
                    let u = ta(n, "Label")[0];
                    u && u.childNodes.length && (o = c(o, {
                        label: u.childNodes[0].nodeValue.trim()
                    }));
                    let l = tv(ta(n, "ContentProtection"));
                    Object.keys(l).length && (o = c(o, {
                        contentProtection: l
                    }));
                    let h = tg(n),
                        f = ta(n, "Representation"),
                        p = c(r, h);
                    return d(f.map(ty(o, s, p)))
                },
                tT = (t, e) => (r, n) => {
                    let i = tm(e, ta(r.node, "BaseURL")),
                        s = c(t, {
                            periodStart: r.attributes.start
                        });
                    "number" == typeof r.attributes.duration && (s.periodDuration = r.attributes.duration);
                    let o = ta(r.node, "AdaptationSet"),
                        a = tg(r.node);
                    return d(o.map(tE(s, i, a)))
                },
                tD = (t, e) => {
                    if (t.length > 1 && e({
                            type: "warn",
                            message: "The MPD manifest should contain no more than one ContentSteering tag"
                        }), !t.length) return null;
                    let r = c({
                        serverURL: tu(t[0])
                    }, td(t[0]));
                    return r.queryBeforeStart = "true" === r.queryBeforeStart, r
                },
                tx = ({
                    attributes: t,
                    priorPeriodAttributes: e,
                    mpdType: r
                }) => "number" == typeof t.start ? t.start : e && "number" == typeof e.start && "number" == typeof e.duration ? e.start + e.duration : e || "static" !== r ? null : 0,
                tS = (t, e = {}) => {
                    let {
                        manifestUri: r = "",
                        NOW: n = Date.now(),
                        clientOffset: i = 0,
                        eventHandler: s = function() {}
                    } = e, o = ta(t, "Period");
                    if (!o.length) throw Error(y.INVALID_NUMBER_OF_PERIOD);
                    let a = ta(t, "Location"),
                        u = td(t),
                        l = tm([{
                            baseUrl: r
                        }], ta(t, "BaseURL")),
                        c = ta(t, "ContentSteering");
                    u.type = u.type || "static", u.sourceDuration = u.mediaPresentationDuration || 0, u.NOW = n, u.clientOffset = i, a.length && (u.locations = a.map(tu));
                    let h = [];
                    return o.forEach((t, e) => {
                        let r = td(t),
                            n = h[e - 1];
                        r.start = tx({
                            attributes: r,
                            priorPeriodAttributes: n ? n.attributes : null,
                            mpdType: u.type
                        }), h.push({
                            node: t,
                            attributes: r
                        })
                    }), {
                        locations: u.locations,
                        contentSteeringInfo: tD(c, s),
                        representationInfo: d(h.map(tT(u, l))),
                        eventStream: d(h.map(tw))
                    }
                },
                tA = t => {
                    let e, r;
                    if ("" === t) throw Error(y.DASH_EMPTY_MANIFEST);
                    let n = new u.DOMParser;
                    try {
                        r = (e = n.parseFromString(t, "application/xml")) && "MPD" === e.documentElement.tagName ? e.documentElement : null
                    } catch (t) {}
                    if (!r || r && r.getElementsByTagName("parsererror").length > 0) throw Error(y.DASH_INVALID_XML);
                    return r
                },
                tP = t => {
                    let e = ta(t, "UTCTiming")[0];
                    if (!e) return null;
                    let r = td(e);
                    switch (r.schemeIdUri) {
                        case "urn:mpeg:dash:utc:http-head:2014":
                        case "urn:mpeg:dash:utc:http-head:2012":
                            r.method = "HEAD";
                            break;
                        case "urn:mpeg:dash:utc:http-xsdate:2014":
                        case "urn:mpeg:dash:utc:http-iso:2014":
                        case "urn:mpeg:dash:utc:http-xsdate:2012":
                        case "urn:mpeg:dash:utc:http-iso:2012":
                            r.method = "GET";
                            break;
                        case "urn:mpeg:dash:utc:direct:2014":
                        case "urn:mpeg:dash:utc:direct:2012":
                            r.method = "DIRECT", r.value = Date.parse(r.value);
                            break;
                        default:
                            throw Error(y.UNSUPPORTED_UTC_TIMING_SCHEME)
                    }
                    return r
                },
                tR = (t, e = {}) => {
                    let r = tS(tA(t), e);
                    return K({
                        dashPlaylists: to(r.representationInfo),
                        locations: r.locations,
                        contentSteering: r.contentSteeringInfo,
                        sidxMapping: e.sidxMapping,
                        previousManifest: e.previousManifest,
                        eventStream: r.eventStream
                    })
                },
                tC = t => tP(tA(t))
        },
        9530: function(t, e, r) {
            var n = r(4495).getUint64;
            t.exports = function(t) {
                var e = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    r = {
                        version: t[0],
                        flags: new Uint8Array(t.subarray(1, 4)),
                        references: [],
                        referenceId: e.getUint32(4),
                        timescale: e.getUint32(8)
                    },
                    i = 12;
                0 === r.version ? (r.earliestPresentationTime = e.getUint32(i), r.firstOffset = e.getUint32(i + 4), i += 8) : (r.earliestPresentationTime = n(t.subarray(i)), r.firstOffset = n(t.subarray(i + 8)), i += 16), i += 2;
                var s = e.getUint16(i);
                for (i += 2; s > 0; i += 12, s--) r.references.push({
                    referenceType: (128 & t[i]) >>> 7,
                    referencedSize: 2147483647 & e.getUint32(i),
                    subsegmentDuration: e.getUint32(i + 4),
                    startsWithSap: !!(128 & t[i + 8]),
                    sapType: (112 & t[i + 8]) >>> 4,
                    sapDeltaTime: 268435455 & e.getUint32(i + 8)
                });
                return r
            }
        },
        7135: function(t) {
            var e, r, n, i, s, o, a;
            e = function(t) {
                return 9e4 * t
            }, r = function(t, e) {
                return t * e
            }, n = function(t) {
                return t / 9e4
            }, i = function(t, e) {
                return t / e
            }, s = function(t, r) {
                return e(i(t, r))
            }, o = function(t, e) {
                return r(n(t), e)
            }, a = function(t, e, r) {
                return n(r ? t : t - e)
            }, t.exports = {
                ONE_SECOND_IN_TS: 9e4,
                secondsToVideoTs: e,
                secondsToAudioTs: r,
                videoTsToSeconds: n,
                audioTsToSeconds: i,
                audioTsToVideoTs: s,
                videoTsToAudioTs: o,
                metadataTsToSeconds: a
            }
        },
        4495: function(t) {
            t.exports = {
                getUint64: function(t) {
                    var e, r = new DataView(t.buffer, t.byteOffset, t.byteLength);
                    return r.getBigUint64 ? (e = r.getBigUint64(0)) < Number.MAX_SAFE_INTEGER ? Number(e) : e : 4294967296 * r.getUint32(0) + r.getUint32(4)
                },
                MAX_UINT32: 4294967296
            }
        },
        7775: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return d
                }
            });
            var n = r(8141),
                i = r.n(n),
                s = r(5330);
            let o = t => {
                    var e;
                    let {
                        filePath: r
                    } = t, n = (null === (e = r.split("\\").pop()) || void 0 === e ? void 0 : e.split("/").pop()) || "", i = r.split(n).shift(), s = r.split(".").pop();
                    return {
                        path: i,
                        filename: n.substring(0, n.lastIndexOf(".")) || n,
                        extension: s || ""
                    }
                },
                a = function(t, e, r) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        {
                            filename: i,
                            path: s,
                            extension: a
                        } = o({
                            filePath: t
                        });
                    if (!["JPG", "JPEG", "WEBP", "PNG", "AVIF", "GIF"].includes(a.toUpperCase())) return t;
                    let u = a;
                    ["JPG", "JPEG", "PNG", "GIF"].includes(a.toUpperCase()) && (u = "WEBP");
                    let l = s;
                    "/" != (null == l ? void 0 : l.substr(-1)) && (l += "/");
                    let c = t.includes("_next/static/media");
                    r && (l = r.endsWith("/") && l && l.startsWith("/") ? r + l.slice(1) : r.endsWith("/") || !l || l.startsWith("/") ? r + l : r + "/" + l);
                    let h = "".concat(c ? r ? r + "/" : "" : l).concat("nextImageExportOptimizer", "/").concat(i, "-opt-").concat(e, ".").concat(u.toUpperCase());
                    return n || "/" === h.charAt(0) || (h = "/" + h), h
                },
                u = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = 3735928559 ^ e,
                        n = 1103547991 ^ e;
                    for (let e = 0, i; e < t.length; e++) r = Math.imul(r ^ (i = t.charCodeAt(e)), 2654435761), n = Math.imul(n ^ i, 1597334677);
                    return r = Math.imul(r ^ r >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909), 4294967296 * (2097151 & (n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(r ^ r >>> 13, 3266489909))) + (r >>> 0)
                },
                l = t => {
                    let {
                        src: e,
                        width: r,
                        basePath: n
                    } = t;
                    return a(function(t) {
                        try {
                            let e = new URL(t).pathname.split(".").pop();
                            if (e) return u(t).toString().concat(".", e)
                        } catch (e) {
                            console.error("Error parsing URL", t, e)
                        }
                        return u(t).toString()
                    }(e), r, n, !0)
                },
                c = t => {
                    let {
                        src: e,
                        width: r,
                        basePath: n
                    } = t, i = "object" == typeof e, s = i ? e.src : e, o = i && e.width || void 0;
                    if (i && o && r > o) {
                        let t = [...[640, 750, 828, 1080, 1200, 1920, 2048, 3840].map(Number), ...[16, 32, 48, 64, 96, 128, 256, 384].map(Number)];
                        (t = t.filter((t, e, r) => r.indexOf(t) === e)).sort((t, e) => t - e);
                        let e = null;
                        for (let r = 0; r < t.length; r++) Number(t[r]) >= o && (null === e || Number(t[r]) < e) && (e = Number(t[r]));
                        if (null !== e) return a(s, e, n)
                    }
                    return s.startsWith("http") ? l({
                        src: s,
                        width: r,
                        basePath: n
                    }) : a(s, r, n)
                },
                h = t => {
                    let {
                        src: e
                    } = t, r = "object" == typeof e ? e.src : e;
                    return r.startsWith("http") || "/" === r.charAt(0) || (r = "/" + r), r
                },
                f = (0, s.forwardRef)((t, e) => {
                    let {
                        src: r,
                        priority: n = !1,
                        loading: o,
                        className: u,
                        width: f,
                        height: d,
                        onLoad: p,
                        unoptimized: m,
                        placeholder: g = "blur",
                        basePath: y = "",
                        alt: v = "",
                        blurDataURL: b,
                        style: w,
                        onError: E,
                        overrideSrc: T,
                        ...D
                    } = t, [x, S] = (0, s.useState)(!1), A = (0, s.useMemo)(() => {
                        if (b) return b;
                        let t = "object" == typeof r ? r.src : r;
                        return !0 === m ? t : t.startsWith("http") ? l({
                            src: t,
                            width: 10,
                            basePath: y
                        }) : a(t, 10, y)
                    }, [b, r, m, y]), P = "object" == typeof r ? r.src.endsWith(".svg") : r.endsWith(".svg"), [R, C] = (0, s.useState)(!1), N = "blur" === g && !P && A && A.startsWith("/") && !R ? {
                        backgroundSize: (null == w ? void 0 : w.objectFit) || "cover",
                        backgroundPosition: (null == w ? void 0 : w.objectPosition) || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url("'.concat(A, '")')
                    } : void 0, O = "object" == typeof r, I = O ? r.src : r;
                    return y && !O && I.startsWith("/") && (I = y + I), !y || O || I.startsWith("/") || (I = y + "/" + I), s.createElement(i(), {
                        ref: e,
                        alt: v,
                        ...D,
                        ...f && {
                            width: f
                        },
                        ...d && {
                            height: d
                        },
                        ...o && {
                            loading: o
                        },
                        ...u && {
                            className: u
                        },
                        ...p && {
                            onLoad: p
                        },
                        ...T && {
                            overrideSrc: T
                        },
                        ...g && {
                            placeholder: N || R ? "empty" : g
                        },
                        ...m && {
                            unoptimized: m
                        },
                        ...n && {
                            priority: n
                        },
                        ...P && {
                            unoptimized: !0
                        },
                        style: { ...w,
                            ...N
                        },
                        loader: x || !0 === m ? () => h({
                            src: T || r
                        }) : t => c({
                            src: r,
                            width: t.width,
                            basePath: y
                        }),
                        blurDataURL: A,
                        onError: t => {
                            S(!0), C(!0), E && E(t)
                        },
                        onLoad: t => {
                            0 === t.target.naturalWidth && S(!0), C(!0), p && p(t)
                        },
                        src: O ? r : I
                    })
                });
            f.displayName = "ExportedImage";
            var d = f
        },
        1322: function(t, e, r) {
            "use strict";
            r.d(e, {
                default: function() {
                    return i.a
                }
            });
            var n = r(6566),
                i = r.n(n)
        },
        7105: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "addLocale", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r(2648);
            let n = function(t) {
                for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                return t
            };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        6236: function(t, e, r) {
            "use strict";

            function n(t, e, r, n) {
                return !1
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r(2648), ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        269: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Image", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            let n = r(6552),
                i = r(349),
                s = r(9176),
                o = i._(r(5330)),
                a = n._(r(832)),
                u = n._(r(2535)),
                l = r(9337),
                c = r(5573),
                h = r(2794);
            r(325);
            let f = r(3498),
                d = n._(r(4159)),
                p = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image/",
                    loader: "custom",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function m(t, e, r, n, i, s, o) {
                let a = null == t ? void 0 : t.src;
                t && t["data-loaded-src"] !== a && (t["data-loaded-src"] = a, ("decode" in t ? t.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (t.parentElement && t.isConnected) {
                        if ("empty" !== e && i(!0), null == r ? void 0 : r.current) {
                            let e = new Event("load");
                            Object.defineProperty(e, "target", {
                                writable: !1,
                                value: t
                            });
                            let n = !1,
                                i = !1;
                            r.current({ ...e,
                                nativeEvent: e,
                                currentTarget: t,
                                target: t,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => i,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, e.preventDefault()
                                },
                                stopPropagation: () => {
                                    i = !0, e.stopPropagation()
                                }
                            })
                        }(null == n ? void 0 : n.current) && n.current(t)
                    }
                }))
            }

            function g(t) {
                return o.use ? {
                    fetchPriority: t
                } : {
                    fetchpriority: t
                }
            }
            "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
            let y = (0, o.forwardRef)((t, e) => {
                let {
                    src: r,
                    srcSet: n,
                    sizes: i,
                    height: a,
                    width: u,
                    decoding: l,
                    className: c,
                    style: h,
                    fetchPriority: f,
                    placeholder: d,
                    loading: p,
                    unoptimized: y,
                    fill: v,
                    onLoadRef: b,
                    onLoadingCompleteRef: w,
                    setBlurComplete: E,
                    setShowAltText: T,
                    sizesInput: D,
                    onLoad: x,
                    onError: S,
                    ...A
                } = t;
                return (0, s.jsx)("img", { ...A,
                    ...g(f),
                    loading: p,
                    width: u,
                    height: a,
                    decoding: l,
                    "data-nimg": v ? "fill" : "1",
                    className: c,
                    style: h,
                    sizes: i,
                    srcSet: n,
                    src: r,
                    ref: (0, o.useCallback)(t => {
                        e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)), t && (S && (t.src = t.src), t.complete && m(t, d, b, w, E, y, D))
                    }, [r, d, b, w, E, S, y, D, e]),
                    onLoad: t => {
                        m(t.currentTarget, d, b, w, E, y, D)
                    },
                    onError: t => {
                        T(!0), "empty" !== d && E(!0), S && S(t)
                    }
                })
            });

            function v(t) {
                let {
                    isAppRouter: e,
                    imgAttributes: r
                } = t, n = {
                    as: "image",
                    imageSrcSet: r.srcSet,
                    imageSizes: r.sizes,
                    crossOrigin: r.crossOrigin,
                    referrerPolicy: r.referrerPolicy,
                    ...g(r.fetchPriority)
                };
                return e && a.default.preload ? (a.default.preload(r.src, n), null) : (0, s.jsx)(u.default, {
                    children: (0, s.jsx)("link", {
                        rel: "preload",
                        href: r.srcSet ? void 0 : r.src,
                        ...n
                    }, "__nimg-" + r.src + r.srcSet + r.sizes)
                })
            }
            let b = (0, o.forwardRef)((t, e) => {
                let r = (0, o.useContext)(f.RouterContext),
                    n = (0, o.useContext)(h.ImageConfigContext),
                    i = (0, o.useMemo)(() => {
                        let t = p || n || c.imageConfigDefault,
                            e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
                            r = t.deviceSizes.sort((t, e) => t - e);
                        return { ...t,
                            allSizes: e,
                            deviceSizes: r
                        }
                    }, [n]),
                    {
                        onLoad: a,
                        onLoadingComplete: u
                    } = t,
                    m = (0, o.useRef)(a);
                (0, o.useEffect)(() => {
                    m.current = a
                }, [a]);
                let g = (0, o.useRef)(u);
                (0, o.useEffect)(() => {
                    g.current = u
                }, [u]);
                let [b, w] = (0, o.useState)(!1), [E, T] = (0, o.useState)(!1), {
                    props: D,
                    meta: x
                } = (0, l.getImgProps)(t, {
                    defaultLoader: d.default,
                    imgConf: i,
                    blurComplete: b,
                    showAltText: E
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(y, { ...D,
                        unoptimized: x.unoptimized,
                        placeholder: x.placeholder,
                        fill: x.fill,
                        onLoadRef: m,
                        onLoadingCompleteRef: g,
                        setBlurComplete: w,
                        setShowAltText: T,
                        sizesInput: t.sizes,
                        ref: e
                    }), x.priority ? (0, s.jsx)(v, {
                        isAppRouter: !r,
                        imgAttributes: D
                    }) : null]
                })
            });
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        6566: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return w
                }
            });
            let n = r(6552),
                i = r(9176),
                s = n._(r(5330)),
                o = r(4687),
                a = r(8633),
                u = r(2553),
                l = r(9545),
                c = r(7105),
                h = r(3498),
                f = r(8885),
                d = r(5910),
                p = r(6236),
                m = r(2996),
                g = r(5145),
                y = new Set;

            function v(t, e, r, n, i, s) {
                if ("undefined" != typeof window && (s || (0, a.isLocalURL)(e))) {
                    if (!n.bypassPrefetchedCheck) {
                        let i = e + "%" + r + "%" + (void 0 !== n.locale ? n.locale : "locale" in t ? t.locale : void 0);
                        if (y.has(i)) return;
                        y.add(i)
                    }(async () => s ? t.prefetch(e, i) : t.prefetch(e, r, n))().catch(t => {})
                }
            }

            function b(t) {
                return "string" == typeof t ? t : (0, u.formatUrl)(t)
            }
            let w = s.default.forwardRef(function(t, e) {
                let r, n;
                let {
                    href: u,
                    as: y,
                    children: w,
                    prefetch: E = null,
                    passHref: T,
                    replace: D,
                    shallow: x,
                    scroll: S,
                    locale: A,
                    onClick: P,
                    onMouseEnter: R,
                    onTouchStart: C,
                    legacyBehavior: N = !1,
                    ...O
                } = t;
                r = w, N && ("string" == typeof r || "number" == typeof r) && (r = (0, i.jsx)("a", {
                    children: r
                }));
                let I = s.default.useContext(h.RouterContext),
                    L = s.default.useContext(f.AppRouterContext),
                    M = null != I ? I : L,
                    k = !I,
                    U = !1 !== E,
                    B = null === E ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
                    {
                        href: V,
                        as: j
                    } = s.default.useMemo(() => {
                        if (!I) {
                            let t = b(u);
                            return {
                                href: t,
                                as: y ? b(y) : t
                            }
                        }
                        let [t, e] = (0, o.resolveHref)(I, u, !0);
                        return {
                            href: t,
                            as: y ? (0, o.resolveHref)(I, y) : e || t
                        }
                    }, [I, u, y]),
                    _ = s.default.useRef(V),
                    q = s.default.useRef(j);
                N && (n = s.default.Children.only(r));
                let F = N ? n && "object" == typeof n && n.ref : e,
                    [G, X, z] = (0, d.useIntersection)({
                        rootMargin: "200px"
                    }),
                    H = s.default.useCallback(t => {
                        (q.current !== j || _.current !== V) && (z(), q.current = j, _.current = V), G(t), F && ("function" == typeof F ? F(t) : "object" == typeof F && (F.current = t))
                    }, [j, F, V, z, G]);
                s.default.useEffect(() => {
                    M && X && U && v(M, V, j, {
                        locale: A
                    }, {
                        kind: B
                    }, k)
                }, [j, V, X, A, U, null == I ? void 0 : I.locale, M, k, B]);
                let $ = {
                    ref: H,
                    onClick(t) {
                        N || "function" != typeof P || P(t), N && n.props && "function" == typeof n.props.onClick && n.props.onClick(t), M && !t.defaultPrevented && function(t, e, r, n, i, o, u, l, c) {
                            let {
                                nodeName: h
                            } = t.currentTarget;
                            if ("A" === h.toUpperCase() && (function(t) {
                                    let e = t.currentTarget.getAttribute("target");
                                    return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                                }(t) || !c && !(0, a.isLocalURL)(r))) return;
                            t.preventDefault();
                            let f = () => {
                                let t = null == u || u;
                                "beforePopState" in e ? e[i ? "replace" : "push"](r, n, {
                                    shallow: o,
                                    locale: l,
                                    scroll: t
                                }) : e[i ? "replace" : "push"](n || r, {
                                    scroll: t
                                })
                            };
                            c ? s.default.startTransition(f) : f()
                        }(t, M, V, j, D, x, S, A, k)
                    },
                    onMouseEnter(t) {
                        N || "function" != typeof R || R(t), N && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(t), M && (U || !k) && v(M, V, j, {
                            locale: A,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: B
                        }, k)
                    },
                    onTouchStart: function(t) {
                        N || "function" != typeof C || C(t), N && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(t), M && (U || !k) && v(M, V, j, {
                            locale: A,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: B
                        }, k)
                    }
                };
                if ((0, l.isAbsoluteUrl)(j)) $.href = j;
                else if (!N || T || "a" === n.type && !("href" in n.props)) {
                    let t = void 0 !== A ? A : null == I ? void 0 : I.locale,
                        e = (null == I ? void 0 : I.isLocaleDomain) && (0, p.getDomainLocale)(j, t, null == I ? void 0 : I.locales, null == I ? void 0 : I.domainLocales);
                    $.href = e || (0, m.addBasePath)((0, c.addLocale)(j, t, null == I ? void 0 : I.defaultLocale))
                }
                return N ? s.default.cloneElement(n, $) : (0, i.jsx)("a", { ...O,
                    ...$,
                    children: r
                })
            });
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        8127: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    cancelIdleCallback: function() {
                        return n
                    },
                    requestIdleCallback: function() {
                        return r
                    }
                });
            let r = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
                    let e = Date.now();
                    return self.setTimeout(function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }, 1)
                },
                n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(t) {
                    return clearTimeout(t)
                };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        4687: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "resolveHref", {
                enumerable: !0,
                get: function() {
                    return h
                }
            });
            let n = r(7802),
                i = r(2553),
                s = r(6205),
                o = r(9545),
                a = r(2648),
                u = r(8633),
                l = r(5345),
                c = r(2831);

            function h(t, e, r) {
                let h;
                let f = "string" == typeof e ? e : (0, i.formatWithValidation)(e),
                    d = f.match(/^[a-zA-Z]{1,}:\/\//),
                    p = d ? f.slice(d[0].length) : f;
                if ((p.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
                    console.error("Invalid href '" + f + "' passed to next/router in page: '" + t.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                    let e = (0, o.normalizeRepeatedSlashes)(p);
                    f = (d ? d[0] : "") + e
                }
                if (!(0, u.isLocalURL)(f)) return r ? [f] : f;
                try {
                    h = new URL(f.startsWith("#") ? t.asPath : t.pathname, "http://n")
                } catch (t) {
                    h = new URL("/", "http://n")
                }
                try {
                    let t = new URL(f, h);
                    t.pathname = (0, a.normalizePathTrailingSlash)(t.pathname);
                    let e = "";
                    if ((0, l.isDynamicRoute)(t.pathname) && t.searchParams && r) {
                        let r = (0, n.searchParamsToUrlQuery)(t.searchParams),
                            {
                                result: o,
                                params: a
                            } = (0, c.interpolateAs)(t.pathname, t.pathname, r);
                        o && (e = (0, i.formatWithValidation)({
                            pathname: o,
                            hash: t.hash,
                            query: (0, s.omit)(r, a)
                        }))
                    }
                    let o = t.origin === h.origin ? t.href.slice(t.origin.length) : t.href;
                    return r ? [o, e || o] : o
                } catch (t) {
                    return r ? [f] : f
                }
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        5910: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let n = r(5330),
                i = r(8127),
                s = "function" == typeof IntersectionObserver,
                o = new Map,
                a = [];

            function u(t) {
                let {
                    rootRef: e,
                    rootMargin: r,
                    disabled: u
                } = t, l = u || !s, [c, h] = (0, n.useState)(!1), f = (0, n.useRef)(null), d = (0, n.useCallback)(t => {
                    f.current = t
                }, []);
                return (0, n.useEffect)(() => {
                    if (s) {
                        if (l || c) return;
                        let t = f.current;
                        if (t && t.tagName) return function(t, e, r) {
                            let {
                                id: n,
                                observer: i,
                                elements: s
                            } = function(t) {
                                let e;
                                let r = {
                                        root: t.root || null,
                                        margin: t.rootMargin || ""
                                    },
                                    n = a.find(t => t.root === r.root && t.margin === r.margin);
                                if (n && (e = o.get(n))) return e;
                                let i = new Map;
                                return e = {
                                    id: r,
                                    observer: new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            let e = i.get(t.target),
                                                r = t.isIntersecting || t.intersectionRatio > 0;
                                            e && r && e(r)
                                        })
                                    }, t),
                                    elements: i
                                }, a.push(r), o.set(r, e), e
                            }(r);
                            return s.set(t, e), i.observe(t),
                                function() {
                                    if (s.delete(t), i.unobserve(t), 0 === s.size) {
                                        i.disconnect(), o.delete(n);
                                        let t = a.findIndex(t => t.root === n.root && t.margin === n.margin);
                                        t > -1 && a.splice(t, 1)
                                    }
                                }
                        }(t, t => t && h(t), {
                            root: null == e ? void 0 : e.current,
                            rootMargin: r
                        })
                    } else if (!c) {
                        let t = (0, i.requestIdleCallback)(() => h(!0));
                        return () => (0, i.cancelIdleCallback)(t)
                    }
                }, [l, r, e, c, f.current]), [d, c, (0, n.useCallback)(() => {
                    h(!1)
                }, [])]
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        2599: function(t) {
            ! function() {
                var e = {
                        675: function(t, e) {
                            "use strict";
                            e.byteLength = function(t) {
                                var e = u(t),
                                    r = e[0],
                                    n = e[1];
                                return (r + n) * 3 / 4 - n
                            }, e.toByteArray = function(t) {
                                var e, r, s = u(t),
                                    o = s[0],
                                    a = s[1],
                                    l = new i((o + a) * 3 / 4 - a),
                                    c = 0,
                                    h = a > 0 ? o - 4 : o;
                                for (r = 0; r < h; r += 4) e = n[t.charCodeAt(r)] << 18 | n[t.charCodeAt(r + 1)] << 12 | n[t.charCodeAt(r + 2)] << 6 | n[t.charCodeAt(r + 3)], l[c++] = e >> 16 & 255, l[c++] = e >> 8 & 255, l[c++] = 255 & e;
                                return 2 === a && (e = n[t.charCodeAt(r)] << 2 | n[t.charCodeAt(r + 1)] >> 4, l[c++] = 255 & e), 1 === a && (e = n[t.charCodeAt(r)] << 10 | n[t.charCodeAt(r + 1)] << 4 | n[t.charCodeAt(r + 2)] >> 2, l[c++] = e >> 8 & 255, l[c++] = 255 & e), l
                            }, e.fromByteArray = function(t) {
                                for (var e, n = t.length, i = n % 3, s = [], o = 0, a = n - i; o < a; o += 16383) s.push(function(t, e, n) {
                                    for (var i, s = [], o = e; o < n; o += 3) s.push(r[(i = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2])) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                                    return s.join("")
                                }(t, o, o + 16383 > a ? a : o + 16383));
                                return 1 === i ? s.push(r[(e = t[n - 1]) >> 2] + r[e << 4 & 63] + "==") : 2 === i && s.push(r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="), s.join("")
                            };
                            for (var r = [], n = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = s.length; o < a; ++o) r[o] = s[o], n[s.charCodeAt(o)] = o;

                            function u(t) {
                                var e = t.length;
                                if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                                var r = t.indexOf("="); - 1 === r && (r = e);
                                var n = r === e ? 0 : 4 - r % 4;
                                return [r, n]
                            }
                            n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
                        },
                        72: function(t, e, r) {
                            "use strict";
                            var n = r(675),
                                i = r(783),
                                s = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

                            function o(t) {
                                if (t > 2147483647) throw RangeError('The value "' + t + '" is invalid for option "size"');
                                var e = new Uint8Array(t);
                                return Object.setPrototypeOf(e, a.prototype), e
                            }

                            function a(t, e, r) {
                                if ("number" == typeof t) {
                                    if ("string" == typeof e) throw TypeError('The "string" argument must be of type string. Received type number');
                                    return c(t)
                                }
                                return u(t, e, r)
                            }

                            function u(t, e, r) {
                                if ("string" == typeof t) return function(t, e) {
                                    if (("string" != typeof e || "" === e) && (e = "utf8"), !a.isEncoding(e)) throw TypeError("Unknown encoding: " + e);
                                    var r = 0 | d(t, e),
                                        n = o(r),
                                        i = n.write(t, e);
                                    return i !== r && (n = n.slice(0, i)), n
                                }(t, e);
                                if (ArrayBuffer.isView(t)) return h(t);
                                if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                                if (C(t, ArrayBuffer) || t && C(t.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (C(t, SharedArrayBuffer) || t && C(t.buffer, SharedArrayBuffer))) return function(t, e, r) {
                                    var n;
                                    if (e < 0 || t.byteLength < e) throw RangeError('"offset" is outside of buffer bounds');
                                    if (t.byteLength < e + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                                    return Object.setPrototypeOf(n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), a.prototype), n
                                }(t, e, r);
                                if ("number" == typeof t) throw TypeError('The "value" argument must not be of type number. Received type number');
                                var n = t.valueOf && t.valueOf();
                                if (null != n && n !== t) return a.from(n, e, r);
                                var i = function(t) {
                                    if (a.isBuffer(t)) {
                                        var e, r = 0 | f(t.length),
                                            n = o(r);
                                        return 0 === n.length || t.copy(n, 0, 0, r), n
                                    }
                                    return void 0 !== t.length ? "number" != typeof t.length || (e = t.length) != e ? o(0) : h(t) : "Buffer" === t.type && Array.isArray(t.data) ? h(t.data) : void 0
                                }(t);
                                if (i) return i;
                                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return a.from(t[Symbol.toPrimitive]("string"), e, r);
                                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
                            }

                            function l(t) {
                                if ("number" != typeof t) throw TypeError('"size" argument must be of type number');
                                if (t < 0) throw RangeError('The value "' + t + '" is invalid for option "size"')
                            }

                            function c(t) {
                                return l(t), o(t < 0 ? 0 : 0 | f(t))
                            }

                            function h(t) {
                                for (var e = t.length < 0 ? 0 : 0 | f(t.length), r = o(e), n = 0; n < e; n += 1) r[n] = 255 & t[n];
                                return r
                            }

                            function f(t) {
                                if (t >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                                return 0 | t
                            }

                            function d(t, e) {
                                if (a.isBuffer(t)) return t.length;
                                if (ArrayBuffer.isView(t) || C(t, ArrayBuffer)) return t.byteLength;
                                if ("string" != typeof t) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                                var r = t.length,
                                    n = arguments.length > 2 && !0 === arguments[2];
                                if (!n && 0 === r) return 0;
                                for (var i = !1;;) switch (e) {
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                        return r;
                                    case "utf8":
                                    case "utf-8":
                                        return S(t).length;
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return 2 * r;
                                    case "hex":
                                        return r >>> 1;
                                    case "base64":
                                        return P(t).length;
                                    default:
                                        if (i) return n ? -1 : S(t).length;
                                        e = ("" + e).toLowerCase(), i = !0
                                }
                            }

                            function p(t, e, r) {
                                var i, s, o = !1;
                                if ((void 0 === e || e < 0) && (e = 0), e > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (e >>>= 0))) return "";
                                for (t || (t = "utf8");;) switch (t) {
                                    case "hex":
                                        return function(t, e, r) {
                                            var n = t.length;
                                            (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                                            for (var i = "", s = e; s < r; ++s) i += N[t[s]];
                                            return i
                                        }(this, e, r);
                                    case "utf8":
                                    case "utf-8":
                                        return v(this, e, r);
                                    case "ascii":
                                        return function(t, e, r) {
                                            var n = "";
                                            r = Math.min(t.length, r);
                                            for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                                            return n
                                        }(this, e, r);
                                    case "latin1":
                                    case "binary":
                                        return function(t, e, r) {
                                            var n = "";
                                            r = Math.min(t.length, r);
                                            for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                                            return n
                                        }(this, e, r);
                                    case "base64":
                                        return i = e, s = r, 0 === i && s === this.length ? n.fromByteArray(this) : n.fromByteArray(this.slice(i, s));
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return function(t, e, r) {
                                            for (var n = t.slice(e, r), i = "", s = 0; s < n.length; s += 2) i += String.fromCharCode(n[s] + 256 * n[s + 1]);
                                            return i
                                        }(this, e, r);
                                    default:
                                        if (o) throw TypeError("Unknown encoding: " + t);
                                        t = (t + "").toLowerCase(), o = !0
                                }
                            }

                            function m(t, e, r) {
                                var n = t[e];
                                t[e] = t[r], t[r] = n
                            }

                            function g(t, e, r, n, i) {
                                var s;
                                if (0 === t.length) return -1;
                                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), (s = r = +r) != s && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                                    if (i) return -1;
                                    r = t.length - 1
                                } else if (r < 0) {
                                    if (!i) return -1;
                                    r = 0
                                }
                                if ("string" == typeof e && (e = a.from(e, n)), a.isBuffer(e)) return 0 === e.length ? -1 : y(t, e, r, n, i);
                                if ("number" == typeof e) return (e &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : y(t, [e], r, n, i);
                                throw TypeError("val must be string, number or Buffer")
                            }

                            function y(t, e, r, n, i) {
                                var s, o = 1,
                                    a = t.length,
                                    u = e.length;
                                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                                    if (t.length < 2 || e.length < 2) return -1;
                                    o = 2, a /= 2, u /= 2, r /= 2
                                }

                                function l(t, e) {
                                    return 1 === o ? t[e] : t.readUInt16BE(e * o)
                                }
                                if (i) {
                                    var c = -1;
                                    for (s = r; s < a; s++)
                                        if (l(t, s) === l(e, -1 === c ? 0 : s - c)) {
                                            if (-1 === c && (c = s), s - c + 1 === u) return c * o
                                        } else -1 !== c && (s -= s - c), c = -1
                                } else
                                    for (r + u > a && (r = a - u), s = r; s >= 0; s--) {
                                        for (var h = !0, f = 0; f < u; f++)
                                            if (l(t, s + f) !== l(e, f)) {
                                                h = !1;
                                                break
                                            }
                                        if (h) return s
                                    }
                                return -1
                            }

                            function v(t, e, r) {
                                r = Math.min(t.length, r);
                                for (var n = [], i = e; i < r;) {
                                    var s, o, a, u, l = t[i],
                                        c = null,
                                        h = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
                                    if (i + h <= r) switch (h) {
                                        case 1:
                                            l < 128 && (c = l);
                                            break;
                                        case 2:
                                            (192 & (s = t[i + 1])) == 128 && (u = (31 & l) << 6 | 63 & s) > 127 && (c = u);
                                            break;
                                        case 3:
                                            s = t[i + 1], o = t[i + 2], (192 & s) == 128 && (192 & o) == 128 && (u = (15 & l) << 12 | (63 & s) << 6 | 63 & o) > 2047 && (u < 55296 || u > 57343) && (c = u);
                                            break;
                                        case 4:
                                            s = t[i + 1], o = t[i + 2], a = t[i + 3], (192 & s) == 128 && (192 & o) == 128 && (192 & a) == 128 && (u = (15 & l) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & a) > 65535 && u < 1114112 && (c = u)
                                    }
                                    null === c ? (c = 65533, h = 1) : c > 65535 && (c -= 65536, n.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), n.push(c), i += h
                                }
                                return function(t) {
                                    var e = t.length;
                                    if (e <= 4096) return String.fromCharCode.apply(String, t);
                                    for (var r = "", n = 0; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += 4096));
                                    return r
                                }(n)
                            }

                            function b(t, e, r) {
                                if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
                                if (t + e > r) throw RangeError("Trying to access beyond buffer length")
                            }

                            function w(t, e, r, n, i, s) {
                                if (!a.isBuffer(t)) throw TypeError('"buffer" argument must be a Buffer instance');
                                if (e > i || e < s) throw RangeError('"value" argument is out of bounds');
                                if (r + n > t.length) throw RangeError("Index out of range")
                            }

                            function E(t, e, r, n, i, s) {
                                if (r + n > t.length || r < 0) throw RangeError("Index out of range")
                            }

                            function T(t, e, r, n, s) {
                                return e = +e, r >>>= 0, s || E(t, e, r, 4, 34028234663852886e22, -34028234663852886e22), i.write(t, e, r, n, 23, 4), r + 4
                            }

                            function D(t, e, r, n, s) {
                                return e = +e, r >>>= 0, s || E(t, e, r, 8, 17976931348623157e292, -17976931348623157e292), i.write(t, e, r, n, 52, 8), r + 8
                            }
                            e.Buffer = a, e.SlowBuffer = function(t) {
                                return +t != t && (t = 0), a.alloc(+t)
                            }, e.INSPECT_MAX_BYTES = 50, e.kMaxLength = 2147483647, a.TYPED_ARRAY_SUPPORT = function() {
                                try {
                                    var t = new Uint8Array(1),
                                        e = {
                                            foo: function() {
                                                return 42
                                            }
                                        };
                                    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                                } catch (t) {
                                    return !1
                                }
                            }(), a.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(a.prototype, "parent", {
                                enumerable: !0,
                                get: function() {
                                    if (a.isBuffer(this)) return this.buffer
                                }
                            }), Object.defineProperty(a.prototype, "offset", {
                                enumerable: !0,
                                get: function() {
                                    if (a.isBuffer(this)) return this.byteOffset
                                }
                            }), a.poolSize = 8192, a.from = function(t, e, r) {
                                return u(t, e, r)
                            }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array), a.alloc = function(t, e, r) {
                                return (l(t), t <= 0) ? o(t) : void 0 !== e ? "string" == typeof r ? o(t).fill(e, r) : o(t).fill(e) : o(t)
                            }, a.allocUnsafe = function(t) {
                                return c(t)
                            }, a.allocUnsafeSlow = function(t) {
                                return c(t)
                            }, a.isBuffer = function(t) {
                                return null != t && !0 === t._isBuffer && t !== a.prototype
                            }, a.compare = function(t, e) {
                                if (C(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), C(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(t) || !a.isBuffer(e)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                                if (t === e) return 0;
                                for (var r = t.length, n = e.length, i = 0, s = Math.min(r, n); i < s; ++i)
                                    if (t[i] !== e[i]) {
                                        r = t[i], n = e[i];
                                        break
                                    }
                                return r < n ? -1 : n < r ? 1 : 0
                            }, a.isEncoding = function(t) {
                                switch (String(t).toLowerCase()) {
                                    case "hex":
                                    case "utf8":
                                    case "utf-8":
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                    case "base64":
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return !0;
                                    default:
                                        return !1
                                }
                            }, a.concat = function(t, e) {
                                if (!Array.isArray(t)) throw TypeError('"list" argument must be an Array of Buffers');
                                if (0 === t.length) return a.alloc(0);
                                if (void 0 === e)
                                    for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
                                var r, n = a.allocUnsafe(e),
                                    i = 0;
                                for (r = 0; r < t.length; ++r) {
                                    var s = t[r];
                                    if (C(s, Uint8Array) && (s = a.from(s)), !a.isBuffer(s)) throw TypeError('"list" argument must be an Array of Buffers');
                                    s.copy(n, i), i += s.length
                                }
                                return n
                            }, a.byteLength = d, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
                                var t = this.length;
                                if (t % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                                for (var e = 0; e < t; e += 2) m(this, e, e + 1);
                                return this
                            }, a.prototype.swap32 = function() {
                                var t = this.length;
                                if (t % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                                for (var e = 0; e < t; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2);
                                return this
                            }, a.prototype.swap64 = function() {
                                var t = this.length;
                                if (t % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                                for (var e = 0; e < t; e += 8) m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
                                return this
                            }, a.prototype.toString = function() {
                                var t = this.length;
                                return 0 === t ? "" : 0 == arguments.length ? v(this, 0, t) : p.apply(this, arguments)
                            }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(t) {
                                if (!a.isBuffer(t)) throw TypeError("Argument must be a Buffer");
                                return this === t || 0 === a.compare(this, t)
                            }, a.prototype.inspect = function() {
                                var t = "",
                                    r = e.INSPECT_MAX_BYTES;
                                return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
                            }, s && (a.prototype[s] = a.prototype.inspect), a.prototype.compare = function(t, e, r, n, i) {
                                if (C(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(t)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw RangeError("out of range index");
                                if (n >= i && e >= r) return 0;
                                if (n >= i) return -1;
                                if (e >= r) return 1;
                                if (e >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === t) return 0;
                                for (var s = i - n, o = r - e, u = Math.min(s, o), l = this.slice(n, i), c = t.slice(e, r), h = 0; h < u; ++h)
                                    if (l[h] !== c[h]) {
                                        s = l[h], o = c[h];
                                        break
                                    }
                                return s < o ? -1 : o < s ? 1 : 0
                            }, a.prototype.includes = function(t, e, r) {
                                return -1 !== this.indexOf(t, e, r)
                            }, a.prototype.indexOf = function(t, e, r) {
                                return g(this, t, e, r, !0)
                            }, a.prototype.lastIndexOf = function(t, e, r) {
                                return g(this, t, e, r, !1)
                            }, a.prototype.write = function(t, e, r, n) {
                                if (void 0 === e) n = "utf8", r = this.length, e = 0;
                                else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
                                else if (isFinite(e)) e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                                else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                var i, s, o, a, u, l, c, h, f, d, p, m, g = this.length - e;
                                if ((void 0 === r || r > g) && (r = g), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw RangeError("Attempt to write outside buffer bounds");
                                n || (n = "utf8");
                                for (var y = !1;;) switch (n) {
                                    case "hex":
                                        return function(t, e, r, n) {
                                            r = Number(r) || 0;
                                            var i = t.length - r;
                                            n ? (n = Number(n)) > i && (n = i) : n = i;
                                            var s = e.length;
                                            n > s / 2 && (n = s / 2);
                                            for (var o = 0; o < n; ++o) {
                                                var a = parseInt(e.substr(2 * o, 2), 16);
                                                if (a != a) break;
                                                t[r + o] = a
                                            }
                                            return o
                                        }(this, t, e, r);
                                    case "utf8":
                                    case "utf-8":
                                        return u = e, l = r, R(S(t, this.length - u), this, u, l);
                                    case "ascii":
                                        return c = e, h = r, R(A(t), this, c, h);
                                    case "latin1":
                                    case "binary":
                                        return i = this, s = t, o = e, a = r, R(A(s), i, o, a);
                                    case "base64":
                                        return f = e, d = r, R(P(t), this, f, d);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return p = e, m = r, R(function(t, e) {
                                            for (var r, n, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = (r = t.charCodeAt(s)) >> 8, i.push(r % 256), i.push(n);
                                            return i
                                        }(t, this.length - p), this, p, m);
                                    default:
                                        if (y) throw TypeError("Unknown encoding: " + n);
                                        n = ("" + n).toLowerCase(), y = !0
                                }
                            }, a.prototype.toJSON = function() {
                                return {
                                    type: "Buffer",
                                    data: Array.prototype.slice.call(this._arr || this, 0)
                                }
                            }, a.prototype.slice = function(t, e) {
                                var r = this.length;
                                t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                                var n = this.subarray(t, e);
                                return Object.setPrototypeOf(n, a.prototype), n
                            }, a.prototype.readUIntLE = function(t, e, r) {
                                t >>>= 0, e >>>= 0, r || b(t, e, this.length);
                                for (var n = this[t], i = 1, s = 0; ++s < e && (i *= 256);) n += this[t + s] * i;
                                return n
                            }, a.prototype.readUIntBE = function(t, e, r) {
                                t >>>= 0, e >>>= 0, r || b(t, e, this.length);
                                for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) n += this[t + --e] * i;
                                return n
                            }, a.prototype.readUInt8 = function(t, e) {
                                return t >>>= 0, e || b(t, 1, this.length), this[t]
                            }, a.prototype.readUInt16LE = function(t, e) {
                                return t >>>= 0, e || b(t, 2, this.length), this[t] | this[t + 1] << 8
                            }, a.prototype.readUInt16BE = function(t, e) {
                                return t >>>= 0, e || b(t, 2, this.length), this[t] << 8 | this[t + 1]
                            }, a.prototype.readUInt32LE = function(t, e) {
                                return t >>>= 0, e || b(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                            }, a.prototype.readUInt32BE = function(t, e) {
                                return t >>>= 0, e || b(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                            }, a.prototype.readIntLE = function(t, e, r) {
                                t >>>= 0, e >>>= 0, r || b(t, e, this.length);
                                for (var n = this[t], i = 1, s = 0; ++s < e && (i *= 256);) n += this[t + s] * i;
                                return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
                            }, a.prototype.readIntBE = function(t, e, r) {
                                t >>>= 0, e >>>= 0, r || b(t, e, this.length);
                                for (var n = e, i = 1, s = this[t + --n]; n > 0 && (i *= 256);) s += this[t + --n] * i;
                                return s >= (i *= 128) && (s -= Math.pow(2, 8 * e)), s
                            }, a.prototype.readInt8 = function(t, e) {
                                return (t >>>= 0, e || b(t, 1, this.length), 128 & this[t]) ? -((255 - this[t] + 1) * 1) : this[t]
                            }, a.prototype.readInt16LE = function(t, e) {
                                t >>>= 0, e || b(t, 2, this.length);
                                var r = this[t] | this[t + 1] << 8;
                                return 32768 & r ? 4294901760 | r : r
                            }, a.prototype.readInt16BE = function(t, e) {
                                t >>>= 0, e || b(t, 2, this.length);
                                var r = this[t + 1] | this[t] << 8;
                                return 32768 & r ? 4294901760 | r : r
                            }, a.prototype.readInt32LE = function(t, e) {
                                return t >>>= 0, e || b(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                            }, a.prototype.readInt32BE = function(t, e) {
                                return t >>>= 0, e || b(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                            }, a.prototype.readFloatLE = function(t, e) {
                                return t >>>= 0, e || b(t, 4, this.length), i.read(this, t, !0, 23, 4)
                            }, a.prototype.readFloatBE = function(t, e) {
                                return t >>>= 0, e || b(t, 4, this.length), i.read(this, t, !1, 23, 4)
                            }, a.prototype.readDoubleLE = function(t, e) {
                                return t >>>= 0, e || b(t, 8, this.length), i.read(this, t, !0, 52, 8)
                            }, a.prototype.readDoubleBE = function(t, e) {
                                return t >>>= 0, e || b(t, 8, this.length), i.read(this, t, !1, 52, 8)
                            }, a.prototype.writeUIntLE = function(t, e, r, n) {
                                if (t = +t, e >>>= 0, r >>>= 0, !n) {
                                    var i = Math.pow(2, 8 * r) - 1;
                                    w(this, t, e, r, i, 0)
                                }
                                var s = 1,
                                    o = 0;
                                for (this[e] = 255 & t; ++o < r && (s *= 256);) this[e + o] = t / s & 255;
                                return e + r
                            }, a.prototype.writeUIntBE = function(t, e, r, n) {
                                if (t = +t, e >>>= 0, r >>>= 0, !n) {
                                    var i = Math.pow(2, 8 * r) - 1;
                                    w(this, t, e, r, i, 0)
                                }
                                var s = r - 1,
                                    o = 1;
                                for (this[e + s] = 255 & t; --s >= 0 && (o *= 256);) this[e + s] = t / o & 255;
                                return e + r
                            }, a.prototype.writeUInt8 = function(t, e, r) {
                                return t = +t, e >>>= 0, r || w(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
                            }, a.prototype.writeUInt16LE = function(t, e, r) {
                                return t = +t, e >>>= 0, r || w(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                            }, a.prototype.writeUInt16BE = function(t, e, r) {
                                return t = +t, e >>>= 0, r || w(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                            }, a.prototype.writeUInt32LE = function(t, e, r) {
                                return t = +t, e >>>= 0, r || w(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
                            }, a.prototype.writeUInt32BE = function(t, e, r) {
                                return t = +t, e >>>= 0, r || w(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                            }, a.prototype.writeIntLE = function(t, e, r, n) {
                                if (t = +t, e >>>= 0, !n) {
                                    var i = Math.pow(2, 8 * r - 1);
                                    w(this, t, e, r, i - 1, -i)
                                }
                                var s = 0,
                                    o = 1,
                                    a = 0;
                                for (this[e] = 255 & t; ++s < r && (o *= 256);) t < 0 && 0 === a && 0 !== this[e + s - 1] && (a = 1), this[e + s] = (t / o >> 0) - a & 255;
                                return e + r
                            }, a.prototype.writeIntBE = function(t, e, r, n) {
                                if (t = +t, e >>>= 0, !n) {
                                    var i = Math.pow(2, 8 * r - 1);
                                    w(this, t, e, r, i - 1, -i)
                                }
                                var s = r - 1,
                                    o = 1,
                                    a = 0;
                                for (this[e + s] = 255 & t; --s >= 0 && (o *= 256);) t < 0 && 0 === a && 0 !== this[e + s + 1] && (a = 1), this[e + s] = (t / o >> 0) - a & 255;
                                return e + r
                            }, a.prototype.writeInt8 = function(t, e, r) {
                                return t = +t, e >>>= 0, r || w(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                            }, a.prototype.writeInt16LE = function(t, e, r) {
                                return t = +t, e >>>= 0, r || w(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
                            }, a.prototype.writeInt16BE = function(t, e, r) {
                                return t = +t, e >>>= 0, r || w(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
                            }, a.prototype.writeInt32LE = function(t, e, r) {
                                return t = +t, e >>>= 0, r || w(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
                            }, a.prototype.writeInt32BE = function(t, e, r) {
                                return t = +t, e >>>= 0, r || w(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
                            }, a.prototype.writeFloatLE = function(t, e, r) {
                                return T(this, t, e, !0, r)
                            }, a.prototype.writeFloatBE = function(t, e, r) {
                                return T(this, t, e, !1, r)
                            }, a.prototype.writeDoubleLE = function(t, e, r) {
                                return D(this, t, e, !0, r)
                            }, a.prototype.writeDoubleBE = function(t, e, r) {
                                return D(this, t, e, !1, r)
                            }, a.prototype.copy = function(t, e, r, n) {
                                if (!a.isBuffer(t)) throw TypeError("argument should be a Buffer");
                                if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r || 0 === t.length || 0 === this.length) return 0;
                                if (e < 0) throw RangeError("targetStart out of bounds");
                                if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                                if (n < 0) throw RangeError("sourceEnd out of bounds");
                                n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                                var i = n - r;
                                if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, r, n);
                                else if (this === t && r < e && e < n)
                                    for (var s = i - 1; s >= 0; --s) t[s + e] = this[s + r];
                                else Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
                                return i
                            }, a.prototype.fill = function(t, e, r, n) {
                                if ("string" == typeof t) {
                                    if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
                                    if ("string" == typeof n && !a.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                                    if (1 === t.length) {
                                        var i, s = t.charCodeAt(0);
                                        ("utf8" === n && s < 128 || "latin1" === n) && (t = s)
                                    }
                                } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                                if (e < 0 || this.length < e || this.length < r) throw RangeError("Out of range index");
                                if (r <= e) return this;
                                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                                    for (i = e; i < r; ++i) this[i] = t;
                                else {
                                    var o = a.isBuffer(t) ? t : a.from(t, n),
                                        u = o.length;
                                    if (0 === u) throw TypeError('The value "' + t + '" is invalid for argument "value"');
                                    for (i = 0; i < r - e; ++i) this[i + e] = o[i % u]
                                }
                                return this
                            };
                            var x = /[^+/0-9A-Za-z-_]/g;

                            function S(t, e) {
                                e = e || 1 / 0;
                                for (var r, n = t.length, i = null, s = [], o = 0; o < n; ++o) {
                                    if ((r = t.charCodeAt(o)) > 55295 && r < 57344) {
                                        if (!i) {
                                            if (r > 56319 || o + 1 === n) {
                                                (e -= 3) > -1 && s.push(239, 191, 189);
                                                continue
                                            }
                                            i = r;
                                            continue
                                        }
                                        if (r < 56320) {
                                            (e -= 3) > -1 && s.push(239, 191, 189), i = r;
                                            continue
                                        }
                                        r = (i - 55296 << 10 | r - 56320) + 65536
                                    } else i && (e -= 3) > -1 && s.push(239, 191, 189);
                                    if (i = null, r < 128) {
                                        if ((e -= 1) < 0) break;
                                        s.push(r)
                                    } else if (r < 2048) {
                                        if ((e -= 2) < 0) break;
                                        s.push(r >> 6 | 192, 63 & r | 128)
                                    } else if (r < 65536) {
                                        if ((e -= 3) < 0) break;
                                        s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                                    } else if (r < 1114112) {
                                        if ((e -= 4) < 0) break;
                                        s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                                    } else throw Error("Invalid code point")
                                }
                                return s
                            }

                            function A(t) {
                                for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                                return e
                            }

                            function P(t) {
                                return n.toByteArray(function(t) {
                                    if ((t = (t = t.split("=")[0]).trim().replace(x, "")).length < 2) return "";
                                    for (; t.length % 4 != 0;) t += "=";
                                    return t
                                }(t))
                            }

                            function R(t, e, r, n) {
                                for (var i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i) e[i + r] = t[i];
                                return i
                            }

                            function C(t, e) {
                                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
                            }
                            var N = function() {
                                for (var t = "0123456789abcdef", e = Array(256), r = 0; r < 16; ++r)
                                    for (var n = 16 * r, i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
                                return e
                            }()
                        },
                        783: function(t, e) {
                            e.read = function(t, e, r, n, i) {
                                var s, o, a = 8 * i - n - 1,
                                    u = (1 << a) - 1,
                                    l = u >> 1,
                                    c = -7,
                                    h = r ? i - 1 : 0,
                                    f = r ? -1 : 1,
                                    d = t[e + h];
                                for (h += f, s = d & (1 << -c) - 1, d >>= -c, c += a; c > 0; s = 256 * s + t[e + h], h += f, c -= 8);
                                for (o = s & (1 << -c) - 1, s >>= -c, c += n; c > 0; o = 256 * o + t[e + h], h += f, c -= 8);
                                if (0 === s) s = 1 - l;
                                else {
                                    if (s === u) return o ? NaN : 1 / 0 * (d ? -1 : 1);
                                    o += Math.pow(2, n), s -= l
                                }
                                return (d ? -1 : 1) * o * Math.pow(2, s - n)
                            }, e.write = function(t, e, r, n, i, s) {
                                var o, a, u, l = 8 * s - i - 1,
                                    c = (1 << l) - 1,
                                    h = c >> 1,
                                    f = 23 === i ? 5960464477539062e-23 : 0,
                                    d = n ? 0 : s - 1,
                                    p = n ? 1 : -1,
                                    m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                                for (isNaN(e = Math.abs(e)) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, o = c) : (o = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), o + h >= 1 ? e += f / u : e += f * Math.pow(2, 1 - h), e * u >= 2 && (o++, u /= 2), o + h >= c ? (a = 0, o = c) : o + h >= 1 ? (a = (e * u - 1) * Math.pow(2, i), o += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, i), o = 0)); i >= 8; t[r + d] = 255 & a, d += p, a /= 256, i -= 8);
                                for (o = o << i | a, l += i; l > 0; t[r + d] = 255 & o, d += p, o /= 256, l -= 8);
                                t[r + d - p] |= 128 * m
                            }
                        }
                    },
                    r = {};

                function n(t) {
                    var i = r[t];
                    if (void 0 !== i) return i.exports;
                    var s = r[t] = {
                            exports: {}
                        },
                        o = !0;
                    try {
                        e[t](s, s.exports, n), o = !1
                    } finally {
                        o && delete r[t]
                    }
                    return s.exports
                }
                n.ab = "//";
                var i = n(72);
                t.exports = i
            }()
        },
        4393: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = r(6552)._(r(5330)).default.createContext({})
        },
        1734: function(t, e) {
            "use strict";

            function r(t) {
                let {
                    ampFirst: e = !1,
                    hybrid: r = !1,
                    hasQuery: n = !1
                } = void 0 === t ? {} : t;
                return e || r && n
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        2839: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "escapeStringRegexp", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = /[|\\{}()[\]^$+*?.-]/,
                n = /[|\\{}()[\]^$+*?.-]/g;

            function i(t) {
                return r.test(t) ? t.replace(n, "\\$&") : t
            }
        },
        9337: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return a
                }
            }), r(325);
            let n = r(1256),
                i = r(5573);

            function s(t) {
                return void 0 !== t.default
            }

            function o(t) {
                return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
            }

            function a(t, e) {
                var r;
                let a, u, l, {
                        src: c,
                        sizes: h,
                        unoptimized: f = !1,
                        priority: d = !1,
                        loading: p,
                        className: m,
                        quality: g,
                        width: y,
                        height: v,
                        fill: b = !1,
                        style: w,
                        overrideSrc: E,
                        onLoad: T,
                        onLoadingComplete: D,
                        placeholder: x = "empty",
                        blurDataURL: S,
                        fetchPriority: A,
                        decoding: P = "async",
                        layout: R,
                        objectFit: C,
                        objectPosition: N,
                        lazyBoundary: O,
                        lazyRoot: I,
                        ...L
                    } = t,
                    {
                        imgConf: M,
                        showAltText: k,
                        blurComplete: U,
                        defaultLoader: B
                    } = e,
                    V = M || i.imageConfigDefault;
                if ("allSizes" in V) a = V;
                else {
                    let t = [...V.deviceSizes, ...V.imageSizes].sort((t, e) => t - e),
                        e = V.deviceSizes.sort((t, e) => t - e);
                    a = { ...V,
                        allSizes: t,
                        deviceSizes: e
                    }
                }
                if (void 0 === B) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
                let j = L.loader || B;
                delete L.loader, delete L.srcSet;
                let _ = "__next_img_default" in j;
                if (_) {
                    if ("custom" === a.loader) throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let t = j;
                    j = e => {
                        let {
                            config: r,
                            ...n
                        } = e;
                        return t(n)
                    }
                }
                if (R) {
                    "fill" === R && (b = !0);
                    let t = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[R];
                    t && (w = { ...w,
                        ...t
                    });
                    let e = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[R];
                    e && !h && (h = e)
                }
                let q = "",
                    F = o(y),
                    G = o(v);
                if ("object" == typeof(r = c) && (s(r) || void 0 !== r.src)) {
                    let t = s(c) ? c.default : c;
                    if (!t.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                    if (!t.height || !t.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                    if (u = t.blurWidth, l = t.blurHeight, S = S || t.blurDataURL, q = t.src, !b) {
                        if (F || G) {
                            if (F && !G) {
                                let e = F / t.width;
                                G = Math.round(t.height * e)
                            } else if (!F && G) {
                                let e = G / t.height;
                                F = Math.round(t.width * e)
                            }
                        } else F = t.width, G = t.height
                    }
                }
                let X = !d && ("lazy" === p || void 0 === p);
                (!(c = "string" == typeof c ? c : q) || c.startsWith("data:") || c.startsWith("blob:")) && (f = !0, X = !1), a.unoptimized && (f = !0), _ && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (f = !0), d && (A = "high");
                let z = o(g),
                    H = Object.assign(b ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: C,
                        objectPosition: N
                    } : {}, k ? {} : {
                        color: "transparent"
                    }, w),
                    $ = U || "empty" === x ? null : "blur" === x ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
                        widthInt: F,
                        heightInt: G,
                        blurWidth: u,
                        blurHeight: l,
                        blurDataURL: S || "",
                        objectFit: H.objectFit
                    }) + '")' : 'url("' + x + '")',
                    W = $ ? {
                        backgroundSize: H.objectFit || "cover",
                        backgroundPosition: H.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: $
                    } : {},
                    K = function(t) {
                        let {
                            config: e,
                            src: r,
                            unoptimized: n,
                            width: i,
                            quality: s,
                            sizes: o,
                            loader: a
                        } = t;
                        if (n) return {
                            src: r,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: u,
                            kind: l
                        } = function(t, e, r) {
                            let {
                                deviceSizes: n,
                                allSizes: i
                            } = t;
                            if (r) {
                                let t = /(^|\s)(1?\d?\d)vw/g,
                                    e = [];
                                for (let n; n = t.exec(r); n) e.push(parseInt(n[2]));
                                if (e.length) {
                                    let t = .01 * Math.min(...e);
                                    return {
                                        widths: i.filter(e => e >= n[0] * t),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: i,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof e ? {
                                widths: n,
                                kind: "w"
                            } : {
                                widths: [...new Set([e, 2 * e].map(t => i.find(e => e >= t) || i[i.length - 1]))],
                                kind: "x"
                            }
                        }(e, i, o), c = u.length - 1;
                        return {
                            sizes: o || "w" !== l ? o : "100vw",
                            srcSet: u.map((t, n) => a({
                                config: e,
                                src: r,
                                quality: s,
                                width: t
                            }) + " " + ("w" === l ? t : n + 1) + l).join(", "),
                            src: a({
                                config: e,
                                src: r,
                                quality: s,
                                width: u[c]
                            })
                        }
                    }({
                        config: a,
                        src: c,
                        unoptimized: f,
                        width: F,
                        quality: z,
                        sizes: h,
                        loader: j
                    });
                return {
                    props: { ...L,
                        loading: X ? "lazy" : p,
                        fetchPriority: A,
                        width: F,
                        height: G,
                        decoding: P,
                        className: m,
                        style: { ...H,
                            ...W
                        },
                        sizes: K.sizes,
                        srcSet: K.srcSet,
                        src: E || K.src
                    },
                    meta: {
                        unoptimized: f,
                        priority: d,
                        placeholder: x,
                        fill: b
                    }
                }
            }
        },
        2535: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    default: function() {
                        return m
                    },
                    defaultHead: function() {
                        return h
                    }
                });
            let n = r(6552),
                i = r(349),
                s = r(9176),
                o = i._(r(5330)),
                a = n._(r(834)),
                u = r(4393),
                l = r(845),
                c = r(1734);

            function h(t) {
                void 0 === t && (t = !1);
                let e = [(0, s.jsx)("meta", {
                    charSet: "utf-8"
                })];
                return t || e.push((0, s.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), e
            }

            function f(t, e) {
                return "string" == typeof e || "number" == typeof e ? t : e.type === o.default.Fragment ? t.concat(o.default.Children.toArray(e.props.children).reduce((t, e) => "string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
            }
            r(325);
            let d = ["name", "httpEquiv", "charSet", "itemProp"];

            function p(t, e) {
                let {
                    inAmpMode: r
                } = e;
                return t.reduce(f, []).reverse().concat(h(r).reverse()).filter(function() {
                    let t = new Set,
                        e = new Set,
                        r = new Set,
                        n = {};
                    return i => {
                        let s = !0,
                            o = !1;
                        if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                            o = !0;
                            let e = i.key.slice(i.key.indexOf("$") + 1);
                            t.has(e) ? s = !1 : t.add(e)
                        }
                        switch (i.type) {
                            case "title":
                            case "base":
                                e.has(i.type) ? s = !1 : e.add(i.type);
                                break;
                            case "meta":
                                for (let t = 0, e = d.length; t < e; t++) {
                                    let e = d[t];
                                    if (i.props.hasOwnProperty(e)) {
                                        if ("charSet" === e) r.has(e) ? s = !1 : r.add(e);
                                        else {
                                            let t = i.props[e],
                                                r = n[e] || new Set;
                                            ("name" !== e || !o) && r.has(t) ? s = !1 : (r.add(t), n[e] = r)
                                        }
                                    }
                                }
                        }
                        return s
                    }
                }()).reverse().map((t, e) => {
                    let n = t.key || e;
                    if (!r && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e => t.props.href.startsWith(e))) {
                        let e = { ...t.props || {}
                        };
                        return e["data-href"] = e.href, e.href = void 0, e["data-optimized-fonts"] = !0, o.default.cloneElement(t, e)
                    }
                    return o.default.cloneElement(t, {
                        key: n
                    })
                })
            }
            let m = function(t) {
                let {
                    children: e
                } = t, r = (0, o.useContext)(u.AmpStateContext), n = (0, o.useContext)(l.HeadManagerContext);
                return (0, s.jsx)(a.default, {
                    reduceComponentsToState: p,
                    headManager: n,
                    inAmpMode: (0, c.isInAmpMode)(r),
                    children: e
                })
            };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        1256: function(t, e) {
            "use strict";

            function r(t) {
                let {
                    widthInt: e,
                    heightInt: r,
                    blurWidth: n,
                    blurHeight: i,
                    blurDataURL: s,
                    objectFit: o
                } = t, a = n ? 40 * n : e, u = i ? 40 * i : r, l = a && u ? "viewBox='0 0 " + a + " " + u + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + l + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (l ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        2794: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = r(6552)._(r(5330)),
                i = r(5573),
                s = n.default.createContext(i.imageConfigDefault)
        },
        5573: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    VALID_LOADERS: function() {
                        return r
                    },
                    imageConfigDefault: function() {
                        return n
                    }
                });
            let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
                n = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    localPatterns: void 0,
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        8141: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    default: function() {
                        return u
                    },
                    getImageProps: function() {
                        return a
                    }
                });
            let n = r(6552),
                i = r(9337),
                s = r(269),
                o = n._(r(4159));

            function a(t) {
                let {
                    props: e
                } = (0, i.getImgProps)(t, {
                    defaultLoader: o.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image/",
                        loader: "custom",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [t, r] of Object.entries(e)) void 0 === r && delete e[t];
                return {
                    props: e
                }
            }
            let u = s.Image
        },
        4159: function(t, e) {
            "use strict";

            function r(t) {
                let {
                    config: e,
                    src: r,
                    width: n,
                    quality: i
                } = t;
                return e.path + "?url=" + encodeURIComponent(r) + "&w=" + n + "&q=" + (i || 75)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r.__next_img_default = !0;
            let n = r
        },
        3498: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = r(6552)._(r(5330)).default.createContext(null)
        },
        2553: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    formatUrl: function() {
                        return s
                    },
                    formatWithValidation: function() {
                        return a
                    },
                    urlObjectKeys: function() {
                        return o
                    }
                });
            let n = r(349)._(r(7802)),
                i = /https?|ftp|gopher|file/;

            function s(t) {
                let {
                    auth: e,
                    hostname: r
                } = t, s = t.protocol || "", o = t.pathname || "", a = t.hash || "", u = t.query || "", l = !1;
                e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : "", t.host ? l = e + t.host : r && (l = e + (~r.indexOf(":") ? "[" + r + "]" : r), t.port && (l += ":" + t.port)), u && "object" == typeof u && (u = String(n.urlQueryToSearchParams(u)));
                let c = t.search || u && "?" + u || "";
                return s && !s.endsWith(":") && (s += ":"), t.slashes || (!s || i.test(s)) && !1 !== l ? (l = "//" + (l || ""), o && "/" !== o[0] && (o = "/" + o)) : l || (l = ""), a && "#" !== a[0] && (a = "#" + a), c && "?" !== c[0] && (c = "?" + c), "" + s + l + (o = o.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace("#", "%23")) + a
            }
            let o = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

            function a(t) {
                return s(t)
            }
        },
        5345: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    getSortedRoutes: function() {
                        return n.getSortedRoutes
                    },
                    isDynamicRoute: function() {
                        return i.isDynamicRoute
                    }
                });
            let n = r(8100),
                i = r(8681)
        },
        2831: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "interpolateAs", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = r(8458),
                i = r(3242);

            function s(t, e, r) {
                let s = "",
                    o = (0, i.getRouteRegex)(t),
                    a = o.groups,
                    u = (e !== t ? (0, n.getRouteMatcher)(o)(e) : "") || r;
                s = t;
                let l = Object.keys(a);
                return l.every(t => {
                    let e = u[t] || "",
                        {
                            repeat: r,
                            optional: n
                        } = a[t],
                        i = "[" + (r ? "..." : "") + t + "]";
                    return n && (i = (e ? "" : "/") + "[" + i + "]"), r && !Array.isArray(e) && (e = [e]), (n || t in u) && (s = s.replace(i, r ? e.map(t => encodeURIComponent(t)).join("/") : encodeURIComponent(e)) || "/")
                }) || (s = ""), {
                    params: l,
                    result: s
                }
            }
        },
        8681: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isDynamicRoute", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = r(3307),
                i = /\/\[[^/]+?\](?=\/|$)/;

            function s(t) {
                return (0, n.isInterceptionRouteAppPath)(t) && (t = (0, n.extractInterceptionRouteInformation)(t).interceptedRoute), i.test(t)
            }
        },
        8633: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isLocalURL", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = r(9545),
                i = r(6608);

            function s(t) {
                if (!(0, n.isAbsoluteUrl)(t)) return !0;
                try {
                    let e = (0, n.getLocationOrigin)(),
                        r = new URL(t, e);
                    return r.origin === e && (0, i.hasBasePath)(r.pathname)
                } catch (t) {
                    return !1
                }
            }
        },
        6205: function(t, e) {
            "use strict";

            function r(t, e) {
                let r = {};
                return Object.keys(t).forEach(n => {
                    e.includes(n) || (r[n] = t[n])
                }), r
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "omit", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        7802: function(t, e) {
            "use strict";

            function r(t) {
                let e = {};
                return t.forEach((t, r) => {
                    void 0 === e[r] ? e[r] = t : Array.isArray(e[r]) ? e[r].push(t) : e[r] = [e[r], t]
                }), e
            }

            function n(t) {
                return "string" != typeof t && ("number" != typeof t || isNaN(t)) && "boolean" != typeof t ? "" : String(t)
            }

            function i(t) {
                let e = new URLSearchParams;
                return Object.entries(t).forEach(t => {
                    let [r, i] = t;
                    Array.isArray(i) ? i.forEach(t => e.append(r, n(t))) : e.set(r, n(i))
                }), e
            }

            function s(t) {
                for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                return r.forEach(e => {
                    Array.from(e.keys()).forEach(e => t.delete(e)), e.forEach((e, r) => t.append(r, e))
                }), t
            }
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    assign: function() {
                        return s
                    },
                    searchParamsToUrlQuery: function() {
                        return r
                    },
                    urlQueryToSearchParams: function() {
                        return i
                    }
                })
        },
        8458: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getRouteMatcher", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = r(9545);

            function i(t) {
                let {
                    re: e,
                    groups: r
                } = t;
                return t => {
                    let i = e.exec(t);
                    if (!i) return !1;
                    let s = t => {
                            try {
                                return decodeURIComponent(t)
                            } catch (t) {
                                throw new n.DecodeError("failed to decode param")
                            }
                        },
                        o = {};
                    return Object.keys(r).forEach(t => {
                        let e = r[t],
                            n = i[e.pos];
                        void 0 !== n && (o[t] = ~n.indexOf("/") ? n.split("/").map(t => s(t)) : e.repeat ? [s(n)] : s(n))
                    }), o
                }
            }
        },
        3242: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    getNamedMiddlewareRegex: function() {
                        return f
                    },
                    getNamedRouteRegex: function() {
                        return h
                    },
                    getRouteRegex: function() {
                        return u
                    },
                    parseParameter: function() {
                        return o
                    }
                });
            let n = r(3307),
                i = r(2839),
                s = r(8405);

            function o(t) {
                let e = t.startsWith("[") && t.endsWith("]");
                e && (t = t.slice(1, -1));
                let r = t.startsWith("...");
                return r && (t = t.slice(3)), {
                    key: t,
                    repeat: r,
                    optional: e
                }
            }

            function a(t) {
                let e = (0, s.removeTrailingSlash)(t).slice(1).split("/"),
                    r = {},
                    a = 1;
                return {
                    parameterizedRoute: e.map(t => {
                        let e = n.INTERCEPTION_ROUTE_MARKERS.find(e => t.startsWith(e)),
                            s = t.match(/\[((?:\[.*\])|.+)\]/);
                        if (e && s) {
                            let {
                                key: t,
                                optional: n,
                                repeat: u
                            } = o(s[1]);
                            return r[t] = {
                                pos: a++,
                                repeat: u,
                                optional: n
                            }, "/" + (0, i.escapeStringRegexp)(e) + "([^/]+?)"
                        }
                        if (!s) return "/" + (0, i.escapeStringRegexp)(t); {
                            let {
                                key: t,
                                repeat: e,
                                optional: n
                            } = o(s[1]);
                            return r[t] = {
                                pos: a++,
                                repeat: e,
                                optional: n
                            }, e ? n ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                        }
                    }).join(""),
                    groups: r
                }
            }

            function u(t) {
                let {
                    parameterizedRoute: e,
                    groups: r
                } = a(t);
                return {
                    re: RegExp("^" + e + "(?:/)?$"),
                    groups: r
                }
            }

            function l(t) {
                let {
                    interceptionMarker: e,
                    getSafeRouteKey: r,
                    segment: n,
                    routeKeys: s,
                    keyPrefix: a
                } = t, {
                    key: u,
                    optional: l,
                    repeat: c
                } = o(n), h = u.replace(/\W/g, "");
                a && (h = "" + a + h);
                let f = !1;
                (0 === h.length || h.length > 30) && (f = !0), isNaN(parseInt(h.slice(0, 1))) || (f = !0), f && (h = r()), a ? s[h] = "" + a + u : s[h] = u;
                let d = e ? (0, i.escapeStringRegexp)(e) : "";
                return c ? l ? "(?:/" + d + "(?<" + h + ">.+?))?" : "/" + d + "(?<" + h + ">.+?)" : "/" + d + "(?<" + h + ">[^/]+?)"
            }

            function c(t, e) {
                let r;
                let o = (0, s.removeTrailingSlash)(t).slice(1).split("/"),
                    a = (r = 0, () => {
                        let t = "",
                            e = ++r;
                        for (; e > 0;) t += String.fromCharCode(97 + (e - 1) % 26), e = Math.floor((e - 1) / 26);
                        return t
                    }),
                    u = {};
                return {
                    namedParameterizedRoute: o.map(t => {
                        let r = n.INTERCEPTION_ROUTE_MARKERS.some(e => t.startsWith(e)),
                            s = t.match(/\[((?:\[.*\])|.+)\]/);
                        if (r && s) {
                            let [r] = t.split(s[0]);
                            return l({
                                getSafeRouteKey: a,
                                interceptionMarker: r,
                                segment: s[1],
                                routeKeys: u,
                                keyPrefix: e ? "nxtI" : void 0
                            })
                        }
                        return s ? l({
                            getSafeRouteKey: a,
                            segment: s[1],
                            routeKeys: u,
                            keyPrefix: e ? "nxtP" : void 0
                        }) : "/" + (0, i.escapeStringRegexp)(t)
                    }).join(""),
                    routeKeys: u
                }
            }

            function h(t, e) {
                let r = c(t, e);
                return { ...u(t),
                    namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
                    routeKeys: r.routeKeys
                }
            }

            function f(t, e) {
                let {
                    parameterizedRoute: r
                } = a(t), {
                    catchAll: n = !0
                } = e;
                if ("/" === r) return {
                    namedRegex: "^/" + (n ? ".*" : "") + "$"
                };
                let {
                    namedParameterizedRoute: i
                } = c(t, !1);
                return {
                    namedRegex: "^" + i + (n ? "(?:(/.*)?)" : "") + "$"
                }
            }
        },
        8100: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getSortedRoutes", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            class r {
                insert(t) {
                    this._insert(t.split("/").filter(Boolean), [], !1)
                }
                smoosh() {
                    return this._smoosh()
                }
                _smoosh(t) {
                    void 0 === t && (t = "/");
                    let e = [...this.children.keys()].sort();
                    null !== this.slugName && e.splice(e.indexOf("[]"), 1), null !== this.restSlugName && e.splice(e.indexOf("[...]"), 1), null !== this.optionalRestSlugName && e.splice(e.indexOf("[[...]]"), 1);
                    let r = e.map(e => this.children.get(e)._smoosh("" + t + e + "/")).reduce((t, e) => [...t, ...e], []);
                    if (null !== this.slugName && r.push(...this.children.get("[]")._smoosh(t + "[" + this.slugName + "]/")), !this.placeholder) {
                        let e = "/" === t ? "/" : t.slice(0, -1);
                        if (null != this.optionalRestSlugName) throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + e + '" and "' + e + "[[..." + this.optionalRestSlugName + ']]").');
                        r.unshift(e)
                    }
                    return null !== this.restSlugName && r.push(...this.children.get("[...]")._smoosh(t + "[..." + this.restSlugName + "]/")), null !== this.optionalRestSlugName && r.push(...this.children.get("[[...]]")._smoosh(t + "[[..." + this.optionalRestSlugName + "]]/")), r
                }
                _insert(t, e, n) {
                    if (0 === t.length) {
                        this.placeholder = !1;
                        return
                    }
                    if (n) throw Error("Catch-all must be the last part of the URL.");
                    let i = t[0];
                    if (i.startsWith("[") && i.endsWith("]")) {
                        let r = i.slice(1, -1),
                            o = !1;
                        if (r.startsWith("[") && r.endsWith("]") && (r = r.slice(1, -1), o = !0), r.startsWith("...") && (r = r.substring(3), n = !0), r.startsWith("[") || r.endsWith("]")) throw Error("Segment names may not start or end with extra brackets ('" + r + "').");
                        if (r.startsWith(".")) throw Error("Segment names may not start with erroneous periods ('" + r + "').");

                        function s(t, r) {
                            if (null !== t && t !== r) throw Error("You cannot use different slug names for the same dynamic path ('" + t + "' !== '" + r + "').");
                            e.forEach(t => {
                                if (t === r) throw Error('You cannot have the same slug name "' + r + '" repeat within a single dynamic path');
                                if (t.replace(/\W/g, "") === i.replace(/\W/g, "")) throw Error('You cannot have the slug names "' + t + '" and "' + r + '" differ only by non-word symbols within a single dynamic path')
                            }), e.push(r)
                        }
                        if (n) {
                            if (o) {
                                if (null != this.restSlugName) throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + t[0] + '" ).');
                                s(this.optionalRestSlugName, r), this.optionalRestSlugName = r, i = "[[...]]"
                            } else {
                                if (null != this.optionalRestSlugName) throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + t[0] + '").');
                                s(this.restSlugName, r), this.restSlugName = r, i = "[...]"
                            }
                        } else {
                            if (o) throw Error('Optional route parameters are not yet supported ("' + t[0] + '").');
                            s(this.slugName, r), this.slugName = r, i = "[]"
                        }
                    }
                    this.children.has(i) || this.children.set(i, new r), this.children.get(i)._insert(t.slice(1), e, n)
                }
                constructor() {
                    this.placeholder = !0, this.children = new Map, this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null
                }
            }

            function n(t) {
                let e = new r;
                return t.forEach(t => e.insert(t)), e.smoosh()
            }
        },
        834: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = r(5330),
                i = "undefined" == typeof window,
                s = i ? () => {} : n.useLayoutEffect,
                o = i ? () => {} : n.useEffect;

            function a(t) {
                let {
                    headManager: e,
                    reduceComponentsToState: r
                } = t;

                function a() {
                    if (e && e.mountedInstances) {
                        let i = n.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                        e.updateHead(r(i, t))
                    }
                }
                if (i) {
                    var u;
                    null == e || null == (u = e.mountedInstances) || u.add(t.children), a()
                }
                return s(() => {
                    var r;
                    return null == e || null == (r = e.mountedInstances) || r.add(t.children), () => {
                        var r;
                        null == e || null == (r = e.mountedInstances) || r.delete(t.children)
                    }
                }), s(() => (e && (e._pendingUpdate = a), () => {
                    e && (e._pendingUpdate = a)
                })), o(() => (e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null), () => {
                    e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null)
                })), null
            }
        },
        9545: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    DecodeError: function() {
                        return p
                    },
                    MiddlewareNotFoundError: function() {
                        return v
                    },
                    MissingStaticPage: function() {
                        return y
                    },
                    NormalizeError: function() {
                        return m
                    },
                    PageNotFoundError: function() {
                        return g
                    },
                    SP: function() {
                        return f
                    },
                    ST: function() {
                        return d
                    },
                    WEB_VITALS: function() {
                        return r
                    },
                    execOnce: function() {
                        return n
                    },
                    getDisplayName: function() {
                        return u
                    },
                    getLocationOrigin: function() {
                        return o
                    },
                    getURL: function() {
                        return a
                    },
                    isAbsoluteUrl: function() {
                        return s
                    },
                    isResSent: function() {
                        return l
                    },
                    loadGetInitialProps: function() {
                        return h
                    },
                    normalizeRepeatedSlashes: function() {
                        return c
                    },
                    stringifyError: function() {
                        return b
                    }
                });
            let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

            function n(t) {
                let e, r = !1;
                return function() {
                    for (var n = arguments.length, i = Array(n), s = 0; s < n; s++) i[s] = arguments[s];
                    return r || (r = !0, e = t(...i)), e
                }
            }
            let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                s = t => i.test(t);

            function o() {
                let {
                    protocol: t,
                    hostname: e,
                    port: r
                } = window.location;
                return t + "//" + e + (r ? ":" + r : "")
            }

            function a() {
                let {
                    href: t
                } = window.location, e = o();
                return t.substring(e.length)
            }

            function u(t) {
                return "string" == typeof t ? t : t.displayName || t.name || "Unknown"
            }

            function l(t) {
                return t.finished || t.headersSent
            }

            function c(t) {
                let e = t.split("?");
                return e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (e[1] ? "?" + e.slice(1).join("?") : "")
            }
            async function h(t, e) {
                let r = e.res || e.ctx && e.ctx.res;
                if (!t.getInitialProps) return e.ctx && e.Component ? {
                    pageProps: await h(e.Component, e.ctx)
                } : {};
                let n = await t.getInitialProps(e);
                if (r && l(r)) return n;
                if (!n) throw Error('"' + u(t) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.');
                return n
            }
            let f = "undefined" != typeof performance,
                d = f && ["mark", "measure", "getEntriesByName"].every(t => "function" == typeof performance[t]);
            class p extends Error {}
            class m extends Error {}
            class g extends Error {
                constructor(t) {
                    super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + t
                }
            }
            class y extends Error {
                constructor(t, e) {
                    super(), this.message = "Failed to load static file for page: " + t + " " + e
                }
            }
            class v extends Error {
                constructor() {
                    super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
                }
            }

            function b(t) {
                return JSON.stringify({
                    message: t.message,
                    stack: t.stack
                })
            }
        },
        8026: function(t) {
            t.exports = function(t, e) {
                var r, n = null;
                try {
                    r = JSON.parse(t, e)
                } catch (t) {
                    n = t
                }
                return [n, r]
            }
        },
        6724: function(t) {
            var e, r, n, i, s;
            e = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, r = /^(?=([^\/?#]*))\1([^]*)$/, n = /(?:\/|^)\.(?=\/)/g, i = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, s = {
                buildAbsoluteURL: function(t, e, n) {
                    if (n = n || {}, t = t.trim(), !(e = e.trim())) {
                        if (!n.alwaysNormalize) return t;
                        var i = s.parseURL(t);
                        if (!i) throw Error("Error trying to parse base URL.");
                        return i.path = s.normalizePath(i.path), s.buildURLFromParts(i)
                    }
                    var o = s.parseURL(e);
                    if (!o) throw Error("Error trying to parse relative URL.");
                    if (o.scheme) return n.alwaysNormalize ? (o.path = s.normalizePath(o.path), s.buildURLFromParts(o)) : e;
                    var a = s.parseURL(t);
                    if (!a) throw Error("Error trying to parse base URL.");
                    if (!a.netLoc && a.path && "/" !== a.path[0]) {
                        var u = r.exec(a.path);
                        a.netLoc = u[1], a.path = u[2]
                    }
                    a.netLoc && !a.path && (a.path = "/");
                    var l = {
                        scheme: a.scheme,
                        netLoc: o.netLoc,
                        path: null,
                        params: o.params,
                        query: o.query,
                        fragment: o.fragment
                    };
                    if (!o.netLoc && (l.netLoc = a.netLoc, "/" !== o.path[0])) {
                        if (o.path) {
                            var c = a.path,
                                h = c.substring(0, c.lastIndexOf("/") + 1) + o.path;
                            l.path = s.normalizePath(h)
                        } else l.path = a.path, o.params || (l.params = a.params, o.query || (l.query = a.query))
                    }
                    return null === l.path && (l.path = n.alwaysNormalize ? s.normalizePath(o.path) : o.path), s.buildURLFromParts(l)
                },
                parseURL: function(t) {
                    var r = e.exec(t);
                    return r ? {
                        scheme: r[1] || "",
                        netLoc: r[2] || "",
                        path: r[3] || "",
                        params: r[4] || "",
                        query: r[5] || "",
                        fragment: r[6] || ""
                    } : null
                },
                normalizePath: function(t) {
                    for (t = t.split("").reverse().join("").replace(n, ""); t.length !== (t = t.replace(i, "")).length;);
                    return t.split("").reverse().join("")
                },
                buildURLFromParts: function(t) {
                    return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
                }
            }, t.exports = s
        },
        9565: function(t, e, r) {
            var n = r(289),
                i = t.exports = {
                    WebVTT: r(5209),
                    VTTCue: r(6528),
                    VTTRegion: r(9333)
                };
            n.vttjs = i, n.WebVTT = i.WebVTT;
            var s = i.VTTCue,
                o = i.VTTRegion,
                a = n.VTTCue,
                u = n.VTTRegion;
            i.shim = function() {
                n.VTTCue = s, n.VTTRegion = o
            }, i.restore = function() {
                n.VTTCue = a, n.VTTRegion = u
            }, n.VTTCue || i.shim()
        },
        5209: function(t, e, r) {
            var n = r(7075),
                i = Object.create || function() {
                    function t() {}
                    return function(e) {
                        if (1 != arguments.length) throw Error("Object.create shim only accepts one parameter.");
                        return t.prototype = e, new t
                    }
                }();

            function s(t, e) {
                this.name = "ParsingError", this.code = t.code, this.message = e || t.message
            }

            function o(t) {
                function e(t, e, r, n) {
                    return (0 | t) * 3600 + (0 | e) * 60 + (0 | r) + (0 | n) / 1e3
                }
                var r = t.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
                return r ? r[3] ? e(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? e(r[1], r[2], 0, r[4]) : e(0, r[1], r[2], r[4]) : null
            }

            function a() {
                this.values = i(null)
            }

            function u(t, e, r, n) {
                var i = n ? t.split(n) : [t];
                for (var s in i)
                    if ("string" == typeof i[s]) {
                        var o = i[s].split(r);
                        2 === o.length && e(o[0].trim(), o[1].trim())
                    }
            }
            s.prototype = i(Error.prototype), s.prototype.constructor = s, s.Errors = {
                BadSignature: {
                    code: 0,
                    message: "Malformed WebVTT signature."
                },
                BadTimeStamp: {
                    code: 1,
                    message: "Malformed time stamp."
                }
            }, a.prototype = {
                set: function(t, e) {
                    this.get(t) || "" === e || (this.values[t] = e)
                },
                get: function(t, e, r) {
                    return r ? this.has(t) ? this.values[t] : e[r] : this.has(t) ? this.values[t] : e
                },
                has: function(t) {
                    return t in this.values
                },
                alt: function(t, e, r) {
                    for (var n = 0; n < r.length; ++n)
                        if (e === r[n]) {
                            this.set(t, e);
                            break
                        }
                },
                integer: function(t, e) {
                    /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
                },
                percent: function(t, e) {
                    return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (e = parseFloat(e)) >= 0 && e <= 100) && (this.set(t, e), !0)
                }
            };
            var l = n.createElement && n.createElement("textarea"),
                c = {
                    c: "span",
                    i: "i",
                    b: "b",
                    u: "u",
                    ruby: "ruby",
                    rt: "rt",
                    v: "span",
                    lang: "span"
                },
                h = {
                    white: "rgba(255,255,255,1)",
                    lime: "rgba(0,255,0,1)",
                    cyan: "rgba(0,255,255,1)",
                    red: "rgba(255,0,0,1)",
                    yellow: "rgba(255,255,0,1)",
                    magenta: "rgba(255,0,255,1)",
                    blue: "rgba(0,0,255,1)",
                    black: "rgba(0,0,0,1)"
                },
                f = {
                    v: "title",
                    lang: "lang"
                },
                d = {
                    rt: "ruby"
                };

            function p(t, e) {
                for (var r, n = t.document.createElement("div"), i = n, s = []; null !== (r = function() {
                        if (!e) return null;
                        var t, r = e.match(/^([^<]*)(<[^>]*>?)?/);
                        return t = r[1] ? r[1] : r[2], e = e.substr(t.length), t
                    }());) {
                    if ("<" === r[0]) {
                        if ("/" === r[1]) {
                            s.length && s[s.length - 1] === r.substr(2).replace(">", "") && (s.pop(), i = i.parentNode);
                            continue
                        }
                        var a, u, p, m, g = o(r.substr(1, r.length - 2));
                        if (g) {
                            m = t.document.createProcessingInstruction("timestamp", g), i.appendChild(m);
                            continue
                        }
                        var y = r.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                        if (!y || !(m = function(e, r) {
                                var n = c[e];
                                if (!n) return null;
                                var i = t.document.createElement(n),
                                    s = f[e];
                                return s && r && (i[s] = r.trim()), i
                            }(y[1], y[3])) || (u = i, d[(p = m).localName] && d[p.localName] !== u.localName)) continue;
                        if (y[2]) {
                            var v = y[2].split(".");
                            v.forEach(function(t) {
                                var e = /^bg_/.test(t),
                                    r = e ? t.slice(3) : t;
                                if (h.hasOwnProperty(r)) {
                                    var n = e ? "background-color" : "color",
                                        i = h[r];
                                    m.style[n] = i
                                }
                            }), m.className = v.join(" ")
                        }
                        s.push(y[1]), i.appendChild(m), i = m;
                        continue
                    }
                    i.appendChild(t.document.createTextNode((a = r, l.innerHTML = a, a = l.textContent, l.textContent = "", a)))
                }
                return n
            }
            var m = [
                [1470, 1470],
                [1472, 1472],
                [1475, 1475],
                [1478, 1478],
                [1488, 1514],
                [1520, 1524],
                [1544, 1544],
                [1547, 1547],
                [1549, 1549],
                [1563, 1563],
                [1566, 1610],
                [1645, 1647],
                [1649, 1749],
                [1765, 1766],
                [1774, 1775],
                [1786, 1805],
                [1807, 1808],
                [1810, 1839],
                [1869, 1957],
                [1969, 1969],
                [1984, 2026],
                [2036, 2037],
                [2042, 2042],
                [2048, 2069],
                [2074, 2074],
                [2084, 2084],
                [2088, 2088],
                [2096, 2110],
                [2112, 2136],
                [2142, 2142],
                [2208, 2208],
                [2210, 2220],
                [8207, 8207],
                [64285, 64285],
                [64287, 64296],
                [64298, 64310],
                [64312, 64316],
                [64318, 64318],
                [64320, 64321],
                [64323, 64324],
                [64326, 64449],
                [64467, 64829],
                [64848, 64911],
                [64914, 64967],
                [65008, 65020],
                [65136, 65140],
                [65142, 65276],
                [67584, 67589],
                [67592, 67592],
                [67594, 67637],
                [67639, 67640],
                [67644, 67644],
                [67647, 67669],
                [67671, 67679],
                [67840, 67867],
                [67872, 67897],
                [67903, 67903],
                [67968, 68023],
                [68030, 68031],
                [68096, 68096],
                [68112, 68115],
                [68117, 68119],
                [68121, 68147],
                [68160, 68167],
                [68176, 68184],
                [68192, 68223],
                [68352, 68405],
                [68416, 68437],
                [68440, 68466],
                [68472, 68479],
                [68608, 68680],
                [126464, 126467],
                [126469, 126495],
                [126497, 126498],
                [126500, 126500],
                [126503, 126503],
                [126505, 126514],
                [126516, 126519],
                [126521, 126521],
                [126523, 126523],
                [126530, 126530],
                [126535, 126535],
                [126537, 126537],
                [126539, 126539],
                [126541, 126543],
                [126545, 126546],
                [126548, 126548],
                [126551, 126551],
                [126553, 126553],
                [126555, 126555],
                [126557, 126557],
                [126559, 126559],
                [126561, 126562],
                [126564, 126564],
                [126567, 126570],
                [126572, 126578],
                [126580, 126583],
                [126585, 126588],
                [126590, 126590],
                [126592, 126601],
                [126603, 126619],
                [126625, 126627],
                [126629, 126633],
                [126635, 126651],
                [1114109, 1114109]
            ];

            function g() {}

            function y(t, e, r) {
                g.call(this), this.cue = e, this.cueDiv = p(t, e.text);
                var n = {
                    color: "rgba(255, 255, 255, 1)",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    position: "relative",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    display: "inline",
                    writingMode: "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl",
                    unicodeBidi: "plaintext"
                };
                this.applyStyles(n, this.cueDiv), this.div = t.document.createElement("div"), n = {
                    direction: function(t) {
                        var e = [],
                            r = "";
                        if (!t || !t.childNodes) return "ltr";

                        function n(t, e) {
                            for (var r = e.childNodes.length - 1; r >= 0; r--) t.push(e.childNodes[r])
                        }
                        for (n(e, t); r = function t(e) {
                                if (!e || !e.length) return null;
                                var r = e.pop(),
                                    i = r.textContent || r.innerText;
                                if (i) {
                                    var s = i.match(/^.*(\n|\r)/);
                                    return s ? (e.length = 0, s[0]) : i
                                }
                                return "ruby" === r.tagName ? t(e) : r.childNodes ? (n(e, r), t(e)) : void 0
                            }(e);)
                            for (var i = 0; i < r.length; i++)
                                if (function(t) {
                                        for (var e = 0; e < m.length; e++) {
                                            var r = m[e];
                                            if (t >= r[0] && t <= r[1]) return !0
                                        }
                                        return !1
                                    }(r.charCodeAt(i))) return "rtl";
                        return "ltr"
                    }(this.cueDiv),
                    writingMode: "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl",
                    unicodeBidi: "plaintext",
                    textAlign: "middle" === e.align ? "center" : e.align,
                    font: r.font,
                    whiteSpace: "pre-line",
                    position: "absolute"
                }, this.applyStyles(n), this.div.appendChild(this.cueDiv);
                var i = 0;
                switch (e.positionAlign) {
                    case "start":
                    case "line-left":
                        i = e.position;
                        break;
                    case "center":
                        i = e.position - e.size / 2;
                        break;
                    case "end":
                    case "line-right":
                        i = e.position - e.size
                }
                "" === e.vertical ? this.applyStyles({
                    left: this.formatStyle(i, "%"),
                    width: this.formatStyle(e.size, "%")
                }) : this.applyStyles({
                    top: this.formatStyle(i, "%"),
                    height: this.formatStyle(e.size, "%")
                }), this.move = function(t) {
                    this.applyStyles({
                        top: this.formatStyle(t.top, "px"),
                        bottom: this.formatStyle(t.bottom, "px"),
                        left: this.formatStyle(t.left, "px"),
                        right: this.formatStyle(t.right, "px"),
                        height: this.formatStyle(t.height, "px"),
                        width: this.formatStyle(t.width, "px")
                    })
                }
            }

            function v(t) {
                var e, r, n, i;
                if (t.div) {
                    r = t.div.offsetHeight, n = t.div.offsetWidth, i = t.div.offsetTop;
                    var s = (s = t.div.childNodes) && (s = s[0]) && s.getClientRects && s.getClientRects();
                    t = t.div.getBoundingClientRect(), e = s ? Math.max(s[0] && s[0].height || 0, t.height / s.length) : 0
                }
                this.left = t.left, this.right = t.right, this.top = t.top || i, this.height = t.height || r, this.bottom = t.bottom || i + (t.height || r), this.width = t.width || n, this.lineHeight = void 0 !== e ? e : t.lineHeight
            }

            function b() {}
            g.prototype.applyStyles = function(t, e) {
                for (var r in e = e || this.div, t) t.hasOwnProperty(r) && (e.style[r] = t[r])
            }, g.prototype.formatStyle = function(t, e) {
                return 0 === t ? 0 : t + e
            }, y.prototype = i(g.prototype), y.prototype.constructor = y, v.prototype.move = function(t, e) {
                switch (e = void 0 !== e ? e : this.lineHeight, t) {
                    case "+x":
                        this.left += e, this.right += e;
                        break;
                    case "-x":
                        this.left -= e, this.right -= e;
                        break;
                    case "+y":
                        this.top += e, this.bottom += e;
                        break;
                    case "-y":
                        this.top -= e, this.bottom -= e
                }
            }, v.prototype.overlaps = function(t) {
                return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
            }, v.prototype.overlapsAny = function(t) {
                for (var e = 0; e < t.length; e++)
                    if (this.overlaps(t[e])) return !0;
                return !1
            }, v.prototype.within = function(t) {
                return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
            }, v.prototype.overlapsOppositeAxis = function(t, e) {
                switch (e) {
                    case "+x":
                        return this.left < t.left;
                    case "-x":
                        return this.right > t.right;
                    case "+y":
                        return this.top < t.top;
                    case "-y":
                        return this.bottom > t.bottom
                }
            }, v.prototype.intersectPercentage = function(t) {
                return Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)) * Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)) / (this.height * this.width)
            }, v.prototype.toCSSCompatValues = function(t) {
                return {
                    top: this.top - t.top,
                    bottom: t.bottom - this.bottom,
                    left: this.left - t.left,
                    right: t.right - this.right,
                    height: this.height,
                    width: this.width
                }
            }, v.getSimpleBoxPosition = function(t) {
                var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
                    r = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
                    n = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
                return {
                    left: (t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t).left,
                    right: t.right,
                    top: t.top || n,
                    height: t.height || e,
                    bottom: t.bottom || n + (t.height || e),
                    width: t.width || r
                }
            }, b.StringDecoder = function() {
                return {
                    decode: function(t) {
                        if (!t) return "";
                        if ("string" != typeof t) throw Error("Error - expected string data.");
                        return decodeURIComponent(encodeURIComponent(t))
                    }
                }
            }, b.convertCueToDOMTree = function(t, e) {
                return t && e ? p(t, e) : null
            }, b.processCues = function(t, e, r) {
                if (!t || !e || !r) return null;
                for (; r.firstChild;) r.removeChild(r.firstChild);
                var n = t.document.createElement("div");
                if (n.style.position = "absolute", n.style.left = "0", n.style.right = "0", n.style.top = "0", n.style.bottom = "0", n.style.margin = "1.5%", r.appendChild(n), ! function(t) {
                        for (var e = 0; e < t.length; e++)
                            if (t[e].hasBeenReset || !t[e].displayState) return !0;
                        return !1
                    }(e)) {
                    for (var i = 0; i < e.length; i++) n.appendChild(e[i].displayState);
                    return
                }
                var s = [],
                    o = v.getSimpleBoxPosition(n),
                    a = {
                        font: Math.round(5 * o.height) / 100 + "px sans-serif"
                    };
                ! function() {
                    for (var r, i, u = 0; u < e.length; u++) r = new y(t, i = e[u], a), n.appendChild(r.div),
                        function(t, e, r, n) {
                            var i = new v(e),
                                s = e.cue,
                                o = function(t) {
                                    if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100)) return t.line;
                                    if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
                                    for (var e = t.track, r = e.textTrackList, n = 0, i = 0; i < r.length && r[i] !== e; i++) "showing" === r[i].mode && n++;
                                    return -1 * ++n
                                }(s),
                                a = [];
                            if (s.snapToLines) {
                                switch (s.vertical) {
                                    case "":
                                        a = ["+y", "-y"], u = "height";
                                        break;
                                    case "rl":
                                        a = ["+x", "-x"], u = "width";
                                        break;
                                    case "lr":
                                        a = ["-x", "+x"], u = "width"
                                }
                                var u, l = i.lineHeight,
                                    c = l * Math.round(o),
                                    h = r[u] + l,
                                    f = a[0];
                                Math.abs(c) > h && (c = Math.ceil(h / l) * l * (c < 0 ? -1 : 1)), o < 0 && (c += "" === s.vertical ? r.height : r.width, a = a.reverse()), i.move(f, c)
                            } else {
                                var d = i.lineHeight / r.height * 100;
                                switch (s.lineAlign) {
                                    case "center":
                                        o -= d / 2;
                                        break;
                                    case "end":
                                        o -= d
                                }
                                switch (s.vertical) {
                                    case "":
                                        e.applyStyles({
                                            top: e.formatStyle(o, "%")
                                        });
                                        break;
                                    case "rl":
                                        e.applyStyles({
                                            left: e.formatStyle(o, "%")
                                        });
                                        break;
                                    case "lr":
                                        e.applyStyles({
                                            right: e.formatStyle(o, "%")
                                        })
                                }
                                a = ["+y", "-x", "+x", "-y"], i = new v(e)
                            }
                            var p = function(t, e) {
                                for (var i, s = new v(t), o = 1, a = 0; a < e.length; a++) {
                                    for (; t.overlapsOppositeAxis(r, e[a]) || t.within(r) && t.overlapsAny(n);) t.move(e[a]);
                                    if (t.within(r)) return t;
                                    var u = t.intersectPercentage(r);
                                    o > u && (i = new v(t), o = u), t = new v(s)
                                }
                                return i || s
                            }(i, a);
                            e.move(p.toCSSCompatValues(r))
                        }(0, r, o, s), i.displayState = r.div, s.push(v.getSimpleBoxPosition(r))
                }()
            }, b.Parser = function(t, e, r) {
                r || (r = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = r || new TextDecoder("utf8"), this.regionList = []
            }, b.Parser.prototype = {
                reportOrThrowError: function(t) {
                    if (t instanceof s) this.onparsingerror && this.onparsingerror(t);
                    else throw t
                },
                parse: function(t) {
                    var e = this;

                    function r() {
                        for (var t = e.buffer, r = 0; r < t.length && "\r" !== t[r] && "\n" !== t[r];) ++r;
                        var n = t.substr(0, r);
                        return "\r" === t[r] && ++r, "\n" === t[r] && ++r, e.buffer = t.substr(r), n
                    }
                    t && (e.buffer += e.decoder.decode(t, {
                        stream: !0
                    }));
                    try {
                        if ("INITIAL" === e.state) {
                            if (!/\r\n|\n/.test(e.buffer)) return this;
                            var n, i, l = (i = r()).match(/^WEBVTT([ \t].*)?$/);
                            if (!l || !l[0]) throw new s(s.Errors.BadSignature);
                            e.state = "HEADER"
                        }
                        for (var c = !1; e.buffer && /\r\n|\n/.test(e.buffer);) switch (c ? c = !1 : i = r(), e.state) {
                            case "HEADER":
                                /:/.test(i) ? (n = i).match(/X-TIMESTAMP-MAP/) ? u(n, function(t, r) {
                                    if ("X-TIMESTAMP-MAP" === t) {
                                        var n;
                                        n = new a, u(r, function(t, e) {
                                            switch (t) {
                                                case "MPEGT":
                                                    n.integer(t + "S", e);
                                                    break;
                                                case "LOCA":
                                                    n.set(t + "L", o(e))
                                            }
                                        }, /[^\d]:/, /,/), e.ontimestampmap && e.ontimestampmap({
                                            MPEGTS: n.get("MPEGTS"),
                                            LOCAL: n.get("LOCAL")
                                        })
                                    }
                                }, /=/) : u(n, function(t, r) {
                                    "Region" === t && function(t) {
                                        var r = new a;
                                        if (u(t, function(t, e) {
                                                switch (t) {
                                                    case "id":
                                                        r.set(t, e);
                                                        break;
                                                    case "width":
                                                        r.percent(t, e);
                                                        break;
                                                    case "lines":
                                                        r.integer(t, e);
                                                        break;
                                                    case "regionanchor":
                                                    case "viewportanchor":
                                                        var n = e.split(",");
                                                        if (2 !== n.length) break;
                                                        var i = new a;
                                                        if (i.percent("x", n[0]), i.percent("y", n[1]), !i.has("x") || !i.has("y")) break;
                                                        r.set(t + "X", i.get("x")), r.set(t + "Y", i.get("y"));
                                                        break;
                                                    case "scroll":
                                                        r.alt(t, e, ["up"])
                                                }
                                            }, /=/, /\s/), r.has("id")) {
                                            var n = new(e.vttjs.VTTRegion || e.window.VTTRegion);
                                            n.width = r.get("width", 100), n.lines = r.get("lines", 3), n.regionAnchorX = r.get("regionanchorX", 0), n.regionAnchorY = r.get("regionanchorY", 100), n.viewportAnchorX = r.get("viewportanchorX", 0), n.viewportAnchorY = r.get("viewportanchorY", 100), n.scroll = r.get("scroll", ""), e.onregion && e.onregion(n), e.regionList.push({
                                                id: r.get("id"),
                                                region: n
                                            })
                                        }
                                    }(r)
                                }, /:/) : i || (e.state = "ID");
                                continue;
                            case "NOTE":
                                i || (e.state = "ID");
                                continue;
                            case "ID":
                                if (/^NOTE($|[ \t])/.test(i)) {
                                    e.state = "NOTE";
                                    break
                                }
                                if (!i) continue;
                                e.cue = new(e.vttjs.VTTCue || e.window.VTTCue)(0, 0, "");
                                try {
                                    e.cue.align = "center"
                                } catch (t) {
                                    e.cue.align = "middle"
                                }
                                if (e.state = "CUE", -1 === i.indexOf("-->")) {
                                    e.cue.id = i;
                                    continue
                                }
                            case "CUE":
                                try {
                                    ! function(t, e, r) {
                                        var n = t;

                                        function i() {
                                            var e = o(t);
                                            if (null === e) throw new s(s.Errors.BadTimeStamp, "Malformed timestamp: " + n);
                                            return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
                                        }

                                        function l() {
                                            t = t.replace(/^\s+/, "")
                                        }
                                        if (l(), e.startTime = i(), l(), "-->" !== t.substr(0, 3)) throw new s(s.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + n);
                                        t = t.substr(3), l(), e.endTime = i(), l(),
                                            function(t, e) {
                                                var n = new a;
                                                u(t, function(t, e) {
                                                    switch (t) {
                                                        case "region":
                                                            for (var i = r.length - 1; i >= 0; i--)
                                                                if (r[i].id === e) {
                                                                    n.set(t, r[i].region);
                                                                    break
                                                                }
                                                            break;
                                                        case "vertical":
                                                            n.alt(t, e, ["rl", "lr"]);
                                                            break;
                                                        case "line":
                                                            var s = e.split(","),
                                                                o = s[0];
                                                            n.integer(t, o), n.percent(t, o) && n.set("snapToLines", !1), n.alt(t, o, ["auto"]), 2 === s.length && n.alt("lineAlign", s[1], ["start", "center", "end"]);
                                                            break;
                                                        case "position":
                                                            s = e.split(","), n.percent(t, s[0]), 2 === s.length && n.alt("positionAlign", s[1], ["start", "center", "end"]);
                                                            break;
                                                        case "size":
                                                            n.percent(t, e);
                                                            break;
                                                        case "align":
                                                            n.alt(t, e, ["start", "center", "end", "left", "right"])
                                                    }
                                                }, /:/, /\s/), e.region = n.get("region", null), e.vertical = n.get("vertical", "");
                                                try {
                                                    e.line = n.get("line", "auto")
                                                } catch (t) {}
                                                e.lineAlign = n.get("lineAlign", "start"), e.snapToLines = n.get("snapToLines", !0), e.size = n.get("size", 100);
                                                try {
                                                    e.align = n.get("align", "center")
                                                } catch (t) {
                                                    e.align = n.get("align", "middle")
                                                }
                                                try {
                                                    e.position = n.get("position", "auto")
                                                } catch (t) {
                                                    e.position = n.get("position", {
                                                        start: 0,
                                                        left: 0,
                                                        center: 50,
                                                        middle: 50,
                                                        end: 100,
                                                        right: 100
                                                    }, e.align)
                                                }
                                                e.positionAlign = n.get("positionAlign", {
                                                    start: "start",
                                                    left: "start",
                                                    center: "center",
                                                    middle: "center",
                                                    end: "end",
                                                    right: "end"
                                                }, e.align)
                                            }(t, e)
                                    }(i, e.cue, e.regionList)
                                } catch (t) {
                                    e.reportOrThrowError(t), e.cue = null, e.state = "BADCUE";
                                    continue
                                }
                                e.state = "CUETEXT";
                                continue;
                            case "CUETEXT":
                                var h = -1 !== i.indexOf("-->");
                                if (!i || h && (c = !0)) {
                                    e.oncue && e.oncue(e.cue), e.cue = null, e.state = "ID";
                                    continue
                                }
                                e.cue.text && (e.cue.text += "\n"), e.cue.text += i.replace(/\u2028/g, "\n").replace(/u2029/g, "\n");
                                continue;
                            case "BADCUE":
                                i || (e.state = "ID");
                                continue
                        }
                    } catch (t) {
                        e.reportOrThrowError(t), "CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue), e.cue = null, e.state = "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE"
                    }
                    return this
                },
                flush: function() {
                    try {
                        if (this.buffer += this.decoder.decode(), (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state) throw new s(s.Errors.BadSignature)
                    } catch (t) {
                        this.reportOrThrowError(t)
                    }
                    return this.onflush && this.onflush(), this
                }
            }, t.exports = b
        },
        6528: function(t) {
            var e = {
                    "": 1,
                    lr: 1,
                    rl: 1
                },
                r = {
                    start: 1,
                    center: 1,
                    end: 1,
                    left: 1,
                    right: 1,
                    auto: 1,
                    "line-left": 1,
                    "line-right": 1
                };

            function n(t) {
                return "string" == typeof t && !!r[t.toLowerCase()] && t.toLowerCase()
            }

            function i(t, r, i) {
                this.hasBeenReset = !1;
                var s = "",
                    o = !1,
                    a = t,
                    u = r,
                    l = i,
                    c = null,
                    h = "",
                    f = !0,
                    d = "auto",
                    p = "start",
                    m = "auto",
                    g = "auto",
                    y = 100,
                    v = "center";
                Object.defineProperties(this, {
                    id: {
                        enumerable: !0,
                        get: function() {
                            return s
                        },
                        set: function(t) {
                            s = "" + t
                        }
                    },
                    pauseOnExit: {
                        enumerable: !0,
                        get: function() {
                            return o
                        },
                        set: function(t) {
                            o = !!t
                        }
                    },
                    startTime: {
                        enumerable: !0,
                        get: function() {
                            return a
                        },
                        set: function(t) {
                            if ("number" != typeof t) throw TypeError("Start time must be set to a number.");
                            a = t, this.hasBeenReset = !0
                        }
                    },
                    endTime: {
                        enumerable: !0,
                        get: function() {
                            return u
                        },
                        set: function(t) {
                            if ("number" != typeof t) throw TypeError("End time must be set to a number.");
                            u = t, this.hasBeenReset = !0
                        }
                    },
                    text: {
                        enumerable: !0,
                        get: function() {
                            return l
                        },
                        set: function(t) {
                            l = "" + t, this.hasBeenReset = !0
                        }
                    },
                    region: {
                        enumerable: !0,
                        get: function() {
                            return c
                        },
                        set: function(t) {
                            c = t, this.hasBeenReset = !0
                        }
                    },
                    vertical: {
                        enumerable: !0,
                        get: function() {
                            return h
                        },
                        set: function(t) {
                            var r = "string" == typeof t && !!e[t.toLowerCase()] && t.toLowerCase();
                            if (!1 === r) throw SyntaxError("Vertical: an invalid or illegal direction string was specified.");
                            h = r, this.hasBeenReset = !0
                        }
                    },
                    snapToLines: {
                        enumerable: !0,
                        get: function() {
                            return f
                        },
                        set: function(t) {
                            f = !!t, this.hasBeenReset = !0
                        }
                    },
                    line: {
                        enumerable: !0,
                        get: function() {
                            return d
                        },
                        set: function(t) {
                            if ("number" != typeof t && "auto" !== t) throw SyntaxError("Line: an invalid number or illegal string was specified.");
                            d = t, this.hasBeenReset = !0
                        }
                    },
                    lineAlign: {
                        enumerable: !0,
                        get: function() {
                            return p
                        },
                        set: function(t) {
                            var e = n(t);
                            e ? (p = e, this.hasBeenReset = !0) : console.warn("lineAlign: an invalid or illegal string was specified.")
                        }
                    },
                    position: {
                        enumerable: !0,
                        get: function() {
                            return m
                        },
                        set: function(t) {
                            if (t < 0 || t > 100) throw Error("Position must be between 0 and 100.");
                            m = t, this.hasBeenReset = !0
                        }
                    },
                    positionAlign: {
                        enumerable: !0,
                        get: function() {
                            return g
                        },
                        set: function(t) {
                            var e = n(t);
                            e ? (g = e, this.hasBeenReset = !0) : console.warn("positionAlign: an invalid or illegal string was specified.")
                        }
                    },
                    size: {
                        enumerable: !0,
                        get: function() {
                            return y
                        },
                        set: function(t) {
                            if (t < 0 || t > 100) throw Error("Size must be between 0 and 100.");
                            y = t, this.hasBeenReset = !0
                        }
                    },
                    align: {
                        enumerable: !0,
                        get: function() {
                            return v
                        },
                        set: function(t) {
                            var e = n(t);
                            if (!e) throw SyntaxError("align: an invalid or illegal alignment string was specified.");
                            v = e, this.hasBeenReset = !0
                        }
                    }
                }), this.displayState = void 0
            }
            i.prototype.getCueAsHTML = function() {
                return WebVTT.convertCueToDOMTree(window, this.text)
            }, t.exports = i
        },
        9333: function(t) {
            var e = {
                "": !0,
                up: !0
            };

            function r(t) {
                return "number" == typeof t && t >= 0 && t <= 100
            }
            t.exports = function() {
                var t = 100,
                    n = 3,
                    i = 0,
                    s = 100,
                    o = 0,
                    a = 100,
                    u = "";
                Object.defineProperties(this, {
                    width: {
                        enumerable: !0,
                        get: function() {
                            return t
                        },
                        set: function(e) {
                            if (!r(e)) throw Error("Width must be between 0 and 100.");
                            t = e
                        }
                    },
                    lines: {
                        enumerable: !0,
                        get: function() {
                            return n
                        },
                        set: function(t) {
                            if ("number" != typeof t) throw TypeError("Lines must be set to a number.");
                            n = t
                        }
                    },
                    regionAnchorY: {
                        enumerable: !0,
                        get: function() {
                            return s
                        },
                        set: function(t) {
                            if (!r(t)) throw Error("RegionAnchorX must be between 0 and 100.");
                            s = t
                        }
                    },
                    regionAnchorX: {
                        enumerable: !0,
                        get: function() {
                            return i
                        },
                        set: function(t) {
                            if (!r(t)) throw Error("RegionAnchorY must be between 0 and 100.");
                            i = t
                        }
                    },
                    viewportAnchorY: {
                        enumerable: !0,
                        get: function() {
                            return a
                        },
                        set: function(t) {
                            if (!r(t)) throw Error("ViewportAnchorY must be between 0 and 100.");
                            a = t
                        }
                    },
                    viewportAnchorX: {
                        enumerable: !0,
                        get: function() {
                            return o
                        },
                        set: function(t) {
                            if (!r(t)) throw Error("ViewportAnchorX must be between 0 and 100.");
                            o = t
                        }
                    },
                    scroll: {
                        enumerable: !0,
                        get: function() {
                            return u
                        },
                        set: function(t) {
                            var r = "string" == typeof t && !!e[t.toLowerCase()] && t.toLowerCase();
                            !1 === r ? console.warn("Scroll: an invalid or illegal string was specified.") : u = r
                        }
                    }
                })
            }
        },
        1410: function() {},
        2241: function(t) {
            function e() {
                return t.exports = e = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, t.exports.__esModule = !0, t.exports.default = t.exports, e.apply(this, arguments)
            }
            t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        2073: function(t, e, r) {
            "use strict";

            function n() {
                return (n = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }
            r.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        8679: function(t, e, r) {
            "use strict";
            r.d(e, {
                M: function() {
                    return v
                }
            });
            var n = r(9176),
                i = r(5330),
                s = r(1114);

            function o() {
                let t = (0, i.useRef)(!1);
                return (0, s.L)(() => (t.current = !0, () => {
                    t.current = !1
                }), []), t
            }
            var a = r(9331),
                u = r(6026),
                l = r(8868),
                c = r(4352);
            class h extends i.Component {
                getSnapshotBeforeUpdate(t) {
                    let e = this.props.childRef.current;
                    if (e && t.isPresent && !this.props.isPresent) {
                        let t = this.props.sizeRef.current;
                        t.height = e.offsetHeight || 0, t.width = e.offsetWidth || 0, t.top = e.offsetTop, t.left = e.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function f({
                children: t,
                isPresent: e
            }) {
                let r = (0, i.useId)(),
                    s = (0, i.useRef)(null),
                    o = (0, i.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    }),
                    {
                        nonce: a
                    } = (0, i.useContext)(c._);
                return (0, i.useInsertionEffect)(() => {
                    let {
                        width: t,
                        height: n,
                        top: i,
                        left: u
                    } = o.current;
                    if (e || !s.current || !t || !n) return;
                    s.current.dataset.motionPopId = r;
                    let l = document.createElement("style");
                    return a && (l.nonce = a), document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${n}px !important;
            top: ${i}px !important;
            left: ${u}px !important;
          }
        `), () => {
                        document.head.removeChild(l)
                    }
                }, [e]), (0, n.jsx)(h, {
                    isPresent: e,
                    childRef: s,
                    sizeRef: o,
                    children: i.cloneElement(t, {
                        ref: s
                    })
                })
            }
            let d = ({
                children: t,
                initial: e,
                isPresent: r,
                onExitComplete: s,
                custom: o,
                presenceAffectsLayout: a,
                mode: c
            }) => {
                let h = (0, l.h)(p),
                    d = (0, i.useId)(),
                    m = (0, i.useMemo)(() => ({
                        id: d,
                        initial: e,
                        isPresent: r,
                        custom: o,
                        onExitComplete: t => {
                            for (let e of (h.set(t, !0), h.values()))
                                if (!e) return;
                            s && s()
                        },
                        register: t => (h.set(t, !1), () => h.delete(t))
                    }), a ? [Math.random()] : [r]);
                return (0, i.useMemo)(() => {
                    h.forEach((t, e) => h.set(e, !1))
                }, [r]), i.useEffect(() => {
                    r || h.size || !s || s()
                }, [r]), "popLayout" === c && (t = (0, n.jsx)(f, {
                    isPresent: r,
                    children: t
                })), (0, n.jsx)(u.O.Provider, {
                    value: m,
                    children: t
                })
            };

            function p() {
                return new Map
            }
            var m = r(6726),
                g = r(499);
            let y = t => t.key || "",
                v = ({
                    children: t,
                    custom: e,
                    initial: r = !0,
                    onExitComplete: u,
                    exitBeforeEnter: l,
                    presenceAffectsLayout: c = !0,
                    mode: h = "sync"
                }) => {
                    var f;
                    (0, g.k)(!l, "Replace exitBeforeEnter with mode='wait'");
                    let p = (0, i.useContext)(m.p).forceRender || function() {
                            let t = o(),
                                [e, r] = (0, i.useState)(0),
                                n = (0, i.useCallback)(() => {
                                    t.current && r(e + 1)
                                }, [e]);
                            return [(0, i.useCallback)(() => a.Wi.postRender(n), [n]), e]
                        }()[0],
                        v = o(),
                        b = function(t) {
                            let e = [];
                            return i.Children.forEach(t, t => {
                                (0, i.isValidElement)(t) && e.push(t)
                            }), e
                        }(t),
                        w = b,
                        E = (0, i.useRef)(new Map).current,
                        T = (0, i.useRef)(w),
                        D = (0, i.useRef)(new Map).current,
                        x = (0, i.useRef)(!0);
                    if ((0, s.L)(() => {
                            x.current = !1,
                                function(t, e) {
                                    t.forEach(t => {
                                        let r = y(t);
                                        e.set(r, t)
                                    })
                                }(b, D), T.current = w
                        }), f = () => {
                            x.current = !0, D.clear(), E.clear()
                        }, (0, i.useEffect)(() => () => f(), []), x.current) return (0, n.jsx)(n.Fragment, {
                        children: w.map(t => (0, n.jsx)(d, {
                            isPresent: !0,
                            initial: !!r && void 0,
                            presenceAffectsLayout: c,
                            mode: h,
                            children: t
                        }, y(t)))
                    });
                    w = [...w];
                    let S = T.current.map(y),
                        A = b.map(y),
                        P = S.length;
                    for (let t = 0; t < P; t++) {
                        let e = S[t]; - 1 !== A.indexOf(e) || E.has(e) || E.set(e, void 0)
                    }
                    return "wait" === h && E.size && (w = []), E.forEach((t, r) => {
                        if (-1 !== A.indexOf(r)) return;
                        let i = D.get(r);
                        if (!i) return;
                        let s = S.indexOf(r),
                            o = t;
                        o || (o = (0, n.jsx)(d, {
                            isPresent: !1,
                            onExitComplete: () => {
                                E.delete(r);
                                let t = Array.from(D.keys()).filter(t => !A.includes(t));
                                if (t.forEach(t => D.delete(t)), T.current = b.filter(e => {
                                        let n = y(e);
                                        return n === r || t.includes(n)
                                    }), !E.size) {
                                    if (!1 === v.current) return;
                                    p(), u && u()
                                }
                            },
                            custom: e,
                            presenceAffectsLayout: c,
                            mode: h,
                            children: i
                        }, y(i)), E.set(r, o)), w.splice(s, 0, o)
                    }), w = w.map(t => {
                        let e = t.key;
                        return E.has(e) ? t : (0, n.jsx)(d, {
                            isPresent: !0,
                            presenceAffectsLayout: c,
                            mode: h,
                            children: t
                        }, y(t))
                    }), (0, n.jsx)(n.Fragment, {
                        children: E.size ? w : w.map(t => (0, i.cloneElement)(t))
                    })
                }
        },
        6726: function(t, e, r) {
            "use strict";
            r.d(e, {
                p: function() {
                    return n
                }
            });
            let n = (0, r(5330).createContext)({})
        },
        4352: function(t, e, r) {
            "use strict";
            r.d(e, {
                _: function() {
                    return n
                }
            });
            let n = (0, r(5330).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        6026: function(t, e, r) {
            "use strict";
            r.d(e, {
                O: function() {
                    return n
                }
            });
            let n = (0, r(5330).createContext)(null)
        },
        9643: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return o
                }
            });
            var n = r(8174);
            class i {
                constructor() {
                    this.order = [], this.scheduled = new Set
                }
                add(t) {
                    if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
                }
                remove(t) {
                    let e = this.order.indexOf(t); - 1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t))
                }
                clear() {
                    this.order.length = 0, this.scheduled.clear()
                }
            }
            let s = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];

            function o(t, e) {
                let r = !1,
                    o = !0,
                    a = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    u = s.reduce((t, e) => (t[e] = function(t) {
                        let e = new i,
                            r = new i,
                            n = 0,
                            s = !1,
                            o = !1,
                            a = new WeakSet,
                            u = {
                                schedule: (t, i = !1, o = !1) => {
                                    let u = o && s,
                                        l = u ? e : r;
                                    return i && a.add(t), l.add(t) && u && s && (n = e.order.length), t
                                },
                                cancel: t => {
                                    r.remove(t), a.delete(t)
                                },
                                process: i => {
                                    if (s) {
                                        o = !0;
                                        return
                                    }
                                    if (s = !0, [e, r] = [r, e], r.clear(), n = e.order.length)
                                        for (let r = 0; r < n; r++) {
                                            let n = e.order[r];
                                            a.has(n) && (u.schedule(n), t()), n(i)
                                        }
                                    s = !1, o && (o = !1, u.process(i))
                                }
                            };
                        return u
                    }(() => r = !0), t), {}),
                    l = t => {
                        u[t].process(a)
                    },
                    c = () => {
                        let i = n.c.useManualTiming ? a.timestamp : performance.now();
                        r = !1, a.delta = o ? 1e3 / 60 : Math.max(Math.min(i - a.timestamp, 40), 1), a.timestamp = i, a.isProcessing = !0, s.forEach(l), a.isProcessing = !1, r && e && (o = !1, t(c))
                    },
                    h = () => {
                        r = !0, o = !0, a.isProcessing || t(c)
                    };
                return {
                    schedule: s.reduce((t, e) => {
                        let n = u[e];
                        return t[e] = (t, e = !1, i = !1) => (r || h(), n.schedule(t, e, i)), t
                    }, {}),
                    cancel: t => s.forEach(e => u[e].cancel(t)),
                    state: a,
                    steps: u
                }
            }
        },
        9331: function(t, e, r) {
            "use strict";
            r.d(e, {
                Pn: function() {
                    return s
                },
                S6: function() {
                    return a
                },
                Wi: function() {
                    return i
                },
                frameData: function() {
                    return o
                }
            });
            var n = r(6210);
            let {
                schedule: i,
                cancel: s,
                state: o,
                steps: a
            } = (0, r(9643).Z)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z, !0)
        },
        8827: function(t, e, r) {
            "use strict";
            let n, i;
            r.d(e, {
                E: function() {
                    return i9
                }
            });
            var s, o, a = r(9176),
                u = r(5330),
                l = r(4352);
            let c = (0, u.createContext)({});
            var h = r(6026),
                f = r(1114);
            let d = (0, u.createContext)({
                    strict: !1
                }),
                p = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
                m = "data-" + p("framerAppearId"),
                {
                    schedule: g,
                    cancel: y
                } = (0, r(9643).Z)(queueMicrotask, !1);

            function v(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function b(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function w(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
            let E = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                T = ["initial", ...E];

            function D(t) {
                return w(t.animate) || T.some(e => b(t[e]))
            }

            function x(t) {
                return !!(D(t) || t.variants)
            }

            function S(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let A = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                P = {};
            for (let t in A) P[t] = {
                isEnabled: e => A[t].some(t => !!e[t])
            };
            var R = r(8511),
                C = r(6726);
            let N = (0, u.createContext)({}),
                O = Symbol.for("motionComponentSymbol"),
                I = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function L(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (I.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }
            let M = {},
                k = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                U = new Set(k);

            function B(t, {
                layout: e,
                layoutId: r
            }) {
                return U.has(t) || t.startsWith("origin") || (e || void 0 !== r) && (!!M[t] || "opacity" === t)
            }
            let V = t => !!(t && t.getVelocity),
                j = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                _ = k.length,
                q = t => e => "string" == typeof e && e.startsWith(t),
                F = q("--"),
                G = q("var(--"),
                X = t => !!G(t) && z.test(t.split("/*")[0].trim()),
                z = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
                H = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                $ = (t, e, r) => r > e ? e : r < t ? t : r,
                W = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                K = { ...W,
                    transform: t => $(0, 1, t)
                },
                Y = { ...W,
                    default: 1
                },
                Z = t => Math.round(1e5 * t) / 1e5,
                J = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
                Q = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
                tt = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

            function te(t) {
                return "string" == typeof t
            }
            let tr = t => ({
                    test: e => te(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                tn = tr("deg"),
                ti = tr("%"),
                ts = tr("px"),
                to = tr("vh"),
                ta = tr("vw"),
                tu = { ...ti,
                    parse: t => ti.parse(t) / 100,
                    transform: t => ti.transform(100 * t)
                },
                tl = { ...W,
                    transform: Math.round
                },
                tc = {
                    borderWidth: ts,
                    borderTopWidth: ts,
                    borderRightWidth: ts,
                    borderBottomWidth: ts,
                    borderLeftWidth: ts,
                    borderRadius: ts,
                    radius: ts,
                    borderTopLeftRadius: ts,
                    borderTopRightRadius: ts,
                    borderBottomRightRadius: ts,
                    borderBottomLeftRadius: ts,
                    width: ts,
                    maxWidth: ts,
                    height: ts,
                    maxHeight: ts,
                    size: ts,
                    top: ts,
                    right: ts,
                    bottom: ts,
                    left: ts,
                    padding: ts,
                    paddingTop: ts,
                    paddingRight: ts,
                    paddingBottom: ts,
                    paddingLeft: ts,
                    margin: ts,
                    marginTop: ts,
                    marginRight: ts,
                    marginBottom: ts,
                    marginLeft: ts,
                    rotate: tn,
                    rotateX: tn,
                    rotateY: tn,
                    rotateZ: tn,
                    scale: Y,
                    scaleX: Y,
                    scaleY: Y,
                    scaleZ: Y,
                    skew: tn,
                    skewX: tn,
                    skewY: tn,
                    distance: ts,
                    translateX: ts,
                    translateY: ts,
                    translateZ: ts,
                    x: ts,
                    y: ts,
                    z: ts,
                    perspective: ts,
                    transformPerspective: ts,
                    opacity: K,
                    originX: tu,
                    originY: tu,
                    originZ: ts,
                    zIndex: tl,
                    backgroundPositionX: ts,
                    backgroundPositionY: ts,
                    fillOpacity: K,
                    strokeOpacity: K,
                    numOctaves: tl
                };

            function th(t, e, r, n) {
                let {
                    style: i,
                    vars: s,
                    transform: o,
                    transformOrigin: a
                } = t, u = !1, l = !1, c = !0;
                for (let t in e) {
                    let r = e[t];
                    if (F(t)) {
                        s[t] = r;
                        continue
                    }
                    let n = tc[t],
                        h = H(r, n);
                    if (U.has(t)) {
                        if (u = !0, o[t] = h, !c) continue;
                        r !== (n.default || 0) && (c = !1)
                    } else t.startsWith("origin") ? (l = !0, a[t] = h) : i[t] = h
                }
                if (!e.transform && (u || n ? i.transform = function(t, {
                        enableHardwareAcceleration: e = !0,
                        allowTransformNone: r = !0
                    }, n, i) {
                        let s = "";
                        for (let e = 0; e < _; e++) {
                            let r = k[e];
                            if (void 0 !== t[r]) {
                                let e = j[r] || r;
                                s += `${e}(${t[r]}) `
                            }
                        }
                        return e && !t.z && (s += "translateZ(0)"), s = s.trim(), i ? s = i(t, n ? "" : s) : r && n && (s = "none"), s
                    }(t.transform, r, c, n) : i.transform && (i.transform = "none")), l) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: r = 0
                    } = a;
                    i.transformOrigin = `${t} ${e} ${r}`
                }
            }
            let tf = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function td(t, e, r) {
                for (let n in e) V(e[n]) || B(n, r) || (t[n] = e[n])
            }
            let tp = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function tm(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || tp.has(t)
            }
            let tg = t => !tm(t);
            try {
                (s = require("@emotion/is-prop-valid").default) && (tg = t => t.startsWith("on") ? !tm(t) : s(t))
            } catch (t) {}

            function ty(t, e, r) {
                return "string" == typeof t ? t : ts.transform(e + r * t)
            }
            let tv = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                tb = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function tw(t, {
                attrX: e,
                attrY: r,
                attrScale: n,
                originX: i,
                originY: s,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: u = 0,
                ...l
            }, c, h, f) {
                if (th(t, l, c, f), h) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: d,
                    style: p,
                    dimensions: m
                } = t;
                d.transform && (m && (p.transform = d.transform), delete d.transform), m && (void 0 !== i || void 0 !== s || p.transform) && (p.transformOrigin = function(t, e, r) {
                    let n = ty(e, t.x, t.width),
                        i = ty(r, t.y, t.height);
                    return `${n} ${i}`
                }(m, void 0 !== i ? i : .5, void 0 !== s ? s : .5)), void 0 !== e && (d.x = e), void 0 !== r && (d.y = r), void 0 !== n && (d.scale = n), void 0 !== o && function(t, e, r = 1, n = 0, i = !0) {
                    t.pathLength = 1;
                    let s = i ? tv : tb;
                    t[s.offset] = ts.transform(-n);
                    let o = ts.transform(e),
                        a = ts.transform(r);
                    t[s.array] = `${o} ${a}`
                }(d, o, a, u, !1)
            }
            let tE = () => ({ ...tf(),
                    attrs: {}
                }),
                tT = t => "string" == typeof t && "svg" === t.toLowerCase();

            function tD(t, {
                style: e,
                vars: r
            }, n, i) {
                for (let s in Object.assign(t.style, e, i && i.getProjectionStyles(n)), r) t.style.setProperty(s, r[s])
            }
            let tx = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function tS(t, e, r, n) {
                for (let r in tD(t, e, void 0, n), e.attrs) t.setAttribute(tx.has(r) ? r : p(r), e.attrs[r])
            }

            function tA(t, e, r) {
                var n;
                let {
                    style: i
                } = t, s = {};
                for (let o in i)(V(i[o]) || e.style && V(e.style[o]) || B(o, t) || (null === (n = null == r ? void 0 : r.getValue(o)) || void 0 === n ? void 0 : n.liveStyle) !== void 0) && (s[o] = i[o]);
                return s
            }

            function tP(t, e, r) {
                let n = tA(t, e, r);
                for (let r in t)(V(t[r]) || V(e[r])) && (n[-1 !== k.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = t[r]);
                return n
            }

            function tR(t) {
                let e = [{}, {}];
                return null == t || t.values.forEach((t, r) => {
                    e[0][r] = t.get(), e[1][r] = t.getVelocity()
                }), e
            }

            function tC(t, e, r, n) {
                if ("function" == typeof e) {
                    let [i, s] = tR(n);
                    e = e(void 0 !== r ? r : t.custom, i, s)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [i, s] = tR(n);
                    e = e(void 0 !== r ? r : t.custom, i, s)
                }
                return e
            }
            var tN = r(8868);
            let tO = t => Array.isArray(t),
                tI = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                tL = t => tO(t) ? t[t.length - 1] || 0 : t;

            function tM(t) {
                let e = V(t) ? t.get() : t;
                return tI(e) ? e.toValue() : e
            }
            let tk = t => (e, r) => {
                let n = (0, u.useContext)(c),
                    i = (0, u.useContext)(h.O),
                    s = () => (function({
                        scrapeMotionValuesFromProps: t,
                        createRenderState: e,
                        onMount: r
                    }, n, i, s) {
                        let o = {
                            latestValues: function(t, e, r, n) {
                                let i = {},
                                    s = n(t, {});
                                for (let t in s) i[t] = tM(s[t]);
                                let {
                                    initial: o,
                                    animate: a
                                } = t, u = D(t), l = x(t);
                                e && l && !u && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
                                let c = !!r && !1 === r.initial,
                                    h = (c = c || !1 === o) ? a : o;
                                return h && "boolean" != typeof h && !w(h) && (Array.isArray(h) ? h : [h]).forEach(e => {
                                    let r = tC(t, e);
                                    if (!r) return;
                                    let {
                                        transitionEnd: n,
                                        transition: s,
                                        ...o
                                    } = r;
                                    for (let t in o) {
                                        let e = o[t];
                                        if (Array.isArray(e)) {
                                            let t = c ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (i[t] = e)
                                    }
                                    for (let t in n) i[t] = n[t]
                                }), i
                            }(n, i, s, t),
                            renderState: e()
                        };
                        return r && (o.mount = t => r(n, t, o)), o
                    })(t, e, n, i);
                return r ? s() : (0, tN.h)(s)
            };
            var tU = r(9331);
            let tB = {
                    useVisualState: tk({
                        scrapeMotionValuesFromProps: tP,
                        createRenderState: tE,
                        onMount: (t, e, {
                            renderState: r,
                            latestValues: n
                        }) => {
                            tU.Wi.read(() => {
                                try {
                                    r.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                                } catch (t) {
                                    r.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), tU.Wi.render(() => {
                                tw(r, n, {
                                    enableHardwareAcceleration: !1
                                }, tT(e.tagName), t.transformTemplate), tS(e, r)
                            })
                        }
                    })
                },
                tV = {
                    useVisualState: tk({
                        scrapeMotionValuesFromProps: tA,
                        createRenderState: tf
                    })
                };

            function tj(t, e, r, n = {
                passive: !0
            }) {
                return t.addEventListener(e, r, n), () => t.removeEventListener(e, r)
            }
            let t_ = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function tq(t, e = "page") {
                return {
                    point: {
                        x: t[`${e}X`],
                        y: t[`${e}Y`]
                    }
                }
            }
            let tF = t => e => t_(e) && t(e, tq(e));

            function tG(t, e, r, n) {
                return tj(t, e, tF(r), n)
            }
            let tX = (t, e) => r => e(t(r)),
                tz = (...t) => t.reduce(tX);

            function tH(t) {
                let e = null;
                return () => null === e && (e = t, () => {
                    e = null
                })
            }
            let t$ = tH("dragHorizontal"),
                tW = tH("dragVertical");

            function tK(t) {
                let e = !1;
                if ("y" === t) e = tW();
                else if ("x" === t) e = t$();
                else {
                    let t = t$(),
                        r = tW();
                    t && r ? e = () => {
                        t(), r()
                    } : (t && t(), r && r())
                }
                return e
            }

            function tY() {
                let t = tK(!0);
                return !t || (t(), !1)
            }
            class tZ {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }

            function tJ(t, e) {
                let r = e ? "onHoverStart" : "onHoverEnd";
                return tG(t.current, e ? "pointerenter" : "pointerleave", (n, i) => {
                    if ("touch" === n.pointerType || tY()) return;
                    let s = t.getProps();
                    t.animationState && s.whileHover && t.animationState.setActive("whileHover", e);
                    let o = s[r];
                    o && tU.Wi.postRender(() => o(n, i))
                }, {
                    passive: !t.getProps()[r]
                })
            }
            class tQ extends tZ {
                mount() {
                    this.unmount = tz(tJ(this.node, !0), tJ(this.node, !1))
                }
                unmount() {}
            }
            class t0 extends tZ {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = tz(tj(this.node.current, "focus", () => this.onFocus()), tj(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }
            let t1 = (t, e) => !!e && (t === e || t1(t, e.parentElement));
            var t2 = r(6210);

            function t3(t, e) {
                if (!e) return;
                let r = new PointerEvent("pointer" + t);
                e(r, tq(r))
            }
            class t5 extends tZ {
                constructor() {
                    super(...arguments), this.removeStartListeners = t2.Z, this.removeEndListeners = t2.Z, this.removeAccessibleListeners = t2.Z, this.startPointerPress = (t, e) => {
                        if (this.isPressing) return;
                        this.removeEndListeners();
                        let r = this.node.getProps(),
                            n = tG(window, "pointerup", (t, e) => {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTap: r,
                                    onTapCancel: n,
                                    globalTapTarget: i
                                } = this.node.getProps(), s = i || t1(this.node.current, t.target) ? r : n;
                                s && tU.Wi.update(() => s(t, e))
                            }, {
                                passive: !(r.onTap || r.onPointerUp)
                            }),
                            i = tG(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                passive: !(r.onTapCancel || r.onPointerCancel)
                            });
                        this.removeEndListeners = tz(n, i), this.startPress(t, e)
                    }, this.startAccessiblePress = () => {
                        let t = tj(this.node.current, "keydown", t => {
                                "Enter" !== t.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = tj(this.node.current, "keyup", t => {
                                    "Enter" === t.key && this.checkPressEnd() && t3("up", (t, e) => {
                                        let {
                                            onTap: r
                                        } = this.node.getProps();
                                        r && tU.Wi.postRender(() => r(t, e))
                                    })
                                }), t3("down", (t, e) => {
                                    this.startPress(t, e)
                                }))
                            }),
                            e = tj(this.node.current, "blur", () => {
                                this.isPressing && t3("cancel", (t, e) => this.cancelPress(t, e))
                            });
                        this.removeAccessibleListeners = tz(t, e)
                    }
                }
                startPress(t, e) {
                    this.isPressing = !0;
                    let {
                        onTapStart: r,
                        whileTap: n
                    } = this.node.getProps();
                    n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && tU.Wi.postRender(() => r(t, e))
                }
                checkPressEnd() {
                    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !tY()
                }
                cancelPress(t, e) {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTapCancel: r
                    } = this.node.getProps();
                    r && tU.Wi.postRender(() => r(t, e))
                }
                mount() {
                    let t = this.node.getProps(),
                        e = tG(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                            passive: !(t.onTapStart || t.onPointerStart)
                        }),
                        r = tj(this.node.current, "focus", this.startAccessiblePress);
                    this.removeStartListeners = tz(e, r)
                }
                unmount() {
                    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                }
            }
            let t6 = new WeakMap,
                t8 = new WeakMap,
                t4 = t => {
                    let e = t6.get(t.target);
                    e && e(t)
                },
                t9 = t => {
                    t.forEach(t4)
                },
                t7 = {
                    some: 0,
                    all: 1
                };
            class et extends tZ {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: r,
                        amount: n = "some",
                        once: i
                    } = t, s = {
                        root: e ? e.current : void 0,
                        rootMargin: r,
                        threshold: "number" == typeof n ? n : t7[n]
                    };
                    return function(t, e, r) {
                        let n = function({
                            root: t,
                            ...e
                        }) {
                            let r = t || document;
                            t8.has(r) || t8.set(r, {});
                            let n = t8.get(r),
                                i = JSON.stringify(e);
                            return n[i] || (n[i] = new IntersectionObserver(t9, {
                                root: t,
                                ...e
                            })), n[i]
                        }(e);
                        return t6.set(t, r), n.observe(t), () => {
                            t6.delete(t), n.unobserve(t)
                        }
                    }(this.node.current, s, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, i && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: r,
                            onViewportLeave: n
                        } = this.node.getProps(), s = e ? r : n;
                        s && s(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return r => t[r] !== e[r]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }

            function ee(t, e) {
                if (!Array.isArray(e)) return !1;
                let r = e.length;
                if (r !== t.length) return !1;
                for (let n = 0; n < r; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function er(t, e, r) {
                let n = t.getProps();
                return tC(n, e, void 0 !== r ? r : n.custom, t)
            }
            let en = t => 1e3 * t,
                ei = t => t / 1e3,
                es = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                eo = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                ea = {
                    type: "keyframes",
                    duration: .8
                },
                eu = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                el = (t, {
                    keyframes: e
                }) => e.length > 2 ? ea : U.has(t) ? t.startsWith("scale") ? eo(e[1]) : es : eu;

            function ec(t, e) {
                return t[e] || t.default || t
            }
            var eh = r(8174);
            let ef = {
                    current: !1
                },
                ed = t => null !== t;

            function ep(t, {
                repeat: e,
                repeatType: r = "loop"
            }, n) {
                let i = t.filter(ed),
                    s = e && "loop" !== r && e % 2 == 1 ? 0 : i.length - 1;
                return s && void 0 !== n ? n : i[s]
            }

            function em() {
                n = void 0
            }
            let eg = {
                    now: () => (void 0 === n && eg.set(tU.frameData.isProcessing || eh.c.useManualTiming ? tU.frameData.timestamp : performance.now()), n),
                    set: t => {
                        n = t, queueMicrotask(em)
                    }
                },
                ey = t => /^0[^.\s]+$/u.test(t);
            var ev = r(499);
            let eb = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
                ew = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
                eE = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                eT = t => t === W || t === ts,
                eD = (t, e) => parseFloat(t.split(", ")[e]),
                ex = (t, e) => (r, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    let i = n.match(/^matrix3d\((.+)\)$/u);
                    if (i) return eD(i[1], e); {
                        let e = n.match(/^matrix\((.+)\)$/u);
                        return e ? eD(e[1], t) : 0
                    }
                },
                eS = new Set(["x", "y", "z"]),
                eA = k.filter(t => !eS.has(t)),
                eP = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: r = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: r = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: ex(4, 13),
                    y: ex(5, 14)
                };
            eP.translateX = eP.x, eP.translateY = eP.y;
            let eR = t => e => e.test(t),
                eC = [W, ts, ti, tn, ta, to, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                eN = t => eC.find(eR(t)),
                eO = new Set,
                eI = !1,
                eL = !1;

            function eM() {
                if (eL) {
                    let t = Array.from(eO).filter(t => t.needsMeasurement),
                        e = new Set(t.map(t => t.element)),
                        r = new Map;
                    e.forEach(t => {
                        let e = function(t) {
                            let e = [];
                            return eA.forEach(r => {
                                let n = t.getValue(r);
                                void 0 !== n && (e.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0))
                            }), e
                        }(t);
                        e.length && (r.set(t, e), t.render())
                    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                        t.render();
                        let e = r.get(t);
                        e && e.forEach(([e, r]) => {
                            var n;
                            null === (n = t.getValue(e)) || void 0 === n || n.set(r)
                        })
                    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    })
                }
                eL = !1, eI = !1, eO.forEach(t => t.complete()), eO.clear()
            }

            function ek() {
                eO.forEach(t => {
                    t.readKeyframes(), t.needsMeasurement && (eL = !0)
                })
            }
            class eU {
                constructor(t, e, r, n, i, s = !1) {
                    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = r, this.motionValue = n, this.element = i, this.isAsync = s
                }
                scheduleResolve() {
                    this.isScheduled = !0, this.isAsync ? (eO.add(this), eI || (eI = !0, tU.Wi.read(ek), tU.Wi.resolveKeyframes(eM))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e,
                        element: r,
                        motionValue: n
                    } = this;
                    for (let i = 0; i < t.length; i++)
                        if (null === t[i]) {
                            if (0 === i) {
                                let i = null == n ? void 0 : n.get(),
                                    s = t[t.length - 1];
                                if (void 0 !== i) t[0] = i;
                                else if (r && e) {
                                    let n = r.readValue(e, s);
                                    null != n && (t[0] = n)
                                }
                                void 0 === t[0] && (t[0] = s), n && void 0 === i && n.set(t[0])
                            } else t[i] = t[i - 1]
                        }
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete() {
                    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), eO.delete(this)
                }
                cancel() {
                    this.isComplete || (this.isScheduled = !1, eO.delete(this))
                }
                resume() {
                    this.isComplete || this.scheduleResolve()
                }
            }
            let eB = (t, e) => r => !!(te(r) && tt.test(r) && r.startsWith(t) || e && Object.prototype.hasOwnProperty.call(r, e)),
                eV = (t, e, r) => n => {
                    if (!te(n)) return n;
                    let [i, s, o, a] = n.match(J);
                    return {
                        [t]: parseFloat(i),
                        [e]: parseFloat(s),
                        [r]: parseFloat(o),
                        alpha: void 0 !== a ? parseFloat(a) : 1
                    }
                },
                ej = t => $(0, 255, t),
                e_ = { ...W,
                    transform: t => Math.round(ej(t))
                },
                eq = {
                    test: eB("rgb", "red"),
                    parse: eV("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: r,
                        alpha: n = 1
                    }) => "rgba(" + e_.transform(t) + ", " + e_.transform(e) + ", " + e_.transform(r) + ", " + Z(K.transform(n)) + ")"
                },
                eF = {
                    test: eB("#"),
                    parse: function(t) {
                        let e = "",
                            r = "",
                            n = "",
                            i = "";
                        return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), n = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), n = t.substring(3, 4), i = t.substring(4, 5), e += e, r += r, n += n, i += i), {
                            red: parseInt(e, 16),
                            green: parseInt(r, 16),
                            blue: parseInt(n, 16),
                            alpha: i ? parseInt(i, 16) / 255 : 1
                        }
                    },
                    transform: eq.transform
                },
                eG = {
                    test: eB("hsl", "hue"),
                    parse: eV("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: r,
                        alpha: n = 1
                    }) => "hsla(" + Math.round(t) + ", " + ti.transform(Z(e)) + ", " + ti.transform(Z(r)) + ", " + Z(K.transform(n)) + ")"
                },
                eX = {
                    test: t => eq.test(t) || eF.test(t) || eG.test(t),
                    parse: t => eq.test(t) ? eq.parse(t) : eG.test(t) ? eG.parse(t) : eF.parse(t),
                    transform: t => te(t) ? t : t.hasOwnProperty("red") ? eq.transform(t) : eG.transform(t)
                },
                ez = "number",
                eH = "color",
                e$ = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function eW(t) {
                let e = t.toString(),
                    r = [],
                    n = {
                        color: [],
                        number: [],
                        var: []
                    },
                    i = [],
                    s = 0,
                    o = e.replace(e$, t => (eX.test(t) ? (n.color.push(s), i.push(eH), r.push(eX.parse(t))) : t.startsWith("var(") ? (n.var.push(s), i.push("var"), r.push(t)) : (n.number.push(s), i.push(ez), r.push(parseFloat(t))), ++s, "${}")).split("${}");
                return {
                    values: r,
                    split: o,
                    indexes: n,
                    types: i
                }
            }

            function eK(t) {
                return eW(t).values
            }

            function eY(t) {
                let {
                    split: e,
                    types: r
                } = eW(t), n = e.length;
                return t => {
                    let i = "";
                    for (let s = 0; s < n; s++)
                        if (i += e[s], void 0 !== t[s]) {
                            let e = r[s];
                            e === ez ? i += Z(t[s]) : e === eH ? i += eX.transform(t[s]) : i += t[s]
                        }
                    return i
                }
            }
            let eZ = t => "number" == typeof t ? 0 : t,
                eJ = {
                    test: function(t) {
                        var e, r;
                        return isNaN(t) && te(t) && ((null === (e = t.match(J)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (r = t.match(Q)) || void 0 === r ? void 0 : r.length) || 0) > 0
                    },
                    parse: eK,
                    createTransformer: eY,
                    getAnimatableNone: function(t) {
                        let e = eK(t);
                        return eY(t)(e.map(eZ))
                    }
                },
                eQ = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function e0(t) {
                let [e, r] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = r.match(J) || [];
                if (!n) return t;
                let i = r.replace(n, ""),
                    s = eQ.has(e) ? 1 : 0;
                return n !== r && (s *= 100), e + "(" + s + i + ")"
            }
            let e1 = /\b([a-z-]*)\(.*?\)/gu,
                e2 = { ...eJ,
                    getAnimatableNone: t => {
                        let e = t.match(e1);
                        return e ? e.map(e0).join(" ") : t
                    }
                },
                e3 = { ...tc,
                    color: eX,
                    backgroundColor: eX,
                    outlineColor: eX,
                    fill: eX,
                    stroke: eX,
                    borderColor: eX,
                    borderTopColor: eX,
                    borderRightColor: eX,
                    borderBottomColor: eX,
                    borderLeftColor: eX,
                    filter: e2,
                    WebkitFilter: e2
                },
                e5 = t => e3[t];

            function e6(t, e) {
                let r = e5(t);
                return r !== e2 && (r = eJ), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
            }
            let e8 = new Set(["auto", "none", "0"]);
            class e4 extends eU {
                constructor(t, e, r, n) {
                    super(t, e, r, n, null == n ? void 0 : n.owner, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        element: e,
                        name: r
                    } = this;
                    if (!e.current) return;
                    super.readKeyframes();
                    for (let r = 0; r < t.length; r++) {
                        let n = t[r];
                        if ("string" == typeof n && X(n)) {
                            let i = function t(e, r, n = 1) {
                                (0, ev.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                                let [i, s] = function(t) {
                                    let e = ew.exec(t);
                                    if (!e) return [, ];
                                    let [, r, n, i] = e;
                                    return [`--${null!=r?r:n}`, i]
                                }(e);
                                if (!i) return;
                                let o = window.getComputedStyle(r).getPropertyValue(i);
                                if (o) {
                                    let t = o.trim();
                                    return eb(t) ? parseFloat(t) : t
                                }
                                return X(s) ? t(s, r, n + 1) : s
                            }(n, e.current);
                            void 0 !== i && (t[r] = i), r === t.length - 1 && (this.finalKeyframe = n)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !eE.has(r) || 2 !== t.length) return;
                    let [n, i] = t, s = eN(n), o = eN(i);
                    if (s !== o) {
                        if (eT(s) && eT(o))
                            for (let e = 0; e < t.length; e++) {
                                let r = t[e];
                                "string" == typeof r && (t[e] = parseFloat(r))
                            } else this.needsMeasurement = !0
                    }
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e
                    } = this, r = [];
                    for (let e = 0; e < t.length; e++) {
                        var n;
                        ("number" == typeof(n = t[e]) ? 0 === n : null === n || "none" === n || "0" === n || ey(n)) && r.push(e)
                    }
                    r.length && function(t, e, r) {
                        let n, i = 0;
                        for (; i < t.length && !n;) {
                            let e = t[i];
                            "string" == typeof e && !e8.has(e) && eW(e).values.length && (n = t[i]), i++
                        }
                        if (n && r)
                            for (let i of e) t[i] = e6(r, n)
                    }(t, r, e)
                }
                measureInitialState() {
                    let {
                        element: t,
                        unresolvedKeyframes: e,
                        name: r
                    } = this;
                    if (!t.current) return;
                    "height" === r && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = eP[r](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                    let n = e[e.length - 1];
                    void 0 !== n && t.getValue(r, n).jump(n, !1)
                }
                measureEndState() {
                    var t;
                    let {
                        element: e,
                        name: r,
                        unresolvedKeyframes: n
                    } = this;
                    if (!e.current) return;
                    let i = e.getValue(r);
                    i && i.jump(this.measuredOrigin, !1);
                    let s = n.length - 1,
                        o = n[s];
                    n[s] = eP[r](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach(([t, r]) => {
                        e.getValue(t).set(r)
                    }), this.resolveNoneKeyframes()
                }
            }
            let e9 = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (eJ.test(t) || "0" === t) && !t.startsWith("url("));
            class e7 {
                constructor({
                    autoplay: t = !0,
                    delay: e = 0,
                    type: r = "keyframes",
                    repeat: n = 0,
                    repeatDelay: i = 0,
                    repeatType: s = "loop",
                    ...o
                }) {
                    this.isStopped = !1, this.hasAttemptedResolve = !1, this.options = {
                        autoplay: t,
                        delay: e,
                        type: r,
                        repeat: n,
                        repeatDelay: i,
                        repeatType: s,
                        ...o
                    }, this.updateFinishedPromise()
                }
                get resolved() {
                    return this._resolved || this.hasAttemptedResolve || (ek(), eM()), this._resolved
                }
                onKeyframesResolved(t, e) {
                    this.hasAttemptedResolve = !0;
                    let {
                        name: r,
                        type: n,
                        velocity: i,
                        delay: s,
                        onComplete: o,
                        onUpdate: a,
                        isGenerator: u
                    } = this.options;
                    if (!u && ! function(t, e, r, n) {
                            let i = t[0];
                            if (null === i) return !1;
                            if ("display" === e || "visibility" === e) return !0;
                            let s = t[t.length - 1],
                                o = e9(i, e),
                                a = e9(s, e);
                            return (0, ev.K)(o === a, `You are trying to animate ${e} from "${i}" to "${s}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${s} via the \`style\` property.`), !!o && !!a && (function(t) {
                                let e = t[0];
                                if (1 === t.length) return !0;
                                for (let r = 0; r < t.length; r++)
                                    if (t[r] !== e) return !0
                            }(t) || "spring" === r && n)
                        }(t, r, n, i)) {
                        if (ef.current || !s) {
                            null == a || a(ep(t, this.options, e)), null == o || o(), this.resolveFinishedPromise();
                            return
                        }
                        this.options.duration = 0
                    }
                    let l = this.initPlayback(t, e);
                    !1 !== l && (this._resolved = {
                        keyframes: t,
                        finalKeyframe: e,
                        ...l
                    }, this.onPostResolved())
                }
                onPostResolved() {}
                then(t, e) {
                    return this.currentFinishedPromise.then(t, e)
                }
                updateFinishedPromise() {
                    this.currentFinishedPromise = new Promise(t => {
                        this.resolveFinishedPromise = t
                    })
                }
            }

            function rt(t, e, r) {
                var n, i;
                let s = Math.max(e - 5, 0);
                return n = r - t(s), (i = e - s) ? 1e3 / i * n : 0
            }

            function re(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let rr = ["duration", "bounce"],
                rn = ["stiffness", "damping", "mass"];

            function ri(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function rs({
                keyframes: t,
                restDelta: e,
                restSpeed: r,
                ...n
            }) {
                let i;
                let s = t[0],
                    o = t[t.length - 1],
                    a = {
                        done: !1,
                        value: s
                    },
                    {
                        stiffness: u,
                        damping: l,
                        mass: c,
                        duration: h,
                        velocity: f,
                        isResolvedFromDuration: d
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!ri(t, rn) && ri(t, rr)) {
                            let r = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: r = 0,
                                mass: n = 1
                            }) {
                                let i, s;
                                (0, ev.K)(t <= en(10), "Spring duration must be 10 seconds or less");
                                let o = 1 - e;
                                o = $(.05, 1, o), t = $(.01, 10, ei(t)), o < 1 ? (i = e => {
                                    let n = e * o,
                                        i = n * t;
                                    return .001 - (n - r) / re(e, o) * Math.exp(-i)
                                }, s = e => {
                                    let n = e * o * t,
                                        s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                                        a = re(Math.pow(e, 2), o);
                                    return (n * r + r - s) * Math.exp(-n) * (-i(e) + .001 > 0 ? -1 : 1) / a
                                }) : (i = e => -.001 + Math.exp(-e * t) * ((e - r) * t + 1), s = e => t * t * (r - e) * Math.exp(-e * t));
                                let a = function(t, e, r) {
                                    let n = r;
                                    for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                                    return n
                                }(i, s, 5 / t);
                                if (t = en(t), isNaN(a)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                }; {
                                    let e = Math.pow(a, 2) * n;
                                    return {
                                        stiffness: e,
                                        damping: 2 * o * Math.sqrt(n * e),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = { ...e,
                                ...r,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return e
                    }({ ...n,
                        velocity: -ei(n.velocity || 0)
                    }),
                    p = f || 0,
                    m = l / (2 * Math.sqrt(u * c)),
                    g = o - s,
                    y = ei(Math.sqrt(u / c)),
                    v = 5 > Math.abs(g);
                if (r || (r = v ? .01 : 2), e || (e = v ? .005 : .5), m < 1) {
                    let t = re(y, m);
                    i = e => o - Math.exp(-m * y * e) * ((p + m * y * g) / t * Math.sin(t * e) + g * Math.cos(t * e))
                } else if (1 === m) i = t => o - Math.exp(-y * t) * (g + (p + y * g) * t);
                else {
                    let t = y * Math.sqrt(m * m - 1);
                    i = e => {
                        let r = Math.exp(-m * y * e),
                            n = Math.min(t * e, 300);
                        return o - r * ((p + m * y * g) * Math.sinh(n) + t * g * Math.cosh(n)) / t
                    }
                }
                return {
                    calculatedDuration: d && h || null,
                    next: t => {
                        let n = i(t);
                        if (d) a.done = t >= h;
                        else {
                            let s = p;
                            0 !== t && (s = m < 1 ? rt(i, t, n) : 0);
                            let u = Math.abs(s) <= r,
                                l = Math.abs(o - n) <= e;
                            a.done = u && l
                        }
                        return a.value = a.done ? o : n, a
                    }
                }
            }

            function ro({
                keyframes: t,
                velocity: e = 0,
                power: r = .8,
                timeConstant: n = 325,
                bounceDamping: i = 10,
                bounceStiffness: s = 500,
                modifyTarget: o,
                min: a,
                max: u,
                restDelta: l = .5,
                restSpeed: c
            }) {
                let h, f;
                let d = t[0],
                    p = {
                        done: !1,
                        value: d
                    },
                    m = t => void 0 !== a && t < a || void 0 !== u && t > u,
                    g = t => void 0 === a ? u : void 0 === u ? a : Math.abs(a - t) < Math.abs(u - t) ? a : u,
                    y = r * e,
                    v = d + y,
                    b = void 0 === o ? v : o(v);
                b !== v && (y = b - d);
                let w = t => -y * Math.exp(-t / n),
                    E = t => b + w(t),
                    T = t => {
                        let e = w(t),
                            r = E(t);
                        p.done = Math.abs(e) <= l, p.value = p.done ? b : r
                    },
                    D = t => {
                        m(p.value) && (h = t, f = rs({
                            keyframes: [p.value, g(p.value)],
                            velocity: rt(E, t, p.value),
                            damping: i,
                            stiffness: s,
                            restDelta: l,
                            restSpeed: c
                        }))
                    };
                return D(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (f || void 0 !== h || (e = !0, T(t), D(t)), void 0 !== h && t >= h) ? f.next(t - h) : (e || T(t), p)
                    }
                }
            }
            let ra = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;

            function ru(t, e, r, n) {
                if (t === e && r === n) return t2.Z;
                let i = e => (function(t, e, r, n, i) {
                    let s, o;
                    let a = 0;
                    do(s = ra(o = e + (r - e) / 2, n, i) - t) > 0 ? r = o : e = o; while (Math.abs(s) > 1e-7 && ++a < 12);
                    return o
                })(e, 0, 1, t, r);
                return t => 0 === t || 1 === t ? t : ra(i(t), e, n)
            }
            let rl = ru(.42, 0, 1, 1),
                rc = ru(0, 0, .58, 1),
                rh = ru(.42, 0, .58, 1),
                rf = t => Array.isArray(t) && "number" != typeof t[0],
                rd = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                rp = t => e => 1 - t(1 - e),
                rm = t => 1 - Math.sin(Math.acos(t)),
                rg = rp(rm),
                ry = rd(rm),
                rv = ru(.33, 1.53, .69, .99),
                rb = rp(rv),
                rw = rd(rb),
                rE = {
                    linear: t2.Z,
                    easeIn: rl,
                    easeInOut: rh,
                    easeOut: rc,
                    circIn: rm,
                    circInOut: ry,
                    circOut: rg,
                    backIn: rb,
                    backInOut: rw,
                    backOut: rv,
                    anticipate: t => (t *= 2) < 1 ? .5 * rb(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                },
                rT = t => {
                    if (Array.isArray(t)) {
                        (0, ev.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, r, n, i] = t;
                        return ru(e, r, n, i)
                    }
                    return "string" == typeof t ? ((0, ev.k)(void 0 !== rE[t], `Invalid easing type '${t}'`), rE[t]) : t
                },
                rD = (t, e, r) => {
                    let n = e - t;
                    return 0 === n ? 1 : (r - t) / n
                },
                rx = (t, e, r) => t + (e - t) * r;

            function rS(t, e, r) {
                return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? t + (e - t) * 6 * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }
            let rA = (t, e, r) => {
                    let n = t * t,
                        i = r * (e * e - n) + n;
                    return i < 0 ? 0 : Math.sqrt(i)
                },
                rP = [eF, eq, eG],
                rR = t => rP.find(e => e.test(t));

            function rC(t) {
                let e = rR(t);
                (0, ev.k)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
                let r = e.parse(t);
                return e === eG && (r = function({
                    hue: t,
                    saturation: e,
                    lightness: r,
                    alpha: n
                }) {
                    t /= 360, r /= 100;
                    let i = 0,
                        s = 0,
                        o = 0;
                    if (e /= 100) {
                        let n = r < .5 ? r * (1 + e) : r + e - r * e,
                            a = 2 * r - n;
                        i = rS(a, n, t + 1 / 3), s = rS(a, n, t), o = rS(a, n, t - 1 / 3)
                    } else i = s = o = r;
                    return {
                        red: Math.round(255 * i),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * o),
                        alpha: n
                    }
                }(r)), r
            }
            let rN = (t, e) => {
                    let r = rC(t),
                        n = rC(e),
                        i = { ...r
                        };
                    return t => (i.red = rA(r.red, n.red, t), i.green = rA(r.green, n.green, t), i.blue = rA(r.blue, n.blue, t), i.alpha = rx(r.alpha, n.alpha, t), eq.transform(i))
                },
                rO = new Set(["none", "hidden"]);

            function rI(t, e) {
                return r => r > 0 ? e : t
            }

            function rL(t, e) {
                return r => rx(t, e, r)
            }

            function rM(t) {
                return "number" == typeof t ? rL : "string" == typeof t ? X(t) ? rI : eX.test(t) ? rN : rB : Array.isArray(t) ? rk : "object" == typeof t ? eX.test(t) ? rN : rU : rI
            }

            function rk(t, e) {
                let r = [...t],
                    n = r.length,
                    i = t.map((t, r) => rM(t)(t, e[r]));
                return t => {
                    for (let e = 0; e < n; e++) r[e] = i[e](t);
                    return r
                }
            }

            function rU(t, e) {
                let r = { ...t,
                        ...e
                    },
                    n = {};
                for (let i in r) void 0 !== t[i] && void 0 !== e[i] && (n[i] = rM(t[i])(t[i], e[i]));
                return t => {
                    for (let e in n) r[e] = n[e](t);
                    return r
                }
            }
            let rB = (t, e) => {
                let r = eJ.createTransformer(e),
                    n = eW(t),
                    i = eW(e);
                return n.indexes.var.length === i.indexes.var.length && n.indexes.color.length === i.indexes.color.length && n.indexes.number.length >= i.indexes.number.length ? rO.has(t) && !i.values.length || rO.has(e) && !n.values.length ? rO.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t : tz(rk(function(t, e) {
                    var r;
                    let n = [],
                        i = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let s = 0; s < e.values.length; s++) {
                        let o = e.types[s],
                            a = t.indexes[o][i[o]],
                            u = null !== (r = t.values[a]) && void 0 !== r ? r : 0;
                        n[s] = u, i[o]++
                    }
                    return n
                }(n, i), i.values), r) : ((0, ev.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), rI(t, e))
            };

            function rV(t, e, r) {
                return "number" == typeof t && "number" == typeof e && "number" == typeof r ? rx(t, e, r) : rM(t)(t, e)
            }

            function rj({
                duration: t = 300,
                keyframes: e,
                times: r,
                ease: n = "easeInOut"
            }) {
                let i = rf(n) ? n.map(rT) : rT(n),
                    s = {
                        done: !1,
                        value: e[0]
                    },
                    o = function(t, e, {
                        clamp: r = !0,
                        ease: n,
                        mixer: i
                    } = {}) {
                        let s = t.length;
                        if ((0, ev.k)(s === e.length, "Both input and output ranges must be the same length"), 1 === s) return () => e[0];
                        if (2 === s && t[0] === t[1]) return () => e[1];
                        t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
                        let o = function(t, e, r) {
                                let n = [],
                                    i = r || rV,
                                    s = t.length - 1;
                                for (let r = 0; r < s; r++) {
                                    let s = i(t[r], t[r + 1]);
                                    e && (s = tz(Array.isArray(e) ? e[r] || t2.Z : e, s)), n.push(s)
                                }
                                return n
                            }(e, n, i),
                            a = o.length,
                            u = e => {
                                let r = 0;
                                if (a > 1)
                                    for (; r < t.length - 2 && !(e < t[r + 1]); r++);
                                let n = rD(t[r], t[r + 1], e);
                                return o[r](n)
                            };
                        return r ? e => u($(t[0], t[s - 1], e)) : u
                    }((r && r.length === e.length ? r : function(t) {
                        let e = [0];
                        return function(t, e) {
                            let r = t[t.length - 1];
                            for (let n = 1; n <= e; n++) {
                                let i = rD(0, e, n);
                                t.push(rx(r, 1, i))
                            }
                        }(e, t.length - 1), e
                    }(e)).map(e => e * t), e, {
                        ease: Array.isArray(i) ? i : e.map(() => i || rh).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (s.value = o(e), s.done = e >= t, s)
                }
            }
            let r_ = t => {
                    let e = ({
                        timestamp: e
                    }) => t(e);
                    return {
                        start: () => tU.Wi.update(e, !0),
                        stop: () => (0, tU.Pn)(e),
                        now: () => tU.frameData.isProcessing ? tU.frameData.timestamp : eg.now()
                    }
                },
                rq = {
                    decay: ro,
                    inertia: ro,
                    tween: rj,
                    keyframes: rj,
                    spring: rs
                },
                rF = t => t / 100;
            class rG extends e7 {
                constructor({
                    KeyframeResolver: t = eU,
                    ...e
                }) {
                    super(e), this.holdTime = null, this.startTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.state = "idle", this.stop = () => {
                        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                        this.teardown();
                        let {
                            onStop: t
                        } = this.options;
                        t && t()
                    };
                    let {
                        name: r,
                        motionValue: n,
                        keyframes: i
                    } = this.options, s = (t, e) => this.onKeyframesResolved(t, e);
                    r && n && n.owner ? this.resolver = n.owner.resolveKeyframes(i, s, r, n) : this.resolver = new t(i, s, r, n), this.resolver.scheduleResolve()
                }
                initPlayback(t) {
                    let e, r;
                    let {
                        type: n = "keyframes",
                        repeat: i = 0,
                        repeatDelay: s = 0,
                        repeatType: o,
                        velocity: a = 0
                    } = this.options, u = rq[n] || rj;
                    u !== rj && "number" != typeof t[0] && (e = tz(rF, rV(t[0], t[1])), t = [0, 100]);
                    let l = u({ ...this.options,
                        keyframes: t
                    });
                    "mirror" === o && (r = u({ ...this.options,
                        keyframes: [...t].reverse(),
                        velocity: -a
                    })), null === l.calculatedDuration && (l.calculatedDuration = function(t) {
                        let e = 0,
                            r = t.next(e);
                        for (; !r.done && e < 2e4;) e += 50, r = t.next(e);
                        return e >= 2e4 ? 1 / 0 : e
                    }(l));
                    let {
                        calculatedDuration: c
                    } = l, h = c + s;
                    return {
                        generator: l,
                        mirroredGenerator: r,
                        mapPercentToKeyframes: e,
                        calculatedDuration: c,
                        resolvedDuration: h,
                        totalDuration: h * (i + 1) - s
                    }
                }
                onPostResolved() {
                    let {
                        autoplay: t = !0
                    } = this.options;
                    this.play(), "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
                }
                tick(t, e = !1) {
                    let {
                        resolved: r
                    } = this;
                    if (!r) {
                        let {
                            keyframes: t
                        } = this.options;
                        return {
                            done: !0,
                            value: t[t.length - 1]
                        }
                    }
                    let {
                        finalKeyframe: n,
                        generator: i,
                        mirroredGenerator: s,
                        mapPercentToKeyframes: o,
                        keyframes: a,
                        calculatedDuration: u,
                        totalDuration: l,
                        resolvedDuration: c
                    } = r;
                    if (null === this.startTime) return i.next(0);
                    let {
                        delay: h,
                        repeat: f,
                        repeatType: d,
                        repeatDelay: p,
                        onUpdate: m
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - l / this.speed, this.startTime)), e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                    let g = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
                        y = this.speed >= 0 ? g < 0 : g > l;
                    this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = l);
                    let v = this.currentTime,
                        b = i;
                    if (f) {
                        let t = Math.min(this.currentTime, l) / c,
                            e = Math.floor(t),
                            r = t % 1;
                        !r && t >= 1 && (r = 1), 1 === r && e--, (e = Math.min(e, f + 1)) % 2 && ("reverse" === d ? (r = 1 - r, p && (r -= p / c)) : "mirror" === d && (b = s)), v = $(0, 1, r) * c
                    }
                    let w = y ? {
                        done: !1,
                        value: a[0]
                    } : b.next(v);
                    o && (w.value = o(w.value));
                    let {
                        done: E
                    } = w;
                    y || null === u || (E = this.speed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
                    let T = null === this.holdTime && ("finished" === this.state || "running" === this.state && E);
                    return T && void 0 !== n && (w.value = ep(a, this.options, n)), m && m(w.value), T && this.finish(), w
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    return t ? ei(t.calculatedDuration) : 0
                }
                get time() {
                    return ei(this.currentTime)
                }
                set time(t) {
                    t = en(t), this.currentTime = t, null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(t) {
                    let e = this.playbackSpeed !== t;
                    this.playbackSpeed = t, e && (this.time = ei(this.currentTime))
                }
                play() {
                    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
                        this.pendingPlayState = "running";
                        return
                    }
                    if (this.isStopped) return;
                    let {
                        driver: t = r_,
                        onPlay: e
                    } = this.options;
                    this.driver || (this.driver = t(t => this.tick(t))), e && e();
                    let r = this.driver.now();
                    null !== this.holdTime ? this.startTime = r - this.holdTime : this.startTime && "finished" !== this.state || (this.startTime = r), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    var t;
                    if (!this._resolved) {
                        this.pendingPlayState = "paused";
                        return
                    }
                    this.state = "paused", this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
                }
                complete() {
                    "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.teardown(), this.state = "finished";
                    let {
                        onComplete: t
                    } = this.options;
                    t && t()
                }
                cancel() {
                    null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(t) {
                    return this.startTime = 0, this.tick(t, !0)
                }
            }
            let rX = t => Array.isArray(t) && "number" == typeof t[0],
                rz = ([t, e, r, n]) => `cubic-bezier(${t}, ${e}, ${r}, ${n})`,
                rH = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: rz([0, .65, .55, 1]),
                    circOut: rz([.55, 0, 1, .45]),
                    backIn: rz([.31, .01, .66, -.59]),
                    backOut: rz([.33, 1.53, .69, .99])
                };

            function r$(t) {
                return rW(t) || rH.easeOut
            }

            function rW(t) {
                if (t) return rX(t) ? rz(t) : Array.isArray(t) ? t.map(r$) : rH[t]
            }
            let rK = (o = () => Object.hasOwnProperty.call(Element.prototype, "animate"), () => (void 0 === i && (i = o()), i)),
                rY = new Set(["opacity", "clipPath", "filter", "transform"]);
            class rZ extends e7 {
                constructor(t) {
                    super(t);
                    let {
                        name: e,
                        motionValue: r,
                        keyframes: n
                    } = this.options;
                    this.resolver = new e4(n, (t, e) => this.onKeyframesResolved(t, e), e, r), this.resolver.scheduleResolve()
                }
                initPlayback(t, e) {
                    var r, n;
                    let {
                        duration: i = 300,
                        times: s,
                        ease: o,
                        type: a,
                        motionValue: u,
                        name: l
                    } = this.options;
                    if (!(null === (r = u.owner) || void 0 === r ? void 0 : r.current)) return !1;
                    if ("spring" === (n = this.options).type || "backgroundColor" === n.name || ! function t(e) {
                            return !!(!e || "string" == typeof e && e in rH || rX(e) || Array.isArray(e) && e.every(t))
                        }(n.ease)) {
                        let {
                            onComplete: e,
                            onUpdate: r,
                            motionValue: n,
                            ...u
                        } = this.options, l = function(t, e) {
                            let r = new rG({ ...e,
                                    keyframes: t,
                                    repeat: 0,
                                    delay: 0,
                                    isGenerator: !0
                                }),
                                n = {
                                    done: !1,
                                    value: t[0]
                                },
                                i = [],
                                s = 0;
                            for (; !n.done && s < 2e4;) i.push((n = r.sample(s)).value), s += 10;
                            return {
                                times: void 0,
                                keyframes: i,
                                duration: s - 10,
                                ease: "linear"
                            }
                        }(t, u);
                        1 === (t = l.keyframes).length && (t[1] = t[0]), i = l.duration, s = l.times, o = l.ease, a = "keyframes"
                    }
                    let c = function(t, e, r, {
                        delay: n = 0,
                        duration: i = 300,
                        repeat: s = 0,
                        repeatType: o = "loop",
                        ease: a,
                        times: u
                    } = {}) {
                        let l = {
                            [e]: r
                        };
                        u && (l.offset = u);
                        let c = rW(a);
                        return Array.isArray(c) && (l.easing = c), t.animate(l, {
                            delay: n,
                            duration: i,
                            easing: Array.isArray(c) ? "linear" : c,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === o ? "alternate" : "normal"
                        })
                    }(u.owner.current, l, t, { ...this.options,
                        duration: i,
                        times: s,
                        ease: o
                    });
                    return c.startTime = eg.now(), this.pendingTimeline ? (c.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : c.onfinish = () => {
                        let {
                            onComplete: r
                        } = this.options;
                        u.set(ep(t, this.options, e)), r && r(), this.cancel(), this.resolveFinishedPromise()
                    }, {
                        animation: c,
                        duration: i,
                        times: s,
                        type: a,
                        ease: o,
                        keyframes: t
                    }
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        duration: e
                    } = t;
                    return ei(e)
                }
                get time() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        animation: e
                    } = t;
                    return ei(e.currentTime || 0)
                }
                set time(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: r
                    } = e;
                    r.currentTime = en(t)
                }
                get speed() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 1;
                    let {
                        animation: e
                    } = t;
                    return e.playbackRate
                }
                set speed(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: r
                    } = e;
                    r.playbackRate = t
                }
                get state() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return "idle";
                    let {
                        animation: e
                    } = t;
                    return e.playState
                }
                attachTimeline(t) {
                    if (this._resolved) {
                        let {
                            resolved: e
                        } = this;
                        if (!e) return t2.Z;
                        let {
                            animation: r
                        } = e;
                        r.timeline = t, r.onfinish = null
                    } else this.pendingTimeline = t;
                    return t2.Z
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    "finished" === e.playState && this.updateFinishedPromise(), e.play()
                }
                pause() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    e.pause()
                }
                stop() {
                    if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e,
                        keyframes: r,
                        duration: n,
                        type: i,
                        ease: s,
                        times: o
                    } = t;
                    if ("idle" !== e.playState && "finished" !== e.playState) {
                        if (this.time) {
                            let {
                                motionValue: t,
                                onUpdate: e,
                                onComplete: a,
                                ...u
                            } = this.options, l = new rG({ ...u,
                                keyframes: r,
                                duration: n,
                                type: i,
                                ease: s,
                                times: o,
                                isGenerator: !0
                            }), c = en(this.time);
                            t.setWithVelocity(l.sample(c - 10).value, l.sample(c).value, 10)
                        }
                        this.cancel()
                    }
                }
                complete() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.finish()
                }
                cancel() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.cancel()
                }
                static supports(t) {
                    let {
                        motionValue: e,
                        name: r,
                        repeatDelay: n,
                        repeatType: i,
                        damping: s,
                        type: o
                    } = t;
                    return rK() && r && rY.has(r) && e && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate && !n && "mirror" !== i && 0 !== s && "inertia" !== o
                }
            }
            let rJ = (t, e, r, n = {}, i, s) => o => {
                let a = ec(n, t) || {},
                    u = a.delay || n.delay || 0,
                    {
                        elapsed: l = 0
                    } = n;
                l -= en(u);
                let c = {
                    keyframes: Array.isArray(r) ? r : [null, r],
                    ease: "easeOut",
                    velocity: e.getVelocity(),
                    ...a,
                    delay: -l,
                    onUpdate: t => {
                        e.set(t), a.onUpdate && a.onUpdate(t)
                    },
                    onComplete: () => {
                        o(), a.onComplete && a.onComplete()
                    },
                    name: t,
                    motionValue: e,
                    element: s ? void 0 : i
                };
                ! function({
                    when: t,
                    delay: e,
                    delayChildren: r,
                    staggerChildren: n,
                    staggerDirection: i,
                    repeat: s,
                    repeatType: o,
                    repeatDelay: a,
                    from: u,
                    elapsed: l,
                    ...c
                }) {
                    return !!Object.keys(c).length
                }(a) && (c = { ...c,
                    ...el(t, c)
                }), c.duration && (c.duration = en(c.duration)), c.repeatDelay && (c.repeatDelay = en(c.repeatDelay)), void 0 !== c.from && (c.keyframes[0] = c.from);
                let h = !1;
                if (!1 !== c.type && (0 !== c.duration || c.repeatDelay) || (c.duration = 0, 0 !== c.delay || (h = !0)), (ef.current || eh.c.skipAnimations) && (h = !0, c.duration = 0, c.delay = 0), h && !s && void 0 !== e.get()) {
                    let t = ep(c.keyframes, a);
                    if (void 0 !== t) {
                        tU.Wi.update(() => {
                            c.onUpdate(t), c.onComplete()
                        });
                        return
                    }
                }
                return !s && rZ.supports(c) ? new rZ(c) : new rG(c)
            };

            function rQ(t) {
                return !!(V(t) && t.add)
            }

            function r0(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function r1(t, e) {
                let r = t.indexOf(e);
                r > -1 && t.splice(r, 1)
            }
            class r2 {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return r0(this.subscriptions, t), () => r1(this.subscriptions, t)
                }
                notify(t, e, r) {
                    let n = this.subscriptions.length;
                    if (n) {
                        if (1 === n) this.subscriptions[0](t, e, r);
                        else
                            for (let i = 0; i < n; i++) {
                                let n = this.subscriptions[i];
                                n && n(t, e, r)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            let r3 = t => !isNaN(parseFloat(t)),
                r5 = {
                    current: void 0
                };
            class r6 {
                constructor(t, e = {}) {
                    this.version = "11.2.2", this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        let r = eg.now();
                        this.updatedAt !== r && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.hasAnimated = !1, this.setCurrent(t), this.canTrackVelocity = r3(this.current), this.owner = e.owner
                }
                setCurrent(t) {
                    this.current = t, this.updatedAt = eg.now()
                }
                setPrevFrameValue(t = this.current) {
                    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new r2);
                    let r = this.events[t].add(e);
                    return "change" === t ? () => {
                        r(), tU.Wi.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : r
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, r) {
                    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
                }
                jump(t, e = !0) {
                    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return r5.current && r5.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    var t;
                    let e = eg.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
                    let r = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return t = parseFloat(this.current) - parseFloat(this.prevFrameValue), r ? 1e3 / r * t : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function r8(t, e) {
                return new r6(t, e)
            }

            function r4(t, e, {
                delay: r = 0,
                transitionOverride: n,
                type: i
            } = {}) {
                var s;
                let {
                    transition: o = t.getDefaultTransition(),
                    transitionEnd: a,
                    ...u
                } = e, l = t.getValue("willChange");
                n && (o = n);
                let c = [],
                    h = i && t.animationState && t.animationState.getState()[i];
                for (let e in u) {
                    let n = t.getValue(e, null !== (s = t.latestValues[e]) && void 0 !== s ? s : null),
                        i = u[e];
                    if (void 0 === i || h && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, r) {
                            let n = t.hasOwnProperty(r) && !0 !== e[r];
                            return e[r] = !1, n
                        }(h, e)) continue;
                    let a = {
                            delay: r,
                            elapsed: 0,
                            ...ec(o || {}, e)
                        },
                        f = !1;
                    if (window.HandoffAppearAnimations) {
                        let r = t.getProps()[m];
                        if (r) {
                            let t = window.HandoffAppearAnimations(r, e, n, tU.Wi);
                            null !== t && (a.elapsed = t, f = !0)
                        }
                    }
                    n.start(rJ(e, n, i, t.shouldReduceMotion && U.has(e) ? {
                        type: !1
                    } : a, t, f));
                    let d = n.animation;
                    d && (rQ(l) && (l.add(e), d.then(() => l.remove(e))), c.push(d))
                }
                return a && Promise.all(c).then(() => {
                    tU.Wi.update(() => {
                        a && function(t, e) {
                            let {
                                transitionEnd: r = {},
                                transition: n = {},
                                ...i
                            } = er(t, e) || {};
                            for (let e in i = { ...i,
                                    ...r
                                }) {
                                let r = tL(i[e]);
                                t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, r8(r))
                            }
                        }(t, a)
                    })
                }), c
            }

            function r9(t, e, r = {}) {
                var n;
                let i = er(t, e, "exit" === r.type ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0),
                    {
                        transition: s = t.getDefaultTransition() || {}
                    } = i || {};
                r.transitionOverride && (s = r.transitionOverride);
                let o = i ? () => Promise.all(r4(t, i, r)) : () => Promise.resolve(),
                    a = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: i = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = s;
                        return function(t, e, r = 0, n = 0, i = 1, s) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * n,
                                u = 1 === i ? (t = 0) => t * n : (t = 0) => a - t * n;
                            return Array.from(t.variantChildren).sort(r7).forEach((t, n) => {
                                t.notify("AnimationStart", e), o.push(r9(t, e, { ...s,
                                    delay: r + u(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, i + n, o, a, r)
                    } : () => Promise.resolve(),
                    {
                        when: u
                    } = s;
                if (!u) return Promise.all([o(), a(r.delay)]); {
                    let [t, e] = "beforeChildren" === u ? [o, a] : [a, o];
                    return t().then(() => e())
                }
            }

            function r7(t, e) {
                return t.sortNodePosition(e)
            }
            let nt = [...E].reverse(),
                ne = E.length;

            function nr(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            class nn extends tZ {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: r
                            }) => (function(t, e, r = {}) {
                                let n;
                                if (t.notify("AnimationStart", e), Array.isArray(e)) n = Promise.all(e.map(e => r9(t, e, r)));
                                else if ("string" == typeof e) n = r9(t, e, r);
                                else {
                                    let i = "function" == typeof e ? er(t, e, r.custom) : e;
                                    n = Promise.all(r4(t, i, r))
                                }
                                return n.then(() => {
                                    tU.Wi.postRender(() => {
                                        t.notify("AnimationComplete", e)
                                    })
                                })
                            })(t, e, r))),
                            r = {
                                animate: nr(!0),
                                whileInView: nr(),
                                whileHover: nr(),
                                whileTap: nr(),
                                whileDrag: nr(),
                                whileFocus: nr(),
                                exit: nr()
                            },
                            n = !0,
                            i = e => (r, n) => {
                                var i;
                                let s = er(t, n, "exit" === e ? null === (i = t.presenceContext) || void 0 === i ? void 0 : i.custom : void 0);
                                if (s) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...n
                                    } = s;
                                    r = { ...r,
                                        ...n,
                                        ...e
                                    }
                                }
                                return r
                            };

                        function s(s) {
                            let o = t.getProps(),
                                a = t.getVariantContext(!0) || {},
                                u = [],
                                l = new Set,
                                c = {},
                                h = 1 / 0;
                            for (let e = 0; e < ne; e++) {
                                var f;
                                let d = nt[e],
                                    p = r[d],
                                    m = void 0 !== o[d] ? o[d] : a[d],
                                    g = b(m),
                                    y = d === s ? p.isActive : null;
                                !1 === y && (h = e);
                                let v = m === a[d] && m !== o[d] && g;
                                if (v && n && t.manuallyAnimateOnMount && (v = !1), p.protectedKeys = { ...c
                                    }, !p.isActive && null === y || !m && !p.prevProp || w(m) || "boolean" == typeof m) continue;
                                let E = (f = p.prevProp, ("string" == typeof m ? m !== f : !!Array.isArray(m) && !ee(m, f)) || d === s && p.isActive && !v && g || e > h && g),
                                    T = !1,
                                    D = Array.isArray(m) ? m : [m],
                                    x = D.reduce(i(d), {});
                                !1 === y && (x = {});
                                let {
                                    prevResolvedValues: S = {}
                                } = p, A = { ...S,
                                    ...x
                                }, P = e => {
                                    E = !0, l.has(e) && (T = !0, l.delete(e)), p.needsAnimating[e] = !0;
                                    let r = t.getValue(e);
                                    r && (r.liveStyle = !1)
                                };
                                for (let t in A) {
                                    let e = x[t],
                                        r = S[t];
                                    if (!c.hasOwnProperty(t))(tO(e) && tO(r) ? ee(e, r) : e === r) ? void 0 !== e && l.has(t) ? P(t) : p.protectedKeys[t] = !0 : null != e ? P(t) : l.add(t)
                                }
                                p.prevProp = m, p.prevResolvedValues = x, p.isActive && (c = { ...c,
                                    ...x
                                }), n && t.blockInitialAnimation && (E = !1), E && (!v || T) && u.push(...D.map(t => ({
                                    animation: t,
                                    options: {
                                        type: d
                                    }
                                })))
                            }
                            if (l.size) {
                                let e = {};
                                l.forEach(r => {
                                    let n = t.getBaseTarget(r),
                                        i = t.getValue(r);
                                    i && (i.liveStyle = !0), e[r] = null != n ? n : null
                                }), u.push({
                                    animation: e
                                })
                            }
                            let d = !!u.length;
                            return n && (!1 === o.initial || o.initial === o.animate) && !t.manuallyAnimateOnMount && (d = !1), n = !1, d ? e(u) : Promise.resolve()
                        }
                        return {
                            animateChanges: s,
                            setActive: function(e, n) {
                                var i;
                                if (r[e].isActive === n) return Promise.resolve();
                                null === (i = t.variantChildren) || void 0 === i || i.forEach(t => {
                                    var r;
                                    return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n)
                                }), r[e].isActive = n;
                                let o = s(e);
                                for (let t in r) r[t].protectedKeys = {};
                                return o
                            },
                            setAnimateFunction: function(r) {
                                e = r(t)
                            },
                            getState: () => r
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    this.unmount(), w(t) && (this.unmount = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {}
            }
            let ni = 0;
            class ns extends tZ {
                constructor() {
                    super(...arguments), this.id = ni++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: r
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === r) return;
                    let n = this.node.animationState.setActive("exit", !t);
                    e && !t && n.then(() => e(this.id))
                }
                mount() {
                    let {
                        register: t
                    } = this.node.presenceContext || {};
                    t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
            let no = (t, e) => Math.abs(t - e);
            class na {
                constructor(t, e, {
                    transformPagePoint: r,
                    contextWindow: n,
                    dragSnapToOrigin: i = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            var t, e;
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let r = nc(this.lastMoveEventInfo, this.history),
                                n = null !== this.startEvent,
                                i = (t = r.offset, e = {
                                    x: 0,
                                    y: 0
                                }, Math.sqrt(no(t.x, e.x) ** 2 + no(t.y, e.y) ** 2) >= 3);
                            if (!n && !i) return;
                            let {
                                point: s
                            } = r, {
                                timestamp: o
                            } = tU.frameData;
                            this.history.push({ ...s,
                                timestamp: o
                            });
                            let {
                                onStart: a,
                                onMove: u
                            } = this.handlers;
                            n || (a && a(this.lastMoveEvent, r), this.startEvent = this.lastMoveEvent), u && u(this.lastMoveEvent, r)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = nu(e, this.transformPagePoint), tU.Wi.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: r,
                                onSessionEnd: n,
                                resumeAnimation: i
                            } = this.handlers;
                            if (this.dragSnapToOrigin && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let s = nc("pointercancel" === t.type ? this.lastMoveEventInfo : nu(e, this.transformPagePoint), this.history);
                            this.startEvent && r && r(t, s), n && n(t, s)
                        }, !t_(t)) return;
                    this.dragSnapToOrigin = i, this.handlers = e, this.transformPagePoint = r, this.contextWindow = n || window;
                    let s = nu(tq(t), this.transformPagePoint),
                        {
                            point: o
                        } = s,
                        {
                            timestamp: a
                        } = tU.frameData;
                    this.history = [{ ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: u
                    } = e;
                    u && u(t, nc(s, this.history)), this.removeListeners = tz(tG(this.contextWindow, "pointermove", this.handlePointerMove), tG(this.contextWindow, "pointerup", this.handlePointerUp), tG(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, tU.Pn)(this.updatePoint)
                }
            }

            function nu(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function nl(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function nc({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: nl(t, nh(e)),
                    offset: nl(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let r = t.length - 1,
                            n = null,
                            i = nh(t);
                        for (; r >= 0 && (n = t[r], !(i.timestamp - n.timestamp > en(.1)));) r--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let s = ei(i.timestamp - n.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (i.x - n.x) / s,
                            y: (i.y - n.y) / s
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, 0)
                }
            }

            function nh(t) {
                return t[t.length - 1]
            }

            function nf(t) {
                return t.max - t.min
            }

            function nd(t, e = 0, r = .01) {
                return Math.abs(t - e) <= r
            }

            function np(t, e, r, n = .5) {
                t.origin = n, t.originPoint = rx(e.min, e.max, t.origin), t.scale = nf(r) / nf(e), (nd(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = rx(r.min, r.max, t.origin) - t.originPoint, (nd(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function nm(t, e, r, n) {
                np(t.x, e.x, r.x, n ? n.originX : void 0), np(t.y, e.y, r.y, n ? n.originY : void 0)
            }

            function ng(t, e, r) {
                t.min = r.min + e.min, t.max = t.min + nf(e)
            }

            function ny(t, e, r) {
                t.min = e.min - r.min, t.max = t.min + nf(e)
            }

            function nv(t, e, r) {
                ny(t.x, e.x, r.x), ny(t.y, e.y, r.y)
            }

            function nb(t, e, r) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0
                }
            }

            function nw(t, e) {
                let r = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([r, n] = [n, r]), {
                    min: r,
                    max: n
                }
            }

            function nE(t, e, r) {
                return {
                    min: nT(t, e),
                    max: nT(t, r)
                }
            }

            function nT(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let nD = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                nx = () => ({
                    x: nD(),
                    y: nD()
                }),
                nS = () => ({
                    min: 0,
                    max: 0
                }),
                nA = () => ({
                    x: nS(),
                    y: nS()
                });

            function nP(t) {
                return [t("x"), t("y")]
            }

            function nR({
                top: t,
                left: e,
                right: r,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: r
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function nC(t) {
                return void 0 === t || 1 === t
            }

            function nN({
                scale: t,
                scaleX: e,
                scaleY: r
            }) {
                return !nC(t) || !nC(e) || !nC(r)
            }

            function nO(t) {
                return nN(t) || nI(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
            }

            function nI(t) {
                var e, r;
                return (e = t.x) && "0%" !== e || (r = t.y) && "0%" !== r
            }

            function nL(t, e, r, n, i) {
                return void 0 !== i && (t = n + i * (t - n)), n + r * (t - n) + e
            }

            function nM(t, e = 0, r = 1, n, i) {
                t.min = nL(t.min, e, r, n, i), t.max = nL(t.max, e, r, n, i)
            }

            function nk(t, {
                x: e,
                y: r
            }) {
                nM(t.x, e.translate, e.scale, e.originPoint), nM(t.y, r.translate, r.scale, r.originPoint)
            }

            function nU(t) {
                return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
            }

            function nB(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function nV(t, e, [r, n, i]) {
                let s = void 0 !== e[i] ? e[i] : .5,
                    o = rx(t.min, t.max, s);
                nM(t, e[r], e[n], o, e.scale)
            }
            let nj = ["x", "scaleX", "originX"],
                n_ = ["y", "scaleY", "originY"];

            function nq(t, e) {
                nV(t.x, e, nj), nV(t.y, e, n_)
            }

            function nF(t, e) {
                return nR(function(t, e) {
                    if (!e) return t;
                    let r = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: r.y,
                        left: r.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let nG = ({
                    current: t
                }) => t ? t.ownerDocument.defaultView : null,
                nX = new WeakMap;
            class nz {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = nA(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: r
                    } = this.visualElement;
                    if (r && !1 === r.isPresent) return;
                    let {
                        dragSnapToOrigin: n
                    } = this.getProps();
                    this.panSession = new na(t, {
                        onSessionStart: t => {
                            let {
                                dragSnapToOrigin: r
                            } = this.getProps();
                            r ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(tq(t, "page").point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: r,
                                dragPropagation: n,
                                onDragStart: i
                            } = this.getProps();
                            if (r && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = tK(r), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), nP(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (ti.test(e)) {
                                    let {
                                        projection: r
                                    } = this.visualElement;
                                    if (r && r.layout) {
                                        let n = r.layout.layoutBox[t];
                                        if (n) {
                                            let t = nf(n);
                                            e = parseFloat(e) / 100 * t
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), i && tU.Wi.postRender(() => i(t, e));
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: r,
                                dragDirectionLock: n,
                                onDirectionLock: i,
                                onDrag: s
                            } = this.getProps();
                            if (!r && !this.openGlobalLock) return;
                            let {
                                offset: o
                            } = e;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let r = null;
                                    return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r
                                }(o), null !== this.currentDirection && i && i(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e),
                        resumeAnimation: () => nP(t => {
                            var e;
                            return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                        })
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: n,
                        contextWindow: nG(this.visualElement)
                    })
                }
                stop(t, e) {
                    let r = this.isDragging;
                    if (this.cancel(), !r) return;
                    let {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    let {
                        onDragEnd: i
                    } = this.getProps();
                    i && tU.Wi.postRender(() => i(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: r
                    } = this.getProps();
                    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, r) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!r || !nH(t, n, this.currentDirection)) return;
                    let i = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + r[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: r
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? rx(e, t, n.min) : Math.max(t, e) : void 0 !== r && t > r && (t = n ? rx(r, t, n.max) : Math.min(t, r)), t
                    }(s, this.constraints[t], this.elastic[t])), i.set(s)
                }
                resolveConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        dragElastic: r
                    } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, i = this.constraints;
                    e && v(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, {
                        top: e,
                        left: r,
                        bottom: n,
                        right: i
                    }) {
                        return {
                            x: nb(t.x, r, i),
                            y: nb(t.y, e, n)
                        }
                    }(n.layoutBox, e) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: nE(t, "left", "right"),
                            y: nE(t, "top", "bottom")
                        }
                    }(r), i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && nP(t => {
                        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let r = {};
                            return void 0 !== e.min && (r.min = e.min - t.min), void 0 !== e.max && (r.max = e.max - t.min), r
                        }(n.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: r
                    } = this.getProps();
                    if (!e || !v(e)) return !1;
                    let n = e.current;
                    (0, ev.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: i
                    } = this.visualElement;
                    if (!i || !i.layout) return !1;
                    let s = function(t, e, r) {
                            let n = nF(t, r),
                                {
                                    scroll: i
                                } = e;
                            return i && (nB(n.x, i.offset.x), nB(n.y, i.offset.y)), n
                        }(n, i.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: nw((t = i.layout.layoutBox).x, s.x),
                            y: nw(t.y, s.y)
                        };
                    if (r) {
                        let t = r(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!t, t && (o = nR(t))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: r,
                        dragElastic: n,
                        dragTransition: i,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(nP(o => {
                        if (!nH(o, e, this.currentDirection)) return;
                        let u = a && a[o] || {};
                        s && (u = {
                            min: 0,
                            max: 0
                        });
                        let l = {
                            type: "inertia",
                            velocity: r ? t[o] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...i,
                            ...u
                        };
                        return this.startAxisValueAnimation(o, l)
                    })).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let r = this.getAxisMotionValue(t);
                    return r.start(rJ(t, r, 0, e, this.visualElement))
                }
                stopAnimation() {
                    nP(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    nP(t => {
                        var e;
                        return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                    })
                }
                getAnimationState(t) {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
                }
                getAxisMotionValue(t) {
                    let e = `_drag${t.toUpperCase()}`,
                        r = this.visualElement.getProps();
                    return r[e] || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    nP(e => {
                        let {
                            drag: r
                        } = this.getProps();
                        if (!nH(e, r, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, i = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let {
                                min: r,
                                max: s
                            } = n.layout.layoutBox[e];
                            i.set(t[e] - rx(r, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: r
                    } = this.visualElement;
                    if (!v(e) || !r || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    nP(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e && !1 !== this.constraints) {
                            let r = e.get();
                            n[t] = function(t, e) {
                                let r = .5,
                                    n = nf(t),
                                    i = nf(e);
                                return i > n ? r = rD(e.min, e.max - n, t.min) : n > i && (r = rD(t.min, t.max - i, e.min)), $(0, 1, r)
                            }({
                                min: r,
                                max: r
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: i
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), nP(e => {
                        if (!nH(e, t, null)) return;
                        let r = this.getAxisMotionValue(e),
                            {
                                min: i,
                                max: s
                            } = this.constraints[e];
                        r.set(rx(i, s, n[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    nX.set(this.visualElement, this);
                    let t = tG(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: r = !0
                            } = this.getProps();
                            e && r && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            v(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: r
                        } = this.visualElement,
                        n = r.addEventListener("measure", e);
                    r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), e();
                    let i = tj(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = r.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (nP(e => {
                                let r = this.getAxisMotionValue(e);
                                r && (this.originPoint[e] += t[e].translate, r.set(r.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        i(), t(), n(), s && s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: r = !1,
                            dragPropagation: n = !1,
                            dragConstraints: i = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: r,
                        dragPropagation: n,
                        dragConstraints: i,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
            }

            function nH(t, e, r) {
                return (!0 === e || e === t) && (null === r || r === t)
            }
            class n$ extends tZ {
                constructor(t) {
                    super(t), this.removeGroupControls = t2.Z, this.removeListeners = t2.Z, this.controls = new nz(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || t2.Z
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let nW = t => (e, r) => {
                t && tU.Wi.postRender(() => t(e, r))
            };
            class nK extends tZ {
                constructor() {
                    super(...arguments), this.removePointerDownListener = t2.Z
                }
                onPointerDown(t) {
                    this.session = new na(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: nG(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: r,
                        onPanEnd: n
                    } = this.node.getProps();
                    return {
                        onSessionStart: nW(t),
                        onStart: nW(e),
                        onMove: r,
                        onEnd: (t, e) => {
                            delete this.session, n && tU.Wi.postRender(() => n(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = tG(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            let nY = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            };

            function nZ(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let nJ = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!ts.test(t)) return t;
                        t = parseFloat(t)
                    }
                    let r = nZ(t, e.target.x),
                        n = nZ(t, e.target.y);
                    return `${r}% ${n}%`
                }
            };
            class nQ extends u.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: r,
                        layoutId: n
                    } = this.props, {
                        projection: i
                    } = t;
                    Object.assign(M, n1), i && (e.group && e.group.add(i), r && r.register && n && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), i.setOptions({ ...i.options,
                        onExitComplete: () => this.safeToRemove()
                    })), nY.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: r,
                        drag: n,
                        isPresent: i
                    } = this.props, s = r.projection;
                    return s && (s.isPresent = i, n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === i || (i ? s.promote() : s.relegate() || tU.Wi.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), g.postRender(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: r
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), r && r.deregister && r.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function n0(t) {
                let [e, r] = function() {
                    let t = (0, u.useContext)(h.O);
                    if (null === t) return [!0, null];
                    let {
                        isPresent: e,
                        onExitComplete: r,
                        register: n
                    } = t, i = (0, u.useId)();
                    return (0, u.useEffect)(() => n(i), []), !e && r ? [!1, () => r && r(i)] : [!0]
                }(), n = (0, u.useContext)(C.p);
                return (0, a.jsx)(nQ, { ...t,
                    layoutGroup: n,
                    switchLayoutGroup: (0, u.useContext)(N),
                    isPresent: e,
                    safeToRemove: r
                })
            }
            let n1 = {
                    borderRadius: { ...nJ,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: nJ,
                    borderTopRightRadius: nJ,
                    borderBottomLeftRadius: nJ,
                    borderBottomRightRadius: nJ,
                    boxShadow: {
                        correct: (t, {
                            treeScale: e,
                            projectionDelta: r
                        }) => {
                            let n = eJ.parse(t);
                            if (n.length > 5) return t;
                            let i = eJ.createTransformer(t),
                                s = "number" != typeof n[0] ? 1 : 0,
                                o = r.x.scale * e.x,
                                a = r.y.scale * e.y;
                            n[0 + s] /= o, n[1 + s] /= a;
                            let u = rx(o, a, .5);
                            return "number" == typeof n[2 + s] && (n[2 + s] /= u), "number" == typeof n[3 + s] && (n[3 + s] /= u), i(n)
                        }
                    }
                },
                n2 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                n3 = n2.length,
                n5 = t => "string" == typeof t ? parseFloat(t) : t,
                n6 = t => "number" == typeof t || ts.test(t);

            function n8(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let n4 = n7(0, .5, rg),
                n9 = n7(.5, .95, t2.Z);

            function n7(t, e, r) {
                return n => n < t ? 0 : n > e ? 1 : r(rD(t, e, n))
            }

            function it(t, e) {
                t.min = e.min, t.max = e.max
            }

            function ie(t, e) {
                it(t.x, e.x), it(t.y, e.y)
            }

            function ir(t, e, r, n, i) {
                return t -= e, t = n + 1 / r * (t - n), void 0 !== i && (t = n + 1 / i * (t - n)), t
            }

            function ii(t, e, [r, n, i], s, o) {
                ! function(t, e = 0, r = 1, n = .5, i, s = t, o = t) {
                    if (ti.test(e) && (e = parseFloat(e), e = rx(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
                    let a = rx(s.min, s.max, n);
                    t === s && (a -= e), t.min = ir(t.min, e, r, a, i), t.max = ir(t.max, e, r, a, i)
                }(t, e[r], e[n], e[i], e.scale, s, o)
            }
            let is = ["x", "scaleX", "originX"],
                io = ["y", "scaleY", "originY"];

            function ia(t, e, r, n) {
                ii(t.x, e, is, r ? r.x : void 0, n ? n.x : void 0), ii(t.y, e, io, r ? r.y : void 0, n ? n.y : void 0)
            }

            function iu(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function il(t) {
                return iu(t.x) && iu(t.y)
            }

            function ic(t, e) {
                return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
            }

            function ih(t) {
                return nf(t.x) / nf(t.y)
            }
            class id {
                constructor() {
                    this.members = []
                }
                add(t) {
                    r0(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (r1(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let r = this.members.findIndex(e => t === e);
                    if (0 === r) return !1;
                    for (let t = r; t >= 0; t--) {
                        let r = this.members[t];
                        if (!1 !== r.isPresent) {
                            e = r;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let r = this.lead;
                    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
                        r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = t.options;
                        !1 === n && r.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: r
                        } = t;
                        e.onExitComplete && e.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function ip(t, e, r) {
                let n = "",
                    i = t.x.translate / e.x,
                    s = t.y.translate / e.y,
                    o = (null == r ? void 0 : r.z) || 0;
                if ((i || s || o) && (n = `translate3d(${i}px, ${s}px, ${o}px) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), r) {
                    let {
                        transformPerspective: t,
                        rotate: e,
                        rotateX: i,
                        rotateY: s,
                        skewX: o,
                        skewY: a
                    } = r;
                    t && (n = `perspective(${t}px) ${n}`), e && (n += `rotate(${e}deg) `), i && (n += `rotateX(${i}deg) `), s && (n += `rotateY(${s}deg) `), o && (n += `skewX(${o}deg) `), a && (n += `skewY(${a}deg) `)
                }
                let a = t.x.scale * e.x,
                    u = t.y.scale * e.y;
                return (1 !== a || 1 !== u) && (n += `scale(${a}, ${u})`), n || "none"
            }
            let im = (t, e) => t.depth - e.depth;
            class ig {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    r0(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    r1(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(im), this.isDirty = !1, this.children.forEach(t)
                }
            }
            let iy = ["", "X", "Y", "Z"],
                iv = {
                    visibility: "hidden"
                },
                ib = 0,
                iw = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function iE(t, e, r, n) {
                let {
                    latestValues: i
                } = e;
                i[t] && (r[t] = i[t], e.setStaticValue(t, 0), n && (n[t] = 0))
            }

            function iT({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: r,
                checkIsScrollRoot: n,
                resetTransform: i
            }) {
                return class {
                    constructor(t = {}, r = null == e ? void 0 : e()) {
                        this.id = ib++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, iw.totalNodes = iw.resolvedTargetDeltas = iw.recalculatedProjection = 0, this.nodes.forEach(iS), this.nodes.forEach(iI), this.nodes.forEach(iL), this.nodes.forEach(iA), window.MotionDebug && window.MotionDebug.record(iw)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new ig)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new r2), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let r = this.eventHandlers.get(t);
                        r && r.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, r = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: n,
                            layout: i,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), r && (i || n) && (this.isLayoutDirty = !0), t) {
                            let r;
                            let n = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, r && r(), r = function(t, e) {
                                    let r = eg.now(),
                                        n = ({
                                            timestamp: e
                                        }) => {
                                            let i = e - r;
                                            i >= 250 && ((0, tU.Pn)(n), t(i - 250))
                                        };
                                    return tU.Wi.read(n, !0), () => (0, tU.Pn)(n)
                                }(n, 0), nY.hasAnimatedSinceResize && (nY.hasAnimatedSinceResize = !1, this.nodes.forEach(iO))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || i) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: r,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let i = this.options.transition || s.getDefaultTransition() || ij,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = s.getProps(),
                                u = !this.targetLayout || !ic(this.targetLayout, n) || r,
                                l = !e && r;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || l || e && (u || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, l);
                                let e = { ...ec(i, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || iO(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, tU.Pn)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(iM), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: r
                        } = this.options;
                        if (void 0 === e && !r) return;
                        let n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(iR);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(iC), this.isUpdating = !1, window.HandoffCancelAllAnimations && window.HandoffCancelAllAnimations(), this.nodes.forEach(iN), this.nodes.forEach(iD), this.nodes.forEach(ix), this.clearAllSnapshots();
                        let t = eg.now();
                        tU.frameData.delta = $(0, 1e3 / 60, t - tU.frameData.timestamp), tU.frameData.timestamp = t, tU.frameData.isProcessing = !0, tU.S6.update.process(tU.frameData), tU.S6.preRender.process(tU.frameData), tU.S6.render.process(tU.frameData), tU.frameData.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, g.read(() => this.update()))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(iP), this.sharedNodes.forEach(ik)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, tU.Wi.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        tU.Wi.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = nA(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: n(this.instance),
                            offset: r(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!i) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            e = this.projectionDelta && !il(this.projectionDelta),
                            r = this.getTransformTemplate(),
                            n = r ? r(this.latestValues, "") : void 0,
                            s = n !== this.prevTransformTemplateValue;
                        t && (e || nO(this.latestValues) || s) && (i(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let r = this.measurePageBox(),
                            n = this.removeElementScroll(r);
                        return t && (n = this.removeTransform(n)), iF((e = n).x), iF(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: r,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return nA();
                        let e = t.measureViewportBox(),
                            {
                                scroll: r
                            } = this.root;
                        return r && (nB(e.x, r.offset.x), nB(e.y, r.offset.y)), e
                    }
                    removeElementScroll(t) {
                        let e = nA();
                        ie(e, t);
                        for (let r = 0; r < this.path.length; r++) {
                            let n = this.path[r],
                                {
                                    scroll: i,
                                    options: s
                                } = n;
                            if (n !== this.root && i && s.layoutScroll) {
                                if (i.isRoot) {
                                    ie(e, t);
                                    let {
                                        scroll: r
                                    } = this.root;
                                    r && (nB(e.x, -r.offset.x), nB(e.y, -r.offset.y))
                                }
                                nB(e.x, i.offset.x), nB(e.y, i.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let r = nA();
                        ie(r, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            !e && n.options.layoutScroll && n.scroll && n !== n.root && nq(r, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), nO(n.latestValues) && nq(r, n.latestValues)
                        }
                        return nO(this.latestValues) && nq(r, this.latestValues), r
                    }
                    removeTransform(t) {
                        let e = nA();
                        ie(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let r = this.path[t];
                            if (!r.instance || !nO(r.latestValues)) continue;
                            nN(r.latestValues) && r.updateSnapshot();
                            let n = nA();
                            ie(n, r.measurePageBox()), ia(e, r.latestValues, r.snapshot ? r.snapshot.layoutBox : void 0, n)
                        }
                        return nO(this.latestValues) && ia(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tU.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, r, n, i;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = !!this.resumingFrom || this !== s;
                        if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
                        let {
                            layout: a,
                            layoutId: u
                        } = this.options;
                        if (this.layout && (a || u)) {
                            if (this.resolvedRelativeTargetAt = tU.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = nA(), this.relativeTargetOrigin = nA(), nv(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), ie(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = nA(), this.targetWithTransforms = nA()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), r = this.target, n = this.relativeTarget, i = this.relativeParent.target, ng(r.x, n.x, i.x), ng(r.y, n.y, i.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ie(this.target, this.layout.layoutBox), nk(this.target, this.targetDelta)) : ie(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = nA(), this.relativeTargetOrigin = nA(), nv(this.relativeTargetOrigin, this.target, t.target), ie(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                iw.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || nN(this.parent.latestValues) || nI(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            r = !!this.resumingFrom || this !== e,
                            n = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), r && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === tU.frameData.timestamp && (n = !1), n) return;
                        let {
                            layout: i,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(i || s)) return;
                        ie(this.layoutCorrected, this.layout.layoutBox);
                        let o = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, r, n = !1) {
                            let i, s;
                            let o = r.length;
                            if (o) {
                                e.x = e.y = 1;
                                for (let a = 0; a < o; a++) {
                                    s = (i = r[a]).projectionDelta;
                                    let o = i.instance;
                                    (!o || !o.style || "contents" !== o.style.display) && (n && i.options.layoutScroll && i.scroll && i !== i.root && nq(t, {
                                        x: -i.scroll.offset.x,
                                        y: -i.scroll.offset.y
                                    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, nk(t, s)), n && nO(i.latestValues) && nq(t, i.latestValues))
                                }
                                e.x = nU(e.x), e.y = nU(e.y)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, r), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = nA());
                        let {
                            target: u
                        } = e;
                        if (!u) {
                            this.projectionTransform && (this.projectionDelta = nx(), this.projectionTransform = "none", this.scheduleRender());
                            return
                        }
                        this.projectionDelta || (this.projectionDelta = nx(), this.projectionDeltaWithTransform = nx());
                        let l = this.projectionTransform;
                        nm(this.projectionDelta, this.layoutCorrected, u, this.latestValues), this.projectionTransform = ip(this.projectionDelta, this.treeScale), (this.projectionTransform !== l || this.treeScale.x !== o || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", u)), iw.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        let r;
                        let n = this.snapshot,
                            i = n ? n.latestValues : {},
                            s = { ...this.latestValues
                            },
                            o = nx();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = nA(),
                            u = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            l = this.getStack(),
                            c = !l || l.members.length <= 1,
                            h = !!(u && !c && !0 === this.options.crossfade && !this.path.some(iV));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let n = e / 1e3;
                            if (iU(o.x, t.x, n), iU(o.y, t.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var l, f, d, p;
                                nv(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), d = this.relativeTarget, p = this.relativeTargetOrigin, iB(d.x, p.x, a.x, n), iB(d.y, p.y, a.y, n), r && (l = this.relativeTarget, f = r, l.x.min === f.x.min && l.x.max === f.x.max && l.y.min === f.y.min && l.y.max === f.y.max) && (this.isProjectionDirty = !1), r || (r = nA()), ie(r, this.relativeTarget)
                            }
                            u && (this.animationValues = s, function(t, e, r, n, i, s) {
                                i ? (t.opacity = rx(0, void 0 !== r.opacity ? r.opacity : 1, n4(n)), t.opacityExit = rx(void 0 !== e.opacity ? e.opacity : 1, 0, n9(n))) : s && (t.opacity = rx(void 0 !== e.opacity ? e.opacity : 1, void 0 !== r.opacity ? r.opacity : 1, n));
                                for (let i = 0; i < n3; i++) {
                                    let s = `border${n2[i]}Radius`,
                                        o = n8(e, s),
                                        a = n8(r, s);
                                    (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || n6(o) === n6(a) ? (t[s] = Math.max(rx(n5(o), n5(a), n), 0), (ti.test(a) || ti.test(o)) && (t[s] += "%")) : t[s] = a)
                                }(e.rotate || r.rotate) && (t.rotate = rx(e.rotate || 0, r.rotate || 0, n))
                            }(s, i, this.latestValues, n, h, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, tU.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tU.Wi.update(() => {
                            nY.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, r) {
                                let n = V(0) ? 0 : r8(0);
                                return n.start(rJ("", n, 1e3, r)), n.animation
                            }(0, 0, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: r,
                                layout: n,
                                latestValues: i
                            } = t;
                        if (e && r && n) {
                            if (this !== t && this.layout && n && iG(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                r = this.target || nA();
                                let e = nf(this.layout.layoutBox.x);
                                r.x.min = t.target.x.min, r.x.max = r.x.min + e;
                                let n = nf(this.layout.layoutBox.y);
                                r.y.min = t.target.y.min, r.y.max = r.y.min + n
                            }
                            ie(e, r), nq(e, i), nm(this.projectionDeltaWithTransform, this.layoutCorrected, e, i)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new id), this.sharedNodes.get(t).add(e);
                        let r = e.options.initialPromotionConfig;
                        e.promote({
                            transition: r ? r.transition : void 0,
                            preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: r
                    } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, r), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: r
                            } = t;
                        if ((r.z || r.rotate || r.rotateX || r.rotateY || r.rotateZ || r.skewX || r.skewY) && (e = !0), !e) return;
                        let n = {};
                        r.z && iE("z", t, n, this.animationValues);
                        for (let e = 0; e < iy.length; e++) iE(`rotate${iy[e]}`, t, n, this.animationValues), iE(`skew${iy[e]}`, t, n, this.animationValues);
                        for (let e in t.render(), n) t.setStaticValue(e, n[e]), this.animationValues && (this.animationValues[e] = n[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        var e, r;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return iv;
                        let n = {
                                visibility: ""
                            },
                            i = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = tM(null == t ? void 0 : t.pointerEvents) || "", n.transform = i ? i(this.latestValues, "") : "none", n;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = tM(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !nO(this.latestValues) && (e.transform = i ? i({}, "") : "none", this.hasProjected = !1), e
                        }
                        let o = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), n.transform = ip(this.projectionDeltaWithTransform, this.treeScale, o), i && (n.transform = i(o, n.transform));
                        let {
                            x: a,
                            y: u
                        } = this.projectionDelta;
                        for (let t in n.transformOrigin = `${100*a.origin}% ${100*u.origin}% 0`, s.animationValues ? n.opacity = s === this ? null !== (r = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== r ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, M) {
                            if (void 0 === o[t]) continue;
                            let {
                                correct: e,
                                applyTo: r
                            } = M[t], i = "none" === n.transform ? o[t] : e(o[t], s);
                            if (r) {
                                let t = r.length;
                                for (let e = 0; e < t; e++) n[r[e]] = i
                            } else n[t] = i
                        }
                        return this.options.layoutId && (n.pointerEvents = s === this ? tM(null == t ? void 0 : t.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(iR), this.root.sharedNodes.clear()
                    }
                }
            }

            function iD(t) {
                t.updateLayout()
            }

            function ix(t) {
                var e;
                let r = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: n
                    } = t.layout, {
                        animationType: i
                    } = t.options, s = r.source !== t.layout.source;
                    "size" === i ? nP(t => {
                        let n = s ? r.measuredBox[t] : r.layoutBox[t],
                            i = nf(n);
                        n.min = e[t].min, n.max = n.min + i
                    }) : iG(i, r.layoutBox, e) && nP(n => {
                        let i = s ? r.measuredBox[n] : r.layoutBox[n],
                            o = nf(e[n]);
                        i.max = i.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                    });
                    let o = nx();
                    nm(o, e, r.layoutBox);
                    let a = nx();
                    s ? nm(a, t.applyTransform(n, !0), r.measuredBox) : nm(a, e, r.layoutBox);
                    let u = !il(o),
                        l = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: i,
                                layout: s
                            } = n;
                            if (i && s) {
                                let o = nA();
                                nv(o, r.layoutBox, i.layoutBox);
                                let a = nA();
                                nv(a, e, s.layoutBox), ic(o, a) || (l = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = n)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: r,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: u,
                        hasRelativeTargetChanged: l
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function iS(t) {
                iw.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function iA(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function iP(t) {
                t.clearSnapshot()
            }

            function iR(t) {
                t.clearMeasurements()
            }

            function iC(t) {
                t.isLayoutDirty = !1
            }

            function iN(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function iO(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function iI(t) {
                t.resolveTargetDelta()
            }

            function iL(t) {
                t.calcProjection()
            }

            function iM(t) {
                t.resetSkewAndRotation()
            }

            function ik(t) {
                t.removeLeadSnapshot()
            }

            function iU(t, e, r) {
                t.translate = rx(e.translate, 0, r), t.scale = rx(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function iB(t, e, r, n) {
                t.min = rx(e.min, r.min, n), t.max = rx(e.max, r.max, n)
            }

            function iV(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let ij = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                i_ = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                iq = i_("applewebkit/") && !i_("chrome/") ? Math.round : t2.Z;

            function iF(t) {
                t.min = iq(t.min), t.max = iq(t.max)
            }

            function iG(t, e, r) {
                return "position" === t || "preserve-aspect" === t && !nd(ih(e), ih(r), .2)
            }
            let iX = iT({
                    attachResizeListener: (t, e) => tj(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                iz = {
                    current: void 0
                },
                iH = iT({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!iz.current) {
                            let t = new iX({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), iz.current = t
                        }
                        return iz.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                }),
                i$ = {
                    current: null
                },
                iW = {
                    current: !1
                },
                iK = new WeakMap,
                iY = [...eC, eX, eJ],
                iZ = t => iY.find(eR(t)),
                iJ = Object.keys(P),
                iQ = iJ.length,
                i0 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                i1 = T.length;
            class i2 {
                scrapeMotionValuesFromProps(t, e, r) {
                    return {}
                }
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: r,
                    reducedMotionConfig: n,
                    blockInitialAnimation: i,
                    visualState: s
                }, o = {}) {
                    this.resolveKeyframes = (t, e, r, n) => new this.KeyframeResolver(t, e, r, n, this), this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = eU, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => tU.Wi.render(this.render, !1, !0);
                    let {
                        latestValues: a,
                        renderState: u
                    } = s;
                    this.latestValues = a, this.baseTarget = { ...a
                    }, this.initialValues = e.initial ? { ...a
                    } : {}, this.renderState = u, this.parent = t, this.props = e, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = o, this.blockInitialAnimation = !!i, this.isControllingVariants = D(e), this.isVariantNode = x(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: l,
                        ...c
                    } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (let t in c) {
                        let e = c[t];
                        void 0 !== a[t] && V(e) && (e.set(a[t], !1), rQ(l) && l.add(t))
                    }
                }
                mount(t) {
                    this.current = t, iK.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), iW.current || function() {
                        if (iW.current = !0, R.j) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => i$.current = t.matches;
                                t.addListener(e), e()
                            } else i$.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || i$.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    var t;
                    for (let t in iK.delete(this.current), this.projection && this.projection.unmount(), (0, tU.Pn)(this.notifyUpdate), (0, tU.Pn)(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let e in this.features) null === (t = this.features[e]) || void 0 === t || t.unmount();
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let r = U.has(t),
                        n = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && tU.Wi.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        i = e.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(t, () => {
                        n(), i(), e.owner && e.stop()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                loadFeatures({
                    children: t,
                    ...e
                }, r, n, i) {
                    let s, o;
                    for (let t = 0; t < iQ; t++) {
                        let r = iJ[t],
                            {
                                isEnabled: n,
                                Feature: i,
                                ProjectionNode: a,
                                MeasureLayout: u
                            } = P[r];
                        a && (s = a), n(e) && (!this.features[r] && i && (this.features[r] = new i(this)), u && (o = u))
                    }
                    if (("html" === this.type || "svg" === this.type) && !this.projection && s) {
                        this.projection = new s(this.latestValues, function t(e) {
                            if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                        }(this.parent));
                        let {
                            layoutId: t,
                            layout: r,
                            drag: n,
                            dragConstraints: o,
                            layoutScroll: a,
                            layoutRoot: u
                        } = e;
                        this.projection.setOptions({
                            layoutId: t,
                            layout: r,
                            alwaysMeasureLayout: !!n || o && v(o),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof r ? r : "both",
                            initialPromotionConfig: i,
                            layoutScroll: a,
                            layoutRoot: u
                        })
                    }
                    return o
                }
                updateFeatures() {
                    for (let t in this.features) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : nA()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < i0.length; e++) {
                        let r = i0[e];
                        this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
                        let n = t["on" + r];
                        n && (this.propEventSubscriptions[r] = this.on(r, n))
                    }
                    this.prevMotionValues = function(t, e, r) {
                        let {
                            willChange: n
                        } = e;
                        for (let i in e) {
                            let s = e[i],
                                o = r[i];
                            if (V(s)) t.addValue(i, s), rQ(n) && n.add(i);
                            else if (V(o)) t.addValue(i, r8(s, {
                                owner: t
                            })), rQ(n) && n.remove(i);
                            else if (o !== s) {
                                if (t.hasValue(i)) {
                                    let e = t.getValue(i);
                                    !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s)
                                } else {
                                    let e = t.getStaticValue(i);
                                    t.addValue(i, r8(void 0 !== e ? e : s, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let n in r) void 0 === e[n] && t.removeValue(n);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                getVariantContext(t = !1) {
                    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let t = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (t.initial = this.props.initial), t
                    }
                    let e = {};
                    for (let t = 0; t < i1; t++) {
                        let r = T[t],
                            n = this.props[r];
                        (b(n) || !1 === n) && (e[r] = n)
                    }
                    return e
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    let r = this.values.get(t);
                    e !== r && (r && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let r = this.values.get(t);
                    return void 0 === r && void 0 !== e && (r = r8(null === e ? void 0 : e, {
                        owner: this
                    }), this.addValue(t, r)), r
                }
                readValue(t, e) {
                    var r;
                    let n = void 0 === this.latestValues[t] && this.current ? null !== (r = this.getBaseTargetFromProps(this.props, t)) && void 0 !== r ? r : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                    return null != n && ("string" == typeof n && (eb(n) || ey(n)) ? n = parseFloat(n) : !iZ(n) && eJ.test(e) && (n = e6(t, e)), this.setBaseTarget(t, V(n) ? n.get() : n)), V(n) ? n.get() : n
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let r;
                    let {
                        initial: n
                    } = this.props;
                    if ("string" == typeof n || "object" == typeof n) {
                        let i = tC(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                        i && (r = i[t])
                    }
                    if (n && void 0 !== r) return r;
                    let i = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === i || V(i) ? void 0 !== this.initialValues[t] && void 0 === r ? void 0 : this.baseTarget[t] : i
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new r2), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            class i3 extends i2 {
                constructor() {
                    super(...arguments), this.KeyframeResolver = e4
                }
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: r
                }) {
                    delete e[t], delete r[t]
                }
            }
            class i5 extends i3 {
                constructor() {
                    super(...arguments), this.type = "html"
                }
                readValueFromInstance(t, e) {
                    if (U.has(e)) {
                        let t = e5(e);
                        return t && t.default || 0
                    } {
                        let r = window.getComputedStyle(t),
                            n = (F(e) ? r.getPropertyValue(e) : r[e]) || 0;
                        return "string" == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return nF(t, e)
                }
                build(t, e, r, n) {
                    th(t, e, r, n.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e, r) {
                    return tA(t, e, r)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    V(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
                renderInstance(t, e, r, n) {
                    tD(t, e, r, n)
                }
            }
            class i6 extends i3 {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (U.has(e)) {
                        let t = e5(e);
                        return t && t.default || 0
                    }
                    return e = tx.has(e) ? e : p(e), t.getAttribute(e)
                }
                measureInstanceViewportBox() {
                    return nA()
                }
                scrapeMotionValuesFromProps(t, e, r) {
                    return tP(t, e, r)
                }
                build(t, e, r, n) {
                    tw(t, e, r, this.isSVGTag, n.transformTemplate)
                }
                renderInstance(t, e, r, n) {
                    tS(t, e, r, n)
                }
                mount(t) {
                    this.isSVGTag = tT(t.tagName), super.mount(t)
                }
            }
            let i8 = (t, e) => L(t) ? new i6(e, {
                    enableHardwareAcceleration: !1
                }) : new i5(e, {
                    allowProjection: t !== u.Fragment,
                    enableHardwareAcceleration: !0
                }),
                i4 = {
                    animation: {
                        Feature: nn
                    },
                    exit: {
                        Feature: ns
                    },
                    inView: {
                        Feature: et
                    },
                    tap: {
                        Feature: t5
                    },
                    focus: {
                        Feature: t0
                    },
                    hover: {
                        Feature: tQ
                    },
                    pan: {
                        Feature: nK
                    },
                    drag: {
                        Feature: n$,
                        ProjectionNode: iH,
                        MeasureLayout: n0
                    },
                    layout: {
                        ProjectionNode: iH,
                        MeasureLayout: n0
                    }
                },
                i9 = function(t) {
                    function e(e, r = {}) {
                        return function({
                            preloadedFeatures: t,
                            createVisualElement: e,
                            useRender: r,
                            useVisualState: n,
                            Component: i
                        }) {
                            t && function(t) {
                                for (let e in t) P[e] = { ...P[e],
                                    ...t[e]
                                }
                            }(t);
                            let s = (0, u.forwardRef)(function(s, o) {
                                var p;
                                let y;
                                let w = { ...(0, u.useContext)(l._),
                                        ...s,
                                        layoutId: function({
                                            layoutId: t
                                        }) {
                                            let e = (0, u.useContext)(C.p).id;
                                            return e && void 0 !== t ? e + "-" + t : t
                                        }(s)
                                    },
                                    {
                                        isStatic: E
                                    } = w,
                                    T = function(t) {
                                        let {
                                            initial: e,
                                            animate: r
                                        } = function(t, e) {
                                            if (D(t)) {
                                                let {
                                                    initial: e,
                                                    animate: r
                                                } = t;
                                                return {
                                                    initial: !1 === e || b(e) ? e : void 0,
                                                    animate: b(r) ? r : void 0
                                                }
                                            }
                                            return !1 !== t.inherit ? e : {}
                                        }(t, (0, u.useContext)(c));
                                        return (0, u.useMemo)(() => ({
                                            initial: e,
                                            animate: r
                                        }), [S(e), S(r)])
                                    }(s),
                                    x = n(s, E);
                                if (!E && R.j) {
                                    T.visualElement = function(t, e, r, n) {
                                        let {
                                            visualElement: i
                                        } = (0, u.useContext)(c), s = (0, u.useContext)(d), o = (0, u.useContext)(h.O), a = (0, u.useContext)(l._).reducedMotion, p = (0, u.useRef)();
                                        n = n || s.renderer, !p.current && n && (p.current = n(t, {
                                            visualState: e,
                                            parent: i,
                                            props: r,
                                            presenceContext: o,
                                            blockInitialAnimation: !!o && !1 === o.initial,
                                            reducedMotionConfig: a
                                        }));
                                        let y = p.current;
                                        (0, u.useInsertionEffect)(() => {
                                            y && y.update(r, o)
                                        });
                                        let v = (0, u.useRef)(!!(r[m] && !window.HandoffComplete));
                                        return (0, f.L)(() => {
                                            y && (g.postRender(y.render), v.current && y.animationState && y.animationState.animateChanges())
                                        }), (0, u.useEffect)(() => {
                                            y && (y.updateFeatures(), !v.current && y.animationState && y.animationState.animateChanges(), v.current && (v.current = !1, window.HandoffComplete = !0))
                                        }), y
                                    }(i, x, w, e);
                                    let r = (0, u.useContext)(N),
                                        n = (0, u.useContext)(d).strict;
                                    T.visualElement && (y = T.visualElement.loadFeatures(w, n, t, r))
                                }
                                return (0, a.jsxs)(c.Provider, {
                                    value: T,
                                    children: [y && T.visualElement ? (0, a.jsx)(y, {
                                        visualElement: T.visualElement,
                                        ...w
                                    }) : null, r(i, s, (p = T.visualElement, (0, u.useCallback)(t => {
                                        t && x.mount && x.mount(t), p && (t ? p.mount(t) : p.unmount()), o && ("function" == typeof o ? o(t) : v(o) && (o.current = t))
                                    }, [p])), x, E, T.visualElement)]
                                })
                            });
                            return s[O] = i, s
                        }(t(e, r))
                    }
                    if ("undefined" == typeof Proxy) return e;
                    let r = new Map;
                    return new Proxy(e, {
                        get: (t, n) => (r.has(n) || r.set(n, e(n)), r.get(n))
                    })
                }((t, e) => (function(t, {
                    forwardMotionProps: e = !1
                }, r, n) {
                    return { ...L(t) ? tB : tV,
                        preloadedFeatures: r,
                        useRender: function(t = !1) {
                            return (e, r, n, {
                                latestValues: i
                            }, s) => {
                                let o = (L(e) ? function(t, e, r, n) {
                                        let i = (0, u.useMemo)(() => {
                                            let r = tE();
                                            return tw(r, e, {
                                                enableHardwareAcceleration: !1
                                            }, tT(n), t.transformTemplate), { ...r.attrs,
                                                style: { ...r.style
                                                }
                                            }
                                        }, [e]);
                                        if (t.style) {
                                            let e = {};
                                            td(e, t.style, t), i.style = { ...e,
                                                ...i.style
                                            }
                                        }
                                        return i
                                    } : function(t, e, r) {
                                        let n = {},
                                            i = function(t, e, r) {
                                                let n = t.style || {},
                                                    i = {};
                                                return td(i, n, t), Object.assign(i, function({
                                                    transformTemplate: t
                                                }, e, r) {
                                                    return (0, u.useMemo)(() => {
                                                        let n = tf();
                                                        return th(n, e, {
                                                            enableHardwareAcceleration: !r
                                                        }, t), Object.assign({}, n.vars, n.style)
                                                    }, [e])
                                                }(t, e, r)), i
                                            }(t, e, r);
                                        return t.drag && !1 !== t.dragListener && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n
                                    })(r, i, s, e),
                                    a = function(t, e, r) {
                                        let n = {};
                                        for (let i in t)("values" !== i || "object" != typeof t.values) && (tg(i) || !0 === r && tm(i) || !e && !tm(i) || t.draggable && i.startsWith("onDrag")) && (n[i] = t[i]);
                                        return n
                                    }(r, "string" == typeof e, t),
                                    l = e !== u.Fragment ? { ...a,
                                        ...o,
                                        ref: n
                                    } : {},
                                    {
                                        children: c
                                    } = r,
                                    h = (0, u.useMemo)(() => V(c) ? c.get() : c, [c]);
                                return (0, u.createElement)(e, { ...l,
                                    children: h
                                })
                            }
                        }(e),
                        createVisualElement: n,
                        Component: t
                    }
                })(t, e, i4, i8))
        },
        8174: function(t, e, r) {
            "use strict";
            r.d(e, {
                c: function() {
                    return n
                }
            });
            let n = {
                skipAnimations: !1,
                useManualTiming: !1
            }
        },
        499: function(t, e, r) {
            "use strict";
            r.d(e, {
                K: function() {
                    return i
                },
                k: function() {
                    return s
                }
            });
            var n = r(6210);
            let i = n.Z,
                s = n.Z
        },
        8511: function(t, e, r) {
            "use strict";
            r.d(e, {
                j: function() {
                    return n
                }
            });
            let n = "undefined" != typeof document
        },
        6210: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = t => t
        },
        8868: function(t, e, r) {
            "use strict";
            r.d(e, {
                h: function() {
                    return i
                }
            });
            var n = r(5330);

            function i(t) {
                let e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        1114: function(t, e, r) {
            "use strict";
            r.d(e, {
                L: function() {
                    return i
                }
            });
            var n = r(5330);
            let i = r(8511).j ? n.useLayoutEffect : n.useEffect
        }
    }
]);