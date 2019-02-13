import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {NavLink} from "react-router-dom";



export default class Navbar extends Component{
  render() {
    return (
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
    );
  }
}
