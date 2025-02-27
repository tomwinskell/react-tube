import Image from 'next/image';
import { Video } from '../definitions';

type VideoListItemProps = {
  video: Video;
};

export default function VideoListItem({
  video: { title, thumbnail },
}: VideoListItemProps) {
  return (
    <div className='max-w-md sm:max-w-xs md:max-w-max flex flex-col justify-end p-2'>
      <h2 className='w-full'>{title}</h2>
      <Image className='mb-3 mx-auto'
        src={thumbnail.url}
        alt={title}
        width={thumbnail.width}
        height={thumbnail.height}
      />
    </div>
  );
}
