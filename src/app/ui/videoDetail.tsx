import { VideoWithId } from '../definitions';

type VideoDetailProps = {
  video: VideoWithId | undefined;
};

export default function VideoDetail({ video }: VideoDetailProps) {
  return (
    <div className="mx-auto mt-5 w-[320px] sm:w-[480px] lg:w-[720px]">
      {video ? (
        <>
          <h2 className="text-center font-bold text-xl mb-2">{video.title}</h2>
          <iframe
            className="w-full h-[240px]
            sm:h-[360px] lg:h-[540px]"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </>
      ) : (
        <>
          <div
            className="w-full h-[240px]
            sm:h-[360px] lg:h-[540px] bg-slate-200 rounded-lg animate-pulse text-slate-500 flex items-center justify-center"
          >Search to load video...</div>
        </>
      )}
    </div>
  );
}
