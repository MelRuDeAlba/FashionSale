import { useState, useEffect } from 'react';
const api = 'https://us-central1-fashionsale-b7ceb.cloudfunctions.net/api'

const useGetItems  = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch(api)
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);

    return items;
}

export default useGetItems;