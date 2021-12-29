import React from 'react';
import { Link } from 'umi';

const headers = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'Trade',
    path: '/trade',
  },
  {
    name: 'IDO Pool',
    path: '/ido-pool',
  },
  {
    name: 'Launchpad',
    path: '/launchpad',
  },
];

import styles from './index.less';

function Header() {
  return (
    <div className={styles.header}>
      {headers.map((item) => {
        return <Link to={item.path}>{item.name}</Link>;
      })}
    </div>
  );
}

export default Header;
