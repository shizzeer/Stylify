import React from 'react';
import AuthMenu from '../components/authMenu';
import LoginForm from '../components/loginForm';

import '../styles/login.css';

function Login() {
    return (
        <React.Fragment>
            <AuthMenu />
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="text-center mb-5 login-form-header">Log In</h5>
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login
