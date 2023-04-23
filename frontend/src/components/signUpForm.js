import {Link} from "react-router-dom";
import React from "react";

import '../styles/login.css';
import '../styles/signup.css';

function SignUpForm() {
    return (<form>
        <div className="mb-4 form-group">
            <div className="row">
                <div className="col"><input type="text" className="form-control" name="first_name"
                                            placeholder="First name" required="required"/></div>
                <div className="col"><input type="text" className="form-control" name="last_name"
                                            placeholder="Last name" required="required"/></div>
            </div>
        </div>
        <div className="mb-4 form-group">
            <input type="email" className="form-control" name="email" placeholder="Email"
                               required="required"/>
        </div>
        <div className="mb-4 form-group">
            <input type="password" className="form-control" name="password" placeholder="Password"
                               required="required"/>
            <p className="hint-text">Must be at least 8 characters and
                contain a number or symbol</p>
        </div>
        <div className="mb-4 form-group">
            <input type="password" className="form-control" name="confirm_password"
                               placeholder="Confirm Password" required="required"/>
        </div>
        <div className="d-grid">
            <button className="btn btn-primary btn-login"
                    type="submit">Sign Up
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