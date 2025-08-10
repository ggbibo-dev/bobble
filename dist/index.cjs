"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  BlobComponent: () => BlobComponent,
  BlobComponentDefault: () => BlobComponent_default
});
module.exports = __toCommonJS(index_exports);

// src/BlobComponent.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var BlobComponent = ({
  text = "Blobble",
  onClick,
  className = ""
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: `blobble-component ${className}`,
      onClick,
      style: {
        padding: "12px 24px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: onClick ? "pointer" : "default",
        fontSize: "16px",
        fontWeight: "500",
        transition: "all 0.2s ease",
        display: "inline-block",
        textAlign: "center",
        minWidth: "120px"
      },
      onMouseEnter: (e) => {
        if (onClick) {
          e.currentTarget.style.backgroundColor = "#0056b3";
          e.currentTarget.style.transform = "scale(1.05)";
        }
      },
      onMouseLeave: (e) => {
        if (onClick) {
          e.currentTarget.style.backgroundColor = "#007bff";
          e.currentTarget.style.transform = "scale(1)";
        }
      },
      children: text
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