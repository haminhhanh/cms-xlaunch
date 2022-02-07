declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module 'rc-calendar/lib/locale/en_US';
declare module 'rc-calendar/lib/Picker';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
