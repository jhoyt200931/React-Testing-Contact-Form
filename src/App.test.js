import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

