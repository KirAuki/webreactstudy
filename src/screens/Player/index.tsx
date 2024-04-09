import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard";
import AudioPLayer from "../../components/audioPlayer";
import Queue from "../../components/queue";
import styled from "styled-components";

const LeftPlayerBody = styled.div`
  width: 68%;
  margin-right: 2%;
  height: 100%;
`;
const RightPlayerBody = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (location.state) {
      apiClient.get("playlists/" + location.state?.id + "/tracks").then((res) => {
        setTracks(res.data.items);
        setCurrentTrack(res.data?.items[0]?.track);
        setIsLoading(false);
      });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <div className="screen-container flex">
      <LeftPlayerBody>
        <AudioPLayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </LeftPlayerBody>
      <RightPlayerBody>
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </RightPlayerBody>
    </div>
  );
};

export default Player;
