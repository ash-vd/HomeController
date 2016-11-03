/**
*
* Notifications
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

class Notifications extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.notifications}>
        <FormattedMessage {...messages.message} values={{ number: 2 }} />
      </div>
    );
  }
}

export default Notifications;
