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
import Progress from '@/components/Progress';

function LaunchPadDetail() {
  const intl = useIntl();
  const [activeTab, setActiveTab] = useState('pool');
  const [stepTab, setStepTab] = useState('Approve');
  const dataLaunch: any = useLocation();
  const idLaunch = dataLaunch?.state?.dataDetailLaunch?.id;
  const timeAllOpent = dataLaunch?.state?.time.open_date;
  const timeAllClose = dataLaunch?.state?.time.close_date;
  const timeCloseWhiteList = dataLaunch?.state?.timeApplyWhiteList.close_date;
  const timeOpentWhiteList = dataLaunch?.state?.timeApplyWhiteList.open_date;
  const timeWhiteListResult = dataLaunch?.state?.timeApplyWhiteList.result_date;
  const timeTokenClaimedIn = dataLaunch?.state?.timeClaimed.open_date;
  const timeTokenClaimedEndIn = dataLaunch?.state?.timeClaimed.close_date;

  const [getAllToken, setAllToken]: any = useState([]);
  const getToken = getAllToken?.find(
    (item: any) => item.launch_id === idLaunch,
  );
  const [joinWhiteList, setJoinWhiteList]: any = useState();
  const now = dayjs(new Date());

  useMount(() => {
    if (
      now.isBefore(dayjs(timeOpentWhiteList)) ||
      now.isBefore(dayjs(timeAllOpent))
    ) {
      setJoinWhiteList('notOpen');
    } else if (
      now.isAfter(dayjs(timeOpentWhiteList)) &&
      now.isBefore(dayjs(timeCloseWhiteList))
    ) {
      setJoinWhiteList('open');
    } else if (
      now.isAfter(dayjs(timeCloseWhiteList)) &&
      now.isBefore(dayjs(timeWhiteListResult))
    ) {
      setJoinWhiteList('applieWhiteList');
    } else if (
      now.isAfter(dayjs(timeWhiteListResult)) &&
      now.isBefore(dayjs(timeTokenClaimedIn))
    ) {
      setJoinWhiteList('winWhiteList');
    } else if (
      now.isAfter(dayjs(timeTokenClaimedIn)) &&
      now.isBefore(dayjs(timeTokenClaimedEndIn))
    ) {
      setJoinWhiteList('tokenClaimedEndIn');
    } else if (
      now.isAfter(dayjs(timeTokenClaimedEndIn)) ||
      now.isAfter(dayjs(timeAllClose))
    ) {
      setJoinWhiteList('closeOpen');
    }
  });

  const titleTimeSchedule = (status: any) => {
    switch (status) {
      case 'notOpenNow':
        return 'Start to join Whitelist in';
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
  console.log('joinWhiteList', joinWhiteList);

  return (
    <div className={styles.wrapperLaunchDetail}>
      <div className={styles.launchDetailContent}>
        <div className={styles.wrapperLaunchDetailLeft}>
          <StatusWhiteList
            status={joinWhiteList}
            changeStatus={setJoinWhiteList}
          />
          <div className={styles.progress}>
            <div
              className={
                joinWhiteList === 'tokenClaimedEndIn' ||
                joinWhiteList === 'closeOpen'
                  ? styles.progressItem
                  : styles.progressItemActive
              }
            >
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
                      {dayjs(timeOpentWhiteList).format(' h:mm A, D MMM YYYY')}
                    </Text>
                  </div>
                  <div className={styles.timeItem}>
                    <Text type="body-p2-regular" color="neutral-150">
                      To
                    </Text>
                    <Text type="body-p2-bold" color="neutral-100">
                      {dayjs(new Date(timeCloseWhiteList)).format(
                        ' h:mm A, D MMM YYYY',
                      )}
                    </Text>
                  </div>
                </div>
                {joinWhiteList === 'tokenClaimedEndIn' ||
                joinWhiteList === 'closeOpen' ? null : (
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
                )}
              </div>
            </div>

            <div
              className={
                joinWhiteList === 'tokenClaimedEndIn'
                  ? styles.progressItemActive
                  : styles.progressItem
              }
            >
              <div>
                <Text
                  type="body-p1-bold"
                  color="neutral-100"
                  className={styles.heading}
                >
                  CLAIMABLE
                </Text>

                {joinWhiteList === 'tokenClaimedEndIn' ||
                joinWhiteList === 'closeOpen' ? (
                  <div>
                    <Text
                      type="body-p2-regular"
                      color="neutral-150"
                      className={styles.text}
                    >
                      Claim Token Period
                    </Text>
                    <Text
                      type="body-p2-regular"
                      color="neutral-100"
                      className={styles.text}
                    >
                      Token Claimed end in
                    </Text>
                    <Time />
                    <div className={styles.progressClaim}>
                      <Text
                        type="body-p2-regular"
                        color="neutral-100"
                        className={styles.text}
                      >
                        Claim Progress
                      </Text>
                      <div className={styles.progressWrapper}>
                        <div
                          className={styles.progressContent}
                          style={{ width: '100%' }}
                        >
                          <div className={styles.progressIcon} />
                        </div>
                      </div>
                      <div className={styles.progressPercent}>
                        <Text type="body-p2-regular" color="neutral-100">
                          100%
                        </Text>
                        <Text type="body-p2-regular" color="neutral-100">
                          1,000,000/1,000,000
                        </Text>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Text type="body-p2-regular" color="neutral-150">
                    05:00 Pm, 16 May 2021
                  </Text>
                )}
              </div>
            </div>
            <div
              className={
                joinWhiteList === 'closeOpen'
                  ? styles.progressItemActive
                  : styles.progressItem
              }
            >
              <div>
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
                <a href="#" target="_blank">
                  <img src="/assets/images/ic-link.svg" />
                </a>
                <a href="#" target="_blank">
                  <img src="/assets/images/ic-telegram.svg" />
                </a>
                <a href="#" target="_blank">
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
