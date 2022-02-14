import axios from 'axios';
// import config from '../../config.json';

export const api = axios.create({
//   baseURL: config.API_SPACETODAY,
baseURL: 'http://192.168.0.119:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

