import React from 'react';
import AuthMenu from "../components/authMenu";

import '../styles/signup.css';
import {Link} from "react-router-dom";
import SignUpForm from "../components/signUpForm";

function SignUp() {
    return (
        <React.Fragment>
            <AuthMenu />
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="text-center mb-5 login-form-header">Create Your Account</h5>
                                <SignUpForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="signup-form">*/}
            {/*    <form action="signup" method="post">*/}
            {/*        <h2>Register</h2>*/}
            {/*        <div className="form-group">*/}
            {/*            <div className="row">*/}
            {/*                <div className="col"><input type="text" className="form-control" name="first_name"*/}
            {/*                                            placeholder="First name" required="required"/></div>*/}
            {/*                <div className="col"><input type="text" className="form-control" name="last_name"*/}
            {/*                                            placeholder="Last name" required="required"/></div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="form-group">*/}
            {/*            <input type="email" className="form-control" name="email" placeholder="Email"*/}
            {/*                   required="required"/>*/}
            {/*        </div>*/}
            {/*        <div className="form-group">*/}
            {/*            <input type="password" className="form-control" name="password" placeholder="Password"*/}
            {/*                   required="required"/>*/}
            {/*        </div>*/}
            {/*        <div className="form-group">*/}
            {/*            <input type="password" className="form-control" name="confirm_password"*/}
            {/*                   placeholder="Confirm Password" required="required"/>*/}
            {/*        </div>*/}
            {/*        <div className="form-group">*/}
            {/*            <label className="form-check-label"><input type="checkbox" required="required"/> I accept the <a*/}
            {/*                href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>*/}
            {/*        </div>*/}
            {/*        <div className="form-group">*/}
            {/*            <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>*/}
            {/*        </div>*/}
            {/*    </form>*/}
            {/*    <div className="text-center">Already have an account? <a href="#">Sign in</a></div>*/}
            {/*</div>*/}
        </React.Fragment>
    )
}

export default SignUp