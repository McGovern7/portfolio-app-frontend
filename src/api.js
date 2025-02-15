import axios from 'axios';
// add connection to our api application
// axios is an api connection library

const api = axios.create({
    baseURL: 'https://portfolio-app-backend-ay3g.onrender.com',
});

export default api;
