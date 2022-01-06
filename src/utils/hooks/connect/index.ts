import { ENVIRONMENTS } from '@/utils/constants/environments';
import { useEffect } from 'react';
import { useMount } from '@umijs/hooks';
import { useWallet } from './wallet';
import { atom, useRecoilState } from 'recoil';
import { formatWalletAddress } from '@/utils/hooks/normalizers';

export const useProvider = () => {
  const { disconnectWallet, walletState, setWalletState } = useWallet();

  const walletType = walletState?.walletType;

  useMount(async () => {
    if (walletState.cacheInfo) {
      if (!walletState?.cacheInfo?.walletType) {
        disconnectWallet();
      } else if (window?.ethereum) {
        const result = await window.ethereum.send('eth_requestAccounts');
        if (
          result &&
          result?.result[0] &&
          result.result[0].toLowerCase() ===
            walletState?.cacheInfo?.address.toLowerCase()
        ) {
          setWalletState({
            ...walletState,
            walletType: walletState.cacheInfo.walletType,
          });
        } else {
          disconnectWallet();
        }
      } else {
        disconnectWallet();
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
    if (window?.ethereum) {
      window?.ethereum.on('accountsChanged', (accounts: any) => {
        const account = accounts[0];
        if (account) {
          saveUserInfo(account);
        } else {
          disconnectWallet();
        }
      });
      window?.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
      window?.ethereum.on('disconnect', () => {
        disconnectWallet();
      });
    } else if (!window?.ethereum) {
      disconnectWallet();
    }
  }, [walletType]);
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
