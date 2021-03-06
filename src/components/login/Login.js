import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputEmail: '',
            inputPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState ({ inputEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ inputPassword: event.target.value })
    }

    onSubmit = () => {
        if (document.getElementById('email-address').value === '') {
            this.props.setMessage('message', 'Please enter your email address.');
            this.props.addClass('message', 'error');
        }
        else if (document.getElementById('password').value === '') {
            this.props.setMessage('message', 'Please enter your password.');
            this.props.addClass('message', 'error');
        }
        else {
            fetch('http://localhost:3001/login', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.inputEmail,
                    password: this.state.inputPassword
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data === 'bad request' || data === 'wrong credentials') {
                    this.props.setMessage('message', 'Incorrect username or password.');
                    this.props.addClass('message', 'error');
                }
                else if (data === 'unable to get user') {
                    this.props.setMessage('message', 'Something went wrong. Please try again later.');
                    this.props.addClass('message', 'error');
                }
                else {
                    this.props.loadUser(data);
                    this.props.isLoggedInChange(true);
                    this.props.onRouteChange('home');
                    }
            })
            .catch(console.log);
        }
    }

    render() {
        
        const {onRouteChange} = this.props;
        return (
            <div className="mw6 center pa3 pa4-ns mv3 bg-white-10 white">
                <div className='tc'>
                    <h1 className="f4 yellow">Sign in</h1>
                </div>
                <fieldset id="sign_up" className="b--transparent ph0 mh0">
                    <div className="mt3">
                        <p id='message'></p>
                    </div>
                    <div className="mt3">
                        <i className="fa fa-envelope pa1" aria-hidden="true"></i>
                        <input 
                            className="pa2 input-reset bg-transparent w-70 measure inputBox bb" 
                            type="email" 
                            name="email-address" 
                            id="email-address" 
                            placeholder='Email address'
                            onChange = {this.onEmailChange} />
                    </div>
                    <div className="mt3">
                        <i className="fa fa-key pa1" aria-hidden="true"></i>
                        <input 
                            className="pa2 input-reset bg-transparent w-70 measure inputBox" 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder='Password'
                            onChange={this.onPasswordChange} />
                    </div>
                </fieldset>
                <Link to='/login'>
                    <div className="mt3">
                        <input 
                            className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 white" 
                            type="submit" 
                            value="Log in"
                            onClick={this.onSubmit}
                        />
                    </div>
                </Link>
                <div className='tc pa2'>
                    <p className='f6'>
                        Not a member?&nbsp; 
                            <span className='yellow light pointer' onClick={() => onRouteChange('register')}>
                                 Register 
                            </span>
                        &nbsp; for free.
                    </p>
                </div>
            </div>
        );
    }
};

export default Login;