import axios from 'axios';
// add connection to our api application
// axios is an api connection library

const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export default api;
