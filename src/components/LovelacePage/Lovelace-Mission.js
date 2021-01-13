import React, { useState } from 'react';
import "./Lovelace-Mission.css";

const Lovelace_Mission = () => {
    return (
        <React.Fragment>
            <div className = "Lace-Mission">
                <div className = "extension"></div>
                <div className = "Title">
                    <h1>
                        Our Mission
                    </h1>
                </div>
                <div className = "summary">
                    <h4>
                        Our mission is to help individuals through technological use. We provide opportunities for females and minorities through this hackathon. We  strive to create a secure community in which individuals can learn, grow, and interact.
                    </h4>
                </div>
                <div className = "meet">
                    <h1>
                        Meet the team!
                    </h1>
                </div>
                <div className = "rows row-1">
                    <div className = "square square-1"></div>
                    <div className = "square square-2"></div>
                </div>
                <div className = "rows row-2">
                    <div className = "square square-3"></div>
                    <div className = "square square-4"></div>
                </div>
                <div className = "rows row-3">
                    <div className = "square square-5"></div>
                    <div className = "square square-6"></div>
                </div>
                <div className = "rows row-4">
                    <div className = "square square-7"></div>
                    <div className = "square square-8"></div>
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
            </div>
        </React.Fragment>
    );
};

export default Lovelace_Mission;