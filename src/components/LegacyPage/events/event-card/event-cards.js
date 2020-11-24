import React from 'react';
import './event-cards.css';

const EventCards = props => {

    const openLink = () => {
        window.open( props.content.link );
    };
    
    return (
        <div className='lg-event-card'>
            <div className='lg-event-card-left'>
                <img src={ props.content.img } alt={ 'Event' + props.content.num } />
            </div>
            <div className='lg-event-card-right'>
                <h5 className='lg-event-name'>{ props.content.name }</h5>
                <h3 className='lg-event-header'>{ props.content.header }</h3>
                <h4 className='lg-event-date'>{ props.content.date }</h4>
                <p className='lg-event-des'>{ props.content.des }</p>
                <div className='lg-event-btn' onClick={ openLink }>{ props.content.btn }</div>
            </div>
        </div>
    );
};

export default EventCards;
