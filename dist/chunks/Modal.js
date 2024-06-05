import { P as n, _ as m, j as Ye, T as Ze, l as Je, d as z, a as pe, g as fe, s as ie, h as Te, u as me, e as G, f as he } from "./createSvgIcon.js";
import * as d from "react";
import ne from "react";
import { jsx as M, jsxs as Fe } from "react/jsx-runtime";
import { c as Ee, _ as Qe, T as _e, u as J, a as Ne, s as Re, b as Pe } from "./Button.js";
import * as en from "react-dom";
import te from "react-dom";
function nn(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function $e(e, t, i, o, s) {
  const r = e[t], a = s || t;
  if (r == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = r.type;
  return typeof c == "function" && !nn(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${i}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const se = Ee(n.element, $e);
se.isRequired = Ee(n.element.isRequired, $e);
const tn = "exact-prop: ​";
function Ae(e) {
  return process.env.NODE_ENV === "production" ? e : m({}, e, {
    [tn]: (t) => {
      const i = Object.keys(t).filter((o) => !e.hasOwnProperty(o));
      return i.length > 0 ? new Error(`The following props are not supported: ${i.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Le(e, t, i, o, s) {
  if (process.env.NODE_ENV === "production")
    return null;
  const r = e[t], a = s || t;
  return r == null ? null : r && r.nodeType !== 1 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${i}\`. Expected an HTMLElement.`) : null;
}
function ke(...e) {
  return e.reduce((t, i) => i == null ? t : function(...s) {
    t.apply(this, s), i.apply(this, s);
  }, () => {
  });
}
function j(e) {
  return e && e.ownerDocument || document;
}
function ve(e) {
  return j(e).defaultView || window;
}
function on(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function rn(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function sn(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const an = Number.isInteger || sn;
function Be(e, t, i, o) {
  const s = e[t];
  if (s == null || !an(s)) {
    const r = rn(s);
    return new RangeError(`Invalid ${o} \`${t}\` of type \`${r}\` supplied to \`${i}\`, expected \`integer\`.`);
  }
  return null;
}
function je(e, t, ...i) {
  return e[t] === void 0 ? null : Be(e, t, ...i);
}
function ue() {
  return null;
}
je.isRequired = Be;
ue.isRequired = ue;
const ln = process.env.NODE_ENV === "production" ? ue : je;
function Ve() {
  const e = Ye(Je);
  return process.env.NODE_ENV !== "production" && d.useDebugValue(e), e[Ze] || e;
}
const Oe = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, Se = {
  disabled: !1
};
var cn = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
  enter: n.number,
  exit: n.number,
  appear: n.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && n.oneOfType([n.string, n.shape({
  enter: n.string,
  exit: n.string,
  active: n.string
}), n.shape({
  enter: n.string,
  enterDone: n.string,
  enterActive: n.string,
  exit: n.string,
  exitDone: n.string,
  exitActive: n.string
})]);
var un = function(t) {
  return t.scrollTop;
}, Y = "unmounted", V = "exited", H = "entering", K = "entered", de = "exiting", L = /* @__PURE__ */ function(e) {
  Qe(t, e);
  function t(o, s) {
    var r;
    r = e.call(this, o, s) || this;
    var a = s, l = a && !a.isMounting ? o.enter : o.appear, c;
    return r.appearStatus = null, o.in ? l ? (c = V, r.appearStatus = H) : c = K : o.unmountOnExit || o.mountOnEnter ? c = Y : c = V, r.state = {
      status: c
    }, r.nextCallback = null, r;
  }
  t.getDerivedStateFromProps = function(s, r) {
    var a = s.in;
    return a && r.status === Y ? {
      status: V
    } : null;
  };
  var i = t.prototype;
  return i.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, i.componentDidUpdate = function(s) {
    var r = null;
    if (s !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== H && a !== K && (r = H) : (a === H || a === K) && (r = de);
    }
    this.updateStatus(!1, r);
  }, i.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, i.getTimeouts = function() {
    var s = this.props.timeout, r, a, l;
    return r = a = l = s, s != null && typeof s != "number" && (r = s.exit, a = s.enter, l = s.appear !== void 0 ? s.appear : a), {
      exit: r,
      enter: a,
      appear: l
    };
  }, i.updateStatus = function(s, r) {
    if (s === void 0 && (s = !1), r !== null)
      if (this.cancelNextCallback(), r === H) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : te.findDOMNode(this);
          a && un(a);
        }
        this.performEnter(s);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === V && this.setState({
        status: Y
      });
  }, i.performEnter = function(s) {
    var r = this, a = this.props.enter, l = this.context ? this.context.isMounting : s, c = this.props.nodeRef ? [l] : [te.findDOMNode(this), l], u = c[0], f = c[1], E = this.getTimeouts(), g = l ? E.appear : E.enter;
    if (!s && !a || Se.disabled) {
      this.safeSetState({
        status: K
      }, function() {
        r.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: H
    }, function() {
      r.props.onEntering(u, f), r.onTransitionEnd(g, function() {
        r.safeSetState({
          status: K
        }, function() {
          r.props.onEntered(u, f);
        });
      });
    });
  }, i.performExit = function() {
    var s = this, r = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : te.findDOMNode(this);
    if (!r || Se.disabled) {
      this.safeSetState({
        status: V
      }, function() {
        s.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: de
    }, function() {
      s.props.onExiting(l), s.onTransitionEnd(a.exit, function() {
        s.safeSetState({
          status: V
        }, function() {
          s.props.onExited(l);
        });
      });
    });
  }, i.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, i.safeSetState = function(s, r) {
    r = this.setNextCallback(r), this.setState(s, r);
  }, i.setNextCallback = function(s) {
    var r = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, r.nextCallback = null, s(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, i.onTransitionEnd = function(s, r) {
    this.setNextCallback(r);
    var a = this.props.nodeRef ? this.props.nodeRef.current : te.findDOMNode(this), l = s == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], f = c[1];
      this.props.addEndListener(u, f);
    }
    s != null && setTimeout(this.nextCallback, s);
  }, i.render = function() {
    var s = this.state.status;
    if (s === Y)
      return null;
    var r = this.props, a = r.children;
    r.in, r.mountOnEnter, r.unmountOnExit, r.appear, r.enter, r.exit, r.timeout, r.addEndListener, r.onEnter, r.onEntering, r.onEntered, r.onExit, r.onExiting, r.onExited, r.nodeRef;
    var l = z(r, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ne.createElement(_e.Provider, {
        value: null
      }, typeof a == "function" ? a(s, l) : ne.cloneElement(ne.Children.only(a), l))
    );
  }, t;
}(ne.Component);
L.contextType = _e;
L.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: n.shape({
    current: typeof Element > "u" ? n.any : function(e, t, i, o, s, r) {
      var a = e[t];
      return n.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, i, o, s, r);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: n.oneOfType([n.func.isRequired, n.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: n.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: n.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: n.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: n.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: n.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: n.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var i = cn;
    t.addEndListener || (i = i.isRequired);
    for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++)
      s[r - 1] = arguments[r];
    return i.apply(void 0, [t].concat(s));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: n.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: n.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: n.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: n.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: n.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: n.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: n.func
} : {};
function W() {
}
L.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: W,
  onEntering: W,
  onEntered: W,
  onExit: W,
  onExiting: W,
  onExited: W
};
L.UNMOUNTED = Y;
L.EXITED = V;
L.ENTERING = H;
L.ENTERED = K;
L.EXITING = de;
const dn = (e) => e.scrollTop;
function Ce(e, t) {
  var i, o;
  const {
    timeout: s,
    easing: r,
    style: a = {}
  } = e;
  return {
    duration: (i = a.transitionDuration) != null ? i : typeof s == "number" ? s : s[t.mode] || 0,
    easing: (o = a.transitionTimingFunction) != null ? o : typeof r == "object" ? r[t.mode] : r,
    delay: a.transitionDelay
  };
}
function pn(e) {
  return pe("MuiPaper", e);
}
fe("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const fn = ["className", "component", "elevation", "square", "variant"], mn = (e) => {
  const {
    square: t,
    elevation: i,
    variant: o,
    classes: s
  } = e, r = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${i}`]
  };
  return he(r, pn, s);
}, hn = ie("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: i
    } = e;
    return [t.root, t[i.variant], !i.square && t.rounded, i.variant === "elevation" && t[`elevation${i.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var i;
  return m({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && m({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Te("#fff", Oe(t.elevation))}, ${Te("#fff", Oe(t.elevation))})`
  }, e.vars && {
    backgroundImage: (i = e.vars.overlays) == null ? void 0 : i[t.elevation]
  }));
}), En = /* @__PURE__ */ d.forwardRef(function(t, i) {
  const o = me({
    props: t,
    name: "MuiPaper"
  }), {
    className: s,
    component: r = "div",
    elevation: a = 1,
    square: l = !1,
    variant: c = "elevation"
  } = o, u = z(o, fn), f = m({}, o, {
    component: r,
    elevation: a,
    square: l,
    variant: c
  }), E = mn(f);
  return process.env.NODE_ENV !== "production" && Ve().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ M(hn, m({
    as: r,
    ownerState: f,
    className: G(E.root, s),
    ref: i
  }, u));
});
process.env.NODE_ENV !== "production" && (En.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Ee(ln, (e) => {
    const {
      elevation: t,
      variant: i
    } = e;
    return t > 0 && i === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${i}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: n.oneOfType([n.oneOf(["elevation", "outlined"]), n.string])
});
function vn(e) {
  return typeof e == "string";
}
function bn(e, t, i) {
  return e === void 0 || vn(e) ? t : m({}, t, {
    ownerState: m({}, t.ownerState, i)
  });
}
function He(e, t = []) {
  if (e === void 0)
    return {};
  const i = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    i[o] = e[o];
  }), i;
}
function gn(e, t, i) {
  return typeof e == "function" ? e(t, i) : e;
}
function we(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((i) => !(i.match(/^on[A-Z]/) && typeof e[i] == "function")).forEach((i) => {
    t[i] = e[i];
  }), t;
}
function yn(e) {
  const {
    getSlotProps: t,
    additionalProps: i,
    externalSlotProps: o,
    externalForwardedProps: s,
    className: r
  } = e;
  if (!t) {
    const x = G(i == null ? void 0 : i.className, r, s == null ? void 0 : s.className, o == null ? void 0 : o.className), h = m({}, i == null ? void 0 : i.style, s == null ? void 0 : s.style, o == null ? void 0 : o.style), P = m({}, i, s, o);
    return x.length > 0 && (P.className = x), Object.keys(h).length > 0 && (P.style = h), {
      props: P,
      internalRef: void 0
    };
  }
  const a = He(m({}, s, o)), l = we(o), c = we(s), u = t(a), f = G(u == null ? void 0 : u.className, i == null ? void 0 : i.className, r, s == null ? void 0 : s.className, o == null ? void 0 : o.className), E = m({}, u == null ? void 0 : u.style, i == null ? void 0 : i.style, s == null ? void 0 : s.style, o == null ? void 0 : o.style), g = m({}, u, i, c, l);
  return f.length > 0 && (g.className = f), Object.keys(E).length > 0 && (g.style = E), {
    props: g,
    internalRef: u.ref
  };
}
const xn = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function De(e) {
  var t;
  const {
    elementType: i,
    externalSlotProps: o,
    ownerState: s,
    skipResolvingSlotProps: r = !1
  } = e, a = z(e, xn), l = r ? {} : gn(o, s), {
    props: c,
    internalRef: u
  } = yn(m({}, a, {
    externalSlotProps: l
  })), f = J(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return bn(i, m({}, c, {
    ref: f
  }), s);
}
const Tn = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Nn(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Rn(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let i = t(`[name="${e.name}"]:checked`);
  return i || (i = t(`[name="${e.name}"]`)), i !== e;
}
function Pn(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Rn(e));
}
function kn(e) {
  const t = [], i = [];
  return Array.from(e.querySelectorAll(Tn)).forEach((o, s) => {
    const r = Nn(o);
    r === -1 || !Pn(o) || (r === 0 ? t.push(o) : i.push({
      documentOrder: s,
      tabIndex: r,
      node: o
    }));
  }), i.sort((o, s) => o.tabIndex === s.tabIndex ? o.documentOrder - s.documentOrder : o.tabIndex - s.tabIndex).map((o) => o.node).concat(t);
}
function On() {
  return !0;
}
function oe(e) {
  const {
    children: t,
    disableAutoFocus: i = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: s = !1,
    getTabbable: r = kn,
    isEnabled: a = On,
    open: l
  } = e, c = d.useRef(!1), u = d.useRef(null), f = d.useRef(null), E = d.useRef(null), g = d.useRef(null), x = d.useRef(!1), h = d.useRef(null), P = J(t.ref, h), O = d.useRef(null);
  d.useEffect(() => {
    !l || !h.current || (x.current = !i);
  }, [i, l]), d.useEffect(() => {
    if (!l || !h.current)
      return;
    const p = j(h.current);
    return h.current.contains(p.activeElement) || (h.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), h.current.setAttribute("tabIndex", "-1")), x.current && h.current.focus()), () => {
      s || (E.current && E.current.focus && (c.current = !0, E.current.focus()), E.current = null);
    };
  }, [l]), d.useEffect(() => {
    if (!l || !h.current)
      return;
    const p = j(h.current), T = (R) => {
      O.current = R, !(o || !a() || R.key !== "Tab") && p.activeElement === h.current && R.shiftKey && (c.current = !0, f.current && f.current.focus());
    }, N = () => {
      const R = h.current;
      if (R === null)
        return;
      if (!p.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (R.contains(p.activeElement) || o && p.activeElement !== u.current && p.activeElement !== f.current)
        return;
      if (p.activeElement !== g.current)
        g.current = null;
      else if (g.current !== null)
        return;
      if (!x.current)
        return;
      let w = [];
      if ((p.activeElement === u.current || p.activeElement === f.current) && (w = r(h.current)), w.length > 0) {
        var _, D;
        const B = !!((_ = O.current) != null && _.shiftKey && ((D = O.current) == null ? void 0 : D.key) === "Tab"), $ = w[0], A = w[w.length - 1];
        typeof $ != "string" && typeof A != "string" && (B ? A.focus() : $.focus());
      } else
        R.focus();
    };
    p.addEventListener("focusin", N), p.addEventListener("keydown", T, !0);
    const k = setInterval(() => {
      p.activeElement && p.activeElement.tagName === "BODY" && N();
    }, 50);
    return () => {
      clearInterval(k), p.removeEventListener("focusin", N), p.removeEventListener("keydown", T, !0);
    };
  }, [i, o, s, a, l, r]);
  const S = (p) => {
    E.current === null && (E.current = p.relatedTarget), x.current = !0, g.current = p.target;
    const T = t.props.onFocus;
    T && T(p);
  }, C = (p) => {
    E.current === null && (E.current = p.relatedTarget), x.current = !0;
  };
  return /* @__PURE__ */ Fe(d.Fragment, {
    children: [/* @__PURE__ */ M("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ d.cloneElement(t, {
      ref: P,
      onFocus: S
    }), /* @__PURE__ */ M("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (oe.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: se,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: n.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: n.func,
  /**
   * If `true`, focus is locked.
   */
  open: n.bool.isRequired
});
process.env.NODE_ENV !== "production" && (oe.propTypes = Ae(oe.propTypes));
function Sn(e) {
  return typeof e == "function" ? e() : e;
}
const re = /* @__PURE__ */ d.forwardRef(function(t, i) {
  const {
    children: o,
    container: s,
    disablePortal: r = !1
  } = t, [a, l] = d.useState(null), c = J(/* @__PURE__ */ d.isValidElement(o) ? o.ref : null, i);
  if (Ne(() => {
    r || l(Sn(s) || document.body);
  }, [s, r]), Ne(() => {
    if (a && !r)
      return Re(i, a), () => {
        Re(i, null);
      };
  }, [i, a, r]), r) {
    if (/* @__PURE__ */ d.isValidElement(o)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ d.cloneElement(o, u);
    }
    return /* @__PURE__ */ M(d.Fragment, {
      children: o
    });
  }
  return /* @__PURE__ */ M(d.Fragment, {
    children: a && /* @__PURE__ */ en.createPortal(o, a)
  });
});
process.env.NODE_ENV !== "production" && (re.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: n.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Le, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool
});
process.env.NODE_ENV !== "production" && (re.propTypes = Ae(re.propTypes));
function Cn(e) {
  const t = j(e);
  return t.body === e ? ve(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Z(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Ie(e) {
  return parseInt(ve(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function wn(e) {
  const i = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return i || o;
}
function Me(e, t, i, o, s) {
  const r = [t, i, ...o];
  [].forEach.call(e.children, (a) => {
    const l = r.indexOf(a) === -1, c = !wn(a);
    l && c && Z(a, s);
  });
}
function ce(e, t) {
  let i = -1;
  return e.some((o, s) => t(o) ? (i = s, !0) : !1), i;
}
function Dn(e, t) {
  const i = [], o = e.container;
  if (!t.disableScrollLock) {
    if (Cn(o)) {
      const a = on(j(o));
      i.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${Ie(o) + a}px`;
      const l = j(o).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        i.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Ie(c) + a}px`;
      });
    }
    let r;
    if (o.parentNode instanceof DocumentFragment)
      r = j(o).body;
    else {
      const a = o.parentElement, l = ve(o);
      r = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : o;
    }
    i.push({
      value: r.style.overflow,
      property: "overflow",
      el: r
    }, {
      value: r.style.overflowX,
      property: "overflow-x",
      el: r
    }, {
      value: r.style.overflowY,
      property: "overflow-y",
      el: r
    }), r.style.overflow = "hidden";
  }
  return () => {
    i.forEach(({
      value: r,
      el: a,
      property: l
    }) => {
      r ? a.style.setProperty(l, r) : a.style.removeProperty(l);
    });
  };
}
function In(e) {
  const t = [];
  return [].forEach.call(e.children, (i) => {
    i.getAttribute("aria-hidden") === "true" && t.push(i);
  }), t;
}
class Mn {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, i) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && Z(t.modalRef, !1);
    const s = In(i);
    Me(i, t.mount, t.modalRef, s, !0);
    const r = ce(this.containers, (a) => a.container === i);
    return r !== -1 ? (this.containers[r].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: i,
      restore: null,
      hiddenSiblings: s
    }), o);
  }
  mount(t, i) {
    const o = ce(this.containers, (r) => r.modals.indexOf(t) !== -1), s = this.containers[o];
    s.restore || (s.restore = Dn(s, i));
  }
  remove(t, i = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const s = ce(this.containers, (a) => a.modals.indexOf(t) !== -1), r = this.containers[s];
    if (r.modals.splice(r.modals.indexOf(t), 1), this.modals.splice(o, 1), r.modals.length === 0)
      r.restore && r.restore(), t.modalRef && Z(t.modalRef, i), Me(r.container, t.mount, t.modalRef, r.hiddenSiblings, !1), this.containers.splice(s, 1);
    else {
      const a = r.modals[r.modals.length - 1];
      a.modalRef && Z(a.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function Fn(e) {
  return typeof e == "function" ? e() : e;
}
function _n(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const $n = new Mn();
function An(e) {
  const {
    container: t,
    disableEscapeKeyDown: i = !1,
    disableScrollLock: o = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: s = $n,
    closeAfterTransition: r = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: f,
    rootRef: E
  } = e, g = d.useRef({}), x = d.useRef(null), h = d.useRef(null), P = J(h, E), [O, S] = d.useState(!f), C = _n(c);
  let p = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (p = !1);
  const T = () => j(x.current), N = () => (g.current.modalRef = h.current, g.current.mount = x.current, g.current), k = () => {
    s.mount(N(), {
      disableScrollLock: o
    }), h.current && (h.current.scrollTop = 0);
  }, R = Pe(() => {
    const v = Fn(t) || T().body;
    s.add(N(), v), h.current && k();
  }), w = d.useCallback(() => s.isTopModal(N()), [s]), _ = Pe((v) => {
    x.current = v, v && (f && w() ? k() : h.current && Z(h.current, p));
  }), D = d.useCallback(() => {
    s.remove(N(), p);
  }, [p, s]);
  d.useEffect(() => () => {
    D();
  }, [D]), d.useEffect(() => {
    f ? R() : (!C || !r) && D();
  }, [f, D, C, r, R]);
  const B = (v) => (y) => {
    var F;
    (F = v.onKeyDown) == null || F.call(v, y), !(y.key !== "Escape" || y.which === 229 || // Wait until IME is settled.
    !w()) && (i || (y.stopPropagation(), u && u(y, "escapeKeyDown")));
  }, $ = (v) => (y) => {
    var F;
    (F = v.onClick) == null || F.call(v, y), y.target === y.currentTarget && u && u(y, "backdropClick");
  };
  return {
    getRootProps: (v = {}) => {
      const y = He(e);
      delete y.onTransitionEnter, delete y.onTransitionExited;
      const F = m({}, y, v);
      return m({
        role: "presentation"
      }, F, {
        onKeyDown: B(F),
        ref: P
      });
    },
    getBackdropProps: (v = {}) => {
      const y = v;
      return m({
        "aria-hidden": !0
      }, y, {
        onClick: $(y),
        open: f
      });
    },
    getTransitionProps: () => {
      const v = () => {
        S(!1), a && a();
      }, y = () => {
        S(!0), l && l(), r && D();
      };
      return {
        onEnter: ke(v, c == null ? void 0 : c.props.onEnter),
        onExited: ke(y, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: P,
    portalRef: _,
    isTopModal: w,
    exited: O,
    hasTransition: C
  };
}
const Ln = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Bn = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Ue = /* @__PURE__ */ d.forwardRef(function(t, i) {
  const o = Ve(), s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: r,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: f,
    onEntered: E,
    onEntering: g,
    onExit: x,
    onExited: h,
    onExiting: P,
    style: O,
    timeout: S = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = L
  } = t, p = z(t, Ln), T = d.useRef(null), N = J(T, l.ref, i), k = (b) => (I) => {
    if (b) {
      const v = T.current;
      I === void 0 ? b(v) : b(v, I);
    }
  }, R = k(g), w = k((b, I) => {
    dn(b);
    const v = Ce({
      style: O,
      timeout: S,
      easing: c
    }, {
      mode: "enter"
    });
    b.style.webkitTransition = o.transitions.create("opacity", v), b.style.transition = o.transitions.create("opacity", v), f && f(b, I);
  }), _ = k(E), D = k(P), B = k((b) => {
    const I = Ce({
      style: O,
      timeout: S,
      easing: c
    }, {
      mode: "exit"
    });
    b.style.webkitTransition = o.transitions.create("opacity", I), b.style.transition = o.transitions.create("opacity", I), x && x(b);
  }), $ = k(h);
  return /* @__PURE__ */ M(C, m({
    appear: a,
    in: u,
    nodeRef: T,
    onEnter: w,
    onEntered: _,
    onEntering: R,
    onExit: B,
    onExited: $,
    onExiting: D,
    addEndListener: (b) => {
      r && r(T.current, b);
    },
    timeout: S
  }, p, {
    children: (b, I) => /* @__PURE__ */ d.cloneElement(l, m({
      style: m({
        opacity: 0,
        visibility: b === "exited" && !u ? "hidden" : void 0
      }, Bn[b], O, l.props.style),
      ref: N
    }, I))
  }));
});
process.env.NODE_ENV !== "production" && (Ue.propTypes = {
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
  children: se.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
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
function jn(e) {
  return pe("MuiBackdrop", e);
}
fe("MuiBackdrop", ["root", "invisible"]);
const Vn = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Hn = (e) => {
  const {
    classes: t,
    invisible: i
  } = e;
  return he({
    root: ["root", i && "invisible"]
  }, jn, t);
}, Un = ie("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: i
    } = e;
    return [t.root, i.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => m({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), qe = /* @__PURE__ */ d.forwardRef(function(t, i) {
  var o, s, r;
  const a = me({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: f = {},
    componentsProps: E = {},
    invisible: g = !1,
    open: x,
    slotProps: h = {},
    slots: P = {},
    TransitionComponent: O = Ue,
    transitionDuration: S
  } = a, C = z(a, Vn), p = m({}, a, {
    component: u,
    invisible: g
  }), T = Hn(p), N = (o = h.root) != null ? o : E.root;
  return /* @__PURE__ */ M(O, m({
    in: x,
    timeout: S
  }, C, {
    children: /* @__PURE__ */ M(Un, m({
      "aria-hidden": !0
    }, N, {
      as: (s = (r = P.root) != null ? r : f.Root) != null ? s : u,
      className: G(T.root, c, N == null ? void 0 : N.className),
      ownerState: m({}, p, N == null ? void 0 : N.ownerState),
      classes: T,
      ref: i,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (qe.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    root: n.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: n.bool,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
function qn(e) {
  return pe("MuiModal", e);
}
fe("MuiModal", ["root", "hidden", "backdrop"]);
const Wn = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], Kn = (e) => {
  const {
    open: t,
    exited: i,
    classes: o
  } = e;
  return he({
    root: ["root", !t && i && "hidden"],
    backdrop: ["backdrop"]
  }, qn, o);
}, Gn = ie("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: i
    } = e;
    return [t.root, !i.open && i.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => m({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), zn = ie(qe, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Xn = /* @__PURE__ */ d.forwardRef(function(t, i) {
  var o, s, r, a, l, c;
  const u = me({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: f = zn,
    BackdropProps: E,
    className: g,
    closeAfterTransition: x = !1,
    children: h,
    container: P,
    component: O,
    components: S = {},
    componentsProps: C = {},
    disableAutoFocus: p = !1,
    disableEnforceFocus: T = !1,
    disableEscapeKeyDown: N = !1,
    disablePortal: k = !1,
    disableRestoreFocus: R = !1,
    disableScrollLock: w = !1,
    hideBackdrop: _ = !1,
    keepMounted: D = !1,
    onBackdropClick: B,
    open: $,
    slotProps: A,
    slots: b
    // eslint-disable-next-line react/prop-types
  } = u, I = z(u, Wn), v = m({}, u, {
    closeAfterTransition: x,
    disableAutoFocus: p,
    disableEnforceFocus: T,
    disableEscapeKeyDown: N,
    disablePortal: k,
    disableRestoreFocus: R,
    disableScrollLock: w,
    hideBackdrop: _,
    keepMounted: D
  }), {
    getRootProps: y,
    getBackdropProps: F,
    getTransitionProps: We,
    portalRef: Ke,
    isTopModal: Ge,
    exited: be,
    hasTransition: ge
  } = An(m({}, v, {
    rootRef: i
  })), X = m({}, v, {
    exited: be
  }), U = Kn(X), Q = {};
  if (h.props.tabIndex === void 0 && (Q.tabIndex = "-1"), ge) {
    const {
      onEnter: q,
      onExited: ee
    } = We();
    Q.onEnter = q, Q.onExited = ee;
  }
  const ye = (o = (s = b == null ? void 0 : b.root) != null ? s : S.Root) != null ? o : Gn, xe = (r = (a = b == null ? void 0 : b.backdrop) != null ? a : S.Backdrop) != null ? r : f, ae = (l = A == null ? void 0 : A.root) != null ? l : C.root, le = (c = A == null ? void 0 : A.backdrop) != null ? c : C.backdrop, ze = De({
    elementType: ye,
    externalSlotProps: ae,
    externalForwardedProps: I,
    getSlotProps: y,
    additionalProps: {
      ref: i,
      as: O
    },
    ownerState: X,
    className: G(g, ae == null ? void 0 : ae.className, U == null ? void 0 : U.root, !X.open && X.exited && (U == null ? void 0 : U.hidden))
  }), Xe = De({
    elementType: xe,
    externalSlotProps: le,
    additionalProps: E,
    getSlotProps: (q) => F(m({}, q, {
      onClick: (ee) => {
        B && B(ee), q != null && q.onClick && q.onClick(ee);
      }
    })),
    className: G(le == null ? void 0 : le.className, E == null ? void 0 : E.className, U == null ? void 0 : U.backdrop),
    ownerState: X
  });
  return !D && !$ && (!ge || be) ? null : /* @__PURE__ */ M(re, {
    ref: Ke,
    container: P,
    disablePortal: k,
    children: /* @__PURE__ */ Fe(ye, m({}, ze, {
      children: [!_ && f ? /* @__PURE__ */ M(xe, m({}, Xe)) : null, /* @__PURE__ */ M(oe, {
        disableEnforceFocus: T,
        disableAutoFocus: p,
        disableRestoreFocus: R,
        isEnabled: Ge,
        open: $,
        children: /* @__PURE__ */ d.cloneElement(h, Q)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Xn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: n.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: n.object,
  /**
   * A single child content element.
   */
  children: se.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: n.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Backdrop: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Le, n.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: n.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
export {
  qe as B,
  Ue as F,
  Le as H,
  Xn as M,
  En as P,
  L as T,
  se as e,
  Ce as g,
  ln as i,
  ve as o,
  dn as r,
  Ve as u
};
