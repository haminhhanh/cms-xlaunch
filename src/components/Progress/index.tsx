import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import 'rc-checkbox/assets/index.css';
import Text from '../Text';
interface ProgressProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  percent?: number;
}
const Progress = React.forwardRef((props: ProgressProps, ref: any) => {
  const { className, label, disabled = false, percent = 100, ...rest } = props;

  const classes: string = classNames(styles.default, className);

  return (
    <div className={styles.wrapperProgress}>
      <div
        className={
          percent === 0
            ? styles.progress0
            : percent === 40
            ? styles.progress40
            : styles.progress100
        }
      />
    </div>
  );
});

export default React.memo(Progress);
