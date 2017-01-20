/**
*
* Scene
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function Scene() {
  return (
    <div className={styles.scene}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default Scene;
