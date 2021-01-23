import React from 'react';
import './Sponsors.css';

// Import information for each sponsors and partners here
import * as Info from './S&PInfo';

// Import more components here
import Sponsor from './Sponsor/Sponsor';

const Sponsors = () => {
    return (
        <div className='sponsors'>
            <h1 id='sponsor' >Sponsors</h1>
            <div className='sp-row ibm-2021'>
                <Sponsor img={ Info.sponsor1 } />
            </div>
            <div className='sp-row temp'>
                <Sponsor img={ Info.sponsor3 } />
                <Sponsor img={ Info.sponsor12 } />
                <Sponsor img={ Info.sponsor4 } />
                {/* <Sponsor img={ Info.sponsor13 } /> */}
            </div>
            <div className='sp-row temp'>
                <Sponsor img={ Info.sponsor2 } />
                <Sponsor img={ Info.sponsor11 } />
                <Sponsor img={ Info.sponsor14 } />
                <Sponsor img={ Info.sponsor10 } />
            </div>
            <div className='sp-row small-temp'>
                <Sponsor img={ Info.sponsor15 } />
                <Sponsor img={ Info.sponsor16 } />
                <Sponsor img={ Info.sponsor5 } />
                <Sponsor img={ Info.sponsor17 } />
            </div>
            <div className='sp-row xsmall-temp'>
                <Sponsor img={ Info.sponsor6 } />
                <Sponsor img={ Info.sponsor9 } />
                <Sponsor img={ Info.sponsor18 } />
                <Sponsor img={ Info.sponsor7 } />
            </div>
            <div className='sp-row xsmall-temp'>
                <Sponsor img={ Info.sponsor19 } />
                <Sponsor img={ Info.sponsor20 } />
                <Sponsor img={ Info.sponsor8 } />
                <Sponsor img={ Info.sponsor21 } />
            </div>
            <h1 id='partner' >Partners</h1>
            <div className='sp-row temp'>
                <Sponsor img={ Info.partner1 } />
                <Sponsor img={ Info.partner2 } />
            </div>
            <div className='sp-row temp'>
                <Sponsor img={ Info.partner9 } />
                <Sponsor img={ Info.partner3 } />
                <Sponsor img={ Info.partner4 } />
            </div>
            <div className='sp-row small-temp'>
                <Sponsor img={ Info.partner7 } />
                <Sponsor img={ Info.partner8 } />
                <Sponsor img={ Info.partner6 } />
                <Sponsor img={ Info.partner10 } />
                {/* <Sponsor img={ Info.partner5 } /> */}
            </div>
            <div className='sp-space'></div>
        </div>
    );
};

export default Sponsors;
