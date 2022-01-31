import axios from 'axios';

const userInstance = axios.create({
  baseURL: '/api/app'
});

export default userInstance;
