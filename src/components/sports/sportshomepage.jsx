import React from 'react';
import './sportshomepage.css';
import HeadingTex from '../top-features/headingtext.component';
import SportCard from './sportscard';

 const SportsHomepage=()=> {
    return (
        <div className="sports-wrapper">
            <HeadingTex
                title='Growing support for'
                text='many sports'
                subText='More sports coming soon'
            />
            <SportCard/>
        </div>
    )
}


export default SportsHomepage