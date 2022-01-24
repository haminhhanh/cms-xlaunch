import React from 'react';
import Switch from 'rc-switch';
import classNames from 'classnames';
import Text from '../Text';
import styles from './index.less';

interface SwitchProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  value?: boolean;
  onChange?: (value: any) => void;
}
const RcSwitch = React.forwardRef((props: SwitchProps, ref: any) => {
  const {
    className,
    label,
    disabled = false,
    defaultChecked = false,
    value = false,
    onChange,
    ...rest
  } = props;

  const classes: string = classNames(styles.wrapperSwitch, className);

  return (
    <div className={styles.Switch}>
      <Switch
        className={styles.wrapperSwitch}
        disabled={disabled}
        onChange={onChange}
        onClick={onChange}
        {...rest}
      />
      {label && (
        <Text type="body-p1-regular" color="neutral-100">
          {label}
        </Text>
      )}
    </div>
  );
});

export default RcSwitch;
