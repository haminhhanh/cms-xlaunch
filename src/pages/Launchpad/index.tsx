import styles from './index.less';
import Text from '@/components/Text';
import React, { useState, useEffect } from 'react';
import { useWalletInfo } from '@/utils/hooks/connect/wallet';
import Button from '@/components/Button';
import DetailGroupSale from './DetailGroupSale';
import { api } from '@/utils/apis';

export default function LaunchpadPage() {
  const [activeTab, setActiveTab] = useState('next-ido');
  const walletInfo = useWalletInfo();
  const [listLaunch, setListLaunch] = useState([]);
  useEffect(() => {
    api
      .get('/launch')
      .then(function (response: any) {
        setListLaunch(response);
      })
      .catch(function (error: any) {
        console.log('error', error);
      });
  }, []);

  return (
    <div className={styles.wrapperLaunch}>
      <div className={styles.heading}>
        <div className={styles.left}>
          <div className={styles.title}>Agile Launchpad</div>
          <Text
            color="neutral-200"
            type="body-p1-regular"
            className={styles.text}
          >
            Agile LaunchPad projects are carefully chosen through vetting, which
            takes everything from the origins of the project teams to legitimacy
            and implementation capacities into account
          </Text>
          <Button>Apply for IDO</Button>
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
                    {walletInfo?.balance}
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
        {listLaunch.map((item: any) => {
          return (
            <div className={styles.ListGroupSaleItem} key={item.id}>
              <DetailGroupSale
                dataLaunch={item}
                percent={
                  activeTab === 'past-ido'
                    ? 100
                    : activeTab === 'open-ido'
                    ? 0
                    : undefined
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
