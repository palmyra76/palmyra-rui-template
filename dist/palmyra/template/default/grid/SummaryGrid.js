import { jsx as o } from "react/jsx-runtime";
import { topic as i, StringFormat as l, PalmyraGrid as v } from "palmyra-rui";
import { useRef as N, useEffect as h } from "react";
import { useNavigate as P } from "react-router-dom";
function p(e) {
  const c = e.fields, f = e.storeFactory, a = P(), s = e.pageName + "/viewPage", r = e.pageName + "/newPage", g = e.pageName + "/refresh", m = e.options.idProperty || "id", n = e.gridRef || N(null), b = e.disableViewTopic ? {
    newRecord: {
      topic: r
    }
  } : {
    onClick: {
      topic: s
    },
    newRecord: {
      topic: r
    }
  };
  return h(() => {
    if (!e.disableViewTopic)
      var u = i.subscribe(s, (d, t) => {
        t.id = t[m], a(l("view/{id}", t));
      });
    var y = i.subscribe(r, (d, t) => {
      a(l("new", t));
    }), w = i.subscribe(g, (d) => {
      console.log("refresh called", n.current), n.current && n.current.refresh();
    });
    return () => {
      u && i.unsubscribe(u), i.unsubscribe(y), i.unsubscribe(w);
    };
  }, [m, c]), /* @__PURE__ */ o("div", { className: "grid-renderer-container", children: /* @__PURE__ */ o("div", { className: "palmyra-grid-container summary-grid", children: /* @__PURE__ */ o(
    v,
    {
      columns: c,
      ref: n,
      title: e.title,
      densityOption: e.densityOptions,
      actions: b,
      pagination: e.pagination,
      exportOptions: e.exportOptions,
      endPoint: e.options.endPoint,
      customizer: e.customizer,
      layoutParams: {},
      storeFactory: f,
      customButton: e.customButton
    }
  ) }) });
}
export {
  p as SummaryGrid
};
