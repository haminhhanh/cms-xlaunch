import React from 'react';
import classNames from 'classnames';
import Text from '../Text';
import styles from './index.less';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-clock/dist/Clock.css';

interface CalendarProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  value?: any;
  onChange?: (value: any) => void;
}
const RCCalendar = React.forwardRef((props: CalendarProps, ref: any) => {
  const {
    className,
    label,
    disabled = false,
    defaultChecked = false,
    value,
    onChange,
    ...rest
  } = props;

  const classes: string = classNames(styles.default, className);

  return (
    <div className={styles.wrapper}>
      <DateTimePicker onChange={onChange} value={value} />
    </div>
  );
});

export default RCCalendar;
