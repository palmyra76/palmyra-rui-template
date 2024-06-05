import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { usePalmyraSaveForm as D, PalmyraForm as F } from "palmyra-rui";
import { useState as x } from "react";
import { D as N, B as s } from "../../../../chunks/react-toastify.esm.js";
import { B as m } from "../../../../chunks/Button.js";
import { C as g } from "../../../../chunks/Close.js";
function L(e) {
  const i = e.errorText, f = e.onClose, [a, u] = x(!1), c = e.storeFactory, h = {
    //@ts-ignore
    onSaveSuccess: function(o) {
      e.onSave();
    },
    onSaveFailure: function(o) {
      console.error("Error while saving", o);
    },
    onChange: function() {
    }
  };
  e.pageName;
  const { data: l, saveData: v, formRef: y } = D({
    formListener: h,
    storeFactory: c,
    endPoint: e.options.endPoint,
    id: e.id
  }), w = () => {
    s.error("Something went wrong Please try again later.. ");
  }, S = () => {
    i ? s.error(i) : s.error("Data Already Exit");
  }, d = () => {
    v().then((t) => {
    }).catch((t) => {
      t.response && t.response.status === 400 ? S() : t.response && t.response.status === 500 && w();
    });
  }, b = (o) => {
    o.ctrlKey && o.key === "s" && (o.preventDefault(), a && d());
  }, C = e.FORMLET;
  return /* @__PURE__ */ n("div", { className: "drawer-form-container", children: [
    /* @__PURE__ */ r("div", { className: "drawer-form-header-container", children: /* @__PURE__ */ r("div", { children: e.title }) }),
    /* @__PURE__ */ n("form", { onKeyDown: b, children: [
      /* @__PURE__ */ r(
        F,
        {
          formData: l,
          mode: "edit",
          onValidChange: u,
          customizer: e.customizer,
          ref: y,
          storeFactory: c,
          children: /* @__PURE__ */ r(C, { formData: l })
        }
      ),
      /* @__PURE__ */ n("div", { className: "drawer-form-btn-container", children: [
        /* @__PURE__ */ n(
          m,
          {
            className: "outlined-button",
            onClick: f,
            tabIndex: -1,
            children: [
              /* @__PURE__ */ r(g, { className: "button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ n(
          m,
          {
            disabled: !a,
            className: a ? "filled-button" : "disabled-button",
            onClick: d,
            children: [
              /* @__PURE__ */ r(N, { className: "button-icon" }),
              /* @__PURE__ */ r("u", { style: { width: "5px" }, children: "S" }),
              "ave"
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  L as SaveForm
};
