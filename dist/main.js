"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

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

        _this.state = {
            currentStep: 1,
            steps: props.steps
        };

        _this._next = _this._next.bind(_this);
        _this._prev = _this._prev.bind(_this);
        return _this;
    }

    _createClass(CustomWizard, [{
        key: "_next",
        value: function _next() {
            var stepslength = this.state.steps.length;
            var currentStep = this.state.currentStep;
            // Make sure currentStep is set to something reasonable
            if (currentStep >= stepslength) {
                currentStep = stepslength;
            } else {
                currentStep = currentStep + 1;
            }
            this.setState({
                currentStep: currentStep
            });
        }
    }, {
        key: "_prev",
        value: function _prev() {
            var currentStep = this.state.currentStep;
            if (currentStep <= 1) {
                currentStep = 1;
            } else {
                currentStep = currentStep - 1;
            }

            this.setState({
                currentStep: currentStep
            });
        }
    }, {
        key: "_showPrevious",
        value: function _showPrevious() {
            return this.state.currentStep !== 1;
        }
    }, {
        key: "_showNext",
        value: function _showNext() {
            return this.state.currentStep !== this.state.steps.length;
        }
    }, {
        key: "_handlestepclick",
        value: function _handlestepclick(value) {
            this.setState({
                currentStep: value
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var currentStep = this.state.currentStep;
            var SpecificStory = this.state.steps[currentStep - 1].component;
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(WizardStep2, {
                    currentState: this.state,
                    stepclick: function stepclick(value) {
                        _this2._handlestepclick(value);
                    }
                }),
                _react2.default.createElement(
                    "div",
                    { id: "fieldsets" },
                    _react2.default.createElement(SpecificStory, {
                        currentStep: currentStep,
                        afterValidPrev: this._prev,
                        afterValid: this._next
                    })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    this._showPrevious() ? _react2.default.createElement(
                        "button",
                        {

                            onClick: function onClick() {
                                _this2._prev();
                            },
                            className: "btn btn-default btn-xxs previous"
                        },
                        "Previous"
                    ) : _react2.default.createElement("span", null),
                    "\xA0",
                    this._showNext() ? _react2.default.createElement(
                        "button",
                        {
                            className: "btn btn-primary btn-xxs next",
                            onClick: function onClick() {
                                _this2._next();
                            }
                        },
                        "Next"
                    ) : _react2.default.createElement("span", null)
                )
            );
        }
    }]);

    return CustomWizard;
}(_react.Component);

exports.default = CustomWizard;

var WizardStep1 = function (_React$Component) {
    _inherits(WizardStep1, _React$Component);

    function WizardStep1(props) {
        _classCallCheck(this, WizardStep1);

        var _this3 = _possibleConstructorReturn(this, (WizardStep1.__proto__ || Object.getPrototypeOf(WizardStep1)).call(this, props));

        _this3.hendlestepclick = _this3.hendlestepclick.bind(_this3);
        return _this3;
    }

    _createClass(WizardStep1, [{
        key: "hendlestepclick",
        value: function hendlestepclick(value) {
            this.props.stepclick(value);
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var _props$currentState = this.props.currentState,
                currentStep = _props$currentState.currentStep,
                steps = _props$currentState.steps;

            return _react2.default.createElement(
                "ul",
                { id: "section-tabs" },
                steps.map(function (value, Index) {
                    return _react2.default.createElement(
                        "li",
                        { key: value.title, className: Index === currentStep - 1 ? "current active" : "", onClick: function onClick() {
                                _this4.hendlestepclick(Index + 1);
                            } },
                        value.title
                    );
                })
            );
        }
    }]);

    return WizardStep1;
}(_react2.default.Component);

var WizardStep2 = function (_React$Component2) {
    _inherits(WizardStep2, _React$Component2);

    function WizardStep2(props) {
        _classCallCheck(this, WizardStep2);

        return _possibleConstructorReturn(this, (WizardStep2.__proto__ || Object.getPrototypeOf(WizardStep2)).call(this, props));
    }

    _createClass(WizardStep2, [{
        key: "getStyle",
        value: function getStyle(active) {
            return {
                backgroundColor: active ? 'rgb(253, 185, 63)' : '#319ea7'
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _props$currentState2 = this.props.currentState,
                currentStep = _props$currentState2.currentStep,
                steps = _props$currentState2.steps;


            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "header" },
                    _react2.default.createElement(
                        "h2",
                        null,
                        steps[currentStep - 1].title
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "stepper" },
                    steps.map(function (value, Index) {
                        return _react2.default.createElement(
                            "span",
                            { key: value.title },
                            _react2.default.createElement("input", { className: "stepper__input", id: "stepper-3-" + Index, name: "stepper-3", type: "radio", onChange: function onChange() {}, checked: Index === currentStep - 1 }),
                            _react2.default.createElement(
                                "div",
                                { className: "stepper__step" },
                                _react2.default.createElement(
                                    "label",
                                    { className: "stepper__button", htmlFor: "stepper-3-" + Index },
                                    _react2.default.createElement(
                                        "p",
                                        { className: "stepper__content" },
                                        " ",
                                        value.title
                                    )
                                )
                            )
                        );
                    })
                )
            );
        }
    }]);

    return WizardStep2;
}(_react2.default.Component);