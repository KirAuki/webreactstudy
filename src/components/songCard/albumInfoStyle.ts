import styled, { keyframes } from "styled-components";

export const AlbumInfoCard = styled.div`
  margin-top: 20px;
  width: 80%;
`;

export const AlbumNameContainer = styled.div`
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  font-weight: 700;
  color: var(--theme-second-color);
`;

const marqueeAnimation = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
`;

export const Marquee = styled.div`
  white-space: nowrap;
  display: inline-block;
  animation: ${marqueeAnimation} 12s linear infinite;
  padding-left: 100%;
`;

export const AlbumInfoText = styled.p`
  margin: 5px auto !important;
`;

export const AlbumInfoContainer = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--theme-second-color);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const AlbumReleaseDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: var(--theme-second-color);
  margin-top: 10px;
`;
