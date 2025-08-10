"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  BlobComponent: () => BlobComponent,
  BlobComponentDefault: () => BlobComponent_default
});
module.exports = __toCommonJS(index_exports);

// src/BlobComponent.tsx
var import_fiber = require("@react-three/fiber");
var import_react = require("react");
var import_drei = require("@react-three/drei");
var import_three = require("three");
var THREE = __toESM(require("three"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var BlobShaderMaterial = (0, import_drei.shaderMaterial)(
  { uTime: 0, uFreq: 0, uIntensity: 1.5, transparent: true },
  // Vertex Shader
  `
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
    `,
  // Fragment Shader
  `
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
    `
);
(0, import_fiber.extend)({
  BlobShaderMaterial,
  Mesh: THREE.Mesh,
  IcosahedronGeometry: import_three.IcosahedronGeometry
});
var BlobMesh = ({ audioUrl }) => {
  const sound = (0, import_react.useRef)(null);
  const analyzer = (0, import_react.useRef)();
  const [play, setPlay] = (0, import_react.useState)(true);
  const meshRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (sound.current) {
      analyzer.current = new THREE.AudioAnalyser(sound.current, 32);
    }
  }, [sound]);
  (0, import_fiber.useFrame)(({ clock }) => {
    if (meshRef.current?.material) {
      meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
      if (analyzer.current) {
        const avgFreq = analyzer.current.getAverageFrequency();
        meshRef.current.material.uniforms.uFreq.value = avgFreq / 256;
      }
    }
  });
  const playMusic = () => {
    if (sound.current) {
      if (play) {
        sound.current.pause();
      } else {
        sound.current.play();
      }
      setPlay(!play);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "mesh",
    {
      onClick: playMusic,
      castShadow: true,
      ref: meshRef,
      scale: [1, 1, 1],
      rotation: [Math.PI / 2, 0, 0],
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_drei.PositionalAudio, { url: audioUrl, distance: 7, loop: true, ref: sound, autoplay: true }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("icosahedronGeometry", { args: [4, 100] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blobShaderMaterial", { transparent: true })
      ]
    }
  );
};
var BlobComponent = ({
  audioUrl = "test.mp3",
  width = 400,
  height = 400,
  className = ""
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: `blobble-component ${className}`,
      style: {
        width: `${width}px`,
        height: `${height}px`,
        position: "relative"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_fiber.Canvas,
        {
          camera: { position: [0, 0, 10], fov: 50 },
          style: { background: "transparent" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: 0.5 }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", { position: [10, 10, 10] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlobMesh, { audioUrl }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_drei.OrbitControls, { enableZoom: false, enablePan: false })
          ]
        }
      )
    }
  );
};
var BlobComponent_default = BlobComponent;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BlobComponent,
  BlobComponentDefault
});
//# sourceMappingURL=index.cjs.map