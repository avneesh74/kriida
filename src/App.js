import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header-components/header.component';
import Homepage from './pages/Homepage/pages';
import Aboutpage from './pages/Aboutus/about-us';
import {Provider} from 'react-redux';
import store from './redux/store';
import StatsSports from './components/sports/sportspage/sportsinnercomponent';
import Footer from './components/Footer/footer';
import PrivacyPolicy from './pages/privacypolicy/privacypolicy';
import TermsAndCondition from './pages/terms-and-condition/terms';
import FootballStats from './pages/stats/football/football';
import Events from './pages/events/events';
import Results from './components/Events/Results/results';
import Signup from './pages/signup/signup';
import {loadUser} from './redux/actions/authactions';
import Studentsregistration from './components/profile/signup/students';
import SchoolRegistraion from './components/profile/signup/school/school';


class App extends Component{

  componentDidMount(){
    store.dispatch(loadUser);
  }

render(){
  return (
    <div>
      <Provider store={store}>
            <Header/>
              <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/stats" component={StatsSports}/>
                <Route exact path="/stats/football" component={FootballStats}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/students-registraion" component={Studentsregistration}/>
                <Route exact path="/school-registraion" component={SchoolRegistraion}/>
                <Route exact path="/events" component={Events}/>
                <Route exact path="/results" component={Results}/>
                <Route exact path="/about-us" component={Aboutpage}/>
                <Route exact path="/privacy-policy" component={PrivacyPolicy}/>
                <Route exact path="/terms-and-condition" component={TermsAndCondition}/>
              </Switch>
            <Footer/>
        </Provider>
    </div>
  );
}}

export default App;
