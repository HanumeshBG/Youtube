import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice' 
import { generateRandomName, generateRandomText } from '../utils/helper'

const LiveChat = () => {
    const dispatch = useDispatch()
    const chatMessages = useSelector(store => store.chat.messages)
    const [liveMessage, setLiveMessage] = useState("")
    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(addMessage(
                {
                    name: generateRandomName(),
                    message: generateRandomText(30)
                }
            ))
        }, 10000)

        return () => clearInterval(timer)
    }, [])

    const handleLiveChat = () => {  
        if(liveMessage == "") return;    
        dispatch(addMessage({
            name: "Hanumesh",
            message: liveMessage
        }))
        setLiveMessage("")
    }
  return (
    <>
        <div className='w-full h-[460px] ml-1 border border-black p-2 bg-slate-100 overflow-y-auto flex flex-col-reverse rounded-t-lg'>
            {
                chatMessages.map((chat, index) => (
                    <ChatMessage key={index} name={chat.name} message={chat.message}/>
                ))
            }
        </div>
        <form className='w-full mx-1 p-2 border border-black rounded-b-lg'
            onSubmit={(e) => {
                e.preventDefault()
                handleLiveChat()
            }}
        >
            <input type='text' 
                className='w-[85%] px-1 border border-black'
                value={liveMessage}
                onChange={(e) => setLiveMessage(e.target.value)}
            />
            <button className='mx-1 bg-blue-400 px-2 rounded-lg' onClick={handleLiveChat}>Send</button>
        </form>
    </>
  )
}

export default LiveChat