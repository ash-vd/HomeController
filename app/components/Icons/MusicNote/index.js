/**
*
* MusicNote
*
*/

import React from 'react';

MusicNote.propTypes = {
  className: React.PropTypes.string,
};

function MusicNote({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M12,3V12.26C11.5,12.09 11,12 10.5,12C8,12 6,14 6,16.5C6,19 8,21 10.5,21C13,21 15,19 15,16.5V6H19V3H12Z" />
    </svg>
  );
}

export default MusicNote;
