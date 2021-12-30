import React from 'react';
import Text from '../../components/Text';
import styles from './index.less';

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerFlex}>
        <div className={styles.copyright}>
          <Text type="body-p1-regular" color="neutral-100">
            Copyright © 2021 Staking. All rights reserved.
          </Text>
        </div>
        <div className={styles.footerContact}>
          <div className={styles.footerContactIcon}>
            <span className={styles.icon}>
              <img src="/assets/images/ic-telegram.svg" alt="telegram" />
            </span>
            <span className={styles.text}>
              <a href="#">
                <Text type="body-p1-regular" color="neutral-100">
                  Join us on Telegram
                </Text>
              </a>
            </span>
          </div>
          <div className={styles.footerContactIcon}>
            <span className={styles.icon}>
              <img src="/assets/images/_x30_4.Twitter.svg" alt="twitter" />
            </span>
            <span className={styles.text}>
              <a href="#">
                <Text type="body-p1-regular" color="neutral-100">
                  Follow our Twitter
                </Text>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
