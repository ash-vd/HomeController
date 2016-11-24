import expect from 'expect';
import switchReducer from '../reducer';
import { fromJS } from 'immutable';

describe('switchReducer', () => {
  it('returns the initial state', () => {
    expect(switchReducer(undefined, {})).toEqual(fromJS({}));
  });
});
