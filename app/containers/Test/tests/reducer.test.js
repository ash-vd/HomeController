import expect from 'expect';
import testReducer from '../reducer';
import { fromJS } from 'immutable';

describe('testReducer', () => {
  it('returns the initial state', () => {
    expect(testReducer(undefined, {})).toEqual(fromJS({}));
  });
});
