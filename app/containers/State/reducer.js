/*
 *
 * State reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPDATE_STATE,
} from './constants';

const initialState = fromJS({});

function stateReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STATE:
      return state
        .merge(action.state);
    default:
      return state;
  }
}

export default stateReducer;
