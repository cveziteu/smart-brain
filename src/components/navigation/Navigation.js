import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Navigation = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return (
            <nav>
                <div className=" link hover pa3 flex justify-end">
                    <div className='pa2 mr2 f6'>
                        Hello <span className='light-yellow fw5'>Laura</span>
                    </div>
                    <div className="pa2 ph3 input-reset ba b--white-10 bg-white-10 pointer f6 white br3 hover-black hover-bg-light-red bg-animate">
                        Log out
                    </div>
                </div>
            </nav>
        )
    }
    else {
        return (
            <nav>
                <div className=" link hover pa3 flex justify-end">
                    <div className='pa2 mr2 f6'>
                        Not a member?
                    </div>
                    <Link classname='no-underline' to='/logout'>
                        <div className="pa2 ph3 input-reset ba b--white-10 bg-white-10 pointer f6 no-underline white br3 hover-yellow grow">
                            Sign up
                        </div>
                    </Link>         
                </div>
            </nav>
        )
    }
}

export default Navigation;