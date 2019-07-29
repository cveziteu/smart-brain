import React from 'react';
import './facerecognition.css';


const FaceRecognition = ({ imageUrl, allFaceBoxes }) => {
    return (
        <div className='image-container ma'>
            <div className='absolute mt2'>
                <img 
                    src = {imageUrl} 
                    alt = ''
                    id = 'inputimage'
                    width = '500px'
                    height = 'auto'
                />
                {   allFaceBoxes !== undefined 
                        ? allFaceBoxes.map((box, key) => {
                            return (
                                <div 
                                    key={key}
                                    className='facebox'
                                    style = {{
                                        top: box.topRow, 
                                        right: box.rightCol,
                                        bottom: box.bottomRow,
                                        left: box.leftCol
                                    }}
                                > 
                                </div>
                            )
                        })
                        : <div></div>
                }
            </div>
        </div>
        
    );
};

export default FaceRecognition;