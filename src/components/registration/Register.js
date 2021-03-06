import React from 'react';
// import {Link} from 'react-router-dom';
import './register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputUsername: '',
            inputEmail: '',
            inputPassword: '',
            inputRetypePassword: ''
        }
    }

    onUsernameChange = (event) => {
        this.setState({ inputUsername: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ inputEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ inputPassword: event.target.value })
    }

    onRetypePasswordChange = (event) => {
        this.setState({ inputRetypePassword: event.target.value})
    }
    

    onSubmit = () => {
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/;

        if (document.getElementById('username').value === '') {
            this.props.setMessage('message','Please enter a username.');
            this.props.addClass('message', 'error');
        }
        else if (document.getElementById('email-address').value === '') {
            this.props.setMessage('message','Please enter your email address.');
            this.props.addClass('message', 'error');
        }
        else if (emailRegex.test(this.state.inputEmail) === false) {
            this.props.setMessage('message','Please enter a valid email address.');
            this.props.addClass('message','error');
        }
        else if (document.getElementById('password').value === '') {
            this.props.setMessage('message','Password field is empty.');
            this.props.addClass('message', 'error');
        }
        else if (document.getElementById('retype_password').value === '') {
            this.props.setMessage('message','Please re-type your password.');
            this.props.addClass('message', 'error');
        }
        else if (this.state.inputPassword !== this.state.inputRetypePassword) {
            this.props.setMessage('message','Passwords do not match.');
            this.props.addClass('message', 'error');
        }
        else {
            fetch('http://localhost:3001/register', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: this.state.inputUsername,
                    email: this.state.inputEmail,
                    password: this.state.inputPassword,
                })
            })
            .then(response => response.json())
            .then(result => {
                if (result === 'unable to register') {
                    this.props.setMessage('message','<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There is already an user registered with that email address.');
                    this.props.addClass('message', 'error');
                }
                else {
                    this.props.setMessage('message','User was successfuly registered.');
                    this.props.addClass('message', 'success');
                    this.props.loadUser(result);
                    this.props.isLoggedInChange(true);
                    this.props.onRouteChange('home');
                }
            })
            .catch(console.log)            
        }        
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <div className="mw6 center pa3 pa4-ns mv3 bg-white-10 white">
                <div className='tc'>
                    <h1 className="f4 yellow">Register</h1>
                </div>
                <fieldset id="sign_up" className="b--transparent ph0 mh0">
                    <div className='mt3'>
                        <p id='message' className=''></p>
                    </div>
                    <div className='mt3'>
                        <i className="fa fa-user mr2" aria-hidden="true"></i>
                        <input 
                            className="pa2 input-reset bg-transparent w-70 measure inputBox bb" 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder='Username'
                            onChange = { this.onUsernameChange }
                        />
                    </div>
                    <div className="mt3">
                        <i className="fa fa-envelope pa1" aria-hidden="true"></i>
                        <input 
                            className="pa2 input-reset bg-transparent w-70 measure inputBox bb" 
                            type="email" 
                            name="email-address" 
                            id="email-address" 
                            placeholder='Email address'
                            onChange = { this.onEmailChange }
                        />
                    </div>
                    <div className="mt3">
                        <i className="fa fa-key pa1" aria-hidden="true"></i>
                        <input 
                            className="pa2 input-reset bg-transparent w-70 measure inputBox" 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder='Password'
                            onChange = { this.onPasswordChange }
                        />
                    </div>
                    <div className="mt3">
                        <i className="fa fa-key pa1" aria-hidden="true"></i>
                        <input 
                            className="pa2 input-reset bg-transparent w-70 measure inputBox" 
                            type="password" 
                            name="retype_password" 
                            id="retype_password" 
                            placeholder='Retype Password'
                            onChange = { this.onRetypePasswordChange }
                        />
                    </div>
                </fieldset>
                <div className="mt3">
                    <input 
                        className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 white" 
                        type="button" 
                        value="Register" 
                        onClick = {this.onSubmit}
                    />
                </div>
                
                    <div className='tc pa2'>
                        <p className='f6'>
                            Already have an account? <span className='yellow light pointer' onClick={() => onRouteChange('login')}>Sign in</span></p>
                    </div>
            </div>
        );
    }
    
};

export default Register;