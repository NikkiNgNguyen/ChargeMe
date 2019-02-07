import React, { Component } from 'react';
import './bootstrap.css';
import './custom.min.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
          <meta charSet="utf-8" />
          <title>ChargeMe</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="stylesheet" href="bootstrap.css" media="screen" />
          <link rel="stylesheet" href="custom.min.css" />
          <div className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div className="container">
              <a href="../" className="navbar-brand">ChargeMe</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home Page</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Login</a>
                      <a className="dropdown-item" href="#">Create Account</a>
                      <div className="dropdown-divider" />
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Main Menu</a>
                    <div className="dropdown-menu">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Bill Split</a>
                      <a className="dropdown-item" href="#">Receipt Scanner</a>
                      <a className="dropdown-item" href="#">Friends List</a>
                      <a className="dropdown-item" href="#">Split By Item</a>  <a className="dropdown-item" href="#">Split Evenly</a>
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Past Transaction</a> <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Current Transaction</a> <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Search</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Help</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Notification Settings</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-fluid bg">
            {/*form start*/}
            <form className="form-container">
              <h1>Welcome to ChargeMe.</h1>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email Address/Username</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-success btn-block">Submit</button>
            </form>
          </div>
          {/*-form end*/}
          <div className="line" />
          {/* jQuery CDN - Slim version (=without AJAX) */}
          {/* Popper.JS */}
          {/* Bootstrap JS */}
        </div>
      );
    }
  };

export default App;
