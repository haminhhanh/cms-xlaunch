import { useEffect } from 'react';
import { formatWalletAddress } from '@/utils/normalizers';
import { useMount, useUpdateEffect } from '@umijs/hooks';
import { useWallet } from './wallet';
// import { walletConnectProvider } from '@/utils/contracts/ultilities';
import { WALLET_TYPE } from '@/utils/constants/wallet';
import { atom, useRecoilState } from 'recoil';

export const useProvider = () => {
  const {
    disconnectWallet,
    walletState,
    setWalletState,
    getWalletBalanceRequest,
  } = useWallet();

  const walletType = walletState?.walletType;
  const address = walletState?.walletInfo?.address;

  useMount(() => {
    if (walletState.cacheInfo) {
      setWalletState({
        ...walletState,
        walletType: walletState.cacheInfo.walletType,
      });
    }
  });

  const saveUserInfo = (account: string) => {
    const formattedAddress = formatWalletAddress(account);
    localStorage.setItem(
      '@CAR',
      JSON.stringify({
        address: account,
        formattedAddress,
        walletType,
      }),
    );
    setWalletState({
      ...walletState,
      userInfo: {
        playerId: undefined,
        ASG: undefined,
        SAE: undefined,
        name: undefined,
        nftAddress: undefined,
        myAddress: '',
        loading: true,
      },
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
        }
      });
      window?.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
      window?.ethereum.on('disconnect', () => {
        disconnectWallet();
      });
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
