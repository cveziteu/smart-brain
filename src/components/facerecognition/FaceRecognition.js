import React from 'react';
import './facerecognition.css';


const FaceRecognition = ({ imageUrl, box }) => {

    return (
        <div className='center ma w-40'>
            <div className='mt2'>
                {/* <p>{'This is the face recognition component.'}</p> */}
                <img 
                    src = {imageUrl} 
                    alt = '' 
                    className = ''
                    id = 'inputimage'
                    style = {{
                        zIndex: -2
                    }}
                />
                <div 
                    className='facebox'
                    style = {{
                        top: box.topRow, 
                        right: box.rightCol,
                        bottom: box.bottomRow,
                        left: box.leftCol,
                        zIndex: -1
                    }}
                >
                </div>
            </div>
        </div>
        
    );
};

export default FaceRecognition;