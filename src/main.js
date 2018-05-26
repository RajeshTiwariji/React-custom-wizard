/**
 * Created by @rajesh on 19/5/18.
 */
import React, { Component } from 'react';
import styles from './css/main.css';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


class CustomWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };

    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  componentWillMount() {

  }
  _next() {
    const stepslength = this.state.steps.length;
    let currentStep = this.state.currentStep;
        // Make sure currentStep is set to something reasonable
    if (currentStep >= stepslength) {
      currentStep = stepslength;
    } else {
      currentStep += 1;
    }
    this.setState({
      currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    if (currentStep <= 1) {
      currentStep = 1;
    } else {
      currentStep -= 1;
    }

    this.setState({
      currentStep
    });
  }

  _showPrevious() {
    return this.state.currentStep !== 1;
  }
  _showNext() {
    return this.state.currentStep !== this.state.steps.length;
  }
  _handlestepclick(value) {
    this.setState({
      currentStep: value
    });
  }

  render() {
    const { classOnHeading, currentStep, textOnNextbtn, classNext, classPrevious, textOnPreviousbtn } = this.state;
    const FadeTransition = props => (
            <CSSTransition
                {...props}
                classNames="example"
                timeout={{ enter: 700, exit: 300 }}
            />
        );
    const SpecificStory = this.state.steps[currentStep - 1].component;
    const heading = this.state.steps[currentStep - 1].heading;


    return (
            <div>
                {heading ? (<WizardHeader heading={heading} classOnHeading={classOnHeading} />) : undefined}
              <WizardStep1
                  currentState={this.state}
                  stepclick={(value) => { this._handlestepclick(value); }}
              />
              <TransitionGroup>
                <FadeTransition>
                  <SpecificStory
                      currentStep={currentStep}
                      afterValidPrev={this._prev}
                      afterValid={this._next}
                  />
                </FadeTransition>
              </TransitionGroup>
              <div>
                  { this._showPrevious() &&
                  (<button

                      onClick={() => { this._prev(); }}
                      className={classPrevious}
                  >
                      {textOnPreviousbtn}
                  </button>)

                  }
                  {'\u00A0'}
                  { this._showNext()
                  && (<button
                      className={classNext}
                      onClick={() => { this._next(); }}
                  >
                      {textOnNextbtn}
                  </button>)
                  }

              </div>
            </div>
    );
  }
}
class WizardStep1 extends React.Component {
  constructor(props) {
    super(props);
    this.hendlestepclick = this.hendlestepclick.bind(this);
  }
  hendlestepclick(value) {
    this.props.stepclick(value);
  }
  render() {
    const { currentStep, steps } = this.props.currentState;
    return (
            <ul id="sectionTabs">
                { steps.map((value, Index) => (
                    <li key={value.tag} className={(Index === currentStep - 1) ? ('current active') : undefined } onClick={() => { this.hendlestepclick(Index + 1); }}>
                        {value.tag}
                    </li>
                ))}
            </ul>
    );
  }

}

class WizardHeader extends React.Component {

  render() {
    return (
            <div className={this.props.classOnHeading}>
                {this.props.heading}
            </div>
    );
  }

}

class WizardStep2 extends React.Component {
  constructor(props) {
    super(props);
  }
  getStyle(active) {
    return {
      backgroundColor: active ? 'rgb(253, 185, 63)' : '#319ea7'
    };
  }

  render() {
    const { currentStep, steps } = this.props.currentState;

    return (
            <div>
              <div className="stepper">
                  { steps.map((value, Index) => (
                      <span key={value.tag}>
                        <input className="stepper__input" id={`stepper-3-${Index}`} name="stepper-3" type="radio" onChange={() => {}} checked={ (Index === currentStep - 1) } ></input>
                        <div className="stepper__step">
                          <label className="stepper__button" htmlFor={`stepper-3-${Index}`}>
                          </label>
                        </div>
                        </span>
                  ))}
              </div>
            </div>

    );
  }

}

CustomWizard.defaultProps = {
  showHeading: true,
  showNameState: true,
  validation: false,
  currentStep: 1,
  classOnHeading: 'wizard-heading',
  textOnNextbtn: 'Next',
  classNext: 'btnss next',
  textOnPreviousbtn: 'Previous',
  classPrevious: 'btnss previous'
};


CustomWizard.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    tag: PropTypes.string.isRequired,
    component: PropTypes.constructor.isRequired
  })).isRequired,
  showHeading: PropTypes.bool,
  showNameState: PropTypes.bool,
  validation: PropTypes.bool,
  currentStep: PropTypes.number,
  classOnHeading: PropTypes.string,
  textOnNextbtn: PropTypes.string,
  classNext: PropTypes.string,
  classPrevious: PropTypes.string,
  textOnPreviousbtn: PropTypes.string
};


export default (CustomWizard);
