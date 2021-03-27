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
import React from "react";
import "./legacy-events.css";

// Add more components here
import EventCards from "../../../components/LegacyPage/events/event-card/event-cards";
import NewsCards from "../../../components/LegacyPage/events/news-cards/news-cards";
import * as EventData from "./events-data"

const LegacyEvents = ( props ) => {
    return (
        <div className="lg-events">
            <div className="lg-event">
                <h2 className="lg-events-header">Events</h2>
                <EventCards content={ EventData.event1 } />
                <EventCards content={ EventData.event2 } />
                <EventCards content={ EventData.event3 } />
                {/* Add more events here */ }
            </div>
            <div className="lg-news">
                <h2 className="lg-events-header">News</h2>
                <div className="lg-news-list">
                    <NewsCards content={ EventData.news1 } />
                    <NewsCards content={ EventData.news2 } />
                    <NewsCards content={ EventData.news3 } />
                    {/* Add more news here */ }
                </div>
                <div className="lg-news-list">
                    <NewsCards content={ EventData.news4 } />
                    <NewsCards content={ EventData.news5 } />
                    <NewsCards content={ EventData.news6 } />
                    {/* Add more news here */ }
                </div>
                <div className="lg-news-list">
                    <NewsCards content={ EventData.news7 } />
                    {/* Add more news here */ }
                </div>
            </div>
            <div className="lg-medium">
                <h2 className="lg-events-header">Medium Articles</h2>
                <div className="lg-news-list">
                    <NewsCards content={ EventData.medium1 } />
                    <NewsCards content={ EventData.medium2 } />
                    <NewsCards content={ EventData.medium3 } />
                    {/* Add more medium articles here */ }
                </div>
            </div>
        </div>
    );
};

export default LegacyEvents;
