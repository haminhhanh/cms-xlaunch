import { ENVIRONMENTS } from '@/utils/constants/environments';
import { useEffect } from 'react';
import { useMount } from '@umijs/hooks';
import { useWallet } from './wallet';
import { atom, useRecoilState } from 'recoil';
import { formatWalletAddress } from '@/utils/hooks/normalizers';
import { get } from 'lodash';

export const useProvider = () => {
  const { disconnectWallet, walletState, setWalletState, provider } =
    useWallet();

  const walletType = walletState?.walletType;

  useMount(async () => {
    if (walletState.cacheInfo) {
      if (!walletState?.cacheInfo?.walletType) {
        disconnectWallet();
      } else if (provider) {
        const result = await provider.request({
          method: 'eth_accounts',
        });

        const currentAddress = get(result, 'result[0]', '');

        if (
          currentAddress.toLowerCase() ===
          walletState?.cacheInfo?.address.toLowerCase()
        ) {
          setWalletState({
            ...walletState,
            walletType: walletState.cacheInfo.walletType,
          });
        }
      }
    }
  });

  const saveUserInfo = (account: string) => {
    const formattedAddress = formatWalletAddress(account);
    localStorage.setItem(
      ENVIRONMENTS.LOCAL_STORAGE_KEY,
      JSON.stringify({
        address: account,
        formattedAddress,
        walletType,
      }),
    );

    setWalletState({
      ...walletState,
      walletInfo: {
        ...walletState.walletInfo,
        address: account,
        formattedAddress,
      },
    });
  };

  useEffect(() => {
    if (provider) {
      provider.on('accountsChanged', (accounts: any) => {
        const account = accounts[0];

        if (account) {
          saveUserInfo(account);
        } else {
          disconnectWallet();
        }
      });
      provider.on('chainChanged', () => {
        window.location.reload();
      });
      provider.on('disconnect', () => {
        disconnectWallet();
      });
    } else {
      disconnectWallet();
    }
  }, [provider]);
};

/**
 * Global state handle visible modal connect wallet
 */
const modalConnectWalletAtom = atom({
  key: 'CONNECT_WALLET',
  default: {
    isVisible: false,
  },
});

export const useModalConnectWallet = () => {
  const [modalConnectWallet, setModalConnectWallet] = useRecoilState(
    modalConnectWalletAtom,
  );

  const onVisibleConnectWallet = () => {
    setModalConnectWallet({
      ...modalConnectWallet,
      isVisible: true,
    });
  };

  const onCloseConnectWallet = () => {
    setModalConnectWallet({
      ...modalConnectWallet,
      isVisible: false,
    });
  };

  return {
    isVisibleConnectWallet: modalConnectWallet.isVisible,
    onVisibleConnectWallet,
    onCloseConnectWallet,
  };
};
