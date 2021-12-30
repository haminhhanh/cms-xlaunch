import React from 'react';
import { RecoilRoot } from 'recoil';
import { useConfig } from '@/utils/hooks/config';
import { useProvider } from '@/utils/hooks/connect';

import Footer from '../Footer';
import Header from '../Header';

import styles from './index.less';

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useConfig();
  useProvider();

  if (loading) {
    return (
      <div className={styles.main}>
        {/* <Loading /> */}
        Loading...
      </div>
    );
  }

  return (
    <div className={styles.mainLayout}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <Provider>
        <div>{children}</div>
      </Provider>
    </RecoilRoot>
  );
}

export default MainLayout;
