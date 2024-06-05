import { jsxs as o, jsx as t } from "react/jsx-runtime";
import { usePalmyraViewForm as s, PalmyraForm as f } from "palmyra-rui";
import { useState as u } from "react";
import { useNavigate as h } from "react-router-dom";
import { B as n } from "../../../../chunks/Button.js";
import { A as N, B as b } from "../../../../chunks/BorderColor.js";
function y(e) {
  const [g, c] = u(!1), i = e.storeFactory, a = e.pageName, r = h(), { data: d } = s({
    storeFactory: i,
    endPoint: e.options.endPoint,
    id: e.id
  }), l = () => r("../" + a + "/edit/" + e.id), m = () => r("../" + a);
  return /* @__PURE__ */ o("div", { className: "form-container", children: [
    /* @__PURE__ */ o("div", { className: "form-header-container", children: [
      /* @__PURE__ */ t("div", { children: e.title }),
      /* @__PURE__ */ o("div", { className: "form-header-btn-container", children: [
        /* @__PURE__ */ o(
          n,
          {
            onClick: m,
            className: "filled-button",
            disableRipple: !0,
            children: [
              /* @__PURE__ */ t(N, { className: "button-icon" }),
              "Back"
            ]
          }
        ),
        /* @__PURE__ */ o(
          n,
          {
            className: "filled-button",
            disableRipple: !0,
            onClick: l,
            children: [
              /* @__PURE__ */ t(b, { className: "button-icon" }),
              "Edit"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t(
      f,
      {
        formData: d,
        mode: "view",
        onValidChange: c,
        storeFactory: i,
        children: e.children
      }
    )
  ] });
}
export {
  y as ViewForm
};
