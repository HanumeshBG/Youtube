import React from 'react'
import { PROFILE_ICON } from '../utils/constants'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm rounded-lg p-2 mb-1'>
        <img 
            className='h-8' 
            src={PROFILE_ICON}
            alt="Menu icon" 
        />
        <span className='font-bold mx-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage