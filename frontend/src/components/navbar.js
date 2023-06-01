import React, {useState} from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import '../styles/navbar.css';

function Navbar() {
    const [loggedOut, setLoggedOut] = useState(false);

    const handleLogout = () => {
        const token = localStorage.getItem('jwtToken');
        localStorage.removeItem('jwtToken');
        setLoggedOut(true);
    }
    if (loggedOut) {
        return <Navigate to="/" />;
    }
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
                <div className="container">
                    <Link className="navbar-brand" to="/products/all">
                        <img src="/img/logo-no-background.svg" width="150" height="50" alt=""></img>
                    </Link>
                    <input type="text" id="topSearchBar" className="searchBar" placeholder="Search for clothes"></input>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navDesktopItems align-items-center navbar-nav ml-auto">
                        <Link className="spacer text-secondary nav-item nav-link">username</Link>
                        <Link className="nav-item nav-link" to="/sell">
                            <button type="button" className="sellBtn spacer btn btn-success">Sell</button>
                        </Link>
                        <Link className="nav-item nav-link" onClick={handleLogout}>
                            <span style={{fontSize: "2em", color: "#928D8D"}}>
                                <i className="fa-solid fa-right-from-bracket"></i>
                            </span>
                        </Link>
                    </div>

                    {/*<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
                    {/*    <div className="mr-auto"></div>*/}
                    {/*    <ul className="navbar-nav my-2 my-lg-0">*/}
                    {/*        <li className="nav-item active">*/}
                    {/*            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item dropdown">*/}
                    {/*            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"*/}
                    {/*               data-display="static" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                    {/*                Profile*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
            </nav>
            <nav id="searchNav" className="navbar navbar-expand-lg navbar-light bg-light bg-white">
                <div className="cnt">
                    <input type="text" id="bottomSearchBar" className="searchBar" placeholder="Search for clothes"></input>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white" id="categoriesNav">
                <div className="container">
                    <div className="navDesktopItems align-items-center navbar-nav ml-1">
                        <Link className="spacer text-secondary nav-item nav-link" to="/products/all">All</Link>
                        <Link className="spacer text-secondary nav-item nav-link" to="/products/women">Women</Link>
                        <Link className="spacer text-secondary nav-item nav-link" to="/products/mens">Men</Link>
                        <Link className="spacer text-secondary nav-item nav-link" to="/products/kids">Kids</Link>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;