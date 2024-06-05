import { jsx as a, jsxs as t } from "react/jsx-runtime";
import { usePalmyraSaveForm as b, PalmyraForm as v } from "palmyra-rui";
import { useState as N, useEffect as D } from "react";
import { useNavigate as g } from "react-router-dom";
import { D as w, B as P } from "../../../../chunks/react-toastify.esm.js";
import { B as l } from "../../../../chunks/Button.js";
import { C } from "../../../../chunks/Close.js";
function V(e) {
  const d = g(), [r, m] = N(!1), s = e.storeFactory, f = e.pageName, { data: n, saveData: h, formRef: u } = b({
    storeFactory: s,
    endPoint: e.options.endPoint,
    id: e.id
  });
  D(() => {
    e.onDataRefresh && e.onDataRefresh(n);
  }, [n]);
  const y = () => {
    P.error("Something went wrong Please try again later.. ");
  }, c = () => {
    h().then((i) => {
      d("../" + f);
    }).catch((i) => {
      i.response && i.response.status === 500 && y();
    });
  };
  return /* @__PURE__ */ a("div", { className: "form-container", children: /* @__PURE__ */ t("form", { onKeyDown: (o) => {
    o.ctrlKey && o.key === "s" && (o.preventDefault(), r && c());
  }, children: [
    /* @__PURE__ */ t("div", { className: "form-header-container", children: [
      /* @__PURE__ */ a("div", { children: e.title }),
      /* @__PURE__ */ t("div", { className: "form-header-btn-container", children: [
        /* @__PURE__ */ t(
          l,
          {
            className: "cancel-filled-button",
            disableRipple: !0,
            onClick: () => window.history.back(),
            children: [
              /* @__PURE__ */ a(C, { className: "button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ t(
          l,
          {
            disabled: !r,
            className: r ? "filled-button" : "disabled-button",
            disableRipple: !0,
            onClick: c,
            children: [
              /* @__PURE__ */ a(w, { className: "button-icon" }),
              /* @__PURE__ */ a("u", { style: { width: "5px" }, children: "S" }),
              "ave"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a(
      v,
      {
        customizer: e.customizer,
        formData: n,
        mode: "edit",
        onValidChange: m,
        ref: u,
        storeFactory: s,
        children: e.children
      }
    )
  ] }) });
}
export {
  V as SaveForm
};
