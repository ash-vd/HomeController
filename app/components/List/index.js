/**
*
* List
*
*/

import React from 'react';
// import { FormattedMessage } from 'react-intl';

import * as Icons from 'components/Icons';
// import messages from './messages';
import styles from './styles.css';

class List extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    data: React.PropTypes.object,
  }

  _getIcon = (entity) => {
    let icon = 'Adjust';
    console.log(entity.entity_group);
    switch (entity.entity_group) {
      case 'light':
        icon = 'Lightbulb';
        break;

      case 'climate':
        icon = 'Thermometer';
        break;

      default:
        icon = 'Adjust';
        break;
    }

    const Component = Icons[icon];
    return <Component className={styles.icon} />;
  }

  render() {
    const { data } = this.props;
    return (
      <div className={styles.list}>
        {
          Object.keys(data).map((key) => {
            const entity = data[key];
            return (
              <div>
                {this._getIcon(entity)}
                { entity.attributes.friendly_name }
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default List;
