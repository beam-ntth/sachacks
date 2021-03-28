import React, { useState } from 'react';
import "./Lovelace-Mission.css";

const Lovelace_Mission = () => {
    return (
        <React.Fragment>
            <div className = "Lace-Mission">
                <div className="ada-bio">
                    <aside>
                        <h1>
                            Who was <span className="yellow-text">Ada Lovelace</span>?
                        </h1>
                        <p>
                            Ada Lovelace, who has been called the first computer programmer, made the first<br />
                            published computer program, or algorithm, to compute Bernoulli numbers using the<br />
                            Analytical Engine, the first computer. Her work became one of the critical documents<br />
                            to inspire Alan Turing’s work on the first modern computers in the 1940s.
                        </p>
                    </aside>
                    <img src="/lovelace2021/portrait.svg" alt="Ada Lovelace portrait" className="potrait-ada-lovelace"/>
                </div>
                <div className="lovelace-values">
                    <h1>
                        Our Values
                    </h1>
                    <div className="value-flips">
                        <img src="/lovelace2021/awareness-card-front.svg" alt="Lovelace awareness" className="awareness-card-front"/>
                        <img src="/lovelace2021/thrive-card-front.svg" alt="Lovelace thrive" className="thrive-card-front"/>
                        <img src="/lovelace2021/exposure-card-front.svg" alt="Lovelace exposure" className="exposure-card-front"/>
                    </div>
                </div>
                <div className ="lovelace-about">
                    <h1>
                        About
                    </h1>
                    <p>
                        Inspired by the discussions from University of California, Davis’s Ethics in an Age of Technology course, Lovelace Hacks exists to<br /> 
                        provide those who identify as female and gender minorities the <span className="yellow-text">awareness and opportunity to explore technology, regardless of skill<br /> 
                        level and background.</span>
                    </p>
                    <p>
                        By fostering the importance of women in Computer Science and STEM, we hope to get more individuals to try computer science,<br />  
                        demonstrate that females and gender minorities can thrive in this male dominated field, and bring awareness to all the women that<br />  
                        built the tech industry.
                    </p>
                </div>
                <div className="lovelace-team">
                    <h1>
                        Operations
                    </h1>
                    <div className = "rows row-1">
                        <div className = "person person-1">
                            <div className = "square square-1"></div>
                            <h2>Jen Jeon</h2>
                            <h3>President of WiCS</h3>
                        </div>
                        <div className = "person person-2">
                            <div className = "square square-2"></div>
                            <h2>Jamie Chou</h2>
                            <h3>Design</h3>
                        </div>
                        <div className = "person person-3">
                            <div className = "square square-3"></div>
                            <h2>Sally Kim</h2>
                            <h3>Design</h3>
                        </div>
                    </div>
                    <div className = "rows row-2">
                        <div className = "person person-4">
                            <div className = "square square-4"></div>
                            <h2>Nanya Ma</h2>
                            <h3>Director of Design</h3>
                        </div>
                        <div className = "person person-5">
                            <div className = "square square-5"></div>
                            <h2>Ke Lin</h2>
                            <h3>Design</h3>
                        </div>
                        <div className = "person person-6">
                            <div className = "square square-6"></div>
                            <h2>Aivy Tran</h2>
                            <h3>Marketing</h3>
                        </div>
                    </div>
                    <div className = "rows row-3">
                        <div className = "person person-7">
                            <div className = "square square-7"></div>
                            <h2>Christina Liu</h2>
                            <h3>Design</h3>
                        </div>
                        <div className = "person person-8">
                            <div className = "square square-8"></div>
                            <h2>Kimberly Tran</h2>
                            <h3>Design</h3>
                        </div>
                        <div className = "person person-9">
                            <div className = "square square-4"></div>
                            <h2>Ariel Lee</h2>
                            <h3>Design</h3>
                        </div>
                    </div>
                    <div className = "rows row-4">
                        <div className = "person person-10">
                            <div className = "square square-4"></div>
                            <h2>Gennifer Hom</h2>
                            <h3>Design</h3>
                        </div>
                        <div className = "person person-11">
                            <div className = "square square-4"></div>
                            <h2>Rachel Yap</h2>
                            <h3>Design</h3>
                        </div>
                        <div className = "person person-12">
                            <div className = "square square-4"></div>
                            <h2>Danielle Lei</h2>
                            <h3>Marketing</h3>
                        </div>
                    </div>
                </div>
                <div className = "extension-lace"></div>
            </div>
        </React.Fragment>
    );
};

export default Lovelace_Mission;