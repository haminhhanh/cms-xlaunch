import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
import 'rc-checkbox/assets/index.css';
import Text from '../Text';
interface CardProps {
  className?: string;
  label?: string;
  disabled?: boolean;
}
const Card = React.forwardRef((props: CardProps, ref: any) => {
  const { className, label, disabled = false, ...rest } = props;

  const classes: string = classNames(styles.default, className);

  return (
    <div className={styles.Cardwrapper}>
      <div className={styles.CardBackground}>
        <div className={styles.Background} />
        <div className={styles.CardContent}>
          <Text type="heading-p2-bold" color="neutral-100">
            Brozen
          </Text>
          <div className={styles.borderBottom}>
            <img src="/assets/images/Line 1.svg" alt="border" />
          </div>
          <div className={styles.CardItem}>
            <Text type="body-p1-regular" className={styles.cardTitle}>
              Staking Requirement
            </Text>
            <Text
              type="subheading-p1-bold"
              color="neutral-100"
              className={styles.cardContent}
            >
              1000
            </Text>
          </div>
          <div className={styles.CardItem}>
            <Text type="body-p1-regular">Staking Length Required</Text>
            <Text type="subheading-p1-bold" color="neutral-100">
              3 hour before Allocation Round opens
            </Text>
          </div>
          <div className={styles.CardItem}>
            <Text type="body-p1-regular">Community Interaction Required</Text>
            <Text type="subheading-p1-bold" color="neutral-100">
              Lorem ipsum dolor
            </Text>
          </div>
          <div className={styles.CardItem}>
            <Text type="body-p1-regular">Lotte Ticket</Text>
            <Text type="subheading-p1-bold" color="neutral-100">
              Lorem ipsum dolor
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
});

export default React.memo(Card);
