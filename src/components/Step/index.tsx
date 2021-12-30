import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import 'rc-checkbox/assets/index.css';
import Text from '../Text';
interface StepProps {
  className?: string;
  label?: string;
  disabled?: boolean;
}
const Step = React.forwardRef((props: StepProps, ref: any) => {
  const { className, label, disabled = false, ...rest } = props;

  const classes: string = classNames(styles.default, className);

  return (
    <div className={styles.Stepwrapper}>
      <div className={styles.StepBorderDashed}>
        <div className={styles.StepBorderViolet}>
          <Text type="heading-p1-bold" color="neutral-100">
            {label}1
          </Text>
        </div>
      </div>
    </div>
  );
});

export default React.memo(Step);
