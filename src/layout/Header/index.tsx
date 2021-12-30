import React from 'react';
import { Link } from 'umi';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { useLocation } from 'umi';

const headers = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Trade',
    path: '/trade',
  },
  {
    name: 'IDO Pools',
    path: '/ido-pool',
  },
  {
    name: 'Launchpad',
    path: '/launchpad',
  },
];

import styles from './index.less';
import ConnectWalletModal from '@/components/ConnectWalletModal';

function Header() {
  const location = useLocation();
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.headerFlex}>
          <div className={styles.flex}>
            <div className={styles.logo}>
              <img src="/assets/images/AgilePad.svg" alt="logo" />
            </div>
            <div className={styles.link}>
              {headers.map((item) => {
                return (
                  <Link to={item.path}>
                    <Text
                      type={`${
                        location.pathname === item.path
                          ? 'body-p1-regular' && 'active'
                          : 'body-p1-regular'
                      }`}
                      className={styles.text}
                      color={`${
                        location.pathname === item.path
                          ? 'neutral-100'
                          : 'neutral-200'
                      }`}
                    >
                      {item.name}
                    </Text>
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <ConnectWalletModal>
              <Button>Connect Wallet</Button>
            </ConnectWalletModal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
