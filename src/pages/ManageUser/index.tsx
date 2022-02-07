import React from 'react';
import Text from '../../components/Text';
import styles from './index.less';
import InputSearch from '@/components/InputSearch';
import Breadcrumb from '@/components/Breadcrumb';
import FilterListIcon from '@mui/icons-material/FilterList';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import PaginationPage from '@/components/Pagination';
import Filter from '@/components/Filter';

function ManageUser() {
  const columns = [
    {
      title: 'ID',
    },
    {
      title: 'Full name',
    },
    {
      title: 'Wallet Address',
    },
    {
      title: 'KYC Status',
    },
    {
      title: 'Action',
    },
  ];
  const dataListUser = [
    {
      id: '123',
      name: 'aaaa',
      addressWallet: '123455',
      status: false,
    },
    {
      id: '123',
      name: 'aaaa',
      addressWallet: '123455',
      status: true,
    },
    {
      id: '123',
      name: 'aaaa',
      addressWallet: '123455',
      status: true,
    },
    {
      id: '123',
      name: 'aaaa',
      addressWallet: '123455',
      status: true,
    },
    {
      id: '123',
      name: 'aaaa',
      addressWallet: '123455',
      status: true,
    },
    {
      id: '123',
      name: 'aaaa',
      addressWallet: '123455',
      status: true,
    },
  ];
  const onChangePage = () => {};
  return (
    <div className={styles.ManageUserWrapper}>
      <Breadcrumb>Users List</Breadcrumb>
      <div className={styles.ManageUserTop}>
        <div className={styles.InputSearch}>
          <InputSearch />
        </div>

        <div className={styles.filter}>
          <Filter />
        </div>
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            {columns.map((item: any, index) => {
              return (
                <th>
                  <Text type="body-p1-bold" color="neutral-200">
                    {item.title}
                  </Text>
                </th>
              );
            })}
          </thead>
          <tbody>
            {dataListUser.map((item, index) => {
              return (
                <tr key={index}>
                  <th>
                    <Text type="body-p1-regular" color="neutral-100">
                      {item.id}
                    </Text>
                  </th>
                  <th>
                    <Text type="body-p1-regular" color="neutral-100">
                      {item.name}
                    </Text>
                  </th>
                  <th>
                    <Text type="body-p1-regular" color="neutral-100">
                      {item.addressWallet}
                    </Text>
                  </th>
                  <th>
                    <Text type="body-p1-regular" color="neutral-100">
                      {item.status ? (
                        <DoneIcon sx={{ fontSize: 35 }} color="primary" />
                      ) : (
                        <CloseIcon sx={{ fontSize: 35 }} />
                      )}
                    </Text>
                  </th>
                  <th>
                    <button>
                      <Text type="body-p2-regular" color="neutral-100">
                        Details
                      </Text>
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={styles.Pagination}>
          <PaginationPage total={10} pageSize={3} onChange={onChangePage} />
        </div>
      </div>
    </div>
  );
}

export default ManageUser;
