import React from "react";
import * as S from "./albumImageStyle";
import { AlbumImageProps } from "./types";

const AlbumImage: React.FC<AlbumImageProps> = ({ url }) => {
  return (
    <S.AlbumImageWrapper data-testid="album-image-wrapper">
      {!url ? (
        <>
          <S.Image data-testid="placeholder-image" className="albumImage-art-placeholder" />
          <S.Shadow data-testid="placeholder-shadow" className="albumImage-shadow-placeholder" />
        </>
      ) : (
        <>
          <S.Image src={url} alt="album art" className="albumImage-art" />
          <S.Shadow data-testid="placeholder-shadow" />
          <S.Shadow />
        </>
      )}
    </S.AlbumImageWrapper>
  );
};

export default AlbumImage;
