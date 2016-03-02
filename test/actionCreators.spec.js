import { expect } from 'chai';
import { isFSA } from 'flux-standard-action';

import {
  request,
  requestFail,
  requestSuccess
} from '../src/actionCreators';

describe('actionCreators', () => {
  describe('request', () => {
    it('should return a FSA', () => {
      const action = request();
      expect(isFSA(action)).to.be.true;
    });
  });

  describe('requestFail', () => {
    it('should return a FSA', () => {
      const action = requestFail();
      expect(isFSA(action)).to.be.true;
    });
  });

  describe('requestSuccess', () => {
    it('should return a FSA', () => {
      const action = requestSuccess();
      expect(isFSA(action)).to.be.true;
    });
  });
});

