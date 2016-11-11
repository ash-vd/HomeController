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
    const { state } = this.props;

    const climate = state.get('climate');
    const sensor = state.get('sensor');

    return (
      <div>
        <Swiper>
          <TemperatureBig data={sensor.get('badkamer')} />
          <TemperatureBig data={climate.get('beneden')} />
          <TemperatureBig data={climate.get('boven')} />
          <TemperatureBig data={climate.get('slaapkamer')} />
        </Swiper>
      </div>
    );
  }
}

export default HomeTemperatures;
