// import Image from '@/components/Image';
import Loading from '@/components/Loading';
// import Text from '@/components/Text';
import React from 'react';
// import { useIntl } from 'umi';
import styles from './index.less';

const LoadingConfirm = () => {
  // const intl = useIntl();
  return (
    <div className={styles.content}>
      {/* Loading */}
      <Loading chkLoading={true} />
      {/* <Text type="body">{intl.tra}</Text> */}
    </div>
  );
};

export default LoadingConfirm;
