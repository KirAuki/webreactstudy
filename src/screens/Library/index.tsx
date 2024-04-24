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
    APIKit.get("me/playlists").then((response) => {
      setPlaylists(response.data.items);
    });
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id: number) => {
    navigate("/player", { state: { id: id } });
  };
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
    <div className="screen-container" data-testid="library-screen-container">
      <Row style={{ margin: "0" }} gutter={16}>
        {currentPlaylists.map((playlist: any) => (
          <Col span={8} key={playlist.id}>
            <S.CustomCard title={playlist.name} onClick={() => playPlaylist(playlist.id)} style={{ marginBottom: 16 }}>
              {playlist.images && playlist.images.length > 0 && (
                <img src={playlist.images[0].url} alt={playlist.name} />
              )}
              <p>Треков: {playlist.tracks.total}</p>
            </S.CustomCard>
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <S.CustomPagination
          current={currentPage}
          total={playlists?.length || 0}
          pageSize={playlistsPerPage}
          onChange={paginate}
        />
      </div>
    </div>
  );
};

export default Library;
