export default interface IconI {
  name:
    | 'banner-1'
    | 'bgMain'
    | 'Box-blue'
    | 'Box-green'
    | 'box-package'
    | 'Box-red'
    | 'Box-small-blue'
    | 'Box-small-green'
    | 'Box-small-red'
    | 'Box-small-yellow'
    | 'Box-yellow'
    | 'car'
    | 'ic-arrow'
    | 'ic-bnb-xxl'
    | 'ic-bnb'
    | 'ic-copy'
    | 'ic-error'
    | 'ic-failed'
    | 'ic-filter'
    | 'ic-fire'
    | 'ic-link'
    | 'ic-loader'
    | 'ic-search'
    | 'ic-speed'
    | 'ic-successful'
    | 'ic-total-sale'
    | 'ic-total-sold'
    | 'ic-total-volume-big'
    | 'ic-total-volume'
    | 'ic-view-history'
    | 'info'
    | 'MetaMask'
    | 'success';
  className?: string;
  style?: React.CSSProperties;
  [name: string]: any;
}
