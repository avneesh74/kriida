import React from 'react'
import './events.css';
import HeadingText from '../top-features/headingtext.component';
import {Link} from 'react-router-dom';


const Events=()=> {
    return (
        <div className="events-wrapper">
            <div className="evnts-wrapper">
                <div className="top-area">
                    <HeadingText 
                        title='Our'
                        text='Events'
                    />
                    
                    <div className="option-box">
                        <Link to="/results"><div className="upcoming-matchesinner">
                                Results
                            </div>
                            </Link>
                    </div>
                    
                </div>
                <div className="matches-wrapper">
                    <div className="sports-name">
                        Football
                    </div>
                    <div className="show-matches">
                        <div className="team-group">
                            <div style={{color:'#492171'}}>27/09/2019</div>
                            <div>The AirForce School</div>
                            <div className="matches-logo"><img src='http://app.kriida.com/uploads/a9a778a881534fd385ca960491de8500.png' alt="logo" /></div>
                        </div>
                        <div className="vs">Vs</div>
                        <div className="team-group">
                            <div className="matches-logo"><img src='http://app.kriida.com/uploads/a9a778a881534fd385ca960491de8500.png' alt="logo" /></div>
                            <div>The AirForce School</div>
                            <div style={{color:'#492171'}}>27/09/2019</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Events