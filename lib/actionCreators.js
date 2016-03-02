'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestSuccess = exports.requestFail = exports.request = undefined;

var _constants = require('./constants');

var _reduxActions = require('redux-actions');

var request = (0, _reduxActions.createAction)(_constants.REQUEST);
var requestFail = (0, _reduxActions.createAction)(_constants.REQUEST_FAIL);
var requestSuccess = (0, _reduxActions.createAction)(_constants.REQUEST_SUCCESS);

exports.request = request;
exports.requestFail = requestFail;
exports.requestSuccess = requestSuccess;