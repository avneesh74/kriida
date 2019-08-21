import React from 'react';
import './button.style.css';

const CustomButton=({children})=>{
    return(
        <button className="custom-button">
            {children}
        </button>
    )
}

export default CustomButton;