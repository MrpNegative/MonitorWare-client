import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Authintication/firebase-init';
import Loading from '../Loading/Loading';
import Career from './Career/Career';
import FAQ from './FAQ/FAQ';
import Header from './Header/Header';
import Inventory from './Inventory/Inventory';


const Home = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>;
      }
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