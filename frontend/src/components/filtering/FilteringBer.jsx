const FilteringBer = ({ onFilter }) => {
  // State for filters
  //   const [filters, setFilters] = useState({
  //     surahNumber: "",
  //     ayahNumber: "",
  //     keyword: "",
  //     theme: "",
  //   });

  // Handle input changes
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFilters({ ...filters, [name]: value });
  //   };

  // Handle form submission
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     onFilter(filters); // Pass filters to the parent component
  //   };

  // Handle reset
  //   const handleReset = () => {
  //     setFilters({
  //       surahNumber: "",
  //       ayahNumber: "",
  //       keyword: "",
  //       theme: "",
  //     });
  //     onFilter({}); // Reset filters in parent component
  //   };

  return (
    <div className="bg-white shadow-md rounded-lg p-5 w-full flex justify-between gap-10">
      <form className="flex justify-between items-end gap-16">
        {/* Surah Number */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Surah Number</label>
          <input
            type="number"
            name="surahNumber"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter Surah"
          />
        </div>

        {/* Ayah Number */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Ayah Number</label>
          <input
            type="number"
            name="ayahNumber"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter Ayah"
          />
        </div>

        {/* Keyword */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Keyword</label>
          <input
            type="text"
            name="keyword"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter Keyword"
          />
        </div>

        {/* Theme */}
        <div className="flex flex-col">
          <label className="text-gray-600 mb-2">Theme</label>
          <select
            name="theme"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Select Theme</option>
            <option value="faith">Faith</option>
            <option value="prayer">Prayer</option>
            <option value="charity">Charity</option>
            <option value="patience">Patience</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-10">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Apply
          </button>
          <button
            type="button"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilteringBer;
