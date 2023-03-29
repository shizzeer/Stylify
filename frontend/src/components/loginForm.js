import React from "react";
import {Link} from "react-router-dom";
import '../styles/login.css';
import '../styles/index.css';

function LoginForm() {
    return(<form>
        <div className="form-floating mb-3">
            <input type="email" className="form-input-style form-control" id="floatingInput"
                   placeholder="Email"/>
            <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
            <input type="password" className="form-input-style form-control" id="floatingPassword"
                   placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
        </div>

        {/*<div className="form-check mb-3">*/}
        {/*    <input className="form-check-input" type="checkbox" value=""*/}
        {/*           id="rememberPasswordCheck"/>*/}
        {/*        <label className="form-check-label" htmlFor="rememberPasswordCheck">*/}
        {/*            Remember password*/}
        {/*        </label>*/}
        {/*</div>*/}
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