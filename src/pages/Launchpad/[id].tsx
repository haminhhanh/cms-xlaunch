import React, { useState } from 'react';
import styles from './index.less';
import Text from '@/components/Text';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Progress from '@/components/Progress';
import { useIntl } from 'umi';
import Time from './Time';
import StatusWhiteList from './StatusWhiteList';
import CheckRobot from '@/components/CheckRobot';
import DetailLaunchpadInfo from './detailLaunchpadInfo';

function LaunchPadDetail() {
  const intl = useIntl();
  const [activeTab, setActiveTab] = useState('pool');
  const [stepTab, setStepTab] = useState('Approve');
  const infoLaunch = {
    pool: {
      title: 'Pool Information',
      content: [
        {
          key: 'Token Distribution',
          value: 'Claim',
        },
        {
          key: 'Total Funds Claimed',
          value: 'Claim',
        },
        {
          key: 'Total Users Participated',
          value: 'Claim',
        },
        {
          key: 'Hard Cap',
          value: 'Claim',
        },
        {
          key: 'Access Type',
          value: 'Claim',
        },
      ],
    },
    Token: {
      title: 'Token Information',
      content: [
        {
          key: 'Name',
          value: 'Claim',
        },
        {
          key: 'Address',
          value: 'Claim',
        },
        {
          key: 'Total Supple',
          value: 'Claim',
        },
        {
          key: 'Decimals',
          value: 'Claim',
        },
        {
          key: 'Symbol',
          value: 'Claim',
        },
      ],
    },
    Swap: {
      title: 'Swap Info',
      content: [
        {
          key: 'Allocation',
          value: 'Claim',
        },
        {
          key: 'Have Bought',
          value: 'Claim',
        },
        {
          key: 'Remaining',
          value: 'Claim',
        },
      ],
    },
  };
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
                <img src="/assets/images/logoSale.png" alt="logosale" />
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
          {activeTab === 'pool' ? (
            <div className={styles.content}>
              <DetailLaunchpadInfo info={infoLaunch.pool} />
              <DetailLaunchpadInfo info={infoLaunch.Token} />
            </div>
          ) : (
            <div className={styles.content}>
              <DetailLaunchpadInfo info={infoLaunch.Swap} />
              <div className={styles.DetailLaunchpadInfo}>
                <div className={styles.bodyStep}>
                  <div className={styles.tabStep}>
                    <button
                      className={
                        stepTab === 'Approve'
                          ? styles.tabStepItemActive
                          : styles.tabStepItem
                      }
                      onClick={() => setStepTab('Approve')}
                    >
                      <Text
                        type="body-p1-bold"
                        color={
                          stepTab === 'Approve' ? 'neutral-100' : 'neutral-200'
                        }
                      >
                        Step 1: Approve
                      </Text>
                    </button>
                    <button
                      className={
                        stepTab === 'Claim'
                          ? styles.tabStepItemActive
                          : styles.tabStepItem
                      }
                      onClick={() => setStepTab('Claim')}
                    >
                      <Text
                        type="body-p1-bold"
                        color={
                          stepTab === 'Claim' ? 'neutral-100' : 'neutral-200'
                        }
                      >
                        Step 2: Claim
                      </Text>
                    </button>
                  </div>
                  <div className={styles.inputWrapper}>
                    <div className={styles.label}>
                      <Text type="body-p1-bold" color="neutral-100">
                        Your Wallet Balance
                      </Text>
                      <Text type="body-p2-regular" color="neutral-150">
                        ( Balance: 100 USDT )
                      </Text>
                    </div>
                    <div className={styles.input}>
                      <Input placeholder="0.0" label="Enter BUSD amount" />
                    </div>
                    <div className={styles.minMax}>
                      <Text type="body-p2-bold" color="neutral-100">
                        Min: 0.25 USDT
                      </Text>
                      <Text type="body-p2-bold" color="neutral-100">
                        Max: 0.25 USDT
                      </Text>
                    </div>
                    <Text
                      type="body-p2-regular"
                      color="neutral-100"
                      className={styles.textNote}
                    >
                      You need to Approve once ( and only once ) before you can
                      start swapping
                    </Text>
                  </div>
                  {stepTab === 'Claim' ? <CheckRobot /> : null}
                  <div className={styles.button}>
                    <Button
                      type={stepTab === 'Approve' ? 'secondary' : 'disabled'}
                    >
                      Approve
                    </Button>
                    <Button
                      type={stepTab === 'Claim' ? 'secondary' : 'disabled'}
                    >
                      Claim
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LaunchPadDetail;
