import Modal from '@/components/Modal';
import React, { useState } from 'react';
import styles from './index.less';
import Text from '@/components/Text';
import classNames from 'classnames';

interface ModelSelectNetWorkProps {
  className?: string;
  step?: number;
  disabled?: boolean;
  label?: string;
}
const ModelSelectNetWork = React.forwardRef(
  (props: ModelSelectNetWorkProps, ref: any) => {
    const { className, step, disabled = false, label, ...rest } = props;
    const classes: string = classNames(styles.default, className);
    const [isVisible, setIsVisible] = useState(false);
    const openModel = () => {
      setIsVisible(true);
    };
    const listNetWork = [
      {
        name: 'Etherium',
        img: '/assets/images/ic-ethereum.svg',
      },
      {
        name: 'BSC',
        img: '/assets/images/ic-BSC.svg',
      },
      {
        name: 'Polygon',
        img: '/assets/images/ic-Polygon.svg',
      },
    ];

    return (
      <div className={styles.ModelSelectNetWorkWrapper}>
        <button className={styles.buttonNetWork} onClick={openModel}>
          <img src="/assets/images/ic-ethereum.svg" alt="logo" />
          <Text type="body-p1-bold" color="neutral-100">
            Etherium
          </Text>
        </button>

        <Modal
          visible={isVisible}
          onClose={() => {
            setIsVisible(false);
          }}
          title="Switch Network"
          className={styles.modelNetWork}
        >
          <div className={styles.ModelSelectNetWork}>
            {listNetWork.map((item) => {
              return (
                <div className={styles.netWorkItem} key={item.name}>
                  <img src={item.img} />
                  <Text type="body-p2-bold" color="neutral-100">
                    {item.name}
                  </Text>
                </div>
              );
            })}
          </div>
        </Modal>
      </div>
    );
  },
);

export default React.memo(ModelSelectNetWork);
