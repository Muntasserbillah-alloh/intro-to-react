import { useState } from "react";

const colors = [
  { color: "#d9d9d9", value: "gray" }, // Gray
  { color: "#495464", value: "blue" }, // Blue
  { color: "#343a40", value: "black" }, // Black
  { color: "#c9ada7", value: "pink" }, // Pink
];

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState("gray");

  const handleColorChange = (value) => {
    setSelectedColor(value);
  };

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      {colors.map((colorOption) => (
        <div
          key={colorOption.value}
          onClick={() => handleColorChange(colorOption.value)}
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: colorOption.color,
            cursor: "pointer",
            border:
              selectedColor === colorOption.value
                ? "3px solid rgba(150, 139, 139, 0.5)"
                : "3px solid transparent",
            boxSizing: "border-box",
            transition: "border 0.3s ease",
          }}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
