/**
*
* Swiper
*
*/

import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import ProgressBar from './ProgressBar';

class Swiper extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    index: 0,
  }

  _onChangeIndex = (index, lastIndex) => {
    this.setState({
      index,
    });
  }

  render() {
    return (
      <div>
        <SwipeableViews onChangeIndex={this._onChangeIndex}>
          {this.props.children}
        </SwipeableViews>
        <ProgressBar currentIndex={this.state.index} total={this.props.children.length}/>
      </div>
    );
  }
}

export default Swiper;
