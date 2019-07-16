import React from 'react';
import './imageinputform.css';

const ImageInputForm = () => {

    return(
        <div className='tc ma5'>
            <div className='white f4 pa3'>
                {'smart-brain-app will detect all the faces found in a photograph.'}
                <br />
                <span className='f6 i light-yellow'>{'/* enter a picture link below and give it a try. */'}</span>
            </div>
            <input className='input-reset w-60 ba pa3 f6 br2 b--white-90' type='text' placeholder='Enter your image link here...'></input>
            <button className='button-reset w-10 ba pa3 f6 dib br2 pointer black ml3 fw5 button-animation'>{'Detect'}</button>
        </div>
        
    )
}
export default ImageInputForm;