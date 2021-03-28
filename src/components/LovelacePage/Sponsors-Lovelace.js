import React, { useState } from 'react';
import "./Sponsors-Lovelace.css";

const Sponsors_Lovelace = () => {
    return (
        <React.Fragment>
            <div className = "Lace-Sponsors">
                <div className = "Lace-Sponsors-Title">
                    <h1>
                        Sponsors
                    </h1>
                </div>
                <div className = "extension-lace"></div>
                <div className="footer-lovelace">
                    <div className = "col col-1">
                        <img src='lovelace2021/lovelace-logo.svg' alt='Lovelace Hacks'/>
                        <h1>Lovelace<br />Hacks</h1>
                    </div>
                    <div className = "col col-2">
                        <h1>Home</h1>
                        <h1>About Ada Lovelace</h1>
                        <h1>Our Values</h1>
                        <h1>About Us</h1>
                        <h1>FAQ</h1>
                    </div>
                    <div className = "col col-3">
                        <h1>Sponsor Us</h1>
                        <h1>MLH Code of Conduct</h1>
                        <h2>Follow Us :)</h2>
                        <div className="lace-social-media">
                            <a href=""><img src='lovelace2021/facebooklogo.png' className='Lovelace-Hacks-Facebook' /></a>
                            <a href=""><img src='lovelace2021/instagramlogo.png' className='Lovelace-Hacks-Instagram' /></a>
                            <a href=""><img src='lovelace2021/twitterlogo.png' className='Lovelace-Hacks-Twitter' /></a>
                        </div>
                    </div>
                    <div className = "col col-4">
                        <h1>Made with <span className="yellow-text">&#10084;</span> by <span className="yellow-text">SacHacks</span> & <span className="yellow-text">WiCS</span></h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Sponsors_Lovelace;