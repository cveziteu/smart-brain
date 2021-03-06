import React from 'react';
import ImageInputForm from '../imageinputform/ImageInputForm';
import FaceRecognition from '../facerecognition/FaceRecognition';

// Clarifai API
import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: '2e6d99f4630c4ab3a3eea188b424fc79'
 });

class Main extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageUrl: '',
      box: [],
      noFaceMessage: '',
      allFaceBoxes: []
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:3001/')
  //   .then(response => response.json())
  //   .then(console.log)
  // }


  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value});
  }


  onButtonSubmit = () => {
      // console.log('Button Clicked!');
      if (this.state.input !== '') {
        this.setState({imageUrl: this.state.input});
        app.models
          .predict(
            Clarifai.FACE_DETECT_MODEL,
            this.state.input)
          .then(response => {
            this.displayBoundingBox(this.calculateFaceLocation(response));
          })
          .catch(err => console.log(err));
      }
  }

  
  calculateFaceLocation = (data) => {
    // console.log('data', data);
    let faceData = [];
    let allFaces = [];
    if (data.outputs[0].data.regions) {
        fetch('http://localhost:3001/entries', {
            method: 'put',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.userId,
                imageUrl: this.state.imageUrl
            })
        })
        .then(response => response.json())
        .then(data => {
            this.props.updateEntries(data);
            this.setState({ noFaceMessage: "" });
        })
        .catch(err => { console.log(err) });

        //* SINGLE FACE LOGIC
        // faceData = data.outputs[0].data.regions[0].region_info.bounding_box;
        // console.log(faceData);
        // const image = document.getElementById('inputimage')
        // const width = image.width;
        // const height = image.height;
    
        // return {
        //     topRow: parseInt(faceData.top_row * height),
        //     bottomRow: parseInt(height - (faceData.bottom_row * height)),
        //     leftCol: parseInt(faceData.left_col * width),
        //     rightCol: parseInt(width - (faceData.right_col * width))
        // }

        //* MULTIPLE FACES LOGIC
        faceData = data.outputs[0].data.regions;
        // console.log(faceData);
        const image = document.getElementById('inputimage')
        const width = image.width;
        const height = image.height;


        for (let i = 0; i < faceData.length; i++) {
          // console.log('faceData[i]', faceData[i]);
          allFaces.push({
            topRow: parseInt(faceData[i].region_info.bounding_box.top_row * height),
            bottomRow: parseInt(height - (faceData[i].region_info.bounding_box.bottom_row * height)),
            leftCol: parseInt(faceData[i].region_info.bounding_box.left_col * width),
            rightCol: parseInt(width - (faceData[i].region_info.bounding_box.right_col * width))
          })
        }
   }
    else {
      fetch('http://localhost:3001/imagenoface', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: this.props.userId,
            imageUrl: this.state.imageUrl
          })
      })
      .then(response => response.json())
      .then(message => {
          this.setState({ noFaceMessage: 'Oh snap! We couldn\'t detect any faces in your photograph. Please try another one.' });
      })
      .catch(console.log)

      allFaces.push({
          topRow: null,
          bottomRow: null,
          leftCol: null,
          rightCol: null
      });
    }
    
    return allFaces;

    
  }

  displayBoundingBox = (allBoxes) => {
    this.setState({allFaceBoxes: allBoxes});
  }

  render() {
    const {allFaceBoxes, imageUrl, noFaceMessage} = this.state;
    return (
      <div>
          <ImageInputForm 
            onInputChange = {this.onInputChange} 
            onButtonSubmit = {this.onButtonSubmit}
            noFaceMessage = {noFaceMessage}
          />
          <FaceRecognition 
            imageUrl = {imageUrl}
            allFaceBoxes = {allFaceBoxes}
          />
      </div>
    );
    };
};

export default Main;
