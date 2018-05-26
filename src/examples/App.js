

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactEasyWizard from '../../dist/main';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';


export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.sampleStore = {
      email: '',
      gender: '',
      savedToCloud: false
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  getStore() {
    return this.sampleStore;
  }

  updateStore(update) {
    this.sampleStore = {
      ...this.sampleStore,
      ...update
    };
  }

  render() {
      const steps = [
          {tag: 'Step 1', component:Step1, heading:"Step 1: Basic store info and platform"},
          {tag: 'Step 2', component:Step2, heading:"Step 2: Additional store info"},
          {tag: 'Step 3', component:Step3, heading:"Step 3: Setup the connection to your store"},
          {tag: 'Step 4', component:Step4, heading:"Step 4: Install the plugin we need to continue"},
          {tag: 'Step 5', component:Step5, heading:""}
      ]

    return (
      <div className='example'>
        <div className='step-progress'>
          <ReactEasyWizard
            steps={steps}
          />
        </div>
      </div>
    );
  }
}


require('../css/main.css');

ReactDOM.render(<Example />, document.getElementById('root'));
