import React, { useEffect } from 'react';
import { useLocation, Link, useIntl } from 'umi';

import Button from '../../components/Button';
import Text from '../../components/Text';
import ConnectWalletModal from '@/components/ConnectWalletModal';
import {
  useIsConnected,
  useWallet,
  useWalletInfo,
  useWalletState,
} from '@/utils/hooks/connect/wallet';
import { WALLET_TYPE } from '@/utils/constants/wallet';
import ModalYourWallet from './modalYourWallet';

import styles from './index.less';

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

function Header() {
  const location = useLocation();
  const intl = useIntl();
  const isConnected = useIsConnected();
  const [wallet] = useWalletState();
  const { getWalletBalanceRequest } = useWallet();
  useEffect(() => {
    if (wallet?.walletInfo?.address) {
      getWalletBalanceRequest.run(wallet?.walletInfo?.address);
    }
  }, [wallet?.walletInfo?.address]);

  const walletIcon = () => {
    if (typeof wallet?.walletType === 'string') {
      switch (wallet.walletType) {
        case WALLET_TYPE.META_MASK:
          return '/assets/images/logo-metamask.png';
        case WALLET_TYPE.COIN_98:
          return '/assets/images/logo-coin98.png';
        case WALLET_TYPE.WALLET_CONNECT:
          return '/assets/images/logo-wallet-connect.png';
        default:
          return;
      }
    }
  };
  const walletName = () => {
    if (typeof wallet.walletType === 'string') {
      switch (wallet.walletType) {
        case WALLET_TYPE.META_MASK:
          return intl.formatMessage({ id: 'navbar.wallet.Name.metamask' });
        case WALLET_TYPE.COIN_98:
          return intl.formatMessage({ id: 'navbar.wallet.name.coin98' });
        case WALLET_TYPE.WALLET_CONNECT:
          return intl.formatMessage({
            id: 'navbar.wallet.name.wallet.connect',
          });
        default:
          return;
      }
    }
  };

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.headerFlex}>
          <div className={styles.flex}>
            <div className={styles.logo}>
              <img src="/assets/images/AgilePad.svg" alt="logo" />
            </div>
            <div className={styles.link}>
              {headers.map((item, idx) => {
                return (
                  <Link to={item.path} key={`${idx}`}>
                    <Text
                      type={`${
                        (location.pathname.indexOf(item.path) !== -1 &&
                          item.path !== '/') ||
                        location.pathname === item.path
                          ? 'body-p1-regular' && 'active'
                          : 'body-p1-regular'
                      }`}
                      className={styles.text}
                      color={`${
                        (location.pathname.indexOf(item.path) !== -1 &&
                          item.path !== '/') ||
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
            {!isConnected && (
              <ConnectWalletModal>
                <Button>Connect Wallet</Button>
              </ConnectWalletModal>
            )}

            {isConnected && (
              <>
                <address className={styles.accountInfo}>
                  {/* <div className={styles.accountBalance}>
                    <div className="total bg-dark-2">{walletInfo?.balance}</div>
                    <div className="address">
                      <span className="lighter">
                        {walletInfo?.formattedAddress}
                      </span>
                    </div>
                  </div> */}

                  <div className="wallet-box">
                    {/* <div className="d-flex justify-between">
                      <aside>
                        <span className="neutral-100">
                          {intl.formatMessage({ id: 'navbar.wallet' })}
                        </span>
                      </aside>

                      <aside className={'wallet-type'}>
                        <span className="white p-14">
                          <img src={`${walletIcon()}`} alt="" />
                        </span>
                        {`${walletName()}`}
                      </aside>
                    </div>

                    <div className="d-flex justify-between">
                      <aside>
                        <span className="neutral-100">
                          {intl.formatMessage({
                            id: 'navbar.connected.network',
                          })}
                        </span>
                      </aside>
                    </div>
                    <div className="hr"></div> */}

                    <ModalYourWallet />
                  </div>
                </address>
                {/* <Link href={Links.account}>
                  <Button className="link-account">
                    {intl.formatMessage({ id: 'navbar.my.account' })}
                  </Button>
                </Link> */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
