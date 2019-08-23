import React from 'react'
import CustomButton from '../custom-button/custom.button';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';
import {Link} from 'react-router-dom';

 const SliderText=()=>{
    return (
        

        <div className="text-container">
                <div className="text-wrapper">
                <Fade top>
                    <div className="headline">
                        The Ultimate Sports<br/>
                        Destination To Get <br/>
                        <span className="highlight-text">Recognised</span>
                    </div>
                </Fade>
                    <div className="button-wrapper">
                    <div className="button">
                        <RubberBand>
                        <CustomButton>
                            Join Now For Free
                        </CustomButton>
                        </RubberBand>
                    </div>
                    <div className="button">
                    <RubberBand>
                        <Link to="/about-us">
                            <CustomButton>
                                Learn More
                            </CustomButton>
                        </Link>
                    </RubberBand>
                    </div>
                </div>
                </div>
                
            </div>
       
    )
}

export default SliderText