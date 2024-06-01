import { FC, useState, useRef, useEffect } from "react";
import Controls from "./controls";
import * as S from "./audioPlayerStyle";
import { AudioPlayerProps } from "./types";

const AudioPlayer: FC<AudioPlayerProps> = ({ currentTrack, currentIndex, setCurrentIndex, total }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioSrc = total[currentIndex]?.track.preview_url;

  const audioRef = useRef(new Audio(total[0]?.track.preview_url));

  const isReady = useRef(false);

  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else setCurrentIndex(0);
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };
  const artists = currentTrack?.album?.artists?.map((artist) => artist.name) || [];
  return (
    <S.PlayerBody>
      <S.SongTitle>{currentTrack?.name}</S.SongTitle>
      <S.SongArtist>{artists.join(" | ")}</S.SongArtist>
      <S.PlayerRightBottom>
        <Controls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          handleNext={handleNext}
          handlePrev={handlePrev}
          total={total}
        />
      </S.PlayerRightBottom>
    </S.PlayerBody>
  );
};

export default AudioPlayer;
