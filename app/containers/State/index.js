/*
 *
 * State
 * Synchronises the Home Assistant state with the redux state. When
 * the page is loaded for the first time, it fetches the data from the REST API.
 * At the same time it connects to HA using EventSource, to update the state
 * in real-time.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import config from 'config';

import { setState, updateState } from './actions';
import selectState from './selectors';

export class State extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: React.PropTypes.func,
  };

  componentDidMount() {
    const { dispatch } = this.props;

    axios.get(`${config.HA_URL}/api/states?api_password=${config.HA_PASSWORD}`)
      .then((response) => {
        const state = this._formatState(response.data);

        dispatch(setState(state));

        console.log(state);
      })
      .catch((error) => {
        console.error(error);
      });
    const source = new EventSource(`${config.HA_URL}/api/stream?api_password=${config.HA_PASSWORD}`);
    source.onmessage = (event) => {
      const response = JSON.parse(event.data);
      if (response.event_type !== 'state_changed') return;

      dispatch(updateState(response.data.new_state));
    };
  }

  _formatState(state) {
    const formattedState = {};
    state.forEach((obj) => {
      const splitted = obj.entity_id.split('.');
      const entity_group = splitted[0]; // eslint-disable-line camelcase
      const entity_name = splitted[1]; // eslint-disable-line camelcase

      if (!formattedState[entity_group]) {
        formattedState[entity_group] = {};
      }

      const object = Object.assign({
        entity_name,
      }, obj);

      formattedState[entity_group][entity_name] = object;
    });

    return formattedState;
  }

  render() {
    return false;
  }
}

const mapStateToProps = selectState();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(State);
