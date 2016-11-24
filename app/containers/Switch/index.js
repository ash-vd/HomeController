/*
 *
 * Switch
 *
 */

import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';

import selectSwitch from './selectors';
import styles from './styles.css';

export class Switch extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { state } = this.props;

    const classes = classNames(
      styles.switch,
      {
        [styles.switchOn]: state !== 'off',
      });

    return <div className={classes} />;
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Switch);
