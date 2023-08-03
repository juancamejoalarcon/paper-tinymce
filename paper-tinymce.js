var Yl = Object.defineProperty;
var Kl = (e, t, n) => t in e ? Yl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var yc = (e, t, n) => (Kl(e, typeof t != "symbol" ? t + "" : t, n), n);
var Ma = function(e) {
  if (e === null)
    return "null";
  if (e === void 0)
    return "undefined";
  var t = typeof e;
  return t === "object" && (Array.prototype.isPrototypeOf(e) || e.constructor && e.constructor.name === "Array") ? "array" : t === "object" && (String.prototype.isPrototypeOf(e) || e.constructor && e.constructor.name === "String") ? "string" : t;
}, Mt = function(e) {
  return function(t) {
    return Ma(t) === e;
  };
}, Ql = Mt("string"), Jl = Mt("object"), ef = Mt("array"), tf = Mt("null"), nf = Mt("boolean"), rf = Mt("undefined"), af = Mt("function"), of = Mt("number"), cf = function(e) {
  return ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(e) !== -1;
}, _u = function(e, t, n) {
  for (var r = e.length, i = new Array(r), a = 0; a < r - 1; a++) {
    var c = e[a];
    i[a] = n(t(c));
  }
  return r > 0 && (i[r - 1] = t(e[r - 1])), i;
}, sf = function(e, t) {
  var n = Array.prototype.slice.call(e);
  return n.sort(t);
}, uf = function(e, t) {
  return $n(function(n, r) {
    return e.eq(t(n), t(r));
  });
}, $n = function(e) {
  return { eq: e };
}, Zn = $n(function(e, t) {
  return e === t;
}), Uu = Zn, df = Zn, lf = Zn, ff = Zn, wu = function(e) {
  return $n(function(t, n) {
    if (t.length !== n.length)
      return !1;
    for (var r = t.length, i = 0; i < r; i++)
      if (!e.eq(t[i], n[i]))
        return !1;
    return !0;
  });
}, hf = function(e, t) {
  return uf(wu(e), function(n) {
    return sf(n, t);
  });
}, pf = function(e) {
  return $n(function(t, n) {
    var r = Object.keys(t), i = Object.keys(n);
    if (!hf(Uu).eq(r, i))
      return !1;
    for (var a = r.length, c = 0; c < a; c++) {
      var o = r[c];
      if (!e.eq(t[o], n[o]))
        return !1;
    }
    return !0;
  });
}, ja = $n(function(e, t) {
  if (e === t)
    return !0;
  var n = Ma(e), r = Ma(t);
  return n !== r ? !1 : cf(n) ? e === t : n === "array" ? wu(ja).eq(e, t) : n === "object" ? pf(ja).eq(e, t) : !1;
}), gf = function(e) {
  for (var t = [], n = Object.keys(e), r = n.length, i = 0; i < r; i++) {
    var a = n[i], c = e[a];
    t.push([a, c]);
  }
  return t;
}, Tu = function(e) {
  return '"' + e.replace(/"/g, '\\"') + '"';
}, eo = function(e) {
  return { show: e };
}, to = function(e) {
  return eo(function() {
    return e;
  });
}, no = eo(function(e) {
  return String(e);
}), mf = to("undefined"), bf = to("null"), yf = no, Df = no, vf = eo(function(e) {
  return Tu(e);
}), xf = to("function() {...}"), Ot = function() {
  return Ot = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ot.apply(this, arguments);
}, ro = function(e, t, n) {
  return {
    start: e,
    children: t,
    end: n
  };
}, _f = function(e) {
  return ro(e, [], "");
}, Uf = function(e) {
  return function(t) {
    return Ot(Ot({}, t), { start: e });
  };
}, wf = function(e) {
  return function(t) {
    return Ot(Ot({}, t), { end: e });
  };
}, Tf = function(e) {
  return function(t) {
    return Uf(e(t.start))(t);
  };
}, Ef = function(e) {
  return function(t) {
    return wf(e(t.end))(t);
  };
}, Af = function(e) {
  return Tf(function(t) {
    return e + t;
  });
}, Eu = function(e) {
  return Ef(function(t) {
    return t + e;
  });
}, Jr = function(e) {
  return { pprint: e };
}, Jt = function(e) {
  return Jr(function(t) {
    return _f(e.show(t));
  });
}, Au = Jt(mf), Cu = Jt(bf), Fu = Jt(vf), Cf = Jt(yf), Su = Jt(Df), Ff = Jt(xf), Sf = Jt(no), Bf = function(e) {
  return Jr(function(t) {
    var n = _u(t, e.pprint, Eu(","));
    return ro("[", n, "]");
  });
}, kf = function(e) {
  return Jr(function(t) {
    var n = gf(t), r = function(a) {
      var c = a[0], o = a[1], s = e.pprint(o), u = Tu(c) + ": ";
      return Af(u)(s);
    }, i = _u(n, r, Eu(","));
    return ro("{", i, "}");
  });
}, xr = Jr(function(e) {
  return rf(e) ? Au.pprint(e) : tf(e) ? Cu.pprint(e) : of(e) ? Su.pprint(e) : nf(e) ? Cf.pprint(e) : af(e) ? Ff.pprint(e) : Ql(e) ? Fu.pprint(e) : ef(e) ? Bf(xr).pprint(e) : Jl(e) ? kf(xr).pprint(e) : Sf.pprint(e);
}), Dn = function(e, t) {
  return Ot(Ot({}, e), t);
};
Dn(lf, Au);
Dn(ff, Cu);
Dn(Uu, Fu);
Dn(df, Su);
Dn(ja, xr);
Dn(Zn, xr);
const Wf = (e, t, n) => {
  var r;
  return n(e, t.prototype) ? !0 : ((r = e.constructor) === null || r === void 0 ? void 0 : r.name) === t.name;
}, Nf = (e) => {
  const t = typeof e;
  return e === null ? "null" : t === "object" && Array.isArray(e) ? "array" : t === "object" && Wf(e, String, (n, r) => r.isPrototypeOf(n)) ? "string" : t;
}, Rf = (e) => (t) => Nf(t) === e, Of = (e) => (t) => e === t, Dc = Rf("array"), vc = Of(null), If = (e) => () => e, Lf = (e) => e, Mf = If(!0), jf = Array.prototype.indexOf, Pf = (e, t) => jf.call(e, t), qf = (e, t) => Pf(e, t) > -1, zf = (e, t) => {
  for (let n = 0, r = e.length; n < r; n++) {
    const i = e[n];
    t(i, n);
  }
}, Xf = (e, t) => {
  for (let n = 0, r = e.length; n < r; ++n) {
    const i = e[n];
    if (t(i, n) !== !0)
      return !1;
  }
  return !0;
}, xc = Object.keys, Vf = (e) => {
  if (!Dc(e))
    throw new Error("cases must be an array");
  if (e.length === 0)
    throw new Error("there must be at least one case");
  const t = [], n = {};
  return zf(e, (r, i) => {
    const a = xc(r);
    if (a.length !== 1)
      throw new Error("one and only one name per case");
    const c = a[0], o = r[c];
    if (n[c] !== void 0)
      throw new Error("duplicate key detected:" + c);
    if (c === "cata")
      throw new Error("cannot have a case named cata (sorry)");
    if (!Dc(o))
      throw new Error("case arguments must be an array");
    t.push(c), n[c] = (...s) => {
      const u = s.length;
      if (u !== o.length)
        throw new Error("Wrong number of arguments to case " + c + ". Expected " + o.length + " (" + o + "), got " + u);
      return {
        fold: (...p) => {
          if (p.length !== e.length)
            throw new Error("Wrong number of arguments to fold. Expected " + e.length + ", got " + p.length);
          return p[i].apply(null, s);
        },
        match: (p) => {
          const y = xc(p);
          if (t.length !== y.length)
            throw new Error("Wrong number of arguments to match. Expected: " + t.join(",") + `
Actual: ` + y.join(","));
          if (!Xf(t, (b) => qf(y, b)))
            throw new Error("Not all branches were specified when using match. Specified: " + y.join(", ") + `
Required: ` + t.join(", "));
          return p[c].apply(null, s);
        },
        // NOTE: Only for debugging.
        log: (p) => {
          console.log(p, {
            constructors: t,
            constructor: c,
            params: s
          });
        }
      };
    };
  }), n;
}, Bu = {
  generate: Vf
};
typeof window < "u" || Function("return this;")();
Bu.generate([
  { bothErrors: ["error1", "error2"] },
  { firstError: ["error1", "value2"] },
  { secondError: ["value1", "error2"] },
  { bothValues: ["value1", "value2"] }
]);
const an = Bu.generate([
  { starts: ["value", "f"] },
  { pattern: ["regex", "f"] },
  { contains: ["value", "f"] },
  { exact: ["value", "f"] },
  { all: [] },
  { not: ["stringMatch"] }
]), Hf = (e) => e.toLowerCase(), $f = Lf, ku = (e, t) => e.fold((n, r) => r(t).indexOf(r(n)) === 0, (n, r) => n.test(r(t)), (n, r) => r(t).indexOf(r(n)) >= 0, (n, r) => r(t) === r(n), Mf, (n) => !ku(n, t)), Zf = (e, t, n, r, i, a, c) => e.fold(t, n, r, i, a, c);
an.starts, an.pattern, an.contains, an.exact, an.all, an.not;
const Gf = (e, t) => {
  let n = null;
  return {
    cancel: () => {
      vc(n) || (clearTimeout(n), n = null);
    },
    throttle: (...a) => {
      vc(n) && (n = setTimeout(() => {
        n = null, e.apply(null, a);
      }, t));
    }
  };
}, Yf = (e, t) => {
  t.setPages(e), e.dispatch("pagesUpdate", {
    pages: {
      pagesCount: t.getPagesCount(e)
    }
  });
}, Kf = (e, t) => {
  e.dispatch("currentPageUpdate", { currentPage: t });
}, Qf = (e, t) => {
  e.dispatch("marginRulerUpdate", { margins: t });
}, Jf = (e, t) => {
  e.dispatch("zoomUpdate", { zoom: t });
}, eh = (e) => {
  const t = (n) => {
    n.setAttribute("contenteditable", "false"), n.style.cursor = "default", n.style.outline = "none";
  };
  t(e), e.querySelectorAll("*").forEach((n) => t(n));
}, Mn = {
  width: "21cm",
  height: "29.7cm",
  heightInPixels: 1122.519685,
  widthInPixes: 793.7007874
}, Wu = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
}, th = (e) => {
  const t = e.offsetHeight, n = window.getComputedStyle(e);
  return ["top", "bottom"].map((r) => parseInt(n[`margin-${r}`])).reduce((r, i) => r + i, t);
};
let fn = Wu, Zi = 1, vn = !1;
const nh = 66, rh = 66, _c = Mn.widthInPixes / nh, Pa = Mn.heightInPixels / rh, io = "paper-page";
let qa, Gt, ei, Zt, Et = [];
const ih = () => Et.reduce(
  (e, t) => e + (t.firstElementChild.childNodes.length ? 1 : 0),
  0
), ah = (e) => {
  qa = e.getBody(), Gt = e.contentDocument, e = e, Zt = Gt.createElement("div"), Zt.classList.add("pages"), Zt.id = "paper-tinymce-pages";
  const t = Gt.createElement("div");
  t.classList.add("pages-container"), Zt.appendChild(t), ei = t, qa.appendChild(Zt);
}, oh = () => {
  vn = !1, Et = [];
}, ch = (e) => {
  const t = [];
  return vn ? Et.forEach((n) => {
    const r = n.firstElementChild;
    t.push(...r.childNodes);
  }) : (ah(e), qa.childNodes.forEach((n) => {
    n.constructor.name !== "Comment" && (n == null ? void 0 : n.id) !== "paper-tinymce-pages" && t.push(n);
  })), t;
}, sh = (e) => {
  let t = 0, n = 1;
  const r = Pa * fn.bottom + Pa * fn.top, i = Mn.heightInPixels - r;
  let a = [];
  e.forEach((c, o) => {
    const s = th(c), u = t + s;
    u > i ? (Gi(n, a), t = s, n += 1, a = [c], o === e.length - 1 && vn && Gi(n, a)) : (t = u, a.push(c), o === e.length - 1 && Gi(n, a));
  });
}, Gi = (e, t, n = !1) => {
  const r = "page-" + e, i = Gt.getElementById(r);
  let a;
  i ? a = i : (a = dh(e), ei.appendChild(a)), a.firstElementChild.append(...t), uh(a.firstElementChild);
}, uh = (e) => {
  e.style.marginLeft = _c * fn.left + "px", e.style.marginRight = _c * fn.right + "px", e.style.marginTop = Pa * fn.top + "px";
}, dh = (e) => {
  const t = Gt.createElement("article");
  return t.innerHTML = "<section></section>", t.setAttribute("data-page-number", e.toString()), t.id = "page-" + e, t.classList.add(io), t.style.cssText = `
    height: ${Mn.height}; 
    width: ${Mn.width};
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    margin: 20px auto;
    overflow: auto;
    background: white;
    display: flex;
    flex-direction: column;
    background-color: white;
  `, Et.push(t), t;
}, lh = (e) => {
  Et.forEach((t) => {
    t.firstElementChild.childNodes.length ? t.style.display = "block" : t.style.display = "none";
  });
}, fh = () => {
  Et = [].slice.call(Et).sort((e, t) => {
    const n = parseInt(e.getAttribute("data-page-number") || "0", 10), r = parseInt(t.getAttribute("data-page-number") || "0", 10);
    return n - r;
  }), Et.forEach((e) => {
    ei.appendChild(e);
  });
}, hh = (e) => {
  const t = e.selection.getRng().commonAncestorContainer, n = e.selection.getRng().startOffset;
  ph();
  const r = ch(e);
  sh(r), fh(), lh(), vn = !0, e.selection.setCursorLocation(t, n);
}, ph = () => {
  vn && (Et = [...Gt.querySelectorAll(`.${io}`)], ei = Gt.querySelector(".pages-container"));
}, gh = (e) => {
  if (vn) {
    const n = e.selection.getNode().closest(`.${io}`);
    if (n) {
      const r = Number(n.getAttribute("data-page-number"));
      r !== Zi && (Zi = r, Kf(e, Zi));
    }
  }
}, za = (e, t) => {
  Yf(e, t);
}, Nu = (e, t) => {
  za(e, t), setTimeout(() => za(e, t), 200);
}, mh = (e) => {
  e.on("zoomUpdate", ({ zoom: t }) => {
    Zt.style.transformOrigin = "0 0", Zt.style.transform = `scale(${1 + t})`;
  });
}, bh = (e, t) => {
  e.on("marginRulerUpdate", (n) => {
    fn = n.margins, Nu(e, t);
  });
}, yh = (e) => {
  e.contentWindow.addEventListener("copy", (t) => {
    let n = t.clipboardData.getData("text/html"), r = "";
    n.replace(/<article(.*?)>([\s\S]*?)<\/article>/g, (i, a) => {
      let c = i.replace(/<article(.*?)>/g, "");
      return c = c.replace(/<\/article>/g, ""), c = c.replace(/<section(.*?)>/g, ""), c = c.replace(/<\/section>/g, ""), r += c, i;
    }), t.clipboardData.setData("text/html", r);
  });
}, Dh = (e, t, n) => {
  const r = Gf(() => za(e, t), n);
  e.on("init", () => {
    setTimeout(() => {
      Nu(e, t), e.on("Undo Redo ViewUpdate", r.throttle), e.on("keyup", (i) => {
        i.keyCode === 91 || i.keyCode === 17 || r.throttle();
      }), e.on("SetContent", () => {
        oh(), r.throttle();
      }), e.on("SelectionChange", () => gh(e)), e.contentWindow.addEventListener("paste", () => {
        setTimeout(() => r.throttle(), 200);
      }), yh(e), mh(e), bh(e, t);
    }, n), e.on("remove", r.cancel);
  });
}, vh = () => ({
  setPages: (e) => hh(e),
  getPagesCount: () => ih()
});
function It() {
}
function Ru(e) {
  return e();
}
function Uc() {
  return /* @__PURE__ */ Object.create(null);
}
function xn(e) {
  e.forEach(Ru);
}
function Ou(e) {
  return typeof e == "function";
}
function Iu(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function xh(e) {
  return Object.keys(e).length === 0;
}
function Pe(e, t) {
  e.appendChild(t);
}
function ao(e, t, n) {
  e.insertBefore(t, n || null);
}
function ti(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function _h(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function rt(e) {
  return document.createElement(e);
}
function Xa(e) {
  return document.createTextNode(e);
}
function _r() {
  return Xa(" ");
}
function ct(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function wc(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function Tc(e) {
  return function(t) {
    return t.stopPropagation(), e.call(this, t);
  };
}
function Oe(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Ec(e) {
  return e === "" ? null : +e;
}
function Uh(e) {
  return Array.from(e.childNodes);
}
function wh(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
function cr(e, t) {
  e.value = t ?? "";
}
function Ac(e, t, n, r) {
  n === null ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "");
}
function Cc(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function Th(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(e, n, r, t), i;
}
let jn;
function In(e) {
  jn = e;
}
function Lu() {
  if (!jn)
    throw new Error("Function called outside component initialization");
  return jn;
}
function Mu(e) {
  Lu().$$.on_mount.push(e);
}
function ju() {
  const e = Lu();
  return (t, n, { cancelable: r = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const a = Th(t, n, { cancelable: r });
      return i.slice().forEach((c) => {
        c.call(e, a);
      }), !a.defaultPrevented;
    }
    return !0;
  };
}
const Rn = [], hn = [], mr = [], Fc = [], Eh = Promise.resolve();
let Va = !1;
function Ah() {
  Va || (Va = !0, Eh.then(Pu));
}
function Ha(e) {
  mr.push(e);
}
const Yi = /* @__PURE__ */ new Set();
let sr = 0;
function Pu() {
  const e = jn;
  do {
    for (; sr < Rn.length; ) {
      const t = Rn[sr];
      sr++, In(t), Ch(t.$$);
    }
    for (In(null), Rn.length = 0, sr = 0; hn.length; )
      hn.pop()();
    for (let t = 0; t < mr.length; t += 1) {
      const n = mr[t];
      Yi.has(n) || (Yi.add(n), n());
    }
    mr.length = 0;
  } while (Rn.length);
  for (; Fc.length; )
    Fc.pop()();
  Va = !1, Yi.clear(), In(e);
}
function Ch(e) {
  if (e.fragment !== null) {
    e.update(), xn(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Ha);
  }
}
const Fh = /* @__PURE__ */ new Set();
function Sh(e, t) {
  e && e.i && (Fh.delete(e), e.i(t));
}
function Bh(e, t, n, r) {
  const { fragment: i, after_update: a } = e.$$;
  i && i.m(t, n), r || Ha(() => {
    const c = e.$$.on_mount.map(Ru).filter(Ou);
    e.$$.on_destroy ? e.$$.on_destroy.push(...c) : xn(c), e.$$.on_mount = [];
  }), a.forEach(Ha);
}
function kh(e, t) {
  const n = e.$$;
  n.fragment !== null && (xn(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Wh(e, t) {
  e.$$.dirty[0] === -1 && (Rn.push(e), Ah(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function qu(e, t, n, r, i, a, c, o = [-1]) {
  const s = jn;
  In(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: It,
    not_equal: i,
    bound: Uc(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: Uc(),
    dirty: o,
    skip_bound: !1,
    root: t.target || s.$$.root
  };
  c && c(u.root);
  let f = !1;
  if (u.ctx = n ? n(e, t.props || {}, (p, y, ...m) => {
    const b = m.length ? m[0] : y;
    return u.ctx && i(u.ctx[p], u.ctx[p] = b) && (!u.skip_bound && u.bound[p] && u.bound[p](b), f && Wh(e, p)), y;
  }) : [], u.update(), f = !0, xn(u.before_update), u.fragment = r ? r(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const p = Uh(t.target);
      u.fragment && u.fragment.l(p), p.forEach(ti);
    } else
      u.fragment && u.fragment.c();
    t.intro && Sh(e.$$.fragment), Bh(e, t.target, t.anchor, t.customElement), Pu();
  }
  In(s);
}
class zu {
  $destroy() {
    kh(this, 1), this.$destroy = It;
  }
  $on(t, n) {
    if (!Ou(n))
      return It;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !xh(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function Nh(e, t, n) {
  const r = e.slice();
  return r[33] = t[n], r;
}
function Rh(e) {
  let t;
  return {
    c() {
      t = rt("li");
    },
    m(n, r) {
      ao(n, t, r);
    },
    p: It,
    d(n) {
      n && ti(t);
    }
  };
}
function Oh(e) {
  let t, n, r, i, a, c, o, s, u, f, p, y = (
    /*ruler*/
    e[7]
  ), m = [];
  for (let b = 0; b < y.length; b += 1)
    m[b] = Rh(Nh(e, y, b));
  return {
    c() {
      t = rt("div"), n = rt("div"), r = rt("div"), i = rt("div"), a = rt("input"), c = _r(), o = rt("input"), s = _r(), u = rt("ul");
      for (let b = 0; b < m.length; b += 1)
        m[b].c();
      Oe(a, "class", "start"), Oe(a, "type", "range"), Oe(a, "min", "0"), Oe(a, "max", Tt), Oe(o, "class", "end"), Oe(o, "type", "range"), Ac(
        o,
        "background",
        /*rangeBackground*/
        e[3]
      ), Oe(o, "min", "0"), Oe(o, "max", Tt), Oe(i, "class", "controls-container"), Oe(r, "class", "controls"), Oe(u, "class", "ruler-points"), Oe(n, "class", "content"), Oe(t, "class", "ruler"), Cc(
        t,
        "vertical",
        /*vertical*/
        e[0]
      );
    },
    m(b, d) {
      ao(b, t, d), Pe(t, n), Pe(n, r), Pe(r, i), Pe(i, a), cr(
        a,
        /*startValue*/
        e[1]
      ), Pe(i, c), Pe(i, o), e[18](o), cr(
        o,
        /*endValue*/
        e[2]
      ), Pe(n, s), Pe(n, u);
      for (let l = 0; l < m.length; l += 1)
        m[l].m(u, null);
      e[23](u), e[24](t), f || (p = [
        ct(
          a,
          "change",
          /*input0_change_input_handler*/
          e[14]
        ),
        ct(
          a,
          "input",
          /*input0_change_input_handler*/
          e[14]
        ),
        ct(
          a,
          "change",
          /*change_handler*/
          e[15]
        ),
        ct(
          a,
          "input",
          /*input_handler*/
          e[16]
        ),
        ct(
          a,
          "mousedown",
          /*mousedown_handler*/
          e[17]
        ),
        ct(
          o,
          "change",
          /*input1_change_input_handler*/
          e[19]
        ),
        ct(
          o,
          "input",
          /*input1_change_input_handler*/
          e[19]
        ),
        ct(
          o,
          "change",
          /*change_handler_1*/
          e[20]
        ),
        ct(
          o,
          "input",
          /*input_handler_1*/
          e[21]
        ),
        ct(
          o,
          "mousedown",
          /*mousedown_handler_1*/
          e[22]
        )
      ], f = !0);
    },
    p(b, d) {
      d[0] & /*startValue*/
      2 && cr(
        a,
        /*startValue*/
        b[1]
      ), d[0] & /*rangeBackground*/
      8 && Ac(
        o,
        "background",
        /*rangeBackground*/
        b[3]
      ), d[0] & /*endValue*/
      4 && cr(
        o,
        /*endValue*/
        b[2]
      ), d[0] & /*vertical*/
      1 && Cc(
        t,
        "vertical",
        /*vertical*/
        b[0]
      );
    },
    i: It,
    o: It,
    d(b) {
      b && ti(t), e[18](null), _h(m, b), e[23](null), e[24](null), f = !1, xn(p);
    }
  };
}
const Tt = 66;
function Ih(e, t, n) {
  let r, { vertical: i = !1 } = t, { currentPage: a = 0 } = t, { currentZoom: c = 0 } = t, { win: o } = t, s = "white", u, f = 1;
  const p = Array.from(Array(Tt + 2).keys());
  let y, m, b, d = 0, l = Tt;
  const g = ju(), h = (M) => {
    M === "start" && d > l ? n(1, d = l) : n(2, l = d <= l ? l : d), g("margin-changed", {
      side: M,
      value: M === "start" ? d : Tt - l
    });
  }, D = (M, k = !0) => {
    m.children[M === "start" ? d : l + 1].classList[k ? "add" : "remove"](r);
  }, w = (M) => {
    D(M);
    const k = () => {
      D(M, !1), window.removeEventListener("mouseup", k);
    };
    window.addEventListener("mouseup", k);
  }, U = () => {
    for (let M = 0; M < m.children.length; M++)
      m.children[M].classList.remove(r);
  }, E = (M) => {
    U(), D(M);
  }, F = () => {
    const M = b == null ? void 0 : b.firstElementChild, k = 16 + (u ? parseInt(u) : 0), C = -1 * o.scrollY + k * f;
    M && (M.style.marginTop = `${C}px`);
  }, j = () => {
    o.addEventListener("scroll", () => {
      i ? F() : n(6, b.style.marginLeft = "-" + o.scrollX + "px", b);
    });
  };
  Mu(() => {
    i && new ResizeObserver((C) => {
      for (const J of C)
        n(6, b.style.height = J.contentRect.height + 50 + "px", b);
    }).observe(o.document.body), j();
  });
  function q() {
    d = Ec(this.value), n(1, d);
  }
  const Y = () => h("start"), oe = () => E("start"), T = () => w("start");
  function P(M) {
    hn[M ? "unshift" : "push"](() => {
      y = M, n(4, y);
    });
  }
  function _() {
    l = Ec(this.value), n(2, l);
  }
  const Q = () => h("end"), S = () => E("end"), R = () => w("end");
  function N(M) {
    hn[M ? "unshift" : "push"](() => {
      m = M, n(5, m);
    });
  }
  function I(M) {
    hn[M ? "unshift" : "push"](() => {
      b = M, n(6, b);
    });
  }
  return e.$$set = (M) => {
    "vertical" in M && n(0, i = M.vertical), "currentPage" in M && n(11, a = M.currentPage), "currentZoom" in M && n(12, c = M.currentZoom), "win" in M && n(13, o = M.win);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*vertical, currentZoom, currentPage*/
    6145 && i && (f = 1 + c, u = i && a && a !== 1 ? (a - 1) * 1123 + (a - 1) * 20 + "px" : "", F()), e.$$.dirty[0] & /*vertical*/
    1 && (r = "mark" + (i ? "-vertical" : "")), e.$$.dirty[0] & /*startValue, endValue*/
    6) {
      const M = "#E8EAED", k = "white";
      n(3, s = `linear-gradient(
      to right,
      ${M} 0%,
      ${M} ${d / Tt * 100}%,
      ${k} ${d / Tt * 100}%,
      ${k} ${l / Tt * 100}%, 
      ${M} ${l / Tt * 100}%, 
      ${M} 100%)`);
    }
  }, [
    i,
    d,
    l,
    s,
    y,
    m,
    b,
    p,
    h,
    w,
    E,
    a,
    c,
    o,
    q,
    Y,
    oe,
    T,
    P,
    _,
    Q,
    S,
    R,
    N,
    I
  ];
}
let Sc = class extends zu {
  constructor(t) {
    super(), qu(
      this,
      t,
      Ih,
      Oh,
      Iu,
      {
        vertical: 0,
        currentPage: 11,
        currentZoom: 12,
        win: 13
      },
      null,
      [-1, -1]
    );
  }
};
const br = Wu, Bc = (e, t, n, r) => {
  n === "start" && (br[t ? "top" : "left"] = r), n === "end" && (br[t ? "bottom" : "right"] = r), Qf(e, br);
}, kc = (e, t) => {
  const n = document.createElement("div");
  return document.querySelector(".tox-edit-area").appendChild(n), { target: n, props: { defaultMargin: br, vertical: t, currentPage: 0, win: e.iframeElement.contentWindow } };
}, Lh = (e) => {
  new Sc(kc(e, !1)).$on("margin-changed", ({ detail: { value: r, side: i } }) => Bc(e, !1, i, r));
  const n = new Sc(kc(e, !0));
  n.$on("margin-changed", ({ detail: { value: r, side: i } }) => Bc(e, !0, i, r)), e.on("currentPageUpdate", ({ currentPage: r }) => n.$set({ currentPage: r })), e.on("zoomUpdate", ({ zoom: r }) => n.$set({ currentZoom: r }));
}, Mh = (e) => {
  setTimeout(() => {
    Lh(e);
  }, 500);
};
function jh(e) {
  let t, n, r, i, a, c, o, s, u, f, p;
  return {
    c() {
      t = rt("div"), n = rt("div"), r = rt("button"), r.textContent = "-", i = _r(), a = rt("div"), c = Xa(
        /*zoomInPercentage*/
        e[1]
      ), o = Xa(" %"), s = _r(), u = rt("button"), u.textContent = "+", Oe(r, "class", "control minus"), Oe(a, "class", "value"), Oe(u, "class", "control plus"), Oe(n, "class", "zoom-controls-container"), Oe(t, "class", "zoom-controls");
    },
    m(y, m) {
      ao(y, t, m), Pe(t, n), Pe(n, r), Pe(n, i), Pe(n, a), Pe(a, c), Pe(a, o), Pe(n, s), Pe(n, u), e[6](t), f || (p = [
        ct(r, "click", Tc(wc(
          /*click_handler*/
          e[4]
        ))),
        ct(u, "click", Tc(wc(
          /*click_handler_1*/
          e[5]
        )))
      ], f = !0);
    },
    p(y, [m]) {
      m & /*zoomInPercentage*/
      2 && wh(
        c,
        /*zoomInPercentage*/
        y[1]
      );
    },
    i: It,
    o: It,
    d(y) {
      y && ti(t), e[6](null), f = !1, xn(p);
    }
  };
}
function Ph(e, t, n) {
  let r, i, a, c, o = 0;
  const s = ju(), u = (b) => {
    b === "in" ? n(3, o = o + 0.25) : n(3, o = o - 0.25), s("zoom", { zoom: o }), f();
  }, f = () => {
    const b = i.firstElementChild;
    b.style.width = 29.7 * (1 + o) + "cm", a.style.transform = `scale(${1 + o}, 1)`, a.style.transformOrigin = "left";
  };
  Mu(() => {
    i = document.querySelector(".ruler.vertical"), a = document.querySelector(".ruler"), eh(c);
  });
  const p = () => u("out"), y = () => u("in");
  function m(b) {
    hn[b ? "unshift" : "push"](() => {
      c = b, n(0, c);
    });
  }
  return e.$$.update = () => {
    e.$$.dirty & /*currentZoom*/
    8 && n(1, r = o * 100);
  }, [
    c,
    r,
    u,
    o,
    p,
    y,
    m
  ];
}
let qh = class extends zu {
  constructor(t) {
    super(), qu(this, t, Ph, jh, Iu, {});
  }
};
const zh = (e) => {
  const t = document.createElement("div");
  document.querySelector(".tox-edit-area").appendChild(t), new qh({ target: t, props: { editor: e } }).$on("zoom", ({ detail: { zoom: r } }) => {
    Jf(e, r);
  });
}, Xh = (e) => {
  setTimeout(() => zh(e), 500);
}, Vh = `body{background-color:#f8f9fa;overflow:auto;position:relative;margin:0;padding:0}h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}h1{padding-top:.67em;padding-bottom:.67em}h3,p{padding:1em 0}.pages{padding-bottom:10px}#page-1{margin-top:3rem!important}
`, Hh = `.mark:after{content:"";height:100vh;width:1px;top:0;margin-top:18px;background-color:#4285f4;position:absolute;z-index:99}.mark-vertical:after{content:"";height:100vw;width:1px;top:0;margin-top:23px;background-color:#4285f4;position:absolute;margin-top:-100vw;margin-left:1px}.ruler{position:absolute!important;top:0!important;left:0!important;width:100%!important;background:#e8eaed!important;border-bottom:1px solid #dadce0!important}.ruler.vertical{position:absolute!important;height:100%;border-right:1px solid #dadce0!important;border-bottom:0px!important;padding:0rem!important;width:20px!important;top:0!important;left:0!important;margin-top:20px}.ruler.vertical .content{width:29.7cm;transform:rotate(90deg)!important;transform-origin:left!important;margin-left:10px!important;margin-top:16px}.ruler.vertical input[type=range]::-webkit-slider-thumb{transform:rotate(45deg)!important;margin-top:-2px!important}.ruler .content{width:21cm;margin:auto}.controls{display:flex!important;flex-direction:column!important;width:100%!important}.controls .controls-container{position:relative!important;min-height:20px!important;display:flex!important;align-items:center!important}.controls input[type=range]{appearance:none!important;height:2px!important;width:100%!important;position:absolute!important;background-color:transparent!important;pointer-events:none!important}.controls input[type=range]::-webkit-slider-thumb{outline:none !important!important;appearance:none!important;pointer-events:all!important;width:11px!important;height:11px!important;cursor:pointer!important;margin-top:6px!important;background:linear-gradient(to bottom right,#4285f4 50%,rgba(0,0,0,.5) 50%,transparent 0%)!important;transform:rotate(-135deg)!important}.controls input[type=range]::-webkit-slider-thumb:hover{background:linear-gradient(to bottom right,grey 50%,rgba(0,0,0,.5) 50%,transparent 52%)!important}.controls input[type=range].start{height:0!important;z-index:1!important;margin:0!important;width:100%!important}.controls input[type=range].start::-webkit-slider-thumb{margin-left:-4px!important}.controls input[type=range].end{width:100%!important;height:20px!important}.controls input[type=range].end::-webkit-slider-thumb{margin-left:5px!important}.ruler-points{display:flex!important;margin:-18px 0 0!important;padding:0!important;justify-content:space-between!important;width:100.5%!important;pointer-events:none!important;position:relative!important;height:18px!important}.ruler-points li{list-style:none!important;display:flex!important;align-items:center!important;font-size:12px!important}.ruler-points li:nth-child(4n+1):before{height:8px!important}.ruler-points li:before{content:""!important;background-color:#c8cad0!important;height:4px!important;width:1px!important}
`, $h = `.zoom-controls{position:absolute!important;bottom:0!important;right:0!important;margin:1rem!important}.zoom-controls-container{display:flex!important;align-items:center!important;height:40px!important;background-color:#f3f6f9!important;justify-content:center!important;border:1px solid #dadce0!important}.value{padding:0rem 1rem!important;min-width:50px!important;text-align:center!important}.control{padding:0rem 1rem!important;cursor:pointer!important;background:white!important;border:none!important;font-size:1.5rem!important;height:100%!important}.control:hover{background-color:#f5f8fc!important}
`;
var we = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zh(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var i = [null];
        i.push.apply(i, arguments);
        var a = Function.bind.apply(t, i);
        return new a();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var ft = {}, We = {}, Gh = {
  get exports() {
    return We;
  },
  set exports(e) {
    We = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(we, function() {
    var n = "1.13.6", r = typeof self == "object" && self.self === self && self || typeof we == "object" && we.global === we && we || Function("return this")() || {}, i = Array.prototype, a = Object.prototype, c = typeof Symbol < "u" ? Symbol.prototype : null, o = i.push, s = i.slice, u = a.toString, f = a.hasOwnProperty, p = typeof ArrayBuffer < "u", y = typeof DataView < "u", m = Array.isArray, b = Object.keys, d = Object.create, l = p && ArrayBuffer.isView, g = isNaN, h = isFinite, D = !{ toString: null }.propertyIsEnumerable("toString"), w = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], U = Math.pow(2, 53) - 1;
    function E(x, A) {
      return A = A == null ? x.length - 1 : +A, function() {
        for (var L = Math.max(arguments.length - A, 0), z = Array(L), K = 0; K < L; K++)
          z[K] = arguments[K + A];
        switch (A) {
          case 0:
            return x.call(this, z);
          case 1:
            return x.call(this, arguments[0], z);
          case 2:
            return x.call(this, arguments[0], arguments[1], z);
        }
        var H = Array(A + 1);
        for (K = 0; K < A; K++)
          H[K] = arguments[K];
        return H[A] = z, x.apply(this, H);
      };
    }
    function F(x) {
      var A = typeof x;
      return A === "function" || A === "object" && !!x;
    }
    function j(x) {
      return x === void 0;
    }
    function q(x) {
      return x === !0 || x === !1 || u.call(x) === "[object Boolean]";
    }
    function Y(x) {
      var A = "[object " + x + "]";
      return function(L) {
        return u.call(L) === A;
      };
    }
    var oe = Y("String"), T = Y("Number"), P = Y("Date"), _ = Y("RegExp"), Q = Y("Error"), S = Y("Symbol"), R = Y("ArrayBuffer"), N = Y("Function"), I = r.document && r.document.childNodes;
    typeof /./ != "function" && typeof Int8Array != "object" && typeof I != "function" && (N = function(x) {
      return typeof x == "function" || !1;
    });
    var M = N, k = Y("Object"), C = y && k(new DataView(new ArrayBuffer(8))), J = typeof Map < "u" && k(/* @__PURE__ */ new Map()), ce = Y("DataView"), re = C ? function(x) {
      return x != null && M(x.getInt8) && R(x.buffer);
    } : ce, le = m || Y("Array");
    function me(x, A) {
      return x != null && f.call(x, A);
    }
    var ye = Y("Arguments");
    (function() {
      ye(arguments) || (ye = function(x) {
        return me(x, "callee");
      });
    })();
    var $ = ye;
    function se(x) {
      return T(x) && g(x);
    }
    function fe(x) {
      return function() {
        return x;
      };
    }
    function be(x) {
      return function(A) {
        var L = x(A);
        return typeof L == "number" && L >= 0 && L <= U;
      };
    }
    function _e(x) {
      return function(A) {
        return A == null ? void 0 : A[x];
      };
    }
    var v = _e("byteLength"), ie = be(v), ee = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/, W = p ? function(x) {
      return l ? l(x) && !re(x) : ie(x) && ee.test(u.call(x));
    } : fe(!1), B = _e("length");
    function Z(x, A) {
      A = function(te) {
        for (var ue = {}, ve = te.length, xe = 0; xe < ve; ++xe)
          ue[te[xe]] = !0;
        return { contains: function(Be) {
          return ue[Be] === !0;
        }, push: function(Be) {
          return ue[Be] = !0, te.push(Be);
        } };
      }(A);
      var L = w.length, z = x.constructor, K = M(z) && z.prototype || a, H = "constructor";
      for (me(x, H) && !A.contains(H) && A.push(H); L--; )
        (H = w[L]) in x && x[H] !== K[H] && !A.contains(H) && A.push(H);
    }
    function ae(x) {
      if (!F(x))
        return [];
      if (b)
        return b(x);
      var A = [];
      for (var L in x)
        me(x, L) && A.push(L);
      return D && Z(x, A), A;
    }
    function de(x, A) {
      var L = ae(A), z = L.length;
      if (x == null)
        return !z;
      for (var K = Object(x), H = 0; H < z; H++) {
        var te = L[H];
        if (A[te] !== K[te] || !(te in K))
          return !1;
      }
      return !0;
    }
    function V(x) {
      return x instanceof V ? x : this instanceof V ? void (this._wrapped = x) : new V(x);
    }
    function O(x) {
      return new Uint8Array(x.buffer || x, x.byteOffset || 0, v(x));
    }
    V.VERSION = n, V.prototype.value = function() {
      return this._wrapped;
    }, V.prototype.valueOf = V.prototype.toJSON = V.prototype.value, V.prototype.toString = function() {
      return String(this._wrapped);
    };
    var X = "[object DataView]";
    function G(x, A, L, z) {
      if (x === A)
        return x !== 0 || 1 / x == 1 / A;
      if (x == null || A == null)
        return !1;
      if (x != x)
        return A != A;
      var K = typeof x;
      return (K === "function" || K === "object" || typeof A == "object") && function H(te, ue, ve, xe) {
        te instanceof V && (te = te._wrapped), ue instanceof V && (ue = ue._wrapped);
        var Be = u.call(te);
        if (Be !== u.call(ue))
          return !1;
        if (C && Be == "[object Object]" && re(te)) {
          if (!re(ue))
            return !1;
          Be = X;
        }
        switch (Be) {
          case "[object RegExp]":
          case "[object String]":
            return "" + te == "" + ue;
          case "[object Number]":
            return +te != +te ? +ue != +ue : +te == 0 ? 1 / +te == 1 / ue : +te == +ue;
          case "[object Date]":
          case "[object Boolean]":
            return +te == +ue;
          case "[object Symbol]":
            return c.valueOf.call(te) === c.valueOf.call(ue);
          case "[object ArrayBuffer]":
          case X:
            return H(O(te), O(ue), ve, xe);
        }
        var He = Be === "[object Array]";
        if (!He && W(te)) {
          if (v(te) !== v(ue))
            return !1;
          if (te.buffer === ue.buffer && te.byteOffset === ue.byteOffset)
            return !0;
          He = !0;
        }
        if (!He) {
          if (typeof te != "object" || typeof ue != "object")
            return !1;
          var Vt = te.constructor, Ht = ue.constructor;
          if (Vt !== Ht && !(M(Vt) && Vt instanceof Vt && M(Ht) && Ht instanceof Ht) && "constructor" in te && "constructor" in ue)
            return !1;
        }
        xe = xe || [];
        for (var dt = (ve = ve || []).length; dt--; )
          if (ve[dt] === te)
            return xe[dt] === ue;
        if (ve.push(te), xe.push(ue), He) {
          if ((dt = te.length) !== ue.length)
            return !1;
          for (; dt--; )
            if (!G(te[dt], ue[dt], ve, xe))
              return !1;
        } else {
          var or, bc = ae(te);
          if (dt = bc.length, ae(ue).length !== dt)
            return !1;
          for (; dt--; )
            if (or = bc[dt], !me(ue, or) || !G(te[or], ue[or], ve, xe))
              return !1;
        }
        return ve.pop(), xe.pop(), !0;
      }(x, A, L, z);
    }
    function ne(x) {
      if (!F(x))
        return [];
      var A = [];
      for (var L in x)
        A.push(L);
      return D && Z(x, A), A;
    }
    function pe(x) {
      var A = B(x);
      return function(L) {
        if (L == null)
          return !1;
        var z = ne(L);
        if (B(z))
          return !1;
        for (var K = 0; K < A; K++)
          if (!M(L[x[K]]))
            return !1;
        return x !== Ee || !M(L[ge]);
      };
    }
    var ge = "forEach", Ue = "has", De = ["clear", "delete"], Te = ["get", Ue, "set"], Se = De.concat(ge, Te), Ee = De.concat(Te), je = ["add"].concat(De, ge, Ue), Pt = J ? pe(Se) : Y("Map"), tt = J ? pe(Ee) : Y("WeakMap"), tr = J ? pe(je) : Y("Set"), Bi = Y("WeakSet");
    function Bt(x) {
      for (var A = ae(x), L = A.length, z = Array(L), K = 0; K < L; K++)
        z[K] = x[A[K]];
      return z;
    }
    function nr(x) {
      for (var A = {}, L = ae(x), z = 0, K = L.length; z < K; z++)
        A[x[L[z]]] = L[z];
      return A;
    }
    function tn(x) {
      var A = [];
      for (var L in x)
        M(x[L]) && A.push(L);
      return A.sort();
    }
    function Dt(x, A) {
      return function(L) {
        var z = arguments.length;
        if (A && (L = Object(L)), z < 2 || L == null)
          return L;
        for (var K = 1; K < z; K++)
          for (var H = arguments[K], te = x(H), ue = te.length, ve = 0; ve < ue; ve++) {
            var xe = te[ve];
            A && L[xe] !== void 0 || (L[xe] = H[xe]);
          }
        return L;
      };
    }
    var qt = Dt(ne), rr = Dt(ae), qo = Dt(ne, !0);
    function zo(x) {
      if (!F(x))
        return {};
      if (d)
        return d(x);
      var A = function() {
      };
      A.prototype = x;
      var L = new A();
      return A.prototype = null, L;
    }
    function Xo(x) {
      return le(x) ? x : [x];
    }
    function En(x) {
      return V.toPath(x);
    }
    function ki(x, A) {
      for (var L = A.length, z = 0; z < L; z++) {
        if (x == null)
          return;
        x = x[A[z]];
      }
      return L ? x : void 0;
    }
    function Vo(x, A, L) {
      var z = ki(x, En(A));
      return j(z) ? L : z;
    }
    function Wi(x) {
      return x;
    }
    function An(x) {
      return x = rr({}, x), function(A) {
        return de(A, x);
      };
    }
    function Ni(x) {
      return x = En(x), function(A) {
        return ki(A, x);
      };
    }
    function Cn(x, A, L) {
      if (A === void 0)
        return x;
      switch (L ?? 3) {
        case 1:
          return function(z) {
            return x.call(A, z);
          };
        case 3:
          return function(z, K, H) {
            return x.call(A, z, K, H);
          };
        case 4:
          return function(z, K, H, te) {
            return x.call(A, z, K, H, te);
          };
      }
      return function() {
        return x.apply(A, arguments);
      };
    }
    function Ho(x, A, L) {
      return x == null ? Wi : M(x) ? Cn(x, A, L) : F(x) && !le(x) ? An(x) : Ni(x);
    }
    function Ri(x, A) {
      return Ho(x, A, 1 / 0);
    }
    function Ze(x, A, L) {
      return V.iteratee !== Ri ? V.iteratee(x, A) : Ho(x, A, L);
    }
    function $o() {
    }
    function Oi(x, A) {
      return A == null && (A = x, x = 0), x + Math.floor(Math.random() * (A - x + 1));
    }
    V.toPath = Xo, V.iteratee = Ri;
    var Fn = Date.now || function() {
      return new Date().getTime();
    };
    function Zo(x) {
      var A = function(H) {
        return x[H];
      }, L = "(?:" + ae(x).join("|") + ")", z = RegExp(L), K = RegExp(L, "g");
      return function(H) {
        return H = H == null ? "" : "" + H, z.test(H) ? H.replace(K, A) : H;
      };
    }
    var Go = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, Al = Zo(Go), Cl = Zo(nr(Go)), Fl = V.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }, Ii = /(.)^/, Sl = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" }, Bl = /\\|'|\r|\n|\u2028|\u2029/g;
    function kl(x) {
      return "\\" + Sl[x];
    }
    var Wl = /^\s*(\w|\$)+\s*$/, Nl = 0;
    function Yo(x, A, L, z, K) {
      if (!(z instanceof A))
        return x.apply(L, K);
      var H = zo(x.prototype), te = x.apply(H, K);
      return F(te) ? te : H;
    }
    var nn = E(function(x, A) {
      var L = nn.placeholder, z = function() {
        for (var K = 0, H = A.length, te = Array(H), ue = 0; ue < H; ue++)
          te[ue] = A[ue] === L ? arguments[K++] : A[ue];
        for (; K < arguments.length; )
          te.push(arguments[K++]);
        return Yo(x, z, this, this, te);
      };
      return z;
    });
    nn.placeholder = V;
    var Ko = E(function(x, A, L) {
      if (!M(x))
        throw new TypeError("Bind must be called on a function");
      var z = E(function(K) {
        return Yo(x, z, A, this, L.concat(K));
      });
      return z;
    }), nt = be(B);
    function zt(x, A, L, z) {
      if (z = z || [], A || A === 0) {
        if (A <= 0)
          return z.concat(x);
      } else
        A = 1 / 0;
      for (var K = z.length, H = 0, te = B(x); H < te; H++) {
        var ue = x[H];
        if (nt(ue) && (le(ue) || $(ue)))
          if (A > 1)
            zt(ue, A - 1, L, z), K = z.length;
          else
            for (var ve = 0, xe = ue.length; ve < xe; )
              z[K++] = ue[ve++];
        else
          L || (z[K++] = ue);
      }
      return z;
    }
    var Rl = E(function(x, A) {
      var L = (A = zt(A, !1, !1)).length;
      if (L < 1)
        throw new Error("bindAll must be passed function names");
      for (; L--; ) {
        var z = A[L];
        x[z] = Ko(x[z], x);
      }
      return x;
    }), Qo = E(function(x, A, L) {
      return setTimeout(function() {
        return x.apply(null, L);
      }, A);
    }), Ol = nn(Qo, V, 1);
    function Li(x) {
      return function() {
        return !x.apply(this, arguments);
      };
    }
    function Jo(x, A) {
      var L;
      return function() {
        return --x > 0 && (L = A.apply(this, arguments)), x <= 1 && (A = null), L;
      };
    }
    var Il = nn(Jo, 2);
    function ec(x, A, L) {
      A = Ze(A, L);
      for (var z, K = ae(x), H = 0, te = K.length; H < te; H++)
        if (A(x[z = K[H]], z, x))
          return z;
    }
    function tc(x) {
      return function(A, L, z) {
        L = Ze(L, z);
        for (var K = B(A), H = x > 0 ? 0 : K - 1; H >= 0 && H < K; H += x)
          if (L(A[H], H, A))
            return H;
        return -1;
      };
    }
    var Mi = tc(1), nc = tc(-1);
    function rc(x, A, L, z) {
      for (var K = (L = Ze(L, z, 1))(A), H = 0, te = B(x); H < te; ) {
        var ue = Math.floor((H + te) / 2);
        L(x[ue]) < K ? H = ue + 1 : te = ue;
      }
      return H;
    }
    function ic(x, A, L) {
      return function(z, K, H) {
        var te = 0, ue = B(z);
        if (typeof H == "number")
          x > 0 ? te = H >= 0 ? H : Math.max(H + ue, te) : ue = H >= 0 ? Math.min(H + 1, ue) : H + ue + 1;
        else if (L && H && ue)
          return z[H = L(z, K)] === K ? H : -1;
        if (K != K)
          return (H = A(s.call(z, te, ue), se)) >= 0 ? H + te : -1;
        for (H = x > 0 ? te : ue - 1; H >= 0 && H < ue; H += x)
          if (z[H] === K)
            return H;
        return -1;
      };
    }
    var ac = ic(1, Mi, rc), Ll = ic(-1, nc);
    function ji(x, A, L) {
      var z = (nt(x) ? Mi : ec)(x, A, L);
      if (z !== void 0 && z !== -1)
        return x[z];
    }
    function vt(x, A, L) {
      var z, K;
      if (A = Cn(A, L), nt(x))
        for (z = 0, K = x.length; z < K; z++)
          A(x[z], z, x);
      else {
        var H = ae(x);
        for (z = 0, K = H.length; z < K; z++)
          A(x[H[z]], H[z], x);
      }
      return x;
    }
    function Xt(x, A, L) {
      A = Ze(A, L);
      for (var z = !nt(x) && ae(x), K = (z || x).length, H = Array(K), te = 0; te < K; te++) {
        var ue = z ? z[te] : te;
        H[te] = A(x[ue], ue, x);
      }
      return H;
    }
    function oc(x) {
      var A = function(L, z, K, H) {
        var te = !nt(L) && ae(L), ue = (te || L).length, ve = x > 0 ? 0 : ue - 1;
        for (H || (K = L[te ? te[ve] : ve], ve += x); ve >= 0 && ve < ue; ve += x) {
          var xe = te ? te[ve] : ve;
          K = z(K, L[xe], xe, L);
        }
        return K;
      };
      return function(L, z, K, H) {
        var te = arguments.length >= 3;
        return A(L, Cn(z, H, 4), K, te);
      };
    }
    var Pi = oc(1), cc = oc(-1);
    function rn(x, A, L) {
      var z = [];
      return A = Ze(A, L), vt(x, function(K, H, te) {
        A(K, H, te) && z.push(K);
      }), z;
    }
    function sc(x, A, L) {
      A = Ze(A, L);
      for (var z = !nt(x) && ae(x), K = (z || x).length, H = 0; H < K; H++) {
        var te = z ? z[H] : H;
        if (!A(x[te], te, x))
          return !1;
      }
      return !0;
    }
    function uc(x, A, L) {
      A = Ze(A, L);
      for (var z = !nt(x) && ae(x), K = (z || x).length, H = 0; H < K; H++) {
        var te = z ? z[H] : H;
        if (A(x[te], te, x))
          return !0;
      }
      return !1;
    }
    function xt(x, A, L, z) {
      return nt(x) || (x = Bt(x)), (typeof L != "number" || z) && (L = 0), ac(x, A, L) >= 0;
    }
    var Ml = E(function(x, A, L) {
      var z, K;
      return M(A) ? K = A : (A = En(A), z = A.slice(0, -1), A = A[A.length - 1]), Xt(x, function(H) {
        var te = K;
        if (!te) {
          if (z && z.length && (H = ki(H, z)), H == null)
            return;
          te = H[A];
        }
        return te == null ? te : te.apply(H, L);
      });
    });
    function qi(x, A) {
      return Xt(x, Ni(A));
    }
    function dc(x, A, L) {
      var z, K, H = -1 / 0, te = -1 / 0;
      if (A == null || typeof A == "number" && typeof x[0] != "object" && x != null)
        for (var ue = 0, ve = (x = nt(x) ? x : Bt(x)).length; ue < ve; ue++)
          (z = x[ue]) != null && z > H && (H = z);
      else
        A = Ze(A, L), vt(x, function(xe, Be, He) {
          ((K = A(xe, Be, He)) > te || K === -1 / 0 && H === -1 / 0) && (H = xe, te = K);
        });
      return H;
    }
    var jl = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
    function lc(x) {
      return x ? le(x) ? s.call(x) : oe(x) ? x.match(jl) : nt(x) ? Xt(x, Wi) : Bt(x) : [];
    }
    function fc(x, A, L) {
      if (A == null || L)
        return nt(x) || (x = Bt(x)), x[Oi(x.length - 1)];
      var z = lc(x), K = B(z);
      A = Math.max(Math.min(A, K), 0);
      for (var H = K - 1, te = 0; te < A; te++) {
        var ue = Oi(te, H), ve = z[te];
        z[te] = z[ue], z[ue] = ve;
      }
      return z.slice(0, A);
    }
    function ir(x, A) {
      return function(L, z, K) {
        var H = A ? [[], []] : {};
        return z = Ze(z, K), vt(L, function(te, ue) {
          var ve = z(te, ue, L);
          x(H, te, ve);
        }), H;
      };
    }
    var Pl = ir(function(x, A, L) {
      me(x, L) ? x[L].push(A) : x[L] = [A];
    }), ql = ir(function(x, A, L) {
      x[L] = A;
    }), zl = ir(function(x, A, L) {
      me(x, L) ? x[L]++ : x[L] = 1;
    }), Xl = ir(function(x, A, L) {
      x[L ? 0 : 1].push(A);
    }, !0);
    function Vl(x, A, L) {
      return A in L;
    }
    var hc = E(function(x, A) {
      var L = {}, z = A[0];
      if (x == null)
        return L;
      M(z) ? (A.length > 1 && (z = Cn(z, A[1])), A = ne(x)) : (z = Vl, A = zt(A, !1, !1), x = Object(x));
      for (var K = 0, H = A.length; K < H; K++) {
        var te = A[K], ue = x[te];
        z(ue, te, x) && (L[te] = ue);
      }
      return L;
    }), Hl = E(function(x, A) {
      var L, z = A[0];
      return M(z) ? (z = Li(z), A.length > 1 && (L = A[1])) : (A = Xt(zt(A, !1, !1), String), z = function(K, H) {
        return !xt(A, H);
      }), hc(x, z, L);
    });
    function pc(x, A, L) {
      return s.call(x, 0, Math.max(0, x.length - (A == null || L ? 1 : A)));
    }
    function zi(x, A, L) {
      return x == null || x.length < 1 ? A == null || L ? void 0 : [] : A == null || L ? x[0] : pc(x, x.length - A);
    }
    function ar(x, A, L) {
      return s.call(x, A == null || L ? 1 : A);
    }
    var gc = E(function(x, A) {
      return A = zt(A, !0, !0), rn(x, function(L) {
        return !xt(A, L);
      });
    }), $l = E(function(x, A) {
      return gc(x, A);
    });
    function Xi(x, A, L, z) {
      q(A) || (z = L, L = A, A = !1), L != null && (L = Ze(L, z));
      for (var K = [], H = [], te = 0, ue = B(x); te < ue; te++) {
        var ve = x[te], xe = L ? L(ve, te, x) : ve;
        A && !L ? (te && H === xe || K.push(ve), H = xe) : L ? xt(H, xe) || (H.push(xe), K.push(ve)) : xt(K, ve) || K.push(ve);
      }
      return K;
    }
    var Zl = E(function(x) {
      return Xi(zt(x, !0, !0));
    });
    function Vi(x) {
      for (var A = x && dc(x, B).length || 0, L = Array(A), z = 0; z < A; z++)
        L[z] = qi(x, z);
      return L;
    }
    var Gl = E(Vi);
    function Hi(x, A) {
      return x._chain ? V(A).chain() : A;
    }
    function mc(x) {
      return vt(tn(x), function(A) {
        var L = V[A] = x[A];
        V.prototype[A] = function() {
          var z = [this._wrapped];
          return o.apply(z, arguments), Hi(this, L.apply(V, z));
        };
      }), V;
    }
    vt(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(x) {
      var A = i[x];
      V.prototype[x] = function() {
        var L = this._wrapped;
        return L != null && (A.apply(L, arguments), x !== "shift" && x !== "splice" || L.length !== 0 || delete L[0]), Hi(this, L);
      };
    }), vt(["concat", "join", "slice"], function(x) {
      var A = i[x];
      V.prototype[x] = function() {
        var L = this._wrapped;
        return L != null && (L = A.apply(L, arguments)), Hi(this, L);
      };
    });
    var $i = mc({ __proto__: null, VERSION: n, restArguments: E, isObject: F, isNull: function(x) {
      return x === null;
    }, isUndefined: j, isBoolean: q, isElement: function(x) {
      return !(!x || x.nodeType !== 1);
    }, isString: oe, isNumber: T, isDate: P, isRegExp: _, isError: Q, isSymbol: S, isArrayBuffer: R, isDataView: re, isArray: le, isFunction: M, isArguments: $, isFinite: function(x) {
      return !S(x) && h(x) && !isNaN(parseFloat(x));
    }, isNaN: se, isTypedArray: W, isEmpty: function(x) {
      if (x == null)
        return !0;
      var A = B(x);
      return typeof A == "number" && (le(x) || oe(x) || $(x)) ? A === 0 : B(ae(x)) === 0;
    }, isMatch: de, isEqual: function(x, A) {
      return G(x, A);
    }, isMap: Pt, isWeakMap: tt, isSet: tr, isWeakSet: Bi, keys: ae, allKeys: ne, values: Bt, pairs: function(x) {
      for (var A = ae(x), L = A.length, z = Array(L), K = 0; K < L; K++)
        z[K] = [A[K], x[A[K]]];
      return z;
    }, invert: nr, functions: tn, methods: tn, extend: qt, extendOwn: rr, assign: rr, defaults: qo, create: function(x, A) {
      var L = zo(x);
      return A && rr(L, A), L;
    }, clone: function(x) {
      return F(x) ? le(x) ? x.slice() : qt({}, x) : x;
    }, tap: function(x, A) {
      return A(x), x;
    }, get: Vo, has: function(x, A) {
      for (var L = (A = En(A)).length, z = 0; z < L; z++) {
        var K = A[z];
        if (!me(x, K))
          return !1;
        x = x[K];
      }
      return !!L;
    }, mapObject: function(x, A, L) {
      A = Ze(A, L);
      for (var z = ae(x), K = z.length, H = {}, te = 0; te < K; te++) {
        var ue = z[te];
        H[ue] = A(x[ue], ue, x);
      }
      return H;
    }, identity: Wi, constant: fe, noop: $o, toPath: Xo, property: Ni, propertyOf: function(x) {
      return x == null ? $o : function(A) {
        return Vo(x, A);
      };
    }, matcher: An, matches: An, times: function(x, A, L) {
      var z = Array(Math.max(0, x));
      A = Cn(A, L, 1);
      for (var K = 0; K < x; K++)
        z[K] = A(K);
      return z;
    }, random: Oi, now: Fn, escape: Al, unescape: Cl, templateSettings: Fl, template: function(x, A, L) {
      !A && L && (A = L), A = qo({}, A, V.templateSettings);
      var z = RegExp([(A.escape || Ii).source, (A.interpolate || Ii).source, (A.evaluate || Ii).source].join("|") + "|$", "g"), K = 0, H = "__p+='";
      x.replace(z, function(xe, Be, He, Vt, Ht) {
        return H += x.slice(K, Ht).replace(Bl, kl), K = Ht + xe.length, Be ? H += `'+
((__t=(` + Be + `))==null?'':_.escape(__t))+
'` : He ? H += `'+
((__t=(` + He + `))==null?'':__t)+
'` : Vt && (H += `';
` + Vt + `
__p+='`), xe;
      }), H += `';
`;
      var te, ue = A.variable;
      if (ue) {
        if (!Wl.test(ue))
          throw new Error("variable is not a bare identifier: " + ue);
      } else
        H = `with(obj||{}){
` + H + `}
`, ue = "obj";
      H = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + H + `return __p;
`;
      try {
        te = new Function(ue, "_", H);
      } catch (xe) {
        throw xe.source = H, xe;
      }
      var ve = function(xe) {
        return te.call(this, xe, V);
      };
      return ve.source = "function(" + ue + `){
` + H + "}", ve;
    }, result: function(x, A, L) {
      var z = (A = En(A)).length;
      if (!z)
        return M(L) ? L.call(x) : L;
      for (var K = 0; K < z; K++) {
        var H = x == null ? void 0 : x[A[K]];
        H === void 0 && (H = L, K = z), x = M(H) ? H.call(x) : H;
      }
      return x;
    }, uniqueId: function(x) {
      var A = ++Nl + "";
      return x ? x + A : A;
    }, chain: function(x) {
      var A = V(x);
      return A._chain = !0, A;
    }, iteratee: Ri, partial: nn, bind: Ko, bindAll: Rl, memoize: function(x, A) {
      var L = function(z) {
        var K = L.cache, H = "" + (A ? A.apply(this, arguments) : z);
        return me(K, H) || (K[H] = x.apply(this, arguments)), K[H];
      };
      return L.cache = {}, L;
    }, delay: Qo, defer: Ol, throttle: function(x, A, L) {
      var z, K, H, te, ue = 0;
      L || (L = {});
      var ve = function() {
        ue = L.leading === !1 ? 0 : Fn(), z = null, te = x.apply(K, H), z || (K = H = null);
      }, xe = function() {
        var Be = Fn();
        ue || L.leading !== !1 || (ue = Be);
        var He = A - (Be - ue);
        return K = this, H = arguments, He <= 0 || He > A ? (z && (clearTimeout(z), z = null), ue = Be, te = x.apply(K, H), z || (K = H = null)) : z || L.trailing === !1 || (z = setTimeout(ve, He)), te;
      };
      return xe.cancel = function() {
        clearTimeout(z), ue = 0, z = K = H = null;
      }, xe;
    }, debounce: function(x, A, L) {
      var z, K, H, te, ue, ve = function() {
        var Be = Fn() - K;
        A > Be ? z = setTimeout(ve, A - Be) : (z = null, L || (te = x.apply(ue, H)), z || (H = ue = null));
      }, xe = E(function(Be) {
        return ue = this, H = Be, K = Fn(), z || (z = setTimeout(ve, A), L && (te = x.apply(ue, H))), te;
      });
      return xe.cancel = function() {
        clearTimeout(z), z = H = ue = null;
      }, xe;
    }, wrap: function(x, A) {
      return nn(A, x);
    }, negate: Li, compose: function() {
      var x = arguments, A = x.length - 1;
      return function() {
        for (var L = A, z = x[A].apply(this, arguments); L--; )
          z = x[L].call(this, z);
        return z;
      };
    }, after: function(x, A) {
      return function() {
        if (--x < 1)
          return A.apply(this, arguments);
      };
    }, before: Jo, once: Il, findKey: ec, findIndex: Mi, findLastIndex: nc, sortedIndex: rc, indexOf: ac, lastIndexOf: Ll, find: ji, detect: ji, findWhere: function(x, A) {
      return ji(x, An(A));
    }, each: vt, forEach: vt, map: Xt, collect: Xt, reduce: Pi, foldl: Pi, inject: Pi, reduceRight: cc, foldr: cc, filter: rn, select: rn, reject: function(x, A, L) {
      return rn(x, Li(Ze(A)), L);
    }, every: sc, all: sc, some: uc, any: uc, contains: xt, includes: xt, include: xt, invoke: Ml, pluck: qi, where: function(x, A) {
      return rn(x, An(A));
    }, max: dc, min: function(x, A, L) {
      var z, K, H = 1 / 0, te = 1 / 0;
      if (A == null || typeof A == "number" && typeof x[0] != "object" && x != null)
        for (var ue = 0, ve = (x = nt(x) ? x : Bt(x)).length; ue < ve; ue++)
          (z = x[ue]) != null && z < H && (H = z);
      else
        A = Ze(A, L), vt(x, function(xe, Be, He) {
          ((K = A(xe, Be, He)) < te || K === 1 / 0 && H === 1 / 0) && (H = xe, te = K);
        });
      return H;
    }, shuffle: function(x) {
      return fc(x, 1 / 0);
    }, sample: fc, sortBy: function(x, A, L) {
      var z = 0;
      return A = Ze(A, L), qi(Xt(x, function(K, H, te) {
        return { value: K, index: z++, criteria: A(K, H, te) };
      }).sort(function(K, H) {
        var te = K.criteria, ue = H.criteria;
        if (te !== ue) {
          if (te > ue || te === void 0)
            return 1;
          if (te < ue || ue === void 0)
            return -1;
        }
        return K.index - H.index;
      }), "value");
    }, groupBy: Pl, indexBy: ql, countBy: zl, partition: Xl, toArray: lc, size: function(x) {
      return x == null ? 0 : nt(x) ? x.length : ae(x).length;
    }, pick: hc, omit: Hl, first: zi, head: zi, take: zi, initial: pc, last: function(x, A, L) {
      return x == null || x.length < 1 ? A == null || L ? void 0 : [] : A == null || L ? x[x.length - 1] : ar(x, Math.max(0, x.length - A));
    }, rest: ar, tail: ar, drop: ar, compact: function(x) {
      return rn(x, Boolean);
    }, flatten: function(x, A) {
      return zt(x, A, !1);
    }, without: $l, uniq: Xi, unique: Xi, union: Zl, intersection: function(x) {
      for (var A = [], L = arguments.length, z = 0, K = B(x); z < K; z++) {
        var H = x[z];
        if (!xt(A, H)) {
          var te;
          for (te = 1; te < L && xt(arguments[te], H); te++)
            ;
          te === L && A.push(H);
        }
      }
      return A;
    }, difference: gc, unzip: Vi, transpose: Vi, zip: Gl, object: function(x, A) {
      for (var L = {}, z = 0, K = B(x); z < K; z++)
        A ? L[x[z]] = A[z] : L[x[z][0]] = x[z][1];
      return L;
    }, range: function(x, A, L) {
      A == null && (A = x || 0, x = 0), L || (L = A < x ? -1 : 1);
      for (var z = Math.max(Math.ceil((A - x) / L), 0), K = Array(z), H = 0; H < z; H++, x += L)
        K[H] = x;
      return K;
    }, chunk: function(x, A) {
      if (A == null || A < 1)
        return [];
      for (var L = [], z = 0, K = x.length; z < K; )
        L.push(s.call(x, z, z += A));
      return L;
    }, mixin: mc, default: V });
    return $i._ = $i, $i;
  });
})(Gh);
var oo = {};
const Yh = {}, Kh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yh
}, Symbol.toStringTag, { value: "Module" })), Xu = /* @__PURE__ */ Zh(Kh);
var Le = {}, $a = {}, Qh = {
  get exports() {
    return $a;
  },
  set exports(e) {
    $a = e;
  }
}, Ur = {}, Wc = {
  get exports() {
    return Ur;
  },
  set exports(e) {
    Ur = e;
  }
}, Nc;
function _n() {
  if (Nc)
    return Ur;
  Nc = 1;
  var e = function() {
    return this === void 0;
  }();
  if (e)
    Wc.exports = {
      freeze: Object.freeze,
      defineProperty: Object.defineProperty,
      getDescriptor: Object.getOwnPropertyDescriptor,
      keys: Object.keys,
      names: Object.getOwnPropertyNames,
      getPrototypeOf: Object.getPrototypeOf,
      isArray: Array.isArray,
      isES5: e,
      propertyIsWritable: function(f, p) {
        var y = Object.getOwnPropertyDescriptor(f, p);
        return !!(!y || y.writable || y.set);
      }
    };
  else {
    var t = {}.hasOwnProperty, n = {}.toString, r = {}.constructor.prototype, i = function(f) {
      var p = [];
      for (var y in f)
        t.call(f, y) && p.push(y);
      return p;
    }, a = function(f, p) {
      return { value: f[p] };
    }, c = function(f, p, y) {
      return f[p] = y.value, f;
    }, o = function(f) {
      return f;
    }, s = function(f) {
      try {
        return Object(f).constructor.prototype;
      } catch {
        return r;
      }
    }, u = function(f) {
      try {
        return n.call(f) === "[object Array]";
      } catch {
        return !1;
      }
    };
    Wc.exports = {
      isArray: u,
      keys: i,
      names: i,
      defineProperty: c,
      getDescriptor: a,
      freeze: o,
      getPrototypeOf: s,
      isES5: e,
      propertyIsWritable: function() {
        return !0;
      }
    };
  }
  return Ur;
}
var Ki, Rc;
function ke() {
  if (Rc)
    return Ki;
  Rc = 1;
  var e = _n(), t = typeof navigator > "u", n = { e: {} }, r, i = typeof self < "u" ? self : typeof window < "u" ? window : typeof we < "u" || we !== void 0 ? we : null;
  function a() {
    try {
      var C = r;
      return r = null, C.apply(this, arguments);
    } catch (J) {
      return n.e = J, n;
    }
  }
  function c(C) {
    return r = C, a;
  }
  var o = function(C, J) {
    var ce = {}.hasOwnProperty;
    function re() {
      this.constructor = C, this.constructor$ = J;
      for (var le in J.prototype)
        ce.call(J.prototype, le) && le.charAt(le.length - 1) !== "$" && (this[le + "$"] = J.prototype[le]);
    }
    return re.prototype = J.prototype, C.prototype = new re(), C.prototype;
  };
  function s(C) {
    return C == null || C === !0 || C === !1 || typeof C == "string" || typeof C == "number";
  }
  function u(C) {
    return typeof C == "function" || typeof C == "object" && C !== null;
  }
  function f(C) {
    return s(C) ? new Error(E(C)) : C;
  }
  function p(C, J) {
    var ce = C.length, re = new Array(ce + 1), le;
    for (le = 0; le < ce; ++le)
      re[le] = C[le];
    return re[le] = J, re;
  }
  function y(C, J, ce) {
    if (e.isES5) {
      var re = Object.getOwnPropertyDescriptor(C, J);
      if (re != null)
        return re.get == null && re.set == null ? re.value : ce;
    } else
      return {}.hasOwnProperty.call(C, J) ? C[J] : void 0;
  }
  function m(C, J, ce) {
    if (s(C))
      return C;
    var re = {
      value: ce,
      configurable: !0,
      enumerable: !1,
      writable: !0
    };
    return e.defineProperty(C, J, re), C;
  }
  function b(C) {
    throw C;
  }
  var d = function() {
    var C = [
      Array.prototype,
      Object.prototype,
      Function.prototype
    ], J = function(le) {
      for (var me = 0; me < C.length; ++me)
        if (C[me] === le)
          return !0;
      return !1;
    };
    if (e.isES5) {
      var ce = Object.getOwnPropertyNames;
      return function(le) {
        for (var me = [], ye = /* @__PURE__ */ Object.create(null); le != null && !J(le); ) {
          var $;
          try {
            $ = ce(le);
          } catch {
            return me;
          }
          for (var se = 0; se < $.length; ++se) {
            var fe = $[se];
            if (!ye[fe]) {
              ye[fe] = !0;
              var be = Object.getOwnPropertyDescriptor(le, fe);
              be != null && be.get == null && be.set == null && me.push(fe);
            }
          }
          le = e.getPrototypeOf(le);
        }
        return me;
      };
    } else {
      var re = {}.hasOwnProperty;
      return function(le) {
        if (J(le))
          return [];
        var me = [];
        e:
          for (var ye in le)
            if (re.call(le, ye))
              me.push(ye);
            else {
              for (var $ = 0; $ < C.length; ++$)
                if (re.call(C[$], ye))
                  continue e;
              me.push(ye);
            }
        return me;
      };
    }
  }(), l = /this\s*\.\s*\S+\s*=/;
  function g(C) {
    try {
      if (typeof C == "function") {
        var J = e.names(C.prototype), ce = e.isES5 && J.length > 1, re = J.length > 0 && !(J.length === 1 && J[0] === "constructor"), le = l.test(C + "") && e.names(C).length > 0;
        if (ce || re || le)
          return !0;
      }
      return !1;
    } catch {
      return !1;
    }
  }
  function h(C) {
    return C;
  }
  var D = /^[a-z$_][a-z$_0-9]*$/i;
  function w(C) {
    return D.test(C);
  }
  function U(C, J, ce) {
    for (var re = new Array(C), le = 0; le < C; ++le)
      re[le] = J + le + ce;
    return re;
  }
  function E(C) {
    try {
      return C + "";
    } catch {
      return "[no string representation]";
    }
  }
  function F(C) {
    return C !== null && typeof C == "object" && typeof C.message == "string" && typeof C.name == "string";
  }
  function j(C) {
    try {
      m(C, "isOperational", !0);
    } catch {
    }
  }
  function q(C) {
    return C == null ? !1 : C instanceof Error.__BluebirdErrorTypes__.OperationalError || C.isOperational === !0;
  }
  function Y(C) {
    return F(C) && e.propertyIsWritable(C, "stack");
  }
  var oe = function() {
    return "stack" in new Error() ? function(C) {
      return Y(C) ? C : new Error(E(C));
    } : function(C) {
      if (Y(C))
        return C;
      try {
        throw new Error(E(C));
      } catch (J) {
        return J;
      }
    };
  }();
  function T(C) {
    return {}.toString.call(C);
  }
  function P(C, J, ce) {
    for (var re = e.names(C), le = 0; le < re.length; ++le) {
      var me = re[le];
      if (ce(me))
        try {
          e.defineProperty(J, me, e.getDescriptor(C, me));
        } catch {
        }
    }
  }
  var _ = function(C) {
    return e.isArray(C) ? C : null;
  };
  if (typeof Symbol < "u" && Symbol.iterator) {
    var Q = typeof Array.from == "function" ? function(C) {
      return Array.from(C);
    } : function(C) {
      for (var J = [], ce = C[Symbol.iterator](), re; !(re = ce.next()).done; )
        J.push(re.value);
      return J;
    };
    _ = function(C) {
      return e.isArray(C) ? C : C != null && typeof C[Symbol.iterator] == "function" ? Q(C) : null;
    };
  }
  var S = typeof process < "u" && T(process).toLowerCase() === "[object process]", R = typeof process < "u" && typeof process.env < "u";
  function N(C) {
    return R ? process.env[C] : void 0;
  }
  function I() {
    if (typeof Promise == "function")
      try {
        var C = new Promise(function() {
        });
        if ({}.toString.call(C) === "[object Promise]")
          return Promise;
      } catch {
      }
  }
  function M(C, J) {
    return C.bind(J);
  }
  var k = {
    isClass: g,
    isIdentifier: w,
    inheritedDataKeys: d,
    getDataPropertyOrDefault: y,
    thrower: b,
    isArray: e.isArray,
    asArray: _,
    notEnumerableProp: m,
    isPrimitive: s,
    isObject: u,
    isError: F,
    canEvaluate: t,
    errorObj: n,
    tryCatch: c,
    inherits: o,
    withAppended: p,
    maybeWrapAsError: f,
    toFastProperties: h,
    filledRange: U,
    toString: E,
    canAttachTrace: Y,
    ensureErrorObject: oe,
    originatesFromRejection: q,
    markAsOriginatingFromRejection: j,
    classString: T,
    copyDescriptors: P,
    hasDevTools: typeof chrome < "u" && chrome && typeof chrome.loadTimes == "function",
    isNode: S,
    hasEnvVariables: R,
    env: N,
    global: i,
    getNativePromise: I,
    domainBind: M
  };
  k.isRecentNode = k.isNode && function() {
    var C = process.versions.node.split(".").map(Number);
    return C[0] === 0 && C[1] > 10 || C[0] > 0;
  }(), k.isNode && k.toFastProperties(process);
  try {
    throw new Error();
  } catch (C) {
    k.lastLineError = C;
  }
  return Ki = k, Ki;
}
var Ln = {}, Jh = {
  get exports() {
    return Ln;
  },
  set exports(e) {
    Ln = e;
  }
}, Qi, Oc;
function ep() {
  if (Oc)
    return Qi;
  Oc = 1;
  var e = ke(), t, n = function() {
    throw new Error(`No async scheduler available

    See http://goo.gl/MqrFmX
`);
  }, r = e.getNativePromise();
  if (e.isNode && typeof MutationObserver > "u") {
    var i = we.setImmediate, a = process.nextTick;
    t = e.isRecentNode ? function(o) {
      i.call(we, o);
    } : function(o) {
      a.call(process, o);
    };
  } else if (typeof r == "function" && typeof r.resolve == "function") {
    var c = r.resolve();
    t = function(o) {
      c.then(o);
    };
  } else
    typeof MutationObserver < "u" && !(typeof window < "u" && window.navigator && (window.navigator.standalone || window.cordova)) ? t = function() {
      var o = document.createElement("div"), s = { attributes: !0 }, u = !1, f = document.createElement("div"), p = new MutationObserver(function() {
        o.classList.toggle("foo"), u = !1;
      });
      p.observe(f, s);
      var y = function() {
        u || (u = !0, f.classList.toggle("foo"));
      };
      return function(b) {
        var d = new MutationObserver(function() {
          d.disconnect(), b();
        });
        d.observe(o, s), y();
      };
    }() : typeof setImmediate < "u" ? t = function(o) {
      setImmediate(o);
    } : typeof setTimeout < "u" ? t = function(o) {
      setTimeout(o, 0);
    } : t = n;
  return Qi = t, Qi;
}
var Ji, Ic;
function tp() {
  if (Ic)
    return Ji;
  Ic = 1;
  function e(n, r, i, a, c) {
    for (var o = 0; o < c; ++o)
      i[o + a] = n[o + r], n[o + r] = void 0;
  }
  function t(n) {
    this._capacity = n, this._length = 0, this._front = 0;
  }
  return t.prototype._willBeOverCapacity = function(n) {
    return this._capacity < n;
  }, t.prototype._pushOne = function(n) {
    var r = this.length();
    this._checkCapacity(r + 1);
    var i = this._front + r & this._capacity - 1;
    this[i] = n, this._length = r + 1;
  }, t.prototype.push = function(n, r, i) {
    var a = this.length() + 3;
    if (this._willBeOverCapacity(a)) {
      this._pushOne(n), this._pushOne(r), this._pushOne(i);
      return;
    }
    var c = this._front + a - 3;
    this._checkCapacity(a);
    var o = this._capacity - 1;
    this[c + 0 & o] = n, this[c + 1 & o] = r, this[c + 2 & o] = i, this._length = a;
  }, t.prototype.shift = function() {
    var n = this._front, r = this[n];
    return this[n] = void 0, this._front = n + 1 & this._capacity - 1, this._length--, r;
  }, t.prototype.length = function() {
    return this._length;
  }, t.prototype._checkCapacity = function(n) {
    this._capacity < n && this._resizeTo(this._capacity << 1);
  }, t.prototype._resizeTo = function(n) {
    var r = this._capacity;
    this._capacity = n;
    var i = this._front, a = this._length, c = i + a & r - 1;
    e(this, 0, this, r, c);
  }, Ji = t, Ji;
}
var Lc;
function np() {
  if (Lc)
    return Ln;
  Lc = 1;
  var e;
  try {
    throw new Error();
  } catch (s) {
    e = s;
  }
  var t = ep(), n = tp(), r = ke();
  function i() {
    this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new n(16), this._normalQueue = new n(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;
    var s = this;
    this.drainQueues = function() {
      s._drainQueues();
    }, this._schedule = t;
  }
  i.prototype.setScheduler = function(s) {
    var u = this._schedule;
    return this._schedule = s, this._customScheduler = !0, u;
  }, i.prototype.hasCustomScheduler = function() {
    return this._customScheduler;
  }, i.prototype.enableTrampoline = function() {
    this._trampolineEnabled = !0;
  }, i.prototype.disableTrampolineIfNecessary = function() {
    r.hasDevTools && (this._trampolineEnabled = !1);
  }, i.prototype.haveItemsQueued = function() {
    return this._isTickUsed || this._haveDrainedQueues;
  }, i.prototype.fatalError = function(s, u) {
    u ? (process.stderr.write("Fatal " + (s instanceof Error ? s.stack : s) + `
`), process.exit(2)) : this.throwLater(s);
  }, i.prototype.throwLater = function(s, u) {
    if (arguments.length === 1 && (u = s, s = function() {
      throw u;
    }), typeof setTimeout < "u")
      setTimeout(function() {
        s(u);
      }, 0);
    else
      try {
        this._schedule(function() {
          s(u);
        });
      } catch {
        throw new Error(`No async scheduler available

    See http://goo.gl/MqrFmX
`);
      }
  };
  function a(s, u, f) {
    this._lateQueue.push(s, u, f), this._queueTick();
  }
  function c(s, u, f) {
    this._normalQueue.push(s, u, f), this._queueTick();
  }
  function o(s) {
    this._normalQueue._pushOne(s), this._queueTick();
  }
  return r.hasDevTools ? (i.prototype.invokeLater = function(s, u, f) {
    this._trampolineEnabled ? a.call(this, s, u, f) : this._schedule(function() {
      setTimeout(function() {
        s.call(u, f);
      }, 100);
    });
  }, i.prototype.invoke = function(s, u, f) {
    this._trampolineEnabled ? c.call(this, s, u, f) : this._schedule(function() {
      s.call(u, f);
    });
  }, i.prototype.settlePromises = function(s) {
    this._trampolineEnabled ? o.call(this, s) : this._schedule(function() {
      s._settlePromises();
    });
  }) : (i.prototype.invokeLater = a, i.prototype.invoke = c, i.prototype.settlePromises = o), i.prototype._drainQueue = function(s) {
    for (; s.length() > 0; ) {
      var u = s.shift();
      if (typeof u != "function") {
        u._settlePromises();
        continue;
      }
      var f = s.shift(), p = s.shift();
      u.call(f, p);
    }
  }, i.prototype._drainQueues = function() {
    this._drainQueue(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, this._drainQueue(this._lateQueue);
  }, i.prototype._queueTick = function() {
    this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues));
  }, i.prototype._reset = function() {
    this._isTickUsed = !1;
  }, Jh.exports = i, Ln.firstLineError = e, Ln;
}
var ea, Mc;
function Lt() {
  if (Mc)
    return ea;
  Mc = 1;
  var e = _n(), t = e.freeze, n = ke(), r = n.inherits, i = n.notEnumerableProp;
  function a(g, h) {
    function D(w) {
      if (!(this instanceof D))
        return new D(w);
      i(
        this,
        "message",
        typeof w == "string" ? w : h
      ), i(this, "name", g), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this);
    }
    return r(D, Error), D;
  }
  var c, o, s = a("Warning", "warning"), u = a("CancellationError", "cancellation error"), f = a("TimeoutError", "timeout error"), p = a("AggregateError", "aggregate error");
  try {
    c = TypeError, o = RangeError;
  } catch {
    c = a("TypeError", "type error"), o = a("RangeError", "range error");
  }
  for (var y = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), m = 0; m < y.length; ++m)
    typeof Array.prototype[y[m]] == "function" && (p.prototype[y[m]] = Array.prototype[y[m]]);
  e.defineProperty(p.prototype, "length", {
    value: 0,
    configurable: !1,
    writable: !0,
    enumerable: !0
  }), p.prototype.isOperational = !0;
  var b = 0;
  p.prototype.toString = function() {
    var g = Array(b * 4 + 1).join(" "), h = `
` + g + `AggregateError of:
`;
    b++, g = Array(b * 4 + 1).join(" ");
    for (var D = 0; D < this.length; ++D) {
      for (var w = this[D] === this ? "[Circular AggregateError]" : this[D] + "", U = w.split(`
`), E = 0; E < U.length; ++E)
        U[E] = g + U[E];
      w = U.join(`
`), h += w + `
`;
    }
    return b--, h;
  };
  function d(g) {
    if (!(this instanceof d))
      return new d(g);
    i(this, "name", "OperationalError"), i(this, "message", g), this.cause = g, this.isOperational = !0, g instanceof Error ? (i(this, "message", g.message), i(this, "stack", g.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
  r(d, Error);
  var l = Error.__BluebirdErrorTypes__;
  return l || (l = t({
    CancellationError: u,
    TimeoutError: f,
    OperationalError: d,
    RejectionError: d,
    AggregateError: p
  }), e.defineProperty(Error, "__BluebirdErrorTypes__", {
    value: l,
    writable: !1,
    enumerable: !1,
    configurable: !1
  })), ea = {
    Error,
    TypeError: c,
    RangeError: o,
    CancellationError: l.CancellationError,
    OperationalError: l.OperationalError,
    TimeoutError: l.TimeoutError,
    AggregateError: l.AggregateError,
    Warning: s
  }, ea;
}
var ta, jc;
function rp() {
  return jc || (jc = 1, ta = function(e, t) {
    var n = ke(), r = n.errorObj, i = n.isObject;
    function a(p, y) {
      if (i(p)) {
        if (p instanceof e)
          return p;
        var m = o(p);
        if (m === r) {
          y && y._pushContext();
          var b = e.reject(m.e);
          return y && y._popContext(), b;
        } else if (typeof m == "function") {
          if (u(p)) {
            var b = new e(t);
            return p._then(
              b._fulfill,
              b._reject,
              void 0,
              b,
              null
            ), b;
          }
          return f(p, m, y);
        }
      }
      return p;
    }
    function c(p) {
      return p.then;
    }
    function o(p) {
      try {
        return c(p);
      } catch (y) {
        return r.e = y, r;
      }
    }
    var s = {}.hasOwnProperty;
    function u(p) {
      try {
        return s.call(p, "_promise0");
      } catch {
        return !1;
      }
    }
    function f(p, y, m) {
      var b = new e(t), d = b;
      m && m._pushContext(), b._captureStackTrace(), m && m._popContext();
      var l = !0, g = n.tryCatch(y).call(p, h, D);
      l = !1, b && g === r && (b._rejectCallback(g.e, !0, !0), b = null);
      function h(w) {
        b && (b._resolveCallback(w), b = null);
      }
      function D(w) {
        b && (b._rejectCallback(w, l, !0), b = null);
      }
      return d;
    }
    return a;
  }), ta;
}
var na, Pc;
function ip() {
  return Pc || (Pc = 1, na = function(e, t, n, r, i) {
    var a = ke();
    a.isArray;
    function c(s) {
      switch (s) {
        case -2:
          return [];
        case -3:
          return {};
      }
    }
    function o(s) {
      var u = this._promise = new e(t);
      s instanceof e && u._propagateFrom(s, 3), u._setOnCancel(this), this._values = s, this._length = 0, this._totalResolved = 0, this._init(void 0, -2);
    }
    return a.inherits(o, i), o.prototype.length = function() {
      return this._length;
    }, o.prototype.promise = function() {
      return this._promise;
    }, o.prototype._init = function s(u, f) {
      var p = n(this._values, this._promise);
      if (p instanceof e) {
        p = p._target();
        var y = p._bitField;
        if (this._values = p, y & 50397184)
          if (y & 33554432)
            p = p._value();
          else
            return y & 16777216 ? this._reject(p._reason()) : this._cancel();
        else
          return this._promise._setAsyncGuaranteed(), p._then(
            s,
            this._reject,
            void 0,
            this,
            f
          );
      }
      if (p = a.asArray(p), p === null) {
        var m = r(
          "expecting an array or an iterable object but got " + a.classString(p)
        ).reason();
        this._promise._rejectCallback(m, !1);
        return;
      }
      if (p.length === 0) {
        f === -5 ? this._resolveEmptyArray() : this._resolve(c(f));
        return;
      }
      this._iterate(p);
    }, o.prototype._iterate = function(s) {
      var u = this.getActualLength(s.length);
      this._length = u, this._values = this.shouldCopyValues() ? new Array(u) : this._values;
      for (var f = this._promise, p = !1, y = null, m = 0; m < u; ++m) {
        var b = n(s[m], f);
        b instanceof e ? (b = b._target(), y = b._bitField) : y = null, p ? y !== null && b.suppressUnhandledRejections() : y !== null ? y & 50397184 ? y & 33554432 ? p = this._promiseFulfilled(b._value(), m) : y & 16777216 ? p = this._promiseRejected(b._reason(), m) : p = this._promiseCancelled(m) : (b._proxy(this, m), this._values[m] = b) : p = this._promiseFulfilled(b, m);
      }
      p || f._setAsyncGuaranteed();
    }, o.prototype._isResolved = function() {
      return this._values === null;
    }, o.prototype._resolve = function(s) {
      this._values = null, this._promise._fulfill(s);
    }, o.prototype._cancel = function() {
      this._isResolved() || !this._promise._isCancellable() || (this._values = null, this._promise._cancel());
    }, o.prototype._reject = function(s) {
      this._values = null, this._promise._rejectCallback(s, !1);
    }, o.prototype._promiseFulfilled = function(s, u) {
      this._values[u] = s;
      var f = ++this._totalResolved;
      return f >= this._length ? (this._resolve(this._values), !0) : !1;
    }, o.prototype._promiseCancelled = function() {
      return this._cancel(), !0;
    }, o.prototype._promiseRejected = function(s) {
      return this._totalResolved++, this._reject(s), !0;
    }, o.prototype._resultCancelled = function() {
      if (!this._isResolved()) {
        var s = this._values;
        if (this._cancel(), s instanceof e)
          s.cancel();
        else
          for (var u = 0; u < s.length; ++u)
            s[u] instanceof e && s[u].cancel();
      }
    }, o.prototype.shouldCopyValues = function() {
      return !0;
    }, o.prototype.getActualLength = function(s) {
      return s;
    }, o;
  }), na;
}
var ra, qc;
function ap() {
  return qc || (qc = 1, ra = function(e) {
    var t = !1, n = [];
    e.prototype._promiseCreated = function() {
    }, e.prototype._pushContext = function() {
    }, e.prototype._popContext = function() {
      return null;
    }, e._peekContext = e.prototype._peekContext = function() {
    };
    function r() {
      this._trace = new r.CapturedTrace(a());
    }
    r.prototype._pushContext = function() {
      this._trace !== void 0 && (this._trace._promiseCreated = null, n.push(this._trace));
    }, r.prototype._popContext = function() {
      if (this._trace !== void 0) {
        var c = n.pop(), o = c._promiseCreated;
        return c._promiseCreated = null, o;
      }
      return null;
    };
    function i() {
      if (t)
        return new r();
    }
    function a() {
      var c = n.length - 1;
      if (c >= 0)
        return n[c];
    }
    return r.CapturedTrace = null, r.create = i, r.deactivateLongStackTraces = function() {
    }, r.activateLongStackTraces = function() {
      var c = e.prototype._pushContext, o = e.prototype._popContext, s = e._peekContext, u = e.prototype._peekContext, f = e.prototype._promiseCreated;
      r.deactivateLongStackTraces = function() {
        e.prototype._pushContext = c, e.prototype._popContext = o, e._peekContext = s, e.prototype._peekContext = u, e.prototype._promiseCreated = f, t = !1;
      }, t = !0, e.prototype._pushContext = r.prototype._pushContext, e.prototype._popContext = r.prototype._popContext, e._peekContext = e.prototype._peekContext = a, e.prototype._promiseCreated = function() {
        var p = this._peekContext();
        p && p._promiseCreated == null && (p._promiseCreated = this);
      };
    }, r;
  }), ra;
}
var ia, zc;
function op() {
  return zc || (zc = 1, ia = function(e, t) {
    var n = e._getDomain, r = e._async, i = Lt().Warning, a = ke(), c = a.canAttachTrace, o, s, u = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/, f = /\((?:timers\.js):\d+:\d+\)/, p = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, y = null, m = null, b = !1, d, l = !!(a.env("BLUEBIRD_DEBUG") != 0 && (a.env("BLUEBIRD_DEBUG") || a.env("NODE_ENV") === "development")), g = !!(a.env("BLUEBIRD_WARNINGS") != 0 && (l || a.env("BLUEBIRD_WARNINGS"))), h = !!(a.env("BLUEBIRD_LONG_STACK_TRACES") != 0 && (l || a.env("BLUEBIRD_LONG_STACK_TRACES"))), D = a.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 && (g || !!a.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
    e.prototype.suppressUnhandledRejections = function() {
      var O = this._target();
      O._bitField = O._bitField & -1048577 | 524288;
    }, e.prototype._ensurePossibleRejectionHandled = function() {
      this._bitField & 524288 || (this._setRejectionIsUnhandled(), r.invokeLater(this._notifyUnhandledRejection, this, void 0));
    }, e.prototype._notifyUnhandledRejectionIsHandled = function() {
      be(
        "rejectionHandled",
        o,
        void 0,
        this
      );
    }, e.prototype._setReturnedNonUndefined = function() {
      this._bitField = this._bitField | 268435456;
    }, e.prototype._returnedNonUndefined = function() {
      return (this._bitField & 268435456) !== 0;
    }, e.prototype._notifyUnhandledRejection = function() {
      if (this._isRejectionUnhandled()) {
        var O = this._settledValue();
        this._setUnhandledRejectionIsNotified(), be(
          "unhandledRejection",
          s,
          O,
          this
        );
      }
    }, e.prototype._setUnhandledRejectionIsNotified = function() {
      this._bitField = this._bitField | 262144;
    }, e.prototype._unsetUnhandledRejectionIsNotified = function() {
      this._bitField = this._bitField & -262145;
    }, e.prototype._isUnhandledRejectionNotified = function() {
      return (this._bitField & 262144) > 0;
    }, e.prototype._setRejectionIsUnhandled = function() {
      this._bitField = this._bitField | 1048576;
    }, e.prototype._unsetRejectionIsUnhandled = function() {
      this._bitField = this._bitField & -1048577, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled());
    }, e.prototype._isRejectionUnhandled = function() {
      return (this._bitField & 1048576) > 0;
    }, e.prototype._warn = function(O, X, G) {
      return ce(O, X, G || this);
    }, e.onPossiblyUnhandledRejection = function(O) {
      var X = n();
      s = typeof O == "function" ? X === null ? O : a.domainBind(X, O) : void 0;
    }, e.onUnhandledRejectionHandled = function(O) {
      var X = n();
      o = typeof O == "function" ? X === null ? O : a.domainBind(X, O) : void 0;
    };
    var w = function() {
    };
    e.longStackTraces = function() {
      if (r.haveItemsQueued() && !V.longStackTraces)
        throw new Error(`cannot enable long stack traces after promises have been created

    See http://goo.gl/MqrFmX
`);
      if (!V.longStackTraces && ie()) {
        var O = e.prototype._captureStackTrace, X = e.prototype._attachExtraTrace;
        V.longStackTraces = !0, w = function() {
          if (r.haveItemsQueued() && !V.longStackTraces)
            throw new Error(`cannot enable long stack traces after promises have been created

    See http://goo.gl/MqrFmX
`);
          e.prototype._captureStackTrace = O, e.prototype._attachExtraTrace = X, t.deactivateLongStackTraces(), r.enableTrampoline(), V.longStackTraces = !1;
        }, e.prototype._captureStackTrace = M, e.prototype._attachExtraTrace = k, t.activateLongStackTraces(), r.disableTrampolineIfNecessary();
      }
    }, e.hasLongStackTraces = function() {
      return V.longStackTraces && ie();
    };
    var U = function() {
      try {
        if (typeof CustomEvent == "function") {
          var O = new CustomEvent("CustomEvent");
          return a.global.dispatchEvent(O), function(X, G) {
            var ne = new CustomEvent(X.toLowerCase(), {
              detail: G,
              cancelable: !0
            });
            return !a.global.dispatchEvent(ne);
          };
        } else if (typeof Event == "function") {
          var O = new Event("CustomEvent");
          return a.global.dispatchEvent(O), function(G, ne) {
            var pe = new Event(G.toLowerCase(), {
              cancelable: !0
            });
            return pe.detail = ne, !a.global.dispatchEvent(pe);
          };
        } else {
          var O = document.createEvent("CustomEvent");
          return O.initCustomEvent("testingtheevent", !1, !0, {}), a.global.dispatchEvent(O), function(G, ne) {
            var pe = document.createEvent("CustomEvent");
            return pe.initCustomEvent(
              G.toLowerCase(),
              !1,
              !0,
              ne
            ), !a.global.dispatchEvent(pe);
          };
        }
      } catch {
      }
      return function() {
        return !1;
      };
    }(), E = function() {
      return a.isNode ? function() {
        return process.emit.apply(process, arguments);
      } : a.global ? function(O) {
        var X = "on" + O.toLowerCase(), G = a.global[X];
        return G ? (G.apply(a.global, [].slice.call(arguments, 1)), !0) : !1;
      } : function() {
        return !1;
      };
    }();
    function F(O, X) {
      return { promise: X };
    }
    var j = {
      promiseCreated: F,
      promiseFulfilled: F,
      promiseRejected: F,
      promiseResolved: F,
      promiseCancelled: F,
      promiseChained: function(O, X, G) {
        return { promise: X, child: G };
      },
      warning: function(O, X) {
        return { warning: X };
      },
      unhandledRejection: function(O, X, G) {
        return { reason: X, promise: G };
      },
      rejectionHandled: F
    }, q = function(O) {
      var X = !1;
      try {
        X = E.apply(null, arguments);
      } catch (ne) {
        r.throwLater(ne), X = !0;
      }
      var G = !1;
      try {
        G = U(
          O,
          j[O].apply(null, arguments)
        );
      } catch (ne) {
        r.throwLater(ne), G = !0;
      }
      return G || X;
    };
    e.config = function(O) {
      if (O = Object(O), "longStackTraces" in O && (O.longStackTraces ? e.longStackTraces() : !O.longStackTraces && e.hasLongStackTraces() && w()), "warnings" in O) {
        var X = O.warnings;
        V.warnings = !!X, D = V.warnings, a.isObject(X) && "wForgottenReturn" in X && (D = !!X.wForgottenReturn);
      }
      if ("cancellation" in O && O.cancellation && !V.cancellation) {
        if (r.haveItemsQueued())
          throw new Error(
            "cannot enable cancellation after promises are in use"
          );
        e.prototype._clearCancellationData = Q, e.prototype._propagateFrom = S, e.prototype._onCancel = P, e.prototype._setOnCancel = _, e.prototype._attachCancellationCallback = T, e.prototype._execute = oe, N = S, V.cancellation = !0;
      }
      return "monitoring" in O && (O.monitoring && !V.monitoring ? (V.monitoring = !0, e.prototype._fireEvent = q) : !O.monitoring && V.monitoring && (V.monitoring = !1, e.prototype._fireEvent = Y)), e;
    };
    function Y() {
      return !1;
    }
    e.prototype._fireEvent = Y, e.prototype._execute = function(O, X, G) {
      try {
        O(X, G);
      } catch (ne) {
        return ne;
      }
    }, e.prototype._onCancel = function() {
    }, e.prototype._setOnCancel = function(O) {
    }, e.prototype._attachCancellationCallback = function(O) {
    }, e.prototype._captureStackTrace = function() {
    }, e.prototype._attachExtraTrace = function() {
    }, e.prototype._clearCancellationData = function() {
    }, e.prototype._propagateFrom = function(O, X) {
    };
    function oe(O, X, G) {
      var ne = this;
      try {
        O(X, G, function(pe) {
          if (typeof pe != "function")
            throw new TypeError("onCancel must be a function, got: " + a.toString(pe));
          ne._attachCancellationCallback(pe);
        });
      } catch (pe) {
        return pe;
      }
    }
    function T(O) {
      if (!this._isCancellable())
        return this;
      var X = this._onCancel();
      X !== void 0 ? a.isArray(X) ? X.push(O) : this._setOnCancel([X, O]) : this._setOnCancel(O);
    }
    function P() {
      return this._onCancelField;
    }
    function _(O) {
      this._onCancelField = O;
    }
    function Q() {
      this._cancellationParent = void 0, this._onCancelField = void 0;
    }
    function S(O, X) {
      if (X & 1) {
        this._cancellationParent = O;
        var G = O._branchesRemainingToCancel;
        G === void 0 && (G = 0), O._branchesRemainingToCancel = G + 1;
      }
      X & 2 && O._isBound() && this._setBoundTo(O._boundTo);
    }
    function R(O, X) {
      X & 2 && O._isBound() && this._setBoundTo(O._boundTo);
    }
    var N = R;
    function I() {
      var O = this._boundTo;
      return O !== void 0 && O instanceof e ? O.isFulfilled() ? O.value() : void 0 : O;
    }
    function M() {
      this._trace = new ae(this._peekContext());
    }
    function k(O, X) {
      if (c(O)) {
        var G = this._trace;
        if (G !== void 0 && X && (G = G._parent), G !== void 0)
          G.attachExtraTrace(O);
        else if (!O.__stackCleaned__) {
          var ne = se(O);
          a.notEnumerableProp(
            O,
            "stack",
            ne.message + `
` + ne.stack.join(`
`)
          ), a.notEnumerableProp(O, "__stackCleaned__", !0);
        }
      }
    }
    function C(O, X, G, ne, pe) {
      if (O === void 0 && X !== null && D) {
        if (pe !== void 0 && pe._returnedNonUndefined() || !(ne._bitField & 65535))
          return;
        G && (G = G + " ");
        var ge = "", Ue = "";
        if (X._trace) {
          for (var De = X._trace.stack.split(`
`), Te = ye(De), Se = Te.length - 1; Se >= 0; --Se) {
            var Ee = Te[Se];
            if (!f.test(Ee)) {
              var je = Ee.match(p);
              je && (ge = "at " + je[1] + ":" + je[2] + ":" + je[3] + " ");
              break;
            }
          }
          if (Te.length > 0) {
            for (var Pt = Te[0], Se = 0; Se < De.length; ++Se)
              if (De[Se] === Pt) {
                Se > 0 && (Ue = `
` + De[Se - 1]);
                break;
              }
          }
        }
        var tt = "a promise was created in a " + G + "handler " + ge + "but was not returned from it, see http://goo.gl/rRqMUw" + Ue;
        ne._warn(tt, !0, X);
      }
    }
    function J(O, X) {
      var G = O + " is deprecated and will be removed in a future version.";
      return X && (G += " Use " + X + " instead."), ce(G);
    }
    function ce(O, X, G) {
      if (V.warnings) {
        var ne = new i(O), pe;
        if (X)
          G._attachExtraTrace(ne);
        else if (V.longStackTraces && (pe = e._peekContext()))
          pe.attachExtraTrace(ne);
        else {
          var ge = se(ne);
          ne.stack = ge.message + `
` + ge.stack.join(`
`);
        }
        q("warning", ne) || fe(ne, "", !0);
      }
    }
    function re(O, X) {
      for (var G = 0; G < X.length - 1; ++G)
        X[G].push("From previous event:"), X[G] = X[G].join(`
`);
      return G < X.length && (X[G] = X[G].join(`
`)), O + `
` + X.join(`
`);
    }
    function le(O) {
      for (var X = 0; X < O.length; ++X)
        (O[X].length === 0 || X + 1 < O.length && O[X][0] === O[X + 1][0]) && (O.splice(X, 1), X--);
    }
    function me(O) {
      for (var X = O[0], G = 1; G < O.length; ++G) {
        for (var ne = O[G], pe = X.length - 1, ge = X[pe], Ue = -1, De = ne.length - 1; De >= 0; --De)
          if (ne[De] === ge) {
            Ue = De;
            break;
          }
        for (var De = Ue; De >= 0; --De) {
          var Te = ne[De];
          if (X[pe] === Te)
            X.pop(), pe--;
          else
            break;
        }
        X = ne;
      }
    }
    function ye(O) {
      for (var X = [], G = 0; G < O.length; ++G) {
        var ne = O[G], pe = ne === "    (No stack trace)" || y.test(ne), ge = pe && ee(ne);
        pe && !ge && (b && ne.charAt(0) !== " " && (ne = "    " + ne), X.push(ne));
      }
      return X;
    }
    function $(O) {
      for (var X = O.stack.replace(/\s+$/g, "").split(`
`), G = 0; G < X.length; ++G) {
        var ne = X[G];
        if (ne === "    (No stack trace)" || y.test(ne))
          break;
      }
      return G > 0 && O.name != "SyntaxError" && (X = X.slice(G)), X;
    }
    function se(O) {
      var X = O.stack, G = O.toString();
      return X = typeof X == "string" && X.length > 0 ? $(O) : ["    (No stack trace)"], {
        message: G,
        stack: O.name == "SyntaxError" ? X : ye(X)
      };
    }
    function fe(O, X, G) {
      if (typeof console < "u") {
        var ne;
        if (a.isObject(O)) {
          var pe = O.stack;
          ne = X + m(pe, O);
        } else
          ne = X + String(O);
        typeof d == "function" ? d(ne, G) : (typeof console.log == "function" || typeof console.log == "object") && console.log(ne);
      }
    }
    function be(O, X, G, ne) {
      var pe = !1;
      try {
        typeof X == "function" && (pe = !0, O === "rejectionHandled" ? X(ne) : X(G, ne));
      } catch (ge) {
        r.throwLater(ge);
      }
      O === "unhandledRejection" ? !q(O, G, ne) && !pe && fe(G, "Unhandled rejection ") : q(O, ne);
    }
    function _e(O) {
      var X;
      if (typeof O == "function")
        X = "[function " + (O.name || "anonymous") + "]";
      else {
        X = O && typeof O.toString == "function" ? O.toString() : a.toString(O);
        var G = /\[object [a-zA-Z0-9$_]+\]/;
        if (G.test(X))
          try {
            var ne = JSON.stringify(O);
            X = ne;
          } catch {
          }
        X.length === 0 && (X = "(empty array)");
      }
      return "(<" + v(X) + ">, no stack trace)";
    }
    function v(O) {
      var X = 41;
      return O.length < X ? O : O.substr(0, X - 3) + "...";
    }
    function ie() {
      return typeof de == "function";
    }
    var ee = function() {
      return !1;
    }, W = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
    function B(O) {
      var X = O.match(W);
      if (X)
        return {
          fileName: X[1],
          line: parseInt(X[2], 10)
        };
    }
    function Z(O, X) {
      if (ie()) {
        for (var G = O.stack.split(`
`), ne = X.stack.split(`
`), pe = -1, ge = -1, Ue, De, Te = 0; Te < G.length; ++Te) {
          var Se = B(G[Te]);
          if (Se) {
            Ue = Se.fileName, pe = Se.line;
            break;
          }
        }
        for (var Te = 0; Te < ne.length; ++Te) {
          var Se = B(ne[Te]);
          if (Se) {
            De = Se.fileName, ge = Se.line;
            break;
          }
        }
        pe < 0 || ge < 0 || !Ue || !De || Ue !== De || pe >= ge || (ee = function(Ee) {
          if (u.test(Ee))
            return !0;
          var je = B(Ee);
          return !!(je && je.fileName === Ue && pe <= je.line && je.line <= ge);
        });
      }
    }
    function ae(O) {
      this._parent = O, this._promisesCreated = 0;
      var X = this._length = 1 + (O === void 0 ? 0 : O._length);
      de(this, ae), X > 32 && this.uncycle();
    }
    a.inherits(ae, Error), t.CapturedTrace = ae, ae.prototype.uncycle = function() {
      var O = this._length;
      if (!(O < 2)) {
        for (var X = [], G = {}, ne = 0, pe = this; pe !== void 0; ++ne)
          X.push(pe), pe = pe._parent;
        O = this._length = ne;
        for (var ne = O - 1; ne >= 0; --ne) {
          var ge = X[ne].stack;
          G[ge] === void 0 && (G[ge] = ne);
        }
        for (var ne = 0; ne < O; ++ne) {
          var Ue = X[ne].stack, De = G[Ue];
          if (De !== void 0 && De !== ne) {
            De > 0 && (X[De - 1]._parent = void 0, X[De - 1]._length = 1), X[ne]._parent = void 0, X[ne]._length = 1;
            var Te = ne > 0 ? X[ne - 1] : this;
            De < O - 1 ? (Te._parent = X[De + 1], Te._parent.uncycle(), Te._length = Te._parent._length + 1) : (Te._parent = void 0, Te._length = 1);
            for (var Se = Te._length + 1, Ee = ne - 2; Ee >= 0; --Ee)
              X[Ee]._length = Se, Se++;
            return;
          }
        }
      }
    }, ae.prototype.attachExtraTrace = function(O) {
      if (!O.__stackCleaned__) {
        this.uncycle();
        for (var X = se(O), G = X.message, ne = [X.stack], pe = this; pe !== void 0; )
          ne.push(ye(pe.stack.split(`
`))), pe = pe._parent;
        me(ne), le(ne), a.notEnumerableProp(O, "stack", re(G, ne)), a.notEnumerableProp(O, "__stackCleaned__", !0);
      }
    };
    var de = function() {
      var X = /^\s*at\s*/, G = function(Ue, De) {
        return typeof Ue == "string" ? Ue : De.name !== void 0 && De.message !== void 0 ? De.toString() : _e(De);
      };
      if (typeof Error.stackTraceLimit == "number" && typeof Error.captureStackTrace == "function") {
        Error.stackTraceLimit += 6, y = X, m = G;
        var ne = Error.captureStackTrace;
        return ee = function(Ue) {
          return u.test(Ue);
        }, function(Ue, De) {
          Error.stackTraceLimit += 6, ne(Ue, De), Error.stackTraceLimit -= 6;
        };
      }
      var pe = new Error();
      if (typeof pe.stack == "string" && pe.stack.split(`
`)[0].indexOf("stackDetection@") >= 0)
        return y = /@/, m = G, b = !0, function(De) {
          De.stack = new Error().stack;
        };
      var ge;
      try {
        throw new Error();
      } catch (Ue) {
        ge = "stack" in Ue;
      }
      return !("stack" in pe) && ge && typeof Error.stackTraceLimit == "number" ? (y = X, m = G, function(De) {
        Error.stackTraceLimit += 6;
        try {
          throw new Error();
        } catch (Te) {
          De.stack = Te.stack;
        }
        Error.stackTraceLimit -= 6;
      }) : (m = function(Ue, De) {
        return typeof Ue == "string" ? Ue : (typeof De == "object" || typeof De == "function") && De.name !== void 0 && De.message !== void 0 ? De.toString() : _e(De);
      }, null);
    }();
    typeof console < "u" && typeof console.warn < "u" && (d = function(O) {
      console.warn(O);
    }, a.isNode && process.stderr.isTTY ? d = function(O, X) {
      var G = X ? "\x1B[33m" : "\x1B[31m";
      console.warn(G + O + `\x1B[0m
`);
    } : !a.isNode && typeof new Error().stack == "string" && (d = function(O, X) {
      console.warn(
        "%c" + O,
        X ? "color: darkorange" : "color: red"
      );
    }));
    var V = {
      warnings: g,
      longStackTraces: !1,
      cancellation: !1,
      monitoring: !1
    };
    return h && e.longStackTraces(), {
      longStackTraces: function() {
        return V.longStackTraces;
      },
      warnings: function() {
        return V.warnings;
      },
      cancellation: function() {
        return V.cancellation;
      },
      monitoring: function() {
        return V.monitoring;
      },
      propagateFromFunction: function() {
        return N;
      },
      boundValueFunction: function() {
        return I;
      },
      checkForgottenReturns: C,
      setBounds: Z,
      warn: ce,
      deprecated: J,
      CapturedTrace: ae,
      fireDomEvent: U,
      fireGlobalEvent: E
    };
  }), ia;
}
var aa, Xc;
function cp() {
  return Xc || (Xc = 1, aa = function(e, t) {
    var n = ke(), r = e.CancellationError, i = n.errorObj;
    function a(p, y, m) {
      this.promise = p, this.type = y, this.handler = m, this.called = !1, this.cancelPromise = null;
    }
    a.prototype.isFinallyHandler = function() {
      return this.type === 0;
    };
    function c(p) {
      this.finallyHandler = p;
    }
    c.prototype._resultCancelled = function() {
      o(this.finallyHandler);
    };
    function o(p, y) {
      return p.cancelPromise != null ? (arguments.length > 1 ? p.cancelPromise._reject(y) : p.cancelPromise._cancel(), p.cancelPromise = null, !0) : !1;
    }
    function s() {
      return f.call(this, this.promise._target()._settledValue());
    }
    function u(p) {
      if (!o(this, p))
        return i.e = p, i;
    }
    function f(p) {
      var y = this.promise, m = this.handler;
      if (!this.called) {
        this.called = !0;
        var b = this.isFinallyHandler() ? m.call(y._boundValue()) : m.call(y._boundValue(), p);
        if (b !== void 0) {
          y._setReturnedNonUndefined();
          var d = t(b, y);
          if (d instanceof e) {
            if (this.cancelPromise != null)
              if (d._isCancelled()) {
                var l = new r("late cancellation observer");
                return y._attachExtraTrace(l), i.e = l, i;
              } else
                d.isPending() && d._attachCancellationCallback(
                  new c(this)
                );
            return d._then(
              s,
              u,
              void 0,
              this,
              void 0
            );
          }
        }
      }
      return y.isRejected() ? (o(this), i.e = p, i) : (o(this), p);
    }
    return e.prototype._passThrough = function(p, y, m, b) {
      return typeof p != "function" ? this.then() : this._then(
        m,
        b,
        void 0,
        new a(this, y, p),
        void 0
      );
    }, e.prototype.lastly = e.prototype.finally = function(p) {
      return this._passThrough(
        p,
        0,
        f,
        f
      );
    }, e.prototype.tap = function(p) {
      return this._passThrough(p, 1, f);
    }, a;
  }), aa;
}
var oa, Vc;
function sp() {
  return Vc || (Vc = 1, oa = function(e) {
    var t = ke(), n = _n().keys, r = t.tryCatch, i = t.errorObj;
    function a(c, o, s) {
      return function(u) {
        var f = s._boundValue();
        e:
          for (var p = 0; p < c.length; ++p) {
            var y = c[p];
            if (y === Error || y != null && y.prototype instanceof Error) {
              if (u instanceof y)
                return r(o).call(f, u);
            } else if (typeof y == "function") {
              var m = r(y).call(f, u);
              if (m === i)
                return m;
              if (m)
                return r(o).call(f, u);
            } else if (t.isObject(u)) {
              for (var b = n(y), d = 0; d < b.length; ++d) {
                var l = b[d];
                if (y[l] != u[l])
                  continue e;
              }
              return r(o).call(f, u);
            }
          }
        return e;
      };
    }
    return a;
  }), oa;
}
var ca, Hc;
function Vu() {
  if (Hc)
    return ca;
  Hc = 1;
  var e = ke(), t = e.maybeWrapAsError, n = Lt(), r = n.OperationalError, i = _n();
  function a(u) {
    return u instanceof Error && i.getPrototypeOf(u) === Error.prototype;
  }
  var c = /^(?:name|message|stack|cause)$/;
  function o(u) {
    var f;
    if (a(u)) {
      f = new r(u), f.name = u.name, f.message = u.message, f.stack = u.stack;
      for (var p = i.keys(u), y = 0; y < p.length; ++y) {
        var m = p[y];
        c.test(m) || (f[m] = u[m]);
      }
      return f;
    }
    return e.markAsOriginatingFromRejection(u), u;
  }
  function s(u, f) {
    return function(p, y) {
      if (u !== null) {
        if (p) {
          var m = o(t(p));
          u._attachExtraTrace(m), u._reject(m);
        } else if (!f)
          u._fulfill(y);
        else {
          for (var b = arguments.length, d = new Array(Math.max(b - 1, 0)), l = 1; l < b; ++l)
            d[l - 1] = arguments[l];
          u._fulfill(d);
        }
        u = null;
      }
    };
  }
  return ca = s, ca;
}
var sa, $c;
function up() {
  return $c || ($c = 1, sa = function(e, t, n, r, i) {
    var a = ke(), c = a.tryCatch;
    e.method = function(o) {
      if (typeof o != "function")
        throw new e.TypeError("expecting a function but got " + a.classString(o));
      return function() {
        var s = new e(t);
        s._captureStackTrace(), s._pushContext();
        var u = c(o).apply(this, arguments), f = s._popContext();
        return i.checkForgottenReturns(
          u,
          f,
          "Promise.method",
          s
        ), s._resolveFromSyncValue(u), s;
      };
    }, e.attempt = e.try = function(o) {
      if (typeof o != "function")
        return r("expecting a function but got " + a.classString(o));
      var s = new e(t);
      s._captureStackTrace(), s._pushContext();
      var u;
      if (arguments.length > 1) {
        i.deprecated("calling Promise.try with more than 1 argument");
        var f = arguments[1], p = arguments[2];
        u = a.isArray(f) ? c(o).apply(p, f) : c(o).call(p, f);
      } else
        u = c(o)();
      var y = s._popContext();
      return i.checkForgottenReturns(
        u,
        y,
        "Promise.try",
        s
      ), s._resolveFromSyncValue(u), s;
    }, e.prototype._resolveFromSyncValue = function(o) {
      o === a.errorObj ? this._rejectCallback(o.e, !1) : this._resolveCallback(o, !0);
    };
  }), sa;
}
var ua, Zc;
function dp() {
  return Zc || (Zc = 1, ua = function(e, t, n, r) {
    var i = !1, a = function(u, f) {
      this._reject(f);
    }, c = function(u, f) {
      f.promiseRejectionQueued = !0, f.bindingPromise._then(a, a, null, this, u);
    }, o = function(u, f) {
      this._bitField & 50397184 || this._resolveCallback(f.target);
    }, s = function(u, f) {
      f.promiseRejectionQueued || this._reject(u);
    };
    e.prototype.bind = function(u) {
      i || (i = !0, e.prototype._propagateFrom = r.propagateFromFunction(), e.prototype._boundValue = r.boundValueFunction());
      var f = n(u), p = new e(t);
      p._propagateFrom(this, 1);
      var y = this._target();
      if (p._setBoundTo(f), f instanceof e) {
        var m = {
          promiseRejectionQueued: !1,
          promise: p,
          target: y,
          bindingPromise: f
        };
        y._then(t, c, void 0, p, m), f._then(
          o,
          s,
          void 0,
          p,
          m
        ), p._setOnCancel(f);
      } else
        p._resolveCallback(y);
      return p;
    }, e.prototype._setBoundTo = function(u) {
      u !== void 0 ? (this._bitField = this._bitField | 2097152, this._boundTo = u) : this._bitField = this._bitField & -2097153;
    }, e.prototype._isBound = function() {
      return (this._bitField & 2097152) === 2097152;
    }, e.bind = function(u, f) {
      return e.resolve(f).bind(u);
    };
  }), ua;
}
var da, Gc;
function lp() {
  return Gc || (Gc = 1, da = function(e, t, n, r) {
    var i = ke(), a = i.tryCatch, c = i.errorObj, o = e._async;
    e.prototype.break = e.prototype.cancel = function() {
      if (!r.cancellation())
        return this._warn("cancellation is disabled");
      for (var s = this, u = s; s._isCancellable(); ) {
        if (!s._cancelBy(u)) {
          u._isFollowing() ? u._followee().cancel() : u._cancelBranched();
          break;
        }
        var f = s._cancellationParent;
        if (f == null || !f._isCancellable()) {
          s._isFollowing() ? s._followee().cancel() : s._cancelBranched();
          break;
        } else
          s._isFollowing() && s._followee().cancel(), s._setWillBeCancelled(), u = s, s = f;
      }
    }, e.prototype._branchHasCancelled = function() {
      this._branchesRemainingToCancel--;
    }, e.prototype._enoughBranchesHaveCancelled = function() {
      return this._branchesRemainingToCancel === void 0 || this._branchesRemainingToCancel <= 0;
    }, e.prototype._cancelBy = function(s) {
      return s === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), !0) : (this._branchHasCancelled(), this._enoughBranchesHaveCancelled() ? (this._invokeOnCancel(), !0) : !1);
    }, e.prototype._cancelBranched = function() {
      this._enoughBranchesHaveCancelled() && this._cancel();
    }, e.prototype._cancel = function() {
      this._isCancellable() && (this._setCancelled(), o.invoke(this._cancelPromises, this, void 0));
    }, e.prototype._cancelPromises = function() {
      this._length() > 0 && this._settlePromises();
    }, e.prototype._unsetOnCancel = function() {
      this._onCancelField = void 0;
    }, e.prototype._isCancellable = function() {
      return this.isPending() && !this._isCancelled();
    }, e.prototype.isCancellable = function() {
      return this.isPending() && !this.isCancelled();
    }, e.prototype._doInvokeOnCancel = function(s, u) {
      if (i.isArray(s))
        for (var f = 0; f < s.length; ++f)
          this._doInvokeOnCancel(s[f], u);
      else if (s !== void 0)
        if (typeof s == "function") {
          if (!u) {
            var p = a(s).call(this._boundValue());
            p === c && (this._attachExtraTrace(p.e), o.throwLater(p.e));
          }
        } else
          s._resultCancelled(this);
    }, e.prototype._invokeOnCancel = function() {
      var s = this._onCancel();
      this._unsetOnCancel(), o.invoke(this._doInvokeOnCancel, this, s);
    }, e.prototype._invokeInternalOnCancel = function() {
      this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel());
    }, e.prototype._resultCancelled = function() {
      this.cancel();
    };
  }), da;
}
var la, Yc;
function fp() {
  return Yc || (Yc = 1, la = function(e) {
    function t() {
      return this.value;
    }
    function n() {
      throw this.reason;
    }
    e.prototype.return = e.prototype.thenReturn = function(r) {
      return r instanceof e && r.suppressUnhandledRejections(), this._then(
        t,
        void 0,
        void 0,
        { value: r },
        void 0
      );
    }, e.prototype.throw = e.prototype.thenThrow = function(r) {
      return this._then(
        n,
        void 0,
        void 0,
        { reason: r },
        void 0
      );
    }, e.prototype.catchThrow = function(r) {
      if (arguments.length <= 1)
        return this._then(
          void 0,
          n,
          void 0,
          { reason: r },
          void 0
        );
      var i = arguments[1], a = function() {
        throw i;
      };
      return this.caught(r, a);
    }, e.prototype.catchReturn = function(r) {
      if (arguments.length <= 1)
        return r instanceof e && r.suppressUnhandledRejections(), this._then(
          void 0,
          t,
          void 0,
          { value: r },
          void 0
        );
      var i = arguments[1];
      i instanceof e && i.suppressUnhandledRejections();
      var a = function() {
        return i;
      };
      return this.caught(r, a);
    };
  }), la;
}
var fa, Kc;
function hp() {
  return Kc || (Kc = 1, fa = function(e) {
    function t(s) {
      s !== void 0 ? (s = s._target(), this._bitField = s._bitField, this._settledValueField = s._isFateSealed() ? s._settledValue() : void 0) : (this._bitField = 0, this._settledValueField = void 0);
    }
    t.prototype._settledValue = function() {
      return this._settledValueField;
    };
    var n = t.prototype.value = function() {
      if (!this.isFulfilled())
        throw new TypeError(`cannot get fulfillment value of a non-fulfilled promise

    See http://goo.gl/MqrFmX
`);
      return this._settledValue();
    }, r = t.prototype.error = t.prototype.reason = function() {
      if (!this.isRejected())
        throw new TypeError(`cannot get rejection reason of a non-rejected promise

    See http://goo.gl/MqrFmX
`);
      return this._settledValue();
    }, i = t.prototype.isFulfilled = function() {
      return (this._bitField & 33554432) !== 0;
    }, a = t.prototype.isRejected = function() {
      return (this._bitField & 16777216) !== 0;
    }, c = t.prototype.isPending = function() {
      return (this._bitField & 50397184) === 0;
    }, o = t.prototype.isResolved = function() {
      return (this._bitField & 50331648) !== 0;
    };
    t.prototype.isCancelled = function() {
      return (this._bitField & 8454144) !== 0;
    }, e.prototype.__isCancelled = function() {
      return (this._bitField & 65536) === 65536;
    }, e.prototype._isCancelled = function() {
      return this._target().__isCancelled();
    }, e.prototype.isCancelled = function() {
      return (this._target()._bitField & 8454144) !== 0;
    }, e.prototype.isPending = function() {
      return c.call(this._target());
    }, e.prototype.isRejected = function() {
      return a.call(this._target());
    }, e.prototype.isFulfilled = function() {
      return i.call(this._target());
    }, e.prototype.isResolved = function() {
      return o.call(this._target());
    }, e.prototype.value = function() {
      return n.call(this._target());
    }, e.prototype.reason = function() {
      var s = this._target();
      return s._unsetRejectionIsUnhandled(), r.call(s);
    }, e.prototype._value = function() {
      return this._settledValue();
    }, e.prototype._reason = function() {
      return this._unsetRejectionIsUnhandled(), this._settledValue();
    }, e.PromiseInspection = t;
  }), fa;
}
var ha, Qc;
function pp() {
  return Qc || (Qc = 1, ha = function(e, t, n, r, i, a) {
    var c = ke(), o = c.canEvaluate, s = c.tryCatch, u = c.errorObj, f;
    if (o) {
      for (var p = function(h) {
        return new Function("value", "holder", `                             
	            'use strict';                                                    
	            holder.pIndex = value;                                           
	            holder.checkFulfillment(this);                                   
	            `.replace(/Index/g, h));
      }, y = function(h) {
        return new Function("promise", "holder", `                           
	            'use strict';                                                    
	            holder.pIndex = promise;                                         
	            `.replace(/Index/g, h));
      }, m = function(h) {
        for (var D = new Array(h), w = 0; w < D.length; ++w)
          D[w] = "this.p" + (w + 1);
        var U = D.join(" = ") + " = null;", E = `var promise;
` + D.map(function(Y) {
          return `                                                         
	                promise = ` + Y + `;                                      
	                if (promise instanceof Promise) {                            
	                    promise.cancel();                                        
	                }                                                            
	            `;
        }).join(`
`), F = D.join(", "), j = "Holder$" + h, q = `return function(tryCatch, errorObj, Promise, async) {    
	            'use strict';                                                    
	            function [TheName](fn) {                                         
	                [TheProperties]                                              
	                this.fn = fn;                                                
	                this.asyncNeeded = true;                                     
	                this.now = 0;                                                
	            }                                                                
	                                                                             
	            [TheName].prototype._callFunction = function(promise) {          
	                promise._pushContext();                                      
	                var ret = tryCatch(this.fn)([ThePassedArguments]);           
	                promise._popContext();                                       
	                if (ret === errorObj) {                                      
	                    promise._rejectCallback(ret.e, false);                   
	                } else {                                                     
	                    promise._resolveCallback(ret);                           
	                }                                                            
	            };                                                               
	                                                                             
	            [TheName].prototype.checkFulfillment = function(promise) {       
	                var now = ++this.now;                                        
	                if (now === [TheTotal]) {                                    
	                    if (this.asyncNeeded) {                                  
	                        async.invoke(this._callFunction, this, promise);     
	                    } else {                                                 
	                        this._callFunction(promise);                         
	                    }                                                        
	                                                                             
	                }                                                            
	            };                                                               
	                                                                             
	            [TheName].prototype._resultCancelled = function() {              
	                [CancellationCode]                                           
	            };                                                               
	                                                                             
	            return [TheName];                                                
	        }(tryCatch, errorObj, Promise, async);                               
	        `;
        return q = q.replace(/\[TheName\]/g, j).replace(/\[TheTotal\]/g, h).replace(/\[ThePassedArguments\]/g, F).replace(/\[TheProperties\]/g, U).replace(/\[CancellationCode\]/g, E), new Function("tryCatch", "errorObj", "Promise", "async", q)(s, u, e, i);
      }, b = [], d = [], l = [], g = 0; g < 8; ++g)
        b.push(m(g + 1)), d.push(p(g + 1)), l.push(y(g + 1));
      f = function(h) {
        this._reject(h);
      };
    }
    e.join = function() {
      var h = arguments.length - 1, D;
      if (h > 0 && typeof arguments[h] == "function" && (D = arguments[h], h <= 8 && o)) {
        var _ = new e(r);
        _._captureStackTrace();
        for (var w = b[h - 1], U = new w(D), E = d, F = 0; F < h; ++F) {
          var j = n(arguments[F], _);
          if (j instanceof e) {
            j = j._target();
            var q = j._bitField;
            q & 50397184 ? q & 33554432 ? E[F].call(
              _,
              j._value(),
              U
            ) : q & 16777216 ? _._reject(j._reason()) : _._cancel() : (j._then(
              E[F],
              f,
              void 0,
              _,
              U
            ), l[F](j, U), U.asyncNeeded = !1);
          } else
            E[F].call(_, j, U);
        }
        if (!_._isFateSealed()) {
          if (U.asyncNeeded) {
            var Y = a();
            Y !== null && (U.fn = c.domainBind(Y, U.fn));
          }
          _._setAsyncGuaranteed(), _._setOnCancel(U);
        }
        return _;
      }
      for (var oe = arguments.length, T = new Array(oe), P = 0; P < oe; ++P)
        T[P] = arguments[P];
      D && T.pop();
      var _ = new t(T).promise();
      return D !== void 0 ? _.spread(D) : _;
    };
  }), ha;
}
var pa, Jc;
function gp() {
  return Jc || (Jc = 1, pa = function(e, t, n, r, i, a) {
    var c = e._getDomain, o = ke(), s = o.tryCatch, u = o.errorObj, f = e._async;
    function p(m, b, d, l) {
      this.constructor$(m), this._promise._captureStackTrace();
      var g = c();
      this._callback = g === null ? b : o.domainBind(g, b), this._preservedValues = l === i ? new Array(this.length()) : null, this._limit = d, this._inFlight = 0, this._queue = [], f.invoke(this._asyncInit, this, void 0);
    }
    o.inherits(p, t), p.prototype._asyncInit = function() {
      this._init$(void 0, -2);
    }, p.prototype._init = function() {
    }, p.prototype._promiseFulfilled = function(m, b) {
      var d = this._values, l = this.length(), g = this._preservedValues, h = this._limit;
      if (b < 0) {
        if (b = b * -1 - 1, d[b] = m, h >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved()))
          return !0;
      } else {
        if (h >= 1 && this._inFlight >= h)
          return d[b] = m, this._queue.push(b), !1;
        g !== null && (g[b] = m);
        var D = this._promise, w = this._callback, U = D._boundValue();
        D._pushContext();
        var E = s(w).call(U, m, b, l), F = D._popContext();
        if (a.checkForgottenReturns(
          E,
          F,
          g !== null ? "Promise.filter" : "Promise.map",
          D
        ), E === u)
          return this._reject(E.e), !0;
        var j = r(E, this._promise);
        if (j instanceof e) {
          j = j._target();
          var q = j._bitField;
          if (q & 50397184)
            if (q & 33554432)
              E = j._value();
            else
              return q & 16777216 ? (this._reject(j._reason()), !0) : (this._cancel(), !0);
          else
            return h >= 1 && this._inFlight++, d[b] = j, j._proxy(this, (b + 1) * -1), !1;
        }
        d[b] = E;
      }
      var Y = ++this._totalResolved;
      return Y >= l ? (g !== null ? this._filter(d, g) : this._resolve(d), !0) : !1;
    }, p.prototype._drainQueue = function() {
      for (var m = this._queue, b = this._limit, d = this._values; m.length > 0 && this._inFlight < b; ) {
        if (this._isResolved())
          return;
        var l = m.pop();
        this._promiseFulfilled(d[l], l);
      }
    }, p.prototype._filter = function(m, b) {
      for (var d = b.length, l = new Array(d), g = 0, h = 0; h < d; ++h)
        m[h] && (l[g++] = b[h]);
      l.length = g, this._resolve(l);
    }, p.prototype.preservedValues = function() {
      return this._preservedValues;
    };
    function y(m, b, d, l) {
      if (typeof b != "function")
        return n("expecting a function but got " + o.classString(b));
      var g = 0;
      if (d !== void 0)
        if (typeof d == "object" && d !== null) {
          if (typeof d.concurrency != "number")
            return e.reject(
              new TypeError("'concurrency' must be a number but it is " + o.classString(d.concurrency))
            );
          g = d.concurrency;
        } else
          return e.reject(new TypeError(
            "options argument must be an object but it is " + o.classString(d)
          ));
      return g = typeof g == "number" && isFinite(g) && g >= 1 ? g : 0, new p(m, b, g, l).promise();
    }
    e.prototype.map = function(m, b) {
      return y(this, m, b, null);
    }, e.map = function(m, b, d, l) {
      return y(m, b, d, l);
    };
  }), pa;
}
var ga, es;
function mp() {
  if (es)
    return ga;
  es = 1;
  var e = Object.create;
  if (e) {
    var t = e(null), n = e(null);
    t[" size"] = n[" size"] = 0;
  }
  return ga = function(r) {
    var i = ke(), a = i.canEvaluate, c = i.isIdentifier, o, s;
    {
      var u = function(l) {
        return new Function("ensureMethod", `                                    
	        return function(obj) {                                               
	            'use strict'                                                     
	            var len = this.length;                                           
	            ensureMethod(obj, 'methodName');                                 
	            switch(len) {                                                    
	                case 1: return obj.methodName(this[0]);                      
	                case 2: return obj.methodName(this[0], this[1]);             
	                case 3: return obj.methodName(this[0], this[1], this[2]);    
	                case 0: return obj.methodName();                             
	                default:                                                     
	                    return obj.methodName.apply(obj, this);                  
	            }                                                                
	        };                                                                   
	        `.replace(/methodName/g, l))(y);
      }, f = function(l) {
        return new Function("obj", `                                             
	        'use strict';                                                        
	        return obj.propertyName;                                             
	        `.replace("propertyName", l));
      }, p = function(l, g, h) {
        var D = h[l];
        if (typeof D != "function") {
          if (!c(l))
            return null;
          if (D = g(l), h[l] = D, h[" size"]++, h[" size"] > 512) {
            for (var w = Object.keys(h), U = 0; U < 256; ++U)
              delete h[w[U]];
            h[" size"] = w.length - 256;
          }
        }
        return D;
      };
      o = function(l) {
        return p(l, u, t);
      }, s = function(l) {
        return p(l, f, n);
      };
    }
    function y(l, g) {
      var h;
      if (l != null && (h = l[g]), typeof h != "function") {
        var D = "Object " + i.classString(l) + " has no method '" + i.toString(g) + "'";
        throw new r.TypeError(D);
      }
      return h;
    }
    function m(l) {
      var g = this.pop(), h = y(l, g);
      return h.apply(l, this);
    }
    r.prototype.call = function(l) {
      for (var g = arguments.length, h = new Array(Math.max(g - 1, 0)), D = 1; D < g; ++D)
        h[D - 1] = arguments[D];
      if (a) {
        var w = o(l);
        if (w !== null)
          return this._then(
            w,
            void 0,
            void 0,
            h,
            void 0
          );
      }
      return h.push(l), this._then(m, void 0, void 0, h, void 0);
    };
    function b(l) {
      return l[this];
    }
    function d(l) {
      var g = +this;
      return g < 0 && (g = Math.max(0, g + l.length)), l[g];
    }
    r.prototype.get = function(l) {
      var g = typeof l == "number", h;
      if (g)
        h = d;
      else if (a) {
        var D = s(l);
        h = D !== null ? D : b;
      } else
        h = b;
      return this._then(h, void 0, void 0, l, void 0);
    };
  }, ga;
}
var ma, ts;
function bp() {
  return ts || (ts = 1, ma = function(e, t, n, r, i, a) {
    var c = ke(), o = Lt().TypeError, s = ke().inherits, u = c.errorObj, f = c.tryCatch, p = {};
    function y(D) {
      setTimeout(function() {
        throw D;
      }, 0);
    }
    function m(D) {
      var w = n(D);
      return w !== D && typeof D._isDisposable == "function" && typeof D._getDisposer == "function" && D._isDisposable() && w._setDisposable(D._getDisposer()), w;
    }
    function b(D, w) {
      var U = 0, E = D.length, F = new e(i);
      function j() {
        if (U >= E)
          return F._fulfill();
        var q = m(D[U++]);
        if (q instanceof e && q._isDisposable()) {
          try {
            q = n(
              q._getDisposer().tryDispose(w),
              D.promise
            );
          } catch (Y) {
            return y(Y);
          }
          if (q instanceof e)
            return q._then(
              j,
              y,
              null,
              null,
              null
            );
        }
        j();
      }
      return j(), F;
    }
    function d(D, w, U) {
      this._data = D, this._promise = w, this._context = U;
    }
    d.prototype.data = function() {
      return this._data;
    }, d.prototype.promise = function() {
      return this._promise;
    }, d.prototype.resource = function() {
      return this.promise().isFulfilled() ? this.promise().value() : p;
    }, d.prototype.tryDispose = function(D) {
      var w = this.resource(), U = this._context;
      U !== void 0 && U._pushContext();
      var E = w !== p ? this.doDispose(w, D) : null;
      return U !== void 0 && U._popContext(), this._promise._unsetDisposable(), this._data = null, E;
    }, d.isDisposer = function(D) {
      return D != null && typeof D.resource == "function" && typeof D.tryDispose == "function";
    };
    function l(D, w, U) {
      this.constructor$(D, w, U);
    }
    s(l, d), l.prototype.doDispose = function(D, w) {
      var U = this.data();
      return U.call(D, D, w);
    };
    function g(D) {
      return d.isDisposer(D) ? (this.resources[this.index]._setDisposable(D), D.promise()) : D;
    }
    function h(D) {
      this.length = D, this.promise = null, this[D - 1] = null;
    }
    h.prototype._resultCancelled = function() {
      for (var D = this.length, w = 0; w < D; ++w) {
        var U = this[w];
        U instanceof e && U.cancel();
      }
    }, e.using = function() {
      var D = arguments.length;
      if (D < 2)
        return t(
          "you must pass at least 2 arguments to Promise.using"
        );
      var w = arguments[D - 1];
      if (typeof w != "function")
        return t("expecting a function but got " + c.classString(w));
      var U, E = !0;
      D === 2 && Array.isArray(arguments[0]) ? (U = arguments[0], D = U.length, E = !1) : (U = arguments, D--);
      for (var F = new h(D), j = 0; j < D; ++j) {
        var q = U[j];
        if (d.isDisposer(q)) {
          var Y = q;
          q = q.promise(), q._setDisposable(Y);
        } else {
          var oe = n(q);
          oe instanceof e && (q = oe._then(g, null, null, {
            resources: F,
            index: j
          }, void 0));
        }
        F[j] = q;
      }
      for (var T = new Array(F.length), j = 0; j < T.length; ++j)
        T[j] = e.resolve(F[j]).reflect();
      var P = e.all(T).then(function(Q) {
        for (var S = 0; S < Q.length; ++S) {
          var R = Q[S];
          if (R.isRejected())
            return u.e = R.error(), u;
          if (!R.isFulfilled()) {
            P.cancel();
            return;
          }
          Q[S] = R.value();
        }
        _._pushContext(), w = f(w);
        var N = E ? w.apply(void 0, Q) : w(Q), I = _._popContext();
        return a.checkForgottenReturns(
          N,
          I,
          "Promise.using",
          _
        ), N;
      }), _ = P.lastly(function() {
        var Q = new e.PromiseInspection(P);
        return b(F, Q);
      });
      return F.promise = _, _._setOnCancel(F), _;
    }, e.prototype._setDisposable = function(D) {
      this._bitField = this._bitField | 131072, this._disposer = D;
    }, e.prototype._isDisposable = function() {
      return (this._bitField & 131072) > 0;
    }, e.prototype._getDisposer = function() {
      return this._disposer;
    }, e.prototype._unsetDisposable = function() {
      this._bitField = this._bitField & -131073, this._disposer = void 0;
    }, e.prototype.disposer = function(D) {
      if (typeof D == "function")
        return new l(D, this, r());
      throw new o();
    };
  }), ma;
}
var ba, ns;
function yp() {
  return ns || (ns = 1, ba = function(e, t, n) {
    var r = ke(), i = e.TimeoutError;
    function a(p) {
      this.handle = p;
    }
    a.prototype._resultCancelled = function() {
      clearTimeout(this.handle);
    };
    var c = function(p) {
      return o(+this).thenReturn(p);
    }, o = e.delay = function(p, y) {
      var m, b;
      return y !== void 0 ? (m = e.resolve(y)._then(c, null, null, p, void 0), n.cancellation() && y instanceof e && m._setOnCancel(y)) : (m = new e(t), b = setTimeout(function() {
        m._fulfill();
      }, +p), n.cancellation() && m._setOnCancel(new a(b)), m._captureStackTrace()), m._setAsyncGuaranteed(), m;
    };
    e.prototype.delay = function(p) {
      return o(p, this);
    };
    var s = function(p, y, m) {
      var b;
      typeof y != "string" ? y instanceof Error ? b = y : b = new i("operation timed out") : b = new i(y), r.markAsOriginatingFromRejection(b), p._attachExtraTrace(b), p._reject(b), m != null && m.cancel();
    };
    function u(p) {
      return clearTimeout(this.handle), p;
    }
    function f(p) {
      throw clearTimeout(this.handle), p;
    }
    e.prototype.timeout = function(p, y) {
      p = +p;
      var m, b, d = new a(setTimeout(function() {
        m.isPending() && s(m, y, b);
      }, p));
      return n.cancellation() ? (b = this.then(), m = b._then(
        u,
        f,
        void 0,
        d,
        void 0
      ), m._setOnCancel(d)) : m = this._then(
        u,
        f,
        void 0,
        d,
        void 0
      ), m;
    };
  }), ba;
}
var ya, rs;
function Dp() {
  return rs || (rs = 1, ya = function(e, t, n, r, i, a) {
    var c = Lt(), o = c.TypeError, s = ke(), u = s.errorObj, f = s.tryCatch, p = [];
    function y(b, d, l) {
      for (var g = 0; g < d.length; ++g) {
        l._pushContext();
        var h = f(d[g])(b);
        if (l._popContext(), h === u) {
          l._pushContext();
          var D = e.reject(u.e);
          return l._popContext(), D;
        }
        var w = r(h, l);
        if (w instanceof e)
          return w;
      }
      return null;
    }
    function m(b, d, l, g) {
      if (a.cancellation()) {
        var h = new e(n), D = this._finallyPromise = new e(n);
        this._promise = h.lastly(function() {
          return D;
        }), h._captureStackTrace(), h._setOnCancel(this);
      } else {
        var w = this._promise = new e(n);
        w._captureStackTrace();
      }
      this._stack = g, this._generatorFunction = b, this._receiver = d, this._generator = void 0, this._yieldHandlers = typeof l == "function" ? [l].concat(p) : p, this._yieldedPromise = null, this._cancellationPhase = !1;
    }
    s.inherits(m, i), m.prototype._isResolved = function() {
      return this._promise === null;
    }, m.prototype._cleanup = function() {
      this._promise = this._generator = null, a.cancellation() && this._finallyPromise !== null && (this._finallyPromise._fulfill(), this._finallyPromise = null);
    }, m.prototype._promiseCancelled = function() {
      if (!this._isResolved()) {
        var b = typeof this._generator.return < "u", d;
        if (b)
          this._promise._pushContext(), d = f(this._generator.return).call(
            this._generator,
            void 0
          ), this._promise._popContext();
        else {
          var l = new e.CancellationError(
            "generator .return() sentinel"
          );
          e.coroutine.returnSentinel = l, this._promise._attachExtraTrace(l), this._promise._pushContext(), d = f(this._generator.throw).call(
            this._generator,
            l
          ), this._promise._popContext();
        }
        this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(d);
      }
    }, m.prototype._promiseFulfilled = function(b) {
      this._yieldedPromise = null, this._promise._pushContext();
      var d = f(this._generator.next).call(this._generator, b);
      this._promise._popContext(), this._continue(d);
    }, m.prototype._promiseRejected = function(b) {
      this._yieldedPromise = null, this._promise._attachExtraTrace(b), this._promise._pushContext();
      var d = f(this._generator.throw).call(this._generator, b);
      this._promise._popContext(), this._continue(d);
    }, m.prototype._resultCancelled = function() {
      if (this._yieldedPromise instanceof e) {
        var b = this._yieldedPromise;
        this._yieldedPromise = null, b.cancel();
      }
    }, m.prototype.promise = function() {
      return this._promise;
    }, m.prototype._run = function() {
      this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0);
    }, m.prototype._continue = function(b) {
      var d = this._promise;
      if (b === u)
        return this._cleanup(), this._cancellationPhase ? d.cancel() : d._rejectCallback(b.e, !1);
      var l = b.value;
      if (b.done === !0)
        return this._cleanup(), this._cancellationPhase ? d.cancel() : d._resolveCallback(l);
      var g = r(l, this._promise);
      if (!(g instanceof e) && (g = y(
        g,
        this._yieldHandlers,
        this._promise
      ), g === null)) {
        this._promiseRejected(
          new o(
            `A value %s was yielded that could not be treated as a promise

    See http://goo.gl/MqrFmX

`.replace("%s", l) + `From coroutine:
` + this._stack.split(`
`).slice(1, -7).join(`
`)
          )
        );
        return;
      }
      g = g._target();
      var h = g._bitField;
      h & 50397184 ? h & 33554432 ? e._async.invoke(
        this._promiseFulfilled,
        this,
        g._value()
      ) : h & 16777216 ? e._async.invoke(
        this._promiseRejected,
        this,
        g._reason()
      ) : this._promiseCancelled() : (this._yieldedPromise = g, g._proxy(this, null));
    }, e.coroutine = function(b, d) {
      if (typeof b != "function")
        throw new o(`generatorFunction must be a function

    See http://goo.gl/MqrFmX
`);
      var l = Object(d).yieldHandler, g = m, h = new Error().stack;
      return function() {
        var D = b.apply(this, arguments), w = new g(
          void 0,
          void 0,
          l,
          h
        ), U = w.promise();
        return w._generator = D, w._promiseFulfilled(void 0), U;
      };
    }, e.coroutine.addYieldHandler = function(b) {
      if (typeof b != "function")
        throw new o("expecting a function but got " + s.classString(b));
      p.push(b);
    }, e.spawn = function(b) {
      if (a.deprecated("Promise.spawn()", "Promise.coroutine()"), typeof b != "function")
        return t(`generatorFunction must be a function

    See http://goo.gl/MqrFmX
`);
      var d = new m(b, this), l = d.promise();
      return d._run(e.spawn), l;
    };
  }), ya;
}
var Da, is;
function vp() {
  return is || (is = 1, Da = function(e) {
    var t = ke(), n = e._async, r = t.tryCatch, i = t.errorObj;
    function a(s, u) {
      var f = this;
      if (!t.isArray(s))
        return c.call(f, s, u);
      var p = r(u).apply(f._boundValue(), [null].concat(s));
      p === i && n.throwLater(p.e);
    }
    function c(s, u) {
      var f = this, p = f._boundValue(), y = s === void 0 ? r(u).call(p, null) : r(u).call(p, null, s);
      y === i && n.throwLater(y.e);
    }
    function o(s, u) {
      var f = this;
      if (!s) {
        var p = new Error(s + "");
        p.cause = s, s = p;
      }
      var y = r(u).call(f._boundValue(), s);
      y === i && n.throwLater(y.e);
    }
    e.prototype.asCallback = e.prototype.nodeify = function(s, u) {
      if (typeof s == "function") {
        var f = c;
        u !== void 0 && Object(u).spread && (f = a), this._then(
          f,
          o,
          void 0,
          this,
          s
        );
      }
      return this;
    };
  }), Da;
}
var va, as;
function xp() {
  return as || (as = 1, va = function(e, t) {
    var n = {}, r = ke(), i = Vu(), a = r.withAppended, c = r.maybeWrapAsError, o = r.canEvaluate, s = Lt().TypeError, u = "Async", f = { __isPromisified__: !0 }, p = [
      "arity",
      "length",
      "name",
      "arguments",
      "caller",
      "callee",
      "prototype",
      "__isPromisified__"
    ], y = new RegExp("^(?:" + p.join("|") + ")$"), m = function(P) {
      return r.isIdentifier(P) && P.charAt(0) !== "_" && P !== "constructor";
    };
    function b(P) {
      return !y.test(P);
    }
    function d(P) {
      try {
        return P.__isPromisified__ === !0;
      } catch {
        return !1;
      }
    }
    function l(P, _, Q) {
      var S = r.getDataPropertyOrDefault(
        P,
        _ + Q,
        f
      );
      return S ? d(S) : !1;
    }
    function g(P, _, Q) {
      for (var S = 0; S < P.length; S += 2) {
        var R = P[S];
        if (Q.test(R)) {
          for (var N = R.replace(Q, ""), I = 0; I < P.length; I += 2)
            if (P[I] === N)
              throw new s(`Cannot promisify an API that has normal methods with '%s'-suffix

    See http://goo.gl/MqrFmX
`.replace("%s", _));
        }
      }
    }
    function h(P, _, Q, S) {
      for (var R = r.inheritedDataKeys(P), N = [], I = 0; I < R.length; ++I) {
        var M = R[I], k = P[M], C = S === m ? !0 : m(M);
        typeof k == "function" && !d(k) && !l(P, M, _) && S(M, k, P, C) && N.push(M, k);
      }
      return g(N, _, Q), N;
    }
    var D = function(P) {
      return P.replace(/([$])/, "\\$");
    }, w;
    {
      var U = function(P) {
        for (var _ = [P], Q = Math.max(0, P - 1 - 3), S = P - 1; S >= Q; --S)
          _.push(S);
        for (var S = P + 1; S <= 3; ++S)
          _.push(S);
        return _;
      }, E = function(P) {
        return r.filledRange(P, "_arg", "");
      }, F = function(P) {
        return r.filledRange(
          Math.max(P, 3),
          "_arg",
          ""
        );
      }, j = function(P) {
        return typeof P.length == "number" ? Math.max(Math.min(P.length, 1024), 0) : 0;
      };
      w = function(P, _, Q, S, R, N) {
        var I = Math.max(0, j(S) - 1), M = U(I), k = typeof P == "string" || _ === n;
        function C(le) {
          var me = E(le).join(", "), ye = le > 0 ? ", " : "", $;
          return k ? $ = `ret = callback.call(this, {{args}}, nodeback); break;
` : $ = _ === void 0 ? `ret = callback({{args}}, nodeback); break;
` : `ret = callback.call(receiver, {{args}}, nodeback); break;
`, $.replace("{{args}}", me).replace(", ", ye);
        }
        function J() {
          for (var le = "", me = 0; me < M.length; ++me)
            le += "case " + M[me] + ":" + C(M[me]);
          return le += `                                                             
	        default:                                                             
	            var args = new Array(len + 1);                                   
	            var i = 0;                                                       
	            for (var i = 0; i < len; ++i) {                                  
	               args[i] = arguments[i];                                       
	            }                                                                
	            args[i] = nodeback;                                              
	            [CodeForCall]                                                    
	            break;                                                           
	        `.replace("[CodeForCall]", k ? `ret = callback.apply(this, args);
` : `ret = callback.apply(receiver, args);
`), le;
        }
        var ce = typeof P == "string" ? "this != null ? this['" + P + "'] : fn" : "fn", re = `'use strict';                                                
	        var ret = function (Parameters) {                                    
	            'use strict';                                                    
	            var len = arguments.length;                                      
	            var promise = new Promise(INTERNAL);                             
	            promise._captureStackTrace();                                    
	            var nodeback = nodebackForPromise(promise, ` + N + `);   
	            var ret;                                                         
	            var callback = tryCatch([GetFunctionCode]);                      
	            switch(len) {                                                    
	                [CodeForSwitchCase]                                          
	            }                                                                
	            if (ret === errorObj) {                                          
	                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);
	            }                                                                
	            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     
	            return promise;                                                  
	        };                                                                   
	        notEnumerableProp(ret, '__isPromisified__', true);                   
	        return ret;                                                          
	    `.replace("[CodeForSwitchCase]", J()).replace("[GetFunctionCode]", ce);
        return re = re.replace("Parameters", F(I)), new Function(
          "Promise",
          "fn",
          "receiver",
          "withAppended",
          "maybeWrapAsError",
          "nodebackForPromise",
          "tryCatch",
          "errorObj",
          "notEnumerableProp",
          "INTERNAL",
          re
        )(
          e,
          S,
          _,
          a,
          c,
          i,
          r.tryCatch,
          r.errorObj,
          r.notEnumerableProp,
          t
        );
      };
    }
    function q(P, _, Q, S, R, N) {
      var I = function() {
        return this;
      }(), M = P;
      typeof M == "string" && (P = S);
      function k() {
        var C = _;
        _ === n && (C = this);
        var J = new e(t);
        J._captureStackTrace();
        var ce = typeof M == "string" && this !== I ? this[M] : P, re = i(J, N);
        try {
          ce.apply(C, a(arguments, re));
        } catch (le) {
          J._rejectCallback(c(le), !0, !0);
        }
        return J._isFateSealed() || J._setAsyncGuaranteed(), J;
      }
      return r.notEnumerableProp(k, "__isPromisified__", !0), k;
    }
    var Y = o ? w : q;
    function oe(P, _, Q, S, R) {
      for (var N = new RegExp(D(_) + "$"), I = h(P, _, N, Q), M = 0, k = I.length; M < k; M += 2) {
        var C = I[M], J = I[M + 1], ce = C + _;
        if (S === Y)
          P[ce] = Y(C, n, C, J, _, R);
        else {
          var re = S(J, function() {
            return Y(
              C,
              n,
              C,
              J,
              _,
              R
            );
          });
          r.notEnumerableProp(re, "__isPromisified__", !0), P[ce] = re;
        }
      }
      return r.toFastProperties(P), P;
    }
    function T(P, _, Q) {
      return Y(
        P,
        _,
        void 0,
        P,
        null,
        Q
      );
    }
    e.promisify = function(P, _) {
      if (typeof P != "function")
        throw new s("expecting a function but got " + r.classString(P));
      if (d(P))
        return P;
      _ = Object(_);
      var Q = _.context === void 0 ? n : _.context, S = !!_.multiArgs, R = T(P, Q, S);
      return r.copyDescriptors(P, R, b), R;
    }, e.promisifyAll = function(P, _) {
      if (typeof P != "function" && typeof P != "object")
        throw new s(`the target of promisifyAll must be an object or a function

    See http://goo.gl/MqrFmX
`);
      _ = Object(_);
      var Q = !!_.multiArgs, S = _.suffix;
      typeof S != "string" && (S = u);
      var R = _.filter;
      typeof R != "function" && (R = m);
      var N = _.promisifier;
      if (typeof N != "function" && (N = Y), !r.isIdentifier(S))
        throw new RangeError(`suffix must be a valid identifier

    See http://goo.gl/MqrFmX
`);
      for (var I = r.inheritedDataKeys(P), M = 0; M < I.length; ++M) {
        var k = P[I[M]];
        I[M] !== "constructor" && r.isClass(k) && (oe(
          k.prototype,
          S,
          R,
          N,
          Q
        ), oe(k, S, R, N, Q));
      }
      return oe(P, S, R, N, Q);
    };
  }), va;
}
var xa, os;
function _p() {
  return os || (os = 1, xa = function(e, t, n, r) {
    var i = ke(), a = i.isObject, c = _n(), o;
    typeof Map == "function" && (o = Map);
    var s = function() {
      var y = 0, m = 0;
      function b(d, l) {
        this[y] = d, this[y + m] = l, y++;
      }
      return function(l) {
        m = l.size, y = 0;
        var g = new Array(l.size * 2);
        return l.forEach(b, g), g;
      };
    }(), u = function(y) {
      for (var m = new o(), b = y.length / 2 | 0, d = 0; d < b; ++d) {
        var l = y[b + d], g = y[d];
        m.set(l, g);
      }
      return m;
    };
    function f(y) {
      var m = !1, b;
      if (o !== void 0 && y instanceof o)
        b = s(y), m = !0;
      else {
        var d = c.keys(y), l = d.length;
        b = new Array(l * 2);
        for (var g = 0; g < l; ++g) {
          var h = d[g];
          b[g] = y[h], b[g + l] = h;
        }
      }
      this.constructor$(b), this._isMap = m, this._init$(void 0, -3);
    }
    i.inherits(f, t), f.prototype._init = function() {
    }, f.prototype._promiseFulfilled = function(y, m) {
      this._values[m] = y;
      var b = ++this._totalResolved;
      if (b >= this._length) {
        var d;
        if (this._isMap)
          d = u(this._values);
        else {
          d = {};
          for (var l = this.length(), g = 0, h = this.length(); g < h; ++g)
            d[this._values[g + l]] = this._values[g];
        }
        return this._resolve(d), !0;
      }
      return !1;
    }, f.prototype.shouldCopyValues = function() {
      return !1;
    }, f.prototype.getActualLength = function(y) {
      return y >> 1;
    };
    function p(y) {
      var m, b = n(y);
      if (a(b))
        b instanceof e ? m = b._then(
          e.props,
          void 0,
          void 0,
          void 0,
          void 0
        ) : m = new f(b).promise();
      else
        return r(`cannot await properties of a non-object

    See http://goo.gl/MqrFmX
`);
      return b instanceof e && m._propagateFrom(b, 2), m;
    }
    e.prototype.props = function() {
      return p(this);
    }, e.props = function(y) {
      return p(y);
    };
  }), xa;
}
var _a, cs;
function Up() {
  return cs || (cs = 1, _a = function(e, t, n, r) {
    var i = ke(), a = function(o) {
      return o.then(function(s) {
        return c(s, o);
      });
    };
    function c(o, s) {
      var u = n(o);
      if (u instanceof e)
        return a(u);
      if (o = i.asArray(o), o === null)
        return r("expecting an array or an iterable object but got " + i.classString(o));
      var f = new e(t);
      s !== void 0 && f._propagateFrom(s, 3);
      for (var p = f._fulfill, y = f._reject, m = 0, b = o.length; m < b; ++m) {
        var d = o[m];
        d === void 0 && !(m in o) || e.cast(d)._then(p, y, void 0, f, null);
      }
      return f;
    }
    e.race = function(o) {
      return c(o, void 0);
    }, e.prototype.race = function() {
      return c(this, void 0);
    };
  }), _a;
}
var Ua, ss;
function wp() {
  return ss || (ss = 1, Ua = function(e, t, n, r, i, a) {
    var c = e._getDomain, o = ke(), s = o.tryCatch;
    function u(b, d, l, g) {
      this.constructor$(b);
      var h = c();
      this._fn = h === null ? d : o.domainBind(h, d), l !== void 0 && (l = e.resolve(l), l._attachCancellationCallback(this)), this._initialValue = l, this._currentCancellable = null, g === i ? this._eachValues = Array(this._length) : g === 0 ? this._eachValues = null : this._eachValues = void 0, this._promise._captureStackTrace(), this._init$(void 0, -5);
    }
    o.inherits(u, t), u.prototype._gotAccum = function(b) {
      this._eachValues !== void 0 && this._eachValues !== null && b !== i && this._eachValues.push(b);
    }, u.prototype._eachComplete = function(b) {
      return this._eachValues !== null && this._eachValues.push(b), this._eachValues;
    }, u.prototype._init = function() {
    }, u.prototype._resolveEmptyArray = function() {
      this._resolve(this._eachValues !== void 0 ? this._eachValues : this._initialValue);
    }, u.prototype.shouldCopyValues = function() {
      return !1;
    }, u.prototype._resolve = function(b) {
      this._promise._resolveCallback(b), this._values = null;
    }, u.prototype._resultCancelled = function(b) {
      if (b === this._initialValue)
        return this._cancel();
      this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof e && this._currentCancellable.cancel(), this._initialValue instanceof e && this._initialValue.cancel());
    }, u.prototype._iterate = function(b) {
      this._values = b;
      var d, l, g = b.length;
      if (this._initialValue !== void 0 ? (d = this._initialValue, l = 0) : (d = e.resolve(b[0]), l = 1), this._currentCancellable = d, !d.isRejected())
        for (; l < g; ++l) {
          var h = {
            accum: null,
            value: b[l],
            index: l,
            length: g,
            array: this
          };
          d = d._then(y, void 0, void 0, h, void 0);
        }
      this._eachValues !== void 0 && (d = d._then(this._eachComplete, void 0, void 0, this, void 0)), d._then(f, f, void 0, d, this);
    }, e.prototype.reduce = function(b, d) {
      return p(this, b, d, null);
    }, e.reduce = function(b, d, l, g) {
      return p(b, d, l, g);
    };
    function f(b, d) {
      this.isFulfilled() ? d._resolve(b) : d._reject(b);
    }
    function p(b, d, l, g) {
      if (typeof d != "function")
        return n("expecting a function but got " + o.classString(d));
      var h = new u(b, d, l, g);
      return h.promise();
    }
    function y(b) {
      this.accum = b, this.array._gotAccum(b);
      var d = r(this.value, this.array._promise);
      return d instanceof e ? (this.array._currentCancellable = d, d._then(m, void 0, void 0, this, void 0)) : m.call(this, d);
    }
    function m(b) {
      var d = this.array, l = d._promise, g = s(d._fn);
      l._pushContext();
      var h;
      d._eachValues !== void 0 ? h = g.call(l._boundValue(), b, this.index, this.length) : h = g.call(
        l._boundValue(),
        this.accum,
        b,
        this.index,
        this.length
      ), h instanceof e && (d._currentCancellable = h);
      var D = l._popContext();
      return a.checkForgottenReturns(
        h,
        D,
        d._eachValues !== void 0 ? "Promise.each" : "Promise.reduce",
        l
      ), h;
    }
  }), Ua;
}
var wa, us;
function Tp() {
  return us || (us = 1, wa = function(e, t, n) {
    var r = e.PromiseInspection, i = ke();
    function a(c) {
      this.constructor$(c);
    }
    i.inherits(a, t), a.prototype._promiseResolved = function(c, o) {
      this._values[c] = o;
      var s = ++this._totalResolved;
      return s >= this._length ? (this._resolve(this._values), !0) : !1;
    }, a.prototype._promiseFulfilled = function(c, o) {
      var s = new r();
      return s._bitField = 33554432, s._settledValueField = c, this._promiseResolved(o, s);
    }, a.prototype._promiseRejected = function(c, o) {
      var s = new r();
      return s._bitField = 16777216, s._settledValueField = c, this._promiseResolved(o, s);
    }, e.settle = function(c) {
      return n.deprecated(".settle()", ".reflect()"), new a(c).promise();
    }, e.prototype.settle = function() {
      return e.settle(this);
    };
  }), wa;
}
var Ta, ds;
function Ep() {
  return ds || (ds = 1, Ta = function(e, t, n) {
    var r = ke(), i = Lt().RangeError, a = Lt().AggregateError, c = r.isArray, o = {};
    function s(f) {
      this.constructor$(f), this._howMany = 0, this._unwrap = !1, this._initialized = !1;
    }
    r.inherits(s, t), s.prototype._init = function() {
      if (this._initialized) {
        if (this._howMany === 0) {
          this._resolve([]);
          return;
        }
        this._init$(void 0, -5);
        var f = c(this._values);
        !this._isResolved() && f && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()));
      }
    }, s.prototype.init = function() {
      this._initialized = !0, this._init();
    }, s.prototype.setUnwrap = function() {
      this._unwrap = !0;
    }, s.prototype.howMany = function() {
      return this._howMany;
    }, s.prototype.setHowMany = function(f) {
      this._howMany = f;
    }, s.prototype._promiseFulfilled = function(f) {
      return this._addFulfilled(f), this._fulfilled() === this.howMany() ? (this._values.length = this.howMany(), this.howMany() === 1 && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), !0) : !1;
    }, s.prototype._promiseRejected = function(f) {
      return this._addRejected(f), this._checkOutcome();
    }, s.prototype._promiseCancelled = function() {
      return this._values instanceof e || this._values == null ? this._cancel() : (this._addRejected(o), this._checkOutcome());
    }, s.prototype._checkOutcome = function() {
      if (this.howMany() > this._canPossiblyFulfill()) {
        for (var f = new a(), p = this.length(); p < this._values.length; ++p)
          this._values[p] !== o && f.push(this._values[p]);
        return f.length > 0 ? this._reject(f) : this._cancel(), !0;
      }
      return !1;
    }, s.prototype._fulfilled = function() {
      return this._totalResolved;
    }, s.prototype._rejected = function() {
      return this._values.length - this.length();
    }, s.prototype._addRejected = function(f) {
      this._values.push(f);
    }, s.prototype._addFulfilled = function(f) {
      this._values[this._totalResolved++] = f;
    }, s.prototype._canPossiblyFulfill = function() {
      return this.length() - this._rejected();
    }, s.prototype._getRangeError = function(f) {
      var p = "Input array must contain at least " + this._howMany + " items but contains only " + f + " items";
      return new i(p);
    }, s.prototype._resolveEmptyArray = function() {
      this._reject(this._getRangeError(0));
    };
    function u(f, p) {
      if ((p | 0) !== p || p < 0)
        return n(`expecting a positive integer

    See http://goo.gl/MqrFmX
`);
      var y = new s(f), m = y.promise();
      return y.setHowMany(p), y.init(), m;
    }
    e.some = function(f, p) {
      return u(f, p);
    }, e.prototype.some = function(f) {
      return u(this, f);
    }, e._SomePromiseArray = s;
  }), Ta;
}
var Ea, ls;
function Ap() {
  return ls || (ls = 1, Ea = function(e, t) {
    var n = e.map;
    e.prototype.filter = function(r, i) {
      return n(this, r, i, t);
    }, e.filter = function(r, i, a) {
      return n(r, i, a, t);
    };
  }), Ea;
}
var Aa, fs;
function Cp() {
  return fs || (fs = 1, Aa = function(e, t) {
    var n = e.reduce, r = e.all;
    function i() {
      return r(this);
    }
    function a(c, o) {
      return n(c, o, t, t);
    }
    e.prototype.each = function(c) {
      return n(this, c, t, 0)._then(i, void 0, void 0, this, void 0);
    }, e.prototype.mapSeries = function(c) {
      return n(this, c, t, t);
    }, e.each = function(c, o) {
      return n(c, o, t, 0)._then(i, void 0, void 0, c, void 0);
    }, e.mapSeries = a;
  }), Aa;
}
var Ca, hs;
function Fp() {
  return hs || (hs = 1, Ca = function(e) {
    var t = e._SomePromiseArray;
    function n(r) {
      var i = new t(r), a = i.promise();
      return i.setHowMany(1), i.setUnwrap(), i.init(), a;
    }
    e.any = function(r) {
      return n(r);
    }, e.prototype.any = function() {
      return n(this);
    };
  }), Ca;
}
(function(e) {
  e.exports = function() {
    var t = function() {
      return new y(`circular promise resolution chain

    See http://goo.gl/MqrFmX
`);
    }, n = function() {
      return new T.PromiseInspection(this._target());
    }, r = function(S) {
      return T.reject(new y(S));
    };
    function i() {
    }
    var a = {}, c = ke(), o;
    c.isNode ? o = function() {
      var S = process.domain;
      return S === void 0 && (S = null), S;
    } : o = function() {
      return null;
    }, c.notEnumerableProp(T, "_getDomain", o);
    var s = _n(), u = np(), f = new u();
    s.defineProperty(T, "_async", { value: f });
    var p = Lt(), y = T.TypeError = p.TypeError;
    T.RangeError = p.RangeError;
    var m = T.CancellationError = p.CancellationError;
    T.TimeoutError = p.TimeoutError, T.OperationalError = p.OperationalError, T.RejectionError = p.OperationalError, T.AggregateError = p.AggregateError;
    var b = function() {
    }, d = {}, l = {}, g = rp()(T, b), h = ip()(
      T,
      b,
      g,
      r,
      i
    ), D = ap()(T), w = D.create, U = op()(T, D);
    U.CapturedTrace;
    var E = cp()(T, g), F = sp()(l), j = Vu(), q = c.errorObj, Y = c.tryCatch;
    function oe(S, R) {
      if (typeof R != "function")
        throw new y("expecting a function but got " + c.classString(R));
      if (S.constructor !== T)
        throw new y(`the promise constructor cannot be invoked directly

    See http://goo.gl/MqrFmX
`);
    }
    function T(S) {
      this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, S !== b && (oe(this, S), this._resolveFromExecutor(S)), this._promiseCreated(), this._fireEvent("promiseCreated", this);
    }
    T.prototype.toString = function() {
      return "[object Promise]";
    }, T.prototype.caught = T.prototype.catch = function(S) {
      var R = arguments.length;
      if (R > 1) {
        var N = new Array(R - 1), I = 0, M;
        for (M = 0; M < R - 1; ++M) {
          var k = arguments[M];
          if (c.isObject(k))
            N[I++] = k;
          else
            return r("expecting an object but got A catch statement predicate " + c.classString(k));
        }
        return N.length = I, S = arguments[M], this.then(void 0, F(N, S, this));
      }
      return this.then(void 0, S);
    }, T.prototype.reflect = function() {
      return this._then(
        n,
        n,
        void 0,
        this,
        void 0
      );
    }, T.prototype.then = function(S, R) {
      if (U.warnings() && arguments.length > 0 && typeof S != "function" && typeof R != "function") {
        var N = ".then() only accepts functions but was passed: " + c.classString(S);
        arguments.length > 1 && (N += ", " + c.classString(R)), this._warn(N);
      }
      return this._then(S, R, void 0, void 0, void 0);
    }, T.prototype.done = function(S, R) {
      var N = this._then(S, R, void 0, void 0, void 0);
      N._setIsFinal();
    }, T.prototype.spread = function(S) {
      return typeof S != "function" ? r("expecting a function but got " + c.classString(S)) : this.all()._then(S, void 0, void 0, d, void 0);
    }, T.prototype.toJSON = function() {
      var S = {
        isFulfilled: !1,
        isRejected: !1,
        fulfillmentValue: void 0,
        rejectionReason: void 0
      };
      return this.isFulfilled() ? (S.fulfillmentValue = this.value(), S.isFulfilled = !0) : this.isRejected() && (S.rejectionReason = this.reason(), S.isRejected = !0), S;
    }, T.prototype.all = function() {
      return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new h(this).promise();
    }, T.prototype.error = function(S) {
      return this.caught(c.originatesFromRejection, S);
    }, T.getNewLibraryCopy = e.exports, T.is = function(S) {
      return S instanceof T;
    }, T.fromNode = T.fromCallback = function(S) {
      var R = new T(b);
      R._captureStackTrace();
      var N = arguments.length > 1 ? !!Object(arguments[1]).multiArgs : !1, I = Y(S)(j(R, N));
      return I === q && R._rejectCallback(I.e, !0), R._isFateSealed() || R._setAsyncGuaranteed(), R;
    }, T.all = function(S) {
      return new h(S).promise();
    }, T.cast = function(S) {
      var R = g(S);
      return R instanceof T || (R = new T(b), R._captureStackTrace(), R._setFulfilled(), R._rejectionHandler0 = S), R;
    }, T.resolve = T.fulfilled = T.cast, T.reject = T.rejected = function(S) {
      var R = new T(b);
      return R._captureStackTrace(), R._rejectCallback(S, !0), R;
    }, T.setScheduler = function(S) {
      if (typeof S != "function")
        throw new y("expecting a function but got " + c.classString(S));
      return f.setScheduler(S);
    }, T.prototype._then = function(S, R, N, I, M) {
      var k = M !== void 0, C = k ? M : new T(b), J = this._target(), ce = J._bitField;
      k || (C._propagateFrom(this, 3), C._captureStackTrace(), I === void 0 && this._bitField & 2097152 && (ce & 50397184 ? I = this._boundValue() : I = J === this ? void 0 : this._boundTo), this._fireEvent("promiseChained", this, C));
      var re = o();
      if (ce & 50397184) {
        var le, me, ye = J._settlePromiseCtx;
        ce & 33554432 ? (me = J._rejectionHandler0, le = S) : ce & 16777216 ? (me = J._fulfillmentHandler0, le = R, J._unsetRejectionIsUnhandled()) : (ye = J._settlePromiseLateCancellationObserver, me = new m("late cancellation observer"), J._attachExtraTrace(me), le = R), f.invoke(ye, J, {
          handler: re === null ? le : typeof le == "function" && c.domainBind(re, le),
          promise: C,
          receiver: I,
          value: me
        });
      } else
        J._addCallbacks(S, R, C, I, re);
      return C;
    }, T.prototype._length = function() {
      return this._bitField & 65535;
    }, T.prototype._isFateSealed = function() {
      return (this._bitField & 117506048) !== 0;
    }, T.prototype._isFollowing = function() {
      return (this._bitField & 67108864) === 67108864;
    }, T.prototype._setLength = function(S) {
      this._bitField = this._bitField & -65536 | S & 65535;
    }, T.prototype._setFulfilled = function() {
      this._bitField = this._bitField | 33554432, this._fireEvent("promiseFulfilled", this);
    }, T.prototype._setRejected = function() {
      this._bitField = this._bitField | 16777216, this._fireEvent("promiseRejected", this);
    }, T.prototype._setFollowing = function() {
      this._bitField = this._bitField | 67108864, this._fireEvent("promiseResolved", this);
    }, T.prototype._setIsFinal = function() {
      this._bitField = this._bitField | 4194304;
    }, T.prototype._isFinal = function() {
      return (this._bitField & 4194304) > 0;
    }, T.prototype._unsetCancelled = function() {
      this._bitField = this._bitField & -65537;
    }, T.prototype._setCancelled = function() {
      this._bitField = this._bitField | 65536, this._fireEvent("promiseCancelled", this);
    }, T.prototype._setWillBeCancelled = function() {
      this._bitField = this._bitField | 8388608;
    }, T.prototype._setAsyncGuaranteed = function() {
      f.hasCustomScheduler() || (this._bitField = this._bitField | 134217728);
    }, T.prototype._receiverAt = function(S) {
      var R = S === 0 ? this._receiver0 : this[S * 4 - 4 + 3];
      if (R !== a)
        return R === void 0 && this._isBound() ? this._boundValue() : R;
    }, T.prototype._promiseAt = function(S) {
      return this[S * 4 - 4 + 2];
    }, T.prototype._fulfillmentHandlerAt = function(S) {
      return this[S * 4 - 4 + 0];
    }, T.prototype._rejectionHandlerAt = function(S) {
      return this[S * 4 - 4 + 1];
    }, T.prototype._boundValue = function() {
    }, T.prototype._migrateCallback0 = function(S) {
      S._bitField;
      var R = S._fulfillmentHandler0, N = S._rejectionHandler0, I = S._promise0, M = S._receiverAt(0);
      M === void 0 && (M = a), this._addCallbacks(R, N, I, M, null);
    }, T.prototype._migrateCallbackAt = function(S, R) {
      var N = S._fulfillmentHandlerAt(R), I = S._rejectionHandlerAt(R), M = S._promiseAt(R), k = S._receiverAt(R);
      k === void 0 && (k = a), this._addCallbacks(N, I, M, k, null);
    }, T.prototype._addCallbacks = function(S, R, N, I, M) {
      var k = this._length();
      if (k >= 65535 - 4 && (k = 0, this._setLength(0)), k === 0)
        this._promise0 = N, this._receiver0 = I, typeof S == "function" && (this._fulfillmentHandler0 = M === null ? S : c.domainBind(M, S)), typeof R == "function" && (this._rejectionHandler0 = M === null ? R : c.domainBind(M, R));
      else {
        var C = k * 4 - 4;
        this[C + 2] = N, this[C + 3] = I, typeof S == "function" && (this[C + 0] = M === null ? S : c.domainBind(M, S)), typeof R == "function" && (this[C + 1] = M === null ? R : c.domainBind(M, R));
      }
      return this._setLength(k + 1), k;
    }, T.prototype._proxy = function(S, R) {
      this._addCallbacks(void 0, void 0, R, S, null);
    }, T.prototype._resolveCallback = function(S, R) {
      if (!(this._bitField & 117506048)) {
        if (S === this)
          return this._rejectCallback(t(), !1);
        var N = g(S, this);
        if (!(N instanceof T))
          return this._fulfill(S);
        R && this._propagateFrom(N, 2);
        var I = N._target();
        if (I === this) {
          this._reject(t());
          return;
        }
        var M = I._bitField;
        if (M & 50397184)
          if (M & 33554432)
            this._fulfill(I._value());
          else if (M & 16777216)
            this._reject(I._reason());
          else {
            var J = new m("late cancellation observer");
            I._attachExtraTrace(J), this._reject(J);
          }
        else {
          var k = this._length();
          k > 0 && I._migrateCallback0(this);
          for (var C = 1; C < k; ++C)
            I._migrateCallbackAt(this, C);
          this._setFollowing(), this._setLength(0), this._setFollowee(I);
        }
      }
    }, T.prototype._rejectCallback = function(S, R, N) {
      var I = c.ensureErrorObject(S), M = I === S;
      if (!M && !N && U.warnings()) {
        var k = "a promise was rejected with a non-error: " + c.classString(S);
        this._warn(k, !0);
      }
      this._attachExtraTrace(I, R ? M : !1), this._reject(S);
    }, T.prototype._resolveFromExecutor = function(S) {
      var R = this;
      this._captureStackTrace(), this._pushContext();
      var N = !0, I = this._execute(S, function(M) {
        R._resolveCallback(M);
      }, function(M) {
        R._rejectCallback(M, N);
      });
      N = !1, this._popContext(), I !== void 0 && R._rejectCallback(I, !0);
    }, T.prototype._settlePromiseFromHandler = function(S, R, N, I) {
      var M = I._bitField;
      if (!(M & 65536)) {
        I._pushContext();
        var k;
        R === d ? !N || typeof N.length != "number" ? (k = q, k.e = new y("cannot .spread() a non-array: " + c.classString(N))) : k = Y(S).apply(this._boundValue(), N) : k = Y(S).call(R, N);
        var C = I._popContext();
        M = I._bitField, !(M & 65536) && (k === l ? I._reject(N) : k === q ? I._rejectCallback(k.e, !1) : (U.checkForgottenReturns(k, C, "", I, this), I._resolveCallback(k)));
      }
    }, T.prototype._target = function() {
      for (var S = this; S._isFollowing(); )
        S = S._followee();
      return S;
    }, T.prototype._followee = function() {
      return this._rejectionHandler0;
    }, T.prototype._setFollowee = function(S) {
      this._rejectionHandler0 = S;
    }, T.prototype._settlePromise = function(S, R, N, I) {
      var M = S instanceof T, k = this._bitField, C = (k & 134217728) !== 0;
      k & 65536 ? (M && S._invokeInternalOnCancel(), N instanceof E && N.isFinallyHandler() ? (N.cancelPromise = S, Y(R).call(N, I) === q && S._reject(q.e)) : R === n ? S._fulfill(n.call(N)) : N instanceof i ? N._promiseCancelled(S) : M || S instanceof h ? S._cancel() : N.cancel()) : typeof R == "function" ? M ? (C && S._setAsyncGuaranteed(), this._settlePromiseFromHandler(R, N, I, S)) : R.call(N, I, S) : N instanceof i ? N._isResolved() || (k & 33554432 ? N._promiseFulfilled(I, S) : N._promiseRejected(I, S)) : M && (C && S._setAsyncGuaranteed(), k & 33554432 ? S._fulfill(I) : S._reject(I));
    }, T.prototype._settlePromiseLateCancellationObserver = function(S) {
      var R = S.handler, N = S.promise, I = S.receiver, M = S.value;
      typeof R == "function" ? N instanceof T ? this._settlePromiseFromHandler(R, I, M, N) : R.call(I, M, N) : N instanceof T && N._reject(M);
    }, T.prototype._settlePromiseCtx = function(S) {
      this._settlePromise(S.promise, S.handler, S.receiver, S.value);
    }, T.prototype._settlePromise0 = function(S, R, N) {
      var I = this._promise0, M = this._receiverAt(0);
      this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(I, S, M, R);
    }, T.prototype._clearCallbackDataAtIndex = function(S) {
      var R = S * 4 - 4;
      this[R + 2] = this[R + 3] = this[R + 0] = this[R + 1] = void 0;
    }, T.prototype._fulfill = function(S) {
      var R = this._bitField;
      if (!((R & 117506048) >>> 16)) {
        if (S === this) {
          var N = t();
          return this._attachExtraTrace(N), this._reject(N);
        }
        this._setFulfilled(), this._rejectionHandler0 = S, (R & 65535) > 0 && (R & 134217728 ? this._settlePromises() : f.settlePromises(this));
      }
    }, T.prototype._reject = function(S) {
      var R = this._bitField;
      if (!((R & 117506048) >>> 16)) {
        if (this._setRejected(), this._fulfillmentHandler0 = S, this._isFinal())
          return f.fatalError(S, c.isNode);
        (R & 65535) > 0 ? f.settlePromises(this) : this._ensurePossibleRejectionHandled();
      }
    }, T.prototype._fulfillPromises = function(S, R) {
      for (var N = 1; N < S; N++) {
        var I = this._fulfillmentHandlerAt(N), M = this._promiseAt(N), k = this._receiverAt(N);
        this._clearCallbackDataAtIndex(N), this._settlePromise(M, I, k, R);
      }
    }, T.prototype._rejectPromises = function(S, R) {
      for (var N = 1; N < S; N++) {
        var I = this._rejectionHandlerAt(N), M = this._promiseAt(N), k = this._receiverAt(N);
        this._clearCallbackDataAtIndex(N), this._settlePromise(M, I, k, R);
      }
    }, T.prototype._settlePromises = function() {
      var S = this._bitField, R = S & 65535;
      if (R > 0) {
        if (S & 16842752) {
          var N = this._fulfillmentHandler0;
          this._settlePromise0(this._rejectionHandler0, N, S), this._rejectPromises(R, N);
        } else {
          var I = this._rejectionHandler0;
          this._settlePromise0(this._fulfillmentHandler0, I, S), this._fulfillPromises(R, I);
        }
        this._setLength(0);
      }
      this._clearCancellationData();
    }, T.prototype._settledValue = function() {
      var S = this._bitField;
      if (S & 33554432)
        return this._rejectionHandler0;
      if (S & 16777216)
        return this._fulfillmentHandler0;
    };
    function P(S) {
      this.promise._resolveCallback(S);
    }
    function _(S) {
      this.promise._rejectCallback(S, !1);
    }
    T.defer = T.pending = function() {
      U.deprecated("Promise.defer", "new Promise");
      var S = new T(b);
      return {
        promise: S,
        resolve: P,
        reject: _
      };
    }, c.notEnumerableProp(
      T,
      "_makeSelfResolutionError",
      t
    ), up()(
      T,
      b,
      g,
      r,
      U
    ), dp()(T, b, g, U), lp()(T, h, r, U), fp()(T), hp()(T), pp()(
      T,
      h,
      g,
      b,
      f,
      o
    ), T.Promise = T, T.version = "3.4.7", gp()(T, h, r, g, b, U), mp()(T), bp()(T, r, g, w, b, U), yp()(T, b, U), Dp()(T, r, b, g, i, U), vp()(T), xp()(T, b), _p()(T, h, g, r), Up()(T, b, g, r), wp()(T, h, r, g, b, U), Tp()(T, h, U), Ep()(T, h, r), Ap()(T, b), Cp()(T, b), Fp()(T), c.toFastProperties(T), c.toFastProperties(T.prototype);
    function Q(S) {
      var R = new T(b);
      R._fulfillmentHandler0 = S, R._rejectionHandler0 = S, R._promise0 = S, R._receiver0 = S;
    }
    return Q({ a: 1 }), Q({ b: 2 }), Q({ c: 3 }), Q(1), Q(function() {
    }), Q(void 0), Q(!1), Q(new T(b)), U.setBounds(u.firstLineError, c.lastLineError), T;
  };
})(Qh);
var Sp = We, Ye = $a();
Le.defer = Bp;
Le.when = Ye.resolve;
Le.resolve = Ye.resolve;
Le.all = Ye.all;
Le.props = Ye.props;
Le.reject = Ye.reject;
Le.promisify = Ye.promisify;
Le.mapSeries = Ye.mapSeries;
Le.attempt = Ye.attempt;
Le.nfcall = function(e) {
  var t = Array.prototype.slice.call(arguments, 1), n = Ye.promisify(e);
  return n.apply(null, t);
};
Ye.prototype.fail = Ye.prototype.caught;
Ye.prototype.also = function(e) {
  return this.then(function(t) {
    var n = Sp.extend({}, t, e(t));
    return Ye.props(n);
  });
};
function Bp() {
  var e, t, n = new Ye.Promise(function(r, i) {
    e = r, t = i;
  });
  return {
    resolve: e,
    reject: t,
    promise: n
  };
}
var Ce = {}, kp = We, ze = Ce.types = {
  document: "document",
  paragraph: "paragraph",
  run: "run",
  text: "text",
  tab: "tab",
  hyperlink: "hyperlink",
  noteReference: "noteReference",
  image: "image",
  note: "note",
  commentReference: "commentReference",
  comment: "comment",
  table: "table",
  tableRow: "tableRow",
  tableCell: "tableCell",
  break: "break",
  bookmarkStart: "bookmarkStart"
};
function Wp(e, t) {
  return t = t || {}, {
    type: ze.document,
    children: e,
    notes: t.notes || new ni({}),
    comments: t.comments || []
  };
}
function Np(e, t) {
  t = t || {};
  var n = t.indent || {};
  return {
    type: ze.paragraph,
    children: e,
    styleId: t.styleId || null,
    styleName: t.styleName || null,
    numbering: t.numbering || null,
    alignment: t.alignment || null,
    indent: {
      start: n.start || null,
      end: n.end || null,
      firstLine: n.firstLine || null,
      hanging: n.hanging || null
    }
  };
}
function Rp(e, t) {
  return t = t || {}, {
    type: ze.run,
    children: e,
    styleId: t.styleId || null,
    styleName: t.styleName || null,
    isBold: !!t.isBold,
    isUnderline: !!t.isUnderline,
    isItalic: !!t.isItalic,
    isStrikethrough: !!t.isStrikethrough,
    isAllCaps: !!t.isAllCaps,
    isSmallCaps: !!t.isSmallCaps,
    verticalAlignment: t.verticalAlignment || Hu.baseline,
    font: t.font || null,
    fontSize: t.fontSize || null
  };
}
var Hu = {
  baseline: "baseline",
  superscript: "superscript",
  subscript: "subscript"
};
function Op(e) {
  return {
    type: ze.text,
    value: e
  };
}
function Ip() {
  return {
    type: ze.tab
  };
}
function Lp(e, t) {
  return {
    type: ze.hyperlink,
    children: e,
    href: t.href,
    anchor: t.anchor,
    targetFrame: t.targetFrame
  };
}
function Mp(e) {
  return {
    type: ze.noteReference,
    noteType: e.noteType,
    noteId: e.noteId
  };
}
function ni(e) {
  this._notes = kp.indexBy(e, function(t) {
    return $u(t.noteType, t.noteId);
  });
}
ni.prototype.resolve = function(e) {
  return this.findNoteByKey($u(e.noteType, e.noteId));
};
ni.prototype.findNoteByKey = function(e) {
  return this._notes[e] || null;
};
function jp(e) {
  return {
    type: ze.note,
    noteType: e.noteType,
    noteId: e.noteId,
    body: e.body
  };
}
function Pp(e) {
  return {
    type: ze.commentReference,
    commentId: e.commentId
  };
}
function qp(e) {
  return {
    type: ze.comment,
    commentId: e.commentId,
    body: e.body,
    authorName: e.authorName,
    authorInitials: e.authorInitials
  };
}
function $u(e, t) {
  return e + "-" + t;
}
function zp(e) {
  return {
    type: ze.image,
    // `read` is retained for backwards compatibility, but other read
    // methods should be preferred.
    read: function(t) {
      return t ? e.readImage(t) : e.readImage().then(function(n) {
        return Buffer.from(n);
      });
    },
    readAsArrayBuffer: function() {
      return e.readImage();
    },
    readAsBase64String: function() {
      return e.readImage("base64");
    },
    readAsBuffer: function() {
      return e.readImage().then(function(t) {
        return Buffer.from(t);
      });
    },
    altText: e.altText,
    contentType: e.contentType
  };
}
function Xp(e, t) {
  return t = t || {}, {
    type: ze.table,
    children: e,
    styleId: t.styleId || null,
    styleName: t.styleName || null
  };
}
function Vp(e, t) {
  return t = t || {}, {
    type: ze.tableRow,
    children: e,
    isHeader: t.isHeader || !1
  };
}
function Hp(e, t) {
  return t = t || {}, {
    type: ze.tableCell,
    children: e,
    colSpan: t.colSpan == null ? 1 : t.colSpan,
    rowSpan: t.rowSpan == null ? 1 : t.rowSpan
  };
}
function co(e) {
  return {
    type: ze.break,
    breakType: e
  };
}
function $p(e) {
  return {
    type: ze.bookmarkStart,
    name: e.name
  };
}
Ce.document = Ce.Document = Wp;
Ce.paragraph = Ce.Paragraph = Np;
Ce.run = Ce.Run = Rp;
Ce.text = Ce.Text = Op;
Ce.tab = Ce.Tab = Ip;
Ce.Hyperlink = Lp;
Ce.noteReference = Ce.NoteReference = Mp;
Ce.Notes = ni;
Ce.Note = jp;
Ce.commentReference = Pp;
Ce.comment = qp;
Ce.Image = zp;
Ce.Table = Xp;
Ce.TableRow = Vp;
Ce.TableCell = Hp;
Ce.lineBreak = co("line");
Ce.pageBreak = co("page");
Ce.columnBreak = co("column");
Ce.BookmarkStart = $p;
Ce.verticalAlignment = Hu;
var it = {}, Pn = We;
it.Result = bt;
it.success = Zp;
it.warning = Gp;
it.error = Yp;
function bt(e, t) {
  this.value = e, this.messages = t || [];
}
bt.prototype.map = function(e) {
  return new bt(e(this.value), this.messages);
};
bt.prototype.flatMap = function(e) {
  var t = e(this.value);
  return new bt(t.value, so([this, t]));
};
bt.prototype.flatMapThen = function(e) {
  var t = this;
  return e(this.value).then(function(n) {
    return new bt(n.value, so([t, n]));
  });
};
bt.combine = function(e) {
  var t = Pn.flatten(Pn.pluck(e, "value")), n = so(e);
  return new bt(t, n);
};
function Zp(e) {
  return new bt(e, []);
}
function Gp(e) {
  return {
    type: "warning",
    message: e
  };
}
function Yp(e) {
  return {
    type: "error",
    message: e.message,
    error: e
  };
}
function so(e) {
  var t = [];
  return Pn.flatten(Pn.pluck(e, "messages"), !0).forEach(function(n) {
    Kp(t, n) || t.push(n);
  }), t;
}
function Kp(e, t) {
  return Pn.find(e, Qp.bind(null, t)) !== void 0;
}
function Qp(e, t) {
  return e.type === t.type && e.message === t.message;
}
var Gn = {}, ri = {};
ri.byteLength = tg;
ri.toByteArray = rg;
ri.fromByteArray = og;
var pt = [], st = [], Jp = typeof Uint8Array < "u" ? Uint8Array : Array, Fa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var on = 0, eg = Fa.length; on < eg; ++on)
  pt[on] = Fa[on], st[Fa.charCodeAt(on)] = on;
st["-".charCodeAt(0)] = 62;
st["_".charCodeAt(0)] = 63;
function Zu(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var r = n === t ? 0 : 4 - n % 4;
  return [n, r];
}
function tg(e) {
  var t = Zu(e), n = t[0], r = t[1];
  return (n + r) * 3 / 4 - r;
}
function ng(e, t, n) {
  return (t + n) * 3 / 4 - n;
}
function rg(e) {
  var t, n = Zu(e), r = n[0], i = n[1], a = new Jp(ng(e, r, i)), c = 0, o = i > 0 ? r - 4 : r, s;
  for (s = 0; s < o; s += 4)
    t = st[e.charCodeAt(s)] << 18 | st[e.charCodeAt(s + 1)] << 12 | st[e.charCodeAt(s + 2)] << 6 | st[e.charCodeAt(s + 3)], a[c++] = t >> 16 & 255, a[c++] = t >> 8 & 255, a[c++] = t & 255;
  return i === 2 && (t = st[e.charCodeAt(s)] << 2 | st[e.charCodeAt(s + 1)] >> 4, a[c++] = t & 255), i === 1 && (t = st[e.charCodeAt(s)] << 10 | st[e.charCodeAt(s + 1)] << 4 | st[e.charCodeAt(s + 2)] >> 2, a[c++] = t >> 8 & 255, a[c++] = t & 255), a;
}
function ig(e) {
  return pt[e >> 18 & 63] + pt[e >> 12 & 63] + pt[e >> 6 & 63] + pt[e & 63];
}
function ag(e, t, n) {
  for (var r, i = [], a = t; a < n; a += 3)
    r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255), i.push(ig(r));
  return i.join("");
}
function og(e) {
  for (var t, n = e.length, r = n % 3, i = [], a = 16383, c = 0, o = n - r; c < o; c += a)
    i.push(ag(e, c, c + a > o ? o : c + a));
  return r === 1 ? (t = e[n - 1], i.push(
    pt[t >> 2] + pt[t << 4 & 63] + "=="
  )) : r === 2 && (t = (e[n - 2] << 8) + e[n - 1], i.push(
    pt[t >> 10] + pt[t >> 4 & 63] + pt[t << 2 & 63] + "="
  )), i.join("");
}
function ur(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Za = {}, cg = {
  get exports() {
    return Za;
  },
  set exports(e) {
    Za = e;
  }
};
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(e, t) {
  (function(n) {
    e.exports = n();
  })(function() {
    return function n(r, i, a) {
      function c(u, f) {
        if (!i[u]) {
          if (!r[u]) {
            var p = typeof ur == "function" && ur;
            if (!f && p)
              return p(u, !0);
            if (o)
              return o(u, !0);
            var y = new Error("Cannot find module '" + u + "'");
            throw y.code = "MODULE_NOT_FOUND", y;
          }
          var m = i[u] = { exports: {} };
          r[u][0].call(m.exports, function(b) {
            var d = r[u][1][b];
            return c(d || b);
          }, m, m.exports, n, r, i, a);
        }
        return i[u].exports;
      }
      for (var o = typeof ur == "function" && ur, s = 0; s < a.length; s++)
        c(a[s]);
      return c;
    }({ 1: [function(n, r, i) {
      var a = n("./utils"), c = n("./support"), o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      i.encode = function(s) {
        for (var u, f, p, y, m, b, d, l = [], g = 0, h = s.length, D = h, w = a.getTypeOf(s) !== "string"; g < s.length; )
          D = h - g, p = w ? (u = s[g++], f = g < h ? s[g++] : 0, g < h ? s[g++] : 0) : (u = s.charCodeAt(g++), f = g < h ? s.charCodeAt(g++) : 0, g < h ? s.charCodeAt(g++) : 0), y = u >> 2, m = (3 & u) << 4 | f >> 4, b = 1 < D ? (15 & f) << 2 | p >> 6 : 64, d = 2 < D ? 63 & p : 64, l.push(o.charAt(y) + o.charAt(m) + o.charAt(b) + o.charAt(d));
        return l.join("");
      }, i.decode = function(s) {
        var u, f, p, y, m, b, d = 0, l = 0, g = "data:";
        if (s.substr(0, g.length) === g)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var h, D = 3 * (s = s.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (s.charAt(s.length - 1) === o.charAt(64) && D--, s.charAt(s.length - 2) === o.charAt(64) && D--, D % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (h = c.uint8array ? new Uint8Array(0 | D) : new Array(0 | D); d < s.length; )
          u = o.indexOf(s.charAt(d++)) << 2 | (y = o.indexOf(s.charAt(d++))) >> 4, f = (15 & y) << 4 | (m = o.indexOf(s.charAt(d++))) >> 2, p = (3 & m) << 6 | (b = o.indexOf(s.charAt(d++))), h[l++] = u, m !== 64 && (h[l++] = f), b !== 64 && (h[l++] = p);
        return h;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(n, r, i) {
      var a = n("./external"), c = n("./stream/DataWorker"), o = n("./stream/Crc32Probe"), s = n("./stream/DataLengthProbe");
      function u(f, p, y, m, b) {
        this.compressedSize = f, this.uncompressedSize = p, this.crc32 = y, this.compression = m, this.compressedContent = b;
      }
      u.prototype = { getContentWorker: function() {
        var f = new c(a.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new s("data_length")), p = this;
        return f.on("end", function() {
          if (this.streamInfo.data_length !== p.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), f;
      }, getCompressedWorker: function() {
        return new c(a.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, u.createWorkerFrom = function(f, p, y) {
        return f.pipe(new o()).pipe(new s("uncompressedSize")).pipe(p.compressWorker(y)).pipe(new s("compressedSize")).withStreamInfo("compression", p);
      }, r.exports = u;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(n, r, i) {
      var a = n("./stream/GenericWorker");
      i.STORE = { magic: "\0\0", compressWorker: function() {
        return new a("STORE compression");
      }, uncompressWorker: function() {
        return new a("STORE decompression");
      } }, i.DEFLATE = n("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(n, r, i) {
      var a = n("./utils"), c = function() {
        for (var o, s = [], u = 0; u < 256; u++) {
          o = u;
          for (var f = 0; f < 8; f++)
            o = 1 & o ? 3988292384 ^ o >>> 1 : o >>> 1;
          s[u] = o;
        }
        return s;
      }();
      r.exports = function(o, s) {
        return o !== void 0 && o.length ? a.getTypeOf(o) !== "string" ? function(u, f, p, y) {
          var m = c, b = y + p;
          u ^= -1;
          for (var d = y; d < b; d++)
            u = u >>> 8 ^ m[255 & (u ^ f[d])];
          return -1 ^ u;
        }(0 | s, o, o.length, 0) : function(u, f, p, y) {
          var m = c, b = y + p;
          u ^= -1;
          for (var d = y; d < b; d++)
            u = u >>> 8 ^ m[255 & (u ^ f.charCodeAt(d))];
          return -1 ^ u;
        }(0 | s, o, o.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(n, r, i) {
      i.base64 = !1, i.binary = !1, i.dir = !1, i.createFolders = !0, i.date = null, i.compression = null, i.compressionOptions = null, i.comment = null, i.unixPermissions = null, i.dosPermissions = null;
    }, {}], 6: [function(n, r, i) {
      var a = null;
      a = typeof Promise < "u" ? Promise : n("lie"), r.exports = { Promise: a };
    }, { lie: 37 }], 7: [function(n, r, i) {
      var a = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", c = n("pako"), o = n("./utils"), s = n("./stream/GenericWorker"), u = a ? "uint8array" : "array";
      function f(p, y) {
        s.call(this, "FlateWorker/" + p), this._pako = null, this._pakoAction = p, this._pakoOptions = y, this.meta = {};
      }
      i.magic = "\b\0", o.inherits(f, s), f.prototype.processChunk = function(p) {
        this.meta = p.meta, this._pako === null && this._createPako(), this._pako.push(o.transformTo(u, p.data), !1);
      }, f.prototype.flush = function() {
        s.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, f.prototype.cleanUp = function() {
        s.prototype.cleanUp.call(this), this._pako = null;
      }, f.prototype._createPako = function() {
        this._pako = new c[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var p = this;
        this._pako.onData = function(y) {
          p.push({ data: y, meta: p.meta });
        };
      }, i.compressWorker = function(p) {
        return new f("Deflate", p);
      }, i.uncompressWorker = function() {
        return new f("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(n, r, i) {
      function a(m, b) {
        var d, l = "";
        for (d = 0; d < b; d++)
          l += String.fromCharCode(255 & m), m >>>= 8;
        return l;
      }
      function c(m, b, d, l, g, h) {
        var D, w, U = m.file, E = m.compression, F = h !== u.utf8encode, j = o.transformTo("string", h(U.name)), q = o.transformTo("string", u.utf8encode(U.name)), Y = U.comment, oe = o.transformTo("string", h(Y)), T = o.transformTo("string", u.utf8encode(Y)), P = q.length !== U.name.length, _ = T.length !== Y.length, Q = "", S = "", R = "", N = U.dir, I = U.date, M = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        b && !d || (M.crc32 = m.crc32, M.compressedSize = m.compressedSize, M.uncompressedSize = m.uncompressedSize);
        var k = 0;
        b && (k |= 8), F || !P && !_ || (k |= 2048);
        var C = 0, J = 0;
        N && (C |= 16), g === "UNIX" ? (J = 798, C |= function(re, le) {
          var me = re;
          return re || (me = le ? 16893 : 33204), (65535 & me) << 16;
        }(U.unixPermissions, N)) : (J = 20, C |= function(re) {
          return 63 & (re || 0);
        }(U.dosPermissions)), D = I.getUTCHours(), D <<= 6, D |= I.getUTCMinutes(), D <<= 5, D |= I.getUTCSeconds() / 2, w = I.getUTCFullYear() - 1980, w <<= 4, w |= I.getUTCMonth() + 1, w <<= 5, w |= I.getUTCDate(), P && (S = a(1, 1) + a(f(j), 4) + q, Q += "up" + a(S.length, 2) + S), _ && (R = a(1, 1) + a(f(oe), 4) + T, Q += "uc" + a(R.length, 2) + R);
        var ce = "";
        return ce += `
\0`, ce += a(k, 2), ce += E.magic, ce += a(D, 2), ce += a(w, 2), ce += a(M.crc32, 4), ce += a(M.compressedSize, 4), ce += a(M.uncompressedSize, 4), ce += a(j.length, 2), ce += a(Q.length, 2), { fileRecord: p.LOCAL_FILE_HEADER + ce + j + Q, dirRecord: p.CENTRAL_FILE_HEADER + a(J, 2) + ce + a(oe.length, 2) + "\0\0\0\0" + a(C, 4) + a(l, 4) + j + Q + oe };
      }
      var o = n("../utils"), s = n("../stream/GenericWorker"), u = n("../utf8"), f = n("../crc32"), p = n("../signature");
      function y(m, b, d, l) {
        s.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = b, this.zipPlatform = d, this.encodeFileName = l, this.streamFiles = m, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      o.inherits(y, s), y.prototype.push = function(m) {
        var b = m.meta.percent || 0, d = this.entriesCount, l = this._sources.length;
        this.accumulate ? this.contentBuffer.push(m) : (this.bytesWritten += m.data.length, s.prototype.push.call(this, { data: m.data, meta: { currentFile: this.currentFile, percent: d ? (b + 100 * (d - l - 1)) / d : 100 } }));
      }, y.prototype.openedSource = function(m) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = m.file.name;
        var b = this.streamFiles && !m.file.dir;
        if (b) {
          var d = c(m, b, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: d.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, y.prototype.closedSource = function(m) {
        this.accumulate = !1;
        var b = this.streamFiles && !m.file.dir, d = c(m, b, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(d.dirRecord), b)
          this.push({ data: function(l) {
            return p.DATA_DESCRIPTOR + a(l.crc32, 4) + a(l.compressedSize, 4) + a(l.uncompressedSize, 4);
          }(m), meta: { percent: 100 } });
        else
          for (this.push({ data: d.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, y.prototype.flush = function() {
        for (var m = this.bytesWritten, b = 0; b < this.dirRecords.length; b++)
          this.push({ data: this.dirRecords[b], meta: { percent: 100 } });
        var d = this.bytesWritten - m, l = function(g, h, D, w, U) {
          var E = o.transformTo("string", U(w));
          return p.CENTRAL_DIRECTORY_END + "\0\0\0\0" + a(g, 2) + a(g, 2) + a(h, 4) + a(D, 4) + a(E.length, 2) + E;
        }(this.dirRecords.length, d, m, this.zipComment, this.encodeFileName);
        this.push({ data: l, meta: { percent: 100 } });
      }, y.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, y.prototype.registerPrevious = function(m) {
        this._sources.push(m);
        var b = this;
        return m.on("data", function(d) {
          b.processChunk(d);
        }), m.on("end", function() {
          b.closedSource(b.previous.streamInfo), b._sources.length ? b.prepareNextSource() : b.end();
        }), m.on("error", function(d) {
          b.error(d);
        }), this;
      }, y.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, y.prototype.error = function(m) {
        var b = this._sources;
        if (!s.prototype.error.call(this, m))
          return !1;
        for (var d = 0; d < b.length; d++)
          try {
            b[d].error(m);
          } catch {
          }
        return !0;
      }, y.prototype.lock = function() {
        s.prototype.lock.call(this);
        for (var m = this._sources, b = 0; b < m.length; b++)
          m[b].lock();
      }, r.exports = y;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(n, r, i) {
      var a = n("../compressions"), c = n("./ZipFileWorker");
      i.generateWorker = function(o, s, u) {
        var f = new c(s.streamFiles, u, s.platform, s.encodeFileName), p = 0;
        try {
          o.forEach(function(y, m) {
            p++;
            var b = function(h, D) {
              var w = h || D, U = a[w];
              if (!U)
                throw new Error(w + " is not a valid compression method !");
              return U;
            }(m.options.compression, s.compression), d = m.options.compressionOptions || s.compressionOptions || {}, l = m.dir, g = m.date;
            m._compressWorker(b, d).withStreamInfo("file", { name: y, dir: l, date: g, comment: m.comment || "", unixPermissions: m.unixPermissions, dosPermissions: m.dosPermissions }).pipe(f);
          }), f.entriesCount = p;
        } catch (y) {
          f.error(y);
        }
        return f;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(n, r, i) {
      function a() {
        if (!(this instanceof a))
          return new a();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var c = new a();
          for (var o in this)
            typeof this[o] != "function" && (c[o] = this[o]);
          return c;
        };
      }
      (a.prototype = n("./object")).loadAsync = n("./load"), a.support = n("./support"), a.defaults = n("./defaults"), a.version = "3.10.1", a.loadAsync = function(c, o) {
        return new a().loadAsync(c, o);
      }, a.external = n("./external"), r.exports = a;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(n, r, i) {
      var a = n("./utils"), c = n("./external"), o = n("./utf8"), s = n("./zipEntries"), u = n("./stream/Crc32Probe"), f = n("./nodejsUtils");
      function p(y) {
        return new c.Promise(function(m, b) {
          var d = y.decompressed.getContentWorker().pipe(new u());
          d.on("error", function(l) {
            b(l);
          }).on("end", function() {
            d.streamInfo.crc32 !== y.decompressed.crc32 ? b(new Error("Corrupted zip : CRC32 mismatch")) : m();
          }).resume();
        });
      }
      r.exports = function(y, m) {
        var b = this;
        return m = a.extend(m || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: o.utf8decode }), f.isNode && f.isStream(y) ? c.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : a.prepareContent("the loaded zip file", y, !0, m.optimizedBinaryString, m.base64).then(function(d) {
          var l = new s(m);
          return l.load(d), l;
        }).then(function(d) {
          var l = [c.Promise.resolve(d)], g = d.files;
          if (m.checkCRC32)
            for (var h = 0; h < g.length; h++)
              l.push(p(g[h]));
          return c.Promise.all(l);
        }).then(function(d) {
          for (var l = d.shift(), g = l.files, h = 0; h < g.length; h++) {
            var D = g[h], w = D.fileNameStr, U = a.resolve(D.fileNameStr);
            b.file(U, D.decompressed, { binary: !0, optimizedBinaryString: !0, date: D.date, dir: D.dir, comment: D.fileCommentStr.length ? D.fileCommentStr : null, unixPermissions: D.unixPermissions, dosPermissions: D.dosPermissions, createFolders: m.createFolders }), D.dir || (b.file(U).unsafeOriginalName = w);
          }
          return l.zipComment.length && (b.comment = l.zipComment), b;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(n, r, i) {
      var a = n("../utils"), c = n("../stream/GenericWorker");
      function o(s, u) {
        c.call(this, "Nodejs stream input adapter for " + s), this._upstreamEnded = !1, this._bindStream(u);
      }
      a.inherits(o, c), o.prototype._bindStream = function(s) {
        var u = this;
        (this._stream = s).pause(), s.on("data", function(f) {
          u.push({ data: f, meta: { percent: 0 } });
        }).on("error", function(f) {
          u.isPaused ? this.generatedError = f : u.error(f);
        }).on("end", function() {
          u.isPaused ? u._upstreamEnded = !0 : u.end();
        });
      }, o.prototype.pause = function() {
        return !!c.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, o.prototype.resume = function() {
        return !!c.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, r.exports = o;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(n, r, i) {
      var a = n("readable-stream").Readable;
      function c(o, s, u) {
        a.call(this, s), this._helper = o;
        var f = this;
        o.on("data", function(p, y) {
          f.push(p) || f._helper.pause(), u && u(y);
        }).on("error", function(p) {
          f.emit("error", p);
        }).on("end", function() {
          f.push(null);
        });
      }
      n("../utils").inherits(c, a), c.prototype._read = function() {
        this._helper.resume();
      }, r.exports = c;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(n, r, i) {
      r.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(a, c) {
        if (Buffer.from && Buffer.from !== Uint8Array.from)
          return Buffer.from(a, c);
        if (typeof a == "number")
          throw new Error('The "data" argument must not be a number');
        return new Buffer(a, c);
      }, allocBuffer: function(a) {
        if (Buffer.alloc)
          return Buffer.alloc(a);
        var c = new Buffer(a);
        return c.fill(0), c;
      }, isBuffer: function(a) {
        return Buffer.isBuffer(a);
      }, isStream: function(a) {
        return a && typeof a.on == "function" && typeof a.pause == "function" && typeof a.resume == "function";
      } };
    }, {}], 15: [function(n, r, i) {
      function a(U, E, F) {
        var j, q = o.getTypeOf(E), Y = o.extend(F || {}, f);
        Y.date = Y.date || new Date(), Y.compression !== null && (Y.compression = Y.compression.toUpperCase()), typeof Y.unixPermissions == "string" && (Y.unixPermissions = parseInt(Y.unixPermissions, 8)), Y.unixPermissions && 16384 & Y.unixPermissions && (Y.dir = !0), Y.dosPermissions && 16 & Y.dosPermissions && (Y.dir = !0), Y.dir && (U = g(U)), Y.createFolders && (j = l(U)) && h.call(this, j, !0);
        var oe = q === "string" && Y.binary === !1 && Y.base64 === !1;
        F && F.binary !== void 0 || (Y.binary = !oe), (E instanceof p && E.uncompressedSize === 0 || Y.dir || !E || E.length === 0) && (Y.base64 = !1, Y.binary = !0, E = "", Y.compression = "STORE", q = "string");
        var T = null;
        T = E instanceof p || E instanceof s ? E : b.isNode && b.isStream(E) ? new d(U, E) : o.prepareContent(U, E, Y.binary, Y.optimizedBinaryString, Y.base64);
        var P = new y(U, T, Y);
        this.files[U] = P;
      }
      var c = n("./utf8"), o = n("./utils"), s = n("./stream/GenericWorker"), u = n("./stream/StreamHelper"), f = n("./defaults"), p = n("./compressedObject"), y = n("./zipObject"), m = n("./generate"), b = n("./nodejsUtils"), d = n("./nodejs/NodejsStreamInputAdapter"), l = function(U) {
        U.slice(-1) === "/" && (U = U.substring(0, U.length - 1));
        var E = U.lastIndexOf("/");
        return 0 < E ? U.substring(0, E) : "";
      }, g = function(U) {
        return U.slice(-1) !== "/" && (U += "/"), U;
      }, h = function(U, E) {
        return E = E !== void 0 ? E : f.createFolders, U = g(U), this.files[U] || a.call(this, U, null, { dir: !0, createFolders: E }), this.files[U];
      };
      function D(U) {
        return Object.prototype.toString.call(U) === "[object RegExp]";
      }
      var w = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(U) {
        var E, F, j;
        for (E in this.files)
          j = this.files[E], (F = E.slice(this.root.length, E.length)) && E.slice(0, this.root.length) === this.root && U(F, j);
      }, filter: function(U) {
        var E = [];
        return this.forEach(function(F, j) {
          U(F, j) && E.push(j);
        }), E;
      }, file: function(U, E, F) {
        if (arguments.length !== 1)
          return U = this.root + U, a.call(this, U, E, F), this;
        if (D(U)) {
          var j = U;
          return this.filter(function(Y, oe) {
            return !oe.dir && j.test(Y);
          });
        }
        var q = this.files[this.root + U];
        return q && !q.dir ? q : null;
      }, folder: function(U) {
        if (!U)
          return this;
        if (D(U))
          return this.filter(function(q, Y) {
            return Y.dir && U.test(q);
          });
        var E = this.root + U, F = h.call(this, E), j = this.clone();
        return j.root = F.name, j;
      }, remove: function(U) {
        U = this.root + U;
        var E = this.files[U];
        if (E || (U.slice(-1) !== "/" && (U += "/"), E = this.files[U]), E && !E.dir)
          delete this.files[U];
        else
          for (var F = this.filter(function(q, Y) {
            return Y.name.slice(0, U.length) === U;
          }), j = 0; j < F.length; j++)
            delete this.files[F[j].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(U) {
        var E, F = {};
        try {
          if ((F = o.extend(U || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: c.utf8encode })).type = F.type.toLowerCase(), F.compression = F.compression.toUpperCase(), F.type === "binarystring" && (F.type = "string"), !F.type)
            throw new Error("No output type specified.");
          o.checkSupport(F.type), F.platform !== "darwin" && F.platform !== "freebsd" && F.platform !== "linux" && F.platform !== "sunos" || (F.platform = "UNIX"), F.platform === "win32" && (F.platform = "DOS");
          var j = F.comment || this.comment || "";
          E = m.generateWorker(this, F, j);
        } catch (q) {
          (E = new s("error")).error(q);
        }
        return new u(E, F.type || "string", F.mimeType);
      }, generateAsync: function(U, E) {
        return this.generateInternalStream(U).accumulate(E);
      }, generateNodeStream: function(U, E) {
        return (U = U || {}).type || (U.type = "nodebuffer"), this.generateInternalStream(U).toNodejsStream(E);
      } };
      r.exports = w;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(n, r, i) {
      r.exports = n("stream");
    }, { stream: void 0 }], 17: [function(n, r, i) {
      var a = n("./DataReader");
      function c(o) {
        a.call(this, o);
        for (var s = 0; s < this.data.length; s++)
          o[s] = 255 & o[s];
      }
      n("../utils").inherits(c, a), c.prototype.byteAt = function(o) {
        return this.data[this.zero + o];
      }, c.prototype.lastIndexOfSignature = function(o) {
        for (var s = o.charCodeAt(0), u = o.charCodeAt(1), f = o.charCodeAt(2), p = o.charCodeAt(3), y = this.length - 4; 0 <= y; --y)
          if (this.data[y] === s && this.data[y + 1] === u && this.data[y + 2] === f && this.data[y + 3] === p)
            return y - this.zero;
        return -1;
      }, c.prototype.readAndCheckSignature = function(o) {
        var s = o.charCodeAt(0), u = o.charCodeAt(1), f = o.charCodeAt(2), p = o.charCodeAt(3), y = this.readData(4);
        return s === y[0] && u === y[1] && f === y[2] && p === y[3];
      }, c.prototype.readData = function(o) {
        if (this.checkOffset(o), o === 0)
          return [];
        var s = this.data.slice(this.zero + this.index, this.zero + this.index + o);
        return this.index += o, s;
      }, r.exports = c;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(n, r, i) {
      var a = n("../utils");
      function c(o) {
        this.data = o, this.length = o.length, this.index = 0, this.zero = 0;
      }
      c.prototype = { checkOffset: function(o) {
        this.checkIndex(this.index + o);
      }, checkIndex: function(o) {
        if (this.length < this.zero + o || o < 0)
          throw new Error("End of data reached (data length = " + this.length + ", asked index = " + o + "). Corrupted zip ?");
      }, setIndex: function(o) {
        this.checkIndex(o), this.index = o;
      }, skip: function(o) {
        this.setIndex(this.index + o);
      }, byteAt: function() {
      }, readInt: function(o) {
        var s, u = 0;
        for (this.checkOffset(o), s = this.index + o - 1; s >= this.index; s--)
          u = (u << 8) + this.byteAt(s);
        return this.index += o, u;
      }, readString: function(o) {
        return a.transformTo("string", this.readData(o));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var o = this.readInt(4);
        return new Date(Date.UTC(1980 + (o >> 25 & 127), (o >> 21 & 15) - 1, o >> 16 & 31, o >> 11 & 31, o >> 5 & 63, (31 & o) << 1));
      } }, r.exports = c;
    }, { "../utils": 32 }], 19: [function(n, r, i) {
      var a = n("./Uint8ArrayReader");
      function c(o) {
        a.call(this, o);
      }
      n("../utils").inherits(c, a), c.prototype.readData = function(o) {
        this.checkOffset(o);
        var s = this.data.slice(this.zero + this.index, this.zero + this.index + o);
        return this.index += o, s;
      }, r.exports = c;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(n, r, i) {
      var a = n("./DataReader");
      function c(o) {
        a.call(this, o);
      }
      n("../utils").inherits(c, a), c.prototype.byteAt = function(o) {
        return this.data.charCodeAt(this.zero + o);
      }, c.prototype.lastIndexOfSignature = function(o) {
        return this.data.lastIndexOf(o) - this.zero;
      }, c.prototype.readAndCheckSignature = function(o) {
        return o === this.readData(4);
      }, c.prototype.readData = function(o) {
        this.checkOffset(o);
        var s = this.data.slice(this.zero + this.index, this.zero + this.index + o);
        return this.index += o, s;
      }, r.exports = c;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(n, r, i) {
      var a = n("./ArrayReader");
      function c(o) {
        a.call(this, o);
      }
      n("../utils").inherits(c, a), c.prototype.readData = function(o) {
        if (this.checkOffset(o), o === 0)
          return new Uint8Array(0);
        var s = this.data.subarray(this.zero + this.index, this.zero + this.index + o);
        return this.index += o, s;
      }, r.exports = c;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(n, r, i) {
      var a = n("../utils"), c = n("../support"), o = n("./ArrayReader"), s = n("./StringReader"), u = n("./NodeBufferReader"), f = n("./Uint8ArrayReader");
      r.exports = function(p) {
        var y = a.getTypeOf(p);
        return a.checkSupport(y), y !== "string" || c.uint8array ? y === "nodebuffer" ? new u(p) : c.uint8array ? new f(a.transformTo("uint8array", p)) : new o(a.transformTo("array", p)) : new s(p);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(n, r, i) {
      i.LOCAL_FILE_HEADER = "PK", i.CENTRAL_FILE_HEADER = "PK", i.CENTRAL_DIRECTORY_END = "PK", i.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", i.ZIP64_CENTRAL_DIRECTORY_END = "PK", i.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(n, r, i) {
      var a = n("./GenericWorker"), c = n("../utils");
      function o(s) {
        a.call(this, "ConvertWorker to " + s), this.destType = s;
      }
      c.inherits(o, a), o.prototype.processChunk = function(s) {
        this.push({ data: c.transformTo(this.destType, s.data), meta: s.meta });
      }, r.exports = o;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(n, r, i) {
      var a = n("./GenericWorker"), c = n("../crc32");
      function o() {
        a.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      n("../utils").inherits(o, a), o.prototype.processChunk = function(s) {
        this.streamInfo.crc32 = c(s.data, this.streamInfo.crc32 || 0), this.push(s);
      }, r.exports = o;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(n, r, i) {
      var a = n("../utils"), c = n("./GenericWorker");
      function o(s) {
        c.call(this, "DataLengthProbe for " + s), this.propName = s, this.withStreamInfo(s, 0);
      }
      a.inherits(o, c), o.prototype.processChunk = function(s) {
        if (s) {
          var u = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = u + s.data.length;
        }
        c.prototype.processChunk.call(this, s);
      }, r.exports = o;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(n, r, i) {
      var a = n("../utils"), c = n("./GenericWorker");
      function o(s) {
        c.call(this, "DataWorker");
        var u = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, s.then(function(f) {
          u.dataIsReady = !0, u.data = f, u.max = f && f.length || 0, u.type = a.getTypeOf(f), u.isPaused || u._tickAndRepeat();
        }, function(f) {
          u.error(f);
        });
      }
      a.inherits(o, c), o.prototype.cleanUp = function() {
        c.prototype.cleanUp.call(this), this.data = null;
      }, o.prototype.resume = function() {
        return !!c.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, a.delay(this._tickAndRepeat, [], this)), !0);
      }, o.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (a.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, o.prototype._tick = function() {
        if (this.isPaused || this.isFinished)
          return !1;
        var s = null, u = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            s = this.data.substring(this.index, u);
            break;
          case "uint8array":
            s = this.data.subarray(this.index, u);
            break;
          case "array":
          case "nodebuffer":
            s = this.data.slice(this.index, u);
        }
        return this.index = u, this.push({ data: s, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, r.exports = o;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(n, r, i) {
      function a(c) {
        this.name = c || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      a.prototype = { push: function(c) {
        this.emit("data", c);
      }, end: function() {
        if (this.isFinished)
          return !1;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = !0;
        } catch (c) {
          this.emit("error", c);
        }
        return !0;
      }, error: function(c) {
        return !this.isFinished && (this.isPaused ? this.generatedError = c : (this.isFinished = !0, this.emit("error", c), this.previous && this.previous.error(c), this.cleanUp()), !0);
      }, on: function(c, o) {
        return this._listeners[c].push(o), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(c, o) {
        if (this._listeners[c])
          for (var s = 0; s < this._listeners[c].length; s++)
            this._listeners[c][s].call(this, o);
      }, pipe: function(c) {
        return c.registerPrevious(this);
      }, registerPrevious: function(c) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = c.streamInfo, this.mergeStreamInfo(), this.previous = c;
        var o = this;
        return c.on("data", function(s) {
          o.processChunk(s);
        }), c.on("end", function() {
          o.end();
        }), c.on("error", function(s) {
          o.error(s);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
      }, resume: function() {
        if (!this.isPaused || this.isFinished)
          return !1;
        var c = this.isPaused = !1;
        return this.generatedError && (this.error(this.generatedError), c = !0), this.previous && this.previous.resume(), !c;
      }, flush: function() {
      }, processChunk: function(c) {
        this.push(c);
      }, withStreamInfo: function(c, o) {
        return this.extraStreamInfo[c] = o, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var c in this.extraStreamInfo)
          Object.prototype.hasOwnProperty.call(this.extraStreamInfo, c) && (this.streamInfo[c] = this.extraStreamInfo[c]);
      }, lock: function() {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var c = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + c : c;
      } }, r.exports = a;
    }, {}], 29: [function(n, r, i) {
      var a = n("../utils"), c = n("./ConvertWorker"), o = n("./GenericWorker"), s = n("../base64"), u = n("../support"), f = n("../external"), p = null;
      if (u.nodestream)
        try {
          p = n("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function y(b, d) {
        return new f.Promise(function(l, g) {
          var h = [], D = b._internalType, w = b._outputType, U = b._mimeType;
          b.on("data", function(E, F) {
            h.push(E), d && d(F);
          }).on("error", function(E) {
            h = [], g(E);
          }).on("end", function() {
            try {
              var E = function(F, j, q) {
                switch (F) {
                  case "blob":
                    return a.newBlob(a.transformTo("arraybuffer", j), q);
                  case "base64":
                    return s.encode(j);
                  default:
                    return a.transformTo(F, j);
                }
              }(w, function(F, j) {
                var q, Y = 0, oe = null, T = 0;
                for (q = 0; q < j.length; q++)
                  T += j[q].length;
                switch (F) {
                  case "string":
                    return j.join("");
                  case "array":
                    return Array.prototype.concat.apply([], j);
                  case "uint8array":
                    for (oe = new Uint8Array(T), q = 0; q < j.length; q++)
                      oe.set(j[q], Y), Y += j[q].length;
                    return oe;
                  case "nodebuffer":
                    return Buffer.concat(j);
                  default:
                    throw new Error("concat : unsupported type '" + F + "'");
                }
              }(D, h), U);
              l(E);
            } catch (F) {
              g(F);
            }
            h = [];
          }).resume();
        });
      }
      function m(b, d, l) {
        var g = d;
        switch (d) {
          case "blob":
          case "arraybuffer":
            g = "uint8array";
            break;
          case "base64":
            g = "string";
        }
        try {
          this._internalType = g, this._outputType = d, this._mimeType = l, a.checkSupport(g), this._worker = b.pipe(new c(g)), b.lock();
        } catch (h) {
          this._worker = new o("error"), this._worker.error(h);
        }
      }
      m.prototype = { accumulate: function(b) {
        return y(this, b);
      }, on: function(b, d) {
        var l = this;
        return b === "data" ? this._worker.on(b, function(g) {
          d.call(l, g.data, g.meta);
        }) : this._worker.on(b, function() {
          a.delay(d, arguments, l);
        }), this;
      }, resume: function() {
        return a.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(b) {
        if (a.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new p(this, { objectMode: this._outputType !== "nodebuffer" }, b);
      } }, r.exports = m;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(n, r, i) {
      if (i.base64 = !0, i.array = !0, i.string = !0, i.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", i.nodebuffer = typeof Buffer < "u", i.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
        i.blob = !1;
      else {
        var a = new ArrayBuffer(0);
        try {
          i.blob = new Blob([a], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var c = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            c.append(a), i.blob = c.getBlob("application/zip").size === 0;
          } catch {
            i.blob = !1;
          }
        }
      }
      try {
        i.nodestream = !!n("readable-stream").Readable;
      } catch {
        i.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(n, r, i) {
      for (var a = n("./utils"), c = n("./support"), o = n("./nodejsUtils"), s = n("./stream/GenericWorker"), u = new Array(256), f = 0; f < 256; f++)
        u[f] = 252 <= f ? 6 : 248 <= f ? 5 : 240 <= f ? 4 : 224 <= f ? 3 : 192 <= f ? 2 : 1;
      u[254] = u[254] = 1;
      function p() {
        s.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function y() {
        s.call(this, "utf-8 encode");
      }
      i.utf8encode = function(m) {
        return c.nodebuffer ? o.newBufferFrom(m, "utf-8") : function(b) {
          var d, l, g, h, D, w = b.length, U = 0;
          for (h = 0; h < w; h++)
            (64512 & (l = b.charCodeAt(h))) == 55296 && h + 1 < w && (64512 & (g = b.charCodeAt(h + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (g - 56320), h++), U += l < 128 ? 1 : l < 2048 ? 2 : l < 65536 ? 3 : 4;
          for (d = c.uint8array ? new Uint8Array(U) : new Array(U), h = D = 0; D < U; h++)
            (64512 & (l = b.charCodeAt(h))) == 55296 && h + 1 < w && (64512 & (g = b.charCodeAt(h + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (g - 56320), h++), l < 128 ? d[D++] = l : (l < 2048 ? d[D++] = 192 | l >>> 6 : (l < 65536 ? d[D++] = 224 | l >>> 12 : (d[D++] = 240 | l >>> 18, d[D++] = 128 | l >>> 12 & 63), d[D++] = 128 | l >>> 6 & 63), d[D++] = 128 | 63 & l);
          return d;
        }(m);
      }, i.utf8decode = function(m) {
        return c.nodebuffer ? a.transformTo("nodebuffer", m).toString("utf-8") : function(b) {
          var d, l, g, h, D = b.length, w = new Array(2 * D);
          for (d = l = 0; d < D; )
            if ((g = b[d++]) < 128)
              w[l++] = g;
            else if (4 < (h = u[g]))
              w[l++] = 65533, d += h - 1;
            else {
              for (g &= h === 2 ? 31 : h === 3 ? 15 : 7; 1 < h && d < D; )
                g = g << 6 | 63 & b[d++], h--;
              1 < h ? w[l++] = 65533 : g < 65536 ? w[l++] = g : (g -= 65536, w[l++] = 55296 | g >> 10 & 1023, w[l++] = 56320 | 1023 & g);
            }
          return w.length !== l && (w.subarray ? w = w.subarray(0, l) : w.length = l), a.applyFromCharCode(w);
        }(m = a.transformTo(c.uint8array ? "uint8array" : "array", m));
      }, a.inherits(p, s), p.prototype.processChunk = function(m) {
        var b = a.transformTo(c.uint8array ? "uint8array" : "array", m.data);
        if (this.leftOver && this.leftOver.length) {
          if (c.uint8array) {
            var d = b;
            (b = new Uint8Array(d.length + this.leftOver.length)).set(this.leftOver, 0), b.set(d, this.leftOver.length);
          } else
            b = this.leftOver.concat(b);
          this.leftOver = null;
        }
        var l = function(h, D) {
          var w;
          for ((D = D || h.length) > h.length && (D = h.length), w = D - 1; 0 <= w && (192 & h[w]) == 128; )
            w--;
          return w < 0 || w === 0 ? D : w + u[h[w]] > D ? w : D;
        }(b), g = b;
        l !== b.length && (c.uint8array ? (g = b.subarray(0, l), this.leftOver = b.subarray(l, b.length)) : (g = b.slice(0, l), this.leftOver = b.slice(l, b.length))), this.push({ data: i.utf8decode(g), meta: m.meta });
      }, p.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: i.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, i.Utf8DecodeWorker = p, a.inherits(y, s), y.prototype.processChunk = function(m) {
        this.push({ data: i.utf8encode(m.data), meta: m.meta });
      }, i.Utf8EncodeWorker = y;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(n, r, i) {
      var a = n("./support"), c = n("./base64"), o = n("./nodejsUtils"), s = n("./external");
      function u(d) {
        return d;
      }
      function f(d, l) {
        for (var g = 0; g < d.length; ++g)
          l[g] = 255 & d.charCodeAt(g);
        return l;
      }
      n("setimmediate"), i.newBlob = function(d, l) {
        i.checkSupport("blob");
        try {
          return new Blob([d], { type: l });
        } catch {
          try {
            var g = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return g.append(d), g.getBlob(l);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var p = { stringifyByChunk: function(d, l, g) {
        var h = [], D = 0, w = d.length;
        if (w <= g)
          return String.fromCharCode.apply(null, d);
        for (; D < w; )
          l === "array" || l === "nodebuffer" ? h.push(String.fromCharCode.apply(null, d.slice(D, Math.min(D + g, w)))) : h.push(String.fromCharCode.apply(null, d.subarray(D, Math.min(D + g, w)))), D += g;
        return h.join("");
      }, stringifyByChar: function(d) {
        for (var l = "", g = 0; g < d.length; g++)
          l += String.fromCharCode(d[g]);
        return l;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return a.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return a.nodebuffer && String.fromCharCode.apply(null, o.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function y(d) {
        var l = 65536, g = i.getTypeOf(d), h = !0;
        if (g === "uint8array" ? h = p.applyCanBeUsed.uint8array : g === "nodebuffer" && (h = p.applyCanBeUsed.nodebuffer), h)
          for (; 1 < l; )
            try {
              return p.stringifyByChunk(d, g, l);
            } catch {
              l = Math.floor(l / 2);
            }
        return p.stringifyByChar(d);
      }
      function m(d, l) {
        for (var g = 0; g < d.length; g++)
          l[g] = d[g];
        return l;
      }
      i.applyFromCharCode = y;
      var b = {};
      b.string = { string: u, array: function(d) {
        return f(d, new Array(d.length));
      }, arraybuffer: function(d) {
        return b.string.uint8array(d).buffer;
      }, uint8array: function(d) {
        return f(d, new Uint8Array(d.length));
      }, nodebuffer: function(d) {
        return f(d, o.allocBuffer(d.length));
      } }, b.array = { string: y, array: u, arraybuffer: function(d) {
        return new Uint8Array(d).buffer;
      }, uint8array: function(d) {
        return new Uint8Array(d);
      }, nodebuffer: function(d) {
        return o.newBufferFrom(d);
      } }, b.arraybuffer = { string: function(d) {
        return y(new Uint8Array(d));
      }, array: function(d) {
        return m(new Uint8Array(d), new Array(d.byteLength));
      }, arraybuffer: u, uint8array: function(d) {
        return new Uint8Array(d);
      }, nodebuffer: function(d) {
        return o.newBufferFrom(new Uint8Array(d));
      } }, b.uint8array = { string: y, array: function(d) {
        return m(d, new Array(d.length));
      }, arraybuffer: function(d) {
        return d.buffer;
      }, uint8array: u, nodebuffer: function(d) {
        return o.newBufferFrom(d);
      } }, b.nodebuffer = { string: y, array: function(d) {
        return m(d, new Array(d.length));
      }, arraybuffer: function(d) {
        return b.nodebuffer.uint8array(d).buffer;
      }, uint8array: function(d) {
        return m(d, new Uint8Array(d.length));
      }, nodebuffer: u }, i.transformTo = function(d, l) {
        if (l = l || "", !d)
          return l;
        i.checkSupport(d);
        var g = i.getTypeOf(l);
        return b[g][d](l);
      }, i.resolve = function(d) {
        for (var l = d.split("/"), g = [], h = 0; h < l.length; h++) {
          var D = l[h];
          D === "." || D === "" && h !== 0 && h !== l.length - 1 || (D === ".." ? g.pop() : g.push(D));
        }
        return g.join("/");
      }, i.getTypeOf = function(d) {
        return typeof d == "string" ? "string" : Object.prototype.toString.call(d) === "[object Array]" ? "array" : a.nodebuffer && o.isBuffer(d) ? "nodebuffer" : a.uint8array && d instanceof Uint8Array ? "uint8array" : a.arraybuffer && d instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, i.checkSupport = function(d) {
        if (!a[d.toLowerCase()])
          throw new Error(d + " is not supported by this platform");
      }, i.MAX_VALUE_16BITS = 65535, i.MAX_VALUE_32BITS = -1, i.pretty = function(d) {
        var l, g, h = "";
        for (g = 0; g < (d || "").length; g++)
          h += "\\x" + ((l = d.charCodeAt(g)) < 16 ? "0" : "") + l.toString(16).toUpperCase();
        return h;
      }, i.delay = function(d, l, g) {
        setImmediate(function() {
          d.apply(g || null, l || []);
        });
      }, i.inherits = function(d, l) {
        function g() {
        }
        g.prototype = l.prototype, d.prototype = new g();
      }, i.extend = function() {
        var d, l, g = {};
        for (d = 0; d < arguments.length; d++)
          for (l in arguments[d])
            Object.prototype.hasOwnProperty.call(arguments[d], l) && g[l] === void 0 && (g[l] = arguments[d][l]);
        return g;
      }, i.prepareContent = function(d, l, g, h, D) {
        return s.Promise.resolve(l).then(function(w) {
          return a.blob && (w instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(w)) !== -1) && typeof FileReader < "u" ? new s.Promise(function(U, E) {
            var F = new FileReader();
            F.onload = function(j) {
              U(j.target.result);
            }, F.onerror = function(j) {
              E(j.target.error);
            }, F.readAsArrayBuffer(w);
          }) : w;
        }).then(function(w) {
          var U = i.getTypeOf(w);
          return U ? (U === "arraybuffer" ? w = i.transformTo("uint8array", w) : U === "string" && (D ? w = c.decode(w) : g && h !== !0 && (w = function(E) {
            return f(E, a.uint8array ? new Uint8Array(E.length) : new Array(E.length));
          }(w))), w) : s.Promise.reject(new Error("Can't read the data of '" + d + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(n, r, i) {
      var a = n("./reader/readerFor"), c = n("./utils"), o = n("./signature"), s = n("./zipEntry"), u = n("./support");
      function f(p) {
        this.files = [], this.loadOptions = p;
      }
      f.prototype = { checkSignature: function(p) {
        if (!this.reader.readAndCheckSignature(p)) {
          this.reader.index -= 4;
          var y = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + c.pretty(y) + ", expected " + c.pretty(p) + ")");
        }
      }, isSignature: function(p, y) {
        var m = this.reader.index;
        this.reader.setIndex(p);
        var b = this.reader.readString(4) === y;
        return this.reader.setIndex(m), b;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var p = this.reader.readData(this.zipCommentLength), y = u.uint8array ? "uint8array" : "array", m = c.transformTo(y, p);
        this.zipComment = this.loadOptions.decodeFileName(m);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var p, y, m, b = this.zip64EndOfCentralSize - 44; 0 < b; )
          p = this.reader.readInt(2), y = this.reader.readInt(4), m = this.reader.readData(y), this.zip64ExtensibleData[p] = { id: p, length: y, value: m };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var p, y;
        for (p = 0; p < this.files.length; p++)
          y = this.files[p], this.reader.setIndex(y.localHeaderOffset), this.checkSignature(o.LOCAL_FILE_HEADER), y.readLocalPart(this.reader), y.handleUTF8(), y.processAttributes();
      }, readCentralDir: function() {
        var p;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER); )
          (p = new s({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(p);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var p = this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);
        if (p < 0)
          throw this.isSignature(0, o.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(p);
        var y = p;
        if (this.checkSignature(o.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === c.MAX_VALUE_16BITS || this.diskWithCentralDirStart === c.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === c.MAX_VALUE_16BITS || this.centralDirRecords === c.MAX_VALUE_16BITS || this.centralDirSize === c.MAX_VALUE_32BITS || this.centralDirOffset === c.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (p = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(p), this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, o.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var m = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (m += 20, m += 12 + this.zip64EndOfCentralSize);
        var b = y - m;
        if (0 < b)
          this.isSignature(y, o.CENTRAL_FILE_HEADER) || (this.reader.zero = b);
        else if (b < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(b) + " bytes.");
      }, prepareReader: function(p) {
        this.reader = a(p);
      }, load: function(p) {
        this.prepareReader(p), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, r.exports = f;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(n, r, i) {
      var a = n("./reader/readerFor"), c = n("./utils"), o = n("./compressedObject"), s = n("./crc32"), u = n("./utf8"), f = n("./compressions"), p = n("./support");
      function y(m, b) {
        this.options = m, this.loadOptions = b;
      }
      y.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(m) {
        var b, d;
        if (m.skip(22), this.fileNameLength = m.readInt(2), d = m.readInt(2), this.fileName = m.readData(this.fileNameLength), m.skip(d), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((b = function(l) {
          for (var g in f)
            if (Object.prototype.hasOwnProperty.call(f, g) && f[g].magic === l)
              return f[g];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + c.pretty(this.compressionMethod) + " unknown (inner file : " + c.transformTo("string", this.fileName) + ")");
        this.decompressed = new o(this.compressedSize, this.uncompressedSize, this.crc32, b, m.readData(this.compressedSize));
      }, readCentralPart: function(m) {
        this.versionMadeBy = m.readInt(2), m.skip(2), this.bitFlag = m.readInt(2), this.compressionMethod = m.readString(2), this.date = m.readDate(), this.crc32 = m.readInt(4), this.compressedSize = m.readInt(4), this.uncompressedSize = m.readInt(4);
        var b = m.readInt(2);
        if (this.extraFieldsLength = m.readInt(2), this.fileCommentLength = m.readInt(2), this.diskNumberStart = m.readInt(2), this.internalFileAttributes = m.readInt(2), this.externalFileAttributes = m.readInt(4), this.localHeaderOffset = m.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        m.skip(b), this.readExtraFields(m), this.parseZIP64ExtraField(m), this.fileComment = m.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var m = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), m == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), m == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var m = a(this.extraFields[1].value);
          this.uncompressedSize === c.MAX_VALUE_32BITS && (this.uncompressedSize = m.readInt(8)), this.compressedSize === c.MAX_VALUE_32BITS && (this.compressedSize = m.readInt(8)), this.localHeaderOffset === c.MAX_VALUE_32BITS && (this.localHeaderOffset = m.readInt(8)), this.diskNumberStart === c.MAX_VALUE_32BITS && (this.diskNumberStart = m.readInt(4));
        }
      }, readExtraFields: function(m) {
        var b, d, l, g = m.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); m.index + 4 < g; )
          b = m.readInt(2), d = m.readInt(2), l = m.readData(d), this.extraFields[b] = { id: b, length: d, value: l };
        m.setIndex(g);
      }, handleUTF8: function() {
        var m = p.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = u.utf8decode(this.fileName), this.fileCommentStr = u.utf8decode(this.fileComment);
        else {
          var b = this.findExtraFieldUnicodePath();
          if (b !== null)
            this.fileNameStr = b;
          else {
            var d = c.transformTo(m, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(d);
          }
          var l = this.findExtraFieldUnicodeComment();
          if (l !== null)
            this.fileCommentStr = l;
          else {
            var g = c.transformTo(m, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(g);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var m = this.extraFields[28789];
        if (m) {
          var b = a(m.value);
          return b.readInt(1) !== 1 || s(this.fileName) !== b.readInt(4) ? null : u.utf8decode(b.readData(m.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var m = this.extraFields[25461];
        if (m) {
          var b = a(m.value);
          return b.readInt(1) !== 1 || s(this.fileComment) !== b.readInt(4) ? null : u.utf8decode(b.readData(m.length - 5));
        }
        return null;
      } }, r.exports = y;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(n, r, i) {
      function a(b, d, l) {
        this.name = b, this.dir = l.dir, this.date = l.date, this.comment = l.comment, this.unixPermissions = l.unixPermissions, this.dosPermissions = l.dosPermissions, this._data = d, this._dataBinary = l.binary, this.options = { compression: l.compression, compressionOptions: l.compressionOptions };
      }
      var c = n("./stream/StreamHelper"), o = n("./stream/DataWorker"), s = n("./utf8"), u = n("./compressedObject"), f = n("./stream/GenericWorker");
      a.prototype = { internalStream: function(b) {
        var d = null, l = "string";
        try {
          if (!b)
            throw new Error("No output type specified.");
          var g = (l = b.toLowerCase()) === "string" || l === "text";
          l !== "binarystring" && l !== "text" || (l = "string"), d = this._decompressWorker();
          var h = !this._dataBinary;
          h && !g && (d = d.pipe(new s.Utf8EncodeWorker())), !h && g && (d = d.pipe(new s.Utf8DecodeWorker()));
        } catch (D) {
          (d = new f("error")).error(D);
        }
        return new c(d, l, "");
      }, async: function(b, d) {
        return this.internalStream(b).accumulate(d);
      }, nodeStream: function(b, d) {
        return this.internalStream(b || "nodebuffer").toNodejsStream(d);
      }, _compressWorker: function(b, d) {
        if (this._data instanceof u && this._data.compression.magic === b.magic)
          return this._data.getCompressedWorker();
        var l = this._decompressWorker();
        return this._dataBinary || (l = l.pipe(new s.Utf8EncodeWorker())), u.createWorkerFrom(l, b, d);
      }, _decompressWorker: function() {
        return this._data instanceof u ? this._data.getContentWorker() : this._data instanceof f ? this._data : new o(this._data);
      } };
      for (var p = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], y = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, m = 0; m < p.length; m++)
        a.prototype[p[m]] = y;
      r.exports = a;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(n, r, i) {
      (function(a) {
        var c, o, s = a.MutationObserver || a.WebKitMutationObserver;
        if (s) {
          var u = 0, f = new s(b), p = a.document.createTextNode("");
          f.observe(p, { characterData: !0 }), c = function() {
            p.data = u = ++u % 2;
          };
        } else if (a.setImmediate || a.MessageChannel === void 0)
          c = "document" in a && "onreadystatechange" in a.document.createElement("script") ? function() {
            var d = a.document.createElement("script");
            d.onreadystatechange = function() {
              b(), d.onreadystatechange = null, d.parentNode.removeChild(d), d = null;
            }, a.document.documentElement.appendChild(d);
          } : function() {
            setTimeout(b, 0);
          };
        else {
          var y = new a.MessageChannel();
          y.port1.onmessage = b, c = function() {
            y.port2.postMessage(0);
          };
        }
        var m = [];
        function b() {
          var d, l;
          o = !0;
          for (var g = m.length; g; ) {
            for (l = m, m = [], d = -1; ++d < g; )
              l[d]();
            g = m.length;
          }
          o = !1;
        }
        r.exports = function(d) {
          m.push(d) !== 1 || o || c();
        };
      }).call(this, typeof we < "u" ? we : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(n, r, i) {
      var a = n("immediate");
      function c() {
      }
      var o = {}, s = ["REJECTED"], u = ["FULFILLED"], f = ["PENDING"];
      function p(g) {
        if (typeof g != "function")
          throw new TypeError("resolver must be a function");
        this.state = f, this.queue = [], this.outcome = void 0, g !== c && d(this, g);
      }
      function y(g, h, D) {
        this.promise = g, typeof h == "function" && (this.onFulfilled = h, this.callFulfilled = this.otherCallFulfilled), typeof D == "function" && (this.onRejected = D, this.callRejected = this.otherCallRejected);
      }
      function m(g, h, D) {
        a(function() {
          var w;
          try {
            w = h(D);
          } catch (U) {
            return o.reject(g, U);
          }
          w === g ? o.reject(g, new TypeError("Cannot resolve promise with itself")) : o.resolve(g, w);
        });
      }
      function b(g) {
        var h = g && g.then;
        if (g && (typeof g == "object" || typeof g == "function") && typeof h == "function")
          return function() {
            h.apply(g, arguments);
          };
      }
      function d(g, h) {
        var D = !1;
        function w(F) {
          D || (D = !0, o.reject(g, F));
        }
        function U(F) {
          D || (D = !0, o.resolve(g, F));
        }
        var E = l(function() {
          h(U, w);
        });
        E.status === "error" && w(E.value);
      }
      function l(g, h) {
        var D = {};
        try {
          D.value = g(h), D.status = "success";
        } catch (w) {
          D.status = "error", D.value = w;
        }
        return D;
      }
      (r.exports = p).prototype.finally = function(g) {
        if (typeof g != "function")
          return this;
        var h = this.constructor;
        return this.then(function(D) {
          return h.resolve(g()).then(function() {
            return D;
          });
        }, function(D) {
          return h.resolve(g()).then(function() {
            throw D;
          });
        });
      }, p.prototype.catch = function(g) {
        return this.then(null, g);
      }, p.prototype.then = function(g, h) {
        if (typeof g != "function" && this.state === u || typeof h != "function" && this.state === s)
          return this;
        var D = new this.constructor(c);
        return this.state !== f ? m(D, this.state === u ? g : h, this.outcome) : this.queue.push(new y(D, g, h)), D;
      }, y.prototype.callFulfilled = function(g) {
        o.resolve(this.promise, g);
      }, y.prototype.otherCallFulfilled = function(g) {
        m(this.promise, this.onFulfilled, g);
      }, y.prototype.callRejected = function(g) {
        o.reject(this.promise, g);
      }, y.prototype.otherCallRejected = function(g) {
        m(this.promise, this.onRejected, g);
      }, o.resolve = function(g, h) {
        var D = l(b, h);
        if (D.status === "error")
          return o.reject(g, D.value);
        var w = D.value;
        if (w)
          d(g, w);
        else {
          g.state = u, g.outcome = h;
          for (var U = -1, E = g.queue.length; ++U < E; )
            g.queue[U].callFulfilled(h);
        }
        return g;
      }, o.reject = function(g, h) {
        g.state = s, g.outcome = h;
        for (var D = -1, w = g.queue.length; ++D < w; )
          g.queue[D].callRejected(h);
        return g;
      }, p.resolve = function(g) {
        return g instanceof this ? g : o.resolve(new this(c), g);
      }, p.reject = function(g) {
        var h = new this(c);
        return o.reject(h, g);
      }, p.all = function(g) {
        var h = this;
        if (Object.prototype.toString.call(g) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var D = g.length, w = !1;
        if (!D)
          return this.resolve([]);
        for (var U = new Array(D), E = 0, F = -1, j = new this(c); ++F < D; )
          q(g[F], F);
        return j;
        function q(Y, oe) {
          h.resolve(Y).then(function(T) {
            U[oe] = T, ++E !== D || w || (w = !0, o.resolve(j, U));
          }, function(T) {
            w || (w = !0, o.reject(j, T));
          });
        }
      }, p.race = function(g) {
        var h = this;
        if (Object.prototype.toString.call(g) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var D = g.length, w = !1;
        if (!D)
          return this.resolve([]);
        for (var U = -1, E = new this(c); ++U < D; )
          F = g[U], h.resolve(F).then(function(j) {
            w || (w = !0, o.resolve(E, j));
          }, function(j) {
            w || (w = !0, o.reject(E, j));
          });
        var F;
        return E;
      };
    }, { immediate: 36 }], 38: [function(n, r, i) {
      var a = {};
      (0, n("./lib/utils/common").assign)(a, n("./lib/deflate"), n("./lib/inflate"), n("./lib/zlib/constants")), r.exports = a;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(n, r, i) {
      var a = n("./zlib/deflate"), c = n("./utils/common"), o = n("./utils/strings"), s = n("./zlib/messages"), u = n("./zlib/zstream"), f = Object.prototype.toString, p = 0, y = -1, m = 0, b = 8;
      function d(g) {
        if (!(this instanceof d))
          return new d(g);
        this.options = c.assign({ level: y, method: b, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: m, to: "" }, g || {});
        var h = this.options;
        h.raw && 0 < h.windowBits ? h.windowBits = -h.windowBits : h.gzip && 0 < h.windowBits && h.windowBits < 16 && (h.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new u(), this.strm.avail_out = 0;
        var D = a.deflateInit2(this.strm, h.level, h.method, h.windowBits, h.memLevel, h.strategy);
        if (D !== p)
          throw new Error(s[D]);
        if (h.header && a.deflateSetHeader(this.strm, h.header), h.dictionary) {
          var w;
          if (w = typeof h.dictionary == "string" ? o.string2buf(h.dictionary) : f.call(h.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(h.dictionary) : h.dictionary, (D = a.deflateSetDictionary(this.strm, w)) !== p)
            throw new Error(s[D]);
          this._dict_set = !0;
        }
      }
      function l(g, h) {
        var D = new d(h);
        if (D.push(g, !0), D.err)
          throw D.msg || s[D.err];
        return D.result;
      }
      d.prototype.push = function(g, h) {
        var D, w, U = this.strm, E = this.options.chunkSize;
        if (this.ended)
          return !1;
        w = h === ~~h ? h : h === !0 ? 4 : 0, typeof g == "string" ? U.input = o.string2buf(g) : f.call(g) === "[object ArrayBuffer]" ? U.input = new Uint8Array(g) : U.input = g, U.next_in = 0, U.avail_in = U.input.length;
        do {
          if (U.avail_out === 0 && (U.output = new c.Buf8(E), U.next_out = 0, U.avail_out = E), (D = a.deflate(U, w)) !== 1 && D !== p)
            return this.onEnd(D), !(this.ended = !0);
          U.avail_out !== 0 && (U.avail_in !== 0 || w !== 4 && w !== 2) || (this.options.to === "string" ? this.onData(o.buf2binstring(c.shrinkBuf(U.output, U.next_out))) : this.onData(c.shrinkBuf(U.output, U.next_out)));
        } while ((0 < U.avail_in || U.avail_out === 0) && D !== 1);
        return w === 4 ? (D = a.deflateEnd(this.strm), this.onEnd(D), this.ended = !0, D === p) : w !== 2 || (this.onEnd(p), !(U.avail_out = 0));
      }, d.prototype.onData = function(g) {
        this.chunks.push(g);
      }, d.prototype.onEnd = function(g) {
        g === p && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = c.flattenChunks(this.chunks)), this.chunks = [], this.err = g, this.msg = this.strm.msg;
      }, i.Deflate = d, i.deflate = l, i.deflateRaw = function(g, h) {
        return (h = h || {}).raw = !0, l(g, h);
      }, i.gzip = function(g, h) {
        return (h = h || {}).gzip = !0, l(g, h);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(n, r, i) {
      var a = n("./zlib/inflate"), c = n("./utils/common"), o = n("./utils/strings"), s = n("./zlib/constants"), u = n("./zlib/messages"), f = n("./zlib/zstream"), p = n("./zlib/gzheader"), y = Object.prototype.toString;
      function m(d) {
        if (!(this instanceof m))
          return new m(d);
        this.options = c.assign({ chunkSize: 16384, windowBits: 0, to: "" }, d || {});
        var l = this.options;
        l.raw && 0 <= l.windowBits && l.windowBits < 16 && (l.windowBits = -l.windowBits, l.windowBits === 0 && (l.windowBits = -15)), !(0 <= l.windowBits && l.windowBits < 16) || d && d.windowBits || (l.windowBits += 32), 15 < l.windowBits && l.windowBits < 48 && !(15 & l.windowBits) && (l.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new f(), this.strm.avail_out = 0;
        var g = a.inflateInit2(this.strm, l.windowBits);
        if (g !== s.Z_OK)
          throw new Error(u[g]);
        this.header = new p(), a.inflateGetHeader(this.strm, this.header);
      }
      function b(d, l) {
        var g = new m(l);
        if (g.push(d, !0), g.err)
          throw g.msg || u[g.err];
        return g.result;
      }
      m.prototype.push = function(d, l) {
        var g, h, D, w, U, E, F = this.strm, j = this.options.chunkSize, q = this.options.dictionary, Y = !1;
        if (this.ended)
          return !1;
        h = l === ~~l ? l : l === !0 ? s.Z_FINISH : s.Z_NO_FLUSH, typeof d == "string" ? F.input = o.binstring2buf(d) : y.call(d) === "[object ArrayBuffer]" ? F.input = new Uint8Array(d) : F.input = d, F.next_in = 0, F.avail_in = F.input.length;
        do {
          if (F.avail_out === 0 && (F.output = new c.Buf8(j), F.next_out = 0, F.avail_out = j), (g = a.inflate(F, s.Z_NO_FLUSH)) === s.Z_NEED_DICT && q && (E = typeof q == "string" ? o.string2buf(q) : y.call(q) === "[object ArrayBuffer]" ? new Uint8Array(q) : q, g = a.inflateSetDictionary(this.strm, E)), g === s.Z_BUF_ERROR && Y === !0 && (g = s.Z_OK, Y = !1), g !== s.Z_STREAM_END && g !== s.Z_OK)
            return this.onEnd(g), !(this.ended = !0);
          F.next_out && (F.avail_out !== 0 && g !== s.Z_STREAM_END && (F.avail_in !== 0 || h !== s.Z_FINISH && h !== s.Z_SYNC_FLUSH) || (this.options.to === "string" ? (D = o.utf8border(F.output, F.next_out), w = F.next_out - D, U = o.buf2string(F.output, D), F.next_out = w, F.avail_out = j - w, w && c.arraySet(F.output, F.output, D, w, 0), this.onData(U)) : this.onData(c.shrinkBuf(F.output, F.next_out)))), F.avail_in === 0 && F.avail_out === 0 && (Y = !0);
        } while ((0 < F.avail_in || F.avail_out === 0) && g !== s.Z_STREAM_END);
        return g === s.Z_STREAM_END && (h = s.Z_FINISH), h === s.Z_FINISH ? (g = a.inflateEnd(this.strm), this.onEnd(g), this.ended = !0, g === s.Z_OK) : h !== s.Z_SYNC_FLUSH || (this.onEnd(s.Z_OK), !(F.avail_out = 0));
      }, m.prototype.onData = function(d) {
        this.chunks.push(d);
      }, m.prototype.onEnd = function(d) {
        d === s.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = c.flattenChunks(this.chunks)), this.chunks = [], this.err = d, this.msg = this.strm.msg;
      }, i.Inflate = m, i.inflate = b, i.inflateRaw = function(d, l) {
        return (l = l || {}).raw = !0, b(d, l);
      }, i.ungzip = b;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(n, r, i) {
      var a = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      i.assign = function(s) {
        for (var u = Array.prototype.slice.call(arguments, 1); u.length; ) {
          var f = u.shift();
          if (f) {
            if (typeof f != "object")
              throw new TypeError(f + "must be non-object");
            for (var p in f)
              f.hasOwnProperty(p) && (s[p] = f[p]);
          }
        }
        return s;
      }, i.shrinkBuf = function(s, u) {
        return s.length === u ? s : s.subarray ? s.subarray(0, u) : (s.length = u, s);
      };
      var c = { arraySet: function(s, u, f, p, y) {
        if (u.subarray && s.subarray)
          s.set(u.subarray(f, f + p), y);
        else
          for (var m = 0; m < p; m++)
            s[y + m] = u[f + m];
      }, flattenChunks: function(s) {
        var u, f, p, y, m, b;
        for (u = p = 0, f = s.length; u < f; u++)
          p += s[u].length;
        for (b = new Uint8Array(p), u = y = 0, f = s.length; u < f; u++)
          m = s[u], b.set(m, y), y += m.length;
        return b;
      } }, o = { arraySet: function(s, u, f, p, y) {
        for (var m = 0; m < p; m++)
          s[y + m] = u[f + m];
      }, flattenChunks: function(s) {
        return [].concat.apply([], s);
      } };
      i.setTyped = function(s) {
        s ? (i.Buf8 = Uint8Array, i.Buf16 = Uint16Array, i.Buf32 = Int32Array, i.assign(i, c)) : (i.Buf8 = Array, i.Buf16 = Array, i.Buf32 = Array, i.assign(i, o));
      }, i.setTyped(a);
    }, {}], 42: [function(n, r, i) {
      var a = n("./common"), c = !0, o = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        c = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        o = !1;
      }
      for (var s = new a.Buf8(256), u = 0; u < 256; u++)
        s[u] = 252 <= u ? 6 : 248 <= u ? 5 : 240 <= u ? 4 : 224 <= u ? 3 : 192 <= u ? 2 : 1;
      function f(p, y) {
        if (y < 65537 && (p.subarray && o || !p.subarray && c))
          return String.fromCharCode.apply(null, a.shrinkBuf(p, y));
        for (var m = "", b = 0; b < y; b++)
          m += String.fromCharCode(p[b]);
        return m;
      }
      s[254] = s[254] = 1, i.string2buf = function(p) {
        var y, m, b, d, l, g = p.length, h = 0;
        for (d = 0; d < g; d++)
          (64512 & (m = p.charCodeAt(d))) == 55296 && d + 1 < g && (64512 & (b = p.charCodeAt(d + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (b - 56320), d++), h += m < 128 ? 1 : m < 2048 ? 2 : m < 65536 ? 3 : 4;
        for (y = new a.Buf8(h), d = l = 0; l < h; d++)
          (64512 & (m = p.charCodeAt(d))) == 55296 && d + 1 < g && (64512 & (b = p.charCodeAt(d + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (b - 56320), d++), m < 128 ? y[l++] = m : (m < 2048 ? y[l++] = 192 | m >>> 6 : (m < 65536 ? y[l++] = 224 | m >>> 12 : (y[l++] = 240 | m >>> 18, y[l++] = 128 | m >>> 12 & 63), y[l++] = 128 | m >>> 6 & 63), y[l++] = 128 | 63 & m);
        return y;
      }, i.buf2binstring = function(p) {
        return f(p, p.length);
      }, i.binstring2buf = function(p) {
        for (var y = new a.Buf8(p.length), m = 0, b = y.length; m < b; m++)
          y[m] = p.charCodeAt(m);
        return y;
      }, i.buf2string = function(p, y) {
        var m, b, d, l, g = y || p.length, h = new Array(2 * g);
        for (m = b = 0; m < g; )
          if ((d = p[m++]) < 128)
            h[b++] = d;
          else if (4 < (l = s[d]))
            h[b++] = 65533, m += l - 1;
          else {
            for (d &= l === 2 ? 31 : l === 3 ? 15 : 7; 1 < l && m < g; )
              d = d << 6 | 63 & p[m++], l--;
            1 < l ? h[b++] = 65533 : d < 65536 ? h[b++] = d : (d -= 65536, h[b++] = 55296 | d >> 10 & 1023, h[b++] = 56320 | 1023 & d);
          }
        return f(h, b);
      }, i.utf8border = function(p, y) {
        var m;
        for ((y = y || p.length) > p.length && (y = p.length), m = y - 1; 0 <= m && (192 & p[m]) == 128; )
          m--;
        return m < 0 || m === 0 ? y : m + s[p[m]] > y ? m : y;
      };
    }, { "./common": 41 }], 43: [function(n, r, i) {
      r.exports = function(a, c, o, s) {
        for (var u = 65535 & a | 0, f = a >>> 16 & 65535 | 0, p = 0; o !== 0; ) {
          for (o -= p = 2e3 < o ? 2e3 : o; f = f + (u = u + c[s++] | 0) | 0, --p; )
            ;
          u %= 65521, f %= 65521;
        }
        return u | f << 16 | 0;
      };
    }, {}], 44: [function(n, r, i) {
      r.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(n, r, i) {
      var a = function() {
        for (var c, o = [], s = 0; s < 256; s++) {
          c = s;
          for (var u = 0; u < 8; u++)
            c = 1 & c ? 3988292384 ^ c >>> 1 : c >>> 1;
          o[s] = c;
        }
        return o;
      }();
      r.exports = function(c, o, s, u) {
        var f = a, p = u + s;
        c ^= -1;
        for (var y = u; y < p; y++)
          c = c >>> 8 ^ f[255 & (c ^ o[y])];
        return -1 ^ c;
      };
    }, {}], 46: [function(n, r, i) {
      var a, c = n("../utils/common"), o = n("./trees"), s = n("./adler32"), u = n("./crc32"), f = n("./messages"), p = 0, y = 4, m = 0, b = -2, d = -1, l = 4, g = 2, h = 8, D = 9, w = 286, U = 30, E = 19, F = 2 * w + 1, j = 15, q = 3, Y = 258, oe = Y + q + 1, T = 42, P = 113, _ = 1, Q = 2, S = 3, R = 4;
      function N(v, ie) {
        return v.msg = f[ie], ie;
      }
      function I(v) {
        return (v << 1) - (4 < v ? 9 : 0);
      }
      function M(v) {
        for (var ie = v.length; 0 <= --ie; )
          v[ie] = 0;
      }
      function k(v) {
        var ie = v.state, ee = ie.pending;
        ee > v.avail_out && (ee = v.avail_out), ee !== 0 && (c.arraySet(v.output, ie.pending_buf, ie.pending_out, ee, v.next_out), v.next_out += ee, ie.pending_out += ee, v.total_out += ee, v.avail_out -= ee, ie.pending -= ee, ie.pending === 0 && (ie.pending_out = 0));
      }
      function C(v, ie) {
        o._tr_flush_block(v, 0 <= v.block_start ? v.block_start : -1, v.strstart - v.block_start, ie), v.block_start = v.strstart, k(v.strm);
      }
      function J(v, ie) {
        v.pending_buf[v.pending++] = ie;
      }
      function ce(v, ie) {
        v.pending_buf[v.pending++] = ie >>> 8 & 255, v.pending_buf[v.pending++] = 255 & ie;
      }
      function re(v, ie) {
        var ee, W, B = v.max_chain_length, Z = v.strstart, ae = v.prev_length, de = v.nice_match, V = v.strstart > v.w_size - oe ? v.strstart - (v.w_size - oe) : 0, O = v.window, X = v.w_mask, G = v.prev, ne = v.strstart + Y, pe = O[Z + ae - 1], ge = O[Z + ae];
        v.prev_length >= v.good_match && (B >>= 2), de > v.lookahead && (de = v.lookahead);
        do
          if (O[(ee = ie) + ae] === ge && O[ee + ae - 1] === pe && O[ee] === O[Z] && O[++ee] === O[Z + 1]) {
            Z += 2, ee++;
            do
              ;
            while (O[++Z] === O[++ee] && O[++Z] === O[++ee] && O[++Z] === O[++ee] && O[++Z] === O[++ee] && O[++Z] === O[++ee] && O[++Z] === O[++ee] && O[++Z] === O[++ee] && O[++Z] === O[++ee] && Z < ne);
            if (W = Y - (ne - Z), Z = ne - Y, ae < W) {
              if (v.match_start = ie, de <= (ae = W))
                break;
              pe = O[Z + ae - 1], ge = O[Z + ae];
            }
          }
        while ((ie = G[ie & X]) > V && --B != 0);
        return ae <= v.lookahead ? ae : v.lookahead;
      }
      function le(v) {
        var ie, ee, W, B, Z, ae, de, V, O, X, G = v.w_size;
        do {
          if (B = v.window_size - v.lookahead - v.strstart, v.strstart >= G + (G - oe)) {
            for (c.arraySet(v.window, v.window, G, G, 0), v.match_start -= G, v.strstart -= G, v.block_start -= G, ie = ee = v.hash_size; W = v.head[--ie], v.head[ie] = G <= W ? W - G : 0, --ee; )
              ;
            for (ie = ee = G; W = v.prev[--ie], v.prev[ie] = G <= W ? W - G : 0, --ee; )
              ;
            B += G;
          }
          if (v.strm.avail_in === 0)
            break;
          if (ae = v.strm, de = v.window, V = v.strstart + v.lookahead, O = B, X = void 0, X = ae.avail_in, O < X && (X = O), ee = X === 0 ? 0 : (ae.avail_in -= X, c.arraySet(de, ae.input, ae.next_in, X, V), ae.state.wrap === 1 ? ae.adler = s(ae.adler, de, X, V) : ae.state.wrap === 2 && (ae.adler = u(ae.adler, de, X, V)), ae.next_in += X, ae.total_in += X, X), v.lookahead += ee, v.lookahead + v.insert >= q)
            for (Z = v.strstart - v.insert, v.ins_h = v.window[Z], v.ins_h = (v.ins_h << v.hash_shift ^ v.window[Z + 1]) & v.hash_mask; v.insert && (v.ins_h = (v.ins_h << v.hash_shift ^ v.window[Z + q - 1]) & v.hash_mask, v.prev[Z & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = Z, Z++, v.insert--, !(v.lookahead + v.insert < q)); )
              ;
        } while (v.lookahead < oe && v.strm.avail_in !== 0);
      }
      function me(v, ie) {
        for (var ee, W; ; ) {
          if (v.lookahead < oe) {
            if (le(v), v.lookahead < oe && ie === p)
              return _;
            if (v.lookahead === 0)
              break;
          }
          if (ee = 0, v.lookahead >= q && (v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + q - 1]) & v.hash_mask, ee = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = v.strstart), ee !== 0 && v.strstart - ee <= v.w_size - oe && (v.match_length = re(v, ee)), v.match_length >= q)
            if (W = o._tr_tally(v, v.strstart - v.match_start, v.match_length - q), v.lookahead -= v.match_length, v.match_length <= v.max_lazy_match && v.lookahead >= q) {
              for (v.match_length--; v.strstart++, v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + q - 1]) & v.hash_mask, ee = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = v.strstart, --v.match_length != 0; )
                ;
              v.strstart++;
            } else
              v.strstart += v.match_length, v.match_length = 0, v.ins_h = v.window[v.strstart], v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + 1]) & v.hash_mask;
          else
            W = o._tr_tally(v, 0, v.window[v.strstart]), v.lookahead--, v.strstart++;
          if (W && (C(v, !1), v.strm.avail_out === 0))
            return _;
        }
        return v.insert = v.strstart < q - 1 ? v.strstart : q - 1, ie === y ? (C(v, !0), v.strm.avail_out === 0 ? S : R) : v.last_lit && (C(v, !1), v.strm.avail_out === 0) ? _ : Q;
      }
      function ye(v, ie) {
        for (var ee, W, B; ; ) {
          if (v.lookahead < oe) {
            if (le(v), v.lookahead < oe && ie === p)
              return _;
            if (v.lookahead === 0)
              break;
          }
          if (ee = 0, v.lookahead >= q && (v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + q - 1]) & v.hash_mask, ee = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = v.strstart), v.prev_length = v.match_length, v.prev_match = v.match_start, v.match_length = q - 1, ee !== 0 && v.prev_length < v.max_lazy_match && v.strstart - ee <= v.w_size - oe && (v.match_length = re(v, ee), v.match_length <= 5 && (v.strategy === 1 || v.match_length === q && 4096 < v.strstart - v.match_start) && (v.match_length = q - 1)), v.prev_length >= q && v.match_length <= v.prev_length) {
            for (B = v.strstart + v.lookahead - q, W = o._tr_tally(v, v.strstart - 1 - v.prev_match, v.prev_length - q), v.lookahead -= v.prev_length - 1, v.prev_length -= 2; ++v.strstart <= B && (v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + q - 1]) & v.hash_mask, ee = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = v.strstart), --v.prev_length != 0; )
              ;
            if (v.match_available = 0, v.match_length = q - 1, v.strstart++, W && (C(v, !1), v.strm.avail_out === 0))
              return _;
          } else if (v.match_available) {
            if ((W = o._tr_tally(v, 0, v.window[v.strstart - 1])) && C(v, !1), v.strstart++, v.lookahead--, v.strm.avail_out === 0)
              return _;
          } else
            v.match_available = 1, v.strstart++, v.lookahead--;
        }
        return v.match_available && (W = o._tr_tally(v, 0, v.window[v.strstart - 1]), v.match_available = 0), v.insert = v.strstart < q - 1 ? v.strstart : q - 1, ie === y ? (C(v, !0), v.strm.avail_out === 0 ? S : R) : v.last_lit && (C(v, !1), v.strm.avail_out === 0) ? _ : Q;
      }
      function $(v, ie, ee, W, B) {
        this.good_length = v, this.max_lazy = ie, this.nice_length = ee, this.max_chain = W, this.func = B;
      }
      function se() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = h, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * F), this.dyn_dtree = new c.Buf16(2 * (2 * U + 1)), this.bl_tree = new c.Buf16(2 * (2 * E + 1)), M(this.dyn_ltree), M(this.dyn_dtree), M(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(j + 1), this.heap = new c.Buf16(2 * w + 1), M(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * w + 1), M(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function fe(v) {
        var ie;
        return v && v.state ? (v.total_in = v.total_out = 0, v.data_type = g, (ie = v.state).pending = 0, ie.pending_out = 0, ie.wrap < 0 && (ie.wrap = -ie.wrap), ie.status = ie.wrap ? T : P, v.adler = ie.wrap === 2 ? 0 : 1, ie.last_flush = p, o._tr_init(ie), m) : N(v, b);
      }
      function be(v) {
        var ie = fe(v);
        return ie === m && function(ee) {
          ee.window_size = 2 * ee.w_size, M(ee.head), ee.max_lazy_match = a[ee.level].max_lazy, ee.good_match = a[ee.level].good_length, ee.nice_match = a[ee.level].nice_length, ee.max_chain_length = a[ee.level].max_chain, ee.strstart = 0, ee.block_start = 0, ee.lookahead = 0, ee.insert = 0, ee.match_length = ee.prev_length = q - 1, ee.match_available = 0, ee.ins_h = 0;
        }(v.state), ie;
      }
      function _e(v, ie, ee, W, B, Z) {
        if (!v)
          return b;
        var ae = 1;
        if (ie === d && (ie = 6), W < 0 ? (ae = 0, W = -W) : 15 < W && (ae = 2, W -= 16), B < 1 || D < B || ee !== h || W < 8 || 15 < W || ie < 0 || 9 < ie || Z < 0 || l < Z)
          return N(v, b);
        W === 8 && (W = 9);
        var de = new se();
        return (v.state = de).strm = v, de.wrap = ae, de.gzhead = null, de.w_bits = W, de.w_size = 1 << de.w_bits, de.w_mask = de.w_size - 1, de.hash_bits = B + 7, de.hash_size = 1 << de.hash_bits, de.hash_mask = de.hash_size - 1, de.hash_shift = ~~((de.hash_bits + q - 1) / q), de.window = new c.Buf8(2 * de.w_size), de.head = new c.Buf16(de.hash_size), de.prev = new c.Buf16(de.w_size), de.lit_bufsize = 1 << B + 6, de.pending_buf_size = 4 * de.lit_bufsize, de.pending_buf = new c.Buf8(de.pending_buf_size), de.d_buf = 1 * de.lit_bufsize, de.l_buf = 3 * de.lit_bufsize, de.level = ie, de.strategy = Z, de.method = ee, be(v);
      }
      a = [new $(0, 0, 0, 0, function(v, ie) {
        var ee = 65535;
        for (ee > v.pending_buf_size - 5 && (ee = v.pending_buf_size - 5); ; ) {
          if (v.lookahead <= 1) {
            if (le(v), v.lookahead === 0 && ie === p)
              return _;
            if (v.lookahead === 0)
              break;
          }
          v.strstart += v.lookahead, v.lookahead = 0;
          var W = v.block_start + ee;
          if ((v.strstart === 0 || v.strstart >= W) && (v.lookahead = v.strstart - W, v.strstart = W, C(v, !1), v.strm.avail_out === 0) || v.strstart - v.block_start >= v.w_size - oe && (C(v, !1), v.strm.avail_out === 0))
            return _;
        }
        return v.insert = 0, ie === y ? (C(v, !0), v.strm.avail_out === 0 ? S : R) : (v.strstart > v.block_start && (C(v, !1), v.strm.avail_out), _);
      }), new $(4, 4, 8, 4, me), new $(4, 5, 16, 8, me), new $(4, 6, 32, 32, me), new $(4, 4, 16, 16, ye), new $(8, 16, 32, 32, ye), new $(8, 16, 128, 128, ye), new $(8, 32, 128, 256, ye), new $(32, 128, 258, 1024, ye), new $(32, 258, 258, 4096, ye)], i.deflateInit = function(v, ie) {
        return _e(v, ie, h, 15, 8, 0);
      }, i.deflateInit2 = _e, i.deflateReset = be, i.deflateResetKeep = fe, i.deflateSetHeader = function(v, ie) {
        return v && v.state ? v.state.wrap !== 2 ? b : (v.state.gzhead = ie, m) : b;
      }, i.deflate = function(v, ie) {
        var ee, W, B, Z;
        if (!v || !v.state || 5 < ie || ie < 0)
          return v ? N(v, b) : b;
        if (W = v.state, !v.output || !v.input && v.avail_in !== 0 || W.status === 666 && ie !== y)
          return N(v, v.avail_out === 0 ? -5 : b);
        if (W.strm = v, ee = W.last_flush, W.last_flush = ie, W.status === T)
          if (W.wrap === 2)
            v.adler = 0, J(W, 31), J(W, 139), J(W, 8), W.gzhead ? (J(W, (W.gzhead.text ? 1 : 0) + (W.gzhead.hcrc ? 2 : 0) + (W.gzhead.extra ? 4 : 0) + (W.gzhead.name ? 8 : 0) + (W.gzhead.comment ? 16 : 0)), J(W, 255 & W.gzhead.time), J(W, W.gzhead.time >> 8 & 255), J(W, W.gzhead.time >> 16 & 255), J(W, W.gzhead.time >> 24 & 255), J(W, W.level === 9 ? 2 : 2 <= W.strategy || W.level < 2 ? 4 : 0), J(W, 255 & W.gzhead.os), W.gzhead.extra && W.gzhead.extra.length && (J(W, 255 & W.gzhead.extra.length), J(W, W.gzhead.extra.length >> 8 & 255)), W.gzhead.hcrc && (v.adler = u(v.adler, W.pending_buf, W.pending, 0)), W.gzindex = 0, W.status = 69) : (J(W, 0), J(W, 0), J(W, 0), J(W, 0), J(W, 0), J(W, W.level === 9 ? 2 : 2 <= W.strategy || W.level < 2 ? 4 : 0), J(W, 3), W.status = P);
          else {
            var ae = h + (W.w_bits - 8 << 4) << 8;
            ae |= (2 <= W.strategy || W.level < 2 ? 0 : W.level < 6 ? 1 : W.level === 6 ? 2 : 3) << 6, W.strstart !== 0 && (ae |= 32), ae += 31 - ae % 31, W.status = P, ce(W, ae), W.strstart !== 0 && (ce(W, v.adler >>> 16), ce(W, 65535 & v.adler)), v.adler = 1;
          }
        if (W.status === 69)
          if (W.gzhead.extra) {
            for (B = W.pending; W.gzindex < (65535 & W.gzhead.extra.length) && (W.pending !== W.pending_buf_size || (W.gzhead.hcrc && W.pending > B && (v.adler = u(v.adler, W.pending_buf, W.pending - B, B)), k(v), B = W.pending, W.pending !== W.pending_buf_size)); )
              J(W, 255 & W.gzhead.extra[W.gzindex]), W.gzindex++;
            W.gzhead.hcrc && W.pending > B && (v.adler = u(v.adler, W.pending_buf, W.pending - B, B)), W.gzindex === W.gzhead.extra.length && (W.gzindex = 0, W.status = 73);
          } else
            W.status = 73;
        if (W.status === 73)
          if (W.gzhead.name) {
            B = W.pending;
            do {
              if (W.pending === W.pending_buf_size && (W.gzhead.hcrc && W.pending > B && (v.adler = u(v.adler, W.pending_buf, W.pending - B, B)), k(v), B = W.pending, W.pending === W.pending_buf_size)) {
                Z = 1;
                break;
              }
              Z = W.gzindex < W.gzhead.name.length ? 255 & W.gzhead.name.charCodeAt(W.gzindex++) : 0, J(W, Z);
            } while (Z !== 0);
            W.gzhead.hcrc && W.pending > B && (v.adler = u(v.adler, W.pending_buf, W.pending - B, B)), Z === 0 && (W.gzindex = 0, W.status = 91);
          } else
            W.status = 91;
        if (W.status === 91)
          if (W.gzhead.comment) {
            B = W.pending;
            do {
              if (W.pending === W.pending_buf_size && (W.gzhead.hcrc && W.pending > B && (v.adler = u(v.adler, W.pending_buf, W.pending - B, B)), k(v), B = W.pending, W.pending === W.pending_buf_size)) {
                Z = 1;
                break;
              }
              Z = W.gzindex < W.gzhead.comment.length ? 255 & W.gzhead.comment.charCodeAt(W.gzindex++) : 0, J(W, Z);
            } while (Z !== 0);
            W.gzhead.hcrc && W.pending > B && (v.adler = u(v.adler, W.pending_buf, W.pending - B, B)), Z === 0 && (W.status = 103);
          } else
            W.status = 103;
        if (W.status === 103 && (W.gzhead.hcrc ? (W.pending + 2 > W.pending_buf_size && k(v), W.pending + 2 <= W.pending_buf_size && (J(W, 255 & v.adler), J(W, v.adler >> 8 & 255), v.adler = 0, W.status = P)) : W.status = P), W.pending !== 0) {
          if (k(v), v.avail_out === 0)
            return W.last_flush = -1, m;
        } else if (v.avail_in === 0 && I(ie) <= I(ee) && ie !== y)
          return N(v, -5);
        if (W.status === 666 && v.avail_in !== 0)
          return N(v, -5);
        if (v.avail_in !== 0 || W.lookahead !== 0 || ie !== p && W.status !== 666) {
          var de = W.strategy === 2 ? function(V, O) {
            for (var X; ; ) {
              if (V.lookahead === 0 && (le(V), V.lookahead === 0)) {
                if (O === p)
                  return _;
                break;
              }
              if (V.match_length = 0, X = o._tr_tally(V, 0, V.window[V.strstart]), V.lookahead--, V.strstart++, X && (C(V, !1), V.strm.avail_out === 0))
                return _;
            }
            return V.insert = 0, O === y ? (C(V, !0), V.strm.avail_out === 0 ? S : R) : V.last_lit && (C(V, !1), V.strm.avail_out === 0) ? _ : Q;
          }(W, ie) : W.strategy === 3 ? function(V, O) {
            for (var X, G, ne, pe, ge = V.window; ; ) {
              if (V.lookahead <= Y) {
                if (le(V), V.lookahead <= Y && O === p)
                  return _;
                if (V.lookahead === 0)
                  break;
              }
              if (V.match_length = 0, V.lookahead >= q && 0 < V.strstart && (G = ge[ne = V.strstart - 1]) === ge[++ne] && G === ge[++ne] && G === ge[++ne]) {
                pe = V.strstart + Y;
                do
                  ;
                while (G === ge[++ne] && G === ge[++ne] && G === ge[++ne] && G === ge[++ne] && G === ge[++ne] && G === ge[++ne] && G === ge[++ne] && G === ge[++ne] && ne < pe);
                V.match_length = Y - (pe - ne), V.match_length > V.lookahead && (V.match_length = V.lookahead);
              }
              if (V.match_length >= q ? (X = o._tr_tally(V, 1, V.match_length - q), V.lookahead -= V.match_length, V.strstart += V.match_length, V.match_length = 0) : (X = o._tr_tally(V, 0, V.window[V.strstart]), V.lookahead--, V.strstart++), X && (C(V, !1), V.strm.avail_out === 0))
                return _;
            }
            return V.insert = 0, O === y ? (C(V, !0), V.strm.avail_out === 0 ? S : R) : V.last_lit && (C(V, !1), V.strm.avail_out === 0) ? _ : Q;
          }(W, ie) : a[W.level].func(W, ie);
          if (de !== S && de !== R || (W.status = 666), de === _ || de === S)
            return v.avail_out === 0 && (W.last_flush = -1), m;
          if (de === Q && (ie === 1 ? o._tr_align(W) : ie !== 5 && (o._tr_stored_block(W, 0, 0, !1), ie === 3 && (M(W.head), W.lookahead === 0 && (W.strstart = 0, W.block_start = 0, W.insert = 0))), k(v), v.avail_out === 0))
            return W.last_flush = -1, m;
        }
        return ie !== y ? m : W.wrap <= 0 ? 1 : (W.wrap === 2 ? (J(W, 255 & v.adler), J(W, v.adler >> 8 & 255), J(W, v.adler >> 16 & 255), J(W, v.adler >> 24 & 255), J(W, 255 & v.total_in), J(W, v.total_in >> 8 & 255), J(W, v.total_in >> 16 & 255), J(W, v.total_in >> 24 & 255)) : (ce(W, v.adler >>> 16), ce(W, 65535 & v.adler)), k(v), 0 < W.wrap && (W.wrap = -W.wrap), W.pending !== 0 ? m : 1);
      }, i.deflateEnd = function(v) {
        var ie;
        return v && v.state ? (ie = v.state.status) !== T && ie !== 69 && ie !== 73 && ie !== 91 && ie !== 103 && ie !== P && ie !== 666 ? N(v, b) : (v.state = null, ie === P ? N(v, -3) : m) : b;
      }, i.deflateSetDictionary = function(v, ie) {
        var ee, W, B, Z, ae, de, V, O, X = ie.length;
        if (!v || !v.state || (Z = (ee = v.state).wrap) === 2 || Z === 1 && ee.status !== T || ee.lookahead)
          return b;
        for (Z === 1 && (v.adler = s(v.adler, ie, X, 0)), ee.wrap = 0, X >= ee.w_size && (Z === 0 && (M(ee.head), ee.strstart = 0, ee.block_start = 0, ee.insert = 0), O = new c.Buf8(ee.w_size), c.arraySet(O, ie, X - ee.w_size, ee.w_size, 0), ie = O, X = ee.w_size), ae = v.avail_in, de = v.next_in, V = v.input, v.avail_in = X, v.next_in = 0, v.input = ie, le(ee); ee.lookahead >= q; ) {
          for (W = ee.strstart, B = ee.lookahead - (q - 1); ee.ins_h = (ee.ins_h << ee.hash_shift ^ ee.window[W + q - 1]) & ee.hash_mask, ee.prev[W & ee.w_mask] = ee.head[ee.ins_h], ee.head[ee.ins_h] = W, W++, --B; )
            ;
          ee.strstart = W, ee.lookahead = q - 1, le(ee);
        }
        return ee.strstart += ee.lookahead, ee.block_start = ee.strstart, ee.insert = ee.lookahead, ee.lookahead = 0, ee.match_length = ee.prev_length = q - 1, ee.match_available = 0, v.next_in = de, v.input = V, v.avail_in = ae, ee.wrap = Z, m;
      }, i.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(n, r, i) {
      r.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(n, r, i) {
      r.exports = function(a, c) {
        var o, s, u, f, p, y, m, b, d, l, g, h, D, w, U, E, F, j, q, Y, oe, T, P, _, Q;
        o = a.state, s = a.next_in, _ = a.input, u = s + (a.avail_in - 5), f = a.next_out, Q = a.output, p = f - (c - a.avail_out), y = f + (a.avail_out - 257), m = o.dmax, b = o.wsize, d = o.whave, l = o.wnext, g = o.window, h = o.hold, D = o.bits, w = o.lencode, U = o.distcode, E = (1 << o.lenbits) - 1, F = (1 << o.distbits) - 1;
        e:
          do {
            D < 15 && (h += _[s++] << D, D += 8, h += _[s++] << D, D += 8), j = w[h & E];
            t:
              for (; ; ) {
                if (h >>>= q = j >>> 24, D -= q, (q = j >>> 16 & 255) === 0)
                  Q[f++] = 65535 & j;
                else {
                  if (!(16 & q)) {
                    if (!(64 & q)) {
                      j = w[(65535 & j) + (h & (1 << q) - 1)];
                      continue t;
                    }
                    if (32 & q) {
                      o.mode = 12;
                      break e;
                    }
                    a.msg = "invalid literal/length code", o.mode = 30;
                    break e;
                  }
                  Y = 65535 & j, (q &= 15) && (D < q && (h += _[s++] << D, D += 8), Y += h & (1 << q) - 1, h >>>= q, D -= q), D < 15 && (h += _[s++] << D, D += 8, h += _[s++] << D, D += 8), j = U[h & F];
                  n:
                    for (; ; ) {
                      if (h >>>= q = j >>> 24, D -= q, !(16 & (q = j >>> 16 & 255))) {
                        if (!(64 & q)) {
                          j = U[(65535 & j) + (h & (1 << q) - 1)];
                          continue n;
                        }
                        a.msg = "invalid distance code", o.mode = 30;
                        break e;
                      }
                      if (oe = 65535 & j, D < (q &= 15) && (h += _[s++] << D, (D += 8) < q && (h += _[s++] << D, D += 8)), m < (oe += h & (1 << q) - 1)) {
                        a.msg = "invalid distance too far back", o.mode = 30;
                        break e;
                      }
                      if (h >>>= q, D -= q, (q = f - p) < oe) {
                        if (d < (q = oe - q) && o.sane) {
                          a.msg = "invalid distance too far back", o.mode = 30;
                          break e;
                        }
                        if (P = g, (T = 0) === l) {
                          if (T += b - q, q < Y) {
                            for (Y -= q; Q[f++] = g[T++], --q; )
                              ;
                            T = f - oe, P = Q;
                          }
                        } else if (l < q) {
                          if (T += b + l - q, (q -= l) < Y) {
                            for (Y -= q; Q[f++] = g[T++], --q; )
                              ;
                            if (T = 0, l < Y) {
                              for (Y -= q = l; Q[f++] = g[T++], --q; )
                                ;
                              T = f - oe, P = Q;
                            }
                          }
                        } else if (T += l - q, q < Y) {
                          for (Y -= q; Q[f++] = g[T++], --q; )
                            ;
                          T = f - oe, P = Q;
                        }
                        for (; 2 < Y; )
                          Q[f++] = P[T++], Q[f++] = P[T++], Q[f++] = P[T++], Y -= 3;
                        Y && (Q[f++] = P[T++], 1 < Y && (Q[f++] = P[T++]));
                      } else {
                        for (T = f - oe; Q[f++] = Q[T++], Q[f++] = Q[T++], Q[f++] = Q[T++], 2 < (Y -= 3); )
                          ;
                        Y && (Q[f++] = Q[T++], 1 < Y && (Q[f++] = Q[T++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (s < u && f < y);
        s -= Y = D >> 3, h &= (1 << (D -= Y << 3)) - 1, a.next_in = s, a.next_out = f, a.avail_in = s < u ? u - s + 5 : 5 - (s - u), a.avail_out = f < y ? y - f + 257 : 257 - (f - y), o.hold = h, o.bits = D;
      };
    }, {}], 49: [function(n, r, i) {
      var a = n("../utils/common"), c = n("./adler32"), o = n("./crc32"), s = n("./inffast"), u = n("./inftrees"), f = 1, p = 2, y = 0, m = -2, b = 1, d = 852, l = 592;
      function g(T) {
        return (T >>> 24 & 255) + (T >>> 8 & 65280) + ((65280 & T) << 8) + ((255 & T) << 24);
      }
      function h() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new a.Buf16(320), this.work = new a.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function D(T) {
        var P;
        return T && T.state ? (P = T.state, T.total_in = T.total_out = P.total = 0, T.msg = "", P.wrap && (T.adler = 1 & P.wrap), P.mode = b, P.last = 0, P.havedict = 0, P.dmax = 32768, P.head = null, P.hold = 0, P.bits = 0, P.lencode = P.lendyn = new a.Buf32(d), P.distcode = P.distdyn = new a.Buf32(l), P.sane = 1, P.back = -1, y) : m;
      }
      function w(T) {
        var P;
        return T && T.state ? ((P = T.state).wsize = 0, P.whave = 0, P.wnext = 0, D(T)) : m;
      }
      function U(T, P) {
        var _, Q;
        return T && T.state ? (Q = T.state, P < 0 ? (_ = 0, P = -P) : (_ = 1 + (P >> 4), P < 48 && (P &= 15)), P && (P < 8 || 15 < P) ? m : (Q.window !== null && Q.wbits !== P && (Q.window = null), Q.wrap = _, Q.wbits = P, w(T))) : m;
      }
      function E(T, P) {
        var _, Q;
        return T ? (Q = new h(), (T.state = Q).window = null, (_ = U(T, P)) !== y && (T.state = null), _) : m;
      }
      var F, j, q = !0;
      function Y(T) {
        if (q) {
          var P;
          for (F = new a.Buf32(512), j = new a.Buf32(32), P = 0; P < 144; )
            T.lens[P++] = 8;
          for (; P < 256; )
            T.lens[P++] = 9;
          for (; P < 280; )
            T.lens[P++] = 7;
          for (; P < 288; )
            T.lens[P++] = 8;
          for (u(f, T.lens, 0, 288, F, 0, T.work, { bits: 9 }), P = 0; P < 32; )
            T.lens[P++] = 5;
          u(p, T.lens, 0, 32, j, 0, T.work, { bits: 5 }), q = !1;
        }
        T.lencode = F, T.lenbits = 9, T.distcode = j, T.distbits = 5;
      }
      function oe(T, P, _, Q) {
        var S, R = T.state;
        return R.window === null && (R.wsize = 1 << R.wbits, R.wnext = 0, R.whave = 0, R.window = new a.Buf8(R.wsize)), Q >= R.wsize ? (a.arraySet(R.window, P, _ - R.wsize, R.wsize, 0), R.wnext = 0, R.whave = R.wsize) : (Q < (S = R.wsize - R.wnext) && (S = Q), a.arraySet(R.window, P, _ - Q, S, R.wnext), (Q -= S) ? (a.arraySet(R.window, P, _ - Q, Q, 0), R.wnext = Q, R.whave = R.wsize) : (R.wnext += S, R.wnext === R.wsize && (R.wnext = 0), R.whave < R.wsize && (R.whave += S))), 0;
      }
      i.inflateReset = w, i.inflateReset2 = U, i.inflateResetKeep = D, i.inflateInit = function(T) {
        return E(T, 15);
      }, i.inflateInit2 = E, i.inflate = function(T, P) {
        var _, Q, S, R, N, I, M, k, C, J, ce, re, le, me, ye, $, se, fe, be, _e, v, ie, ee, W, B = 0, Z = new a.Buf8(4), ae = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!T || !T.state || !T.output || !T.input && T.avail_in !== 0)
          return m;
        (_ = T.state).mode === 12 && (_.mode = 13), N = T.next_out, S = T.output, M = T.avail_out, R = T.next_in, Q = T.input, I = T.avail_in, k = _.hold, C = _.bits, J = I, ce = M, ie = y;
        e:
          for (; ; )
            switch (_.mode) {
              case b:
                if (_.wrap === 0) {
                  _.mode = 13;
                  break;
                }
                for (; C < 16; ) {
                  if (I === 0)
                    break e;
                  I--, k += Q[R++] << C, C += 8;
                }
                if (2 & _.wrap && k === 35615) {
                  Z[_.check = 0] = 255 & k, Z[1] = k >>> 8 & 255, _.check = o(_.check, Z, 2, 0), C = k = 0, _.mode = 2;
                  break;
                }
                if (_.flags = 0, _.head && (_.head.done = !1), !(1 & _.wrap) || (((255 & k) << 8) + (k >> 8)) % 31) {
                  T.msg = "incorrect header check", _.mode = 30;
                  break;
                }
                if ((15 & k) != 8) {
                  T.msg = "unknown compression method", _.mode = 30;
                  break;
                }
                if (C -= 4, v = 8 + (15 & (k >>>= 4)), _.wbits === 0)
                  _.wbits = v;
                else if (v > _.wbits) {
                  T.msg = "invalid window size", _.mode = 30;
                  break;
                }
                _.dmax = 1 << v, T.adler = _.check = 1, _.mode = 512 & k ? 10 : 12, C = k = 0;
                break;
              case 2:
                for (; C < 16; ) {
                  if (I === 0)
                    break e;
                  I--, k += Q[R++] << C, C += 8;
                }
                if (_.flags = k, (255 & _.flags) != 8) {
                  T.msg = "unknown compression method", _.mode = 30;
                  break;
                }
                if (57344 & _.flags) {
                  T.msg = "unknown header flags set", _.mode = 30;
                  break;
                }
                _.head && (_.head.text = k >> 8 & 1), 512 & _.flags && (Z[0] = 255 & k, Z[1] = k >>> 8 & 255, _.check = o(_.check, Z, 2, 0)), C = k = 0, _.mode = 3;
              case 3:
                for (; C < 32; ) {
                  if (I === 0)
                    break e;
                  I--, k += Q[R++] << C, C += 8;
                }
                _.head && (_.head.time = k), 512 & _.flags && (Z[0] = 255 & k, Z[1] = k >>> 8 & 255, Z[2] = k >>> 16 & 255, Z[3] = k >>> 24 & 255, _.check = o(_.check, Z, 4, 0)), C = k = 0, _.mode = 4;
              case 4:
                for (; C < 16; ) {
                  if (I === 0)
                    break e;
                  I--, k += Q[R++] << C, C += 8;
                }
                _.head && (_.head.xflags = 255 & k, _.head.os = k >> 8), 512 & _.flags && (Z[0] = 255 & k, Z[1] = k >>> 8 & 255, _.check = o(_.check, Z, 2, 0)), C = k = 0, _.mode = 5;
              case 5:
                if (1024 & _.flags) {
                  for (; C < 16; ) {
                    if (I === 0)
                      break e;
                    I--, k += Q[R++] << C, C += 8;
                  }
                  _.length = k, _.head && (_.head.extra_len = k), 512 & _.flags && (Z[0] = 255 & k, Z[1] = k >>> 8 & 255, _.check = o(_.check, Z, 2, 0)), C = k = 0;
                } else
                  _.head && (_.head.extra = null);
                _.mode = 6;
              case 6:
                if (1024 & _.flags && (I < (re = _.length) && (re = I), re && (_.head && (v = _.head.extra_len - _.length, _.head.extra || (_.head.extra = new Array(_.head.extra_len)), a.arraySet(_.head.extra, Q, R, re, v)), 512 & _.flags && (_.check = o(_.check, Q, re, R)), I -= re, R += re, _.length -= re), _.length))
                  break e;
                _.length = 0, _.mode = 7;
              case 7:
                if (2048 & _.flags) {
                  if (I === 0)
                    break e;
                  for (re = 0; v = Q[R + re++], _.head && v && _.length < 65536 && (_.head.name += String.fromCharCode(v)), v && re < I; )
                    ;
                  if (512 & _.flags && (_.check = o(_.check, Q, re, R)), I -= re, R += re, v)
                    break e;
                } else
                  _.head && (_.head.name = null);
                _.length = 0, _.mode = 8;
              case 8:
                if (4096 & _.flags) {
                  if (I === 0)
                    break e;
                  for (re = 0; v = Q[R + re++], _.head && v && _.length < 65536 && (_.head.comment += String.fromCharCode(v)), v && re < I; )
                    ;
                  if (512 & _.flags && (_.check = o(_.check, Q, re, R)), I -= re, R += re, v)
                    break e;
                } else
                  _.head && (_.head.comment = null);
                _.mode = 9;
              case 9:
                if (512 & _.flags) {
                  for (; C < 16; ) {
                    if (I === 0)
                      break e;
                    I--, k += Q[R++] << C, C += 8;
                  }
                  if (k !== (65535 & _.check)) {
                    T.msg = "header crc mismatch", _.mode = 30;
                    break;
                  }
                  C = k = 0;
                }
                _.head && (_.head.hcrc = _.flags >> 9 & 1, _.head.done = !0), T.adler = _.check = 0, _.mode = 12;
                break;
              case 10:
                for (; C < 32; ) {
                  if (I === 0)
                    break e;
                  I--, k += Q[R++] << C, C += 8;
                }
                T.adler = _.check = g(k), C = k = 0, _.mode = 11;
              case 11:
                if (_.havedict === 0)
                  return T.next_out = N, T.avail_out = M, T.next_in = R, T.avail_in = I, _.hold = k, _.bits = C, 2;
                T.adler = _.check = 1, _.mode = 12;
              case 12:
                if (P === 5 || P === 6)
                  break e;
              case 13:
                if (_.last) {
                  k >>>= 7 & C, C -= 7 & C, _.mode = 27;
                  break;
                }
                for (; C < 3; ) {
                  if (I === 0)
                    break e;
                  I--, k += Q[R++] << C, C += 8;
                }
                switch (_.last = 1 & k, C -= 1, 3 & (k >>>= 1)) {
                  case 0:
                    _.mode = 14;
                    break;
                  case 1:
                    if (Y(_), _.mode = 20, P !== 6)
                      break;
                    k >>>= 2, C -= 2;
                    break e;
                  case 2:
                    _.mode = 17;
                    break;
                  case 3:
                    T.msg = "invalid block type", _.mode = 30;
                }
                k >>>= 2, C -= 2;
                break;
              case 14:
                for (k >>>= 7 & C, C -= 7 & C; C < 32; ) {
                  if (I === 0)
                    break e;
                  I--, k += Q[R++] << C, C += 8;
                }
                if ((65535 & k) != (k >>> 16 ^ 65535)) {
                  T.msg = "invalid stored block lengths", _.mode = 30;
                  break;
                }
                if (_.length = 65535 & k, C = k = 0, _.mode = 15, P === 6)
                  break e;
              case 15:
                _.mode = 16;
              case 16:
                if (re = _.length) {
                  if (I < re && (re = I), M < re && (re = M), re === 0)
                    break e;
                  a.arraySet(S, Q, R, re, N), I -= re, R += re, M -= re, N += re, _.length -= re;
                  break;
                }
                _.mode = 12;
                break;
              case 17:
                for (; C < 14; ) {
                  if (I === 0)
                    break e;
                  I--, k += Q[R++] << C, C += 8;
                }
                if (_.nlen = 257 + (31 & k), k >>>= 5, C -= 5, _.ndist = 1 + (31 & k), k >>>= 5, C -= 5, _.ncode = 4 + (15 & k), k >>>= 4, C -= 4, 286 < _.nlen || 30 < _.ndist) {
                  T.msg = "too many length or distance symbols", _.mode = 30;
                  break;
                }
                _.have = 0, _.mode = 18;
              case 18:
                for (; _.have < _.ncode; ) {
                  for (; C < 3; ) {
                    if (I === 0)
                      break e;
                    I--, k += Q[R++] << C, C += 8;
                  }
                  _.lens[ae[_.have++]] = 7 & k, k >>>= 3, C -= 3;
                }
                for (; _.have < 19; )
                  _.lens[ae[_.have++]] = 0;
                if (_.lencode = _.lendyn, _.lenbits = 7, ee = { bits: _.lenbits }, ie = u(0, _.lens, 0, 19, _.lencode, 0, _.work, ee), _.lenbits = ee.bits, ie) {
                  T.msg = "invalid code lengths set", _.mode = 30;
                  break;
                }
                _.have = 0, _.mode = 19;
              case 19:
                for (; _.have < _.nlen + _.ndist; ) {
                  for (; $ = (B = _.lencode[k & (1 << _.lenbits) - 1]) >>> 16 & 255, se = 65535 & B, !((ye = B >>> 24) <= C); ) {
                    if (I === 0)
                      break e;
                    I--, k += Q[R++] << C, C += 8;
                  }
                  if (se < 16)
                    k >>>= ye, C -= ye, _.lens[_.have++] = se;
                  else {
                    if (se === 16) {
                      for (W = ye + 2; C < W; ) {
                        if (I === 0)
                          break e;
                        I--, k += Q[R++] << C, C += 8;
                      }
                      if (k >>>= ye, C -= ye, _.have === 0) {
                        T.msg = "invalid bit length repeat", _.mode = 30;
                        break;
                      }
                      v = _.lens[_.have - 1], re = 3 + (3 & k), k >>>= 2, C -= 2;
                    } else if (se === 17) {
                      for (W = ye + 3; C < W; ) {
                        if (I === 0)
                          break e;
                        I--, k += Q[R++] << C, C += 8;
                      }
                      C -= ye, v = 0, re = 3 + (7 & (k >>>= ye)), k >>>= 3, C -= 3;
                    } else {
                      for (W = ye + 7; C < W; ) {
                        if (I === 0)
                          break e;
                        I--, k += Q[R++] << C, C += 8;
                      }
                      C -= ye, v = 0, re = 11 + (127 & (k >>>= ye)), k >>>= 7, C -= 7;
                    }
                    if (_.have + re > _.nlen + _.ndist) {
                      T.msg = "invalid bit length repeat", _.mode = 30;
                      break;
                    }
                    for (; re--; )
                      _.lens[_.have++] = v;
                  }
                }
                if (_.mode === 30)
                  break;
                if (_.lens[256] === 0) {
                  T.msg = "invalid code -- missing end-of-block", _.mode = 30;
                  break;
                }
                if (_.lenbits = 9, ee = { bits: _.lenbits }, ie = u(f, _.lens, 0, _.nlen, _.lencode, 0, _.work, ee), _.lenbits = ee.bits, ie) {
                  T.msg = "invalid literal/lengths set", _.mode = 30;
                  break;
                }
                if (_.distbits = 6, _.distcode = _.distdyn, ee = { bits: _.distbits }, ie = u(p, _.lens, _.nlen, _.ndist, _.distcode, 0, _.work, ee), _.distbits = ee.bits, ie) {
                  T.msg = "invalid distances set", _.mode = 30;
                  break;
                }
                if (_.mode = 20, P === 6)
                  break e;
              case 20:
                _.mode = 21;
              case 21:
                if (6 <= I && 258 <= M) {
                  T.next_out = N, T.avail_out = M, T.next_in = R, T.avail_in = I, _.hold = k, _.bits = C, s(T, ce), N = T.next_out, S = T.output, M = T.avail_out, R = T.next_in, Q = T.input, I = T.avail_in, k = _.hold, C = _.bits, _.mode === 12 && (_.back = -1);
                  break;
                }
                for (_.back = 0; $ = (B = _.lencode[k & (1 << _.lenbits) - 1]) >>> 16 & 255, se = 65535 & B, !((ye = B >>> 24) <= C); ) {
                  if (I === 0)
                    break e;
                  I--, k += Q[R++] << C, C += 8;
                }
                if ($ && !(240 & $)) {
                  for (fe = ye, be = $, _e = se; $ = (B = _.lencode[_e + ((k & (1 << fe + be) - 1) >> fe)]) >>> 16 & 255, se = 65535 & B, !(fe + (ye = B >>> 24) <= C); ) {
                    if (I === 0)
                      break e;
                    I--, k += Q[R++] << C, C += 8;
                  }
                  k >>>= fe, C -= fe, _.back += fe;
                }
                if (k >>>= ye, C -= ye, _.back += ye, _.length = se, $ === 0) {
                  _.mode = 26;
                  break;
                }
                if (32 & $) {
                  _.back = -1, _.mode = 12;
                  break;
                }
                if (64 & $) {
                  T.msg = "invalid literal/length code", _.mode = 30;
                  break;
                }
                _.extra = 15 & $, _.mode = 22;
              case 22:
                if (_.extra) {
                  for (W = _.extra; C < W; ) {
                    if (I === 0)
                      break e;
                    I--, k += Q[R++] << C, C += 8;
                  }
                  _.length += k & (1 << _.extra) - 1, k >>>= _.extra, C -= _.extra, _.back += _.extra;
                }
                _.was = _.length, _.mode = 23;
              case 23:
                for (; $ = (B = _.distcode[k & (1 << _.distbits) - 1]) >>> 16 & 255, se = 65535 & B, !((ye = B >>> 24) <= C); ) {
                  if (I === 0)
                    break e;
                  I--, k += Q[R++] << C, C += 8;
                }
                if (!(240 & $)) {
                  for (fe = ye, be = $, _e = se; $ = (B = _.distcode[_e + ((k & (1 << fe + be) - 1) >> fe)]) >>> 16 & 255, se = 65535 & B, !(fe + (ye = B >>> 24) <= C); ) {
                    if (I === 0)
                      break e;
                    I--, k += Q[R++] << C, C += 8;
                  }
                  k >>>= fe, C -= fe, _.back += fe;
                }
                if (k >>>= ye, C -= ye, _.back += ye, 64 & $) {
                  T.msg = "invalid distance code", _.mode = 30;
                  break;
                }
                _.offset = se, _.extra = 15 & $, _.mode = 24;
              case 24:
                if (_.extra) {
                  for (W = _.extra; C < W; ) {
                    if (I === 0)
                      break e;
                    I--, k += Q[R++] << C, C += 8;
                  }
                  _.offset += k & (1 << _.extra) - 1, k >>>= _.extra, C -= _.extra, _.back += _.extra;
                }
                if (_.offset > _.dmax) {
                  T.msg = "invalid distance too far back", _.mode = 30;
                  break;
                }
                _.mode = 25;
              case 25:
                if (M === 0)
                  break e;
                if (re = ce - M, _.offset > re) {
                  if ((re = _.offset - re) > _.whave && _.sane) {
                    T.msg = "invalid distance too far back", _.mode = 30;
                    break;
                  }
                  le = re > _.wnext ? (re -= _.wnext, _.wsize - re) : _.wnext - re, re > _.length && (re = _.length), me = _.window;
                } else
                  me = S, le = N - _.offset, re = _.length;
                for (M < re && (re = M), M -= re, _.length -= re; S[N++] = me[le++], --re; )
                  ;
                _.length === 0 && (_.mode = 21);
                break;
              case 26:
                if (M === 0)
                  break e;
                S[N++] = _.length, M--, _.mode = 21;
                break;
              case 27:
                if (_.wrap) {
                  for (; C < 32; ) {
                    if (I === 0)
                      break e;
                    I--, k |= Q[R++] << C, C += 8;
                  }
                  if (ce -= M, T.total_out += ce, _.total += ce, ce && (T.adler = _.check = _.flags ? o(_.check, S, ce, N - ce) : c(_.check, S, ce, N - ce)), ce = M, (_.flags ? k : g(k)) !== _.check) {
                    T.msg = "incorrect data check", _.mode = 30;
                    break;
                  }
                  C = k = 0;
                }
                _.mode = 28;
              case 28:
                if (_.wrap && _.flags) {
                  for (; C < 32; ) {
                    if (I === 0)
                      break e;
                    I--, k += Q[R++] << C, C += 8;
                  }
                  if (k !== (4294967295 & _.total)) {
                    T.msg = "incorrect length check", _.mode = 30;
                    break;
                  }
                  C = k = 0;
                }
                _.mode = 29;
              case 29:
                ie = 1;
                break e;
              case 30:
                ie = -3;
                break e;
              case 31:
                return -4;
              case 32:
              default:
                return m;
            }
        return T.next_out = N, T.avail_out = M, T.next_in = R, T.avail_in = I, _.hold = k, _.bits = C, (_.wsize || ce !== T.avail_out && _.mode < 30 && (_.mode < 27 || P !== 4)) && oe(T, T.output, T.next_out, ce - T.avail_out) ? (_.mode = 31, -4) : (J -= T.avail_in, ce -= T.avail_out, T.total_in += J, T.total_out += ce, _.total += ce, _.wrap && ce && (T.adler = _.check = _.flags ? o(_.check, S, ce, T.next_out - ce) : c(_.check, S, ce, T.next_out - ce)), T.data_type = _.bits + (_.last ? 64 : 0) + (_.mode === 12 ? 128 : 0) + (_.mode === 20 || _.mode === 15 ? 256 : 0), (J == 0 && ce === 0 || P === 4) && ie === y && (ie = -5), ie);
      }, i.inflateEnd = function(T) {
        if (!T || !T.state)
          return m;
        var P = T.state;
        return P.window && (P.window = null), T.state = null, y;
      }, i.inflateGetHeader = function(T, P) {
        var _;
        return T && T.state && 2 & (_ = T.state).wrap ? ((_.head = P).done = !1, y) : m;
      }, i.inflateSetDictionary = function(T, P) {
        var _, Q = P.length;
        return T && T.state ? (_ = T.state).wrap !== 0 && _.mode !== 11 ? m : _.mode === 11 && c(1, P, Q, 0) !== _.check ? -3 : oe(T, P, Q, Q) ? (_.mode = 31, -4) : (_.havedict = 1, y) : m;
      }, i.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(n, r, i) {
      var a = n("../utils/common"), c = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], o = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], s = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], u = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      r.exports = function(f, p, y, m, b, d, l, g) {
        var h, D, w, U, E, F, j, q, Y, oe = g.bits, T = 0, P = 0, _ = 0, Q = 0, S = 0, R = 0, N = 0, I = 0, M = 0, k = 0, C = null, J = 0, ce = new a.Buf16(16), re = new a.Buf16(16), le = null, me = 0;
        for (T = 0; T <= 15; T++)
          ce[T] = 0;
        for (P = 0; P < m; P++)
          ce[p[y + P]]++;
        for (S = oe, Q = 15; 1 <= Q && ce[Q] === 0; Q--)
          ;
        if (Q < S && (S = Q), Q === 0)
          return b[d++] = 20971520, b[d++] = 20971520, g.bits = 1, 0;
        for (_ = 1; _ < Q && ce[_] === 0; _++)
          ;
        for (S < _ && (S = _), T = I = 1; T <= 15; T++)
          if (I <<= 1, (I -= ce[T]) < 0)
            return -1;
        if (0 < I && (f === 0 || Q !== 1))
          return -1;
        for (re[1] = 0, T = 1; T < 15; T++)
          re[T + 1] = re[T] + ce[T];
        for (P = 0; P < m; P++)
          p[y + P] !== 0 && (l[re[p[y + P]]++] = P);
        if (F = f === 0 ? (C = le = l, 19) : f === 1 ? (C = c, J -= 257, le = o, me -= 257, 256) : (C = s, le = u, -1), T = _, E = d, N = P = k = 0, w = -1, U = (M = 1 << (R = S)) - 1, f === 1 && 852 < M || f === 2 && 592 < M)
          return 1;
        for (; ; ) {
          for (j = T - N, Y = l[P] < F ? (q = 0, l[P]) : l[P] > F ? (q = le[me + l[P]], C[J + l[P]]) : (q = 96, 0), h = 1 << T - N, _ = D = 1 << R; b[E + (k >> N) + (D -= h)] = j << 24 | q << 16 | Y | 0, D !== 0; )
            ;
          for (h = 1 << T - 1; k & h; )
            h >>= 1;
          if (h !== 0 ? (k &= h - 1, k += h) : k = 0, P++, --ce[T] == 0) {
            if (T === Q)
              break;
            T = p[y + l[P]];
          }
          if (S < T && (k & U) !== w) {
            for (N === 0 && (N = S), E += _, I = 1 << (R = T - N); R + N < Q && !((I -= ce[R + N]) <= 0); )
              R++, I <<= 1;
            if (M += 1 << R, f === 1 && 852 < M || f === 2 && 592 < M)
              return 1;
            b[w = k & U] = S << 24 | R << 16 | E - d | 0;
          }
        }
        return k !== 0 && (b[E + k] = T - N << 24 | 64 << 16 | 0), g.bits = S, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(n, r, i) {
      r.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(n, r, i) {
      var a = n("../utils/common"), c = 0, o = 1;
      function s(B) {
        for (var Z = B.length; 0 <= --Z; )
          B[Z] = 0;
      }
      var u = 0, f = 29, p = 256, y = p + 1 + f, m = 30, b = 19, d = 2 * y + 1, l = 15, g = 16, h = 7, D = 256, w = 16, U = 17, E = 18, F = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], j = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], q = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], Y = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], oe = new Array(2 * (y + 2));
      s(oe);
      var T = new Array(2 * m);
      s(T);
      var P = new Array(512);
      s(P);
      var _ = new Array(256);
      s(_);
      var Q = new Array(f);
      s(Q);
      var S, R, N, I = new Array(m);
      function M(B, Z, ae, de, V) {
        this.static_tree = B, this.extra_bits = Z, this.extra_base = ae, this.elems = de, this.max_length = V, this.has_stree = B && B.length;
      }
      function k(B, Z) {
        this.dyn_tree = B, this.max_code = 0, this.stat_desc = Z;
      }
      function C(B) {
        return B < 256 ? P[B] : P[256 + (B >>> 7)];
      }
      function J(B, Z) {
        B.pending_buf[B.pending++] = 255 & Z, B.pending_buf[B.pending++] = Z >>> 8 & 255;
      }
      function ce(B, Z, ae) {
        B.bi_valid > g - ae ? (B.bi_buf |= Z << B.bi_valid & 65535, J(B, B.bi_buf), B.bi_buf = Z >> g - B.bi_valid, B.bi_valid += ae - g) : (B.bi_buf |= Z << B.bi_valid & 65535, B.bi_valid += ae);
      }
      function re(B, Z, ae) {
        ce(B, ae[2 * Z], ae[2 * Z + 1]);
      }
      function le(B, Z) {
        for (var ae = 0; ae |= 1 & B, B >>>= 1, ae <<= 1, 0 < --Z; )
          ;
        return ae >>> 1;
      }
      function me(B, Z, ae) {
        var de, V, O = new Array(l + 1), X = 0;
        for (de = 1; de <= l; de++)
          O[de] = X = X + ae[de - 1] << 1;
        for (V = 0; V <= Z; V++) {
          var G = B[2 * V + 1];
          G !== 0 && (B[2 * V] = le(O[G]++, G));
        }
      }
      function ye(B) {
        var Z;
        for (Z = 0; Z < y; Z++)
          B.dyn_ltree[2 * Z] = 0;
        for (Z = 0; Z < m; Z++)
          B.dyn_dtree[2 * Z] = 0;
        for (Z = 0; Z < b; Z++)
          B.bl_tree[2 * Z] = 0;
        B.dyn_ltree[2 * D] = 1, B.opt_len = B.static_len = 0, B.last_lit = B.matches = 0;
      }
      function $(B) {
        8 < B.bi_valid ? J(B, B.bi_buf) : 0 < B.bi_valid && (B.pending_buf[B.pending++] = B.bi_buf), B.bi_buf = 0, B.bi_valid = 0;
      }
      function se(B, Z, ae, de) {
        var V = 2 * Z, O = 2 * ae;
        return B[V] < B[O] || B[V] === B[O] && de[Z] <= de[ae];
      }
      function fe(B, Z, ae) {
        for (var de = B.heap[ae], V = ae << 1; V <= B.heap_len && (V < B.heap_len && se(Z, B.heap[V + 1], B.heap[V], B.depth) && V++, !se(Z, de, B.heap[V], B.depth)); )
          B.heap[ae] = B.heap[V], ae = V, V <<= 1;
        B.heap[ae] = de;
      }
      function be(B, Z, ae) {
        var de, V, O, X, G = 0;
        if (B.last_lit !== 0)
          for (; de = B.pending_buf[B.d_buf + 2 * G] << 8 | B.pending_buf[B.d_buf + 2 * G + 1], V = B.pending_buf[B.l_buf + G], G++, de === 0 ? re(B, V, Z) : (re(B, (O = _[V]) + p + 1, Z), (X = F[O]) !== 0 && ce(B, V -= Q[O], X), re(B, O = C(--de), ae), (X = j[O]) !== 0 && ce(B, de -= I[O], X)), G < B.last_lit; )
            ;
        re(B, D, Z);
      }
      function _e(B, Z) {
        var ae, de, V, O = Z.dyn_tree, X = Z.stat_desc.static_tree, G = Z.stat_desc.has_stree, ne = Z.stat_desc.elems, pe = -1;
        for (B.heap_len = 0, B.heap_max = d, ae = 0; ae < ne; ae++)
          O[2 * ae] !== 0 ? (B.heap[++B.heap_len] = pe = ae, B.depth[ae] = 0) : O[2 * ae + 1] = 0;
        for (; B.heap_len < 2; )
          O[2 * (V = B.heap[++B.heap_len] = pe < 2 ? ++pe : 0)] = 1, B.depth[V] = 0, B.opt_len--, G && (B.static_len -= X[2 * V + 1]);
        for (Z.max_code = pe, ae = B.heap_len >> 1; 1 <= ae; ae--)
          fe(B, O, ae);
        for (V = ne; ae = B.heap[1], B.heap[1] = B.heap[B.heap_len--], fe(B, O, 1), de = B.heap[1], B.heap[--B.heap_max] = ae, B.heap[--B.heap_max] = de, O[2 * V] = O[2 * ae] + O[2 * de], B.depth[V] = (B.depth[ae] >= B.depth[de] ? B.depth[ae] : B.depth[de]) + 1, O[2 * ae + 1] = O[2 * de + 1] = V, B.heap[1] = V++, fe(B, O, 1), 2 <= B.heap_len; )
          ;
        B.heap[--B.heap_max] = B.heap[1], function(ge, Ue) {
          var De, Te, Se, Ee, je, Pt, tt = Ue.dyn_tree, tr = Ue.max_code, Bi = Ue.stat_desc.static_tree, Bt = Ue.stat_desc.has_stree, nr = Ue.stat_desc.extra_bits, tn = Ue.stat_desc.extra_base, Dt = Ue.stat_desc.max_length, qt = 0;
          for (Ee = 0; Ee <= l; Ee++)
            ge.bl_count[Ee] = 0;
          for (tt[2 * ge.heap[ge.heap_max] + 1] = 0, De = ge.heap_max + 1; De < d; De++)
            Dt < (Ee = tt[2 * tt[2 * (Te = ge.heap[De]) + 1] + 1] + 1) && (Ee = Dt, qt++), tt[2 * Te + 1] = Ee, tr < Te || (ge.bl_count[Ee]++, je = 0, tn <= Te && (je = nr[Te - tn]), Pt = tt[2 * Te], ge.opt_len += Pt * (Ee + je), Bt && (ge.static_len += Pt * (Bi[2 * Te + 1] + je)));
          if (qt !== 0) {
            do {
              for (Ee = Dt - 1; ge.bl_count[Ee] === 0; )
                Ee--;
              ge.bl_count[Ee]--, ge.bl_count[Ee + 1] += 2, ge.bl_count[Dt]--, qt -= 2;
            } while (0 < qt);
            for (Ee = Dt; Ee !== 0; Ee--)
              for (Te = ge.bl_count[Ee]; Te !== 0; )
                tr < (Se = ge.heap[--De]) || (tt[2 * Se + 1] !== Ee && (ge.opt_len += (Ee - tt[2 * Se + 1]) * tt[2 * Se], tt[2 * Se + 1] = Ee), Te--);
          }
        }(B, Z), me(O, pe, B.bl_count);
      }
      function v(B, Z, ae) {
        var de, V, O = -1, X = Z[1], G = 0, ne = 7, pe = 4;
        for (X === 0 && (ne = 138, pe = 3), Z[2 * (ae + 1) + 1] = 65535, de = 0; de <= ae; de++)
          V = X, X = Z[2 * (de + 1) + 1], ++G < ne && V === X || (G < pe ? B.bl_tree[2 * V] += G : V !== 0 ? (V !== O && B.bl_tree[2 * V]++, B.bl_tree[2 * w]++) : G <= 10 ? B.bl_tree[2 * U]++ : B.bl_tree[2 * E]++, O = V, pe = (G = 0) === X ? (ne = 138, 3) : V === X ? (ne = 6, 3) : (ne = 7, 4));
      }
      function ie(B, Z, ae) {
        var de, V, O = -1, X = Z[1], G = 0, ne = 7, pe = 4;
        for (X === 0 && (ne = 138, pe = 3), de = 0; de <= ae; de++)
          if (V = X, X = Z[2 * (de + 1) + 1], !(++G < ne && V === X)) {
            if (G < pe)
              for (; re(B, V, B.bl_tree), --G != 0; )
                ;
            else
              V !== 0 ? (V !== O && (re(B, V, B.bl_tree), G--), re(B, w, B.bl_tree), ce(B, G - 3, 2)) : G <= 10 ? (re(B, U, B.bl_tree), ce(B, G - 3, 3)) : (re(B, E, B.bl_tree), ce(B, G - 11, 7));
            O = V, pe = (G = 0) === X ? (ne = 138, 3) : V === X ? (ne = 6, 3) : (ne = 7, 4);
          }
      }
      s(I);
      var ee = !1;
      function W(B, Z, ae, de) {
        ce(B, (u << 1) + (de ? 1 : 0), 3), function(V, O, X, G) {
          $(V), G && (J(V, X), J(V, ~X)), a.arraySet(V.pending_buf, V.window, O, X, V.pending), V.pending += X;
        }(B, Z, ae, !0);
      }
      i._tr_init = function(B) {
        ee || (function() {
          var Z, ae, de, V, O, X = new Array(l + 1);
          for (V = de = 0; V < f - 1; V++)
            for (Q[V] = de, Z = 0; Z < 1 << F[V]; Z++)
              _[de++] = V;
          for (_[de - 1] = V, V = O = 0; V < 16; V++)
            for (I[V] = O, Z = 0; Z < 1 << j[V]; Z++)
              P[O++] = V;
          for (O >>= 7; V < m; V++)
            for (I[V] = O << 7, Z = 0; Z < 1 << j[V] - 7; Z++)
              P[256 + O++] = V;
          for (ae = 0; ae <= l; ae++)
            X[ae] = 0;
          for (Z = 0; Z <= 143; )
            oe[2 * Z + 1] = 8, Z++, X[8]++;
          for (; Z <= 255; )
            oe[2 * Z + 1] = 9, Z++, X[9]++;
          for (; Z <= 279; )
            oe[2 * Z + 1] = 7, Z++, X[7]++;
          for (; Z <= 287; )
            oe[2 * Z + 1] = 8, Z++, X[8]++;
          for (me(oe, y + 1, X), Z = 0; Z < m; Z++)
            T[2 * Z + 1] = 5, T[2 * Z] = le(Z, 5);
          S = new M(oe, F, p + 1, y, l), R = new M(T, j, 0, m, l), N = new M(new Array(0), q, 0, b, h);
        }(), ee = !0), B.l_desc = new k(B.dyn_ltree, S), B.d_desc = new k(B.dyn_dtree, R), B.bl_desc = new k(B.bl_tree, N), B.bi_buf = 0, B.bi_valid = 0, ye(B);
      }, i._tr_stored_block = W, i._tr_flush_block = function(B, Z, ae, de) {
        var V, O, X = 0;
        0 < B.level ? (B.strm.data_type === 2 && (B.strm.data_type = function(G) {
          var ne, pe = 4093624447;
          for (ne = 0; ne <= 31; ne++, pe >>>= 1)
            if (1 & pe && G.dyn_ltree[2 * ne] !== 0)
              return c;
          if (G.dyn_ltree[18] !== 0 || G.dyn_ltree[20] !== 0 || G.dyn_ltree[26] !== 0)
            return o;
          for (ne = 32; ne < p; ne++)
            if (G.dyn_ltree[2 * ne] !== 0)
              return o;
          return c;
        }(B)), _e(B, B.l_desc), _e(B, B.d_desc), X = function(G) {
          var ne;
          for (v(G, G.dyn_ltree, G.l_desc.max_code), v(G, G.dyn_dtree, G.d_desc.max_code), _e(G, G.bl_desc), ne = b - 1; 3 <= ne && G.bl_tree[2 * Y[ne] + 1] === 0; ne--)
            ;
          return G.opt_len += 3 * (ne + 1) + 5 + 5 + 4, ne;
        }(B), V = B.opt_len + 3 + 7 >>> 3, (O = B.static_len + 3 + 7 >>> 3) <= V && (V = O)) : V = O = ae + 5, ae + 4 <= V && Z !== -1 ? W(B, Z, ae, de) : B.strategy === 4 || O === V ? (ce(B, 2 + (de ? 1 : 0), 3), be(B, oe, T)) : (ce(B, 4 + (de ? 1 : 0), 3), function(G, ne, pe, ge) {
          var Ue;
          for (ce(G, ne - 257, 5), ce(G, pe - 1, 5), ce(G, ge - 4, 4), Ue = 0; Ue < ge; Ue++)
            ce(G, G.bl_tree[2 * Y[Ue] + 1], 3);
          ie(G, G.dyn_ltree, ne - 1), ie(G, G.dyn_dtree, pe - 1);
        }(B, B.l_desc.max_code + 1, B.d_desc.max_code + 1, X + 1), be(B, B.dyn_ltree, B.dyn_dtree)), ye(B), de && $(B);
      }, i._tr_tally = function(B, Z, ae) {
        return B.pending_buf[B.d_buf + 2 * B.last_lit] = Z >>> 8 & 255, B.pending_buf[B.d_buf + 2 * B.last_lit + 1] = 255 & Z, B.pending_buf[B.l_buf + B.last_lit] = 255 & ae, B.last_lit++, Z === 0 ? B.dyn_ltree[2 * ae]++ : (B.matches++, Z--, B.dyn_ltree[2 * (_[ae] + p + 1)]++, B.dyn_dtree[2 * C(Z)]++), B.last_lit === B.lit_bufsize - 1;
      }, i._tr_align = function(B) {
        ce(B, 2, 3), re(B, D, oe), function(Z) {
          Z.bi_valid === 16 ? (J(Z, Z.bi_buf), Z.bi_buf = 0, Z.bi_valid = 0) : 8 <= Z.bi_valid && (Z.pending_buf[Z.pending++] = 255 & Z.bi_buf, Z.bi_buf >>= 8, Z.bi_valid -= 8);
        }(B);
      };
    }, { "../utils/common": 41 }], 53: [function(n, r, i) {
      r.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(n, r, i) {
      (function(a) {
        (function(c, o) {
          if (!c.setImmediate) {
            var s, u, f, p, y = 1, m = {}, b = !1, d = c.document, l = Object.getPrototypeOf && Object.getPrototypeOf(c);
            l = l && l.setTimeout ? l : c, s = {}.toString.call(c.process) === "[object process]" ? function(w) {
              process.nextTick(function() {
                h(w);
              });
            } : function() {
              if (c.postMessage && !c.importScripts) {
                var w = !0, U = c.onmessage;
                return c.onmessage = function() {
                  w = !1;
                }, c.postMessage("", "*"), c.onmessage = U, w;
              }
            }() ? (p = "setImmediate$" + Math.random() + "$", c.addEventListener ? c.addEventListener("message", D, !1) : c.attachEvent("onmessage", D), function(w) {
              c.postMessage(p + w, "*");
            }) : c.MessageChannel ? ((f = new MessageChannel()).port1.onmessage = function(w) {
              h(w.data);
            }, function(w) {
              f.port2.postMessage(w);
            }) : d && "onreadystatechange" in d.createElement("script") ? (u = d.documentElement, function(w) {
              var U = d.createElement("script");
              U.onreadystatechange = function() {
                h(w), U.onreadystatechange = null, u.removeChild(U), U = null;
              }, u.appendChild(U);
            }) : function(w) {
              setTimeout(h, 0, w);
            }, l.setImmediate = function(w) {
              typeof w != "function" && (w = new Function("" + w));
              for (var U = new Array(arguments.length - 1), E = 0; E < U.length; E++)
                U[E] = arguments[E + 1];
              var F = { callback: w, args: U };
              return m[y] = F, s(y), y++;
            }, l.clearImmediate = g;
          }
          function g(w) {
            delete m[w];
          }
          function h(w) {
            if (b)
              setTimeout(h, 0, w);
            else {
              var U = m[w];
              if (U) {
                b = !0;
                try {
                  (function(E) {
                    var F = E.callback, j = E.args;
                    switch (j.length) {
                      case 0:
                        F();
                        break;
                      case 1:
                        F(j[0]);
                        break;
                      case 2:
                        F(j[0], j[1]);
                        break;
                      case 3:
                        F(j[0], j[1], j[2]);
                        break;
                      default:
                        F.apply(o, j);
                    }
                  })(U);
                } finally {
                  g(w), b = !1;
                }
              }
            }
          }
          function D(w) {
            w.source === c && typeof w.data == "string" && w.data.indexOf(p) === 0 && h(+w.data.slice(p.length));
          }
        })(typeof self > "u" ? a === void 0 ? this : a : self);
      }).call(this, typeof we < "u" ? we : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(cg);
var sg = ri, ug = Za;
Gn.openArrayBuffer = dg;
Gn.splitPath = lg;
Gn.joinPath = fg;
function dg(e) {
  return ug.loadAsync(e).then(function(t) {
    function n(c) {
      return t.file(c) !== null;
    }
    function r(c, o) {
      return t.file(c).async("uint8array").then(function(s) {
        if (o === "base64")
          return sg.fromByteArray(s);
        if (o) {
          var u = new TextDecoder(o);
          return u.decode(s);
        } else
          return s;
      });
    }
    function i(c, o) {
      t.file(c, o);
    }
    function a() {
      return t.generateAsync({ type: "arraybuffer" });
    }
    return {
      exists: n,
      read: r,
      write: i,
      toArrayBuffer: a
    };
  });
}
function lg(e) {
  var t = e.lastIndexOf("/");
  return t === -1 ? { dirname: "", basename: e } : {
    dirname: e.substring(0, t),
    basename: e.substring(t + 1)
  };
}
function fg() {
  var e = Array.prototype.filter.call(arguments, function(n) {
    return n;
  }), t = [];
  return e.forEach(function(n) {
    /^\//.test(n) ? t = [n] : t.push(n);
  }), t.join("/");
}
var uo = {}, en = {}, Yn = {}, ii = We;
Yn.Element = Un;
Yn.element = function(e, t, n) {
  return new Un(e, t, n);
};
Yn.text = function(e) {
  return {
    type: "text",
    value: e
  };
};
var Gu = {
  first: function() {
    return null;
  },
  firstOrEmpty: function() {
    return Gu;
  },
  attributes: {}
};
function Un(e, t, n) {
  this.type = "element", this.name = e, this.attributes = t || {}, this.children = n || [];
}
Un.prototype.first = function(e) {
  return ii.find(this.children, function(t) {
    return t.name === e;
  });
};
Un.prototype.firstOrEmpty = function(e) {
  return this.first(e) || Gu;
};
Un.prototype.getElementsByTagName = function(e) {
  var t = ii.filter(this.children, function(n) {
    return n.name === e;
  });
  return Yu(t);
};
Un.prototype.text = function() {
  if (this.children.length === 0)
    return "";
  if (this.children.length !== 1 || this.children[0].type !== "text")
    throw new Error("Not implemented");
  return this.children[0].value;
};
var hg = {
  getElementsByTagName: function(e) {
    return Yu(ii.flatten(this.map(function(t) {
      return t.getElementsByTagName(e);
    }, !0)));
  }
};
function Yu(e) {
  return ii.extend(e, hg);
}
var Ku = {}, lo = {}, ai = {}, yt = {}, St = {};
function pg(e, t, n) {
  if (n === void 0 && (n = Array.prototype), e && typeof n.find == "function")
    return n.find.call(e, t);
  for (var r = 0; r < e.length; r++)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      var i = e[r];
      if (t.call(void 0, i, r, e))
        return i;
    }
}
function fo(e, t) {
  return t === void 0 && (t = Object), t && typeof t.freeze == "function" ? t.freeze(e) : e;
}
function gg(e, t) {
  if (e === null || typeof e != "object")
    throw new TypeError("target is not an object");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
var Qu = fo({
  /**
   * `text/html`, the only mime type that triggers treating an XML document as HTML.
   *
   * @see DOMParser.SupportedType.isHTML
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
   */
  HTML: "text/html",
  /**
   * Helper method to check a mime type if it indicates an HTML document
   *
   * @param {string} [value]
   * @returns {boolean}
   *
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
  isHTML: function(e) {
    return e === Qu.HTML;
  },
  /**
   * `application/xml`, the standard mime type for XML documents.
   *
   * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
   * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_APPLICATION: "application/xml",
  /**
   * `text/html`, an alias for `application/xml`.
   *
   * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
   * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_TEXT: "text/xml",
  /**
   * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
   * but is parsed as an XML document.
   *
   * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
   * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
   */
  XML_XHTML_APPLICATION: "application/xhtml+xml",
  /**
   * `image/svg+xml`,
   *
   * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
   * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
   * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
   */
  XML_SVG_IMAGE: "image/svg+xml"
}), Ju = fo({
  /**
   * The XHTML namespace.
   *
   * @see http://www.w3.org/1999/xhtml
   */
  HTML: "http://www.w3.org/1999/xhtml",
  /**
   * Checks if `uri` equals `NAMESPACE.HTML`.
   *
   * @param {string} [uri]
   *
   * @see NAMESPACE.HTML
   */
  isHTML: function(e) {
    return e === Ju.HTML;
  },
  /**
   * The SVG namespace.
   *
   * @see http://www.w3.org/2000/svg
   */
  SVG: "http://www.w3.org/2000/svg",
  /**
   * The `xml:` namespace.
   *
   * @see http://www.w3.org/XML/1998/namespace
   */
  XML: "http://www.w3.org/XML/1998/namespace",
  /**
   * The `xmlns:` namespace
   *
   * @see https://www.w3.org/2000/xmlns/
   */
  XMLNS: "http://www.w3.org/2000/xmlns/"
});
St.assign = gg;
St.find = pg;
St.freeze = fo;
St.MIME_TYPE = Qu;
St.NAMESPACE = Ju;
var ed = St, gt = ed.find, qn = ed.NAMESPACE;
function mg(e) {
  return e !== "";
}
function bg(e) {
  return e ? e.split(/[\t\n\f\r ]+/).filter(mg) : [];
}
function yg(e, t) {
  return e.hasOwnProperty(t) || (e[t] = !0), e;
}
function ps(e) {
  if (!e)
    return [];
  var t = bg(e);
  return Object.keys(t.reduce(yg, {}));
}
function Dg(e) {
  return function(t) {
    return e && e.indexOf(t) !== -1;
  };
}
function Kn(e, t) {
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
}
function Ke(e, t) {
  var n = e.prototype;
  if (!(n instanceof t)) {
    let r = function() {
    };
    r.prototype = t.prototype, r = new r(), Kn(n, r), e.prototype = n = r;
  }
  n.constructor != e && (typeof e != "function" && console.error("unknown Class:" + e), n.constructor = e);
}
var Qe = {}, lt = Qe.ELEMENT_NODE = 1, pn = Qe.ATTRIBUTE_NODE = 2, wr = Qe.TEXT_NODE = 3, td = Qe.CDATA_SECTION_NODE = 4, nd = Qe.ENTITY_REFERENCE_NODE = 5, vg = Qe.ENTITY_NODE = 6, rd = Qe.PROCESSING_INSTRUCTION_NODE = 7, id = Qe.COMMENT_NODE = 8, ad = Qe.DOCUMENT_NODE = 9, od = Qe.DOCUMENT_TYPE_NODE = 10, Ct = Qe.DOCUMENT_FRAGMENT_NODE = 11, xg = Qe.NOTATION_NODE = 12, Xe = {}, Ie = {};
Xe.INDEX_SIZE_ERR = (Ie[1] = "Index size error", 1);
Xe.DOMSTRING_SIZE_ERR = (Ie[2] = "DOMString size error", 2);
var Ge = Xe.HIERARCHY_REQUEST_ERR = (Ie[3] = "Hierarchy request error", 3);
Xe.WRONG_DOCUMENT_ERR = (Ie[4] = "Wrong document", 4);
Xe.INVALID_CHARACTER_ERR = (Ie[5] = "Invalid character", 5);
Xe.NO_DATA_ALLOWED_ERR = (Ie[6] = "No data allowed", 6);
Xe.NO_MODIFICATION_ALLOWED_ERR = (Ie[7] = "No modification allowed", 7);
var cd = Xe.NOT_FOUND_ERR = (Ie[8] = "Not found", 8);
Xe.NOT_SUPPORTED_ERR = (Ie[9] = "Not supported", 9);
var gs = Xe.INUSE_ATTRIBUTE_ERR = (Ie[10] = "Attribute in use", 10);
Xe.INVALID_STATE_ERR = (Ie[11] = "Invalid state", 11);
Xe.SYNTAX_ERR = (Ie[12] = "Syntax error", 12);
Xe.INVALID_MODIFICATION_ERR = (Ie[13] = "Invalid modification", 13);
Xe.NAMESPACE_ERR = (Ie[14] = "Invalid namespace", 14);
Xe.INVALID_ACCESS_ERR = (Ie[15] = "Invalid access", 15);
function Re(e, t) {
  if (t instanceof Error)
    var n = t;
  else
    n = this, Error.call(this, Ie[e]), this.message = Ie[e], Error.captureStackTrace && Error.captureStackTrace(this, Re);
  return n.code = e, t && (this.message = this.message + ": " + t), n;
}
Re.prototype = Error.prototype;
Kn(Xe, Re);
function At() {
}
At.prototype = {
  /**
   * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
   * @standard level1
   */
  length: 0,
  /**
   * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
   * @standard level1
   * @param index  unsigned long
   *   Index into the collection.
   * @return Node
   * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
   */
  item: function(e) {
    return e >= 0 && e < this.length ? this[e] : null;
  },
  toString: function(e, t) {
    for (var n = [], r = 0; r < this.length; r++)
      ln(this[r], n, e, t);
    return n.join("");
  },
  /**
   * @private
   * @param {function (Node):boolean} predicate
   * @returns {Node[]}
   */
  filter: function(e) {
    return Array.prototype.filter.call(this, e);
  },
  /**
   * @private
   * @param {Node} item
   * @returns {number}
   */
  indexOf: function(e) {
    return Array.prototype.indexOf.call(this, e);
  }
};
function gn(e, t) {
  this._node = e, this._refresh = t, ho(this);
}
function ho(e) {
  var t = e._node._inc || e._node.ownerDocument._inc;
  if (e._inc !== t) {
    var n = e._refresh(e._node);
    if (Dd(e, "length", n.length), !e.$$length || n.length < e.$$length)
      for (var r = n.length; r in e; r++)
        Object.prototype.hasOwnProperty.call(e, r) && delete e[r];
    Kn(n, e), e._inc = t;
  }
}
gn.prototype.item = function(e) {
  return ho(this), this[e] || null;
};
Ke(gn, At);
function Tr() {
}
function sd(e, t) {
  for (var n = e.length; n--; )
    if (e[n] === t)
      return n;
}
function ms(e, t, n, r) {
  if (r ? t[sd(t, r)] = n : t[t.length++] = n, e) {
    n.ownerElement = e;
    var i = e.ownerDocument;
    i && (r && ld(i, e, r), _g(i, e, n));
  }
}
function bs(e, t, n) {
  var r = sd(t, n);
  if (r >= 0) {
    for (var i = t.length - 1; r < i; )
      t[r] = t[++r];
    if (t.length = i, e) {
      var a = e.ownerDocument;
      a && (ld(a, e, n), n.ownerElement = null);
    }
  } else
    throw new Re(cd, new Error(e.tagName + "@" + n));
}
Tr.prototype = {
  length: 0,
  item: At.prototype.item,
  getNamedItem: function(e) {
    for (var t = this.length; t--; ) {
      var n = this[t];
      if (n.nodeName == e)
        return n;
    }
  },
  setNamedItem: function(e) {
    var t = e.ownerElement;
    if (t && t != this._ownerElement)
      throw new Re(gs);
    var n = this.getNamedItem(e.nodeName);
    return ms(this._ownerElement, this, e, n), n;
  },
  /* returns Node */
  setNamedItemNS: function(e) {
    var t = e.ownerElement, n;
    if (t && t != this._ownerElement)
      throw new Re(gs);
    return n = this.getNamedItemNS(e.namespaceURI, e.localName), ms(this._ownerElement, this, e, n), n;
  },
  /* returns Node */
  removeNamedItem: function(e) {
    var t = this.getNamedItem(e);
    return bs(this._ownerElement, this, t), t;
  },
  // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
  //for level2
  removeNamedItemNS: function(e, t) {
    var n = this.getNamedItemNS(e, t);
    return bs(this._ownerElement, this, n), n;
  },
  getNamedItemNS: function(e, t) {
    for (var n = this.length; n--; ) {
      var r = this[n];
      if (r.localName == t && r.namespaceURI == e)
        return r;
    }
    return null;
  }
};
function ud() {
}
ud.prototype = {
  /**
   * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
   * The different implementations fairly diverged in what kind of features were reported.
   * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
   *
   * @deprecated It is deprecated and modern browsers return true in all cases.
   *
   * @param {string} feature
   * @param {string} [version]
   * @returns {boolean} always true
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
   * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
   */
  hasFeature: function(e, t) {
    return !0;
  },
  /**
   * Creates an XML Document object of the specified type with its document element.
   *
   * __It behaves slightly different from the description in the living standard__:
   * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
   * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string|null} namespaceURI
   * @param {string} qualifiedName
   * @param {DocumentType=null} doctype
   * @returns {Document}
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocument: function(e, t, n) {
    var r = new Qn();
    if (r.implementation = this, r.childNodes = new At(), r.doctype = n || null, n && r.appendChild(n), t) {
      var i = r.createElementNS(e, t);
      r.appendChild(i);
    }
    return r;
  },
  /**
   * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
   *
   * __This behavior is slightly different from the in the specs__:
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string} qualifiedName
   * @param {string} [publicId]
   * @param {string} [systemId]
   * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
   * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocumentType: function(e, t, n) {
    var r = new oi();
    return r.name = e, r.nodeName = e, r.publicId = t || "", r.systemId = n || "", r;
  }
};
function Fe() {
}
Fe.prototype = {
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
  // Modified in DOM Level 2:
  insertBefore: function(e, t) {
    return Er(this, e, t);
  },
  replaceChild: function(e, t) {
    Er(this, e, t, hd), t && this.removeChild(t);
  },
  removeChild: function(e) {
    return fd(this, e);
  },
  appendChild: function(e) {
    return this.insertBefore(e, null);
  },
  hasChildNodes: function() {
    return this.firstChild != null;
  },
  cloneNode: function(e) {
    return Ga(this.ownerDocument || this, this, e);
  },
  // Modified in DOM Level 2:
  normalize: function() {
    for (var e = this.firstChild; e; ) {
      var t = e.nextSibling;
      t && t.nodeType == wr && e.nodeType == wr ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), e = t);
    }
  },
  // Introduced in DOM Level 2:
  isSupported: function(e, t) {
    return this.ownerDocument.implementation.hasFeature(e, t);
  },
  // Introduced in DOM Level 2:
  hasAttributes: function() {
    return this.attributes.length > 0;
  },
  /**
   * Look up the prefix associated to the given namespace URI, starting from this node.
   * **The default namespace declarations are ignored by this method.**
   * See Namespace Prefix Lookup for details on the algorithm used by this method.
   *
   * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
   *
   * @param {string | null} namespaceURI
   * @returns {string | null}
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
   * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
   * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
   * @see https://github.com/xmldom/xmldom/issues/322
   */
  lookupPrefix: function(e) {
    for (var t = this; t; ) {
      var n = t._nsMap;
      if (n) {
        for (var r in n)
          if (Object.prototype.hasOwnProperty.call(n, r) && n[r] === e)
            return r;
      }
      t = t.nodeType == pn ? t.ownerDocument : t.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  lookupNamespaceURI: function(e) {
    for (var t = this; t; ) {
      var n = t._nsMap;
      if (n && Object.prototype.hasOwnProperty.call(n, e))
        return n[e];
      t = t.nodeType == pn ? t.ownerDocument : t.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  isDefaultNamespace: function(e) {
    var t = this.lookupPrefix(e);
    return t == null;
  }
};
function dd(e) {
  return e == "<" && "&lt;" || e == ">" && "&gt;" || e == "&" && "&amp;" || e == '"' && "&quot;" || "&#" + e.charCodeAt() + ";";
}
Kn(Qe, Fe);
Kn(Qe, Fe.prototype);
function zn(e, t) {
  if (t(e))
    return !0;
  if (e = e.firstChild)
    do
      if (zn(e, t))
        return !0;
    while (e = e.nextSibling);
}
function Qn() {
  this.ownerDocument = this;
}
function _g(e, t, n) {
  e && e._inc++;
  var r = n.namespaceURI;
  r === qn.XMLNS && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
}
function ld(e, t, n, r) {
  e && e._inc++;
  var i = n.namespaceURI;
  i === qn.XMLNS && delete t._nsMap[n.prefix ? n.localName : ""];
}
function po(e, t, n) {
  if (e && e._inc) {
    e._inc++;
    var r = t.childNodes;
    if (n)
      r[r.length++] = n;
    else {
      for (var i = t.firstChild, a = 0; i; )
        r[a++] = i, i = i.nextSibling;
      r.length = a, delete r[r.length];
    }
  }
}
function fd(e, t) {
  var n = t.previousSibling, r = t.nextSibling;
  return n ? n.nextSibling = r : e.firstChild = r, r ? r.previousSibling = n : e.lastChild = n, t.parentNode = null, t.previousSibling = null, t.nextSibling = null, po(e.ownerDocument, e), t;
}
function Ug(e) {
  return e && (e.nodeType === Fe.DOCUMENT_NODE || e.nodeType === Fe.DOCUMENT_FRAGMENT_NODE || e.nodeType === Fe.ELEMENT_NODE);
}
function wg(e) {
  return e && (mt(e) || go(e) || Ft(e) || e.nodeType === Fe.DOCUMENT_FRAGMENT_NODE || e.nodeType === Fe.COMMENT_NODE || e.nodeType === Fe.PROCESSING_INSTRUCTION_NODE);
}
function Ft(e) {
  return e && e.nodeType === Fe.DOCUMENT_TYPE_NODE;
}
function mt(e) {
  return e && e.nodeType === Fe.ELEMENT_NODE;
}
function go(e) {
  return e && e.nodeType === Fe.TEXT_NODE;
}
function ys(e, t) {
  var n = e.childNodes || [];
  if (gt(n, mt) || Ft(t))
    return !1;
  var r = gt(n, Ft);
  return !(t && r && n.indexOf(r) > n.indexOf(t));
}
function Ds(e, t) {
  var n = e.childNodes || [];
  function r(a) {
    return mt(a) && a !== t;
  }
  if (gt(n, r))
    return !1;
  var i = gt(n, Ft);
  return !(t && i && n.indexOf(i) > n.indexOf(t));
}
function Tg(e, t, n) {
  if (!Ug(e))
    throw new Re(Ge, "Unexpected parent node type " + e.nodeType);
  if (n && n.parentNode !== e)
    throw new Re(cd, "child not in parent");
  if (// 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
  !wg(t) || Ft(t) && e.nodeType !== Fe.DOCUMENT_NODE)
    throw new Re(
      Ge,
      "Unexpected node type " + t.nodeType + " for parent node type " + e.nodeType
    );
}
function Eg(e, t, n) {
  var r = e.childNodes || [], i = t.childNodes || [];
  if (t.nodeType === Fe.DOCUMENT_FRAGMENT_NODE) {
    var a = i.filter(mt);
    if (a.length > 1 || gt(i, go))
      throw new Re(Ge, "More than one element or text in fragment");
    if (a.length === 1 && !ys(e, n))
      throw new Re(Ge, "Element in fragment can not be inserted before doctype");
  }
  if (mt(t) && !ys(e, n))
    throw new Re(Ge, "Only one element can be added and only after doctype");
  if (Ft(t)) {
    if (gt(r, Ft))
      throw new Re(Ge, "Only one doctype is allowed");
    var c = gt(r, mt);
    if (n && r.indexOf(c) < r.indexOf(n))
      throw new Re(Ge, "Doctype can only be inserted before an element");
    if (!n && c)
      throw new Re(Ge, "Doctype can not be appended since element is present");
  }
}
function hd(e, t, n) {
  var r = e.childNodes || [], i = t.childNodes || [];
  if (t.nodeType === Fe.DOCUMENT_FRAGMENT_NODE) {
    var a = i.filter(mt);
    if (a.length > 1 || gt(i, go))
      throw new Re(Ge, "More than one element or text in fragment");
    if (a.length === 1 && !Ds(e, n))
      throw new Re(Ge, "Element in fragment can not be inserted before doctype");
  }
  if (mt(t) && !Ds(e, n))
    throw new Re(Ge, "Only one element can be added and only after doctype");
  if (Ft(t)) {
    if (gt(r, function(s) {
      return Ft(s) && s !== n;
    }))
      throw new Re(Ge, "Only one doctype is allowed");
    var c = gt(r, mt);
    if (n && r.indexOf(c) < r.indexOf(n))
      throw new Re(Ge, "Doctype can only be inserted before an element");
  }
}
function Er(e, t, n, r) {
  Tg(e, t, n), e.nodeType === Fe.DOCUMENT_NODE && (r || Eg)(e, t, n);
  var i = t.parentNode;
  if (i && i.removeChild(t), t.nodeType === Ct) {
    var a = t.firstChild;
    if (a == null)
      return t;
    var c = t.lastChild;
  } else
    a = c = t;
  var o = n ? n.previousSibling : e.lastChild;
  a.previousSibling = o, c.nextSibling = n, o ? o.nextSibling = a : e.firstChild = a, n == null ? e.lastChild = c : n.previousSibling = c;
  do
    a.parentNode = e;
  while (a !== c && (a = a.nextSibling));
  return po(e.ownerDocument || e, e), t.nodeType == Ct && (t.firstChild = t.lastChild = null), t;
}
function Ag(e, t) {
  return t.parentNode && t.parentNode.removeChild(t), t.parentNode = e, t.previousSibling = e.lastChild, t.nextSibling = null, t.previousSibling ? t.previousSibling.nextSibling = t : e.firstChild = t, e.lastChild = t, po(e.ownerDocument, e, t), t;
}
Qn.prototype = {
  //implementation : null,
  nodeName: "#document",
  nodeType: ad,
  /**
   * The DocumentType node of the document.
   *
   * @readonly
   * @type DocumentType
   */
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function(e, t) {
    if (e.nodeType == Ct) {
      for (var n = e.firstChild; n; ) {
        var r = n.nextSibling;
        this.insertBefore(n, t), n = r;
      }
      return e;
    }
    return Er(this, e, t), e.ownerDocument = this, this.documentElement === null && e.nodeType === lt && (this.documentElement = e), e;
  },
  removeChild: function(e) {
    return this.documentElement == e && (this.documentElement = null), fd(this, e);
  },
  replaceChild: function(e, t) {
    Er(this, e, t, hd), e.ownerDocument = this, t && this.removeChild(t), mt(e) && (this.documentElement = e);
  },
  // Introduced in DOM Level 2:
  importNode: function(e, t) {
    return yd(this, e, t);
  },
  // Introduced in DOM Level 2:
  getElementById: function(e) {
    var t = null;
    return zn(this.documentElement, function(n) {
      if (n.nodeType == lt && n.getAttribute("id") == e)
        return t = n, !0;
    }), t;
  },
  /**
   * The `getElementsByClassName` method of `Document` interface returns an array-like object
   * of all child elements which have **all** of the given class name(s).
   *
   * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
   *
   *
   * Warning: This is a live LiveNodeList.
   * Changes in the DOM will reflect in the array as the changes occur.
   * If an element selected by this array no longer qualifies for the selector,
   * it will automatically be removed. Be aware of this for iteration purposes.
   *
   * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
   * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
   */
  getElementsByClassName: function(e) {
    var t = ps(e);
    return new gn(this, function(n) {
      var r = [];
      return t.length > 0 && zn(n.documentElement, function(i) {
        if (i !== n && i.nodeType === lt) {
          var a = i.getAttribute("class");
          if (a) {
            var c = e === a;
            if (!c) {
              var o = ps(a);
              c = t.every(Dg(o));
            }
            c && r.push(i);
          }
        }
      }), r;
    });
  },
  //document factory method:
  createElement: function(e) {
    var t = new Yt();
    t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.localName = e, t.childNodes = new At();
    var n = t.attributes = new Tr();
    return n._ownerElement = t, t;
  },
  createDocumentFragment: function() {
    var e = new ci();
    return e.ownerDocument = this, e.childNodes = new At(), e;
  },
  createTextNode: function(e) {
    var t = new mo();
    return t.ownerDocument = this, t.appendData(e), t;
  },
  createComment: function(e) {
    var t = new bo();
    return t.ownerDocument = this, t.appendData(e), t;
  },
  createCDATASection: function(e) {
    var t = new yo();
    return t.ownerDocument = this, t.appendData(e), t;
  },
  createProcessingInstruction: function(e, t) {
    var n = new vo();
    return n.ownerDocument = this, n.tagName = n.nodeName = n.target = e, n.nodeValue = n.data = t, n;
  },
  createAttribute: function(e) {
    var t = new Ar();
    return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, t;
  },
  createEntityReference: function(e) {
    var t = new Do();
    return t.ownerDocument = this, t.nodeName = e, t;
  },
  // Introduced in DOM Level 2:
  createElementNS: function(e, t) {
    var n = new Yt(), r = t.split(":"), i = n.attributes = new Tr();
    return n.childNodes = new At(), n.ownerDocument = this, n.nodeName = t, n.tagName = t, n.namespaceURI = e, r.length == 2 ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, i._ownerElement = n, n;
  },
  // Introduced in DOM Level 2:
  createAttributeNS: function(e, t) {
    var n = new Ar(), r = t.split(":");
    return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, r.length == 2 ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, n;
  }
};
Ke(Qn, Fe);
function Yt() {
  this._nsMap = {};
}
Yt.prototype = {
  nodeType: lt,
  hasAttribute: function(e) {
    return this.getAttributeNode(e) != null;
  },
  getAttribute: function(e) {
    var t = this.getAttributeNode(e);
    return t && t.value || "";
  },
  getAttributeNode: function(e) {
    return this.attributes.getNamedItem(e);
  },
  setAttribute: function(e, t) {
    var n = this.ownerDocument.createAttribute(e);
    n.value = n.nodeValue = "" + t, this.setAttributeNode(n);
  },
  removeAttribute: function(e) {
    var t = this.getAttributeNode(e);
    t && this.removeAttributeNode(t);
  },
  //four real opeartion method
  appendChild: function(e) {
    return e.nodeType === Ct ? this.insertBefore(e, null) : Ag(this, e);
  },
  setAttributeNode: function(e) {
    return this.attributes.setNamedItem(e);
  },
  setAttributeNodeNS: function(e) {
    return this.attributes.setNamedItemNS(e);
  },
  removeAttributeNode: function(e) {
    return this.attributes.removeNamedItem(e.nodeName);
  },
  //get real attribute name,and remove it by removeAttributeNode
  removeAttributeNS: function(e, t) {
    var n = this.getAttributeNodeNS(e, t);
    n && this.removeAttributeNode(n);
  },
  hasAttributeNS: function(e, t) {
    return this.getAttributeNodeNS(e, t) != null;
  },
  getAttributeNS: function(e, t) {
    var n = this.getAttributeNodeNS(e, t);
    return n && n.value || "";
  },
  setAttributeNS: function(e, t, n) {
    var r = this.ownerDocument.createAttributeNS(e, t);
    r.value = r.nodeValue = "" + n, this.setAttributeNode(r);
  },
  getAttributeNodeNS: function(e, t) {
    return this.attributes.getNamedItemNS(e, t);
  },
  getElementsByTagName: function(e) {
    return new gn(this, function(t) {
      var n = [];
      return zn(t, function(r) {
        r !== t && r.nodeType == lt && (e === "*" || r.tagName == e) && n.push(r);
      }), n;
    });
  },
  getElementsByTagNameNS: function(e, t) {
    return new gn(this, function(n) {
      var r = [];
      return zn(n, function(i) {
        i !== n && i.nodeType === lt && (e === "*" || i.namespaceURI === e) && (t === "*" || i.localName == t) && r.push(i);
      }), r;
    });
  }
};
Qn.prototype.getElementsByTagName = Yt.prototype.getElementsByTagName;
Qn.prototype.getElementsByTagNameNS = Yt.prototype.getElementsByTagNameNS;
Ke(Yt, Fe);
function Ar() {
}
Ar.prototype.nodeType = pn;
Ke(Ar, Fe);
function Jn() {
}
Jn.prototype = {
  data: "",
  substringData: function(e, t) {
    return this.data.substring(e, e + t);
  },
  appendData: function(e) {
    e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
  },
  insertData: function(e, t) {
    this.replaceData(e, 0, t);
  },
  appendChild: function(e) {
    throw new Error(Ie[Ge]);
  },
  deleteData: function(e, t) {
    this.replaceData(e, t, "");
  },
  replaceData: function(e, t, n) {
    var r = this.data.substring(0, e), i = this.data.substring(e + t);
    n = r + n + i, this.nodeValue = this.data = n, this.length = n.length;
  }
};
Ke(Jn, Fe);
function mo() {
}
mo.prototype = {
  nodeName: "#text",
  nodeType: wr,
  splitText: function(e) {
    var t = this.data, n = t.substring(e);
    t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
    var r = this.ownerDocument.createTextNode(n);
    return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling), r;
  }
};
Ke(mo, Jn);
function bo() {
}
bo.prototype = {
  nodeName: "#comment",
  nodeType: id
};
Ke(bo, Jn);
function yo() {
}
yo.prototype = {
  nodeName: "#cdata-section",
  nodeType: td
};
Ke(yo, Jn);
function oi() {
}
oi.prototype.nodeType = od;
Ke(oi, Fe);
function pd() {
}
pd.prototype.nodeType = xg;
Ke(pd, Fe);
function gd() {
}
gd.prototype.nodeType = vg;
Ke(gd, Fe);
function Do() {
}
Do.prototype.nodeType = nd;
Ke(Do, Fe);
function ci() {
}
ci.prototype.nodeName = "#document-fragment";
ci.prototype.nodeType = Ct;
Ke(ci, Fe);
function vo() {
}
vo.prototype.nodeType = rd;
Ke(vo, Fe);
function md() {
}
md.prototype.serializeToString = function(e, t, n) {
  return bd.call(e, t, n);
};
Fe.prototype.toString = bd;
function bd(e, t) {
  var n = [], r = this.nodeType == 9 && this.documentElement || this, i = r.prefix, a = r.namespaceURI;
  if (a && i == null) {
    var i = r.lookupPrefix(a);
    if (i == null)
      var c = [
        { namespace: a, prefix: null }
        //{namespace:uri,prefix:''}
      ];
  }
  return ln(this, n, e, t, c), n.join("");
}
function vs(e, t, n) {
  var r = e.prefix || "", i = e.namespaceURI;
  if (!i || r === "xml" && i === qn.XML || i === qn.XMLNS)
    return !1;
  for (var a = n.length; a--; ) {
    var c = n[a];
    if (c.prefix === r)
      return c.namespace !== i;
  }
  return !0;
}
function Sa(e, t, n) {
  e.push(" ", t, '="', n.replace(/[<>&"\t\n\r]/g, dd), '"');
}
function ln(e, t, n, r, i) {
  if (i || (i = []), r)
    if (e = r(e), e) {
      if (typeof e == "string") {
        t.push(e);
        return;
      }
    } else
      return;
  switch (e.nodeType) {
    case lt:
      var a = e.attributes, c = a.length, g = e.firstChild, o = e.tagName;
      n = qn.isHTML(e.namespaceURI) || n;
      var s = o;
      if (!n && !e.prefix && e.namespaceURI) {
        for (var u, f = 0; f < a.length; f++)
          if (a.item(f).name === "xmlns") {
            u = a.item(f).value;
            break;
          }
        if (!u)
          for (var p = i.length - 1; p >= 0; p--) {
            var y = i[p];
            if (y.prefix === "" && y.namespace === e.namespaceURI) {
              u = y.namespace;
              break;
            }
          }
        if (u !== e.namespaceURI)
          for (var p = i.length - 1; p >= 0; p--) {
            var y = i[p];
            if (y.namespace === e.namespaceURI) {
              y.prefix && (s = y.prefix + ":" + o);
              break;
            }
          }
      }
      t.push("<", s);
      for (var m = 0; m < c; m++) {
        var b = a.item(m);
        b.prefix == "xmlns" ? i.push({ prefix: b.localName, namespace: b.value }) : b.nodeName == "xmlns" && i.push({ prefix: "", namespace: b.value });
      }
      for (var m = 0; m < c; m++) {
        var b = a.item(m);
        if (vs(b, n, i)) {
          var d = b.prefix || "", l = b.namespaceURI;
          Sa(t, d ? "xmlns:" + d : "xmlns", l), i.push({ prefix: d, namespace: l });
        }
        ln(b, t, n, r, i);
      }
      if (o === s && vs(e, n, i)) {
        var d = e.prefix || "", l = e.namespaceURI;
        Sa(t, d ? "xmlns:" + d : "xmlns", l), i.push({ prefix: d, namespace: l });
      }
      if (g || n && !/^(?:meta|link|img|br|hr|input)$/i.test(o)) {
        if (t.push(">"), n && /^script$/i.test(o))
          for (; g; )
            g.data ? t.push(g.data) : ln(g, t, n, r, i.slice()), g = g.nextSibling;
        else
          for (; g; )
            ln(g, t, n, r, i.slice()), g = g.nextSibling;
        t.push("</", s, ">");
      } else
        t.push("/>");
      return;
    case ad:
    case Ct:
      for (var g = e.firstChild; g; )
        ln(g, t, n, r, i.slice()), g = g.nextSibling;
      return;
    case pn:
      return Sa(t, e.name, e.value);
    case wr:
      return t.push(
        e.data.replace(/[<&>]/g, dd)
      );
    case td:
      return t.push("<![CDATA[", e.data, "]]>");
    case id:
      return t.push("<!--", e.data, "-->");
    case od:
      var h = e.publicId, D = e.systemId;
      if (t.push("<!DOCTYPE ", e.name), h)
        t.push(" PUBLIC ", h), D && D != "." && t.push(" ", D), t.push(">");
      else if (D && D != ".")
        t.push(" SYSTEM ", D, ">");
      else {
        var w = e.internalSubset;
        w && t.push(" [", w, "]"), t.push(">");
      }
      return;
    case rd:
      return t.push("<?", e.target, " ", e.data, "?>");
    case nd:
      return t.push("&", e.nodeName, ";");
    default:
      t.push("??", e.nodeName);
  }
}
function yd(e, t, n) {
  var r;
  switch (t.nodeType) {
    case lt:
      r = t.cloneNode(!1), r.ownerDocument = e;
    case Ct:
      break;
    case pn:
      n = !0;
      break;
  }
  if (r || (r = t.cloneNode(!1)), r.ownerDocument = e, r.parentNode = null, n)
    for (var i = t.firstChild; i; )
      r.appendChild(yd(e, i, n)), i = i.nextSibling;
  return r;
}
function Ga(e, t, n) {
  var r = new t.constructor();
  for (var i in t)
    if (Object.prototype.hasOwnProperty.call(t, i)) {
      var a = t[i];
      typeof a != "object" && a != r[i] && (r[i] = a);
    }
  switch (t.childNodes && (r.childNodes = new At()), r.ownerDocument = e, r.nodeType) {
    case lt:
      var c = t.attributes, o = r.attributes = new Tr(), s = c.length;
      o._ownerElement = r;
      for (var u = 0; u < s; u++)
        r.setAttributeNode(Ga(e, c.item(u), !0));
      break;
    case pn:
      n = !0;
  }
  if (n)
    for (var f = t.firstChild; f; )
      r.appendChild(Ga(e, f, n)), f = f.nextSibling;
  return r;
}
function Dd(e, t, n) {
  e[t] = n;
}
try {
  if (Object.defineProperty) {
    let e = function(t) {
      switch (t.nodeType) {
        case lt:
        case Ct:
          var n = [];
          for (t = t.firstChild; t; )
            t.nodeType !== 7 && t.nodeType !== 8 && n.push(e(t)), t = t.nextSibling;
          return n.join("");
        default:
          return t.nodeValue;
      }
    };
    Object.defineProperty(gn.prototype, "length", {
      get: function() {
        return ho(this), this.$$length;
      }
    }), Object.defineProperty(Fe.prototype, "textContent", {
      get: function() {
        return e(this);
      },
      set: function(t) {
        switch (this.nodeType) {
          case lt:
          case Ct:
            for (; this.firstChild; )
              this.removeChild(this.firstChild);
            (t || String(t)) && this.appendChild(this.ownerDocument.createTextNode(t));
            break;
          default:
            this.data = t, this.value = t, this.nodeValue = t;
        }
      }
    }), Dd = function(t, n, r) {
      t["$$" + n] = r;
    };
  }
} catch {
}
yt.DocumentType = oi;
yt.DOMException = Re;
yt.DOMImplementation = ud;
yt.Element = Yt;
yt.Node = Fe;
yt.NodeList = At;
yt.XMLSerializer = md;
var si = {}, vd = {};
(function(e) {
  var t = St.freeze;
  e.XML_ENTITIES = t({
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"'
  }), e.HTML_ENTITIES = t({
    Aacute: "Á",
    aacute: "á",
    Abreve: "Ă",
    abreve: "ă",
    ac: "∾",
    acd: "∿",
    acE: "∾̳",
    Acirc: "Â",
    acirc: "â",
    acute: "´",
    Acy: "А",
    acy: "а",
    AElig: "Æ",
    aelig: "æ",
    af: "⁡",
    Afr: "𝔄",
    afr: "𝔞",
    Agrave: "À",
    agrave: "à",
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
    angst: "Å",
    angzarr: "⍼",
    Aogon: "Ą",
    aogon: "ą",
    Aopf: "𝔸",
    aopf: "𝕒",
    ap: "≈",
    apacir: "⩯",
    apE: "⩰",
    ape: "≊",
    apid: "≋",
    apos: "'",
    ApplyFunction: "⁡",
    approx: "≈",
    approxeq: "≊",
    Aring: "Å",
    aring: "å",
    Ascr: "𝒜",
    ascr: "𝒶",
    Assign: "≔",
    ast: "*",
    asymp: "≈",
    asympeq: "≍",
    Atilde: "Ã",
    atilde: "ã",
    Auml: "Ä",
    auml: "ä",
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
    Bfr: "𝔅",
    bfr: "𝔟",
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
    Bopf: "𝔹",
    bopf: "𝕓",
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
    brvbar: "¦",
    Bscr: "ℬ",
    bscr: "𝒷",
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
    Ccedil: "Ç",
    ccedil: "ç",
    Ccirc: "Ĉ",
    ccirc: "ĉ",
    Cconint: "∰",
    ccups: "⩌",
    ccupssm: "⩐",
    Cdot: "Ċ",
    cdot: "ċ",
    cedil: "¸",
    Cedilla: "¸",
    cemptyv: "⦲",
    cent: "¢",
    CenterDot: "·",
    centerdot: "·",
    Cfr: "ℭ",
    cfr: "𝔠",
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
    circledR: "®",
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
    copf: "𝕔",
    coprod: "∐",
    Coproduct: "∐",
    COPY: "©",
    copy: "©",
    copysr: "℗",
    CounterClockwiseContourIntegral: "∳",
    crarr: "↵",
    Cross: "⨯",
    cross: "✗",
    Cscr: "𝒞",
    cscr: "𝒸",
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
    curren: "¤",
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
    deg: "°",
    Del: "∇",
    Delta: "Δ",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    Dfr: "𝔇",
    dfr: "𝔡",
    dHar: "⥥",
    dharl: "⇃",
    dharr: "⇂",
    DiacriticalAcute: "´",
    DiacriticalDot: "˙",
    DiacriticalDoubleAcute: "˝",
    DiacriticalGrave: "`",
    DiacriticalTilde: "˜",
    diam: "⋄",
    Diamond: "⋄",
    diamond: "⋄",
    diamondsuit: "♦",
    diams: "♦",
    die: "¨",
    DifferentialD: "ⅆ",
    digamma: "ϝ",
    disin: "⋲",
    div: "÷",
    divide: "÷",
    divideontimes: "⋇",
    divonx: "⋇",
    DJcy: "Ђ",
    djcy: "ђ",
    dlcorn: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    Dopf: "𝔻",
    dopf: "𝕕",
    Dot: "¨",
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
    DoubleDot: "¨",
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
    Dscr: "𝒟",
    dscr: "𝒹",
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
    Eacute: "É",
    eacute: "é",
    easter: "⩮",
    Ecaron: "Ě",
    ecaron: "ě",
    ecir: "≖",
    Ecirc: "Ê",
    ecirc: "ê",
    ecolon: "≕",
    Ecy: "Э",
    ecy: "э",
    eDDot: "⩷",
    Edot: "Ė",
    eDot: "≑",
    edot: "ė",
    ee: "ⅇ",
    efDot: "≒",
    Efr: "𝔈",
    efr: "𝔢",
    eg: "⪚",
    Egrave: "È",
    egrave: "è",
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
    Eopf: "𝔼",
    eopf: "𝕖",
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
    ETH: "Ð",
    eth: "ð",
    Euml: "Ë",
    euml: "ë",
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
    Ffr: "𝔉",
    ffr: "𝔣",
    filig: "ﬁ",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    Fopf: "𝔽",
    fopf: "𝕗",
    ForAll: "∀",
    forall: "∀",
    fork: "⋔",
    forkv: "⫙",
    Fouriertrf: "ℱ",
    fpartint: "⨍",
    frac12: "½",
    frac13: "⅓",
    frac14: "¼",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "¾",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    Fscr: "ℱ",
    fscr: "𝒻",
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
    Gfr: "𝔊",
    gfr: "𝔤",
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
    Gopf: "𝔾",
    gopf: "𝕘",
    grave: "`",
    GreaterEqual: "≥",
    GreaterEqualLess: "⋛",
    GreaterFullEqual: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    GreaterSlantEqual: "⩾",
    GreaterTilde: "≳",
    Gscr: "𝒢",
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
    half: "½",
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
    hfr: "𝔥",
    HilbertSpace: "ℋ",
    hksearow: "⤥",
    hkswarow: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    hookrightarrow: "↪",
    Hopf: "ℍ",
    hopf: "𝕙",
    horbar: "―",
    HorizontalLine: "─",
    Hscr: "ℋ",
    hscr: "𝒽",
    hslash: "ℏ",
    Hstrok: "Ħ",
    hstrok: "ħ",
    HumpDownHump: "≎",
    HumpEqual: "≏",
    hybull: "⁃",
    hyphen: "‐",
    Iacute: "Í",
    iacute: "í",
    ic: "⁣",
    Icirc: "Î",
    icirc: "î",
    Icy: "И",
    icy: "и",
    Idot: "İ",
    IEcy: "Е",
    iecy: "е",
    iexcl: "¡",
    iff: "⇔",
    Ifr: "ℑ",
    ifr: "𝔦",
    Igrave: "Ì",
    igrave: "ì",
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
    Iopf: "𝕀",
    iopf: "𝕚",
    Iota: "Ι",
    iota: "ι",
    iprod: "⨼",
    iquest: "¿",
    Iscr: "ℐ",
    iscr: "𝒾",
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
    Iuml: "Ï",
    iuml: "ï",
    Jcirc: "Ĵ",
    jcirc: "ĵ",
    Jcy: "Й",
    jcy: "й",
    Jfr: "𝔍",
    jfr: "𝔧",
    jmath: "ȷ",
    Jopf: "𝕁",
    jopf: "𝕛",
    Jscr: "𝒥",
    jscr: "𝒿",
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
    Kfr: "𝔎",
    kfr: "𝔨",
    kgreen: "ĸ",
    KHcy: "Х",
    khcy: "х",
    KJcy: "Ќ",
    kjcy: "ќ",
    Kopf: "𝕂",
    kopf: "𝕜",
    Kscr: "𝒦",
    kscr: "𝓀",
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
    laquo: "«",
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
    Lfr: "𝔏",
    lfr: "𝔩",
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
    Lopf: "𝕃",
    lopf: "𝕝",
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
    lscr: "𝓁",
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
    macr: "¯",
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
    Mfr: "𝔐",
    mfr: "𝔪",
    mho: "℧",
    micro: "µ",
    mid: "∣",
    midast: "*",
    midcir: "⫰",
    middot: "·",
    minus: "−",
    minusb: "⊟",
    minusd: "∸",
    minusdu: "⨪",
    MinusPlus: "∓",
    mlcp: "⫛",
    mldr: "…",
    mnplus: "∓",
    models: "⊧",
    Mopf: "𝕄",
    mopf: "𝕞",
    mp: "∓",
    Mscr: "ℳ",
    mscr: "𝓂",
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
    nbsp: " ",
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
    NewLine: `
`,
    nexist: "∄",
    nexists: "∄",
    Nfr: "𝔑",
    nfr: "𝔫",
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
    NonBreakingSpace: " ",
    Nopf: "ℕ",
    nopf: "𝕟",
    Not: "⫬",
    not: "¬",
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
    Nscr: "𝒩",
    nscr: "𝓃",
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
    Ntilde: "Ñ",
    ntilde: "ñ",
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
    Oacute: "Ó",
    oacute: "ó",
    oast: "⊛",
    ocir: "⊚",
    Ocirc: "Ô",
    ocirc: "ô",
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
    Ofr: "𝔒",
    ofr: "𝔬",
    ogon: "˛",
    Ograve: "Ò",
    ograve: "ò",
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
    Oopf: "𝕆",
    oopf: "𝕠",
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
    ordf: "ª",
    ordm: "º",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oS: "Ⓢ",
    Oscr: "𝒪",
    oscr: "ℴ",
    Oslash: "Ø",
    oslash: "ø",
    osol: "⊘",
    Otilde: "Õ",
    otilde: "õ",
    Otimes: "⨷",
    otimes: "⊗",
    otimesas: "⨶",
    Ouml: "Ö",
    ouml: "ö",
    ovbar: "⌽",
    OverBar: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    OverParenthesis: "⏜",
    par: "∥",
    para: "¶",
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
    Pfr: "𝔓",
    pfr: "𝔭",
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
    PlusMinus: "±",
    plusmn: "±",
    plussim: "⨦",
    plustwo: "⨧",
    pm: "±",
    Poincareplane: "ℌ",
    pointint: "⨕",
    Popf: "ℙ",
    popf: "𝕡",
    pound: "£",
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
    Pscr: "𝒫",
    pscr: "𝓅",
    Psi: "Ψ",
    psi: "ψ",
    puncsp: " ",
    Qfr: "𝔔",
    qfr: "𝔮",
    qint: "⨌",
    Qopf: "ℚ",
    qopf: "𝕢",
    qprime: "⁗",
    Qscr: "𝒬",
    qscr: "𝓆",
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
    raquo: "»",
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
    REG: "®",
    reg: "®",
    ReverseElement: "∋",
    ReverseEquilibrium: "⇋",
    ReverseUpEquilibrium: "⥯",
    rfisht: "⥽",
    rfloor: "⌋",
    Rfr: "ℜ",
    rfr: "𝔯",
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
    ropf: "𝕣",
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
    rscr: "𝓇",
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
    sect: "§",
    semi: ";",
    seswar: "⤩",
    setminus: "∖",
    setmn: "∖",
    sext: "✶",
    Sfr: "𝔖",
    sfr: "𝔰",
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
    shy: "­",
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
    Sopf: "𝕊",
    sopf: "𝕤",
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
    Sscr: "𝒮",
    sscr: "𝓈",
    ssetmn: "∖",
    ssmile: "⌣",
    sstarf: "⋆",
    Star: "⋆",
    star: "☆",
    starf: "★",
    straightepsilon: "ϵ",
    straightphi: "ϕ",
    strns: "¯",
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
    sup1: "¹",
    sup2: "²",
    sup3: "³",
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
    szlig: "ß",
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
    Tfr: "𝔗",
    tfr: "𝔱",
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
    THORN: "Þ",
    thorn: "þ",
    Tilde: "∼",
    tilde: "˜",
    TildeEqual: "≃",
    TildeFullEqual: "≅",
    TildeTilde: "≈",
    times: "×",
    timesb: "⊠",
    timesbar: "⨱",
    timesd: "⨰",
    tint: "∭",
    toea: "⤨",
    top: "⊤",
    topbot: "⌶",
    topcir: "⫱",
    Topf: "𝕋",
    topf: "𝕥",
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
    Tscr: "𝒯",
    tscr: "𝓉",
    TScy: "Ц",
    tscy: "ц",
    TSHcy: "Ћ",
    tshcy: "ћ",
    Tstrok: "Ŧ",
    tstrok: "ŧ",
    twixt: "≬",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    Uacute: "Ú",
    uacute: "ú",
    Uarr: "↟",
    uArr: "⇑",
    uarr: "↑",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    ubrcy: "ў",
    Ubreve: "Ŭ",
    ubreve: "ŭ",
    Ucirc: "Û",
    ucirc: "û",
    Ucy: "У",
    ucy: "у",
    udarr: "⇅",
    Udblac: "Ű",
    udblac: "ű",
    udhar: "⥮",
    ufisht: "⥾",
    Ufr: "𝔘",
    ufr: "𝔲",
    Ugrave: "Ù",
    ugrave: "ù",
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
    uml: "¨",
    UnderBar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    UnionPlus: "⊎",
    Uogon: "Ų",
    uogon: "ų",
    Uopf: "𝕌",
    uopf: "𝕦",
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
    Uscr: "𝒰",
    uscr: "𝓊",
    utdot: "⋰",
    Utilde: "Ũ",
    utilde: "ũ",
    utri: "▵",
    utrif: "▴",
    uuarr: "⇈",
    Uuml: "Ü",
    uuml: "ü",
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
    Vfr: "𝔙",
    vfr: "𝔳",
    vltri: "⊲",
    vnsub: "⊂⃒",
    vnsup: "⊃⃒",
    Vopf: "𝕍",
    vopf: "𝕧",
    vprop: "∝",
    vrtri: "⊳",
    Vscr: "𝒱",
    vscr: "𝓋",
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
    Wfr: "𝔚",
    wfr: "𝔴",
    Wopf: "𝕎",
    wopf: "𝕨",
    wp: "℘",
    wr: "≀",
    wreath: "≀",
    Wscr: "𝒲",
    wscr: "𝓌",
    xcap: "⋂",
    xcirc: "◯",
    xcup: "⋃",
    xdtri: "▽",
    Xfr: "𝔛",
    xfr: "𝔵",
    xhArr: "⟺",
    xharr: "⟷",
    Xi: "Ξ",
    xi: "ξ",
    xlArr: "⟸",
    xlarr: "⟵",
    xmap: "⟼",
    xnis: "⋻",
    xodot: "⨀",
    Xopf: "𝕏",
    xopf: "𝕩",
    xoplus: "⨁",
    xotime: "⨂",
    xrArr: "⟹",
    xrarr: "⟶",
    Xscr: "𝒳",
    xscr: "𝓍",
    xsqcup: "⨆",
    xuplus: "⨄",
    xutri: "△",
    xvee: "⋁",
    xwedge: "⋀",
    Yacute: "Ý",
    yacute: "ý",
    YAcy: "Я",
    yacy: "я",
    Ycirc: "Ŷ",
    ycirc: "ŷ",
    Ycy: "Ы",
    ycy: "ы",
    yen: "¥",
    Yfr: "𝔜",
    yfr: "𝔶",
    YIcy: "Ї",
    yicy: "ї",
    Yopf: "𝕐",
    yopf: "𝕪",
    Yscr: "𝒴",
    yscr: "𝓎",
    YUcy: "Ю",
    yucy: "ю",
    Yuml: "Ÿ",
    yuml: "ÿ",
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
    zfr: "𝔷",
    ZHcy: "Ж",
    zhcy: "ж",
    zigrarr: "⇝",
    Zopf: "ℤ",
    zopf: "𝕫",
    Zscr: "𝒵",
    zscr: "𝓏",
    zwj: "‍",
    zwnj: "‌"
  }), e.entityMap = e.HTML_ENTITIES;
})(vd);
var xo = {}, Xn = St.NAMESPACE, Ya = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, xs = new RegExp("[\\-\\.0-9" + Ya.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), _s = new RegExp("^" + Ya.source + xs.source + "*(?::" + Ya.source + xs.source + "*)?$"), Sn = 0, kt = 1, cn = 2, Bn = 3, sn = 4, un = 5, kn = 6, dr = 7;
function mn(e, t) {
  this.message = e, this.locator = t, Error.captureStackTrace && Error.captureStackTrace(this, mn);
}
mn.prototype = new Error();
mn.prototype.name = mn.name;
function xd() {
}
xd.prototype = {
  parse: function(e, t, n) {
    var r = this.domBuilder;
    r.startDocument(), _d(t, t = {}), Cg(
      e,
      t,
      n,
      r,
      this.errorHandler
    ), r.endDocument();
  }
};
function Cg(e, t, n, r, i) {
  function a(S) {
    if (S > 65535) {
      S -= 65536;
      var R = 55296 + (S >> 10), N = 56320 + (S & 1023);
      return String.fromCharCode(R, N);
    } else
      return String.fromCharCode(S);
  }
  function c(S) {
    var R = S.slice(1, -1);
    return Object.hasOwnProperty.call(n, R) ? n[R] : R.charAt(0) === "#" ? a(parseInt(R.substr(1).replace("x", "0x"))) : (i.error("entity not found:" + S), S);
  }
  function o(S) {
    if (S > d) {
      var R = e.substring(d, S).replace(/&#?\w+;/g, c);
      y && s(d), r.characters(R, 0, S - d), d = S;
    }
  }
  function s(S, R) {
    for (; S >= f && (R = p.exec(e)); )
      u = R.index, f = u + R[0].length, y.lineNumber++;
    y.columnNumber = S - u + 1;
  }
  for (var u = 0, f = 0, p = /.*(?:\r\n?|\n)|.*$/g, y = r.locator, m = [{ currentNSMap: t }], b = {}, d = 0; ; ) {
    try {
      var l = e.indexOf("<", d);
      if (l < 0) {
        if (!e.substr(d).match(/^\s*$/)) {
          var g = r.doc, h = g.createTextNode(e.substr(d));
          g.appendChild(h), r.currentElement = h;
        }
        return;
      }
      switch (l > d && o(l), e.charAt(l + 1)) {
        case "/":
          var oe = e.indexOf(">", l + 3), D = e.substring(l + 2, oe).replace(/[ \t\n\r]+$/g, ""), w = m.pop();
          oe < 0 ? (D = e.substring(l + 2).replace(/[\s<].*/, ""), i.error("end tag name: " + D + " is not complete:" + w.tagName), oe = l + 1 + D.length) : D.match(/\s</) && (D = D.replace(/[\s<].*/, ""), i.error("end tag name: " + D + " maybe not complete"), oe = l + 1 + D.length);
          var U = w.localNSMap, E = w.tagName == D, F = E || w.tagName && w.tagName.toLowerCase() == D.toLowerCase();
          if (F) {
            if (r.endElement(w.uri, w.localName, D), U)
              for (var j in U)
                Object.prototype.hasOwnProperty.call(U, j) && r.endPrefixMapping(j);
            E || i.fatalError("end tag name: " + D + " is not match the current start tagName:" + w.tagName);
          } else
            m.push(w);
          oe++;
          break;
        case "?":
          y && s(l), oe = Wg(e, l, r);
          break;
        case "!":
          y && s(l), oe = kg(e, l, r, i);
          break;
        default:
          y && s(l);
          var q = new Ud(), Y = m[m.length - 1].currentNSMap, oe = Fg(e, l, q, Y, c, i), T = q.length;
          if (!q.closed && Bg(e, oe, q.tagName, b) && (q.closed = !0, n.nbsp || i.warning("unclosed xml attribute")), y && T) {
            for (var P = Us(y, {}), _ = 0; _ < T; _++) {
              var Q = q[_];
              s(Q.offset), Q.locator = Us(y, {});
            }
            r.locator = P, ws(q, r, Y) && m.push(q), r.locator = y;
          } else
            ws(q, r, Y) && m.push(q);
          Xn.isHTML(q.uri) && !q.closed ? oe = Sg(e, oe, q.tagName, c, r) : oe++;
      }
    } catch (S) {
      if (S instanceof mn)
        throw S;
      i.error("element parse error: " + S), oe = -1;
    }
    oe > d ? d = oe : o(Math.max(l, d) + 1);
  }
}
function Us(e, t) {
  return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
}
function Fg(e, t, n, r, i, a) {
  function c(y, m, b) {
    n.attributeNames.hasOwnProperty(y) && a.fatalError("Attribute " + y + " redefined"), n.addValue(
      y,
      // @see https://www.w3.org/TR/xml/#AVNormalize
      // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
      // - recursive replacement of (DTD) entity references
      // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
      m.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, i),
      b
    );
  }
  for (var o, s, u = ++t, f = Sn; ; ) {
    var p = e.charAt(u);
    switch (p) {
      case "=":
        if (f === kt)
          o = e.slice(t, u), f = Bn;
        else if (f === cn)
          f = Bn;
        else
          throw new Error("attribute equal must after attrName");
        break;
      case "'":
      case '"':
        if (f === Bn || f === kt)
          if (f === kt && (a.warning('attribute value must after "="'), o = e.slice(t, u)), t = u + 1, u = e.indexOf(p, t), u > 0)
            s = e.slice(t, u), c(o, s, t - 1), f = un;
          else
            throw new Error("attribute value no end '" + p + "' match");
        else if (f == sn)
          s = e.slice(t, u), c(o, s, t), a.warning('attribute "' + o + '" missed start quot(' + p + ")!!"), t = u + 1, f = un;
        else
          throw new Error('attribute value must after "="');
        break;
      case "/":
        switch (f) {
          case Sn:
            n.setTagName(e.slice(t, u));
          case un:
          case kn:
          case dr:
            f = dr, n.closed = !0;
          case sn:
          case kt:
            break;
          case cn:
            n.closed = !0;
            break;
          default:
            throw new Error("attribute invalid close char('/')");
        }
        break;
      case "":
        return a.error("unexpected end of input"), f == Sn && n.setTagName(e.slice(t, u)), u;
      case ">":
        switch (f) {
          case Sn:
            n.setTagName(e.slice(t, u));
          case un:
          case kn:
          case dr:
            break;
          case sn:
          case kt:
            s = e.slice(t, u), s.slice(-1) === "/" && (n.closed = !0, s = s.slice(0, -1));
          case cn:
            f === cn && (s = o), f == sn ? (a.warning('attribute "' + s + '" missed quot(")!'), c(o, s, t)) : ((!Xn.isHTML(r[""]) || !s.match(/^(?:disabled|checked|selected)$/i)) && a.warning('attribute "' + s + '" missed value!! "' + s + '" instead!!'), c(s, s, t));
            break;
          case Bn:
            throw new Error("attribute value missed!!");
        }
        return u;
      case "":
        p = " ";
      default:
        if (p <= " ")
          switch (f) {
            case Sn:
              n.setTagName(e.slice(t, u)), f = kn;
              break;
            case kt:
              o = e.slice(t, u), f = cn;
              break;
            case sn:
              var s = e.slice(t, u);
              a.warning('attribute "' + s + '" missed quot(")!!'), c(o, s, t);
            case un:
              f = kn;
              break;
          }
        else
          switch (f) {
            case cn:
              n.tagName, (!Xn.isHTML(r[""]) || !o.match(/^(?:disabled|checked|selected)$/i)) && a.warning('attribute "' + o + '" missed value!! "' + o + '" instead2!!'), c(o, o, t), t = u, f = kt;
              break;
            case un:
              a.warning('attribute space is required"' + o + '"!!');
            case kn:
              f = kt, t = u;
              break;
            case Bn:
              f = sn, t = u;
              break;
            case dr:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
    }
    u++;
  }
}
function ws(e, t, n) {
  for (var r = e.tagName, i = null, p = e.length; p--; ) {
    var a = e[p], c = a.qName, o = a.value, y = c.indexOf(":");
    if (y > 0)
      var s = a.prefix = c.slice(0, y), u = c.slice(y + 1), f = s === "xmlns" && u;
    else
      u = c, s = null, f = c === "xmlns" && "";
    a.localName = u, f !== !1 && (i == null && (i = {}, _d(n, n = {})), n[f] = i[f] = o, a.uri = Xn.XMLNS, t.startPrefixMapping(f, o));
  }
  for (var p = e.length; p--; ) {
    a = e[p];
    var s = a.prefix;
    s && (s === "xml" && (a.uri = Xn.XML), s !== "xmlns" && (a.uri = n[s || ""]));
  }
  var y = r.indexOf(":");
  y > 0 ? (s = e.prefix = r.slice(0, y), u = e.localName = r.slice(y + 1)) : (s = null, u = e.localName = r);
  var m = e.uri = n[s || ""];
  if (t.startElement(m, u, r, e), e.closed) {
    if (t.endElement(m, u, r), i)
      for (s in i)
        Object.prototype.hasOwnProperty.call(i, s) && t.endPrefixMapping(s);
  } else
    return e.currentNSMap = n, e.localNSMap = i, !0;
}
function Sg(e, t, n, r, i) {
  if (/^(?:script|textarea)$/i.test(n)) {
    var a = e.indexOf("</" + n + ">", t), c = e.substring(t + 1, a);
    if (/[&<]/.test(c))
      return /^script$/i.test(n) ? (i.characters(c, 0, c.length), a) : (c = c.replace(/&#?\w+;/g, r), i.characters(c, 0, c.length), a);
  }
  return t + 1;
}
function Bg(e, t, n, r) {
  var i = r[n];
  return i == null && (i = e.lastIndexOf("</" + n + ">"), i < t && (i = e.lastIndexOf("</" + n)), r[n] = i), i < t;
}
function _d(e, t) {
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
}
function kg(e, t, n, r) {
  var i = e.charAt(t + 2);
  switch (i) {
    case "-":
      if (e.charAt(t + 3) === "-") {
        var a = e.indexOf("-->", t + 4);
        return a > t ? (n.comment(e, t + 4, a - t - 4), a + 3) : (r.error("Unclosed comment"), -1);
      } else
        return -1;
    default:
      if (e.substr(t + 3, 6) == "CDATA[") {
        var a = e.indexOf("]]>", t + 9);
        return n.startCDATA(), n.characters(e, t + 9, a - t - 9), n.endCDATA(), a + 3;
      }
      var c = Ng(e, t), o = c.length;
      if (o > 1 && /!doctype/i.test(c[0][0])) {
        var s = c[1][0], u = !1, f = !1;
        o > 3 && (/^public$/i.test(c[2][0]) ? (u = c[3][0], f = o > 4 && c[4][0]) : /^system$/i.test(c[2][0]) && (f = c[3][0]));
        var p = c[o - 1];
        return n.startDTD(s, u, f), n.endDTD(), p.index + p[0].length;
      }
  }
  return -1;
}
function Wg(e, t, n) {
  var r = e.indexOf("?>", t);
  if (r) {
    var i = e.substring(t, r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
    return i ? (i[0].length, n.processingInstruction(i[1], i[2]), r + 2) : -1;
  }
  return -1;
}
function Ud() {
  this.attributeNames = {};
}
Ud.prototype = {
  setTagName: function(e) {
    if (!_s.test(e))
      throw new Error("invalid tagName:" + e);
    this.tagName = e;
  },
  addValue: function(e, t, n) {
    if (!_s.test(e))
      throw new Error("invalid attribute:" + e);
    this.attributeNames[e] = this.length, this[this.length++] = { qName: e, value: t, offset: n };
  },
  length: 0,
  getLocalName: function(e) {
    return this[e].localName;
  },
  getLocator: function(e) {
    return this[e].locator;
  },
  getQName: function(e) {
    return this[e].qName;
  },
  getURI: function(e) {
    return this[e].uri;
  },
  getValue: function(e) {
    return this[e].value;
  }
  //	,getIndex:function(uri, localName)){
  //		if(localName){
  //
  //		}else{
  //			var qName = uri
  //		}
  //	},
  //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
  //	getType:function(uri,localName){}
  //	getType:function(i){},
};
function Ng(e, t) {
  var n, r = [], i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  for (i.lastIndex = t, i.exec(e); n = i.exec(e); )
    if (r.push(n), n[1])
      return r;
}
xo.XMLReader = xd;
xo.ParseError = mn;
var Rg = St, Og = yt, Ts = vd, wd = xo, Ig = Og.DOMImplementation, Es = Rg.NAMESPACE, Lg = wd.ParseError, Mg = wd.XMLReader;
function Td(e) {
  return e.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
}
function Ed(e) {
  this.options = e || { locator: {} };
}
Ed.prototype.parseFromString = function(e, t) {
  var n = this.options, r = new Mg(), i = n.domBuilder || new er(), a = n.errorHandler, c = n.locator, o = n.xmlns || {}, s = /\/x?html?$/.test(t), u = s ? Ts.HTML_ENTITIES : Ts.XML_ENTITIES;
  c && i.setDocumentLocator(c), r.errorHandler = jg(a, i, c), r.domBuilder = n.domBuilder || i, s && (o[""] = Es.HTML), o.xml = o.xml || Es.XML;
  var f = n.normalizeLineEndings || Td;
  return e && typeof e == "string" ? r.parse(
    f(e),
    o,
    u
  ) : r.errorHandler.error("invalid doc source"), i.doc;
};
function jg(e, t, n) {
  if (!e) {
    if (t instanceof er)
      return t;
    e = t;
  }
  var r = {}, i = e instanceof Function;
  n = n || {};
  function a(c) {
    var o = e[c];
    !o && i && (o = e.length == 2 ? function(s) {
      e(c, s);
    } : e), r[c] = o && function(s) {
      o("[xmldom " + c + "]	" + s + Ka(n));
    } || function() {
    };
  }
  return a("warning"), a("error"), a("fatalError"), r;
}
function er() {
  this.cdata = !1;
}
function dn(e, t) {
  t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber;
}
er.prototype = {
  startDocument: function() {
    this.doc = new Ig().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
  },
  startElement: function(e, t, n, r) {
    var i = this.doc, a = i.createElementNS(e, n || t), c = r.length;
    lr(this, a), this.currentElement = a, this.locator && dn(this.locator, a);
    for (var o = 0; o < c; o++) {
      var e = r.getURI(o), s = r.getValue(o), n = r.getQName(o), u = i.createAttributeNS(e, n);
      this.locator && dn(r.getLocator(o), u), u.value = u.nodeValue = s, a.setAttributeNode(u);
    }
  },
  endElement: function(e, t, n) {
    var r = this.currentElement;
    r.tagName, this.currentElement = r.parentNode;
  },
  startPrefixMapping: function(e, t) {
  },
  endPrefixMapping: function(e) {
  },
  processingInstruction: function(e, t) {
    var n = this.doc.createProcessingInstruction(e, t);
    this.locator && dn(this.locator, n), lr(this, n);
  },
  ignorableWhitespace: function(e, t, n) {
  },
  characters: function(e, t, n) {
    if (e = As.apply(this, arguments), e) {
      if (this.cdata)
        var r = this.doc.createCDATASection(e);
      else
        var r = this.doc.createTextNode(e);
      this.currentElement ? this.currentElement.appendChild(r) : /^\s*$/.test(e) && this.doc.appendChild(r), this.locator && dn(this.locator, r);
    }
  },
  skippedEntity: function(e) {
  },
  endDocument: function() {
    this.doc.normalize();
  },
  setDocumentLocator: function(e) {
    (this.locator = e) && (e.lineNumber = 0);
  },
  //LexicalHandler
  comment: function(e, t, n) {
    e = As.apply(this, arguments);
    var r = this.doc.createComment(e);
    this.locator && dn(this.locator, r), lr(this, r);
  },
  startCDATA: function() {
    this.cdata = !0;
  },
  endCDATA: function() {
    this.cdata = !1;
  },
  startDTD: function(e, t, n) {
    var r = this.doc.implementation;
    if (r && r.createDocumentType) {
      var i = r.createDocumentType(e, t, n);
      this.locator && dn(this.locator, i), lr(this, i), this.doc.doctype = i;
    }
  },
  /**
   * @see org.xml.sax.ErrorHandler
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
   */
  warning: function(e) {
    console.warn("[xmldom warning]	" + e, Ka(this.locator));
  },
  error: function(e) {
    console.error("[xmldom error]	" + e, Ka(this.locator));
  },
  fatalError: function(e) {
    throw new Lg(e, this.locator);
  }
};
function Ka(e) {
  if (e)
    return `
@` + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
}
function As(e, t, n) {
  return typeof e == "string" ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e, t, n) + "" : e;
}
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(e) {
  er.prototype[e] = function() {
    return null;
  };
});
function lr(e, t) {
  e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t);
}
si.__DOMHandler = er;
si.normalizeLineEndings = Td;
si.DOMParser = Ed;
var Ad = yt;
ai.DOMImplementation = Ad.DOMImplementation;
ai.XMLSerializer = Ad.XMLSerializer;
ai.DOMParser = si.DOMParser;
var Pg = ai, qg = yt;
function zg(e) {
  var t = null, n = new Pg.DOMParser({
    errorHandler: function(i, a) {
      t = { level: i, message: a };
    }
  }), r = n.parseFromString(e);
  if (t === null)
    return r;
  throw new Error(t.level + ": " + t.message);
}
lo.parseFromString = zg;
lo.Node = qg.Node;
var Ba = Le, Cs = We, Cd = lo, Fd = Yn, Xg = Fd.Element;
Ku.readString = Vg;
var Fs = Cd.Node;
function Vg(e, t) {
  t = t || {};
  try {
    var n = Cd.parseFromString(e, "text/xml");
  } catch (c) {
    return Ba.reject(c);
  }
  if (n.documentElement.tagName === "parsererror")
    return Ba.resolve(new Error(n.documentElement.textContent));
  function r(c) {
    switch (c.nodeType) {
      case Fs.ELEMENT_NODE:
        return i(c);
      case Fs.TEXT_NODE:
        return Fd.text(c.nodeValue);
    }
  }
  function i(c) {
    var o = a(c), s = [];
    Cs.forEach(c.childNodes, function(f) {
      var p = r(f);
      p && s.push(p);
    });
    var u = {};
    return Cs.forEach(c.attributes, function(f) {
      u[a(f)] = f.value;
    }), new Xg(o, u, s);
  }
  function a(c) {
    if (c.namespaceURI) {
      var o = t[c.namespaceURI], s;
      return o ? s = o + ":" : s = "{" + c.namespaceURI + "}", s + c.localName;
    } else
      return c.localName;
  }
  return Ba.resolve(r(n.documentElement));
}
var Sd = {}, On = {}, _t = {}, Ss;
function jt() {
  return Ss || (Ss = 1, function() {
    var e, t, n, r, i, a, c, o = [].slice, s = {}.hasOwnProperty;
    e = function() {
      var u, f, p, y, m, b;
      if (b = arguments[0], m = 2 <= arguments.length ? o.call(arguments, 1) : [], i(Object.assign))
        Object.assign.apply(null, arguments);
      else
        for (u = 0, p = m.length; u < p; u++)
          if (y = m[u], y != null)
            for (f in y)
              s.call(y, f) && (b[f] = y[f]);
      return b;
    }, i = function(u) {
      return !!u && Object.prototype.toString.call(u) === "[object Function]";
    }, a = function(u) {
      var f;
      return !!u && ((f = typeof u) == "function" || f === "object");
    }, n = function(u) {
      return i(Array.isArray) ? Array.isArray(u) : Object.prototype.toString.call(u) === "[object Array]";
    }, r = function(u) {
      var f;
      if (n(u))
        return !u.length;
      for (f in u)
        if (s.call(u, f))
          return !1;
      return !0;
    }, c = function(u) {
      var f, p;
      return a(u) && (p = Object.getPrototypeOf(u)) && (f = p.constructor) && typeof f == "function" && f instanceof f && Function.prototype.toString.call(f) === Function.prototype.toString.call(Object);
    }, t = function(u) {
      return i(u.valueOf) ? u.valueOf() : u;
    }, _t.assign = e, _t.isFunction = i, _t.isObject = a, _t.isArray = n, _t.isEmpty = r, _t.isPlainObject = c, _t.getValue = t;
  }.call(we)), _t;
}
var Cr = {}, Hg = {
  get exports() {
    return Cr;
  },
  set exports(e) {
    Cr = e;
  }
}, Fr = {}, $g = {
  get exports() {
    return Fr;
  },
  set exports(e) {
    Fr = e;
  }
}, Sr = {}, Zg = {
  get exports() {
    return Sr;
  },
  set exports(e) {
    Sr = e;
  }
}, Br = {}, Gg = {
  get exports() {
    return Br;
  },
  set exports(e) {
    Br = e;
  }
}, Bs;
function Bd() {
  return Bs || (Bs = 1, function() {
    Gg.exports = function() {
      function e(t, n, r) {
        if (this.options = t.options, this.stringify = t.stringify, this.parent = t, n == null)
          throw new Error("Missing attribute name. " + this.debugInfo(n));
        if (r == null)
          throw new Error("Missing attribute value. " + this.debugInfo(n));
        this.name = this.stringify.attName(n), this.value = this.stringify.attValue(r);
      }
      return e.prototype.clone = function() {
        return Object.create(this);
      }, e.prototype.toString = function(t) {
        return this.options.writer.set(t).attribute(this);
      }, e.prototype.debugInfo = function(t) {
        return t = t || this.name, t == null ? "parent: <" + this.parent.name + ">" : "attribute: {" + t + "}, parent: <" + this.parent.name + ">";
      }, e;
    }();
  }.call(we)), Br;
}
var ks;
function ui() {
  return ks || (ks = 1, function() {
    var e, t, n, r, i, a, c = function(s, u) {
      for (var f in u)
        o.call(u, f) && (s[f] = u[f]);
      function p() {
        this.constructor = s;
      }
      return p.prototype = u.prototype, s.prototype = new p(), s.__super__ = u.prototype, s;
    }, o = {}.hasOwnProperty;
    a = jt(), i = a.isObject, r = a.isFunction, n = a.getValue, t = Je(), e = Bd(), Zg.exports = function(s) {
      c(u, s);
      function u(f, p, y) {
        if (u.__super__.constructor.call(this, f), p == null)
          throw new Error("Missing element name. " + this.debugInfo());
        this.name = this.stringify.eleName(p), this.attributes = {}, y != null && this.attribute(y), f.isDocument && (this.isRoot = !0, this.documentObject = f, f.rootObject = this);
      }
      return u.prototype.clone = function() {
        var f, p, y, m;
        y = Object.create(this), y.isRoot && (y.documentObject = null), y.attributes = {}, m = this.attributes;
        for (p in m)
          o.call(m, p) && (f = m[p], y.attributes[p] = f.clone());
        return y.children = [], this.children.forEach(function(b) {
          var d;
          return d = b.clone(), d.parent = y, y.children.push(d);
        }), y;
      }, u.prototype.attribute = function(f, p) {
        var y, m;
        if (f != null && (f = n(f)), i(f))
          for (y in f)
            o.call(f, y) && (m = f[y], this.attribute(y, m));
        else
          r(p) && (p = p.apply()), (!this.options.skipNullAttributes || p != null) && (this.attributes[f] = new e(this, f, p));
        return this;
      }, u.prototype.removeAttribute = function(f) {
        var p, y, m;
        if (f == null)
          throw new Error("Missing attribute name. " + this.debugInfo());
        if (f = n(f), Array.isArray(f))
          for (y = 0, m = f.length; y < m; y++)
            p = f[y], delete this.attributes[p];
        else
          delete this.attributes[f];
        return this;
      }, u.prototype.toString = function(f) {
        return this.options.writer.set(f).element(this);
      }, u.prototype.att = function(f, p) {
        return this.attribute(f, p);
      }, u.prototype.a = function(f, p) {
        return this.attribute(f, p);
      }, u;
    }(t);
  }.call(we)), Sr;
}
var kr = {}, Yg = {
  get exports() {
    return kr;
  },
  set exports(e) {
    kr = e;
  }
}, Ws;
function di() {
  return Ws || (Ws = 1, function() {
    var e, t = function(r, i) {
      for (var a in i)
        n.call(i, a) && (r[a] = i[a]);
      function c() {
        this.constructor = r;
      }
      return c.prototype = i.prototype, r.prototype = new c(), r.__super__ = i.prototype, r;
    }, n = {}.hasOwnProperty;
    e = Je(), Yg.exports = function(r) {
      t(i, r);
      function i(a, c) {
        if (i.__super__.constructor.call(this, a), c == null)
          throw new Error("Missing CDATA text. " + this.debugInfo());
        this.text = this.stringify.cdata(c);
      }
      return i.prototype.clone = function() {
        return Object.create(this);
      }, i.prototype.toString = function(a) {
        return this.options.writer.set(a).cdata(this);
      }, i;
    }(e);
  }.call(we)), kr;
}
var Wr = {}, Kg = {
  get exports() {
    return Wr;
  },
  set exports(e) {
    Wr = e;
  }
}, Ns;
function li() {
  return Ns || (Ns = 1, function() {
    var e, t = function(r, i) {
      for (var a in i)
        n.call(i, a) && (r[a] = i[a]);
      function c() {
        this.constructor = r;
      }
      return c.prototype = i.prototype, r.prototype = new c(), r.__super__ = i.prototype, r;
    }, n = {}.hasOwnProperty;
    e = Je(), Kg.exports = function(r) {
      t(i, r);
      function i(a, c) {
        if (i.__super__.constructor.call(this, a), c == null)
          throw new Error("Missing comment text. " + this.debugInfo());
        this.text = this.stringify.comment(c);
      }
      return i.prototype.clone = function() {
        return Object.create(this);
      }, i.prototype.toString = function(a) {
        return this.options.writer.set(a).comment(this);
      }, i;
    }(e);
  }.call(we)), Wr;
}
var Nr = {}, Qg = {
  get exports() {
    return Nr;
  },
  set exports(e) {
    Nr = e;
  }
}, Rs;
function fi() {
  return Rs || (Rs = 1, function() {
    var e, t, n = function(i, a) {
      for (var c in a)
        r.call(a, c) && (i[c] = a[c]);
      function o() {
        this.constructor = i;
      }
      return o.prototype = a.prototype, i.prototype = new o(), i.__super__ = a.prototype, i;
    }, r = {}.hasOwnProperty;
    t = jt().isObject, e = Je(), Qg.exports = function(i) {
      n(a, i);
      function a(c, o, s, u) {
        var f;
        a.__super__.constructor.call(this, c), t(o) && (f = o, o = f.version, s = f.encoding, u = f.standalone), o || (o = "1.0"), this.version = this.stringify.xmlVersion(o), s != null && (this.encoding = this.stringify.xmlEncoding(s)), u != null && (this.standalone = this.stringify.xmlStandalone(u));
      }
      return a.prototype.toString = function(c) {
        return this.options.writer.set(c).declaration(this);
      }, a;
    }(e);
  }.call(we)), Nr;
}
var Rr = {}, Jg = {
  get exports() {
    return Rr;
  },
  set exports(e) {
    Rr = e;
  }
}, Or = {}, e2 = {
  get exports() {
    return Or;
  },
  set exports(e) {
    Or = e;
  }
}, Os;
function hi() {
  return Os || (Os = 1, function() {
    var e, t = function(r, i) {
      for (var a in i)
        n.call(i, a) && (r[a] = i[a]);
      function c() {
        this.constructor = r;
      }
      return c.prototype = i.prototype, r.prototype = new c(), r.__super__ = i.prototype, r;
    }, n = {}.hasOwnProperty;
    e = Je(), e2.exports = function(r) {
      t(i, r);
      function i(a, c, o, s, u, f) {
        if (i.__super__.constructor.call(this, a), c == null)
          throw new Error("Missing DTD element name. " + this.debugInfo());
        if (o == null)
          throw new Error("Missing DTD attribute name. " + this.debugInfo(c));
        if (!s)
          throw new Error("Missing DTD attribute type. " + this.debugInfo(c));
        if (!u)
          throw new Error("Missing DTD attribute default. " + this.debugInfo(c));
        if (u.indexOf("#") !== 0 && (u = "#" + u), !u.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))
          throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(c));
        if (f && !u.match(/^(#FIXED|#DEFAULT)$/))
          throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(c));
        this.elementName = this.stringify.eleName(c), this.attributeName = this.stringify.attName(o), this.attributeType = this.stringify.dtdAttType(s), this.defaultValue = this.stringify.dtdAttDefault(f), this.defaultValueType = u;
      }
      return i.prototype.toString = function(a) {
        return this.options.writer.set(a).dtdAttList(this);
      }, i;
    }(e);
  }.call(we)), Or;
}
var Ir = {}, t2 = {
  get exports() {
    return Ir;
  },
  set exports(e) {
    Ir = e;
  }
}, Is;
function pi() {
  return Is || (Is = 1, function() {
    var e, t, n = function(i, a) {
      for (var c in a)
        r.call(a, c) && (i[c] = a[c]);
      function o() {
        this.constructor = i;
      }
      return o.prototype = a.prototype, i.prototype = new o(), i.__super__ = a.prototype, i;
    }, r = {}.hasOwnProperty;
    t = jt().isObject, e = Je(), t2.exports = function(i) {
      n(a, i);
      function a(c, o, s, u) {
        if (a.__super__.constructor.call(this, c), s == null)
          throw new Error("Missing DTD entity name. " + this.debugInfo(s));
        if (u == null)
          throw new Error("Missing DTD entity value. " + this.debugInfo(s));
        if (this.pe = !!o, this.name = this.stringify.eleName(s), !t(u))
          this.value = this.stringify.dtdEntityValue(u);
        else {
          if (!u.pubID && !u.sysID)
            throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(s));
          if (u.pubID && !u.sysID)
            throw new Error("System identifier is required for a public external entity. " + this.debugInfo(s));
          if (u.pubID != null && (this.pubID = this.stringify.dtdPubID(u.pubID)), u.sysID != null && (this.sysID = this.stringify.dtdSysID(u.sysID)), u.nData != null && (this.nData = this.stringify.dtdNData(u.nData)), this.pe && this.nData)
            throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(s));
        }
      }
      return a.prototype.toString = function(c) {
        return this.options.writer.set(c).dtdEntity(this);
      }, a;
    }(e);
  }.call(we)), Ir;
}
var Lr = {}, n2 = {
  get exports() {
    return Lr;
  },
  set exports(e) {
    Lr = e;
  }
}, Ls;
function gi() {
  return Ls || (Ls = 1, function() {
    var e, t = function(r, i) {
      for (var a in i)
        n.call(i, a) && (r[a] = i[a]);
      function c() {
        this.constructor = r;
      }
      return c.prototype = i.prototype, r.prototype = new c(), r.__super__ = i.prototype, r;
    }, n = {}.hasOwnProperty;
    e = Je(), n2.exports = function(r) {
      t(i, r);
      function i(a, c, o) {
        if (i.__super__.constructor.call(this, a), c == null)
          throw new Error("Missing DTD element name. " + this.debugInfo());
        o || (o = "(#PCDATA)"), Array.isArray(o) && (o = "(" + o.join(",") + ")"), this.name = this.stringify.eleName(c), this.value = this.stringify.dtdElementValue(o);
      }
      return i.prototype.toString = function(a) {
        return this.options.writer.set(a).dtdElement(this);
      }, i;
    }(e);
  }.call(we)), Lr;
}
var Mr = {}, r2 = {
  get exports() {
    return Mr;
  },
  set exports(e) {
    Mr = e;
  }
}, Ms;
function mi() {
  return Ms || (Ms = 1, function() {
    var e, t = function(r, i) {
      for (var a in i)
        n.call(i, a) && (r[a] = i[a]);
      function c() {
        this.constructor = r;
      }
      return c.prototype = i.prototype, r.prototype = new c(), r.__super__ = i.prototype, r;
    }, n = {}.hasOwnProperty;
    e = Je(), r2.exports = function(r) {
      t(i, r);
      function i(a, c, o) {
        if (i.__super__.constructor.call(this, a), c == null)
          throw new Error("Missing DTD notation name. " + this.debugInfo(c));
        if (!o.pubID && !o.sysID)
          throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(c));
        this.name = this.stringify.eleName(c), o.pubID != null && (this.pubID = this.stringify.dtdPubID(o.pubID)), o.sysID != null && (this.sysID = this.stringify.dtdSysID(o.sysID));
      }
      return i.prototype.toString = function(a) {
        return this.options.writer.set(a).dtdNotation(this);
      }, i;
    }(e);
  }.call(we)), Mr;
}
var js;
function bi() {
  return js || (js = 1, function() {
    var e, t, n, r, i, a, c = function(s, u) {
      for (var f in u)
        o.call(u, f) && (s[f] = u[f]);
      function p() {
        this.constructor = s;
      }
      return p.prototype = u.prototype, s.prototype = new p(), s.__super__ = u.prototype, s;
    }, o = {}.hasOwnProperty;
    a = jt().isObject, i = Je(), e = hi(), n = pi(), t = gi(), r = mi(), Jg.exports = function(s) {
      c(u, s);
      function u(f, p, y) {
        var m, b;
        u.__super__.constructor.call(this, f), this.name = "!DOCTYPE", this.documentObject = f, a(p) && (m = p, p = m.pubID, y = m.sysID), y == null && (b = [p, y], y = b[0], p = b[1]), p != null && (this.pubID = this.stringify.dtdPubID(p)), y != null && (this.sysID = this.stringify.dtdSysID(y));
      }
      return u.prototype.element = function(f, p) {
        var y;
        return y = new t(this, f, p), this.children.push(y), this;
      }, u.prototype.attList = function(f, p, y, m, b) {
        var d;
        return d = new e(this, f, p, y, m, b), this.children.push(d), this;
      }, u.prototype.entity = function(f, p) {
        var y;
        return y = new n(this, !1, f, p), this.children.push(y), this;
      }, u.prototype.pEntity = function(f, p) {
        var y;
        return y = new n(this, !0, f, p), this.children.push(y), this;
      }, u.prototype.notation = function(f, p) {
        var y;
        return y = new r(this, f, p), this.children.push(y), this;
      }, u.prototype.toString = function(f) {
        return this.options.writer.set(f).docType(this);
      }, u.prototype.ele = function(f, p) {
        return this.element(f, p);
      }, u.prototype.att = function(f, p, y, m, b) {
        return this.attList(f, p, y, m, b);
      }, u.prototype.ent = function(f, p) {
        return this.entity(f, p);
      }, u.prototype.pent = function(f, p) {
        return this.pEntity(f, p);
      }, u.prototype.not = function(f, p) {
        return this.notation(f, p);
      }, u.prototype.up = function() {
        return this.root() || this.documentObject;
      }, u;
    }(i);
  }.call(we)), Rr;
}
var jr = {}, i2 = {
  get exports() {
    return jr;
  },
  set exports(e) {
    jr = e;
  }
}, Ps;
function yi() {
  return Ps || (Ps = 1, function() {
    var e, t = function(r, i) {
      for (var a in i)
        n.call(i, a) && (r[a] = i[a]);
      function c() {
        this.constructor = r;
      }
      return c.prototype = i.prototype, r.prototype = new c(), r.__super__ = i.prototype, r;
    }, n = {}.hasOwnProperty;
    e = Je(), i2.exports = function(r) {
      t(i, r);
      function i(a, c) {
        if (i.__super__.constructor.call(this, a), c == null)
          throw new Error("Missing raw text. " + this.debugInfo());
        this.value = this.stringify.raw(c);
      }
      return i.prototype.clone = function() {
        return Object.create(this);
      }, i.prototype.toString = function(a) {
        return this.options.writer.set(a).raw(this);
      }, i;
    }(e);
  }.call(we)), jr;
}
var Pr = {}, a2 = {
  get exports() {
    return Pr;
  },
  set exports(e) {
    Pr = e;
  }
}, qs;
function Di() {
  return qs || (qs = 1, function() {
    var e, t = function(r, i) {
      for (var a in i)
        n.call(i, a) && (r[a] = i[a]);
      function c() {
        this.constructor = r;
      }
      return c.prototype = i.prototype, r.prototype = new c(), r.__super__ = i.prototype, r;
    }, n = {}.hasOwnProperty;
    e = Je(), a2.exports = function(r) {
      t(i, r);
      function i(a, c) {
        if (i.__super__.constructor.call(this, a), c == null)
          throw new Error("Missing element text. " + this.debugInfo());
        this.value = this.stringify.eleText(c);
      }
      return i.prototype.clone = function() {
        return Object.create(this);
      }, i.prototype.toString = function(a) {
        return this.options.writer.set(a).text(this);
      }, i;
    }(e);
  }.call(we)), Pr;
}
var qr = {}, o2 = {
  get exports() {
    return qr;
  },
  set exports(e) {
    qr = e;
  }
}, zs;
function vi() {
  return zs || (zs = 1, function() {
    var e, t = function(r, i) {
      for (var a in i)
        n.call(i, a) && (r[a] = i[a]);
      function c() {
        this.constructor = r;
      }
      return c.prototype = i.prototype, r.prototype = new c(), r.__super__ = i.prototype, r;
    }, n = {}.hasOwnProperty;
    e = Je(), o2.exports = function(r) {
      t(i, r);
      function i(a, c, o) {
        if (i.__super__.constructor.call(this, a), c == null)
          throw new Error("Missing instruction target. " + this.debugInfo());
        this.target = this.stringify.insTarget(c), o && (this.value = this.stringify.insValue(o));
      }
      return i.prototype.clone = function() {
        return Object.create(this);
      }, i.prototype.toString = function(a) {
        return this.options.writer.set(a).processingInstruction(this);
      }, i;
    }(e);
  }.call(we)), qr;
}
var zr = {}, c2 = {
  get exports() {
    return zr;
  },
  set exports(e) {
    zr = e;
  }
}, Xs;
function _o() {
  return Xs || (Xs = 1, function() {
    var e, t = function(r, i) {
      for (var a in i)
        n.call(i, a) && (r[a] = i[a]);
      function c() {
        this.constructor = r;
      }
      return c.prototype = i.prototype, r.prototype = new c(), r.__super__ = i.prototype, r;
    }, n = {}.hasOwnProperty;
    e = Je(), c2.exports = function(r) {
      t(i, r);
      function i(a) {
        i.__super__.constructor.call(this, a), this.isDummy = !0;
      }
      return i.prototype.clone = function() {
        return Object.create(this);
      }, i.prototype.toString = function(a) {
        return "";
      }, i;
    }(e);
  }.call(we)), zr;
}
var Vs;
function Je() {
  return Vs || (Vs = 1, function() {
    var e, t, n, r, i, a, c, o, s, u, f, p, y, m, b = {}.hasOwnProperty;
    m = jt(), y = m.isObject, p = m.isFunction, f = m.isEmpty, u = m.getValue, a = null, e = null, t = null, n = null, r = null, o = null, s = null, c = null, i = null, $g.exports = function() {
      function d(l) {
        this.parent = l, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), this.children = [], a || (a = ui(), e = di(), t = li(), n = fi(), r = bi(), o = yi(), s = Di(), c = vi(), i = _o());
      }
      return d.prototype.element = function(l, g, h) {
        var D, w, U, E, F, j, q, Y, oe, T, P;
        if (j = null, g === null && h == null && (oe = [{}, null], g = oe[0], h = oe[1]), g == null && (g = {}), g = u(g), y(g) || (T = [g, h], h = T[0], g = T[1]), l != null && (l = u(l)), Array.isArray(l))
          for (U = 0, q = l.length; U < q; U++)
            w = l[U], j = this.element(w);
        else if (p(l))
          j = this.element(l.apply());
        else if (y(l)) {
          for (F in l)
            if (b.call(l, F))
              if (P = l[F], p(P) && (P = P.apply()), y(P) && f(P) && (P = null), !this.options.ignoreDecorators && this.stringify.convertAttKey && F.indexOf(this.stringify.convertAttKey) === 0)
                j = this.attribute(F.substr(this.stringify.convertAttKey.length), P);
              else if (!this.options.separateArrayItems && Array.isArray(P))
                for (E = 0, Y = P.length; E < Y; E++)
                  w = P[E], D = {}, D[F] = w, j = this.element(D);
              else
                y(P) ? (j = this.element(F), j.element(P)) : j = this.element(F, P);
        } else
          this.options.skipNullNodes && h === null ? j = this.dummy() : !this.options.ignoreDecorators && this.stringify.convertTextKey && l.indexOf(this.stringify.convertTextKey) === 0 ? j = this.text(h) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && l.indexOf(this.stringify.convertCDataKey) === 0 ? j = this.cdata(h) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && l.indexOf(this.stringify.convertCommentKey) === 0 ? j = this.comment(h) : !this.options.ignoreDecorators && this.stringify.convertRawKey && l.indexOf(this.stringify.convertRawKey) === 0 ? j = this.raw(h) : !this.options.ignoreDecorators && this.stringify.convertPIKey && l.indexOf(this.stringify.convertPIKey) === 0 ? j = this.instruction(l.substr(this.stringify.convertPIKey.length), h) : j = this.node(l, g, h);
        if (j == null)
          throw new Error("Could not create any elements with: " + l + ". " + this.debugInfo());
        return j;
      }, d.prototype.insertBefore = function(l, g, h) {
        var D, w, U;
        if (this.isRoot)
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(l));
        return w = this.parent.children.indexOf(this), U = this.parent.children.splice(w), D = this.parent.element(l, g, h), Array.prototype.push.apply(this.parent.children, U), D;
      }, d.prototype.insertAfter = function(l, g, h) {
        var D, w, U;
        if (this.isRoot)
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(l));
        return w = this.parent.children.indexOf(this), U = this.parent.children.splice(w + 1), D = this.parent.element(l, g, h), Array.prototype.push.apply(this.parent.children, U), D;
      }, d.prototype.remove = function() {
        var l;
        if (this.isRoot)
          throw new Error("Cannot remove the root element. " + this.debugInfo());
        return l = this.parent.children.indexOf(this), [].splice.apply(this.parent.children, [l, l - l + 1].concat([])), this.parent;
      }, d.prototype.node = function(l, g, h) {
        var D, w;
        return l != null && (l = u(l)), g || (g = {}), g = u(g), y(g) || (w = [g, h], h = w[0], g = w[1]), D = new a(this, l, g), h != null && D.text(h), this.children.push(D), D;
      }, d.prototype.text = function(l) {
        var g;
        return g = new s(this, l), this.children.push(g), this;
      }, d.prototype.cdata = function(l) {
        var g;
        return g = new e(this, l), this.children.push(g), this;
      }, d.prototype.comment = function(l) {
        var g;
        return g = new t(this, l), this.children.push(g), this;
      }, d.prototype.commentBefore = function(l) {
        var g, h;
        return g = this.parent.children.indexOf(this), h = this.parent.children.splice(g), this.parent.comment(l), Array.prototype.push.apply(this.parent.children, h), this;
      }, d.prototype.commentAfter = function(l) {
        var g, h;
        return g = this.parent.children.indexOf(this), h = this.parent.children.splice(g + 1), this.parent.comment(l), Array.prototype.push.apply(this.parent.children, h), this;
      }, d.prototype.raw = function(l) {
        var g;
        return g = new o(this, l), this.children.push(g), this;
      }, d.prototype.dummy = function() {
        var l;
        return l = new i(this), this.children.push(l), l;
      }, d.prototype.instruction = function(l, g) {
        var h, D, w, U, E;
        if (l != null && (l = u(l)), g != null && (g = u(g)), Array.isArray(l))
          for (U = 0, E = l.length; U < E; U++)
            h = l[U], this.instruction(h);
        else if (y(l))
          for (h in l)
            b.call(l, h) && (D = l[h], this.instruction(h, D));
        else
          p(g) && (g = g.apply()), w = new c(this, l, g), this.children.push(w);
        return this;
      }, d.prototype.instructionBefore = function(l, g) {
        var h, D;
        return h = this.parent.children.indexOf(this), D = this.parent.children.splice(h), this.parent.instruction(l, g), Array.prototype.push.apply(this.parent.children, D), this;
      }, d.prototype.instructionAfter = function(l, g) {
        var h, D;
        return h = this.parent.children.indexOf(this), D = this.parent.children.splice(h + 1), this.parent.instruction(l, g), Array.prototype.push.apply(this.parent.children, D), this;
      }, d.prototype.declaration = function(l, g, h) {
        var D, w;
        return D = this.document(), w = new n(D, l, g, h), D.children[0] instanceof n ? D.children[0] = w : D.children.unshift(w), D.root() || D;
      }, d.prototype.doctype = function(l, g) {
        var h, D, w, U, E, F, j, q, Y, oe;
        for (D = this.document(), w = new r(D, l, g), Y = D.children, U = E = 0, j = Y.length; E < j; U = ++E)
          if (h = Y[U], h instanceof r)
            return D.children[U] = w, w;
        for (oe = D.children, U = F = 0, q = oe.length; F < q; U = ++F)
          if (h = oe[U], h.isRoot)
            return D.children.splice(U, 0, w), w;
        return D.children.push(w), w;
      }, d.prototype.up = function() {
        if (this.isRoot)
          throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
        return this.parent;
      }, d.prototype.root = function() {
        var l;
        for (l = this; l; ) {
          if (l.isDocument)
            return l.rootObject;
          if (l.isRoot)
            return l;
          l = l.parent;
        }
      }, d.prototype.document = function() {
        var l;
        for (l = this; l; ) {
          if (l.isDocument)
            return l;
          l = l.parent;
        }
      }, d.prototype.end = function(l) {
        return this.document().end(l);
      }, d.prototype.prev = function() {
        var l;
        for (l = this.parent.children.indexOf(this); l > 0 && this.parent.children[l - 1].isDummy; )
          l = l - 1;
        if (l < 1)
          throw new Error("Already at the first node. " + this.debugInfo());
        return this.parent.children[l - 1];
      }, d.prototype.next = function() {
        var l;
        for (l = this.parent.children.indexOf(this); l < this.parent.children.length - 1 && this.parent.children[l + 1].isDummy; )
          l = l + 1;
        if (l === -1 || l === this.parent.children.length - 1)
          throw new Error("Already at the last node. " + this.debugInfo());
        return this.parent.children[l + 1];
      }, d.prototype.importDocument = function(l) {
        var g;
        return g = l.root().clone(), g.parent = this, g.isRoot = !1, this.children.push(g), this;
      }, d.prototype.debugInfo = function(l) {
        var g, h;
        return l = l || this.name, l == null && !((g = this.parent) != null && g.name) ? "" : l == null ? "parent: <" + this.parent.name + ">" : (h = this.parent) != null && h.name ? "node: <" + l + ">, parent: <" + this.parent.name + ">" : "node: <" + l + ">";
      }, d.prototype.ele = function(l, g, h) {
        return this.element(l, g, h);
      }, d.prototype.nod = function(l, g, h) {
        return this.node(l, g, h);
      }, d.prototype.txt = function(l) {
        return this.text(l);
      }, d.prototype.dat = function(l) {
        return this.cdata(l);
      }, d.prototype.com = function(l) {
        return this.comment(l);
      }, d.prototype.ins = function(l, g) {
        return this.instruction(l, g);
      }, d.prototype.doc = function() {
        return this.document();
      }, d.prototype.dec = function(l, g, h) {
        return this.declaration(l, g, h);
      }, d.prototype.dtd = function(l, g) {
        return this.doctype(l, g);
      }, d.prototype.e = function(l, g, h) {
        return this.element(l, g, h);
      }, d.prototype.n = function(l, g, h) {
        return this.node(l, g, h);
      }, d.prototype.t = function(l) {
        return this.text(l);
      }, d.prototype.d = function(l) {
        return this.cdata(l);
      }, d.prototype.c = function(l) {
        return this.comment(l);
      }, d.prototype.r = function(l) {
        return this.raw(l);
      }, d.prototype.i = function(l, g) {
        return this.instruction(l, g);
      }, d.prototype.u = function() {
        return this.up();
      }, d.prototype.importXMLBuilder = function(l) {
        return this.importDocument(l);
      }, d;
    }();
  }.call(we)), Fr;
}
var Xr = {}, s2 = {
  get exports() {
    return Xr;
  },
  set exports(e) {
    Xr = e;
  }
}, Hs;
function kd() {
  return Hs || (Hs = 1, function() {
    var e = function(n, r) {
      return function() {
        return n.apply(r, arguments);
      };
    }, t = {}.hasOwnProperty;
    s2.exports = function() {
      function n(r) {
        this.assertLegalChar = e(this.assertLegalChar, this);
        var i, a, c;
        r || (r = {}), this.noDoubleEncoding = r.noDoubleEncoding, a = r.stringify || {};
        for (i in a)
          t.call(a, i) && (c = a[i], this[i] = c);
      }
      return n.prototype.eleName = function(r) {
        return r = "" + r || "", this.assertLegalChar(r);
      }, n.prototype.eleText = function(r) {
        return r = "" + r || "", this.assertLegalChar(this.elEscape(r));
      }, n.prototype.cdata = function(r) {
        return r = "" + r || "", r = r.replace("]]>", "]]]]><![CDATA[>"), this.assertLegalChar(r);
      }, n.prototype.comment = function(r) {
        if (r = "" + r || "", r.match(/--/))
          throw new Error("Comment text cannot contain double-hypen: " + r);
        return this.assertLegalChar(r);
      }, n.prototype.raw = function(r) {
        return "" + r || "";
      }, n.prototype.attName = function(r) {
        return r = "" + r || "";
      }, n.prototype.attValue = function(r) {
        return r = "" + r || "", this.attEscape(r);
      }, n.prototype.insTarget = function(r) {
        return "" + r || "";
      }, n.prototype.insValue = function(r) {
        if (r = "" + r || "", r.match(/\?>/))
          throw new Error("Invalid processing instruction value: " + r);
        return r;
      }, n.prototype.xmlVersion = function(r) {
        if (r = "" + r || "", !r.match(/1\.[0-9]+/))
          throw new Error("Invalid version number: " + r);
        return r;
      }, n.prototype.xmlEncoding = function(r) {
        if (r = "" + r || "", !r.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/))
          throw new Error("Invalid encoding: " + r);
        return r;
      }, n.prototype.xmlStandalone = function(r) {
        return r ? "yes" : "no";
      }, n.prototype.dtdPubID = function(r) {
        return "" + r || "";
      }, n.prototype.dtdSysID = function(r) {
        return "" + r || "";
      }, n.prototype.dtdElementValue = function(r) {
        return "" + r || "";
      }, n.prototype.dtdAttType = function(r) {
        return "" + r || "";
      }, n.prototype.dtdAttDefault = function(r) {
        return r != null ? "" + r || "" : r;
      }, n.prototype.dtdEntityValue = function(r) {
        return "" + r || "";
      }, n.prototype.dtdNData = function(r) {
        return "" + r || "";
      }, n.prototype.convertAttKey = "@", n.prototype.convertPIKey = "?", n.prototype.convertTextKey = "#text", n.prototype.convertCDataKey = "#cdata", n.prototype.convertCommentKey = "#comment", n.prototype.convertRawKey = "#raw", n.prototype.assertLegalChar = function(r) {
        var i;
        if (i = r.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), i)
          throw new Error("Invalid character in string: " + r + " at index " + i.index);
        return r;
      }, n.prototype.elEscape = function(r) {
        var i;
        return i = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, r.replace(i, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
      }, n.prototype.attEscape = function(r) {
        var i;
        return i = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, r.replace(i, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
      }, n;
    }();
  }.call(we)), Xr;
}
var Vr = {}, u2 = {
  get exports() {
    return Vr;
  },
  set exports(e) {
    Vr = e;
  }
}, Hr = {}, d2 = {
  get exports() {
    return Hr;
  },
  set exports(e) {
    Hr = e;
  }
}, $s;
function Wd() {
  return $s || ($s = 1, function() {
    var e = {}.hasOwnProperty;
    d2.exports = function() {
      function t(n) {
        var r, i, a, c, o, s, u, f, p;
        n || (n = {}), this.pretty = n.pretty || !1, this.allowEmpty = (i = n.allowEmpty) != null ? i : !1, this.pretty ? (this.indent = (a = n.indent) != null ? a : "  ", this.newline = (c = n.newline) != null ? c : `
`, this.offset = (o = n.offset) != null ? o : 0, this.dontprettytextnodes = (s = n.dontprettytextnodes) != null ? s : 0) : (this.indent = "", this.newline = "", this.offset = 0, this.dontprettytextnodes = 0), this.spacebeforeslash = (u = n.spacebeforeslash) != null ? u : "", this.spacebeforeslash === !0 && (this.spacebeforeslash = " "), this.newlinedefault = this.newline, this.prettydefault = this.pretty, f = n.writer || {};
        for (r in f)
          e.call(f, r) && (p = f[r], this[r] = p);
      }
      return t.prototype.set = function(n) {
        var r, i, a;
        n || (n = {}), "pretty" in n && (this.pretty = n.pretty), "allowEmpty" in n && (this.allowEmpty = n.allowEmpty), this.pretty ? (this.indent = "indent" in n ? n.indent : "  ", this.newline = "newline" in n ? n.newline : `
`, this.offset = "offset" in n ? n.offset : 0, this.dontprettytextnodes = "dontprettytextnodes" in n ? n.dontprettytextnodes : 0) : (this.indent = "", this.newline = "", this.offset = 0, this.dontprettytextnodes = 0), this.spacebeforeslash = "spacebeforeslash" in n ? n.spacebeforeslash : "", this.spacebeforeslash === !0 && (this.spacebeforeslash = " "), this.newlinedefault = this.newline, this.prettydefault = this.pretty, i = n.writer || {};
        for (r in i)
          e.call(i, r) && (a = i[r], this[r] = a);
        return this;
      }, t.prototype.space = function(n) {
        var r;
        return this.pretty ? (r = (n || 0) + this.offset + 1, r > 0 ? new Array(r).join(this.indent) : "") : "";
      }, t;
    }();
  }.call(we)), Hr;
}
var Zs;
function Uo() {
  return Zs || (Zs = 1, function() {
    var e, t, n, r, i, a, c, o, s, u, f, p, y, m, b = function(l, g) {
      for (var h in g)
        d.call(g, h) && (l[h] = g[h]);
      function D() {
        this.constructor = l;
      }
      return D.prototype = g.prototype, l.prototype = new D(), l.__super__ = g.prototype, l;
    }, d = {}.hasOwnProperty;
    c = fi(), o = bi(), e = di(), t = li(), u = ui(), p = yi(), y = Di(), f = vi(), s = _o(), n = hi(), r = gi(), i = pi(), a = mi(), m = Wd(), u2.exports = function(l) {
      b(g, l);
      function g(h) {
        g.__super__.constructor.call(this, h);
      }
      return g.prototype.document = function(h) {
        var D, w, U, E, F;
        for (this.textispresent = !1, E = "", F = h.children, w = 0, U = F.length; w < U; w++)
          D = F[w], !(D instanceof s) && (E += function() {
            switch (!1) {
              case !(D instanceof c):
                return this.declaration(D);
              case !(D instanceof o):
                return this.docType(D);
              case !(D instanceof t):
                return this.comment(D);
              case !(D instanceof f):
                return this.processingInstruction(D);
              default:
                return this.element(D, 0);
            }
          }.call(this));
        return this.pretty && E.slice(-this.newline.length) === this.newline && (E = E.slice(0, -this.newline.length)), E;
      }, g.prototype.attribute = function(h) {
        return " " + h.name + '="' + h.value + '"';
      }, g.prototype.cdata = function(h, D) {
        return this.space(D) + "<![CDATA[" + h.text + "]]>" + this.newline;
      }, g.prototype.comment = function(h, D) {
        return this.space(D) + "<!-- " + h.text + " -->" + this.newline;
      }, g.prototype.declaration = function(h, D) {
        var w;
        return w = this.space(D), w += '<?xml version="' + h.version + '"', h.encoding != null && (w += ' encoding="' + h.encoding + '"'), h.standalone != null && (w += ' standalone="' + h.standalone + '"'), w += this.spacebeforeslash + "?>", w += this.newline, w;
      }, g.prototype.docType = function(h, D) {
        var w, U, E, F, j;
        if (D || (D = 0), F = this.space(D), F += "<!DOCTYPE " + h.root().name, h.pubID && h.sysID ? F += ' PUBLIC "' + h.pubID + '" "' + h.sysID + '"' : h.sysID && (F += ' SYSTEM "' + h.sysID + '"'), h.children.length > 0) {
          for (F += " [", F += this.newline, j = h.children, U = 0, E = j.length; U < E; U++)
            w = j[U], F += function() {
              switch (!1) {
                case !(w instanceof n):
                  return this.dtdAttList(w, D + 1);
                case !(w instanceof r):
                  return this.dtdElement(w, D + 1);
                case !(w instanceof i):
                  return this.dtdEntity(w, D + 1);
                case !(w instanceof a):
                  return this.dtdNotation(w, D + 1);
                case !(w instanceof e):
                  return this.cdata(w, D + 1);
                case !(w instanceof t):
                  return this.comment(w, D + 1);
                case !(w instanceof f):
                  return this.processingInstruction(w, D + 1);
                default:
                  throw new Error("Unknown DTD node type: " + w.constructor.name);
              }
            }.call(this);
          F += "]";
        }
        return F += this.spacebeforeslash + ">", F += this.newline, F;
      }, g.prototype.element = function(h, D) {
        var w, U, E, F, j, q, Y, oe, T, P, _, Q, S;
        D || (D = 0), S = !1, this.textispresent ? (this.newline = "", this.pretty = !1) : (this.newline = this.newlinedefault, this.pretty = this.prettydefault), Q = this.space(D), oe = "", oe += Q + "<" + h.name, T = h.attributes;
        for (Y in T)
          d.call(T, Y) && (w = T[Y], oe += this.attribute(w));
        if (h.children.length === 0 || h.children.every(function(R) {
          return R.value === "";
        }))
          this.allowEmpty ? oe += "></" + h.name + ">" + this.newline : oe += this.spacebeforeslash + "/>" + this.newline;
        else if (this.pretty && h.children.length === 1 && h.children[0].value != null)
          oe += ">", oe += h.children[0].value, oe += "</" + h.name + ">" + this.newline;
        else {
          if (this.dontprettytextnodes) {
            for (P = h.children, E = 0, j = P.length; E < j; E++)
              if (U = P[E], U.value != null) {
                this.textispresent++, S = !0;
                break;
              }
          }
          for (this.textispresent && (this.newline = "", this.pretty = !1, Q = this.space(D)), oe += ">" + this.newline, _ = h.children, F = 0, q = _.length; F < q; F++)
            U = _[F], oe += function() {
              switch (!1) {
                case !(U instanceof e):
                  return this.cdata(U, D + 1);
                case !(U instanceof t):
                  return this.comment(U, D + 1);
                case !(U instanceof u):
                  return this.element(U, D + 1);
                case !(U instanceof p):
                  return this.raw(U, D + 1);
                case !(U instanceof y):
                  return this.text(U, D + 1);
                case !(U instanceof f):
                  return this.processingInstruction(U, D + 1);
                case !(U instanceof s):
                  return "";
                default:
                  throw new Error("Unknown XML node type: " + U.constructor.name);
              }
            }.call(this);
          S && this.textispresent--, this.textispresent || (this.newline = this.newlinedefault, this.pretty = this.prettydefault), oe += Q + "</" + h.name + ">" + this.newline;
        }
        return oe;
      }, g.prototype.processingInstruction = function(h, D) {
        var w;
        return w = this.space(D) + "<?" + h.target, h.value && (w += " " + h.value), w += this.spacebeforeslash + "?>" + this.newline, w;
      }, g.prototype.raw = function(h, D) {
        return this.space(D) + h.value + this.newline;
      }, g.prototype.text = function(h, D) {
        return this.space(D) + h.value + this.newline;
      }, g.prototype.dtdAttList = function(h, D) {
        var w;
        return w = this.space(D) + "<!ATTLIST " + h.elementName + " " + h.attributeName + " " + h.attributeType, h.defaultValueType !== "#DEFAULT" && (w += " " + h.defaultValueType), h.defaultValue && (w += ' "' + h.defaultValue + '"'), w += this.spacebeforeslash + ">" + this.newline, w;
      }, g.prototype.dtdElement = function(h, D) {
        return this.space(D) + "<!ELEMENT " + h.name + " " + h.value + this.spacebeforeslash + ">" + this.newline;
      }, g.prototype.dtdEntity = function(h, D) {
        var w;
        return w = this.space(D) + "<!ENTITY", h.pe && (w += " %"), w += " " + h.name, h.value ? w += ' "' + h.value + '"' : (h.pubID && h.sysID ? w += ' PUBLIC "' + h.pubID + '" "' + h.sysID + '"' : h.sysID && (w += ' SYSTEM "' + h.sysID + '"'), h.nData && (w += " NDATA " + h.nData)), w += this.spacebeforeslash + ">" + this.newline, w;
      }, g.prototype.dtdNotation = function(h, D) {
        var w;
        return w = this.space(D) + "<!NOTATION " + h.name, h.pubID && h.sysID ? w += ' PUBLIC "' + h.pubID + '" "' + h.sysID + '"' : h.pubID ? w += ' PUBLIC "' + h.pubID + '"' : h.sysID && (w += ' SYSTEM "' + h.sysID + '"'), w += this.spacebeforeslash + ">" + this.newline, w;
      }, g.prototype.openNode = function(h, D) {
        var w, U, E, F;
        if (D || (D = 0), h instanceof u) {
          E = this.space(D) + "<" + h.name, F = h.attributes;
          for (U in F)
            d.call(F, U) && (w = F[U], E += this.attribute(w));
          return E += (h.children ? ">" : "/>") + this.newline, E;
        } else
          return E = this.space(D) + "<!DOCTYPE " + h.rootNodeName, h.pubID && h.sysID ? E += ' PUBLIC "' + h.pubID + '" "' + h.sysID + '"' : h.sysID && (E += ' SYSTEM "' + h.sysID + '"'), E += (h.children ? " [" : ">") + this.newline, E;
      }, g.prototype.closeNode = function(h, D) {
        switch (D || (D = 0), !1) {
          case !(h instanceof u):
            return this.space(D) + "</" + h.name + ">" + this.newline;
          case !(h instanceof o):
            return this.space(D) + "]>" + this.newline;
        }
      }, g;
    }(m);
  }.call(we)), Vr;
}
var Gs;
function l2() {
  return Gs || (Gs = 1, function() {
    var e, t, n, r, i = function(c, o) {
      for (var s in o)
        a.call(o, s) && (c[s] = o[s]);
      function u() {
        this.constructor = c;
      }
      return u.prototype = o.prototype, c.prototype = new u(), c.__super__ = o.prototype, c;
    }, a = {}.hasOwnProperty;
    r = jt().isPlainObject, e = Je(), n = kd(), t = Uo(), Hg.exports = function(c) {
      i(o, c);
      function o(s) {
        o.__super__.constructor.call(this, null), this.name = "?xml", s || (s = {}), s.writer || (s.writer = new t()), this.options = s, this.stringify = new n(s), this.isDocument = !0;
      }
      return o.prototype.end = function(s) {
        var u;
        return s ? r(s) && (u = s, s = this.options.writer.set(u)) : s = this.options.writer, s.document(this);
      }, o.prototype.toString = function(s) {
        return this.options.writer.set(s).document(this);
      }, o;
    }(e);
  }.call(we)), Cr;
}
var $r = {}, f2 = {
  get exports() {
    return $r;
  },
  set exports(e) {
    $r = e;
  }
}, Ys;
function h2() {
  return Ys || (Ys = 1, function() {
    var e, t, n, r, i, a, c, o, s, u, f, p, y, m, b, d, l, g, h, D, w = {}.hasOwnProperty;
    D = jt(), g = D.isObject, l = D.isFunction, h = D.isPlainObject, d = D.getValue, u = ui(), t = di(), n = li(), p = yi(), b = Di(), f = vi(), o = fi(), s = bi(), r = hi(), a = pi(), i = gi(), c = mi(), e = Bd(), m = kd(), y = Uo(), f2.exports = function() {
      function U(E, F, j) {
        var q;
        this.name = "?xml", E || (E = {}), E.writer ? h(E.writer) && (q = E.writer, E.writer = new y(q)) : E.writer = new y(E), this.options = E, this.writer = E.writer, this.stringify = new m(E), this.onDataCallback = F || function() {
        }, this.onEndCallback = j || function() {
        }, this.currentNode = null, this.currentLevel = -1, this.openTags = {}, this.documentStarted = !1, this.documentCompleted = !1, this.root = null;
      }
      return U.prototype.node = function(E, F, j) {
        var q, Y;
        if (E == null)
          throw new Error("Missing node name.");
        if (this.root && this.currentLevel === -1)
          throw new Error("Document can only have one root node. " + this.debugInfo(E));
        return this.openCurrent(), E = d(E), F === null && j == null && (q = [{}, null], F = q[0], j = q[1]), F == null && (F = {}), F = d(F), g(F) || (Y = [F, j], j = Y[0], F = Y[1]), this.currentNode = new u(this, E, F), this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, j != null && this.text(j), this;
      }, U.prototype.element = function(E, F, j) {
        return this.currentNode && this.currentNode instanceof s ? this.dtdElement.apply(this, arguments) : this.node(E, F, j);
      }, U.prototype.attribute = function(E, F) {
        var j, q;
        if (!this.currentNode || this.currentNode.children)
          throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(E));
        if (E != null && (E = d(E)), g(E))
          for (j in E)
            w.call(E, j) && (q = E[j], this.attribute(j, q));
        else
          l(F) && (F = F.apply()), (!this.options.skipNullAttributes || F != null) && (this.currentNode.attributes[E] = new e(this, E, F));
        return this;
      }, U.prototype.text = function(E) {
        var F;
        return this.openCurrent(), F = new b(this, E), this.onData(this.writer.text(F, this.currentLevel + 1), this.currentLevel + 1), this;
      }, U.prototype.cdata = function(E) {
        var F;
        return this.openCurrent(), F = new t(this, E), this.onData(this.writer.cdata(F, this.currentLevel + 1), this.currentLevel + 1), this;
      }, U.prototype.comment = function(E) {
        var F;
        return this.openCurrent(), F = new n(this, E), this.onData(this.writer.comment(F, this.currentLevel + 1), this.currentLevel + 1), this;
      }, U.prototype.raw = function(E) {
        var F;
        return this.openCurrent(), F = new p(this, E), this.onData(this.writer.raw(F, this.currentLevel + 1), this.currentLevel + 1), this;
      }, U.prototype.instruction = function(E, F) {
        var j, q, Y, oe, T;
        if (this.openCurrent(), E != null && (E = d(E)), F != null && (F = d(F)), Array.isArray(E))
          for (j = 0, oe = E.length; j < oe; j++)
            q = E[j], this.instruction(q);
        else if (g(E))
          for (q in E)
            w.call(E, q) && (Y = E[q], this.instruction(q, Y));
        else
          l(F) && (F = F.apply()), T = new f(this, E, F), this.onData(this.writer.processingInstruction(T, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }, U.prototype.declaration = function(E, F, j) {
        var q;
        if (this.openCurrent(), this.documentStarted)
          throw new Error("declaration() must be the first node.");
        return q = new o(this, E, F, j), this.onData(this.writer.declaration(q, this.currentLevel + 1), this.currentLevel + 1), this;
      }, U.prototype.doctype = function(E, F, j) {
        if (this.openCurrent(), E == null)
          throw new Error("Missing root node name.");
        if (this.root)
          throw new Error("dtd() must come before the root node.");
        return this.currentNode = new s(this, F, j), this.currentNode.rootNodeName = E, this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, this;
      }, U.prototype.dtdElement = function(E, F) {
        var j;
        return this.openCurrent(), j = new i(this, E, F), this.onData(this.writer.dtdElement(j, this.currentLevel + 1), this.currentLevel + 1), this;
      }, U.prototype.attList = function(E, F, j, q, Y) {
        var oe;
        return this.openCurrent(), oe = new r(this, E, F, j, q, Y), this.onData(this.writer.dtdAttList(oe, this.currentLevel + 1), this.currentLevel + 1), this;
      }, U.prototype.entity = function(E, F) {
        var j;
        return this.openCurrent(), j = new a(this, !1, E, F), this.onData(this.writer.dtdEntity(j, this.currentLevel + 1), this.currentLevel + 1), this;
      }, U.prototype.pEntity = function(E, F) {
        var j;
        return this.openCurrent(), j = new a(this, !0, E, F), this.onData(this.writer.dtdEntity(j, this.currentLevel + 1), this.currentLevel + 1), this;
      }, U.prototype.notation = function(E, F) {
        var j;
        return this.openCurrent(), j = new c(this, E, F), this.onData(this.writer.dtdNotation(j, this.currentLevel + 1), this.currentLevel + 1), this;
      }, U.prototype.up = function() {
        if (this.currentLevel < 0)
          throw new Error("The document node has no parent.");
        return this.currentNode ? (this.currentNode.children ? this.closeNode(this.currentNode) : this.openNode(this.currentNode), this.currentNode = null) : this.closeNode(this.openTags[this.currentLevel]), delete this.openTags[this.currentLevel], this.currentLevel--, this;
      }, U.prototype.end = function() {
        for (; this.currentLevel >= 0; )
          this.up();
        return this.onEnd();
      }, U.prototype.openCurrent = function() {
        if (this.currentNode)
          return this.currentNode.children = !0, this.openNode(this.currentNode);
      }, U.prototype.openNode = function(E) {
        if (!E.isOpen)
          return !this.root && this.currentLevel === 0 && E instanceof u && (this.root = E), this.onData(this.writer.openNode(E, this.currentLevel), this.currentLevel), E.isOpen = !0;
      }, U.prototype.closeNode = function(E) {
        if (!E.isClosed)
          return this.onData(this.writer.closeNode(E, this.currentLevel), this.currentLevel), E.isClosed = !0;
      }, U.prototype.onData = function(E, F) {
        return this.documentStarted = !0, this.onDataCallback(E, F + 1);
      }, U.prototype.onEnd = function() {
        return this.documentCompleted = !0, this.onEndCallback();
      }, U.prototype.debugInfo = function(E) {
        return E == null ? "" : "node: <" + E + ">";
      }, U.prototype.ele = function() {
        return this.element.apply(this, arguments);
      }, U.prototype.nod = function(E, F, j) {
        return this.node(E, F, j);
      }, U.prototype.txt = function(E) {
        return this.text(E);
      }, U.prototype.dat = function(E) {
        return this.cdata(E);
      }, U.prototype.com = function(E) {
        return this.comment(E);
      }, U.prototype.ins = function(E, F) {
        return this.instruction(E, F);
      }, U.prototype.dec = function(E, F, j) {
        return this.declaration(E, F, j);
      }, U.prototype.dtd = function(E, F, j) {
        return this.doctype(E, F, j);
      }, U.prototype.e = function(E, F, j) {
        return this.element(E, F, j);
      }, U.prototype.n = function(E, F, j) {
        return this.node(E, F, j);
      }, U.prototype.t = function(E) {
        return this.text(E);
      }, U.prototype.d = function(E) {
        return this.cdata(E);
      }, U.prototype.c = function(E) {
        return this.comment(E);
      }, U.prototype.r = function(E) {
        return this.raw(E);
      }, U.prototype.i = function(E, F) {
        return this.instruction(E, F);
      }, U.prototype.att = function() {
        return this.currentNode && this.currentNode instanceof s ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
      }, U.prototype.a = function() {
        return this.currentNode && this.currentNode instanceof s ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
      }, U.prototype.ent = function(E, F) {
        return this.entity(E, F);
      }, U.prototype.pent = function(E, F) {
        return this.pEntity(E, F);
      }, U.prototype.not = function(E, F) {
        return this.notation(E, F);
      }, U;
    }();
  }.call(we)), $r;
}
var Zr = {}, p2 = {
  get exports() {
    return Zr;
  },
  set exports(e) {
    Zr = e;
  }
}, Ks;
function g2() {
  return Ks || (Ks = 1, function() {
    var e, t, n, r, i, a, c, o, s, u, f, p, y, m, b = function(l, g) {
      for (var h in g)
        d.call(g, h) && (l[h] = g[h]);
      function D() {
        this.constructor = l;
      }
      return D.prototype = g.prototype, l.prototype = new D(), l.__super__ = g.prototype, l;
    }, d = {}.hasOwnProperty;
    c = fi(), o = bi(), e = di(), t = li(), u = ui(), p = yi(), y = Di(), f = vi(), s = _o(), n = hi(), r = gi(), i = pi(), a = mi(), m = Wd(), p2.exports = function(l) {
      b(g, l);
      function g(h, D) {
        g.__super__.constructor.call(this, D), this.stream = h;
      }
      return g.prototype.document = function(h) {
        var D, w, U, E, F, j, q, Y;
        for (j = h.children, w = 0, E = j.length; w < E; w++)
          D = j[w], D.isLastRootNode = !1;
        for (h.children[h.children.length - 1].isLastRootNode = !0, q = h.children, Y = [], U = 0, F = q.length; U < F; U++)
          if (D = q[U], !(D instanceof s))
            switch (!1) {
              case !(D instanceof c):
                Y.push(this.declaration(D));
                break;
              case !(D instanceof o):
                Y.push(this.docType(D));
                break;
              case !(D instanceof t):
                Y.push(this.comment(D));
                break;
              case !(D instanceof f):
                Y.push(this.processingInstruction(D));
                break;
              default:
                Y.push(this.element(D));
            }
        return Y;
      }, g.prototype.attribute = function(h) {
        return this.stream.write(" " + h.name + '="' + h.value + '"');
      }, g.prototype.cdata = function(h, D) {
        return this.stream.write(this.space(D) + "<![CDATA[" + h.text + "]]>" + this.endline(h));
      }, g.prototype.comment = function(h, D) {
        return this.stream.write(this.space(D) + "<!-- " + h.text + " -->" + this.endline(h));
      }, g.prototype.declaration = function(h, D) {
        return this.stream.write(this.space(D)), this.stream.write('<?xml version="' + h.version + '"'), h.encoding != null && this.stream.write(' encoding="' + h.encoding + '"'), h.standalone != null && this.stream.write(' standalone="' + h.standalone + '"'), this.stream.write(this.spacebeforeslash + "?>"), this.stream.write(this.endline(h));
      }, g.prototype.docType = function(h, D) {
        var w, U, E, F;
        if (D || (D = 0), this.stream.write(this.space(D)), this.stream.write("<!DOCTYPE " + h.root().name), h.pubID && h.sysID ? this.stream.write(' PUBLIC "' + h.pubID + '" "' + h.sysID + '"') : h.sysID && this.stream.write(' SYSTEM "' + h.sysID + '"'), h.children.length > 0) {
          for (this.stream.write(" ["), this.stream.write(this.endline(h)), F = h.children, U = 0, E = F.length; U < E; U++)
            switch (w = F[U], !1) {
              case !(w instanceof n):
                this.dtdAttList(w, D + 1);
                break;
              case !(w instanceof r):
                this.dtdElement(w, D + 1);
                break;
              case !(w instanceof i):
                this.dtdEntity(w, D + 1);
                break;
              case !(w instanceof a):
                this.dtdNotation(w, D + 1);
                break;
              case !(w instanceof e):
                this.cdata(w, D + 1);
                break;
              case !(w instanceof t):
                this.comment(w, D + 1);
                break;
              case !(w instanceof f):
                this.processingInstruction(w, D + 1);
                break;
              default:
                throw new Error("Unknown DTD node type: " + w.constructor.name);
            }
          this.stream.write("]");
        }
        return this.stream.write(this.spacebeforeslash + ">"), this.stream.write(this.endline(h));
      }, g.prototype.element = function(h, D) {
        var w, U, E, F, j, q, Y, oe;
        D || (D = 0), oe = this.space(D), this.stream.write(oe + "<" + h.name), q = h.attributes;
        for (j in q)
          d.call(q, j) && (w = q[j], this.attribute(w));
        if (h.children.length === 0 || h.children.every(function(T) {
          return T.value === "";
        }))
          this.allowEmpty ? this.stream.write("></" + h.name + ">") : this.stream.write(this.spacebeforeslash + "/>");
        else if (this.pretty && h.children.length === 1 && h.children[0].value != null)
          this.stream.write(">"), this.stream.write(h.children[0].value), this.stream.write("</" + h.name + ">");
        else {
          for (this.stream.write(">" + this.newline), Y = h.children, E = 0, F = Y.length; E < F; E++)
            switch (U = Y[E], !1) {
              case !(U instanceof e):
                this.cdata(U, D + 1);
                break;
              case !(U instanceof t):
                this.comment(U, D + 1);
                break;
              case !(U instanceof u):
                this.element(U, D + 1);
                break;
              case !(U instanceof p):
                this.raw(U, D + 1);
                break;
              case !(U instanceof y):
                this.text(U, D + 1);
                break;
              case !(U instanceof f):
                this.processingInstruction(U, D + 1);
                break;
              case !(U instanceof s):
                break;
              default:
                throw new Error("Unknown XML node type: " + U.constructor.name);
            }
          this.stream.write(oe + "</" + h.name + ">");
        }
        return this.stream.write(this.endline(h));
      }, g.prototype.processingInstruction = function(h, D) {
        return this.stream.write(this.space(D) + "<?" + h.target), h.value && this.stream.write(" " + h.value), this.stream.write(this.spacebeforeslash + "?>" + this.endline(h));
      }, g.prototype.raw = function(h, D) {
        return this.stream.write(this.space(D) + h.value + this.endline(h));
      }, g.prototype.text = function(h, D) {
        return this.stream.write(this.space(D) + h.value + this.endline(h));
      }, g.prototype.dtdAttList = function(h, D) {
        return this.stream.write(this.space(D) + "<!ATTLIST " + h.elementName + " " + h.attributeName + " " + h.attributeType), h.defaultValueType !== "#DEFAULT" && this.stream.write(" " + h.defaultValueType), h.defaultValue && this.stream.write(' "' + h.defaultValue + '"'), this.stream.write(this.spacebeforeslash + ">" + this.endline(h));
      }, g.prototype.dtdElement = function(h, D) {
        return this.stream.write(this.space(D) + "<!ELEMENT " + h.name + " " + h.value), this.stream.write(this.spacebeforeslash + ">" + this.endline(h));
      }, g.prototype.dtdEntity = function(h, D) {
        return this.stream.write(this.space(D) + "<!ENTITY"), h.pe && this.stream.write(" %"), this.stream.write(" " + h.name), h.value ? this.stream.write(' "' + h.value + '"') : (h.pubID && h.sysID ? this.stream.write(' PUBLIC "' + h.pubID + '" "' + h.sysID + '"') : h.sysID && this.stream.write(' SYSTEM "' + h.sysID + '"'), h.nData && this.stream.write(" NDATA " + h.nData)), this.stream.write(this.spacebeforeslash + ">" + this.endline(h));
      }, g.prototype.dtdNotation = function(h, D) {
        return this.stream.write(this.space(D) + "<!NOTATION " + h.name), h.pubID && h.sysID ? this.stream.write(' PUBLIC "' + h.pubID + '" "' + h.sysID + '"') : h.pubID ? this.stream.write(' PUBLIC "' + h.pubID + '"') : h.sysID && this.stream.write(' SYSTEM "' + h.sysID + '"'), this.stream.write(this.spacebeforeslash + ">" + this.endline(h));
      }, g.prototype.endline = function(h) {
        return h.isLastRootNode ? "" : this.newline;
      }, g;
    }(m);
  }.call(we)), Zr;
}
(function() {
  var e, t, n, r, i, a, c;
  c = jt(), i = c.assign, a = c.isFunction, e = l2(), t = h2(), r = Uo(), n = g2(), On.create = function(o, s, u, f) {
    var p, y;
    if (o == null)
      throw new Error("Root element needs a name.");
    return f = i({}, s, u, f), p = new e(f), y = p.element(o), f.headless || (p.declaration(f), (f.pubID != null || f.sysID != null) && p.doctype(f)), y;
  }, On.begin = function(o, s, u) {
    var f;
    return a(o) && (f = [o, s], s = f[0], u = f[1], o = {}), s ? new t(o, s, u) : new e(o);
  }, On.stringWriter = function(o) {
    return new r(o);
  }, On.streamWriter = function(o, s) {
    return new n(o, s);
  };
}).call(we);
var Qs = We, m2 = On;
Sd.writeString = b2;
function b2(e, t) {
  var n = Qs.invert(t), r = {
    element: a,
    text: y2
  };
  function i(s, u) {
    return r[u.type](s, u);
  }
  function a(s, u) {
    var f = s.element(c(u.name), u.attributes);
    u.children.forEach(function(p) {
      i(f, p);
    });
  }
  function c(s) {
    var u = /^\{(.*)\}(.*)$/.exec(s);
    if (u) {
      var f = n[u[1]];
      return f + (f === "" ? "" : ":") + u[2];
    } else
      return s;
  }
  function o(s) {
    var u = m2.create(c(s.name), {
      version: "1.0",
      encoding: "UTF-8",
      standalone: !0
    });
    return Qs.forEach(t, function(f, p) {
      var y = "xmlns" + (p === "" ? "" : ":" + p);
      u.attribute(y, f);
    }), s.children.forEach(function(f) {
      i(u, f);
    }), u.end();
  }
  return o(e);
}
function y2(e, t) {
  e.text(t.value);
}
var wo = Yn;
en.Element = wo.Element;
en.element = wo.element;
en.text = wo.text;
en.readString = Ku.readString;
en.writeString = Sd.writeString;
var D2 = We, v2 = Le, x2 = en;
uo.read = Nd;
uo.readXmlFromZipFile = U2;
var _2 = {
  "http://schemas.openxmlformats.org/wordprocessingml/2006/main": "w",
  "http://schemas.openxmlformats.org/officeDocument/2006/relationships": "r",
  "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing": "wp",
  "http://schemas.openxmlformats.org/drawingml/2006/main": "a",
  "http://schemas.openxmlformats.org/drawingml/2006/picture": "pic",
  "http://schemas.openxmlformats.org/package/2006/content-types": "content-types",
  "urn:schemas-microsoft-com:vml": "v",
  "http://schemas.openxmlformats.org/markup-compatibility/2006": "mc",
  "urn:schemas-microsoft-com:office:word": "office-word"
};
function Nd(e) {
  return x2.readString(e, _2).then(function(t) {
    return Rd(t)[0];
  });
}
function U2(e, t) {
  return e.exists(t) ? e.read(t, "utf-8").then(w2).then(Nd) : v2.resolve(null);
}
function w2(e) {
  return e.replace(/^\uFEFF/g, "");
}
function Rd(e) {
  return e.type === "element" ? e.name === "mc:AlternateContent" ? e.first("mc:Fallback").children : (e.children = D2.flatten(e.children.map(Rd, !0)), [e]) : [e];
}
var To = {}, Rt = {}, Eo = {};
Object.defineProperty(Eo, "__esModule", { value: !0 });
var T2 = [
  { "Typeface name": "Symbol", "Dingbat dec": "32", "Dingbat hex": "20", "Unicode dec": "32", "Unicode hex": "20" },
  { "Typeface name": "Symbol", "Dingbat dec": "33", "Dingbat hex": "21", "Unicode dec": "33", "Unicode hex": "21" },
  { "Typeface name": "Symbol", "Dingbat dec": "34", "Dingbat hex": "22", "Unicode dec": "8704", "Unicode hex": "2200" },
  { "Typeface name": "Symbol", "Dingbat dec": "35", "Dingbat hex": "23", "Unicode dec": "35", "Unicode hex": "23" },
  { "Typeface name": "Symbol", "Dingbat dec": "36", "Dingbat hex": "24", "Unicode dec": "8707", "Unicode hex": "2203" },
  { "Typeface name": "Symbol", "Dingbat dec": "37", "Dingbat hex": "25", "Unicode dec": "37", "Unicode hex": "25" },
  { "Typeface name": "Symbol", "Dingbat dec": "38", "Dingbat hex": "26", "Unicode dec": "38", "Unicode hex": "26" },
  { "Typeface name": "Symbol", "Dingbat dec": "39", "Dingbat hex": "27", "Unicode dec": "8717", "Unicode hex": "220D" },
  { "Typeface name": "Symbol", "Dingbat dec": "40", "Dingbat hex": "28", "Unicode dec": "40", "Unicode hex": "28" },
  { "Typeface name": "Symbol", "Dingbat dec": "41", "Dingbat hex": "29", "Unicode dec": "41", "Unicode hex": "29" },
  { "Typeface name": "Symbol", "Dingbat dec": "42", "Dingbat hex": "2A", "Unicode dec": "42", "Unicode hex": "2A" },
  { "Typeface name": "Symbol", "Dingbat dec": "43", "Dingbat hex": "2B", "Unicode dec": "43", "Unicode hex": "2B" },
  { "Typeface name": "Symbol", "Dingbat dec": "44", "Dingbat hex": "2C", "Unicode dec": "44", "Unicode hex": "2C" },
  { "Typeface name": "Symbol", "Dingbat dec": "45", "Dingbat hex": "2D", "Unicode dec": "8722", "Unicode hex": "2212" },
  { "Typeface name": "Symbol", "Dingbat dec": "46", "Dingbat hex": "2E", "Unicode dec": "46", "Unicode hex": "2E" },
  { "Typeface name": "Symbol", "Dingbat dec": "47", "Dingbat hex": "2F", "Unicode dec": "47", "Unicode hex": "2F" },
  { "Typeface name": "Symbol", "Dingbat dec": "48", "Dingbat hex": "30", "Unicode dec": "48", "Unicode hex": "30" },
  { "Typeface name": "Symbol", "Dingbat dec": "49", "Dingbat hex": "31", "Unicode dec": "49", "Unicode hex": "31" },
  { "Typeface name": "Symbol", "Dingbat dec": "50", "Dingbat hex": "32", "Unicode dec": "50", "Unicode hex": "32" },
  { "Typeface name": "Symbol", "Dingbat dec": "51", "Dingbat hex": "33", "Unicode dec": "51", "Unicode hex": "33" },
  { "Typeface name": "Symbol", "Dingbat dec": "52", "Dingbat hex": "34", "Unicode dec": "52", "Unicode hex": "34" },
  { "Typeface name": "Symbol", "Dingbat dec": "53", "Dingbat hex": "35", "Unicode dec": "53", "Unicode hex": "35" },
  { "Typeface name": "Symbol", "Dingbat dec": "54", "Dingbat hex": "36", "Unicode dec": "54", "Unicode hex": "36" },
  { "Typeface name": "Symbol", "Dingbat dec": "55", "Dingbat hex": "37", "Unicode dec": "55", "Unicode hex": "37" },
  { "Typeface name": "Symbol", "Dingbat dec": "56", "Dingbat hex": "38", "Unicode dec": "56", "Unicode hex": "38" },
  { "Typeface name": "Symbol", "Dingbat dec": "57", "Dingbat hex": "39", "Unicode dec": "57", "Unicode hex": "39" },
  { "Typeface name": "Symbol", "Dingbat dec": "58", "Dingbat hex": "3A", "Unicode dec": "58", "Unicode hex": "3A" },
  { "Typeface name": "Symbol", "Dingbat dec": "59", "Dingbat hex": "3B", "Unicode dec": "59", "Unicode hex": "3B" },
  { "Typeface name": "Symbol", "Dingbat dec": "60", "Dingbat hex": "3C", "Unicode dec": "60", "Unicode hex": "3C" },
  { "Typeface name": "Symbol", "Dingbat dec": "61", "Dingbat hex": "3D", "Unicode dec": "61", "Unicode hex": "3D" },
  { "Typeface name": "Symbol", "Dingbat dec": "62", "Dingbat hex": "3E", "Unicode dec": "62", "Unicode hex": "3E" },
  { "Typeface name": "Symbol", "Dingbat dec": "63", "Dingbat hex": "3F", "Unicode dec": "63", "Unicode hex": "3F" },
  { "Typeface name": "Symbol", "Dingbat dec": "64", "Dingbat hex": "40", "Unicode dec": "8773", "Unicode hex": "2245" },
  { "Typeface name": "Symbol", "Dingbat dec": "65", "Dingbat hex": "41", "Unicode dec": "913", "Unicode hex": "391" },
  { "Typeface name": "Symbol", "Dingbat dec": "66", "Dingbat hex": "42", "Unicode dec": "914", "Unicode hex": "392" },
  { "Typeface name": "Symbol", "Dingbat dec": "67", "Dingbat hex": "43", "Unicode dec": "935", "Unicode hex": "3A7" },
  { "Typeface name": "Symbol", "Dingbat dec": "68", "Dingbat hex": "44", "Unicode dec": "916", "Unicode hex": "394" },
  { "Typeface name": "Symbol", "Dingbat dec": "69", "Dingbat hex": "45", "Unicode dec": "917", "Unicode hex": "395" },
  { "Typeface name": "Symbol", "Dingbat dec": "70", "Dingbat hex": "46", "Unicode dec": "934", "Unicode hex": "3A6" },
  { "Typeface name": "Symbol", "Dingbat dec": "71", "Dingbat hex": "47", "Unicode dec": "915", "Unicode hex": "393" },
  { "Typeface name": "Symbol", "Dingbat dec": "72", "Dingbat hex": "48", "Unicode dec": "919", "Unicode hex": "397" },
  { "Typeface name": "Symbol", "Dingbat dec": "73", "Dingbat hex": "49", "Unicode dec": "921", "Unicode hex": "399" },
  { "Typeface name": "Symbol", "Dingbat dec": "74", "Dingbat hex": "4A", "Unicode dec": "977", "Unicode hex": "3D1" },
  { "Typeface name": "Symbol", "Dingbat dec": "75", "Dingbat hex": "4B", "Unicode dec": "922", "Unicode hex": "39A" },
  { "Typeface name": "Symbol", "Dingbat dec": "76", "Dingbat hex": "4C", "Unicode dec": "923", "Unicode hex": "39B" },
  { "Typeface name": "Symbol", "Dingbat dec": "77", "Dingbat hex": "4D", "Unicode dec": "924", "Unicode hex": "39C" },
  { "Typeface name": "Symbol", "Dingbat dec": "78", "Dingbat hex": "4E", "Unicode dec": "925", "Unicode hex": "39D" },
  { "Typeface name": "Symbol", "Dingbat dec": "79", "Dingbat hex": "4F", "Unicode dec": "927", "Unicode hex": "39F" },
  { "Typeface name": "Symbol", "Dingbat dec": "80", "Dingbat hex": "50", "Unicode dec": "928", "Unicode hex": "3A0" },
  { "Typeface name": "Symbol", "Dingbat dec": "81", "Dingbat hex": "51", "Unicode dec": "920", "Unicode hex": "398" },
  { "Typeface name": "Symbol", "Dingbat dec": "82", "Dingbat hex": "52", "Unicode dec": "929", "Unicode hex": "3A1" },
  { "Typeface name": "Symbol", "Dingbat dec": "83", "Dingbat hex": "53", "Unicode dec": "931", "Unicode hex": "3A3" },
  { "Typeface name": "Symbol", "Dingbat dec": "84", "Dingbat hex": "54", "Unicode dec": "932", "Unicode hex": "3A4" },
  { "Typeface name": "Symbol", "Dingbat dec": "85", "Dingbat hex": "55", "Unicode dec": "933", "Unicode hex": "3A5" },
  { "Typeface name": "Symbol", "Dingbat dec": "86", "Dingbat hex": "56", "Unicode dec": "962", "Unicode hex": "3C2" },
  { "Typeface name": "Symbol", "Dingbat dec": "87", "Dingbat hex": "57", "Unicode dec": "937", "Unicode hex": "3A9" },
  { "Typeface name": "Symbol", "Dingbat dec": "88", "Dingbat hex": "58", "Unicode dec": "926", "Unicode hex": "39E" },
  { "Typeface name": "Symbol", "Dingbat dec": "89", "Dingbat hex": "59", "Unicode dec": "936", "Unicode hex": "3A8" },
  { "Typeface name": "Symbol", "Dingbat dec": "90", "Dingbat hex": "5A", "Unicode dec": "918", "Unicode hex": "396" },
  { "Typeface name": "Symbol", "Dingbat dec": "91", "Dingbat hex": "5B", "Unicode dec": "91", "Unicode hex": "5B" },
  { "Typeface name": "Symbol", "Dingbat dec": "92", "Dingbat hex": "5C", "Unicode dec": "8756", "Unicode hex": "2234" },
  { "Typeface name": "Symbol", "Dingbat dec": "93", "Dingbat hex": "5D", "Unicode dec": "93", "Unicode hex": "5D" },
  { "Typeface name": "Symbol", "Dingbat dec": "94", "Dingbat hex": "5E", "Unicode dec": "8869", "Unicode hex": "22A5" },
  { "Typeface name": "Symbol", "Dingbat dec": "95", "Dingbat hex": "5F", "Unicode dec": "95", "Unicode hex": "5F" },
  { "Typeface name": "Symbol", "Dingbat dec": "96", "Dingbat hex": "60", "Unicode dec": "8254", "Unicode hex": "203E" },
  { "Typeface name": "Symbol", "Dingbat dec": "97", "Dingbat hex": "61", "Unicode dec": "945", "Unicode hex": "3B1" },
  { "Typeface name": "Symbol", "Dingbat dec": "98", "Dingbat hex": "62", "Unicode dec": "946", "Unicode hex": "3B2" },
  { "Typeface name": "Symbol", "Dingbat dec": "99", "Dingbat hex": "63", "Unicode dec": "967", "Unicode hex": "3C7" },
  { "Typeface name": "Symbol", "Dingbat dec": "100", "Dingbat hex": "64", "Unicode dec": "948", "Unicode hex": "3B4" },
  { "Typeface name": "Symbol", "Dingbat dec": "101", "Dingbat hex": "65", "Unicode dec": "949", "Unicode hex": "3B5" },
  { "Typeface name": "Symbol", "Dingbat dec": "102", "Dingbat hex": "66", "Unicode dec": "966", "Unicode hex": "3C6" },
  { "Typeface name": "Symbol", "Dingbat dec": "103", "Dingbat hex": "67", "Unicode dec": "947", "Unicode hex": "3B3" },
  { "Typeface name": "Symbol", "Dingbat dec": "104", "Dingbat hex": "68", "Unicode dec": "951", "Unicode hex": "3B7" },
  { "Typeface name": "Symbol", "Dingbat dec": "105", "Dingbat hex": "69", "Unicode dec": "953", "Unicode hex": "3B9" },
  { "Typeface name": "Symbol", "Dingbat dec": "106", "Dingbat hex": "6A", "Unicode dec": "981", "Unicode hex": "3D5" },
  { "Typeface name": "Symbol", "Dingbat dec": "107", "Dingbat hex": "6B", "Unicode dec": "954", "Unicode hex": "3BA" },
  { "Typeface name": "Symbol", "Dingbat dec": "108", "Dingbat hex": "6C", "Unicode dec": "955", "Unicode hex": "3BB" },
  { "Typeface name": "Symbol", "Dingbat dec": "109", "Dingbat hex": "6D", "Unicode dec": "956", "Unicode hex": "3BC" },
  { "Typeface name": "Symbol", "Dingbat dec": "110", "Dingbat hex": "6E", "Unicode dec": "957", "Unicode hex": "3BD" },
  { "Typeface name": "Symbol", "Dingbat dec": "111", "Dingbat hex": "6F", "Unicode dec": "959", "Unicode hex": "3BF" },
  { "Typeface name": "Symbol", "Dingbat dec": "112", "Dingbat hex": "70", "Unicode dec": "960", "Unicode hex": "3C0" },
  { "Typeface name": "Symbol", "Dingbat dec": "113", "Dingbat hex": "71", "Unicode dec": "952", "Unicode hex": "3B8" },
  { "Typeface name": "Symbol", "Dingbat dec": "114", "Dingbat hex": "72", "Unicode dec": "961", "Unicode hex": "3C1" },
  { "Typeface name": "Symbol", "Dingbat dec": "115", "Dingbat hex": "73", "Unicode dec": "963", "Unicode hex": "3C3" },
  { "Typeface name": "Symbol", "Dingbat dec": "116", "Dingbat hex": "74", "Unicode dec": "964", "Unicode hex": "3C4" },
  { "Typeface name": "Symbol", "Dingbat dec": "117", "Dingbat hex": "75", "Unicode dec": "965", "Unicode hex": "3C5" },
  { "Typeface name": "Symbol", "Dingbat dec": "118", "Dingbat hex": "76", "Unicode dec": "982", "Unicode hex": "3D6" },
  { "Typeface name": "Symbol", "Dingbat dec": "119", "Dingbat hex": "77", "Unicode dec": "969", "Unicode hex": "3C9" },
  { "Typeface name": "Symbol", "Dingbat dec": "120", "Dingbat hex": "78", "Unicode dec": "958", "Unicode hex": "3BE" },
  { "Typeface name": "Symbol", "Dingbat dec": "121", "Dingbat hex": "79", "Unicode dec": "968", "Unicode hex": "3C8" },
  { "Typeface name": "Symbol", "Dingbat dec": "122", "Dingbat hex": "7A", "Unicode dec": "950", "Unicode hex": "3B6" },
  { "Typeface name": "Symbol", "Dingbat dec": "123", "Dingbat hex": "7B", "Unicode dec": "123", "Unicode hex": "7B" },
  { "Typeface name": "Symbol", "Dingbat dec": "124", "Dingbat hex": "7C", "Unicode dec": "124", "Unicode hex": "7C" },
  { "Typeface name": "Symbol", "Dingbat dec": "125", "Dingbat hex": "7D", "Unicode dec": "125", "Unicode hex": "7D" },
  { "Typeface name": "Symbol", "Dingbat dec": "126", "Dingbat hex": "7E", "Unicode dec": "126", "Unicode hex": "7E" },
  { "Typeface name": "Symbol", "Dingbat dec": "160", "Dingbat hex": "A0", "Unicode dec": "8364", "Unicode hex": "20AC" },
  { "Typeface name": "Symbol", "Dingbat dec": "161", "Dingbat hex": "A1", "Unicode dec": "978", "Unicode hex": "3D2" },
  { "Typeface name": "Symbol", "Dingbat dec": "162", "Dingbat hex": "A2", "Unicode dec": "8242", "Unicode hex": "2032" },
  { "Typeface name": "Symbol", "Dingbat dec": "163", "Dingbat hex": "A3", "Unicode dec": "8804", "Unicode hex": "2264" },
  { "Typeface name": "Symbol", "Dingbat dec": "164", "Dingbat hex": "A4", "Unicode dec": "8260", "Unicode hex": "2044" },
  { "Typeface name": "Symbol", "Dingbat dec": "165", "Dingbat hex": "A5", "Unicode dec": "8734", "Unicode hex": "221E" },
  { "Typeface name": "Symbol", "Dingbat dec": "166", "Dingbat hex": "A6", "Unicode dec": "402", "Unicode hex": "192" },
  { "Typeface name": "Symbol", "Dingbat dec": "167", "Dingbat hex": "A7", "Unicode dec": "9827", "Unicode hex": "2663" },
  { "Typeface name": "Symbol", "Dingbat dec": "168", "Dingbat hex": "A8", "Unicode dec": "9830", "Unicode hex": "2666" },
  { "Typeface name": "Symbol", "Dingbat dec": "169", "Dingbat hex": "A9", "Unicode dec": "9829", "Unicode hex": "2665" },
  { "Typeface name": "Symbol", "Dingbat dec": "170", "Dingbat hex": "AA", "Unicode dec": "9824", "Unicode hex": "2660" },
  { "Typeface name": "Symbol", "Dingbat dec": "171", "Dingbat hex": "AB", "Unicode dec": "8596", "Unicode hex": "2194" },
  { "Typeface name": "Symbol", "Dingbat dec": "172", "Dingbat hex": "AC", "Unicode dec": "8592", "Unicode hex": "2190" },
  { "Typeface name": "Symbol", "Dingbat dec": "173", "Dingbat hex": "AD", "Unicode dec": "8593", "Unicode hex": "2191" },
  { "Typeface name": "Symbol", "Dingbat dec": "174", "Dingbat hex": "AE", "Unicode dec": "8594", "Unicode hex": "2192" },
  { "Typeface name": "Symbol", "Dingbat dec": "175", "Dingbat hex": "AF", "Unicode dec": "8595", "Unicode hex": "2193" },
  { "Typeface name": "Symbol", "Dingbat dec": "176", "Dingbat hex": "B0", "Unicode dec": "176", "Unicode hex": "B0" },
  { "Typeface name": "Symbol", "Dingbat dec": "177", "Dingbat hex": "B1", "Unicode dec": "177", "Unicode hex": "B1" },
  { "Typeface name": "Symbol", "Dingbat dec": "178", "Dingbat hex": "B2", "Unicode dec": "8243", "Unicode hex": "2033" },
  { "Typeface name": "Symbol", "Dingbat dec": "179", "Dingbat hex": "B3", "Unicode dec": "8805", "Unicode hex": "2265" },
  { "Typeface name": "Symbol", "Dingbat dec": "180", "Dingbat hex": "B4", "Unicode dec": "215", "Unicode hex": "D7" },
  { "Typeface name": "Symbol", "Dingbat dec": "181", "Dingbat hex": "B5", "Unicode dec": "8733", "Unicode hex": "221D" },
  { "Typeface name": "Symbol", "Dingbat dec": "182", "Dingbat hex": "B6", "Unicode dec": "8706", "Unicode hex": "2202" },
  { "Typeface name": "Symbol", "Dingbat dec": "183", "Dingbat hex": "B7", "Unicode dec": "8226", "Unicode hex": "2022" },
  { "Typeface name": "Symbol", "Dingbat dec": "184", "Dingbat hex": "B8", "Unicode dec": "247", "Unicode hex": "F7" },
  { "Typeface name": "Symbol", "Dingbat dec": "185", "Dingbat hex": "B9", "Unicode dec": "8800", "Unicode hex": "2260" },
  { "Typeface name": "Symbol", "Dingbat dec": "186", "Dingbat hex": "BA", "Unicode dec": "8801", "Unicode hex": "2261" },
  { "Typeface name": "Symbol", "Dingbat dec": "187", "Dingbat hex": "BB", "Unicode dec": "8776", "Unicode hex": "2248" },
  { "Typeface name": "Symbol", "Dingbat dec": "188", "Dingbat hex": "BC", "Unicode dec": "8230", "Unicode hex": "2026" },
  { "Typeface name": "Symbol", "Dingbat dec": "189", "Dingbat hex": "BD", "Unicode dec": "9168", "Unicode hex": "23D0" },
  { "Typeface name": "Symbol", "Dingbat dec": "190", "Dingbat hex": "BE", "Unicode dec": "9135", "Unicode hex": "23AF" },
  { "Typeface name": "Symbol", "Dingbat dec": "191", "Dingbat hex": "BF", "Unicode dec": "8629", "Unicode hex": "21B5" },
  { "Typeface name": "Symbol", "Dingbat dec": "192", "Dingbat hex": "C0", "Unicode dec": "8501", "Unicode hex": "2135" },
  { "Typeface name": "Symbol", "Dingbat dec": "193", "Dingbat hex": "C1", "Unicode dec": "8465", "Unicode hex": "2111" },
  { "Typeface name": "Symbol", "Dingbat dec": "194", "Dingbat hex": "C2", "Unicode dec": "8476", "Unicode hex": "211C" },
  { "Typeface name": "Symbol", "Dingbat dec": "195", "Dingbat hex": "C3", "Unicode dec": "8472", "Unicode hex": "2118" },
  { "Typeface name": "Symbol", "Dingbat dec": "196", "Dingbat hex": "C4", "Unicode dec": "8855", "Unicode hex": "2297" },
  { "Typeface name": "Symbol", "Dingbat dec": "197", "Dingbat hex": "C5", "Unicode dec": "8853", "Unicode hex": "2295" },
  { "Typeface name": "Symbol", "Dingbat dec": "198", "Dingbat hex": "C6", "Unicode dec": "8709", "Unicode hex": "2205" },
  { "Typeface name": "Symbol", "Dingbat dec": "199", "Dingbat hex": "C7", "Unicode dec": "8745", "Unicode hex": "2229" },
  { "Typeface name": "Symbol", "Dingbat dec": "200", "Dingbat hex": "C8", "Unicode dec": "8746", "Unicode hex": "222A" },
  { "Typeface name": "Symbol", "Dingbat dec": "201", "Dingbat hex": "C9", "Unicode dec": "8835", "Unicode hex": "2283" },
  { "Typeface name": "Symbol", "Dingbat dec": "202", "Dingbat hex": "CA", "Unicode dec": "8839", "Unicode hex": "2287" },
  { "Typeface name": "Symbol", "Dingbat dec": "203", "Dingbat hex": "CB", "Unicode dec": "8836", "Unicode hex": "2284" },
  { "Typeface name": "Symbol", "Dingbat dec": "204", "Dingbat hex": "CC", "Unicode dec": "8834", "Unicode hex": "2282" },
  { "Typeface name": "Symbol", "Dingbat dec": "205", "Dingbat hex": "CD", "Unicode dec": "8838", "Unicode hex": "2286" },
  { "Typeface name": "Symbol", "Dingbat dec": "206", "Dingbat hex": "CE", "Unicode dec": "8712", "Unicode hex": "2208" },
  { "Typeface name": "Symbol", "Dingbat dec": "207", "Dingbat hex": "CF", "Unicode dec": "8713", "Unicode hex": "2209" },
  { "Typeface name": "Symbol", "Dingbat dec": "208", "Dingbat hex": "D0", "Unicode dec": "8736", "Unicode hex": "2220" },
  { "Typeface name": "Symbol", "Dingbat dec": "209", "Dingbat hex": "D1", "Unicode dec": "8711", "Unicode hex": "2207" },
  { "Typeface name": "Symbol", "Dingbat dec": "210", "Dingbat hex": "D2", "Unicode dec": "174", "Unicode hex": "AE" },
  { "Typeface name": "Symbol", "Dingbat dec": "211", "Dingbat hex": "D3", "Unicode dec": "169", "Unicode hex": "A9" },
  { "Typeface name": "Symbol", "Dingbat dec": "212", "Dingbat hex": "D4", "Unicode dec": "8482", "Unicode hex": "2122" },
  { "Typeface name": "Symbol", "Dingbat dec": "213", "Dingbat hex": "D5", "Unicode dec": "8719", "Unicode hex": "220F" },
  { "Typeface name": "Symbol", "Dingbat dec": "214", "Dingbat hex": "D6", "Unicode dec": "8730", "Unicode hex": "221A" },
  { "Typeface name": "Symbol", "Dingbat dec": "215", "Dingbat hex": "D7", "Unicode dec": "8901", "Unicode hex": "22C5" },
  { "Typeface name": "Symbol", "Dingbat dec": "216", "Dingbat hex": "D8", "Unicode dec": "172", "Unicode hex": "AC" },
  { "Typeface name": "Symbol", "Dingbat dec": "217", "Dingbat hex": "D9", "Unicode dec": "8743", "Unicode hex": "2227" },
  { "Typeface name": "Symbol", "Dingbat dec": "218", "Dingbat hex": "DA", "Unicode dec": "8744", "Unicode hex": "2228" },
  { "Typeface name": "Symbol", "Dingbat dec": "219", "Dingbat hex": "DB", "Unicode dec": "8660", "Unicode hex": "21D4" },
  { "Typeface name": "Symbol", "Dingbat dec": "220", "Dingbat hex": "DC", "Unicode dec": "8656", "Unicode hex": "21D0" },
  { "Typeface name": "Symbol", "Dingbat dec": "221", "Dingbat hex": "DD", "Unicode dec": "8657", "Unicode hex": "21D1" },
  { "Typeface name": "Symbol", "Dingbat dec": "222", "Dingbat hex": "DE", "Unicode dec": "8658", "Unicode hex": "21D2" },
  { "Typeface name": "Symbol", "Dingbat dec": "223", "Dingbat hex": "DF", "Unicode dec": "8659", "Unicode hex": "21D3" },
  { "Typeface name": "Symbol", "Dingbat dec": "224", "Dingbat hex": "E0", "Unicode dec": "9674", "Unicode hex": "25CA" },
  { "Typeface name": "Symbol", "Dingbat dec": "225", "Dingbat hex": "E1", "Unicode dec": "12296", "Unicode hex": "3008" },
  { "Typeface name": "Symbol", "Dingbat dec": "226", "Dingbat hex": "E2", "Unicode dec": "174", "Unicode hex": "AE" },
  { "Typeface name": "Symbol", "Dingbat dec": "227", "Dingbat hex": "E3", "Unicode dec": "169", "Unicode hex": "A9" },
  { "Typeface name": "Symbol", "Dingbat dec": "228", "Dingbat hex": "E4", "Unicode dec": "8482", "Unicode hex": "2122" },
  { "Typeface name": "Symbol", "Dingbat dec": "229", "Dingbat hex": "E5", "Unicode dec": "8721", "Unicode hex": "2211" },
  { "Typeface name": "Symbol", "Dingbat dec": "230", "Dingbat hex": "E6", "Unicode dec": "9115", "Unicode hex": "239B" },
  { "Typeface name": "Symbol", "Dingbat dec": "231", "Dingbat hex": "E7", "Unicode dec": "9116", "Unicode hex": "239C" },
  { "Typeface name": "Symbol", "Dingbat dec": "232", "Dingbat hex": "E8", "Unicode dec": "9117", "Unicode hex": "239D" },
  { "Typeface name": "Symbol", "Dingbat dec": "233", "Dingbat hex": "E9", "Unicode dec": "9121", "Unicode hex": "23A1" },
  { "Typeface name": "Symbol", "Dingbat dec": "234", "Dingbat hex": "EA", "Unicode dec": "9122", "Unicode hex": "23A2" },
  { "Typeface name": "Symbol", "Dingbat dec": "235", "Dingbat hex": "EB", "Unicode dec": "9123", "Unicode hex": "23A3" },
  { "Typeface name": "Symbol", "Dingbat dec": "236", "Dingbat hex": "EC", "Unicode dec": "9127", "Unicode hex": "23A7" },
  { "Typeface name": "Symbol", "Dingbat dec": "237", "Dingbat hex": "ED", "Unicode dec": "9128", "Unicode hex": "23A8" },
  { "Typeface name": "Symbol", "Dingbat dec": "238", "Dingbat hex": "EE", "Unicode dec": "9129", "Unicode hex": "23A9" },
  { "Typeface name": "Symbol", "Dingbat dec": "239", "Dingbat hex": "EF", "Unicode dec": "9130", "Unicode hex": "23AA" },
  { "Typeface name": "Symbol", "Dingbat dec": "240", "Dingbat hex": "F0", "Unicode dec": "63743", "Unicode hex": "F8FF" },
  { "Typeface name": "Symbol", "Dingbat dec": "241", "Dingbat hex": "F1", "Unicode dec": "12297", "Unicode hex": "3009" },
  { "Typeface name": "Symbol", "Dingbat dec": "242", "Dingbat hex": "F2", "Unicode dec": "8747", "Unicode hex": "222B" },
  { "Typeface name": "Symbol", "Dingbat dec": "243", "Dingbat hex": "F3", "Unicode dec": "8992", "Unicode hex": "2320" },
  { "Typeface name": "Symbol", "Dingbat dec": "244", "Dingbat hex": "F4", "Unicode dec": "9134", "Unicode hex": "23AE" },
  { "Typeface name": "Symbol", "Dingbat dec": "245", "Dingbat hex": "F5", "Unicode dec": "8993", "Unicode hex": "2321" },
  { "Typeface name": "Symbol", "Dingbat dec": "246", "Dingbat hex": "F6", "Unicode dec": "9118", "Unicode hex": "239E" },
  { "Typeface name": "Symbol", "Dingbat dec": "247", "Dingbat hex": "F7", "Unicode dec": "9119", "Unicode hex": "239F" },
  { "Typeface name": "Symbol", "Dingbat dec": "248", "Dingbat hex": "F8", "Unicode dec": "9120", "Unicode hex": "23A0" },
  { "Typeface name": "Symbol", "Dingbat dec": "249", "Dingbat hex": "F9", "Unicode dec": "9124", "Unicode hex": "23A4" },
  { "Typeface name": "Symbol", "Dingbat dec": "250", "Dingbat hex": "FA", "Unicode dec": "9125", "Unicode hex": "23A5" },
  { "Typeface name": "Symbol", "Dingbat dec": "251", "Dingbat hex": "FB", "Unicode dec": "9126", "Unicode hex": "23A6" },
  { "Typeface name": "Symbol", "Dingbat dec": "252", "Dingbat hex": "FC", "Unicode dec": "9131", "Unicode hex": "23AB" },
  { "Typeface name": "Symbol", "Dingbat dec": "253", "Dingbat hex": "FD", "Unicode dec": "9132", "Unicode hex": "23AC" },
  { "Typeface name": "Symbol", "Dingbat dec": "254", "Dingbat hex": "FE", "Unicode dec": "9133", "Unicode hex": "23AD" },
  { "Typeface name": "Webdings", "Dingbat dec": "32", "Dingbat hex": "20", "Unicode dec": "32", "Unicode hex": "20" },
  { "Typeface name": "Webdings", "Dingbat dec": "33", "Dingbat hex": "21", "Unicode dec": "128375", "Unicode hex": "1F577" },
  { "Typeface name": "Webdings", "Dingbat dec": "34", "Dingbat hex": "22", "Unicode dec": "128376", "Unicode hex": "1F578" },
  { "Typeface name": "Webdings", "Dingbat dec": "35", "Dingbat hex": "23", "Unicode dec": "128370", "Unicode hex": "1F572" },
  { "Typeface name": "Webdings", "Dingbat dec": "36", "Dingbat hex": "24", "Unicode dec": "128374", "Unicode hex": "1F576" },
  { "Typeface name": "Webdings", "Dingbat dec": "37", "Dingbat hex": "25", "Unicode dec": "127942", "Unicode hex": "1F3C6" },
  { "Typeface name": "Webdings", "Dingbat dec": "38", "Dingbat hex": "26", "Unicode dec": "127894", "Unicode hex": "1F396" },
  { "Typeface name": "Webdings", "Dingbat dec": "39", "Dingbat hex": "27", "Unicode dec": "128391", "Unicode hex": "1F587" },
  { "Typeface name": "Webdings", "Dingbat dec": "40", "Dingbat hex": "28", "Unicode dec": "128488", "Unicode hex": "1F5E8" },
  { "Typeface name": "Webdings", "Dingbat dec": "41", "Dingbat hex": "29", "Unicode dec": "128489", "Unicode hex": "1F5E9" },
  { "Typeface name": "Webdings", "Dingbat dec": "42", "Dingbat hex": "2A", "Unicode dec": "128496", "Unicode hex": "1F5F0" },
  { "Typeface name": "Webdings", "Dingbat dec": "43", "Dingbat hex": "2B", "Unicode dec": "128497", "Unicode hex": "1F5F1" },
  { "Typeface name": "Webdings", "Dingbat dec": "44", "Dingbat hex": "2C", "Unicode dec": "127798", "Unicode hex": "1F336" },
  { "Typeface name": "Webdings", "Dingbat dec": "45", "Dingbat hex": "2D", "Unicode dec": "127895", "Unicode hex": "1F397" },
  { "Typeface name": "Webdings", "Dingbat dec": "46", "Dingbat hex": "2E", "Unicode dec": "128638", "Unicode hex": "1F67E" },
  { "Typeface name": "Webdings", "Dingbat dec": "47", "Dingbat hex": "2F", "Unicode dec": "128636", "Unicode hex": "1F67C" },
  { "Typeface name": "Webdings", "Dingbat dec": "48", "Dingbat hex": "30", "Unicode dec": "128469", "Unicode hex": "1F5D5" },
  { "Typeface name": "Webdings", "Dingbat dec": "49", "Dingbat hex": "31", "Unicode dec": "128470", "Unicode hex": "1F5D6" },
  { "Typeface name": "Webdings", "Dingbat dec": "50", "Dingbat hex": "32", "Unicode dec": "128471", "Unicode hex": "1F5D7" },
  { "Typeface name": "Webdings", "Dingbat dec": "51", "Dingbat hex": "33", "Unicode dec": "9204", "Unicode hex": "23F4" },
  { "Typeface name": "Webdings", "Dingbat dec": "52", "Dingbat hex": "34", "Unicode dec": "9205", "Unicode hex": "23F5" },
  { "Typeface name": "Webdings", "Dingbat dec": "53", "Dingbat hex": "35", "Unicode dec": "9206", "Unicode hex": "23F6" },
  { "Typeface name": "Webdings", "Dingbat dec": "54", "Dingbat hex": "36", "Unicode dec": "9207", "Unicode hex": "23F7" },
  { "Typeface name": "Webdings", "Dingbat dec": "55", "Dingbat hex": "37", "Unicode dec": "9194", "Unicode hex": "23EA" },
  { "Typeface name": "Webdings", "Dingbat dec": "56", "Dingbat hex": "38", "Unicode dec": "9193", "Unicode hex": "23E9" },
  { "Typeface name": "Webdings", "Dingbat dec": "57", "Dingbat hex": "39", "Unicode dec": "9198", "Unicode hex": "23EE" },
  { "Typeface name": "Webdings", "Dingbat dec": "58", "Dingbat hex": "3A", "Unicode dec": "9197", "Unicode hex": "23ED" },
  { "Typeface name": "Webdings", "Dingbat dec": "59", "Dingbat hex": "3B", "Unicode dec": "9208", "Unicode hex": "23F8" },
  { "Typeface name": "Webdings", "Dingbat dec": "60", "Dingbat hex": "3C", "Unicode dec": "9209", "Unicode hex": "23F9" },
  { "Typeface name": "Webdings", "Dingbat dec": "61", "Dingbat hex": "3D", "Unicode dec": "9210", "Unicode hex": "23FA" },
  { "Typeface name": "Webdings", "Dingbat dec": "62", "Dingbat hex": "3E", "Unicode dec": "128474", "Unicode hex": "1F5DA" },
  { "Typeface name": "Webdings", "Dingbat dec": "63", "Dingbat hex": "3F", "Unicode dec": "128499", "Unicode hex": "1F5F3" },
  { "Typeface name": "Webdings", "Dingbat dec": "64", "Dingbat hex": "40", "Unicode dec": "128736", "Unicode hex": "1F6E0" },
  { "Typeface name": "Webdings", "Dingbat dec": "65", "Dingbat hex": "41", "Unicode dec": "127959", "Unicode hex": "1F3D7" },
  { "Typeface name": "Webdings", "Dingbat dec": "66", "Dingbat hex": "42", "Unicode dec": "127960", "Unicode hex": "1F3D8" },
  { "Typeface name": "Webdings", "Dingbat dec": "67", "Dingbat hex": "43", "Unicode dec": "127961", "Unicode hex": "1F3D9" },
  { "Typeface name": "Webdings", "Dingbat dec": "68", "Dingbat hex": "44", "Unicode dec": "127962", "Unicode hex": "1F3DA" },
  { "Typeface name": "Webdings", "Dingbat dec": "69", "Dingbat hex": "45", "Unicode dec": "127964", "Unicode hex": "1F3DC" },
  { "Typeface name": "Webdings", "Dingbat dec": "70", "Dingbat hex": "46", "Unicode dec": "127981", "Unicode hex": "1F3ED" },
  { "Typeface name": "Webdings", "Dingbat dec": "71", "Dingbat hex": "47", "Unicode dec": "127963", "Unicode hex": "1F3DB" },
  { "Typeface name": "Webdings", "Dingbat dec": "72", "Dingbat hex": "48", "Unicode dec": "127968", "Unicode hex": "1F3E0" },
  { "Typeface name": "Webdings", "Dingbat dec": "73", "Dingbat hex": "49", "Unicode dec": "127958", "Unicode hex": "1F3D6" },
  { "Typeface name": "Webdings", "Dingbat dec": "74", "Dingbat hex": "4A", "Unicode dec": "127965", "Unicode hex": "1F3DD" },
  { "Typeface name": "Webdings", "Dingbat dec": "75", "Dingbat hex": "4B", "Unicode dec": "128739", "Unicode hex": "1F6E3" },
  { "Typeface name": "Webdings", "Dingbat dec": "76", "Dingbat hex": "4C", "Unicode dec": "128269", "Unicode hex": "1F50D" },
  { "Typeface name": "Webdings", "Dingbat dec": "77", "Dingbat hex": "4D", "Unicode dec": "127956", "Unicode hex": "1F3D4" },
  { "Typeface name": "Webdings", "Dingbat dec": "78", "Dingbat hex": "4E", "Unicode dec": "128065", "Unicode hex": "1F441" },
  { "Typeface name": "Webdings", "Dingbat dec": "79", "Dingbat hex": "4F", "Unicode dec": "128066", "Unicode hex": "1F442" },
  { "Typeface name": "Webdings", "Dingbat dec": "80", "Dingbat hex": "50", "Unicode dec": "127966", "Unicode hex": "1F3DE" },
  { "Typeface name": "Webdings", "Dingbat dec": "81", "Dingbat hex": "51", "Unicode dec": "127957", "Unicode hex": "1F3D5" },
  { "Typeface name": "Webdings", "Dingbat dec": "82", "Dingbat hex": "52", "Unicode dec": "128740", "Unicode hex": "1F6E4" },
  { "Typeface name": "Webdings", "Dingbat dec": "83", "Dingbat hex": "53", "Unicode dec": "127967", "Unicode hex": "1F3DF" },
  { "Typeface name": "Webdings", "Dingbat dec": "84", "Dingbat hex": "54", "Unicode dec": "128755", "Unicode hex": "1F6F3" },
  { "Typeface name": "Webdings", "Dingbat dec": "85", "Dingbat hex": "55", "Unicode dec": "128364", "Unicode hex": "1F56C" },
  { "Typeface name": "Webdings", "Dingbat dec": "86", "Dingbat hex": "56", "Unicode dec": "128363", "Unicode hex": "1F56B" },
  { "Typeface name": "Webdings", "Dingbat dec": "87", "Dingbat hex": "57", "Unicode dec": "128360", "Unicode hex": "1F568" },
  { "Typeface name": "Webdings", "Dingbat dec": "88", "Dingbat hex": "58", "Unicode dec": "128264", "Unicode hex": "1F508" },
  { "Typeface name": "Webdings", "Dingbat dec": "89", "Dingbat hex": "59", "Unicode dec": "127892", "Unicode hex": "1F394" },
  { "Typeface name": "Webdings", "Dingbat dec": "90", "Dingbat hex": "5A", "Unicode dec": "127893", "Unicode hex": "1F395" },
  { "Typeface name": "Webdings", "Dingbat dec": "91", "Dingbat hex": "5B", "Unicode dec": "128492", "Unicode hex": "1F5EC" },
  { "Typeface name": "Webdings", "Dingbat dec": "92", "Dingbat hex": "5C", "Unicode dec": "128637", "Unicode hex": "1F67D" },
  { "Typeface name": "Webdings", "Dingbat dec": "93", "Dingbat hex": "5D", "Unicode dec": "128493", "Unicode hex": "1F5ED" },
  { "Typeface name": "Webdings", "Dingbat dec": "94", "Dingbat hex": "5E", "Unicode dec": "128490", "Unicode hex": "1F5EA" },
  { "Typeface name": "Webdings", "Dingbat dec": "95", "Dingbat hex": "5F", "Unicode dec": "128491", "Unicode hex": "1F5EB" },
  { "Typeface name": "Webdings", "Dingbat dec": "96", "Dingbat hex": "60", "Unicode dec": "11156", "Unicode hex": "2B94" },
  { "Typeface name": "Webdings", "Dingbat dec": "97", "Dingbat hex": "61", "Unicode dec": "10004", "Unicode hex": "2714" },
  { "Typeface name": "Webdings", "Dingbat dec": "98", "Dingbat hex": "62", "Unicode dec": "128690", "Unicode hex": "1F6B2" },
  { "Typeface name": "Webdings", "Dingbat dec": "99", "Dingbat hex": "63", "Unicode dec": "11036", "Unicode hex": "2B1C" },
  { "Typeface name": "Webdings", "Dingbat dec": "100", "Dingbat hex": "64", "Unicode dec": "128737", "Unicode hex": "1F6E1" },
  { "Typeface name": "Webdings", "Dingbat dec": "101", "Dingbat hex": "65", "Unicode dec": "128230", "Unicode hex": "1F4E6" },
  { "Typeface name": "Webdings", "Dingbat dec": "102", "Dingbat hex": "66", "Unicode dec": "128753", "Unicode hex": "1F6F1" },
  { "Typeface name": "Webdings", "Dingbat dec": "103", "Dingbat hex": "67", "Unicode dec": "11035", "Unicode hex": "2B1B" },
  { "Typeface name": "Webdings", "Dingbat dec": "104", "Dingbat hex": "68", "Unicode dec": "128657", "Unicode hex": "1F691" },
  { "Typeface name": "Webdings", "Dingbat dec": "105", "Dingbat hex": "69", "Unicode dec": "128712", "Unicode hex": "1F6C8" },
  { "Typeface name": "Webdings", "Dingbat dec": "106", "Dingbat hex": "6A", "Unicode dec": "128745", "Unicode hex": "1F6E9" },
  { "Typeface name": "Webdings", "Dingbat dec": "107", "Dingbat hex": "6B", "Unicode dec": "128752", "Unicode hex": "1F6F0" },
  { "Typeface name": "Webdings", "Dingbat dec": "108", "Dingbat hex": "6C", "Unicode dec": "128968", "Unicode hex": "1F7C8" },
  { "Typeface name": "Webdings", "Dingbat dec": "109", "Dingbat hex": "6D", "Unicode dec": "128372", "Unicode hex": "1F574" },
  { "Typeface name": "Webdings", "Dingbat dec": "110", "Dingbat hex": "6E", "Unicode dec": "11044", "Unicode hex": "2B24" },
  { "Typeface name": "Webdings", "Dingbat dec": "111", "Dingbat hex": "6F", "Unicode dec": "128741", "Unicode hex": "1F6E5" },
  { "Typeface name": "Webdings", "Dingbat dec": "112", "Dingbat hex": "70", "Unicode dec": "128660", "Unicode hex": "1F694" },
  { "Typeface name": "Webdings", "Dingbat dec": "113", "Dingbat hex": "71", "Unicode dec": "128472", "Unicode hex": "1F5D8" },
  { "Typeface name": "Webdings", "Dingbat dec": "114", "Dingbat hex": "72", "Unicode dec": "128473", "Unicode hex": "1F5D9" },
  { "Typeface name": "Webdings", "Dingbat dec": "115", "Dingbat hex": "73", "Unicode dec": "10067", "Unicode hex": "2753" },
  { "Typeface name": "Webdings", "Dingbat dec": "116", "Dingbat hex": "74", "Unicode dec": "128754", "Unicode hex": "1F6F2" },
  { "Typeface name": "Webdings", "Dingbat dec": "117", "Dingbat hex": "75", "Unicode dec": "128647", "Unicode hex": "1F687" },
  { "Typeface name": "Webdings", "Dingbat dec": "118", "Dingbat hex": "76", "Unicode dec": "128653", "Unicode hex": "1F68D" },
  { "Typeface name": "Webdings", "Dingbat dec": "119", "Dingbat hex": "77", "Unicode dec": "9971", "Unicode hex": "26F3" },
  { "Typeface name": "Webdings", "Dingbat dec": "120", "Dingbat hex": "78", "Unicode dec": "10680", "Unicode hex": "29B8" },
  { "Typeface name": "Webdings", "Dingbat dec": "121", "Dingbat hex": "79", "Unicode dec": "8854", "Unicode hex": "2296" },
  { "Typeface name": "Webdings", "Dingbat dec": "122", "Dingbat hex": "7A", "Unicode dec": "128685", "Unicode hex": "1F6AD" },
  { "Typeface name": "Webdings", "Dingbat dec": "123", "Dingbat hex": "7B", "Unicode dec": "128494", "Unicode hex": "1F5EE" },
  { "Typeface name": "Webdings", "Dingbat dec": "124", "Dingbat hex": "7C", "Unicode dec": "9168", "Unicode hex": "23D0" },
  { "Typeface name": "Webdings", "Dingbat dec": "125", "Dingbat hex": "7D", "Unicode dec": "128495", "Unicode hex": "1F5EF" },
  { "Typeface name": "Webdings", "Dingbat dec": "126", "Dingbat hex": "7E", "Unicode dec": "128498", "Unicode hex": "1F5F2" },
  { "Typeface name": "Webdings", "Dingbat dec": "128", "Dingbat hex": "80", "Unicode dec": "128697", "Unicode hex": "1F6B9" },
  { "Typeface name": "Webdings", "Dingbat dec": "129", "Dingbat hex": "81", "Unicode dec": "128698", "Unicode hex": "1F6BA" },
  { "Typeface name": "Webdings", "Dingbat dec": "130", "Dingbat hex": "82", "Unicode dec": "128713", "Unicode hex": "1F6C9" },
  { "Typeface name": "Webdings", "Dingbat dec": "131", "Dingbat hex": "83", "Unicode dec": "128714", "Unicode hex": "1F6CA" },
  { "Typeface name": "Webdings", "Dingbat dec": "132", "Dingbat hex": "84", "Unicode dec": "128700", "Unicode hex": "1F6BC" },
  { "Typeface name": "Webdings", "Dingbat dec": "133", "Dingbat hex": "85", "Unicode dec": "128125", "Unicode hex": "1F47D" },
  { "Typeface name": "Webdings", "Dingbat dec": "134", "Dingbat hex": "86", "Unicode dec": "127947", "Unicode hex": "1F3CB" },
  { "Typeface name": "Webdings", "Dingbat dec": "135", "Dingbat hex": "87", "Unicode dec": "9975", "Unicode hex": "26F7" },
  { "Typeface name": "Webdings", "Dingbat dec": "136", "Dingbat hex": "88", "Unicode dec": "127938", "Unicode hex": "1F3C2" },
  { "Typeface name": "Webdings", "Dingbat dec": "137", "Dingbat hex": "89", "Unicode dec": "127948", "Unicode hex": "1F3CC" },
  { "Typeface name": "Webdings", "Dingbat dec": "138", "Dingbat hex": "8A", "Unicode dec": "127946", "Unicode hex": "1F3CA" },
  { "Typeface name": "Webdings", "Dingbat dec": "139", "Dingbat hex": "8B", "Unicode dec": "127940", "Unicode hex": "1F3C4" },
  { "Typeface name": "Webdings", "Dingbat dec": "140", "Dingbat hex": "8C", "Unicode dec": "127949", "Unicode hex": "1F3CD" },
  { "Typeface name": "Webdings", "Dingbat dec": "141", "Dingbat hex": "8D", "Unicode dec": "127950", "Unicode hex": "1F3CE" },
  { "Typeface name": "Webdings", "Dingbat dec": "142", "Dingbat hex": "8E", "Unicode dec": "128664", "Unicode hex": "1F698" },
  { "Typeface name": "Webdings", "Dingbat dec": "143", "Dingbat hex": "8F", "Unicode dec": "128480", "Unicode hex": "1F5E0" },
  { "Typeface name": "Webdings", "Dingbat dec": "144", "Dingbat hex": "90", "Unicode dec": "128738", "Unicode hex": "1F6E2" },
  { "Typeface name": "Webdings", "Dingbat dec": "145", "Dingbat hex": "91", "Unicode dec": "128176", "Unicode hex": "1F4B0" },
  { "Typeface name": "Webdings", "Dingbat dec": "146", "Dingbat hex": "92", "Unicode dec": "127991", "Unicode hex": "1F3F7" },
  { "Typeface name": "Webdings", "Dingbat dec": "147", "Dingbat hex": "93", "Unicode dec": "128179", "Unicode hex": "1F4B3" },
  { "Typeface name": "Webdings", "Dingbat dec": "148", "Dingbat hex": "94", "Unicode dec": "128106", "Unicode hex": "1F46A" },
  { "Typeface name": "Webdings", "Dingbat dec": "149", "Dingbat hex": "95", "Unicode dec": "128481", "Unicode hex": "1F5E1" },
  { "Typeface name": "Webdings", "Dingbat dec": "150", "Dingbat hex": "96", "Unicode dec": "128482", "Unicode hex": "1F5E2" },
  { "Typeface name": "Webdings", "Dingbat dec": "151", "Dingbat hex": "97", "Unicode dec": "128483", "Unicode hex": "1F5E3" },
  { "Typeface name": "Webdings", "Dingbat dec": "152", "Dingbat hex": "98", "Unicode dec": "10031", "Unicode hex": "272F" },
  { "Typeface name": "Webdings", "Dingbat dec": "153", "Dingbat hex": "99", "Unicode dec": "128388", "Unicode hex": "1F584" },
  { "Typeface name": "Webdings", "Dingbat dec": "154", "Dingbat hex": "9A", "Unicode dec": "128389", "Unicode hex": "1F585" },
  { "Typeface name": "Webdings", "Dingbat dec": "155", "Dingbat hex": "9B", "Unicode dec": "128387", "Unicode hex": "1F583" },
  { "Typeface name": "Webdings", "Dingbat dec": "156", "Dingbat hex": "9C", "Unicode dec": "128390", "Unicode hex": "1F586" },
  { "Typeface name": "Webdings", "Dingbat dec": "157", "Dingbat hex": "9D", "Unicode dec": "128441", "Unicode hex": "1F5B9" },
  { "Typeface name": "Webdings", "Dingbat dec": "158", "Dingbat hex": "9E", "Unicode dec": "128442", "Unicode hex": "1F5BA" },
  { "Typeface name": "Webdings", "Dingbat dec": "159", "Dingbat hex": "9F", "Unicode dec": "128443", "Unicode hex": "1F5BB" },
  { "Typeface name": "Webdings", "Dingbat dec": "160", "Dingbat hex": "A0", "Unicode dec": "128373", "Unicode hex": "1F575" },
  { "Typeface name": "Webdings", "Dingbat dec": "161", "Dingbat hex": "A1", "Unicode dec": "128368", "Unicode hex": "1F570" },
  { "Typeface name": "Webdings", "Dingbat dec": "162", "Dingbat hex": "A2", "Unicode dec": "128445", "Unicode hex": "1F5BD" },
  { "Typeface name": "Webdings", "Dingbat dec": "163", "Dingbat hex": "A3", "Unicode dec": "128446", "Unicode hex": "1F5BE" },
  { "Typeface name": "Webdings", "Dingbat dec": "164", "Dingbat hex": "A4", "Unicode dec": "128203", "Unicode hex": "1F4CB" },
  { "Typeface name": "Webdings", "Dingbat dec": "165", "Dingbat hex": "A5", "Unicode dec": "128466", "Unicode hex": "1F5D2" },
  { "Typeface name": "Webdings", "Dingbat dec": "166", "Dingbat hex": "A6", "Unicode dec": "128467", "Unicode hex": "1F5D3" },
  { "Typeface name": "Webdings", "Dingbat dec": "167", "Dingbat hex": "A7", "Unicode dec": "128366", "Unicode hex": "1F56E" },
  { "Typeface name": "Webdings", "Dingbat dec": "168", "Dingbat hex": "A8", "Unicode dec": "128218", "Unicode hex": "1F4DA" },
  { "Typeface name": "Webdings", "Dingbat dec": "169", "Dingbat hex": "A9", "Unicode dec": "128478", "Unicode hex": "1F5DE" },
  { "Typeface name": "Webdings", "Dingbat dec": "170", "Dingbat hex": "AA", "Unicode dec": "128479", "Unicode hex": "1F5DF" },
  { "Typeface name": "Webdings", "Dingbat dec": "171", "Dingbat hex": "AB", "Unicode dec": "128451", "Unicode hex": "1F5C3" },
  { "Typeface name": "Webdings", "Dingbat dec": "172", "Dingbat hex": "AC", "Unicode dec": "128450", "Unicode hex": "1F5C2" },
  { "Typeface name": "Webdings", "Dingbat dec": "173", "Dingbat hex": "AD", "Unicode dec": "128444", "Unicode hex": "1F5BC" },
  { "Typeface name": "Webdings", "Dingbat dec": "174", "Dingbat hex": "AE", "Unicode dec": "127917", "Unicode hex": "1F3AD" },
  { "Typeface name": "Webdings", "Dingbat dec": "175", "Dingbat hex": "AF", "Unicode dec": "127900", "Unicode hex": "1F39C" },
  { "Typeface name": "Webdings", "Dingbat dec": "176", "Dingbat hex": "B0", "Unicode dec": "127896", "Unicode hex": "1F398" },
  { "Typeface name": "Webdings", "Dingbat dec": "177", "Dingbat hex": "B1", "Unicode dec": "127897", "Unicode hex": "1F399" },
  { "Typeface name": "Webdings", "Dingbat dec": "178", "Dingbat hex": "B2", "Unicode dec": "127911", "Unicode hex": "1F3A7" },
  { "Typeface name": "Webdings", "Dingbat dec": "179", "Dingbat hex": "B3", "Unicode dec": "128191", "Unicode hex": "1F4BF" },
  { "Typeface name": "Webdings", "Dingbat dec": "180", "Dingbat hex": "B4", "Unicode dec": "127902", "Unicode hex": "1F39E" },
  { "Typeface name": "Webdings", "Dingbat dec": "181", "Dingbat hex": "B5", "Unicode dec": "128247", "Unicode hex": "1F4F7" },
  { "Typeface name": "Webdings", "Dingbat dec": "182", "Dingbat hex": "B6", "Unicode dec": "127903", "Unicode hex": "1F39F" },
  { "Typeface name": "Webdings", "Dingbat dec": "183", "Dingbat hex": "B7", "Unicode dec": "127916", "Unicode hex": "1F3AC" },
  { "Typeface name": "Webdings", "Dingbat dec": "184", "Dingbat hex": "B8", "Unicode dec": "128253", "Unicode hex": "1F4FD" },
  { "Typeface name": "Webdings", "Dingbat dec": "185", "Dingbat hex": "B9", "Unicode dec": "128249", "Unicode hex": "1F4F9" },
  { "Typeface name": "Webdings", "Dingbat dec": "186", "Dingbat hex": "BA", "Unicode dec": "128254", "Unicode hex": "1F4FE" },
  { "Typeface name": "Webdings", "Dingbat dec": "187", "Dingbat hex": "BB", "Unicode dec": "128251", "Unicode hex": "1F4FB" },
  { "Typeface name": "Webdings", "Dingbat dec": "188", "Dingbat hex": "BC", "Unicode dec": "127898", "Unicode hex": "1F39A" },
  { "Typeface name": "Webdings", "Dingbat dec": "189", "Dingbat hex": "BD", "Unicode dec": "127899", "Unicode hex": "1F39B" },
  { "Typeface name": "Webdings", "Dingbat dec": "190", "Dingbat hex": "BE", "Unicode dec": "128250", "Unicode hex": "1F4FA" },
  { "Typeface name": "Webdings", "Dingbat dec": "191", "Dingbat hex": "BF", "Unicode dec": "128187", "Unicode hex": "1F4BB" },
  { "Typeface name": "Webdings", "Dingbat dec": "192", "Dingbat hex": "C0", "Unicode dec": "128421", "Unicode hex": "1F5A5" },
  { "Typeface name": "Webdings", "Dingbat dec": "193", "Dingbat hex": "C1", "Unicode dec": "128422", "Unicode hex": "1F5A6" },
  { "Typeface name": "Webdings", "Dingbat dec": "194", "Dingbat hex": "C2", "Unicode dec": "128423", "Unicode hex": "1F5A7" },
  { "Typeface name": "Webdings", "Dingbat dec": "195", "Dingbat hex": "C3", "Unicode dec": "128377", "Unicode hex": "1F579" },
  { "Typeface name": "Webdings", "Dingbat dec": "196", "Dingbat hex": "C4", "Unicode dec": "127918", "Unicode hex": "1F3AE" },
  { "Typeface name": "Webdings", "Dingbat dec": "197", "Dingbat hex": "C5", "Unicode dec": "128379", "Unicode hex": "1F57B" },
  { "Typeface name": "Webdings", "Dingbat dec": "198", "Dingbat hex": "C6", "Unicode dec": "128380", "Unicode hex": "1F57C" },
  { "Typeface name": "Webdings", "Dingbat dec": "199", "Dingbat hex": "C7", "Unicode dec": "128223", "Unicode hex": "1F4DF" },
  { "Typeface name": "Webdings", "Dingbat dec": "200", "Dingbat hex": "C8", "Unicode dec": "128385", "Unicode hex": "1F581" },
  { "Typeface name": "Webdings", "Dingbat dec": "201", "Dingbat hex": "C9", "Unicode dec": "128384", "Unicode hex": "1F580" },
  { "Typeface name": "Webdings", "Dingbat dec": "202", "Dingbat hex": "CA", "Unicode dec": "128424", "Unicode hex": "1F5A8" },
  { "Typeface name": "Webdings", "Dingbat dec": "203", "Dingbat hex": "CB", "Unicode dec": "128425", "Unicode hex": "1F5A9" },
  { "Typeface name": "Webdings", "Dingbat dec": "204", "Dingbat hex": "CC", "Unicode dec": "128447", "Unicode hex": "1F5BF" },
  { "Typeface name": "Webdings", "Dingbat dec": "205", "Dingbat hex": "CD", "Unicode dec": "128426", "Unicode hex": "1F5AA" },
  { "Typeface name": "Webdings", "Dingbat dec": "206", "Dingbat hex": "CE", "Unicode dec": "128476", "Unicode hex": "1F5DC" },
  { "Typeface name": "Webdings", "Dingbat dec": "207", "Dingbat hex": "CF", "Unicode dec": "128274", "Unicode hex": "1F512" },
  { "Typeface name": "Webdings", "Dingbat dec": "208", "Dingbat hex": "D0", "Unicode dec": "128275", "Unicode hex": "1F513" },
  { "Typeface name": "Webdings", "Dingbat dec": "209", "Dingbat hex": "D1", "Unicode dec": "128477", "Unicode hex": "1F5DD" },
  { "Typeface name": "Webdings", "Dingbat dec": "210", "Dingbat hex": "D2", "Unicode dec": "128229", "Unicode hex": "1F4E5" },
  { "Typeface name": "Webdings", "Dingbat dec": "211", "Dingbat hex": "D3", "Unicode dec": "128228", "Unicode hex": "1F4E4" },
  { "Typeface name": "Webdings", "Dingbat dec": "212", "Dingbat hex": "D4", "Unicode dec": "128371", "Unicode hex": "1F573" },
  { "Typeface name": "Webdings", "Dingbat dec": "213", "Dingbat hex": "D5", "Unicode dec": "127779", "Unicode hex": "1F323" },
  { "Typeface name": "Webdings", "Dingbat dec": "214", "Dingbat hex": "D6", "Unicode dec": "127780", "Unicode hex": "1F324" },
  { "Typeface name": "Webdings", "Dingbat dec": "215", "Dingbat hex": "D7", "Unicode dec": "127781", "Unicode hex": "1F325" },
  { "Typeface name": "Webdings", "Dingbat dec": "216", "Dingbat hex": "D8", "Unicode dec": "127782", "Unicode hex": "1F326" },
  { "Typeface name": "Webdings", "Dingbat dec": "217", "Dingbat hex": "D9", "Unicode dec": "9729", "Unicode hex": "2601" },
  { "Typeface name": "Webdings", "Dingbat dec": "218", "Dingbat hex": "DA", "Unicode dec": "127784", "Unicode hex": "1F328" },
  { "Typeface name": "Webdings", "Dingbat dec": "219", "Dingbat hex": "DB", "Unicode dec": "127783", "Unicode hex": "1F327" },
  { "Typeface name": "Webdings", "Dingbat dec": "220", "Dingbat hex": "DC", "Unicode dec": "127785", "Unicode hex": "1F329" },
  { "Typeface name": "Webdings", "Dingbat dec": "221", "Dingbat hex": "DD", "Unicode dec": "127786", "Unicode hex": "1F32A" },
  { "Typeface name": "Webdings", "Dingbat dec": "222", "Dingbat hex": "DE", "Unicode dec": "127788", "Unicode hex": "1F32C" },
  { "Typeface name": "Webdings", "Dingbat dec": "223", "Dingbat hex": "DF", "Unicode dec": "127787", "Unicode hex": "1F32B" },
  { "Typeface name": "Webdings", "Dingbat dec": "224", "Dingbat hex": "E0", "Unicode dec": "127772", "Unicode hex": "1F31C" },
  { "Typeface name": "Webdings", "Dingbat dec": "225", "Dingbat hex": "E1", "Unicode dec": "127777", "Unicode hex": "1F321" },
  { "Typeface name": "Webdings", "Dingbat dec": "226", "Dingbat hex": "E2", "Unicode dec": "128715", "Unicode hex": "1F6CB" },
  { "Typeface name": "Webdings", "Dingbat dec": "227", "Dingbat hex": "E3", "Unicode dec": "128719", "Unicode hex": "1F6CF" },
  { "Typeface name": "Webdings", "Dingbat dec": "228", "Dingbat hex": "E4", "Unicode dec": "127869", "Unicode hex": "1F37D" },
  { "Typeface name": "Webdings", "Dingbat dec": "229", "Dingbat hex": "E5", "Unicode dec": "127864", "Unicode hex": "1F378" },
  { "Typeface name": "Webdings", "Dingbat dec": "230", "Dingbat hex": "E6", "Unicode dec": "128718", "Unicode hex": "1F6CE" },
  { "Typeface name": "Webdings", "Dingbat dec": "231", "Dingbat hex": "E7", "Unicode dec": "128717", "Unicode hex": "1F6CD" },
  { "Typeface name": "Webdings", "Dingbat dec": "232", "Dingbat hex": "E8", "Unicode dec": "9413", "Unicode hex": "24C5" },
  { "Typeface name": "Webdings", "Dingbat dec": "233", "Dingbat hex": "E9", "Unicode dec": "9855", "Unicode hex": "267F" },
  { "Typeface name": "Webdings", "Dingbat dec": "234", "Dingbat hex": "EA", "Unicode dec": "128710", "Unicode hex": "1F6C6" },
  { "Typeface name": "Webdings", "Dingbat dec": "235", "Dingbat hex": "EB", "Unicode dec": "128392", "Unicode hex": "1F588" },
  { "Typeface name": "Webdings", "Dingbat dec": "236", "Dingbat hex": "EC", "Unicode dec": "127891", "Unicode hex": "1F393" },
  { "Typeface name": "Webdings", "Dingbat dec": "237", "Dingbat hex": "ED", "Unicode dec": "128484", "Unicode hex": "1F5E4" },
  { "Typeface name": "Webdings", "Dingbat dec": "238", "Dingbat hex": "EE", "Unicode dec": "128485", "Unicode hex": "1F5E5" },
  { "Typeface name": "Webdings", "Dingbat dec": "239", "Dingbat hex": "EF", "Unicode dec": "128486", "Unicode hex": "1F5E6" },
  { "Typeface name": "Webdings", "Dingbat dec": "240", "Dingbat hex": "F0", "Unicode dec": "128487", "Unicode hex": "1F5E7" },
  { "Typeface name": "Webdings", "Dingbat dec": "241", "Dingbat hex": "F1", "Unicode dec": "128746", "Unicode hex": "1F6EA" },
  { "Typeface name": "Webdings", "Dingbat dec": "242", "Dingbat hex": "F2", "Unicode dec": "128063", "Unicode hex": "1F43F" },
  { "Typeface name": "Webdings", "Dingbat dec": "243", "Dingbat hex": "F3", "Unicode dec": "128038", "Unicode hex": "1F426" },
  { "Typeface name": "Webdings", "Dingbat dec": "244", "Dingbat hex": "F4", "Unicode dec": "128031", "Unicode hex": "1F41F" },
  { "Typeface name": "Webdings", "Dingbat dec": "245", "Dingbat hex": "F5", "Unicode dec": "128021", "Unicode hex": "1F415" },
  { "Typeface name": "Webdings", "Dingbat dec": "246", "Dingbat hex": "F6", "Unicode dec": "128008", "Unicode hex": "1F408" },
  { "Typeface name": "Webdings", "Dingbat dec": "247", "Dingbat hex": "F7", "Unicode dec": "128620", "Unicode hex": "1F66C" },
  { "Typeface name": "Webdings", "Dingbat dec": "248", "Dingbat hex": "F8", "Unicode dec": "128622", "Unicode hex": "1F66E" },
  { "Typeface name": "Webdings", "Dingbat dec": "249", "Dingbat hex": "F9", "Unicode dec": "128621", "Unicode hex": "1F66D" },
  { "Typeface name": "Webdings", "Dingbat dec": "250", "Dingbat hex": "FA", "Unicode dec": "128623", "Unicode hex": "1F66F" },
  { "Typeface name": "Webdings", "Dingbat dec": "251", "Dingbat hex": "FB", "Unicode dec": "128506", "Unicode hex": "1F5FA" },
  { "Typeface name": "Webdings", "Dingbat dec": "252", "Dingbat hex": "FC", "Unicode dec": "127757", "Unicode hex": "1F30D" },
  { "Typeface name": "Webdings", "Dingbat dec": "253", "Dingbat hex": "FD", "Unicode dec": "127759", "Unicode hex": "1F30F" },
  { "Typeface name": "Webdings", "Dingbat dec": "254", "Dingbat hex": "FE", "Unicode dec": "127758", "Unicode hex": "1F30E" },
  { "Typeface name": "Webdings", "Dingbat dec": "255", "Dingbat hex": "FF", "Unicode dec": "128330", "Unicode hex": "1F54A" },
  { "Typeface name": "Wingdings", "Dingbat dec": "32", "Dingbat hex": "20", "Unicode dec": "32", "Unicode hex": "20" },
  { "Typeface name": "Wingdings", "Dingbat dec": "33", "Dingbat hex": "21", "Unicode dec": "128393", "Unicode hex": "1F589" },
  { "Typeface name": "Wingdings", "Dingbat dec": "34", "Dingbat hex": "22", "Unicode dec": "9986", "Unicode hex": "2702" },
  { "Typeface name": "Wingdings", "Dingbat dec": "35", "Dingbat hex": "23", "Unicode dec": "9985", "Unicode hex": "2701" },
  { "Typeface name": "Wingdings", "Dingbat dec": "36", "Dingbat hex": "24", "Unicode dec": "128083", "Unicode hex": "1F453" },
  { "Typeface name": "Wingdings", "Dingbat dec": "37", "Dingbat hex": "25", "Unicode dec": "128365", "Unicode hex": "1F56D" },
  { "Typeface name": "Wingdings", "Dingbat dec": "38", "Dingbat hex": "26", "Unicode dec": "128366", "Unicode hex": "1F56E" },
  { "Typeface name": "Wingdings", "Dingbat dec": "39", "Dingbat hex": "27", "Unicode dec": "128367", "Unicode hex": "1F56F" },
  { "Typeface name": "Wingdings", "Dingbat dec": "40", "Dingbat hex": "28", "Unicode dec": "128383", "Unicode hex": "1F57F" },
  { "Typeface name": "Wingdings", "Dingbat dec": "41", "Dingbat hex": "29", "Unicode dec": "9990", "Unicode hex": "2706" },
  { "Typeface name": "Wingdings", "Dingbat dec": "42", "Dingbat hex": "2A", "Unicode dec": "128386", "Unicode hex": "1F582" },
  { "Typeface name": "Wingdings", "Dingbat dec": "43", "Dingbat hex": "2B", "Unicode dec": "128387", "Unicode hex": "1F583" },
  { "Typeface name": "Wingdings", "Dingbat dec": "44", "Dingbat hex": "2C", "Unicode dec": "128234", "Unicode hex": "1F4EA" },
  { "Typeface name": "Wingdings", "Dingbat dec": "45", "Dingbat hex": "2D", "Unicode dec": "128235", "Unicode hex": "1F4EB" },
  { "Typeface name": "Wingdings", "Dingbat dec": "46", "Dingbat hex": "2E", "Unicode dec": "128236", "Unicode hex": "1F4EC" },
  { "Typeface name": "Wingdings", "Dingbat dec": "47", "Dingbat hex": "2F", "Unicode dec": "128237", "Unicode hex": "1F4ED" },
  { "Typeface name": "Wingdings", "Dingbat dec": "48", "Dingbat hex": "30", "Unicode dec": "128448", "Unicode hex": "1F5C0" },
  { "Typeface name": "Wingdings", "Dingbat dec": "49", "Dingbat hex": "31", "Unicode dec": "128449", "Unicode hex": "1F5C1" },
  { "Typeface name": "Wingdings", "Dingbat dec": "50", "Dingbat hex": "32", "Unicode dec": "128462", "Unicode hex": "1F5CE" },
  { "Typeface name": "Wingdings", "Dingbat dec": "51", "Dingbat hex": "33", "Unicode dec": "128463", "Unicode hex": "1F5CF" },
  { "Typeface name": "Wingdings", "Dingbat dec": "52", "Dingbat hex": "34", "Unicode dec": "128464", "Unicode hex": "1F5D0" },
  { "Typeface name": "Wingdings", "Dingbat dec": "53", "Dingbat hex": "35", "Unicode dec": "128452", "Unicode hex": "1F5C4" },
  { "Typeface name": "Wingdings", "Dingbat dec": "54", "Dingbat hex": "36", "Unicode dec": "8987", "Unicode hex": "231B" },
  { "Typeface name": "Wingdings", "Dingbat dec": "55", "Dingbat hex": "37", "Unicode dec": "128430", "Unicode hex": "1F5AE" },
  { "Typeface name": "Wingdings", "Dingbat dec": "56", "Dingbat hex": "38", "Unicode dec": "128432", "Unicode hex": "1F5B0" },
  { "Typeface name": "Wingdings", "Dingbat dec": "57", "Dingbat hex": "39", "Unicode dec": "128434", "Unicode hex": "1F5B2" },
  { "Typeface name": "Wingdings", "Dingbat dec": "58", "Dingbat hex": "3A", "Unicode dec": "128435", "Unicode hex": "1F5B3" },
  { "Typeface name": "Wingdings", "Dingbat dec": "59", "Dingbat hex": "3B", "Unicode dec": "128436", "Unicode hex": "1F5B4" },
  { "Typeface name": "Wingdings", "Dingbat dec": "60", "Dingbat hex": "3C", "Unicode dec": "128427", "Unicode hex": "1F5AB" },
  { "Typeface name": "Wingdings", "Dingbat dec": "61", "Dingbat hex": "3D", "Unicode dec": "128428", "Unicode hex": "1F5AC" },
  { "Typeface name": "Wingdings", "Dingbat dec": "62", "Dingbat hex": "3E", "Unicode dec": "9991", "Unicode hex": "2707" },
  { "Typeface name": "Wingdings", "Dingbat dec": "63", "Dingbat hex": "3F", "Unicode dec": "9997", "Unicode hex": "270D" },
  { "Typeface name": "Wingdings", "Dingbat dec": "64", "Dingbat hex": "40", "Unicode dec": "128398", "Unicode hex": "1F58E" },
  { "Typeface name": "Wingdings", "Dingbat dec": "65", "Dingbat hex": "41", "Unicode dec": "9996", "Unicode hex": "270C" },
  { "Typeface name": "Wingdings", "Dingbat dec": "66", "Dingbat hex": "42", "Unicode dec": "128399", "Unicode hex": "1F58F" },
  { "Typeface name": "Wingdings", "Dingbat dec": "67", "Dingbat hex": "43", "Unicode dec": "128077", "Unicode hex": "1F44D" },
  { "Typeface name": "Wingdings", "Dingbat dec": "68", "Dingbat hex": "44", "Unicode dec": "128078", "Unicode hex": "1F44E" },
  { "Typeface name": "Wingdings", "Dingbat dec": "69", "Dingbat hex": "45", "Unicode dec": "9756", "Unicode hex": "261C" },
  { "Typeface name": "Wingdings", "Dingbat dec": "70", "Dingbat hex": "46", "Unicode dec": "9758", "Unicode hex": "261E" },
  { "Typeface name": "Wingdings", "Dingbat dec": "71", "Dingbat hex": "47", "Unicode dec": "9757", "Unicode hex": "261D" },
  { "Typeface name": "Wingdings", "Dingbat dec": "72", "Dingbat hex": "48", "Unicode dec": "9759", "Unicode hex": "261F" },
  { "Typeface name": "Wingdings", "Dingbat dec": "73", "Dingbat hex": "49", "Unicode dec": "128400", "Unicode hex": "1F590" },
  { "Typeface name": "Wingdings", "Dingbat dec": "74", "Dingbat hex": "4A", "Unicode dec": "9786", "Unicode hex": "263A" },
  { "Typeface name": "Wingdings", "Dingbat dec": "75", "Dingbat hex": "4B", "Unicode dec": "128528", "Unicode hex": "1F610" },
  { "Typeface name": "Wingdings", "Dingbat dec": "76", "Dingbat hex": "4C", "Unicode dec": "9785", "Unicode hex": "2639" },
  { "Typeface name": "Wingdings", "Dingbat dec": "77", "Dingbat hex": "4D", "Unicode dec": "128163", "Unicode hex": "1F4A3" },
  { "Typeface name": "Wingdings", "Dingbat dec": "78", "Dingbat hex": "4E", "Unicode dec": "128369", "Unicode hex": "1F571" },
  { "Typeface name": "Wingdings", "Dingbat dec": "79", "Dingbat hex": "4F", "Unicode dec": "127987", "Unicode hex": "1F3F3" },
  { "Typeface name": "Wingdings", "Dingbat dec": "80", "Dingbat hex": "50", "Unicode dec": "127985", "Unicode hex": "1F3F1" },
  { "Typeface name": "Wingdings", "Dingbat dec": "81", "Dingbat hex": "51", "Unicode dec": "9992", "Unicode hex": "2708" },
  { "Typeface name": "Wingdings", "Dingbat dec": "82", "Dingbat hex": "52", "Unicode dec": "9788", "Unicode hex": "263C" },
  { "Typeface name": "Wingdings", "Dingbat dec": "83", "Dingbat hex": "53", "Unicode dec": "127778", "Unicode hex": "1F322" },
  { "Typeface name": "Wingdings", "Dingbat dec": "84", "Dingbat hex": "54", "Unicode dec": "10052", "Unicode hex": "2744" },
  { "Typeface name": "Wingdings", "Dingbat dec": "85", "Dingbat hex": "55", "Unicode dec": "128326", "Unicode hex": "1F546" },
  { "Typeface name": "Wingdings", "Dingbat dec": "86", "Dingbat hex": "56", "Unicode dec": "10014", "Unicode hex": "271E" },
  { "Typeface name": "Wingdings", "Dingbat dec": "87", "Dingbat hex": "57", "Unicode dec": "128328", "Unicode hex": "1F548" },
  { "Typeface name": "Wingdings", "Dingbat dec": "88", "Dingbat hex": "58", "Unicode dec": "10016", "Unicode hex": "2720" },
  { "Typeface name": "Wingdings", "Dingbat dec": "89", "Dingbat hex": "59", "Unicode dec": "10017", "Unicode hex": "2721" },
  { "Typeface name": "Wingdings", "Dingbat dec": "90", "Dingbat hex": "5A", "Unicode dec": "9770", "Unicode hex": "262A" },
  { "Typeface name": "Wingdings", "Dingbat dec": "91", "Dingbat hex": "5B", "Unicode dec": "9775", "Unicode hex": "262F" },
  { "Typeface name": "Wingdings", "Dingbat dec": "92", "Dingbat hex": "5C", "Unicode dec": "128329", "Unicode hex": "1F549" },
  { "Typeface name": "Wingdings", "Dingbat dec": "93", "Dingbat hex": "5D", "Unicode dec": "9784", "Unicode hex": "2638" },
  { "Typeface name": "Wingdings", "Dingbat dec": "94", "Dingbat hex": "5E", "Unicode dec": "9800", "Unicode hex": "2648" },
  { "Typeface name": "Wingdings", "Dingbat dec": "95", "Dingbat hex": "5F", "Unicode dec": "9801", "Unicode hex": "2649" },
  { "Typeface name": "Wingdings", "Dingbat dec": "96", "Dingbat hex": "60", "Unicode dec": "9802", "Unicode hex": "264A" },
  { "Typeface name": "Wingdings", "Dingbat dec": "97", "Dingbat hex": "61", "Unicode dec": "9803", "Unicode hex": "264B" },
  { "Typeface name": "Wingdings", "Dingbat dec": "98", "Dingbat hex": "62", "Unicode dec": "9804", "Unicode hex": "264C" },
  { "Typeface name": "Wingdings", "Dingbat dec": "99", "Dingbat hex": "63", "Unicode dec": "9805", "Unicode hex": "264D" },
  { "Typeface name": "Wingdings", "Dingbat dec": "100", "Dingbat hex": "64", "Unicode dec": "9806", "Unicode hex": "264E" },
  { "Typeface name": "Wingdings", "Dingbat dec": "101", "Dingbat hex": "65", "Unicode dec": "9807", "Unicode hex": "264F" },
  { "Typeface name": "Wingdings", "Dingbat dec": "102", "Dingbat hex": "66", "Unicode dec": "9808", "Unicode hex": "2650" },
  { "Typeface name": "Wingdings", "Dingbat dec": "103", "Dingbat hex": "67", "Unicode dec": "9809", "Unicode hex": "2651" },
  { "Typeface name": "Wingdings", "Dingbat dec": "104", "Dingbat hex": "68", "Unicode dec": "9810", "Unicode hex": "2652" },
  { "Typeface name": "Wingdings", "Dingbat dec": "105", "Dingbat hex": "69", "Unicode dec": "9811", "Unicode hex": "2653" },
  { "Typeface name": "Wingdings", "Dingbat dec": "106", "Dingbat hex": "6A", "Unicode dec": "128624", "Unicode hex": "1F670" },
  { "Typeface name": "Wingdings", "Dingbat dec": "107", "Dingbat hex": "6B", "Unicode dec": "128629", "Unicode hex": "1F675" },
  { "Typeface name": "Wingdings", "Dingbat dec": "108", "Dingbat hex": "6C", "Unicode dec": "9899", "Unicode hex": "26AB" },
  { "Typeface name": "Wingdings", "Dingbat dec": "109", "Dingbat hex": "6D", "Unicode dec": "128318", "Unicode hex": "1F53E" },
  { "Typeface name": "Wingdings", "Dingbat dec": "110", "Dingbat hex": "6E", "Unicode dec": "9724", "Unicode hex": "25FC" },
  { "Typeface name": "Wingdings", "Dingbat dec": "111", "Dingbat hex": "6F", "Unicode dec": "128911", "Unicode hex": "1F78F" },
  { "Typeface name": "Wingdings", "Dingbat dec": "112", "Dingbat hex": "70", "Unicode dec": "128912", "Unicode hex": "1F790" },
  { "Typeface name": "Wingdings", "Dingbat dec": "113", "Dingbat hex": "71", "Unicode dec": "10065", "Unicode hex": "2751" },
  { "Typeface name": "Wingdings", "Dingbat dec": "114", "Dingbat hex": "72", "Unicode dec": "10066", "Unicode hex": "2752" },
  { "Typeface name": "Wingdings", "Dingbat dec": "115", "Dingbat hex": "73", "Unicode dec": "128927", "Unicode hex": "1F79F" },
  { "Typeface name": "Wingdings", "Dingbat dec": "116", "Dingbat hex": "74", "Unicode dec": "10731", "Unicode hex": "29EB" },
  { "Typeface name": "Wingdings", "Dingbat dec": "117", "Dingbat hex": "75", "Unicode dec": "9670", "Unicode hex": "25C6" },
  { "Typeface name": "Wingdings", "Dingbat dec": "118", "Dingbat hex": "76", "Unicode dec": "10070", "Unicode hex": "2756" },
  { "Typeface name": "Wingdings", "Dingbat dec": "119", "Dingbat hex": "77", "Unicode dec": "11049", "Unicode hex": "2B29" },
  { "Typeface name": "Wingdings", "Dingbat dec": "120", "Dingbat hex": "78", "Unicode dec": "8999", "Unicode hex": "2327" },
  { "Typeface name": "Wingdings", "Dingbat dec": "121", "Dingbat hex": "79", "Unicode dec": "11193", "Unicode hex": "2BB9" },
  { "Typeface name": "Wingdings", "Dingbat dec": "122", "Dingbat hex": "7A", "Unicode dec": "8984", "Unicode hex": "2318" },
  { "Typeface name": "Wingdings", "Dingbat dec": "123", "Dingbat hex": "7B", "Unicode dec": "127989", "Unicode hex": "1F3F5" },
  { "Typeface name": "Wingdings", "Dingbat dec": "124", "Dingbat hex": "7C", "Unicode dec": "127990", "Unicode hex": "1F3F6" },
  { "Typeface name": "Wingdings", "Dingbat dec": "125", "Dingbat hex": "7D", "Unicode dec": "128630", "Unicode hex": "1F676" },
  { "Typeface name": "Wingdings", "Dingbat dec": "126", "Dingbat hex": "7E", "Unicode dec": "128631", "Unicode hex": "1F677" },
  { "Typeface name": "Wingdings", "Dingbat dec": "127", "Dingbat hex": "7F", "Unicode dec": "9647", "Unicode hex": "25AF" },
  { "Typeface name": "Wingdings", "Dingbat dec": "128", "Dingbat hex": "80", "Unicode dec": "127243", "Unicode hex": "1F10B" },
  { "Typeface name": "Wingdings", "Dingbat dec": "129", "Dingbat hex": "81", "Unicode dec": "10112", "Unicode hex": "2780" },
  { "Typeface name": "Wingdings", "Dingbat dec": "130", "Dingbat hex": "82", "Unicode dec": "10113", "Unicode hex": "2781" },
  { "Typeface name": "Wingdings", "Dingbat dec": "131", "Dingbat hex": "83", "Unicode dec": "10114", "Unicode hex": "2782" },
  { "Typeface name": "Wingdings", "Dingbat dec": "132", "Dingbat hex": "84", "Unicode dec": "10115", "Unicode hex": "2783" },
  { "Typeface name": "Wingdings", "Dingbat dec": "133", "Dingbat hex": "85", "Unicode dec": "10116", "Unicode hex": "2784" },
  { "Typeface name": "Wingdings", "Dingbat dec": "134", "Dingbat hex": "86", "Unicode dec": "10117", "Unicode hex": "2785" },
  { "Typeface name": "Wingdings", "Dingbat dec": "135", "Dingbat hex": "87", "Unicode dec": "10118", "Unicode hex": "2786" },
  { "Typeface name": "Wingdings", "Dingbat dec": "136", "Dingbat hex": "88", "Unicode dec": "10119", "Unicode hex": "2787" },
  { "Typeface name": "Wingdings", "Dingbat dec": "137", "Dingbat hex": "89", "Unicode dec": "10120", "Unicode hex": "2788" },
  { "Typeface name": "Wingdings", "Dingbat dec": "138", "Dingbat hex": "8A", "Unicode dec": "10121", "Unicode hex": "2789" },
  { "Typeface name": "Wingdings", "Dingbat dec": "139", "Dingbat hex": "8B", "Unicode dec": "127244", "Unicode hex": "1F10C" },
  { "Typeface name": "Wingdings", "Dingbat dec": "140", "Dingbat hex": "8C", "Unicode dec": "10122", "Unicode hex": "278A" },
  { "Typeface name": "Wingdings", "Dingbat dec": "141", "Dingbat hex": "8D", "Unicode dec": "10123", "Unicode hex": "278B" },
  { "Typeface name": "Wingdings", "Dingbat dec": "142", "Dingbat hex": "8E", "Unicode dec": "10124", "Unicode hex": "278C" },
  { "Typeface name": "Wingdings", "Dingbat dec": "143", "Dingbat hex": "8F", "Unicode dec": "10125", "Unicode hex": "278D" },
  { "Typeface name": "Wingdings", "Dingbat dec": "144", "Dingbat hex": "90", "Unicode dec": "10126", "Unicode hex": "278E" },
  { "Typeface name": "Wingdings", "Dingbat dec": "145", "Dingbat hex": "91", "Unicode dec": "10127", "Unicode hex": "278F" },
  { "Typeface name": "Wingdings", "Dingbat dec": "146", "Dingbat hex": "92", "Unicode dec": "10128", "Unicode hex": "2790" },
  { "Typeface name": "Wingdings", "Dingbat dec": "147", "Dingbat hex": "93", "Unicode dec": "10129", "Unicode hex": "2791" },
  { "Typeface name": "Wingdings", "Dingbat dec": "148", "Dingbat hex": "94", "Unicode dec": "10130", "Unicode hex": "2792" },
  { "Typeface name": "Wingdings", "Dingbat dec": "149", "Dingbat hex": "95", "Unicode dec": "10131", "Unicode hex": "2793" },
  { "Typeface name": "Wingdings", "Dingbat dec": "150", "Dingbat hex": "96", "Unicode dec": "128610", "Unicode hex": "1F662" },
  { "Typeface name": "Wingdings", "Dingbat dec": "151", "Dingbat hex": "97", "Unicode dec": "128608", "Unicode hex": "1F660" },
  { "Typeface name": "Wingdings", "Dingbat dec": "152", "Dingbat hex": "98", "Unicode dec": "128609", "Unicode hex": "1F661" },
  { "Typeface name": "Wingdings", "Dingbat dec": "153", "Dingbat hex": "99", "Unicode dec": "128611", "Unicode hex": "1F663" },
  { "Typeface name": "Wingdings", "Dingbat dec": "154", "Dingbat hex": "9A", "Unicode dec": "128606", "Unicode hex": "1F65E" },
  { "Typeface name": "Wingdings", "Dingbat dec": "155", "Dingbat hex": "9B", "Unicode dec": "128604", "Unicode hex": "1F65C" },
  { "Typeface name": "Wingdings", "Dingbat dec": "156", "Dingbat hex": "9C", "Unicode dec": "128605", "Unicode hex": "1F65D" },
  { "Typeface name": "Wingdings", "Dingbat dec": "157", "Dingbat hex": "9D", "Unicode dec": "128607", "Unicode hex": "1F65F" },
  { "Typeface name": "Wingdings", "Dingbat dec": "158", "Dingbat hex": "9E", "Unicode dec": "8729", "Unicode hex": "2219" },
  { "Typeface name": "Wingdings", "Dingbat dec": "159", "Dingbat hex": "9F", "Unicode dec": "8226", "Unicode hex": "2022" },
  { "Typeface name": "Wingdings", "Dingbat dec": "160", "Dingbat hex": "A0", "Unicode dec": "11037", "Unicode hex": "2B1D" },
  { "Typeface name": "Wingdings", "Dingbat dec": "161", "Dingbat hex": "A1", "Unicode dec": "11096", "Unicode hex": "2B58" },
  { "Typeface name": "Wingdings", "Dingbat dec": "162", "Dingbat hex": "A2", "Unicode dec": "128902", "Unicode hex": "1F786" },
  { "Typeface name": "Wingdings", "Dingbat dec": "163", "Dingbat hex": "A3", "Unicode dec": "128904", "Unicode hex": "1F788" },
  { "Typeface name": "Wingdings", "Dingbat dec": "164", "Dingbat hex": "A4", "Unicode dec": "128906", "Unicode hex": "1F78A" },
  { "Typeface name": "Wingdings", "Dingbat dec": "165", "Dingbat hex": "A5", "Unicode dec": "128907", "Unicode hex": "1F78B" },
  { "Typeface name": "Wingdings", "Dingbat dec": "166", "Dingbat hex": "A6", "Unicode dec": "128319", "Unicode hex": "1F53F" },
  { "Typeface name": "Wingdings", "Dingbat dec": "167", "Dingbat hex": "A7", "Unicode dec": "9642", "Unicode hex": "25AA" },
  { "Typeface name": "Wingdings", "Dingbat dec": "168", "Dingbat hex": "A8", "Unicode dec": "128910", "Unicode hex": "1F78E" },
  { "Typeface name": "Wingdings", "Dingbat dec": "169", "Dingbat hex": "A9", "Unicode dec": "128961", "Unicode hex": "1F7C1" },
  { "Typeface name": "Wingdings", "Dingbat dec": "170", "Dingbat hex": "AA", "Unicode dec": "128965", "Unicode hex": "1F7C5" },
  { "Typeface name": "Wingdings", "Dingbat dec": "171", "Dingbat hex": "AB", "Unicode dec": "9733", "Unicode hex": "2605" },
  { "Typeface name": "Wingdings", "Dingbat dec": "172", "Dingbat hex": "AC", "Unicode dec": "128971", "Unicode hex": "1F7CB" },
  { "Typeface name": "Wingdings", "Dingbat dec": "173", "Dingbat hex": "AD", "Unicode dec": "128975", "Unicode hex": "1F7CF" },
  { "Typeface name": "Wingdings", "Dingbat dec": "174", "Dingbat hex": "AE", "Unicode dec": "128979", "Unicode hex": "1F7D3" },
  { "Typeface name": "Wingdings", "Dingbat dec": "175", "Dingbat hex": "AF", "Unicode dec": "128977", "Unicode hex": "1F7D1" },
  { "Typeface name": "Wingdings", "Dingbat dec": "176", "Dingbat hex": "B0", "Unicode dec": "11216", "Unicode hex": "2BD0" },
  { "Typeface name": "Wingdings", "Dingbat dec": "177", "Dingbat hex": "B1", "Unicode dec": "8982", "Unicode hex": "2316" },
  { "Typeface name": "Wingdings", "Dingbat dec": "178", "Dingbat hex": "B2", "Unicode dec": "11214", "Unicode hex": "2BCE" },
  { "Typeface name": "Wingdings", "Dingbat dec": "179", "Dingbat hex": "B3", "Unicode dec": "11215", "Unicode hex": "2BCF" },
  { "Typeface name": "Wingdings", "Dingbat dec": "180", "Dingbat hex": "B4", "Unicode dec": "11217", "Unicode hex": "2BD1" },
  { "Typeface name": "Wingdings", "Dingbat dec": "181", "Dingbat hex": "B5", "Unicode dec": "10026", "Unicode hex": "272A" },
  { "Typeface name": "Wingdings", "Dingbat dec": "182", "Dingbat hex": "B6", "Unicode dec": "10032", "Unicode hex": "2730" },
  { "Typeface name": "Wingdings", "Dingbat dec": "183", "Dingbat hex": "B7", "Unicode dec": "128336", "Unicode hex": "1F550" },
  { "Typeface name": "Wingdings", "Dingbat dec": "184", "Dingbat hex": "B8", "Unicode dec": "128337", "Unicode hex": "1F551" },
  { "Typeface name": "Wingdings", "Dingbat dec": "185", "Dingbat hex": "B9", "Unicode dec": "128338", "Unicode hex": "1F552" },
  { "Typeface name": "Wingdings", "Dingbat dec": "186", "Dingbat hex": "BA", "Unicode dec": "128339", "Unicode hex": "1F553" },
  { "Typeface name": "Wingdings", "Dingbat dec": "187", "Dingbat hex": "BB", "Unicode dec": "128340", "Unicode hex": "1F554" },
  { "Typeface name": "Wingdings", "Dingbat dec": "188", "Dingbat hex": "BC", "Unicode dec": "128341", "Unicode hex": "1F555" },
  { "Typeface name": "Wingdings", "Dingbat dec": "189", "Dingbat hex": "BD", "Unicode dec": "128342", "Unicode hex": "1F556" },
  { "Typeface name": "Wingdings", "Dingbat dec": "190", "Dingbat hex": "BE", "Unicode dec": "128343", "Unicode hex": "1F557" },
  { "Typeface name": "Wingdings", "Dingbat dec": "191", "Dingbat hex": "BF", "Unicode dec": "128344", "Unicode hex": "1F558" },
  { "Typeface name": "Wingdings", "Dingbat dec": "192", "Dingbat hex": "C0", "Unicode dec": "128345", "Unicode hex": "1F559" },
  { "Typeface name": "Wingdings", "Dingbat dec": "193", "Dingbat hex": "C1", "Unicode dec": "128346", "Unicode hex": "1F55A" },
  { "Typeface name": "Wingdings", "Dingbat dec": "194", "Dingbat hex": "C2", "Unicode dec": "128347", "Unicode hex": "1F55B" },
  { "Typeface name": "Wingdings", "Dingbat dec": "195", "Dingbat hex": "C3", "Unicode dec": "11184", "Unicode hex": "2BB0" },
  { "Typeface name": "Wingdings", "Dingbat dec": "196", "Dingbat hex": "C4", "Unicode dec": "11185", "Unicode hex": "2BB1" },
  { "Typeface name": "Wingdings", "Dingbat dec": "197", "Dingbat hex": "C5", "Unicode dec": "11186", "Unicode hex": "2BB2" },
  { "Typeface name": "Wingdings", "Dingbat dec": "198", "Dingbat hex": "C6", "Unicode dec": "11187", "Unicode hex": "2BB3" },
  { "Typeface name": "Wingdings", "Dingbat dec": "199", "Dingbat hex": "C7", "Unicode dec": "11188", "Unicode hex": "2BB4" },
  { "Typeface name": "Wingdings", "Dingbat dec": "200", "Dingbat hex": "C8", "Unicode dec": "11189", "Unicode hex": "2BB5" },
  { "Typeface name": "Wingdings", "Dingbat dec": "201", "Dingbat hex": "C9", "Unicode dec": "11190", "Unicode hex": "2BB6" },
  { "Typeface name": "Wingdings", "Dingbat dec": "202", "Dingbat hex": "CA", "Unicode dec": "11191", "Unicode hex": "2BB7" },
  { "Typeface name": "Wingdings", "Dingbat dec": "203", "Dingbat hex": "CB", "Unicode dec": "128618", "Unicode hex": "1F66A" },
  { "Typeface name": "Wingdings", "Dingbat dec": "204", "Dingbat hex": "CC", "Unicode dec": "128619", "Unicode hex": "1F66B" },
  { "Typeface name": "Wingdings", "Dingbat dec": "205", "Dingbat hex": "CD", "Unicode dec": "128597", "Unicode hex": "1F655" },
  { "Typeface name": "Wingdings", "Dingbat dec": "206", "Dingbat hex": "CE", "Unicode dec": "128596", "Unicode hex": "1F654" },
  { "Typeface name": "Wingdings", "Dingbat dec": "207", "Dingbat hex": "CF", "Unicode dec": "128599", "Unicode hex": "1F657" },
  { "Typeface name": "Wingdings", "Dingbat dec": "208", "Dingbat hex": "D0", "Unicode dec": "128598", "Unicode hex": "1F656" },
  { "Typeface name": "Wingdings", "Dingbat dec": "209", "Dingbat hex": "D1", "Unicode dec": "128592", "Unicode hex": "1F650" },
  { "Typeface name": "Wingdings", "Dingbat dec": "210", "Dingbat hex": "D2", "Unicode dec": "128593", "Unicode hex": "1F651" },
  { "Typeface name": "Wingdings", "Dingbat dec": "211", "Dingbat hex": "D3", "Unicode dec": "128594", "Unicode hex": "1F652" },
  { "Typeface name": "Wingdings", "Dingbat dec": "212", "Dingbat hex": "D4", "Unicode dec": "128595", "Unicode hex": "1F653" },
  { "Typeface name": "Wingdings", "Dingbat dec": "213", "Dingbat hex": "D5", "Unicode dec": "9003", "Unicode hex": "232B" },
  { "Typeface name": "Wingdings", "Dingbat dec": "214", "Dingbat hex": "D6", "Unicode dec": "8998", "Unicode hex": "2326" },
  { "Typeface name": "Wingdings", "Dingbat dec": "215", "Dingbat hex": "D7", "Unicode dec": "11160", "Unicode hex": "2B98" },
  { "Typeface name": "Wingdings", "Dingbat dec": "216", "Dingbat hex": "D8", "Unicode dec": "11162", "Unicode hex": "2B9A" },
  { "Typeface name": "Wingdings", "Dingbat dec": "217", "Dingbat hex": "D9", "Unicode dec": "11161", "Unicode hex": "2B99" },
  { "Typeface name": "Wingdings", "Dingbat dec": "218", "Dingbat hex": "DA", "Unicode dec": "11163", "Unicode hex": "2B9B" },
  { "Typeface name": "Wingdings", "Dingbat dec": "219", "Dingbat hex": "DB", "Unicode dec": "11144", "Unicode hex": "2B88" },
  { "Typeface name": "Wingdings", "Dingbat dec": "220", "Dingbat hex": "DC", "Unicode dec": "11146", "Unicode hex": "2B8A" },
  { "Typeface name": "Wingdings", "Dingbat dec": "221", "Dingbat hex": "DD", "Unicode dec": "11145", "Unicode hex": "2B89" },
  { "Typeface name": "Wingdings", "Dingbat dec": "222", "Dingbat hex": "DE", "Unicode dec": "11147", "Unicode hex": "2B8B" },
  { "Typeface name": "Wingdings", "Dingbat dec": "223", "Dingbat hex": "DF", "Unicode dec": "129128", "Unicode hex": "1F868" },
  { "Typeface name": "Wingdings", "Dingbat dec": "224", "Dingbat hex": "E0", "Unicode dec": "129130", "Unicode hex": "1F86A" },
  { "Typeface name": "Wingdings", "Dingbat dec": "225", "Dingbat hex": "E1", "Unicode dec": "129129", "Unicode hex": "1F869" },
  { "Typeface name": "Wingdings", "Dingbat dec": "226", "Dingbat hex": "E2", "Unicode dec": "129131", "Unicode hex": "1F86B" },
  { "Typeface name": "Wingdings", "Dingbat dec": "227", "Dingbat hex": "E3", "Unicode dec": "129132", "Unicode hex": "1F86C" },
  { "Typeface name": "Wingdings", "Dingbat dec": "228", "Dingbat hex": "E4", "Unicode dec": "129133", "Unicode hex": "1F86D" },
  { "Typeface name": "Wingdings", "Dingbat dec": "229", "Dingbat hex": "E5", "Unicode dec": "129135", "Unicode hex": "1F86F" },
  { "Typeface name": "Wingdings", "Dingbat dec": "230", "Dingbat hex": "E6", "Unicode dec": "129134", "Unicode hex": "1F86E" },
  { "Typeface name": "Wingdings", "Dingbat dec": "231", "Dingbat hex": "E7", "Unicode dec": "129144", "Unicode hex": "1F878" },
  { "Typeface name": "Wingdings", "Dingbat dec": "232", "Dingbat hex": "E8", "Unicode dec": "129146", "Unicode hex": "1F87A" },
  { "Typeface name": "Wingdings", "Dingbat dec": "233", "Dingbat hex": "E9", "Unicode dec": "129145", "Unicode hex": "1F879" },
  { "Typeface name": "Wingdings", "Dingbat dec": "234", "Dingbat hex": "EA", "Unicode dec": "129147", "Unicode hex": "1F87B" },
  { "Typeface name": "Wingdings", "Dingbat dec": "235", "Dingbat hex": "EB", "Unicode dec": "129148", "Unicode hex": "1F87C" },
  { "Typeface name": "Wingdings", "Dingbat dec": "236", "Dingbat hex": "EC", "Unicode dec": "129149", "Unicode hex": "1F87D" },
  { "Typeface name": "Wingdings", "Dingbat dec": "237", "Dingbat hex": "ED", "Unicode dec": "129151", "Unicode hex": "1F87F" },
  { "Typeface name": "Wingdings", "Dingbat dec": "238", "Dingbat hex": "EE", "Unicode dec": "129150", "Unicode hex": "1F87E" },
  { "Typeface name": "Wingdings", "Dingbat dec": "239", "Dingbat hex": "EF", "Unicode dec": "8678", "Unicode hex": "21E6" },
  { "Typeface name": "Wingdings", "Dingbat dec": "240", "Dingbat hex": "F0", "Unicode dec": "8680", "Unicode hex": "21E8" },
  { "Typeface name": "Wingdings", "Dingbat dec": "241", "Dingbat hex": "F1", "Unicode dec": "8679", "Unicode hex": "21E7" },
  { "Typeface name": "Wingdings", "Dingbat dec": "242", "Dingbat hex": "F2", "Unicode dec": "8681", "Unicode hex": "21E9" },
  { "Typeface name": "Wingdings", "Dingbat dec": "243", "Dingbat hex": "F3", "Unicode dec": "11012", "Unicode hex": "2B04" },
  { "Typeface name": "Wingdings", "Dingbat dec": "244", "Dingbat hex": "F4", "Unicode dec": "8691", "Unicode hex": "21F3" },
  { "Typeface name": "Wingdings", "Dingbat dec": "245", "Dingbat hex": "F5", "Unicode dec": "11009", "Unicode hex": "2B01" },
  { "Typeface name": "Wingdings", "Dingbat dec": "246", "Dingbat hex": "F6", "Unicode dec": "11008", "Unicode hex": "2B00" },
  { "Typeface name": "Wingdings", "Dingbat dec": "247", "Dingbat hex": "F7", "Unicode dec": "11011", "Unicode hex": "2B03" },
  { "Typeface name": "Wingdings", "Dingbat dec": "248", "Dingbat hex": "F8", "Unicode dec": "11010", "Unicode hex": "2B02" },
  { "Typeface name": "Wingdings", "Dingbat dec": "249", "Dingbat hex": "F9", "Unicode dec": "129196", "Unicode hex": "1F8AC" },
  { "Typeface name": "Wingdings", "Dingbat dec": "250", "Dingbat hex": "FA", "Unicode dec": "129197", "Unicode hex": "1F8AD" },
  { "Typeface name": "Wingdings", "Dingbat dec": "251", "Dingbat hex": "FB", "Unicode dec": "128502", "Unicode hex": "1F5F6" },
  { "Typeface name": "Wingdings", "Dingbat dec": "252", "Dingbat hex": "FC", "Unicode dec": "10003", "Unicode hex": "2713" },
  { "Typeface name": "Wingdings", "Dingbat dec": "253", "Dingbat hex": "FD", "Unicode dec": "128503", "Unicode hex": "1F5F7" },
  { "Typeface name": "Wingdings", "Dingbat dec": "254", "Dingbat hex": "FE", "Unicode dec": "128505", "Unicode hex": "1F5F9" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "32", "Dingbat hex": "20", "Unicode dec": "32", "Unicode hex": "20" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "33", "Dingbat hex": "21", "Unicode dec": "128394", "Unicode hex": "1F58A" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "34", "Dingbat hex": "22", "Unicode dec": "128395", "Unicode hex": "1F58B" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "35", "Dingbat hex": "23", "Unicode dec": "128396", "Unicode hex": "1F58C" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "36", "Dingbat hex": "24", "Unicode dec": "128397", "Unicode hex": "1F58D" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "37", "Dingbat hex": "25", "Unicode dec": "9988", "Unicode hex": "2704" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "38", "Dingbat hex": "26", "Unicode dec": "9984", "Unicode hex": "2700" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "39", "Dingbat hex": "27", "Unicode dec": "128382", "Unicode hex": "1F57E" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "40", "Dingbat hex": "28", "Unicode dec": "128381", "Unicode hex": "1F57D" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "41", "Dingbat hex": "29", "Unicode dec": "128453", "Unicode hex": "1F5C5" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "42", "Dingbat hex": "2A", "Unicode dec": "128454", "Unicode hex": "1F5C6" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "43", "Dingbat hex": "2B", "Unicode dec": "128455", "Unicode hex": "1F5C7" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "44", "Dingbat hex": "2C", "Unicode dec": "128456", "Unicode hex": "1F5C8" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "45", "Dingbat hex": "2D", "Unicode dec": "128457", "Unicode hex": "1F5C9" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "46", "Dingbat hex": "2E", "Unicode dec": "128458", "Unicode hex": "1F5CA" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "47", "Dingbat hex": "2F", "Unicode dec": "128459", "Unicode hex": "1F5CB" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "48", "Dingbat hex": "30", "Unicode dec": "128460", "Unicode hex": "1F5CC" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "49", "Dingbat hex": "31", "Unicode dec": "128461", "Unicode hex": "1F5CD" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "50", "Dingbat hex": "32", "Unicode dec": "128203", "Unicode hex": "1F4CB" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "51", "Dingbat hex": "33", "Unicode dec": "128465", "Unicode hex": "1F5D1" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "52", "Dingbat hex": "34", "Unicode dec": "128468", "Unicode hex": "1F5D4" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "53", "Dingbat hex": "35", "Unicode dec": "128437", "Unicode hex": "1F5B5" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "54", "Dingbat hex": "36", "Unicode dec": "128438", "Unicode hex": "1F5B6" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "55", "Dingbat hex": "37", "Unicode dec": "128439", "Unicode hex": "1F5B7" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "56", "Dingbat hex": "38", "Unicode dec": "128440", "Unicode hex": "1F5B8" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "57", "Dingbat hex": "39", "Unicode dec": "128429", "Unicode hex": "1F5AD" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "58", "Dingbat hex": "3A", "Unicode dec": "128431", "Unicode hex": "1F5AF" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "59", "Dingbat hex": "3B", "Unicode dec": "128433", "Unicode hex": "1F5B1" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "60", "Dingbat hex": "3C", "Unicode dec": "128402", "Unicode hex": "1F592" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "61", "Dingbat hex": "3D", "Unicode dec": "128403", "Unicode hex": "1F593" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "62", "Dingbat hex": "3E", "Unicode dec": "128408", "Unicode hex": "1F598" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "63", "Dingbat hex": "3F", "Unicode dec": "128409", "Unicode hex": "1F599" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "64", "Dingbat hex": "40", "Unicode dec": "128410", "Unicode hex": "1F59A" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "65", "Dingbat hex": "41", "Unicode dec": "128411", "Unicode hex": "1F59B" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "66", "Dingbat hex": "42", "Unicode dec": "128072", "Unicode hex": "1F448" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "67", "Dingbat hex": "43", "Unicode dec": "128073", "Unicode hex": "1F449" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "68", "Dingbat hex": "44", "Unicode dec": "128412", "Unicode hex": "1F59C" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "69", "Dingbat hex": "45", "Unicode dec": "128413", "Unicode hex": "1F59D" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "70", "Dingbat hex": "46", "Unicode dec": "128414", "Unicode hex": "1F59E" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "71", "Dingbat hex": "47", "Unicode dec": "128415", "Unicode hex": "1F59F" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "72", "Dingbat hex": "48", "Unicode dec": "128416", "Unicode hex": "1F5A0" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "73", "Dingbat hex": "49", "Unicode dec": "128417", "Unicode hex": "1F5A1" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "74", "Dingbat hex": "4A", "Unicode dec": "128070", "Unicode hex": "1F446" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "75", "Dingbat hex": "4B", "Unicode dec": "128071", "Unicode hex": "1F447" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "76", "Dingbat hex": "4C", "Unicode dec": "128418", "Unicode hex": "1F5A2" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "77", "Dingbat hex": "4D", "Unicode dec": "128419", "Unicode hex": "1F5A3" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "78", "Dingbat hex": "4E", "Unicode dec": "128401", "Unicode hex": "1F591" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "79", "Dingbat hex": "4F", "Unicode dec": "128500", "Unicode hex": "1F5F4" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "80", "Dingbat hex": "50", "Unicode dec": "128504", "Unicode hex": "1F5F8" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "81", "Dingbat hex": "51", "Unicode dec": "128501", "Unicode hex": "1F5F5" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "82", "Dingbat hex": "52", "Unicode dec": "9745", "Unicode hex": "2611" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "83", "Dingbat hex": "53", "Unicode dec": "11197", "Unicode hex": "2BBD" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "84", "Dingbat hex": "54", "Unicode dec": "9746", "Unicode hex": "2612" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "85", "Dingbat hex": "55", "Unicode dec": "11198", "Unicode hex": "2BBE" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "86", "Dingbat hex": "56", "Unicode dec": "11199", "Unicode hex": "2BBF" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "87", "Dingbat hex": "57", "Unicode dec": "128711", "Unicode hex": "1F6C7" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "88", "Dingbat hex": "58", "Unicode dec": "10680", "Unicode hex": "29B8" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "89", "Dingbat hex": "59", "Unicode dec": "128625", "Unicode hex": "1F671" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "90", "Dingbat hex": "5A", "Unicode dec": "128628", "Unicode hex": "1F674" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "91", "Dingbat hex": "5B", "Unicode dec": "128626", "Unicode hex": "1F672" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "92", "Dingbat hex": "5C", "Unicode dec": "128627", "Unicode hex": "1F673" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "93", "Dingbat hex": "5D", "Unicode dec": "8253", "Unicode hex": "203D" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "94", "Dingbat hex": "5E", "Unicode dec": "128633", "Unicode hex": "1F679" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "95", "Dingbat hex": "5F", "Unicode dec": "128634", "Unicode hex": "1F67A" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "96", "Dingbat hex": "60", "Unicode dec": "128635", "Unicode hex": "1F67B" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "97", "Dingbat hex": "61", "Unicode dec": "128614", "Unicode hex": "1F666" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "98", "Dingbat hex": "62", "Unicode dec": "128612", "Unicode hex": "1F664" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "99", "Dingbat hex": "63", "Unicode dec": "128613", "Unicode hex": "1F665" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "100", "Dingbat hex": "64", "Unicode dec": "128615", "Unicode hex": "1F667" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "101", "Dingbat hex": "65", "Unicode dec": "128602", "Unicode hex": "1F65A" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "102", "Dingbat hex": "66", "Unicode dec": "128600", "Unicode hex": "1F658" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "103", "Dingbat hex": "67", "Unicode dec": "128601", "Unicode hex": "1F659" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "104", "Dingbat hex": "68", "Unicode dec": "128603", "Unicode hex": "1F65B" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "105", "Dingbat hex": "69", "Unicode dec": "9450", "Unicode hex": "24EA" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "106", "Dingbat hex": "6A", "Unicode dec": "9312", "Unicode hex": "2460" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "107", "Dingbat hex": "6B", "Unicode dec": "9313", "Unicode hex": "2461" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "108", "Dingbat hex": "6C", "Unicode dec": "9314", "Unicode hex": "2462" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "109", "Dingbat hex": "6D", "Unicode dec": "9315", "Unicode hex": "2463" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "110", "Dingbat hex": "6E", "Unicode dec": "9316", "Unicode hex": "2464" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "111", "Dingbat hex": "6F", "Unicode dec": "9317", "Unicode hex": "2465" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "112", "Dingbat hex": "70", "Unicode dec": "9318", "Unicode hex": "2466" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "113", "Dingbat hex": "71", "Unicode dec": "9319", "Unicode hex": "2467" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "114", "Dingbat hex": "72", "Unicode dec": "9320", "Unicode hex": "2468" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "115", "Dingbat hex": "73", "Unicode dec": "9321", "Unicode hex": "2469" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "116", "Dingbat hex": "74", "Unicode dec": "9471", "Unicode hex": "24FF" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "117", "Dingbat hex": "75", "Unicode dec": "10102", "Unicode hex": "2776" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "118", "Dingbat hex": "76", "Unicode dec": "10103", "Unicode hex": "2777" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "119", "Dingbat hex": "77", "Unicode dec": "10104", "Unicode hex": "2778" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "120", "Dingbat hex": "78", "Unicode dec": "10105", "Unicode hex": "2779" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "121", "Dingbat hex": "79", "Unicode dec": "10106", "Unicode hex": "277A" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "122", "Dingbat hex": "7A", "Unicode dec": "10107", "Unicode hex": "277B" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "123", "Dingbat hex": "7B", "Unicode dec": "10108", "Unicode hex": "277C" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "124", "Dingbat hex": "7C", "Unicode dec": "10109", "Unicode hex": "277D" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "125", "Dingbat hex": "7D", "Unicode dec": "10110", "Unicode hex": "277E" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "126", "Dingbat hex": "7E", "Unicode dec": "10111", "Unicode hex": "277F" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "128", "Dingbat hex": "80", "Unicode dec": "9737", "Unicode hex": "2609" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "129", "Dingbat hex": "81", "Unicode dec": "127765", "Unicode hex": "1F315" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "130", "Dingbat hex": "82", "Unicode dec": "9789", "Unicode hex": "263D" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "131", "Dingbat hex": "83", "Unicode dec": "9790", "Unicode hex": "263E" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "132", "Dingbat hex": "84", "Unicode dec": "11839", "Unicode hex": "2E3F" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "133", "Dingbat hex": "85", "Unicode dec": "10013", "Unicode hex": "271D" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "134", "Dingbat hex": "86", "Unicode dec": "128327", "Unicode hex": "1F547" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "135", "Dingbat hex": "87", "Unicode dec": "128348", "Unicode hex": "1F55C" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "136", "Dingbat hex": "88", "Unicode dec": "128349", "Unicode hex": "1F55D" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "137", "Dingbat hex": "89", "Unicode dec": "128350", "Unicode hex": "1F55E" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "138", "Dingbat hex": "8A", "Unicode dec": "128351", "Unicode hex": "1F55F" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "139", "Dingbat hex": "8B", "Unicode dec": "128352", "Unicode hex": "1F560" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "140", "Dingbat hex": "8C", "Unicode dec": "128353", "Unicode hex": "1F561" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "141", "Dingbat hex": "8D", "Unicode dec": "128354", "Unicode hex": "1F562" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "142", "Dingbat hex": "8E", "Unicode dec": "128355", "Unicode hex": "1F563" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "143", "Dingbat hex": "8F", "Unicode dec": "128356", "Unicode hex": "1F564" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "144", "Dingbat hex": "90", "Unicode dec": "128357", "Unicode hex": "1F565" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "145", "Dingbat hex": "91", "Unicode dec": "128358", "Unicode hex": "1F566" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "146", "Dingbat hex": "92", "Unicode dec": "128359", "Unicode hex": "1F567" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "147", "Dingbat hex": "93", "Unicode dec": "128616", "Unicode hex": "1F668" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "148", "Dingbat hex": "94", "Unicode dec": "128617", "Unicode hex": "1F669" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "149", "Dingbat hex": "95", "Unicode dec": "8901", "Unicode hex": "22C5" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "150", "Dingbat hex": "96", "Unicode dec": "128900", "Unicode hex": "1F784" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "151", "Dingbat hex": "97", "Unicode dec": "10625", "Unicode hex": "2981" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "152", "Dingbat hex": "98", "Unicode dec": "9679", "Unicode hex": "25CF" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "153", "Dingbat hex": "99", "Unicode dec": "9675", "Unicode hex": "25CB" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "154", "Dingbat hex": "9A", "Unicode dec": "128901", "Unicode hex": "1F785" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "155", "Dingbat hex": "9B", "Unicode dec": "128903", "Unicode hex": "1F787" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "156", "Dingbat hex": "9C", "Unicode dec": "128905", "Unicode hex": "1F789" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "157", "Dingbat hex": "9D", "Unicode dec": "8857", "Unicode hex": "2299" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "158", "Dingbat hex": "9E", "Unicode dec": "10687", "Unicode hex": "29BF" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "159", "Dingbat hex": "9F", "Unicode dec": "128908", "Unicode hex": "1F78C" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "160", "Dingbat hex": "A0", "Unicode dec": "128909", "Unicode hex": "1F78D" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "161", "Dingbat hex": "A1", "Unicode dec": "9726", "Unicode hex": "25FE" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "162", "Dingbat hex": "A2", "Unicode dec": "9632", "Unicode hex": "25A0" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "163", "Dingbat hex": "A3", "Unicode dec": "9633", "Unicode hex": "25A1" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "164", "Dingbat hex": "A4", "Unicode dec": "128913", "Unicode hex": "1F791" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "165", "Dingbat hex": "A5", "Unicode dec": "128914", "Unicode hex": "1F792" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "166", "Dingbat hex": "A6", "Unicode dec": "128915", "Unicode hex": "1F793" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "167", "Dingbat hex": "A7", "Unicode dec": "128916", "Unicode hex": "1F794" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "168", "Dingbat hex": "A8", "Unicode dec": "9635", "Unicode hex": "25A3" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "169", "Dingbat hex": "A9", "Unicode dec": "128917", "Unicode hex": "1F795" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "170", "Dingbat hex": "AA", "Unicode dec": "128918", "Unicode hex": "1F796" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "171", "Dingbat hex": "AB", "Unicode dec": "128919", "Unicode hex": "1F797" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "172", "Dingbat hex": "AC", "Unicode dec": "128920", "Unicode hex": "1F798" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "173", "Dingbat hex": "AD", "Unicode dec": "11049", "Unicode hex": "2B29" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "174", "Dingbat hex": "AE", "Unicode dec": "11045", "Unicode hex": "2B25" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "175", "Dingbat hex": "AF", "Unicode dec": "9671", "Unicode hex": "25C7" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "176", "Dingbat hex": "B0", "Unicode dec": "128922", "Unicode hex": "1F79A" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "177", "Dingbat hex": "B1", "Unicode dec": "9672", "Unicode hex": "25C8" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "178", "Dingbat hex": "B2", "Unicode dec": "128923", "Unicode hex": "1F79B" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "179", "Dingbat hex": "B3", "Unicode dec": "128924", "Unicode hex": "1F79C" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "180", "Dingbat hex": "B4", "Unicode dec": "128925", "Unicode hex": "1F79D" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "181", "Dingbat hex": "B5", "Unicode dec": "128926", "Unicode hex": "1F79E" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "182", "Dingbat hex": "B6", "Unicode dec": "11050", "Unicode hex": "2B2A" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "183", "Dingbat hex": "B7", "Unicode dec": "11047", "Unicode hex": "2B27" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "184", "Dingbat hex": "B8", "Unicode dec": "9674", "Unicode hex": "25CA" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "185", "Dingbat hex": "B9", "Unicode dec": "128928", "Unicode hex": "1F7A0" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "186", "Dingbat hex": "BA", "Unicode dec": "9686", "Unicode hex": "25D6" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "187", "Dingbat hex": "BB", "Unicode dec": "9687", "Unicode hex": "25D7" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "188", "Dingbat hex": "BC", "Unicode dec": "11210", "Unicode hex": "2BCA" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "189", "Dingbat hex": "BD", "Unicode dec": "11211", "Unicode hex": "2BCB" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "190", "Dingbat hex": "BE", "Unicode dec": "11200", "Unicode hex": "2BC0" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "191", "Dingbat hex": "BF", "Unicode dec": "11201", "Unicode hex": "2BC1" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "192", "Dingbat hex": "C0", "Unicode dec": "11039", "Unicode hex": "2B1F" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "193", "Dingbat hex": "C1", "Unicode dec": "11202", "Unicode hex": "2BC2" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "194", "Dingbat hex": "C2", "Unicode dec": "11043", "Unicode hex": "2B23" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "195", "Dingbat hex": "C3", "Unicode dec": "11042", "Unicode hex": "2B22" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "196", "Dingbat hex": "C4", "Unicode dec": "11203", "Unicode hex": "2BC3" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "197", "Dingbat hex": "C5", "Unicode dec": "11204", "Unicode hex": "2BC4" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "198", "Dingbat hex": "C6", "Unicode dec": "128929", "Unicode hex": "1F7A1" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "199", "Dingbat hex": "C7", "Unicode dec": "128930", "Unicode hex": "1F7A2" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "200", "Dingbat hex": "C8", "Unicode dec": "128931", "Unicode hex": "1F7A3" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "201", "Dingbat hex": "C9", "Unicode dec": "128932", "Unicode hex": "1F7A4" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "202", "Dingbat hex": "CA", "Unicode dec": "128933", "Unicode hex": "1F7A5" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "203", "Dingbat hex": "CB", "Unicode dec": "128934", "Unicode hex": "1F7A6" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "204", "Dingbat hex": "CC", "Unicode dec": "128935", "Unicode hex": "1F7A7" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "205", "Dingbat hex": "CD", "Unicode dec": "128936", "Unicode hex": "1F7A8" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "206", "Dingbat hex": "CE", "Unicode dec": "128937", "Unicode hex": "1F7A9" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "207", "Dingbat hex": "CF", "Unicode dec": "128938", "Unicode hex": "1F7AA" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "208", "Dingbat hex": "D0", "Unicode dec": "128939", "Unicode hex": "1F7AB" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "209", "Dingbat hex": "D1", "Unicode dec": "128940", "Unicode hex": "1F7AC" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "210", "Dingbat hex": "D2", "Unicode dec": "128941", "Unicode hex": "1F7AD" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "211", "Dingbat hex": "D3", "Unicode dec": "128942", "Unicode hex": "1F7AE" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "212", "Dingbat hex": "D4", "Unicode dec": "128943", "Unicode hex": "1F7AF" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "213", "Dingbat hex": "D5", "Unicode dec": "128944", "Unicode hex": "1F7B0" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "214", "Dingbat hex": "D6", "Unicode dec": "128945", "Unicode hex": "1F7B1" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "215", "Dingbat hex": "D7", "Unicode dec": "128946", "Unicode hex": "1F7B2" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "216", "Dingbat hex": "D8", "Unicode dec": "128947", "Unicode hex": "1F7B3" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "217", "Dingbat hex": "D9", "Unicode dec": "128948", "Unicode hex": "1F7B4" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "218", "Dingbat hex": "DA", "Unicode dec": "128949", "Unicode hex": "1F7B5" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "219", "Dingbat hex": "DB", "Unicode dec": "128950", "Unicode hex": "1F7B6" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "220", "Dingbat hex": "DC", "Unicode dec": "128951", "Unicode hex": "1F7B7" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "221", "Dingbat hex": "DD", "Unicode dec": "128952", "Unicode hex": "1F7B8" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "222", "Dingbat hex": "DE", "Unicode dec": "128953", "Unicode hex": "1F7B9" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "223", "Dingbat hex": "DF", "Unicode dec": "128954", "Unicode hex": "1F7BA" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "224", "Dingbat hex": "E0", "Unicode dec": "128955", "Unicode hex": "1F7BB" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "225", "Dingbat hex": "E1", "Unicode dec": "128956", "Unicode hex": "1F7BC" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "226", "Dingbat hex": "E2", "Unicode dec": "128957", "Unicode hex": "1F7BD" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "227", "Dingbat hex": "E3", "Unicode dec": "128958", "Unicode hex": "1F7BE" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "228", "Dingbat hex": "E4", "Unicode dec": "128959", "Unicode hex": "1F7BF" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "229", "Dingbat hex": "E5", "Unicode dec": "128960", "Unicode hex": "1F7C0" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "230", "Dingbat hex": "E6", "Unicode dec": "128962", "Unicode hex": "1F7C2" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "231", "Dingbat hex": "E7", "Unicode dec": "128964", "Unicode hex": "1F7C4" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "232", "Dingbat hex": "E8", "Unicode dec": "128966", "Unicode hex": "1F7C6" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "233", "Dingbat hex": "E9", "Unicode dec": "128969", "Unicode hex": "1F7C9" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "234", "Dingbat hex": "EA", "Unicode dec": "128970", "Unicode hex": "1F7CA" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "235", "Dingbat hex": "EB", "Unicode dec": "10038", "Unicode hex": "2736" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "236", "Dingbat hex": "EC", "Unicode dec": "128972", "Unicode hex": "1F7CC" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "237", "Dingbat hex": "ED", "Unicode dec": "128974", "Unicode hex": "1F7CE" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "238", "Dingbat hex": "EE", "Unicode dec": "128976", "Unicode hex": "1F7D0" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "239", "Dingbat hex": "EF", "Unicode dec": "128978", "Unicode hex": "1F7D2" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "240", "Dingbat hex": "F0", "Unicode dec": "10041", "Unicode hex": "2739" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "241", "Dingbat hex": "F1", "Unicode dec": "128963", "Unicode hex": "1F7C3" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "242", "Dingbat hex": "F2", "Unicode dec": "128967", "Unicode hex": "1F7C7" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "243", "Dingbat hex": "F3", "Unicode dec": "10031", "Unicode hex": "272F" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "244", "Dingbat hex": "F4", "Unicode dec": "128973", "Unicode hex": "1F7CD" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "245", "Dingbat hex": "F5", "Unicode dec": "128980", "Unicode hex": "1F7D4" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "246", "Dingbat hex": "F6", "Unicode dec": "11212", "Unicode hex": "2BCC" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "247", "Dingbat hex": "F7", "Unicode dec": "11213", "Unicode hex": "2BCD" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "248", "Dingbat hex": "F8", "Unicode dec": "8251", "Unicode hex": "203B" },
  { "Typeface name": "Wingdings 2", "Dingbat dec": "249", "Dingbat hex": "F9", "Unicode dec": "8258", "Unicode hex": "2042" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "32", "Dingbat hex": "20", "Unicode dec": "32", "Unicode hex": "20" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "33", "Dingbat hex": "21", "Unicode dec": "11104", "Unicode hex": "2B60" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "34", "Dingbat hex": "22", "Unicode dec": "11106", "Unicode hex": "2B62" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "35", "Dingbat hex": "23", "Unicode dec": "11105", "Unicode hex": "2B61" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "36", "Dingbat hex": "24", "Unicode dec": "11107", "Unicode hex": "2B63" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "37", "Dingbat hex": "25", "Unicode dec": "11110", "Unicode hex": "2B66" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "38", "Dingbat hex": "26", "Unicode dec": "11111", "Unicode hex": "2B67" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "39", "Dingbat hex": "27", "Unicode dec": "11113", "Unicode hex": "2B69" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "40", "Dingbat hex": "28", "Unicode dec": "11112", "Unicode hex": "2B68" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "41", "Dingbat hex": "29", "Unicode dec": "11120", "Unicode hex": "2B70" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "42", "Dingbat hex": "2A", "Unicode dec": "11122", "Unicode hex": "2B72" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "43", "Dingbat hex": "2B", "Unicode dec": "11121", "Unicode hex": "2B71" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "44", "Dingbat hex": "2C", "Unicode dec": "11123", "Unicode hex": "2B73" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "45", "Dingbat hex": "2D", "Unicode dec": "11126", "Unicode hex": "2B76" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "46", "Dingbat hex": "2E", "Unicode dec": "11128", "Unicode hex": "2B78" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "47", "Dingbat hex": "2F", "Unicode dec": "11131", "Unicode hex": "2B7B" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "48", "Dingbat hex": "30", "Unicode dec": "11133", "Unicode hex": "2B7D" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "49", "Dingbat hex": "31", "Unicode dec": "11108", "Unicode hex": "2B64" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "50", "Dingbat hex": "32", "Unicode dec": "11109", "Unicode hex": "2B65" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "51", "Dingbat hex": "33", "Unicode dec": "11114", "Unicode hex": "2B6A" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "52", "Dingbat hex": "34", "Unicode dec": "11116", "Unicode hex": "2B6C" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "53", "Dingbat hex": "35", "Unicode dec": "11115", "Unicode hex": "2B6B" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "54", "Dingbat hex": "36", "Unicode dec": "11117", "Unicode hex": "2B6D" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "55", "Dingbat hex": "37", "Unicode dec": "11085", "Unicode hex": "2B4D" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "56", "Dingbat hex": "38", "Unicode dec": "11168", "Unicode hex": "2BA0" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "57", "Dingbat hex": "39", "Unicode dec": "11169", "Unicode hex": "2BA1" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "58", "Dingbat hex": "3A", "Unicode dec": "11170", "Unicode hex": "2BA2" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "59", "Dingbat hex": "3B", "Unicode dec": "11171", "Unicode hex": "2BA3" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "60", "Dingbat hex": "3C", "Unicode dec": "11172", "Unicode hex": "2BA4" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "61", "Dingbat hex": "3D", "Unicode dec": "11173", "Unicode hex": "2BA5" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "62", "Dingbat hex": "3E", "Unicode dec": "11174", "Unicode hex": "2BA6" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "63", "Dingbat hex": "3F", "Unicode dec": "11175", "Unicode hex": "2BA7" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "64", "Dingbat hex": "40", "Unicode dec": "11152", "Unicode hex": "2B90" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "65", "Dingbat hex": "41", "Unicode dec": "11153", "Unicode hex": "2B91" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "66", "Dingbat hex": "42", "Unicode dec": "11154", "Unicode hex": "2B92" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "67", "Dingbat hex": "43", "Unicode dec": "11155", "Unicode hex": "2B93" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "68", "Dingbat hex": "44", "Unicode dec": "11136", "Unicode hex": "2B80" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "69", "Dingbat hex": "45", "Unicode dec": "11139", "Unicode hex": "2B83" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "70", "Dingbat hex": "46", "Unicode dec": "11134", "Unicode hex": "2B7E" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "71", "Dingbat hex": "47", "Unicode dec": "11135", "Unicode hex": "2B7F" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "72", "Dingbat hex": "48", "Unicode dec": "11140", "Unicode hex": "2B84" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "73", "Dingbat hex": "49", "Unicode dec": "11142", "Unicode hex": "2B86" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "74", "Dingbat hex": "4A", "Unicode dec": "11141", "Unicode hex": "2B85" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "75", "Dingbat hex": "4B", "Unicode dec": "11143", "Unicode hex": "2B87" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "76", "Dingbat hex": "4C", "Unicode dec": "11151", "Unicode hex": "2B8F" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "77", "Dingbat hex": "4D", "Unicode dec": "11149", "Unicode hex": "2B8D" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "78", "Dingbat hex": "4E", "Unicode dec": "11150", "Unicode hex": "2B8E" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "79", "Dingbat hex": "4F", "Unicode dec": "11148", "Unicode hex": "2B8C" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "80", "Dingbat hex": "50", "Unicode dec": "11118", "Unicode hex": "2B6E" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "81", "Dingbat hex": "51", "Unicode dec": "11119", "Unicode hex": "2B6F" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "82", "Dingbat hex": "52", "Unicode dec": "9099", "Unicode hex": "238B" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "83", "Dingbat hex": "53", "Unicode dec": "8996", "Unicode hex": "2324" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "84", "Dingbat hex": "54", "Unicode dec": "8963", "Unicode hex": "2303" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "85", "Dingbat hex": "55", "Unicode dec": "8997", "Unicode hex": "2325" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "86", "Dingbat hex": "56", "Unicode dec": "9251", "Unicode hex": "2423" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "87", "Dingbat hex": "57", "Unicode dec": "9085", "Unicode hex": "237D" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "88", "Dingbat hex": "58", "Unicode dec": "8682", "Unicode hex": "21EA" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "89", "Dingbat hex": "59", "Unicode dec": "11192", "Unicode hex": "2BB8" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "90", "Dingbat hex": "5A", "Unicode dec": "129184", "Unicode hex": "1F8A0" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "91", "Dingbat hex": "5B", "Unicode dec": "129185", "Unicode hex": "1F8A1" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "92", "Dingbat hex": "5C", "Unicode dec": "129186", "Unicode hex": "1F8A2" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "93", "Dingbat hex": "5D", "Unicode dec": "129187", "Unicode hex": "1F8A3" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "94", "Dingbat hex": "5E", "Unicode dec": "129188", "Unicode hex": "1F8A4" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "95", "Dingbat hex": "5F", "Unicode dec": "129189", "Unicode hex": "1F8A5" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "96", "Dingbat hex": "60", "Unicode dec": "129190", "Unicode hex": "1F8A6" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "97", "Dingbat hex": "61", "Unicode dec": "129191", "Unicode hex": "1F8A7" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "98", "Dingbat hex": "62", "Unicode dec": "129192", "Unicode hex": "1F8A8" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "99", "Dingbat hex": "63", "Unicode dec": "129193", "Unicode hex": "1F8A9" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "100", "Dingbat hex": "64", "Unicode dec": "129194", "Unicode hex": "1F8AA" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "101", "Dingbat hex": "65", "Unicode dec": "129195", "Unicode hex": "1F8AB" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "102", "Dingbat hex": "66", "Unicode dec": "129104", "Unicode hex": "1F850" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "103", "Dingbat hex": "67", "Unicode dec": "129106", "Unicode hex": "1F852" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "104", "Dingbat hex": "68", "Unicode dec": "129105", "Unicode hex": "1F851" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "105", "Dingbat hex": "69", "Unicode dec": "129107", "Unicode hex": "1F853" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "106", "Dingbat hex": "6A", "Unicode dec": "129108", "Unicode hex": "1F854" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "107", "Dingbat hex": "6B", "Unicode dec": "129109", "Unicode hex": "1F855" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "108", "Dingbat hex": "6C", "Unicode dec": "129111", "Unicode hex": "1F857" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "109", "Dingbat hex": "6D", "Unicode dec": "129110", "Unicode hex": "1F856" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "110", "Dingbat hex": "6E", "Unicode dec": "129112", "Unicode hex": "1F858" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "111", "Dingbat hex": "6F", "Unicode dec": "129113", "Unicode hex": "1F859" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "112", "Dingbat hex": "70", "Unicode dec": "9650", "Unicode hex": "25B2" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "113", "Dingbat hex": "71", "Unicode dec": "9660", "Unicode hex": "25BC" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "114", "Dingbat hex": "72", "Unicode dec": "9651", "Unicode hex": "25B3" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "115", "Dingbat hex": "73", "Unicode dec": "9661", "Unicode hex": "25BD" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "116", "Dingbat hex": "74", "Unicode dec": "9664", "Unicode hex": "25C0" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "117", "Dingbat hex": "75", "Unicode dec": "9654", "Unicode hex": "25B6" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "118", "Dingbat hex": "76", "Unicode dec": "9665", "Unicode hex": "25C1" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "119", "Dingbat hex": "77", "Unicode dec": "9655", "Unicode hex": "25B7" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "120", "Dingbat hex": "78", "Unicode dec": "9699", "Unicode hex": "25E3" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "121", "Dingbat hex": "79", "Unicode dec": "9698", "Unicode hex": "25E2" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "122", "Dingbat hex": "7A", "Unicode dec": "9700", "Unicode hex": "25E4" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "123", "Dingbat hex": "7B", "Unicode dec": "9701", "Unicode hex": "25E5" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "124", "Dingbat hex": "7C", "Unicode dec": "128896", "Unicode hex": "1F780" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "125", "Dingbat hex": "7D", "Unicode dec": "128898", "Unicode hex": "1F782" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "126", "Dingbat hex": "7E", "Unicode dec": "128897", "Unicode hex": "1F781" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "128", "Dingbat hex": "80", "Unicode dec": "128899", "Unicode hex": "1F783" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "129", "Dingbat hex": "81", "Unicode dec": "11205", "Unicode hex": "2BC5" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "130", "Dingbat hex": "82", "Unicode dec": "11206", "Unicode hex": "2BC6" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "131", "Dingbat hex": "83", "Unicode dec": "11207", "Unicode hex": "2BC7" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "132", "Dingbat hex": "84", "Unicode dec": "11208", "Unicode hex": "2BC8" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "133", "Dingbat hex": "85", "Unicode dec": "11164", "Unicode hex": "2B9C" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "134", "Dingbat hex": "86", "Unicode dec": "11166", "Unicode hex": "2B9E" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "135", "Dingbat hex": "87", "Unicode dec": "11165", "Unicode hex": "2B9D" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "136", "Dingbat hex": "88", "Unicode dec": "11167", "Unicode hex": "2B9F" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "137", "Dingbat hex": "89", "Unicode dec": "129040", "Unicode hex": "1F810" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "138", "Dingbat hex": "8A", "Unicode dec": "129042", "Unicode hex": "1F812" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "139", "Dingbat hex": "8B", "Unicode dec": "129041", "Unicode hex": "1F811" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "140", "Dingbat hex": "8C", "Unicode dec": "129043", "Unicode hex": "1F813" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "141", "Dingbat hex": "8D", "Unicode dec": "129044", "Unicode hex": "1F814" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "142", "Dingbat hex": "8E", "Unicode dec": "129046", "Unicode hex": "1F816" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "143", "Dingbat hex": "8F", "Unicode dec": "129045", "Unicode hex": "1F815" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "144", "Dingbat hex": "90", "Unicode dec": "129047", "Unicode hex": "1F817" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "145", "Dingbat hex": "91", "Unicode dec": "129048", "Unicode hex": "1F818" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "146", "Dingbat hex": "92", "Unicode dec": "129050", "Unicode hex": "1F81A" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "147", "Dingbat hex": "93", "Unicode dec": "129049", "Unicode hex": "1F819" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "148", "Dingbat hex": "94", "Unicode dec": "129051", "Unicode hex": "1F81B" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "149", "Dingbat hex": "95", "Unicode dec": "129052", "Unicode hex": "1F81C" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "150", "Dingbat hex": "96", "Unicode dec": "129054", "Unicode hex": "1F81E" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "151", "Dingbat hex": "97", "Unicode dec": "129053", "Unicode hex": "1F81D" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "152", "Dingbat hex": "98", "Unicode dec": "129055", "Unicode hex": "1F81F" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "153", "Dingbat hex": "99", "Unicode dec": "129024", "Unicode hex": "1F800" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "154", "Dingbat hex": "9A", "Unicode dec": "129026", "Unicode hex": "1F802" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "155", "Dingbat hex": "9B", "Unicode dec": "129025", "Unicode hex": "1F801" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "156", "Dingbat hex": "9C", "Unicode dec": "129027", "Unicode hex": "1F803" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "157", "Dingbat hex": "9D", "Unicode dec": "129028", "Unicode hex": "1F804" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "158", "Dingbat hex": "9E", "Unicode dec": "129030", "Unicode hex": "1F806" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "159", "Dingbat hex": "9F", "Unicode dec": "129029", "Unicode hex": "1F805" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "160", "Dingbat hex": "A0", "Unicode dec": "129031", "Unicode hex": "1F807" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "161", "Dingbat hex": "A1", "Unicode dec": "129032", "Unicode hex": "1F808" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "162", "Dingbat hex": "A2", "Unicode dec": "129034", "Unicode hex": "1F80A" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "163", "Dingbat hex": "A3", "Unicode dec": "129033", "Unicode hex": "1F809" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "164", "Dingbat hex": "A4", "Unicode dec": "129035", "Unicode hex": "1F80B" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "165", "Dingbat hex": "A5", "Unicode dec": "129056", "Unicode hex": "1F820" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "166", "Dingbat hex": "A6", "Unicode dec": "129058", "Unicode hex": "1F822" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "167", "Dingbat hex": "A7", "Unicode dec": "129060", "Unicode hex": "1F824" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "168", "Dingbat hex": "A8", "Unicode dec": "129062", "Unicode hex": "1F826" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "169", "Dingbat hex": "A9", "Unicode dec": "129064", "Unicode hex": "1F828" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "170", "Dingbat hex": "AA", "Unicode dec": "129066", "Unicode hex": "1F82A" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "171", "Dingbat hex": "AB", "Unicode dec": "129068", "Unicode hex": "1F82C" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "172", "Dingbat hex": "AC", "Unicode dec": "129180", "Unicode hex": "1F89C" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "173", "Dingbat hex": "AD", "Unicode dec": "129181", "Unicode hex": "1F89D" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "174", "Dingbat hex": "AE", "Unicode dec": "129182", "Unicode hex": "1F89E" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "175", "Dingbat hex": "AF", "Unicode dec": "129183", "Unicode hex": "1F89F" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "176", "Dingbat hex": "B0", "Unicode dec": "129070", "Unicode hex": "1F82E" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "177", "Dingbat hex": "B1", "Unicode dec": "129072", "Unicode hex": "1F830" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "178", "Dingbat hex": "B2", "Unicode dec": "129074", "Unicode hex": "1F832" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "179", "Dingbat hex": "B3", "Unicode dec": "129076", "Unicode hex": "1F834" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "180", "Dingbat hex": "B4", "Unicode dec": "129078", "Unicode hex": "1F836" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "181", "Dingbat hex": "B5", "Unicode dec": "129080", "Unicode hex": "1F838" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "182", "Dingbat hex": "B6", "Unicode dec": "129082", "Unicode hex": "1F83A" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "183", "Dingbat hex": "B7", "Unicode dec": "129081", "Unicode hex": "1F839" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "184", "Dingbat hex": "B8", "Unicode dec": "129083", "Unicode hex": "1F83B" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "185", "Dingbat hex": "B9", "Unicode dec": "129176", "Unicode hex": "1F898" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "186", "Dingbat hex": "BA", "Unicode dec": "129178", "Unicode hex": "1F89A" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "187", "Dingbat hex": "BB", "Unicode dec": "129177", "Unicode hex": "1F899" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "188", "Dingbat hex": "BC", "Unicode dec": "129179", "Unicode hex": "1F89B" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "189", "Dingbat hex": "BD", "Unicode dec": "129084", "Unicode hex": "1F83C" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "190", "Dingbat hex": "BE", "Unicode dec": "129086", "Unicode hex": "1F83E" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "191", "Dingbat hex": "BF", "Unicode dec": "129085", "Unicode hex": "1F83D" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "192", "Dingbat hex": "C0", "Unicode dec": "129087", "Unicode hex": "1F83F" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "193", "Dingbat hex": "C1", "Unicode dec": "129088", "Unicode hex": "1F840" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "194", "Dingbat hex": "C2", "Unicode dec": "129090", "Unicode hex": "1F842" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "195", "Dingbat hex": "C3", "Unicode dec": "129089", "Unicode hex": "1F841" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "196", "Dingbat hex": "C4", "Unicode dec": "129091", "Unicode hex": "1F843" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "197", "Dingbat hex": "C5", "Unicode dec": "129092", "Unicode hex": "1F844" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "198", "Dingbat hex": "C6", "Unicode dec": "129094", "Unicode hex": "1F846" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "199", "Dingbat hex": "C7", "Unicode dec": "129093", "Unicode hex": "1F845" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "200", "Dingbat hex": "C8", "Unicode dec": "129095", "Unicode hex": "1F847" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "201", "Dingbat hex": "C9", "Unicode dec": "11176", "Unicode hex": "2BA8" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "202", "Dingbat hex": "CA", "Unicode dec": "11177", "Unicode hex": "2BA9" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "203", "Dingbat hex": "CB", "Unicode dec": "11178", "Unicode hex": "2BAA" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "204", "Dingbat hex": "CC", "Unicode dec": "11179", "Unicode hex": "2BAB" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "205", "Dingbat hex": "CD", "Unicode dec": "11180", "Unicode hex": "2BAC" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "206", "Dingbat hex": "CE", "Unicode dec": "11181", "Unicode hex": "2BAD" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "207", "Dingbat hex": "CF", "Unicode dec": "11182", "Unicode hex": "2BAE" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "208", "Dingbat hex": "D0", "Unicode dec": "11183", "Unicode hex": "2BAF" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "209", "Dingbat hex": "D1", "Unicode dec": "129120", "Unicode hex": "1F860" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "210", "Dingbat hex": "D2", "Unicode dec": "129122", "Unicode hex": "1F862" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "211", "Dingbat hex": "D3", "Unicode dec": "129121", "Unicode hex": "1F861" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "212", "Dingbat hex": "D4", "Unicode dec": "129123", "Unicode hex": "1F863" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "213", "Dingbat hex": "D5", "Unicode dec": "129124", "Unicode hex": "1F864" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "214", "Dingbat hex": "D6", "Unicode dec": "129125", "Unicode hex": "1F865" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "215", "Dingbat hex": "D7", "Unicode dec": "129127", "Unicode hex": "1F867" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "216", "Dingbat hex": "D8", "Unicode dec": "129126", "Unicode hex": "1F866" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "217", "Dingbat hex": "D9", "Unicode dec": "129136", "Unicode hex": "1F870" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "218", "Dingbat hex": "DA", "Unicode dec": "129138", "Unicode hex": "1F872" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "219", "Dingbat hex": "DB", "Unicode dec": "129137", "Unicode hex": "1F871" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "220", "Dingbat hex": "DC", "Unicode dec": "129139", "Unicode hex": "1F873" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "221", "Dingbat hex": "DD", "Unicode dec": "129140", "Unicode hex": "1F874" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "222", "Dingbat hex": "DE", "Unicode dec": "129141", "Unicode hex": "1F875" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "223", "Dingbat hex": "DF", "Unicode dec": "129143", "Unicode hex": "1F877" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "224", "Dingbat hex": "E0", "Unicode dec": "129142", "Unicode hex": "1F876" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "225", "Dingbat hex": "E1", "Unicode dec": "129152", "Unicode hex": "1F880" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "226", "Dingbat hex": "E2", "Unicode dec": "129154", "Unicode hex": "1F882" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "227", "Dingbat hex": "E3", "Unicode dec": "129153", "Unicode hex": "1F881" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "228", "Dingbat hex": "E4", "Unicode dec": "129155", "Unicode hex": "1F883" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "229", "Dingbat hex": "E5", "Unicode dec": "129156", "Unicode hex": "1F884" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "230", "Dingbat hex": "E6", "Unicode dec": "129157", "Unicode hex": "1F885" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "231", "Dingbat hex": "E7", "Unicode dec": "129159", "Unicode hex": "1F887" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "232", "Dingbat hex": "E8", "Unicode dec": "129158", "Unicode hex": "1F886" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "233", "Dingbat hex": "E9", "Unicode dec": "129168", "Unicode hex": "1F890" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "234", "Dingbat hex": "EA", "Unicode dec": "129170", "Unicode hex": "1F892" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "235", "Dingbat hex": "EB", "Unicode dec": "129169", "Unicode hex": "1F891" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "236", "Dingbat hex": "EC", "Unicode dec": "129171", "Unicode hex": "1F893" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "237", "Dingbat hex": "ED", "Unicode dec": "129172", "Unicode hex": "1F894" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "238", "Dingbat hex": "EE", "Unicode dec": "129174", "Unicode hex": "1F896" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "239", "Dingbat hex": "EF", "Unicode dec": "129173", "Unicode hex": "1F895" },
  { "Typeface name": "Wingdings 3", "Dingbat dec": "240", "Dingbat hex": "F0", "Unicode dec": "129175", "Unicode hex": "1F897" }
];
Eo.default = T2;
var E2 = we && we.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Rt, "__esModule", { value: !0 });
Rt.hex = Rt.dec = Rt.codePoint = void 0;
var A2 = E2(Eo), Od = {}, C2 = String.fromCodePoint ? String.fromCodePoint : k2;
for (var ka = 0, Js = A2.default; ka < Js.length; ka++) {
  var Wa = Js[ka], eu = parseInt(Wa["Unicode dec"], 10), F2 = {
    codePoint: eu,
    string: C2(eu)
  };
  Od[Wa["Typeface name"].toUpperCase() + "_" + Wa["Dingbat dec"]] = F2;
}
function Ao(e, t) {
  return Od[e.toUpperCase() + "_" + t];
}
Rt.codePoint = Ao;
function S2(e, t) {
  return Ao(e, parseInt(t, 10));
}
Rt.dec = S2;
function B2(e, t) {
  return Ao(e, parseInt(t, 16));
}
Rt.hex = B2;
function k2(e) {
  if (e <= 65535)
    return String.fromCharCode(e);
  var t = Math.floor((e - 65536) / 1024) + 55296, n = (e - 65536) % 1024 + 56320;
  return String.fromCharCode(t, n);
}
var Co = {};
Co.uriToZipEntryName = W2;
Co.replaceFragment = N2;
function W2(e, t) {
  return t.charAt(0) === "/" ? t.substr(1) : e + "/" + t;
}
function N2(e, t) {
  var n = e.indexOf("#");
  return n !== -1 && (e = e.substring(0, n)), e + "#" + t;
}
To.createBodyReader = R2;
To._readNumberingProperties = Ld;
var tu = Rt, ut = We, Ne = Ce, Id = it.Result, Ut = it.warning, nu = Co;
function R2(e) {
  return {
    readXmlElement: function(t) {
      return new ru(e).readXmlElement(t);
    },
    readXmlElements: function(t) {
      return new ru(e).readXmlElements(t);
    }
  };
}
function ru(e) {
  var t = [], n = [], r = [], i = e.relationships, a = e.contentTypes, c = e.docxFile, o = e.files, s = e.numbering, u = e.styles;
  function f($) {
    var se = $.map(p);
    return iu(se);
  }
  function p($) {
    if ($.type === "element") {
      var se = _[$.name];
      if (se)
        return se($);
      if (!Object.prototype.hasOwnProperty.call(I2, $.name)) {
        var fe = Ut("An unrecognised element was ignored: " + $.name);
        return Wn([fe]);
      }
    }
    return Nn();
  }
  function y($) {
    return g($).map(function(se) {
      return {
        type: "paragraphProperties",
        styleId: se.styleId,
        styleName: se.name,
        alignment: $.firstOrEmpty("w:jc").attributes["w:val"],
        numbering: Ld(se.styleId, $.firstOrEmpty("w:numPr"), s),
        indent: m($.firstOrEmpty("w:ind"))
      };
    });
  }
  function m($) {
    return {
      start: $.attributes["w:start"] || $.attributes["w:left"],
      end: $.attributes["w:end"] || $.attributes["w:right"],
      firstLine: $.attributes["w:firstLine"],
      hanging: $.attributes["w:hanging"]
    };
  }
  function b($) {
    return h($).map(function(se) {
      var fe = $.firstOrEmpty("w:sz").attributes["w:val"], be = /^[0-9]+$/.test(fe) ? parseInt(fe, 10) / 2 : null;
      return {
        type: "runProperties",
        styleId: se.styleId,
        styleName: se.name,
        verticalAlignment: $.firstOrEmpty("w:vertAlign").attributes["w:val"],
        font: $.firstOrEmpty("w:rFonts").attributes["w:ascii"],
        fontSize: be,
        isBold: l($.first("w:b")),
        isUnderline: d($.first("w:u")),
        isItalic: l($.first("w:i")),
        isStrikethrough: l($.first("w:strike")),
        isAllCaps: l($.first("w:caps")),
        isSmallCaps: l($.first("w:smallCaps"))
      };
    });
  }
  function d($) {
    if ($) {
      var se = $.attributes["w:val"];
      return se !== void 0 && se !== "false" && se !== "0" && se !== "none";
    } else
      return !1;
  }
  function l($) {
    if ($) {
      var se = $.attributes["w:val"];
      return se !== "false" && se !== "0";
    } else
      return !1;
  }
  function g($) {
    return w($, "w:pStyle", "Paragraph", u.findParagraphStyleById);
  }
  function h($) {
    return w($, "w:rStyle", "Run", u.findCharacterStyleById);
  }
  function D($) {
    return w($, "w:tblStyle", "Table", u.findTableStyleById);
  }
  function w($, se, fe, be) {
    var _e = [], v = $.first(se), ie = null, ee = null;
    if (v && (ie = v.attributes["w:val"], ie)) {
      var W = be(ie);
      W ? ee = W.name : _e.push(ye(fe, ie));
    }
    return fr({ styleId: ie, name: ee }, _e);
  }
  var U = { type: "unknown" };
  function E($) {
    var se = $.attributes["w:fldCharType"];
    if (se === "begin")
      t.push(U), n = [];
    else if (se === "end")
      t.pop();
    else if (se === "separate") {
      var fe = j(n.join("")), be = fe === null ? U : { type: "hyperlink", options: fe };
      t.pop(), t.push(be);
    }
    return Nn();
  }
  function F() {
    var $ = ut.last(t.filter(function(se) {
      return se.type === "hyperlink";
    }));
    return $ ? $.options : null;
  }
  function j($) {
    var se = /\s*HYPERLINK "(.*)"/.exec($);
    if (se)
      return { href: se[1] };
    var fe = /\s*HYPERLINK\s+\\l\s+"(.*)"/.exec($);
    return fe ? { anchor: fe[1] } : null;
  }
  function q($) {
    return n.push($.text()), Nn();
  }
  function Y($) {
    var se = $.attributes["w:font"], fe = $.attributes["w:char"], be = tu.hex(se, fe);
    return be == null && /^F0..$/.test(fe) && (be = tu.hex(se, fe.substring(2))), be == null ? Wn([Ut(
      "A w:sym element with an unsupported character was ignored: char " + fe + " in font " + se
    )]) : at(new Ne.Text(be.string));
  }
  function oe($) {
    return function(se) {
      var fe = se.attributes["w:id"];
      return at(new Ne.NoteReference({
        noteType: $,
        noteId: fe
      }));
    };
  }
  function T($) {
    return at(Ne.commentReference({
      commentId: $.attributes["w:id"]
    }));
  }
  function P($) {
    return f($.children);
  }
  var _ = {
    "w:p": function($) {
      var se = $.firstOrEmpty("w:pPr"), fe = !!se.firstOrEmpty("w:rPr").first("w:del");
      if (fe)
        return $.children.forEach(function(_e) {
          r.push(_e);
        }), Nn();
      var be = $.children;
      return r.length > 0 && (be = r.concat(be), r = []), Me.map(
        y(se),
        f(be),
        function(_e, v) {
          return new Ne.Paragraph(v, _e);
        }
      ).insertExtra();
    },
    "w:r": function($) {
      return Me.map(
        b($.firstOrEmpty("w:rPr")),
        f($.children),
        function(se, fe) {
          var be = F();
          return be !== null && (fe = [new Ne.Hyperlink(fe, be)]), new Ne.Run(fe, se);
        }
      );
    },
    "w:fldChar": E,
    "w:instrText": q,
    "w:t": function($) {
      return at(new Ne.Text($.text()));
    },
    "w:tab": function($) {
      return at(new Ne.Tab());
    },
    "w:noBreakHyphen": function() {
      return at(new Ne.Text("‑"));
    },
    "w:softHyphen": function($) {
      return at(new Ne.Text("­"));
    },
    "w:sym": Y,
    "w:hyperlink": function($) {
      var se = $.attributes["r:id"], fe = $.attributes["w:anchor"];
      return f($.children).map(function(be) {
        function _e(ie) {
          var ee = $.attributes["w:tgtFrame"] || null;
          return new Ne.Hyperlink(
            be,
            ut.extend({ targetFrame: ee }, ie)
          );
        }
        if (se) {
          var v = i.findTargetByRelationshipId(se);
          return fe && (v = nu.replaceFragment(v, fe)), _e({ href: v });
        } else
          return fe ? _e({ anchor: fe }) : be;
      });
    },
    "w:tbl": Q,
    "w:tr": R,
    "w:tc": N,
    "w:footnoteReference": oe("footnote"),
    "w:endnoteReference": oe("endnote"),
    "w:commentReference": T,
    "w:br": function($) {
      var se = $.attributes["w:type"];
      return se == null || se === "textWrapping" ? at(Ne.lineBreak) : se === "page" ? at(Ne.pageBreak) : se === "column" ? at(Ne.columnBreak) : Wn([Ut("Unsupported break type: " + se)]);
    },
    "w:bookmarkStart": function($) {
      var se = $.attributes["w:name"];
      return se === "_GoBack" ? Nn() : at(new Ne.BookmarkStart({ name: se }));
    },
    "mc:AlternateContent": function($) {
      return P($.first("mc:Fallback"));
    },
    "w:sdt": function($) {
      return f($.firstOrEmpty("w:sdtContent").children);
    },
    "w:ins": P,
    "w:object": P,
    "w:smartTag": P,
    "w:drawing": P,
    "w:pict": function($) {
      return P($).toExtra();
    },
    "v:roundrect": P,
    "v:shape": P,
    "v:textbox": P,
    "w:txbxContent": P,
    "wp:inline": k,
    "wp:anchor": k,
    "v:imagedata": re,
    "v:group": P,
    "v:rect": P
  };
  return {
    readXmlElement: p,
    readXmlElements: f
  };
  function Q($) {
    var se = S($.firstOrEmpty("w:tblPr"));
    return f($.children).flatMap(M).flatMap(function(fe) {
      return se.map(function(be) {
        return Ne.Table(fe, be);
      });
    });
  }
  function S($) {
    return D($).map(function(se) {
      return {
        styleId: se.styleId,
        styleName: se.name
      };
    });
  }
  function R($) {
    var se = $.firstOrEmpty("w:trPr"), fe = !!se.first("w:tblHeader");
    return f($.children).map(function(be) {
      return Ne.TableRow(be, { isHeader: fe });
    });
  }
  function N($) {
    return f($.children).map(function(se) {
      var fe = $.firstOrEmpty("w:tcPr"), be = fe.firstOrEmpty("w:gridSpan").attributes["w:val"], _e = be ? parseInt(be, 10) : 1, v = Ne.TableCell(se, { colSpan: _e });
      return v._vMerge = I(fe), v;
    });
  }
  function I($) {
    var se = $.first("w:vMerge");
    if (se) {
      var fe = se.attributes["w:val"];
      return fe === "continue" || !fe;
    } else
      return null;
  }
  function M($) {
    var se = ut.any($, function(_e) {
      return _e.type !== Ne.types.tableRow;
    });
    if (se)
      return fr($, [Ut(
        "unexpected non-row element in table, cell merging may be incorrect"
      )]);
    var fe = ut.any($, function(_e) {
      return ut.any(_e.children, function(v) {
        return v.type !== Ne.types.tableCell;
      });
    });
    if (fe)
      return fr($, [Ut(
        "unexpected non-cell element in table row, cell merging may be incorrect"
      )]);
    var be = {};
    return $.forEach(function(_e) {
      var v = 0;
      _e.children.forEach(function(ie) {
        ie._vMerge && be[v] ? be[v].rowSpan++ : (be[v] = ie, ie._vMerge = !1), v += ie.colSpan;
      });
    }), $.forEach(function(_e) {
      _e.children = _e.children.filter(function(v) {
        return !v._vMerge;
      }), _e.children.forEach(function(v) {
        delete v._vMerge;
      });
    }), at($);
  }
  function k($) {
    var se = $.getElementsByTagName("a:graphic").getElementsByTagName("a:graphicData").getElementsByTagName("pic:pic").getElementsByTagName("pic:blipFill").getElementsByTagName("a:blip");
    return iu(se.map(C.bind(null, $)));
  }
  function C($, se) {
    var fe = $.first("wp:docPr").attributes, be = J(fe.descr) ? fe.title : fe.descr, _e = ce(se);
    return _e === null ? Wn([Ut("Could not find image file for a:blip element")]) : me(_e, be);
  }
  function J($) {
    return $ == null || /^\s*$/.test($);
  }
  function ce($) {
    var se = $.attributes["r:embed"], fe = $.attributes["r:link"];
    if (se)
      return le(se);
    if (fe) {
      var be = i.findTargetByRelationshipId(fe);
      return {
        path: be,
        read: o.read.bind(o, be)
      };
    } else
      return null;
  }
  function re($) {
    var se = $.attributes["r:id"];
    return se ? me(
      le(se),
      $.attributes["o:title"]
    ) : Wn([Ut("A v:imagedata element without a relationship ID was ignored")]);
  }
  function le($) {
    var se = nu.uriToZipEntryName("word", i.findTargetByRelationshipId($));
    return {
      path: se,
      read: c.read.bind(c, se)
    };
  }
  function me($, se) {
    var fe = a.findContentType($.path), be = Ne.Image({
      readImage: $.read,
      altText: se,
      contentType: fe
    }), _e = O2[fe] ? [] : Ut("Image of type " + fe + " is unlikely to display in web browsers");
    return fr(be, _e);
  }
  function ye($, se) {
    return Ut(
      $ + " style with ID " + se + " was referenced but not defined in the document"
    );
  }
}
function Ld(e, t, n) {
  if (e != null) {
    var r = n.findLevelByParagraphStyleId(e);
    if (r != null)
      return r;
  }
  var i = t.firstOrEmpty("w:ilvl").attributes["w:val"], a = t.firstOrEmpty("w:numId").attributes["w:val"];
  return i === void 0 || a === void 0 ? null : n.findLevel(a, i);
}
var O2 = {
  "image/png": !0,
  "image/gif": !0,
  "image/jpeg": !0,
  "image/svg+xml": !0,
  "image/tiff": !0
}, I2 = {
  "office-word:wrap": !0,
  "v:shadow": !0,
  "v:shapetype": !0,
  "w:annotationRef": !0,
  "w:bookmarkEnd": !0,
  "w:sectPr": !0,
  "w:proofErr": !0,
  "w:lastRenderedPageBreak": !0,
  "w:commentRangeStart": !0,
  "w:commentRangeEnd": !0,
  "w:del": !0,
  "w:footnoteRef": !0,
  "w:endnoteRef": !0,
  "w:pPr": !0,
  "w:rPr": !0,
  "w:tblPr": !0,
  "w:tblGrid": !0,
  "w:trPr": !0,
  "w:tcPr": !0
};
function Wn(e) {
  return new Me(null, null, e);
}
function Nn() {
  return new Me(null);
}
function at(e) {
  return new Me(e);
}
function fr(e, t) {
  return new Me(e, null, t);
}
function Me(e, t, n) {
  this.value = e || [], this.extra = t || [], this._result = new Id({
    element: this.value,
    extra: t
  }, n), this.messages = this._result.messages;
}
Me.prototype.toExtra = function() {
  return new Me(null, xi(this.extra, this.value), this.messages);
};
Me.prototype.insertExtra = function() {
  var e = this.extra;
  return e && e.length ? new Me(xi(this.value, e), null, this.messages) : this;
};
Me.prototype.map = function(e) {
  var t = this._result.map(function(n) {
    return e(n.element);
  });
  return new Me(t.value, this.extra, t.messages);
};
Me.prototype.flatMap = function(e) {
  var t = this._result.flatMap(function(n) {
    return e(n.element)._result;
  });
  return new Me(t.value.element, xi(this.extra, t.value.extra), t.messages);
};
Me.map = function(e, t, n) {
  return new Me(
    n(e.value, t.value),
    xi(e.extra, t.extra),
    e.messages.concat(t.messages)
  );
};
function iu(e) {
  var t = Id.combine(ut.pluck(e, "_result"));
  return new Me(
    ut.flatten(ut.pluck(t.value, "element")),
    ut.filter(ut.flatten(ut.pluck(t.value, "extra")), L2),
    t.messages
  );
}
function xi(e, t) {
  return ut.flatten([e, t]);
}
function L2(e) {
  return e;
}
var Md = {};
Md.DocumentXmlReader = P2;
var M2 = Ce, j2 = it.Result;
function P2(e) {
  var t = e.bodyReader;
  function n(r) {
    var i = r.first("w:body"), a = t.readXmlElements(i.children).map(function(c) {
      return new M2.Document(c, {
        notes: e.notes,
        comments: e.comments
      });
    });
    return new j2(a.value, a.messages);
  }
  return {
    convertXmlToDocument: n
  };
}
var _i = {};
_i.readRelationships = q2;
_i.defaultValue = new Fo([]);
_i.Relationships = Fo;
function q2(e) {
  var t = [];
  return e.children.forEach(function(n) {
    if (n.name === "{http://schemas.openxmlformats.org/package/2006/relationships}Relationship") {
      var r = {
        relationshipId: n.attributes.Id,
        target: n.attributes.Target,
        type: n.attributes.Type
      };
      t.push(r);
    }
  }), new Fo(t);
}
function Fo(e) {
  var t = {};
  e.forEach(function(r) {
    t[r.relationshipId] = r.target;
  });
  var n = {};
  return e.forEach(function(r) {
    n[r.type] || (n[r.type] = []), n[r.type].push(r.target);
  }), {
    findTargetByRelationshipId: function(r) {
      return t[r];
    },
    findTargetsByType: function(r) {
      return n[r] || [];
    }
  };
}
var So = {};
So.readContentTypesFromXml = X2;
var z2 = {
  png: "png",
  gif: "gif",
  jpeg: "jpeg",
  jpg: "jpeg",
  tif: "tiff",
  tiff: "tiff",
  bmp: "bmp"
};
So.defaultContentTypes = jd({}, {});
function X2(e) {
  var t = {}, n = {};
  return e.children.forEach(function(r) {
    if (r.name === "content-types:Default" && (t[r.attributes.Extension] = r.attributes.ContentType), r.name === "content-types:Override") {
      var i = r.attributes.PartName;
      i.charAt(0) === "/" && (i = i.substring(1)), n[i] = r.attributes.ContentType;
    }
  }), jd(n, t);
}
function jd(e, t) {
  return {
    findContentType: function(n) {
      var r = e[n];
      if (r)
        return r;
      var i = n.split("."), a = i[i.length - 1];
      if (t.hasOwnProperty(a))
        return t[a];
      var c = z2[a.toLowerCase()];
      return c ? "image/" + c : null;
    }
  };
}
var Ui = {}, hr = We;
Ui.readNumberingXml = V2;
Ui.Numbering = Bo;
Ui.defaultNumbering = new Bo({}, {});
function Bo(e, t, n) {
  var r = hr.flatten(hr.values(t).map(function(o) {
    return hr.values(o.levels);
  })), i = hr.indexBy(
    r.filter(function(o) {
      return o.paragraphStyleId != null;
    }),
    "paragraphStyleId"
  );
  function a(o, s) {
    var u = e[o];
    if (u) {
      var f = t[u.abstractNumId];
      if (f) {
        if (f.numStyleLink == null)
          return t[u.abstractNumId].levels[s];
        var p = n.findNumberingStyleById(f.numStyleLink);
        return a(p.numId, s);
      } else
        return null;
    } else
      return null;
  }
  function c(o) {
    return i[o] || null;
  }
  return {
    findLevel: a,
    findLevelByParagraphStyleId: c
  };
}
function V2(e, t) {
  if (!t || !t.styles)
    throw new Error("styles is missing");
  var n = H2(e), r = Z2(e);
  return new Bo(r, n, t.styles);
}
function H2(e) {
  var t = {};
  return e.getElementsByTagName("w:abstractNum").forEach(function(n) {
    var r = n.attributes["w:abstractNumId"];
    t[r] = $2(n);
  }), t;
}
function $2(e) {
  var t = {};
  e.getElementsByTagName("w:lvl").forEach(function(r) {
    var i = r.attributes["w:ilvl"], a = r.first("w:numFmt").attributes["w:val"], c = r.firstOrEmpty("w:pStyle").attributes["w:val"];
    t[i] = {
      isOrdered: a !== "bullet",
      level: i,
      paragraphStyleId: c
    };
  });
  var n = e.firstOrEmpty("w:numStyleLink").attributes["w:val"];
  return { levels: t, numStyleLink: n };
}
function Z2(e) {
  var t = {};
  return e.getElementsByTagName("w:num").forEach(function(n) {
    var r = n.attributes["w:numId"], i = n.first("w:abstractNumId").attributes["w:val"];
    t[r] = { abstractNumId: i };
  }), t;
}
var wi = {};
wi.readStylesXml = G2;
wi.Styles = Vn;
wi.defaultStyles = new Vn({}, {});
function Vn(e, t, n, r) {
  return {
    findParagraphStyleById: function(i) {
      return e[i];
    },
    findCharacterStyleById: function(i) {
      return t[i];
    },
    findTableStyleById: function(i) {
      return n[i];
    },
    findNumberingStyleById: function(i) {
      return r[i];
    }
  };
}
Vn.EMPTY = new Vn({}, {}, {}, {});
function G2(e) {
  var t = {}, n = {}, r = {}, i = {}, a = {
    paragraph: t,
    character: n,
    table: r
  };
  return e.getElementsByTagName("w:style").forEach(function(c) {
    var o = Y2(c);
    if (o.type === "numbering")
      i[o.styleId] = Q2(c);
    else {
      var s = a[o.type];
      s && (s[o.styleId] = o);
    }
  }), new Vn(t, n, r, i);
}
function Y2(e) {
  var t = e.attributes["w:type"], n = e.attributes["w:styleId"], r = K2(e);
  return { type: t, styleId: n, name: r };
}
function K2(e) {
  var t = e.first("w:name");
  return t ? t.attributes["w:val"] : null;
}
function Q2(e) {
  var t = e.firstOrEmpty("w:pPr").firstOrEmpty("w:numPr").firstOrEmpty("w:numId").attributes["w:val"];
  return { numId: t };
}
var ko = {}, J2 = Ce, em = it.Result;
ko.createFootnotesReader = Pd.bind(we, "footnote");
ko.createEndnotesReader = Pd.bind(we, "endnote");
function Pd(e, t) {
  function n(a) {
    return em.combine(a.getElementsByTagName("w:" + e).filter(r).map(i));
  }
  function r(a) {
    var c = a.attributes["w:type"];
    return c !== "continuationSeparator" && c !== "separator";
  }
  function i(a) {
    var c = a.attributes["w:id"];
    return t.readXmlElements(a.children).map(function(o) {
      return J2.Note({ noteType: e, noteId: c, body: o });
    });
  }
  return n;
}
var qd = {}, tm = Ce, nm = it.Result;
function rm(e) {
  function t(r) {
    return nm.combine(r.getElementsByTagName("w:comment").map(n));
  }
  function n(r) {
    var i = r.attributes["w:id"];
    function a(c) {
      return (r.attributes[c] || "").trim() || null;
    }
    return e.readXmlElements(r.children).map(function(c) {
      return tm.comment({
        commentId: i,
        body: c,
        authorName: a("w:author"),
        authorInitials: a("w:initials")
      });
    });
  }
  return t;
}
qd.createCommentsReader = rm;
var zd = {}, im = Le;
zd.Files = am;
function am() {
  function e(t) {
    return im.reject(new Error("could not open external image: '" + t + `'
cannot open linked files from a web browser`));
  }
  return {
    read: e
  };
}
oo.read = hm;
oo._findPartPaths = Vd;
var om = Xu, cm = Le, sm = Ce, Na = it.Result, Gr = Gn, Xd = uo.readXmlFromZipFile, um = To.createBodyReader, dm = Md.DocumentXmlReader, bn = _i, au = So, ou = Ui, cu = wi, su = ko, lm = qd, fm = zd.Files;
function hm(e, t) {
  return t = t || {}, cm.props({
    contentTypes: gm(e),
    partPaths: Vd(e),
    docxFile: e,
    files: new fm(t.path ? om.dirname(t.path) : null)
  }).also(function(n) {
    return {
      styles: bm(e, n.partPaths.styles)
    };
  }).also(function(n) {
    return {
      numbering: mm(e, n.partPaths.numbering, n.styles)
    };
  }).also(function(n) {
    return {
      footnotes: pr(n.partPaths.footnotes, n, function(r, i) {
        return i ? su.createFootnotesReader(r)(i) : new Na([]);
      }),
      endnotes: pr(n.partPaths.endnotes, n, function(r, i) {
        return i ? su.createEndnotesReader(r)(i) : new Na([]);
      }),
      comments: pr(n.partPaths.comments, n, function(r, i) {
        return i ? lm.createCommentsReader(r)(i) : new Na([]);
      })
    };
  }).also(function(n) {
    return {
      notes: n.footnotes.flatMap(function(r) {
        return n.endnotes.map(function(i) {
          return new sm.Notes(r.concat(i));
        });
      })
    };
  }).then(function(n) {
    return pr(n.partPaths.mainDocument, n, function(r, i) {
      return n.notes.flatMap(function(a) {
        return n.comments.flatMap(function(c) {
          var o = new dm({
            bodyReader: r,
            notes: a,
            comments: c
          });
          return o.convertXmlToDocument(i);
        });
      });
    });
  });
}
function Vd(e) {
  return ym(e).then(function(t) {
    var n = uu({
      docxFile: e,
      relationships: t,
      relationshipType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
      basePath: "",
      fallbackPath: "word/document.xml"
    });
    if (!e.exists(n))
      throw new Error("Could not find main document part. Are you sure this is a valid .docx file?");
    return wn({
      filename: Hd(n),
      readElement: bn.readRelationships,
      defaultValue: bn.defaultValue
    })(e).then(function(r) {
      function i(a) {
        return uu({
          docxFile: e,
          relationships: r,
          relationshipType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/" + a,
          basePath: Gr.splitPath(n).dirname,
          fallbackPath: "word/" + a + ".xml"
        });
      }
      return {
        mainDocument: n,
        comments: i("comments"),
        endnotes: i("endnotes"),
        footnotes: i("footnotes"),
        numbering: i("numbering"),
        styles: i("styles")
      };
    });
  });
}
function uu(e) {
  var t = e.docxFile, n = e.relationships, r = e.relationshipType, i = e.basePath, a = e.fallbackPath, c = n.findTargetsByType(r), o = c.map(function(u) {
    return pm(Gr.joinPath(i, u), "/");
  }), s = o.filter(function(u) {
    return t.exists(u);
  });
  return s.length === 0 ? a : s[0];
}
function pm(e, t) {
  return e.substring(0, t.length) === t ? e.substring(t.length) : e;
}
function wn(e) {
  return function(t) {
    return Xd(t, e.filename).then(function(n) {
      return n ? e.readElement(n) : e.defaultValue;
    });
  };
}
function pr(e, t, n) {
  var r = wn({
    filename: Hd(e),
    readElement: bn.readRelationships,
    defaultValue: bn.defaultValue
  });
  return r(t.docxFile).then(function(i) {
    var a = new um({
      relationships: i,
      contentTypes: t.contentTypes,
      docxFile: t.docxFile,
      numbering: t.numbering,
      styles: t.styles,
      files: t.files
    });
    return Xd(t.docxFile, e).then(function(c) {
      return n(a, c);
    });
  });
}
function Hd(e) {
  var t = Gr.splitPath(e);
  return Gr.joinPath(t.dirname, "_rels", t.basename + ".rels");
}
var gm = wn({
  filename: "[Content_Types].xml",
  readElement: au.readContentTypesFromXml,
  defaultValue: au.defaultContentTypes
});
function mm(e, t, n) {
  return wn({
    filename: t,
    readElement: function(r) {
      return ou.readNumberingXml(r, { styles: n });
    },
    defaultValue: ou.defaultNumbering
  })(e);
}
function bm(e, t) {
  return wn({
    filename: t,
    readElement: cu.readStylesXml,
    defaultValue: cu.defaultStyles
  })(e);
}
var ym = wn({
  filename: "_rels/.rels",
  readElement: bn.readRelationships,
  defaultValue: bn.defaultValue
}), Wo = {}, Dm = We, vm = Le, Hn = en;
Wo.writeStyleMap = _m;
Wo.readStyleMap = Tm;
var xm = "http://schemas.zwobble.org/mammoth/style-map", Yr = "mammoth/style-map", $d = "/" + Yr;
function _m(e, t) {
  return e.write(Yr, t), Um(e).then(function() {
    return wm(e);
  });
}
function Um(e) {
  var t = "word/_rels/document.xml.rels", n = "http://schemas.openxmlformats.org/package/2006/relationships", r = "{" + n + "}Relationship";
  return e.read(t, "utf8").then(Hn.readString).then(function(i) {
    var a = i.children;
    Zd(a, r, "Id", {
      Id: "rMammothStyleMap",
      Type: xm,
      Target: $d
    });
    var c = { "": n };
    return e.write(t, Hn.writeString(i, c));
  });
}
function wm(e) {
  var t = "[Content_Types].xml", n = "http://schemas.openxmlformats.org/package/2006/content-types", r = "{" + n + "}Override";
  return e.read(t, "utf8").then(Hn.readString).then(function(i) {
    var a = i.children;
    Zd(a, r, "PartName", {
      PartName: $d,
      ContentType: "text/prs.mammoth.style-map"
    });
    var c = { "": n };
    return e.write(t, Hn.writeString(i, c));
  });
}
function Zd(e, t, n, r) {
  var i = Dm.find(e, function(a) {
    return a.name === t && a.attributes[n] === r[n];
  });
  i ? i.attributes = r : e.push(Hn.element(t, r));
}
function Tm(e) {
  return e.exists(Yr) ? e.read(Yr, "utf8") : vm.resolve(null);
}
var No = {}, $t = {}, wt = {}, Wt = {}, du;
function Gd() {
  if (du)
    return Wt;
  du = 1;
  var e = Ei();
  function t(s, u, f) {
    return r(
      e.element(s, u, { fresh: !1 }),
      f
    );
  }
  function n(s, u, f) {
    var p = e.element(s, u, { fresh: !0 });
    return r(p, f);
  }
  function r(s, u) {
    return {
      type: "element",
      tag: s,
      children: u || []
    };
  }
  function i(s) {
    return {
      type: "text",
      value: s
    };
  }
  var a = {
    type: "forceWrite"
  };
  Wt.freshElement = n, Wt.nonFreshElement = t, Wt.elementWithTag = r, Wt.text = i, Wt.forceWrite = a;
  var c = {
    br: !0,
    hr: !0,
    img: !0
  };
  function o(s) {
    return s.children.length === 0 && c[s.tag.tagName];
  }
  return Wt.isVoidElement = o, Wt;
}
var Ra, lu;
function Em() {
  if (lu)
    return Ra;
  lu = 1;
  var e = We, t = Gd();
  function n(d) {
    return r(u(d));
  }
  function r(d) {
    var l = [];
    return d.map(i).forEach(function(g) {
      s(l, g);
    }), l;
  }
  function i(d) {
    return a[d.type](d);
  }
  var a = {
    element: c,
    text: o,
    forceWrite: o
  };
  function c(d) {
    return t.elementWithTag(d.tag, r(d.children));
  }
  function o(d) {
    return d;
  }
  function s(d, l) {
    var g = d[d.length - 1];
    l.type === "element" && !l.tag.fresh && g && g.type === "element" && l.tag.matchesElement(g.tag) ? (l.tag.separator && s(g.children, t.text(l.tag.separator)), l.children.forEach(function(h) {
      s(g.children, h);
    })) : d.push(l);
  }
  function u(d) {
    return f(d, function(l) {
      return p[l.type](l);
    });
  }
  function f(d, l) {
    return e.flatten(e.map(d, l), !0);
  }
  var p = {
    element: m,
    text: b,
    forceWrite: y
  };
  function y(d) {
    return [d];
  }
  function m(d) {
    var l = u(d.children);
    return l.length === 0 && !t.isVoidElement(d) ? [] : [t.elementWithTag(d.tag, l)];
  }
  function b(d) {
    return d.value.length === 0 ? [] : [d];
  }
  return Ra = n, Ra;
}
var fu;
function Ti() {
  if (fu)
    return wt;
  fu = 1;
  var e = Gd();
  wt.freshElement = e.freshElement, wt.nonFreshElement = e.nonFreshElement, wt.elementWithTag = e.elementWithTag, wt.text = e.text, wt.forceWrite = e.forceWrite, wt.simplify = Em();
  function t(c, o) {
    o.forEach(function(s) {
      n(c, s);
    });
  }
  function n(c, o) {
    r[o.type](c, o);
  }
  var r = {
    element: i,
    text: a,
    forceWrite: function() {
    }
  };
  function i(c, o) {
    e.isVoidElement(o) ? c.selfClosing(o.tag.tagName, o.tag.attributes) : (c.open(o.tag.tagName, o.tag.attributes), t(c, o.children), c.close(o.tag.tagName));
  }
  function a(c, o) {
    c.text(o.value);
  }
  return wt.write = t, wt;
}
var hu;
function Ei() {
  if (hu)
    return $t;
  hu = 1;
  var e = We, t = Ti();
  $t.topLevelElement = n, $t.elements = r, $t.element = a;
  function n(o, s) {
    return r([a(o, s, { fresh: !0 })]);
  }
  function r(o) {
    return new i(o.map(function(s) {
      return e.isString(s) ? a(s) : s;
    }));
  }
  function i(o) {
    this._elements = o;
  }
  i.prototype.wrap = function(s) {
    for (var u = s(), f = this._elements.length - 1; f >= 0; f--)
      u = this._elements[f].wrapNodes(u);
    return u;
  };
  function a(o, s, u) {
    return u = u || {}, new c(o, s, u);
  }
  function c(o, s, u) {
    var f = {};
    e.isArray(o) ? (o.forEach(function(p) {
      f[p] = !0;
    }), o = o[0]) : f[o] = !0, this.tagName = o, this.tagNames = f, this.attributes = s || {}, this.fresh = u.fresh, this.separator = u.separator;
  }
  return c.prototype.matchesElement = function(o) {
    return this.tagNames[o.tagName] && e.isEqual(this.attributes || {}, o.attributes || {});
  }, c.prototype.wrap = function(s) {
    return this.wrapNodes(s());
  }, c.prototype.wrapNodes = function(s) {
    return [t.elementWithTag(this, s)];
  }, $t.empty = r([]), $t.ignore = {
    wrap: function() {
      return [];
    }
  }, $t;
}
var Ro = {};
(function(e) {
  var t = We, n = Le, r = Ti();
  e.imgElement = i;
  function i(a) {
    return function(c, o) {
      return n.when(a(c)).then(function(s) {
        var u = {};
        return c.altText && (u.alt = c.altText), t.extend(u, s), [r.freshElement("img", u)];
      });
    };
  }
  e.inline = e.imgElement, e.dataUri = i(function(a) {
    return a.readAsBase64String().then(function(c) {
      return {
        src: "data:" + a.contentType + ";base64," + c
      };
    });
  });
})(Ro);
var Yd = {}, Kd = {}, Qd = We;
Kd.writer = Am;
function Am(e) {
  return e = e || {}, e.prettyPrint ? Cm() : Jd();
}
var gr = {
  div: !0,
  p: !0,
  ul: !0,
  li: !0
};
function Cm() {
  var e = 0, t = "  ", n = [], r = !0, i = !1, a = Jd();
  function c(b, d) {
    gr[b] && y(), n.push(b), a.open(b, d), gr[b] && e++, r = !1;
  }
  function o(b) {
    gr[b] && (e--, y()), n.pop(), a.close(b);
  }
  function s(b) {
    p();
    var d = m() ? b : b.replace(`
`, `
` + t);
    a.text(d);
  }
  function u(b, d) {
    y(), a.selfClosing(b, d);
  }
  function f() {
    return n.length === 0 || gr[n[n.length - 1]];
  }
  function p() {
    i || (y(), i = !0);
  }
  function y() {
    if (i = !1, !r && f() && !m()) {
      a._append(`
`);
      for (var b = 0; b < e; b++)
        a._append(t);
    }
  }
  function m() {
    return Qd.some(n, function(b) {
      return b === "pre";
    });
  }
  return {
    asString: a.asString,
    open: c,
    close: o,
    text: s,
    selfClosing: u
  };
}
function Jd() {
  var e = [];
  function t(s, u) {
    var f = i(u);
    e.push("<" + s + f + ">");
  }
  function n(s) {
    e.push("</" + s + ">");
  }
  function r(s, u) {
    var f = i(u);
    e.push("<" + s + f + " />");
  }
  function i(s) {
    return Qd.map(s, function(u, f) {
      return " " + f + '="' + Sm(u) + '"';
    }).join("");
  }
  function a(s) {
    e.push(Fm(s));
  }
  function c(s) {
    e.push(s);
  }
  function o() {
    return e.join("");
  }
  return {
    asString: o,
    open: t,
    close: n,
    text: a,
    selfClosing: r,
    _append: c
  };
}
function Fm(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Sm(e) {
  return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var el = {}, Bm = We;
function pu(e) {
  return Kr(e, e);
}
function Kr(e, t) {
  return function() {
    return { start: e, end: t };
  };
}
function km(e) {
  var t = e.href || "";
  return t ? {
    start: "[",
    end: "](" + t + ")",
    anchorPosition: "before"
  } : {};
}
function Wm(e) {
  var t = e.src || "", n = e.alt || "";
  return t || n ? { start: "![" + n + "](" + t + ")" } : {};
}
function gu(e) {
  return function(t, n) {
    return {
      start: n ? `
` : "",
      end: n ? "" : `
`,
      list: {
        isOrdered: e.isOrdered,
        indent: n ? n.indent + 1 : 0,
        count: 0
      }
    };
  };
}
function Nm(e, t, n) {
  t = t || { indent: 0, isOrdered: !1, count: 0 }, t.count++, n.hasClosed = !1;
  var r = t.isOrdered ? t.count + "." : "-", i = nl("	", t.indent) + r + " ";
  return {
    start: i,
    end: function() {
      if (!n.hasClosed)
        return n.hasClosed = !0, `
`;
    }
  };
}
var tl = {
  p: Kr("", `

`),
  br: Kr("", `  
`),
  ul: gu({ isOrdered: !1 }),
  ol: gu({ isOrdered: !0 }),
  li: Nm,
  strong: pu("__"),
  em: pu("*"),
  a: km,
  img: Wm
};
(function() {
  for (var e = 1; e <= 6; e++)
    tl["h" + e] = Kr(nl("#", e) + " ", `

`);
})();
function nl(e, t) {
  return new Array(t + 1).join(e);
}
function Rm() {
  var e = [], t = [], n = null, r = {};
  function i(f, p) {
    p = p || {};
    var y = tl[f] || function() {
      return {};
    }, m = y(p, n, r);
    t.push({ end: m.end, list: n }), m.list && (n = m.list);
    var b = m.anchorPosition === "before";
    b && a(p), e.push(m.start || ""), b || a(p);
  }
  function a(f) {
    f.id && e.push('<a id="' + f.id + '"></a>');
  }
  function c(f) {
    var p = t.pop();
    n = p.list;
    var y = Bm.isFunction(p.end) ? p.end() : p.end;
    e.push(y || "");
  }
  function o(f, p) {
    i(f, p), c();
  }
  function s(f) {
    e.push(Om(f));
  }
  function u() {
    return e.join("");
  }
  return {
    asString: u,
    open: i,
    close: c,
    text: s,
    selfClosing: o
  };
}
el.writer = Rm;
function Om(e) {
  return e.replace(/\\/g, "\\\\").replace(/([\`\*_\{\}\[\]\(\)\#\+\-\.\!])/g, "\\$1");
}
var Im = Kd, Lm = el;
Yd.writer = Mm;
function Mm(e) {
  return e = e || {}, e.outputFormat === "markdown" ? Lm.writer() : Im.writer(e);
}
var Nt = We, mu = Le, yr = Ce, ot = Ei(), Qa = it, jm = Ro, Ae = Ti(), Pm = Yd;
No.DocumentConverter = qm;
function qm(e) {
  return {
    convertToHtml: function(t) {
      var n = Nt.indexBy(
        t.type === yr.types.document ? t.comments : [],
        "commentId"
      ), r = new zm(e, n);
      return r.convertToHtml(t);
    }
  };
}
function zm(e, t) {
  var n = 1, r = [], i = [];
  e = Nt.extend({ ignoreEmptyParagraphs: !0 }, e);
  var a = e.idPrefix === void 0 ? "" : e.idPrefix, c = e.ignoreEmptyParagraphs, o = ot.topLevelElement("p"), s = e.styleMap || [];
  function u(N) {
    var I = [], M = p(N, I, {}), k = [];
    rl(M, function(J) {
      J.type === "deferred" && k.push(J);
    });
    var C = {};
    return mu.mapSeries(k, function(J) {
      return J.value().then(function(ce) {
        C[J.id] = ce;
      });
    }).then(function() {
      function J(re) {
        return Oa(re, function(le) {
          return le.type === "deferred" ? C[le.id] : le.children ? [
            Nt.extend({}, le, {
              children: J(le.children)
            })
          ] : [le];
        });
      }
      var ce = Pm.writer({
        prettyPrint: e.prettyPrint,
        outputFormat: e.outputFormat
      });
      return Ae.write(ce, Ae.simplify(J(M))), new Qa.Result(ce.asString(), I);
    });
  }
  function f(N, I, M) {
    return Oa(N, function(k) {
      return p(k, I, M);
    });
  }
  function p(N, I, M) {
    if (!M)
      throw new Error("options not set");
    var k = R[N.type];
    return k ? k(N, I, M) : [];
  }
  function y(N, I, M) {
    return m(N, I).wrap(function() {
      var k = f(N.children, I, M);
      return c ? k : [Ae.forceWrite].concat(k);
    });
  }
  function m(N, I) {
    var M = g(N);
    return M ? M.to : (N.styleId && I.push(bu("paragraph", N)), o);
  }
  function b(N, I, M) {
    var k = function() {
      return f(N.children, I, M);
    }, C = [];
    N.isSmallCaps && C.push(d("smallCaps")), N.isAllCaps && C.push(d("allCaps")), N.isStrikethrough && C.push(d("strikethrough", "s")), N.isUnderline && C.push(d("underline")), N.verticalAlignment === yr.verticalAlignment.subscript && C.push(ot.element("sub", {}, { fresh: !1 })), N.verticalAlignment === yr.verticalAlignment.superscript && C.push(ot.element("sup", {}, { fresh: !1 })), N.isItalic && C.push(d("italic", "em")), N.isBold && C.push(d("bold", "strong"));
    var J = ot.empty, ce = g(N);
    return ce ? J = ce.to : N.styleId && I.push(bu("run", N)), C.push(J), C.forEach(function(re) {
      k = re.wrap.bind(re, k);
    }), k();
  }
  function d(N, I) {
    var M = l({ type: N });
    return M || (I ? ot.element(I, {}, { fresh: !1 }) : ot.empty);
  }
  function l(N, I) {
    var M = g(N);
    return M ? M.to : I;
  }
  function g(N) {
    for (var I = 0; I < s.length; I++)
      if (s[I].from.matches(N))
        return s[I];
  }
  function h(N) {
    return function(I, M) {
      return mu.attempt(function() {
        return N(I, M);
      }).caught(function(k) {
        return M.push(Qa.error(k)), [];
      });
    };
  }
  function D(N) {
    return U(N.noteType, N.noteId);
  }
  function w(N) {
    return E(N.noteType, N.noteId);
  }
  function U(N, I) {
    return F(N + "-" + I);
  }
  function E(N, I) {
    return F(N + "-ref-" + I);
  }
  function F(N) {
    return a + N;
  }
  var j = ot.elements([
    ot.element("table", {}, { fresh: !0 })
  ]);
  function q(N, I, M) {
    return l(N, j).wrap(function() {
      return Y(N, I, M);
    });
  }
  function Y(N, I, M) {
    var k = Nt.findIndex(N.children, function(re) {
      return !re.type === yr.types.tableRow || !re.isHeader;
    });
    k === -1 && (k = N.children.length);
    var C;
    if (k === 0)
      C = f(
        N.children,
        I,
        Nt.extend({}, M, { isTableHeader: !1 })
      );
    else {
      var J = f(
        N.children.slice(0, k),
        I,
        Nt.extend({}, M, { isTableHeader: !0 })
      ), ce = f(
        N.children.slice(k),
        I,
        Nt.extend({}, M, { isTableHeader: !1 })
      );
      C = [
        Ae.freshElement("thead", {}, J),
        Ae.freshElement("tbody", {}, ce)
      ];
    }
    return [Ae.forceWrite].concat(C);
  }
  function oe(N, I, M) {
    var k = f(N.children, I, M);
    return [
      Ae.freshElement("tr", {}, [Ae.forceWrite].concat(k))
    ];
  }
  function T(N, I, M) {
    var k = M.isTableHeader ? "th" : "td", C = f(N.children, I, M), J = {};
    return N.colSpan !== 1 && (J.colspan = N.colSpan.toString()), N.rowSpan !== 1 && (J.rowspan = N.rowSpan.toString()), [
      Ae.freshElement(k, J, [Ae.forceWrite].concat(C))
    ];
  }
  function P(N, I, M) {
    return l(N, ot.ignore).wrap(function() {
      var k = t[N.commentId], C = i.length + 1, J = "[" + Hm(k) + C + "]";
      return i.push({ label: J, comment: k }), [
        Ae.freshElement("a", {
          href: "#" + U("comment", N.commentId),
          id: E("comment", N.commentId)
        }, [Ae.text(J)])
      ];
    });
  }
  function _(N, I, M) {
    var k = N.label, C = N.comment, J = f(C.body, I, M).concat([
      Ae.nonFreshElement("p", {}, [
        Ae.text(" "),
        Ae.freshElement("a", { href: "#" + E("comment", C.commentId) }, [
          Ae.text("↑")
        ])
      ])
    ]);
    return [
      Ae.freshElement(
        "dt",
        { id: U("comment", C.commentId) },
        [Ae.text("Comment " + k)]
      ),
      Ae.freshElement("dd", {}, J)
    ];
  }
  function Q(N, I, M) {
    return S(N).wrap(function() {
      return [];
    });
  }
  function S(N) {
    var I = g(N);
    return I ? I.to : N.breakType === "line" ? ot.topLevelElement("br") : ot.empty;
  }
  var R = {
    document: function(N, I, M) {
      var k = f(N.children, I, M), C = r.map(function(ce) {
        return N.notes.resolve(ce);
      }), J = f(C, I, M);
      return k.concat([
        Ae.freshElement("ol", {}, J),
        Ae.freshElement("dl", {}, Oa(i, function(ce) {
          return _(ce, I, M);
        }))
      ]);
    },
    paragraph: y,
    run: b,
    text: function(N, I, M) {
      return [Ae.text(N.value)];
    },
    tab: function(N, I, M) {
      return [Ae.text("	")];
    },
    hyperlink: function(N, I, M) {
      var k = N.anchor ? "#" + F(N.anchor) : N.href, C = { href: k };
      N.targetFrame != null && (C.target = N.targetFrame);
      var J = f(N.children, I, M);
      return [Ae.nonFreshElement("a", C, J)];
    },
    bookmarkStart: function(N, I, M) {
      var k = Ae.freshElement("a", {
        id: F(N.name)
      }, [Ae.forceWrite]);
      return [k];
    },
    noteReference: function(N, I, M) {
      r.push(N);
      var k = Ae.freshElement("a", {
        href: "#" + D(N),
        id: w(N)
      }, [Ae.text("[" + n++ + "]")]);
      return [Ae.freshElement("sup", {}, [k])];
    },
    note: function(N, I, M) {
      var k = f(N.body, I, M), C = Ae.elementWithTag(ot.element("p", {}, { fresh: !1 }), [
        Ae.text(" "),
        Ae.freshElement("a", { href: "#" + w(N) }, [Ae.text("↑")])
      ]), J = k.concat([C]);
      return Ae.freshElement("li", { id: D(N) }, J);
    },
    commentReference: P,
    comment: _,
    image: Vm(h(e.convertImage || jm.dataUri)),
    table: q,
    tableRow: oe,
    tableCell: T,
    break: Q
  };
  return {
    convertToHtml: u
  };
}
var Xm = 1;
function Vm(e) {
  return function(t, n, r) {
    return [
      {
        type: "deferred",
        id: Xm++,
        value: function() {
          return e(t, n, r);
        }
      }
    ];
  };
}
function bu(e, t) {
  return Qa.warning(
    "Unrecognised " + e + " style: '" + t.styleName + "' (Style ID: " + t.styleId + ")"
  );
}
function Oa(e, t) {
  return Nt.flatten(e.map(t), !0);
}
function rl(e, t) {
  e.forEach(function(n) {
    t(n), n.children && rl(n.children, t);
  });
}
var Hm = No.commentAuthorLabel = function(t) {
  return t.authorInitials || "";
}, il = {}, $m = Ce;
function al(e) {
  if (e.type === "text")
    return e.value;
  if (e.type === $m.types.tab)
    return "	";
  var t = e.type === "paragraph" ? `

` : "";
  return (e.children || []).map(al).join("") + t;
}
il.convertElementToRawText = al;
var Ai = {}, ht = {}, ol = {}, Ja = {}, Zm = {
  get exports() {
    return Ja;
  },
  set exports(e) {
    Ja = e;
  }
}, yn = Zm.exports = function(e, t) {
  this._tokens = e, this._startIndex = t || 0;
};
yn.prototype.head = function() {
  return this._tokens[this._startIndex];
};
yn.prototype.tail = function(e) {
  return new yn(this._tokens, this._startIndex + 1);
};
yn.prototype.toArray = function() {
  return this._tokens.slice(this._startIndex);
};
yn.prototype.end = function() {
  return this._tokens[this._tokens.length - 1];
};
yn.prototype.to = function(e) {
  var t = this.head().source, n = e.head() || e.end();
  return t.to(n.source);
};
var Gm = Ja;
ol.Parser = function(e) {
  var t = function(n, r) {
    return n(new Gm(r));
  };
  return {
    parseTokens: t
  };
};
var Oo = {}, cl = {};
(function(e) {
  e.none = /* @__PURE__ */ Object.create({
    value: function() {
      throw new Error("Called value on none");
    },
    isNone: function() {
      return !0;
    },
    isSome: function() {
      return !1;
    },
    map: function() {
      return e.none;
    },
    flatMap: function() {
      return e.none;
    },
    filter: function() {
      return e.none;
    },
    toArray: function() {
      return [];
    },
    orElse: t,
    valueOrElse: t
  });
  function t(r) {
    return typeof r == "function" ? r() : r;
  }
  e.some = function(r) {
    return new n(r);
  };
  var n = function(r) {
    this._value = r;
  };
  n.prototype.value = function() {
    return this._value;
  }, n.prototype.isNone = function() {
    return !1;
  }, n.prototype.isSome = function() {
    return !0;
  }, n.prototype.map = function(r) {
    return new n(r(this._value));
  }, n.prototype.flatMap = function(r) {
    return r(this._value);
  }, n.prototype.filter = function(r) {
    return r(this._value) ? this : e.none;
  }, n.prototype.toArray = function() {
    return [this._value];
  }, n.prototype.orElse = function(r) {
    return this;
  }, n.prototype.valueOrElse = function(r) {
    return this._value;
  }, e.isOption = function(r) {
    return r === e.none || r instanceof n;
  }, e.fromNullable = function(r) {
    return r == null ? e.none : new n(r);
  };
})(cl);
var Io = {
  failure: function(e, t) {
    if (e.length < 1)
      throw new Error("Failure must have errors");
    return new qe({
      status: "failure",
      remaining: t,
      errors: e
    });
  },
  error: function(e, t) {
    if (e.length < 1)
      throw new Error("Failure must have errors");
    return new qe({
      status: "error",
      remaining: t,
      errors: e
    });
  },
  success: function(e, t, n) {
    return new qe({
      status: "success",
      value: e,
      source: n,
      remaining: t,
      errors: []
    });
  },
  cut: function(e) {
    return new qe({
      status: "cut",
      remaining: e,
      errors: []
    });
  }
}, qe = function(e) {
  this._value = e.value, this._status = e.status, this._hasValue = e.value !== void 0, this._remaining = e.remaining, this._source = e.source, this._errors = e.errors;
};
qe.prototype.map = function(e) {
  return this._hasValue ? new qe({
    value: e(this._value, this._source),
    status: this._status,
    remaining: this._remaining,
    source: this._source,
    errors: this._errors
  }) : this;
};
qe.prototype.changeRemaining = function(e) {
  return new qe({
    value: this._value,
    status: this._status,
    remaining: e,
    source: this._source,
    errors: this._errors
  });
};
qe.prototype.isSuccess = function() {
  return this._status === "success" || this._status === "cut";
};
qe.prototype.isFailure = function() {
  return this._status === "failure";
};
qe.prototype.isError = function() {
  return this._status === "error";
};
qe.prototype.isCut = function() {
  return this._status === "cut";
};
qe.prototype.value = function() {
  return this._value;
};
qe.prototype.remaining = function() {
  return this._remaining;
};
qe.prototype.source = function() {
  return this._source;
};
qe.prototype.errors = function() {
  return this._errors;
};
var Lo = {};
Lo.error = function(e) {
  return new Ci(e);
};
var Ci = function(e) {
  this.expected = e.expected, this.actual = e.actual, this._location = e.location;
};
Ci.prototype.describe = function() {
  var e = this._location ? this._location.describe() + `:
` : "";
  return e + "Expected " + this.expected + `
but got ` + this.actual;
};
Ci.prototype.lineNumber = function() {
  return this._location.lineNumber();
};
Ci.prototype.characterNumber = function() {
  return this._location.characterNumber();
};
var sl = {};
sl.fromArray = function(e) {
  var t = 0, n = function() {
    return t < e.length;
  };
  return new Kt({
    hasNext: n,
    next: function() {
      if (n())
        return e[t++];
      throw new Error("No more elements");
    }
  });
};
var Kt = function(e) {
  this._iterator = e;
};
Kt.prototype.map = function(e) {
  var t = this._iterator;
  return new Kt({
    hasNext: function() {
      return t.hasNext();
    },
    next: function() {
      return e(t.next());
    }
  });
};
Kt.prototype.filter = function(e) {
  var t = this._iterator, n = !1, r = !1, i, a = function() {
    if (!n)
      for (n = !0, r = !1; t.hasNext() && !r; )
        i = t.next(), r = e(i);
  };
  return new Kt({
    hasNext: function() {
      return a(), r;
    },
    next: function() {
      a();
      var c = i;
      return n = !1, c;
    }
  });
};
Kt.prototype.first = function() {
  var e = this._iterator;
  return this._iterator.hasNext() ? e.next() : null;
};
Kt.prototype.toArray = function() {
  for (var e = []; this._iterator.hasNext(); )
    e.push(this._iterator.next());
  return e;
};
(function(e) {
  var t = We, n = cl, r = Io, i = Lo, a = sl;
  e.token = function(y, m) {
    var b = m !== void 0;
    return function(d) {
      var l = d.head();
      if (l && l.name === y && (!b || l.value === m))
        return r.success(l.value, d.tail(), l.source);
      var g = f({ name: y, value: m });
      return p(d, g);
    };
  }, e.tokenOfType = function(y) {
    return e.token(y);
  }, e.firstOf = function(y, m) {
    return t.isArray(m) || (m = Array.prototype.slice.call(arguments, 1)), function(b) {
      return a.fromArray(m).map(function(d) {
        return d(b);
      }).filter(function(d) {
        return d.isSuccess() || d.isError();
      }).first() || p(b, y);
    };
  }, e.then = function(y, m) {
    return function(b) {
      var d = y(b);
      return d.map || console.log(d), d.map(m);
    };
  }, e.sequence = function() {
    var y = Array.prototype.slice.call(arguments, 0), m = function(d) {
      var l = t.foldl(y, function(h, D) {
        var w = h.result, U = h.hasCut;
        if (!w.isSuccess())
          return { result: w, hasCut: U };
        var E = D(w.remaining());
        if (E.isCut())
          return { result: w, hasCut: !0 };
        if (E.isSuccess()) {
          var F;
          D.isCaptured ? F = w.value().withValue(D, E.value()) : F = w.value();
          var j = E.remaining(), q = d.to(j);
          return {
            result: r.success(F, j, q),
            hasCut: U
          };
        } else
          return U ? { result: r.error(E.errors(), E.remaining()), hasCut: U } : { result: E, hasCut: U };
      }, { result: r.success(new c(), d), hasCut: !1 }).result, g = d.to(l.remaining());
      return l.map(function(h) {
        return h.withValue(e.sequence.source, g);
      });
    };
    m.head = function() {
      var d = t.find(y, b);
      return e.then(
        m,
        e.sequence.extract(d)
      );
    }, m.map = function(d) {
      return e.then(
        m,
        function(l) {
          return d.apply(this, l.toArray());
        }
      );
    };
    function b(d) {
      return d.isCaptured;
    }
    return m;
  };
  var c = function(y, m) {
    this._values = y || {}, this._valuesArray = m || [];
  };
  c.prototype.withValue = function(y, m) {
    if (y.captureName && y.captureName in this._values)
      throw new Error('Cannot add second value for capture "' + y.captureName + '"');
    var b = t.clone(this._values);
    b[y.captureName] = m;
    var d = this._valuesArray.concat([m]);
    return new c(b, d);
  }, c.prototype.get = function(y) {
    if (y.captureName in this._values)
      return this._values[y.captureName];
    throw new Error('No value for capture "' + y.captureName + '"');
  }, c.prototype.toArray = function() {
    return this._valuesArray;
  }, e.sequence.capture = function(y, m) {
    var b = function() {
      return y.apply(this, arguments);
    };
    return b.captureName = m, b.isCaptured = !0, b;
  }, e.sequence.extract = function(y) {
    return function(m) {
      return m.get(y);
    };
  }, e.sequence.applyValues = function(y) {
    var m = Array.prototype.slice.call(arguments, 1);
    return function(b) {
      var d = m.map(function(l) {
        return b.get(l);
      });
      return y.apply(this, d);
    };
  }, e.sequence.source = {
    captureName: "☃source☃"
  }, e.sequence.cut = function() {
    return function(y) {
      return r.cut(y);
    };
  }, e.optional = function(y) {
    return function(m) {
      var b = y(m);
      return b.isSuccess() ? b.map(n.some) : b.isFailure() ? r.success(n.none, m) : b;
    };
  }, e.zeroOrMoreWithSeparator = function(y, m) {
    return u(y, m, !1);
  }, e.oneOrMoreWithSeparator = function(y, m) {
    return u(y, m, !0);
  };
  var o = e.zeroOrMore = function(y) {
    return function(m) {
      for (var b = [], d; (d = y(m)) && d.isSuccess(); )
        m = d.remaining(), b.push(d.value());
      return d.isError() ? d : r.success(b, m);
    };
  };
  e.oneOrMore = function(y) {
    return e.oneOrMoreWithSeparator(y, s);
  };
  function s(y) {
    return r.success(null, y);
  }
  var u = function(y, m, b) {
    return function(d) {
      var l = y(d);
      if (l.isSuccess()) {
        var g = e.sequence.capture(y, "main"), h = o(e.then(
          e.sequence(m, g),
          e.sequence.extract(g)
        )), D = h(l.remaining());
        return r.success([l.value()].concat(D.value()), D.remaining());
      } else
        return b || l.isError() ? l : r.success([], d);
    };
  };
  e.leftAssociative = function(y, m, b) {
    var d;
    b ? d = [{ func: b, rule: m }] : d = m, d = d.map(function(g) {
      return e.then(g.rule, function(h) {
        return function(D, w) {
          return g.func(D, h, w);
        };
      });
    });
    var l = e.firstOf.apply(null, ["rules"].concat(d));
    return function(g) {
      var h = g, D = y(g);
      if (!D.isSuccess())
        return D;
      for (var w = l(D.remaining()); w.isSuccess(); ) {
        var U = w.remaining(), E = h.to(w.remaining()), F = w.value();
        D = r.success(
          F(D.value(), E),
          U,
          E
        ), w = l(D.remaining());
      }
      return w.isError() ? w : D;
    };
  }, e.leftAssociative.firstOf = function() {
    return Array.prototype.slice.call(arguments, 0);
  }, e.nonConsuming = function(y) {
    return function(m) {
      return y(m).changeRemaining(m);
    };
  };
  var f = function(y) {
    return y.value ? y.name + ' "' + y.value + '"' : y.name;
  };
  function p(y, m) {
    var b, d = y.head();
    return d ? b = i.error({
      expected: m,
      actual: f(d),
      location: d.source
    }) : b = i.error({
      expected: m,
      actual: "end of tokens"
    }), r.failure([b], y);
  }
})(Oo);
var Qr = {}, Ym = {
  get exports() {
    return Qr;
  },
  set exports(e) {
    Qr = e;
  }
}, Km = Xu;
Ym.exports = function(e, t) {
  var n = {
    asString: function() {
      return e;
    },
    range: function(r, i) {
      return new Qt(e, t, r, i);
    }
  };
  return n;
};
var Qt = function(e, t, n, r) {
  this._string = e, this._description = t, this._startIndex = n, this._endIndex = r;
};
Qt.prototype.to = function(e) {
  return new Qt(this._string, this._description, this._startIndex, e._endIndex);
};
Qt.prototype.describe = function() {
  var e = this._position(), t = this._description ? this._description + `
` : "";
  return Km.format(
    `%sLine number: %s
Character number: %s`,
    t,
    e.lineNumber,
    e.characterNumber
  );
};
Qt.prototype.lineNumber = function() {
  return this._position().lineNumber;
};
Qt.prototype.characterNumber = function() {
  return this._position().characterNumber;
};
Qt.prototype._position = function() {
  for (var e = this, t = 0, n = function() {
    return e._string.indexOf(`
`, t);
  }, r = 1; n() !== -1 && n() < this._startIndex; )
    t = n() + 1, r += 1;
  var i = this._startIndex - t + 1;
  return { lineNumber: r, characterNumber: i };
};
var ul = function(e, t, n) {
  this.name = e, this.value = t, n && (this.source = n);
}, dl = {};
(function(e) {
  var t = Oo, n = Io;
  e.parser = function(a, c, o) {
    var s = {
      rule: y,
      leftAssociative: m,
      rightAssociative: b
    }, u = new r(o.map(p)), f = t.firstOf(a, c);
    function p(g) {
      return {
        name: g.name,
        rule: i(g.ruleBuilder.bind(null, s))
      };
    }
    function y() {
      return d(u);
    }
    function m(g) {
      return d(u.untilExclusive(g));
    }
    function b(g) {
      return d(u.untilInclusive(g));
    }
    function d(g) {
      return l.bind(null, g);
    }
    function l(g, h) {
      var D = f(h);
      return D.isSuccess() ? g.apply(D) : D;
    }
    return s;
  };
  function r(a) {
    function c(p) {
      return new r(a.slice(0, s().indexOf(p)));
    }
    function o(p) {
      return new r(a.slice(0, s().indexOf(p) + 1));
    }
    function s() {
      return a.map(function(p) {
        return p.name;
      });
    }
    function u(p) {
      for (var y, m; ; )
        if (y = f(p.remaining()), y.isSuccess())
          m = p.source().to(y.source()), p = n.success(
            y.value()(p.value(), m),
            y.remaining(),
            m
          );
        else
          return y.isFailure() ? p : y;
    }
    function f(p) {
      return t.firstOf("infix", a.map(function(y) {
        return y.rule;
      }))(p);
    }
    return {
      apply: u,
      untilExclusive: c,
      untilInclusive: o
    };
  }
  e.infix = function(a, c) {
    function o(s) {
      return e.infix(a, function(u) {
        var f = c(u);
        return function(p) {
          var y = f(p);
          return y.map(function(m) {
            return function(b, d) {
              return s(b, m, d);
            };
          });
        };
      });
    }
    return {
      name: a,
      ruleBuilder: c,
      map: o
    };
  };
  var i = function(a) {
    var c;
    return function(o) {
      return c || (c = a()), c(o);
    };
  };
})(dl);
var ll = {}, Ia = ul, Qm = Qr;
ll.RegexTokeniser = Jm;
function Jm(e) {
  e = e.map(function(i) {
    return {
      name: i.name,
      regex: new RegExp(i.regex.source, "g")
    };
  });
  function t(i, a) {
    for (var c = new Qm(i, a), o = 0, s = []; o < i.length; ) {
      var u = n(i, o, c);
      o = u.endIndex, s.push(u.token);
    }
    return s.push(r(i, c)), s;
  }
  function n(i, a, c) {
    for (var o = 0; o < e.length; o++) {
      var s = e[o].regex;
      s.lastIndex = a;
      var u = s.exec(i);
      if (u) {
        var p = a + u[0].length;
        if (u.index === a && p > a) {
          var f = u[1], y = new Ia(
            e[o].name,
            f,
            c.range(a, p)
          );
          return { token: y, endIndex: p };
        }
      }
    }
    var p = a + 1, y = new Ia(
      "unrecognisedCharacter",
      i.substring(a, p),
      c.range(a, p)
    );
    return { token: y, endIndex: p };
  }
  function r(i, a) {
    return new Ia(
      "end",
      null,
      a.range(i.length, i.length)
    );
  }
  return {
    tokenise: t
  };
}
ht.Parser = ol.Parser;
ht.rules = Oo;
ht.errors = Lo;
ht.results = Io;
ht.StringSource = Qr;
ht.Token = ul;
ht.bottomUp = dl;
ht.RegexTokeniser = ll.RegexTokeniser;
ht.rule = function(e) {
  var t;
  return function(n) {
    return t || (t = e()), t(n);
  };
};
var Ve = {};
Ve.paragraph = e1;
Ve.run = t1;
Ve.table = n1;
Ve.bold = new et("bold");
Ve.italic = new et("italic");
Ve.underline = new et("underline");
Ve.strikethrough = new et("strikethrough");
Ve.allCaps = new et("allCaps");
Ve.smallCaps = new et("smallCaps");
Ve.commentReference = new et("commentReference");
Ve.lineBreak = new et("break", { breakType: "line" });
Ve.pageBreak = new et("break", { breakType: "page" });
Ve.columnBreak = new et("break", { breakType: "column" });
Ve.equalTo = i1;
Ve.startsWith = a1;
function e1(e) {
  return new et("paragraph", e);
}
function t1(e) {
  return new et("run", e);
}
function n1(e) {
  return new et("table", e);
}
function et(e, t) {
  t = t || {}, this._elementType = e, this._styleId = t.styleId, this._styleName = t.styleName, t.list && (this._listIndex = t.list.levelIndex, this._listIsOrdered = t.list.isOrdered);
}
et.prototype.matches = function(e) {
  return e.type === this._elementType && (this._styleId === void 0 || e.styleId === this._styleId) && (this._styleName === void 0 || e.styleName && this._styleName.operator(this._styleName.operand, e.styleName)) && (this._listIndex === void 0 || r1(e, this._listIndex, this._listIsOrdered)) && (this._breakType === void 0 || this._breakType === e.breakType);
};
function r1(e, t, n) {
  return e.numbering && e.numbering.level == t && e.numbering.isOrdered == n;
}
function i1(e) {
  return {
    operator: o1,
    operand: e
  };
}
function a1(e) {
  return {
    operator: c1,
    operand: e
  };
}
function o1(e, t) {
  return e.toUpperCase() === t.toUpperCase();
}
function c1(e, t) {
  return t.toUpperCase().indexOf(e.toUpperCase()) === 0;
}
var fl = {}, s1 = ht, u1 = s1.RegexTokeniser;
fl.tokenise = d1;
var yu = "'((?:\\\\.|[^'])*)";
function d1(e) {
  var t = "(?:[a-zA-Z\\-_]|\\\\.)", n = new u1([
    { name: "identifier", regex: new RegExp("(" + t + "(?:" + t + "|[0-9])*)") },
    { name: "dot", regex: /\./ },
    { name: "colon", regex: /:/ },
    { name: "gt", regex: />/ },
    { name: "whitespace", regex: /\s+/ },
    { name: "arrow", regex: /=>/ },
    { name: "equals", regex: /=/ },
    { name: "startsWith", regex: /\^=/ },
    { name: "open-paren", regex: /\(/ },
    { name: "close-paren", regex: /\)/ },
    { name: "open-square-bracket", regex: /\[/ },
    { name: "close-square-bracket", regex: /\]/ },
    { name: "string", regex: new RegExp(yu + "'") },
    { name: "unterminated-string", regex: new RegExp(yu) },
    { name: "integer", regex: /([0-9]+)/ },
    { name: "choice", regex: /\|/ },
    { name: "bang", regex: /(!)/ }
  ]);
  return n.tokenise(e);
}
var l1 = We, he = ht, $e = Ve, Dr = Ei(), f1 = fl.tokenise, La = it;
Ai.readHtmlPath = m1;
Ai.readDocumentMatcher = g1;
Ai.readStyle = h1;
function h1(e) {
  return Mo(x1, e);
}
function p1() {
  return he.rules.sequence(
    he.rules.sequence.capture(hl()),
    he.rules.tokenOfType("whitespace"),
    he.rules.tokenOfType("arrow"),
    he.rules.sequence.capture(he.rules.optional(he.rules.sequence(
      he.rules.tokenOfType("whitespace"),
      he.rules.sequence.capture(pl())
    ).head())),
    he.rules.tokenOfType("end")
  ).map(function(e, t) {
    return {
      from: e,
      to: t.valueOrElse(Dr.empty)
    };
  });
}
function g1(e) {
  return Mo(hl(), e);
}
function hl() {
  var e = he.rules.sequence, t = function(U, E) {
    return he.rules.then(
      he.rules.token("identifier", U),
      function() {
        return E;
      }
    );
  }, n = t("p", $e.paragraph), r = t("r", $e.run), i = he.rules.firstOf(
    "p or r or table",
    n,
    r
  ), a = he.rules.then(
    bl,
    function(U) {
      return { styleId: U };
    }
  ), c = he.rules.firstOf(
    "style name matcher",
    he.rules.then(
      he.rules.sequence(
        he.rules.tokenOfType("equals"),
        he.rules.sequence.cut(),
        he.rules.sequence.capture(vr)
      ).head(),
      function(U) {
        return { styleName: $e.equalTo(U) };
      }
    ),
    he.rules.then(
      he.rules.sequence(
        he.rules.tokenOfType("startsWith"),
        he.rules.sequence.cut(),
        he.rules.sequence.capture(vr)
      ).head(),
      function(U) {
        return { styleName: $e.startsWith(U) };
      }
    )
  ), o = he.rules.sequence(
    he.rules.tokenOfType("open-square-bracket"),
    he.rules.sequence.cut(),
    he.rules.token("identifier", "style-name"),
    he.rules.sequence.capture(c),
    he.rules.tokenOfType("close-square-bracket")
  ).head(), s = he.rules.firstOf(
    "list type",
    t("ordered-list", { isOrdered: !0 }),
    t("unordered-list", { isOrdered: !1 })
  ), u = e(
    he.rules.tokenOfType("colon"),
    e.capture(s),
    e.cut(),
    he.rules.tokenOfType("open-paren"),
    e.capture(b1),
    he.rules.tokenOfType("close-paren")
  ).map(function(U, E) {
    return {
      list: {
        isOrdered: U.isOrdered,
        levelIndex: E - 1
      }
    };
  });
  function f(U) {
    var E = he.rules.firstOf.apply(
      he.rules.firstOf,
      ["matcher suffix"].concat(U)
    ), F = he.rules.zeroOrMore(E);
    return he.rules.then(F, function(j) {
      var q = {};
      return j.forEach(function(Y) {
        l1.extend(q, Y);
      }), q;
    });
  }
  var p = e(
    e.capture(i),
    e.capture(f([
      a,
      o,
      u
    ]))
  ).map(function(U, E) {
    return U(E);
  }), y = e(
    he.rules.token("identifier", "table"),
    e.capture(f([
      a,
      o
    ]))
  ).map(function(U) {
    return $e.table(U);
  }), m = t("b", $e.bold), b = t("i", $e.italic), d = t("u", $e.underline), l = t("strike", $e.strikethrough), g = t("all-caps", $e.allCaps), h = t("small-caps", $e.smallCaps), D = t("comment-reference", $e.commentReference), w = e(
    he.rules.token("identifier", "br"),
    e.cut(),
    he.rules.tokenOfType("open-square-bracket"),
    he.rules.token("identifier", "type"),
    he.rules.tokenOfType("equals"),
    e.capture(vr),
    he.rules.tokenOfType("close-square-bracket")
  ).map(function(U) {
    switch (U) {
      case "line":
        return $e.lineBreak;
      case "page":
        return $e.pageBreak;
      case "column":
        return $e.columnBreak;
    }
  });
  return he.rules.firstOf(
    "element type",
    p,
    y,
    m,
    b,
    d,
    l,
    g,
    h,
    D,
    w
  );
}
function m1(e) {
  return Mo(pl(), e);
}
function pl() {
  var e = he.rules.sequence.capture, t = he.rules.tokenOfType("whitespace"), n = he.rules.then(
    he.rules.optional(he.rules.sequence(
      he.rules.tokenOfType("colon"),
      he.rules.token("identifier", "fresh")
    )),
    function(c) {
      return c.map(function() {
        return !0;
      }).valueOrElse(!1);
    }
  ), r = he.rules.then(
    he.rules.optional(he.rules.sequence(
      he.rules.tokenOfType("colon"),
      he.rules.token("identifier", "separator"),
      he.rules.tokenOfType("open-paren"),
      e(vr),
      he.rules.tokenOfType("close-paren")
    ).head()),
    function(c) {
      return c.valueOrElse("");
    }
  ), i = he.rules.oneOrMoreWithSeparator(
    gl,
    he.rules.tokenOfType("choice")
  ), a = he.rules.sequence(
    e(i),
    e(he.rules.zeroOrMore(bl)),
    e(n),
    e(r)
  ).map(function(c, o, s, u) {
    var f = {}, p = {};
    return o.length > 0 && (f.class = o.join(" ")), s && (p.fresh = !0), u && (p.separator = u), Dr.element(c, f, p);
  });
  return he.rules.firstOf(
    "html path",
    he.rules.then(he.rules.tokenOfType("bang"), function() {
      return Dr.ignore;
    }),
    he.rules.then(
      he.rules.zeroOrMoreWithSeparator(
        a,
        he.rules.sequence(
          t,
          he.rules.tokenOfType("gt"),
          t
        )
      ),
      Dr.elements
    )
  );
}
var gl = he.rules.then(
  he.rules.tokenOfType("identifier"),
  ml
), b1 = he.rules.tokenOfType("integer"), vr = he.rules.then(
  he.rules.tokenOfType("string"),
  ml
), y1 = {
  n: `
`,
  r: "\r",
  t: "	"
};
function ml(e) {
  return e.replace(/\\(.)/g, function(t, n) {
    return y1[n] || n;
  });
}
var bl = he.rules.sequence(
  he.rules.tokenOfType("dot"),
  he.rules.sequence.cut(),
  he.rules.sequence.capture(gl)
).head();
function Mo(e, t) {
  var n = f1(t), r = he.Parser(), i = r.parseTokens(e, n);
  return i.isSuccess() ? La.success(i.value()) : new La.Result(null, [La.warning(D1(t, i))]);
}
function D1(e, t) {
  return "Did not understand this style mapping, so ignored it: " + e + `
` + t.errors().map(v1).join(`
`);
}
function v1(e) {
  return "Error was at character number " + e.characterNumber() + ": Expected " + e.expected + " but got " + e.actual;
}
var x1 = p1(), Fi = {};
Fi.readOptions = w1;
var yl = We, _1 = Fi._defaultStyleMap = [
  "p.Heading1 => h1:fresh",
  "p.Heading2 => h2:fresh",
  "p.Heading3 => h3:fresh",
  "p.Heading4 => h4:fresh",
  "p.Heading5 => h5:fresh",
  "p.Heading6 => h6:fresh",
  "p[style-name='Heading 1'] => h1:fresh",
  "p[style-name='Heading 2'] => h2:fresh",
  "p[style-name='Heading 3'] => h3:fresh",
  "p[style-name='Heading 4'] => h4:fresh",
  "p[style-name='Heading 5'] => h5:fresh",
  "p[style-name='Heading 6'] => h6:fresh",
  "p[style-name='heading 1'] => h1:fresh",
  "p[style-name='heading 2'] => h2:fresh",
  "p[style-name='heading 3'] => h3:fresh",
  "p[style-name='heading 4'] => h4:fresh",
  "p[style-name='heading 5'] => h5:fresh",
  "p[style-name='heading 6'] => h6:fresh",
  "r[style-name='Strong'] => strong",
  "p[style-name='footnote text'] => p:fresh",
  "r[style-name='footnote reference'] =>",
  "p[style-name='endnote text'] => p:fresh",
  "r[style-name='endnote reference'] =>",
  "p[style-name='annotation text'] => p:fresh",
  "r[style-name='annotation reference'] =>",
  // LibreOffice
  "p[style-name='Footnote'] => p:fresh",
  "r[style-name='Footnote anchor'] =>",
  "p[style-name='Endnote'] => p:fresh",
  "r[style-name='Endnote anchor'] =>",
  "p:unordered-list(1) => ul > li:fresh",
  "p:unordered-list(2) => ul|ol > li > ul > li:fresh",
  "p:unordered-list(3) => ul|ol > li > ul|ol > li > ul > li:fresh",
  "p:unordered-list(4) => ul|ol > li > ul|ol > li > ul|ol > li > ul > li:fresh",
  "p:unordered-list(5) => ul|ol > li > ul|ol > li > ul|ol > li > ul|ol > li > ul > li:fresh",
  "p:ordered-list(1) => ol > li:fresh",
  "p:ordered-list(2) => ul|ol > li > ol > li:fresh",
  "p:ordered-list(3) => ul|ol > li > ul|ol > li > ol > li:fresh",
  "p:ordered-list(4) => ul|ol > li > ul|ol > li > ul|ol > li > ol > li:fresh",
  "p:ordered-list(5) => ul|ol > li > ul|ol > li > ul|ol > li > ul|ol > li > ol > li:fresh",
  "r[style-name='Hyperlink'] =>",
  "p[style-name='Normal'] => p:fresh"
], U1 = Fi._standardOptions = {
  transformDocument: T1,
  includeDefaultStyleMap: !0,
  includeEmbeddedStyleMap: !0
};
function w1(e) {
  return e = e || {}, yl.extend({}, U1, e, {
    customStyleMap: Du(e.styleMap),
    readStyleMap: function() {
      var t = this.customStyleMap;
      return this.includeEmbeddedStyleMap && (t = t.concat(Du(this.embeddedStyleMap))), this.includeDefaultStyleMap && (t = t.concat(_1)), t;
    }
  });
}
function Du(e) {
  return e ? yl.isString(e) ? e.split(`
`).map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t !== "" && t.charAt(0) !== "#";
  }) : e : [];
}
function T1(e) {
  return e;
}
var Dl = {}, vu = Le, E1 = Gn;
Dl.openZip = A1;
function A1(e) {
  return e.arrayBuffer ? vu.resolve(E1.openArrayBuffer(e.arrayBuffer)) : vu.reject(new Error("Could not find file in options"));
}
var Tn = {}, xu = We;
Tn.paragraph = C1;
Tn.run = F1;
Tn._elements = xl;
Tn.getDescendantsOfType = S1;
Tn.getDescendants = _l;
function C1(e) {
  return vl("paragraph", e);
}
function F1(e) {
  return vl("run", e);
}
function vl(e, t) {
  return xl(function(n) {
    return n.type === e ? t(n) : n;
  });
}
function xl(e) {
  return function t(n) {
    if (n.children) {
      var r = xu.map(n.children, t);
      n = xu.extend(n, { children: r });
    }
    return e(n);
  };
}
function S1(e, t) {
  return _l(e).filter(function(n) {
    return n.type === t;
  });
}
function _l(e) {
  var t = [];
  return Ul(e, function(n) {
    t.push(n);
  }), t;
}
function Ul(e, t) {
  e.children && e.children.forEach(function(n) {
    Ul(n, t), t(n);
  });
}
var wl = {}, B1 = Ei(), k1 = Ti();
wl.element = W1;
function W1(e) {
  return function(t) {
    return k1.elementWithTag(B1.element(e), [t]);
  };
}
var N1 = We, Tl = oo, jo = Wo, R1 = No.DocumentConverter, O1 = il.convertElementToRawText, I1 = Ai.readStyle, L1 = Fi.readOptions, Si = Dl, M1 = it.Result;
ft.convertToHtml = j1;
ft.convertToMarkdown = P1;
ft.convert = Po;
ft.extractRawText = V1;
ft.images = Ro;
ft.transforms = Tn;
ft.underline = wl;
ft.embedStyleMap = H1;
ft.readEmbeddedStyleMap = q1;
function j1(e, t) {
  return Po(e, t);
}
function P1(e, t) {
  var n = Object.create(t || {});
  return n.outputFormat = "markdown", Po(e, n);
}
function Po(e, t) {
  return t = L1(t), Si.openZip(e).tap(function(n) {
    return jo.readStyleMap(n).then(function(r) {
      t.embeddedStyleMap = r;
    });
  }).then(function(n) {
    return Tl.read(n, e).then(function(r) {
      return r.map(t.transformDocument);
    }).then(function(r) {
      return z1(r, t);
    });
  });
}
function q1(e) {
  return Si.openZip(e).then(jo.readStyleMap);
}
function z1(e, t) {
  var n = X1(t.readStyleMap()), r = N1.extend({}, t, {
    styleMap: n.value
  }), i = new R1(r);
  return e.flatMapThen(function(a) {
    return n.flatMapThen(function(c) {
      return i.convertToHtml(a);
    });
  });
}
function X1(e) {
  return M1.combine((e || []).map(I1)).map(function(t) {
    return t.filter(function(n) {
      return !!n;
    });
  });
}
function V1(e) {
  return Si.openZip(e).then(Tl.read).then(function(t) {
    return t.map(O1);
  });
}
function H1(e, t) {
  return Si.openZip(e).tap(function(n) {
    return jo.writeStyleMap(n, t);
  }).then(function(n) {
    return n.toArrayBuffer();
  }).then(function(n) {
    return {
      toArrayBuffer: function() {
        return n;
      },
      toBuffer: function() {
        return Buffer.from(n);
      }
    };
  });
}
ft.styleMapping = function() {
  throw new Error(`Use a raw string instead of mammoth.styleMapping e.g. "p[style-name='Title'] => h1" instead of mammoth.styleMapping("p[style-name='Title'] => h1")`);
};
class $1 {
  constructor() {
    yc(this, "editor");
  }
  init(t) {
    this.editor = t, this.addDialogButtonToUploadFile(t);
  }
  transformDocxToHtml(t) {
    ft.convertToHtml({ arrayBuffer: t }).then(
      (n) => {
        this.editor.setContent(n.value);
      },
      (n) => console.error(n)
    );
  }
  addDialogButtonToUploadFile(t) {
    t.ui.registry.addButton("importdocx", {
      text: "Import DOCX",
      onAction: () => {
        const n = t.windowManager.open({
          title: "Upload DOCX File",
          body: {
            type: "panel",
            items: [
              {
                type: "htmlpanel",
                html: '<input id="paper-tinymce-upload-input" type="file" />'
              }
            ]
          },
          buttons: []
        });
        document.querySelector("#paper-tinymce-upload-input").addEventListener("change", (r) => {
          const i = r.target.files[0], a = new FileReader();
          a.onload = (c) => {
            const o = c.target.result;
            this.transformDocxToHtml(o);
          }, a.readAsArrayBuffer(i), n.close();
        });
      }
    });
  }
}
const Z1 = new $1(), El = {
  init: (e) => {
    const t = vh(), n = Hh + $h, r = document.createElement("style");
    r.textContent = n, document.head.appendChild(r), Dh(e, t, 100), Mh(e), Xh(e), Z1.init(e);
  },
  getStyles: () => Vh
}, G1 = (e) => {
  if (typeof module == "object")
    try {
      module.exports = e;
    } catch {
    }
}, Y1 = (e) => {
  window.PaperTinyMCE = e;
};
Y1(El);
G1(El);
export {
  El as PaperTinyMCE
};
