import React, { useState } from 'react';
import "./Sponsors-Lovelace.css";

const Sponsors_Lovelace = () => {
    return (
        <React.Fragment>
            <div className = "Lace-Sponsors">
                <div className = "extension"></div>
                <div className = "Title">
                    <h1>
                        Sponsors
                    </h1>
                </div>
                <div className = "row row-1">
                    <a href="#" className="fa fa-ibm"><img src='lovelace2021/ibm.png'/></a>
                </div>
                <div className = "row row-2">
                    <a href="#" className="fa fa-8vc"><img src='sponsors/8vc.png'/></a>
                    <a href="#" className="fa fa-8vc"><img src='lovelace2021/echoAR.png'/></a>
                    <a href="#" className="fa fa-8vc"><img src='sponsors/digital-ocean.png'/></a>
                </div>
                <div className = "row row-3">
                    <a href="#" className="fa fa-8vc"><img src='sponsors/Bugsee-Logo.svg'/></a>
                    <a href="#" className="fa fa-8vc"><img src='lovelace2021/wolframLanguage.png'/></a>
                    <a href="#" className="fa fa-8vc"><img src='lovelace2021/xyz-logo-color.png'/></a>
                </div>
                <div className = "row row-4">
                    <a href="#" className="fa fa-8vc"><img src='lovelace2021/product-hunt-logo.png'/></a>
                    <a href="#" className="fa fa-8vc"><img src='lovelace2021/taskade-logo.png'/></a>
                </div>
                <div className = "extension_two"></div>
            </div>
        </React.Fragment>
    );
};

export default Sponsors_Lovelace;