import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import 'rc-checkbox/assets/index.css';
import Text from '@/components/Text';
import Progress from '@/components/Progress';
import Button from '@/components/Button';
import { Link } from 'umi';

interface DetailGroupSaleProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  percent?: number;
  id?: any;
}
const DetailGroupSale = React.forwardRef(
  (props: DetailGroupSaleProps, ref: any) => {
    const {
      className,
      label,
      disabled = false,
      percent = 0,
      id,
      ...rest
    } = props;

    const classes: string = classNames(styles.default, className);

    return (
      <div className={styles.DetailGroupSaleWrapper}>
        <div className={styles.DetailGroupSaleHeader}>
          <div className={styles.flex}>
            <img src="/assets/images/logoSale.png" />
            <div className={styles.lunaRush}>
              <Text
                type="heading-p3-bold"
                color="neutral-100"
                className={styles.TextlunaRush}
              >
                Luna Rush
              </Text>
              <div className={styles.buttonLusBush}>
                <button className={styles.buttonLus}>
                  <Text type="body-p1-bold" color="neutral-100">
                    LUS / BUSD
                  </Text>
                </button>
                <button className={styles.buttonLus}>
                  <Text type="body-p1-bold" color="neutral-100">
                    LUS
                  </Text>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.iconLink}>
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
        <div className={styles.DetailGroupSaleBody}>
          <div className={styles.DetailGroupSaleBodyItem}>
            <Text type="body-p1-bold" color="neutral-100">
              1 LUS = TBA BUSD
            </Text>
          </div>
          <div className={styles.DetailGroupSaleBodyItem}>
            <Text
              type="body-p1-regular"
              color="neutral-150"
              className={styles.title}
            >
              Total raise
            </Text>
            <Text
              type="heading-p2-bold"
              color="neutral-100"
              className={styles.content}
            >
              0 BUSD
            </Text>
          </div>
          <div className={styles.DetailGroupSaleBodyItem}>
            <Text
              type="body-p1-regular"
              color="neutral-150"
              className={styles.title}
            >
              Progress
            </Text>
            <div className={styles.progress}>
              <Progress />
            </div>
          </div>
          <div className={styles.flexBetween}>
            <div>
              <Text type="body-p1-regular" className={styles.title}>
                Open in
              </Text>
              <Text type="body-p1-bold" color="neutral-100">
                5 days: 22h : 53m : 5s
              </Text>
            </div>
            <Link to={`/launchpad/${id}`}>
              <Button type="primary" className={styles.buttonDetail}>
                View Detail
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  },
);

export default React.memo(DetailGroupSale);
