import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';


const Login = ({ onRouteChange }) => {

    return (
        <div className="mw6 center pa3 pa4-ns mv3 bg-white-10 white">
            <div className='tc'>
                <h1 class="f4 yellow">Sign in</h1>
            </div>
            <fieldset id="sign_up" className="b--transparent ph0 mh0">
                <div className="mt3">
                    {/* <label className="db fw4 lh-copy f6" for="email-address">
                        Email address
                    </label> */}
                    <input 
                        className="pa2 input-reset bg-transparent w-70 measure inputBox bb" 
                        type="email" 
                        name="email-address" 
                        id="email-address" 
                        placeholder='Email address'/>
                </div>
                <div className="mt3">
                    {/* <label className="db fw4 lh-copy f6" for="password">
                        Password
                    </label> */}
                    <input 
                        className="pa2 input-reset bg-transparent w-70 measure inputBox" 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder='Password'/>
                </div>
            </fieldset>
            <Link to='/login'>
                <div className="mt3">
                    <input 
                        className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 white" 
                        type="submit" 
                        value="Log in" 
                    />
                </div>
            </Link>
            <div className='tc pa2'>
                <p className='f6'>
                    Not a member?&nbsp; 
                        <span className='yellow light pointer' onClick={() => onRouteChange('register')}>
                             Register 
                        </span>
                    &nbsp; for free.
                </p>
            </div>
        </div>
    );
};

export default Login;