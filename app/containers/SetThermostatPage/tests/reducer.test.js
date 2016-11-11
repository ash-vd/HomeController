import expect from 'expect';
import setThermostatPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('setThermostatPageReducer', () => {
  it('returns the initial state', () => {
    expect(setThermostatPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
