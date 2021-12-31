import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import 'rc-checkbox/assets/index.css';
import Text from '../Text';
interface StepProps {
  className?: string;
  step?: number;
  disabled?: boolean;
  label?: string;
}
const Step = React.forwardRef((props: StepProps, ref: any) => {
  const { className, step, disabled = false, label, ...rest } = props;

  const classes: string = classNames(styles.default, className);

  return (
    <div className={styles.Stepwrapper}>
      <div>
        <div className={styles.StepBorderDashed}>
          <div className={styles.StepBorderViolet}>
            <Text type="heading-p1-bold" color="neutral-100">
              {step}
            </Text>
          </div>
        </div>
        <Text type="subheading-p1-bold" color="neutral-100">
          {label}
        </Text>
      </div>
      <div></div>
    </div>
  );
});

export default React.memo(Step);
