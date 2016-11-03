/**
*
* Swiper
*
*/

import React from 'react';
import SwipeableViews from 'react-swipeable-views';

class Swiper extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SwipeableViews>
        {this.props.children}
      </SwipeableViews>
    );
  }
}

export default Swiper;
