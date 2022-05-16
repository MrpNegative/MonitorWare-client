import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Authintication/firebase-init';
import './AddItem.css'

const AddItem = () => {
    const [user] = useAuthState(auth)

    const handleAddItem = event =>{
        event.preventDefault()
        const item = {
            name: event.target.name.value,
            description: event.target.name.value,
            img: event.target.img.value,
            category: event.target.category.value,
            email: user.email,
            quantity: event.target.quantity.value,
            price: event.target.price.value,
            suppName: event.target.supplierName.value
        }
        console.log(item);
        axios.post('http://localhost:5000/inventory', item)
        .then(response => {
            console.log(response)
            const {data} = response;
            if(data.insertedId){
                alert('kk')
            // e.target.reset();
            }
        })
        // const url = "http://localhost:5000/inventory"
        // fetch(url, {
        //   method: 'POST',
        //   headers: {
        //     'content-type': 'application/json'
        //   },
        //   body: JSON.stringify(item)
        // })
        // .then(res=>res.json())
        // .then(result => {
        //   console.log(result)
        // })
    }
    return (
        <div className='container d-flex justify-content-center align-center'>
           <div className='addItem-container'>
           <h1 className='header1 text-center'>Add Item</h1>
           <hr />
            <form onSubmit={handleAddItem}>
                <input type="text" name='name' placeholder='Name' required />
                <textarea type="text-area" name='description' placeholder='Description' required />
                <input type="text" name='img' placeholder='Image Url' required />
                <input type="text" name='category' placeholder='Category' required />
                <input type="email" name='email' placeholder='Email' value={user.email} required />
                <input min="1" type="number" name='quantity' placeholder='Quantity' required />
                <input min="0" type="number" name='price' placeholder='Price' required />
                <input type="text" name='supplierName' placeholder='Supplier Name' required />
                <input className='addItem-btn' type="submit" value='Add Item' />
            </form>
           </div>
        </div>
    );
};

export default AddItem;