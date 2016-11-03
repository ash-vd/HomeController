/*
 *
 * Header
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import Notifications from 'components/Notifications';

import styles from './styles.css';

export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.timeWrapper}>
          19:02
        </div>
        <div className={styles.notificationWrapper}>
          <Notifications />
        </div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Header);
