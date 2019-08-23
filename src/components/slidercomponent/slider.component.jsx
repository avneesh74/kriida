import React from 'react';
import SliderText from './slidertext.component';
import SliderImage from '../assets/images/featured_image.png';
import './slider.style.css';
import Fade from 'react-reveal/Fade';

 const Slider=()=> {
    return (
        <div className="slider-wrapper">
            <div className="slider-container">
                <SliderText/>
            {/* image area */}
            <div className="image-wrapper">
                
                <div className="image-container">
                    <Fade left>
                        <img src={SliderImage} alt="banner" className="banner"/>
                    </Fade>
                </div>
            </div>
            </div>
        </div>
    )
}


export default Slider 