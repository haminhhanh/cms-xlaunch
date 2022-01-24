import Modal from '@/components/Modal';
import React, { useState } from 'react';
import styles from './index.less';
import Text from '@/components/Text';
import classNames from 'classnames';
import Input from '@/components/Input';
import Button from '@/components/Button';

interface ModelStakeProps {
  className?: string;
  step?: number;
  disabled?: boolean;
  label?: string;
}
const ModelStake = React.forwardRef((props: ModelStakeProps, ref: any) => {
  const { className, step, disabled = false, label, ...rest } = props;

  const classes: string = classNames(styles.default, className);
  const [isVisible, setIsVisible] = useState(false);
  const openModel = () => {
    setIsVisible(true);
  };

  return (
    <div className={styles.ModelStakeWrapper}>
      <Button type="primary" onClick={openModel}>
        <Text type="body-p1-bold" color="neutral-100">
          Stake
        </Text>
      </Button>

      <Modal
        visible={isVisible}
        onClose={() => {
          setIsVisible(false);
        }}
        title="Stake in pool"
        className={styles.modelModelStake}
      >
        <div className={styles.ModelStake}>
          <Text type="body-p2-regular" color="neutral-200">
            0 USDT Available
          </Text>
          <div className={styles.input}>
            <input type="number" />
            <div className={styles.inputRight}>
              <Text type="body-p1-regular" color="neutral-100">
                USDT
              </Text>
              <span>
                <Text type="body-p2-regular" color="neutral-100">
                  Max
                </Text>
              </span>
            </div>
          </div>
          <div className={styles.button}>
            <Button type="primary" className={styles.cancel}>
              Cancel
            </Button>
            <Button>Confirm</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
});

export default React.memo(ModelStake);
