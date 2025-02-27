import VideoListItem from './videoListItem';
import { VideoWithId } from '../definitions';

type VideoListProps = {
  videoList: VideoWithId[];
  clickFunction: (video: VideoWithId) => void;
};

export default function VideoList({
  videoList,
  clickFunction,
}: VideoListProps) {
  return (
    <div className="flex flex-wrap justify-center md:flex-nowrap md:flex-col">
      {videoList.length === 0 ? (
        <>
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className="block w-full sm:w-1/2 md:w-[200px] h-[150px] bg-slate-200 rounded-md animate-pulse text-slate-500 mb-3"
            ></div>
          ))}
        </>
      ) : (
        <>
          {videoList.map(({ videoId, ...rest }) => (
            <VideoListItem
              key={videoId}
              video={rest}
              clickFunction={() => clickFunction({ videoId, ...rest })}
            />
          ))}
        </>
      )}
    </div>
  );
}
