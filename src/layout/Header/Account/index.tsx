import React from 'react';
import Text from '@/components/Text';
import styles from './index.less';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import { Link } from 'umi';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import 'rc-menu/assets/index.css';

const onClick = () => {};

function Account() {
  return (
    <div className={styles.SideBarWrapper}>
      <Menu
        mode="horizontal"
        onClick={onClick}
        className={styles.menuSideBar}
        triggerSubMenuAction="click"
      >
        <SubMenu
          title={
            <AccountCircleIcon
              sx={{ fontSize: 35, cursor: 'pointer' }}
              className="submenu-title-wrapper"
            />
          }
          key="1"
        >
          <MenuItem key="1-1">
            <Link to="/">
              <Text type="subheading-p1-regular" color="neutral-100">
                Admin account
              </Text>
            </Link>
          </MenuItem>
          <MenuItem key="1-1">
            <Text type="subheading-p1-regular" color="neutral-100">
              Log out
            </Text>
          </MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default Account;
