'use strict';

import React, { Component } from 'react';

export default class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  // not required as this component has no forms or user entry
  // isValidated() {}

  render() {
    return (
      <div>
          
      <form>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
          </div>
            <div className="form-group">
            <label >Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
            <label className="form-check-label" >Check me out</label>
          </div>
    
         </form>
          
      </div>
    )
  }
}
