import React, { useState } from 'react';
import styles from './index.less';
import classNames from 'classnames';
import Text from '@/components/Text';
import Button from '@/components/Button';

interface StatusWhiteListProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  id?: any;
  status?: string;
}

const StatusWhiteList = React.forwardRef(
  (props: StatusWhiteListProps, ref: any) => {
    const {
      className,
      label,
      disabled = false,
      id,
      status = 'notOpen',
      ...rest
    } = props;
    const classes: string = classNames(styles.default, className);

    const textNote = (status: any) => {
      switch (status) {
        case 'notOpen':
          return 'The whitelist is not yet open';
        case 'open':
          return 'The whitelist is open now';
        case 'applieWhiteList':
          return 'Allocation ressult will be announced on Thurday, Dec 16, 2021';
        case 'winWhiteList':
          return 'Congrats! Your guranteed allocation or this pool is 50$ BUSD';
        case 'notWinWhiteList':
          return 'Unfortunately, you did not win a guaranteed allocation for this pool. However, you can join FCFS Phase if there is any token left from Phase 1';
        default:
          '';
      }
    };

    return (
      <div className={styles.whiteList}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <Text
              type="subheading-p1-bold"
              color="neutral-100"
              className={styles.titleWhiteList}
            >
              Join Whitelist
            </Text>
            <Text type="body-p1-regular" color="neutral-150">
              {textNote(status)}
            </Text>
          </div>
          <div className={styles.button}>
            <Button type="disabled">Apply Whitelist</Button>
          </div>
        </div>
      </div>
    );
  },
);

export default React.memo(StatusWhiteList);
