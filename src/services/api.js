import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3334/week10'//'https://potfolio.redirectme.net/week10'
})

export default api;