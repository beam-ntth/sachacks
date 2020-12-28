/**
 * This is a sub-component of the about section - display all the icons
 */

import React from 'react';
import './SocialMedia.css'

// Add more icons here
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaMedium, FaYoutube } from 'react-icons/fa';

const SocialMedia = () => {
    
    const openFacebook = () => {
        window.open('https://www.facebook.com/sachacks/')
    }

    const openLinkedin = () => {
        window.open('https://www.linkedin.com/company/sachacks/')
    }

    const openInsta = () => {
        window.open('https://www.instagram.com/sachacks/?hl=en')
    }

    const openTwitter = () => {
        window.open('https://twitter.com/sachacks2021')
    }

    const openMedium = () => {
        window.open('https://medium.com/sachacks')
    }

    const openYoutube = () => {
        window.open('https://www.youtube.com/channel/UC4IajrnBSC09eHxKVeDyk3Q?feature=applinks')
    }

    return (
        <div className='social-media'>
            <div className='media-button' onClick={openFacebook}><FaFacebook fill='white' size='35px' /></div>
            <div className='media-button' onClick={openLinkedin}><FaLinkedin fill='white' size='35px' /></div>
            <div className='media-button' onClick={openInsta}><FaInstagram fill='white' size='35px' /></div>
            <div className='media-button' onClick={openTwitter}><FaTwitter fill='white' size='35px' /></div>
            <div className='media-button' onClick={openMedium}><FaMedium fill='white' size='35px' /></div>
            <div className='media-button' onClick={openYoutube}><FaYoutube fill='white' size='35px' /></div>
        </div>
    );
};

export default SocialMedia;


