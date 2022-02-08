import React from 'react';
import styles from './index.less';
import Breadcrumb from '@/components/Breadcrumb';
import Text from '@/components/Text';
import Input from '@/components/Input';
import Button from '@/components/Button';
import UploadImage from '@/components/UploadImage';
import Form from 'rc-field-form';
import FormItem from '@/components/FormItem';
import { api } from '@/utils/apis';
import { toast } from 'react-toastify';
import RCCalendar from '@/components/Calendar';

function CreateLaunchPad() {
  const onFinish = (value: any) => {
    console.log('value', value.chain_name);
    api
      .post('/launch', {
        data: {
          open_date: '2022-02-08T07:31:26.234Z',
          close_date: '2022-02-08T07:31:26.234Z',
          web_link: 'string',
          twitter_link: 'string',
          telegram_link: 'string',
          medium_link: 'string',
          cap: 'string',
          rate: 'string',
          swap_token: 'string',
          network_id: 0,
        },
      })
      .then(function (response: any) {
        if (response) {
          console.log('ress', response);
          toast.success('success');
        }
      })
      .catch(function (error: any) {
        if (error) {
          toast.error('fail');
        }
      });
  };
  return (
    <Form className={styles.CreateLaunchPad} onFinish={onFinish}>
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
        <FormItem name="launchPadName">
          <Input label="LaunchPad name" />
        </FormItem>
        <FormItem name="launchPadName">
          <Input label="Token Symbol" />
        </FormItem>

        <div className={styles.flex}>
          <FormItem name="Swap" className={styles.flexInput}>
            <Input label="Swap rate 1 Token Symbol =" labelBehind="USDT" />
          </FormItem>
          <FormItem name="Total" className={styles.flexInput}>
            <Input label="Total raise" labelBehind="Token Symbol" />
          </FormItem>
        </div>
        <div className={styles.flex}>
          <FormItem name="IDOStartTime" className={styles.flexInput}>
            <Input label="IDO Start time" />
          </FormItem>
          <FormItem name="IDOEndTime" className={styles.flexInput}>
            <Input label="IDO End time" />
          </FormItem>
        </div>
        <Text type="body-p1-regular" color="neutral-150">
          Whitelist Period
        </Text>
        <div className={styles.flex}>
          <FormItem name="whitelistStartTime" className={styles.flexInput}>
            <Input label="From" />
          </FormItem>
          <FormItem name="whitelistEndTime" className={styles.flexInput}>
            <Input label="to" />
          </FormItem>
        </div>
        <Text type="body-p1-regular" color="neutral-150">
          Claimable Period
        </Text>
        <div className={styles.flex}>
          <FormItem name="ClaimableStartTime" className={styles.flexInput}>
            <Input label="From" />
          </FormItem>
          <FormItem name="ClaimableEndTime" className={styles.flexInput}>
            <Input label="to" />
          </FormItem>
        </div>
        <div className={styles.button}>
          <Button type="primary">+ Add Period</Button>
        </div>
        <FormItem name="linkProject">
          <Input label="Link project" />
        </FormItem>
        <FormItem name="linkTwitter">
          <Input label="Link Twitter" />
        </FormItem>
        <FormItem name="linkTelegram">
          <Input label="Link Telegram group" />
        </FormItem>
        <FormItem name=" projectInformation">
          <Input label="Project Information" />
        </FormItem>

        <div className={styles.submit}>
          <Button>Add LaunchPad</Button>
        </div>
      </div>
    </Form>
  );
}

export default CreateLaunchPad;
