import React, { useState } from 'react';
import styles from './index.less';
import Step from './Step';
import Text from '@/components/Text';
import TableStack from './TableStack';

export default function IDOPoolPage() {
  const [activeTab, setActiveTab] = useState('Live');

  return (
    <div className={styles.IDOPoolPage}>
      <Text type="heading-p1-bold" color="gradient" className={styles.title}>
        Step to Stake
      </Text>
      <Step />
      <div className={styles.tabWrapper}>
        <div className={styles.tab}>
          <div className={styles.tabLaunch}>
            <button
              className={
                activeTab === 'Live' ? styles.tabButtonActive : styles.tabButton
              }
              onClick={() => setActiveTab('Live')}
            >
              <Text type="body-p1-bold" color="primary-violet">
                Live
              </Text>
            </button>
            <button
              className={
                activeTab === 'Finished'
                  ? styles.tabButtonActive
                  : styles.tabButton
              }
              onClick={() => setActiveTab('Finished')}
            >
              <Text type="body-p1-bold" color="primary-violet">
                Finished
              </Text>
            </button>
          </div>
        </div>
        <div className={styles.switch}></div>
        <Text type="body-p1-regular" color="neutral-100">
          My Staking Pools
        </Text>
      </div>
      <div className={styles.table}>
        <TableStack />
        <TableStack />
      </div>
    </div>
  );
}
