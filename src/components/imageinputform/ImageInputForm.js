import React from 'react';
import './imageinputform.css';

const text1 = 'smart-brain-app will detect all the faces found in a photograph.';
const text2 = '/* enter a picture link below and give it a try. */';
const placeholder = 'Enter your image link here...';
const button = 'Detect';

const ImageInputForm = ({ onInputChange, onButtonSubmit }) => {

    return(
        <div className='tc ma5'>
            <div className='white f4 pa3'>
                {text1}
                <br />
                <span className='f6 i light-yellow'>{text2}</span>
            </div>
            <div className='w-100'>
                <input 
                    className = 'input-reset w-60 w-50-l ba pa3 f6 dib br2 b--white-90' 
                    type = 'text' 
                    placeholder = {placeholder} 
                    onChange = {onInputChange}
                >
                </input>
                <button 
                    className='button-reset w-10-l ba pa3 f6 dib br2 pointer black ml3 fw5 button-animation'
                    onClick={onButtonSubmit} 
                >
                    {button}
                </button>
            </div>
            
        </div>
        
    )
}
export default ImageInputForm;