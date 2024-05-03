export interface Playlist {
  id: number;
  name: string;
  images?: { url: string }[];
  tracks: { total: number };
}

export interface LibraryProps {
  playlists?: Playlist[];
}
