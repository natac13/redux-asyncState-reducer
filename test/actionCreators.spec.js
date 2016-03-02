import { expect } from 'chai';
import { isFSA } from 'flux-standard-action';

import {
  request,
  requestFail,
  requestSuccess
} from '../src/actionCreators';

describe('request', () => {
  it('should return a FSA', () => {
    const action = request();
    expect(isFSA(action)).to.be.true;
  });
});
