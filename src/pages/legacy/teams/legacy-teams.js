import React from "react";
import "./legacy-teams.css";

// Add more components here

// /

const LegacyTeams = (props) => {
    return (
        <div className="lg-teams">
            <div className="lg-teams-layout">
                <div className="lg-teams-year-list">
                    <p classNmae="lg-teams-year">2020</p>
                    <p classNmae="lg-teams-year">2019</p>
                    <p classNmae="lg-teams-year">2018</p>
                </div>
                <div className="lg-teams-main-panel">
                    <h2 className="lg-teams-header">2018 Team</h2>

                    <div className="lg-teams-roles">
                        <p className="lg-teams-role role-active">Executives</p>
                        <p className="lg-teams-role">Leads</p>
                        <p className="lg-teams-role">Associates</p>
                    </div>

                    <div className="lg-teams-group-photo">
                        <img
                            src="/legacy/teams/group-photo-1.png"
                            alt="Group photo 2018"
                        />
                    </div>

                    <div className="lg-teams-member-list">
                        <div>
                            <p className="lg-teams-role-header">Executives</p>
                            {/* Component of one member */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegacyTeams;
