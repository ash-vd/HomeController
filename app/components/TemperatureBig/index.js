/**
*
* TemperatureBig
*
*/

import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import { Thermometer } from 'components/Icons'; 

import styles from './styles.css';
import messages from './messages.js';

class TemperatureBig extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    data: React.PropTypes.object,
  };

  render() {
    const { data } = this.props;

    // in a sensor we should pick the Temperature-attribute
    let currentTemperature = data.attributes.current_temperature;
    if (data.entity_group === 'sensor') {
      currentTemperature = data.attributes.Temperature;
    }

    return (
      <Link
        to={`/thermostat/${data.entity_id}/`}
        className={styles.temperatureBig}
      >
        <Thermometer className={styles.thermometer} />
        {
          /* We don't have a desired temperature in a sensor */
          data.attributes.temperature &&
            <div className={styles.desired}>
              <span className={styles.desiredText}>
                <FormattedMessage {...messages.desired} />
              </span><br />

              <span className={styles.desiredNumber}>
                {data.attributes.temperature}
              </span>
              <span className={styles.desiredDegree}>
                &deg; C
              </span>
            </div>
        }

        <div className={styles.roomName}>
          {data.attributes.friendly_name}
        </div>
        <span className={styles.number}>
          {Math.round(currentTemperature)}
        </span>
        <span className={styles.degree}>
          &deg; C
        </span>
      </Link>
    );
  }
}

export default TemperatureBig;
