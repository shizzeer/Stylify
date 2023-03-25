import React from 'react';
import {Link} from 'react-router-dom';

import LoginMenu from "../components/loginMenu";

function Home() {
    return (
        <React.Fragment>
            <LoginMenu />
            <div className="imgContainer">
                <img src="./img/girl-pic.jpg"></img>
                <div className="textOverlay">
                    <div className="textHeader">Buy, sell and enjoy fashion</div>
                    <div className="imgTxtSection d-none d-lg-block">
                        Sign Up and join other people on the social marketplace
                        where everyone can find something that will really love!
                    </div>
                    <Link className="imgTxtFooter" to='/signup'>Sign Up with Email</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;