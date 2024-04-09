import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import AlbumImage from "./albumImage";

describe("AlbumImage", () => {
  it("renders without crashing", () => {
    render(<AlbumImage />);
    const albumImageWrapper = screen.getByTestId("album-image-wrapper");
    expect(albumImageWrapper).toBeInTheDocument();
  });

  it("renders placeholder image when url prop is not provided", () => {
    render(<AlbumImage />);
    const placeholderImage = screen.getByTestId("placeholder-image");
    expect(placeholderImage).toBeInTheDocument();
  });

  it("renders album image when url prop is provided", () => {
    const url = "https://example.com/album-art.jpg";
    render(<AlbumImage url={url} />);
    const albumImage = screen.getByAltText("album art");
    expect(albumImage).toBeInTheDocument();
    expect(albumImage).toHaveAttribute("src", url);
  });
});
