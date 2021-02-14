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
                    <a href="#" className="fa fa-ibm"><img src=''/></a>
                </div>
                <div className = "row row-2">
                    <a href="#" className="fa fa-8vc"><img src=''/></a>
                    <a href="#" className="fa fa-8vc"><img src=''/></a>
                    <a href="#" className="fa fa-8vc"><img src=''/></a>
                </div>
                <div className = "row row-3">
                    <a href="#" className="fa fa-8vc"><img src=''/></a>
                    <a href="#" className="fa fa-8vc"><img src=''/></a>
                    <a href="#" className="fa fa-8vc"><img src=''/></a>
                </div>
                <div className = "row row-4">
                    <a href="#" className="fa fa-8vc"><img src=''/></a>
                    <a href="#" className="fa fa-8vc"><img src=''/></a>
                </div>
                <div className = "extension_two"></div>
            </div>
        </React.Fragment>
    );
};

export default Sponsors_Lovelace;