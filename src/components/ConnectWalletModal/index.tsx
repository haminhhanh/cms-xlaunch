import React, { useState } from 'react';

import Modal from '../Modal';
import Text from '../Text';

import styles from './index.less';

const ConnectWalletModal = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false);

  const onVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div onMouseDown={onVisible}>{children}</div>

      <Modal
        visible={visible}
        onClose={onVisible}
        title={'Connect to a wallet'}
        className={styles.walletModal}
      >
        <ul className={styles.walletList}>
          <li className={styles.walletItem}>
            <Text color="neutral-100" type="subheading-p1-regular">
              Meta Mask
            </Text>
            <img src="/assets/images/ic-metamask.svg" alt="" />
          </li>

          <li className={styles.walletItem}>
            <Text color="neutral-100" type="subheading-p1-regular">
              TrustWallet
            </Text>
            <img src="/assets/images/ic-trust.svg" alt="" />
          </li>

          <li className={styles.walletItem}>
            <Text color="neutral-100" type="subheading-p1-regular">
              SafePal Wallet
            </Text>
            <img src="/assets/images/ic-safepal.svg" alt="" />
          </li>

          <li className={styles.walletItem}>
            <Text color="neutral-100" type="subheading-p1-regular">
              Binance Chain Wallet
            </Text>
            <img src="/assets/images/ic-binance-chain.svg" alt="" />
          </li>

          <li className={styles.walletItem}>
            <Text color="neutral-100" type="subheading-p1-regular">
              WalletConnect
            </Text>
            <img src="/assets/images/ic-connect.svg" alt="" />
          </li>

          <li className={styles.walletItem}>
            <Text color="neutral-100" type="subheading-p1-regular">
              Token Pocket
            </Text>
            <img src="/assets/images/ic-pocket.svg" alt="" />
          </li>

          <li className={styles.walletItem}>
            <Text color="neutral-100" type="subheading-p1-regular">
              MathWallet
            </Text>
            <img src="/assets/images/ic-math.svg" alt="" />
          </li>
        </ul>

        <a href="#">Learn how to connect?</a>
      </Modal>
    </>
  );
};

export default ConnectWalletModal;
