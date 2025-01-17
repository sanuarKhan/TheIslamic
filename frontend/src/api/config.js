import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "https://theislamic.onrender.com";

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000, // 30 seconds timeout
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle specific HTTP errors
      console.error("API Error:", error.response.status, error.response.data);
    }
    return Promise.reject(error);
  }
);
