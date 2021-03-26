/**
 * This is the page where we will host everything that is related to the legacy website
 * There are three pages for the legacy website
 * 1. Main page
 * 2. Teams page
 * 3. Events page
 * 
 * If you would like to make any adjustments to the navigation bar of the legacy website
 * go to -> /shared/LegacyNavBar/LegacyNavBar and edit everything there
 * 
 * If you would like to make any adjustments to the teams and events pages please visit:
 * Team page: ../teams/legacy-teams for more details
 * Event page: ../events/legacy-events for more details
 * 
 * You can make changes to the main page directly in this file
 * 
 * !! MAKE SURE TO ADD THE PICTURES IN THE CORRECT FOLDER
 * here -> /sachacks/public/legacy/navbar
 */

// Import the necessary modules
import React, { useState } from 'react';
import './legacy-main.css';

// Import components here
import LegacyNavBar from '../../../shared/LegacyNavBar/LegacyNavBar';
import MobileLegacyNavBar from '../../../shared/MobileLegacyNavBar/MobileLegacyNavBar';

// React router to link different pages
import { Link } from 'react-router-dom';
import LegacyTeams from '../teams/legacy-teams';
import LegacyEvents from '../events/legacy-events';

const LegacyMain = props => {

    const [ page, setPage ] = useState( 'main' );

    const setPageHandler = ( page ) => {
        return setPage( page );
    };

    const mainContent = (
        <div className='lg-main'>
            {/* Left side of the page, contains logo */ }
            <div className='lg-center'>
                <img id="legacy-main-logo" src="/legacy/sachack-main-logo.png" alt='legacy main logo' />
                <p className='lg-main-subheader'>Sacramento's Intercollegiate Hackathon</p>
                <div className='lg-buttons' style={ { display: 'flex' } }>
                    <Link to='/2021'><div className='lg-main-btn' style={ { marginRight: '2rem' } }>Enter SacHacks III Site</div></Link>
                    <a href='https://form.typeform.com/to/r2sYTJ' target='_blank' rel='noopener noreferrer'><div className='lg-main-btn'>Join Our Team!</div></a>
                </div>
            </div>
        </div>
    );

    let displayContent = mainContent;
    if ( page === 'main' ) {
        displayContent = mainContent;
    } else if ( page === 'team' ) {
        displayContent = <LegacyTeams />;
    } else if ( page === 'event' ) {
        displayContent = <LegacyEvents />;
    }

    return (
        <div className='lg-container'>
            <LegacyNavBar curPage={ page } click={ setPageHandler } />
            <MobileLegacyNavBar curPage={ page } click={ setPageHandler } />
            { displayContent }
        </div>
    );
};

export default LegacyMain;