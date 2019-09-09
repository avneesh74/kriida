import React from 'react';
import './signup.css';
import Headingtext from '../../top-features/headingtext.component';
import SignUpForm from './signupform';

const Signup=()=> {
    return (
        <div className="signup-wrapper">
                <div className="signup-container">
                    <div className="single-side">
                        <div>
                            <Headingtext
                                text="Sign Up"
                            />
                        </div>
                        <SignUpForm/>
                    </div>
                    <div className="single-side">
                          <div className="text-highlight">
                              <div className="span-text">
                                  <span style={{color:'#fddb00'}}>Already Have </span><br/>
                                  <span>Account</span>
                              </div>
                          </div>
                          <div className="signupform-wrapper">
                                        <button className="signup"> Login </button>
                           </div>
                    </div>
                </div>
        </div>
    )
}


export default Signup;