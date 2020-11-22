import React from "react";
import "./news-cards.css";

const NewsCards = (props) => {
    return (
        <div className="lg-news-card">
            <div className="lg-news-card-img">
                <img
                    src={props.content.img}
                    alt={"Event" + props.content.num}
                />
            </div>
            <div className="lg-news-card-desc">
                <h3 className="lg-news-card-header">{props.content.header}</h3>
                <p className="lg-news-card-summary">{props.content.summary}</p>
                <div className="lg-news-card-btn">Read more</div>
            </div>
        </div>
    );
};

export default NewsCards;
