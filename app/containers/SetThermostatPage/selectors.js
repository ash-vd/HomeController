import { createSelector } from 'reselect';

/**
 * Direct selector to the State state domain
 */
const selectState = () => (state) => state.get('state');

/**
 * Select the state
 */

const selectSetThermostatPage = createSelector(
  selectState(),
  (state) => ({ state: state.toJS() })
);

export default selectSetThermostatPage;
export {
  selectSetThermostatPage,
};
