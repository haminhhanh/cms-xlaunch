import React from 'react';
import styles from './index.less';
import Breadcrumb from '@/components/Breadcrumb';
import Text from '@/components/Text';
import Input from '@/components/Input';
import Button from '@/components/Button';
import UploadImage from '@/components/UploadImage';
import RCCalendar from '@/components/Calendar';

function CreateLaunchPad() {
  return (
    <form className={styles.CreateLaunchPad}>
      <RCCalendar />
      <Breadcrumb>Create LaunchPad</Breadcrumb>
      <Text
        type="subheading-p1-bold"
        color="neutral-200"
        className={styles.title}
      >
        LaunchPad Information
      </Text>
      <div className={styles.UploadImage}>
        <UploadImage />
      </div>

      <div>
        <Input label="LaunchPad name" />
        <Input label="Token Symbol" />
        <div className={styles.flex}>
          <Input
            label="Swap rate 1 Token Symbol ="
            className={styles.flexInput}
            labelBehind="USDT"
          />
          <Input
            label="Total raise"
            className={styles.flexInput}
            labelBehind="Token Symbol"
          />
        </div>
        <div className={styles.flex}>
          <Input label="IDO Start time" className={styles.flexInput} />
          <Input label="IDO End time" className={styles.flexInput} />
        </div>
        <Text type="body-p1-regular" color="neutral-150">
          Whitelist Period
        </Text>
        <div className={styles.flex}>
          <Input label="From" className={styles.flexInput} />
          <Input label="to" className={styles.flexInput} />
        </div>
        <Text type="body-p1-regular" color="neutral-150">
          Claimable Period
        </Text>
        <div className={styles.flex}>
          <Input label="From" className={styles.flexInput} />
          <Input label="to" className={styles.flexInput} />
        </div>
        <div className={styles.button}>
          <Button type="primary">+ Add Period</Button>
        </div>

        <Input label="Link project" />
        <Input label="Link Twitter" />
        <Input label="Link Telegram group" />
        <Input label="Project Information" />
        <div className={styles.submit}>
          <Button>Add LaunchPad</Button>
        </div>
      </div>
    </form>
  );
}

export default CreateLaunchPad;
