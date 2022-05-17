import React from 'react';
import Career from './Career/Career';
import Header from './Header/Header';
import Inventory from './Inventory/Inventory';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Inventory></Inventory>
            <Career></Career>
        </div>
    );
};

export default Home;