import axios from "axios";

const api = axios.create({
   baseURL: "https://vehicle-management-rental-system-1.onrender.com/api/v1",
   headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },

  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,

  (error) => {

    if (error.response?.status === 401) {

      console.error("Unauthorized - redirecting to login");

      localStorage.removeItem("token");

      window.location.href = "/login";
    }

    if (error.response?.status === 500) {

      console.error("Server error - please try again later");
    }

    return Promise.reject(error);
  }
);

export default api;