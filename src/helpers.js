import { curry, compose } from 'ramda';

const boolUpdater = curry(function (what, toBool, state) {
  return state.update(what, (what) => toBool);
});

/**
 * Functions that is looking for a state immutable map to run update on
 */
const fetchingData = boolUpdater('fetching', true);
const noFetching = boolUpdater('fetching', false);
const didSucceed = boolUpdater('success', true);
const noSuccess = boolUpdater('success', false);
const failedData = boolUpdater('didFail', true);
const noFail = boolUpdater('didFail', false);

export const requestChange = compose(fetchingData, noFail, noSuccess);
export const requestSuccess = compose(noFetching, noFail, didSucceed);
export const requestFail = compose(failedData, noFetching, noSuccess);

export {
  requestChange,
  requestSuccess,
  requestFail
};
