import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);
    
    useEffect(() =>{
        const controller = new AbortController();
            fetch(url, {signal : controller.signal})
            .then((res) =>{
                if(!res.ok){
                    throw Error("an Error occured while fetching!")
                }
                return res.json()
            })
            .then((data) =>{
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch((err) =>{
                if(err.name === 'AbortError'){
                    console.log("fetch has been aborted")
                }
                setIsLoading(null)
                setError(err.message)
            })
        return () => controller.abort()
    }, [url])

    return { data, isLoading, error}
}
 
export default useFetch;