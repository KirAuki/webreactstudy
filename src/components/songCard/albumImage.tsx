import React from "react";
import * as S from "./albumImageStyle";

interface AlbumImageProps {
  url?: string;
}

const AlbumImage: React.FC<AlbumImageProps> = ({ url }) => {
  return (
    <S.AlbumImageWrapper>
      {!url ? (
          <>
              <S.Image className="albumImage-art-placeholder" />
              <S.Shadow className="albumImage-shadow-placeholder" />
          </>
      ) : (
          <>
              <S.Image src={url} alt="album art" className="albumImage-art" />
              <S.Shadow />
          </>
      )}
    </S.AlbumImageWrapper>
  );
}

export default AlbumImage;