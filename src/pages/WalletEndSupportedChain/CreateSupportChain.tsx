import React, { useEffect } from 'react';
import styles from './index.less';
import Breadcrumb from '@/components/Breadcrumb';
import Text from '@/components/Text';
import Input from '@/components/Input';
import Button from '@/components/Button';
import UploadImage from '@/components/UploadImage';
import FormItem from '@/components/FormItem';
import Form from 'rc-field-form';
import { api } from '@/utils/apis';
import ToastError from '@/components/ToastMessage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateSupportChain() {
  const onFinish = (value: any) => {
    console.log('value', value.chain_name);
    api
      .post('/chain', {
        data: {
          chain_name: value.chain_name,
          chain_url: value.chain_url,
          chain_rpc_url: value.chain_rpc_url,
          chain_hash_id: value.chain_hash_id,
          chain_symbol: value.chain_symbol,
          chain_id: value.chain_id,
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
    <div className={styles.CreateSupportChain}>
      <Form onFinish={onFinish}>
        <ToastError />

        <Breadcrumb>Add Supported Chain</Breadcrumb>
        <Text
          type="subheading-p1-bold"
          color="neutral-200"
          className={styles.title}
        >
          Supported Chain Information
        </Text>
        <div className={styles.UploadImage}>
          <FormItem>
            <UploadImage />
          </FormItem>
        </div>

        <div>
          <FormItem
            name="chain_name"
            rules={[{ required: true, message: 'Required' }]}
          >
            <Input label="Network Name" />
          </FormItem>
          <FormItem name="chain_symbol">
            <Input label="Symbol" />
          </FormItem>
          <FormItem name="chain_id">
            <Input label="Chain ID" />
          </FormItem>
          <FormItem name="chain_rpc_url">
            <Input label="New RPC URL" />
          </FormItem>
          <FormItem name="chain_url">
            <Input label="Block Explorer URL" />
          </FormItem>
          <FormItem name="chain_hash_id">
            <Input label="Chain Hash Id" />
          </FormItem>

          <div className={styles.submit}>
            <Button>Add supported chain</Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default CreateSupportChain;
