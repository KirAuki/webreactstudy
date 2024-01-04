import React from "react";
import "./albumImage.css";

interface AlbumImageProps {
  url?: string;
}

const AlbumImage: React.FC<AlbumImageProps> = ({ url }) => {

  if (!url) {
    return (
      <div className="albumImage flex">
        {/* Placeholder or empty rectangle */}
        <div className="albumImage-art-placeholder"></div>
        <div className="albumImage-shadow-placeholder"></div>
      </div>
    );
  }
  return (
    <div className="albumImage flex">
      <img src={url} alt="album art" className="albumImage-art" />
      <div className="albumImage-shadow">
        <img src={url} alt="shadow" className="albumImage-shadow" />
      </div>
    </div>
  );
}

export default AlbumImage;