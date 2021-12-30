import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Text from '@/components/Text';
import { WALLET_TYPE } from '@/utils/constants/wallet';
import { downloadExtention } from '@/utils/hooks/connect/metamask';
import React from 'react';
import { useIntl } from 'umi';
import styles from './index.less';

interface Props {
  visible: boolean;
  onClose: () => void;
  isTurnOffCoin98?: boolean;
  connectType?: string;
}

const ConnectError = ({
  visible,
  onClose,
  isTurnOffCoin98 = false,
  connectType = '',
}: Props) => {
  const intl = useIntl();

  const handleDownload = () => {
    downloadExtention(connectType);
  };

  const handleManageCoin98 = () => {
    console.log('🚀 ~ handleManageCoin98');
  };

  const getLogoInstall = (): string => {
    let src: string = '';
    switch (connectType) {
      case WALLET_TYPE.META_MASK:
        src = '/assets/images/logo-metamask.png';
        break;
      case WALLET_TYPE.COIN_98:
        src = '/assets/images/logo-coin98.png';
        break;
      case WALLET_TYPE.WALLET_CONNECT:
        src = '/assets/images/logo-wallet-connect.png';
        break;
      default:
        src = '/assets/images/logo-crash.png';
        break;
    }

    return src;
  };

  const getTextConnectType = (): string => {
    let text: string = '';
    switch (connectType) {
      case WALLET_TYPE.META_MASK:
        text = 'Metamask';
        break;
      case WALLET_TYPE.COIN_98:
        text = 'Coin 98';
        break;
      case WALLET_TYPE.WALLET_CONNECT:
        text = 'Wallet Connect';
        break;
      default:
        break;
    }

    return text;
  };

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title={false}
      className={styles.modalConnectError}
    >
      <div className={styles.content}>
        {!isTurnOffCoin98 ? (
          <div className={connectType ? styles.icon : ''}>
            <img alt="" src={getLogoInstall()} />
            <Text type="body-p1-regular" color="neutral-100">
              {getTextConnectType()}
            </Text>
          </div>
        ) : (
          <img alt="" src="/assets/images/logo-crash.png" />
        )}

        <div className={styles.description}>
          {!isTurnOffCoin98 ? (
            <>
              <Text type="body-p1-regular" color="neutral-100">
                {intl.formatMessage({
                  id: 'connectWallet.notInstallExt',
                })}
              </Text>
              <Text
                type="body-p1-regular"
                color="neutral-100"
                className={styles.txtDownload}
                onClick={handleDownload}
              >
                {intl.formatMessage({
                  id: 'connectWallet.downloadExtension',
                })}
              </Text>
            </>
          ) : (
            <>
              <Text type="body-p1-regular" color="neutral-100">
                {intl.formatMessage({
                  id: 'connectWallet.cannotUseMetamask',
                })}
              </Text>

              <div className={styles.manageExt}>
                <Text type="body-p1-regular" color="neutral-100">
                  {intl.formatMessage({
                    id: 'connectWallet.disabledCoin98',
                  })}
                </Text>
                <Text
                  type="body-p1-regular"
                  color="neutral-100"
                  className={styles.txtManage}
                  onClick={handleManageCoin98}
                >
                  {intl.formatMessage({
                    id: 'connectWallet.manageExtensions',
                  })}
                </Text>
              </div>
            </>
          )}
        </div>

        <Button onClick={onClose}>{isTurnOffCoin98 ? 'close' : 'gotIt'}</Button>
      </div>
    </Modal>
  );
};

export default ConnectError;
