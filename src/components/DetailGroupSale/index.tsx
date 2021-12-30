import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import 'rc-checkbox/assets/index.css';
import Text from '../Text';
import Progress from '@/components/Progress';
import Button from '@/components/Button';

interface DetailGroupSaleProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  percent?: number;
}
const DetailGroupSale = React.forwardRef(
  (props: DetailGroupSaleProps, ref: any) => {
    const {
      className,
      label,
      disabled = false,
      percent = 100,
      ...rest
    } = props;

    const classes: string = classNames(styles.default, className);

    return (
      <div className={styles.DetailGroupSaleWrapper}>
        <div className={styles.DetailGroupSaleHeader}>
          <div>
            <Text type="heading-p3-bold" color="neutral-100">
              Private
            </Text>
          </div>
          <div className={styles.flex}>
            <button>
              <Text type="body-p2-regular" color="neutral-100">
                Coming
              </Text>
            </button>
            <span>
              <img src="/assets/images/Group.svg" alt="share" />
            </span>
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

            <Text type="body-p1-bold" color="neutral-100" align="right">
              {percent === 0 ? '0%' : percent === 40 ? '40%' : '100%'}
            </Text>
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
            <div>
              <Button type="primary" className={styles.buttonDetail}>
                View Detail
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default React.memo(DetailGroupSale);
