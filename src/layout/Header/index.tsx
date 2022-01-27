import React, { useEffect } from 'react';
import styles from './index.less';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div>
          <AccountCircleIcon sx={{ fontSize: 35, cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
}

export default Header;
