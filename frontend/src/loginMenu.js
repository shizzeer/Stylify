import React, {Component, useState, useEffect} from 'react';

function LoginMenu () {
  // const [message, setMessage] = useState("");
  //
  // useEffect(() => {
  //   fetch('/api/hello')
  //       .then(response => response.text())
  //       .then(message => {
  //         setMessage(message);
  //       });
  // },[])
  return (
      <nav className="navbar navbar-expand navbar-light bg-light bg-white">
          <div className="container">
              <a className="navbar-brand" href="#">
                  <img src="./img/logo-no-background.svg" width="150" height="50" alt=""></img>
              </a>
              <div className="navbar-nav ml-auto">
                  <a className="nav-item nav-link border-end border-2" href="#">Log In</a>
                  <a className="nav-item nav-link" href="#">Sign up</a>
              </div>
          </div>
      </nav>
  )
}

export default LoginMenu;