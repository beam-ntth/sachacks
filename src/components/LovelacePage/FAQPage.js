import React, { useState } from 'react';
import "./FAQPage.css";

const FAQPage = () => {
    return (
        <React.Fragment>
            <div className = "FAQPage">
                <div className = "extension"></div>
                <div className = "FAQ">
                    <h1>
                        Frequently Asked Questions
                    </h1>
                </div>
                <div className = "extension_one"></div>
                <div className = "questions">
                    <div className = "row_one">
                        <p>
                            + What is a hackathon?
                        </p>
                        <p>
                            + How much does it cost?
                        </p>
                        <p>
                            + Who can attend?
                        </p>
                        <p>
                            + What if I am new to coding?
                        </p>


                    </div>
                    <div className = "row_two">
                        <p>
                            + What are the rules?
                        </p>
                        <p>
                            + When do applications close?
                        </p>
                        <p>
                            + What if I do not have a team?
                        </p>
                        <p>
                            + I have more questions!
                        </p>  
                    </div>
                </div>
                <div className = "extension_two"></div>
            </div>
        </React.Fragment>
    );
};

export default FAQPage;