import Modal from '@/components/Modal';
import React, { useState } from 'react';
import styles from './index.less';
import Text from '@/components/Text';
import classNames from 'classnames';

interface SelectTokenProps {
  className?: string;
  step?: number;
  disabled?: boolean;
  label?: string;
}
const SelectToken = React.forwardRef((props: SelectTokenProps, ref: any) => {
  const { className, step, disabled = false, label, ...rest } = props;

  const classes: string = classNames(styles.default, className);
  const [isVisible, setIsVisible] = useState(false);
  const openModel = () => {
    setIsVisible(true);
  };
  const listToken = [
    {
      name: 'ETH',
      img: '/assets/images/ic-eth.png',
    },
    {
      name: 'USDC',
      img: '/assets/images/ic-usdc.png',
    },
    {
      name: 'USDT',
      img: '/assets/images/ic-usdt.png',
    },
  ];

  return (
    <div className={styles.SelectTokenModelWrapper}>
      <button className={styles.buttonSelectToken} onClick={openModel}>
        <div className={styles.token}>
          <img src="/assets/images/ic-eth.png" alt="" />
          <Text type="subheading-p1-bold" color="neutral-100">
            Token
          </Text>
        </div>
        <img src="/assets/images/ic-arrowdownwhite.svg" alt="" />
      </button>

      <Modal
        visible={isVisible}
        onClose={() => {
          setIsVisible(false);
        }}
        title="Select a token"
      >
        <div className={styles.listToken}>
          {listToken.map((item) => {
            return (
              <button key={item.name}>
                <img src={item.img} />
                <Text type="body-p1-bold" color="neutral-600">
                  {item.name}
                </Text>
              </button>
            );
          })}
        </div>
      </Modal>
    </div>
  );
});

export default React.memo(SelectToken);
