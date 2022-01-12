import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import Text from '@/components/Text';
import { useSaleCountdown } from '@/utils/hooks/sale';
import dayjs from 'dayjs';

interface LaunchpadInfoProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  type?: string;
  info?: any;
}
const DetailLaunchpadInfo = React.forwardRef(
  (props: LaunchpadInfoProps, ref: any) => {
    const { className, label, disabled = false, type, info, ...rest } = props;

    const classes: string = classNames(styles.default, className);

    return (
      <div className={styles.DetailLaunchpadInfo}>
        <div className={styles.headingBackground}>
          <Text type="body-p1-bold" color="neutral-100">
            {info?.title}
          </Text>
        </div>
        <div className={styles.body}>
          {info?.content.map((item: any) => {
            return (
              <div className={styles.item} key={item.key}>
                <Text type="body-p1-regular" color="neutral-150">
                  {item.key}
                </Text>
                <Text type="body-p1-bold" color="neutral-100">
                  {item.value}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);

export default React.memo(DetailLaunchpadInfo);
