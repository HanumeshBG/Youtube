import React from 'react'
import { timeAgoShort } from '../utils/helper';

const LiveComment = ({ comment }) => {
    const {authorDisplayName, textDisplay, authorProfileImageUrl, updatedAt} = comment?.snippet?.topLevelComment?.snippet;
  return (
    <div className='flex bg-gray-100 rounded-lg p-2 mb-2'>
        <img 
            className='w-10 h-10 pr-1 rounded-lg'
            alt='user' 
            src={authorProfileImageUrl} 
        />
        <div>
            <div className='flex gap-2 items-center'>
                <p className='font-bold'>{authorDisplayName}</p>
                <span className='text-sm'>{`${timeAgoShort(updatedAt)} ago`}</span>
            </div>
            <p>{textDisplay}</p>
        </div>
    </div>
  )
}

export default LiveComment