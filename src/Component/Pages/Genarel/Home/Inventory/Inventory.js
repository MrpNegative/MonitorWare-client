import React from 'react';
import useItems from '../../../../Hooks/useItems';
import ItemCard from './itemCard/ItemCard';
import './Inventory.css'
import { Link } from 'react-router-dom';


const Inventory = () => {
    const url = 'http://localhost:5000/inventory'
    const [item] = useItems(url)
    const homeItem = item.slice(0,4)
    return (
        <div className='container'>
            <h1 className='header1 text-center my-5'>Inventory Items</h1>
            <div className='inventory-item'>
                {
                    homeItem.map(item => <ItemCard items={item} key={item._id}></ItemCard>)
                }
            </div>
            <div className='container mb-5'>
            <button className='btn btn-dark d-block mx-auto'><Link to='/manageitems'>Manage Items</Link></button>
            </div>
        </div>
    );
};

export default Inventory;