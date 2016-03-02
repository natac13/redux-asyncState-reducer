import { curry, compose } from 'ramda';
import { Map } from 'immutable';

const boolUpdater = curry(function (property, bool, state) {
  if (!Map.isMap(state)) {
    state = Map(state);
  }

  if (typeof property !== 'string') {
    throw new TypeError('Type of property should be a string');
  }

  if (typeof bool !== 'boolean') {
    throw new TypeError('Type of bool should be a boolean');
  }
  return state.update(property, () => bool);
});

/**
 * Functions that is looking for a state immutable map to run update on
 */
const fetchingData = boolUpdater('isFetching', true);
const noFetching = boolUpdater('isFetching', false);
const didSucceed = boolUpdater('success', true);
const noSuccess = boolUpdater('success', false);
const failedData = boolUpdater('didFail', true);
const noFail = boolUpdater('didFail', false);

const requestChange = compose(fetchingData, noFail, noSuccess);
const requestSuccess = compose(noFetching, noFail, didSucceed);
const requestFail = compose(failedData, noFetching, noSuccess);

export {
  requestChange,
  requestSuccess,
  requestFail,
  boolUpdater,
  fetchingData,
  noFetching,
  didSucceed,
  noSuccess,
  failedData,
  noFail
};
