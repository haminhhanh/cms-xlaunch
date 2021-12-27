import { WEB_PATHS } from '@/utils/apis';
import { useRequest } from '@umijs/hooks';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { web } from '@/utils/apis';

interface ContractAddressInterace {
  hardCap: {
    name: string;
    symbol: string;
    owner: string;
    totalSupply: string;
    address: string;
  };
  softCap: {
    name: string;
    symbol: string;
    owner: string;
    address: string;
  };
  nft: {
    name: string;
    symbol: string;
    owner: string;
    address: string;
  };
  tokenTransferProxy: {
    address: string;
  };
  mysterySale: {
    bucket: string;
    sold: string;
    startTime: number;
    endTime: number;
    price: string;
    address: string;
  };
  marketplace: {
    address: string;
  };
  auction: {
    address: string;
  };
  gameForwarder: {
    address: string;
  };
  gameWalletBridge: {
    address: string;
  };
}

interface ConfigInterface {
  loading?: boolean;
  GAME_NFT?: any;
  MARKETPLACE?: any;
  MYSTERY_SALE?: any;
  ADDRESS?: ContractAddressInterace;
  CHAIN?: any;
  AUCTION?: any;
  HARD_TOKEN?: any;
  SOFT_TOKEN?: any;
}

const initialValue: ConfigInterface = {
  loading: true,
  GAME_NFT: undefined,
  MARKETPLACE: undefined,
  MYSTERY_SALE: undefined,
  ADDRESS: undefined,
  CHAIN: undefined,
  AUCTION: undefined,
};

export const configAtoms = atom({
  key: 'CONFIG_ATOMS',
  default: initialValue,
});

export const useConfigInfo = () => useRecoilValue(configAtoms);

export const useConfig = () => {
  const [config, setConfig] = useRecoilState(configAtoms);
  useRequest(
    async () => {
      const jsons = [
        WEB_PATHS.GAME_NFT, // 0
        WEB_PATHS.MARKETPLACE, // 1
        WEB_PATHS.MYSTERY_SALE, // 2
        WEB_PATHS.ADDRESS, // 3
        WEB_PATHS.CHAIN, // 4
        WEB_PATHS.AUCTION, // 5
        WEB_PATHS.HARD_TOKEN, // 6
        WEB_PATHS.SOFT_TOKEN, // 7
      ];
      return Promise.all(jsons.map((path) => web.get(path)));
    },
    {
      onSuccess: (r) => {
        setConfig({
          GAME_NFT: r[0],
          MARKETPLACE: r[1],
          MYSTERY_SALE: r[2],
          ADDRESS: r[3],
          CHAIN: r[4],
          AUCTION: r[5],
          SOFT_TOKEN: r[6],
          HARD_TOKEN: r[7],
          loading: false,
        });
      },
    },
  );

  return { loading: config.loading };
};
