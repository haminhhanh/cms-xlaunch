import { ENVIRONMENTS } from './../constants/environments';
import { useConfigInfo } from '@/utils/hooks/config';
import { ethers, utils } from 'ethers';
import { getProvider, preContractRequest } from './ultilities';

const useDeposit = () => {
  const config = useConfigInfo();

  const createNewHardTokenContract = (
    signerOrProvider: ethers.Signer | ethers.providers.Provider,
  ) => {
    if (!config.ADDRESS || !config?.HARD_TOKEN) {
      throw new Error('Does not have contracts address');
    }
    return new ethers.Contract(
      config.ADDRESS?.hardCap.address,
      config.HARD_TOKEN,
      signerOrProvider,
    );
  };

  const createNewSoftTokenContract = (
    signerOrProvider: ethers.Signer | ethers.providers.Provider,
  ) => {
    if (!config.ADDRESS || !config?.SOFT_TOKEN) {
      throw new Error('Does not have contracts address');
    }
    return new ethers.Contract(
      config.ADDRESS?.softCap.address,
      config.SOFT_TOKEN,
      signerOrProvider,
    );
  };

  const getHardTokenBalance = async (address: string) => {
    const provider = await getProvider();
    const contract = createNewHardTokenContract(provider);
    const result = await contract.balanceOf(address);
    return result;
  };

  const depositHardTokenToGame = async (amount: number) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewHardTokenContract(signer);

    const price = utils.parseEther(amount.toString()).toString();
    return await contract.transfer(
      config.ADDRESS?.gameWalletBridge.address,
      price,
    );
  };

  const getSoftTokenBalance = async (address: string) => {
    const provider = await getProvider();
    const contract = createNewSoftTokenContract(provider);
    const result = await contract.balanceOf(address);
    return result;
  };

  const depositSoftTokenToGame = async (amount: number) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewSoftTokenContract(signer);

    const price = utils.parseEther(amount.toString()).toString();
    return await contract.transfer(
      config.ADDRESS?.gameWalletBridge.address,
      price,
    );
  };

  const depositBnb = async (amount: number) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const price = utils.parseEther(amount.toString()).toHexString();
    return signer.sendTransaction({
      to: config.ADDRESS?.gameWalletBridge.address,
      value: price,
      chainId: ENVIRONMENTS.CHAIN_ID,
    });
  };

  return {
    depositBnb,
    getHardTokenBalance,
    getSoftTokenBalance,
    depositHardTokenToGame: (amount: number) =>
      preContractRequest(depositHardTokenToGame, amount, true),
    depositSoftTokenToGame: (amount: number) =>
      preContractRequest(depositSoftTokenToGame, amount, true),
  };
};

export default useDeposit;
