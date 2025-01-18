import { useState } from "react";
import { addQuranData } from "../../api/api";

const QuranForm = () => {
  const [formData, setFormData] = useState({
    surah_name: {
      arabic: "",
      english: "",
      bangla: "",
    },
    transliteration_english: "",
    transliteration_bangla: "",
    translation_english: "",
    translation_bangla: "",
    surah_number: "",
    ayah_number: "",
    arabicText: "",
    themes: "",
    keywords: "",
    tafsirs: [],
  });

  const [currentTafsir, setCurrentTafsir] = useState({
    source: "",
    content: "",
    language: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("surah_name.")) {
      const field = name.split(".")[1];
      setFormData((prevState) => ({
        ...prevState,
        surah_name: {
          ...prevState.surah_name,
          [field]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleTafsirChange = (e) => {
    const { name, value } = e.target;
    setCurrentTafsir({ ...currentTafsir, [name]: value });
  };

  const addTafsir = () => {
    setFormData((prevState) => ({
      ...prevState,
      tafsirs: [...prevState.tafsirs, currentTafsir],
    }));
    setCurrentTafsir({ source: "", content: "", language: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      themes: formData.themes.split(",").map((theme) => theme.trim()),
      keywords: formData.keywords.split(",").map((keyword) => keyword.trim()),
      surah_number: parseInt(formData.surah_number, 10),
      ayah_number: parseInt(formData.ayah_number, 10),
    };

    try {
      const response = await addQuranData(dataToSend);
      console.log(response.success);
      setFormData({
        surah_name: {
          arabic: "",
          english: "",
          bangla: "",
        },
        transliteration_english: "",
        transliteration_bangla: "",
        translation_english: "",
        translation_bangla: "",
        surah_number: "",
        ayah_number: "",
        arabicText: "",
        themes: "",
        keywords: "",
        tafsirs: [],
      });
      console.log("Verse added successfully:", response.data);
    } catch (error) {
      console.error(
        "Error adding verse:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg"
    >
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Add Quran Verse
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Surah Name Fields */}
        {["arabic", "english", "bangla"].map((lang) => (
          <div key={lang}>
            <label className="block text-gray-700 font-medium mb-2">
              Surah Name ({lang.charAt(0).toUpperCase() + lang.slice(1)}):
            </label>
            <input
              type="text"
              name={`surah_name.${lang}`}
              value={formData.surah_name[lang]}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder={`Enter Surah Name in ${lang}`}
              required
            />
          </div>
        ))}

        {/* Transliteration & Translation Fields */}
        {[
          "transliteration_english",
          "transliteration_bangla",
          "translation_english",
          "translation_bangla",
        ].map((field) => (
          <div key={field}>
            <label className="block text-gray-700 font-medium mb-2">
              {field
                .replace("_", " ")
                .replace(/(^|\s)[a-z]/g, (char) => char.toUpperCase())}
              :
            </label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder={`Enter ${field.replace("_", " ")}`}
            />
          </div>
        ))}

        {/* Numeric Fields */}
        {["surah_number", "ayah_number"].map((field) => (
          <div key={field}>
            <label className="block text-gray-700 font-medium mb-2">
              {field
                .replace("_", " ")
                .replace(/(^|\s)[a-z]/g, (char) => char.toUpperCase())}
              :
            </label>
            <input
              type="number"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder={`Enter ${field.replace("_", " ")}`}
              required
            />
          </div>
        ))}
      </div>

      {/* Arabic Text Field */}
      <div className="mt-4">
        <label className="block text-gray-700 font-medium mb-2">
          Arabic Text:
        </label>
        <textarea
          name="arabicText"
          value={formData.arabicText}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Enter Arabic Text"
        ></textarea>
      </div>

      {/* Themes & Keywords */}
      {["themes", "keywords"].map((field) => (
        <div className="mt-4" key={field}>
          <label className="block text-gray-700 font-medium mb-2">
            {field.charAt(0).toUpperCase() + field.slice(1)} (comma-separated):
          </label>
          <input
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder={`Enter ${field} (e.g., theme1, theme2)`}
          />
        </div>
      ))}

      {/* Tafsirs Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Tafsirs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["source", "content", "language"].map((field) => (
            <div key={field}>
              <label className="block text-gray-700 font-medium mb-2">
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input
                type="text"
                name={field}
                value={currentTafsir[field]}
                onChange={handleTafsirChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                placeholder={`Enter Tafsir ${field}`}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addTafsir}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Add Tafsir
        </button>

        {/* Display Added Tafsirs */}
        <ul className="mt-4 space-y-2">
          {formData.tafsirs.map((tafsir, index) => (
            <li
              key={index}
              className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm text-sm"
            >
              <strong>{tafsir.source}</strong> ({tafsir.language}):{" "}
              {tafsir.content}
            </li>
          ))}
        </ul>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-8 w-full px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-lg font-medium"
      >
        Add Verse
      </button>
    </form>
  );
};

export default QuranForm;
