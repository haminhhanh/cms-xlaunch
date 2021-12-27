import { useConfigInfo } from '@/utils/hooks/config';
import { ethers } from 'ethers';
import { getProvider, preContractRequest } from './ultilities';

const useMysterySaleContracts = () => {
  const config = useConfigInfo();
  const createNewContract = (
    signerOrProvider: ethers.Signer | ethers.providers.Provider,
  ) => {
    if (!config.ADDRESS || !config?.MYSTERY_SALE) {
      throw new Error('Does not have contracts address');
    }
    return new ethers.Contract(
      config.ADDRESS.mysterySale.address,
      config.MYSTERY_SALE,
      signerOrProvider,
    );
  };

  const mint = async ({
    amount,
    price,
  }: {
    amount: number;
    price: ethers.BigNumber;
  }) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const result = await contract.mint(amount, {
      value: price.toString(),
    });
    return result;
  };

  return {
    mint: ({ amount, price }: { amount: number; price: any }) =>
      preContractRequest(mint, { amount, price }, true),
  };
};

export default useMysterySaleContracts;
