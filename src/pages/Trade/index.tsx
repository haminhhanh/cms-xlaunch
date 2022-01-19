import Button from '@/components/Button';
import RcCheckBox from '@/components/Checkbox';
import FormItem from '@/components/FormItem';
import Input from '@/components/Input';
import Form from 'rc-field-form';
import { useRef } from 'react';
import styles from './index.less';

export default function TradePage() {
  const [form] = Form.useForm();
  const refFieldCheckbox = useRef();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onFieldsChange = () => {
    const checkbox = form.getFieldValue('change');
    if (checkbox !== refFieldCheckbox.current) {
      refFieldCheckbox.current = checkbox;

      const priceToken1 = form.getFieldValue('priceToken1');
      const priceToken2 = form.getFieldValue('priceToken2');
      console.log({
        priceToken1,
        priceToken2,
      });

      form.setFieldsValue({
        priceToken1: priceToken2,
        priceToken2: priceToken1,
      });
    }
  };

  return (
    <div className={styles.tradePageBody}>
      <h1>Swap</h1>
      <Form onFinish={onFinish} form={form} onFieldsChange={onFieldsChange}>
        <div>
          <div>
            <h4>Exchange</h4>
            <p>Trade tokens in an instant</p>
          </div>

          <div>
            <img src="/assets/images/ic-settings.svg" alt="" />
            <img src="/assets/images/ic-reload.svg" alt="" />
          </div>
        </div>

        <FormItem dependencies={['priceToken2']}>
          {(props: any) => {
            return (
              <FormItem
                name="priceToken1"
                shouldUpdate={(prevValue: any, nextValue: any) =>
                  prevValue.priceToken2 !== nextValue.priceToken2
                }
              >
                <Input
                  label="Token 1"
                  placeholder={'token1'}
                  defaultValue={props?.value?.priceToken2 || 0}
                />
              </FormItem>
            );
          }}
        </FormItem>

        <div>
          <FormItem name="change">
            <RcCheckBox />
          </FormItem>
          <img src="/assets/images/ic-arrow-swap.svg" alt="" />
        </div>

        <FormItem dependencies={['priceToken1']}>
          {(props: any) => {
            console.log(props?.value?.priceToken1);

            return (
              <FormItem
                name="priceToken2"
                shouldUpdate={(prevValue: any, nextValue: any) =>
                  prevValue.priceToken1 !== nextValue.priceToken1
                }
              >
                <Input
                  label="Token 2"
                  placeholder={'token2'}
                  defaultValue={props?.value?.priceToken1 || 0}
                />
              </FormItem>
            );
          }}
        </FormItem>

        <Button>Unlock Wallet</Button>
      </Form>
    </div>
  );
}
