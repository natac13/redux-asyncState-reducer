import { expect } from 'chai';

import { Map } from 'immutable';

import {
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
} from '../src/helpers';

describe('Helper Functions', () => {
  describe('boolUpdater', () => {
    it('should return an function given the property to update and the boolean to set it to', () => {
      const actual = boolUpdater('isFetching', true);
      expect(typeof actual).to.equal('function');
    });

    it('should return an immutable map given all 3 argument; third being an immutable map to update', () => {
      const actual = boolUpdater('isFetching', true, Map());
      const expected = Map({ 'isFetching': true });
      expect(actual).to.equal(expected);
    });

    it('should convert an plain object to an immutable map if supplied as the third argument', () => {
      const actual = boolUpdater('isFetching', true, {});
      const expected = Map({ 'isFetching': true });
      expect(actual).to.equal(expected);
    });

    it('should return an error is the first argument is not a string', () => {
      const fn = boolUpdater.bind(null, {}, true, Map());
      expect(fn).to.throw(TypeError, /string/i);
    });

    it('should throw an TypeError if the second argument is not a boolean', () => {
      const fn = boolUpdater.bind(null, 'isFetching', 4, Map());
      expect(fn).to.throw(TypeError, /boolean/i);
    });
  });

  describe('Basic helper functions', () => {
    describe('fetchingData', () => {
      it('should return a immutable map with isFetching set to true', () => {
        const actual = fetchingData(Map());
        const expected = Map({ 'isFetching': true });
        expect(actual).to.equal(expected);
      });
    });

    describe('noFetching', () => {
      it('should return a immutable map with isFetching set to false', () => {
        const actual = noFetching(Map());
        const expected = Map({ 'isFetching': false });
        expect(actual).to.equal(expected);
      });
    });

    describe('didSucceed', () => {
      it('should return a immutable map with success set to true', () => {
        const actual = didSucceed(Map());
        const expected = Map({ 'success': true });
        expect(actual).to.equal(expected);
      });
    });

    describe('noSuccess', () => {
      it('should return a immutable map with success set to false', () => {
        const actual = noSuccess(Map());
        const expected = Map({ 'success': false });
        expect(actual).to.equal(expected);
      });
    });

    describe('failedData', () => {
      it('should return a immutable map with didFail set to true', () => {
        const actual = failedData(Map());
        const expected = Map({ 'didFail': true });
        expect(actual).to.equal(expected);
      });
    });

    describe('noFail', () => {
      it('should return a immutable map with didFail set to false', () => {
        const actual = noFail(Map());
        const expected = Map({ 'didFail': false });
        expect(actual).to.equal(expected);
      });
    });
  });

  describe('Composed Helper functions; used by reducer', () => {
    let initialState;
    beforeEach(() => {
      initialState = require('../src/reducer').initialState
    });

    describe('requestChange', () => {
      it('should return an immutable Map with isFetching: true, success: false and didFail: false', () => {
        const actual = requestChange(Map());
        const expected = initialState.set('isFetching', true);
        expect(actual).to.equal(expected);
      });
    });

    describe('requestSuccess', () => {
      it('should return an immutable Map with isFetching: false, success: true and didFail: false', () => {
        const actual = requestSuccess(Map());
        const expected = initialState.set('success', true);
        expect(actual).to.equal(expected);
      });
    });

    describe('requestFail', () => {
      it('should return an immutable Map with isFetching: false, success: false and didFail: true', () => {
        const actual = requestFail(Map());
        const expected = initialState.set('didFail', true);
        expect(actual).to.equal(expected);
      });
    });

  });

});


