import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { usePalmyraNewForm as x, PalmyraForm as F } from "palmyra-rui";
import { useState as k, useRef as E } from "react";
import { D as u, B as i } from "../../../../chunks/react-toastify.esm.js";
import { C as h } from "../../../../chunks/Close.js";
import { B as l } from "../../../../chunks/Button.js";
function j(o) {
  const c = o.errorText, d = o.onClose, w = o.FORMLET, [a, b] = k(!1), m = o.storeFactory, f = E("none"), N = {
    //@ts-ignore
    onSaveSuccess: function(e) {
      f.current == "new" ? o.onSave(!0, !0, {}) : o.onSave(!0, !1, {});
    },
    onSaveFailure: function(e) {
      console.error("Error while saving", e);
    },
    onChange: function() {
    }
  };
  o.pageName;
  const { data: y, saveData: g, formRef: v } = x({
    formListener: N,
    initialData: {},
    storeFactory: m,
    endPoint: o.options.endPoint
  }), C = () => {
    i.error("Something went wrong Please try again later.. ");
  }, D = () => {
    c ? i.error(c) : i.error("Data Already Exit");
  }, s = (e) => {
    f.current = e, g().then((t) => {
    }).catch((t) => {
      t.response && t.response.status === 400 ? D() : t.response && t.response.status === 500 && C();
    });
  }, S = (e) => {
    e.ctrlKey && e.key === "b" && (e.preventDefault(), a && s("new")), e.ctrlKey && e.key === "s" && (e.preventDefault(), a && s("close"));
  };
  return /* @__PURE__ */ n("div", { className: "drawer-form-container", children: [
    /* @__PURE__ */ n("div", { className: "drawer-form-header-container", children: [
      /* @__PURE__ */ r("div", { children: o.title }),
      /* @__PURE__ */ r("div", { className: "grid-dialog-header-right-container", children: /* @__PURE__ */ r(h, { onClick: d, className: "grid-dialog-header-close-icon" }) })
    ] }),
    /* @__PURE__ */ n("form", { onKeyDown: S, children: [
      /* @__PURE__ */ r(
        F,
        {
          formData: y,
          mode: "new",
          onValidChange: b,
          customizer: o.customizer,
          ref: v,
          storeFactory: m,
          children: /* @__PURE__ */ r(w, { formData: {} })
        }
      ),
      /* @__PURE__ */ n("div", { className: "drawer-form-btn-container", children: [
        /* @__PURE__ */ n(
          l,
          {
            tabIndex: -1,
            className: "cancel-filled-button",
            onClick: d,
            children: [
              /* @__PURE__ */ r(h, { className: "button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ n(
          l,
          {
            disabled: !a,
            className: a ? "filled-button" : "disabled-button",
            onClick: () => s("new"),
            children: [
              /* @__PURE__ */ r(u, { className: "button-icon" }),
              /* @__PURE__ */ r("u", { style: { width: "5px" }, children: "S" }),
              "ave & New"
            ]
          }
        ),
        /* @__PURE__ */ n(
          l,
          {
            disabled: !a,
            className: a ? "filled-button" : "disabled-button",
            onClick: () => s("close"),
            children: [
              /* @__PURE__ */ r(u, { className: "button-icon" }),
              /* @__PURE__ */ r("u", { style: { width: "5px" }, children: "S" }),
              "ave & Close"
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  j as NewForm
};
