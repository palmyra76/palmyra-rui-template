import { jsx as B } from "react/jsx-runtime";
import { c as D } from "./createSvgIcon.js";
import { isValidElement as L } from "react";
const V = D(/* @__PURE__ */ B("path", {
  d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
}), "Done"), m = (n) => typeof n == "number" && !isNaN(n), d = (n) => typeof n == "string", b = (n) => typeof n == "function", M = (n) => L(n) || d(n) || b(n) || m(n), s = /* @__PURE__ */ new Map();
let v = [];
const T = /* @__PURE__ */ new Set(), k = () => s.size > 0;
function z(n, o) {
  var r;
  if (o)
    return !((r = s.get(o)) == null || !r.isToastActive(n));
  let e = !1;
  return s.forEach((i) => {
    i.isToastActive(n) && (e = !0);
  }), e;
}
function N(n, o) {
  M(n) && (k() || v.push({ content: n, options: o }), s.forEach((r) => {
    r.buildToast(n, o);
  }));
}
function C(n, o) {
  s.forEach((r) => {
    o != null && o != null && o.containerId ? (o == null ? void 0 : o.containerId) === r.id && r.toggle(n, o == null ? void 0 : o.id) : r.toggle(n, o == null ? void 0 : o.id);
  });
}
let O = 1;
const A = () => "" + O++;
function Q(n) {
  return n && (d(n.toastId) || m(n.toastId)) ? n.toastId : A();
}
function u(n, o) {
  return N(n, o), o.toastId;
}
function g(n, o) {
  return { ...o, type: o && o.type || n, toastId: Q(o) };
}
function p(n) {
  return (o, r) => u(o, g(n, r));
}
function t(n, o) {
  return u(n, g("default", o));
}
t.loading = (n, o) => u(n, g("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...o })), t.promise = function(n, o, r) {
  let e, { pending: i, error: a, success: l } = o;
  i && (e = d(i) ? t.loading(i, r) : t.loading(i.render, { ...r, ...i }));
  const x = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, h = (c, f, w) => {
    if (f == null)
      return void t.dismiss(e);
    const E = { type: c, ...x, ...r, data: w }, I = d(f) ? { render: f } : f;
    return e ? t.update(e, { ...E, ...I }) : t(I.render, { ...E, ...I }), w;
  }, y = b(n) ? n() : n;
  return y.then((c) => h("success", l, c)).catch((c) => h("error", a, c)), y;
}, t.success = p("success"), t.info = p("info"), t.error = p("error"), t.warning = p("warning"), t.warn = t.warning, t.dark = (n, o) => u(n, g("default", { theme: "dark", ...o })), t.dismiss = function(n) {
  (function(o) {
    var r;
    if (k()) {
      if (o == null || d(r = o) || m(r))
        s.forEach((e) => {
          e.removeToast(o);
        });
      else if (o && ("containerId" in o || "id" in o)) {
        const e = s.get(o.containerId);
        e ? e.removeToast(o.id) : s.forEach((i) => {
          i.removeToast(o.id);
        });
      }
    } else
      v = v.filter((e) => o != null && e.options.toastId !== o);
  })(n);
}, t.clearWaitingQueue = function(n) {
  n === void 0 && (n = {}), s.forEach((o) => {
    !o.props.limit || n.containerId && o.id !== n.containerId || o.clearQueue();
  });
}, t.isActive = z, t.update = function(n, o) {
  o === void 0 && (o = {});
  const r = ((e, i) => {
    var a;
    let { containerId: l } = i;
    return (a = s.get(l || 1)) == null ? void 0 : a.toasts.get(e);
  })(n, o);
  if (r) {
    const { props: e, content: i } = r, a = { delay: 100, ...e, ...o, toastId: o.toastId || n, updateId: A() };
    a.toastId !== n && (a.staleId = n);
    const l = a.render || i;
    delete a.render, u(l, a);
  }
}, t.done = (n) => {
  t.update(n, { progress: 1 });
}, t.onChange = function(n) {
  return T.add(n), () => {
    T.delete(n);
  };
}, t.play = (n) => C(!0, n), t.pause = (n) => C(!1, n);
export {
  t as B,
  V as D
};
