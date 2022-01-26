import React from 'react';
import styles from './index.less';
import Breadcrumb from '@/components/Breadcrumb';
import Text from '@/components/Text';
import Input from '@/components/Input';
import Button from '@/components/Button';
import UploadImage from '@/components/UploadImage';

function CreactToken() {
  return (
    <form className={styles.CreactToken}>
      <Breadcrumb>Create Token</Breadcrumb>
      <Text
        type="subheading-p1-bold"
        color="neutral-200"
        className={styles.title}
      >
        Token Information
      </Text>
      <div className={styles.UploadImage}>
        <UploadImage />
      </div>

      <div>
        <Input label="Token name" />
        <Input label="Token Symbol" />
        <div className={styles.flex}>
          <Input label="APR" className={styles.flexInput} labelBehind="USDT" />
          <Input label="Lock-up term" className={styles.flexInput} />
        </div>
        <Input label="Total Blocks" />
        <Input label="Link Token project" />
        <Input label="Link Contract" />
        <div className={styles.submit}>
          <Button>Add Token</Button>
        </div>
      </div>
    </form>
  );
}

export default CreactToken;
