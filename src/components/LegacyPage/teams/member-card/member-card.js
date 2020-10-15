import React from "react";
import "./member-card.css";

// Icons
import {
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaEnvelope,
} from "react-icons/fa";

const MemberCard = (props) => {
    return (
        <div className="lg-teams-member">
            <div className="lg-teams-member-photo">
                <img
                    src={props.content.img}
                    alt={"Member " + props.content.num}
                />
            </div>
            <div className="lg-teams-member-basic">
                <p className="name">{props.content.name}</p>
                <p className="title">{props.content.title}</p>
            </div>
            {/* Icons */}
            <div className="lg-teams-member-social-media">
                <div className="lg-teams-media-button">
                    <FaLinkedin fill="#024CF3" size="30px" />
                </div>
                <div className="lg-teams-media-button">
                    <FaGithub fill="#024CF3" size="30px" />
                </div>
                <div className="lg-teams-media-button">
                    <FaEnvelope fill="#024CF3" size="30px" />
                </div>
                <div className="lg-teams-media-button">
                    <FaFacebook fill="#024CF3" size="30px" />
                </div>
                <div className="lg-teams-media-button">
                    <FaInstagram fill="#024CF3" size="30px" />
                </div>
                <div className="lg-teams-media-button">
                    <FaTwitter fill="#024CF3" size="30px" />
                </div>
            </div>
        </div>
    );
};

export default MemberCard;
