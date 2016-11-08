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
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Wrapper>
        <Left>
          <FormattedMessage {...messages.temperature} />
          <HomeTemperatures climate={this.props.climate} />
        </Left>
        <Right>
          Right
        </Right>
      </Wrapper>
    );
  }
}

export default HomeContent;
