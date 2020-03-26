import axios from 'axios';

const api = axios.create({
    baseURL: 'http://andrejr-com-br.umbler.net'
});

export default api;