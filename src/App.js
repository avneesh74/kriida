import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header-components/header.component';
import Homepage from './pages/Homepage/pages';
import Aboutpage from './pages/Aboutus/about-us';
import StatsSports from './components/sports/sportspage/sportsinnercomponent';
import Footer from './components/Footer/footer';
import PrivacyPolicy from './pages/privacypolicy/privacypolicy';
import TermsAndCondition from './pages/terms-and-condition/terms';
import FootballStats from './pages/stats/football/football';
import Events from './pages/events/events';


function App() {
  return (
    <div>
      
        <Header/>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/stats" component={StatsSports}/>
            <Route exact path="/stats/football" component={FootballStats}/>
            <Route exact path="/events" component={Events}/>
            <Route exact path="/about-us" component={Aboutpage}/>
            <Route exact path="/privacy-policy" component={PrivacyPolicy}/>
            <Route exact path="/terms-and-condition" component={TermsAndCondition}/>
          </Switch>
        <Footer/>
    </div>
  );
}

export default App;
