import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Player from "./index";
import { BrowserRouter } from "react-router-dom";

describe("Player", (test) => {
    test("renders without crashing", () => {
      const { container } = render(<BrowserRouter><Player /></BrowserRouter>);
      const screenContainer = container.querySelector(".screen-container");
      if (!screenContainer) throw new Error("Player screen container not found");
    }); 
});