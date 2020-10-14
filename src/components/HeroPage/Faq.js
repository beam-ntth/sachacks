/**
 * All the questions in the FAQ section shares the same format
 * We take advantage of React by creating a card to display the Q&A
 * Please go to the corresponding file to make changes
 * - FAQCard - src/components/HeroPage/FaqCards/FaqCard.js
 *
 * We store all the questions and answers in the Question.js file in this same folder
 */

import React, { useState } from "react";
import "./Faq.css";

// Components
import * as Questions from "./Questions";
import Cards from "./FAQCards/FaqCard";

// Icons
import { GoTriangleDown } from "react-icons/go";

const Faq = () => {
    const [open, setOpen] = useState({ open: true });

    return (
        <React.Fragment>
            <div className="faq">
                <h1>Frequently Asked Questions</h1>
                <div className="questions">
                    <div className="left-side">
                        <Cards qa={Questions.q1} />
                        <Cards qa={Questions.q2} />
                        <Cards qa={Questions.q3} />
                        <Cards qa={Questions.q4} />
                    </div>
                    <div className="right-side">
                        <div className="question">
                            <div
                                className="ques"
                                style={
                                    !open
                                        ? {
                                              color: "#7BDDDE",
                                              transition: "0.5s",
                                          }
                                        : { color: "#fff", transition: "0.5s" }
                                }
                                onClick={() => setOpen(!open)}
                            >
                                Code of Conduct?{" "}
                                <GoTriangleDown
                                    size="20px"
                                    style={
                                        !open
                                            ? {
                                                  marginLeft: "5px",
                                                  transform: "rotate(180deg)",
                                                  transition: "0.5s",
                                                  color: "#7BDDDE",
                                              }
                                            : {
                                                  marginLeft: "5px",
                                                  transition: "0.5s",
                                                  color: "#fff",
                                              }
                                    }
                                />
                            </div>
                            <div
                                className="ans"
                                style={
                                    !open
                                        ? {
                                              animation:
                                                  "slideDown 0.5s ease-in",
                                          }
                                        : { display: "none" }
                                }
                            >
                                All participants of our event must follow the
                                MLH Code of Conduct. Click the link below to
                                download a pdf for more information{" "}
                                <a
                                    id="coc"
                                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    MLH Code of Conduct PDF.
                                </a>
                            </div>
                            <div className="line"></div>
                        </div>
                        <Cards qa={Questions.q9} />
                        <Cards qa={Questions.q10} />
                    </div>
                </div>
            </div>
            {/* <div className='faq-bottom'><img src='/faq-bottom.png' alt='FAQ footer' /></div> */}
            <div id="wave"></div>
        </React.Fragment>
    );
};

export default Faq;
