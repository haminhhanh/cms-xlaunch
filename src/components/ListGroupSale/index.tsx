import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import 'rc-checkbox/assets/index.css';
import Text from '../Text';
import Progress from '@/components/Progress';
import Button from '@/components/Button';

interface ListGroupSaleProps {
  className?: string;
  label?: string;
  disabled?: boolean;
}
const ListGroupSale = React.forwardRef(
  (props: ListGroupSaleProps, ref: any) => {
    const { className, label, disabled = false, ...rest } = props;
    // const Dropdown = require('rc-dropdown');

    const classes: string = classNames(styles.default, className);

    return (
      <div className={styles.ListGroupSaleWrapper}>
        <div className={styles.background}>
          <div className={styles.backgroundContent}>
            <div className={styles.left}>
              <div></div>
              <div></div>
            </div>
            <div className={styles.dropdown}>{/* <Dropdown /> */}</div>
          </div>
        </div>
      </div>
    );
  },
);

export default React.memo(ListGroupSale);
