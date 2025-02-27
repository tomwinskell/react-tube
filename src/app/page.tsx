'use client';
import { useState } from 'react';
import SearchBar from './ui/searchBar';
import axios from 'axios';
import VideoList from './ui/videoList';
import { VideoFromApi } from './definitions';
import VideoDetail from './ui/videoDetail';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
import { VideoWithId } from './definitions';
import { FaYoutube } from "react-icons/fa";

export default function Home() {
  const [videos, setVideos] = useState<VideoWithId[]>([]);
  const [video, setVideo] = useState<VideoWithId | undefined>(undefined);

    async function handleSearch(term: string): Promise<void> {
      const url = 'https://www.googleapis.com/youtube/v3/search';

      const params = {
        part: 'snippet',
        key: API_KEY,
        q: term,
        type: 'video',
      };

    try {
      const response = await axios.get(url, { params });
      const videos = response.data.items.map((item: VideoFromApi) => {
        return {
          videoId: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high,
        };
      });
      setVideos(videos);
      setVideo(videos[0]);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  return (
    <main className="flex items-center justify-center bg-slate-200 p-5">
      <div className="rounded-xl bg-white shadow-md overflow-hidden">
        <div className='bg-red-600 p-5 font-bold text-3xl text-white'><div className='inline-flex items-center'><FaYoutube className='me-3' />React Tube</div></div>
        <div className="flex flex-col md:flex-row gap-5 w-min p-5">
          <div className="">
            <SearchBar onTermChange={handleSearch} />
            <VideoDetail video={video} />
          </div>
          <div className="">
            <VideoList
              videoList={videos}
              clickFunction={(video: VideoWithId) => setVideo(video)}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
