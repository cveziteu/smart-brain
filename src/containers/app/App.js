import React from 'react';
import {
  BrowserRouter as Router, 
  // Route, 
  // Switch
} from 'react-router-dom';

import Navigation from '../../components/navigation/Navigation';
import ParticleSettings from '../../components/particles/ParticlesSettings';
import Logo from '../../components/logo/Logo';
import Login from '../../components/login/Login';
import Register from '../../components/registration/Register';
import Main from '../../components/main/Main';

import './App.css';


class App extends React.Component { 
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
      route: 'login'
    }
  }

  onRouteChange = (route) => {
    if (route === 'logout') {
      this.setState({isLoggedIn: false})
    } else if (route === 'home') {
      this.setState({isLoggedIn: true})
    }
    this.setState({route: route});
  }


  render() {
    const { isLoggedIn, route } = this.state;
    return (
      <Router>
        <div className="App">
          <ParticleSettings />
          <Logo />
          <Navigation 
            isLoggedIn = {isLoggedIn}
            route = {route}
            onRouteChange = {this.onRouteChange} 
          />
          {/* <Switch>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
          </Switch> */}
          <div className='pt6'>
            {
              route === 'home'
                ? <Main />
                : (
                  route === 'login' || route === 'logout'
                    ? <Login onRouteChange={this.onRouteChange} />
                    : <Register onRouteChange={this.onRouteChange} />
              )
            }
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
