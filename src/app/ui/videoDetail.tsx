type VideoDetailProps = {
  url: string;
};

export default function VideoDetail({ url }: VideoDetailProps) {
  return (
    <div>
      <iframe src={url}></iframe>
    </div>
  );
}
