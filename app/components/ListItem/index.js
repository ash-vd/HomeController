/**
*
* ListItem
*
*/

import classNames from 'classnames';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import * as Icons from 'components/Icons';
import Switch from 'containers/Switch';

import messages from './messages';
import styles from './styles.css';

class ListItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    entity: React.PropTypes.object,
  };

  _getIcon = (entity) => {
    let icon = 'Adjust';

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
    const classes = classNames(
      styles.icon,
      {
        [styles.iconActive]: entity.state !== 'off',
      }
    );

    return <Component className={classes} />;
  }

  render() {
    const { entity } = this.props;
    return (
      <div className={styles.listItem}>
        {this._getIcon(entity)}
        { entity.attributes.friendly_name }
        <span className={styles.switch}>
          <Switch state={entity.state} />
        </span>
      </div>
    );
  }
}

export default ListItem;
