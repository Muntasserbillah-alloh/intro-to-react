import { useState } from "react";

const colors = [
  { color: "#C1BDB3", value: "gray" }, // Gray
  { color: "#58737D", value: "blue" }, // Blue
  { color: "#545454", value: "black" }, // Black
  { color: "#CBA5A5", value: "pink" }, // Pink
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
                ? "3px solid  rgba(23, 24, 59, 0.1)"
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
