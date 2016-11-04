/*
 *
 * Updater
 *
 */

import React from 'react';
import { connect } from 'react-redux';

export class Updater extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const source = new EventSource('URL');
    source.onmessage = function (event) {
      if (event.data === 'ping') {
        return;
      }
      console.log(event);
    };
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Updater);
