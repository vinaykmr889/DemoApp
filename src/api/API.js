import axios from '../../node_modules/axios';
import qs from '../../node_modules/qs';

const responseBody = res => res.data;
const handleErrors = error => error;
const requests = {

  get: (url, data) => axios
    .get(url, data)
    .then(responseBody)
    .catch(handleErrors),

  getWithQs: (url, data) => axios
    .get(url, {
      params: { ...data.params },
      paramsSerializer: params => qs.stringify(params, { indices: false }),
    })
    .then(responseBody)
    .catch(handleErrors),

  post: (url, data) => axios
    .post(url, data)
    .then(responseBody)
    .catch(handleErrors),

  put: (url, data) => axios
    .put(url, data)
    .then(responseBody)
    .catch(handleErrors),

  delete: (url, data) => axios
    .delete(url, data)
    .then(responseBody)
    .catch(handleErrors),

};

const DataFetchApi = {
  getDataFromApi: () => requests.get('/photos'),

};

export default {
  DataFetchApi,
};
