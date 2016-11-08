/*
 *
 * State
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import config from 'config';

import { updateState } from './actions';
import selectState from './selectors';

export class State extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: React.PropTypes.func,
  };

  componentDidMount() {
    const { dispatch } = this.props;

    const state = {};
    axios.get(`${config.HA_URL}/api/states?api_password=${config.HA_PASSWORD}`)
      .then((response) => {
        response.data.forEach((obj) => {
          const splitted = obj.entity_id.split('.');
          const entity_group = splitted[0];
          const entity_name = splitted[1];

          if (!state[entity_group]) {
            state[entity_group] = {};
          }

          const object = Object.assign({
            entity_name,
          }, obj);

          state[entity_group][entity_name] = object;
        });
        dispatch(updateState(state));
        console.log(state);
      })
      .catch((error) => {
        console.log(error);
      });
    const source = new EventSource(`${config.HA_URL}/api/stream?api_password=${config.HA_PASSWORD}`);
    source.onmessage = (event) => {
      if (event.data === 'ping') {
        return;
      }
      const obj = JSON.parse(event.data);
      console.log(obj);
    };
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
