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

const RadiansToDegrees = (valRad) => {
  let degrees = (360/(2*Math.PI)*valRad);
  degrees  = (degrees + 360) % 360 + 90;
  degrees  = (degrees > 360 ? degrees - 360 : degrees);
  return Math.round(degrees / 22.5) * 22.5;
};

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { TweenMax } from 'gsap';
import Draggable from 'Draggable';
import drawSVG from 'drawSVG'; // eslint-disable-line import/no-unresolved
import throwPropsPlugin from 'throwPropsPlugin'; // eslint-disable-line import/no-unresolved

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

    this._initDraggable(desiredLevel);
  }

  _initDraggable = (currentRotation) => {
    Draggable.create(this.knob, {
      bounds: {
        maxRotation: 360,
        minRotation: 0,
      },
      type: 'rotation',
      snap: (endValue) => Math.round(endValue / 18) * 18, // snap to halve degrees
      onClick: (e) => {
        const y = (e.layerY < 0 ? 360 - e.layerY : e.layerY);
        const x = (e.layerX < 0 ? 360 - e.layerX : e.layerX);
        const rad = Math.atan2(e.layerY, e.layerX);
        TweenMax.to(this.knob, .75, {
          rotation: RadiansToDegrees(rad),
          onUpdate: this._dragUpdate
        });
      },
      throwProps: true,
      onDrag: this._dragUpdate,
      onThrowUpdate: this._dragUpdate,
    });

    TweenMax.set(this.knob, {
      rotation: currentRotation * 3.6,
    });
  }

  _dragUpdate = () => {
    const { min, max, displayUpdate } = this.props;
    const val = (this.knob._gsTransform.rotation / 360);
    let percent = val * 100;
    percent = (percent > 100) ? 100 : percent;
    percent = (percent < 0) ? 0 : percent;
    TweenMax.set(this.desiredLevel, {
      drawSVG: `${percent}%`,
    });

    /*
      Minimum value + (maximum - minimum) * percentage
     */
    
    if (displayUpdate && typeof displayUpdate === 'function') {
      // @TODO fix for halve degrees
      const newValue = Math.round(min + (max - min) * (percent / 100) / 18 * 18);
      console.log(newValue);
      displayUpdate(newValue);
    }
  }

  render() {
    return (
      <div className={styles.dial}>
        <div ref={(knob) => { this.knob = knob; }} className={styles.knob} />
        <div className={styles.test} />
        <svg width="100%" height="100%" viewBox="0 0 80 80">
          <path className={styles.svgGuide} fill="none" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
          <path ref={(desiredLevel) => { this.desiredLevel = desiredLevel; }} className={styles.svgBorderDesired} fill="none" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
          <path ref={(currentLevel) => { this.currentLevel = currentLevel; }} className={styles.svgBorderCurrent} fill="none" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
          <path className={styles.overlay} fill="none" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
        </svg>
      </div>
    );
  }
}

export default Dial;
