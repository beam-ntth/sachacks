import React from 'react';
import './lovelace.css';

import Nav_Lovelace from '../../shared/LovelaceNavBar/Navbar-Lovelace';
import About_Lovelace from '../../components/LovelacePage/About-Lovelace';
import Lovelace_Mission from '../../components/LovelacePage/Lovelace-Mission';
import Team_Lovelace from "../../components/LovelacePage/Team-Lovelace";
import FAQPage from '../../components/LovelacePage/FAQPage';
import Sponsors_Lovelace from '../../components/LovelacePage/Sponsors-Lovelace';
import Footer_Lovelace from '../../components/LovelacePage/Footer-Lovelace';

const Lovelace = () => {
    return (
        <React.Fragment>
          <div className="lovelace-page">
            <Nav_Lovelace />
            <About_Lovelace />
            <Lovelace_Mission />
            {/* <Team_Lovelace /> Comment Team component out for now until we add everyone */}
            <FAQPage />
            <Sponsors_Lovelace />
            <Footer_Lovelace />
          </div>
        </React.Fragment>
    );
};

export default Lovelace;