import axios from "axios";
import {API_VERSION, BASE_URL} from './config';


const axiosInstance = axios.create({
    baseURL: `${BASE_URL}${API_VERSION}`,
    timeout: 5000,
    headers: {
        // 'Authorization': getCokies('access_token') ? 'Bearer ' + getCokies('access_token') : null,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});


// Interceptor for refreshing access token automatically
// axiosInstance.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config;

//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;

//             try {
//                 const refresh_token = localStorage.getItem('refresh_token');

//                 const res = await axios.post(`${baseURL}/api/owner/token/refresh/`, {
//                     refresh: refresh_token
//                 });

//                 localStorage.setItem('access_token', res.data.access);
//                 axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + res.data.access;
//                 originalRequest.headers['Authorization'] = 'Bearer ' + res.data.access;

//                 return axiosInstance(originalRequest);
//             } catch (err) {
//                 console.log("Refresh token expired.");
//                 // Redirect to login page or logout
//             }
//         }

//         return Promise.reject(error);
//     }
// );

export default axiosInstance;