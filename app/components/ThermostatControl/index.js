/**
*
* ThermostatControl
*
*/

import React from 'react';
import { browserHistory } from 'react-router';
import { FormattedMessage } from 'react-intl';

import Dial from 'components/Dial';

import messages from './messages';
import styles from './styles.css';

class ThermostatControl extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    data: React.PropTypes.object,
  };

  render() {
    const { attributes } = this.props.data;
    attributes.current_temperature = 17; // temporary

    const difference = attributes.temperature - attributes.current_temperature;
    return (
      <div className={styles.thermostatControl}>
        <button className={styles.close} onClick={browserHistory.goBack}>
          <svg width="100%" height="100%" viewBox="15 15 50 50">
            <path fill="#fff" d="M25.55 19.965a.926.926 0 0 0-.77.254l-4.558 4.56c-.4.4-.293 1.14.208 1.64L34.007 40 20.43 53.575c-.5.5-.61 1.235-.21 1.638l4.56 4.56c.402.404 1.143.347 1.64-.152L40 46.042l13.58 13.58c.498.497 1.237.555 1.64.15l4.56-4.56c.4-.4.293-1.137-.207-1.637L45.996 40l13.577-13.58c.5-.5.606-1.24.207-1.64l-4.562-4.56c-.402-.4-1.14-.294-1.64.205l-13.58 13.58-13.577-13.58c-.248-.25-.573-.428-.87-.46z" />
          </svg>
        </button>
        <h1 className={styles.header}>
          {attributes.friendly_name}
        </h1>
        <div className={styles.thermostatControlWrapper}>
          <div className={styles.currentTemperature}>
            <span className={styles.currentTitle}>
              <FormattedMessage {...messages.current} />
            </span><br />
            <span>{attributes.current_temperature} <span className={styles.degree}>&deg; C</span></span>
          </div>
          <div className={styles.control}>
            <span className={styles.difference}>
              {difference > 0 ? '+' : null}{difference}
            </span>
            <Dial min={attributes.min_temp} max={attributes.max_temp} current={attributes.current_temperature} desired={attributes.temperature} />
          </div>
          <div className={styles.desiredTemperature}>
            <span className={styles.desiredTitle}>
              <FormattedMessage {...messages.desired} />
            </span><br />
            <span>{attributes.temperature} <span className={styles.degree}>&deg; C</span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default ThermostatControl;
