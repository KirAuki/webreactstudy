import React, { FC, useState, useEffect } from "react";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import APIKit from "../../spotify";
import { useInView } from "react-intersection-observer";
import * as S from "./libraryStyle";

interface Playlist {
  id: number;
  name: string;
  images?: { url: string }[];
  tracks: { total: number };
}

const Library: FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const playlistsPerPage = 6;

  useEffect(() => {
    loadPlaylists();
  }, [currentPage]);

  const navigate = useNavigate();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      loadPlaylists();
    }
  }, [inView]);

  const loadPlaylists = () => {
    APIKit.get("me/playlists", {
      params: { offset: (currentPage - 1) * playlistsPerPage },
    }).then((response) => {
      setPlaylists((prevPlaylists) => {
        return prevPlaylists
          ? [...prevPlaylists, ...response.data.items]
          : response.data.items;
      });
    });
  };

  const playPlaylist = (id: number) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-container">
      <Row style={{ margin: "0" }} gutter={16}>
        {playlists?.map((playlist: any, index) => (
          <Col span={8} key={playlist.id}>
            {index === playlists.length - 1 ? (
              <div ref={ref}>
                <S.CustomCard
                  title={playlist.name}
                  onClick={() => playPlaylist(playlist.id)}
                  style={{ marginBottom: 16 }}
                >
                  {playlist.images && playlist.images.length > 0 && (
                    <img src={playlist.images[0].url} alt={playlist.name} />
                  )}
                  <p>Треков: {playlist.tracks.total}</p>
                </S.CustomCard>
              </div>
            ) : (
              <S.CustomCard
                title={playlist.name}
                onClick={() => playPlaylist(playlist.id)}
                style={{ marginBottom: 16 }}
              >
                {playlist.images && playlist.images.length > 0 && (
                  <img src={playlist.images[0].url} alt={playlist.name} />
                )}
                <p>Треков: {playlist.tracks.total}</p>
              </S.CustomCard>
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Library;
