import React from 'react';
import Career from './Career/Career';
import FAQ from './FAQ/FAQ';
import Header from './Header/Header';
import Inventory from './Inventory/Inventory';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Inventory></Inventory>
            <Career></Career>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;