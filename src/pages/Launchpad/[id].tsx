import React, { useState, useEffect } from 'react';
import styles from './index.less';
import Text from '@/components/Text';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useIntl } from 'umi';
import Time from './Time';
import StatusWhiteList from './StatusWhiteList';
import CheckRobot from '@/components/CheckRobot';
import DetailLaunchpadInfo from './detailLaunchpadInfo';
import { useLocation } from 'umi';
import { api } from '@/utils/apis';
import dayjs from 'dayjs';
import { useMount } from '@umijs/hooks';

function LaunchPadDetail() {
  const intl = useIntl();
  const [activeTab, setActiveTab] = useState('pool');
  const [stepTab, setStepTab] = useState('Approve');
  const dataLaunch: any = useLocation();
  const idLaunch = dataLaunch?.state?.dataDetailLaunch?.id;
  const timeAll = dataLaunch?.state?.time;
  const timeApplyWhiteList = dataLaunch?.state?.timeApplyWhiteList;
  const [getAllToken, setAllToken]: any = useState([]);
  const getToken = getAllToken?.find(
    (item: any) => item.launch_id === idLaunch,
  );
  const [joinWhiteList, setJoinWhiteList]: any = useState();
  const now = dayjs(new Date());

  useMount(() => {
    if (
      now.isBefore(dayjs(timeApplyWhiteList?.open_date)) ||
      now.isBefore(dayjs(timeAll?.open_date))
    ) {
      setJoinWhiteList('notOpen');
    } else if (
      now.isAfter(dayjs(timeApplyWhiteList?.close_date)) ||
      now.isAfter(dayjs(timeAll?.close_date))
    ) {
      setJoinWhiteList('notOpenPast');
    } else if (
      now.isAfter(dayjs(timeApplyWhiteList?.open_date)) &&
      now.isBefore(dayjs(timeAll?.close_date))
    ) {
      setJoinWhiteList('open');
    }
  });

  const titleTimeSchedule = (status: any) => {
    switch (status) {
      case 'notOpenNow':
        return 'Start to join Whitelist in';
      case 'notOpenPast':
        return 'End to join Whitelist in';
      case 'open':
        return 'End to join Whitelist in';
      case 'applieWhiteList':
        return 'Whitelist result announced in';
      case 'winWhiteList':
        return 'Token Claimed in';
      case 'notWinWhiteList':
        return 'Token Claimed in';
      default:
        'Token Claimed start in';
    }
  };

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
          value: getToken?.token_name,
        },
        {
          key: 'Address',
          value: getToken?.token_address,
        },
        {
          key: 'Total Supple',
          value: getToken?.total_supply,
        },
        {
          key: 'Decimals',
          value: getToken?.decimals,
        },
        {
          key: 'Symbol',
          value: getToken?.token_symbol,
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

  useEffect(() => {
    api
      .get('/token')
      .then(function (response: any) {
        setAllToken(response);
      })
      .catch(function (error: any) {});
  }, []);

  return (
    <div className={styles.wrapperLaunchDetail}>
      <div className={styles.launchDetailContent}>
        <div className={styles.wrapperLaunchDetailLeft}>
          <StatusWhiteList
            status={joinWhiteList}
            changeStatus={setJoinWhiteList}
          />
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
                      {dayjs(timeApplyWhiteList?.open_date).format(
                        ' h:mm A, D MMM YYYY',
                      )}
                    </Text>
                  </div>
                  <div className={styles.timeItem}>
                    <Text type="body-p2-regular" color="neutral-150">
                      To
                    </Text>
                    <Text type="body-p2-bold" color="neutral-100">
                      {dayjs(new Date(timeApplyWhiteList?.close_date)).format(
                        ' h:mm A, D MMM YYYY',
                      )}
                    </Text>
                  </div>
                </div>
                <div className={styles.timeJoin}>
                  <Text
                    type="body-p2-regular"
                    color="neutral-100"
                    className={styles.titleText}
                  >
                    {titleTimeSchedule(joinWhiteList)}
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
