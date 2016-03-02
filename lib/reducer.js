'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _immutable = require('immutable');

var _constants = require('./constants');

var _helpers = require('./helpers');

/**
 * Contains the 3 parts of the request state. The idea is based off the async
 * Actions section in the redux doc.
 * http://redux.js.org/docs/advanced/AsyncActions.html
 * @type {Immutable Map}
 * @prop [isFetching] false by default and true when there is a request made
 * @prop [didFail] false by default and true when the request has failed
 * @prop [success] false by default and true when the request has received data
 */
var initialState = exports.initialState = (0, _immutable.Map)({
  isFetching: false,
  didFail: false,
  success: false
});

function asyncState() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _constants.REQUEST:
      return (0, _helpers.requestChange)(state);
    case _constants.REQUEST_FAIL:
      return (0, _helpers.requestFail)(state);
    case _constants.REQUEST_SUCCESS:
      return (0, _helpers.requestSuccess)(state);
    default:
      return state;
  }
}

exports.default = asyncState;