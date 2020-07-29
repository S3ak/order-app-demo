import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders address", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/51 Main Rd, Rondebosch, Cape Town, 7700/i);
  expect(linkElement).toBeInTheDocument();
});
