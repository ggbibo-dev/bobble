import ze, { useRef as Q, useState as gr, useEffect as mr } from "react";
import { useFrame as pr, Canvas as hr, extend as yr } from "@react-three/fiber";
import * as Oe from "three";
import { IcosahedronGeometry as xr } from "three";
import { PositionalAudio as br, OrbitControls as _r, shaderMaterial as Pr } from "@react-three/drei";
var re = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function Er() {
  if (Ce)
    return I;
  Ce = 1;
  var b = ze, v = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, w = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(P, c, E) {
    var d, R = {}, S = null, q = null;
    E !== void 0 && (S = "" + E), c.key !== void 0 && (S = "" + c.key), c.ref !== void 0 && (q = c.ref);
    for (d in c)
      h.call(c, d) && !T.hasOwnProperty(d) && (R[d] = c[d]);
    if (P && P.defaultProps)
      for (d in c = P.defaultProps, c)
        R[d] === void 0 && (R[d] = c[d]);
    return { $$typeof: v, type: P, key: S, ref: q, props: R, _owner: w.current };
  }
  return I.Fragment = _, I.jsx = C, I.jsxs = C, I;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function Rr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var b = ze, v = Symbol.for("react.element"), _ = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), P = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), te = Symbol.iterator, je = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[je];
      return typeof r == "function" ? r : null;
    }
    var j = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var l = t.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var De = !1, Ae = !1, Me = !1, Ie = !1, Ne = !1, ne;
    ne = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === T || Ne || e === w || e === E || e === d || Ie || e === q || De || Ae || Me || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === R || e.$$typeof === C || e.$$typeof === P || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case _:
          return "Portal";
        case T:
          return "Profiler";
        case w:
          return "StrictMode";
        case E:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case P:
            var r = e;
            return ae(r) + ".Consumer";
          case C:
            var t = e;
            return ae(t._context) + ".Provider";
          case c:
            return We(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : x(e.type) || "Memo";
          case S: {
            var i = e, l = i._payload, o = i._init;
            try {
              return x(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, D = 0, oe, ie, le, se, ue, ce, fe;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Ye() {
      {
        if (D === 0) {
          oe = console.log, ie = console.info, le = console.warn, se = console.error, ue = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function $e() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, e, {
              value: oe
            }),
            info: z({}, e, {
              value: ie
            }),
            warn: z({}, e, {
              value: le
            }),
            error: z({}, e, {
              value: se
            }),
            group: z({}, e, {
              value: ue
            }),
            groupCollapsed: z({}, e, {
              value: ce
            }),
            groupEnd: z({}, e, {
              value: fe
            })
          });
        }
        D < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = j.ReactCurrentDispatcher, U;
    function W(e, r, t) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            U = n && n[1] || "";
          }
        return `
` + U + e;
      }
    }
    var B = !1, Y;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Le();
    }
    function de(e, r) {
      if (!e || B)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = V.current, V.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (m) {
              n = m;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (m) {
              n = m;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            n = m;
          }
          e();
        }
      } catch (m) {
        if (m && n && typeof m.stack == "string") {
          for (var a = m.stack.split(`
`), g = n.stack.split(`
`), s = a.length - 1, u = g.length - 1; s >= 1 && u >= 0 && a[s] !== g[u]; )
            u--;
          for (; s >= 1 && u >= 0; s--, u--)
            if (a[s] !== g[u]) {
              if (s !== 1 || u !== 1)
                do
                  if (s--, u--, u < 0 || a[s] !== g[u]) {
                    var p = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, p), p;
                  }
                while (s >= 1 && u >= 0);
              break;
            }
        }
      } finally {
        B = !1, V.current = l, $e(), Error.prepareStackTrace = i;
      }
      var F = e ? e.displayName || e.name : "", O = F ? W(F) : "";
      return typeof e == "function" && Y.set(e, O), O;
    }
    function Ve(e, r, t) {
      return de(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function $(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Ue(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case E:
          return W("Suspense");
        case d:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ve(e.render);
          case R:
            return $(e.type, r, t);
          case S: {
            var n = e, i = n._payload, l = n._init;
            try {
              return $(l(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, ge = {}, me = j.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = $(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var l = Function.call.bind(A);
        for (var o in e)
          if (l(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (L(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), L(null)), a instanceof Error && !(a.message in ge) && (ge[a.message] = !0, L(i), f("Failed %s type: %s", t, a.message), L(null));
          }
      }
    }
    var Je = Array.isArray;
    function J(e) {
      return Je(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function he(e) {
      if (Ke(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), pe(e);
    }
    var M = j.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, xe, G;
    G = {};
    function Ze(e) {
      if (A.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var t = x(M.current.type);
        G[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(M.current.type), e.ref), G[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          ye || (ye = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          xe || (xe = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, i, l, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, i) {
      {
        var l, o = {}, a = null, g = null;
        t !== void 0 && (he(t), a = "" + t), He(r) && (he(r.key), a = "" + r.key), Ze(r) && (g = r.ref, Qe(r, i));
        for (l in r)
          A.call(r, l) && !Xe.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (l in s)
            o[l] === void 0 && (o[l] = s[l]);
        }
        if (a || g) {
          var u = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(o, u), g && rr(o, u);
        }
        return tr(e, a, g, i, n, M.current, o);
      }
    }
    var K = j.ReactCurrentOwner, be = j.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = $(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === v;
    }
    function _e() {
      {
        if (K.current) {
          var e = x(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Pe = {};
    function or(e) {
      {
        var r = _e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Pe[t])
          return;
        Pe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + x(e._owner.type) + "."), k(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Ee(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = ke(e);
          if (typeof i == "function" && i !== e.entries)
            for (var l = i.call(e), o; !(o = l.next()).done; )
              Z(o.value) && Ee(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = x(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = x(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var we = {};
    function Te(e, r, t, n, i, l) {
      {
        var o = qe(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = ar(i);
          g ? a += g : a += _e();
          var s;
          e === null ? s = "null" : J(e) ? s = "array" : e !== void 0 && e.$$typeof === v ? (s = "<" + (x(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var u = nr(e, r, t, i, l);
        if (u == null)
          return u;
        if (o) {
          var p = r.children;
          if (p !== void 0)
            if (n)
              if (J(p)) {
                for (var F = 0; F < p.length; F++)
                  Re(p[F], e);
                Object.freeze && Object.freeze(p);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(p, e);
        }
        if (A.call(r, "key")) {
          var O = x(e), m = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), H = m.length > 0 ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[O + H]) {
            var vr = m.length > 0 ? "{" + m.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, O, vr, O), we[O + H] = !0;
          }
        }
        return e === h ? lr(u) : ir(u), u;
      }
    }
    function sr(e, r, t) {
      return Te(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Te(e, r, t, !1);
    }
    var cr = ur, fr = sr;
    N.Fragment = h, N.jsx = cr, N.jsxs = fr;
  }()), N;
}
process.env.NODE_ENV === "production" ? re.exports = Er() : re.exports = Rr();
var y = re.exports;
function wr({ audioUrl: b }) {
  const v = Q(null), _ = Q(), [h, w] = gr(!0), T = Q(null);
  mr(() => {
    v.current && (_.current = new Oe.AudioAnalyser(v.current, 32));
  }, [v]), pr(({ clock: P }) => {
    var E;
    if (!((E = T.current) != null && E.material))
      return;
    const c = T.current.material;
    if (c.uniforms.uTime.value = P.getElapsedTime(), _.current) {
      const d = _.current.getAverageFrequency();
      c.uniforms.uFreq.value = d / 256;
    }
  });
  function C() {
    v.current && (h ? v.current.pause() : v.current.play(), w(!h));
  }
  return /* @__PURE__ */ y.jsxs(
    "mesh",
    {
      onClick: C,
      castShadow: !0,
      ref: T,
      scale: [1, 1, 1],
      rotation: [Math.PI / 2, 0, 0],
      children: [
        /* @__PURE__ */ y.jsx(
          br,
          {
            url: b,
            distance: 7,
            loop: !0,
            ref: v,
            autoplay: !0
          }
        ),
        /* @__PURE__ */ y.jsx("icosahedronGeometry", { args: [4, 100] }),
        /* @__PURE__ */ y.jsx("blobShaderMaterial", { transparent: !0 })
      ]
    }
  );
}
function Tr({ audioUrl: b }) {
  return /* @__PURE__ */ y.jsxs(
    hr,
    {
      camera: { position: [0, 0, 10], fov: 50 },
      style: { background: "transparent" },
      children: [
        /* @__PURE__ */ y.jsx("ambientLight", { intensity: 0.5 }),
        /* @__PURE__ */ y.jsx("pointLight", { position: [10, 10, 10] }),
        /* @__PURE__ */ y.jsx(wr, { audioUrl: b }),
        /* @__PURE__ */ y.jsx(_r, { enableZoom: !1, enablePan: !1 })
      ]
    }
  );
}
const Cr = `
  uniform float uTime;
  uniform float uFreq;
  varying float vDisplacement;
  varying vec3 vNormal;

  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 permute(vec4 x) {
    return mod289(((x*34.0)+10.0)*x);
  }

  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  vec3 fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
  }

  // Classic Perlin noise, periodic variant
  float pnoise(vec3 P, vec3 rep) {
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));

    float n000 = norm0.x * dot(g000, Pf0);
    float n010 = norm0.y * dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n100 = norm0.z * dot(g100, vec3(Pf1.x, Pf0.yz));
    float n110 = norm0.w * dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = norm1.x * dot(g001, vec3(Pf0.xy, Pf1.z));
    float n011 = norm1.y * dot(g011, vec3(Pf0.x, Pf1.yz));
    float n101 = norm1.z * dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n111 = norm1.w * dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
    return 2.2 * n_xyz;
  }

  void main() {
    // Gently squeeze the icosahedron like play dough
    float squeezeX = 1.0 + 0.12 * sin(uTime * 0.7 + 0.0);
    float squeezeY = 1.0 + 0.12 * sin(uTime * 0.6 + 2.0);
    float squeezeZ = 1.0 + 0.12 * sin(uTime * 0.8 + 4.0);
    vec3 squeezed = vec3(position.x * squeezeX, position.y * squeezeY, position.z * squeezeZ);

    // --- Fluid, creature-like undulation ---
    float undulate = 0.18 * sin(uTime * 0.7 + position.y * 1.2 + position.x * 0.8)
                    + 0.12 * sin(uTime * 1.1 + position.z * 1.5 - position.x * 0.6)
                    + 0.09 * sin(uTime * 1.7 + position.y * 2.2 + position.z * 0.9);
    vec3 fluidMove = squeezed + normal * undulate;

    // Pac-Man mouth distortion
    // Calculate angle in XZ plane
    float angle = atan(fluidMove.z, fluidMove.x); // [-PI, PI]
    // --- Make the mouth reaction larger ---
    float mouthOpen = 0.5 + uFreq * 2.0; // [0.5, ~2.5] (larger multiplier for bigger mouth)
    float mouthAngle = 0.5 * mouthOpen; // max ~1.25 radian
    // --- Perfectly smooth seam: when uFreq==0, mouthMask==0 everywhere (no seam),
    // and as uFreq increases, mouth opens smoothly.
    // Make seam invisible when no audio, pronounced (sharper) when reacting
    float edgeSoftness = mix(1.2, 0.08, clamp(uFreq * 2.0, 0.0, 1.0)); // soft when silent, sharp when loud
    float mouthMask = 0.0;
    if (uFreq > 0.01) {
      mouthMask = smoothstep(mouthAngle, mouthAngle - edgeSoftness, abs(angle));
    }
    float minMouthScale = 0.7;
    float mouthScale = mix(1.0, minMouthScale, mouthMask);
    // Fade noise so it's strongest at the center of the mouth, zero at the edge
    float mouthCenter = 1.0 - abs(angle) / mouthAngle;
    mouthCenter = clamp(mouthCenter, 0.0, 1.0);
    float mouthNoise = 0.0;
    if (mouthMask > 0.0) {
      mouthNoise = 0.07 * pnoise(fluidMove * 2.0 + uTime * 0.7, vec3(10.0)) * mouthMask * mouthCenter;
    }
    vec3 pacmanPos = vec3(fluidMove.x * (mouthScale + mouthNoise), fluidMove.y, fluidMove.z * (mouthScale + mouthNoise));

    // Blend normal toward up vector in mouth region for smoother shading
    vec3 baseNormal = normalize(normalMatrix * normal);
    vec3 upNormal = vec3(0.0, 1.0, 0.0);
    vNormal = normalize(mix(baseNormal, upNormal, mouthMask * mouthCenter * 0.7));

    // Add gentle Perlin noise for organic feel
    float noise = 0.7 * pnoise(pacmanPos * 0.5 + uTime * 0.2, vec3(10.0));
    vDisplacement = noise * uFreq * 0.5;
    vec3 newPosition = pacmanPos + normal * vDisplacement;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`, Sr = `
  uniform float uIntensity;
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying float vDisplacement;

  void main() {
    float distort = vDisplacement * uIntensity;

    // --- Water shader inspired by JSFiddle example ---
    // Blue vertical gradient: deeper blue at bottom, lighter at top
    float y = clamp(vNormal.y * 0.5 + 0.5, 0.0, 1.0);
    vec3 baseColor = mix(vec3(0.08, 0.22, 0.55), vec3(0.6, 0.9, 1.1), pow(y, 1.5));

    // Animated normal-based ripples (simulate water surface)
    float ripple1 = 0.08 * sin(12.0 * vNormal.x + uTime * 1.5);
    float ripple2 = 0.06 * sin(14.0 * vNormal.y - uTime * 1.2);
    float ripple3 = 0.04 * sin(18.0 * (vNormal.x + vNormal.y) + uTime * 0.8);
    vec3 rippleNormal = normalize(vNormal + vec3(ripple1, ripple2, ripple3));

    // Lighting
    vec3 lightDir = normalize(vec3(0.3, 0.9, 0.5));
    vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));

    // Multiple moving specular highlights for glass-like gloss
    float spec1 = pow(max(dot(reflect(-lightDir, rippleNormal), viewDir), 0.0), 32.0);
    float highlight1 = 0.6 * spec1;
    vec3 highlightColor1 = vec3(1.0, 1.0, 1.0) * highlight1;

    // Second highlight, different light direction and animated phase
    vec3 lightDir2 = normalize(vec3(-0.5, 0.7, 0.7));
    float spec2 = pow(max(dot(reflect(-lightDir2, rippleNormal), viewDir), 0.0), 38.0);
    float highlight2 = 0.4 * spec2 * (0.7 + 0.3 * sin(uTime * 0.7));
    vec3 highlightColor2 = vec3(1.0, 1.0, 0.95) * highlight2;

    // Third highlight, animated direction
    vec3 lightDir3 = normalize(vec3(sin(uTime * 0.8), 0.85, cos(uTime * 0.6)));
    float spec3 = pow(max(dot(reflect(-lightDir3, rippleNormal), viewDir), 0.0), 24.0);
    float highlight3 = 0.25 * spec3;
    vec3 highlightColor3 = vec3(0.95, 1.0, 1.0) * highlight3;

    // Fresnel rim, subtle and blue-tinted
    float fresnel = pow(1.0 - abs(dot(rippleNormal, viewDir)), 2.5);
    vec3 fresnelColor = vec3(0.5, 0.8, 1.2) * fresnel * 0.18;

    // Water droplet is more transparent at the edges
    float waterAlpha = 0.18 + 0.18 * pow(1.0 - abs(rippleNormal.z), 2.5);

    // Combine: blue gradient + multiple highlights + fresnel rim
    vec3 dropletColor = baseColor + highlightColor1 + highlightColor2 + highlightColor3 + fresnelColor;
    float finalAlpha = clamp(waterAlpha + (highlight1 + highlight2 + highlight3) * 0.10 + fresnel * 0.08, 0.10, 0.7);

    gl_FragColor = vec4(dropletColor, finalAlpha);
  }
`, ee = {
  vertexShader: Cr,
  fragmentShader: Sr,
  uniforms: {
    uTime: { value: 0 },
    uFreq: { value: 0 },
    uIntensity: { value: 1.5 },
    transparent: !0
  }
}, zr = Pr(
  ee.uniforms,
  ee.vertexShader,
  ee.fragmentShader
);
yr({
  BlobShaderMaterial: zr,
  Mesh: Oe.Mesh,
  IcosahedronGeometry: xr
});
function Dr({
  audioUrl: b = "test.mp3",
  width: v,
  height: _,
  className: h
}) {
  const w = {
    width: v || "100%",
    height: _ || "400px"
  };
  return /* @__PURE__ */ y.jsx("div", { style: w, className: h, children: /* @__PURE__ */ y.jsx(Tr, { audioUrl: b }) });
}
export {
  Dr as BlobComponent,
  Dr as BlobComponentDefault,
  wr as BlobMesh,
  zr as BlobShaderMaterial,
  Tr as ShaderScene,
  ee as blobShaderConfig
};
//# sourceMappingURL=index.js.map
