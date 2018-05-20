'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactEasyWizard from '../main'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'


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
      ...update,
    }
  }

  render() {
    const steps =
    [
      {title: 'Step1', component: Step1},
      {title: 'Step2', component: Step2},
      {title: 'Step3', component: Step3},
      {title: 'step4', component: Step4},
      {title: 'Step5', component: Step5}
    ]

    return (
      <div className='example'>
        <div className='step-progress'>
          <ReactEasyWizard
            steps={steps}
          />
        </div>
      </div>
    )
  }
}


require('../css/main.css');

ReactDOM.render(<Example />, document.getElementById('root'));
