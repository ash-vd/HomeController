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
import Draggable from 'Draggable';
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

    this._initDraggable();
  }

  _initDraggable = () => {
    Draggable.create(this.knob, {
      bounds: {
        maxRotation: 360,
        minRotation: 0,
      },
      type: 'rotation',
      snap: (endValue) => {
        const end = Math.round(endValue / 22.5) * 22.5;
        return end;
      },
      // onClick:function(e){
      //   var y = (e.layerY < 0 ? 360 - e.layerY : e.layerY);
      //   var x = (e.layerX < 0 ? 360 - e.layerX : e.layerX);
      //   var rad = Math.atan2(e.layerY, e.layerX);
      //   TweenMax.to(container, .75, {
      //     rotation: RadiansToDegrees(rad),
      //     onUpdate: this._dragUpdate
      //   });
      // },
      throwProps: true,
      onDrag: this._dragUpdate,
      onThrowUpdate: this._dragUpdate,
    });

    TweenMax.set([this.knob], {
      position: 'absolute',
    });
  }

  _dragUpdate = (v) => {
    console.log(v);
    const val = (this.knob._gsTransform.rotation / 360);
    let percent = val * 100;
    percent = (percent > 100) ? 100 : percent;
    percent = (percent < 0) ? 0 : percent;
    TweenMax.set(this.desiredLevel, {
      drawSVG: `${percent}%`
    });
  }

  render() {
    return (
      <svg className={styles.dial} width="100%" height="100%" viewBox="0 0 80 80">
        <path ref={(knob) => { this.knob = knob; }} className={styles.knob} fill="none" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
        <path ref={(desiredLevel) => { this.desiredLevel = desiredLevel; }} className={styles.svgBorderDesired} fill="none" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
        <path ref={(currentLevel) => { this.currentLevel = currentLevel; }} className={styles.svgBorderCurrent} fill="none" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
        <path className={styles.overlay} fill="none" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
      </svg>
    );
  }
}

export default Dial;
