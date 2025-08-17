import Fe, { useRef as Q, useState as gr, useEffect as hr } from "react";
import { useFrame as yr, Canvas as xr, extend as br } from "@react-three/fiber";
import * as je from "three";
import { IcosahedronGeometry as Pr } from "three";
import { PositionalAudio as _r, OrbitControls as Er, shaderMaterial as Oe } from "@react-three/drei";
var te = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function wr() {
  if (Se)
    return N;
  Se = 1;
  var w = Fe, x = Symbol.for("react.element"), d = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, R = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(P, c, C) {
    var f, _ = {}, S = null, I = null;
    C !== void 0 && (S = "" + C), c.key !== void 0 && (S = "" + c.key), c.ref !== void 0 && (I = c.ref);
    for (f in c)
      p.call(c, f) && !T.hasOwnProperty(f) && (_[f] = c[f]);
    if (P && P.defaultProps)
      for (f in c = P.defaultProps, c)
        _[f] === void 0 && (_[f] = c[f]);
    return { $$typeof: x, type: P, key: S, ref: I, props: _, _owner: R.current };
  }
  return N.Fragment = d, N.jsx = b, N.jsxs = b, N;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Rr() {
  return ze || (ze = 1, process.env.NODE_ENV !== "production" && function() {
    var w = Fe, x = Symbol.for("react.element"), d = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), P = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), ae = Symbol.iterator, ke = "@@iterator";
    function De(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ae && e[ae] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var j = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var a = j.ReactDebugCurrentFrame, i = a.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var l = t.map(function(n) {
          return String(n);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Me = !1, Ne = !1, qe = !1, Ie = !1, We = !1, oe;
    oe = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === T || We || e === R || e === C || e === f || Ie || e === I || Me || Ne || qe || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === _ || e.$$typeof === b || e.$$typeof === P || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case d:
          return "Portal";
        case T:
          return "Profiler";
        case R:
          return "StrictMode";
        case C:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case P:
            var r = e;
            return ne(r) + ".Consumer";
          case b:
            var t = e;
            return ne(t._context) + ".Provider";
          case c:
            return Ye(e, e.render, "ForwardRef");
          case _:
            var a = e.displayName || null;
            return a !== null ? a : E(e.type) || "Memo";
          case S: {
            var i = e, l = i._payload, n = i._init;
            try {
              return E(n(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, D = 0, ie, le, se, ue, ce, fe, ve;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function $e() {
      {
        if (D === 0) {
          ie = console.log, le = console.info, se = console.warn, ue = console.error, ce = console.group, fe = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
    function Ve() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, e, {
              value: ie
            }),
            info: z({}, e, {
              value: le
            }),
            warn: z({}, e, {
              value: se
            }),
            error: z({}, e, {
              value: ue
            }),
            group: z({}, e, {
              value: ce
            }),
            groupCollapsed: z({}, e, {
              value: fe
            }),
            groupEnd: z({}, e, {
              value: ve
            })
          });
        }
        D < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = j.ReactCurrentDispatcher, L;
    function W(e, r, t) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (i) {
            var a = i.stack.trim().match(/\n( *(at )?)/);
            L = a && a[1] || "";
          }
        return `
` + L + e;
      }
    }
    var B = !1, U;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Le();
    }
    function me(e, r) {
      if (!e || B)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      B = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = V.current, V.current = null, $e();
      try {
        if (r) {
          var n = function() {
            throw Error();
          };
          if (Object.defineProperty(n.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(n, []);
            } catch (g) {
              a = g;
            }
            Reflect.construct(e, [], n);
          } else {
            try {
              n.call();
            } catch (g) {
              a = g;
            }
            e.call(n.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            a = g;
          }
          e();
        }
      } catch (g) {
        if (g && a && typeof g.stack == "string") {
          for (var o = g.stack.split(`
`), m = a.stack.split(`
`), s = o.length - 1, u = m.length - 1; s >= 1 && u >= 0 && o[s] !== m[u]; )
            u--;
          for (; s >= 1 && u >= 0; s--, u--)
            if (o[s] !== m[u]) {
              if (s !== 1 || u !== 1)
                do
                  if (s--, u--, u < 0 || o[s] !== m[u]) {
                    var h = `
` + o[s].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, h), h;
                  }
                while (s >= 1 && u >= 0);
              break;
            }
        }
      } finally {
        B = !1, V.current = l, Ve(), Error.prepareStackTrace = i;
      }
      var k = e ? e.displayName || e.name : "", F = k ? W(k) : "";
      return typeof e == "function" && U.set(e, F), F;
    }
    function Be(e, r, t) {
      return me(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Ge(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case C:
          return W("Suspense");
        case f:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Be(e.render);
          case _:
            return Y(e.type, r, t);
          case S: {
            var a = e, i = a._payload, l = a._init;
            try {
              return Y(l(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, pe = {}, ge = j.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function Je(e, r, t, a, i) {
      {
        var l = Function.call.bind(A);
        for (var n in e)
          if (l(e, n)) {
            var o = void 0;
            try {
              if (typeof e[n] != "function") {
                var m = Error((a || "React class") + ": " + t + " type `" + n + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[n] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              o = e[n](r, n, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              o = s;
            }
            o && !(o instanceof Error) && ($(i), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, n, typeof o), $(null)), o instanceof Error && !(o.message in pe) && (pe[o.message] = !0, $(i), v("Failed %s type: %s", t, o.message), $(null));
          }
      }
    }
    var Ke = Array.isArray;
    function G(e) {
      return Ke(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function ye(e) {
      if (He(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), he(e);
    }
    var M = j.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, be, J;
    J = {};
    function Qe(e) {
      if (A.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function er(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, r) {
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var t = E(M.current.type);
        J[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(M.current.type), e.ref), J[t] = !0);
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          xe || (xe = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          be || (be = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var or = function(e, r, t, a, i, l, n) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: x,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: n,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function nr(e, r, t, a, i) {
      {
        var l, n = {}, o = null, m = null;
        t !== void 0 && (ye(t), o = "" + t), er(r) && (ye(r.key), o = "" + r.key), Qe(r) && (m = r.ref, rr(r, i));
        for (l in r)
          A.call(r, l) && !Ze.hasOwnProperty(l) && (n[l] = r[l]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (l in s)
            n[l] === void 0 && (n[l] = s[l]);
        }
        if (o || m) {
          var u = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && tr(n, u), m && ar(n, u);
        }
        return or(e, o, m, i, a, M.current, n);
      }
    }
    var K = j.ReactCurrentOwner, Pe = j.ReactDebugCurrentFrame;
    function O(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === x;
    }
    function _e() {
      {
        if (K.current) {
          var e = E(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function lr(e) {
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
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = lr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var a = "";
        e && e._owner && e._owner !== K.current && (a = " It was passed a child from " + E(e._owner.type) + "."), O(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), O(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            H(a) && we(a, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = De(e);
          if (typeof i == "function" && i !== e.entries)
            for (var l = i.call(e), n; !(n = l.next()).done; )
              H(n.value) && we(n.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = E(r);
          Je(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = E(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            O(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), O(null);
            break;
          }
        }
        e.ref !== null && (O(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), O(null));
      }
    }
    var Ce = {};
    function Te(e, r, t, a, i, l) {
      {
        var n = Ue(e);
        if (!n) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = ir(i);
          m ? o += m : o += _e();
          var s;
          e === null ? s = "null" : G(e) ? s = "array" : e !== void 0 && e.$$typeof === x ? (s = "<" + (E(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, o);
        }
        var u = nr(e, r, t, i, l);
        if (u == null)
          return u;
        if (n) {
          var h = r.children;
          if (h !== void 0)
            if (a)
              if (G(h)) {
                for (var k = 0; k < h.length; k++)
                  Re(h[k], e);
                Object.freeze && Object.freeze(h);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(h, e);
        }
        if (A.call(r, "key")) {
          var F = E(e), g = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), Z = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ce[F + Z]) {
            var mr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, F, mr, F), Ce[F + Z] = !0;
          }
        }
        return e === p ? ur(u) : sr(u), u;
      }
    }
    function cr(e, r, t) {
      return Te(e, r, t, !0);
    }
    function fr(e, r, t) {
      return Te(e, r, t, !1);
    }
    var vr = fr, dr = cr;
    q.Fragment = p, q.jsx = vr, q.jsxs = dr;
  }()), q;
}
process.env.NODE_ENV === "production" ? te.exports = wr() : te.exports = Rr();
var y = te.exports;
function Cr({ audioUrl: w, shaderType: x = "default" }) {
  const d = Q(null), p = Q(), [R, T] = gr(!0), b = Q(null);
  hr(() => {
    d.current && (p.current = new je.AudioAnalyser(d.current, 32));
  }, [d]), yr(({ clock: c }) => {
    var f;
    if (!((f = b.current) != null && f.material))
      return;
    const C = b.current.material;
    if (C.uniforms.uTime.value = c.getElapsedTime(), p.current) {
      const _ = p.current.getAverageFrequency();
      C.uniforms.uFreq.value = _ / 256;
    }
  });
  function P() {
    d.current && (R ? d.current.pause() : d.current.play(), T(!R));
  }
  return /* @__PURE__ */ y.jsxs(
    "mesh",
    {
      onClick: P,
      castShadow: !0,
      ref: b,
      scale: [1, 1, 1],
      rotation: [Math.PI / 2, 0, 0],
      children: [
        /* @__PURE__ */ y.jsx(
          _r,
          {
            url: w,
            distance: 7,
            loop: !0,
            ref: d,
            autoplay: !0
          }
        ),
        /* @__PURE__ */ y.jsx("icosahedronGeometry", { args: [4, 100] }),
        x === "halo" ? /* @__PURE__ */ y.jsx("haloBlobShaderMaterial", { transparent: !0 }) : /* @__PURE__ */ y.jsx("blobShaderMaterial", { transparent: !0 })
      ]
    }
  );
}
function Tr({
  audioUrl: w,
  enableZoom: x = !0,
  enablePan: d = !1,
  shaderType: p = "default"
}) {
  return /* @__PURE__ */ y.jsxs(
    xr,
    {
      camera: { position: [0, 0, 10], fov: 50 },
      style: { background: "transparent" },
      children: [
        /* @__PURE__ */ y.jsx("ambientLight", { intensity: 0.5 }),
        /* @__PURE__ */ y.jsx("pointLight", { position: [10, 10, 10] }),
        /* @__PURE__ */ y.jsx(Cr, { audioUrl: w, shaderType: p }),
        /* @__PURE__ */ y.jsx(Er, { enableZoom: x, enablePan: d })
      ]
    }
  );
}
const Sr = `
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
`, zr = `
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
  vertexShader: Sr,
  fragmentShader: zr,
  uniforms: {
    uTime: { value: 0 },
    uFreq: { value: 0 },
    uIntensity: { value: 1.5 },
    transparent: !0
  }
}, Fr = `
  uniform float uTime;
  uniform float uFreq;
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    
    // Add gentle pulsing animation based on frequency
    float pulse = 1.0 + 0.1 * sin(uTime * 2.0) * uFreq;
    vec3 newPosition = position * pulse;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`, jr = `
  uniform float uTime;
  uniform float uFreq;
  uniform float uIntensity;
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;

  // Hash function for pseudo-random number generation
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  // Noise function for particle distribution
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  // Function to create moving particles
  float particles(vec2 uv, float time, float freq) {
    float particleField = 0.0;
    
    // Create multiple layers of particles with different speeds
    for (int i = 0; i < 3; i++) {
      float layer = float(i);
      float speed = 0.5 + layer * 0.3;
      float scale = 20.0 + layer * 10.0;
      
      vec2 movingUv = uv + vec2(
        sin(time * speed + layer * 1.5) * 0.1,
        cos(time * speed * 0.7 + layer * 2.1) * 0.1
      );
      
      float noiseVal = noise(movingUv * scale + time * speed);
      float threshold = 0.85 + layer * 0.05;
      float particle = step(threshold, noiseVal);
      
      // Make particles pulse with frequency
      float pulse = 1.0 + 0.3 * sin(time * 3.0 + layer) * freq;
      particle *= pulse;
      
      particleField += particle * (0.8 - layer * 0.2);
    }
    
    return particleField;
  }

  void main() {
    // Calculate distance from center for halo effect
    vec2 center = vec2(0.5, 0.5);
    float dist = distance(vUv, center);
    
    // Create halo gradient - brightest at edges, darker in center
    float haloGradient = smoothstep(0.0, 0.3, dist) * smoothstep(1.0, 0.7, dist);
    
    // Add some variation to the halo
    float haloNoise = noise(vUv * 15.0 + uTime * 0.5) * 0.2;
    haloGradient += haloNoise;
    
    // Create moving particles
    float particleDensity = particles(vUv, uTime, uFreq);
    
    // Distribute particles more densely at the edges (halo effect)
    float edgeFalloff = smoothstep(0.0, 0.4, dist) * smoothstep(1.0, 0.6, dist);
    float centerFalloff = 1.0 - smoothstep(0.0, 0.3, dist);
    
    // Combine halo and particles with proper distribution
    float finalParticles = particleDensity * (edgeFalloff * 2.0 + centerFalloff * 0.5);
    
    // Base blue color with electric blue glow
    vec3 baseColor = vec3(0.1, 0.4, 1.0);
    vec3 glowColor = vec3(0.3, 0.7, 1.2);
    
    // Combine halo gradient and particles
    float intensity = haloGradient + finalParticles;
    
    // Add frequency-based pulsing
    float freqPulse = 1.0 + 0.5 * sin(uTime * 4.0) * uFreq;
    intensity *= freqPulse;
    
    // Create the final color
    vec3 finalColor = mix(baseColor, glowColor, intensity);
    
    // Add some variation based on normal for 3D effect
    float normalVariation = dot(vNormal, vec3(0.0, 0.0, 1.0)) * 0.5 + 0.5;
    finalColor *= (0.8 + normalVariation * 0.4);
    
    // Alpha based on intensity with some transparency
    float alpha = clamp(intensity * 0.8 + 0.2, 0.0, 1.0);
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`, re = {
  vertexShader: Fr,
  fragmentShader: jr,
  uniforms: {
    uTime: { value: 0 },
    uFreq: { value: 0 },
    uIntensity: { value: 1 },
    transparent: !0
  }
}, Or = Oe(
  ee.uniforms,
  ee.vertexShader,
  ee.fragmentShader
), kr = Oe(
  re.uniforms,
  re.vertexShader,
  re.fragmentShader
);
br({
  BlobShaderMaterial: Or,
  HaloBlobShaderMaterial: kr,
  Mesh: je.Mesh,
  IcosahedronGeometry: Pr
});
function qr({
  audioUrl: w = "test.mp3",
  width: x,
  height: d,
  className: p,
  enableZoom: R = !0,
  enablePan: T = !1,
  shaderType: b = "default"
}) {
  const P = {
    width: x || "100%",
    height: d || "400px"
  };
  return /* @__PURE__ */ y.jsx("div", { style: P, className: p, children: /* @__PURE__ */ y.jsx(
    Tr,
    {
      audioUrl: w,
      enableZoom: R,
      enablePan: T,
      shaderType: b
    }
  ) });
}
export {
  qr as BlobComponent,
  qr as BlobComponentDefault,
  Cr as BlobMesh,
  Or as BlobShaderMaterial,
  kr as HaloBlobShaderMaterial,
  Tr as ShaderScene,
  ee as blobShaderConfig,
  re as haloBlobShaderConfig
};
//# sourceMappingURL=index.js.map
