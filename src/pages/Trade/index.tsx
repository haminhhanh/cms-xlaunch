import Button from '@/components/Button';
import RcCheckBox from '@/components/Checkbox';
import FormItem from '@/components/FormItem';
import Input from '@/components/Input';
import Text from '@/components/Text';
import Form from 'rc-field-form';
import { useRef } from 'react';
import styles from './index.less';
import SelectToken from './SelectToken';
import SettingTrade from './setting';
import TransactionTrade from './transaction';

export default function TradePage() {
  const [form] = Form.useForm();
  const refFieldCheckbox = useRef();

  const onFinish = (values: any) => {
    // console.log(values);
  };

  const onFieldsChange = () => {
    const priceToken1 = form.getFieldValue('priceToken1');
    const priceToken2 = form.getFieldValue('priceToken2');
    // console.log({
    //   priceToken1,
    //   priceToken2,
    // });

    form.setFieldsValue({
      priceToken1: priceToken2,
      priceToken2: priceToken1,
    });
  };

  return (
    <div className={styles.tradePageBody}>
      <h1 className={styles.title}>Swap</h1>
      <Form onFinish={onFinish} form={form} onFieldsChange={onFieldsChange}>
        <div className={styles.tradeForm}>
          <div className={styles.tradeFormHeading}>
            <div className={styles.border}>
              <div className={styles.left}>
                <Text type="heading-p2-bold" color="neutral-100">
                  Exchange
                </Text>
                <Text type="body-p1-regular" color="neutral-200">
                  Trade tokens in an instant
                </Text>
              </div>
              <div className={styles.right}>
                <div className={styles.iconSetting}>
                  <SettingTrade />
                </div>
                <TransactionTrade />
              </div>
            </div>
          </div>
          <div className={styles.tradeFormContent}>
            <div className={styles.tradeFormToken}>
              <div className={styles.tradeFormItem}>
                <SelectToken />
              </div>

              <div className={styles.buttonChange}>
                <button>
                  <img src="/assets/images/ic-arrow-swap.svg" alt="" />
                </button>
              </div>
              <div className={styles.tradeFormItem}>
                <SelectToken />
              </div>
            </div>
            <div className={styles.tradeFormInput}>
              <div className={styles.tradeFormItem}>
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
                          label="From"
                          placeholder="0.0"
                          defaultValue={props?.value?.priceToken2 || 0}
                          className={styles.input}
                        />
                      </FormItem>
                    );
                  }}
                </FormItem>
              </div>

              <div className={styles.buttonChange}>
                <button>
                  <img src="/assets/images/ic-arrow-swap.svg" alt="" />
                </button>
              </div>
              <div className={styles.tradeFormItem}>
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
                          label="To"
                          placeholder="0.0"
                          defaultValue={props?.value?.priceToken1 || 0}
                          className={styles.input}
                        />
                      </FormItem>
                    );
                  }}
                </FormItem>
              </div>
            </div>
            <div className={styles.button}>
              <Button>Unlock Wallet</Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
