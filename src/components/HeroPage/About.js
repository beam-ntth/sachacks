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
            <div className='co-host'>
                <h6>Co-hosted by</h6>
                <img src='/images/IBM_LOGO-01.png' alt='IBM Main Logo' />
            </div>
            <h5 className="date">VIRTUALLY FEBRUARY 19-21, 2021</h5>
            <p className="description">
                SacHacks is the first major intercollegiate hackathon in the
                Sacramento, California area. Our passion is to cultivate the
                untapped potential of those in Sac by launching their ideas into
                action during a 36-hour hackathon.{ " " }
            </p>
            {/* <div className='map-buttons'>
                <a href='https://sachacks.typeform.com/to/zGQawsSI' target='_blank' rel='noopener noreferrer'><div className='map-button'>Apply Now</div></a>
                <a href='https://sachacks.typeform.com/to/SXaHQrRC' target='_blank' rel='noopener noreferrer'><div className='map-button'>Mentor</div></a>
            </div> */}
            <SocialMedia />
        </div>
    );
};

export default About;
