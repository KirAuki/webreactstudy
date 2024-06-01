export interface QueueProps {
  tracks?: {
    track: {
      name: string;
    };
  }[];
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}
