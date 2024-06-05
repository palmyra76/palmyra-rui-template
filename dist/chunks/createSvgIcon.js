import * as G from "react";
import { forwardRef as eo, useContext as ro } from "react";
import { jsx as Er, jsxs as to } from "react/jsx-runtime";
const Xe = {
  black: "#000",
  white: "#fff"
}, Me = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Ie = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, De = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, ze = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Fe = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Ge = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, no = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function Je(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
const oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Je
}, Symbol.toStringTag, { value: "Module" })), fn = "$$material";
function B() {
  return B = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, B.apply(null, arguments);
}
function Re(e, r) {
  if (e == null)
    return {};
  var t = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (r.indexOf(n) >= 0)
        continue;
      t[n] = e[n];
    }
  return t;
}
function dn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var io = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, so = /* @__PURE__ */ dn(
  function(e) {
    return io.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function ao(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function co(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var uo = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(co(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var s = ao(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (c) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', c);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), ae = "-ms-", yr = "-moz-", z = "-webkit-", et = "comm", rt = "rule", tt = "decl", lo = "@import", pn = "@keyframes", fo = "@layer", po = Math.abs, _r = String.fromCharCode, mo = Object.assign;
function yo(e, r) {
  return ne(e, 0) ^ 45 ? (((r << 2 ^ ne(e, 0)) << 2 ^ ne(e, 1)) << 2 ^ ne(e, 2)) << 2 ^ ne(e, 3) : 0;
}
function mn(e) {
  return e.trim();
}
function ho(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function F(e, r, t) {
  return e.replace(r, t);
}
function Br(e, r) {
  return e.indexOf(r);
}
function ne(e, r) {
  return e.charCodeAt(r) | 0;
}
function Ze(e, r, t) {
  return e.slice(r, t);
}
function Se(e) {
  return e.length;
}
function nt(e) {
  return e.length;
}
function ar(e, r) {
  return r.push(e), e;
}
function go(e, r) {
  return e.map(r).join("");
}
var Sr = 1, Ye = 1, yn = 0, fe = 0, ee = 0, We = "";
function xr(e, r, t, n, o, i, s) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: Sr, column: Ye, length: s, return: "" };
}
function Ke(e, r) {
  return mo(xr("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function vo() {
  return ee;
}
function bo() {
  return ee = fe > 0 ? ne(We, --fe) : 0, Ye--, ee === 10 && (Ye = 1, Sr--), ee;
}
function me() {
  return ee = fe < yn ? ne(We, fe++) : 0, Ye++, ee === 10 && (Ye = 1, Sr++), ee;
}
function xe() {
  return ne(We, fe);
}
function lr() {
  return fe;
}
function rr(e, r) {
  return Ze(We, e, r);
}
function Qe(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function hn(e) {
  return Sr = Ye = 1, yn = Se(We = e), fe = 0, [];
}
function gn(e) {
  return We = "", e;
}
function fr(e) {
  return mn(rr(fe - 1, Gr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Eo(e) {
  for (; (ee = xe()) && ee < 33; )
    me();
  return Qe(e) > 2 || Qe(ee) > 3 ? "" : " ";
}
function _o(e, r) {
  for (; --r && me() && !(ee < 48 || ee > 102 || ee > 57 && ee < 65 || ee > 70 && ee < 97); )
    ;
  return rr(e, lr() + (r < 6 && xe() == 32 && me() == 32));
}
function Gr(e) {
  for (; me(); )
    switch (ee) {
      case e:
        return fe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Gr(ee);
        break;
      case 40:
        e === 41 && Gr(e);
        break;
      case 92:
        me();
        break;
    }
  return fe;
}
function So(e, r) {
  for (; me() && e + ee !== 57; )
    if (e + ee === 84 && xe() === 47)
      break;
  return "/*" + rr(r, fe - 1) + "*" + _r(e === 47 ? e : me());
}
function xo(e) {
  for (; !Qe(xe()); )
    me();
  return rr(e, fe);
}
function Oo(e) {
  return gn(dr("", null, null, null, [""], e = hn(e), 0, [0], e));
}
function dr(e, r, t, n, o, i, s, c, u) {
  for (var l = 0, f = 0, p = s, y = 0, b = 0, g = 0, d = 1, m = 1, E = 1, w = 0, S = "", O = o, a = i, A = n, $ = S; m; )
    switch (g = w, w = me()) {
      case 40:
        if (g != 108 && ne($, p - 1) == 58) {
          Br($ += F(fr(w), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += fr(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += Eo(g);
        break;
      case 92:
        $ += _o(lr() - 1, 7);
        continue;
      case 47:
        switch (xe()) {
          case 42:
          case 47:
            ar(To(So(me(), lr()), r, t), u);
            break;
          default:
            $ += "/";
        }
        break;
      case 123 * d:
        c[l++] = Se($) * E;
      case 125 * d:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            m = 0;
          case 59 + f:
            E == -1 && ($ = F($, /\f/g, "")), b > 0 && Se($) - p && ar(b > 32 ? vt($ + ";", n, t, p - 1) : vt(F($, " ", "") + ";", n, t, p - 2), u);
            break;
          case 59:
            $ += ";";
          default:
            if (ar(A = gt($, r, t, l, f, o, c, S, O = [], a = [], p), i), w === 123)
              if (f === 0)
                dr($, r, A, A, O, i, p, c, a);
              else
                switch (y === 99 && ne($, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    dr(e, A, A, n && ar(gt(e, A, A, 0, 0, o, c, S, o, O = [], p), a), o, a, p, c, n ? O : a);
                    break;
                  default:
                    dr($, A, A, A, [""], a, 0, c, a);
                }
        }
        l = f = b = 0, d = E = 1, S = $ = "", p = s;
        break;
      case 58:
        p = 1 + Se($), b = g;
      default:
        if (d < 1) {
          if (w == 123)
            --d;
          else if (w == 125 && d++ == 0 && bo() == 125)
            continue;
        }
        switch ($ += _r(w), w * d) {
          case 38:
            E = f > 0 ? 1 : ($ += "\f", -1);
            break;
          case 44:
            c[l++] = (Se($) - 1) * E, E = 1;
            break;
          case 64:
            xe() === 45 && ($ += fr(me())), y = xe(), f = p = Se(S = $ += xo(lr())), w++;
            break;
          case 45:
            g === 45 && Se($) == 2 && (d = 0);
        }
    }
  return i;
}
function gt(e, r, t, n, o, i, s, c, u, l, f) {
  for (var p = o - 1, y = o === 0 ? i : [""], b = nt(y), g = 0, d = 0, m = 0; g < n; ++g)
    for (var E = 0, w = Ze(e, p + 1, p = po(d = s[g])), S = e; E < b; ++E)
      (S = mn(d > 0 ? y[E] + " " + w : F(w, /&\f/g, y[E]))) && (u[m++] = S);
  return xr(e, r, t, o === 0 ? rt : c, u, l, f);
}
function To(e, r, t) {
  return xr(e, r, t, et, _r(vo()), Ze(e, 2, -2), 0);
}
function vt(e, r, t, n) {
  return xr(e, r, t, tt, Ze(e, 0, n), Ze(e, n + 1, -1), n);
}
function Le(e, r) {
  for (var t = "", n = nt(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function wo(e, r, t, n) {
  switch (e.type) {
    case fo:
      if (e.children.length)
        break;
    case lo:
    case tt:
      return e.return = e.return || e.value;
    case et:
      return "";
    case pn:
      return e.return = e.value + "{" + Le(e.children, n) + "}";
    case rt:
      e.value = e.props.join(",");
  }
  return Se(t = Le(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Co(e) {
  var r = nt(e);
  return function(t, n, o, i) {
    for (var s = "", c = 0; c < r; c++)
      s += e[c](t, n, o, i) || "";
    return s;
  };
}
function $o(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var Po = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = xe(), o === 38 && i === 12 && (t[n] = 1), !Qe(i); )
    me();
  return rr(r, fe);
}, Ro = function(r, t) {
  var n = -1, o = 44;
  do
    switch (Qe(o)) {
      case 0:
        o === 38 && xe() === 12 && (t[n] = 1), r[n] += Po(fe - 1, t, n);
        break;
      case 2:
        r[n] += fr(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = xe() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += _r(o);
    }
  while (o = me());
  return r;
}, Ao = function(r, t) {
  return gn(Ro(hn(r), t));
}, bt = /* @__PURE__ */ new WeakMap(), No = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !bt.get(n)) && !o) {
      bt.set(r, !0);
      for (var i = [], s = Ao(t, i), c = n.props, u = 0, l = 0; u < s.length; u++)
        for (var f = 0; f < c.length; f++, l++)
          r.props[l] = i[u] ? s[u].replace(/&\f/g, c[f]) : c[f] + " " + s[u];
    }
  }
}, ko = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, jo = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Mo = function(r) {
  return r.type === "comm" && r.children.indexOf(jo) > -1;
}, Io = function(r) {
  return function(t, n, o) {
    if (!(t.type !== "rule" || r.compat)) {
      var i = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var s = !!t.parent, c = s ? t.parent.children : (
          // global rule at the root level
          o
        ), u = c.length - 1; u >= 0; u--) {
          var l = c[u];
          if (l.line < t.line)
            break;
          if (l.column < t.column) {
            if (Mo(l))
              return;
            break;
          }
        }
        i.forEach(function(f) {
          console.error('The pseudo class "' + f + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + f.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, vn = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, Do = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!vn(t[n]))
      return !0;
  return !1;
}, Et = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, zo = function(r, t, n) {
  vn(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Et(r)) : Do(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Et(r)));
};
function bn(e, r) {
  switch (yo(e, r)) {
    case 5103:
      return z + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return z + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return z + e + yr + e + ae + e + e;
    case 6828:
    case 4268:
      return z + e + ae + e + e;
    case 6165:
      return z + e + ae + "flex-" + e + e;
    case 5187:
      return z + e + F(e, /(\w+).+(:[^]+)/, z + "box-$1$2" + ae + "flex-$1$2") + e;
    case 5443:
      return z + e + ae + "flex-item-" + F(e, /flex-|-self/, "") + e;
    case 4675:
      return z + e + ae + "flex-line-pack" + F(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return z + e + ae + F(e, "shrink", "negative") + e;
    case 5292:
      return z + e + ae + F(e, "basis", "preferred-size") + e;
    case 6060:
      return z + "box-" + F(e, "-grow", "") + z + e + ae + F(e, "grow", "positive") + e;
    case 4554:
      return z + F(e, /([^-])(transform)/g, "$1" + z + "$2") + e;
    case 6187:
      return F(F(F(e, /(zoom-|grab)/, z + "$1"), /(image-set)/, z + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return F(e, /(image-set\([^]*)/, z + "$1$`$1");
    case 4968:
      return F(F(e, /(.+:)(flex-)?(.*)/, z + "box-pack:$3" + ae + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + z + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return F(e, /(.+)-inline(.+)/, z + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Se(e) - 1 - r > 6)
        switch (ne(e, r + 1)) {
          case 109:
            if (ne(e, r + 4) !== 45)
              break;
          case 102:
            return F(e, /(.+:)(.+)-([^]+)/, "$1" + z + "$2-$3$1" + yr + (ne(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Br(e, "stretch") ? bn(F(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (ne(e, r + 1) !== 115)
        break;
    case 6444:
      switch (ne(e, Se(e) - 3 - (~Br(e, "!important") && 10))) {
        case 107:
          return F(e, ":", ":" + z) + e;
        case 101:
          return F(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + z + (ne(e, 14) === 45 ? "inline-" : "") + "box$3$1" + z + "$2$3$1" + ae + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ne(e, r + 11)) {
        case 114:
          return z + e + ae + F(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return z + e + ae + F(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return z + e + ae + F(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return z + e + ae + e + e;
  }
  return e;
}
var Fo = function(r, t, n, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case tt:
        r.return = bn(r.value, r.length);
        break;
      case pn:
        return Le([Ke(r, {
          value: F(r.value, "@", "@" + z)
        })], o);
      case rt:
        if (r.length)
          return go(r.props, function(i) {
            switch (ho(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Le([Ke(r, {
                  props: [F(i, /:(read-\w+)/, ":" + yr + "$1")]
                })], o);
              case "::placeholder":
                return Le([Ke(r, {
                  props: [F(i, /:(plac\w+)/, ":" + z + "input-$1")]
                }), Ke(r, {
                  props: [F(i, /:(plac\w+)/, ":" + yr + "$1")]
                }), Ke(r, {
                  props: [F(i, /:(plac\w+)/, ae + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Lo = [Fo], En = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(d) {
      var m = d.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(d), d.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || Lo;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var i = {}, s, c = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(d) {
      for (var m = d.getAttribute("data-emotion").split(" "), E = 1; E < m.length; E++)
        i[m[E]] = !0;
      c.push(d);
    }
  );
  var u, l = [No, ko];
  process.env.NODE_ENV !== "production" && l.push(Io({
    get compat() {
      return g.compat;
    }
  }), zo);
  {
    var f, p = [wo, process.env.NODE_ENV !== "production" ? function(d) {
      d.root || (d.return ? f.insert(d.return) : d.value && d.type !== et && f.insert(d.value + "{}"));
    } : $o(function(d) {
      f.insert(d);
    })], y = Co(l.concat(o, p)), b = function(m) {
      return Le(Oo(m), y);
    };
    u = function(m, E, w, S) {
      f = w, process.env.NODE_ENV !== "production" && E.map !== void 0 && (f = {
        insert: function(a) {
          w.insert(a + E.map);
        }
      }), b(m ? m + "{" + E.styles + "}" : E.styles), S && (g.inserted[E.name] = !0);
    };
  }
  var g = {
    key: t,
    sheet: new uo({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return g.sheet.hydrate(c), g;
};
function Vo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ae(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var Kr = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function Yo() {
  if (_t)
    return L;
  _t = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function S(a) {
    if (typeof a == "object" && a !== null) {
      var A = a.$$typeof;
      switch (A) {
        case r:
          switch (a = a.type, a) {
            case u:
            case l:
            case n:
            case i:
            case o:
            case p:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case c:
                case f:
                case g:
                case b:
                case s:
                  return a;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  function O(a) {
    return S(a) === l;
  }
  return L.AsyncMode = u, L.ConcurrentMode = l, L.ContextConsumer = c, L.ContextProvider = s, L.Element = r, L.ForwardRef = f, L.Fragment = n, L.Lazy = g, L.Memo = b, L.Portal = t, L.Profiler = i, L.StrictMode = o, L.Suspense = p, L.isAsyncMode = function(a) {
    return O(a) || S(a) === u;
  }, L.isConcurrentMode = O, L.isContextConsumer = function(a) {
    return S(a) === c;
  }, L.isContextProvider = function(a) {
    return S(a) === s;
  }, L.isElement = function(a) {
    return typeof a == "object" && a !== null && a.$$typeof === r;
  }, L.isForwardRef = function(a) {
    return S(a) === f;
  }, L.isFragment = function(a) {
    return S(a) === n;
  }, L.isLazy = function(a) {
    return S(a) === g;
  }, L.isMemo = function(a) {
    return S(a) === b;
  }, L.isPortal = function(a) {
    return S(a) === t;
  }, L.isProfiler = function(a) {
    return S(a) === i;
  }, L.isStrictMode = function(a) {
    return S(a) === o;
  }, L.isSuspense = function(a) {
    return S(a) === p;
  }, L.isValidElementType = function(a) {
    return typeof a == "string" || typeof a == "function" || a === n || a === l || a === i || a === o || a === p || a === y || typeof a == "object" && a !== null && (a.$$typeof === g || a.$$typeof === b || a.$$typeof === s || a.$$typeof === c || a.$$typeof === f || a.$$typeof === m || a.$$typeof === E || a.$$typeof === w || a.$$typeof === d);
  }, L.typeOf = S, L;
}
var V = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function Uo() {
  return St || (St = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function S(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === n || h === l || h === i || h === o || h === p || h === y || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === b || h.$$typeof === s || h.$$typeof === c || h.$$typeof === f || h.$$typeof === m || h.$$typeof === E || h.$$typeof === w || h.$$typeof === d);
    }
    function O(h) {
      if (typeof h == "object" && h !== null) {
        var se = h.$$typeof;
        switch (se) {
          case r:
            var x = h.type;
            switch (x) {
              case u:
              case l:
              case n:
              case i:
              case o:
              case p:
                return x;
              default:
                var we = x && x.$$typeof;
                switch (we) {
                  case c:
                  case f:
                  case g:
                  case b:
                  case s:
                    return we;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var a = u, A = l, $ = c, ce = s, ue = r, oe = f, H = n, re = g, de = b, le = t, Te = i, ie = o, be = p, _e = !1;
    function $e(h) {
      return _e || (_e = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(h) || O(h) === u;
    }
    function v(h) {
      return O(h) === l;
    }
    function _(h) {
      return O(h) === c;
    }
    function N(h) {
      return O(h) === s;
    }
    function P(h) {
      return typeof h == "object" && h !== null && h.$$typeof === r;
    }
    function T(h) {
      return O(h) === f;
    }
    function k(h) {
      return O(h) === n;
    }
    function C(h) {
      return O(h) === g;
    }
    function R(h) {
      return O(h) === b;
    }
    function j(h) {
      return O(h) === t;
    }
    function D(h) {
      return O(h) === i;
    }
    function M(h) {
      return O(h) === o;
    }
    function te(h) {
      return O(h) === p;
    }
    V.AsyncMode = a, V.ConcurrentMode = A, V.ContextConsumer = $, V.ContextProvider = ce, V.Element = ue, V.ForwardRef = oe, V.Fragment = H, V.Lazy = re, V.Memo = de, V.Portal = le, V.Profiler = Te, V.StrictMode = ie, V.Suspense = be, V.isAsyncMode = $e, V.isConcurrentMode = v, V.isContextConsumer = _, V.isContextProvider = N, V.isElement = P, V.isForwardRef = T, V.isFragment = k, V.isLazy = C, V.isMemo = R, V.isPortal = j, V.isProfiler = D, V.isStrictMode = M, V.isSuspense = te, V.isValidElementType = S, V.typeOf = O;
  }()), V;
}
process.env.NODE_ENV === "production" ? Kr.exports = Yo() : Kr.exports = Uo();
var Wo = Kr.exports, _n = Wo, qo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Bo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Sn = {};
Sn[_n.ForwardRef] = qo;
Sn[_n.Memo] = Bo;
var Go = !0;
function ot(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Or = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Go === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, Tr = function(r, t, n) {
  Or(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Ko(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var Ho = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, xt = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Xo = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Jo = /[A-Z]|^ms/g, xn = /_EMO_([^_]+?)_([^]*?)_EMO_/g, it = function(r) {
  return r.charCodeAt(1) === 45;
}, Ot = function(r) {
  return r != null && typeof r != "boolean";
}, Ir = /* @__PURE__ */ dn(function(e) {
  return it(e) ? e : e.replace(Jo, "-$&").toLowerCase();
}), hr = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(xn, function(n, o, i) {
          return Ee = {
            name: o,
            styles: i,
            next: Ee
          }, o;
        });
  }
  return Ho[r] !== 1 && !it(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var Zo = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Qo = ["normal", "none", "initial", "inherit", "unset"], ei = hr, ri = /^-ms-/, ti = /-(.)/g, Tt = {};
  hr = function(r, t) {
    if (r === "content" && (typeof t != "string" || Qo.indexOf(t) === -1 && !Zo.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = ei(r, t);
    return n !== "" && !it(r) && r.indexOf("-") !== -1 && Tt[r] === void 0 && (Tt[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(ri, "ms-").replace(ti, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var On = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function er(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(On);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return Ee = {
          name: t.name,
          styles: t.styles,
          next: Ee
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Ee = {
              name: n.name,
              styles: n.styles,
              next: Ee
            }, n = n.next;
        var o = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (o += t.map), o;
      }
      return ni(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ee, s = t(e);
        return Ee = i, er(e, r, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], u = t.replace(xn, function(f, p, y) {
          var b = "animation" + c.length;
          return c.push("const " + b + " = keyframes`" + y.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + b + "}";
        });
        c.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(c, ["`" + u + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + u + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var l = r[t];
  return l !== void 0 ? l : t;
}
function ni(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += er(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var s = t[i];
      if (typeof s != "object")
        r != null && r[s] !== void 0 ? n += i + "{" + r[s] + "}" : Ot(s) && (n += Ir(i) + ":" + hr(i, s) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(On);
        if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
          for (var c = 0; c < s.length; c++)
            Ot(s[c]) && (n += Ir(i) + ":" + hr(i, s[c]) + ";");
        else {
          var u = er(e, r, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Ir(i) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Xo), n += i + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var wt = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Tn;
process.env.NODE_ENV !== "production" && (Tn = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Ee, Ue = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = !0, i = "";
  Ee = void 0;
  var s = r[0];
  s == null || s.raw === void 0 ? (o = !1, i += er(n, t, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(xt), i += s[0]);
  for (var c = 1; c < r.length; c++)
    i += er(n, t, r[c]), o && (process.env.NODE_ENV !== "production" && s[c] === void 0 && console.error(xt), i += s[c]);
  var u;
  process.env.NODE_ENV !== "production" && (i = i.replace(Tn, function(y) {
    return u = y, "";
  })), wt.lastIndex = 0;
  for (var l = "", f; (f = wt.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    f[1];
  var p = Ko(i) + l;
  return process.env.NODE_ENV !== "production" ? {
    name: p,
    styles: i,
    map: u,
    next: Ee,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: p,
    styles: i,
    next: Ee
  };
}, oi = function(r) {
  return r();
}, wn = G.useInsertionEffect ? G.useInsertionEffect : !1, st = wn || oi, Ct = wn || G.useLayoutEffect, ii = {}.hasOwnProperty, at = /* @__PURE__ */ G.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ En({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (at.displayName = "EmotionCacheContext");
var si = at.Provider, wr = function(r) {
  return /* @__PURE__ */ eo(function(t, n) {
    var o = ro(at);
    return r(t, o, n);
  });
}, je = /* @__PURE__ */ G.createContext({});
process.env.NODE_ENV !== "production" && (je.displayName = "EmotionThemeContext");
var $t = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Pt = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", ai = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Or(t, n, o), st(function() {
    return Tr(t, n, o);
  }), null;
}, ci = /* @__PURE__ */ wr(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e[$t], i = [n], s = "";
  typeof e.className == "string" ? s = ot(r.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var c = Ue(i, void 0, G.useContext(je));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var u = e[Pt];
    u && (c = Ue([c, "label:" + u + ";"]));
  }
  s += r.key + "-" + c.name;
  var l = {};
  for (var f in e)
    ii.call(e, f) && f !== "css" && f !== $t && (process.env.NODE_ENV === "production" || f !== Pt) && (l[f] = e[f]);
  return l.ref = t, l.className = s, /* @__PURE__ */ G.createElement(G.Fragment, null, /* @__PURE__ */ G.createElement(ai, {
    cache: r,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ G.createElement(o, l));
});
process.env.NODE_ENV !== "production" && (ci.displayName = "EmotionCssPropInternal");
var Dr = { exports: {} }, Rt;
function Cn() {
  return Rt || (Rt = 1, function(e) {
    function r() {
      return e.exports = r = Object.assign ? Object.assign.bind() : function(t) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var i in o)
            ({}).hasOwnProperty.call(o, i) && (t[i] = o[i]);
        }
        return t;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, r.apply(null, arguments);
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Dr)), Dr.exports;
}
Cn();
var ui = {
  name: "@emotion/react",
  version: "11.11.4",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, At = !1, $n = /* @__PURE__ */ wr(function(e, r) {
  process.env.NODE_ENV !== "production" && !At && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), At = !0);
  var t = e.styles, n = Ue([t], void 0, G.useContext(je)), o = G.useRef();
  return Ct(function() {
    var i = r.key + "-global", s = new r.sheet.constructor({
      key: i,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), c = !1, u = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return r.sheet.tags.length && (s.before = r.sheet.tags[0]), u !== null && (c = !0, u.setAttribute("data-emotion", i), s.hydrate([u])), o.current = [s, c], function() {
      s.flush();
    };
  }, [r]), Ct(function() {
    var i = o.current, s = i[0], c = i[1];
    if (c) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && Tr(r, n.next, !0), s.tags.length) {
      var u = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = u, s.flush();
    }
    r.insert("", n, s, !1);
  }, [r, n.name]), null;
});
process.env.NODE_ENV !== "production" && ($n.displayName = "EmotionGlobal");
function Pn() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return Ue(r);
}
var li = function() {
  var r = Pn.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, fi = function e(r) {
  for (var t = r.length, n = 0, o = ""; n < t; n++) {
    var i = r[n];
    if (i != null) {
      var s = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            s = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), s = "";
            for (var c in i)
              i[c] && c && (s && (s += " "), s += c);
          }
          break;
        }
        default:
          s = i;
      }
      s && (o && (o += " "), o += s);
    }
  }
  return o;
};
function di(e, r, t) {
  var n = [], o = ot(e, n, t);
  return n.length < 2 ? t : o + r(n);
}
var pi = function(r) {
  var t = r.cache, n = r.serializedArr;
  return st(function() {
    for (var o = 0; o < n.length; o++)
      Tr(t, n[o], !1);
  }), null;
}, mi = /* @__PURE__ */ wr(function(e, r) {
  var t = !1, n = [], o = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var l = arguments.length, f = new Array(l), p = 0; p < l; p++)
      f[p] = arguments[p];
    var y = Ue(f, r.registered);
    return n.push(y), Or(r, y, !1), r.key + "-" + y.name;
  }, i = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var l = arguments.length, f = new Array(l), p = 0; p < l; p++)
      f[p] = arguments[p];
    return di(r.registered, o, fi(f));
  }, s = {
    css: o,
    cx: i,
    theme: G.useContext(je)
  }, c = e.children(s);
  return t = !0, /* @__PURE__ */ G.createElement(G.Fragment, null, /* @__PURE__ */ G.createElement(pi, {
    cache: r,
    serializedArr: n
  }), c);
});
process.env.NODE_ENV !== "production" && (mi.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Nt = !0, yi = typeof jest < "u" || typeof vi < "u";
  if (Nt && !yi) {
    var kt = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Nt ? window : global
    ), jt = "__EMOTION_REACT_" + ui.version.split(".")[0] + "__";
    kt[jt] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), kt[jt] = !0;
  }
}
var hi = so, gi = function(r) {
  return r !== "theme";
}, Mt = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? hi : gi;
}, It = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(s) {
      return r.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, Dt = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, bi = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Or(t, n, o), st(function() {
    return Tr(t, n, o);
  }), null;
}, Ei = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, s;
  t !== void 0 && (i = t.label, s = t.target);
  var c = It(r, t, n), u = c || Mt(o), l = !u("as");
  return function() {
    var f = arguments, p = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      p.push.apply(p, f);
    else {
      process.env.NODE_ENV !== "production" && f[0][0] === void 0 && console.error(Dt), p.push(f[0][0]);
      for (var y = f.length, b = 1; b < y; b++)
        process.env.NODE_ENV !== "production" && f[0][b] === void 0 && console.error(Dt), p.push(f[b], f[0][b]);
    }
    var g = wr(function(d, m, E) {
      var w = l && d.as || o, S = "", O = [], a = d;
      if (d.theme == null) {
        a = {};
        for (var A in d)
          a[A] = d[A];
        a.theme = G.useContext(je);
      }
      typeof d.className == "string" ? S = ot(m.registered, O, d.className) : d.className != null && (S = d.className + " ");
      var $ = Ue(p.concat(O), m.registered, a);
      S += m.key + "-" + $.name, s !== void 0 && (S += " " + s);
      var ce = l && c === void 0 ? Mt(w) : u, ue = {};
      for (var oe in d)
        l && oe === "as" || // $FlowFixMe
        ce(oe) && (ue[oe] = d[oe]);
      return ue.className = S, ue.ref = E, /* @__PURE__ */ G.createElement(G.Fragment, null, /* @__PURE__ */ G.createElement(bi, {
        cache: m,
        serialized: $,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ G.createElement(w, ue));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = r.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = p, g.__emotion_forwardProp = c, Object.defineProperty(g, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), g.withComponent = function(d, m) {
      return e(d, B({}, t, m, {
        shouldForwardProp: It(g, m, !0)
      })).apply(void 0, p);
    }, g;
  };
}, _i = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Hr = Ei.bind();
_i.forEach(function(e) {
  Hr[e] = Hr(e);
});
var Xr = { exports: {} }, cr = { exports: {} }, Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zt;
function Si() {
  if (zt)
    return Y;
  zt = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function S(a) {
    if (typeof a == "object" && a !== null) {
      var A = a.$$typeof;
      switch (A) {
        case r:
          switch (a = a.type, a) {
            case u:
            case l:
            case n:
            case i:
            case o:
            case p:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case c:
                case f:
                case g:
                case b:
                case s:
                  return a;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  function O(a) {
    return S(a) === l;
  }
  return Y.AsyncMode = u, Y.ConcurrentMode = l, Y.ContextConsumer = c, Y.ContextProvider = s, Y.Element = r, Y.ForwardRef = f, Y.Fragment = n, Y.Lazy = g, Y.Memo = b, Y.Portal = t, Y.Profiler = i, Y.StrictMode = o, Y.Suspense = p, Y.isAsyncMode = function(a) {
    return O(a) || S(a) === u;
  }, Y.isConcurrentMode = O, Y.isContextConsumer = function(a) {
    return S(a) === c;
  }, Y.isContextProvider = function(a) {
    return S(a) === s;
  }, Y.isElement = function(a) {
    return typeof a == "object" && a !== null && a.$$typeof === r;
  }, Y.isForwardRef = function(a) {
    return S(a) === f;
  }, Y.isFragment = function(a) {
    return S(a) === n;
  }, Y.isLazy = function(a) {
    return S(a) === g;
  }, Y.isMemo = function(a) {
    return S(a) === b;
  }, Y.isPortal = function(a) {
    return S(a) === t;
  }, Y.isProfiler = function(a) {
    return S(a) === i;
  }, Y.isStrictMode = function(a) {
    return S(a) === o;
  }, Y.isSuspense = function(a) {
    return S(a) === p;
  }, Y.isValidElementType = function(a) {
    return typeof a == "string" || typeof a == "function" || a === n || a === l || a === i || a === o || a === p || a === y || typeof a == "object" && a !== null && (a.$$typeof === g || a.$$typeof === b || a.$$typeof === s || a.$$typeof === c || a.$$typeof === f || a.$$typeof === m || a.$$typeof === E || a.$$typeof === w || a.$$typeof === d);
  }, Y.typeOf = S, Y;
}
var U = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft;
function xi() {
  return Ft || (Ft = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function S(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === n || h === l || h === i || h === o || h === p || h === y || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === b || h.$$typeof === s || h.$$typeof === c || h.$$typeof === f || h.$$typeof === m || h.$$typeof === E || h.$$typeof === w || h.$$typeof === d);
    }
    function O(h) {
      if (typeof h == "object" && h !== null) {
        var se = h.$$typeof;
        switch (se) {
          case r:
            var x = h.type;
            switch (x) {
              case u:
              case l:
              case n:
              case i:
              case o:
              case p:
                return x;
              default:
                var we = x && x.$$typeof;
                switch (we) {
                  case c:
                  case f:
                  case g:
                  case b:
                  case s:
                    return we;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var a = u, A = l, $ = c, ce = s, ue = r, oe = f, H = n, re = g, de = b, le = t, Te = i, ie = o, be = p, _e = !1;
    function $e(h) {
      return _e || (_e = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(h) || O(h) === u;
    }
    function v(h) {
      return O(h) === l;
    }
    function _(h) {
      return O(h) === c;
    }
    function N(h) {
      return O(h) === s;
    }
    function P(h) {
      return typeof h == "object" && h !== null && h.$$typeof === r;
    }
    function T(h) {
      return O(h) === f;
    }
    function k(h) {
      return O(h) === n;
    }
    function C(h) {
      return O(h) === g;
    }
    function R(h) {
      return O(h) === b;
    }
    function j(h) {
      return O(h) === t;
    }
    function D(h) {
      return O(h) === i;
    }
    function M(h) {
      return O(h) === o;
    }
    function te(h) {
      return O(h) === p;
    }
    U.AsyncMode = a, U.ConcurrentMode = A, U.ContextConsumer = $, U.ContextProvider = ce, U.Element = ue, U.ForwardRef = oe, U.Fragment = H, U.Lazy = re, U.Memo = de, U.Portal = le, U.Profiler = Te, U.StrictMode = ie, U.Suspense = be, U.isAsyncMode = $e, U.isConcurrentMode = v, U.isContextConsumer = _, U.isContextProvider = N, U.isElement = P, U.isForwardRef = T, U.isFragment = k, U.isLazy = C, U.isMemo = R, U.isPortal = j, U.isProfiler = D, U.isStrictMode = M, U.isSuspense = te, U.isValidElementType = S, U.typeOf = O;
  }()), U;
}
var Lt;
function Rn() {
  return Lt || (Lt = 1, process.env.NODE_ENV === "production" ? cr.exports = Si() : cr.exports = xi()), cr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var zr, Vt;
function Oi() {
  if (Vt)
    return zr;
  Vt = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        l[f] = f;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return zr = o() ? Object.assign : function(i, s) {
    for (var c, u = n(i), l, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var p in c)
        r.call(c, p) && (u[p] = c[p]);
      if (e) {
        l = e(c);
        for (var y = 0; y < l.length; y++)
          t.call(c, l[y]) && (u[l[y]] = c[l[y]]);
      }
    }
    return u;
  }, zr;
}
var Fr, Yt;
function ct() {
  if (Yt)
    return Fr;
  Yt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Fr = e, Fr;
}
var Lr, Ut;
function An() {
  return Ut || (Ut = 1, Lr = Function.call.bind(Object.prototype.hasOwnProperty)), Lr;
}
var Vr, Wt;
function Ti() {
  if (Wt)
    return Vr;
  Wt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = ct(), t = {}, n = An();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, c, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var p;
          try {
            if (typeof i[f] != "function") {
              var y = Error(
                (u || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            p = i[f](s, f, u, c, null, r);
          } catch (g) {
            p = g;
          }
          if (p && !(p instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in t)) {
            t[p.message] = !0;
            var b = l ? l() : "";
            e(
              "Failed " + c + " type: " + p.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Vr = o, Vr;
}
var Yr, qt;
function wi() {
  if (qt)
    return Yr;
  qt = 1;
  var e = Rn(), r = Oi(), t = ct(), n = An(), o = Ti(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Yr = function(c, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(v) {
      var _ = v && (l && v[l] || v[f]);
      if (typeof _ == "function")
        return _;
    }
    var y = "<<anonymous>>", b = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: w(),
      arrayOf: S,
      element: O(),
      elementType: a(),
      instanceOf: A,
      node: oe(),
      objectOf: ce,
      oneOf: $,
      oneOfType: ue,
      shape: re,
      exact: de
    };
    function g(v, _) {
      return v === _ ? v !== 0 || 1 / v === 1 / _ : v !== v && _ !== _;
    }
    function d(v, _) {
      this.message = v, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    d.prototype = Error.prototype;
    function m(v) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, N = 0;
      function P(k, C, R, j, D, M, te) {
        if (j = j || y, M = M || R, te !== t) {
          if (u) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = j + ":" + R;
            !_[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + M + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[se] = !0, N++);
          }
        }
        return C[R] == null ? k ? C[R] === null ? new d("The " + D + " `" + M + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new d("The " + D + " `" + M + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : v(C, R, j, D, M);
      }
      var T = P.bind(null, !1);
      return T.isRequired = P.bind(null, !0), T;
    }
    function E(v) {
      function _(N, P, T, k, C, R) {
        var j = N[P], D = ie(j);
        if (D !== v) {
          var M = be(j);
          return new d(
            "Invalid " + k + " `" + C + "` of type " + ("`" + M + "` supplied to `" + T + "`, expected ") + ("`" + v + "`."),
            { expectedType: v }
          );
        }
        return null;
      }
      return m(_);
    }
    function w() {
      return m(s);
    }
    function S(v) {
      function _(N, P, T, k, C) {
        if (typeof v != "function")
          return new d("Property `" + C + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var R = N[P];
        if (!Array.isArray(R)) {
          var j = ie(R);
          return new d("Invalid " + k + " `" + C + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected an array."));
        }
        for (var D = 0; D < R.length; D++) {
          var M = v(R, D, T, k, C + "[" + D + "]", t);
          if (M instanceof Error)
            return M;
        }
        return null;
      }
      return m(_);
    }
    function O() {
      function v(_, N, P, T, k) {
        var C = _[N];
        if (!c(C)) {
          var R = ie(C);
          return new d("Invalid " + T + " `" + k + "` of type " + ("`" + R + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(v);
    }
    function a() {
      function v(_, N, P, T, k) {
        var C = _[N];
        if (!e.isValidElementType(C)) {
          var R = ie(C);
          return new d("Invalid " + T + " `" + k + "` of type " + ("`" + R + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(v);
    }
    function A(v) {
      function _(N, P, T, k, C) {
        if (!(N[P] instanceof v)) {
          var R = v.name || y, j = $e(N[P]);
          return new d("Invalid " + k + " `" + C + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return m(_);
    }
    function $(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function _(N, P, T, k, C) {
        for (var R = N[P], j = 0; j < v.length; j++)
          if (g(R, v[j]))
            return null;
        var D = JSON.stringify(v, function(te, h) {
          var se = be(h);
          return se === "symbol" ? String(h) : h;
        });
        return new d("Invalid " + k + " `" + C + "` of value `" + String(R) + "` " + ("supplied to `" + T + "`, expected one of " + D + "."));
      }
      return m(_);
    }
    function ce(v) {
      function _(N, P, T, k, C) {
        if (typeof v != "function")
          return new d("Property `" + C + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var R = N[P], j = ie(R);
        if (j !== "object")
          return new d("Invalid " + k + " `" + C + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected an object."));
        for (var D in R)
          if (n(R, D)) {
            var M = v(R, D, T, k, C + "." + D, t);
            if (M instanceof Error)
              return M;
          }
        return null;
      }
      return m(_);
    }
    function ue(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var _ = 0; _ < v.length; _++) {
        var N = v[_];
        if (typeof N != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + _e(N) + " at index " + _ + "."
          ), s;
      }
      function P(T, k, C, R, j) {
        for (var D = [], M = 0; M < v.length; M++) {
          var te = v[M], h = te(T, k, C, R, j, t);
          if (h == null)
            return null;
          h.data && n(h.data, "expectedType") && D.push(h.data.expectedType);
        }
        var se = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new d("Invalid " + R + " `" + j + "` supplied to " + ("`" + C + "`" + se + "."));
      }
      return m(P);
    }
    function oe() {
      function v(_, N, P, T, k) {
        return le(_[N]) ? null : new d("Invalid " + T + " `" + k + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return m(v);
    }
    function H(v, _, N, P, T) {
      return new d(
        (v || "React class") + ": " + _ + " type `" + N + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function re(v) {
      function _(N, P, T, k, C) {
        var R = N[P], j = ie(R);
        if (j !== "object")
          return new d("Invalid " + k + " `" + C + "` of type `" + j + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var D in v) {
          var M = v[D];
          if (typeof M != "function")
            return H(T, k, C, D, be(M));
          var te = M(R, D, T, k, C + "." + D, t);
          if (te)
            return te;
        }
        return null;
      }
      return m(_);
    }
    function de(v) {
      function _(N, P, T, k, C) {
        var R = N[P], j = ie(R);
        if (j !== "object")
          return new d("Invalid " + k + " `" + C + "` of type `" + j + "` " + ("supplied to `" + T + "`, expected `object`."));
        var D = r({}, N[P], v);
        for (var M in D) {
          var te = v[M];
          if (n(v, M) && typeof te != "function")
            return H(T, k, C, M, be(te));
          if (!te)
            return new d(
              "Invalid " + k + " `" + C + "` key `" + M + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(N[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(v), null, "  ")
            );
          var h = te(R, M, T, k, C + "." + M, t);
          if (h)
            return h;
        }
        return null;
      }
      return m(_);
    }
    function le(v) {
      switch (typeof v) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !v;
        case "object":
          if (Array.isArray(v))
            return v.every(le);
          if (v === null || c(v))
            return !0;
          var _ = p(v);
          if (_) {
            var N = _.call(v), P;
            if (_ !== v.entries) {
              for (; !(P = N.next()).done; )
                if (!le(P.value))
                  return !1;
            } else
              for (; !(P = N.next()).done; ) {
                var T = P.value;
                if (T && !le(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Te(v, _) {
      return v === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function ie(v) {
      var _ = typeof v;
      return Array.isArray(v) ? "array" : v instanceof RegExp ? "object" : Te(_, v) ? "symbol" : _;
    }
    function be(v) {
      if (typeof v > "u" || v === null)
        return "" + v;
      var _ = ie(v);
      if (_ === "object") {
        if (v instanceof Date)
          return "date";
        if (v instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function _e(v) {
      var _ = be(v);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function $e(v) {
      return !v.constructor || !v.constructor.name ? y : v.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, Yr;
}
var Ur, Bt;
function Ci() {
  if (Bt)
    return Ur;
  Bt = 1;
  var e = ct();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Ur = function() {
    function n(s, c, u, l, f, p) {
      if (p !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, Ur;
}
if (process.env.NODE_ENV !== "production") {
  var $i = Rn(), Pi = !0;
  Xr.exports = wi()($i.isElement, Pi);
} else
  Xr.exports = Ci()();
var Ri = Xr.exports;
const I = /* @__PURE__ */ Vo(Ri);
let Jr;
typeof document == "object" && (Jr = En({
  key: "css",
  prepend: !0
}));
function Nn(e) {
  const {
    injectFirst: r,
    children: t
  } = e;
  return r && Jr ? /* @__PURE__ */ Er(si, {
    value: Jr,
    children: t
  }) : t;
}
process.env.NODE_ENV !== "production" && (Nn.propTypes = {
  /**
   * Your component tree.
   */
  children: I.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: I.bool
});
function Ai(e) {
  return e == null || Object.keys(e).length === 0;
}
function kn(e) {
  const {
    styles: r,
    defaultTheme: t = {}
  } = e;
  return /* @__PURE__ */ Er($n, {
    styles: typeof r == "function" ? (o) => r(Ai(o) ? t : o) : r
  });
}
process.env.NODE_ENV !== "production" && (kn.propTypes = {
  defaultTheme: I.object,
  styles: I.oneOfType([I.array, I.string, I.object, I.func])
});
/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ni(e, r) {
  const t = Hr(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const ki = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}, ji = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: kn,
  StyledEngineProvider: Nn,
  ThemeContext: je,
  css: Pn,
  default: Ni,
  internal_processStyles: ki,
  keyframes: li
}, Symbol.toStringTag, { value: "Module" }));
function Pe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function jn(e) {
  if (!Pe(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = jn(e[t]);
  }), r;
}
function Oe(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? B({}, e) : e;
  return Pe(e) && Pe(r) && Object.keys(r).forEach((o) => {
    o !== "__proto__" && (Pe(r[o]) && o in e && Pe(e[o]) ? n[o] = Oe(e[o], r[o], t) : t.clone ? n[o] = Pe(r[o]) ? jn(r[o]) : r[o] : n[o] = r[o]);
  }), n;
}
const Mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oe,
  isPlainObject: Pe
}, Symbol.toStringTag, { value: "Module" })), Ii = ["values", "unit", "step"], Di = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => B({}, t, {
    [n.key]: n.val
  }), {});
};
function Mn(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, o = Re(e, Ii), i = Di(r), s = Object.keys(i);
  function c(y) {
    return `@media (min-width:${typeof r[y] == "number" ? r[y] : y}${t})`;
  }
  function u(y) {
    return `@media (max-width:${(typeof r[y] == "number" ? r[y] : y) - n / 100}${t})`;
  }
  function l(y, b) {
    const g = s.indexOf(b);
    return `@media (min-width:${typeof r[y] == "number" ? r[y] : y}${t}) and (max-width:${(g !== -1 && typeof r[s[g]] == "number" ? r[s[g]] : b) - n / 100}${t})`;
  }
  function f(y) {
    return s.indexOf(y) + 1 < s.length ? l(y, s[s.indexOf(y) + 1]) : c(y);
  }
  function p(y) {
    const b = s.indexOf(y);
    return b === 0 ? c(s[1]) : b === s.length - 1 ? u(s[b]) : l(y, s[s.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return B({
    keys: s,
    values: i,
    up: c,
    down: u,
    between: l,
    only: f,
    not: p,
    unit: t
  }, o);
}
const zi = {
  borderRadius: 4
}, Ne = process.env.NODE_ENV !== "production" ? I.oneOfType([I.number, I.string, I.object, I.array]) : {};
function He(e, r) {
  return r ? Oe(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ut = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Gt = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ut[e]}px)`
};
function Ce(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || Gt;
    return r.reduce((s, c, u) => (s[i.up(i.keys[u])] = t(r[u]), s), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || Gt;
    return Object.keys(r).reduce((s, c) => {
      if (Object.keys(i.values || ut).indexOf(c) !== -1) {
        const u = i.up(c);
        s[u] = t(r[c], c);
      } else {
        const u = c;
        s[u] = r[u];
      }
      return s;
    }, {});
  }
  return t(r);
}
function Fi(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Li(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function ke(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Je(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ke
}, Symbol.toStringTag, { value: "Module" }));
function Cr(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function gr(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = Cr(e, t) || n, r && (o = r(o, n, e)), o;
}
function Z(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[r] == null)
      return null;
    const c = s[r], u = s.theme, l = Cr(u, n) || {};
    return Ce(s, c, (p) => {
      let y = gr(l, o, p);
      return p === y && typeof p == "string" && (y = gr(l, o, `${r}${p === "default" ? "" : ke(p)}`, p)), t === !1 ? y : {
        [t]: y
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: Ne
  } : {}, i.filterProps = [r], i;
}
function Yi(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const Ui = {
  m: "margin",
  p: "padding"
}, Wi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Kt = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, qi = Yi((e) => {
  if (e.length > 2)
    if (Kt[e])
      e = Kt[e];
    else
      return [e];
  const [r, t] = e.split(""), n = Ui[r], o = Wi[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), $r = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Pr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Bi = [...$r, ...Pr];
function tr(e, r, t, n) {
  var o;
  const i = (o = Cr(e, r, !1)) != null ? o : t;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function In(e) {
  return tr(e, "spacing", 8, "spacing");
}
function nr(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Gi(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = nr(r, t), n), {});
}
function Ki(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const o = qi(t), i = Gi(o, n), s = e[t];
  return Ce(e, s, i);
}
function Dn(e, r) {
  const t = In(e.theme);
  return Object.keys(e).map((n) => Ki(e, r, n, t)).reduce(He, {});
}
function X(e) {
  return Dn(e, $r);
}
X.propTypes = process.env.NODE_ENV !== "production" ? $r.reduce((e, r) => (e[r] = Ne, e), {}) : {};
X.filterProps = $r;
function J(e) {
  return Dn(e, Pr);
}
J.propTypes = process.env.NODE_ENV !== "production" ? Pr.reduce((e, r) => (e[r] = Ne, e), {}) : {};
J.filterProps = Pr;
process.env.NODE_ENV !== "production" && Bi.reduce((e, r) => (e[r] = Ne, e), {});
function Hi(e = 8) {
  if (e.mui)
    return e;
  const r = In({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = r(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return t.mui = !0, t;
}
function Rr(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? He(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function he(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ve(e, r) {
  return Z({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const Xi = ve("border", he), Ji = ve("borderTop", he), Zi = ve("borderRight", he), Qi = ve("borderBottom", he), es = ve("borderLeft", he), rs = ve("borderColor"), ts = ve("borderTopColor"), ns = ve("borderRightColor"), os = ve("borderBottomColor"), is = ve("borderLeftColor"), ss = ve("outline", he), as = ve("outlineColor"), Ar = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = tr(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: nr(r, n)
    });
    return Ce(e, e.borderRadius, t);
  }
  return null;
};
Ar.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ne
} : {};
Ar.filterProps = ["borderRadius"];
Rr(Xi, Ji, Zi, Qi, es, rs, ts, ns, os, is, Ar, ss, as);
const Nr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = tr(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: nr(r, n)
    });
    return Ce(e, e.gap, t);
  }
  return null;
};
Nr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ne
} : {};
Nr.filterProps = ["gap"];
const kr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = tr(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: nr(r, n)
    });
    return Ce(e, e.columnGap, t);
  }
  return null;
};
kr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ne
} : {};
kr.filterProps = ["columnGap"];
const jr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = tr(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: nr(r, n)
    });
    return Ce(e, e.rowGap, t);
  }
  return null;
};
jr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ne
} : {};
jr.filterProps = ["rowGap"];
const cs = Z({
  prop: "gridColumn"
}), us = Z({
  prop: "gridRow"
}), ls = Z({
  prop: "gridAutoFlow"
}), fs = Z({
  prop: "gridAutoColumns"
}), ds = Z({
  prop: "gridAutoRows"
}), ps = Z({
  prop: "gridTemplateColumns"
}), ms = Z({
  prop: "gridTemplateRows"
}), ys = Z({
  prop: "gridTemplateAreas"
}), hs = Z({
  prop: "gridArea"
});
Rr(Nr, kr, jr, cs, us, ls, fs, ds, ps, ms, ys, hs);
function Ve(e, r) {
  return r === "grey" ? r : e;
}
const gs = Z({
  prop: "color",
  themeKey: "palette",
  transform: Ve
}), vs = Z({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ve
}), bs = Z({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ve
});
Rr(gs, vs, bs);
function pe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Es = Z({
  prop: "width",
  transform: pe
}), lt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || ut[t];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: pe(t)
      };
    };
    return Ce(e, e.maxWidth, r);
  }
  return null;
};
lt.filterProps = ["maxWidth"];
const _s = Z({
  prop: "minWidth",
  transform: pe
}), Ss = Z({
  prop: "height",
  transform: pe
}), xs = Z({
  prop: "maxHeight",
  transform: pe
}), Os = Z({
  prop: "minHeight",
  transform: pe
});
Z({
  prop: "size",
  cssProperty: "width",
  transform: pe
});
Z({
  prop: "size",
  cssProperty: "height",
  transform: pe
});
const Ts = Z({
  prop: "boxSizing"
});
Rr(Es, lt, _s, Ss, xs, Os, Ts);
const or = {
  // borders
  border: {
    themeKey: "borders",
    transform: he
  },
  borderTop: {
    themeKey: "borders",
    transform: he
  },
  borderRight: {
    themeKey: "borders",
    transform: he
  },
  borderBottom: {
    themeKey: "borders",
    transform: he
  },
  borderLeft: {
    themeKey: "borders",
    transform: he
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: he
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ar
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ve
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ve
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ve
  },
  // spacing
  p: {
    style: J
  },
  pt: {
    style: J
  },
  pr: {
    style: J
  },
  pb: {
    style: J
  },
  pl: {
    style: J
  },
  px: {
    style: J
  },
  py: {
    style: J
  },
  padding: {
    style: J
  },
  paddingTop: {
    style: J
  },
  paddingRight: {
    style: J
  },
  paddingBottom: {
    style: J
  },
  paddingLeft: {
    style: J
  },
  paddingX: {
    style: J
  },
  paddingY: {
    style: J
  },
  paddingInline: {
    style: J
  },
  paddingInlineStart: {
    style: J
  },
  paddingInlineEnd: {
    style: J
  },
  paddingBlock: {
    style: J
  },
  paddingBlockStart: {
    style: J
  },
  paddingBlockEnd: {
    style: J
  },
  m: {
    style: X
  },
  mt: {
    style: X
  },
  mr: {
    style: X
  },
  mb: {
    style: X
  },
  ml: {
    style: X
  },
  mx: {
    style: X
  },
  my: {
    style: X
  },
  margin: {
    style: X
  },
  marginTop: {
    style: X
  },
  marginRight: {
    style: X
  },
  marginBottom: {
    style: X
  },
  marginLeft: {
    style: X
  },
  marginX: {
    style: X
  },
  marginY: {
    style: X
  },
  marginInline: {
    style: X
  },
  marginInlineStart: {
    style: X
  },
  marginInlineEnd: {
    style: X
  },
  marginBlock: {
    style: X
  },
  marginBlockStart: {
    style: X
  },
  marginBlockEnd: {
    style: X
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Nr
  },
  rowGap: {
    style: jr
  },
  columnGap: {
    style: kr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: pe
  },
  maxWidth: {
    style: lt
  },
  minWidth: {
    transform: pe
  },
  height: {
    transform: pe
  },
  maxHeight: {
    transform: pe
  },
  minHeight: {
    transform: pe
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function ws(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function Cs(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function zn() {
  function e(t, n, o, i) {
    const s = {
      [t]: n,
      theme: o
    }, c = i[t];
    if (!c)
      return {
        [t]: n
      };
    const {
      cssProperty: u = t,
      themeKey: l,
      transform: f,
      style: p
    } = c;
    if (n == null)
      return null;
    if (l === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const y = Cr(o, l) || {};
    return p ? p(s) : Ce(s, n, (g) => {
      let d = gr(y, f, g);
      return g === d && typeof g == "string" && (d = gr(y, f, `${t}${g === "default" ? "" : ke(g)}`, g)), u === !1 ? d : {
        [u]: d
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = t || {};
    if (!o)
      return null;
    const s = (n = i.unstable_sxConfig) != null ? n : or;
    function c(u) {
      let l = u;
      if (typeof u == "function")
        l = u(i);
      else if (typeof u != "object")
        return u;
      if (!l)
        return null;
      const f = Fi(i.breakpoints), p = Object.keys(f);
      let y = f;
      return Object.keys(l).forEach((b) => {
        const g = Cs(l[b], i);
        if (g != null)
          if (typeof g == "object")
            if (s[b])
              y = He(y, e(b, g, i, s));
            else {
              const d = Ce({
                theme: i
              }, g, (m) => ({
                [b]: m
              }));
              ws(d, g) ? y[b] = r({
                sx: g,
                theme: i
              }) : y = He(y, d);
            }
          else
            y = He(y, e(b, g, i, s));
      }), Li(p, y);
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return r;
}
const Mr = zn();
Mr.filterProps = ["sx"];
function Fn(e, r) {
  const t = this;
  return t.vars && typeof t.getColorSchemeSelector == "function" ? {
    [t.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: r
  } : t.palette.mode === e ? r : {};
}
const $s = ["breakpoints", "palette", "spacing", "shape"];
function ft(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, s = Re(e, $s), c = Mn(t), u = Hi(o);
  let l = Oe({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: B({
      mode: "light"
    }, n),
    spacing: u,
    shape: B({}, zi, i)
  }, s);
  return l.applyStyles = Fn, l = r.reduce((f, p) => Oe(f, p), l), l.unstable_sxConfig = B({}, or, s == null ? void 0 : s.unstable_sxConfig), l.unstable_sx = function(p) {
    return Mr({
      sx: p,
      theme: this
    });
  }, l;
}
const Ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ft,
  private_createBreakpoints: Mn,
  unstable_applyStyles: Fn
}, Symbol.toStringTag, { value: "Module" }));
function Rs(e) {
  return Object.keys(e).length === 0;
}
function As(e = null) {
  const r = G.useContext(je);
  return !r || Rs(r) ? e : r;
}
const Ns = ft();
function ks(e = Ns) {
  return As(e);
}
const js = ["sx"], Ms = (e) => {
  var r, t;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (r = e == null || (t = e.theme) == null ? void 0 : t.unstable_sxConfig) != null ? r : or;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function Is(e) {
  const {
    sx: r
  } = e, t = Re(e, js), {
    systemProps: n,
    otherProps: o
  } = Ms(t);
  let i;
  return Array.isArray(r) ? i = [n, ...r] : typeof r == "function" ? i = (...s) => {
    const c = r(...s);
    return Pe(c) ? B({}, n, c) : n;
  } : i = B({}, n, r), B({}, o, {
    sx: i
  });
}
const Ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mr,
  extendSxProp: Is,
  unstable_createStyleFunctionSx: zn,
  unstable_defaultSxConfig: or
}, Symbol.toStringTag, { value: "Module" })), Ht = (e) => e, zs = () => {
  let e = Ht;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = Ht;
    }
  };
}, Fs = zs();
function Ln(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (r = 0; r < o; r++)
        e[r] && (t = Ln(e[r])) && (n && (n += " "), n += t);
    } else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Ls() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++)
    (e = arguments[t]) && (r = Ln(e)) && (n && (n += " "), n += r);
  return n;
}
const Vs = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function dt(e, r, t = "Mui") {
  const n = Vs[r];
  return n ? `${t}-${n}` : `${Fs.generate(e)}-${r}`;
}
function Ys(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = dt(e, o, t);
  }), n;
}
var Zr = { exports: {} }, W = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xt;
function Us() {
  if (Xt)
    return W;
  Xt = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function d(m) {
    if (typeof m == "object" && m !== null) {
      var E = m.$$typeof;
      switch (E) {
        case e:
          switch (m = m.type, m) {
            case t:
            case o:
            case n:
            case l:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case s:
                case u:
                case y:
                case p:
                case i:
                  return m;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  return W.ContextConsumer = s, W.ContextProvider = i, W.Element = e, W.ForwardRef = u, W.Fragment = t, W.Lazy = y, W.Memo = p, W.Portal = r, W.Profiler = o, W.StrictMode = n, W.Suspense = l, W.SuspenseList = f, W.isAsyncMode = function() {
    return !1;
  }, W.isConcurrentMode = function() {
    return !1;
  }, W.isContextConsumer = function(m) {
    return d(m) === s;
  }, W.isContextProvider = function(m) {
    return d(m) === i;
  }, W.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, W.isForwardRef = function(m) {
    return d(m) === u;
  }, W.isFragment = function(m) {
    return d(m) === t;
  }, W.isLazy = function(m) {
    return d(m) === y;
  }, W.isMemo = function(m) {
    return d(m) === p;
  }, W.isPortal = function(m) {
    return d(m) === r;
  }, W.isProfiler = function(m) {
    return d(m) === o;
  }, W.isStrictMode = function(m) {
    return d(m) === n;
  }, W.isSuspense = function(m) {
    return d(m) === l;
  }, W.isSuspenseList = function(m) {
    return d(m) === f;
  }, W.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === t || m === o || m === n || m === l || m === f || m === b || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === p || m.$$typeof === i || m.$$typeof === s || m.$$typeof === u || m.$$typeof === g || m.getModuleId !== void 0);
  }, W.typeOf = d, W;
}
var q = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function Ws() {
  return Jt || (Jt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), g = !1, d = !1, m = !1, E = !1, w = !1, S;
    S = Symbol.for("react.module.reference");
    function O(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === t || x === o || w || x === n || x === l || x === f || E || x === b || g || d || m || typeof x == "object" && x !== null && (x.$$typeof === y || x.$$typeof === p || x.$$typeof === i || x.$$typeof === s || x.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === S || x.getModuleId !== void 0));
    }
    function a(x) {
      if (typeof x == "object" && x !== null) {
        var we = x.$$typeof;
        switch (we) {
          case e:
            var sr = x.type;
            switch (sr) {
              case t:
              case o:
              case n:
              case l:
              case f:
                return sr;
              default:
                var ht = sr && sr.$$typeof;
                switch (ht) {
                  case c:
                  case s:
                  case u:
                  case y:
                  case p:
                  case i:
                    return ht;
                  default:
                    return we;
                }
            }
          case r:
            return we;
        }
      }
    }
    var A = s, $ = i, ce = e, ue = u, oe = t, H = y, re = p, de = r, le = o, Te = n, ie = l, be = f, _e = !1, $e = !1;
    function v(x) {
      return _e || (_e = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function _(x) {
      return $e || ($e = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function N(x) {
      return a(x) === s;
    }
    function P(x) {
      return a(x) === i;
    }
    function T(x) {
      return typeof x == "object" && x !== null && x.$$typeof === e;
    }
    function k(x) {
      return a(x) === u;
    }
    function C(x) {
      return a(x) === t;
    }
    function R(x) {
      return a(x) === y;
    }
    function j(x) {
      return a(x) === p;
    }
    function D(x) {
      return a(x) === r;
    }
    function M(x) {
      return a(x) === o;
    }
    function te(x) {
      return a(x) === n;
    }
    function h(x) {
      return a(x) === l;
    }
    function se(x) {
      return a(x) === f;
    }
    q.ContextConsumer = A, q.ContextProvider = $, q.Element = ce, q.ForwardRef = ue, q.Fragment = oe, q.Lazy = H, q.Memo = re, q.Portal = de, q.Profiler = le, q.StrictMode = Te, q.Suspense = ie, q.SuspenseList = be, q.isAsyncMode = v, q.isConcurrentMode = _, q.isContextConsumer = N, q.isContextProvider = P, q.isElement = T, q.isForwardRef = k, q.isFragment = C, q.isLazy = R, q.isMemo = j, q.isPortal = D, q.isProfiler = M, q.isStrictMode = te, q.isSuspense = h, q.isSuspenseList = se, q.isValidElementType = O, q.typeOf = a;
  }()), q;
}
process.env.NODE_ENV === "production" ? Zr.exports = Us() : Zr.exports = Ws();
var Zt = Zr.exports;
const qs = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Vn(e) {
  const r = `${e}`.match(qs);
  return r && r[1] || "";
}
function Yn(e, r = "") {
  return e.displayName || e.name || Vn(e) || r;
}
function Qt(e, r, t) {
  const n = Yn(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function Bs(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Yn(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Zt.ForwardRef:
          return Qt(e, e.render, "ForwardRef");
        case Zt.Memo:
          return Qt(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bs,
  getFunctionName: Vn
}, Symbol.toStringTag, { value: "Module" }));
function Un(e, r) {
  const t = B({}, r);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      t[n] = B({}, e[n], t[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = r[n];
      t[n] = {}, !i || !Object.keys(i) ? t[n] = o : !o || !Object.keys(o) ? t[n] = i : (t[n] = B({}, i), Object.keys(o).forEach((s) => {
        t[n][s] = Un(o[s], i[s]);
      }));
    } else
      t[n] === void 0 && (t[n] = e[n]);
  }), t;
}
function Ks(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  return !r || !r.components || !r.components[t] || !r.components[t].defaultProps ? n : Un(r.components[t].defaultProps, n);
}
function Hs({
  props: e,
  name: r,
  defaultTheme: t,
  themeId: n
}) {
  let o = ks(t);
  return n && (o = o[n] || o), Ks({
    theme: o,
    name: r,
    props: e
  });
}
function Xs(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
const Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xs
}, Symbol.toStringTag, { value: "Module" }));
function Zs(e, r, t = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, s) => {
        if (s) {
          const c = r(s);
          c !== "" && i.push(c), t && t[s] && i.push(t[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
function Qs(e, r) {
  return B({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
var Q = {}, Wn = { exports: {} };
(function(e) {
  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Wn);
var qn = Wn.exports;
const ea = /* @__PURE__ */ Ae(oo), ra = /* @__PURE__ */ Ae(Js);
var Bn = qn;
Object.defineProperty(Q, "__esModule", {
  value: !0
});
var yc = Q.alpha = Xn;
Q.blend = pa;
Q.colorChannel = void 0;
var ta = Q.darken = mt;
Q.decomposeColor = ge;
Q.emphasize = Jn;
var en = Q.getContrastRatio = ca;
Q.getLuminance = vr;
Q.hexToRgb = Gn;
Q.hslToRgb = Hn;
var na = Q.lighten = yt;
Q.private_safeAlpha = ua;
Q.private_safeColorChannel = void 0;
Q.private_safeDarken = la;
Q.private_safeEmphasize = da;
Q.private_safeLighten = fa;
Q.recomposeColor = qe;
Q.rgbToHex = aa;
var rn = Bn(ea), oa = Bn(ra);
function pt(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), (0, oa.default)(e, r, t);
}
function Gn(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ia(e) {
  const r = e.toString(16);
  return r.length === 1 ? `0${r}` : r;
}
function ge(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ge(Gn(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, rn.default)(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, rn.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const Kn = (e) => {
  const r = ge(e);
  return r.values.slice(0, 3).map((t, n) => r.type.indexOf("hsl") !== -1 && n !== 0 ? `${t}%` : t).join(" ");
};
Q.colorChannel = Kn;
const sa = (e, r) => {
  try {
    return Kn(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
Q.private_safeColorChannel = sa;
function qe(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function aa(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: r
  } = ge(e);
  return `#${r.map((t, n) => ia(n === 3 ? Math.round(255 * t) : t)).join("")}`;
}
function Hn(e) {
  e = ge(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), s = (l, f = (l + t / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let c = "rgb";
  const u = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", u.push(r[3])), qe({
    type: c,
    values: u
  });
}
function vr(e) {
  e = ge(e);
  let r = e.type === "hsl" || e.type === "hsla" ? ge(Hn(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function ca(e, r) {
  const t = vr(e), n = vr(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function Xn(e, r) {
  return e = ge(e), r = pt(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, qe(e);
}
function ua(e, r, t) {
  try {
    return Xn(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function mt(e, r) {
  if (e = ge(e), r = pt(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return qe(e);
}
function la(e, r, t) {
  try {
    return mt(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function yt(e, r) {
  if (e = ge(e), r = pt(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return qe(e);
}
function fa(e, r, t) {
  try {
    return yt(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Jn(e, r = 0.15) {
  return vr(e) > 0.5 ? mt(e, r) : yt(e, r);
}
function da(e, r, t) {
  try {
    return Jn(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function pa(e, r, t, n = 1) {
  const o = (u, l) => Math.round((u ** (1 / n) * (1 - t) + l ** (1 / n) * t) ** n), i = ge(e), s = ge(r), c = [o(i.values[0], s.values[0]), o(i.values[1], s.values[1]), o(i.values[2], s.values[2])];
  return qe({
    type: "rgb",
    values: c
  });
}
const ma = ["mode", "contrastThreshold", "tonalOffset"], tn = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Xe.white,
    default: Xe.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Wr = {
  text: {
    primary: Xe.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Xe.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function nn(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = na(e.main, o) : r === "dark" && (e.dark = ta(e.main, i)));
}
function ya(e = "light") {
  return e === "dark" ? {
    main: De[200],
    light: De[50],
    dark: De[400]
  } : {
    main: De[700],
    light: De[400],
    dark: De[800]
  };
}
function ha(e = "light") {
  return e === "dark" ? {
    main: Ie[200],
    light: Ie[50],
    dark: Ie[400]
  } : {
    main: Ie[500],
    light: Ie[300],
    dark: Ie[700]
  };
}
function ga(e = "light") {
  return e === "dark" ? {
    main: Me[500],
    light: Me[300],
    dark: Me[700]
  } : {
    main: Me[700],
    light: Me[400],
    dark: Me[800]
  };
}
function va(e = "light") {
  return e === "dark" ? {
    main: ze[400],
    light: ze[300],
    dark: ze[700]
  } : {
    main: ze[700],
    light: ze[500],
    dark: ze[900]
  };
}
function ba(e = "light") {
  return e === "dark" ? {
    main: Fe[400],
    light: Fe[300],
    dark: Fe[700]
  } : {
    main: Fe[800],
    light: Fe[500],
    dark: Fe[900]
  };
}
function Ea(e = "light") {
  return e === "dark" ? {
    main: Ge[400],
    light: Ge[300],
    dark: Ge[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ge[500],
    dark: Ge[900]
  };
}
function _a(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, o = Re(e, ma), i = e.primary || ya(r), s = e.secondary || ha(r), c = e.error || ga(r), u = e.info || va(r), l = e.success || ba(r), f = e.warning || Ea(r);
  function p(d) {
    const m = en(d, Wr.text.primary) >= t ? Wr.text.primary : tn.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const E = en(d, m);
      E < 3 && console.error([`MUI: The contrast ratio of ${E}:1 for ${m} on ${d}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const y = ({
    color: d,
    name: m,
    mainShade: E = 500,
    lightShade: w = 300,
    darkShade: S = 700
  }) => {
    if (d = B({}, d), !d.main && d[E] && (d.main = d[E]), !d.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.` : Je(11, m ? ` (${m})` : "", E));
    if (typeof d.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(d.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Je(12, m ? ` (${m})` : "", JSON.stringify(d.main)));
    return nn(d, "light", w, n), nn(d, "dark", S, n), d.contrastText || (d.contrastText = p(d.main)), d;
  }, b = {
    dark: Wr,
    light: tn
  };
  return process.env.NODE_ENV !== "production" && (b[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), Oe(B({
    // A collection of common colors.
    common: B({}, Xe),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: no,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, b[r]), o);
}
const Sa = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function xa(e) {
  return Math.round(e * 1e5) / 1e5;
}
const on = {
  textTransform: "uppercase"
}, sn = '"Roboto", "Helvetica", "Arial", sans-serif';
function Oa(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = sn,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: p
  } = t, y = Re(t, Sa);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = o / 14, g = p || ((E) => `${E / l * b}rem`), d = (E, w, S, O, a) => B({
    fontFamily: n,
    fontWeight: E,
    fontSize: g(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: S
  }, n === sn ? {
    letterSpacing: `${xa(O / w)}em`
  } : {}, a, f), m = {
    h1: d(i, 96, 1.167, -1.5),
    h2: d(i, 60, 1.2, -0.5),
    h3: d(s, 48, 1.167, 0),
    h4: d(s, 34, 1.235, 0.25),
    h5: d(s, 24, 1.334, 0),
    h6: d(c, 20, 1.6, 0.15),
    subtitle1: d(s, 16, 1.75, 0.15),
    subtitle2: d(c, 14, 1.57, 0.1),
    body1: d(s, 16, 1.5, 0.15),
    body2: d(s, 14, 1.43, 0.15),
    button: d(c, 14, 1.75, 0.4, on),
    caption: d(s, 12, 1.66, 0.4),
    overline: d(s, 12, 2.66, 1, on),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Oe(B({
    htmlFontSize: l,
    pxToRem: g,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: c,
    fontWeightBold: u
  }, m), y, {
    clone: !1
    // No need to clone deep
  });
}
const Ta = 0.2, wa = 0.14, Ca = 0.12;
function K(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ta})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${wa})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ca})`].join(",");
}
const $a = ["none", K(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), K(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), K(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), K(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), K(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), K(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), K(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), K(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), K(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), K(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), K(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), K(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), K(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), K(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), K(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), K(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), K(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), K(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), K(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), K(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), K(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), K(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), K(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), K(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Pa = ["duration", "easing", "delay"], Ra = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Aa = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function an(e) {
  return `${Math.round(e)}ms`;
}
function Na(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function ka(e) {
  const r = B({}, Ra, e.easing), t = B({}, Aa, e.duration);
  return B({
    getAutoHeightDuration: Na,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = t.standard,
        easing: c = r.easeInOut,
        delay: u = 0
      } = i, l = Re(i, Pa);
      if (process.env.NODE_ENV !== "production") {
        const f = (y) => typeof y == "string", p = (y) => !isNaN(parseFloat(y));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !f(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), f(c) || console.error('MUI: Argument "easing" must be a string.'), !p(u) && !f(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof s == "string" ? s : an(s)} ${c} ${typeof u == "string" ? u : an(u)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const ja = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Ma = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Ia(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = Re(e, Ma);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Je(18));
  const c = _a(n), u = ft(e);
  let l = Oe(u, {
    mixins: Qs(u.breakpoints, t),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: $a.slice(),
    typography: Oa(c, i),
    transitions: ka(o),
    zIndex: B({}, ja)
  });
  if (l = Oe(l, s), l = r.reduce((f, p) => Oe(f, p), l), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (y, b) => {
      let g;
      for (g in y) {
        const d = y[g];
        if (f.indexOf(g) !== -1 && Object.keys(d).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = dt("", g);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: d
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[g] = {};
        }
      }
    };
    Object.keys(l.components).forEach((y) => {
      const b = l.components[y].styleOverrides;
      b && y.indexOf("Mui") === 0 && p(b, y);
    });
  }
  return l.unstable_sxConfig = B({}, or, s == null ? void 0 : s.unstable_sxConfig), l.unstable_sx = function(p) {
    return Mr({
      sx: p,
      theme: this
    });
  }, l;
}
const Zn = Ia();
function Da({
  props: e,
  name: r
}) {
  return Hs({
    props: e,
    name: r,
    defaultTheme: Zn,
    themeId: fn
  });
}
var ir = {}, qr = { exports: {} }, cn;
function za() {
  return cn || (cn = 1, function(e) {
    function r(t, n) {
      if (t == null)
        return {};
      var o = {};
      for (var i in t)
        if ({}.hasOwnProperty.call(t, i)) {
          if (n.indexOf(i) >= 0)
            continue;
          o[i] = t[i];
        }
      return o;
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(qr)), qr.exports;
}
const Fa = /* @__PURE__ */ Ae(ji), La = /* @__PURE__ */ Ae(Mi), Va = /* @__PURE__ */ Ae(Vi), Ya = /* @__PURE__ */ Ae(Gs), Ua = /* @__PURE__ */ Ae(Ps), Wa = /* @__PURE__ */ Ae(Ds);
var Be = qn;
Object.defineProperty(ir, "__esModule", {
  value: !0
});
var qa = ir.default = ic;
ir.shouldForwardProp = pr;
ir.systemDefaultTheme = void 0;
var ye = Be(Cn()), Qr = Be(za()), un = ec(Fa), Ba = La, Ga = Be(Va), Ka = Be(Ya), Ha = Be(Ua), Xa = Be(Wa);
const Ja = ["ownerState"], Za = ["variants"], Qa = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Qn(e) {
  if (typeof WeakMap != "function")
    return null;
  var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
  return (Qn = function(n) {
    return n ? t : r;
  })(e);
}
function ec(e, r) {
  if (e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var t = Qn(r);
  if (t && t.has(e))
    return t.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i];
    }
  return n.default = e, t && t.set(e, n), n;
}
function rc(e) {
  return Object.keys(e).length === 0;
}
function tc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function pr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const nc = ir.systemDefaultTheme = (0, Ha.default)(), ln = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function ur({
  defaultTheme: e,
  theme: r,
  themeId: t
}) {
  return rc(r) ? e : r[t] || r;
}
function oc(e) {
  return e ? (r, t) => t[e] : null;
}
function mr(e, r) {
  let {
    ownerState: t
  } = r, n = (0, Qr.default)(r, Ja);
  const o = typeof e == "function" ? e((0, ye.default)({
    ownerState: t
  }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => mr(i, (0, ye.default)({
      ownerState: t
    }, n)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: i = []
    } = o;
    let c = (0, Qr.default)(o, Za);
    return i.forEach((u) => {
      let l = !0;
      typeof u.props == "function" ? l = u.props((0, ye.default)({
        ownerState: t
      }, n, t)) : Object.keys(u.props).forEach((f) => {
        (t == null ? void 0 : t[f]) !== u.props[f] && n[f] !== u.props[f] && (l = !1);
      }), l && (Array.isArray(c) || (c = [c]), c.push(typeof u.style == "function" ? u.style((0, ye.default)({
        ownerState: t
      }, n, t)) : u.style));
    }), c;
  }
  return o;
}
function ic(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = nc,
    rootShouldForwardProp: n = pr,
    slotShouldForwardProp: o = pr
  } = e, i = (s) => (0, Xa.default)((0, ye.default)({}, s, {
    theme: ur((0, ye.default)({}, s, {
      defaultTheme: t,
      themeId: r
    }))
  }));
  return i.__mui_systemSx = !0, (s, c = {}) => {
    (0, un.internal_processStyles)(s, (a) => a.filter((A) => !(A != null && A.__mui_systemSx)));
    const {
      name: u,
      slot: l,
      skipVariantsResolver: f,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: y = oc(ln(l))
    } = c, b = (0, Qr.default)(c, Qa), g = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      l && l !== "Root" && l !== "root" || !1
    ), d = p || !1;
    let m;
    process.env.NODE_ENV !== "production" && u && (m = `${u}-${ln(l || "Root")}`);
    let E = pr;
    l === "Root" || l === "root" ? E = n : l ? E = o : tc(s) && (E = void 0);
    const w = (0, un.default)(s, (0, ye.default)({
      shouldForwardProp: E,
      label: m
    }, b)), S = (a) => typeof a == "function" && a.__emotion_real !== a || (0, Ba.isPlainObject)(a) ? (A) => mr(a, (0, ye.default)({}, A, {
      theme: ur({
        theme: A.theme,
        defaultTheme: t,
        themeId: r
      })
    })) : a, O = (a, ...A) => {
      let $ = S(a);
      const ce = A ? A.map(S) : [];
      u && y && ce.push((H) => {
        const re = ur((0, ye.default)({}, H, {
          defaultTheme: t,
          themeId: r
        }));
        if (!re.components || !re.components[u] || !re.components[u].styleOverrides)
          return null;
        const de = re.components[u].styleOverrides, le = {};
        return Object.entries(de).forEach(([Te, ie]) => {
          le[Te] = mr(ie, (0, ye.default)({}, H, {
            theme: re
          }));
        }), y(H, le);
      }), u && !g && ce.push((H) => {
        var re;
        const de = ur((0, ye.default)({}, H, {
          defaultTheme: t,
          themeId: r
        })), le = de == null || (re = de.components) == null || (re = re[u]) == null ? void 0 : re.variants;
        return mr({
          variants: le
        }, (0, ye.default)({}, H, {
          theme: de
        }));
      }), d || ce.push(i);
      const ue = ce.length - A.length;
      if (Array.isArray(a) && ue > 0) {
        const H = new Array(ue).fill("");
        $ = [...a, ...H], $.raw = [...a.raw, ...H];
      }
      const oe = w($, ...ce);
      if (process.env.NODE_ENV !== "production") {
        let H;
        u && (H = `${u}${(0, Ga.default)(l || "")}`), H === void 0 && (H = `Styled(${(0, Ka.default)(s)})`), oe.displayName = H;
      }
      return s.muiName && (oe.muiName = s.muiName), oe;
    };
    return w.withConfig && (O.withConfig = w.withConfig), O;
  };
}
function sc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ac = (e) => sc(e) && e !== "classes", cc = qa({
  themeId: fn,
  defaultTheme: Zn,
  rootShouldForwardProp: ac
});
function uc(e) {
  return dt("MuiSvgIcon", e);
}
Ys("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const lc = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], fc = (e) => {
  const {
    color: r,
    fontSize: t,
    classes: n
  } = e, o = {
    root: ["root", r !== "inherit" && `color${ke(r)}`, `fontSize${ke(t)}`]
  };
  return Zs(o, uc, n);
}, dc = cc("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, t.color !== "inherit" && r[`color${ke(t.color)}`], r[`fontSize${ke(t.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: r
}) => {
  var t, n, o, i, s, c, u, l, f, p, y, b, g;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: r.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (t = e.transitions) == null || (n = t.create) == null ? void 0 : n.call(t, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (s = i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem",
      medium: ((c = e.typography) == null || (u = c.pxToRem) == null ? void 0 : u.call(c, 24)) || "1.5rem",
      large: ((l = e.typography) == null || (f = l.pxToRem) == null ? void 0 : f.call(l, 35)) || "2.1875rem"
    }[r.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (y = (e.vars || e).palette) == null || (y = y[r.color]) == null ? void 0 : y.main) != null ? p : {
      action: (b = (e.vars || e).palette) == null || (b = b.action) == null ? void 0 : b.active,
      disabled: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.disabled,
      inherit: void 0
    }[r.color]
  };
}), br = /* @__PURE__ */ G.forwardRef(function(r, t) {
  const n = Da({
    props: r,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: c = "svg",
    fontSize: u = "medium",
    htmlColor: l,
    inheritViewBox: f = !1,
    titleAccess: p,
    viewBox: y = "0 0 24 24"
  } = n, b = Re(n, lc), g = /* @__PURE__ */ G.isValidElement(o) && o.type === "svg", d = B({}, n, {
    color: s,
    component: c,
    fontSize: u,
    instanceFontSize: r.fontSize,
    inheritViewBox: f,
    viewBox: y,
    hasSvgAsChild: g
  }), m = {};
  f || (m.viewBox = y);
  const E = fc(d);
  return /* @__PURE__ */ to(dc, B({
    as: c,
    className: Ls(E.root, i),
    focusable: "false",
    color: l,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: t
  }, m, b, g && o.props, {
    ownerState: d,
    children: [g ? o.props.children : o, p ? /* @__PURE__ */ Er("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (br.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: I.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: I.object,
  /**
   * @ignore
   */
  className: I.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: I.oneOfType([I.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), I.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: I.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: I.oneOfType([I.oneOf(["inherit", "large", "medium", "small"]), I.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: I.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: I.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: I.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: I.oneOfType([I.arrayOf(I.oneOfType([I.func, I.object, I.bool])), I.func, I.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: I.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: I.string
});
br.muiName = "SvgIcon";
function hc(e, r) {
  function t(n, o) {
    return /* @__PURE__ */ Er(br, B({
      "data-testid": `${r}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (t.displayName = `${r}Icon`), t.muiName = br.muiName, /* @__PURE__ */ G.memo(/* @__PURE__ */ G.forwardRef(t));
}
export {
  I as P,
  fn as T,
  B as _,
  dt as a,
  ke as b,
  hc as c,
  Re as d,
  Ls as e,
  Zs as f,
  Ys as g,
  yc as h,
  Un as i,
  ks as j,
  li as k,
  Zn as l,
  ac as r,
  cc as s,
  Da as u
};
