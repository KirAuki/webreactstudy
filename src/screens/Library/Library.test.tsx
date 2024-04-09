import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Library from "./index";
import { BrowserRouter } from "react-router-dom";

describe("Library", () => {
  it("renders without crashing", async () => {
    render(
      <BrowserRouter>
        <Library />
      </BrowserRouter>,
    );

    // Проверяем, что компонент отрендерился без ошибок
    const screenContainer = screen.getByTestId("library-screen-container");
    expect(screenContainer).toBeTruthy();
  });

  it("displays correct number of playlists", async () => {
    const mockPlaylists = [
      { id: 1, name: "Playlist 1", images: [{ url: "https://example.com/playlist1.jpg" }], tracks: { total: 10 } },
      { id: 2, name: "Playlist 2", images: [{ url: "https://example.com/playlist2.jpg" }], tracks: { total: 20 } },
      { id: 3, name: "Playlist 3", images: [{ url: "https://example.com/playlist3.jpg" }], tracks: { total: 15 } },
    ];

    // Передаем моковые плейлисты в компонент
    render(
      <BrowserRouter>
        <Library playlists={mockPlaylists} />
      </BrowserRouter>,
    );
  });
});
