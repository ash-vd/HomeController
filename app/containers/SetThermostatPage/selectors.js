import { createSelector } from 'reselect';

/**
 * Direct selector to the setThermostatPage state domain
 */
const selectSetThermostatPageDomain = () => (state) => state.get('setThermostatPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SetThermostatPage
 */

const selectSetThermostatPage = () => createSelector(
  selectSetThermostatPageDomain(),
  (substate) => substate.toJS()
);

export default selectSetThermostatPage;
export {
  selectSetThermostatPageDomain,
};
