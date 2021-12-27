import { useConfigInfo } from '@/utils/hooks/config';
import { ethers, utils } from 'ethers';
import { getProvider, preContractRequest } from './ultilities';

interface MakeSellInterface {
  tokenId: number;
  price: number;
  currency: string;
}

interface MakeBuyInterface {
  tokenId: number;
  price: ethers.BigNumber;
}

export interface MakeOfferInterface {
  tokenId: number;
  price: number;
  currency: string;
}

interface AcceptOfferInterface {
  tokenId: number;
  offerAddress: string;
}

interface CancelSellInterface {
  tokenId: number;
}

interface SaleInfoInterface {
  tokenId: number;
}

const useMarketContracts = () => {
  const config = useConfigInfo();

  const createNewContract = (
    signerOrProvider: ethers.Signer | ethers.providers.Provider,
  ) => {
    if (!config.ADDRESS || !config?.MARKETPLACE) {
      throw new Error('Does not have contracts address');
    }
    return new ethers.Contract(
      config.ADDRESS.marketplace.address,
      config.MARKETPLACE,
      signerOrProvider,
    );
  };

  const getSaleInfo = async ({ tokenId }: SaleInfoInterface) => {
    const provider = await getProvider();
    const contract = createNewContract(provider);
    const result = await contract.sales(config.ADDRESS?.nft.address, tokenId);
    const [seller, price, currency, cancel, refund] = result;
    return {
      seller,
      price,
      currency,
      cancel,
      refund,
    };
  };

  const makeSell = async ({ tokenId, price, currency }: MakeSellInterface) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const result = await contract.makeSell(
      config.ADDRESS?.nft.address,
      tokenId,
      currency,
      utils.parseEther(price.toString()).toString(),
    );

    return result;
  };

  const makeBuy = async ({ tokenId, price }: MakeBuyInterface) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const result = await contract.makeBuy(
      config.ADDRESS?.nft.address,
      tokenId,
      { value: price.toString() },
    );
    return result;
  };

  const makeOffer = async ({
    tokenId,
    price,
    currency,
  }: MakeOfferInterface) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const result = await contract.makeOffer(
      config.ADDRESS?.nft.address,
      tokenId,
      currency,
      utils.parseEther(price.toString()).toString(),
    );
    return result;
  };

  const acceptOffer = async ({
    tokenId,
    offerAddress,
  }: AcceptOfferInterface) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const result = await contract.acceptOffer(
      config.ADDRESS?.nft.address,
      tokenId,
      offerAddress,
    );
    return result;
  };

  const cancelSell = async ({ tokenId }: CancelSellInterface) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const result = await contract.cancelSell(
      config.ADDRESS?.nft.address,
      tokenId,
    );
    return result;
  };

  return {
    makeSell: ({ tokenId, price, currency }: MakeSellInterface) =>
      preContractRequest(makeSell, { tokenId, price, currency }, true),
    cancelSell: ({ tokenId }: CancelSellInterface) =>
      preContractRequest(cancelSell, { tokenId }, true),
    makeBuy: ({ tokenId, price }: MakeBuyInterface) =>
      preContractRequest(makeBuy, { tokenId, price }, true),
    makeOffer: ({ tokenId, price, currency }: MakeOfferInterface) =>
      preContractRequest(makeOffer, { tokenId, price, currency }, true),
    acceptOffer: ({ tokenId, offerAddress }: AcceptOfferInterface) =>
      preContractRequest(acceptOffer, { tokenId, offerAddress }, true),
    getSaleInfo,
  };
};

export default useMarketContracts;
