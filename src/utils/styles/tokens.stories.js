import React from "react";

const PaletteView = ({ color }) => (
  <div
    bgColor={color}
    style={{
      width: "10vw",
      height: "10vw",
      backgroundColor: color,
    }}
  ></div>
);

export default {
  title: "Global styles",
};

export const Tokens = () => (
  <div>
    <PaletteView color="red"></PaletteView>
    <PaletteView color="blue"></PaletteView>
    <PaletteView color="green"></PaletteView>
  </div>
);
