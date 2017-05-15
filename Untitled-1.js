/* jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.1",
        m = function(a, b) {
            return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function(a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = gb(),
            z = gb(),
            A = gb(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = "undefined",
            D = 1 << 31,
            E = {}.hasOwnProperty,
            F = [],
            G = F.pop,
            H = F.push,
            I = F.push,
            J = F.slice,
            K = F.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            O = N.replace("w", "w#"),
            P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
            Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            S = new RegExp("^" + M + "*," + M + "*"),
            T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp(Q),
            W = new RegExp("^" + O + "$"),
            X = {
                ID: new RegExp("^#(" + N + ")"),
                CLASS: new RegExp("^\\.(" + N + ")"),
                TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + Q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            db = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (k = b.nodeType) && 9 !== k) return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return I.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function gb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function hb(a) {
            return a[u] = !0, a
        }

        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function jb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function kb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function nb(a) {
            return hb(function(b) {
                return b = +b, hb(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {}, f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : v,
                g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                m()
            })), c.attributes = ib(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function(a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g) return kb(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function(a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fb.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0
                    }
                }),
                contains: hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: nb(function() {
                    return [0]
                }),
                last: nb(function(a, b) {
                    return [b - 1]
                }),
                eq: nb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: nb(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: nb(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = lb(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = mb(b);

        function pb() {}
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };

        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function rb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
            return c
        }

        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || tb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ub(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
            })
        }

        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                    return a === b
                }, h, !0), l = rb(function(a) {
                    return K.call(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }

        function xb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = G.call(i));
                            s = ub(s)
                        }
                        I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function(a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return m.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            m.each(b, function(b, c) {
                                var d = m.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function() {
                    return h && m.each(arguments, function(a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function(a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], e = 0, this
                },
                disable: function() {
                    return h = i = c = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, c || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, m.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return m.Deferred(function(c) {
                            m.each(b, function(b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? m.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(), m.acceptData = function(a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function() {
                    m.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function(a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) {
                e = !0;
                for (h in c) m.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(m(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() {
        return !0
    }

    function bb() {
        return !1
    }

    function cb() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cb() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function db(a) {
        var b = eb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

    function ub(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) Ab(e, d[g]);
                else Ab(a, f);
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                    e = 0;
                    while (f = h[e++]) ob.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function(c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y,
            c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }! function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ib = function(a) {
        return a.currentStyle
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Lb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(), g
                },
                boxSizingReliable: function() {
                    return null == f && i(), f
                },
                pixelPosition: function() {
                    return null == e && i(), e
                },
                reliableMarginRight: function() {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Tb.length;
        while (e--)
            if (b = Tb[e] + c, b in a) return b;
        return d
    }

    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Yb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Jb, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Vb(this, !0)
        },
        hide: function() {
            return Vb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }
    m.Tween = Zb, Zb.prototype = {
        constructor: Zb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
        }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bc.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fc() {
        return setTimeout(function() {
            $b = void 0
        }), $b = m.now()
    }

    function gc(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() {
                m(a).hide()
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kc(a, b, c) {
        var d, e, f = 0,
            g = dc.length,
            h = m.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $b || fc(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
            tweener: function(a, b) {
                m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? dc.unshift(a) : dc.push(a)
            }
        }), m.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
            return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
            }, d
        }, m.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function() {
                        var b = kc(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function(a, b) {
            var c = m.fn[b];
            m.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
            }
        }), m.each({
            slideDown: gc("show"),
            slideUp: gc("hide"),
            slideToggle: gc("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            m.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), m.timers = [], m.fx.tick = function() {
            var a, b = m.timers,
                c = 0;
            for ($b = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $b = void 0
        }, m.fx.timer = function(a) {
            m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
        }, m.fx.interval = 13, m.fx.start = function() {
            _b || (_b = setInterval(m.fx.tick, m.fx.interval))
        }, m.fx.stop = function() {
            clearInterval(_b), _b = null
        }, m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, m.fn.delay = function(a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nc = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rc && qc || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }), qc || (mc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, oc.id = oc.name = oc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mc.set
    }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];

    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mc(a, b, c, d) {
        var e = {},
            f = a === Ic;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            } : function() {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    };
    var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function(b, e) {
            c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sc, "\r\n")
                }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    } : Zc;
    var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function() {
        for (var a in Xc) Xc[a](void 0, !0)
    }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd) return bd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement;

    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cd
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function() {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ed = a.jQuery,
        fd = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});;
/*
 * jQuery Browser Plugin 0.0.6
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2014 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 30-03-2014
 */
! function(a, b) {
    "use strict";
    var c, d;
    if (a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(opr)[\/]([\w.]+)/.exec(a) || /(chrome)[ \/]([\w.]+)/.exec(a) || /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [],
                c = /(ipad)/.exec(a) || /(iphone)/.exec(a) || /(android)/.exec(a) || /(windows phone)/.exec(a) || /(win)/.exec(a) || /(mac)/.exec(a) || /(linux)/.exec(a) || /(cros)/i.exec(a) || [];
            return {
                browser: b[3] || b[1] || "",
                version: b[2] || "0",
                platform: c[0] || ""
            }
        }, c = a.uaMatch(b.navigator.userAgent), d = {}, c.browser && (d[c.browser] = !0, d.version = c.version, d.versionNumber = parseInt(c.version)), c.platform && (d[c.platform] = !0), (d.android || d.ipad || d.iphone || d["windows phone"]) && (d.mobile = !0), (d.cros || d.mac || d.linux || d.win) && (d.desktop = !0), (d.chrome || d.opr || d.safari) && (d.webkit = !0), d.rv) {
        var e = "msie";
        c.browser = e, d[e] = !0
    }
    if (d.opr) {
        var f = "opera";
        c.browser = f, d[f] = !0
    }
    if (d.safari && d.android) {
        var g = "android";
        c.browser = g, d[g] = !0
    }
    d.name = c.browser, d.platform = c.platform, a.browser = d
}(jQuery, window);
/*
 * Supersized - Fullscreen Slideshow jQuery Plugin
 * Version : 3.2.6
 * Theme  : Shutter 1.1
 * Site : www.buildinternet.com/project/supersized
 * 
 * Author : Sam Dunn
 * Company : One Mighty Roar (www.onemightyroar.com)
 * License : MIT License / GPL License
 */
(function(a) {
    a(document).ready(function() {
        a("body").append('<div id="supersized-loader"></div><ul id="supersized"></ul>')
    });
    a.supersized = function(b) {
        var c = "#supersized",
            d = this;
        d.$el = a(c);
        d.el = c;
        vars = a.supersized.vars;
        d.$el.data("supersized", d);
        api = d.$el.data("supersized");
        d.init = function() {
            a.supersized.vars = a.extend(a.supersized.vars, a.supersized.themeVars);
            a.supersized.vars.options = a.extend({}, a.supersized.defaultOptions, a.supersized.themeOptions, b);
            d.options = a.supersized.vars.options;
            d._build()
        };
        d._build = function() {
            var g = 0,
                e = "",
                j = "",
                h, f = "",
                i;
            while (g <= d.options.slides.length - 1) {
                switch (d.options.slide_links) {
                    case "num":
                        h = g;
                        break;
                    case "name":
                        h = d.options.slides[g].title;
                        break;
                    case "blank":
                        h = "";
                        break
                }
                e = e + '<li class="slide-' + g + '"></li>';
                if (g == d.options.start_slide - 1) {
                    if (d.options.slide_links) {
                        j = j + '<li class="slide-link-' + g + ' current-slide"><a>' + h + "</a></li>"
                    }
                    if (d.options.thumb_links) {
                        d.options.slides[g].thumb ? i = d.options.slides[g].thumb : i = d.options.slides[g].image;
                        f = f + '<li class="thumb' + g + ' current-thumb"><img src="' + i + '"/></li>'
                    }
                } else {
                    if (d.options.slide_links) {
                        j = j + '<li class="slide-link-' + g + '" ><a>' + h + "</a></li>"
                    }
                    if (d.options.thumb_links) {
                        d.options.slides[g].thumb ? i = d.options.slides[g].thumb : i = d.options.slides[g].image;
                        f = f + '<li class="thumb' + g + '"><img src="' + i + '"/></li>'
                    }
                }
                g++
            }
            if (d.options.slide_links) {
                a(vars.slide_list).html(j)
            }
            if (d.options.thumb_links && vars.thumb_tray.length) {
                a(vars.thumb_tray).append('<ul id="' + vars.thumb_list.replace("#", "") + '">' + f + "</ul>")
            }
            a(d.el).append(e);
            if (d.options.thumbnail_navigation) {
                vars.current_slide - 1 < 0 ? prevThumb = d.options.slides.length - 1 : prevThumb = vars.current_slide - 1;
                a(vars.prev_thumb).show().html(a("<img/>").attr("src", d.options.slides[prevThumb].image));
                vars.current_slide == d.options.slides.length - 1 ? nextThumb = 0 : nextThumb = vars.current_slide + 1;
                a(vars.next_thumb).show().html(a("<img/>").attr("src", d.options.slides[nextThumb].image))
            }
            d._start()
        };
        d._start = function() {
            if (d.options.start_slide) {
                vars.current_slide = d.options.start_slide - 1
            } else {
                vars.current_slide = Math.floor(Math.random() * d.options.slides.length)
            }
            var o = d.options.new_window ? ' target="_blank"' : "";
            if (d.options.performance == 3) {
                d.$el.addClass("speed")
            } else {
                if ((d.options.performance == 1) || (d.options.performance == 2)) {
                    d.$el.addClass("quality")
                }
            }
            if (d.options.random) {
                arr = d.options.slides;
                for (var h, m, k = arr.length; k; h = parseInt(Math.random() * k), m = arr[--k], arr[k] = arr[h], arr[h] = m) {}
                d.options.slides = arr
            }
            if (d.options.slides.length > 1) {
                if (d.options.slides.length > 2) {
                    vars.current_slide - 1 < 0 ? loadPrev = d.options.slides.length - 1 : loadPrev = vars.current_slide - 1;
                    var g = (d.options.slides[loadPrev].url) ? "href='" + d.options.slides[loadPrev].url + "'" : "";
                    var q = a('<img src="' + d.options.slides[loadPrev].image + '"/>');
                    var n = d.el + " li:eq(" + loadPrev + ")";
                    q.appendTo(n).wrap("<a " + g + o + "></a>").parent().parent().addClass("image-loading prevslide");
                    q.load(function() {
                        a(this).data("origWidth", a(this).width()).data("origHeight", a(this).height());
                        d.resizeNow()
                    })
                }
            } else {
                d.options.slideshow = 0
            }
            g = (api.getField("url")) ? "href='" + api.getField("url") + "'" : "";
            var l = a('<img src="' + api.getField("image") + '"/>');
            var f = d.el + " li:eq(" + vars.current_slide + ")";
            l.appendTo(f).wrap("<a " + g + o + "></a>").parent().parent().addClass("image-loading activeslide");
            l.load(function() {
                d._origDim(a(this));
                d.resizeNow();
                d.launch();
                if (typeof theme != "undefined" && typeof theme._init == "function") {
                    theme._init()
                }
            });
            if (d.options.slides.length > 1) {
                vars.current_slide == d.options.slides.length - 1 ? loadNext = 0 : loadNext = vars.current_slide + 1;
                g = (d.options.slides[loadNext].url) ? "href='" + d.options.slides[loadNext].url + "'" : "";
                var e = a('<img src="' + d.options.slides[loadNext].image + '"/>');
                var p = d.el + " li:eq(" + loadNext + ")";
                e.appendTo(p).wrap("<a " + g + o + "></a>").parent().parent().addClass("image-loading");
                e.load(function() {
                    a(this).data("origWidth", a(this).width()).data("origHeight", a(this).height());
                    d.resizeNow()
                })
            }
            d.$el.css("visibility", "hidden");
            a(".load-item").hide()
        };
        d.launch = function() {
            d.$el.css("visibility", "visible");
            a("#supersized-loader").remove();
            if (typeof theme != "undefined" && typeof theme.beforeAnimation == "function") {
                theme.beforeAnimation("next")
            }
            a(".load-item").show();
            if (d.options.keyboard_nav) {
                a(document.documentElement).keyup(function(e) {
                    if (vars.in_animation) {
                        return false
                    }
                    if ((e.keyCode == 37) || (e.keyCode == 40)) {
                        clearInterval(vars.slideshow_interval);
                        d.prevSlide()
                    } else {
                        if ((e.keyCode == 39) || (e.keyCode == 38)) {
                            clearInterval(vars.slideshow_interval);
                            d.nextSlide()
                        } else {
                            if (e.keyCode == 32 && !vars.hover_pause) {
                                clearInterval(vars.slideshow_interval);
                                d.playToggle()
                            }
                        }
                    }
                })
            }
            if (d.options.slideshow && d.options.pause_hover) {
                a(d.el).hover(function() {
                    if (vars.in_animation) {
                        return false
                    }
                    vars.hover_pause = true;
                    if (!vars.is_paused) {
                        vars.hover_pause = "resume";
                        d.playToggle()
                    }
                }, function() {
                    if (vars.hover_pause == "resume") {
                        d.playToggle();
                        vars.hover_pause = false
                    }
                })
            }
            if (d.options.slide_links) {
                a(vars.slide_list + "> li").click(function() {
                    index = a(vars.slide_list + "> li").index(this);
                    targetSlide = index + 1;
                    d.goTo(targetSlide);
                    return false
                })
            }
            if (d.options.thumb_links) {
                a(vars.thumb_list + "> li").click(function() {
                    index = a(vars.thumb_list + "> li").index(this);
                    targetSlide = index + 1;
                    api.goTo(targetSlide);
                    return false
                })
            }
            if (d.options.slideshow && d.options.slides.length > 1) {
                if (d.options.autoplay && d.options.slides.length > 1) {
                    vars.slideshow_interval = setInterval(d.nextSlide, d.options.slide_interval)
                } else {
                    vars.is_paused = true
                }
                a(".load-item img").bind("contextmenu mousedown", function() {
                    return false
                })
            }
            a(window).resize(function() {
                d.resizeNow()
            })
        };
        d.resizeNow = function() {
            return d.$el.each(function() {
                a("img", d.el).each(function() {
                    thisSlide = a(this);
                    var f = (thisSlide.data("origHeight") / thisSlide.data("origWidth")).toFixed(2);
                    var e = d.$el.width(),
                        h = d.$el.height(),
                        i;
                    if (d.options.fit_always) {
                        if ((h / e) > f) {
                            g()
                        } else {
                            j()
                        }
                    } else {
                        if ((h <= d.options.min_height) && (e <= d.options.min_width)) {
                            if ((h / e) > f) {
                                d.options.fit_landscape && f < 1 ? g(true) : j(true)
                            } else {
                                d.options.fit_portrait && f >= 1 ? j(true) : g(true)
                            }
                        } else {
                            if (e <= d.options.min_width) {
                                if ((h / e) > f) {
                                    d.options.fit_landscape && f < 1 ? g(true) : j()
                                } else {
                                    d.options.fit_portrait && f >= 1 ? j() : g(true)
                                }
                            } else {
                                if (h <= d.options.min_height) {
                                    if ((h / e) > f) {
                                        d.options.fit_landscape && f < 1 ? g() : j(true)
                                    } else {
                                        d.options.fit_portrait && f >= 1 ? j(true) : g()
                                    }
                                } else {
                                    if ((h / e) > f) {
                                        d.options.fit_landscape && f < 1 ? g() : j()
                                    } else {
                                        d.options.fit_portrait && f >= 1 ? j() : g()
                                    }
                                }
                            }
                        }
                    }

                    function g(k) {
                        if (k) {
                            if (thisSlide.width() < e || thisSlide.width() < d.options.min_width) {
                                if (thisSlide.width() * f >= d.options.min_height) {
                                    thisSlide.width(d.options.min_width);
                                    thisSlide.height(thisSlide.width() * f)
                                } else {
                                    j()
                                }
                            }
                        } else {
                            if (d.options.min_height >= h && !d.options.fit_landscape) {
                                if (e * f >= d.options.min_height || (e * f >= d.options.min_height && f <= 1)) {
                                    thisSlide.width(e);
                                    thisSlide.height(e * f)
                                } else {
                                    if (f > 1) {
                                        thisSlide.height(d.options.min_height);
                                        thisSlide.width(thisSlide.height() / f)
                                    } else {
                                        if (thisSlide.width() < e) {
                                            thisSlide.width(e);
                                            thisSlide.height(thisSlide.width() * f)
                                        }
                                    }
                                }
                            } else {
                                thisSlide.width(e);
                                thisSlide.height(e * f)
                            }
                        }
                    }

                    function j(k) {
                        if (k) {
                            if (thisSlide.height() < h) {
                                if (thisSlide.height() / f >= d.options.min_width) {
                                    thisSlide.height(d.options.min_height);
                                    thisSlide.width(thisSlide.height() / f)
                                } else {
                                    g(true)
                                }
                            }
                        } else {
                            if (d.options.min_width >= e) {
                                if (h / f >= d.options.min_width || f > 1) {
                                    thisSlide.height(h);
                                    thisSlide.width(h / f)
                                } else {
                                    if (f <= 1) {
                                        thisSlide.width(d.options.min_width);
                                        thisSlide.height(thisSlide.width() * f)
                                    }
                                }
                            } else {
                                thisSlide.height(h);
                                thisSlide.width(h / f)
                            }
                        }
                    }
                    if (thisSlide.parents("li").hasClass("image-loading")) {
                        a(".image-loading").removeClass("image-loading")
                    }
                    if (d.options.horizontal_center) {
                        a(this).css("left", (e - a(this).width()) / 2)
                    }
                    if (d.options.vertical_center) {
                        a(this).css("top", (h - a(this).height()) / 2)
                    }
                });
                if (d.options.image_protect) {
                    a("img", d.el).bind("contextmenu mousedown", function() {
                        return false
                    })
                }
                return false
            })
        };
        d.nextSlide = function() {
            if (vars.in_animation || !api.options.slideshow) {
                return false
            } else {
                vars.in_animation = true
            }
            clearInterval(vars.slideshow_interval);
            var h = d.options.slides,
                e = d.$el.find(".activeslide");
            a(".prevslide").removeClass("prevslide");
            e.removeClass("activeslide").addClass("prevslide");
            vars.current_slide + 1 == d.options.slides.length ? vars.current_slide = 0 : vars.current_slide++;
            var g = a(d.el + " li:eq(" + vars.current_slide + ")"),
                i = d.$el.find(".prevslide");
            if (d.options.performance == 1) {
                d.$el.removeClass("quality").addClass("speed")
            }
            loadSlide = false;
            vars.current_slide == d.options.slides.length - 1 ? loadSlide = 0 : loadSlide = vars.current_slide + 1;
            var k = d.el + " li:eq(" + loadSlide + ")";
            if (!a(k).html()) {
                var j = d.options.new_window ? ' target="_blank"' : "";
                imageLink = (d.options.slides[loadSlide].url) ? "href='" + d.options.slides[loadSlide].url + "'" : "";
                var f = a('<img src="' + d.options.slides[loadSlide].image + '"/>');
                f.appendTo(k).wrap("<a " + imageLink + j + "></a>").parent().parent().addClass("image-loading").css("visibility", "hidden");
                f.load(function() {
                    d._origDim(a(this));
                    d.resizeNow()
                })
            }
            if (d.options.thumbnail_navigation == 1) {
                vars.current_slide - 1 < 0 ? prevThumb = d.options.slides.length - 1 : prevThumb = vars.current_slide - 1;
                a(vars.prev_thumb).html(a("<img/>").attr("src", d.options.slides[prevThumb].image));
                nextThumb = loadSlide;
                a(vars.next_thumb).html(a("<img/>").attr("src", d.options.slides[nextThumb].image))
            }
            if (typeof theme != "undefined" && typeof theme.beforeAnimation == "function") {
                theme.beforeAnimation("next")
            }
            if (d.options.slide_links) {
                a(".current-slide").removeClass("current-slide");
                a(vars.slide_list + "> li").eq(vars.current_slide).addClass("current-slide")
            }
            g.css("visibility", "hidden").addClass("activeslide");
            switch (d.options.transition) {
                case 0:
                case "none":
                    g.css("visibility", "visible");
                    vars.in_animation = false;
                    break;
                case 1:
                case "fade":
                    g.animate({
                        opacity: 0
                    }, 0).css("visibility", "visible").animate({
                        opacity: 1,
                        avoidTransforms: false
                    }, d.options.transition_speed, function() {
                        d.afterAnimation()
                    });
                    break;
                case 2:
                case "slideTop":
                    g.animate({
                        top: -d.$el.height()
                    }, 0).css("visibility", "visible").animate({
                        top: 0,
                        avoidTransforms: false
                    }, d.options.transition_speed, function() {
                        d.afterAnimation()
                    });
                    break;
                case 3:
                case "slideRight":
                    g.animate({
                        left: d.$el.width()
                    }, 0).css("visibility", "visible").animate({
                        left: 0,
                        avoidTransforms: false
                    }, d.options.transition_speed, function() {
                        d.afterAnimation()
                    });
                    break;
                case 4:
                case "slideBottom":
                    g.animate({
                        top: d.$el.height()
                    }, 0).css("visibility", "visible").animate({
                        top: 0,
                        avoidTransforms: false
                    }, d.options.transition_speed, function() {
                        d.afterAnimation()
                    });
                    break;
                case 5:
                case "slideLeft":
                    g.animate({
                        left: -d.$el.width()
                    }, 0).css("visibility", "visible").animate({
                        left: 0,
                        avoidTransforms: false
                    }, d.options.transition_speed, function() {
                        d.afterAnimation()
                    });
                    break;
                case 6:
                case "carouselRight":
                    g.animate({
                        left: d.$el.width()
                    }, 0).css("visibility", "visible").animate({
                        left: 0,
                        avoidTransforms: false
                    }, d.options.transition_speed, function() {
                        d.afterAnimation()
                    });
                    e.animate({
                        left: -d.$el.width(),
                        avoidTransforms: false
                    }, d.options.transition_speed);
                    break;
                case 7:
                case "carouselLeft":
                    g.animate({
                        left: -d.$el.width()
                    }, 0).css("visibility", "visible").animate({
                        left: 0,
                        avoidTransforms: false
                    }, d.options.transition_speed, function() {
                        d.afterAnimation()
                    });
                    e.animate({
                        left: d.$el.width(),
                        avoidTransforms: false
                    }, d.options.transition_speed);
                    break
            }
            return false
        };
        d.prevSlide = function() {
            if (vars.in_animation || !api.options.slideshow) {
                return false
            } else {
                vars.in_animation = true
            }
            clearInterval(vars.slideshow_interval);
            var h = d.options.slides,
                e = d.$el.find(".activeslide");
            a(".prevslide").removeClass("prevslide");
            e.removeClass("activeslide").addClass("prevslide");
            vars.current_slide == 0 ? vars.current_slide = d.options.slides.length - 1 : vars.current_slide--;
            var g = a(d.el + " li:eq(" + vars.current_slide + ")"),
                i = d.$el.find(".prevslide");
            if (d.options.performance == 1) {
                d.$el.removeClass("quality").addClass("speed")
            }
            loadSlide = vars.current_slide;
            var k = d.el + " li:eq(" + loadSlide + ")";
            if (!a(k).html()) {
                var j = d.options.new_window ? ' target="_blank"' : "";
                imageLink = (d.options.slides[loadSlide].url) ? "href='" + d.options.slides[loadSlide].url + "'" : "";
                var f = a('<img src="' + d.options.slides[loadSlide].image + '"/>');
                f.appendTo(k).wrap("<a " + imageLink + j + "></a>").parent().parent().addClass("image-loading").css("visibility", "hidden");
                f.load(function() {
                    d._origDim(a(this));
                    d.resizeNow()
                })
            }
            if (d.options.thumbnail_navigation == 1) {
                prevThumb = loadSlide;
                a(vars.prev_thumb).html(a("<img/>").attr("src", d.options.slides[prevThumb].image));
                vars.current_slide == d.options.slides.length - 1 ? nextThumb = 0 : nextThumb = vars.current_slide + 1;
                a(vars.next_thumb).html(a("<img/>").attr("src", d.options.slides[nextThumb].image))
            }
            if (typeof theme != "undefined" && typeof theme.beforeAnimation == "function") {
                theme.beforeAnimation("prev")
            }
            if (d.options.slide_links) {
                a(".current-slide").removeClass("current-slide");
                a(vars.slide_list + "> li").eq(vars.current_slide).addClass("current-slide")
            }
            g.css("visibility", "hidden").addClass("activeslide");
            switch (d.options.transition) {
                case 0:
                case "none":
                    g.css("visibility", "visible");
                    vars.in_animation = false;
                    d.afterAnimation();
                    break;
                case 1:
                case "fade":
                    g.animate({
                        opacity: 0
                    }, 0).css("visibility", "visible").animate({
                        opacity: 1,
                        avoidTransforms: false
                    }, d.options.transition_speed, function() {
                        d.afterAnimation()
                    });
                    break;
                case 2:
                case "slideTop":
                    g.animate({
                        top: d.$el.height()
                    }, 0).css("visibility", "visible").animate({
                        top: 0,
                        avoidTransforms: false
                    }, d.options.transition_speed, function() {
                        d.afterAnimation()
                    });
                    break;
                case 3:
                case "slideRight":
                    g.animate({
                        left: -d.$el.width()
                    }, 0).css("visibility", "visible").animate({
                        left: 0,
                        avoidTransforms: false
                    }, d.options.transition_speed, function() {
                        d.afterAnimation()
                    });
                    break;
                case 4:
                case "slideBottom":
                    g.animate({
                        top: -d.$el.height()
                    }, 0).css("visibility", "visible").animate({
                        top: 0,
                        avoidTransforms: false
                    }, d.options.transition_speed, function() {
                        d.afterAnimation()
                    });
                    break;
                case 5:
                case "slideLeft":
                    g.animate({
                        left: d.$el.width()
                    }, 0).css("visibility", "visible").animate({
                        left: 0,
                        avoidTransforms: false
                    }, d.options.transition_speed, function() {
                        d.afterAnimation()
                    });
                    break;
                case 6:
                case "carouselRight":
                    g.animate({
                        left: -d.$el.width()
                    }, 0).css("visibility", "visible").animate({
                        left: 0,
                        avoidTransforms: false
                    }, d.options.transition_speed, function() {
                        d.afterAnimation()
                    });
                    e.animate({
                        left: 0
                    }, 0).animate({
                        left: d.$el.width(),
                        avoidTransforms: false
                    }, d.options.transition_speed);
                    break;
                case 7:
                case "carouselLeft":
                    g.animate({
                        left: d.$el.width()
                    }, 0).css("visibility", "visible").animate({
                        left: 0,
                        avoidTransforms: false
                    }, d.options.transition_speed, function() {
                        d.afterAnimation()
                    });
                    e.animate({
                        left: 0
                    }, 0).animate({
                        left: -d.$el.width(),
                        avoidTransforms: false
                    }, d.options.transition_speed);
                    break
            }
            return false
        };
        d.playToggle = function() {
            if (vars.in_animation || !api.options.slideshow) {
                return false
            }
            if (vars.is_paused) {
                vars.is_paused = false;
                if (typeof theme != "undefined" && typeof theme.playToggle == "function") {
                    theme.playToggle("play")
                }
                vars.slideshow_interval = setInterval(d.nextSlide, d.options.slide_interval)
            } else {
                vars.is_paused = true;
                if (typeof theme != "undefined" && typeof theme.playToggle == "function") {
                    theme.playToggle("pause")
                }
                clearInterval(vars.slideshow_interval)
            }
            return false
        };
        d.goTo = function(f) {
            if (vars.in_animation || !api.options.slideshow) {
                return false
            }
            var e = d.options.slides.length;
            if (f < 0) {
                f = e
            } else {
                if (f > e) {
                    f = 1
                }
            }
            f = e - f + 1;
            clearInterval(vars.slideshow_interval);
            if (typeof theme != "undefined" && typeof theme.goTo == "function") {
                theme.goTo()
            }
            if (vars.current_slide == e - f) {
                if (!(vars.is_paused)) {
                    vars.slideshow_interval = setInterval(d.nextSlide, d.options.slide_interval)
                }
                return false
            }
            if (e - f > vars.current_slide) {
                vars.current_slide = e - f - 1;
                vars.update_images = "next";
                d._placeSlide(vars.update_images)
            } else {
                if (e - f < vars.current_slide) {
                    vars.current_slide = e - f + 1;
                    vars.update_images = "prev";
                    d._placeSlide(vars.update_images)
                }
            }
            if (d.options.slide_links) {
                a(vars.slide_list + "> .current-slide").removeClass("current-slide");
                a(vars.slide_list + "> li").eq((e - f)).addClass("current-slide")
            }
            if (d.options.thumb_links) {
                a(vars.thumb_list + "> .current-thumb").removeClass("current-thumb");
                a(vars.thumb_list + "> li").eq((e - f)).addClass("current-thumb")
            }
        };
        d._placeSlide = function(e) {
            var h = d.options.new_window ? ' target="_blank"' : "";
            loadSlide = false;
            if (e == "next") {
                vars.current_slide == d.options.slides.length - 1 ? loadSlide = 0 : loadSlide = vars.current_slide + 1;
                var g = d.el + " li:eq(" + loadSlide + ")";
                if (!a(g).html()) {
                    var h = d.options.new_window ? ' target="_blank"' : "";
                    imageLink = (d.options.slides[loadSlide].url) ? "href='" + d.options.slides[loadSlide].url + "'" : "";
                    var f = a('<img src="' + d.options.slides[loadSlide].image + '"/>');
                    f.appendTo(g).wrap("<a " + imageLink + h + "></a>").parent().parent().addClass("image-loading").css("visibility", "hidden");
                    f.load(function() {
                        d._origDim(a(this));
                        d.resizeNow()
                    })
                }
                d.nextSlide()
            } else {
                if (e == "prev") {
                    vars.current_slide - 1 < 0 ? loadSlide = d.options.slides.length - 1 : loadSlide = vars.current_slide - 1;
                    var g = d.el + " li:eq(" + loadSlide + ")";
                    if (!a(g).html()) {
                        var h = d.options.new_window ? ' target="_blank"' : "";
                        imageLink = (d.options.slides[loadSlide].url) ? "href='" + d.options.slides[loadSlide].url + "'" : "";
                        var f = a('<img src="' + d.options.slides[loadSlide].image + '"/>');
                        f.appendTo(g).wrap("<a " + imageLink + h + "></a>").parent().parent().addClass("image-loading").css("visibility", "hidden");
                        f.load(function() {
                            d._origDim(a(this));
                            d.resizeNow()
                        })
                    }
                    d.prevSlide()
                }
            }
        };
        d._origDim = function(e) {
            e.data("origWidth", e.width()).data("origHeight", e.height())
        };
        d.afterAnimation = function() {
            if (d.options.performance == 1) {
                d.$el.removeClass("speed").addClass("quality")
            }
            if (vars.update_images) {
                vars.current_slide - 1 < 0 ? setPrev = d.options.slides.length - 1 : setPrev = vars.current_slide - 1;
                vars.update_images = false;
                a(".prevslide").removeClass("prevslide");
                a(d.el + " li:eq(" + setPrev + ")").addClass("prevslide")
            }
            vars.in_animation = false;
            if (!vars.is_paused && d.options.slideshow) {
                vars.slideshow_interval = setInterval(d.nextSlide, d.options.slide_interval);
                if (d.options.stop_loop && vars.current_slide == d.options.slides.length - 1) {
                    d.playToggle()
                }
            }
            if (typeof theme != "undefined" && typeof theme.afterAnimation == "function") {
                theme.afterAnimation()
            }
            return false
        };
        d.getField = function(e) {
            return d.options.slides[vars.current_slide][e]
        };
        d.init()
    };
    a.supersized.vars = {
        thumb_tray: "#thumb-tray",
        thumb_list: "#thumb-list",
        slide_list: "#slide-list",
        current_slide: 0,
        in_animation: false,
        is_paused: false,
        hover_pause: false,
        slideshow_interval: false,
        update_images: false,
        options: {}
    };
    a.supersized.defaultOptions = {
        slideshow: 1,
        autoplay: 1,
        start_slide: 1,
        stop_loop: 0,
        random: 0,
        slide_interval: 5000,
        transition: 1,
        transition_speed: 750,
        new_window: 1,
        pause_hover: 0,
        keyboard_nav: 1,
        performance: 1,
        image_protect: 1,
        fit_always: 0,
        fit_landscape: 0,
        fit_portrait: 1,
        min_width: 0,
        min_height: 0,
        horizontal_center: 1,
        vertical_center: 1,
        slide_links: 1,
        thumb_links: 1,
        thumbnail_navigation: 0
    };
    a.fn.supersized = function(b) {
        return this.each(function() {
            (new a.supersized(b))
        })
    }
})(jQuery);
(function(a) {
    theme = {
        _init: function() {
            if (api.options.slide_links) {
                a(vars.slide_list).css("margin-left", -a(vars.slide_list).width() / 2)
            }
            if (api.options.autoplay) {
                if (api.options.progress_bar) {
                    theme.progressBar()
                }
            } else {
                if (a(vars.play_button).attr("src")) {
                    a(vars.play_button).attr("src", vars.image_path + "play.png")
                }
                if (api.options.progress_bar) {
                    a(vars.progress_bar).stop().animate({
                        left: -a(window).width()
                    }, 0)
                }
            }
            a(vars.thumb_tray).animate({
                bottom: -a(vars.thumb_tray).height()
            }, 0);
            a(vars.tray_button).toggle(function() {
                a(vars.thumb_tray).stop().animate({
                    bottom: 0,
                    avoidTransforms: true
                }, 300);
                if (a(vars.tray_arrow).attr("src")) {
                    a(vars.tray_arrow).attr("src", vars.image_path + "button-tray-down.png")
                }
                return false
            }, function() {
                a(vars.thumb_tray).stop().animate({
                    bottom: -a(vars.thumb_tray).height(),
                    avoidTransforms: true
                }, 300);
                if (a(vars.tray_arrow).attr("src")) {
                    a(vars.tray_arrow).attr("src", vars.image_path + "button-tray-up.png")
                }
                return false
            });
            a(vars.thumb_list).width(a("> li", vars.thumb_list).length * a("> li", vars.thumb_list).outerWidth(true));
            if (a(vars.slide_total).length) {
                a(vars.slide_total).html(api.options.slides.length)
            }
            if (api.options.thumb_links) {
                if (a(vars.thumb_list).width() <= a(vars.thumb_tray).width()) {
                    a(vars.thumb_back + "," + vars.thumb_forward).fadeOut(0)
                }
                vars.thumb_interval = Math.floor(a(vars.thumb_tray).width() / a("> li", vars.thumb_list).outerWidth(true)) * a("> li", vars.thumb_list).outerWidth(true);
                vars.thumb_page = 0;
                a(vars.thumb_forward).click(function() {
                    if (vars.thumb_page - vars.thumb_interval <= -a(vars.thumb_list).width()) {
                        vars.thumb_page = 0;
                        a(vars.thumb_list).stop().animate({
                            left: vars.thumb_page
                        }, {
                            duration: 500,
                            easing: "easeOutExpo"
                        })
                    } else {
                        vars.thumb_page = vars.thumb_page - vars.thumb_interval;
                        a(vars.thumb_list).stop().animate({
                            left: vars.thumb_page
                        }, {
                            duration: 500,
                            easing: "easeOutExpo"
                        })
                    }
                });
                a(vars.thumb_back).click(function() {
                    if (vars.thumb_page + vars.thumb_interval > 0) {
                        vars.thumb_page = Math.floor(a(vars.thumb_list).width() / vars.thumb_interval) * -vars.thumb_interval;
                        if (a(vars.thumb_list).width() <= -vars.thumb_page) {
                            vars.thumb_page = vars.thumb_page + vars.thumb_interval
                        }
                        a(vars.thumb_list).stop().animate({
                            left: vars.thumb_page
                        }, {
                            duration: 500,
                            easing: "easeOutExpo"
                        })
                    } else {
                        vars.thumb_page = vars.thumb_page + vars.thumb_interval;
                        a(vars.thumb_list).stop().animate({
                            left: vars.thumb_page
                        }, {
                            duration: 500,
                            easing: "easeOutExpo"
                        })
                    }
                })
            }
            a(vars.next_slide).click(function() {
                api.nextSlide()
            });
            a(vars.prev_slide).click(function() {
                api.prevSlide()
            });
            if (jQuery.support.opacity) {
                a(vars.prev_slide + "," + vars.next_slide).mouseover(function() {
                    a(this).stop().animate({
                        opacity: 1
                    }, 100)
                }).mouseout(function() {
                    a(this).stop().animate({
                        opacity: 0.6
                    }, 100)
                })
            }
            if (api.options.thumbnail_navigation) {
                a(vars.next_thumb).click(function() {
                    api.nextSlide()
                });
                a(vars.prev_thumb).click(function() {
                    api.prevSlide()
                })
            }
            a(vars.play_button).click(function() {
                api.playToggle()
            });
            if (api.options.mouse_scrub) {
                a(vars.thumb_tray).mousemove(function(f) {
                    var c = a(vars.thumb_tray).width(),
                        g = a(vars.thumb_list).width();
                    if (g > c) {
                        var b = 1,
                            d = f.pageX - b;
                        if (d > 10 || d < -10) {
                            b = f.pageX;
                            newX = (c - g) * (f.pageX / c);
                            d = parseInt(Math.abs(parseInt(a(vars.thumb_list).css("left")) - newX)).toFixed(0);
                            a(vars.thumb_list).stop().animate({
                                left: newX
                            }, {
                                duration: d * 3,
                                easing: "easeOutExpo"
                            })
                        }
                    }
                })
            }
            a(window).resize(function() {
                if (api.options.progress_bar && !vars.in_animation) {
                    if (vars.slideshow_interval) {
                        clearInterval(vars.slideshow_interval)
                    }
                    if (api.options.slides.length - 1 > 0) {
                        clearInterval(vars.slideshow_interval)
                    }
                    a(vars.progress_bar).stop().animate({
                        left: -a(window).width()
                    }, 0);
                    if (!vars.progressDelay && api.options.slideshow) {
                        vars.progressDelay = setTimeout(function() {
                            if (!vars.is_paused) {
                                theme.progressBar();
                                vars.slideshow_interval = setInterval(api.nextSlide, api.options.slide_interval)
                            }
                            vars.progressDelay = false
                        }, 1000)
                    }
                }
                if (api.options.thumb_links && vars.thumb_tray.length) {
                    vars.thumb_page = 0;
                    vars.thumb_interval = Math.floor(a(vars.thumb_tray).width() / a("> li", vars.thumb_list).outerWidth(true)) * a("> li", vars.thumb_list).outerWidth(true);
                    if (a(vars.thumb_list).width() > a(vars.thumb_tray).width()) {
                        a(vars.thumb_back + "," + vars.thumb_forward).fadeIn("fast");
                        a(vars.thumb_list).stop().animate({
                            left: 0
                        }, 200)
                    } else {
                        a(vars.thumb_back + "," + vars.thumb_forward).fadeOut("fast")
                    }
                }
            })
        },
        goTo: function(b) {
            if (api.options.progress_bar && !vars.is_paused) {
                a(vars.progress_bar).stop().animate({
                    left: -a(window).width()
                }, 0);
                theme.progressBar()
            }
        },
        playToggle: function(b) {
            if (b == "play") {
                if (a(vars.play_button).attr("src")) {
                    a(vars.play_button).attr("src", vars.image_path + "pause.png")
                }
                if (api.options.progress_bar && !vars.is_paused) {
                    theme.progressBar()
                }
            } else {
                if (b == "pause") {
                    if (a(vars.play_button).attr("src")) {
                        a(vars.play_button).attr("src", vars.image_path + "play.png")
                    }
                    if (api.options.progress_bar && vars.is_paused) {
                        a(vars.progress_bar).stop().animate({
                            left: -a(window).width()
                        }, 0)
                    }
                }
            }
        },
        beforeAnimation: function(b) {
            if (api.options.progress_bar && !vars.is_paused) {
                a(vars.progress_bar).stop().animate({
                    left: -a(window).width()
                }, 0)
            }
            if (a(vars.slide_caption).length) {
                (api.getField("title")) ? a(vars.slide_caption).html(api.getField("title")): a(vars.slide_caption).html("")
            }
            if (vars.slide_current.length) {
                a(vars.slide_current).html(vars.current_slide + 1)
            }
            if (api.options.thumb_links) {
                a(".current-thumb").removeClass("current-thumb");
                a("li", vars.thumb_list).eq(vars.current_slide).addClass("current-thumb");
                if (a(vars.thumb_list).width() > a(vars.thumb_tray).width()) {
                    if (b == "next") {
                        if (vars.current_slide == 0) {
                            vars.thumb_page = 0;
                            a(vars.thumb_list).stop().animate({
                                left: vars.thumb_page
                            }, {
                                duration: 500,
                                easing: "easeOutExpo"
                            })
                        } else {
                            if (a(".current-thumb").offset().left - a(vars.thumb_tray).offset().left >= vars.thumb_interval) {
                                vars.thumb_page = vars.thumb_page - vars.thumb_interval;
                                a(vars.thumb_list).stop().animate({
                                    left: vars.thumb_page
                                }, {
                                    duration: 500,
                                    easing: "easeOutExpo"
                                })
                            }
                        }
                    } else {
                        if (b == "prev") {
                            if (vars.current_slide == api.options.slides.length - 1) {
                                vars.thumb_page = Math.floor(a(vars.thumb_list).width() / vars.thumb_interval) * -vars.thumb_interval;
                                if (a(vars.thumb_list).width() <= -vars.thumb_page) {
                                    vars.thumb_page = vars.thumb_page + vars.thumb_interval
                                }
                                a(vars.thumb_list).stop().animate({
                                    left: vars.thumb_page
                                }, {
                                    duration: 500,
                                    easing: "easeOutExpo"
                                })
                            } else {
                                if (a(".current-thumb").offset().left - a(vars.thumb_tray).offset().left < 0) {
                                    if (vars.thumb_page + vars.thumb_interval > 0) {
                                        return false
                                    }
                                    vars.thumb_page = vars.thumb_page + vars.thumb_interval;
                                    a(vars.thumb_list).stop().animate({
                                        left: vars.thumb_page
                                    }, {
                                        duration: 500,
                                        easing: "easeOutExpo"
                                    })
                                }
                            }
                        }
                    }
                }
            }
        },
        afterAnimation: function() {
            if (api.options.progress_bar && !vars.is_paused) {
                theme.progressBar()
            }
        },
        progressBar: function() {
            a(vars.progress_bar).stop().animate({
                left: -a(window).width()
            }, 0).animate({
                left: 0
            }, api.options.slide_interval)
        }
    };
    a.supersized.themeVars = {
        progress_delay: false,
        thumb_page: false,
        thumb_interval: false,
        image_path: "img/",
        play_button: "#pauseplay",
        next_slide: "#nextslide",
        prev_slide: "#prevslide",
        next_thumb: "#nextthumb",
        prev_thumb: "#prevthumb",
        slide_caption: "#slidecaption",
        slide_current: ".slidenumber",
        slide_total: ".totalslides",
        slide_list: "#slide-list",
        thumb_tray: "#thumb-tray",
        thumb_list: "#thumb-list",
        thumb_forward: "#thumb-forward",
        thumb_back: "#thumb-back",
        tray_arrow: "#tray-arrow",
        tray_button: "#tray-button",
        progress_bar: "#progress-bar"
    };
    a.supersized.themeOptions = {
        progress_bar: 1,
        mouse_scrub: 0
    }
})(jQuery);
/*
 * Masonry PACKAGED v3.1.5
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
! function(a) {
    function b() {}

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function(e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                            k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l) return l
                            } else f("no such method '" + e + "' for " + b + " instance");
                        else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            };
            return a.bridget = function(a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c(a.jQuery)
}(window),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement,
        d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function() {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(this),
function(a) {
    function b(a) {
        "function" == typeof a && (b.isReady ? a() : f.push(a))
    }

    function c(a) {
        var c = "readystatechange" === a.type && "complete" !== e.readyState;
        if (!b.isReady && !c) {
            b.isReady = !0;
            for (var d = 0, g = f.length; g > d; d++) {
                var h = f[d];
                h()
            }
        }
    }

    function d(d) {
        return d.bind(e, "DOMContentLoaded", c), d.bind(e, "readystatechange", c), d.bind(a, "load", c), b
    }
    var e = a.document,
        f = [];
    b.isReady = !1, "function" == typeof define && define.amd ? (b.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], d)) : a.docReady = d(a.eventie)
}(this),
function() {
    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
}.call(this),
    function(a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function(a) {
        function b(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function c() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = g.length; c > b; b++) {
                var d = g[b];
                a[d] = 0
            }
            return a
        }

        function d(a) {
            function d(a) {
                if ("string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var d = f(a);
                    if ("none" === d.display) return c();
                    var e = {};
                    e.width = a.offsetWidth, e.height = a.offsetHeight;
                    for (var k = e.isBorderBox = !(!j || !d[j] || "border-box" !== d[j]), l = 0, m = g.length; m > l; l++) {
                        var n = g[l],
                            o = d[n];
                        o = h(a, o);
                        var p = parseFloat(o);
                        e[n] = isNaN(p) ? 0 : p
                    }
                    var q = e.paddingLeft + e.paddingRight,
                        r = e.paddingTop + e.paddingBottom,
                        s = e.marginLeft + e.marginRight,
                        t = e.marginTop + e.marginBottom,
                        u = e.borderLeftWidth + e.borderRightWidth,
                        v = e.borderTopWidth + e.borderBottomWidth,
                        w = k && i,
                        x = b(d.width);
                    x !== !1 && (e.width = x + (w ? 0 : q + u));
                    var y = b(d.height);
                    return y !== !1 && (e.height = y + (w ? 0 : r + v)), e.innerWidth = e.width - (q + u), e.innerHeight = e.height - (r + v), e.outerWidth = e.width + s, e.outerHeight = e.height + t, e
                }
            }

            function h(a, b) {
                if (e || -1 === b.indexOf("%")) return b;
                var c = a.style,
                    d = c.left,
                    f = a.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = a.currentStyle.left), c.left = b, b = c.pixelLeft, c.left = d, g && (f.left = g), b
            }
            var i, j = a("boxSizing");
            return function() {
                if (j) {
                    var a = document.createElement("div");
                    a.style.width = "200px", a.style.padding = "1px 2px 3px 4px", a.style.borderStyle = "solid", a.style.borderWidth = "1px 2px 3px 4px", a.style[j] = "border-box";
                    var c = document.body || document.documentElement;
                    c.appendChild(a);
                    var d = f(a);
                    i = 200 === b(d.width), c.removeChild(a)
                }
            }(), d
        }
        var e = a.getComputedStyle,
            f = e ? function(a) {
                return e(a, null)
            } : function(a) {
                return a.currentStyle
            },
            g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], d) : "object" == typeof exports ? module.exports = d(require("get-style-property")) : a.getSize = d(a.getStyleProperty)
    }(window),
    function(a, b) {
        function c(a, b) {
            return a[h](b)
        }

        function d(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function e(a, b) {
            d(a);
            for (var c = a.parentNode.querySelectorAll(b), e = 0, f = c.length; f > e; e++)
                if (c[e] === a) return !0;
            return !1
        }

        function f(a, b) {
            return d(a), c(a, b)
        }
        var g, h = function() {
            if (b.matchesSelector) return "matchesSelector";
            for (var a = ["webkit", "moz", "ms", "o"], c = 0, d = a.length; d > c; c++) {
                var e = a[c],
                    f = e + "MatchesSelector";
                if (b[f]) return f
            }
        }();
        if (h) {
            var i = document.createElement("div"),
                j = c(i, "div");
            g = j ? c : f
        } else g = e;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return g
        }) : window.matchesSelector = g
    }(this, Element.prototype),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function d(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }

        function e(a, e, f) {
            function h(a, b) {
                a && (this.element = a, this.layout = b, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var i = f("transition"),
                j = f("transform"),
                k = i && j,
                l = !!f("perspective"),
                m = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[i],
                n = ["transform", "transition", "transitionDuration", "transitionProperty"],
                o = function() {
                    for (var a = {}, b = 0, c = n.length; c > b; b++) {
                        var d = n[b],
                            e = f(d);
                        e && e !== d && (a[d] = e)
                    }
                    return a
                }();
            b(h.prototype, a.prototype), h.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, h.prototype.handleEvent = function(a) {
                var b = "on" + a.type;
                this[b] && this[b](a)
            }, h.prototype.getSize = function() {
                this.size = e(this.element)
            }, h.prototype.css = function(a) {
                var b = this.element.style;
                for (var c in a) {
                    var d = o[c] || c;
                    b[d] = a[c]
                }
            }, h.prototype.getPosition = function() {
                var a = g(this.element),
                    b = this.layout.options,
                    c = b.isOriginLeft,
                    d = b.isOriginTop,
                    e = parseInt(a[c ? "left" : "right"], 10),
                    f = parseInt(a[d ? "top" : "bottom"], 10);
                e = isNaN(e) ? 0 : e, f = isNaN(f) ? 0 : f;
                var h = this.layout.size;
                e -= c ? h.paddingLeft : h.paddingRight, f -= d ? h.paddingTop : h.paddingBottom, this.position.x = e, this.position.y = f
            }, h.prototype.layoutPosition = function() {
                var a = this.layout.size,
                    b = this.layout.options,
                    c = {};
                b.isOriginLeft ? (c.left = this.position.x + a.paddingLeft + "px", c.right = "") : (c.right = this.position.x + a.paddingRight + "px", c.left = ""), b.isOriginTop ? (c.top = this.position.y + a.paddingTop + "px", c.bottom = "") : (c.bottom = this.position.y + a.paddingBottom + "px", c.top = ""), this.css(c), this.emitEvent("layout", [this])
            };
            var p = l ? function(a, b) {
                return "translate3d(" + a + "px, " + b + "px, 0)"
            } : function(a, b) {
                return "translate(" + a + "px, " + b + "px)"
            };
            h.prototype._transitionTo = function(a, b) {
                this.getPosition();
                var c = this.position.x,
                    d = this.position.y,
                    e = parseInt(a, 10),
                    f = parseInt(b, 10),
                    g = e === this.position.x && f === this.position.y;
                if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
                var h = a - c,
                    i = b - d,
                    j = {},
                    k = this.layout.options;
                h = k.isOriginLeft ? h : -h, i = k.isOriginTop ? i : -i, j.transform = p(h, i), this.transition({
                    to: j,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, h.prototype.goTo = function(a, b) {
                this.setPosition(a, b), this.layoutPosition()
            }, h.prototype.moveTo = k ? h.prototype._transitionTo : h.prototype.goTo, h.prototype.setPosition = function(a, b) {
                this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
            }, h.prototype._nonTransition = function(a) {
                this.css(a.to), a.isCleaning && this._removeStyles(a.to);
                for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
            }, h.prototype._transition = function(a) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
                var b = this._transn;
                for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
                for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
                if (a.from) {
                    this.css(a.from);
                    var d = this.element.offsetHeight;
                    d = null
                }
                this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
            };
            var q = j && d(j) + ",opacity";
            h.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: q,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(m, this, !1))
            }, h.prototype.transition = h.prototype[i ? "_transition" : "_nonTransition"], h.prototype.onwebkitTransitionEnd = function(a) {
                this.ontransitionend(a)
            }, h.prototype.onotransitionend = function(a) {
                this.ontransitionend(a)
            };
            var r = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            h.prototype.ontransitionend = function(a) {
                if (a.target === this.element) {
                    var b = this._transn,
                        d = r[a.propertyName] || a.propertyName;
                    if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) {
                        var e = b.onEnd[d];
                        e.call(this), delete b.onEnd[d]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, h.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(m, this, !1), this.isTransitioning = !1
            }, h.prototype._removeStyles = function(a) {
                var b = {};
                for (var c in a) b[c] = "";
                this.css(b)
            };
            var s = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return h.prototype.removeTransitionStyles = function() {
                this.css(s)
            }, h.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, h.prototype.remove = function() {
                if (!i || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                var a = this;
                this.on("transitionEnd", function() {
                    return a.removeElem(), !0
                }), this.hide()
            }, h.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var a = this.layout.options;
                this.transition({
                    from: a.hiddenStyle,
                    to: a.visibleStyle,
                    isCleaning: !0
                })
            }, h.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var a = this.layout.options;
                this.transition({
                    from: a.visibleStyle,
                    to: a.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, h.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, h
        }
        var f = a.getComputedStyle,
            g = f ? function(a) {
                return f(a, null)
            } : function(a) {
                return a.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], e) : (a.Outlayer = {}, a.Outlayer.Item = e(a.EventEmitter, a.getSize, a.getStyleProperty))
    }(window),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a) {
            return "[object Array]" === l.call(a)
        }

        function d(a) {
            var b = [];
            if (c(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var d = 0, e = a.length; e > d; d++) b.push(a[d]);
            else b.push(a);
            return b
        }

        function e(a, b) {
            var c = n(b, a); - 1 !== c && b.splice(c, 1)
        }

        function f(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        }

        function g(c, g, l, n, o, p) {
            function q(a, c) {
                if ("string" == typeof a && (a = h.querySelector(a)), !a || !m(a)) return void(i && i.error("Bad " + this.constructor.namespace + " element: " + a));
                this.element = a, this.options = b({}, this.constructor.defaults), this.option(c);
                var d = ++r;
                this.element.outlayerGUID = d, s[d] = this, this._create(), this.options.isInitLayout && this.layout()
            }
            var r = 0,
                s = {};
            return q.namespace = "outlayer", q.Item = p, q.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, b(q.prototype, l.prototype), q.prototype.option = function(a) {
                b(this.options, a)
            }, q.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), b(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, q.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, q.prototype._itemize = function(a) {
                for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                    var g = b[e],
                        h = new c(g, this);
                    d.push(h)
                }
                return d
            }, q.prototype._filterFindItemElements = function(a) {
                a = d(a);
                for (var b = this.options.itemSelector, c = [], e = 0, f = a.length; f > e; e++) {
                    var g = a[e];
                    if (m(g))
                        if (b) {
                            o(g, b) && c.push(g);
                            for (var h = g.querySelectorAll(b), i = 0, j = h.length; j > i; i++) c.push(h[i])
                        } else c.push(g)
                }
                return c
            }, q.prototype.getItemElements = function() {
                for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
                return a
            }, q.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, a), this._isLayoutInited = !0
            }, q.prototype._init = q.prototype.layout, q.prototype._resetLayout = function() {
                this.getSize()
            }, q.prototype.getSize = function() {
                this.size = n(this.element)
            }, q.prototype._getMeasurement = function(a, b) {
                var c, d = this.options[a];
                d ? ("string" == typeof d ? c = this.element.querySelector(d) : m(d) && (c = d), this[a] = c ? n(c)[b] : d) : this[a] = 0
            }, q.prototype.layoutItems = function(a, b) {
                a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
            }, q.prototype._getItemsForLayout = function(a) {
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    e.isIgnored || b.push(e)
                }
                return b
            }, q.prototype._layoutItems = function(a, b) {
                function c() {
                    d.emitEvent("layoutComplete", [d, a])
                }
                var d = this;
                if (!a || !a.length) return void c();
                this._itemsOn(a, "layout", c);
                for (var e = [], f = 0, g = a.length; g > f; f++) {
                    var h = a[f],
                        i = this._getItemLayoutPosition(h);
                    i.item = h, i.isInstant = b || h.isLayoutInstant, e.push(i)
                }
                this._processLayoutQueue(e)
            }, q.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, q.prototype._processLayoutQueue = function(a) {
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this._positionItem(d.item, d.x, d.y, d.isInstant)
                }
            }, q.prototype._positionItem = function(a, b, c, d) {
                d ? a.goTo(b, c) : a.moveTo(b, c)
            }, q.prototype._postLayout = function() {
                this.resizeContainer()
            }, q.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var a = this._getContainerSize();
                    a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
                }
            }, q.prototype._getContainerSize = k, q.prototype._setContainerMeasure = function(a, b) {
                if (void 0 !== a) {
                    var c = this.size;
                    c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
                }
            }, q.prototype._itemsOn = function(a, b, c) {
                function d() {
                    return e++, e === f && c.call(g), !0
                }
                for (var e = 0, f = a.length, g = this, h = 0, i = a.length; i > h; h++) {
                    var j = a[h];
                    j.on(b, d)
                }
            }, q.prototype.ignore = function(a) {
                var b = this.getItem(a);
                b && (b.isIgnored = !0)
            }, q.prototype.unignore = function(a) {
                var b = this.getItem(a);
                b && delete b.isIgnored
            }, q.prototype.stamp = function(a) {
                if (a = this._find(a)) {
                    this.stamps = this.stamps.concat(a);
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        this.ignore(d)
                    }
                }
            }, q.prototype.unstamp = function(a) {
                if (a = this._find(a))
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        e(d, this.stamps), this.unignore(d)
                    }
            }, q.prototype._find = function(a) {
                return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d(a)) : void 0
            }, q.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var a = 0, b = this.stamps.length; b > a; a++) {
                        var c = this.stamps[a];
                        this._manageStamp(c)
                    }
                }
            }, q.prototype._getBoundingRect = function() {
                var a = this.element.getBoundingClientRect(),
                    b = this.size;
                this._boundingRect = {
                    left: a.left + b.paddingLeft + b.borderLeftWidth,
                    top: a.top + b.paddingTop + b.borderTopWidth,
                    right: a.right - (b.paddingRight + b.borderRightWidth),
                    bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
                }
            }, q.prototype._manageStamp = k, q.prototype._getElementOffset = function(a) {
                var b = a.getBoundingClientRect(),
                    c = this._boundingRect,
                    d = n(a),
                    e = {
                        left: b.left - c.left - d.marginLeft,
                        top: b.top - c.top - d.marginTop,
                        right: c.right - b.right - d.marginRight,
                        bottom: c.bottom - b.bottom - d.marginBottom
                    };
                return e
            }, q.prototype.handleEvent = function(a) {
                var b = "on" + a.type;
                this[b] && this[b](a)
            }, q.prototype.bindResize = function() {
                this.isResizeBound || (c.bind(a, "resize", this), this.isResizeBound = !0)
            }, q.prototype.unbindResize = function() {
                this.isResizeBound && c.unbind(a, "resize", this), this.isResizeBound = !1
            }, q.prototype.onresize = function() {
                function a() {
                    b.resize(), delete b.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var b = this;
                this.resizeTimeout = setTimeout(a, 100)
            }, q.prototype.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, q.prototype.needsResizeLayout = function() {
                var a = n(this.element),
                    b = this.size && a;
                return b && a.innerWidth !== this.size.innerWidth
            }, q.prototype.addItems = function(a) {
                var b = this._itemize(a);
                return b.length && (this.items = this.items.concat(b)), b
            }, q.prototype.appended = function(a) {
                var b = this.addItems(a);
                b.length && (this.layoutItems(b, !0), this.reveal(b))
            }, q.prototype.prepended = function(a) {
                var b = this._itemize(a);
                if (b.length) {
                    var c = this.items.slice(0);
                    this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
                }
            }, q.prototype.reveal = function(a) {
                var b = a && a.length;
                if (b)
                    for (var c = 0; b > c; c++) {
                        var d = a[c];
                        d.reveal()
                    }
            }, q.prototype.hide = function(a) {
                var b = a && a.length;
                if (b)
                    for (var c = 0; b > c; c++) {
                        var d = a[c];
                        d.hide()
                    }
            }, q.prototype.getItem = function(a) {
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    if (d.element === a) return d
                }
            }, q.prototype.getItems = function(a) {
                if (a && a.length) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) {
                        var e = a[c],
                            f = this.getItem(e);
                        f && b.push(f)
                    }
                    return b
                }
            }, q.prototype.remove = function(a) {
                a = d(a);
                var b = this.getItems(a);
                if (b && b.length) {
                    this._itemsOn(b, "remove", function() {
                        this.emitEvent("removeComplete", [this, b])
                    });
                    for (var c = 0, f = b.length; f > c; c++) {
                        var g = b[c];
                        g.remove(), e(g, this.items)
                    }
                }
            }, q.prototype.destroy = function() {
                var a = this.element.style;
                a.height = "", a.position = "", a.width = "";
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    d.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID, j && j.removeData(this.element, this.constructor.namespace)
            }, q.data = function(a) {
                var b = a && a.outlayerGUID;
                return b && s[b]
            }, q.create = function(a, c) {
                function d() {
                    q.apply(this, arguments)
                }
                return Object.create ? d.prototype = Object.create(q.prototype) : b(d.prototype, q.prototype), d.prototype.constructor = d, d.defaults = b({}, q.defaults), b(d.defaults, c), d.prototype.settings = {}, d.namespace = a, d.data = q.data, d.Item = function() {
                    p.apply(this, arguments)
                }, d.Item.prototype = new p, g(function() {
                    for (var b = f(a), c = h.querySelectorAll(".js-" + b), e = "data-" + b + "-options", g = 0, k = c.length; k > g; g++) {
                        var l, m = c[g],
                            n = m.getAttribute(e);
                        try {
                            l = n && JSON.parse(n)
                        } catch (o) {
                            i && i.error("Error parsing " + e + " on " + m.nodeName.toLowerCase() + (m.id ? "#" + m.id : "") + ": " + o);
                            continue
                        }
                        var p = new d(m, l);
                        j && j.data(m, a, p)
                    }
                }), j && j.bridget && j.bridget(a, d), d
            }, q.Item = p, q
        }
        var h = a.document,
            i = a.console,
            j = a.jQuery,
            k = function() {},
            l = Object.prototype.toString,
            m = "object" == typeof HTMLElement ? function(a) {
                return a instanceof HTMLElement
            } : function(a) {
                return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName
            },
            n = Array.prototype.indexOf ? function(a, b) {
                return a.indexOf(b)
            } : function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], g) : a.Outlayer = g(a.eventie, a.docReady, a.EventEmitter, a.getSize, a.matchesSelector, a.Outlayer.Item)
    }(window),
    function(a) {
        function b(a, b) {
            var d = a.create("masonry");
            return d.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var a = this.cols;
                for (this.colYs = []; a--;) this.colYs.push(0);
                this.maxY = 0
            }, d.prototype.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var a = this.items[0],
                        c = a && a.element;
                    this.columnWidth = c && b(c).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, d.prototype.getContainerWidth = function() {
                var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                    c = b(a);
                this.containerWidth = c && c.innerWidth
            }, d.prototype._getItemLayoutPosition = function(a) {
                a.getSize();
                var b = a.size.outerWidth % this.columnWidth,
                    d = b && 1 > b ? "round" : "ceil",
                    e = Math[d](a.size.outerWidth / this.columnWidth);
                e = Math.min(e, this.cols);
                for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c(f, g), i = {
                        x: this.columnWidth * h,
                        y: g
                    }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
                return i
            }, d.prototype._getColGroup = function(a) {
                if (2 > a) return this.colYs;
                for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                    var e = this.colYs.slice(d, d + a);
                    b[d] = Math.max.apply(Math, e)
                }
                return b
            }, d.prototype._manageStamp = function(a) {
                var c = b(a),
                    d = this._getElementOffset(a),
                    e = this.options.isOriginLeft ? d.left : d.right,
                    f = e + c.outerWidth,
                    g = Math.floor(e / this.columnWidth);
                g = Math.max(0, g);
                var h = Math.floor(f / this.columnWidth);
                h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
                for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
            }, d.prototype._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var a = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
            }, d.prototype._getContainerFitWidth = function() {
                for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
                return (this.cols - a) * this.columnWidth - this.gutter
            }, d.prototype.needsResizeLayout = function() {
                var a = this.containerWidth;
                return this.getContainerWidth(), a !== this.containerWidth
            }, d
        }
        var c = Array.prototype.indexOf ? function(a, b) {
            return a.indexOf(b)
        } : function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                if (e === b) return c
            }
            return -1
        };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], b) : a.Masonry = b(a.Outlayer, a.getSize)
    }(window);
/*
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this
    }, i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function(e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return r.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function(e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" === d.call(e)
        }

        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function f(e) {
            this.img = e
        }

        function c(e) {
            this.src = e, v[e] = this
        }
        var a = e.jQuery,
            u = e.console,
            h = u !== void 0,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                var i = n.nodeType;
                if (i && (1 === i || 9 === i || 11 === i))
                    for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var f = r[o];
                        this.addImage(f)
                    }
            }
        }, s.prototype.addImage = function(e) {
            var t = new f(e);
            this.images.push(t)
        }, s.prototype.check = function() {
            function e(e, r) {
                return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
            for (var r = 0; i > r; r++) {
                var o = this.images[r];
                o.on("confirm", e), o.check()
            }
        }, s.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, s.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, a && (a.fn.imagesLoaded = function(e, t) {
            var n = new s(this, e, t);
            return n.jqDeferred.promise(a(this))
        }), f.prototype = new t, f.prototype.check = function() {
            var e = v[this.img.src] || new c(this.img.src);
            if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this;
            e.on("confirm", function(e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, f.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var v = {};
        return c.prototype = new t, c.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, c.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, c.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, c.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, c.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, c.prototype.unbindProxyEvents = function(e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, s
    });
/*
 * writeCapture.js v1.0.5
 *
 * @author noah <noah.sloan@gmail.com>
 * 
 */
(function(H, a) {
    var j = a.document;

    function C(Q) {
        var ac = j.createElement("div");
        j.body.insertBefore(ac, null);
        H.replaceWith(ac, '<script type="text/javascript">' + Q + "<\/script>")
    }
    H = H || (function(Q) {
        return {
            ajax: Q.ajax,
            $: function(ac) {
                return Q(ac)[0]
            },
            replaceWith: function(ac, ag) {
                var af = Q(ac)[0];
                var ae = af.nextSibling,
                    ad = af.parentNode;
                Q(af).remove();
                if (ae) {
                    Q(ae).before(ag)
                } else {
                    Q(ad).append(ag)
                }
            },
            onLoad: function(ac) {
                Q(ac)
            },
            copyAttrs: function(ai, ae) {
                var ag = Q(ae),
                    ad = ai.attributes;
                for (var af = 0, ac = ad.length; af < ac; af++) {
                    if (ad[af] && ad[af].value) {
                        try {
                            ag.attr(ad[af].name, ad[af].value)
                        } catch (ah) {}
                    }
                }
            }
        }
    })(a.jQuery);
    H.copyAttrs = H.copyAttrs || function() {};
    H.onLoad = H.onLoad || function() {
        throw "error: autoAsync cannot be used without jQuery or defining writeCaptureSupport.onLoad"
    };

    function T(ae, ad) {
        for (var ac = 0, Q = ae.length; ac < Q; ac++) {
            if (ad(ae[ac]) === false) {
                return
            }
        }
    }

    function w(Q) {
        return Object.prototype.toString.call(Q) === "[object Function]"
    }

    function q(Q) {
        return Object.prototype.toString.call(Q) === "[object String]"
    }

    function v(ad, ac, Q) {
        return Array.prototype.slice.call(ad, ac || 0, Q || ad && ad.length)
    }

    function G(ae, ad) {
        var Q = false;
        T(ae, ac);

        function ac(af) {
            return !(Q = ad(af))
        }
        return Q
    }

    function O(Q) {
        this._queue = [];
        this._children = [];
        this._parent = Q;
        if (Q) {
            Q._addChild(this)
        }
    }
    O.prototype = {
        _addChild: function(Q) {
            this._children.push(Q)
        },
        push: function(Q) {
            this._queue.push(Q);
            this._bubble("_doRun")
        },
        pause: function() {
            this._bubble("_doPause")
        },
        resume: function() {
            this._bubble("_doResume")
        },
        _bubble: function(ac) {
            var Q = this;
            while (!Q[ac]) {
                Q = Q._parent
            }
            return Q[ac]()
        },
        _next: function() {
            if (G(this._children, Q)) {
                return true
            }

            function Q(ad) {
                return ad._next()
            }
            var ac = this._queue.shift();
            if (ac) {
                ac()
            }
            return !!ac
        }
    };

    function i(Q) {
        if (Q) {
            return new O(Q)
        }
        O.call(this);
        this.paused = 0
    }
    i.prototype = (function() {
        function Q() {}
        Q.prototype = O.prototype;
        return new Q()
    })();
    i.prototype._doRun = function() {
        if (!this.running) {
            this.running = true;
            try {
                while (this.paused < 1 && this._next()) {}
            } finally {
                this.running = false
            }
        }
    };
    i.prototype._doPause = function() {
        this.paused++
    };
    i.prototype._doResume = function() {
        this.paused--;
        this._doRun()
    };

    function P() {}
    P.prototype = {
        _html: "",
        open: function() {
            this._opened = true;
            if (this._delegate) {
                this._delegate.open()
            }
        },
        write: function(Q) {
            if (this._closed) {
                return
            }
            this._written = true;
            if (this._delegate) {
                this._delegate.write(Q)
            } else {
                this._html += Q
            }
        },
        writeln: function(Q) {
            this.write(Q + "\n")
        },
        close: function() {
            this._closed = true;
            if (this._delegate) {
                this._delegate.close()
            }
        },
        copyTo: function(Q) {
            this._delegate = Q;
            Q.foobar = true;
            if (this._opened) {
                Q.open()
            }
            if (this._written) {
                Q.write(this._html)
            }
            if (this._closed) {
                Q.close()
            }
        }
    };
    var e = (function() {
        var Q = {
            f: j.getElementById
        };
        try {
            Q.f.call(j, "abc");
            return true
        } catch (ac) {
            return false
        }
    })();

    function L(Q) {
        T(Q, function(ac) {
            var ad = j.getElementById(ac.id);
            if (!ad) {
                l("<proxyGetElementById - finish>", "no element in writen markup with id " + ac.id);
                return
            }
            T(ac.el.childNodes, function(ae) {
                ad.appendChild(ae)
            });
            if (ad.contentWindow) {
                a.setTimeout(function() {
                    ac.el.contentWindow.document.copyTo(ad.contentWindow.document)
                }, 1)
            }
            H.copyAttrs(ac.el, ad)
        })
    }

    function t(ac, Q) {
        if (Q && Q[ac] === false) {
            return false
        }
        return Q && Q[ac] || o[ac]
    }

    function z(ad, aq) {
        var ak = [],
            ai = t("proxyGetElementById", aq),
            al = t("forceLastScriptTag", aq),
            ap = t("writeOnGetElementById", aq),
            af = t("immediateWrites", aq),
            Q = {
                write: j.write,
                writeln: j.writeln,
                finish: function() {},
                out: ""
            };
        ad.state = Q;
        j.write = af ? aj : ao;
        j.writeln = af ? am : ac;
        if (ai || ap) {
            Q.getEl = j.getElementById;
            j.getElementById = ae;
            if (ap) {
                findEl = an
            } else {
                findEl = ag;
                Q.finish = function() {
                    L(ak)
                }
            }
        }
        if (al) {
            Q.getByTag = j.getElementsByTagName;
            j.getElementsByTagName = function(at) {
                var ar = v(e ? Q.getByTag.call(j, at) : Q.getByTag(at));
                if (at === "script") {
                    ar.push(H.$(ad.target))
                }
                return ar
            };
            var ah = Q.finish;
            Q.finish = function() {
                ah();
                j.getElementsByTagName = Q.getByTag
            }
        }

        function ao(ar) {
            Q.out += ar
        }

        function ac(ar) {
            Q.out += ar + "\n"
        }

        function aj(ar) {
            var at = H.$(ad.target);
            var au = j.createElement("div");
            at.parentNode.insertBefore(au, at);
            H.replaceWith(au, U(ar))
        }

        function am(ar) {
            var at = H.$(ad.target);
            var au = j.createElement("div");
            at.parentNode.insertBefore(au, at);
            H.replaceWith(au, U(ar) + "\n")
        }

        function ag(at) {
            var ar = j.createElement("div");
            ak.push({
                id: at,
                el: ar
            });
            ar.contentWindow = {
                document: new P()
            };
            return ar
        }

        function an(au) {
            var ar = H.$(ad.target);
            var at = j.createElement("div");
            ar.parentNode.insertBefore(at, ar);
            H.replaceWith(at, Q.out);
            Q.out = "";
            return e ? Q.getEl.call(j, au) : Q.getEl(au)
        }

        function ae(at) {
            var ar = e ? Q.getEl.call(j, at) : Q.getEl(at);
            return ar || findEl(at)
        }
        return Q
    }

    function Y(Q) {
        j.write = Q.write;
        j.writeln = Q.writeln;
        if (Q.getEl) {
            j.getElementById = Q.getEl
        }
        return Q.out
    }

    function R(Q) {
        return Q && Q.replace(/^\s*<!(\[CDATA\[|--)/, "").replace(/(\]\]|--)>\s*$/, "")
    }

    function b() {}

    function d(ac, Q) {
        console.error("Error", Q, "executing code:", ac)
    }
    var l = w(a.console && console.error) ? d : b;

    function V(ad, ac, Q) {
        var ae = z(ac, Q);
        try {
            C(R(ad))
        } catch (af) {
            l(ad, af)
        } finally {
            Y(ae)
        }
        return ae
    }

    function S(ac) {
        var Q = /^(\w+:)?\/\/([^\/?#]+)/.exec(ac);
        return Q && (Q[1] && Q[1] != location.protocol || Q[2] != location.host)
    }

    function W(Q) {
        return new RegExp("[\\s\\r\\n]" + Q + "[\\s\\r\\n]*=[\\s\\r\\n]*(?:([\"'])([\\s\\S]*?)\\1|([^\\s>]+))", "i")
    }

    function k(Q) {
        var ac = W(Q);
        return function(ad) {
            var ae = ac.exec(ad) || [];
            return ae[2] || ae[3]
        }
    }
    var s = /(<script[^>]*>)([\s\S]*?)<\/script>/ig,
        E = /<script[^>]*\/>/ig,
        n = W("src"),
        aa = k("src"),
        r = k("type"),
        ab = k("language"),
        F = "__document_write_ajax_callbacks__",
        D = "__document_write_ajax_div-",
        g = "window['" + F + "']['%d']();",
        m = a[F] = {},
        y = '<script type="text/javascript">' + g + "<\/script>",
        K = 0;

    function c() {
        return (++K).toString()
    }

    function J(ac, ad) {
        var Q;
        if (w(ac)) {
            Q = ac;
            ac = null
        }
        ac = ac || {};
        Q = Q || ac && ac.done;
        ac.done = ad ? function() {
            ad(Q)
        } : Q;
        return ac
    }
    var B = new i();
    var A = [];
    var f = window._debugWriteCapture ? function() {} : function(Q, ad, ac) {
        A.push({
            type: Q,
            src: ad,
            data: ac
        })
    };
    var N = window._debugWriteCapture ? function() {} : function() {
        A.push(arguments)
    };

    function Z(Q) {
        var ac = c();
        m[ac] = function() {
            Q();
            delete m[ac]
        };
        return ac
    }

    function M(Q) {
        return y.replace(/%d/, Z(Q))
    }

    function U(ag, ak, ad, ai) {
        var ah = ad && new i(ad) || B;
        ak = J(ak);
        var af = t("done", ak);
        var Q = "";
        var ac = t("fixUrls", ak);
        if (!w(ac)) {
            ac = function(al) {
                return al
            }
        }
        if (w(af)) {
            Q = M(function() {
                ah.push(af)
            })
        }
        return ag.replace(s, aj).replace(E, ae) + Q;

        function ae(al) {
            return aj(al, al.substring(0, al.length - 2) + ">", "")
        }

        function aj(an, az, am) {
            var ar = aa(az),
                aq = r(az) || "",
                aG = ab(az) || "",
                aF = (!aq && !aG) || aq.toLowerCase().indexOf("javascript") !== -1 || aG.toLowerCase().indexOf("javascript") !== -1;
            f("replace", ar, an);
            if (!aF) {
                return an
            }
            var aA = Z(au),
                at = D + aA,
                ay, ap = {
                    target: "#" + at,
                    parent: ai
                };

            function au() {
                ah.push(ay)
            }
            if (ar) {
                ar = ac(ar);
                az = az.replace(n, "");
                if (S(ar)) {
                    ay = aE
                } else {
                    if (t("asyncAll", ak)) {
                        ay = aD()
                    } else {
                        ay = ax
                    }
                }
            } else {
                ay = aC
            }

            function aC() {
                al(am)
            }

            function ax() {
                H.ajax({
                    url: ar,
                    type: "GET",
                    dataType: "text",
                    async: false,
                    success: function(aH) {
                        al(aH)
                    }
                })
            }

            function ao(aJ, aH, aI) {
                l("<XHR for " + ar + ">", aI);
                ah.resume()
            }

            function av() {
                return M(function() {
                    ah.resume()
                })
            }

            function aD() {
                var aJ, aI;

                function aH(aL, aK) {
                    if (!aJ) {
                        aI = aL;
                        return
                    }
                    try {
                        al(aL, av())
                    } catch (aM) {
                        l(aL, aM)
                    }
                }
                H.ajax({
                    url: ar,
                    type: "GET",
                    dataType: "text",
                    async: true,
                    success: aH,
                    error: ao
                });
                return function() {
                    aJ = true;
                    if (aI) {
                        al(aI)
                    } else {
                        ah.pause()
                    }
                }
            }

            function aE(aH) {
                var aJ = z(ap, ak);
                ah.pause();
                f("pause", ar);
                p(ap.target, ar, aI);

                function aI(aM, aL, aK) {
                    f("out", ar, aJ.out);
                    aw(Y(aJ), M(aJ.finish) + av());
                    f("resume", ar)
                }
            }

            function al(aI, aH) {
                var aJ = V(aI, ap, ak);
                aH = M(aJ.finish) + (aH || "");
                aw(aJ.out, aH)
            }

            function aB(aH) {
                var aJ = {};
                for (var aI in aH) {
                    if (aH.hasOwnProperty(aI)) {
                        aJ[aI] = aH[aI]
                    }
                }
                delete aJ.done;
                return aJ
            }

            function aw(aI, aH) {
                H.replaceWith(ap.target, U(aI, aB(ak), ah, ap) + (aH || ""))
            }
            return '<div style="display: none" id="' + at + '"></div>' + az + g.replace(/%d/, aA) + "<\/script>"
        }
    }

    function p(af, ad, ag) {
        var ac = document.createElement("script");
        ac.src = ad;
        af = H.$(af);
        var Q = false,
            ae = af.parentNode;
        ac.onload = ac.onreadystatechange = function() {
            if (!Q && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                Q = true;
                ag();
                ac.onload = ac.onreadystatechange = null;
                ae.removeChild(ac)
            }
        };
        ae.insertBefore(ac, af)
    }

    function I(ac, ad) {
        var Q = B;
        T(ac, function(ae) {
            Q.push(af);

            function af() {
                ae.action(U(ae.html, ae.options, Q), ae)
            }
        });
        if (ad) {
            Q.push(ad)
        }
    }

    function X(Q) {
        var ac = Q;
        while (ac && ac.nodeType === 1) {
            Q = ac;
            ac = ac.lastChild;
            while (ac && ac.nodeType !== 1) {
                ac = ac.previousSibling
            }
        }
        return Q
    }

    function h(Q) {
        var ad = j.write,
            ag = j.writeln,
            ac, ae = [];
        j.writeln = function(ah) {
            j.write(ah + "\n")
        };
        var af;
        j.write = function(ai) {
            var ah = X(j.body);
            if (ah !== ac) {
                ac = ah;
                ae.push(af = {
                    el: ah,
                    out: []
                })
            }
            af.out.push(ai)
        };
        H.onLoad(function() {
            var ak, an, ai, am, al;
            Q = J(Q);
            al = Q.done;
            Q.done = function() {
                j.write = ad;
                j.writeln = ag;
                if (al) {
                    al()
                }
            };
            for (var aj = 0, ah = ae.length; aj < ah; aj++) {
                ak = ae[aj].el;
                an = j.createElement("div");
                ak.parentNode.insertBefore(an, ak.nextSibling);
                ai = ae[aj].out.join("");
                am = ah - aj === 1 ? U(ai, Q) : U(ai);
                H.replaceWith(an, am)
            }
        })
    }

    function x(ag) {
        var ah = document.getElementsByTagName("script"),
            an, ac, al, Q, ad, af, ae = 0,
            aj = ag ? M(function() {
                if (++ae >= ai.length) {
                    ag()
                }
            }) : "",
            ai = [];
        for (var ak = 0, am = ah.length; ak < am; ak++) {
            an = ah[ak];
            ad = an.getAttribute("extsrc");
            af = an.getAttribute("asyncsrc");
            if (ad || af) {
                ai.push({
                    ext: ad,
                    async: af,
                    s: an
                })
            }
        }
        for (ak = 0, am = ai.length; ak < am; ak++) {
            ac = ai[ak];
            if (ac.ext) {
                al = '<script type="text/javascript" src="' + ac.ext + '"> <\/script>';
                H.replaceWith(ac.s, U(al) + aj)
            } else {
                if (ac.async) {
                    al = '<script type="text/javascript" src="' + ac.async + '"> <\/script>';
                    H.replaceWith(ac.s, U(al, {
                        asyncAll: true
                    }, new i()) + aj)
                }
            }
        }
    }
    var u = "writeCapture";
    var o = a[u] = {
        _original: a[u],
        support: H,
        fixUrls: function(Q) {
            return Q.replace(/&amp;/g, "&")
        },
        noConflict: function() {
            a[u] = this._original;
            return this
        },
        debug: A,
        proxyGetElementById: false,
        _forTest: {
            Q: i,
            GLOBAL_Q: B,
            $: H,
            matchAttr: k,
            slice: v,
            capture: z,
            uncapture: Y,
            captureWrite: V
        },
        replaceWith: function(Q, ad, ac) {
            H.replaceWith(Q, U(ad, ac))
        },
        html: function(Q, ae, ac) {
            var ad = H.$(Q);
            ad.innerHTML = "<span/>";
            H.replaceWith(ad.firstChild, U(ae, ac))
        },
        load: function(Q, ad, ac) {
            H.ajax({
                url: ad,
                dataType: "text",
                type: "GET",
                success: function(ae) {
                    o.html(Q, ae, ac)
                }
            })
        },
        extsrc: x,
        autoAsync: h,
        sanitize: U,
        sanitizeSerial: I
    }
})(this.writeCaptureSupport, this);
(function(g, d, n) {
    var c = {
        html: h
    };
    g.each(["append", "prepend", "after", "before", "wrap", "wrapAll", "replaceWith", "wrapInner"], function() {
        c[this] = i(this)
    });

    function a(q) {
        return Object.prototype.toString.call(q) == "[object String]"
    }

    function p(u, t, s, r) {
        if (arguments.length == 0) {
            return o.call(this)
        }
        var q = c[u];
        if (u == "load") {
            return l.call(this, t, s, r)
        }
        if (!q) {
            j(u)
        }
        return b.call(this, t, s, q)
    }
    g.fn.writeCapture = p;
    var k = "__writeCaptureJsProxied-fghebd__";

    function o() {
        if (this[k]) {
            return this
        }
        var r = this;

        function q() {
            var t = this,
                s = false;
            this[k] = true;
            g.each(c, function(v) {
                var u = r[v];
                if (!u) {
                    return
                }
                t[v] = function(y, x, w) {
                    if (!s && a(y)) {
                        try {
                            s = true;
                            return p.call(t, v, y, x, w)
                        } finally {
                            s = false
                        }
                    }
                    return u.apply(t, arguments)
                }
            });
            this.pushStack = function() {
                return o.call(r.pushStack.apply(t, arguments))
            };
            this.endCapture = function() {
                return r
            }
        }
        q.prototype = r;
        return new q()
    }

    function b(t, s, u) {
        var q, r = this;
        if (s && s.done) {
            q = s.done;
            delete s.done
        } else {
            if (g.isFunction(s)) {
                q = s;
                s = null
            }
        }
        d.sanitizeSerial(g.map(this, function(v) {
            return {
                html: t,
                options: s,
                action: function(w) {
                    u.call(v, w)
                }
            }
        }), q && function() {
            q.call(r)
        } || q);
        return this
    }

    function h(q) {
        g(this).html(q)
    }

    function i(q) {
        return function(r) {
            g(this)[q](r)
        }
    }

    function l(t, s, v) {
        var r = this,
            q, u = t.indexOf(" ");
        if (u >= 0) {
            q = t.slice(u, t.length);
            t = t.slice(0, u)
        }
        if (g.isFunction(v)) {
            s = s || {};
            s.done = v
        }
        return g.ajax({
            url: t,
            type: s && s.type || "GET",
            dataType: "html",
            data: s && s.params,
            complete: f(r, s, q)
        })
    }

    function f(r, s, q) {
        return function(u, t) {
            if (t == "success" || t == "notmodified") {
                var v = m(u.responseText, q);
                b.call(r, v, s, h)
            }
        }
    }
    var e = /jquery-writeCapture-script-placeholder-(\d+)-wc/g;

    function m(s, r) {
        if (!r || !s) {
            return s
        }
        var t = 0,
            q = {};
        return g("<div/>").append(s.replace(/<script(.|\s)*?\/script>/g, function(u) {
            q[t] = u;
            return "jquery-writeCapture-script-placeholder-" + (t++) + "-wc"
        })).find(r).html().replace(e, function(u, v) {
            return q[v]
        })
    }

    function j(q) {
        throw "invalid method parameter " + q
    }
    g.writeCapture = d
})(jQuery, writeCapture.noConflict());
/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(aG) {
    var ay, aq, ap, aD, aj, aA, ai, ax, am, al, au = 0,
        aE = {},
        aw = [],
        av = 0,
        aF = {},
        az = [],
        ag = null,
        ao = new Image,
        ae = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
        k = /[^\.]\.(swf)\s*$/i,
        ad, ac = 1,
        an = 0,
        ar = "",
        at, aB, aC = false,
        ak = aG.extend(aG("<div/>")[0], {
            prop: 0
        }),
        ab = aG.browser.msie && aG.browser.version < 7 && !window.XMLHttpRequest,
        aa = function() {
            aq.hide();
            ao.onerror = ao.onload = null;
            ag && ag.abort();
            ay.empty()
        },
        R = function() {
            if (false === aE.onError(aw, au, aE)) {
                aq.hide();
                aC = false
            } else {
                aE.titleShow = false;
                aE.width = "auto";
                aE.height = "auto";
                ay.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
                ah()
            }
        },
        af = function() {
            var d = aw[au],
                j, f, e, i, h, b;
            aa();
            aE = aG.extend({}, aG.fn.fancybox.defaults, typeof aG(d).data("fancybox") == "undefined" ? aE : aG(d).data("fancybox"));
            b = aE.onStart(aw, au, aE);
            if (b === false) {
                aC = false
            } else {
                if (typeof b == "object") {
                    aE = aG.extend(aE, b)
                }
                e = aE.title || (d.nodeName ? aG(d).attr("title") : d.title) || "";
                if (d.nodeName && !aE.orig) {
                    aE.orig = aG(d).children("img:first").length ? aG(d).children("img:first") : aG(d)
                }
                if (e === "" && aE.orig && aE.titleFromAlt) {
                    e = aE.orig.attr("alt")
                }
                j = aE.href || (d.nodeName ? aG(d).attr("href") : d.href) || null;
                if (/^(?:javascript)/i.test(j) || j == "#") {
                    j = null
                }
                if (aE.type) {
                    f = aE.type;
                    if (!j) {
                        j = aE.content
                    }
                } else {
                    if (aE.content) {
                        f = "html"
                    } else {
                        if (j) {
                            f = j.match(ae) ? "image" : j.match(k) ? "swf" : aG(d).hasClass("iframe") ? "iframe" : j.indexOf("#") === 0 ? "inline" : "ajax"
                        }
                    }
                }
                if (f) {
                    if (f == "inline") {
                        d = j.substr(j.indexOf("#"));
                        f = aG(d).length > 0 ? "inline" : "ajax"
                    }
                    aE.type = f;
                    aE.href = j;
                    aE.title = e;
                    if (aE.autoDimensions) {
                        if (aE.type == "html" || aE.type == "inline" || aE.type == "ajax") {
                            aE.width = "auto";
                            aE.height = "auto"
                        } else {
                            aE.autoDimensions = false
                        }
                    }
                    if (aE.modal) {
                        aE.overlayShow = true;
                        aE.hideOnOverlayClick = false;
                        aE.hideOnContentClick = false;
                        aE.enableEscapeButton = false;
                        aE.showCloseButton = false
                    }
                    aE.padding = parseInt(aE.padding, 10);
                    aE.margin = parseInt(aE.margin, 10);
                    ay.css("padding", aE.padding + aE.margin);
                    aG(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function() {
                        aG(this).replaceWith(aA.children())
                    });
                    switch (f) {
                        case "html":
                            ay.html(aE.content);
                            ah();
                            break;
                        case "inline":
                            if (aG(d).parent().is("#fancybox-content") === true) {
                                aC = false;
                                break
                            }
                            aG('<div class="fancybox-inline-tmp" />').hide().insertBefore(aG(d)).bind("fancybox-cleanup", function() {
                                aG(this).replaceWith(aA.children())
                            }).bind("fancybox-cancel", function() {
                                aG(this).replaceWith(ay.children())
                            });
                            aG(d).appendTo(ay);
                            ah();
                            break;
                        case "image":
                            aC = false;
                            aG.fancybox.showActivity();
                            ao = new Image;
                            ao.onerror = function() {
                                R()
                            };
                            ao.onload = function() {
                                aC = true;
                                ao.onerror = ao.onload = null;
                                aE.width = ao.width;
                                aE.height = ao.height;
                                aG("<img />").attr({
                                    id: "fancybox-img",
                                    src: ao.src,
                                    alt: aE.title
                                }).appendTo(ay);
                                P()
                            };
                            ao.src = j;
                            break;
                        case "swf":
                            aE.scrolling = "no";
                            i = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + aE.width + '" height="' + aE.height + '"><param name="movie" value="' + j + '"></param>';
                            h = "";
                            aG.each(aE.swf, function(l, m) {
                                i += '<param name="' + l + '" value="' + m + '"></param>';
                                h += " " + l + '="' + m + '"'
                            });
                            i += '<embed src="' + j + '" type="application/x-shockwave-flash" width="' + aE.width + '" height="' + aE.height + '"' + h + "></embed></object>";
                            ay.html(i);
                            ah();
                            break;
                        case "ajax":
                            aC = false;
                            aG.fancybox.showActivity();
                            aE.ajax.win = aE.ajax.success;
                            ag = aG.ajax(aG.extend({}, aE.ajax, {
                                url: j,
                                data: aE.ajax.data || {},
                                error: function(l) {
                                    l.status > 0 && R()
                                },
                                success: function(l, m, n) {
                                    if ((typeof n == "object" ? n : ag).status == 200) {
                                        if (typeof aE.ajax.win == "function") {
                                            b = aE.ajax.win(j, l, m, n);
                                            if (b === false) {
                                                aq.hide();
                                                return
                                            } else {
                                                if (typeof b == "string" || typeof b == "object") {
                                                    l = b
                                                }
                                            }
                                        }
                                        ay.html(l);
                                        ah()
                                    }
                                }
                            }));
                            break;
                        case "iframe":
                            P()
                    }
                } else {
                    R()
                }
            }
        },
        ah = function() {
            var b = aE.width,
                d = aE.height;
            b = b.toString().indexOf("%") > -1 ? parseInt((aG(window).width() - aE.margin * 2) * parseFloat(b) / 100, 10) + "px" : b == "auto" ? "auto" : b + "px";
            d = d.toString().indexOf("%") > -1 ? parseInt((aG(window).height() - aE.margin * 2) * parseFloat(d) / 100, 10) + "px" : d == "auto" ? "auto" : d + "px";
            ay.wrapInner('<div style="width:' + b + ";height:" + d + ";overflow: " + (aE.scrolling == "auto" ? "auto" : aE.scrolling == "yes" ? "scroll" : "hidden") + ';position:relative;"></div>');
            aE.width = ay.width();
            aE.height = ay.height();
            P()
        },
        P = function() {
            var b, d;
            aq.hide();
            if (aD.is(":visible") && false === aF.onCleanup(az, av, aF)) {
                aG.event.trigger("fancybox-cancel");
                aC = false
            } else {
                aC = true;
                aG(aA.add(ap)).unbind();
                aG(window).unbind("resize.fb scroll.fb");
                aG(document).unbind("keydown.fb");
                aD.is(":visible") && aF.titlePosition !== "outside" && aD.css("height", aD.height());
                az = aw;
                av = au;
                aF = aE;
                if (aF.overlayShow) {
                    ap.css({
                        "background-color": aF.overlayColor,
                        opacity: aF.overlayOpacity,
                        cursor: aF.hideOnOverlayClick ? "pointer" : "auto",
                        height: aG(document).height()
                    });
                    if (!ap.is(":visible")) {
                        ab && aG("select:not(#fancybox-tmp select)").filter(function() {
                            return this.style.visibility !== "hidden"
                        }).css({
                            visibility: "hidden"
                        }).one("fancybox-cleanup", function() {
                            this.style.visibility = "inherit"
                        });
                        ap.show()
                    }
                } else {
                    ap.hide()
                }
                aB = g();
                ar = aF.title || "";
                an = 0;
                ax.empty().removeAttr("style").removeClass();
                if (aF.titleShow !== false) {
                    if (aG.isFunction(aF.titleFormat)) {
                        b = aF.titleFormat(ar, az, av, aF)
                    } else {
                        b = ar && ar.length ? aF.titlePosition == "float" ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + ar + '</td><td id="fancybox-title-float-right"></td></tr></table>' : '<div id="fancybox-title-' + aF.titlePosition + '">' + ar + "</div>" : false
                    }
                    ar = b;
                    if (!(!ar || ar === "")) {
                        ax.addClass("fancybox-title-" + aF.titlePosition).html(ar).appendTo("body").show();
                        switch (aF.titlePosition) {
                            case "inside":
                                ax.css({
                                    width: aB.width - aF.padding * 2,
                                    marginLeft: aF.padding,
                                    marginRight: aF.padding
                                });
                                an = ax.outerHeight(true);
                                ax.appendTo(aj);
                                aB.height += an;
                                break;
                            case "over":
                                ax.css({
                                    marginLeft: aF.padding,
                                    width: aB.width - aF.padding * 2,
                                    bottom: aF.padding
                                }).appendTo(aj);
                                break;
                            case "float":
                                ax.css("left", parseInt((ax.width() - aB.width - 40) / 2, 10) * -1).appendTo(aD);
                                break;
                            default:
                                ax.css({
                                    width: aB.width - aF.padding * 2,
                                    paddingLeft: aF.padding,
                                    paddingRight: aF.padding
                                }).appendTo(aD)
                        }
                    }
                }
                ax.hide();
                if (aD.is(":visible")) {
                    aG(ai.add(am).add(al)).hide();
                    b = aD.position();
                    at = {
                        top: b.top,
                        left: b.left,
                        width: aD.width(),
                        height: aD.height()
                    };
                    d = at.width == aB.width && at.height == aB.height;
                    aA.fadeTo(aF.changeFade, 0.3, function() {
                        var e = function() {
                            aA.html(ay.contents()).fadeTo(aF.changeFade, 1, H)
                        };
                        aG.event.trigger("fancybox-change");
                        aA.empty().removeAttr("filter").css({
                            "border-width": aF.padding,
                            width: aB.width - aF.padding * 2,
                            height: aE.autoDimensions ? "auto" : aB.height - an - aF.padding * 2
                        });
                        if (d) {
                            e()
                        } else {
                            ak.prop = 0;
                            aG(ak).animate({
                                prop: 1
                            }, {
                                duration: aF.changeSpeed,
                                easing: aF.easingChange,
                                step: C,
                                complete: e
                            })
                        }
                    })
                } else {
                    aD.removeAttr("style");
                    aA.css("border-width", aF.padding);
                    if (aF.transitionIn == "elastic") {
                        at = w();
                        aA.html(ay.contents());
                        aD.show();
                        if (aF.opacity) {
                            aB.opacity = 0
                        }
                        ak.prop = 0;
                        aG(ak).animate({
                            prop: 1
                        }, {
                            duration: aF.speedIn,
                            easing: aF.easingIn,
                            step: C,
                            complete: H
                        })
                    } else {
                        aF.titlePosition == "inside" && an > 0 && ax.show();
                        aA.css({
                            width: aB.width - aF.padding * 2,
                            height: aE.autoDimensions ? "auto" : aB.height - an - aF.padding * 2
                        }).html(ay.contents());
                        aD.css(aB).fadeIn(aF.transitionIn == "none" ? 0 : aF.speedIn, H)
                    }
                }
            }
        },
        c = function() {
            if (aF.enableEscapeButton || aF.enableKeyboardNav) {
                aG(document).bind("keydown.fb", function(b) {
                    if (b.keyCode == 27 && aF.enableEscapeButton) {
                        b.preventDefault();
                        aG.fancybox.close()
                    } else {
                        if ((b.keyCode == 37 || b.keyCode == 39) && aF.enableKeyboardNav && b.target.tagName !== "INPUT" && b.target.tagName !== "TEXTAREA" && b.target.tagName !== "SELECT") {
                            b.preventDefault();
                            aG.fancybox[b.keyCode == 37 ? "prev" : "next"]()
                        }
                    }
                })
            }
            if (aF.showNavArrows) {
                if (aF.cyclic && az.length > 1 || av !== 0) {
                    am.show()
                }
                if (aF.cyclic && az.length > 1 || av != az.length - 1) {
                    al.show()
                }
            } else {
                am.hide();
                al.hide()
            }
        },
        H = function() {
            if (!aG.support.opacity) {
                aA.get(0).style.removeAttribute("filter");
                aD.get(0).style.removeAttribute("filter")
            }
            aE.autoDimensions && aA.css("height", "auto");
            aD.css("height", "auto");
            ar && ar.length && ax.show();
            aF.showCloseButton && ai.show();
            c();
            aF.hideOnContentClick && aA.bind("click", aG.fancybox.close);
            aF.hideOnOverlayClick && ap.bind("click", aG.fancybox.close);
            aG(window).bind("resize.fb", aG.fancybox.resize);
            aF.centerOnScroll && aG(window).bind("scroll.fb", aG.fancybox.center);
            if (aF.type == "iframe") {
                aG('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + (aG.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + aE.scrolling + '" src="' + aF.href + '"></iframe>').appendTo(aA)
            }
            aD.show();
            aC = false;
            aG.fancybox.center();
            aF.onComplete(az, av, aF);
            var b, d;
            if (az.length - 1 > av) {
                b = az[av + 1].href;
                if (typeof b !== "undefined" && b.match(ae)) {
                    d = new Image;
                    d.src = b
                }
            }
            if (av > 0) {
                b = az[av - 1].href;
                if (typeof b !== "undefined" && b.match(ae)) {
                    d = new Image;
                    d.src = b
                }
            }
        },
        C = function(b) {
            var d = {
                width: parseInt(at.width + (aB.width - at.width) * b, 10),
                height: parseInt(at.height + (aB.height - at.height) * b, 10),
                top: parseInt(at.top + (aB.top - at.top) * b, 10),
                left: parseInt(at.left + (aB.left - at.left) * b, 10)
            };
            if (typeof aB.opacity !== "undefined") {
                d.opacity = b < 0.5 ? 0.5 : b
            }
            aD.css(d);
            aA.css({
                width: d.width - aF.padding * 2,
                height: d.height - an * b - aF.padding * 2
            })
        },
        x = function() {
            return [aG(window).width() - aF.margin * 2, aG(window).height() - aF.margin * 2, aG(document).scrollLeft() + aF.margin, aG(document).scrollTop() + aF.margin]
        },
        g = function() {
            var b = x(),
                f = {},
                e = aF.autoScale,
                d = aF.padding * 2;
            f.width = aF.width.toString().indexOf("%") > -1 ? parseInt(b[0] * parseFloat(aF.width) / 100, 10) : aF.width + d;
            f.height = aF.height.toString().indexOf("%") > -1 ? parseInt(b[1] * parseFloat(aF.height) / 100, 10) : aF.height + d;
            if (e && (f.width > b[0] || f.height > b[1])) {
                if (aE.type == "image" || aE.type == "swf") {
                    e = aF.width / aF.height;
                    if (f.width > b[0]) {
                        f.width = b[0];
                        f.height = parseInt((f.width - d) / e + d, 10)
                    }
                    if (f.height > b[1]) {
                        f.height = b[1];
                        f.width = parseInt((f.height - d) * e + d, 10)
                    }
                } else {
                    f.width = Math.min(f.width, b[0]);
                    f.height = Math.min(f.height, b[1])
                }
            }
            f.top = parseInt(Math.max(b[3] - 20, b[3] + (b[1] - f.height - 40) * 0.5), 10);
            f.left = parseInt(Math.max(b[2] - 20, b[2] + (b[0] - f.width - 40) * 0.5), 10);
            return f
        },
        w = function() {
            var b = aE.orig ? aG(aE.orig) : false,
                d = {};
            if (b && b.length) {
                d = b.offset();
                d.top += parseInt(b.css("paddingTop"), 10) || 0;
                d.left += parseInt(b.css("paddingLeft"), 10) || 0;
                d.top += parseInt(b.css("border-top-width"), 10) || 0;
                d.left += parseInt(b.css("border-left-width"), 10) || 0;
                d.width = b.width();
                d.height = b.height();
                d = {
                    width: d.width + aF.padding * 2,
                    height: d.height + aF.padding * 2,
                    top: d.top - aF.padding - 20,
                    left: d.left - aF.padding - 20
                }
            } else {
                b = x();
                d = {
                    width: aF.padding * 2,
                    height: aF.padding * 2,
                    top: parseInt(b[3] + b[1] * 0.5, 10),
                    left: parseInt(b[2] + b[0] * 0.5, 10)
                }
            }
            return d
        },
        a = function() {
            if (aq.is(":visible")) {
                aG("div", aq).css("top", ac * -40 + "px");
                ac = (ac + 1) % 12
            } else {
                clearInterval(ad)
            }
        };
    aG.fn.fancybox = function(b) {
        if (!aG(this).length) {
            return this
        }
        aG(this).data("fancybox", aG.extend({}, b, aG.metadata ? aG(this).metadata() : {})).unbind("click.fb").bind("click.fb", function(d) {
            d.preventDefault();
            if (!aC) {
                aC = true;
                aG(this).blur();
                aw = [];
                au = 0;
                d = aG(this).attr("rel") || "";
                if (!d || d == "" || d === "nofollow") {
                    aw.push(this)
                } else {
                    aw = aG("a[rel=" + d + "], area[rel=" + d + "]");
                    au = aw.index(this)
                }
                af()
            }
        });
        return this
    };
    aG.fancybox = function(b, h) {
        var e;
        if (!aC) {
            aC = true;
            e = typeof h !== "undefined" ? h : {};
            aw = [];
            au = parseInt(e.index, 10) || 0;
            if (aG.isArray(b)) {
                for (var d = 0, f = b.length; d < f; d++) {
                    if (typeof b[d] == "object") {
                        aG(b[d]).data("fancybox", aG.extend({}, e, b[d]))
                    } else {
                        b[d] = aG({}).data("fancybox", aG.extend({
                            content: b[d]
                        }, e))
                    }
                }
                aw = jQuery.merge(aw, b)
            } else {
                if (typeof b == "object") {
                    aG(b).data("fancybox", aG.extend({}, e, b))
                } else {
                    b = aG({}).data("fancybox", aG.extend({
                        content: b
                    }, e))
                }
                aw.push(b)
            }
            if (au > aw.length || au < 0) {
                au = 0
            }
            af()
        }
    };
    aG.fancybox.showActivity = function() {
        clearInterval(ad);
        aq.show();
        ad = setInterval(a, 66)
    };
    aG.fancybox.hideActivity = function() {
        aq.hide()
    };
    aG.fancybox.next = function() {
        return aG.fancybox.pos(av + 1)
    };
    aG.fancybox.prev = function() {
        return aG.fancybox.pos(av - 1)
    };
    aG.fancybox.pos = function(b) {
        if (!aC) {
            b = parseInt(b);
            aw = az;
            if (b > -1 && b < az.length) {
                au = b;
                af()
            } else {
                if (aF.cyclic && az.length > 1) {
                    au = b >= az.length ? 0 : az.length - 1;
                    af()
                }
            }
        }
    };
    aG.fancybox.cancel = function() {
        if (!aC) {
            aC = true;
            aG.event.trigger("fancybox-cancel");
            aa();
            aE.onCancel(aw, au, aE);
            aC = false
        }
    };
    aG.fancybox.close = function() {
        function b() {
            ap.fadeOut("fast");
            ax.empty().hide();
            aD.hide();
            aG.event.trigger("fancybox-cleanup");
            aA.empty();
            aF.onClosed(az, av, aF);
            az = aE = [];
            av = au = 0;
            aF = aE = {};
            aC = false
        }
        if (!(aC || aD.is(":hidden"))) {
            aC = true;
            if (aF && false === aF.onCleanup(az, av, aF)) {
                aC = false
            } else {
                aa();
                aG(ai.add(am).add(al)).hide();
                aG(aA.add(ap)).unbind();
                aG(window).unbind("resize.fb scroll.fb");
                aG(document).unbind("keydown.fb");
                aA.find("iframe").attr("src", ab && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank");
                aF.titlePosition !== "inside" && ax.empty();
                aD.stop();
                if (aF.transitionOut == "elastic") {
                    at = w();
                    var d = aD.position();
                    aB = {
                        top: d.top,
                        left: d.left,
                        width: aD.width(),
                        height: aD.height()
                    };
                    if (aF.opacity) {
                        aB.opacity = 1
                    }
                    ax.empty().hide();
                    ak.prop = 1;
                    aG(ak).animate({
                        prop: 0
                    }, {
                        duration: aF.speedOut,
                        easing: aF.easingOut,
                        step: C,
                        complete: b
                    })
                } else {
                    aD.fadeOut(aF.transitionOut == "none" ? 0 : aF.speedOut, b)
                }
            }
        }
    };
    aG.fancybox.resize = function() {
        ap.is(":visible") && ap.css("height", aG(document).height());
        aG.fancybox.center(true)
    };
    aG.fancybox.center = function(b) {
        var e, d;
        if (!aC) {
            d = b === true ? 1 : 0;
            e = x();
            !d && (aD.width() > e[0] || aD.height() > e[1]) || aD.stop().animate({
                top: parseInt(Math.max(e[3] - 20, e[3] + (e[1] - aA.height() - 40) * 0.5 - aF.padding)),
                left: parseInt(Math.max(e[2] - 20, e[2] + (e[0] - aA.width() - 40) * 0.5 - aF.padding))
            }, typeof b == "number" ? b : 200)
        }
    };
    aG.fancybox.init = function() {
        if (!aG("#fancybox-wrap").length) {
            aG("body").append(ay = aG('<div id="fancybox-tmp"></div>'), aq = aG('<div id="fancybox-loading"><div></div></div>'), ap = aG('<div id="fancybox-overlay"></div>'), aD = aG('<div id="fancybox-wrap"></div>'));
            aj = aG('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(aD);
            aj.append(aA = aG('<div id="fancybox-content"></div>'), ai = aG('<a id="fancybox-close"></a>'), ax = aG('<div id="fancybox-title"></div>'), am = aG('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), al = aG('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));
            ai.click(aG.fancybox.close);
            aq.click(aG.fancybox.cancel);
            am.click(function(b) {
                b.preventDefault();
                aG.fancybox.prev()
            });
            al.click(function(b) {
                b.preventDefault();
                aG.fancybox.next()
            });
            aG.fn.mousewheel && aD.bind("mousewheel.fb", function(b, d) {
                if (aC) {
                    b.preventDefault()
                } else {
                    if (aG(b.target).get(0).clientHeight == 0 || aG(b.target).get(0).scrollHeight === aG(b.target).get(0).clientHeight) {
                        b.preventDefault();
                        aG.fancybox[d > 0 ? "prev" : "next"]()
                    }
                }
            });
            aG.support.opacity || aD.addClass("fancybox-ie");
            if (ab) {
                aq.addClass("fancybox-ie6");
                aD.addClass("fancybox-ie6");
                aG('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(aj)
            }
        }
    };
    aG.fn.fancybox.defaults = {
        padding: 10,
        margin: 40,
        opacity: false,
        modal: false,
        cyclic: false,
        scrolling: "auto",
        width: 560,
        height: 340,
        autoScale: true,
        autoDimensions: true,
        centerOnScroll: false,
        ajax: {},
        swf: {
            wmode: "transparent"
        },
        hideOnOverlayClick: true,
        hideOnContentClick: false,
        overlayShow: true,
        overlayOpacity: 0.7,
        overlayColor: "#777",
        titleShow: true,
        titlePosition: "float",
        titleFormat: null,
        titleFromAlt: false,
        transitionIn: "fade",
        transitionOut: "fade",
        speedIn: 300,
        speedOut: 300,
        changeSpeed: 300,
        changeFade: "fast",
        easingIn: "swing",
        easingOut: "swing",
        showCloseButton: true,
        showNavArrows: true,
        enableEscapeButton: true,
        enableKeyboardNav: true,
        onStart: function() {},
        onCancel: function() {},
        onComplete: function() {},
        onCleanup: function() {},
        onClosed: function() {},
        onError: function() {}
    };
    aG(document).ready(function() {
        aG.fancybox.init()
    })
})(jQuery);
/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2012 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.7.2
 *
 */
(function(a) {
    a.fn.lazyload = function(b) {
        var c = {
            threshold: 0,
            failurelimit: 0,
            event: "scroll",
            effect: "show",
            container: window
        };
        if (b) {
            a.extend(c, b)
        }
        var d = this;
        if ("scroll" == c.event) {
            a(c.container).bind("scroll", function(g) {
                var e = 0;
                d.each(function() {
                    if (a.abovethetop(this, c) || a.leftofbegin(this, c)) {} else {
                        if (!a.belowthefold(this, c) && !a.rightoffold(this, c)) {
                            a(this).trigger("appear")
                        } else {
                            if (e++ > c.failurelimit) {
                                return false
                            }
                        }
                    }
                });
                var f = a.grep(d, function(h) {
                    return !h.loaded
                });
                d = a(f)
            })
        }
        this.each(function() {
            var e = this;
            if (undefined == a(e).attr("original")) {
                a(e).attr("original", a(e).attr("src"))
            }
            if ("scroll" != c.event || undefined == a(e).attr("src") || c.placeholder == a(e).attr("src") || (a.abovethetop(e, c) || a.leftofbegin(e, c) || a.belowthefold(e, c) || a.rightoffold(e, c))) {
                if (c.placeholder) {
                    a(e).attr("src", c.placeholder)
                } else {
                    a(e).removeAttr("src")
                }
                e.loaded = false
            } else {
                e.loaded = true
            }
            a(e).one("appear", function() {
                if (!this.loaded) {
                    a("<img />").bind("load", function() {
                        a(e).hide().attr("src", a(e).attr("original"))[c.effect](c.effectspeed);
                        e.loaded = true
                    }).attr("src", a(e).attr("original"))
                }
            });
            if ("scroll" != c.event) {
                a(e).bind(c.event, function(f) {
                    if (!e.loaded) {
                        a(e).trigger("appear")
                    }
                })
            }
        });
        a(c.container).trigger(c.event);
        return this
    };
    a.belowthefold = function(c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).height() + a(window).scrollTop()
        } else {
            var b = a(d.container).offset().top + a(d.container).height()
        }
        return b <= a(c).offset().top - d.threshold
    };
    a.rightoffold = function(c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).width() + a(window).scrollLeft()
        } else {
            var b = a(d.container).offset().left + a(d.container).width()
        }
        return b <= a(c).offset().left - d.threshold
    };
    a.abovethetop = function(c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).scrollTop()
        } else {
            var b = a(d.container).offset().top
        }
        return b >= a(c).offset().top + d.threshold + a(c).height()
    };
    a.leftofbegin = function(c, d) {
        if (d.container === undefined || d.container === window) {
            var b = a(window).scrollLeft()
        } else {
            var b = a(d.container).offset().left
        }
        return b >= a(c).offset().left + d.threshold + a(c).width()
    };
    a.extend(a.expr[":"], {
        "below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
    })
})(jQuery);
/*
 Zoom v1.7.13 - 2014-04-29
 Enlarge images on click or mouseover.
 (c) 2014 Jack Moore - http://www.jacklmoore.com/zoom
 license: http://www.opensource.org/licenses/mit-license.php
*/
(function(o) {
    var t = {
        url: !1,
        callback: !1,
        target: !1,
        duration: 120,
        on: "mouseover",
        touch: !0,
        onZoomIn: !1,
        onZoomOut: !1,
        magnify: 1
    };
    o.zoom = function(t, n, e, i) {
        var u, c, a, m, l, r, s, f = o(t).css("position"),
            h = o(n);
        return t.style.position = /(absolute|fixed)/.test(f) ? f : "relative", t.style.overflow = "hidden", e.style.width = e.style.height = "", o(e).addClass("zoomImg").css({
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            width: e.width * i,
            height: e.height * i,
            border: "none",
            maxWidth: "none",
            maxHeight: "none"
        }).appendTo(t), {
            init: function() {
                c = o(t).outerWidth(), u = o(t).outerHeight(), n === t ? (m = c, a = u) : (m = h.outerWidth(), a = h.outerHeight()), l = (e.width - c) / m, r = (e.height - u) / a, s = h.offset()
            },
            move: function(o) {
                var t = o.pageX - s.left,
                    n = o.pageY - s.top;
                n = Math.max(Math.min(n, a), 0), t = Math.max(Math.min(t, m), 0), e.style.left = t * -l + "px", e.style.top = n * -r + "px"
            }
        }
    }, o.fn.zoom = function(n) {
        return this.each(function() {
            var e, i = o.extend({}, t, n || {}),
                u = i.target || this,
                c = this,
                a = o(c),
                m = document.createElement("img"),
                l = o(m),
                r = "mousemove.zoom",
                s = !1,
                f = !1;
            (i.url || (e = a.find("img"), e[0] && (i.url = e.data("src") || e.attr("src")), i.url)) && (function() {
                var o = u.style.position,
                    t = u.style.overflow;
                a.one("zoom.destroy", function() {
                    a.off(".zoom"), u.style.position = o, u.style.overflow = t, l.remove()
                })
            }(), m.onload = function() {
                function t(t) {
                    e.init(), e.move(t), l.stop().fadeTo(o.support.opacity ? i.duration : 0, 1, o.isFunction(i.onZoomIn) ? i.onZoomIn.call(m) : !1)
                }

                function n() {
                    l.stop().fadeTo(i.duration, 0, o.isFunction(i.onZoomOut) ? i.onZoomOut.call(m) : !1)
                }
                var e = o.zoom(u, c, m, i.magnify);
                "grab" === i.on ? a.on("mousedown.zoom", function(i) {
                    1 === i.which && (o(document).one("mouseup.zoom", function() {
                        n(), o(document).off(r, e.move)
                    }), t(i), o(document).on(r, e.move), i.preventDefault())
                }) : "click" === i.on ? a.on("click.zoom", function(i) {
                    return s ? void 0 : (s = !0, t(i), o(document).on(r, e.move), o(document).one("click.zoom", function() {
                        n(), s = !1, o(document).off(r, e.move)
                    }), !1)
                }) : "toggle" === i.on ? a.on("click.zoom", function(o) {
                    s ? n() : t(o), s = !s
                }) : "mouseover" === i.on && (e.init(), a.on("mouseenter.zoom", t).on("mouseleave.zoom", n).on(r, e.move)), i.touch && a.on("touchstart.zoom", function(o) {
                    o.preventDefault(), f ? (f = !1, n()) : (f = !0, t(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0]))
                }).on("touchmove.zoom", function(o) {
                    o.preventDefault(), e.move(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0])
                }), o.isFunction(i.callback) && i.callback.call(m)
            }, m.src = i.url)
        })
    }, o.fn.zoom.defaults = t
})(window.jQuery);
/*
 * jQuery Color Animations v@VERSION
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: @DATE
 */
(function(o, d) {
    var k = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        h = /^([\-+])=\s*(\d+\.?\d*)/,
        g = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(p) {
                return [p[1], p[2], p[3], p[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(p) {
                return [p[1] * 2.55, p[2] * 2.55, p[3] * 2.55, p[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(p) {
                return [parseInt(p[1], 16), parseInt(p[2], 16), parseInt(p[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(p) {
                return [parseInt(p[1] + p[1], 16), parseInt(p[2] + p[2], 16), parseInt(p[3] + p[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(p) {
                return [p[1], p[2] / 100, p[3] / 100, p[4]]
            }
        }],
        e = o.Color = function(q, r, p, s) {
            return new o.Color.fn.parse(q, r, p, s)
        },
        j = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        },
        n = {
            "byte": {
                floor: true,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: true
            }
        },
        m = e.support = {},
        b = o("<p>")[0],
        a, l = o.each;
    b.style.cssText = "background-color:rgba(1,1,1,.5)";
    m.rgba = b.style.backgroundColor.indexOf("rgba") > -1;
    l(j, function(p, q) {
        q.cache = "_" + p;
        q.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        }
    });

    function i(q, s, r) {
        var p = n[s.type] || {};
        if (q == null) {
            return (r || !s.def) ? null : s.def
        }
        q = p.floor ? ~~q : parseFloat(q);
        if (isNaN(q)) {
            return s.def
        }
        if (p.mod) {
            return (q + p.mod) % p.mod
        }
        return 0 > q ? 0 : p.max < q ? p.max : q
    }

    function f(p) {
        var r = e(),
            q = r._rgba = [];
        p = p.toLowerCase();
        l(g, function(w, x) {
            var u, v = x.re.exec(p),
                t = v && x.parse(v),
                s = x.space || "rgba";
            if (t) {
                u = r[s](t);
                r[j[s].cache] = u[j[s].cache];
                q = r._rgba = u._rgba;
                return false
            }
        });
        if (q.length) {
            if (q.join() === "0,0,0,0") {
                o.extend(q, a.transparent)
            }
            return r
        }
        return a[p]
    }
    e.fn = o.extend(e.prototype, {
        parse: function(v, t, p, u) {
            if (v === d) {
                this._rgba = [null, null, null, null];
                return this
            }
            if (v.jquery || v.nodeType) {
                v = o(v).css(t);
                t = d
            }
            var s = this,
                r = o.type(v),
                q = this._rgba = [];
            if (t !== d) {
                v = [v, t, p, u];
                r = "array"
            }
            if (r === "string") {
                return this.parse(f(v) || a._default)
            }
            if (r === "array") {
                l(j.rgba.props, function(w, x) {
                    q[x.idx] = i(v[x.idx], x)
                });
                return this
            }
            if (r === "object") {
                if (v instanceof e) {
                    l(j, function(w, x) {
                        if (v[x.cache]) {
                            s[x.cache] = v[x.cache].slice()
                        }
                    })
                } else {
                    l(j, function(x, y) {
                        var w = y.cache;
                        l(y.props, function(z, A) {
                            if (!s[w] && y.to) {
                                if (z === "alpha" || v[z] == null) {
                                    return
                                }
                                s[w] = y.to(s._rgba)
                            }
                            s[w][A.idx] = i(v[z], A, true)
                        });
                        if (s[w] && o.inArray(null, s[w].slice(0, 3)) < 0) {
                            s[w][3] = 1;
                            if (y.from) {
                                s._rgba = y.from(s[w])
                            }
                        }
                    })
                }
                return this
            }
        },
        is: function(r) {
            var p = e(r),
                s = true,
                q = this;
            l(j, function(t, v) {
                var w, u = p[v.cache];
                if (u) {
                    w = q[v.cache] || v.to && v.to(q._rgba) || [];
                    l(v.props, function(x, y) {
                        if (u[y.idx] != null) {
                            s = (u[y.idx] === w[y.idx]);
                            return s
                        }
                    })
                }
                return s
            });
            return s
        },
        _space: function() {
            var p = [],
                q = this;
            l(j, function(r, s) {
                if (q[s.cache]) {
                    p.push(r)
                }
            });
            return p.pop()
        },
        transition: function(q, w) {
            var r = e(q),
                s = r._space(),
                t = j[s],
                u = this.alpha() === 0 ? e("transparent") : this,
                v = u[t.cache] || t.to(u._rgba),
                p = v.slice();
            r = r[t.cache];
            l(t.props, function(A, C) {
                var z = C.idx,
                    y = v[z],
                    x = r[z],
                    B = n[C.type] || {};
                if (x === null) {
                    return
                }
                if (y === null) {
                    p[z] = x
                } else {
                    if (B.mod) {
                        if (x - y > B.mod / 2) {
                            y += B.mod
                        } else {
                            if (y - x > B.mod / 2) {
                                y -= B.mod
                            }
                        }
                    }
                    p[z] = i((x - y) * w + y, C)
                }
            });
            return this[s](p)
        },
        blend: function(s) {
            if (this._rgba[3] === 1) {
                return this
            }
            var r = this._rgba.slice(),
                q = r.pop(),
                p = e(s)._rgba;
            return e(o.map(r, function(t, u) {
                return (1 - q) * p[u] + q * t
            }))
        },
        toRgbaString: function() {
            var q = "rgba(",
                p = o.map(this._rgba, function(r, s) {
                    return r == null ? (s > 2 ? 1 : 0) : r
                });
            if (p[3] === 1) {
                p.pop();
                q = "rgb("
            }
            return q + p.join() + ")"
        },
        toHslaString: function() {
            var q = "hsla(",
                p = o.map(this.hsla(), function(r, s) {
                    if (r == null) {
                        r = s > 2 ? 1 : 0
                    }
                    if (s && s < 3) {
                        r = Math.round(r * 100) + "%"
                    }
                    return r
                });
            if (p[3] === 1) {
                p.pop();
                q = "hsl("
            }
            return q + p.join() + ")"
        },
        toHexString: function(p) {
            var q = this._rgba.slice(),
                r = q.pop();
            if (p) {
                q.push(~~(r * 255))
            }
            return "#" + o.map(q, function(s) {
                s = (s || 0).toString(16);
                return s.length === 1 ? "0" + s : s
            }).join("")
        },
        toString: function() {
            return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
        }
    });
    e.fn.parse.prototype = e.fn;

    function c(t, s, r) {
        r = (r + 1) % 1;
        if (r * 6 < 1) {
            return t + (s - t) * r * 6
        }
        if (r * 2 < 1) {
            return s
        }
        if (r * 3 < 2) {
            return t + (s - t) * ((2 / 3) - r) * 6
        }
        return t
    }
    j.hsla.to = function(t) {
        if (t[0] == null || t[1] == null || t[2] == null) {
            return [null, null, null, t[3]]
        }
        var p = t[0] / 255,
            w = t[1] / 255,
            x = t[2] / 255,
            z = t[3],
            y = Math.max(p, w, x),
            u = Math.min(p, w, x),
            A = y - u,
            B = y + u,
            q = B * 0.5,
            v, C;
        if (u === y) {
            v = 0
        } else {
            if (p === y) {
                v = (60 * (w - x) / A) + 360
            } else {
                if (w === y) {
                    v = (60 * (x - p) / A) + 120
                } else {
                    v = (60 * (p - w) / A) + 240
                }
            }
        }
        if (A === 0) {
            C = 0
        } else {
            if (q <= 0.5) {
                C = A / B
            } else {
                C = A / (2 - B)
            }
        }
        return [Math.round(v) % 360, C, q, z == null ? 1 : z]
    };
    j.hsla.from = function(w) {
        if (w[0] == null || w[1] == null || w[2] == null) {
            return [null, null, null, w[3]]
        }
        var v = w[0] / 360,
            u = w[1],
            t = w[2],
            r = w[3],
            x = t <= 0.5 ? t * (1 + u) : t + u - t * u,
            y = 2 * t - x;
        return [Math.round(c(y, x, v + (1 / 3)) * 255), Math.round(c(y, x, v) * 255), Math.round(c(y, x, v - (1 / 3)) * 255), r]
    };
    l(j, function(q, s) {
        var r = s.props,
            p = s.cache,
            u = s.to,
            t = s.from;
        e.fn[q] = function(z) {
            if (u && !this[p]) {
                this[p] = u(this._rgba)
            }
            if (z === d) {
                return this[p].slice()
            }
            var w, y = o.type(z),
                v = (y === "array" || y === "object") ? z : arguments,
                x = this[p].slice();
            l(r, function(A, C) {
                var B = v[y === "object" ? A : C.idx];
                if (B == null) {
                    B = x[C.idx]
                }
                x[C.idx] = i(B, C)
            });
            if (t) {
                w = e(t(x));
                w[p] = x;
                return w
            } else {
                return e(x)
            }
        };
        l(r, function(v, w) {
            if (e.fn[v]) {
                return
            }
            e.fn[v] = function(A) {
                var C = o.type(A),
                    z = (v === "alpha" ? (this._hsla ? "hsla" : "rgba") : q),
                    y = this[z](),
                    B = y[w.idx],
                    x;
                if (C === "undefined") {
                    return B
                }
                if (C === "function") {
                    A = A.call(this, B);
                    C = o.type(A)
                }
                if (A == null && w.empty) {
                    return this
                }
                if (C === "string") {
                    x = h.exec(A);
                    if (x) {
                        A = B + parseFloat(x[2]) * (x[1] === "+" ? 1 : -1)
                    }
                }
                y[w.idx] = A;
                return this[z](y)
            }
        })
    });
    e.hook = function(q) {
        var p = q.split(" ");
        l(p, function(r, s) {
            o.cssHooks[s] = {
                set: function(w, x) {
                    var u, v, t = "";
                    if (x !== "transparent" && (o.type(x) !== "string" || (u = f(x)))) {
                        x = e(u || x);
                        if (!m.rgba && x._rgba[3] !== 1) {
                            v = s === "backgroundColor" ? w.parentNode : w;
                            while ((t === "" || t === "transparent") && v && v.style) {
                                try {
                                    t = o.css(v, "backgroundColor");
                                    v = v.parentNode
                                } catch (y) {}
                            }
                            x = x.blend(t && t !== "transparent" ? t : "_default")
                        }
                        x = x.toRgbaString()
                    }
                    try {
                        w.style[s] = x
                    } catch (y) {}
                }
            };
            o.fx.step[s] = function(t) {
                if (!t.colorInit) {
                    t.start = e(t.elem, s);
                    t.end = e(t.end);
                    t.colorInit = true
                }
                o.cssHooks[s].set(t.elem, t.start.transition(t.end, t.pos))
            }
        })
    };
    e.hook(k);
    o.cssHooks.borderColor = {
        expand: function(q) {
            var p = {};
            l(["Top", "Right", "Bottom", "Left"], function(s, r) {
                p["border" + r + "Color"] = q
            });
            return p
        }
    };
    a = o.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    }
}(jQuery));
/*
 * Custom jQuery functions
 *
 */
$.fn.preload = function() {
    this.each(function() {
        $('<img/>')[0].src = this;
    });
}
/*
 * Vimeo Froogaloop
 *
 */
var Froogaloop = function() {
    function e(a) {
        return new e.fn.init(a)
    }

    function g(a, c, b) {
        if (!b.contentWindow.postMessage) return !1;
        a = JSON.stringify({
            method: a,
            value: c
        });
        b.contentWindow.postMessage(a, h)
    }

    function l(a) {
        var c, b;
        try {
            c = JSON.parse(a.data), b = c.event || c.method
        } catch (e) {}
        "ready" != b || k || (k = !0);
        if (!/^https?:\/\/player.vimeo.com/.test(a.origin)) return !1;
        "*" === h && (h = a.origin);
        a = c.value;
        var m = c.data,
            f = "" === f ? null : c.player_id;
        c = f ? d[f][b] : d[b];
        b = [];
        if (!c) return !1;
        void 0 !== a && b.push(a);
        m && b.push(m);
        f && b.push(f);
        return 0 < b.length ? c.apply(null, b) : c.call()
    }

    function n(a, c, b) {
        b ? (d[b] || (d[b] = {}), d[b][a] = c) : d[a] = c
    }
    var d = {},
        k = !1,
        h = "*";
    e.fn = e.prototype = {
        element: null,
        init: function(a) {
            "string" === typeof a && (a = document.getElementById(a));
            this.element = a;
            return this
        },
        api: function(a, c) {
            if (!this.element || !a) return !1;
            var b = this.element,
                d = "" !== b.id ? b.id : null,
                e = c && c.constructor && c.call && c.apply ? null : c,
                f = c && c.constructor && c.call && c.apply ? c : null;
            f && n(a, f, d);
            g(a, e, b);
            return this
        },
        addEvent: function(a, c) {
            if (!this.element) return !1;
            var b = this.element,
                d = "" !== b.id ? b.id : null;
            n(a, c, d);
            "ready" != a ? g("addEventListener", a, b) : "ready" == a && k && c.call(null, d);
            return this
        },
        removeEvent: function(a) {
            if (!this.element) return !1;
            var c = this.element,
                b = "" !== c.id ? c.id : null;
            a: {
                if (b && d[b]) {
                    if (!d[b][a]) {
                        b = !1;
                        break a
                    }
                    d[b][a] = null
                } else {
                    if (!d[a]) {
                        b = !1;
                        break a
                    }
                    d[a] = null
                }
                b = !0
            }
            "ready" != a && b && g("removeEventListener", a, c)
        }
    };
    e.fn.init.prototype = e.fn;
    window.addEventListener ? window.addEventListener("message", l, !1) : window.attachEvent("onmessage", l);
    return window.Froogaloop = window.$f = e
}();
/*
 * VERSION: 1.15.1
 * DATE: 2015-01-20
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    n = 1e-10,
                    a = i._internals,
                    o = a.isSelector,
                    h = a.isArray,
                    l = r.prototype = i.to({}, .1, {}),
                    _ = [];
                r.version = "1.15.1", l.constructor = r, l.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, l.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, l.updateTo = function(t, e) {
                    var s, r = this.ratio,
                        n = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted || n)
                        if (e) this._initted = !1, n && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._time > 0 || n) {
                        this._initted = !1, this._init();
                        for (var o, h = 1 / (1 - r), l = this._firstPT; l;) o = l.s + l.c, l.c *= h, l.s = o - l.c, l = l._next
                    }
                    return this
                }, l.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, r, o, h, l, u, p, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        d = this._totalTime,
                        g = this._cycle,
                        v = this._duration,
                        y = this._rawPrevTime;
                    if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete"), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === n) && y !== t && (i = !0, y > n && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || y === t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === v && y > 0 && y !== n) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = c = !e || t || y === t ? t : n)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (l = this._time / v, u = this._easeType, p = this._easePower, (1 === u || 3 === u && l >= .5) && (l = 1 - l), 3 === u && (l *= 2), 1 === p ? l *= l : 2 === p ? l *= l * l : 3 === p ? l *= l * l * l : 4 === p && (l *= l * l * l * l), this.ratio = 1 === u ? 1 - l : 2 === u ? l : .5 > this._time / v ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)), m === this._time && !i && g === this._cycle) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), void 0;
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = d, this._rawPrevTime = y, this._cycle = g, a.lazyTweens.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / v) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== d || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _), 0 === v && this._rawPrevTime === n && c !== n && (this._rawPrevTime = 0))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s)
                }, r.staggerTo = r.allTo = function(t, e, n, a, l, u, p) {
                    a = a || 0;
                    var c, f, m, d, g = n.delay || 0,
                        v = [],
                        y = function() {
                            n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), l.apply(p || this, u || _)
                        };
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t))), t = t || [], 0 > a && (t = s(t), t.reverse(), a *= -1), c = t.length - 1, m = 0; c >= m; m++) {
                        f = {};
                        for (d in n) f[d] = n[d];
                        f.delay = g, m === c && l && (f.onComplete = y), v[m] = new r(t[m], e, f), g += a
                    }
                    return v
                }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h)
                }, r.delayedCall = function(t, e, i, s, n) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        onCompleteScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: s,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var u = function(t, e) {
                        for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(u(n, e)), r = s.length), n = n._next;
                        return s
                    },
                    p = r.getAllTweens = function(e) {
                        return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, s, r) {
                    null == i && (i = !0), null == s && (s = !0);
                    var n, a, o, h = p(0 != r),
                        l = h.length,
                        _ = i && s && r;
                    for (o = 0; l > o; o++) a = h[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var n, l, _, u, p, c = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t)), h(t))
                            for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                        else {
                            n = [];
                            for (_ in c)
                                for (l = c[_].target.parentNode; l;) l === t && (n = n.concat(c[_].tweens)), l = l.parentNode;
                            for (p = n.length, u = 0; p > u; u++) e && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1)
                        }
                    }
                };
                var c = function(t, i, s, r) {
                    i = i !== !1, s = s !== !1, r = r !== !1;
                    for (var n, a, o = p(r), h = i && s && r, l = o.length; --l > -1;) a = o[l], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    c(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    c(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || n, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, l.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, l.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, l.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, l.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, l.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, l.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, l.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, l.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, r = this.vars;
                        for (s in r) i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    n = i._internals,
                    a = s._internals = {},
                    o = n.isSelector,
                    h = n.isArray,
                    l = n.lazyTweens,
                    _ = n.lazyRender,
                    u = [],
                    p = _gsScope._gsDefine.globals,
                    c = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    f = a.pauseCallback = function(t, e, i, s) {
                        var r = t._timeline,
                            n = r._totalTime;
                        !e && this._forcingPlayhead || r._rawPrevTime === t._startTime || (r.pause(t._startTime), e && e.apply(s || r, i || u), this._forcingPlayhead && r.seek(n))
                    },
                    m = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    d = s.prototype = new e;
                return s.version = "1.15.1", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function(t, e, s, r) {
                    var n = s.repeat && p.TweenMax || i;
                    return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
                }, d.from = function(t, e, s, r) {
                    return this.add((s.repeat && p.TweenMax || i).from(t, e, s), r)
                }, d.fromTo = function(t, e, s, r, n) {
                    var a = r.repeat && p.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
                }, d.staggerTo = function(t, e, r, n, a, h, l, _) {
                    var u, p = new s({
                        onComplete: h,
                        onCompleteParams: l,
                        onCompleteScope: _,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = c(r.startAt)), p.to(t[u], e, c(r), u * n);
                    return this.add(p, a)
                }, d.staggerFrom = function(t, e, i, s, r, n, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
                }, d.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
                }, d.call = function(t, e, s, r) {
                    return this.add(i.delayedCall(0, t, e, s), r)
                }, d.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                    return o.add(a, 0), a
                }, d.add = function(r, n, a, o) {
                    var l, _, u, p, c, f;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && h(r)) {
                            for (a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) h(p = r[u]) && (p = new s({
                                tweens: p
                            })), this.add(p, l), "string" != typeof p && "function" != typeof p && ("sequence" === a ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())), l += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, n);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (c = this, f = c.rawTime() > r._startTime; c._timeline;) f && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
                    return this
                }, d.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && h(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, d._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var s = this._last;
                    return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, d.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, d.insert = d.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, d.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, d.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, d.addPause = function(t, e, s, r) {
                    var n = i.delayedCall(0, f, ["{self}", e, s, r], this);
                    return n.data = "isPause", this.add(n, t)
                }, d.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, d.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, d._parseTimeOrLabel = function(e, i, s, r) {
                    var n;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && h(r)))
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, d.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, d.stop = function() {
                    return this.paused(!0)
                }, d.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, d.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, d.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        c = this._time,
                        f = this._startTime,
                        m = this._timeScale,
                        d = this._paused;
                    if (t >= p ? (this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (h = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== c && this._first || i || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)), this._time >= c)
                            for (s = this._first; s && (a = s._next, !this._paused || d);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, !this._paused || d);)(s._active || c >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        this._onUpdate && (e || (l.length && _(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u))), o && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || u)))
                    }
                }, d._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, d.getChildren = function(t, e, s, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                    return n
                }, d.getTweensOf = function(t, e) {
                    var s, r, n = this._gc,
                        a = [],
                        o = 0;
                    for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                    return n && this._enabled(!1, !0), a
                }, d.recent = function() {
                    return this._recent
                }, d._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, d.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, d._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                    return r
                }, d.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, d.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, d._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, d.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, d.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, d.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, d.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, d.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, s
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    n = [],
                    a = e._internals,
                    o = a.lazyTweens,
                    h = a.lazyRender,
                    l = new i(null, null, 1, 0),
                    _ = s.prototype = new t;
                return _.constructor = s, _.kill()._gc = !1, s.version = "1.15.1", _.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, _.addCallback = function(t, i, s, r) {
                    return this.add(e.delayedCall(0, t, s, r), i)
                }, _.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this
                }, _.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, _.tweenTo = function(t, i) {
                    i = i || {};
                    var s, r, a, o = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) o[r] = i[r];
                    return o.time = this._parseTimeOrLabel(t), s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new e(this, s, o), o.onStart = function() {
                        a.target.paused(!0), a.vars.time !== a.target.time() && s === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || n)
                    }, a
                }, _.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        onCompleteScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, _.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, a, l, _, u, p, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._duration,
                        m = this._time,
                        d = this._totalTime,
                        g = this._startTime,
                        v = this._timeScale,
                        y = this._rawPrevTime,
                        T = this._paused,
                        w = this._cycle;
                    if (t >= c ? (this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, _ = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (u = !0, y > r && (_ = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === f && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (_ = "onReverseComplete", a = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : (0 === f && 0 > y && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = f + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== w && !this._locked) {
                        var x = this._yoyo && 0 !== (1 & w),
                            b = x === (this._yoyo && 0 !== (1 & this._cycle)),
                            P = this._totalTime,
                            S = this._cycle,
                            k = this._rawPrevTime,
                            R = this._time;
                        if (this._totalTime = w * f, w > this._cycle ? x = !x : this._totalTime += f, this._time = m, this._rawPrevTime = 0 === f ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = x ? 0 : f, this.render(m, e, 0 === f), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n), b && (m = x ? f + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T) return;
                        this._time = R, this._totalTime = P, this._cycle = S, this._rawPrevTime = k
                    }
                    if (!(this._time !== m && this._first || i || u)) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)), void 0;
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)), this._time >= m)
                        for (s = this._first; s && (l = s._next, !this._paused || T);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    else
                        for (s = this._last; s && (l = s._prev, !this._paused || T);)(s._active || m >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    this._onUpdate && (e || (o.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n))), _ && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (a && (o.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[_] && this.vars[_].apply(this.vars[_ + "Scope"] || this, this.vars[_ + "Params"] || n)))
                }, _.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, r, n = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        h = a.length;
                    for (s = 0; h > s; s++) r = a[s], r.isActive() && (n[o++] = r);
                    return n
                }, _.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, _.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, _.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, _.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, _.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, _.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, _.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, _.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, _.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, _.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, _.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    s = [],
                    r = {},
                    n = _gsScope._gsDefine.globals,
                    a = function(t, e, i, s) {
                        this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    h = function(t, e, i, s) {
                        var r = {
                                a: t
                            },
                            n = {},
                            a = {},
                            o = {
                                c: s
                            },
                            h = (t + e) / 2,
                            l = (e + i) / 2,
                            _ = (i + s) / 2,
                            u = (h + l) / 2,
                            p = (l + _) / 2,
                            c = (p - u) / 8;
                        return r.b = h + (t - h) / 4, n.b = u + c, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + p) / 2, a.b = p - c, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
                    },
                    l = function(t, r, n, a, o) {
                        var l, _, u, p, c, f, m, d, g, v, y, T, w, x = t.length - 1,
                            b = 0,
                            P = t[0].a;
                        for (l = 0; x > l; l++) c = t[b], _ = c.a, u = c.d, p = t[b + 1].d, o ? (y = e[l], T = i[l], w = .25 * (T + y) * r / (a ? .5 : s[l] || .5), f = u - (u - _) * (a ? .5 * r : 0 !== y ? w / y : 0), m = u + (p - u) * (a ? .5 * r : 0 !== T ? w / T : 0), d = u - (f + ((m - f) * (3 * y / (y + T) + .5) / 4 || 0))) : (f = u - .5 * (u - _) * r, m = u + .5 * (p - u) * r, d = u - (f + m) / 2), f += d, m += d, c.c = g = f, c.b = 0 !== l ? P : P = c.a + .6 * (c.c - c.a), c.da = u - _, c.ca = g - _, c.ba = P - _, n ? (v = h(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        c = t[b], c.b = P, c.c = P + .4 * (c.d - P), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = P - c.a, n && (v = h(c.a, P, c.c, c.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                    },
                    _ = function(t, s, r, n) {
                        var o, h, l, _, u, p, c = [];
                        if (n)
                            for (t = [n].concat(t), h = t.length; --h > -1;) "string" == typeof(p = t[h][s]) && "=" === p.charAt(1) && (t[h][s] = n[s] + Number(p.charAt(0) + p.substr(2)));
                        if (o = t.length - 2, 0 > o) return c[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), c;
                        for (h = 0; o > h; h++) l = t[h][s], _ = t[h + 1][s], c[h] = new a(l, 0, 0, _), r && (u = t[h + 2][s], e[h] = (e[h] || 0) + (_ - l) * (_ - l), i[h] = (i[h] || 0) + (u - _) * (u - _));
                        return c[h] = new a(t[h][s], 0, 0, t[h + 1][s]), c
                    },
                    u = function(t, n, a, h, u, p) {
                        var c, f, m, d, g, v, y, T, w = {},
                            x = [],
                            b = p || t[0];
                        u = "string" == typeof u ? "," + u + "," : o, null == n && (n = 1);
                        for (f in t[0]) x.push(f);
                        if (t.length > 1) {
                            for (T = t[t.length - 1], y = !0, c = x.length; --c > -1;)
                                if (f = x[c], Math.abs(b[f] - T[f]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                        }
                        for (e.length = i.length = s.length = 0, c = x.length; --c > -1;) f = x[c], r[f] = -1 !== u.indexOf("," + f + ","), w[f] = _(t, f, r[f], p);
                        for (c = e.length; --c > -1;) e[c] = Math.sqrt(e[c]), i[c] = Math.sqrt(i[c]);
                        if (!h) {
                            for (c = x.length; --c > -1;)
                                if (r[f])
                                    for (m = w[x[c]], v = m.length - 1, d = 0; v > d; d++) g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
                            for (c = s.length; --c > -1;) s[c] = Math.sqrt(s[c])
                        }
                        for (c = x.length, d = a ? 4 : 1; --c > -1;) f = x[c], m = w[f], l(m, n, a, h, r[f]), y && (m.splice(0, d), m.splice(m.length - d, d));
                        return w
                    },
                    p = function(t, e, i) {
                        e = e || "soft";
                        var s, r, n, o, h, l, _, u, p, c, f, m = {},
                            d = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
                        for (p in t[0]) v.push(p);
                        for (l = v.length; --l > -1;) {
                            for (p = v[l], m[p] = h = [], c = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][p] : "string" == typeof(f = t[_][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && _ > 1 && u - 1 > _ && (h[c++] = (s + h[c - 2]) / 2), h[c++] = s;
                            for (u = c - d + 1, c = 0, _ = 0; u > _; _ += d) s = h[_], r = h[_ + 1], n = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[c++] = f = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                            h.length = c
                        }
                        return m
                    },
                    c = function(t, e, i) {
                        for (var s, r, n, a, o, h, l, _, u, p, c, f = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++) l = f * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), c = m * i + _ - 1, e[c] = (e[c] || 0) + s * s
                    },
                    f = function(t, e) {
                        e = e >> 0 || 6;
                        var i, s, r, n, a = [],
                            o = [],
                            h = 0,
                            l = 0,
                            _ = e - 1,
                            u = [],
                            p = [];
                        for (i in t) c(t[i], a, e);
                        for (r = a.length, s = 0; r > s; s++) h += Math.sqrt(a[s]), n = s % e, p[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = p, o[n] = l, h = 0, p = []);
                        return {
                            length: l,
                            lengths: o,
                            segments: u
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, r, n, a, o, h = e.values || [],
                                l = {},
                                _ = h[0],
                                c = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = c ? c instanceof Array ? c : [
                                ["x", "y", "rotation", c === !0 ? 0 : Number(c) || 0]
                            ] : null;
                            for (s in _) this._props.push(s);
                            for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : p(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = f(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (c = this._autoRotate)
                                for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), n = c.length; --n > -1;) {
                                    for (a = 0; 3 > a; a++) s = c[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                                    s = c[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, s, r, n, a, o, h, l, _, u, p = this._segCount,
                                c = this._func,
                                f = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                                    for (l = p - 1; l > r && e >= (this._l2 = _[++r]););
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                    for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]););
                                    this._s1 = u[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, o = (e - i * (1 / p)) * p;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = Math.round(h)), c[n] ? f[n](h) : f[n] = h;
                            if (this._autoRotate) {
                                var d, g, v, y, T, w, x, b = this._autoRotate;
                                for (r = b.length; --r > -1;) n = b[r][2], w = b[r][3] || 0, x = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, h = m ? Math.atan2(T - v, y - g) * x + w : this._initialRotations[r], c[n] ? f[n](h) : f[n] = h)
                            }
                        }
                    }),
                    d = m.prototype;
                m.bezierThrough = u, m.cubicToQuadratic = h, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function() {
                    var t = n.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            s = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, n, a, o, h) {
                                e instanceof Array && (e = {
                                    values: e
                                }), h = new m;
                                var l, _, u, p = e.values,
                                    c = p.length - 1,
                                    f = [],
                                    d = {};
                                if (0 > c) return o;
                                for (l = 0; c >= l; l++) u = i(t, p[l], a, o, h, c !== l), f[l] = u.end;
                                for (_ in e) d[_] = e[_];
                                return d.values = f, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = h, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (l = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", l, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", "rotation", l, !1]
                                ] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), h._onInitTween(u.proxy, d, a._tween), o
                            }
                        })
                    }
                }, d._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
                }, d._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, r, n, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = _gsScope._gsDefine.globals,
                    h = {},
                    l = a.prototype = new t("css");
                l.constructor = a, a.version = "1.15.1", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", l = "px", a.suffixMap = {
                    top: l,
                    right: l,
                    bottom: l,
                    left: l,
                    width: l,
                    height: l,
                    fontSize: l,
                    padding: l,
                    margin: l,
                    perspective: l,
                    lineHeight: ""
                };
                var _, u, p, c, f, m, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    T = /(?:\d|\-|\+|=|#|\.)*/g,
                    w = /opacity *= *([^)]*)/i,
                    x = /opacity:([^;]*)/i,
                    b = /alpha\(opacity *=.+?\)/i,
                    P = /^(rgb|hsl)/,
                    S = /([A-Z])/g,
                    k = /-([a-z])/gi,
                    R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    A = function(t, e) {
                        return e.toUpperCase()
                    },
                    C = /(?:Left|Right|Width)/i,
                    O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    M = /,(?=[^\)]*(?:\(|$))/gi,
                    z = Math.PI / 180,
                    I = 180 / Math.PI,
                    F = {},
                    E = document,
                    N = function(t) {
                        return E.createElementNS ? E.createElementNS("http://www.w3.org/1999/xhtml", t) : E.createElement(t)
                    },
                    L = N("div"),
                    X = N("img"),
                    U = a._internals = {
                        _specialProps: h
                    },
                    Y = navigator.userAgent,
                    B = function() {
                        var t = Y.indexOf("Android"),
                            e = N("a");
                        return p = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3), f = p && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)), c = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    j = function(t) {
                        return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    q = function(t) {
                        window.console && console.log(t)
                    },
                    V = "",
                    G = "",
                    W = function(t, e) {
                        e = e || L;
                        var i, s, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                        return s >= 0 ? (G = 3 === s ? "ms" : i[s], V = "-" + G.toLowerCase() + "-", G + t) : null
                    },
                    Z = E.defaultView ? E.defaultView.getComputedStyle : function() {},
                    Q = a.getStyle = function(t, e, i, s, r) {
                        var n;
                        return B || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : j(t)
                    },
                    $ = U.convertToPixels = function(t, i, s, r, n) {
                        if ("px" === r || !r) return s;
                        if ("auto" === r || !s) return 0;
                        var o, h, l, _ = C.test(i),
                            u = t,
                            p = L.style,
                            c = 0 > s;
                        if (c && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
                        else {
                            if (p.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) p[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
                            else {
                                if (u = t.parentNode || E.body, h = u._gsCache, l = e.ticker.frame, h && _ && h.time === l) return h.width * s / 100;
                                p[_ ? "width" : "height"] = s + r
                            }
                            u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && a.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {}, h.time = l, h.width = 100 * (o / s)), 0 !== o || n || (o = $(t, i, s, r, !0))
                        }
                        return c ? -o : o
                    },
                    H = U.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Q(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            r = Q(t, "margin" + s, i);
                        return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(T, "")) || 0)
                    },
                    K = function(t, e) {
                        var i, s, r = {};
                        if (e = e || Z(t, null))
                            for (i in e)(-1 === i.indexOf("Transform") || xe === i) && (r[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(k, A)] = e[i]);
                        return B || (r.opacity = j(t)), s = Me(t, e, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, Se && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
                    },
                    J = function(t, e, i, s, r) {
                        var n, a, o, h = {},
                            l = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : H(t, a), void 0 !== l[a] && (o = new ce(l, a, l[a], o)));
                        if (s)
                            for (a in s) "className" !== a && (h[a] = s[a]);
                        return {
                            difs: h,
                            firstMPT: o
                        }
                    },
                    te = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ie = function(t, e, i) {
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = te[e],
                            n = r.length;
                        for (i = i || Z(t, null); --n > -1;) s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
                        return s
                    },
                    se = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(r.replace(y, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "")
                    },
                    re = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    ne = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    ae = function(t, e, i, s) {
                        var r, n, a, o, h, l = 1e-6;
                        return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), h = "=" === t.charAt(1), a = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (h ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), l > o && o > -l && (o = 0), o
                    },
                    oe = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    he = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    le = a.parseColor = function(t) {
                        var e, i, s, r, n, a;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = he(r + 1 / 3, e, i), t[1] = he(r, e, i), t[2] = he(r - 1 / 3, e, i), t) : (t = t.match(d) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black
                    },
                    _e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (l in oe) _e += "|" + l + "\\b";
                _e = RegExp(_e + ")", "gi");
                var ue = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, n = e ? (t.match(_e) || [""])[0] : "",
                            a = t.split(n).join("").match(v) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            h = ")" === t.charAt(t.length - 1) ? ")" : "",
                            l = -1 !== t.indexOf(" ") ? " " : ",",
                            _ = a.length,
                            u = _ > 0 ? a[0].replace(d, "") : "";
                        return _ ? r = e ? function(t) {
                            var e, p, c, f;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (f = t.replace(M, "|").split("|"), c = 0; f.length > c; c++) f[c] = r(f[c]);
                                return f.join(",")
                            }
                            if (e = (t.match(_e) || [n])[0], p = t.split(e).join("").match(v) || [], c = p.length, _ > c--)
                                for (; _ > ++c;) p[c] = i ? p[0 | (c - 1) / 2] : a[c];
                            return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, p;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (n = t.replace(M, "|").split("|"), p = 0; n.length > p; p++) n[p] = r(n[p]);
                                return n.join(",")
                            }
                            if (e = t.match(v) || [], p = e.length, _ > p--)
                                for (; _ > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                            return o + e.join(l) + h
                        } : function(t) {
                            return t
                        }
                    },
                    pe = function(t) {
                        return t = t.split(","),
                            function(e, i, s, r, n, a, o) {
                                var h, l = (i + "").split(" ");
                                for (o = {}, h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                return r.parse(e, o, n, a)
                            }
                    },
                    ce = (U._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : h > e && e > -h && (e = 0), o.t[o.p] = e, o = o._next;
                        if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = n.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, s, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
                    }),
                    fe = (U._parseToProxy = function(t, e, i, s, r, n) {
                        var a, o, h, l, _, u = s,
                            p = {},
                            c = {},
                            f = i._transform,
                            m = F;
                        for (i._transform = null, F = e, s = _ = i.parse(t, e, s, r), F = m, n && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (1 >= s.type && (o = s.p, c[o] = s.s + s.c, p[o] = s.s, n || (l = new ce(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) h = "xn" + a, o = s.p + "_" + h, c[o] = s.data[h], p[o] = s[h], n || (l = new ce(s, h, o, l, s.rxp[h]));
                            s = s._next
                        }
                        return {
                            proxy: p,
                            end: c,
                            firstMPT: l,
                            pt: _
                        }
                    }, U.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, p) {
                        this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof fe || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this)
                    }),
                    me = a.parseComplex = function(t, e, i, s, r, n, a, o, h, l) {
                        i = i || n || "", a = new fe(t, e, 0, 0, a, l ? 2 : 1, null, !1, o, i, s), s += "";
                        var u, p, c, f, m, v, y, T, w, x, b, S, k = i.split(", ").join(",").split(" "),
                            R = s.split(", ").join(",").split(" "),
                            A = k.length,
                            C = _ !== !1;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(M, ", ").split(" "), R = R.join(" ").replace(M, ", ").split(" "), A = k.length), A !== R.length && (k = (n || "").split(" "), A = k.length), a.plugin = h, a.setRatio = l, u = 0; A > u; u++)
                            if (f = k[u], m = R[u], T = parseFloat(f), T || 0 === T) a.appendXtra("", T, re(m, T), m.replace(g, ""), C && -1 !== m.indexOf("px"), !0);
                            else if (r && ("#" === f.charAt(0) || oe[f] || P.test(f))) S = "," === m.charAt(m.length - 1) ? ")," : ")", f = le(f), m = le(m), w = f.length + m.length > 6, w && !B && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (B || (w = !1), a.appendXtra(w ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], w ? "," : S, !0), w && (f = 4 > f.length ? 1 : f[3], a.appendXtra("", f, (4 > m.length ? 1 : m[3]) - f, S, !1)));
                        else if (v = f.match(d)) {
                            if (y = m.match(g), !y || y.length !== v.length) return a;
                            for (c = 0, p = 0; v.length > p; p++) b = v[p], x = f.indexOf(b, c), a.appendXtra(f.substr(c, x - c), Number(b), re(y[p], b), "", C && "px" === f.substr(x + b.length, 2), 0 === p), c = x + b.length;
                            a["xs" + a.l] += f.substr(c)
                        } else a["xs" + a.l] += a.l ? " " + f : f;
                        if (-1 !== s.indexOf("=") && a.data) {
                            for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) S += a["xs" + u] + a.data["xn" + u];
                            a.e = S + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    de = 9;
                for (l = fe.prototype, l.l = l.pr = 0; --de > 0;) l["xn" + de] = 0, l["xs" + de] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, s, r, n) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new fe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
                };
                var ge = function(t, e) {
                        e = e || {}, this.p = e.prefix ? W(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    ve = U._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, r, n = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new ge(n[s], e)
                    },
                    ye = function(t) {
                        if (!h[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            ve(t, {
                                parser: function(t, i, s, r, n, a, l) {
                                    var _ = o.com.greensock.plugins[e];
                                    return _ ? (_._cssRegister(), h[s].parse(t, i, s, r, n, a, l)) : (q("Error: " + e + " js file not loaded."), n)
                                }
                            })
                        }
                    };
                l = ge.prototype, l.parseComplex = function(t, e, i, s, r, n) {
                    var a, o, h, l, _, u, p = this.keyword;
                    if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), h = i.replace(M, "|").split("|")) : p && (o = [e], h = [i])), h) {
                        for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (i = -1 === u ? h : o, i[a] += " " + p));
                        e = o.join(", "), i = h.join(", ")
                    }
                    return me(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                }, l.parse = function(t, e, i, s, n, a) {
                    return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    ve(t, {
                        parser: function(t, s, r, n, a, o) {
                            var h = new fe(t, r, 0, 0, a, 2, r, !1, i);
                            return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
                        },
                        priority: i
                    })
                };
                var Te, we = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    xe = W("transform"),
                    be = V + "transform",
                    Pe = W("transformOrigin"),
                    Se = null !== W("perspective"),
                    ke = U.Transform = function() {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Se ? a.defaultForce3D || "auto" : !1
                    },
                    Re = window.SVGElement,
                    Ae = function(t, e, i) {
                        var s, r = E.createElementNS("http://www.w3.org/2000/svg", t),
                            n = /([a-z])([A-Z])/g;
                        for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
                        return e.appendChild(r), r
                    },
                    Ce = document.documentElement,
                    Oe = function() {
                        var t, e, i, s = m || /Android/i.test(Y) && !window.chrome;
                        return E.createElementNS && !s && (t = Ae("svg", Ce), e = Ae("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Pe] = "50% 50%", e.style[xe] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(c && Se), Ce.removeChild(t)), s
                    }(),
                    De = function(t, e, i) {
                        var s = t.getBBox();
                        e = se(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * s.width : parseFloat(e[0])) + s.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * s.height : parseFloat(e[1])) + s.y
                    },
                    Me = U.getTransform = function(t, e, i, s) {
                        if (t._gsTransform && i && !s) return t._gsTransform;
                        var n, o, h, l, _, u, p, c, f, m, d = i ? t._gsTransform || new ke : new ke,
                            g = 0 > d.scaleX,
                            v = 2e-5,
                            y = 1e5,
                            T = Se ? parseFloat(Q(t, Pe, e, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
                            w = parseFloat(a.defaultTransformPerspective) || 0;
                        if (xe ? o = Q(t, be, e, !0) : t.currentStyle && (o = t.currentStyle.filter.match(O), o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), d.x || 0, d.y || 0].join(",") : ""), n = !o || "none" === o || "matrix(1, 0, 0, 1, 0, 0)" === o, d.svg = !!(Re && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), d.svg && (De(t, Q(t, Pe, r, !1, "50% 50%") + "", d), Te = a.useSVGTransformAttr || Oe, h = t.getAttribute("transform"), n && h && -1 !== h.indexOf("matrix") && (o = h, n = 0)), !n) {
                            for (h = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = h.length; --l > -1;) _ = Number(h[l]), h[l] = (u = _ - (_ |= 0)) ? (0 | u * y + (0 > u ? -.5 : .5)) / y + _ : _;
                            if (16 === h.length) {
                                var x, b, P, S, k, R = h[0],
                                    A = h[1],
                                    C = h[2],
                                    D = h[3],
                                    M = h[4],
                                    z = h[5],
                                    F = h[6],
                                    E = h[7],
                                    N = h[8],
                                    L = h[9],
                                    X = h[10],
                                    U = h[12],
                                    Y = h[13],
                                    B = h[14],
                                    j = h[11],
                                    q = Math.atan2(F, X);
                                d.zOrigin && (B = -d.zOrigin, U = N * B - h[12], Y = L * B - h[13], B = X * B + d.zOrigin - h[14]), d.rotationX = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), x = M * S + N * k, b = z * S + L * k, P = F * S + X * k, N = M * -k + N * S, L = z * -k + L * S, X = F * -k + X * S, j = E * -k + j * S, M = x, z = b, F = P), q = Math.atan2(N, X), d.rotationY = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), x = R * S - N * k, b = A * S - L * k, P = C * S - X * k, L = A * k + L * S, X = C * k + X * S, j = D * k + j * S, R = x, A = b, C = P), q = Math.atan2(A, R), d.rotation = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), R = R * S + M * k, b = A * S + z * k, z = A * -k + z * S, F = C * -k + F * S, A = b), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY += 180), d.scaleX = (0 | Math.sqrt(R * R + A * A) * y + .5) / y, d.scaleY = (0 | Math.sqrt(z * z + L * L) * y + .5) / y, d.scaleZ = (0 | Math.sqrt(F * F + X * X) * y + .5) / y, d.skewX = 0, d.perspective = j ? 1 / (0 > j ? -j : j) : 0, d.x = U, d.y = Y, d.z = B
                            } else if (!(Se && !s && h.length && d.x === h[4] && d.y === h[5] && (d.rotationX || d.rotationY) || void 0 !== d.x && "none" === Q(t, "display", e))) {
                                var V = h.length >= 6,
                                    G = V ? h[0] : 1,
                                    W = h[1] || 0,
                                    Z = h[2] || 0,
                                    $ = V ? h[3] : 1;
                                d.x = h[4] || 0, d.y = h[5] || 0, p = Math.sqrt(G * G + W * W), c = Math.sqrt($ * $ + Z * Z), f = G || W ? Math.atan2(W, G) * I : d.rotation || 0, m = Z || $ ? Math.atan2(Z, $) * I + f : d.skewX || 0, Math.abs(m) > 90 && 270 > Math.abs(m) && (g ? (p *= -1, m += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (c *= -1, m += 0 >= m ? 180 : -180)), d.scaleX = p, d.scaleY = c, d.rotation = f, d.skewX = m, Se && (d.rotationX = d.rotationY = d.z = 0, d.perspective = w, d.scaleZ = 1)
                            }
                            d.zOrigin = T;
                            for (l in d) v > d[l] && d[l] > -v && (d[l] = 0)
                        }
                        return i && (t._gsTransform = d), d
                    },
                    ze = function(t) {
                        var e, i, s = this.data,
                            r = -s.rotation * z,
                            n = r + s.skewX * z,
                            a = 1e5,
                            o = (0 | Math.cos(r) * s.scaleX * a) / a,
                            h = (0 | Math.sin(r) * s.scaleX * a) / a,
                            l = (0 | Math.sin(n) * -s.scaleY * a) / a,
                            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                            u = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = h, h = -l, l = -i, e = p.filter, u.filter = "";
                            var c, f, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== p.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
                                x = s.x + d * s.xPercent / 100,
                                b = s.y + g * s.yPercent / 100;
                            if (null != s.ox && (c = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, f = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, x += c - (c * o + f * h), b += f - (c * l + f * _)), v ? (c = d / 2, f = g / 2, y += ", Dx=" + (c - (c * o + f * h) + x) + ", Dy=" + (f - (c * l + f * _) + b) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                                var P, S, k, R = 8 > m ? 1 : -1;
                                for (c = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + x), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), de = 0; 4 > de; de++) S = ee[de], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, S, parseFloat(P), P.replace(T, "")) || 0, k = i !== s[S] ? 2 > de ? -s.ieOffsetX : -s.ieOffsetY : 2 > de ? c - s.ieOffsetX : f - s.ieOffsetY, u[S] = (s[S] = Math.round(i - k * (0 === de || 2 === de ? 1 : R))) + "px"
                            }
                        }
                    },
                    Ie = U.set3DTransformRatio = function(t) {
                        var e, i, s, r, n, a, o, h, l, _, u, p, f, m, d, g, v, y, T, w, x, b = this.data,
                            P = this.t.style,
                            S = b.rotation * z,
                            k = b.scaleX,
                            R = b.scaleY,
                            A = b.scaleZ,
                            C = b.x,
                            O = b.y,
                            D = b.z,
                            M = b.perspective;
                        if (!(1 !== t && 0 !== t && b.force3D || b.force3D === !0 || b.rotationY || b.rotationX || 1 !== A || M || D)) return Fe.call(this, t), void 0;
                        if (c && (m = 1e-4, m > k && k > -m && (k = A = 2e-5), m > R && R > -m && (R = A = 2e-5), !M || b.z || b.rotationX || b.rotationY || (M = 0)), S || b.skewX) d = e = Math.cos(S), g = r = Math.sin(S), b.skewX && (S -= b.skewX * z, d = Math.cos(S), g = Math.sin(S), "simple" === b.skewType && (v = Math.tan(b.skewX * z), v = Math.sqrt(1 + v * v), d *= v, g *= v)), i = -g, n = d;
                        else {
                            if (!(b.rotationY || b.rotationX || 1 !== A || M || b.svg)) return P[xe] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) translate3d(" : "translate3d(") + C + "px," + O + "px," + D + "px)" + (1 !== k || 1 !== R ? " scale(" + k + "," + R + ")" : ""), void 0;
                            e = n = 1, i = r = 0
                        }
                        l = 1, s = a = o = h = _ = u = 0, p = M ? -1 / M : 0, f = b.zOrigin, m = 1e-6, w = ",", x = "0", S = b.rotationY * z, S && (d = Math.cos(S), g = Math.sin(S), o = -g, _ = p * -g, s = e * g, a = r * g, l = d, p *= d, e *= d, r *= d), S = b.rotationX * z, S && (d = Math.cos(S), g = Math.sin(S), v = i * d + s * g, y = n * d + a * g, h = l * g, u = p * g, s = i * -g + s * d, a = n * -g + a * d, l *= d, p *= d, i = v, n = y), 1 !== A && (s *= A, a *= A, l *= A, p *= A), 1 !== R && (i *= R, n *= R, h *= R, u *= R), 1 !== k && (e *= k, r *= k, o *= k, _ *= k), (f || b.svg) && (f && (C += s * -f, O += a * -f, D += l * -f + f), b.svg && (C += b.xOrigin - (b.xOrigin * e + b.yOrigin * i), O += b.yOrigin - (b.xOrigin * r + b.yOrigin * n)), m > C && C > -m && (C = x), m > O && O > -m && (O = x), m > D && D > -m && (D = 0)), T = b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > e && e > -m ? x : e) + w + (m > r && r > -m ? x : r) + w + (m > o && o > -m ? x : o), T += w + (m > _ && _ > -m ? x : _) + w + (m > i && i > -m ? x : i) + w + (m > n && n > -m ? x : n), b.rotationX || b.rotationY ? (T += w + (m > h && h > -m ? x : h) + w + (m > u && u > -m ? x : u) + w + (m > s && s > -m ? x : s), T += w + (m > a && a > -m ? x : a) + w + (m > l && l > -m ? x : l) + w + (m > p && p > -m ? x : p) + w) : T += ",0,0,0,0,1,0,", T += C + w + O + w + D + w + (M ? 1 + -D / M : 1) + ")", P[xe] = T
                    },
                    Fe = U.set2DTransformRatio = function(t) {
                        var e, i, s, r, n, a, o, h, l, _, u, p = this.data,
                            c = this.t,
                            f = c.style,
                            m = p.x,
                            d = p.y;
                        return !(p.rotationX || p.rotationY || p.z || p.force3D === !0 || "auto" === p.force3D && 1 !== t && 0 !== t) || p.svg && Te || !Se ? (r = p.scaleX, n = p.scaleY, p.rotation || p.skewX || p.svg ? (e = p.rotation * z, i = e - p.skewX * z, s = 1e5, a = Math.cos(e) * r, o = Math.sin(e) * r, h = Math.sin(i) * -n, l = Math.cos(i) * n, p.svg && (m += p.xOrigin - (p.xOrigin * a + p.yOrigin * h), d += p.yOrigin - (p.xOrigin * o + p.yOrigin * l), u = 1e-6, u > m && m > -u && (m = 0), u > d && d > -u && (d = 0)), _ = (0 | a * s) / s + "," + (0 | o * s) / s + "," + (0 | h * s) / s + "," + (0 | l * s) / s + "," + m + "," + d + ")", p.svg && Te ? c.setAttribute("transform", "matrix(" + _) : f[xe] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + _) : f[xe] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + n + "," + m + "," + d + ")", void 0) : (this.setRatio = Ie, Ie.call(this, t), void 0)
                    };
                l = ke.prototype, l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = 0, l.scaleX = l.scaleY = l.scaleZ = 1, ve("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                    parser: function(t, e, i, s, n, o, h) {
                        if (s._lastParsedTransform === h) return n;
                        s._lastParsedTransform = h;
                        var l, _, u, p, c, f, m, d = s._transform = Me(t, r, !0, h.parseTransform),
                            g = t.style,
                            v = 1e-6,
                            y = we.length,
                            T = h,
                            w = {};
                        if ("string" == typeof T.transform && xe) u = L.style, u[xe] = T.transform, u.display = "block", u.position = "absolute", E.body.appendChild(L), l = Me(L, null, !1), E.body.removeChild(L);
                        else if ("object" == typeof T) {
                            if (l = {
                                    scaleX: ne(null != T.scaleX ? T.scaleX : T.scale, d.scaleX),
                                    scaleY: ne(null != T.scaleY ? T.scaleY : T.scale, d.scaleY),
                                    scaleZ: ne(T.scaleZ, d.scaleZ),
                                    x: ne(T.x, d.x),
                                    y: ne(T.y, d.y),
                                    z: ne(T.z, d.z),
                                    xPercent: ne(T.xPercent, d.xPercent),
                                    yPercent: ne(T.yPercent, d.yPercent),
                                    perspective: ne(T.transformPerspective, d.perspective)
                                }, m = T.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (u in m) T[u] = m[u];
                                else T.rotation = m;
                            "string" == typeof T.x && -1 !== T.x.indexOf("%") && (l.x = 0, l.xPercent = ne(T.x, d.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (l.y = 0, l.yPercent = ne(T.y, d.yPercent)), l.rotation = ae("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : d.rotation, d.rotation, "rotation", w), Se && (l.rotationX = ae("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", w), l.rotationY = ae("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", w)), l.skewX = null == T.skewX ? d.skewX : ae(T.skewX, d.skewX), l.skewY = null == T.skewY ? d.skewY : ae(T.skewY, d.skewY), (_ = l.skewY - d.skewY) && (l.skewX += _, l.rotation += _)
                        }
                        for (Se && null != T.force3D && (d.force3D = T.force3D, f = !0), d.skewType = T.skewType || d.skewType || a.defaultSkewType, c = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, c || null == T.scale || (l.scaleZ = 1); --y > -1;) i = we[y], p = l[i] - d[i], (p > v || -v > p || null != T[i] || null != F[i]) && (f = !0, n = new fe(d, i, d[i], p, n), i in w && (n.e = w[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                        return p = T.transformOrigin, p && d.svg && (De(t, se(p), l), n = new fe(d, "xOrigin", d.xOrigin, l.xOrigin - d.xOrigin, n, -1, "transformOrigin"), n.b = d.xOrigin, n.e = n.xs0 = l.xOrigin, n = new fe(d, "yOrigin", d.yOrigin, l.yOrigin - d.yOrigin, n, -1, "transformOrigin"), n.b = d.yOrigin, n.e = n.xs0 = l.yOrigin, p = "0px 0px"), (p || Se && c && d.zOrigin) && (xe ? (f = !0, i = Pe, p = (p || Q(t, i, r, !1, "50% 50%")) + "", n = new fe(g, i, 0, 0, n, -1, "transformOrigin"), n.b = g[i], n.plugin = o, Se ? (u = d.zOrigin, p = p.split(" "), d.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0, n.xs0 = n.e = p[0] + " " + (p[1] || "50%") + " 0px", n = new fe(d, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = d.zOrigin) : n.xs0 = n.e = p) : se(p + "", d)), f && (s._transformType = d.svg && Te || !c && 3 !== this._transformType ? 2 : 3), n
                    },
                    prefix: !0
                }), ve("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), ve("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, a) {
                        e = this.format(e);
                        var o, h, l, _, u, p, c, f, m, d, g, v, y, T, w, x, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) this.p.indexOf("border") && (b[h] = W(b[h])), u = _ = Q(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), p = l = o[h], c = parseFloat(u), v = u.substr((c + "").length), y = "=" === p.charAt(1), y ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), g = p.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(p), g = p.substr((f + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", c, v), w = $(t, "borderTop", c, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (w / d) + "%") : "em" === g ? (x = $(t, "borderLeft", 1, "em"), u = T / x + "em", _ = w / x + "em") : (u = T + "px", _ = w + "px"), y && (p = parseFloat(u) + f + g, l = parseFloat(_) + f + g)), a = me(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: ue("0px 0px 0px 0px", !1, !0)
                }), ve("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l, _, u, p, c = "background-position",
                            f = r || Z(t, null),
                            d = this.format((f ? m ? f.getPropertyValue(c + "-x") + " " + f.getPropertyValue(c + "-y") : f.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = Q(t, "backgroundImage").replace(R, ""), p && "none" !== p)) {
                            for (o = d.split(" "), h = g.split(" "), X.setAttribute("src", p), l = 2; --l > -1;) d = o[l], _ = -1 !== d.indexOf("%"), _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                            d = o.join(" ")
                        }
                        return this.parseComplex(t.style, d, g, n, a)
                    },
                    formatter: se
                }), ve("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: se
                }), ve("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), ve("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), ve("transformStyle", {
                    prefix: !0
                }), ve("backfaceVisibility", {
                    prefix: !0
                }), ve("userSelect", {
                    prefix: !0
                }), ve("margin", {
                    parser: pe("marginTop,marginRight,marginBottom,marginLeft")
                }), ve("padding", {
                    parser: pe("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), ve("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l;
                        return 9 > m ? (h = t.currentStyle, l = 8 > m ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                    }
                }), ve("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), ve("autoRound,strictUnits", {
                    parser: function(t, e, i, s, r) {
                        return r
                    }
                }), ve("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, n, a) {
                        return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(_e) || ["#000"])[0]
                    }
                }), ve("borderWidth", {
                    parser: pe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), ve("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, r) {
                        var n = t.style,
                            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                        return new fe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
                    }
                });
                var Ee = function(t) {
                    var e, i = this.t,
                        s = i.filter || Q(this.data, "filter") || "",
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(w, "opacity=" + r))
                };
                ve("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, n, a) {
                        var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                            h = t.style,
                            l = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), B ? n = new fe(h, "opacity", o, e - o, n) : (n = new fe(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Ee), l && (n = new fe(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
                    }
                });
                var Ne = function(t, e) {
                        e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Le = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ne(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                ve("className", {
                    parser: function(t, e, s, n, a, o, h) {
                        var l, _, u, p, c, f = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (a = n._classNamePT = new fe(t, s, 0, 0, a, 2), a.setRatio = Le, a.pr = -11, i = !0, a.b = f, _ = K(t, r), u = t._gsClassPT) {
                            for (p = {}, c = u.data; c;) p[c.p] = 1, c = c._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.setAttribute("class", a.e), l = J(t, _, K(t), h, p), t.setAttribute("class", f), a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)), a
                    }
                });
                var Xe = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, s, r, n = this.t.style,
                            a = h.transform.parse;
                        if ("all" === this.e) n.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s], h[i] && (h[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Pe : h[i].p), Ne(n, i);
                        r && (Ne(n, xe), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (ve("clearProps", {
                        parser: function(t, e, s, r, n) {
                            return n = new fe(t, s, 0, 0, n, 2), n.setRatio = Xe, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
                        }
                    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), de = l.length; de--;) ye(l[de]);
                l = a.prototype, l._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
                    var h, l, c, m, d, g, v, y, T, w = t.style;
                    if (u && "" === w.zIndex && (h = Q(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (m = w.cssText, h = K(t, r), w.cssText = m + ";" + e, h = J(t, h, K(t)).difs, !B && x.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, w.cssText = m), this._firstPT = l = this.parse(t, e, null), this._transformType) {
                        for (T = 3 === this._transformType, xe ? p && (u = !0, "" === w.zIndex && (v = Q(t, "zIndex", r), ("auto" === v || "" === v) && this._addLazySet(w, "zIndex", 0)), f && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : w.zoom = 1, c = l; c && c._next;) c = c._next;
                        y = new fe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = T && Se ? Ie : xe ? Fe : ze, y.data = this._transform || Me(t, r, !0), n.pop()
                    }
                    if (i) {
                        for (; l;) {
                            for (g = l._next, c = m; c && c.pr > l.pr;) c = c._next;
                            (l._prev = c ? c._prev : d) ? l._prev._next = l: m = l, (l._next = c) ? c._prev = l : d = l, l = g
                        }
                        this._firstPT = m
                    }
                    return !0
                }, l.parse = function(t, e, i, n) {
                    var a, o, l, u, p, c, f, m, d, g, v = t.style;
                    for (a in e) c = e[a], o = h[a], o ? i = o.parse(t, c, a, this, i, n, e) : (p = Q(t, a, r) + "", d = "string" == typeof c, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && P.test(c) ? (d || (c = le(c), c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), i = me(v, a, p, c, !0, "transparent", i, 0, n)) : !d || -1 === c.indexOf(" ") && -1 === c.indexOf(",") ? (l = parseFloat(p), f = l || 0 === l ? p.substr((l + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (l = ie(t, a, r), f = "px") : "left" === a || "top" === a ? (l = H(t, a, r), f = "px") : (l = "opacity" !== a ? 0 : 1, f = "")), g = d && "=" === c.charAt(1), g ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), m = c.replace(T, "")) : (u = parseFloat(c), m = d ? c.replace(T, "") : ""), "" === m && (m = a in s ? s[a] : f), c = u || 0 === u ? (g ? u + l : u) + m : e[a], f !== m && "" !== m && (u || 0 === u) && l && (l = $(t, a, l, f), "%" === m ? (l /= $(t, a, 100, "%") / 100, e.strictUnits !== !0 && (p = l + "%")) : "em" === m ? l /= $(t, a, 1, "em") : "px" !== m && (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (c = u + l + m)), g && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== v[a] && (c || "NaN" != c + "" && null != c) ? (i = new fe(v, a, u || l || 0, 0, i, -1, a, !1, 0, p, c), i.xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : p) : q("invalid " + a + " tween value: " + e[a]) : (i = new fe(v, a, l, u - l, i, 0, a, _ !== !1 && ("px" === m || "zIndex" === a), 0, p, c), i.xs0 = m)) : i = me(v, a, p, c, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                    return i
                }, l.setRatio = function(t) {
                    var e, i, s, r = this._firstPT,
                        n = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
                }, l._enableTransforms = function(t) {
                    this._transform = this._transform || Me(this._target, r, !0), this._transformType = this._transform.svg && Te || !t && 3 !== this._transformType ? 2 : 3
                };
                var Ue = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                l._addLazySet = function(t, e, i) {
                    var s = this._firstPT = new fe(t, e, 0, 0, this._firstPT, 2);
                    s.e = i, s.setRatio = Ue, s.data = this
                }, l._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, l._kill = function(e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
                };
                var Ye = function(t, e, i) {
                    var s, r, n, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Ye(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ye(n, e, i)
                };
                return a.cascadeTo = function(t, i, s) {
                    var r, n, a, o = e.to(t, i, s),
                        h = [o],
                        l = [],
                        _ = [],
                        u = [],
                        p = e._internals.reservedProps;
                    for (t = o._targets || o.target, Ye(t, l, u), o.render(i, !0), Ye(t, _), o.render(0, !0), o._enabled(!0), r = u.length; --r > -1;)
                        if (n = J(u[r], l[r], _[r]), n.firstMPT) {
                            n = n.difs;
                            for (a in s) p[a] && (n[a] = s[a]);
                            h.push(e.to(u[r], i, n))
                        }
                    return h
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) a[r[n]] = 1;
                    for (n = r.length; --n > -1;)
                        for (t = r[n], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
                    return !1
                }, e._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.3.3",
                init: function(t, e) {
                    var i, s, r;
                    if ("function" != typeof t.setAttribute) return !1;
                    this._target = t, this._proxy = {}, this._start = {}, this._end = {};
                    for (i in e) this._start[i] = this._proxy[i] = s = t.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(s), e[i], i), this._end[i] = r ? r.s + r.c : e[i], this._overwriteProps.push(i);
                    return !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    for (var e, i = this._overwriteProps, s = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --s > -1;) e = i[s], this._target.setAttribute(e, r[e] + "")
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6;
                    for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    h = n._class,
                    l = function(e, i) {
                        var s = h("easing." + e, function() {}, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, s
                    },
                    _ = t.register || function() {},
                    u = function(t, e, i, s) {
                        var r = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return _(r, t), r
                    },
                    p = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    c = function(e, i) {
                        var s = h("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, r.config = function(t) {
                            return new s(t)
                        }, s
                    },
                    f = u("Back", c("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), c("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), c("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    d = m.prototype = new t;
                return d.constructor = m, d.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = h("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, d.config = e.config = function(t) {
                    return new e(t)
                }, i = h("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), c = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --c > -1;) i = f ? Math.random() : 1 / u * c, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), f ? s += Math.random() * r - .5 * r : c % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                        x: i,
                        y: s
                    };
                    for (l.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new p(1, 1, null), c = u; --c > -1;) a = l[c], o = new p(a.x, a.y, o);
                    this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
                }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, d.config = function(t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), l("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), l("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", l("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), l("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), l("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function(e, i, s) {
                    var r = h("easing." + e, function(t, e) {
                            this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
                }, .3), s("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
                }, .45)), u("Expo", l("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), l("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), l("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", l("SineOut", function(t) {
                    return Math.sin(t * o)
                }), l("SineIn", function(t) {
                    return -Math.cos(t * o) + 1
                }), l("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), f
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var s, r, n, a, o, h = function(t) {
                    var e, s = t.split("."),
                        r = i;
                    for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {};
                    return r
                },
                l = h("com.greensock"),
                _ = 1e-10,
                u = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                p = function() {},
                c = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                f = {},
                m = function(s, r, n, a) {
                    this.sc = f[s] ? f[s].sc : [], f[s] = this, this.gsClass = null, this.func = n;
                    var o = [];
                    this.check = function(l) {
                        for (var _, u, p, c, d = r.length, g = d; --d > -1;)(_ = f[r[d]] || new m(r[d], [])).gsClass ? (o[d] = _.gsClass, g--) : l && _.sc.push(this);
                        if (0 === g && n)
                            for (u = ("com.greensock." + s).split("."), p = u.pop(), c = h(u.join("."))[p] = this.gsClass = n.apply(n, o), a && (i[p] = c, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                                    return c
                                }) : s === e && "undefined" != typeof module && module.exports && (module.exports = c)), d = 0; this.sc.length > d; d++) this.sc[d].check()
                    }, this.check(!0)
                },
                d = t._gsDefine = function(t, e, i, s) {
                    return new m(t, e, i, s)
                },
                g = l._class = function(t, e, i) {
                    return e = e || function() {}, d(t, [], function() {
                        return e
                    }, i), e
                };
            d.globals = i;
            var v = [0, 0, 1, 1],
                y = [],
                T = g("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v
                }, !0),
                w = T.map = {},
                x = T.register = function(t, e, i, s) {
                    for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                        for (n = h[_], r = s ? g("easing." + n, null, !0) : l.easing[n] || {}, a = u.length; --a > -1;) o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for (n = T.prototype, n._calcEnd = !1, n.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) n = s[r] + ",Power" + r, x(new T(null, null, 1, r), n, "easeOut", !0), x(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), x(new T(null, null, 3, r), n, "easeInOut");
            w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
            var b = g("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            n = b.prototype, n.addEventListener = function(t, e, i, s, r) {
                r = r || 0;
                var n, h, l = this._listeners[t],
                    _ = 0;
                for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) n = l[h], n.c === e && n.s === i ? l.splice(h, 1) : 0 === _ && r > n.pr && (_ = h + 1);
                l.splice(_, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: r
                }), this !== a || o || a.wake()
            }, n.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return s.splice(i, 1), void 0
            }, n.dispatchEvent = function(t) {
                var e, i, s, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s && (s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i))
            };
            var P = t.requestAnimationFrame,
                S = t.cancelAnimationFrame,
                k = Date.now || function() {
                    return (new Date).getTime()
                },
                R = k();
            for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P;) P = t[s[r] + "RequestAnimationFrame"], S = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
            g("Ticker", function(t, e) {
                var i, s, r, n, h, l = this,
                    u = k(),
                    c = e !== !1 && P,
                    f = 500,
                    m = 33,
                    d = "tick",
                    g = function(t) {
                        var e, a, o = k() - R;
                        o > f && (u += o - m), R += o, l.time = (R - u) / 1e3, e = l.time - h, (!i || e > 0 || t === !0) && (l.frame++, h += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(g)), a && l.dispatchEvent(d)
                    };
                b.call(l), l.time = l.frame = 0, l.tick = function() {
                    g(!0)
                }, l.lagSmoothing = function(t, e) {
                    f = t || 1 / _, m = Math.min(e, f, 0)
                }, l.sleep = function() {
                    null != r && (c && S ? S(r) : clearTimeout(r), s = p, r = null, l === a && (o = !1))
                }, l.wake = function() {
                    null !== r ? l.sleep() : l.frame > 10 && (R = k() - f + 5), s = 0 === i ? p : c && P ? P : function(t) {
                        return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
                    }, l === a && (o = !0), g(2)
                }, l.fps = function(t) {
                    return arguments.length ? (i = t, n = 1 / (i || 60), h = this.time + n, l.wake(), void 0) : i
                }, l.useRAF = function(t) {
                    return arguments.length ? (l.sleep(), c = t, l.fps(i), void 0) : c
                }, l.fps(t), setTimeout(function() {
                    c && (!r || 5 > l.frame) && l.useRAF(!1)
                }, 1500)
            }), n = l.Ticker.prototype = new l.events.EventDispatcher, n.constructor = l.Ticker;
            var A = g("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, j) {
                    o || a.wake();
                    var i = this.vars.useFrames ? B : j;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = A.ticker = new l.Ticker, n = A.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
            var C = function() {
                o && k() - R > 2e3 && a.wake(), setTimeout(C, 2e3)
            };
            C(), n.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, n.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, n.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, n.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, n.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, n.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, n.render = function() {}, n.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, n.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, n._enabled = function(t, e) {
                return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, n._kill = function() {
                return this._enabled(!1, !1)
            }, n.kill = function(t, e) {
                return this._kill(t, e), this
            }, n._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, n._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, n.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = c(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, n.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, n.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, n.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, n.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, n.totalTime = function(t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            r = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), I.length && q())
                }
                return this
            }, n.progress = n.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, n.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, n.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, n.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, n.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, n.paused = function(t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    o || t || a.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        s = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var O = g("core.SimpleTimeline", function(t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            n = O.prototype = new A, n.constructor = O, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, n._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, n.render = function(t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
            }, n.rawTime = function() {
                return o || a.wake(), this._totalTime
            };
            var D = g("TweenLite", function(e, i, s) {
                    if (A.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        h = this.vars.overwrite;
                    if (this._overwrite = h = null == h ? Y[D.defaultOverwrite] : "number" == typeof h ? h >> 0 : Y[h], (o || e instanceof Array || e.push && c(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = V(n, this, !1), 1 === h && this._siblings[r].length > 1 && W(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = V(e, this, !1), 1 === h && this._siblings.length > 1 && W(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
                }, !0),
                M = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                z = function(t, e) {
                    var i, s = {};
                    for (i in t) U[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                };
            n = D.prototype = new A, n.constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.15.1", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = !0, D.lagSmoothing = function(t, e) {
                a.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var I = [],
                F = {},
                E = D._internals = {
                    isArray: c,
                    isSelector: M,
                    lazyTweens: I
                },
                N = D._plugins = {},
                L = E.tweenLookup = {},
                X = 0,
                U = E.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1
                },
                Y = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                B = A._rootFramesTimeline = new O,
                j = A._rootTimeline = new O,
                q = E.lazyRender = function() {
                    var t, e = I.length;
                    for (F = {}; --e > -1;) t = I[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    I.length = 0
                };
            j._startTime = a.time, B._startTime = a.frame, j._active = B._active = !0, setTimeout(q, 1), A._updateRoot = D.render = function() {
                var t, e, i;
                if (I.length && q(), j.render((a.time - j._startTime) * j._timeScale, !1, !1), B.render((a.frame - B._startTime) * B._timeScale, !1, !1), I.length && q(), !(a.frame % 120)) {
                    for (i in L) {
                        for (e = L[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete L[i]
                    }
                    if (i = j._first, (!i || i._paused) && D.autoSleep && !B._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", A._updateRoot);
            var V = function(t, e, i) {
                    var s, r, n = t._gsTweenID;
                    if (L[n || (t._gsTweenID = n = "t" + X++)] || (L[n] = {
                            target: t,
                            tweens: []
                        }), e && (s = L[n].tweens, s[r = s.length] = e, i))
                        for (; --r > -1;) s[r] === e && s.splice(r, 1);
                    return L[n].tweens
                },
                G = function(t, e, i, s) {
                    var r, n, a = t.vars.onOverwrite;
                    return a && (r = a(t, e, i, s)), a = D.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1
                },
                W = function(t, e, i, s, r) {
                    var n, a, o, h;
                    if (1 === s || s >= 4) {
                        for (h = r.length, n = 0; h > n; n++)
                            if ((o = r[n]) !== e) o._gc || G(o, e) && o._enabled(!1, !1) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var l, u = e._startTime + _,
                        p = [],
                        c = 0,
                        f = 0 === e._duration;
                    for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || Z(e, 0, f), 0 === Z(o, l, f) && (p[c++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((f || !o._initted) && 2e-10 >= u - o._startTime || (p[c++] = o)));
                    for (n = c; --n > -1;)
                        if (o = p[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                            if (2 !== s && !G(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                Z = function(t, e, i) {
                    for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
                };
            n._init = function() {
                var t, e, i, s, r, n = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    h = !!n.immediateRender,
                    l = n.ease;
                if (n.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (s in n.startAt) r[s] = n.startAt[s];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (n.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (h = !1), i = {};
                        for (s in n) U[s] && "autoCSS" !== s || (i[s] = n[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && n.lazy !== !1, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = l = l ? l instanceof T ? l : "function" == typeof l ? new T(l, n.easeParams) : w[l] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = n.onUpdate, this._initted = !0
            }, n._initProps = function(e, i, s, r) {
                var n, a, o, h, l, _;
                if (null == e) return !1;
                F[e._gsTweenID] && q(), this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS !== !1 && z(this.vars, e);
                for (n in this.vars) {
                    if (_ = this.vars[n], U[n]) _ && (_ instanceof Array || _.push && c(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                    else if (N[n] && (h = new N[n])._onInitTween(e, this.vars[n], this)) {
                        for (this._firstPT = l = {
                                _next: this._firstPT,
                                t: h,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: n,
                                pg: !0,
                                pr: h._priority
                            }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                        (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[n] = l = {
                        _next: this._firstPT,
                        t: e,
                        p: n,
                        f: "function" == typeof e[n],
                        n: n,
                        pg: !1,
                        pr: 0
                    }, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                    l && l._next && (l._next._prev = l)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && W(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), o)
            }, n.render = function(t, e, i) {
                var s, r, n, a, o = this._time,
                    h = this._duration,
                    l = this._rawPrevTime;
                if (t >= h) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > l || l === _ && "isPause" !== this.data) && l !== t && (i = !0, l > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : _);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && l > 0 && l !== _) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t : _)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / h,
                        p = this._easeType,
                        c = this._easePower;
                    (1 === p || 3 === p && u >= .5) && (u = 1 - u), 3 === p && (u *= 2), 1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u), this.ratio = 1 === p ? 1 - u : 2 === p ? u : .5 > t / h ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / h);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = l, I.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === h && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
                }
            }, n._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var s, r, n, a, o, h, l, _, u;
                if ((c(e) || M(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s]) && (h = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) {
                                o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (l = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (n in l) o[n] && (u || (u = []), u.push(n));
                            if (!G(this, i, e, u)) return !1
                        }
                        for (n in l)(a = o[n]) && (a.pg && a.t._kill(l) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return h
            }, n.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this
            }, n._enabled = function(t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = V(s[i], this, !0);
                    else this._siblings = V(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s)
            }, D.delayedCall = function(t, e, i, s, r) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: s,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, s, r, n;
                if ((c(t) || M(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
                } else
                    for (s = V(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
            };
            var Q = g("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype
            }, !0);
            if (n = Q.prototype, Q.version = "1.10.1", Q.API = 2, n._firstPT = null, n._addTween = function(t, e, i, s, r, n) {
                    var a, o;
                    return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: a,
                        f: "function" == typeof t[e],
                        n: r || e,
                        r: n
                    }, o._next && (o._next._prev = o), o) : void 0
                }, n.setRatio = function(t) {
                    for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, n._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, n._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, Q.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === Q.API && (N[(new t[e])._propName] = t[e]);
                    return !0
                }, d.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        r = t.overwriteProps,
                        n = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            Q.call(this, i, s), this._overwriteProps = r || []
                        }, t.global === !0),
                        o = a.prototype = new Q(i);
                    o.constructor = a, a.API = t.API;
                    for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, Q.activate([a]), a
                }, s = t._gsQueue) {
                for (r = 0; s.length > r; r++) s[r]();
                for (n in f) f[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n)
            }
            o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
/* ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, function() {
    "use strict";
    var e = function() {};
    e.version = "2.0.5", window.addEventListener("mousewheel", function() {});
    var t = "data-scrollmagic-pin-spacer";
    e.Controller = function(r) {
        var o, s, a = "ScrollMagic.Controller",
            l = "FORWARD",
            c = "REVERSE",
            u = "PAUSED",
            f = n.defaults,
            d = this,
            h = i.extend({}, f, r),
            g = [],
            p = !1,
            v = 0,
            m = u,
            w = !0,
            y = 0,
            S = !0,
            b = function() {
                for (var e in h) f.hasOwnProperty(e) || delete h[e];
                if (h.container = i.get.elements(h.container)[0], !h.container) throw a + " init failed.";
                w = h.container === window || h.container === document.body || !document.body.contains(h.container), w && (h.container = window), y = z(), h.container.addEventListener("resize", T), h.container.addEventListener("scroll", T), h.refreshInterval = parseInt(h.refreshInterval) || f.refreshInterval, E()
            },
            E = function() {
                h.refreshInterval > 0 && (s = window.setTimeout(A, h.refreshInterval))
            },
            x = function() {
                return h.vertical ? i.get.scrollTop(h.container) : i.get.scrollLeft(h.container)
            },
            z = function() {
                return h.vertical ? i.get.height(h.container) : i.get.width(h.container)
            },
            C = this._setScrollPos = function(e) {
                h.vertical ? w ? window.scrollTo(i.get.scrollLeft(), e) : h.container.scrollTop = e : w ? window.scrollTo(e, i.get.scrollTop()) : h.container.scrollLeft = e
            },
            F = function() {
                if (S && p) {
                    var e = i.type.Array(p) ? p : g.slice(0);
                    p = !1;
                    var t = v;
                    v = d.scrollPos();
                    var n = v - t;
                    0 !== n && (m = n > 0 ? l : c), m === c && e.reverse(), e.forEach(function(e) {
                        e.update(!0)
                    })
                }
            },
            L = function() {
                o = i.rAF(F)
            },
            T = function(e) {
                "resize" == e.type && (y = z(), m = u), p !== !0 && (p = !0, L())
            },
            A = function() {
                if (!w && y != z()) {
                    var e;
                    try {
                        e = new Event("resize", {
                            bubbles: !1,
                            cancelable: !1
                        })
                    } catch (t) {
                        e = document.createEvent("Event"), e.initEvent("resize", !1, !1)
                    }
                    h.container.dispatchEvent(e)
                }
                g.forEach(function(e) {
                    e.refresh()
                }), E()
            };
        this._options = h;
        var O = function(e) {
            if (e.length <= 1) return e;
            var t = e.slice(0);
            return t.sort(function(e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1
            }), t
        };
        return this.addScene = function(t) {
            if (i.type.Array(t)) t.forEach(function(e) {
                d.addScene(e)
            });
            else if (t instanceof e.Scene)
                if (t.controller() !== d) t.addTo(d);
                else if (g.indexOf(t) < 0) {
                g.push(t), g = O(g), t.on("shift.controller_sort", function() {
                    g = O(g)
                });
                for (var n in h.globalSceneOptions) t[n] && t[n].call(t, h.globalSceneOptions[n])
            }
            return d
        }, this.removeScene = function(e) {
            if (i.type.Array(e)) e.forEach(function(e) {
                d.removeScene(e)
            });
            else {
                var t = g.indexOf(e);
                t > -1 && (e.off("shift.controller_sort"), g.splice(t, 1), e.remove())
            }
            return d
        }, this.updateScene = function(t, n) {
            return i.type.Array(t) ? t.forEach(function(e) {
                d.updateScene(e, n)
            }) : n ? t.update(!0) : p !== !0 && t instanceof e.Scene && (p = p || [], -1 == p.indexOf(t) && p.push(t), p = O(p), L()), d
        }, this.update = function(e) {
            return T({
                type: "resize"
            }), e && F(), d
        }, this.scrollTo = function(n, r) {
            if (i.type.Number(n)) C.call(h.container, n, r);
            else if (n instanceof e.Scene) n.controller() === d && d.scrollTo(n.scrollOffset(), r);
            else if (i.type.Function(n)) C = n;
            else {
                var o = i.get.elements(n)[0];
                if (o) {
                    for (; o.parentNode.hasAttribute(t);) o = o.parentNode;
                    var s = h.vertical ? "top" : "left",
                        a = i.get.offset(h.container),
                        l = i.get.offset(o);
                    w || (a[s] -= d.scrollPos()), d.scrollTo(l[s] - a[s], r)
                }
            }
            return d
        }, this.scrollPos = function(e) {
            return arguments.length ? (i.type.Function(e) && (x = e), d) : x.call(d)
        }, this.info = function(e) {
            var t = {
                size: y,
                vertical: h.vertical,
                scrollPos: v,
                scrollDirection: m,
                container: h.container,
                isDocument: w
            };
            return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
        }, this.loglevel = function() {
            return d
        }, this.enabled = function(e) {
            return arguments.length ? (S != e && (S = !!e, d.updateScene(g, !0)), d) : S
        }, this.destroy = function(e) {
            window.clearTimeout(s);
            for (var t = g.length; t--;) g[t].destroy(e);
            return h.container.removeEventListener("resize", T), h.container.removeEventListener("scroll", T), i.cAF(o), null
        }, b(), d
    };
    var n = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    e.Controller.addOption = function(e, t) {
        n.defaults[e] = t
    }, e.Controller.extend = function(t) {
        var n = this;
        e.Controller = function() {
            return n.apply(this, arguments), this.$super = i.extend({}, this), t.apply(this, arguments) || this
        }, i.extend(e.Controller, n), e.Controller.prototype = n.prototype, e.Controller.prototype.constructor = e.Controller
    }, e.Scene = function(n) {
        var o, s, a = "BEFORE",
            l = "DURING",
            c = "AFTER",
            u = r.defaults,
            f = this,
            d = i.extend({}, u, n),
            h = a,
            g = 0,
            p = {
                start: 0,
                end: 0
            },
            v = 0,
            m = !0,
            w = function() {
                for (var e in d) u.hasOwnProperty(e) || delete d[e];
                for (var t in u) L(t);
                C()
            },
            y = {};
        this.on = function(e, t) {
            return i.type.Function(t) && (e = e.trim().split(" "), e.forEach(function(e) {
                var n = e.split("."),
                    r = n[0],
                    i = n[1];
                "*" != r && (y[r] || (y[r] = []), y[r].push({
                    namespace: i || "",
                    callback: t
                }))
            })), f
        }, this.off = function(e, t) {
            return e ? (e = e.trim().split(" "), e.forEach(function(e) {
                var n = e.split("."),
                    r = n[0],
                    i = n[1] || "",
                    o = "*" === r ? Object.keys(y) : [r];
                o.forEach(function(e) {
                    for (var n = y[e] || [], r = n.length; r--;) {
                        var o = n[r];
                        !o || i !== o.namespace && "*" !== i || t && t != o.callback || n.splice(r, 1)
                    }
                    n.length || delete y[e]
                })
            }), f) : f
        }, this.trigger = function(t, n) {
            if (t) {
                var r = t.trim().split("."),
                    i = r[0],
                    o = r[1],
                    s = y[i];
                s && s.forEach(function(t) {
                    o && o !== t.namespace || t.callback.call(f, new e.Event(i, t.namespace, f, n))
                })
            }
            return f
        }, f.on("change.internal", function(e) {
            "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? E() : "reverse" === e.what && f.update())
        }).on("shift.internal", function() {
            S(), f.update()
        }), this.addTo = function(t) {
            return t instanceof e.Controller && s != t && (s && s.removeScene(f), s = t, C(), b(!0), E(!0), S(), s.info("container").addEventListener("resize", x), t.addScene(f), f.trigger("add", {
                controller: s
            }), f.update()), f
        }, this.enabled = function(e) {
            return arguments.length ? (m != e && (m = !!e, f.update(!0)), f) : m
        }, this.remove = function() {
            if (s) {
                s.info("container").removeEventListener("resize", x);
                var e = s;
                s = void 0, e.removeScene(f), f.trigger("remove")
            }
            return f
        }, this.destroy = function(e) {
            return f.trigger("destroy", {
                reset: e
            }), f.remove(), f.off("*.*"), null
        }, this.update = function(e) {
            if (s)
                if (e)
                    if (s.enabled() && m) {
                        var t, n = s.info("scrollPos");
                        t = d.duration > 0 ? (n - p.start) / (p.end - p.start) : n >= p.start ? 1 : 0, f.trigger("update", {
                            startPos: p.start,
                            endPos: p.end,
                            scrollPos: n
                        }), f.progress(t)
                    } else T && h === l && O(!0);
            else s.updateScene(f, !1);
            return f
        }, this.refresh = function() {
            return b(), E(), f
        }, this.progress = function(e) {
            if (arguments.length) {
                var t = !1,
                    n = h,
                    r = s ? s.info("scrollDirection") : "PAUSED",
                    i = d.reverse || e >= g;
                if (0 === d.duration ? (t = g != e, g = 1 > e && i ? 0 : 1, h = 0 === g ? a : l) : 0 > e && h !== a && i ? (g = 0, h = a, t = !0) : e >= 0 && 1 > e && i ? (g = e, h = l, t = !0) : e >= 1 && h !== c ? (g = 1, h = c, t = !0) : h !== l || i || O(), t) {
                    var o = {
                            progress: g,
                            state: h,
                            scrollDirection: r
                        },
                        u = h != n,
                        p = function(e) {
                            f.trigger(e, o)
                        };
                    u && n !== l && (p("enter"), p(n === a ? "start" : "end")), p("progress"), u && h !== l && (p(h === a ? "start" : "end"), p("leave"))
                }
                return f
            }
            return g
        };
        var S = function() {
                p = {
                    start: v + d.offset
                }, s && d.triggerElement && (p.start -= s.info("size") * d.triggerHook), p.end = p.start + d.duration
            },
            b = function(e) {
                if (o) {
                    var t = "duration";
                    F(t, o.call(f)) && !e && (f.trigger("change", {
                        what: t,
                        newval: d[t]
                    }), f.trigger("shift", {
                        reason: t
                    }))
                }
            },
            E = function(e) {
                var n = 0,
                    r = d.triggerElement;
                if (s && r) {
                    for (var o = s.info(), a = i.get.offset(o.container), l = o.vertical ? "top" : "left"; r.parentNode.hasAttribute(t);) r = r.parentNode;
                    var c = i.get.offset(r);
                    o.isDocument || (a[l] -= s.scrollPos()), n = c[l] - a[l]
                }
                var u = n != v;
                v = n, u && !e && f.trigger("shift", {
                    reason: "triggerElementPosition"
                })
            },
            x = function() {
                d.triggerHook > 0 && f.trigger("shift", {
                    reason: "containerResize"
                })
            },
            z = i.extend(r.validate, {
                duration: function(e) {
                    if (i.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                        var t = parseFloat(e) / 100;
                        e = function() {
                            return s ? s.info("size") * t : 0
                        }
                    }
                    if (i.type.Function(e)) {
                        o = e;
                        try {
                            e = parseFloat(o())
                        } catch (t) {
                            e = -1
                        }
                    }
                    if (e = parseFloat(e), !i.type.Number(e) || 0 > e) throw o ? (o = void 0, 0) : 0;
                    return e
                }
            }),
            C = function(e) {
                e = arguments.length ? [e] : Object.keys(z), e.forEach(function(e) {
                    var t;
                    if (z[e]) try {
                        t = z[e](d[e])
                    } catch (n) {
                        t = u[e]
                    } finally {
                        d[e] = t
                    }
                })
            },
            F = function(e, t) {
                var n = !1,
                    r = d[e];
                return d[e] != t && (d[e] = t, C(e), n = r != d[e]), n
            },
            L = function(e) {
                f[e] || (f[e] = function(t) {
                    return arguments.length ? ("duration" === e && (o = void 0), F(e, t) && (f.trigger("change", {
                        what: e,
                        newval: d[e]
                    }), r.shifts.indexOf(e) > -1 && f.trigger("shift", {
                        reason: e
                    })), f) : d[e]
                })
            };
        this.controller = function() {
            return s
        }, this.state = function() {
            return h
        }, this.scrollOffset = function() {
            return p.start
        }, this.triggerPosition = function() {
            var e = d.offset;
            return s && (e += d.triggerElement ? v : s.info("size") * f.triggerHook()), e
        };
        var T, A;
        f.on("shift.internal", function(e) {
            var t = "duration" === e.reason;
            (h === c && t || h === l && 0 === d.duration) && O(), t && _()
        }).on("progress.internal", function() {
            O()
        }).on("add.internal", function() {
            _()
        }).on("destroy.internal", function(e) {
            f.removePin(e.reset)
        });
        var O = function(e) {
                if (T && s) {
                    var t = s.info(),
                        n = A.spacer.firstChild;
                    if (e || h !== l) {
                        var r = {
                                position: A.inFlow ? "relative" : "absolute",
                                top: 0,
                                left: 0
                            },
                            o = i.css(n, "position") != r.position;
                        A.pushFollowers ? d.duration > 0 && (h === c && 0 === parseFloat(i.css(A.spacer, "padding-top")) ? o = !0 : h === a && 0 === parseFloat(i.css(A.spacer, "padding-bottom")) && (o = !0)) : r[t.vertical ? "top" : "left"] = d.duration * g, i.css(n, r), o && _()
                    } else {
                        "fixed" != i.css(n, "position") && (i.css(n, {
                            position: "fixed"
                        }), _());
                        var u = i.get.offset(A.spacer, !0),
                            f = d.reverse || 0 === d.duration ? t.scrollPos - p.start : Math.round(g * d.duration * 10) / 10;
                        u[t.vertical ? "top" : "left"] += f, i.css(A.spacer.firstChild, {
                            top: u.top,
                            left: u.left
                        })
                    }
                }
            },
            _ = function() {
                if (T && s && A.inFlow) {
                    var e = h === l,
                        t = s.info("vertical"),
                        n = A.spacer.firstChild,
                        r = i.isMarginCollapseType(i.css(A.spacer, "display")),
                        o = {};
                    A.relSize.width || A.relSize.autoFullWidth ? e ? i.css(T, {
                        width: i.get.width(A.spacer)
                    }) : i.css(T, {
                        width: "100%"
                    }) : (o["min-width"] = i.get.width(t ? T : n, !0, !0), o.width = e ? o["min-width"] : "auto"), A.relSize.height ? e ? i.css(T, {
                        height: i.get.height(A.spacer) - (A.pushFollowers ? d.duration : 0)
                    }) : i.css(T, {
                        height: "100%"
                    }) : (o["min-height"] = i.get.height(t ? n : T, !0, !r), o.height = e ? o["min-height"] : "auto"), A.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = d.duration * g, o["padding" + (t ? "Bottom" : "Right")] = d.duration * (1 - g)), i.css(A.spacer, o)
                }
            },
            N = function() {
                s && T && h === l && !s.info("isDocument") && O()
            },
            P = function() {
                s && T && h === l && ((A.relSize.width || A.relSize.autoFullWidth) && i.get.width(window) != i.get.width(A.spacer.parentNode) || A.relSize.height && i.get.height(window) != i.get.height(A.spacer.parentNode)) && _()
            },
            D = function(e) {
                s && T && h === l && !s.info("isDocument") && (e.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((e.wheelDelta || e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
            };
        this.setPin = function(e, n) {
            var r = {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            };
            if (n = i.extend({}, r, n), e = i.get.elements(e)[0], !e) return f;
            if ("fixed" === i.css(e, "position")) return f;
            if (T) {
                if (T === e) return f;
                f.removePin()
            }
            T = e;
            var o = T.parentNode.style.display,
                s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            T.parentNode.style.display = "none";
            var a = "absolute" != i.css(T, "position"),
                l = i.css(T, s.concat(["display"])),
                c = i.css(T, ["width", "height"]);
            T.parentNode.style.display = o, !a && n.pushFollowers && (n.pushFollowers = !1);
            var u = T.parentNode.insertBefore(document.createElement("div"), T),
                d = i.extend(l, {
                    position: a ? "relative" : "absolute",
                    boxSizing: "content-box",
                    mozBoxSizing: "content-box",
                    webkitBoxSizing: "content-box"
                });
            if (a || i.extend(d, i.css(T, ["width", "height"])), i.css(u, d), u.setAttribute(t, ""), i.addClass(u, n.spacerClass), A = {
                    spacer: u,
                    relSize: {
                        width: "%" === c.width.slice(-1),
                        height: "%" === c.height.slice(-1),
                        autoFullWidth: "auto" === c.width && a && i.isMarginCollapseType(l.display)
                    },
                    pushFollowers: n.pushFollowers,
                    inFlow: a
                }, !T.___origStyle) {
                T.___origStyle = {};
                var h = T.style,
                    g = s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                g.forEach(function(e) {
                    T.___origStyle[e] = h[e] || ""
                })
            }
            return A.relSize.width && i.css(u, {
                width: c.width
            }), A.relSize.height && i.css(u, {
                height: c.height
            }), u.appendChild(T), i.css(T, {
                position: a ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (A.relSize.width || A.relSize.autoFullWidth) && i.css(T, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll", N), window.addEventListener("resize", N), window.addEventListener("resize", P), T.addEventListener("mousewheel", D), T.addEventListener("DOMMouseScroll", D), O(), f
        }, this.removePin = function(e) {
            if (T) {
                if (h === l && O(!0), e || !s) {
                    var n = A.spacer.firstChild;
                    if (n.hasAttribute(t)) {
                        var r = A.spacer.style,
                            o = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                        margins = {}, o.forEach(function(e) {
                            margins[e] = r[e] || ""
                        }), i.css(n, margins)
                    }
                    A.spacer.parentNode.insertBefore(n, A.spacer), A.spacer.parentNode.removeChild(A.spacer), T.parentNode.hasAttribute(t) || (i.css(T, T.___origStyle), delete T.___origStyle)
                }
                window.removeEventListener("scroll", N), window.removeEventListener("resize", N), window.removeEventListener("resize", P), T.removeEventListener("mousewheel", D), T.removeEventListener("DOMMouseScroll", D), T = void 0
            }
            return f
        };
        var R, k = [];
        return f.on("destroy.internal", function(e) {
            f.removeClassToggle(e.reset)
        }), this.setClassToggle = function(e, t) {
            var n = i.get.elements(e);
            return 0 !== n.length && i.type.String(t) ? (k.length > 0 && f.removeClassToggle(), R = t, k = n, f.on("enter.internal_class leave.internal_class", function(e) {
                var t = "enter" === e.type ? i.addClass : i.removeClass;
                k.forEach(function(e) {
                    t(e, R)
                })
            }), f) : f
        }, this.removeClassToggle = function(e) {
            return e && k.forEach(function(e) {
                i.removeClass(e, R)
            }), f.off("start.internal_class end.internal_class"), R = void 0, k = [], f
        }, w(), f
    };
    var r = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(e) {
                if (e = parseFloat(e), !i.type.Number(e)) throw 0;
                return e
            },
            triggerElement: function(e) {
                if (e = e || void 0) {
                    var t = i.get.elements(e)[0];
                    if (!t) throw 0;
                    e = t
                }
                return e
            },
            triggerHook: function(e) {
                var t = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (i.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                    if (!(e in t)) throw 0;
                    e = t[e]
                }
                return e
            },
            reverse: function(e) {
                return !!e
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    e.Scene.addOption = function(e, t, n, i) {
        e in r.defaults || (r.defaults[e] = t, r.validate[e] = n, i && r.shifts.push(e))
    }, e.Scene.extend = function(t) {
        var n = this;
        e.Scene = function() {
            return n.apply(this, arguments), this.$super = i.extend({}, this), t.apply(this, arguments) || this
        }, i.extend(e.Scene, n), e.Scene.prototype = n.prototype, e.Scene.prototype.constructor = e.Scene
    }, e.Event = function(e, t, n, r) {
        r = r || {};
        for (var i in r) this[i] = r[i];
        return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
    };
    var i = e._util = function(e) {
        var t, n = {},
            r = function(e) {
                return parseFloat(e) || 0
            },
            i = function(t) {
                return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
            },
            o = function(t, n, o, s) {
                if (n = n === document ? e : n, n === e) s = !1;
                else if (!f.DomElement(n)) return 0;
                t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
                var a = (o ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0;
                if (o && s) {
                    var l = i(n);
                    a += "Height" === t ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight)
                }
                return a
            },
            s = function(e) {
                return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                    return e[1].toUpperCase()
                })
            };
        n.extend = function(e) {
            for (e = e || {}, t = 1; t < arguments.length; t++)
                if (arguments[t])
                    for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
            return e
        }, n.isMarginCollapseType = function(e) {
            return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
        };
        var a = 0,
            l = ["ms", "moz", "webkit", "o"],
            c = e.requestAnimationFrame,
            u = e.cancelAnimationFrame;
        for (t = 0; !c && t < l.length; ++t) c = e[l[t] + "RequestAnimationFrame"], u = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
        c || (c = function(t) {
            var n = (new Date).getTime(),
                r = Math.max(0, 16 - (n - a)),
                i = e.setTimeout(function() {
                    t(n + r)
                }, r);
            return a = n + r, i
        }), u || (u = function(t) {
            e.clearTimeout(t)
        }), n.rAF = c.bind(e), n.cAF = u.bind(e);
        var f = n.type = function(e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        f.String = function(e) {
            return "string" === f(e)
        }, f.Function = function(e) {
            return "function" === f(e)
        }, f.Array = function(e) {
            return Array.isArray(e)
        }, f.Number = function(e) {
            return !f.Array(e) && e - parseFloat(e) + 1 >= 0
        }, f.DomElement = function(e) {
            return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        };
        var d = n.get = {};
        return d.elements = function(t) {
            var n = [];
            if (f.String(t)) try {
                t = document.querySelectorAll(t)
            } catch (e) {
                return n
            }
            if ("nodelist" === f(t) || f.Array(t))
                for (var r = 0, i = n.length = t.length; i > r; r++) {
                    var o = t[r];
                    n[r] = f.DomElement(o) ? o : d.elements(o)
                } else(f.DomElement(t) || t === document || t === e) && (n = [t]);
            return n
        }, d.scrollTop = function(t) {
            return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
        }, d.scrollLeft = function(t) {
            return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
        }, d.width = function(e, t, n) {
            return o("width", e, t, n)
        }, d.height = function(e, t, n) {
            return o("height", e, t, n)
        }, d.offset = function(e, t) {
            var n = {
                top: 0,
                left: 0
            };
            if (e && e.getBoundingClientRect) {
                var r = e.getBoundingClientRect();
                n.top = r.top, n.left = r.left, t || (n.top += d.scrollTop(), n.left += d.scrollLeft())
            }
            return n
        }, n.addClass = function(e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t)
        }, n.removeClass = function(e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }, n.css = function(e, t) {
            if (f.String(t)) return i(e)[s(t)];
            if (f.Array(t)) {
                var n = {},
                    r = i(e);
                return t.forEach(function(e) {
                    n[e] = r[s(e)]
                }), n
            }
            for (var o in t) {
                var a = t[o];
                a == parseFloat(a) && (a += "px"), e.style[s(o)] = a
            }
        }, n
    }(window || {});
    return e
});
! function(e, n) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], n) : "object" == typeof exports ? (require("gsap"), n(require("scrollmagic"), TweenMax, TimelineMax)) : n(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite)
}(this, function(e, n, r) {
    "use strict";
    e.Scene.addOption("tweenChanges", !1, function(e) {
        return !!e
    }), e.Scene.extend(function() {
        var e, t = this;
        t.on("progress.plugin_gsap", function() {
            i()
        }), t.on("destroy.plugin_gsap", function(e) {
            t.removeTween(e.reset)
        });
        var i = function() {
            if (e) {
                var n = t.progress(),
                    r = t.state();
                e.repeat && -1 === e.repeat() ? "DURING" === r && e.paused() ? e.play() : "DURING" === r || e.paused() || e.pause() : n != e.progress() && (0 === t.duration() ? n > 0 ? e.play() : e.reverse() : t.tweenChanges() && e.tweenTo ? e.tweenTo(n * e.duration()) : e.progress(n).pause())
            }
        };
        t.setTween = function(o, a, s) {
            var u;
            arguments.length > 1 && (arguments.length < 3 && (s = a, a = 1), o = n.to(o, a, s));
            try {
                u = r ? new r({
                    smoothChildTiming: !0
                }).add(o) : o, u.pause()
            } catch (p) {
                return t
            }
            return e && t.removeTween(), e = u, o.repeat && -1 === o.repeat() && (e.repeat(-1), e.yoyo(o.yoyo())), i(), t
        }, t.removeTween = function(n) {
            return e && (n && e.progress(0).pause(), e.kill(), e = void 0), t
        }
    })
});
/* jCarousel - v0.3.3 - 2015-04-07
 * http://sorgalla.com/jcarousel/
 * Copyright (c) 2006-2015 Jan Sorgalla; Licensed MIT */
! function(a) {
    "use strict";
    var b = a.jCarousel = {};
    b.version = "0.3.3";
    var c = /^([+\-]=)?(.+)$/;
    b.parseTarget = function(a) {
        var b = !1,
            d = "object" != typeof a ? c.exec(a) : null;
        return d ? (a = parseInt(d[2], 10) || 0, d[1] && (b = !0, "-=" === d[1] && (a *= -1))) : "object" != typeof a && (a = parseInt(a, 10) || 0), {
            target: a,
            relative: b
        }
    }, b.detectCarousel = function(a) {
        for (var b; a.length > 0;) {
            if (b = a.filter("[data-jcarousel]"), b.length > 0) return b;
            if (b = a.find("[data-jcarousel]"), b.length > 0) return b;
            a = a.parent()
        }
        return null
    }, b.base = function(c) {
        return {
            version: b.version,
            _options: {},
            _element: null,
            _carousel: null,
            _init: a.noop,
            _create: a.noop,
            _destroy: a.noop,
            _reload: a.noop,
            create: function() {
                return this._element.attr("data-" + c.toLowerCase(), !0).data(c, this), !1 === this._trigger("create") ? this : (this._create(), this._trigger("createend"), this)
            },
            destroy: function() {
                return !1 === this._trigger("destroy") ? this : (this._destroy(), this._trigger("destroyend"), this._element.removeData(c).removeAttr("data-" + c.toLowerCase()), this)
            },
            reload: function(a) {
                return !1 === this._trigger("reload") ? this : (a && this.options(a), this._reload(), this._trigger("reloadend"), this)
            },
            element: function() {
                return this._element
            },
            options: function(b, c) {
                if (0 === arguments.length) return a.extend({}, this._options);
                if ("string" == typeof b) {
                    if ("undefined" == typeof c) return "undefined" == typeof this._options[b] ? null : this._options[b];
                    this._options[b] = c
                } else this._options = a.extend({}, this._options, b);
                return this
            },
            carousel: function() {
                return this._carousel || (this._carousel = b.detectCarousel(this.options("carousel") || this._element), this._carousel || a.error('Could not detect carousel for plugin "' + c + '"')), this._carousel
            },
            _trigger: function(b, d, e) {
                var f, g = !1;
                return e = [this].concat(e || []), (d || this._element).each(function() {
                    f = a.Event((c + ":" + b).toLowerCase()), a(this).trigger(f, e), f.isDefaultPrevented() && (g = !0)
                }), !g
            }
        }
    }, b.plugin = function(c, d) {
        var e = a[c] = function(b, c) {
            this._element = a(b), this.options(c), this._init(), this.create()
        };
        return e.fn = e.prototype = a.extend({}, b.base(c), d), a.fn[c] = function(b) {
            var d = Array.prototype.slice.call(arguments, 1),
                f = this;
            return this.each("string" == typeof b ? function() {
                var e = a(this).data(c);
                if (!e) return a.error("Cannot call methods on " + c + ' prior to initialization; attempted to call method "' + b + '"');
                if (!a.isFunction(e[b]) || "_" === b.charAt(0)) return a.error('No such method "' + b + '" for ' + c + " instance");
                var g = e[b].apply(e, d);
                return g !== e && "undefined" != typeof g ? (f = g, !1) : void 0
            } : function() {
                var d = a(this).data(c);
                d instanceof e ? d.reload(b) : new e(this, b)
            }), f
        }, e
    }
}(jQuery),
function(a, b) {
    "use strict";
    var c = function(a) {
        return parseFloat(a) || 0
    };
    a.jCarousel.plugin("jcarousel", {
        animating: !1,
        tail: 0,
        inTail: !1,
        resizeTimer: null,
        lt: null,
        vertical: !1,
        rtl: !1,
        circular: !1,
        underflow: !1,
        relative: !1,
        _options: {
            list: function() {
                return this.element().children().eq(0)
            },
            items: function() {
                return this.list().children()
            },
            animation: 400,
            transitions: !1,
            wrap: null,
            vertical: null,
            rtl: null,
            center: !1
        },
        _list: null,
        _items: null,
        _target: a(),
        _first: a(),
        _last: a(),
        _visible: a(),
        _fullyvisible: a(),
        _init: function() {
            var a = this;
            return this.onWindowResize = function() {
                a.resizeTimer && clearTimeout(a.resizeTimer), a.resizeTimer = setTimeout(function() {
                    a.reload()
                }, 100)
            }, this
        },
        _create: function() {
            this._reload(), a(b).on("resize.jcarousel", this.onWindowResize)
        },
        _destroy: function() {
            a(b).off("resize.jcarousel", this.onWindowResize)
        },
        _reload: function() {
            this.vertical = this.options("vertical"), null == this.vertical && (this.vertical = this.list().height() > this.list().width()), this.rtl = this.options("rtl"), null == this.rtl && (this.rtl = function(b) {
                if ("rtl" === ("" + b.attr("dir")).toLowerCase()) return !0;
                var c = !1;
                return b.parents("[dir]").each(function() {
                    return /rtl/i.test(a(this).attr("dir")) ? (c = !0, !1) : void 0
                }), c
            }(this._element)), this.lt = this.vertical ? "top" : "left", this.relative = "relative" === this.list().css("position"), this._list = null, this._items = null;
            var b = this.index(this._target) >= 0 ? this._target : this.closest();
            this.circular = "circular" === this.options("wrap"), this.underflow = !1;
            var c = {
                left: 0,
                top: 0
            };
            return b.length > 0 && (this._prepare(b), this.list().find("[data-jcarousel-clone]").remove(), this._items = null, this.underflow = this._fullyvisible.length >= this.items().length, this.circular = this.circular && !this.underflow, c[this.lt] = this._position(b) + "px"), this.move(c), this
        },
        list: function() {
            if (null === this._list) {
                var b = this.options("list");
                this._list = a.isFunction(b) ? b.call(this) : this._element.find(b)
            }
            return this._list
        },
        items: function() {
            if (null === this._items) {
                var b = this.options("items");
                this._items = (a.isFunction(b) ? b.call(this) : this.list().find(b)).not("[data-jcarousel-clone]")
            }
            return this._items
        },
        index: function(a) {
            return this.items().index(a)
        },
        closest: function() {
            var b, d = this,
                e = this.list().position()[this.lt],
                f = a(),
                g = !1,
                h = this.vertical ? "bottom" : this.rtl && !this.relative ? "left" : "right";
            return this.rtl && this.relative && !this.vertical && (e += this.list().width() - this.clipping()), this.items().each(function() {
                if (f = a(this), g) return !1;
                var i = d.dimension(f);
                if (e += i, e >= 0) {
                    if (b = i - c(f.css("margin-" + h)), !(Math.abs(e) - i + b / 2 <= 0)) return !1;
                    g = !0
                }
            }), f
        },
        target: function() {
            return this._target
        },
        first: function() {
            return this._first
        },
        last: function() {
            return this._last
        },
        visible: function() {
            return this._visible
        },
        fullyvisible: function() {
            return this._fullyvisible
        },
        hasNext: function() {
            if (!1 === this._trigger("hasnext")) return !0;
            var a = this.options("wrap"),
                b = this.items().length - 1,
                c = this.options("center") ? this._target : this._last;
            return b >= 0 && !this.underflow && (a && "first" !== a || this.index(c) < b || this.tail && !this.inTail) ? !0 : !1
        },
        hasPrev: function() {
            if (!1 === this._trigger("hasprev")) return !0;
            var a = this.options("wrap");
            return this.items().length > 0 && !this.underflow && (a && "last" !== a || this.index(this._first) > 0 || this.tail && this.inTail) ? !0 : !1
        },
        clipping: function() {
            return this._element["inner" + (this.vertical ? "Height" : "Width")]()
        },
        dimension: function(a) {
            return a["outer" + (this.vertical ? "Height" : "Width")](!0)
        },
        scroll: function(b, c, d) {
            if (this.animating) return this;
            if (!1 === this._trigger("scroll", null, [b, c])) return this;
            a.isFunction(c) && (d = c, c = !0);
            var e = a.jCarousel.parseTarget(b);
            if (e.relative) {
                var f, g, h, i, j, k, l, m, n = this.items().length - 1,
                    o = Math.abs(e.target),
                    p = this.options("wrap");
                if (e.target > 0) {
                    var q = this.index(this._last);
                    if (q >= n && this.tail) this.inTail ? "both" === p || "last" === p ? this._scroll(0, c, d) : a.isFunction(d) && d.call(this, !1) : this._scrollTail(c, d);
                    else if (f = this.index(this._target), this.underflow && f === n && ("circular" === p || "both" === p || "last" === p) || !this.underflow && q === n && ("both" === p || "last" === p)) this._scroll(0, c, d);
                    else if (h = f + o, this.circular && h > n) {
                        for (m = n, j = this.items().get(-1); m++ < h;) j = this.items().eq(0), k = this._visible.index(j) >= 0, k && j.after(j.clone(!0).attr("data-jcarousel-clone", !0)), this.list().append(j), k || (l = {}, l[this.lt] = this.dimension(j), this.moveBy(l)), this._items = null;
                        this._scroll(j, c, d)
                    } else this._scroll(Math.min(h, n), c, d)
                } else if (this.inTail) this._scroll(Math.max(this.index(this._first) - o + 1, 0), c, d);
                else if (g = this.index(this._first), f = this.index(this._target), i = this.underflow ? f : g, h = i - o, 0 >= i && (this.underflow && "circular" === p || "both" === p || "first" === p)) this._scroll(n, c, d);
                else if (this.circular && 0 > h) {
                    for (m = h, j = this.items().get(0); m++ < 0;) {
                        j = this.items().eq(-1), k = this._visible.index(j) >= 0, k && j.after(j.clone(!0).attr("data-jcarousel-clone", !0)), this.list().prepend(j), this._items = null;
                        var r = this.dimension(j);
                        l = {}, l[this.lt] = -r, this.moveBy(l)
                    }
                    this._scroll(j, c, d)
                } else this._scroll(Math.max(h, 0), c, d)
            } else this._scroll(e.target, c, d);
            return this._trigger("scrollend"), this
        },
        moveBy: function(a, b) {
            var d = this.list().position(),
                e = 1,
                f = 0;
            return this.rtl && !this.vertical && (e = -1, this.relative && (f = this.list().width() - this.clipping())), a.left && (a.left = d.left + f + c(a.left) * e + "px"), a.top && (a.top = d.top + f + c(a.top) * e + "px"), this.move(a, b)
        },
        move: function(b, c) {
            c = c || {};
            var d = this.options("transitions"),
                e = !!d,
                f = !!d.transforms,
                g = !!d.transforms3d,
                h = c.duration || 0,
                i = this.list();
            if (!e && h > 0) return void i.animate(b, c);
            var j = c.complete || a.noop,
                k = {};
            if (e) {
                var l = {
                        transitionDuration: i.css("transitionDuration"),
                        transitionTimingFunction: i.css("transitionTimingFunction"),
                        transitionProperty: i.css("transitionProperty")
                    },
                    m = j;
                j = function() {
                    a(this).css(l), m.call(this)
                }, k = {
                    transitionDuration: (h > 0 ? h / 1e3 : 0) + "s",
                    transitionTimingFunction: d.easing || c.easing,
                    transitionProperty: h > 0 ? function() {
                        return f || g ? "all" : b.left ? "left" : "top"
                    }() : "none",
                    transform: "none"
                }
            }
            g ? k.transform = "translate3d(" + (b.left || 0) + "," + (b.top || 0) + ",0)" : f ? k.transform = "translate(" + (b.left || 0) + "," + (b.top || 0) + ")" : a.extend(k, b), e && h > 0 && i.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", j), i.css(k), 0 >= h && i.each(function() {
                j.call(this)
            })
        },
        _scroll: function(b, c, d) {
            if (this.animating) return a.isFunction(d) && d.call(this, !1), this;
            if ("object" != typeof b ? b = this.items().eq(b) : "undefined" == typeof b.jquery && (b = a(b)), 0 === b.length) return a.isFunction(d) && d.call(this, !1), this;
            this.inTail = !1, this._prepare(b);
            var e = this._position(b),
                f = this.list().position()[this.lt];
            if (e === f) return a.isFunction(d) && d.call(this, !1), this;
            var g = {};
            return g[this.lt] = e + "px", this._animate(g, c, d), this
        },
        _scrollTail: function(b, c) {
            if (this.animating || !this.tail) return a.isFunction(c) && c.call(this, !1), this;
            var d = this.list().position()[this.lt];
            this.rtl && this.relative && !this.vertical && (d += this.list().width() - this.clipping()), this.rtl && !this.vertical ? d += this.tail : d -= this.tail, this.inTail = !0;
            var e = {};
            return e[this.lt] = d + "px", this._update({
                target: this._target.next(),
                fullyvisible: this._fullyvisible.slice(1).add(this._visible.last())
            }), this._animate(e, b, c), this
        },
        _animate: function(b, c, d) {
            if (d = d || a.noop, !1 === this._trigger("animate")) return d.call(this, !1), this;
            this.animating = !0;
            var e = this.options("animation"),
                f = a.proxy(function() {
                    this.animating = !1;
                    var a = this.list().find("[data-jcarousel-clone]");
                    a.length > 0 && (a.remove(), this._reload()), this._trigger("animateend"), d.call(this, !0)
                }, this),
                g = "object" == typeof e ? a.extend({}, e) : {
                    duration: e
                },
                h = g.complete || a.noop;
            return c === !1 ? g.duration = 0 : "undefined" != typeof a.fx.speeds[g.duration] && (g.duration = a.fx.speeds[g.duration]), g.complete = function() {
                f(), h.call(this)
            }, this.move(b, g), this
        },
        _prepare: function(b) {
            var d, e, f, g, h = this.index(b),
                i = h,
                j = this.dimension(b),
                k = this.clipping(),
                l = this.vertical ? "bottom" : this.rtl ? "left" : "right",
                m = this.options("center"),
                n = {
                    target: b,
                    first: b,
                    last: b,
                    visible: b,
                    fullyvisible: k >= j ? b : a()
                };
            if (m && (j /= 2, k /= 2), k > j)
                for (;;) {
                    if (d = this.items().eq(++i), 0 === d.length) {
                        if (!this.circular) break;
                        if (d = this.items().eq(0), b.get(0) === d.get(0)) break;
                        if (e = this._visible.index(d) >= 0, e && d.after(d.clone(!0).attr("data-jcarousel-clone", !0)), this.list().append(d), !e) {
                            var o = {};
                            o[this.lt] = this.dimension(d), this.moveBy(o)
                        }
                        this._items = null
                    }
                    if (g = this.dimension(d), 0 === g) break;
                    if (j += g, n.last = d, n.visible = n.visible.add(d), f = c(d.css("margin-" + l)), k >= j - f && (n.fullyvisible = n.fullyvisible.add(d)), j >= k) break
                }
            if (!this.circular && !m && k > j)
                for (i = h;;) {
                    if (--i < 0) break;
                    if (d = this.items().eq(i), 0 === d.length) break;
                    if (g = this.dimension(d), 0 === g) break;
                    if (j += g, n.first = d, n.visible = n.visible.add(d), f = c(d.css("margin-" + l)), k >= j - f && (n.fullyvisible = n.fullyvisible.add(d)), j >= k) break
                }
            return this._update(n), this.tail = 0, m || "circular" === this.options("wrap") || "custom" === this.options("wrap") || this.index(n.last) !== this.items().length - 1 || (j -= c(n.last.css("margin-" + l)), j > k && (this.tail = j - k)), this
        },
        _position: function(a) {
            var b = this._first,
                c = b.position()[this.lt],
                d = this.options("center"),
                e = d ? this.clipping() / 2 - this.dimension(b) / 2 : 0;
            return this.rtl && !this.vertical ? (c -= this.relative ? this.list().width() - this.dimension(b) : this.clipping() - this.dimension(b), c += e) : c -= e, !d && (this.index(a) > this.index(b) || this.inTail) && this.tail ? (c = this.rtl && !this.vertical ? c - this.tail : c + this.tail, this.inTail = !0) : this.inTail = !1, -c
        },
        _update: function(b) {
            var c, d = this,
                e = {
                    target: this._target,
                    first: this._first,
                    last: this._last,
                    visible: this._visible,
                    fullyvisible: this._fullyvisible
                },
                f = this.index(b.first || e.first) < this.index(e.first),
                g = function(c) {
                    var g = [],
                        h = [];
                    b[c].each(function() {
                        e[c].index(this) < 0 && g.push(this)
                    }), e[c].each(function() {
                        b[c].index(this) < 0 && h.push(this)
                    }), f ? g = g.reverse() : h = h.reverse(), d._trigger(c + "in", a(g)), d._trigger(c + "out", a(h)), d["_" + c] = b[c]
                };
            for (c in b) g(c);
            return this
        }
    })
}(jQuery, window),
function(a) {
    "use strict";
    a.jcarousel.fn.scrollIntoView = function(b, c, d) {
        var e, f = a.jCarousel.parseTarget(b),
            g = this.index(this._fullyvisible.first()),
            h = this.index(this._fullyvisible.last());
        if (e = f.relative ? f.target < 0 ? Math.max(0, g + f.target) : h + f.target : "object" != typeof f.target ? f.target : this.index(f.target), g > e) return this.scroll(e, c, d);
        if (e >= g && h >= e) return a.isFunction(d) && d.call(this, !1), this;
        for (var i, j = this.items(), k = this.clipping(), l = this.vertical ? "bottom" : this.rtl ? "left" : "right", m = 0;;) {
            if (i = j.eq(e), 0 === i.length) break;
            if (m += this.dimension(i), m >= k) {
                var n = parseFloat(i.css("margin-" + l)) || 0;
                m - n !== k && e++;
                break
            }
            if (0 >= e) break;
            e--
        }
        return this.scroll(e, c, d)
    }
}(jQuery),
function(a) {
    "use strict";
    a.jCarousel.plugin("jcarouselControl", {
        _options: {
            target: "+=1",
            event: "click",
            method: "scroll"
        },
        _active: null,
        _init: function() {
            this.onDestroy = a.proxy(function() {
                this._destroy(), this.carousel().one("jcarousel:createend", a.proxy(this._create, this))
            }, this), this.onReload = a.proxy(this._reload, this), this.onEvent = a.proxy(function(b) {
                b.preventDefault();
                var c = this.options("method");
                a.isFunction(c) ? c.call(this) : this.carousel().jcarousel(this.options("method"), this.options("target"))
            }, this)
        },
        _create: function() {
            this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend", this.onReload), this._element.on(this.options("event") + ".jcarouselcontrol", this.onEvent), this._reload()
        },
        _destroy: function() {
            this._element.off(".jcarouselcontrol", this.onEvent), this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend", this.onReload)
        },
        _reload: function() {
            var b, c = a.jCarousel.parseTarget(this.options("target")),
                d = this.carousel();
            if (c.relative) b = d.jcarousel(c.target > 0 ? "hasNext" : "hasPrev");
            else {
                var e = "object" != typeof c.target ? d.jcarousel("items").eq(c.target) : c.target;
                b = d.jcarousel("target").index(e) >= 0
            }
            return this._active !== b && (this._trigger(b ? "active" : "inactive"), this._active = b), this
        }
    })
}(jQuery),
function(a) {
    "use strict";
    a.jCarousel.plugin("jcarouselPagination", {
        _options: {
            perPage: null,
            item: function(a) {
                return '<a href="#' + a + '">' + a + "</a>"
            },
            event: "click",
            method: "scroll"
        },
        _carouselItems: null,
        _pages: {},
        _items: {},
        _currentPage: null,
        _init: function() {
            this.onDestroy = a.proxy(function() {
                this._destroy(), this.carousel().one("jcarousel:createend", a.proxy(this._create, this))
            }, this), this.onReload = a.proxy(this._reload, this), this.onScroll = a.proxy(this._update, this)
        },
        _create: function() {
            this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend", this.onReload).on("jcarousel:scrollend", this.onScroll), this._reload()
        },
        _destroy: function() {
            this._clear(), this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend", this.onReload).off("jcarousel:scrollend", this.onScroll), this._carouselItems = null
        },
        _reload: function() {
            var b = this.options("perPage");
            if (this._pages = {}, this._items = {}, a.isFunction(b) && (b = b.call(this)), null == b) this._pages = this._calculatePages();
            else
                for (var c, d = parseInt(b, 10) || 0, e = this._getCarouselItems(), f = 1, g = 0;;) {
                    if (c = e.eq(g++), 0 === c.length) break;
                    this._pages[f] = this._pages[f] ? this._pages[f].add(c) : c, g % d === 0 && f++
                }
            this._clear();
            var h = this,
                i = this.carousel().data("jcarousel"),
                j = this._element,
                k = this.options("item"),
                l = this._getCarouselItems().length;
            a.each(this._pages, function(b, c) {
                var d = h._items[b] = a(k.call(h, b, c));
                d.on(h.options("event") + ".jcarouselpagination", a.proxy(function() {
                    var a = c.eq(0);
                    if (i.circular) {
                        var d = i.index(i.target()),
                            e = i.index(a);
                        parseFloat(b) > parseFloat(h._currentPage) ? d > e && (a = "+=" + (l - d + e)) : e > d && (a = "-=" + (d + (l - e)))
                    }
                    i[this.options("method")](a)
                }, h)), j.append(d)
            }), this._update()
        },
        _update: function() {
            var b, c = this.carousel().jcarousel("target");
            a.each(this._pages, function(a, d) {
                return d.each(function() {
                    return c.is(this) ? (b = a, !1) : void 0
                }), b ? !1 : void 0
            }), this._currentPage !== b && (this._trigger("inactive", this._items[this._currentPage]), this._trigger("active", this._items[b])), this._currentPage = b
        },
        items: function() {
            return this._items
        },
        reloadCarouselItems: function() {
            return this._carouselItems = null, this
        },
        _clear: function() {
            this._element.empty(), this._currentPage = null
        },
        _calculatePages: function() {
            for (var a, b, c = this.carousel().data("jcarousel"), d = this._getCarouselItems(), e = c.clipping(), f = 0, g = 0, h = 1, i = {};;) {
                if (a = d.eq(g++), 0 === a.length) break;
                b = c.dimension(a), f + b > e && (h++, f = 0), f += b, i[h] = i[h] ? i[h].add(a) : a
            }
            return i
        },
        _getCarouselItems: function() {
            return this._carouselItems || (this._carouselItems = this.carousel().jcarousel("items")), this._carouselItems
        }
    })
}(jQuery),
function(a, b) {
    "use strict";
    var c, d, e = {
        hidden: "visibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange",
        webkitHidden: "webkitvisibilitychange"
    };
    a.each(e, function(a, e) {
        return "undefined" != typeof b[a] ? (c = a, d = e, !1) : void 0
    }), a.jCarousel.plugin("jcarouselAutoscroll", {
        _options: {
            target: "+=1",
            interval: 3e3,
            autostart: !0
        },
        _timer: null,
        _started: !1,
        _init: function() {
            this.onDestroy = a.proxy(function() {
                this._destroy(), this.carousel().one("jcarousel:createend", a.proxy(this._create, this))
            }, this), this.onAnimateEnd = a.proxy(this._start, this), this.onVisibilityChange = a.proxy(function() {
                b[c] ? this._stop() : this._start()
            }, this)
        },
        _create: function() {
            this.carousel().one("jcarousel:destroy", this.onDestroy), a(b).on(d, this.onVisibilityChange), this.options("autostart") && this.start()
        },
        _destroy: function() {
            this._stop(), this.carousel().off("jcarousel:destroy", this.onDestroy), a(b).off(d, this.onVisibilityChange)
        },
        _start: function() {
            return this._stop(), this._started ? (this.carousel().one("jcarousel:animateend", this.onAnimateEnd), this._timer = setTimeout(a.proxy(function() {
                this.carousel().jcarousel("scroll", this.options("target"))
            }, this), this.options("interval")), this) : void 0
        },
        _stop: function() {
            return this._timer && (this._timer = clearTimeout(this._timer)), this.carousel().off("jcarousel:animateend", this.onAnimateEnd), this
        },
        start: function() {
            return this._started = !0, this._start(), this
        },
        stop: function() {
            return this._started = !1, this._stop(), this
        }
    })
}(jQuery, document);;
/*
 * Ride 100%
 * Author: Stephan Belitz
 * Author URL: http://stephanbelitz.com/
 */
var ride100percent = {
    options: {
        opacity: {
            navRiderBackground: .5,
            navRiderText: .8
        },
        fadeSpeed: 200,
        fancybox: {
            margin: 100,
            padding: 0,
            overlayColor: function() {
                return $('body').hasClass('page-template-page-eyewear-php') ? '#ccc' : '#000';
            },
            overlayOpacity: 0.9,
            titleShow: false,
            type: 'image',
            cyclic: true
        },
        tmp: {
            productCyle: false,
            trylivePlayer: false,
            tryliveModel: false
        }
    },
    initialize: function() {
        var that = this;
        window.setTimeout(function() {
            $('#nav-main-bg > span').css('left', $('.menu-item.signin').offset().left);
        }, 1000);
        $('a[rel=external]').each(function() {
            $(this).attr('target', '_blank');
        });
        $('a').not('.no-lightbox, .view-noseguard, .product-image').each(function() {
            if ($(this).attr('href') && $(this).attr('href').toLowerCase().match('(jpg|jpeg|png|gif)')) {
                $(this).fancybox(that.options.fancybox);
                $(this).css('cursor', function() {
                    if ($.browser.mozilla) {
                        return '-moz-zoom-in';
                    } else if ($.browser.webkit) {
                        return '-webkit-zoom-in';
                    } else {
                        return 'pointer';
                    }
                });
            }
        });
        $('.lighbox-link').fancybox({
            margin: 100,
            padding: 0,
            overlayColor: '#000',
            overlayOpacity: 1,
            titleShow: false,
            type: 'iframe',
            cyclic: true,
            width: '90%',
            height: '90%'
        });
        $('.gallery a').click(function(e) {
            e.preventDefault();
            var imageArray = new Array(),
                images = $(this).parent().attr('data-lightbox').split(',');
            $.each(images, function(i) {
                imageArray.push(images[i]);
            });
            if (imageArray.length > 1) {
                $('#fancybox-left-ico').css('left', 0);
                $('#fancybox-right-ico').css({
                    'left': 'auto',
                    'right': 0
                });
            } else {
                $('#fancybox-left-ico').css('left', '-9999px');
                $('#fancybox-right-ico').css({
                    'left': '-9999px',
                    'right': 'auto'
                });
            }
            $.fancybox(imageArray, that.options.fancybox);
        });
        $('.ajax a').click(function(e) {
            e.preventDefault();
            $.get($(this).attr('href') + '?async=true', function(data) {
                $('#footer-content').html(data);
                var posTop;
                if ($('#nav-sub').length > 0) {
                    posTop = 124
                } else {
                    posTop = 41;
                }
                $('html,body').animate({
                    scrollTop: $('#footer-main').offset().top - posTop
                });
                $('#footer-content').fadeIn();
                $('#footer-close').fadeIn();
                $('#footer-main').animate({
                    'height': $('#footer-content').height() + 580 + 'px'
                });
            });
        });
        $('#footer-close').click(function() {
            $('#footer-main').animate({
                'height': '580px'
            });
            $('#footer-content').fadeOut();
            $(this).fadeOut();
        });
        if ($.browser.msie) {
            var field = $('#emailAddr'),
                val = field.attr('placeholder');
            field.val(val);
            field.focus(function() {
                if (field.val() == val) {
                    field.val('');
                }
            }).blur(function() {
                if ($.trim(field.val()) == '') {
                    field.val(val);
                }
            });
        }
        if (t) window.clearTimeout(t);
        var t = window.setTimeout(function() {
            if ($('#supersized').find('li').length < 2) {
                $('#prevslide, #nextslide').hide();
            }
        }, 500);
        $('#cart-tmp').writeCapture().html('<script src="http://shop.ride100percent.com/app/site/query/getcartitemcount.nl?c=3366283&n=1"></script>');
        var cartStatus = window.setInterval(function() {
            var items = parseInt($('#cart-tmp').html());
            if (isNaN(items) == false) {
                if (items != 0) {
                    $('.menu-primary .cart a').addClass('clearfix has-items').append('<span class="items">' + items + '</span>');
                }
                window.clearInterval(cartStatus);
            } else {
                return false;
            }
        }, 100);
        if (this.helper.ios() === false) {
            $('img').not('.no-lazyload, .attachment-download-image, .attachment-rider-image, .company-image, .product-rollover, .lookbook-image, .footer-button, .carousel-image').lazyload({
                effect: 'fadeIn',
                threshold: 200,
                placeholder: 'http://www.ride100percent.com/wp-content/themes/ride100percent/images/grey.gif'
            });
            $('.carousel-lookbook').each(function() {
                $(this).find('img').not(':first').lazyload({
                    effect: 'fadeIn',
                    placeholder: 'http://www.ride100percent.com/wp-content/themes/ride100percent/images/grey.gif',
                    event: 'lazyLoad'
                });
            });
        }
        $('.menu-primary').find('.menu-item.products').find('> .sub-menu').wrap('<div class="sub-menu-wrapper"></div>');
        $('.menu-primary').find('.menu-item.products').find('> .sub-menu-wrapper > .sub-menu > .menu-item > a').removeAttr('href');
        if ($('html').is('.touch')) {
            $('.menu-item.products').click(function() {
                if (!$(this).is('.clicked')) {
                    $(this).addClass('clicked');
                    return false;
                }
            });
        } else {
            $('.menu-primary').find('.menu-item.products').hover(function() {
                $(this).addClass('clicked');
            }, function() {
                $(this).removeClass('clicked');
            });
        }
        $('[data-layer]').click(function() {
            ride100percent.helper.showFeatureLayer($(this).data('layer'), $(this).data('model'));
        });
    },
    helper: {
        switchImage: function(img, src, direction) {
            img.fadeOut(ride100percent.options.fadeSpeed, function() {
                ride100percent.helper.toggleLoadingIcon('show');
                $(this).attr('src', src).load(function() {
                    $(this).fadeIn(ride100percent.options.fadeSpeed);
                    ride100percent.helper.toggleLoadingIcon('hide');
                });
            });
        },
        toggleLoadingIcon: function(method) {
            var screen = $('#loading-screen');
            if (method === 'show') {
                $('body').append('<div id="loading-icon"><span></span><span></span><em class="ride100">@</em></div>');
            } else {
                $('#loading-icon').remove();
            }
        },
        toggleLoadingScreen: function(method) {
            var screen = $('#loading-screen');
            if (method === 'show') {
                screen.addClass('in');
                window.setTimeout(function() {
                    ride100percent.helper.toggleLoadingIcon('show');
                }, 200);
            } else {
                screen.addClass('out');
                ride100percent.helper.toggleLoadingIcon('hide');
                window.setTimeout(function() {
                    screen.addClass('off');
                    window.setTimeout(function() {
                        screen.removeClass('in out');
                        window.setTimeout(function() {
                            screen.removeClass('off');
                        }, 300);
                    }, 300);
                }, 300);
            }
        },
        changeText: function(obj, text) {
            obj.fadeOut(ride100percent.options.fadeSpeed, function() {
                obj.html(text).fadeIn(ride100percent.options.fadeSpeed);
            });
        },
        isInView: function(obj) {
            var viewportTop = $(window).scrollTop(),
                viewportBottom = viewportTop + $(window).height(),
                objTop = $(obj).offset().top,
                objBottom = objTop + $(obj).height();
            return ((viewportBottom >= objTop) && (viewportTop <= objBottom));
        },
        closeLayerOutside: function(obj) {
            var mouse_over_obj = false;
            obj.hover(function() {
                mouse_over_obj = true;
            }, function() {
                mouse_over_obj = false;
            });
            $('body').mouseup(function() {
                if (!mouse_over_obj) obj.fadeOut(ride100percent.options.fadeSpeed);
            });
        },
        contentFullHeight: function() {
            var height = $(window).height() - parseInt($('#content').css('padding-top'));
            $('#content').css('height', height + 'px');
        },
        ios: function() {
            return (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent) ? true : false;
        },
        cleanURLstring: function(string) {
            string = string.replace(/[^a-zA-Z0-9_.-]/g, '-');
            string = string.replace(/[-]{2,}/g, '-');
            if (string.slice(string.length - 1, string.length) == '-') string = string.substr(0, string.length - 1);
            return string.toLowerCase();
        },
        colorFade: function(obj) {
            var colors = ['#C29C5C', '#6ca7c9', '#71dcb3', '#ff8068', '#97d888', '#8987b8'],
                speed = 2500,
                t = 0;

            function bgcolor() {
                obj.animate({
                    backgroundColor: colors[t]
                }, speed, 'linear', function() {
                    if (t == colors.length) {
                        t = 0
                    } else {
                        t++
                    }
                    bgcolor();
                })
            }
            bgcolor();
        },
        showFeatureLayer: function(obj, model) {
            var layer = $(obj);
            $('html').css('overflow', 'hidden');
            ride100percent.helper.toggleLoadingScreen('show');
            window.setTimeout(function() {
                var params = {
                    'time': $.now(),
                    'model': model
                };
                $.post('/wp-content/themes/ride100percent/remote/' + obj + '.php', params, function(response) {
                    $('body').append(response);
                    $(window).resize();
                    var layer = $('.layer');
                    layer.scrollTop(0).css('top', $(window).scrollTop());
                    if (layer.is('.layer-features')) {
                        layer.css('overflow-y', 'scroll');
                    }
                    layer.find('.feature-close').fadeIn(200);
                    if (layer.data('callback') === 'trylive') {
                        var wrapper = layer.find('.wrapper');
                        var src = layer.data('trylive-src');
                        var playername = layer.data('trylive-player');
                        ride100percent.options.tmp.tryliveModel = layer.data('trylive-model');
                        if (wrapper.find('iframe').length < 1) {
                            wrapper.find('.col-right').append('<iframe class="trylive" width="640" height="480" scrolling="no" src="' + src + '" name="' + playername + '"></iframe>');
                            Trylive.parse();
                            var players = Trylive.players();
                            var player = players[playername];
                            ride100percent.options.tmp.trylivePlayer = player;
                            wrapper.find('[data-trylive-mode]').click(function() {
                                var mode = $(this).data('trylive-mode');
                                if (typeof player.setLiveMode === 'function') {
                                    switch (mode) {
                                        case 'live':
                                            player.setLiveMode();
                                            break;
                                        case 'photo':
                                            player.setPhotoMode();
                                            break;
                                        case 'video':
                                            player.setVideoMode();
                                            break;
                                    }
                                    $(this).addClass('active').siblings().removeClass('active');
                                }
                            });
                            wrapper.find('[data-trylive-tool]').click(function() {
                                var tool = $(this).data('trylive-tool');
                                if (typeof player.setLiveMode === 'function') {
                                    switch (tool) {
                                        case 'scale':
                                            player.setTrueToScaleMode();
                                            break;
                                        case 'save':
                                            player.takeSnapshot({
                                                contents: true,
                                                flash: true,
                                                countdown: true
                                            });
                                            break;
                                    }
                                }
                            });
                            wrapper.find('[data-trylive-view]').click(function() {
                                var view = $(this).data('trylive-view');
                                if (typeof player.setLiveMode === 'function') {
                                    switch (view) {
                                        case 'single':
                                            player.splitView({
                                                viewport_number: 1
                                            });
                                            break;
                                        case 'compare2':
                                            player.splitView({
                                                viewport_number: 2
                                            });
                                            break;
                                        case 'compare4':
                                            player.splitView({
                                                viewport_number: 4
                                            });
                                            break;
                                    }
                                    $(this).addClass('active').siblings().removeClass('active');
                                }
                            });
                        }
                        var jcarousel = $('.carousel-tryon');
                        jcarousel.jcarousel({
                            wrap: 'circular',
                            visible: 4
                        });
                        layer.find('.prev').click(function() {
                            jcarousel.jcarousel('scroll', '-=4');
                        });
                        layer.find('.next').click(function() {
                            jcarousel.jcarousel('scroll', '+=4');
                        });
                        $('.carousel-tryon').find('li').click(function() {
                            var model = $(this);
                            ride100percent.options.tmp.trylivePlayer.loadAsset({
                                reference: model.data('model')
                            });
                        });
                    } else if (layer.data('callback') === 'video') {
                        var wrapper = layer.find('.video-wrapper');
                        $(window).resize(function() {
                            var params = {};
                            params.parent = wrapper;
                            params.margin = 24;
                            params.offset = 50;
                            params.ratio = '16/9';
                            params.parentWidth = params.parent.width();
                            params.parentHeight = params.parent.height();
                            params.videoWidth = params.parentWidth + ((params.parentWidth * params.margin) / 100);
                            params.videoHeight = (params.ratio == '16/9' ? Math.ceil((9 * params.parentWidth) / 16) : Math.ceil((3 * params.parentWidth) / 4));
                            params.marginTop = -((params.videoHeight - params.parentHeight) / 2);
                            params.marginLeft = -((params.parentWidth * (params.margin / 2)) / 100);
                            if (params.videoHeight < params.parentHeight) {
                                params.videoHeight = params.parentHeight + ((params.parentHeight * params.margin) / 100);
                                params.videoWidth = params.ratio == '16/9' ? Math.floor((16 * params.parentHeight) / 9) : Math.floor((4 * params.parentHeight) / 3);
                                params.marginTop = -((params.parentHeight * (params.margin / 2)) / 100);
                                params.marginLeft = -((params.videoWidth - params.parentWidth) / 2);
                            }
                            params.videoWidth += params.offset;
                            params.videoHeight += params.offset;
                            params.marginTop -= params.offset / 2;
                            params.marginLeft -= params.offset / 2;
                            wrapper.find('iframe').css({
                                width: params.videoWidth,
                                height: params.videoHeight,
                                marginTop: params.marginTop,
                                marginLeft: params.marginLeft
                            });
                        }).resize();
                        var iframe = layer.find('iframe')[0];
                        var player = $f(iframe);
                        player.addEvent('ready', function() {
                            player.api('play');
                            ride100percent.helper.toggleLoadingScreen('hide');
                        });
                    } else if (layer.data('callback') === 'pictures') {
                        layer.imagesLoaded(function() {
                            ride100percent.helper.toggleLoadingScreen('hide');
                            var jcarousel = $('.carousel-layer');
                            jcarousel.on('jcarousel:reload jcarousel:create', function() {
                                var carousel = $(this),
                                    width = carousel.innerWidth();
                                carousel.jcarousel('items').css({
                                    'width': Math.ceil(width) + 'px',
                                    'height': $(window).height()
                                });
                            }).jcarousel({
                                wrap: 'circular'
                            }).jcarouselAutoscroll({
                                autostart: true,
                                interval: 5000
                            });
                            layer.find('.prev').click(function() {
                                jcarousel.jcarousel('scroll', '-=1');
                            });
                            layer.find('.next').click(function() {
                                jcarousel.jcarousel('scroll', '+=1');
                            });
                        });
                    } else {
                        layer.imagesLoaded(function() {
                            layer.scrollTop(1);
                            ride100percent.helper.toggleLoadingScreen('hide');
                        });
                    }
                    layer.find('.close').one('click', function() {
                        var close = $(this);
                        layer.addClass('out');
                        if (layer.data('callback') === 'pictures') {
                            $('.carousel-layer').jcarousel('destroy');
                        }
                        if (close.is('.button-close')) {
                            if ($(close.data('target')).length > 0) {
                                $('html,body').animate({
                                    scrollTop: $(close.data('target')).offset().top - 41
                                });
                            } else if (close.data('link')) {
                                window.location.href = close.data('link');
                            }
                        }
                        $('html').css('overflow-y', 'scroll');
                        $(window).scroll();
                        window.setTimeout(function() {
                            layer.remove();
                        }, 300);
                    });
                }).fail(function() {
                    ride100percent.helper.toggleLoadingScreen('hide');
                });
            }, 300);
        }
    },
    carousels: {
        carouselHome: function() {
            var jcarousel = $('.carousel-entry');
            jcarousel.on('jcarousel:reload jcarousel:create', function() {
                var carousel = $(this),
                    width = carousel.innerWidth(),
                    height = width / 2.093023255813955;
                carousel.jcarousel('items').css({
                    'width': Math.ceil(width) + 'px',
                    'height': Math.ceil(height) + 'px'
                });
            }).jcarousel({
                wrap: 'circular',
                animation: {
                    duration: 1000,
                    easing: 'swing'
                }
            }).jcarouselAutoscroll({
                autostart: true,
                interval: 5000
            });
            $('.nav-carousel-entry').on('jcarouselpagination:active', 'button', function() {
                $(this).addClass('active');
            }).on('jcarouselpagination:inactive', 'button', function() {
                $(this).removeClass('active');
            }).jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<button type="button">' + page + '</button>';
                }
            });
            $('.carousel-wrapper').find('.prev').click(function() {
                jcarousel.jcarousel('scroll', '-=1');
            });
            $('.carousel-wrapper').find('.next').click(function() {
                jcarousel.jcarousel('scroll', '+=1');
            });
        },
        carouselLookbook: function() {
            $('.carousel-lookbook').each(function() {
                var lookbook = $(this),
                    items = $(this).find('li'),
                    current = 0,
                    next = 1,
                    interval = false;
                if (items.length > 1) {
                    lookbook.append('<button type="button" class="prev"></button><button type="button" class="next"></button>');
                    lookbook.find('button').click(function() {
                        if (interval) window.clearInterval(interval);
                        if ($(this).is('.next')) {
                            if (current === (items.length - 1)) {
                                next = 0;
                            } else {
                                next = (current + 1);
                            }
                        } else {
                            if (current === 0) {
                                next = items.length - 1;
                            } else {
                                next = (current - 1);
                            }
                        }
                        items.eq(next).find('img').trigger('lazyLoad');
                        items.eq(current).fadeOut(500).removeClass('active');
                        items.eq(next).fadeIn(500).addClass('active');
                        current = next;
                    });
                    interval = window.setInterval(function() {
                        if (current === (items.length - 1)) {
                            next = 0;
                        } else {
                            next = (current + 1);
                        }
                        items.eq(next).find('img').trigger('lazyLoad');
                        items.eq(current).fadeOut(500).removeClass('active');
                        items.eq(next).fadeIn(500).addClass('active');
                        current = next;
                    }, 5000);
                }
            });
        },
    },
    pageIndex: function() {
        $('html').css('overflow', 'hidden');
        $('a').hover(function() {
            $(this).addClass('over').siblings().addClass('out');
        }, function() {
            $(this).removeClass('over').siblings().removeClass('out');
        });
    },
    pageHome: function() {
        this.carousels.carouselHome();
        $(window).resize(function() {
            var wWidth = $(window).width() / 2;
            $('.eyewear-box > .background').css({
                'border-left-width': wWidth,
                'border-right-width': wWidth,
            });
        }).resize();
        var team = $('.team-box').find('.column-right img');
        $(window).scroll(function() {
            if (ride100percent.helper.isInView(team)) {
                var sTop = $(window).scrollTop();
                var transition = (sTop - $('.team-box').offset().top) * 0.1;
                console.log(transition);
                team.css({
                    '-webkit-transform': 'translateX(' + transition + 'px)',
                    '-ms-transform': 'translateX(' + transition + 'px)',
                    'transform': 'translateX(' + transition + 'px)'
                });
            }
        }).scroll();
    },
    pageTeam: function() {
        var that = this;
        var $container = $('#team .riders');
        $container.imagesLoaded(function() {
            $container.masonry({
                itemSelector: '.rider',
                singleMode: true,
                isAnimated: true,
                isFitWidth: true
            });
            $container.find('.custom-image').fadeIn();
        });
        if (that.helper.ios() === false) {
            that.carousels.carouselLookbook();
        }
        $('.rider a').hover(function() {
            $(this).find('span').fadeIn(that.options.fadeSpeed);
        }, function() {
            $(this).find('span').fadeOut(that.options.fadeSpeed);
        });
        $('.menu-primary').find('li.products').removeClass('current-page-ancestor');
    },
    pageDownloads: function() {
        var that = this;
        var $container = $('#downloads article:last');
        $container.imagesLoaded(function() {
            $container.masonry({
                itemSelector: '.download',
                singleMode: true,
                isAnimated: true,
                isFitWidth: true
            });
        });
        $('.download a').hover(function() {
            $(this).find('span').fadeIn(that.options.fadeSpeed);
        }, function() {
            $(this).find('span').fadeOut(that.options.fadeSpeed);
        });
    },
    pageRider: function() {
        var that = this,
            layerBg = $('<div class="rider-background"></div>');
        this.helper.contentFullHeight();
        $('body').append(layerBg);
        layerBg.height($(window).height());
        $(window).resize(function() {
            if (!layerBg.is(':visible')) {
                $('.rider-content').css({
                    'bottom': 'auto',
                    'top': $(window).height() - 210
                });
            }
            layerBg.height($(window).height());
        }).resize();
        $('.rider-content nav').find('[data-tab]').click(function() {
            var tab = $(this).data('tab');
            layerBg.fadeIn();
            $('.rider-content').animate({
                'top': 60
            }, function() {
                $('.rider-info[data-tab]').hide();
                $('.rider-info[data-tab="' + tab + '"]').fadeIn();
                layerBg.height($(window).height());
            });
        });
        layerBg.click(function() {
            layerBg.fadeOut();
            $('.rider-info[data-tab]').fadeOut();
            $('.rider-content').animate({
                'top': $(window).height() - 210
            });
        });
        $('.menu-primary').find('li.current_page_parent').removeClass('current_page_parent');
        $('.menu-primary').find('li.team').addClass('current_page_parent');
    },
    pageProducts: function(path) {
        var that = this,
            scrolled = false,
            target, segment;
        if (that.helper.ios() === false) {
            that.carousels.carouselLookbook();
        }
        if (window.location.hash) {
            var hash = window.location.hash.replace('?whence=', '');
            hash = hash.replace('&whence=', '');
            var target = $(hash);
            if (hash.indexOf('--') < 0 && $('.category-header-' + hash.substr(1)).length > 0) {
                target = $('.category-header-' + hash.substr(1));
            }
            if (target.length > 0) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                });
                window.location.hash = hash;
            }
        }
        $('body').on('click', 'a[href*=#]', function(e) {
            var hash = $(this).prop('hash');
            var target = $(hash);
            if ($('.category-header-' + hash.substr(1)).length > 0) {
                target = $('.category-header-' + hash.substr(1));
            }
            if (target.length > 0) {
                e.preventDefault();
                var pos = target.offset().top;
                $('html,body').animate({
                    scrollTop: target.offset().top
                });
                window.location.hash = hash;
            }
        });
        if (window.location.hash && window.location.hash.indexOf('--') > -1) {
            var separator = '--'
            hash = window.location.hash;
            target = hash.substr(0, window.location.hash.indexOf(separator)), segment = hash.substring(window.location.hash.indexOf(separator) + separator.length);
            if ($(target).length > 0) {
                $('html,body').animate({
                    scrollTop: $(target).offset().top - 35
                });
            }
        }
        that.helper.colorFade($('.product-toolbar > .lens-selector'));
        if ($('body').is('.page-template-page-performance-eyewear-accessories-php') || $('body').is('.ppage-template-page-performance-eyewear-accessories-php')) {
            $('#menu-performance-eyewear-mx, #menu-performance-eyewear-mtb').find('.accessories').addClass('selected');
        } else if ($('body').is('.page-template-page-accessories-php') && $('article').length === 1) {
            $('.nav-sub-wrapper').find('.accessories').addClass('selected');
        } else {
            $(window).scroll(function(e) {
                var currentIndex = -2;
                var articles = $('.category-header').map(function() {
                    return $(this).position().top;
                }).get();
                articles.push(10000000);
                var getCurrent = function(top) {
                    for (var i = 0; i < articles.length; i++) {
                        if (top > articles[i] && articles[i + 1] && top < articles[i + 1]) {
                            return i;
                        }
                    }
                };
                var checkIndex = getCurrent($(this).scrollTop() + 50);
                if ($('body').is('.page-template-page-goggles-php')) {
                    if (articles.length === 7 && checkIndex === 5) {
                        checkIndex = 4;
                        $('#nav-sub li').removeClass('selected').eq(currentIndex).addClass('strata-jr');
                    }
                    if (articles.length === 6 && checkIndex === 4) {
                        checkIndex = 3;
                        $('#nav-sub li').removeClass('selected').eq(currentIndex).addClass('strata-jr');
                    }
                } else if ($('body').is('.page-template-page-accessories-php') && $('article').length === 3) {
                    checkIndex += 5;
                } else {
                    $('#nav-sub li').removeClass('selected').eq(currentIndex).removeClass('strata-jr');
                }
                if (checkIndex !== currentIndex) {
                    currentIndex = checkIndex;
                    $('#nav-sub li').removeClass('selected').eq(currentIndex).addClass('selected');
                }
            });
        }
        $('article.content').each(function() {
            var obj = $(this),
                article = obj.attr('id'),
                noseguardVisible = false;
            var rewriteOptions = function(el) {
                var options = el.attr('data-options').split(','),
                    buyids = el.attr('data-buyids').split(','),
                    images = el.attr('data-images').split(',');
                $('#select-option-' + article).empty();
                $.each(options, function(i) {
                    $('#fields-tmp option[value="' + options[i] + '"]').attr({
                        'data-buyid': buyids[i],
                        'data-image': images[i]
                    }).clone().appendTo($('#select-option-' + article));
                });
                if ($('#content').hasClass('sportswear') == true) {
                    $('#layer-select-option-' + article + ' li:first').addClass('selected').siblings().removeClass('selected');
                    $('#button-select-option-' + article).html('Choose Size');
                }
            };
            var activateCartButton = function() {
                var parent = $('#fields-quantity-' + article);
                if (parent.hasClass('fields-quantity-disabled')) {
                    parent.find('.button-cart-overlay').remove();
                    parent.find('.button-select-quantity').bind('click', function() {
                        openQuantityLayer(quantityLayer);
                    });
                    parent.find('.button-select-quantity em').html($('#layer-select-quantity-' + article).find('li.selected').attr('data-value'));
                    parent.find('.button-cart').removeAttr('disabled');
                    parent.removeClass('fields-quantity-disabled');
                }
            };
            var deactivateCartButton = function() {
                var parent = $('#fields-quantity-' + article);
                parent.find('.button-cart-overlay').remove();
                parent.find('.button-select-quantity').unbind('click');
                parent.find('.button-select-quantity em').html(0);
                parent.find('.button-cart').attr('disabled', true);
                parent.addClass('fields-quantity-disabled');
                if ($('#fields-hidden-' + article + ' input[name="buyid"]').val() == '') {
                    showNoOptionLayer();
                }
            };
            if (obj.find('.product-variations > ul > li:first .youth').length) {
                obj.find('.fields-quantity .youth').show();
            } else {
                obj.find('.fields-quantity .youth').hide();
            }
            var showNoOptionLayer = function() {
                var parent = $('#fields-quantity-' + article),
                    button = $('#button-select-option-' + article),
                    overlay = $('<div class="button-cart-overlay"></div>'),
                    cart = parent.find('.button-cart');
                parent.append(overlay);
                overlay.click(function() {
                    var position = button.offset(),
                        positionTop = position.top,
                        positionLeft = position.left
                    button.appendTo($('body')).css({
                        'position': 'absolute',
                        'z-index': '11001',
                        'top': positionTop,
                        'left': positionLeft,
                        'background-color': '#fff',
                        'color': '#000'
                    });
                    $('#fancybox-overlay').css({
                        'background': '#000',
                        'opacity': 0.75,
                        'height': $(document).height()
                    }).fadeIn().click(function() {
                        hideNoOptionLayer();
                    });
                });
                overlay.mouseenter(function() {
                    cart.addClass('hover');
                });
                overlay.mouseleave(function() {
                    cart.removeClass('hover');
                });
            };
            var hideNoOptionLayer = function() {
                var parent = $('#fields-quantity-' + article),
                    button = $('#button-select-option-' + article);
                button.insertBefore($('#select-option-' + article)).css({
                    'position': 'static',
                    'z-index': '',
                    'top': '',
                    'left': '',
                    'background-color': '',
                    'color': ''
                });
                parent.parent().css('padding-top', '');
                $('#fancybox-overlay').fadeOut();
            };
            var setStockStatus = function(output, buyid) {
                var outofstocktext = escape('Currently out of stock, check your local dealer.');
                output.writeCapture().html('<script src="http://shop.ride100percent.com/app/site/query/getitemstockstatus.nl?c=3366283&n=1&id=' + buyid + '&outofstocktext=' + outofstocktext + '&instocktext="></script>', function() {
                    var status = output.html();
                    if (status && (status.match(/Coming soon!/g) || status.match(/Item is unavailable/g))) {
                        deactivateCartButton();
                    } else {
                        activateCartButton();
                    }
                });
            };
            if (obj.find('#button-select-option-' + article).length < 1) {
                setStockStatus($('#stock-status-' + article), $('#fields-hidden-' + article + ' input[name=buyid]').attr('value'));
            } else {
                deactivateCartButton();
            }
            if (obj.find('.view-pics').length > 0) {
                $('#product-image-' + article).click(function() {
                    obj.find('.view-pics').click();
                });
            }
            if (obj.find('.product-variations > ul > li:first > ul > li').data('lightbox')) {
                obj.find('.view-pics').show();
            } else {
                obj.find('.view-pics').hide();
            }
            obj.find('.product-image-wrapper > button').click(function() {
                var button = $(this);
                var current = $('#product-variations-' + article).find('.selected');
                var mode = $('#product-variations-' + article).data('items') === 'all' ? 'all' : 'default';
                if ($(this).is('.product-prev')) {
                    ride100percent.options.tmp.productCyle = 'prev';
                    if (current.prevAll('.item').first().length > 0) {
                        next = current.prevAll('.item').first();
                    } else {
                        if (mode === 'all') {
                            if (current.closest('.product-variations-group').prevAll('.product-variations-group').length > 0) {
                                next = current.closest('.product-variations-group').prevAll('.product-variations-group').first().find('.item').last();
                            } else {
                                next = $('#product-variations-' + article).find('.item').last();
                            }
                        } else {
                            next = current.parent().find('.item:last');
                        }
                    }
                } else {
                    ride100percent.options.tmp.productCyle = false;
                    if (current.nextAll('.item').first().length > 0) {
                        next = current.nextAll('.item').first();
                    } else {
                        if (mode === 'all') {
                            if (current.closest('.product-variations-group').nextAll('.product-variations-group').length > 0) {
                                next = current.closest('.product-variations-group').nextAll('.product-variations-group').first().find('.item').first();
                            } else {
                                next = $('#product-variations-' + article).find('.item').first();
                            }
                        } else {
                            next = current.parent().find('.item:first');
                        }
                    }
                }
                next.click();
            });
            var createOptionSelect = function() {
                var options = [],
                    optionLayerPos, optionRowHeight;
                $('#select-option-' + article + ' option').each(function() {
                    var option = $(this).html().split(' -- ');
                    if (obj.attr('id') == 'accuri') {
                        option[1] = option[1].replace('Noseguard / ', '');
                        option[1] = option[1].replace('20 Tear-Offs / ', '');
                        option[1] = option[1].replace('Stack of Tear-Off\'s / ', '');
                    }
                    options.push([$(this).attr('value'), option[0], option[1], $(this).attr('data-buyid'), $(this).attr('data-image')]);
                });
                if ($('#layer-select-option-' + article).length == 0) {
                    obj.after('<div id="layer-select-option-' + article + '" class="layer-select-option"><ul class="product-options"></ul></div>');
                }
                $('#layer-select-option-' + article).find('.product-options').empty();
                optionRowHeight = (100 / options.length) + '%';
                $.each(options, function(i) {
                    $('#layer-select-option-' + article).find('.product-options').append('<li style="height:' + optionRowHeight + '" data-value="' + options[i][0] + '" data-buyid="' + options[i][3] + '" data-image="' + options[i][4] + '"><div><em>' + (options[i][1].replace(' + ', '<br />+ ')) + '</em> ' + (options[i][2] != undefined ? options[i][2] : '') + '</div></li>');
                });
                var optionLayer = $('#layer-select-option-' + article);
                $('body').on('click', '#button-select-option-' + article, function() {
                    optionLayer.css('top', $(window).scrollTop() === 0 ? optionLayer.position().top : $(window).scrollTop());
                    $('html').css('overflow', 'hidden');
                    optionLayer.fadeIn(that.options.fadeSpeed);
                });
                optionLayer.find('li').each(function(i) {
                    $(this).click(function() {
                        $(this).attr('class', 'selected').siblings().removeAttr('class');
                        $('#select-option-' + article).prop('selectedIndex', i);
                        optionLayer.fadeOut(that.options.fadeSpeed);
                        $('html').css('overflow', 'auto');
                        $('#fields-hidden-' + article + ' input[name="buyid"]').val($(this).attr('data-buyid'));
                        $('#selected-price-' + article).writeCapture().html('<script src="http://shop.ride100percent.com/app/site/query/getitemprice.nl?c=3366283&n=1&id=' + $(this).attr('data-buyid') + '"></script>');
                        that.helper.changeText($('#button-select-option-' + article), $(this).find('em').html());
                        setStockStatus($('#stock-status-' + article), $(this).attr('data-buyid'));
                        if ($('#product-image-' + article).attr('src') != path + $(this).attr('data-image')) {
                            var src = path + $(this).attr('data-image');
                            if (noseguardVisible == true && !src.match(/-CL.png/g)) {
                                src = src.replace('.png', '-nose.png');
                            }
                            if (obj.is('#aircraft')) {
                                src = src.replace('/back/', '/profile/');
                                src = src.replace('/front/', '/profile/');
                                src = src.replace('/interior/', '/profile/');
                                src = src.replace('/top/', '/profile/');
                            }
                            if (obj.is('#speedcraft-sl') || obj.is('#speedcraft-ll') || obj.is('#speedcoupe-sl') || obj.is('#speedcoupe-ll')) {
                                if (src.match(/-Smoke.png/g)) {
                                    obj.find('.view-toggle > img').each(function() {
                                        $(this).attr('src', $(this).attr('src').replace('.png', '-Smoke.png'))
                                    });
                                } else {
                                    obj.find('.view-toggle > img').each(function() {
                                        $(this).attr('src', $(this).attr('src').replace('-Smoke.png', '.png'))
                                    });
                                }
                            }
                            that.helper.switchImage($('#product-image-' + article), src, 'left');
                            $('#product-image-' + article).attr('alt', $(this).find('.title').html());
                        }
                        hideNoOptionLayer();
                    });
                });
            };
            if ($('#select-option-' + article).length > 0) {
                if ($('#button-select-option-' + article).length > 0) {
                    rewriteOptions(obj.find('.product-variations').find('.item:eq(0)'));
                    createOptionSelect();
                }
            }
            if ($('#select-goggle-' + article).length > 0) {
                var optionRowHeight = (100 / $('#select-goggle-' + article + ' option').length) + '%';
                obj.after('<div id="layer-select-goggle-' + article + '" class="layer-select-option"><ul class="goggle-options clearfix"></ul></div>');
                $('#select-goggle-' + article + ' option').each(function() {
                    $('#layer-select-goggle-' + article).find('.goggle-options').append('<li style="height:' + optionRowHeight + '" data-value="' + $(this).attr('value') + '"><div><em>' + $(this).html() + '</em></div></li>');
                });
                $('#layer-select-goggle-' + article + ' li:first').addClass('selected');
                var goggleLayer = $('#layer-select-goggle-' + article);
                $('body').on('click', '#button-select-goggle-' + article, function() {
                    goggleLayer.css('top', $(window).scrollTop() === 0 ? goggleLayer.position().top : $(window).scrollTop());
                    $('html').css('overflow-y', 'hidden');
                    goggleLayer.fadeIn(that.options.fadeSpeed);
                });
                goggleLayer.find('li').each(function(i) {
                    $(this).click(function() {
                        var selectedGoggle = i;
                        $(this).attr('class', 'selected').siblings().removeAttr('class');
                        $('#select-goggle-' + article).prop('selectedIndex', i);
                        goggleLayer.fadeOut(that.options.fadeSpeed);
                        $('#button-select-goggle-' + article + ' span').html($(this).find('em').html());
                        obj.find('.product-variations .item').each(function() {
                            $(this).addClass('visible');
                            if (selectedGoggle == '0') {
                                $(this).show();
                            } else {
                                var accessoryGoggles = $(this).attr('data-goggles').split(','),
                                    showGoggle = false;
                                $.each(accessoryGoggles, function(i) {
                                    if (accessoryGoggles[i] == selectedGoggle) {
                                        showGoggle = true;
                                    }
                                });
                                if (showGoggle == true) {
                                    $(this).show().addClass('visible');
                                } else {
                                    $(this).hide().removeClass('visible');
                                }
                            }
                        });
                        obj.find('.product-variations').each(function() {
                            if ($(this).find('.item.visible').length > 0) {
                                $(this).show();
                                $(this).parent('.product-variations-special').show();
                            } else {
                                $(this).hide();
                                $(this).parent('.product-variations-special').hide();
                            }
                        });
                        $('html,body').animate({
                            scrollTop: $('#product-variations-' + article).offset().top - 100
                        });
                        if ($('#select-quantity-' + article).length < 1) {
                            activateCartButton();
                        }
                        $('html').css('overflow-y', 'auto');
                    });
                });
            }
            if ($('#product-variations-' + article).length > 0) {
                var items = $('#product-variations-' + article + ' .item');
                items.each(function(i) {
                    var product = $(this);
                    product.click(function() {
                        if (product.hasClass('selected')) {
                            $('html,body').animate({
                                scrollTop: obj.offset().top - 41
                            });
                        } else {
                            if (product.attr('data-options')) {
                                var options = product.attr('data-options').split(',');
                            }
                            var buyids = product.attr('data-buyids').split(',');
                            var images = product.attr('data-images').split(',');
                            if (obj.find('#button-select-option-' + article).length > 0) {
                                $('#selected-price-' + article).html(product.data('price-range'));
                            } else {
                                $('#selected-price-' + article).writeCapture().html('<script src="http://shop.ride100percent.com/app/site/query/getitemprice.nl?c=3366283&n=1&id=' + buyids[0] + '"></script>');
                            }
                            if ($('#button-select-option-' + article).length > 0) {
                                rewriteOptions($(this));
                                createOptionSelect();
                            }
                            if (obj.find('#button-select-option-' + article).length > 0) {
                                $('#fields-hidden-' + article + ' input[name="buyid"]').val('');
                            } else {
                                $('#fields-hidden-' + article + ' input[name="buyid"]').val(buyids[0]);
                            }
                            if (noseguardVisible === false) {
                                src = images[0].replace('-nose.png', '.png');
                            } else {
                                src = images[0].replace('.png', '-nose.png');
                            }
                            if (obj.find('#product-bullets-' + article).length > 0) {
                                if (product.attr('data-bullets')) {
                                    obj.find('#product-bullets-' + article).html(product.attr('data-bullets')).text();
                                } else {
                                    obj.find('#product-bullets-' + article).empty();
                                }
                            }
                            that.helper.switchImage($('#product-image-' + article), path + src, 'left');
                            $('#product-image-' + article).attr('alt', product.find('.title').html());
                            $('#view-noseguard-' + article).attr('href', path + images[images.length - 1]);
                            if (obj.find('.view-toggle').length > 0) {
                                if (obj.is('#speedcraft-sl') || obj.is('#speedcraft-ll') || obj.is('#speedcoupe-sl') || obj.is('#speedcoupe-ll')) {
                                    images[1] = images[1].replace('-Smoke.png', '.png');
                                }
                                if (obj.is('#windbreaker') || obj.is('#tees') || obj.is('#shorts') || obj.is('#pants') || obj.is('#jerseys') || obj.is('#airmatic-jerseys') || obj.is('#airmatic-shorts') || obj.is('#celium-jerseys') || obj.is('#celium-shorts') || obj.is('#zip-jersey') || obj.is('#bib-pant')) {
                                    if (images[1].match(/-back.png/g) === null) {
                                        images[1] = images[1].replace('.png', '-back.png');
                                    }
                                }
                                that.helper.switchImage(obj.find('.view-toggle:eq(0)').find('img'), path + images[1], 'left');
                                if (images[2]) {
                                    that.helper.switchImage(obj.find('.view-toggle:eq(1)').find('img'), path + images[2], 'left');
                                }
                                if (images[3]) {
                                    that.helper.switchImage(obj.find('.view-toggle:eq(2)').find('img'), path + images[3], 'left');
                                }
                                if (images[4]) {
                                    that.helper.switchImage(obj.find('.view-toggle:eq(3)').find('img'), path + images[4], 'left');
                                }
                                obj.find('.view-toggle:eq(0)').attr('href', path + images[1]).find('img').attr('alt', product.find('.title').html());
                                if (images[2]) {
                                    obj.find('.view-toggle:eq(1)').attr('href', path + images[2]).find('img').attr('alt', product.find('.title').html());
                                }
                                if (images[3]) {
                                    obj.find('.view-toggle:eq(2)').attr('href', path + images[3]).find('img').attr('alt', product.find('.title').html());
                                }
                                if (images[4]) {
                                    obj.find('.view-toggle:eq(3)').attr('href', path + images[4]).find('img').attr('alt', product.find('.title').html());
                                }
                                if (obj.is('#shirts') && ($('body').is('.page-template-page-apparel-team') || $('body').is('.page-template-page-geico-honda'))) {
                                    if (!product.attr('data-backview')) {
                                        obj.find('.view-toggle:eq(0)').hide();
                                    } else {
                                        var backview = images[0].replace('.png', '-back.png');
                                        console.log(backview);
                                        that.helper.switchImage(obj.find('.view-toggle:eq(0)').find('img'), path + backview, 'left');
                                        obj.find('.view-toggle:eq(0)').show();
                                    }
                                }
                            }
                            if (scrolled === false) {
                                $('html,body').animate({
                                    scrollTop: obj.offset().top - 41
                                });
                            } else {
                                scrolled = false;
                            }
                            items.each(function() {
                                $(this).removeClass('selected');
                            });
                            product.addClass('selected');
                            that.helper.changeText($('#headline-' + article), product.find('.title').html());
                            if (product.find('.youth').length) {
                                $('#fields-quantity-' + article).find('.youth').show();
                            } else {
                                $('#fields-quantity-' + article).find('.youth').hide();
                            }
                            if (obj.find('#button-select-option-' + article).length < 1) {
                                if (product.attr('data-options')) {
                                    if (product.attr('data-color')) {
                                        that.helper.changeText($('#selected-option-' + article), '– ' + product.attr('data-color'));
                                    } else {
                                        var option = $('#fields-tmp option[value="' + options[0] + '"]').html().split(' -- ');
                                        that.helper.changeText($('#selected-option-' + article), '– ' + option[0]);
                                    }
                                }
                                if (product.attr('data-color')) {
                                    that.helper.changeText($('#selected-option-' + article), '– ' + product.attr('data-color'));
                                }
                            }
                            if (obj.find('#button-select-option-' + article).length < 1) {
                                setStockStatus($('#stock-status-' + article), buyids[0]);
                            } else {
                                that.helper.changeText($('#stock-status-' + article), '');
                            }
                            if ($('#product-description-' + article).length > 0) {
                                $('#product-description-' + article).writeCapture().html('<script src="http://shop.ride100percent.com/app/site/query/getitemsdescr.nl?c=3366283&n=1&id=' + buyids[0] + '"></script>');
                            }
                            if (obj.find('#button-select-option-' + article).length > 0) {
                                deactivateCartButton();
                            }
                            if (product.attr('data-nooptions')) {
                                activateCartButton();
                                that.helper.changeText($('#button-select-option-' + article), $('#layer-select-option-' + article).find('em').html());
                                setStockStatus($('#stock-status-' + article), buyids[0]);
                                $('#fields-hidden-' + article + ' input[name="buyid"]').val(buyids[0]);
                            } else {
                                that.helper.changeText($('#button-select-option-' + article), $('#button-select-option-' + article).data('default'));
                            }
                            if ($('#view-pics-' + article).length > 0 && product.attr('data-lightbox')) {
                                $('#view-pics-' + article).show();
                                createLightbox(product);
                                obj.find('.product-image-wrapper > img').addClass('zoom');
                            } else {
                                $('#view-pics-' + article).hide();
                                $('#view-pics-' + article).unbind('click');
                                obj.find('.product-image-wrapper > img').removeClass('zoom');
                            }
                            window.location.hash = article + '--' + that.helper.cleanURLstring(product.find('.title').html());
                            obj.find('form').attr('action', obj.find('form').attr('action').substring(0, obj.find('form').attr('action').lastIndexOf('#')) + '#' + article + '--' + that.helper.cleanURLstring(product.find('.title').html()));
                        }
                    });
                    if (that.helper.cleanURLstring(product.find('.title').html()) == segment && obj.is(target)) {
                        obj.find('img:last').load(function() {
                            scrolled = true;
                            if (t) window.clearTimeout(t);
                            var t = window.setTimeout(function() {
                                product.click();
                            }, 1000);
                        });
                    }
                });
            }
            if ($('#view-noseguard-' + article).length > 0) {
                var src;
                $('#view-noseguard-' + article).click(function(e) {
                    e.preventDefault();
                    if ($('#product-image-' + article).attr('src').match(/-nose.png/g)) {
                        noseguardVisible = false;
                        src = $('#product-image-' + article).attr('src').replace('-nose.png', '.png');
                    } else {
                        noseguardVisible = true;
                        if ($('#product-image-' + article).attr('src').match(/-CL.png/g)) {
                            src = $('#product-image-' + article).attr('src').replace('-CL.png', '-nose.png');
                        } else {
                            src = $('#product-image-' + article).attr('src').replace('.png', '-nose.png');
                        }
                    }
                    that.helper.switchImage($('#product-image-' + article), src, 'left');
                });
            }
            if (obj.find('.view-toggle').length > 0) {
                obj.find('.view-toggle').each(function() {
                    $(this).click(function(e) {
                        var old_src = $('#product-image-' + article).attr('src')
                        new_src = $(this).find('img').attr('src');
                        e.preventDefault();
                        that.helper.switchImage($(this).find('img'), old_src, 'left');
                        that.helper.switchImage($('#product-image-' + article), new_src, 'left');
                    });
                });
            }
            var createLightbox = function(el) {
                $('#view-pics-' + article).unbind('click');
                $('#view-pics-' + article).click(function(e) {
                    var images = el.attr('data-lightbox').split(','),
                        layer = $('<div class="layer-zoom"></div>'),
                        overlay = $('<div class="layer-zoom-overlay"></div>'),
                        zoomArea = $('<div class="zoom-area"></div>'),
                        zoomNav = $('<nav class="zoom-nav"></nav>'),
                        zoomNavList = $('<ul class="zoom-nav-list"></ul>');
                    e.preventDefault();
                    $('.layer-zoom').remove();
                    if (images.length > 1) {
                        $.each(images, function(i) {
                            zoomNavList.append('<li style="background-image:url(' + path + images[i] + ');"><span></span></li>');
                        });
                        zoomNav.append(zoomNavList);
                        zoomNav.find('span').css({
                            'display': 'block',
                            'opacity': 0
                        });
                        zoomNav.find('span:first').css('opacity', 0.2);
                    }
                    zoomArea.css('background-image', 'url(' + (path + images[0]) + ')').click(function() {
                        if (that.helper.ios() === false) {
                            zoomArea.trigger('zoom.destroy');
                        }
                        $('.layer-zoom').remove();
                        $('.zoom-area').remove();
                        $('.zoom-nav').remove();
                        $('.zoom-nav-list').remove();
                        zoomArea.unbind('click');
                    });
                    ride100percent.helper.toggleLoadingIcon('show');
                    if (that.helper.ios() === false) {
                        zoomArea.zoom({
                            url: path + images[0],
                            magnify: 1,
                            onZoomIn: function() {
                                zoomArea.css('background-image', 'none');
                            },
                            onZoomOut: function() {
                                zoomArea.css('background-image', 'url(' + (path + images[0]) + ')');
                            }
                        });
                        var image = new Image();
                        image.onload = function() {
                            $('.layer-zoom-overlay').remove();
                            ride100percent.helper.toggleLoadingIcon('hide');
                        };
                        image.src = path + images[0];
                    } else {
                        ride100percent.helper.toggleLoadingIcon('hide');
                    }
                    if (images.length > 1) {
                        zoomNavList.find('li').unbind('click').click(function() {
                            var background = $(this).css('background-image').replace('url(', '').replace(')', '').replace(/"/g, '');
                            zoomArea.trigger('zoom.destroy').css('background-image', 'url(' + background + ')');
                            if (that.helper.ios() === false) {
                                zoomArea.zoom({
                                    url: background,
                                    magnify: 1,
                                    onZoomIn: function() {
                                        zoomArea.css('background-image', 'none');
                                    },
                                    onZoomOut: function() {
                                        zoomArea.css('background-image', 'url(' + background + ')');
                                    }
                                });
                            }
                            zoomNav.find('span').css('opacity', 0);
                            $(this).find('span').css('opacity', 0.2);
                        });
                    }
                    layer.height($(document).height());
                    overlay.height($(document).height());
                    $('body').append(layer);
                    $('body').append(zoomArea);
                    $('body').append(zoomNav);
                    $('body').append(overlay);
                    layer.click(function() {
                        zoomArea.click();
                    });
                });
            };
            if ($('#product-variations-' + article + ' .item:first').attr('data-lightbox') && !$('html').is('.touch')) {
                createLightbox($('#product-variations-' + article + ' .item:first'));
                $('#product-image-' + article).addClass('zoom');
            }
        });
    },
    pageDealers: function(icon) {
        var that = this;
        $('.button-select-state').each(function() {
            var region = $(this).attr('id');
            $(this).click(function(e) {
                e.preventDefault();
                var stateLayer = $('#layer-select-state-' + region);
                $('html,body').scrollTop(0);
                stateLayer.scrollTop(0);
                stateLayer.fadeIn(that.options.fadeSpeed);
                $('html').css('overflow', 'hidden');
                stateLayer.find('li').click(function() {
                    var state = $(this).attr('data-state');
                    $('#nav-dealers a').removeClass('button-select-state-active');
                    $('#' + region).addClass('button-select-state-active');
                    stateLayer.fadeOut(that.options.fadeSpeed);
                    $('html').css('overflow', 'auto');
                    $('#selected-region-' + region).html($(this).attr('data-name'));
                    $('.article-' + region).show().siblings('article').hide();
                    if (state == 'all') {
                        $('.article-' + region + ' li').show();
                    } else {
                        $('.article-' + region + ' li').hide();
                        $('.article-' + region + ' li[data-state="' + state + '"]').show();
                    }
                    $('html,body').animate({
                        scrollTop: 0
                    });
                });
            });
        });
        $('#select-region-unitedstates').click(function() {
            $('#unitedstates').click();
        });
        $('#select-region-international').click(function() {
            $('#international').click();
        });
        $('.view-map').click(function(e) {
            e.preventDefault();
            that.showMap($(this).attr('data-latitude'), $(this).attr('data-longitude'), $(this).attr('data-title'), icon);
        });
        $('html').css('overflow-x', 'hidden');
    },
    showMap: function(lat, lng, title, icon) {
        var that = this;
        $(document.body).append('<div id="map"></div>');
        $('#map').css('top', $(window).scrollTop() + 41);
        var location = new google.maps.LatLng(lat, lng);
        var mapStyles = [{
            featureType: "all",
            elementType: "all",
            stylers: [{
                saturation: -100
            }]
        }];
        var mapOptions = {
            zoom: 17,
            center: location,
            mapTypeControl: false,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.HYBRID, 'grayscale']
            }
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var mapType = new google.maps.StyledMapType(mapStyles, {
            name: "Grayscale"
        });
        map.mapTypes.set('grayscale', mapType);
        map.setMapTypeId('grayscale');
        var marker = new google.maps.Marker({
            position: location,
            title: title,
            icon: icon
        });
        marker.setMap(map);
        $('#map').after('<a href="javascript:;" id="map-close"></a>');
        $('#map-close').click(function() {
            $('#map').remove();
            $('#map-close').remove();
        });
    },
    layerForecast: function() {
        $('.layer').scroll(function() {
            var sTop = $('.layer').scrollTop();
            $('[data-transition]').each(function() {
                var transition = (sTop / parseFloat($(this).data('transition'))) * -1;
                $(this).css({
                    '-webkit-transform': 'translateY(' + transition + 'px)',
                    '-ms-transform': 'translateY(' + transition + 'px)',
                    'transform': 'translateY(' + transition + 'px)'
                });
            });
        }).scroll();
        var controller = new ScrollMagic.Controller({
            container: '#layer-features-forecast'
        });
        var tween = TweenMax.to('#feature-scroller-content', 1, {
            transform: 'translateX(-' + (4800 - $(window).width()) + 'px)'
        });
        new ScrollMagic.Scene({
            duration: 3000,
            offset: $('.feature-scroller').position().top - (($(window).height() - 480) / 2)
        }).setPin('.scroll-pane').setTween(tween).addTo(controller);
    },
    layerParallax: function() {
        $('.layer').scroll(function() {
            var sTop = $('.layer').scrollTop();
            $('[data-transition]').each(function() {
                var transition = (sTop / parseFloat($(this).data('transition'))) * -1;
                $(this).css({
                    '-webkit-transform': 'translateY(' + transition + 'px)',
                    '-ms-transform': 'translateY(' + transition + 'px)',
                    'transform': 'translateY(' + transition + 'px)'
                });
            });
        }).scroll();
    },
};
$(document).ready(function() {
    ride100percent.initialize();
});
$(window).resize(function() {
    $(document).ready(function() {
        $('#nav-main-bg > span').css('left', $('.menu-item.signin').offset().left);
    });
}).resize();
$(window).scroll(function() {
    if ($('html').is('.no-touch')) {
        var sTop = $(window).scrollTop();
        $('[data-transition]').each(function() {
            var transition = (sTop / parseFloat($(this).data('transition'))) * -1;
            $(this).css({
                '-webkit-transform': 'translateY(' + transition + 'px)',
                '-ms-transform': 'translateY(' + transition + 'px)',
                'transform': 'translateY(' + transition + 'px)'
            });
        });
        $('.category-header').each(function() {
            var header = $(this);
            if (ride100percent.helper.isInView(header)) {
                var transition = (sTop - header.offset().top) * 0.2;
                header.find('h1 > img').css({
                    '-webkit-transform': 'translateX(' + transition + 'px)',
                    '-ms-transform': 'translateX(' + transition + 'px)',
                    'transform': 'translateX(' + transition + 'px)'
                });
            }
        });
        if ($('.scroll-down').length > 0 && sTop > 100) {
            $('.scroll-down').fadeOut();
        }
    }
}).scroll();

function onInitializationFinished() {
    ride100percent.helper.toggleLoadingScreen('hide');

    function retrieveCatalog(result) {
        ride100percent.options.tmp.trylivePlayer.getAssets({
            catalog_entry_id: result.catalog.id
        }, retrieveAssets);
    }

    function retrieveAssets(result) {
        console.log(result);
        ride100percent.options.tmp.trylivePlayer.loadAsset({
            reference: ride100percent.options.tmp.tryliveModel
        });
    }
    ride100percent.options.tmp.trylivePlayer.getCatalog(null, retrieveCatalog);
}

function onLiveModeTutorialClicked() {}

function onTrackingStatusChanged() {}

function onAssetsLoadingStatusChanged() {}

function onSelectedViewportChanged() {}

function onSnapshotStatusChanged() {}

function onSnapshotBitmapChanged(base64Img) {
    ride100percent.options.tmp.trylivePlayer.showSnapshot();
};
! function(a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++) {
                if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
                if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
            }
        }
    }
    var d = !1,
        e = !1;
    if (b.querySelector)
        if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function(c) {
                var d = c.data;
                if (d.secret || d.message || d.value)
                    if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                        var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                            k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                        for (e = 0; e < k.length; e++) k[e].style.display = "none";
                        for (e = 0; e < j.length; e++)
                            if (f = j[e], c.source === f.contentWindow) {
                                if (f.removeAttribute("style"), "height" === d.message) {
                                    if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                                    else if (~~g < 200) g = 200;
                                    f.height = g
                                }
                                if ("link" === d.message)
                                    if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                                        if (b.activeElement === f) a.top.location.href = d.value
                            } else;
                    }
            }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);