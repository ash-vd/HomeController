/*
 *
 * State actions
 *
 */

import {
  UPDATE_STATE,
} from './constants';

export function updateState(state) {
  return {
    type: UPDATE_STATE,
    state,
  };
}
