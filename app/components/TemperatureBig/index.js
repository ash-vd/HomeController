/**
*
* TemperatureBig
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

class TemperatureBig extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    roomName: React.PropTypes.string,
  };

  render() {
    return (
      <div className={styles.temperatureBig}>
        <div className={styles.roomName}>
          {this.props.roomName}
        </div>
        <span className={styles.number}>
          21
        </span>
        <span className={styles.degree}>
          &deg; C
        </span>
      </div>
    );
  }
}

export default TemperatureBig;
