import React from 'react'
import './features.css';


 const HeadingText=({title,text,subText})=> {
    return (
        <div className="main-text">
                    <div className="title">
                        {title} <span style={{color:'#fddb00'}}>{text}</span>
                    </div>
                    <div className="secondry-text">
                        {subText}
                    </div>
        </div>
    )
}


export default HeadingText