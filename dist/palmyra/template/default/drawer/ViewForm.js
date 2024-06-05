import { jsxs as a, jsx as i } from "react/jsx-runtime";
import { usePalmyraViewForm as m, PalmyraForm as s } from "palmyra-rui";
import { useState as f } from "react";
import { useNavigate as u } from "react-router-dom";
import { B as t } from "../../../../chunks/Button.js";
import { A as h, B as N } from "../../../../chunks/BorderColor.js";
function y(e) {
  const [w, r] = f(!1), o = e.storeFactory, n = e.pageName, d = u(), { data: c } = m({
    storeFactory: o,
    endPoint: e.options.endPoint,
    id: e.id
  }), l = () => d("../" + n + "/edit/" + e.id);
  return /* @__PURE__ */ a("div", { className: "drawer-form-container", children: [
    /* @__PURE__ */ i("div", { className: "drawer-form-header-container", children: /* @__PURE__ */ i("div", { children: e.title }) }),
    /* @__PURE__ */ i(
      s,
      {
        formData: c,
        mode: "view",
        onValidChange: r,
        storeFactory: o,
        children: e.children
      }
    ),
    /* @__PURE__ */ a("div", { className: "drawer-form-btn-container", children: [
      /* @__PURE__ */ a(
        t,
        {
          onClick: () => window.history.back(),
          className: "filled-button",
          disableRipple: !0,
          children: [
            /* @__PURE__ */ i(h, { className: "button-icon" }),
            "Back"
          ]
        }
      ),
      /* @__PURE__ */ a(
        t,
        {
          className: "filled-button",
          disableRipple: !0,
          onClick: l,
          children: [
            /* @__PURE__ */ i(N, { className: "outlined-button-icon" }),
            "Edit"
          ]
        }
      )
    ] })
  ] });
}
export {
  y as ViewForm
};
