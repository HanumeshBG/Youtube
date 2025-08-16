import React from 'react'
import { MENU_ICON, YOUTUBE_LOGO, PROFILE_ICON, SEARCH_ICON } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
    const dispatch = useDispatch();
    const menuClickHandler = () => {
        dispatch(toggleMenu());
    }
  return (
    <div className='grid grid-flow-col p-2 m-1 shadow-md'>
        <div className='col-span-1 flex gap-1'>
            <img 
                onClick={menuClickHandler}
                className='h-10 cursor-pointer' 
                src={MENU_ICON}
                alt="Menu icon" 
            />
            <img 
                className='h-10' 
                src={YOUTUBE_LOGO}
                alt="Youtube icon" 
            />
        </div>
        <div className='col-span-10 text-center'>
            <input 
                className='w-1/2 border border-gray-400 rounded-l-full p-2'
                type="text" 
                placeholder='Search' 
            />
            <button className='border bg-gray-200 rounded-r-full cursor-pointer p-2'>SEARCH</button>
        </div>
        <div className='col-span-1'>
            <img 
                className='h-10' 
                src={PROFILE_ICON}
                alt="Menu icon" 
            />
        </div>
    </div>
  )
}

export default Header