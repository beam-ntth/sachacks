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
              <div className="about">
                  <h1 className="event-title">Lovelace<br />Hacks</h1>
                  <h5 className="event-date yellow-text">VIRTUAL @ APRIL 23 - 25, 2021</h5>
                  <p className="body-text purple-text letter-spacing-3">
                      We're the <span className="yellow-text">first female co-led hackathon</span> from UC Davis.<br />
                      WiCS & SacHacks are dedicated to fostering<br />
                      a culture of hacking for women and social good<br />
                      through the empowerment of technology.{ " " }
                  </p>
                  <div className="map-buttons">
                      <a href='https://form.typeform.com/to/MvryfMWF' target='_blank' rel='noopener noreferrer'><div className='map-button button-text letter-spacing-7'>REGISTER NOW</div></a>
                  </div>
                  <p className="body-text purple-text letter-spacing-5">
                      Launched by <span className="yellow-text">SacHacks</span> and <span className="yellow-text">WiCS</span>
                  </p>
                  <img src="/lovelace2021/launched-by/sachacks-logo-white.png" alt="SacHacks" className="sachacks-logo-size"/>
                  <img src="/lovelace2021/launched-by/WiCS-logo.png" alt="UC Davis Women in Computer Science" className="wics-logo-size"/>
                  {/* <SocialMedia /> */}
              </div></div>
          <div className="ada-lovelace-window-grid">
              <img src="/lovelace2021/ada-lovelace-window/ada-lovelace-window.svg" alt="" className="ada-lovelace-window-image"/>
          </div>
      </div>
    );
};

export default AboutLovelace;
