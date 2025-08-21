import React, { useEffect, useState } from 'react'
import { MENU_ICON, YOUTUBE_LOGO, PROFILE_ICON, SEARCH_ICON, YOUTUBE_SEARCHSUGGESTION_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { cacheSearchResult } from '../utils/searchSlice'

const Header = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const menuClickHandler = () => {
        dispatch(toggleMenu());
    }
    const cachedResult = useSelector(store => store.search)

    // Function to handle search
    useEffect(() => {

        // Fetch search suggestions when searchText changes using the debounce technique
        const timer = setTimeout(() => {
            if(cachedResult[searchText]){
                setSuggestions(cachedResult[searchText]);
            } else {
                getSerachTextSuggestions()
            }
        }, 200)

        return () => clearTimeout(timer);  // Cleanup the timer on component unmount or when searchText changes
    }, [searchText]);

    const getSerachTextSuggestions = async() => {
        if(searchText.length === 0) return;
        const data = await fetch(YOUTUBE_SEARCHSUGGESTION_API + searchText);
        const json = await data.json();
        console.log(json)
        setSuggestions(json[1]);
        dispatch(cacheSearchResult({
            [searchText]: json[1]
        }))
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
        <div className='col-span-10 px-10'>
            <div>
                <input 
                    className='w-1/2 border border-gray-400 rounded-l-full p-2'
                    type="text" 
                    placeholder='Search'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />
                <button className='border bg-gray-200 rounded-r-full cursor-pointer p-2'>SEARCH</button>
            </div>
            { showSuggestions &&
                <div className='fixed bg-white shadow-lg p-2 mt-2 rounded-lg w-[20rem]'>
                    <ul>
                        {
                            suggestions.map((suggestion, index) => (
                                <li key={index} className='cursor-pointer p-2 rounded-lg hover:bg-gray-200'>{suggestion}</li>
                            ))
                        }
                    </ul>
                </div>
            }
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