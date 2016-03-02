import {
  REQUEST,
  REQUEST_FAIL,
  REQUEST_SUCCESS
} from './constants';

import { createAction } from 'redux-actions';

const request = createAction(REQUEST);
const requestFail = createAction(REQUEST_FAIL);
const requestSuccess = createAction(REQUEST_SUCCESS);

export {
  request,
  requestFail,
  requestSuccess
};
