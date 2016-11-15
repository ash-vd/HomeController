/**
*
* ThermostatControl
*
*/

import React from 'react';
import { browserHistory } from 'react-router';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

class ThermostatControl extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    data: React.PropTypes.object,
  };

  render() {
    const { attributes } = this.props.data;

    const difference = attributes.temperature - attributes.current_temperature;
    return (
      <div className={styles.thermostatControl}>
        <button className={styles.close} onClick={browserHistory.goBack}>
          <svg width="100%" height="100%" viewBox="15 15 50 50">
            <path fill="#fff" d="M25.55 19.965a.926.926 0 0 0-.77.254l-4.558 4.56c-.4.4-.293 1.14.208 1.64L34.007 40 20.43 53.575c-.5.5-.61 1.235-.21 1.638l4.56 4.56c.402.404 1.143.347 1.64-.152L40 46.042l13.58 13.58c.498.497 1.237.555 1.64.15l4.56-4.56c.4-.4.293-1.137-.207-1.637L45.996 40l13.577-13.58c.5-.5.606-1.24.207-1.64l-4.562-4.56c-.402-.4-1.14-.294-1.64.205l-13.58 13.58-13.577-13.58c-.248-.25-.573-.428-.87-.46z" />
          </svg>
        </button>
        <div className={styles.thermostatControlWrapper}>
          <div className={styles.currentTemperature}>
            {attributes.current_temperature} &deg; C
          </div>
          <div className={styles.control}>
            <span className={styles.difference}>
              {difference > 0 ? '+' : null}{difference}
            </span>
            <svg className={styles.svgWrapper} width="100%" height="100%" viewBox="0 0 80 80">
              <path id="dial-line-bg" fill="none" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
              <path className={styles.svgBorderBackground} fill="none" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
              <path className={styles.svgBorder} fill="none" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
            </svg>
          </div>
          <div className={styles.desiredTemperature}>
            {attributes.temperature} &deg; C
          </div>
        </div>
      </div>
    );
  }
}

export default ThermostatControl;
