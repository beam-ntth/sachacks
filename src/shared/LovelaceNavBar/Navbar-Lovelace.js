import React, { useState } from 'react';
import './Navbar-Lovelace.css';

import About_Lovelace from '../../components/LovelacePage/About-Lovelace';
import FAQPage from '../../components/LovelacePage/FAQPage';
import Sponsors_Lovelace from '../../components/LovelacePage/Sponsors-Lovelace';
import Lovelace_Mission from '../../components/LovelacePage/Lovelace-Mission';

const Nav_Lovelace = () => {
    return (
        <React.Fragment>
            <div className='lace-navbar'>
                <img src='lovelace2021/logo.png' alt='Lovelace Main Logo'/>
                <div className='lace-nav-links'>
                    <a className='nav-btn' href=''>Home</a>
                    <a className='nav-btn' href=''>About</a>
                    <a className='nav-btn' href=''>FAQ</a>
                    <a className='nav-btn' href=''>Sponsors</a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Nav_Lovelace;