import React from 'react';
import Calendar from 'rc-calendar';
import classNames from 'classnames';
import Text from '../Text';
import styles from './index.less';
import 'rc-calendar/assets/index.css';
import enUS from 'rc-calendar/lib/locale/en_US';

interface CalendarProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  value?: boolean;
  onChange?: (value: any) => void;
}
const RCCalendar = React.forwardRef((props: CalendarProps, ref: any) => {
  const {
    className,
    label,
    disabled = false,
    defaultChecked = false,
    value = false,
    onChange,
    ...rest
  } = props;

  const classes: string = classNames(styles.default, className);

  return (
    <div className={styles.wrapper}>
      <Calendar
        dateInputPlaceholder="please input"
        onChange={onChange}
        locale={enUS}
        showOk={true}
      />
    </div>
  );
});

export default RCCalendar;
