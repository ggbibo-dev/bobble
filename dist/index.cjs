"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const O=require("react"),re=require("@react-three/fiber"),te=require("@react-three/drei"),Oe=require("three");function mr(h){const c=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(h){for(const g in h)if(g!=="default"){const p=Object.getOwnPropertyDescriptor(h,g);Object.defineProperty(c,g,p.get?p:{enumerable:!0,get:()=>h[g]})}}return c.default=h,Object.freeze(c)}const je=mr(Oe);var ee={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze;function hr(){if(ze)return N;ze=1;var h=O,c=Symbol.for("react.element"),g=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,j=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function T(E,f,w){var y,R={},C=null,$=null;w!==void 0&&(C=""+w),f.key!==void 0&&(C=""+f.key),f.ref!==void 0&&($=f.ref);for(y in f)p.call(f,y)&&!P.hasOwnProperty(y)&&(R[y]=f[y]);if(E&&E.defaultProps)for(y in f=E.defaultProps,f)R[y]===void 0&&(R[y]=f[y]);return{$$typeof:c,type:E,key:C,ref:$,props:R,_owner:j.current}}return N.Fragment=g,N.jsx=T,N.jsxs=T,N}var q={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Se;function yr(){return Se||(Se=1,process.env.NODE_ENV!=="production"&&function(){var h=O,c=Symbol.for("react.element"),g=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),E=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),ne=Symbol.iterator,De="@@iterator";function Fe(e){if(e===null||typeof e!="object")return null;var r=ne&&e[ne]||e[De];return typeof r=="function"?r:null}var k=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function v(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ae("error",e,t)}}function Ae(e,r,t){{var n=k.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var l=t.map(function(o){return String(o)});l.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,l)}}var Me=!1,Ie=!1,Ne=!1,qe=!1,$e=!1,ae;ae=Symbol.for("react.module.reference");function We(e){return!!(typeof e=="string"||typeof e=="function"||e===p||e===P||$e||e===j||e===w||e===y||qe||e===$||Me||Ie||Ne||typeof e=="object"&&e!==null&&(e.$$typeof===C||e.$$typeof===R||e.$$typeof===T||e.$$typeof===E||e.$$typeof===f||e.$$typeof===ae||e.getModuleId!==void 0))}function Ye(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function oe(e){return e.displayName||"Context"}function x(e){if(e==null)return null;if(typeof e.tag=="number"&&v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case g:return"Portal";case P:return"Profiler";case j:return"StrictMode";case w:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case E:var r=e;return oe(r)+".Consumer";case T:var t=e;return oe(t._context)+".Provider";case f:return Ye(e,e.render,"ForwardRef");case R:var n=e.displayName||null;return n!==null?n:x(e.type)||"Memo";case C:{var i=e,l=i._payload,o=i._init;try{return x(o(l))}catch{return null}}}return null}var z=Object.assign,A=0,ie,le,se,ue,ce,fe,ve;function de(){}de.__reactDisabledLog=!0;function Le(){{if(A===0){ie=console.log,le=console.info,se=console.warn,ue=console.error,ce=console.group,fe=console.groupCollapsed,ve=console.groupEnd;var e={configurable:!0,enumerable:!0,value:de,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}A++}}function Ve(){{if(A--,A===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:z({},e,{value:ie}),info:z({},e,{value:le}),warn:z({},e,{value:se}),error:z({},e,{value:ue}),group:z({},e,{value:ce}),groupCollapsed:z({},e,{value:fe}),groupEnd:z({},e,{value:ve})})}A<0&&v("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var U=k.ReactCurrentDispatcher,B;function W(e,r,t){{if(B===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);B=n&&n[1]||""}return`
`+B+e}}var G=!1,Y;{var Ue=typeof WeakMap=="function"?WeakMap:Map;Y=new Ue}function ge(e,r){if(!e||G)return"";{var t=Y.get(e);if(t!==void 0)return t}var n;G=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var l;l=U.current,U.current=null,Le();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(m){n=m}Reflect.construct(e,[],o)}else{try{o.call()}catch(m){n=m}e.call(o.prototype)}}else{try{throw Error()}catch(m){n=m}e()}}catch(m){if(m&&n&&typeof m.stack=="string"){for(var a=m.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,u=d.length-1;s>=1&&u>=0&&a[s]!==d[u];)u--;for(;s>=1&&u>=0;s--,u--)if(a[s]!==d[u]){if(s!==1||u!==1)do if(s--,u--,u<0||a[s]!==d[u]){var b=`
`+a[s].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),typeof e=="function"&&Y.set(e,b),b}while(s>=1&&u>=0);break}}}finally{G=!1,U.current=l,Ve(),Error.prepareStackTrace=i}var F=e?e.displayName||e.name:"",S=F?W(F):"";return typeof e=="function"&&Y.set(e,S),S}function Be(e,r,t){return ge(e,!1)}function Ge(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function L(e,r,t){if(e==null)return"";if(typeof e=="function")return ge(e,Ge(e));if(typeof e=="string")return W(e);switch(e){case w:return W("Suspense");case y:return W("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return Be(e.render);case R:return L(e.type,r,t);case C:{var n=e,i=n._payload,l=n._init;try{return L(l(i),r,t)}catch{}}}return""}var M=Object.prototype.hasOwnProperty,pe={},me=k.ReactDebugCurrentFrame;function V(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);me.setExtraStackFrame(t)}else me.setExtraStackFrame(null)}function Je(e,r,t,n,i){{var l=Function.call.bind(M);for(var o in e)if(l(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var d=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(V(i),v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),V(null)),a instanceof Error&&!(a.message in pe)&&(pe[a.message]=!0,V(i),v("Failed %s type: %s",t,a.message),V(null))}}}var Ke=Array.isArray;function J(e){return Ke(e)}function Xe(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function He(e){try{return he(e),!1}catch{return!0}}function he(e){return""+e}function ye(e){if(He(e))return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Xe(e)),he(e)}var I=k.ReactCurrentOwner,Ze={key:!0,ref:!0,__self:!0,__source:!0},be,xe,K;K={};function Qe(e){if(M.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function er(e){if(M.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function rr(e,r){if(typeof e.ref=="string"&&I.current&&r&&I.current.stateNode!==r){var t=x(I.current.type);K[t]||(v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',x(I.current.type),e.ref),K[t]=!0)}}function tr(e,r){{var t=function(){be||(be=!0,v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function nr(e,r){{var t=function(){xe||(xe=!0,v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ar=function(e,r,t,n,i,l,o){var a={$$typeof:c,type:e,key:r,ref:t,props:o,_owner:l};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function or(e,r,t,n,i){{var l,o={},a=null,d=null;t!==void 0&&(ye(t),a=""+t),er(r)&&(ye(r.key),a=""+r.key),Qe(r)&&(d=r.ref,rr(r,i));for(l in r)M.call(r,l)&&!Ze.hasOwnProperty(l)&&(o[l]=r[l]);if(e&&e.defaultProps){var s=e.defaultProps;for(l in s)o[l]===void 0&&(o[l]=s[l])}if(a||d){var u=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&tr(o,u),d&&nr(o,u)}return ar(e,a,d,i,n,I.current,o)}}var X=k.ReactCurrentOwner,_e=k.ReactDebugCurrentFrame;function D(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);_e.setExtraStackFrame(t)}else _e.setExtraStackFrame(null)}var H;H=!1;function Z(e){return typeof e=="object"&&e!==null&&e.$$typeof===c}function Pe(){{if(X.current){var e=x(X.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ir(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Ee={};function lr(e){{var r=Pe();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Re(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=lr(r);if(Ee[t])return;Ee[t]=!0;var n="";e&&e._owner&&e._owner!==X.current&&(n=" It was passed a child from "+x(e._owner.type)+"."),D(e),v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),D(null)}}function we(e,r){{if(typeof e!="object")return;if(J(e))for(var t=0;t<e.length;t++){var n=e[t];Z(n)&&Re(n,r)}else if(Z(e))e._store&&(e._store.validated=!0);else if(e){var i=Fe(e);if(typeof i=="function"&&i!==e.entries)for(var l=i.call(e),o;!(o=l.next()).done;)Z(o.value)&&Re(o.value,r)}}}function sr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===f||r.$$typeof===R))t=r.propTypes;else return;if(t){var n=x(r);Je(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!H){H=!0;var i=x(r);v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ur(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){D(e),v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),D(null);break}}e.ref!==null&&(D(e),v("Invalid attribute `ref` supplied to `React.Fragment`."),D(null))}}var Te={};function Ce(e,r,t,n,i,l){{var o=We(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=ir(i);d?a+=d:a+=Pe();var s;e===null?s="null":J(e)?s="array":e!==void 0&&e.$$typeof===c?(s="<"+(x(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var u=or(e,r,t,i,l);if(u==null)return u;if(o){var b=r.children;if(b!==void 0)if(n)if(J(b)){for(var F=0;F<b.length;F++)we(b[F],e);Object.freeze&&Object.freeze(b)}else v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else we(b,e)}if(M.call(r,"key")){var S=x(e),m=Object.keys(r).filter(function(pr){return pr!=="key"}),Q=m.length>0?"{key: someKey, "+m.join(": ..., ")+": ...}":"{key: someKey}";if(!Te[S+Q]){var gr=m.length>0?"{"+m.join(": ..., ")+": ...}":"{}";v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Q,S,gr,S),Te[S+Q]=!0}}return e===p?ur(u):sr(u),u}}function cr(e,r,t){return Ce(e,r,t,!0)}function fr(e,r,t){return Ce(e,r,t,!1)}var vr=fr,dr=cr;q.Fragment=p,q.jsx=vr,q.jsxs=dr}()),q}process.env.NODE_ENV==="production"?ee.exports=hr():ee.exports=yr();var _=ee.exports;const br=te.shaderMaterial({uTime:0,uFreq:0,uIntensity:1.5,transparent:!0},`
    uniform float uTime;
    uniform float uFreq;
    varying float vDisplacement;
    varying vec3 vNormal;

    vec3 mod289(vec3 x)
    {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 mod289(vec4 x)
    {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 permute(vec4 x)
    {
      return mod289(((x*34.0)+10.0)*x);
    }

    vec4 taylorInvSqrt(vec4 r)
    {
      return 1.79284291400159 - 0.85373472095314 * r;
    }

    vec3 fade(vec3 t) {
      return t*t*t*(t*(t*6.0-15.0)+10.0);
    }

    // Classic Perlin noise, periodic variant
    float pnoise(vec3 P, vec3 rep)
    {
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
    `,`
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
    `);re.extend({BlobShaderMaterial:br,Mesh:je.Mesh,IcosahedronGeometry:Oe.IcosahedronGeometry});const xr=({audioUrl:h})=>{const c=O.useRef(null),g=O.useRef(),[p,j]=O.useState(!0),P=O.useRef(null);O.useEffect(()=>{c.current&&(g.current=new je.AudioAnalyser(c.current,32))},[c]),re.useFrame(({clock:E})=>{var f;if((f=P.current)!=null&&f.material&&(P.current.material.uniforms.uTime.value=E.getElapsedTime(),g.current)){const w=g.current.getAverageFrequency();P.current.material.uniforms.uFreq.value=w/256}});const T=()=>{c.current&&(p?c.current.pause():c.current.play(),j(!p))};return _.jsxs("mesh",{onClick:T,castShadow:!0,ref:P,scale:[1,1,1],rotation:[Math.PI/2,0,0],children:[_.jsx(te.PositionalAudio,{url:h,distance:7,loop:!0,ref:c,autoplay:!0}),_.jsx("icosahedronGeometry",{args:[4,100]}),_.jsx("blobShaderMaterial",{transparent:!0})]})},ke=({audioUrl:h="test.mp3",width:c=600,height:g=600,className:p=""})=>_.jsx("div",{className:`blobble-component ${p}`,style:{width:`${c}px`,height:`${g}px`,position:"relative"},children:_.jsxs(re.Canvas,{camera:{position:[0,0,10],fov:50},style:{background:"transparent"},children:[_.jsx("ambientLight",{intensity:.5}),_.jsx("pointLight",{position:[10,10,10]}),_.jsx(xr,{audioUrl:h}),_.jsx(te.OrbitControls,{enableZoom:!1,enablePan:!1})]})});exports.BlobComponent=ke;exports.BlobComponentDefault=ke;
//# sourceMappingURL=index.cjs.map
