import { Map } from 'immutable';

import {
  REQUEST,
  REQUEST_FAIL,
  REQUEST_SUCCESS
} from './constants';

import {
  requestChange,
  requestSuccess,
  requestFail
} from './helpers';

/**
 * Contains the 3 parts of the request state. The idea is based off the async
 * Actions section in the redux doc.
 * http://redux.js.org/docs/advanced/AsyncActions.html
 * @type {Immutable Map}
 * @prop [isFetching] false by default and true when there is a request made
 * @prop [didFail] false by default and true when the request has failed
 * @prop [success] false by default and true when the request has received data
 */
export const initialState = Map({
  isFetching: false,
  didFail: false,
  success: false
});

function asyncState (state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return requestChange(state);
    case REQUEST_FAIL:
      return requestFail(state);
    case REQUEST_SUCCESS:
      return requestSuccess(state);
    default:
      return state;
  }
}

export default asyncState;
