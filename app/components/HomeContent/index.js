/**
*
* HomeContent
*
*/

import React from 'react';
import Helmet from 'react-helmet';

import HomeTemperatures from 'components/HomeTemperatures';
import List from 'components/List';

import Wrapper from './Wrapper';
import Left from './Left';
import Right from './Right';

class HomeContent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    state: React.PropTypes.object,
  };

  render() {
    const { state } = this.props;

    if (!Object.keys(state).length) return null;

    return (
      <Wrapper>
        <Helmet
          title="Home"
          meta={[
            { name: 'description', content: 'Homepage' },
          ]}
        />
        <Left>
          <HomeTemperatures state={state} />
        </Left>
        <Right>
          <List data={state.light} />
        </Right>
      </Wrapper>
    );
  }
}

export default HomeContent;
