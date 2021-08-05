import axios from "axios";
const $axios = axios.create({
    // withCredentials: true,
    baseURL: process.env.VUE_APP_URL_BACKEND
})

// $axios.interceptors.request.use(config => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//     config.headers['Content-Language'] = localStorage.getItem('localization');
//     return config
// })

export default $axios;

