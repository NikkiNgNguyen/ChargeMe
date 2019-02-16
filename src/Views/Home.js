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

          <div id="homepage">
          <div className= "bs-component">
          <div className="jumbotron">
          <h1 className="display-3">Hello, welcome to ChargeMe. </h1>
          <p className="lead"> "The best app to split bills with your friends."</p>
          <hr className="my-4"></hr>
          <p> "Make paying more efficient."</p>
          <NavLink to="/login"><p className="lead"> <p className="btn btn-primary btn-lg" role="button"> Get Started</p></p></NavLink>
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
