import React from "react";
import {Link} from "react-router-dom";
import '../styles/login.css';
import '../styles/index.css';

function LoginForm() {
    return(<form>
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