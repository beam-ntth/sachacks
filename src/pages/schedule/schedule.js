/**
 * Schedule page is quite self-explanatory, this is where people come look at the schedule
 * - Please go visit Figma for more information
 * For this page, there are three main components:
 * 1. Schedule for 1st day
 * 2. Schedule for 2nd day
 * 3. Map
 * 
 * - Currently we still haven't fill out any info because we still do not know the schedule
 */

import React, { useEffect, useState } from 'react';
import './schedule.css';

import Navbar from '../../shared/Navigation/Navbar';
import Copyright from '../../shared/Copyright/Copyright';
import MobileNavBar from '../../shared/MobileNavBar/MobileNavBar';


const Schedule = () => {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`Feb 21, 2021 11:00:00`).getTime() - +new Date().getTime();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        console.log(timeLeft);
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    // const [year] = useState(new Date().getFullYear());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (timeLeft[interval] == null) {
            return;
        }
        timerComponents.push(
            <span>{timeLeft[interval] == 0 ? '0' : timeLeft[interval]}{interval === 'days' ? ' d' : ''}{interval === 'hours' ? ' h' : ''}{interval === 'minutes' ? ' m' : ''}{interval === 'seconds' ? ' s' : ' : '}</span>
        );
    });

    const [ day, setDay ] = useState( { day: 1 } );

    const start = Date.now()

    const day1 = (
        <ul className='event-ul'>
            <li className='event'>
                <span className='time'>4:00 PM PST</span>
                <span className='todo'>Check-In Start</span>
                <span className='detail'>Be sure to check your email and fill out the hacker check-in form, then hop onto our Hopin and Discord!</span>
            </li>
            <li className='event'>
                <span className='time'>6:00 PM PST</span>
                <span className='todo'>Opening Ceremony</span>
                <span className='detail'>Come join the opening ceremony for SacHacks 2021 to hear from our amazing sponsors and learn more about our hackathon!</span>
            </li>
            <li className='event'>
                <span className='time'>6:15 PM PST</span>
                <span className='todo'>IBM Keynote Workshop</span>
                <span className='detail'>Join us for an introduction to Enterprise Computing with Sudharsana Srinivasan! The keynote will cover the open source nature of the platform by Javier Perez and get a sneak peek into AI and ML on Z fun projects with Tanmay Bakshi.</span>
            </li>
            <li className='event'>
                <span className='time'>7:00 PM PST</span>
                <span className='todo'>Hacking Starts + Team Mixer</span>
                <span className='detail'>Don’t have a team? No worries! Meet and team up with other hackers to launch your ideas at SacHacks 2021!</span>
            </li>
            <li className='event'>
                <span className='time'>7:30 PM PST</span>
                <span className='todo'> Datathon for Social Good: ML on Z</span>
                <span className='detail'>During this hands on workshop hear from IBM's ML on Z experts Joe Joe Bostian and Alex Osadchyy. You will also get to hear from the IBM Z track winners of SacHacks 2020. You don't want to miss this amazing learning opportunity!</span>
            </li>
            <li className='event'>
                <span className='time'>9:10 PM PST</span>
                <span className='todo'> Intro to UI/UX</span>
                <span className='detail'>Want to make your project stand out? Learn more about UI/UX Design in this interactive workshop hosted by Grace from Design Buddies!</span>
            </li>
            <li className='event'>
                <span className='time'>10:10 PM PST</span>
                <span className='todo'> Exploding Designer's Block</span>
                <span className='detail'>Come learn more about game design in our Exploding Designer’s Block workshop, hosted by Dan, Lead Designer at EA!</span>
            </li>
            <li className='event'>
                <span className='time'>11:10 PM PST</span>
                <span className='todo'> Intro to Hardware Hacking with Arduino</span>
                <span className='detail'>No experience with creating a hardware project? Come learn how to start one, no hardware required!</span>
            </li>
        </ul>
    );

    const day2 = (
        <ul className='event-ul'>
            <li className='event'>
                <span className='time'>12:00 AM PST</span>
                <span className='todo'>Intro to Data Science</span>
                <span className='detail'>Come learn how to get started with Data Science from Henrry Gunawan! He is a TA for UC Davis Data Science & AI Systems Senior Design. Check out his LinkedIn <a href="https://www.google.com/url?q=http://linkedin.com/in/henrry-gunawan&sa=D&source=editors&ust=1613594053102000&usg=AOvVaw0KuxmnyzMD1jdsv_xXqS2k" target="_blank">here</a>.</span>
            </li>
            <li className='event'>
                <span className='time'>8:00 AM PST</span>
                <span className='todo'>Intro to Web Development</span>
                <span className='detail'>Learn the basics of Web Development in our beginner workshop!</span>
            </li>
            <li className='event'>
                <span className='time'>9:00 AM PST</span>
                <span className='todo'>Adobe XD Workshop</span>
                <span className='detail'>Learn how to create a website prototype in a matter of minutes with Adobe XD, hosted by Elizé!</span>
            </li>
            <li className='event'>
                <span className='time'>10:15 AM PST</span>
                <span className='todo'>Design Systems</span>
                <span className='detail'>Learn more about design systems in this workshop hosted by Grace from Design Buddies!</span>
            </li>
            <li className='event'>
                <span className='time'>11:00 AM PST</span>
                <span className='todo'>Fireside Chat with Genesia Ting, Product Designer</span>
                <span className='detail'>Want to learn more about Product Design? Check out our Fireside Chat with Genesia Ting!</span>
            </li>
            <li className='event'>
                <span className='time'>12:00 PM PST</span>
                <span className='todo'>Fireside Chat with Erica Lee, Experience Designer</span>
                <span className='detail'>Interested in FinTech? Check out our Fireside Chat with Erica Lee, Experience Designer at Bank of America! </span>
            </li>
            <li className='event'>
                <span className='time'>1:00 PM PST</span>
                <span className='todo'>MLH USAF Cybersecurity Challenge</span>
                <span className='detail'>The U.S. Air Force is the world’s preeminent force in air, space and cyberspace. Come check out and learn more about cybersecurity during this challenge!</span>
            </li>
            <li className='event'>
                <span className='time'>2:00 PM PST</span>
                <span className='todo'>Intro to JS</span>
                <span className='detail'>What to learn more about frontend development? Make sure to drop by our Intro to JavaScript workshop, tag-teamed by Franklin and Corbin!</span>
            </li>
            <li className='event'>
                <span className='time'>7:00 PM PST</span>
                <span className='todo'>Alumni AMA Panel</span>
                <span className='detail'>Ever wanted to learn how to organize your own hackathon? What life is like as a software engineer? Come ask the alumni of SacHacks anything!</span>
            </li>
            <li className='event'>
                <span className='time'>7:30 PM PST</span>
                <span className='todo'>MLH Mini Event: Slideshow Karaoke</span>
                <span className='detail'>Slideshow Karaoke is an awesome activity where you give the improv presentation of your life!</span>
            </li>
            <li className='event'>
                <span className='time'>9:00 PM PST</span>
                <span className='todo'>Designing Startups for Social Good</span>
                <span className='detail'>Learn more about Designing Startups for Social good with the Ethicli team! Discussion includes what to consider when designing your startup and projects for social good. Topics include business models, who to work with, and ethical considerations.</span>
            </li>
        </ul>
    );

    const day3 = (
        <ul className='event-ul'>
            <li className='event'>
                <span className='time'>7:00 AM PST</span>
                <span className='todo'>Submission Deadline</span>
                <span className='detail'>Submit your projects. Don't worry, you can still work on it as long as you've submitted it!!</span>
            </li>
            <li className='event'>
                <span className='time'>11:00 AM PST</span>
                <span className='todo'>Hacking Ends</span>
                <span className='detail'>Congratulations! You made it to the end of hacking!!</span>
            </li>
            <li className='event'>
                <span className='time'>3:00 PM PST</span>
                <span className='todo'>Sacramento Tech Talk</span>
                <span className='detail'>Learn more about technology’s role with the future of Sacramento!</span>
            </li>
            <li className='event'>
                <span className='time'>6:00-7:00 PM PST</span>
                <span className='todo'>Closing ceremony</span>
                <span className='detail'>Thank you so much for attending SacHacks 2021! Come join us at the closing ceremony for the reveal of this year’s winners and more!</span>
            </li>
        </ul>
    );

    const changeDayHandler = (day) => {
        setDay(day)
        return
    }

    let showday = day1;
    let classDay1 = 'day active', classDay2 = 'day', classDay3 = 'day';
    if ( day === 1 ) {
        showday = day1;
        classDay1 = 'day active'
        classDay2 = 'day'
        classDay3 = 'day'
    } else if ( day === 2 ) {
        showday = day2;
        classDay1 = 'day'
        classDay2 = 'day active'
        classDay3 = 'day'
    } else if ( day === 3 ) {
        showday = day3;
        classDay1 = 'day'
        classDay2 = 'day'
        classDay3 = 'day active'
    }

    return (
        <React.Fragment>
            <div className='schedule-page'>
                <Navbar />
                <MobileNavBar />
                <div className='timer'>
                    <div className='timer-header'>
                        <h1>Timer</h1>
                    </div>
                    <div className='timer-second-row'>
                        {/* <div className='next-event'>
                            <h3>New Event</h3> 
                            <h2>Check-In</h2> 
                         </div>
                        <div className='start-time'>
                            <h3>Start Time</h3>
                            <h2>4:00PM</h2>
                        </div> */}
                        <div className='countdown'>
                            <h3>Countdown until hacking ends</h3>
                            <h2>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</h2>
                        </div>
                    </div>
                </div>
                <div className='schedule-map'>
                    <div className='sche-side'>
                        <h1>Schedule</h1>
                        <div className='sche-date'>
                            <div className='fri-day' onClick={ () => changeDayHandler(1) }>
                                <div className={classDay1}>Fri. Feb, 19</div>
                            </div>
                            <div className='first-day' onClick={ () => changeDayHandler(2) }>
                                <div className={classDay2}>Sat. Feb, 20</div>
                            </div>
                            <div className='second-day' onClick={ () => changeDayHandler(3) }>
                                <div className={classDay3}>Sun. Feb, 21</div>
                            </div>
                        </div>
                        <div className='events'>
                            { showday }
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </React.Fragment>
    );
};

export default Schedule;
