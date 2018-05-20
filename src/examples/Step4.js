'use strict';

import React, { Component } from 'react';

class Step4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };


  }

 
  render() {
  
    return (
        <div>
            step 4
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
        </div>
    )
  }
}



export default Step4;
