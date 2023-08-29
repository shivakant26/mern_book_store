import axios from "axios";
const headers = new Headers();

const Instance = axios.create({
    baseURL:"http://localhost:8100/v1",
    headers:headers,
})


Instance.interceptors.request.use(
    config => {
      const token = localStorage.getItem('admin-token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

export default Instance;