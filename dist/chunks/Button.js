import { P as t, _ as m, d as te, e as M, g as he, k as be, s as A, u as me, a as $e, f as Ve, r as sn, b as N, h as Z, i as an } from "./createSvgIcon.js";
import * as c from "react";
import G, { Children as ln, isValidElement as ee, cloneElement as ne } from "react";
import { jsx as _, jsxs as Pe } from "react/jsx-runtime";
const cn = typeof window < "u" ? c.useLayoutEffect : c.useEffect;
function un(e, n) {
  return process.env.NODE_ENV === "production" ? () => null : function(...a) {
    return e(...a) || n(...a);
  };
}
function pn(e) {
  const {
    prototype: n = {}
  } = e;
  return !!n.isReactComponent;
}
function dn(e, n, o, a, i) {
  const r = e[n], s = i || n;
  if (r == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let u;
  return typeof r == "function" && !pn(r) && (u = "Did you accidentally provide a plain function component instead?"), u !== void 0 ? new Error(`Invalid ${a} \`${s}\` supplied to \`${o}\`. Expected an element type that can hold a ref. ${u} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const fn = un(t.elementType, dn), hn = t.oneOfType([t.func, t.object]);
function bn(e, n) {
  typeof e == "function" ? e(n) : e && (e.current = n);
}
function J(e) {
  const n = c.useRef(e);
  return cn(() => {
    n.current = e;
  }), c.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, n.current)(...o)
  )).current;
}
function Ee(...e) {
  return c.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    e.forEach((o) => {
      bn(o, n);
    });
  }, e);
}
const Te = {};
function mn(e, n) {
  const o = c.useRef(Te);
  return o.current === Te && (o.current = e(n)), o;
}
const gn = [];
function vn(e) {
  c.useEffect(e, gn);
}
class oe {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new oe();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(n, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, n);
  }
}
function yn() {
  const e = mn(oe.create).current;
  return vn(e.disposeEffect), e;
}
let ie = !0, pe = !1;
const xn = new oe(), Rn = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Cn(e) {
  const {
    type: n,
    tagName: o
  } = e;
  return !!(o === "INPUT" && Rn[n] && !e.readOnly || o === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function En(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ie = !0);
}
function ue() {
  ie = !1;
}
function Tn() {
  this.visibilityState === "hidden" && pe && (ie = !0);
}
function Mn(e) {
  e.addEventListener("keydown", En, !0), e.addEventListener("mousedown", ue, !0), e.addEventListener("pointerdown", ue, !0), e.addEventListener("touchstart", ue, !0), e.addEventListener("visibilitychange", Tn, !0);
}
function zn(e) {
  const {
    target: n
  } = e;
  try {
    return n.matches(":focus-visible");
  } catch {
  }
  return ie || Cn(n);
}
function In() {
  const e = c.useCallback((i) => {
    i != null && Mn(i.ownerDocument);
  }, []), n = c.useRef(!1);
  function o() {
    return n.current ? (pe = !0, xn.start(100, () => {
      pe = !1;
    }), n.current = !1, !0) : !1;
  }
  function a(i) {
    return zn(i) ? (n.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: n,
    onFocus: a,
    onBlur: o,
    ref: e
  };
}
function de(e, n) {
  return de = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, a) {
    return o.__proto__ = a, o;
  }, de(e, n);
}
function Nn(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, de(e, n);
}
const Me = G.createContext(null);
function Bn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ge(e, n) {
  var o = function(r) {
    return n && ee(r) ? n(r) : r;
  }, a = /* @__PURE__ */ Object.create(null);
  return e && ln.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    a[i.key] = o(i);
  }), a;
}
function $n(e, n) {
  e = e || {}, n = n || {};
  function o(h) {
    return h in n ? n[h] : e[h];
  }
  var a = /* @__PURE__ */ Object.create(null), i = [];
  for (var r in e)
    r in n ? i.length && (a[r] = i, i = []) : i.push(r);
  var s, u = {};
  for (var p in n) {
    if (a[p])
      for (s = 0; s < a[p].length; s++) {
        var d = a[p][s];
        u[a[p][s]] = o(d);
      }
    u[p] = o(p);
  }
  for (s = 0; s < i.length; s++)
    u[i[s]] = o(i[s]);
  return u;
}
function K(e, n, o) {
  return o[n] != null ? o[n] : e.props[n];
}
function Vn(e, n) {
  return ge(e.children, function(o) {
    return ne(o, {
      onExited: n.bind(null, o),
      in: !0,
      appear: K(o, "appear", e),
      enter: K(o, "enter", e),
      exit: K(o, "exit", e)
    });
  });
}
function Pn(e, n, o) {
  var a = ge(e.children), i = $n(n, a);
  return Object.keys(i).forEach(function(r) {
    var s = i[r];
    if (ee(s)) {
      var u = r in n, p = r in a, d = n[r], h = ee(d) && !d.props.in;
      p && (!u || h) ? i[r] = ne(s, {
        onExited: o.bind(null, s),
        in: !0,
        exit: K(s, "exit", e),
        enter: K(s, "enter", e)
      }) : !p && u && !h ? i[r] = ne(s, {
        in: !1
      }) : p && u && ee(d) && (i[r] = ne(s, {
        onExited: o.bind(null, s),
        in: d.props.in,
        exit: K(s, "exit", e),
        enter: K(s, "enter", e)
      }));
    }
  }), i;
}
var On = Object.values || function(e) {
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}, kn = {
  component: "div",
  childFactory: function(n) {
    return n;
  }
}, ve = /* @__PURE__ */ function(e) {
  Nn(n, e);
  function n(a, i) {
    var r;
    r = e.call(this, a, i) || this;
    var s = r.handleExited.bind(Bn(r));
    return r.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, r;
  }
  var o = n.prototype;
  return o.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, o.componentWillUnmount = function() {
    this.mounted = !1;
  }, n.getDerivedStateFromProps = function(i, r) {
    var s = r.children, u = r.handleExited, p = r.firstRender;
    return {
      children: p ? Vn(i, u) : Pn(i, s, u),
      firstRender: !1
    };
  }, o.handleExited = function(i, r) {
    var s = ge(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(r), this.mounted && this.setState(function(u) {
      var p = m({}, u.children);
      return delete p[i.key], {
        children: p
      };
    }));
  }, o.render = function() {
    var i = this.props, r = i.component, s = i.childFactory, u = te(i, ["component", "childFactory"]), p = this.state.contextValue, d = On(this.state.children).map(s);
    return delete u.appear, delete u.enter, delete u.exit, r === null ? /* @__PURE__ */ G.createElement(Me.Provider, {
      value: p
    }, d) : /* @__PURE__ */ G.createElement(Me.Provider, {
      value: p
    }, /* @__PURE__ */ G.createElement(r, u, d));
  }, n;
}(G.Component);
ve.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: t.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: t.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: t.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: t.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: t.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: t.func
} : {};
ve.defaultProps = kn;
function Oe(e) {
  const {
    className: n,
    classes: o,
    pulsate: a = !1,
    rippleX: i,
    rippleY: r,
    rippleSize: s,
    in: u,
    onExited: p,
    timeout: d
  } = e, [h, v] = c.useState(!1), y = M(n, o.ripple, o.rippleVisible, a && o.ripplePulsate), R = {
    width: s,
    height: s,
    top: -(s / 2) + r,
    left: -(s / 2) + i
  }, b = M(o.child, h && o.childLeaving, a && o.childPulsate);
  return !u && !h && v(!0), c.useEffect(() => {
    if (!u && p != null) {
      const C = setTimeout(p, d);
      return () => {
        clearTimeout(C);
      };
    }
  }, [p, u, d]), /* @__PURE__ */ _("span", {
    className: y,
    style: R,
    children: /* @__PURE__ */ _("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (Oe.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object.isRequired,
  className: t.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: t.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: t.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: t.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: t.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: t.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: t.number,
  /**
   * exit delay
   */
  timeout: t.number.isRequired
});
const z = he("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Dn = ["center", "classes", "className"];
let re = (e) => e, ze, Ie, Ne, Be;
const fe = 550, Ln = 80, Sn = be(ze || (ze = re`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Fn = be(Ie || (Ie = re`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), _n = be(Ne || (Ne = re`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), jn = A("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), wn = A(Oe, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Be || (Be = re`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), z.rippleVisible, Sn, fe, ({
  theme: e
}) => e.transitions.easing.easeInOut, z.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, z.child, z.childLeaving, Fn, fe, ({
  theme: e
}) => e.transitions.easing.easeInOut, z.childPulsate, _n, ({
  theme: e
}) => e.transitions.easing.easeInOut), ke = /* @__PURE__ */ c.forwardRef(function(n, o) {
  const a = me({
    props: n,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: r = {},
    className: s
  } = a, u = te(a, Dn), [p, d] = c.useState([]), h = c.useRef(0), v = c.useRef(null);
  c.useEffect(() => {
    v.current && (v.current(), v.current = null);
  }, [p]);
  const y = c.useRef(!1), R = yn(), b = c.useRef(null), C = c.useRef(null), j = c.useCallback((f) => {
    const {
      pulsate: E,
      rippleX: g,
      rippleY: x,
      rippleSize: D,
      cb: w
    } = f;
    d((T) => [...T, /* @__PURE__ */ _(wn, {
      classes: {
        ripple: M(r.ripple, z.ripple),
        rippleVisible: M(r.rippleVisible, z.rippleVisible),
        ripplePulsate: M(r.ripplePulsate, z.ripplePulsate),
        child: M(r.child, z.child),
        childLeaving: M(r.childLeaving, z.childLeaving),
        childPulsate: M(r.childPulsate, z.childPulsate)
      },
      timeout: fe,
      pulsate: E,
      rippleX: g,
      rippleY: x,
      rippleSize: D
    }, h.current)]), h.current += 1, v.current = w;
  }, [r]), O = c.useCallback((f = {}, E = {}, g = () => {
  }) => {
    const {
      pulsate: x = !1,
      center: D = i || E.pulsate,
      fakeElement: w = !1
      // For test purposes
    } = E;
    if ((f == null ? void 0 : f.type) === "mousedown" && y.current) {
      y.current = !1;
      return;
    }
    (f == null ? void 0 : f.type) === "touchstart" && (y.current = !0);
    const T = w ? null : C.current, L = T ? T.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let $, S, F;
    if (D || f === void 0 || f.clientX === 0 && f.clientY === 0 || !f.clientX && !f.touches)
      $ = Math.round(L.width / 2), S = Math.round(L.height / 2);
    else {
      const {
        clientX: U,
        clientY: V
      } = f.touches && f.touches.length > 0 ? f.touches[0] : f;
      $ = Math.round(U - L.left), S = Math.round(V - L.top);
    }
    if (D)
      F = Math.sqrt((2 * L.width ** 2 + L.height ** 2) / 3), F % 2 === 0 && (F += 1);
    else {
      const U = Math.max(Math.abs((T ? T.clientWidth : 0) - $), $) * 2 + 2, V = Math.max(Math.abs((T ? T.clientHeight : 0) - S), S) * 2 + 2;
      F = Math.sqrt(U ** 2 + V ** 2);
    }
    f != null && f.touches ? b.current === null && (b.current = () => {
      j({
        pulsate: x,
        rippleX: $,
        rippleY: S,
        rippleSize: F,
        cb: g
      });
    }, R.start(Ln, () => {
      b.current && (b.current(), b.current = null);
    })) : j({
      pulsate: x,
      rippleX: $,
      rippleY: S,
      rippleSize: F,
      cb: g
    });
  }, [i, j, R]), k = c.useCallback(() => {
    O({}, {
      pulsate: !0
    });
  }, [O]), B = c.useCallback((f, E) => {
    if (R.clear(), (f == null ? void 0 : f.type) === "touchend" && b.current) {
      b.current(), b.current = null, R.start(0, () => {
        B(f, E);
      });
      return;
    }
    b.current = null, d((g) => g.length > 0 ? g.slice(1) : g), v.current = E;
  }, [R]);
  return c.useImperativeHandle(o, () => ({
    pulsate: k,
    start: O,
    stop: B
  }), [k, O, B]), /* @__PURE__ */ _(jn, m({
    className: M(z.root, r.root, s),
    ref: C
  }, u, {
    children: /* @__PURE__ */ _(ve, {
      component: null,
      exit: !0,
      children: p
    })
  }));
});
process.env.NODE_ENV !== "production" && (ke.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: t.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string
});
function Un(e) {
  return $e("MuiButtonBase", e);
}
const Wn = he("MuiButtonBase", ["root", "disabled", "focusVisible"]), Kn = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], An = (e) => {
  const {
    disabled: n,
    focusVisible: o,
    focusVisibleClassName: a,
    classes: i
  } = e, s = Ve({
    root: ["root", n && "disabled", o && "focusVisible"]
  }, Un, i);
  return o && a && (s.root += ` ${a}`), s;
}, Xn = A("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Wn.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), De = /* @__PURE__ */ c.forwardRef(function(n, o) {
  const a = me({
    props: n,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: r = !1,
    children: s,
    className: u,
    component: p = "button",
    disabled: d = !1,
    disableRipple: h = !1,
    disableTouchRipple: v = !1,
    focusRipple: y = !1,
    LinkComponent: R = "a",
    onBlur: b,
    onClick: C,
    onContextMenu: j,
    onDragLeave: O,
    onFocus: k,
    onFocusVisible: B,
    onKeyDown: f,
    onKeyUp: E,
    onMouseDown: g,
    onMouseLeave: x,
    onMouseUp: D,
    onTouchEnd: w,
    onTouchMove: T,
    onTouchStart: L,
    tabIndex: $ = 0,
    TouchRippleProps: S,
    touchRippleRef: F,
    type: U
  } = a, V = te(a, Kn), X = c.useRef(null), I = c.useRef(null), _e = Ee(I, F), {
    isFocusVisibleRef: ye,
    onFocus: je,
    onBlur: we,
    ref: Ue
  } = In(), [W, H] = c.useState(!1);
  d && W && H(!1), c.useImperativeHandle(i, () => ({
    focusVisible: () => {
      H(!0), X.current.focus();
    }
  }), []);
  const [se, We] = c.useState(!1);
  c.useEffect(() => {
    We(!0);
  }, []);
  const ae = se && !h && !d;
  c.useEffect(() => {
    W && y && !h && se && I.current.pulsate();
  }, [h, y, W, se]);
  function P(l, Re, rn = v) {
    return J((Ce) => (Re && Re(Ce), !rn && I.current && I.current[l](Ce), !0));
  }
  const Ke = P("start", g), Ae = P("stop", j), Xe = P("stop", O), Ye = P("stop", D), Ge = P("stop", (l) => {
    W && l.preventDefault(), x && x(l);
  }), He = P("start", L), qe = P("stop", w), Ze = P("stop", T), Je = P("stop", (l) => {
    we(l), ye.current === !1 && H(!1), b && b(l);
  }, !1), Qe = J((l) => {
    X.current || (X.current = l.currentTarget), je(l), ye.current === !0 && (H(!0), B && B(l)), k && k(l);
  }), le = () => {
    const l = X.current;
    return p && p !== "button" && !(l.tagName === "A" && l.href);
  }, ce = c.useRef(!1), en = J((l) => {
    y && !ce.current && W && I.current && l.key === " " && (ce.current = !0, I.current.stop(l, () => {
      I.current.start(l);
    })), l.target === l.currentTarget && le() && l.key === " " && l.preventDefault(), f && f(l), l.target === l.currentTarget && le() && l.key === "Enter" && !d && (l.preventDefault(), C && C(l));
  }), nn = J((l) => {
    y && l.key === " " && I.current && W && !l.defaultPrevented && (ce.current = !1, I.current.stop(l, () => {
      I.current.pulsate(l);
    })), E && E(l), C && l.target === l.currentTarget && le() && l.key === " " && !l.defaultPrevented && C(l);
  });
  let q = p;
  q === "button" && (V.href || V.to) && (q = R);
  const Y = {};
  q === "button" ? (Y.type = U === void 0 ? "button" : U, Y.disabled = d) : (!V.href && !V.to && (Y.role = "button"), d && (Y["aria-disabled"] = d));
  const tn = Ee(o, Ue, X);
  process.env.NODE_ENV !== "production" && c.useEffect(() => {
    ae && !I.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [ae]);
  const xe = m({}, a, {
    centerRipple: r,
    component: p,
    disabled: d,
    disableRipple: h,
    disableTouchRipple: v,
    focusRipple: y,
    tabIndex: $,
    focusVisible: W
  }), on = An(xe);
  return /* @__PURE__ */ Pe(Xn, m({
    as: q,
    className: M(on.root, u),
    ownerState: xe,
    onBlur: Je,
    onClick: C,
    onContextMenu: Ae,
    onFocus: Qe,
    onKeyDown: en,
    onKeyUp: nn,
    onMouseDown: Ke,
    onMouseLeave: Ge,
    onMouseUp: Ye,
    onDragLeave: Xe,
    onTouchEnd: qe,
    onTouchMove: Ze,
    onTouchStart: He,
    ref: tn,
    tabIndex: d ? -1 : $,
    type: U
  }, Y, V, {
    children: [s, ae ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ _(ke, m({
        ref: _e,
        center: r
      }, S))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (De.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: hn,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: t.bool,
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: fn,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: t.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: t.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: t.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: t.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: t.string,
  /**
   * @ignore
   */
  href: t.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: t.elementType,
  /**
   * @ignore
   */
  onBlur: t.func,
  /**
   * @ignore
   */
  onClick: t.func,
  /**
   * @ignore
   */
  onContextMenu: t.func,
  /**
   * @ignore
   */
  onDragLeave: t.func,
  /**
   * @ignore
   */
  onFocus: t.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: t.func,
  /**
   * @ignore
   */
  onKeyDown: t.func,
  /**
   * @ignore
   */
  onKeyUp: t.func,
  /**
   * @ignore
   */
  onMouseDown: t.func,
  /**
   * @ignore
   */
  onMouseLeave: t.func,
  /**
   * @ignore
   */
  onMouseUp: t.func,
  /**
   * @ignore
   */
  onTouchEnd: t.func,
  /**
   * @ignore
   */
  onTouchMove: t.func,
  /**
   * @ignore
   */
  onTouchStart: t.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * @default 0
   */
  tabIndex: t.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: t.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: t.oneOfType([t.func, t.shape({
    current: t.shape({
      pulsate: t.func.isRequired,
      start: t.func.isRequired,
      stop: t.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: t.oneOfType([t.oneOf(["button", "reset", "submit"]), t.string])
});
function Yn(e) {
  return $e("MuiButton", e);
}
const Q = he("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Le = /* @__PURE__ */ c.createContext({});
process.env.NODE_ENV !== "production" && (Le.displayName = "ButtonGroupContext");
const Se = /* @__PURE__ */ c.createContext(void 0);
process.env.NODE_ENV !== "production" && (Se.displayName = "ButtonGroupButtonContext");
const Gn = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], Hn = (e) => {
  const {
    color: n,
    disableElevation: o,
    fullWidth: a,
    size: i,
    variant: r,
    classes: s
  } = e, u = {
    root: ["root", r, `${r}${N(n)}`, `size${N(i)}`, `${r}Size${N(i)}`, `color${N(n)}`, o && "disableElevation", a && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${N(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${N(i)}`]
  }, p = Ve(u, Yn, s);
  return m({}, s, p);
}, Fe = (e) => m({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), qn = A(De, {
  shouldForwardProp: (e) => sn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, n[o.variant], n[`${o.variant}${N(o.color)}`], n[`size${N(o.size)}`], n[`${o.variant}Size${N(o.size)}`], o.color === "inherit" && n.colorInherit, o.disableElevation && n.disableElevation, o.fullWidth && n.fullWidth];
  }
})(({
  theme: e,
  ownerState: n
}) => {
  var o, a;
  const i = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return m({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": m({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Z(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, n.variant === "text" && n.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[n.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Z(e.palette[n.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, n.variant === "outlined" && n.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[n.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[n.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Z(e.palette[n.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, n.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, n.variant === "contained" && n.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[n.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[n.color].main
      }
    }),
    "&:active": m({}, n.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Q.focusVisible}`]: m({}, n.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Q.disabled}`]: m({
      color: (e.vars || e).palette.action.disabled
    }, n.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, n.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, n.variant === "text" && {
    padding: "6px 8px"
  }, n.variant === "text" && n.color !== "inherit" && {
    color: (e.vars || e).palette[n.color].main
  }, n.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, n.variant === "outlined" && n.color !== "inherit" && {
    color: (e.vars || e).palette[n.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[n.color].mainChannel} / 0.5)` : `1px solid ${Z(e.palette[n.color].main, 0.5)}`
  }, n.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (o = (a = e.palette).getContrastText) == null ? void 0 : o.call(a, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : i,
    boxShadow: (e.vars || e).shadows[2]
  }, n.variant === "contained" && n.color !== "inherit" && {
    color: (e.vars || e).palette[n.color].contrastText,
    backgroundColor: (e.vars || e).palette[n.color].main
  }, n.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, n.size === "small" && n.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, n.size === "large" && n.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, n.size === "small" && n.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, n.size === "large" && n.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, n.size === "small" && n.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, n.size === "large" && n.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, n.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${Q.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Q.disabled}`]: {
    boxShadow: "none"
  }
}), Zn = A("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.startIcon, n[`iconSize${N(o.size)}`]];
  }
})(({
  ownerState: e
}) => m({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Fe(e))), Jn = A("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.endIcon, n[`iconSize${N(o.size)}`]];
  }
})(({
  ownerState: e
}) => m({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Fe(e))), Qn = /* @__PURE__ */ c.forwardRef(function(n, o) {
  const a = c.useContext(Le), i = c.useContext(Se), r = an(a, n), s = me({
    props: r,
    name: "MuiButton"
  }), {
    children: u,
    color: p = "primary",
    component: d = "button",
    className: h,
    disabled: v = !1,
    disableElevation: y = !1,
    disableFocusRipple: R = !1,
    endIcon: b,
    focusVisibleClassName: C,
    fullWidth: j = !1,
    size: O = "medium",
    startIcon: k,
    type: B,
    variant: f = "text"
  } = s, E = te(s, Gn), g = m({}, s, {
    color: p,
    component: d,
    disabled: v,
    disableElevation: y,
    disableFocusRipple: R,
    fullWidth: j,
    size: O,
    type: B,
    variant: f
  }), x = Hn(g), D = k && /* @__PURE__ */ _(Zn, {
    className: x.startIcon,
    ownerState: g,
    children: k
  }), w = b && /* @__PURE__ */ _(Jn, {
    className: x.endIcon,
    ownerState: g,
    children: b
  }), T = i || "";
  return /* @__PURE__ */ Pe(qn, m({
    ownerState: g,
    className: M(a.className, x.root, h, T),
    component: d,
    disabled: v,
    focusRipple: !R,
    focusVisibleClassName: M(x.focusVisible, C),
    ref: o,
    type: B
  }, E, {
    classes: x,
    children: [D, u, w]
  }));
});
process.env.NODE_ENV !== "production" && (Qn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: t.oneOfType([t.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), t.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: t.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: t.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: t.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: t.bool,
  /**
   * Element placed after the children.
   */
  endIcon: t.node,
  /**
   * @ignore
   */
  focusVisibleClassName: t.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: t.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: t.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: t.oneOfType([t.oneOf(["small", "medium", "large"]), t.string]),
  /**
   * Element placed before the children.
   */
  startIcon: t.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * @ignore
   */
  type: t.oneOfType([t.oneOf(["button", "reset", "submit"]), t.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: t.oneOfType([t.oneOf(["contained", "outlined", "text"]), t.string])
});
export {
  Qn as B,
  Me as T,
  Nn as _,
  cn as a,
  J as b,
  un as c,
  bn as s,
  Ee as u
};
