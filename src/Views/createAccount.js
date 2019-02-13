import React, { Component } from 'react';

export default class createAccount extends Component {
  render(){
    return (
      <div id="createAccount">
      <div className="container-fluid bg">
      <div className="row">
        <div className="col-lg-6">
          <div className="bs-component">
            <form>
              <fieldset>
                <legend> Create an Account </legend>
                <div className="form-group row">
                  <div className="form-group">
                    <label for= "exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder="Enter email"></input>
                    <small id="emailHelp" className="form-text text-muted"> We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                  </div>
                  <button type="submit" className="btn btn-success btn-block">Create Account</button>
                </div>
                </fieldset>
              </form>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
