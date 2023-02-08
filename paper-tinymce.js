var ot = function(t) {
  if (t === null)
    return "null";
  if (t === void 0)
    return "undefined";
  var e = typeof t;
  return e === "object" && (Array.prototype.isPrototypeOf(t) || t.constructor && t.constructor.name === "Array") ? "array" : e === "object" && (String.prototype.isPrototypeOf(t) || t.constructor && t.constructor.name === "String") ? "string" : e;
}, P = function(t) {
  return function(e) {
    return ot(e) === t;
  };
}, ge = P("string"), he = P("object"), me = P("array"), ve = P("null"), be = P("boolean"), ye = P("undefined"), we = P("function"), _e = P("number"), Ee = function(t) {
  return ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(t) !== -1;
}, qt = function(t, e, n) {
  for (var r = t.length, i = new Array(r), o = 0; o < r - 1; o++) {
    var s = t[o];
    i[o] = n(e(s));
  }
  return r > 0 && (i[r - 1] = e(t[r - 1])), i;
}, ke = function(t, e) {
  var n = Array.prototype.slice.call(t);
  return n.sort(e);
}, xe = function(t, e) {
  return B(function(n, r) {
    return t.eq(e(n), e(r));
  });
}, B = function(t) {
  return { eq: t };
}, $ = B(function(t, e) {
  return t === e;
}), zt = $, Ce = $, Pe = $, Oe = $, jt = function(t) {
  return B(function(e, n) {
    if (e.length !== n.length)
      return !1;
    for (var r = e.length, i = 0; i < r; i++)
      if (!t.eq(e[i], n[i]))
        return !1;
    return !0;
  });
}, Ae = function(t, e) {
  return xe(jt(t), function(n) {
    return ke(n, e);
  });
}, Se = function(t) {
  return B(function(e, n) {
    var r = Object.keys(e), i = Object.keys(n);
    if (!Ae(zt).eq(r, i))
      return !1;
    for (var o = r.length, s = 0; s < o; s++) {
      var a = r[s];
      if (!t.eq(e[a], n[a]))
        return !1;
    }
    return !0;
  });
}, it = B(function(t, e) {
  if (t === e)
    return !0;
  var n = ot(t), r = ot(e);
  return n !== r ? !1 : Ee(n) ? t === e : n === "array" ? jt(it).eq(t, e) : n === "object" ? Se(it).eq(t, e) : !1;
}), Ne = function(t) {
  for (var e = [], n = Object.keys(t), r = n.length, i = 0; i < r; i++) {
    var o = n[i], s = t[o];
    e.push([o, s]);
  }
  return e;
}, Lt = function(t) {
  return '"' + t.replace(/"/g, '\\"') + '"';
}, pt = function(t) {
  return { show: t };
}, dt = function(t) {
  return pt(function() {
    return t;
  });
}, gt = pt(function(t) {
  return String(t);
}), qe = dt("undefined"), ze = dt("null"), je = gt, Le = gt, Re = pt(function(t) {
  return Lt(t);
}), Ue = dt("function() {...}"), x = function() {
  return x = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, x.apply(this, arguments);
}, ht = function(t, e, n) {
  return {
    start: t,
    children: e,
    end: n
  };
}, Ie = function(t) {
  return ht(t, [], "");
}, Me = function(t) {
  return function(e) {
    return x(x({}, e), { start: t });
  };
}, Te = function(t) {
  return function(e) {
    return x(x({}, e), { end: t });
  };
}, Be = function(t) {
  return function(e) {
    return Me(t(e.start))(e);
  };
}, $e = function(t) {
  return function(e) {
    return Te(t(e.end))(e);
  };
}, De = function(t) {
  return Be(function(e) {
    return t + e;
  });
}, Rt = function(t) {
  return $e(function(e) {
    return e + t;
  });
}, K = function(t) {
  return { pprint: t };
}, S = function(t) {
  return K(function(e) {
    return Ie(t.show(e));
  });
}, Ut = S(qe), It = S(ze), Mt = S(Re), He = S(je), Tt = S(Le), Ze = S(Ue), Ve = S(gt), We = function(t) {
  return K(function(e) {
    var n = qt(e, t.pprint, Rt(","));
    return ht("[", n, "]");
  });
}, Fe = function(t) {
  return K(function(e) {
    var n = Ne(e), r = function(o) {
      var s = o[0], a = o[1], f = t.pprint(a), l = Lt(s) + ": ";
      return De(l)(f);
    }, i = qt(n, r, Rt(","));
    return ht("{", i, "}");
  });
}, X = K(function(t) {
  return ye(t) ? Ut.pprint(t) : ve(t) ? It.pprint(t) : _e(t) ? Tt.pprint(t) : be(t) ? He.pprint(t) : we(t) ? Ze.pprint(t) : ge(t) ? Mt.pprint(t) : me(t) ? We(X).pprint(t) : he(t) ? Fe(X).pprint(t) : Ve.pprint(t);
}), L = function(t, e) {
  return x(x({}, t), e);
};
L(Pe, Ut);
L(Oe, It);
L(zt, Mt);
L(Ce, Tt);
L(it, X);
L($, X);
const Xe = (t, e, n) => {
  var r;
  return n(t, e.prototype) ? !0 : ((r = t.constructor) === null || r === void 0 ? void 0 : r.name) === e.name;
}, Ge = (t) => {
  const e = typeof t;
  return t === null ? "null" : e === "object" && Array.isArray(t) ? "array" : e === "object" && Xe(t, String, (n, r) => r.isPrototypeOf(n)) ? "string" : e;
}, Ke = (t) => (e) => Ge(e) === t, Qe = (t) => (e) => t === e, bt = Ke("array"), yt = Qe(null), Je = (t) => () => t, Ye = (t) => t, tn = Je(!0), en = Array.prototype.indexOf, nn = (t, e) => en.call(t, e), rn = (t, e) => nn(t, e) > -1, on = (t, e) => {
  for (let n = 0, r = t.length; n < r; n++) {
    const i = t[n];
    e(i, n);
  }
}, sn = (t, e) => {
  for (let n = 0, r = t.length; n < r; ++n) {
    const i = t[n];
    if (e(i, n) !== !0)
      return !1;
  }
  return !0;
}, wt = Object.keys, an = (t) => {
  if (!bt(t))
    throw new Error("cases must be an array");
  if (t.length === 0)
    throw new Error("there must be at least one case");
  const e = [], n = {};
  return on(t, (r, i) => {
    const o = wt(r);
    if (o.length !== 1)
      throw new Error("one and only one name per case");
    const s = o[0], a = r[s];
    if (n[s] !== void 0)
      throw new Error("duplicate key detected:" + s);
    if (s === "cata")
      throw new Error("cannot have a case named cata (sorry)");
    if (!bt(a))
      throw new Error("case arguments must be an array");
    e.push(s), n[s] = (...f) => {
      const l = f.length;
      if (l !== a.length)
        throw new Error("Wrong number of arguments to case " + s + ". Expected " + a.length + " (" + a + "), got " + l);
      return {
        fold: (...p) => {
          if (p.length !== t.length)
            throw new Error("Wrong number of arguments to fold. Expected " + t.length + ", got " + p.length);
          return p[i].apply(null, f);
        },
        match: (p) => {
          const d = wt(p);
          if (e.length !== d.length)
            throw new Error("Wrong number of arguments to match. Expected: " + e.join(",") + `
Actual: ` + d.join(","));
          if (!sn(e, (c) => rn(d, c)))
            throw new Error("Not all branches were specified when using match. Specified: " + d.join(", ") + `
Required: ` + e.join(", "));
          return p[s].apply(null, f);
        },
        // NOTE: Only for debugging.
        log: (p) => {
          console.log(p, {
            constructors: e,
            constructor: s,
            params: f
          });
        }
      };
    };
  }), n;
}, Bt = {
  generate: an
};
typeof window < "u" || Function("return this;")();
Bt.generate([
  { bothErrors: ["error1", "error2"] },
  { firstError: ["error1", "value2"] },
  { secondError: ["value1", "error2"] },
  { bothValues: ["value1", "value2"] }
]);
const N = Bt.generate([
  { starts: ["value", "f"] },
  { pattern: ["regex", "f"] },
  { contains: ["value", "f"] },
  { exact: ["value", "f"] },
  { all: [] },
  { not: ["stringMatch"] }
]), ln = (t) => t.toLowerCase(), cn = Ye, $t = (t, e) => t.fold((n, r) => r(e).indexOf(r(n)) === 0, (n, r) => n.test(r(e)), (n, r) => r(e).indexOf(r(n)) >= 0, (n, r) => r(e) === r(n), tn, (n) => !$t(n, e)), un = (t, e, n, r, i, o, s) => t.fold(e, n, r, i, o, s);
N.starts, N.pattern, N.contains, N.exact, N.all, N.not;
const fn = (t, e) => {
  let n = null;
  return {
    cancel: () => {
      yt(n) || (clearTimeout(n), n = null);
    },
    throttle: (...o) => {
      yt(n) && (n = setTimeout(() => {
        n = null, t.apply(null, o);
      }, e));
    }
  };
}, pn = (t, e) => {
  e.setPages(t), t.dispatch("pagesUpdate", {
    pages: {
      pagesCount: e.getPagesCount(t)
    }
  });
}, dn = (t, e) => {
  t.dispatch("currentPageUpdate", { currentPage: e });
}, gn = (t, e) => {
  t.dispatch("marginRulerUpdate", { margins: e });
}, hn = (t, e) => {
  t.dispatch("zoomUpdate", { zoom: e });
}, mn = (t) => {
  const e = (n) => {
    n.setAttribute("contenteditable", "false"), n.style.cursor = "default", n.style.outline = "none";
  };
  e(t), t.querySelectorAll("*").forEach((n) => e(n));
}, M = {
  width: "21cm",
  height: "29.7cm",
  heightInPixels: 1122.519685,
  widthInPixes: 793.7007874
}, Dt = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
}, vn = (t) => {
  const e = t.offsetHeight, n = window.getComputedStyle(t);
  return ["top", "bottom"].map((r) => parseInt(n[`margin-${r}`])).reduce((r, i) => r + i, e);
};
let q = Dt, et = 1, D = !1;
const bn = 66, yn = 66, _t = M.widthInPixes / bn, st = M.heightInPixels / yn, mt = "paper-page";
let at, A, j, k = [];
const wn = () => k.reduce(
  (t, e) => t + (e.firstElementChild.childNodes.length ? 1 : 0),
  0
), _n = (t) => {
  at = t.getBody(), A = t.contentDocument, t = t;
  const e = A.createElement("div");
  e.classList.add("pages");
  const n = A.createElement("div");
  n.classList.add("pages-container"), e.appendChild(n), j = n, at.appendChild(e);
}, En = (t) => {
  const e = [];
  return D ? k.forEach((n) => {
    const r = n.firstElementChild;
    e.push(...r.childNodes);
  }) : (_n(t), at.childNodes.forEach((n) => {
    n.constructor.name !== "Comment" && e.push(n);
  })), e;
}, kn = (t) => {
  let e = 0, n = 1;
  const r = st * q.bottom + st * q.top, i = M.heightInPixels - r;
  let o = [];
  t.forEach((s, a) => {
    const f = vn(s), l = e + f;
    l > i ? (nt(n, o), e = f, n += 1, o = [s], a === t.length - 1 && D && nt(n, o)) : (e = l, o.push(s), a === t.length - 1 && nt(n, o));
  });
}, nt = (t, e, n = !1) => {
  const r = "page-" + t, i = A.getElementById(r);
  let o;
  i ? o = i : (o = Cn(t), j.appendChild(o)), o.firstElementChild.append(...e), xn(o.firstElementChild);
}, xn = (t) => {
  t.style.marginLeft = _t * q.left + "px", t.style.marginRight = _t * q.right + "px", t.style.marginTop = st * q.top + "px";
}, Cn = (t) => {
  const e = A.createElement("div");
  return e.innerHTML = "<div></div>", e.setAttribute("data-page-number", t.toString()), e.id = "page-" + t, e.classList.add(mt), e.style.cssText = `
    height: ${M.height}; 
    width: ${M.width};
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    margin: 20px auto;
    overflow: auto;
    background: white;
    display: flex;
    flex-direction: column;
    background-color: white;
  `, k.push(e), e;
}, Pn = (t) => {
  k.forEach((e) => {
    e.firstElementChild.childNodes.length ? e.style.display = "block" : e.style.display = "none";
  });
}, On = () => {
  k = [].slice.call(k).sort((t, e) => {
    const n = parseInt(t.getAttribute("data-page-number") || "0", 10), r = parseInt(e.getAttribute("data-page-number") || "0", 10);
    return n - r;
  }), k.forEach((t) => {
    j.appendChild(t);
  });
}, An = (t) => {
  const e = t.selection.getRng().commonAncestorContainer, n = t.selection.getRng().startOffset;
  Sn();
  const r = En(t);
  kn(r), On(), Pn(), D = !0, t.selection.setCursorLocation(e, n);
}, Sn = () => {
  D && (k = [...A.querySelectorAll(`.${mt}`)], j = A.querySelector(".pages-container"));
}, Nn = (t) => {
  if (D) {
    const n = t.selection.getNode().closest(`.${mt}`);
    if (n) {
      const r = Number(n.getAttribute("data-page-number"));
      r !== et && (et = r, dn(t, et));
    }
  }
}, lt = (t, e) => {
  pn(t, e);
}, Ht = (t, e) => {
  lt(t, e), setTimeout(() => lt(t, e), 200);
}, qn = (t) => {
  t.on("zoomUpdate", ({ zoom: e }) => {
    j.style.transformOrigin = "top left", j.style.transform = `scale(${1 + e})`;
  });
}, zn = (t, e) => {
  t.on("marginRulerUpdate", (n) => {
    q = n.margins, Ht(t, e);
  });
}, jn = (t, e, n) => {
  const r = fn(() => lt(t, e), n);
  t.on("init", () => {
    setTimeout(() => {
      Ht(t, e), t.on("SetContent BeforeAddUndo Undo Redo ViewUpdate keyup", r.throttle), t.on("SelectionChange", () => Nn(t)), qn(t), zn(t, e);
    }, n), t.on("remove", r.cancel);
  });
}, Ln = () => ({
  setPages: (t) => An(t),
  getPagesCount: () => wn()
});
function C() {
}
function Zt(t) {
  return t();
}
function Et() {
  return /* @__PURE__ */ Object.create(null);
}
function R(t) {
  t.forEach(Zt);
}
function Vt(t) {
  return typeof t == "function";
}
function Wt(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Rn(t) {
  return Object.keys(t).length === 0;
}
function b(t, e) {
  t.appendChild(e);
}
function vt(t, e, n) {
  t.insertBefore(e, n || null);
}
function Q(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Un(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function y(t) {
  return document.createElement(t);
}
function ct(t) {
  return document.createTextNode(t);
}
function G() {
  return ct(" ");
}
function w(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function kt(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function xt(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function v(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Ct(t) {
  return t === "" ? null : +t;
}
function In(t) {
  return Array.from(t.childNodes);
}
function Mn(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function H(t, e) {
  t.value = e ?? "";
}
function Z(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function Pt(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function Tn(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(t, n, r, e), i;
}
let T;
function I(t) {
  T = t;
}
function Ft() {
  if (!T)
    throw new Error("Function called outside component initialization");
  return T;
}
function Xt(t) {
  Ft().$$.on_mount.push(t);
}
function Gt() {
  const t = Ft();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = Tn(e, n, { cancelable: r });
      return i.slice().forEach((s) => {
        s.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const U = [], z = [], W = [], Ot = [], Bn = Promise.resolve();
let ut = !1;
function $n() {
  ut || (ut = !0, Bn.then(Kt));
}
function ft(t) {
  W.push(t);
}
const rt = /* @__PURE__ */ new Set();
let V = 0;
function Kt() {
  const t = T;
  do {
    for (; V < U.length; ) {
      const e = U[V];
      V++, I(e), Dn(e.$$);
    }
    for (I(null), U.length = 0, V = 0; z.length; )
      z.pop()();
    for (let e = 0; e < W.length; e += 1) {
      const n = W[e];
      rt.has(n) || (rt.add(n), n());
    }
    W.length = 0;
  } while (U.length);
  for (; Ot.length; )
    Ot.pop()();
  ut = !1, rt.clear(), I(t);
}
function Dn(t) {
  if (t.fragment !== null) {
    t.update(), R(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ft);
  }
}
const Hn = /* @__PURE__ */ new Set();
function Zn(t, e) {
  t && t.i && (Hn.delete(t), t.i(e));
}
function Vn(t, e, n, r) {
  const { fragment: i, after_update: o } = t.$$;
  i && i.m(e, n), r || ft(() => {
    const s = t.$$.on_mount.map(Zt).filter(Vt);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : R(s), t.$$.on_mount = [];
  }), o.forEach(ft);
}
function Wn(t, e) {
  const n = t.$$;
  n.fragment !== null && (R(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Fn(t, e) {
  t.$$.dirty[0] === -1 && (U.push(t), $n(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Qt(t, e, n, r, i, o, s, a = [-1]) {
  const f = T;
  I(t);
  const l = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: C,
    not_equal: i,
    bound: Et(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: Et(),
    dirty: a,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  s && s(l.root);
  let m = !1;
  if (l.ctx = n ? n(t, e.props || {}, (p, d, ...g) => {
    const c = g.length ? g[0] : d;
    return l.ctx && i(l.ctx[p], l.ctx[p] = c) && (!l.skip_bound && l.bound[p] && l.bound[p](c), m && Fn(t, p)), d;
  }) : [], l.update(), m = !0, R(l.before_update), l.fragment = r ? r(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = In(e.target);
      l.fragment && l.fragment.l(p), p.forEach(Q);
    } else
      l.fragment && l.fragment.c();
    e.intro && Zn(t.$$.fragment), Vn(t, e.target, e.anchor, e.customElement), Kt();
  }
  I(f);
}
class Jt {
  $destroy() {
    Wn(this, 1), this.$destroy = C;
  }
  $on(e, n) {
    if (!Vt(n))
      return C;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !Rn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function Xn(t, e, n) {
  const r = t.slice();
  return r[30] = e[n], r;
}
function Gn(t) {
  let e;
  return {
    c() {
      e = y("li");
    },
    m(n, r) {
      vt(n, e, r);
    },
    p: C,
    d(n) {
      n && Q(e);
    }
  };
}
function Kn(t) {
  let e, n, r, i, o, s, a, f, l, m, p, d = (
    /*ruler*/
    t[8]
  ), g = [];
  for (let c = 0; c < d.length; c += 1)
    g[c] = Gn(Xn(t, d, c));
  return {
    c() {
      e = y("div"), n = y("div"), r = y("div"), i = y("div"), o = y("input"), s = G(), a = y("input"), f = G(), l = y("ul");
      for (let c = 0; c < g.length; c += 1)
        g[c].c();
      v(o, "class", "start"), v(o, "type", "range"), v(o, "min", "0"), v(o, "max", _), v(a, "class", "end"), v(a, "type", "range"), Z(
        a,
        "background",
        /*rangeBackground*/
        t[3]
      ), v(a, "min", "0"), v(a, "max", _), v(i, "class", "controls-container"), v(r, "class", "controls"), v(l, "class", "ruler-points"), v(n, "class", "content"), Z(
        n,
        "margin-top",
        /*verticalOffset*/
        t[7]
      ), v(e, "class", "ruler"), Pt(
        e,
        "vertical",
        /*vertical*/
        t[0]
      );
    },
    m(c, h) {
      vt(c, e, h), b(e, n), b(n, r), b(r, i), b(i, o), H(
        o,
        /*startValue*/
        t[1]
      ), b(i, s), b(i, a), t[18](a), H(
        a,
        /*endValue*/
        t[2]
      ), b(n, f), b(n, l);
      for (let O = 0; O < g.length; O += 1)
        g[O].m(l, null);
      t[23](l), t[24](e), m || (p = [
        w(
          o,
          "change",
          /*input0_change_input_handler*/
          t[14]
        ),
        w(
          o,
          "input",
          /*input0_change_input_handler*/
          t[14]
        ),
        w(
          o,
          "change",
          /*change_handler*/
          t[15]
        ),
        w(
          o,
          "input",
          /*input_handler*/
          t[16]
        ),
        w(
          o,
          "mousedown",
          /*mousedown_handler*/
          t[17]
        ),
        w(
          a,
          "change",
          /*input1_change_input_handler*/
          t[19]
        ),
        w(
          a,
          "input",
          /*input1_change_input_handler*/
          t[19]
        ),
        w(
          a,
          "change",
          /*change_handler_1*/
          t[20]
        ),
        w(
          a,
          "input",
          /*input_handler_1*/
          t[21]
        ),
        w(
          a,
          "mousedown",
          /*mousedown_handler_1*/
          t[22]
        )
      ], m = !0);
    },
    p(c, h) {
      h[0] & /*startValue*/
      2 && H(
        o,
        /*startValue*/
        c[1]
      ), h[0] & /*rangeBackground*/
      8 && Z(
        a,
        "background",
        /*rangeBackground*/
        c[3]
      ), h[0] & /*endValue*/
      4 && H(
        a,
        /*endValue*/
        c[2]
      ), h[0] & /*verticalOffset*/
      128 && Z(
        n,
        "margin-top",
        /*verticalOffset*/
        c[7]
      ), h[0] & /*vertical*/
      1 && Pt(
        e,
        "vertical",
        /*vertical*/
        c[0]
      );
    },
    i: C,
    o: C,
    d(c) {
      c && Q(e), t[18](null), Un(g, c), t[23](null), t[24](null), m = !1, R(p);
    }
  };
}
const _ = 66;
function Qn(t, e, n) {
  let r, i, { vertical: o = !1 } = e, { currentPage: s = 0 } = e, { win: a } = e, f = "white";
  const l = Array.from(Array(_ + 2).keys());
  let m, p, d, g = 0, c = _;
  const h = Gt(), O = (u) => {
    u === "start" && g > c ? n(1, g = c) : n(2, c = g <= c ? c : g), h("margin-changed", {
      side: u,
      value: u === "start" ? g : _ - c
    });
  }, J = (u, E = !0) => {
    p.children[u === "start" ? g : c + 1].classList[E ? "add" : "remove"](i);
  }, Y = (u) => {
    J(u);
    const E = () => {
      J(u, !1), a.removeEventListener("mouseup", E);
    };
    a.addEventListener("mouseup", E);
  }, Yt = () => {
    for (let u = 0; u < p.children.length; u++)
      p.children[u].classList.remove(i);
  }, tt = (u) => {
    Yt(), J(u);
  }, te = () => {
    a.addEventListener("scroll", () => {
      o ? n(6, d.style.marginLeft = a.scrollX + "px", d) : n(6, d.style.marginLeft = "-" + a.scrollX + "px", d);
    });
  };
  Xt(() => {
    o && new ResizeObserver((pe) => {
      for (const de of pe)
        n(6, d.style.height = de.contentRect.height + 50 + "px", d);
    }).observe(a.document.body), te();
  });
  function ee() {
    g = Ct(this.value), n(1, g);
  }
  const ne = () => O("start"), re = () => tt("start"), oe = () => Y("start");
  function ie(u) {
    z[u ? "unshift" : "push"](() => {
      m = u, n(4, m);
    });
  }
  function se() {
    c = Ct(this.value), n(2, c);
  }
  const ae = () => O("end"), le = () => tt("end"), ce = () => Y("end");
  function ue(u) {
    z[u ? "unshift" : "push"](() => {
      p = u, n(5, p);
    });
  }
  function fe(u) {
    z[u ? "unshift" : "push"](() => {
      d = u, n(6, d);
    });
  }
  return t.$$set = (u) => {
    "vertical" in u && n(0, o = u.vertical), "currentPage" in u && n(12, s = u.currentPage), "win" in u && n(13, a = u.win);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*vertical, currentPage*/
    4097 && n(7, r = o && s && s !== 1 ? (s - 1) * 1123 + (s - 1) * 20 + 14 + "px" : ""), t.$$.dirty[0] & /*vertical*/
    1 && (i = "mark" + (o ? "-vertical" : "")), t.$$.dirty[0] & /*startValue, endValue*/
    6) {
      const u = "#E8EAED", E = "white";
      n(3, f = `linear-gradient(
      to right,
      ${u} 0%,
      ${u} ${g / _ * 100}%,
      ${E} ${g / _ * 100}%,
      ${E} ${c / _ * 100}%, 
      ${u} ${c / _ * 100}%, 
      ${u} 100%)`);
    }
  }, [
    o,
    g,
    c,
    f,
    m,
    p,
    d,
    r,
    l,
    O,
    Y,
    tt,
    s,
    a,
    ee,
    ne,
    re,
    oe,
    ie,
    se,
    ae,
    le,
    ce,
    ue,
    fe
  ];
}
let At = class extends Jt {
  constructor(e) {
    super(), Qt(this, e, Qn, Kn, Wt, { vertical: 0, currentPage: 12, win: 13 }, null, [-1, -1]);
  }
};
const F = Dt, St = (t, e, n, r) => {
  n === "start" && (F[e ? "top" : "left"] = r), n === "end" && (F[e ? "bottom" : "right"] = r), gn(t, F);
}, Nt = (t, e) => ({ target: t.getBody(), props: { defaultMargin: F, vertical: e, currentPage: 0, win: t.iframeElement.contentWindow } }), Jn = (t) => {
  new At(Nt(t, !1)).$on("margin-changed", ({ detail: { value: r, side: i } }) => St(t, !1, i, r));
  const n = new At(Nt(t, !0));
  n.$on("margin-changed", ({ detail: { value: r, side: i } }) => St(t, !0, i, r)), t.on("currentPageUpdate", ({ currentPage: r }) => n.$set({ currentPage: r }));
}, Yn = (t) => {
  setTimeout(() => {
    Jn(t);
  }, 500);
};
function tr(t) {
  let e, n, r, i, o, s, a, f, l, m, p;
  return {
    c() {
      e = y("div"), n = y("div"), r = y("button"), r.textContent = "-", i = G(), o = y("div"), s = ct(
        /*zoomInPercentage*/
        t[1]
      ), a = ct(" %"), f = G(), l = y("button"), l.textContent = "+", v(r, "class", "control minus"), v(o, "class", "value"), v(l, "class", "control plus"), v(n, "class", "zoom-controls-container"), v(e, "class", "zoom-controls");
    },
    m(d, g) {
      vt(d, e, g), b(e, n), b(n, r), b(n, i), b(n, o), b(o, s), b(o, a), b(n, f), b(n, l), t[7](e), m || (p = [
        w(r, "click", xt(kt(
          /*click_handler*/
          t[5]
        ))),
        w(l, "click", xt(kt(
          /*click_handler_1*/
          t[6]
        )))
      ], m = !0);
    },
    p(d, [g]) {
      g & /*zoomInPercentage*/
      2 && Mn(
        s,
        /*zoomInPercentage*/
        d[1]
      );
    },
    i: C,
    o: C,
    d(d) {
      d && Q(e), t[7](null), m = !1, R(p);
    }
  };
}
function er(t, e, n) {
  let r, { editor: i } = e, o, s, a, f = 0;
  const l = Gt(), m = (h) => {
    h === "in" ? n(4, f = f + 0.25) : n(4, f = f - 0.25), l("zoom", { zoom: f }), p();
  }, p = () => {
    o.style.transform = `scale(1, ${1 + f})`, o.style.transformOrigin = "top", s.style.transform = `scale(${1 + f}, 1)`, s.style.transformOrigin = "left";
  };
  Xt(() => {
    const h = i.contentDocument;
    o = h.querySelector(".ruler.vertical"), s = h.querySelector(".ruler"), mn(a);
  });
  const d = () => m("out"), g = () => m("in");
  function c(h) {
    z[h ? "unshift" : "push"](() => {
      a = h, n(0, a);
    });
  }
  return t.$$set = (h) => {
    "editor" in h && n(3, i = h.editor);
  }, t.$$.update = () => {
    t.$$.dirty & /*currentZoom*/
    16 && n(1, r = f * 100);
  }, [
    a,
    r,
    m,
    i,
    f,
    d,
    g,
    c
  ];
}
let nr = class extends Jt {
  constructor(e) {
    super(), Qt(this, e, er, tr, Wt, { editor: 3 });
  }
};
const rr = (t) => {
  const e = t.getBody();
  new nr({ target: e, props: { editor: t } }).$on("zoom", ({ detail: { zoom: r } }) => {
    hn(t, r);
  });
}, or = (t) => {
  setTimeout(() => rr(t), 500);
}, ir = `body{background-color:#f8f9fa}h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}h1{padding-top:.67em;padding-bottom:.67em}h3,p{padding:1em 0}#page-1{margin-top:3rem!important}
`, sr = `.mark:after{content:"";height:100vh;width:1px;top:0;margin-top:18px;background-color:#4285f4;position:absolute}.mark-vertical:after{content:"";height:100vw;width:1px;top:0;margin-top:23px;background-color:#4285f4;position:absolute;margin-top:-100vw;margin-left:1px}.ruler{position:fixed;top:0;left:0;width:100%;background:#e8eaed;border-bottom:1px solid #dadce0}.ruler.vertical{position:absolute;height:100%;border-right:1px solid #dadce0;border-bottom:0px;padding:0rem;width:20px;top:0;left:0;margin-top:20px}.ruler.vertical .content{width:29.7cm;transform:rotate(90deg);transform-origin:left;margin-left:10px;margin-top:16px}.ruler.vertical input[type=range]::-webkit-slider-thumb{transform:rotate(45deg);margin-top:-2px}.ruler .content{width:21cm;margin:auto}.controls{display:flex;flex-direction:column;width:100%}.controls .controls-container{position:relative;min-height:20px;display:flex;align-items:center}.controls input[type=range]{appearance:none;height:2px;width:100%;position:absolute;background-color:transparent;pointer-events:none}.controls input[type=range]::-webkit-slider-thumb{outline:none!important;appearance:none;pointer-events:all;width:11px;height:11px;cursor:pointer;margin-top:6px;background:linear-gradient(to bottom right,#4285f4 50%,rgba(0,0,0,.5) 50%,transparent 0%);transform:rotate(-135deg)}.controls input[type=range]::-webkit-slider-thumb:hover{background:linear-gradient(to bottom right,grey 50%,rgba(0,0,0,.5) 50%,transparent 52%)}.controls input[type=range].start{height:0;z-index:1;margin:0;width:100%}.controls input[type=range].start::-webkit-slider-thumb{margin-left:-4px}.controls input[type=range].end{width:100%;height:20px}.controls input[type=range].end::-webkit-slider-thumb{margin-left:5px}.ruler-points{display:flex;margin:-18px 0 0;padding:0;justify-content:space-between;width:100.5%;pointer-events:none;position:relative;height:18px}.ruler-points li{list-style:none;display:flex;align-items:center;font-size:12px}.ruler-points li:nth-child(4n+1):before{height:8px}.ruler-points li:before{content:"";background-color:#c8cad0;height:4px;width:1px}
`, ar = `.zoom-controls{position:fixed;bottom:0;right:0;margin:1rem}.zoom-controls-container{display:flex;align-items:center;height:40px;background-color:#f3f6f9;justify-content:center;border:1px solid #dadce0}.value{padding:0rem 1rem;min-width:50px;text-align:center}.control{padding:0rem 1rem;cursor:pointer!important;background:white;border:none;font-size:1.5rem;height:100%}.control:hover{background-color:#f5f8fc}
`, lr = (t) => {
  t.on("init", () => {
    const e = t.contentDocument, n = e.createElement("style");
    n.textContent = ir + sr + ar, e.body.appendChild(n);
  });
}, fr = (t) => {
  lr(t);
  const e = Ln();
  jn(t, e, 100), Yn(t), or(t);
};
export {
  fr as PaperTinyMCE
};
