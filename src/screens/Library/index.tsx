/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{FC,useState, useEffect } from 'react'
import {Card, Col, Row } from 'antd';
import { useNavigate } from "react-router-dom";
import APIKit from "../../spotify";

interface Playlist {
    id: number;
    name: string;
    images?: { url: string }[];
    tracks: { total: number };
}



const Library : FC = () => {


    const [playlists, setPlaylists] = useState<Playlist[] | null>(null);

    useEffect(() => {
        APIKit.get("me/playlists").then((response) => {
        setPlaylists(response.data.items);
        });
    }, []);

    const navigate = useNavigate();

    const playPlaylist = (id : number) => {
        navigate("/player", { state: { id: id } });
    };
    return (
        <div className='screen-container'>
            <Row style={{ margin: '0'}} gutter={16}>
                {playlists &&
                playlists.map((playlist : any ) => (
                    <Col span={8} key={playlist.id}>
                    <Card
                        title={playlist.name}
                        onClick={() => playPlaylist(playlist.id)}
                        style={{ cursor: 'pointer', marginBottom: 16, }}
                    >
                        {playlist.images && playlist.images.length > 0 && (
                            <img src={playlist.images[0].url} alt={playlist.name} style={{ width: '100%', height: 'auto' }} />
                        )}
                        <p>Треков: {playlist.tracks.total}</p>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
       
    )
}

export default Library