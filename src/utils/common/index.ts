interface IAttr {
  asset_attribute: { name: string };
}

interface IDataObj {
  id: string | number;
  asset_attribute_value: any[];
  token_id: string;
  game_asset_id: string;
  asset_pricing?: any;
  fix_price?: string;
  event?: string;
  update_at_block?: string;
}

export const isEmail = (email: string): boolean => {
  const re =
    // eslint-disable-next-line no-useless-escape
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  if (!email) return false;

  const emailParts: string[] = email.split('@');

  if (emailParts.length !== 2) return false;

  const account: string = emailParts[0];
  const address: string = emailParts[1];

  if (account.length > 64) return false;
  if (address.length > 255) return false;

  const domainParts: string[] = address.split('.');

  if (domainParts.some((part: string) => part.length > 63)) {
    return false;
  }

  return re.test(String(email).toLowerCase());
};

export const splitString = (
  string: string,
  cutBefore?: number,
  cutAfter?: number,
) => {
  if (string && string.length > 10) {
    return `${string.substring(0, cutBefore ?? 4)} ... ${string.substring(
      string.length - (cutAfter ?? 4),
      string.length,
    )}`;
  }
  return string;
};

export const filterValueElm = (data: IDataObj, listCarKey: any[]) => {
  let dataObj: any = {};
  if (data) {
    listCarKey.forEach((item: any) => {
      dataObj[item] = data.asset_attribute_value.filter(
        (x: IAttr) => x.asset_attribute.name === item,
      )[0]?.value;
    });
  }

  return { ...data, ...dataObj };
};

export const filterValueListElms = (listData: any, listCarKey: any[]) => {
  return listData.map((dataItem: any) => {
    return filterValueElm(dataItem, listCarKey);
  });
};
