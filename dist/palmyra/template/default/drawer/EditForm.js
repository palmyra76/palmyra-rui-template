import { jsxs as a, jsx as o } from "react/jsx-runtime";
import { usePalmyraEditForm as D, PalmyraForm as F } from "palmyra-rui";
import { useState as x } from "react";
import { D as E, B as s } from "../../../../chunks/react-toastify.esm.js";
import { C as f } from "../../../../chunks/Close.js";
import { B as h } from "../../../../chunks/Button.js";
function L(e) {
  const i = e.errorText, c = e.onClose, [n, u] = x(!1), l = e.storeFactory, g = {
    //@ts-ignore
    onSaveSuccess: function(r) {
      e.onSave();
    },
    onSaveFailure: function(r) {
      console.error("Error while saving", r);
    },
    onChange: function() {
    }
  };
  e.pageName;
  const { data: d, saveData: v, formRef: y } = D({
    formListener: g,
    storeFactory: l,
    endPoint: e.options.endPoint,
    id: e.id
  }), w = () => {
    s.error("Something went wrong Please try again later.. ");
  }, C = () => {
    i ? s.error(i) : s.error("Data Already Exit");
  }, m = () => {
    v().then((t) => {
    }).catch((t) => {
      t.response && t.response.status === 400 ? C() : t.response && t.response.status === 500 && w();
    });
  }, N = (r) => {
    r.ctrlKey && r.key === "s" && (r.preventDefault(), n && m());
  }, b = e.FORMLET;
  return /* @__PURE__ */ a("div", { className: "drawer-form-container", children: [
    /* @__PURE__ */ a("div", { className: "drawer-form-header-container", children: [
      /* @__PURE__ */ o("div", { children: e.title }),
      /* @__PURE__ */ o("div", { className: "grid-dialog-header-right-container", children: /* @__PURE__ */ o(f, { onClick: c, className: "grid-dialog-header-close-icon" }) })
    ] }),
    /* @__PURE__ */ a("form", { onKeyDown: N, children: [
      /* @__PURE__ */ o(
        F,
        {
          formData: d,
          mode: "edit",
          onValidChange: u,
          customizer: e.customizer,
          ref: y,
          storeFactory: l,
          children: /* @__PURE__ */ o(b, { formData: d })
        }
      ),
      /* @__PURE__ */ a("div", { className: "drawer-form-btn-container", children: [
        /* @__PURE__ */ a(
          h,
          {
            className: "cancel-filled-button",
            onClick: c,
            tabIndex: -1,
            children: [
              /* @__PURE__ */ o(f, { className: "button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ a(
          h,
          {
            disabled: !n,
            className: n ? "filled-button" : "disabled-button",
            onClick: m,
            children: [
              /* @__PURE__ */ o(E, { className: "button-icon" }),
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
  L as EditForm
};
