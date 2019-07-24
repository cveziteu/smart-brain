import React from 'react';
import ImageInputForm from '../imageinputform/ImageInputForm';
import FaceRecognition from '../facerecognition/FaceRecognition';

// Clarifai API
import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: '2e6d99f4630c4ab3a3eea188b424fc79'
 });

class Main extends React.Component {  
  constructor() {

    super();

    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      imageWidth: 0,
      imageHeight: 0,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
      console.log('Button Clicked!');
      this.setState({imageUrl: this.state.input});
      app.models
        .predict(
          Clarifai.FACE_DETECT_MODEL,
          this.state.input)
        .then(response => this.calculateFacelocation(response))
        .then(result => this.displayBoundingBox(result))
        .catch(err => console.log(err));
  }

  
  calculateFacelocation = (data) => {
    const faceData = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(data);
    const image = document.getElementById('inputimage')
    const width = image.width;
    const height = image.height;

    return {
      topRow: parseInt(faceData.top_row * height),
      bottomRow: parseInt(height - (faceData.bottom_row * height)),
      leftCol: parseInt(faceData.left_col * width),
      rightCol: parseInt(width - (faceData.right_col * width))
    }
  }

  displayBoundingBox = (box) => {
    this.setState({box: box});
    console.log(box);
  }

  updateDimensions = () => {
    const image = document.getElementById('inputimage')
    this.setState({
      height: window.innerHeight, 
      width: window.innerWidth,
      imageWidth: Number(image.width),
      imageHeight: Number(image.height)
    });
  }



  render() {
    const {box, imageUrl} = this.state;
    return (
      <div>
          <ImageInputForm 
            onInputChange = {this.onInputChange} 
            onButtonSubmit = {this.onButtonSubmit} 
          />
          <FaceRecognition 
            imageUrl = {imageUrl}
            box = {box}
          />
      </div>
    );
    };
};

export default Main;
