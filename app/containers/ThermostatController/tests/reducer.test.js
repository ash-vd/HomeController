import expect from 'expect';
import thermostatControllerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('thermostatControllerReducer', () => {
  it('returns the initial state', () => {
    expect(thermostatControllerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
