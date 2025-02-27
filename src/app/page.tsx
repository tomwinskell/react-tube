'use client';
import { useState } from 'react';
import SearchBar from './ui/searchBar';
import axios from 'axios';
import VideoList from './ui/videoList';
import { VideoFromApi } from './definitions';
// const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Home() {
  const [videos, setVideos] = useState([]);

  async function handleSearch() {
  // async function handleSearch(term: string): Promise<void> {
  //   const url = 'https://www.googleapis.com/youtube/v3/search';

  //   const params = {
  //     part: 'snippet',
  //     key: API_KEY,
  //     q: term,
  //     type: 'video',
  //   };

    try {
      const response = await axios.get('./data.json');
      // axios.get(url, { params });
      setVideos(
        response.data.items.map((item: VideoFromApi) => {
          return {
            videoId: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high,
          };
        })
      );
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  return (
    <main className="flex items-center justify-center bg-slate-200 p-5">
      <div className="w-4xl p-5 rounded-xl bg-white shadow-md">
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='basis-3/4'>

        <SearchBar onTermChange={handleSearch} />
          </div>
          <div className='basis-1/4'>

        <VideoList videoList={videos} />
          </div>
        </div>
      </div>
    </main>
  );
}
