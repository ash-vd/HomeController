import { createSelector } from 'reselect';

/**
 * Direct selector to the thermostatController state domain
 */
const selectThermostatControllerDomain = () => (state) => state.get('thermostatController');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ThermostatController
 */

const selectThermostatController = () => createSelector(
  selectThermostatControllerDomain(),
  (substate) => substate.toJS()
);

export default selectThermostatController;
export {
  selectThermostatControllerDomain,
};
