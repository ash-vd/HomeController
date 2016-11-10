/**
*
* CurrentDate
*
*/

import React from 'react';
import { FormattedDate } from 'react-intl';

class CurrentDate extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
      <FormattedDate
        value={new Date()}
        year="numeric"
        month="long"
        day="2-digit"
      />
    );
  }
}

export default CurrentDate;
