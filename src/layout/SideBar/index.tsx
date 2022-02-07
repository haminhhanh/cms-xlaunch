import React from 'react';
import Text from '../../components/Text';
import styles from './index.less';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import 'rc-menu/assets/index.css';
import { Link, useLocation } from 'umi';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import WorkIcon from '@mui/icons-material/Work';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaidIcon from '@mui/icons-material/Paid';
// import SettingsIcon from '@mui/icons-material/Settings';

const linkSideBar = [
  {
    name: 'Dashboard',
    path: '/',
    icon: <DashboardIcon className={styles.icon} />,
  },
  {
    name: 'Manage users',
    path: '/manage-users',
    icon: <ManageAccountsIcon />,
  },
  // {
  //   name: 'Manage project managers',
  //   path: '/manage-project-managers',
  //   icon: <WorkIcon />,
  // },
  // {
  //   name: 'Manage admin',
  //   path: '/manage-admin',
  //   icon: <AdminPanelSettingsIcon />,
  // },
  {
    name: 'Wallet & supported chain',
    path: '/wallet-supported-chain',
    subMenu: [
      { name: 'Add/ delete wallet', path: '/add-delete-wallet' },
      {
        name: 'Add/ delete supported chain',
        path: '/add-delete-supported-chain',
      },
    ],
    icon: <AccountBalanceWalletIcon />,
  },
  {
    name: 'Manage staking pools',
    path: '/manage-staking-pools',
    subMenu: [
      { name: 'Edit step', path: '/edit-step' },
      {
        name: 'Edit token',
        path: '/edit-token',
      },
    ],
    icon: <PaidIcon />,
  },
  {
    name: 'Manage launchPad',
    path: '/manage-launchPad',
    subMenu: [
      { name: 'Create launchPad', path: '/create-launchPad' },
      {
        name: 'Edit launch token',
        path: '/edit-launch-token',
      },
    ],
    icon: <PaidIcon />,
  },
  // {
  //   name: 'Manage transactions',
  //   path: '/manage-transactions',
  //   icon: <PaidIcon />,
  // },
  // {
  //   name: 'Setting',
  //   path: '/setting',
  //   icon: <SettingsIcon />,
  // },
];

function SideBar() {
  const onClick = () => {};
  const location = useLocation();
  console.log('path', location.pathname);

  return (
    <div className={styles.SideBarWrapper}>
      <Menu mode="inline" onClick={onClick} className={styles.menuSideBar}>
        <div className={styles.title}>XLaunchPad</div>
        {linkSideBar.map((item) => {
          if (item?.subMenu) {
            return (
              <SubMenu
                key={item.path}
                title={
                  <div className={styles.menuItem}>
                    <div className={styles.icon}>{item?.icon}</div>
                    <Text
                      type="subheading-p1-regular"
                      color={`${
                        location.pathname === item.path
                          ? 'neutral-100'
                          : 'neutral-200'
                      }`}
                    >
                      {item.name}
                    </Text>
                  </div>
                }
              >
                {item?.subMenu.map((i) => {
                  return (
                    <MenuItem key={i.path}>
                      <Link to={i.path} key={i.path}>
                        <Text
                          type="subheading-p1-regular"
                          color={`${
                            location.pathname === i.path
                              ? 'neutral-100'
                              : 'neutral-200'
                          }`}
                        >
                          {i.name}
                        </Text>
                      </Link>
                    </MenuItem>
                  );
                })}
              </SubMenu>
            );
          } else {
            return (
              <MenuItem key={item.path}>
                <Link
                  to={item.path}
                  key={item.path}
                  className={styles.menuItem}
                >
                  <div className={styles.icon}>{item?.icon}</div>
                  <Text
                    type="subheading-p1-regular"
                    color={`${
                      location.pathname === item.path
                        ? 'neutral-100'
                        : 'neutral-200'
                    }`}
                  >
                    {item.name}
                  </Text>
                </Link>
              </MenuItem>
            );
          }
        })}
      </Menu>
    </div>
  );
}

export default SideBar;
