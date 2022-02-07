import React from 'react';
import classNames from 'classnames';
import FilterListIcon from '@mui/icons-material/FilterList';
import Text from '../Text';
import styles from './index.less';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';

interface FilterProps {
  className?: string;
  label?: string;
  defaultChecked?: boolean;
  value?: boolean;
  onChange?: (value: any) => void;
}
const Filter = React.forwardRef((props: FilterProps, ref: any) => {
  const {
    className,
    label,
    defaultChecked = false,
    value = false,
    onChange,
    ...rest
  } = props;

  const classes: string = classNames(styles.default, className);
  const onClick = () => {};

  const menuFilter = [
    {
      title: 'Newest',
    },
    {
      title: 'Lastest',
    },
    {
      title: 'Have KYC',
    },
    {
      title: 'Haven’t KYC',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.filter}>
        <Menu
          mode="inline"
          onClick={onClick}
          expandIcon={
            <FilterListIcon sx={{ fontSize: 35, cursor: 'pointer' }} />
          }
          className={className}
        >
          <SubMenu>
            {menuFilter.map((item, index) => {
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
  );
});

export default Filter;
