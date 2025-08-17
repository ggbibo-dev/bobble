"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const j=require("react"),oe=require("@react-three/fiber"),ke=require("three"),G=require("@react-three/drei");function Pr(p){const g=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(p){for(const u in p)if(u!=="default"){const f=Object.getOwnPropertyDescriptor(p,u);Object.defineProperty(g,u,f.get?f:{enumerable:!0,get:()=>p[u]})}}return g.default=p,Object.freeze(g)}const Fe=Pr(ke);var ae={exports:{}},q={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe;function Er(){if(Oe)return q;Oe=1;var p=j,g=Symbol.for("react.element"),u=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,S=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function _(P,v,C){var d,E={},T=null,W=null;C!==void 0&&(T=""+C),v.key!==void 0&&(T=""+v.key),v.ref!==void 0&&(W=v.ref);for(d in v)f.call(v,d)&&!w.hasOwnProperty(d)&&(E[d]=v[d]);if(P&&P.defaultProps)for(d in v=P.defaultProps,v)E[d]===void 0&&(E[d]=v[d]);return{$$typeof:g,type:P,key:T,ref:W,props:E,_owner:S.current}}return q.Fragment=u,q.jsx=_,q.jsxs=_,q}var N={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je;function Rr(){return je||(je=1,process.env.NODE_ENV!=="production"&&function(){var p=j,g=Symbol.for("react.element"),u=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),P=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),ne=Symbol.iterator,Ne="@@iterator";function We(e){if(e===null||typeof e!="object")return null;var r=ne&&e[ne]||e[Ne];return typeof r=="function"?r:null}var k=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function m(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),a=1;a<r;a++)t[a-1]=arguments[a];Ue("error",e,t)}}function Ue(e,r,t){{var a=k.ReactDebugCurrentFrame,i=a.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var l=t.map(function(n){return String(n)});l.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,l)}}var Ye=!1,$e=!1,Be=!1,Ve=!1,Le=!1,ie;ie=Symbol.for("react.module.reference");function Ge(e){return!!(typeof e=="string"||typeof e=="function"||e===f||e===w||Le||e===S||e===C||e===d||Ve||e===W||Ye||$e||Be||typeof e=="object"&&e!==null&&(e.$$typeof===T||e.$$typeof===E||e.$$typeof===_||e.$$typeof===P||e.$$typeof===v||e.$$typeof===ie||e.getModuleId!==void 0))}function Je(e,r,t){var a=e.displayName;if(a)return a;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function le(e){return e.displayName||"Context"}function R(e){if(e==null)return null;if(typeof e.tag=="number"&&m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case f:return"Fragment";case u:return"Portal";case w:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case P:var r=e;return le(r)+".Consumer";case _:var t=e;return le(t._context)+".Provider";case v:return Je(e,e.render,"ForwardRef");case E:var a=e.displayName||null;return a!==null?a:R(e.type)||"Memo";case T:{var i=e,l=i._payload,n=i._init;try{return R(n(l))}catch{return null}}}return null}var z=Object.assign,M=0,se,ue,ce,fe,ve,de,me;function pe(){}pe.__reactDisabledLog=!0;function He(){{if(M===0){se=console.log,ue=console.info,ce=console.warn,fe=console.error,ve=console.group,de=console.groupCollapsed,me=console.groupEnd;var e={configurable:!0,enumerable:!0,value:pe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}M++}}function Ke(){{if(M--,M===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:z({},e,{value:se}),info:z({},e,{value:ue}),warn:z({},e,{value:ce}),error:z({},e,{value:fe}),group:z({},e,{value:ve}),groupCollapsed:z({},e,{value:de}),groupEnd:z({},e,{value:me})})}M<0&&m("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var J=k.ReactCurrentDispatcher,H;function U(e,r,t){{if(H===void 0)try{throw Error()}catch(i){var a=i.stack.trim().match(/\n( *(at )?)/);H=a&&a[1]||""}return`
`+H+e}}var K=!1,Y;{var Xe=typeof WeakMap=="function"?WeakMap:Map;Y=new Xe}function ge(e,r){if(!e||K)return"";{var t=Y.get(e);if(t!==void 0)return t}var a;K=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var l;l=J.current,J.current=null,He();try{if(r){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(y){a=y}Reflect.construct(e,[],n)}else{try{n.call()}catch(y){a=y}e.call(n.prototype)}}else{try{throw Error()}catch(y){a=y}e()}}catch(y){if(y&&a&&typeof y.stack=="string"){for(var o=y.stack.split(`
`),h=a.stack.split(`
`),s=o.length-1,c=h.length-1;s>=1&&c>=0&&o[s]!==h[c];)c--;for(;s>=1&&c>=0;s--,c--)if(o[s]!==h[c]){if(s!==1||c!==1)do if(s--,c--,c<0||o[s]!==h[c]){var b=`
`+o[s].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),typeof e=="function"&&Y.set(e,b),b}while(s>=1&&c>=0);break}}}finally{K=!1,J.current=l,Ke(),Error.prepareStackTrace=i}var D=e?e.displayName||e.name:"",O=D?U(D):"";return typeof e=="function"&&Y.set(e,O),O}function Ze(e,r,t){return ge(e,!1)}function Qe(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function $(e,r,t){if(e==null)return"";if(typeof e=="function")return ge(e,Qe(e));if(typeof e=="string")return U(e);switch(e){case C:return U("Suspense");case d:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case v:return Ze(e.render);case E:return $(e.type,r,t);case T:{var a=e,i=a._payload,l=a._init;try{return $(l(i),r,t)}catch{}}}return""}var A=Object.prototype.hasOwnProperty,he={},ye=k.ReactDebugCurrentFrame;function B(e){if(e){var r=e._owner,t=$(e.type,e._source,r?r.type:null);ye.setExtraStackFrame(t)}else ye.setExtraStackFrame(null)}function er(e,r,t,a,i){{var l=Function.call.bind(A);for(var n in e)if(l(e,n)){var o=void 0;try{if(typeof e[n]!="function"){var h=Error((a||"React class")+": "+t+" type `"+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[n]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw h.name="Invariant Violation",h}o=e[n](r,n,a,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){o=s}o&&!(o instanceof Error)&&(B(i),m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",t,n,typeof o),B(null)),o instanceof Error&&!(o.message in he)&&(he[o.message]=!0,B(i),m("Failed %s type: %s",t,o.message),B(null))}}}var rr=Array.isArray;function X(e){return rr(e)}function tr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function ar(e){try{return be(e),!1}catch{return!0}}function be(e){return""+e}function xe(e){if(ar(e))return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",tr(e)),be(e)}var I=k.ReactCurrentOwner,or={key:!0,ref:!0,__self:!0,__source:!0},_e,Pe,Z;Z={};function nr(e){if(A.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ir(e){if(A.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function lr(e,r){if(typeof e.ref=="string"&&I.current&&r&&I.current.stateNode!==r){var t=R(I.current.type);Z[t]||(m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',R(I.current.type),e.ref),Z[t]=!0)}}function sr(e,r){{var t=function(){_e||(_e=!0,m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function ur(e,r){{var t=function(){Pe||(Pe=!0,m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var cr=function(e,r,t,a,i,l,n){var o={$$typeof:g,type:e,key:r,ref:t,props:n,_owner:l};return o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(o,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(o,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o};function fr(e,r,t,a,i){{var l,n={},o=null,h=null;t!==void 0&&(xe(t),o=""+t),ir(r)&&(xe(r.key),o=""+r.key),nr(r)&&(h=r.ref,lr(r,i));for(l in r)A.call(r,l)&&!or.hasOwnProperty(l)&&(n[l]=r[l]);if(e&&e.defaultProps){var s=e.defaultProps;for(l in s)n[l]===void 0&&(n[l]=s[l])}if(o||h){var c=typeof e=="function"?e.displayName||e.name||"Unknown":e;o&&sr(n,c),h&&ur(n,c)}return cr(e,o,h,i,a,I.current,n)}}var Q=k.ReactCurrentOwner,Ee=k.ReactDebugCurrentFrame;function F(e){if(e){var r=e._owner,t=$(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}var ee;ee=!1;function re(e){return typeof e=="object"&&e!==null&&e.$$typeof===g}function Re(){{if(Q.current){var e=R(Q.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function vr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Se={};function dr(e){{var r=Re();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ce(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=dr(r);if(Se[t])return;Se[t]=!0;var a="";e&&e._owner&&e._owner!==Q.current&&(a=" It was passed a child from "+R(e._owner.type)+"."),F(e),m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,a),F(null)}}function we(e,r){{if(typeof e!="object")return;if(X(e))for(var t=0;t<e.length;t++){var a=e[t];re(a)&&Ce(a,r)}else if(re(e))e._store&&(e._store.validated=!0);else if(e){var i=We(e);if(typeof i=="function"&&i!==e.entries)for(var l=i.call(e),n;!(n=l.next()).done;)re(n.value)&&Ce(n.value,r)}}}function mr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===v||r.$$typeof===E))t=r.propTypes;else return;if(t){var a=R(r);er(t,e.props,"prop",a,e)}else if(r.PropTypes!==void 0&&!ee){ee=!0;var i=R(r);m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function pr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var a=r[t];if(a!=="children"&&a!=="key"){F(e),m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),F(null);break}}e.ref!==null&&(F(e),m("Invalid attribute `ref` supplied to `React.Fragment`."),F(null))}}var Te={};function ze(e,r,t,a,i,l){{var n=Ge(e);if(!n){var o="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var h=vr(i);h?o+=h:o+=Re();var s;e===null?s="null":X(e)?s="array":e!==void 0&&e.$$typeof===g?(s="<"+(R(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,o)}var c=fr(e,r,t,i,l);if(c==null)return c;if(n){var b=r.children;if(b!==void 0)if(a)if(X(b)){for(var D=0;D<b.length;D++)we(b[D],e);Object.freeze&&Object.freeze(b)}else m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else we(b,e)}if(A.call(r,"key")){var O=R(e),y=Object.keys(r).filter(function(_r){return _r!=="key"}),te=y.length>0?"{key: someKey, "+y.join(": ..., ")+": ...}":"{key: someKey}";if(!Te[O+te]){var xr=y.length>0?"{"+y.join(": ..., ")+": ...}":"{}";m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,te,O,xr,O),Te[O+te]=!0}}return e===f?pr(c):mr(c),c}}function gr(e,r,t){return ze(e,r,t,!0)}function hr(e,r,t){return ze(e,r,t,!1)}var yr=hr,br=gr;N.Fragment=f,N.jsx=yr,N.jsxs=br}()),N}process.env.NODE_ENV==="production"?ae.exports=Er():ae.exports=Rr();var x=ae.exports;function De({audioUrl:p,shaderType:g="default"}){const u=j.useRef(null),f=j.useRef(),[S,w]=j.useState(!0),_=j.useRef(null);j.useEffect(()=>{u.current&&(f.current=new Fe.AudioAnalyser(u.current,32))},[u]),oe.useFrame(({clock:v})=>{var d;if(!((d=_.current)!=null&&d.material))return;const C=_.current.material;if(C.uniforms.uTime.value=v.getElapsedTime(),f.current){const E=f.current.getAverageFrequency();C.uniforms.uFreq.value=E/256}});function P(){u.current&&(S?u.current.pause():u.current.play(),w(!S))}return x.jsxs("mesh",{onClick:P,castShadow:!0,ref:_,scale:[1,1,1],rotation:[Math.PI/2,0,0],children:[x.jsx(G.PositionalAudio,{url:p,distance:7,loop:!0,ref:u,autoplay:!0}),x.jsx("icosahedronGeometry",{args:[4,100]}),g==="halo"?x.jsx("haloBlobShaderMaterial",{transparent:!0}):x.jsx("blobShaderMaterial",{transparent:!0})]})}function Me({audioUrl:p,enableZoom:g=!0,enablePan:u=!1,shaderType:f="default"}){return x.jsxs(oe.Canvas,{camera:{position:[0,0,10],fov:50},style:{background:"transparent"},children:[x.jsx("ambientLight",{intensity:.5}),x.jsx("pointLight",{position:[10,10,10]}),x.jsx(De,{audioUrl:p,shaderType:f}),x.jsx(G.OrbitControls,{enableZoom:g,enablePan:u})]})}const Sr=`
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
`,Cr=`
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
`,V={vertexShader:Sr,fragmentShader:Cr,uniforms:{uTime:{value:0},uFreq:{value:0},uIntensity:{value:1.5},transparent:!0}},wr=`
  uniform float uTime;
  uniform float uFreq;
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position*uTime, 1.0);
  }
`,Tr=`
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

  // Function to create moving particles that respond to audio
  float particles(vec2 uv, float time, float freq) {
    float particleField = 0.0;
    
    // Create multiple layers of particles with different speeds and sizes
    for (int i = 0; i < 5; i++) {
      float layer = float(i);
      float speed = 0.3 + layer * 0.5;
      float scale = 120.0 + layer * 30.0; // Increased scale for more particles
      
      // Make particles move based on frequency - much more subtle movement
      vec2 audioOffset = vec2(
        sin(time * speed + layer * 1.5) * 0.05 * freq,
        cos(time * speed * 0.7 + layer * 2.1) * 0.05 * freq
      );
      
      vec2 movingUv = uv + audioOffset;
      
      float noiseVal = noise(movingUv * scale + time * speed);
      float threshold = 0.95 + layer * 0.003; // Lower threshold for more particles
      float particle = step(threshold, noiseVal);
      
      // Make particles pulse with frequency - much more subtle
      float pulse = 1.0 + 0.2 * sin(time * 0.5 + layer) * freq * 0.5;
      particle *= pulse;
      
      // Same small size for all layers - tiny dots
      float particleSize = 0.1;
      particleField += particle * particleSize;
    }
    
    return particleField;
  }

  void main() {
    // Use a simpler rim calculation based on UV coordinates and normal
    float rimFactor = 1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0));
    
    // Create smooth rim gradient
    float rimWidth = 0.4;
    float rimIntensity = smoothstep(0.0, rimWidth, rimFactor);
    
    // Create moving particles that respond to audio
    float particleDensity = particles(vUv, uTime, uFreq);
    
    // Dark navy colors
    vec3 particleColor = vec3(0.01, 0.03, 0.25); // Dark navy for particles
    vec3 rimColor = vec3(0.02, 0.05, 0.3); // Slightly lighter navy for rim
    
    // Create the final color - rim + particles
    vec3 finalColor;
    float alpha;
    
    // Base color is transparent
    finalColor = vec3(0.0);
    alpha = 0.0;
    
    // Add rim effect
    if (rimIntensity > 0.0) {
      finalColor = mix(finalColor, rimColor, rimIntensity * 0.8);
      alpha = max(alpha, rimIntensity * 0.6);
    }
    
    // Add particles on top
    if (particleDensity > 0.0) {
      finalColor = mix(finalColor, particleColor, particleDensity * 0.7);
      alpha = max(alpha, particleDensity * 0.5);
    }
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`,L={vertexShader:wr,fragmentShader:Tr,uniforms:{uTime:{value:0},uFreq:{value:0},uIntensity:{value:6},transparent:!0}},Ae=G.shaderMaterial(V.uniforms,V.vertexShader,V.fragmentShader),Ie=G.shaderMaterial(L.uniforms,L.vertexShader,L.fragmentShader);oe.extend({BlobShaderMaterial:Ae,HaloBlobShaderMaterial:Ie,Mesh:Fe.Mesh,IcosahedronGeometry:ke.IcosahedronGeometry});function qe({audioUrl:p="test.mp3",width:g,height:u,className:f,enableZoom:S=!0,enablePan:w=!1,shaderType:_="default"}){const P={width:g||"100%",height:u||"400px"};return x.jsx("div",{style:P,className:f,children:x.jsx(Me,{audioUrl:p,enableZoom:S,enablePan:w,shaderType:_})})}exports.BlobComponent=qe;exports.BlobComponentDefault=qe;exports.BlobMesh=De;exports.BlobShaderMaterial=Ae;exports.HaloBlobShaderMaterial=Ie;exports.ShaderScene=Me;exports.blobShaderConfig=V;exports.haloBlobShaderConfig=L;
//# sourceMappingURL=index.cjs.map
