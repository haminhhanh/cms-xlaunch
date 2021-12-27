export default interface IconI {
  icon:
    | 'account'
    | 'activity'
    | 'arrow-down'
    | 'arrow-left'
    | 'bnb'
    | 'check-box-no-select'
    | 'check-box'
    | 'close'
    | 'eye'
    | 'eye-hide'
    | 'fire'
    | 'info'
    | 'inventory'
    | 'link'
    | 'log-out'
    | 'search'
    | 'success'
    | 'warning';
  color?: string;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
  [name: string]: any;
}
