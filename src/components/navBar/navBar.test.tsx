import { describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./index";

describe("NavBar", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument();
  });

  it("toggles theme when theme-toggle is clicked", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const themeToggle = screen.getByTestId("theme-toggle");
    fireEvent.click(themeToggle);
    expect(document.documentElement.getAttribute("data-theme")).toEqual("dark");
  });

  // Add more test cases as needed
});
