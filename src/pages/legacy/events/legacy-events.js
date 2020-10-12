/**
 * In the events page of the legacy website, we will have three sections laying on top of each other:
 * 1. Events
 * 2. News
 * 3. Medium Articles
 * 
 * To add more cards in the three sections:
 * 1. Create a new object. Boilerplate seen below
 * 2. Add the component to the corresponding section in the HTML part
 * 
 * !! MAKE SURE TO ADD THE PICTURES IN THE CORRECT FOLDER
 * here -> /sachacks/public/legacy/events
 */

// Import the important modules and files
import React from 'react';
import './legacy-events.css';

// Add more components here
import EventCards from '../../../components/LegacyPage/events/event-card/event-cards';

// Boilerplate for event section components
const event1 = {
    num: '1',
    img: '/legacy/events/sachacks-event-2018.png',
    name: '2018 SacHacks Team',
    header: 'SacHacks 1',
    date: 'November 17, 2018 - November 18, 2018',
    des: `Hosted at McClellan Conference Center, the first ever SacHacks hosted 300+ hackers even with Camp Fire causing unhealthy 
    air quality. Masks were distributed to ensure the safety of participants leading to a successful event with highlights like being 
    the first hackathon to have Teslas to hack from Smartcar.`,
    btn: '2018 SacHacks'
};

// Boilerplate for news section components

// Boilerplate for medium section components

const LegacyEvents = props => {
    return (
        <div className='lg-events'>
            <div className='lg-event'>
                <h2 className='lg-events-header'>Events</h2>
                <EventCards content={ event1 } />
                {/* Add more events here */}
            </div>
            <div className='lg-news'>
                <h2 className='lg-events-header'>News</h2>
                {/* Add more news here */}
            </div>
            <div className='lg-medium'>
                <h2 className='lg-events-header'>Medium Articles</h2>
                {/* Add more medium articles here */}
            </div>
        </div>
    );
};

export default LegacyEvents;
