import styles from './index.less';
import '@/global/theme.less';
import Text from '@/components/Text';
import Button from '@/components/Button';
import Breadcrumb from '@/components/Breadcrumb';

export default function IndexPage() {
  const dashboard = [
    {
      name: 'Total users',
      value: '1000',
    },
    {
      name: 'Total launchpads',
      value: '1000',
    },
    {
      name: 'Total transactions',
      value: '1000',
    },
  ];
  return (
    <div className={styles.dashboard}>
      <Breadcrumb>Dashboard</Breadcrumb>
      <div className={styles.dashboardInfo}>
        {dashboard.map((item) => {
          return (
            <div className={styles.dashboardItem} key={item.name}>
              <Text
                type="subheading-p1-regular"
                className={styles.label}
                color="neutral-200"
              >
                {item.name}
              </Text>
              <Text
                type="heading-p2-bold"
                color="neutral-100"
                className={styles.text}
              >
                {item.value}
              </Text>
              <Button type="primary">
                <Text type="body-p1-regular" color="neutral-100">
                  Read more
                </Text>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
