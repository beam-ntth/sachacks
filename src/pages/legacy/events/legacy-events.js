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

// Boilerplate for event section components
const event1 = {
    num: "1",
    img: "/legacy/events/sachacks-event-2018.png",
    name: "2018 SACHACKS TEAM",
    header: "SacHacks 1",
    date: "November 17, 2018 - November 18, 2018",
    des: `Hosted at McClellan Conference Center, the first ever SacHacks hosted 300+ hackers even with Camp Fire causing unhealthy 
    air quality. Masks were distributed to ensure the safety of participants leading to a successful event with highlights like being 
    the first hackathon to have Teslas to hack from Smartcar.`,
    btn: "2018 SacHacks",
    link: ""
};

const event2 = {
    num: "2",
    img: "/legacy/events/1a.jpg",
    name: "2020 SACHACKS TEAM",
    header: "SacHacks 2",
    date: "February 22, 2020 - February 23, 2020",
    des: `Hosted at Allegiant Innovation Center, the second ever SacHacks hosted 200+ hackers even as news broke of the first confirmed case of COVID-19 in Sacramento County.`,
    btn: "2020 SacHacks",
    link: ""
};

const event3 = {
    num: "3",
    img: "",
    name: "2020 SACHACKS X HACKDSC",
    header: "HackDSC",
    date: "April 24, 2020 - April 26, 2020",
    des: `HackDSC is a virtual student-run hackathon designed to inspire student developers across North America to create solutions for local community problems. They aim to unlock and designers, regardless of background, to create meaningful impact in their local communities. SacHacks and Winhacks helped organize this event.`,
    btn: "2020 SacHacks",
    link: "https://hackdsc.com/"
};

// Boilerplate for news section components
const news1 = {
    num: "1",
    img: "/legacy/events/sachacks-news-1.png",
    header: "2018 Sacramento Kings Media Release",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ornare felis, quis cursus arcu. Sed ac cursus nibh. ",
    link: ""
};
const news2 = {
    num: "2",
    img: "",
    header: "2018 News Article",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ornare felis, quis cursus arcu. Sed ac cursus nibh. ",
    link: "https://www.nba.com/kings/news/sacramento-kings-sachacks-and-major-league-hacking-host-sacramentos-first-extensive"
};
const news3 = {
    num: "3",
    img: "",
    header: "2020 Sacramento Kings Press Release",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ornare felis, quis cursus arcu. Sed ac cursus nibh. ",
    link: ""
};

// Boilerplate for Medium articles components
const medium1 ={
    num: "1",
    img:"",
    header: "Recap of SacHacks 2018",
    summary: "",
    link: "https://medium.com/sachacks/recap-of-sachacks-2018-5ff4f01184b4"
};

const medium2 ={
    num: "2",
    img:"",
    header: "Recap of SacHacks 2020",
    summary: "",
    link: "https://medium.com/sachacks/recap-of-sachacks-2020-4a4efff61c88"
};

const medium3 ={
    num: "3",
    img:"",
    header: "Impacting the Outside World by Thinking Inside the 'BOX' ",
    summary: "",
    link: "https://medium.com/sachacks/impacting-the-outside-world-by-thinking-inside-the-box-914a2858e69 "
};


const LegacyEvents = (props) => {
    return (
        <div className="lg-events">
            <div className="lg-event">
                <h2 className="lg-events-header">Events</h2>
                <EventCards content={event1} />
                <EventCards content={event2} />
                <EventCards content={event3} />
                {/* Add more events here */}
            </div>
            <div className="lg-news">
                <h2 className="lg-events-header">News</h2>
                <div className="lg-news-list">
                    {/* Add more news here */}
                    <NewsCards content={news1} />
                    <NewsCards content={news2} />
                    <NewsCards content={news3} />
                </div>
            </div>
            <div className="lg-medium">
                <h2 className="lg-events-header">Medium Articles</h2>
                {/* Add more medium articles here */}
                <NewsCards content={medium1} />
                <NewsCards content={medium2} />
                <NewsCards content={medium3} />
            </div>
        </div>
    );
};

export default LegacyEvents;
