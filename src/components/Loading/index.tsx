import React from 'react';
import cls from 'classnames';
import './index.less';
interface ILoading {
  chkLoading: boolean;
  className?: string;
}
const Loading = (props: ILoading) => {
  const { chkLoading, className } = props;

  if (!chkLoading) {
    return null;
  }

  return (
    <div className={cls(['loading', className])}>
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default React.memo(Loading);
