import React from 'react';
import styles from './index.less';
import cls from 'classnames';

interface RadioProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  value?: string | number;
  name?: string;
  onChange?: Function;
  option: {
    label: string;
    value: string | number;
  };
}
const Radio = React.forwardRef((props: RadioProps, ref: any) => {
  const {
    className,
    label,
    disabled = false,
    name,
    value,
    option,
    onChange,
    ...rest
  } = props;
  const radioRef = (ref as any) || React.createRef<HTMLInputElement>();

  const isActive = option.value === value;
  const onClick = () => {
    onChange && onChange(option.value);
  };

  return (
    <div className={styles.radioItem}>
      <button
        onClick={onClick}
        ref={radioRef}
        className={cls(
          styles.radioBtn,
          isActive && styles.radioBtnActive,
          className,
        )}
      >
        {option.label && (
          <label htmlFor={`${option.value}`}>{option.label}</label>
        )}
      </button>
    </div>
  );
});

export default Radio;
