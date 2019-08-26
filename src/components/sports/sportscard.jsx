import React from 'react'
import './sportshomepage.css';
import Jump from 'react-reveal/Jump';
import {Link} from 'react-router-dom';


 const SportsCard=()=> {

    const sports = [
        {
            id:'1',
            name:'FOOTBALL',
            imgUrl:'http://kriida.com/sports_image/footbalicon.png',
            link:'/stats/football'
        },
        {
            id:'2',
            name:'BASKETBALL',
            imgUrl:'http://kriida.com/sports_image/basketball.png',
            link:'#'
        },
        {
            id:'3',
            name:'CRICKET',
            imgUrl:'http://kriida.com/sports_image/cricketicon.png',
            link:'#'
        },
        
        {
            id:'4',
            name:'TENNIS',
            imgUrl:'http://kriida.com/sports_image/tennisicon.png',
            link:'#'
        },
       
    ]


    return (
        <div className="card-wrapper">
                 {
                        sports.map((sport)=>
                        <Jump>
                            <Link to={sport.link}>
                                <div className="single-card">
                                    <div className="image-conatiner" id={sport.id}>
                                    <img src={sport.imgUrl} alt="icon"/>
                                    </div>
                                    <div className="sports-name">
                                        {sport.name}
                                    </div>
                                </div>
                            </Link>
                        </Jump>
                        )
                    }
                
            </div>
    )
}

export default SportsCard