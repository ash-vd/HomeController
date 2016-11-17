/**
*
* Dial
*
* Displays a dial for controlling values of an entity. For example thermostats or dimmers.
*
* Props:
*  - min: the minimal value. Used for calculations.
*  - max: the maximum value. Used for calculations.
*  - current: the current value.
*  - (desired): the desired value, for i.e. with a thermostat
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { TweenMax } from 'gsap';
import svg from 'libraries/gsap/drawSVG';

import messages from './messages';
import styles from './styles.css';

class Dial extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    min: React.PropTypes.number.isRequired,
    max: React.PropTypes.number.isRequired,
    current: React.PropTypes.number.isRequired,
    desired: React.PropTypes.number,
  };

  componentDidMount() {
    const { min, max, current, desired } = this.props;
    const currentLevel = (current - min) / (max - min) * 100;
    const desiredLevel = (desired - min) / (max - min) * 100;
    TweenMax.set(this.currentLevel, { drawSVG: `0% ${currentLevel}%` });
    TweenMax.set(this.desiredLevel, { drawSVG: `0% ${desiredLevel}%` });
  }

  render() {
    return (
      <svg className={styles.dial} width="100%" height="100%" viewBox="0 0 80 80">
        <path ref={(desiredLevel) => { this.desiredLevel = desiredLevel; }} className={styles.svgBorderDesired} fill="none" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
        <path ref={(currentLevel) => { this.currentLevel = currentLevel; }} className={styles.svgBorderCurrent} fill="none" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
        <path className={styles.overlay} fill="none" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
      </svg>
    );
  }
}

export default Dial;
