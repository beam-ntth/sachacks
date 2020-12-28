/**
 * This component is at the very top of the landing page
 */

import React from "react";
import "./About.css";

import SocialMedia from "./SocialMedia/SocialMedia";

const About = () => {
    return (
        <div className="about" data-aos="fade-up">
            <h1 className="sachacks">SacHacks</h1>
            <h2 className="motto">
                <span className="red">Design.</span>
                <span className="green">Code.</span>
                <span className="blue">Launch.</span>
            </h2>
            <h5 className="date">VIRTUALLY FEBRUARY 19-21, 2021</h5>
            <p className="description">
                SacHacks is the first major intercollegiate hackathon in the
                Sacramento, California area. Our passion is to cultivate the
                untapped potential of those in Sac by launching their ideas into
                action during a 36-hour hackathon.{" "}
            </p>
            <div className='map-buttons'>
                <div className='map-button'><a href='https://sachacks.typeform.com/to/b3iHwPuY' target='_blank' rel='noopener noreferrer'>Hacker</a></div>
                <div className='map-button'><a href='mailto: team@sachacks.io' rel='noopener noreferrer'>Sponsor</a></div>
            </div>
            <SocialMedia />
        </div>
    );
};

export default About;
