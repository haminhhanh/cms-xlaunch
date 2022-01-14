import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import 'rc-checkbox/assets/index.css';
import Text from '@/components/Text';
interface StepProps {
  className?: string;
  label?: string;
  disabled?: boolean;
}
const Step = React.forwardRef((props: StepProps, ref: any) => {
  const { className, label, disabled = false, ...rest } = props;

  const classes: string = classNames(styles.default, className);

  const step = [
    {
      label: 'Choose IDO Pool',
      url: '/assets/images/ic-plane.svg',
    },
    {
      label: 'Amount to Stake',
      url: '/assets/images/ic-dollar.svg',
    },
    {
      label: 'Pre-authorization',
      url: '/assets/images/ic-user.svg',
    },
    {
      label: 'Confirm',
      url: '/assets/images/ic-check.svg',
    },
  ];

  return (
    <div className={styles.StepStakewrapper}>
      {step.map((item) => {
        return (
          <div className={styles.StepStake} key={item.label}>
            <div className={styles.Step}>
              <div className={styles.icon}>
                <img src={item.url} />
              </div>
              <Text type="subheading-p1-bold" color="neutral-100">
                {item.label}
              </Text>
              {item.label === 'Confirm' ? null : (
                <div className={styles.border} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default React.memo(Step);
