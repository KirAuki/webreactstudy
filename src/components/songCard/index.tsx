import React from "react";
import AlbumImage from "./albumImage";
import AlbumInfo from "./albumInfo";
import styled from 'styled-components';



const SongCardWrapper=styled.div`
    width: 100%;
    height: 62%;
    background-color: rgba(49, 51, 54, 0.353);
    border-bottom-right-radius: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
`

interface Artist {
    name: string;
}

interface Album {
    images: { url: string }[];
    name: string;
    artists: Artist[];
    album_type: string;
    total_tracks: number;
    release_date: string;
}

interface SongCardProps {
    album: Album;
}

const SongCard: React.FC<SongCardProps> = ({ album }) => {
    return (
        <SongCardWrapper>
            <AlbumImage url={album?.images[0]?.url} />
            <AlbumInfo album={album} />
        </SongCardWrapper>
    );
}

export default SongCard;
