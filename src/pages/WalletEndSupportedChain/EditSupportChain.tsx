import React from 'react';
import Text from '@/components/Text';
import styles from './index.less';
import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import PaginationPage from '@/components/Pagination';
import { Link } from 'umi';

function EditSupportChain() {
  const columns = [
    {
      title: 'ID',
    },
    {
      title: 'Network name',
    },
    {
      title: 'Symbol',
    },
    {
      title: 'Actions',
    },
  ];
  const dataListUser = [
    {
      id: '123',
      network: '123455',
      symbol: '1241414',
    },
    {
      id: '123',
      network: '123455',
      symbol: '1241414',
    },
    {
      id: '123',
      network: '123455',
      symbol: '1241414',
    },
    {
      id: '123',
      network: '123455',
      symbol: '1241414',
    },
    {
      id: '123',
      network: '123455',
      symbol: '1241414',
    },
  ];
  const onChangePage = () => {};
  return (
    <div className={`${styles.EditSupportChain} main`}>
      <Breadcrumb>Edit Supported Chain</Breadcrumb>
      <div className={`${styles.EditSupportChainTop} header`}>
        <div className={`${styles.button} button`}>
          <Link to="/create-support-chain">
            <Button>Add Networks</Button>
          </Link>
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
                      {item.network}
                    </Text>
                  </th>
                  <th>
                    <Text type="body-p1-regular" color="neutral-100">
                      {item.symbol}
                    </Text>
                  </th>
                  <th>
                    <div className="groupAction">
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
        <div className="Pagination">
          <PaginationPage total={10} pageSize={3} onChange={onChangePage} />
        </div>
      </div>
    </div>
  );
}

export default EditSupportChain;
