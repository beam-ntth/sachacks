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
    img: "/legacy/events/2018 facebook banner.png",
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
    header: "SacHacks 2020",
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
    summary: "On November 17-18, undergraduate, graduate and industry professionals will gather at McClellan Conference Center for a 24-hour coding competition, entitled SacHacks – Sacramento’s first major intercollegiate hackathon.",
    link: "https://www.nba.com/kings/news/sacramento-kings-sachacks-and-major-league-hacking-host-sacramentos-first-extensive"
};
const news2 = {
    num: "2",
    img: "/legacy/events/medium-article-news.jpg",
    header: "2018 News Article",
    summary: "The Sacramento Kings are a primary sponsor of SacHacks, an intercollegiate programming competition that more than 500 students from major universities have registered to participate in next month.",
    link: "https://www.bizjournals.com/sacramento/news/2018/10/17/kings-sponsor-big-intercollegiate-programming.html"
};
const news3 = {
    num: "3",
    img: "/legacy/events/sachacks-news-1.png",
    header: "2020 Sacramento Kings Press Release",
    summary: "On February 22-23, undergraduate, graduate and industry professionals will gather at Allegiant Innovation Center for the Second Annual SacHacks – Sacramento’s major intercollegiate, 24-hour coding and competitive hackathon.",
    link: "https://www.nba.com/kings/news/sacramento-kings-sachacks-and-major-league-hacking-host-second-annual-hackathon-local-college"
};

// Boilerplate for Medium articles components
const medium1 ={
    num: "1",
    img:"/legacy/events/2018-medium.jpeg",
    header: "Recap of SacHacks 2018",
    summary: "On November 17–18, 2018 at McClellan Conference Center in Sacramento, California, we had the first year of SacHacks, the first intercollegiate hackathon in the Sacramento region.",
    link: "https://medium.com/sachacks/recap-of-sachacks-2018-5ff4f01184b4"
};

const medium2 ={
    num: "2",
    img:"/legacy/events/2020-medium.jpeg",
    header: "Recap of SacHacks 2020",
    summary: "On February 22–23, 2020 at Allegiant Innovation Center in Sacramento, California, we had the second year of SacHacks, the first intercollegiate hackathon in the Sacramento region.",
    link: "https://medium.com/sachacks/recap-of-sachacks-2020-4a4efff61c88"
};

const medium3 ={
    num: "3",
    img:"/legacy/events/last-medium.png",
    header: "Impacting the Outside World by Thinking Inside the 'BOX' ",
    summary: "An active look into IBM Z Mainframe at SacHacks 2020",
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
