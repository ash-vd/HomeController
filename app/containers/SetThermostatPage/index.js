/*
 *
 * SetThermostatPage
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import Wrapper from 'components/Wrapper';

import selectSetThermostatPage from './selectors';

import messages from './messages';

export class SetThermostatPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Helmet
          title="Thermostat"
          meta={[
            { name: 'description', content: 'Description of SetThermostatPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </Wrapper>
    );
  }
}

const mapStateToProps = selectSetThermostatPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SetThermostatPage);
