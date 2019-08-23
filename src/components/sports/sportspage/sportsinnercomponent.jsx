import React from 'react'
import HeadingText from '../../top-features/headingtext.component';
import SportsCard from '../sportscard';
import './sports-inner.css';

 const SportsInner=()=>{
    return (
        <div className="inner-wrapper">
            <HeadingText
                    title='Sports We '
                    text='Support'
                    subText='Check Stats of each sports'
                />
            <div className="inner-container">
                
                <div className="sports-side">
                    <SportsCard/>
                </div>
                <div className="image-side">

                </div>
            </div>
        </div>
    )
}

export default SportsInner;