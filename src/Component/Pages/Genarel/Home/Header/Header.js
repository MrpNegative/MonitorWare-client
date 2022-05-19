import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='main-header'>
            <div className='header-info'>
            <h1 className='header1 main-title'>Welcome To <span className='color header1'>MonitorWare</span></h1>
            <p>We got your back no need to worry about storing your monitor anymore </p>
            </div>
        </div>
    );
};

export default Header;