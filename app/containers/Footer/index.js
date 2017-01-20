/*
 *
 * Footer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

export class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.footer}>

        {
          /*
        <span className={styles.link}>Home</span>
        <span className={styles.link}>Switches</span>
        <span className={styles.link}>Verwarming</span>
        */
       }

      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Footer);
