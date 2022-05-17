import  { useEffect, useState } from 'react';

const useItem = url => {
    const [item, setItem] = useState({})
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[url])
    return [item, setItem];
};

export default useItem;