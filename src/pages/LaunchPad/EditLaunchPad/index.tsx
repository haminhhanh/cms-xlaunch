import React from 'react';
import Text from '@/components/Text';
import styles from './index.less';
import InputSearch from '@/components/InputSearch';
import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import PaginationPage from '@/components/Pagination';
import { Link } from 'umi';

function EditLaunchPad() {
  const columns = [
    {
      title: 'ID',
    },
    {
      title: 'Project name',
    },
    {
      title: 'Token',
    },
    {
      title: 'IDO Time',
    },
    {
      title: 'Update time',
    },
    {
      title: 'Actions',
    },
  ];
  const dataListUser = [
    {
      id: '123',
      name: 'aaaa',
      token: '123455',
      idoTime: '1241414',
      upDateTime: '1414141',
    },
    {
      id: '123',
      name: 'aaaa',
      token: '123455',
      idoTime: '1241414',
      upDateTime: '1414141',
    },
    {
      id: '123',
      name: 'aaaa',
      token: '123455',
      idoTime: '1241414',
      upDateTime: '1414141',
    },
    {
      id: '123',
      name: 'aaaa',
      token: '123455',
      idoTime: '1241414',
      upDateTime: '1414141',
    },
    {
      id: '123',
      name: 'aaaa',
      token: '123455',
      idoTime: '1241414',
      upDateTime: '1414141',
    },
    {
      id: '123',
      name: 'aaaa',
      token: '123455',
      idoTime: '1241414',
      upDateTime: '1414141',
    },
  ];
  const onChangePage = () => {};
  return (
    <div className={styles.EditLaunchPadWrapper}>
      <Breadcrumb>Edit LaunchPad</Breadcrumb>
      <div className={styles.EditLaunchPadTop}>
        <div className={styles.button}>
          <Button>
            <Link to="/create-launchPad">Add LaunchPad</Link>
          </Button>
        </div>
        <div className={styles.InputSearch}>
          <InputSearch />
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
                      {item.token}
                    </Text>
                  </th>
                  <th>
                    <Text type="body-p1-regular" color="neutral-100">
                      {item.idoTime}
                    </Text>
                  </th>
                  <th>
                    <Text type="body-p1-regular" color="neutral-100">
                      {item.upDateTime}
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

export default EditLaunchPad;
