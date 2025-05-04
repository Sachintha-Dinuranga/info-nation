import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";

test("renders the Navbar with the InfoNation logo", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  const logoElement = screen.getByText(/InfoNation/i);
  expect(logoElement).toBeInTheDocument();
});
