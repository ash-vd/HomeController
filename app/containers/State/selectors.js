import { createSelector } from 'reselect';

/**
 * Direct selector to the state state domain
 */
const selectStateDomain = () => (state) => state.get('state');

/**
 * Other specific selectors
 */


/**
 * Default selector used by State
 */

const selectState = () => createSelector(
  selectStateDomain(),
  (substate) => substate.toJS()
);

export default selectState;
export {
  selectStateDomain,
};
