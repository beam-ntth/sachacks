import React, { useState } from 'react';
import "./About-Lovelace.css";

const About_Lovelace = () => {
    return (
        <React.Fragment>
            <div className = "LogoPartners">
                <div className = "PartnerLogos">
                    <div className = "ellipse"></div>
                    <p>
                        Presented by SacHacks and WiCS
                    </p>
                    <img src='lovelace2021/sachacks.png' alt='SacHacks Logo'/>
                    <img src='partners/wics.png' alt='WiCS Logo'/>
                </div>
                <div className = "sideElements">
                    <p>
                        Virtual Hackathon
                    </p>
                    <p>
                        Apr 12-14
                    </p>
                    <div className = "button_row_1">
                        <a href=" " target = "_blank" rel="noopener noreferrer">
                            <div className="button Apply Now">Apply Now</div>
                        </a>
                        <a href=" " target = "_blank" rel="noopener noreferrer">
                            <div className="button Mentor">Mentor</div>
                        </a>
                    </div>
                    <a href=" " target = "_blank" rel="noopener noreferrer">
                        <div className="button Sponsor us">Sponsor us</div>
                    </a>
                </div>
            </div>
            <div className = "AboutUs">
                <h1>
                    About us
                </h1>
                <p>
                    We're the first female co-led hackathon from UC Davis. WiCS & Sachacks are dedicated to fostering a culture of hacking for women and social good through the empowerment of technology.
                </p>
                <div className = "rectangle"></div>
                <a href=" " target = " " rel="noopener noreferrer">See More</a>
                <div className = "extension"></div>
            </div>
            <div className = "Social Media">
                <a href="mailto:lovelacehacks@gmail.com">lovelacehacks@gmail.com</a>
                <div className = "Sociallogos">
                    <a href="#" className="fa fa-gmail"><img src='lovelace2021/gmail.png'/></a>
                    <a href="#" className="fa fa-twitter"><img src='lovelace2021/twitter.png'/></a>
                    <a href="#" className="fa fa-instagram"><img src='lovelace2021/instagram.png'/></a>
                    <a href="#" className="fa fa-facebook"><img src='lovelace2021/facebook.png'/></a>
                </div>
                <p className = "heartline">
                    Made with <span className="heart"></span> @ Davis
                </p>
                <div className = "extension 2"></div>
            </div>
        </React.Fragment>
    );
};

export default About_Lovelace;
