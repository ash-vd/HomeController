/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import Wrapper from 'components/Wrapper';
import HomeContent from 'components/HomeContent';
import SubContent from 'components/SubContent';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Wrapper>
          <HomeContent />
          <SubContent>
            SUB
          </SubContent>
        </Wrapper>

      </div>
    );
  }
}
