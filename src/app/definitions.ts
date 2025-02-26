export type VideoWithId = {
  videoId: string;
} & Video;

export type Video = {
  title: string;
  thumbnail: Thumbnail
};

type Thumbnail = {
  url: string; width: number; height: number
}

export interface VideoFromApi {
  id: { videoId: string };
  snippet: {title: string, thumbnails: {default: Thumbnail}}
}