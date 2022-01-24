import React, { useState } from 'react';
import styles from './index.less';
import classNames from 'classnames';
import 'rc-checkbox/assets/index.css';
import Text from '@/components/Text';
import Button from '@/components/Button';
import { useIsConnected } from '@/utils/hooks/connect/wallet';
import ConnectWalletModal from '@/components/ConnectWalletModal';

interface TableStackProps {
  className?: string;
  label?: string;
  disabled?: boolean;
}
const TableStack = React.forwardRef((props: TableStackProps, ref: any) => {
  const { className, label, disabled = false, ...rest } = props;

  const classes: string = classNames(styles.default, className);
  const [dropDown, setDropDown] = useState(false);
  const isConnected = useIsConnected();

  return (
    <div className={styles.TableStackWrapper}>
      <div className={styles.TableStack}>
        <div className={styles.left}>
          <div className={styles.icon}>
            <img src="/assets/images/ic-bnb.svg" />
          </div>
          <div className={styles.token}>
            <Text type="body-p1-bold" color="neutral-100">
              USDT
            </Text>
            <Text type="body-p2-regular" color="neutral-200">
              6.5 months
            </Text>
          </div>
          <div className={styles.infoItem}>
            <Text type="body-p2-regular" color="neutral-200">
              USDT Earned
            </Text>
            <Text type="body-p1-bold" color="neutral-100">
              0.00
            </Text>
          </div>
          <div className={styles.infoItem}>
            <Text type="body-p2-regular" color="neutral-200">
              APR
            </Text>
            <Text type="body-p1-bold" color="neutral-100">
              0.00
            </Text>
          </div>
          <div className={styles.infoItem}>
            <Text type="body-p2-regular" color="neutral-200">
              Look - up term
            </Text>
            <Text type="body-p1-bold" color="neutral-100">
              0.00
            </Text>
          </div>
          <div className={styles.infoItem}>
            <Text type="body-p2-regular" color="neutral-200">
              Remaining unlock
            </Text>
            <Text type="body-p1-bold" color="neutral-100">
              2,476,213 Blocks
            </Text>
          </div>
        </div>
        <button
          className={styles.dropDown}
          onClick={() => setDropDown(!dropDown)}
        >
          <Text type="body-p2-bold" color="primary-violet">
            {dropDown ? 'Hide' : 'Detail'}
          </Text>
          <img src="/assets/images/ic-arrowdown.svg" />
        </button>
      </div>
      {dropDown ? (
        <div className={styles.TableStackDetail}>
          <div className={styles.left}>
            <div className={styles.Reward}>
              <Text type="body-p1-regular" color="neutral-150">
                Rewards end in
              </Text>
              <Text type="body-p1-bold" color="primary-violet">
                3.267.325 Blogs
              </Text>
            </div>
            <div className={styles.flex}>
              <a href="#">
                <Text type="body-p1-regular" color="neutral-100">
                  Unstaking Fee
                </Text>
              </a>
            </div>
            <div className={styles.flex}>
              <a href="#">
                <Text type="body-p1-regular" color="neutral-100">
                  View Project Site
                </Text>
              </a>
              <img src="/assets/images/ic-square.svg" />
            </div>
            <div className={styles.flex}>
              <a href="#">
                <Text type="body-p1-regular" color="neutral-100">
                  View Contract
                </Text>
              </a>
              <img src="/assets/images/ic-square.svg" />
            </div>
          </div>
          <div className={styles.groupBox}>
            <div className={styles.center}>
              <Text
                type="body-p1-regular"
                color="neutral-150"
                className={styles.title}
              >
                USDT Earned
              </Text>
              <Text
                type="subheading-p1-bold"
                color="neutral-100"
                className={styles.number}
              >
                0.00
              </Text>
              <Text
                type="body-p1-bold"
                color="neutral-100"
                className={styles.dollar}
              >
                0.00
              </Text>
              <Button type="disabled">Harvest</Button>
            </div>
            <div className={styles.right}>
              <Text
                type="body-p1-regular"
                color="neutral-150"
                className={styles.title}
              >
                Start staking
              </Text>
              <Text
                type="subheading-p1-bold"
                color="neutral-100"
                className={styles.number}
              >
                0.00
              </Text>
              <Text
                type="body-p1-bold"
                color="neutral-100"
                className={styles.dollar}
              >
                $0.00
              </Text>
              <div className={styles.groupButton}>
                <Button type="disabled" className={styles.buttonUnstake}>
                  Unstake
                </Button>
                <Button type="disabled" className={styles.plus}>
                  <img src="/assets/images/ic-plus.svg" />
                </Button>
              </div>
              {!isConnected && (
                <ConnectWalletModal>
                  <Button className={styles.buttonHarvest}>
                    Connect Wallet
                  </Button>
                </ConnectWalletModal>
              )}
              {isConnected && (
                <Button className={styles.buttonHarvest}>
                  Approve Contract
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
});

export default React.memo(TableStack);
