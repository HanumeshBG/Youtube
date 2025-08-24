import React, { useEffect, useState, useRef, use, useCallback } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [url, setUrl] = useState(`${YOUTUBE_VIDEO_API}&pageToken=${nextPageToken}`);

  const containerRef = useRef(null)
  const timer = useRef(null);

  // Fetch videos using custom hook
  const {data, loading, error} = useFetch(url)

  // Update videos and nextPageToken when data changes
  useEffect(() => {
    if(!data) return;
    setVideos((prev) => [...prev, ...data.items]); // append new videos to existing ones
    setNextPageToken(data.nextPageToken || ''); // update the next token  
  }, [data])

  // handle scroll event for infinite scrolling
  const handleScroll = useCallback(() => {
    timer.current && clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const container = containerRef.current;
      if(!container) return

      if(container.scrollTop + container.clientHeight >= container.scrollHeight - 50) {
        // User has scrolled to the bottom
        if(!loading && nextPageToken) {
          setUrl(`${YOUTUBE_VIDEO_API}&pageToken=${nextPageToken}`);
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

  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (videos.length === 0 && loading) return <p>Loading...</p>;
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