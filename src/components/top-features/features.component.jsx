import React from 'react';
import './features.css';
import FeatureText from './featurestext.component';
import HeadingText from './headingtext.component';




 const Features=()=> {

    return (
        <div className="features-wrapper">
            
            <HeadingText 
                title='Top'
                text='Features'
                subText='We make your games more intresting'
            /> 
            <FeatureText/>
        </div>
    )
}

export default Features