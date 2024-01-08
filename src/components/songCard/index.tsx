import React from "react";
import AlbumImage from "./albumImage";
import AlbumInfo from "./albumInfo";
import "./songCard.css";

interface Artist {
    name: string;
}

interface Album {
    images: { url: string }[];
    name: string;
    artists: Artist[];
    album_type: string;
    total_tracks: number;
    release_date: string;
}

interface SongCardProps {
    album: Album;
}

const SongCard: React.FC<SongCardProps> = ({ album }) => {
    return (
        <div className="songCard-body flex">
            <AlbumImage url={album?.images[0]?.url} />
            <AlbumInfo album={album} />
        </div>
    );
}

export default SongCard;
