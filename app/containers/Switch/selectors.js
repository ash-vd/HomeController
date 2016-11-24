import { createSelector } from 'reselect';

/**
 * Direct selector to the switch state domain
 */
const selectSwitchDomain = () => (state) => state.get('switch');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Switch
 */

const selectSwitch = () => createSelector(
  selectSwitchDomain(),
  (substate) => substate.toJS()
);

export default selectSwitch;
export {
  selectSwitchDomain,
};
