/**
*
* Scenes
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Scene from 'components/Scene';

import messages from './messages';
import styles from './styles.css';

const enabledScenes = [
  'weg',
  'slapen'
];

class Scenes extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { state: { scene } } = this.props;
    return (
      <div className={styles.scenes}>
        <div className={styles.wrapper}>
          {
            Object.keys(scene).map((key) => {
              if (enabledScenes.indexOf(key) === -1) return;
              const currentScene = scene[key];
              return (
                <div className={styles.scene}>
                  <span className={styles.title}>
                    {currentScene.attributes.friendly_name}
                  </span>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Scenes;
