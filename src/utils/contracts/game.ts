import { useConfigInfo } from '@/utils/hooks/config';
import { ethers } from 'ethers';
import { getProvider, preContractRequest } from './ultilities';

interface GetApprovedInterface {
  tokenId: number;
}

interface ApproveInterface {
  tokenId: number;
}

const useGameContracts = () => {
  const config = useConfigInfo();

  const createNewContract = (
    signerOrProvider: ethers.Signer | ethers.providers.Provider,
  ) => {
    if (!config.ADDRESS || !config?.GAME_NFT) {
      throw new Error('Does not have contracts address');
    }
    return new ethers.Contract(
      config.ADDRESS.nft.address,
      config.GAME_NFT,
      signerOrProvider,
    );
  };

  const getApproved = async ({ tokenId }: GetApprovedInterface) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const result = await contract.getApproved(tokenId);
    return result;
  };

  const approve = async ({ tokenId }: ApproveInterface) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const result = await contract.approve(
      config.ADDRESS?.tokenTransferProxy.address,
      tokenId,
    );
    return result.wait();
  };

  return {
    getApproved: ({ tokenId }: GetApprovedInterface) =>
      preContractRequest(getApproved, { tokenId }, true),
    approve: ({ tokenId }: ApproveInterface) =>
      preContractRequest(approve, { tokenId }, true),
  };
};

export default useGameContracts;
