import ke, { useRef as Q, useState as yr, useEffect as xr } from "react";
import { useFrame as br, Canvas as Pr, extend as wr } from "@react-three/fiber";
import * as De from "three";
import { IcosahedronGeometry as _r } from "three";
import { PositionalAudio as Cr, OrbitControls as Sr, shaderMaterial as ie } from "@react-three/drei";
var oe = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function Rr() {
  if (je)
    return q;
  je = 1;
  var y = ke, x = Symbol.for("react.element"), p = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, S = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(_, u, T) {
    var f, b = {}, R = null, N = null;
    T !== void 0 && (R = "" + T), u.key !== void 0 && (R = "" + u.key), u.ref !== void 0 && (N = u.ref);
    for (f in u)
      m.call(u, f) && !E.hasOwnProperty(f) && (b[f] = u[f]);
    if (_ && _.defaultProps)
      for (f in u = _.defaultProps, u)
        b[f] === void 0 && (b[f] = u[f]);
    return { $$typeof: x, type: _, key: R, ref: N, props: b, _owner: S.current };
  }
  return q.Fragment = p, q.jsx = w, q.jsxs = w, q;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function Er() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var y = ke, x = Symbol.for("react.element"), p = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), _ = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), ne = Symbol.iterator, Ae = "@@iterator";
    function Me(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[Ae];
      return typeof r == "function" ? r : null;
    }
    var j = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        qe("error", e, t);
      }
    }
    function qe(e, r, t) {
      {
        var a = j.ReactDebugCurrentFrame, n = a.getStackAddendum();
        n !== "" && (r += "%s", t = t.concat([n]));
        var l = t.map(function(i) {
          return String(i);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Ie = !1, Ne = !1, Ve = !1, Ue = !1, We = !1, le;
    le = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === E || We || e === S || e === T || e === f || Ue || e === N || Ie || Ne || Ve || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === b || e.$$typeof === w || e.$$typeof === _ || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var n = r.displayName || r.name || "";
      return n !== "" ? t + "(" + n + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case p:
          return "Portal";
        case E:
          return "Profiler";
        case S:
          return "StrictMode";
        case T:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return se(r) + ".Consumer";
          case w:
            var t = e;
            return se(t._context) + ".Provider";
          case u:
            return $e(e, e.render, "ForwardRef");
          case b:
            var a = e.displayName || null;
            return a !== null ? a : C(e.type) || "Memo";
          case R: {
            var n = e, l = n._payload, i = n._init;
            try {
              return C(i(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, D = 0, ce, fe, ue, ve, de, pe, me;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Be() {
      {
        if (D === 0) {
          ce = console.log, fe = console.info, ue = console.warn, ve = console.error, de = console.group, pe = console.groupCollapsed, me = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
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
    function Le() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, e, {
              value: ce
            }),
            info: z({}, e, {
              value: fe
            }),
            warn: z({}, e, {
              value: ue
            }),
            error: z({}, e, {
              value: ve
            }),
            group: z({}, e, {
              value: de
            }),
            groupCollapsed: z({}, e, {
              value: pe
            }),
            groupEnd: z({}, e, {
              value: me
            })
          });
        }
        D < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var $ = j.ReactCurrentDispatcher, B;
    function V(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (n) {
            var a = n.stack.trim().match(/\n( *(at )?)/);
            B = a && a[1] || "";
          }
        return `
` + B + e;
      }
    }
    var L = !1, U;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Je();
    }
    function ge(e, r) {
      if (!e || L)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      L = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = $.current, $.current = null, Be();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (g) {
              a = g;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (g) {
              a = g;
            }
            e.call(i.prototype);
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
`), h = a.stack.split(`
`), s = o.length - 1, c = h.length - 1; s >= 1 && c >= 0 && o[s] !== h[c]; )
            c--;
          for (; s >= 1 && c >= 0; s--, c--)
            if (o[s] !== h[c]) {
              if (s !== 1 || c !== 1)
                do
                  if (s--, c--, c < 0 || o[s] !== h[c]) {
                    var P = `
` + o[s].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, P), P;
                  }
                while (s >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        L = !1, $.current = l, Le(), Error.prepareStackTrace = n;
      }
      var k = e ? e.displayName || e.name : "", F = k ? V(k) : "";
      return typeof e == "function" && U.set(e, F), F;
    }
    function Ge(e, r, t) {
      return ge(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function W(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, Ke(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case T:
          return V("Suspense");
        case f:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ge(e.render);
          case b:
            return W(e.type, r, t);
          case R: {
            var a = e, n = a._payload, l = a._init;
            try {
              return W(l(n), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, ye = {}, xe = j.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    function Xe(e, r, t, a, n) {
      {
        var l = Function.call.bind(A);
        for (var i in e)
          if (l(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var h = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              o = e[i](r, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              o = s;
            }
            o && !(o instanceof Error) && (Y(n), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof o), Y(null)), o instanceof Error && !(o.message in ye) && (ye[o.message] = !0, Y(n), d("Failed %s type: %s", t, o.message), Y(null));
          }
      }
    }
    var He = Array.isArray;
    function J(e) {
      return He(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Qe(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function Pe(e) {
      if (Qe(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), be(e);
    }
    var M = j.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, _e, G;
    G = {};
    function rr(e) {
      if (A.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tr(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var t = C(M.current.type);
        G[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(M.current.type), e.ref), G[t] = !0);
      }
    }
    function or(e, r) {
      {
        var t = function() {
          we || (we = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          _e || (_e = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, a, n, l, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: x,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
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
        value: n
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function lr(e, r, t, a, n) {
      {
        var l, i = {}, o = null, h = null;
        t !== void 0 && (Pe(t), o = "" + t), tr(r) && (Pe(r.key), o = "" + r.key), rr(r) && (h = r.ref, ar(r, n));
        for (l in r)
          A.call(r, l) && !er.hasOwnProperty(l) && (i[l] = r[l]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (l in s)
            i[l] === void 0 && (i[l] = s[l]);
        }
        if (o || h) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && or(i, c), h && ir(i, c);
        }
        return nr(e, o, h, n, a, M.current, i);
      }
    }
    var K = j.ReactCurrentOwner, Ce = j.ReactDebugCurrentFrame;
    function O(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === x;
    }
    function Se() {
      {
        if (K.current) {
          var e = C(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Re = {};
    function cr(e) {
      {
        var r = Se();
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
        var t = cr(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var a = "";
        e && e._owner && e._owner !== K.current && (a = " It was passed a child from " + C(e._owner.type) + "."), O(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), O(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            H(a) && Ee(a, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var n = Me(e);
          if (typeof n == "function" && n !== e.entries)
            for (var l = n.call(e), i; !(i = l.next()).done; )
              H(i.value) && Ee(i.value, r);
        }
      }
    }
    function fr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = C(r);
          Xe(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var n = C(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", n || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            O(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), O(null);
            break;
          }
        }
        e.ref !== null && (O(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), O(null));
      }
    }
    var ze = {};
    function Fe(e, r, t, a, n, l) {
      {
        var i = Ye(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = sr(n);
          h ? o += h : o += Se();
          var s;
          e === null ? s = "null" : J(e) ? s = "array" : e !== void 0 && e.$$typeof === x ? (s = "<" + (C(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, o);
        }
        var c = lr(e, r, t, n, l);
        if (c == null)
          return c;
        if (i) {
          var P = r.children;
          if (P !== void 0)
            if (a)
              if (J(P)) {
                for (var k = 0; k < P.length; k++)
                  Te(P[k], e);
                Object.freeze && Object.freeze(P);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(P, e);
        }
        if (A.call(r, "key")) {
          var F = C(e), g = Object.keys(r).filter(function(gr) {
            return gr !== "key";
          }), Z = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ze[F + Z]) {
            var hr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, F, hr, F), ze[F + Z] = !0;
          }
        }
        return e === m ? ur(c) : fr(c), c;
      }
    }
    function vr(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function dr(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var pr = dr, mr = vr;
    I.Fragment = m, I.jsx = pr, I.jsxs = mr;
  }()), I;
}
process.env.NODE_ENV === "production" ? oe.exports = Rr() : oe.exports = Er();
var v = oe.exports;
function ee({ audioUrl: y, shaderType: x = "default" }) {
  const p = Q(null), m = Q(), [S, E] = yr(!0), w = Q(null);
  xr(() => {
    p.current && (m.current = new De.AudioAnalyser(p.current, 32));
  }, [p]), br(({ clock: u, camera: T }) => {
    var b;
    if (!((b = w.current) != null && b.material))
      return;
    const f = w.current.material;
    if (f.uniforms.uTime.value = u.getElapsedTime(), f.uniforms.ucameraPosition && (f.uniforms.ucameraPosition.value = T.position.toArray()), m.current) {
      const R = m.current.getAverageFrequency();
      f.uniforms.uFreq.value = R / 256;
    }
  });
  function _() {
    p.current && (S ? p.current.pause() : p.current.play(), E(!S));
  }
  return /* @__PURE__ */ v.jsxs(
    "mesh",
    {
      onClick: _,
      castShadow: !0,
      ref: w,
      scale: [1, 1, 1],
      rotation: [Math.PI / 2, 0, 0],
      children: [
        y ? /* @__PURE__ */ v.jsx(
          Cr,
          {
            url: y,
            distance: 7,
            loop: !0,
            ref: p,
            autoplay: !0
          }
        ) : null,
        /* @__PURE__ */ v.jsx("icosahedronGeometry", { args: [4, 100] }),
        x === "halo" ? /* @__PURE__ */ v.jsx("haloBlobShaderMaterial", { transparent: !0 }) : x === "particle" ? /* @__PURE__ */ v.jsx("particleShaderMaterial", { transparent: !0 }) : /* @__PURE__ */ v.jsx("blobShaderMaterial", { transparent: !0 })
      ]
    }
  );
}
function Tr({
  audioUrl: y,
  enableZoom: x = !0,
  enablePan: p = !1,
  shaderType: m = "default"
}) {
  return /* @__PURE__ */ v.jsxs(
    Pr,
    {
      camera: { position: [0, 0, 10], fov: 50 },
      style: { background: "transparent" },
      children: [
        /* @__PURE__ */ v.jsx("ambientLight", { intensity: 0.5 }),
        /* @__PURE__ */ v.jsx("pointLight", { position: [10, 10, 10] }),
        m === "halo" ? /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
          /* @__PURE__ */ v.jsx(ee, { audioUrl: y, shaderType: "halo" }),
          /* @__PURE__ */ v.jsx(ee, { audioUrl: y, shaderType: "particle" })
        ] }) : /* @__PURE__ */ v.jsx(ee, { audioUrl: y, shaderType: m }),
        /* @__PURE__ */ v.jsx(Sr, { enableZoom: x, enablePan: p })
      ]
    }
  );
}
const zr = `
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
`, Fr = `
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
`, re = {
  vertexShader: zr,
  fragmentShader: Fr,
  uniforms: {
    uTime: { value: 0 },
    uFreq: { value: 0 },
    uIntensity: { value: 1.5 },
    transparent: !0
  }
}, jr = `
  uniform float uTime;
  uniform float uFreq;
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    
    // Simple position calculation - no time multiplication that causes expansion
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`, Or = `
  uniform float uTime;
  uniform float uFreq;
  uniform float uIntensity;
  uniform vec3 ucameraPosition;
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

  // Function to create moving particles that respond to audio and fresnel
  float particles(vec2 uv, float time, float freq, float fresnel) {
    float particleField = 0.0;
    
    // Create multiple layers of particles with different sizes
    for (int i = 0; i < 5; i++) {
      float layer = float(i);
      float speed = 0.3 + layer * 0.5;
      float scale = 200.0 + layer * 50.0; // Increased scale for more particles
      
      // Basic time-based flow - always active, larger movement
      vec2 timeFlow = vec2(
        sin(time * 0.2 + layer * 0.7) * 0.2,
        cos(time * 0.15 + layer * 1.2) * 0.2
      );
      
      // Audio-responsive movement
      vec2 audioOffset = vec2(
        sin(time * speed + layer * 1.5) * 0.1 * freq,
        cos(time * speed * 0.7 + layer * 2.1) * 0.1 * freq
      );
      
      // Apply audio offset to UV coordinates for particle movement
      vec2 animatedUV = uv + audioOffset + timeFlow;
      float noiseVal = noise(animatedUV * scale);
      
      // Adjust threshold based on fresnel - lower threshold in fresnel regions
      float baseThreshold = 0.99 + layer * 0.008; // Lowered base threshold for more particles
      float fresnelInfluence = fresnel * 1.0; // Increased fresnel influence
      float threshold = baseThreshold - fresnelInfluence;
      
      float particle = step(threshold, noiseVal);
      
      // Make particles respond to frequency (no time-based pulsing)
      float freqResponse = 1.0 + 0.3 * freq;
      particle *= freqResponse;
      
      // Particle size - always tiny
      float particleSize = 0.2;
      particleField += particle * particleSize;
    }
    
    return particleField;
  }

  void main() {
    // Calculate view direction from camera position for proper rim effect
    vec3 viewDirection = normalize(ucameraPosition - vPosition);
    
    // Calculate fresnel effect using dot product
    float fresnel = dot(vNormal, viewDirection);
    fresnel = 1.0 - fresnel; // Invert to get higher values at the rim

    float control = 3.5; // Control the sharpness of the rim (lower less sharp)
    fresnel = pow(fresnel, control); // Apply power for control over falloff and sharpness
    
    // Create particles that respond to audio
    float particleDensity = particles(vUv, uTime, uFreq, fresnel);
    
    // Basic lighting for depth
    vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
    float diffuse = max(0.0, dot(vNormal, lightDirection));
    
    // Colors
    vec3 baseColor = vec3(0.01, 0.02, 0.1); // Very dark navy
    vec3 rimColor = vec3(0.2, 0.4, 1.0); // Bright blue for halo
    vec3 particleColor = vec3(0.2, 0.4, 1.0); // Bright blue-white for particles
    
    // Start with base lighting
    vec3 finalColor = baseColor * (0.2 + 0.3 * diffuse);
    
    // Add the fresnel rim effect
    finalColor = mix(finalColor, rimColor, fresnel * 0.8);
    
    // Add particles on top with higher opacity
    if (particleDensity > 0.0) {
      finalColor = mix(finalColor, particleColor, particleDensity);
    }
    
    // Alpha - combine fresnel and particles with higher particle contribution
    float alpha = fresnel * 0.9;
    alpha = max(alpha, particleDensity * 0.8); // Increased particle alpha contribution
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`, te = {
  vertexShader: jr,
  fragmentShader: Or,
  uniforms: {
    uTime: { value: 0 },
    uFreq: { value: 0 },
    uIntensity: { value: 6 },
    ucameraPosition: { value: [0, 0, 10] },
    transparent: !0
  }
}, kr = `
  uniform float uTime;
  uniform float uFreq;
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`, Dr = `
  uniform float uTime;
  uniform float uFreq;
  uniform vec3 ucameraPosition;
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

  // Function to create moving particles that respond to audio and fresnel
  float particles(vec2 uv, float time, float freq, float fresnel) {
    float particleField = 0.0;
    
    // Create multiple layers of particles with different sizes
    for (int i = 0; i < 5; i++) {
      float layer = float(i);
      float speed = 0.3 + layer * 0.5;
      float scale = 200.0 + layer * 50.0; // Increased scale for more particles
      
      // Basic time-based flow - always active, larger movement
      vec2 timeFlow = vec2(
        sin(time * 0.2 + layer * 0.7) * 0.2,
        cos(time * 0.15 + layer * 1.2) * 0.2
      );
      
      // Audio-responsive movement
      vec2 audioOffset = vec2(
        sin(time * speed + layer * 1.5) * 0.05 * freq,
        cos(time * speed * 0.7 + layer * 2.1) * 0.05 * freq
      );
      
      // Apply audio offset to UV coordinates for particle movement
      vec2 animatedUV = uv + audioOffset + timeFlow;
      float noiseVal = noise(animatedUV * scale);
      
      // Adjust threshold based on fresnel - lower threshold in fresnel regions
      float baseThreshold = 0.99 + layer * 0.008; // Lowered base threshold for more particles
      float fresnelInfluence = fresnel * 0.95; // Increased fresnel influence
      float threshold = baseThreshold - fresnelInfluence;
      
      float particle = step(threshold, noiseVal);
      
      // Make particles respond to frequency (no time-based pulsing)
      float freqResponse = 1.0 + 0.3 * freq;
      particle *= freqResponse;
      
      // Particle size - always tiny
      float particleSize = 0.2;
      particleField += particle * particleSize;
    }
    
    return particleField;
  }

  void main() {
    // Calculate view direction from camera position for proper rim effect
    vec3 viewDirection = normalize(ucameraPosition - vPosition);
    
    // Calculate fresnel effect using dot product for particle distribution
    float fresnel = dot(vNormal, viewDirection);
    fresnel = 1.0 - fresnel; // Invert to get higher values at the rim
    fresnel = pow(fresnel, 3.5); // Apply power for control over falloff and sharpness
    
    // Create particles that respond to audio
    float particleDensity = particles(vUv, uTime, uFreq, fresnel);
    
    // Particle color and alpha - separate from rim
    vec3 particleColor = vec3(0.1, 0.4, 0.5); // Darker aqua with gray/navy tones
    float alpha = particleDensity * 1.0; // Separate alpha for particles
    
    gl_FragColor = vec4(particleColor, alpha);
  }
`, ae = {
  vertexShader: kr,
  fragmentShader: Dr,
  uniforms: {
    uTime: { value: 0 },
    uFreq: { value: 0 },
    uIntensity: { value: 6 },
    ucameraPosition: { value: [0, 0, 10] },
    transparent: !0
  }
}, Ar = ie(
  re.uniforms,
  re.vertexShader,
  re.fragmentShader
), Mr = ie(
  te.uniforms,
  te.vertexShader,
  te.fragmentShader
), qr = ie(
  ae.uniforms,
  ae.vertexShader,
  ae.fragmentShader
);
wr({
  BlobShaderMaterial: Ar,
  HaloBlobShaderMaterial: Mr,
  ParticleShaderMaterial: qr,
  Mesh: De.Mesh,
  IcosahedronGeometry: _r
});
function Wr({
  audioUrl: y,
  width: x,
  height: p,
  className: m,
  enableZoom: S = !0,
  enablePan: E = !1,
  shaderType: w = "default"
}) {
  const _ = {
    width: x || "100%",
    height: p || "400px"
  };
  return /* @__PURE__ */ v.jsx("div", { style: _, className: m, children: /* @__PURE__ */ v.jsx(
    Tr,
    {
      audioUrl: y,
      enableZoom: S,
      enablePan: E,
      shaderType: w
    }
  ) });
}
export {
  Wr as BlobComponent,
  Wr as BlobComponentDefault,
  ee as BlobMesh,
  Ar as BlobShaderMaterial,
  Mr as HaloBlobShaderMaterial,
  qr as ParticleShaderMaterial,
  Tr as ShaderScene,
  re as blobShaderConfig,
  te as haloBlobShaderConfig,
  ae as particleShaderConfig
};
//# sourceMappingURL=index.js.map
