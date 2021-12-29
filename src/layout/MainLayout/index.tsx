import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

import styles from './index.less';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
