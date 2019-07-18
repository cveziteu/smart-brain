import React from 'react';
import './facerecognition.css';


const FaceRecognition = ({ imageUrl, box }) => {

    return (
        <div className='image-container ma w-100'>
            <div className='absolute mt2'>
                {/* <p>{'This is the face recognition component.'}</p> */}
                <img 
                    src = {imageUrl} 
                    alt = '' 
                    className = ''
                    id = 'inputimage'
                    style = {{
                        // zIndex: -3
                    }}
                />
                <div 
                    className='facebox'
                    style = {{
                        top: box.topRow, 
                        right: box.rightCol,
                        bottom: box.bottomRow,
                        left: box.leftCol,
                        // zIndex: -1
                    }}
                >
                </div>
            </div>
        </div>
        
    );
};

export default FaceRecognition;