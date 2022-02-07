import React, { useEffect } from 'react';
import styles from './index.less';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import Text from '../../components/Text';

function Header() {
  const onClick = () => {};
  const menuProfile = [
    {
      title: 'Admin account',
    },
    {
      title: 'Log out',
    },
  ];

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.menuProfile}>
          <Menu
            mode="inline"
            onClick={onClick}
            expandIcon={
              <AccountCircleIcon sx={{ fontSize: 35, cursor: 'pointer' }} />
            }
          >
            <SubMenu>
              {menuProfile.map((item, index) => {
                return (
                  <MenuItem key={index}>
                    <Text type="body-p2-bold" color="neutral-100">
                      {item.title}
                    </Text>
                  </MenuItem>
                );
              })}
            </SubMenu>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
