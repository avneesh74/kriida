import React from 'react';
import './header.style.css';
import CustomButton from '../custom-button/custom.button';
import {Link} from 'react-router-dom';
import Logo from '../assets/kriida.png'

 const Header=()=> {
    return (
        <div className="top_navbar">
            <div className="nav_container">
            <div className="item_container"> 
                    <ul className="navigation ">
                        <li>About Us</li>
                        <li>Stats</li>
                        <li>Events</li>
                    </ul>
                
                </div>
                <div className="logo_container"> 
                    <Link to="/" className="logo-wrapper">
                        <img src={Logo} alt="logo" className="logo"/>
                    </Link>
                 </div>
                
                <div className="button-wrapper">
                    <CustomButton >
                        Login/Register
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}


export default Header;