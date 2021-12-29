import React, { useImperativeHandle, forwardRef } from 'react';
import Dialog from 'rc-dialog';
import cls from 'classnames';
import { useBoolean } from '@umijs/hooks';

import styles from './index.less';

interface ModalProps {
  visible?: boolean;
  children?: React.ReactNode;
  className?: string;
  closeIcon?: React.ReactNode;
  title?: string | boolean | React.ReactNode;
  footer?: string | boolean | React.ReactNode;
  onClose?: () => void;
  width?: number;
  closable?: boolean;
  maskClosable?: boolean;
  centered?: boolean;
}

const Modal = (props: ModalProps, ref: any) => {
  const {
    visible,
    children,
    className,
    closeIcon,
    title = 'Title',
    footer,
    centered = true,
    onClose,
    ...rest
  } = props;

  const { state, setTrue, setFalse } = useBoolean(false);

  useImperativeHandle(ref, () => ({
    setTrue,
    setFalse,
  }));

  const closeIconEle: React.ReactNode = closeIcon || (
    <img src="/assets/images/ic-close-modal.svg" alt="" />
  );

  return (
    <Dialog
      visible={visible ? visible : state}
      animation="zoom"
      maskAnimation="fade"
      title={title}
      footer={footer}
      wrapClassName={cls([
        styles.rcModal,
        {
          [`${styles.rcModalCentered}`]: centered,
        },
        className,
      ])}
      onClose={visible ? onClose : setFalse}
      closeIcon={closeIconEle}
      {...rest}
    >
      {children}
    </Dialog>
  );
};

export default forwardRef(Modal);
