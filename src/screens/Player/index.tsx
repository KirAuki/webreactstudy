import React,{useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import './player.css'
import SongCard from "../../components/songCard";
import AudioPLayer from '../../components/audioPlayer';
import Queue from '../../components/queue';


const Player  = () => {
    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        if (location.state) {
          apiClient
            .get("playlists/" + location.state?.id + "/tracks")
            .then((res) => {
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
        <div className="left-player-body">
          <AudioPLayer
            currentTrack={currentTrack}
            total={tracks}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
        <div className="right-player-body">
          <SongCard album={currentTrack?.album} />
          <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
        </div>
      </div>
    )
}

export default Player


