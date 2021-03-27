/**
 * This is a sub-component of the FAQ section - display each question and answer
 */

import React, { useState } from 'react';
import './LaceFaqCard.css';

import { MdKeyboardArrowDown } from 'react-icons/md';

const LaceFaqCard = ( props ) => {
    const { q, a } = props.qa;

    const [ open, setOpen ] = useState( { open: true } );

    return (
        <div className='question'>
            <div className='ques' style={ !open ? { color: '#C49FFF', transition: '0.5s' } : { color: '#fff', transition: '0.5s' } } onClick={ () => setOpen( !open ) }>
                { q } <MdKeyboardArrowDown size='20px' style={ !open ? { marginLeft: '5px', transform: 'rotate(180deg)', transition: '0.5s', color:'#C49FFF' } : { marginLeft: '5px', transition: '0.5s', color:'#fff' } } />
            </div>
            <div className='ans' style={ !open ? { animation: 'slideDown 0.5s ease-in' } : { display: 'none' } }>{ a }</div>
        </div>
    );
};

export default LaceFaqCard;
