import { ENVIRONMENTS } from '@/utils/constants/environments';
import {
  getProvider,
  //   walletConnectProvider,
} from '@/utils/contracts/ultilities';
import { useRequest } from '@umijs/hooks';
import { utils } from 'ethers';
import numeral from 'numeral';
import { atom, useRecoilState, useRecoilValue } from 'recoil';

const infoCache = localStorage.getItem(ENVIRONMENTS.LOCAL_STORAGE_KEY);

let initialInfo;
if (infoCache) {
  initialInfo = JSON.parse(infoCache);
}

export const walletAtom = atom({
  key: 'WALLET_STATE',
  default: {
    walletInfo: {
      formattedAddress: initialInfo?.formattedAddress,
      address: initialInfo?.address,
      balance: undefined,
      originalBalance: undefined,
    },
    walletType: undefined,
    cacheInfo: initialInfo,
  },
});

export const useCurrentAccountAddress = () => {
  const walletState = useRecoilValue(walletAtom);
  return walletState?.walletInfo?.address;
};

export const useWalletInfo = () => {
  const walletState = useRecoilValue(walletAtom);
  return walletState?.walletInfo;
};

export const useIsConnected = () => {
  const walletState = useRecoilValue(walletAtom);
  return !!walletState?.walletInfo?.address;
};

export const useWalletState = () => {
  return useRecoilState(walletAtom);
};

export const useWallet = () => {
  const [walletState, setWalletState] = useRecoilState(walletAtom);

  const getWalletBalanceRequest = useRequest(
    async (address) => {
      const provider = await getProvider();
      const balance = provider.send('eth_getBalance', [address, 'latest']);
      return balance;
    },
    {
      manual: true,
      formatResult: (r) => {
        const BNB = numeral(utils.formatEther(r).toString()).format('0.0[00]');
        return {
          balance: BNB || 0,
          originalBalance: r,
        };
      },
      onSuccess: (balance) => {
        setWalletState({
          ...walletState,
          walletInfo: { ...walletState.walletInfo, ...balance },
        });
      },
    },
  );

  const disconnectWallet = () => {
    localStorage.clear();
    // if (walletConnectProvider?.connected) {
    //   walletConnectProvider?.disconnect();
    // }
    setWalletState({
      walletInfo: {
        formattedAddress: undefined,
        address: undefined,
        balance: undefined,
        originalBalance: undefined,
      },
      walletType: undefined,
      cacheInfo: undefined,
    });
  };

  return {
    disconnectWallet,
    walletState,
    setWalletState,
    getWalletBalanceRequest,
  };
};
