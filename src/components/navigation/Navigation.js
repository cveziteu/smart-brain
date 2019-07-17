import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <div className='f6 link white pa3 fr pointer dib hover-yellow'>
                <i 
                    className="fa fa-power-off f2 mr3" 
                    aria-hidden="true" 
                    alt='Sign out'
                >
                </i>
            </div>
        </nav>
    )
}

export default Navigation;