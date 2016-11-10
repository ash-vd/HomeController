/**
*
* HomeContent
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import HomeTemperatures from 'components/HomeTemperatures';

import Wrapper from './Wrapper';
import Left from './Left';
import Right from './Right';

import messages from './messages';

class HomeContent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    climate: React.PropTypes.object,
  };

  render() {
    const { climate } = this.props;

    if (!climate) {
      return null;
    }
    
    return (
      <Wrapper>
        <Left>
          <FormattedMessage {...messages.temperature} />
          <HomeTemperatures climate={climate} />
        </Left>
        <Right>
          Right
        </Right>
      </Wrapper>
    );
  }
}

export default HomeContent;
