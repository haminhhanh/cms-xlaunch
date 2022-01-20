import Modal from '@/components/Modal';
import React, { useState } from 'react';
import styles from './index.less';
import Text from '@/components/Text';
import classNames from 'classnames';
import Input from '@/components/Input';

interface SettingTradeProps {
  className?: string;
  step?: number;
  disabled?: boolean;
  label?: string;
}
const SettingTrade = React.forwardRef((props: SettingTradeProps, ref: any) => {
  const { className, step, disabled = false, label, ...rest } = props;

  const classes: string = classNames(styles.default, className);
  const [isVisible, setIsVisible] = useState(false);
  const openModel = () => {
    setIsVisible(true);
  };

  return (
    <div className={styles.SettingTradeModelWrapper}>
      <button className={styles.buttonSetting} onClick={openModel}>
        <img src="/assets/images/ic-settings.svg" alt="" />
      </button>

      <Modal
        visible={isVisible}
        onClose={() => {
          setIsVisible(false);
        }}
        title="Settings"
        className={styles.modelTradeModel}
      >
        <div className={styles.SettingTradeBody}>
          <div className={styles.SlippageTolerance}>
            <Text
              type="body-p1-bold"
              color="neutral-100"
              className={styles.title}
            >
              Slippage tolerance
            </Text>
            <div className={styles.buttonGroup}>
              <button>
                <Text type="body-p1-medium" color="neutral-100">
                  0,1%
                </Text>
              </button>
              <button>
                <Text type="body-p1-medium" color="neutral-100">
                  0,5%
                </Text>
              </button>
              <button>
                <Text type="body-p1-medium" color="neutral-100">
                  1%
                </Text>
              </button>
              <Input placeholder="1%" className={styles.input} type="number" />
              <Text type="body-p1-bold" color="neutral-100">
                %
              </Text>
            </div>
          </div>
          <div className={styles.TransactionDeadline}>
            <Text
              type="body-p1-bold"
              color="neutral-100"
              className={styles.title}
            >
              Transaction deadline
            </Text>
            <div className={styles.TransactionDeadlineInput}>
              <Input placeholder="0" className={styles.input} type="number" />
              <Text type="body-p1-medium" color="neutral-100">
                Minutes
              </Text>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
});

export default React.memo(SettingTrade);
