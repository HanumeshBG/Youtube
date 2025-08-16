import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-200 p-2 m-1 rounded-lg hover:bg-gray-300 font-bold'>{name}</button>
    </div>
  )
}

export default Button