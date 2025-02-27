import Image from 'next/image';
import { Video } from '../definitions';

type VideoListItemProps = {
  video: Video;
  clickFunction: () => void;
};

export default function VideoListItem({
  video: { title, thumbnail },
  clickFunction,
}: VideoListItemProps) {
  return (
    <div
      className="w-md flex flex-col justify-end p-2 w-full sm:w-1/2 md:w-[200px]"
      onClick={() => clickFunction()}
    >
      <h2 className="text-sm">{title}</h2>
      <Image
        className="mb-3 mx-auto"
        src={thumbnail.url}
        alt={title}
        width={thumbnail.width}
        height={thumbnail.height}
      />
    </div>
  );
}
