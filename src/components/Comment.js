import React from 'react'
import { PROFILE_ICON } from '../utils/constants'

const Comment = ({ data }) => {
  const {name, text} = data;
  return (
    <div className='flex bg-gray-100 rounded-lg p-2 mb-2'>
        <img 
            className='w-10 h-10 pr-1'
            alt='user' 
            src={PROFILE_ICON} 
        />
        <div>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment