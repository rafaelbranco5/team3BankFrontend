import axios from 'axios';

const serverInstance = axios.create({
    // API Gateway URL
    baseURL: 'http://localhost:9002',
});
export default serverInstance;