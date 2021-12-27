import { useConfigInfo } from '@/utils/hooks/config';
import { ethers, utils } from 'ethers';
import { getProvider, preContractRequest } from './ultilities';

interface MakeAuctionInterface {
  tokenId: number;
  price: number;
  currency: string;
}

export interface MakeOfferInterface {
  tokenId: number;
  price: number;
}

interface AcceptOfferInterface {
  tokenId: number;
}

interface CancelOfferInterface {
  tokenId: number;
}

interface CancelAuctionInterface {
  tokenId: number;
}

interface AuctionInfoInterface {
  tokenId: number;
}

interface AcceptAuctionOfferByOwnerInterface {
  tokenId: number;
}

const useAuctionContracts = () => {
  const config = useConfigInfo();

  const createNewContract = (
    signerOrProvider: ethers.Signer | ethers.providers.Provider,
  ) => {
    if (!config.ADDRESS || !config?.AUCTION) {
      throw new Error('Does not have contracts address');
    }
    return new ethers.Contract(
      config.ADDRESS.auction.address,
      config.AUCTION,
      signerOrProvider,
    );
  };

  const acceptOfferByOwner = async ({
    tokenId,
  }: AcceptAuctionOfferByOwnerInterface) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const result = await contract.acceptOfferByOwner(
      config.ADDRESS?.nft.address,
      tokenId,
    );

    return result;
  };

  const getHighestInfo = async ({ tokenId }: AuctionInfoInterface) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const currentHighest = await contract.getHighestOfBid(
      config.ADDRESS?.nft.address,
      tokenId,
    );
    const [currency, price, seller, buyer, index] = currentHighest;
    return {
      seller,
      price,
      currency,
      buyer,
      index,
    };
  };

  const makeOffer = async ({ tokenId, price }: MakeOfferInterface) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const submitPrice = utils.parseEther(price.toString());
    const result = await contract.makeOffer(
      config.ADDRESS?.nft.address,
      tokenId,
      submitPrice,
      { value: submitPrice },
    );

    return result;
  };

  const acceptOffer = async ({ tokenId }: AcceptOfferInterface) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const result = await contract.acceptOffer(
      config.ADDRESS?.nft.address,
      tokenId,
    );

    return result;
  };

  const makeAuction = async ({
    tokenId,
    price,
    currency,
  }: MakeAuctionInterface) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const result = await contract.makeAuction(
      config.ADDRESS?.nft.address,
      tokenId,
      currency,
      utils.parseEther(price.toString()).toString(),
    );

    return result;
  };

  const cancelOffer = async ({ tokenId }: CancelOfferInterface) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const result = await contract.cancelOffer(
      config.ADDRESS?.nft.address,
      tokenId,
    );

    return result;
  };

  const cancelAuction = async ({ tokenId }: CancelAuctionInterface) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const result = await contract.cancelAuction(
      config.ADDRESS?.nft.address,
      tokenId,
    );

    return result;
  };

  const getAuctionInfo = async ({ tokenId }: AuctionInfoInterface) => {
    const provider = await getProvider();
    const contract = createNewContract(provider);
    const result = await contract.sales(config.ADDRESS?.nft.address, tokenId);

    const [seller, price, currency, expiredAt, status, noBid] = result;
    return {
      seller,
      price,
      currency,
      expiredAt,
      status,
      noBid,
    };
  };

  return {
    makeAuction: ({ tokenId, price, currency }: MakeAuctionInterface) =>
      preContractRequest(makeAuction, { tokenId, price, currency }, true),
    acceptOfferByOwner: ({ tokenId }: AcceptAuctionOfferByOwnerInterface) =>
      preContractRequest(acceptOfferByOwner, { tokenId }, true),
    makeOffer: ({ tokenId, price }: MakeOfferInterface) =>
      preContractRequest(makeOffer, { tokenId, price }, true),
    acceptOffer: ({ tokenId }: AcceptOfferInterface) =>
      preContractRequest(acceptOffer, { tokenId }, true),
    cancelOffer: ({ tokenId }: CancelOfferInterface) =>
      preContractRequest(cancelOffer, { tokenId }, true),
    cancelAuction: ({ tokenId }: CancelAuctionInterface) =>
      preContractRequest(cancelAuction, { tokenId }, true),
    getAuctionInfo,
    getHighestInfo,
  };
};

export default useAuctionContracts;
