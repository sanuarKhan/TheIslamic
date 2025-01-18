import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "https://theislamic.onrender.com";

const handleLogin = async (credentials) => {
  try {
    if (!credentials?.email || !credentials?.password) {
      return {
        success: false,
        message: "Email and password are required",
      };
    }

    const response = await axios({
      method: "POST",
      url: `${API_URL}/api/v1/users/login`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: credentials,
      timeout: 30000,
    });

    if (response.data?.refreshToken) {
      localStorage.setItem("token", response.data.refreshToken);
      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
      return {
        success: true,
        message: "Login successful",
        user: response.data.user,
      };
    }

    return {
      success: false,
      message: "Invalid server response",
    };
  } catch (error) {
    console.error("Error logging in:", error);

    if (error.code === "ECONNABORTED") {
      return {
        success: false,
        message: "Request timed out. Please try again.",
      };
    }

    if (error.response?.status === 405) {
      return {
        success: false,
        message: "Invalid request method. Please contact support.",
      };
    }

    return {
      success: false,
      message:
        error.response?.data?.message || "Login failed. Please try again.",
    };
  }
};

export { handleLogin };
