import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    // Fetch videos from YouTube API
    getVideos()
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json();
    setVideos(json.items);
  }

  if (!videos) return null;

  return (
    <div className='flex flex-wrap'>
      {
        videos.map((video) => (
          <Link to={"watch?v=" + video.id} key={video.id}><VideoCard info={video} /></Link>
        ))
      }
    </div>
  )
}

export default VideoContainer