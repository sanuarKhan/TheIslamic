import { api } from "../api/config";

const handleLogin = async (credentials) => {
  try {
    if (!credentials?.email || !credentials?.password) {
      return {
        success: false,
        message: "Email and password are required",
      };
    }

    const response = await api.post(`/api/v1/users/login`, credentials);
    console.log(response);

    if (response.data?.refreshToken) {
      localStorage.setItem("token", response.data.refreshToken);
      return {
        success: true,
        message: "Login successful",
      };
    }

    return {
      success: false,
      message: "Invalid server response",
    };
  } catch (error) {
    console.error("Error logging in:", error);
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
};

export { handleLogin };
