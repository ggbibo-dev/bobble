"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const j=require("react"),te=require("@react-three/fiber"),je=require("three"),ne=require("@react-three/drei");function xr(g){const s=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(g){for(const v in g)if(v!=="default"){const h=Object.getOwnPropertyDescriptor(g,v);Object.defineProperty(s,v,h.get?h:{enumerable:!0,get:()=>g[v]})}}return s.default=g,Object.freeze(s)}const ke=xr(je);var re={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze;function _r(){if(ze)return N;ze=1;var g=j,s=Symbol.for("react.element"),v=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,S=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function E(R,f,w){var p,T={},C=null,W=null;w!==void 0&&(C=""+w),f.key!==void 0&&(C=""+f.key),f.ref!==void 0&&(W=f.ref);for(p in f)h.call(f,p)&&!_.hasOwnProperty(p)&&(T[p]=f[p]);if(R&&R.defaultProps)for(p in f=R.defaultProps,f)T[p]===void 0&&(T[p]=f[p]);return{$$typeof:s,type:R,key:C,ref:W,props:T,_owner:S.current}}return N.Fragment=v,N.jsx=E,N.jsxs=E,N}var q={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe;function Pr(){return Oe||(Oe=1,process.env.NODE_ENV!=="production"&&function(){var g=j,s=Symbol.for("react.element"),v=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),R=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),ae=Symbol.iterator,Ie="@@iterator";function Ne(e){if(e===null||typeof e!="object")return null;var r=ae&&e[ae]||e[Ie];return typeof r=="function"?r:null}var k=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function d(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];qe("error",e,t)}}function qe(e,r,t){{var n=k.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var l=t.map(function(o){return String(o)});l.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,l)}}var We=!1,Ye=!1,$e=!1,Le=!1,Be=!1,oe;oe=Symbol.for("react.module.reference");function Ve(e){return!!(typeof e=="string"||typeof e=="function"||e===h||e===_||Be||e===S||e===w||e===p||Le||e===W||We||Ye||$e||typeof e=="object"&&e!==null&&(e.$$typeof===C||e.$$typeof===T||e.$$typeof===E||e.$$typeof===R||e.$$typeof===f||e.$$typeof===oe||e.getModuleId!==void 0))}function Ue(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ie(e){return e.displayName||"Context"}function P(e){if(e==null)return null;if(typeof e.tag=="number"&&d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case h:return"Fragment";case v:return"Portal";case _:return"Profiler";case S:return"StrictMode";case w:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case R:var r=e;return ie(r)+".Consumer";case E:var t=e;return ie(t._context)+".Provider";case f:return Ue(e,e.render,"ForwardRef");case T:var n=e.displayName||null;return n!==null?n:P(e.type)||"Memo";case C:{var i=e,l=i._payload,o=i._init;try{return P(o(l))}catch{return null}}}return null}var z=Object.assign,M=0,le,se,ue,ce,fe,ve,de;function ge(){}ge.__reactDisabledLog=!0;function Ge(){{if(M===0){le=console.log,se=console.info,ue=console.warn,ce=console.error,fe=console.group,ve=console.groupCollapsed,de=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ge,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}M++}}function Je(){{if(M--,M===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:z({},e,{value:le}),info:z({},e,{value:se}),warn:z({},e,{value:ue}),error:z({},e,{value:ce}),group:z({},e,{value:fe}),groupCollapsed:z({},e,{value:ve}),groupEnd:z({},e,{value:de})})}M<0&&d("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var U=k.ReactCurrentDispatcher,G;function Y(e,r,t){{if(G===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);G=n&&n[1]||""}return`
`+G+e}}var J=!1,$;{var Ke=typeof WeakMap=="function"?WeakMap:Map;$=new Ke}function pe(e,r){if(!e||J)return"";{var t=$.get(e);if(t!==void 0)return t}var n;J=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var l;l=U.current,U.current=null,Ge();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(y){n=y}Reflect.construct(e,[],o)}else{try{o.call()}catch(y){n=y}e.call(o.prototype)}}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var a=y.stack.split(`
`),m=n.stack.split(`
`),u=a.length-1,c=m.length-1;u>=1&&c>=0&&a[u]!==m[c];)c--;for(;u>=1&&c>=0;u--,c--)if(a[u]!==m[c]){if(u!==1||c!==1)do if(u--,c--,c<0||a[u]!==m[c]){var b=`
`+a[u].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),typeof e=="function"&&$.set(e,b),b}while(u>=1&&c>=0);break}}}finally{J=!1,U.current=l,Je(),Error.prepareStackTrace=i}var F=e?e.displayName||e.name:"",O=F?Y(F):"";return typeof e=="function"&&$.set(e,O),O}function Xe(e,r,t){return pe(e,!1)}function He(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function L(e,r,t){if(e==null)return"";if(typeof e=="function")return pe(e,He(e));if(typeof e=="string")return Y(e);switch(e){case w:return Y("Suspense");case p:return Y("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return Xe(e.render);case T:return L(e.type,r,t);case C:{var n=e,i=n._payload,l=n._init;try{return L(l(i),r,t)}catch{}}}return""}var A=Object.prototype.hasOwnProperty,me={},he=k.ReactDebugCurrentFrame;function B(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);he.setExtraStackFrame(t)}else he.setExtraStackFrame(null)}function Ze(e,r,t,n,i){{var l=Function.call.bind(A);for(var o in e)if(l(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var m=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw m.name="Invariant Violation",m}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(u){a=u}a&&!(a instanceof Error)&&(B(i),d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),B(null)),a instanceof Error&&!(a.message in me)&&(me[a.message]=!0,B(i),d("Failed %s type: %s",t,a.message),B(null))}}}var Qe=Array.isArray;function K(e){return Qe(e)}function er(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function rr(e){try{return ye(e),!1}catch{return!0}}function ye(e){return""+e}function be(e){if(rr(e))return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",er(e)),ye(e)}var I=k.ReactCurrentOwner,tr={key:!0,ref:!0,__self:!0,__source:!0},xe,_e,X;X={};function nr(e){if(A.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ar(e){if(A.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function or(e,r){if(typeof e.ref=="string"&&I.current&&r&&I.current.stateNode!==r){var t=P(I.current.type);X[t]||(d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',P(I.current.type),e.ref),X[t]=!0)}}function ir(e,r){{var t=function(){xe||(xe=!0,d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function lr(e,r){{var t=function(){_e||(_e=!0,d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var sr=function(e,r,t,n,i,l,o){var a={$$typeof:s,type:e,key:r,ref:t,props:o,_owner:l};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function ur(e,r,t,n,i){{var l,o={},a=null,m=null;t!==void 0&&(be(t),a=""+t),ar(r)&&(be(r.key),a=""+r.key),nr(r)&&(m=r.ref,or(r,i));for(l in r)A.call(r,l)&&!tr.hasOwnProperty(l)&&(o[l]=r[l]);if(e&&e.defaultProps){var u=e.defaultProps;for(l in u)o[l]===void 0&&(o[l]=u[l])}if(a||m){var c=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&ir(o,c),m&&lr(o,c)}return sr(e,a,m,i,n,I.current,o)}}var H=k.ReactCurrentOwner,Pe=k.ReactDebugCurrentFrame;function D(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);Pe.setExtraStackFrame(t)}else Pe.setExtraStackFrame(null)}var Z;Z=!1;function Q(e){return typeof e=="object"&&e!==null&&e.$$typeof===s}function Ee(){{if(H.current){var e=P(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function cr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Re={};function fr(e){{var r=Ee();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function we(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=fr(r);if(Re[t])return;Re[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+P(e._owner.type)+"."),D(e),d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),D(null)}}function Te(e,r){{if(typeof e!="object")return;if(K(e))for(var t=0;t<e.length;t++){var n=e[t];Q(n)&&we(n,r)}else if(Q(e))e._store&&(e._store.validated=!0);else if(e){var i=Ne(e);if(typeof i=="function"&&i!==e.entries)for(var l=i.call(e),o;!(o=l.next()).done;)Q(o.value)&&we(o.value,r)}}}function vr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===f||r.$$typeof===T))t=r.propTypes;else return;if(t){var n=P(r);Ze(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Z){Z=!0;var i=P(r);d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function dr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){D(e),d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),D(null);break}}e.ref!==null&&(D(e),d("Invalid attribute `ref` supplied to `React.Fragment`."),D(null))}}var Se={};function Ce(e,r,t,n,i,l){{var o=Ve(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var m=cr(i);m?a+=m:a+=Ee();var u;e===null?u="null":K(e)?u="array":e!==void 0&&e.$$typeof===s?(u="<"+(P(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):u=typeof e,d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",u,a)}var c=ur(e,r,t,i,l);if(c==null)return c;if(o){var b=r.children;if(b!==void 0)if(n)if(K(b)){for(var F=0;F<b.length;F++)Te(b[F],e);Object.freeze&&Object.freeze(b)}else d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Te(b,e)}if(A.call(r,"key")){var O=P(e),y=Object.keys(r).filter(function(br){return br!=="key"}),ee=y.length>0?"{key: someKey, "+y.join(": ..., ")+": ...}":"{key: someKey}";if(!Se[O+ee]){var yr=y.length>0?"{"+y.join(": ..., ")+": ...}":"{}";d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ee,O,yr,O),Se[O+ee]=!0}}return e===h?dr(c):vr(c),c}}function gr(e,r,t){return Ce(e,r,t,!0)}function pr(e,r,t){return Ce(e,r,t,!1)}var mr=pr,hr=gr;q.Fragment=h,q.jsx=mr,q.jsxs=hr}()),q}process.env.NODE_ENV==="production"?re.exports=_r():re.exports=Pr();var x=re.exports;function De({audioUrl:g}){const s=j.useRef(null),v=j.useRef(),[h,S]=j.useState(!0),_=j.useRef(null);j.useEffect(()=>{s.current&&(v.current=new ke.AudioAnalyser(s.current,32))},[s]),te.useFrame(({clock:R})=>{var w;if(!((w=_.current)!=null&&w.material))return;const f=_.current.material;if(f.uniforms.uTime.value=R.getElapsedTime(),v.current){const p=v.current.getAverageFrequency();f.uniforms.uFreq.value=p/256}});function E(){s.current&&(h?s.current.pause():s.current.play(),S(!h))}return x.jsxs("mesh",{onClick:E,castShadow:!0,ref:_,scale:[1,1,1],rotation:[Math.PI/2,0,0],children:[x.jsx(ne.PositionalAudio,{url:g,distance:7,loop:!0,ref:s,autoplay:!0}),x.jsx("icosahedronGeometry",{args:[4,100]}),x.jsx("blobShaderMaterial",{transparent:!0})]})}function Fe({audioUrl:g,enableZoom:s=!0,enablePan:v=!1}){return x.jsxs(te.Canvas,{camera:{position:[0,0,10],fov:50},style:{background:"transparent"},children:[x.jsx("ambientLight",{intensity:.5}),x.jsx("pointLight",{position:[10,10,10]}),x.jsx(De,{audioUrl:g}),x.jsx(ne.OrbitControls,{enableZoom:s,enablePan:v})]})}const Er=`
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
`,Rr=`
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
`,V={vertexShader:Er,fragmentShader:Rr,uniforms:{uTime:{value:0},uFreq:{value:0},uIntensity:{value:1.5},transparent:!0}},Me=ne.shaderMaterial(V.uniforms,V.vertexShader,V.fragmentShader);te.extend({BlobShaderMaterial:Me,Mesh:ke.Mesh,IcosahedronGeometry:je.IcosahedronGeometry});function Ae({audioUrl:g="test.mp3",width:s,height:v,className:h,enableZoom:S=!0,enablePan:_=!1}){const E={width:s||"100%",height:v||"400px"};return x.jsx("div",{style:E,className:h,children:x.jsx(Fe,{audioUrl:g,enableZoom:S,enablePan:_})})}exports.BlobComponent=Ae;exports.BlobComponentDefault=Ae;exports.BlobMesh=De;exports.BlobShaderMaterial=Me;exports.ShaderScene=Fe;exports.blobShaderConfig=V;
//# sourceMappingURL=index.cjs.map
