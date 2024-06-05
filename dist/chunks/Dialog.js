import { g as z, a as H, s as u, b as s, _ as i, u as q, d as G, e as k, P as e, f as J } from "./createSvgIcon.js";
import * as l from "react";
import { B as Q, M as Z, P as M, u as ee, F as oe } from "./Modal.js";
import { jsx as p } from "react/jsx-runtime";
let T = 0;
function ae(a) {
  const [o, r] = l.useState(a), n = a || o;
  return l.useEffect(() => {
    o == null && (T += 1, r(`mui-${T}`));
  }, [o]), n;
}
const S = l.useId;
function re(a) {
  if (S !== void 0) {
    const o = S();
    return a ?? o;
  }
  return ae(a);
}
function ne(a) {
  return H("MuiDialog", a);
}
const y = z("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), $ = /* @__PURE__ */ l.createContext({});
process.env.NODE_ENV !== "production" && ($.displayName = "DialogContext");
const ie = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], le = u(Q, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (a, o) => o.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), te = (a) => {
  const {
    classes: o,
    scroll: r,
    maxWidth: n,
    fullWidth: c,
    fullScreen: m
  } = a, b = {
    root: ["root"],
    container: ["container", `scroll${s(r)}`],
    paper: ["paper", `paperScroll${s(r)}`, `paperWidth${s(String(n))}`, c && "paperFullWidth", m && "paperFullScreen"]
  };
  return J(b, ne, o);
}, se = u(Z, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (a, o) => o.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), pe = u("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (a, o) => {
    const {
      ownerState: r
    } = a;
    return [o.container, o[`scroll${s(r.scroll)}`]];
  }
})(({
  ownerState: a
}) => i({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, a.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, a.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
})), ce = u(M, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (a, o) => {
    const {
      ownerState: r
    } = a;
    return [o.paper, o[`scrollPaper${s(r.scroll)}`], o[`paperWidth${s(String(r.maxWidth))}`], r.fullWidth && o.paperFullWidth, r.fullScreen && o.paperFullScreen];
  }
})(({
  theme: a,
  ownerState: o
}) => i({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, o.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, o.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !o.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, o.maxWidth === "xs" && {
  maxWidth: a.breakpoints.unit === "px" ? Math.max(a.breakpoints.values.xs, 444) : `max(${a.breakpoints.values.xs}${a.breakpoints.unit}, 444px)`,
  [`&.${y.paperScrollBody}`]: {
    [a.breakpoints.down(Math.max(a.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, o.maxWidth && o.maxWidth !== "xs" && {
  maxWidth: `${a.breakpoints.values[o.maxWidth]}${a.breakpoints.unit}`,
  [`&.${y.paperScrollBody}`]: {
    [a.breakpoints.down(a.breakpoints.values[o.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, o.fullWidth && {
  width: "calc(100% - 64px)"
}, o.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${y.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), de = /* @__PURE__ */ l.forwardRef(function(o, r) {
  const n = q({
    props: o,
    name: "MuiDialog"
  }), c = ee(), m = {
    enter: c.transitions.duration.enteringScreen,
    exit: c.transitions.duration.leavingScreen
  }, {
    "aria-describedby": b,
    "aria-labelledby": w,
    BackdropComponent: N,
    BackdropProps: I,
    children: R,
    className: j,
    disableEscapeKeyDown: C = !1,
    fullScreen: E = !1,
    fullWidth: F = !1,
    maxWidth: O = "sm",
    onBackdropClick: W,
    onClick: D,
    onClose: f,
    open: P,
    PaperComponent: _ = M,
    PaperProps: v = {},
    scroll: A = "paper",
    TransitionComponent: U = oe,
    transitionDuration: B = m,
    TransitionProps: K
  } = n, L = G(n, ie), d = i({}, n, {
    disableEscapeKeyDown: C,
    fullScreen: E,
    fullWidth: F,
    maxWidth: O,
    scroll: A
  }), h = te(d), x = l.useRef(), V = (t) => {
    x.current = t.target === t.currentTarget;
  }, X = (t) => {
    D && D(t), x.current && (x.current = null, W && W(t), f && f(t, "backdropClick"));
  }, g = re(w), Y = l.useMemo(() => ({
    titleId: g
  }), [g]);
  return /* @__PURE__ */ p(se, i({
    className: k(h.root, j),
    closeAfterTransition: !0,
    components: {
      Backdrop: le
    },
    componentsProps: {
      backdrop: i({
        transitionDuration: B,
        as: N
      }, I)
    },
    disableEscapeKeyDown: C,
    onClose: f,
    open: P,
    ref: r,
    onClick: X,
    ownerState: d
  }, L, {
    children: /* @__PURE__ */ p(U, i({
      appear: !0,
      in: P,
      timeout: B,
      role: "presentation"
    }, K, {
      children: /* @__PURE__ */ p(pe, {
        className: k(h.container),
        onMouseDown: V,
        ownerState: d,
        children: /* @__PURE__ */ p(ce, i({
          as: _,
          elevation: 24,
          role: "dialog",
          "aria-describedby": b,
          "aria-labelledby": g
        }, v, {
          className: k(h.paper, v.className),
          ownerState: d,
          children: /* @__PURE__ */ p($.Provider, {
            value: Y,
            children: R
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (de.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": e.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": e.string,
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
  BackdropComponent: e.elementType,
  /**
   * @ignore
   */
  BackdropProps: e.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: e.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: e.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: e.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: e.oneOfType([e.oneOf(["xs", "sm", "md", "lg", "xl", !1]), e.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: e.func,
  /**
   * @ignore
   */
  onClick: e.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: e.func,
  /**
   * If `true`, the component is shown.
   */
  open: e.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: e.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: e.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: e.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: e.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: e.oneOfType([e.number, e.shape({
    appear: e.number,
    enter: e.number,
    exit: e.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: e.object
});
export {
  de as D
};
