import 'rc-dialog/assets/index.css';
import 'rc-checkbox/assets/index.css';
import styles from './index.less';
import '@/global/theme.less';
import Step from '@/components/Step';
import Card from '@/components/Card';
import Progress from '@/components/Progress';
import DetailGroupSale from '@/components/DetailGroupSale';
import ListGroupSale from '@/components/ListGroupSale';
import Text from '@/components/Text';

export default function IndexPage() {
  return (
    <div className={styles.home}>
      <div className={styles.landingPage}>
        <div className={styles.backgroundImg}>
          <div className={styles.container}>
            <div className={styles.backgroundLogo}>
              <img src="/assets/images/home-logo.png" />
            </div>
            <div className={styles.AboutUs}>
              <div className={styles.header}>
                <img src="/assets/images/ABOUTUS.png" />
                <div className={styles.title}>About us</div>
              </div>
              <div className={styles.content}>
                <div className={styles.item}>
                  <Text type="body-p1-regular" color="neutral-100">
                    WHAT IS AGILE PAD?
                  </Text>
                  <Text type="body-p1-regular" color="neutral-100">
                    The Agile Launch Pad is a decentralized IDO platform for the
                    Binance Smart Chain Network. ABPad will empower crypto
                    currency projects with the ability to distribute tokens and
                    raise liquidity.
                  </Text>
                </div>
                <div className={styles.item}>
                  <Text type="body-p1-regular" color="neutral-100">
                    WHY CHOOSE US?
                  </Text>
                  <Text type="body-p1-regular" color="neutral-100">
                    AgilePad is creating fair decentralized launches, you can
                    choose between a lottery tier or a guaranteed allocation
                    tier and if you win the lottery you get a guaranteed
                    allocation to participate in our IDO system. We are based on
                    a first-come-first-serve basis where automated bots can fill
                    the whitelist spots in a matter of seconds.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backgroundColor} />
      <div className={styles.content}>
        <div className={styles.step}>
          <div className={styles.header}>
            <div>
              <img src="/assets/images/STEP.svg" />
            </div>
            <div className={styles.title}>Step</div>
          </div>
          <div className={styles.listStep}>
            <Step label="Connect Wallet, KYC" step={1} />
            <Step label="Swap" step={2} />
            <Step label="Stake to IDO Pools" step={3} />
            <Step label="Launchpad" step={4} />
            <Step label="Claim" step={5} />
          </div>
        </div>
      </div>

      {/* <Step /> */}
      {/* <Card />
      <Progress />
      <DetailGroupSale />
      <ListGroupSale /> */}
    </div>
  );
}
