import Axios from 'axios';
import Qs from 'qs';
import moment from 'moment';
import Config from 'react-native-config';
import AuthToken from '../../auth/authToken';
const authAxios = Axios.create({
  baseURL: 'http://176.58.124.65:8080/api',
  paramsSerializer: function (params) {
    return Qs.stringify(params, {
      arrayFormat: 'brackets',
      filter: (prefix, value) => {
        if (moment.isMoment(value) || value instanceof Date) {
          return value.toISOString();
        }
        return value;
      },
    });
  },
});

authAxios.interceptors.request.use(
  async function (options) {
    const token = await AuthToken.get();
    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }
    options.headers['Accept-Language'] = 'es';
    return options;
  },
  function (error) {
    console.log('Request error: ', error);
    return Promise.reject(error);
  },
);

export default authAxios;
