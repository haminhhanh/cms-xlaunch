import Modal from '@/components/Modal';
import React, { useState } from 'react';
import styles from './index.less';
import Text from '@/components/Text';
import classNames from 'classnames';
import Button from '@/components/Button';

interface TransactionTradeProps {
  className?: string;
  step?: number;
  disabled?: boolean;
  label?: string;
}
const TransactionTrade = React.forwardRef(
  (props: TransactionTradeProps, ref: any) => {
    const { className, step, disabled = false, label, ...rest } = props;

    const classes: string = classNames(styles.default, className);
    const [isVisible, setIsVisible] = useState(false);
    const openModel = () => {
      setIsVisible(true);
    };

    return (
      <div className={styles.TransactionTradeModelWrapper}>
        <button className={styles.buttonTransaction} onClick={openModel}>
          <img src="/assets/images/ic-reload.svg" alt="" />
        </button>

        <Modal
          visible={isVisible}
          onClose={() => {
            setIsVisible(false);
          }}
          title="Recent Transactions"
          className={styles.TransactionModel}
        >
          <div className={styles.TransactionTradeBody}>
            <Text
              type="body-p1-medium"
              color="neutral-100"
              className={styles.title}
            >
              No recent transactions !
            </Text>
            <Button
              type="primary"
              className={styles.buttonTransaction}
              onClick={() => setIsVisible(false)}
            >
              <Text type="body-p2-bold" color="neutral-100">
                Close
              </Text>
            </Button>
          </div>
        </Modal>
      </div>
    );
  },
);

export default React.memo(TransactionTrade);
