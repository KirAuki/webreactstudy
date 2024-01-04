import React from "react";
import "./albumInfo.css";

interface AlbumInfoProps {
  album: {
    name: string;
    artists: { name: string }[];
    album_type: string;
    total_tracks: number;
    release_date: string;
  };
}

const AlbumInfo: React.FC<AlbumInfoProps> = ({ album }) => {
  if (!album) {
            
    return (
    <div className="albumInfo-card">
        <div className="albumName-container">
            <div className="marquee"><p>Album not selected</p></div>
        </div>
    </div>
     
    )
  }
  const artists = album?.artists?.map((artist) => artist.name) || [];

  return (
    <div className="albumInfo-card">
      <div className="albumName-container">
        <div className="marquee">
          <p>{album?.name + " - " + artists.join(", ")}</p>
        </div>
      </div>
      <div className="album-info">
        <p>{`${album?.name} is an ${album?.album_type} by ${artists.join(
          ", "
        )} with ${album?.total_tracks} track(s)`}</p>
      </div>
      <div className="album-release">
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  );
}

export default AlbumInfo;
