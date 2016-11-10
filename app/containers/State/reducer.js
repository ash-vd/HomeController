/*
 *
 * State reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_STATE,
  UPDATE_STATE,
} from './constants';

const initialState = fromJS({});

function stateReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STATE:
      return state
        .merge(action.state);
    case UPDATE_STATE:
      return state
        .mergeIn([action.entity_group, action.entity_name], action.state);
    default:
      return state;
  }
}

export default stateReducer;
