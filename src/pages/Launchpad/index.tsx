import styles from './index.less';
import Text from '@/components/Text';
import ListGroupSale from '../Launchpad/ListGroupSale';
import React, { useState } from 'react';

export default function LaunchpadPage() {
  const [activeTab, setActiveTab] = useState('next-ido');
  return (
    <div className={styles.wrapperLaunch}>
      <div className={styles.heading}>
        <div className={styles.left}>
          <div className={styles.title}>Agile Launchpad</div>
          <Text color="neutral-200" type="body-p1-regular">
            Agile LaunchPad projects are carefully chosen through vetting, which
            takes everything from the origins of the project teams to legitimacy
            and implementation capacities into account
          </Text>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <span>
              <Text color="neutral-100" type="subheading-p1-bold">
                Wallet Address:
              </Text>
            </span>
            <span className={styles.itemContent}>
              <img src="/assets/images/ic-copy.svg" alt="copy" />
            </span>
          </div>
          <div className={styles.flex}>
            <div className={styles.leftContent}>
              <div className={styles.item}>
                <span className={styles.itemTitle}>
                  <Text color="neutral-100" type="subheading-p1-bold">
                    Balance:
                  </Text>
                </span>
                <span className={styles.itemContent}>
                  <Text color="primary-violet" type="subheading-p1-bold">
                    0
                  </Text>
                </span>
              </div>
              <div className={styles.item}>
                <span className={styles.itemTitle}>
                  <Text color="neutral-100" type="subheading-p1-bold">
                    Staking:
                  </Text>
                </span>
                <span className={styles.itemContent}>
                  <Text color="primary-violet" type="subheading-p1-bold">
                    0
                  </Text>
                </span>
              </div>
              <div className={styles.item}>
                <span className={styles.itemTitle}>
                  <Text color="neutral-100" type="subheading-p1-bold">
                    Current tier:
                  </Text>
                </span>
                <span className={styles.itemContent}>
                  <Text color="primary-violet" type="subheading-p1-bold">
                    N/A
                  </Text>
                </span>
              </div>
            </div>
            <div className={styles.rightContent}>
              <div>
                <div className={styles.item}>
                  <span className={styles.itemTitle}>
                    <Text color="neutral-100" type="subheading-p1-bold">
                      NFT Boost:
                    </Text>
                  </span>
                  <span className={styles.itemContent}>
                    <Text color="primary-violet" type="subheading-p1-bold">
                      No
                    </Text>
                  </span>
                </div>
                <div className={styles.item}>
                  <span className={styles.itemTitle}>
                    <Text color="neutral-100" type="subheading-p1-bold">
                      Staking Boost:
                    </Text>
                  </span>
                  <span className={styles.itemContent}>
                    <Text color="primary-violet" type="subheading-p1-bold">
                      0
                    </Text>
                  </span>
                </div>
                <div className={styles.item}>
                  <span className={styles.itemTitle}>
                    <Text color="neutral-100" type="subheading-p1-bold">
                      Additional Pool Weight:
                    </Text>
                  </span>
                  <span className={styles.itemContent}>
                    <Text color="primary-violet" type="subheading-p1-bold">
                      N/A
                    </Text>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tabLaunch}>
        <button
          className={
            activeTab === 'next-ido' ? styles.tabButtonActive : styles.tabButton
          }
          onClick={() => setActiveTab('next-ido')}
        >
          <Text type="body-p1-bold" color="primary-violet">
            Next IDO
          </Text>
        </button>
        <button
          className={
            activeTab === 'open-ido' ? styles.tabButtonActive : styles.tabButton
          }
          onClick={() => setActiveTab('open-ido')}
        >
          <Text type="body-p1-bold" color="primary-violet">
            Open IDOs
          </Text>
        </button>
        <button
          className={
            activeTab === 'past-ido' ? styles.tabButtonActive : styles.tabButton
          }
          onClick={() => setActiveTab('past-ido')}
        >
          <Text type="body-p1-bold" color="primary-violet">
            Past IDOs
          </Text>
        </button>
      </div>
      <div className={styles.ListGroupSale}>
        <div className={styles.ListGroupSaleItem}>
          <ListGroupSale id={1} />
        </div>
        <div className={styles.ListGroupSaleItem}>
          <ListGroupSale id={2} />
        </div>
      </div>
    </div>
  );
}
