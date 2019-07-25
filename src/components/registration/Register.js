import React from 'react';
// import {Link} from 'react-router-dom';

const Register = ({ onRouteChange }) => {

    return (
        <div className="mw6 center pa3 pa4-ns mv3 bg-white-10 white">
            <div className='tc'>
                <h1 className="f4 yellow">Register</h1>
            </div>
            <fieldset id="sign_up" className="b--transparent ph0 mh0">
                <div className='mt3'>
                    <i class="fa fa-user pa1" aria-hidden="true"></i>
                    <input 
                        className="pa2 input-reset bg-transparent w-70 measure inputBox bb" 
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder='Username'
                    />
                </div>
                <div className="mt3">
                    <i class="fa fa-envelope pa1" aria-hidden="true"></i>
                    <input 
                        className="pa2 input-reset bg-transparent w-70 measure inputBox bb" 
                        type="email" 
                        name="email-address" 
                        id="email-address" 
                        placeholder='Email address'
                    />
                </div>
                <div className="mt3">
                    <i class="fa fa-key pa1" aria-hidden="true"></i>
                    <input 
                        className="pa2 input-reset bg-transparent w-70 measure inputBox" 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder='Password'
                    />
                </div>
            </fieldset>
            <div className="mt3">
                <input className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 white" type="button" value="Register" />
            </div>
            
                <div className='tc pa2'>
                    <p className='f6'>
                        Already have an account? <span className='yellow light pointer' onClick={() => onRouteChange('login')}>Sign in</span></p>
                </div>
        </div>
    );
};

export default Register;