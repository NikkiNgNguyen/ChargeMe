// import React, { Component } from 'react';
// import Header from '../Components/Header.js';
// import Footer from '../Components/Footer.js';

import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import '../Components/style/bootstrap.css';
import '../Components/style/custom.min.css';
import '../Components/style/style.css';
import {NavLink} from "react-router-dom";

export default class Home extends Component {

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
                       <NavLink to="/login"><a className="dropdown-item">Login</a></NavLink>
                      <NavLink to="/createAccount"><a className="dropdown-item" href="#">Create Account</a></NavLink>
                      <div className="dropdown-divider" />
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Main Menu</a>
                    <div className="dropdown-menu">
                      <NavLink to="/billSplit"><a className="dropdown-item" href="#">Bill Split</a></NavLink>
                      <NavLink to="/receiptScanner"><a className="dropdown-item" href="#">Receipt Scanner</a></NavLink>
                      <NavLink to="/friendsList"><a className="dropdown-item" href="#">Friends List</a></NavLink>
                      <NavLink to="/billSplit"><a className="dropdown-item" href="#">Split By Item</a></NavLink>
                      <NavLink to="/billSplit"><a className="dropdown-item" href="#">Split Evenly</a></NavLink>
                      <NavLink to="/pastTransaction"><a className="dropdown-item" href="#">Past Transaction</a></NavLink>
                      <NavLink to="/currentTransactions"><a className="dropdown-item" href="#">Current Transaction</a></NavLink>
                      <NavLink to="/search"><a className="dropdown-item" href="#">Search</a></NavLink>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Help</a>
                    <div className="dropdown-menu">
                      <NavLink to="/notificationSettings"><a className="dropdown-item" href="#">Notification Settings</a></NavLink>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="homepage">
          <div className= "bs-component">
          <div className="jumbotron">
          <h1 className="display-3">Hello, welcome to ChargeMe. </h1>
          <p className="lead"> "The best app to split bills with your friends."</p>
          <hr className="my-4"></hr>
          <p> "Make paying more efficient."</p>
          <p className="lead"> <a className="btn btn-primary btn-lg" role="button">Learn More</a>
          </p>
          </div>
          </div>
          </div>
          <div className="line" />

          {/* jQuery CDN - Slim version (=without AJAX) */}
          {/* Popper.JS */}
          {/* Bootstrap JS */}
        </div>

      );
    }
  };
