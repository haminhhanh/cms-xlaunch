import styles from './index.less';
import '@/global/theme.less';
import Button from '@/components/Button';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      {/* <Button  type = 'primary'>
        Connect Wallet
      </Button>
      <Button  type = 'secondary'> Connect Wallet</Button>
      <Button  type = 'disabled'>Disable</Button> */}
    </div>
  );
}
