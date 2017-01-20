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


const Wrapper = ({ className, children, data }) => {
  if (data.entity_group === 'sensor') {
    return (
      <div className={className}>
        { children }
      </div>
    );
  }

  return (
    <Link to={`/thermostat/${data.entity_id}/`} className={className}>
      { children }
    </Link>
  );
};

Wrapper.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.array,
  data: React.PropTypes.object,
};

class TemperatureBig extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    data: React.PropTypes.object,
  };

  _round(value) {
    const rounded = Math.round(value * 2) / 2;
    if (isNaN(rounded)) return 0;

    return rounded;
  }

  render() {
    const { data } = this.props;

    // in a sensor we should pick the Temperature-attribute
    let currentTemperature = data.attributes.current_temperature;
    if (data.entity_group === 'sensor') {
      if (data.attributes.Temperature) {
        currentTemperature = data.attributes.Temperature;
      } else if (data.state) {
        currentTemperature = data.state;
      }
    }

    return (
      <Wrapper className={styles.temperatureBig} data={data}>
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

        <div className={styles.timer}>
          <div className={styles.timerTextTime}>
            23.00
          </div>
          <div className={styles.timerTextDesired}>
            <span className={styles.timerTextNumber}>15</span> <span className={styles.timerTextDegrees}>&deg; C</span>
          </div>
        </div>

        <div className={styles.roomName}>
          {data.attributes.friendly_name}
        </div>

        <div className={styles.currentTemperature}>
          <span className={styles.number}>
            {this._round(currentTemperature)}
          </span>
          <span className={styles.degree}>
            &deg; C
          </span>
        </div>
      </Wrapper>
    );
  }
}

export default TemperatureBig;
