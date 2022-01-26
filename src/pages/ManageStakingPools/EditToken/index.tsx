import React from 'react';
import Text from '@/components/Text';
import styles from './index.less';
import InputSearch from '@/components/InputSearch';
import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import PaginationPage from '@/components/Pagination';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Link } from 'umi';

function EditToken() {
  const columns = [
    {
      title: 'ID',
    },
    {
      title: 'Token',
    },
    {
      title: 'APR',
    },
    {
      title: 'Lock-up term',
    },
    {
      title: 'Status',
    },
    {
      title: 'Actions',
    },
  ];
  const dataListUser = [
    {
      id: '123',
      token: '123455',
      apr: '1241414',
      LockUp: '1414141',
      status: 'dqrwrw',
    },
    {
      id: '123',
      token: '123455',
      apr: '1241414',
      LockUp: '1414141',
      status: 'dqrwrw',
    },
    {
      id: '123',
      token: '123455',
      apr: '1241414',
      LockUp: '1414141',
      status: 'dqrwrw',
    },
    {
      id: '123',
      token: '123455',
      apr: '1241414',
      LockUp: '1414141',
      status: 'dqrwrw',
    },
    {
      id: '123',
      token: '123455',
      apr: '1241414',
      LockUp: '1414141',
      status: 'dqrwrw',
    },
    {
      id: '123',
      token: '123455',
      apr: '1241414',
      LockUp: '1414141',
      status: 'dqrwrw',
    },
  ];
  const onChangePage = () => {};
  return (
    <div className={styles.EditTokenWrapper}>
      <Breadcrumb>Edit Token in Staking Pools</Breadcrumb>
      <div className={styles.EditTokenTop}>
        <div className={styles.button}>
          <Link to="/create-token">
            <Button>Add LaunchPad</Button>
          </Link>
        </div>
        <div className={styles.InputSearch}>
          <InputSearch />
        </div>
        <div className={styles.filter}>
          <FilterListIcon sx={{ fontSize: 35, cursor: 'pointer' }} />
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
                      {item.token}
                    </Text>
                  </th>

                  <th>
                    <Text type="body-p1-regular" color="neutral-100">
                      {item.apr}
                    </Text>
                  </th>
                  <th>
                    <Text type="body-p1-regular" color="neutral-100">
                      {item.LockUp}
                    </Text>
                  </th>
                  <th>
                    <Text type="body-p1-regular" color="neutral-100">
                      {item.status}
                    </Text>
                  </th>
                  <th>
                    <div className={styles.groupAction}>
                      <Button type="action">
                        <Text type="body-p2-regular" color="neutral-100">
                          Delete
                        </Text>
                      </Button>
                      <Button type="action">
                        <Text type="body-p2-regular" color="neutral-100">
                          Edit
                        </Text>
                      </Button>
                    </div>
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

export default EditToken;
