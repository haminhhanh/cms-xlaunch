import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { useConfig } from '@/utils/hooks/config';
import { useProvider } from '@/utils/hooks/connect';
import SideBar from '../SideBar';
import Footer from '../Footer';
import Header from '../Header';
import styles from './index.less';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useConfig();
  const [opentMenu, setOpentMenu] = useState(true);
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
      <div className={opentMenu ? styles.SideBarActive : styles.SideBar}>
        <SideBar />
      </div>

      <div
        className={
          opentMenu ? styles.LayoutContentActive : styles.LayoutContent
        }
      >
        <div className={styles.header}>
          <button
            className={styles.icon}
            onClick={() => setOpentMenu(!opentMenu)}
          >
            {opentMenu ? (
              <MenuIcon sx={{ fontSize: 35 }} />
            ) : (
              <MenuOpenIcon sx={{ fontSize: 35 }} />
            )}
          </button>
          <Header />
        </div>
        <div className={styles.children}>{children}</div>
        <Footer />
      </div>
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
