/**
*
* TemperatureBig
*
*/

import React from 'react';

import styles from './styles.css';

class TemperatureBig extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    data: React.PropTypes.object,
  };

  render() {
    const { data } = this.props;
    return (
      <div className={styles.temperatureBig}>
        <div className={styles.roomName}>
          {data.getIn(['attributes', 'friendly_name'])}
        </div>
        <span className={styles.number}>
          {data.getIn(['attributes', 'temperature'])}
        </span>
        <span className={styles.degree}>
          &deg; C
        </span>
      </div>
    );
  }
}

export default TemperatureBig;
