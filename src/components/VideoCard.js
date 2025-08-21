import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet, statistics} = info;
    const {title, channelTitle, thumbnails} = snippet;
    const {viewCount} = statistics;
  return (
    <div className='p-2 m-2 w-50 shadow-lg rounded-lg hover:shadow-xl'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{viewCount}</li>
        </ul>
    </div>
  )
}

export default VideoCard