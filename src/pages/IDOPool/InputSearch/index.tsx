import React from 'react';
import classNames from 'classnames';
import Text from '@/components/Text';
import styles from './index.less';

interface InputSearchProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  value?: boolean;
  onChange?: (value: any) => void;
  placeholder?: string;
}
const InputSearch = React.forwardRef((props: InputSearchProps, ref: any) => {
  const {
    className,
    label,
    disabled = false,
    defaultChecked = false,
    value = false,
    placeholder = '',
    onChange,
    ...rest
  } = props;

  const classes: string = classNames(styles.InputSearch, className);

  return (
    <div className={styles.InputSearchWrapper}>
      <input
        disabled={disabled}
        placeholder={placeholder}
        {...rest}
        className={classes}
      />
      <img src="/assets/images/ic-search.svg" />
    </div>
  );
});

export default InputSearch;
