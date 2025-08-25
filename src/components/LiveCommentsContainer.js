import React, { useCallback, useEffect, useState, useRef } from 'react'
import { COMMENTS_API } from '../utils/constants'
import useFetch from '../hooks/useFetch'
import LiveComment from './LiveComment'

const LiveCommentsContainer = ({ videoId }) => {
    const [comments, setComments] = useState([])
    const [nextPageToken, setNextPageToken] = useState("");
    const [url, setUrl] = useState(COMMENTS_API + videoId)

    const containerRef = useRef(null)
    // const timer = useRef(null);
    
    const {data, loading, error} = useFetch(url)
    useEffect(() => {
        if(!data) return;
        setComments((prev) => [...prev, ...data?.items])
        setNextPageToken(data?.nextPageToken || "")
    }, [data])

    // const handleScroll = useCallback(()=>{
    //     timer.current && clearTimeout(timer.current);
    //     timer.current = setTimeout(() => {
    //         const container = constainerRef.current;
    //         if(!container) return;
    //         if(container.scrollTop + container.clientheight >= container.scrollHeight - 50){
    //             if(!loading && nextPageToken){
    //                 setUrl(COMMENTS_API + videoId + `&pageToken=${nextPageToken}`)
    //             }
    //         }
    //     }, 200)
    // }, [loading, nextPageToken]);

    // useEffect(() => {
    //     const container = containerRef.current;
    //     if(!container) return;

    //     container.addEventListener('scroll', handleScroll);
    //     return () => {
    //         container.removeEventListener('scroll', handleScroll);
    //         timer.current && clearTimeout(timer.current);
    //     }
    // }, [handleScroll])

    const loadComments = () => {
        if(!loading && nextPageToken){
            setUrl(COMMENTS_API + videoId + `&pageToken=${nextPageToken}`)
        }
    }


    if (error) return <p className="text-center text-red-500">{error}</p>;
    if(loading) return <p>Loading...</p>

  return (
    <div ref={containerRef} className='m-5 p-2'>
        <h1 className='font-bold'>Comments:</h1>
        {
           comments.map((comment) => (
                <LiveComment key={comment.id} comment={comment}/>
           )) 
        }
        <div className='font-black cursor-pointer' onClick={loadComments}>Load More Comments..</div>
    </div>
  )
}

export default LiveCommentsContainer