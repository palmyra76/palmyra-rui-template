import { jsx as t, jsxs as o } from "react/jsx-runtime";
import { usePalmyraNewForm as w, PalmyraForm as v } from "palmyra-rui";
import { useState as g } from "react";
import { useNavigate as D } from "react-router-dom";
import { D as p, B as n } from "../../../../chunks/react-toastify.esm.js";
import { B as c } from "../../../../chunks/Button.js";
import { C as x } from "../../../../chunks/Close.js";
function E(r) {
  const m = D(), [a, d] = g(!1), s = r.storeFactory, f = r.pageName, i = r.errorText, { data: h, saveData: u, formRef: y } = w({
    storeFactory: s,
    endPoint: r.options.endPoint,
    formListener: r.formListener
  }), N = () => {
    n.error("Something went wrong Please try again later.. ");
  }, b = () => {
    i ? n.error(i) : n.error("Data Already Exit");
  }, l = () => {
    u().then((e) => m("../" + f)).catch((e) => {
      e.response && e.response.status === 400 ? b() : e.response && e.response.status === 500 && N();
    });
  };
  return /* @__PURE__ */ t("div", { className: "form-container", children: /* @__PURE__ */ o("form", { onKeyDown: (e) => {
    e.ctrlKey && e.key === "s" && (e.preventDefault(), a && l());
  }, children: [
    /* @__PURE__ */ o("div", { className: "form-header-container", children: [
      /* @__PURE__ */ t("div", { children: r.title }),
      /* @__PURE__ */ o("div", { className: "form-header-btn-container", children: [
        /* @__PURE__ */ o(
          c,
          {
            className: "cancel-filled-button",
            disableRipple: !0,
            onClick: () => window.history.back(),
            children: [
              /* @__PURE__ */ t(x, { className: "button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ o(
          c,
          {
            disabled: !a,
            className: a ? "filled-button" : "disabled-button",
            disableRipple: !0,
            onClick: l,
            children: [
              /* @__PURE__ */ t(p, { className: "button-icon" }),
              /* @__PURE__ */ t("u", { style: { width: "5px" }, children: "S" }),
              "ave"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t(
      v,
      {
        formData: h,
        mode: "new",
        onValidChange: d,
        customizer: r.customizer,
        ref: y,
        storeFactory: s,
        children: r.children
      }
    )
  ] }) });
}
export {
  E as NewForm
};
