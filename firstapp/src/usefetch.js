import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout( () => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
              throw Error('could not fetch data')
            }
            return res.json()
        })
        .then(data => {
            setData(data);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err.message)
        })
        },1000);
    },[url]);

    return {data, isLoading}

}

export default useFetch