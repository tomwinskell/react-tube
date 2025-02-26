import Image from 'next/image';
import { Video } from '../definitions';

type VideoListItemProps = {
  video: Video;
};

export default function VideoListItem({
  video: { title, thumbnail },
}: VideoListItemProps) {
  return (
    <div>
      <h2>{title}</h2>
      <Image
        src={thumbnail.url}
        alt={title}
        width={thumbnail.width}
        height={thumbnail.height}
      />
    </div>
  );
}
