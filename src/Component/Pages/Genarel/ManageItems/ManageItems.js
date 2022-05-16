import React from 'react';
import useItems from '../../../Hooks/useItems';

const ManageItems = () => {
    const url = 'http://localhost:5000/inventory'
    const [items] = useItems(url)
    return (
        <div className='container'>
           {
                items.map(item => <li>{item.name}</li>)
           }
        </div>
    );
};

export default ManageItems;