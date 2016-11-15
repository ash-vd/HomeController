/*
 *
 * Test
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTest from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class Test extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const mapStateToProps = selectTest();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
