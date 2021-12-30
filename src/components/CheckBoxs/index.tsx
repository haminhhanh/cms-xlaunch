import React from 'react';
import Checkbox from 'rc-checkbox';
import styles from './index.less';
import classNames from 'classnames';

import Text from '../Text';

type OptionT = {
  value: string | number | any;
  label: string;
};

interface CheckBoxProps {
  className?: string;
  label?: string;
  value?: string[];
  onChange?: Function;
  disabled?: boolean;
  options: OptionT[];
}

const CheckBoxs = React.forwardRef((props: CheckBoxProps, ref: any) => {
  const { className, label, value = [], options, onChange, ...rest } = props;
  const classes: string = classNames(styles.default, className);
  const onValueChange = (val: string) => () => {
    if (value.includes(val)) {
      onChange && onChange(value.filter((e) => e !== val));
    } else {
      onChange && onChange([...value, val]);
    }
  };
  return (
    <div className={styles.listCheckBox}>
      {options.map((optionsValue, idx) => {
        return (
          <div className={styles.itemCheckBox} key={idx}>
            <Checkbox
              className={classes}
              onChange={onValueChange(optionsValue.value)}
              checked={value.includes(optionsValue.value)}
            />

            {optionsValue.label && (
              <Text type="body-p2-regular">{optionsValue.label}</Text>
            )}
          </div>
        );
      })}
    </div>
  );
});

export default CheckBoxs;
