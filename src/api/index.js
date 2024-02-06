import axios from 'axios'


export const apiV1Instance = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
    responseType: 'json',
    headers: {
        Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : undefined
    }
})
