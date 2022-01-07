import { checkBinanceChainWalletInstalled } from '@/utils/contracts/ultilities';

export const connectBinanceChainWalletService = async () => {
  const isCoin98Installed = checkBinanceChainWalletInstalled();
  if (!isCoin98Installed) {
    return Promise.reject({
      message: 'Binance Chain Wallet extension is not installed!',
    });
  }
  const accounts = await window?.BinanceChain.requestAccounts();
  // console.log('accounts',accounts[0])

  return accounts[0];
};
