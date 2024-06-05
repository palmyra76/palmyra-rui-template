import { jsxs as E, jsx as c } from "react/jsx-runtime";
import { topic as r, StringFormat as P, PalmyraGrid as W } from "palmyra-rui";
import { useState as l, useRef as b, useEffect as j } from "react";
import { useNavigate as G } from "react-router-dom";
import { NewForm as H } from "../dialog/NewForm.js";
import { D as L } from "../../../../chunks/Dialog.js";
function B(e) {
  const [U, F] = l({}), [s, d] = l(!1), [_, C] = l(!1), m = e.gridRef || b(null), u = b(0), a = e.title, O = a === a.toUpperCase() ? x(a.toLowerCase()) : a;
  function x(t) {
    return t.replace(/\b\w/g, (i) => i.toUpperCase());
  }
  const g = G(), D = e.NewFormlet, f = e.fields, v = e.storeFactory, R = e.height || "auto", S = e.width || "auto", p = e.minWidth || "600px", w = e.pageName + "/editPage", N = e.pageName + "/newPage", h = e.options.idProperty || "id", T = {
    onClick: {
      topic: w
    },
    newRecord: {
      topic: N
    }
  };
  j(() => {
    var t = r.subscribe(w, (o, n) => {
      n.id = n[h], g(P("edit/{id}", n));
    }), i = r.subscribe(N, (o, n) => {
      e.dialog ? d(!0) : g(P("new", n));
    });
    return () => {
      r.unsubscribe(t), r.unsubscribe(i);
    };
  }, [h, f]);
  const z = (t, i = !1, o) => {
    C(i), u.current += 1, F(o), t && m.current.refresh();
  }, y = () => {
    d(!s);
  };
  return /* @__PURE__ */ E("div", { className: "grid-renderer-container", children: [
    /* @__PURE__ */ c(
      W,
      {
        columns: f,
        actions: T,
        ref: m,
        endPoint: e.options.endPoint,
        customizer: e.customizer,
        pagination: e.pagination,
        title: e.title,
        layoutParams: {},
        storeFactory: v,
        densityOption: e.densityOptions
      }
    ),
    s && /* @__PURE__ */ c(
      L,
      {
        className: "grid-dialog",
        fullScreen: e.fullScreen,
        open: s,
        onClose: y,
        PaperProps: {
          sx: {
            width: S,
            minWidth: p,
            height: R,
            borderRadius: "15px",
            padding: "10px"
          }
        },
        children: /* @__PURE__ */ c(
          H,
          {
            onSave: (t = !0, i = !1, o) => z(t, i, o),
            onClose: y,
            options: e.options,
            pageName: e.pageName,
            FORMLET: D,
            storeFactory: e.storeFactory,
            title: "New " + O
          },
          u.current + 2 + ""
        )
      }
    )
  ] });
}
export {
  B as SummaryEditGrid
};
