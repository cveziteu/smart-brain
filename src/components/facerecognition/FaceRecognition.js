import React from 'react';
import './facerecognition.css';


const FaceRecognition = ({ imageUrl, box }) => {

    return (
        <div className='image-container ma'>
            <div className='absolute mt2'>
                {/* <p>{'This is the face recognition component.'}</p> */}
                <img 
                    src = {imageUrl} 
                    alt = ''
                    id = 'inputimage'
                    width = '500px'
                    height = 'auto'
                />
                <div 
                    className='facebox'
                    style = {{
                        top: box.topRow, 
                        right: box.rightCol,
                        bottom: box.bottomRow,
                        left: box.leftCol
                    }}
                > 
                </div>
            </div>
        </div>
        
    );
};

export default FaceRecognition;