import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: 'https://jobs.github.com/'
});

export default axiosInstance;
