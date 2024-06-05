import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { C as n } from "../../../../chunks/Close.js";
const h = (e) => {
  const d = e.onClose, o = e.Child, a = e.childProps || {}, r = e.dialogeTitle, c = { ...a, onClose: d };
  return /* @__PURE__ */ l("div", { children: [
    /* @__PURE__ */ l("div", { className: "grid-dialog-header-container", children: [
      /* @__PURE__ */ i("div", { className: "grid-dialog-header-left-container", children: /* @__PURE__ */ i("span", { className: "grid-dialog-header-text", children: r }) }),
      /* @__PURE__ */ i("div", { className: "grid-dialog-header-right-container", children: /* @__PURE__ */ i(n, { onClick: d, className: "grid-dialog-header-close-icon" }) })
    ] }),
    /* @__PURE__ */ i("div", { className: "grid-dialog-content-container", children: /* @__PURE__ */ i(o, { ...c }) })
  ] });
};
export {
  h as GridDialog
};
