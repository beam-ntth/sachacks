import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import "./Lovelace-Mission.css";

class Lovelace_Mission extends React.Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return(
          <React.Fragment>
              <a id="about"></a>
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
                          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" className="card-inline">
                              <div>
                                  <img src="/lovelace2021/awareness-card-front.svg" alt="Lovelace awareness" className="awareness-card-front card-inline" onClick={this.handleClick} />
                              </div>
                              <div>
                                  <img src="/lovelace2021/awareness-card-back.svg" alt="Lovelace awareness" className="awareness-card-front card-inline" onClick={this.handleClick} />
                              </div>
                          </ReactCardFlip>
                          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" className="card-inline">
                              <div>
                                  <img src="/lovelace2021/thrive-card-front.svg" alt="Lovelace thrive" className="thrive-card-front card-inline" onClick={this.handleClick}/>
                              </div>
                              <div>
                                  <img src="/lovelace2021/thrive-card-back.svg" alt="Lovelace thrive" className="thrive-card-front card-inline" onClick={this.handleClick}/>
                              </div>
                          </ReactCardFlip>
                          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" className="card-inline">
                              <div>
                                  <img src="/lovelace2021/exposure-card-front.svg" alt="Lovelace exposure" className="exposure-card-front card-inline" onClick={this.handleClick}/>
                              </div>
                              <div>
                                  <img src="/lovelace2021/exposure-card-back.svg" alt="Lovelace exposure" className="exposure-card-front card-inline" onClick={this.handleClick}/>
                              </div>
                          </ReactCardFlip>
                      </div>
                  </div>
                  <div className ="lovelace-about">
                      <h1>
                          About
                      </h1>
                      <p>
                          Inspired by the discussions from University of California, Davis’s Ethics in an Age of Technology course, Lovelace Hacks exists to<br />
                          provide those who identify as women and gender minorities the <span className="yellow-text">awareness and opportunity to explore technology, regardless of skill<br />
                        level and background.</span>
                      </p>
                      <p>
                          By fostering the importance of women in Computer Science and STEM, we hope to get more individuals to try computer science,<br />
                          demonstrate that women and gender minorities can thrive in this male dominated field, and bring awareness to all the women that<br />
                          built the tech industry.
                      </p>
                  </div>
                  <div className="lovelace-quotes">
                      <aside>
                          <p>
                              "We are still a long way before we reach gender equality in Computer Science<br /> 
                              and Information Technology. Initiatives that provide a safe, fun, supportive, and<br /> 
                              inspiring environment for young women to discover what coding means and<br /> 
                              the opportunities it provides are definitely important steps along this road.<br />
                              The Lovelace Hacks initiative is definitely one such step and its organizers<br /> 
                              should be highly praised for putting it together!“
                          </p>
                          <p className="lace-whoseQuote">
                              <span className="yellow-text">Professor Patrice Koehl</span><br />
                              University of California, Davis Ethics in an Age of Technology Professor<br />
                              University of California, Davis Data Science Initiative Founding Director<br />
                          </p>
                      </aside>
                      <img src="/lovelace2021/koehl.jpeg" className="koehl-lovelace"/>
                  </div>
                  <div className = "extension-lace"></div>
              </div>
          </React.Fragment>
        );
    }
}

export default Lovelace_Mission;