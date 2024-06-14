import { jsx as _, jsxs as k } from "react/jsx-runtime";
import { PalmyraForm as et } from "palmyra-rui";
import { useState as pe, useRef as tt, useEffect as X } from "react";
import { useNavigate as nt } from "react-router-dom";
import { D as rt, B as me } from "../../../../chunks/react-toastify.esm.js";
import { B as ye } from "../../../../chunks/Button.js";
import { C as st } from "../../../../chunks/Close.js";
function Fe(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ot } = Object.prototype, { getPrototypeOf: ce } = Object, v = /* @__PURE__ */ ((e) => (t) => {
  const n = ot.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), x = (e) => (e = e.toLowerCase(), (t) => v(t) === e), K = (e) => (t) => typeof t === e, { isArray: L } = Array, q = K("undefined");
function it(e) {
  return e !== null && !q(e) && e.constructor !== null && !q(e.constructor) && T(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const De = x("ArrayBuffer");
function at(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && De(e.buffer), t;
}
const ct = K("string"), T = K("function"), _e = K("number"), W = (e) => e !== null && typeof e == "object", ut = (e) => e === !0 || e === !1, M = (e) => {
  if (v(e) !== "object")
    return !1;
  const t = ce(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, lt = x("Date"), ft = x("File"), dt = x("Blob"), ht = x("FileList"), pt = (e) => W(e) && T(e.pipe), mt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || T(e.append) && ((t = v(e)) === "formdata" || // detect form-data instance
  t === "object" && T(e.toString) && e.toString() === "[object FormData]"));
}, yt = x("URLSearchParams"), [wt, bt, Et, gt] = ["ReadableStream", "Request", "Response", "Headers"].map(x), Rt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function H(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), L(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], t.call(null, e[c], c, e);
  }
}
function Le(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Be = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ue = (e) => !q(e) && e !== Be;
function te() {
  const { caseless: e } = Ue(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Le(t, s) || s;
    M(t[o]) && M(r) ? t[o] = te(t[o], r) : M(r) ? t[o] = te({}, r) : L(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && H(arguments[r], n);
  return t;
}
const St = (e, t, n, { allOwnKeys: r } = {}) => (H(t, (s, o) => {
  n && T(s) ? e[o] = Fe(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Ot = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Tt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, At = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && ce(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, xt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Nt = (e) => {
  if (!e)
    return null;
  if (L(e))
    return e;
  let t = e.length;
  if (!_e(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ct = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ce(Uint8Array)), Pt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Ft = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Dt = x("HTMLFormElement"), _t = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), we = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Lt = x("RegExp"), ke = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  H(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Bt = (e) => {
  ke(e, (t, n) => {
    if (T(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (T(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Ut = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return L(e) ? r(e) : r(String(e).split(t)), n;
}, kt = () => {
}, jt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Q = "abcdefghijklmnopqrstuvwxyz", be = "0123456789", je = {
  DIGIT: be,
  ALPHA: Q,
  ALPHA_DIGIT: Q + Q.toUpperCase() + be
}, qt = (e = 16, t = je.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Ht(e) {
  return !!(e && T(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const It = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (W(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = L(r) ? [] : {};
        return H(r, (i, c) => {
          const f = n(i, s + 1);
          !q(f) && (o[c] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Mt = x("AsyncFunction"), zt = (e) => e && (W(e) || T(e)) && T(e.then) && T(e.catch), a = {
  isArray: L,
  isArrayBuffer: De,
  isBuffer: it,
  isFormData: mt,
  isArrayBufferView: at,
  isString: ct,
  isNumber: _e,
  isBoolean: ut,
  isObject: W,
  isPlainObject: M,
  isReadableStream: wt,
  isRequest: bt,
  isResponse: Et,
  isHeaders: gt,
  isUndefined: q,
  isDate: lt,
  isFile: ft,
  isBlob: dt,
  isRegExp: Lt,
  isFunction: T,
  isStream: pt,
  isURLSearchParams: yt,
  isTypedArray: Ct,
  isFileList: ht,
  forEach: H,
  merge: te,
  extend: St,
  trim: Rt,
  stripBOM: Ot,
  inherits: Tt,
  toFlatObject: At,
  kindOf: v,
  kindOfTest: x,
  endsWith: xt,
  toArray: Nt,
  forEachEntry: Pt,
  matchAll: Ft,
  isHTMLForm: Dt,
  hasOwnProperty: we,
  hasOwnProp: we,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ke,
  freezeMethods: Bt,
  toObjectSet: Ut,
  toCamelCase: _t,
  noop: kt,
  toFiniteNumber: jt,
  findKey: Le,
  global: Be,
  isContextDefined: Ue,
  ALPHABET: je,
  generateString: qt,
  isSpecCompliantForm: Ht,
  toJSONObject: It,
  isAsyncFn: Mt,
  isThenable: zt
};
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const qe = m.prototype, He = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  He[e] = { value: e };
});
Object.defineProperties(m, He);
Object.defineProperty(qe, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(qe);
  return a.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Vt = null;
function ne(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Ie(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ee(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Ie(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Jt(e) {
  return a.isArray(e) && !e.some(ne);
}
const vt = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function $(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, R) {
    return !a.isUndefined(R[p]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(d) {
    if (d === null)
      return "";
    if (a.isDate(d))
      return d.toISOString();
    if (!f && a.isBlob(d))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(d) || a.isTypedArray(d) ? f && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function u(d, p, R) {
    let g = d;
    if (d && !R && typeof d == "object") {
      if (a.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), d = JSON.stringify(d);
      else if (a.isArray(d) && Jt(d) || (a.isFileList(d) || a.endsWith(p, "[]")) && (g = a.toArray(d)))
        return p = Ie(p), g.forEach(function(w, U) {
          !(a.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ee([p], U, o) : i === null ? p : p + "[]",
            l(w)
          );
        }), !1;
    }
    return ne(d) ? !0 : (t.append(Ee(R, p, o), l(d)), !1);
  }
  const h = [], b = Object.assign(vt, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: ne
  });
  function y(d, p) {
    if (!a.isUndefined(d)) {
      if (h.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      h.push(d), a.forEach(d, function(g, O) {
        (!(a.isUndefined(g) || g === null) && s.call(
          t,
          g,
          a.isString(O) ? O.trim() : O,
          p,
          b
        )) === !0 && y(g, p ? p.concat(O) : [O]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function ge(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function ue(e, t) {
  this._pairs = [], e && $(e, this, t);
}
const Me = ue.prototype;
Me.append = function(t, n) {
  this._pairs.push([t, n]);
};
Me.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ge);
  } : ge;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Kt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ze(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Kt, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new ue(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Re {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ve = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Wt = typeof URLSearchParams < "u" ? URLSearchParams : ue, $t = typeof FormData < "u" ? FormData : null, Gt = typeof Blob < "u" ? Blob : null, Xt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Wt,
    FormData: $t,
    Blob: Gt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, le = typeof window < "u" && typeof document < "u", Qt = ((e) => le && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Zt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Yt = le && window.location.href || "http://localhost", en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: le,
  hasStandardBrowserEnv: Qt,
  hasStandardBrowserWebWorkerEnv: Zt,
  origin: Yt
}, Symbol.toStringTag, { value: "Module" })), A = {
  ...en,
  ...Xt
};
function tn(e, t) {
  return $(e, new A.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return A.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function nn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function rn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Je(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__")
      return !0;
    const c = Number.isFinite(+i), f = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, f ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = rn(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(nn(r), s, n, 0);
    }), n;
  }
  return null;
}
function sn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const I = {
  transitional: Ve,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(Je(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return tn(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return $(
          c ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), sn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || I.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: A.classes.FormData,
    Blob: A.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  I.headers[e] = {};
});
const on = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), an = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && on[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Se = Symbol("internals");
function j(e) {
  return e && String(e).trim().toLowerCase();
}
function z(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(z) : String(e);
}
function cn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const un = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Z(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function ln(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function fn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class S {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, f, l) {
      const u = j(f);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(s, u);
      (!h || s[h] === void 0 || l === !0 || l === void 0 && s[h] !== !1) && (s[h || f] = z(c));
    }
    const i = (c, f) => a.forEach(c, (l, u) => o(l, u, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !un(t))
      i(an(t), n);
    else if (a.isHeaders(t))
      for (const [c, f] of t.entries())
        o(f, c, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = j(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return cn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = j(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Z(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = j(i), i) {
        const c = a.findKey(r, i);
        c && (!n || Z(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Z(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = z(s), delete n[o];
        return;
      }
      const c = t ? ln(o) : String(o).trim();
      c !== o && delete n[o], n[c] = z(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Se] = this[Se] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = j(i);
      r[c] || (fn(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
S.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(S.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(S);
function Y(e, t) {
  const n = this || I, r = t || n, s = S.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function ve(e) {
  return !!(e && e.__CANCEL__);
}
function B(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(B, m, {
  __CANCEL__: !0
});
function Ke(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function dn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function hn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const l = Date.now(), u = r[o];
    i || (i = l), n[s] = f, r[s] = l;
    let h = o, b = 0;
    for (; h !== s; )
      b += n[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), l - i < t)
      return;
    const y = u && l - u;
    return y ? Math.round(b * 1e3 / y) : void 0;
  };
}
function pn(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let s = null;
  return function() {
    const i = this === !0, c = Date.now();
    if (i || c - n > r)
      return s && (clearTimeout(s), s = null), n = c, e.apply(null, arguments);
    s || (s = setTimeout(() => (s = null, n = Date.now(), e.apply(null, arguments)), r - (c - n)));
  };
}
const V = (e, t, n = 3) => {
  let r = 0;
  const s = hn(50, 250);
  return pn((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, f = i - r, l = s(f), u = i <= c;
    r = i;
    const h = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: f,
      rate: l || void 0,
      estimated: l && c && u ? (c - i) / l : void 0,
      event: o,
      lengthComputable: c != null
    };
    h[t ? "download" : "upload"] = !0, e(h);
  }, n);
}, mn = A.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(i) {
      const c = a.isString(i) ? s(i) : i;
      return c.protocol === r.protocol && c.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), yn = A.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function wn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function bn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function We(e, t) {
  return e && !wn(t) ? bn(e, t) : t;
}
const Oe = (e) => e instanceof S ? { ...e } : e;
function F(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, h) {
    return a.isPlainObject(l) && a.isPlainObject(u) ? a.merge.call({ caseless: h }, l, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(l, u, h) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l))
        return r(void 0, l, h);
    } else
      return r(l, u, h);
  }
  function o(l, u) {
    if (!a.isUndefined(u))
      return r(void 0, u);
  }
  function i(l, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l))
        return r(void 0, l);
    } else
      return r(void 0, u);
  }
  function c(l, u, h) {
    if (h in t)
      return r(l, u);
    if (h in e)
      return r(void 0, l);
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (l, u) => s(Oe(l), Oe(u), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const h = f[u] || s, b = h(e[u], t[u], u);
    a.isUndefined(b) && h !== c || (n[u] = b);
  }), n;
}
const $e = (e) => {
  const t = F({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
  t.headers = i = S.from(i), t.url = ze(We(t.baseURL, t.url), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let f;
  if (a.isFormData(n)) {
    if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((f = i.getContentType()) !== !1) {
      const [l, ...u] = f ? f.split(";").map((h) => h.trim()).filter(Boolean) : [];
      i.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (A.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && mn(t.url))) {
    const l = s && o && yn.read(o);
    l && i.set(s, l);
  }
  return t;
}, En = typeof XMLHttpRequest < "u", gn = En && function(e) {
  return new Promise(function(n, r) {
    const s = $e(e);
    let o = s.data;
    const i = S.from(s.headers).normalize();
    let { responseType: c } = s, f;
    function l() {
      s.cancelToken && s.cancelToken.unsubscribe(f), s.signal && s.signal.removeEventListener("abort", f);
    }
    let u = new XMLHttpRequest();
    u.open(s.method.toUpperCase(), s.url, !0), u.timeout = s.timeout;
    function h() {
      if (!u)
        return;
      const y = S.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), p = {
        data: !c || c === "text" || c === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: y,
        config: e,
        request: u
      };
      Ke(function(g) {
        n(g), l();
      }, function(g) {
        r(g), l();
      }, p), u = null;
    }
    "onloadend" in u ? u.onloadend = h : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, u.onabort = function() {
      u && (r(new m("Request aborted", m.ECONNABORTED, s, u)), u = null);
    }, u.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, s, u)), u = null;
    }, u.ontimeout = function() {
      let d = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const p = s.transitional || Ve;
      s.timeoutErrorMessage && (d = s.timeoutErrorMessage), r(new m(
        d,
        p.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        s,
        u
      )), u = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in u && a.forEach(i.toJSON(), function(d, p) {
      u.setRequestHeader(p, d);
    }), a.isUndefined(s.withCredentials) || (u.withCredentials = !!s.withCredentials), c && c !== "json" && (u.responseType = s.responseType), typeof s.onDownloadProgress == "function" && u.addEventListener("progress", V(s.onDownloadProgress, !0)), typeof s.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", V(s.onUploadProgress)), (s.cancelToken || s.signal) && (f = (y) => {
      u && (r(!y || y.type ? new B(null, e, u) : y), u.abort(), u = null);
    }, s.cancelToken && s.cancelToken.subscribe(f), s.signal && (s.signal.aborted ? f() : s.signal.addEventListener("abort", f)));
    const b = dn(s.url);
    if (b && A.protocols.indexOf(b) === -1) {
      r(new m("Unsupported protocol " + b + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, Rn = (e, t) => {
  let n = new AbortController(), r;
  const s = function(f) {
    if (!r) {
      r = !0, i();
      const l = f instanceof Error ? f : this.reason;
      n.abort(l instanceof m ? l : new B(l instanceof Error ? l.message : l));
    }
  };
  let o = t && setTimeout(() => {
    s(new m(`timeout ${t} of ms exceeded`, m.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((f) => {
      f && (f.removeEventListener ? f.removeEventListener("abort", s) : f.unsubscribe(s));
    }), e = null);
  };
  e.forEach((f) => f && f.addEventListener && f.addEventListener("abort", s));
  const { signal: c } = n;
  return c.unsubscribe = i, [c, () => {
    o && clearTimeout(o), o = null;
  }];
}, Sn = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, On = async function* (e, t, n) {
  for await (const r of e)
    yield* Sn(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
}, Te = (e, t, n, r, s) => {
  const o = On(e, t, s);
  let i = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(c) {
      const { done: f, value: l } = await o.next();
      if (f) {
        c.close(), r();
        return;
      }
      let u = l.byteLength;
      n && n(i += u), c.enqueue(new Uint8Array(l));
    },
    cancel(c) {
      return r(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ae = (e, t) => {
  const n = e != null;
  return (r) => setTimeout(() => t({
    lengthComputable: n,
    total: e,
    loaded: r
  }));
}, G = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ge = G && typeof ReadableStream == "function", re = G && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Tn = Ge && (() => {
  let e = !1;
  const t = new Request(A.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
})(), xe = 64 * 1024, se = Ge && !!(() => {
  try {
    return a.isReadableStream(new Response("").body);
  } catch {
  }
})(), J = {
  stream: se && ((e) => e.body)
};
G && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !J[t] && (J[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new m(`Response type '${t}' is not supported`, m.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const An = async (e) => {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (await re(e)).byteLength;
}, xn = async (e, t) => {
  const n = a.toFiniteNumber(e.getContentLength());
  return n ?? An(t);
}, Nn = G && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: f,
    responseType: l,
    headers: u,
    withCredentials: h = "same-origin",
    fetchOptions: b
  } = $e(e);
  l = l ? (l + "").toLowerCase() : "text";
  let [y, d] = s || o || i ? Rn([s, o], i) : [], p, R;
  const g = () => {
    !p && setTimeout(() => {
      y && y.unsubscribe();
    }), p = !0;
  };
  let O;
  try {
    if (f && Tn && n !== "get" && n !== "head" && (O = await xn(u, r)) !== 0) {
      let N = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), D;
      a.isFormData(r) && (D = N.headers.get("content-type")) && u.setContentType(D), N.body && (r = Te(N.body, xe, Ae(
        O,
        V(f)
      ), null, re));
    }
    a.isString(h) || (h = h ? "cors" : "omit"), R = new Request(t, {
      ...b,
      signal: y,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      withCredentials: h
    });
    let w = await fetch(R);
    const U = se && (l === "stream" || l === "response");
    if (se && (c || U)) {
      const N = {};
      ["status", "statusText", "headers"].forEach((he) => {
        N[he] = w[he];
      });
      const D = a.toFiniteNumber(w.headers.get("content-length"));
      w = new Response(
        Te(w.body, xe, c && Ae(
          D,
          V(c, !0)
        ), U && g, re),
        N
      );
    }
    l = l || "text";
    let Ye = await J[a.findKey(J, l) || "text"](w, e);
    return !U && g(), d && d(), await new Promise((N, D) => {
      Ke(N, D, {
        data: Ye,
        headers: S.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: R
      });
    });
  } catch (w) {
    throw g(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(
      new m("Network Error", m.ERR_NETWORK, e, R),
      {
        cause: w.cause || w
      }
    ) : m.from(w, w && w.code, e, R);
  }
}), oe = {
  http: Vt,
  xhr: gn,
  fetch: Nn
};
a.forEach(oe, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ne = (e) => `- ${e}`, Cn = (e) => a.isFunction(e) || e === null || e === !1, Xe = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Cn(n) && (r = oe[(i = String(n)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, f]) => `adapter ${c} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Ne).join(`
`) : " " + Ne(o[0]) : "as no adapter specified";
      throw new m(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: oe
};
function ee(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new B(null, e);
}
function Ce(e) {
  return ee(e), e.headers = S.from(e.headers), e.data = Y.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Xe.getAdapter(e.adapter || I.adapter)(e).then(function(r) {
    return ee(e), r.data = Y.call(
      e,
      e.transformResponse,
      r
    ), r.headers = S.from(r.headers), r;
  }, function(r) {
    return ve(r) || (ee(e), r && r.response && (r.response.data = Y.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = S.from(r.response.headers))), Promise.reject(r);
  });
}
const Qe = "1.7.2", fe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  fe[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Pe = {};
fe.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Qe + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !Pe[i] && (Pe[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
function Pn(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const c = e[o], f = c === void 0 || i(c, o, e);
      if (f !== !0)
        throw new m("option " + o + " must be " + f, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const ie = {
  assertOptions: Pn,
  validators: fe
}, C = ie.validators;
class P {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Re(),
      response: new Re()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = F(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && ie.assertOptions(r, {
      silentJSONParsing: C.transitional(C.boolean),
      forcedJSONParsing: C.transitional(C.boolean),
      clarifyTimeoutError: C.transitional(C.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ie.assertOptions(s, {
      encode: C.function,
      serialize: C.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete o[d];
      }
    ), n.headers = S.concat(i, o);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(n) === !1 || (f = f && p.synchronous, c.unshift(p.fulfilled, p.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(p) {
      l.push(p.fulfilled, p.rejected);
    });
    let u, h = 0, b;
    if (!f) {
      const d = [Ce.bind(this), void 0];
      for (d.unshift.apply(d, c), d.push.apply(d, l), b = d.length, u = Promise.resolve(n); h < b; )
        u = u.then(d[h++], d[h++]);
      return u;
    }
    b = c.length;
    let y = n;
    for (h = 0; h < b; ) {
      const d = c[h++], p = c[h++];
      try {
        y = d(y);
      } catch (R) {
        p.call(this, R);
        break;
      }
    }
    try {
      u = Ce.call(this, y);
    } catch (d) {
      return Promise.reject(d);
    }
    for (h = 0, b = l.length; h < b; )
      u = u.then(l[h++], l[h++]);
    return u;
  }
  getUri(t) {
    t = F(this.defaults, t);
    const n = We(t.baseURL, t.url);
    return ze(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  P.prototype[t] = function(n, r) {
    return this.request(F(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, c) {
      return this.request(F(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  P.prototype[t] = n(), P.prototype[t + "Form"] = n(!0);
});
class de {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      r.reason || (r.reason = new B(o, i, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new de(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
function Fn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Dn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ae = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ae).forEach(([e, t]) => {
  ae[t] = e;
});
function Ze(e) {
  const t = new P(e), n = Fe(P.prototype.request, t);
  return a.extend(n, P.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ze(F(e, s));
  }, n;
}
const E = Ze(I);
E.Axios = P;
E.CanceledError = B;
E.CancelToken = de;
E.isCancel = ve;
E.VERSION = Qe;
E.toFormData = $;
E.AxiosError = m;
E.Cancel = E.CanceledError;
E.all = function(t) {
  return Promise.all(t);
};
E.spread = Fn;
E.isAxiosError = Dn;
E.mergeConfig = F;
E.AxiosHeaders = S;
E.formToJSON = (e) => Je(a.isHTMLForm(e) ? new FormData(e) : e);
E.getAdapter = Xe.getAdapter;
E.HttpStatusCode = ae;
E.default = E;
function Hn(e) {
  const [t, n] = pe(!1), [r, s] = pe(), o = tt(), i = nt(), c = e.storeFactory, f = e.treeRef, l = e.pageName, u = "api/palmyra/admin/acl/group/" + e.id, h = "api/palmyra/admin/acl/group/" + e.id;
  X(() => {
    e.onDataRefresh && e.onDataRefresh(r);
  }, [r]), X(() => {
    E.get(u).then((p) => {
      s(p.data.result);
    });
  }, [u]);
  const b = () => {
    me.error("Something went wrong Please try again later.. ");
  }, y = () => {
    var O, w;
    const p = (O = f == null ? void 0 : f.current) == null ? void 0 : O.getValue(), g = { ...(w = o == null ? void 0 : o.current) == null ? void 0 : w.getData(), rootMenu: p };
    E.put(h, g).then(function() {
      i("../" + l + "/view/" + e.id), me.success("Data Saved Successfully!.. ");
    }).catch(function() {
      b();
    });
  }, d = (p) => {
    p.ctrlKey && p.key === "s" && (p.preventDefault(), t && y());
  };
  return X(() => {
    var p;
    (p = o == null ? void 0 : o.current) != null && p.isValid && o.current.isValid() && n(!0);
  }, [o.current]), /* @__PURE__ */ _("div", { className: "form-container", children: /* @__PURE__ */ k("form", { onKeyDown: d, children: [
    /* @__PURE__ */ k("div", { className: "form-header-container", children: [
      /* @__PURE__ */ _("div", { children: e.title }),
      /* @__PURE__ */ k("div", { className: "form-header-btn-container", children: [
        /* @__PURE__ */ k(
          ye,
          {
            className: "cancel-filled-button",
            disableRipple: !0,
            onClick: () => window.history.back(),
            children: [
              /* @__PURE__ */ _(st, { className: "button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ k(
          ye,
          {
            disabled: !t,
            className: t ? "filled-button" : "disabled-button",
            disableRipple: !0,
            onClick: y,
            children: [
              /* @__PURE__ */ _(rt, { className: "button-icon" }),
              /* @__PURE__ */ _("u", { style: { width: "5px" }, children: "S" }),
              "ave"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ _(
      et,
      {
        customizer: e.customizer,
        formData: r,
        mode: "edit",
        onValidChange: n,
        ref: o,
        storeFactory: c,
        children: e.children
      }
    )
  ] }) });
}
export {
  Hn as default
};
