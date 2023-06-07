import axios from 'axios';

export const Axios = axios.create({
    baseURL: 'http://localhost:7001',
    timeout: 6000
});
