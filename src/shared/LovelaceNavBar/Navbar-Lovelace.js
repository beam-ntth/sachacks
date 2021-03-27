import React, { useState } from 'react';
import './Navbar-Lovelace.css';

/*
import About_Lovelace from '../../components/LovelacePage/About-Lovelace';
import FAQPage from '../../components/LovelacePage/FAQPage';
import Sponsors_Lovelace from '../../components/LovelacePage/Sponsors-Lovelace';
import Lovelace_Mission from '../../components/LovelacePage/Lovelace-Mission';
*/

const Nav_Lovelace = () => {
    return (
        <React.Fragment>
            <div className='lace-navbar'>
                <img src='lovelace2021/lovelace-logo.svg' alt='Lovelace Hacks' />
                <div className='lace-nav-links'>
                    <a className='lace-nav-btn' href=''>HOME</a>
                    <a className='lace-nav-btn' href=''>ABOUT</a>
                    <a className='lace-nav-btn' href=''>FAQ</a>
                    <a className='lace-nav-btn' href=''>SPONSORS</a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Nav_Lovelace;