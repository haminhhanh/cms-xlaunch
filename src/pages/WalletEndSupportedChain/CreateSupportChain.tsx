import React from 'react';
import styles from './index.less';
import Breadcrumb from '@/components/Breadcrumb';
import Text from '@/components/Text';
import Input from '@/components/Input';
import Button from '@/components/Button';
import UploadImage from '@/components/UploadImage';

function CreateSupportChain() {
  return (
    <form className={styles.CreateSupportChain}>
      <Breadcrumb>Add Supported Chain</Breadcrumb>
      <Text
        type="subheading-p1-bold"
        color="neutral-200"
        className={styles.title}
      >
        Supported Chain Information
      </Text>
      <div className={styles.UploadImage}>
        <UploadImage />
      </div>

      <div>
        <Input label="Network Name" />
        <Input label="Symbol" />

        <Input label="Total Blocks" />
        <Input label="Chain ID" />
        <Input label="New RPC URL" />
        <Input label="Block Explorer URL" />

        <div className={styles.submit}>
          <Button>Add supported chain</Button>
        </div>
      </div>
    </form>
  );
}

export default CreateSupportChain;
