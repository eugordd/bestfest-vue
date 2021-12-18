import axios from 'axios';

const baseURL = 'http://localhost:8080/app';

const userInstance = axios.create({
  baseURL
});

export default userInstance;
