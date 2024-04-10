import styled from "styled-components";

export const AlbumImageWrapper = styled.div`
  width: 80%;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

export const Image = styled.img`
  margin-top: 20px;
  border-radius: 30px;
  width: 100%;
  aspect-ratio: 1;
`;

export const Shadow = styled.div`
  -webkit-filter: blur(10px);
  filter: blur(10px);
  width: 90%;
  position: absolute;
  z-index: -1;
  top: 20px;
`;
