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

// React router to link different pages
import { Link } from 'react-router-dom';
import LegacyTeams from '../teams/legacy-teams';
import LegacyEvents from '../events/legacy-events';

const LegacyMain = props => {

    const [ page, setPage ] = useState('main');

    const setPageHandler = (page) => {
        return setPage(page);
    }

    const mainContent = (
        <div className='lg-main'>
                {/* Left side of the page, contains logo */ }
                <div className='lg-left'>
                    <img className='lg-main-logo' src='/legacy/navbar/sachacks-favicon-2021.png' alt='SacHacks Favicon' />
                </div>
                <div className='lg-right'>
                    <h2 className='lg-main-header'>SacHacks Legacy Dashboard</h2>
                    <p className='lg-main-subheader'>Lorem ipsum</p>
                    <Link to='/'><div className='lg-main-btn'>Link to SacHacks website</div></Link>
                </div>
        </div>
    )

    let displayContent = mainContent;

    if (page === 'main') {
        displayContent = mainContent;
    } else if (page === 'team') {
        displayContent = <LegacyTeams />
    } else if (page === 'event') {
        displayContent = <LegacyEvents />
    }

    return (
        <div className='lg-container'>
            <LegacyNavBar curPage={page} click={setPageHandler} />
            {displayContent}
        </div>
    );
};

export default LegacyMain;