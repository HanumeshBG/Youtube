import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  if (!isMenuOpen) return null;

  return (
    <div className='p-5 w-1/4 shadow-lg'>
      <ul className='p-2'>
        <li className='p-1'>Home</li>
        <li className='p-1'>Shorts</li>
        <li className='p-1'>Subscriptions</li>
      </ul>
      <h1 className='font-bold'>Supscription</h1>
      <ul className='p-2'>
        <li className='p-1'>Sports</li>
        <li className='p-1'>Shorts</li>
        <li className='p-1'>Subscriptions</li>
        <li className='p-1'>Library</li>
      </ul>
      <h1 className='font-bold'>Watch Later</h1>
      <ul className='p-2'>
        <li className='p-1'>Home</li>
        <li className='p-1'>Shorts</li>
        <li className='p-1'>Subscriptions</li>
        <li className='p-1'>Library</li>
      </ul>
    </div>
  )
}

export default Sidebar