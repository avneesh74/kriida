import React from 'react'
import CustomButton from '../custom-button/custom.button';


 const SliderText=()=>{
    return (
        <div className="text-container">
                <div className="text-wrapper">
                    <div className="headline">
                        The Ultimate Sports<br/>
                        Destination To Get <br/>
                        <span className="highlight-text">Recognised</span>
                    </div>
                    <div className="button-wrapper">
                    <div className="button">
                        <CustomButton>
                            Join Now For Free
                        </CustomButton>
                    </div>
                    <div className="button">
                        <CustomButton style={{
                            
                        }}>
                            Learn More
                        </CustomButton>
                    </div>
                </div>
                </div>
                
            </div>
    )
}

export default SliderText