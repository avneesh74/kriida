import React from 'react';
import Headingtext from '../../components/top-features/headingtext.component';
import './about.css';
import AboutImage from '../../components/assets/images/about-us.png'

const AboutUs=()=> {
    return (
        <div className="aboutus-wrapper">
            <Headingtext
                title='About'
                text='Us'
            />
            <div className="aboutus-container">
                <div className="content-side">
                    <div>
                    Kriida is an online sports networking platform aiming
                    to improve the participation of students in sports at the
                    grassroots level (schools and colleges) in conjunction with
                    the sports departments of the concerned institutions and
                    governing bodies or federation in India.
                    <br/>
                    Kriida will integrate gamification in the platform to increase
                    engagement and promote the brand organically amongst the users.
                    </div>
                </div>
                <div className="image-side">
                    <img src={AboutImage} alt="about" className="about-image"/>
                </div>
            </div>
        </div>
    )
}

export default AboutUs