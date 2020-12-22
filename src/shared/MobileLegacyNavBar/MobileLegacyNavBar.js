/**
 * This file is a Navigation bar component for the legacy website
 */

import React, { useState } from 'react';
import './MobileLegacyNavBar.css';

// Add more logos or icons here
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

const MobileLegacyNavBar = ( props ) => {

  const [ open, setOpen ] = useState( { open: true } );

  return (
    <React.Fragment>
      <div className='mobile-legacy'>
        {/* Hamburger Icon - top-left of the screen */ }
        <div className='hamburger-icon'
          onClick={ () => {
            setOpen( !open );
            return;
          } }
          style={ open ? { transform: 'rotate(180deg)', transition: '0.5s' } : { transform: 'rotate(180deg)', transition: '0.5s' } }>
          { open ? <GiHamburgerMenu size={ 30 } fill='white' /> : <MdClose size={ 30 } fill='white' /> }
        </div>
        <img onClick={ () => props.click( 'main' ) } className='mobile-main-logo' src='/legacy/navbar/sachacks-favicon-2021.png' alt='SacHacks Favicon' />
        <div className='mobile-fill'></div>
      </div>
      <div className='mobile-lg-backdrop' style={ open ? { display: 'none' } : { display: 'flex' } }></div>
      <div
        className='mobile-lg-home'
        onClick={ () => {
          props.click( 'main' );
          setOpen( true );
          return;
        } }
        style={ open ? { transform: 'translateY(-100px)', transition: '0.5s ease-in-out', opacity: '0' } : { transform: 'translateY(120px)', transition: '0.5s ease-in-out', opacity: '1' } }
      >
        <img className='mobile-lg-img' src='/legacy/navbar/Home-icon.png' alt='Home Icon' />
        <p>Home</p>
      </div>
      <div
        className='mobile-lg-teams'
        onClick={ () => {
          props.click( 'team' );
          setOpen( true );
          return;
        } }
        style={ open ? { transform: 'translateY(-100px)', transition: '0.5s ease-in-out', opacity: '0' } : { transform: 'translateY(200px)', transition: '0.5s ease-in-out', opacity: '1' } }
      >
        <img className='mobile-lg-img' src='/legacy/navbar/Teams-icon.png' alt='Teams Icon' />
        <p>Teams</p>
      </div>
      <div
        className='mobile-lg-events'
        onClick={ () => {
          props.click( 'event' );
          setOpen( true );
          return;
        } }
        style={ open ? { transform: 'translateY(-100px)', transition: '0.5s ease-in-out', opacity: '0' } : { transform: 'translateY(280px)', transition: '0.5s ease-in-out', opacity: '1' } }
      >
        <img className='mobile-lg-img' src='/legacy/navbar/Event-icon.png' alt='Event Icon' />
        <p>Events</p>
      </div>
    </React.Fragment>
  );
};

export default MobileLegacyNavBar;