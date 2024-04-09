import styled from "styled-components";

export const PlayerBody = styled.div`
  width: 100%;
  height: 40%;
  margin: 3% 0%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const SongTitle = styled.div`
  text-align: center;
  font-size: 58px;
  font-weight: bold;
  margin: 0px;
  color: var(--theme-second-color);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const SongArtist = styled.div`
  color: var(--theme-second-color);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const PlayerRightBottom = styled.div`
  align-items: center;
  width: 100%;
  flex-direction: column;
  display: flex;
`;
