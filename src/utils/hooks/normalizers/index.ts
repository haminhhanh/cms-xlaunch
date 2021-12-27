import toNumber from 'lodash/toNumber';
import toLower from 'lodash/toLower';
import numeral from 'numeral';

export const isOwned = (myAddress: string, nftOwnedIdAddress: string) =>
  toLower(myAddress) === toLower(nftOwnedIdAddress);

export const formatWalletAddress = (address: string, toNumber = 4) => {
  const _stringDel = address.substring(6, address.length - toNumber);
  return address.replace(_stringDel, '...');
};

export const formatBNBToUSD = (
  price: string | number,
  bnbPrice?: string | number,
  format?: string,
) => {
  if (!price || !bnbPrice) {
    return '';
  }
  const toUsd = toNumber(price) * toNumber(bnbPrice);
  if (!toUsd) {
    return '';
  }

  if (format) {
    return numeral(toUsd).format(format);
  }

  return `${numeral(toUsd).format('0.0')} $`;
};

export const normalizeIntNumber = (value = '', max: string | number) => {
  if (!value?.trim() && value !== '0') {
    return '';
  }

  const newValue = toNumber(value.replace(/[^0-9]/g, ''));
  if (max && newValue > toNumber(max)) return max;
  return newValue;
};
