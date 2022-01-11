import React, { useState } from 'react';
import styles from './index.less';
import Text from '@/components/Text';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Progress from '@/components/Progress';
import { useIntl } from 'umi';
import Time from './Time';
import StatusWhiteList from './StatusWhiteList';

function LaunchPadDetail() {
  const intl = useIntl();
  const [activeTab, setActiveTab] = useState('pool');
  return (
    <div className={styles.wrapperLaunchDetail}>
      <div className={styles.launchDetailContent}>
        <div className={styles.wrapperLaunchDetailLeft}>
          <StatusWhiteList />
          <div className={styles.progress}>
            <div className={styles.progressItemActive}>
              <div className={styles.UPCOMING}>
                <Text
                  type="body-p1-bold"
                  color="neutral-100"
                  className={styles.heading}
                >
                  UPCOMING
                </Text>
                <Text
                  type="body-p2-regular"
                  color="neutral-150"
                  className={styles.titleText}
                >
                  Whitelist Period
                </Text>
                <div className={styles.time}>
                  <div className={styles.timeItem}>
                    <Text type="body-p2-regular" color="neutral-150">
                      From
                    </Text>
                    <Text type="body-p2-bold" color="neutral-100">
                      12:00 AM, 08 Dec 2021
                    </Text>
                  </div>
                  <div className={styles.timeItem}>
                    <Text type="body-p2-regular" color="neutral-150">
                      To
                    </Text>
                    <Text type="body-p2-bold" color="neutral-100">
                      12:00 AM, 14 Dec 2021
                    </Text>
                  </div>
                </div>
                <div className={styles.timeJoin}>
                  <Text
                    type="body-p2-regular"
                    color="neutral-100"
                    className={styles.titleText}
                  >
                    Start to join Whitelist in
                  </Text>
                  <Time />
                </div>
              </div>
            </div>
            <div className={styles.progressItem}>
              <Text
                type="body-p1-bold"
                color="neutral-100"
                className={styles.heading}
              >
                CLAIMABLE
              </Text>
              <Text type="body-p2-regular" color="neutral-150">
                05:00 Pm, 16 May 2021
              </Text>
            </div>
            <div className={styles.progressItem}>
              <Text
                type="body-p1-bold"
                color="neutral-100"
                className={styles.heading}
              >
                END
              </Text>
            </div>
          </div>
        </div>
        <div className={styles.wrapperLaunchDetailRight}>
          <div className={styles.heading}>
            <div className={styles.link}>
              <div className={styles.logo}>
                <img src="/assets/images/logoSale.svg" alt="logosale" />
                <div>
                  <Text type="heading-p2-bold" color="neutral-100">
                    Luna Rush
                  </Text>
                  <button className={styles.button}>
                    <Text type="body-p1-bold" color="neutral-100">
                      Pool Detail
                    </Text>
                  </button>
                </div>
              </div>
              <div className={styles.iconLink}>
                <a href="#">
                  <img src="/assets/images/ic-link.svg" />
                </a>
                <a href="#">
                  <img src="/assets/images/ic-telegram.svg" />
                </a>
                <a href="#">
                  <img src="/assets/images/Twitter.svg" />
                </a>
              </div>
            </div>
            <div className={styles.tab}>
              <div className={styles.tabLaunch}>
                <button
                  className={
                    activeTab === 'pool'
                      ? styles.tabButtonActive
                      : styles.tabButton
                  }
                  onClick={() => setActiveTab('pool')}
                >
                  <Text type="body-p1-bold" color="primary-violet">
                    Pool Details
                  </Text>
                </button>
                <button
                  className={
                    activeTab === 'claim'
                      ? styles.tabButtonActive
                      : styles.tabButton
                  }
                  onClick={() => setActiveTab('claim')}
                >
                  <Text type="body-p1-bold" color="primary-violet">
                    Claim
                  </Text>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.contentItem}>
              <div className={styles.headingBackground}>
                <Text type="body-p1-bold" color="neutral-100">
                  Pool Information
                </Text>
              </div>
              <div className={styles.body}>
                <div className={styles.item}>
                  <Text type="body-p1-regular" color="neutral-150">
                    Token Distribution
                  </Text>
                  <Text type="body-p1-bold" color="neutral-100">
                    Claim
                  </Text>
                </div>
                <div className={styles.item}>
                  <Text type="body-p1-regular" color="neutral-150">
                    Total Funds Swapped
                  </Text>
                  <Text type="body-p1-bold" color="neutral-100">
                    Claim
                  </Text>
                </div>
                <div className={styles.item}>
                  <Text type="body-p1-regular" color="neutral-150">
                    Total Users Participated
                  </Text>
                  <Text type="body-p1-bold" color="neutral-100">
                    Claim
                  </Text>
                </div>
                <div className={styles.item}>
                  <Text type="body-p1-regular" color="neutral-150">
                    Hard Cap
                  </Text>
                  <Text type="body-p1-bold" color="neutral-100">
                    Claim
                  </Text>
                </div>
                <div className={styles.item}>
                  <Text type="body-p1-regular" color="neutral-150">
                    Access Type
                  </Text>
                  <Text type="body-p1-bold" color="neutral-100">
                    Claim
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.contentItem}>
              <div className={styles.headingBackground}>
                <Text type="body-p1-bold" color="neutral-100">
                  Token Information
                </Text>
              </div>
              <div className={styles.body}>
                <div className={styles.item}>
                  <Text type="body-p1-regular" color="neutral-150">
                    Name
                  </Text>
                  <Text type="body-p1-bold" color="neutral-100">
                    Claim
                  </Text>
                </div>
                <div className={styles.item}>
                  <Text type="body-p1-regular" color="neutral-150">
                    Address
                  </Text>
                  <Text type="body-p1-bold" color="neutral-100">
                    Claim
                  </Text>
                </div>
                <div className={styles.item}>
                  <Text type="body-p1-regular" color="neutral-150">
                    Total Supple
                  </Text>
                  <Text type="body-p1-bold" color="neutral-100">
                    Claim
                  </Text>
                </div>
                <div className={styles.item}>
                  <Text type="body-p1-regular" color="neutral-150">
                    Decimals
                  </Text>
                  <Text type="body-p1-bold" color="neutral-100">
                    Claim
                  </Text>
                </div>
                <div className={styles.item}>
                  <Text type="body-p1-regular" color="neutral-150">
                    Symbol
                  </Text>
                  <Text type="body-p1-bold" color="neutral-100">
                    Claim
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchPadDetail;
