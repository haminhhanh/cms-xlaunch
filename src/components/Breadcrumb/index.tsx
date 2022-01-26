import React from 'react';
import classNames from 'classnames';
import Text from '../Text';
import styles from './index.less';

interface BreadcrumbProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  value?: boolean;
  onChange?: (value: any) => void;
}
const Breadcrumb = React.forwardRef((props: BreadcrumbProps, ref: any) => {
  const {
    children,
    className,
    label,
    disabled = false,
    defaultChecked = false,
    value = false,
    onChange,
    ...rest
  } = props;

  const classes: string = classNames(styles.default, className);

  return (
    <div className={styles.wrapper} style={{ marginBottom: 30 }}>
      <Text type="heading-p2-bold" color="neutral-100">
        {children}
      </Text>
    </div>
  );
});

export default Breadcrumb;
