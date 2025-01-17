import axios from "axios";

const handleRegister = async (user) => {
  try {
    const response = await axios.post("/api/v1/users/register", user);
    alert("Registration successful!");
    window.location.href = "/login";
  } catch (error) {
    console.error("Error registering:", error);
    alert(error.response?.data?.message || "Registration failed!");
  }
};

export { handleRegister };