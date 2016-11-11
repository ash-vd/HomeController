/*
 *
 * State actions
 *
 */

import {
  SET_STATE,
  UPDATE_STATE,
} from './constants';

export function setState(state) {
  return {
    type: SET_STATE,
    state,
  };
}

export function updateState(state) {
  const { entity_id } = state;

  const splitted = entity_id.split('.');
  const entity_group = splitted[0]; // eslint-disable-line camelcase
  const entity_name = splitted[1]; // eslint-disable-line camelcase

  return {
    type: UPDATE_STATE,
    entity_group,
    entity_name,
    state,
  };
}
