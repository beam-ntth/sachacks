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
                <Sponsor img={ Info.sponsor5 } />
                <Sponsor img={ Info.sponsor3 } />
                <Sponsor img={ Info.sponsor4 } />
            </div>
            <div className='sp-row temp'>
                <Sponsor img={ Info.sponsor2 } />
                <Sponsor img={ Info.sponsor10 } />
                <Sponsor img={ Info.sponsor11 } />
                <Sponsor img={ Info.sponsor6 } />
            </div>
            <div className='sp-row temp'>
                <Sponsor img={ Info.sponsor9 } />
                <Sponsor img={ Info.sponsor7 } />
                <Sponsor img={ Info.sponsor8 } />
            </div>
            <h1 id='partner' >Partners</h1>
            <div className='sp-row' id='first-partner-row'>
                <Sponsor img={ Info.partner1 } />
            </div>
            <div className='sp-row'>
                <Sponsor img={ Info.partner2 } />
                <Sponsor img={ Info.partner3 } />
                <Sponsor img={ Info.partner4 } />
            </div>
            <div className='sp-row'>
                <Sponsor img={ Info.partner5 } />
                <Sponsor img={ Info.partner6 } />
                <Sponsor img={ Info.partner7 } />
            </div>
            <div className='sp-space'></div>
        </div>
    );
};

export default Sponsors;
