import React, { useEffect, useState } from 'react';

const useItems = (url) => {
    const [item, setItem] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data => setItem(data))
    },[url])
    return [item, setItem]
};

export default useItems;