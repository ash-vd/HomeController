/**
*
* Wrapper
*
*/

import React from 'react';

import styles from './styles.css';

class Wrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    );
  }
}

export default Wrapper;
