import { FC } from "react";
import "./queue.css";
import { QueueProps } from "./types";

const Queue: FC<QueueProps> = ({ tracks, setCurrentIndex }) => {
  return (
    <div className="queue-container flex">
      {!tracks ? (
        <div className="queue flex">
          <p className="upNext">Up Next</p>
          <div className="queue-list">
            <p className="track-name">no tracks</p>
          </div>
        </div>
      ) : (
        <div className="queue flex">
          <p className="upNext">Up Next</p>
          <div className="queue-list">
            {tracks?.map((track, index) => (
              <div key={index + "key"} className="queue-item flex" onClick={() => setCurrentIndex(index)}>
                <p className="track-name">{track?.track?.name}</p>
                <p>0:30</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Queue;
