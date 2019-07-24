import React from 'react';
import {Link} from 'react-router-dom';

import './navigation.css';

const Navigation = ({isLoggedIn , route, onRouteChange}) => {
    if (isLoggedIn) {
        return (
            <nav>
                <div className=" link hover pa3 flex justify-end">
                    <div className='mr1'>
                        <div className='f6 tr pa2'>
                            Hello <span className='light-yellow fw5'>Laura</span>
                        </div>
                        {/* <div className='f7 tr'>
                            Rank <span className='light-yellow fw4'>#4</span>
                        </div> */}
                    </div>
                    <div className="pa2 ph3 ba b--white-10 f6 white pointer mr2 nb-t nb-b">
                            Rank <span className='light-yellow fw4'>#4</span>
                    </div>
                    <Link to='/register'>
                        <div 
                            className=" pa2 ph3 ba b--white-10 bg-white-10 pointer f6 white  hover-white hover-bg-light-red bg-animate"
                            onClick={() => onRouteChange('login')}
                        >
                            Log out
                        </div>
                    </Link>
                </div>
            </nav>
        )
    }
    else {
        if (route === 'login') {
            return (
                <nav>
                    <div className=" link hover pa3 flex justify-end">
                        <div className="pa2 ph2 ba b--white-10 f6 white mr2 nb-t nb-b nb-l">
                            Not a member?
                        </div>
                        <Link to='/register'>
                            <div 
                                className="pa2 ph3 ba b--white-10 bg-white-10 pointer f6 no-underline white hover-yellow grow"
                                onClick={() => onRouteChange('register')}
                            >
                                Sign up
                            </div>
                        </Link>         
                    </div>
                </nav>
            )
        }
        else {
            return (
                <nav>
                    <div className=" link hover pa3 flex justify-end">
                        <div className="pa2 ph2 ba b--white-10 f6 white nb-t nb-b nb-l">
                            <Link to='/login'>
                                <div 
                                    className="pa2 ph3 ba b--white-10 bg-white-10 pointer f6 no-underline white hover-yellow grow"
                                    onClick={() => onRouteChange('login')}
                                >
                                    Login
                                </div>
                            </Link> 
                        </div>
                        <div className="pa2 ph2 ba b--white-10 f6 white nb-t nb-b nb-l nb-r">
                            <Link to='/register'>
                                <div 
                                    className="pa2 ba b--white-10 bg-white-10 pointer f6 no-underline white hover-yellow grow"
                                    onClick={() => onRouteChange('register')}
                                >
                                    Sign up
                                </div>
                            </Link> 
                        </div>
                                
                    </div>
                </nav>
            )
        }
    }
}

export default Navigation;