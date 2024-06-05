import { jsxs as G, Fragment as L, jsx as r } from "react/jsx-runtime";
import { topic as a, PalmyraGrid as _ } from "palmyra-rui";
import { useState as T, useRef as O, useEffect as j } from "react";
import { NewForm as B } from "../drawer/NewForm.js";
import { EditForm as M } from "../drawer/EditForm.js";
import { GridDialog as U } from "../dialog/GridDialog.js";
import { D as k } from "../../../../chunks/Dialog.js";
function V(e) {
  const v = e.height || "auto", h = e.width || "auto", D = e.minWidth || "600px", E = e.storeFactory, N = e.pageName + "/viewPage", w = e.pageName + "/newPage", R = e.pageName + "/refresh", F = e.title, n = e.dialogeTitle ? e.dialogeTitle : F, b = n === n.toUpperCase() ? S(n.toLowerCase()) : n;
  function S(t) {
    return t.replace(/\b\w/g, (i) => i.toUpperCase());
  }
  const [c, d] = T({}), [y, m] = T(!1), u = O(0), x = e.Child, f = e.EditFormlet, W = e.NewFormlet, s = e.gridRef || O(null), z = {
    onClick: {
      topic: N
    },
    newRecord: {
      topic: w
    }
  };
  j(() => {
    if (f)
      var t = a.subscribe(N, (P, g) => {
        d(g), m(!0);
      });
    var i = a.subscribe(R, (P) => {
      console.log("refresh called", s.current), s.current && s.current.refresh();
    }), o = a.subscribe(w, (P, g) => {
      d(g), m(!0);
    });
    return () => {
      t && a.unsubscribe(t), a.unsubscribe(o), a.unsubscribe(i);
    };
  }, [c]);
  const l = (t, i = !1, o) => {
    m(i), u.current += 1, d(o), t && s.current.refresh();
  }, C = () => {
    l(!1);
  };
  return /* @__PURE__ */ G(L, { children: [
    /* @__PURE__ */ r("div", { className: "grid-renderer-container", children: /* @__PURE__ */ r("div", { className: "palmyra-grid-container summary-drawer-grid", children: /* @__PURE__ */ r(
      _,
      {
        title: F,
        columns: e.fields,
        endPoint: e.options.endPoint,
        pagination: e.pagination,
        actions: z,
        ref: s,
        customizer: e.customizer,
        customButton: e.customButton,
        defaultParams: e.defaultParams,
        layoutParams: {},
        storeFactory: E,
        exportOptions: e.exportOptions,
        densityOption: e.densityOptions
      }
    ) }) }),
    /* @__PURE__ */ r(
      k,
      {
        className: "grid-dialog",
        open: y,
        onClose: () => l(!1),
        PaperProps: {
          sx: {
            width: h,
            minWidth: D,
            height: v,
            borderRadius: "15px",
            padding: "10px",
            maxWidth: h
          }
        },
        children: y && (x ? /* @__PURE__ */ r(
          U,
          {
            onClose: () => l(!1),
            Child: x,
            childProps: e.childProps,
            dialogeTitle: n
          }
        ) : c != null && c.id && f ? /* @__PURE__ */ r(
          M,
          {
            onSave: (t = !0, i = !1, o) => l(t, i, o),
            id: c.id,
            onClose: C,
            options: e.options,
            pageName: e.pageName,
            FORMLET: f,
            storeFactory: e.storeFactory,
            title: "Edit " + b
          },
          u.current + 5 + ""
        ) : /* @__PURE__ */ r(
          B,
          {
            onSave: (t = !0, i = !1, o) => l(t, i, o),
            onClose: C,
            options: e.options,
            pageName: e.pageName,
            FORMLET: W,
            storeFactory: e.storeFactory,
            title: "New " + b,
            errorText: e.errorText
          },
          u.current + 2 + ""
        ))
      }
    )
  ] });
}
export {
  V as SummaryDialogGrid
};
