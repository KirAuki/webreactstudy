import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Queue from "./index";

describe("Queue", () => {
  it("renders without crashing", () => {
    render(<Queue setCurrentIndex={() => {}} />);
    const upNextText = screen.getByText(/up next/i);
    expect(upNextText).toBeInTheDocument();
  });

  it("displays 'no tracks' message when tracks prop is not provided", () => {
    render(<Queue setCurrentIndex={() => {}} />);
    const noTracksMessage = screen.getByText(/no tracks/i);
    expect(noTracksMessage).toBeInTheDocument();
  });

  it("renders tracks list when tracks prop is provided", () => {
    const tracks = [{ track: { name: "Track 1" } }, { track: { name: "Track 2" } }];
    render(<Queue tracks={tracks} setCurrentIndex={() => {}} />);
    const trackNames = tracks.map((track) => track.track.name);
    trackNames.forEach((trackName) => {
      const trackElement = screen.getByText(trackName);
      expect(trackElement).toBeInTheDocument();
    });
  });
});
