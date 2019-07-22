import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Navigation from '../../components/navigation/Navigation';
import Logo from '../../components/logo/Logo';
import ImageInputForm from '../../components/imageinputform/ImageInputForm';
import FaceRecognition from '../../components/facerecognition/FaceRecognition';
import Rank from '../../components/rank/Rank';
import Login from '../../components/login/Login';
import Register from '../../components/registration/Register';

import Particles from 'react-particles-js';

import './App.css';

// Clarifai API
import Clarifai from 'clarifai';
const app = new Clarifai.App({
  apiKey: '2e6d99f4630c4ab3a3eea188b424fc79'
 });

// * Particles.js settings     
const particleSettings = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

class App extends React.Component { 
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
      isLoggedIn: true
    }
  }

  // componentDidMount() {
  //   window.addEventListener("resize", this.updateDimensions);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateDimensions);
  // }

  updateDimensions() {
    const image = document.getElementById('inputimage')

    this.setState({
      height: window.innerHeight, 
      width: window.innerWidth,
      imageWidth: Number(image.width),
      imageHeight: Number(image.height)
    });
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

  render() {
    const { imageUrl, imageWidth, imageHeight, box, isLoggedIn} = this.state;
    return (
      <Router>
        <div className="App">
          <Particles 
            className = 'particles' 
            params = {particleSettings} 
          /> 
          <Logo />
          <Navigation isLoggedIn = {isLoggedIn} />
          <div className='pt6'>
            {/* <Rank /> */}
            {/* <ImageInputForm 
              onInputChange = {this.onInputChange} 
              onButtonSubmit = {this.onButtonSubmit} 
            />
            <FaceRecognition 
              imageUrl = {imageUrl}
              box = {box}
            /> */}
            {/* <Register /> */}
            <Login />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
