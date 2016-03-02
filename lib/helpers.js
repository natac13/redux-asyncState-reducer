'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noFail = exports.failedData = exports.noSuccess = exports.didSucceed = exports.noFetching = exports.fetchingData = exports.boolUpdater = exports.requestFail = exports.requestSuccess = exports.requestChange = undefined;

var _ramda = require('ramda');

var _immutable = require('immutable');

var boolUpdater = (0, _ramda.curry)(function (property, bool, state) {
  if (!_immutable.Map.isMap(state)) {
    state = (0, _immutable.Map)(state);
  }

  if (typeof property !== 'string') {
    throw new TypeError('Type of property should be a string');
  }

  if (typeof bool !== 'boolean') {
    throw new TypeError('Type of bool should be a boolean');
  }
  return state.update(property, function () {
    return bool;
  });
});

/**
 * Functions that is looking for a state immutable map to run update on
 */
var fetchingData = boolUpdater('isFetching', true);
var noFetching = boolUpdater('isFetching', false);
var didSucceed = boolUpdater('success', true);
var noSuccess = boolUpdater('success', false);
var failedData = boolUpdater('didFail', true);
var noFail = boolUpdater('didFail', false);

var requestChange = (0, _ramda.compose)(fetchingData, noFail, noSuccess);
var requestSuccess = (0, _ramda.compose)(noFetching, noFail, didSucceed);
var requestFail = (0, _ramda.compose)(failedData, noFetching, noSuccess);

exports.requestChange = requestChange;
exports.requestSuccess = requestSuccess;
exports.requestFail = requestFail;
exports.boolUpdater = boolUpdater;
exports.fetchingData = fetchingData;
exports.noFetching = noFetching;
exports.didSucceed = didSucceed;
exports.noSuccess = noSuccess;
exports.failedData = failedData;
exports.noFail = noFail;