import {Link} from "react-router-dom";
import React, {useState} from "react";

import '../styles/login.css';
import '../styles/signup.css';
import api from '../api/api';

function SignUpForm() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState();
    const [errors, setErrors] = useState({});

    const handleEmailInput = (event) => {
        const email = event.target.value;
        const emailValidationPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (emailValidationPattern.test(email)) {
            setEmail(email);
            setErrors((prevErrors) => ({...prevErrors, email: ''}));
        } else {
            setErrors((prevErrors) => ({...prevErrors, email: 'Invalid email format'}));
        }
    }

    const handleUsernameInput = (event) => {
        const username = event.target.value;
        if (username.length <= 255) {
            setUsername(username);
            setErrors((prevErrors) => ({...prevErrors, username: ''}));
        } else {
            setErrors((prevErrors) => ({...prevErrors, username: 'Too long username. ' +
                    'Maximum 255 characters allowed'}));
        }
    }

    const handlePasswordInput = (event) => {
        const password = event.target.value;
        const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
        const isValidPassword = passwordRegex.test(password);
        if (isValidPassword) {
            setPassword(password);
            setErrors((prevErrors) => ({...prevErrors, password: ''}));
            if (errors["confirmedPassword"] === 'Password field is empty') {
                setErrors((prevErrors) => ({...prevErrors, confirmedPassword: ''}));
            }
        } else {
            setErrors((prevErrors) => ({...prevErrors, password: 'Invalid password format'}));
        }
    }

    const handleConfirmPasswordInput = (event) => {
        const confirmedPassword = event.target.value;
        if (!password) {
            setErrors((prevErrors) => ({...prevErrors, confirmedPassword: 'Password field is empty'}));
        }
        else if (confirmedPassword !== password) {
            setErrors((prevErrors) => ({...prevErrors, confirmedPassword: 'Password do not match'}));
        } else {
            setConfirmedPassword(confirmedPassword);
            setErrors((prevErrors) => ({...prevErrors, confirmedPassword: ''}));
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const noErrors = Object.values(errors).every(error => error === '');

        if (noErrors) {
            try {
                const response = await fetch('/api/auth/register', {
                    method: 'POST',
                    body: JSON.stringify({email, username, password, confirmedPassword}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    const token = data.token;
                    localStorage.setItem('jwtToken', token);
                    alert(data.message);
                    window.location.href = '/login';
                } else {
                    const errorData = await response.json();
                    alert(errorData.message);
                    window.location.reload();
                }
            } catch (e) {
                console.error(e);
                alert('Unexpected error. Please try again later');
                window.location.reload();
            }
        }
    }
    return (<form onSubmit={handleSubmit}>
        {/*<div className="mb-4 form-group">*/}
        {/*    <div className="row">*/}
        {/*        <div className="col"><input type="text" className="form-control" name="first_name"*/}
        {/*                                    placeholder="First name" required="required"/></div>*/}
        {/*        <div className="col"><input type="text" className="form-control" name="last_name"*/}
        {/*                                    placeholder="Last name" required="required"/></div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div className="mb-4 form-group">
            <input type="email" className="form-control" name="email" placeholder="Email"
                               required="required" onChange={handleEmailInput}/>
            {errors && <div className="error">{errors["email"]}</div>}
        </div>
        <div className="mb-4 form-group">
            <input type="text" className="form-control" name="username" placeholder="Username"
                   required="required" onChange={handleUsernameInput}/>
        </div>
        <div className="mb-4 form-group">
            <input type="password" className="form-control" name="password" placeholder="Password"
                               required="required" onChange={handlePasswordInput}/>
            {errors && <div className="error">{errors["password"]}</div>}
            <p className="hint-text">Must be at least 8 characters plus
                contain a number and a symbol</p>
        </div>
        <div className="mb-4 form-group">
            <input type="password" className="form-control" name="confirm_password"
                               placeholder="Confirm Password" required="required" onChange={handleConfirmPasswordInput}/>
            {errors["confirmedPassword"] && <div className="error">{errors["confirmedPassword"]}</div>}
        </div>
        <div className="d-grid">
            <button className="btn btn-primary btn-login"
                    type="submit" onSubmit={handleSubmit}>Sign Up
            </button>
        </div>
        <hr className="my-4"/>
        <div className="form-footer">
            <span className="form-footer-txt">Have an account? <Link className="greenLink" to="/login">
                Log In
            </Link></span>
        </div>
    </form>)
}

export default SignUpForm