import React, { useRef } from 'react';
import { ENVIRONMENTS } from '@/utils/constants/environments';
import { WALLET_TYPE } from '@/utils/constants/wallet';
import { useModalConnectWallet } from '@/utils/hooks/connect';
import { connectCoin98Service } from '@/utils/hooks/connect/coin98';
import { connectMetaService } from '@/utils/hooks/connect/metamask';
import { useWallet } from '@/utils/hooks/connect/wallet';
import { formatWalletAddress } from '@/utils/hooks/normalizers';

import Modal from '../Modal';
import Text from '../Text';
import ConnectError from './ConnectError';

import styles from './index.less';
import useRequest from '@ahooksjs/use-request';

const ConnectWalletModal = ({ children }: { children: React.ReactNode }) => {
  const walletType = useRef('');
  const { walletState, setWalletState } = useWallet();

  const {
    isVisibleConnectWallet,
    onVisibleConnectWallet,
    onCloseConnectWallet,
  } = useModalConnectWallet();
  if (walletState.walletType) {
    walletType.current = walletState.walletType;
  }

  const [isConnectError, setIsConnectError] = React.useState<boolean>(false);

  const onConnectSuccess = (address: string, walletType: string) => {
    const formattedAddress = formatWalletAddress(address);
    localStorage.setItem(
      ENVIRONMENTS.LOCAL_STORAGE_KEY,
      JSON.stringify({
        walletType,
        address,
        formattedAddress,
      }),
    );
    setWalletState({
      ...walletState,
      // @ts-ignore
      walletType,
      // @ts-ignore
      walletInfo: { address, formattedAddress },
    });
    onCloseConnectWallet();
  };

  const connectMetamaskRequest = useRequest(connectMetaService, {
    manual: true,
    onSuccess: (address: string) => {
      onConnectSuccess(address, WALLET_TYPE.META_MASK);
    },
    onError: (error: any) => {
      console.log('🚀 ~ error', error);
      onCloseConnectWallet();
      if (error.code !== -32002) {
        setIsConnectError(true);
      }
    },
  });

  const connectCoin98Request = useRequest(connectCoin98Service, {
    manual: true,
    onSuccess: (address: string) => {
      onConnectSuccess(address, WALLET_TYPE.COIN_98);
    },
    onError: (error: any) => {
      console.log('🚀 ~ error', error);
      onCloseConnectWallet();
      if (error.code !== -32002) {
        setIsConnectError(true);
      }
    },
  });

  const isTurnOffCoin98: boolean =
    !!connectMetamaskRequest.error?.message.match(
      'Coin98 extension is enabled, you cannot use both Metamask and Coin98 at once.',
    );

  const handleConnectMetamask = () => {
    setWalletState({
      ...walletState,
      // @ts-ignore
      walletType: WALLET_TYPE.META_MASK,
    });
    connectMetamaskRequest.run();
  };

  const handleConnectCoin98 = () => {
    setWalletState({
      ...walletState,
      // @ts-ignore
      walletType: WALLET_TYPE.COIN_98,
    });
    connectCoin98Request.run();
  };

  const handleConnectWallet = () => {
    setWalletState({
      ...walletState,
      // @ts-ignore
      walletType: WALLET_TYPE.WALLET_CONNECT,
    });
    onCloseConnectWallet();
    setIsConnectError(true);
    console.log('🚀 ~ handleConnectWallet');
  };

  const handleCloseError = () => {
    setIsConnectError(false);
  };

  return (
    <>
      <div onMouseDown={onVisibleConnectWallet}>{children}</div>

      <Modal
        visible={isVisibleConnectWallet}
        onClose={onCloseConnectWallet}
        title={'Connect to a wallet'}
        className={styles.walletModal}
      >
        <ul className={styles.walletList}>
          <li className={styles.walletItem} onClick={handleConnectMetamask}>
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

      <ConnectError
        visible={isConnectError}
        onClose={handleCloseError}
        isTurnOffCoin98={isTurnOffCoin98}
        connectType={walletType.current}
      />
    </>
  );
};

export default ConnectWalletModal;
