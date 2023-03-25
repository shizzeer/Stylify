import {Link} from 'react-router-dom';

function LoginMenu () {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
          <div className="container">
              <Link className="navbar-brand" to="/">
                  <img src="./img/logo-no-background.svg" width="150" height="50" alt=""></img>
              </Link>
              <div className="navbar-nav ml-auto">
                  <Link className="nav-item nav-link border-end border-2" to="/login">Log In</Link>
                  <Link className="nav-item nav-link" to="/signup">Sign up</Link>
              </div>
          </div>
      </nav>
  )
}

export default LoginMenu;