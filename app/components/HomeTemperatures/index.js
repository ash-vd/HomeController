/**
*
* HomeTemperatures
*
*/

import React from 'react';

import Swiper from 'components/Swiper';
import TemperatureBig from 'components/TemperatureBig';

class HomeTemperatures extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    state: React.PropTypes.object,
  };

  render() {
    const { climate, sensor } = this.props.state;

    return (
      <div>
        <Swiper>
          <TemperatureBig data={sensor.badkamer} />
          <TemperatureBig data={climate.beneden} />
          <TemperatureBig data={climate.boven} />
          <TemperatureBig data={climate.slaapkamer} />
        </Swiper>
      </div>
    );
  }
}

export default HomeTemperatures;
