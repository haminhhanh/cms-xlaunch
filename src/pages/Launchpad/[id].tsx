import React from 'react';
import styles from './index.less';
import Text from '@/components/Text';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Progress from '@/components/Progress';
import { useIntl } from 'umi';
import Time from './Time';

function LaunchPadDetail() {
  const intl = useIntl();
  return (
    <div className={styles.wrapperLaunchDetail}>
      <div className={styles.wrapperLaunchDetailTop}>
        <div className={styles.left}>
          <div className={styles.logoTitle}>
            <div className={styles.logo}>
              <img src="/assets/images/logoSale.svg" />
            </div>
            <div className={styles.titleLaunchDetail}>
              <div className={styles.text}>
                <Text type="heading-p3-bold" color="neutral-100">
                  Luna Rush - Private
                </Text>
              </div>

              <Button type="comming">
                <Text type="body-p2-regular" color="neutral-100">
                  Coming
                </Text>
              </Button>
            </div>
          </div>
          <div className={styles.text}>
            <Text type="body-p1-regular" color="neutral-150">
              Luna Rush is an Anime-style casual hanging-up game, an incremental
              game about strategy. Each character in the game is made in detail.
              Flamboyant effects and ultimate weapon guaranteed to make you
              addicted.
            </Text>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.swap}>
            <div className={styles.titleSwap}>
              <Text type="body-p1-regular" color="neutral-150">
                Swap Amount
              </Text>
              <Text type="body-p1-bold" color="neutral-100">
                1 LUS = TBA BUSD
              </Text>
            </div>
            <div className={styles.content}>
              <Text type="heading-p2-bold" color="neutral-100">
                0 LUS
              </Text>
            </div>
          </div>
          <div className={styles.progess}>
            <div className={styles.titleProgess}>
              <Text type="body-p1-regular" color="neutral-150">
                Progress
              </Text>
            </div>
            <div className={styles.content}>
              <Progress />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperLaunchDetailContent}>
        <div className={styles.openIn}>
          <div className={styles.openInTitle}>
            <Text type="heading-p3-bold" color="yellow">
              {intl.formatMessage({
                id: 'Open-in',
              })}
            </Text>
          </div>
          <Time type="opent" />
        </div>
        <div className={styles.Investment}>
          <div className={styles.InvestmentHeader}>
            <Text type="heading-p3-bold" color="neutral-100">
              Your Investment
            </Text>
          </div>
          <div className={styles.InvestmentContent}>
            <div className={styles.InvestmentContentItem}>
              <div className={styles.InvestmentTitle}>
                <Text type="body-p1-regular" color="neutral-150">
                  Your Tokens
                </Text>
              </div>
              <Text type="subheading-p1-bold" color="neutral-100">
                0.00
              </Text>
            </div>
            <div className={styles.InvestmentContentItem}>
              <div className={styles.InvestmentTitle}>
                <Text type="body-p1-regular" color="neutral-150">
                  Token Claimed
                </Text>
              </div>
              <Text type="subheading-p1-bold" color="neutral-100">
                0.00
              </Text>
            </div>
            <div className={styles.InvestmentContentItem}>
              <div className={styles.InvestmentTitle}>
                <Text type="body-p1-regular" color="neutral-150">
                  Funds needed
                </Text>
              </div>
              <Text type="subheading-p1-bold" color="neutral-100">
                0.000000 BUSD
              </Text>
            </div>
          </div>
        </div>
        <div className={styles.Available}>
          <div className={styles.AvailableTitle}>
            <Text type="heading-p3-bold" color="green">
              Available for
            </Text>
          </div>
          <div className={styles.AvailableContent}>
            <div className={styles.AvailableTime}>
              <Time type="available" />
            </div>
            <div className={styles.AvailableDate}>
              <Text type="body-p1-regular" color="neutral-150">
                September 15 / 2021 16:30:00 UTC
              </Text>
            </div>
            <div className={styles.AvailableMinMax}>
              <div className={styles.AvailableMinMaxItem}>
                <span>
                  <Text type="body-p1-bold" color="neutral-150">
                    Min:
                  </Text>
                </span>
                <span style={{ marginLeft: 5 }}>
                  <Text type="body-p1-bold" color="neutral-150">
                    0.25 BNB
                  </Text>
                </span>
              </div>
              <div className={styles.AvailableMinMaxItem}>
                <span>
                  <Text type="body-p1-bold" color="neutral-150">
                    Max:
                  </Text>
                </span>
                <span style={{ marginLeft: 5 }}>
                  <Text type="body-p1-bold" color="neutral-150">
                    0.25 BNB
                  </Text>
                </span>
              </div>
            </div>
            <div className={styles.AvailableInput}>
              <Input label="Enter BNB amount" placeholder="0.0" type="number" />
            </div>
            <div className={styles.AvailableSubmit}>
              <Button>
                <Text type="body-p1-bold" color="neutral-100">
                  Contribute
                </Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchPadDetail;
