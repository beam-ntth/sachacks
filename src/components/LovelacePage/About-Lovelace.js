/**
 * This component is at the very top of the landing page
 */

import React from "react";
import "./About-Lovelace.css";

/*
import SocialMedia from "../HeroPage/SocialMedia/SocialMedia";
*/

const AboutLovelace = () => {
    return (
      <div className="grid-container" data-aos="fade-up">
          <div className="about-grid"> 
              <h1 className="event-title">Lovelace</h1>
              <h1 className="event-title">Hacks</h1>
              <h5 className="event-date yellow-text">VIRTUAL @ APRIL 23 - 25, 2021</h5>
              <p className="body-text purple-text letter-spacing-3">
                  We're the <span className="yellow-text">first women focused hackathon</span> from UC Davis.<br />
                  WiCS & SacHacks are dedicated to fostering<br />
                  a culture of hacking for women and social good<br />
                  through the empowerment of technology.{ " " }
              </p>
              <div className="lace-map-buttons">
                  <a href='https://form.typeform.com/to/MvryfMWF' target='_blank' rel='noopener noreferrer'  className = "lace-hacker"><div className='lace-map-button button-text letter-spacing-7'>Apply as Hacker</div></a>
                  <a href='https://forms.gle/WQSrZwNL9Jv6kFUN6' target='_blank' rel='noopener noreferrer' className = "lace-mentor"><div className='lace-map-button button-text letter-spacing-7'>Apply as Mentor</div></a>
              </div>
              <p className="body-text purple-text letter-spacing-5">
                  Launched by <span className="yellow-text">SacHacks</span> and <span className="yellow-text">WiCS</span>
              </p>
              <div className="lace-sponsor-logos">
                  <img src="/lovelace2021/launched-by/sachacks-logo-white.png" alt="SacHacks" className="sachacks-logo-size"/>
                  <img src="/lovelace2021/launched-by/WiCS-logo.png" alt="UC Davis Women in Computer Science" className="wics-logo-size"/>
              </div>
          </div> 
          <div className="ada-lovelace-window-grid">
              <img src="/lovelace2021/ada-lovelace-window/ada-lovelace-window.svg" alt="" className="ada-lovelace-window-image"/>
          </div>
      </div>
    );
};

export default AboutLovelace;
