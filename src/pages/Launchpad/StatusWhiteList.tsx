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
  changeStatus?: any;
}

const StatusWhiteList = React.forwardRef(
  (props: StatusWhiteListProps, ref: any) => {
    const {
      className,
      label,
      disabled = false,
      id,
      changeStatus = () => {},
      status,
      ...rest
    } = props;
    const classes: string = classNames(styles.default, className);

    const title = (status: any) => {
      switch (status) {
        case 'notOpen':
          return (
            <Text
              type="subheading-p1-bold"
              color="neutral-100"
              className={styles.flexWhiteList}
            >
              Join Whitelist
            </Text>
          );

        case 'open':
          return (
            <Text
              type="subheading-p1-bold"
              color="neutral-100"
              className={styles.flexWhiteList}
            >
              Join Whitelist
            </Text>
          );
        case 'applieWhiteList':
          return (
            <div className={styles.flexWhiteList}>
              <img src="/assets/images/ic-whitelist-applied.svg" />
              <Text type="subheading-p1-bold" color="primary-violet">
                Applied Whitelist
              </Text>
            </div>
          );
        case 'winWhiteList':
          return (
            <div className={styles.flexWhiteList}>
              <img src="/assets/images/ic-whitelist-win.svg" />
              <Text type="subheading-p1-bold" color="green">
                Win Whitelist
              </Text>
            </div>
          );
        case 'tokenClaimedEndIn':
          return (
            <div className={styles.flexWhiteList}>
              <img src="/assets/images/ic-whitelist-win.svg" />
              <Text type="subheading-p1-bold" color="green">
                Win Whitelist
              </Text>
            </div>
          );
        case 'notWinWhiteList':
          return (
            <div className={styles.flexWhiteList}>
              <img src="/assets/images/ic-whitelist-fail.svg" />
              <Text type="subheading-p1-bold" color="red">
                Fail Whitelist
              </Text>
            </div>
          );
        case 'closeOpen':
          return (
            <div className={styles.flexWhiteList}>
              <img src="/assets/images/ic-whitelist-win.svg" />
              <Text type="subheading-p1-bold" color="green">
                Win Whitelist
              </Text>
            </div>
          );
        default:
          '';
      }
    };

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
        case 'tokenClaimedEndIn':
          return 'Congrats! Your guranteed allocation or this pool is 50$ BUSD';
        case 'notWinWhiteList':
          return 'Unfortunately, you did not win a guaranteed allocation for this pool. However, you can join FCFS Phase if there is any token left from Phase 1';
        case 'closeOpen':
          return 'Congrats! Your guranteed allocation or this pool is 50$ BUSD';
        default:
          '';
      }
    };
    return (
      <div className={styles.whiteList}>
        <div className={styles.content}>
          <div className={styles.heading}>
            {title(status)}
            <Text type="body-p1-regular" color="neutral-150">
              {textNote(status)}
            </Text>
          </div>
          {status === 'notOpen' ? (
            <div className={styles.button}>
              <Button type="disabled">Apply Whitelist</Button>
            </div>
          ) : status === 'open' ? (
            <div className={styles.buttonActive}>
              <Button
                onClick={() => {
                  changeStatus('applieWhiteList');
                }}
              >
                <a href="https://forms.gle/KBUsGSTD5D71Guac6" target="_blank">
                  Apply Whitelist
                </a>
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    );
  },
);

export default React.memo(StatusWhiteList);
