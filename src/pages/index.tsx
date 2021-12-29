import { useState } from 'react';
import { setLocale, useIntl } from 'umi';

import 'rc-dialog/assets/index.css';

import '@/global/theme.less';
import styles from './index.less';

export default function IndexPage() {
  const intl = useIntl();
  console.log(
    process.env.APP__END_POINT,
    process.env.APP__LOGIN_REDIRECT_ENDPOINT,
  );

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1
        className={styles.title}
        onClick={() => {
          setLocale(intl.locale === 'en-US' ? 'zh-CN' : 'en-US');
        }}
      >
        {intl.formatMessage({ id: 'index.hello' }, { name: 'abcd' })}
      </h1>
    </div>
  );
}
