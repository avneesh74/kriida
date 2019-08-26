import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';
import FacebookIcon from '../assets/icons/facebook.png'
import InstagramIcon from '../assets/icons/instagram.png'
import Youtube from '../assets/icons/youtube.png';

 function Footer() {

    var d = new Date();
    var n = d.getFullYear();

    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="single-item">
                    <div className="logo-footer">
                            
                        <div className="social-item">
                            <div className="single-social-item"><img src={FacebookIcon} alt="social" className="social-logo" /></div>
                            <div className="single-social-item"><img src={InstagramIcon} alt="social" className="social-logo" /></div>
                            <div className="single-social-item"><img src={Youtube} alt="social" className="social-logo" /></div>
                        </div>
                    
                    </div>
                    

                    {/* <div className="item">
                       <Link to="/about-us"><div>About</div></Link> 
                        <Link to="/stats"><div>Stats</div></Link>
                        <Link to="/events"><div>Events</div></Link>
                        <div>Result</div>
                    </div> */}

                    <div className="item">
                        <Link to="/privacy-policy" style={{marginRight:'5px'}}><div>Privacy Policy |</div></Link>
                        <Link to="/terms-and-condition"><div>Terms and Condition</div></Link>
                        
                    </div>

                </div>
                <div className="copyright">
                    <div>© Kriida {n} | Developed By <a href="https://infotyke.com/" target="blank">iNFOTYKE</a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;