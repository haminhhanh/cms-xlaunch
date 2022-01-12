import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import 'rc-checkbox/assets/index.css';
import Text from '../Text';
import RcCheckBox from '../Checkbox';

interface CheckRobotProps {
  className?: string;
  step?: number;
  disabled?: boolean;
  label?: string;
}
const CheckRobot = React.forwardRef((props: CheckRobotProps, ref: any) => {
  const { className, step, disabled = false, label, ...rest } = props;

  const classes: string = classNames(styles.default, className);

  return (
    <div className={styles.CheckRobot}>
      <div className={styles.checkbox}>
        <RcCheckBox className={styles.checkboxIcon} label=" I’m not a robot" />
      </div>
      <button className={styles.reload}>
        <img src="/assets/images/ic-reload-robot.svg" />
      </button>
    </div>
  );
});

export default React.memo(CheckRobot);
