import VideoListItem from './videoListItem';
import { VideoWithId } from '../definitions';

type VideoListProps = {
  videoList: VideoWithId[];
};

export default function VideoList({ videoList }: VideoListProps) {
  return (
    <div>
      {videoList.map(({videoId, ...rest}) => (
        <VideoListItem key={videoId} video={rest} />
      ))}
    </div>
  );
}
