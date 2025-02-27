import VideoListItem from './videoListItem';
import { VideoWithId } from '../definitions';

type VideoListProps = {
  videoList: VideoWithId[];
};

export default function VideoList({ videoList }: VideoListProps) {
  return (
    <div className='flex flex-wrap justify-center md:flex-nowrap md:flex-col'>
      {videoList.map(({videoId, ...rest}) => (
        <VideoListItem key={videoId} video={rest} />
      ))}
    </div>
  );
}
