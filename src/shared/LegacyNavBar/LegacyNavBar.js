/**
 * This file is a Navigation bar component for the legacy website
 */

import React from 'react';
import './LegacyNavBar.css';

const LegacyNavBar = ( props ) => {

    return (
        <React.Fragment>
            <div className='sidebar'>
                <div className='sidebar-logo'>
                    <img src='/legacy/navbar/sachacks-favicon-2021.png' alt='SacHacks Favicon' />
                </div>
                <h4 className='sidebar-header'>SacHacks</h4>
                <h5 className='sidebar-subheader'>Design. Code. Launch.</h5>
                <div className={ props.curPage === 'main' ? 'lg-button lg-active' : 'lg-button' } onClick={ () => props.click( 'main' ) }>
                    <img className='sidebar-img' src='/legacy/navbar/Home-icon.png' alt='Home Icon' />
                    <p>Home</p>
                </div>
                <div className={ props.curPage === 'team' ? 'lg-button lg-active' : 'lg-button' } onClick={ () => props.click( 'team' ) }>
                    <img className='sidebar-img' src='/legacy/navbar/Teams-icon.png' alt='Teams Icon' />
                    <p>Teams</p>
                </div>
                <div className={ props.curPage === 'event' ? 'lg-button lg-active' : 'lg-button' } onClick={ () => props.click( 'event' ) }>
                    <img className='sidebar-img' src='/legacy/navbar/Event-icon.png' alt='Event Icon' />
                    <p>Events</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LegacyNavBar;
