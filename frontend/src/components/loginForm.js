import React, {useState} from "react";
import {Link, Navigate} from "react-router-dom";
import '../styles/login.css';
import '../styles/index.css';

function LoginForm() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const response = await fetch('/api/auth/authenticate', {
                method: 'POST',
                body: JSON.stringify({email, password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                localStorage.setItem('jwtToken', token);
                setLoggedIn(true);
                console.log('Logged in!');
                console.log(localStorage.getItem('jwtToken'));
            } else {
                const errorData = await response.json();
                const errorMsg = errorData.message;
                setError(errorMsg);
            }
        } catch (e) {
            console.error(e);
            setError('Network error. Try again later')
        }
    }
    if (loggedIn) {
        return <Navigate replace to="/products/all" />
    }

    return(<form onSubmit={handleSubmit}>
        {error && <div className="mb-4 form group">{error}</div>}
        <div className="mb-4 form-group">
            <input type="email" className="form-control" name="email" placeholder="Email"
                   required="required"/>
        </div>
        <div className="mb-4 form-group">
            <input type="password" className="form-control" name="password" placeholder="Password"
                   required="required"/>
        </div>
        <div className="d-grid">
            <button className="btn btn-primary btn-login"
                    type="submit">Login
            </button>
        </div>
        <hr className="my-4"/>
        <div className="form-footer">
            <span className="form-footer-txt">Don't have an account? <Link className="greenLink" to="/signup">
                Sign Up
            </Link></span>
        </div>
    </form>)
}

export default LoginForm