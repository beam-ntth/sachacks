import React from "react";
import "./member-card.css";

// Import Icons here
import {
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaEnvelope,
} from "react-icons/fa";

const MemberCard = ( props ) => {

    // Link to all the corresponding buttons
    const openLinkedin = () => {
        window.open( props.content.linkedinLink );
    };
    const openGithub = () => {
        window.open( props.content.githubLink );
    };
    const openMail = () => {
        window.open( props.content.mailLink );
    };
    const openFb = () => {
        window.open( props.content.fbLink );
    };
    const openInsta = () => {
        window.open( props.content.instaLink );
    };
    const openTwitter = () => {
        window.open( props.content.twitterLink );
    };

    return (
        <div className="lg-teams-member">
            <div className="lg-teams-member-photo">
                <img
                    src={ props.content.img }
                    alt={ "Member " + props.content.num }
                />
            </div>
            <div className="lg-teams-member-basic">
                <p className="name">{ props.content.name }</p>
                <p className="title">{ props.content.title }</p>
            </div>
            {/* Icons */ }
            <div className="lg-teams-member-social-media">
                { props.content.linkedin && <div className="lg-teams-media-button">
                    <FaLinkedin fill="#024CF3" size="30px" onClick={ openLinkedin } />
                </div> }
                { props.content.github && <div className="lg-teams-media-button">
                    <FaGithub fill="#024CF3" size="30px" onClick={ openGithub } />
                </div> }
                { props.content.mail && <div className="lg-teams-media-button">
                    <FaEnvelope fill="#024CF3" size="30px" onClick={ openMail } />
                </div> }
                { props.content.fb && <div className="lg-teams-media-button">
                    <FaFacebook fill="#024CF3" size="30px" onClick={ openFb } />
                </div> }
                { props.content.insta && <div className="lg-teams-media-button">
                    <FaInstagram fill="#024CF3" size="30px" onClick={ openInsta } />
                </div> }
                { props.content.twitter && <div className="lg-teams-media-button">
                    <FaTwitter fill="#024CF3" size="30px" onClick={ openTwitter } />
                </div> }
            </div>
        </div>
    );
};

export default MemberCard;
