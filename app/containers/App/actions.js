/*
 *
 * SetThermostatPage actions
 *
 */

import {
  TOGGLE_SWITCH,
} from './constants';

export function toggleSwitch(entity_id) {
  return {
    type: TOGGLE_SWITCH,
    entity_id,
  };
}
