import axios from 'axios';
import { ACCESS_TOKEN } from './constants';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

export const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
};

export default api;