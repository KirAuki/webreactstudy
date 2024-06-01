import React from "react";
import AlbumImage from "./albumImage";
import AlbumInfo from "./albumInfo";
import styled from "styled-components";
import { SongCardProps } from "./types";

const SongCardWrapper = styled.div`
  width: 100%;
  height: 62%;
  background-color: rgba(49, 51, 54, 0.353);
  border-bottom-right-radius: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const SongCard: React.FC<SongCardProps> = ({ album }) => {
  return (
    <SongCardWrapper>
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </SongCardWrapper>
  );
};

export default SongCard;
