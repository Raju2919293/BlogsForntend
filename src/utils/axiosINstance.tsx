import axios from "axios";

const api = axios.create({
    baseURL: "https://api.example.com",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
}, Promise.reject);


export default api;
