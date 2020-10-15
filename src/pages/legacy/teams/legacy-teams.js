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

import React from "react";
import "./legacy-teams.css";

// Add more components here
import MemberCard from "../../../components/LegacyPage/teams/member-card/member-card";

// Boilerplate for member components
const member1 = {
    num: "1",
    img: "/legacy/teams/gg_profile.png",
    name: "Megan Brown",
    title: "Co-Founder",
};

const LegacyTeams = ( props ) => {
    return (
        <div className="lg-teams">
            <div className="lg-teams-layout">
                <div className="lg-teams-year-list">
                    <a href='#2020' className="lg-teams-year year-active">2020</a>
                    <a href='#2018' className="lg-teams-year">2018</a>
                </div>
                <div className="lg-teams-main-panel-container">
                    {/* 2020 Team */}
                    <div className="lg-teams-main-panel" id='2020'>
                        <h2 className="lg-teams-header">2020 Team</h2>

                        <div className="lg-teams-group-photo">
                            <img
                                src="/legacy/teams/group-photo-1.png"
                                alt="SacHacks event in 2018"
                            />
                        </div>

                        <div className="lg-teams-member-list">
                            <div className="lg-teams-member-sublist">
                                <p className="lg-teams-role-header">Executives</p>
                                {/* Add more executives below */ }
                                <MemberCard content={ member1 } />
                                <MemberCard content={ member1 } />
                            </div>
                            <div className="lg-teams-member-sublist">
                                <p className="lg-teams-role-header">Leads</p>
                                {/* Add more leads below */ }
                                <MemberCard content={ member1 } />
                                <MemberCard content={ member1 } />
                            </div>
                            <div className="lg-teams-member-sublist">
                                <p className="lg-teams-role-header">Associates</p>
                                {/* Add more associates below */ }
                                <MemberCard content={ member1 } />
                                <MemberCard content={ member1 } />
                            </div>
                        </div>
                    </div>
                    {/* 2018 Team */}
                    <div className="lg-teams-main-panel" id='2018'>
                        <h2 className="lg-teams-header">2018 Team</h2>

                        <div className="lg-teams-group-photo">
                            <img
                                src="/legacy/teams/group-photo-1.png"
                                alt="SacHacks event in 2018"
                            />
                        </div>

                        <div className="lg-teams-member-list">
                            <div className="lg-teams-member-sublist">
                                <p className="lg-teams-role-header">Executives</p>
                                {/* Add more executives below */ }
                                <MemberCard content={ member1 } />
                                <MemberCard content={ member1 } />
                            </div>
                            <div className="lg-teams-member-sublist">
                                <p className="lg-teams-role-header">Leads</p>
                                {/* Add more leads below */ }
                                <MemberCard content={ member1 } />
                                <MemberCard content={ member1 } />
                            </div>
                            <div className="lg-teams-member-sublist">
                                <p className="lg-teams-role-header">Associates</p>
                                {/* Add more associates below */ }
                                <MemberCard content={ member1 } />
                                <MemberCard content={ member1 } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegacyTeams;
