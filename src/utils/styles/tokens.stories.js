import React from "react";

import ds from "./design-system";

const PaletteView = ({ color }) => (
  <div
    style={{
      width: "10vw",
      height: "10vw",
      backgroundColor: color,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid white"
    }}
  ></div>
);

export default {
  title: "Global styles",
};

const palette = ds.get("colors.brand");

export const Tokens = () => (
  <div>
    {Object.entries(palette).map(p => (
      <>
      <br />
      {p[0]}
      <PaletteView key={p[0]} color={p[1]}>{p[0]}</PaletteView>
      </>
    ))}
  </div>
);
