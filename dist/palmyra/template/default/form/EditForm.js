import { jsx as t, jsxs as a } from "react/jsx-runtime";
import { usePalmyraEditForm as b, PalmyraForm as N } from "palmyra-rui";
import { useState as v, useEffect as D } from "react";
import { useNavigate as g } from "react-router-dom";
import { D as w, B as P } from "../../../../chunks/react-toastify.esm.js";
import { B as l } from "../../../../chunks/Button.js";
import { C } from "../../../../chunks/Close.js";
function B(e) {
  const d = g(), [r, m] = v(!1), s = e.storeFactory, f = e.pageName, { data: i, saveData: h, formRef: u } = b({
    storeFactory: s,
    endPoint: e.options.endPoint,
    id: e.id
  });
  D(() => {
    e.onDataRefresh && e.onDataRefresh(i);
  }, [i]);
  const y = () => {
    P.error("Something went wrong Please try again later.. ");
  }, c = () => {
    h().then((n) => {
      d("../" + f);
    }).catch((n) => {
      n.response && n.response.status === 500 && y();
    });
  };
  return /* @__PURE__ */ t("div", { className: "form-container", children: /* @__PURE__ */ a("form", { onKeyDown: (o) => {
    o.ctrlKey && o.key === "s" && (o.preventDefault(), r && c());
  }, children: [
    /* @__PURE__ */ a("div", { className: "form-header-container", children: [
      /* @__PURE__ */ t("div", { children: e.title }),
      /* @__PURE__ */ a("div", { className: "form-header-btn-container", children: [
        /* @__PURE__ */ a(
          l,
          {
            className: "cancel-filled-button",
            disableRipple: !0,
            onClick: () => window.history.back(),
            children: [
              /* @__PURE__ */ t(C, { className: "button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ a(
          l,
          {
            disabled: !r,
            className: r ? "filled-button" : "disabled-button",
            disableRipple: !0,
            onClick: c,
            children: [
              /* @__PURE__ */ t(w, { className: "button-icon" }),
              /* @__PURE__ */ t("u", { style: { width: "5px" }, children: "S" }),
              "ave"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t(
      N,
      {
        customizer: e.customizer,
        formData: i,
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
  B as EditForm
};
