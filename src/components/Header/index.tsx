import React from 'react';
import Text from '../Text';
import styles from './index.less';

interface HeaderProps {
  className?: string;
}

const Header = React.forwardRef((props: HeaderProps, ref: any) => {
  const { className } = props;
  return (
    <div>
      <div></div>
    </div>
  );
});
