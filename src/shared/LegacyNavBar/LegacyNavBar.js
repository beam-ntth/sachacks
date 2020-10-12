/**
 * This file is a Navigation bar component for the legacy website
 */

import React from 'react';
import './LegacyNavBar.css';

const LegacyNavBar = ( props ) => {

    return (
        <React.Fragment>
            <div className='sidebar'>
                <img className='sidebar-logo' src='/legacy/navbar/sachacks-favicon-2021.png' alt='SacHacks Favicon' />
                <h4 className='sidebar-header'>SacHacks</h4>
                <h5 className='sidebar-subheader'>Legacy Dashboard</h5>
                <div className={ props.curPage === 'main' ? 'lg-button lg-active' : 'lg-button' } onClick={ () => props.click('main') }><p>Home</p></div>
                <div className={ props.curPage === 'team' ? 'lg-button lg-active' : 'lg-button' } onClick={ () => props.click('team') }><p>Teams</p></div>
                <div className={ props.curPage === 'event' ? 'lg-button lg-active' : 'lg-button' } onClick={ () => props.click('event') }><p>Events</p></div>
            </div>
        </React.Fragment>
    );
};

export default LegacyNavBar;
