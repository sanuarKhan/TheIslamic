import axios from "axios";

// If REACT_APP_API_BASE_URL is not set, it will use empty string ""
// meaning it will make requests to the same domain as your frontend
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL || "";
console.log(API_BASE_URL);

const getQuranData = async () => {
  try {
    // Now the full URL will be like: http://localhost:3000/api/v1/quran
    const response = await axios.get(
      `https://theislamic.onrender.com/api/v1/quran/`
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error getting Quran data:", error);
    return [];
  }
};

export { getQuranData };
