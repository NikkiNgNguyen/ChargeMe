import React, { Component } from 'react';

export default class login extends Component {
  render(){
    return (
      <div id="login">
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
            </div>
    );
  }
}
