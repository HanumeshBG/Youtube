import { useState, useEffect } from 'react';

const useFetch = (url, options, {retries = 3, retryDelay = 1000} = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!url) return;

        const controller = new AbortController(); // Create a new AbortController instance
        const signal = controller.signal; // Get the signal from the controller

        const fetchData = async (attempt = 1) => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, {...options, signal}); // Pass the signal to fetch options
                if(!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                const json = await response.json();
                setData(json)
            } catch (err){
                if(err.name == 'AbortError'){
                    return
                } 
                if(attempt <= retries) {
                    setTimeout(() => fetchData(attempt + 1), retryDelay)
                    return;
                } else {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();
        return () => {
            controller.abort(); // Abort the fetch request on cleanup
        }
    }, [url])

    return {data, loading, error};

}

export default useFetch;