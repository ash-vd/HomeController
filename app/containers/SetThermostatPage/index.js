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
import ThermostatControl from 'components/ThermostatControl';

import selectSetThermostatPage from './selectors';

import messages from './messages';

export class SetThermostatPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    state: React.PropTypes.object,
  }

  render() {
    const {
      params: { entityID },
      state,
    } = this.props;

    if (!Object.keys(state).length) return null;

    const splitted = entityID.split('.');
    const entity_group = splitted[0]; // eslint-disable-line camelcase
    const entity_name = splitted[1]; // eslint-disable-line camelcase

    const thermostatData = state[entity_group][entity_name];

    return (
      <Wrapper>
        <Helmet
          title="Thermostat"
          meta={[
            { name: 'description', content: 'Description of SetThermostatPage' },
          ]}
        />
        <ThermostatControl data={thermostatData} />
      </Wrapper>
    );
  }
}

const mapStateToProps = selectSetThermostatPage;

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SetThermostatPage);
