import { createSelector } from 'reselect';

/**
 * Direct selector to the State state domain
 */
const selectState = () => (state) => state.get('language');

/**
 * Select the state
 */

const selectClimate = () => createSelector(
  selectState(),
  (stateState) => stateState.get('climate')
);

export {
  selectState,
  selectClimate,
};
