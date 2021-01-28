import React from 'react';

import './nice-header.scss';

import { ReactComponent as ReactIcon } from './ricon.svg';

const NiceHeader = (props) => (
  <div className="nice-header">
    {props.children}
    <ReactIcon className="icon" />
  </div>
);

export default NiceHeader;