import axios from 'axios';

const baseURL = 'http://localhost:8080/';

const userInstance = axios.create({
  baseURL
});

export default userInstance;
