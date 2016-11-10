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
    climate: React.PropTypes.object,
  };

  render() {
    const { climate } = this.props;
    return (
      <div>
        <Swiper>
          <TemperatureBig data={climate.get('beneden')} />
          <TemperatureBig data={climate.get('boven')} />
          <TemperatureBig data={climate.get('slaapkamer')} />
        </Swiper>
      </div>
    );
  }
}

export default HomeTemperatures;
