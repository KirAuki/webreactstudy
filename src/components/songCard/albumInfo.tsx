import React from "react";
import * as S from "./albumInfoStyle";
import { AlbumInfoProps } from "./types";

const AlbumInfo: React.FC<AlbumInfoProps> = ({ album }) => {
  if (!album) {
    return (
      <S.AlbumInfoCard>
        <S.AlbumNameContainer>
          <S.Marquee>
            <S.AlbumInfoText>Album not selected</S.AlbumInfoText>
          </S.Marquee>
        </S.AlbumNameContainer>
      </S.AlbumInfoCard>
    );
  }

  const artists = album?.artists?.map((artist) => artist.name) || [];

  const albumInfoText = `${album?.name} is an ${album?.album_type} by ${artists.join(
    ", ",
  )} with ${album?.total_tracks} track(s)`;

  return (
    <S.AlbumInfoCard>
      <S.AlbumNameContainer>
        <S.Marquee>
          <S.AlbumInfoText>{album?.name + " - " + artists.join(", ")}</S.AlbumInfoText>
        </S.Marquee>
      </S.AlbumNameContainer>
      <S.AlbumInfoContainer>
        <S.AlbumInfoText>{albumInfoText}</S.AlbumInfoText>
      </S.AlbumInfoContainer>
      <S.AlbumReleaseDate>
        <S.AlbumInfoText>Release Date: {album?.release_date}</S.AlbumInfoText>
      </S.AlbumReleaseDate>
    </S.AlbumInfoCard>
  );
};

export default AlbumInfo;
