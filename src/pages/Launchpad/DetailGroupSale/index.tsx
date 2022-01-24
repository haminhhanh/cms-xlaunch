import React, { useEffect, useState } from 'react';
import styles from './index.less';
import classNames from 'classnames';
import 'rc-checkbox/assets/index.css';
import Text from '@/components/Text';
import Progress from '@/components/Progress';
import Button from '@/components/Button';
import { Link } from 'umi';
import { useSaleCountdown } from '@/utils/hooks/sale';
import { api } from '@/utils/apis';
import dayjs from 'dayjs';

interface DetailGroupSaleProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  activeTab?: string;
  id?: any;
  dataLaunch: any;
}
const DetailGroupSale = React.forwardRef(
  (props: DetailGroupSaleProps, ref: any) => {
    const {
      className,
      label,
      disabled = false,
      activeTab,
      dataLaunch,
      id,
      ...rest
    } = props;
    const classes: string = classNames(styles.default, className);
    const now = dayjs(new Date());
    const open_date = new Date(
      new Date(dataLaunch?.open_date).getTime() - 7 * 60 * 60 * 1000,
    );
    const close_date = new Date(
      new Date(dataLaunch?.close_date).getTime() - 7 * 60 * 60 * 1000,
    );
    const time = () => {
      if (now.isBefore(dayjs(open_date))) {
        return {
          startDate: now,
          endDate: open_date,
        };
      } else {
        return {
          startDate: open_date,
          endDate: close_date,
        };
      }
    };
    const { remain } = useSaleCountdown(time());
    const [getSchedule, setSchedule]: any = useState([]);
    const openApplyWhiteList = new Date(
      new Date(getSchedule[0]?.open_date).getTime() - 7 * 60 * 60 * 1000,
    );
    const closeApplyWhiteList = new Date(
      new Date(getSchedule[0]?.close_date).getTime() - 7 * 60 * 60 * 1000,
    );
    useEffect(() => {
      api
        .get(`/schedule/launch/${dataLaunch.id}`)
        .then(function (response: any) {
          setSchedule(response);
        })
        .catch(function (error: any) {});
    }, []);

    // mock data

    const timeWhiteListResult = new Date('2022-01-26T18:00:34.571');
    const timeTokenClaimedIn = new Date('2022-01-26T18:30:34.571');
    const timeTokenClaimedEndIn = new Date('2022-28-19T22:05:34.571');

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
            <a href={dataLaunch?.web_link} target="_blank">
              <img src="/assets/images/ic-link.svg" />
            </a>
            <a href={dataLaunch?.twitter_link} target="_blank">
              <img src="/assets/images/Twitter.svg" />
            </a>
            <a href={dataLaunch?.telegram_link} target="_blank">
              <img src="/assets/images/ic-telegram.svg" />
            </a>
          </div>
        </div>
        <div className={styles.DetailGroupSaleBody}>
          <div className={styles.DetailGroupSaleBodyItem}>
            <Text type="body-p1-bold" color="neutral-100">
              {`${dataLaunch?.rate}LUS =TBA BUSD`}
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
              <Progress
                percent={
                  activeTab === 'next-ido'
                    ? 0
                    : activeTab === 'past-ido'
                    ? 100
                    : 0
                }
              />
            </div>
          </div>
          <div className={styles.flexBetween}>
            {activeTab === 'past-ido' ? null : (
              <div>
                <Text type="body-p1-regular" className={styles.title}>
                  {activeTab === 'next-ido' ? 'Open in' : 'End in'}
                </Text>
                <Text type="body-p1-bold" color="neutral-100">
                  {`${remain.days} days: ${remain.hours}h : ${remain.minutes}m : ${remain.seconds}s`}
                </Text>
              </div>
            )}

            <Link
              to={{
                pathname: `/launchpad/${dataLaunch.id}`,
                state: {
                  dataDetailLaunch: dataLaunch,
                  time: { open_date: open_date, close_date: close_date },
                  timeApplyWhiteList: {
                    open_date: openApplyWhiteList,
                    close_date: closeApplyWhiteList,
                    result_date: timeWhiteListResult,
                  },
                  timeClaimed: {
                    open_date: timeTokenClaimedIn,
                    close_date: timeTokenClaimedEndIn,
                  },
                },
              }}
            >
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
