import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { usePalmyraNewForm as D, PalmyraForm as F } from "palmyra-rui";
import { useState as S, useRef as E } from "react";
import { D as P, B as l } from "../../../../chunks/react-toastify.esm.js";
import { C as f } from "../../../../chunks/Close.js";
import { B as u } from "../../../../chunks/Button.js";
function V(a) {
  const c = a.errorText, s = a.onClose, h = a.FORMLET, [t, y] = S(!1), d = a.storeFactory, m = E("none"), g = {
    //@ts-ignore
    onSaveSuccess: function(e) {
      m.current == "new" ? a.onSave(!0, !0, {}) : a.onSave(!0, !1, {});
    },
    onSaveFailure: function(e) {
      console.error("Error while saving", e);
    },
    onChange: function() {
    }
  };
  a.pageName;
  const { data: N, saveData: w, formRef: v } = D({
    formListener: g,
    initialData: {},
    storeFactory: d,
    endPoint: a.options.endPoint
  }), b = () => {
    l.error("Something went wrong Please try again later.. ");
  }, x = () => {
    c ? l.error(c) : l.error("Data Already Exit");
  }, i = (e) => {
    m.current = e, w().then((r) => {
      s();
    }).catch((r) => {
      r.response && r.response.status === 400 ? x() : r.response && r.response.status === 500 && b();
    });
  }, C = (e) => {
    e.ctrlKey && e.key === "b" && (e.preventDefault(), t && i("new")), e.ctrlKey && e.key === "s" && (e.preventDefault(), t && i("close"));
  };
  return /* @__PURE__ */ n("div", { className: "palmyra-dialog-form-container", children: [
    /* @__PURE__ */ n("div", { className: "palmyra-dialog-form-header-container", children: [
      /* @__PURE__ */ o("div", { className: "palmyra-dialog-header-text-container", children: /* @__PURE__ */ o("span", { className: "palmyra-dialog-header-text", children: a.title }) }),
      /* @__PURE__ */ o("div", { className: "dialog-header-icon-container", children: /* @__PURE__ */ o(f, { onClick: s, className: "dialog-cancel-icon" }) })
    ] }),
    /* @__PURE__ */ n("form", { onKeyDown: C, children: [
      /* @__PURE__ */ o("div", { className: "palmyra-dialog-content-container", children: /* @__PURE__ */ o(
        F,
        {
          formData: N,
          mode: "new",
          onValidChange: y,
          customizer: a.customizer,
          ref: v,
          storeFactory: d,
          children: /* @__PURE__ */ o(h, { formData: {} })
        }
      ) }),
      /* @__PURE__ */ n("div", { className: "palmyra-dialog-btn-container", children: [
        /* @__PURE__ */ n(
          u,
          {
            tabIndex: -1,
            className: "cancel-filled-button",
            onClick: s,
            children: [
              /* @__PURE__ */ o(f, { className: "button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ n(
          u,
          {
            disabled: !t,
            className: t ? "filled-button" : "disabled-button",
            onClick: () => i("new"),
            children: [
              /* @__PURE__ */ o(P, { className: "button-icon" }),
              /* @__PURE__ */ o("u", { style: { width: "5px" }, children: "S" }),
              "ave"
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  V as NewForm
};
