import { call, put, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

import config from 'config';
import request from 'utils/request';

import { TOGGLE_SWITCH } from './constants';


export function* toggle(action) {
  const { entity_id } = action;
  const requestURL = `${config.HA_URL}/api/services/homeassistant/toggle?api_password=${config.HA_PASSWORD}`;

  const body = JSON.stringify({
    entity_id,
  });

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL, { method: 'POST', body });
  } catch (err) {
    console.error(err);
    // yield put(repoLoadingError(err));
  }
}

/**
 * Watches for TURN_ON actions and calls turnOn when one comes in.
 */
export function* toggleWatcher() {
  yield* takeEvery(TOGGLE_SWITCH, toggle);
}

// All sagas to be loaded
export default [
  toggleWatcher,
];
