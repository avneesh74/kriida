import React from 'react';
import './aboutushome.css';
import HeadingText from '../top-features/headingtext.component'
import Vision from '../assets/images/ourvision.png';
import CustomButton from '../custom-button/custom.button';
import Slide from 'react-reveal/Slide';
import {Link} from 'react-router-dom';



export default function aboutushome() {
    return (
        
            <div className="about-wrapper"  >
            <HeadingText
                title='Our '
                text='Vision'
                subText='We make you play'
            />
            <div className="about-container">
                <div className="text-area">
                    <div style={{paddingBottom:'50px'}}>
                    Kriida is an online sports networking platform aiming
                    to improve the participation of students in sports at the
                    grassroots level (schools and colleges) in conjunction with
                    the sports departments of the concerned institutions and
                    governing bodies or federation in India.
                    </div>
                    <Link to="/about-us">
                        <CustomButton>
                            Read More
                        </CustomButton>
                    </Link>
                </div>
                <div className="image-area">
                    <Slide  left>
                    <img src={Vision} alt="vision" className="image"/>
                    </Slide >
                </div>
            </div>
        </div>
       
    )
}
