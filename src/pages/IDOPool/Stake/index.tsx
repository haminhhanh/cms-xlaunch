import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import 'rc-checkbox/assets/index.css';
import Text from '@/components/Text';
import Button from '@/components/Button';
import ModelStake from '../ModelStake';

interface StakeProps {
  className?: string;
  label?: string;
  disabled?: boolean;
}
const Stake = React.forwardRef((props: StakeProps, ref: any) => {
  const { className, label, disabled = false, ...rest } = props;

  const classes: string = classNames(styles.default, className);

  const Stake = [
    {
      label: 'Staked',
      value: '0.0000',
    },
    {
      label: 'Unstaked',
      value: '0.0000',
    },
  ];

  return (
    <div className={styles.stake}>
      <div className={styles.top}>
        {Stake.map((item) => {
          return (
            <div className={styles.item}>
              <Text
                type="body-p1-regular"
                color="neutral-200"
                className={styles.label}
              >
                {item.label}
              </Text>
              <Text type="heading-p2-bold" color="neutral-100">
                {item.value}
              </Text>
            </div>
          );
        })}
      </div>
      <div className={styles.bottom}>
        <Text
          type="body-p1-regular"
          color="neutral-200"
          className={styles.label}
        >
          Rewards
        </Text>
        <Text type="heading-p2-bold" color="neutral-100">
          0.0000
        </Text>
        <div className={styles.button}>
          <div className={styles.buttonStake}>
            <ModelStake />
          </div>
          <div className={styles.buttonStake}>
            <Button type="primary">
              <Text type="body-p1-bold" color="neutral-100">
                Unstake
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default React.memo(Stake);
