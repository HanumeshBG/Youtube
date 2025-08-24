import React, { use, useEffect, useState } from 'react'
import { MENU_ICON, YOUTUBE_LOGO, PROFILE_ICON, SEARCH_ICON, YOUTUBE_SEARCHSUGGESTION_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { cacheSearchResult } from '../utils/searchSlice'
import { Search } from "lucide-react";
import useFetch from '../hooks/useFetch';

const Header = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [url, setUrl] = useState(YOUTUBE_SEARCHSUGGESTION_API + searchText)

    const menuClickHandler = () => {
        dispatch(toggleMenu());
    }
    const cachedResult = useSelector(store => store.search)

    const {data, loading, error} = useFetch(url)
    useEffect(() => {
        if(!data) return;
        setSuggestions(data[1])
        dispatch(cacheSearchResult({
            [searchText]: data[1]
        }))
    }, [data])

    // Function to handle search
    useEffect(() => {
        // Fetch search suggestions when searchText changes using the debounce technique
        const timer = setTimeout(() => {
            if(cachedResult[searchText]){
                setSuggestions(cachedResult[searchText]);
            } else {
                setUrl(YOUTUBE_SEARCHSUGGESTION_API + searchText)
            }
        }, 200)

        return () => clearTimeout(timer);  // Cleanup the timer on component unmount or when searchText changes
    }, [searchText]);

    if (error) return <p className="text-center text-red-500">{error}</p>;

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
                <button className='border bg-gray-200 rounded-r-full cursor-pointer p-2'>
                    <Search className='h-5 w-5' />
                </button>
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