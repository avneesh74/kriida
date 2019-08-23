import React from 'react';
import Slider from '../../components/slidercomponent/slider.component';
import Features from '../../components/top-features/features.component';
import AboutsHome from '../../components/aboutus/aboutushome';
import SportsHome from '../../components/sports/sportshomepage';


 const Homepage=()=> {
    return (
        <div>
            <Slider/>
            <Features/>
            <AboutsHome/>
            <SportsHome/>
        </div>
    )
}

export default Homepage