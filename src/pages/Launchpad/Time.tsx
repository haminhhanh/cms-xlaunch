import React, { useState } from 'react';
import styles from './index.less';
import classNames from 'classnames';
import Text from '@/components/Text';
import { useSaleCountdown } from '@/utils/hooks/sale';
import { useLocation } from 'umi';
import { api } from '@/utils/apis';
import dayjs from 'dayjs';

interface TimeProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  type?: string;
}
const Time = React.forwardRef((props: TimeProps, ref: any) => {
  const { className, label, disabled = false, type, ...rest } = props;

  const classes: string = classNames(styles.default, className);
  const dataLaunch: any = useLocation();
  const timeAllOpent = dataLaunch?.state?.time.open_date;
  const timeAllClose = dataLaunch?.state?.time.close_date;
  const timeCloseWhiteList = dataLaunch?.state?.timeApplyWhiteList.close_date;
  const timeOpentWhiteList = dataLaunch?.state?.timeApplyWhiteList.open_date;
  const timeTokenClaimedIn = dataLaunch?.state?.timeClaimed.open_date;
  const timeTokenClaimedEndIn = dataLaunch?.state?.timeClaimed.close_date;

  const now = dayjs(new Date());

  const statusWhiteList = () => {
    if (
      now.isBefore(dayjs(timeOpentWhiteList)) ||
      now.isAfter(dayjs(timeCloseWhiteList))
    ) {
      return {
        startDate: timeAllOpent,
        endDate: timeOpentWhiteList,
      };
    } else if (
      now.isAfter(dayjs(timeOpentWhiteList)) &&
      now.isBefore(dayjs(timeCloseWhiteList))
    ) {
      return {
        startDate: timeOpentWhiteList,
        endDate: timeCloseWhiteList,
      };
    } else if (now.isAfter(dayjs(timeCloseWhiteList))) {
      return {
        startDate: new Date(),
        endDate: timeTokenClaimedIn,
      };
    } else if (now.isAfter(dayjs(timeTokenClaimedIn))) {
      return {
        startDate: new Date(),
        endDate: timeTokenClaimedEndIn,
      };
    } else now.isAfter(dayjs(timeTokenClaimedEndIn));
    {
      return {
        startDate: timeTokenClaimedEndIn,
        endDate: timeCloseWhiteList,
      };
    }
  };
  const { remain } = useSaleCountdown(statusWhiteList());

  return (
    <div className={styles.openInTime}>
      <div className={styles.openInTimeItem}>
        <div className={styles.number}>
          <Text
            color={type === 'opent' ? 'yellow' : 'green'}
            type="subheading-p1-bold"
          >
            {remain?.days}
          </Text>
        </div>
        <div className={styles.text}>
          <Text type="body-p2-regular" color="neutral-150">
            Days
          </Text>
        </div>
      </div>
      <div className={styles.openInTimeItem}>
        <div className={styles.number}>
          <Text
            color={type === 'opent' ? 'yellow' : 'green'}
            type="subheading-p1-bold"
          >
            {remain?.hours}
          </Text>
        </div>
        <div className={styles.text}>
          <Text type="body-p2-regular" color="neutral-150">
            Hours
          </Text>
        </div>
      </div>
      <div className={styles.openInTimeItem}>
        <div className={styles.number}>
          <Text
            color={type === 'opent' ? 'yellow' : 'green'}
            type="subheading-p1-bold"
          >
            {remain?.minutes}
          </Text>
        </div>
        <div className={styles.text}>
          <Text type="body-p2-regular" color="neutral-150">
            Minutes
          </Text>
        </div>
      </div>
      <div className={styles.openInTimeItem}>
        <div className={styles.number}>
          <Text
            color={type === 'opent' ? 'yellow' : 'green'}
            type="subheading-p1-bold"
          >
            {remain?.seconds}
          </Text>
        </div>
        <div className={styles.text}>
          <Text type="body-p2-regular" color="neutral-150">
            Seconds
          </Text>
        </div>
      </div>
    </div>
  );
});

export default React.memo(Time);
