import React, { useState } from 'react';
import "./FAQPage.css";

// Import all the necessary components for this section
import LaceCards from './FAQCards/LaceFaqCard';

const FAQPage = () => {
    return (
        <React.Fragment>
            <div className="lace-FAQPage">
                <div className="lace-extension"></div>
                <div className="lace-FAQ">
                    <h1>
                        FAQ
                    </h1>
                </div>
                <div className="lace-extension_one"></div>
                <div className="lace-questions">
                    <div className="lace-row_one">
                        <LaceCards qa={ { q: 'What is a hackathon?', a: 'idk' } } />
                        <LaceCards qa={ { q: 'Who can attend?', a: 'idk' } } />
                        <LaceCards qa={ { q: 'How much does it cost to attend?', a: 'idk' } } />
                        <LaceCards qa={ { q: 'When are applications due?', a: 'idk' } } />
                        <LaceCards qa={ { q: 'Code of Conduct?', a: 'idk' } } />
                    </div>
                    <div className="lace-row_two">
                        <LaceCards qa={ { q: "I don't have a team. Can I still attend?", a: 'idk' } } />
                        <LaceCards qa={ { q: 'Any other questions?', a: 'idk' } } />
                    </div>
                </div>
                <div className="lace-extension_two"></div>
            </div>
        </React.Fragment>
    );
};

export default FAQPage;