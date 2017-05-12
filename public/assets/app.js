webpackJsonp([0],{

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(74);

var _react2 = _interopRequireDefault(_react);

var _headerSlide = __webpack_require__(225);

var _headerSlide2 = _interopRequireDefault(_headerSlide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderSlider = function (_React$Component) {
	_inherits(HeaderSlider, _React$Component);

	function HeaderSlider(props) {
		_classCallCheck(this, HeaderSlider);

		var _this = _possibleConstructorReturn(this, (HeaderSlider.__proto__ || Object.getPrototypeOf(HeaderSlider)).call(this, props));

		_this.changeSlide = _this.changeSlide.bind(_this);

		_this.state = {
			section: 0
		};
		return _this;
	}

	_createClass(HeaderSlider, [{
		key: 'changeSlide',
		value: function changeSlide() {}
	}, {
		key: 'render',
		value: function render() {
			var h = window.innerHeight;
			var sectionContainer = { height: h };

			return _react2.default.createElement(
				'div',
				{ style: sectionContainer },
				this.props.slides.map(function (slide, i) {
					return _react2.default.createElement(_headerSlide2.default, _extends({ key: i }, slide, { height: h }));
				})
			);
		}
	}]);

	return HeaderSlider;
}(_react2.default.Component);

HeaderSlider.defaultProps = { slides: [] };

exports.default = HeaderSlider;

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = multipleRender;

var _react = __webpack_require__(74);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(139);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function multipleRender(component, selector) {
	if (document.querySelectorAll(selector).length >= 1) {
		var containers = [].concat(_toConsumableArray(document.querySelectorAll(selector)));
		var components = [];

		containers.forEach(function (el) {
			var props = {};

			try {
				props = el.getAttribute('data-props') ? JSON.parse(el.getAttribute('data-props')) : {};
			} catch (err) {
				console.error('Check json structure on data-props', err);
			}

			var componentElement = _react2.default.createElement(component, _extends({}, props));

			if (_react2.default.isValidElement(componentElement)) {
				(0, _reactDom.render)(componentElement, el);
				components = components.concat([componentElement]);
			} else {
				console.error('check is a valid component');
			}
		});

		return components;
	}
}

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(74);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderSlide = function (_React$Component) {
	_inherits(HeaderSlide, _React$Component);

	function HeaderSlide(props) {
		_classCallCheck(this, HeaderSlide);

		return _possibleConstructorReturn(this, (HeaderSlide.__proto__ || Object.getPrototypeOf(HeaderSlide)).call(this, props));
	}

	_createClass(HeaderSlide, [{
		key: "render",
		value: function render() {
			var sectionLeft = {
				height: this.props.height,
				background: this.props.sectionLeft.bg
			};

			var sectionRight = {
				height: this.props.height,
				background: this.props.sectionRight.bg
			};

			return _react2.default.createElement(
				"div",
				{ className: "" },
				_react2.default.createElement(
					"div",
					{ style: sectionLeft, className: "col-lg-5" },
					_react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.sectionLeft.content } })
				),
				_react2.default.createElement(
					"div",
					{ style: sectionRight, className: "col-lg-7" },
					_react2.default.createElement("img", { src: this.props.sectionRight.img, alt: "" })
				)
			);
		}
	}]);

	return HeaderSlide;
}(_react2.default.Component);

HeaderSlide.defaultProps = {
	sectionLeft: {},
	sectionRight: {}
};

exports.default = HeaderSlide;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(206);

var _reactMultipleRender = __webpack_require__(207);

var _reactMultipleRender2 = _interopRequireDefault(_reactMultipleRender);

var _headerSlider = __webpack_require__(204);

var _headerSlider2 = _interopRequireDefault(_headerSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactMultipleRender2.default)(_headerSlider2.default, '.bs-headerslider');

/***/ })

},[226]);