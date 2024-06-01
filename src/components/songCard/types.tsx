export interface AlbumImageProps {
  url?: string;
}

export interface AlbumInfoProps {
  album: {
    name: string;
    artists: { name: string }[];
    album_type: string;
    total_tracks: number;
    release_date: string;
  };
}

export interface Artist {
  name: string;
}

export interface Album {
  images: { url: string }[];
  name: string;
  artists: Artist[];
  album_type: string;
  total_tracks: number;
  release_date: string;
}

export interface SongCardProps {
  album: Album;
}
