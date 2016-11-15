import { createSelector } from 'reselect';

/**
 * Direct selector to the State state domain
 */
const selectState = () => (state) => state.get('state');

/**
 * Select the state
 */

const selectHomePage = createSelector(
  selectState(),
  (state) => ({ state: state.toJS() })
);

export default selectHomePage;
export {
  selectHomePage,
};
