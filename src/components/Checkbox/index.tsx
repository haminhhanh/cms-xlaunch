import React from 'react';
import Checkbox from 'rc-checkbox';
import classNames from 'classnames';

import Text from '../Text';
import styles from './index.less';

interface CheckBoxProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  value?: boolean;
  onChange?: (value: any) => void;
}
const RcCheckBox = React.forwardRef((props: CheckBoxProps, ref: any) => {
  const {
    className,
    label,
    disabled = false,
    defaultChecked = false,
    value = false,
    onChange,
    ...rest
  } = props;

  const classes: string = classNames(styles.default, className);

  const onChecked = (evt: any) => {
    const { checked } = evt.target;
    if (onChange) onChange(checked);
  };

  return (
    <div className={styles.wrapper}>
      <Checkbox
        defaultChecked={defaultChecked}
        className={classes}
        disabled={disabled}
        checked={value}
        onChange={onChecked}
        {...rest}
      />
      {label && <Text type="body-p2-regular">{label}</Text>}
    </div>
  );
});

export default RcCheckBox;
