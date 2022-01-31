import axios from 'axios';

import requestSuccess from '@api/admin/middlewares/requestSuccess';
import responseError from '@api/admin/middlewares/responseError';

const adminInstance = axios.create({
  baseURL: '/api/admin'
});

adminInstance.interceptors.request.use(requestSuccess, undefined);
adminInstance.interceptors.response.use(undefined, responseError);

export default adminInstance;
