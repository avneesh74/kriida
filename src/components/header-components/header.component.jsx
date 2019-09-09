import React from 'react';
import './header.style.css';
import CustomButton from '../custom-button/custom.button';
import {Link} from 'react-router-dom';
import Logo from '../assets/kriida.png';
import Logout from '../login/signup/logout';

 const Header=()=> {
    return (
        <div className="top_navbar">
            <div className="nav_container">
            <div className="item_container"> 
                    <ul className="navigation ">
                        <Link to="/about-us"><li>About Us</li></Link> 
                        <Link to="/stats"><li>Stats</li></Link>
                        <Link to="/events"><li>Events</li></Link>
                    </ul>
                
                </div>
                <div className="logo_container"> 
                    <Link to="/" className="logo-wrapper">
                        <img src={Logo} alt="logo" className="logo"/>
                    </Link>
                 </div>
                
                <div className="button-wrapper">
                <Link to="/signup">
                        <CustomButton >
                            Login/Register
                        </CustomButton>
                </Link>
                <Logout/>
                </div>
            </div>
        </div>
    )
}


export default Header;