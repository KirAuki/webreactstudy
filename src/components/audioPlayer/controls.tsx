import React, {FC} from "react";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";
import * as S from "./controlsStyle";



interface ControlsProps {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  handleNext: () => void;
  handlePrev: () => void;
  total: { track: { preview_url: string } }[];
}


const Controls: FC<ControlsProps>= ({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
}) => {
  
  return (
    <IconContext.Provider value={{ size: "35px", color: "var(--theme-second-color)" }}>
          <S.ControlsWrapper>
              <S.ActionBtn onClick={handlePrev}>
                <IoPlaySkipBack />
              </S.ActionBtn>
              <S.PlayPauseBtn
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <FaPause /> : <IoPlay />}
              </S.PlayPauseBtn>
              <S.ActionBtn onClick={handleNext}>
                <IoPlaySkipForward />
              </S.ActionBtn>
          </S.ControlsWrapper>
      </IconContext.Provider>
  );
}

export default Controls