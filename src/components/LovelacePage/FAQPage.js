import React, { useState } from 'react';
import "./FAQPage.css";

// Import all the necessary components for this section
import LaceCards from './FAQCards/LaceFaqCard';

const FAQPage = () => {
    return (
        <React.Fragment>
            <div className="lace-FAQPage" id="faq-lovelace-id">
                <a id="faq"></a>
                <div className="lace-extension"></div>
                <div className="lace-FAQ">
                    <h1>
                        FAQ
                    </h1>
                </div>
                <div className="lace-extension_one"></div>
                <div className="lace-questions">
                    <div className="lace-row_one">
                        <LaceCards qa={ { q: 'What is a hackathon?', a: 'A hackathon is a event where students of different backgrounds come together to create a project from the ground up. You will work with others in up to teams of 4 people to bring your ideas to life, all while attending workshops, learning from speakers, networking with our sponsors, and meeting like-minded people!' } } />
                        <LaceCards qa={ { q: 'Who can participate?', a: 'Any undergraduate student or graduate student over the age of 18 that identifies as women or gender minority are welcome to participate and hack! We encourage allies to participate as mentors and volunteers!' } } />
                        <LaceCards qa={ { q: 'How much does it cost to attend?', a: 'Everything is provided by our team and sponsors. The event is free to attend!' } } />
                        <LaceCards qa={ { q: 'When is the hacker application deadline?', a: 'The hacker applications are closed at 11:59pm Pacific Time on April 20, 2021!' } } />
                        <LaceCards qa={ { q: 'Can I attend if I have no coding experience?', a: 'Yes, our event is beginner friendly and open to all majors. You can learn to code through our beginner friendly workshops. There will also be mentors throughout the event providing live drop-in assistance!' } } />
                    </div>
                    <div className="lace-row_two">
                        <LaceCards qa={ { q: 'I don\'t have a team. Can I still attend?', a: 'Yes! We will have team mixers before and during the event for our participants to form teams and meet other like-minded people!' } } />
                        <LaceCards qa={ { q: 'What are the team and submission requirements?', a: 'We will be accepting teams anywhere from 1-4 people. Everyone who is formally accepted and joins through the invite email can make teams if you don\'t have a team already, you can make one through the LoveLace Hacks Discord platform. All individuals and groups must have a Devpost account per person and submit a project. More information on successfully submitting will be shared during the event.' } } />
                        <LaceCards qa={ { q: 'Can I come with a project that I’ve already worked on?', a: 'You will be building your project from the ground up, and teams are not allowed to work on or submit a project that they have already worked on prior to the hacking start time. However, feel free to brainstorm various ideas of what you want to build (just don’t work on any coding or design beforehand)!' } } />
                        <LaceCards qa={ { q: 'How do I stay connected with updates and social media?', a: 'Stay up to date through our social media networks by following us on Facebook, Instagram, and Twitter @SacHacks!' } } />
                        <LaceCards qa={ { q: 'Any other questions?', a: 'Please contact us with any questions or concerns at team@sachacks.io' } } />
                    </div>
                </div>
                <div className="lace-extension_two"></div>
            </div>
        </React.Fragment>
    );
};

export default FAQPage;