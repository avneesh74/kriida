import React from 'react'
import './features.css';
import StatsIcon from '../assets/icons/statsicon.png'
import SportsIcon from '../assets/icons/sportsicon.png';
import DashboardIcon from '../assets/icons/dashboardicon.png';
import AnalysisIcon from '../assets/icons/analysisicon.png';


const FeaturesText=()=> {
    return (
        <div className="wrapper">
                <div className="feature-container">
                    <div className="feature-image">
                        <img src={StatsIcon} alt="stats"/>
                    </div>
                    <div className="faetur-title">
                        Stats Record
                    </div>
                    <div className="stats-text">
                        We maintain record of your matches, scoresheet and much more.
                    </div>
                </div>
                <div className="feature-container">
                    <div className="feature-image">
                        <img src={SportsIcon} alt="stats"/>
                    </div>
                    <div className="faetur-title">
                        Organise Matches
                    </div>
                    <div className="stats-text">
                        We organise matches for your improvment and development.
                    </div>
                </div>
                <div className="feature-container">
                    <div className="feature-image">
                        <img src={DashboardIcon} alt="stats"/>
                    </div>
                    <div className="faetur-title">
                        Dashboard
                    </div>
                    <div className="stats-text">
                        We maintain you dashboard with recent updates of matches.
                    </div>
                </div>
                <div className="feature-container">
                    <div className="feature-image">
                        <img src={AnalysisIcon} alt="stats"/>
                    </div>
                    <div className="faetur-title">
                        Match Analysis
                    </div>
                    <div className="stats-text">
                        We provide match analysis of matches for improvment.
                    </div>
                </div>
            </div>
    )
}

export default FeaturesText
