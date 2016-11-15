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
import { connect } from 'react-redux';

import Wrapper from 'components/Wrapper';
import HomeContent from 'components/HomeContent';
import SubContent from 'components/SubContent';

import { selectHomePage } from './selectors';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    state: React.PropTypes.object,
  };

  render() {
    const { state } = this.props;

    return (
      <div>
        <Wrapper>
          <HomeContent state={state} />
          <SubContent>
            
          </SubContent>
        </Wrapper>

      </div>
    );
  }
}

const mapStateToProps = selectHomePage;

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
