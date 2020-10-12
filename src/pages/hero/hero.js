/**
 * Hero page is basically the landing page
 * 
 * The page comprised of four main components - Go to the corresponding file to make changes to each component
 * 1. About Section - sachacks/src/components/HeroPage/About.js
 * 2. FAQ section - sachacks/src/components/HeroPage/Faq.js
 * 4. Speakers section - sachacks/src/components/HeroPage/Speakers.js (Currently commented out cuz we don't know yet)
 * 3. Sponsors/Partners section - sachacks/src/components/HeroPage/Sponsors.js
 * 
 * Current work:
 * 1. Idea on having CSS Loader - In progress
 */

import React from 'react';
import './hero.css';

// import Loader from '../../shared/Loader/Loader';
import Navbar from '../../shared/Navigation/Navbar';
import MobileNavBar from '../../shared/MobileNavBar/MobileNavBar';
import About from '../../components/HeroPage/About';
import Faq from '../../components/HeroPage/Faq';
// import Speakers from '../../components/HeroPage/Speakers';
import Sponsors from '../../components/HeroPage/Sponsors';
import Copyright from '../../shared/Copyright/Copyright';

const Hero = () => {
    return (
        <React.Fragment>
            {/* <Loader /> */}
            <div className='hero-page'>
                <Navbar />
                <MobileNavBar />
                <About />
            </div>
            <Faq />
            {/* <Speakers /> */}
            <Sponsors />
            <Copyright />
        </React.Fragment>
    );
};

export default Hero;
