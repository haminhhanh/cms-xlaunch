import Modal from '@/components/Modal';
import { useImperativeHandle, useState } from 'react';
import { useIntl } from 'umi';
import React from 'react';
import Dialog from 'rc-dialog';
import styles from './index.less';
import LoadingConfirm from './LoadingConfirm';
import Transaction from './Transaction';
import Icon from '../Icon';
import Image from '@/components/Image';
type TStatus =
  | 'loading_confirm'
  | 'transaction_processing'
  | 'transaction_success'
  | 'transaction_failed'
  | 'user_reject'
  | 'unknown'
  | 'insufficient_balance'
  | 'not_highest_bid'
  | undefined;

async () => {
  // ref.set
  // wait()
};

const TransactionStep = (props: any, ref: any) => {
  const intl = useIntl();

  const [status, setStatus] = useState<TStatus>('transaction_failed');
  const [hash, setHash] = useState<string>(
    'aklsjdlkajsdkljaskldjlaksjdklasjdklajslkdjaskljdklasjdlkas',
  );
  const [visible, setVisible] = useState<boolean>(false);

  const close = () => {
    setHash('');
    setStatus(undefined);
    setVisible(false);
  };

  useImperativeHandle(ref, () => ({
    close,
    open: () => {
      setVisible(true);
      setStatus('loading_confirm');
    },
    changeStatus: ({
      status,
      hash,
      visible,
    }: {
      status: TStatus;
      hash?: string;
      visible?: boolean;
    }) => {
      setStatus(status);
      if (hash) {
        setHash(hash);
      }
      setVisible(!!visible);
    },
  }));

  const renderContent = () => {
    switch (status) {
      case 'loading_confirm':
        return <LoadingConfirm />;
      case 'transaction_processing':
      case 'transaction_failed':
      case 'transaction_success':
        return <Transaction hash={hash} status={status} />;
      case 'user_reject':
        return (
          <div className="error">
            <div className="img_err">
              <Image name="ic-error" />
            </div>
            <p>Error</p>
            <p>Something went wrong. Try again!</p>
          </div>
        );
      case 'not_highest_bid':
        return (
          <div className="error">
            <div className="img_err">
              <Image name="ic-error" />
            </div>
            <p>Error</p>
            <p>Giá phải cao hơn giá đang đấu giá</p>
          </div>
        );
      case 'unknown':
        return <p>unknown</p>;
      case 'insufficient_balance':
        return <p>insufficient balance</p>;
      default:
        return null;
    }
  };

  return (
    <Dialog
      visible={visible}
      closable={false}
      maskClosable={false}
      className={styles.rcModal}
      animation="zoom"
      maskAnimation="fade"
    >
      {status !== 'loading_confirm' && (
        <div onClick={close} className={styles.closeContainer}>
          <Icon icon="close" size={20} color="#ffffff" />
        </div>
      )}
      {renderContent()}
    </Dialog>
  );
};

export default React.forwardRef(TransactionStep);
