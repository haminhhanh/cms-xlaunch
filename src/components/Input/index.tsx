import React from 'react';
import classNames from 'classnames';
import { useToggle, useUpdateEffect } from '@umijs/hooks';
import Text from '../Text';
import styles from './index.less';

interface InputProps {
  className?: string;
  disabled?: boolean;
  type?: 'text' | 'password' | 'number' | 'hidden';
  placeholder?: string;
  onClick?: () => void;
  label?: string;
  labelBehind?: string;
  min?: number;
  max?: number;
  maxLength?: number;
  suffix?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: any;
  defaultValue?: any;
}

const Input = React.forwardRef((props: InputProps, ref: any) => {
  const {
    className,
    disabled = false,
    type = 'text',
    placeholder = '',
    label = '',
    labelBehind = '',
    onClick,
    maxLength,
    suffix,
    defaultValue,
    ...rest
  } = props;
  const inputRef = (ref as any) || React.createRef<HTMLInputElement>();

  const { state: isVisibleEye, toggle: toggleEye } = useToggle(false);

  useUpdateEffect(() => {
    if (defaultValue && inputRef.current.value !== defaultValue) {
      inputRef.current.value = defaultValue;
      if (props?.onChange) props.onChange(defaultValue);
    }
  }, [defaultValue]);

  const isTypePassword: boolean = type === 'password';

  const prefixCls: string = 'input';

  const classes: string = classNames(
    prefixCls,
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-${type}`]: type,
    },
    className,
  );

  const handleClick = () => {
    if (disabled) {
      return;
    }

    onClick && onClick();
  };

  const handleBlur = () => {
    if (type === 'number') {
      const inputValue: number = inputRef?.current?.value;

      const minNumber: number = (rest as any)?.min;
      const maxNumber: number = (rest as any)?.max;

      if (minNumber && minNumber > inputValue) {
        // Set number value to min if value less than min number
        inputRef.current.value = minNumber;
      }

      if (maxNumber && maxNumber < inputValue) {
        // Set number value to max if value greater than max number
        inputRef.current.value = maxNumber;
      }
    }
  };

  const srcEyePassword = (): string => {
    let src: string = '/assets/images/ic-eye-hide.svg';

    if (isVisibleEye) {
      src = '/assets/images/ic-eye.svg';
    }

    return src;
  };

  const handleToggleEyes = () => toggleEye();

  const implicitType = (): InputProps['type'] => {
    if (isTypePassword) {
      if (isVisibleEye) {
        return 'text';
      }

      return 'password';
    }

    return type;
  };

  const handleClickLabel = () => inputRef?.current?.focus?.();

  const blockInvalidCharNumber: string[] = ['e', 'E', '+', '-'];

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (type === 'number') {
      const isBlockChar: boolean = blockInvalidCharNumber.includes(event.key);

      if (isBlockChar) {
        return event.preventDefault();
      }
    }
  };

  return (
    <div className={`${classes} ${styles.wrapperInput}`}>
      {label && type !== 'hidden' && (
        <Text
          type="body-p1-regular"
          color="neutral-150"
          className={styles.inputLabel}
          onClick={handleClickLabel}
          align="left"
        >
          {label}
        </Text>
      )}
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <input
          ref={inputRef}
          type={implicitType()}
          disabled={disabled}
          placeholder={placeholder}
          onClick={handleClick}
          onBlur={handleBlur}
          maxLength={maxLength}
          onKeyDown={onKeyDown}
          {...rest}
        />
        {labelBehind && type !== 'hidden' && (
          <Text
            type="body-p1-regular"
            color="neutral-150"
            className={styles.inputLabelBehind}
            onClick={handleClickLabel}
            align="left"
          >
            {labelBehind}
          </Text>
        )}
      </div>

      {isTypePassword && !disabled && (
        <img
          className={classNames('mask-password', { ['with-label']: label })}
          alt="password"
          src={srcEyePassword()}
          onClick={handleToggleEyes}
        />
      )}

      {suffix && (
        <div className={classNames('icon-suffix', { ['with-label']: label })}>
          {suffix}
        </div>
      )}
    </div>
  );
});

export default Input;
