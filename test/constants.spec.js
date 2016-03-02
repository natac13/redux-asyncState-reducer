import { expect } from 'chai';

import {
  REQUEST,
  REQUEST_FAIL,
  REQUEST_SUCCESS
} from '../src/constants';

describe('Constants', () => {
  describe('REQUEST', () => {
    it('should return a string value', () => {
      expect(typeof REQUEST).to.equal('string');
    });
  });

  describe('REQUEST_FAIL', () => {
    it('should return a string value', () => {
      expect(typeof REQUEST_FAIL).to.equal('string');
    });
  });

  describe('REQUEST_SUCCESS', () => {
    it('should return a string value', () => {
      expect(typeof REQUEST_SUCCESS).to.equal('string');
    });
  });
});

