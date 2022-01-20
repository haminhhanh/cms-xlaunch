import Modal from '@/components/Modal';
import React, { useState } from 'react';
import styles from './index.less';
import Text from '@/components/Text';
import classNames from 'classnames';
import Button from '@/components/Button';
import { useWallet, useWalletInfo } from '@/utils/hooks/connect/wallet';
import { useIntl } from 'umi';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

interface ModalYourWalletProps {
  className?: string;
  step?: number;
  disabled?: boolean;
  label?: string;
}
const ModalYourWallet = React.forwardRef(
  (props: ModalYourWalletProps, ref: any) => {
    const { className, step, disabled = false, label, ...rest } = props;

    const classes: string = classNames(styles.default, className);
    const [isVisible, setIsVisible] = useState(false);
    const openModel = () => {
      setIsVisible(true);
    };
    const { disconnectWallet } = useWallet();
    const onDisconnectWallet = () => {
      disconnectWallet();
    };
    const walletInfo = useWalletInfo();
    const intl = useIntl();

    return (
      <div className={styles.TransactionTradeModelWrapper}>
        <Button onClick={() => setIsVisible(true)}>
          {walletInfo?.formattedAddress}
        </Button>

        <Modal
          visible={isVisible}
          onClose={() => {
            setIsVisible(false);
          }}
          title="Your Wallet"
          className={styles.TransactionModel}
        >
          <div className={styles.ModalYourWallet}>
            <Text
              type="body-p1-medium"
              color="neutral-100"
              className={styles.ModalYourWalletAddress}
            >
              {walletInfo?.address}
            </Text>
            <div className={styles.infoWallet}>
              <a
                href="https://bscscan.com/"
                target="_blank"
                className={styles.infoWalletItem}
              >
                <Text type="body-p2-bold" color="primary-violet">
                  View on BSC
                </Text>
                <img src="/assets/images/ic-openlink.svg" alt="link" />
              </a>

              <Tooltip
                placement="right"
                trigger={['click']}
                overlay={<span>copied</span>}
              >
                <button
                  className={styles.infoWalletItem}
                  onClick={() =>
                    navigator.clipboard.writeText(walletInfo?.address)
                  }
                >
                  <Text type="body-p2-bold" color="primary-violet">
                    Copy Address
                  </Text>
                  <img src="/assets/images/ic-copy.svg" alt="link" />
                </button>
              </Tooltip>
            </div>
            <Button
              type="primary"
              onClick={onDisconnectWallet}
              className={styles.buttonLogOut}
            >
              {intl.formatMessage({ id: 'navbar.disconnect.wallet' })}
            </Button>
          </div>
        </Modal>
      </div>
    );
  },
);

export default React.memo(ModalYourWallet);
