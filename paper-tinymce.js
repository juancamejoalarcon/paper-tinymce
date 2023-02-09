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
}, he = P("string"), me = P("object"), ve = P("array"), be = P("null"), ye = P("boolean"), we = P("undefined"), _e = P("function"), Ee = P("number"), ke = function(t) {
  return ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(t) !== -1;
}, qt = function(t, e, n) {
  for (var r = t.length, i = new Array(r), o = 0; o < r - 1; o++) {
    var s = t[o];
    i[o] = n(e(s));
  }
  return r > 0 && (i[r - 1] = e(t[r - 1])), i;
}, xe = function(t, e) {
  var n = Array.prototype.slice.call(t);
  return n.sort(e);
}, Ce = function(t, e) {
  return B(function(n, r) {
    return t.eq(e(n), e(r));
  });
}, B = function(t) {
  return { eq: t };
}, $ = B(function(t, e) {
  return t === e;
}), jt = $, Pe = $, Oe = $, Ae = $, zt = function(t) {
  return B(function(e, n) {
    if (e.length !== n.length)
      return !1;
    for (var r = e.length, i = 0; i < r; i++)
      if (!t.eq(e[i], n[i]))
        return !1;
    return !0;
  });
}, Se = function(t, e) {
  return Ce(zt(t), function(n) {
    return xe(n, e);
  });
}, Ne = function(t) {
  return B(function(e, n) {
    var r = Object.keys(e), i = Object.keys(n);
    if (!Se(jt).eq(r, i))
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
  return n !== r ? !1 : ke(n) ? t === e : n === "array" ? zt(it).eq(t, e) : n === "object" ? Ne(it).eq(t, e) : !1;
}), qe = function(t) {
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
}), je = dt("undefined"), ze = dt("null"), Le = gt, Me = gt, Re = pt(function(t) {
  return Lt(t);
}), Te = dt("function() {...}"), x = function() {
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
}, Ue = function(t) {
  return ht(t, [], "");
}, Ie = function(t) {
  return function(e) {
    return x(x({}, e), { start: t });
  };
}, Be = function(t) {
  return function(e) {
    return x(x({}, e), { end: t });
  };
}, $e = function(t) {
  return function(e) {
    return Ie(t(e.start))(e);
  };
}, De = function(t) {
  return function(e) {
    return Be(t(e.end))(e);
  };
}, He = function(t) {
  return $e(function(e) {
    return t + e;
  });
}, Mt = function(t) {
  return De(function(e) {
    return e + t;
  });
}, K = function(t) {
  return { pprint: t };
}, S = function(t) {
  return K(function(e) {
    return Ue(t.show(e));
  });
}, Rt = S(je), Tt = S(ze), Ut = S(Re), We = S(Le), It = S(Me), Ze = S(Te), Ve = S(gt), Fe = function(t) {
  return K(function(e) {
    var n = qt(e, t.pprint, Mt(","));
    return ht("[", n, "]");
  });
}, Ge = function(t) {
  return K(function(e) {
    var n = qe(e), r = function(o) {
      var s = o[0], a = o[1], f = t.pprint(a), l = Lt(s) + ": ";
      return He(l)(f);
    }, i = qt(n, r, Mt(","));
    return ht("{", i, "}");
  });
}, G = K(function(t) {
  return we(t) ? Rt.pprint(t) : be(t) ? Tt.pprint(t) : Ee(t) ? It.pprint(t) : ye(t) ? We.pprint(t) : _e(t) ? Ze.pprint(t) : he(t) ? Ut.pprint(t) : ve(t) ? Fe(G).pprint(t) : me(t) ? Ge(G).pprint(t) : Ve.pprint(t);
}), L = function(t, e) {
  return x(x({}, t), e);
};
L(Oe, Rt);
L(Ae, Tt);
L(jt, Ut);
L(Pe, It);
L(it, G);
L($, G);
const Xe = (t, e, n) => {
  var r;
  return n(t, e.prototype) ? !0 : ((r = t.constructor) === null || r === void 0 ? void 0 : r.name) === e.name;
}, Ke = (t) => {
  const e = typeof t;
  return t === null ? "null" : e === "object" && Array.isArray(t) ? "array" : e === "object" && Xe(t, String, (n, r) => r.isPrototypeOf(n)) ? "string" : e;
}, Qe = (t) => (e) => Ke(e) === t, Je = (t) => (e) => t === e, bt = Qe("array"), yt = Je(null), Ye = (t) => () => t, tn = (t) => t, en = Ye(!0), nn = Array.prototype.indexOf, rn = (t, e) => nn.call(t, e), on = (t, e) => rn(t, e) > -1, sn = (t, e) => {
  for (let n = 0, r = t.length; n < r; n++) {
    const i = t[n];
    e(i, n);
  }
}, an = (t, e) => {
  for (let n = 0, r = t.length; n < r; ++n) {
    const i = t[n];
    if (e(i, n) !== !0)
      return !1;
  }
  return !0;
}, wt = Object.keys, ln = (t) => {
  if (!bt(t))
    throw new Error("cases must be an array");
  if (t.length === 0)
    throw new Error("there must be at least one case");
  const e = [], n = {};
  return sn(t, (r, i) => {
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
          if (!an(e, (c) => on(d, c)))
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
  generate: ln
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
]), cn = (t) => t.toLowerCase(), un = tn, $t = (t, e) => t.fold((n, r) => r(e).indexOf(r(n)) === 0, (n, r) => n.test(r(e)), (n, r) => r(e).indexOf(r(n)) >= 0, (n, r) => r(e) === r(n), en, (n) => !$t(n, e)), fn = (t, e, n, r, i, o, s) => t.fold(e, n, r, i, o, s);
N.starts, N.pattern, N.contains, N.exact, N.all, N.not;
const pn = (t, e) => {
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
}, dn = (t, e) => {
  e.setPages(t), t.dispatch("pagesUpdate", {
    pages: {
      pagesCount: e.getPagesCount(t)
    }
  });
}, gn = (t, e) => {
  t.dispatch("currentPageUpdate", { currentPage: e });
}, hn = (t, e) => {
  t.dispatch("marginRulerUpdate", { margins: e });
}, mn = (t, e) => {
  t.dispatch("zoomUpdate", { zoom: e });
}, vn = (t) => {
  const e = (n) => {
    n.setAttribute("contenteditable", "false"), n.style.cursor = "default", n.style.outline = "none";
  };
  e(t), t.querySelectorAll("*").forEach((n) => e(n));
}, U = {
  width: "21cm",
  height: "29.7cm",
  heightInPixels: 1122.519685,
  widthInPixes: 793.7007874
}, Dt = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
}, bn = (t) => {
  const e = t.offsetHeight, n = window.getComputedStyle(t);
  return ["top", "bottom"].map((r) => parseInt(n[`margin-${r}`])).reduce((r, i) => r + i, e);
};
let q = Dt, et = 1, D = !1;
const yn = 66, wn = 66, _t = U.widthInPixes / yn, st = U.heightInPixels / wn, mt = "paper-page";
let at, A, z, k = [];
const _n = () => k.reduce(
  (t, e) => t + (e.firstElementChild.childNodes.length ? 1 : 0),
  0
), En = (t) => {
  at = t.getBody(), A = t.contentDocument, t = t;
  const e = A.createElement("div");
  e.classList.add("pages");
  const n = A.createElement("div");
  n.classList.add("pages-container"), e.appendChild(n), z = n, at.appendChild(e);
}, kn = (t) => {
  const e = [];
  return D ? k.forEach((n) => {
    const r = n.firstElementChild;
    e.push(...r.childNodes);
  }) : (En(t), at.childNodes.forEach((n) => {
    n.constructor.name !== "Comment" && e.push(n);
  })), e;
}, xn = (t) => {
  let e = 0, n = 1;
  const r = st * q.bottom + st * q.top, i = U.heightInPixels - r;
  let o = [];
  t.forEach((s, a) => {
    const f = bn(s), l = e + f;
    l > i ? (nt(n, o), e = f, n += 1, o = [s], a === t.length - 1 && D && nt(n, o)) : (e = l, o.push(s), a === t.length - 1 && nt(n, o));
  });
}, nt = (t, e, n = !1) => {
  const r = "page-" + t, i = A.getElementById(r);
  let o;
  i ? o = i : (o = Pn(t), z.appendChild(o)), o.firstElementChild.append(...e), Cn(o.firstElementChild);
}, Cn = (t) => {
  t.style.marginLeft = _t * q.left + "px", t.style.marginRight = _t * q.right + "px", t.style.marginTop = st * q.top + "px";
}, Pn = (t) => {
  const e = A.createElement("div");
  return e.innerHTML = "<div></div>", e.setAttribute("data-page-number", t.toString()), e.id = "page-" + t, e.classList.add(mt), e.style.cssText = `
    height: ${U.height}; 
    width: ${U.width};
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    margin: 20px auto;
    overflow: auto;
    background: white;
    display: flex;
    flex-direction: column;
    background-color: white;
  `, k.push(e), e;
}, On = (t) => {
  k.forEach((e) => {
    e.firstElementChild.childNodes.length ? e.style.display = "block" : e.style.display = "none";
  });
}, An = () => {
  k = [].slice.call(k).sort((t, e) => {
    const n = parseInt(t.getAttribute("data-page-number") || "0", 10), r = parseInt(e.getAttribute("data-page-number") || "0", 10);
    return n - r;
  }), k.forEach((t) => {
    z.appendChild(t);
  });
}, Sn = (t) => {
  const e = t.selection.getRng().commonAncestorContainer, n = t.selection.getRng().startOffset;
  Nn();
  const r = kn(t);
  xn(r), An(), On(), D = !0, t.selection.setCursorLocation(e, n);
}, Nn = () => {
  D && (k = [...A.querySelectorAll(`.${mt}`)], z = A.querySelector(".pages-container"));
}, qn = (t) => {
  if (D) {
    const n = t.selection.getNode().closest(`.${mt}`);
    if (n) {
      const r = Number(n.getAttribute("data-page-number"));
      r !== et && (et = r, gn(t, et));
    }
  }
}, lt = (t, e) => {
  dn(t, e);
}, Ht = (t, e) => {
  lt(t, e), setTimeout(() => lt(t, e), 200);
}, jn = (t) => {
  t.on("zoomUpdate", ({ zoom: e }) => {
    z.style.transformOrigin = "top left", z.style.transform = `scale(${1 + e})`;
  });
}, zn = (t, e) => {
  t.on("marginRulerUpdate", (n) => {
    q = n.margins, Ht(t, e);
  });
}, Ln = (t, e, n) => {
  const r = pn(() => lt(t, e), n);
  t.on("init", () => {
    setTimeout(() => {
      Ht(t, e), t.on("SetContent BeforeAddUndo Undo Redo ViewUpdate keyup", r.throttle), t.on("SelectionChange", () => qn(t)), jn(t), zn(t, e);
    }, n), t.on("remove", r.cancel);
  });
}, Mn = () => ({
  setPages: (t) => Sn(t),
  getPagesCount: () => _n()
});
function C() {
}
function Wt(t) {
  return t();
}
function Et() {
  return /* @__PURE__ */ Object.create(null);
}
function M(t) {
  t.forEach(Wt);
}
function Zt(t) {
  return typeof t == "function";
}
function Vt(t, e) {
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
function Tn(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function y(t) {
  return document.createElement(t);
}
function ct(t) {
  return document.createTextNode(t);
}
function X() {
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
function Un(t) {
  return Array.from(t.childNodes);
}
function In(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function H(t, e) {
  t.value = e ?? "";
}
function W(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function Pt(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function Bn(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(t, n, r, e), i;
}
let I;
function T(t) {
  I = t;
}
function Ft() {
  if (!I)
    throw new Error("Function called outside component initialization");
  return I;
}
function Gt(t) {
  Ft().$$.on_mount.push(t);
}
function Xt() {
  const t = Ft();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = Bn(e, n, { cancelable: r });
      return i.slice().forEach((s) => {
        s.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const R = [], j = [], V = [], Ot = [], $n = Promise.resolve();
let ut = !1;
function Dn() {
  ut || (ut = !0, $n.then(Kt));
}
function ft(t) {
  V.push(t);
}
const rt = /* @__PURE__ */ new Set();
let Z = 0;
function Kt() {
  const t = I;
  do {
    for (; Z < R.length; ) {
      const e = R[Z];
      Z++, T(e), Hn(e.$$);
    }
    for (T(null), R.length = 0, Z = 0; j.length; )
      j.pop()();
    for (let e = 0; e < V.length; e += 1) {
      const n = V[e];
      rt.has(n) || (rt.add(n), n());
    }
    V.length = 0;
  } while (R.length);
  for (; Ot.length; )
    Ot.pop()();
  ut = !1, rt.clear(), T(t);
}
function Hn(t) {
  if (t.fragment !== null) {
    t.update(), M(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ft);
  }
}
const Wn = /* @__PURE__ */ new Set();
function Zn(t, e) {
  t && t.i && (Wn.delete(t), t.i(e));
}
function Vn(t, e, n, r) {
  const { fragment: i, after_update: o } = t.$$;
  i && i.m(e, n), r || ft(() => {
    const s = t.$$.on_mount.map(Wt).filter(Zt);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : M(s), t.$$.on_mount = [];
  }), o.forEach(ft);
}
function Fn(t, e) {
  const n = t.$$;
  n.fragment !== null && (M(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Gn(t, e) {
  t.$$.dirty[0] === -1 && (R.push(t), Dn(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Qt(t, e, n, r, i, o, s, a = [-1]) {
  const f = I;
  T(t);
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
    return l.ctx && i(l.ctx[p], l.ctx[p] = c) && (!l.skip_bound && l.bound[p] && l.bound[p](c), m && Gn(t, p)), d;
  }) : [], l.update(), m = !0, M(l.before_update), l.fragment = r ? r(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = Un(e.target);
      l.fragment && l.fragment.l(p), p.forEach(Q);
    } else
      l.fragment && l.fragment.c();
    e.intro && Zn(t.$$.fragment), Vn(t, e.target, e.anchor, e.customElement), Kt();
  }
  T(f);
}
class Jt {
  $destroy() {
    Fn(this, 1), this.$destroy = C;
  }
  $on(e, n) {
    if (!Zt(n))
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
function Kn(t) {
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
function Qn(t) {
  let e, n, r, i, o, s, a, f, l, m, p, d = (
    /*ruler*/
    t[8]
  ), g = [];
  for (let c = 0; c < d.length; c += 1)
    g[c] = Kn(Xn(t, d, c));
  return {
    c() {
      e = y("div"), n = y("div"), r = y("div"), i = y("div"), o = y("input"), s = X(), a = y("input"), f = X(), l = y("ul");
      for (let c = 0; c < g.length; c += 1)
        g[c].c();
      v(o, "class", "start"), v(o, "type", "range"), v(o, "min", "0"), v(o, "max", _), v(a, "class", "end"), v(a, "type", "range"), W(
        a,
        "background",
        /*rangeBackground*/
        t[3]
      ), v(a, "min", "0"), v(a, "max", _), v(i, "class", "controls-container"), v(r, "class", "controls"), v(l, "class", "ruler-points"), v(n, "class", "content"), W(
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
      8 && W(
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
      128 && W(
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
      c && Q(e), t[18](null), Tn(g, c), t[23](null), t[24](null), m = !1, M(p);
    }
  };
}
const _ = 66;
function Jn(t, e, n) {
  let r, i, { vertical: o = !1 } = e, { currentPage: s = 0 } = e, { win: a } = e, f = "white";
  const l = Array.from(Array(_ + 2).keys());
  let m, p, d, g = 0, c = _;
  const h = Xt(), O = (u) => {
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
  }, te = () => {
    for (let u = 0; u < p.children.length; u++)
      p.children[u].classList.remove(i);
  }, tt = (u) => {
    te(), J(u);
  }, ee = () => {
    a.addEventListener("scroll", () => {
      o ? n(6, d.style.marginLeft = a.scrollX + "px", d) : n(6, d.style.marginLeft = "-" + a.scrollX + "px", d);
    });
  };
  Gt(() => {
    o && new ResizeObserver((de) => {
      for (const ge of de)
        n(6, d.style.height = ge.contentRect.height + 50 + "px", d);
    }).observe(a.document.body), ee();
  });
  function ne() {
    g = Ct(this.value), n(1, g);
  }
  const re = () => O("start"), oe = () => tt("start"), ie = () => Y("start");
  function se(u) {
    j[u ? "unshift" : "push"](() => {
      m = u, n(4, m);
    });
  }
  function ae() {
    c = Ct(this.value), n(2, c);
  }
  const le = () => O("end"), ce = () => tt("end"), ue = () => Y("end");
  function fe(u) {
    j[u ? "unshift" : "push"](() => {
      p = u, n(5, p);
    });
  }
  function pe(u) {
    j[u ? "unshift" : "push"](() => {
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
    ne,
    re,
    oe,
    ie,
    se,
    ae,
    le,
    ce,
    ue,
    fe,
    pe
  ];
}
let At = class extends Jt {
  constructor(e) {
    super(), Qt(this, e, Jn, Qn, Vt, { vertical: 0, currentPage: 12, win: 13 }, null, [-1, -1]);
  }
};
const F = Dt, St = (t, e, n, r) => {
  n === "start" && (F[e ? "top" : "left"] = r), n === "end" && (F[e ? "bottom" : "right"] = r), hn(t, F);
}, Nt = (t, e) => ({ target: t.getBody(), props: { defaultMargin: F, vertical: e, currentPage: 0, win: t.iframeElement.contentWindow } }), Yn = (t) => {
  new At(Nt(t, !1)).$on("margin-changed", ({ detail: { value: r, side: i } }) => St(t, !1, i, r));
  const n = new At(Nt(t, !0));
  n.$on("margin-changed", ({ detail: { value: r, side: i } }) => St(t, !0, i, r)), t.on("currentPageUpdate", ({ currentPage: r }) => n.$set({ currentPage: r }));
}, tr = (t) => {
  setTimeout(() => {
    Yn(t);
  }, 500);
};
function er(t) {
  let e, n, r, i, o, s, a, f, l, m, p;
  return {
    c() {
      e = y("div"), n = y("div"), r = y("button"), r.textContent = "-", i = X(), o = y("div"), s = ct(
        /*zoomInPercentage*/
        t[1]
      ), a = ct(" %"), f = X(), l = y("button"), l.textContent = "+", v(r, "class", "control minus"), v(o, "class", "value"), v(l, "class", "control plus"), v(n, "class", "zoom-controls-container"), v(e, "class", "zoom-controls");
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
      2 && In(
        s,
        /*zoomInPercentage*/
        d[1]
      );
    },
    i: C,
    o: C,
    d(d) {
      d && Q(e), t[7](null), m = !1, M(p);
    }
  };
}
function nr(t, e, n) {
  let r, { editor: i } = e, o, s, a, f = 0;
  const l = Xt(), m = (h) => {
    h === "in" ? n(4, f = f + 0.25) : n(4, f = f - 0.25), l("zoom", { zoom: f }), p();
  }, p = () => {
    o.style.transform = `scale(1, ${1 + f})`, o.style.transformOrigin = "top", s.style.transform = `scale(${1 + f}, 1)`, s.style.transformOrigin = "left";
  };
  Gt(() => {
    const h = i.contentDocument;
    o = h.querySelector(".ruler.vertical"), s = h.querySelector(".ruler"), vn(a);
  });
  const d = () => m("out"), g = () => m("in");
  function c(h) {
    j[h ? "unshift" : "push"](() => {
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
let rr = class extends Jt {
  constructor(e) {
    super(), Qt(this, e, nr, er, Vt, { editor: 3 });
  }
};
const or = (t) => {
  const e = t.getBody();
  new rr({ target: e, props: { editor: t } }).$on("zoom", ({ detail: { zoom: r } }) => {
    mn(t, r);
  });
}, ir = (t) => {
  setTimeout(() => or(t), 500);
}, sr = `body{background-color:#f8f9fa}h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}h1{padding-top:.67em;padding-bottom:.67em}h3,p{padding:1em 0}#page-1{margin-top:3rem!important}
`, ar = `.mark:after{content:"";height:100vh;width:1px;top:0;margin-top:18px;background-color:#4285f4;position:absolute}.mark-vertical:after{content:"";height:100vw;width:1px;top:0;margin-top:23px;background-color:#4285f4;position:absolute;margin-top:-100vw;margin-left:1px}.ruler{position:fixed;top:0;left:0;width:100%;background:#e8eaed;border-bottom:1px solid #dadce0}.ruler.vertical{position:absolute;height:100%;border-right:1px solid #dadce0;border-bottom:0px;padding:0rem;width:20px;top:0;left:0;margin-top:20px}.ruler.vertical .content{width:29.7cm;transform:rotate(90deg);transform-origin:left;margin-left:10px;margin-top:16px}.ruler.vertical input[type=range]::-webkit-slider-thumb{transform:rotate(45deg);margin-top:-2px}.ruler .content{width:21cm;margin:auto}.controls{display:flex;flex-direction:column;width:100%}.controls .controls-container{position:relative;min-height:20px;display:flex;align-items:center}.controls input[type=range]{appearance:none;height:2px;width:100%;position:absolute;background-color:transparent;pointer-events:none}.controls input[type=range]::-webkit-slider-thumb{outline:none!important;appearance:none;pointer-events:all;width:11px;height:11px;cursor:pointer;margin-top:6px;background:linear-gradient(to bottom right,#4285f4 50%,rgba(0,0,0,.5) 50%,transparent 0%);transform:rotate(-135deg)}.controls input[type=range]::-webkit-slider-thumb:hover{background:linear-gradient(to bottom right,grey 50%,rgba(0,0,0,.5) 50%,transparent 52%)}.controls input[type=range].start{height:0;z-index:1;margin:0;width:100%}.controls input[type=range].start::-webkit-slider-thumb{margin-left:-4px}.controls input[type=range].end{width:100%;height:20px}.controls input[type=range].end::-webkit-slider-thumb{margin-left:5px}.ruler-points{display:flex;margin:-18px 0 0;padding:0;justify-content:space-between;width:100.5%;pointer-events:none;position:relative;height:18px}.ruler-points li{list-style:none;display:flex;align-items:center;font-size:12px}.ruler-points li:nth-child(4n+1):before{height:8px}.ruler-points li:before{content:"";background-color:#c8cad0;height:4px;width:1px}
`, lr = `.zoom-controls{position:fixed;bottom:0;right:0;margin:1rem}.zoom-controls-container{display:flex;align-items:center;height:40px;background-color:#f3f6f9;justify-content:center;border:1px solid #dadce0}.value{padding:0rem 1rem;min-width:50px;text-align:center}.control{padding:0rem 1rem;cursor:pointer!important;background:white;border:none;font-size:1.5rem;height:100%}.control:hover{background-color:#f5f8fc}
`, cr = (t) => {
  t.on("init", () => {
    const e = t.contentDocument, n = e.createElement("style");
    n.textContent = sr + ar + lr, e.body.appendChild(n);
  });
}, Yt = (t) => {
  cr(t);
  const e = Mn();
  Ln(t, e, 100), tr(t), ir(t);
}, ur = (t) => {
  if (typeof module == "object")
    try {
      module.exports = t;
    } catch {
    }
}, fr = (t) => {
  window.PaperTinyMCE = t;
};
fr(Yt);
ur(Yt);
export {
  Yt as PaperTinyMCE
};
