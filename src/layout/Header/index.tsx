import React, { useEffect } from 'react';
import styles from './index.less';
import Account from './Account';

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.headerAccount}>
          <Account />
        </div>
      </div>
    </div>
  );
}

export default Header;
