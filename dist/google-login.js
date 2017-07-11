(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["GoogleLogin"] = factory(require("react"));
	else
		root["GoogleLogin"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(4)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(3);
var ReactPropTypesSecret = __webpack_require__(5);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var GoogleLogin = function (_Component) {
  _inherits(GoogleLogin, _Component);

  function GoogleLogin(props) {
    _classCallCheck(this, GoogleLogin);

    var _this = _possibleConstructorReturn(this, (GoogleLogin.__proto__ || Object.getPrototypeOf(GoogleLogin)).call(this, props));

    _this.signIn = _this.signIn.bind(_this);
    _this.state = {
      disabled: true
    };
    return _this;
  }

  _createClass(GoogleLogin, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          clientId = _props.clientId,
          cookiePolicy = _props.cookiePolicy,
          loginHint = _props.loginHint,
          hostedDomain = _props.hostedDomain,
          autoLoad = _props.autoLoad,
          isSignedIn = _props.isSignedIn,
          fetchBasicProfile = _props.fetchBasicProfile,
          redirectUri = _props.redirectUri,
          discoveryDocs = _props.discoveryDocs,
          onFailure = _props.onFailure,
          uxMode = _props.uxMode;

      (function (d, s, id, cb) {
        var element = d.getElementsByTagName(s)[0];
        var fjs = element;
        var js = element;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://apis.google.com/js/client:platform.js';
        fjs.parentNode.insertBefore(js, fjs);
        js.onload = cb;
      })(document, 'script', 'google-login', function () {
        var params = {
          client_id: clientId,
          cookiepolicy: cookiePolicy,
          login_hint: loginHint,
          hosted_domain: hostedDomain,
          fetch_basic_profile: fetchBasicProfile,
          discoveryDocs: discoveryDocs,
          ux_mode: uxMode,
          redirect_uri: redirectUri
        };
        window.gapi.load('auth2', function () {
          _this2.setState({
            disabled: false
          });
          if (!window.gapi.auth2.getAuthInstance()) {
            window.gapi.auth2.init(params).then(function (res) {
              if (isSignedIn && res.isSignedIn.get()) {
                _this2._handleSigninSuccess(res.currentUser.get());
              }
            }, function (err) {
              return onFailure(err);
            });
          }
          if (autoLoad) {
            _this2.signIn();
          }
        });
      });
    }
  }, {
    key: 'signIn',
    value: function signIn(e) {
      var _this3 = this;

      if (e) {
        e.preventDefault(); // to prevent submit if used within form
      }
      if (!this.state.disabled) {
        var auth2 = window.gapi.auth2.getAuthInstance();
        var _props2 = this.props,
            offline = _props2.offline,
            redirectUri = _props2.redirectUri,
            onSuccess = _props2.onSuccess,
            onRequest = _props2.onRequest,
            fetchBasicProfile = _props2.fetchBasicProfile,
            onFailure = _props2.onFailure,
            prompt = _props2.prompt,
            scope = _props2.scope,
            responseType = _props2.responseType;

        var options = {
          response_type: responseType,
          redirect_uri: redirectUri,
          fetch_basic_profile: fetchBasicProfile,
          prompt: prompt,
          scope: scope
        };
        onRequest();
        if (offline) {
          auth2.grantOfflineAccess(options).then(function (res) {
            return onSuccess(res);
          }, function (err) {
            return onFailure(err);
          });
        } else {
          auth2.signIn(options).then(function (res) {
            return _this3._handleSigninSuccess(res);
          }, function (err) {
            return onFailure(err);
          });
        }
      }
    }
  }, {
    key: '_handleSigninSuccess',
    value: function _handleSigninSuccess(res) {
      /*
        offer renamed response keys to names that match use
      */
      var basicProfile = res.getBasicProfile();
      var authResponse = res.getAuthResponse();
      res.googleId = basicProfile.getId();
      res.tokenObj = authResponse;
      res.tokenId = authResponse.id_token;
      res.accessToken = authResponse.access_token;
      res.profileObj = {
        googleId: basicProfile.getId(),
        imageUrl: basicProfile.getImageUrl(),
        email: basicProfile.getEmail(),
        name: basicProfile.getName(),
        givenName: basicProfile.getGivenName(),
        familyName: basicProfile.getFamilyName()
      };
      this.props.onSuccess(res);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          tag = _props3.tag,
          style = _props3.style,
          className = _props3.className,
          disabledStyle = _props3.disabledStyle,
          buttonText = _props3.buttonText,
          children = _props3.children;

      var disabled = this.state.disabled || this.props.disabled;
      var initialStyle = {
        display: 'inline-block',
        background: '#d14836',
        color: '#fff',
        width: 190,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 2,
        border: '1px solid transparent',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
      };
      var styleProp = function () {
        if (style) {
          return style;
        } else if (className && !style) {
          return {};
        }
        return initialStyle;
      }();
      var defaultStyle = function () {
        if (disabled) {
          return Object.assign({}, styleProp, disabledStyle);
        }
        return styleProp;
      }();
      var googleLoginButton = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(tag, {
        onClick: this.signIn,
        style: defaultStyle,
        disabled: disabled,
        className: className
      }, children ? children : buttonText);
      return googleLoginButton;
    }
  }]);

  return GoogleLogin;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

GoogleLogin.propTypes = {
  onSuccess: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  onFailure: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  clientId: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  onRequest: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  buttonText: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  offline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  scope: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  redirectUri: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  cookiePolicy: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  loginHint: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  hostedDomain: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  disabledStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  fetchBasicProfile: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  prompt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  autoLoad: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  discoveryDocs: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  responseType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  uxMode: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  isSignedIn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

GoogleLogin.defaultProps = {
  tag: 'button',
  buttonText: 'Login with Google',
  scope: 'profile email',
  responseType: 'permission',
  prompt: '',
  cookiePolicy: 'single_host_origin',
  fetchBasicProfile: true,
  isSignedIn: false,
  uxMode: 'popup',
  disabledStyle: {
    opacity: 0.6
  },
  onRequest: function onRequest() {},
  offline: false
};

/* harmony default export */ __webpack_exports__["default"] = GoogleLogin;

/***/ })
/******/ ]);
});