import axios from "axios";

const getQuranData = async () => {
  try {
    const response = await axios.get("/api/v1/quran");
    return response.data.data;
  } catch (error) {
    console.error("Error getting Quran data:", error);
    return [];
  }
};

export { getQuranData };
