import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './smartbrain.svg';

const Logo = () => {
    return (
        <div className='ma3 mt1 pa3 absolute'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner">
                    <img 
                        src={logo} 
                        alt='logo'
                        className='' 
                    />
                    <span className='f7 white'>
                        smart-brain-app
                    </span>
                </div>
            </Tilt>
        </div>
        
    )
}

export default Logo;