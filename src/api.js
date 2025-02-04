import axios from 'axios';
// add connection to our api application
// axios is an api connection library

const api = axios.create({
    baseURL: 'https://lukemcg27.netlify.app/portfolio',
});

export default api;
