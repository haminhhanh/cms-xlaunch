import { history } from 'umi';
import { extend } from 'umi-request';
import { ENVIRONMENTS } from '../constants/environments';
import ERROR_CODES from './error_code';

export const web = extend({
  prefix: ENVIRONMENTS.APP_URL,
});

export const api = extend({
  prefix: ENVIRONMENTS.API_URL,
  errorHandler: (res) => {
    // @ts-ignore
    if (res?.code === 503) {
      return history.push('/service-temporary-unavailable');
    }
    // @ts-ignore
    if (res?.code && ERROR_CODES[res.code]) {
      // @ts-ignore
      throw ERROR_CODES[res.code];
    }
  },
});

export const apiMeta = extend({
  prefix: ENVIRONMENTS.API_META_URL,
  errorHandler: (res) => {
    if (res?.data?.code === 503) {
      return history.push('/service-temporary-unavailable');
    }
    // @ts-ignore
    if (res?.data?.code && ERROR_CODES[res?.data?.code]) {
      // @ts-ignore
      throw ERROR_CODES[res?.data?.code];
    }
  },
});

// WEB
export const WEB_PATHS = {
  APP_CONFIG: '/assets/configs/appConfig.json',
};
