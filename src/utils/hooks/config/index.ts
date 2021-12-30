import { WEB_PATHS } from '@/utils/apis';
import { useRequest } from '@umijs/hooks';
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import dayjs from 'dayjs';
import { web } from '@/utils/apis';

import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);
interface HeroLevelByStarInterface {
  [key: string]: number;
}

export interface HeroBatches {
  id: number;
  name: string;
  total: number;
  isWhitelist: boolean;
  quota: number;
  symbol: string;
}
interface AppConfig {
  showRegister: boolean;
  showExchange: boolean;
  webHeader:
    | undefined
    | {
        htmlContent: any;
        startTime: number;
        endTime: number;
        visible?: boolean;
      };
  adjustTimeInSeconds: number;

  showSpecialSummon: boolean;
  showMarket: boolean;
  showMarketFalseMessage: string;
  firstSaleDate: string;
  underMaintain: boolean;
  showNotification: true;
  summonRefreshTime: number;
  showFullFilter: boolean;
  showSorting: boolean;
  showCoin98: boolean;
  showWalletConnect: boolean;
  dashboardRefreshTime: number;
  heroBatches: HeroBatches[];
  currentBatchID: number;
  version: string;
}
interface ConfigInterface {
  loading: boolean;
  APP_CONFIG: AppConfig;
}

const initialValue: ConfigInterface = {
  loading: true,
  APP_CONFIG: {
    webHeader: undefined,
    underMaintain: false,
    adjustTimeInSeconds: 0,
    summonRefreshTime: 15,
    firstSaleDate: '',
    showMarketFalseMessage: '',
    showExchange: true,
    showNotification: true,
    showSpecialSummon: true,
    showMarket: true,
    showRegister: true,
    showFullFilter: true,
    showSorting: true,
    showCoin98: true,
    showWalletConnect: true,
    heroBatches: [],
    dashboardRefreshTime: 20,
    currentBatchID: 0,
    version: 'Launch - v0.0.1',
  },
};

export const configAtoms = atom({
  key: 'CONFIG_ATOMS',
  default: initialValue,
});

export const useToast = () => {
  const config = useRecoilValue(configAtoms);
  const setConfigState = useSetRecoilState(configAtoms);
  const webHeader = config?.APP_CONFIG?.webHeader;
  if (!webHeader) {
    return {
      isVisible: false,
    };
  }

  const now = new Date().valueOf();
  const isVisible =
    webHeader.visible &&
    now >= webHeader?.startTime * 1000 &&
    now <= webHeader?.endTime * 1000;

  const hideToast = () => {
    setConfigState({
      ...config,
      APP_CONFIG: {
        ...config.APP_CONFIG,
        webHeader: config?.APP_CONFIG?.webHeader
          ? { ...config.APP_CONFIG.webHeader, visible: false }
          : undefined,
      },
    });
  };

  return {
    isVisible,
    hideToast,
    htmlContent: webHeader.htmlContent,
  };
};

export const useConfigInfo = () => {
  const config = useRecoilValue(configAtoms);
  return config;
};

export const useConfig = () => {
  const [config, setConfig] = useRecoilState(configAtoms);

  useRequest(
    async () => {
      const jsons = [
        WEB_PATHS.APP_CONFIG, // 0
      ];
      return Promise.all(jsons.map((path) => web.get(path)));
    },
    {
      onSuccess: (r) => {
        setConfig({
          APP_CONFIG: r[0],
          loading: false,
        });
      },
    },
  );
  return { loading: config.loading };
};
