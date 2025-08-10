// src/BlobComponent.tsx
import { jsx } from "react/jsx-runtime";
var BlobComponent = ({
  text = "Blobble",
  onClick,
  className = ""
}) => {
  return /* @__PURE__ */ jsx(
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
export {
  BlobComponent,
  BlobComponent_default as BlobComponentDefault
};
//# sourceMappingURL=index.js.map