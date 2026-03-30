"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const O=require("react"),ie=require("@react-three/fiber"),ke=require("three"),V=require("@react-three/drei");function Cr(p){const m=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(p){for(const c in p)if(c!=="default"){const u=Object.getOwnPropertyDescriptor(p,c);Object.defineProperty(m,c,u.get?u:{enumerable:!0,get:()=>p[c]})}}return m.default=p,Object.freeze(m)}const De=Cr(ke);var oe={exports:{}},I={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe;function Rr(){if(Oe)return I;Oe=1;var p=O,m=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,x=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function _(S,d,T){var v,P={},R=null,B=null;T!==void 0&&(R=""+T),d.key!==void 0&&(R=""+d.key),d.ref!==void 0&&(B=d.ref);for(v in d)u.call(d,v)&&!E.hasOwnProperty(v)&&(P[v]=d[v]);if(S&&S.defaultProps)for(v in d=S.defaultProps,d)P[v]===void 0&&(P[v]=d[v]);return{$$typeof:m,type:S,key:R,ref:B,props:P,_owner:x.current}}return I.Fragment=c,I.jsx=_,I.jsxs=_,I}var N={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je;function Er(){return je||(je=1,process.env.NODE_ENV!=="production"&&function(){var p=O,m=Symbol.for("react.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),S=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),B=Symbol.for("react.offscreen"),ne=Symbol.iterator,Ue="@@iterator";function We(e){if(e===null||typeof e!="object")return null;var r=ne&&e[ne]||e[Ue];return typeof r=="function"?r:null}var j=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function h(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),a=1;a<r;a++)t[a-1]=arguments[a];$e("error",e,t)}}function $e(e,r,t){{var a=j.ReactDebugCurrentFrame,n=a.getStackAddendum();n!==""&&(r+="%s",t=t.concat([n]));var l=t.map(function(i){return String(i)});l.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,l)}}var Ye=!1,Le=!1,Ge=!1,Je=!1,He=!1,le;le=Symbol.for("react.module.reference");function Ke(e){return!!(typeof e=="string"||typeof e=="function"||e===u||e===E||He||e===x||e===T||e===v||Je||e===B||Ye||Le||Ge||typeof e=="object"&&e!==null&&(e.$$typeof===R||e.$$typeof===P||e.$$typeof===_||e.$$typeof===S||e.$$typeof===d||e.$$typeof===le||e.getModuleId!==void 0))}function Xe(e,r,t){var a=e.displayName;if(a)return a;var n=r.displayName||r.name||"";return n!==""?t+"("+n+")":t}function se(e){return e.displayName||"Context"}function C(e){if(e==null)return null;if(typeof e.tag=="number"&&h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case u:return"Fragment";case c:return"Portal";case E:return"Profiler";case x:return"StrictMode";case T:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case S:var r=e;return se(r)+".Consumer";case _:var t=e;return se(t._context)+".Provider";case d:return Xe(e,e.render,"ForwardRef");case P:var a=e.displayName||null;return a!==null?a:C(e.type)||"Memo";case R:{var n=e,l=n._payload,i=n._init;try{return C(i(l))}catch{return null}}}return null}var z=Object.assign,M=0,ce,fe,ue,ve,de,pe,me;function he(){}he.__reactDisabledLog=!0;function Ze(){{if(M===0){ce=console.log,fe=console.info,ue=console.warn,ve=console.error,de=console.group,pe=console.groupCollapsed,me=console.groupEnd;var e={configurable:!0,enumerable:!0,value:he,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}M++}}function Qe(){{if(M--,M===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:z({},e,{value:ce}),info:z({},e,{value:fe}),warn:z({},e,{value:ue}),error:z({},e,{value:ve}),group:z({},e,{value:de}),groupCollapsed:z({},e,{value:pe}),groupEnd:z({},e,{value:me})})}M<0&&h("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var H=j.ReactCurrentDispatcher,K;function U(e,r,t){{if(K===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);K=a&&a[1]||""}return`
`+K+e}}var X=!1,W;{var er=typeof WeakMap=="function"?WeakMap:Map;W=new er}function ge(e,r){if(!e||X)return"";{var t=W.get(e);if(t!==void 0)return t}var a;X=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var l;l=H.current,H.current=null,Ze();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(y){a=y}Reflect.construct(e,[],i)}else{try{i.call()}catch(y){a=y}e.call(i.prototype)}}else{try{throw Error()}catch(y){a=y}e()}}catch(y){if(y&&a&&typeof y.stack=="string"){for(var o=y.stack.split(`
`),g=a.stack.split(`
`),s=o.length-1,f=g.length-1;s>=1&&f>=0&&o[s]!==g[f];)f--;for(;s>=1&&f>=0;s--,f--)if(o[s]!==g[f]){if(s!==1||f!==1)do if(s--,f--,f<0||o[s]!==g[f]){var w=`
`+o[s].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),typeof e=="function"&&W.set(e,w),w}while(s>=1&&f>=0);break}}}finally{X=!1,H.current=l,Qe(),Error.prepareStackTrace=n}var D=e?e.displayName||e.name:"",F=D?U(D):"";return typeof e=="function"&&W.set(e,F),F}function rr(e,r,t){return ge(e,!1)}function tr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function $(e,r,t){if(e==null)return"";if(typeof e=="function")return ge(e,tr(e));if(typeof e=="string")return U(e);switch(e){case T:return U("Suspense");case v:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case d:return rr(e.render);case P:return $(e.type,r,t);case R:{var a=e,n=a._payload,l=a._init;try{return $(l(n),r,t)}catch{}}}return""}var A=Object.prototype.hasOwnProperty,ye={},be=j.ReactDebugCurrentFrame;function Y(e){if(e){var r=e._owner,t=$(e.type,e._source,r?r.type:null);be.setExtraStackFrame(t)}else be.setExtraStackFrame(null)}function ar(e,r,t,a,n){{var l=Function.call.bind(A);for(var i in e)if(l(e,i)){var o=void 0;try{if(typeof e[i]!="function"){var g=Error((a||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw g.name="Invariant Violation",g}o=e[i](r,i,a,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){o=s}o&&!(o instanceof Error)&&(Y(n),h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",t,i,typeof o),Y(null)),o instanceof Error&&!(o.message in ye)&&(ye[o.message]=!0,Y(n),h("Failed %s type: %s",t,o.message),Y(null))}}}var or=Array.isArray;function Z(e){return or(e)}function ir(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function nr(e){try{return xe(e),!1}catch{return!0}}function xe(e){return""+e}function Pe(e){if(nr(e))return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ir(e)),xe(e)}var q=j.ReactCurrentOwner,lr={key:!0,ref:!0,__self:!0,__source:!0},we,_e,Q;Q={};function sr(e){if(A.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function cr(e){if(A.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function fr(e,r){if(typeof e.ref=="string"&&q.current&&r&&q.current.stateNode!==r){var t=C(q.current.type);Q[t]||(h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',C(q.current.type),e.ref),Q[t]=!0)}}function ur(e,r){{var t=function(){we||(we=!0,h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function vr(e,r){{var t=function(){_e||(_e=!0,h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var dr=function(e,r,t,a,n,l,i){var o={$$typeof:m,type:e,key:r,ref:t,props:i,_owner:l};return o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(o,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(o,"_source",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o};function pr(e,r,t,a,n){{var l,i={},o=null,g=null;t!==void 0&&(Pe(t),o=""+t),cr(r)&&(Pe(r.key),o=""+r.key),sr(r)&&(g=r.ref,fr(r,n));for(l in r)A.call(r,l)&&!lr.hasOwnProperty(l)&&(i[l]=r[l]);if(e&&e.defaultProps){var s=e.defaultProps;for(l in s)i[l]===void 0&&(i[l]=s[l])}if(o||g){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;o&&ur(i,f),g&&vr(i,f)}return dr(e,o,g,n,a,q.current,i)}}var ee=j.ReactCurrentOwner,Se=j.ReactDebugCurrentFrame;function k(e){if(e){var r=e._owner,t=$(e.type,e._source,r?r.type:null);Se.setExtraStackFrame(t)}else Se.setExtraStackFrame(null)}var re;re=!1;function te(e){return typeof e=="object"&&e!==null&&e.$$typeof===m}function Ce(){{if(ee.current){var e=C(ee.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function mr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Re={};function hr(e){{var r=Ce();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ee(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=hr(r);if(Re[t])return;Re[t]=!0;var a="";e&&e._owner&&e._owner!==ee.current&&(a=" It was passed a child from "+C(e._owner.type)+"."),k(e),h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,a),k(null)}}function Te(e,r){{if(typeof e!="object")return;if(Z(e))for(var t=0;t<e.length;t++){var a=e[t];te(a)&&Ee(a,r)}else if(te(e))e._store&&(e._store.validated=!0);else if(e){var n=We(e);if(typeof n=="function"&&n!==e.entries)for(var l=n.call(e),i;!(i=l.next()).done;)te(i.value)&&Ee(i.value,r)}}}function gr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===d||r.$$typeof===P))t=r.propTypes;else return;if(t){var a=C(r);ar(t,e.props,"prop",a,e)}else if(r.PropTypes!==void 0&&!re){re=!0;var n=C(r);h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",n||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function yr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var a=r[t];if(a!=="children"&&a!=="key"){k(e),h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),k(null);break}}e.ref!==null&&(k(e),h("Invalid attribute `ref` supplied to `React.Fragment`."),k(null))}}var ze={};function Fe(e,r,t,a,n,l){{var i=Ke(e);if(!i){var o="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var g=mr(n);g?o+=g:o+=Ce();var s;e===null?s="null":Z(e)?s="array":e!==void 0&&e.$$typeof===m?(s="<"+(C(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,o)}var f=pr(e,r,t,n,l);if(f==null)return f;if(i){var w=r.children;if(w!==void 0)if(a)if(Z(w)){for(var D=0;D<w.length;D++)Te(w[D],e);Object.freeze&&Object.freeze(w)}else h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Te(w,e)}if(A.call(r,"key")){var F=C(e),y=Object.keys(r).filter(function(Sr){return Sr!=="key"}),ae=y.length>0?"{key: someKey, "+y.join(": ..., ")+": ...}":"{key: someKey}";if(!ze[F+ae]){var _r=y.length>0?"{"+y.join(": ..., ")+": ...}":"{}";h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ae,F,_r,F),ze[F+ae]=!0}}return e===u?yr(f):gr(f),f}}function br(e,r,t){return Fe(e,r,t,!0)}function xr(e,r,t){return Fe(e,r,t,!1)}var Pr=xr,wr=br;N.Fragment=u,N.jsx=Pr,N.jsxs=wr}()),N}process.env.NODE_ENV==="production"?oe.exports=Rr():oe.exports=Er();var b=oe.exports;const Tr=["default","halo"],zr=["default","halo","particle"],Me={default:["default"],halo:["halo","particle"]};function Ae({audioUrl:p,shaderType:m="default"}){const c=O.useRef(null),u=O.useRef(),[x,E]=O.useState(!0),_=O.useRef(null);O.useEffect(()=>{c.current&&(u.current=new De.AudioAnalyser(c.current,32))},[c]),ie.useFrame(({clock:d,camera:T})=>{var P;if(!((P=_.current)!=null&&P.material))return;const v=_.current.material;if(v.uniforms.uTime.value=d.getElapsedTime(),v.uniforms.ucameraPosition&&(v.uniforms.ucameraPosition.value=T.position.toArray()),u.current){const R=u.current.getAverageFrequency();v.uniforms.uFreq.value=R/256}});function S(){c.current&&(x?c.current.pause():c.current.play(),E(!x))}return b.jsxs("mesh",{onClick:S,castShadow:!0,ref:_,scale:[1,1,1],rotation:[Math.PI/2,0,0],children:[p?b.jsx(V.PositionalAudio,{url:p,distance:7,loop:!0,ref:c,autoplay:!0}):null,b.jsx("icosahedronGeometry",{args:[4,100]}),m==="halo"?b.jsx("haloBlobShaderMaterial",{transparent:!0}):m==="particle"?b.jsx("particleShaderMaterial",{transparent:!0}):b.jsx("blobShaderMaterial",{transparent:!0})]})}function qe({audioUrl:p,enableZoom:m=!0,enablePan:c=!1,shaderType:u="default"}){return b.jsxs(ie.Canvas,{camera:{position:[0,0,10],fov:50},style:{background:"transparent"},children:[b.jsx("ambientLight",{intensity:.5}),b.jsx("pointLight",{position:[10,10,10]}),Me[u].map(x=>b.jsx(Ae,{audioUrl:p,shaderType:x},`${u}-${x}`)),b.jsx(V.OrbitControls,{enableZoom:m,enablePan:c})]})}const Fr=`
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
`,Or=`
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
`,L={vertexShader:Fr,fragmentShader:Or,uniforms:{uTime:{value:0},uFreq:{value:0},uIntensity:{value:1.5},transparent:!0}},jr=`
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
`,kr=`
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
`,G={vertexShader:jr,fragmentShader:kr,uniforms:{uTime:{value:0},uFreq:{value:0},uIntensity:{value:6},ucameraPosition:{value:[0,0,10]},transparent:!0}},Dr=`
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
`,Mr=`
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
`,J={vertexShader:Dr,fragmentShader:Mr,uniforms:{uTime:{value:0},uFreq:{value:0},uIntensity:{value:6},ucameraPosition:{value:[0,0,10]},transparent:!0}},Ie=V.shaderMaterial(L.uniforms,L.vertexShader,L.fragmentShader),Ne=V.shaderMaterial(G.uniforms,G.vertexShader,G.fragmentShader),Ve=V.shaderMaterial(J.uniforms,J.vertexShader,J.fragmentShader);ie.extend({BlobShaderMaterial:Ie,HaloBlobShaderMaterial:Ne,ParticleShaderMaterial:Ve,Mesh:De.Mesh,IcosahedronGeometry:ke.IcosahedronGeometry});function Be({audioUrl:p,width:m,height:c,className:u,enableZoom:x=!0,enablePan:E=!1,shaderType:_="default"}){const S={width:m||"100%",height:c||"400px"};return b.jsx("div",{style:S,className:u,children:b.jsx(qe,{audioUrl:p,enableZoom:x,enablePan:E,shaderType:_})})}exports.BlobComponent=Be;exports.BlobComponentDefault=Be;exports.BlobMesh=Ae;exports.BlobShaderMaterial=Ie;exports.HaloBlobShaderMaterial=Ne;exports.ParticleShaderMaterial=Ve;exports.ShaderScene=qe;exports.blobRenderPasses=zr;exports.blobShaderConfig=L;exports.blobVariantPasses=Me;exports.haloBlobShaderConfig=G;exports.particleShaderConfig=J;exports.publicBlobVariants=Tr;
//# sourceMappingURL=index.cjs.map
