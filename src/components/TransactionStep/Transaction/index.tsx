import React from 'react';
import { formatWalletAddress } from '@/utils/normalizers';
import styles from './index.less';
import Icon from '@/components/Icon';
import Text from '@/components/Text';
import Loading from '@/components/Loading';
import { ENVIRONMENTS } from '@/utils/constants/environments';
import Image from '@/components/Image';

type TStatus =
  | 'loading_confirm'
  | 'transaction_processing'
  | 'transaction_success'
  | 'transaction_failed'
  | 'user_reject'
  | 'unknown'
  | 'insufficient_balance'
  | undefined;

type TransactionT = {
  hash: string;
  status: TStatus;
};

const Transaction = (props: TransactionT) => {
  const { hash, status } = props;
  const hashShorten = formatWalletAddress(hash);

  return (
    <div>
      {status === 'transaction_processing' && (
        <div className={styles.content}>
          <Loading chkLoading={true} />
        </div>
      )}
      {status === 'transaction_failed' && (
        <div className={styles.contentSuccess}>
          <div className={styles.icContainer}>
            <Image name="ic-failed" />
          </div>
          <Text type="title-24-semi-bold" className={styles.txtSuccess}>
            Transaction failed
          </Text>
        </div>
      )}
      {status === 'transaction_success' && (
        <div className={styles.contentSuccess}>
          <div className={styles.icContainer}>
            <Image name="ic-successful" className={styles.success} />
          </div>
          <Text type="title-24-semi-bold" className={styles.txtSuccess}>
            Transaction successful
          </Text>
        </div>
      )}
      <Text type="body-14-regular" className={styles.txt}>
        Check your transaction ID below
      </Text>
      <div className={styles.container}>
        <Text type="caption-12-medium">{hashShorten}</Text>
        <a href={`${ENVIRONMENTS.CHAIN_URL}/tx/${hash}`} target="_blank">
          <Icon icon="link" size={14} />
        </a>
      </div>
    </div>
  );
};

export default Transaction;
