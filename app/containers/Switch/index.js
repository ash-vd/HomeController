/*
 *
 * Switch
 *
 */

import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';

import { toggleSwitch } from 'containers/App/actions';
import styles from './styles.css';

export class Switch extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    entity: React.PropTypes.object,
  };

  _handleClick = () => {
    const { dispatch, entity: { entity_id } } = this.props;
    dispatch(toggleSwitch(entity_id));
  }

  render() {
    const { entity: { state } } = this.props;

    const classes = classNames(
      styles.switch,
      {
        [styles.switchOn]: state !== 'off',
      });

    return (
      <button
        className={classes}
        onClick={this._handleClick}
      />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Switch);
