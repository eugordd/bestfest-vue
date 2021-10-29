import axios from 'axios';

import requestSuccess from '@api/admin/middlewares/requestSuccess';
import responseError from '@api/admin/middlewares/responseError';

const baseURL = 'http://localhost:8080/';

const adminInstance = axios.create({
  baseURL
});

adminInstance.interceptors.request.use(requestSuccess, undefined);
adminInstance.interceptors.response.use(undefined, responseError);

export default adminInstance;
