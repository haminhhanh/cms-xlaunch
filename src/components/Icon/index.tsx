import React from 'react';
import IcoMoon from 'react-icomoon';
import IconI from './icon.interface';
const iconSet = require('./selection.json');

const Icon = (props: IconI) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;
