import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useItems from '../../../Hooks/useItems';
import { auth } from '../../Authintication/firebase-init';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const url = `http://localhost:5000/inventory/${user.email}`
    const [items, setitems] = useItems(url)
    return (
        <div className='container'>
            <h1>{items.length}</h1>
        </div>
    );
};

export default MyItems;