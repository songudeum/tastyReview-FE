import axios from 'axios';
const BASE_URL = 'http://kdt-sw-5-2-team08.elicecoding.com/';

export default axios.create({
    baseURL: BASE_URL,
});
