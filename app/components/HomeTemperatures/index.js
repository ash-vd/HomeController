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
      <Swiper>
        <TemperatureBig data={climate.boven} />
        <TemperatureBig data={climate.beneden} />
        <TemperatureBig data={sensor.aeotec_zw100_multisensor_6_temperature_17_1} />
        <TemperatureBig data={climate.slaapkamer} />
      </Swiper>
    );
  }
}

export default HomeTemperatures;
