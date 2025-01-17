import axios from "axios";

const handleLogin = async (credentials) => {
  try {
    const response = await axios.post("/api/v1/users/login", credentials);
    localStorage.setItem("token", response.data.refreshToken);
    alert("Login successful!");
    window.location.href = "/admin";
  } catch (error) {
    console.error("Error logging in:", error);
    alert(error.response?.data?.message || "Login failed!");
  }
};
 export { handleLogin };