import axios from "axios";

// Environment Variables
const API_BASE_URL = import.meta.env.VITE_API_URL || "";

/**
 * Fetches Quran data from the API
 * @returns {Promise<Array>} Array of Quran data
 */
const getQuranData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/quran/`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching Quran data:", error);
    throw new Error("Failed to fetch Quran data");
  }
};

/**
 * Adds new Quran data to the API
 * @param {Object} data - The Quran data to be added
 * @returns {Promise<Object>} Response from the server
 */
const addQuranData = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/v1/quran/add`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding Quran data:", error);
    throw new Error("Failed to add Quran data");
  }
};

/**
 * Registers a new user
 * @param {Object} user - User registration details
 * @returns {Promise<Object>} Response from the server
 */
const register = async (user) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/v1/users/register`,
      user
    );
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw new Error("Failed to register user");
  }
};

/**
 * Authenticates a user
 * @param {Object} credentials - User login credentials
 * @returns {Promise<Object>} Response containing authentication data
 */
const login = async (credentials) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/v1/users/login`,
      credentials
    );
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error("Failed to login");
  }
};

/**
 * Logs out the current user
 * @returns {Promise<Object>} Response from the server
 */
const logout = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/v1/users/logout`);
    return response.data;
  } catch (error) {
    console.error("Error logging out:", error);
    throw new Error("Failed to logout");
  }
};

export { getQuranData, login, register, addQuranData, logout };
