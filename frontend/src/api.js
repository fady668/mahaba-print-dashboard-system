import axios from "axios";
import { ACCESS_TOKEN } from "./Constants";

const api = axios.create({
<<<<<<< HEAD
    baseURL: "http://localhost:8000/",
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
=======
  baseURL: "https://mahbaprintdashboardsystem-e3f57b0737df.herokuapp.com/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
>>>>>>> a1cb958da27acc1351a48af96cb1818e4fe5c5ca
);

export default api;
