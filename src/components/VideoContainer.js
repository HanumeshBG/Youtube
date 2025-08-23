import React, { useEffect, useState, useRef, use, useCallback } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");

  const containerRef = useRef(null)
  const timer = useRef(null);

  useEffect(() => {
    // Fetch videos from YouTube API
    getVideos()
  }, [])

  // handle scroll event for infinite scrolling
  const handleScroll = useCallback(() => {
    timer.current && clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const container = containerRef.current;
      if(!container) return

      if(container.scrollTop + container.clientHeight >= container.scrollHeight - 50) {
        // User has scrolled to the bottom
        if(!loading) {
          getVideos(nextPageToken);
        }
      }
    }, 200);
  }, [loading, nextPageToken]);

  // Attaching the scroll event listener
  useEffect(() => {
    const container = containerRef.current;
    if(!container) return;

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      timer.current && clearTimeout(timer.current);
    }

  }, [handleScroll])

  const getVideos = async ( token = "") => {
    setLoading(true);
    const data = await fetch(`${YOUTUBE_VIDEO_API}&pageToken=${token}`)
    const json = await data.json();
    setVideos((prev) => [...prev, ...json.items]); // append new videos to existing ones
    setNextPageToken(json.nextPageToken); // update the next token
    setLoading(false);
  }

  if (videos.length == 0) return null;

  return (
    <div ref={containerRef} className='flex flex-wrap w-full h-[90%] overflow-y-auto'>
      {
        videos.map((video, i) => (
          <Link to={"watch?v=" + video.id} key={video.id + video.etag + i}><VideoCard info={video} /></Link>
        ))
      }
      {loading && <p className="w-full text-center py-4">Loading more...</p>}
    </div>
  )
}

export default VideoContainer