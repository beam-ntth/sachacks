import React from 'react';
import './lovelace.css';

import Nav_Lovelace from '../../shared/LovelaceNavBar/Navbar-Lovelace';
import About_Lovelace from '../../components/LovelacePage/About-Lovelace';
import FAQPage from '../../components/LovelacePage/FAQPage';
import Sponsors_Lovelace from '../../components/LovelacePage/Sponsors-Lovelace';
import Lovelace_Mission from '../../components/LovelacePage/Lovelace-Mission';

const Lovelace = () => {
    return (
        <React.Fragment>
            <div className='lace-nav'>
                <Nav_Lovelace />
                <About_Lovelace />
            </div>
            <FAQPage />
            <Sponsors_Lovelace />
            <Lovelace_Mission />
          
        </React.Fragment>
    );
};

export default Lovelace;