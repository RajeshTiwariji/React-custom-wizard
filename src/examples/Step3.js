'use strict';

import React, { Component } from 'react';

export default class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };

  }

  componentDidMount() {}

  componentWillUnmount() {}

  
  render() {
  
    return ( 
      <form>
      <div className="form-group">
        <label >Basic Interests:</label>
        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="newsletter"></input>
      </div>
      <div className="form-group">
        <label>Another label</label>
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"></input>
      </div>
    </form>
    )
  }
}
