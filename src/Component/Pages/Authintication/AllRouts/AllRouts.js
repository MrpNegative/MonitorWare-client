import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';

const AllRouts = () => {
    return (
        <div>
            <Routes>
            <Route path="/login" element={<Login/>} />
            </Routes>
        </div>
    );
};

export default AllRouts;