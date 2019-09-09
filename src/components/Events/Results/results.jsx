import React from 'react';
import './results.css';
import Heaingtext from '../../top-features/headingtext.component';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

 const Results=()=> {
    return (
        <div className="results-wrapper">
            <div className="results-container">
                <div className="heading-text">
                    <Heaingtext
                        title="Our"
                        text="Results"
                    />
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="drodown-btn">
                            Select Sports
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Cricket</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Comming Soon</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Comming Soon</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                    <div className="score-wrapper">
                       <Link to="/innerpage"> 
                            <div className="scorecontainer">
                                <div className="score-date">23/9/10</div>
                                <div className="score-team">The AirForce School</div>
                                <div className="result-logo"> <img src="http://app.kriida.com/uploads/a9a778a881534fd385ca960491de8500.png" alt="logo"/></div>
                                <div className="team-score">
                                    <div className="score-team1">1</div>
                                    <div className="score-team1">1</div>
                                </div>
                                <div className="result-logo"> <img src="http://app.kriida.com/uploads/a9a778a881534fd385ca960491de8500.png" alt="logo"/></div>
                                <div className="score-team">The AirForce School</div>
                            </div>
                        </Link>
                    </div>
                    
                
            </div>
        </div>
    )
}


export default Results;