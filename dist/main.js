'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _main = require('./css/main.css');

var _main2 = _interopRequireDefault(_main);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by @rajesh on 19/5/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var CustomWizard = function (_Component) {
  _inherits(CustomWizard, _Component);

  function CustomWizard(props) {
    _classCallCheck(this, CustomWizard);

    var _this = _possibleConstructorReturn(this, (CustomWizard.__proto__ || Object.getPrototypeOf(CustomWizard)).call(this, props));

    _this.state = _extends({}, props);

    _this._next = _this._next.bind(_this);
    _this._prev = _this._prev.bind(_this);
    return _this;
  }

  _createClass(CustomWizard, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: '_next',
    value: function _next() {
      var stepslength = this.state.steps.length;
      var currentStep = this.state.currentStep;
      // Make sure currentStep is set to something reasonable
      if (currentStep >= stepslength) {
        currentStep = stepslength;
      } else {
        currentStep += 1;
      }
      this.setState({
        currentStep: currentStep
      });
    }
  }, {
    key: '_prev',
    value: function _prev() {
      var currentStep = this.state.currentStep;
      if (currentStep <= 1) {
        currentStep = 1;
      } else {
        currentStep -= 1;
      }

      this.setState({
        currentStep: currentStep
      });
    }
  }, {
    key: '_showPrevious',
    value: function _showPrevious() {
      return this.state.currentStep !== 1;
    }
  }, {
    key: '_showNext',
    value: function _showNext() {
      return this.state.currentStep !== this.state.steps.length;
    }
  }, {
    key: '_handlestepclick',
    value: function _handlestepclick(value) {
      this.setState({
        currentStep: value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          classOnHeading = _state.classOnHeading,
          currentStep = _state.currentStep,
          textOnNextbtn = _state.textOnNextbtn,
          classNext = _state.classNext,
          classPrevious = _state.classPrevious,
          textOnPreviousbtn = _state.textOnPreviousbtn;

      var FadeTransition = function FadeTransition(props) {
        return _react2.default.createElement(_reactTransitionGroup.CSSTransition, _extends({}, props, {
          classNames: 'example',
          timeout: { enter: 700, exit: 300 }
        }));
      };
      var SpecificStory = this.state.steps[currentStep - 1].component;
      var heading = this.state.steps[currentStep - 1].heading;

      return _react2.default.createElement(
        'div',
        null,
        heading ? _react2.default.createElement(WizardHeader, { heading: heading, classOnHeading: classOnHeading }) : undefined,
        _react2.default.createElement(WizardStep1, {
          currentState: this.state,
          stepclick: function stepclick(value) {
            _this2._handlestepclick(value);
          }
        }),
        _react2.default.createElement(
          _reactTransitionGroup.TransitionGroup,
          null,
          _react2.default.createElement(
            FadeTransition,
            null,
            _react2.default.createElement(SpecificStory, {
              currentStep: currentStep,
              afterValidPrev: this._prev,
              afterValid: this._next
            })
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          this._showPrevious() && _react2.default.createElement(
            'button',
            {

              onClick: function onClick() {
                _this2._prev();
              },
              className: classPrevious
            },
            textOnPreviousbtn
          ),
          '\xA0',
          this._showNext() && _react2.default.createElement(
            'button',
            {
              className: classNext,
              onClick: function onClick() {
                _this2._next();
              }
            },
            textOnNextbtn
          )
        )
      );
    }
  }]);

  return CustomWizard;
}(_react.Component);

var WizardStep1 = function (_React$Component) {
  _inherits(WizardStep1, _React$Component);

  function WizardStep1(props) {
    _classCallCheck(this, WizardStep1);

    var _this3 = _possibleConstructorReturn(this, (WizardStep1.__proto__ || Object.getPrototypeOf(WizardStep1)).call(this, props));

    _this3.hendlestepclick = _this3.hendlestepclick.bind(_this3);
    return _this3;
  }

  _createClass(WizardStep1, [{
    key: 'hendlestepclick',
    value: function hendlestepclick(value) {
      this.props.stepclick(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props$currentState = this.props.currentState,
          currentStep = _props$currentState.currentStep,
          steps = _props$currentState.steps;

      return _react2.default.createElement(
        'ul',
        { id: 'sectionTabs' },
        steps.map(function (value, Index) {
          return _react2.default.createElement(
            'li',
            { key: value.tag, className: Index === currentStep - 1 ? 'current active' : undefined, onClick: function onClick() {
                _this4.hendlestepclick(Index + 1);
              } },
            value.tag
          );
        })
      );
    }
  }]);

  return WizardStep1;
}(_react2.default.Component);

var WizardHeader = function (_React$Component2) {
  _inherits(WizardHeader, _React$Component2);

  function WizardHeader() {
    _classCallCheck(this, WizardHeader);

    return _possibleConstructorReturn(this, (WizardHeader.__proto__ || Object.getPrototypeOf(WizardHeader)).apply(this, arguments));
  }

  _createClass(WizardHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.classOnHeading },
        this.props.heading
      );
    }
  }]);

  return WizardHeader;
}(_react2.default.Component);

var WizardStep2 = function (_React$Component3) {
  _inherits(WizardStep2, _React$Component3);

  function WizardStep2(props) {
    _classCallCheck(this, WizardStep2);

    return _possibleConstructorReturn(this, (WizardStep2.__proto__ || Object.getPrototypeOf(WizardStep2)).call(this, props));
  }

  _createClass(WizardStep2, [{
    key: 'getStyle',
    value: function getStyle(active) {
      return {
        backgroundColor: active ? 'rgb(253, 185, 63)' : '#319ea7'
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$currentState2 = this.props.currentState,
          currentStep = _props$currentState2.currentStep,
          steps = _props$currentState2.steps;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'stepper' },
          steps.map(function (value, Index) {
            return _react2.default.createElement(
              'span',
              { key: value.tag },
              _react2.default.createElement('input', { className: 'stepper__input', id: 'stepper-3-' + Index, name: 'stepper-3', type: 'radio', onChange: function onChange() {}, checked: Index === currentStep - 1 }),
              _react2.default.createElement(
                'div',
                { className: 'stepper__step' },
                _react2.default.createElement('label', { className: 'stepper__button', htmlFor: 'stepper-3-' + Index })
              )
            );
          })
        )
      );
    }
  }]);

  return WizardStep2;
}(_react2.default.Component);

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
  steps: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    tag: _propTypes2.default.string.isRequired,
    component: _propTypes2.default.constructor.isRequired
  })).isRequired,
  showHeading: _propTypes2.default.bool,
  showNameState: _propTypes2.default.bool,
  validation: _propTypes2.default.bool,
  currentStep: _propTypes2.default.number,
  classOnHeading: _propTypes2.default.string,
  textOnNextbtn: _propTypes2.default.string,
  classNext: _propTypes2.default.string,
  classPrevious: _propTypes2.default.string,
  textOnPreviousbtn: _propTypes2.default.string
};

exports.default = CustomWizard;