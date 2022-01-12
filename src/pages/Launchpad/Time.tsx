import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import Text from '@/components/Text';
import { useSaleCountdown } from '@/utils/hooks/sale';
import dayjs from 'dayjs';

interface TimeProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  type?: string;
}
const Time = React.forwardRef((props: TimeProps, ref: any) => {
  const { className, label, disabled = false, type, ...rest } = props;

  const classes: string = classNames(styles.default, className);
  const { remain } = useSaleCountdown({
    startDate: new Date(),
    endDate: new Date(2022, 1, 12, 13, 0, 0),
    nonUpdate: false,
  });
  return (
    <div className={styles.openInTime}>
      <div className={styles.openInTimeItem}>
        <div className={styles.number}>
          <Text
            color={type === 'opent' ? 'yellow' : 'green'}
            type="subheading-p1-bold"
          >
            {remain?.days}
          </Text>
        </div>
        <div className={styles.text}>
          <Text type="body-p2-regular" color="neutral-150">
            Days
          </Text>
        </div>
      </div>
      <div className={styles.openInTimeItem}>
        <div className={styles.number}>
          <Text
            color={type === 'opent' ? 'yellow' : 'green'}
            type="subheading-p1-bold"
          >
            {remain?.hours}
          </Text>
        </div>
        <div className={styles.text}>
          <Text type="body-p2-regular" color="neutral-150">
            Hours
          </Text>
        </div>
      </div>
      <div className={styles.openInTimeItem}>
        <div className={styles.number}>
          <Text
            color={type === 'opent' ? 'yellow' : 'green'}
            type="subheading-p1-bold"
          >
            {remain?.minutes}
          </Text>
        </div>
        <div className={styles.text}>
          <Text type="body-p2-regular" color="neutral-150">
            Minutes
          </Text>
        </div>
      </div>
      <div className={styles.openInTimeItem}>
        <div className={styles.number}>
          <Text
            color={type === 'opent' ? 'yellow' : 'green'}
            type="subheading-p1-bold"
          >
            {remain?.seconds}
          </Text>
        </div>
        <div className={styles.text}>
          <Text type="body-p2-regular" color="neutral-150">
            Seconds
          </Text>
        </div>
      </div>
    </div>
  );
});

export default React.memo(Time);
