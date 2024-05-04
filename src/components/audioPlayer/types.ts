export interface Artist {
    name: string;
}
  
export  interface Album {
    artists: Artist[];
}

export interface Track {
    name: string;
    album: Album;
}
  
export interface AudioPlayerProps {
    currentTrack: Track;
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    total: { track: { preview_url: string } }[];
}