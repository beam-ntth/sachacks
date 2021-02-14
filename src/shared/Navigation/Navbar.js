/**
 * This is a navigation bar component for the desktop version
 * - There is not really anything much to it honestly, it a navbar
 * 
 * Potential refactoring
 * 1. Fix the CSS refactor. Currently using in-line HTML styling, not the best practice but it works
 */

import React, { useState } from 'react';
import './Navbar.css';

// React router to link different pages
import { Link } from 'react-router-dom';

// Add more components here
import Apply from '../Apply/Apply';

// Add more logos or symbols here
import { GoTriangleDown } from 'react-icons/go';

const Navbar = () => {

    const [ open, setOpen ] = useState( { open: true } );
    const backdropToggler = () => {
        setOpen( !open );
    };

    return (
        <React.Fragment>
            <div className='nav-2021' style={ !open ? { backgroundColor: '#000' } : null }>
                <Link className='logo' to='/'><img src='sachacks-logo/rocket.png' alt='SacHacks Main Logo' /></Link>
                <div className='space-between'></div>
                {/* <Link className='schedule' to='/schedule'>Schedule</Link>
                <Link to='/resources'>Resources</Link> */}
                <a className='nav-btn' href='mailto: team@sachacks.io'>Contact</a>
                <div className='apply' onClick={ () => setOpen( !open ) } style={ !open ? { color: '#7BDDDE', transition: '0.5s' } : { color: '#fff', transition: '0.5s' } }>
                    Apply <GoTriangleDown fill={ !open ? '#7BDDDE' : 'white' } size='20px' style={ !open ? { marginLeft: '5px', transform: 'rotate(180deg)', transition: '0.5s' } : { marginLeft: '5px', transition: '0.5s' } } />
                </div>
                <a id="mlh-trust-badge" style={ { display: 'flex', maxWidth: '130px', minWidth: '60px', position: 'relative', margin: 0, width: '10%', zIndex: 10000 } } href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=gray" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-gray.svg" alt="Major League Hacking 2021 Hackathon Season" style={ { width: '100%' } } /></a>
                <div className='space'></div>
            </div>
            <Apply show={ !open } toggle={ backdropToggler } />
        </React.Fragment>
    );
};

export default Navbar;
