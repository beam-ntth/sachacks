import React, { useState } from 'react';
import "./Footer-Lovelace.css";

const Footer_Lovelace = () => {
	return (
		<React.Fragment>
			<div className="footer-lovelace">
				<div className = "col col-1">
					<img src='lovelace2021/lovelace-logo.svg' alt='Lovelace Hacks'/>
					<h1>Lovelace<br />Hacks</h1>
				</div>
				<div className = "col col-2">
					<a href="#home">
						<h1>Home</h1>
					</a>
					<a href="#about">
						<h1>About Ada Lovelace</h1>
					</a>
					<a href="#faq">
						<h1>FAQ</h1>
					</a>
					<a href="#sponsors">
						<h1>Sponsors</h1>
					</a>
				</div>
				<div className = "col col-3">
					<a href="mailto: team@sachacks.io">
						<h1>Sponsor Us</h1>
					</a>
					{/*<h1>MLH Code of Conduct</h1>*/}
					<h2>Follow Us :)</h2>
					<div className="lace-social-media">
						<a href="https://www.facebook.com/sachacks/" target="_blank" rel="noopener noreferrer"><img src='lovelace2021/facebooklogo.png' className='Lovelace-Hacks-Facebook' /></a>
						<a href="https://www.instagram.com/sachacks/" target="_blank" rel="noopener noreferrer"><img src='lovelace2021/instagramlogo.png' className='Lovelace-Hacks-Instagram' /></a>
						<a href="https://twitter.com/sachacks" target="_blank" rel="noopener noreferrer"><img src='lovelace2021/twitterlogo.png' className='Lovelace-Hacks-Twitter' /></a>
					</div>
				</div>
				<div className = "col col-4">
					<h1>Made with <span className="yellow-text">&#10084;</span> by <a href="https://sachacks.io/" target="_blank" rel="noopener noreferrer"><span className="yellow-text">SacHacks</span></a> & <span className="yellow-text">WiCS</span></h1>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer_Lovelace;
