import { register } from "../api/api.js";

const handleRegister = async (user) => {
  try {
    await register(user);
    alert("Registration successful!");
    window.location.href = "/login";
  } catch (error) {
    console.error("Error registering:", error);
    alert(error.response?.data?.message || "Registration failed!");
  }
};

export { handleRegister };
