import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ProfilePage from "./index";

describe("ProfilePage component", () => {
  it("renders loading message when profileData is null", () => {
    render(<ProfilePage />);
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });

  // You can add more tests for other scenarios or behaviors of your component here
});
