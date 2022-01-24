import { checkBinanceChainWalletInstalled } from '@/utils/contracts/ultilities';

export const connectBinanceChainWalletService = async () => {
  const isCoin98Installed = checkBinanceChainWalletInstalled();
  if (!isCoin98Installed) {
    return Promise.reject({
      message: 'Binance Chain Wallet extension is not installed!',
    });
  }
  const accounts = await window?.BinanceChain.request({
    method: 'eth_accounts',
  });
  let chainIdReq = await window?.BinanceChain.request({
    method: 'eth_chainId',
  });
  console.log('chainIdReq', chainIdReq);

  return accounts[0];
};
