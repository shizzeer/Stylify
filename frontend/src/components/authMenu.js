import {Link} from 'react-router-dom';

function AuthMenu () {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light bg-white">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="./img/logo-no-background.svg" width="150" height="50" alt=""></img>
                </Link>
            </div>
        </nav>
    )
}

export default AuthMenu;