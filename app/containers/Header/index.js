/*
 *
 * Header
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import Notifications from 'components/Notifications';
import CurrentTime from 'components/CurrentTime';
import CurrentDate from 'components/CurrentDate';

import styles from './styles.css';

export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.timeWrapper}>
          <span className={styles.time}>
            <CurrentTime />
          </span>
          <span className={styles.date}>
            <CurrentDate />
          </span>
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
