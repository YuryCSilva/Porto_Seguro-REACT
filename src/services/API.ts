import axios from 'axios';

const API_KEY = "https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/hospital";

const API = axios.create({
    baseURL: API_KEY
})

export default API;