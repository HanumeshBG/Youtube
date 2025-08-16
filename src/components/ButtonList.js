import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttons = ["All", "Music", "Movies", "Gaming", "News", "Live", "Sports", "Learning", "Fashion & Beauty", "Comedy", "Entertainment", "Science & Technology"];
  return (
    <div className='flex text-nowrap overflow-auto'>
      {
        buttons.map((button) => (
          <Button key={button} name={button} />
        ))
      }
    </div>
  )
}

export default ButtonList