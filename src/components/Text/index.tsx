import classNames from 'classnames';
import React from 'react';

export interface TextProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type:
    | 'caption-12-light'
    | 'caption-12-regular'
    | 'caption-12-medium'
    | 'caption-12-semi-bold'
    | 'body-14-regular'
    | 'body-14-medium'
    | 'body-14-semi-bold'
    | 'body-16-regular'
    | 'body-16-medium'
    | 'body-16-semi-bold'
    | 'headline-20-regular'
    | 'headline-20-medium'
    | 'headline-20-semi-bold'
    | 'title-24-medium'
    | 'title-24-semi-bold'
    | 'title-30-semi-bold'
    | 'title-38-semi-bold';
  color?:
    | 'primary'
    | 'primary-100'
    | 'primary-200'
    | 'primary-300'
    | 'primary-400'
    | 'primary-500'
    | 'neutral-0'
    | 'neutral-100'
    | 'neutral-200'
    | 'neutral-300'
    | 'secondary-400'
    | 'secondary-500'
    | 'secondary-300'
    | 'secondary-200'
    | 'secondary-100'
    | 'red-500';
  align?: 'left' | 'center' | 'right';
}

const Text = (props: TextProps) => {
  const {
    children,
    className,
    type,
    color = 'neutral-0',
    disabled = false,
    align,
    onClick,
    ...rest
  }: TextProps = props;

  const prefixCls: string = 'txt';

  const classes: string = classNames(
    prefixCls,
    {
      [type]: type,
      [`${prefixCls}-${color}`]: color,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-click`]: !!onClick,
      [`${prefixCls}-${align}`]: align,
    },
    className,
  );

  const handleClick = () => {
    if (disabled) {
      return;
    }

    onClick && onClick();
  };

  return (
    <p className={classes} onClick={handleClick} {...rest}>
      {children}
    </p>
  );
};

export default React.memo(Text);
