/**
 * Created by @rajesh on 19/5/18.
 */
import React, { Component } from 'react';

export default class CustomWizard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            steps : props.steps
        };

        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    }

    _next() {
        let stepslength = this.state.steps.length;
        let currentStep = this.state.currentStep;
        // Make sure currentStep is set to something reasonable
        if (currentStep >= stepslength) {
            currentStep = stepslength;
        } else {
            currentStep = currentStep + 1;
        }
        this.setState({
            currentStep: currentStep,
        });
    }

    _prev() {
        let currentStep = this.state.currentStep;
        if (currentStep <= 1) {
            currentStep = 1;
        } else {
            currentStep = currentStep - 1;
        }

        this.setState({
            currentStep: currentStep
        });
    }

    _showPrevious(){
        return this.state.currentStep !== 1;
    }
    _showNext(){
        return this.state.currentStep !== this.state.steps.length;
    }
    _handlestepclick(value){
      this.setState({
        currentStep: value,
      });
    }

    render() {
        let currentStep = this.state.currentStep;
        const SpecificStory = this.state.steps[currentStep-1].component;
        return(
            <div>
              <WizardStep2
                  currentState={this.state}
                  stepclick={(value)=>{this._handlestepclick(value)}}
              />
              <div id="fieldsets">
                  <SpecificStory
                      currentStep={currentStep}
                      afterValidPrev={this._prev}
                      afterValid={this._next}
                  />
              </div>
                <div>
                    { this._showPrevious()
                        ? <button 
                        
                        onClick={()=>{this._prev()}}
                                  className="btn btn-default btn-xxs previous"
                        >
                            Previous
                        </button> : <span></span>

                    }
                    {'\u00A0'}
                    { this._showNext()
                        ? <button 
                            className="btn btn-primary btn-xxs next"
                            onClick={()=>{this._next()}}
                        >
                            Next
                        </button> : <span></span>
                    }

                </div>
            </div>
        );
    }
}
class WizardStep1 extends React.Component {
  constructor(props){
      super(props)
      this.hendlestepclick=this.hendlestepclick.bind(this)
  }
  hendlestepclick(value){
  this.props.stepclick(value);
  }
  render(){
      const {  currentStep, steps } = this.props.currentState;
      return(
                 <ul id="section-tabs">
                  { steps.map((value,Index)=>(
                      <li  key={value.title} className={(Index===currentStep-1) ? "current active" : ""} onClick={()=>{this.hendlestepclick(Index+1)}}>
                      {value.title}
                      </li> 
                  ))}
              </ul>
      )
  }

}

class WizardStep2 extends React.Component {
    constructor(props){
        super(props)
    }
    getStyle(active) {
        return {
            backgroundColor: active ? 'rgb(253, 185, 63)' : '#319ea7'
        }
    }

    render(){
        const {  currentStep, steps } = this.props.currentState;

        return(
            <div>
                <div className="header">
                    <h2>
                        {steps[currentStep-1].title}
                    </h2>
                </div>
                <div className="stepper">
                    { steps.map((value,Index)=>(
                      <span key={value.title}>
                        <input className="stepper__input" id={`stepper-3-${Index}`} name="stepper-3" type="radio" onChange={()=>{}}  checked={ (Index===currentStep-1) } ></input>
                        <div className="stepper__step">
                          <label className="stepper__button" htmlFor={`stepper-3-${Index}`}>
                          <p className="stepper__content"> {value.title}</p>
                          </label>
                        </div>
                        </span>
                    ))}
                </div>
            </div>

        )
    }

}
