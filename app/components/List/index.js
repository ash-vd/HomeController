/**
*
* List
*
*/

import React from 'react';
// import { FormattedMessage } from 'react-intl';

import ListItem from 'components/ListItem';
// import messages from './messages';
import styles from './styles.css';

class List extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    data: React.PropTypes.object,
    state: React.PropTypes.object,
  }

  render() {
    const { data, state } = this.props;

    let devices = data;
    if (data.entity_group === 'group') {
      devices = [];
      data.attributes.entity_id.forEach((key) => {
        const splitted = key.split('.');
        const entity_group = splitted[0]; // eslint-disable-line camelcase
        const entity_name = splitted[1]; // eslint-disable-line camelcase
        devices[devices.length] = state[entity_group][entity_name];
      });
    }
    
    return (
      <div className={styles.list}>
        {
          Object.keys(devices).map((key) =>
            <ListItem key={key} entity={devices[key]} />
          )
        }
      </div>
    );
  }
}

export default List;
