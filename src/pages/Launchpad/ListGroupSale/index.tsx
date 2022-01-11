import React, { useState } from 'react';
import styles from './index.less';
import classNames from 'classnames';
import 'rc-checkbox/assets/index.css';
import Text from '@/components/Text';
import Progress from '@/components/Progress';
import Button from '@/components/Button';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import DetailGroupSale from '@/components/DetailGroupSale';

interface ListGroupSaleProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  id?: any;
}

const ListGroupSale = React.forwardRef(
  (props: ListGroupSaleProps, ref: any) => {
    const { className, label, disabled = false, id, ...rest } = props;
    const [dropdown, setDropdown] = useState(false);

    const classes: string = classNames(styles.default, className);

    const GroupSale = () => (
      <div className={styles.GroupSaleWraper}>
        <div className={styles.GroupSale}>
          <DetailGroupSale id={id} />
        </div>
        <div className={styles.GroupSale}>
          <DetailGroupSale id={id} />
        </div>
        <div className={styles.GroupSale}>
          <DetailGroupSale id={id} />
        </div>
      </div>
    );
    return (
      <div
        className={
          dropdown
            ? styles.ListGroupSaleWrapperDown
            : styles.ListGroupSaleWrapper
        }
      >
        <div style={{ padding: '0px 32px' }}>
          <div className={styles.background}>
            <div className={styles.flexBetween}>
              <div className={styles.flex}>
                <div className={styles.logo}>
                  <img src="/assets/images/logoSale.svg" />
                </div>
                <div className={styles.LunaRush}>
                  <Text type="heading-p3-bold" color="neutral-100">
                    Luna Rush
                  </Text>
                  <div className={styles.icon}>
                    <a href="#">
                      <img src="/assets/images/ic-link.svg" />
                    </a>
                    <a href="#">
                      <img src="/assets/images/Twitter.svg" />
                    </a>
                    <a href="#">
                      <img src="/assets/images/ic-telegram.svg" />
                    </a>
                  </div>
                </div>
                <div className={styles.buttonLusBush}>
                  <button className={styles.buttonLus}>
                    <Text type="body-p1-bold" color="neutral-100">
                      LUS / BUSD
                    </Text>
                  </button>
                </div>

                <button className={styles.buttonLus}>
                  <Text type="body-p1-bold" color="neutral-100">
                    LUS
                  </Text>
                </button>
              </div>
              <div className={styles.dropdown}>
                <button onClick={() => setDropdown(!dropdown)}>
                  <img src="/assets/images/dropdown.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {dropdown ? <GroupSale /> : null}
      </div>
    );
  },
);

export default React.memo(ListGroupSale);
