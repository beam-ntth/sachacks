/**
 * This file is a subpage of the main legacy page
 * If you would like to make any adjustments to the main page, please refer to:
 * -> /pages/legacy/main/legacy-main.js | legacy-main.css for more details
 * 
 * To add more components to this page:
 * 1. Copy the boilerplate below, and add the information of the new member
 * 2. Add the component to the corresponding section
 * 
 * !! MAKE SURE TO ADD THE PICTURE TO THE CORRECT FOLDER
 * here -> public/legacy/teams/
 */

import React, { useState, useRef } from "react";
import "./legacy-teams.css";

// Add more components here
import MemberCard from "../../../components/LegacyPage/teams/member-card/member-card";
import * as member from "./legacy-team-member";

// Boilerplate for member components
// -> Go to the neighbor in this same folder -> ./legacy-team-member.js

const LegacyTeams = ( props ) => {

    // Keep the reference of where the elements are for animation
    const ref2020 = useRef();
    const ref2018 = useRef();
    const [ yearActive2020, setYearActive2020 ] = useState( true );
    const [ yearActive2018, setYearActive2018 ] = useState( false );

    const scroll = ( ref ) => {
        ref.current.scrollIntoView( { behavior: 'smooth' } );
    };

    const sidebarYearToggleBtn = ( year ) => {
        if ( year === 2020 && !yearActive2020 ) {
            setYearActive2020( true );
            setYearActive2018( false );
            return;
        }
        if ( year === 2018 && !yearActive2018 ) {
            setYearActive2018( true );
            setYearActive2020( false );
            return;
        }
    };

    /* Doesn't work idk why */
    // const isInViewport = ( element ) => {
    //     if (!element.current) {
    //         return false;
    //     }
    //     const rect = element.current.getBoundingClientRect();
    //     console.log(rect);
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) &&
    //         rect.right <= ( window.innerWidth || document.documentElement.clientWidth )
    //     );
    // };

    return (
        <div className="lg-teams">
            <div className="lg-teams-layout">
                <div className="lg-teams-year-list">
                    <div
                        href='#2020'
                        className={ yearActive2020 ? "lg-teams-year year-active" : "lg-teams-year" }
                        onClick={ () => {
                            scroll( ref2020 );
                            sidebarYearToggleBtn( 2020 );
                            return;
                        } }>2020</div>
                    <div
                        href='#2018'
                        className={ yearActive2018 ? "lg-teams-year year-active" : "lg-teams-year" }
                        onClick={ () => {
                            scroll( ref2018 );
                            sidebarYearToggleBtn( 2018 );
                            return;
                        } }>2018</div>
                </div>
                <div className="lg-teams-main-panel-container">
                    {/* 2020 Team */ }
                    <div ref={ ref2020 } className="lg-teams-main-panel" id='2020'>
                        <h2 className="lg-teams-header">2020 Team</h2>
                        <div className="lg-teams-group-photo">
                            <img src="/legacy/teams/group-photo-2020.png" alt="SacHacks event in 2020" />
                        </div>
                        <div className="lg-teams-member-list">
                            <div className="lg-teams-member-sublist">
                                <p className="lg-teams-role-header">Executives</p>
                                {/* Add more executives below */ }
                                <MemberCard content={ member.megan } />
                                <MemberCard content={ member.michaela } />
                            </div>
                            <div className="lg-teams-member-sublist">
                                <p className="lg-teams-role-header">Leads</p>
                                {/* Add more leads below */ }
                                <MemberCard content={ member.megan } />
                                <MemberCard content={ member.megan } />
                            </div>
                            <div className="lg-teams-member-sublist">
                                <p className="lg-teams-role-header">Associates</p>
                                {/* Add more associates below */ }
                                <MemberCard content={ member.megan } />
                                <MemberCard content={ member.megan } />
                            </div>
                        </div>
                    </div>
                    {/* 2018 Team */ }
                    <div ref={ ref2018 } className="lg-teams-main-panel" id='2018'>
                        <h2 className="lg-teams-header">2018 Team</h2>
                        <div className="lg-teams-group-photo">
                            <img src="/legacy/teams/group-photo-2018.png" alt="SacHacks event in 2018" />
                        </div>
                        <div className="lg-teams-member-list">
                            <div className="lg-teams-member-sublist">
                                <p className="lg-teams-role-header">Executives</p>
                                {/* Add more executives below */ }
                                <MemberCard content={ member.megan } />
                                <MemberCard content={ member.megan } />
                            </div>
                            <div className="lg-teams-member-sublist">
                                <p className="lg-teams-role-header">Leads</p>
                                {/* Add more leads below */ }
                                <MemberCard content={ member.megan } />
                                <MemberCard content={ member.megan } />
                            </div>
                            <div className="lg-teams-member-sublist">
                                <p className="lg-teams-role-header">Associates</p>
                                {/* Add more associates below */ }
                                <MemberCard content={ member.megan } />
                                <MemberCard content={ member.megan } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegacyTeams;
