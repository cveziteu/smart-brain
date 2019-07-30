import React from 'react';
// import {Link} from 'react-router-dom';

import './navigation.css';

const Navigation = ({isLoggedIn , route, onRouteChange, name, entries}) => {
    if (isLoggedIn) {
        return (
            <nav>
                <div className=" link hover pa3 flex justify-end">
                    <div className='mr1'>
                        <div 
                            className='f6 tr pa2 pointer'
                            onClick={() => onRouteChange('profile')}
                        >
                            <i className="fa fa-user mr2" aria-hidden="true"></i>
                            <span className='light-yellow fw5'>{name}</span>
                        </div>
                    </div>
                    <div className="pa2 ph3 ba b--white-10 f6 white pointer mr2 nb-t nb-b">
                        Entries: <span className='light-yellow fw4'>{entries}</span>
                    </div>
                    <div 
                        className=" pa2 ph3 ba b--white-10 bg-white-10 pointer f6 white  hover-white hover-bg-light-red bg-animate"
                        onClick={() => onRouteChange('logout')}
                    >
                        Log out
                    </div>
                </div>
            </nav>
        )
    }
    else {
        if (route === 'login' || route === 'logout') {
            return (
                <nav>
                    <div className=" link hover pa3 flex justify-end">
                        <div className="pa2 ph2 ba b--white-10 f6 white nb-t nb-b nb-l">
                            <div className="pt2 f6 no-underline white">
                                Not a member?
                            </div>
                        </div>
                        <div className="pa2 ph2 ba b--white-10 f6 white nb-t nb-b nb-l nb-r">
                            <div 
                                className="pa2 ba b--white-10 bg-white-10 pointer f6 no-underline white hover-yellow grow"
                                onClick={() => onRouteChange('register')}
                            >
                                Sign up
                            </div>
                        </div>     
                    </div>
                </nav>
            )
        }
        else {
            return (
                <nav>
                    <div className=" link hover pa3 flex justify-end">
                        <div className="pa2 ph2 ba b--white-10 f6 white nb-t nb-b nb-l">
                            <div 
                                className="pa2 ph3 ba b--white-10 bg-white-10 pointer f6 no-underline white hover-yellow grow"
                                onClick={() => onRouteChange('login')}
                            >
                                Login
                            </div>
                        </div>
                        <div className="pa2 ph2 ba b--white-10 f6 white nb-t nb-b nb-l nb-r">
                            <div 
                                className="pa2 ba b--white-10 bg-white-10 pointer f6 no-underline white hover-yellow grow"
                                onClick={() => onRouteChange('register')}
                            >
                                Sign up
                            </div>
                        </div>
                                
                    </div>
                </nav>
            )
        }
    }
}

export default Navigation;