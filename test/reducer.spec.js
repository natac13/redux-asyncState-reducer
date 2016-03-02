import { expect } from 'chai';

import reducer from '../src/reducer';

import {
  request,
  requestFail,
  requestSuccess
} from '../src/actionCreators';

describe('Reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = require('../src/reducer').initialState;
  });

  it('should return the initial state when passed an unKnown action', () => {
    const action = {type: 'NOT_AN_ACTION'};
    const state = initialState;
    const actual = reducer(state, action);
    const expected = initialState;
    expect(actual).to.equal(expected);
  });

  it('should return the initialState when undefined as the state argument', () => {
    const actual = reducer(undefined, {});
    const expected = initialState;
    expect(actual).to.equal(expected);
  });

  it('should be able to handle the request action', () => {
    const action = request();
    const state = initialState;
    const actual = reducer(state, action);
    const expected = initialState.set('isFetching', true);
    expect(actual).to.equal(expected);
  });

  it('should be able to handle the requestFail action', () => {
    const action = requestFail();
    const state = initialState;
    const actual = reducer(state, action);
    const expected = initialState.set('didFail', true);
    expect(actual).to.equal(expected);
  });

  it('should be able to handle the requestSuccess action', () => {
    const action = requestSuccess();
    const state = initialState;
    const actual = reducer(state, action);
    const expected = initialState.set('success', true);
    expect(actual).to.equal(expected);
  });
});
