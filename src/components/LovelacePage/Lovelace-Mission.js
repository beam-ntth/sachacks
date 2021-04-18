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
                  <div className = "Lace-Mission-half">
                      <div className="ada-bio">
                          <div className="ada-image"><img src="/lovelace2021/portrait.svg" alt="Ada Lovelace portrait" className="potrait-ada-lovelace"/></div>
                          <div className="who-was-ada">
                              <h1>
                                  Who was <span className="yellow-text">Ada Lovelace</span>?
                              </h1>
                              <p>
                                  Ada Lovelace, who has been called the first computer programmer, made the first
                                  published computer program, or algorithm, to compute Bernoulli numbers using the
                                  Analytical Engine, the first computer. Her work became one of the critical documents
                                  to inspire Alan Turing’s work on the first modern computers in the 1940s.
                              </p>
                          </div>
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
                  </div>
                  <div className="lovelace-quotes koehl">
                      <img src="/lovelace2021/AboutTeam.png" className="koehl-quote"/>
                  </div>
                  <div className="lovelace-quotes sadie">
                      <img src="/lovelace2021/KeynoteSpeaker.svg" className="keynote-quote"/>
                  </div>
              </div>
          </React.Fragment>
        );
    }
}

export default Lovelace_Mission;