import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3018",
  withCredentials: true, // For cookies if you're using them
});

// Add a request interceptor to automatically include the token
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage - use the same key name that's set during login
    const token = localStorage.getItem("token");

    // If token exists, add to headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Optional: Add a response interceptor to handle common errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 errors (unauthorized) - could redirect to login page
    if (error.response && error.response.status === 401) {
      console.log(
        "Sessão expirada ou token inválido. Redirecionando para login...",
      );
      // You could redirect here if needed
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default api;
