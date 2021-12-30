import 'rc-dialog/assets/index.css';
import 'rc-checkbox/assets/index.css';
import styles from './index.less';
import '@/global/theme.less';
import Step from '@/components/Step';
import Card from '@/components/Card';
import Progress from '@/components/Progress';
import DetailGroupSale from '@/components/DetailGroupSale';
import ListGroupSale from '@/components/ListGroupSale';

export default function IndexPage() {
  return (
    <div style={{ marginTop: 20, paddingBottom: 200, marginLeft: 20 }}>
      <Step />
      <Card />
      <Progress />
      <DetailGroupSale />
      <ListGroupSale />
    </div>
  );
}
