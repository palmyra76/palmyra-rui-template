import { jsx as x, jsxs as oe, Fragment as ie } from "react/jsx-runtime";
import { topic as F, PalmyraGrid as ae } from "palmyra-rui";
import * as E from "react";
import { useState as U, useRef as W, useEffect as se } from "react";
import { NewForm as ce } from "../drawer/NewForm.js";
import { EditForm as le } from "../drawer/EditForm.js";
import { P as n, d as _, _ as v, a as de, g as pe, s as H, r as ue, b as S, u as fe, e as j, f as me } from "../../../../chunks/createSvgIcon.js";
import { u as q, o as G, e as he, H as ge, T as xe, r as ve, g as Y, M as ye, P as be, i as Ee } from "../../../../chunks/Modal.js";
import { u as we, c as Te } from "../../../../chunks/Button.js";
function Pe(e, t = 166) {
  let o;
  function r(...a) {
    const p = () => {
      e.apply(this, a);
    };
    clearTimeout(o), o = setTimeout(p, t);
  }
  return r.clear = () => {
    clearTimeout(o);
  }, r;
}
const ke = /* @__PURE__ */ E.createContext();
process.env.NODE_ENV !== "production" && (n.node, n.bool);
const De = () => {
  const e = E.useContext(ke);
  return e ?? !1;
}, Re = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Ce(e, t, o) {
  const r = t.getBoundingClientRect(), a = o && o.getBoundingClientRect(), p = G(t);
  let f;
  if (t.fakeTransform)
    f = t.fakeTransform;
  else {
    const s = p.getComputedStyle(t);
    f = s.getPropertyValue("-webkit-transform") || s.getPropertyValue("transform");
  }
  let y = 0, l = 0;
  if (f && f !== "none" && typeof f == "string") {
    const s = f.split("(")[1].split(")")[0].split(",");
    y = parseInt(s[4], 10), l = parseInt(s[5], 10);
  }
  return e === "left" ? a ? `translateX(${a.right + y - r.left}px)` : `translateX(${p.innerWidth + y - r.left}px)` : e === "right" ? a ? `translateX(-${r.right - a.left - y}px)` : `translateX(-${r.left + r.width - y}px)` : e === "up" ? a ? `translateY(${a.bottom + l - r.top}px)` : `translateY(${p.innerHeight + l - r.top}px)` : a ? `translateY(-${r.top - a.top + r.height - l}px)` : `translateY(-${r.top + r.height - l}px)`;
}
function J(e) {
  return typeof e == "function" ? e() : e;
}
function z(e, t, o) {
  const r = J(o), a = Ce(e, t, r);
  a && (t.style.webkitTransform = a, t.style.transform = a);
}
const K = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = q(), a = {
    enter: r.transitions.easing.easeOut,
    exit: r.transitions.easing.sharp
  }, p = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: f,
    appear: y = !0,
    children: l,
    container: s,
    direction: u = "down",
    easing: T = a,
    in: w,
    onEnter: D,
    onEntered: $,
    onEntering: R,
    onExit: b,
    onExited: M,
    onExiting: C,
    style: P,
    timeout: c = p,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: g = xe
  } = t, m = _(t, Re), d = E.useRef(null), N = we(l.ref, d, o), O = (i) => (h) => {
    i && (h === void 0 ? i(d.current) : i(d.current, h));
  }, B = O((i, h) => {
    z(u, i, s), ve(i), D && D(i, h);
  }), k = O((i, h) => {
    const V = Y({
      timeout: c,
      style: P,
      easing: T
    }, {
      mode: "enter"
    });
    i.style.webkitTransition = r.transitions.create("-webkit-transform", v({}, V)), i.style.transition = r.transitions.create("transform", v({}, V)), i.style.webkitTransform = "none", i.style.transform = "none", R && R(i, h);
  }), L = O($), A = O(C), te = O((i) => {
    const h = Y({
      timeout: c,
      style: P,
      easing: T
    }, {
      mode: "exit"
    });
    i.style.webkitTransition = r.transitions.create("-webkit-transform", h), i.style.transition = r.transitions.create("transform", h), z(u, i, s), b && b(i);
  }), ne = O((i) => {
    i.style.webkitTransition = "", i.style.transition = "", M && M(i);
  }), re = (i) => {
    f && f(d.current, i);
  }, I = E.useCallback(() => {
    d.current && z(u, d.current, s);
  }, [u, s]);
  return E.useEffect(() => {
    if (w || u === "down" || u === "right")
      return;
    const i = Pe(() => {
      d.current && z(u, d.current, s);
    }), h = G(d.current);
    return h.addEventListener("resize", i), () => {
      i.clear(), h.removeEventListener("resize", i);
    };
  }, [u, w, s]), E.useEffect(() => {
    w || I();
  }, [w, I]), /* @__PURE__ */ x(g, v({
    nodeRef: d,
    onEnter: B,
    onEntered: L,
    onEntering: k,
    onExit: te,
    onExited: ne,
    onExiting: A,
    addEndListener: re,
    appear: y,
    in: w,
    timeout: c
  }, m, {
    children: (i, h) => /* @__PURE__ */ E.cloneElement(l, v({
      ref: N,
      style: v({
        visibility: i === "exited" && !w ? "hidden" : void 0
      }, P, l.props.style)
    }, h))
  }));
});
process.env.NODE_ENV !== "production" && (K.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: he.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: Te(n.oneOfType([ge, n.func]), (e) => {
    if (e.open) {
      const t = J(e.container);
      if (t && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join(`
`));
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: n.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
function Ne(e) {
  return de("MuiDrawer", e);
}
pe("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const Oe = ["BackdropProps"], Be = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], Q = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, (o.variant === "permanent" || o.variant === "persistent") && t.docked, t.modal];
}, Me = (e) => {
  const {
    classes: t,
    anchor: o,
    variant: r
  } = e, a = {
    root: ["root"],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${S(o)}`, r !== "temporary" && `paperAnchorDocked${S(o)}`]
  };
  return me(a, Ne, t);
}, Fe = H(ye, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: Q
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
})), X = H("div", {
  shouldForwardProp: ue,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: Q
})({
  flex: "0 0 auto"
}), $e = H(be, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.paper, t[`paperAnchor${S(o.anchor)}`], o.variant !== "temporary" && t[`paperAnchorDocked${S(o.anchor)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => v({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (e.vars || e).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0
}, t.anchor === "left" && {
  left: 0
}, t.anchor === "top" && {
  top: 0,
  left: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, t.anchor === "right" && {
  right: 0
}, t.anchor === "bottom" && {
  top: "auto",
  left: 0,
  bottom: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, t.anchor === "left" && t.variant !== "temporary" && {
  borderRight: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "top" && t.variant !== "temporary" && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "right" && t.variant !== "temporary" && {
  borderLeft: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "bottom" && t.variant !== "temporary" && {
  borderTop: `1px solid ${(e.vars || e).palette.divider}`
})), Z = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function Le(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function Ae({
  direction: e
}, t) {
  return e === "rtl" && Le(t) ? Z[t] : t;
}
const ee = /* @__PURE__ */ E.forwardRef(function(t, o) {
  const r = fe({
    props: t,
    name: "MuiDrawer"
  }), a = q(), p = De(), f = {
    enter: a.transitions.duration.enteringScreen,
    exit: a.transitions.duration.leavingScreen
  }, {
    anchor: y = "left",
    BackdropProps: l,
    children: s,
    className: u,
    elevation: T = 16,
    hideBackdrop: w = !1,
    ModalProps: {
      BackdropProps: D
    } = {},
    onClose: $,
    open: R = !1,
    PaperProps: b = {},
    SlideProps: M,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = K,
    transitionDuration: P = f,
    variant: c = "temporary"
  } = r, g = _(r.ModalProps, Oe), m = _(r, Be), d = E.useRef(!1);
  E.useEffect(() => {
    d.current = !0;
  }, []);
  const N = Ae({
    direction: p ? "rtl" : "ltr"
  }, y), B = v({}, r, {
    anchor: y,
    elevation: T,
    open: R,
    variant: c
  }, m), k = Me(B), L = /* @__PURE__ */ x($e, v({
    elevation: c === "temporary" ? T : 0,
    square: !0
  }, b, {
    className: j(k.paper, b.className),
    ownerState: B,
    children: s
  }));
  if (c === "permanent")
    return /* @__PURE__ */ x(X, v({
      className: j(k.root, k.docked, u),
      ownerState: B,
      ref: o
    }, m, {
      children: L
    }));
  const A = /* @__PURE__ */ x(C, v({
    in: R,
    direction: Z[N],
    timeout: P,
    appear: d.current
  }, M, {
    children: L
  }));
  return c === "persistent" ? /* @__PURE__ */ x(X, v({
    className: j(k.root, k.docked, u),
    ownerState: B,
    ref: o
  }, m, {
    children: A
  })) : /* @__PURE__ */ x(Fe, v({
    BackdropProps: v({}, l, D, {
      transitionDuration: P
    }),
    className: j(k.root, k.modal, u),
    open: R,
    ownerState: B,
    onClose: $,
    hideBackdrop: w,
    ref: o
  }, m, g, {
    children: A
  }));
});
process.env.NODE_ENV !== "production" && (ee.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: n.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: n.object,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: Ee,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Props applied to the [`Modal`](/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: n.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: n.bool,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: n.object,
  /**
   * Props applied to the [`Slide`](/material-ui/api/slide/) element.
   */
  SlideProps: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: n.oneOf(["permanent", "persistent", "temporary"])
});
function We(e) {
  const t = e.storeFactory, o = e.pageName + "/viewPage", r = e.pageName + "/newPage", a = e.pageName + "/refresh", p = e.title, f = p === p.toUpperCase() ? y(p.toLowerCase()) : p;
  function y(c) {
    return c.replace(/\b\w/g, (g) => g.toUpperCase());
  }
  const [l, s] = U({}), [u, T] = U(!1), w = e.width || "600px", D = W(0), $ = e.EditFormlet, R = e.NewFormlet, b = e.gridRef || W(null), M = {
    onClick: {
      topic: o
    },
    newRecord: {
      topic: r
    }
  };
  se(() => {
    var c = F.subscribe(o, (d, N) => {
      s(N), T(!0);
    }), g = F.subscribe(a, (d) => {
      console.log("refresh called", b.current), b.current && b.current.refresh();
    }), m = F.subscribe(r, (d, N) => {
      s(N), T(!0);
    });
    return () => {
      F.unsubscribe(c), F.unsubscribe(m), F.unsubscribe(g);
    };
  }, [l]);
  const C = (c, g = !1, m) => {
    T(g), D.current += 1, s(m), c && b.current.refresh();
  }, P = () => {
    C(!1);
  };
  return /* @__PURE__ */ oe(ie, { children: [
    /* @__PURE__ */ x("div", { className: "grid-renderer-container", children: /* @__PURE__ */ x("div", { className: "palmyra-grid-container summary-drawer-grid", children: /* @__PURE__ */ x(
      ae,
      {
        title: p,
        columns: e.fields,
        endPoint: e.options.endPoint,
        pagination: e.pagination,
        actions: M,
        ref: b,
        customizer: e.customizer,
        customButton: e.customButton,
        layoutParams: {},
        storeFactory: t,
        exportOptions: e.exportOptions,
        densityOption: e.densityOptions
      }
    ) }) }),
    /* @__PURE__ */ x(
      ee,
      {
        anchor: "right",
        PaperProps: { sx: { width: w } },
        open: u,
        onClose: () => C(!1),
        children: u ? l != null && l.id ? /* @__PURE__ */ x(
          le,
          {
            onSave: (c = !0, g = !1, m) => C(c, g, m),
            id: l.id,
            onClose: P,
            options: e.options,
            pageName: e.pageName,
            FORMLET: $,
            storeFactory: e.storeFactory,
            title: "Edit " + f
          },
          D.current + 5 + ""
        ) : /* @__PURE__ */ x(
          ce,
          {
            onSave: (c = !0, g = !1, m) => C(c, g, m),
            onClose: P,
            options: e.options,
            pageName: e.pageName,
            FORMLET: R,
            storeFactory: e.storeFactory,
            title: "New " + f,
            errorText: e.errorText
          },
          D.current + 2 + ""
        ) : /* @__PURE__ */ x("div", { children: "props?.title" })
      }
    )
  ] });
}
export {
  We as SummaryDrawerGrid
};
