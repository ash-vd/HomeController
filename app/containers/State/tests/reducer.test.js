import expect from 'expect';
import stateReducer from '../reducer';
import { fromJS } from 'immutable';

describe('stateReducer', () => {
  it('returns the initial state', () => {
    expect(stateReducer(undefined, {})).toEqual(fromJS({}));
  });
});
