/**
*
* HomeTemperatures
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Swiper from 'components/Swiper';
import TemperatureBig from 'components/TemperatureBig';

import messages from './messages';

class HomeTemperatures extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Swiper>
          <TemperatureBig roomName="Beneden" />
          <TemperatureBig roomName="Boven" />
          <TemperatureBig roomName="Slaapkamer" />
        </Swiper>
      </div>
    );
  }
}

export default HomeTemperatures;
