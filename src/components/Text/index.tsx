import classNames from 'classnames';
import React from 'react';

export interface TextProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type:
    | 'body-p2-regular'
    | 'body-p2-bold'
    | 'body-p1-regular'
    | 'body-p1-bold'
    | 'subheading-p1-regular'
    | 'subheading-p1-bold'
    | 'heading-p3-bold'
    | 'heading-p2-bold'
    | 'heading-p1-bold'
    | 'text-AgilePad'
    | 'active';
  color?:
    | 'primary-blue'
    | 'primary-violet'
    | 'neutral-600'
    | 'neutral-500'
    | 'neutral-300'
    | 'neutral-200'
    | 'neutral-150'
    | 'neutral-250'
    | 'neutral-400'
    | 'neutral-100'
    | 'gradient'
    | 'green'
    | 'yellow';
  align?: 'left' | 'center' | 'right';
}

const Text = (props: TextProps) => {
  const {
    children,
    className,
    type,
    color = 'neutral-200',
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

export default Text;
