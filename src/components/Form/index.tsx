import { Field } from 'rc-field-form';
import React from 'react';
import Text from '../Text';
import styles from './index.less';

interface FormItemProps {
  children: any;
  name?: string | number;
  hideError?: boolean;
  [k: string]: any;
  className?: string;
}

const FormItem = ({
  children,
  className,
  hideError = false,
  ...props
}: FormItemProps) => {
  return (
    <Field {...props}>
      {({ onChange, value, ...rest }, meta, context) => {
        const { errors } = meta;

        const hasError: string = errors && errors[0];

        if (typeof children === 'function') {
          return (
            <div
              className={`${styles.formItemContainer} ${
                className ? className : ''
              }`}
            >
              <div>
                {children(
                  { onChange, value, meta, hasError, ...rest },
                  context,
                )}
              </div>
              {!hideError && hasError && (
                <Text type="body-p2-regular" className={styles.txtFormError}>
                  {hasError}
                </Text>
              )}
            </div>
          );
        }

        return (
          <div className={`${styles.formItemContainer} ${className}`}>
            <div>
              {React.cloneElement(children, {
                onChange,
                value,
                ...rest,
                ...children.props,
              })}
            </div>

            {!hideError && hasError && (
              <Text type="body-p2-regular" className={styles.txtFormError}>
                {hasError}
              </Text>
            )}
          </div>
        );
      }}
    </Field>
  );
};

export default FormItem;
