/**
*
* CurrentTime
*
*/

import React from 'react';
import { FormattedTime } from 'react-intl';

class CurrentTime extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    interval: 0,
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: this.state.interval + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <FormattedTime value={new Date()} hour="numeric" minute="numeric" second="numeric" />
    );
  }
}

export default CurrentTime;
